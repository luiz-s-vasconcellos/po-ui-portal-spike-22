import{r as t,t as r}from"./chunk-zystk1pz.js";import{$i as pt$1,$r as VN,Ai as hm,Br as Qn,Cr as KP,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Kr as S9,Lt as bae,M as Ef,Mr as O$1,Ni as hw,Nn as x4,Qn as C9,Sa as zO,U as Hae,Ur as RN,Vt as doe,Wi as m0,Wn as AN,Wt as eb,Yr as TE,Zn as Bx,_a as wn,_i as e_,_t as Sn,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,ea as q,en as hoe,fa as uv,fn as ni,ga as wN,gn as poe,hr as I,i as _a,in as kte,j as Ec,k as D4,ki as he,na as qP,nr as D9,oi as Zx,or as FM,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,sr as FN,ti as Wx,ua as ug,ui as be,vr as JO,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var Ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&Kc(0,`po-lookup`,0)},dependencies:[eb],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-lookup-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,tt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ae],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=f(hw);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,c=t(m,[`filterParams`,`advancedFilters`]),p=r(r(r({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Oe=(()=>{class a{sampleFilterService=f(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Sn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[be([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let c=Bx();Ac(0,`po-lookup`,1),RE(`ngModelChange`,function(m){return Jv(c),DN(o.lookup,m)||(o.lookup=m),e_(m)}),pt$1(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`po-container`,2)(3,`div`,3),Kc(4,`po-info`,4)(5,`po-info`,5),ug()(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`po-input`,6),RE(`ngModelChange`,function(m){return Jv(c),DN(o.label,m)||(o.label=m),e_(m)}),ug(),p0(),Ac(10,`po-checkbox-group`,7),RE(`ngModelChange`,function(m){return Jv(c),DN(o.columnsName,m)||(o.columnsName=m),e_(m)}),pt$1(`p-change`,function(){return o.updateColumns()}),ug(),p0(),Ac(11,`po-select`,8),RE(`ngModelChange`,function(m){return Jv(c),DN(o.fieldLabel,m)||(o.fieldLabel=m),e_(m)}),ug(),p0(),Ac(12,`po-select`,9),RE(`ngModelChange`,function(m){return Jv(c),DN(o.fieldValue,m)||(o.fieldValue=m),e_(m)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(m){return Jv(c),DN(o.filterService,m)||(o.filterService=m),e_(m)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(m){return Jv(c),DN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),e_(m)}),ug(),p0(),Ac(15,`po-input`,12),RE(`ngModelChange`,function(m){return Jv(c),DN(o.help,m)||(o.help=m),e_(m)}),ug(),p0(),Ac(16,`po-input`,13),RE(`ngModelChange`,function(m){return Jv(c),DN(o.helperText,m)||(o.helperText=m),e_(m)}),ug(),p0(),Ac(17,`po-input`,14),RE(`ngModelChange`,function(m){return Jv(c),DN(o.placeholder,m)||(o.placeholder=m),e_(m)}),ug(),p0(),Ac(18,`po-input`,15),RE(`ngModelChange`,function(m){return Jv(c),DN(o.literals,m)||(o.literals=m),e_(m)}),pt$1(`p-change`,function(){return o.changeLiterals()}),ug(),p0(),Ac(19,`po-input`,16),RE(`ngModelChange`,function(m){return Jv(c),DN(o.formatField,m)||(o.formatField=m),e_(m)}),pt$1(`p-change`,function(m){return o.onFieldFormatChange(m)}),ug(),p0(),Ac(20,`po-checkbox-group`,17),RE(`ngModelChange`,function(m){return Jv(c),DN(o.properties,m)||(o.properties=m),e_(m)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(m){return Jv(c),DN(o.spacing,m)||(o.spacing=m),e_(m)}),ug(),p0(),Ac(22,`po-radio-group`,19),RE(`ngModelChange`,function(m){return Jv(c),DN(o.size,m)||(o.size=m),e_(m)}),ug(),p0(),Ac(23,`po-textarea`,20),RE(`ngModelChange`,function(m){return Jv(c),DN(o.advancedFilters,m)||(o.advancedFilters=m),e_(m)}),pt$1(`p-change`,function(){return o.changeAdvancedFilters()}),ug(),p0(),Ac(24,`div`,3)(25,`po-button`,21),pt$1(`p-click`,function(){return o.restore()}),ug()()()}l&2&&(TE(`ngModel`,o.lookup),cE(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),m0(),Hp(4),cE(`p-value`,o.lookup),Hp(),cE(`p-value`,o.event),Hp(4),TE(`ngModel`,o.label),m0(),Hp(),TE(`ngModel`,o.columnsName),cE(`p-options`,o.columnsOptions),m0(),Hp(),TE(`ngModel`,o.fieldLabel),cE(`p-options`,o.fieldLabelOptions),m0(),Hp(),TE(`ngModel`,o.fieldValue),cE(`p-options`,o.fieldValueOptions),m0(),Hp(),TE(`ngModel`,o.filterService),m0(),Hp(),TE(`ngModel`,o.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,o.help),m0(),Hp(),TE(`ngModel`,o.helperText),m0(),Hp(),TE(`ngModel`,o.placeholder),m0(),Hp(),TE(`ngModel`,o.literals),m0(),Hp(),TE(`ngModel`,o.formatField),m0(),Hp(),TE(`ngModel`,o.properties),cE(`p-options`,o.propertiesOptions),m0(),Hp(),TE(`ngModel`,o.spacing),cE(`p-options`,o.typeSpacing),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0(),Hp(),TE(`ngModel`,o.advancedFilters),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ec,Ef,l4,D4,eb,kte,poe,doe,hoe],encapsulation:2,changeDetection:1})}return a})();var ot=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-lookup
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-labs`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ot,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Oe],encapsulation:2,changeDetection:1})}return a})();var lt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=f(O);notification=f(Ou);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[be([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let c=Bx();Ac(0,`div`,1),Kc(1,`po-info`,2),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),RE(`ngModelChange`,function(m){return Jv(c),DN(o.hero,m)||(o.hero=m),e_(m)}),ug(),p0(),Ac(7,`po-select`,4),RE(`ngModelChange`,function(m){return Jv(c),DN(o.vehicle,m)||(o.vehicle=m),e_(m)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-button`,5),pt$1(`p-click`,function(){return o.startMission()}),ug()()()}if(l&2){let c=Zx(4);Hp(6),TE(`ngModel`,o.hero),cE(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,RN(10,lt)),m0(),Hp(),TE(`ngModel`,o.vehicle),cE(`p-options`,o.vehicles),m0(),Hp(2),cE(`p-disabled`,c.form.invalid||c.form.pending)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,eb,poe,hoe],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Hero`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-hero`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,mt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ve],encapsulation:2,changeDetection:1})}return a})();var pt=()=>[`nickname`,`label`];var st=()=>({modalTitle:`Heroes available for mission`});var He=(()=>{class a{service=f(O);notification=f(Ou);formBuilder=f(S9);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,hm.required],vehicle:[null,hm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[be([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Ac(0,`div`,0),Kc(1,`po-info`,1),ug(),Kc(2,`po-divider`),Ac(3,`form`,2)(4,`div`,0),Kc(5,`po-lookup`,3),p0(),Kc(6,`po-select`,4),p0(),ug(),Ac(7,`div`,0)(8,`po-button`,5),pt$1(`p-click`,function(){return o.startMission()}),ug()()()),l&2&&(Hp(3),cE(`formGroup`,o.formMission),Hp(2),cE(`p-columns`,o.columns)(`p-field-format`,RN(7,pt))(`p-filter-service`,o.service)(`p-literals`,RN(8,st)),m0(),Hp(),cE(`p-options`,o.vehicles),m0(),Hp(2),cE(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[b9,D9,C9,KP,qP,ni,Ef,eb,poe,hoe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Hero Reactive Form`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-hero-reactive-form`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ut,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,He],encapsulation:2,changeDetection:1})}return a})();var xt=()=>({modalTitle:`Select a hero`});var Be=(()=>{class a{service=f(O);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:Hae.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[be([O])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Ac(0,`div`,0),Kc(1,`po-info`,1),ug(),Kc(2,`po-divider`),Ac(3,`div`,0)(4,`po-lookup`,2),RE(`ngModelChange`,function(p){return DN(o.hero,p)||(o.hero=p),p}),ug(),p0(),ug(),Ac(5,`div`,0),Kc(6,`po-info`,3),ug()),l&2&&(Hp(4),TE(`ngModel`,o.hero),cE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,RN(6,xt)),m0(),Hp(2),cE(`p-value`,o.hero||`-`))},dependencies:[D9,BP,Ef,eb,hoe],encapsulation:2})}return a})();var bt=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Advanced Filter`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-advanced-filter`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,bt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Be],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(hw);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(q(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(q(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function vt(a,qt){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-table`,3),ug()),a&2){let r=Wx();Hp(),cE(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var We=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[be([se])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-radio-group`,1),RE(`ngModelChange`,function(p){return DN(o.filterParams,p)||(o.filterParams=p),p}),ug(),p0(),ug(),Kc(2,`po-divider`),Ac(3,`div`,0)(4,`po-lookup`,2),FN(5,`titlecase`),RE(`ngModelChange`,function(p){return DN(o.entity,p)||(o.entity=p),p}),pt$1(`p-selected`,function(p){return o.onSelected(p)}),ug(),p0(),ug(),Rx(6,vt,2,4,`div`,0)),l&2&&(Hp(),TE(`ngModel`,o.filterParams),cE(`p-options`,o.entities),m0(),Hp(3),cE(`p-help`,wN(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,wN(``,VN(5,12,o.entityLabel),` of Star Wars`)),TE(`ngModel`,o.entity),cE(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),m0(),Hp(2),Ax(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[D9,BP,Ef,eb,kte,x4,JO],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Star Wars films`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-sw-films`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ft,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,We],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{http=f(hw);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(FM(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Qe=(()=>{class a{service=f(Ge);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-lookup`,1),RE(`ngModelChange`,function(p){return DN(o.multiLookup,p)||(o.multiLookup=p),p}),pt$1(`p-change`,function(p){return o.changeOptions(p)}),ug(),p0(),Ac(2,`po-container`,2),Kc(3,`po-table`,3),ug()()),l&2&&(Hp(),TE(`ngModel`,o.multiLookup),cE(`p-multiple`,!0),m0(),Hp(2),cE(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[D9,BP,Ec,eb,x4],encapsulation:2,changeDetection:1})}return a})();var yt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Multiple`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-multiple`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,yt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Qe],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(c=>c.name.toLowerCase().includes(l)||c.cpf.includes(l)||c.phone.includes(l)||c.cep.includes(l)||c.plate.toLowerCase().includes(l)):[...this.items];return O$1({items:o,hasNext:!1}).pipe(uv(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(uv(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(uv(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac})}return a})();var Ye=(()=>{class a{service=f(ce);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[be([ce])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-lookup`,1),RE(`ngModelChange`,function(p){return DN(o.person,p)||(o.person=p),p}),ug(),p0(),ug()),l&2&&(Hp(),TE(`ngModel`,o.person),cE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),m0())},dependencies:[D9,BP,eb],encapsulation:2})}return a})();var Ft=a=>({"docs-sample-code-tabs":a});var Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Mask`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-mask`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ft,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ye],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoLookupComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Ac(24,`code`),vN(25,`po-lookup`),ug(),vN(26,` permite que o usuário digite um valor e pressione a tecla `),Ac(27,`em`),vN(28,`TAB`),ug(),vN(29,` para
buscar um registro.`),ug(),Ac(30,`blockquote`)(31,`p`),vN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),ug()(),Ac(33,`blockquote`)(34,`p`),vN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Ac(36,`a`,6),vN(37,`modelo`),ug(),vN(38,` como `),Ac(39,`code`),vN(40,`pending`),ug(),vN(41,`.`),ug()(),Ac(42,`p`),vN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Ac(44,`code`),vN(45,`po-select`),ug(),vN(46,` ou o `),Ac(47,`code`),vN(48,`po-combo`),ug(),vN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ac(50,`a`,7),vN(51,`Guia de implementação das APIs TOTVS`),ug(),vN(52,`.`),ug(),Ac(53,`p`),vN(54,`Importante:`),ug(),Ac(55,`ul`)(56,`li`)(57,`p`),vN(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),ug(),Ac(59,`pre`)(60,`code`),vN(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),ug()()(),Ac(62,`li`)(63,`p`),vN(64,`Ao utilizar a propriedade `),Ac(65,`code`),vN(66,`p-advanced-filters`),ug(),vN(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Ac(68,`code`),vN(69,`po-dynamic-form`),ug(),vN(70,`. Em aplicações que não importam o `),Ac(71,`code`),vN(72,`PoModule`),ug(),vN(73,`, como projetos
`),Ac(74,`em`),vN(75,`standalone`),ug(),vN(76,` ou que utilizam módulos específicos, é necessário importar o `),Ac(77,`code`),vN(78,`PoDynamicModule`),ug(),vN(79,`
no componente ou m\xF3dulo onde o `),Ac(80,`code`),vN(81,`po-lookup`),ug(),vN(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Ac(83,`code`),vN(84,`NG0201: No provider found for _TitleCasePipe`),ug(),vN(85,` ao abrir a busca avançada.`),ug(),Ac(86,`pre`)(87,`code`),vN(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),ug()()()(),Ac(89,`h4`),vN(90,`Tokens customizáveis`),ug(),Ac(91,`p`),vN(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(93,`blockquote`)(94,`p`),vN(95,`Para maiores informações, acesse o guia `),Ac(96,`a`,8),vN(97,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(98,`.`),ug()(),Ac(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),vN(103,`Propriedade`),ug(),Ac(104,`th`),vN(105,`Descrição`),ug(),Ac(106,`th`),vN(107,`Valor Padrão`),ug()()(),Ac(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),vN(112,`Default Values`),ug()(),Kc(113,`td`)(114,`td`),ug(),Ac(115,`tr`)(116,`td`)(117,`code`),vN(118,`--font-family`),ug()(),Ac(119,`td`),vN(120,`Família tipográfica usada`),ug(),Ac(121,`td`)(122,`code`),vN(123,`var(--font-family-theme)`),ug()()(),Ac(124,`tr`)(125,`td`)(126,`code`),vN(127,`--font-size`),ug()(),Ac(128,`td`),vN(129,`Tamanho da fonte`),ug(),Ac(130,`td`)(131,`code`),vN(132,`var(--font-size-default)`),ug()()(),Ac(133,`tr`)(134,`td`)(135,`code`),vN(136,`--text-color-placeholder`),ug()(),Ac(137,`td`),vN(138,`Cor do texto no placeholder`),ug(),Ac(139,`td`)(140,`code`),vN(141,`var(--color-neutral-light-30)`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--color`),ug()(),Ac(146,`td`),vN(147,`Cor principal do lookup`),ug(),Ac(148,`td`)(149,`code`),vN(150,`var(--color-neutral-dark-70)`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`code`),vN(154,`--border-radius`),ug()(),Ac(155,`td`),vN(156,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(157,`td`)(158,`code`),vN(159,`var(--border-radius-md)`),ug()()(),Ac(160,`tr`)(161,`td`)(162,`code`),vN(163,`--background`),ug()(),Ac(164,`td`),vN(165,`Cor de background`),ug(),Ac(166,`td`)(167,`code`),vN(168,`var(--color-neutral-light-05)`),ug()()(),Ac(169,`tr`)(170,`td`)(171,`code`),vN(172,`--text-color`),ug()(),Ac(173,`td`),vN(174,`Cor do texto`),ug(),Ac(175,`td`)(176,`code`),vN(177,`var(--color-neutral-dark-90)`),ug()()(),Ac(178,`tr`)(179,`td`)(180,`code`),vN(181,`--color-clear`),ug()(),Ac(182,`td`),vN(183,`Cor principal do icone clear`),ug(),Ac(184,`td`)(185,`code`),vN(186,`var(--color-action-default)`),ug()()(),Ac(187,`tr`)(188,`td`)(189,`strong`),vN(190,`Icon`),ug()(),Kc(191,`td`)(192,`td`),ug(),Ac(193,`tr`)(194,`td`)(195,`code`),vN(196,`--color-icon`),ug()(),Ac(197,`td`),vN(198,`Cor principal do icone pesquisar`),ug(),Ac(199,`td`)(200,`code`),vN(201,`var(--color-action-default)`),ug()()(),Ac(202,`tr`)(203,`td`)(204,`strong`),vN(205,`Hover`),ug()(),Kc(206,`td`)(207,`td`),ug(),Ac(208,`tr`)(209,`td`)(210,`code`),vN(211,`--color-hover`),ug()(),Ac(212,`td`),vN(213,`Cor principal no estado hover`),ug(),Ac(214,`td`)(215,`code`),vN(216,`var(--color-brand-01-dark)`),ug()()(),Ac(217,`tr`)(218,`td`)(219,`code`),vN(220,`--background-hover`),ug()(),Ac(221,`td`),vN(222,`Cor de background no estado hover`),ug(),Ac(223,`td`)(224,`code`),vN(225,`var(--color-brand-01-lightest)`),ug()()(),Ac(226,`tr`)(227,`td`)(228,`strong`),vN(229,`Focused`),ug()(),Kc(230,`td`)(231,`td`),ug(),Ac(232,`tr`)(233,`td`)(234,`code`),vN(235,`--color-focused`),ug()(),Ac(236,`td`),vN(237,`Cor principal no estado de focus`),ug(),Ac(238,`td`)(239,`code`),vN(240,`var(--color-action-default)`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`code`),vN(244,`--outline-color-focused`),ug()(),Ac(245,`td`),vN(246,`Cor do outline do estado de focus`),ug(),Ac(247,`td`)(248,`code`),vN(249,`var(--color-action-focus)`),ug()()(),Ac(250,`tr`)(251,`td`)(252,`strong`),vN(253,`Disabled`),ug()(),Kc(254,`td`)(255,`td`),ug(),Ac(256,`tr`)(257,`td`)(258,`code`),vN(259,`--color-disabled`),ug()(),Ac(260,`td`),vN(261,`Cor principal no estado disabled`),ug(),Ac(262,`td`)(263,`code`),vN(264,`var(--color-action-disabled)`),ug()()(),Ac(265,`tr`)(266,`td`)(267,`code`),vN(268,`--background-disabled`),ug()(),Ac(269,`td`),vN(270,`Cor de background no estado disabled`),ug(),Ac(271,`td`)(272,`code`),vN(273,`var(--color-neutral-light-20)`),ug()()(),Ac(274,`tr`)(275,`td`)(276,`code`),vN(277,`--text-color-disabled`),ug()(),Ac(278,`td`),vN(279,`Cor do texto quando campo está desabilitado`),ug(),Ac(280,`td`)(281,`code`),vN(282,`var(--color-action-disabled)`),ug()()(),Ac(283,`tr`)(284,`td`)(285,`strong`),vN(286,`Error`),ug()(),Kc(287,`td`)(288,`td`),ug(),Ac(289,`tr`)(290,`td`)(291,`code`),vN(292,`--color-error`),ug()(),Ac(293,`td`),vN(294,`Cor de background no estado de requerido`),ug(),Ac(295,`td`)(296,`code`),vN(297,`var(--color-feedback-negative-base)`),ug()()()()()(),Ac(298,`div`,9)(299,`h4`,10),vN(300,`Seletor`),ug(),Ac(301,`pre`,11),vN(302,`<po-lookup
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
`),ug()(),Ac(303,`h4`,12),vN(304,`Propriedades`),ug(),Ac(305,`table`,13)(306,`tr`,14)(307,`th`,15),vN(308,`Nome`),ug(),Ac(309,`th`,15),vN(310,`Tipo`),ug(),Ac(311,`th`,15),vN(312,`Padrão`),ug(),Ac(313,`th`,15),vN(314,`Descrição`),ug()(),Ac(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),vN(319,` (p-additional-help)`),Kc(320,`br`),ug()(),Ac(321,`div`,20),vN(322,`Deprecated`),ug()(),Ac(323,`td`,21)(324,`code`,22),vN(325,`EventEmitter`),ug()(),Ac(326,`td`,23),vN(327,`-`),ug(),Ac(328,`td`,24)(329,`em`)(330,`strong`),vN(331,`(opcional)`),ug()(),Ac(332,`p`),vN(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(334,`blockquote`)(335,`p`),vN(336,`Essa propriedade está `),Ac(337,`strong`),vN(338,`depreciada`),ug(),vN(339,` e será removida na versão `),Ac(340,`code`),vN(341,`23.x.x`),ug(),vN(342,`. Recomendamos utilizar a propriedade `),Ac(343,`code`),vN(344,`p-helper`),ug(),vN(345,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),vN(350,` p-additional-help-tooltip`),Kc(351,`br`),ug()(),Ac(352,`div`,20),vN(353,`Deprecated`),ug()(),Ac(354,`td`,21)(355,`code`,27),vN(356,`string`),ug()(),Ac(357,`td`,23),vN(358,`-`),ug(),Ac(359,`td`,24)(360,`em`)(361,`strong`),vN(362,`(opcional)`),ug()(),Ac(363,`p`),vN(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(365,`code`),vN(366,`po-helper`),ug(),vN(367,`.
`),Ac(368,`strong`),vN(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(370,`blockquote`)(371,`p`),vN(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(373,`blockquote`)(374,`p`),vN(375,`Essa propriedade está `),Ac(376,`strong`),vN(377,`depreciada`),ug(),vN(378,` e será removida na versão `),Ac(379,`code`),vN(380,`23.x.x`),ug(),vN(381,`. Recomendamos utilizar a propriedade `),Ac(382,`code`),vN(383,`p-helper`),ug(),vN(384,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),vN(389,` p-advanced-filters`),Kc(390,`br`),ug()()(),Ac(391,`td`,21)(392,`code`,28),vN(393,`Array<PoLookupAdvancedFilter>`),ug()(),Ac(394,`td`,23),vN(395,`-`),ug(),Ac(396,`td`,24)(397,`em`)(398,`strong`),vN(399,`(opcional)`),ug()(),Ac(400,`p`),vN(401,`Lista de objetos dos campos que serão criados na busca avançada.`),ug(),Ac(402,`blockquote`)(403,`p`),vN(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ug()(),Ac(405,`blockquote`)(406,`p`),vN(407,`A busca avançada é construída a partir do `),Ac(408,`code`),vN(409,`po-dynamic-form`),ug(),vN(410,`. Em aplicações que não importam o `),Ac(411,`code`),vN(412,`PoModule`),ug(),vN(413,`,
como projetos `),Ac(414,`em`),vN(415,`standalone`),ug(),vN(416,` ou que utilizam módulos específicos, é necessário importar o `),Ac(417,`code`),vN(418,`PoDynamicModule`),ug(),vN(419,`
no componente ou m\xF3dulo onde o `),Ac(420,`code`),vN(421,`po-lookup`),ug(),vN(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Ac(423,`code`),vN(424,`NG0201: No provider found for _TitleCasePipe`),ug(),vN(425,` ao abrir a busca avançada.`),ug()(),Ac(426,`p`),vN(427,`Exemplo de URL com busca avançada:`),ug(),Ac(428,`pre`)(429,`code`),vN(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),ug()(),Ac(431,`p`),vN(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),ug(),Ac(433,`pre`)(434,`code`),vN(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),ug()(),Ac(436,`p`),vN(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),Ac(438,`code`),vN(439,`initValue`),ug(),vN(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),ug(),Ac(441,`pre`)(442,`code`),vN(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),ug()()()(),Ac(444,`tr`,16)(445,`td`,17)(446,`div`,25)(447,`span`,26),vN(448,` p-append-in-body`),Kc(449,`br`),ug()()(),Ac(450,`td`,21)(451,`code`,29),vN(452,`boolean`),ug()(),Ac(453,`td`,23)(454,`p`)(455,`code`),vN(456,`false`),ug()()(),Ac(457,`td`,24)(458,`em`)(459,`strong`),vN(460,`(opcional)`),ug()(),Ac(461,`p`),vN(462,`Define que o popover (`),Ac(463,`code`),vN(464,`p-helper`),ug(),vN(465,` e/ou `),Ac(466,`code`),vN(467,`p-error-limit`),ug(),vN(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(469,`blockquote`)(470,`p`),vN(471,`Quando utilizado com `),Ac(472,`code`),vN(473,`p-helper`),ug(),vN(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(475,`tr`,16)(476,`td`,17)(477,`div`,25)(478,`span`,26),vN(479,` p-auto-focus`),Kc(480,`br`),ug()()(),Ac(481,`td`,21)(482,`code`,29),vN(483,`boolean`),ug()(),Ac(484,`td`,23)(485,`p`)(486,`code`),vN(487,`false`),ug()()(),Ac(488,`td`,24)(489,`em`)(490,`strong`),vN(491,`(opcional)`),ug()(),Ac(492,`p`),vN(493,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(494,`blockquote`)(495,`p`),vN(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(497,`tr`,16)(498,`td`,17)(499,`div`,25)(500,`span`,26),vN(501,` p-auto-height`),Kc(502,`br`),ug()()(),Ac(503,`td`,21)(504,`code`,29),vN(505,`boolean`),ug()(),Ac(506,`td`,23)(507,`p`)(508,`code`),vN(509,`false`),ug()()(),Ac(510,`td`,24)(511,`em`)(512,`strong`),vN(513,`(opcional)`),ug()(),Ac(514,`p`),vN(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ug()()(),Ac(516,`tr`,16)(517,`td`,17)(518,`div`,18)(519,`span`,19),vN(520,` (p-change)`),Kc(521,`br`),ug()()(),Ac(522,`td`,21)(523,`code`,22),vN(524,`EventEmitter`),ug()(),Ac(525,`td`,23),vN(526,`-`),ug(),Ac(527,`td`,24)(528,`em`)(529,`strong`),vN(530,`(opcional)`),ug()(),Ac(531,`p`),vN(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),ug()()(),Ac(533,`tr`,16)(534,`td`,17)(535,`div`,18)(536,`span`,19),vN(537,` (p-change-model)`),Kc(538,`br`),ug()()(),Ac(539,`td`,21)(540,`code`,22),vN(541,`EventEmitter`),ug()(),Ac(542,`td`,23),vN(543,`-`),ug(),Ac(544,`td`,24)(545,`em`)(546,`strong`),vN(547,`(opcional)`),ug()(),Ac(548,`p`),vN(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(550,`code`),vN(551,`setValue`),ug(),vN(552,`, `),Ac(553,`code`),vN(554,`patchValue`),ug(),vN(555,`, carregamento assíncrono).`),ug(),Ac(556,`p`),vN(557,`Diferentemente do `),Ac(558,`code`),vN(559,`p-change`),ug(),vN(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(561,`code`),vN(562,`p-change-model`),ug(),vN(563,` cobre todos os cenários de alteração de valor.`),ug(),Ac(564,`p`),vN(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(566,`tr`,16)(567,`td`,17)(568,`div`,18)(569,`span`,19),vN(570,` (p-change-visible-columns)`),Kc(571,`br`),ug()()(),Ac(572,`td`,21)(573,`code`,22),vN(574,`EventEmitter`),ug()(),Ac(575,`td`,23),vN(576,`-`),ug(),Ac(577,`td`,24)(578,`em`)(579,`strong`),vN(580,`(opcional)`),ug()(),Ac(581,`p`),vN(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(583,`p`),vN(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(585,`tr`,16)(586,`td`,17)(587,`div`,25)(588,`span`,26),vN(589,` p-clean`),Kc(590,`br`),ug()()(),Ac(591,`td`,21)(592,`code`,29),vN(593,`boolean`),ug()(),Ac(594,`td`,23),vN(595,`-`),ug(),Ac(596,`td`,24)(597,`p`),vN(598,`Exibe um ícone que permite limpar o campo.`),ug()()(),Ac(599,`tr`,16)(600,`td`,17)(601,`div`,18)(602,`span`,19),vN(603,` (p-restore-column-manager)`),Kc(604,`br`),ug()()(),Ac(605,`td`,21)(606,`code`,22),vN(607,`EventEmitter`),ug()(),Ac(608,`td`,23),vN(609,`-`),ug(),Ac(610,`td`,24)(611,`em`)(612,`strong`),vN(613,`(opcional)`),ug()(),Ac(614,`p`),vN(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(616,`p`),vN(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(618,`tr`,16)(619,`td`,17)(620,`div`,25)(621,`span`,26),vN(622,` p-columns`),Kc(623,`br`),ug()()(),Ac(624,`td`,21)(625,`code`,30),vN(626,`Array<PoLookupColumn>`),ug()(),Ac(627,`td`,23),vN(628,`-`),ug(),Ac(629,`td`,24)(630,`em`)(631,`strong`),vN(632,`(opcional)`),ug()(),Ac(633,`p`),vN(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),ug()()(),Ac(635,`tr`,16)(636,`td`,17)(637,`div`,25)(638,`span`,26),vN(639,` p-compact-label`),Kc(640,`br`),ug()()(),Ac(641,`td`,21)(642,`code`,29),vN(643,`boolean`),ug()(),Ac(644,`td`,23)(645,`p`)(646,`code`),vN(647,`false`),ug()()(),Ac(648,`td`,24)(649,`em`)(650,`strong`),vN(651,`(opcional)`),ug()(),Ac(652,`p`),vN(653,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(654,`p`),vN(655,`Quando habilitado (`),Ac(656,`code`),vN(657,`true`),ug(),vN(658,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(659,`ul`)(660,`li`)(661,`code`),vN(662,`po-label`),ug()(),Ac(663,`li`)(664,`code`),vN(665,`p-requirement (showRequired)`),ug()(),Ac(666,`li`)(667,`code`),vN(668,`po-helper`),ug()()(),Ac(669,`p`),vN(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(671,`p`),vN(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(673,`ul`)(674,`li`)(675,`code`),vN(676,`--field-container-title-justify`),ug()(),Ac(677,`li`)(678,`code`),vN(679,`--field-container-title-flex`),ug()()(),Ac(680,`p`),vN(681,`Exemplo:`),ug(),Ac(682,`pre`)(683,`code`),vN(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(685,`p`),vN(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(687,`tr`,16)(688,`td`,17)(689,`div`,25)(690,`span`,26),vN(691,` p-disabled`),Kc(692,`br`),ug()()(),Ac(693,`td`,21)(694,`code`,29),vN(695,`boolean`),ug()(),Ac(696,`td`,23)(697,`p`),vN(698,`false`),ug()(),Ac(699,`td`,24)(700,`em`)(701,`strong`),vN(702,`(opcional)`),ug()(),Ac(703,`p`),vN(704,`Indica que o campo será desabilitado.`),ug()()(),Ac(705,`tr`,16)(706,`td`,17)(707,`div`,25)(708,`span`,26),vN(709,` p-error-limit`),Kc(710,`br`),ug()()(),Ac(711,`td`,21)(712,`code`,29),vN(713,`boolean`),ug()(),Ac(714,`td`,23)(715,`p`)(716,`code`),vN(717,`false`),ug()()(),Ac(718,`td`,24)(719,`em`)(720,`strong`),vN(721,`(opcional)`),ug()(),Ac(722,`p`),vN(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(724,`blockquote`)(725,`p`),vN(726,`Caso essa propriedade seja definida como `),Ac(727,`code`),vN(728,`true`),ug(),vN(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(730,`tr`,16)(731,`td`,17)(732,`div`,25)(733,`span`,26),vN(734,` p-field-error-message`),Kc(735,`br`),ug()()(),Ac(736,`td`,21)(737,`code`,27),vN(738,`string`),ug()(),Ac(739,`td`,23),vN(740,`-`),ug(),Ac(741,`td`,24)(742,`em`)(743,`strong`),vN(744,`(opcional)`),ug()(),Ac(745,`p`),vN(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(747,`blockquote`)(748,`p`),vN(749,`Necessário que a propriedade `),Ac(750,`code`),vN(751,`p-required`),ug(),vN(752,` esteja habilitada.`),ug()()()(),Ac(753,`tr`,16)(754,`td`,17)(755,`div`,25)(756,`span`,26),vN(757,` p-field-format`),Kc(758,`br`),ug()()(),Ac(759,`td`,21)(760,`code`,31),vN(761,`((value) => string) `),ug(),Ac(762,`code`,32),vN(763,` Array<string>`),ug()(),Ac(764,`td`,23),vN(765,`-`),ug(),Ac(766,`td`,24)(767,`em`)(768,`strong`),vN(769,`(opcional)`),ug()(),Ac(770,`p`),vN(771,`Formato de exibição do campo.`),ug(),Ac(772,`p`),vN(773,`Recebe uma função que deve retornar uma `),Ac(774,`em`),vN(775,`string`),ug(),vN(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),ug(),Ac(777,`pre`)(778,`code`),vN(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),ug()(),Ac(780,`blockquote`)(781,`p`),vN(782,`Esta propriedade sobrepõe o valor da propriedade `),Ac(783,`code`),vN(784,`p-field-label`),ug(),vN(785,` na descrição do campo.`),ug()(),Ac(786,`p`),vN(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),ug(),Ac(788,`pre`)(789,`code`),vN(790,`<po-lookup
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
`),ug()(),Ac(791,`blockquote`)(792,`p`),vN(793,`Será utilizado `),Ac(794,`code`),vN(795,`-`),ug(),vN(796,` como separador.`),ug()()()(),Ac(797,`tr`,16)(798,`td`,17)(799,`div`,25)(800,`span`,26),vN(801,` p-field-label`),Kc(802,`br`),ug()()(),Ac(803,`td`,21)(804,`code`,27),vN(805,`string`),ug()(),Ac(806,`td`,23),vN(807,`-`),ug(),Ac(808,`td`,24)(809,`p`),vN(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),ug()()(),Ac(811,`tr`,16)(812,`td`,17)(813,`div`,25)(814,`span`,26),vN(815,` p-field-value`),Kc(816,`br`),ug()()(),Ac(817,`td`,21)(818,`code`,27),vN(819,`string`),ug()(),Ac(820,`td`,23),vN(821,`-`),ug(),Ac(822,`td`,24)(823,`p`),vN(824,`Indica a coluna que será utilizada como valor do campo.`),ug(),Ac(825,`blockquote`)(826,`p`),vN(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),ug()()()(),Ac(828,`tr`,16)(829,`td`,17)(830,`div`,25)(831,`span`,26),vN(832,` p-filter-params`),Kc(833,`br`),ug()()(),Ac(834,`td`,21)(835,`code`,33),vN(836,`any`),ug()(),Ac(837,`td`,23),vN(838,`-`),ug(),Ac(839,`td`,24)(840,`em`)(841,`strong`),vN(842,`(opcional)`),ug()(),Ac(843,`p`),vN(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Ac(845,`code`),vN(846,`PoLookupFilter`),ug(),vN(847,`.`),ug()()(),Ac(848,`tr`,16)(849,`td`,17)(850,`div`,25)(851,`span`,26),vN(852,` p-filter-service`),Kc(853,`br`),ug()()(),Ac(854,`td`,21)(855,`code`,27),vN(856,`string `),ug(),Ac(857,`code`,34),vN(858,` PoLookupFilter`),ug()(),Ac(859,`td`,23),vN(860,`-`),ug(),Ac(861,`td`,24)(862,`p`),vN(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Ac(864,`code`),vN(865,`PoLookupFilter`),ug(),vN(866,` ou uma URL.`),ug(),Ac(867,`p`),vN(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),ug(),Ac(869,`pre`)(870,`code`),vN(871,`url + ?page=1&pageSize=20&filter=Peter
`),ug()(),Ac(872,`p`),vN(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Ac(874,`code`),vN(875,`order`),ug(),vN(876,`, por exemplo:`),ug(),Ac(877,`ul`)(878,`li`)(879,`p`),vN(880,`Coluna decrescente:`),ug(),Ac(881,`pre`)(882,`code`),vN(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),ug()()(),Ac(884,`li`)(885,`p`),vN(886,`Coluna ascendente:`),ug(),Ac(887,`pre`)(888,`code`),vN(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),ug()()()(),Ac(890,`p`),vN(891,`Se for definido a propriedade `),Ac(892,`code`),vN(893,`p-filter-params`),ug(),vN(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Ac(895,`code`),vN(896,`{ age: 23 }`),ug(),vN(897,` a URL ficaria:`),ug(),Ac(898,`pre`)(899,`code`),vN(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ug()(),Ac(901,`p`),vN(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),ug(),Ac(903,`pre`)(904,`code`),vN(905,`model = 1234;

GET url/1234
`),ug()(),Ac(906,`p`),vN(907,`Caso estiver com múltipla seleção habilitada:`),ug(),Ac(908,`pre`)(909,`code`),vN(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),ug()(),Ac(911,`blockquote`)(912,`p`),vN(913,`Esta URL deve retornar e receber os dados no padrão de `),Ac(914,`a`,7),vN(915,`API do PO UI`),ug(),vN(916,` e utiliza os valores
definidos nas propriedades `),Ac(917,`code`),vN(918,`p-field-label`),ug(),vN(919,` e `),Ac(920,`code`),vN(921,`p-field-value`),ug(),vN(922,` para a construção do `),Ac(923,`code`),vN(924,`po-lookup`),ug(),vN(925,`.`),ug()(),Ac(926,`p`),vN(927,`Caso o usuário digite um valor e pressione a tecla `),Ac(928,`em`),vN(929,`TAB`),ug(),vN(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Ac(931,`a`,35),vN(932,`encodeURIComponent`),ug(),vN(933,`
e concatenado na URL da seguinte forma:`),ug(),Ac(934,`pre`)(935,`code`),vN(936,`url/valor%20que%20se%20deseja%20filtrar
`),ug()(),Ac(937,`blockquote`)(938,`p`),vN(939,`Quando informado um serviço que implemente a interface `),Ac(940,`code`),vN(941,`PoLookupFilter`),ug(),vN(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),ug()()()(),Ac(943,`tr`,16)(944,`td`,17)(945,`div`,25)(946,`span`,26),vN(947,` p-help`),Kc(948,`br`),ug()()(),Ac(949,`td`,21)(950,`code`,27),vN(951,`string`),ug()(),Ac(952,`td`,23),vN(953,`-`),ug(),Ac(954,`td`,24)(955,`em`)(956,`strong`),vN(957,`(opcional)`),ug()(),Ac(958,`p`),vN(959,`Texto de apoio do campo.`),ug()()(),Ac(960,`tr`,16)(961,`td`,17)(962,`div`,25)(963,`span`,26),vN(964,` p-hide-columns-manager`),Kc(965,`br`),ug()()(),Ac(966,`td`,21)(967,`code`,29),vN(968,`boolean`),ug()(),Ac(969,`td`,23)(970,`p`)(971,`code`),vN(972,`false`),ug()()(),Ac(973,`td`,24)(974,`em`)(975,`strong`),vN(976,`(opcional)`),ug()(),Ac(977,`p`),vN(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),ug()()(),Ac(979,`tr`,16)(980,`td`,17)(981,`div`,25)(982,`span`,26),vN(983,` p-infinite-scroll`),Kc(984,`br`),ug()()(),Ac(985,`td`,21)(986,`code`,29),vN(987,`boolean`),ug()(),Ac(988,`td`,23)(989,`p`)(990,`code`),vN(991,`false`),ug()()(),Ac(992,`td`,24)(993,`em`)(994,`strong`),vN(995,`(opcional)`),ug()(),Ac(996,`p`),vN(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),ug()()(),Ac(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),vN(1002,` (p-keydown)`),Kc(1003,`br`),ug()()(),Ac(1004,`td`,21)(1005,`code`,22),vN(1006,`EventEmitter`),ug()(),Ac(1007,`td`,23),vN(1008,`-`),ug(),Ac(1009,`td`,24)(1010,`em`)(1011,`strong`),vN(1012,`(opcional)`),ug()(),Ac(1013,`p`),vN(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(1015,`code`),vN(1016,`KeyboardEvent`),ug(),vN(1017,` com informações sobre a tecla.`),ug()()(),Ac(1018,`tr`,16)(1019,`td`,17)(1020,`div`,25)(1021,`span`,26),vN(1022,` p-label`),Kc(1023,`br`),ug()()(),Ac(1024,`td`,21)(1025,`code`,27),vN(1026,`string`),ug()(),Ac(1027,`td`,23),vN(1028,`-`),ug(),Ac(1029,`td`,24)(1030,`em`)(1031,`strong`),vN(1032,`(opcional)`),ug()(),Ac(1033,`p`),vN(1034,`Label do campo.`),ug(),Ac(1035,`blockquote`)(1036,`p`),vN(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Ac(1038,`code`),vN(1039,`modalTitle`),ug(),vN(1040,` na propriedade `),Ac(1041,`code`),vN(1042,`p-literals`),ug(),vN(1043,`.`),ug()()()(),Ac(1044,`tr`,16)(1045,`td`,17)(1046,`div`,25)(1047,`span`,26),vN(1048,` p-label-text-wrap`),Kc(1049,`br`),ug()()(),Ac(1050,`td`,21)(1051,`code`,29),vN(1052,`boolean`),ug()(),Ac(1053,`td`,23)(1054,`p`)(1055,`code`),vN(1056,`false`),ug()()(),Ac(1057,`td`,24)(1058,`em`)(1059,`strong`),vN(1060,`(opcional)`),ug()(),Ac(1061,`p`),vN(1062,`Habilita a quebra automática do texto da propriedade `),Ac(1063,`code`),vN(1064,`p-label`),ug(),vN(1065,`. Quando `),Ac(1066,`code`),vN(1067,`p-label-text-wrap`),ug(),vN(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(1069,`tr`,16)(1070,`td`,17)(1071,`div`,25)(1072,`span`,26),vN(1073,` p-literals`),Kc(1074,`br`),ug()()(),Ac(1075,`td`,21)(1076,`code`,36),vN(1077,`PoLookupLiterals`),ug()(),Ac(1078,`td`,23),vN(1079,`-`),ug(),Ac(1080,`td`,24)(1081,`p`),vN(1082,`Objeto com as literais usadas no `),Ac(1083,`code`),vN(1084,`po-lookup`),ug(),vN(1085,`.`),ug(),Ac(1086,`p`),vN(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(1088,`pre`)(1089,`code`),vN(1090,`const customLiterals: PoLookupLiterals = {
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
`),ug()(),Ac(1091,`p`),vN(1092,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(1093,`pre`)(1094,`code`),vN(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),ug()(),Ac(1096,`p`),vN(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(1098,`pre`)(1099,`code`),vN(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),ug()(),Ac(1101,`blockquote`)(1102,`p`),vN(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(1104,`a`,37)(1105,`code`),vN(1106,`PoI18nService`),ug()(),vN(1107,` ou do browser.`),ug()()()(),Ac(1108,`tr`,16)(1109,`td`,17)(1110,`div`,25)(1111,`span`,26),vN(1112,` p-loading`),Kc(1113,`br`),ug()()(),Ac(1114,`td`,21)(1115,`code`,29),vN(1116,`boolean`),ug()(),Ac(1117,`td`,23)(1118,`p`)(1119,`code`),vN(1120,`false`),ug()()(),Ac(1121,`td`,24)(1122,`em`)(1123,`strong`),vN(1124,`(opcional)`),ug()(),Ac(1125,`p`),vN(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(1127,`tr`,16)(1128,`td`,17)(1129,`div`,25)(1130,`span`,26),vN(1131,` p-multiple`),Kc(1132,`br`),ug()()(),Ac(1133,`td`,21)(1134,`code`,29),vN(1135,`boolean`),ug()(),Ac(1136,`td`,23)(1137,`p`)(1138,`code`),vN(1139,`false`),ug()()(),Ac(1140,`td`,24)(1141,`em`)(1142,`strong`),vN(1143,`(opcional)`),ug()(),Ac(1144,`p`),vN(1145,`Permite a seleção de múltiplos itens.`),ug(),Ac(1146,`blockquote`)(1147,`p`),vN(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Ac(1149,`code`),vN(1150,`[ 12345, 67890 ]`),ug()()()()(),Ac(1151,`tr`,16)(1152,`td`,17)(1153,`div`,25)(1154,`span`,26),vN(1155,` name`),Kc(1156,`br`),ug()()(),Ac(1157,`td`,21)(1158,`code`,27),vN(1159,`string`),ug()(),Ac(1160,`td`,23),vN(1161,`-`),ug(),Ac(1162,`td`,24)(1163,`p`),vN(1164,`Nome e Id do componente.`),ug()()(),Ac(1165,`tr`,16)(1166,`td`,17)(1167,`div`,25)(1168,`span`,26),vN(1169,` p-no-autocomplete`),Kc(1170,`br`),ug()()(),Ac(1171,`td`,21)(1172,`code`,29),vN(1173,`boolean`),ug()(),Ac(1174,`td`,23)(1175,`p`)(1176,`code`),vN(1177,`false`),ug()()(),Ac(1178,`td`,24)(1179,`em`)(1180,`strong`),vN(1181,`(opcional)`),ug()(),Ac(1182,`p`),vN(1183,`Define a propriedade nativa `),Ac(1184,`code`),vN(1185,`autocomplete`),ug(),vN(1186,` do campo como `),Ac(1187,`code`),vN(1188,`off`),ug(),vN(1189,`.`),ug()()(),Ac(1190,`tr`,16)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),vN(1194,` (p-error)`),Kc(1195,`br`),ug()()(),Ac(1196,`td`,21)(1197,`code`,22),vN(1198,`EventEmitter`),ug()(),Ac(1199,`td`,23),vN(1200,`-`),ug(),Ac(1201,`td`,24)(1202,`p`),vN(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),ug()()(),Ac(1204,`tr`,16)(1205,`td`,17)(1206,`div`,25)(1207,`span`,26),vN(1208,` p-optional`),Kc(1209,`br`),ug()()(),Ac(1210,`td`,21)(1211,`code`,29),vN(1212,`boolean`),ug()(),Ac(1213,`td`,23)(1214,`p`)(1215,`code`),vN(1216,`false`),ug()()(),Ac(1217,`td`,24)(1218,`em`)(1219,`strong`),vN(1220,`(opcional)`),ug()(),Ac(1221,`p`),vN(1222,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1223,`blockquote`)(1224,`p`),vN(1225,`Não será exibida a indicação se:`),ug()(),Ac(1226,`ul`)(1227,`li`),vN(1228,`O campo conter `),Ac(1229,`code`),vN(1230,`p-required`),ug(),vN(1231,`;`),ug(),Ac(1232,`li`),vN(1233,`Não possuir `),Ac(1234,`code`),vN(1235,`p-help`),ug(),vN(1236,` e/ou `),Ac(1237,`code`),vN(1238,`p-label`),ug(),vN(1239,`.`),ug()()()(),Ac(1240,`tr`,16)(1241,`td`,17)(1242,`div`,25)(1243,`span`,26),vN(1244,` p-placeholder`),Kc(1245,`br`),ug()()(),Ac(1246,`td`,21)(1247,`code`,27),vN(1248,`string`),ug()(),Ac(1249,`td`,23),vN(1250,`-`),ug(),Ac(1251,`td`,24)(1252,`p`),vN(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1254,`tr`,16)(1255,`td`,17)(1256,`div`,25)(1257,`span`,26),vN(1258,` p-helper`),Kc(1259,`br`),ug()()(),Ac(1260,`td`,21)(1261,`code`,38),vN(1262,`PoHelperOptions `),ug(),Ac(1263,`code`,27),vN(1264,` string`),ug()(),Ac(1265,`td`,23),vN(1266,`-`),ug(),Ac(1267,`td`,24)(1268,`em`)(1269,`strong`),vN(1270,`(opcional)`),ug()(),Ac(1271,`p`),vN(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1273,`code`),vN(1274,`p-label`),ug(),vN(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1276,`code`),vN(1277,`p-label`),ug(),vN(1278,`.`),ug(),Ac(1279,`blockquote`)(1280,`p`),vN(1281,`Para mais informações acesse: `),Ac(1282,`a`,39),vN(1283,`https://po-ui.io/documentation/po-helper`),ug(),vN(1284,`.`),ug()(),Ac(1285,`blockquote`)(1286,`p`),vN(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1288,`code`),vN(1289,`p-additional-help-tooltip`),ug(),vN(1290,` e `),Ac(1291,`code`),vN(1292,`p-additional-help`),ug(),vN(1293,`) será ignorado.`),ug()()()(),Ac(1294,`tr`,16)(1295,`td`,17)(1296,`div`,25)(1297,`span`,26),vN(1298,` p-required`),Kc(1299,`br`),ug()()(),Ac(1300,`td`,21)(1301,`code`,29),vN(1302,`boolean`),ug()(),Ac(1303,`td`,23)(1304,`p`)(1305,`code`),vN(1306,`false`),ug()()(),Ac(1307,`td`,24)(1308,`em`)(1309,`strong`),vN(1310,`(opcional)`),ug()(),Ac(1311,`p`),vN(1312,`Define que o campo será obrigatório.`),ug(),Ac(1313,`blockquote`)(1314,`p`),vN(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1316,`code`),vN(1317,`(p-disabled)`),ug(),vN(1318,`.`),ug()()()(),Ac(1319,`tr`,16)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),vN(1323,` (p-selected)`),Kc(1324,`br`),ug()()(),Ac(1325,`td`,21)(1326,`code`,22),vN(1327,`EventEmitter`),ug()(),Ac(1328,`td`,23),vN(1329,`-`),ug(),Ac(1330,`td`,24)(1331,`em`)(1332,`strong`),vN(1333,`(opcional)`),ug()(),Ac(1334,`p`),vN(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),ug()()(),Ac(1336,`tr`,16)(1337,`td`,17)(1338,`div`,25)(1339,`span`,26),vN(1340,` p-show-required`),Kc(1341,`br`),ug()()(),Ac(1342,`td`,21)(1343,`code`,29),vN(1344,`boolean`),ug()(),Ac(1345,`td`,23),vN(1346,`-`),ug(),Ac(1347,`td`,24)(1348,`p`),vN(1349,`Define se a indicação de campo obrigatório seré exibida.`),ug(),Ac(1350,`blockquote`)(1351,`p`),vN(1352,`Não será exibida a indicação se:`),ug()(),Ac(1353,`ul`)(1354,`li`),vN(1355,`Não possuir `),Ac(1356,`code`),vN(1357,`p-help`),ug(),vN(1358,` e/ou `),Ac(1359,`code`),vN(1360,`p-label`),ug(),vN(1361,`.`),ug()()()(),Ac(1362,`tr`,16)(1363,`td`,17)(1364,`div`,25)(1365,`span`,26),vN(1366,` p-size`),Kc(1367,`br`),ug()()(),Ac(1368,`td`,21)(1369,`code`,27),vN(1370,`string`),ug()(),Ac(1371,`td`,23)(1372,`p`)(1373,`code`),vN(1374,`medium`),ug()()(),Ac(1375,`td`,24)(1376,`em`)(1377,`strong`),vN(1378,`(opcional)`),ug()(),Ac(1379,`p`),vN(1380,`Define o tamanho do componente:`),ug(),Ac(1381,`ul`)(1382,`li`)(1383,`code`),vN(1384,`small`),ug(),vN(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1386,`li`)(1387,`code`),vN(1388,`medium`),ug(),vN(1389,`: altura do input como 44px.`),ug()(),Ac(1390,`blockquote`)(1391,`p`),vN(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1393,`code`),vN(1394,`medium`),ug(),vN(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1396,`a`,40),vN(1397,`po-theme`),ug(),vN(1398,`.`),ug()()()(),Ac(1399,`tr`,16)(1400,`td`,17)(1401,`div`,25)(1402,`span`,26),vN(1403,` p-spacing`),Kc(1404,`br`),ug()()(),Ac(1405,`td`,21)(1406,`code`,27),vN(1407,`string`),ug()(),Ac(1408,`td`,23)(1409,`p`)(1410,`code`),vN(1411,`medium`),ug()()(),Ac(1412,`td`,24)(1413,`em`)(1414,`strong`),vN(1415,`(opcional)`),ug()(),Ac(1416,`p`),vN(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Ac(1418,`strong`),vN(1419,`PoTableColumnSpacing`),ug(),vN(1420,`.`),ug(),Ac(1421,`blockquote`)(1422,`p`),vN(1423,`Em nível de acessibilidade `),Ac(1424,`strong`),vN(1425,`AA`),ug(),vN(1426,`, caso o valor de `),Ac(1427,`code`),vN(1428,`p-spacing`),ug(),vN(1429,` não seja definido, o valor padrão será `),Ac(1430,`code`),vN(1431,`extraSmall`),ug(),vN(1432,`
nos seguintes cen\xE1rios:`),ug(),Ac(1433,`ul`)(1434,`li`),vN(1435,`Quando o valor de `),Ac(1436,`code`),vN(1437,`p-size`),ug(),vN(1438,` for `),Ac(1439,`code`),vN(1440,`small`),ug(),vN(1441,`;`),ug(),Ac(1442,`li`),vN(1443,`Quando o valor padrão dos componentes for configurado como `),Ac(1444,`code`),vN(1445,`small`),ug(),vN(1446,` no
`),Ac(1447,`a`,40),vN(1448,`serviço de tema`),ug(),vN(1449,`.`),ug()()()()(),Ac(1450,`tr`,16)(1451,`td`,17)(1452,`div`,25)(1453,`span`,26),vN(1454,` p-text-wrap`),Kc(1455,`br`),ug()()(),Ac(1456,`td`,21)(1457,`code`,29),vN(1458,`boolean`),ug()(),Ac(1459,`td`,23)(1460,`p`)(1461,`code`),vN(1462,`false`),ug()()(),Ac(1463,`td`,24)(1464,`em`)(1465,`strong`),vN(1466,`(opcional)`),ug()(),Ac(1467,`p`),vN(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug(),Ac(1469,`p`),vN(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),ug(),Ac(1471,`blockquote`)(1472,`p`),vN(1473,`Incompatível com `),Ac(1474,`code`),vN(1475,`virtual-scroll`),ug(),vN(1476,`, que requer altura fixa nas linhas.`),ug()()()(),Ac(1477,`tr`,16)(1478,`td`,17)(1479,`div`,25)(1480,`span`,26),vN(1481,` p-virtual-scroll`),Kc(1482,`br`),ug()()(),Ac(1483,`td`,21)(1484,`code`,29),vN(1485,`boolean`),ug()(),Ac(1486,`td`,23)(1487,`p`)(1488,`code`),vN(1489,`true`),ug()()(),Ac(1490,`td`,24)(1491,`em`)(1492,`strong`),vN(1493,`(opcional)`),ug()(),Ac(1494,`p`),vN(1495,`Habilita o `),Ac(1496,`code`),vN(1497,`virtual-scroll`),ug(),vN(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Ac(1499,`code`),vN(1500,`virtual-scroll`),ug(),vN(1501,` será ativado automaticamente.`),ug(),Ac(1502,`blockquote`)(1503,`p`),vN(1504,`Incompatível com `),Ac(1505,`code`),vN(1506,`p-text-wrap`),ug(),vN(1507,` e `),Ac(1508,`code`),vN(1509,`master-detail`),ug(),vN(1510,`, pois o `),Ac(1511,`code`),vN(1512,`virtual-scroll`),ug(),vN(1513,` exige altura fixa nas linhas.`),ug()()()()(),Ac(1514,`h3`,12),vN(1515,`Métodos`),ug(),Ac(1516,`table`,41)(1517,`tr`,16)(1518,`th`,42)(1519,`div`,25)(1520,`h4`)(1521,`span`,26),vN(1522,` focus `),ug()()()()(),Ac(1523,`tr`,24)(1524,`td`,24)(1525,`p`),vN(1526,`Função que atribui foco ao componente.`),ug(),Ac(1527,`p`),vN(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1529,`pre`)(1530,`code`),vN(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),ug()()()()(),Kc(1532,`br`),Ac(1533,`table`,41)(1534,`tr`,16)(1535,`th`,42)(1536,`div`,25)(1537,`h4`)(1538,`span`,26),vN(1539,` showAdditionalHelp `),ug()()()()(),Ac(1540,`tr`,24)(1541,`td`,24)(1542,`p`),vN(1543,`Método que exibe `),Ac(1544,`code`),vN(1545,`p-helper`),ug(),vN(1546,` ou executa a ação definida em `),Ac(1547,`code`),vN(1548,`p-helper{eventOnClick}`),ug(),vN(1549,` ou em `),Ac(1550,`code`),vN(1551,`p-additionalHelp`),ug(),vN(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1553,`code`),vN(1554,`p-keydown`),ug(),vN(1555,`.`),ug(),Ac(1556,`blockquote`)(1557,`p`),vN(1558,`Exibe ou oculta o conteúdo do componente `),Ac(1559,`code`),vN(1560,`po-helper`),ug(),vN(1561,` quando o componente estiver com foco.`),ug()(),Ac(1562,`pre`)(1563,`code`),vN(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),ug()(),Ac(1565,`pre`)(1566,`code`),vN(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1568,`br`),Ac(1569,`h3`),vN(1570,`Interfaces`),ug(),Ac(1571,`h4`,43)(1572,`code`,5),vN(1573,`PoLookupAdvancedFilter`),ug()(),Ac(1574,`div`,2)(1575,`p`),vN(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),ug()(),Ac(1577,`h4`,12),vN(1578,`Propriedades`),ug(),Ac(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),vN(1582,`Nome`),ug(),Ac(1583,`th`,15),vN(1584,`Tipo`),ug(),Ac(1585,`th`,15),vN(1586,`Descrição`),ug()(),Ac(1587,`tr`,16)(1588,`td`,17)(1589,`div`,25)(1590,`span`,26),vN(1591,` additionalHelp`),Kc(1592,`br`),ug()()(),Ac(1593,`td`,21)(1594,`code`,44),vN(1595,`Function`),ug()(),Ac(1596,`td`,24)(1597,`em`)(1598,`strong`),vN(1599,`(opcional)`),ug()(),Ac(1600,`p`),vN(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(1602,`blockquote`)(1603,`p`),vN(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(1605,`tr`,16)(1606,`td`,17)(1607,`div`,25)(1608,`span`,26),vN(1609,` additionalHelpTooltip`),Kc(1610,`br`),ug()()(),Ac(1611,`td`,21)(1612,`code`,27),vN(1613,`string`),ug()(),Ac(1614,`td`,24)(1615,`em`)(1616,`strong`),vN(1617,`(opcional)`),ug()(),Ac(1618,`p`),vN(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(1620,`code`),vN(1621,`po-helper`),ug(),vN(1622,`.
`),Ac(1623,`strong`),vN(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(1625,`blockquote`)(1626,`p`),vN(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(1628,`tr`,16)(1629,`td`,17)(1630,`div`,25)(1631,`span`,26),vN(1632,` advancedFilters`),Kc(1633,`br`),ug()()(),Ac(1634,`td`,21)(1635,`code`,28),vN(1636,`Array<PoLookupAdvancedFilter>`),ug()(),Ac(1637,`td`,24)(1638,`em`)(1639,`strong`),vN(1640,`(opcional)`),ug()(),Ac(1641,`p`),vN(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),ug(),Ac(1643,`blockquote`)(1644,`p`),vN(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ug()(),Ac(1646,`p`),vN(1647,`Exemplo de URL com busca avançada:`),ug(),Ac(1648,`p`)(1649,`code`),vN(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),ug()(),Ac(1651,`p`),vN(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),ug(),Ac(1653,`p`)(1654,`code`),vN(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),ug()()()(),Ac(1656,`tr`,16)(1657,`td`,17)(1658,`div`,25)(1659,`span`,26),vN(1660,` appendBox`),Kc(1661,`br`),ug()()(),Ac(1662,`td`,21)(1663,`code`,29),vN(1664,`boolean`),ug()(),Ac(1665,`td`,24)(1666,`em`)(1667,`strong`),vN(1668,`(opcional)`),ug()(),Ac(1669,`p`),vN(1670,`Define que o `),Ac(1671,`code`),vN(1672,`listbox`),ug(),vN(1673,` e/ou popover (`),Ac(1674,`code`),vN(1675,`p-helper`),ug(),vN(1676,` e/ou `),Ac(1677,`code`),vN(1678,`p-error-limit`),ug(),vN(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(1680,`blockquote`)(1681,`p`),vN(1682,`Quando utilizado com `),Ac(1683,`code`),vN(1684,`p-helper`),ug(),vN(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(1686,`tr`,16)(1687,`td`,17)(1688,`div`,25)(1689,`span`,26),vN(1690,` autoHeight`),Kc(1691,`br`),ug()()(),Ac(1692,`td`,21)(1693,`code`,29),vN(1694,`boolean`),ug()(),Ac(1695,`td`,24)(1696,`em`)(1697,`strong`),vN(1698,`(opcional)`),ug()(),Ac(1699,`p`),vN(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),ug(),Ac(1701,`p`)(1702,`strong`),vN(1703,`Componentes compatíveis:`),ug(),Ac(1704,`code`),vN(1705,`po-multiselect`),ug(),vN(1706,`, `),Ac(1707,`code`),vN(1708,`po-lookup`),ug(),vN(1709,`.`),ug()()(),Ac(1710,`tr`,16)(1711,`td`,17)(1712,`div`,25)(1713,`span`,26),vN(1714,` autoUpload`),Kc(1715,`br`),ug()()(),Ac(1716,`td`,21)(1717,`code`,29),vN(1718,`boolean`),ug()(),Ac(1719,`td`,24)(1720,`em`)(1721,`strong`),vN(1722,`(opcional)`),ug()(),Ac(1723,`p`),vN(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ug(),Ac(1725,`p`)(1726,`strong`),vN(1727,`Componente compatível`),ug(),vN(1728,`: `),Ac(1729,`code`),vN(1730,`po-upload`),ug()()()(),Ac(1731,`tr`,16)(1732,`td`,17)(1733,`div`,25)(1734,`span`,26),vN(1735,` booleanFalse`),Kc(1736,`br`),ug()()(),Ac(1737,`td`,21)(1738,`code`,27),vN(1739,`string`),ug()(),Ac(1740,`td`,24)(1741,`em`)(1742,`strong`),vN(1743,`(opcional)`),ug()(),Ac(1744,`p`),vN(1745,`Texto exibido quando o valor do componente for `),Ac(1746,`em`),vN(1747,`false`),ug(),vN(1748,`.`),ug()()(),Ac(1749,`tr`,16)(1750,`td`,17)(1751,`div`,25)(1752,`span`,26),vN(1753,` booleanTrue`),Kc(1754,`br`),ug()()(),Ac(1755,`td`,21)(1756,`code`,27),vN(1757,`string`),ug()(),Ac(1758,`td`,24)(1759,`em`)(1760,`strong`),vN(1761,`(opcional)`),ug()(),Ac(1762,`p`),vN(1763,`Texto exibido quando o valor do componente for `),Ac(1764,`em`),vN(1765,`true`),ug(),vN(1766,`.`),ug()()(),Ac(1767,`tr`,16)(1768,`td`,17)(1769,`div`,25)(1770,`span`,26),vN(1771,` changeOnEnter`),Kc(1772,`br`),ug()()(),Ac(1773,`td`,21)(1774,`code`,29),vN(1775,`boolean`),ug()(),Ac(1776,`td`,24)(1777,`em`)(1778,`strong`),vN(1779,`(opcional)`),ug()(),Ac(1780,`p`),vN(1781,`Indica que o evento `),Ac(1782,`code`),vN(1783,`p-change`),ug(),vN(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Ac(1785,`code`),vN(1786,`po-combo`),ug(),vN(1787,`.`),ug()()(),Ac(1788,`tr`,16)(1789,`td`,17)(1790,`div`,25)(1791,`span`,26),vN(1792,` changeVisibleColumns`),Kc(1793,`br`),ug()()(),Ac(1794,`td`,21)(1795,`code`,44),vN(1796,`Function`),ug()(),Ac(1797,`td`,24)(1798,`em`)(1799,`strong`),vN(1800,`(opcional)`),ug()(),Ac(1801,`p`),vN(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(1803,`p`),vN(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(1805,`p`)(1806,`strong`),vN(1807,`Componente compatível`),ug(),vN(1808,`: `),Ac(1809,`code`),vN(1810,`po-lookup`),ug()()()(),Ac(1811,`tr`,16)(1812,`td`,17)(1813,`div`,25)(1814,`span`,26),vN(1815,` clean`),Kc(1816,`br`),ug()()(),Ac(1817,`td`,21)(1818,`code`,29),vN(1819,`boolean`),ug()(),Ac(1820,`td`,24)(1821,`em`)(1822,`strong`),vN(1823,`(opcional)`),ug()(),Ac(1824,`p`),vN(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug(),Ac(1826,`p`)(1827,`strong`),vN(1828,`Componentes compatíveis:`),ug(),Ac(1829,`code`),vN(1830,`po-datepicker`),ug(),vN(1831,`, `),Ac(1832,`code`),vN(1833,`po-datepicker-range`),ug(),vN(1834,`, `),Ac(1835,`code`),vN(1836,`po-input`),ug(),vN(1837,`, `),Ac(1838,`code`),vN(1839,`po-number`),ug(),vN(1840,`, `),Ac(1841,`code`),vN(1842,`po-decimal`),ug(),vN(1843,`,
`),Ac(1844,`code`),vN(1845,`po-combo`),ug(),vN(1846,`, `),Ac(1847,`code`),vN(1848,`po-lookup`),ug(),vN(1849,`, `),Ac(1850,`code`),vN(1851,`po-password`),ug(),vN(1852,`, `),Ac(1853,`code`),vN(1854,`po-timepicker`),ug(),vN(1855,`.`),ug()()(),Ac(1856,`tr`,16)(1857,`td`,17)(1858,`div`,25)(1859,`span`,26),vN(1860,` columnRestoreManager`),Kc(1861,`br`),ug()()(),Ac(1862,`td`,21)(1863,`code`,44),vN(1864,`Function`),ug()(),Ac(1865,`td`,24)(1866,`em`)(1867,`strong`),vN(1868,`(opcional)`),ug()(),Ac(1869,`p`),vN(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(1871,`p`),vN(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(1873,`p`)(1874,`strong`),vN(1875,`Componente compatível`),ug(),vN(1876,`: `),Ac(1877,`code`),vN(1878,`po-lookup`),ug()()()(),Ac(1879,`tr`,16)(1880,`td`,17)(1881,`div`,25)(1882,`span`,26),vN(1883,` columns`),Kc(1884,`br`),ug()()(),Ac(1885,`td`,21)(1886,`code`,30),vN(1887,`Array<PoLookupColumn> `),ug(),Ac(1888,`code`,45),vN(1889,` number`),ug()(),Ac(1890,`td`,24)(1891,`em`)(1892,`strong`),vN(1893,`(opcional)`),ug()(),Ac(1894,`p`),vN(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Ac(1896,`code`),vN(1897,`searchService`),ug(),vN(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Ac(1899,`a`,46)(1900,`code`),vN(1901,`PoLookupColumn`),ug()(),vN(1902,`.`),ug(),Ac(1903,`blockquote`)(1904,`p`),vN(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Ac(1906,`em`),vN(1907,`label`),ug(),vN(1908,` e `),Ac(1909,`em`),vN(1910,`value`),ug(),vN(1911,` para valores
de tela e do model respectivamente.`),ug()(),Ac(1912,`p`)(1913,`strong`),vN(1914,`Componentes compatíveis:`),ug(),Ac(1915,`code`),vN(1916,`po-radio-group`),ug(),vN(1917,`, `),Ac(1918,`code`),vN(1919,`po-lookup`),ug(),vN(1920,`, `),Ac(1921,`code`),vN(1922,`po-checkbox-group`),ug(),vN(1923,`.`),ug()()(),Ac(1924,`tr`,16)(1925,`td`,17)(1926,`div`,25)(1927,`span`,26),vN(1928,` compactLabel`),Kc(1929,`br`),ug()()(),Ac(1930,`td`,21)(1931,`code`,29),vN(1932,`boolean`),ug()(),Ac(1933,`td`,24)(1934,`em`)(1935,`strong`),vN(1936,`(opcional)`),ug()(),Ac(1937,`p`),vN(1938,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(1939,`p`),vN(1940,`Quando habilitado (`),Ac(1941,`code`),vN(1942,`true`),ug(),vN(1943,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(1944,`ul`)(1945,`li`)(1946,`code`),vN(1947,`po-label`),ug()(),Ac(1948,`li`)(1949,`code`),vN(1950,`p-requirement (showRequired)`),ug()(),Ac(1951,`li`)(1952,`code`),vN(1953,`po-helper`),ug()()(),Ac(1954,`p`),vN(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(1956,`p`),vN(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(1958,`ul`)(1959,`li`)(1960,`code`),vN(1961,`--field-container-title-justify`),ug()(),Ac(1962,`li`)(1963,`code`),vN(1964,`--field-container-title-flex`),ug()()(),Ac(1965,`p`),vN(1966,`Exemplo:`),ug(),Ac(1967,`pre`)(1968,`code`),vN(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(1970,`p`),vN(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(1972,`tr`,16)(1973,`td`,17)(1974,`div`,25)(1975,`span`,26),vN(1976,` container`),Kc(1977,`br`),ug()()(),Ac(1978,`td`,21)(1979,`code`,27),vN(1980,`string`),ug()(),Ac(1981,`td`,24)(1982,`em`)(1983,`strong`),vN(1984,`(opcional)`),ug()(),Ac(1985,`p`),vN(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ug(),Ac(1987,`p`),vN(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ug()()(),Ac(1989,`tr`,16)(1990,`td`,17)(1991,`div`,25)(1992,`span`,26),vN(1993,` customAction`),Kc(1994,`br`),ug()()(),Ac(1995,`td`,21)(1996,`code`,47),vN(1997,`PoProgressAction`),ug()(),Ac(1998,`td`,24)(1999,`em`)(2e3,`strong`),vN(2001,`(opcional)`),ug()(),Ac(2002,`p`),vN(2003,`Define uma ação personalizada no componente `),Ac(2004,`code`),vN(2005,`po-upload`),ug(),vN(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ug(),Ac(2007,`p`)(2008,`strong`),vN(2009,`Componente compatível`),ug(),vN(2010,`: `),Ac(2011,`code`),vN(2012,`po-upload`),ug(),vN(2013,`,`),ug(),Ac(2014,`p`)(2015,`strong`),vN(2016,`Exemplo de configuração`),ug(),vN(2017,`:`),ug(),Ac(2018,`pre`)(2019,`code`,48),vN(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ug()()()(),Ac(2021,`tr`,16)(2022,`td`,17)(2023,`div`,25)(2024,`span`,26),vN(2025,` customActionClick`),Kc(2026,`br`),ug()()(),Ac(2027,`td`,21)(2028,`code`,49),vN(2029,`(file: PoUploadFile) => void`),ug()(),Ac(2030,`td`,24)(2031,`em`)(2032,`strong`),vN(2033,`(opcional)`),ug()(),Ac(2034,`p`),vN(2035,`Evento emitido ao clicar na ação personalizada configurada no `),Ac(2036,`code`),vN(2037,`p-custom-action`),ug(),vN(2038,`.`),ug(),Ac(2039,`p`)(2040,`strong`),vN(2041,`Componente compatível`),ug(),vN(2042,`: `),Ac(2043,`code`),vN(2044,`po-upload`),ug(),vN(2045,`,`),ug(),Ac(2046,`p`),vN(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ug(),Ac(2048,`p`)(2049,`strong`),vN(2050,`Parâmetro do evento`),ug(),vN(2051,`:`),ug(),Ac(2052,`ul`)(2053,`li`)(2054,`code`),vN(2055,`file`),ug(),vN(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Ac(2057,`code`),vN(2058,`PoUploadFile`),ug(),vN(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),ug()(),Ac(2060,`p`)(2061,`strong`),vN(2062,`Exemplo de uso`),ug(),vN(2063,`:`),ug(),Ac(2064,`pre`)(2065,`code`,48),vN(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ug()()()(),Ac(2067,`tr`,16)(2068,`td`,17)(2069,`div`,25)(2070,`span`,26),vN(2071,` debounceTime`),Kc(2072,`br`),ug()()(),Ac(2073,`td`,21)(2074,`code`,45),vN(2075,`number`),ug()(),Ac(2076,`td`,24)(2077,`em`)(2078,`strong`),vN(2079,`(opcional)`),ug()(),Ac(2080,`p`),vN(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Ac(2082,`code`),vN(2083,`p-filter-service`),ug(),vN(2084,`).`),ug(),Ac(2085,`p`)(2086,`strong`),vN(2087,`Componentes compatíveis:`),ug(),Ac(2088,`code`),vN(2089,`po-combo`),ug(),vN(2090,`, `),Ac(2091,`code`),vN(2092,`po-multiselect`),ug(),vN(2093,`.`),ug()()(),Ac(2094,`tr`,16)(2095,`td`,17)(2096,`div`,25)(2097,`span`,26),vN(2098,` decimalsLength`),Kc(2099,`br`),ug()()(),Ac(2100,`td`,21)(2101,`code`,45),vN(2102,`number`),ug()(),Ac(2103,`td`,24)(2104,`em`)(2105,`strong`),vN(2106,`(opcional)`),ug()(),Ac(2107,`p`),vN(2108,`Quantidade máxima de casas decimais.`),ug(),Ac(2109,`blockquote`)(2110,`p`),vN(2111,`Esta propriedade só pode ser utilizada quando o `),Ac(2112,`code`),vN(2113,`type`),ug(),vN(2114,` for `),Ac(2115,`em`),vN(2116,`currency`),ug(),vN(2117,` ou `),Ac(2118,`em`),vN(2119,`decimal`),ug(),vN(2120,`.`),ug()(),Ac(2121,`blockquote`)(2122,`p`),vN(2123,`Quando utilizado com `),Ac(2124,`code`),vN(2125,`displayFormat`),ug(),vN(2126,`, será respeitado o valor `),Ac(2127,`strong`),vN(2128,`mais restritivo`),ug(),vN(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),ug()()()(),Ac(2130,`tr`,16)(2131,`td`,17)(2132,`div`,25)(2133,`span`,26),vN(2134,` directory`),Kc(2135,`br`),ug()()(),Ac(2136,`td`,21)(2137,`code`,29),vN(2138,`boolean`),ug()(),Ac(2139,`td`,24)(2140,`em`)(2141,`strong`),vN(2142,`(opcional)`),ug()(),Ac(2143,`p`),vN(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ug(),Ac(2145,`blockquote`)(2146,`p`),vN(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ug()(),Ac(2148,`blockquote`)(2149,`p`),vN(2150,`Definição não suportada pelo browser `),Ac(2151,`strong`),vN(2152,`Internet Explorer`),ug(),vN(2153,`, todavia será possível a seleção de arquivos padrão.`),ug()(),Ac(2154,`p`)(2155,`strong`),vN(2156,`Componente compatível`),ug(),vN(2157,`: `),Ac(2158,`code`),vN(2159,`po-upload`),ug()()()(),Ac(2160,`tr`,16)(2161,`td`,17)(2162,`div`,25)(2163,`span`,26),vN(2164,` disabled`),Kc(2165,`br`),ug()()(),Ac(2166,`td`,21)(2167,`code`,29),vN(2168,`boolean`),ug()(),Ac(2169,`td`,24)(2170,`em`)(2171,`strong`),vN(2172,`(opcional)`),ug()(),Ac(2173,`p`),vN(2174,`Desabilita o campo caso informar o valor `),Ac(2175,`em`),vN(2176,`true`),ug(),vN(2177,`.`),ug()()(),Ac(2178,`tr`,16)(2179,`td`,17)(2180,`div`,25)(2181,`span`,26),vN(2182,` disabledInitFilter`),Kc(2183,`br`),ug()()(),Ac(2184,`td`,21)(2185,`code`,29),vN(2186,`boolean`),ug()(),Ac(2187,`td`,24)(2188,`em`)(2189,`strong`),vN(2190,`(opcional)`),ug()(),Ac(2191,`p`),vN(2192,`Desabilita o filtro inicial no serviço do `),Ac(2193,`code`),vN(2194,`po-combo`),ug(),vN(2195,`, que é executado no primeiro clique no campo.`),ug()()(),Ac(2196,`tr`,16)(2197,`td`,17)(2198,`div`,25)(2199,`span`,26),vN(2200,` disabledTabFilter`),Kc(2201,`br`),ug()()(),Ac(2202,`td`,21)(2203,`code`,29),vN(2204,`boolean`),ug()(),Ac(2205,`td`,24)(2206,`em`)(2207,`strong`),vN(2208,`(opcional)`),ug()(),Ac(2209,`p`),vN(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Ac(2211,`code`),vN(2212,`po-combo`),ug(),vN(2213,`.`),ug()()(),Ac(2214,`tr`,16)(2215,`td`,17)(2216,`div`,25)(2217,`span`,26),vN(2218,` displayFormat`),Kc(2219,`br`),ug()()(),Ac(2220,`td`,21)(2221,`code`,27),vN(2222,`string`),ug()(),Ac(2223,`td`,24)(2224,`em`)(2225,`strong`),vN(2226,`(opcional)`),ug()(),Ac(2227,`p`),vN(2228,`Define uma máscara de formatação numérica avançada para o campo.`),ug(),Ac(2229,`p`),vN(2230,`Simbologia suportada:`),ug(),Ac(2231,`ul`)(2232,`li`)(2233,`code`),vN(2234,`9`),ug(),vN(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ug(),Ac(2236,`li`)(2237,`code`),vN(2238,`>`),ug(),vN(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),ug(),Ac(2240,`li`)(2241,`code`),vN(2242,`<`),ug(),vN(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ug(),Ac(2244,`li`)(2245,`code`),vN(2246,`.`),ug(),vN(2247,`: Separador decimal (convertido conforme locale);`),ug(),Ac(2248,`li`)(2249,`code`),vN(2250,`,`),ug(),vN(2251,`: Separador de milhar/grupo (convertido conforme locale);`),ug(),Ac(2252,`li`)(2253,`code`),vN(2254,`-`),ug(),vN(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ug()(),Ac(2256,`blockquote`)(2257,`p`),vN(2258,`Quando utilizado com `),Ac(2259,`code`),vN(2260,`decimalsLength`),ug(),vN(2261,` ou `),Ac(2262,`code`),vN(2263,`thousandMaxlength`),ug(),vN(2264,`, será respeitado o valor `),Ac(2265,`strong`),vN(2266,`mais restritivo`),ug(),vN(2267,` entre a propriedade e o formato.`),ug()(),Ac(2268,`p`),vN(2269,`Exemplos: `),Ac(2270,`code`),vN(2271,`'>>>,>>>,>>9.99'`),ug(),vN(2272,`, `),Ac(2273,`code`),vN(2274,`'->>9.99'`),ug(),vN(2275,`, `),Ac(2276,`code`),vN(2277,`'999.9'`),ug()(),Ac(2278,`blockquote`)(2279,`p`),vN(2280,`Esta propriedade só pode ser utilizada quando o `),Ac(2281,`code`),vN(2282,`type`),ug(),vN(2283,` for `),Ac(2284,`em`),vN(2285,`currency`),ug(),vN(2286,` ou `),Ac(2287,`em`),vN(2288,`decimal`),ug(),vN(2289,`.`),ug()(),Ac(2290,`p`)(2291,`strong`),vN(2292,`Componente compatível:`),ug(),Ac(2293,`code`),vN(2294,`po-decimal`),ug(),vN(2295,`.`),ug()()(),Ac(2296,`tr`,16)(2297,`td`,17)(2298,`div`,25)(2299,`span`,26),vN(2300,` divider`),Kc(2301,`br`),ug()()(),Ac(2302,`td`,21)(2303,`code`,27),vN(2304,`string`),ug()(),Ac(2305,`td`,24)(2306,`em`)(2307,`strong`),vN(2308,`(opcional)`),ug()(),Ac(2309,`p`),vN(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ug()()(),Ac(2311,`tr`,16)(2312,`td`,17)(2313,`div`,25)(2314,`span`,26),vN(2315,` dragDrop`),Kc(2316,`br`),ug()()(),Ac(2317,`td`,21)(2318,`code`,29),vN(2319,`boolean`),ug()(),Ac(2320,`td`,24)(2321,`em`)(2322,`strong`),vN(2323,`(opcional)`),ug()(),Ac(2324,`p`),vN(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ug(),Ac(2326,`blockquote`)(2327,`p`),vN(2328,`Recomendamos utilizar apenas um `),Ac(2329,`code`),vN(2330,`po-upload`),ug(),vN(2331,` com esta funcionalidade por tela.`),ug()(),Ac(2332,`p`)(2333,`strong`),vN(2334,`Componente compatível`),ug(),vN(2335,`: `),Ac(2336,`code`),vN(2337,`po-upload`),ug()()()(),Ac(2338,`tr`,16)(2339,`td`,17)(2340,`div`,25)(2341,`span`,26),vN(2342,` dragDropHeight`),Kc(2343,`br`),ug()()(),Ac(2344,`td`,21)(2345,`code`,45),vN(2346,`number`),ug()(),Ac(2347,`td`,24)(2348,`em`)(2349,`strong`),vN(2350,`(opcional)`),ug()(),Ac(2351,`p`),vN(2352,`Define em `),Ac(2353,`em`),vN(2354,`pixels`),ug(),vN(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ac(2356,`code`),vN(2357,`160px`),ug(),vN(2358,`.`),ug(),Ac(2359,`blockquote`)(2360,`p`),vN(2361,`Esta propriedade funciona somente se a propriedade `),Ac(2362,`code`),vN(2363,`p-drag-drop`),ug(),vN(2364,` estiver habilitada.`),ug()(),Ac(2365,`p`)(2366,`strong`),vN(2367,`Componente compatível`),ug(),vN(2368,`: `),Ac(2369,`code`),vN(2370,`po-upload`),ug()()()(),Ac(2371,`tr`,16)(2372,`td`,17)(2373,`div`,25)(2374,`span`,26),vN(2375,` errorAsyncFunction`),Kc(2376,`br`),ug()()(),Ac(2377,`td`,21)(2378,`code`,50),vN(2379,`(value) => Observable<boolean>`),ug()(),Ac(2380,`td`,24)(2381,`em`)(2382,`strong`),vN(2383,`(opcional)`),ug()(),Ac(2384,`p`),vN(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(2386,`code`),vN(2387,`change`),ug(),vN(2388,` ou `),Ac(2389,`code`),vN(2390,`change-model`),ug(),vN(2391,`, dependendo do valor da propriedade `),Ac(2392,`code`),vN(2393,`triggerMode`),ug(),vN(2394,`.`),ug(),Ac(2395,`blockquote`)(2396,`p`),vN(2397,`Retorna `),Ac(2398,`code`),vN(2399,`Observable com o valor true`),ug(),vN(2400,` para sinalizar o erro `),Ac(2401,`code`),vN(2402,`false`),ug(),vN(2403,` para indicar que não há erro.`),ug()(),Ac(2404,`p`)(2405,`strong`),vN(2406,`Componente compatível`),ug(),vN(2407,`: `),Ac(2408,`code`),vN(2409,`po-datepicker`),ug()()()(),Ac(2410,`tr`,16)(2411,`td`,17)(2412,`div`,25)(2413,`span`,26),vN(2414,` errorAsyncProperties`),Kc(2415,`br`),ug()()(),Ac(2416,`td`,21)(2417,`code`,51),vN(2418,`ErrorAsyncProperties`),ug()(),Ac(2419,`td`,24)(2420,`em`)(2421,`strong`),vN(2422,`(opcional)`),ug()(),Ac(2423,`p`),vN(2424,`Realiza alguma validação customizada assíncrona no componente.`),ug(),Ac(2425,`p`)(2426,`strong`),vN(2427,`Componentes compatíveis:`),ug(),Ac(2428,`code`),vN(2429,`po-input`),ug(),vN(2430,`, `),Ac(2431,`code`),vN(2432,`po-number`),ug(),vN(2433,`, `),Ac(2434,`code`),vN(2435,`po-decimal`),ug(),vN(2436,`, `),Ac(2437,`code`),vN(2438,`po-password`),ug(),vN(2439,`.`),ug()()(),Ac(2440,`tr`,16)(2441,`td`,17)(2442,`div`,25)(2443,`span`,26),vN(2444,` errorLimit`),Kc(2445,`br`),ug()()(),Ac(2446,`td`,21)(2447,`code`,29),vN(2448,`boolean`),ug()(),Ac(2449,`td`,24)(2450,`em`)(2451,`strong`),vN(2452,`(opcional)`),ug()(),Ac(2453,`p`),vN(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(2455,`blockquote`)(2456,`p`),vN(2457,`Caso essa propriedade seja definida como `),Ac(2458,`code`),vN(2459,`true`),ug(),vN(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()(),Ac(2461,`p`)(2462,`strong`),vN(2463,`Componentes compatíveis:`),ug(),Ac(2464,`code`),vN(2465,`po-checkbox-group`),ug(),vN(2466,`, `),Ac(2467,`code`),vN(2468,`po-combo`),ug(),vN(2469,`, `),Ac(2470,`code`),vN(2471,`po-datepicker`),ug(),vN(2472,`, `),Ac(2473,`code`),vN(2474,`po-datepicker-range`),ug(),vN(2475,`, `),Ac(2476,`code`),vN(2477,`po-decimal`),ug(),vN(2478,`, `),Ac(2479,`code`),vN(2480,`po-input`),ug(),vN(2481,`, `),Ac(2482,`code`),vN(2483,`po-lookup`),ug(),vN(2484,`, `),Ac(2485,`code`),vN(2486,`po-multiselect`),ug(),vN(2487,`, `),Ac(2488,`code`),vN(2489,`po-number`),ug(),vN(2490,`, `),Ac(2491,`code`),vN(2492,`po-password`),ug(),vN(2493,`, `),Ac(2494,`code`),vN(2495,`po-radio-group`),ug(),vN(2496,`, `),Ac(2497,`code`),vN(2498,`po-select`),ug(),vN(2499,`,
`),Ac(2500,`code`),vN(2501,`po-switch`),ug(),vN(2502,`, `),Ac(2503,`code`),vN(2504,`po-textarea`),ug(),vN(2505,`, `),Ac(2506,`code`),vN(2507,`po-timepicker`),ug(),vN(2508,`.`),ug()()(),Ac(2509,`tr`,16)(2510,`td`,17)(2511,`div`,25)(2512,`span`,26),vN(2513,` errorMessage`),Kc(2514,`br`),ug()()(),Ac(2515,`td`,21)(2516,`code`,27),vN(2517,`string`),ug()(),Ac(2518,`td`,24)(2519,`em`)(2520,`strong`),vN(2521,`(opcional)`),ug()(),Ac(2522,`p`),vN(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),ug(),Ac(2524,`p`),vN(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),ug(),Ac(2526,`ul`)(2527,`li`),vN(2528,`pattern;`),ug(),Ac(2529,`li`),vN(2530,`minValue;`),ug(),Ac(2531,`li`),vN(2532,`maxValue;`),ug(),Ac(2533,`li`),vN(2534,`required;`),ug()(),Ac(2535,`blockquote`)(2536,`p`),vN(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Ac(2538,`code`),vN(2539,`po-datepicker`),ug(),vN(2540,`, `),Ac(2541,`code`),vN(2542,`po-input`),ug(),vN(2543,`, `),Ac(2544,`code`),vN(2545,`po-number`),ug(),vN(2546,`, `),Ac(2547,`code`),vN(2548,`po-decimal`),ug(),vN(2549,`, `),Ac(2550,`code`),vN(2551,`po-password`),ug(),vN(2552,`, `),Ac(2553,`code`),vN(2554,`po-timepicker`),ug(),vN(2555,`, \xE9 necess\xE1rio que a propriedade
`),Ac(2556,`code`),vN(2557,`requiredFieldErrorMessage`),ug(),vN(2558,` esteja como `),Ac(2559,`code`),vN(2560,`true`),ug(),vN(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Ac(2562,`code`),vN(2563,`po-datepicker-range`),ug(),vN(2564,`, `),Ac(2565,`code`),vN(2566,`po-select`),ug(),vN(2567,`, `),Ac(2568,`code`),vN(2569,`po-checkbox-group`),ug(),vN(2570,`, `),Ac(2571,`code`),vN(2572,`po-radio-group`),ug(),vN(2573,`, `),Ac(2574,`code`),vN(2575,`po-multiselect`),ug(),vN(2576,`, `),Ac(2577,`code`),vN(2578,`po-combo`),ug(),vN(2579,`,
`),Ac(2580,`code`),vN(2581,`po-lookup`),ug(),vN(2582,` e `),Ac(2583,`code`),vN(2584,`po-textarea`),ug(),vN(2585,` não é necessário passar a propriedade `),Ac(2586,`code`),vN(2587,`requiredFieldErrorMessage`),ug(),vN(2588,`.`),ug()(),Ac(2589,`p`)(2590,`strong`),vN(2591,`Componentes compatíveis:`),ug(),Ac(2592,`code`),vN(2593,`po-checkbox-group`),ug(),vN(2594,`, `),Ac(2595,`code`),vN(2596,`po-combo`),ug(),vN(2597,`, `),Ac(2598,`code`),vN(2599,`po-datepicker`),ug(),vN(2600,`, `),Ac(2601,`code`),vN(2602,`po-datepicker-range`),ug(),vN(2603,`, `),Ac(2604,`code`),vN(2605,`po-decimal`),ug(),vN(2606,`, `),Ac(2607,`code`),vN(2608,`po-input`),ug(),vN(2609,`, `),Ac(2610,`code`),vN(2611,`po-lookup`),ug(),vN(2612,`, `),Ac(2613,`code`),vN(2614,`po-multiselect`),ug(),vN(2615,`, `),Ac(2616,`code`),vN(2617,`po-number`),ug(),vN(2618,`, `),Ac(2619,`code`),vN(2620,`po-password`),ug(),vN(2621,`, `),Ac(2622,`code`),vN(2623,`po-radio-group`),ug(),vN(2624,`, `),Ac(2625,`code`),vN(2626,`po-select`),ug(),vN(2627,`,
`),Ac(2628,`code`),vN(2629,`po-switch`),ug(),vN(2630,`, `),Ac(2631,`code`),vN(2632,`po-textarea`),ug(),vN(2633,`, `),Ac(2634,`code`),vN(2635,`po-timepicker`),ug(),vN(2636,`.`),ug()()(),Ac(2637,`tr`,16)(2638,`td`,17)(2639,`div`,25)(2640,`span`,26),vN(2641,` fieldLabel`),Kc(2642,`br`),ug()()(),Ac(2643,`td`,21)(2644,`code`,27),vN(2645,`string`),ug()(),Ac(2646,`td`,24)(2647,`em`)(2648,`strong`),vN(2649,`(opcional)`),ug()(),Ac(2650,`p`),vN(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ug(),Ac(2652,`p`),vN(2653,`O valor padrão é: `),Ac(2654,`code`),vN(2655,`label`),ug(),vN(2656,`.`),ug(),Ac(2657,`blockquote`)(2658,`p`),vN(2659,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(2660,`code`),vN(2661,`options`),ug(),vN(2662,`, `),Ac(2663,`code`),vN(2664,`optionsService`),ug(),vN(2665,` e `),Ac(2666,`code`),vN(2667,`searchService`),ug(),vN(2668,`.`),ug()()()(),Ac(2669,`tr`,16)(2670,`td`,17)(2671,`div`,25)(2672,`span`,26),vN(2673,` fieldValue`),Kc(2674,`br`),ug()()(),Ac(2675,`td`,21)(2676,`code`,27),vN(2677,`string`),ug()(),Ac(2678,`td`,24)(2679,`em`)(2680,`strong`),vN(2681,`(opcional)`),ug()(),Ac(2682,`p`),vN(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ug(),Ac(2684,`p`),vN(2685,`O valor padrão é: `),Ac(2686,`code`),vN(2687,`value`),ug(),vN(2688,`.`),ug(),Ac(2689,`blockquote`)(2690,`p`),vN(2691,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(2692,`code`),vN(2693,`options`),ug(),vN(2694,`, `),Ac(2695,`code`),vN(2696,`optionsService`),ug(),vN(2697,` e `),Ac(2698,`code`),vN(2699,`searchService`),ug(),vN(2700,`.`),ug()()()(),Ac(2701,`tr`,16)(2702,`td`,17)(2703,`div`,25)(2704,`span`,26),vN(2705,` filterMinlength`),Kc(2706,`br`),ug()()(),Ac(2707,`td`,21)(2708,`code`,45),vN(2709,`number`),ug()(),Ac(2710,`td`,24)(2711,`em`)(2712,`strong`),vN(2713,`(opcional)`),ug()(),Ac(2714,`p`),vN(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Ac(2716,`code`),vN(2717,`po-combo`),ug(),vN(2718,`.`),ug()()(),Ac(2719,`tr`,16)(2720,`td`,17)(2721,`div`,25)(2722,`span`,26),vN(2723,` filterMode`),Kc(2724,`br`),ug()()(),Ac(2725,`td`,21)(2726,`code`,52),vN(2727,`PoMultiselectFilterMode`),ug()(),Ac(2728,`td`,24)(2729,`em`)(2730,`strong`),vN(2731,`(opcional)`),ug()(),Ac(2732,`p`),vN(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ac(2734,`code`),vN(2735,`startsWith`),ug(),vN(2736,`, `),Ac(2737,`code`),vN(2738,`contains`),ug(),vN(2739,` ou `),Ac(2740,`code`),vN(2741,`endsWith`),ug(),vN(2742,`.`),ug(),Ac(2743,`blockquote`)(2744,`p`),vN(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),ug()(),Ac(2746,`p`)(2747,`strong`),vN(2748,`Componente compatível:`),ug(),Ac(2749,`code`),vN(2750,`po-multiselect`),ug(),vN(2751,`.`),ug()()(),Ac(2752,`tr`,16)(2753,`td`,17)(2754,`div`,25)(2755,`span`,26),vN(2756,` forceBooleanComponentType`),Kc(2757,`br`),ug()()(),Ac(2758,`td`,21)(2759,`code`,53),vN(2760,`ForceBooleanComponentEnum`),ug()(),Ac(2761,`td`,24)(2762,`em`)(2763,`strong`),vN(2764,`(opcional)`),ug()(),Ac(2765,`p`),vN(2766,`Valores aceitos:`),ug(),Ac(2767,`ul`)(2768,`li`),vN(2769,`ForceBooleanComponentEnum.switch`),ug(),Ac(2770,`li`),vN(2771,`ForceBooleanComponentEnum.checkbox`),ug()()()(),Ac(2772,`tr`,16)(2773,`td`,17)(2774,`div`,25)(2775,`span`,26),vN(2776,` forceOptionsComponentType`),Kc(2777,`br`),ug()()(),Ac(2778,`td`,21)(2779,`code`,54),vN(2780,`ForceOptionComponentEnum`),ug()(),Ac(2781,`td`,24)(2782,`em`)(2783,`strong`),vN(2784,`(opcional)`),ug()(),Ac(2785,`p`),vN(2786,`pode ser utilizada em conjunto com a propriedade `),Ac(2787,`code`),vN(2788,`options`),ug(),vN(2789,` forçando o componente a renderizar um `),Ac(2790,`code`),vN(2791,`po-select`),ug(),vN(2792,` ou `),Ac(2793,`code`),vN(2794,`po-radio-group`),ug(),vN(2795,`.`),ug(),Ac(2796,`p`),vN(2797,`Valores aceitos:`),ug(),Ac(2798,`ul`)(2799,`li`),vN(2800,`ForceOptionComponentEnum.radioGroup`),ug(),Ac(2801,`li`),vN(2802,`ForceOptionComponentEnum.select`),ug()(),Ac(2803,`blockquote`)(2804,`p`),vN(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Ac(2806,`code`),vN(2807,`optionsMulti`),ug(),vN(2808,` e `),Ac(2809,`code`),vN(2810,`optionsService`),ug(),vN(2811,`.`),ug()()()(),Ac(2812,`tr`,16)(2813,`td`,17)(2814,`div`,25)(2815,`span`,26),vN(2816,` formField`),Kc(2817,`br`),ug()()(),Ac(2818,`td`,21)(2819,`code`,27),vN(2820,`string`),ug()(),Ac(2821,`td`,24)(2822,`em`)(2823,`strong`),vN(2824,`(opcional)`),ug()(),Ac(2825,`p`),vN(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ac(2827,`code`),vN(2828,`url`),ug(),vN(2829,`.`),ug(),Ac(2830,`blockquote`)(2831,`p`),vN(2832,`O valor default é `),Ac(2833,`code`),vN(2834,`files`),ug()()(),Ac(2835,`p`)(2836,`strong`),vN(2837,`Componente compatível`),ug(),vN(2838,`: `),Ac(2839,`code`),vN(2840,`po-upload`),ug()()()(),Ac(2841,`tr`,16)(2842,`td`,17)(2843,`div`,25)(2844,`span`,26),vN(2845,` format`),Kc(2846,`br`),ug()()(),Ac(2847,`td`,21)(2848,`code`,27),vN(2849,`string `),ug(),Ac(2850,`code`,32),vN(2851,` Array<string>`),ug()(),Ac(2852,`td`,24)(2853,`em`)(2854,`strong`),vN(2855,`(opcional)`),ug()(),Ac(2856,`p`),vN(2857,`Formato de exibição no campo.`),ug(),Ac(2858,`p`),vN(2859,`Ao utilizar esta propriedade com o `),Ac(2860,`code`),vN(2861,`type`),ug(),Ac(2862,`em`),vN(2863,`PoDynamicFieldType.Date`),ug(),vN(2864,` ou `),Ac(2865,`em`),vN(2866,`PoDynamicFieldType.DateTime`),ug(),vN(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ug(),Ac(2868,`p`),vN(2869,`Valores válidos:`),ug(),Ac(2870,`ul`)(2871,`li`),vN(2872,`dd/mm/yyyy`),ug(),Ac(2873,`li`),vN(2874,`mm/dd/yyyy`),ug(),Ac(2875,`li`),vN(2876,`yyyy/mm/dd`),ug()(),Ac(2877,`p`),vN(2878,`Ao utilizar com o `),Ac(2879,`code`),vN(2880,`type`),ug(),Ac(2881,`em`),vN(2882,`PoDynamicFieldType.Time`),ug(),vN(2883,`, define o formato de exibição do horário:`),ug(),Ac(2884,`p`),vN(2885,`Valores válidos:`),ug(),Ac(2886,`ul`)(2887,`li`)(2888,`code`),vN(2889,`24`),ug(),vN(2890,`: formato de 24 horas (padrão)`),ug(),Ac(2891,`li`)(2892,`code`),vN(2893,`12`),ug(),vN(2894,`: formato de 12 horas com indicador AM/PM`),ug()(),Ac(2895,`p`),vN(2896,`Também pode-se utilizar em conjunto com `),Ac(2897,`code`),vN(2898,`searchService`),ug(),vN(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ug(),Ac(2900,`p`)(2901,`strong`),vN(2902,`Componentes compatíveis:`),ug(),Ac(2903,`code`),vN(2904,`po-datepicker`),ug(),vN(2905,`, `),Ac(2906,`code`),vN(2907,`po-datetimepicker`),ug(),vN(2908,`, `),Ac(2909,`code`),vN(2910,`po-timepicker`),ug(),vN(2911,`, `),Ac(2912,`code`),vN(2913,`po-lookup`),ug(),vN(2914,`.`),ug()()(),Ac(2915,`tr`,16)(2916,`td`,17)(2917,`div`,25)(2918,`span`,26),vN(2919,` formatModel`),Kc(2920,`br`),ug()()(),Ac(2921,`td`,21)(2922,`code`,29),vN(2923,`boolean`),ug()(),Ac(2924,`td`,24)(2925,`em`)(2926,`strong`),vN(2927,`(opcional)`),ug()(),Ac(2928,`p`),vN(2929,`Indica se o `),Ac(2930,`code`),vN(2931,`model`),ug(),vN(2932,` receberá o valor formatado pelas propriedades `),Ac(2933,`code`),vN(2934,`p-label-on`),ug(),vN(2935,` e `),Ac(2936,`code`),vN(2937,`p-label-off`),ug(),vN(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ug(),Ac(2939,`p`),vN(2940,`O valor padrão é: `),Ac(2941,`code`),vN(2942,`false`),ug(),vN(2943,`.`),ug(),Ac(2944,`blockquote`)(2945,`p`),vN(2946,`Esta propriedade está disponivel apenas para o `),Ac(2947,`code`),vN(2948,`swicth`),ug(),vN(2949,`.`),ug()()()(),Ac(2950,`tr`,16)(2951,`td`,17)(2952,`div`,25)(2953,`span`,26),vN(2954,` formatTime`),Kc(2955,`br`),ug()()(),Ac(2956,`td`,21)(2957,`code`,27),vN(2958,`string`),ug()(),Ac(2959,`td`,24)(2960,`em`)(2961,`strong`),vN(2962,`(opcional)`),ug()(),Ac(2963,`p`),vN(2964,`Define o formato de exibição do timer (`),Ac(2965,`code`),vN(2966,`'12'`),ug(),vN(2967,` ou `),Ac(2968,`code`),vN(2969,`'24'`),ug(),vN(2970,`).`),ug(),Ac(2971,`p`)(2972,`strong`),vN(2973,`Componente compatível:`),ug(),Ac(2974,`code`),vN(2975,`po-datetimepicker`),ug()()()(),Ac(2976,`tr`,16)(2977,`td`,17)(2978,`div`,25)(2979,`span`,26),vN(2980,` gridColumns`),Kc(2981,`br`),ug()()(),Ac(2982,`td`,21)(2983,`code`,45),vN(2984,`number`),ug()(),Ac(2985,`td`,24)(2986,`em`)(2987,`strong`),vN(2988,`(opcional)`),ug()(),Ac(2989,`p`),vN(2990,`Tamanho de exibição do campo em telas.`),ug(),Ac(2991,`p`),vN(2992,`Deve ser usado o sistema de `),Ac(2993,`strong`),vN(2994,`grid`),ug(),vN(2995,` do PO (1 ... 12 colunas).`),ug(),Ac(2996,`blockquote`)(2997,`p`),vN(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(2999,`tr`,16)(3e3,`td`,17)(3001,`div`,25)(3002,`span`,26),vN(3003,` gridLgColumns`),Kc(3004,`br`),ug()()(),Ac(3005,`td`,21)(3006,`code`,45),vN(3007,`number`),ug()(),Ac(3008,`td`,24)(3009,`em`)(3010,`strong`),vN(3011,`(opcional)`),ug()(),Ac(3012,`p`),vN(3013,`Tamanho de exibição do campo em telas grandes (lg).`),ug(),Ac(3014,`p`),vN(3015,`Deve ser usado o sistema de `),Ac(3016,`strong`),vN(3017,`grid`),ug(),vN(3018,` do PO (1 ... 12 colunas).`),ug(),Ac(3019,`blockquote`)(3020,`p`),vN(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3022,`code`),vN(3023,`gridColumns`),ug(),vN(3024,`.`),ug()()()(),Ac(3025,`tr`,16)(3026,`td`,17)(3027,`div`,25)(3028,`span`,26),vN(3029,` gridLgPull`),Kc(3030,`br`),ug()()(),Ac(3031,`td`,21)(3032,`code`,45),vN(3033,`number`),ug()(),Ac(3034,`td`,24)(3035,`em`)(3036,`strong`),vN(3037,`(opcional)`),ug()(),Ac(3038,`p`),vN(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ug(),Ac(3040,`p`),vN(3041,`Deve ser usado o sistema de `),Ac(3042,`strong`),vN(3043,`grid`),ug(),vN(3044,` do PO (1 ... 11 colunas).`),ug(),Ac(3045,`blockquote`)(3046,`p`),vN(3047,`Esta propriedade não funciona com a propriedade `),Ac(3048,`code`),vN(3049,`gridColumns`),ug(),vN(3050,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3051,`tr`,16)(3052,`td`,17)(3053,`div`,25)(3054,`span`,26),vN(3055,` gridMdColumns`),Kc(3056,`br`),ug()()(),Ac(3057,`td`,21)(3058,`code`,45),vN(3059,`number`),ug()(),Ac(3060,`td`,24)(3061,`em`)(3062,`strong`),vN(3063,`(opcional)`),ug()(),Ac(3064,`p`),vN(3065,`Tamanho de exibição do campo em telas médias (md).`),ug(),Ac(3066,`p`),vN(3067,`Deve ser usado o sistema de `),Ac(3068,`strong`),vN(3069,`grid`),ug(),vN(3070,` do PO (1 ... 12 colunas).`),ug(),Ac(3071,`blockquote`)(3072,`p`),vN(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3074,`code`),vN(3075,`gridColumns`),ug(),vN(3076,`.`),ug()()()(),Ac(3077,`tr`,16)(3078,`td`,17)(3079,`div`,25)(3080,`span`,26),vN(3081,` gridMdPull`),Kc(3082,`br`),ug()()(),Ac(3083,`td`,21)(3084,`code`,45),vN(3085,`number`),ug()(),Ac(3086,`td`,24)(3087,`em`)(3088,`strong`),vN(3089,`(opcional)`),ug()(),Ac(3090,`p`),vN(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ug(),Ac(3092,`p`),vN(3093,`Deve ser usado o sistema de `),Ac(3094,`strong`),vN(3095,`grid`),ug(),vN(3096,` do PO (1 ... 11 colunas).`),ug(),Ac(3097,`blockquote`)(3098,`p`),vN(3099,`Esta propriedade não funciona com a propriedade `),Ac(3100,`code`),vN(3101,`gridColumns`),ug(),vN(3102,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3103,`tr`,16)(3104,`td`,17)(3105,`div`,25)(3106,`span`,26),vN(3107,` gridSmColumns`),Kc(3108,`br`),ug()()(),Ac(3109,`td`,21)(3110,`code`,45),vN(3111,`number`),ug()(),Ac(3112,`td`,24)(3113,`em`)(3114,`strong`),vN(3115,`(opcional)`),ug()(),Ac(3116,`p`),vN(3117,`Tamanho de exibição do campo em telas menores (sm).`),ug(),Ac(3118,`p`),vN(3119,`Deve ser usado o sistema de `),Ac(3120,`strong`),vN(3121,`grid`),ug(),vN(3122,` do PO (1 ... 12 colunas).`),ug(),Ac(3123,`blockquote`)(3124,`p`),vN(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3126,`code`),vN(3127,`gridColumns`),ug(),vN(3128,`.`),ug()()()(),Ac(3129,`tr`,16)(3130,`td`,17)(3131,`div`,25)(3132,`span`,26),vN(3133,` gridSmPull`),Kc(3134,`br`),ug()()(),Ac(3135,`td`,21)(3136,`code`,45),vN(3137,`number`),ug()(),Ac(3138,`td`,24)(3139,`em`)(3140,`strong`),vN(3141,`(opcional)`),ug()(),Ac(3142,`p`),vN(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ug(),Ac(3144,`p`),vN(3145,`Deve ser usado o sistema de `),Ac(3146,`strong`),vN(3147,`grid`),ug(),vN(3148,` do PO (1 ... 11 colunas).`),ug(),Ac(3149,`blockquote`)(3150,`p`),vN(3151,`Esta propriedade não funciona com a propriedade `),Ac(3152,`code`),vN(3153,`gridColumns`),ug(),vN(3154,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3155,`tr`,16)(3156,`td`,17)(3157,`div`,25)(3158,`span`,26),vN(3159,` gridXlColumns`),Kc(3160,`br`),ug()()(),Ac(3161,`td`,21)(3162,`code`,45),vN(3163,`number`),ug()(),Ac(3164,`td`,24)(3165,`em`)(3166,`strong`),vN(3167,`(opcional)`),ug()(),Ac(3168,`p`),vN(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),ug(),Ac(3170,`p`),vN(3171,`Deve ser usado o sistema de `),Ac(3172,`strong`),vN(3173,`grid`),ug(),vN(3174,` do PO (1 ... 12 colunas).`),ug(),Ac(3175,`blockquote`)(3176,`p`),vN(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3178,`code`),vN(3179,`gridColumns`),ug(),vN(3180,`.`),ug()()()(),Ac(3181,`tr`,16)(3182,`td`,17)(3183,`div`,25)(3184,`span`,26),vN(3185,` gridXlPull`),Kc(3186,`br`),ug()()(),Ac(3187,`td`,21)(3188,`code`,45),vN(3189,`number`),ug()(),Ac(3190,`td`,24)(3191,`em`)(3192,`strong`),vN(3193,`(opcional)`),ug()(),Ac(3194,`p`),vN(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ug(),Ac(3196,`p`),vN(3197,`Deve ser usado o sistema de `),Ac(3198,`strong`),vN(3199,`grid`),ug(),vN(3200,` do PO (1 ... 11 colunas).`),ug(),Ac(3201,`blockquote`)(3202,`p`),vN(3203,`Esta propriedade não funciona com a propriedade `),Ac(3204,`code`),vN(3205,`gridColumns`),ug(),vN(3206,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3207,`tr`,16)(3208,`td`,17)(3209,`div`,25)(3210,`span`,26),vN(3211,` headers`),Kc(3212,`br`),ug()()(),Ac(3213,`td`,21)(3214,`code`,55),vN(3215,`{ [name: string]: string `),ug(),Ac(3216,`code`,56),vN(3217,` Array<string>;
}`),ug()(),Ac(3218,`td`,24)(3219,`em`)(3220,`strong`),vN(3221,`(opcional)`),ug()(),Ac(3222,`p`),vN(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ug(),Ac(3224,`p`)(3225,`strong`),vN(3226,`Componente compatível`),ug(),vN(3227,`: `),Ac(3228,`code`),vN(3229,`po-upload`),ug()()()(),Ac(3230,`tr`,16)(3231,`td`,17)(3232,`div`,25)(3233,`span`,26),vN(3234,` help`),Kc(3235,`br`),ug()()(),Ac(3236,`td`,21)(3237,`code`,27),vN(3238,`string`),ug()(),Ac(3239,`td`,24)(3240,`em`)(3241,`strong`),vN(3242,`(opcional)`),ug()(),Ac(3243,`p`),vN(3244,`Texto de ajuda.`),ug()()(),Ac(3245,`tr`,16)(3246,`td`,17)(3247,`div`,25)(3248,`span`,26),vN(3249,` helper`),Kc(3250,`br`),ug()()(),Ac(3251,`td`,21)(3252,`code`,27),vN(3253,`string `),ug(),Ac(3254,`code`,38),vN(3255,` PoHelperOptions`),ug()(),Ac(3256,`td`,24)(3257,`em`)(3258,`strong`),vN(3259,`(opcional)`),ug()(),Ac(3260,`p`),vN(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),ug()()(),Ac(3262,`tr`,16)(3263,`td`,17)(3264,`div`,25)(3265,`span`,26),vN(3266,` hideLabelStatus`),Kc(3267,`br`),ug()()(),Ac(3268,`td`,21)(3269,`code`,29),vN(3270,`boolean`),ug()(),Ac(3271,`td`,24)(3272,`em`)(3273,`strong`),vN(3274,`(opcional)`),ug()(),Ac(3275,`p`),vN(3276,`Indica se o status do `),Ac(3277,`code`),vN(3278,`model`),ug(),vN(3279,` será escondido visualmente ao lado do switch`),ug()()(),Ac(3280,`tr`,16)(3281,`td`,17)(3282,`div`,25)(3283,`span`,26),vN(3284,` hidePasswordPeek`),Kc(3285,`br`),ug()()(),Ac(3286,`td`,21)(3287,`code`,29),vN(3288,`boolean`),ug()(),Ac(3289,`td`,24)(3290,`em`)(3291,`strong`),vN(3292,`(opcional)`),ug()(),Ac(3293,`p`),vN(3294,`Permite esconder a função de espiar a senha digitada no `),Ac(3295,`code`),vN(3296,`po-password`),ug(),vN(3297,`.`),ug()()(),Ac(3298,`tr`,16)(3299,`td`,17)(3300,`div`,25)(3301,`span`,26),vN(3302,` hideRestrictionsInfo`),Kc(3303,`br`),ug()()(),Ac(3304,`td`,21)(3305,`code`,29),vN(3306,`boolean`),ug()(),Ac(3307,`td`,24)(3308,`em`)(3309,`strong`),vN(3310,`(opcional)`),ug()(),Ac(3311,`p`),vN(3312,`Oculta visualmente as informações de restrições para o upload.`),ug(),Ac(3313,`p`)(3314,`strong`),vN(3315,`Componente compatível`),ug(),vN(3316,`: `),Ac(3317,`code`),vN(3318,`po-upload`),ug()()()(),Ac(3319,`tr`,16)(3320,`td`,17)(3321,`div`,25)(3322,`span`,26),vN(3323,` hideSearch`),Kc(3324,`br`),ug()()(),Ac(3325,`td`,21)(3326,`code`,29),vN(3327,`boolean`),ug()(),Ac(3328,`td`,24)(3329,`em`)(3330,`strong`),vN(3331,`(opcional)`),ug()(),Ac(3332,`p`),vN(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),Ac(3334,`code`),vN(3335,`po-multiselect`),ug(),vN(3336,`.`),ug()()(),Ac(3337,`tr`,16)(3338,`td`,17)(3339,`div`,25)(3340,`span`,26),vN(3341,` hideSelectAll`),Kc(3342,`br`),ug()()(),Ac(3343,`td`,21)(3344,`code`,29),vN(3345,`boolean`),ug()(),Ac(3346,`td`,24)(3347,`em`)(3348,`strong`),vN(3349,`(opcional)`),ug()(),Ac(3350,`p`),vN(3351,`Indica se o campo "Selecionar todos" do `),Ac(3352,`code`),vN(3353,`po-multiselect`),ug(),vN(3354,` será escondido.`),ug()()(),Ac(3355,`tr`,16)(3356,`td`,17)(3357,`div`,25)(3358,`span`,26),vN(3359,` hideSelectButton`),Kc(3360,`br`),ug()()(),Ac(3361,`td`,21)(3362,`code`,29),vN(3363,`boolean`),ug()(),Ac(3364,`td`,24)(3365,`em`)(3366,`strong`),vN(3367,`(opcional)`),ug()(),Ac(3368,`p`),vN(3369,`Omite o botão de seleção de arquivos.`),ug(),Ac(3370,`blockquote`)(3371,`p`),vN(3372,`Caso o valor definido seja `),Ac(3373,`code`),vN(3374,`true`),ug(),vN(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(3376,`code`),vN(3377,`selectFiles()`),ug(),vN(3378,` para seleção de arquivos.`),ug()(),Ac(3379,`p`)(3380,`strong`),vN(3381,`Componente compatível`),ug(),vN(3382,`: `),Ac(3383,`code`),vN(3384,`po-upload`),ug()()()(),Ac(3385,`tr`,16)(3386,`td`,17)(3387,`div`,25)(3388,`span`,26),vN(3389,` hideSendButton`),Kc(3390,`br`),ug()()(),Ac(3391,`td`,21)(3392,`code`,29),vN(3393,`boolean`),ug()(),Ac(3394,`td`,24)(3395,`em`)(3396,`strong`),vN(3397,`(opcional)`),ug()(),Ac(3398,`p`),vN(3399,`Omite o botão de envio de arquivos.`),ug(),Ac(3400,`blockquote`)(3401,`p`),vN(3402,`Caso o valor definido seja `),Ac(3403,`code`),vN(3404,`true`),ug(),vN(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(3406,`code`),vN(3407,`sendFiles()`),ug(),vN(3408,` para envio do(s) arquivo(s) selecionado(s).`),ug()(),Ac(3409,`p`)(3410,`strong`),vN(3411,`Componente compatível`),ug(),vN(3412,`: `),Ac(3413,`code`),vN(3414,`po-upload`),ug()()()(),Ac(3415,`tr`,16)(3416,`td`,17)(3417,`div`,25)(3418,`span`,26),vN(3419,` icon`),Kc(3420,`br`),ug()()(),Ac(3421,`td`,21)(3422,`code`,27),vN(3423,`string `),ug(),Ac(3424,`code`,57),vN(3425,` TemplateRef<void>`),ug()(),Ac(3426,`td`,24)(3427,`em`)(3428,`strong`),vN(3429,`(opcional)`),ug()(),Ac(3430,`p`),vN(3431,`Define o ícone que será exibido no início do campo.`),ug(),Ac(3432,`blockquote`)(3433,`p`),vN(3434,`Esta propriedade só pode ser utilizado nos campos:`),ug()(),Ac(3435,`ul`)(3436,`li`),vN(3437,`Input;`),ug(),Ac(3438,`li`),vN(3439,`Number;`),ug(),Ac(3440,`li`),vN(3441,`Decimal;`),ug(),Ac(3442,`li`),vN(3443,`Combo;`),ug(),Ac(3444,`li`),vN(3445,`Password;`),ug()(),Ac(3446,`blockquote`)(3447,`p`),vN(3448,`Veja a disponibilidade de ícones em `),Ac(3449,`a`,58),vN(3450,`biblioteca de ícones`),ug(),vN(3451,`.`),ug()()()(),Ac(3452,`tr`,16)(3453,`td`,17)(3454,`div`,25)(3455,`span`,26),vN(3456,` infiniteScroll`),Kc(3457,`br`),ug()()(),Ac(3458,`td`,21)(3459,`code`,29),vN(3460,`boolean`),ug()(),Ac(3461,`td`,24)(3462,`em`)(3463,`strong`),vN(3464,`(opcional)`),ug()(),Ac(3465,`p`),vN(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ug(),Ac(3467,`p`)(3468,`strong`),vN(3469,`Componentes compatíveis:`),ug(),Ac(3470,`code`),vN(3471,`po-combo`),ug(),vN(3472,`, `),Ac(3473,`code`),vN(3474,`po-lookup`),ug(),vN(3475,`.`),ug()()(),Ac(3476,`tr`,16)(3477,`td`,17)(3478,`div`,25)(3479,`span`,26),vN(3480,` infiniteScrollDistance`),Kc(3481,`br`),ug()()(),Ac(3482,`td`,21)(3483,`code`,45),vN(3484,`number`),ug()(),Ac(3485,`td`,24)(3486,`em`)(3487,`strong`),vN(3488,`(opcional)`),ug()(),Ac(3489,`p`),vN(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Ac(3491,`strong`),vN(3492,`Exemplos`),ug(),Ac(3493,`code`),vN(3494,`{ infiniteScrollDistance: 80 }`),ug(),vN(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),ug(),Ac(3496,`p`)(3497,`strong`),vN(3498,`Componente compatível:`),ug(),Ac(3499,`code`),vN(3500,`po-combo`),ug(),vN(3501,`.`),ug()()(),Ac(3502,`tr`,16)(3503,`td`,17)(3504,`div`,25)(3505,`span`,26),vN(3506,` initValue`),Kc(3507,`br`),ug()()(),Ac(3508,`td`,21)(3509,`code`,33),vN(3510,`any`),ug()(),Ac(3511,`td`,24)(3512,`em`)(3513,`strong`),vN(3514,`(opcional)`),ug()(),Ac(3515,`p`),vN(3516,`Define um valor inicial para um filtro de busca avançada.`),ug(),Ac(3517,`p`),vN(3518,`O valor será atribuído ao campo correspondente à propriedade `),Ac(3519,`code`),vN(3520,`property`),ug(),vN(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),ug()()(),Ac(3522,`tr`,16)(3523,`td`,17)(3524,`div`,25)(3525,`span`,26),vN(3526,` invalidValue`),Kc(3527,`br`),ug()()(),Ac(3528,`td`,21)(3529,`code`,29),vN(3530,`boolean`),ug()(),Ac(3531,`td`,24)(3532,`em`)(3533,`strong`),vN(3534,`(opcional)`),ug()(),Ac(3535,`p`),vN(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ac(3537,`code`),vN(3538,`p-field-error-message`),ug(),vN(3539,`.`),ug(),Ac(3540,`blockquote`)(3541,`p`),vN(3542,`Caso essa propriedade seja definida como `),Ac(3543,`code`),vN(3544,`true`),ug(),vN(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ug()(),Ac(3546,`p`)(3547,`strong`),vN(3548,`Componente compatível`),ug(),vN(3549,`: `),Ac(3550,`code`),vN(3551,`po-switch`),ug()()()(),Ac(3552,`tr`,16)(3553,`td`,17)(3554,`div`,25)(3555,`span`,26),vN(3556,` isoFormat`),Kc(3557,`br`),ug()()(),Ac(3558,`td`,21)(3559,`code`,59),vN(3560,`PoDatepickerIsoFormat`),ug()(),Ac(3561,`td`,24)(3562,`em`)(3563,`strong`),vN(3564,`(opcional)`),ug()(),Ac(3565,`p`),vN(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),ug(),Ac(3567,`blockquote`)(3568,`p`),vN(3569,`Veja os valores válidos no `),Ac(3570,`code`),vN(3571,`PoDatepickerIsoFormat`),ug(),vN(3572,`.`),ug()(),Ac(3573,`p`)(3574,`strong`),vN(3575,`Componente compatível:`),ug(),Ac(3576,`code`),vN(3577,`po-datepicker`),ug()()()(),Ac(3578,`tr`,16)(3579,`td`,17)(3580,`div`,25)(3581,`span`,26),vN(3582,` key`),Kc(3583,`br`),ug()()(),Ac(3584,`td`,21)(3585,`code`,29),vN(3586,`boolean`),ug()(),Ac(3587,`td`,24)(3588,`em`)(3589,`strong`),vN(3590,`(opcional)`),ug()(),Ac(3591,`p`),vN(3592,`Identificador`),ug()()(),Ac(3593,`tr`,16)(3594,`td`,17)(3595,`div`,25)(3596,`span`,26),vN(3597,` keydown`),Kc(3598,`br`),ug()()(),Ac(3599,`td`,21)(3600,`code`,44),vN(3601,`Function`),ug()(),Ac(3602,`td`,24)(3603,`em`)(3604,`strong`),vN(3605,`(opcional)`),ug()(),Ac(3606,`p`),vN(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(3608,`code`),vN(3609,`KeyboardEvent`),ug(),vN(3610,` com informações sobre a tecla.`),ug()()(),Ac(3611,`tr`,16)(3612,`td`,17)(3613,`div`,25)(3614,`span`,26),vN(3615,` label`),Kc(3616,`br`),ug()()(),Ac(3617,`td`,21)(3618,`code`,27),vN(3619,`string`),ug()(),Ac(3620,`td`,24)(3621,`em`)(3622,`strong`),vN(3623,`(opcional)`),ug()(),Ac(3624,`p`),vN(3625,`Rótulo do campo exibido.`),ug(),Ac(3626,`p`),vN(3627,`Caso não seja informado, será utilizado como `),Ac(3628,`code`),vN(3629,`label`),ug(),vN(3630,` o valor da propriedade `),Ac(3631,`code`),vN(3632,`property`),ug(),vN(3633,` com a primeira letra em maiúsculo.`),ug()()(),Ac(3634,`tr`,16)(3635,`td`,17)(3636,`div`,25)(3637,`span`,26),vN(3638,` labelPosition`),Kc(3639,`br`),ug()()(),Ac(3640,`td`,21)(3641,`code`,60),vN(3642,`PoSwitchLabelPosition`),ug()(),Ac(3643,`td`,24)(3644,`em`)(3645,`strong`),vN(3646,`(opcional)`),ug()(),Ac(3647,`p`),vN(3648,`Posição de exibição do rótulo do PoSwitch.`),ug(),Ac(3649,`blockquote`)(3650,`p`),vN(3651,`Por padrão exibe à direita.`),ug()()()(),Ac(3652,`tr`,16)(3653,`td`,17)(3654,`div`,25)(3655,`span`,26),vN(3656,` listboxControlPosition`),Kc(3657,`br`),ug()()(),Ac(3658,`td`,21)(3659,`code`,61),vN(3660,`'top' `),ug(),Ac(3661,`code`,62),vN(3662,` 'bottom'`),ug()(),Ac(3663,`td`,24)(3664,`em`)(3665,`strong`),vN(3666,`(opcional)`),ug()(),Ac(3667,`p`),vN(3668,`Define a direção preferida para exibição do `),Ac(3669,`code`),vN(3670,`listbox`),ug(),vN(3671,` em relação ao campo (`),Ac(3672,`code`),vN(3673,`top`),ug(),vN(3674,` ou `),Ac(3675,`code`),vN(3676,`bottom`),ug(),vN(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ug(),Ac(3678,`p`)(3679,`strong`),vN(3680,`Componentes compatíveis:`),ug(),Ac(3681,`code`),vN(3682,`po-multiselect`),ug(),vN(3683,`, `),Ac(3684,`code`),vN(3685,`po-combo`),ug(),vN(3686,`.`),ug()()(),Ac(3687,`tr`,16)(3688,`td`,17)(3689,`div`,25)(3690,`span`,26),vN(3691,` literals`),Kc(3692,`br`),ug()()(),Ac(3693,`td`,21)(3694,`code`,36),vN(3695,`PoLookupLiterals `),ug(),Ac(3696,`code`,63),vN(3697,` PoMultiselectLiterals `),ug(),Ac(3698,`code`,64),vN(3699,` PoComboLiterals `),ug(),Ac(3700,`code`,65),vN(3701,` PoDatepickerRangeLiterals `),ug(),Ac(3702,`code`,66),vN(3703,` PoUploadLiterals`),ug()(),Ac(3704,`td`,24)(3705,`em`)(3706,`strong`),vN(3707,`(opcional)`),ug()(),Ac(3708,`p`),vN(3709,`Objeto com as literais usadas para os seguintes componentes: `),Ac(3710,`code`),vN(3711,`po-lookup`),ug(),vN(3712,`, `),Ac(3713,`code`),vN(3714,`po-multiselect`),ug(),vN(3715,`, `),Ac(3716,`code`),vN(3717,`po-combo`),ug(),vN(3718,` e `),Ac(3719,`code`),vN(3720,`po-datepicker-range`),ug(),vN(3721,`.`),ug(),Ac(3722,`blockquote`)(3723,`p`),vN(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),ug()(),Ac(3725,`p`)(3726,`strong`),vN(3727,`Componentes compatíveis:`),ug(),Ac(3728,`code`),vN(3729,`po-lookup`),ug(),vN(3730,`, `),Ac(3731,`code`),vN(3732,`po-multiselect`),ug(),vN(3733,`, `),Ac(3734,`code`),vN(3735,`po-combo`),ug(),vN(3736,`, `),Ac(3737,`code`),vN(3738,`po-datepicker-range`),ug()()()(),Ac(3739,`tr`,16)(3740,`td`,17)(3741,`div`,25)(3742,`span`,26),vN(3743,` loading`),Kc(3744,`br`),ug()()(),Ac(3745,`td`,21)(3746,`code`,29),vN(3747,`boolean`),ug()(),Ac(3748,`td`,24)(3749,`em`)(3750,`strong`),vN(3751,`(opcional)`),ug()(),Ac(3752,`p`),vN(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),ug(),Ac(3754,`blockquote`)(3755,`p`),vN(3756,`Por padrão é `),Ac(3757,`code`),vN(3758,`false`),ug(),vN(3759,`.`),ug()(),Ac(3760,`p`)(3761,`strong`),vN(3762,`Componentes compatíveis:`),ug(),Ac(3763,`code`),vN(3764,`po-datepicker`),ug(),vN(3765,`, `),Ac(3766,`code`),vN(3767,`po-datepicker-range`),ug(),vN(3768,`, `),Ac(3769,`code`),vN(3770,`po-number`),ug(),vN(3771,`, `),Ac(3772,`code`),vN(3773,`po-decimal`),ug(),vN(3774,`,
`),Ac(3775,`code`),vN(3776,`po-input`),ug(),vN(3777,`, `),Ac(3778,`code`),vN(3779,`po-select`),ug(),vN(3780,`, `),Ac(3781,`code`),vN(3782,`po-switch`),ug(),vN(3783,`, `),Ac(3784,`code`),vN(3785,`po-combo`),ug(),vN(3786,`, `),Ac(3787,`code`),vN(3788,`po-lookup`),ug(),vN(3789,`, `),Ac(3790,`code`),vN(3791,`po-multiselect`),ug(),vN(3792,`,
`),Ac(3793,`code`),vN(3794,`po-textarea`),ug(),vN(3795,`, `),Ac(3796,`code`),vN(3797,`po-password`),ug(),vN(3798,`, `),Ac(3799,`code`),vN(3800,`po-upload`),ug(),vN(3801,`.`),ug()()(),Ac(3802,`tr`,16)(3803,`td`,17)(3804,`div`,25)(3805,`span`,26),vN(3806,` locale`),Kc(3807,`br`),ug()()(),Ac(3808,`td`,21)(3809,`code`,27),vN(3810,`string`),ug()(),Ac(3811,`td`,24)(3812,`em`)(3813,`strong`),vN(3814,`(opcional)`),ug()(),Ac(3815,`p`),vN(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Ac(3817,`a`,67)(3818,`code`),vN(3819,`I18n`),ug()()(),Ac(3820,`p`),vN(3821,`Exemplo de utilização:`),ug(),Ac(3822,`pre`)(3823,`code`),vN(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ug()(),Ac(3825,`blockquote`)(3826,`p`),vN(3827,`Para ver quais linguagens suportadas acesse `),Ac(3828,`a`,67)(3829,`code`),vN(3830,`I18n`),ug()()()(),Ac(3831,`p`)(3832,`strong`),vN(3833,`Componentes compatíveis:`),ug(),Ac(3834,`code`),vN(3835,`po-datepicker`),ug(),vN(3836,`, `),Ac(3837,`code`),vN(3838,`po-decimal`),ug(),vN(3839,`, `),Ac(3840,`code`),vN(3841,`po-timepicker`),ug(),vN(3842,`.`),ug()()(),Ac(3843,`tr`,16)(3844,`td`,17)(3845,`div`,25)(3846,`span`,26),vN(3847,` mask`),Kc(3848,`br`),ug()()(),Ac(3849,`td`,21)(3850,`code`,27),vN(3851,`string`),ug()(),Ac(3852,`td`,24)(3853,`em`)(3854,`strong`),vN(3855,`(opcional)`),ug()(),Ac(3856,`p`),vN(3857,`Máscara para o campo.`),ug(),Ac(3858,`p`)(3859,`strong`),vN(3860,`Componente compatível:`),ug(),Ac(3861,`code`),vN(3862,`po-input`),ug(),vN(3863,`.`),ug(),Ac(3864,`blockquote`)(3865,`p`),vN(3866,`também é atribuído ao utilizar a propriedade `),Ac(3867,`code`),vN(3868,`type: time`),ug(),vN(3869,`.`),ug()(),Ac(3870,`blockquote`)(3871,`p`),vN(3872,`Incompatível com `),Ac(3873,`code`),vN(3874,`po-decimal`),ug(),vN(3875,`.`),ug()()()(),Ac(3876,`tr`,16)(3877,`td`,17)(3878,`div`,25)(3879,`span`,26),vN(3880,` maskFormatModel`),Kc(3881,`br`),ug()()(),Ac(3882,`td`,21)(3883,`code`,29),vN(3884,`boolean`),ug()(),Ac(3885,`td`,24)(3886,`em`)(3887,`strong`),vN(3888,`(opcional)`),ug()(),Ac(3889,`p`),vN(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Ac(3891,`code`),vN(3892,`false`),ug(),vN(3893,`.`),ug(),Ac(3894,`p`)(3895,`strong`),vN(3896,`Componente compatível:`),ug(),Ac(3897,`code`),vN(3898,`po-input`),ug(),vN(3899,`.`),ug(),Ac(3900,`blockquote`)(3901,`p`),vN(3902,`também é atribuído ao utilizar a propriedade `),Ac(3903,`code`),vN(3904,`type: time`),ug(),vN(3905,`.`),ug()()()(),Ac(3906,`tr`,16)(3907,`td`,17)(3908,`div`,25)(3909,`span`,26),vN(3910,` maskNoLengthValidation`),Kc(3911,`br`),ug()()(),Ac(3912,`td`,21)(3913,`code`,29),vN(3914,`boolean`),ug()(),Ac(3915,`td`,24)(3916,`em`)(3917,`strong`),vN(3918,`(opcional)`),ug()(),Ac(3919,`p`),vN(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(3921,`code`),vN(3922,`minLength`),ug(),vN(3923,`) e máximo (`),Ac(3924,`code`),vN(3925,`maxLength`),ug(),vN(3926,`) quando há uma máscara (`),Ac(3927,`code`),vN(3928,`p-mask`),ug(),vN(3929,`) definida.`),ug(),Ac(3930,`ul`)(3931,`li`),vN(3932,`Quando `),Ac(3933,`code`),vN(3934,`true`),ug(),vN(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(3936,`li`),vN(3937,`Quando `),Ac(3938,`code`),vN(3939,`false`),ug(),vN(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(3941,`p`)(3942,`strong`),vN(3943,`Componentes compatíveis:`),ug(),Ac(3944,`code`),vN(3945,`po-input`),ug(),vN(3946,`, `),Ac(3947,`code`),vN(3948,`po-decimal`),ug(),vN(3949,`.`),ug(),Ac(3950,`blockquote`)(3951,`p`),vN(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(3953,`code`),vN(3954,`p-mask-format-model`),ug(),vN(3955,`.`),ug()(),Ac(3956,`p`),vN(3957,`Exemplo:`),ug(),Ac(3958,`pre`)(3959,`code`),vN(3960,`fields:Array<PoDynamicFormField> = [
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
`),ug()(),Ac(3961,`ul`)(3962,`li`),vN(3963,`Entrada: `),Ac(3964,`code`),vN(3965,`11.111.111/1111-11`),ug(),vN(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),ug()()()(),Ac(3967,`tr`,16)(3968,`td`,17)(3969,`div`,25)(3970,`span`,26),vN(3971,` maxLength`),Kc(3972,`br`),ug()()(),Ac(3973,`td`,21)(3974,`code`,45),vN(3975,`number`),ug()(),Ac(3976,`td`,24)(3977,`em`)(3978,`strong`),vN(3979,`(opcional)`),ug()(),Ac(3980,`p`),vN(3981,`Tamanho máximo de caracteres.`),ug(),Ac(3982,`p`)(3983,`strong`),vN(3984,`Componentes compatíveis:`),ug(),Ac(3985,`code`),vN(3986,`po-input`),ug(),vN(3987,`, `),Ac(3988,`code`),vN(3989,`po-number`),ug(),vN(3990,`, `),Ac(3991,`code`),vN(3992,`po-decimal`),ug(),vN(3993,`, `),Ac(3994,`code`),vN(3995,`po-textarea`),ug(),vN(3996,`, `),Ac(3997,`code`),vN(3998,`po-password`),ug(),vN(3999,`.`),ug()()(),Ac(4e3,`tr`,16)(4001,`td`,17)(4002,`div`,25)(4003,`span`,26),vN(4004,` maxTime`),Kc(4005,`br`),ug()()(),Ac(4006,`td`,21)(4007,`code`,27),vN(4008,`string`),ug()(),Ac(4009,`td`,24)(4010,`em`)(4011,`strong`),vN(4012,`(opcional)`),ug()(),Ac(4013,`p`),vN(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(4015,`code`),vN(4016,`HH:mm`),ug(),vN(4017,` ou `),Ac(4018,`code`),vN(4019,`HH:mm:ss`),ug(),vN(4020,`.`),ug(),Ac(4021,`p`)(4022,`strong`),vN(4023,`Componente compatível:`),ug(),Ac(4024,`code`),vN(4025,`po-datetimepicker`),ug(),vN(4026,`, `),Ac(4027,`code`),vN(4028,`po-timepicker`),ug()()()(),Ac(4029,`tr`,16)(4030,`td`,17)(4031,`div`,25)(4032,`span`,26),vN(4033,` maxValue`),Kc(4034,`br`),ug()()(),Ac(4035,`td`,21)(4036,`code`,27),vN(4037,`string `),ug(),Ac(4038,`code`,45),vN(4039,` number`),ug()(),Ac(4040,`td`,24)(4041,`em`)(4042,`strong`),vN(4043,`(opcional)`),ug()(),Ac(4044,`p`),vN(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(4046,`em`),vN(4047,`number`),ug(),vN(4048,`, `),Ac(4049,`em`),vN(4050,`date`),ug(),vN(4051,`, `),Ac(4052,`em`),vN(4053,`dateTime`),ug(),vN(4054,` ou `),Ac(4055,`em`),vN(4056,`time`),ug(),vN(4057,`.`),ug(),Ac(4058,`blockquote`)(4059,`p`),vN(4060,`Para `),Ac(4061,`code`),vN(4062,`po-timepicker`),ug(),vN(4063,`, o valor deve estar no formato `),Ac(4064,`code`),vN(4065,`HH:mm`),ug(),vN(4066,` ou `),Ac(4067,`code`),vN(4068,`HH:mm:ss`),ug(),vN(4069,`.`),ug()(),Ac(4070,`p`)(4071,`strong`),vN(4072,`Componentes compatíveis:`),ug(),Ac(4073,`code`),vN(4074,`po-datepicker`),ug(),vN(4075,`, `),Ac(4076,`code`),vN(4077,`po-datepicker-range`),ug(),vN(4078,`, `),Ac(4079,`code`),vN(4080,`po-number`),ug(),vN(4081,`, `),Ac(4082,`code`),vN(4083,`po-decimal`),ug(),vN(4084,`, `),Ac(4085,`code`),vN(4086,`po-timepicker`),ug()()()(),Ac(4087,`tr`,16)(4088,`td`,17)(4089,`div`,25)(4090,`span`,26),vN(4091,` minLength`),Kc(4092,`br`),ug()()(),Ac(4093,`td`,21)(4094,`code`,45),vN(4095,`number`),ug()(),Ac(4096,`td`,24)(4097,`em`)(4098,`strong`),vN(4099,`(opcional)`),ug()(),Ac(4100,`p`),vN(4101,`Tamanho mínimo de caracteres.`),ug(),Ac(4102,`p`)(4103,`strong`),vN(4104,`Componentes compatíveis:`),ug(),Ac(4105,`code`),vN(4106,`po-input`),ug(),vN(4107,`, `),Ac(4108,`code`),vN(4109,`po-number`),ug(),vN(4110,`, `),Ac(4111,`code`),vN(4112,`po-decimal`),ug(),vN(4113,`, `),Ac(4114,`code`),vN(4115,`po-textarea`),ug(),vN(4116,`, `),Ac(4117,`code`),vN(4118,`po-password`),ug(),vN(4119,`.`),ug()()(),Ac(4120,`tr`,16)(4121,`td`,17)(4122,`div`,25)(4123,`span`,26),vN(4124,` minTime`),Kc(4125,`br`),ug()()(),Ac(4126,`td`,21)(4127,`code`,27),vN(4128,`string`),ug()(),Ac(4129,`td`,24)(4130,`em`)(4131,`strong`),vN(4132,`(opcional)`),ug()(),Ac(4133,`p`),vN(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(4135,`code`),vN(4136,`HH:mm`),ug(),vN(4137,` ou `),Ac(4138,`code`),vN(4139,`HH:mm:ss`),ug(),vN(4140,`.`),ug(),Ac(4141,`p`)(4142,`strong`),vN(4143,`Componente compatível:`),ug(),Ac(4144,`code`),vN(4145,`po-datetimepicker`),ug(),vN(4146,`, `),Ac(4147,`code`),vN(4148,`po-timepicker`),ug()()()(),Ac(4149,`tr`,16)(4150,`td`,17)(4151,`div`,25)(4152,`span`,26),vN(4153,` minValue`),Kc(4154,`br`),ug()()(),Ac(4155,`td`,21)(4156,`code`,27),vN(4157,`string `),ug(),Ac(4158,`code`,45),vN(4159,` number`),ug()(),Ac(4160,`td`,24)(4161,`em`)(4162,`strong`),vN(4163,`(opcional)`),ug()(),Ac(4164,`p`),vN(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(4166,`em`),vN(4167,`number`),ug(),vN(4168,`, `),Ac(4169,`em`),vN(4170,`date`),ug(),vN(4171,`, `),Ac(4172,`em`),vN(4173,`dateTime`),ug(),vN(4174,` ou `),Ac(4175,`em`),vN(4176,`time`),ug(),vN(4177,`.`),ug(),Ac(4178,`blockquote`)(4179,`p`),vN(4180,`Para `),Ac(4181,`code`),vN(4182,`po-timepicker`),ug(),vN(4183,`, o valor deve estar no formato `),Ac(4184,`code`),vN(4185,`HH:mm`),ug(),vN(4186,` ou `),Ac(4187,`code`),vN(4188,`HH:mm:ss`),ug(),vN(4189,`.`),ug()(),Ac(4190,`p`)(4191,`strong`),vN(4192,`Componentes compatíveis:`),ug(),Ac(4193,`code`),vN(4194,`po-datepicker`),ug(),vN(4195,`, `),Ac(4196,`code`),vN(4197,`po-datepicker-range`),ug(),vN(4198,`, `),Ac(4199,`code`),vN(4200,`po-number`),ug(),vN(4201,`, `),Ac(4202,`code`),vN(4203,`po-decimal`),ug(),vN(4204,`, `),Ac(4205,`code`),vN(4206,`po-timepicker`),ug()()()(),Ac(4207,`tr`,16)(4208,`td`,17)(4209,`div`,25)(4210,`span`,26),vN(4211,` minuteInterval`),Kc(4212,`br`),ug()()(),Ac(4213,`td`,21)(4214,`code`,45),vN(4215,`number`),ug()(),Ac(4216,`td`,24)(4217,`em`)(4218,`strong`),vN(4219,`(opcional)`),ug()(),Ac(4220,`p`),vN(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),ug()()(),Ac(4222,`tr`,16)(4223,`td`,17)(4224,`div`,25)(4225,`span`,26),vN(4226,` mode`),Kc(4227,`br`),ug()()(),Ac(4228,`td`,21)(4229,`code`,68),vN(4230,`'month-year' `),ug(),Ac(4231,`code`,69),vN(4232,` 'year'`),ug()(),Ac(4233,`td`,24)(4234,`em`)(4235,`strong`),vN(4236,`(opcional)`),ug()(),Ac(4237,`p`),vN(4238,`Define o modo de seleção do `),Ac(4239,`code`),vN(4240,`po-datepicker`),ug(),vN(4241,`.`),ug(),Ac(4242,`p`),vN(4243,`Valores aceitos:`),ug(),Ac(4244,`ul`)(4245,`li`)(4246,`code`),vN(4247,`'month-year'`),ug(),vN(4248,`: exibe seleção de mês e ano (formato `),Ac(4249,`code`),vN(4250,`MM/YYYY`),ug(),vN(4251,`)`),ug(),Ac(4252,`li`)(4253,`code`),vN(4254,`'year'`),ug(),vN(4255,`: exibe seleção apenas de ano (formato `),Ac(4256,`code`),vN(4257,`YYYY`),ug(),vN(4258,`)`),ug()(),Ac(4259,`p`)(4260,`strong`),vN(4261,`Componente compatível:`),ug(),Ac(4262,`code`),vN(4263,`po-datepicker`),ug()()()(),Ac(4264,`tr`,16)(4265,`td`,17)(4266,`div`,25)(4267,`span`,26),vN(4268,` modelFormat`),Kc(4269,`br`),ug()()(),Ac(4270,`td`,21)(4271,`code`,70),vN(4272,`PoTimepickerModelFormat`),ug()(),Ac(4273,`td`,24)(4274,`em`)(4275,`strong`),vN(4276,`(opcional)`),ug()(),Ac(4277,`p`),vN(4278,`Define o formato do valor do horário a ser utilizado no model do `),Ac(4279,`code`),vN(4280,`po-timepicker`),ug(),vN(4281,`.`),ug(),Ac(4282,`blockquote`)(4283,`p`),vN(4284,`Veja os valores válidos no `),Ac(4285,`code`),vN(4286,`PoTimepickerModelFormat`),ug(),vN(4287,`.`),ug()(),Ac(4288,`p`)(4289,`strong`),vN(4290,`Componente compatível:`),ug(),Ac(4291,`code`),vN(4292,`po-timepicker`),ug()()()(),Ac(4293,`tr`,16)(4294,`td`,17)(4295,`div`,25)(4296,`span`,26),vN(4297,` multiple`),Kc(4298,`br`),ug()()(),Ac(4299,`td`,21)(4300,`code`,29),vN(4301,`boolean`),ug()(),Ac(4302,`td`,24)(4303,`em`)(4304,`strong`),vN(4305,`(opcional)`),ug()(),Ac(4306,`p`),vN(4307,`Permite a seleção de múltiplos itens.`),ug(),Ac(4308,`p`)(4309,`strong`),vN(4310,`Componentes compatíveis:`),ug(),Ac(4311,`code`),vN(4312,`po-lookup`),ug(),vN(4313,`, `),Ac(4314,`code`),vN(4315,`po-upload`),ug()()()(),Ac(4316,`tr`,16)(4317,`td`,17)(4318,`div`,25)(4319,`span`,26),vN(4320,` noAutocomplete`),Kc(4321,`br`),ug()()(),Ac(4322,`td`,21)(4323,`code`,29),vN(4324,`boolean`),ug()(),Ac(4325,`td`,24)(4326,`em`)(4327,`strong`),vN(4328,`(opcional)`),ug()(),Ac(4329,`p`),vN(4330,`Define a propriedade nativa `),Ac(4331,`code`),vN(4332,`autocomplete`),ug(),vN(4333,` do campo como off.`),ug(),Ac(4334,`p`)(4335,`strong`),vN(4336,`Componentes compatíveis:`),ug(),Ac(4337,`code`),vN(4338,`po-datepicker`),ug(),vN(4339,`, `),Ac(4340,`code`),vN(4341,`po-datepicker-range`),ug(),vN(4342,`, `),Ac(4343,`code`),vN(4344,`po-input`),ug(),vN(4345,`, `),Ac(4346,`code`),vN(4347,`po-number`),ug(),vN(4348,`, `),Ac(4349,`code`),vN(4350,`po-decimal`),ug(),vN(4351,`,
`),Ac(4352,`code`),vN(4353,`po-lookup`),ug(),vN(4354,`, `),Ac(4355,`code`),vN(4356,`po-password`),ug(),vN(4357,`, `),Ac(4358,`code`),vN(4359,`po-timepicker`),ug(),vN(4360,`.`),ug()()(),Ac(4361,`tr`,16)(4362,`td`,17)(4363,`div`,25)(4364,`span`,26),vN(4365,` offsetColumns`),Kc(4366,`br`),ug()()(),Ac(4367,`td`,21)(4368,`code`,45),vN(4369,`number`),ug()(),Ac(4370,`td`,24)(4371,`em`)(4372,`strong`),vN(4373,`(opcional)`),ug()(),Ac(4374,`p`),vN(4375,`Tamanho do espaço de exibição do campo em telas.`),ug(),Ac(4376,`p`),vN(4377,`Deve ser usado o sistema de `),Ac(4378,`strong`),vN(4379,`grid`),ug(),vN(4380,` do PO (1 ... 12 colunas).`),ug(),Ac(4381,`blockquote`)(4382,`p`),vN(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(4384,`tr`,16)(4385,`td`,17)(4386,`div`,25)(4387,`span`,26),vN(4388,` offsetLgColumns`),Kc(4389,`br`),ug()()(),Ac(4390,`td`,21)(4391,`code`,45),vN(4392,`number`),ug()(),Ac(4393,`td`,24)(4394,`em`)(4395,`strong`),vN(4396,`(opcional)`),ug()(),Ac(4397,`p`),vN(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ug(),Ac(4399,`p`),vN(4400,`Deve ser usado o sistema de `),Ac(4401,`strong`),vN(4402,`grid`),ug(),vN(4403,` do PO (1 ... 12 colunas).`),ug(),Ac(4404,`blockquote`)(4405,`p`),vN(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4407,`code`),vN(4408,`offsetColumns`),ug(),vN(4409,`.`),ug()()()(),Ac(4410,`tr`,16)(4411,`td`,17)(4412,`div`,25)(4413,`span`,26),vN(4414,` offsetMdColumns`),Kc(4415,`br`),ug()()(),Ac(4416,`td`,21)(4417,`code`,45),vN(4418,`number`),ug()(),Ac(4419,`td`,24)(4420,`em`)(4421,`strong`),vN(4422,`(opcional)`),ug()(),Ac(4423,`p`),vN(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),ug(),Ac(4425,`p`),vN(4426,`Deve ser usado o sistema de `),Ac(4427,`strong`),vN(4428,`grid`),ug(),vN(4429,` do PO (1 ... 12 colunas).`),ug(),Ac(4430,`blockquote`)(4431,`p`),vN(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4433,`code`),vN(4434,`offsetColumns`),ug(),vN(4435,`.`),ug()()()(),Ac(4436,`tr`,16)(4437,`td`,17)(4438,`div`,25)(4439,`span`,26),vN(4440,` offsetSmColumns`),Kc(4441,`br`),ug()()(),Ac(4442,`td`,21)(4443,`code`,45),vN(4444,`number`),ug()(),Ac(4445,`td`,24)(4446,`em`)(4447,`strong`),vN(4448,`(opcional)`),ug()(),Ac(4449,`p`),vN(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ug(),Ac(4451,`p`),vN(4452,`Deve ser usado o sistema de `),Ac(4453,`strong`),vN(4454,`grid`),ug(),vN(4455,` do PO (1 ... 12 colunas).`),ug(),Ac(4456,`blockquote`)(4457,`p`),vN(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4459,`code`),vN(4460,`offsetColumns`),ug(),vN(4461,`.`),ug()()()(),Ac(4462,`tr`,16)(4463,`td`,17)(4464,`div`,25)(4465,`span`,26),vN(4466,` offsetXlColumns`),Kc(4467,`br`),ug()()(),Ac(4468,`td`,21)(4469,`code`,45),vN(4470,`number`),ug()(),Ac(4471,`td`,24)(4472,`em`)(4473,`strong`),vN(4474,`(opcional)`),ug()(),Ac(4475,`p`),vN(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ug(),Ac(4477,`p`),vN(4478,`Deve ser usado o sistema de `),Ac(4479,`strong`),vN(4480,`grid`),ug(),vN(4481,` do PO (1 ... 12 colunas).`),ug(),Ac(4482,`blockquote`)(4483,`p`),vN(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4485,`code`),vN(4486,`offsetColumns`),ug(),vN(4487,`.`),ug()()()(),Ac(4488,`tr`,16)(4489,`td`,17)(4490,`div`,25)(4491,`span`,26),vN(4492,` onError`),Kc(4493,`br`),ug()()(),Ac(4494,`td`,21)(4495,`code`,44),vN(4496,`Function`),ug()(),Ac(4497,`td`,24)(4498,`em`)(4499,`strong`),vN(4500,`(opcional)`),ug()(),Ac(4501,`p`),vN(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ug(),Ac(4503,`blockquote`)(4504,`p`),vN(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(4506,`code`),vN(4507,`HttpErrorResponse`),ug(),vN(4508,`.`),ug()(),Ac(4509,`p`)(4510,`strong`),vN(4511,`Componente compatível`),ug(),vN(4512,`: `),Ac(4513,`code`),vN(4514,`po-upload`),ug()()()(),Ac(4515,`tr`,16)(4516,`td`,17)(4517,`div`,25)(4518,`span`,26),vN(4519,` onSuccess`),Kc(4520,`br`),ug()()(),Ac(4521,`td`,21)(4522,`code`,44),vN(4523,`Function`),ug()(),Ac(4524,`td`,24)(4525,`em`)(4526,`strong`),vN(4527,`(opcional)`),ug()(),Ac(4528,`p`),vN(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ug(),Ac(4530,`blockquote`)(4531,`p`),vN(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(4533,`code`),vN(4534,`HttpResponse`),ug(),vN(4535,`.`),ug()(),Ac(4536,`p`)(4537,`strong`),vN(4538,`Componente compatível`),ug(),vN(4539,`: `),Ac(4540,`code`),vN(4541,`po-upload`),ug()()()(),Ac(4542,`tr`,16)(4543,`td`,17)(4544,`div`,25)(4545,`span`,26),vN(4546,` onUpload`),Kc(4547,`br`),ug()()(),Ac(4548,`td`,21)(4549,`code`,44),vN(4550,`Function`),ug()(),Ac(4551,`td`,24)(4552,`em`)(4553,`strong`),vN(4554,`(opcional)`),ug()(),Ac(4555,`p`),vN(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ug(),Ac(4557,`pre`)(4558,`code`),vN(4559,`event.data = {id: 'id do usu\xE1rio'};
`),ug()(),Ac(4560,`p`)(4561,`strong`),vN(4562,`Componente compatível`),ug(),vN(4563,`: `),Ac(4564,`code`),vN(4565,`po-upload`),ug()()()(),Ac(4566,`tr`,16)(4567,`td`,17)(4568,`div`,25)(4569,`span`,26),vN(4570,` optional`),Kc(4571,`br`),ug()()(),Ac(4572,`td`,21)(4573,`code`,29),vN(4574,`boolean`),ug()(),Ac(4575,`td`,24)(4576,`em`)(4577,`strong`),vN(4578,`(opcional)`),ug()(),Ac(4579,`p`),vN(4580,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(4581,`blockquote`)(4582,`p`),vN(4583,`A indicação não será exibida, se:`),ug()(),Ac(4584,`ul`)(4585,`li`),vN(4586,`O campo for `),Ac(4587,`code`),vN(4588,`required`),ug(),vN(4589,`, ou;`),ug(),Ac(4590,`li`),vN(4591,`Não possuir `),Ac(4592,`code`),vN(4593,`help`),ug(),vN(4594,` e `),Ac(4595,`code`),vN(4596,`label`),ug(),vN(4597,`.`),ug()(),Ac(4598,`p`)(4599,`strong`),vN(4600,`Componentes compatíveis:`),ug(),Ac(4601,`code`),vN(4602,`po-datepicker`),ug(),vN(4603,`, `),Ac(4604,`code`),vN(4605,`po-datepicker-range`),ug(),vN(4606,`, `),Ac(4607,`code`),vN(4608,`po-timepicker`),ug(),vN(4609,`, `),Ac(4610,`code`),vN(4611,`po-input`),ug(),vN(4612,`, `),Ac(4613,`code`),vN(4614,`po-number`),ug(),vN(4615,`,
`),Ac(4616,`code`),vN(4617,`po-decimal`),ug(),vN(4618,`, `),Ac(4619,`code`),vN(4620,`po-select`),ug(),vN(4621,`, `),Ac(4622,`code`),vN(4623,`po-radio-group`),ug(),vN(4624,`, `),Ac(4625,`code`),vN(4626,`po-combo`),ug(),vN(4627,`, `),Ac(4628,`code`),vN(4629,`po-lookup`),ug(),vN(4630,`, `),Ac(4631,`code`),vN(4632,`po-checkbox-group`),ug(),vN(4633,`, `),Ac(4634,`code`),vN(4635,`po-multiselect`),ug(),vN(4636,`,
`),Ac(4637,`code`),vN(4638,`po-textarea`),ug(),vN(4639,`, `),Ac(4640,`code`),vN(4641,`po-password`),ug(),vN(4642,`.`),ug()()(),Ac(4643,`tr`,16)(4644,`td`,17)(4645,`div`,25)(4646,`span`,26),vN(4647,` options`),Kc(4648,`br`),ug()()(),Ac(4649,`td`,21)(4650,`code`,32),vN(4651,`Array<string> `),ug(),Ac(4652,`code`,71),vN(4653,` Array<PoSelectOption> `),ug(),Ac(4654,`code`,72),vN(4655,` Array<PoMultiselectOption> `),ug(),Ac(4656,`code`,73),vN(4657,` Array<PoCheckboxGroupOption> `),ug(),Ac(4658,`code`,74),vN(4659,` Array<any>`),ug()(),Ac(4660,`td`,24)(4661,`em`)(4662,`strong`),vN(4663,`(opcional)`),ug()(),Ac(4664,`p`),vN(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),ug(),Ac(4666,`p`)(4667,`strong`),vN(4668,`Componentes compatíveis:`),ug(),Ac(4669,`code`),vN(4670,`po-select`),ug(),vN(4671,`, `),Ac(4672,`code`),vN(4673,`po-radio-group`),ug(),vN(4674,`, `),Ac(4675,`code`),vN(4676,`po-checkbox-group`),ug(),vN(4677,`, `),Ac(4678,`code`),vN(4679,`po-multiselect`),ug(),vN(4680,`.`),ug()()(),Ac(4681,`tr`,16)(4682,`td`,17)(4683,`div`,25)(4684,`span`,26),vN(4685,` optionsMulti`),Kc(4686,`br`),ug()()(),Ac(4687,`td`,21)(4688,`code`,29),vN(4689,`boolean`),ug()(),Ac(4690,`td`,24)(4691,`em`)(4692,`strong`),vN(4693,`(opcional)`),ug()(),Ac(4694,`p`),vN(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),ug()()(),Ac(4696,`tr`,16)(4697,`td`,17)(4698,`div`,25)(4699,`span`,26),vN(4700,` optionsService`),Kc(4701,`br`),ug()()(),Ac(4702,`td`,21)(4703,`code`,27),vN(4704,`string `),ug(),Ac(4705,`code`,75),vN(4706,` PoComboFilter `),ug(),Ac(4707,`code`,76),vN(4708,` PoMultiselectFilter`),ug()(),Ac(4709,`td`,24)(4710,`em`)(4711,`strong`),vN(4712,`(opcional)`),ug()(),Ac(4713,`p`),vN(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ac(4715,`strong`),vN(4716,`Importante`),ug()(),Ac(4717,`blockquote`)(4718,`p`),vN(4719,`Para que funcione corretamente, é importante que o serviço siga o `),Ac(4720,`a`,7),vN(4721,`guia de API do PO UI`),ug(),vN(4722,`.`),ug()()()(),Ac(4723,`tr`,16)(4724,`td`,17)(4725,`div`,25)(4726,`span`,26),vN(4727,` order`),Kc(4728,`br`),ug()()(),Ac(4729,`td`,21)(4730,`code`,45),vN(4731,`number`),ug()(),Ac(4732,`td`,24)(4733,`em`)(4734,`strong`),vN(4735,`(opcional)`),ug()(),Ac(4736,`p`),vN(4737,`Informa a ordem de exibição do campo.`),ug(),Ac(4738,`p`),vN(4739,`Exemplo de utilização:`),ug(),Ac(4740,`p`)(4741,`code`),vN(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),ug()(),Ac(4743,`p`),vN(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Ac(4745,`code`),vN(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),ug()(),Ac(4747,`p`),vN(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),ug(),Ac(4749,`p`),vN(4750,`Campos sem `),Ac(4751,`code`),vN(4752,`order`),ug(),vN(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ug()()(),Ac(4754,`tr`,16)(4755,`td`,17)(4756,`div`,25)(4757,`span`,26),vN(4758,` params`),Kc(4759,`br`),ug()()(),Ac(4760,`td`,21)(4761,`code`,33),vN(4762,`any`),ug()(),Ac(4763,`td`,24)(4764,`em`)(4765,`strong`),vN(4766,`(opcional)`),ug()(),Ac(4767,`p`),vN(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Ac(4769,`code`),vN(4770,`po-lookup`),ug(),vN(4771,` e
`),Ac(4772,`code`),vN(4773,`po-combo`),ug(),vN(4774,`.`),ug(),Ac(4775,`p`),vN(4776,`Por exemplo, para o parâmetro `),Ac(4777,`code`),vN(4778,`{ age: 23 }`),ug(),vN(4779,` a URL da requisição ficaria:`),ug(),Ac(4780,`p`)(4781,`code`),vN(4782,`url + ?age=23&filter=Peter`),ug()()()(),Ac(4783,`tr`,16)(4784,`td`,17)(4785,`div`,25)(4786,`span`,26),vN(4787,` pattern`),Kc(4788,`br`),ug()()(),Ac(4789,`td`,21)(4790,`code`,27),vN(4791,`string`),ug()(),Ac(4792,`td`,24)(4793,`em`)(4794,`strong`),vN(4795,`(opcional)`),ug()(),Ac(4796,`p`),vN(4797,`Regex para validação do campo.`),ug(),Ac(4798,`p`)(4799,`strong`),vN(4800,`Componentes compatíveis:`),ug(),Ac(4801,`code`),vN(4802,`po-input`),ug(),vN(4803,`, `),Ac(4804,`code`),vN(4805,`po-password`),ug(),vN(4806,`.`),ug(),Ac(4807,`blockquote`)(4808,`p`),vN(4809,`Incompatível com `),Ac(4810,`code`),vN(4811,`po-decimal`),ug(),vN(4812,`.`),ug()()()(),Ac(4813,`tr`,16)(4814,`td`,17)(4815,`div`,25)(4816,`span`,26),vN(4817,` placeholder`),Kc(4818,`br`),ug()()(),Ac(4819,`td`,21)(4820,`code`,27),vN(4821,`string`),ug()(),Ac(4822,`td`,24)(4823,`em`)(4824,`strong`),vN(4825,`(opcional)`),ug()(),Ac(4826,`p`),vN(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),ug(),Ac(4828,`p`)(4829,`strong`),vN(4830,`Componentes compatíveis:`),ug(),Ac(4831,`code`),vN(4832,`po-datepicker`),ug(),vN(4833,`, `),Ac(4834,`code`),vN(4835,`po-datepicker-range`),ug(),vN(4836,`, `),Ac(4837,`code`),vN(4838,`po-timepicker`),ug(),vN(4839,`, `),Ac(4840,`code`),vN(4841,`po-input`),ug(),vN(4842,`, `),Ac(4843,`code`),vN(4844,`po-number`),ug(),vN(4845,`, `),Ac(4846,`code`),vN(4847,`po-decimal`),ug(),vN(4848,`, `),Ac(4849,`code`),vN(4850,`po-select`),ug(),vN(4851,`, `),Ac(4852,`code`),vN(4853,`po-combo`),ug(),vN(4854,`, `),Ac(4855,`code`),vN(4856,`po-lookup`),ug(),vN(4857,`, `),Ac(4858,`code`),vN(4859,`po-multiselect`),ug(),vN(4860,`, `),Ac(4861,`code`),vN(4862,`po-textarea`),ug(),vN(4863,`, `),Ac(4864,`code`),vN(4865,`po-password`),ug(),vN(4866,`.`),ug()()(),Ac(4867,`tr`,16)(4868,`td`,17)(4869,`div`,25)(4870,`span`,26),vN(4871,` placeholderSearch`),Kc(4872,`br`),ug()()(),Ac(4873,`td`,21)(4874,`code`,27),vN(4875,`string`),ug()(),Ac(4876,`td`,24)(4877,`em`)(4878,`strong`),vN(4879,`(opcional)`),ug()(),Ac(4880,`p`),vN(4881,`Placeholder do campo de pesquisa do `),Ac(4882,`code`),vN(4883,`po-multiselect`),ug(),vN(4884,`.`),ug(),Ac(4885,`blockquote`)(4886,`p`),vN(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ug()()()(),Ac(4888,`tr`,16)(4889,`td`,17)(4890,`div`,25)(4891,`span`,26),vN(4892,` property`),Kc(4893,`br`),ug()()(),Ac(4894,`td`,21)(4895,`code`,27),vN(4896,`string`),ug()(),Ac(4897,`td`,24)(4898,`p`),vN(4899,`Nome de referência do campo.`),ug()()(),Ac(4900,`tr`,16)(4901,`td`,17)(4902,`div`,25)(4903,`span`,26),vN(4904,` range`),Kc(4905,`br`),ug()()(),Ac(4906,`td`,21)(4907,`code`,29),vN(4908,`boolean`),ug()(),Ac(4909,`td`,24)(4910,`em`)(4911,`strong`),vN(4912,`(opcional)`),ug()(),Ac(4913,`p`),vN(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),ug(),Ac(4915,`blockquote`)(4916,`p`),vN(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),ug()()()(),Ac(4918,`tr`,16)(4919,`td`,17)(4920,`div`,25)(4921,`span`,26),vN(4922,` rangePresetOptions`),Kc(4923,`br`),ug()()(),Ac(4924,`td`,21)(4925,`code`,77),vN(4926,`Array<PoCalendarRangePreset>`),ug()(),Ac(4927,`td`,24)(4928,`em`)(4929,`strong`),vN(4930,`(opcional)`),ug()(),Ac(4931,`p`),vN(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),ug(),Ac(4933,`p`),vN(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Ac(4935,`code`),vN(4936,`PoCalendarRangePreset`),ug(),vN(4937,`.`),ug(),Ac(4938,`p`)(4939,`strong`),vN(4940,`Componente compatível:`),ug(),Ac(4941,`code`),vN(4942,`po-datepicker-range`),ug()()()(),Ac(4943,`tr`,16)(4944,`td`,17)(4945,`div`,25)(4946,`span`,26),vN(4947,` rangePresets`),Kc(4948,`br`),ug()()(),Ac(4949,`td`,21)(4950,`code`,29),vN(4951,`boolean `),ug(),Ac(4952,`code`,32),vN(4953,` Array<string>`),ug()(),Ac(4954,`td`,24)(4955,`em`)(4956,`strong`),vN(4957,`(opcional)`),ug()(),Ac(4958,`p`),vN(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),ug(),Ac(4960,`p`),vN(4961,`Aceita os seguintes valores:`),ug(),Ac(4962,`ul`)(4963,`li`)(4964,`code`),vN(4965,`true`),ug(),vN(4966,`: exibe todos os presets padrão.`),ug(),Ac(4967,`li`)(4968,`code`),vN(4969,`false`),ug(),vN(4970,`: não exibe os presets padrão.`),ug(),Ac(4971,`li`)(4972,`code`),vN(4973,`Array<string>`),ug(),vN(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),ug()(),Ac(4975,`p`)(4976,`strong`),vN(4977,`Componente compatível:`),ug(),Ac(4978,`code`),vN(4979,`po-datepicker-range`),ug()()()(),Ac(4980,`tr`,16)(4981,`td`,17)(4982,`div`,25)(4983,`span`,26),vN(4984,` rangePresetsOrder`),Kc(4985,`br`),ug()()(),Ac(4986,`td`,21)(4987,`code`,78),vN(4988,`'asc' `),ug(),Ac(4989,`code`,79),vN(4990,` 'desc'`),ug()(),Ac(4991,`td`,24)(4992,`em`)(4993,`strong`),vN(4994,`(opcional)`),ug()(),Ac(4995,`p`),vN(4996,`Define a ordenação dos presets na lista.`),ug(),Ac(4997,`p`),vN(4998,`Valores aceitos:`),ug(),Ac(4999,`ul`)(5e3,`li`)(5001,`code`),vN(5002,`'asc'`),ug(),vN(5003,`: ordenação crescente (passado → futuro)`),ug(),Ac(5004,`li`)(5005,`code`),vN(5006,`'desc'`),ug(),vN(5007,`: ordenação decrescente (futuro → passado)`),ug()(),Ac(5008,`p`)(5009,`strong`),vN(5010,`Componente compatível:`),ug(),Ac(5011,`code`),vN(5012,`po-datepicker-range`),ug()()()(),Ac(5013,`tr`,16)(5014,`td`,17)(5015,`div`,25)(5016,`span`,26),vN(5017,` readonly`),Kc(5018,`br`),ug()()(),Ac(5019,`td`,21)(5020,`code`,29),vN(5021,`boolean`),ug()(),Ac(5022,`td`,24)(5023,`em`)(5024,`strong`),vN(5025,`(opcional)`),ug()(),Ac(5026,`p`),vN(5027,`Indica que o campo será somente leitura.`),ug(),Ac(5028,`p`)(5029,`strong`),vN(5030,`Componentes compatíveis:`),ug(),Ac(5031,`code`),vN(5032,`po-datepicker`),ug(),vN(5033,`, `),Ac(5034,`code`),vN(5035,`po-datepicker-range`),ug(),vN(5036,`, `),Ac(5037,`code`),vN(5038,`po-timepicker`),ug(),vN(5039,`, `),Ac(5040,`code`),vN(5041,`po-input`),ug(),vN(5042,`, `),Ac(5043,`code`),vN(5044,`po-number`),ug(),vN(5045,`,
`),Ac(5046,`code`),vN(5047,`po-decimal`),ug(),vN(5048,`, `),Ac(5049,`code`),vN(5050,`po-select`),ug(),vN(5051,`, `),Ac(5052,`code`),vN(5053,`po-textarea`),ug(),vN(5054,`, `),Ac(5055,`code`),vN(5056,`po-password`),ug(),vN(5057,`.`),ug()()(),Ac(5058,`tr`,16)(5059,`td`,17)(5060,`div`,25)(5061,`span`,26),vN(5062,` removeInitialFilter`),Kc(5063,`br`),ug()()(),Ac(5064,`td`,21)(5065,`code`,29),vN(5066,`boolean`),ug()(),Ac(5067,`td`,24)(5068,`em`)(5069,`strong`),vN(5070,`(opcional)`),ug()(),Ac(5071,`p`),vN(5072,`Define que o filtro no primeiro clique será removido.`),ug(),Ac(5073,`blockquote`)(5074,`p`),vN(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ug()(),Ac(5076,`p`)(5077,`strong`),vN(5078,`Componente compatível`),ug(),vN(5079,`: `),Ac(5080,`code`),vN(5081,`po-combo`),ug()()()(),Ac(5082,`tr`,16)(5083,`td`,17)(5084,`div`,25)(5085,`span`,26),vN(5086,` required`),Kc(5087,`br`),ug()()(),Ac(5088,`td`,21)(5089,`code`,29),vN(5090,`boolean`),ug()(),Ac(5091,`td`,24)(5092,`em`)(5093,`strong`),vN(5094,`(opcional)`),ug()(),Ac(5095,`p`),vN(5096,`Define a obrigatoriedade do campo.`),ug(),Ac(5097,`p`)(5098,`strong`),vN(5099,`Componentes compatíveis:`),ug(),Ac(5100,`code`),vN(5101,`po-datepicker`),ug(),vN(5102,`, `),Ac(5103,`code`),vN(5104,`po-datepicker-range`),ug(),vN(5105,`, `),Ac(5106,`code`),vN(5107,`po-timepicker`),ug(),vN(5108,`, `),Ac(5109,`code`),vN(5110,`po-input`),ug(),vN(5111,`, `),Ac(5112,`code`),vN(5113,`po-number`),ug(),vN(5114,`,
`),Ac(5115,`code`),vN(5116,`po-decimal`),ug(),vN(5117,`, `),Ac(5118,`code`),vN(5119,`po-select`),ug(),vN(5120,`, `),Ac(5121,`code`),vN(5122,`po-radio-group`),ug(),vN(5123,`, `),Ac(5124,`code`),vN(5125,`po-combo`),ug(),vN(5126,`, `),Ac(5127,`code`),vN(5128,`po-lookup`),ug(),vN(5129,`, `),Ac(5130,`code`),vN(5131,`po-checkbox-group`),ug(),vN(5132,`, `),Ac(5133,`code`),vN(5134,`po-multiselect`),ug(),vN(5135,`,
`),Ac(5136,`code`),vN(5137,`po-textarea`),ug(),vN(5138,`, `),Ac(5139,`code`),vN(5140,"po-password``, "),ug(),vN(5141,"po-upload`."),ug()()(),Ac(5142,`tr`,16)(5143,`td`,17)(5144,`div`,25)(5145,`span`,26),vN(5146,` requiredFieldErrorMessage`),Kc(5147,`br`),ug()()(),Ac(5148,`td`,21)(5149,`code`,29),vN(5150,`boolean`),ug()(),Ac(5151,`td`,24)(5152,`em`)(5153,`strong`),vN(5154,`(opcional)`),ug()(),Ac(5155,`p`),vN(5156,`Exibe a mensagem setada na propriedade `),Ac(5157,`code`),vN(5158,`errorMessage`),ug(),vN(5159,` se o campo estiver vazio e for requerido.`),ug(),Ac(5160,`blockquote`)(5161,`p`),vN(5162,`Necessário que a propriedade `),Ac(5163,`code`),vN(5164,`required`),ug(),vN(5165,` esteja habilitada.`),ug()(),Ac(5166,`p`)(5167,`strong`),vN(5168,`Componentes compatíveis:`),ug(),Ac(5169,`code`),vN(5170,`po-datepicker`),ug(),vN(5171,`, `),Ac(5172,`code`),vN(5173,`po-timepicker`),ug(),vN(5174,`, `),Ac(5175,`code`),vN(5176,`po-input`),ug(),vN(5177,`, `),Ac(5178,`code`),vN(5179,`po-number`),ug(),vN(5180,`, `),Ac(5181,`code`),vN(5182,`po-decimal`),ug(),vN(5183,`, `),Ac(5184,`code`),vN(5185,`po-password`),ug(),vN(5186,`.`),ug()()(),Ac(5187,`tr`,16)(5188,`td`,17)(5189,`div`,25)(5190,`span`,26),vN(5191,` restrictions`),Kc(5192,`br`),ug()()(),Ac(5193,`td`,21)(5194,`code`,80),vN(5195,`PoUploadFileRestrictions`),ug()(),Ac(5196,`td`,24)(5197,`em`)(5198,`strong`),vN(5199,`(opcional)`),ug()(),Ac(5200,`p`),vN(5201,`Objeto que segue a definição da interface `),Ac(5202,`code`),vN(5203,`PoUploadFileRestrictions`),ug(),vN(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ug(),Ac(5205,`p`)(5206,`strong`),vN(5207,`Componente compatível`),ug(),vN(5208,`: `),Ac(5209,`code`),vN(5210,`po-upload`),ug()()()(),Ac(5211,`tr`,16)(5212,`td`,17)(5213,`div`,25)(5214,`span`,26),vN(5215,` rows`),Kc(5216,`br`),ug()()(),Ac(5217,`td`,21)(5218,`code`,45),vN(5219,`number`),ug()(),Ac(5220,`td`,24)(5221,`em`)(5222,`strong`),vN(5223,`(opcional)`),ug()(),Ac(5224,`p`),vN(5225,`Quantidade de linhas exibidas no `),Ac(5226,`code`),vN(5227,`po-textarea`),ug(),vN(5228,`.`),ug()()(),Ac(5229,`tr`,16)(5230,`td`,17)(5231,`div`,25)(5232,`span`,26),vN(5233,` searchService`),Kc(5234,`br`),ug()()(),Ac(5235,`td`,21)(5236,`code`,27),vN(5237,`string `),ug(),Ac(5238,`code`,34),vN(5239,` PoLookupFilter`),ug()(),Ac(5240,`td`,24)(5241,`em`)(5242,`strong`),vN(5243,`(opcional)`),ug()(),Ac(5244,`p`),vN(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Ac(5246,`code`),vN(5247,`columns`),ug(),vN(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Ac(5249,`strong`),vN(5250,`Importante:`),ug()(),Ac(5251,`blockquote`)(5252,`p`),vN(5253,`Caso utilizar a propriedade `),Ac(5254,`code`),vN(5255,`optionsService`),ug(),vN(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ac(5257,`a`,7),vN(5258,`guia de API do PO UI`),ug(),vN(5259,`.`),ug()()()(),Ac(5260,`tr`,16)(5261,`td`,17)(5262,`div`,25)(5263,`span`,26),vN(5264,` secondInterval`),Kc(5265,`br`),ug()()(),Ac(5266,`td`,21)(5267,`code`,45),vN(5268,`number`),ug()(),Ac(5269,`td`,24)(5270,`em`)(5271,`strong`),vN(5272,`(opcional)`),ug()(),Ac(5273,`p`),vN(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),ug()()(),Ac(5275,`tr`,16)(5276,`td`,17)(5277,`div`,25)(5278,`span`,26),vN(5279,` secret`),Kc(5280,`br`),ug()()(),Ac(5281,`td`,21)(5282,`code`,29),vN(5283,`boolean`),ug()(),Ac(5284,`td`,24)(5285,`em`)(5286,`strong`),vN(5287,`(opcional)`),ug()(),Ac(5288,`p`),vN(5289,`Esconde a informação estilo `),Ac(5290,`em`),vN(5291,`password`),ug(),vN(5292,`, pode ser utilizado quando o tipo de dado for `),Ac(5293,`em`),vN(5294,`string`),ug(),vN(5295,`.`),ug()()(),Ac(5296,`tr`,16)(5297,`td`,17)(5298,`div`,25)(5299,`span`,26),vN(5300,` showRequired`),Kc(5301,`br`),ug()()(),Ac(5302,`td`,21)(5303,`code`,29),vN(5304,`boolean`),ug()(),Ac(5305,`td`,24)(5306,`em`)(5307,`strong`),vN(5308,`(opcional)`),ug()(),Ac(5309,`p`),vN(5310,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(5311,`blockquote`)(5312,`p`),vN(5313,`Não será exibida a indicação se:`),ug()(),Ac(5314,`ul`)(5315,`li`),vN(5316,`Não possuir `),Ac(5317,`code`),vN(5318,`p-help`),ug(),vN(5319,` e/ou `),Ac(5320,`code`),vN(5321,`p-label`),ug(),vN(5322,`.`),ug()(),Ac(5323,`p`)(5324,`strong`),vN(5325,`Componentes compatíveis:`),ug(),Ac(5326,`code`),vN(5327,`po-datepicker`),ug(),vN(5328,`, `),Ac(5329,`code`),vN(5330,`po-datepicker-range`),ug(),vN(5331,`, `),Ac(5332,`code`),vN(5333,`po-timepicker`),ug(),vN(5334,`, `),Ac(5335,`code`),vN(5336,`po-input`),ug(),vN(5337,`, `),Ac(5338,`code`),vN(5339,`po-number`),ug(),vN(5340,`,
`),Ac(5341,`code`),vN(5342,`po-decimal`),ug(),vN(5343,`, `),Ac(5344,`code`),vN(5345,`po-select`),ug(),vN(5346,`, `),Ac(5347,`code`),vN(5348,`po-radio-group`),ug(),vN(5349,`, `),Ac(5350,`code`),vN(5351,`po-combo`),ug(),vN(5352,`, `),Ac(5353,`code`),vN(5354,`po-lookup`),ug(),vN(5355,`, `),Ac(5356,`code`),vN(5357,`po-checkbox-group`),ug(),vN(5358,`, `),Ac(5359,`code`),vN(5360,`po-multiselect`),ug(),vN(5361,`,
`),Ac(5362,`code`),vN(5363,`po-textarea`),ug(),vN(5364,`, `),Ac(5365,`code`),vN(5366,`po-password`),ug(),vN(5367,`, `),Ac(5368,`code`),vN(5369,`po-upload`),ug(),vN(5370,`.`),ug()()(),Ac(5371,`tr`,16)(5372,`td`,17)(5373,`div`,25)(5374,`span`,26),vN(5375,` showSeconds`),Kc(5376,`br`),ug()()(),Ac(5377,`td`,21)(5378,`code`,29),vN(5379,`boolean`),ug()(),Ac(5380,`td`,24)(5381,`em`)(5382,`strong`),vN(5383,`(opcional)`),ug()(),Ac(5384,`p`),vN(5385,`Exibe a coluna de segundos no painel do timepicker.`),ug()()(),Ac(5386,`tr`,16)(5387,`td`,17)(5388,`div`,25)(5389,`span`,26),vN(5390,` showThumbnail`),Kc(5391,`br`),ug()()(),Ac(5392,`td`,21)(5393,`code`,29),vN(5394,`boolean`),ug()(),Ac(5395,`td`,24)(5396,`em`)(5397,`strong`),vN(5398,`(opcional)`),ug()(),Ac(5399,`p`),vN(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),ug(),Ac(5401,`blockquote`)(5402,`p`),vN(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ac(5404,`code`),vN(5405,`.png`),ug(),vN(5406,`, `),Ac(5407,`code`),vN(5408,`.jpg`),ug(),vN(5409,`, `),Ac(5410,`code`),vN(5411,`.jpeg`),ug(),vN(5412,` e `),Ac(5413,`code`),vN(5414,`.gif`),ug(),vN(5415,`).`),ug()(),Ac(5416,`p`)(5417,`strong`),vN(5418,`Componente compatível`),ug(),vN(5419,`: `),Ac(5420,`code`),vN(5421,`po-upload`),ug()()()(),Ac(5422,`tr`,16)(5423,`td`,17)(5424,`div`,25)(5425,`span`,26),vN(5426,` size`),Kc(5427,`br`),ug()()(),Ac(5428,`td`,21)(5429,`code`,27),vN(5430,`string`),ug()(),Ac(5431,`td`,24)(5432,`em`)(5433,`strong`),vN(5434,`(opcional)`),ug()(),Ac(5435,`p`),vN(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),ug(),Ac(5437,`ul`)(5438,`li`)(5439,`code`),vN(5440,`small`),ug(),vN(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(5442,`li`)(5443,`code`),vN(5444,`medium`),ug(),vN(5445,`: aplica a medida medium de cada componente.`),ug(),Ac(5446,`li`)(5447,`code`),vN(5448,`large`),ug(),vN(5449,`: aplica a medida large de cada componente (disponível para `),Ac(5450,`code`),vN(5451,`po-checkbox`),ug(),vN(5452,` e `),Ac(5453,`code`),vN(5454,`po-radio-group`),ug(),vN(5455,`).`),Ac(5456,`blockquote`)(5457,`p`),vN(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(5459,`code`),vN(5460,`medium`),ug(),vN(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(5462,`a`,40),vN(5463,`po-theme`),ug(),vN(5464,`.`),ug()()()()()(),Ac(5465,`tr`,16)(5466,`td`,17)(5467,`div`,25)(5468,`span`,26),vN(5469,` sort`),Kc(5470,`br`),ug()()(),Ac(5471,`td`,21)(5472,`code`,29),vN(5473,`boolean`),ug()(),Ac(5474,`td`,24)(5475,`em`)(5476,`strong`),vN(5477,`(opcional)`),ug()(),Ac(5478,`p`),vN(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ug(),Ac(5480,`p`)(5481,`strong`),vN(5482,`Componentes compatíveis:`),ug(),Ac(5483,`code`),vN(5484,`po-combo`),ug(),vN(5485,`, po-multiselect`),ug()()(),Ac(5486,`tr`,16)(5487,`td`,17)(5488,`div`,25)(5489,`span`,26),vN(5490,` step`),Kc(5491,`br`),ug()()(),Ac(5492,`td`,21)(5493,`code`,45),vN(5494,`number`),ug()(),Ac(5495,`td`,24)(5496,`em`)(5497,`strong`),vN(5498,`(opcional)`),ug()(),Ac(5499,`p`),vN(5500,`Intervalo utilizado no `),Ac(5501,`code`),vN(5502,`po-number`),ug(),vN(5503,`.`),ug()()(),Ac(5504,`tr`,16)(5505,`td`,17)(5506,`div`,25)(5507,`span`,26),vN(5508,` thousandMaxlength`),Kc(5509,`br`),ug()()(),Ac(5510,`td`,21)(5511,`code`,45),vN(5512,`number`),ug()(),Ac(5513,`td`,24)(5514,`em`)(5515,`strong`),vN(5516,`(opcional)`),ug()(),Ac(5517,`p`),vN(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),ug(),Ac(5519,`blockquote`)(5520,`p`),vN(5521,`Esta propriedade só pode ser utilizada quando o `),Ac(5522,`code`),vN(5523,`type`),ug(),vN(5524,` for `),Ac(5525,`em`),vN(5526,`currency`),ug(),vN(5527,` ou `),Ac(5528,`em`),vN(5529,`decimal`),ug(),vN(5530,`.`),ug()(),Ac(5531,`blockquote`)(5532,`p`),vN(5533,`Quando utilizado com `),Ac(5534,`code`),vN(5535,`displayFormat`),ug(),vN(5536,`, será respeitado o valor `),Ac(5537,`strong`),vN(5538,`mais restritivo`),ug(),vN(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),ug()()()(),Ac(5540,`tr`,16)(5541,`td`,17)(5542,`div`,25)(5543,`span`,26),vN(5544,` type`),Kc(5545,`br`),ug()()(),Ac(5546,`td`,21)(5547,`code`,27),vN(5548,`string `),ug(),Ac(5549,`code`,81),vN(5550,` PoDynamicFieldType`),ug()(),Ac(5551,`td`,24)(5552,`em`)(5553,`strong`),vN(5554,`(opcional)`),ug()(),Ac(5555,`p`),vN(5556,`Tipo do valor campo.`),ug(),Ac(5557,`p`),vN(5558,`Valores válidos:`),ug(),Ac(5559,`ul`)(5560,`li`)(5561,`code`),vN(5562,`boolean`),ug(),vN(5563,`: Valores `),Ac(5564,`em`),vN(5565,`booleanos`),ug(),vN(5566,`.`),ug(),Ac(5567,`li`)(5568,`code`),vN(5569,`currency`),ug(),vN(5570,`: Valores monetários.`),ug(),Ac(5571,`li`)(5572,`code`),vN(5573,`decimal`),ug(),vN(5574,`: Valores decimais.`),ug(),Ac(5575,`li`)(5576,`code`),vN(5577,`date`),ug(),vN(5578,`: Valores de datas.`),Ac(5579,`ul`)(5580,`li`),vN(5581,`Aceita os tipos `),Ac(5582,`strong`),vN(5583,`string`),ug(),vN(5584,` e `),Ac(5585,`strong`),vN(5586,`Date`),ug(),vN(5587,` padr\xE3o do Javascript,
por exemplo: `),Ac(5588,`code`),vN(5589,`'2017-11-28'`),ug(),vN(5590,` ou `),Ac(5591,`code`),vN(5592,`new Date(2017, 10, 28)`),ug(),vN(5593,`.`),ug()()(),Ac(5594,`li`)(5595,`code`),vN(5596,`dateTime`),ug(),vN(5597,`: Valor de data com horário.`),Ac(5598,`ul`)(5599,`li`),vN(5600,`Aceita o tipo `),Ac(5601,`em`),vN(5602,`string`),ug(),vN(5603,` no formato `),Ac(5604,`strong`),vN(5605,`ISO-8601`),ug(),vN(5606,` extendido `),Ac(5607,`strong`),vN(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ug(),vN(5609,`
e o tipo `),Ac(5610,`strong`),vN(5611,`Date`),ug(),vN(5612,` padrão do Javascript, por exemplo: `),Ac(5613,`code`),vN(5614,`'2017-11-28T00:00:00-02:00'`),ug(),vN(5615,` ou `),Ac(5616,`code`),vN(5617,`new Date(2017, 10, 28)`),ug(),vN(5618,`.`),ug()()(),Ac(5619,`li`)(5620,`code`),vN(5621,`number`),ug(),vN(5622,`: Valores numéricos.`),ug(),Ac(5623,`li`)(5624,`code`),vN(5625,`string`),ug(),vN(5626,`: Textos.`),ug(),Ac(5627,`li`)(5628,`code`),vN(5629,`time`),ug(),vN(5630,`: Valor do horário.`),Ac(5631,`ul`)(5632,`li`),vN(5633,`Aceita o tipo `),Ac(5634,`strong`),vN(5635,`string`),ug(),vN(5636,` nos formatos `),Ac(5637,`strong`),vN(5638,`'HH:mm:ss'`),ug(),vN(5639,` ou `),Ac(5640,`strong`),vN(5641,`'HH:mm:ss.ffffff'`),ug(),vN(5642,`, por exemplo: `),Ac(5643,`code`),vN(5644,`'23:12:45'`),ug(),vN(5645,`.`),ug()()()()()(),Ac(5646,`tr`,16)(5647,`td`,17)(5648,`div`,25)(5649,`span`,26),vN(5650,` url`),Kc(5651,`br`),ug()()(),Ac(5652,`td`,21)(5653,`code`,27),vN(5654,`string`),ug()(),Ac(5655,`td`,24)(5656,`em`)(5657,`strong`),vN(5658,`(opcional)`),ug()(),Ac(5659,`p`),vN(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),ug(),Ac(5661,`p`)(5662,`strong`),vN(5663,`Componente compatível`),ug(),vN(5664,`: `),Ac(5665,`code`),vN(5666,`po-upload`),ug()()()(),Ac(5667,`tr`,16)(5668,`td`,17)(5669,`div`,25)(5670,`span`,26),vN(5671,` validate`),Kc(5672,`br`),ug()()(),Ac(5673,`td`,21)(5674,`code`,27),vN(5675,`string `),ug(),Ac(5676,`code`,44),vN(5677,` Function`),ug()(),Ac(5678,`td`,24)(5679,`em`)(5680,`strong`),vN(5681,`(opcional)`),ug()(),Ac(5682,`p`),vN(5683,`Função ou serviço para validar as `),Ac(5684,`strong`),vN(5685,`mudanças do campo`),ug(),vN(5686,`.`),ug(),Ac(5687,`ul`)(5688,`li`),vN(5689,`A propriedade aceita os seguintes tipos:`),ug()(),Ac(5690,`ul`)(5691,`li`)(5692,`strong`),vN(5693,`String`),ug(),vN(5694,`: Endpoint usado pelo componente para requisição via `),Ac(5695,`code`),vN(5696,`POST`),ug(),vN(5697,`.`),ug(),Ac(5698,`li`)(5699,`strong`),vN(5700,`Function`),ug(),vN(5701,`: Método que será executado.`),ug()(),Ac(5702,`p`),vN(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Ac(5704,`code`),vN(5705,`PoDynamicFormFieldChanged`),ug(),vN(5706,`:`),ug(),Ac(5707,`p`)(5708,`code`),vN(5709,`{ property: 'property name', value: 'new value' }`),ug()(),Ac(5710,`p`),vN(5711,`O retorno desta função deve ser do tipo `),Ac(5712,`a`,82),vN(5713,`PoDynamicFormFieldValidation`),ug(),vN(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ug(),Ac(5715,`pre`)(5716,`code`),vN(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ug()(),Ac(5718,`p`),vN(5719,`Para referenciar a sua função utilize a propriedade `),Ac(5720,`code`),vN(5721,`bind`),ug(),vN(5722,`, por exemplo:
`),Ac(5723,`code`),vN(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),ug()()()(),Ac(5725,`tr`,16)(5726,`td`,17)(5727,`div`,25)(5728,`span`,26),vN(5729,` visible`),Kc(5730,`br`),ug()()(),Ac(5731,`td`,21)(5732,`code`,29),vN(5733,`boolean`),ug()(),Ac(5734,`td`,24)(5735,`em`)(5736,`strong`),vN(5737,`(opcional)`),ug()(),Ac(5738,`p`),vN(5739,`Indica se o campo será visível.`),ug()()(),Ac(5740,`tr`,16)(5741,`td`,17)(5742,`div`,25)(5743,`span`,26),vN(5744,` yearRangeLimit`),Kc(5745,`br`),ug()()(),Ac(5746,`td`,21)(5747,`code`,45),vN(5748,`number`),ug()(),Ac(5749,`td`,24)(5750,`em`)(5751,`strong`),vN(5752,`(opcional)`),ug()(),Ac(5753,`p`),vN(5754,`Define o limite de anos exibidos na lista de anos do `),Ac(5755,`code`),vN(5756,`po-datepicker`),ug(),vN(5757,` nos modos `),Ac(5758,`code`),vN(5759,`month-year`),ug(),vN(5760,` e `),Ac(5761,`code`),vN(5762,`year`),ug(),vN(5763,`.`),ug()()()(),Ac(5764,`h4`,43)(5765,`code`,5),vN(5766,`PoLookupColumn`),ug()(),Ac(5767,`div`,2)(5768,`p`),vN(5769,`Interface para configuração das colunas do po-lookup.`),ug()(),Ac(5770,`h4`,12),vN(5771,`Propriedades`),ug(),Ac(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),vN(5775,`Nome`),ug(),Ac(5776,`th`,15),vN(5777,`Tipo`),ug(),Ac(5778,`th`,15),vN(5779,`Descrição`),ug()(),Ac(5780,`tr`,16)(5781,`td`,17)(5782,`div`,25)(5783,`span`,26),vN(5784,` fieldLabel`),Kc(5785,`br`),ug()()(),Ac(5786,`td`,21)(5787,`code`,29),vN(5788,`boolean`),ug()(),Ac(5789,`td`,24)(5790,`em`)(5791,`strong`),vN(5792,`(opcional)`),ug()(),Ac(5793,`p`),vN(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),ug(),Ac(5795,`p`),vN(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),ug(),Ac(5797,`p`),vN(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Ac(5799,`code`),vN(5800,`p-field-format`),ug(),vN(5801,` ou `),Ac(5802,`code`),vN(5803,`p-field-label`),ug(),vN(5804,` forem configurados no componente.`),ug()()(),Ac(5805,`tr`,16)(5806,`td`,17)(5807,`div`,25)(5808,`span`,26),vN(5809,` format`),Kc(5810,`br`),ug()()(),Ac(5811,`td`,21)(5812,`code`,27),vN(5813,`string`),ug()(),Ac(5814,`td`,24)(5815,`em`)(5816,`strong`),vN(5817,`(opcional)`),ug()(),Ac(5818,`p`),vN(5819,`Formato de exibição do valor da coluna:`),ug(),Ac(5820,`ul`)(5821,`li`),vN(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),ug(),Ac(5823,`li`),vN(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ug()()()(),Ac(5825,`tr`,16)(5826,`td`,17)(5827,`div`,25)(5828,`span`,26),vN(5829,` label`),Kc(5830,`br`),ug()()(),Ac(5831,`td`,21)(5832,`code`,27),vN(5833,`string`),ug()(),Ac(5834,`td`,24)(5835,`em`)(5836,`strong`),vN(5837,`(opcional)`),ug()(),Ac(5838,`p`),vN(5839,`Texto para título da coluna.`),ug(),Ac(5840,`p`),vN(5841,`Caso não seja informado, será utilizado como `),Ac(5842,`em`),vN(5843,`label`),ug(),vN(5844,` o valor da propriedade `),Ac(5845,`em`),vN(5846,`property`),ug(),vN(5847,` com a primeira letra em maiúsculo.`),ug()()(),Ac(5848,`tr`,16)(5849,`td`,17)(5850,`div`,25)(5851,`span`,26),vN(5852,` mask`),Kc(5853,`br`),ug()()(),Ac(5854,`td`,21)(5855,`code`,27),vN(5856,`string`),ug()(),Ac(5857,`td`,24)(5858,`em`)(5859,`strong`),vN(5860,`(opcional)`),ug()(),Ac(5861,`p`),vN(5862,`Define uma máscara para formatação do valor exibido na coluna.`),ug(),Ac(5863,`p`),vN(5864,`A máscara é aplicada somente para `),Ac(5865,`strong`),vN(5866,`exibição`),ug(),vN(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),ug(),Ac(5868,`p`),vN(5869,`Caracteres válidos para a máscara:`),ug(),Ac(5870,`ul`)(5871,`li`)(5872,`code`),vN(5873,`9`),ug(),vN(5874,` : aceita um dígito numérico (0-9).`),ug(),Ac(5875,`li`)(5876,`code`),vN(5877,`@`),ug(),vN(5878,` : aceita um caractere alfabético (a-z, A-Z).`),ug(),Ac(5879,`li`)(5880,`code`),vN(5881,`w`),ug(),vN(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),ug(),Ac(5883,`li`),vN(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Ac(5885,`code`),vN(5886,`.`),ug(),vN(5887,`, `),Ac(5888,`code`),vN(5889,`-`),ug(),vN(5890,`, `),Ac(5891,`code`),vN(5892,`/`),ug(),vN(5893,`, `),Ac(5894,`code`),vN(5895,`(`),ug(),vN(5896,`, `),Ac(5897,`code`),vN(5898,`)`),ug(),vN(5899,`, `),Ac(5900,`code`),vN(5901,`+`),ug(),vN(5902,`, `),Kc(5903,`code`),vN(5904,`).`),ug()(),Ac(5905,`p`),vN(5906,`Exemplos de uso:`),ug(),Ac(5907,`pre`)(5908,`code`),vN(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),ug()(),Ac(5910,`blockquote`)(5911,`p`),vN(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),Ac(5913,`code`),vN(5914,`string`),ug(),vN(5915,` (padr\xE3o).
Caso a coluna possua um `),Ac(5916,`code`),vN(5917,`type`),ug(),vN(5918,` diferente de `),Ac(5919,`code`),vN(5920,`string`),ug(),vN(5921,`, a máscara será ignorada.`),ug()()()(),Ac(5922,`tr`,16)(5923,`td`,17)(5924,`div`,25)(5925,`span`,26),vN(5926,` property`),Kc(5927,`br`),ug()()(),Ac(5928,`td`,21)(5929,`code`,27),vN(5930,`string`),ug()(),Ac(5931,`td`,24)(5932,`em`)(5933,`strong`),vN(5934,`(opcional)`),ug()(),Ac(5935,`p`),vN(5936,`Nome identificador da coluna.`),ug()()(),Ac(5937,`tr`,16)(5938,`td`,17)(5939,`div`,25)(5940,`span`,26),vN(5941,` type`),Kc(5942,`br`),ug()()(),Ac(5943,`td`,21)(5944,`code`,27),vN(5945,`string`),ug()(),Ac(5946,`td`,24)(5947,`em`)(5948,`strong`),vN(5949,`(opcional)`),ug()(),Ac(5950,`p`),vN(5951,`Tipo da coluna:`),ug(),Ac(5952,`ul`)(5953,`li`),vN(5954,`string (padrão): textos`),ug(),Ac(5955,`li`),vN(5956,`number: valores numéricos`),ug(),Ac(5957,`li`),vN(5958,`date: data`),ug(),Ac(5959,`li`),vN(5960,`currency: valores monetários`),ug(),Ac(5961,`li`),vN(5962,`dateTime: data e hora`),ug()()()(),Ac(5963,`tr`,16)(5964,`td`,17)(5965,`div`,25)(5966,`span`,26),vN(5967,` width`),Kc(5968,`br`),ug()()(),Ac(5969,`td`,21)(5970,`code`,27),vN(5971,`string`),ug()(),Ac(5972,`td`,24)(5973,`em`)(5974,`strong`),vN(5975,`(opcional)`),ug()(),Ac(5976,`p`),vN(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),ug()()()(),Ac(5978,`h4`,43)(5979,`code`,5),vN(5980,`PoLookupFilter`),ug()(),Ac(5981,`div`,2)(5982,`p`),vN(5983,`Define o tipo de busca utilizado no po-lookup.`),ug()(),Ac(5984,`h4`,12),vN(5985,`Métodos`),ug(),Ac(5986,`table`,41)(5987,`tr`,16)(5988,`th`,42)(5989,`div`,25)(5990,`h4`)(5991,`span`,26),vN(5992,` getFilteredItems `),ug()()()()(),Ac(5993,`tr`,24)(5994,`td`,24)(5995,`p`),vN(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Ac(5997,`em`),vN(5998,`Observable`),ug(),vN(5999,` com a resposta da API no formato da interface `),Ac(6e3,`code`),vN(6001,`PoLookupResponseApi`),ug(),vN(6002,`.`),ug()()()(),Ac(6003,`h5`)(6004,`b`),vN(6005,`Parâmetros`),ug()(),Ac(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),vN(6009,`Nome`),ug(),Ac(6010,`th`,15),vN(6011,`Tipo`),ug(),Ac(6012,`th`,15),vN(6013,`Descrição`),ug()(),Ac(6014,`tr`,16)(6015,`td`,17),vN(6016,` params`),ug(),Ac(6017,`td`,21)(6018,`code`,83),vN(6019,` PoLookupFilteredItemsParams `),ug()(),Ac(6020,`td`,24)(6021,`p`),vN(6022,`Objeto enviado por parâmetro que implementa a interface `),Ac(6023,`code`),vN(6024,`PoLookupFilteredItemsParams`),ug(),vN(6025,`.`),ug()()()(),Kc(6026,`br`),Ac(6027,`table`,41)(6028,`tr`,16)(6029,`th`,42)(6030,`div`,25)(6031,`h4`)(6032,`span`,26),vN(6033,` getObjectByValue `),ug()()()()(),Ac(6034,`tr`,24)(6035,`td`,24)(6036,`p`),vN(6037,`Método responsável por enviar um valor que será buscado no serviço.`),ug(),Ac(6038,`p`),vN(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),ug()()()(),Ac(6040,`h5`)(6041,`b`),vN(6042,`Parâmetros`),ug()(),Ac(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),vN(6046,`Nome`),ug(),Ac(6047,`th`,15),vN(6048,`Tipo`),ug(),Ac(6049,`th`,15),vN(6050,`Descrição`),ug()(),Ac(6051,`tr`,16)(6052,`td`,17),vN(6053,` value`),ug(),Ac(6054,`td`,21)(6055,`code`,27),vN(6056,` string `),ug(),Ac(6057,`code`,74),vN(6058,` Array<any> `),ug()(),Ac(6059,`td`,24)(6060,`p`),vN(6061,`Valor único a ser buscado na fonte de dados.`),ug()()(),Ac(6062,`tr`,16)(6063,`td`,17),vN(6064,` filterParams`),ug(),Ac(6065,`td`,21)(6066,`code`,83),vN(6067,` any `),ug()(),Ac(6068,`td`,24)(6069,`p`),vN(6070,`Valor informado através da propriedade `),Ac(6071,`code`),vN(6072,`p-filter-params`),ug(),vN(6073,`.`),ug()()()(),Kc(6074,`br`),Ac(6075,`h4`,43)(6076,`code`,5),vN(6077,`PoLookupFilteredItemsParams`),ug()(),Ac(6078,`div`,2)(6079,`p`),vN(6080,`Interface do objeto enviado como parâmetro na função `),Ac(6081,`code`),vN(6082,`getFilteredItems`),ug(),vN(6083,`.`),ug()(),Ac(6084,`h4`,12),vN(6085,`Propriedades`),ug(),Ac(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),vN(6089,`Nome`),ug(),Ac(6090,`th`,15),vN(6091,`Tipo`),ug(),Ac(6092,`th`,15),vN(6093,`Descrição`),ug()(),Ac(6094,`tr`,16)(6095,`td`,17)(6096,`div`,25)(6097,`span`,26),vN(6098,` advancedFilters`),Kc(6099,`br`),ug()()(),Ac(6100,`td`,21)(6101,`code`,84),vN(6102,`{ [key: string]: any;
}`),ug()(),Ac(6103,`td`,24)(6104,`em`)(6105,`strong`),vN(6106,`(opcional)`),ug()(),Ac(6107,`p`),vN(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),ug()()(),Ac(6109,`tr`,16)(6110,`td`,17)(6111,`div`,25)(6112,`span`,26),vN(6113,` filter`),Kc(6114,`br`),ug()()(),Ac(6115,`td`,21)(6116,`code`,27),vN(6117,`string`),ug()(),Ac(6118,`td`,24)(6119,`em`)(6120,`strong`),vN(6121,`(opcional)`),ug()(),Ac(6122,`p`),vN(6123,`Conteúdo utilizado para filtrar a lista de itens.`),ug()()(),Ac(6124,`tr`,16)(6125,`td`,17)(6126,`div`,25)(6127,`span`,26),vN(6128,` filterParams`),Kc(6129,`br`),ug()()(),Ac(6130,`td`,21)(6131,`code`,33),vN(6132,`any`),ug()(),Ac(6133,`td`,24)(6134,`em`)(6135,`strong`),vN(6136,`(opcional)`),ug()(),Ac(6137,`p`),vN(6138,`Valor informado através da propriedade `),Ac(6139,`code`),vN(6140,`p-filter-params`),ug(),vN(6141,`.`),ug()()(),Ac(6142,`tr`,16)(6143,`td`,17)(6144,`div`,25)(6145,`span`,26),vN(6146,` order`),Kc(6147,`br`),ug()()(),Ac(6148,`td`,21)(6149,`code`,27),vN(6150,`string`),ug()(),Ac(6151,`td`,24)(6152,`em`)(6153,`strong`),vN(6154,`(opcional)`),ug()(),Ac(6155,`p`),vN(6156,`Coluna que está sendo ordenada na tabela.`),ug(),Ac(6157,`ul`)(6158,`li`),vN(6159,`Coluna decrescente será informada da seguinte forma: `),Ac(6160,`code`),vN(6161,`-<colunaOrdenada>`),ug(),vN(6162,`, por exemplo `),Ac(6163,`code`),vN(6164,`-name`),ug(),vN(6165,`.`),ug(),Ac(6166,`li`),vN(6167,`Coluna ascendente será informada da seguinte forma: `),Ac(6168,`code`),vN(6169,`<colunaOrdenada>`),ug(),vN(6170,`, por exemplo `),Ac(6171,`code`),vN(6172,`name`),ug(),vN(6173,`.`),ug()()()(),Ac(6174,`tr`,16)(6175,`td`,17)(6176,`div`,25)(6177,`span`,26),vN(6178,` page`),Kc(6179,`br`),ug()()(),Ac(6180,`td`,21)(6181,`code`,45),vN(6182,`number`),ug()(),Ac(6183,`td`,24)(6184,`em`)(6185,`strong`),vN(6186,`(opcional)`),ug()(),Ac(6187,`p`),vN(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),ug()()(),Ac(6189,`tr`,16)(6190,`td`,17)(6191,`div`,25)(6192,`span`,26),vN(6193,` pageSize`),Kc(6194,`br`),ug()()(),Ac(6195,`td`,21)(6196,`code`,45),vN(6197,`number`),ug()(),Ac(6198,`td`,24)(6199,`em`)(6200,`strong`),vN(6201,`(opcional)`),ug()(),Ac(6202,`p`),vN(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),ug()()()(),Ac(6204,`h4`,43)(6205,`code`,5),vN(6206,`PoLookupLiterals`),ug()(),Ac(6207,`div`,2)(6208,`p`),vN(6209,`Interface para definição das literais usadas no `),Ac(6210,`code`),vN(6211,`po-lookup`),ug(),vN(6212,`.`),ug()(),Ac(6213,`h4`,12),vN(6214,`Propriedades`),ug(),Ac(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),vN(6218,`Nome`),ug(),Ac(6219,`th`,15),vN(6220,`Tipo`),ug(),Ac(6221,`th`,15),vN(6222,`Descrição`),ug()(),Ac(6223,`tr`,16)(6224,`td`,17)(6225,`div`,25)(6226,`span`,26),vN(6227,` clean`),Kc(6228,`br`),ug()()(),Ac(6229,`td`,21)(6230,`code`,27),vN(6231,`string`),ug()(),Ac(6232,`td`,24)(6233,`em`)(6234,`strong`),vN(6235,`(opcional)`),ug()(),Ac(6236,`p`),vN(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),ug()()(),Ac(6238,`tr`,16)(6239,`td`,17)(6240,`div`,25)(6241,`span`,26),vN(6242,` modalAdvancedSearch`),Kc(6243,`br`),ug()()(),Ac(6244,`td`,21)(6245,`code`,27),vN(6246,`string`),ug()(),Ac(6247,`td`,24)(6248,`em`)(6249,`strong`),vN(6250,`(opcional)`),ug()(),Ac(6251,`p`),vN(6252,`Texto do link de busca avançada.`),ug(),Ac(6253,`p`),vN(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),ug()()(),Ac(6255,`tr`,16)(6256,`td`,17)(6257,`div`,25)(6258,`span`,26),vN(6259,` modalAdvancedSearchPrimaryActionLabel`),Kc(6260,`br`),ug()()(),Ac(6261,`td`,21)(6262,`code`,27),vN(6263,`string`),ug()(),Ac(6264,`td`,24)(6265,`em`)(6266,`strong`),vN(6267,`(opcional)`),ug()(),Ac(6268,`p`),vN(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),ug()()(),Ac(6270,`tr`,16)(6271,`td`,17)(6272,`div`,25)(6273,`span`,26),vN(6274,` modalAdvancedSearchSecondaryActionLabel`),Kc(6275,`br`),ug()()(),Ac(6276,`td`,21)(6277,`code`,27),vN(6278,`string`),ug()(),Ac(6279,`td`,24)(6280,`em`)(6281,`strong`),vN(6282,`(opcional)`),ug()(),Ac(6283,`p`),vN(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),ug()()(),Ac(6285,`tr`,16)(6286,`td`,17)(6287,`div`,25)(6288,`span`,26),vN(6289,` modalAdvancedSearchTitle`),Kc(6290,`br`),ug()()(),Ac(6291,`td`,21)(6292,`code`,27),vN(6293,`string`),ug()(),Ac(6294,`td`,24)(6295,`em`)(6296,`strong`),vN(6297,`(opcional)`),ug()(),Ac(6298,`p`),vN(6299,`Texto exibido no título da modal de busca avançada.`),ug()()(),Ac(6300,`tr`,16)(6301,`td`,17)(6302,`div`,25)(6303,`span`,26),vN(6304,` modalDisclaimerGroupTitle`),Kc(6305,`br`),ug()()(),Ac(6306,`td`,21)(6307,`code`,27),vN(6308,`string`),ug()(),Ac(6309,`td`,24)(6310,`em`)(6311,`strong`),vN(6312,`(opcional)`),ug()(),Ac(6313,`p`),vN(6314,`Texto exibido no título do disclaimer.`),ug()()(),Ac(6315,`tr`,16)(6316,`td`,17)(6317,`div`,25)(6318,`span`,26),vN(6319,` modalPlaceholder`),Kc(6320,`br`),ug()()(),Ac(6321,`td`,21)(6322,`code`,27),vN(6323,`string`),ug()(),Ac(6324,`td`,24)(6325,`em`)(6326,`strong`),vN(6327,`(opcional)`),ug()(),Ac(6328,`p`),vN(6329,`Texto exibido no placeholder do input da modal.`),ug()()(),Ac(6330,`tr`,16)(6331,`td`,17)(6332,`div`,25)(6333,`span`,26),vN(6334,` modalPrimaryActionLabel`),Kc(6335,`br`),ug()()(),Ac(6336,`td`,21)(6337,`code`,27),vN(6338,`string`),ug()(),Ac(6339,`td`,24)(6340,`em`)(6341,`strong`),vN(6342,`(opcional)`),ug()(),Ac(6343,`p`),vN(6344,`Texto exibido no label do botão de ação primária da modal.`),ug()()(),Ac(6345,`tr`,16)(6346,`td`,17)(6347,`div`,25)(6348,`span`,26),vN(6349,` modalSecondaryActionLabel`),Kc(6350,`br`),ug()()(),Ac(6351,`td`,21)(6352,`code`,27),vN(6353,`string`),ug()(),Ac(6354,`td`,24)(6355,`em`)(6356,`strong`),vN(6357,`(opcional)`),ug()(),Ac(6358,`p`),vN(6359,`Texto exibido no label do botão de ação secundária da modal.`),ug()()(),Ac(6360,`tr`,16)(6361,`td`,17)(6362,`div`,25)(6363,`span`,26),vN(6364,` modalTableLoadMoreData`),Kc(6365,`br`),ug()()(),Ac(6366,`td`,21)(6367,`code`,27),vN(6368,`string`),ug()(),Ac(6369,`td`,24)(6370,`em`)(6371,`strong`),vN(6372,`(opcional)`),ug()(),Ac(6373,`p`),vN(6374,`Label do `),Ac(6375,`code`),vN(6376,`button`),ug(),vN(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),ug()()(),Ac(6378,`tr`,16)(6379,`td`,17)(6380,`div`,25)(6381,`span`,26),vN(6382,` modalTableLoadingData`),Kc(6383,`br`),ug()()(),Ac(6384,`td`,21)(6385,`code`,27),vN(6386,`string`),ug()(),Ac(6387,`td`,24)(6388,`em`)(6389,`strong`),vN(6390,`(opcional)`),ug()(),Ac(6391,`p`),vN(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),ug()()(),Ac(6393,`tr`,16)(6394,`td`,17)(6395,`div`,25)(6396,`span`,26),vN(6397,` modalTableNoColumns`),Kc(6398,`br`),ug()()(),Ac(6399,`td`,21)(6400,`code`,27),vN(6401,`string`),ug()(),Ac(6402,`td`,24)(6403,`em`)(6404,`strong`),vN(6405,`(opcional)`),ug()(),Ac(6406,`p`),vN(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),ug()()(),Ac(6408,`tr`,16)(6409,`td`,17)(6410,`div`,25)(6411,`span`,26),vN(6412,` modalTableNoData`),Kc(6413,`br`),ug()()(),Ac(6414,`td`,21)(6415,`code`,27),vN(6416,`string`),ug()(),Ac(6417,`td`,24)(6418,`em`)(6419,`strong`),vN(6420,`(opcional)`),ug()(),Ac(6421,`p`),vN(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),ug()()(),Ac(6423,`tr`,16)(6424,`td`,17)(6425,`div`,25)(6426,`span`,26),vN(6427,` modalTitle`),Kc(6428,`br`),ug()()(),Ac(6429,`td`,21)(6430,`code`,27),vN(6431,`string`),ug()(),Ac(6432,`td`,24)(6433,`em`)(6434,`strong`),vN(6435,`(opcional)`),ug()(),Ac(6436,`p`),vN(6437,`Texto exibido no título da modal.`),ug()()(),Ac(6438,`tr`,16)(6439,`td`,17)(6440,`div`,25)(6441,`span`,26),vN(6442,` search`),Kc(6443,`br`),ug()()(),Ac(6444,`td`,21)(6445,`code`,27),vN(6446,`string`),ug()(),Ac(6447,`td`,24)(6448,`em`)(6449,`strong`),vN(6450,`(opcional)`),ug()(),Ac(6451,`p`),vN(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),ug()()()(),Ac(6453,`h4`,43)(6454,`code`,5),vN(6455,`PoLookupResponseApi`),ug()(),Ac(6456,`div`,2)(6457,`p`),vN(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),ug()(),Ac(6459,`h4`,12),vN(6460,`Propriedades`),ug(),Ac(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),vN(6464,`Nome`),ug(),Ac(6465,`th`,15),vN(6466,`Tipo`),ug(),Ac(6467,`th`,15),vN(6468,`Descrição`),ug()(),Ac(6469,`tr`,16)(6470,`td`,17)(6471,`div`,25)(6472,`span`,26),vN(6473,` hasNext`),Kc(6474,`br`),ug()()(),Ac(6475,`td`,21)(6476,`code`,29),vN(6477,`boolean`),ug()(),Ac(6478,`td`,24)(6479,`p`),vN(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),ug()()(),Ac(6481,`tr`,16)(6482,`td`,17)(6483,`div`,25)(6484,`span`,26),vN(6485,` items`),Kc(6486,`br`),ug()()(),Ac(6487,`td`,21)(6488,`code`,85),vN(6489,`Array<object>`),ug()(),Ac(6490,`td`,24)(6491,`p`),vN(6492,`Lista de itens retornados.`),ug()()()(),Ac(6493,`h3`),vN(6494,`Enums`),ug(),Ac(6495,`h4`,4)(6496,`code`,5),vN(6497,`PoTableColumnSpacing`),ug()(),Ac(6498,`div`,2)(6499,`p`),vN(6500,`Tipos de espaçamento interno (padding) das células (`),Ac(6501,`strong`),vN(6502,`p-spacing`),ug(),vN(6503,`) do po-table.`),ug()(),Ac(6504,`h4`,12),vN(6505,`Propriedades`),ug(),Ac(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),vN(6509,`Nome`),ug(),Ac(6510,`th`,15),vN(6511,`Descrição`),ug()(),Ac(6512,`tr`,16)(6513,`td`,17)(6514,`div`,25)(6515,`span`,26),vN(6516,` ExtraSmall`),Kc(6517,`br`),ug()()(),Ac(6518,`td`,24)(6519,`p`),vN(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),ug()()(),Ac(6521,`tr`,16)(6522,`td`,17)(6523,`div`,25)(6524,`span`,26),vN(6525,` Small`),Kc(6526,`br`),ug()()(),Ac(6527,`td`,24)(6528,`p`),vN(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(6530,`tr`,16)(6531,`td`,17)(6532,`div`,25)(6533,`span`,26),vN(6534,` Medium`),Kc(6535,`br`),ug()()(),Ac(6536,`td`,24)(6537,`p`),vN(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(6539,`tr`,16)(6540,`td`,17)(6541,`div`,25)(6542,`span`,26),vN(6543,` Large`),Kc(6544,`br`),ug()()(),Ac(6545,`td`,24)(6546,`p`),vN(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Mt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:13,vars:4,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-lookup-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-lookup-basic-view`)(6,`sample-po-lookup-labs-view`)(7,`sample-po-lookup-hero-view`)(8,`sample-po-lookup-hero-reactive-form-view`)(9,`sample-po-lookup-advanced-filter-view`)(10,`sample-po-lookup-sw-films-view`)(11,`sample-po-lookup-multiple-view`)(12,`sample-po-lookup-mask-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,je,Ie,ze,Ne,Re,Ue,Je,Ke,Xe],encapsulation:2,changeDetection:1})}return a})()}];var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Mt),kL]})}return a})();var bi=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ze]})}return a})();export{bi as DocPoLookupModule};