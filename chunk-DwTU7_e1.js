import{r as t,t as r}from"./chunk-zystk1pz.js";import{$i as q,$r as Wx,Ar as O$1,Br as RE,Di as he,Dn as wn,Dt as aae,Hn as AN,Kn as BP,Kt as jy,Li as kL,Oi as hm,Qi as pt$1,Qt as m4,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Ur as Rx,Vr as RN,Wi as mg,Wn as Ax,Wr as S9,Wt as ioe,Xn as C9,Yn as Bx,Zr as VN,ai as aN,ar as FN,b as Au,ci as be,da as uv,dr as Hp,en as ni,er as D9,fa as vN,ga as wn$1,gn as tae,gr as JO,ha as wN,hi as e_,i as _a,ii as Zx,in as ooe,ir as FM,ji as hw,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,pr as I,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,ta as qP,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xr as KP}from"./main-VW33P2VM.js";var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&Kc(0,`po-lookup`,0)},dependencies:[jy],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-lookup
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-lookup-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,$e,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,_e],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=f(hw);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,s=t(m,[`filterParams`,`advancedFilters`]),p=r(r(r({},s),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var je=(()=>{class a{sampleFilterService=f(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=wn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[be([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Bx();Ac(0,`po-lookup`,1),RE(`ngModelChange`,function(m){return Jv(s),DN(o.lookup,m)||(o.lookup=m),e_(m)}),pt$1(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`po-container`,2)(3,`div`,3),Kc(4,`po-info`,4)(5,`po-info`,5),ug()(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`po-input`,6),RE(`ngModelChange`,function(m){return Jv(s),DN(o.label,m)||(o.label=m),e_(m)}),ug(),p0(),Ac(10,`po-checkbox-group`,7),RE(`ngModelChange`,function(m){return Jv(s),DN(o.columnsName,m)||(o.columnsName=m),e_(m)}),pt$1(`p-change`,function(){return o.updateColumns()}),ug(),p0(),Ac(11,`po-select`,8),RE(`ngModelChange`,function(m){return Jv(s),DN(o.fieldLabel,m)||(o.fieldLabel=m),e_(m)}),ug(),p0(),Ac(12,`po-select`,9),RE(`ngModelChange`,function(m){return Jv(s),DN(o.fieldValue,m)||(o.fieldValue=m),e_(m)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(m){return Jv(s),DN(o.filterService,m)||(o.filterService=m),e_(m)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(m){return Jv(s),DN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),e_(m)}),ug(),p0(),Ac(15,`po-input`,12),RE(`ngModelChange`,function(m){return Jv(s),DN(o.help,m)||(o.help=m),e_(m)}),ug(),p0(),Ac(16,`po-input`,13),RE(`ngModelChange`,function(m){return Jv(s),DN(o.helperText,m)||(o.helperText=m),e_(m)}),ug(),p0(),Ac(17,`po-input`,14),RE(`ngModelChange`,function(m){return Jv(s),DN(o.placeholder,m)||(o.placeholder=m),e_(m)}),ug(),p0(),Ac(18,`po-input`,15),RE(`ngModelChange`,function(m){return Jv(s),DN(o.literals,m)||(o.literals=m),e_(m)}),pt$1(`p-change`,function(){return o.changeLiterals()}),ug(),p0(),Ac(19,`po-input`,16),RE(`ngModelChange`,function(m){return Jv(s),DN(o.formatField,m)||(o.formatField=m),e_(m)}),pt$1(`p-change`,function(m){return o.onFieldFormatChange(m)}),ug(),p0(),Ac(20,`po-checkbox-group`,17),RE(`ngModelChange`,function(m){return Jv(s),DN(o.properties,m)||(o.properties=m),e_(m)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(m){return Jv(s),DN(o.spacing,m)||(o.spacing=m),e_(m)}),ug(),p0(),Ac(22,`po-radio-group`,19),RE(`ngModelChange`,function(m){return Jv(s),DN(o.size,m)||(o.size=m),e_(m)}),ug(),p0(),Ac(23,`po-textarea`,20),RE(`ngModelChange`,function(m){return Jv(s),DN(o.advancedFilters,m)||(o.advancedFilters=m),e_(m)}),pt$1(`p-change`,function(){return o.changeAdvancedFilters()}),ug(),p0(),Ac(24,`div`,3)(25,`po-button`,21),pt$1(`p-click`,function(){return o.restore()}),ug()()()}l&2&&(TE(`ngModel`,o.lookup),cE(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),m0(),Hp(4),cE(`p-value`,o.lookup),Hp(),cE(`p-value`,o.event),Hp(4),TE(`ngModel`,o.label),m0(),Hp(),TE(`ngModel`,o.columnsName),cE(`p-options`,o.columnsOptions),m0(),Hp(),TE(`ngModel`,o.fieldLabel),cE(`p-options`,o.fieldLabelOptions),m0(),Hp(),TE(`ngModel`,o.fieldValue),cE(`p-options`,o.fieldValueOptions),m0(),Hp(),TE(`ngModel`,o.filterService),m0(),Hp(),TE(`ngModel`,o.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,o.help),m0(),Hp(),TE(`ngModel`,o.helperText),m0(),Hp(),TE(`ngModel`,o.placeholder),m0(),Hp(),TE(`ngModel`,o.literals),m0(),Hp(),TE(`ngModel`,o.formatField),m0(),Hp(),TE(`ngModel`,o.properties),cE(`p-options`,o.propertiesOptions),m0(),Hp(),TE(`ngModel`,o.spacing),cE(`p-options`,o.typeSpacing),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0(),Hp(),TE(`ngModel`,o.advancedFilters),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ic,ob,t4,_4,jy,Cte,ioe,ooe,roe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-lookup
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-labs`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,tt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,je],encapsulation:2,changeDetection:1})}return a})();var nt=()=>({modalTitle:`Heroes available for mission`});var Ie=(()=>{class a{service=f(O);notification=f(Au);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[be([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let s=Bx();Ac(0,`div`,1),Kc(1,`po-info`,2),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),RE(`ngModelChange`,function(m){return Jv(s),DN(o.hero,m)||(o.hero=m),e_(m)}),ug(),p0(),Ac(7,`po-select`,4),RE(`ngModelChange`,function(m){return Jv(s),DN(o.vehicle,m)||(o.vehicle=m),e_(m)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-button`,5),pt$1(`p-click`,function(){return o.startMission()}),ug()()()}if(l&2){let s=Zx(4);Hp(6),TE(`ngModel`,o.hero),cE(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,RN(10,nt)),m0(),Hp(),TE(`ngModel`,o.vehicle),cE(`p-options`,o.vehicles),m0(),Hp(2),cE(`p-disabled`,s.form.invalid||s.form.pending)}},dependencies:[b9,D9,C9,BP,LP,ni,ob,jy,ioe,roe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Hero`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-hero`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,at,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ie],encapsulation:2,changeDetection:1})}return a})();var rt=()=>[`nickname`,`label`];var mt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=f(O);notification=f(Au);formBuilder=f(S9);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,hm.required],vehicle:[null,hm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[be([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Ac(0,`div`,0),Kc(1,`po-info`,1),ug(),Kc(2,`po-divider`),Ac(3,`form`,2)(4,`div`,0),Kc(5,`po-lookup`,3),p0(),Kc(6,`po-select`,4),p0(),ug(),Ac(7,`div`,0)(8,`po-button`,5),pt$1(`p-click`,function(){return o.startMission()}),ug()()()),l&2&&(Hp(3),cE(`formGroup`,o.formMission),Hp(2),cE(`p-columns`,o.columns)(`p-field-format`,RN(7,rt))(`p-filter-service`,o.service)(`p-literals`,RN(8,mt)),m0(),Hp(),cE(`p-options`,o.vehicles),m0(),Hp(2),cE(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[b9,D9,C9,KP,qP,ni,ob,jy,ioe,roe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Hero Reactive Form`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-hero-reactive-form`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,pt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ve],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(hw);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(q(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(q(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ct(a,yt){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-table`,3),ug()),a&2){let r=Wx();Hp(),cE(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var Ne=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[be([se])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-radio-group`,1),RE(`ngModelChange`,function(p){return DN(o.filterParams,p)||(o.filterParams=p),p}),ug(),p0(),ug(),Kc(2,`po-divider`),Ac(3,`div`,0)(4,`po-lookup`,2),FN(5,`titlecase`),RE(`ngModelChange`,function(p){return DN(o.entity,p)||(o.entity=p),p}),pt$1(`p-selected`,function(p){return o.onSelected(p)}),ug(),p0(),ug(),Rx(6,ct,2,4,`div`,0)),l&2&&(Hp(),TE(`ngModel`,o.filterParams),cE(`p-options`,o.entities),m0(),Hp(3),cE(`p-help`,wN(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,wN(``,VN(5,12,o.entityLabel),` of Star Wars`)),TE(`ngModel`,o.entity),cE(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),m0(),Hp(2),Ax(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[D9,BP,ob,jy,Cte,m4,JO],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Star Wars films`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-sw-films`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Et,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ne],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{http=f(hw);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(FM(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=(()=>{class a{service=f(Re);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-lookup`,1),RE(`ngModelChange`,function(p){return DN(o.multiLookup,p)||(o.multiLookup=p),p}),pt$1(`p-change`,function(p){return o.changeOptions(p)}),ug(),p0(),Ac(2,`po-container`,2),Kc(3,`po-table`,3),ug()()),l&2&&(Hp(),TE(`ngModel`,o.multiLookup),cE(`p-multiple`,!0),m0(),Hp(2),cE(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[D9,BP,Ic,jy,m4],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Multiple`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-multiple`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,bt,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,We],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items];return O$1({items:o,hasNext:!1}).pipe(uv(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(uv(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(uv(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac})}return a})();var Ge=(()=>{class a{service=f(ce);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[be([ce])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-lookup`,1),RE(`ngModelChange`,function(p){return DN(o.person,p)||(o.person=p),p}),ug(),p0(),ug()),l&2&&(Hp(),TE(`ngModel`,o.person),cE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),m0())},dependencies:[D9,BP,jy],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Lookup - Mask`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-lookup-mask`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ht,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6520,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
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
`),ug()()()(),Ac(436,`tr`,16)(437,`td`,17)(438,`div`,25)(439,`span`,26),vN(440,` p-append-in-body`),Kc(441,`br`),ug()()(),Ac(442,`td`,21)(443,`code`,29),vN(444,`boolean`),ug()(),Ac(445,`td`,23)(446,`p`)(447,`code`),vN(448,`false`),ug()()(),Ac(449,`td`,24)(450,`em`)(451,`strong`),vN(452,`(opcional)`),ug()(),Ac(453,`p`),vN(454,`Define que o popover (`),Ac(455,`code`),vN(456,`p-helper`),ug(),vN(457,` e/ou `),Ac(458,`code`),vN(459,`p-error-limit`),ug(),vN(460,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(461,`blockquote`)(462,`p`),vN(463,`Quando utilizado com `),Ac(464,`code`),vN(465,`p-helper`),ug(),vN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(467,`tr`,16)(468,`td`,17)(469,`div`,25)(470,`span`,26),vN(471,` p-auto-focus`),Kc(472,`br`),ug()()(),Ac(473,`td`,21)(474,`code`,29),vN(475,`boolean`),ug()(),Ac(476,`td`,23)(477,`p`)(478,`code`),vN(479,`false`),ug()()(),Ac(480,`td`,24)(481,`em`)(482,`strong`),vN(483,`(opcional)`),ug()(),Ac(484,`p`),vN(485,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(486,`blockquote`)(487,`p`),vN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),vN(493,` p-auto-height`),Kc(494,`br`),ug()()(),Ac(495,`td`,21)(496,`code`,29),vN(497,`boolean`),ug()(),Ac(498,`td`,23)(499,`p`)(500,`code`),vN(501,`false`),ug()()(),Ac(502,`td`,24)(503,`em`)(504,`strong`),vN(505,`(opcional)`),ug()(),Ac(506,`p`),vN(507,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ug()()(),Ac(508,`tr`,16)(509,`td`,17)(510,`div`,18)(511,`span`,19),vN(512,` (p-change)`),Kc(513,`br`),ug()()(),Ac(514,`td`,21)(515,`code`,22),vN(516,`EventEmitter`),ug()(),Ac(517,`td`,23),vN(518,`-`),ug(),Ac(519,`td`,24)(520,`em`)(521,`strong`),vN(522,`(opcional)`),ug()(),Ac(523,`p`),vN(524,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),ug()()(),Ac(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),vN(529,` (p-change-model)`),Kc(530,`br`),ug()()(),Ac(531,`td`,21)(532,`code`,22),vN(533,`EventEmitter`),ug()(),Ac(534,`td`,23),vN(535,`-`),ug(),Ac(536,`td`,24)(537,`em`)(538,`strong`),vN(539,`(opcional)`),ug()(),Ac(540,`p`),vN(541,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(542,`code`),vN(543,`setValue`),ug(),vN(544,`, `),Ac(545,`code`),vN(546,`patchValue`),ug(),vN(547,`, carregamento assíncrono).`),ug(),Ac(548,`p`),vN(549,`Diferentemente do `),Ac(550,`code`),vN(551,`p-change`),ug(),vN(552,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(553,`code`),vN(554,`p-change-model`),ug(),vN(555,` cobre todos os cenários de alteração de valor.`),ug(),Ac(556,`p`),vN(557,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(558,`tr`,16)(559,`td`,17)(560,`div`,18)(561,`span`,19),vN(562,` (p-change-visible-columns)`),Kc(563,`br`),ug()()(),Ac(564,`td`,21)(565,`code`,22),vN(566,`EventEmitter`),ug()(),Ac(567,`td`,23),vN(568,`-`),ug(),Ac(569,`td`,24)(570,`em`)(571,`strong`),vN(572,`(opcional)`),ug()(),Ac(573,`p`),vN(574,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(575,`p`),vN(576,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(577,`tr`,16)(578,`td`,17)(579,`div`,25)(580,`span`,26),vN(581,` p-clean`),Kc(582,`br`),ug()()(),Ac(583,`td`,21)(584,`code`,29),vN(585,`boolean`),ug()(),Ac(586,`td`,23),vN(587,`-`),ug(),Ac(588,`td`,24)(589,`p`),vN(590,`Exibe um ícone que permite limpar o campo.`),ug()()(),Ac(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),vN(595,` (p-restore-column-manager)`),Kc(596,`br`),ug()()(),Ac(597,`td`,21)(598,`code`,22),vN(599,`EventEmitter`),ug()(),Ac(600,`td`,23),vN(601,`-`),ug(),Ac(602,`td`,24)(603,`em`)(604,`strong`),vN(605,`(opcional)`),ug()(),Ac(606,`p`),vN(607,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(608,`p`),vN(609,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(610,`tr`,16)(611,`td`,17)(612,`div`,25)(613,`span`,26),vN(614,` p-columns`),Kc(615,`br`),ug()()(),Ac(616,`td`,21)(617,`code`,30),vN(618,`Array<PoLookupColumn>`),ug()(),Ac(619,`td`,23),vN(620,`-`),ug(),Ac(621,`td`,24)(622,`em`)(623,`strong`),vN(624,`(opcional)`),ug()(),Ac(625,`p`),vN(626,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),ug()()(),Ac(627,`tr`,16)(628,`td`,17)(629,`div`,25)(630,`span`,26),vN(631,` p-compact-label`),Kc(632,`br`),ug()()(),Ac(633,`td`,21)(634,`code`,29),vN(635,`boolean`),ug()(),Ac(636,`td`,23)(637,`p`)(638,`code`),vN(639,`false`),ug()()(),Ac(640,`td`,24)(641,`em`)(642,`strong`),vN(643,`(opcional)`),ug()(),Ac(644,`p`),vN(645,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(646,`p`),vN(647,`Quando habilitado (`),Ac(648,`code`),vN(649,`true`),ug(),vN(650,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(651,`ul`)(652,`li`)(653,`code`),vN(654,`po-label`),ug()(),Ac(655,`li`)(656,`code`),vN(657,`p-requirement (showRequired)`),ug()(),Ac(658,`li`)(659,`code`),vN(660,`po-helper`),ug()()(),Ac(661,`p`),vN(662,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(663,`p`),vN(664,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(665,`ul`)(666,`li`)(667,`code`),vN(668,`--field-container-title-justify`),ug()(),Ac(669,`li`)(670,`code`),vN(671,`--field-container-title-flex`),ug()()(),Ac(672,`p`),vN(673,`Exemplo:`),ug(),Ac(674,`pre`)(675,`code`),vN(676,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(677,`p`),vN(678,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(679,`tr`,16)(680,`td`,17)(681,`div`,25)(682,`span`,26),vN(683,` p-disabled`),Kc(684,`br`),ug()()(),Ac(685,`td`,21)(686,`code`,29),vN(687,`boolean`),ug()(),Ac(688,`td`,23)(689,`p`),vN(690,`false`),ug()(),Ac(691,`td`,24)(692,`em`)(693,`strong`),vN(694,`(opcional)`),ug()(),Ac(695,`p`),vN(696,`Indica que o campo será desabilitado.`),ug()()(),Ac(697,`tr`,16)(698,`td`,17)(699,`div`,25)(700,`span`,26),vN(701,` p-error-limit`),Kc(702,`br`),ug()()(),Ac(703,`td`,21)(704,`code`,29),vN(705,`boolean`),ug()(),Ac(706,`td`,23)(707,`p`)(708,`code`),vN(709,`false`),ug()()(),Ac(710,`td`,24)(711,`em`)(712,`strong`),vN(713,`(opcional)`),ug()(),Ac(714,`p`),vN(715,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(716,`blockquote`)(717,`p`),vN(718,`Caso essa propriedade seja definida como `),Ac(719,`code`),vN(720,`true`),ug(),vN(721,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(722,`tr`,16)(723,`td`,17)(724,`div`,25)(725,`span`,26),vN(726,` p-field-error-message`),Kc(727,`br`),ug()()(),Ac(728,`td`,21)(729,`code`,27),vN(730,`string`),ug()(),Ac(731,`td`,23),vN(732,`-`),ug(),Ac(733,`td`,24)(734,`em`)(735,`strong`),vN(736,`(opcional)`),ug()(),Ac(737,`p`),vN(738,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(739,`blockquote`)(740,`p`),vN(741,`Necessário que a propriedade `),Ac(742,`code`),vN(743,`p-required`),ug(),vN(744,` esteja habilitada.`),ug()()()(),Ac(745,`tr`,16)(746,`td`,17)(747,`div`,25)(748,`span`,26),vN(749,` p-field-format`),Kc(750,`br`),ug()()(),Ac(751,`td`,21)(752,`code`,31),vN(753,`((value) => string) `),ug(),Ac(754,`code`,32),vN(755,` Array<string>`),ug()(),Ac(756,`td`,23),vN(757,`-`),ug(),Ac(758,`td`,24)(759,`em`)(760,`strong`),vN(761,`(opcional)`),ug()(),Ac(762,`p`),vN(763,`Formato de exibição do campo.`),ug(),Ac(764,`p`),vN(765,`Recebe uma função que deve retornar uma `),Ac(766,`em`),vN(767,`string`),ug(),vN(768,` com o/os valores do objeto formatados para exibição, por exemplo:`),ug(),Ac(769,`pre`)(770,`code`),vN(771,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),ug()(),Ac(772,`blockquote`)(773,`p`),vN(774,`Esta propriedade sobrepõe o valor da propriedade `),Ac(775,`code`),vN(776,`p-field-label`),ug(),vN(777,` na descrição do campo.`),ug()(),Ac(778,`p`),vN(779,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),ug(),Ac(780,`pre`)(781,`code`),vN(782,`<po-lookup
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
`),ug()(),Ac(783,`blockquote`)(784,`p`),vN(785,`Será utilizado `),Ac(786,`code`),vN(787,`-`),ug(),vN(788,` como separador.`),ug()()()(),Ac(789,`tr`,16)(790,`td`,17)(791,`div`,25)(792,`span`,26),vN(793,` p-field-label`),Kc(794,`br`),ug()()(),Ac(795,`td`,21)(796,`code`,27),vN(797,`string`),ug()(),Ac(798,`td`,23),vN(799,`-`),ug(),Ac(800,`td`,24)(801,`p`),vN(802,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),ug()()(),Ac(803,`tr`,16)(804,`td`,17)(805,`div`,25)(806,`span`,26),vN(807,` p-field-value`),Kc(808,`br`),ug()()(),Ac(809,`td`,21)(810,`code`,27),vN(811,`string`),ug()(),Ac(812,`td`,23),vN(813,`-`),ug(),Ac(814,`td`,24)(815,`p`),vN(816,`Indica a coluna que será utilizada como valor do campo.`),ug(),Ac(817,`blockquote`)(818,`p`),vN(819,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),ug()()()(),Ac(820,`tr`,16)(821,`td`,17)(822,`div`,25)(823,`span`,26),vN(824,` p-filter-params`),Kc(825,`br`),ug()()(),Ac(826,`td`,21)(827,`code`,33),vN(828,`any`),ug()(),Ac(829,`td`,23),vN(830,`-`),ug(),Ac(831,`td`,24)(832,`em`)(833,`strong`),vN(834,`(opcional)`),ug()(),Ac(835,`p`),vN(836,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Ac(837,`code`),vN(838,`PoLookupFilter`),ug(),vN(839,`.`),ug()()(),Ac(840,`tr`,16)(841,`td`,17)(842,`div`,25)(843,`span`,26),vN(844,` p-filter-service`),Kc(845,`br`),ug()()(),Ac(846,`td`,21)(847,`code`,27),vN(848,`string `),ug(),Ac(849,`code`,34),vN(850,` PoLookupFilter`),ug()(),Ac(851,`td`,23),vN(852,`-`),ug(),Ac(853,`td`,24)(854,`p`),vN(855,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Ac(856,`code`),vN(857,`PoLookupFilter`),ug(),vN(858,` ou uma URL.`),ug(),Ac(859,`p`),vN(860,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),ug(),Ac(861,`pre`)(862,`code`),vN(863,`url + ?page=1&pageSize=20&filter=Peter
`),ug()(),Ac(864,`p`),vN(865,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Ac(866,`code`),vN(867,`order`),ug(),vN(868,`, por exemplo:`),ug(),Ac(869,`ul`)(870,`li`)(871,`p`),vN(872,`Coluna decrescente:`),ug(),Ac(873,`pre`)(874,`code`),vN(875,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),ug()()(),Ac(876,`li`)(877,`p`),vN(878,`Coluna ascendente:`),ug(),Ac(879,`pre`)(880,`code`),vN(881,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),ug()()()(),Ac(882,`p`),vN(883,`Se for definido a propriedade `),Ac(884,`code`),vN(885,`p-filter-params`),ug(),vN(886,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Ac(887,`code`),vN(888,`{ age: 23 }`),ug(),vN(889,` a URL ficaria:`),ug(),Ac(890,`pre`)(891,`code`),vN(892,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ug()(),Ac(893,`p`),vN(894,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),ug(),Ac(895,`pre`)(896,`code`),vN(897,`model = 1234;

GET url/1234
`),ug()(),Ac(898,`p`),vN(899,`Caso estiver com múltipla seleção habilitada:`),ug(),Ac(900,`pre`)(901,`code`),vN(902,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),ug()(),Ac(903,`blockquote`)(904,`p`),vN(905,`Esta URL deve retornar e receber os dados no padrão de `),Ac(906,`a`,7),vN(907,`API do PO UI`),ug(),vN(908,` e utiliza os valores
definidos nas propriedades `),Ac(909,`code`),vN(910,`p-field-label`),ug(),vN(911,` e `),Ac(912,`code`),vN(913,`p-field-value`),ug(),vN(914,` para a construção do `),Ac(915,`code`),vN(916,`po-lookup`),ug(),vN(917,`.`),ug()(),Ac(918,`p`),vN(919,`Caso o usuário digite um valor e pressione a tecla `),Ac(920,`em`),vN(921,`TAB`),ug(),vN(922,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Ac(923,`a`,35),vN(924,`encodeURIComponent`),ug(),vN(925,`
e concatenado na URL da seguinte forma:`),ug(),Ac(926,`pre`)(927,`code`),vN(928,`url/valor%20que%20se%20deseja%20filtrar
`),ug()(),Ac(929,`blockquote`)(930,`p`),vN(931,`Quando informado um serviço que implemente a interface `),Ac(932,`code`),vN(933,`PoLookupFilter`),ug(),vN(934,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),ug()()()(),Ac(935,`tr`,16)(936,`td`,17)(937,`div`,25)(938,`span`,26),vN(939,` p-help`),Kc(940,`br`),ug()()(),Ac(941,`td`,21)(942,`code`,27),vN(943,`string`),ug()(),Ac(944,`td`,23),vN(945,`-`),ug(),Ac(946,`td`,24)(947,`em`)(948,`strong`),vN(949,`(opcional)`),ug()(),Ac(950,`p`),vN(951,`Texto de apoio do campo.`),ug()()(),Ac(952,`tr`,16)(953,`td`,17)(954,`div`,25)(955,`span`,26),vN(956,` p-hide-columns-manager`),Kc(957,`br`),ug()()(),Ac(958,`td`,21)(959,`code`,29),vN(960,`boolean`),ug()(),Ac(961,`td`,23)(962,`p`)(963,`code`),vN(964,`false`),ug()()(),Ac(965,`td`,24)(966,`em`)(967,`strong`),vN(968,`(opcional)`),ug()(),Ac(969,`p`),vN(970,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),ug()()(),Ac(971,`tr`,16)(972,`td`,17)(973,`div`,25)(974,`span`,26),vN(975,` p-infinite-scroll`),Kc(976,`br`),ug()()(),Ac(977,`td`,21)(978,`code`,29),vN(979,`boolean`),ug()(),Ac(980,`td`,23)(981,`p`)(982,`code`),vN(983,`false`),ug()()(),Ac(984,`td`,24)(985,`em`)(986,`strong`),vN(987,`(opcional)`),ug()(),Ac(988,`p`),vN(989,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),ug()()(),Ac(990,`tr`,16)(991,`td`,17)(992,`div`,18)(993,`span`,19),vN(994,` (p-keydown)`),Kc(995,`br`),ug()()(),Ac(996,`td`,21)(997,`code`,22),vN(998,`EventEmitter`),ug()(),Ac(999,`td`,23),vN(1e3,`-`),ug(),Ac(1001,`td`,24)(1002,`em`)(1003,`strong`),vN(1004,`(opcional)`),ug()(),Ac(1005,`p`),vN(1006,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(1007,`code`),vN(1008,`KeyboardEvent`),ug(),vN(1009,` com informações sobre a tecla.`),ug()()(),Ac(1010,`tr`,16)(1011,`td`,17)(1012,`div`,25)(1013,`span`,26),vN(1014,` p-label`),Kc(1015,`br`),ug()()(),Ac(1016,`td`,21)(1017,`code`,27),vN(1018,`string`),ug()(),Ac(1019,`td`,23),vN(1020,`-`),ug(),Ac(1021,`td`,24)(1022,`em`)(1023,`strong`),vN(1024,`(opcional)`),ug()(),Ac(1025,`p`),vN(1026,`Label do campo.`),ug(),Ac(1027,`blockquote`)(1028,`p`),vN(1029,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Ac(1030,`code`),vN(1031,`modalTitle`),ug(),vN(1032,` na propriedade `),Ac(1033,`code`),vN(1034,`p-literals`),ug(),vN(1035,`.`),ug()()()(),Ac(1036,`tr`,16)(1037,`td`,17)(1038,`div`,25)(1039,`span`,26),vN(1040,` p-label-text-wrap`),Kc(1041,`br`),ug()()(),Ac(1042,`td`,21)(1043,`code`,29),vN(1044,`boolean`),ug()(),Ac(1045,`td`,23)(1046,`p`)(1047,`code`),vN(1048,`false`),ug()()(),Ac(1049,`td`,24)(1050,`em`)(1051,`strong`),vN(1052,`(opcional)`),ug()(),Ac(1053,`p`),vN(1054,`Habilita a quebra automática do texto da propriedade `),Ac(1055,`code`),vN(1056,`p-label`),ug(),vN(1057,`. Quando `),Ac(1058,`code`),vN(1059,`p-label-text-wrap`),ug(),vN(1060,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(1061,`tr`,16)(1062,`td`,17)(1063,`div`,25)(1064,`span`,26),vN(1065,` p-literals`),Kc(1066,`br`),ug()()(),Ac(1067,`td`,21)(1068,`code`,36),vN(1069,`PoLookupLiterals`),ug()(),Ac(1070,`td`,23),vN(1071,`-`),ug(),Ac(1072,`td`,24)(1073,`p`),vN(1074,`Objeto com as literais usadas no `),Ac(1075,`code`),vN(1076,`po-lookup`),ug(),vN(1077,`.`),ug(),Ac(1078,`p`),vN(1079,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(1080,`pre`)(1081,`code`),vN(1082,`const customLiterals: PoLookupLiterals = {
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
`),ug()(),Ac(1083,`p`),vN(1084,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(1085,`pre`)(1086,`code`),vN(1087,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),ug()(),Ac(1088,`p`),vN(1089,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(1090,`pre`)(1091,`code`),vN(1092,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),ug()(),Ac(1093,`blockquote`)(1094,`p`),vN(1095,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(1096,`a`,37)(1097,`code`),vN(1098,`PoI18nService`),ug()(),vN(1099,` ou do browser.`),ug()()()(),Ac(1100,`tr`,16)(1101,`td`,17)(1102,`div`,25)(1103,`span`,26),vN(1104,` p-loading`),Kc(1105,`br`),ug()()(),Ac(1106,`td`,21)(1107,`code`,29),vN(1108,`boolean`),ug()(),Ac(1109,`td`,23)(1110,`p`)(1111,`code`),vN(1112,`false`),ug()()(),Ac(1113,`td`,24)(1114,`em`)(1115,`strong`),vN(1116,`(opcional)`),ug()(),Ac(1117,`p`),vN(1118,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(1119,`tr`,16)(1120,`td`,17)(1121,`div`,25)(1122,`span`,26),vN(1123,` p-multiple`),Kc(1124,`br`),ug()()(),Ac(1125,`td`,21)(1126,`code`,29),vN(1127,`boolean`),ug()(),Ac(1128,`td`,23)(1129,`p`)(1130,`code`),vN(1131,`false`),ug()()(),Ac(1132,`td`,24)(1133,`em`)(1134,`strong`),vN(1135,`(opcional)`),ug()(),Ac(1136,`p`),vN(1137,`Permite a seleção de múltiplos itens.`),ug(),Ac(1138,`blockquote`)(1139,`p`),vN(1140,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Ac(1141,`code`),vN(1142,`[ 12345, 67890 ]`),ug()()()()(),Ac(1143,`tr`,16)(1144,`td`,17)(1145,`div`,25)(1146,`span`,26),vN(1147,` name`),Kc(1148,`br`),ug()()(),Ac(1149,`td`,21)(1150,`code`,27),vN(1151,`string`),ug()(),Ac(1152,`td`,23),vN(1153,`-`),ug(),Ac(1154,`td`,24)(1155,`p`),vN(1156,`Nome e Id do componente.`),ug()()(),Ac(1157,`tr`,16)(1158,`td`,17)(1159,`div`,25)(1160,`span`,26),vN(1161,` p-no-autocomplete`),Kc(1162,`br`),ug()()(),Ac(1163,`td`,21)(1164,`code`,29),vN(1165,`boolean`),ug()(),Ac(1166,`td`,23)(1167,`p`)(1168,`code`),vN(1169,`false`),ug()()(),Ac(1170,`td`,24)(1171,`em`)(1172,`strong`),vN(1173,`(opcional)`),ug()(),Ac(1174,`p`),vN(1175,`Define a propriedade nativa `),Ac(1176,`code`),vN(1177,`autocomplete`),ug(),vN(1178,` do campo como `),Ac(1179,`code`),vN(1180,`off`),ug(),vN(1181,`.`),ug()()(),Ac(1182,`tr`,16)(1183,`td`,17)(1184,`div`,18)(1185,`span`,19),vN(1186,` (p-error)`),Kc(1187,`br`),ug()()(),Ac(1188,`td`,21)(1189,`code`,22),vN(1190,`EventEmitter`),ug()(),Ac(1191,`td`,23),vN(1192,`-`),ug(),Ac(1193,`td`,24)(1194,`p`),vN(1195,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),ug()()(),Ac(1196,`tr`,16)(1197,`td`,17)(1198,`div`,25)(1199,`span`,26),vN(1200,` p-optional`),Kc(1201,`br`),ug()()(),Ac(1202,`td`,21)(1203,`code`,29),vN(1204,`boolean`),ug()(),Ac(1205,`td`,23)(1206,`p`)(1207,`code`),vN(1208,`false`),ug()()(),Ac(1209,`td`,24)(1210,`em`)(1211,`strong`),vN(1212,`(opcional)`),ug()(),Ac(1213,`p`),vN(1214,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1215,`blockquote`)(1216,`p`),vN(1217,`Não será exibida a indicação se:`),ug()(),Ac(1218,`ul`)(1219,`li`),vN(1220,`O campo conter `),Ac(1221,`code`),vN(1222,`p-required`),ug(),vN(1223,`;`),ug(),Ac(1224,`li`),vN(1225,`Não possuir `),Ac(1226,`code`),vN(1227,`p-help`),ug(),vN(1228,` e/ou `),Ac(1229,`code`),vN(1230,`p-label`),ug(),vN(1231,`.`),ug()()()(),Ac(1232,`tr`,16)(1233,`td`,17)(1234,`div`,25)(1235,`span`,26),vN(1236,` p-placeholder`),Kc(1237,`br`),ug()()(),Ac(1238,`td`,21)(1239,`code`,27),vN(1240,`string`),ug()(),Ac(1241,`td`,23),vN(1242,`-`),ug(),Ac(1243,`td`,24)(1244,`p`),vN(1245,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1246,`tr`,16)(1247,`td`,17)(1248,`div`,25)(1249,`span`,26),vN(1250,` p-helper`),Kc(1251,`br`),ug()()(),Ac(1252,`td`,21)(1253,`code`,38),vN(1254,`PoHelperOptions `),ug(),Ac(1255,`code`,27),vN(1256,` string`),ug()(),Ac(1257,`td`,23),vN(1258,`-`),ug(),Ac(1259,`td`,24)(1260,`em`)(1261,`strong`),vN(1262,`(opcional)`),ug()(),Ac(1263,`p`),vN(1264,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1265,`code`),vN(1266,`p-label`),ug(),vN(1267,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1268,`code`),vN(1269,`p-label`),ug(),vN(1270,`.`),ug(),Ac(1271,`blockquote`)(1272,`p`),vN(1273,`Para mais informações acesse: `),Ac(1274,`a`,39),vN(1275,`https://po-ui.io/documentation/po-helper`),ug(),vN(1276,`.`),ug()(),Ac(1277,`blockquote`)(1278,`p`),vN(1279,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1280,`code`),vN(1281,`p-additional-help-tooltip`),ug(),vN(1282,` e `),Ac(1283,`code`),vN(1284,`p-additional-help`),ug(),vN(1285,`) será ignorado.`),ug()()()(),Ac(1286,`tr`,16)(1287,`td`,17)(1288,`div`,25)(1289,`span`,26),vN(1290,` p-required`),Kc(1291,`br`),ug()()(),Ac(1292,`td`,21)(1293,`code`,29),vN(1294,`boolean`),ug()(),Ac(1295,`td`,23)(1296,`p`)(1297,`code`),vN(1298,`false`),ug()()(),Ac(1299,`td`,24)(1300,`em`)(1301,`strong`),vN(1302,`(opcional)`),ug()(),Ac(1303,`p`),vN(1304,`Define que o campo será obrigatório.`),ug(),Ac(1305,`blockquote`)(1306,`p`),vN(1307,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1308,`code`),vN(1309,`(p-disabled)`),ug(),vN(1310,`.`),ug()()()(),Ac(1311,`tr`,16)(1312,`td`,17)(1313,`div`,18)(1314,`span`,19),vN(1315,` (p-selected)`),Kc(1316,`br`),ug()()(),Ac(1317,`td`,21)(1318,`code`,22),vN(1319,`EventEmitter`),ug()(),Ac(1320,`td`,23),vN(1321,`-`),ug(),Ac(1322,`td`,24)(1323,`em`)(1324,`strong`),vN(1325,`(opcional)`),ug()(),Ac(1326,`p`),vN(1327,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),ug()()(),Ac(1328,`tr`,16)(1329,`td`,17)(1330,`div`,25)(1331,`span`,26),vN(1332,` p-show-required`),Kc(1333,`br`),ug()()(),Ac(1334,`td`,21)(1335,`code`,29),vN(1336,`boolean`),ug()(),Ac(1337,`td`,23),vN(1338,`-`),ug(),Ac(1339,`td`,24)(1340,`p`),vN(1341,`Define se a indicação de campo obrigatório seré exibida.`),ug(),Ac(1342,`blockquote`)(1343,`p`),vN(1344,`Não será exibida a indicação se:`),ug()(),Ac(1345,`ul`)(1346,`li`),vN(1347,`Não possuir `),Ac(1348,`code`),vN(1349,`p-help`),ug(),vN(1350,` e/ou `),Ac(1351,`code`),vN(1352,`p-label`),ug(),vN(1353,`.`),ug()()()(),Ac(1354,`tr`,16)(1355,`td`,17)(1356,`div`,25)(1357,`span`,26),vN(1358,` p-size`),Kc(1359,`br`),ug()()(),Ac(1360,`td`,21)(1361,`code`,27),vN(1362,`string`),ug()(),Ac(1363,`td`,23)(1364,`p`)(1365,`code`),vN(1366,`medium`),ug()()(),Ac(1367,`td`,24)(1368,`em`)(1369,`strong`),vN(1370,`(opcional)`),ug()(),Ac(1371,`p`),vN(1372,`Define o tamanho do componente:`),ug(),Ac(1373,`ul`)(1374,`li`)(1375,`code`),vN(1376,`small`),ug(),vN(1377,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1378,`li`)(1379,`code`),vN(1380,`medium`),ug(),vN(1381,`: altura do input como 44px.`),ug()(),Ac(1382,`blockquote`)(1383,`p`),vN(1384,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1385,`code`),vN(1386,`medium`),ug(),vN(1387,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1388,`a`,40),vN(1389,`po-theme`),ug(),vN(1390,`.`),ug()()()(),Ac(1391,`tr`,16)(1392,`td`,17)(1393,`div`,25)(1394,`span`,26),vN(1395,` p-spacing`),Kc(1396,`br`),ug()()(),Ac(1397,`td`,21)(1398,`code`,27),vN(1399,`string`),ug()(),Ac(1400,`td`,23)(1401,`p`)(1402,`code`),vN(1403,`medium`),ug()()(),Ac(1404,`td`,24)(1405,`em`)(1406,`strong`),vN(1407,`(opcional)`),ug()(),Ac(1408,`p`),vN(1409,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Ac(1410,`strong`),vN(1411,`PoTableColumnSpacing`),ug(),vN(1412,`.`),ug(),Ac(1413,`blockquote`)(1414,`p`),vN(1415,`Em nível de acessibilidade `),Ac(1416,`strong`),vN(1417,`AA`),ug(),vN(1418,`, caso o valor de `),Ac(1419,`code`),vN(1420,`p-spacing`),ug(),vN(1421,` não seja definido, o valor padrão será `),Ac(1422,`code`),vN(1423,`extraSmall`),ug(),vN(1424,`
nos seguintes cen\xE1rios:`),ug(),Ac(1425,`ul`)(1426,`li`),vN(1427,`Quando o valor de `),Ac(1428,`code`),vN(1429,`p-size`),ug(),vN(1430,` for `),Ac(1431,`code`),vN(1432,`small`),ug(),vN(1433,`;`),ug(),Ac(1434,`li`),vN(1435,`Quando o valor padrão dos componentes for configurado como `),Ac(1436,`code`),vN(1437,`small`),ug(),vN(1438,` no
`),Ac(1439,`a`,40),vN(1440,`serviço de tema`),ug(),vN(1441,`.`),ug()()()()(),Ac(1442,`tr`,16)(1443,`td`,17)(1444,`div`,25)(1445,`span`,26),vN(1446,` p-text-wrap`),Kc(1447,`br`),ug()()(),Ac(1448,`td`,21)(1449,`code`,29),vN(1450,`boolean`),ug()(),Ac(1451,`td`,23)(1452,`p`)(1453,`code`),vN(1454,`false`),ug()()(),Ac(1455,`td`,24)(1456,`em`)(1457,`strong`),vN(1458,`(opcional)`),ug()(),Ac(1459,`p`),vN(1460,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug(),Ac(1461,`p`),vN(1462,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),ug(),Ac(1463,`blockquote`)(1464,`p`),vN(1465,`Incompatível com `),Ac(1466,`code`),vN(1467,`virtual-scroll`),ug(),vN(1468,`, que requer altura fixa nas linhas.`),ug()()()(),Ac(1469,`tr`,16)(1470,`td`,17)(1471,`div`,25)(1472,`span`,26),vN(1473,` p-virtual-scroll`),Kc(1474,`br`),ug()()(),Ac(1475,`td`,21)(1476,`code`,29),vN(1477,`boolean`),ug()(),Ac(1478,`td`,23)(1479,`p`)(1480,`code`),vN(1481,`true`),ug()()(),Ac(1482,`td`,24)(1483,`em`)(1484,`strong`),vN(1485,`(opcional)`),ug()(),Ac(1486,`p`),vN(1487,`Habilita o `),Ac(1488,`code`),vN(1489,`virtual-scroll`),ug(),vN(1490,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Ac(1491,`code`),vN(1492,`virtual-scroll`),ug(),vN(1493,` será ativado automaticamente.`),ug(),Ac(1494,`blockquote`)(1495,`p`),vN(1496,`Incompatível com `),Ac(1497,`code`),vN(1498,`p-text-wrap`),ug(),vN(1499,` e `),Ac(1500,`code`),vN(1501,`master-detail`),ug(),vN(1502,`, pois o `),Ac(1503,`code`),vN(1504,`virtual-scroll`),ug(),vN(1505,` exige altura fixa nas linhas.`),ug()()()()(),Ac(1506,`h3`,12),vN(1507,`Métodos`),ug(),Ac(1508,`table`,41)(1509,`tr`,16)(1510,`th`,42)(1511,`div`,25)(1512,`h4`)(1513,`span`,26),vN(1514,` focus `),ug()()()()(),Ac(1515,`tr`,24)(1516,`td`,24)(1517,`p`),vN(1518,`Função que atribui foco ao componente.`),ug(),Ac(1519,`p`),vN(1520,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1521,`pre`)(1522,`code`),vN(1523,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),ug()()()()(),Kc(1524,`br`),Ac(1525,`table`,41)(1526,`tr`,16)(1527,`th`,42)(1528,`div`,25)(1529,`h4`)(1530,`span`,26),vN(1531,` showAdditionalHelp `),ug()()()()(),Ac(1532,`tr`,24)(1533,`td`,24)(1534,`p`),vN(1535,`Método que exibe `),Ac(1536,`code`),vN(1537,`p-helper`),ug(),vN(1538,` ou executa a ação definida em `),Ac(1539,`code`),vN(1540,`p-helper{eventOnClick}`),ug(),vN(1541,` ou em `),Ac(1542,`code`),vN(1543,`p-additionalHelp`),ug(),vN(1544,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1545,`code`),vN(1546,`p-keydown`),ug(),vN(1547,`.`),ug(),Ac(1548,`blockquote`)(1549,`p`),vN(1550,`Exibe ou oculta o conteúdo do componente `),Ac(1551,`code`),vN(1552,`po-helper`),ug(),vN(1553,` quando o componente estiver com foco.`),ug()(),Ac(1554,`pre`)(1555,`code`),vN(1556,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),ug()(),Ac(1557,`pre`)(1558,`code`),vN(1559,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1560,`br`),Ac(1561,`h3`),vN(1562,`Interfaces`),ug(),Ac(1563,`h4`,43)(1564,`code`,5),vN(1565,`PoLookupAdvancedFilter`),ug()(),Ac(1566,`div`,2)(1567,`p`),vN(1568,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente. `),ug()(),Ac(1569,`h4`,12),vN(1570,`Propriedades`),ug(),Ac(1571,`table`,13)(1572,`tr`,14)(1573,`th`,15),vN(1574,`Nome`),ug(),Ac(1575,`th`,15),vN(1576,`Tipo`),ug(),Ac(1577,`th`,15),vN(1578,`Descrição`),ug()(),Ac(1579,`tr`,16)(1580,`td`,17)(1581,`div`,25)(1582,`span`,26),vN(1583,` additionalHelp`),Kc(1584,`br`),ug()()(),Ac(1585,`td`,21)(1586,`code`,44),vN(1587,`Function`),ug()(),Ac(1588,`td`,24)(1589,`em`)(1590,`strong`),vN(1591,`(opcional)`),ug()(),Ac(1592,`p`),vN(1593,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(1594,`blockquote`)(1595,`p`),vN(1596,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(1597,`tr`,16)(1598,`td`,17)(1599,`div`,25)(1600,`span`,26),vN(1601,` additionalHelpTooltip`),Kc(1602,`br`),ug()()(),Ac(1603,`td`,21)(1604,`code`,27),vN(1605,`string`),ug()(),Ac(1606,`td`,24)(1607,`em`)(1608,`strong`),vN(1609,`(opcional)`),ug()(),Ac(1610,`p`),vN(1611,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(1612,`code`),vN(1613,`po-helper`),ug(),vN(1614,`.
`),Ac(1615,`strong`),vN(1616,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(1617,`blockquote`)(1618,`p`),vN(1619,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(1620,`tr`,16)(1621,`td`,17)(1622,`div`,25)(1623,`span`,26),vN(1624,` advancedFilters`),Kc(1625,`br`),ug()()(),Ac(1626,`td`,21)(1627,`code`,28),vN(1628,`Array<PoLookupAdvancedFilter>`),ug()(),Ac(1629,`td`,24)(1630,`em`)(1631,`strong`),vN(1632,`(opcional)`),ug()(),Ac(1633,`p`),vN(1634,`Lista de objetos dos campos que serão criados na busca avançada.`),ug(),Ac(1635,`blockquote`)(1636,`p`),vN(1637,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ug()(),Ac(1638,`p`),vN(1639,`Exemplo de URL com busca avançada:`),ug(),Ac(1640,`p`)(1641,`code`),vN(1642,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),ug()(),Ac(1643,`p`),vN(1644,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),ug(),Ac(1645,`p`)(1646,`code`),vN(1647,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),ug()()()(),Ac(1648,`tr`,16)(1649,`td`,17)(1650,`div`,25)(1651,`span`,26),vN(1652,` appendBox`),Kc(1653,`br`),ug()()(),Ac(1654,`td`,21)(1655,`code`,29),vN(1656,`boolean`),ug()(),Ac(1657,`td`,24)(1658,`em`)(1659,`strong`),vN(1660,`(opcional)`),ug()(),Ac(1661,`p`),vN(1662,`Define que o `),Ac(1663,`code`),vN(1664,`listbox`),ug(),vN(1665,` e/ou popover (`),Ac(1666,`code`),vN(1667,`p-helper`),ug(),vN(1668,` e/ou `),Ac(1669,`code`),vN(1670,`p-error-limit`),ug(),vN(1671,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(1672,`blockquote`)(1673,`p`),vN(1674,`Quando utilizado com `),Ac(1675,`code`),vN(1676,`p-helper`),ug(),vN(1677,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(1678,`tr`,16)(1679,`td`,17)(1680,`div`,25)(1681,`span`,26),vN(1682,` autoHeight`),Kc(1683,`br`),ug()()(),Ac(1684,`td`,21)(1685,`code`,29),vN(1686,`boolean`),ug()(),Ac(1687,`td`,24)(1688,`em`)(1689,`strong`),vN(1690,`(opcional)`),ug()(),Ac(1691,`p`),vN(1692,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),ug(),Ac(1693,`p`)(1694,`strong`),vN(1695,`Componentes compatíveis:`),ug(),Ac(1696,`code`),vN(1697,`po-multiselect`),ug(),vN(1698,`, `),Ac(1699,`code`),vN(1700,`po-lookup`),ug(),vN(1701,`.`),ug()()(),Ac(1702,`tr`,16)(1703,`td`,17)(1704,`div`,25)(1705,`span`,26),vN(1706,` autoUpload`),Kc(1707,`br`),ug()()(),Ac(1708,`td`,21)(1709,`code`,29),vN(1710,`boolean`),ug()(),Ac(1711,`td`,24)(1712,`em`)(1713,`strong`),vN(1714,`(opcional)`),ug()(),Ac(1715,`p`),vN(1716,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ug(),Ac(1717,`p`)(1718,`strong`),vN(1719,`Componente compatível`),ug(),vN(1720,`: `),Ac(1721,`code`),vN(1722,`po-upload`),ug()()()(),Ac(1723,`tr`,16)(1724,`td`,17)(1725,`div`,25)(1726,`span`,26),vN(1727,` booleanFalse`),Kc(1728,`br`),ug()()(),Ac(1729,`td`,21)(1730,`code`,27),vN(1731,`string`),ug()(),Ac(1732,`td`,24)(1733,`em`)(1734,`strong`),vN(1735,`(opcional)`),ug()(),Ac(1736,`p`),vN(1737,`Texto exibido quando o valor do componente for `),Ac(1738,`em`),vN(1739,`false`),ug(),vN(1740,`.`),ug()()(),Ac(1741,`tr`,16)(1742,`td`,17)(1743,`div`,25)(1744,`span`,26),vN(1745,` booleanTrue`),Kc(1746,`br`),ug()()(),Ac(1747,`td`,21)(1748,`code`,27),vN(1749,`string`),ug()(),Ac(1750,`td`,24)(1751,`em`)(1752,`strong`),vN(1753,`(opcional)`),ug()(),Ac(1754,`p`),vN(1755,`Texto exibido quando o valor do componente for `),Ac(1756,`em`),vN(1757,`true`),ug(),vN(1758,`.`),ug()()(),Ac(1759,`tr`,16)(1760,`td`,17)(1761,`div`,25)(1762,`span`,26),vN(1763,` changeOnEnter`),Kc(1764,`br`),ug()()(),Ac(1765,`td`,21)(1766,`code`,29),vN(1767,`boolean`),ug()(),Ac(1768,`td`,24)(1769,`em`)(1770,`strong`),vN(1771,`(opcional)`),ug()(),Ac(1772,`p`),vN(1773,`Indica que o evento `),Ac(1774,`code`),vN(1775,`p-change`),ug(),vN(1776,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Ac(1777,`code`),vN(1778,`po-combo`),ug(),vN(1779,`.`),ug()()(),Ac(1780,`tr`,16)(1781,`td`,17)(1782,`div`,25)(1783,`span`,26),vN(1784,` changeVisibleColumns`),Kc(1785,`br`),ug()()(),Ac(1786,`td`,21)(1787,`code`,44),vN(1788,`Function`),ug()(),Ac(1789,`td`,24)(1790,`em`)(1791,`strong`),vN(1792,`(opcional)`),ug()(),Ac(1793,`p`),vN(1794,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(1795,`p`),vN(1796,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(1797,`p`)(1798,`strong`),vN(1799,`Componente compatível`),ug(),vN(1800,`: `),Ac(1801,`code`),vN(1802,`po-lookup`),ug()()()(),Ac(1803,`tr`,16)(1804,`td`,17)(1805,`div`,25)(1806,`span`,26),vN(1807,` clean`),Kc(1808,`br`),ug()()(),Ac(1809,`td`,21)(1810,`code`,29),vN(1811,`boolean`),ug()(),Ac(1812,`td`,24)(1813,`em`)(1814,`strong`),vN(1815,`(opcional)`),ug()(),Ac(1816,`p`),vN(1817,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug(),Ac(1818,`p`)(1819,`strong`),vN(1820,`Componentes compatíveis:`),ug(),Ac(1821,`code`),vN(1822,`po-datepicker`),ug(),vN(1823,`, `),Ac(1824,`code`),vN(1825,`po-datepicker-range`),ug(),vN(1826,`, `),Ac(1827,`code`),vN(1828,`po-input`),ug(),vN(1829,`, `),Ac(1830,`code`),vN(1831,`po-number`),ug(),vN(1832,`, `),Ac(1833,`code`),vN(1834,`po-decimal`),ug(),vN(1835,`,
`),Ac(1836,`code`),vN(1837,`po-combo`),ug(),vN(1838,`, `),Ac(1839,`code`),vN(1840,`po-lookup`),ug(),vN(1841,`, `),Ac(1842,`code`),vN(1843,`po-password`),ug(),vN(1844,`, `),Ac(1845,`code`),vN(1846,`po-timepicker`),ug(),vN(1847,`.`),ug()()(),Ac(1848,`tr`,16)(1849,`td`,17)(1850,`div`,25)(1851,`span`,26),vN(1852,` columnRestoreManager`),Kc(1853,`br`),ug()()(),Ac(1854,`td`,21)(1855,`code`,44),vN(1856,`Function`),ug()(),Ac(1857,`td`,24)(1858,`em`)(1859,`strong`),vN(1860,`(opcional)`),ug()(),Ac(1861,`p`),vN(1862,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(1863,`p`),vN(1864,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(1865,`p`)(1866,`strong`),vN(1867,`Componente compatível`),ug(),vN(1868,`: `),Ac(1869,`code`),vN(1870,`po-lookup`),ug()()()(),Ac(1871,`tr`,16)(1872,`td`,17)(1873,`div`,25)(1874,`span`,26),vN(1875,` columns`),Kc(1876,`br`),ug()()(),Ac(1877,`td`,21)(1878,`code`,30),vN(1879,`Array<PoLookupColumn> `),ug(),Ac(1880,`code`,45),vN(1881,` number`),ug()(),Ac(1882,`td`,24)(1883,`em`)(1884,`strong`),vN(1885,`(opcional)`),ug()(),Ac(1886,`p`),vN(1887,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Ac(1888,`code`),vN(1889,`searchService`),ug(),vN(1890,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Ac(1891,`a`,46)(1892,`code`),vN(1893,`PoLookupColumn`),ug()(),vN(1894,`.`),ug(),Ac(1895,`blockquote`)(1896,`p`),vN(1897,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Ac(1898,`em`),vN(1899,`label`),ug(),vN(1900,` e `),Ac(1901,`em`),vN(1902,`value`),ug(),vN(1903,` para valores
de tela e do model respectivamente.`),ug()(),Ac(1904,`p`)(1905,`strong`),vN(1906,`Componentes compatíveis:`),ug(),Ac(1907,`code`),vN(1908,`po-radio-group`),ug(),vN(1909,`, `),Ac(1910,`code`),vN(1911,`po-lookup`),ug(),vN(1912,`, `),Ac(1913,`code`),vN(1914,`po-checkbox-group`),ug(),vN(1915,`.`),ug()()(),Ac(1916,`tr`,16)(1917,`td`,17)(1918,`div`,25)(1919,`span`,26),vN(1920,` compactLabel`),Kc(1921,`br`),ug()()(),Ac(1922,`td`,21)(1923,`code`,29),vN(1924,`boolean`),ug()(),Ac(1925,`td`,24)(1926,`em`)(1927,`strong`),vN(1928,`(opcional)`),ug()(),Ac(1929,`p`),vN(1930,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(1931,`p`),vN(1932,`Quando habilitado (`),Ac(1933,`code`),vN(1934,`true`),ug(),vN(1935,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(1936,`ul`)(1937,`li`)(1938,`code`),vN(1939,`po-label`),ug()(),Ac(1940,`li`)(1941,`code`),vN(1942,`p-requirement (showRequired)`),ug()(),Ac(1943,`li`)(1944,`code`),vN(1945,`po-helper`),ug()()(),Ac(1946,`p`),vN(1947,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(1948,`p`),vN(1949,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(1950,`ul`)(1951,`li`)(1952,`code`),vN(1953,`--field-container-title-justify`),ug()(),Ac(1954,`li`)(1955,`code`),vN(1956,`--field-container-title-flex`),ug()()(),Ac(1957,`p`),vN(1958,`Exemplo:`),ug(),Ac(1959,`pre`)(1960,`code`),vN(1961,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(1962,`p`),vN(1963,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(1964,`tr`,16)(1965,`td`,17)(1966,`div`,25)(1967,`span`,26),vN(1968,` container`),Kc(1969,`br`),ug()()(),Ac(1970,`td`,21)(1971,`code`,27),vN(1972,`string`),ug()(),Ac(1973,`td`,24)(1974,`em`)(1975,`strong`),vN(1976,`(opcional)`),ug()(),Ac(1977,`p`),vN(1978,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ug(),Ac(1979,`p`),vN(1980,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ug()()(),Ac(1981,`tr`,16)(1982,`td`,17)(1983,`div`,25)(1984,`span`,26),vN(1985,` customAction`),Kc(1986,`br`),ug()()(),Ac(1987,`td`,21)(1988,`code`,47),vN(1989,`PoProgressAction`),ug()(),Ac(1990,`td`,24)(1991,`em`)(1992,`strong`),vN(1993,`(opcional)`),ug()(),Ac(1994,`p`),vN(1995,`Define uma ação personalizada no componente `),Ac(1996,`code`),vN(1997,`po-upload`),ug(),vN(1998,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ug(),Ac(1999,`p`)(2e3,`strong`),vN(2001,`Componente compatível`),ug(),vN(2002,`: `),Ac(2003,`code`),vN(2004,`po-upload`),ug(),vN(2005,`,`),ug(),Ac(2006,`p`)(2007,`strong`),vN(2008,`Exemplo de configuração`),ug(),vN(2009,`:`),ug(),Ac(2010,`pre`)(2011,`code`,48),vN(2012,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ug()()()(),Ac(2013,`tr`,16)(2014,`td`,17)(2015,`div`,25)(2016,`span`,26),vN(2017,` customActionClick`),Kc(2018,`br`),ug()()(),Ac(2019,`td`,21)(2020,`code`,49),vN(2021,`(file: PoUploadFile) => void`),ug()(),Ac(2022,`td`,24)(2023,`em`)(2024,`strong`),vN(2025,`(opcional)`),ug()(),Ac(2026,`p`),vN(2027,`Evento emitido ao clicar na ação personalizada configurada no `),Ac(2028,`code`),vN(2029,`p-custom-action`),ug(),vN(2030,`.`),ug(),Ac(2031,`p`)(2032,`strong`),vN(2033,`Componente compatível`),ug(),vN(2034,`: `),Ac(2035,`code`),vN(2036,`po-upload`),ug(),vN(2037,`,`),ug(),Ac(2038,`p`),vN(2039,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ug(),Ac(2040,`p`)(2041,`strong`),vN(2042,`Parâmetro do evento`),ug(),vN(2043,`:`),ug(),Ac(2044,`ul`)(2045,`li`)(2046,`code`),vN(2047,`file`),ug(),vN(2048,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Ac(2049,`code`),vN(2050,`PoUploadFile`),ug(),vN(2051,` e contém informações sobre o arquivo, como nome, status e progresso.`),ug()(),Ac(2052,`p`)(2053,`strong`),vN(2054,`Exemplo de uso`),ug(),vN(2055,`:`),ug(),Ac(2056,`pre`)(2057,`code`,48),vN(2058,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ug()()()(),Ac(2059,`tr`,16)(2060,`td`,17)(2061,`div`,25)(2062,`span`,26),vN(2063,` debounceTime`),Kc(2064,`br`),ug()()(),Ac(2065,`td`,21)(2066,`code`,45),vN(2067,`number`),ug()(),Ac(2068,`td`,24)(2069,`em`)(2070,`strong`),vN(2071,`(opcional)`),ug()(),Ac(2072,`p`),vN(2073,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Ac(2074,`code`),vN(2075,`p-filter-service`),ug(),vN(2076,`).`),ug(),Ac(2077,`p`)(2078,`strong`),vN(2079,`Componentes compatíveis:`),ug(),Ac(2080,`code`),vN(2081,`po-combo`),ug(),vN(2082,`, `),Ac(2083,`code`),vN(2084,`po-multiselect`),ug(),vN(2085,`.`),ug()()(),Ac(2086,`tr`,16)(2087,`td`,17)(2088,`div`,25)(2089,`span`,26),vN(2090,` decimalsLength`),Kc(2091,`br`),ug()()(),Ac(2092,`td`,21)(2093,`code`,45),vN(2094,`number`),ug()(),Ac(2095,`td`,24)(2096,`em`)(2097,`strong`),vN(2098,`(opcional)`),ug()(),Ac(2099,`p`),vN(2100,`Quantidade máxima de casas decimais.`),ug(),Ac(2101,`blockquote`)(2102,`p`),vN(2103,`Esta propriedade só pode ser utilizada quando o `),Ac(2104,`code`),vN(2105,`type`),ug(),vN(2106,` for `),Ac(2107,`em`),vN(2108,`currency`),ug(),vN(2109,` ou `),Ac(2110,`em`),vN(2111,`decimal`),ug(),vN(2112,`.`),ug()(),Ac(2113,`blockquote`)(2114,`p`),vN(2115,`Quando utilizado com `),Ac(2116,`code`),vN(2117,`displayFormat`),ug(),vN(2118,`, será respeitado o valor `),Ac(2119,`strong`),vN(2120,`mais restritivo`),ug(),vN(2121,` entre esta propriedade e o número de casas decimais definido no formato.`),ug()()()(),Ac(2122,`tr`,16)(2123,`td`,17)(2124,`div`,25)(2125,`span`,26),vN(2126,` directory`),Kc(2127,`br`),ug()()(),Ac(2128,`td`,21)(2129,`code`,29),vN(2130,`boolean`),ug()(),Ac(2131,`td`,24)(2132,`em`)(2133,`strong`),vN(2134,`(opcional)`),ug()(),Ac(2135,`p`),vN(2136,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ug(),Ac(2137,`blockquote`)(2138,`p`),vN(2139,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ug()(),Ac(2140,`blockquote`)(2141,`p`),vN(2142,`Definição não suportada pelo browser `),Ac(2143,`strong`),vN(2144,`Internet Explorer`),ug(),vN(2145,`, todavia será possível a seleção de arquivos padrão.`),ug()(),Ac(2146,`p`)(2147,`strong`),vN(2148,`Componente compatível`),ug(),vN(2149,`: `),Ac(2150,`code`),vN(2151,`po-upload`),ug()()()(),Ac(2152,`tr`,16)(2153,`td`,17)(2154,`div`,25)(2155,`span`,26),vN(2156,` disabled`),Kc(2157,`br`),ug()()(),Ac(2158,`td`,21)(2159,`code`,29),vN(2160,`boolean`),ug()(),Ac(2161,`td`,24)(2162,`em`)(2163,`strong`),vN(2164,`(opcional)`),ug()(),Ac(2165,`p`),vN(2166,`Desabilita o campo caso informar o valor `),Ac(2167,`em`),vN(2168,`true`),ug(),vN(2169,`.`),ug()()(),Ac(2170,`tr`,16)(2171,`td`,17)(2172,`div`,25)(2173,`span`,26),vN(2174,` disabledInitFilter`),Kc(2175,`br`),ug()()(),Ac(2176,`td`,21)(2177,`code`,29),vN(2178,`boolean`),ug()(),Ac(2179,`td`,24)(2180,`em`)(2181,`strong`),vN(2182,`(opcional)`),ug()(),Ac(2183,`p`),vN(2184,`Desabilita o filtro inicial no serviço do `),Ac(2185,`code`),vN(2186,`po-combo`),ug(),vN(2187,`, que é executado no primeiro clique no campo.`),ug()()(),Ac(2188,`tr`,16)(2189,`td`,17)(2190,`div`,25)(2191,`span`,26),vN(2192,` disabledTabFilter`),Kc(2193,`br`),ug()()(),Ac(2194,`td`,21)(2195,`code`,29),vN(2196,`boolean`),ug()(),Ac(2197,`td`,24)(2198,`em`)(2199,`strong`),vN(2200,`(opcional)`),ug()(),Ac(2201,`p`),vN(2202,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Ac(2203,`code`),vN(2204,`po-combo`),ug(),vN(2205,`.`),ug()()(),Ac(2206,`tr`,16)(2207,`td`,17)(2208,`div`,25)(2209,`span`,26),vN(2210,` displayFormat`),Kc(2211,`br`),ug()()(),Ac(2212,`td`,21)(2213,`code`,27),vN(2214,`string`),ug()(),Ac(2215,`td`,24)(2216,`em`)(2217,`strong`),vN(2218,`(opcional)`),ug()(),Ac(2219,`p`),vN(2220,`Define uma máscara de formatação numérica avançada para o campo.`),ug(),Ac(2221,`p`),vN(2222,`Simbologia suportada:`),ug(),Ac(2223,`ul`)(2224,`li`)(2225,`code`),vN(2226,`9`),ug(),vN(2227,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ug(),Ac(2228,`li`)(2229,`code`),vN(2230,`>`),ug(),vN(2231,`: Supressão de zero à esquerda (dígito não obrigatório);`),ug(),Ac(2232,`li`)(2233,`code`),vN(2234,`<`),ug(),vN(2235,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ug(),Ac(2236,`li`)(2237,`code`),vN(2238,`.`),ug(),vN(2239,`: Separador decimal (convertido conforme locale);`),ug(),Ac(2240,`li`)(2241,`code`),vN(2242,`,`),ug(),vN(2243,`: Separador de milhar/grupo (convertido conforme locale);`),ug(),Ac(2244,`li`)(2245,`code`),vN(2246,`-`),ug(),vN(2247,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ug()(),Ac(2248,`blockquote`)(2249,`p`),vN(2250,`Quando utilizado com `),Ac(2251,`code`),vN(2252,`decimalsLength`),ug(),vN(2253,` ou `),Ac(2254,`code`),vN(2255,`thousandMaxlength`),ug(),vN(2256,`, será respeitado o valor `),Ac(2257,`strong`),vN(2258,`mais restritivo`),ug(),vN(2259,` entre a propriedade e o formato.`),ug()(),Ac(2260,`p`),vN(2261,`Exemplos: `),Ac(2262,`code`),vN(2263,`'>>>,>>>,>>9.99'`),ug(),vN(2264,`, `),Ac(2265,`code`),vN(2266,`'->>9.99'`),ug(),vN(2267,`, `),Ac(2268,`code`),vN(2269,`'999.9'`),ug()(),Ac(2270,`blockquote`)(2271,`p`),vN(2272,`Esta propriedade só pode ser utilizada quando o `),Ac(2273,`code`),vN(2274,`type`),ug(),vN(2275,` for `),Ac(2276,`em`),vN(2277,`currency`),ug(),vN(2278,` ou `),Ac(2279,`em`),vN(2280,`decimal`),ug(),vN(2281,`.`),ug()(),Ac(2282,`p`)(2283,`strong`),vN(2284,`Componente compatível:`),ug(),Ac(2285,`code`),vN(2286,`po-decimal`),ug(),vN(2287,`.`),ug()()(),Ac(2288,`tr`,16)(2289,`td`,17)(2290,`div`,25)(2291,`span`,26),vN(2292,` divider`),Kc(2293,`br`),ug()()(),Ac(2294,`td`,21)(2295,`code`,27),vN(2296,`string`),ug()(),Ac(2297,`td`,24)(2298,`em`)(2299,`strong`),vN(2300,`(opcional)`),ug()(),Ac(2301,`p`),vN(2302,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ug()()(),Ac(2303,`tr`,16)(2304,`td`,17)(2305,`div`,25)(2306,`span`,26),vN(2307,` dragDrop`),Kc(2308,`br`),ug()()(),Ac(2309,`td`,21)(2310,`code`,29),vN(2311,`boolean`),ug()(),Ac(2312,`td`,24)(2313,`em`)(2314,`strong`),vN(2315,`(opcional)`),ug()(),Ac(2316,`p`),vN(2317,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ug(),Ac(2318,`blockquote`)(2319,`p`),vN(2320,`Recomendamos utilizar apenas um `),Ac(2321,`code`),vN(2322,`po-upload`),ug(),vN(2323,` com esta funcionalidade por tela.`),ug()(),Ac(2324,`p`)(2325,`strong`),vN(2326,`Componente compatível`),ug(),vN(2327,`: `),Ac(2328,`code`),vN(2329,`po-upload`),ug()()()(),Ac(2330,`tr`,16)(2331,`td`,17)(2332,`div`,25)(2333,`span`,26),vN(2334,` dragDropHeight`),Kc(2335,`br`),ug()()(),Ac(2336,`td`,21)(2337,`code`,45),vN(2338,`number`),ug()(),Ac(2339,`td`,24)(2340,`em`)(2341,`strong`),vN(2342,`(opcional)`),ug()(),Ac(2343,`p`),vN(2344,`Define em `),Ac(2345,`em`),vN(2346,`pixels`),ug(),vN(2347,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ac(2348,`code`),vN(2349,`160px`),ug(),vN(2350,`.`),ug(),Ac(2351,`blockquote`)(2352,`p`),vN(2353,`Esta propriedade funciona somente se a propriedade `),Ac(2354,`code`),vN(2355,`p-drag-drop`),ug(),vN(2356,` estiver habilitada.`),ug()(),Ac(2357,`p`)(2358,`strong`),vN(2359,`Componente compatível`),ug(),vN(2360,`: `),Ac(2361,`code`),vN(2362,`po-upload`),ug()()()(),Ac(2363,`tr`,16)(2364,`td`,17)(2365,`div`,25)(2366,`span`,26),vN(2367,` errorAsyncFunction`),Kc(2368,`br`),ug()()(),Ac(2369,`td`,21)(2370,`code`,50),vN(2371,`(value) => Observable<boolean>`),ug()(),Ac(2372,`td`,24)(2373,`em`)(2374,`strong`),vN(2375,`(opcional)`),ug()(),Ac(2376,`p`),vN(2377,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(2378,`code`),vN(2379,`change`),ug(),vN(2380,` ou `),Ac(2381,`code`),vN(2382,`change-model`),ug(),vN(2383,`, dependendo do valor da propriedade `),Ac(2384,`code`),vN(2385,`triggerMode`),ug(),vN(2386,`.`),ug(),Ac(2387,`blockquote`)(2388,`p`),vN(2389,`Retorna `),Ac(2390,`code`),vN(2391,`Observable com o valor true`),ug(),vN(2392,` para sinalizar o erro `),Ac(2393,`code`),vN(2394,`false`),ug(),vN(2395,` para indicar que não há erro.`),ug()(),Ac(2396,`p`)(2397,`strong`),vN(2398,`Componente compatível`),ug(),vN(2399,`: `),Ac(2400,`code`),vN(2401,`po-datepicker`),ug()()()(),Ac(2402,`tr`,16)(2403,`td`,17)(2404,`div`,25)(2405,`span`,26),vN(2406,` errorAsyncProperties`),Kc(2407,`br`),ug()()(),Ac(2408,`td`,21)(2409,`code`,51),vN(2410,`ErrorAsyncProperties`),ug()(),Ac(2411,`td`,24)(2412,`em`)(2413,`strong`),vN(2414,`(opcional)`),ug()(),Ac(2415,`p`),vN(2416,`Realiza alguma validação customizada assíncrona no componente.`),ug(),Ac(2417,`p`)(2418,`strong`),vN(2419,`Componentes compatíveis:`),ug(),Ac(2420,`code`),vN(2421,`po-input`),ug(),vN(2422,`, `),Ac(2423,`code`),vN(2424,`po-number`),ug(),vN(2425,`, `),Ac(2426,`code`),vN(2427,`po-decimal`),ug(),vN(2428,`, `),Ac(2429,`code`),vN(2430,`po-password`),ug(),vN(2431,`.`),ug()()(),Ac(2432,`tr`,16)(2433,`td`,17)(2434,`div`,25)(2435,`span`,26),vN(2436,` errorLimit`),Kc(2437,`br`),ug()()(),Ac(2438,`td`,21)(2439,`code`,29),vN(2440,`boolean`),ug()(),Ac(2441,`td`,24)(2442,`em`)(2443,`strong`),vN(2444,`(opcional)`),ug()(),Ac(2445,`p`),vN(2446,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(2447,`blockquote`)(2448,`p`),vN(2449,`Caso essa propriedade seja definida como `),Ac(2450,`code`),vN(2451,`true`),ug(),vN(2452,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()(),Ac(2453,`p`)(2454,`strong`),vN(2455,`Componentes compatíveis:`),ug(),Ac(2456,`code`),vN(2457,`po-checkbox-group`),ug(),vN(2458,`, `),Ac(2459,`code`),vN(2460,`po-combo`),ug(),vN(2461,`, `),Ac(2462,`code`),vN(2463,`po-datepicker`),ug(),vN(2464,`, `),Ac(2465,`code`),vN(2466,`po-datepicker-range`),ug(),vN(2467,`, `),Ac(2468,`code`),vN(2469,`po-decimal`),ug(),vN(2470,`, `),Ac(2471,`code`),vN(2472,`po-input`),ug(),vN(2473,`, `),Ac(2474,`code`),vN(2475,`po-lookup`),ug(),vN(2476,`, `),Ac(2477,`code`),vN(2478,`po-multiselect`),ug(),vN(2479,`, `),Ac(2480,`code`),vN(2481,`po-number`),ug(),vN(2482,`, `),Ac(2483,`code`),vN(2484,`po-password`),ug(),vN(2485,`, `),Ac(2486,`code`),vN(2487,`po-radio-group`),ug(),vN(2488,`, `),Ac(2489,`code`),vN(2490,`po-select`),ug(),vN(2491,`,
`),Ac(2492,`code`),vN(2493,`po-switch`),ug(),vN(2494,`, `),Ac(2495,`code`),vN(2496,`po-textarea`),ug(),vN(2497,`, `),Ac(2498,`code`),vN(2499,`po-timepicker`),ug(),vN(2500,`.`),ug()()(),Ac(2501,`tr`,16)(2502,`td`,17)(2503,`div`,25)(2504,`span`,26),vN(2505,` errorMessage`),Kc(2506,`br`),ug()()(),Ac(2507,`td`,21)(2508,`code`,27),vN(2509,`string`),ug()(),Ac(2510,`td`,24)(2511,`em`)(2512,`strong`),vN(2513,`(opcional)`),ug()(),Ac(2514,`p`),vN(2515,`Mensagem que será apresentada quando o campo ficar inválido.`),ug(),Ac(2516,`p`),vN(2517,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),ug(),Ac(2518,`ul`)(2519,`li`),vN(2520,`pattern;`),ug(),Ac(2521,`li`),vN(2522,`minValue;`),ug(),Ac(2523,`li`),vN(2524,`maxValue;`),ug(),Ac(2525,`li`),vN(2526,`required;`),ug()(),Ac(2527,`blockquote`)(2528,`p`),vN(2529,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Ac(2530,`code`),vN(2531,`po-datepicker`),ug(),vN(2532,`, `),Ac(2533,`code`),vN(2534,`po-input`),ug(),vN(2535,`, `),Ac(2536,`code`),vN(2537,`po-number`),ug(),vN(2538,`, `),Ac(2539,`code`),vN(2540,`po-decimal`),ug(),vN(2541,`, `),Ac(2542,`code`),vN(2543,`po-password`),ug(),vN(2544,`, `),Ac(2545,`code`),vN(2546,`po-timepicker`),ug(),vN(2547,`, \xE9 necess\xE1rio que a propriedade
`),Ac(2548,`code`),vN(2549,`requiredFieldErrorMessage`),ug(),vN(2550,` esteja como `),Ac(2551,`code`),vN(2552,`true`),ug(),vN(2553,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Ac(2554,`code`),vN(2555,`po-datepicker-range`),ug(),vN(2556,`, `),Ac(2557,`code`),vN(2558,`po-select`),ug(),vN(2559,`, `),Ac(2560,`code`),vN(2561,`po-checkbox-group`),ug(),vN(2562,`, `),Ac(2563,`code`),vN(2564,`po-radio-group`),ug(),vN(2565,`, `),Ac(2566,`code`),vN(2567,`po-multiselect`),ug(),vN(2568,`, `),Ac(2569,`code`),vN(2570,`po-combo`),ug(),vN(2571,`,
`),Ac(2572,`code`),vN(2573,`po-lookup`),ug(),vN(2574,` e `),Ac(2575,`code`),vN(2576,`po-textarea`),ug(),vN(2577,` não é necessário passar a propriedade `),Ac(2578,`code`),vN(2579,`requiredFieldErrorMessage`),ug(),vN(2580,`.`),ug()(),Ac(2581,`p`)(2582,`strong`),vN(2583,`Componentes compatíveis:`),ug(),Ac(2584,`code`),vN(2585,`po-checkbox-group`),ug(),vN(2586,`, `),Ac(2587,`code`),vN(2588,`po-combo`),ug(),vN(2589,`, `),Ac(2590,`code`),vN(2591,`po-datepicker`),ug(),vN(2592,`, `),Ac(2593,`code`),vN(2594,`po-datepicker-range`),ug(),vN(2595,`, `),Ac(2596,`code`),vN(2597,`po-decimal`),ug(),vN(2598,`, `),Ac(2599,`code`),vN(2600,`po-input`),ug(),vN(2601,`, `),Ac(2602,`code`),vN(2603,`po-lookup`),ug(),vN(2604,`, `),Ac(2605,`code`),vN(2606,`po-multiselect`),ug(),vN(2607,`, `),Ac(2608,`code`),vN(2609,`po-number`),ug(),vN(2610,`, `),Ac(2611,`code`),vN(2612,`po-password`),ug(),vN(2613,`, `),Ac(2614,`code`),vN(2615,`po-radio-group`),ug(),vN(2616,`, `),Ac(2617,`code`),vN(2618,`po-select`),ug(),vN(2619,`,
`),Ac(2620,`code`),vN(2621,`po-switch`),ug(),vN(2622,`, `),Ac(2623,`code`),vN(2624,`po-textarea`),ug(),vN(2625,`, `),Ac(2626,`code`),vN(2627,`po-timepicker`),ug(),vN(2628,`.`),ug()()(),Ac(2629,`tr`,16)(2630,`td`,17)(2631,`div`,25)(2632,`span`,26),vN(2633,` fieldLabel`),Kc(2634,`br`),ug()()(),Ac(2635,`td`,21)(2636,`code`,27),vN(2637,`string`),ug()(),Ac(2638,`td`,24)(2639,`em`)(2640,`strong`),vN(2641,`(opcional)`),ug()(),Ac(2642,`p`),vN(2643,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ug(),Ac(2644,`p`),vN(2645,`O valor padrão é: `),Ac(2646,`code`),vN(2647,`label`),ug(),vN(2648,`.`),ug(),Ac(2649,`blockquote`)(2650,`p`),vN(2651,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(2652,`code`),vN(2653,`options`),ug(),vN(2654,`, `),Ac(2655,`code`),vN(2656,`optionsService`),ug(),vN(2657,` e `),Ac(2658,`code`),vN(2659,`searchService`),ug(),vN(2660,`.`),ug()()()(),Ac(2661,`tr`,16)(2662,`td`,17)(2663,`div`,25)(2664,`span`,26),vN(2665,` fieldValue`),Kc(2666,`br`),ug()()(),Ac(2667,`td`,21)(2668,`code`,27),vN(2669,`string`),ug()(),Ac(2670,`td`,24)(2671,`em`)(2672,`strong`),vN(2673,`(opcional)`),ug()(),Ac(2674,`p`),vN(2675,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ug(),Ac(2676,`p`),vN(2677,`O valor padrão é: `),Ac(2678,`code`),vN(2679,`value`),ug(),vN(2680,`.`),ug(),Ac(2681,`blockquote`)(2682,`p`),vN(2683,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(2684,`code`),vN(2685,`options`),ug(),vN(2686,`, `),Ac(2687,`code`),vN(2688,`optionsService`),ug(),vN(2689,` e `),Ac(2690,`code`),vN(2691,`searchService`),ug(),vN(2692,`.`),ug()()()(),Ac(2693,`tr`,16)(2694,`td`,17)(2695,`div`,25)(2696,`span`,26),vN(2697,` filterMinlength`),Kc(2698,`br`),ug()()(),Ac(2699,`td`,21)(2700,`code`,45),vN(2701,`number`),ug()(),Ac(2702,`td`,24)(2703,`em`)(2704,`strong`),vN(2705,`(opcional)`),ug()(),Ac(2706,`p`),vN(2707,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Ac(2708,`code`),vN(2709,`po-combo`),ug(),vN(2710,`.`),ug()()(),Ac(2711,`tr`,16)(2712,`td`,17)(2713,`div`,25)(2714,`span`,26),vN(2715,` filterMode`),Kc(2716,`br`),ug()()(),Ac(2717,`td`,21)(2718,`code`,52),vN(2719,`PoMultiselectFilterMode`),ug()(),Ac(2720,`td`,24)(2721,`em`)(2722,`strong`),vN(2723,`(opcional)`),ug()(),Ac(2724,`p`),vN(2725,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ac(2726,`code`),vN(2727,`startsWith`),ug(),vN(2728,`, `),Ac(2729,`code`),vN(2730,`contains`),ug(),vN(2731,` ou `),Ac(2732,`code`),vN(2733,`endsWith`),ug(),vN(2734,`.`),ug(),Ac(2735,`blockquote`)(2736,`p`),vN(2737,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),ug()(),Ac(2738,`p`)(2739,`strong`),vN(2740,`Componente compatível:`),ug(),Ac(2741,`code`),vN(2742,`po-multiselect`),ug(),vN(2743,`.`),ug()()(),Ac(2744,`tr`,16)(2745,`td`,17)(2746,`div`,25)(2747,`span`,26),vN(2748,` forceBooleanComponentType`),Kc(2749,`br`),ug()()(),Ac(2750,`td`,21)(2751,`code`,53),vN(2752,`ForceBooleanComponentEnum`),ug()(),Ac(2753,`td`,24)(2754,`em`)(2755,`strong`),vN(2756,`(opcional)`),ug()(),Ac(2757,`p`),vN(2758,`Valores aceitos:`),ug(),Ac(2759,`ul`)(2760,`li`),vN(2761,`ForceBooleanComponentEnum.switch`),ug(),Ac(2762,`li`),vN(2763,`ForceBooleanComponentEnum.checkbox`),ug()()()(),Ac(2764,`tr`,16)(2765,`td`,17)(2766,`div`,25)(2767,`span`,26),vN(2768,` forceOptionsComponentType`),Kc(2769,`br`),ug()()(),Ac(2770,`td`,21)(2771,`code`,54),vN(2772,`ForceOptionComponentEnum`),ug()(),Ac(2773,`td`,24)(2774,`em`)(2775,`strong`),vN(2776,`(opcional)`),ug()(),Ac(2777,`p`),vN(2778,`pode ser utilizada em conjunto com a propriedade `),Ac(2779,`code`),vN(2780,`options`),ug(),vN(2781,` forçando o componente a renderizar um `),Ac(2782,`code`),vN(2783,`po-select`),ug(),vN(2784,` ou `),Ac(2785,`code`),vN(2786,`po-radio-group`),ug(),vN(2787,`.`),ug(),Ac(2788,`p`),vN(2789,`Valores aceitos:`),ug(),Ac(2790,`ul`)(2791,`li`),vN(2792,`ForceOptionComponentEnum.radioGroup`),ug(),Ac(2793,`li`),vN(2794,`ForceOptionComponentEnum.select`),ug()(),Ac(2795,`blockquote`)(2796,`p`),vN(2797,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Ac(2798,`code`),vN(2799,`optionsMulti`),ug(),vN(2800,` e `),Ac(2801,`code`),vN(2802,`optionsService`),ug(),vN(2803,`.`),ug()()()(),Ac(2804,`tr`,16)(2805,`td`,17)(2806,`div`,25)(2807,`span`,26),vN(2808,` formField`),Kc(2809,`br`),ug()()(),Ac(2810,`td`,21)(2811,`code`,27),vN(2812,`string`),ug()(),Ac(2813,`td`,24)(2814,`em`)(2815,`strong`),vN(2816,`(opcional)`),ug()(),Ac(2817,`p`),vN(2818,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ac(2819,`code`),vN(2820,`url`),ug(),vN(2821,`.`),ug(),Ac(2822,`blockquote`)(2823,`p`),vN(2824,`O valor default é `),Ac(2825,`code`),vN(2826,`files`),ug()()(),Ac(2827,`p`)(2828,`strong`),vN(2829,`Componente compatível`),ug(),vN(2830,`: `),Ac(2831,`code`),vN(2832,`po-upload`),ug()()()(),Ac(2833,`tr`,16)(2834,`td`,17)(2835,`div`,25)(2836,`span`,26),vN(2837,` format`),Kc(2838,`br`),ug()()(),Ac(2839,`td`,21)(2840,`code`,27),vN(2841,`string `),ug(),Ac(2842,`code`,32),vN(2843,` Array<string>`),ug()(),Ac(2844,`td`,24)(2845,`em`)(2846,`strong`),vN(2847,`(opcional)`),ug()(),Ac(2848,`p`),vN(2849,`Formato de exibição no campo.`),ug(),Ac(2850,`p`),vN(2851,`Ao utilizar esta propriedade com o `),Ac(2852,`code`),vN(2853,`type`),ug(),Ac(2854,`em`),vN(2855,`PoDynamicFieldType.Date`),ug(),vN(2856,` ou `),Ac(2857,`em`),vN(2858,`PoDynamicFieldType.DateTime`),ug(),vN(2859,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ug(),Ac(2860,`p`),vN(2861,`Valores válidos:`),ug(),Ac(2862,`ul`)(2863,`li`),vN(2864,`dd/mm/yyyy`),ug(),Ac(2865,`li`),vN(2866,`mm/dd/yyyy`),ug(),Ac(2867,`li`),vN(2868,`yyyy/mm/dd`),ug()(),Ac(2869,`p`),vN(2870,`Ao utilizar com o `),Ac(2871,`code`),vN(2872,`type`),ug(),Ac(2873,`em`),vN(2874,`PoDynamicFieldType.Time`),ug(),vN(2875,`, define o formato de exibição do horário:`),ug(),Ac(2876,`p`),vN(2877,`Valores válidos:`),ug(),Ac(2878,`ul`)(2879,`li`)(2880,`code`),vN(2881,`24`),ug(),vN(2882,`: formato de 24 horas (padrão)`),ug(),Ac(2883,`li`)(2884,`code`),vN(2885,`12`),ug(),vN(2886,`: formato de 12 horas com indicador AM/PM`),ug()(),Ac(2887,`p`),vN(2888,`Também pode-se utilizar em conjunto com `),Ac(2889,`code`),vN(2890,`searchService`),ug(),vN(2891,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ug(),Ac(2892,`p`)(2893,`strong`),vN(2894,`Componentes compatíveis:`),ug(),Ac(2895,`code`),vN(2896,`po-datepicker`),ug(),vN(2897,`, `),Ac(2898,`code`),vN(2899,`po-datetimepicker`),ug(),vN(2900,`, `),Ac(2901,`code`),vN(2902,`po-timepicker`),ug(),vN(2903,`, `),Ac(2904,`code`),vN(2905,`po-lookup`),ug(),vN(2906,`.`),ug()()(),Ac(2907,`tr`,16)(2908,`td`,17)(2909,`div`,25)(2910,`span`,26),vN(2911,` formatModel`),Kc(2912,`br`),ug()()(),Ac(2913,`td`,21)(2914,`code`,29),vN(2915,`boolean`),ug()(),Ac(2916,`td`,24)(2917,`em`)(2918,`strong`),vN(2919,`(opcional)`),ug()(),Ac(2920,`p`),vN(2921,`Indica se o `),Ac(2922,`code`),vN(2923,`model`),ug(),vN(2924,` receberá o valor formatado pelas propriedades `),Ac(2925,`code`),vN(2926,`p-label-on`),ug(),vN(2927,` e `),Ac(2928,`code`),vN(2929,`p-label-off`),ug(),vN(2930,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ug(),Ac(2931,`p`),vN(2932,`O valor padrão é: `),Ac(2933,`code`),vN(2934,`false`),ug(),vN(2935,`.`),ug(),Ac(2936,`blockquote`)(2937,`p`),vN(2938,`Esta propriedade está disponivel apenas para o `),Ac(2939,`code`),vN(2940,`swicth`),ug(),vN(2941,`.`),ug()()()(),Ac(2942,`tr`,16)(2943,`td`,17)(2944,`div`,25)(2945,`span`,26),vN(2946,` formatTime`),Kc(2947,`br`),ug()()(),Ac(2948,`td`,21)(2949,`code`,27),vN(2950,`string`),ug()(),Ac(2951,`td`,24)(2952,`em`)(2953,`strong`),vN(2954,`(opcional)`),ug()(),Ac(2955,`p`),vN(2956,`Define o formato de exibição do timer (`),Ac(2957,`code`),vN(2958,`'12'`),ug(),vN(2959,` ou `),Ac(2960,`code`),vN(2961,`'24'`),ug(),vN(2962,`).`),ug(),Ac(2963,`p`)(2964,`strong`),vN(2965,`Componente compatível:`),ug(),Ac(2966,`code`),vN(2967,`po-datetimepicker`),ug()()()(),Ac(2968,`tr`,16)(2969,`td`,17)(2970,`div`,25)(2971,`span`,26),vN(2972,` gridColumns`),Kc(2973,`br`),ug()()(),Ac(2974,`td`,21)(2975,`code`,45),vN(2976,`number`),ug()(),Ac(2977,`td`,24)(2978,`em`)(2979,`strong`),vN(2980,`(opcional)`),ug()(),Ac(2981,`p`),vN(2982,`Tamanho de exibição do campo em telas.`),ug(),Ac(2983,`p`),vN(2984,`Deve ser usado o sistema de `),Ac(2985,`strong`),vN(2986,`grid`),ug(),vN(2987,` do PO (1 ... 12 colunas).`),ug(),Ac(2988,`blockquote`)(2989,`p`),vN(2990,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(2991,`tr`,16)(2992,`td`,17)(2993,`div`,25)(2994,`span`,26),vN(2995,` gridLgColumns`),Kc(2996,`br`),ug()()(),Ac(2997,`td`,21)(2998,`code`,45),vN(2999,`number`),ug()(),Ac(3e3,`td`,24)(3001,`em`)(3002,`strong`),vN(3003,`(opcional)`),ug()(),Ac(3004,`p`),vN(3005,`Tamanho de exibição do campo em telas grandes (lg).`),ug(),Ac(3006,`p`),vN(3007,`Deve ser usado o sistema de `),Ac(3008,`strong`),vN(3009,`grid`),ug(),vN(3010,` do PO (1 ... 12 colunas).`),ug(),Ac(3011,`blockquote`)(3012,`p`),vN(3013,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3014,`code`),vN(3015,`gridColumns`),ug(),vN(3016,`.`),ug()()()(),Ac(3017,`tr`,16)(3018,`td`,17)(3019,`div`,25)(3020,`span`,26),vN(3021,` gridLgPull`),Kc(3022,`br`),ug()()(),Ac(3023,`td`,21)(3024,`code`,45),vN(3025,`number`),ug()(),Ac(3026,`td`,24)(3027,`em`)(3028,`strong`),vN(3029,`(opcional)`),ug()(),Ac(3030,`p`),vN(3031,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ug(),Ac(3032,`p`),vN(3033,`Deve ser usado o sistema de `),Ac(3034,`strong`),vN(3035,`grid`),ug(),vN(3036,` do PO (1 ... 11 colunas).`),ug(),Ac(3037,`blockquote`)(3038,`p`),vN(3039,`Esta propriedade não funciona com a propriedade `),Ac(3040,`code`),vN(3041,`gridColumns`),ug(),vN(3042,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3043,`tr`,16)(3044,`td`,17)(3045,`div`,25)(3046,`span`,26),vN(3047,` gridMdColumns`),Kc(3048,`br`),ug()()(),Ac(3049,`td`,21)(3050,`code`,45),vN(3051,`number`),ug()(),Ac(3052,`td`,24)(3053,`em`)(3054,`strong`),vN(3055,`(opcional)`),ug()(),Ac(3056,`p`),vN(3057,`Tamanho de exibição do campo em telas médias (md).`),ug(),Ac(3058,`p`),vN(3059,`Deve ser usado o sistema de `),Ac(3060,`strong`),vN(3061,`grid`),ug(),vN(3062,` do PO (1 ... 12 colunas).`),ug(),Ac(3063,`blockquote`)(3064,`p`),vN(3065,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3066,`code`),vN(3067,`gridColumns`),ug(),vN(3068,`.`),ug()()()(),Ac(3069,`tr`,16)(3070,`td`,17)(3071,`div`,25)(3072,`span`,26),vN(3073,` gridMdPull`),Kc(3074,`br`),ug()()(),Ac(3075,`td`,21)(3076,`code`,45),vN(3077,`number`),ug()(),Ac(3078,`td`,24)(3079,`em`)(3080,`strong`),vN(3081,`(opcional)`),ug()(),Ac(3082,`p`),vN(3083,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ug(),Ac(3084,`p`),vN(3085,`Deve ser usado o sistema de `),Ac(3086,`strong`),vN(3087,`grid`),ug(),vN(3088,` do PO (1 ... 11 colunas).`),ug(),Ac(3089,`blockquote`)(3090,`p`),vN(3091,`Esta propriedade não funciona com a propriedade `),Ac(3092,`code`),vN(3093,`gridColumns`),ug(),vN(3094,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3095,`tr`,16)(3096,`td`,17)(3097,`div`,25)(3098,`span`,26),vN(3099,` gridSmColumns`),Kc(3100,`br`),ug()()(),Ac(3101,`td`,21)(3102,`code`,45),vN(3103,`number`),ug()(),Ac(3104,`td`,24)(3105,`em`)(3106,`strong`),vN(3107,`(opcional)`),ug()(),Ac(3108,`p`),vN(3109,`Tamanho de exibição do campo em telas menores (sm).`),ug(),Ac(3110,`p`),vN(3111,`Deve ser usado o sistema de `),Ac(3112,`strong`),vN(3113,`grid`),ug(),vN(3114,` do PO (1 ... 12 colunas).`),ug(),Ac(3115,`blockquote`)(3116,`p`),vN(3117,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3118,`code`),vN(3119,`gridColumns`),ug(),vN(3120,`.`),ug()()()(),Ac(3121,`tr`,16)(3122,`td`,17)(3123,`div`,25)(3124,`span`,26),vN(3125,` gridSmPull`),Kc(3126,`br`),ug()()(),Ac(3127,`td`,21)(3128,`code`,45),vN(3129,`number`),ug()(),Ac(3130,`td`,24)(3131,`em`)(3132,`strong`),vN(3133,`(opcional)`),ug()(),Ac(3134,`p`),vN(3135,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ug(),Ac(3136,`p`),vN(3137,`Deve ser usado o sistema de `),Ac(3138,`strong`),vN(3139,`grid`),ug(),vN(3140,` do PO (1 ... 11 colunas).`),ug(),Ac(3141,`blockquote`)(3142,`p`),vN(3143,`Esta propriedade não funciona com a propriedade `),Ac(3144,`code`),vN(3145,`gridColumns`),ug(),vN(3146,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3147,`tr`,16)(3148,`td`,17)(3149,`div`,25)(3150,`span`,26),vN(3151,` gridXlColumns`),Kc(3152,`br`),ug()()(),Ac(3153,`td`,21)(3154,`code`,45),vN(3155,`number`),ug()(),Ac(3156,`td`,24)(3157,`em`)(3158,`strong`),vN(3159,`(opcional)`),ug()(),Ac(3160,`p`),vN(3161,`Tamanho de exibição do campo em telas extra grandes (xl).`),ug(),Ac(3162,`p`),vN(3163,`Deve ser usado o sistema de `),Ac(3164,`strong`),vN(3165,`grid`),ug(),vN(3166,` do PO (1 ... 12 colunas).`),ug(),Ac(3167,`blockquote`)(3168,`p`),vN(3169,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3170,`code`),vN(3171,`gridColumns`),ug(),vN(3172,`.`),ug()()()(),Ac(3173,`tr`,16)(3174,`td`,17)(3175,`div`,25)(3176,`span`,26),vN(3177,` gridXlPull`),Kc(3178,`br`),ug()()(),Ac(3179,`td`,21)(3180,`code`,45),vN(3181,`number`),ug()(),Ac(3182,`td`,24)(3183,`em`)(3184,`strong`),vN(3185,`(opcional)`),ug()(),Ac(3186,`p`),vN(3187,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ug(),Ac(3188,`p`),vN(3189,`Deve ser usado o sistema de `),Ac(3190,`strong`),vN(3191,`grid`),ug(),vN(3192,` do PO (1 ... 11 colunas).`),ug(),Ac(3193,`blockquote`)(3194,`p`),vN(3195,`Esta propriedade não funciona com a propriedade `),Ac(3196,`code`),vN(3197,`gridColumns`),ug(),vN(3198,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(3199,`tr`,16)(3200,`td`,17)(3201,`div`,25)(3202,`span`,26),vN(3203,` headers`),Kc(3204,`br`),ug()()(),Ac(3205,`td`,21)(3206,`code`,55),vN(3207,`{ [name: string]: string `),ug(),Ac(3208,`code`,56),vN(3209,` Array<string>;
}`),ug()(),Ac(3210,`td`,24)(3211,`em`)(3212,`strong`),vN(3213,`(opcional)`),ug()(),Ac(3214,`p`),vN(3215,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ug(),Ac(3216,`p`)(3217,`strong`),vN(3218,`Componente compatível`),ug(),vN(3219,`: `),Ac(3220,`code`),vN(3221,`po-upload`),ug()()()(),Ac(3222,`tr`,16)(3223,`td`,17)(3224,`div`,25)(3225,`span`,26),vN(3226,` help`),Kc(3227,`br`),ug()()(),Ac(3228,`td`,21)(3229,`code`,27),vN(3230,`string`),ug()(),Ac(3231,`td`,24)(3232,`em`)(3233,`strong`),vN(3234,`(opcional)`),ug()(),Ac(3235,`p`),vN(3236,`Texto de ajuda.`),ug()()(),Ac(3237,`tr`,16)(3238,`td`,17)(3239,`div`,25)(3240,`span`,26),vN(3241,` helper`),Kc(3242,`br`),ug()()(),Ac(3243,`td`,21)(3244,`code`,27),vN(3245,`string `),ug(),Ac(3246,`code`,38),vN(3247,` PoHelperOptions`),ug()(),Ac(3248,`td`,24)(3249,`em`)(3250,`strong`),vN(3251,`(opcional)`),ug()(),Ac(3252,`p`),vN(3253,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),ug()()(),Ac(3254,`tr`,16)(3255,`td`,17)(3256,`div`,25)(3257,`span`,26),vN(3258,` hideLabelStatus`),Kc(3259,`br`),ug()()(),Ac(3260,`td`,21)(3261,`code`,29),vN(3262,`boolean`),ug()(),Ac(3263,`td`,24)(3264,`em`)(3265,`strong`),vN(3266,`(opcional)`),ug()(),Ac(3267,`p`),vN(3268,`Indica se o status do `),Ac(3269,`code`),vN(3270,`model`),ug(),vN(3271,` será escondido visualmente ao lado do switch`),ug()()(),Ac(3272,`tr`,16)(3273,`td`,17)(3274,`div`,25)(3275,`span`,26),vN(3276,` hidePasswordPeek`),Kc(3277,`br`),ug()()(),Ac(3278,`td`,21)(3279,`code`,29),vN(3280,`boolean`),ug()(),Ac(3281,`td`,24)(3282,`em`)(3283,`strong`),vN(3284,`(opcional)`),ug()(),Ac(3285,`p`),vN(3286,`Permite esconder a função de espiar a senha digitada no `),Ac(3287,`code`),vN(3288,`po-password`),ug(),vN(3289,`.`),ug()()(),Ac(3290,`tr`,16)(3291,`td`,17)(3292,`div`,25)(3293,`span`,26),vN(3294,` hideRestrictionsInfo`),Kc(3295,`br`),ug()()(),Ac(3296,`td`,21)(3297,`code`,29),vN(3298,`boolean`),ug()(),Ac(3299,`td`,24)(3300,`em`)(3301,`strong`),vN(3302,`(opcional)`),ug()(),Ac(3303,`p`),vN(3304,`Oculta visualmente as informações de restrições para o upload.`),ug(),Ac(3305,`p`)(3306,`strong`),vN(3307,`Componente compatível`),ug(),vN(3308,`: `),Ac(3309,`code`),vN(3310,`po-upload`),ug()()()(),Ac(3311,`tr`,16)(3312,`td`,17)(3313,`div`,25)(3314,`span`,26),vN(3315,` hideSearch`),Kc(3316,`br`),ug()()(),Ac(3317,`td`,21)(3318,`code`,29),vN(3319,`boolean`),ug()(),Ac(3320,`td`,24)(3321,`em`)(3322,`strong`),vN(3323,`(opcional)`),ug()(),Ac(3324,`p`),vN(3325,`Esconde o campo de pesquisa existente dentro do dropdown do `),Ac(3326,`code`),vN(3327,`po-multiselect`),ug(),vN(3328,`.`),ug()()(),Ac(3329,`tr`,16)(3330,`td`,17)(3331,`div`,25)(3332,`span`,26),vN(3333,` hideSelectAll`),Kc(3334,`br`),ug()()(),Ac(3335,`td`,21)(3336,`code`,29),vN(3337,`boolean`),ug()(),Ac(3338,`td`,24)(3339,`em`)(3340,`strong`),vN(3341,`(opcional)`),ug()(),Ac(3342,`p`),vN(3343,`Indica se o campo "Selecionar todos" do `),Ac(3344,`code`),vN(3345,`po-multiselect`),ug(),vN(3346,` será escondido.`),ug()()(),Ac(3347,`tr`,16)(3348,`td`,17)(3349,`div`,25)(3350,`span`,26),vN(3351,` hideSelectButton`),Kc(3352,`br`),ug()()(),Ac(3353,`td`,21)(3354,`code`,29),vN(3355,`boolean`),ug()(),Ac(3356,`td`,24)(3357,`em`)(3358,`strong`),vN(3359,`(opcional)`),ug()(),Ac(3360,`p`),vN(3361,`Omite o botão de seleção de arquivos.`),ug(),Ac(3362,`blockquote`)(3363,`p`),vN(3364,`Caso o valor definido seja `),Ac(3365,`code`),vN(3366,`true`),ug(),vN(3367,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(3368,`code`),vN(3369,`selectFiles()`),ug(),vN(3370,` para seleção de arquivos.`),ug()(),Ac(3371,`p`)(3372,`strong`),vN(3373,`Componente compatível`),ug(),vN(3374,`: `),Ac(3375,`code`),vN(3376,`po-upload`),ug()()()(),Ac(3377,`tr`,16)(3378,`td`,17)(3379,`div`,25)(3380,`span`,26),vN(3381,` hideSendButton`),Kc(3382,`br`),ug()()(),Ac(3383,`td`,21)(3384,`code`,29),vN(3385,`boolean`),ug()(),Ac(3386,`td`,24)(3387,`em`)(3388,`strong`),vN(3389,`(opcional)`),ug()(),Ac(3390,`p`),vN(3391,`Omite o botão de envio de arquivos.`),ug(),Ac(3392,`blockquote`)(3393,`p`),vN(3394,`Caso o valor definido seja `),Ac(3395,`code`),vN(3396,`true`),ug(),vN(3397,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(3398,`code`),vN(3399,`sendFiles()`),ug(),vN(3400,` para envio do(s) arquivo(s) selecionado(s).`),ug()(),Ac(3401,`p`)(3402,`strong`),vN(3403,`Componente compatível`),ug(),vN(3404,`: `),Ac(3405,`code`),vN(3406,`po-upload`),ug()()()(),Ac(3407,`tr`,16)(3408,`td`,17)(3409,`div`,25)(3410,`span`,26),vN(3411,` icon`),Kc(3412,`br`),ug()()(),Ac(3413,`td`,21)(3414,`code`,27),vN(3415,`string `),ug(),Ac(3416,`code`,57),vN(3417,` TemplateRef<void>`),ug()(),Ac(3418,`td`,24)(3419,`em`)(3420,`strong`),vN(3421,`(opcional)`),ug()(),Ac(3422,`p`),vN(3423,`Define o ícone que será exibido no início do campo.`),ug(),Ac(3424,`blockquote`)(3425,`p`),vN(3426,`Esta propriedade só pode ser utilizado nos campos:`),ug()(),Ac(3427,`ul`)(3428,`li`),vN(3429,`Input;`),ug(),Ac(3430,`li`),vN(3431,`Number;`),ug(),Ac(3432,`li`),vN(3433,`Decimal;`),ug(),Ac(3434,`li`),vN(3435,`Combo;`),ug(),Ac(3436,`li`),vN(3437,`Password;`),ug()(),Ac(3438,`blockquote`)(3439,`p`),vN(3440,`Veja a disponibilidade de ícones em `),Ac(3441,`a`,58),vN(3442,`biblioteca de ícones`),ug(),vN(3443,`.`),ug()()()(),Ac(3444,`tr`,16)(3445,`td`,17)(3446,`div`,25)(3447,`span`,26),vN(3448,` infiniteScroll`),Kc(3449,`br`),ug()()(),Ac(3450,`td`,21)(3451,`code`,29),vN(3452,`boolean`),ug()(),Ac(3453,`td`,24)(3454,`em`)(3455,`strong`),vN(3456,`(opcional)`),ug()(),Ac(3457,`p`),vN(3458,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ug(),Ac(3459,`p`)(3460,`strong`),vN(3461,`Componentes compatíveis:`),ug(),Ac(3462,`code`),vN(3463,`po-combo`),ug(),vN(3464,`, `),Ac(3465,`code`),vN(3466,`po-lookup`),ug(),vN(3467,`.`),ug()()(),Ac(3468,`tr`,16)(3469,`td`,17)(3470,`div`,25)(3471,`span`,26),vN(3472,` infiniteScrollDistance`),Kc(3473,`br`),ug()()(),Ac(3474,`td`,21)(3475,`code`,45),vN(3476,`number`),ug()(),Ac(3477,`td`,24)(3478,`em`)(3479,`strong`),vN(3480,`(opcional)`),ug()(),Ac(3481,`p`),vN(3482,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Ac(3483,`strong`),vN(3484,`Exemplos`),ug(),Ac(3485,`code`),vN(3486,`{ infiniteScrollDistance: 80 }`),ug(),vN(3487,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),ug(),Ac(3488,`p`)(3489,`strong`),vN(3490,`Componente compatível:`),ug(),Ac(3491,`code`),vN(3492,`po-combo`),ug(),vN(3493,`.`),ug()()(),Ac(3494,`tr`,16)(3495,`td`,17)(3496,`div`,25)(3497,`span`,26),vN(3498,` invalidValue`),Kc(3499,`br`),ug()()(),Ac(3500,`td`,21)(3501,`code`,29),vN(3502,`boolean`),ug()(),Ac(3503,`td`,24)(3504,`em`)(3505,`strong`),vN(3506,`(opcional)`),ug()(),Ac(3507,`p`),vN(3508,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ac(3509,`code`),vN(3510,`p-field-error-message`),ug(),vN(3511,`.`),ug(),Ac(3512,`blockquote`)(3513,`p`),vN(3514,`Caso essa propriedade seja definida como `),Ac(3515,`code`),vN(3516,`true`),ug(),vN(3517,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ug()(),Ac(3518,`p`)(3519,`strong`),vN(3520,`Componente compatível`),ug(),vN(3521,`: `),Ac(3522,`code`),vN(3523,`po-switch`),ug()()()(),Ac(3524,`tr`,16)(3525,`td`,17)(3526,`div`,25)(3527,`span`,26),vN(3528,` isoFormat`),Kc(3529,`br`),ug()()(),Ac(3530,`td`,21)(3531,`code`,59),vN(3532,`PoDatepickerIsoFormat`),ug()(),Ac(3533,`td`,24)(3534,`em`)(3535,`strong`),vN(3536,`(opcional)`),ug()(),Ac(3537,`p`),vN(3538,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),ug(),Ac(3539,`blockquote`)(3540,`p`),vN(3541,`Veja os valores válidos no `),Ac(3542,`code`),vN(3543,`PoDatepickerIsoFormat`),ug(),vN(3544,`.`),ug()(),Ac(3545,`p`)(3546,`strong`),vN(3547,`Componente compatível:`),ug(),Ac(3548,`code`),vN(3549,`po-datepicker`),ug()()()(),Ac(3550,`tr`,16)(3551,`td`,17)(3552,`div`,25)(3553,`span`,26),vN(3554,` key`),Kc(3555,`br`),ug()()(),Ac(3556,`td`,21)(3557,`code`,29),vN(3558,`boolean`),ug()(),Ac(3559,`td`,24)(3560,`em`)(3561,`strong`),vN(3562,`(opcional)`),ug()(),Ac(3563,`p`),vN(3564,`Identificador`),ug()()(),Ac(3565,`tr`,16)(3566,`td`,17)(3567,`div`,25)(3568,`span`,26),vN(3569,` keydown`),Kc(3570,`br`),ug()()(),Ac(3571,`td`,21)(3572,`code`,44),vN(3573,`Function`),ug()(),Ac(3574,`td`,24)(3575,`em`)(3576,`strong`),vN(3577,`(opcional)`),ug()(),Ac(3578,`p`),vN(3579,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(3580,`code`),vN(3581,`KeyboardEvent`),ug(),vN(3582,` com informações sobre a tecla.`),ug()()(),Ac(3583,`tr`,16)(3584,`td`,17)(3585,`div`,25)(3586,`span`,26),vN(3587,` label`),Kc(3588,`br`),ug()()(),Ac(3589,`td`,21)(3590,`code`,27),vN(3591,`string`),ug()(),Ac(3592,`td`,24)(3593,`em`)(3594,`strong`),vN(3595,`(opcional)`),ug()(),Ac(3596,`p`),vN(3597,`Rótulo do campo exibido.`),ug(),Ac(3598,`p`),vN(3599,`Caso não seja informado, será utilizado como `),Ac(3600,`code`),vN(3601,`label`),ug(),vN(3602,` o valor da propriedade `),Ac(3603,`code`),vN(3604,`property`),ug(),vN(3605,` com a primeira letra em maiúsculo.`),ug()()(),Ac(3606,`tr`,16)(3607,`td`,17)(3608,`div`,25)(3609,`span`,26),vN(3610,` labelPosition`),Kc(3611,`br`),ug()()(),Ac(3612,`td`,21)(3613,`code`,60),vN(3614,`PoSwitchLabelPosition`),ug()(),Ac(3615,`td`,24)(3616,`em`)(3617,`strong`),vN(3618,`(opcional)`),ug()(),Ac(3619,`p`),vN(3620,`Posição de exibição do rótulo do PoSwitch.`),ug(),Ac(3621,`blockquote`)(3622,`p`),vN(3623,`Por padrão exibe à direita.`),ug()()()(),Ac(3624,`tr`,16)(3625,`td`,17)(3626,`div`,25)(3627,`span`,26),vN(3628,` listboxControlPosition`),Kc(3629,`br`),ug()()(),Ac(3630,`td`,21)(3631,`code`,61),vN(3632,`'top' `),ug(),Ac(3633,`code`,62),vN(3634,` 'bottom'`),ug()(),Ac(3635,`td`,24)(3636,`em`)(3637,`strong`),vN(3638,`(opcional)`),ug()(),Ac(3639,`p`),vN(3640,`Define a direção preferida para exibição do `),Ac(3641,`code`),vN(3642,`listbox`),ug(),vN(3643,` em relação ao campo (`),Ac(3644,`code`),vN(3645,`top`),ug(),vN(3646,` ou `),Ac(3647,`code`),vN(3648,`bottom`),ug(),vN(3649,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ug(),Ac(3650,`p`)(3651,`strong`),vN(3652,`Componentes compatíveis:`),ug(),Ac(3653,`code`),vN(3654,`po-multiselect`),ug(),vN(3655,`, `),Ac(3656,`code`),vN(3657,`po-combo`),ug(),vN(3658,`.`),ug()()(),Ac(3659,`tr`,16)(3660,`td`,17)(3661,`div`,25)(3662,`span`,26),vN(3663,` literals`),Kc(3664,`br`),ug()()(),Ac(3665,`td`,21)(3666,`code`,36),vN(3667,`PoLookupLiterals `),ug(),Ac(3668,`code`,63),vN(3669,` PoMultiselectLiterals `),ug(),Ac(3670,`code`,64),vN(3671,` PoComboLiterals `),ug(),Ac(3672,`code`,65),vN(3673,` PoDatepickerRangeLiterals `),ug(),Ac(3674,`code`,66),vN(3675,` PoUploadLiterals`),ug()(),Ac(3676,`td`,24)(3677,`em`)(3678,`strong`),vN(3679,`(opcional)`),ug()(),Ac(3680,`p`),vN(3681,`Objeto com as literais usadas para os seguintes componentes: `),Ac(3682,`code`),vN(3683,`po-lookup`),ug(),vN(3684,`, `),Ac(3685,`code`),vN(3686,`po-multiselect`),ug(),vN(3687,`, `),Ac(3688,`code`),vN(3689,`po-combo`),ug(),vN(3690,` e `),Ac(3691,`code`),vN(3692,`po-datepicker-range`),ug(),vN(3693,`.`),ug(),Ac(3694,`blockquote`)(3695,`p`),vN(3696,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),ug()(),Ac(3697,`p`)(3698,`strong`),vN(3699,`Componentes compatíveis:`),ug(),Ac(3700,`code`),vN(3701,`po-lookup`),ug(),vN(3702,`, `),Ac(3703,`code`),vN(3704,`po-multiselect`),ug(),vN(3705,`, `),Ac(3706,`code`),vN(3707,`po-combo`),ug(),vN(3708,`, `),Ac(3709,`code`),vN(3710,`po-datepicker-range`),ug()()()(),Ac(3711,`tr`,16)(3712,`td`,17)(3713,`div`,25)(3714,`span`,26),vN(3715,` loading`),Kc(3716,`br`),ug()()(),Ac(3717,`td`,21)(3718,`code`,29),vN(3719,`boolean`),ug()(),Ac(3720,`td`,24)(3721,`em`)(3722,`strong`),vN(3723,`(opcional)`),ug()(),Ac(3724,`p`),vN(3725,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),ug(),Ac(3726,`blockquote`)(3727,`p`),vN(3728,`Por padrão é `),Ac(3729,`code`),vN(3730,`false`),ug(),vN(3731,`.`),ug()(),Ac(3732,`p`)(3733,`strong`),vN(3734,`Componentes compatíveis:`),ug(),Ac(3735,`code`),vN(3736,`po-datepicker`),ug(),vN(3737,`, `),Ac(3738,`code`),vN(3739,`po-datepicker-range`),ug(),vN(3740,`, `),Ac(3741,`code`),vN(3742,`po-number`),ug(),vN(3743,`, `),Ac(3744,`code`),vN(3745,`po-decimal`),ug(),vN(3746,`,
`),Ac(3747,`code`),vN(3748,`po-input`),ug(),vN(3749,`, `),Ac(3750,`code`),vN(3751,`po-select`),ug(),vN(3752,`, `),Ac(3753,`code`),vN(3754,`po-switch`),ug(),vN(3755,`, `),Ac(3756,`code`),vN(3757,`po-combo`),ug(),vN(3758,`, `),Ac(3759,`code`),vN(3760,`po-lookup`),ug(),vN(3761,`, `),Ac(3762,`code`),vN(3763,`po-multiselect`),ug(),vN(3764,`,
`),Ac(3765,`code`),vN(3766,`po-textarea`),ug(),vN(3767,`, `),Ac(3768,`code`),vN(3769,`po-password`),ug(),vN(3770,`, `),Ac(3771,`code`),vN(3772,`po-upload`),ug(),vN(3773,`.`),ug()()(),Ac(3774,`tr`,16)(3775,`td`,17)(3776,`div`,25)(3777,`span`,26),vN(3778,` locale`),Kc(3779,`br`),ug()()(),Ac(3780,`td`,21)(3781,`code`,27),vN(3782,`string`),ug()(),Ac(3783,`td`,24)(3784,`em`)(3785,`strong`),vN(3786,`(opcional)`),ug()(),Ac(3787,`p`),vN(3788,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Ac(3789,`a`,67)(3790,`code`),vN(3791,`I18n`),ug()()(),Ac(3792,`p`),vN(3793,`Exemplo de utilização:`),ug(),Ac(3794,`pre`)(3795,`code`),vN(3796,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ug()(),Ac(3797,`blockquote`)(3798,`p`),vN(3799,`Para ver quais linguagens suportadas acesse `),Ac(3800,`a`,67)(3801,`code`),vN(3802,`I18n`),ug()()()(),Ac(3803,`p`)(3804,`strong`),vN(3805,`Componentes compatíveis:`),ug(),Ac(3806,`code`),vN(3807,`po-datepicker`),ug(),vN(3808,`, `),Ac(3809,`code`),vN(3810,`po-decimal`),ug(),vN(3811,`, `),Ac(3812,`code`),vN(3813,`po-timepicker`),ug(),vN(3814,`.`),ug()()(),Ac(3815,`tr`,16)(3816,`td`,17)(3817,`div`,25)(3818,`span`,26),vN(3819,` mask`),Kc(3820,`br`),ug()()(),Ac(3821,`td`,21)(3822,`code`,27),vN(3823,`string`),ug()(),Ac(3824,`td`,24)(3825,`em`)(3826,`strong`),vN(3827,`(opcional)`),ug()(),Ac(3828,`p`),vN(3829,`Máscara para o campo.`),ug(),Ac(3830,`p`)(3831,`strong`),vN(3832,`Componente compatível:`),ug(),Ac(3833,`code`),vN(3834,`po-input`),ug(),vN(3835,`.`),ug(),Ac(3836,`blockquote`)(3837,`p`),vN(3838,`também é atribuído ao utilizar a propriedade `),Ac(3839,`code`),vN(3840,`type: time`),ug(),vN(3841,`.`),ug()(),Ac(3842,`blockquote`)(3843,`p`),vN(3844,`Incompatível com `),Ac(3845,`code`),vN(3846,`po-decimal`),ug(),vN(3847,`.`),ug()()()(),Ac(3848,`tr`,16)(3849,`td`,17)(3850,`div`,25)(3851,`span`,26),vN(3852,` maskFormatModel`),Kc(3853,`br`),ug()()(),Ac(3854,`td`,21)(3855,`code`,29),vN(3856,`boolean`),ug()(),Ac(3857,`td`,24)(3858,`em`)(3859,`strong`),vN(3860,`(opcional)`),ug()(),Ac(3861,`p`),vN(3862,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Ac(3863,`code`),vN(3864,`false`),ug(),vN(3865,`.`),ug(),Ac(3866,`p`)(3867,`strong`),vN(3868,`Componente compatível:`),ug(),Ac(3869,`code`),vN(3870,`po-input`),ug(),vN(3871,`.`),ug(),Ac(3872,`blockquote`)(3873,`p`),vN(3874,`também é atribuído ao utilizar a propriedade `),Ac(3875,`code`),vN(3876,`type: time`),ug(),vN(3877,`.`),ug()()()(),Ac(3878,`tr`,16)(3879,`td`,17)(3880,`div`,25)(3881,`span`,26),vN(3882,` maskNoLengthValidation`),Kc(3883,`br`),ug()()(),Ac(3884,`td`,21)(3885,`code`,29),vN(3886,`boolean`),ug()(),Ac(3887,`td`,24)(3888,`em`)(3889,`strong`),vN(3890,`(opcional)`),ug()(),Ac(3891,`p`),vN(3892,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(3893,`code`),vN(3894,`minLength`),ug(),vN(3895,`) e máximo (`),Ac(3896,`code`),vN(3897,`maxLength`),ug(),vN(3898,`) quando há uma máscara (`),Ac(3899,`code`),vN(3900,`p-mask`),ug(),vN(3901,`) definida.`),ug(),Ac(3902,`ul`)(3903,`li`),vN(3904,`Quando `),Ac(3905,`code`),vN(3906,`true`),ug(),vN(3907,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(3908,`li`),vN(3909,`Quando `),Ac(3910,`code`),vN(3911,`false`),ug(),vN(3912,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(3913,`p`)(3914,`strong`),vN(3915,`Componentes compatíveis:`),ug(),Ac(3916,`code`),vN(3917,`po-input`),ug(),vN(3918,`, `),Ac(3919,`code`),vN(3920,`po-decimal`),ug(),vN(3921,`.`),ug(),Ac(3922,`blockquote`)(3923,`p`),vN(3924,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(3925,`code`),vN(3926,`p-mask-format-model`),ug(),vN(3927,`.`),ug()(),Ac(3928,`p`),vN(3929,`Exemplo:`),ug(),Ac(3930,`pre`)(3931,`code`),vN(3932,`fields:Array<PoDynamicFormField> = [
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
`),ug()(),Ac(3933,`ul`)(3934,`li`),vN(3935,`Entrada: `),Ac(3936,`code`),vN(3937,`11.111.111/1111-11`),ug(),vN(3938,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),ug()()()(),Ac(3939,`tr`,16)(3940,`td`,17)(3941,`div`,25)(3942,`span`,26),vN(3943,` maxLength`),Kc(3944,`br`),ug()()(),Ac(3945,`td`,21)(3946,`code`,45),vN(3947,`number`),ug()(),Ac(3948,`td`,24)(3949,`em`)(3950,`strong`),vN(3951,`(opcional)`),ug()(),Ac(3952,`p`),vN(3953,`Tamanho máximo de caracteres.`),ug(),Ac(3954,`p`)(3955,`strong`),vN(3956,`Componentes compatíveis:`),ug(),Ac(3957,`code`),vN(3958,`po-input`),ug(),vN(3959,`, `),Ac(3960,`code`),vN(3961,`po-number`),ug(),vN(3962,`, `),Ac(3963,`code`),vN(3964,`po-decimal`),ug(),vN(3965,`, `),Ac(3966,`code`),vN(3967,`po-textarea`),ug(),vN(3968,`, `),Ac(3969,`code`),vN(3970,`po-password`),ug(),vN(3971,`.`),ug()()(),Ac(3972,`tr`,16)(3973,`td`,17)(3974,`div`,25)(3975,`span`,26),vN(3976,` maxTime`),Kc(3977,`br`),ug()()(),Ac(3978,`td`,21)(3979,`code`,27),vN(3980,`string`),ug()(),Ac(3981,`td`,24)(3982,`em`)(3983,`strong`),vN(3984,`(opcional)`),ug()(),Ac(3985,`p`),vN(3986,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(3987,`code`),vN(3988,`HH:mm`),ug(),vN(3989,` ou `),Ac(3990,`code`),vN(3991,`HH:mm:ss`),ug(),vN(3992,`.`),ug(),Ac(3993,`p`)(3994,`strong`),vN(3995,`Componente compatível:`),ug(),Ac(3996,`code`),vN(3997,`po-datetimepicker`),ug(),vN(3998,`, `),Ac(3999,`code`),vN(4e3,`po-timepicker`),ug()()()(),Ac(4001,`tr`,16)(4002,`td`,17)(4003,`div`,25)(4004,`span`,26),vN(4005,` maxValue`),Kc(4006,`br`),ug()()(),Ac(4007,`td`,21)(4008,`code`,27),vN(4009,`string `),ug(),Ac(4010,`code`,45),vN(4011,` number`),ug()(),Ac(4012,`td`,24)(4013,`em`)(4014,`strong`),vN(4015,`(opcional)`),ug()(),Ac(4016,`p`),vN(4017,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(4018,`em`),vN(4019,`number`),ug(),vN(4020,`, `),Ac(4021,`em`),vN(4022,`date`),ug(),vN(4023,`, `),Ac(4024,`em`),vN(4025,`dateTime`),ug(),vN(4026,` ou `),Ac(4027,`em`),vN(4028,`time`),ug(),vN(4029,`.`),ug(),Ac(4030,`blockquote`)(4031,`p`),vN(4032,`Para `),Ac(4033,`code`),vN(4034,`po-timepicker`),ug(),vN(4035,`, o valor deve estar no formato `),Ac(4036,`code`),vN(4037,`HH:mm`),ug(),vN(4038,` ou `),Ac(4039,`code`),vN(4040,`HH:mm:ss`),ug(),vN(4041,`.`),ug()(),Ac(4042,`p`)(4043,`strong`),vN(4044,`Componentes compatíveis:`),ug(),Ac(4045,`code`),vN(4046,`po-datepicker`),ug(),vN(4047,`, `),Ac(4048,`code`),vN(4049,`po-datepicker-range`),ug(),vN(4050,`, `),Ac(4051,`code`),vN(4052,`po-number`),ug(),vN(4053,`, `),Ac(4054,`code`),vN(4055,`po-decimal`),ug(),vN(4056,`, `),Ac(4057,`code`),vN(4058,`po-timepicker`),ug()()()(),Ac(4059,`tr`,16)(4060,`td`,17)(4061,`div`,25)(4062,`span`,26),vN(4063,` minLength`),Kc(4064,`br`),ug()()(),Ac(4065,`td`,21)(4066,`code`,45),vN(4067,`number`),ug()(),Ac(4068,`td`,24)(4069,`em`)(4070,`strong`),vN(4071,`(opcional)`),ug()(),Ac(4072,`p`),vN(4073,`Tamanho mínimo de caracteres.`),ug(),Ac(4074,`p`)(4075,`strong`),vN(4076,`Componentes compatíveis:`),ug(),Ac(4077,`code`),vN(4078,`po-input`),ug(),vN(4079,`, `),Ac(4080,`code`),vN(4081,`po-number`),ug(),vN(4082,`, `),Ac(4083,`code`),vN(4084,`po-decimal`),ug(),vN(4085,`, `),Ac(4086,`code`),vN(4087,`po-textarea`),ug(),vN(4088,`, `),Ac(4089,`code`),vN(4090,`po-password`),ug(),vN(4091,`.`),ug()()(),Ac(4092,`tr`,16)(4093,`td`,17)(4094,`div`,25)(4095,`span`,26),vN(4096,` minTime`),Kc(4097,`br`),ug()()(),Ac(4098,`td`,21)(4099,`code`,27),vN(4100,`string`),ug()(),Ac(4101,`td`,24)(4102,`em`)(4103,`strong`),vN(4104,`(opcional)`),ug()(),Ac(4105,`p`),vN(4106,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(4107,`code`),vN(4108,`HH:mm`),ug(),vN(4109,` ou `),Ac(4110,`code`),vN(4111,`HH:mm:ss`),ug(),vN(4112,`.`),ug(),Ac(4113,`p`)(4114,`strong`),vN(4115,`Componente compatível:`),ug(),Ac(4116,`code`),vN(4117,`po-datetimepicker`),ug(),vN(4118,`, `),Ac(4119,`code`),vN(4120,`po-timepicker`),ug()()()(),Ac(4121,`tr`,16)(4122,`td`,17)(4123,`div`,25)(4124,`span`,26),vN(4125,` minValue`),Kc(4126,`br`),ug()()(),Ac(4127,`td`,21)(4128,`code`,27),vN(4129,`string `),ug(),Ac(4130,`code`,45),vN(4131,` number`),ug()(),Ac(4132,`td`,24)(4133,`em`)(4134,`strong`),vN(4135,`(opcional)`),ug()(),Ac(4136,`p`),vN(4137,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(4138,`em`),vN(4139,`number`),ug(),vN(4140,`, `),Ac(4141,`em`),vN(4142,`date`),ug(),vN(4143,`, `),Ac(4144,`em`),vN(4145,`dateTime`),ug(),vN(4146,` ou `),Ac(4147,`em`),vN(4148,`time`),ug(),vN(4149,`.`),ug(),Ac(4150,`blockquote`)(4151,`p`),vN(4152,`Para `),Ac(4153,`code`),vN(4154,`po-timepicker`),ug(),vN(4155,`, o valor deve estar no formato `),Ac(4156,`code`),vN(4157,`HH:mm`),ug(),vN(4158,` ou `),Ac(4159,`code`),vN(4160,`HH:mm:ss`),ug(),vN(4161,`.`),ug()(),Ac(4162,`p`)(4163,`strong`),vN(4164,`Componentes compatíveis:`),ug(),Ac(4165,`code`),vN(4166,`po-datepicker`),ug(),vN(4167,`, `),Ac(4168,`code`),vN(4169,`po-datepicker-range`),ug(),vN(4170,`, `),Ac(4171,`code`),vN(4172,`po-number`),ug(),vN(4173,`, `),Ac(4174,`code`),vN(4175,`po-decimal`),ug(),vN(4176,`, `),Ac(4177,`code`),vN(4178,`po-timepicker`),ug()()()(),Ac(4179,`tr`,16)(4180,`td`,17)(4181,`div`,25)(4182,`span`,26),vN(4183,` minuteInterval`),Kc(4184,`br`),ug()()(),Ac(4185,`td`,21)(4186,`code`,45),vN(4187,`number`),ug()(),Ac(4188,`td`,24)(4189,`em`)(4190,`strong`),vN(4191,`(opcional)`),ug()(),Ac(4192,`p`),vN(4193,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),ug()()(),Ac(4194,`tr`,16)(4195,`td`,17)(4196,`div`,25)(4197,`span`,26),vN(4198,` mode`),Kc(4199,`br`),ug()()(),Ac(4200,`td`,21)(4201,`code`,68),vN(4202,`'month-year' `),ug(),Ac(4203,`code`,69),vN(4204,` 'year'`),ug()(),Ac(4205,`td`,24)(4206,`em`)(4207,`strong`),vN(4208,`(opcional)`),ug()(),Ac(4209,`p`),vN(4210,`Define o modo de seleção do `),Ac(4211,`code`),vN(4212,`po-datepicker`),ug(),vN(4213,`.`),ug(),Ac(4214,`p`),vN(4215,`Valores aceitos:`),ug(),Ac(4216,`ul`)(4217,`li`)(4218,`code`),vN(4219,`'month-year'`),ug(),vN(4220,`: exibe seleção de mês e ano (formato `),Ac(4221,`code`),vN(4222,`MM/YYYY`),ug(),vN(4223,`)`),ug(),Ac(4224,`li`)(4225,`code`),vN(4226,`'year'`),ug(),vN(4227,`: exibe seleção apenas de ano (formato `),Ac(4228,`code`),vN(4229,`YYYY`),ug(),vN(4230,`)`),ug()(),Ac(4231,`p`)(4232,`strong`),vN(4233,`Componente compatível:`),ug(),Ac(4234,`code`),vN(4235,`po-datepicker`),ug()()()(),Ac(4236,`tr`,16)(4237,`td`,17)(4238,`div`,25)(4239,`span`,26),vN(4240,` modelFormat`),Kc(4241,`br`),ug()()(),Ac(4242,`td`,21)(4243,`code`,70),vN(4244,`PoTimepickerModelFormat`),ug()(),Ac(4245,`td`,24)(4246,`em`)(4247,`strong`),vN(4248,`(opcional)`),ug()(),Ac(4249,`p`),vN(4250,`Define o formato do valor do horário a ser utilizado no model do `),Ac(4251,`code`),vN(4252,`po-timepicker`),ug(),vN(4253,`.`),ug(),Ac(4254,`blockquote`)(4255,`p`),vN(4256,`Veja os valores válidos no `),Ac(4257,`code`),vN(4258,`PoTimepickerModelFormat`),ug(),vN(4259,`.`),ug()(),Ac(4260,`p`)(4261,`strong`),vN(4262,`Componente compatível:`),ug(),Ac(4263,`code`),vN(4264,`po-timepicker`),ug()()()(),Ac(4265,`tr`,16)(4266,`td`,17)(4267,`div`,25)(4268,`span`,26),vN(4269,` multiple`),Kc(4270,`br`),ug()()(),Ac(4271,`td`,21)(4272,`code`,29),vN(4273,`boolean`),ug()(),Ac(4274,`td`,24)(4275,`em`)(4276,`strong`),vN(4277,`(opcional)`),ug()(),Ac(4278,`p`),vN(4279,`Permite a seleção de múltiplos itens.`),ug(),Ac(4280,`p`)(4281,`strong`),vN(4282,`Componentes compatíveis:`),ug(),Ac(4283,`code`),vN(4284,`po-lookup`),ug(),vN(4285,`, `),Ac(4286,`code`),vN(4287,`po-upload`),ug()()()(),Ac(4288,`tr`,16)(4289,`td`,17)(4290,`div`,25)(4291,`span`,26),vN(4292,` noAutocomplete`),Kc(4293,`br`),ug()()(),Ac(4294,`td`,21)(4295,`code`,29),vN(4296,`boolean`),ug()(),Ac(4297,`td`,24)(4298,`em`)(4299,`strong`),vN(4300,`(opcional)`),ug()(),Ac(4301,`p`),vN(4302,`Define a propriedade nativa `),Ac(4303,`code`),vN(4304,`autocomplete`),ug(),vN(4305,` do campo como off.`),ug(),Ac(4306,`p`)(4307,`strong`),vN(4308,`Componentes compatíveis:`),ug(),Ac(4309,`code`),vN(4310,`po-datepicker`),ug(),vN(4311,`, `),Ac(4312,`code`),vN(4313,`po-datepicker-range`),ug(),vN(4314,`, `),Ac(4315,`code`),vN(4316,`po-input`),ug(),vN(4317,`, `),Ac(4318,`code`),vN(4319,`po-number`),ug(),vN(4320,`, `),Ac(4321,`code`),vN(4322,`po-decimal`),ug(),vN(4323,`,
`),Ac(4324,`code`),vN(4325,`po-lookup`),ug(),vN(4326,`, `),Ac(4327,`code`),vN(4328,`po-password`),ug(),vN(4329,`, `),Ac(4330,`code`),vN(4331,`po-timepicker`),ug(),vN(4332,`.`),ug()()(),Ac(4333,`tr`,16)(4334,`td`,17)(4335,`div`,25)(4336,`span`,26),vN(4337,` offsetColumns`),Kc(4338,`br`),ug()()(),Ac(4339,`td`,21)(4340,`code`,45),vN(4341,`number`),ug()(),Ac(4342,`td`,24)(4343,`em`)(4344,`strong`),vN(4345,`(opcional)`),ug()(),Ac(4346,`p`),vN(4347,`Tamanho do espaço de exibição do campo em telas.`),ug(),Ac(4348,`p`),vN(4349,`Deve ser usado o sistema de `),Ac(4350,`strong`),vN(4351,`grid`),ug(),vN(4352,` do PO (1 ... 12 colunas).`),ug(),Ac(4353,`blockquote`)(4354,`p`),vN(4355,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(4356,`tr`,16)(4357,`td`,17)(4358,`div`,25)(4359,`span`,26),vN(4360,` offsetLgColumns`),Kc(4361,`br`),ug()()(),Ac(4362,`td`,21)(4363,`code`,45),vN(4364,`number`),ug()(),Ac(4365,`td`,24)(4366,`em`)(4367,`strong`),vN(4368,`(opcional)`),ug()(),Ac(4369,`p`),vN(4370,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ug(),Ac(4371,`p`),vN(4372,`Deve ser usado o sistema de `),Ac(4373,`strong`),vN(4374,`grid`),ug(),vN(4375,` do PO (1 ... 12 colunas).`),ug(),Ac(4376,`blockquote`)(4377,`p`),vN(4378,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4379,`code`),vN(4380,`offsetColumns`),ug(),vN(4381,`.`),ug()()()(),Ac(4382,`tr`,16)(4383,`td`,17)(4384,`div`,25)(4385,`span`,26),vN(4386,` offsetMdColumns`),Kc(4387,`br`),ug()()(),Ac(4388,`td`,21)(4389,`code`,45),vN(4390,`number`),ug()(),Ac(4391,`td`,24)(4392,`em`)(4393,`strong`),vN(4394,`(opcional)`),ug()(),Ac(4395,`p`),vN(4396,`Tamanho do espaço de exibição do campo em telas médias (md).`),ug(),Ac(4397,`p`),vN(4398,`Deve ser usado o sistema de `),Ac(4399,`strong`),vN(4400,`grid`),ug(),vN(4401,` do PO (1 ... 12 colunas).`),ug(),Ac(4402,`blockquote`)(4403,`p`),vN(4404,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4405,`code`),vN(4406,`offsetColumns`),ug(),vN(4407,`.`),ug()()()(),Ac(4408,`tr`,16)(4409,`td`,17)(4410,`div`,25)(4411,`span`,26),vN(4412,` offsetSmColumns`),Kc(4413,`br`),ug()()(),Ac(4414,`td`,21)(4415,`code`,45),vN(4416,`number`),ug()(),Ac(4417,`td`,24)(4418,`em`)(4419,`strong`),vN(4420,`(opcional)`),ug()(),Ac(4421,`p`),vN(4422,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ug(),Ac(4423,`p`),vN(4424,`Deve ser usado o sistema de `),Ac(4425,`strong`),vN(4426,`grid`),ug(),vN(4427,` do PO (1 ... 12 colunas).`),ug(),Ac(4428,`blockquote`)(4429,`p`),vN(4430,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4431,`code`),vN(4432,`offsetColumns`),ug(),vN(4433,`.`),ug()()()(),Ac(4434,`tr`,16)(4435,`td`,17)(4436,`div`,25)(4437,`span`,26),vN(4438,` offsetXlColumns`),Kc(4439,`br`),ug()()(),Ac(4440,`td`,21)(4441,`code`,45),vN(4442,`number`),ug()(),Ac(4443,`td`,24)(4444,`em`)(4445,`strong`),vN(4446,`(opcional)`),ug()(),Ac(4447,`p`),vN(4448,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ug(),Ac(4449,`p`),vN(4450,`Deve ser usado o sistema de `),Ac(4451,`strong`),vN(4452,`grid`),ug(),vN(4453,` do PO (1 ... 12 colunas).`),ug(),Ac(4454,`blockquote`)(4455,`p`),vN(4456,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(4457,`code`),vN(4458,`offsetColumns`),ug(),vN(4459,`.`),ug()()()(),Ac(4460,`tr`,16)(4461,`td`,17)(4462,`div`,25)(4463,`span`,26),vN(4464,` onError`),Kc(4465,`br`),ug()()(),Ac(4466,`td`,21)(4467,`code`,44),vN(4468,`Function`),ug()(),Ac(4469,`td`,24)(4470,`em`)(4471,`strong`),vN(4472,`(opcional)`),ug()(),Ac(4473,`p`),vN(4474,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ug(),Ac(4475,`blockquote`)(4476,`p`),vN(4477,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(4478,`code`),vN(4479,`HttpErrorResponse`),ug(),vN(4480,`.`),ug()(),Ac(4481,`p`)(4482,`strong`),vN(4483,`Componente compatível`),ug(),vN(4484,`: `),Ac(4485,`code`),vN(4486,`po-upload`),ug()()()(),Ac(4487,`tr`,16)(4488,`td`,17)(4489,`div`,25)(4490,`span`,26),vN(4491,` onSuccess`),Kc(4492,`br`),ug()()(),Ac(4493,`td`,21)(4494,`code`,44),vN(4495,`Function`),ug()(),Ac(4496,`td`,24)(4497,`em`)(4498,`strong`),vN(4499,`(opcional)`),ug()(),Ac(4500,`p`),vN(4501,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ug(),Ac(4502,`blockquote`)(4503,`p`),vN(4504,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(4505,`code`),vN(4506,`HttpResponse`),ug(),vN(4507,`.`),ug()(),Ac(4508,`p`)(4509,`strong`),vN(4510,`Componente compatível`),ug(),vN(4511,`: `),Ac(4512,`code`),vN(4513,`po-upload`),ug()()()(),Ac(4514,`tr`,16)(4515,`td`,17)(4516,`div`,25)(4517,`span`,26),vN(4518,` onUpload`),Kc(4519,`br`),ug()()(),Ac(4520,`td`,21)(4521,`code`,44),vN(4522,`Function`),ug()(),Ac(4523,`td`,24)(4524,`em`)(4525,`strong`),vN(4526,`(opcional)`),ug()(),Ac(4527,`p`),vN(4528,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ug(),Ac(4529,`pre`)(4530,`code`),vN(4531,`event.data = {id: 'id do usu\xE1rio'};
`),ug()(),Ac(4532,`p`)(4533,`strong`),vN(4534,`Componente compatível`),ug(),vN(4535,`: `),Ac(4536,`code`),vN(4537,`po-upload`),ug()()()(),Ac(4538,`tr`,16)(4539,`td`,17)(4540,`div`,25)(4541,`span`,26),vN(4542,` optional`),Kc(4543,`br`),ug()()(),Ac(4544,`td`,21)(4545,`code`,29),vN(4546,`boolean`),ug()(),Ac(4547,`td`,24)(4548,`em`)(4549,`strong`),vN(4550,`(opcional)`),ug()(),Ac(4551,`p`),vN(4552,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(4553,`blockquote`)(4554,`p`),vN(4555,`A indicação não será exibida, se:`),ug()(),Ac(4556,`ul`)(4557,`li`),vN(4558,`O campo for `),Ac(4559,`code`),vN(4560,`required`),ug(),vN(4561,`, ou;`),ug(),Ac(4562,`li`),vN(4563,`Não possuir `),Ac(4564,`code`),vN(4565,`help`),ug(),vN(4566,` e `),Ac(4567,`code`),vN(4568,`label`),ug(),vN(4569,`.`),ug()(),Ac(4570,`p`)(4571,`strong`),vN(4572,`Componentes compatíveis:`),ug(),Ac(4573,`code`),vN(4574,`po-datepicker`),ug(),vN(4575,`, `),Ac(4576,`code`),vN(4577,`po-datepicker-range`),ug(),vN(4578,`, `),Ac(4579,`code`),vN(4580,`po-timepicker`),ug(),vN(4581,`, `),Ac(4582,`code`),vN(4583,`po-input`),ug(),vN(4584,`, `),Ac(4585,`code`),vN(4586,`po-number`),ug(),vN(4587,`,
`),Ac(4588,`code`),vN(4589,`po-decimal`),ug(),vN(4590,`, `),Ac(4591,`code`),vN(4592,`po-select`),ug(),vN(4593,`, `),Ac(4594,`code`),vN(4595,`po-radio-group`),ug(),vN(4596,`, `),Ac(4597,`code`),vN(4598,`po-combo`),ug(),vN(4599,`, `),Ac(4600,`code`),vN(4601,`po-lookup`),ug(),vN(4602,`, `),Ac(4603,`code`),vN(4604,`po-checkbox-group`),ug(),vN(4605,`, `),Ac(4606,`code`),vN(4607,`po-multiselect`),ug(),vN(4608,`,
`),Ac(4609,`code`),vN(4610,`po-textarea`),ug(),vN(4611,`, `),Ac(4612,`code`),vN(4613,`po-password`),ug(),vN(4614,`.`),ug()()(),Ac(4615,`tr`,16)(4616,`td`,17)(4617,`div`,25)(4618,`span`,26),vN(4619,` options`),Kc(4620,`br`),ug()()(),Ac(4621,`td`,21)(4622,`code`,32),vN(4623,`Array<string> `),ug(),Ac(4624,`code`,71),vN(4625,` Array<PoSelectOption> `),ug(),Ac(4626,`code`,72),vN(4627,` Array<PoMultiselectOption> `),ug(),Ac(4628,`code`,73),vN(4629,` Array<PoCheckboxGroupOption> `),ug(),Ac(4630,`code`,74),vN(4631,` Array<any>`),ug()(),Ac(4632,`td`,24)(4633,`em`)(4634,`strong`),vN(4635,`(opcional)`),ug()(),Ac(4636,`p`),vN(4637,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),ug(),Ac(4638,`p`)(4639,`strong`),vN(4640,`Componentes compatíveis:`),ug(),Ac(4641,`code`),vN(4642,`po-select`),ug(),vN(4643,`, `),Ac(4644,`code`),vN(4645,`po-radio-group`),ug(),vN(4646,`, `),Ac(4647,`code`),vN(4648,`po-checkbox-group`),ug(),vN(4649,`, `),Ac(4650,`code`),vN(4651,`po-multiselect`),ug(),vN(4652,`.`),ug()()(),Ac(4653,`tr`,16)(4654,`td`,17)(4655,`div`,25)(4656,`span`,26),vN(4657,` optionsMulti`),Kc(4658,`br`),ug()()(),Ac(4659,`td`,21)(4660,`code`,29),vN(4661,`boolean`),ug()(),Ac(4662,`td`,24)(4663,`em`)(4664,`strong`),vN(4665,`(opcional)`),ug()(),Ac(4666,`p`),vN(4667,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),ug()()(),Ac(4668,`tr`,16)(4669,`td`,17)(4670,`div`,25)(4671,`span`,26),vN(4672,` optionsService`),Kc(4673,`br`),ug()()(),Ac(4674,`td`,21)(4675,`code`,27),vN(4676,`string `),ug(),Ac(4677,`code`,75),vN(4678,` PoComboFilter `),ug(),Ac(4679,`code`,76),vN(4680,` PoMultiselectFilter`),ug()(),Ac(4681,`td`,24)(4682,`em`)(4683,`strong`),vN(4684,`(opcional)`),ug()(),Ac(4685,`p`),vN(4686,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ac(4687,`strong`),vN(4688,`Importante`),ug()(),Ac(4689,`blockquote`)(4690,`p`),vN(4691,`Para que funcione corretamente, é importante que o serviço siga o `),Ac(4692,`a`,7),vN(4693,`guia de API do PO UI`),ug(),vN(4694,`.`),ug()()()(),Ac(4695,`tr`,16)(4696,`td`,17)(4697,`div`,25)(4698,`span`,26),vN(4699,` order`),Kc(4700,`br`),ug()()(),Ac(4701,`td`,21)(4702,`code`,45),vN(4703,`number`),ug()(),Ac(4704,`td`,24)(4705,`em`)(4706,`strong`),vN(4707,`(opcional)`),ug()(),Ac(4708,`p`),vN(4709,`Informa a ordem de exibição do campo.`),ug(),Ac(4710,`p`),vN(4711,`Exemplo de utilização:`),ug(),Ac(4712,`p`)(4713,`code`),vN(4714,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),ug()(),Ac(4715,`p`),vN(4716,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Ac(4717,`code`),vN(4718,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),ug()(),Ac(4719,`p`),vN(4720,`Só serão aceitos valores com números inteiros maiores do que zero.`),ug(),Ac(4721,`p`),vN(4722,`Campos sem `),Ac(4723,`code`),vN(4724,`order`),ug(),vN(4725,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ug()()(),Ac(4726,`tr`,16)(4727,`td`,17)(4728,`div`,25)(4729,`span`,26),vN(4730,` params`),Kc(4731,`br`),ug()()(),Ac(4732,`td`,21)(4733,`code`,33),vN(4734,`any`),ug()(),Ac(4735,`td`,24)(4736,`em`)(4737,`strong`),vN(4738,`(opcional)`),ug()(),Ac(4739,`p`),vN(4740,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Ac(4741,`code`),vN(4742,`po-lookup`),ug(),vN(4743,` e
`),Ac(4744,`code`),vN(4745,`po-combo`),ug(),vN(4746,`.`),ug(),Ac(4747,`p`),vN(4748,`Por exemplo, para o parâmetro `),Ac(4749,`code`),vN(4750,`{ age: 23 }`),ug(),vN(4751,` a URL da requisição ficaria:`),ug(),Ac(4752,`p`)(4753,`code`),vN(4754,`url + ?age=23&filter=Peter`),ug()()()(),Ac(4755,`tr`,16)(4756,`td`,17)(4757,`div`,25)(4758,`span`,26),vN(4759,` pattern`),Kc(4760,`br`),ug()()(),Ac(4761,`td`,21)(4762,`code`,27),vN(4763,`string`),ug()(),Ac(4764,`td`,24)(4765,`em`)(4766,`strong`),vN(4767,`(opcional)`),ug()(),Ac(4768,`p`),vN(4769,`Regex para validação do campo.`),ug(),Ac(4770,`p`)(4771,`strong`),vN(4772,`Componentes compatíveis:`),ug(),Ac(4773,`code`),vN(4774,`po-input`),ug(),vN(4775,`, `),Ac(4776,`code`),vN(4777,`po-password`),ug(),vN(4778,`.`),ug(),Ac(4779,`blockquote`)(4780,`p`),vN(4781,`Incompatível com `),Ac(4782,`code`),vN(4783,`po-decimal`),ug(),vN(4784,`.`),ug()()()(),Ac(4785,`tr`,16)(4786,`td`,17)(4787,`div`,25)(4788,`span`,26),vN(4789,` placeholder`),Kc(4790,`br`),ug()()(),Ac(4791,`td`,21)(4792,`code`,27),vN(4793,`string`),ug()(),Ac(4794,`td`,24)(4795,`em`)(4796,`strong`),vN(4797,`(opcional)`),ug()(),Ac(4798,`p`),vN(4799,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),ug(),Ac(4800,`p`)(4801,`strong`),vN(4802,`Componentes compatíveis:`),ug(),Ac(4803,`code`),vN(4804,`po-datepicker`),ug(),vN(4805,`, `),Ac(4806,`code`),vN(4807,`po-datepicker-range`),ug(),vN(4808,`, `),Ac(4809,`code`),vN(4810,`po-timepicker`),ug(),vN(4811,`, `),Ac(4812,`code`),vN(4813,`po-input`),ug(),vN(4814,`, `),Ac(4815,`code`),vN(4816,`po-number`),ug(),vN(4817,`, `),Ac(4818,`code`),vN(4819,`po-decimal`),ug(),vN(4820,`, `),Ac(4821,`code`),vN(4822,`po-select`),ug(),vN(4823,`, `),Ac(4824,`code`),vN(4825,`po-combo`),ug(),vN(4826,`, `),Ac(4827,`code`),vN(4828,`po-lookup`),ug(),vN(4829,`, `),Ac(4830,`code`),vN(4831,`po-multiselect`),ug(),vN(4832,`, `),Ac(4833,`code`),vN(4834,`po-textarea`),ug(),vN(4835,`, `),Ac(4836,`code`),vN(4837,`po-password`),ug(),vN(4838,`.`),ug()()(),Ac(4839,`tr`,16)(4840,`td`,17)(4841,`div`,25)(4842,`span`,26),vN(4843,` placeholderSearch`),Kc(4844,`br`),ug()()(),Ac(4845,`td`,21)(4846,`code`,27),vN(4847,`string`),ug()(),Ac(4848,`td`,24)(4849,`em`)(4850,`strong`),vN(4851,`(opcional)`),ug()(),Ac(4852,`p`),vN(4853,`Placeholder do campo de pesquisa do `),Ac(4854,`code`),vN(4855,`po-multiselect`),ug(),vN(4856,`.`),ug(),Ac(4857,`blockquote`)(4858,`p`),vN(4859,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ug()()()(),Ac(4860,`tr`,16)(4861,`td`,17)(4862,`div`,25)(4863,`span`,26),vN(4864,` property`),Kc(4865,`br`),ug()()(),Ac(4866,`td`,21)(4867,`code`,27),vN(4868,`string`),ug()(),Ac(4869,`td`,24)(4870,`p`),vN(4871,`Nome de referência do campo.`),ug()()(),Ac(4872,`tr`,16)(4873,`td`,17)(4874,`div`,25)(4875,`span`,26),vN(4876,` range`),Kc(4877,`br`),ug()()(),Ac(4878,`td`,21)(4879,`code`,29),vN(4880,`boolean`),ug()(),Ac(4881,`td`,24)(4882,`em`)(4883,`strong`),vN(4884,`(opcional)`),ug()(),Ac(4885,`p`),vN(4886,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),ug(),Ac(4887,`blockquote`)(4888,`p`),vN(4889,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),ug()()()(),Ac(4890,`tr`,16)(4891,`td`,17)(4892,`div`,25)(4893,`span`,26),vN(4894,` rangePresetOptions`),Kc(4895,`br`),ug()()(),Ac(4896,`td`,21)(4897,`code`,77),vN(4898,`Array<PoCalendarRangePreset>`),ug()(),Ac(4899,`td`,24)(4900,`em`)(4901,`strong`),vN(4902,`(opcional)`),ug()(),Ac(4903,`p`),vN(4904,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),ug(),Ac(4905,`p`),vN(4906,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Ac(4907,`code`),vN(4908,`PoCalendarRangePreset`),ug(),vN(4909,`.`),ug(),Ac(4910,`p`)(4911,`strong`),vN(4912,`Componente compatível:`),ug(),Ac(4913,`code`),vN(4914,`po-datepicker-range`),ug()()()(),Ac(4915,`tr`,16)(4916,`td`,17)(4917,`div`,25)(4918,`span`,26),vN(4919,` rangePresets`),Kc(4920,`br`),ug()()(),Ac(4921,`td`,21)(4922,`code`,29),vN(4923,`boolean `),ug(),Ac(4924,`code`,32),vN(4925,` Array<string>`),ug()(),Ac(4926,`td`,24)(4927,`em`)(4928,`strong`),vN(4929,`(opcional)`),ug()(),Ac(4930,`p`),vN(4931,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),ug(),Ac(4932,`p`),vN(4933,`Aceita os seguintes valores:`),ug(),Ac(4934,`ul`)(4935,`li`)(4936,`code`),vN(4937,`true`),ug(),vN(4938,`: exibe todos os presets padrão.`),ug(),Ac(4939,`li`)(4940,`code`),vN(4941,`false`),ug(),vN(4942,`: não exibe os presets padrão.`),ug(),Ac(4943,`li`)(4944,`code`),vN(4945,`Array<string>`),ug(),vN(4946,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),ug()(),Ac(4947,`p`)(4948,`strong`),vN(4949,`Componente compatível:`),ug(),Ac(4950,`code`),vN(4951,`po-datepicker-range`),ug()()()(),Ac(4952,`tr`,16)(4953,`td`,17)(4954,`div`,25)(4955,`span`,26),vN(4956,` rangePresetsOrder`),Kc(4957,`br`),ug()()(),Ac(4958,`td`,21)(4959,`code`,78),vN(4960,`'asc' `),ug(),Ac(4961,`code`,79),vN(4962,` 'desc'`),ug()(),Ac(4963,`td`,24)(4964,`em`)(4965,`strong`),vN(4966,`(opcional)`),ug()(),Ac(4967,`p`),vN(4968,`Define a ordenação dos presets na lista.`),ug(),Ac(4969,`p`),vN(4970,`Valores aceitos:`),ug(),Ac(4971,`ul`)(4972,`li`)(4973,`code`),vN(4974,`'asc'`),ug(),vN(4975,`: ordenação crescente (passado → futuro)`),ug(),Ac(4976,`li`)(4977,`code`),vN(4978,`'desc'`),ug(),vN(4979,`: ordenação decrescente (futuro → passado)`),ug()(),Ac(4980,`p`)(4981,`strong`),vN(4982,`Componente compatível:`),ug(),Ac(4983,`code`),vN(4984,`po-datepicker-range`),ug()()()(),Ac(4985,`tr`,16)(4986,`td`,17)(4987,`div`,25)(4988,`span`,26),vN(4989,` readonly`),Kc(4990,`br`),ug()()(),Ac(4991,`td`,21)(4992,`code`,29),vN(4993,`boolean`),ug()(),Ac(4994,`td`,24)(4995,`em`)(4996,`strong`),vN(4997,`(opcional)`),ug()(),Ac(4998,`p`),vN(4999,`Indica que o campo será somente leitura.`),ug(),Ac(5e3,`p`)(5001,`strong`),vN(5002,`Componentes compatíveis:`),ug(),Ac(5003,`code`),vN(5004,`po-datepicker`),ug(),vN(5005,`, `),Ac(5006,`code`),vN(5007,`po-datepicker-range`),ug(),vN(5008,`, `),Ac(5009,`code`),vN(5010,`po-timepicker`),ug(),vN(5011,`, `),Ac(5012,`code`),vN(5013,`po-input`),ug(),vN(5014,`, `),Ac(5015,`code`),vN(5016,`po-number`),ug(),vN(5017,`,
`),Ac(5018,`code`),vN(5019,`po-decimal`),ug(),vN(5020,`, `),Ac(5021,`code`),vN(5022,`po-select`),ug(),vN(5023,`, `),Ac(5024,`code`),vN(5025,`po-textarea`),ug(),vN(5026,`, `),Ac(5027,`code`),vN(5028,`po-password`),ug(),vN(5029,`.`),ug()()(),Ac(5030,`tr`,16)(5031,`td`,17)(5032,`div`,25)(5033,`span`,26),vN(5034,` removeInitialFilter`),Kc(5035,`br`),ug()()(),Ac(5036,`td`,21)(5037,`code`,29),vN(5038,`boolean`),ug()(),Ac(5039,`td`,24)(5040,`em`)(5041,`strong`),vN(5042,`(opcional)`),ug()(),Ac(5043,`p`),vN(5044,`Define que o filtro no primeiro clique será removido.`),ug(),Ac(5045,`blockquote`)(5046,`p`),vN(5047,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ug()(),Ac(5048,`p`)(5049,`strong`),vN(5050,`Componente compatível`),ug(),vN(5051,`: `),Ac(5052,`code`),vN(5053,`po-combo`),ug()()()(),Ac(5054,`tr`,16)(5055,`td`,17)(5056,`div`,25)(5057,`span`,26),vN(5058,` required`),Kc(5059,`br`),ug()()(),Ac(5060,`td`,21)(5061,`code`,29),vN(5062,`boolean`),ug()(),Ac(5063,`td`,24)(5064,`em`)(5065,`strong`),vN(5066,`(opcional)`),ug()(),Ac(5067,`p`),vN(5068,`Define a obrigatoriedade do campo.`),ug(),Ac(5069,`p`)(5070,`strong`),vN(5071,`Componentes compatíveis:`),ug(),Ac(5072,`code`),vN(5073,`po-datepicker`),ug(),vN(5074,`, `),Ac(5075,`code`),vN(5076,`po-datepicker-range`),ug(),vN(5077,`, `),Ac(5078,`code`),vN(5079,`po-timepicker`),ug(),vN(5080,`, `),Ac(5081,`code`),vN(5082,`po-input`),ug(),vN(5083,`, `),Ac(5084,`code`),vN(5085,`po-number`),ug(),vN(5086,`,
`),Ac(5087,`code`),vN(5088,`po-decimal`),ug(),vN(5089,`, `),Ac(5090,`code`),vN(5091,`po-select`),ug(),vN(5092,`, `),Ac(5093,`code`),vN(5094,`po-radio-group`),ug(),vN(5095,`, `),Ac(5096,`code`),vN(5097,`po-combo`),ug(),vN(5098,`, `),Ac(5099,`code`),vN(5100,`po-lookup`),ug(),vN(5101,`, `),Ac(5102,`code`),vN(5103,`po-checkbox-group`),ug(),vN(5104,`, `),Ac(5105,`code`),vN(5106,`po-multiselect`),ug(),vN(5107,`,
`),Ac(5108,`code`),vN(5109,`po-textarea`),ug(),vN(5110,`, `),Ac(5111,`code`),vN(5112,"po-password``, "),ug(),vN(5113,"po-upload`."),ug()()(),Ac(5114,`tr`,16)(5115,`td`,17)(5116,`div`,25)(5117,`span`,26),vN(5118,` requiredFieldErrorMessage`),Kc(5119,`br`),ug()()(),Ac(5120,`td`,21)(5121,`code`,29),vN(5122,`boolean`),ug()(),Ac(5123,`td`,24)(5124,`em`)(5125,`strong`),vN(5126,`(opcional)`),ug()(),Ac(5127,`p`),vN(5128,`Exibe a mensagem setada na propriedade `),Ac(5129,`code`),vN(5130,`errorMessage`),ug(),vN(5131,` se o campo estiver vazio e for requerido.`),ug(),Ac(5132,`blockquote`)(5133,`p`),vN(5134,`Necessário que a propriedade `),Ac(5135,`code`),vN(5136,`required`),ug(),vN(5137,` esteja habilitada.`),ug()(),Ac(5138,`p`)(5139,`strong`),vN(5140,`Componentes compatíveis:`),ug(),Ac(5141,`code`),vN(5142,`po-datepicker`),ug(),vN(5143,`, `),Ac(5144,`code`),vN(5145,`po-timepicker`),ug(),vN(5146,`, `),Ac(5147,`code`),vN(5148,`po-input`),ug(),vN(5149,`, `),Ac(5150,`code`),vN(5151,`po-number`),ug(),vN(5152,`, `),Ac(5153,`code`),vN(5154,`po-decimal`),ug(),vN(5155,`, `),Ac(5156,`code`),vN(5157,`po-password`),ug(),vN(5158,`.`),ug()()(),Ac(5159,`tr`,16)(5160,`td`,17)(5161,`div`,25)(5162,`span`,26),vN(5163,` restrictions`),Kc(5164,`br`),ug()()(),Ac(5165,`td`,21)(5166,`code`,80),vN(5167,`PoUploadFileRestrictions`),ug()(),Ac(5168,`td`,24)(5169,`em`)(5170,`strong`),vN(5171,`(opcional)`),ug()(),Ac(5172,`p`),vN(5173,`Objeto que segue a definição da interface `),Ac(5174,`code`),vN(5175,`PoUploadFileRestrictions`),ug(),vN(5176,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ug(),Ac(5177,`p`)(5178,`strong`),vN(5179,`Componente compatível`),ug(),vN(5180,`: `),Ac(5181,`code`),vN(5182,`po-upload`),ug()()()(),Ac(5183,`tr`,16)(5184,`td`,17)(5185,`div`,25)(5186,`span`,26),vN(5187,` rows`),Kc(5188,`br`),ug()()(),Ac(5189,`td`,21)(5190,`code`,45),vN(5191,`number`),ug()(),Ac(5192,`td`,24)(5193,`em`)(5194,`strong`),vN(5195,`(opcional)`),ug()(),Ac(5196,`p`),vN(5197,`Quantidade de linhas exibidas no `),Ac(5198,`code`),vN(5199,`po-textarea`),ug(),vN(5200,`.`),ug()()(),Ac(5201,`tr`,16)(5202,`td`,17)(5203,`div`,25)(5204,`span`,26),vN(5205,` searchService`),Kc(5206,`br`),ug()()(),Ac(5207,`td`,21)(5208,`code`,27),vN(5209,`string `),ug(),Ac(5210,`code`,34),vN(5211,` PoLookupFilter`),ug()(),Ac(5212,`td`,24)(5213,`em`)(5214,`strong`),vN(5215,`(opcional)`),ug()(),Ac(5216,`p`),vN(5217,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Ac(5218,`code`),vN(5219,`columns`),ug(),vN(5220,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Ac(5221,`strong`),vN(5222,`Importante:`),ug()(),Ac(5223,`blockquote`)(5224,`p`),vN(5225,`Caso utilizar a propriedade `),Ac(5226,`code`),vN(5227,`optionsService`),ug(),vN(5228,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ac(5229,`a`,7),vN(5230,`guia de API do PO UI`),ug(),vN(5231,`.`),ug()()()(),Ac(5232,`tr`,16)(5233,`td`,17)(5234,`div`,25)(5235,`span`,26),vN(5236,` secondInterval`),Kc(5237,`br`),ug()()(),Ac(5238,`td`,21)(5239,`code`,45),vN(5240,`number`),ug()(),Ac(5241,`td`,24)(5242,`em`)(5243,`strong`),vN(5244,`(opcional)`),ug()(),Ac(5245,`p`),vN(5246,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),ug()()(),Ac(5247,`tr`,16)(5248,`td`,17)(5249,`div`,25)(5250,`span`,26),vN(5251,` secret`),Kc(5252,`br`),ug()()(),Ac(5253,`td`,21)(5254,`code`,29),vN(5255,`boolean`),ug()(),Ac(5256,`td`,24)(5257,`em`)(5258,`strong`),vN(5259,`(opcional)`),ug()(),Ac(5260,`p`),vN(5261,`Esconde a informação estilo `),Ac(5262,`em`),vN(5263,`password`),ug(),vN(5264,`, pode ser utilizado quando o tipo de dado for `),Ac(5265,`em`),vN(5266,`string`),ug(),vN(5267,`.`),ug()()(),Ac(5268,`tr`,16)(5269,`td`,17)(5270,`div`,25)(5271,`span`,26),vN(5272,` showRequired`),Kc(5273,`br`),ug()()(),Ac(5274,`td`,21)(5275,`code`,29),vN(5276,`boolean`),ug()(),Ac(5277,`td`,24)(5278,`em`)(5279,`strong`),vN(5280,`(opcional)`),ug()(),Ac(5281,`p`),vN(5282,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(5283,`blockquote`)(5284,`p`),vN(5285,`Não será exibida a indicação se:`),ug()(),Ac(5286,`ul`)(5287,`li`),vN(5288,`Não possuir `),Ac(5289,`code`),vN(5290,`p-help`),ug(),vN(5291,` e/ou `),Ac(5292,`code`),vN(5293,`p-label`),ug(),vN(5294,`.`),ug()(),Ac(5295,`p`)(5296,`strong`),vN(5297,`Componentes compatíveis:`),ug(),Ac(5298,`code`),vN(5299,`po-datepicker`),ug(),vN(5300,`, `),Ac(5301,`code`),vN(5302,`po-datepicker-range`),ug(),vN(5303,`, `),Ac(5304,`code`),vN(5305,`po-timepicker`),ug(),vN(5306,`, `),Ac(5307,`code`),vN(5308,`po-input`),ug(),vN(5309,`, `),Ac(5310,`code`),vN(5311,`po-number`),ug(),vN(5312,`,
`),Ac(5313,`code`),vN(5314,`po-decimal`),ug(),vN(5315,`, `),Ac(5316,`code`),vN(5317,`po-select`),ug(),vN(5318,`, `),Ac(5319,`code`),vN(5320,`po-radio-group`),ug(),vN(5321,`, `),Ac(5322,`code`),vN(5323,`po-combo`),ug(),vN(5324,`, `),Ac(5325,`code`),vN(5326,`po-lookup`),ug(),vN(5327,`, `),Ac(5328,`code`),vN(5329,`po-checkbox-group`),ug(),vN(5330,`, `),Ac(5331,`code`),vN(5332,`po-multiselect`),ug(),vN(5333,`,
`),Ac(5334,`code`),vN(5335,`po-textarea`),ug(),vN(5336,`, `),Ac(5337,`code`),vN(5338,`po-password`),ug(),vN(5339,`, `),Ac(5340,`code`),vN(5341,`po-upload`),ug(),vN(5342,`.`),ug()()(),Ac(5343,`tr`,16)(5344,`td`,17)(5345,`div`,25)(5346,`span`,26),vN(5347,` showSeconds`),Kc(5348,`br`),ug()()(),Ac(5349,`td`,21)(5350,`code`,29),vN(5351,`boolean`),ug()(),Ac(5352,`td`,24)(5353,`em`)(5354,`strong`),vN(5355,`(opcional)`),ug()(),Ac(5356,`p`),vN(5357,`Exibe a coluna de segundos no painel do timepicker.`),ug()()(),Ac(5358,`tr`,16)(5359,`td`,17)(5360,`div`,25)(5361,`span`,26),vN(5362,` showThumbnail`),Kc(5363,`br`),ug()()(),Ac(5364,`td`,21)(5365,`code`,29),vN(5366,`boolean`),ug()(),Ac(5367,`td`,24)(5368,`em`)(5369,`strong`),vN(5370,`(opcional)`),ug()(),Ac(5371,`p`),vN(5372,`Exibe a pré-visualização de imagens ao anexá-las.`),ug(),Ac(5373,`blockquote`)(5374,`p`),vN(5375,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ac(5376,`code`),vN(5377,`.png`),ug(),vN(5378,`, `),Ac(5379,`code`),vN(5380,`.jpg`),ug(),vN(5381,`, `),Ac(5382,`code`),vN(5383,`.jpeg`),ug(),vN(5384,` e `),Ac(5385,`code`),vN(5386,`.gif`),ug(),vN(5387,`).`),ug()(),Ac(5388,`p`)(5389,`strong`),vN(5390,`Componente compatível`),ug(),vN(5391,`: `),Ac(5392,`code`),vN(5393,`po-upload`),ug()()()(),Ac(5394,`tr`,16)(5395,`td`,17)(5396,`div`,25)(5397,`span`,26),vN(5398,` size`),Kc(5399,`br`),ug()()(),Ac(5400,`td`,21)(5401,`code`,27),vN(5402,`string`),ug()(),Ac(5403,`td`,24)(5404,`em`)(5405,`strong`),vN(5406,`(opcional)`),ug()(),Ac(5407,`p`),vN(5408,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),ug(),Ac(5409,`ul`)(5410,`li`)(5411,`code`),vN(5412,`small`),ug(),vN(5413,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(5414,`li`)(5415,`code`),vN(5416,`medium`),ug(),vN(5417,`: aplica a medida medium de cada componente.`),ug(),Ac(5418,`li`)(5419,`code`),vN(5420,`large`),ug(),vN(5421,`: aplica a medida large de cada componente (disponível para `),Ac(5422,`code`),vN(5423,`po-checkbox`),ug(),vN(5424,` e `),Ac(5425,`code`),vN(5426,`po-radio-group`),ug(),vN(5427,`).`),Ac(5428,`blockquote`)(5429,`p`),vN(5430,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(5431,`code`),vN(5432,`medium`),ug(),vN(5433,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(5434,`a`,40),vN(5435,`po-theme`),ug(),vN(5436,`.`),ug()()()()()(),Ac(5437,`tr`,16)(5438,`td`,17)(5439,`div`,25)(5440,`span`,26),vN(5441,` sort`),Kc(5442,`br`),ug()()(),Ac(5443,`td`,21)(5444,`code`,29),vN(5445,`boolean`),ug()(),Ac(5446,`td`,24)(5447,`em`)(5448,`strong`),vN(5449,`(opcional)`),ug()(),Ac(5450,`p`),vN(5451,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ug(),Ac(5452,`p`)(5453,`strong`),vN(5454,`Componentes compatíveis:`),ug(),Ac(5455,`code`),vN(5456,`po-combo`),ug(),vN(5457,`, po-multiselect`),ug()()(),Ac(5458,`tr`,16)(5459,`td`,17)(5460,`div`,25)(5461,`span`,26),vN(5462,` step`),Kc(5463,`br`),ug()()(),Ac(5464,`td`,21)(5465,`code`,45),vN(5466,`number`),ug()(),Ac(5467,`td`,24)(5468,`em`)(5469,`strong`),vN(5470,`(opcional)`),ug()(),Ac(5471,`p`),vN(5472,`Intervalo utilizado no `),Ac(5473,`code`),vN(5474,`po-number`),ug(),vN(5475,`.`),ug()()(),Ac(5476,`tr`,16)(5477,`td`,17)(5478,`div`,25)(5479,`span`,26),vN(5480,` thousandMaxlength`),Kc(5481,`br`),ug()()(),Ac(5482,`td`,21)(5483,`code`,45),vN(5484,`number`),ug()(),Ac(5485,`td`,24)(5486,`em`)(5487,`strong`),vN(5488,`(opcional)`),ug()(),Ac(5489,`p`),vN(5490,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),ug(),Ac(5491,`blockquote`)(5492,`p`),vN(5493,`Esta propriedade só pode ser utilizada quando o `),Ac(5494,`code`),vN(5495,`type`),ug(),vN(5496,` for `),Ac(5497,`em`),vN(5498,`currency`),ug(),vN(5499,` ou `),Ac(5500,`em`),vN(5501,`decimal`),ug(),vN(5502,`.`),ug()(),Ac(5503,`blockquote`)(5504,`p`),vN(5505,`Quando utilizado com `),Ac(5506,`code`),vN(5507,`displayFormat`),ug(),vN(5508,`, será respeitado o valor `),Ac(5509,`strong`),vN(5510,`mais restritivo`),ug(),vN(5511,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),ug()()()(),Ac(5512,`tr`,16)(5513,`td`,17)(5514,`div`,25)(5515,`span`,26),vN(5516,` type`),Kc(5517,`br`),ug()()(),Ac(5518,`td`,21)(5519,`code`,27),vN(5520,`string `),ug(),Ac(5521,`code`,81),vN(5522,` PoDynamicFieldType`),ug()(),Ac(5523,`td`,24)(5524,`em`)(5525,`strong`),vN(5526,`(opcional)`),ug()(),Ac(5527,`p`),vN(5528,`Tipo do valor campo.`),ug(),Ac(5529,`p`),vN(5530,`Valores válidos:`),ug(),Ac(5531,`ul`)(5532,`li`)(5533,`code`),vN(5534,`boolean`),ug(),vN(5535,`: Valores `),Ac(5536,`em`),vN(5537,`booleanos`),ug(),vN(5538,`.`),ug(),Ac(5539,`li`)(5540,`code`),vN(5541,`currency`),ug(),vN(5542,`: Valores monetários.`),ug(),Ac(5543,`li`)(5544,`code`),vN(5545,`decimal`),ug(),vN(5546,`: Valores decimais.`),ug(),Ac(5547,`li`)(5548,`code`),vN(5549,`date`),ug(),vN(5550,`: Valores de datas.`),Ac(5551,`ul`)(5552,`li`),vN(5553,`Aceita os tipos `),Ac(5554,`strong`),vN(5555,`string`),ug(),vN(5556,` e `),Ac(5557,`strong`),vN(5558,`Date`),ug(),vN(5559,` padr\xE3o do Javascript,
por exemplo: `),Ac(5560,`code`),vN(5561,`'2017-11-28'`),ug(),vN(5562,` ou `),Ac(5563,`code`),vN(5564,`new Date(2017, 10, 28)`),ug(),vN(5565,`.`),ug()()(),Ac(5566,`li`)(5567,`code`),vN(5568,`dateTime`),ug(),vN(5569,`: Valor de data com horário.`),Ac(5570,`ul`)(5571,`li`),vN(5572,`Aceita o tipo `),Ac(5573,`em`),vN(5574,`string`),ug(),vN(5575,` no formato `),Ac(5576,`strong`),vN(5577,`ISO-8601`),ug(),vN(5578,` extendido `),Ac(5579,`strong`),vN(5580,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ug(),vN(5581,`
e o tipo `),Ac(5582,`strong`),vN(5583,`Date`),ug(),vN(5584,` padrão do Javascript, por exemplo: `),Ac(5585,`code`),vN(5586,`'2017-11-28T00:00:00-02:00'`),ug(),vN(5587,` ou `),Ac(5588,`code`),vN(5589,`new Date(2017, 10, 28)`),ug(),vN(5590,`.`),ug()()(),Ac(5591,`li`)(5592,`code`),vN(5593,`number`),ug(),vN(5594,`: Valores numéricos.`),ug(),Ac(5595,`li`)(5596,`code`),vN(5597,`string`),ug(),vN(5598,`: Textos.`),ug(),Ac(5599,`li`)(5600,`code`),vN(5601,`time`),ug(),vN(5602,`: Valor do horário.`),Ac(5603,`ul`)(5604,`li`),vN(5605,`Aceita o tipo `),Ac(5606,`strong`),vN(5607,`string`),ug(),vN(5608,` nos formatos `),Ac(5609,`strong`),vN(5610,`'HH:mm:ss'`),ug(),vN(5611,` ou `),Ac(5612,`strong`),vN(5613,`'HH:mm:ss.ffffff'`),ug(),vN(5614,`, por exemplo: `),Ac(5615,`code`),vN(5616,`'23:12:45'`),ug(),vN(5617,`.`),ug()()()()()(),Ac(5618,`tr`,16)(5619,`td`,17)(5620,`div`,25)(5621,`span`,26),vN(5622,` url`),Kc(5623,`br`),ug()()(),Ac(5624,`td`,21)(5625,`code`,27),vN(5626,`string`),ug()(),Ac(5627,`td`,24)(5628,`em`)(5629,`strong`),vN(5630,`(opcional)`),ug()(),Ac(5631,`p`),vN(5632,`URL que deve ser feita a requisição com os arquivos selecionados.`),ug(),Ac(5633,`p`)(5634,`strong`),vN(5635,`Componente compatível`),ug(),vN(5636,`: `),Ac(5637,`code`),vN(5638,`po-upload`),ug()()()(),Ac(5639,`tr`,16)(5640,`td`,17)(5641,`div`,25)(5642,`span`,26),vN(5643,` validate`),Kc(5644,`br`),ug()()(),Ac(5645,`td`,21)(5646,`code`,27),vN(5647,`string `),ug(),Ac(5648,`code`,44),vN(5649,` Function`),ug()(),Ac(5650,`td`,24)(5651,`em`)(5652,`strong`),vN(5653,`(opcional)`),ug()(),Ac(5654,`p`),vN(5655,`Função ou serviço para validar as `),Ac(5656,`strong`),vN(5657,`mudanças do campo`),ug(),vN(5658,`.`),ug(),Ac(5659,`ul`)(5660,`li`),vN(5661,`A propriedade aceita os seguintes tipos:`),ug()(),Ac(5662,`ul`)(5663,`li`)(5664,`strong`),vN(5665,`String`),ug(),vN(5666,`: Endpoint usado pelo componente para requisição via `),Ac(5667,`code`),vN(5668,`POST`),ug(),vN(5669,`.`),ug(),Ac(5670,`li`)(5671,`strong`),vN(5672,`Function`),ug(),vN(5673,`: Método que será executado.`),ug()(),Ac(5674,`p`),vN(5675,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Ac(5676,`code`),vN(5677,`PoDynamicFormFieldChanged`),ug(),vN(5678,`:`),ug(),Ac(5679,`p`)(5680,`code`),vN(5681,`{ property: 'property name', value: 'new value' }`),ug()(),Ac(5682,`p`),vN(5683,`O retorno desta função deve ser do tipo `),Ac(5684,`a`,82),vN(5685,`PoDynamicFormFieldValidation`),ug(),vN(5686,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ug(),Ac(5687,`pre`)(5688,`code`),vN(5689,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ug()(),Ac(5690,`p`),vN(5691,`Para referenciar a sua função utilize a propriedade `),Ac(5692,`code`),vN(5693,`bind`),ug(),vN(5694,`, por exemplo:
`),Ac(5695,`code`),vN(5696,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),ug()()()(),Ac(5697,`tr`,16)(5698,`td`,17)(5699,`div`,25)(5700,`span`,26),vN(5701,` visible`),Kc(5702,`br`),ug()()(),Ac(5703,`td`,21)(5704,`code`,29),vN(5705,`boolean`),ug()(),Ac(5706,`td`,24)(5707,`em`)(5708,`strong`),vN(5709,`(opcional)`),ug()(),Ac(5710,`p`),vN(5711,`Indica se o campo será visível.`),ug()()(),Ac(5712,`tr`,16)(5713,`td`,17)(5714,`div`,25)(5715,`span`,26),vN(5716,` yearRangeLimit`),Kc(5717,`br`),ug()()(),Ac(5718,`td`,21)(5719,`code`,45),vN(5720,`number`),ug()(),Ac(5721,`td`,24)(5722,`em`)(5723,`strong`),vN(5724,`(opcional)`),ug()(),Ac(5725,`p`),vN(5726,`Define o limite de anos exibidos na lista de anos do `),Ac(5727,`code`),vN(5728,`po-datepicker`),ug(),vN(5729,` nos modos `),Ac(5730,`code`),vN(5731,`month-year`),ug(),vN(5732,` e `),Ac(5733,`code`),vN(5734,`year`),ug(),vN(5735,`.`),ug()()()(),Ac(5736,`h4`,43)(5737,`code`,5),vN(5738,`PoLookupColumn`),ug()(),Ac(5739,`div`,2)(5740,`p`),vN(5741,`Interface para configuração das colunas do po-lookup.`),ug()(),Ac(5742,`h4`,12),vN(5743,`Propriedades`),ug(),Ac(5744,`table`,13)(5745,`tr`,14)(5746,`th`,15),vN(5747,`Nome`),ug(),Ac(5748,`th`,15),vN(5749,`Tipo`),ug(),Ac(5750,`th`,15),vN(5751,`Descrição`),ug()(),Ac(5752,`tr`,16)(5753,`td`,17)(5754,`div`,25)(5755,`span`,26),vN(5756,` fieldLabel`),Kc(5757,`br`),ug()()(),Ac(5758,`td`,21)(5759,`code`,29),vN(5760,`boolean`),ug()(),Ac(5761,`td`,24)(5762,`em`)(5763,`strong`),vN(5764,`(opcional)`),ug()(),Ac(5765,`p`),vN(5766,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),ug(),Ac(5767,`p`),vN(5768,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),ug(),Ac(5769,`p`),vN(5770,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Ac(5771,`code`),vN(5772,`p-field-format`),ug(),vN(5773,` ou `),Ac(5774,`code`),vN(5775,`p-field-label`),ug(),vN(5776,` forem configurados no componente.`),ug()()(),Ac(5777,`tr`,16)(5778,`td`,17)(5779,`div`,25)(5780,`span`,26),vN(5781,` format`),Kc(5782,`br`),ug()()(),Ac(5783,`td`,21)(5784,`code`,27),vN(5785,`string`),ug()(),Ac(5786,`td`,24)(5787,`em`)(5788,`strong`),vN(5789,`(opcional)`),ug()(),Ac(5790,`p`),vN(5791,`Formato de exibição do valor da coluna:`),ug(),Ac(5792,`ul`)(5793,`li`),vN(5794,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),ug(),Ac(5795,`li`),vN(5796,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ug()()()(),Ac(5797,`tr`,16)(5798,`td`,17)(5799,`div`,25)(5800,`span`,26),vN(5801,` label`),Kc(5802,`br`),ug()()(),Ac(5803,`td`,21)(5804,`code`,27),vN(5805,`string`),ug()(),Ac(5806,`td`,24)(5807,`em`)(5808,`strong`),vN(5809,`(opcional)`),ug()(),Ac(5810,`p`),vN(5811,`Texto para título da coluna.`),ug(),Ac(5812,`p`),vN(5813,`Caso não seja informado, será utilizado como `),Ac(5814,`em`),vN(5815,`label`),ug(),vN(5816,` o valor da propriedade `),Ac(5817,`em`),vN(5818,`property`),ug(),vN(5819,` com a primeira letra em maiúsculo.`),ug()()(),Ac(5820,`tr`,16)(5821,`td`,17)(5822,`div`,25)(5823,`span`,26),vN(5824,` mask`),Kc(5825,`br`),ug()()(),Ac(5826,`td`,21)(5827,`code`,27),vN(5828,`string`),ug()(),Ac(5829,`td`,24)(5830,`em`)(5831,`strong`),vN(5832,`(opcional)`),ug()(),Ac(5833,`p`),vN(5834,`Define uma máscara para formatação do valor exibido na coluna.`),ug(),Ac(5835,`p`),vN(5836,`A máscara é aplicada somente para `),Ac(5837,`strong`),vN(5838,`exibição`),ug(),vN(5839,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),ug(),Ac(5840,`p`),vN(5841,`Caracteres válidos para a máscara:`),ug(),Ac(5842,`ul`)(5843,`li`)(5844,`code`),vN(5845,`9`),ug(),vN(5846,` : aceita um dígito numérico (0-9).`),ug(),Ac(5847,`li`)(5848,`code`),vN(5849,`@`),ug(),vN(5850,` : aceita um caractere alfabético (a-z, A-Z).`),ug(),Ac(5851,`li`)(5852,`code`),vN(5853,`w`),ug(),vN(5854,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),ug(),Ac(5855,`li`),vN(5856,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Ac(5857,`code`),vN(5858,`.`),ug(),vN(5859,`, `),Ac(5860,`code`),vN(5861,`-`),ug(),vN(5862,`, `),Ac(5863,`code`),vN(5864,`/`),ug(),vN(5865,`, `),Ac(5866,`code`),vN(5867,`(`),ug(),vN(5868,`, `),Ac(5869,`code`),vN(5870,`)`),ug(),vN(5871,`, `),Ac(5872,`code`),vN(5873,`+`),ug(),vN(5874,`, `),Kc(5875,`code`),vN(5876,`).`),ug()(),Ac(5877,`p`),vN(5878,`Exemplos de uso:`),ug(),Ac(5879,`pre`)(5880,`code`),vN(5881,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),ug()(),Ac(5882,`blockquote`)(5883,`p`),vN(5884,`Esta propriedade é utilizada apenas para colunas do tipo `),Ac(5885,`code`),vN(5886,`string`),ug(),vN(5887,` (padr\xE3o).
Caso a coluna possua um `),Ac(5888,`code`),vN(5889,`type`),ug(),vN(5890,` diferente de `),Ac(5891,`code`),vN(5892,`string`),ug(),vN(5893,`, a máscara será ignorada.`),ug()()()(),Ac(5894,`tr`,16)(5895,`td`,17)(5896,`div`,25)(5897,`span`,26),vN(5898,` property`),Kc(5899,`br`),ug()()(),Ac(5900,`td`,21)(5901,`code`,27),vN(5902,`string`),ug()(),Ac(5903,`td`,24)(5904,`em`)(5905,`strong`),vN(5906,`(opcional)`),ug()(),Ac(5907,`p`),vN(5908,`Nome identificador da coluna.`),ug()()(),Ac(5909,`tr`,16)(5910,`td`,17)(5911,`div`,25)(5912,`span`,26),vN(5913,` type`),Kc(5914,`br`),ug()()(),Ac(5915,`td`,21)(5916,`code`,27),vN(5917,`string`),ug()(),Ac(5918,`td`,24)(5919,`em`)(5920,`strong`),vN(5921,`(opcional)`),ug()(),Ac(5922,`p`),vN(5923,`Tipo da coluna:`),ug(),Ac(5924,`ul`)(5925,`li`),vN(5926,`string (padrão): textos`),ug(),Ac(5927,`li`),vN(5928,`number: valores numéricos`),ug(),Ac(5929,`li`),vN(5930,`date: data`),ug(),Ac(5931,`li`),vN(5932,`currency: valores monetários`),ug(),Ac(5933,`li`),vN(5934,`dateTime: data e hora`),ug()()()(),Ac(5935,`tr`,16)(5936,`td`,17)(5937,`div`,25)(5938,`span`,26),vN(5939,` width`),Kc(5940,`br`),ug()()(),Ac(5941,`td`,21)(5942,`code`,27),vN(5943,`string`),ug()(),Ac(5944,`td`,24)(5945,`em`)(5946,`strong`),vN(5947,`(opcional)`),ug()(),Ac(5948,`p`),vN(5949,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),ug()()()(),Ac(5950,`h4`,43)(5951,`code`,5),vN(5952,`PoLookupFilter`),ug()(),Ac(5953,`div`,2)(5954,`p`),vN(5955,`Define o tipo de busca utilizado no po-lookup.`),ug()(),Ac(5956,`h4`,12),vN(5957,`Métodos`),ug(),Ac(5958,`table`,41)(5959,`tr`,16)(5960,`th`,42)(5961,`div`,25)(5962,`h4`)(5963,`span`,26),vN(5964,` getFilteredItems `),ug()()()()(),Ac(5965,`tr`,24)(5966,`td`,24)(5967,`p`),vN(5968,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Ac(5969,`em`),vN(5970,`Observable`),ug(),vN(5971,` com a resposta da API no formato da interface `),Ac(5972,`code`),vN(5973,`PoLookupResponseApi`),ug(),vN(5974,`.`),ug()()()(),Ac(5975,`h5`)(5976,`b`),vN(5977,`Parâmetros`),ug()(),Ac(5978,`table`,13)(5979,`tr`,14)(5980,`th`,15),vN(5981,`Nome`),ug(),Ac(5982,`th`,15),vN(5983,`Tipo`),ug(),Ac(5984,`th`,15),vN(5985,`Descrição`),ug()(),Ac(5986,`tr`,16)(5987,`td`,17),vN(5988,` params`),ug(),Ac(5989,`td`,21)(5990,`code`,83),vN(5991,` PoLookupFilteredItemsParams `),ug()(),Ac(5992,`td`,24)(5993,`p`),vN(5994,`Objeto enviado por parâmetro que implementa a interface `),Ac(5995,`code`),vN(5996,`PoLookupFilteredItemsParams`),ug(),vN(5997,`.`),ug()()()(),Kc(5998,`br`),Ac(5999,`table`,41)(6e3,`tr`,16)(6001,`th`,42)(6002,`div`,25)(6003,`h4`)(6004,`span`,26),vN(6005,` getObjectByValue `),ug()()()()(),Ac(6006,`tr`,24)(6007,`td`,24)(6008,`p`),vN(6009,`Método responsável por enviar um valor que será buscado no serviço.`),ug(),Ac(6010,`p`),vN(6011,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),ug()()()(),Ac(6012,`h5`)(6013,`b`),vN(6014,`Parâmetros`),ug()(),Ac(6015,`table`,13)(6016,`tr`,14)(6017,`th`,15),vN(6018,`Nome`),ug(),Ac(6019,`th`,15),vN(6020,`Tipo`),ug(),Ac(6021,`th`,15),vN(6022,`Descrição`),ug()(),Ac(6023,`tr`,16)(6024,`td`,17),vN(6025,` value`),ug(),Ac(6026,`td`,21)(6027,`code`,27),vN(6028,` string `),ug(),Ac(6029,`code`,74),vN(6030,` Array<any> `),ug()(),Ac(6031,`td`,24)(6032,`p`),vN(6033,`Valor único a ser buscado na fonte de dados.`),ug()()(),Ac(6034,`tr`,16)(6035,`td`,17),vN(6036,` filterParams`),ug(),Ac(6037,`td`,21)(6038,`code`,83),vN(6039,` any `),ug()(),Ac(6040,`td`,24)(6041,`p`),vN(6042,`Valor informado através da propriedade `),Ac(6043,`code`),vN(6044,`p-filter-params`),ug(),vN(6045,`.`),ug()()()(),Kc(6046,`br`),Ac(6047,`h4`,43)(6048,`code`,5),vN(6049,`PoLookupFilteredItemsParams`),ug()(),Ac(6050,`div`,2)(6051,`p`),vN(6052,`Interface do objeto enviado como parâmetro na função `),Ac(6053,`code`),vN(6054,`getFilteredItems`),ug(),vN(6055,`.`),ug()(),Ac(6056,`h4`,12),vN(6057,`Propriedades`),ug(),Ac(6058,`table`,13)(6059,`tr`,14)(6060,`th`,15),vN(6061,`Nome`),ug(),Ac(6062,`th`,15),vN(6063,`Tipo`),ug(),Ac(6064,`th`,15),vN(6065,`Descrição`),ug()(),Ac(6066,`tr`,16)(6067,`td`,17)(6068,`div`,25)(6069,`span`,26),vN(6070,` advancedFilters`),Kc(6071,`br`),ug()()(),Ac(6072,`td`,21)(6073,`code`,84),vN(6074,`{ [key: string]: any;
}`),ug()(),Ac(6075,`td`,24)(6076,`em`)(6077,`strong`),vN(6078,`(opcional)`),ug()(),Ac(6079,`p`),vN(6080,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),ug()()(),Ac(6081,`tr`,16)(6082,`td`,17)(6083,`div`,25)(6084,`span`,26),vN(6085,` filter`),Kc(6086,`br`),ug()()(),Ac(6087,`td`,21)(6088,`code`,27),vN(6089,`string`),ug()(),Ac(6090,`td`,24)(6091,`em`)(6092,`strong`),vN(6093,`(opcional)`),ug()(),Ac(6094,`p`),vN(6095,`Conteúdo utilizado para filtrar a lista de itens.`),ug()()(),Ac(6096,`tr`,16)(6097,`td`,17)(6098,`div`,25)(6099,`span`,26),vN(6100,` filterParams`),Kc(6101,`br`),ug()()(),Ac(6102,`td`,21)(6103,`code`,33),vN(6104,`any`),ug()(),Ac(6105,`td`,24)(6106,`em`)(6107,`strong`),vN(6108,`(opcional)`),ug()(),Ac(6109,`p`),vN(6110,`Valor informado através da propriedade `),Ac(6111,`code`),vN(6112,`p-filter-params`),ug(),vN(6113,`.`),ug()()(),Ac(6114,`tr`,16)(6115,`td`,17)(6116,`div`,25)(6117,`span`,26),vN(6118,` order`),Kc(6119,`br`),ug()()(),Ac(6120,`td`,21)(6121,`code`,27),vN(6122,`string`),ug()(),Ac(6123,`td`,24)(6124,`em`)(6125,`strong`),vN(6126,`(opcional)`),ug()(),Ac(6127,`p`),vN(6128,`Coluna que está sendo ordenada na tabela.`),ug(),Ac(6129,`ul`)(6130,`li`),vN(6131,`Coluna decrescente será informada da seguinte forma: `),Ac(6132,`code`),vN(6133,`-<colunaOrdenada>`),ug(),vN(6134,`, por exemplo `),Ac(6135,`code`),vN(6136,`-name`),ug(),vN(6137,`.`),ug(),Ac(6138,`li`),vN(6139,`Coluna ascendente será informada da seguinte forma: `),Ac(6140,`code`),vN(6141,`<colunaOrdenada>`),ug(),vN(6142,`, por exemplo `),Ac(6143,`code`),vN(6144,`name`),ug(),vN(6145,`.`),ug()()()(),Ac(6146,`tr`,16)(6147,`td`,17)(6148,`div`,25)(6149,`span`,26),vN(6150,` page`),Kc(6151,`br`),ug()()(),Ac(6152,`td`,21)(6153,`code`,45),vN(6154,`number`),ug()(),Ac(6155,`td`,24)(6156,`em`)(6157,`strong`),vN(6158,`(opcional)`),ug()(),Ac(6159,`p`),vN(6160,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),ug()()(),Ac(6161,`tr`,16)(6162,`td`,17)(6163,`div`,25)(6164,`span`,26),vN(6165,` pageSize`),Kc(6166,`br`),ug()()(),Ac(6167,`td`,21)(6168,`code`,45),vN(6169,`number`),ug()(),Ac(6170,`td`,24)(6171,`em`)(6172,`strong`),vN(6173,`(opcional)`),ug()(),Ac(6174,`p`),vN(6175,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),ug()()()(),Ac(6176,`h4`,43)(6177,`code`,5),vN(6178,`PoLookupLiterals`),ug()(),Ac(6179,`div`,2)(6180,`p`),vN(6181,`Interface para definição das literais usadas no `),Ac(6182,`code`),vN(6183,`po-lookup`),ug(),vN(6184,`.`),ug()(),Ac(6185,`h4`,12),vN(6186,`Propriedades`),ug(),Ac(6187,`table`,13)(6188,`tr`,14)(6189,`th`,15),vN(6190,`Nome`),ug(),Ac(6191,`th`,15),vN(6192,`Tipo`),ug(),Ac(6193,`th`,15),vN(6194,`Descrição`),ug()(),Ac(6195,`tr`,16)(6196,`td`,17)(6197,`div`,25)(6198,`span`,26),vN(6199,` clean`),Kc(6200,`br`),ug()()(),Ac(6201,`td`,21)(6202,`code`,27),vN(6203,`string`),ug()(),Ac(6204,`td`,24)(6205,`em`)(6206,`strong`),vN(6207,`(opcional)`),ug()(),Ac(6208,`p`),vN(6209,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),ug()()(),Ac(6210,`tr`,16)(6211,`td`,17)(6212,`div`,25)(6213,`span`,26),vN(6214,` modalAdvancedSearch`),Kc(6215,`br`),ug()()(),Ac(6216,`td`,21)(6217,`code`,27),vN(6218,`string`),ug()(),Ac(6219,`td`,24)(6220,`em`)(6221,`strong`),vN(6222,`(opcional)`),ug()(),Ac(6223,`p`),vN(6224,`Texto do link de busca avançada.`),ug(),Ac(6225,`p`),vN(6226,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),ug()()(),Ac(6227,`tr`,16)(6228,`td`,17)(6229,`div`,25)(6230,`span`,26),vN(6231,` modalAdvancedSearchPrimaryActionLabel`),Kc(6232,`br`),ug()()(),Ac(6233,`td`,21)(6234,`code`,27),vN(6235,`string`),ug()(),Ac(6236,`td`,24)(6237,`em`)(6238,`strong`),vN(6239,`(opcional)`),ug()(),Ac(6240,`p`),vN(6241,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),ug()()(),Ac(6242,`tr`,16)(6243,`td`,17)(6244,`div`,25)(6245,`span`,26),vN(6246,` modalAdvancedSearchSecondaryActionLabel`),Kc(6247,`br`),ug()()(),Ac(6248,`td`,21)(6249,`code`,27),vN(6250,`string`),ug()(),Ac(6251,`td`,24)(6252,`em`)(6253,`strong`),vN(6254,`(opcional)`),ug()(),Ac(6255,`p`),vN(6256,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),ug()()(),Ac(6257,`tr`,16)(6258,`td`,17)(6259,`div`,25)(6260,`span`,26),vN(6261,` modalAdvancedSearchTitle`),Kc(6262,`br`),ug()()(),Ac(6263,`td`,21)(6264,`code`,27),vN(6265,`string`),ug()(),Ac(6266,`td`,24)(6267,`em`)(6268,`strong`),vN(6269,`(opcional)`),ug()(),Ac(6270,`p`),vN(6271,`Texto exibido no título da modal de busca avançada.`),ug()()(),Ac(6272,`tr`,16)(6273,`td`,17)(6274,`div`,25)(6275,`span`,26),vN(6276,` modalDisclaimerGroupTitle`),Kc(6277,`br`),ug()()(),Ac(6278,`td`,21)(6279,`code`,27),vN(6280,`string`),ug()(),Ac(6281,`td`,24)(6282,`em`)(6283,`strong`),vN(6284,`(opcional)`),ug()(),Ac(6285,`p`),vN(6286,`Texto exibido no título do disclaimer.`),ug()()(),Ac(6287,`tr`,16)(6288,`td`,17)(6289,`div`,25)(6290,`span`,26),vN(6291,` modalPlaceholder`),Kc(6292,`br`),ug()()(),Ac(6293,`td`,21)(6294,`code`,27),vN(6295,`string`),ug()(),Ac(6296,`td`,24)(6297,`em`)(6298,`strong`),vN(6299,`(opcional)`),ug()(),Ac(6300,`p`),vN(6301,`Texto exibido no placeholder do input da modal.`),ug()()(),Ac(6302,`tr`,16)(6303,`td`,17)(6304,`div`,25)(6305,`span`,26),vN(6306,` modalPrimaryActionLabel`),Kc(6307,`br`),ug()()(),Ac(6308,`td`,21)(6309,`code`,27),vN(6310,`string`),ug()(),Ac(6311,`td`,24)(6312,`em`)(6313,`strong`),vN(6314,`(opcional)`),ug()(),Ac(6315,`p`),vN(6316,`Texto exibido no label do botão de ação primária da modal.`),ug()()(),Ac(6317,`tr`,16)(6318,`td`,17)(6319,`div`,25)(6320,`span`,26),vN(6321,` modalSecondaryActionLabel`),Kc(6322,`br`),ug()()(),Ac(6323,`td`,21)(6324,`code`,27),vN(6325,`string`),ug()(),Ac(6326,`td`,24)(6327,`em`)(6328,`strong`),vN(6329,`(opcional)`),ug()(),Ac(6330,`p`),vN(6331,`Texto exibido no label do botão de ação secundária da modal.`),ug()()(),Ac(6332,`tr`,16)(6333,`td`,17)(6334,`div`,25)(6335,`span`,26),vN(6336,` modalTableLoadMoreData`),Kc(6337,`br`),ug()()(),Ac(6338,`td`,21)(6339,`code`,27),vN(6340,`string`),ug()(),Ac(6341,`td`,24)(6342,`em`)(6343,`strong`),vN(6344,`(opcional)`),ug()(),Ac(6345,`p`),vN(6346,`Label do `),Ac(6347,`code`),vN(6348,`button`),ug(),vN(6349,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),ug()()(),Ac(6350,`tr`,16)(6351,`td`,17)(6352,`div`,25)(6353,`span`,26),vN(6354,` modalTableLoadingData`),Kc(6355,`br`),ug()()(),Ac(6356,`td`,21)(6357,`code`,27),vN(6358,`string`),ug()(),Ac(6359,`td`,24)(6360,`em`)(6361,`strong`),vN(6362,`(opcional)`),ug()(),Ac(6363,`p`),vN(6364,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),ug()()(),Ac(6365,`tr`,16)(6366,`td`,17)(6367,`div`,25)(6368,`span`,26),vN(6369,` modalTableNoColumns`),Kc(6370,`br`),ug()()(),Ac(6371,`td`,21)(6372,`code`,27),vN(6373,`string`),ug()(),Ac(6374,`td`,24)(6375,`em`)(6376,`strong`),vN(6377,`(opcional)`),ug()(),Ac(6378,`p`),vN(6379,`Texto exibido quando não existem colunas definidas para a tabela.`),ug()()(),Ac(6380,`tr`,16)(6381,`td`,17)(6382,`div`,25)(6383,`span`,26),vN(6384,` modalTableNoData`),Kc(6385,`br`),ug()()(),Ac(6386,`td`,21)(6387,`code`,27),vN(6388,`string`),ug()(),Ac(6389,`td`,24)(6390,`em`)(6391,`strong`),vN(6392,`(opcional)`),ug()(),Ac(6393,`p`),vN(6394,`Texto exibido quando não existem itens para serem exibidos na tabela.`),ug()()(),Ac(6395,`tr`,16)(6396,`td`,17)(6397,`div`,25)(6398,`span`,26),vN(6399,` modalTitle`),Kc(6400,`br`),ug()()(),Ac(6401,`td`,21)(6402,`code`,27),vN(6403,`string`),ug()(),Ac(6404,`td`,24)(6405,`em`)(6406,`strong`),vN(6407,`(opcional)`),ug()(),Ac(6408,`p`),vN(6409,`Texto exibido no título da modal.`),ug()()(),Ac(6410,`tr`,16)(6411,`td`,17)(6412,`div`,25)(6413,`span`,26),vN(6414,` search`),Kc(6415,`br`),ug()()(),Ac(6416,`td`,21)(6417,`code`,27),vN(6418,`string`),ug()(),Ac(6419,`td`,24)(6420,`em`)(6421,`strong`),vN(6422,`(opcional)`),ug()(),Ac(6423,`p`),vN(6424,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),ug()()()(),Ac(6425,`h4`,43)(6426,`code`,5),vN(6427,`PoLookupResponseApi`),ug()(),Ac(6428,`div`,2)(6429,`p`),vN(6430,`Interface que representa a estrutura de resposta de uma coleção de itens. `),ug()(),Ac(6431,`h4`,12),vN(6432,`Propriedades`),ug(),Ac(6433,`table`,13)(6434,`tr`,14)(6435,`th`,15),vN(6436,`Nome`),ug(),Ac(6437,`th`,15),vN(6438,`Tipo`),ug(),Ac(6439,`th`,15),vN(6440,`Descrição`),ug()(),Ac(6441,`tr`,16)(6442,`td`,17)(6443,`div`,25)(6444,`span`,26),vN(6445,` hasNext`),Kc(6446,`br`),ug()()(),Ac(6447,`td`,21)(6448,`code`,29),vN(6449,`boolean`),ug()(),Ac(6450,`td`,24)(6451,`p`),vN(6452,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),ug()()(),Ac(6453,`tr`,16)(6454,`td`,17)(6455,`div`,25)(6456,`span`,26),vN(6457,` items`),Kc(6458,`br`),ug()()(),Ac(6459,`td`,21)(6460,`code`,85),vN(6461,`Array<object>`),ug()(),Ac(6462,`td`,24)(6463,`p`),vN(6464,`Lista de itens retornados.`),ug()()()(),Ac(6465,`h3`),vN(6466,`Enums`),ug(),Ac(6467,`h4`,4)(6468,`code`,5),vN(6469,`PoTableColumnSpacing`),ug()(),Ac(6470,`div`,2)(6471,`p`),vN(6472,`Tipos de espaçamento interno (padding) das células (`),Ac(6473,`strong`),vN(6474,`p-spacing`),ug(),vN(6475,`) do po-table.`),ug()(),Ac(6476,`h4`,12),vN(6477,`Propriedades`),ug(),Ac(6478,`table`,13)(6479,`tr`,14)(6480,`th`,15),vN(6481,`Nome`),ug(),Ac(6482,`th`,15),vN(6483,`Descrição`),ug()(),Ac(6484,`tr`,16)(6485,`td`,17)(6486,`div`,25)(6487,`span`,26),vN(6488,` ExtraSmall`),Kc(6489,`br`),ug()()(),Ac(6490,`td`,24)(6491,`p`),vN(6492,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),ug()()(),Ac(6493,`tr`,16)(6494,`td`,17)(6495,`div`,25)(6496,`span`,26),vN(6497,` Small`),Kc(6498,`br`),ug()()(),Ac(6499,`td`,24)(6500,`p`),vN(6501,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(6502,`tr`,16)(6503,`td`,17)(6504,`div`,25)(6505,`span`,26),vN(6506,` Medium`),Kc(6507,`br`),ug()()(),Ac(6508,`td`,24)(6509,`p`),vN(6510,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(6511,`tr`,16)(6512,`td`,17)(6513,`div`,25)(6514,`span`,26),vN(6515,` Large`),Kc(6516,`br`),ug()()(),Ac(6517,`td`,24)(6518,`p`),vN(6519,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ct=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn$1))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-lookup-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-lookup-basic-view`)(6,`sample-po-lookup-labs-view`)(7,`sample-po-lookup-hero-view`)(8,`sample-po-lookup-hero-reactive-form-view`)(9,`sample-po-lookup-sw-films-view`)(10,`sample-po-lookup-multiple-view`)(11,`sample-po-lookup-mask-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[vze,tae,aae,Ae,Oe,ze,He,Be,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})()}];var Ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Ct),kL]})}return a})();var tn=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ke]})}return a})();export{tn as DocPoLookupModule};