import{r as t,t as r}from"./chunk-zystk1pz.js";import{$i as q,$n as Dx,$r as Xy,$t as iU,Ar as O$1,At as _Ce,Bi as jp,Cn as vn,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Kn as Bx,Li as ht$1,Lr as RT,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qi as pN,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ai as _N,ca as um,dr as I,et as Ny,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,li as _x,lr as Gl,mi as ay,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,tr as EY,ui as a0,ut as S8e,va as yY,wr as MN,xr as Lk,yi as cN,zi as jk,zn as $O,zr as SN}from"./main-3EWTGE7T.js";var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&Gl(0,`po-lookup`,0)},dependencies:[Ny],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup Basic`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-lookup-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,$e,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,_e],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=f(ob);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,p=r(r(r({},t(m,[`filterParams`,`advancedFilters`])),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var je=(()=>{class a{sampleFilterService=f(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=vn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[Ce([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Ax();Tl(0,`po-lookup`,1),ww(`ngModelChange`,function(m){return Ky(s),uN(o.lookup,m)||(o.lookup=m),Xy(m)}),ht$1(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`po-container`,2)(3,`div`,3),Gl(4,`po-info`,4)(5,`po-info`,5),ag()(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`po-input`,6),ww(`ngModelChange`,function(m){return Ky(s),uN(o.label,m)||(o.label=m),Xy(m)}),ag(),a0(),Tl(10,`po-checkbox-group`,7),ww(`ngModelChange`,function(m){return Ky(s),uN(o.columnsName,m)||(o.columnsName=m),Xy(m)}),ht$1(`p-change`,function(){return o.updateColumns()}),ag(),a0(),Tl(11,`po-select`,8),ww(`ngModelChange`,function(m){return Ky(s),uN(o.fieldLabel,m)||(o.fieldLabel=m),Xy(m)}),ag(),a0(),Tl(12,`po-select`,9),ww(`ngModelChange`,function(m){return Ky(s),uN(o.fieldValue,m)||(o.fieldValue=m),Xy(m)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(m){return Ky(s),uN(o.filterService,m)||(o.filterService=m),Xy(m)}),ag(),a0(),Tl(14,`po-input`,11),ww(`ngModelChange`,function(m){return Ky(s),uN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Xy(m)}),ag(),a0(),Tl(15,`po-input`,12),ww(`ngModelChange`,function(m){return Ky(s),uN(o.help,m)||(o.help=m),Xy(m)}),ag(),a0(),Tl(16,`po-input`,13),ww(`ngModelChange`,function(m){return Ky(s),uN(o.helperText,m)||(o.helperText=m),Xy(m)}),ag(),a0(),Tl(17,`po-input`,14),ww(`ngModelChange`,function(m){return Ky(s),uN(o.placeholder,m)||(o.placeholder=m),Xy(m)}),ag(),a0(),Tl(18,`po-input`,15),ww(`ngModelChange`,function(m){return Ky(s),uN(o.literals,m)||(o.literals=m),Xy(m)}),ht$1(`p-change`,function(){return o.changeLiterals()}),ag(),a0(),Tl(19,`po-input`,16),ww(`ngModelChange`,function(m){return Ky(s),uN(o.formatField,m)||(o.formatField=m),Xy(m)}),ht$1(`p-change`,function(m){return o.onFieldFormatChange(m)}),ag(),a0(),Tl(20,`po-checkbox-group`,17),ww(`ngModelChange`,function(m){return Ky(s),uN(o.properties,m)||(o.properties=m),Xy(m)}),ag(),a0(),Tl(21,`po-radio-group`,18),ww(`ngModelChange`,function(m){return Ky(s),uN(o.spacing,m)||(o.spacing=m),Xy(m)}),ag(),a0(),Tl(22,`po-radio-group`,19),ww(`ngModelChange`,function(m){return Ky(s),uN(o.size,m)||(o.size=m),Xy(m)}),ag(),a0(),Tl(23,`po-textarea`,20),ww(`ngModelChange`,function(m){return Ky(s),uN(o.advancedFilters,m)||(o.advancedFilters=m),Xy(m)}),ht$1(`p-change`,function(){return o.changeAdvancedFilters()}),ag(),a0(),Tl(24,`div`,3)(25,`po-button`,21),ht$1(`p-click`,function(){return o.restore()}),ag()()()}l&2&&(Ew(`ngModel`,o.lookup),nw(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),l0(),jp(4),nw(`p-value`,o.lookup),jp(),nw(`p-value`,o.event),jp(4),Ew(`ngModel`,o.label),l0(),jp(),Ew(`ngModel`,o.columnsName),nw(`p-options`,o.columnsOptions),l0(),jp(),Ew(`ngModel`,o.fieldLabel),nw(`p-options`,o.fieldLabelOptions),l0(),jp(),Ew(`ngModel`,o.fieldValue),nw(`p-options`,o.fieldValueOptions),l0(),jp(),Ew(`ngModel`,o.filterService),l0(),jp(),Ew(`ngModel`,o.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,o.help),l0(),jp(),Ew(`ngModel`,o.helperText),l0(),jp(),Ew(`ngModel`,o.placeholder),l0(),jp(),Ew(`ngModel`,o.literals),l0(),jp(),Ew(`ngModel`,o.formatField),l0(),jp(),Ew(`ngModel`,o.properties),nw(`p-options`,o.propertiesOptions),l0(),jp(),Ew(`ngModel`,o.spacing),nw(`p-options`,o.typeSpacing),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0(),jp(),Ew(`ngModel`,o.advancedFilters),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,xp,Xy$1,N4,iU,Ny,L0e,fbe,vbe,ybe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup Labs`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-lookup
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-labs`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,tt,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,je],encapsulation:2,changeDetection:1})}return a})();var nt=()=>({modalTitle:`Heroes available for mission`});var Ie=(()=>{class a{service=f(O);notification=f(Eu);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[Ce([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let s=Ax();Tl(0,`div`,1),Gl(1,`po-info`,2),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),ww(`ngModelChange`,function(m){return Ky(s),uN(o.hero,m)||(o.hero=m),Xy(m)}),ag(),a0(),Tl(7,`po-select`,4),ww(`ngModelChange`,function(m){return Ky(s),uN(o.vehicle,m)||(o.vehicle=m),Xy(m)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-button`,5),ht$1(`p-click`,function(){return o.startMission()}),ag()()()}if(l&2){let s=Bx(4);jp(6),Ew(`ngModel`,o.hero),nw(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,_N(10,nt)),l0(),jp(),Ew(`ngModel`,o.vehicle),nw(`p-options`,o.vehicles),l0(),jp(2),nw(`p-disabled`,s.form.invalid||s.form.pending)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,Ny,fbe,ybe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup - Hero`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-hero`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,at,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ie],encapsulation:2,changeDetection:1})}return a})();var rt=()=>[`nickname`,`label`];var mt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=f(O);notification=f(Eu);formBuilder=f(EY);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,um.required],vehicle:[null,um.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[Ce([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Tl(0,`div`,0),Gl(1,`po-info`,1),ag(),Gl(2,`po-divider`),Tl(3,`form`,2)(4,`div`,0),Gl(5,`po-lookup`,3),a0(),Gl(6,`po-select`,4),a0(),ag(),Tl(7,`div`,0)(8,`po-button`,5),ht$1(`p-click`,function(){return o.startMission()}),ag()()()),l&2&&(jp(3),nw(`formGroup`,o.formMission),jp(2),nw(`p-columns`,o.columns)(`p-field-format`,_N(7,rt))(`p-filter-service`,o.service)(`p-literals`,_N(8,mt)),l0(),jp(),nw(`p-options`,o.vehicles),l0(),jp(2),nw(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[yY,gY,mY,jk,Lk,Zt,Xy$1,Ny,fbe,ybe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup - Hero Reactive Form`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-hero-reactive-form`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,pt,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ve],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(ob);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(q(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(q(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ct(a,yt){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-table`,3),ag()),a&2){let r=Fx();jp(),nw(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var Ne=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[Ce([se])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`po-radio-group`,1),ww(`ngModelChange`,function(p){return uN(o.filterParams,p)||(o.filterParams=p),p}),ag(),a0(),ag(),Gl(2,`po-divider`),Tl(3,`div`,0)(4,`po-lookup`,2),SN(5,`titlecase`),ww(`ngModelChange`,function(p){return uN(o.entity,p)||(o.entity=p),p}),ht$1(`p-selected`,function(p){return o.onSelected(p)}),ag(),a0(),ag(),_x(6,ct,2,4,`div`,0)),l&2&&(jp(),Ew(`ngModel`,o.filterParams),nw(`p-options`,o.entities),l0(),jp(3),nw(`p-help`,pN(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,pN(``,MN(5,12,o.entityLabel),` of Star Wars`)),Ew(`ngModel`,o.entity),nw(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),l0(),jp(2),Dx(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[gY,Ak,Xy$1,Ny,L0e,X4,$O],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup - Star Wars films`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-sw-films`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Et,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ne],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{http=f(ob);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(RT(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=(()=>{class a{service=f(Re);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`po-lookup`,1),ww(`ngModelChange`,function(p){return uN(o.multiLookup,p)||(o.multiLookup=p),p}),ht$1(`p-change`,function(p){return o.changeOptions(p)}),ag(),a0(),Tl(2,`po-container`,2),Gl(3,`po-table`,3),ag()()),l&2&&(jp(),Ew(`ngModel`,o.multiLookup),nw(`p-multiple`,!0),l0(),jp(2),nw(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[gY,Ak,xp,Ny,X4],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup - Multiple`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-multiple`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,bt,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,We],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``;return O$1({items:l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items],hasNext:!1}).pipe(ay(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(ay(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(ay(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac})}return a})();var Ge=(()=>{class a{service=f(ce);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[Ce([ce])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`po-lookup`,1),ww(`ngModelChange`,function(p){return uN(o.person,p)||(o.person=p),p}),ag(),a0(),ag()),l&2&&(jp(),Ew(`ngModel`,o.person),nw(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),l0())},dependencies:[gY,Ak,Ny],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Lookup - Mask`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-lookup-mask`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ht,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6520,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoLookupComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Tl(24,`code`),cN(25,`po-lookup`),ag(),cN(26,` permite que o usuário digite um valor e pressione a tecla `),Tl(27,`em`),cN(28,`TAB`),ag(),cN(29,` para
buscar um registro.`),ag(),Tl(30,`blockquote`)(31,`p`),cN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),ag()(),Tl(33,`blockquote`)(34,`p`),cN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Tl(36,`a`,6),cN(37,`modelo`),ag(),cN(38,` como `),Tl(39,`code`),cN(40,`pending`),ag(),cN(41,`.`),ag()(),Tl(42,`p`),cN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Tl(44,`code`),cN(45,`po-select`),ag(),cN(46,` ou o `),Tl(47,`code`),cN(48,`po-combo`),ag(),cN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(50,`a`,7),cN(51,`Guia de implementação das APIs TOTVS`),ag(),cN(52,`.`),ag(),Tl(53,`p`),cN(54,`Importante:`),ag(),Tl(55,`ul`)(56,`li`)(57,`p`),cN(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),ag(),Tl(59,`pre`)(60,`code`),cN(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),ag()()(),Tl(62,`li`)(63,`p`),cN(64,`Ao utilizar a propriedade `),Tl(65,`code`),cN(66,`p-advanced-filters`),ag(),cN(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Tl(68,`code`),cN(69,`po-dynamic-form`),ag(),cN(70,`. Em aplicações que não importam o `),Tl(71,`code`),cN(72,`PoModule`),ag(),cN(73,`, como projetos
`),Tl(74,`em`),cN(75,`standalone`),ag(),cN(76,` ou que utilizam módulos específicos, é necessário importar o `),Tl(77,`code`),cN(78,`PoDynamicModule`),ag(),cN(79,`
no componente ou m\xF3dulo onde o `),Tl(80,`code`),cN(81,`po-lookup`),ag(),cN(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Tl(83,`code`),cN(84,`NG0201: No provider found for _TitleCasePipe`),ag(),cN(85,` ao abrir a busca avançada.`),ag(),Tl(86,`pre`)(87,`code`),cN(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),ag()()()(),Tl(89,`h4`),cN(90,`Tokens customizáveis`),ag(),Tl(91,`p`),cN(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(93,`blockquote`)(94,`p`),cN(95,`Para maiores informações, acesse o guia `),Tl(96,`a`,8),cN(97,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(98,`.`),ag()(),Tl(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),cN(103,`Propriedade`),ag(),Tl(104,`th`),cN(105,`Descrição`),ag(),Tl(106,`th`),cN(107,`Valor Padrão`),ag()()(),Tl(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),cN(112,`Default Values`),ag()(),Gl(113,`td`)(114,`td`),ag(),Tl(115,`tr`)(116,`td`)(117,`code`),cN(118,`--font-family`),ag()(),Tl(119,`td`),cN(120,`Família tipográfica usada`),ag(),Tl(121,`td`)(122,`code`),cN(123,`var(--font-family-theme)`),ag()()(),Tl(124,`tr`)(125,`td`)(126,`code`),cN(127,`--font-size`),ag()(),Tl(128,`td`),cN(129,`Tamanho da fonte`),ag(),Tl(130,`td`)(131,`code`),cN(132,`var(--font-size-default)`),ag()()(),Tl(133,`tr`)(134,`td`)(135,`code`),cN(136,`--text-color-placeholder`),ag()(),Tl(137,`td`),cN(138,`Cor do texto no placeholder`),ag(),Tl(139,`td`)(140,`code`),cN(141,`var(--color-neutral-light-30)`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--color`),ag()(),Tl(146,`td`),cN(147,`Cor principal do lookup`),ag(),Tl(148,`td`)(149,`code`),cN(150,`var(--color-neutral-dark-70)`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`code`),cN(154,`--border-radius`),ag()(),Tl(155,`td`),cN(156,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(157,`td`)(158,`code`),cN(159,`var(--border-radius-md)`),ag()()(),Tl(160,`tr`)(161,`td`)(162,`code`),cN(163,`--background`),ag()(),Tl(164,`td`),cN(165,`Cor de background`),ag(),Tl(166,`td`)(167,`code`),cN(168,`var(--color-neutral-light-05)`),ag()()(),Tl(169,`tr`)(170,`td`)(171,`code`),cN(172,`--text-color`),ag()(),Tl(173,`td`),cN(174,`Cor do texto`),ag(),Tl(175,`td`)(176,`code`),cN(177,`var(--color-neutral-dark-90)`),ag()()(),Tl(178,`tr`)(179,`td`)(180,`code`),cN(181,`--color-clear`),ag()(),Tl(182,`td`),cN(183,`Cor principal do icone clear`),ag(),Tl(184,`td`)(185,`code`),cN(186,`var(--color-action-default)`),ag()()(),Tl(187,`tr`)(188,`td`)(189,`strong`),cN(190,`Icon`),ag()(),Gl(191,`td`)(192,`td`),ag(),Tl(193,`tr`)(194,`td`)(195,`code`),cN(196,`--color-icon`),ag()(),Tl(197,`td`),cN(198,`Cor principal do icone pesquisar`),ag(),Tl(199,`td`)(200,`code`),cN(201,`var(--color-action-default)`),ag()()(),Tl(202,`tr`)(203,`td`)(204,`strong`),cN(205,`Hover`),ag()(),Gl(206,`td`)(207,`td`),ag(),Tl(208,`tr`)(209,`td`)(210,`code`),cN(211,`--color-hover`),ag()(),Tl(212,`td`),cN(213,`Cor principal no estado hover`),ag(),Tl(214,`td`)(215,`code`),cN(216,`var(--color-brand-01-dark)`),ag()()(),Tl(217,`tr`)(218,`td`)(219,`code`),cN(220,`--background-hover`),ag()(),Tl(221,`td`),cN(222,`Cor de background no estado hover`),ag(),Tl(223,`td`)(224,`code`),cN(225,`var(--color-brand-01-lightest)`),ag()()(),Tl(226,`tr`)(227,`td`)(228,`strong`),cN(229,`Focused`),ag()(),Gl(230,`td`)(231,`td`),ag(),Tl(232,`tr`)(233,`td`)(234,`code`),cN(235,`--color-focused`),ag()(),Tl(236,`td`),cN(237,`Cor principal no estado de focus`),ag(),Tl(238,`td`)(239,`code`),cN(240,`var(--color-action-default)`),ag()()(),Tl(241,`tr`)(242,`td`)(243,`code`),cN(244,`--outline-color-focused`),ag()(),Tl(245,`td`),cN(246,`Cor do outline do estado de focus`),ag(),Tl(247,`td`)(248,`code`),cN(249,`var(--color-action-focus)`),ag()()(),Tl(250,`tr`)(251,`td`)(252,`strong`),cN(253,`Disabled`),ag()(),Gl(254,`td`)(255,`td`),ag(),Tl(256,`tr`)(257,`td`)(258,`code`),cN(259,`--color-disabled`),ag()(),Tl(260,`td`),cN(261,`Cor principal no estado disabled`),ag(),Tl(262,`td`)(263,`code`),cN(264,`var(--color-action-disabled)`),ag()()(),Tl(265,`tr`)(266,`td`)(267,`code`),cN(268,`--background-disabled`),ag()(),Tl(269,`td`),cN(270,`Cor de background no estado disabled`),ag(),Tl(271,`td`)(272,`code`),cN(273,`var(--color-neutral-light-20)`),ag()()(),Tl(274,`tr`)(275,`td`)(276,`code`),cN(277,`--text-color-disabled`),ag()(),Tl(278,`td`),cN(279,`Cor do texto quando campo está desabilitado`),ag(),Tl(280,`td`)(281,`code`),cN(282,`var(--color-action-disabled)`),ag()()(),Tl(283,`tr`)(284,`td`)(285,`strong`),cN(286,`Error`),ag()(),Gl(287,`td`)(288,`td`),ag(),Tl(289,`tr`)(290,`td`)(291,`code`),cN(292,`--color-error`),ag()(),Tl(293,`td`),cN(294,`Cor de background no estado de requerido`),ag(),Tl(295,`td`)(296,`code`),cN(297,`var(--color-feedback-negative-base)`),ag()()()()()(),Tl(298,`div`,9)(299,`h4`,10),cN(300,`Seletor`),ag(),Tl(301,`pre`,11),cN(302,`<po-lookup
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
`),ag()(),Tl(303,`h4`,12),cN(304,`Propriedades`),ag(),Tl(305,`table`,13)(306,`tr`,14)(307,`th`,15),cN(308,`Nome`),ag(),Tl(309,`th`,15),cN(310,`Tipo`),ag(),Tl(311,`th`,15),cN(312,`Padrão`),ag(),Tl(313,`th`,15),cN(314,`Descrição`),ag()(),Tl(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),cN(319,` (p-additional-help)`),Gl(320,`br`),ag()(),Tl(321,`div`,20),cN(322,`Deprecated`),ag()(),Tl(323,`td`,21)(324,`code`,22),cN(325,`EventEmitter`),ag()(),Tl(326,`td`,23),cN(327,`-`),ag(),Tl(328,`td`,24)(329,`em`)(330,`strong`),cN(331,`(opcional)`),ag()(),Tl(332,`p`),cN(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(334,`blockquote`)(335,`p`),cN(336,`Essa propriedade está `),Tl(337,`strong`),cN(338,`depreciada`),ag(),cN(339,` e será removida na versão `),Tl(340,`code`),cN(341,`23.x.x`),ag(),cN(342,`. Recomendamos utilizar a propriedade `),Tl(343,`code`),cN(344,`p-helper`),ag(),cN(345,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),cN(350,` p-additional-help-tooltip`),Gl(351,`br`),ag()(),Tl(352,`div`,20),cN(353,`Deprecated`),ag()(),Tl(354,`td`,21)(355,`code`,27),cN(356,`string`),ag()(),Tl(357,`td`,23),cN(358,`-`),ag(),Tl(359,`td`,24)(360,`em`)(361,`strong`),cN(362,`(opcional)`),ag()(),Tl(363,`p`),cN(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(365,`code`),cN(366,`po-helper`),ag(),cN(367,`.
`),Tl(368,`strong`),cN(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(370,`blockquote`)(371,`p`),cN(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(373,`blockquote`)(374,`p`),cN(375,`Essa propriedade está `),Tl(376,`strong`),cN(377,`depreciada`),ag(),cN(378,` e será removida na versão `),Tl(379,`code`),cN(380,`23.x.x`),ag(),cN(381,`. Recomendamos utilizar a propriedade `),Tl(382,`code`),cN(383,`p-helper`),ag(),cN(384,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),cN(389,` p-advanced-filters`),Gl(390,`br`),ag()()(),Tl(391,`td`,21)(392,`code`,28),cN(393,`Array<PoLookupAdvancedFilter>`),ag()(),Tl(394,`td`,23),cN(395,`-`),ag(),Tl(396,`td`,24)(397,`em`)(398,`strong`),cN(399,`(opcional)`),ag()(),Tl(400,`p`),cN(401,`Lista de objetos dos campos que serão criados na busca avançada.`),ag(),Tl(402,`blockquote`)(403,`p`),cN(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ag()(),Tl(405,`blockquote`)(406,`p`),cN(407,`A busca avançada é construída a partir do `),Tl(408,`code`),cN(409,`po-dynamic-form`),ag(),cN(410,`. Em aplicações que não importam o `),Tl(411,`code`),cN(412,`PoModule`),ag(),cN(413,`,
como projetos `),Tl(414,`em`),cN(415,`standalone`),ag(),cN(416,` ou que utilizam módulos específicos, é necessário importar o `),Tl(417,`code`),cN(418,`PoDynamicModule`),ag(),cN(419,`
no componente ou m\xF3dulo onde o `),Tl(420,`code`),cN(421,`po-lookup`),ag(),cN(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Tl(423,`code`),cN(424,`NG0201: No provider found for _TitleCasePipe`),ag(),cN(425,` ao abrir a busca avançada.`),ag()(),Tl(426,`p`),cN(427,`Exemplo de URL com busca avançada:`),ag(),Tl(428,`pre`)(429,`code`),cN(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),ag()(),Tl(431,`p`),cN(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),ag(),Tl(433,`pre`)(434,`code`),cN(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),ag()()()(),Tl(436,`tr`,16)(437,`td`,17)(438,`div`,25)(439,`span`,26),cN(440,` p-append-in-body`),Gl(441,`br`),ag()()(),Tl(442,`td`,21)(443,`code`,29),cN(444,`boolean`),ag()(),Tl(445,`td`,23)(446,`p`)(447,`code`),cN(448,`false`),ag()()(),Tl(449,`td`,24)(450,`em`)(451,`strong`),cN(452,`(opcional)`),ag()(),Tl(453,`p`),cN(454,`Define que o popover (`),Tl(455,`code`),cN(456,`p-helper`),ag(),cN(457,` e/ou `),Tl(458,`code`),cN(459,`p-error-limit`),ag(),cN(460,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(461,`blockquote`)(462,`p`),cN(463,`Quando utilizado com `),Tl(464,`code`),cN(465,`p-helper`),ag(),cN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(467,`tr`,16)(468,`td`,17)(469,`div`,25)(470,`span`,26),cN(471,` p-auto-focus`),Gl(472,`br`),ag()()(),Tl(473,`td`,21)(474,`code`,29),cN(475,`boolean`),ag()(),Tl(476,`td`,23)(477,`p`)(478,`code`),cN(479,`false`),ag()()(),Tl(480,`td`,24)(481,`em`)(482,`strong`),cN(483,`(opcional)`),ag()(),Tl(484,`p`),cN(485,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(486,`blockquote`)(487,`p`),cN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),cN(493,` p-auto-height`),Gl(494,`br`),ag()()(),Tl(495,`td`,21)(496,`code`,29),cN(497,`boolean`),ag()(),Tl(498,`td`,23)(499,`p`)(500,`code`),cN(501,`false`),ag()()(),Tl(502,`td`,24)(503,`em`)(504,`strong`),cN(505,`(opcional)`),ag()(),Tl(506,`p`),cN(507,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ag()()(),Tl(508,`tr`,16)(509,`td`,17)(510,`div`,18)(511,`span`,19),cN(512,` (p-change)`),Gl(513,`br`),ag()()(),Tl(514,`td`,21)(515,`code`,22),cN(516,`EventEmitter`),ag()(),Tl(517,`td`,23),cN(518,`-`),ag(),Tl(519,`td`,24)(520,`em`)(521,`strong`),cN(522,`(opcional)`),ag()(),Tl(523,`p`),cN(524,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),ag()()(),Tl(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),cN(529,` (p-change-model)`),Gl(530,`br`),ag()()(),Tl(531,`td`,21)(532,`code`,22),cN(533,`EventEmitter`),ag()(),Tl(534,`td`,23),cN(535,`-`),ag(),Tl(536,`td`,24)(537,`em`)(538,`strong`),cN(539,`(opcional)`),ag()(),Tl(540,`p`),cN(541,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(542,`code`),cN(543,`setValue`),ag(),cN(544,`, `),Tl(545,`code`),cN(546,`patchValue`),ag(),cN(547,`, carregamento assíncrono).`),ag(),Tl(548,`p`),cN(549,`Diferentemente do `),Tl(550,`code`),cN(551,`p-change`),ag(),cN(552,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(553,`code`),cN(554,`p-change-model`),ag(),cN(555,` cobre todos os cenários de alteração de valor.`),ag(),Tl(556,`p`),cN(557,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(558,`tr`,16)(559,`td`,17)(560,`div`,18)(561,`span`,19),cN(562,` (p-change-visible-columns)`),Gl(563,`br`),ag()()(),Tl(564,`td`,21)(565,`code`,22),cN(566,`EventEmitter`),ag()(),Tl(567,`td`,23),cN(568,`-`),ag(),Tl(569,`td`,24)(570,`em`)(571,`strong`),cN(572,`(opcional)`),ag()(),Tl(573,`p`),cN(574,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ag(),Tl(575,`p`),cN(576,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag()()(),Tl(577,`tr`,16)(578,`td`,17)(579,`div`,25)(580,`span`,26),cN(581,` p-clean`),Gl(582,`br`),ag()()(),Tl(583,`td`,21)(584,`code`,29),cN(585,`boolean`),ag()(),Tl(586,`td`,23),cN(587,`-`),ag(),Tl(588,`td`,24)(589,`p`),cN(590,`Exibe um ícone que permite limpar o campo.`),ag()()(),Tl(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),cN(595,` (p-restore-column-manager)`),Gl(596,`br`),ag()()(),Tl(597,`td`,21)(598,`code`,22),cN(599,`EventEmitter`),ag()(),Tl(600,`td`,23),cN(601,`-`),ag(),Tl(602,`td`,24)(603,`em`)(604,`strong`),cN(605,`(opcional)`),ag()(),Tl(606,`p`),cN(607,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ag(),Tl(608,`p`),cN(609,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag()()(),Tl(610,`tr`,16)(611,`td`,17)(612,`div`,25)(613,`span`,26),cN(614,` p-columns`),Gl(615,`br`),ag()()(),Tl(616,`td`,21)(617,`code`,30),cN(618,`Array<PoLookupColumn>`),ag()(),Tl(619,`td`,23),cN(620,`-`),ag(),Tl(621,`td`,24)(622,`em`)(623,`strong`),cN(624,`(opcional)`),ag()(),Tl(625,`p`),cN(626,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),ag()()(),Tl(627,`tr`,16)(628,`td`,17)(629,`div`,25)(630,`span`,26),cN(631,` p-compact-label`),Gl(632,`br`),ag()()(),Tl(633,`td`,21)(634,`code`,29),cN(635,`boolean`),ag()(),Tl(636,`td`,23)(637,`p`)(638,`code`),cN(639,`false`),ag()()(),Tl(640,`td`,24)(641,`em`)(642,`strong`),cN(643,`(opcional)`),ag()(),Tl(644,`p`),cN(645,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(646,`p`),cN(647,`Quando habilitado (`),Tl(648,`code`),cN(649,`true`),ag(),cN(650,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(651,`ul`)(652,`li`)(653,`code`),cN(654,`po-label`),ag()(),Tl(655,`li`)(656,`code`),cN(657,`p-requirement (showRequired)`),ag()(),Tl(658,`li`)(659,`code`),cN(660,`po-helper`),ag()()(),Tl(661,`p`),cN(662,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(663,`p`),cN(664,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(665,`ul`)(666,`li`)(667,`code`),cN(668,`--field-container-title-justify`),ag()(),Tl(669,`li`)(670,`code`),cN(671,`--field-container-title-flex`),ag()()(),Tl(672,`p`),cN(673,`Exemplo:`),ag(),Tl(674,`pre`)(675,`code`),cN(676,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(677,`p`),cN(678,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(679,`tr`,16)(680,`td`,17)(681,`div`,25)(682,`span`,26),cN(683,` p-disabled`),Gl(684,`br`),ag()()(),Tl(685,`td`,21)(686,`code`,29),cN(687,`boolean`),ag()(),Tl(688,`td`,23)(689,`p`),cN(690,`false`),ag()(),Tl(691,`td`,24)(692,`em`)(693,`strong`),cN(694,`(opcional)`),ag()(),Tl(695,`p`),cN(696,`Indica que o campo será desabilitado.`),ag()()(),Tl(697,`tr`,16)(698,`td`,17)(699,`div`,25)(700,`span`,26),cN(701,` p-error-limit`),Gl(702,`br`),ag()()(),Tl(703,`td`,21)(704,`code`,29),cN(705,`boolean`),ag()(),Tl(706,`td`,23)(707,`p`)(708,`code`),cN(709,`false`),ag()()(),Tl(710,`td`,24)(711,`em`)(712,`strong`),cN(713,`(opcional)`),ag()(),Tl(714,`p`),cN(715,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(716,`blockquote`)(717,`p`),cN(718,`Caso essa propriedade seja definida como `),Tl(719,`code`),cN(720,`true`),ag(),cN(721,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(722,`tr`,16)(723,`td`,17)(724,`div`,25)(725,`span`,26),cN(726,` p-field-error-message`),Gl(727,`br`),ag()()(),Tl(728,`td`,21)(729,`code`,27),cN(730,`string`),ag()(),Tl(731,`td`,23),cN(732,`-`),ag(),Tl(733,`td`,24)(734,`em`)(735,`strong`),cN(736,`(opcional)`),ag()(),Tl(737,`p`),cN(738,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(739,`blockquote`)(740,`p`),cN(741,`Necessário que a propriedade `),Tl(742,`code`),cN(743,`p-required`),ag(),cN(744,` esteja habilitada.`),ag()()()(),Tl(745,`tr`,16)(746,`td`,17)(747,`div`,25)(748,`span`,26),cN(749,` p-field-format`),Gl(750,`br`),ag()()(),Tl(751,`td`,21)(752,`code`,31),cN(753,`((value) => string) `),ag(),Tl(754,`code`,32),cN(755,` Array<string>`),ag()(),Tl(756,`td`,23),cN(757,`-`),ag(),Tl(758,`td`,24)(759,`em`)(760,`strong`),cN(761,`(opcional)`),ag()(),Tl(762,`p`),cN(763,`Formato de exibição do campo.`),ag(),Tl(764,`p`),cN(765,`Recebe uma função que deve retornar uma `),Tl(766,`em`),cN(767,`string`),ag(),cN(768,` com o/os valores do objeto formatados para exibição, por exemplo:`),ag(),Tl(769,`pre`)(770,`code`),cN(771,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),ag()(),Tl(772,`blockquote`)(773,`p`),cN(774,`Esta propriedade sobrepõe o valor da propriedade `),Tl(775,`code`),cN(776,`p-field-label`),ag(),cN(777,` na descrição do campo.`),ag()(),Tl(778,`p`),cN(779,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),ag(),Tl(780,`pre`)(781,`code`),cN(782,`<po-lookup
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
`),ag()(),Tl(783,`blockquote`)(784,`p`),cN(785,`Será utilizado `),Tl(786,`code`),cN(787,`-`),ag(),cN(788,` como separador.`),ag()()()(),Tl(789,`tr`,16)(790,`td`,17)(791,`div`,25)(792,`span`,26),cN(793,` p-field-label`),Gl(794,`br`),ag()()(),Tl(795,`td`,21)(796,`code`,27),cN(797,`string`),ag()(),Tl(798,`td`,23),cN(799,`-`),ag(),Tl(800,`td`,24)(801,`p`),cN(802,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),ag()()(),Tl(803,`tr`,16)(804,`td`,17)(805,`div`,25)(806,`span`,26),cN(807,` p-field-value`),Gl(808,`br`),ag()()(),Tl(809,`td`,21)(810,`code`,27),cN(811,`string`),ag()(),Tl(812,`td`,23),cN(813,`-`),ag(),Tl(814,`td`,24)(815,`p`),cN(816,`Indica a coluna que será utilizada como valor do campo.`),ag(),Tl(817,`blockquote`)(818,`p`),cN(819,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),ag()()()(),Tl(820,`tr`,16)(821,`td`,17)(822,`div`,25)(823,`span`,26),cN(824,` p-filter-params`),Gl(825,`br`),ag()()(),Tl(826,`td`,21)(827,`code`,33),cN(828,`any`),ag()(),Tl(829,`td`,23),cN(830,`-`),ag(),Tl(831,`td`,24)(832,`em`)(833,`strong`),cN(834,`(opcional)`),ag()(),Tl(835,`p`),cN(836,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Tl(837,`code`),cN(838,`PoLookupFilter`),ag(),cN(839,`.`),ag()()(),Tl(840,`tr`,16)(841,`td`,17)(842,`div`,25)(843,`span`,26),cN(844,` p-filter-service`),Gl(845,`br`),ag()()(),Tl(846,`td`,21)(847,`code`,27),cN(848,`string `),ag(),Tl(849,`code`,34),cN(850,` PoLookupFilter`),ag()(),Tl(851,`td`,23),cN(852,`-`),ag(),Tl(853,`td`,24)(854,`p`),cN(855,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Tl(856,`code`),cN(857,`PoLookupFilter`),ag(),cN(858,` ou uma URL.`),ag(),Tl(859,`p`),cN(860,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),ag(),Tl(861,`pre`)(862,`code`),cN(863,`url + ?page=1&pageSize=20&filter=Peter
`),ag()(),Tl(864,`p`),cN(865,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Tl(866,`code`),cN(867,`order`),ag(),cN(868,`, por exemplo:`),ag(),Tl(869,`ul`)(870,`li`)(871,`p`),cN(872,`Coluna decrescente:`),ag(),Tl(873,`pre`)(874,`code`),cN(875,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),ag()()(),Tl(876,`li`)(877,`p`),cN(878,`Coluna ascendente:`),ag(),Tl(879,`pre`)(880,`code`),cN(881,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),ag()()()(),Tl(882,`p`),cN(883,`Se for definido a propriedade `),Tl(884,`code`),cN(885,`p-filter-params`),ag(),cN(886,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Tl(887,`code`),cN(888,`{ age: 23 }`),ag(),cN(889,` a URL ficaria:`),ag(),Tl(890,`pre`)(891,`code`),cN(892,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ag()(),Tl(893,`p`),cN(894,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),ag(),Tl(895,`pre`)(896,`code`),cN(897,`model = 1234;

GET url/1234
`),ag()(),Tl(898,`p`),cN(899,`Caso estiver com múltipla seleção habilitada:`),ag(),Tl(900,`pre`)(901,`code`),cN(902,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),ag()(),Tl(903,`blockquote`)(904,`p`),cN(905,`Esta URL deve retornar e receber os dados no padrão de `),Tl(906,`a`,7),cN(907,`API do PO UI`),ag(),cN(908,` e utiliza os valores
definidos nas propriedades `),Tl(909,`code`),cN(910,`p-field-label`),ag(),cN(911,` e `),Tl(912,`code`),cN(913,`p-field-value`),ag(),cN(914,` para a construção do `),Tl(915,`code`),cN(916,`po-lookup`),ag(),cN(917,`.`),ag()(),Tl(918,`p`),cN(919,`Caso o usuário digite um valor e pressione a tecla `),Tl(920,`em`),cN(921,`TAB`),ag(),cN(922,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Tl(923,`a`,35),cN(924,`encodeURIComponent`),ag(),cN(925,`
e concatenado na URL da seguinte forma:`),ag(),Tl(926,`pre`)(927,`code`),cN(928,`url/valor%20que%20se%20deseja%20filtrar
`),ag()(),Tl(929,`blockquote`)(930,`p`),cN(931,`Quando informado um serviço que implemente a interface `),Tl(932,`code`),cN(933,`PoLookupFilter`),ag(),cN(934,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),ag()()()(),Tl(935,`tr`,16)(936,`td`,17)(937,`div`,25)(938,`span`,26),cN(939,` p-help`),Gl(940,`br`),ag()()(),Tl(941,`td`,21)(942,`code`,27),cN(943,`string`),ag()(),Tl(944,`td`,23),cN(945,`-`),ag(),Tl(946,`td`,24)(947,`em`)(948,`strong`),cN(949,`(opcional)`),ag()(),Tl(950,`p`),cN(951,`Texto de apoio do campo.`),ag()()(),Tl(952,`tr`,16)(953,`td`,17)(954,`div`,25)(955,`span`,26),cN(956,` p-hide-columns-manager`),Gl(957,`br`),ag()()(),Tl(958,`td`,21)(959,`code`,29),cN(960,`boolean`),ag()(),Tl(961,`td`,23)(962,`p`)(963,`code`),cN(964,`false`),ag()()(),Tl(965,`td`,24)(966,`em`)(967,`strong`),cN(968,`(opcional)`),ag()(),Tl(969,`p`),cN(970,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),ag()()(),Tl(971,`tr`,16)(972,`td`,17)(973,`div`,25)(974,`span`,26),cN(975,` p-infinite-scroll`),Gl(976,`br`),ag()()(),Tl(977,`td`,21)(978,`code`,29),cN(979,`boolean`),ag()(),Tl(980,`td`,23)(981,`p`)(982,`code`),cN(983,`false`),ag()()(),Tl(984,`td`,24)(985,`em`)(986,`strong`),cN(987,`(opcional)`),ag()(),Tl(988,`p`),cN(989,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),ag()()(),Tl(990,`tr`,16)(991,`td`,17)(992,`div`,18)(993,`span`,19),cN(994,` (p-keydown)`),Gl(995,`br`),ag()()(),Tl(996,`td`,21)(997,`code`,22),cN(998,`EventEmitter`),ag()(),Tl(999,`td`,23),cN(1e3,`-`),ag(),Tl(1001,`td`,24)(1002,`em`)(1003,`strong`),cN(1004,`(opcional)`),ag()(),Tl(1005,`p`),cN(1006,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1007,`code`),cN(1008,`KeyboardEvent`),ag(),cN(1009,` com informações sobre a tecla.`),ag()()(),Tl(1010,`tr`,16)(1011,`td`,17)(1012,`div`,25)(1013,`span`,26),cN(1014,` p-label`),Gl(1015,`br`),ag()()(),Tl(1016,`td`,21)(1017,`code`,27),cN(1018,`string`),ag()(),Tl(1019,`td`,23),cN(1020,`-`),ag(),Tl(1021,`td`,24)(1022,`em`)(1023,`strong`),cN(1024,`(opcional)`),ag()(),Tl(1025,`p`),cN(1026,`Label do campo.`),ag(),Tl(1027,`blockquote`)(1028,`p`),cN(1029,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Tl(1030,`code`),cN(1031,`modalTitle`),ag(),cN(1032,` na propriedade `),Tl(1033,`code`),cN(1034,`p-literals`),ag(),cN(1035,`.`),ag()()()(),Tl(1036,`tr`,16)(1037,`td`,17)(1038,`div`,25)(1039,`span`,26),cN(1040,` p-label-text-wrap`),Gl(1041,`br`),ag()()(),Tl(1042,`td`,21)(1043,`code`,29),cN(1044,`boolean`),ag()(),Tl(1045,`td`,23)(1046,`p`)(1047,`code`),cN(1048,`false`),ag()()(),Tl(1049,`td`,24)(1050,`em`)(1051,`strong`),cN(1052,`(opcional)`),ag()(),Tl(1053,`p`),cN(1054,`Habilita a quebra automática do texto da propriedade `),Tl(1055,`code`),cN(1056,`p-label`),ag(),cN(1057,`. Quando `),Tl(1058,`code`),cN(1059,`p-label-text-wrap`),ag(),cN(1060,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(1061,`tr`,16)(1062,`td`,17)(1063,`div`,25)(1064,`span`,26),cN(1065,` p-literals`),Gl(1066,`br`),ag()()(),Tl(1067,`td`,21)(1068,`code`,36),cN(1069,`PoLookupLiterals`),ag()(),Tl(1070,`td`,23),cN(1071,`-`),ag(),Tl(1072,`td`,24)(1073,`p`),cN(1074,`Objeto com as literais usadas no `),Tl(1075,`code`),cN(1076,`po-lookup`),ag(),cN(1077,`.`),ag(),Tl(1078,`p`),cN(1079,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(1080,`pre`)(1081,`code`),cN(1082,`const customLiterals: PoLookupLiterals = {
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
`),ag()(),Tl(1083,`p`),cN(1084,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(1085,`pre`)(1086,`code`),cN(1087,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),ag()(),Tl(1088,`p`),cN(1089,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(1090,`pre`)(1091,`code`),cN(1092,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),ag()(),Tl(1093,`blockquote`)(1094,`p`),cN(1095,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(1096,`a`,37)(1097,`code`),cN(1098,`PoI18nService`),ag()(),cN(1099,` ou do browser.`),ag()()()(),Tl(1100,`tr`,16)(1101,`td`,17)(1102,`div`,25)(1103,`span`,26),cN(1104,` p-loading`),Gl(1105,`br`),ag()()(),Tl(1106,`td`,21)(1107,`code`,29),cN(1108,`boolean`),ag()(),Tl(1109,`td`,23)(1110,`p`)(1111,`code`),cN(1112,`false`),ag()()(),Tl(1113,`td`,24)(1114,`em`)(1115,`strong`),cN(1116,`(opcional)`),ag()(),Tl(1117,`p`),cN(1118,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(1119,`tr`,16)(1120,`td`,17)(1121,`div`,25)(1122,`span`,26),cN(1123,` p-multiple`),Gl(1124,`br`),ag()()(),Tl(1125,`td`,21)(1126,`code`,29),cN(1127,`boolean`),ag()(),Tl(1128,`td`,23)(1129,`p`)(1130,`code`),cN(1131,`false`),ag()()(),Tl(1132,`td`,24)(1133,`em`)(1134,`strong`),cN(1135,`(opcional)`),ag()(),Tl(1136,`p`),cN(1137,`Permite a seleção de múltiplos itens.`),ag(),Tl(1138,`blockquote`)(1139,`p`),cN(1140,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Tl(1141,`code`),cN(1142,`[ 12345, 67890 ]`),ag()()()()(),Tl(1143,`tr`,16)(1144,`td`,17)(1145,`div`,25)(1146,`span`,26),cN(1147,` name`),Gl(1148,`br`),ag()()(),Tl(1149,`td`,21)(1150,`code`,27),cN(1151,`string`),ag()(),Tl(1152,`td`,23),cN(1153,`-`),ag(),Tl(1154,`td`,24)(1155,`p`),cN(1156,`Nome e Id do componente.`),ag()()(),Tl(1157,`tr`,16)(1158,`td`,17)(1159,`div`,25)(1160,`span`,26),cN(1161,` p-no-autocomplete`),Gl(1162,`br`),ag()()(),Tl(1163,`td`,21)(1164,`code`,29),cN(1165,`boolean`),ag()(),Tl(1166,`td`,23)(1167,`p`)(1168,`code`),cN(1169,`false`),ag()()(),Tl(1170,`td`,24)(1171,`em`)(1172,`strong`),cN(1173,`(opcional)`),ag()(),Tl(1174,`p`),cN(1175,`Define a propriedade nativa `),Tl(1176,`code`),cN(1177,`autocomplete`),ag(),cN(1178,` do campo como `),Tl(1179,`code`),cN(1180,`off`),ag(),cN(1181,`.`),ag()()(),Tl(1182,`tr`,16)(1183,`td`,17)(1184,`div`,18)(1185,`span`,19),cN(1186,` (p-error)`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,21)(1189,`code`,22),cN(1190,`EventEmitter`),ag()(),Tl(1191,`td`,23),cN(1192,`-`),ag(),Tl(1193,`td`,24)(1194,`p`),cN(1195,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),ag()()(),Tl(1196,`tr`,16)(1197,`td`,17)(1198,`div`,25)(1199,`span`,26),cN(1200,` p-optional`),Gl(1201,`br`),ag()()(),Tl(1202,`td`,21)(1203,`code`,29),cN(1204,`boolean`),ag()(),Tl(1205,`td`,23)(1206,`p`)(1207,`code`),cN(1208,`false`),ag()()(),Tl(1209,`td`,24)(1210,`em`)(1211,`strong`),cN(1212,`(opcional)`),ag()(),Tl(1213,`p`),cN(1214,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1215,`blockquote`)(1216,`p`),cN(1217,`Não será exibida a indicação se:`),ag()(),Tl(1218,`ul`)(1219,`li`),cN(1220,`O campo conter `),Tl(1221,`code`),cN(1222,`p-required`),ag(),cN(1223,`;`),ag(),Tl(1224,`li`),cN(1225,`Não possuir `),Tl(1226,`code`),cN(1227,`p-help`),ag(),cN(1228,` e/ou `),Tl(1229,`code`),cN(1230,`p-label`),ag(),cN(1231,`.`),ag()()()(),Tl(1232,`tr`,16)(1233,`td`,17)(1234,`div`,25)(1235,`span`,26),cN(1236,` p-placeholder`),Gl(1237,`br`),ag()()(),Tl(1238,`td`,21)(1239,`code`,27),cN(1240,`string`),ag()(),Tl(1241,`td`,23),cN(1242,`-`),ag(),Tl(1243,`td`,24)(1244,`p`),cN(1245,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1246,`tr`,16)(1247,`td`,17)(1248,`div`,25)(1249,`span`,26),cN(1250,` p-helper`),Gl(1251,`br`),ag()()(),Tl(1252,`td`,21)(1253,`code`,38),cN(1254,`PoHelperOptions `),ag(),Tl(1255,`code`,27),cN(1256,` string`),ag()(),Tl(1257,`td`,23),cN(1258,`-`),ag(),Tl(1259,`td`,24)(1260,`em`)(1261,`strong`),cN(1262,`(opcional)`),ag()(),Tl(1263,`p`),cN(1264,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1265,`code`),cN(1266,`p-label`),ag(),cN(1267,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1268,`code`),cN(1269,`p-label`),ag(),cN(1270,`.`),ag(),Tl(1271,`blockquote`)(1272,`p`),cN(1273,`Para mais informações acesse: `),Tl(1274,`a`,39),cN(1275,`https://po-ui.io/documentation/po-helper`),ag(),cN(1276,`.`),ag()(),Tl(1277,`blockquote`)(1278,`p`),cN(1279,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1280,`code`),cN(1281,`p-additional-help-tooltip`),ag(),cN(1282,` e `),Tl(1283,`code`),cN(1284,`p-additional-help`),ag(),cN(1285,`) será ignorado.`),ag()()()(),Tl(1286,`tr`,16)(1287,`td`,17)(1288,`div`,25)(1289,`span`,26),cN(1290,` p-required`),Gl(1291,`br`),ag()()(),Tl(1292,`td`,21)(1293,`code`,29),cN(1294,`boolean`),ag()(),Tl(1295,`td`,23)(1296,`p`)(1297,`code`),cN(1298,`false`),ag()()(),Tl(1299,`td`,24)(1300,`em`)(1301,`strong`),cN(1302,`(opcional)`),ag()(),Tl(1303,`p`),cN(1304,`Define que o campo será obrigatório.`),ag(),Tl(1305,`blockquote`)(1306,`p`),cN(1307,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1308,`code`),cN(1309,`(p-disabled)`),ag(),cN(1310,`.`),ag()()()(),Tl(1311,`tr`,16)(1312,`td`,17)(1313,`div`,18)(1314,`span`,19),cN(1315,` (p-selected)`),Gl(1316,`br`),ag()()(),Tl(1317,`td`,21)(1318,`code`,22),cN(1319,`EventEmitter`),ag()(),Tl(1320,`td`,23),cN(1321,`-`),ag(),Tl(1322,`td`,24)(1323,`em`)(1324,`strong`),cN(1325,`(opcional)`),ag()(),Tl(1326,`p`),cN(1327,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),ag()()(),Tl(1328,`tr`,16)(1329,`td`,17)(1330,`div`,25)(1331,`span`,26),cN(1332,` p-show-required`),Gl(1333,`br`),ag()()(),Tl(1334,`td`,21)(1335,`code`,29),cN(1336,`boolean`),ag()(),Tl(1337,`td`,23),cN(1338,`-`),ag(),Tl(1339,`td`,24)(1340,`p`),cN(1341,`Define se a indicação de campo obrigatório seré exibida.`),ag(),Tl(1342,`blockquote`)(1343,`p`),cN(1344,`Não será exibida a indicação se:`),ag()(),Tl(1345,`ul`)(1346,`li`),cN(1347,`Não possuir `),Tl(1348,`code`),cN(1349,`p-help`),ag(),cN(1350,` e/ou `),Tl(1351,`code`),cN(1352,`p-label`),ag(),cN(1353,`.`),ag()()()(),Tl(1354,`tr`,16)(1355,`td`,17)(1356,`div`,25)(1357,`span`,26),cN(1358,` p-size`),Gl(1359,`br`),ag()()(),Tl(1360,`td`,21)(1361,`code`,27),cN(1362,`string`),ag()(),Tl(1363,`td`,23)(1364,`p`)(1365,`code`),cN(1366,`medium`),ag()()(),Tl(1367,`td`,24)(1368,`em`)(1369,`strong`),cN(1370,`(opcional)`),ag()(),Tl(1371,`p`),cN(1372,`Define o tamanho do componente:`),ag(),Tl(1373,`ul`)(1374,`li`)(1375,`code`),cN(1376,`small`),ag(),cN(1377,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1378,`li`)(1379,`code`),cN(1380,`medium`),ag(),cN(1381,`: altura do input como 44px.`),ag()(),Tl(1382,`blockquote`)(1383,`p`),cN(1384,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1385,`code`),cN(1386,`medium`),ag(),cN(1387,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1388,`a`,40),cN(1389,`po-theme`),ag(),cN(1390,`.`),ag()()()(),Tl(1391,`tr`,16)(1392,`td`,17)(1393,`div`,25)(1394,`span`,26),cN(1395,` p-spacing`),Gl(1396,`br`),ag()()(),Tl(1397,`td`,21)(1398,`code`,27),cN(1399,`string`),ag()(),Tl(1400,`td`,23)(1401,`p`)(1402,`code`),cN(1403,`medium`),ag()()(),Tl(1404,`td`,24)(1405,`em`)(1406,`strong`),cN(1407,`(opcional)`),ag()(),Tl(1408,`p`),cN(1409,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Tl(1410,`strong`),cN(1411,`PoTableColumnSpacing`),ag(),cN(1412,`.`),ag(),Tl(1413,`blockquote`)(1414,`p`),cN(1415,`Em nível de acessibilidade `),Tl(1416,`strong`),cN(1417,`AA`),ag(),cN(1418,`, caso o valor de `),Tl(1419,`code`),cN(1420,`p-spacing`),ag(),cN(1421,` não seja definido, o valor padrão será `),Tl(1422,`code`),cN(1423,`extraSmall`),ag(),cN(1424,`
nos seguintes cen\xE1rios:`),ag(),Tl(1425,`ul`)(1426,`li`),cN(1427,`Quando o valor de `),Tl(1428,`code`),cN(1429,`p-size`),ag(),cN(1430,` for `),Tl(1431,`code`),cN(1432,`small`),ag(),cN(1433,`;`),ag(),Tl(1434,`li`),cN(1435,`Quando o valor padrão dos componentes for configurado como `),Tl(1436,`code`),cN(1437,`small`),ag(),cN(1438,` no
`),Tl(1439,`a`,40),cN(1440,`serviço de tema`),ag(),cN(1441,`.`),ag()()()()(),Tl(1442,`tr`,16)(1443,`td`,17)(1444,`div`,25)(1445,`span`,26),cN(1446,` p-text-wrap`),Gl(1447,`br`),ag()()(),Tl(1448,`td`,21)(1449,`code`,29),cN(1450,`boolean`),ag()(),Tl(1451,`td`,23)(1452,`p`)(1453,`code`),cN(1454,`false`),ag()()(),Tl(1455,`td`,24)(1456,`em`)(1457,`strong`),cN(1458,`(opcional)`),ag()(),Tl(1459,`p`),cN(1460,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag(),Tl(1461,`p`),cN(1462,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),ag(),Tl(1463,`blockquote`)(1464,`p`),cN(1465,`Incompatível com `),Tl(1466,`code`),cN(1467,`virtual-scroll`),ag(),cN(1468,`, que requer altura fixa nas linhas.`),ag()()()(),Tl(1469,`tr`,16)(1470,`td`,17)(1471,`div`,25)(1472,`span`,26),cN(1473,` p-virtual-scroll`),Gl(1474,`br`),ag()()(),Tl(1475,`td`,21)(1476,`code`,29),cN(1477,`boolean`),ag()(),Tl(1478,`td`,23)(1479,`p`)(1480,`code`),cN(1481,`true`),ag()()(),Tl(1482,`td`,24)(1483,`em`)(1484,`strong`),cN(1485,`(opcional)`),ag()(),Tl(1486,`p`),cN(1487,`Habilita o `),Tl(1488,`code`),cN(1489,`virtual-scroll`),ag(),cN(1490,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Tl(1491,`code`),cN(1492,`virtual-scroll`),ag(),cN(1493,` será ativado automaticamente.`),ag(),Tl(1494,`blockquote`)(1495,`p`),cN(1496,`Incompatível com `),Tl(1497,`code`),cN(1498,`p-text-wrap`),ag(),cN(1499,` e `),Tl(1500,`code`),cN(1501,`master-detail`),ag(),cN(1502,`, pois o `),Tl(1503,`code`),cN(1504,`virtual-scroll`),ag(),cN(1505,` exige altura fixa nas linhas.`),ag()()()()(),Tl(1506,`h3`,12),cN(1507,`Métodos`),ag(),Tl(1508,`table`,41)(1509,`tr`,16)(1510,`th`,42)(1511,`div`,25)(1512,`h4`)(1513,`span`,26),cN(1514,` focus `),ag()()()()(),Tl(1515,`tr`,24)(1516,`td`,24)(1517,`p`),cN(1518,`Função que atribui foco ao componente.`),ag(),Tl(1519,`p`),cN(1520,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1521,`pre`)(1522,`code`),cN(1523,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),ag()()()()(),Gl(1524,`br`),Tl(1525,`table`,41)(1526,`tr`,16)(1527,`th`,42)(1528,`div`,25)(1529,`h4`)(1530,`span`,26),cN(1531,` showAdditionalHelp `),ag()()()()(),Tl(1532,`tr`,24)(1533,`td`,24)(1534,`p`),cN(1535,`Método que exibe `),Tl(1536,`code`),cN(1537,`p-helper`),ag(),cN(1538,` ou executa a ação definida em `),Tl(1539,`code`),cN(1540,`p-helper{eventOnClick}`),ag(),cN(1541,` ou em `),Tl(1542,`code`),cN(1543,`p-additionalHelp`),ag(),cN(1544,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1545,`code`),cN(1546,`p-keydown`),ag(),cN(1547,`.`),ag(),Tl(1548,`blockquote`)(1549,`p`),cN(1550,`Exibe ou oculta o conteúdo do componente `),Tl(1551,`code`),cN(1552,`po-helper`),ag(),cN(1553,` quando o componente estiver com foco.`),ag()(),Tl(1554,`pre`)(1555,`code`),cN(1556,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),ag()(),Tl(1557,`pre`)(1558,`code`),cN(1559,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1560,`br`),Tl(1561,`h3`),cN(1562,`Interfaces`),ag(),Tl(1563,`h4`,43)(1564,`code`,5),cN(1565,`PoLookupAdvancedFilter`),ag()(),Tl(1566,`div`,2)(1567,`p`),cN(1568,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente. `),ag()(),Tl(1569,`h4`,12),cN(1570,`Propriedades`),ag(),Tl(1571,`table`,13)(1572,`tr`,14)(1573,`th`,15),cN(1574,`Nome`),ag(),Tl(1575,`th`,15),cN(1576,`Tipo`),ag(),Tl(1577,`th`,15),cN(1578,`Descrição`),ag()(),Tl(1579,`tr`,16)(1580,`td`,17)(1581,`div`,25)(1582,`span`,26),cN(1583,` additionalHelp`),Gl(1584,`br`),ag()()(),Tl(1585,`td`,21)(1586,`code`,44),cN(1587,`Function`),ag()(),Tl(1588,`td`,24)(1589,`em`)(1590,`strong`),cN(1591,`(opcional)`),ag()(),Tl(1592,`p`),cN(1593,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(1594,`blockquote`)(1595,`p`),cN(1596,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(1597,`tr`,16)(1598,`td`,17)(1599,`div`,25)(1600,`span`,26),cN(1601,` additionalHelpTooltip`),Gl(1602,`br`),ag()()(),Tl(1603,`td`,21)(1604,`code`,27),cN(1605,`string`),ag()(),Tl(1606,`td`,24)(1607,`em`)(1608,`strong`),cN(1609,`(opcional)`),ag()(),Tl(1610,`p`),cN(1611,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(1612,`code`),cN(1613,`po-helper`),ag(),cN(1614,`.
`),Tl(1615,`strong`),cN(1616,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(1617,`blockquote`)(1618,`p`),cN(1619,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(1620,`tr`,16)(1621,`td`,17)(1622,`div`,25)(1623,`span`,26),cN(1624,` advancedFilters`),Gl(1625,`br`),ag()()(),Tl(1626,`td`,21)(1627,`code`,28),cN(1628,`Array<PoLookupAdvancedFilter>`),ag()(),Tl(1629,`td`,24)(1630,`em`)(1631,`strong`),cN(1632,`(opcional)`),ag()(),Tl(1633,`p`),cN(1634,`Lista de objetos dos campos que serão criados na busca avançada.`),ag(),Tl(1635,`blockquote`)(1636,`p`),cN(1637,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ag()(),Tl(1638,`p`),cN(1639,`Exemplo de URL com busca avançada:`),ag(),Tl(1640,`p`)(1641,`code`),cN(1642,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),ag()(),Tl(1643,`p`),cN(1644,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),ag(),Tl(1645,`p`)(1646,`code`),cN(1647,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),ag()()()(),Tl(1648,`tr`,16)(1649,`td`,17)(1650,`div`,25)(1651,`span`,26),cN(1652,` appendBox`),Gl(1653,`br`),ag()()(),Tl(1654,`td`,21)(1655,`code`,29),cN(1656,`boolean`),ag()(),Tl(1657,`td`,24)(1658,`em`)(1659,`strong`),cN(1660,`(opcional)`),ag()(),Tl(1661,`p`),cN(1662,`Define que o `),Tl(1663,`code`),cN(1664,`listbox`),ag(),cN(1665,` e/ou popover (`),Tl(1666,`code`),cN(1667,`p-helper`),ag(),cN(1668,` e/ou `),Tl(1669,`code`),cN(1670,`p-error-limit`),ag(),cN(1671,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ag(),Tl(1672,`blockquote`)(1673,`p`),cN(1674,`Quando utilizado com `),Tl(1675,`code`),cN(1676,`p-helper`),ag(),cN(1677,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(1678,`tr`,16)(1679,`td`,17)(1680,`div`,25)(1681,`span`,26),cN(1682,` autoHeight`),Gl(1683,`br`),ag()()(),Tl(1684,`td`,21)(1685,`code`,29),cN(1686,`boolean`),ag()(),Tl(1687,`td`,24)(1688,`em`)(1689,`strong`),cN(1690,`(opcional)`),ag()(),Tl(1691,`p`),cN(1692,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),ag(),Tl(1693,`p`)(1694,`strong`),cN(1695,`Componentes compatíveis:`),ag(),Tl(1696,`code`),cN(1697,`po-multiselect`),ag(),cN(1698,`, `),Tl(1699,`code`),cN(1700,`po-lookup`),ag(),cN(1701,`.`),ag()()(),Tl(1702,`tr`,16)(1703,`td`,17)(1704,`div`,25)(1705,`span`,26),cN(1706,` autoUpload`),Gl(1707,`br`),ag()()(),Tl(1708,`td`,21)(1709,`code`,29),cN(1710,`boolean`),ag()(),Tl(1711,`td`,24)(1712,`em`)(1713,`strong`),cN(1714,`(opcional)`),ag()(),Tl(1715,`p`),cN(1716,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ag(),Tl(1717,`p`)(1718,`strong`),cN(1719,`Componente compatível`),ag(),cN(1720,`: `),Tl(1721,`code`),cN(1722,`po-upload`),ag()()()(),Tl(1723,`tr`,16)(1724,`td`,17)(1725,`div`,25)(1726,`span`,26),cN(1727,` booleanFalse`),Gl(1728,`br`),ag()()(),Tl(1729,`td`,21)(1730,`code`,27),cN(1731,`string`),ag()(),Tl(1732,`td`,24)(1733,`em`)(1734,`strong`),cN(1735,`(opcional)`),ag()(),Tl(1736,`p`),cN(1737,`Texto exibido quando o valor do componente for `),Tl(1738,`em`),cN(1739,`false`),ag(),cN(1740,`.`),ag()()(),Tl(1741,`tr`,16)(1742,`td`,17)(1743,`div`,25)(1744,`span`,26),cN(1745,` booleanTrue`),Gl(1746,`br`),ag()()(),Tl(1747,`td`,21)(1748,`code`,27),cN(1749,`string`),ag()(),Tl(1750,`td`,24)(1751,`em`)(1752,`strong`),cN(1753,`(opcional)`),ag()(),Tl(1754,`p`),cN(1755,`Texto exibido quando o valor do componente for `),Tl(1756,`em`),cN(1757,`true`),ag(),cN(1758,`.`),ag()()(),Tl(1759,`tr`,16)(1760,`td`,17)(1761,`div`,25)(1762,`span`,26),cN(1763,` changeOnEnter`),Gl(1764,`br`),ag()()(),Tl(1765,`td`,21)(1766,`code`,29),cN(1767,`boolean`),ag()(),Tl(1768,`td`,24)(1769,`em`)(1770,`strong`),cN(1771,`(opcional)`),ag()(),Tl(1772,`p`),cN(1773,`Indica que o evento `),Tl(1774,`code`),cN(1775,`p-change`),ag(),cN(1776,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Tl(1777,`code`),cN(1778,`po-combo`),ag(),cN(1779,`.`),ag()()(),Tl(1780,`tr`,16)(1781,`td`,17)(1782,`div`,25)(1783,`span`,26),cN(1784,` changeVisibleColumns`),Gl(1785,`br`),ag()()(),Tl(1786,`td`,21)(1787,`code`,44),cN(1788,`Function`),ag()(),Tl(1789,`td`,24)(1790,`em`)(1791,`strong`),cN(1792,`(opcional)`),ag()(),Tl(1793,`p`),cN(1794,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ag(),Tl(1795,`p`),cN(1796,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag(),Tl(1797,`p`)(1798,`strong`),cN(1799,`Componente compatível`),ag(),cN(1800,`: `),Tl(1801,`code`),cN(1802,`po-lookup`),ag()()()(),Tl(1803,`tr`,16)(1804,`td`,17)(1805,`div`,25)(1806,`span`,26),cN(1807,` clean`),Gl(1808,`br`),ag()()(),Tl(1809,`td`,21)(1810,`code`,29),cN(1811,`boolean`),ag()(),Tl(1812,`td`,24)(1813,`em`)(1814,`strong`),cN(1815,`(opcional)`),ag()(),Tl(1816,`p`),cN(1817,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag(),Tl(1818,`p`)(1819,`strong`),cN(1820,`Componentes compatíveis:`),ag(),Tl(1821,`code`),cN(1822,`po-datepicker`),ag(),cN(1823,`, `),Tl(1824,`code`),cN(1825,`po-datepicker-range`),ag(),cN(1826,`, `),Tl(1827,`code`),cN(1828,`po-input`),ag(),cN(1829,`, `),Tl(1830,`code`),cN(1831,`po-number`),ag(),cN(1832,`, `),Tl(1833,`code`),cN(1834,`po-decimal`),ag(),cN(1835,`,
`),Tl(1836,`code`),cN(1837,`po-combo`),ag(),cN(1838,`, `),Tl(1839,`code`),cN(1840,`po-lookup`),ag(),cN(1841,`, `),Tl(1842,`code`),cN(1843,`po-password`),ag(),cN(1844,`, `),Tl(1845,`code`),cN(1846,`po-timepicker`),ag(),cN(1847,`.`),ag()()(),Tl(1848,`tr`,16)(1849,`td`,17)(1850,`div`,25)(1851,`span`,26),cN(1852,` columnRestoreManager`),Gl(1853,`br`),ag()()(),Tl(1854,`td`,21)(1855,`code`,44),cN(1856,`Function`),ag()(),Tl(1857,`td`,24)(1858,`em`)(1859,`strong`),cN(1860,`(opcional)`),ag()(),Tl(1861,`p`),cN(1862,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ag(),Tl(1863,`p`),cN(1864,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag(),Tl(1865,`p`)(1866,`strong`),cN(1867,`Componente compatível`),ag(),cN(1868,`: `),Tl(1869,`code`),cN(1870,`po-lookup`),ag()()()(),Tl(1871,`tr`,16)(1872,`td`,17)(1873,`div`,25)(1874,`span`,26),cN(1875,` columns`),Gl(1876,`br`),ag()()(),Tl(1877,`td`,21)(1878,`code`,30),cN(1879,`Array<PoLookupColumn> `),ag(),Tl(1880,`code`,45),cN(1881,` number`),ag()(),Tl(1882,`td`,24)(1883,`em`)(1884,`strong`),cN(1885,`(opcional)`),ag()(),Tl(1886,`p`),cN(1887,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Tl(1888,`code`),cN(1889,`searchService`),ag(),cN(1890,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(1891,`a`,46)(1892,`code`),cN(1893,`PoLookupColumn`),ag()(),cN(1894,`.`),ag(),Tl(1895,`blockquote`)(1896,`p`),cN(1897,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Tl(1898,`em`),cN(1899,`label`),ag(),cN(1900,` e `),Tl(1901,`em`),cN(1902,`value`),ag(),cN(1903,` para valores
de tela e do model respectivamente.`),ag()(),Tl(1904,`p`)(1905,`strong`),cN(1906,`Componentes compatíveis:`),ag(),Tl(1907,`code`),cN(1908,`po-radio-group`),ag(),cN(1909,`, `),Tl(1910,`code`),cN(1911,`po-lookup`),ag(),cN(1912,`, `),Tl(1913,`code`),cN(1914,`po-checkbox-group`),ag(),cN(1915,`.`),ag()()(),Tl(1916,`tr`,16)(1917,`td`,17)(1918,`div`,25)(1919,`span`,26),cN(1920,` compactLabel`),Gl(1921,`br`),ag()()(),Tl(1922,`td`,21)(1923,`code`,29),cN(1924,`boolean`),ag()(),Tl(1925,`td`,24)(1926,`em`)(1927,`strong`),cN(1928,`(opcional)`),ag()(),Tl(1929,`p`),cN(1930,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(1931,`p`),cN(1932,`Quando habilitado (`),Tl(1933,`code`),cN(1934,`true`),ag(),cN(1935,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(1936,`ul`)(1937,`li`)(1938,`code`),cN(1939,`po-label`),ag()(),Tl(1940,`li`)(1941,`code`),cN(1942,`p-requirement (showRequired)`),ag()(),Tl(1943,`li`)(1944,`code`),cN(1945,`po-helper`),ag()()(),Tl(1946,`p`),cN(1947,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(1948,`p`),cN(1949,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(1950,`ul`)(1951,`li`)(1952,`code`),cN(1953,`--field-container-title-justify`),ag()(),Tl(1954,`li`)(1955,`code`),cN(1956,`--field-container-title-flex`),ag()()(),Tl(1957,`p`),cN(1958,`Exemplo:`),ag(),Tl(1959,`pre`)(1960,`code`),cN(1961,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(1962,`p`),cN(1963,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(1964,`tr`,16)(1965,`td`,17)(1966,`div`,25)(1967,`span`,26),cN(1968,` container`),Gl(1969,`br`),ag()()(),Tl(1970,`td`,21)(1971,`code`,27),cN(1972,`string`),ag()(),Tl(1973,`td`,24)(1974,`em`)(1975,`strong`),cN(1976,`(opcional)`),ag()(),Tl(1977,`p`),cN(1978,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ag(),Tl(1979,`p`),cN(1980,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ag()()(),Tl(1981,`tr`,16)(1982,`td`,17)(1983,`div`,25)(1984,`span`,26),cN(1985,` customAction`),Gl(1986,`br`),ag()()(),Tl(1987,`td`,21)(1988,`code`,47),cN(1989,`PoProgressAction`),ag()(),Tl(1990,`td`,24)(1991,`em`)(1992,`strong`),cN(1993,`(opcional)`),ag()(),Tl(1994,`p`),cN(1995,`Define uma ação personalizada no componente `),Tl(1996,`code`),cN(1997,`po-upload`),ag(),cN(1998,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ag(),Tl(1999,`p`)(2e3,`strong`),cN(2001,`Componente compatível`),ag(),cN(2002,`: `),Tl(2003,`code`),cN(2004,`po-upload`),ag(),cN(2005,`,`),ag(),Tl(2006,`p`)(2007,`strong`),cN(2008,`Exemplo de configuração`),ag(),cN(2009,`:`),ag(),Tl(2010,`pre`)(2011,`code`,48),cN(2012,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ag()()()(),Tl(2013,`tr`,16)(2014,`td`,17)(2015,`div`,25)(2016,`span`,26),cN(2017,` customActionClick`),Gl(2018,`br`),ag()()(),Tl(2019,`td`,21)(2020,`code`,49),cN(2021,`(file: PoUploadFile) => void`),ag()(),Tl(2022,`td`,24)(2023,`em`)(2024,`strong`),cN(2025,`(opcional)`),ag()(),Tl(2026,`p`),cN(2027,`Evento emitido ao clicar na ação personalizada configurada no `),Tl(2028,`code`),cN(2029,`p-custom-action`),ag(),cN(2030,`.`),ag(),Tl(2031,`p`)(2032,`strong`),cN(2033,`Componente compatível`),ag(),cN(2034,`: `),Tl(2035,`code`),cN(2036,`po-upload`),ag(),cN(2037,`,`),ag(),Tl(2038,`p`),cN(2039,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ag(),Tl(2040,`p`)(2041,`strong`),cN(2042,`Parâmetro do evento`),ag(),cN(2043,`:`),ag(),Tl(2044,`ul`)(2045,`li`)(2046,`code`),cN(2047,`file`),ag(),cN(2048,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Tl(2049,`code`),cN(2050,`PoUploadFile`),ag(),cN(2051,` e contém informações sobre o arquivo, como nome, status e progresso.`),ag()(),Tl(2052,`p`)(2053,`strong`),cN(2054,`Exemplo de uso`),ag(),cN(2055,`:`),ag(),Tl(2056,`pre`)(2057,`code`,48),cN(2058,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ag()()()(),Tl(2059,`tr`,16)(2060,`td`,17)(2061,`div`,25)(2062,`span`,26),cN(2063,` debounceTime`),Gl(2064,`br`),ag()()(),Tl(2065,`td`,21)(2066,`code`,45),cN(2067,`number`),ag()(),Tl(2068,`td`,24)(2069,`em`)(2070,`strong`),cN(2071,`(opcional)`),ag()(),Tl(2072,`p`),cN(2073,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Tl(2074,`code`),cN(2075,`p-filter-service`),ag(),cN(2076,`).`),ag(),Tl(2077,`p`)(2078,`strong`),cN(2079,`Componentes compatíveis:`),ag(),Tl(2080,`code`),cN(2081,`po-combo`),ag(),cN(2082,`, `),Tl(2083,`code`),cN(2084,`po-multiselect`),ag(),cN(2085,`.`),ag()()(),Tl(2086,`tr`,16)(2087,`td`,17)(2088,`div`,25)(2089,`span`,26),cN(2090,` decimalsLength`),Gl(2091,`br`),ag()()(),Tl(2092,`td`,21)(2093,`code`,45),cN(2094,`number`),ag()(),Tl(2095,`td`,24)(2096,`em`)(2097,`strong`),cN(2098,`(opcional)`),ag()(),Tl(2099,`p`),cN(2100,`Quantidade máxima de casas decimais.`),ag(),Tl(2101,`blockquote`)(2102,`p`),cN(2103,`Esta propriedade só pode ser utilizada quando o `),Tl(2104,`code`),cN(2105,`type`),ag(),cN(2106,` for `),Tl(2107,`em`),cN(2108,`currency`),ag(),cN(2109,` ou `),Tl(2110,`em`),cN(2111,`decimal`),ag(),cN(2112,`.`),ag()(),Tl(2113,`blockquote`)(2114,`p`),cN(2115,`Quando utilizado com `),Tl(2116,`code`),cN(2117,`displayFormat`),ag(),cN(2118,`, será respeitado o valor `),Tl(2119,`strong`),cN(2120,`mais restritivo`),ag(),cN(2121,` entre esta propriedade e o número de casas decimais definido no formato.`),ag()()()(),Tl(2122,`tr`,16)(2123,`td`,17)(2124,`div`,25)(2125,`span`,26),cN(2126,` directory`),Gl(2127,`br`),ag()()(),Tl(2128,`td`,21)(2129,`code`,29),cN(2130,`boolean`),ag()(),Tl(2131,`td`,24)(2132,`em`)(2133,`strong`),cN(2134,`(opcional)`),ag()(),Tl(2135,`p`),cN(2136,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ag(),Tl(2137,`blockquote`)(2138,`p`),cN(2139,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ag()(),Tl(2140,`blockquote`)(2141,`p`),cN(2142,`Definição não suportada pelo browser `),Tl(2143,`strong`),cN(2144,`Internet Explorer`),ag(),cN(2145,`, todavia será possível a seleção de arquivos padrão.`),ag()(),Tl(2146,`p`)(2147,`strong`),cN(2148,`Componente compatível`),ag(),cN(2149,`: `),Tl(2150,`code`),cN(2151,`po-upload`),ag()()()(),Tl(2152,`tr`,16)(2153,`td`,17)(2154,`div`,25)(2155,`span`,26),cN(2156,` disabled`),Gl(2157,`br`),ag()()(),Tl(2158,`td`,21)(2159,`code`,29),cN(2160,`boolean`),ag()(),Tl(2161,`td`,24)(2162,`em`)(2163,`strong`),cN(2164,`(opcional)`),ag()(),Tl(2165,`p`),cN(2166,`Desabilita o campo caso informar o valor `),Tl(2167,`em`),cN(2168,`true`),ag(),cN(2169,`.`),ag()()(),Tl(2170,`tr`,16)(2171,`td`,17)(2172,`div`,25)(2173,`span`,26),cN(2174,` disabledInitFilter`),Gl(2175,`br`),ag()()(),Tl(2176,`td`,21)(2177,`code`,29),cN(2178,`boolean`),ag()(),Tl(2179,`td`,24)(2180,`em`)(2181,`strong`),cN(2182,`(opcional)`),ag()(),Tl(2183,`p`),cN(2184,`Desabilita o filtro inicial no serviço do `),Tl(2185,`code`),cN(2186,`po-combo`),ag(),cN(2187,`, que é executado no primeiro clique no campo.`),ag()()(),Tl(2188,`tr`,16)(2189,`td`,17)(2190,`div`,25)(2191,`span`,26),cN(2192,` disabledTabFilter`),Gl(2193,`br`),ag()()(),Tl(2194,`td`,21)(2195,`code`,29),cN(2196,`boolean`),ag()(),Tl(2197,`td`,24)(2198,`em`)(2199,`strong`),cN(2200,`(opcional)`),ag()(),Tl(2201,`p`),cN(2202,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Tl(2203,`code`),cN(2204,`po-combo`),ag(),cN(2205,`.`),ag()()(),Tl(2206,`tr`,16)(2207,`td`,17)(2208,`div`,25)(2209,`span`,26),cN(2210,` displayFormat`),Gl(2211,`br`),ag()()(),Tl(2212,`td`,21)(2213,`code`,27),cN(2214,`string`),ag()(),Tl(2215,`td`,24)(2216,`em`)(2217,`strong`),cN(2218,`(opcional)`),ag()(),Tl(2219,`p`),cN(2220,`Define uma máscara de formatação numérica avançada para o campo.`),ag(),Tl(2221,`p`),cN(2222,`Simbologia suportada:`),ag(),Tl(2223,`ul`)(2224,`li`)(2225,`code`),cN(2226,`9`),ag(),cN(2227,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ag(),Tl(2228,`li`)(2229,`code`),cN(2230,`>`),ag(),cN(2231,`: Supressão de zero à esquerda (dígito não obrigatório);`),ag(),Tl(2232,`li`)(2233,`code`),cN(2234,`<`),ag(),cN(2235,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ag(),Tl(2236,`li`)(2237,`code`),cN(2238,`.`),ag(),cN(2239,`: Separador decimal (convertido conforme locale);`),ag(),Tl(2240,`li`)(2241,`code`),cN(2242,`,`),ag(),cN(2243,`: Separador de milhar/grupo (convertido conforme locale);`),ag(),Tl(2244,`li`)(2245,`code`),cN(2246,`-`),ag(),cN(2247,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ag()(),Tl(2248,`blockquote`)(2249,`p`),cN(2250,`Quando utilizado com `),Tl(2251,`code`),cN(2252,`decimalsLength`),ag(),cN(2253,` ou `),Tl(2254,`code`),cN(2255,`thousandMaxlength`),ag(),cN(2256,`, será respeitado o valor `),Tl(2257,`strong`),cN(2258,`mais restritivo`),ag(),cN(2259,` entre a propriedade e o formato.`),ag()(),Tl(2260,`p`),cN(2261,`Exemplos: `),Tl(2262,`code`),cN(2263,`'>>>,>>>,>>9.99'`),ag(),cN(2264,`, `),Tl(2265,`code`),cN(2266,`'->>9.99'`),ag(),cN(2267,`, `),Tl(2268,`code`),cN(2269,`'999.9'`),ag()(),Tl(2270,`blockquote`)(2271,`p`),cN(2272,`Esta propriedade só pode ser utilizada quando o `),Tl(2273,`code`),cN(2274,`type`),ag(),cN(2275,` for `),Tl(2276,`em`),cN(2277,`currency`),ag(),cN(2278,` ou `),Tl(2279,`em`),cN(2280,`decimal`),ag(),cN(2281,`.`),ag()(),Tl(2282,`p`)(2283,`strong`),cN(2284,`Componente compatível:`),ag(),Tl(2285,`code`),cN(2286,`po-decimal`),ag(),cN(2287,`.`),ag()()(),Tl(2288,`tr`,16)(2289,`td`,17)(2290,`div`,25)(2291,`span`,26),cN(2292,` divider`),Gl(2293,`br`),ag()()(),Tl(2294,`td`,21)(2295,`code`,27),cN(2296,`string`),ag()(),Tl(2297,`td`,24)(2298,`em`)(2299,`strong`),cN(2300,`(opcional)`),ag()(),Tl(2301,`p`),cN(2302,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ag()()(),Tl(2303,`tr`,16)(2304,`td`,17)(2305,`div`,25)(2306,`span`,26),cN(2307,` dragDrop`),Gl(2308,`br`),ag()()(),Tl(2309,`td`,21)(2310,`code`,29),cN(2311,`boolean`),ag()(),Tl(2312,`td`,24)(2313,`em`)(2314,`strong`),cN(2315,`(opcional)`),ag()(),Tl(2316,`p`),cN(2317,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ag(),Tl(2318,`blockquote`)(2319,`p`),cN(2320,`Recomendamos utilizar apenas um `),Tl(2321,`code`),cN(2322,`po-upload`),ag(),cN(2323,` com esta funcionalidade por tela.`),ag()(),Tl(2324,`p`)(2325,`strong`),cN(2326,`Componente compatível`),ag(),cN(2327,`: `),Tl(2328,`code`),cN(2329,`po-upload`),ag()()()(),Tl(2330,`tr`,16)(2331,`td`,17)(2332,`div`,25)(2333,`span`,26),cN(2334,` dragDropHeight`),Gl(2335,`br`),ag()()(),Tl(2336,`td`,21)(2337,`code`,45),cN(2338,`number`),ag()(),Tl(2339,`td`,24)(2340,`em`)(2341,`strong`),cN(2342,`(opcional)`),ag()(),Tl(2343,`p`),cN(2344,`Define em `),Tl(2345,`em`),cN(2346,`pixels`),ag(),cN(2347,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Tl(2348,`code`),cN(2349,`160px`),ag(),cN(2350,`.`),ag(),Tl(2351,`blockquote`)(2352,`p`),cN(2353,`Esta propriedade funciona somente se a propriedade `),Tl(2354,`code`),cN(2355,`p-drag-drop`),ag(),cN(2356,` estiver habilitada.`),ag()(),Tl(2357,`p`)(2358,`strong`),cN(2359,`Componente compatível`),ag(),cN(2360,`: `),Tl(2361,`code`),cN(2362,`po-upload`),ag()()()(),Tl(2363,`tr`,16)(2364,`td`,17)(2365,`div`,25)(2366,`span`,26),cN(2367,` errorAsyncFunction`),Gl(2368,`br`),ag()()(),Tl(2369,`td`,21)(2370,`code`,50),cN(2371,`(value) => Observable<boolean>`),ag()(),Tl(2372,`td`,24)(2373,`em`)(2374,`strong`),cN(2375,`(opcional)`),ag()(),Tl(2376,`p`),cN(2377,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(2378,`code`),cN(2379,`change`),ag(),cN(2380,` ou `),Tl(2381,`code`),cN(2382,`change-model`),ag(),cN(2383,`, dependendo do valor da propriedade `),Tl(2384,`code`),cN(2385,`triggerMode`),ag(),cN(2386,`.`),ag(),Tl(2387,`blockquote`)(2388,`p`),cN(2389,`Retorna `),Tl(2390,`code`),cN(2391,`Observable com o valor true`),ag(),cN(2392,` para sinalizar o erro `),Tl(2393,`code`),cN(2394,`false`),ag(),cN(2395,` para indicar que não há erro.`),ag()(),Tl(2396,`p`)(2397,`strong`),cN(2398,`Componente compatível`),ag(),cN(2399,`: `),Tl(2400,`code`),cN(2401,`po-datepicker`),ag()()()(),Tl(2402,`tr`,16)(2403,`td`,17)(2404,`div`,25)(2405,`span`,26),cN(2406,` errorAsyncProperties`),Gl(2407,`br`),ag()()(),Tl(2408,`td`,21)(2409,`code`,51),cN(2410,`ErrorAsyncProperties`),ag()(),Tl(2411,`td`,24)(2412,`em`)(2413,`strong`),cN(2414,`(opcional)`),ag()(),Tl(2415,`p`),cN(2416,`Realiza alguma validação customizada assíncrona no componente.`),ag(),Tl(2417,`p`)(2418,`strong`),cN(2419,`Componentes compatíveis:`),ag(),Tl(2420,`code`),cN(2421,`po-input`),ag(),cN(2422,`, `),Tl(2423,`code`),cN(2424,`po-number`),ag(),cN(2425,`, `),Tl(2426,`code`),cN(2427,`po-decimal`),ag(),cN(2428,`, `),Tl(2429,`code`),cN(2430,`po-password`),ag(),cN(2431,`.`),ag()()(),Tl(2432,`tr`,16)(2433,`td`,17)(2434,`div`,25)(2435,`span`,26),cN(2436,` errorLimit`),Gl(2437,`br`),ag()()(),Tl(2438,`td`,21)(2439,`code`,29),cN(2440,`boolean`),ag()(),Tl(2441,`td`,24)(2442,`em`)(2443,`strong`),cN(2444,`(opcional)`),ag()(),Tl(2445,`p`),cN(2446,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(2447,`blockquote`)(2448,`p`),cN(2449,`Caso essa propriedade seja definida como `),Tl(2450,`code`),cN(2451,`true`),ag(),cN(2452,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()(),Tl(2453,`p`)(2454,`strong`),cN(2455,`Componentes compatíveis:`),ag(),Tl(2456,`code`),cN(2457,`po-checkbox-group`),ag(),cN(2458,`, `),Tl(2459,`code`),cN(2460,`po-combo`),ag(),cN(2461,`, `),Tl(2462,`code`),cN(2463,`po-datepicker`),ag(),cN(2464,`, `),Tl(2465,`code`),cN(2466,`po-datepicker-range`),ag(),cN(2467,`, `),Tl(2468,`code`),cN(2469,`po-decimal`),ag(),cN(2470,`, `),Tl(2471,`code`),cN(2472,`po-input`),ag(),cN(2473,`, `),Tl(2474,`code`),cN(2475,`po-lookup`),ag(),cN(2476,`, `),Tl(2477,`code`),cN(2478,`po-multiselect`),ag(),cN(2479,`, `),Tl(2480,`code`),cN(2481,`po-number`),ag(),cN(2482,`, `),Tl(2483,`code`),cN(2484,`po-password`),ag(),cN(2485,`, `),Tl(2486,`code`),cN(2487,`po-radio-group`),ag(),cN(2488,`, `),Tl(2489,`code`),cN(2490,`po-select`),ag(),cN(2491,`,
`),Tl(2492,`code`),cN(2493,`po-switch`),ag(),cN(2494,`, `),Tl(2495,`code`),cN(2496,`po-textarea`),ag(),cN(2497,`, `),Tl(2498,`code`),cN(2499,`po-timepicker`),ag(),cN(2500,`.`),ag()()(),Tl(2501,`tr`,16)(2502,`td`,17)(2503,`div`,25)(2504,`span`,26),cN(2505,` errorMessage`),Gl(2506,`br`),ag()()(),Tl(2507,`td`,21)(2508,`code`,27),cN(2509,`string`),ag()(),Tl(2510,`td`,24)(2511,`em`)(2512,`strong`),cN(2513,`(opcional)`),ag()(),Tl(2514,`p`),cN(2515,`Mensagem que será apresentada quando o campo ficar inválido.`),ag(),Tl(2516,`p`),cN(2517,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),ag(),Tl(2518,`ul`)(2519,`li`),cN(2520,`pattern;`),ag(),Tl(2521,`li`),cN(2522,`minValue;`),ag(),Tl(2523,`li`),cN(2524,`maxValue;`),ag(),Tl(2525,`li`),cN(2526,`required;`),ag()(),Tl(2527,`blockquote`)(2528,`p`),cN(2529,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(2530,`code`),cN(2531,`po-datepicker`),ag(),cN(2532,`, `),Tl(2533,`code`),cN(2534,`po-input`),ag(),cN(2535,`, `),Tl(2536,`code`),cN(2537,`po-number`),ag(),cN(2538,`, `),Tl(2539,`code`),cN(2540,`po-decimal`),ag(),cN(2541,`, `),Tl(2542,`code`),cN(2543,`po-password`),ag(),cN(2544,`, `),Tl(2545,`code`),cN(2546,`po-timepicker`),ag(),cN(2547,`, \xE9 necess\xE1rio que a propriedade
`),Tl(2548,`code`),cN(2549,`requiredFieldErrorMessage`),ag(),cN(2550,` esteja como `),Tl(2551,`code`),cN(2552,`true`),ag(),cN(2553,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(2554,`code`),cN(2555,`po-datepicker-range`),ag(),cN(2556,`, `),Tl(2557,`code`),cN(2558,`po-select`),ag(),cN(2559,`, `),Tl(2560,`code`),cN(2561,`po-checkbox-group`),ag(),cN(2562,`, `),Tl(2563,`code`),cN(2564,`po-radio-group`),ag(),cN(2565,`, `),Tl(2566,`code`),cN(2567,`po-multiselect`),ag(),cN(2568,`, `),Tl(2569,`code`),cN(2570,`po-combo`),ag(),cN(2571,`,
`),Tl(2572,`code`),cN(2573,`po-lookup`),ag(),cN(2574,` e `),Tl(2575,`code`),cN(2576,`po-textarea`),ag(),cN(2577,` não é necessário passar a propriedade `),Tl(2578,`code`),cN(2579,`requiredFieldErrorMessage`),ag(),cN(2580,`.`),ag()(),Tl(2581,`p`)(2582,`strong`),cN(2583,`Componentes compatíveis:`),ag(),Tl(2584,`code`),cN(2585,`po-checkbox-group`),ag(),cN(2586,`, `),Tl(2587,`code`),cN(2588,`po-combo`),ag(),cN(2589,`, `),Tl(2590,`code`),cN(2591,`po-datepicker`),ag(),cN(2592,`, `),Tl(2593,`code`),cN(2594,`po-datepicker-range`),ag(),cN(2595,`, `),Tl(2596,`code`),cN(2597,`po-decimal`),ag(),cN(2598,`, `),Tl(2599,`code`),cN(2600,`po-input`),ag(),cN(2601,`, `),Tl(2602,`code`),cN(2603,`po-lookup`),ag(),cN(2604,`, `),Tl(2605,`code`),cN(2606,`po-multiselect`),ag(),cN(2607,`, `),Tl(2608,`code`),cN(2609,`po-number`),ag(),cN(2610,`, `),Tl(2611,`code`),cN(2612,`po-password`),ag(),cN(2613,`, `),Tl(2614,`code`),cN(2615,`po-radio-group`),ag(),cN(2616,`, `),Tl(2617,`code`),cN(2618,`po-select`),ag(),cN(2619,`,
`),Tl(2620,`code`),cN(2621,`po-switch`),ag(),cN(2622,`, `),Tl(2623,`code`),cN(2624,`po-textarea`),ag(),cN(2625,`, `),Tl(2626,`code`),cN(2627,`po-timepicker`),ag(),cN(2628,`.`),ag()()(),Tl(2629,`tr`,16)(2630,`td`,17)(2631,`div`,25)(2632,`span`,26),cN(2633,` fieldLabel`),Gl(2634,`br`),ag()()(),Tl(2635,`td`,21)(2636,`code`,27),cN(2637,`string`),ag()(),Tl(2638,`td`,24)(2639,`em`)(2640,`strong`),cN(2641,`(opcional)`),ag()(),Tl(2642,`p`),cN(2643,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ag(),Tl(2644,`p`),cN(2645,`O valor padrão é: `),Tl(2646,`code`),cN(2647,`label`),ag(),cN(2648,`.`),ag(),Tl(2649,`blockquote`)(2650,`p`),cN(2651,`Esta propriedade pode ser utilizada em conjunto com: `),Tl(2652,`code`),cN(2653,`options`),ag(),cN(2654,`, `),Tl(2655,`code`),cN(2656,`optionsService`),ag(),cN(2657,` e `),Tl(2658,`code`),cN(2659,`searchService`),ag(),cN(2660,`.`),ag()()()(),Tl(2661,`tr`,16)(2662,`td`,17)(2663,`div`,25)(2664,`span`,26),cN(2665,` fieldValue`),Gl(2666,`br`),ag()()(),Tl(2667,`td`,21)(2668,`code`,27),cN(2669,`string`),ag()(),Tl(2670,`td`,24)(2671,`em`)(2672,`strong`),cN(2673,`(opcional)`),ag()(),Tl(2674,`p`),cN(2675,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ag(),Tl(2676,`p`),cN(2677,`O valor padrão é: `),Tl(2678,`code`),cN(2679,`value`),ag(),cN(2680,`.`),ag(),Tl(2681,`blockquote`)(2682,`p`),cN(2683,`Esta propriedade pode ser utilizada em conjunto com: `),Tl(2684,`code`),cN(2685,`options`),ag(),cN(2686,`, `),Tl(2687,`code`),cN(2688,`optionsService`),ag(),cN(2689,` e `),Tl(2690,`code`),cN(2691,`searchService`),ag(),cN(2692,`.`),ag()()()(),Tl(2693,`tr`,16)(2694,`td`,17)(2695,`div`,25)(2696,`span`,26),cN(2697,` filterMinlength`),Gl(2698,`br`),ag()()(),Tl(2699,`td`,21)(2700,`code`,45),cN(2701,`number`),ag()(),Tl(2702,`td`,24)(2703,`em`)(2704,`strong`),cN(2705,`(opcional)`),ag()(),Tl(2706,`p`),cN(2707,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Tl(2708,`code`),cN(2709,`po-combo`),ag(),cN(2710,`.`),ag()()(),Tl(2711,`tr`,16)(2712,`td`,17)(2713,`div`,25)(2714,`span`,26),cN(2715,` filterMode`),Gl(2716,`br`),ag()()(),Tl(2717,`td`,21)(2718,`code`,52),cN(2719,`PoMultiselectFilterMode`),ag()(),Tl(2720,`td`,24)(2721,`em`)(2722,`strong`),cN(2723,`(opcional)`),ag()(),Tl(2724,`p`),cN(2725,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Tl(2726,`code`),cN(2727,`startsWith`),ag(),cN(2728,`, `),Tl(2729,`code`),cN(2730,`contains`),ag(),cN(2731,` ou `),Tl(2732,`code`),cN(2733,`endsWith`),ag(),cN(2734,`.`),ag(),Tl(2735,`blockquote`)(2736,`p`),cN(2737,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),ag()(),Tl(2738,`p`)(2739,`strong`),cN(2740,`Componente compatível:`),ag(),Tl(2741,`code`),cN(2742,`po-multiselect`),ag(),cN(2743,`.`),ag()()(),Tl(2744,`tr`,16)(2745,`td`,17)(2746,`div`,25)(2747,`span`,26),cN(2748,` forceBooleanComponentType`),Gl(2749,`br`),ag()()(),Tl(2750,`td`,21)(2751,`code`,53),cN(2752,`ForceBooleanComponentEnum`),ag()(),Tl(2753,`td`,24)(2754,`em`)(2755,`strong`),cN(2756,`(opcional)`),ag()(),Tl(2757,`p`),cN(2758,`Valores aceitos:`),ag(),Tl(2759,`ul`)(2760,`li`),cN(2761,`ForceBooleanComponentEnum.switch`),ag(),Tl(2762,`li`),cN(2763,`ForceBooleanComponentEnum.checkbox`),ag()()()(),Tl(2764,`tr`,16)(2765,`td`,17)(2766,`div`,25)(2767,`span`,26),cN(2768,` forceOptionsComponentType`),Gl(2769,`br`),ag()()(),Tl(2770,`td`,21)(2771,`code`,54),cN(2772,`ForceOptionComponentEnum`),ag()(),Tl(2773,`td`,24)(2774,`em`)(2775,`strong`),cN(2776,`(opcional)`),ag()(),Tl(2777,`p`),cN(2778,`pode ser utilizada em conjunto com a propriedade `),Tl(2779,`code`),cN(2780,`options`),ag(),cN(2781,` forçando o componente a renderizar um `),Tl(2782,`code`),cN(2783,`po-select`),ag(),cN(2784,` ou `),Tl(2785,`code`),cN(2786,`po-radio-group`),ag(),cN(2787,`.`),ag(),Tl(2788,`p`),cN(2789,`Valores aceitos:`),ag(),Tl(2790,`ul`)(2791,`li`),cN(2792,`ForceOptionComponentEnum.radioGroup`),ag(),Tl(2793,`li`),cN(2794,`ForceOptionComponentEnum.select`),ag()(),Tl(2795,`blockquote`)(2796,`p`),cN(2797,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Tl(2798,`code`),cN(2799,`optionsMulti`),ag(),cN(2800,` e `),Tl(2801,`code`),cN(2802,`optionsService`),ag(),cN(2803,`.`),ag()()()(),Tl(2804,`tr`,16)(2805,`td`,17)(2806,`div`,25)(2807,`span`,26),cN(2808,` formField`),Gl(2809,`br`),ag()()(),Tl(2810,`td`,21)(2811,`code`,27),cN(2812,`string`),ag()(),Tl(2813,`td`,24)(2814,`em`)(2815,`strong`),cN(2816,`(opcional)`),ag()(),Tl(2817,`p`),cN(2818,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Tl(2819,`code`),cN(2820,`url`),ag(),cN(2821,`.`),ag(),Tl(2822,`blockquote`)(2823,`p`),cN(2824,`O valor default é `),Tl(2825,`code`),cN(2826,`files`),ag()()(),Tl(2827,`p`)(2828,`strong`),cN(2829,`Componente compatível`),ag(),cN(2830,`: `),Tl(2831,`code`),cN(2832,`po-upload`),ag()()()(),Tl(2833,`tr`,16)(2834,`td`,17)(2835,`div`,25)(2836,`span`,26),cN(2837,` format`),Gl(2838,`br`),ag()()(),Tl(2839,`td`,21)(2840,`code`,27),cN(2841,`string `),ag(),Tl(2842,`code`,32),cN(2843,` Array<string>`),ag()(),Tl(2844,`td`,24)(2845,`em`)(2846,`strong`),cN(2847,`(opcional)`),ag()(),Tl(2848,`p`),cN(2849,`Formato de exibição no campo.`),ag(),Tl(2850,`p`),cN(2851,`Ao utilizar esta propriedade com o `),Tl(2852,`code`),cN(2853,`type`),ag(),Tl(2854,`em`),cN(2855,`PoDynamicFieldType.Date`),ag(),cN(2856,` ou `),Tl(2857,`em`),cN(2858,`PoDynamicFieldType.DateTime`),ag(),cN(2859,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ag(),Tl(2860,`p`),cN(2861,`Valores válidos:`),ag(),Tl(2862,`ul`)(2863,`li`),cN(2864,`dd/mm/yyyy`),ag(),Tl(2865,`li`),cN(2866,`mm/dd/yyyy`),ag(),Tl(2867,`li`),cN(2868,`yyyy/mm/dd`),ag()(),Tl(2869,`p`),cN(2870,`Ao utilizar com o `),Tl(2871,`code`),cN(2872,`type`),ag(),Tl(2873,`em`),cN(2874,`PoDynamicFieldType.Time`),ag(),cN(2875,`, define o formato de exibição do horário:`),ag(),Tl(2876,`p`),cN(2877,`Valores válidos:`),ag(),Tl(2878,`ul`)(2879,`li`)(2880,`code`),cN(2881,`24`),ag(),cN(2882,`: formato de 24 horas (padrão)`),ag(),Tl(2883,`li`)(2884,`code`),cN(2885,`12`),ag(),cN(2886,`: formato de 12 horas com indicador AM/PM`),ag()(),Tl(2887,`p`),cN(2888,`Também pode-se utilizar em conjunto com `),Tl(2889,`code`),cN(2890,`searchService`),ag(),cN(2891,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ag(),Tl(2892,`p`)(2893,`strong`),cN(2894,`Componentes compatíveis:`),ag(),Tl(2895,`code`),cN(2896,`po-datepicker`),ag(),cN(2897,`, `),Tl(2898,`code`),cN(2899,`po-datetimepicker`),ag(),cN(2900,`, `),Tl(2901,`code`),cN(2902,`po-timepicker`),ag(),cN(2903,`, `),Tl(2904,`code`),cN(2905,`po-lookup`),ag(),cN(2906,`.`),ag()()(),Tl(2907,`tr`,16)(2908,`td`,17)(2909,`div`,25)(2910,`span`,26),cN(2911,` formatModel`),Gl(2912,`br`),ag()()(),Tl(2913,`td`,21)(2914,`code`,29),cN(2915,`boolean`),ag()(),Tl(2916,`td`,24)(2917,`em`)(2918,`strong`),cN(2919,`(opcional)`),ag()(),Tl(2920,`p`),cN(2921,`Indica se o `),Tl(2922,`code`),cN(2923,`model`),ag(),cN(2924,` receberá o valor formatado pelas propriedades `),Tl(2925,`code`),cN(2926,`p-label-on`),ag(),cN(2927,` e `),Tl(2928,`code`),cN(2929,`p-label-off`),ag(),cN(2930,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ag(),Tl(2931,`p`),cN(2932,`O valor padrão é: `),Tl(2933,`code`),cN(2934,`false`),ag(),cN(2935,`.`),ag(),Tl(2936,`blockquote`)(2937,`p`),cN(2938,`Esta propriedade está disponivel apenas para o `),Tl(2939,`code`),cN(2940,`swicth`),ag(),cN(2941,`.`),ag()()()(),Tl(2942,`tr`,16)(2943,`td`,17)(2944,`div`,25)(2945,`span`,26),cN(2946,` formatTime`),Gl(2947,`br`),ag()()(),Tl(2948,`td`,21)(2949,`code`,27),cN(2950,`string`),ag()(),Tl(2951,`td`,24)(2952,`em`)(2953,`strong`),cN(2954,`(opcional)`),ag()(),Tl(2955,`p`),cN(2956,`Define o formato de exibição do timer (`),Tl(2957,`code`),cN(2958,`'12'`),ag(),cN(2959,` ou `),Tl(2960,`code`),cN(2961,`'24'`),ag(),cN(2962,`).`),ag(),Tl(2963,`p`)(2964,`strong`),cN(2965,`Componente compatível:`),ag(),Tl(2966,`code`),cN(2967,`po-datetimepicker`),ag()()()(),Tl(2968,`tr`,16)(2969,`td`,17)(2970,`div`,25)(2971,`span`,26),cN(2972,` gridColumns`),Gl(2973,`br`),ag()()(),Tl(2974,`td`,21)(2975,`code`,45),cN(2976,`number`),ag()(),Tl(2977,`td`,24)(2978,`em`)(2979,`strong`),cN(2980,`(opcional)`),ag()(),Tl(2981,`p`),cN(2982,`Tamanho de exibição do campo em telas.`),ag(),Tl(2983,`p`),cN(2984,`Deve ser usado o sistema de `),Tl(2985,`strong`),cN(2986,`grid`),ag(),cN(2987,` do PO (1 ... 12 colunas).`),ag(),Tl(2988,`blockquote`)(2989,`p`),cN(2990,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(2991,`tr`,16)(2992,`td`,17)(2993,`div`,25)(2994,`span`,26),cN(2995,` gridLgColumns`),Gl(2996,`br`),ag()()(),Tl(2997,`td`,21)(2998,`code`,45),cN(2999,`number`),ag()(),Tl(3e3,`td`,24)(3001,`em`)(3002,`strong`),cN(3003,`(opcional)`),ag()(),Tl(3004,`p`),cN(3005,`Tamanho de exibição do campo em telas grandes (lg).`),ag(),Tl(3006,`p`),cN(3007,`Deve ser usado o sistema de `),Tl(3008,`strong`),cN(3009,`grid`),ag(),cN(3010,` do PO (1 ... 12 colunas).`),ag(),Tl(3011,`blockquote`)(3012,`p`),cN(3013,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3014,`code`),cN(3015,`gridColumns`),ag(),cN(3016,`.`),ag()()()(),Tl(3017,`tr`,16)(3018,`td`,17)(3019,`div`,25)(3020,`span`,26),cN(3021,` gridLgPull`),Gl(3022,`br`),ag()()(),Tl(3023,`td`,21)(3024,`code`,45),cN(3025,`number`),ag()(),Tl(3026,`td`,24)(3027,`em`)(3028,`strong`),cN(3029,`(opcional)`),ag()(),Tl(3030,`p`),cN(3031,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ag(),Tl(3032,`p`),cN(3033,`Deve ser usado o sistema de `),Tl(3034,`strong`),cN(3035,`grid`),ag(),cN(3036,` do PO (1 ... 11 colunas).`),ag(),Tl(3037,`blockquote`)(3038,`p`),cN(3039,`Esta propriedade não funciona com a propriedade `),Tl(3040,`code`),cN(3041,`gridColumns`),ag(),cN(3042,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(3043,`tr`,16)(3044,`td`,17)(3045,`div`,25)(3046,`span`,26),cN(3047,` gridMdColumns`),Gl(3048,`br`),ag()()(),Tl(3049,`td`,21)(3050,`code`,45),cN(3051,`number`),ag()(),Tl(3052,`td`,24)(3053,`em`)(3054,`strong`),cN(3055,`(opcional)`),ag()(),Tl(3056,`p`),cN(3057,`Tamanho de exibição do campo em telas médias (md).`),ag(),Tl(3058,`p`),cN(3059,`Deve ser usado o sistema de `),Tl(3060,`strong`),cN(3061,`grid`),ag(),cN(3062,` do PO (1 ... 12 colunas).`),ag(),Tl(3063,`blockquote`)(3064,`p`),cN(3065,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3066,`code`),cN(3067,`gridColumns`),ag(),cN(3068,`.`),ag()()()(),Tl(3069,`tr`,16)(3070,`td`,17)(3071,`div`,25)(3072,`span`,26),cN(3073,` gridMdPull`),Gl(3074,`br`),ag()()(),Tl(3075,`td`,21)(3076,`code`,45),cN(3077,`number`),ag()(),Tl(3078,`td`,24)(3079,`em`)(3080,`strong`),cN(3081,`(opcional)`),ag()(),Tl(3082,`p`),cN(3083,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ag(),Tl(3084,`p`),cN(3085,`Deve ser usado o sistema de `),Tl(3086,`strong`),cN(3087,`grid`),ag(),cN(3088,` do PO (1 ... 11 colunas).`),ag(),Tl(3089,`blockquote`)(3090,`p`),cN(3091,`Esta propriedade não funciona com a propriedade `),Tl(3092,`code`),cN(3093,`gridColumns`),ag(),cN(3094,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(3095,`tr`,16)(3096,`td`,17)(3097,`div`,25)(3098,`span`,26),cN(3099,` gridSmColumns`),Gl(3100,`br`),ag()()(),Tl(3101,`td`,21)(3102,`code`,45),cN(3103,`number`),ag()(),Tl(3104,`td`,24)(3105,`em`)(3106,`strong`),cN(3107,`(opcional)`),ag()(),Tl(3108,`p`),cN(3109,`Tamanho de exibição do campo em telas menores (sm).`),ag(),Tl(3110,`p`),cN(3111,`Deve ser usado o sistema de `),Tl(3112,`strong`),cN(3113,`grid`),ag(),cN(3114,` do PO (1 ... 12 colunas).`),ag(),Tl(3115,`blockquote`)(3116,`p`),cN(3117,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3118,`code`),cN(3119,`gridColumns`),ag(),cN(3120,`.`),ag()()()(),Tl(3121,`tr`,16)(3122,`td`,17)(3123,`div`,25)(3124,`span`,26),cN(3125,` gridSmPull`),Gl(3126,`br`),ag()()(),Tl(3127,`td`,21)(3128,`code`,45),cN(3129,`number`),ag()(),Tl(3130,`td`,24)(3131,`em`)(3132,`strong`),cN(3133,`(opcional)`),ag()(),Tl(3134,`p`),cN(3135,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ag(),Tl(3136,`p`),cN(3137,`Deve ser usado o sistema de `),Tl(3138,`strong`),cN(3139,`grid`),ag(),cN(3140,` do PO (1 ... 11 colunas).`),ag(),Tl(3141,`blockquote`)(3142,`p`),cN(3143,`Esta propriedade não funciona com a propriedade `),Tl(3144,`code`),cN(3145,`gridColumns`),ag(),cN(3146,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(3147,`tr`,16)(3148,`td`,17)(3149,`div`,25)(3150,`span`,26),cN(3151,` gridXlColumns`),Gl(3152,`br`),ag()()(),Tl(3153,`td`,21)(3154,`code`,45),cN(3155,`number`),ag()(),Tl(3156,`td`,24)(3157,`em`)(3158,`strong`),cN(3159,`(opcional)`),ag()(),Tl(3160,`p`),cN(3161,`Tamanho de exibição do campo em telas extra grandes (xl).`),ag(),Tl(3162,`p`),cN(3163,`Deve ser usado o sistema de `),Tl(3164,`strong`),cN(3165,`grid`),ag(),cN(3166,` do PO (1 ... 12 colunas).`),ag(),Tl(3167,`blockquote`)(3168,`p`),cN(3169,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3170,`code`),cN(3171,`gridColumns`),ag(),cN(3172,`.`),ag()()()(),Tl(3173,`tr`,16)(3174,`td`,17)(3175,`div`,25)(3176,`span`,26),cN(3177,` gridXlPull`),Gl(3178,`br`),ag()()(),Tl(3179,`td`,21)(3180,`code`,45),cN(3181,`number`),ag()(),Tl(3182,`td`,24)(3183,`em`)(3184,`strong`),cN(3185,`(opcional)`),ag()(),Tl(3186,`p`),cN(3187,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ag(),Tl(3188,`p`),cN(3189,`Deve ser usado o sistema de `),Tl(3190,`strong`),cN(3191,`grid`),ag(),cN(3192,` do PO (1 ... 11 colunas).`),ag(),Tl(3193,`blockquote`)(3194,`p`),cN(3195,`Esta propriedade não funciona com a propriedade `),Tl(3196,`code`),cN(3197,`gridColumns`),ag(),cN(3198,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(3199,`tr`,16)(3200,`td`,17)(3201,`div`,25)(3202,`span`,26),cN(3203,` headers`),Gl(3204,`br`),ag()()(),Tl(3205,`td`,21)(3206,`code`,55),cN(3207,`{ [name: string]: string `),ag(),Tl(3208,`code`,56),cN(3209,` Array<string>;
}`),ag()(),Tl(3210,`td`,24)(3211,`em`)(3212,`strong`),cN(3213,`(opcional)`),ag()(),Tl(3214,`p`),cN(3215,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ag(),Tl(3216,`p`)(3217,`strong`),cN(3218,`Componente compatível`),ag(),cN(3219,`: `),Tl(3220,`code`),cN(3221,`po-upload`),ag()()()(),Tl(3222,`tr`,16)(3223,`td`,17)(3224,`div`,25)(3225,`span`,26),cN(3226,` help`),Gl(3227,`br`),ag()()(),Tl(3228,`td`,21)(3229,`code`,27),cN(3230,`string`),ag()(),Tl(3231,`td`,24)(3232,`em`)(3233,`strong`),cN(3234,`(opcional)`),ag()(),Tl(3235,`p`),cN(3236,`Texto de ajuda.`),ag()()(),Tl(3237,`tr`,16)(3238,`td`,17)(3239,`div`,25)(3240,`span`,26),cN(3241,` helper`),Gl(3242,`br`),ag()()(),Tl(3243,`td`,21)(3244,`code`,27),cN(3245,`string `),ag(),Tl(3246,`code`,38),cN(3247,` PoHelperOptions`),ag()(),Tl(3248,`td`,24)(3249,`em`)(3250,`strong`),cN(3251,`(opcional)`),ag()(),Tl(3252,`p`),cN(3253,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),ag()()(),Tl(3254,`tr`,16)(3255,`td`,17)(3256,`div`,25)(3257,`span`,26),cN(3258,` hideLabelStatus`),Gl(3259,`br`),ag()()(),Tl(3260,`td`,21)(3261,`code`,29),cN(3262,`boolean`),ag()(),Tl(3263,`td`,24)(3264,`em`)(3265,`strong`),cN(3266,`(opcional)`),ag()(),Tl(3267,`p`),cN(3268,`Indica se o status do `),Tl(3269,`code`),cN(3270,`model`),ag(),cN(3271,` será escondido visualmente ao lado do switch`),ag()()(),Tl(3272,`tr`,16)(3273,`td`,17)(3274,`div`,25)(3275,`span`,26),cN(3276,` hidePasswordPeek`),Gl(3277,`br`),ag()()(),Tl(3278,`td`,21)(3279,`code`,29),cN(3280,`boolean`),ag()(),Tl(3281,`td`,24)(3282,`em`)(3283,`strong`),cN(3284,`(opcional)`),ag()(),Tl(3285,`p`),cN(3286,`Permite esconder a função de espiar a senha digitada no `),Tl(3287,`code`),cN(3288,`po-password`),ag(),cN(3289,`.`),ag()()(),Tl(3290,`tr`,16)(3291,`td`,17)(3292,`div`,25)(3293,`span`,26),cN(3294,` hideRestrictionsInfo`),Gl(3295,`br`),ag()()(),Tl(3296,`td`,21)(3297,`code`,29),cN(3298,`boolean`),ag()(),Tl(3299,`td`,24)(3300,`em`)(3301,`strong`),cN(3302,`(opcional)`),ag()(),Tl(3303,`p`),cN(3304,`Oculta visualmente as informações de restrições para o upload.`),ag(),Tl(3305,`p`)(3306,`strong`),cN(3307,`Componente compatível`),ag(),cN(3308,`: `),Tl(3309,`code`),cN(3310,`po-upload`),ag()()()(),Tl(3311,`tr`,16)(3312,`td`,17)(3313,`div`,25)(3314,`span`,26),cN(3315,` hideSearch`),Gl(3316,`br`),ag()()(),Tl(3317,`td`,21)(3318,`code`,29),cN(3319,`boolean`),ag()(),Tl(3320,`td`,24)(3321,`em`)(3322,`strong`),cN(3323,`(opcional)`),ag()(),Tl(3324,`p`),cN(3325,`Esconde o campo de pesquisa existente dentro do dropdown do `),Tl(3326,`code`),cN(3327,`po-multiselect`),ag(),cN(3328,`.`),ag()()(),Tl(3329,`tr`,16)(3330,`td`,17)(3331,`div`,25)(3332,`span`,26),cN(3333,` hideSelectAll`),Gl(3334,`br`),ag()()(),Tl(3335,`td`,21)(3336,`code`,29),cN(3337,`boolean`),ag()(),Tl(3338,`td`,24)(3339,`em`)(3340,`strong`),cN(3341,`(opcional)`),ag()(),Tl(3342,`p`),cN(3343,`Indica se o campo "Selecionar todos" do `),Tl(3344,`code`),cN(3345,`po-multiselect`),ag(),cN(3346,` será escondido.`),ag()()(),Tl(3347,`tr`,16)(3348,`td`,17)(3349,`div`,25)(3350,`span`,26),cN(3351,` hideSelectButton`),Gl(3352,`br`),ag()()(),Tl(3353,`td`,21)(3354,`code`,29),cN(3355,`boolean`),ag()(),Tl(3356,`td`,24)(3357,`em`)(3358,`strong`),cN(3359,`(opcional)`),ag()(),Tl(3360,`p`),cN(3361,`Omite o botão de seleção de arquivos.`),ag(),Tl(3362,`blockquote`)(3363,`p`),cN(3364,`Caso o valor definido seja `),Tl(3365,`code`),cN(3366,`true`),ag(),cN(3367,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3368,`code`),cN(3369,`selectFiles()`),ag(),cN(3370,` para seleção de arquivos.`),ag()(),Tl(3371,`p`)(3372,`strong`),cN(3373,`Componente compatível`),ag(),cN(3374,`: `),Tl(3375,`code`),cN(3376,`po-upload`),ag()()()(),Tl(3377,`tr`,16)(3378,`td`,17)(3379,`div`,25)(3380,`span`,26),cN(3381,` hideSendButton`),Gl(3382,`br`),ag()()(),Tl(3383,`td`,21)(3384,`code`,29),cN(3385,`boolean`),ag()(),Tl(3386,`td`,24)(3387,`em`)(3388,`strong`),cN(3389,`(opcional)`),ag()(),Tl(3390,`p`),cN(3391,`Omite o botão de envio de arquivos.`),ag(),Tl(3392,`blockquote`)(3393,`p`),cN(3394,`Caso o valor definido seja `),Tl(3395,`code`),cN(3396,`true`),ag(),cN(3397,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3398,`code`),cN(3399,`sendFiles()`),ag(),cN(3400,` para envio do(s) arquivo(s) selecionado(s).`),ag()(),Tl(3401,`p`)(3402,`strong`),cN(3403,`Componente compatível`),ag(),cN(3404,`: `),Tl(3405,`code`),cN(3406,`po-upload`),ag()()()(),Tl(3407,`tr`,16)(3408,`td`,17)(3409,`div`,25)(3410,`span`,26),cN(3411,` icon`),Gl(3412,`br`),ag()()(),Tl(3413,`td`,21)(3414,`code`,27),cN(3415,`string `),ag(),Tl(3416,`code`,57),cN(3417,` TemplateRef<void>`),ag()(),Tl(3418,`td`,24)(3419,`em`)(3420,`strong`),cN(3421,`(opcional)`),ag()(),Tl(3422,`p`),cN(3423,`Define o ícone que será exibido no início do campo.`),ag(),Tl(3424,`blockquote`)(3425,`p`),cN(3426,`Esta propriedade só pode ser utilizado nos campos:`),ag()(),Tl(3427,`ul`)(3428,`li`),cN(3429,`Input;`),ag(),Tl(3430,`li`),cN(3431,`Number;`),ag(),Tl(3432,`li`),cN(3433,`Decimal;`),ag(),Tl(3434,`li`),cN(3435,`Combo;`),ag(),Tl(3436,`li`),cN(3437,`Password;`),ag()(),Tl(3438,`blockquote`)(3439,`p`),cN(3440,`Veja a disponibilidade de ícones em `),Tl(3441,`a`,58),cN(3442,`biblioteca de ícones`),ag(),cN(3443,`.`),ag()()()(),Tl(3444,`tr`,16)(3445,`td`,17)(3446,`div`,25)(3447,`span`,26),cN(3448,` infiniteScroll`),Gl(3449,`br`),ag()()(),Tl(3450,`td`,21)(3451,`code`,29),cN(3452,`boolean`),ag()(),Tl(3453,`td`,24)(3454,`em`)(3455,`strong`),cN(3456,`(opcional)`),ag()(),Tl(3457,`p`),cN(3458,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ag(),Tl(3459,`p`)(3460,`strong`),cN(3461,`Componentes compatíveis:`),ag(),Tl(3462,`code`),cN(3463,`po-combo`),ag(),cN(3464,`, `),Tl(3465,`code`),cN(3466,`po-lookup`),ag(),cN(3467,`.`),ag()()(),Tl(3468,`tr`,16)(3469,`td`,17)(3470,`div`,25)(3471,`span`,26),cN(3472,` infiniteScrollDistance`),Gl(3473,`br`),ag()()(),Tl(3474,`td`,21)(3475,`code`,45),cN(3476,`number`),ag()(),Tl(3477,`td`,24)(3478,`em`)(3479,`strong`),cN(3480,`(opcional)`),ag()(),Tl(3481,`p`),cN(3482,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(3483,`strong`),cN(3484,`Exemplos`),ag(),Tl(3485,`code`),cN(3486,`{ infiniteScrollDistance: 80 }`),ag(),cN(3487,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),ag(),Tl(3488,`p`)(3489,`strong`),cN(3490,`Componente compatível:`),ag(),Tl(3491,`code`),cN(3492,`po-combo`),ag(),cN(3493,`.`),ag()()(),Tl(3494,`tr`,16)(3495,`td`,17)(3496,`div`,25)(3497,`span`,26),cN(3498,` invalidValue`),Gl(3499,`br`),ag()()(),Tl(3500,`td`,21)(3501,`code`,29),cN(3502,`boolean`),ag()(),Tl(3503,`td`,24)(3504,`em`)(3505,`strong`),cN(3506,`(opcional)`),ag()(),Tl(3507,`p`),cN(3508,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Tl(3509,`code`),cN(3510,`p-field-error-message`),ag(),cN(3511,`.`),ag(),Tl(3512,`blockquote`)(3513,`p`),cN(3514,`Caso essa propriedade seja definida como `),Tl(3515,`code`),cN(3516,`true`),ag(),cN(3517,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ag()(),Tl(3518,`p`)(3519,`strong`),cN(3520,`Componente compatível`),ag(),cN(3521,`: `),Tl(3522,`code`),cN(3523,`po-switch`),ag()()()(),Tl(3524,`tr`,16)(3525,`td`,17)(3526,`div`,25)(3527,`span`,26),cN(3528,` isoFormat`),Gl(3529,`br`),ag()()(),Tl(3530,`td`,21)(3531,`code`,59),cN(3532,`PoDatepickerIsoFormat`),ag()(),Tl(3533,`td`,24)(3534,`em`)(3535,`strong`),cN(3536,`(opcional)`),ag()(),Tl(3537,`p`),cN(3538,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),ag(),Tl(3539,`blockquote`)(3540,`p`),cN(3541,`Veja os valores válidos no `),Tl(3542,`code`),cN(3543,`PoDatepickerIsoFormat`),ag(),cN(3544,`.`),ag()(),Tl(3545,`p`)(3546,`strong`),cN(3547,`Componente compatível:`),ag(),Tl(3548,`code`),cN(3549,`po-datepicker`),ag()()()(),Tl(3550,`tr`,16)(3551,`td`,17)(3552,`div`,25)(3553,`span`,26),cN(3554,` key`),Gl(3555,`br`),ag()()(),Tl(3556,`td`,21)(3557,`code`,29),cN(3558,`boolean`),ag()(),Tl(3559,`td`,24)(3560,`em`)(3561,`strong`),cN(3562,`(opcional)`),ag()(),Tl(3563,`p`),cN(3564,`Identificador`),ag()()(),Tl(3565,`tr`,16)(3566,`td`,17)(3567,`div`,25)(3568,`span`,26),cN(3569,` keydown`),Gl(3570,`br`),ag()()(),Tl(3571,`td`,21)(3572,`code`,44),cN(3573,`Function`),ag()(),Tl(3574,`td`,24)(3575,`em`)(3576,`strong`),cN(3577,`(opcional)`),ag()(),Tl(3578,`p`),cN(3579,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(3580,`code`),cN(3581,`KeyboardEvent`),ag(),cN(3582,` com informações sobre a tecla.`),ag()()(),Tl(3583,`tr`,16)(3584,`td`,17)(3585,`div`,25)(3586,`span`,26),cN(3587,` label`),Gl(3588,`br`),ag()()(),Tl(3589,`td`,21)(3590,`code`,27),cN(3591,`string`),ag()(),Tl(3592,`td`,24)(3593,`em`)(3594,`strong`),cN(3595,`(opcional)`),ag()(),Tl(3596,`p`),cN(3597,`Rótulo do campo exibido.`),ag(),Tl(3598,`p`),cN(3599,`Caso não seja informado, será utilizado como `),Tl(3600,`code`),cN(3601,`label`),ag(),cN(3602,` o valor da propriedade `),Tl(3603,`code`),cN(3604,`property`),ag(),cN(3605,` com a primeira letra em maiúsculo.`),ag()()(),Tl(3606,`tr`,16)(3607,`td`,17)(3608,`div`,25)(3609,`span`,26),cN(3610,` labelPosition`),Gl(3611,`br`),ag()()(),Tl(3612,`td`,21)(3613,`code`,60),cN(3614,`PoSwitchLabelPosition`),ag()(),Tl(3615,`td`,24)(3616,`em`)(3617,`strong`),cN(3618,`(opcional)`),ag()(),Tl(3619,`p`),cN(3620,`Posição de exibição do rótulo do PoSwitch.`),ag(),Tl(3621,`blockquote`)(3622,`p`),cN(3623,`Por padrão exibe à direita.`),ag()()()(),Tl(3624,`tr`,16)(3625,`td`,17)(3626,`div`,25)(3627,`span`,26),cN(3628,` listboxControlPosition`),Gl(3629,`br`),ag()()(),Tl(3630,`td`,21)(3631,`code`,61),cN(3632,`'top' `),ag(),Tl(3633,`code`,62),cN(3634,` 'bottom'`),ag()(),Tl(3635,`td`,24)(3636,`em`)(3637,`strong`),cN(3638,`(opcional)`),ag()(),Tl(3639,`p`),cN(3640,`Define a direção preferida para exibição do `),Tl(3641,`code`),cN(3642,`listbox`),ag(),cN(3643,` em relação ao campo (`),Tl(3644,`code`),cN(3645,`top`),ag(),cN(3646,` ou `),Tl(3647,`code`),cN(3648,`bottom`),ag(),cN(3649,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ag(),Tl(3650,`p`)(3651,`strong`),cN(3652,`Componentes compatíveis:`),ag(),Tl(3653,`code`),cN(3654,`po-multiselect`),ag(),cN(3655,`, `),Tl(3656,`code`),cN(3657,`po-combo`),ag(),cN(3658,`.`),ag()()(),Tl(3659,`tr`,16)(3660,`td`,17)(3661,`div`,25)(3662,`span`,26),cN(3663,` literals`),Gl(3664,`br`),ag()()(),Tl(3665,`td`,21)(3666,`code`,36),cN(3667,`PoLookupLiterals `),ag(),Tl(3668,`code`,63),cN(3669,` PoMultiselectLiterals `),ag(),Tl(3670,`code`,64),cN(3671,` PoComboLiterals `),ag(),Tl(3672,`code`,65),cN(3673,` PoDatepickerRangeLiterals `),ag(),Tl(3674,`code`,66),cN(3675,` PoUploadLiterals`),ag()(),Tl(3676,`td`,24)(3677,`em`)(3678,`strong`),cN(3679,`(opcional)`),ag()(),Tl(3680,`p`),cN(3681,`Objeto com as literais usadas para os seguintes componentes: `),Tl(3682,`code`),cN(3683,`po-lookup`),ag(),cN(3684,`, `),Tl(3685,`code`),cN(3686,`po-multiselect`),ag(),cN(3687,`, `),Tl(3688,`code`),cN(3689,`po-combo`),ag(),cN(3690,` e `),Tl(3691,`code`),cN(3692,`po-datepicker-range`),ag(),cN(3693,`.`),ag(),Tl(3694,`blockquote`)(3695,`p`),cN(3696,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),ag()(),Tl(3697,`p`)(3698,`strong`),cN(3699,`Componentes compatíveis:`),ag(),Tl(3700,`code`),cN(3701,`po-lookup`),ag(),cN(3702,`, `),Tl(3703,`code`),cN(3704,`po-multiselect`),ag(),cN(3705,`, `),Tl(3706,`code`),cN(3707,`po-combo`),ag(),cN(3708,`, `),Tl(3709,`code`),cN(3710,`po-datepicker-range`),ag()()()(),Tl(3711,`tr`,16)(3712,`td`,17)(3713,`div`,25)(3714,`span`,26),cN(3715,` loading`),Gl(3716,`br`),ag()()(),Tl(3717,`td`,21)(3718,`code`,29),cN(3719,`boolean`),ag()(),Tl(3720,`td`,24)(3721,`em`)(3722,`strong`),cN(3723,`(opcional)`),ag()(),Tl(3724,`p`),cN(3725,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),ag(),Tl(3726,`blockquote`)(3727,`p`),cN(3728,`Por padrão é `),Tl(3729,`code`),cN(3730,`false`),ag(),cN(3731,`.`),ag()(),Tl(3732,`p`)(3733,`strong`),cN(3734,`Componentes compatíveis:`),ag(),Tl(3735,`code`),cN(3736,`po-datepicker`),ag(),cN(3737,`, `),Tl(3738,`code`),cN(3739,`po-datepicker-range`),ag(),cN(3740,`, `),Tl(3741,`code`),cN(3742,`po-number`),ag(),cN(3743,`, `),Tl(3744,`code`),cN(3745,`po-decimal`),ag(),cN(3746,`,
`),Tl(3747,`code`),cN(3748,`po-input`),ag(),cN(3749,`, `),Tl(3750,`code`),cN(3751,`po-select`),ag(),cN(3752,`, `),Tl(3753,`code`),cN(3754,`po-switch`),ag(),cN(3755,`, `),Tl(3756,`code`),cN(3757,`po-combo`),ag(),cN(3758,`, `),Tl(3759,`code`),cN(3760,`po-lookup`),ag(),cN(3761,`, `),Tl(3762,`code`),cN(3763,`po-multiselect`),ag(),cN(3764,`,
`),Tl(3765,`code`),cN(3766,`po-textarea`),ag(),cN(3767,`, `),Tl(3768,`code`),cN(3769,`po-password`),ag(),cN(3770,`, `),Tl(3771,`code`),cN(3772,`po-upload`),ag(),cN(3773,`.`),ag()()(),Tl(3774,`tr`,16)(3775,`td`,17)(3776,`div`,25)(3777,`span`,26),cN(3778,` locale`),Gl(3779,`br`),ag()()(),Tl(3780,`td`,21)(3781,`code`,27),cN(3782,`string`),ag()(),Tl(3783,`td`,24)(3784,`em`)(3785,`strong`),cN(3786,`(opcional)`),ag()(),Tl(3787,`p`),cN(3788,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(3789,`a`,67)(3790,`code`),cN(3791,`I18n`),ag()()(),Tl(3792,`p`),cN(3793,`Exemplo de utilização:`),ag(),Tl(3794,`pre`)(3795,`code`),cN(3796,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ag()(),Tl(3797,`blockquote`)(3798,`p`),cN(3799,`Para ver quais linguagens suportadas acesse `),Tl(3800,`a`,67)(3801,`code`),cN(3802,`I18n`),ag()()()(),Tl(3803,`p`)(3804,`strong`),cN(3805,`Componentes compatíveis:`),ag(),Tl(3806,`code`),cN(3807,`po-datepicker`),ag(),cN(3808,`, `),Tl(3809,`code`),cN(3810,`po-decimal`),ag(),cN(3811,`, `),Tl(3812,`code`),cN(3813,`po-timepicker`),ag(),cN(3814,`.`),ag()()(),Tl(3815,`tr`,16)(3816,`td`,17)(3817,`div`,25)(3818,`span`,26),cN(3819,` mask`),Gl(3820,`br`),ag()()(),Tl(3821,`td`,21)(3822,`code`,27),cN(3823,`string`),ag()(),Tl(3824,`td`,24)(3825,`em`)(3826,`strong`),cN(3827,`(opcional)`),ag()(),Tl(3828,`p`),cN(3829,`Máscara para o campo.`),ag(),Tl(3830,`p`)(3831,`strong`),cN(3832,`Componente compatível:`),ag(),Tl(3833,`code`),cN(3834,`po-input`),ag(),cN(3835,`.`),ag(),Tl(3836,`blockquote`)(3837,`p`),cN(3838,`também é atribuído ao utilizar a propriedade `),Tl(3839,`code`),cN(3840,`type: time`),ag(),cN(3841,`.`),ag()(),Tl(3842,`blockquote`)(3843,`p`),cN(3844,`Incompatível com `),Tl(3845,`code`),cN(3846,`po-decimal`),ag(),cN(3847,`.`),ag()()()(),Tl(3848,`tr`,16)(3849,`td`,17)(3850,`div`,25)(3851,`span`,26),cN(3852,` maskFormatModel`),Gl(3853,`br`),ag()()(),Tl(3854,`td`,21)(3855,`code`,29),cN(3856,`boolean`),ag()(),Tl(3857,`td`,24)(3858,`em`)(3859,`strong`),cN(3860,`(opcional)`),ag()(),Tl(3861,`p`),cN(3862,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Tl(3863,`code`),cN(3864,`false`),ag(),cN(3865,`.`),ag(),Tl(3866,`p`)(3867,`strong`),cN(3868,`Componente compatível:`),ag(),Tl(3869,`code`),cN(3870,`po-input`),ag(),cN(3871,`.`),ag(),Tl(3872,`blockquote`)(3873,`p`),cN(3874,`também é atribuído ao utilizar a propriedade `),Tl(3875,`code`),cN(3876,`type: time`),ag(),cN(3877,`.`),ag()()()(),Tl(3878,`tr`,16)(3879,`td`,17)(3880,`div`,25)(3881,`span`,26),cN(3882,` maskNoLengthValidation`),Gl(3883,`br`),ag()()(),Tl(3884,`td`,21)(3885,`code`,29),cN(3886,`boolean`),ag()(),Tl(3887,`td`,24)(3888,`em`)(3889,`strong`),cN(3890,`(opcional)`),ag()(),Tl(3891,`p`),cN(3892,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(3893,`code`),cN(3894,`minLength`),ag(),cN(3895,`) e máximo (`),Tl(3896,`code`),cN(3897,`maxLength`),ag(),cN(3898,`) quando há uma máscara (`),Tl(3899,`code`),cN(3900,`p-mask`),ag(),cN(3901,`) definida.`),ag(),Tl(3902,`ul`)(3903,`li`),cN(3904,`Quando `),Tl(3905,`code`),cN(3906,`true`),ag(),cN(3907,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(3908,`li`),cN(3909,`Quando `),Tl(3910,`code`),cN(3911,`false`),ag(),cN(3912,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(3913,`p`)(3914,`strong`),cN(3915,`Componentes compatíveis:`),ag(),Tl(3916,`code`),cN(3917,`po-input`),ag(),cN(3918,`, `),Tl(3919,`code`),cN(3920,`po-decimal`),ag(),cN(3921,`.`),ag(),Tl(3922,`blockquote`)(3923,`p`),cN(3924,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(3925,`code`),cN(3926,`p-mask-format-model`),ag(),cN(3927,`.`),ag()(),Tl(3928,`p`),cN(3929,`Exemplo:`),ag(),Tl(3930,`pre`)(3931,`code`),cN(3932,`fields:Array<PoDynamicFormField> = [
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
`),ag()(),Tl(3933,`ul`)(3934,`li`),cN(3935,`Entrada: `),Tl(3936,`code`),cN(3937,`11.111.111/1111-11`),ag(),cN(3938,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),ag()()()(),Tl(3939,`tr`,16)(3940,`td`,17)(3941,`div`,25)(3942,`span`,26),cN(3943,` maxLength`),Gl(3944,`br`),ag()()(),Tl(3945,`td`,21)(3946,`code`,45),cN(3947,`number`),ag()(),Tl(3948,`td`,24)(3949,`em`)(3950,`strong`),cN(3951,`(opcional)`),ag()(),Tl(3952,`p`),cN(3953,`Tamanho máximo de caracteres.`),ag(),Tl(3954,`p`)(3955,`strong`),cN(3956,`Componentes compatíveis:`),ag(),Tl(3957,`code`),cN(3958,`po-input`),ag(),cN(3959,`, `),Tl(3960,`code`),cN(3961,`po-number`),ag(),cN(3962,`, `),Tl(3963,`code`),cN(3964,`po-decimal`),ag(),cN(3965,`, `),Tl(3966,`code`),cN(3967,`po-textarea`),ag(),cN(3968,`, `),Tl(3969,`code`),cN(3970,`po-password`),ag(),cN(3971,`.`),ag()()(),Tl(3972,`tr`,16)(3973,`td`,17)(3974,`div`,25)(3975,`span`,26),cN(3976,` maxTime`),Gl(3977,`br`),ag()()(),Tl(3978,`td`,21)(3979,`code`,27),cN(3980,`string`),ag()(),Tl(3981,`td`,24)(3982,`em`)(3983,`strong`),cN(3984,`(opcional)`),ag()(),Tl(3985,`p`),cN(3986,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3987,`code`),cN(3988,`HH:mm`),ag(),cN(3989,` ou `),Tl(3990,`code`),cN(3991,`HH:mm:ss`),ag(),cN(3992,`.`),ag(),Tl(3993,`p`)(3994,`strong`),cN(3995,`Componente compatível:`),ag(),Tl(3996,`code`),cN(3997,`po-datetimepicker`),ag(),cN(3998,`, `),Tl(3999,`code`),cN(4e3,`po-timepicker`),ag()()()(),Tl(4001,`tr`,16)(4002,`td`,17)(4003,`div`,25)(4004,`span`,26),cN(4005,` maxValue`),Gl(4006,`br`),ag()()(),Tl(4007,`td`,21)(4008,`code`,27),cN(4009,`string `),ag(),Tl(4010,`code`,45),cN(4011,` number`),ag()(),Tl(4012,`td`,24)(4013,`em`)(4014,`strong`),cN(4015,`(opcional)`),ag()(),Tl(4016,`p`),cN(4017,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Tl(4018,`em`),cN(4019,`number`),ag(),cN(4020,`, `),Tl(4021,`em`),cN(4022,`date`),ag(),cN(4023,`, `),Tl(4024,`em`),cN(4025,`dateTime`),ag(),cN(4026,` ou `),Tl(4027,`em`),cN(4028,`time`),ag(),cN(4029,`.`),ag(),Tl(4030,`blockquote`)(4031,`p`),cN(4032,`Para `),Tl(4033,`code`),cN(4034,`po-timepicker`),ag(),cN(4035,`, o valor deve estar no formato `),Tl(4036,`code`),cN(4037,`HH:mm`),ag(),cN(4038,` ou `),Tl(4039,`code`),cN(4040,`HH:mm:ss`),ag(),cN(4041,`.`),ag()(),Tl(4042,`p`)(4043,`strong`),cN(4044,`Componentes compatíveis:`),ag(),Tl(4045,`code`),cN(4046,`po-datepicker`),ag(),cN(4047,`, `),Tl(4048,`code`),cN(4049,`po-datepicker-range`),ag(),cN(4050,`, `),Tl(4051,`code`),cN(4052,`po-number`),ag(),cN(4053,`, `),Tl(4054,`code`),cN(4055,`po-decimal`),ag(),cN(4056,`, `),Tl(4057,`code`),cN(4058,`po-timepicker`),ag()()()(),Tl(4059,`tr`,16)(4060,`td`,17)(4061,`div`,25)(4062,`span`,26),cN(4063,` minLength`),Gl(4064,`br`),ag()()(),Tl(4065,`td`,21)(4066,`code`,45),cN(4067,`number`),ag()(),Tl(4068,`td`,24)(4069,`em`)(4070,`strong`),cN(4071,`(opcional)`),ag()(),Tl(4072,`p`),cN(4073,`Tamanho mínimo de caracteres.`),ag(),Tl(4074,`p`)(4075,`strong`),cN(4076,`Componentes compatíveis:`),ag(),Tl(4077,`code`),cN(4078,`po-input`),ag(),cN(4079,`, `),Tl(4080,`code`),cN(4081,`po-number`),ag(),cN(4082,`, `),Tl(4083,`code`),cN(4084,`po-decimal`),ag(),cN(4085,`, `),Tl(4086,`code`),cN(4087,`po-textarea`),ag(),cN(4088,`, `),Tl(4089,`code`),cN(4090,`po-password`),ag(),cN(4091,`.`),ag()()(),Tl(4092,`tr`,16)(4093,`td`,17)(4094,`div`,25)(4095,`span`,26),cN(4096,` minTime`),Gl(4097,`br`),ag()()(),Tl(4098,`td`,21)(4099,`code`,27),cN(4100,`string`),ag()(),Tl(4101,`td`,24)(4102,`em`)(4103,`strong`),cN(4104,`(opcional)`),ag()(),Tl(4105,`p`),cN(4106,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(4107,`code`),cN(4108,`HH:mm`),ag(),cN(4109,` ou `),Tl(4110,`code`),cN(4111,`HH:mm:ss`),ag(),cN(4112,`.`),ag(),Tl(4113,`p`)(4114,`strong`),cN(4115,`Componente compatível:`),ag(),Tl(4116,`code`),cN(4117,`po-datetimepicker`),ag(),cN(4118,`, `),Tl(4119,`code`),cN(4120,`po-timepicker`),ag()()()(),Tl(4121,`tr`,16)(4122,`td`,17)(4123,`div`,25)(4124,`span`,26),cN(4125,` minValue`),Gl(4126,`br`),ag()()(),Tl(4127,`td`,21)(4128,`code`,27),cN(4129,`string `),ag(),Tl(4130,`code`,45),cN(4131,` number`),ag()(),Tl(4132,`td`,24)(4133,`em`)(4134,`strong`),cN(4135,`(opcional)`),ag()(),Tl(4136,`p`),cN(4137,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Tl(4138,`em`),cN(4139,`number`),ag(),cN(4140,`, `),Tl(4141,`em`),cN(4142,`date`),ag(),cN(4143,`, `),Tl(4144,`em`),cN(4145,`dateTime`),ag(),cN(4146,` ou `),Tl(4147,`em`),cN(4148,`time`),ag(),cN(4149,`.`),ag(),Tl(4150,`blockquote`)(4151,`p`),cN(4152,`Para `),Tl(4153,`code`),cN(4154,`po-timepicker`),ag(),cN(4155,`, o valor deve estar no formato `),Tl(4156,`code`),cN(4157,`HH:mm`),ag(),cN(4158,` ou `),Tl(4159,`code`),cN(4160,`HH:mm:ss`),ag(),cN(4161,`.`),ag()(),Tl(4162,`p`)(4163,`strong`),cN(4164,`Componentes compatíveis:`),ag(),Tl(4165,`code`),cN(4166,`po-datepicker`),ag(),cN(4167,`, `),Tl(4168,`code`),cN(4169,`po-datepicker-range`),ag(),cN(4170,`, `),Tl(4171,`code`),cN(4172,`po-number`),ag(),cN(4173,`, `),Tl(4174,`code`),cN(4175,`po-decimal`),ag(),cN(4176,`, `),Tl(4177,`code`),cN(4178,`po-timepicker`),ag()()()(),Tl(4179,`tr`,16)(4180,`td`,17)(4181,`div`,25)(4182,`span`,26),cN(4183,` minuteInterval`),Gl(4184,`br`),ag()()(),Tl(4185,`td`,21)(4186,`code`,45),cN(4187,`number`),ag()(),Tl(4188,`td`,24)(4189,`em`)(4190,`strong`),cN(4191,`(opcional)`),ag()(),Tl(4192,`p`),cN(4193,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),ag()()(),Tl(4194,`tr`,16)(4195,`td`,17)(4196,`div`,25)(4197,`span`,26),cN(4198,` mode`),Gl(4199,`br`),ag()()(),Tl(4200,`td`,21)(4201,`code`,68),cN(4202,`'month-year' `),ag(),Tl(4203,`code`,69),cN(4204,` 'year'`),ag()(),Tl(4205,`td`,24)(4206,`em`)(4207,`strong`),cN(4208,`(opcional)`),ag()(),Tl(4209,`p`),cN(4210,`Define o modo de seleção do `),Tl(4211,`code`),cN(4212,`po-datepicker`),ag(),cN(4213,`.`),ag(),Tl(4214,`p`),cN(4215,`Valores aceitos:`),ag(),Tl(4216,`ul`)(4217,`li`)(4218,`code`),cN(4219,`'month-year'`),ag(),cN(4220,`: exibe seleção de mês e ano (formato `),Tl(4221,`code`),cN(4222,`MM/YYYY`),ag(),cN(4223,`)`),ag(),Tl(4224,`li`)(4225,`code`),cN(4226,`'year'`),ag(),cN(4227,`: exibe seleção apenas de ano (formato `),Tl(4228,`code`),cN(4229,`YYYY`),ag(),cN(4230,`)`),ag()(),Tl(4231,`p`)(4232,`strong`),cN(4233,`Componente compatível:`),ag(),Tl(4234,`code`),cN(4235,`po-datepicker`),ag()()()(),Tl(4236,`tr`,16)(4237,`td`,17)(4238,`div`,25)(4239,`span`,26),cN(4240,` modelFormat`),Gl(4241,`br`),ag()()(),Tl(4242,`td`,21)(4243,`code`,70),cN(4244,`PoTimepickerModelFormat`),ag()(),Tl(4245,`td`,24)(4246,`em`)(4247,`strong`),cN(4248,`(opcional)`),ag()(),Tl(4249,`p`),cN(4250,`Define o formato do valor do horário a ser utilizado no model do `),Tl(4251,`code`),cN(4252,`po-timepicker`),ag(),cN(4253,`.`),ag(),Tl(4254,`blockquote`)(4255,`p`),cN(4256,`Veja os valores válidos no `),Tl(4257,`code`),cN(4258,`PoTimepickerModelFormat`),ag(),cN(4259,`.`),ag()(),Tl(4260,`p`)(4261,`strong`),cN(4262,`Componente compatível:`),ag(),Tl(4263,`code`),cN(4264,`po-timepicker`),ag()()()(),Tl(4265,`tr`,16)(4266,`td`,17)(4267,`div`,25)(4268,`span`,26),cN(4269,` multiple`),Gl(4270,`br`),ag()()(),Tl(4271,`td`,21)(4272,`code`,29),cN(4273,`boolean`),ag()(),Tl(4274,`td`,24)(4275,`em`)(4276,`strong`),cN(4277,`(opcional)`),ag()(),Tl(4278,`p`),cN(4279,`Permite a seleção de múltiplos itens.`),ag(),Tl(4280,`p`)(4281,`strong`),cN(4282,`Componentes compatíveis:`),ag(),Tl(4283,`code`),cN(4284,`po-lookup`),ag(),cN(4285,`, `),Tl(4286,`code`),cN(4287,`po-upload`),ag()()()(),Tl(4288,`tr`,16)(4289,`td`,17)(4290,`div`,25)(4291,`span`,26),cN(4292,` noAutocomplete`),Gl(4293,`br`),ag()()(),Tl(4294,`td`,21)(4295,`code`,29),cN(4296,`boolean`),ag()(),Tl(4297,`td`,24)(4298,`em`)(4299,`strong`),cN(4300,`(opcional)`),ag()(),Tl(4301,`p`),cN(4302,`Define a propriedade nativa `),Tl(4303,`code`),cN(4304,`autocomplete`),ag(),cN(4305,` do campo como off.`),ag(),Tl(4306,`p`)(4307,`strong`),cN(4308,`Componentes compatíveis:`),ag(),Tl(4309,`code`),cN(4310,`po-datepicker`),ag(),cN(4311,`, `),Tl(4312,`code`),cN(4313,`po-datepicker-range`),ag(),cN(4314,`, `),Tl(4315,`code`),cN(4316,`po-input`),ag(),cN(4317,`, `),Tl(4318,`code`),cN(4319,`po-number`),ag(),cN(4320,`, `),Tl(4321,`code`),cN(4322,`po-decimal`),ag(),cN(4323,`,
`),Tl(4324,`code`),cN(4325,`po-lookup`),ag(),cN(4326,`, `),Tl(4327,`code`),cN(4328,`po-password`),ag(),cN(4329,`, `),Tl(4330,`code`),cN(4331,`po-timepicker`),ag(),cN(4332,`.`),ag()()(),Tl(4333,`tr`,16)(4334,`td`,17)(4335,`div`,25)(4336,`span`,26),cN(4337,` offsetColumns`),Gl(4338,`br`),ag()()(),Tl(4339,`td`,21)(4340,`code`,45),cN(4341,`number`),ag()(),Tl(4342,`td`,24)(4343,`em`)(4344,`strong`),cN(4345,`(opcional)`),ag()(),Tl(4346,`p`),cN(4347,`Tamanho do espaço de exibição do campo em telas.`),ag(),Tl(4348,`p`),cN(4349,`Deve ser usado o sistema de `),Tl(4350,`strong`),cN(4351,`grid`),ag(),cN(4352,` do PO (1 ... 12 colunas).`),ag(),Tl(4353,`blockquote`)(4354,`p`),cN(4355,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(4356,`tr`,16)(4357,`td`,17)(4358,`div`,25)(4359,`span`,26),cN(4360,` offsetLgColumns`),Gl(4361,`br`),ag()()(),Tl(4362,`td`,21)(4363,`code`,45),cN(4364,`number`),ag()(),Tl(4365,`td`,24)(4366,`em`)(4367,`strong`),cN(4368,`(opcional)`),ag()(),Tl(4369,`p`),cN(4370,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ag(),Tl(4371,`p`),cN(4372,`Deve ser usado o sistema de `),Tl(4373,`strong`),cN(4374,`grid`),ag(),cN(4375,` do PO (1 ... 12 colunas).`),ag(),Tl(4376,`blockquote`)(4377,`p`),cN(4378,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(4379,`code`),cN(4380,`offsetColumns`),ag(),cN(4381,`.`),ag()()()(),Tl(4382,`tr`,16)(4383,`td`,17)(4384,`div`,25)(4385,`span`,26),cN(4386,` offsetMdColumns`),Gl(4387,`br`),ag()()(),Tl(4388,`td`,21)(4389,`code`,45),cN(4390,`number`),ag()(),Tl(4391,`td`,24)(4392,`em`)(4393,`strong`),cN(4394,`(opcional)`),ag()(),Tl(4395,`p`),cN(4396,`Tamanho do espaço de exibição do campo em telas médias (md).`),ag(),Tl(4397,`p`),cN(4398,`Deve ser usado o sistema de `),Tl(4399,`strong`),cN(4400,`grid`),ag(),cN(4401,` do PO (1 ... 12 colunas).`),ag(),Tl(4402,`blockquote`)(4403,`p`),cN(4404,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(4405,`code`),cN(4406,`offsetColumns`),ag(),cN(4407,`.`),ag()()()(),Tl(4408,`tr`,16)(4409,`td`,17)(4410,`div`,25)(4411,`span`,26),cN(4412,` offsetSmColumns`),Gl(4413,`br`),ag()()(),Tl(4414,`td`,21)(4415,`code`,45),cN(4416,`number`),ag()(),Tl(4417,`td`,24)(4418,`em`)(4419,`strong`),cN(4420,`(opcional)`),ag()(),Tl(4421,`p`),cN(4422,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ag(),Tl(4423,`p`),cN(4424,`Deve ser usado o sistema de `),Tl(4425,`strong`),cN(4426,`grid`),ag(),cN(4427,` do PO (1 ... 12 colunas).`),ag(),Tl(4428,`blockquote`)(4429,`p`),cN(4430,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(4431,`code`),cN(4432,`offsetColumns`),ag(),cN(4433,`.`),ag()()()(),Tl(4434,`tr`,16)(4435,`td`,17)(4436,`div`,25)(4437,`span`,26),cN(4438,` offsetXlColumns`),Gl(4439,`br`),ag()()(),Tl(4440,`td`,21)(4441,`code`,45),cN(4442,`number`),ag()(),Tl(4443,`td`,24)(4444,`em`)(4445,`strong`),cN(4446,`(opcional)`),ag()(),Tl(4447,`p`),cN(4448,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ag(),Tl(4449,`p`),cN(4450,`Deve ser usado o sistema de `),Tl(4451,`strong`),cN(4452,`grid`),ag(),cN(4453,` do PO (1 ... 12 colunas).`),ag(),Tl(4454,`blockquote`)(4455,`p`),cN(4456,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(4457,`code`),cN(4458,`offsetColumns`),ag(),cN(4459,`.`),ag()()()(),Tl(4460,`tr`,16)(4461,`td`,17)(4462,`div`,25)(4463,`span`,26),cN(4464,` onError`),Gl(4465,`br`),ag()()(),Tl(4466,`td`,21)(4467,`code`,44),cN(4468,`Function`),ag()(),Tl(4469,`td`,24)(4470,`em`)(4471,`strong`),cN(4472,`(opcional)`),ag()(),Tl(4473,`p`),cN(4474,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ag(),Tl(4475,`blockquote`)(4476,`p`),cN(4477,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(4478,`code`),cN(4479,`HttpErrorResponse`),ag(),cN(4480,`.`),ag()(),Tl(4481,`p`)(4482,`strong`),cN(4483,`Componente compatível`),ag(),cN(4484,`: `),Tl(4485,`code`),cN(4486,`po-upload`),ag()()()(),Tl(4487,`tr`,16)(4488,`td`,17)(4489,`div`,25)(4490,`span`,26),cN(4491,` onSuccess`),Gl(4492,`br`),ag()()(),Tl(4493,`td`,21)(4494,`code`,44),cN(4495,`Function`),ag()(),Tl(4496,`td`,24)(4497,`em`)(4498,`strong`),cN(4499,`(opcional)`),ag()(),Tl(4500,`p`),cN(4501,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ag(),Tl(4502,`blockquote`)(4503,`p`),cN(4504,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(4505,`code`),cN(4506,`HttpResponse`),ag(),cN(4507,`.`),ag()(),Tl(4508,`p`)(4509,`strong`),cN(4510,`Componente compatível`),ag(),cN(4511,`: `),Tl(4512,`code`),cN(4513,`po-upload`),ag()()()(),Tl(4514,`tr`,16)(4515,`td`,17)(4516,`div`,25)(4517,`span`,26),cN(4518,` onUpload`),Gl(4519,`br`),ag()()(),Tl(4520,`td`,21)(4521,`code`,44),cN(4522,`Function`),ag()(),Tl(4523,`td`,24)(4524,`em`)(4525,`strong`),cN(4526,`(opcional)`),ag()(),Tl(4527,`p`),cN(4528,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ag(),Tl(4529,`pre`)(4530,`code`),cN(4531,`event.data = {id: 'id do usu\xE1rio'};
`),ag()(),Tl(4532,`p`)(4533,`strong`),cN(4534,`Componente compatível`),ag(),cN(4535,`: `),Tl(4536,`code`),cN(4537,`po-upload`),ag()()()(),Tl(4538,`tr`,16)(4539,`td`,17)(4540,`div`,25)(4541,`span`,26),cN(4542,` optional`),Gl(4543,`br`),ag()()(),Tl(4544,`td`,21)(4545,`code`,29),cN(4546,`boolean`),ag()(),Tl(4547,`td`,24)(4548,`em`)(4549,`strong`),cN(4550,`(opcional)`),ag()(),Tl(4551,`p`),cN(4552,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(4553,`blockquote`)(4554,`p`),cN(4555,`A indicação não será exibida, se:`),ag()(),Tl(4556,`ul`)(4557,`li`),cN(4558,`O campo for `),Tl(4559,`code`),cN(4560,`required`),ag(),cN(4561,`, ou;`),ag(),Tl(4562,`li`),cN(4563,`Não possuir `),Tl(4564,`code`),cN(4565,`help`),ag(),cN(4566,` e `),Tl(4567,`code`),cN(4568,`label`),ag(),cN(4569,`.`),ag()(),Tl(4570,`p`)(4571,`strong`),cN(4572,`Componentes compatíveis:`),ag(),Tl(4573,`code`),cN(4574,`po-datepicker`),ag(),cN(4575,`, `),Tl(4576,`code`),cN(4577,`po-datepicker-range`),ag(),cN(4578,`, `),Tl(4579,`code`),cN(4580,`po-timepicker`),ag(),cN(4581,`, `),Tl(4582,`code`),cN(4583,`po-input`),ag(),cN(4584,`, `),Tl(4585,`code`),cN(4586,`po-number`),ag(),cN(4587,`,
`),Tl(4588,`code`),cN(4589,`po-decimal`),ag(),cN(4590,`, `),Tl(4591,`code`),cN(4592,`po-select`),ag(),cN(4593,`, `),Tl(4594,`code`),cN(4595,`po-radio-group`),ag(),cN(4596,`, `),Tl(4597,`code`),cN(4598,`po-combo`),ag(),cN(4599,`, `),Tl(4600,`code`),cN(4601,`po-lookup`),ag(),cN(4602,`, `),Tl(4603,`code`),cN(4604,`po-checkbox-group`),ag(),cN(4605,`, `),Tl(4606,`code`),cN(4607,`po-multiselect`),ag(),cN(4608,`,
`),Tl(4609,`code`),cN(4610,`po-textarea`),ag(),cN(4611,`, `),Tl(4612,`code`),cN(4613,`po-password`),ag(),cN(4614,`.`),ag()()(),Tl(4615,`tr`,16)(4616,`td`,17)(4617,`div`,25)(4618,`span`,26),cN(4619,` options`),Gl(4620,`br`),ag()()(),Tl(4621,`td`,21)(4622,`code`,32),cN(4623,`Array<string> `),ag(),Tl(4624,`code`,71),cN(4625,` Array<PoSelectOption> `),ag(),Tl(4626,`code`,72),cN(4627,` Array<PoMultiselectOption> `),ag(),Tl(4628,`code`,73),cN(4629,` Array<PoCheckboxGroupOption> `),ag(),Tl(4630,`code`,74),cN(4631,` Array<any>`),ag()(),Tl(4632,`td`,24)(4633,`em`)(4634,`strong`),cN(4635,`(opcional)`),ag()(),Tl(4636,`p`),cN(4637,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),ag(),Tl(4638,`p`)(4639,`strong`),cN(4640,`Componentes compatíveis:`),ag(),Tl(4641,`code`),cN(4642,`po-select`),ag(),cN(4643,`, `),Tl(4644,`code`),cN(4645,`po-radio-group`),ag(),cN(4646,`, `),Tl(4647,`code`),cN(4648,`po-checkbox-group`),ag(),cN(4649,`, `),Tl(4650,`code`),cN(4651,`po-multiselect`),ag(),cN(4652,`.`),ag()()(),Tl(4653,`tr`,16)(4654,`td`,17)(4655,`div`,25)(4656,`span`,26),cN(4657,` optionsMulti`),Gl(4658,`br`),ag()()(),Tl(4659,`td`,21)(4660,`code`,29),cN(4661,`boolean`),ag()(),Tl(4662,`td`,24)(4663,`em`)(4664,`strong`),cN(4665,`(opcional)`),ag()(),Tl(4666,`p`),cN(4667,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),ag()()(),Tl(4668,`tr`,16)(4669,`td`,17)(4670,`div`,25)(4671,`span`,26),cN(4672,` optionsService`),Gl(4673,`br`),ag()()(),Tl(4674,`td`,21)(4675,`code`,27),cN(4676,`string `),ag(),Tl(4677,`code`,75),cN(4678,` PoComboFilter `),ag(),Tl(4679,`code`,76),cN(4680,` PoMultiselectFilter`),ag()(),Tl(4681,`td`,24)(4682,`em`)(4683,`strong`),cN(4684,`(opcional)`),ag()(),Tl(4685,`p`),cN(4686,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Tl(4687,`strong`),cN(4688,`Importante`),ag()(),Tl(4689,`blockquote`)(4690,`p`),cN(4691,`Para que funcione corretamente, é importante que o serviço siga o `),Tl(4692,`a`,7),cN(4693,`guia de API do PO UI`),ag(),cN(4694,`.`),ag()()()(),Tl(4695,`tr`,16)(4696,`td`,17)(4697,`div`,25)(4698,`span`,26),cN(4699,` order`),Gl(4700,`br`),ag()()(),Tl(4701,`td`,21)(4702,`code`,45),cN(4703,`number`),ag()(),Tl(4704,`td`,24)(4705,`em`)(4706,`strong`),cN(4707,`(opcional)`),ag()(),Tl(4708,`p`),cN(4709,`Informa a ordem de exibição do campo.`),ag(),Tl(4710,`p`),cN(4711,`Exemplo de utilização:`),ag(),Tl(4712,`p`)(4713,`code`),cN(4714,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),ag()(),Tl(4715,`p`),cN(4716,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(4717,`code`),cN(4718,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),ag()(),Tl(4719,`p`),cN(4720,`Só serão aceitos valores com números inteiros maiores do que zero.`),ag(),Tl(4721,`p`),cN(4722,`Campos sem `),Tl(4723,`code`),cN(4724,`order`),ag(),cN(4725,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ag()()(),Tl(4726,`tr`,16)(4727,`td`,17)(4728,`div`,25)(4729,`span`,26),cN(4730,` params`),Gl(4731,`br`),ag()()(),Tl(4732,`td`,21)(4733,`code`,33),cN(4734,`any`),ag()(),Tl(4735,`td`,24)(4736,`em`)(4737,`strong`),cN(4738,`(opcional)`),ag()(),Tl(4739,`p`),cN(4740,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Tl(4741,`code`),cN(4742,`po-lookup`),ag(),cN(4743,` e
`),Tl(4744,`code`),cN(4745,`po-combo`),ag(),cN(4746,`.`),ag(),Tl(4747,`p`),cN(4748,`Por exemplo, para o parâmetro `),Tl(4749,`code`),cN(4750,`{ age: 23 }`),ag(),cN(4751,` a URL da requisição ficaria:`),ag(),Tl(4752,`p`)(4753,`code`),cN(4754,`url + ?age=23&filter=Peter`),ag()()()(),Tl(4755,`tr`,16)(4756,`td`,17)(4757,`div`,25)(4758,`span`,26),cN(4759,` pattern`),Gl(4760,`br`),ag()()(),Tl(4761,`td`,21)(4762,`code`,27),cN(4763,`string`),ag()(),Tl(4764,`td`,24)(4765,`em`)(4766,`strong`),cN(4767,`(opcional)`),ag()(),Tl(4768,`p`),cN(4769,`Regex para validação do campo.`),ag(),Tl(4770,`p`)(4771,`strong`),cN(4772,`Componentes compatíveis:`),ag(),Tl(4773,`code`),cN(4774,`po-input`),ag(),cN(4775,`, `),Tl(4776,`code`),cN(4777,`po-password`),ag(),cN(4778,`.`),ag(),Tl(4779,`blockquote`)(4780,`p`),cN(4781,`Incompatível com `),Tl(4782,`code`),cN(4783,`po-decimal`),ag(),cN(4784,`.`),ag()()()(),Tl(4785,`tr`,16)(4786,`td`,17)(4787,`div`,25)(4788,`span`,26),cN(4789,` placeholder`),Gl(4790,`br`),ag()()(),Tl(4791,`td`,21)(4792,`code`,27),cN(4793,`string`),ag()(),Tl(4794,`td`,24)(4795,`em`)(4796,`strong`),cN(4797,`(opcional)`),ag()(),Tl(4798,`p`),cN(4799,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),ag(),Tl(4800,`p`)(4801,`strong`),cN(4802,`Componentes compatíveis:`),ag(),Tl(4803,`code`),cN(4804,`po-datepicker`),ag(),cN(4805,`, `),Tl(4806,`code`),cN(4807,`po-datepicker-range`),ag(),cN(4808,`, `),Tl(4809,`code`),cN(4810,`po-timepicker`),ag(),cN(4811,`, `),Tl(4812,`code`),cN(4813,`po-input`),ag(),cN(4814,`, `),Tl(4815,`code`),cN(4816,`po-number`),ag(),cN(4817,`, `),Tl(4818,`code`),cN(4819,`po-decimal`),ag(),cN(4820,`, `),Tl(4821,`code`),cN(4822,`po-select`),ag(),cN(4823,`, `),Tl(4824,`code`),cN(4825,`po-combo`),ag(),cN(4826,`, `),Tl(4827,`code`),cN(4828,`po-lookup`),ag(),cN(4829,`, `),Tl(4830,`code`),cN(4831,`po-multiselect`),ag(),cN(4832,`, `),Tl(4833,`code`),cN(4834,`po-textarea`),ag(),cN(4835,`, `),Tl(4836,`code`),cN(4837,`po-password`),ag(),cN(4838,`.`),ag()()(),Tl(4839,`tr`,16)(4840,`td`,17)(4841,`div`,25)(4842,`span`,26),cN(4843,` placeholderSearch`),Gl(4844,`br`),ag()()(),Tl(4845,`td`,21)(4846,`code`,27),cN(4847,`string`),ag()(),Tl(4848,`td`,24)(4849,`em`)(4850,`strong`),cN(4851,`(opcional)`),ag()(),Tl(4852,`p`),cN(4853,`Placeholder do campo de pesquisa do `),Tl(4854,`code`),cN(4855,`po-multiselect`),ag(),cN(4856,`.`),ag(),Tl(4857,`blockquote`)(4858,`p`),cN(4859,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ag()()()(),Tl(4860,`tr`,16)(4861,`td`,17)(4862,`div`,25)(4863,`span`,26),cN(4864,` property`),Gl(4865,`br`),ag()()(),Tl(4866,`td`,21)(4867,`code`,27),cN(4868,`string`),ag()(),Tl(4869,`td`,24)(4870,`p`),cN(4871,`Nome de referência do campo.`),ag()()(),Tl(4872,`tr`,16)(4873,`td`,17)(4874,`div`,25)(4875,`span`,26),cN(4876,` range`),Gl(4877,`br`),ag()()(),Tl(4878,`td`,21)(4879,`code`,29),cN(4880,`boolean`),ag()(),Tl(4881,`td`,24)(4882,`em`)(4883,`strong`),cN(4884,`(opcional)`),ag()(),Tl(4885,`p`),cN(4886,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),ag(),Tl(4887,`blockquote`)(4888,`p`),cN(4889,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),ag()()()(),Tl(4890,`tr`,16)(4891,`td`,17)(4892,`div`,25)(4893,`span`,26),cN(4894,` rangePresetOptions`),Gl(4895,`br`),ag()()(),Tl(4896,`td`,21)(4897,`code`,77),cN(4898,`Array<PoCalendarRangePreset>`),ag()(),Tl(4899,`td`,24)(4900,`em`)(4901,`strong`),cN(4902,`(opcional)`),ag()(),Tl(4903,`p`),cN(4904,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),ag(),Tl(4905,`p`),cN(4906,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Tl(4907,`code`),cN(4908,`PoCalendarRangePreset`),ag(),cN(4909,`.`),ag(),Tl(4910,`p`)(4911,`strong`),cN(4912,`Componente compatível:`),ag(),Tl(4913,`code`),cN(4914,`po-datepicker-range`),ag()()()(),Tl(4915,`tr`,16)(4916,`td`,17)(4917,`div`,25)(4918,`span`,26),cN(4919,` rangePresets`),Gl(4920,`br`),ag()()(),Tl(4921,`td`,21)(4922,`code`,29),cN(4923,`boolean `),ag(),Tl(4924,`code`,32),cN(4925,` Array<string>`),ag()(),Tl(4926,`td`,24)(4927,`em`)(4928,`strong`),cN(4929,`(opcional)`),ag()(),Tl(4930,`p`),cN(4931,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),ag(),Tl(4932,`p`),cN(4933,`Aceita os seguintes valores:`),ag(),Tl(4934,`ul`)(4935,`li`)(4936,`code`),cN(4937,`true`),ag(),cN(4938,`: exibe todos os presets padrão.`),ag(),Tl(4939,`li`)(4940,`code`),cN(4941,`false`),ag(),cN(4942,`: não exibe os presets padrão.`),ag(),Tl(4943,`li`)(4944,`code`),cN(4945,`Array<string>`),ag(),cN(4946,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),ag()(),Tl(4947,`p`)(4948,`strong`),cN(4949,`Componente compatível:`),ag(),Tl(4950,`code`),cN(4951,`po-datepicker-range`),ag()()()(),Tl(4952,`tr`,16)(4953,`td`,17)(4954,`div`,25)(4955,`span`,26),cN(4956,` rangePresetsOrder`),Gl(4957,`br`),ag()()(),Tl(4958,`td`,21)(4959,`code`,78),cN(4960,`'asc' `),ag(),Tl(4961,`code`,79),cN(4962,` 'desc'`),ag()(),Tl(4963,`td`,24)(4964,`em`)(4965,`strong`),cN(4966,`(opcional)`),ag()(),Tl(4967,`p`),cN(4968,`Define a ordenação dos presets na lista.`),ag(),Tl(4969,`p`),cN(4970,`Valores aceitos:`),ag(),Tl(4971,`ul`)(4972,`li`)(4973,`code`),cN(4974,`'asc'`),ag(),cN(4975,`: ordenação crescente (passado → futuro)`),ag(),Tl(4976,`li`)(4977,`code`),cN(4978,`'desc'`),ag(),cN(4979,`: ordenação decrescente (futuro → passado)`),ag()(),Tl(4980,`p`)(4981,`strong`),cN(4982,`Componente compatível:`),ag(),Tl(4983,`code`),cN(4984,`po-datepicker-range`),ag()()()(),Tl(4985,`tr`,16)(4986,`td`,17)(4987,`div`,25)(4988,`span`,26),cN(4989,` readonly`),Gl(4990,`br`),ag()()(),Tl(4991,`td`,21)(4992,`code`,29),cN(4993,`boolean`),ag()(),Tl(4994,`td`,24)(4995,`em`)(4996,`strong`),cN(4997,`(opcional)`),ag()(),Tl(4998,`p`),cN(4999,`Indica que o campo será somente leitura.`),ag(),Tl(5e3,`p`)(5001,`strong`),cN(5002,`Componentes compatíveis:`),ag(),Tl(5003,`code`),cN(5004,`po-datepicker`),ag(),cN(5005,`, `),Tl(5006,`code`),cN(5007,`po-datepicker-range`),ag(),cN(5008,`, `),Tl(5009,`code`),cN(5010,`po-timepicker`),ag(),cN(5011,`, `),Tl(5012,`code`),cN(5013,`po-input`),ag(),cN(5014,`, `),Tl(5015,`code`),cN(5016,`po-number`),ag(),cN(5017,`,
`),Tl(5018,`code`),cN(5019,`po-decimal`),ag(),cN(5020,`, `),Tl(5021,`code`),cN(5022,`po-select`),ag(),cN(5023,`, `),Tl(5024,`code`),cN(5025,`po-textarea`),ag(),cN(5026,`, `),Tl(5027,`code`),cN(5028,`po-password`),ag(),cN(5029,`.`),ag()()(),Tl(5030,`tr`,16)(5031,`td`,17)(5032,`div`,25)(5033,`span`,26),cN(5034,` removeInitialFilter`),Gl(5035,`br`),ag()()(),Tl(5036,`td`,21)(5037,`code`,29),cN(5038,`boolean`),ag()(),Tl(5039,`td`,24)(5040,`em`)(5041,`strong`),cN(5042,`(opcional)`),ag()(),Tl(5043,`p`),cN(5044,`Define que o filtro no primeiro clique será removido.`),ag(),Tl(5045,`blockquote`)(5046,`p`),cN(5047,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ag()(),Tl(5048,`p`)(5049,`strong`),cN(5050,`Componente compatível`),ag(),cN(5051,`: `),Tl(5052,`code`),cN(5053,`po-combo`),ag()()()(),Tl(5054,`tr`,16)(5055,`td`,17)(5056,`div`,25)(5057,`span`,26),cN(5058,` required`),Gl(5059,`br`),ag()()(),Tl(5060,`td`,21)(5061,`code`,29),cN(5062,`boolean`),ag()(),Tl(5063,`td`,24)(5064,`em`)(5065,`strong`),cN(5066,`(opcional)`),ag()(),Tl(5067,`p`),cN(5068,`Define a obrigatoriedade do campo.`),ag(),Tl(5069,`p`)(5070,`strong`),cN(5071,`Componentes compatíveis:`),ag(),Tl(5072,`code`),cN(5073,`po-datepicker`),ag(),cN(5074,`, `),Tl(5075,`code`),cN(5076,`po-datepicker-range`),ag(),cN(5077,`, `),Tl(5078,`code`),cN(5079,`po-timepicker`),ag(),cN(5080,`, `),Tl(5081,`code`),cN(5082,`po-input`),ag(),cN(5083,`, `),Tl(5084,`code`),cN(5085,`po-number`),ag(),cN(5086,`,
`),Tl(5087,`code`),cN(5088,`po-decimal`),ag(),cN(5089,`, `),Tl(5090,`code`),cN(5091,`po-select`),ag(),cN(5092,`, `),Tl(5093,`code`),cN(5094,`po-radio-group`),ag(),cN(5095,`, `),Tl(5096,`code`),cN(5097,`po-combo`),ag(),cN(5098,`, `),Tl(5099,`code`),cN(5100,`po-lookup`),ag(),cN(5101,`, `),Tl(5102,`code`),cN(5103,`po-checkbox-group`),ag(),cN(5104,`, `),Tl(5105,`code`),cN(5106,`po-multiselect`),ag(),cN(5107,`,
`),Tl(5108,`code`),cN(5109,`po-textarea`),ag(),cN(5110,`, `),Tl(5111,`code`),cN(5112,"po-password``, "),ag(),cN(5113,"po-upload`."),ag()()(),Tl(5114,`tr`,16)(5115,`td`,17)(5116,`div`,25)(5117,`span`,26),cN(5118,` requiredFieldErrorMessage`),Gl(5119,`br`),ag()()(),Tl(5120,`td`,21)(5121,`code`,29),cN(5122,`boolean`),ag()(),Tl(5123,`td`,24)(5124,`em`)(5125,`strong`),cN(5126,`(opcional)`),ag()(),Tl(5127,`p`),cN(5128,`Exibe a mensagem setada na propriedade `),Tl(5129,`code`),cN(5130,`errorMessage`),ag(),cN(5131,` se o campo estiver vazio e for requerido.`),ag(),Tl(5132,`blockquote`)(5133,`p`),cN(5134,`Necessário que a propriedade `),Tl(5135,`code`),cN(5136,`required`),ag(),cN(5137,` esteja habilitada.`),ag()(),Tl(5138,`p`)(5139,`strong`),cN(5140,`Componentes compatíveis:`),ag(),Tl(5141,`code`),cN(5142,`po-datepicker`),ag(),cN(5143,`, `),Tl(5144,`code`),cN(5145,`po-timepicker`),ag(),cN(5146,`, `),Tl(5147,`code`),cN(5148,`po-input`),ag(),cN(5149,`, `),Tl(5150,`code`),cN(5151,`po-number`),ag(),cN(5152,`, `),Tl(5153,`code`),cN(5154,`po-decimal`),ag(),cN(5155,`, `),Tl(5156,`code`),cN(5157,`po-password`),ag(),cN(5158,`.`),ag()()(),Tl(5159,`tr`,16)(5160,`td`,17)(5161,`div`,25)(5162,`span`,26),cN(5163,` restrictions`),Gl(5164,`br`),ag()()(),Tl(5165,`td`,21)(5166,`code`,80),cN(5167,`PoUploadFileRestrictions`),ag()(),Tl(5168,`td`,24)(5169,`em`)(5170,`strong`),cN(5171,`(opcional)`),ag()(),Tl(5172,`p`),cN(5173,`Objeto que segue a definição da interface `),Tl(5174,`code`),cN(5175,`PoUploadFileRestrictions`),ag(),cN(5176,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ag(),Tl(5177,`p`)(5178,`strong`),cN(5179,`Componente compatível`),ag(),cN(5180,`: `),Tl(5181,`code`),cN(5182,`po-upload`),ag()()()(),Tl(5183,`tr`,16)(5184,`td`,17)(5185,`div`,25)(5186,`span`,26),cN(5187,` rows`),Gl(5188,`br`),ag()()(),Tl(5189,`td`,21)(5190,`code`,45),cN(5191,`number`),ag()(),Tl(5192,`td`,24)(5193,`em`)(5194,`strong`),cN(5195,`(opcional)`),ag()(),Tl(5196,`p`),cN(5197,`Quantidade de linhas exibidas no `),Tl(5198,`code`),cN(5199,`po-textarea`),ag(),cN(5200,`.`),ag()()(),Tl(5201,`tr`,16)(5202,`td`,17)(5203,`div`,25)(5204,`span`,26),cN(5205,` searchService`),Gl(5206,`br`),ag()()(),Tl(5207,`td`,21)(5208,`code`,27),cN(5209,`string `),ag(),Tl(5210,`code`,34),cN(5211,` PoLookupFilter`),ag()(),Tl(5212,`td`,24)(5213,`em`)(5214,`strong`),cN(5215,`(opcional)`),ag()(),Tl(5216,`p`),cN(5217,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Tl(5218,`code`),cN(5219,`columns`),ag(),cN(5220,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(5221,`strong`),cN(5222,`Importante:`),ag()(),Tl(5223,`blockquote`)(5224,`p`),cN(5225,`Caso utilizar a propriedade `),Tl(5226,`code`),cN(5227,`optionsService`),ag(),cN(5228,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(5229,`a`,7),cN(5230,`guia de API do PO UI`),ag(),cN(5231,`.`),ag()()()(),Tl(5232,`tr`,16)(5233,`td`,17)(5234,`div`,25)(5235,`span`,26),cN(5236,` secondInterval`),Gl(5237,`br`),ag()()(),Tl(5238,`td`,21)(5239,`code`,45),cN(5240,`number`),ag()(),Tl(5241,`td`,24)(5242,`em`)(5243,`strong`),cN(5244,`(opcional)`),ag()(),Tl(5245,`p`),cN(5246,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),ag()()(),Tl(5247,`tr`,16)(5248,`td`,17)(5249,`div`,25)(5250,`span`,26),cN(5251,` secret`),Gl(5252,`br`),ag()()(),Tl(5253,`td`,21)(5254,`code`,29),cN(5255,`boolean`),ag()(),Tl(5256,`td`,24)(5257,`em`)(5258,`strong`),cN(5259,`(opcional)`),ag()(),Tl(5260,`p`),cN(5261,`Esconde a informação estilo `),Tl(5262,`em`),cN(5263,`password`),ag(),cN(5264,`, pode ser utilizado quando o tipo de dado for `),Tl(5265,`em`),cN(5266,`string`),ag(),cN(5267,`.`),ag()()(),Tl(5268,`tr`,16)(5269,`td`,17)(5270,`div`,25)(5271,`span`,26),cN(5272,` showRequired`),Gl(5273,`br`),ag()()(),Tl(5274,`td`,21)(5275,`code`,29),cN(5276,`boolean`),ag()(),Tl(5277,`td`,24)(5278,`em`)(5279,`strong`),cN(5280,`(opcional)`),ag()(),Tl(5281,`p`),cN(5282,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(5283,`blockquote`)(5284,`p`),cN(5285,`Não será exibida a indicação se:`),ag()(),Tl(5286,`ul`)(5287,`li`),cN(5288,`Não possuir `),Tl(5289,`code`),cN(5290,`p-help`),ag(),cN(5291,` e/ou `),Tl(5292,`code`),cN(5293,`p-label`),ag(),cN(5294,`.`),ag()(),Tl(5295,`p`)(5296,`strong`),cN(5297,`Componentes compatíveis:`),ag(),Tl(5298,`code`),cN(5299,`po-datepicker`),ag(),cN(5300,`, `),Tl(5301,`code`),cN(5302,`po-datepicker-range`),ag(),cN(5303,`, `),Tl(5304,`code`),cN(5305,`po-timepicker`),ag(),cN(5306,`, `),Tl(5307,`code`),cN(5308,`po-input`),ag(),cN(5309,`, `),Tl(5310,`code`),cN(5311,`po-number`),ag(),cN(5312,`,
`),Tl(5313,`code`),cN(5314,`po-decimal`),ag(),cN(5315,`, `),Tl(5316,`code`),cN(5317,`po-select`),ag(),cN(5318,`, `),Tl(5319,`code`),cN(5320,`po-radio-group`),ag(),cN(5321,`, `),Tl(5322,`code`),cN(5323,`po-combo`),ag(),cN(5324,`, `),Tl(5325,`code`),cN(5326,`po-lookup`),ag(),cN(5327,`, `),Tl(5328,`code`),cN(5329,`po-checkbox-group`),ag(),cN(5330,`, `),Tl(5331,`code`),cN(5332,`po-multiselect`),ag(),cN(5333,`,
`),Tl(5334,`code`),cN(5335,`po-textarea`),ag(),cN(5336,`, `),Tl(5337,`code`),cN(5338,`po-password`),ag(),cN(5339,`, `),Tl(5340,`code`),cN(5341,`po-upload`),ag(),cN(5342,`.`),ag()()(),Tl(5343,`tr`,16)(5344,`td`,17)(5345,`div`,25)(5346,`span`,26),cN(5347,` showSeconds`),Gl(5348,`br`),ag()()(),Tl(5349,`td`,21)(5350,`code`,29),cN(5351,`boolean`),ag()(),Tl(5352,`td`,24)(5353,`em`)(5354,`strong`),cN(5355,`(opcional)`),ag()(),Tl(5356,`p`),cN(5357,`Exibe a coluna de segundos no painel do timepicker.`),ag()()(),Tl(5358,`tr`,16)(5359,`td`,17)(5360,`div`,25)(5361,`span`,26),cN(5362,` showThumbnail`),Gl(5363,`br`),ag()()(),Tl(5364,`td`,21)(5365,`code`,29),cN(5366,`boolean`),ag()(),Tl(5367,`td`,24)(5368,`em`)(5369,`strong`),cN(5370,`(opcional)`),ag()(),Tl(5371,`p`),cN(5372,`Exibe a pré-visualização de imagens ao anexá-las.`),ag(),Tl(5373,`blockquote`)(5374,`p`),cN(5375,`Propriedade funciona apenas em arquivos de formato de imagem (`),Tl(5376,`code`),cN(5377,`.png`),ag(),cN(5378,`, `),Tl(5379,`code`),cN(5380,`.jpg`),ag(),cN(5381,`, `),Tl(5382,`code`),cN(5383,`.jpeg`),ag(),cN(5384,` e `),Tl(5385,`code`),cN(5386,`.gif`),ag(),cN(5387,`).`),ag()(),Tl(5388,`p`)(5389,`strong`),cN(5390,`Componente compatível`),ag(),cN(5391,`: `),Tl(5392,`code`),cN(5393,`po-upload`),ag()()()(),Tl(5394,`tr`,16)(5395,`td`,17)(5396,`div`,25)(5397,`span`,26),cN(5398,` size`),Gl(5399,`br`),ag()()(),Tl(5400,`td`,21)(5401,`code`,27),cN(5402,`string`),ag()(),Tl(5403,`td`,24)(5404,`em`)(5405,`strong`),cN(5406,`(opcional)`),ag()(),Tl(5407,`p`),cN(5408,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),ag(),Tl(5409,`ul`)(5410,`li`)(5411,`code`),cN(5412,`small`),ag(),cN(5413,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(5414,`li`)(5415,`code`),cN(5416,`medium`),ag(),cN(5417,`: aplica a medida medium de cada componente.`),ag(),Tl(5418,`li`)(5419,`code`),cN(5420,`large`),ag(),cN(5421,`: aplica a medida large de cada componente (disponível para `),Tl(5422,`code`),cN(5423,`po-checkbox`),ag(),cN(5424,` e `),Tl(5425,`code`),cN(5426,`po-radio-group`),ag(),cN(5427,`).`),Tl(5428,`blockquote`)(5429,`p`),cN(5430,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(5431,`code`),cN(5432,`medium`),ag(),cN(5433,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(5434,`a`,40),cN(5435,`po-theme`),ag(),cN(5436,`.`),ag()()()()()(),Tl(5437,`tr`,16)(5438,`td`,17)(5439,`div`,25)(5440,`span`,26),cN(5441,` sort`),Gl(5442,`br`),ag()()(),Tl(5443,`td`,21)(5444,`code`,29),cN(5445,`boolean`),ag()(),Tl(5446,`td`,24)(5447,`em`)(5448,`strong`),cN(5449,`(opcional)`),ag()(),Tl(5450,`p`),cN(5451,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ag(),Tl(5452,`p`)(5453,`strong`),cN(5454,`Componentes compatíveis:`),ag(),Tl(5455,`code`),cN(5456,`po-combo`),ag(),cN(5457,`, po-multiselect`),ag()()(),Tl(5458,`tr`,16)(5459,`td`,17)(5460,`div`,25)(5461,`span`,26),cN(5462,` step`),Gl(5463,`br`),ag()()(),Tl(5464,`td`,21)(5465,`code`,45),cN(5466,`number`),ag()(),Tl(5467,`td`,24)(5468,`em`)(5469,`strong`),cN(5470,`(opcional)`),ag()(),Tl(5471,`p`),cN(5472,`Intervalo utilizado no `),Tl(5473,`code`),cN(5474,`po-number`),ag(),cN(5475,`.`),ag()()(),Tl(5476,`tr`,16)(5477,`td`,17)(5478,`div`,25)(5479,`span`,26),cN(5480,` thousandMaxlength`),Gl(5481,`br`),ag()()(),Tl(5482,`td`,21)(5483,`code`,45),cN(5484,`number`),ag()(),Tl(5485,`td`,24)(5486,`em`)(5487,`strong`),cN(5488,`(opcional)`),ag()(),Tl(5489,`p`),cN(5490,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),ag(),Tl(5491,`blockquote`)(5492,`p`),cN(5493,`Esta propriedade só pode ser utilizada quando o `),Tl(5494,`code`),cN(5495,`type`),ag(),cN(5496,` for `),Tl(5497,`em`),cN(5498,`currency`),ag(),cN(5499,` ou `),Tl(5500,`em`),cN(5501,`decimal`),ag(),cN(5502,`.`),ag()(),Tl(5503,`blockquote`)(5504,`p`),cN(5505,`Quando utilizado com `),Tl(5506,`code`),cN(5507,`displayFormat`),ag(),cN(5508,`, será respeitado o valor `),Tl(5509,`strong`),cN(5510,`mais restritivo`),ag(),cN(5511,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),ag()()()(),Tl(5512,`tr`,16)(5513,`td`,17)(5514,`div`,25)(5515,`span`,26),cN(5516,` type`),Gl(5517,`br`),ag()()(),Tl(5518,`td`,21)(5519,`code`,27),cN(5520,`string `),ag(),Tl(5521,`code`,81),cN(5522,` PoDynamicFieldType`),ag()(),Tl(5523,`td`,24)(5524,`em`)(5525,`strong`),cN(5526,`(opcional)`),ag()(),Tl(5527,`p`),cN(5528,`Tipo do valor campo.`),ag(),Tl(5529,`p`),cN(5530,`Valores válidos:`),ag(),Tl(5531,`ul`)(5532,`li`)(5533,`code`),cN(5534,`boolean`),ag(),cN(5535,`: Valores `),Tl(5536,`em`),cN(5537,`booleanos`),ag(),cN(5538,`.`),ag(),Tl(5539,`li`)(5540,`code`),cN(5541,`currency`),ag(),cN(5542,`: Valores monetários.`),ag(),Tl(5543,`li`)(5544,`code`),cN(5545,`decimal`),ag(),cN(5546,`: Valores decimais.`),ag(),Tl(5547,`li`)(5548,`code`),cN(5549,`date`),ag(),cN(5550,`: Valores de datas.`),Tl(5551,`ul`)(5552,`li`),cN(5553,`Aceita os tipos `),Tl(5554,`strong`),cN(5555,`string`),ag(),cN(5556,` e `),Tl(5557,`strong`),cN(5558,`Date`),ag(),cN(5559,` padr\xE3o do Javascript,
por exemplo: `),Tl(5560,`code`),cN(5561,`'2017-11-28'`),ag(),cN(5562,` ou `),Tl(5563,`code`),cN(5564,`new Date(2017, 10, 28)`),ag(),cN(5565,`.`),ag()()(),Tl(5566,`li`)(5567,`code`),cN(5568,`dateTime`),ag(),cN(5569,`: Valor de data com horário.`),Tl(5570,`ul`)(5571,`li`),cN(5572,`Aceita o tipo `),Tl(5573,`em`),cN(5574,`string`),ag(),cN(5575,` no formato `),Tl(5576,`strong`),cN(5577,`ISO-8601`),ag(),cN(5578,` extendido `),Tl(5579,`strong`),cN(5580,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ag(),cN(5581,`
e o tipo `),Tl(5582,`strong`),cN(5583,`Date`),ag(),cN(5584,` padrão do Javascript, por exemplo: `),Tl(5585,`code`),cN(5586,`'2017-11-28T00:00:00-02:00'`),ag(),cN(5587,` ou `),Tl(5588,`code`),cN(5589,`new Date(2017, 10, 28)`),ag(),cN(5590,`.`),ag()()(),Tl(5591,`li`)(5592,`code`),cN(5593,`number`),ag(),cN(5594,`: Valores numéricos.`),ag(),Tl(5595,`li`)(5596,`code`),cN(5597,`string`),ag(),cN(5598,`: Textos.`),ag(),Tl(5599,`li`)(5600,`code`),cN(5601,`time`),ag(),cN(5602,`: Valor do horário.`),Tl(5603,`ul`)(5604,`li`),cN(5605,`Aceita o tipo `),Tl(5606,`strong`),cN(5607,`string`),ag(),cN(5608,` nos formatos `),Tl(5609,`strong`),cN(5610,`'HH:mm:ss'`),ag(),cN(5611,` ou `),Tl(5612,`strong`),cN(5613,`'HH:mm:ss.ffffff'`),ag(),cN(5614,`, por exemplo: `),Tl(5615,`code`),cN(5616,`'23:12:45'`),ag(),cN(5617,`.`),ag()()()()()(),Tl(5618,`tr`,16)(5619,`td`,17)(5620,`div`,25)(5621,`span`,26),cN(5622,` url`),Gl(5623,`br`),ag()()(),Tl(5624,`td`,21)(5625,`code`,27),cN(5626,`string`),ag()(),Tl(5627,`td`,24)(5628,`em`)(5629,`strong`),cN(5630,`(opcional)`),ag()(),Tl(5631,`p`),cN(5632,`URL que deve ser feita a requisição com os arquivos selecionados.`),ag(),Tl(5633,`p`)(5634,`strong`),cN(5635,`Componente compatível`),ag(),cN(5636,`: `),Tl(5637,`code`),cN(5638,`po-upload`),ag()()()(),Tl(5639,`tr`,16)(5640,`td`,17)(5641,`div`,25)(5642,`span`,26),cN(5643,` validate`),Gl(5644,`br`),ag()()(),Tl(5645,`td`,21)(5646,`code`,27),cN(5647,`string `),ag(),Tl(5648,`code`,44),cN(5649,` Function`),ag()(),Tl(5650,`td`,24)(5651,`em`)(5652,`strong`),cN(5653,`(opcional)`),ag()(),Tl(5654,`p`),cN(5655,`Função ou serviço para validar as `),Tl(5656,`strong`),cN(5657,`mudanças do campo`),ag(),cN(5658,`.`),ag(),Tl(5659,`ul`)(5660,`li`),cN(5661,`A propriedade aceita os seguintes tipos:`),ag()(),Tl(5662,`ul`)(5663,`li`)(5664,`strong`),cN(5665,`String`),ag(),cN(5666,`: Endpoint usado pelo componente para requisição via `),Tl(5667,`code`),cN(5668,`POST`),ag(),cN(5669,`.`),ag(),Tl(5670,`li`)(5671,`strong`),cN(5672,`Function`),ag(),cN(5673,`: Método que será executado.`),ag()(),Tl(5674,`p`),cN(5675,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(5676,`code`),cN(5677,`PoDynamicFormFieldChanged`),ag(),cN(5678,`:`),ag(),Tl(5679,`p`)(5680,`code`),cN(5681,`{ property: 'property name', value: 'new value' }`),ag()(),Tl(5682,`p`),cN(5683,`O retorno desta função deve ser do tipo `),Tl(5684,`a`,82),cN(5685,`PoDynamicFormFieldValidation`),ag(),cN(5686,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ag(),Tl(5687,`pre`)(5688,`code`),cN(5689,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ag()(),Tl(5690,`p`),cN(5691,`Para referenciar a sua função utilize a propriedade `),Tl(5692,`code`),cN(5693,`bind`),ag(),cN(5694,`, por exemplo:
`),Tl(5695,`code`),cN(5696,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),ag()()()(),Tl(5697,`tr`,16)(5698,`td`,17)(5699,`div`,25)(5700,`span`,26),cN(5701,` visible`),Gl(5702,`br`),ag()()(),Tl(5703,`td`,21)(5704,`code`,29),cN(5705,`boolean`),ag()(),Tl(5706,`td`,24)(5707,`em`)(5708,`strong`),cN(5709,`(opcional)`),ag()(),Tl(5710,`p`),cN(5711,`Indica se o campo será visível.`),ag()()(),Tl(5712,`tr`,16)(5713,`td`,17)(5714,`div`,25)(5715,`span`,26),cN(5716,` yearRangeLimit`),Gl(5717,`br`),ag()()(),Tl(5718,`td`,21)(5719,`code`,45),cN(5720,`number`),ag()(),Tl(5721,`td`,24)(5722,`em`)(5723,`strong`),cN(5724,`(opcional)`),ag()(),Tl(5725,`p`),cN(5726,`Define o limite de anos exibidos na lista de anos do `),Tl(5727,`code`),cN(5728,`po-datepicker`),ag(),cN(5729,` nos modos `),Tl(5730,`code`),cN(5731,`month-year`),ag(),cN(5732,` e `),Tl(5733,`code`),cN(5734,`year`),ag(),cN(5735,`.`),ag()()()(),Tl(5736,`h4`,43)(5737,`code`,5),cN(5738,`PoLookupColumn`),ag()(),Tl(5739,`div`,2)(5740,`p`),cN(5741,`Interface para configuração das colunas do po-lookup.`),ag()(),Tl(5742,`h4`,12),cN(5743,`Propriedades`),ag(),Tl(5744,`table`,13)(5745,`tr`,14)(5746,`th`,15),cN(5747,`Nome`),ag(),Tl(5748,`th`,15),cN(5749,`Tipo`),ag(),Tl(5750,`th`,15),cN(5751,`Descrição`),ag()(),Tl(5752,`tr`,16)(5753,`td`,17)(5754,`div`,25)(5755,`span`,26),cN(5756,` fieldLabel`),Gl(5757,`br`),ag()()(),Tl(5758,`td`,21)(5759,`code`,29),cN(5760,`boolean`),ag()(),Tl(5761,`td`,24)(5762,`em`)(5763,`strong`),cN(5764,`(opcional)`),ag()(),Tl(5765,`p`),cN(5766,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),ag(),Tl(5767,`p`),cN(5768,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),ag(),Tl(5769,`p`),cN(5770,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Tl(5771,`code`),cN(5772,`p-field-format`),ag(),cN(5773,` ou `),Tl(5774,`code`),cN(5775,`p-field-label`),ag(),cN(5776,` forem configurados no componente.`),ag()()(),Tl(5777,`tr`,16)(5778,`td`,17)(5779,`div`,25)(5780,`span`,26),cN(5781,` format`),Gl(5782,`br`),ag()()(),Tl(5783,`td`,21)(5784,`code`,27),cN(5785,`string`),ag()(),Tl(5786,`td`,24)(5787,`em`)(5788,`strong`),cN(5789,`(opcional)`),ag()(),Tl(5790,`p`),cN(5791,`Formato de exibição do valor da coluna:`),ag(),Tl(5792,`ul`)(5793,`li`),cN(5794,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),ag(),Tl(5795,`li`),cN(5796,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ag()()()(),Tl(5797,`tr`,16)(5798,`td`,17)(5799,`div`,25)(5800,`span`,26),cN(5801,` label`),Gl(5802,`br`),ag()()(),Tl(5803,`td`,21)(5804,`code`,27),cN(5805,`string`),ag()(),Tl(5806,`td`,24)(5807,`em`)(5808,`strong`),cN(5809,`(opcional)`),ag()(),Tl(5810,`p`),cN(5811,`Texto para título da coluna.`),ag(),Tl(5812,`p`),cN(5813,`Caso não seja informado, será utilizado como `),Tl(5814,`em`),cN(5815,`label`),ag(),cN(5816,` o valor da propriedade `),Tl(5817,`em`),cN(5818,`property`),ag(),cN(5819,` com a primeira letra em maiúsculo.`),ag()()(),Tl(5820,`tr`,16)(5821,`td`,17)(5822,`div`,25)(5823,`span`,26),cN(5824,` mask`),Gl(5825,`br`),ag()()(),Tl(5826,`td`,21)(5827,`code`,27),cN(5828,`string`),ag()(),Tl(5829,`td`,24)(5830,`em`)(5831,`strong`),cN(5832,`(opcional)`),ag()(),Tl(5833,`p`),cN(5834,`Define uma máscara para formatação do valor exibido na coluna.`),ag(),Tl(5835,`p`),cN(5836,`A máscara é aplicada somente para `),Tl(5837,`strong`),cN(5838,`exibição`),ag(),cN(5839,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),ag(),Tl(5840,`p`),cN(5841,`Caracteres válidos para a máscara:`),ag(),Tl(5842,`ul`)(5843,`li`)(5844,`code`),cN(5845,`9`),ag(),cN(5846,` : aceita um dígito numérico (0-9).`),ag(),Tl(5847,`li`)(5848,`code`),cN(5849,`@`),ag(),cN(5850,` : aceita um caractere alfabético (a-z, A-Z).`),ag(),Tl(5851,`li`)(5852,`code`),cN(5853,`w`),ag(),cN(5854,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),ag(),Tl(5855,`li`),cN(5856,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Tl(5857,`code`),cN(5858,`.`),ag(),cN(5859,`, `),Tl(5860,`code`),cN(5861,`-`),ag(),cN(5862,`, `),Tl(5863,`code`),cN(5864,`/`),ag(),cN(5865,`, `),Tl(5866,`code`),cN(5867,`(`),ag(),cN(5868,`, `),Tl(5869,`code`),cN(5870,`)`),ag(),cN(5871,`, `),Tl(5872,`code`),cN(5873,`+`),ag(),cN(5874,`, `),Gl(5875,`code`),cN(5876,`).`),ag()(),Tl(5877,`p`),cN(5878,`Exemplos de uso:`),ag(),Tl(5879,`pre`)(5880,`code`),cN(5881,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),ag()(),Tl(5882,`blockquote`)(5883,`p`),cN(5884,`Esta propriedade é utilizada apenas para colunas do tipo `),Tl(5885,`code`),cN(5886,`string`),ag(),cN(5887,` (padr\xE3o).
Caso a coluna possua um `),Tl(5888,`code`),cN(5889,`type`),ag(),cN(5890,` diferente de `),Tl(5891,`code`),cN(5892,`string`),ag(),cN(5893,`, a máscara será ignorada.`),ag()()()(),Tl(5894,`tr`,16)(5895,`td`,17)(5896,`div`,25)(5897,`span`,26),cN(5898,` property`),Gl(5899,`br`),ag()()(),Tl(5900,`td`,21)(5901,`code`,27),cN(5902,`string`),ag()(),Tl(5903,`td`,24)(5904,`em`)(5905,`strong`),cN(5906,`(opcional)`),ag()(),Tl(5907,`p`),cN(5908,`Nome identificador da coluna.`),ag()()(),Tl(5909,`tr`,16)(5910,`td`,17)(5911,`div`,25)(5912,`span`,26),cN(5913,` type`),Gl(5914,`br`),ag()()(),Tl(5915,`td`,21)(5916,`code`,27),cN(5917,`string`),ag()(),Tl(5918,`td`,24)(5919,`em`)(5920,`strong`),cN(5921,`(opcional)`),ag()(),Tl(5922,`p`),cN(5923,`Tipo da coluna:`),ag(),Tl(5924,`ul`)(5925,`li`),cN(5926,`string (padrão): textos`),ag(),Tl(5927,`li`),cN(5928,`number: valores numéricos`),ag(),Tl(5929,`li`),cN(5930,`date: data`),ag(),Tl(5931,`li`),cN(5932,`currency: valores monetários`),ag(),Tl(5933,`li`),cN(5934,`dateTime: data e hora`),ag()()()(),Tl(5935,`tr`,16)(5936,`td`,17)(5937,`div`,25)(5938,`span`,26),cN(5939,` width`),Gl(5940,`br`),ag()()(),Tl(5941,`td`,21)(5942,`code`,27),cN(5943,`string`),ag()(),Tl(5944,`td`,24)(5945,`em`)(5946,`strong`),cN(5947,`(opcional)`),ag()(),Tl(5948,`p`),cN(5949,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),ag()()()(),Tl(5950,`h4`,43)(5951,`code`,5),cN(5952,`PoLookupFilter`),ag()(),Tl(5953,`div`,2)(5954,`p`),cN(5955,`Define o tipo de busca utilizado no po-lookup.`),ag()(),Tl(5956,`h4`,12),cN(5957,`Métodos`),ag(),Tl(5958,`table`,41)(5959,`tr`,16)(5960,`th`,42)(5961,`div`,25)(5962,`h4`)(5963,`span`,26),cN(5964,` getFilteredItems `),ag()()()()(),Tl(5965,`tr`,24)(5966,`td`,24)(5967,`p`),cN(5968,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Tl(5969,`em`),cN(5970,`Observable`),ag(),cN(5971,` com a resposta da API no formato da interface `),Tl(5972,`code`),cN(5973,`PoLookupResponseApi`),ag(),cN(5974,`.`),ag()()()(),Tl(5975,`h5`)(5976,`b`),cN(5977,`Parâmetros`),ag()(),Tl(5978,`table`,13)(5979,`tr`,14)(5980,`th`,15),cN(5981,`Nome`),ag(),Tl(5982,`th`,15),cN(5983,`Tipo`),ag(),Tl(5984,`th`,15),cN(5985,`Descrição`),ag()(),Tl(5986,`tr`,16)(5987,`td`,17),cN(5988,` params`),ag(),Tl(5989,`td`,21)(5990,`code`,83),cN(5991,` PoLookupFilteredItemsParams `),ag()(),Tl(5992,`td`,24)(5993,`p`),cN(5994,`Objeto enviado por parâmetro que implementa a interface `),Tl(5995,`code`),cN(5996,`PoLookupFilteredItemsParams`),ag(),cN(5997,`.`),ag()()()(),Gl(5998,`br`),Tl(5999,`table`,41)(6e3,`tr`,16)(6001,`th`,42)(6002,`div`,25)(6003,`h4`)(6004,`span`,26),cN(6005,` getObjectByValue `),ag()()()()(),Tl(6006,`tr`,24)(6007,`td`,24)(6008,`p`),cN(6009,`Método responsável por enviar um valor que será buscado no serviço.`),ag(),Tl(6010,`p`),cN(6011,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),ag()()()(),Tl(6012,`h5`)(6013,`b`),cN(6014,`Parâmetros`),ag()(),Tl(6015,`table`,13)(6016,`tr`,14)(6017,`th`,15),cN(6018,`Nome`),ag(),Tl(6019,`th`,15),cN(6020,`Tipo`),ag(),Tl(6021,`th`,15),cN(6022,`Descrição`),ag()(),Tl(6023,`tr`,16)(6024,`td`,17),cN(6025,` value`),ag(),Tl(6026,`td`,21)(6027,`code`,27),cN(6028,` string `),ag(),Tl(6029,`code`,74),cN(6030,` Array<any> `),ag()(),Tl(6031,`td`,24)(6032,`p`),cN(6033,`Valor único a ser buscado na fonte de dados.`),ag()()(),Tl(6034,`tr`,16)(6035,`td`,17),cN(6036,` filterParams`),ag(),Tl(6037,`td`,21)(6038,`code`,83),cN(6039,` any `),ag()(),Tl(6040,`td`,24)(6041,`p`),cN(6042,`Valor informado através da propriedade `),Tl(6043,`code`),cN(6044,`p-filter-params`),ag(),cN(6045,`.`),ag()()()(),Gl(6046,`br`),Tl(6047,`h4`,43)(6048,`code`,5),cN(6049,`PoLookupFilteredItemsParams`),ag()(),Tl(6050,`div`,2)(6051,`p`),cN(6052,`Interface do objeto enviado como parâmetro na função `),Tl(6053,`code`),cN(6054,`getFilteredItems`),ag(),cN(6055,`.`),ag()(),Tl(6056,`h4`,12),cN(6057,`Propriedades`),ag(),Tl(6058,`table`,13)(6059,`tr`,14)(6060,`th`,15),cN(6061,`Nome`),ag(),Tl(6062,`th`,15),cN(6063,`Tipo`),ag(),Tl(6064,`th`,15),cN(6065,`Descrição`),ag()(),Tl(6066,`tr`,16)(6067,`td`,17)(6068,`div`,25)(6069,`span`,26),cN(6070,` advancedFilters`),Gl(6071,`br`),ag()()(),Tl(6072,`td`,21)(6073,`code`,84),cN(6074,`{ [key: string]: any;
}`),ag()(),Tl(6075,`td`,24)(6076,`em`)(6077,`strong`),cN(6078,`(opcional)`),ag()(),Tl(6079,`p`),cN(6080,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),ag()()(),Tl(6081,`tr`,16)(6082,`td`,17)(6083,`div`,25)(6084,`span`,26),cN(6085,` filter`),Gl(6086,`br`),ag()()(),Tl(6087,`td`,21)(6088,`code`,27),cN(6089,`string`),ag()(),Tl(6090,`td`,24)(6091,`em`)(6092,`strong`),cN(6093,`(opcional)`),ag()(),Tl(6094,`p`),cN(6095,`Conteúdo utilizado para filtrar a lista de itens.`),ag()()(),Tl(6096,`tr`,16)(6097,`td`,17)(6098,`div`,25)(6099,`span`,26),cN(6100,` filterParams`),Gl(6101,`br`),ag()()(),Tl(6102,`td`,21)(6103,`code`,33),cN(6104,`any`),ag()(),Tl(6105,`td`,24)(6106,`em`)(6107,`strong`),cN(6108,`(opcional)`),ag()(),Tl(6109,`p`),cN(6110,`Valor informado através da propriedade `),Tl(6111,`code`),cN(6112,`p-filter-params`),ag(),cN(6113,`.`),ag()()(),Tl(6114,`tr`,16)(6115,`td`,17)(6116,`div`,25)(6117,`span`,26),cN(6118,` order`),Gl(6119,`br`),ag()()(),Tl(6120,`td`,21)(6121,`code`,27),cN(6122,`string`),ag()(),Tl(6123,`td`,24)(6124,`em`)(6125,`strong`),cN(6126,`(opcional)`),ag()(),Tl(6127,`p`),cN(6128,`Coluna que está sendo ordenada na tabela.`),ag(),Tl(6129,`ul`)(6130,`li`),cN(6131,`Coluna decrescente será informada da seguinte forma: `),Tl(6132,`code`),cN(6133,`-<colunaOrdenada>`),ag(),cN(6134,`, por exemplo `),Tl(6135,`code`),cN(6136,`-name`),ag(),cN(6137,`.`),ag(),Tl(6138,`li`),cN(6139,`Coluna ascendente será informada da seguinte forma: `),Tl(6140,`code`),cN(6141,`<colunaOrdenada>`),ag(),cN(6142,`, por exemplo `),Tl(6143,`code`),cN(6144,`name`),ag(),cN(6145,`.`),ag()()()(),Tl(6146,`tr`,16)(6147,`td`,17)(6148,`div`,25)(6149,`span`,26),cN(6150,` page`),Gl(6151,`br`),ag()()(),Tl(6152,`td`,21)(6153,`code`,45),cN(6154,`number`),ag()(),Tl(6155,`td`,24)(6156,`em`)(6157,`strong`),cN(6158,`(opcional)`),ag()(),Tl(6159,`p`),cN(6160,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),ag()()(),Tl(6161,`tr`,16)(6162,`td`,17)(6163,`div`,25)(6164,`span`,26),cN(6165,` pageSize`),Gl(6166,`br`),ag()()(),Tl(6167,`td`,21)(6168,`code`,45),cN(6169,`number`),ag()(),Tl(6170,`td`,24)(6171,`em`)(6172,`strong`),cN(6173,`(opcional)`),ag()(),Tl(6174,`p`),cN(6175,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),ag()()()(),Tl(6176,`h4`,43)(6177,`code`,5),cN(6178,`PoLookupLiterals`),ag()(),Tl(6179,`div`,2)(6180,`p`),cN(6181,`Interface para definição das literais usadas no `),Tl(6182,`code`),cN(6183,`po-lookup`),ag(),cN(6184,`.`),ag()(),Tl(6185,`h4`,12),cN(6186,`Propriedades`),ag(),Tl(6187,`table`,13)(6188,`tr`,14)(6189,`th`,15),cN(6190,`Nome`),ag(),Tl(6191,`th`,15),cN(6192,`Tipo`),ag(),Tl(6193,`th`,15),cN(6194,`Descrição`),ag()(),Tl(6195,`tr`,16)(6196,`td`,17)(6197,`div`,25)(6198,`span`,26),cN(6199,` clean`),Gl(6200,`br`),ag()()(),Tl(6201,`td`,21)(6202,`code`,27),cN(6203,`string`),ag()(),Tl(6204,`td`,24)(6205,`em`)(6206,`strong`),cN(6207,`(opcional)`),ag()(),Tl(6208,`p`),cN(6209,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),ag()()(),Tl(6210,`tr`,16)(6211,`td`,17)(6212,`div`,25)(6213,`span`,26),cN(6214,` modalAdvancedSearch`),Gl(6215,`br`),ag()()(),Tl(6216,`td`,21)(6217,`code`,27),cN(6218,`string`),ag()(),Tl(6219,`td`,24)(6220,`em`)(6221,`strong`),cN(6222,`(opcional)`),ag()(),Tl(6223,`p`),cN(6224,`Texto do link de busca avançada.`),ag(),Tl(6225,`p`),cN(6226,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),ag()()(),Tl(6227,`tr`,16)(6228,`td`,17)(6229,`div`,25)(6230,`span`,26),cN(6231,` modalAdvancedSearchPrimaryActionLabel`),Gl(6232,`br`),ag()()(),Tl(6233,`td`,21)(6234,`code`,27),cN(6235,`string`),ag()(),Tl(6236,`td`,24)(6237,`em`)(6238,`strong`),cN(6239,`(opcional)`),ag()(),Tl(6240,`p`),cN(6241,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),ag()()(),Tl(6242,`tr`,16)(6243,`td`,17)(6244,`div`,25)(6245,`span`,26),cN(6246,` modalAdvancedSearchSecondaryActionLabel`),Gl(6247,`br`),ag()()(),Tl(6248,`td`,21)(6249,`code`,27),cN(6250,`string`),ag()(),Tl(6251,`td`,24)(6252,`em`)(6253,`strong`),cN(6254,`(opcional)`),ag()(),Tl(6255,`p`),cN(6256,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),ag()()(),Tl(6257,`tr`,16)(6258,`td`,17)(6259,`div`,25)(6260,`span`,26),cN(6261,` modalAdvancedSearchTitle`),Gl(6262,`br`),ag()()(),Tl(6263,`td`,21)(6264,`code`,27),cN(6265,`string`),ag()(),Tl(6266,`td`,24)(6267,`em`)(6268,`strong`),cN(6269,`(opcional)`),ag()(),Tl(6270,`p`),cN(6271,`Texto exibido no título da modal de busca avançada.`),ag()()(),Tl(6272,`tr`,16)(6273,`td`,17)(6274,`div`,25)(6275,`span`,26),cN(6276,` modalDisclaimerGroupTitle`),Gl(6277,`br`),ag()()(),Tl(6278,`td`,21)(6279,`code`,27),cN(6280,`string`),ag()(),Tl(6281,`td`,24)(6282,`em`)(6283,`strong`),cN(6284,`(opcional)`),ag()(),Tl(6285,`p`),cN(6286,`Texto exibido no título do disclaimer.`),ag()()(),Tl(6287,`tr`,16)(6288,`td`,17)(6289,`div`,25)(6290,`span`,26),cN(6291,` modalPlaceholder`),Gl(6292,`br`),ag()()(),Tl(6293,`td`,21)(6294,`code`,27),cN(6295,`string`),ag()(),Tl(6296,`td`,24)(6297,`em`)(6298,`strong`),cN(6299,`(opcional)`),ag()(),Tl(6300,`p`),cN(6301,`Texto exibido no placeholder do input da modal.`),ag()()(),Tl(6302,`tr`,16)(6303,`td`,17)(6304,`div`,25)(6305,`span`,26),cN(6306,` modalPrimaryActionLabel`),Gl(6307,`br`),ag()()(),Tl(6308,`td`,21)(6309,`code`,27),cN(6310,`string`),ag()(),Tl(6311,`td`,24)(6312,`em`)(6313,`strong`),cN(6314,`(opcional)`),ag()(),Tl(6315,`p`),cN(6316,`Texto exibido no label do botão de ação primária da modal.`),ag()()(),Tl(6317,`tr`,16)(6318,`td`,17)(6319,`div`,25)(6320,`span`,26),cN(6321,` modalSecondaryActionLabel`),Gl(6322,`br`),ag()()(),Tl(6323,`td`,21)(6324,`code`,27),cN(6325,`string`),ag()(),Tl(6326,`td`,24)(6327,`em`)(6328,`strong`),cN(6329,`(opcional)`),ag()(),Tl(6330,`p`),cN(6331,`Texto exibido no label do botão de ação secundária da modal.`),ag()()(),Tl(6332,`tr`,16)(6333,`td`,17)(6334,`div`,25)(6335,`span`,26),cN(6336,` modalTableLoadMoreData`),Gl(6337,`br`),ag()()(),Tl(6338,`td`,21)(6339,`code`,27),cN(6340,`string`),ag()(),Tl(6341,`td`,24)(6342,`em`)(6343,`strong`),cN(6344,`(opcional)`),ag()(),Tl(6345,`p`),cN(6346,`Label do `),Tl(6347,`code`),cN(6348,`button`),ag(),cN(6349,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),ag()()(),Tl(6350,`tr`,16)(6351,`td`,17)(6352,`div`,25)(6353,`span`,26),cN(6354,` modalTableLoadingData`),Gl(6355,`br`),ag()()(),Tl(6356,`td`,21)(6357,`code`,27),cN(6358,`string`),ag()(),Tl(6359,`td`,24)(6360,`em`)(6361,`strong`),cN(6362,`(opcional)`),ag()(),Tl(6363,`p`),cN(6364,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),ag()()(),Tl(6365,`tr`,16)(6366,`td`,17)(6367,`div`,25)(6368,`span`,26),cN(6369,` modalTableNoColumns`),Gl(6370,`br`),ag()()(),Tl(6371,`td`,21)(6372,`code`,27),cN(6373,`string`),ag()(),Tl(6374,`td`,24)(6375,`em`)(6376,`strong`),cN(6377,`(opcional)`),ag()(),Tl(6378,`p`),cN(6379,`Texto exibido quando não existem colunas definidas para a tabela.`),ag()()(),Tl(6380,`tr`,16)(6381,`td`,17)(6382,`div`,25)(6383,`span`,26),cN(6384,` modalTableNoData`),Gl(6385,`br`),ag()()(),Tl(6386,`td`,21)(6387,`code`,27),cN(6388,`string`),ag()(),Tl(6389,`td`,24)(6390,`em`)(6391,`strong`),cN(6392,`(opcional)`),ag()(),Tl(6393,`p`),cN(6394,`Texto exibido quando não existem itens para serem exibidos na tabela.`),ag()()(),Tl(6395,`tr`,16)(6396,`td`,17)(6397,`div`,25)(6398,`span`,26),cN(6399,` modalTitle`),Gl(6400,`br`),ag()()(),Tl(6401,`td`,21)(6402,`code`,27),cN(6403,`string`),ag()(),Tl(6404,`td`,24)(6405,`em`)(6406,`strong`),cN(6407,`(opcional)`),ag()(),Tl(6408,`p`),cN(6409,`Texto exibido no título da modal.`),ag()()(),Tl(6410,`tr`,16)(6411,`td`,17)(6412,`div`,25)(6413,`span`,26),cN(6414,` search`),Gl(6415,`br`),ag()()(),Tl(6416,`td`,21)(6417,`code`,27),cN(6418,`string`),ag()(),Tl(6419,`td`,24)(6420,`em`)(6421,`strong`),cN(6422,`(opcional)`),ag()(),Tl(6423,`p`),cN(6424,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),ag()()()(),Tl(6425,`h4`,43)(6426,`code`,5),cN(6427,`PoLookupResponseApi`),ag()(),Tl(6428,`div`,2)(6429,`p`),cN(6430,`Interface que representa a estrutura de resposta de uma coleção de itens. `),ag()(),Tl(6431,`h4`,12),cN(6432,`Propriedades`),ag(),Tl(6433,`table`,13)(6434,`tr`,14)(6435,`th`,15),cN(6436,`Nome`),ag(),Tl(6437,`th`,15),cN(6438,`Tipo`),ag(),Tl(6439,`th`,15),cN(6440,`Descrição`),ag()(),Tl(6441,`tr`,16)(6442,`td`,17)(6443,`div`,25)(6444,`span`,26),cN(6445,` hasNext`),Gl(6446,`br`),ag()()(),Tl(6447,`td`,21)(6448,`code`,29),cN(6449,`boolean`),ag()(),Tl(6450,`td`,24)(6451,`p`),cN(6452,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),ag()()(),Tl(6453,`tr`,16)(6454,`td`,17)(6455,`div`,25)(6456,`span`,26),cN(6457,` items`),Gl(6458,`br`),ag()()(),Tl(6459,`td`,21)(6460,`code`,85),cN(6461,`Array<object>`),ag()(),Tl(6462,`td`,24)(6463,`p`),cN(6464,`Lista de itens retornados.`),ag()()()(),Tl(6465,`h3`),cN(6466,`Enums`),ag(),Tl(6467,`h4`,4)(6468,`code`,5),cN(6469,`PoTableColumnSpacing`),ag()(),Tl(6470,`div`,2)(6471,`p`),cN(6472,`Tipos de espaçamento interno (padding) das células (`),Tl(6473,`strong`),cN(6474,`p-spacing`),ag(),cN(6475,`) do po-table.`),ag()(),Tl(6476,`h4`,12),cN(6477,`Propriedades`),ag(),Tl(6478,`table`,13)(6479,`tr`,14)(6480,`th`,15),cN(6481,`Nome`),ag(),Tl(6482,`th`,15),cN(6483,`Descrição`),ag()(),Tl(6484,`tr`,16)(6485,`td`,17)(6486,`div`,25)(6487,`span`,26),cN(6488,` ExtraSmall`),Gl(6489,`br`),ag()()(),Tl(6490,`td`,24)(6491,`p`),cN(6492,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),ag()()(),Tl(6493,`tr`,16)(6494,`td`,17)(6495,`div`,25)(6496,`span`,26),cN(6497,` Small`),Gl(6498,`br`),ag()()(),Tl(6499,`td`,24)(6500,`p`),cN(6501,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),ag()()(),Tl(6502,`tr`,16)(6503,`td`,17)(6504,`div`,25)(6505,`span`,26),cN(6506,` Medium`),Gl(6507,`br`),ag()()(),Tl(6508,`td`,24)(6509,`p`),cN(6510,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),ag()()(),Tl(6511,`tr`,16)(6512,`td`,17)(6513,`div`,25)(6514,`span`,26),cN(6515,` Large`),Gl(6516,`br`),ag()()(),Tl(6517,`td`,24)(6518,`p`),cN(6519,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ct=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-lookup-doc`),ag(),Tl(4,`po-tab`,3),ht$1(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-lookup-basic-view`)(6,`sample-po-lookup-labs-view`)(7,`sample-po-lookup-hero-view`)(8,`sample-po-lookup-hero-reactive-form-view`)(9,`sample-po-lookup-sw-films-view`)(10,`sample-po-lookup-multiple-view`)(11,`sample-po-lookup-mask-view`),ag()()()),l&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ae,Oe,ze,He,Be,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})()}];var Ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Ct),bL]})}return a})();var tn=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ke]})}return a})();export{tn as DocPoLookupModule};