import{r as t,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Ar as PT,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht$1,Ir as Qy,It as Zt,Jn as CY,Kr as Un,Lt as _n,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Si as db,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_a as wN,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,dn as oU,ea as p0,er as FN,ga as w,hr as MY,ia as q,ir as I,jn as wp,ki as fm,kr as PN,l as ar,mn as q0e,mr as MN,ni as XO,nr as HO,oa as ql,on as kbe,pt as Pbe,qi as ly,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,un as nb,va as wY,vn as qy,vr as Mw,vt as SCe,wa as zx,wi as f,wr as O$1,yr as Mx}from"./main-NT5YGKBQ.js";var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&ql(0,`po-lookup`,0)},dependencies:[qy],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup Basic`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-lookup-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,$e,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_e],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=f(db);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,p=r(r(r({},t(m,[`filterParams`,`advancedFilters`])),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var je=(()=>{class a{sampleFilterService=f(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=_n.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[Ce([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Vx();Ml(0,`po-lookup`,1),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.lookup,m)||(o.lookup=m),Jy(m)}),ht$1(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`po-container`,2)(3,`div`,3),ql(4,`po-info`,4)(5,`po-info`,5),lg()(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`po-input`,6),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.label,m)||(o.label=m),Jy(m)}),lg(),f0(),Ml(10,`po-checkbox-group`,7),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.columnsName,m)||(o.columnsName=m),Jy(m)}),ht$1(`p-change`,function(){return o.updateColumns()}),lg(),f0(),Ml(11,`po-select`,8),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.fieldLabel,m)||(o.fieldLabel=m),Jy(m)}),lg(),f0(),Ml(12,`po-select`,9),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.fieldValue,m)||(o.fieldValue=m),Jy(m)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.filterService,m)||(o.filterService=m),Jy(m)}),lg(),f0(),Ml(14,`po-input`,11),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Jy(m)}),lg(),f0(),Ml(15,`po-input`,12),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.help,m)||(o.help=m),Jy(m)}),lg(),f0(),Ml(16,`po-input`,13),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.helperText,m)||(o.helperText=m),Jy(m)}),lg(),f0(),Ml(17,`po-input`,14),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.placeholder,m)||(o.placeholder=m),Jy(m)}),lg(),f0(),Ml(18,`po-input`,15),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.literals,m)||(o.literals=m),Jy(m)}),ht$1(`p-change`,function(){return o.changeLiterals()}),lg(),f0(),Ml(19,`po-input`,16),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.formatField,m)||(o.formatField=m),Jy(m)}),ht$1(`p-change`,function(m){return o.onFieldFormatChange(m)}),lg(),f0(),Ml(20,`po-checkbox-group`,17),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.properties,m)||(o.properties=m),Jy(m)}),lg(),f0(),Ml(21,`po-radio-group`,18),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.spacing,m)||(o.spacing=m),Jy(m)}),lg(),f0(),Ml(22,`po-radio-group`,19),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.size,m)||(o.size=m),Jy(m)}),lg(),f0(),Ml(23,`po-textarea`,20),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.advancedFilters,m)||(o.advancedFilters=m),Jy(m)}),ht$1(`p-change`,function(){return o.changeAdvancedFilters()}),lg(),f0(),Ml(24,`div`,3)(25,`po-button`,21),ht$1(`p-click`,function(){return o.restore()}),lg()()()}l&2&&(Tw(`ngModel`,o.lookup),cw(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),p0(),Up(4),cw(`p-value`,o.lookup),Up(),cw(`p-value`,o.event),Up(4),Tw(`ngModel`,o.label),p0(),Up(),Tw(`ngModel`,o.columnsName),cw(`p-options`,o.columnsOptions),p0(),Up(),Tw(`ngModel`,o.fieldLabel),cw(`p-options`,o.fieldLabelOptions),p0(),Up(),Tw(`ngModel`,o.fieldValue),cw(`p-options`,o.fieldValueOptions),p0(),Up(),Tw(`ngModel`,o.filterService),p0(),Up(),Tw(`ngModel`,o.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,o.help),p0(),Up(),Tw(`ngModel`,o.helperText),p0(),Up(),Tw(`ngModel`,o.placeholder),p0(),Up(),Tw(`ngModel`,o.literals),p0(),Up(),Tw(`ngModel`,o.formatField),p0(),Up(),Tw(`ngModel`,o.properties),cw(`p-options`,o.propertiesOptions),p0(),Up(),Tw(`ngModel`,o.spacing),cw(`p-options`,o.typeSpacing),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0(),Up(),Tw(`ngModel`,o.advancedFilters),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,wp,nb,G4,lU,qy,q0e,Tbe,Pbe,kbe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup Labs`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-lookup
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-labs`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,tt,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,je],encapsulation:2,changeDetection:1})}return a})();var nt=()=>({modalTitle:`Heroes available for mission`});var Ie=(()=>{class a{service=f(O);notification=f(Eu);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[Ce([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let s=Vx();Ml(0,`div`,1),ql(1,`po-info`,2),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.hero,m)||(o.hero=m),Jy(m)}),lg(),f0(),Ml(7,`po-select`,4),Mw(`ngModelChange`,function(m){return Qy(s),yN(o.vehicle,m)||(o.vehicle=m),Jy(m)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-button`,5),ht$1(`p-click`,function(){return o.startMission()}),lg()()()}if(l&2){let s=Yx(4);Up(6),Tw(`ngModel`,o.hero),cw(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,TN(10,nt)),p0(),Up(),Tw(`ngModel`,o.vehicle),cw(`p-options`,o.vehicles),p0(),Up(2),cw(`p-disabled`,s.form.invalid||s.form.pending)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,qy,Tbe,kbe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup - Hero`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-hero`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,at,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ie],encapsulation:2,changeDetection:1})}return a})();var rt=()=>[`nickname`,`label`];var mt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=f(O);notification=f(Eu);formBuilder=f(MY);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,fm.required],vehicle:[null,fm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[Ce([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Ml(0,`div`,0),ql(1,`po-info`,1),lg(),ql(2,`po-divider`),Ml(3,`form`,2)(4,`div`,0),ql(5,`po-lookup`,3),f0(),ql(6,`po-select`,4),f0(),lg(),Ml(7,`div`,0)(8,`po-button`,5),ht$1(`p-click`,function(){return o.startMission()}),lg()()()),l&2&&(Up(3),cw(`formGroup`,o.formMission),Up(2),cw(`p-columns`,o.columns)(`p-field-format`,TN(7,rt))(`p-filter-service`,o.service)(`p-literals`,TN(8,mt)),p0(),Up(),cw(`p-options`,o.vehicles),p0(),Up(2),cw(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[IY,wY,CY,qk,Wk,Zt,nb,qy,Tbe,kbe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup - Hero Reactive Form`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-hero-reactive-form`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,pt,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ve],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(db);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(q(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(q(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ct(a,yt){if(a&1&&(Ml(0,`div`,0),ql(1,`po-table`,3),lg()),a&2){let r=zx();Up(),cw(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var Ne=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[Ce([se])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`po-radio-group`,1),Mw(`ngModelChange`,function(p){return yN(o.filterParams,p)||(o.filterParams=p),p}),lg(),f0(),lg(),ql(2,`po-divider`),Ml(3,`div`,0)(4,`po-lookup`,2),PN(5,`titlecase`),Mw(`ngModelChange`,function(p){return yN(o.entity,p)||(o.entity=p),p}),ht$1(`p-selected`,function(p){return o.onSelected(p)}),lg(),f0(),lg(),Tx(6,ct,2,4,`div`,0)),l&2&&(Up(),Tw(`ngModel`,o.filterParams),cw(`p-options`,o.entities),p0(),Up(3),cw(`p-help`,wN(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,wN(``,FN(5,12,o.entityLabel),` of Star Wars`)),Tw(`ngModel`,o.entity),cw(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),p0(),Up(2),Mx(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[wY,Vk,nb,qy,q0e,oU,XO],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup - Star Wars films`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-sw-films`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Et,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ne],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{http=f(db);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(PT(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=(()=>{class a{service=f(Re);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`po-lookup`,1),Mw(`ngModelChange`,function(p){return yN(o.multiLookup,p)||(o.multiLookup=p),p}),ht$1(`p-change`,function(p){return o.changeOptions(p)}),lg(),f0(),Ml(2,`po-container`,2),ql(3,`po-table`,3),lg()()),l&2&&(Up(),Tw(`ngModel`,o.multiLookup),cw(`p-multiple`,!0),p0(),Up(2),cw(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[wY,Vk,wp,qy,oU],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup - Multiple`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-multiple`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,bt,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,We],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``;return O$1({items:l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items],hasNext:!1}).pipe(ly(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(ly(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(ly(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac})}return a})();var Ge=(()=>{class a{service=f(ce);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[Ce([ce])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`po-lookup`,1),Mw(`ngModelChange`,function(p){return yN(o.person,p)||(o.person=p),p}),lg(),f0(),lg()),l&2&&(Up(),Tw(`ngModel`,o.person),cw(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),p0())},dependencies:[wY,Vk,qy],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Lookup - Mask`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-lookup-mask`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ht,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6520,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoLookupComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Ml(24,`code`),mN(25,`po-lookup`),lg(),mN(26,` permite que o usuário digite um valor e pressione a tecla `),Ml(27,`em`),mN(28,`TAB`),lg(),mN(29,` para
buscar um registro.`),lg(),Ml(30,`blockquote`)(31,`p`),mN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),lg()(),Ml(33,`blockquote`)(34,`p`),mN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Ml(36,`a`,6),mN(37,`modelo`),lg(),mN(38,` como `),Ml(39,`code`),mN(40,`pending`),lg(),mN(41,`.`),lg()(),Ml(42,`p`),mN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Ml(44,`code`),mN(45,`po-select`),lg(),mN(46,` ou o `),Ml(47,`code`),mN(48,`po-combo`),lg(),mN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ml(50,`a`,7),mN(51,`Guia de implementação das APIs TOTVS`),lg(),mN(52,`.`),lg(),Ml(53,`p`),mN(54,`Importante:`),lg(),Ml(55,`ul`)(56,`li`)(57,`p`),mN(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),lg(),Ml(59,`pre`)(60,`code`),mN(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),lg()()(),Ml(62,`li`)(63,`p`),mN(64,`Ao utilizar a propriedade `),Ml(65,`code`),mN(66,`p-advanced-filters`),lg(),mN(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Ml(68,`code`),mN(69,`po-dynamic-form`),lg(),mN(70,`. Em aplicações que não importam o `),Ml(71,`code`),mN(72,`PoModule`),lg(),mN(73,`, como projetos
`),Ml(74,`em`),mN(75,`standalone`),lg(),mN(76,` ou que utilizam módulos específicos, é necessário importar o `),Ml(77,`code`),mN(78,`PoDynamicModule`),lg(),mN(79,`
no componente ou m\xF3dulo onde o `),Ml(80,`code`),mN(81,`po-lookup`),lg(),mN(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Ml(83,`code`),mN(84,`NG0201: No provider found for _TitleCasePipe`),lg(),mN(85,` ao abrir a busca avançada.`),lg(),Ml(86,`pre`)(87,`code`),mN(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),lg()()()(),Ml(89,`h4`),mN(90,`Tokens customizáveis`),lg(),Ml(91,`p`),mN(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(93,`blockquote`)(94,`p`),mN(95,`Para maiores informações, acesse o guia `),Ml(96,`a`,8),mN(97,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(98,`.`),lg()(),Ml(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),mN(103,`Propriedade`),lg(),Ml(104,`th`),mN(105,`Descrição`),lg(),Ml(106,`th`),mN(107,`Valor Padrão`),lg()()(),Ml(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),mN(112,`Default Values`),lg()(),ql(113,`td`)(114,`td`),lg(),Ml(115,`tr`)(116,`td`)(117,`code`),mN(118,`--font-family`),lg()(),Ml(119,`td`),mN(120,`Família tipográfica usada`),lg(),Ml(121,`td`)(122,`code`),mN(123,`var(--font-family-theme)`),lg()()(),Ml(124,`tr`)(125,`td`)(126,`code`),mN(127,`--font-size`),lg()(),Ml(128,`td`),mN(129,`Tamanho da fonte`),lg(),Ml(130,`td`)(131,`code`),mN(132,`var(--font-size-default)`),lg()()(),Ml(133,`tr`)(134,`td`)(135,`code`),mN(136,`--text-color-placeholder`),lg()(),Ml(137,`td`),mN(138,`Cor do texto no placeholder`),lg(),Ml(139,`td`)(140,`code`),mN(141,`var(--color-neutral-light-30)`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--color`),lg()(),Ml(146,`td`),mN(147,`Cor principal do lookup`),lg(),Ml(148,`td`)(149,`code`),mN(150,`var(--color-neutral-dark-70)`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`code`),mN(154,`--border-radius`),lg()(),Ml(155,`td`),mN(156,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(157,`td`)(158,`code`),mN(159,`var(--border-radius-md)`),lg()()(),Ml(160,`tr`)(161,`td`)(162,`code`),mN(163,`--background`),lg()(),Ml(164,`td`),mN(165,`Cor de background`),lg(),Ml(166,`td`)(167,`code`),mN(168,`var(--color-neutral-light-05)`),lg()()(),Ml(169,`tr`)(170,`td`)(171,`code`),mN(172,`--text-color`),lg()(),Ml(173,`td`),mN(174,`Cor do texto`),lg(),Ml(175,`td`)(176,`code`),mN(177,`var(--color-neutral-dark-90)`),lg()()(),Ml(178,`tr`)(179,`td`)(180,`code`),mN(181,`--color-clear`),lg()(),Ml(182,`td`),mN(183,`Cor principal do icone clear`),lg(),Ml(184,`td`)(185,`code`),mN(186,`var(--color-action-default)`),lg()()(),Ml(187,`tr`)(188,`td`)(189,`strong`),mN(190,`Icon`),lg()(),ql(191,`td`)(192,`td`),lg(),Ml(193,`tr`)(194,`td`)(195,`code`),mN(196,`--color-icon`),lg()(),Ml(197,`td`),mN(198,`Cor principal do icone pesquisar`),lg(),Ml(199,`td`)(200,`code`),mN(201,`var(--color-action-default)`),lg()()(),Ml(202,`tr`)(203,`td`)(204,`strong`),mN(205,`Hover`),lg()(),ql(206,`td`)(207,`td`),lg(),Ml(208,`tr`)(209,`td`)(210,`code`),mN(211,`--color-hover`),lg()(),Ml(212,`td`),mN(213,`Cor principal no estado hover`),lg(),Ml(214,`td`)(215,`code`),mN(216,`var(--color-brand-01-dark)`),lg()()(),Ml(217,`tr`)(218,`td`)(219,`code`),mN(220,`--background-hover`),lg()(),Ml(221,`td`),mN(222,`Cor de background no estado hover`),lg(),Ml(223,`td`)(224,`code`),mN(225,`var(--color-brand-01-lightest)`),lg()()(),Ml(226,`tr`)(227,`td`)(228,`strong`),mN(229,`Focused`),lg()(),ql(230,`td`)(231,`td`),lg(),Ml(232,`tr`)(233,`td`)(234,`code`),mN(235,`--color-focused`),lg()(),Ml(236,`td`),mN(237,`Cor principal no estado de focus`),lg(),Ml(238,`td`)(239,`code`),mN(240,`var(--color-action-default)`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`code`),mN(244,`--outline-color-focused`),lg()(),Ml(245,`td`),mN(246,`Cor do outline do estado de focus`),lg(),Ml(247,`td`)(248,`code`),mN(249,`var(--color-action-focus)`),lg()()(),Ml(250,`tr`)(251,`td`)(252,`strong`),mN(253,`Disabled`),lg()(),ql(254,`td`)(255,`td`),lg(),Ml(256,`tr`)(257,`td`)(258,`code`),mN(259,`--color-disabled`),lg()(),Ml(260,`td`),mN(261,`Cor principal no estado disabled`),lg(),Ml(262,`td`)(263,`code`),mN(264,`var(--color-action-disabled)`),lg()()(),Ml(265,`tr`)(266,`td`)(267,`code`),mN(268,`--background-disabled`),lg()(),Ml(269,`td`),mN(270,`Cor de background no estado disabled`),lg(),Ml(271,`td`)(272,`code`),mN(273,`var(--color-neutral-light-20)`),lg()()(),Ml(274,`tr`)(275,`td`)(276,`code`),mN(277,`--text-color-disabled`),lg()(),Ml(278,`td`),mN(279,`Cor do texto quando campo está desabilitado`),lg(),Ml(280,`td`)(281,`code`),mN(282,`var(--color-action-disabled)`),lg()()(),Ml(283,`tr`)(284,`td`)(285,`strong`),mN(286,`Error`),lg()(),ql(287,`td`)(288,`td`),lg(),Ml(289,`tr`)(290,`td`)(291,`code`),mN(292,`--color-error`),lg()(),Ml(293,`td`),mN(294,`Cor de background no estado de requerido`),lg(),Ml(295,`td`)(296,`code`),mN(297,`var(--color-feedback-negative-base)`),lg()()()()()(),Ml(298,`div`,9)(299,`h4`,10),mN(300,`Seletor`),lg(),Ml(301,`pre`,11),mN(302,`<po-lookup
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
`),lg()(),Ml(303,`h4`,12),mN(304,`Propriedades`),lg(),Ml(305,`table`,13)(306,`tr`,14)(307,`th`,15),mN(308,`Nome`),lg(),Ml(309,`th`,15),mN(310,`Tipo`),lg(),Ml(311,`th`,15),mN(312,`Padrão`),lg(),Ml(313,`th`,15),mN(314,`Descrição`),lg()(),Ml(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),mN(319,` (p-additional-help)`),ql(320,`br`),lg()(),Ml(321,`div`,20),mN(322,`Deprecated`),lg()(),Ml(323,`td`,21)(324,`code`,22),mN(325,`EventEmitter`),lg()(),Ml(326,`td`,23),mN(327,`-`),lg(),Ml(328,`td`,24)(329,`em`)(330,`strong`),mN(331,`(opcional)`),lg()(),Ml(332,`p`),mN(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(334,`blockquote`)(335,`p`),mN(336,`Essa propriedade está `),Ml(337,`strong`),mN(338,`depreciada`),lg(),mN(339,` e será removida na versão `),Ml(340,`code`),mN(341,`23.x.x`),lg(),mN(342,`. Recomendamos utilizar a propriedade `),Ml(343,`code`),mN(344,`p-helper`),lg(),mN(345,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),mN(350,` p-additional-help-tooltip`),ql(351,`br`),lg()(),Ml(352,`div`,20),mN(353,`Deprecated`),lg()(),Ml(354,`td`,21)(355,`code`,27),mN(356,`string`),lg()(),Ml(357,`td`,23),mN(358,`-`),lg(),Ml(359,`td`,24)(360,`em`)(361,`strong`),mN(362,`(opcional)`),lg()(),Ml(363,`p`),mN(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(365,`code`),mN(366,`po-helper`),lg(),mN(367,`.
`),Ml(368,`strong`),mN(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(370,`blockquote`)(371,`p`),mN(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(373,`blockquote`)(374,`p`),mN(375,`Essa propriedade está `),Ml(376,`strong`),mN(377,`depreciada`),lg(),mN(378,` e será removida na versão `),Ml(379,`code`),mN(380,`23.x.x`),lg(),mN(381,`. Recomendamos utilizar a propriedade `),Ml(382,`code`),mN(383,`p-helper`),lg(),mN(384,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),mN(389,` p-advanced-filters`),ql(390,`br`),lg()()(),Ml(391,`td`,21)(392,`code`,28),mN(393,`Array<PoLookupAdvancedFilter>`),lg()(),Ml(394,`td`,23),mN(395,`-`),lg(),Ml(396,`td`,24)(397,`em`)(398,`strong`),mN(399,`(opcional)`),lg()(),Ml(400,`p`),mN(401,`Lista de objetos dos campos que serão criados na busca avançada.`),lg(),Ml(402,`blockquote`)(403,`p`),mN(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),lg()(),Ml(405,`blockquote`)(406,`p`),mN(407,`A busca avançada é construída a partir do `),Ml(408,`code`),mN(409,`po-dynamic-form`),lg(),mN(410,`. Em aplicações que não importam o `),Ml(411,`code`),mN(412,`PoModule`),lg(),mN(413,`,
como projetos `),Ml(414,`em`),mN(415,`standalone`),lg(),mN(416,` ou que utilizam módulos específicos, é necessário importar o `),Ml(417,`code`),mN(418,`PoDynamicModule`),lg(),mN(419,`
no componente ou m\xF3dulo onde o `),Ml(420,`code`),mN(421,`po-lookup`),lg(),mN(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Ml(423,`code`),mN(424,`NG0201: No provider found for _TitleCasePipe`),lg(),mN(425,` ao abrir a busca avançada.`),lg()(),Ml(426,`p`),mN(427,`Exemplo de URL com busca avançada:`),lg(),Ml(428,`pre`)(429,`code`),mN(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),lg()(),Ml(431,`p`),mN(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),lg(),Ml(433,`pre`)(434,`code`),mN(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),lg()()()(),Ml(436,`tr`,16)(437,`td`,17)(438,`div`,25)(439,`span`,26),mN(440,` p-append-in-body`),ql(441,`br`),lg()()(),Ml(442,`td`,21)(443,`code`,29),mN(444,`boolean`),lg()(),Ml(445,`td`,23)(446,`p`)(447,`code`),mN(448,`false`),lg()()(),Ml(449,`td`,24)(450,`em`)(451,`strong`),mN(452,`(opcional)`),lg()(),Ml(453,`p`),mN(454,`Define que o popover (`),Ml(455,`code`),mN(456,`p-helper`),lg(),mN(457,` e/ou `),Ml(458,`code`),mN(459,`p-error-limit`),lg(),mN(460,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(461,`blockquote`)(462,`p`),mN(463,`Quando utilizado com `),Ml(464,`code`),mN(465,`p-helper`),lg(),mN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(467,`tr`,16)(468,`td`,17)(469,`div`,25)(470,`span`,26),mN(471,` p-auto-focus`),ql(472,`br`),lg()()(),Ml(473,`td`,21)(474,`code`,29),mN(475,`boolean`),lg()(),Ml(476,`td`,23)(477,`p`)(478,`code`),mN(479,`false`),lg()()(),Ml(480,`td`,24)(481,`em`)(482,`strong`),mN(483,`(opcional)`),lg()(),Ml(484,`p`),mN(485,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(486,`blockquote`)(487,`p`),mN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),mN(493,` p-auto-height`),ql(494,`br`),lg()()(),Ml(495,`td`,21)(496,`code`,29),mN(497,`boolean`),lg()(),Ml(498,`td`,23)(499,`p`)(500,`code`),mN(501,`false`),lg()()(),Ml(502,`td`,24)(503,`em`)(504,`strong`),mN(505,`(opcional)`),lg()(),Ml(506,`p`),mN(507,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),lg()()(),Ml(508,`tr`,16)(509,`td`,17)(510,`div`,18)(511,`span`,19),mN(512,` (p-change)`),ql(513,`br`),lg()()(),Ml(514,`td`,21)(515,`code`,22),mN(516,`EventEmitter`),lg()(),Ml(517,`td`,23),mN(518,`-`),lg(),Ml(519,`td`,24)(520,`em`)(521,`strong`),mN(522,`(opcional)`),lg()(),Ml(523,`p`),mN(524,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),lg()()(),Ml(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),mN(529,` (p-change-model)`),ql(530,`br`),lg()()(),Ml(531,`td`,21)(532,`code`,22),mN(533,`EventEmitter`),lg()(),Ml(534,`td`,23),mN(535,`-`),lg(),Ml(536,`td`,24)(537,`em`)(538,`strong`),mN(539,`(opcional)`),lg()(),Ml(540,`p`),mN(541,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(542,`code`),mN(543,`setValue`),lg(),mN(544,`, `),Ml(545,`code`),mN(546,`patchValue`),lg(),mN(547,`, carregamento assíncrono).`),lg(),Ml(548,`p`),mN(549,`Diferentemente do `),Ml(550,`code`),mN(551,`p-change`),lg(),mN(552,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(553,`code`),mN(554,`p-change-model`),lg(),mN(555,` cobre todos os cenários de alteração de valor.`),lg(),Ml(556,`p`),mN(557,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(558,`tr`,16)(559,`td`,17)(560,`div`,18)(561,`span`,19),mN(562,` (p-change-visible-columns)`),ql(563,`br`),lg()()(),Ml(564,`td`,21)(565,`code`,22),mN(566,`EventEmitter`),lg()(),Ml(567,`td`,23),mN(568,`-`),lg(),Ml(569,`td`,24)(570,`em`)(571,`strong`),mN(572,`(opcional)`),lg()(),Ml(573,`p`),mN(574,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),lg(),Ml(575,`p`),mN(576,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg()()(),Ml(577,`tr`,16)(578,`td`,17)(579,`div`,25)(580,`span`,26),mN(581,` p-clean`),ql(582,`br`),lg()()(),Ml(583,`td`,21)(584,`code`,29),mN(585,`boolean`),lg()(),Ml(586,`td`,23),mN(587,`-`),lg(),Ml(588,`td`,24)(589,`p`),mN(590,`Exibe um ícone que permite limpar o campo.`),lg()()(),Ml(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),mN(595,` (p-restore-column-manager)`),ql(596,`br`),lg()()(),Ml(597,`td`,21)(598,`code`,22),mN(599,`EventEmitter`),lg()(),Ml(600,`td`,23),mN(601,`-`),lg(),Ml(602,`td`,24)(603,`em`)(604,`strong`),mN(605,`(opcional)`),lg()(),Ml(606,`p`),mN(607,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),lg(),Ml(608,`p`),mN(609,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg()()(),Ml(610,`tr`,16)(611,`td`,17)(612,`div`,25)(613,`span`,26),mN(614,` p-columns`),ql(615,`br`),lg()()(),Ml(616,`td`,21)(617,`code`,30),mN(618,`Array<PoLookupColumn>`),lg()(),Ml(619,`td`,23),mN(620,`-`),lg(),Ml(621,`td`,24)(622,`em`)(623,`strong`),mN(624,`(opcional)`),lg()(),Ml(625,`p`),mN(626,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),lg()()(),Ml(627,`tr`,16)(628,`td`,17)(629,`div`,25)(630,`span`,26),mN(631,` p-compact-label`),ql(632,`br`),lg()()(),Ml(633,`td`,21)(634,`code`,29),mN(635,`boolean`),lg()(),Ml(636,`td`,23)(637,`p`)(638,`code`),mN(639,`false`),lg()()(),Ml(640,`td`,24)(641,`em`)(642,`strong`),mN(643,`(opcional)`),lg()(),Ml(644,`p`),mN(645,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(646,`p`),mN(647,`Quando habilitado (`),Ml(648,`code`),mN(649,`true`),lg(),mN(650,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(651,`ul`)(652,`li`)(653,`code`),mN(654,`po-label`),lg()(),Ml(655,`li`)(656,`code`),mN(657,`p-requirement (showRequired)`),lg()(),Ml(658,`li`)(659,`code`),mN(660,`po-helper`),lg()()(),Ml(661,`p`),mN(662,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(663,`p`),mN(664,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(665,`ul`)(666,`li`)(667,`code`),mN(668,`--field-container-title-justify`),lg()(),Ml(669,`li`)(670,`code`),mN(671,`--field-container-title-flex`),lg()()(),Ml(672,`p`),mN(673,`Exemplo:`),lg(),Ml(674,`pre`)(675,`code`),mN(676,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(677,`p`),mN(678,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(679,`tr`,16)(680,`td`,17)(681,`div`,25)(682,`span`,26),mN(683,` p-disabled`),ql(684,`br`),lg()()(),Ml(685,`td`,21)(686,`code`,29),mN(687,`boolean`),lg()(),Ml(688,`td`,23)(689,`p`),mN(690,`false`),lg()(),Ml(691,`td`,24)(692,`em`)(693,`strong`),mN(694,`(opcional)`),lg()(),Ml(695,`p`),mN(696,`Indica que o campo será desabilitado.`),lg()()(),Ml(697,`tr`,16)(698,`td`,17)(699,`div`,25)(700,`span`,26),mN(701,` p-error-limit`),ql(702,`br`),lg()()(),Ml(703,`td`,21)(704,`code`,29),mN(705,`boolean`),lg()(),Ml(706,`td`,23)(707,`p`)(708,`code`),mN(709,`false`),lg()()(),Ml(710,`td`,24)(711,`em`)(712,`strong`),mN(713,`(opcional)`),lg()(),Ml(714,`p`),mN(715,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(716,`blockquote`)(717,`p`),mN(718,`Caso essa propriedade seja definida como `),Ml(719,`code`),mN(720,`true`),lg(),mN(721,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(722,`tr`,16)(723,`td`,17)(724,`div`,25)(725,`span`,26),mN(726,` p-field-error-message`),ql(727,`br`),lg()()(),Ml(728,`td`,21)(729,`code`,27),mN(730,`string`),lg()(),Ml(731,`td`,23),mN(732,`-`),lg(),Ml(733,`td`,24)(734,`em`)(735,`strong`),mN(736,`(opcional)`),lg()(),Ml(737,`p`),mN(738,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(739,`blockquote`)(740,`p`),mN(741,`Necessário que a propriedade `),Ml(742,`code`),mN(743,`p-required`),lg(),mN(744,` esteja habilitada.`),lg()()()(),Ml(745,`tr`,16)(746,`td`,17)(747,`div`,25)(748,`span`,26),mN(749,` p-field-format`),ql(750,`br`),lg()()(),Ml(751,`td`,21)(752,`code`,31),mN(753,`((value) => string) `),lg(),Ml(754,`code`,32),mN(755,` Array<string>`),lg()(),Ml(756,`td`,23),mN(757,`-`),lg(),Ml(758,`td`,24)(759,`em`)(760,`strong`),mN(761,`(opcional)`),lg()(),Ml(762,`p`),mN(763,`Formato de exibição do campo.`),lg(),Ml(764,`p`),mN(765,`Recebe uma função que deve retornar uma `),Ml(766,`em`),mN(767,`string`),lg(),mN(768,` com o/os valores do objeto formatados para exibição, por exemplo:`),lg(),Ml(769,`pre`)(770,`code`),mN(771,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),lg()(),Ml(772,`blockquote`)(773,`p`),mN(774,`Esta propriedade sobrepõe o valor da propriedade `),Ml(775,`code`),mN(776,`p-field-label`),lg(),mN(777,` na descrição do campo.`),lg()(),Ml(778,`p`),mN(779,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),lg(),Ml(780,`pre`)(781,`code`),mN(782,`<po-lookup
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
`),lg()(),Ml(783,`blockquote`)(784,`p`),mN(785,`Será utilizado `),Ml(786,`code`),mN(787,`-`),lg(),mN(788,` como separador.`),lg()()()(),Ml(789,`tr`,16)(790,`td`,17)(791,`div`,25)(792,`span`,26),mN(793,` p-field-label`),ql(794,`br`),lg()()(),Ml(795,`td`,21)(796,`code`,27),mN(797,`string`),lg()(),Ml(798,`td`,23),mN(799,`-`),lg(),Ml(800,`td`,24)(801,`p`),mN(802,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),lg()()(),Ml(803,`tr`,16)(804,`td`,17)(805,`div`,25)(806,`span`,26),mN(807,` p-field-value`),ql(808,`br`),lg()()(),Ml(809,`td`,21)(810,`code`,27),mN(811,`string`),lg()(),Ml(812,`td`,23),mN(813,`-`),lg(),Ml(814,`td`,24)(815,`p`),mN(816,`Indica a coluna que será utilizada como valor do campo.`),lg(),Ml(817,`blockquote`)(818,`p`),mN(819,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),lg()()()(),Ml(820,`tr`,16)(821,`td`,17)(822,`div`,25)(823,`span`,26),mN(824,` p-filter-params`),ql(825,`br`),lg()()(),Ml(826,`td`,21)(827,`code`,33),mN(828,`any`),lg()(),Ml(829,`td`,23),mN(830,`-`),lg(),Ml(831,`td`,24)(832,`em`)(833,`strong`),mN(834,`(opcional)`),lg()(),Ml(835,`p`),mN(836,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Ml(837,`code`),mN(838,`PoLookupFilter`),lg(),mN(839,`.`),lg()()(),Ml(840,`tr`,16)(841,`td`,17)(842,`div`,25)(843,`span`,26),mN(844,` p-filter-service`),ql(845,`br`),lg()()(),Ml(846,`td`,21)(847,`code`,27),mN(848,`string `),lg(),Ml(849,`code`,34),mN(850,` PoLookupFilter`),lg()(),Ml(851,`td`,23),mN(852,`-`),lg(),Ml(853,`td`,24)(854,`p`),mN(855,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Ml(856,`code`),mN(857,`PoLookupFilter`),lg(),mN(858,` ou uma URL.`),lg(),Ml(859,`p`),mN(860,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),lg(),Ml(861,`pre`)(862,`code`),mN(863,`url + ?page=1&pageSize=20&filter=Peter
`),lg()(),Ml(864,`p`),mN(865,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Ml(866,`code`),mN(867,`order`),lg(),mN(868,`, por exemplo:`),lg(),Ml(869,`ul`)(870,`li`)(871,`p`),mN(872,`Coluna decrescente:`),lg(),Ml(873,`pre`)(874,`code`),mN(875,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),lg()()(),Ml(876,`li`)(877,`p`),mN(878,`Coluna ascendente:`),lg(),Ml(879,`pre`)(880,`code`),mN(881,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),lg()()()(),Ml(882,`p`),mN(883,`Se for definido a propriedade `),Ml(884,`code`),mN(885,`p-filter-params`),lg(),mN(886,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Ml(887,`code`),mN(888,`{ age: 23 }`),lg(),mN(889,` a URL ficaria:`),lg(),Ml(890,`pre`)(891,`code`),mN(892,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),lg()(),Ml(893,`p`),mN(894,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),lg(),Ml(895,`pre`)(896,`code`),mN(897,`model = 1234;

GET url/1234
`),lg()(),Ml(898,`p`),mN(899,`Caso estiver com múltipla seleção habilitada:`),lg(),Ml(900,`pre`)(901,`code`),mN(902,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),lg()(),Ml(903,`blockquote`)(904,`p`),mN(905,`Esta URL deve retornar e receber os dados no padrão de `),Ml(906,`a`,7),mN(907,`API do PO UI`),lg(),mN(908,` e utiliza os valores
definidos nas propriedades `),Ml(909,`code`),mN(910,`p-field-label`),lg(),mN(911,` e `),Ml(912,`code`),mN(913,`p-field-value`),lg(),mN(914,` para a construção do `),Ml(915,`code`),mN(916,`po-lookup`),lg(),mN(917,`.`),lg()(),Ml(918,`p`),mN(919,`Caso o usuário digite um valor e pressione a tecla `),Ml(920,`em`),mN(921,`TAB`),lg(),mN(922,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Ml(923,`a`,35),mN(924,`encodeURIComponent`),lg(),mN(925,`
e concatenado na URL da seguinte forma:`),lg(),Ml(926,`pre`)(927,`code`),mN(928,`url/valor%20que%20se%20deseja%20filtrar
`),lg()(),Ml(929,`blockquote`)(930,`p`),mN(931,`Quando informado um serviço que implemente a interface `),Ml(932,`code`),mN(933,`PoLookupFilter`),lg(),mN(934,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),lg()()()(),Ml(935,`tr`,16)(936,`td`,17)(937,`div`,25)(938,`span`,26),mN(939,` p-help`),ql(940,`br`),lg()()(),Ml(941,`td`,21)(942,`code`,27),mN(943,`string`),lg()(),Ml(944,`td`,23),mN(945,`-`),lg(),Ml(946,`td`,24)(947,`em`)(948,`strong`),mN(949,`(opcional)`),lg()(),Ml(950,`p`),mN(951,`Texto de apoio do campo.`),lg()()(),Ml(952,`tr`,16)(953,`td`,17)(954,`div`,25)(955,`span`,26),mN(956,` p-hide-columns-manager`),ql(957,`br`),lg()()(),Ml(958,`td`,21)(959,`code`,29),mN(960,`boolean`),lg()(),Ml(961,`td`,23)(962,`p`)(963,`code`),mN(964,`false`),lg()()(),Ml(965,`td`,24)(966,`em`)(967,`strong`),mN(968,`(opcional)`),lg()(),Ml(969,`p`),mN(970,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),lg()()(),Ml(971,`tr`,16)(972,`td`,17)(973,`div`,25)(974,`span`,26),mN(975,` p-infinite-scroll`),ql(976,`br`),lg()()(),Ml(977,`td`,21)(978,`code`,29),mN(979,`boolean`),lg()(),Ml(980,`td`,23)(981,`p`)(982,`code`),mN(983,`false`),lg()()(),Ml(984,`td`,24)(985,`em`)(986,`strong`),mN(987,`(opcional)`),lg()(),Ml(988,`p`),mN(989,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),lg()()(),Ml(990,`tr`,16)(991,`td`,17)(992,`div`,18)(993,`span`,19),mN(994,` (p-keydown)`),ql(995,`br`),lg()()(),Ml(996,`td`,21)(997,`code`,22),mN(998,`EventEmitter`),lg()(),Ml(999,`td`,23),mN(1e3,`-`),lg(),Ml(1001,`td`,24)(1002,`em`)(1003,`strong`),mN(1004,`(opcional)`),lg()(),Ml(1005,`p`),mN(1006,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(1007,`code`),mN(1008,`KeyboardEvent`),lg(),mN(1009,` com informações sobre a tecla.`),lg()()(),Ml(1010,`tr`,16)(1011,`td`,17)(1012,`div`,25)(1013,`span`,26),mN(1014,` p-label`),ql(1015,`br`),lg()()(),Ml(1016,`td`,21)(1017,`code`,27),mN(1018,`string`),lg()(),Ml(1019,`td`,23),mN(1020,`-`),lg(),Ml(1021,`td`,24)(1022,`em`)(1023,`strong`),mN(1024,`(opcional)`),lg()(),Ml(1025,`p`),mN(1026,`Label do campo.`),lg(),Ml(1027,`blockquote`)(1028,`p`),mN(1029,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Ml(1030,`code`),mN(1031,`modalTitle`),lg(),mN(1032,` na propriedade `),Ml(1033,`code`),mN(1034,`p-literals`),lg(),mN(1035,`.`),lg()()()(),Ml(1036,`tr`,16)(1037,`td`,17)(1038,`div`,25)(1039,`span`,26),mN(1040,` p-label-text-wrap`),ql(1041,`br`),lg()()(),Ml(1042,`td`,21)(1043,`code`,29),mN(1044,`boolean`),lg()(),Ml(1045,`td`,23)(1046,`p`)(1047,`code`),mN(1048,`false`),lg()()(),Ml(1049,`td`,24)(1050,`em`)(1051,`strong`),mN(1052,`(opcional)`),lg()(),Ml(1053,`p`),mN(1054,`Habilita a quebra automática do texto da propriedade `),Ml(1055,`code`),mN(1056,`p-label`),lg(),mN(1057,`. Quando `),Ml(1058,`code`),mN(1059,`p-label-text-wrap`),lg(),mN(1060,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(1061,`tr`,16)(1062,`td`,17)(1063,`div`,25)(1064,`span`,26),mN(1065,` p-literals`),ql(1066,`br`),lg()()(),Ml(1067,`td`,21)(1068,`code`,36),mN(1069,`PoLookupLiterals`),lg()(),Ml(1070,`td`,23),mN(1071,`-`),lg(),Ml(1072,`td`,24)(1073,`p`),mN(1074,`Objeto com as literais usadas no `),Ml(1075,`code`),mN(1076,`po-lookup`),lg(),mN(1077,`.`),lg(),Ml(1078,`p`),mN(1079,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(1080,`pre`)(1081,`code`),mN(1082,`const customLiterals: PoLookupLiterals = {
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
`),lg()(),Ml(1083,`p`),mN(1084,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(1085,`pre`)(1086,`code`),mN(1087,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),lg()(),Ml(1088,`p`),mN(1089,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(1090,`pre`)(1091,`code`),mN(1092,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),lg()(),Ml(1093,`blockquote`)(1094,`p`),mN(1095,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(1096,`a`,37)(1097,`code`),mN(1098,`PoI18nService`),lg()(),mN(1099,` ou do browser.`),lg()()()(),Ml(1100,`tr`,16)(1101,`td`,17)(1102,`div`,25)(1103,`span`,26),mN(1104,` p-loading`),ql(1105,`br`),lg()()(),Ml(1106,`td`,21)(1107,`code`,29),mN(1108,`boolean`),lg()(),Ml(1109,`td`,23)(1110,`p`)(1111,`code`),mN(1112,`false`),lg()()(),Ml(1113,`td`,24)(1114,`em`)(1115,`strong`),mN(1116,`(opcional)`),lg()(),Ml(1117,`p`),mN(1118,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(1119,`tr`,16)(1120,`td`,17)(1121,`div`,25)(1122,`span`,26),mN(1123,` p-multiple`),ql(1124,`br`),lg()()(),Ml(1125,`td`,21)(1126,`code`,29),mN(1127,`boolean`),lg()(),Ml(1128,`td`,23)(1129,`p`)(1130,`code`),mN(1131,`false`),lg()()(),Ml(1132,`td`,24)(1133,`em`)(1134,`strong`),mN(1135,`(opcional)`),lg()(),Ml(1136,`p`),mN(1137,`Permite a seleção de múltiplos itens.`),lg(),Ml(1138,`blockquote`)(1139,`p`),mN(1140,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Ml(1141,`code`),mN(1142,`[ 12345, 67890 ]`),lg()()()()(),Ml(1143,`tr`,16)(1144,`td`,17)(1145,`div`,25)(1146,`span`,26),mN(1147,` name`),ql(1148,`br`),lg()()(),Ml(1149,`td`,21)(1150,`code`,27),mN(1151,`string`),lg()(),Ml(1152,`td`,23),mN(1153,`-`),lg(),Ml(1154,`td`,24)(1155,`p`),mN(1156,`Nome e Id do componente.`),lg()()(),Ml(1157,`tr`,16)(1158,`td`,17)(1159,`div`,25)(1160,`span`,26),mN(1161,` p-no-autocomplete`),ql(1162,`br`),lg()()(),Ml(1163,`td`,21)(1164,`code`,29),mN(1165,`boolean`),lg()(),Ml(1166,`td`,23)(1167,`p`)(1168,`code`),mN(1169,`false`),lg()()(),Ml(1170,`td`,24)(1171,`em`)(1172,`strong`),mN(1173,`(opcional)`),lg()(),Ml(1174,`p`),mN(1175,`Define a propriedade nativa `),Ml(1176,`code`),mN(1177,`autocomplete`),lg(),mN(1178,` do campo como `),Ml(1179,`code`),mN(1180,`off`),lg(),mN(1181,`.`),lg()()(),Ml(1182,`tr`,16)(1183,`td`,17)(1184,`div`,18)(1185,`span`,19),mN(1186,` (p-error)`),ql(1187,`br`),lg()()(),Ml(1188,`td`,21)(1189,`code`,22),mN(1190,`EventEmitter`),lg()(),Ml(1191,`td`,23),mN(1192,`-`),lg(),Ml(1193,`td`,24)(1194,`p`),mN(1195,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),lg()()(),Ml(1196,`tr`,16)(1197,`td`,17)(1198,`div`,25)(1199,`span`,26),mN(1200,` p-optional`),ql(1201,`br`),lg()()(),Ml(1202,`td`,21)(1203,`code`,29),mN(1204,`boolean`),lg()(),Ml(1205,`td`,23)(1206,`p`)(1207,`code`),mN(1208,`false`),lg()()(),Ml(1209,`td`,24)(1210,`em`)(1211,`strong`),mN(1212,`(opcional)`),lg()(),Ml(1213,`p`),mN(1214,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1215,`blockquote`)(1216,`p`),mN(1217,`Não será exibida a indicação se:`),lg()(),Ml(1218,`ul`)(1219,`li`),mN(1220,`O campo conter `),Ml(1221,`code`),mN(1222,`p-required`),lg(),mN(1223,`;`),lg(),Ml(1224,`li`),mN(1225,`Não possuir `),Ml(1226,`code`),mN(1227,`p-help`),lg(),mN(1228,` e/ou `),Ml(1229,`code`),mN(1230,`p-label`),lg(),mN(1231,`.`),lg()()()(),Ml(1232,`tr`,16)(1233,`td`,17)(1234,`div`,25)(1235,`span`,26),mN(1236,` p-placeholder`),ql(1237,`br`),lg()()(),Ml(1238,`td`,21)(1239,`code`,27),mN(1240,`string`),lg()(),Ml(1241,`td`,23),mN(1242,`-`),lg(),Ml(1243,`td`,24)(1244,`p`),mN(1245,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1246,`tr`,16)(1247,`td`,17)(1248,`div`,25)(1249,`span`,26),mN(1250,` p-helper`),ql(1251,`br`),lg()()(),Ml(1252,`td`,21)(1253,`code`,38),mN(1254,`PoHelperOptions `),lg(),Ml(1255,`code`,27),mN(1256,` string`),lg()(),Ml(1257,`td`,23),mN(1258,`-`),lg(),Ml(1259,`td`,24)(1260,`em`)(1261,`strong`),mN(1262,`(opcional)`),lg()(),Ml(1263,`p`),mN(1264,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1265,`code`),mN(1266,`p-label`),lg(),mN(1267,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1268,`code`),mN(1269,`p-label`),lg(),mN(1270,`.`),lg(),Ml(1271,`blockquote`)(1272,`p`),mN(1273,`Para mais informações acesse: `),Ml(1274,`a`,39),mN(1275,`https://po-ui.io/documentation/po-helper`),lg(),mN(1276,`.`),lg()(),Ml(1277,`blockquote`)(1278,`p`),mN(1279,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1280,`code`),mN(1281,`p-additional-help-tooltip`),lg(),mN(1282,` e `),Ml(1283,`code`),mN(1284,`p-additional-help`),lg(),mN(1285,`) será ignorado.`),lg()()()(),Ml(1286,`tr`,16)(1287,`td`,17)(1288,`div`,25)(1289,`span`,26),mN(1290,` p-required`),ql(1291,`br`),lg()()(),Ml(1292,`td`,21)(1293,`code`,29),mN(1294,`boolean`),lg()(),Ml(1295,`td`,23)(1296,`p`)(1297,`code`),mN(1298,`false`),lg()()(),Ml(1299,`td`,24)(1300,`em`)(1301,`strong`),mN(1302,`(opcional)`),lg()(),Ml(1303,`p`),mN(1304,`Define que o campo será obrigatório.`),lg(),Ml(1305,`blockquote`)(1306,`p`),mN(1307,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1308,`code`),mN(1309,`(p-disabled)`),lg(),mN(1310,`.`),lg()()()(),Ml(1311,`tr`,16)(1312,`td`,17)(1313,`div`,18)(1314,`span`,19),mN(1315,` (p-selected)`),ql(1316,`br`),lg()()(),Ml(1317,`td`,21)(1318,`code`,22),mN(1319,`EventEmitter`),lg()(),Ml(1320,`td`,23),mN(1321,`-`),lg(),Ml(1322,`td`,24)(1323,`em`)(1324,`strong`),mN(1325,`(opcional)`),lg()(),Ml(1326,`p`),mN(1327,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),lg()()(),Ml(1328,`tr`,16)(1329,`td`,17)(1330,`div`,25)(1331,`span`,26),mN(1332,` p-show-required`),ql(1333,`br`),lg()()(),Ml(1334,`td`,21)(1335,`code`,29),mN(1336,`boolean`),lg()(),Ml(1337,`td`,23),mN(1338,`-`),lg(),Ml(1339,`td`,24)(1340,`p`),mN(1341,`Define se a indicação de campo obrigatório seré exibida.`),lg(),Ml(1342,`blockquote`)(1343,`p`),mN(1344,`Não será exibida a indicação se:`),lg()(),Ml(1345,`ul`)(1346,`li`),mN(1347,`Não possuir `),Ml(1348,`code`),mN(1349,`p-help`),lg(),mN(1350,` e/ou `),Ml(1351,`code`),mN(1352,`p-label`),lg(),mN(1353,`.`),lg()()()(),Ml(1354,`tr`,16)(1355,`td`,17)(1356,`div`,25)(1357,`span`,26),mN(1358,` p-size`),ql(1359,`br`),lg()()(),Ml(1360,`td`,21)(1361,`code`,27),mN(1362,`string`),lg()(),Ml(1363,`td`,23)(1364,`p`)(1365,`code`),mN(1366,`medium`),lg()()(),Ml(1367,`td`,24)(1368,`em`)(1369,`strong`),mN(1370,`(opcional)`),lg()(),Ml(1371,`p`),mN(1372,`Define o tamanho do componente:`),lg(),Ml(1373,`ul`)(1374,`li`)(1375,`code`),mN(1376,`small`),lg(),mN(1377,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1378,`li`)(1379,`code`),mN(1380,`medium`),lg(),mN(1381,`: altura do input como 44px.`),lg()(),Ml(1382,`blockquote`)(1383,`p`),mN(1384,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1385,`code`),mN(1386,`medium`),lg(),mN(1387,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1388,`a`,40),mN(1389,`po-theme`),lg(),mN(1390,`.`),lg()()()(),Ml(1391,`tr`,16)(1392,`td`,17)(1393,`div`,25)(1394,`span`,26),mN(1395,` p-spacing`),ql(1396,`br`),lg()()(),Ml(1397,`td`,21)(1398,`code`,27),mN(1399,`string`),lg()(),Ml(1400,`td`,23)(1401,`p`)(1402,`code`),mN(1403,`medium`),lg()()(),Ml(1404,`td`,24)(1405,`em`)(1406,`strong`),mN(1407,`(opcional)`),lg()(),Ml(1408,`p`),mN(1409,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Ml(1410,`strong`),mN(1411,`PoTableColumnSpacing`),lg(),mN(1412,`.`),lg(),Ml(1413,`blockquote`)(1414,`p`),mN(1415,`Em nível de acessibilidade `),Ml(1416,`strong`),mN(1417,`AA`),lg(),mN(1418,`, caso o valor de `),Ml(1419,`code`),mN(1420,`p-spacing`),lg(),mN(1421,` não seja definido, o valor padrão será `),Ml(1422,`code`),mN(1423,`extraSmall`),lg(),mN(1424,`
nos seguintes cen\xE1rios:`),lg(),Ml(1425,`ul`)(1426,`li`),mN(1427,`Quando o valor de `),Ml(1428,`code`),mN(1429,`p-size`),lg(),mN(1430,` for `),Ml(1431,`code`),mN(1432,`small`),lg(),mN(1433,`;`),lg(),Ml(1434,`li`),mN(1435,`Quando o valor padrão dos componentes for configurado como `),Ml(1436,`code`),mN(1437,`small`),lg(),mN(1438,` no
`),Ml(1439,`a`,40),mN(1440,`serviço de tema`),lg(),mN(1441,`.`),lg()()()()(),Ml(1442,`tr`,16)(1443,`td`,17)(1444,`div`,25)(1445,`span`,26),mN(1446,` p-text-wrap`),ql(1447,`br`),lg()()(),Ml(1448,`td`,21)(1449,`code`,29),mN(1450,`boolean`),lg()(),Ml(1451,`td`,23)(1452,`p`)(1453,`code`),mN(1454,`false`),lg()()(),Ml(1455,`td`,24)(1456,`em`)(1457,`strong`),mN(1458,`(opcional)`),lg()(),Ml(1459,`p`),mN(1460,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg(),Ml(1461,`p`),mN(1462,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),lg(),Ml(1463,`blockquote`)(1464,`p`),mN(1465,`Incompatível com `),Ml(1466,`code`),mN(1467,`virtual-scroll`),lg(),mN(1468,`, que requer altura fixa nas linhas.`),lg()()()(),Ml(1469,`tr`,16)(1470,`td`,17)(1471,`div`,25)(1472,`span`,26),mN(1473,` p-virtual-scroll`),ql(1474,`br`),lg()()(),Ml(1475,`td`,21)(1476,`code`,29),mN(1477,`boolean`),lg()(),Ml(1478,`td`,23)(1479,`p`)(1480,`code`),mN(1481,`true`),lg()()(),Ml(1482,`td`,24)(1483,`em`)(1484,`strong`),mN(1485,`(opcional)`),lg()(),Ml(1486,`p`),mN(1487,`Habilita o `),Ml(1488,`code`),mN(1489,`virtual-scroll`),lg(),mN(1490,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Ml(1491,`code`),mN(1492,`virtual-scroll`),lg(),mN(1493,` será ativado automaticamente.`),lg(),Ml(1494,`blockquote`)(1495,`p`),mN(1496,`Incompatível com `),Ml(1497,`code`),mN(1498,`p-text-wrap`),lg(),mN(1499,` e `),Ml(1500,`code`),mN(1501,`master-detail`),lg(),mN(1502,`, pois o `),Ml(1503,`code`),mN(1504,`virtual-scroll`),lg(),mN(1505,` exige altura fixa nas linhas.`),lg()()()()(),Ml(1506,`h3`,12),mN(1507,`Métodos`),lg(),Ml(1508,`table`,41)(1509,`tr`,16)(1510,`th`,42)(1511,`div`,25)(1512,`h4`)(1513,`span`,26),mN(1514,` focus `),lg()()()()(),Ml(1515,`tr`,24)(1516,`td`,24)(1517,`p`),mN(1518,`Função que atribui foco ao componente.`),lg(),Ml(1519,`p`),mN(1520,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1521,`pre`)(1522,`code`),mN(1523,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),lg()()()()(),ql(1524,`br`),Ml(1525,`table`,41)(1526,`tr`,16)(1527,`th`,42)(1528,`div`,25)(1529,`h4`)(1530,`span`,26),mN(1531,` showAdditionalHelp `),lg()()()()(),Ml(1532,`tr`,24)(1533,`td`,24)(1534,`p`),mN(1535,`Método que exibe `),Ml(1536,`code`),mN(1537,`p-helper`),lg(),mN(1538,` ou executa a ação definida em `),Ml(1539,`code`),mN(1540,`p-helper{eventOnClick}`),lg(),mN(1541,` ou em `),Ml(1542,`code`),mN(1543,`p-additionalHelp`),lg(),mN(1544,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1545,`code`),mN(1546,`p-keydown`),lg(),mN(1547,`.`),lg(),Ml(1548,`blockquote`)(1549,`p`),mN(1550,`Exibe ou oculta o conteúdo do componente `),Ml(1551,`code`),mN(1552,`po-helper`),lg(),mN(1553,` quando o componente estiver com foco.`),lg()(),Ml(1554,`pre`)(1555,`code`),mN(1556,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),lg()(),Ml(1557,`pre`)(1558,`code`),mN(1559,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1560,`br`),Ml(1561,`h3`),mN(1562,`Interfaces`),lg(),Ml(1563,`h4`,43)(1564,`code`,5),mN(1565,`PoLookupAdvancedFilter`),lg()(),Ml(1566,`div`,2)(1567,`p`),mN(1568,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente. `),lg()(),Ml(1569,`h4`,12),mN(1570,`Propriedades`),lg(),Ml(1571,`table`,13)(1572,`tr`,14)(1573,`th`,15),mN(1574,`Nome`),lg(),Ml(1575,`th`,15),mN(1576,`Tipo`),lg(),Ml(1577,`th`,15),mN(1578,`Descrição`),lg()(),Ml(1579,`tr`,16)(1580,`td`,17)(1581,`div`,25)(1582,`span`,26),mN(1583,` additionalHelp`),ql(1584,`br`),lg()()(),Ml(1585,`td`,21)(1586,`code`,44),mN(1587,`Function`),lg()(),Ml(1588,`td`,24)(1589,`em`)(1590,`strong`),mN(1591,`(opcional)`),lg()(),Ml(1592,`p`),mN(1593,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(1594,`blockquote`)(1595,`p`),mN(1596,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(1597,`tr`,16)(1598,`td`,17)(1599,`div`,25)(1600,`span`,26),mN(1601,` additionalHelpTooltip`),ql(1602,`br`),lg()()(),Ml(1603,`td`,21)(1604,`code`,27),mN(1605,`string`),lg()(),Ml(1606,`td`,24)(1607,`em`)(1608,`strong`),mN(1609,`(opcional)`),lg()(),Ml(1610,`p`),mN(1611,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(1612,`code`),mN(1613,`po-helper`),lg(),mN(1614,`.
`),Ml(1615,`strong`),mN(1616,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(1617,`blockquote`)(1618,`p`),mN(1619,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(1620,`tr`,16)(1621,`td`,17)(1622,`div`,25)(1623,`span`,26),mN(1624,` advancedFilters`),ql(1625,`br`),lg()()(),Ml(1626,`td`,21)(1627,`code`,28),mN(1628,`Array<PoLookupAdvancedFilter>`),lg()(),Ml(1629,`td`,24)(1630,`em`)(1631,`strong`),mN(1632,`(opcional)`),lg()(),Ml(1633,`p`),mN(1634,`Lista de objetos dos campos que serão criados na busca avançada.`),lg(),Ml(1635,`blockquote`)(1636,`p`),mN(1637,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),lg()(),Ml(1638,`p`),mN(1639,`Exemplo de URL com busca avançada:`),lg(),Ml(1640,`p`)(1641,`code`),mN(1642,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),lg()(),Ml(1643,`p`),mN(1644,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),lg(),Ml(1645,`p`)(1646,`code`),mN(1647,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),lg()()()(),Ml(1648,`tr`,16)(1649,`td`,17)(1650,`div`,25)(1651,`span`,26),mN(1652,` appendBox`),ql(1653,`br`),lg()()(),Ml(1654,`td`,21)(1655,`code`,29),mN(1656,`boolean`),lg()(),Ml(1657,`td`,24)(1658,`em`)(1659,`strong`),mN(1660,`(opcional)`),lg()(),Ml(1661,`p`),mN(1662,`Define que o `),Ml(1663,`code`),mN(1664,`listbox`),lg(),mN(1665,` e/ou popover (`),Ml(1666,`code`),mN(1667,`p-helper`),lg(),mN(1668,` e/ou `),Ml(1669,`code`),mN(1670,`p-error-limit`),lg(),mN(1671,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),lg(),Ml(1672,`blockquote`)(1673,`p`),mN(1674,`Quando utilizado com `),Ml(1675,`code`),mN(1676,`p-helper`),lg(),mN(1677,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(1678,`tr`,16)(1679,`td`,17)(1680,`div`,25)(1681,`span`,26),mN(1682,` autoHeight`),ql(1683,`br`),lg()()(),Ml(1684,`td`,21)(1685,`code`,29),mN(1686,`boolean`),lg()(),Ml(1687,`td`,24)(1688,`em`)(1689,`strong`),mN(1690,`(opcional)`),lg()(),Ml(1691,`p`),mN(1692,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),lg(),Ml(1693,`p`)(1694,`strong`),mN(1695,`Componentes compatíveis:`),lg(),Ml(1696,`code`),mN(1697,`po-multiselect`),lg(),mN(1698,`, `),Ml(1699,`code`),mN(1700,`po-lookup`),lg(),mN(1701,`.`),lg()()(),Ml(1702,`tr`,16)(1703,`td`,17)(1704,`div`,25)(1705,`span`,26),mN(1706,` autoUpload`),ql(1707,`br`),lg()()(),Ml(1708,`td`,21)(1709,`code`,29),mN(1710,`boolean`),lg()(),Ml(1711,`td`,24)(1712,`em`)(1713,`strong`),mN(1714,`(opcional)`),lg()(),Ml(1715,`p`),mN(1716,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),lg(),Ml(1717,`p`)(1718,`strong`),mN(1719,`Componente compatível`),lg(),mN(1720,`: `),Ml(1721,`code`),mN(1722,`po-upload`),lg()()()(),Ml(1723,`tr`,16)(1724,`td`,17)(1725,`div`,25)(1726,`span`,26),mN(1727,` booleanFalse`),ql(1728,`br`),lg()()(),Ml(1729,`td`,21)(1730,`code`,27),mN(1731,`string`),lg()(),Ml(1732,`td`,24)(1733,`em`)(1734,`strong`),mN(1735,`(opcional)`),lg()(),Ml(1736,`p`),mN(1737,`Texto exibido quando o valor do componente for `),Ml(1738,`em`),mN(1739,`false`),lg(),mN(1740,`.`),lg()()(),Ml(1741,`tr`,16)(1742,`td`,17)(1743,`div`,25)(1744,`span`,26),mN(1745,` booleanTrue`),ql(1746,`br`),lg()()(),Ml(1747,`td`,21)(1748,`code`,27),mN(1749,`string`),lg()(),Ml(1750,`td`,24)(1751,`em`)(1752,`strong`),mN(1753,`(opcional)`),lg()(),Ml(1754,`p`),mN(1755,`Texto exibido quando o valor do componente for `),Ml(1756,`em`),mN(1757,`true`),lg(),mN(1758,`.`),lg()()(),Ml(1759,`tr`,16)(1760,`td`,17)(1761,`div`,25)(1762,`span`,26),mN(1763,` changeOnEnter`),ql(1764,`br`),lg()()(),Ml(1765,`td`,21)(1766,`code`,29),mN(1767,`boolean`),lg()(),Ml(1768,`td`,24)(1769,`em`)(1770,`strong`),mN(1771,`(opcional)`),lg()(),Ml(1772,`p`),mN(1773,`Indica que o evento `),Ml(1774,`code`),mN(1775,`p-change`),lg(),mN(1776,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Ml(1777,`code`),mN(1778,`po-combo`),lg(),mN(1779,`.`),lg()()(),Ml(1780,`tr`,16)(1781,`td`,17)(1782,`div`,25)(1783,`span`,26),mN(1784,` changeVisibleColumns`),ql(1785,`br`),lg()()(),Ml(1786,`td`,21)(1787,`code`,44),mN(1788,`Function`),lg()(),Ml(1789,`td`,24)(1790,`em`)(1791,`strong`),mN(1792,`(opcional)`),lg()(),Ml(1793,`p`),mN(1794,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),lg(),Ml(1795,`p`),mN(1796,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg(),Ml(1797,`p`)(1798,`strong`),mN(1799,`Componente compatível`),lg(),mN(1800,`: `),Ml(1801,`code`),mN(1802,`po-lookup`),lg()()()(),Ml(1803,`tr`,16)(1804,`td`,17)(1805,`div`,25)(1806,`span`,26),mN(1807,` clean`),ql(1808,`br`),lg()()(),Ml(1809,`td`,21)(1810,`code`,29),mN(1811,`boolean`),lg()(),Ml(1812,`td`,24)(1813,`em`)(1814,`strong`),mN(1815,`(opcional)`),lg()(),Ml(1816,`p`),mN(1817,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg(),Ml(1818,`p`)(1819,`strong`),mN(1820,`Componentes compatíveis:`),lg(),Ml(1821,`code`),mN(1822,`po-datepicker`),lg(),mN(1823,`, `),Ml(1824,`code`),mN(1825,`po-datepicker-range`),lg(),mN(1826,`, `),Ml(1827,`code`),mN(1828,`po-input`),lg(),mN(1829,`, `),Ml(1830,`code`),mN(1831,`po-number`),lg(),mN(1832,`, `),Ml(1833,`code`),mN(1834,`po-decimal`),lg(),mN(1835,`,
`),Ml(1836,`code`),mN(1837,`po-combo`),lg(),mN(1838,`, `),Ml(1839,`code`),mN(1840,`po-lookup`),lg(),mN(1841,`, `),Ml(1842,`code`),mN(1843,`po-password`),lg(),mN(1844,`, `),Ml(1845,`code`),mN(1846,`po-timepicker`),lg(),mN(1847,`.`),lg()()(),Ml(1848,`tr`,16)(1849,`td`,17)(1850,`div`,25)(1851,`span`,26),mN(1852,` columnRestoreManager`),ql(1853,`br`),lg()()(),Ml(1854,`td`,21)(1855,`code`,44),mN(1856,`Function`),lg()(),Ml(1857,`td`,24)(1858,`em`)(1859,`strong`),mN(1860,`(opcional)`),lg()(),Ml(1861,`p`),mN(1862,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),lg(),Ml(1863,`p`),mN(1864,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg(),Ml(1865,`p`)(1866,`strong`),mN(1867,`Componente compatível`),lg(),mN(1868,`: `),Ml(1869,`code`),mN(1870,`po-lookup`),lg()()()(),Ml(1871,`tr`,16)(1872,`td`,17)(1873,`div`,25)(1874,`span`,26),mN(1875,` columns`),ql(1876,`br`),lg()()(),Ml(1877,`td`,21)(1878,`code`,30),mN(1879,`Array<PoLookupColumn> `),lg(),Ml(1880,`code`,45),mN(1881,` number`),lg()(),Ml(1882,`td`,24)(1883,`em`)(1884,`strong`),mN(1885,`(opcional)`),lg()(),Ml(1886,`p`),mN(1887,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Ml(1888,`code`),mN(1889,`searchService`),lg(),mN(1890,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Ml(1891,`a`,46)(1892,`code`),mN(1893,`PoLookupColumn`),lg()(),mN(1894,`.`),lg(),Ml(1895,`blockquote`)(1896,`p`),mN(1897,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Ml(1898,`em`),mN(1899,`label`),lg(),mN(1900,` e `),Ml(1901,`em`),mN(1902,`value`),lg(),mN(1903,` para valores
de tela e do model respectivamente.`),lg()(),Ml(1904,`p`)(1905,`strong`),mN(1906,`Componentes compatíveis:`),lg(),Ml(1907,`code`),mN(1908,`po-radio-group`),lg(),mN(1909,`, `),Ml(1910,`code`),mN(1911,`po-lookup`),lg(),mN(1912,`, `),Ml(1913,`code`),mN(1914,`po-checkbox-group`),lg(),mN(1915,`.`),lg()()(),Ml(1916,`tr`,16)(1917,`td`,17)(1918,`div`,25)(1919,`span`,26),mN(1920,` compactLabel`),ql(1921,`br`),lg()()(),Ml(1922,`td`,21)(1923,`code`,29),mN(1924,`boolean`),lg()(),Ml(1925,`td`,24)(1926,`em`)(1927,`strong`),mN(1928,`(opcional)`),lg()(),Ml(1929,`p`),mN(1930,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(1931,`p`),mN(1932,`Quando habilitado (`),Ml(1933,`code`),mN(1934,`true`),lg(),mN(1935,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(1936,`ul`)(1937,`li`)(1938,`code`),mN(1939,`po-label`),lg()(),Ml(1940,`li`)(1941,`code`),mN(1942,`p-requirement (showRequired)`),lg()(),Ml(1943,`li`)(1944,`code`),mN(1945,`po-helper`),lg()()(),Ml(1946,`p`),mN(1947,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(1948,`p`),mN(1949,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(1950,`ul`)(1951,`li`)(1952,`code`),mN(1953,`--field-container-title-justify`),lg()(),Ml(1954,`li`)(1955,`code`),mN(1956,`--field-container-title-flex`),lg()()(),Ml(1957,`p`),mN(1958,`Exemplo:`),lg(),Ml(1959,`pre`)(1960,`code`),mN(1961,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(1962,`p`),mN(1963,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(1964,`tr`,16)(1965,`td`,17)(1966,`div`,25)(1967,`span`,26),mN(1968,` container`),ql(1969,`br`),lg()()(),Ml(1970,`td`,21)(1971,`code`,27),mN(1972,`string`),lg()(),Ml(1973,`td`,24)(1974,`em`)(1975,`strong`),mN(1976,`(opcional)`),lg()(),Ml(1977,`p`),mN(1978,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),lg(),Ml(1979,`p`),mN(1980,`Está propriedade é do tipo string, o valor que será titulo do contianer`),lg()()(),Ml(1981,`tr`,16)(1982,`td`,17)(1983,`div`,25)(1984,`span`,26),mN(1985,` customAction`),ql(1986,`br`),lg()()(),Ml(1987,`td`,21)(1988,`code`,47),mN(1989,`PoProgressAction`),lg()(),Ml(1990,`td`,24)(1991,`em`)(1992,`strong`),mN(1993,`(opcional)`),lg()(),Ml(1994,`p`),mN(1995,`Define uma ação personalizada no componente `),Ml(1996,`code`),mN(1997,`po-upload`),lg(),mN(1998,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),lg(),Ml(1999,`p`)(2e3,`strong`),mN(2001,`Componente compatível`),lg(),mN(2002,`: `),Ml(2003,`code`),mN(2004,`po-upload`),lg(),mN(2005,`,`),lg(),Ml(2006,`p`)(2007,`strong`),mN(2008,`Exemplo de configuração`),lg(),mN(2009,`:`),lg(),Ml(2010,`pre`)(2011,`code`,48),mN(2012,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),lg()()()(),Ml(2013,`tr`,16)(2014,`td`,17)(2015,`div`,25)(2016,`span`,26),mN(2017,` customActionClick`),ql(2018,`br`),lg()()(),Ml(2019,`td`,21)(2020,`code`,49),mN(2021,`(file: PoUploadFile) => void`),lg()(),Ml(2022,`td`,24)(2023,`em`)(2024,`strong`),mN(2025,`(opcional)`),lg()(),Ml(2026,`p`),mN(2027,`Evento emitido ao clicar na ação personalizada configurada no `),Ml(2028,`code`),mN(2029,`p-custom-action`),lg(),mN(2030,`.`),lg(),Ml(2031,`p`)(2032,`strong`),mN(2033,`Componente compatível`),lg(),mN(2034,`: `),Ml(2035,`code`),mN(2036,`po-upload`),lg(),mN(2037,`,`),lg(),Ml(2038,`p`),mN(2039,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),lg(),Ml(2040,`p`)(2041,`strong`),mN(2042,`Parâmetro do evento`),lg(),mN(2043,`:`),lg(),Ml(2044,`ul`)(2045,`li`)(2046,`code`),mN(2047,`file`),lg(),mN(2048,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Ml(2049,`code`),mN(2050,`PoUploadFile`),lg(),mN(2051,` e contém informações sobre o arquivo, como nome, status e progresso.`),lg()(),Ml(2052,`p`)(2053,`strong`),mN(2054,`Exemplo de uso`),lg(),mN(2055,`:`),lg(),Ml(2056,`pre`)(2057,`code`,48),mN(2058,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),lg()()()(),Ml(2059,`tr`,16)(2060,`td`,17)(2061,`div`,25)(2062,`span`,26),mN(2063,` debounceTime`),ql(2064,`br`),lg()()(),Ml(2065,`td`,21)(2066,`code`,45),mN(2067,`number`),lg()(),Ml(2068,`td`,24)(2069,`em`)(2070,`strong`),mN(2071,`(opcional)`),lg()(),Ml(2072,`p`),mN(2073,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Ml(2074,`code`),mN(2075,`p-filter-service`),lg(),mN(2076,`).`),lg(),Ml(2077,`p`)(2078,`strong`),mN(2079,`Componentes compatíveis:`),lg(),Ml(2080,`code`),mN(2081,`po-combo`),lg(),mN(2082,`, `),Ml(2083,`code`),mN(2084,`po-multiselect`),lg(),mN(2085,`.`),lg()()(),Ml(2086,`tr`,16)(2087,`td`,17)(2088,`div`,25)(2089,`span`,26),mN(2090,` decimalsLength`),ql(2091,`br`),lg()()(),Ml(2092,`td`,21)(2093,`code`,45),mN(2094,`number`),lg()(),Ml(2095,`td`,24)(2096,`em`)(2097,`strong`),mN(2098,`(opcional)`),lg()(),Ml(2099,`p`),mN(2100,`Quantidade máxima de casas decimais.`),lg(),Ml(2101,`blockquote`)(2102,`p`),mN(2103,`Esta propriedade só pode ser utilizada quando o `),Ml(2104,`code`),mN(2105,`type`),lg(),mN(2106,` for `),Ml(2107,`em`),mN(2108,`currency`),lg(),mN(2109,` ou `),Ml(2110,`em`),mN(2111,`decimal`),lg(),mN(2112,`.`),lg()(),Ml(2113,`blockquote`)(2114,`p`),mN(2115,`Quando utilizado com `),Ml(2116,`code`),mN(2117,`displayFormat`),lg(),mN(2118,`, será respeitado o valor `),Ml(2119,`strong`),mN(2120,`mais restritivo`),lg(),mN(2121,` entre esta propriedade e o número de casas decimais definido no formato.`),lg()()()(),Ml(2122,`tr`,16)(2123,`td`,17)(2124,`div`,25)(2125,`span`,26),mN(2126,` directory`),ql(2127,`br`),lg()()(),Ml(2128,`td`,21)(2129,`code`,29),mN(2130,`boolean`),lg()(),Ml(2131,`td`,24)(2132,`em`)(2133,`strong`),mN(2134,`(opcional)`),lg()(),Ml(2135,`p`),mN(2136,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),lg(),Ml(2137,`blockquote`)(2138,`p`),mN(2139,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),lg()(),Ml(2140,`blockquote`)(2141,`p`),mN(2142,`Definição não suportada pelo browser `),Ml(2143,`strong`),mN(2144,`Internet Explorer`),lg(),mN(2145,`, todavia será possível a seleção de arquivos padrão.`),lg()(),Ml(2146,`p`)(2147,`strong`),mN(2148,`Componente compatível`),lg(),mN(2149,`: `),Ml(2150,`code`),mN(2151,`po-upload`),lg()()()(),Ml(2152,`tr`,16)(2153,`td`,17)(2154,`div`,25)(2155,`span`,26),mN(2156,` disabled`),ql(2157,`br`),lg()()(),Ml(2158,`td`,21)(2159,`code`,29),mN(2160,`boolean`),lg()(),Ml(2161,`td`,24)(2162,`em`)(2163,`strong`),mN(2164,`(opcional)`),lg()(),Ml(2165,`p`),mN(2166,`Desabilita o campo caso informar o valor `),Ml(2167,`em`),mN(2168,`true`),lg(),mN(2169,`.`),lg()()(),Ml(2170,`tr`,16)(2171,`td`,17)(2172,`div`,25)(2173,`span`,26),mN(2174,` disabledInitFilter`),ql(2175,`br`),lg()()(),Ml(2176,`td`,21)(2177,`code`,29),mN(2178,`boolean`),lg()(),Ml(2179,`td`,24)(2180,`em`)(2181,`strong`),mN(2182,`(opcional)`),lg()(),Ml(2183,`p`),mN(2184,`Desabilita o filtro inicial no serviço do `),Ml(2185,`code`),mN(2186,`po-combo`),lg(),mN(2187,`, que é executado no primeiro clique no campo.`),lg()()(),Ml(2188,`tr`,16)(2189,`td`,17)(2190,`div`,25)(2191,`span`,26),mN(2192,` disabledTabFilter`),ql(2193,`br`),lg()()(),Ml(2194,`td`,21)(2195,`code`,29),mN(2196,`boolean`),lg()(),Ml(2197,`td`,24)(2198,`em`)(2199,`strong`),mN(2200,`(opcional)`),lg()(),Ml(2201,`p`),mN(2202,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Ml(2203,`code`),mN(2204,`po-combo`),lg(),mN(2205,`.`),lg()()(),Ml(2206,`tr`,16)(2207,`td`,17)(2208,`div`,25)(2209,`span`,26),mN(2210,` displayFormat`),ql(2211,`br`),lg()()(),Ml(2212,`td`,21)(2213,`code`,27),mN(2214,`string`),lg()(),Ml(2215,`td`,24)(2216,`em`)(2217,`strong`),mN(2218,`(opcional)`),lg()(),Ml(2219,`p`),mN(2220,`Define uma máscara de formatação numérica avançada para o campo.`),lg(),Ml(2221,`p`),mN(2222,`Simbologia suportada:`),lg(),Ml(2223,`ul`)(2224,`li`)(2225,`code`),mN(2226,`9`),lg(),mN(2227,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),lg(),Ml(2228,`li`)(2229,`code`),mN(2230,`>`),lg(),mN(2231,`: Supressão de zero à esquerda (dígito não obrigatório);`),lg(),Ml(2232,`li`)(2233,`code`),mN(2234,`<`),lg(),mN(2235,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),lg(),Ml(2236,`li`)(2237,`code`),mN(2238,`.`),lg(),mN(2239,`: Separador decimal (convertido conforme locale);`),lg(),Ml(2240,`li`)(2241,`code`),mN(2242,`,`),lg(),mN(2243,`: Separador de milhar/grupo (convertido conforme locale);`),lg(),Ml(2244,`li`)(2245,`code`),mN(2246,`-`),lg(),mN(2247,`: Sinal negativo (deve ser o primeiro caractere do formato).`),lg()(),Ml(2248,`blockquote`)(2249,`p`),mN(2250,`Quando utilizado com `),Ml(2251,`code`),mN(2252,`decimalsLength`),lg(),mN(2253,` ou `),Ml(2254,`code`),mN(2255,`thousandMaxlength`),lg(),mN(2256,`, será respeitado o valor `),Ml(2257,`strong`),mN(2258,`mais restritivo`),lg(),mN(2259,` entre a propriedade e o formato.`),lg()(),Ml(2260,`p`),mN(2261,`Exemplos: `),Ml(2262,`code`),mN(2263,`'>>>,>>>,>>9.99'`),lg(),mN(2264,`, `),Ml(2265,`code`),mN(2266,`'->>9.99'`),lg(),mN(2267,`, `),Ml(2268,`code`),mN(2269,`'999.9'`),lg()(),Ml(2270,`blockquote`)(2271,`p`),mN(2272,`Esta propriedade só pode ser utilizada quando o `),Ml(2273,`code`),mN(2274,`type`),lg(),mN(2275,` for `),Ml(2276,`em`),mN(2277,`currency`),lg(),mN(2278,` ou `),Ml(2279,`em`),mN(2280,`decimal`),lg(),mN(2281,`.`),lg()(),Ml(2282,`p`)(2283,`strong`),mN(2284,`Componente compatível:`),lg(),Ml(2285,`code`),mN(2286,`po-decimal`),lg(),mN(2287,`.`),lg()()(),Ml(2288,`tr`,16)(2289,`td`,17)(2290,`div`,25)(2291,`span`,26),mN(2292,` divider`),ql(2293,`br`),lg()()(),Ml(2294,`td`,21)(2295,`code`,27),mN(2296,`string`),lg()(),Ml(2297,`td`,24)(2298,`em`)(2299,`strong`),mN(2300,`(opcional)`),lg()(),Ml(2301,`p`),mN(2302,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),lg()()(),Ml(2303,`tr`,16)(2304,`td`,17)(2305,`div`,25)(2306,`span`,26),mN(2307,` dragDrop`),ql(2308,`br`),lg()()(),Ml(2309,`td`,21)(2310,`code`,29),mN(2311,`boolean`),lg()(),Ml(2312,`td`,24)(2313,`em`)(2314,`strong`),mN(2315,`(opcional)`),lg()(),Ml(2316,`p`),mN(2317,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),lg(),Ml(2318,`blockquote`)(2319,`p`),mN(2320,`Recomendamos utilizar apenas um `),Ml(2321,`code`),mN(2322,`po-upload`),lg(),mN(2323,` com esta funcionalidade por tela.`),lg()(),Ml(2324,`p`)(2325,`strong`),mN(2326,`Componente compatível`),lg(),mN(2327,`: `),Ml(2328,`code`),mN(2329,`po-upload`),lg()()()(),Ml(2330,`tr`,16)(2331,`td`,17)(2332,`div`,25)(2333,`span`,26),mN(2334,` dragDropHeight`),ql(2335,`br`),lg()()(),Ml(2336,`td`,21)(2337,`code`,45),mN(2338,`number`),lg()(),Ml(2339,`td`,24)(2340,`em`)(2341,`strong`),mN(2342,`(opcional)`),lg()(),Ml(2343,`p`),mN(2344,`Define em `),Ml(2345,`em`),mN(2346,`pixels`),lg(),mN(2347,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ml(2348,`code`),mN(2349,`160px`),lg(),mN(2350,`.`),lg(),Ml(2351,`blockquote`)(2352,`p`),mN(2353,`Esta propriedade funciona somente se a propriedade `),Ml(2354,`code`),mN(2355,`p-drag-drop`),lg(),mN(2356,` estiver habilitada.`),lg()(),Ml(2357,`p`)(2358,`strong`),mN(2359,`Componente compatível`),lg(),mN(2360,`: `),Ml(2361,`code`),mN(2362,`po-upload`),lg()()()(),Ml(2363,`tr`,16)(2364,`td`,17)(2365,`div`,25)(2366,`span`,26),mN(2367,` errorAsyncFunction`),ql(2368,`br`),lg()()(),Ml(2369,`td`,21)(2370,`code`,50),mN(2371,`(value) => Observable<boolean>`),lg()(),Ml(2372,`td`,24)(2373,`em`)(2374,`strong`),mN(2375,`(opcional)`),lg()(),Ml(2376,`p`),mN(2377,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(2378,`code`),mN(2379,`change`),lg(),mN(2380,` ou `),Ml(2381,`code`),mN(2382,`change-model`),lg(),mN(2383,`, dependendo do valor da propriedade `),Ml(2384,`code`),mN(2385,`triggerMode`),lg(),mN(2386,`.`),lg(),Ml(2387,`blockquote`)(2388,`p`),mN(2389,`Retorna `),Ml(2390,`code`),mN(2391,`Observable com o valor true`),lg(),mN(2392,` para sinalizar o erro `),Ml(2393,`code`),mN(2394,`false`),lg(),mN(2395,` para indicar que não há erro.`),lg()(),Ml(2396,`p`)(2397,`strong`),mN(2398,`Componente compatível`),lg(),mN(2399,`: `),Ml(2400,`code`),mN(2401,`po-datepicker`),lg()()()(),Ml(2402,`tr`,16)(2403,`td`,17)(2404,`div`,25)(2405,`span`,26),mN(2406,` errorAsyncProperties`),ql(2407,`br`),lg()()(),Ml(2408,`td`,21)(2409,`code`,51),mN(2410,`ErrorAsyncProperties`),lg()(),Ml(2411,`td`,24)(2412,`em`)(2413,`strong`),mN(2414,`(opcional)`),lg()(),Ml(2415,`p`),mN(2416,`Realiza alguma validação customizada assíncrona no componente.`),lg(),Ml(2417,`p`)(2418,`strong`),mN(2419,`Componentes compatíveis:`),lg(),Ml(2420,`code`),mN(2421,`po-input`),lg(),mN(2422,`, `),Ml(2423,`code`),mN(2424,`po-number`),lg(),mN(2425,`, `),Ml(2426,`code`),mN(2427,`po-decimal`),lg(),mN(2428,`, `),Ml(2429,`code`),mN(2430,`po-password`),lg(),mN(2431,`.`),lg()()(),Ml(2432,`tr`,16)(2433,`td`,17)(2434,`div`,25)(2435,`span`,26),mN(2436,` errorLimit`),ql(2437,`br`),lg()()(),Ml(2438,`td`,21)(2439,`code`,29),mN(2440,`boolean`),lg()(),Ml(2441,`td`,24)(2442,`em`)(2443,`strong`),mN(2444,`(opcional)`),lg()(),Ml(2445,`p`),mN(2446,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(2447,`blockquote`)(2448,`p`),mN(2449,`Caso essa propriedade seja definida como `),Ml(2450,`code`),mN(2451,`true`),lg(),mN(2452,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()(),Ml(2453,`p`)(2454,`strong`),mN(2455,`Componentes compatíveis:`),lg(),Ml(2456,`code`),mN(2457,`po-checkbox-group`),lg(),mN(2458,`, `),Ml(2459,`code`),mN(2460,`po-combo`),lg(),mN(2461,`, `),Ml(2462,`code`),mN(2463,`po-datepicker`),lg(),mN(2464,`, `),Ml(2465,`code`),mN(2466,`po-datepicker-range`),lg(),mN(2467,`, `),Ml(2468,`code`),mN(2469,`po-decimal`),lg(),mN(2470,`, `),Ml(2471,`code`),mN(2472,`po-input`),lg(),mN(2473,`, `),Ml(2474,`code`),mN(2475,`po-lookup`),lg(),mN(2476,`, `),Ml(2477,`code`),mN(2478,`po-multiselect`),lg(),mN(2479,`, `),Ml(2480,`code`),mN(2481,`po-number`),lg(),mN(2482,`, `),Ml(2483,`code`),mN(2484,`po-password`),lg(),mN(2485,`, `),Ml(2486,`code`),mN(2487,`po-radio-group`),lg(),mN(2488,`, `),Ml(2489,`code`),mN(2490,`po-select`),lg(),mN(2491,`,
`),Ml(2492,`code`),mN(2493,`po-switch`),lg(),mN(2494,`, `),Ml(2495,`code`),mN(2496,`po-textarea`),lg(),mN(2497,`, `),Ml(2498,`code`),mN(2499,`po-timepicker`),lg(),mN(2500,`.`),lg()()(),Ml(2501,`tr`,16)(2502,`td`,17)(2503,`div`,25)(2504,`span`,26),mN(2505,` errorMessage`),ql(2506,`br`),lg()()(),Ml(2507,`td`,21)(2508,`code`,27),mN(2509,`string`),lg()(),Ml(2510,`td`,24)(2511,`em`)(2512,`strong`),mN(2513,`(opcional)`),lg()(),Ml(2514,`p`),mN(2515,`Mensagem que será apresentada quando o campo ficar inválido.`),lg(),Ml(2516,`p`),mN(2517,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),lg(),Ml(2518,`ul`)(2519,`li`),mN(2520,`pattern;`),lg(),Ml(2521,`li`),mN(2522,`minValue;`),lg(),Ml(2523,`li`),mN(2524,`maxValue;`),lg(),Ml(2525,`li`),mN(2526,`required;`),lg()(),Ml(2527,`blockquote`)(2528,`p`),mN(2529,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Ml(2530,`code`),mN(2531,`po-datepicker`),lg(),mN(2532,`, `),Ml(2533,`code`),mN(2534,`po-input`),lg(),mN(2535,`, `),Ml(2536,`code`),mN(2537,`po-number`),lg(),mN(2538,`, `),Ml(2539,`code`),mN(2540,`po-decimal`),lg(),mN(2541,`, `),Ml(2542,`code`),mN(2543,`po-password`),lg(),mN(2544,`, `),Ml(2545,`code`),mN(2546,`po-timepicker`),lg(),mN(2547,`, \xE9 necess\xE1rio que a propriedade
`),Ml(2548,`code`),mN(2549,`requiredFieldErrorMessage`),lg(),mN(2550,` esteja como `),Ml(2551,`code`),mN(2552,`true`),lg(),mN(2553,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Ml(2554,`code`),mN(2555,`po-datepicker-range`),lg(),mN(2556,`, `),Ml(2557,`code`),mN(2558,`po-select`),lg(),mN(2559,`, `),Ml(2560,`code`),mN(2561,`po-checkbox-group`),lg(),mN(2562,`, `),Ml(2563,`code`),mN(2564,`po-radio-group`),lg(),mN(2565,`, `),Ml(2566,`code`),mN(2567,`po-multiselect`),lg(),mN(2568,`, `),Ml(2569,`code`),mN(2570,`po-combo`),lg(),mN(2571,`,
`),Ml(2572,`code`),mN(2573,`po-lookup`),lg(),mN(2574,` e `),Ml(2575,`code`),mN(2576,`po-textarea`),lg(),mN(2577,` não é necessário passar a propriedade `),Ml(2578,`code`),mN(2579,`requiredFieldErrorMessage`),lg(),mN(2580,`.`),lg()(),Ml(2581,`p`)(2582,`strong`),mN(2583,`Componentes compatíveis:`),lg(),Ml(2584,`code`),mN(2585,`po-checkbox-group`),lg(),mN(2586,`, `),Ml(2587,`code`),mN(2588,`po-combo`),lg(),mN(2589,`, `),Ml(2590,`code`),mN(2591,`po-datepicker`),lg(),mN(2592,`, `),Ml(2593,`code`),mN(2594,`po-datepicker-range`),lg(),mN(2595,`, `),Ml(2596,`code`),mN(2597,`po-decimal`),lg(),mN(2598,`, `),Ml(2599,`code`),mN(2600,`po-input`),lg(),mN(2601,`, `),Ml(2602,`code`),mN(2603,`po-lookup`),lg(),mN(2604,`, `),Ml(2605,`code`),mN(2606,`po-multiselect`),lg(),mN(2607,`, `),Ml(2608,`code`),mN(2609,`po-number`),lg(),mN(2610,`, `),Ml(2611,`code`),mN(2612,`po-password`),lg(),mN(2613,`, `),Ml(2614,`code`),mN(2615,`po-radio-group`),lg(),mN(2616,`, `),Ml(2617,`code`),mN(2618,`po-select`),lg(),mN(2619,`,
`),Ml(2620,`code`),mN(2621,`po-switch`),lg(),mN(2622,`, `),Ml(2623,`code`),mN(2624,`po-textarea`),lg(),mN(2625,`, `),Ml(2626,`code`),mN(2627,`po-timepicker`),lg(),mN(2628,`.`),lg()()(),Ml(2629,`tr`,16)(2630,`td`,17)(2631,`div`,25)(2632,`span`,26),mN(2633,` fieldLabel`),ql(2634,`br`),lg()()(),Ml(2635,`td`,21)(2636,`code`,27),mN(2637,`string`),lg()(),Ml(2638,`td`,24)(2639,`em`)(2640,`strong`),mN(2641,`(opcional)`),lg()(),Ml(2642,`p`),mN(2643,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),lg(),Ml(2644,`p`),mN(2645,`O valor padrão é: `),Ml(2646,`code`),mN(2647,`label`),lg(),mN(2648,`.`),lg(),Ml(2649,`blockquote`)(2650,`p`),mN(2651,`Esta propriedade pode ser utilizada em conjunto com: `),Ml(2652,`code`),mN(2653,`options`),lg(),mN(2654,`, `),Ml(2655,`code`),mN(2656,`optionsService`),lg(),mN(2657,` e `),Ml(2658,`code`),mN(2659,`searchService`),lg(),mN(2660,`.`),lg()()()(),Ml(2661,`tr`,16)(2662,`td`,17)(2663,`div`,25)(2664,`span`,26),mN(2665,` fieldValue`),ql(2666,`br`),lg()()(),Ml(2667,`td`,21)(2668,`code`,27),mN(2669,`string`),lg()(),Ml(2670,`td`,24)(2671,`em`)(2672,`strong`),mN(2673,`(opcional)`),lg()(),Ml(2674,`p`),mN(2675,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),lg(),Ml(2676,`p`),mN(2677,`O valor padrão é: `),Ml(2678,`code`),mN(2679,`value`),lg(),mN(2680,`.`),lg(),Ml(2681,`blockquote`)(2682,`p`),mN(2683,`Esta propriedade pode ser utilizada em conjunto com: `),Ml(2684,`code`),mN(2685,`options`),lg(),mN(2686,`, `),Ml(2687,`code`),mN(2688,`optionsService`),lg(),mN(2689,` e `),Ml(2690,`code`),mN(2691,`searchService`),lg(),mN(2692,`.`),lg()()()(),Ml(2693,`tr`,16)(2694,`td`,17)(2695,`div`,25)(2696,`span`,26),mN(2697,` filterMinlength`),ql(2698,`br`),lg()()(),Ml(2699,`td`,21)(2700,`code`,45),mN(2701,`number`),lg()(),Ml(2702,`td`,24)(2703,`em`)(2704,`strong`),mN(2705,`(opcional)`),lg()(),Ml(2706,`p`),mN(2707,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Ml(2708,`code`),mN(2709,`po-combo`),lg(),mN(2710,`.`),lg()()(),Ml(2711,`tr`,16)(2712,`td`,17)(2713,`div`,25)(2714,`span`,26),mN(2715,` filterMode`),ql(2716,`br`),lg()()(),Ml(2717,`td`,21)(2718,`code`,52),mN(2719,`PoMultiselectFilterMode`),lg()(),Ml(2720,`td`,24)(2721,`em`)(2722,`strong`),mN(2723,`(opcional)`),lg()(),Ml(2724,`p`),mN(2725,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ml(2726,`code`),mN(2727,`startsWith`),lg(),mN(2728,`, `),Ml(2729,`code`),mN(2730,`contains`),lg(),mN(2731,` ou `),Ml(2732,`code`),mN(2733,`endsWith`),lg(),mN(2734,`.`),lg(),Ml(2735,`blockquote`)(2736,`p`),mN(2737,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),lg()(),Ml(2738,`p`)(2739,`strong`),mN(2740,`Componente compatível:`),lg(),Ml(2741,`code`),mN(2742,`po-multiselect`),lg(),mN(2743,`.`),lg()()(),Ml(2744,`tr`,16)(2745,`td`,17)(2746,`div`,25)(2747,`span`,26),mN(2748,` forceBooleanComponentType`),ql(2749,`br`),lg()()(),Ml(2750,`td`,21)(2751,`code`,53),mN(2752,`ForceBooleanComponentEnum`),lg()(),Ml(2753,`td`,24)(2754,`em`)(2755,`strong`),mN(2756,`(opcional)`),lg()(),Ml(2757,`p`),mN(2758,`Valores aceitos:`),lg(),Ml(2759,`ul`)(2760,`li`),mN(2761,`ForceBooleanComponentEnum.switch`),lg(),Ml(2762,`li`),mN(2763,`ForceBooleanComponentEnum.checkbox`),lg()()()(),Ml(2764,`tr`,16)(2765,`td`,17)(2766,`div`,25)(2767,`span`,26),mN(2768,` forceOptionsComponentType`),ql(2769,`br`),lg()()(),Ml(2770,`td`,21)(2771,`code`,54),mN(2772,`ForceOptionComponentEnum`),lg()(),Ml(2773,`td`,24)(2774,`em`)(2775,`strong`),mN(2776,`(opcional)`),lg()(),Ml(2777,`p`),mN(2778,`pode ser utilizada em conjunto com a propriedade `),Ml(2779,`code`),mN(2780,`options`),lg(),mN(2781,` forçando o componente a renderizar um `),Ml(2782,`code`),mN(2783,`po-select`),lg(),mN(2784,` ou `),Ml(2785,`code`),mN(2786,`po-radio-group`),lg(),mN(2787,`.`),lg(),Ml(2788,`p`),mN(2789,`Valores aceitos:`),lg(),Ml(2790,`ul`)(2791,`li`),mN(2792,`ForceOptionComponentEnum.radioGroup`),lg(),Ml(2793,`li`),mN(2794,`ForceOptionComponentEnum.select`),lg()(),Ml(2795,`blockquote`)(2796,`p`),mN(2797,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Ml(2798,`code`),mN(2799,`optionsMulti`),lg(),mN(2800,` e `),Ml(2801,`code`),mN(2802,`optionsService`),lg(),mN(2803,`.`),lg()()()(),Ml(2804,`tr`,16)(2805,`td`,17)(2806,`div`,25)(2807,`span`,26),mN(2808,` formField`),ql(2809,`br`),lg()()(),Ml(2810,`td`,21)(2811,`code`,27),mN(2812,`string`),lg()(),Ml(2813,`td`,24)(2814,`em`)(2815,`strong`),mN(2816,`(opcional)`),lg()(),Ml(2817,`p`),mN(2818,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ml(2819,`code`),mN(2820,`url`),lg(),mN(2821,`.`),lg(),Ml(2822,`blockquote`)(2823,`p`),mN(2824,`O valor default é `),Ml(2825,`code`),mN(2826,`files`),lg()()(),Ml(2827,`p`)(2828,`strong`),mN(2829,`Componente compatível`),lg(),mN(2830,`: `),Ml(2831,`code`),mN(2832,`po-upload`),lg()()()(),Ml(2833,`tr`,16)(2834,`td`,17)(2835,`div`,25)(2836,`span`,26),mN(2837,` format`),ql(2838,`br`),lg()()(),Ml(2839,`td`,21)(2840,`code`,27),mN(2841,`string `),lg(),Ml(2842,`code`,32),mN(2843,` Array<string>`),lg()(),Ml(2844,`td`,24)(2845,`em`)(2846,`strong`),mN(2847,`(opcional)`),lg()(),Ml(2848,`p`),mN(2849,`Formato de exibição no campo.`),lg(),Ml(2850,`p`),mN(2851,`Ao utilizar esta propriedade com o `),Ml(2852,`code`),mN(2853,`type`),lg(),Ml(2854,`em`),mN(2855,`PoDynamicFieldType.Date`),lg(),mN(2856,` ou `),Ml(2857,`em`),mN(2858,`PoDynamicFieldType.DateTime`),lg(),mN(2859,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),lg(),Ml(2860,`p`),mN(2861,`Valores válidos:`),lg(),Ml(2862,`ul`)(2863,`li`),mN(2864,`dd/mm/yyyy`),lg(),Ml(2865,`li`),mN(2866,`mm/dd/yyyy`),lg(),Ml(2867,`li`),mN(2868,`yyyy/mm/dd`),lg()(),Ml(2869,`p`),mN(2870,`Ao utilizar com o `),Ml(2871,`code`),mN(2872,`type`),lg(),Ml(2873,`em`),mN(2874,`PoDynamicFieldType.Time`),lg(),mN(2875,`, define o formato de exibição do horário:`),lg(),Ml(2876,`p`),mN(2877,`Valores válidos:`),lg(),Ml(2878,`ul`)(2879,`li`)(2880,`code`),mN(2881,`24`),lg(),mN(2882,`: formato de 24 horas (padrão)`),lg(),Ml(2883,`li`)(2884,`code`),mN(2885,`12`),lg(),mN(2886,`: formato de 12 horas com indicador AM/PM`),lg()(),Ml(2887,`p`),mN(2888,`Também pode-se utilizar em conjunto com `),Ml(2889,`code`),mN(2890,`searchService`),lg(),mN(2891,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),lg(),Ml(2892,`p`)(2893,`strong`),mN(2894,`Componentes compatíveis:`),lg(),Ml(2895,`code`),mN(2896,`po-datepicker`),lg(),mN(2897,`, `),Ml(2898,`code`),mN(2899,`po-datetimepicker`),lg(),mN(2900,`, `),Ml(2901,`code`),mN(2902,`po-timepicker`),lg(),mN(2903,`, `),Ml(2904,`code`),mN(2905,`po-lookup`),lg(),mN(2906,`.`),lg()()(),Ml(2907,`tr`,16)(2908,`td`,17)(2909,`div`,25)(2910,`span`,26),mN(2911,` formatModel`),ql(2912,`br`),lg()()(),Ml(2913,`td`,21)(2914,`code`,29),mN(2915,`boolean`),lg()(),Ml(2916,`td`,24)(2917,`em`)(2918,`strong`),mN(2919,`(opcional)`),lg()(),Ml(2920,`p`),mN(2921,`Indica se o `),Ml(2922,`code`),mN(2923,`model`),lg(),mN(2924,` receberá o valor formatado pelas propriedades `),Ml(2925,`code`),mN(2926,`p-label-on`),lg(),mN(2927,` e `),Ml(2928,`code`),mN(2929,`p-label-off`),lg(),mN(2930,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),lg(),Ml(2931,`p`),mN(2932,`O valor padrão é: `),Ml(2933,`code`),mN(2934,`false`),lg(),mN(2935,`.`),lg(),Ml(2936,`blockquote`)(2937,`p`),mN(2938,`Esta propriedade está disponivel apenas para o `),Ml(2939,`code`),mN(2940,`swicth`),lg(),mN(2941,`.`),lg()()()(),Ml(2942,`tr`,16)(2943,`td`,17)(2944,`div`,25)(2945,`span`,26),mN(2946,` formatTime`),ql(2947,`br`),lg()()(),Ml(2948,`td`,21)(2949,`code`,27),mN(2950,`string`),lg()(),Ml(2951,`td`,24)(2952,`em`)(2953,`strong`),mN(2954,`(opcional)`),lg()(),Ml(2955,`p`),mN(2956,`Define o formato de exibição do timer (`),Ml(2957,`code`),mN(2958,`'12'`),lg(),mN(2959,` ou `),Ml(2960,`code`),mN(2961,`'24'`),lg(),mN(2962,`).`),lg(),Ml(2963,`p`)(2964,`strong`),mN(2965,`Componente compatível:`),lg(),Ml(2966,`code`),mN(2967,`po-datetimepicker`),lg()()()(),Ml(2968,`tr`,16)(2969,`td`,17)(2970,`div`,25)(2971,`span`,26),mN(2972,` gridColumns`),ql(2973,`br`),lg()()(),Ml(2974,`td`,21)(2975,`code`,45),mN(2976,`number`),lg()(),Ml(2977,`td`,24)(2978,`em`)(2979,`strong`),mN(2980,`(opcional)`),lg()(),Ml(2981,`p`),mN(2982,`Tamanho de exibição do campo em telas.`),lg(),Ml(2983,`p`),mN(2984,`Deve ser usado o sistema de `),Ml(2985,`strong`),mN(2986,`grid`),lg(),mN(2987,` do PO (1 ... 12 colunas).`),lg(),Ml(2988,`blockquote`)(2989,`p`),mN(2990,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(2991,`tr`,16)(2992,`td`,17)(2993,`div`,25)(2994,`span`,26),mN(2995,` gridLgColumns`),ql(2996,`br`),lg()()(),Ml(2997,`td`,21)(2998,`code`,45),mN(2999,`number`),lg()(),Ml(3e3,`td`,24)(3001,`em`)(3002,`strong`),mN(3003,`(opcional)`),lg()(),Ml(3004,`p`),mN(3005,`Tamanho de exibição do campo em telas grandes (lg).`),lg(),Ml(3006,`p`),mN(3007,`Deve ser usado o sistema de `),Ml(3008,`strong`),mN(3009,`grid`),lg(),mN(3010,` do PO (1 ... 12 colunas).`),lg(),Ml(3011,`blockquote`)(3012,`p`),mN(3013,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3014,`code`),mN(3015,`gridColumns`),lg(),mN(3016,`.`),lg()()()(),Ml(3017,`tr`,16)(3018,`td`,17)(3019,`div`,25)(3020,`span`,26),mN(3021,` gridLgPull`),ql(3022,`br`),lg()()(),Ml(3023,`td`,21)(3024,`code`,45),mN(3025,`number`),lg()(),Ml(3026,`td`,24)(3027,`em`)(3028,`strong`),mN(3029,`(opcional)`),lg()(),Ml(3030,`p`),mN(3031,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),lg(),Ml(3032,`p`),mN(3033,`Deve ser usado o sistema de `),Ml(3034,`strong`),mN(3035,`grid`),lg(),mN(3036,` do PO (1 ... 11 colunas).`),lg(),Ml(3037,`blockquote`)(3038,`p`),mN(3039,`Esta propriedade não funciona com a propriedade `),Ml(3040,`code`),mN(3041,`gridColumns`),lg(),mN(3042,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(3043,`tr`,16)(3044,`td`,17)(3045,`div`,25)(3046,`span`,26),mN(3047,` gridMdColumns`),ql(3048,`br`),lg()()(),Ml(3049,`td`,21)(3050,`code`,45),mN(3051,`number`),lg()(),Ml(3052,`td`,24)(3053,`em`)(3054,`strong`),mN(3055,`(opcional)`),lg()(),Ml(3056,`p`),mN(3057,`Tamanho de exibição do campo em telas médias (md).`),lg(),Ml(3058,`p`),mN(3059,`Deve ser usado o sistema de `),Ml(3060,`strong`),mN(3061,`grid`),lg(),mN(3062,` do PO (1 ... 12 colunas).`),lg(),Ml(3063,`blockquote`)(3064,`p`),mN(3065,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3066,`code`),mN(3067,`gridColumns`),lg(),mN(3068,`.`),lg()()()(),Ml(3069,`tr`,16)(3070,`td`,17)(3071,`div`,25)(3072,`span`,26),mN(3073,` gridMdPull`),ql(3074,`br`),lg()()(),Ml(3075,`td`,21)(3076,`code`,45),mN(3077,`number`),lg()(),Ml(3078,`td`,24)(3079,`em`)(3080,`strong`),mN(3081,`(opcional)`),lg()(),Ml(3082,`p`),mN(3083,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),lg(),Ml(3084,`p`),mN(3085,`Deve ser usado o sistema de `),Ml(3086,`strong`),mN(3087,`grid`),lg(),mN(3088,` do PO (1 ... 11 colunas).`),lg(),Ml(3089,`blockquote`)(3090,`p`),mN(3091,`Esta propriedade não funciona com a propriedade `),Ml(3092,`code`),mN(3093,`gridColumns`),lg(),mN(3094,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(3095,`tr`,16)(3096,`td`,17)(3097,`div`,25)(3098,`span`,26),mN(3099,` gridSmColumns`),ql(3100,`br`),lg()()(),Ml(3101,`td`,21)(3102,`code`,45),mN(3103,`number`),lg()(),Ml(3104,`td`,24)(3105,`em`)(3106,`strong`),mN(3107,`(opcional)`),lg()(),Ml(3108,`p`),mN(3109,`Tamanho de exibição do campo em telas menores (sm).`),lg(),Ml(3110,`p`),mN(3111,`Deve ser usado o sistema de `),Ml(3112,`strong`),mN(3113,`grid`),lg(),mN(3114,` do PO (1 ... 12 colunas).`),lg(),Ml(3115,`blockquote`)(3116,`p`),mN(3117,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3118,`code`),mN(3119,`gridColumns`),lg(),mN(3120,`.`),lg()()()(),Ml(3121,`tr`,16)(3122,`td`,17)(3123,`div`,25)(3124,`span`,26),mN(3125,` gridSmPull`),ql(3126,`br`),lg()()(),Ml(3127,`td`,21)(3128,`code`,45),mN(3129,`number`),lg()(),Ml(3130,`td`,24)(3131,`em`)(3132,`strong`),mN(3133,`(opcional)`),lg()(),Ml(3134,`p`),mN(3135,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),lg(),Ml(3136,`p`),mN(3137,`Deve ser usado o sistema de `),Ml(3138,`strong`),mN(3139,`grid`),lg(),mN(3140,` do PO (1 ... 11 colunas).`),lg(),Ml(3141,`blockquote`)(3142,`p`),mN(3143,`Esta propriedade não funciona com a propriedade `),Ml(3144,`code`),mN(3145,`gridColumns`),lg(),mN(3146,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(3147,`tr`,16)(3148,`td`,17)(3149,`div`,25)(3150,`span`,26),mN(3151,` gridXlColumns`),ql(3152,`br`),lg()()(),Ml(3153,`td`,21)(3154,`code`,45),mN(3155,`number`),lg()(),Ml(3156,`td`,24)(3157,`em`)(3158,`strong`),mN(3159,`(opcional)`),lg()(),Ml(3160,`p`),mN(3161,`Tamanho de exibição do campo em telas extra grandes (xl).`),lg(),Ml(3162,`p`),mN(3163,`Deve ser usado o sistema de `),Ml(3164,`strong`),mN(3165,`grid`),lg(),mN(3166,` do PO (1 ... 12 colunas).`),lg(),Ml(3167,`blockquote`)(3168,`p`),mN(3169,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3170,`code`),mN(3171,`gridColumns`),lg(),mN(3172,`.`),lg()()()(),Ml(3173,`tr`,16)(3174,`td`,17)(3175,`div`,25)(3176,`span`,26),mN(3177,` gridXlPull`),ql(3178,`br`),lg()()(),Ml(3179,`td`,21)(3180,`code`,45),mN(3181,`number`),lg()(),Ml(3182,`td`,24)(3183,`em`)(3184,`strong`),mN(3185,`(opcional)`),lg()(),Ml(3186,`p`),mN(3187,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),lg(),Ml(3188,`p`),mN(3189,`Deve ser usado o sistema de `),Ml(3190,`strong`),mN(3191,`grid`),lg(),mN(3192,` do PO (1 ... 11 colunas).`),lg(),Ml(3193,`blockquote`)(3194,`p`),mN(3195,`Esta propriedade não funciona com a propriedade `),Ml(3196,`code`),mN(3197,`gridColumns`),lg(),mN(3198,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(3199,`tr`,16)(3200,`td`,17)(3201,`div`,25)(3202,`span`,26),mN(3203,` headers`),ql(3204,`br`),lg()()(),Ml(3205,`td`,21)(3206,`code`,55),mN(3207,`{ [name: string]: string `),lg(),Ml(3208,`code`,56),mN(3209,` Array<string>;
}`),lg()(),Ml(3210,`td`,24)(3211,`em`)(3212,`strong`),mN(3213,`(opcional)`),lg()(),Ml(3214,`p`),mN(3215,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),lg(),Ml(3216,`p`)(3217,`strong`),mN(3218,`Componente compatível`),lg(),mN(3219,`: `),Ml(3220,`code`),mN(3221,`po-upload`),lg()()()(),Ml(3222,`tr`,16)(3223,`td`,17)(3224,`div`,25)(3225,`span`,26),mN(3226,` help`),ql(3227,`br`),lg()()(),Ml(3228,`td`,21)(3229,`code`,27),mN(3230,`string`),lg()(),Ml(3231,`td`,24)(3232,`em`)(3233,`strong`),mN(3234,`(opcional)`),lg()(),Ml(3235,`p`),mN(3236,`Texto de ajuda.`),lg()()(),Ml(3237,`tr`,16)(3238,`td`,17)(3239,`div`,25)(3240,`span`,26),mN(3241,` helper`),ql(3242,`br`),lg()()(),Ml(3243,`td`,21)(3244,`code`,27),mN(3245,`string `),lg(),Ml(3246,`code`,38),mN(3247,` PoHelperOptions`),lg()(),Ml(3248,`td`,24)(3249,`em`)(3250,`strong`),mN(3251,`(opcional)`),lg()(),Ml(3252,`p`),mN(3253,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),lg()()(),Ml(3254,`tr`,16)(3255,`td`,17)(3256,`div`,25)(3257,`span`,26),mN(3258,` hideLabelStatus`),ql(3259,`br`),lg()()(),Ml(3260,`td`,21)(3261,`code`,29),mN(3262,`boolean`),lg()(),Ml(3263,`td`,24)(3264,`em`)(3265,`strong`),mN(3266,`(opcional)`),lg()(),Ml(3267,`p`),mN(3268,`Indica se o status do `),Ml(3269,`code`),mN(3270,`model`),lg(),mN(3271,` será escondido visualmente ao lado do switch`),lg()()(),Ml(3272,`tr`,16)(3273,`td`,17)(3274,`div`,25)(3275,`span`,26),mN(3276,` hidePasswordPeek`),ql(3277,`br`),lg()()(),Ml(3278,`td`,21)(3279,`code`,29),mN(3280,`boolean`),lg()(),Ml(3281,`td`,24)(3282,`em`)(3283,`strong`),mN(3284,`(opcional)`),lg()(),Ml(3285,`p`),mN(3286,`Permite esconder a função de espiar a senha digitada no `),Ml(3287,`code`),mN(3288,`po-password`),lg(),mN(3289,`.`),lg()()(),Ml(3290,`tr`,16)(3291,`td`,17)(3292,`div`,25)(3293,`span`,26),mN(3294,` hideRestrictionsInfo`),ql(3295,`br`),lg()()(),Ml(3296,`td`,21)(3297,`code`,29),mN(3298,`boolean`),lg()(),Ml(3299,`td`,24)(3300,`em`)(3301,`strong`),mN(3302,`(opcional)`),lg()(),Ml(3303,`p`),mN(3304,`Oculta visualmente as informações de restrições para o upload.`),lg(),Ml(3305,`p`)(3306,`strong`),mN(3307,`Componente compatível`),lg(),mN(3308,`: `),Ml(3309,`code`),mN(3310,`po-upload`),lg()()()(),Ml(3311,`tr`,16)(3312,`td`,17)(3313,`div`,25)(3314,`span`,26),mN(3315,` hideSearch`),ql(3316,`br`),lg()()(),Ml(3317,`td`,21)(3318,`code`,29),mN(3319,`boolean`),lg()(),Ml(3320,`td`,24)(3321,`em`)(3322,`strong`),mN(3323,`(opcional)`),lg()(),Ml(3324,`p`),mN(3325,`Esconde o campo de pesquisa existente dentro do dropdown do `),Ml(3326,`code`),mN(3327,`po-multiselect`),lg(),mN(3328,`.`),lg()()(),Ml(3329,`tr`,16)(3330,`td`,17)(3331,`div`,25)(3332,`span`,26),mN(3333,` hideSelectAll`),ql(3334,`br`),lg()()(),Ml(3335,`td`,21)(3336,`code`,29),mN(3337,`boolean`),lg()(),Ml(3338,`td`,24)(3339,`em`)(3340,`strong`),mN(3341,`(opcional)`),lg()(),Ml(3342,`p`),mN(3343,`Indica se o campo "Selecionar todos" do `),Ml(3344,`code`),mN(3345,`po-multiselect`),lg(),mN(3346,` será escondido.`),lg()()(),Ml(3347,`tr`,16)(3348,`td`,17)(3349,`div`,25)(3350,`span`,26),mN(3351,` hideSelectButton`),ql(3352,`br`),lg()()(),Ml(3353,`td`,21)(3354,`code`,29),mN(3355,`boolean`),lg()(),Ml(3356,`td`,24)(3357,`em`)(3358,`strong`),mN(3359,`(opcional)`),lg()(),Ml(3360,`p`),mN(3361,`Omite o botão de seleção de arquivos.`),lg(),Ml(3362,`blockquote`)(3363,`p`),mN(3364,`Caso o valor definido seja `),Ml(3365,`code`),mN(3366,`true`),lg(),mN(3367,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(3368,`code`),mN(3369,`selectFiles()`),lg(),mN(3370,` para seleção de arquivos.`),lg()(),Ml(3371,`p`)(3372,`strong`),mN(3373,`Componente compatível`),lg(),mN(3374,`: `),Ml(3375,`code`),mN(3376,`po-upload`),lg()()()(),Ml(3377,`tr`,16)(3378,`td`,17)(3379,`div`,25)(3380,`span`,26),mN(3381,` hideSendButton`),ql(3382,`br`),lg()()(),Ml(3383,`td`,21)(3384,`code`,29),mN(3385,`boolean`),lg()(),Ml(3386,`td`,24)(3387,`em`)(3388,`strong`),mN(3389,`(opcional)`),lg()(),Ml(3390,`p`),mN(3391,`Omite o botão de envio de arquivos.`),lg(),Ml(3392,`blockquote`)(3393,`p`),mN(3394,`Caso o valor definido seja `),Ml(3395,`code`),mN(3396,`true`),lg(),mN(3397,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(3398,`code`),mN(3399,`sendFiles()`),lg(),mN(3400,` para envio do(s) arquivo(s) selecionado(s).`),lg()(),Ml(3401,`p`)(3402,`strong`),mN(3403,`Componente compatível`),lg(),mN(3404,`: `),Ml(3405,`code`),mN(3406,`po-upload`),lg()()()(),Ml(3407,`tr`,16)(3408,`td`,17)(3409,`div`,25)(3410,`span`,26),mN(3411,` icon`),ql(3412,`br`),lg()()(),Ml(3413,`td`,21)(3414,`code`,27),mN(3415,`string `),lg(),Ml(3416,`code`,57),mN(3417,` TemplateRef<void>`),lg()(),Ml(3418,`td`,24)(3419,`em`)(3420,`strong`),mN(3421,`(opcional)`),lg()(),Ml(3422,`p`),mN(3423,`Define o ícone que será exibido no início do campo.`),lg(),Ml(3424,`blockquote`)(3425,`p`),mN(3426,`Esta propriedade só pode ser utilizado nos campos:`),lg()(),Ml(3427,`ul`)(3428,`li`),mN(3429,`Input;`),lg(),Ml(3430,`li`),mN(3431,`Number;`),lg(),Ml(3432,`li`),mN(3433,`Decimal;`),lg(),Ml(3434,`li`),mN(3435,`Combo;`),lg(),Ml(3436,`li`),mN(3437,`Password;`),lg()(),Ml(3438,`blockquote`)(3439,`p`),mN(3440,`Veja a disponibilidade de ícones em `),Ml(3441,`a`,58),mN(3442,`biblioteca de ícones`),lg(),mN(3443,`.`),lg()()()(),Ml(3444,`tr`,16)(3445,`td`,17)(3446,`div`,25)(3447,`span`,26),mN(3448,` infiniteScroll`),ql(3449,`br`),lg()()(),Ml(3450,`td`,21)(3451,`code`,29),mN(3452,`boolean`),lg()(),Ml(3453,`td`,24)(3454,`em`)(3455,`strong`),mN(3456,`(opcional)`),lg()(),Ml(3457,`p`),mN(3458,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),lg(),Ml(3459,`p`)(3460,`strong`),mN(3461,`Componentes compatíveis:`),lg(),Ml(3462,`code`),mN(3463,`po-combo`),lg(),mN(3464,`, `),Ml(3465,`code`),mN(3466,`po-lookup`),lg(),mN(3467,`.`),lg()()(),Ml(3468,`tr`,16)(3469,`td`,17)(3470,`div`,25)(3471,`span`,26),mN(3472,` infiniteScrollDistance`),ql(3473,`br`),lg()()(),Ml(3474,`td`,21)(3475,`code`,45),mN(3476,`number`),lg()(),Ml(3477,`td`,24)(3478,`em`)(3479,`strong`),mN(3480,`(opcional)`),lg()(),Ml(3481,`p`),mN(3482,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Ml(3483,`strong`),mN(3484,`Exemplos`),lg(),Ml(3485,`code`),mN(3486,`{ infiniteScrollDistance: 80 }`),lg(),mN(3487,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),lg(),Ml(3488,`p`)(3489,`strong`),mN(3490,`Componente compatível:`),lg(),Ml(3491,`code`),mN(3492,`po-combo`),lg(),mN(3493,`.`),lg()()(),Ml(3494,`tr`,16)(3495,`td`,17)(3496,`div`,25)(3497,`span`,26),mN(3498,` invalidValue`),ql(3499,`br`),lg()()(),Ml(3500,`td`,21)(3501,`code`,29),mN(3502,`boolean`),lg()(),Ml(3503,`td`,24)(3504,`em`)(3505,`strong`),mN(3506,`(opcional)`),lg()(),Ml(3507,`p`),mN(3508,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ml(3509,`code`),mN(3510,`p-field-error-message`),lg(),mN(3511,`.`),lg(),Ml(3512,`blockquote`)(3513,`p`),mN(3514,`Caso essa propriedade seja definida como `),Ml(3515,`code`),mN(3516,`true`),lg(),mN(3517,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),lg()(),Ml(3518,`p`)(3519,`strong`),mN(3520,`Componente compatível`),lg(),mN(3521,`: `),Ml(3522,`code`),mN(3523,`po-switch`),lg()()()(),Ml(3524,`tr`,16)(3525,`td`,17)(3526,`div`,25)(3527,`span`,26),mN(3528,` isoFormat`),ql(3529,`br`),lg()()(),Ml(3530,`td`,21)(3531,`code`,59),mN(3532,`PoDatepickerIsoFormat`),lg()(),Ml(3533,`td`,24)(3534,`em`)(3535,`strong`),mN(3536,`(opcional)`),lg()(),Ml(3537,`p`),mN(3538,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),lg(),Ml(3539,`blockquote`)(3540,`p`),mN(3541,`Veja os valores válidos no `),Ml(3542,`code`),mN(3543,`PoDatepickerIsoFormat`),lg(),mN(3544,`.`),lg()(),Ml(3545,`p`)(3546,`strong`),mN(3547,`Componente compatível:`),lg(),Ml(3548,`code`),mN(3549,`po-datepicker`),lg()()()(),Ml(3550,`tr`,16)(3551,`td`,17)(3552,`div`,25)(3553,`span`,26),mN(3554,` key`),ql(3555,`br`),lg()()(),Ml(3556,`td`,21)(3557,`code`,29),mN(3558,`boolean`),lg()(),Ml(3559,`td`,24)(3560,`em`)(3561,`strong`),mN(3562,`(opcional)`),lg()(),Ml(3563,`p`),mN(3564,`Identificador`),lg()()(),Ml(3565,`tr`,16)(3566,`td`,17)(3567,`div`,25)(3568,`span`,26),mN(3569,` keydown`),ql(3570,`br`),lg()()(),Ml(3571,`td`,21)(3572,`code`,44),mN(3573,`Function`),lg()(),Ml(3574,`td`,24)(3575,`em`)(3576,`strong`),mN(3577,`(opcional)`),lg()(),Ml(3578,`p`),mN(3579,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(3580,`code`),mN(3581,`KeyboardEvent`),lg(),mN(3582,` com informações sobre a tecla.`),lg()()(),Ml(3583,`tr`,16)(3584,`td`,17)(3585,`div`,25)(3586,`span`,26),mN(3587,` label`),ql(3588,`br`),lg()()(),Ml(3589,`td`,21)(3590,`code`,27),mN(3591,`string`),lg()(),Ml(3592,`td`,24)(3593,`em`)(3594,`strong`),mN(3595,`(opcional)`),lg()(),Ml(3596,`p`),mN(3597,`Rótulo do campo exibido.`),lg(),Ml(3598,`p`),mN(3599,`Caso não seja informado, será utilizado como `),Ml(3600,`code`),mN(3601,`label`),lg(),mN(3602,` o valor da propriedade `),Ml(3603,`code`),mN(3604,`property`),lg(),mN(3605,` com a primeira letra em maiúsculo.`),lg()()(),Ml(3606,`tr`,16)(3607,`td`,17)(3608,`div`,25)(3609,`span`,26),mN(3610,` labelPosition`),ql(3611,`br`),lg()()(),Ml(3612,`td`,21)(3613,`code`,60),mN(3614,`PoSwitchLabelPosition`),lg()(),Ml(3615,`td`,24)(3616,`em`)(3617,`strong`),mN(3618,`(opcional)`),lg()(),Ml(3619,`p`),mN(3620,`Posição de exibição do rótulo do PoSwitch.`),lg(),Ml(3621,`blockquote`)(3622,`p`),mN(3623,`Por padrão exibe à direita.`),lg()()()(),Ml(3624,`tr`,16)(3625,`td`,17)(3626,`div`,25)(3627,`span`,26),mN(3628,` listboxControlPosition`),ql(3629,`br`),lg()()(),Ml(3630,`td`,21)(3631,`code`,61),mN(3632,`'top' `),lg(),Ml(3633,`code`,62),mN(3634,` 'bottom'`),lg()(),Ml(3635,`td`,24)(3636,`em`)(3637,`strong`),mN(3638,`(opcional)`),lg()(),Ml(3639,`p`),mN(3640,`Define a direção preferida para exibição do `),Ml(3641,`code`),mN(3642,`listbox`),lg(),mN(3643,` em relação ao campo (`),Ml(3644,`code`),mN(3645,`top`),lg(),mN(3646,` ou `),Ml(3647,`code`),mN(3648,`bottom`),lg(),mN(3649,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),lg(),Ml(3650,`p`)(3651,`strong`),mN(3652,`Componentes compatíveis:`),lg(),Ml(3653,`code`),mN(3654,`po-multiselect`),lg(),mN(3655,`, `),Ml(3656,`code`),mN(3657,`po-combo`),lg(),mN(3658,`.`),lg()()(),Ml(3659,`tr`,16)(3660,`td`,17)(3661,`div`,25)(3662,`span`,26),mN(3663,` literals`),ql(3664,`br`),lg()()(),Ml(3665,`td`,21)(3666,`code`,36),mN(3667,`PoLookupLiterals `),lg(),Ml(3668,`code`,63),mN(3669,` PoMultiselectLiterals `),lg(),Ml(3670,`code`,64),mN(3671,` PoComboLiterals `),lg(),Ml(3672,`code`,65),mN(3673,` PoDatepickerRangeLiterals `),lg(),Ml(3674,`code`,66),mN(3675,` PoUploadLiterals`),lg()(),Ml(3676,`td`,24)(3677,`em`)(3678,`strong`),mN(3679,`(opcional)`),lg()(),Ml(3680,`p`),mN(3681,`Objeto com as literais usadas para os seguintes componentes: `),Ml(3682,`code`),mN(3683,`po-lookup`),lg(),mN(3684,`, `),Ml(3685,`code`),mN(3686,`po-multiselect`),lg(),mN(3687,`, `),Ml(3688,`code`),mN(3689,`po-combo`),lg(),mN(3690,` e `),Ml(3691,`code`),mN(3692,`po-datepicker-range`),lg(),mN(3693,`.`),lg(),Ml(3694,`blockquote`)(3695,`p`),mN(3696,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),lg()(),Ml(3697,`p`)(3698,`strong`),mN(3699,`Componentes compatíveis:`),lg(),Ml(3700,`code`),mN(3701,`po-lookup`),lg(),mN(3702,`, `),Ml(3703,`code`),mN(3704,`po-multiselect`),lg(),mN(3705,`, `),Ml(3706,`code`),mN(3707,`po-combo`),lg(),mN(3708,`, `),Ml(3709,`code`),mN(3710,`po-datepicker-range`),lg()()()(),Ml(3711,`tr`,16)(3712,`td`,17)(3713,`div`,25)(3714,`span`,26),mN(3715,` loading`),ql(3716,`br`),lg()()(),Ml(3717,`td`,21)(3718,`code`,29),mN(3719,`boolean`),lg()(),Ml(3720,`td`,24)(3721,`em`)(3722,`strong`),mN(3723,`(opcional)`),lg()(),Ml(3724,`p`),mN(3725,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),lg(),Ml(3726,`blockquote`)(3727,`p`),mN(3728,`Por padrão é `),Ml(3729,`code`),mN(3730,`false`),lg(),mN(3731,`.`),lg()(),Ml(3732,`p`)(3733,`strong`),mN(3734,`Componentes compatíveis:`),lg(),Ml(3735,`code`),mN(3736,`po-datepicker`),lg(),mN(3737,`, `),Ml(3738,`code`),mN(3739,`po-datepicker-range`),lg(),mN(3740,`, `),Ml(3741,`code`),mN(3742,`po-number`),lg(),mN(3743,`, `),Ml(3744,`code`),mN(3745,`po-decimal`),lg(),mN(3746,`,
`),Ml(3747,`code`),mN(3748,`po-input`),lg(),mN(3749,`, `),Ml(3750,`code`),mN(3751,`po-select`),lg(),mN(3752,`, `),Ml(3753,`code`),mN(3754,`po-switch`),lg(),mN(3755,`, `),Ml(3756,`code`),mN(3757,`po-combo`),lg(),mN(3758,`, `),Ml(3759,`code`),mN(3760,`po-lookup`),lg(),mN(3761,`, `),Ml(3762,`code`),mN(3763,`po-multiselect`),lg(),mN(3764,`,
`),Ml(3765,`code`),mN(3766,`po-textarea`),lg(),mN(3767,`, `),Ml(3768,`code`),mN(3769,`po-password`),lg(),mN(3770,`, `),Ml(3771,`code`),mN(3772,`po-upload`),lg(),mN(3773,`.`),lg()()(),Ml(3774,`tr`,16)(3775,`td`,17)(3776,`div`,25)(3777,`span`,26),mN(3778,` locale`),ql(3779,`br`),lg()()(),Ml(3780,`td`,21)(3781,`code`,27),mN(3782,`string`),lg()(),Ml(3783,`td`,24)(3784,`em`)(3785,`strong`),mN(3786,`(opcional)`),lg()(),Ml(3787,`p`),mN(3788,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Ml(3789,`a`,67)(3790,`code`),mN(3791,`I18n`),lg()()(),Ml(3792,`p`),mN(3793,`Exemplo de utilização:`),lg(),Ml(3794,`pre`)(3795,`code`),mN(3796,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),lg()(),Ml(3797,`blockquote`)(3798,`p`),mN(3799,`Para ver quais linguagens suportadas acesse `),Ml(3800,`a`,67)(3801,`code`),mN(3802,`I18n`),lg()()()(),Ml(3803,`p`)(3804,`strong`),mN(3805,`Componentes compatíveis:`),lg(),Ml(3806,`code`),mN(3807,`po-datepicker`),lg(),mN(3808,`, `),Ml(3809,`code`),mN(3810,`po-decimal`),lg(),mN(3811,`, `),Ml(3812,`code`),mN(3813,`po-timepicker`),lg(),mN(3814,`.`),lg()()(),Ml(3815,`tr`,16)(3816,`td`,17)(3817,`div`,25)(3818,`span`,26),mN(3819,` mask`),ql(3820,`br`),lg()()(),Ml(3821,`td`,21)(3822,`code`,27),mN(3823,`string`),lg()(),Ml(3824,`td`,24)(3825,`em`)(3826,`strong`),mN(3827,`(opcional)`),lg()(),Ml(3828,`p`),mN(3829,`Máscara para o campo.`),lg(),Ml(3830,`p`)(3831,`strong`),mN(3832,`Componente compatível:`),lg(),Ml(3833,`code`),mN(3834,`po-input`),lg(),mN(3835,`.`),lg(),Ml(3836,`blockquote`)(3837,`p`),mN(3838,`também é atribuído ao utilizar a propriedade `),Ml(3839,`code`),mN(3840,`type: time`),lg(),mN(3841,`.`),lg()(),Ml(3842,`blockquote`)(3843,`p`),mN(3844,`Incompatível com `),Ml(3845,`code`),mN(3846,`po-decimal`),lg(),mN(3847,`.`),lg()()()(),Ml(3848,`tr`,16)(3849,`td`,17)(3850,`div`,25)(3851,`span`,26),mN(3852,` maskFormatModel`),ql(3853,`br`),lg()()(),Ml(3854,`td`,21)(3855,`code`,29),mN(3856,`boolean`),lg()(),Ml(3857,`td`,24)(3858,`em`)(3859,`strong`),mN(3860,`(opcional)`),lg()(),Ml(3861,`p`),mN(3862,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Ml(3863,`code`),mN(3864,`false`),lg(),mN(3865,`.`),lg(),Ml(3866,`p`)(3867,`strong`),mN(3868,`Componente compatível:`),lg(),Ml(3869,`code`),mN(3870,`po-input`),lg(),mN(3871,`.`),lg(),Ml(3872,`blockquote`)(3873,`p`),mN(3874,`também é atribuído ao utilizar a propriedade `),Ml(3875,`code`),mN(3876,`type: time`),lg(),mN(3877,`.`),lg()()()(),Ml(3878,`tr`,16)(3879,`td`,17)(3880,`div`,25)(3881,`span`,26),mN(3882,` maskNoLengthValidation`),ql(3883,`br`),lg()()(),Ml(3884,`td`,21)(3885,`code`,29),mN(3886,`boolean`),lg()(),Ml(3887,`td`,24)(3888,`em`)(3889,`strong`),mN(3890,`(opcional)`),lg()(),Ml(3891,`p`),mN(3892,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(3893,`code`),mN(3894,`minLength`),lg(),mN(3895,`) e máximo (`),Ml(3896,`code`),mN(3897,`maxLength`),lg(),mN(3898,`) quando há uma máscara (`),Ml(3899,`code`),mN(3900,`p-mask`),lg(),mN(3901,`) definida.`),lg(),Ml(3902,`ul`)(3903,`li`),mN(3904,`Quando `),Ml(3905,`code`),mN(3906,`true`),lg(),mN(3907,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(3908,`li`),mN(3909,`Quando `),Ml(3910,`code`),mN(3911,`false`),lg(),mN(3912,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(3913,`p`)(3914,`strong`),mN(3915,`Componentes compatíveis:`),lg(),Ml(3916,`code`),mN(3917,`po-input`),lg(),mN(3918,`, `),Ml(3919,`code`),mN(3920,`po-decimal`),lg(),mN(3921,`.`),lg(),Ml(3922,`blockquote`)(3923,`p`),mN(3924,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(3925,`code`),mN(3926,`p-mask-format-model`),lg(),mN(3927,`.`),lg()(),Ml(3928,`p`),mN(3929,`Exemplo:`),lg(),Ml(3930,`pre`)(3931,`code`),mN(3932,`fields:Array<PoDynamicFormField> = [
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
`),lg()(),Ml(3933,`ul`)(3934,`li`),mN(3935,`Entrada: `),Ml(3936,`code`),mN(3937,`11.111.111/1111-11`),lg(),mN(3938,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),lg()()()(),Ml(3939,`tr`,16)(3940,`td`,17)(3941,`div`,25)(3942,`span`,26),mN(3943,` maxLength`),ql(3944,`br`),lg()()(),Ml(3945,`td`,21)(3946,`code`,45),mN(3947,`number`),lg()(),Ml(3948,`td`,24)(3949,`em`)(3950,`strong`),mN(3951,`(opcional)`),lg()(),Ml(3952,`p`),mN(3953,`Tamanho máximo de caracteres.`),lg(),Ml(3954,`p`)(3955,`strong`),mN(3956,`Componentes compatíveis:`),lg(),Ml(3957,`code`),mN(3958,`po-input`),lg(),mN(3959,`, `),Ml(3960,`code`),mN(3961,`po-number`),lg(),mN(3962,`, `),Ml(3963,`code`),mN(3964,`po-decimal`),lg(),mN(3965,`, `),Ml(3966,`code`),mN(3967,`po-textarea`),lg(),mN(3968,`, `),Ml(3969,`code`),mN(3970,`po-password`),lg(),mN(3971,`.`),lg()()(),Ml(3972,`tr`,16)(3973,`td`,17)(3974,`div`,25)(3975,`span`,26),mN(3976,` maxTime`),ql(3977,`br`),lg()()(),Ml(3978,`td`,21)(3979,`code`,27),mN(3980,`string`),lg()(),Ml(3981,`td`,24)(3982,`em`)(3983,`strong`),mN(3984,`(opcional)`),lg()(),Ml(3985,`p`),mN(3986,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Ml(3987,`code`),mN(3988,`HH:mm`),lg(),mN(3989,` ou `),Ml(3990,`code`),mN(3991,`HH:mm:ss`),lg(),mN(3992,`.`),lg(),Ml(3993,`p`)(3994,`strong`),mN(3995,`Componente compatível:`),lg(),Ml(3996,`code`),mN(3997,`po-datetimepicker`),lg(),mN(3998,`, `),Ml(3999,`code`),mN(4e3,`po-timepicker`),lg()()()(),Ml(4001,`tr`,16)(4002,`td`,17)(4003,`div`,25)(4004,`span`,26),mN(4005,` maxValue`),ql(4006,`br`),lg()()(),Ml(4007,`td`,21)(4008,`code`,27),mN(4009,`string `),lg(),Ml(4010,`code`,45),mN(4011,` number`),lg()(),Ml(4012,`td`,24)(4013,`em`)(4014,`strong`),mN(4015,`(opcional)`),lg()(),Ml(4016,`p`),mN(4017,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ml(4018,`em`),mN(4019,`number`),lg(),mN(4020,`, `),Ml(4021,`em`),mN(4022,`date`),lg(),mN(4023,`, `),Ml(4024,`em`),mN(4025,`dateTime`),lg(),mN(4026,` ou `),Ml(4027,`em`),mN(4028,`time`),lg(),mN(4029,`.`),lg(),Ml(4030,`blockquote`)(4031,`p`),mN(4032,`Para `),Ml(4033,`code`),mN(4034,`po-timepicker`),lg(),mN(4035,`, o valor deve estar no formato `),Ml(4036,`code`),mN(4037,`HH:mm`),lg(),mN(4038,` ou `),Ml(4039,`code`),mN(4040,`HH:mm:ss`),lg(),mN(4041,`.`),lg()(),Ml(4042,`p`)(4043,`strong`),mN(4044,`Componentes compatíveis:`),lg(),Ml(4045,`code`),mN(4046,`po-datepicker`),lg(),mN(4047,`, `),Ml(4048,`code`),mN(4049,`po-datepicker-range`),lg(),mN(4050,`, `),Ml(4051,`code`),mN(4052,`po-number`),lg(),mN(4053,`, `),Ml(4054,`code`),mN(4055,`po-decimal`),lg(),mN(4056,`, `),Ml(4057,`code`),mN(4058,`po-timepicker`),lg()()()(),Ml(4059,`tr`,16)(4060,`td`,17)(4061,`div`,25)(4062,`span`,26),mN(4063,` minLength`),ql(4064,`br`),lg()()(),Ml(4065,`td`,21)(4066,`code`,45),mN(4067,`number`),lg()(),Ml(4068,`td`,24)(4069,`em`)(4070,`strong`),mN(4071,`(opcional)`),lg()(),Ml(4072,`p`),mN(4073,`Tamanho mínimo de caracteres.`),lg(),Ml(4074,`p`)(4075,`strong`),mN(4076,`Componentes compatíveis:`),lg(),Ml(4077,`code`),mN(4078,`po-input`),lg(),mN(4079,`, `),Ml(4080,`code`),mN(4081,`po-number`),lg(),mN(4082,`, `),Ml(4083,`code`),mN(4084,`po-decimal`),lg(),mN(4085,`, `),Ml(4086,`code`),mN(4087,`po-textarea`),lg(),mN(4088,`, `),Ml(4089,`code`),mN(4090,`po-password`),lg(),mN(4091,`.`),lg()()(),Ml(4092,`tr`,16)(4093,`td`,17)(4094,`div`,25)(4095,`span`,26),mN(4096,` minTime`),ql(4097,`br`),lg()()(),Ml(4098,`td`,21)(4099,`code`,27),mN(4100,`string`),lg()(),Ml(4101,`td`,24)(4102,`em`)(4103,`strong`),mN(4104,`(opcional)`),lg()(),Ml(4105,`p`),mN(4106,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Ml(4107,`code`),mN(4108,`HH:mm`),lg(),mN(4109,` ou `),Ml(4110,`code`),mN(4111,`HH:mm:ss`),lg(),mN(4112,`.`),lg(),Ml(4113,`p`)(4114,`strong`),mN(4115,`Componente compatível:`),lg(),Ml(4116,`code`),mN(4117,`po-datetimepicker`),lg(),mN(4118,`, `),Ml(4119,`code`),mN(4120,`po-timepicker`),lg()()()(),Ml(4121,`tr`,16)(4122,`td`,17)(4123,`div`,25)(4124,`span`,26),mN(4125,` minValue`),ql(4126,`br`),lg()()(),Ml(4127,`td`,21)(4128,`code`,27),mN(4129,`string `),lg(),Ml(4130,`code`,45),mN(4131,` number`),lg()(),Ml(4132,`td`,24)(4133,`em`)(4134,`strong`),mN(4135,`(opcional)`),lg()(),Ml(4136,`p`),mN(4137,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ml(4138,`em`),mN(4139,`number`),lg(),mN(4140,`, `),Ml(4141,`em`),mN(4142,`date`),lg(),mN(4143,`, `),Ml(4144,`em`),mN(4145,`dateTime`),lg(),mN(4146,` ou `),Ml(4147,`em`),mN(4148,`time`),lg(),mN(4149,`.`),lg(),Ml(4150,`blockquote`)(4151,`p`),mN(4152,`Para `),Ml(4153,`code`),mN(4154,`po-timepicker`),lg(),mN(4155,`, o valor deve estar no formato `),Ml(4156,`code`),mN(4157,`HH:mm`),lg(),mN(4158,` ou `),Ml(4159,`code`),mN(4160,`HH:mm:ss`),lg(),mN(4161,`.`),lg()(),Ml(4162,`p`)(4163,`strong`),mN(4164,`Componentes compatíveis:`),lg(),Ml(4165,`code`),mN(4166,`po-datepicker`),lg(),mN(4167,`, `),Ml(4168,`code`),mN(4169,`po-datepicker-range`),lg(),mN(4170,`, `),Ml(4171,`code`),mN(4172,`po-number`),lg(),mN(4173,`, `),Ml(4174,`code`),mN(4175,`po-decimal`),lg(),mN(4176,`, `),Ml(4177,`code`),mN(4178,`po-timepicker`),lg()()()(),Ml(4179,`tr`,16)(4180,`td`,17)(4181,`div`,25)(4182,`span`,26),mN(4183,` minuteInterval`),ql(4184,`br`),lg()()(),Ml(4185,`td`,21)(4186,`code`,45),mN(4187,`number`),lg()(),Ml(4188,`td`,24)(4189,`em`)(4190,`strong`),mN(4191,`(opcional)`),lg()(),Ml(4192,`p`),mN(4193,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),lg()()(),Ml(4194,`tr`,16)(4195,`td`,17)(4196,`div`,25)(4197,`span`,26),mN(4198,` mode`),ql(4199,`br`),lg()()(),Ml(4200,`td`,21)(4201,`code`,68),mN(4202,`'month-year' `),lg(),Ml(4203,`code`,69),mN(4204,` 'year'`),lg()(),Ml(4205,`td`,24)(4206,`em`)(4207,`strong`),mN(4208,`(opcional)`),lg()(),Ml(4209,`p`),mN(4210,`Define o modo de seleção do `),Ml(4211,`code`),mN(4212,`po-datepicker`),lg(),mN(4213,`.`),lg(),Ml(4214,`p`),mN(4215,`Valores aceitos:`),lg(),Ml(4216,`ul`)(4217,`li`)(4218,`code`),mN(4219,`'month-year'`),lg(),mN(4220,`: exibe seleção de mês e ano (formato `),Ml(4221,`code`),mN(4222,`MM/YYYY`),lg(),mN(4223,`)`),lg(),Ml(4224,`li`)(4225,`code`),mN(4226,`'year'`),lg(),mN(4227,`: exibe seleção apenas de ano (formato `),Ml(4228,`code`),mN(4229,`YYYY`),lg(),mN(4230,`)`),lg()(),Ml(4231,`p`)(4232,`strong`),mN(4233,`Componente compatível:`),lg(),Ml(4234,`code`),mN(4235,`po-datepicker`),lg()()()(),Ml(4236,`tr`,16)(4237,`td`,17)(4238,`div`,25)(4239,`span`,26),mN(4240,` modelFormat`),ql(4241,`br`),lg()()(),Ml(4242,`td`,21)(4243,`code`,70),mN(4244,`PoTimepickerModelFormat`),lg()(),Ml(4245,`td`,24)(4246,`em`)(4247,`strong`),mN(4248,`(opcional)`),lg()(),Ml(4249,`p`),mN(4250,`Define o formato do valor do horário a ser utilizado no model do `),Ml(4251,`code`),mN(4252,`po-timepicker`),lg(),mN(4253,`.`),lg(),Ml(4254,`blockquote`)(4255,`p`),mN(4256,`Veja os valores válidos no `),Ml(4257,`code`),mN(4258,`PoTimepickerModelFormat`),lg(),mN(4259,`.`),lg()(),Ml(4260,`p`)(4261,`strong`),mN(4262,`Componente compatível:`),lg(),Ml(4263,`code`),mN(4264,`po-timepicker`),lg()()()(),Ml(4265,`tr`,16)(4266,`td`,17)(4267,`div`,25)(4268,`span`,26),mN(4269,` multiple`),ql(4270,`br`),lg()()(),Ml(4271,`td`,21)(4272,`code`,29),mN(4273,`boolean`),lg()(),Ml(4274,`td`,24)(4275,`em`)(4276,`strong`),mN(4277,`(opcional)`),lg()(),Ml(4278,`p`),mN(4279,`Permite a seleção de múltiplos itens.`),lg(),Ml(4280,`p`)(4281,`strong`),mN(4282,`Componentes compatíveis:`),lg(),Ml(4283,`code`),mN(4284,`po-lookup`),lg(),mN(4285,`, `),Ml(4286,`code`),mN(4287,`po-upload`),lg()()()(),Ml(4288,`tr`,16)(4289,`td`,17)(4290,`div`,25)(4291,`span`,26),mN(4292,` noAutocomplete`),ql(4293,`br`),lg()()(),Ml(4294,`td`,21)(4295,`code`,29),mN(4296,`boolean`),lg()(),Ml(4297,`td`,24)(4298,`em`)(4299,`strong`),mN(4300,`(opcional)`),lg()(),Ml(4301,`p`),mN(4302,`Define a propriedade nativa `),Ml(4303,`code`),mN(4304,`autocomplete`),lg(),mN(4305,` do campo como off.`),lg(),Ml(4306,`p`)(4307,`strong`),mN(4308,`Componentes compatíveis:`),lg(),Ml(4309,`code`),mN(4310,`po-datepicker`),lg(),mN(4311,`, `),Ml(4312,`code`),mN(4313,`po-datepicker-range`),lg(),mN(4314,`, `),Ml(4315,`code`),mN(4316,`po-input`),lg(),mN(4317,`, `),Ml(4318,`code`),mN(4319,`po-number`),lg(),mN(4320,`, `),Ml(4321,`code`),mN(4322,`po-decimal`),lg(),mN(4323,`,
`),Ml(4324,`code`),mN(4325,`po-lookup`),lg(),mN(4326,`, `),Ml(4327,`code`),mN(4328,`po-password`),lg(),mN(4329,`, `),Ml(4330,`code`),mN(4331,`po-timepicker`),lg(),mN(4332,`.`),lg()()(),Ml(4333,`tr`,16)(4334,`td`,17)(4335,`div`,25)(4336,`span`,26),mN(4337,` offsetColumns`),ql(4338,`br`),lg()()(),Ml(4339,`td`,21)(4340,`code`,45),mN(4341,`number`),lg()(),Ml(4342,`td`,24)(4343,`em`)(4344,`strong`),mN(4345,`(opcional)`),lg()(),Ml(4346,`p`),mN(4347,`Tamanho do espaço de exibição do campo em telas.`),lg(),Ml(4348,`p`),mN(4349,`Deve ser usado o sistema de `),Ml(4350,`strong`),mN(4351,`grid`),lg(),mN(4352,` do PO (1 ... 12 colunas).`),lg(),Ml(4353,`blockquote`)(4354,`p`),mN(4355,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(4356,`tr`,16)(4357,`td`,17)(4358,`div`,25)(4359,`span`,26),mN(4360,` offsetLgColumns`),ql(4361,`br`),lg()()(),Ml(4362,`td`,21)(4363,`code`,45),mN(4364,`number`),lg()(),Ml(4365,`td`,24)(4366,`em`)(4367,`strong`),mN(4368,`(opcional)`),lg()(),Ml(4369,`p`),mN(4370,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),lg(),Ml(4371,`p`),mN(4372,`Deve ser usado o sistema de `),Ml(4373,`strong`),mN(4374,`grid`),lg(),mN(4375,` do PO (1 ... 12 colunas).`),lg(),Ml(4376,`blockquote`)(4377,`p`),mN(4378,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(4379,`code`),mN(4380,`offsetColumns`),lg(),mN(4381,`.`),lg()()()(),Ml(4382,`tr`,16)(4383,`td`,17)(4384,`div`,25)(4385,`span`,26),mN(4386,` offsetMdColumns`),ql(4387,`br`),lg()()(),Ml(4388,`td`,21)(4389,`code`,45),mN(4390,`number`),lg()(),Ml(4391,`td`,24)(4392,`em`)(4393,`strong`),mN(4394,`(opcional)`),lg()(),Ml(4395,`p`),mN(4396,`Tamanho do espaço de exibição do campo em telas médias (md).`),lg(),Ml(4397,`p`),mN(4398,`Deve ser usado o sistema de `),Ml(4399,`strong`),mN(4400,`grid`),lg(),mN(4401,` do PO (1 ... 12 colunas).`),lg(),Ml(4402,`blockquote`)(4403,`p`),mN(4404,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(4405,`code`),mN(4406,`offsetColumns`),lg(),mN(4407,`.`),lg()()()(),Ml(4408,`tr`,16)(4409,`td`,17)(4410,`div`,25)(4411,`span`,26),mN(4412,` offsetSmColumns`),ql(4413,`br`),lg()()(),Ml(4414,`td`,21)(4415,`code`,45),mN(4416,`number`),lg()(),Ml(4417,`td`,24)(4418,`em`)(4419,`strong`),mN(4420,`(opcional)`),lg()(),Ml(4421,`p`),mN(4422,`Tamanho do espaço de exibição do campo em telas menores (sm).`),lg(),Ml(4423,`p`),mN(4424,`Deve ser usado o sistema de `),Ml(4425,`strong`),mN(4426,`grid`),lg(),mN(4427,` do PO (1 ... 12 colunas).`),lg(),Ml(4428,`blockquote`)(4429,`p`),mN(4430,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(4431,`code`),mN(4432,`offsetColumns`),lg(),mN(4433,`.`),lg()()()(),Ml(4434,`tr`,16)(4435,`td`,17)(4436,`div`,25)(4437,`span`,26),mN(4438,` offsetXlColumns`),ql(4439,`br`),lg()()(),Ml(4440,`td`,21)(4441,`code`,45),mN(4442,`number`),lg()(),Ml(4443,`td`,24)(4444,`em`)(4445,`strong`),mN(4446,`(opcional)`),lg()(),Ml(4447,`p`),mN(4448,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),lg(),Ml(4449,`p`),mN(4450,`Deve ser usado o sistema de `),Ml(4451,`strong`),mN(4452,`grid`),lg(),mN(4453,` do PO (1 ... 12 colunas).`),lg(),Ml(4454,`blockquote`)(4455,`p`),mN(4456,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(4457,`code`),mN(4458,`offsetColumns`),lg(),mN(4459,`.`),lg()()()(),Ml(4460,`tr`,16)(4461,`td`,17)(4462,`div`,25)(4463,`span`,26),mN(4464,` onError`),ql(4465,`br`),lg()()(),Ml(4466,`td`,21)(4467,`code`,44),mN(4468,`Function`),lg()(),Ml(4469,`td`,24)(4470,`em`)(4471,`strong`),mN(4472,`(opcional)`),lg()(),Ml(4473,`p`),mN(4474,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),lg(),Ml(4475,`blockquote`)(4476,`p`),mN(4477,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(4478,`code`),mN(4479,`HttpErrorResponse`),lg(),mN(4480,`.`),lg()(),Ml(4481,`p`)(4482,`strong`),mN(4483,`Componente compatível`),lg(),mN(4484,`: `),Ml(4485,`code`),mN(4486,`po-upload`),lg()()()(),Ml(4487,`tr`,16)(4488,`td`,17)(4489,`div`,25)(4490,`span`,26),mN(4491,` onSuccess`),ql(4492,`br`),lg()()(),Ml(4493,`td`,21)(4494,`code`,44),mN(4495,`Function`),lg()(),Ml(4496,`td`,24)(4497,`em`)(4498,`strong`),mN(4499,`(opcional)`),lg()(),Ml(4500,`p`),mN(4501,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),lg(),Ml(4502,`blockquote`)(4503,`p`),mN(4504,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(4505,`code`),mN(4506,`HttpResponse`),lg(),mN(4507,`.`),lg()(),Ml(4508,`p`)(4509,`strong`),mN(4510,`Componente compatível`),lg(),mN(4511,`: `),Ml(4512,`code`),mN(4513,`po-upload`),lg()()()(),Ml(4514,`tr`,16)(4515,`td`,17)(4516,`div`,25)(4517,`span`,26),mN(4518,` onUpload`),ql(4519,`br`),lg()()(),Ml(4520,`td`,21)(4521,`code`,44),mN(4522,`Function`),lg()(),Ml(4523,`td`,24)(4524,`em`)(4525,`strong`),mN(4526,`(opcional)`),lg()(),Ml(4527,`p`),mN(4528,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),lg(),Ml(4529,`pre`)(4530,`code`),mN(4531,`event.data = {id: 'id do usu\xE1rio'};
`),lg()(),Ml(4532,`p`)(4533,`strong`),mN(4534,`Componente compatível`),lg(),mN(4535,`: `),Ml(4536,`code`),mN(4537,`po-upload`),lg()()()(),Ml(4538,`tr`,16)(4539,`td`,17)(4540,`div`,25)(4541,`span`,26),mN(4542,` optional`),ql(4543,`br`),lg()()(),Ml(4544,`td`,21)(4545,`code`,29),mN(4546,`boolean`),lg()(),Ml(4547,`td`,24)(4548,`em`)(4549,`strong`),mN(4550,`(opcional)`),lg()(),Ml(4551,`p`),mN(4552,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(4553,`blockquote`)(4554,`p`),mN(4555,`A indicação não será exibida, se:`),lg()(),Ml(4556,`ul`)(4557,`li`),mN(4558,`O campo for `),Ml(4559,`code`),mN(4560,`required`),lg(),mN(4561,`, ou;`),lg(),Ml(4562,`li`),mN(4563,`Não possuir `),Ml(4564,`code`),mN(4565,`help`),lg(),mN(4566,` e `),Ml(4567,`code`),mN(4568,`label`),lg(),mN(4569,`.`),lg()(),Ml(4570,`p`)(4571,`strong`),mN(4572,`Componentes compatíveis:`),lg(),Ml(4573,`code`),mN(4574,`po-datepicker`),lg(),mN(4575,`, `),Ml(4576,`code`),mN(4577,`po-datepicker-range`),lg(),mN(4578,`, `),Ml(4579,`code`),mN(4580,`po-timepicker`),lg(),mN(4581,`, `),Ml(4582,`code`),mN(4583,`po-input`),lg(),mN(4584,`, `),Ml(4585,`code`),mN(4586,`po-number`),lg(),mN(4587,`,
`),Ml(4588,`code`),mN(4589,`po-decimal`),lg(),mN(4590,`, `),Ml(4591,`code`),mN(4592,`po-select`),lg(),mN(4593,`, `),Ml(4594,`code`),mN(4595,`po-radio-group`),lg(),mN(4596,`, `),Ml(4597,`code`),mN(4598,`po-combo`),lg(),mN(4599,`, `),Ml(4600,`code`),mN(4601,`po-lookup`),lg(),mN(4602,`, `),Ml(4603,`code`),mN(4604,`po-checkbox-group`),lg(),mN(4605,`, `),Ml(4606,`code`),mN(4607,`po-multiselect`),lg(),mN(4608,`,
`),Ml(4609,`code`),mN(4610,`po-textarea`),lg(),mN(4611,`, `),Ml(4612,`code`),mN(4613,`po-password`),lg(),mN(4614,`.`),lg()()(),Ml(4615,`tr`,16)(4616,`td`,17)(4617,`div`,25)(4618,`span`,26),mN(4619,` options`),ql(4620,`br`),lg()()(),Ml(4621,`td`,21)(4622,`code`,32),mN(4623,`Array<string> `),lg(),Ml(4624,`code`,71),mN(4625,` Array<PoSelectOption> `),lg(),Ml(4626,`code`,72),mN(4627,` Array<PoMultiselectOption> `),lg(),Ml(4628,`code`,73),mN(4629,` Array<PoCheckboxGroupOption> `),lg(),Ml(4630,`code`,74),mN(4631,` Array<any>`),lg()(),Ml(4632,`td`,24)(4633,`em`)(4634,`strong`),mN(4635,`(opcional)`),lg()(),Ml(4636,`p`),mN(4637,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),lg(),Ml(4638,`p`)(4639,`strong`),mN(4640,`Componentes compatíveis:`),lg(),Ml(4641,`code`),mN(4642,`po-select`),lg(),mN(4643,`, `),Ml(4644,`code`),mN(4645,`po-radio-group`),lg(),mN(4646,`, `),Ml(4647,`code`),mN(4648,`po-checkbox-group`),lg(),mN(4649,`, `),Ml(4650,`code`),mN(4651,`po-multiselect`),lg(),mN(4652,`.`),lg()()(),Ml(4653,`tr`,16)(4654,`td`,17)(4655,`div`,25)(4656,`span`,26),mN(4657,` optionsMulti`),ql(4658,`br`),lg()()(),Ml(4659,`td`,21)(4660,`code`,29),mN(4661,`boolean`),lg()(),Ml(4662,`td`,24)(4663,`em`)(4664,`strong`),mN(4665,`(opcional)`),lg()(),Ml(4666,`p`),mN(4667,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),lg()()(),Ml(4668,`tr`,16)(4669,`td`,17)(4670,`div`,25)(4671,`span`,26),mN(4672,` optionsService`),ql(4673,`br`),lg()()(),Ml(4674,`td`,21)(4675,`code`,27),mN(4676,`string `),lg(),Ml(4677,`code`,75),mN(4678,` PoComboFilter `),lg(),Ml(4679,`code`,76),mN(4680,` PoMultiselectFilter`),lg()(),Ml(4681,`td`,24)(4682,`em`)(4683,`strong`),mN(4684,`(opcional)`),lg()(),Ml(4685,`p`),mN(4686,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ml(4687,`strong`),mN(4688,`Importante`),lg()(),Ml(4689,`blockquote`)(4690,`p`),mN(4691,`Para que funcione corretamente, é importante que o serviço siga o `),Ml(4692,`a`,7),mN(4693,`guia de API do PO UI`),lg(),mN(4694,`.`),lg()()()(),Ml(4695,`tr`,16)(4696,`td`,17)(4697,`div`,25)(4698,`span`,26),mN(4699,` order`),ql(4700,`br`),lg()()(),Ml(4701,`td`,21)(4702,`code`,45),mN(4703,`number`),lg()(),Ml(4704,`td`,24)(4705,`em`)(4706,`strong`),mN(4707,`(opcional)`),lg()(),Ml(4708,`p`),mN(4709,`Informa a ordem de exibição do campo.`),lg(),Ml(4710,`p`),mN(4711,`Exemplo de utilização:`),lg(),Ml(4712,`p`)(4713,`code`),mN(4714,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),lg()(),Ml(4715,`p`),mN(4716,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Ml(4717,`code`),mN(4718,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),lg()(),Ml(4719,`p`),mN(4720,`Só serão aceitos valores com números inteiros maiores do que zero.`),lg(),Ml(4721,`p`),mN(4722,`Campos sem `),Ml(4723,`code`),mN(4724,`order`),lg(),mN(4725,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),lg()()(),Ml(4726,`tr`,16)(4727,`td`,17)(4728,`div`,25)(4729,`span`,26),mN(4730,` params`),ql(4731,`br`),lg()()(),Ml(4732,`td`,21)(4733,`code`,33),mN(4734,`any`),lg()(),Ml(4735,`td`,24)(4736,`em`)(4737,`strong`),mN(4738,`(opcional)`),lg()(),Ml(4739,`p`),mN(4740,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Ml(4741,`code`),mN(4742,`po-lookup`),lg(),mN(4743,` e
`),Ml(4744,`code`),mN(4745,`po-combo`),lg(),mN(4746,`.`),lg(),Ml(4747,`p`),mN(4748,`Por exemplo, para o parâmetro `),Ml(4749,`code`),mN(4750,`{ age: 23 }`),lg(),mN(4751,` a URL da requisição ficaria:`),lg(),Ml(4752,`p`)(4753,`code`),mN(4754,`url + ?age=23&filter=Peter`),lg()()()(),Ml(4755,`tr`,16)(4756,`td`,17)(4757,`div`,25)(4758,`span`,26),mN(4759,` pattern`),ql(4760,`br`),lg()()(),Ml(4761,`td`,21)(4762,`code`,27),mN(4763,`string`),lg()(),Ml(4764,`td`,24)(4765,`em`)(4766,`strong`),mN(4767,`(opcional)`),lg()(),Ml(4768,`p`),mN(4769,`Regex para validação do campo.`),lg(),Ml(4770,`p`)(4771,`strong`),mN(4772,`Componentes compatíveis:`),lg(),Ml(4773,`code`),mN(4774,`po-input`),lg(),mN(4775,`, `),Ml(4776,`code`),mN(4777,`po-password`),lg(),mN(4778,`.`),lg(),Ml(4779,`blockquote`)(4780,`p`),mN(4781,`Incompatível com `),Ml(4782,`code`),mN(4783,`po-decimal`),lg(),mN(4784,`.`),lg()()()(),Ml(4785,`tr`,16)(4786,`td`,17)(4787,`div`,25)(4788,`span`,26),mN(4789,` placeholder`),ql(4790,`br`),lg()()(),Ml(4791,`td`,21)(4792,`code`,27),mN(4793,`string`),lg()(),Ml(4794,`td`,24)(4795,`em`)(4796,`strong`),mN(4797,`(opcional)`),lg()(),Ml(4798,`p`),mN(4799,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),lg(),Ml(4800,`p`)(4801,`strong`),mN(4802,`Componentes compatíveis:`),lg(),Ml(4803,`code`),mN(4804,`po-datepicker`),lg(),mN(4805,`, `),Ml(4806,`code`),mN(4807,`po-datepicker-range`),lg(),mN(4808,`, `),Ml(4809,`code`),mN(4810,`po-timepicker`),lg(),mN(4811,`, `),Ml(4812,`code`),mN(4813,`po-input`),lg(),mN(4814,`, `),Ml(4815,`code`),mN(4816,`po-number`),lg(),mN(4817,`, `),Ml(4818,`code`),mN(4819,`po-decimal`),lg(),mN(4820,`, `),Ml(4821,`code`),mN(4822,`po-select`),lg(),mN(4823,`, `),Ml(4824,`code`),mN(4825,`po-combo`),lg(),mN(4826,`, `),Ml(4827,`code`),mN(4828,`po-lookup`),lg(),mN(4829,`, `),Ml(4830,`code`),mN(4831,`po-multiselect`),lg(),mN(4832,`, `),Ml(4833,`code`),mN(4834,`po-textarea`),lg(),mN(4835,`, `),Ml(4836,`code`),mN(4837,`po-password`),lg(),mN(4838,`.`),lg()()(),Ml(4839,`tr`,16)(4840,`td`,17)(4841,`div`,25)(4842,`span`,26),mN(4843,` placeholderSearch`),ql(4844,`br`),lg()()(),Ml(4845,`td`,21)(4846,`code`,27),mN(4847,`string`),lg()(),Ml(4848,`td`,24)(4849,`em`)(4850,`strong`),mN(4851,`(opcional)`),lg()(),Ml(4852,`p`),mN(4853,`Placeholder do campo de pesquisa do `),Ml(4854,`code`),mN(4855,`po-multiselect`),lg(),mN(4856,`.`),lg(),Ml(4857,`blockquote`)(4858,`p`),mN(4859,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),lg()()()(),Ml(4860,`tr`,16)(4861,`td`,17)(4862,`div`,25)(4863,`span`,26),mN(4864,` property`),ql(4865,`br`),lg()()(),Ml(4866,`td`,21)(4867,`code`,27),mN(4868,`string`),lg()(),Ml(4869,`td`,24)(4870,`p`),mN(4871,`Nome de referência do campo.`),lg()()(),Ml(4872,`tr`,16)(4873,`td`,17)(4874,`div`,25)(4875,`span`,26),mN(4876,` range`),ql(4877,`br`),lg()()(),Ml(4878,`td`,21)(4879,`code`,29),mN(4880,`boolean`),lg()(),Ml(4881,`td`,24)(4882,`em`)(4883,`strong`),mN(4884,`(opcional)`),lg()(),Ml(4885,`p`),mN(4886,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),lg(),Ml(4887,`blockquote`)(4888,`p`),mN(4889,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),lg()()()(),Ml(4890,`tr`,16)(4891,`td`,17)(4892,`div`,25)(4893,`span`,26),mN(4894,` rangePresetOptions`),ql(4895,`br`),lg()()(),Ml(4896,`td`,21)(4897,`code`,77),mN(4898,`Array<PoCalendarRangePreset>`),lg()(),Ml(4899,`td`,24)(4900,`em`)(4901,`strong`),mN(4902,`(opcional)`),lg()(),Ml(4903,`p`),mN(4904,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),lg(),Ml(4905,`p`),mN(4906,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Ml(4907,`code`),mN(4908,`PoCalendarRangePreset`),lg(),mN(4909,`.`),lg(),Ml(4910,`p`)(4911,`strong`),mN(4912,`Componente compatível:`),lg(),Ml(4913,`code`),mN(4914,`po-datepicker-range`),lg()()()(),Ml(4915,`tr`,16)(4916,`td`,17)(4917,`div`,25)(4918,`span`,26),mN(4919,` rangePresets`),ql(4920,`br`),lg()()(),Ml(4921,`td`,21)(4922,`code`,29),mN(4923,`boolean `),lg(),Ml(4924,`code`,32),mN(4925,` Array<string>`),lg()(),Ml(4926,`td`,24)(4927,`em`)(4928,`strong`),mN(4929,`(opcional)`),lg()(),Ml(4930,`p`),mN(4931,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),lg(),Ml(4932,`p`),mN(4933,`Aceita os seguintes valores:`),lg(),Ml(4934,`ul`)(4935,`li`)(4936,`code`),mN(4937,`true`),lg(),mN(4938,`: exibe todos os presets padrão.`),lg(),Ml(4939,`li`)(4940,`code`),mN(4941,`false`),lg(),mN(4942,`: não exibe os presets padrão.`),lg(),Ml(4943,`li`)(4944,`code`),mN(4945,`Array<string>`),lg(),mN(4946,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),lg()(),Ml(4947,`p`)(4948,`strong`),mN(4949,`Componente compatível:`),lg(),Ml(4950,`code`),mN(4951,`po-datepicker-range`),lg()()()(),Ml(4952,`tr`,16)(4953,`td`,17)(4954,`div`,25)(4955,`span`,26),mN(4956,` rangePresetsOrder`),ql(4957,`br`),lg()()(),Ml(4958,`td`,21)(4959,`code`,78),mN(4960,`'asc' `),lg(),Ml(4961,`code`,79),mN(4962,` 'desc'`),lg()(),Ml(4963,`td`,24)(4964,`em`)(4965,`strong`),mN(4966,`(opcional)`),lg()(),Ml(4967,`p`),mN(4968,`Define a ordenação dos presets na lista.`),lg(),Ml(4969,`p`),mN(4970,`Valores aceitos:`),lg(),Ml(4971,`ul`)(4972,`li`)(4973,`code`),mN(4974,`'asc'`),lg(),mN(4975,`: ordenação crescente (passado → futuro)`),lg(),Ml(4976,`li`)(4977,`code`),mN(4978,`'desc'`),lg(),mN(4979,`: ordenação decrescente (futuro → passado)`),lg()(),Ml(4980,`p`)(4981,`strong`),mN(4982,`Componente compatível:`),lg(),Ml(4983,`code`),mN(4984,`po-datepicker-range`),lg()()()(),Ml(4985,`tr`,16)(4986,`td`,17)(4987,`div`,25)(4988,`span`,26),mN(4989,` readonly`),ql(4990,`br`),lg()()(),Ml(4991,`td`,21)(4992,`code`,29),mN(4993,`boolean`),lg()(),Ml(4994,`td`,24)(4995,`em`)(4996,`strong`),mN(4997,`(opcional)`),lg()(),Ml(4998,`p`),mN(4999,`Indica que o campo será somente leitura.`),lg(),Ml(5e3,`p`)(5001,`strong`),mN(5002,`Componentes compatíveis:`),lg(),Ml(5003,`code`),mN(5004,`po-datepicker`),lg(),mN(5005,`, `),Ml(5006,`code`),mN(5007,`po-datepicker-range`),lg(),mN(5008,`, `),Ml(5009,`code`),mN(5010,`po-timepicker`),lg(),mN(5011,`, `),Ml(5012,`code`),mN(5013,`po-input`),lg(),mN(5014,`, `),Ml(5015,`code`),mN(5016,`po-number`),lg(),mN(5017,`,
`),Ml(5018,`code`),mN(5019,`po-decimal`),lg(),mN(5020,`, `),Ml(5021,`code`),mN(5022,`po-select`),lg(),mN(5023,`, `),Ml(5024,`code`),mN(5025,`po-textarea`),lg(),mN(5026,`, `),Ml(5027,`code`),mN(5028,`po-password`),lg(),mN(5029,`.`),lg()()(),Ml(5030,`tr`,16)(5031,`td`,17)(5032,`div`,25)(5033,`span`,26),mN(5034,` removeInitialFilter`),ql(5035,`br`),lg()()(),Ml(5036,`td`,21)(5037,`code`,29),mN(5038,`boolean`),lg()(),Ml(5039,`td`,24)(5040,`em`)(5041,`strong`),mN(5042,`(opcional)`),lg()(),Ml(5043,`p`),mN(5044,`Define que o filtro no primeiro clique será removido.`),lg(),Ml(5045,`blockquote`)(5046,`p`),mN(5047,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),lg()(),Ml(5048,`p`)(5049,`strong`),mN(5050,`Componente compatível`),lg(),mN(5051,`: `),Ml(5052,`code`),mN(5053,`po-combo`),lg()()()(),Ml(5054,`tr`,16)(5055,`td`,17)(5056,`div`,25)(5057,`span`,26),mN(5058,` required`),ql(5059,`br`),lg()()(),Ml(5060,`td`,21)(5061,`code`,29),mN(5062,`boolean`),lg()(),Ml(5063,`td`,24)(5064,`em`)(5065,`strong`),mN(5066,`(opcional)`),lg()(),Ml(5067,`p`),mN(5068,`Define a obrigatoriedade do campo.`),lg(),Ml(5069,`p`)(5070,`strong`),mN(5071,`Componentes compatíveis:`),lg(),Ml(5072,`code`),mN(5073,`po-datepicker`),lg(),mN(5074,`, `),Ml(5075,`code`),mN(5076,`po-datepicker-range`),lg(),mN(5077,`, `),Ml(5078,`code`),mN(5079,`po-timepicker`),lg(),mN(5080,`, `),Ml(5081,`code`),mN(5082,`po-input`),lg(),mN(5083,`, `),Ml(5084,`code`),mN(5085,`po-number`),lg(),mN(5086,`,
`),Ml(5087,`code`),mN(5088,`po-decimal`),lg(),mN(5089,`, `),Ml(5090,`code`),mN(5091,`po-select`),lg(),mN(5092,`, `),Ml(5093,`code`),mN(5094,`po-radio-group`),lg(),mN(5095,`, `),Ml(5096,`code`),mN(5097,`po-combo`),lg(),mN(5098,`, `),Ml(5099,`code`),mN(5100,`po-lookup`),lg(),mN(5101,`, `),Ml(5102,`code`),mN(5103,`po-checkbox-group`),lg(),mN(5104,`, `),Ml(5105,`code`),mN(5106,`po-multiselect`),lg(),mN(5107,`,
`),Ml(5108,`code`),mN(5109,`po-textarea`),lg(),mN(5110,`, `),Ml(5111,`code`),mN(5112,"po-password``, "),lg(),mN(5113,"po-upload`."),lg()()(),Ml(5114,`tr`,16)(5115,`td`,17)(5116,`div`,25)(5117,`span`,26),mN(5118,` requiredFieldErrorMessage`),ql(5119,`br`),lg()()(),Ml(5120,`td`,21)(5121,`code`,29),mN(5122,`boolean`),lg()(),Ml(5123,`td`,24)(5124,`em`)(5125,`strong`),mN(5126,`(opcional)`),lg()(),Ml(5127,`p`),mN(5128,`Exibe a mensagem setada na propriedade `),Ml(5129,`code`),mN(5130,`errorMessage`),lg(),mN(5131,` se o campo estiver vazio e for requerido.`),lg(),Ml(5132,`blockquote`)(5133,`p`),mN(5134,`Necessário que a propriedade `),Ml(5135,`code`),mN(5136,`required`),lg(),mN(5137,` esteja habilitada.`),lg()(),Ml(5138,`p`)(5139,`strong`),mN(5140,`Componentes compatíveis:`),lg(),Ml(5141,`code`),mN(5142,`po-datepicker`),lg(),mN(5143,`, `),Ml(5144,`code`),mN(5145,`po-timepicker`),lg(),mN(5146,`, `),Ml(5147,`code`),mN(5148,`po-input`),lg(),mN(5149,`, `),Ml(5150,`code`),mN(5151,`po-number`),lg(),mN(5152,`, `),Ml(5153,`code`),mN(5154,`po-decimal`),lg(),mN(5155,`, `),Ml(5156,`code`),mN(5157,`po-password`),lg(),mN(5158,`.`),lg()()(),Ml(5159,`tr`,16)(5160,`td`,17)(5161,`div`,25)(5162,`span`,26),mN(5163,` restrictions`),ql(5164,`br`),lg()()(),Ml(5165,`td`,21)(5166,`code`,80),mN(5167,`PoUploadFileRestrictions`),lg()(),Ml(5168,`td`,24)(5169,`em`)(5170,`strong`),mN(5171,`(opcional)`),lg()(),Ml(5172,`p`),mN(5173,`Objeto que segue a definição da interface `),Ml(5174,`code`),mN(5175,`PoUploadFileRestrictions`),lg(),mN(5176,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),lg(),Ml(5177,`p`)(5178,`strong`),mN(5179,`Componente compatível`),lg(),mN(5180,`: `),Ml(5181,`code`),mN(5182,`po-upload`),lg()()()(),Ml(5183,`tr`,16)(5184,`td`,17)(5185,`div`,25)(5186,`span`,26),mN(5187,` rows`),ql(5188,`br`),lg()()(),Ml(5189,`td`,21)(5190,`code`,45),mN(5191,`number`),lg()(),Ml(5192,`td`,24)(5193,`em`)(5194,`strong`),mN(5195,`(opcional)`),lg()(),Ml(5196,`p`),mN(5197,`Quantidade de linhas exibidas no `),Ml(5198,`code`),mN(5199,`po-textarea`),lg(),mN(5200,`.`),lg()()(),Ml(5201,`tr`,16)(5202,`td`,17)(5203,`div`,25)(5204,`span`,26),mN(5205,` searchService`),ql(5206,`br`),lg()()(),Ml(5207,`td`,21)(5208,`code`,27),mN(5209,`string `),lg(),Ml(5210,`code`,34),mN(5211,` PoLookupFilter`),lg()(),Ml(5212,`td`,24)(5213,`em`)(5214,`strong`),mN(5215,`(opcional)`),lg()(),Ml(5216,`p`),mN(5217,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Ml(5218,`code`),mN(5219,`columns`),lg(),mN(5220,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Ml(5221,`strong`),mN(5222,`Importante:`),lg()(),Ml(5223,`blockquote`)(5224,`p`),mN(5225,`Caso utilizar a propriedade `),Ml(5226,`code`),mN(5227,`optionsService`),lg(),mN(5228,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ml(5229,`a`,7),mN(5230,`guia de API do PO UI`),lg(),mN(5231,`.`),lg()()()(),Ml(5232,`tr`,16)(5233,`td`,17)(5234,`div`,25)(5235,`span`,26),mN(5236,` secondInterval`),ql(5237,`br`),lg()()(),Ml(5238,`td`,21)(5239,`code`,45),mN(5240,`number`),lg()(),Ml(5241,`td`,24)(5242,`em`)(5243,`strong`),mN(5244,`(opcional)`),lg()(),Ml(5245,`p`),mN(5246,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),lg()()(),Ml(5247,`tr`,16)(5248,`td`,17)(5249,`div`,25)(5250,`span`,26),mN(5251,` secret`),ql(5252,`br`),lg()()(),Ml(5253,`td`,21)(5254,`code`,29),mN(5255,`boolean`),lg()(),Ml(5256,`td`,24)(5257,`em`)(5258,`strong`),mN(5259,`(opcional)`),lg()(),Ml(5260,`p`),mN(5261,`Esconde a informação estilo `),Ml(5262,`em`),mN(5263,`password`),lg(),mN(5264,`, pode ser utilizado quando o tipo de dado for `),Ml(5265,`em`),mN(5266,`string`),lg(),mN(5267,`.`),lg()()(),Ml(5268,`tr`,16)(5269,`td`,17)(5270,`div`,25)(5271,`span`,26),mN(5272,` showRequired`),ql(5273,`br`),lg()()(),Ml(5274,`td`,21)(5275,`code`,29),mN(5276,`boolean`),lg()(),Ml(5277,`td`,24)(5278,`em`)(5279,`strong`),mN(5280,`(opcional)`),lg()(),Ml(5281,`p`),mN(5282,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(5283,`blockquote`)(5284,`p`),mN(5285,`Não será exibida a indicação se:`),lg()(),Ml(5286,`ul`)(5287,`li`),mN(5288,`Não possuir `),Ml(5289,`code`),mN(5290,`p-help`),lg(),mN(5291,` e/ou `),Ml(5292,`code`),mN(5293,`p-label`),lg(),mN(5294,`.`),lg()(),Ml(5295,`p`)(5296,`strong`),mN(5297,`Componentes compatíveis:`),lg(),Ml(5298,`code`),mN(5299,`po-datepicker`),lg(),mN(5300,`, `),Ml(5301,`code`),mN(5302,`po-datepicker-range`),lg(),mN(5303,`, `),Ml(5304,`code`),mN(5305,`po-timepicker`),lg(),mN(5306,`, `),Ml(5307,`code`),mN(5308,`po-input`),lg(),mN(5309,`, `),Ml(5310,`code`),mN(5311,`po-number`),lg(),mN(5312,`,
`),Ml(5313,`code`),mN(5314,`po-decimal`),lg(),mN(5315,`, `),Ml(5316,`code`),mN(5317,`po-select`),lg(),mN(5318,`, `),Ml(5319,`code`),mN(5320,`po-radio-group`),lg(),mN(5321,`, `),Ml(5322,`code`),mN(5323,`po-combo`),lg(),mN(5324,`, `),Ml(5325,`code`),mN(5326,`po-lookup`),lg(),mN(5327,`, `),Ml(5328,`code`),mN(5329,`po-checkbox-group`),lg(),mN(5330,`, `),Ml(5331,`code`),mN(5332,`po-multiselect`),lg(),mN(5333,`,
`),Ml(5334,`code`),mN(5335,`po-textarea`),lg(),mN(5336,`, `),Ml(5337,`code`),mN(5338,`po-password`),lg(),mN(5339,`, `),Ml(5340,`code`),mN(5341,`po-upload`),lg(),mN(5342,`.`),lg()()(),Ml(5343,`tr`,16)(5344,`td`,17)(5345,`div`,25)(5346,`span`,26),mN(5347,` showSeconds`),ql(5348,`br`),lg()()(),Ml(5349,`td`,21)(5350,`code`,29),mN(5351,`boolean`),lg()(),Ml(5352,`td`,24)(5353,`em`)(5354,`strong`),mN(5355,`(opcional)`),lg()(),Ml(5356,`p`),mN(5357,`Exibe a coluna de segundos no painel do timepicker.`),lg()()(),Ml(5358,`tr`,16)(5359,`td`,17)(5360,`div`,25)(5361,`span`,26),mN(5362,` showThumbnail`),ql(5363,`br`),lg()()(),Ml(5364,`td`,21)(5365,`code`,29),mN(5366,`boolean`),lg()(),Ml(5367,`td`,24)(5368,`em`)(5369,`strong`),mN(5370,`(opcional)`),lg()(),Ml(5371,`p`),mN(5372,`Exibe a pré-visualização de imagens ao anexá-las.`),lg(),Ml(5373,`blockquote`)(5374,`p`),mN(5375,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ml(5376,`code`),mN(5377,`.png`),lg(),mN(5378,`, `),Ml(5379,`code`),mN(5380,`.jpg`),lg(),mN(5381,`, `),Ml(5382,`code`),mN(5383,`.jpeg`),lg(),mN(5384,` e `),Ml(5385,`code`),mN(5386,`.gif`),lg(),mN(5387,`).`),lg()(),Ml(5388,`p`)(5389,`strong`),mN(5390,`Componente compatível`),lg(),mN(5391,`: `),Ml(5392,`code`),mN(5393,`po-upload`),lg()()()(),Ml(5394,`tr`,16)(5395,`td`,17)(5396,`div`,25)(5397,`span`,26),mN(5398,` size`),ql(5399,`br`),lg()()(),Ml(5400,`td`,21)(5401,`code`,27),mN(5402,`string`),lg()(),Ml(5403,`td`,24)(5404,`em`)(5405,`strong`),mN(5406,`(opcional)`),lg()(),Ml(5407,`p`),mN(5408,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),lg(),Ml(5409,`ul`)(5410,`li`)(5411,`code`),mN(5412,`small`),lg(),mN(5413,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(5414,`li`)(5415,`code`),mN(5416,`medium`),lg(),mN(5417,`: aplica a medida medium de cada componente.`),lg(),Ml(5418,`li`)(5419,`code`),mN(5420,`large`),lg(),mN(5421,`: aplica a medida large de cada componente (disponível para `),Ml(5422,`code`),mN(5423,`po-checkbox`),lg(),mN(5424,` e `),Ml(5425,`code`),mN(5426,`po-radio-group`),lg(),mN(5427,`).`),Ml(5428,`blockquote`)(5429,`p`),mN(5430,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(5431,`code`),mN(5432,`medium`),lg(),mN(5433,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(5434,`a`,40),mN(5435,`po-theme`),lg(),mN(5436,`.`),lg()()()()()(),Ml(5437,`tr`,16)(5438,`td`,17)(5439,`div`,25)(5440,`span`,26),mN(5441,` sort`),ql(5442,`br`),lg()()(),Ml(5443,`td`,21)(5444,`code`,29),mN(5445,`boolean`),lg()(),Ml(5446,`td`,24)(5447,`em`)(5448,`strong`),mN(5449,`(opcional)`),lg()(),Ml(5450,`p`),mN(5451,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),lg(),Ml(5452,`p`)(5453,`strong`),mN(5454,`Componentes compatíveis:`),lg(),Ml(5455,`code`),mN(5456,`po-combo`),lg(),mN(5457,`, po-multiselect`),lg()()(),Ml(5458,`tr`,16)(5459,`td`,17)(5460,`div`,25)(5461,`span`,26),mN(5462,` step`),ql(5463,`br`),lg()()(),Ml(5464,`td`,21)(5465,`code`,45),mN(5466,`number`),lg()(),Ml(5467,`td`,24)(5468,`em`)(5469,`strong`),mN(5470,`(opcional)`),lg()(),Ml(5471,`p`),mN(5472,`Intervalo utilizado no `),Ml(5473,`code`),mN(5474,`po-number`),lg(),mN(5475,`.`),lg()()(),Ml(5476,`tr`,16)(5477,`td`,17)(5478,`div`,25)(5479,`span`,26),mN(5480,` thousandMaxlength`),ql(5481,`br`),lg()()(),Ml(5482,`td`,21)(5483,`code`,45),mN(5484,`number`),lg()(),Ml(5485,`td`,24)(5486,`em`)(5487,`strong`),mN(5488,`(opcional)`),lg()(),Ml(5489,`p`),mN(5490,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),lg(),Ml(5491,`blockquote`)(5492,`p`),mN(5493,`Esta propriedade só pode ser utilizada quando o `),Ml(5494,`code`),mN(5495,`type`),lg(),mN(5496,` for `),Ml(5497,`em`),mN(5498,`currency`),lg(),mN(5499,` ou `),Ml(5500,`em`),mN(5501,`decimal`),lg(),mN(5502,`.`),lg()(),Ml(5503,`blockquote`)(5504,`p`),mN(5505,`Quando utilizado com `),Ml(5506,`code`),mN(5507,`displayFormat`),lg(),mN(5508,`, será respeitado o valor `),Ml(5509,`strong`),mN(5510,`mais restritivo`),lg(),mN(5511,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),lg()()()(),Ml(5512,`tr`,16)(5513,`td`,17)(5514,`div`,25)(5515,`span`,26),mN(5516,` type`),ql(5517,`br`),lg()()(),Ml(5518,`td`,21)(5519,`code`,27),mN(5520,`string `),lg(),Ml(5521,`code`,81),mN(5522,` PoDynamicFieldType`),lg()(),Ml(5523,`td`,24)(5524,`em`)(5525,`strong`),mN(5526,`(opcional)`),lg()(),Ml(5527,`p`),mN(5528,`Tipo do valor campo.`),lg(),Ml(5529,`p`),mN(5530,`Valores válidos:`),lg(),Ml(5531,`ul`)(5532,`li`)(5533,`code`),mN(5534,`boolean`),lg(),mN(5535,`: Valores `),Ml(5536,`em`),mN(5537,`booleanos`),lg(),mN(5538,`.`),lg(),Ml(5539,`li`)(5540,`code`),mN(5541,`currency`),lg(),mN(5542,`: Valores monetários.`),lg(),Ml(5543,`li`)(5544,`code`),mN(5545,`decimal`),lg(),mN(5546,`: Valores decimais.`),lg(),Ml(5547,`li`)(5548,`code`),mN(5549,`date`),lg(),mN(5550,`: Valores de datas.`),Ml(5551,`ul`)(5552,`li`),mN(5553,`Aceita os tipos `),Ml(5554,`strong`),mN(5555,`string`),lg(),mN(5556,` e `),Ml(5557,`strong`),mN(5558,`Date`),lg(),mN(5559,` padr\xE3o do Javascript,
por exemplo: `),Ml(5560,`code`),mN(5561,`'2017-11-28'`),lg(),mN(5562,` ou `),Ml(5563,`code`),mN(5564,`new Date(2017, 10, 28)`),lg(),mN(5565,`.`),lg()()(),Ml(5566,`li`)(5567,`code`),mN(5568,`dateTime`),lg(),mN(5569,`: Valor de data com horário.`),Ml(5570,`ul`)(5571,`li`),mN(5572,`Aceita o tipo `),Ml(5573,`em`),mN(5574,`string`),lg(),mN(5575,` no formato `),Ml(5576,`strong`),mN(5577,`ISO-8601`),lg(),mN(5578,` extendido `),Ml(5579,`strong`),mN(5580,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),lg(),mN(5581,`
e o tipo `),Ml(5582,`strong`),mN(5583,`Date`),lg(),mN(5584,` padrão do Javascript, por exemplo: `),Ml(5585,`code`),mN(5586,`'2017-11-28T00:00:00-02:00'`),lg(),mN(5587,` ou `),Ml(5588,`code`),mN(5589,`new Date(2017, 10, 28)`),lg(),mN(5590,`.`),lg()()(),Ml(5591,`li`)(5592,`code`),mN(5593,`number`),lg(),mN(5594,`: Valores numéricos.`),lg(),Ml(5595,`li`)(5596,`code`),mN(5597,`string`),lg(),mN(5598,`: Textos.`),lg(),Ml(5599,`li`)(5600,`code`),mN(5601,`time`),lg(),mN(5602,`: Valor do horário.`),Ml(5603,`ul`)(5604,`li`),mN(5605,`Aceita o tipo `),Ml(5606,`strong`),mN(5607,`string`),lg(),mN(5608,` nos formatos `),Ml(5609,`strong`),mN(5610,`'HH:mm:ss'`),lg(),mN(5611,` ou `),Ml(5612,`strong`),mN(5613,`'HH:mm:ss.ffffff'`),lg(),mN(5614,`, por exemplo: `),Ml(5615,`code`),mN(5616,`'23:12:45'`),lg(),mN(5617,`.`),lg()()()()()(),Ml(5618,`tr`,16)(5619,`td`,17)(5620,`div`,25)(5621,`span`,26),mN(5622,` url`),ql(5623,`br`),lg()()(),Ml(5624,`td`,21)(5625,`code`,27),mN(5626,`string`),lg()(),Ml(5627,`td`,24)(5628,`em`)(5629,`strong`),mN(5630,`(opcional)`),lg()(),Ml(5631,`p`),mN(5632,`URL que deve ser feita a requisição com os arquivos selecionados.`),lg(),Ml(5633,`p`)(5634,`strong`),mN(5635,`Componente compatível`),lg(),mN(5636,`: `),Ml(5637,`code`),mN(5638,`po-upload`),lg()()()(),Ml(5639,`tr`,16)(5640,`td`,17)(5641,`div`,25)(5642,`span`,26),mN(5643,` validate`),ql(5644,`br`),lg()()(),Ml(5645,`td`,21)(5646,`code`,27),mN(5647,`string `),lg(),Ml(5648,`code`,44),mN(5649,` Function`),lg()(),Ml(5650,`td`,24)(5651,`em`)(5652,`strong`),mN(5653,`(opcional)`),lg()(),Ml(5654,`p`),mN(5655,`Função ou serviço para validar as `),Ml(5656,`strong`),mN(5657,`mudanças do campo`),lg(),mN(5658,`.`),lg(),Ml(5659,`ul`)(5660,`li`),mN(5661,`A propriedade aceita os seguintes tipos:`),lg()(),Ml(5662,`ul`)(5663,`li`)(5664,`strong`),mN(5665,`String`),lg(),mN(5666,`: Endpoint usado pelo componente para requisição via `),Ml(5667,`code`),mN(5668,`POST`),lg(),mN(5669,`.`),lg(),Ml(5670,`li`)(5671,`strong`),mN(5672,`Function`),lg(),mN(5673,`: Método que será executado.`),lg()(),Ml(5674,`p`),mN(5675,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Ml(5676,`code`),mN(5677,`PoDynamicFormFieldChanged`),lg(),mN(5678,`:`),lg(),Ml(5679,`p`)(5680,`code`),mN(5681,`{ property: 'property name', value: 'new value' }`),lg()(),Ml(5682,`p`),mN(5683,`O retorno desta função deve ser do tipo `),Ml(5684,`a`,82),mN(5685,`PoDynamicFormFieldValidation`),lg(),mN(5686,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),lg(),Ml(5687,`pre`)(5688,`code`),mN(5689,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),lg()(),Ml(5690,`p`),mN(5691,`Para referenciar a sua função utilize a propriedade `),Ml(5692,`code`),mN(5693,`bind`),lg(),mN(5694,`, por exemplo:
`),Ml(5695,`code`),mN(5696,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),lg()()()(),Ml(5697,`tr`,16)(5698,`td`,17)(5699,`div`,25)(5700,`span`,26),mN(5701,` visible`),ql(5702,`br`),lg()()(),Ml(5703,`td`,21)(5704,`code`,29),mN(5705,`boolean`),lg()(),Ml(5706,`td`,24)(5707,`em`)(5708,`strong`),mN(5709,`(opcional)`),lg()(),Ml(5710,`p`),mN(5711,`Indica se o campo será visível.`),lg()()(),Ml(5712,`tr`,16)(5713,`td`,17)(5714,`div`,25)(5715,`span`,26),mN(5716,` yearRangeLimit`),ql(5717,`br`),lg()()(),Ml(5718,`td`,21)(5719,`code`,45),mN(5720,`number`),lg()(),Ml(5721,`td`,24)(5722,`em`)(5723,`strong`),mN(5724,`(opcional)`),lg()(),Ml(5725,`p`),mN(5726,`Define o limite de anos exibidos na lista de anos do `),Ml(5727,`code`),mN(5728,`po-datepicker`),lg(),mN(5729,` nos modos `),Ml(5730,`code`),mN(5731,`month-year`),lg(),mN(5732,` e `),Ml(5733,`code`),mN(5734,`year`),lg(),mN(5735,`.`),lg()()()(),Ml(5736,`h4`,43)(5737,`code`,5),mN(5738,`PoLookupColumn`),lg()(),Ml(5739,`div`,2)(5740,`p`),mN(5741,`Interface para configuração das colunas do po-lookup.`),lg()(),Ml(5742,`h4`,12),mN(5743,`Propriedades`),lg(),Ml(5744,`table`,13)(5745,`tr`,14)(5746,`th`,15),mN(5747,`Nome`),lg(),Ml(5748,`th`,15),mN(5749,`Tipo`),lg(),Ml(5750,`th`,15),mN(5751,`Descrição`),lg()(),Ml(5752,`tr`,16)(5753,`td`,17)(5754,`div`,25)(5755,`span`,26),mN(5756,` fieldLabel`),ql(5757,`br`),lg()()(),Ml(5758,`td`,21)(5759,`code`,29),mN(5760,`boolean`),lg()(),Ml(5761,`td`,24)(5762,`em`)(5763,`strong`),mN(5764,`(opcional)`),lg()(),Ml(5765,`p`),mN(5766,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),lg(),Ml(5767,`p`),mN(5768,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),lg(),Ml(5769,`p`),mN(5770,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Ml(5771,`code`),mN(5772,`p-field-format`),lg(),mN(5773,` ou `),Ml(5774,`code`),mN(5775,`p-field-label`),lg(),mN(5776,` forem configurados no componente.`),lg()()(),Ml(5777,`tr`,16)(5778,`td`,17)(5779,`div`,25)(5780,`span`,26),mN(5781,` format`),ql(5782,`br`),lg()()(),Ml(5783,`td`,21)(5784,`code`,27),mN(5785,`string`),lg()(),Ml(5786,`td`,24)(5787,`em`)(5788,`strong`),mN(5789,`(opcional)`),lg()(),Ml(5790,`p`),mN(5791,`Formato de exibição do valor da coluna:`),lg(),Ml(5792,`ul`)(5793,`li`),mN(5794,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),lg(),Ml(5795,`li`),mN(5796,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),lg()()()(),Ml(5797,`tr`,16)(5798,`td`,17)(5799,`div`,25)(5800,`span`,26),mN(5801,` label`),ql(5802,`br`),lg()()(),Ml(5803,`td`,21)(5804,`code`,27),mN(5805,`string`),lg()(),Ml(5806,`td`,24)(5807,`em`)(5808,`strong`),mN(5809,`(opcional)`),lg()(),Ml(5810,`p`),mN(5811,`Texto para título da coluna.`),lg(),Ml(5812,`p`),mN(5813,`Caso não seja informado, será utilizado como `),Ml(5814,`em`),mN(5815,`label`),lg(),mN(5816,` o valor da propriedade `),Ml(5817,`em`),mN(5818,`property`),lg(),mN(5819,` com a primeira letra em maiúsculo.`),lg()()(),Ml(5820,`tr`,16)(5821,`td`,17)(5822,`div`,25)(5823,`span`,26),mN(5824,` mask`),ql(5825,`br`),lg()()(),Ml(5826,`td`,21)(5827,`code`,27),mN(5828,`string`),lg()(),Ml(5829,`td`,24)(5830,`em`)(5831,`strong`),mN(5832,`(opcional)`),lg()(),Ml(5833,`p`),mN(5834,`Define uma máscara para formatação do valor exibido na coluna.`),lg(),Ml(5835,`p`),mN(5836,`A máscara é aplicada somente para `),Ml(5837,`strong`),mN(5838,`exibição`),lg(),mN(5839,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),lg(),Ml(5840,`p`),mN(5841,`Caracteres válidos para a máscara:`),lg(),Ml(5842,`ul`)(5843,`li`)(5844,`code`),mN(5845,`9`),lg(),mN(5846,` : aceita um dígito numérico (0-9).`),lg(),Ml(5847,`li`)(5848,`code`),mN(5849,`@`),lg(),mN(5850,` : aceita um caractere alfabético (a-z, A-Z).`),lg(),Ml(5851,`li`)(5852,`code`),mN(5853,`w`),lg(),mN(5854,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),lg(),Ml(5855,`li`),mN(5856,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Ml(5857,`code`),mN(5858,`.`),lg(),mN(5859,`, `),Ml(5860,`code`),mN(5861,`-`),lg(),mN(5862,`, `),Ml(5863,`code`),mN(5864,`/`),lg(),mN(5865,`, `),Ml(5866,`code`),mN(5867,`(`),lg(),mN(5868,`, `),Ml(5869,`code`),mN(5870,`)`),lg(),mN(5871,`, `),Ml(5872,`code`),mN(5873,`+`),lg(),mN(5874,`, `),ql(5875,`code`),mN(5876,`).`),lg()(),Ml(5877,`p`),mN(5878,`Exemplos de uso:`),lg(),Ml(5879,`pre`)(5880,`code`),mN(5881,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),lg()(),Ml(5882,`blockquote`)(5883,`p`),mN(5884,`Esta propriedade é utilizada apenas para colunas do tipo `),Ml(5885,`code`),mN(5886,`string`),lg(),mN(5887,` (padr\xE3o).
Caso a coluna possua um `),Ml(5888,`code`),mN(5889,`type`),lg(),mN(5890,` diferente de `),Ml(5891,`code`),mN(5892,`string`),lg(),mN(5893,`, a máscara será ignorada.`),lg()()()(),Ml(5894,`tr`,16)(5895,`td`,17)(5896,`div`,25)(5897,`span`,26),mN(5898,` property`),ql(5899,`br`),lg()()(),Ml(5900,`td`,21)(5901,`code`,27),mN(5902,`string`),lg()(),Ml(5903,`td`,24)(5904,`em`)(5905,`strong`),mN(5906,`(opcional)`),lg()(),Ml(5907,`p`),mN(5908,`Nome identificador da coluna.`),lg()()(),Ml(5909,`tr`,16)(5910,`td`,17)(5911,`div`,25)(5912,`span`,26),mN(5913,` type`),ql(5914,`br`),lg()()(),Ml(5915,`td`,21)(5916,`code`,27),mN(5917,`string`),lg()(),Ml(5918,`td`,24)(5919,`em`)(5920,`strong`),mN(5921,`(opcional)`),lg()(),Ml(5922,`p`),mN(5923,`Tipo da coluna:`),lg(),Ml(5924,`ul`)(5925,`li`),mN(5926,`string (padrão): textos`),lg(),Ml(5927,`li`),mN(5928,`number: valores numéricos`),lg(),Ml(5929,`li`),mN(5930,`date: data`),lg(),Ml(5931,`li`),mN(5932,`currency: valores monetários`),lg(),Ml(5933,`li`),mN(5934,`dateTime: data e hora`),lg()()()(),Ml(5935,`tr`,16)(5936,`td`,17)(5937,`div`,25)(5938,`span`,26),mN(5939,` width`),ql(5940,`br`),lg()()(),Ml(5941,`td`,21)(5942,`code`,27),mN(5943,`string`),lg()(),Ml(5944,`td`,24)(5945,`em`)(5946,`strong`),mN(5947,`(opcional)`),lg()(),Ml(5948,`p`),mN(5949,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),lg()()()(),Ml(5950,`h4`,43)(5951,`code`,5),mN(5952,`PoLookupFilter`),lg()(),Ml(5953,`div`,2)(5954,`p`),mN(5955,`Define o tipo de busca utilizado no po-lookup.`),lg()(),Ml(5956,`h4`,12),mN(5957,`Métodos`),lg(),Ml(5958,`table`,41)(5959,`tr`,16)(5960,`th`,42)(5961,`div`,25)(5962,`h4`)(5963,`span`,26),mN(5964,` getFilteredItems `),lg()()()()(),Ml(5965,`tr`,24)(5966,`td`,24)(5967,`p`),mN(5968,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Ml(5969,`em`),mN(5970,`Observable`),lg(),mN(5971,` com a resposta da API no formato da interface `),Ml(5972,`code`),mN(5973,`PoLookupResponseApi`),lg(),mN(5974,`.`),lg()()()(),Ml(5975,`h5`)(5976,`b`),mN(5977,`Parâmetros`),lg()(),Ml(5978,`table`,13)(5979,`tr`,14)(5980,`th`,15),mN(5981,`Nome`),lg(),Ml(5982,`th`,15),mN(5983,`Tipo`),lg(),Ml(5984,`th`,15),mN(5985,`Descrição`),lg()(),Ml(5986,`tr`,16)(5987,`td`,17),mN(5988,` params`),lg(),Ml(5989,`td`,21)(5990,`code`,83),mN(5991,` PoLookupFilteredItemsParams `),lg()(),Ml(5992,`td`,24)(5993,`p`),mN(5994,`Objeto enviado por parâmetro que implementa a interface `),Ml(5995,`code`),mN(5996,`PoLookupFilteredItemsParams`),lg(),mN(5997,`.`),lg()()()(),ql(5998,`br`),Ml(5999,`table`,41)(6e3,`tr`,16)(6001,`th`,42)(6002,`div`,25)(6003,`h4`)(6004,`span`,26),mN(6005,` getObjectByValue `),lg()()()()(),Ml(6006,`tr`,24)(6007,`td`,24)(6008,`p`),mN(6009,`Método responsável por enviar um valor que será buscado no serviço.`),lg(),Ml(6010,`p`),mN(6011,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),lg()()()(),Ml(6012,`h5`)(6013,`b`),mN(6014,`Parâmetros`),lg()(),Ml(6015,`table`,13)(6016,`tr`,14)(6017,`th`,15),mN(6018,`Nome`),lg(),Ml(6019,`th`,15),mN(6020,`Tipo`),lg(),Ml(6021,`th`,15),mN(6022,`Descrição`),lg()(),Ml(6023,`tr`,16)(6024,`td`,17),mN(6025,` value`),lg(),Ml(6026,`td`,21)(6027,`code`,27),mN(6028,` string `),lg(),Ml(6029,`code`,74),mN(6030,` Array<any> `),lg()(),Ml(6031,`td`,24)(6032,`p`),mN(6033,`Valor único a ser buscado na fonte de dados.`),lg()()(),Ml(6034,`tr`,16)(6035,`td`,17),mN(6036,` filterParams`),lg(),Ml(6037,`td`,21)(6038,`code`,83),mN(6039,` any `),lg()(),Ml(6040,`td`,24)(6041,`p`),mN(6042,`Valor informado através da propriedade `),Ml(6043,`code`),mN(6044,`p-filter-params`),lg(),mN(6045,`.`),lg()()()(),ql(6046,`br`),Ml(6047,`h4`,43)(6048,`code`,5),mN(6049,`PoLookupFilteredItemsParams`),lg()(),Ml(6050,`div`,2)(6051,`p`),mN(6052,`Interface do objeto enviado como parâmetro na função `),Ml(6053,`code`),mN(6054,`getFilteredItems`),lg(),mN(6055,`.`),lg()(),Ml(6056,`h4`,12),mN(6057,`Propriedades`),lg(),Ml(6058,`table`,13)(6059,`tr`,14)(6060,`th`,15),mN(6061,`Nome`),lg(),Ml(6062,`th`,15),mN(6063,`Tipo`),lg(),Ml(6064,`th`,15),mN(6065,`Descrição`),lg()(),Ml(6066,`tr`,16)(6067,`td`,17)(6068,`div`,25)(6069,`span`,26),mN(6070,` advancedFilters`),ql(6071,`br`),lg()()(),Ml(6072,`td`,21)(6073,`code`,84),mN(6074,`{ [key: string]: any;
}`),lg()(),Ml(6075,`td`,24)(6076,`em`)(6077,`strong`),mN(6078,`(opcional)`),lg()(),Ml(6079,`p`),mN(6080,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),lg()()(),Ml(6081,`tr`,16)(6082,`td`,17)(6083,`div`,25)(6084,`span`,26),mN(6085,` filter`),ql(6086,`br`),lg()()(),Ml(6087,`td`,21)(6088,`code`,27),mN(6089,`string`),lg()(),Ml(6090,`td`,24)(6091,`em`)(6092,`strong`),mN(6093,`(opcional)`),lg()(),Ml(6094,`p`),mN(6095,`Conteúdo utilizado para filtrar a lista de itens.`),lg()()(),Ml(6096,`tr`,16)(6097,`td`,17)(6098,`div`,25)(6099,`span`,26),mN(6100,` filterParams`),ql(6101,`br`),lg()()(),Ml(6102,`td`,21)(6103,`code`,33),mN(6104,`any`),lg()(),Ml(6105,`td`,24)(6106,`em`)(6107,`strong`),mN(6108,`(opcional)`),lg()(),Ml(6109,`p`),mN(6110,`Valor informado através da propriedade `),Ml(6111,`code`),mN(6112,`p-filter-params`),lg(),mN(6113,`.`),lg()()(),Ml(6114,`tr`,16)(6115,`td`,17)(6116,`div`,25)(6117,`span`,26),mN(6118,` order`),ql(6119,`br`),lg()()(),Ml(6120,`td`,21)(6121,`code`,27),mN(6122,`string`),lg()(),Ml(6123,`td`,24)(6124,`em`)(6125,`strong`),mN(6126,`(opcional)`),lg()(),Ml(6127,`p`),mN(6128,`Coluna que está sendo ordenada na tabela.`),lg(),Ml(6129,`ul`)(6130,`li`),mN(6131,`Coluna decrescente será informada da seguinte forma: `),Ml(6132,`code`),mN(6133,`-<colunaOrdenada>`),lg(),mN(6134,`, por exemplo `),Ml(6135,`code`),mN(6136,`-name`),lg(),mN(6137,`.`),lg(),Ml(6138,`li`),mN(6139,`Coluna ascendente será informada da seguinte forma: `),Ml(6140,`code`),mN(6141,`<colunaOrdenada>`),lg(),mN(6142,`, por exemplo `),Ml(6143,`code`),mN(6144,`name`),lg(),mN(6145,`.`),lg()()()(),Ml(6146,`tr`,16)(6147,`td`,17)(6148,`div`,25)(6149,`span`,26),mN(6150,` page`),ql(6151,`br`),lg()()(),Ml(6152,`td`,21)(6153,`code`,45),mN(6154,`number`),lg()(),Ml(6155,`td`,24)(6156,`em`)(6157,`strong`),mN(6158,`(opcional)`),lg()(),Ml(6159,`p`),mN(6160,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),lg()()(),Ml(6161,`tr`,16)(6162,`td`,17)(6163,`div`,25)(6164,`span`,26),mN(6165,` pageSize`),ql(6166,`br`),lg()()(),Ml(6167,`td`,21)(6168,`code`,45),mN(6169,`number`),lg()(),Ml(6170,`td`,24)(6171,`em`)(6172,`strong`),mN(6173,`(opcional)`),lg()(),Ml(6174,`p`),mN(6175,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),lg()()()(),Ml(6176,`h4`,43)(6177,`code`,5),mN(6178,`PoLookupLiterals`),lg()(),Ml(6179,`div`,2)(6180,`p`),mN(6181,`Interface para definição das literais usadas no `),Ml(6182,`code`),mN(6183,`po-lookup`),lg(),mN(6184,`.`),lg()(),Ml(6185,`h4`,12),mN(6186,`Propriedades`),lg(),Ml(6187,`table`,13)(6188,`tr`,14)(6189,`th`,15),mN(6190,`Nome`),lg(),Ml(6191,`th`,15),mN(6192,`Tipo`),lg(),Ml(6193,`th`,15),mN(6194,`Descrição`),lg()(),Ml(6195,`tr`,16)(6196,`td`,17)(6197,`div`,25)(6198,`span`,26),mN(6199,` clean`),ql(6200,`br`),lg()()(),Ml(6201,`td`,21)(6202,`code`,27),mN(6203,`string`),lg()(),Ml(6204,`td`,24)(6205,`em`)(6206,`strong`),mN(6207,`(opcional)`),lg()(),Ml(6208,`p`),mN(6209,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),lg()()(),Ml(6210,`tr`,16)(6211,`td`,17)(6212,`div`,25)(6213,`span`,26),mN(6214,` modalAdvancedSearch`),ql(6215,`br`),lg()()(),Ml(6216,`td`,21)(6217,`code`,27),mN(6218,`string`),lg()(),Ml(6219,`td`,24)(6220,`em`)(6221,`strong`),mN(6222,`(opcional)`),lg()(),Ml(6223,`p`),mN(6224,`Texto do link de busca avançada.`),lg(),Ml(6225,`p`),mN(6226,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),lg()()(),Ml(6227,`tr`,16)(6228,`td`,17)(6229,`div`,25)(6230,`span`,26),mN(6231,` modalAdvancedSearchPrimaryActionLabel`),ql(6232,`br`),lg()()(),Ml(6233,`td`,21)(6234,`code`,27),mN(6235,`string`),lg()(),Ml(6236,`td`,24)(6237,`em`)(6238,`strong`),mN(6239,`(opcional)`),lg()(),Ml(6240,`p`),mN(6241,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),lg()()(),Ml(6242,`tr`,16)(6243,`td`,17)(6244,`div`,25)(6245,`span`,26),mN(6246,` modalAdvancedSearchSecondaryActionLabel`),ql(6247,`br`),lg()()(),Ml(6248,`td`,21)(6249,`code`,27),mN(6250,`string`),lg()(),Ml(6251,`td`,24)(6252,`em`)(6253,`strong`),mN(6254,`(opcional)`),lg()(),Ml(6255,`p`),mN(6256,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),lg()()(),Ml(6257,`tr`,16)(6258,`td`,17)(6259,`div`,25)(6260,`span`,26),mN(6261,` modalAdvancedSearchTitle`),ql(6262,`br`),lg()()(),Ml(6263,`td`,21)(6264,`code`,27),mN(6265,`string`),lg()(),Ml(6266,`td`,24)(6267,`em`)(6268,`strong`),mN(6269,`(opcional)`),lg()(),Ml(6270,`p`),mN(6271,`Texto exibido no título da modal de busca avançada.`),lg()()(),Ml(6272,`tr`,16)(6273,`td`,17)(6274,`div`,25)(6275,`span`,26),mN(6276,` modalDisclaimerGroupTitle`),ql(6277,`br`),lg()()(),Ml(6278,`td`,21)(6279,`code`,27),mN(6280,`string`),lg()(),Ml(6281,`td`,24)(6282,`em`)(6283,`strong`),mN(6284,`(opcional)`),lg()(),Ml(6285,`p`),mN(6286,`Texto exibido no título do disclaimer.`),lg()()(),Ml(6287,`tr`,16)(6288,`td`,17)(6289,`div`,25)(6290,`span`,26),mN(6291,` modalPlaceholder`),ql(6292,`br`),lg()()(),Ml(6293,`td`,21)(6294,`code`,27),mN(6295,`string`),lg()(),Ml(6296,`td`,24)(6297,`em`)(6298,`strong`),mN(6299,`(opcional)`),lg()(),Ml(6300,`p`),mN(6301,`Texto exibido no placeholder do input da modal.`),lg()()(),Ml(6302,`tr`,16)(6303,`td`,17)(6304,`div`,25)(6305,`span`,26),mN(6306,` modalPrimaryActionLabel`),ql(6307,`br`),lg()()(),Ml(6308,`td`,21)(6309,`code`,27),mN(6310,`string`),lg()(),Ml(6311,`td`,24)(6312,`em`)(6313,`strong`),mN(6314,`(opcional)`),lg()(),Ml(6315,`p`),mN(6316,`Texto exibido no label do botão de ação primária da modal.`),lg()()(),Ml(6317,`tr`,16)(6318,`td`,17)(6319,`div`,25)(6320,`span`,26),mN(6321,` modalSecondaryActionLabel`),ql(6322,`br`),lg()()(),Ml(6323,`td`,21)(6324,`code`,27),mN(6325,`string`),lg()(),Ml(6326,`td`,24)(6327,`em`)(6328,`strong`),mN(6329,`(opcional)`),lg()(),Ml(6330,`p`),mN(6331,`Texto exibido no label do botão de ação secundária da modal.`),lg()()(),Ml(6332,`tr`,16)(6333,`td`,17)(6334,`div`,25)(6335,`span`,26),mN(6336,` modalTableLoadMoreData`),ql(6337,`br`),lg()()(),Ml(6338,`td`,21)(6339,`code`,27),mN(6340,`string`),lg()(),Ml(6341,`td`,24)(6342,`em`)(6343,`strong`),mN(6344,`(opcional)`),lg()(),Ml(6345,`p`),mN(6346,`Label do `),Ml(6347,`code`),mN(6348,`button`),lg(),mN(6349,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),lg()()(),Ml(6350,`tr`,16)(6351,`td`,17)(6352,`div`,25)(6353,`span`,26),mN(6354,` modalTableLoadingData`),ql(6355,`br`),lg()()(),Ml(6356,`td`,21)(6357,`code`,27),mN(6358,`string`),lg()(),Ml(6359,`td`,24)(6360,`em`)(6361,`strong`),mN(6362,`(opcional)`),lg()(),Ml(6363,`p`),mN(6364,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),lg()()(),Ml(6365,`tr`,16)(6366,`td`,17)(6367,`div`,25)(6368,`span`,26),mN(6369,` modalTableNoColumns`),ql(6370,`br`),lg()()(),Ml(6371,`td`,21)(6372,`code`,27),mN(6373,`string`),lg()(),Ml(6374,`td`,24)(6375,`em`)(6376,`strong`),mN(6377,`(opcional)`),lg()(),Ml(6378,`p`),mN(6379,`Texto exibido quando não existem colunas definidas para a tabela.`),lg()()(),Ml(6380,`tr`,16)(6381,`td`,17)(6382,`div`,25)(6383,`span`,26),mN(6384,` modalTableNoData`),ql(6385,`br`),lg()()(),Ml(6386,`td`,21)(6387,`code`,27),mN(6388,`string`),lg()(),Ml(6389,`td`,24)(6390,`em`)(6391,`strong`),mN(6392,`(opcional)`),lg()(),Ml(6393,`p`),mN(6394,`Texto exibido quando não existem itens para serem exibidos na tabela.`),lg()()(),Ml(6395,`tr`,16)(6396,`td`,17)(6397,`div`,25)(6398,`span`,26),mN(6399,` modalTitle`),ql(6400,`br`),lg()()(),Ml(6401,`td`,21)(6402,`code`,27),mN(6403,`string`),lg()(),Ml(6404,`td`,24)(6405,`em`)(6406,`strong`),mN(6407,`(opcional)`),lg()(),Ml(6408,`p`),mN(6409,`Texto exibido no título da modal.`),lg()()(),Ml(6410,`tr`,16)(6411,`td`,17)(6412,`div`,25)(6413,`span`,26),mN(6414,` search`),ql(6415,`br`),lg()()(),Ml(6416,`td`,21)(6417,`code`,27),mN(6418,`string`),lg()(),Ml(6419,`td`,24)(6420,`em`)(6421,`strong`),mN(6422,`(opcional)`),lg()(),Ml(6423,`p`),mN(6424,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),lg()()()(),Ml(6425,`h4`,43)(6426,`code`,5),mN(6427,`PoLookupResponseApi`),lg()(),Ml(6428,`div`,2)(6429,`p`),mN(6430,`Interface que representa a estrutura de resposta de uma coleção de itens. `),lg()(),Ml(6431,`h4`,12),mN(6432,`Propriedades`),lg(),Ml(6433,`table`,13)(6434,`tr`,14)(6435,`th`,15),mN(6436,`Nome`),lg(),Ml(6437,`th`,15),mN(6438,`Tipo`),lg(),Ml(6439,`th`,15),mN(6440,`Descrição`),lg()(),Ml(6441,`tr`,16)(6442,`td`,17)(6443,`div`,25)(6444,`span`,26),mN(6445,` hasNext`),ql(6446,`br`),lg()()(),Ml(6447,`td`,21)(6448,`code`,29),mN(6449,`boolean`),lg()(),Ml(6450,`td`,24)(6451,`p`),mN(6452,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),lg()()(),Ml(6453,`tr`,16)(6454,`td`,17)(6455,`div`,25)(6456,`span`,26),mN(6457,` items`),ql(6458,`br`),lg()()(),Ml(6459,`td`,21)(6460,`code`,85),mN(6461,`Array<object>`),lg()(),Ml(6462,`td`,24)(6463,`p`),mN(6464,`Lista de itens retornados.`),lg()()()(),Ml(6465,`h3`),mN(6466,`Enums`),lg(),Ml(6467,`h4`,4)(6468,`code`,5),mN(6469,`PoTableColumnSpacing`),lg()(),Ml(6470,`div`,2)(6471,`p`),mN(6472,`Tipos de espaçamento interno (padding) das células (`),Ml(6473,`strong`),mN(6474,`p-spacing`),lg(),mN(6475,`) do po-table.`),lg()(),Ml(6476,`h4`,12),mN(6477,`Propriedades`),lg(),Ml(6478,`table`,13)(6479,`tr`,14)(6480,`th`,15),mN(6481,`Nome`),lg(),Ml(6482,`th`,15),mN(6483,`Descrição`),lg()(),Ml(6484,`tr`,16)(6485,`td`,17)(6486,`div`,25)(6487,`span`,26),mN(6488,` ExtraSmall`),ql(6489,`br`),lg()()(),Ml(6490,`td`,24)(6491,`p`),mN(6492,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),lg()()(),Ml(6493,`tr`,16)(6494,`td`,17)(6495,`div`,25)(6496,`span`,26),mN(6497,` Small`),ql(6498,`br`),lg()()(),Ml(6499,`td`,24)(6500,`p`),mN(6501,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),lg()()(),Ml(6502,`tr`,16)(6503,`td`,17)(6504,`div`,25)(6505,`span`,26),mN(6506,` Medium`),ql(6507,`br`),lg()()(),Ml(6508,`td`,24)(6509,`p`),mN(6510,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),lg()()(),Ml(6511,`tr`,16)(6512,`td`,17)(6513,`div`,25)(6514,`span`,26),mN(6515,` Large`),ql(6516,`br`),lg()()(),Ml(6517,`td`,24)(6518,`p`),mN(6519,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ct=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-lookup-doc`),lg(),Ml(4,`po-tab`,3),ht$1(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-lookup-basic-view`)(6,`sample-po-lookup-labs-view`)(7,`sample-po-lookup-hero-view`)(8,`sample-po-lookup-hero-reactive-form-view`)(9,`sample-po-lookup-sw-films-view`)(10,`sample-po-lookup-multiple-view`)(11,`sample-po-lookup-mask-view`),lg()()()),l&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ae,Oe,ze,He,Be,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})()}];var Ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Ct),NL]})}return a})();var tn=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ke]})}return a})();export{tn as DocPoLookupModule};