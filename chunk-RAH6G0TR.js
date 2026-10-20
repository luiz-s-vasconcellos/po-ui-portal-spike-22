import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,Ca as zw,E as Cs,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Lr as SF,Pi as mt,Pr as R,Qi as tb,Qt as ea,Ri as nu,Rr as SO,Rt as _oe,Sr as Mm,T as Cne,Vi as p,Vr as TF,X as Lf,Xi as sO,Xr as Y,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cr as FE,dn as moe,dt as Sae,en as gP,fa as we,i as _a,ir as EF,ji as mO,k as Ec,ki as kF,mn as ni,or as EO,pa as wg,qr as Uk,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,ur as Fx,ut as Rte,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Te=(()=>{class l{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,i){a&1&&nu(0,`po-multiselect`,0),a&2&&jE(`p-options`,i.options)},dependencies:[gP],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l});var Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-multiselect-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ue,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Te],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let c=Sx();jc(0,`div`,2)(1,`po-multiselect`,3),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.multiselect,p)||(i.multiselect=p),v_(p)}),mt(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg()(),nu(2,`po-divider`),jc(3,`div`,2),nu(4,`po-info`,4)(5,`po-info`,5),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.option.label,p)||(i.option.label=p),v_(p)}),wg(),jc(11,`po-input`,7),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.option.value,p)||(i.option.value=p),v_(p)}),wg()(),jc(12,`div`,2)(13,`po-button`,8),mt(`p-click`,function(){return i.addOption()}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`po-input`,9),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.label,p)||(i.label=p),v_(p)}),wg(),jc(18,`po-input`,10),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.help,p)||(i.help=p),v_(p)}),wg(),jc(19,`po-input`,11),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.helperText,p)||(i.helperText=p),v_(p)}),wg(),jc(20,`po-input`,12),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.placeholder,p)||(i.placeholder=p),v_(p)}),wg(),jc(21,`po-input`,13),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.placeholderSearch,p)||(i.placeholderSearch=p),v_(p)}),wg(),jc(22,`po-input`,14),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),v_(p)}),wg(),jc(23,`po-input`,15),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.literals,p)||(i.literals=p),v_(p)}),mt(`p-change`,function(){return i.changeLiterals()}),wg(),jc(24,`po-input`,16),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.filterService,p)||(i.filterService=p),v_(p)}),wg(),jc(25,`po-input`,17),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.fieldValue,p)||(i.fieldValue=p),v_(p)}),wg(),jc(26,`po-input`,18),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.fieldLabel,p)||(i.fieldLabel=p),v_(p)}),wg(),jc(27,`po-checkbox-group`,19),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.properties,p)||(i.properties=p),v_(p)}),wg(),jc(28,`po-radio-group`,20),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.filterMode,p)||(i.filterMode=p),v_(p)}),wg(),jc(29,`po-radio-group`,21),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.size,p)||(i.size=p),v_(p)}),wg(),jc(30,`po-radio-group`,22),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.listboxPosition,p)||(i.listboxPosition=p),v_(p)}),wg(),jc(31,`div`,2)(32,`po-button`,23),mt(`p-click`,function(){return i.restore()}),wg()()()}if(a&2){let c=Fx(8);rg(),ib(`ngModel`,i.multiselect),jE(`p-helper`,i.helperText)(`p-auto-height`,i.properties.includes(`autoHeight`))(`p-disabled`,i.properties.includes(`disabled`))(`p-field-label`,i.fieldLabel)(`p-field-value`,i.fieldValue)(`p-filter-service`,i.filterService)(`p-filter-mode`,i.filterMode)(`p-help`,i.help)(`p-hide-search`,i.properties.includes(`hideSearch`))(`p-hide-select-all`,i.properties.includes(`hideSelectAll`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-optional`,i.properties.includes(`optional`))(`p-options`,i.options)(`p-placeholder`,i.placeholder)(`p-placeholder-search`,i.placeholderSearch)(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-sort`,i.properties.includes(`sort`))(`p-listbox-control-position`,i.listboxPosition)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,i.multiselect),rg(),jE(`p-value`,i.event),rg(5),ib(`ngModel`,i.option.label),t0(),rg(),ib(`ngModel`,i.option.value),t0(),rg(2),jE(`p-disabled`,c.form.invalid),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.placeholderSearch),t0(),rg(),ib(`ngModel`,i.fieldErrorMessage),t0(),rg(),ib(`ngModel`,i.literals),t0(),rg(),ib(`ngModel`,i.filterService),t0(),rg(),ib(`ngModel`,i.fieldValue),t0(),rg(),ib(`ngModel`,i.fieldLabel),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.filterMode),jE(`p-disabled`,i.properties.includes(`hideSearch`))(`p-options`,i.filterModeOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0(),rg(),ib(`ngModel`,i.listboxPosition),jE(`p-options`,i.listboxPositionOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,gP,Ote,_oe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l});var Ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
    [p-label-text-wrap]="properties?.includes('labelTextWrap')"
    [p-compact-label]="properties?.includes('compactLabel')"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
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

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="listboxPosition"
    [(ngModel)]="listboxPosition"
    p-label="Listbox Position"
    [p-options]="listboxPositionOptions"
  ></po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
  size: string;
  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, { ...this.option }];
    this.option = { label: undefined, value: undefined };
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

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-multiselect-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,De],encapsulation:2,changeDetection:1})}return l})();var Le=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Sx();jc(0,`form`,null,0)(2,`h3`),iO(3,`Collective vacations`),wg(),nu(4,`po-divider`),jc(5,`div`,2)(6,`po-datepicker`,3),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.initialPeriod,p)||(i.initialPeriod=p),v_(p)}),wg(),jc(7,`po-datepicker`,4),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.finalPeriod,p)||(i.finalPeriod=p),v_(p)}),wg()(),jc(8,`div`,2)(9,`po-radio-group`,5),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.days,p)||(i.days=p),v_(p)}),wg()(),jc(10,`div`,2)(11,`po-multiselect`,6),JN(),ob(`ngModelChange`,function(p){return y_(c),sO(i.employeesVacations,p)||(i.employeesVacations=p),v_(p)}),wg()(),jc(12,`div`,2)(13,`po-button`,7),mt(`p-click`,function(){y_(c);let p=Fx(16);return i.updateNameEmployeesVacations(),v_(p.open())}),wg(),jc(14,`po-button`,8),mt(`p-click`,function(){return i.clean()}),wg()()(),jc(15,`po-modal`,9,1)(17,`div`,2),nu(18,`po-info`,10),EO(19,`date`),nu(20,`po-info`,11),EO(21,`date`),nu(22,`po-info`,12),wg(),nu(23,`po-divider`),jc(24,`div`,2),nu(25,`po-info`,13),wg()()}if(a&2){let c=Fx(1);rg(6),ib(`ngModel`,i.initialPeriod),t0(),rg(),ib(`ngModel`,i.finalPeriod),jE(`p-min-date`,i.initialPeriod),t0(),rg(2),ib(`ngModel`,i.days),jE(`p-options`,i.daysOptions),t0(),rg(2),ib(`ngModel`,i.employeesVacations),jE(`p-options`,i.employees),t0(),rg(2),jE(`p-disabled`,c.form.invalid),rg(5),jE(`p-value`,SO(19,12,i.initialPeriod,`longDate`,`+0000`)),rg(2),jE(`p-value`,SO(21,16,i.finalPeriod,`longDate`,`+0000`)),rg(2),jE(`p-value`,i.days),rg(3),jE(`p-value`,i.nameEmployeesVacations)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,Rte,gP,Ote,_oe,ea,Uk],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l});var Oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect - Vacation`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-multiselect-vacation`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ze,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Le],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{formBuilder=p(MK);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,Mm.required],finalPeriod:[null,Mm.required],days:[null,Mm.required],employeesVacations:[null,Mm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Sx();jc(0,`form`,1)(1,`h3`),iO(2,`Collective vacations`),wg(),nu(3,`po-divider`),jc(4,`div`,2)(5,`po-datepicker`,3),JN(),wg(),jc(6,`po-datepicker`,4),JN(),wg()(),jc(7,`div`,2)(8,`po-multiselect`,5),JN(),wg(),jc(9,`po-radio-group`,6),JN(),wg()(),jc(10,`div`,2)(11,`po-button`,7),mt(`p-click`,function(){y_(c);let p=Fx(14);return i.updateEmployeesVacations(),v_(p.open())}),wg(),jc(12,`po-button`,8),mt(`p-click`,function(){return i.clean()}),wg()()(),jc(13,`po-modal`,9,0)(15,`div`,2),nu(16,`po-info`,10),EO(17,`date`),nu(18,`po-info`,11),EO(19,`date`),nu(20,`po-info`,12),wg(),nu(21,`po-divider`),jc(22,`div`,2),nu(23,`po-info`,13),wg()()}a&2&&(jE(`formGroup`,i.formCollectiveVacations),rg(5),t0(),rg(),jE(`p-min-date`,i.getRangeFinalPeriod()),t0(),rg(2),jE(`p-auto-height`,!0)(`p-options`,i.employees)(`p-required`,!0),t0(),rg(),jE(`p-options`,i.daysOptions)(`p-columns`,3),t0(),rg(2),jE(`p-disabled`,i.formCollectiveVacations.invalid),rg(5),jE(`p-value`,SO(17,12,i.initialPeriod,`longDate`,`+0000`)),rg(2),jE(`p-value`,SO(19,16,i.finalPeriod,`longDate`,`+0000`)),rg(2),jE(`p-value`,i.days),rg(3),jE(`p-value`,i.nameEmployeesVacations))},dependencies:[wK,CK,EK,SF,kF,ni,Lf,Rte,gP,Ote,_oe,ea,Uk],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l});var qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect - Vacation Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-multiselect-vacation-reactive-form`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,tt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ke],encapsulation:2,changeDetection:1})}return l})();function it(l,K){l&1&&nu(0,`po-tag`,11),l&2&&jE(`p-icon`,!0)}function ot(l,K){l&1&&nu(0,`po-tag`,12),l&2&&jE(`p-icon`,!0)}function lt(l,K){l&1&&nu(0,`po-tag`,13),l&2&&jE(`p-icon`,!0)}function at(l,K){if(l&1&&(jc(0,`div`,0)(1,`div`,7)(2,`div`,8),iO(3),wg()(),jc(4,`div`,9)(5,`div`,10),px(6,it,1,1,`po-tag`,11),px(7,ot,1,1,`po-tag`,12),px(8,lt,1,1,`po-tag`,13),wg()()()),l&2){let s=K.$implicit;rg(3),tb(s.label),rg(3),mx(s.admin?6:-1),rg(),mx(s.access?7:-1),rg(),mx(!s.admin&&!s.access?8:-1)}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`po-select`,1),JN(),ob(`ngModelChange`,function(d){return sO(i.employee,d)||(i.employee=d),d}),wg(),jc(2,`po-select`,2),JN(),ob(`ngModelChange`,function(d){return sO(i.typeAccess,d)||(i.typeAccess=d),d}),wg(),jc(3,`div`,3)(4,`po-button`,4),mt(`p-click`,function(){return i.changeAccess()}),wg()(),jc(5,`po-multiselect`,5),FE(6,at,9,4,`ng-template`,6),wg()()),a&2&&(rg(),jE(`p-options`,i.employees),ib(`ngModel`,i.employee),t0(),rg(),jE(`p-options`,i.typeAccessValue),ib(`ngModel`,i.typeAccess),t0(),rg(2),jE(`p-disabled`,!i.employee||!i.typeAccess),rg(),jE(`p-options`,i.options)(`p-hide-select-all`,!0))},dependencies:[CK,TF,ni,gP,Cne,moe,Cs],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return l})();var pt=l=>({"docs-sample-code-tabs":l});var Be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect - Template`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styleUrls: ['./sample-po-multiselect-template.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),wg(),jc(25,`pre`,11),iO(26,`.containerFlex {
  display: flex;
  align-items: center;
}

.containerFlexTag {
  display: flex;
  gap: 2px;
  flex-direction: column;
}

.containerButton {
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-multiselect-template`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,pt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Fe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{http=p(zw);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(Y(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(Y(a=>a.items))}static ɵfac=function(a){return new(a||l)};static ɵprov=R({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var We=(()=>{class l{samplePoMultiselectHeroesService=p(se);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[we([se])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`po-multiselect`,1),JN(),ob(`ngModelChange`,function(d){return sO(i.multiselect,d)||(i.multiselect=d),d}),mt(`p-change`,function(d){return i.changeOptions(d)}),wg(),jc(2,`po-container`,2),nu(3,`po-table`,3),wg()()),a&2&&(rg(),ib(`ngModel`,i.multiselect),jE(`p-filter-service`,i.filterService)(`p-debounce-time`,i.debounce),t0(),rg(2),jE(`p-columns`,i.columns)(`p-items`,i.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[CK,TF,Ec,gP,I5],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l});var ze=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect - Heroes - using API`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-multiselect-heroes`),wg(),nu(27,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,dt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,We],encapsulation:2,changeDetection:1})}return l})();var Ne=(()=>{class l{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`div`,1)(2,`po-select`,2),JN(),ob(`ngModelChange`,function(d){return sO(i.fieldLabel,d)||(i.fieldLabel=d),d}),mt(`p-change`,function(d){return i.onChange(d)}),wg(),jc(3,`po-select`,3),JN(),ob(`ngModelChange`,function(d){return sO(i.fieldValue,d)||(i.fieldValue=d),d}),mt(`p-change`,function(d){return i.onChange(d)}),wg()(),jc(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),JN(),ob(`ngModelChange`,function(d){return sO(i.company,d)||(i.company=d),d}),wg()(),jc(7,`div`,0),nu(8,`po-info`,5),wg()()()),a&2&&(rg(2),jE(`p-options`,i.optionsSelect),ib(`ngModel`,i.fieldLabel),t0(),rg(),jE(`p-options`,i.optionsSelect),ib(`ngModel`,i.fieldValue),t0(),rg(3),jE(`p-options`,i.options)(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel),ib(`ngModel`,i.company),t0(),rg(2),jE(`p-value`,i.company))},dependencies:[CK,TF,gP,moe,_oe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l});var Ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Multiselect - Array Any`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-multiselect-any-array`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,bt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ne],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1546,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoMultiselectComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),wg(),jc(24,`p`),iO(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),wg(),jc(26,`p`),iO(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),wg(),jc(28,`p`),iO(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),jc(30,`code`),iO(31,`p-filter-service`),wg(),iO(32,`.`),wg(),jc(33,`h4`),iO(34,`Boas práticas`),wg(),jc(35,`ul`)(36,`li`),iO(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),wg(),jc(38,`li`),iO(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),wg()(),jc(40,`h4`),iO(41,`Acessibilidade tratada no componente`),wg(),jc(42,`p`),iO(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(44,`ul`)(45,`li`),iO(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),wg(),jc(47,`li`),iO(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),wg(),jc(49,`li`),iO(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),wg(),jc(51,`li`),iO(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),wg(),jc(53,`li`),iO(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),wg()(),jc(55,`h4`),iO(56,`Tokens customizáveis`),wg(),jc(57,`p`),iO(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(59,`blockquote`)(60,`p`),iO(61,`Para maiores informações, acesse o guia `),jc(62,`a`,6),iO(63,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(64,`.`),wg()(),jc(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),iO(69,`Propriedade`),wg(),jc(70,`th`),iO(71,`Descrição`),wg(),jc(72,`th`),iO(73,`Valor Padrão`),wg()()(),jc(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),iO(78,`Default Values`),wg()(),nu(79,`td`)(80,`td`),wg(),jc(81,`tr`)(82,`td`)(83,`code`),iO(84,`--font-family`),wg()(),jc(85,`td`),iO(86,`Família tipográfica usada`),wg(),jc(87,`td`)(88,`code`),iO(89,`var(--font-family-theme)`),wg()()(),jc(90,`tr`)(91,`td`)(92,`code`),iO(93,`--font-size`),wg()(),jc(94,`td`),iO(95,`Tamanho da fonte`),wg(),jc(96,`td`)(97,`code`),iO(98,`var(--font-size-default)`),wg()()(),jc(99,`tr`)(100,`td`)(101,`code`),iO(102,`--text-color-placeholder`),wg(),iO(103,` \xA0`),wg(),jc(104,`td`),iO(105,`Cor do texto do placeholder`),wg(),jc(106,`td`)(107,`code`),iO(108,`var(--color-action-disabled)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`code`),iO(112,`--color`),wg()(),jc(113,`td`),iO(114,`Cor principal do multiselect`),wg(),jc(115,`td`)(116,`code`),iO(117,`var(--color-neutral-dark-70)`),wg()()(),jc(118,`tr`)(119,`td`)(120,`code`),iO(121,`--background`),wg()(),jc(122,`td`),iO(123,`Cor de background`),wg(),jc(124,`td`)(125,`code`),iO(126,`var(--color-neutral-light-05)`),wg()()(),jc(127,`tr`)(128,`td`)(129,`code`),iO(130,`--field-container-title-justify`),wg()(),jc(131,`td`),iO(132,`Alinhamento horizontal do título (`),jc(133,`code`),iO(134,`justify-content`),wg(),iO(135,`)`),wg(),jc(136,`td`)(137,`code`),iO(138,`space-between`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),iO(142,`--field-container-title-flex`),wg()(),jc(143,`td`),iO(144,`Flex do título (`),jc(145,`code`),iO(146,`flex`),wg(),iO(147,`)`),wg(),jc(148,`td`)(149,`code`),iO(150,`1 auto`),wg()()(),jc(151,`tr`)(152,`td`)(153,`strong`),iO(154,`Hover`),wg()(),nu(155,`td`)(156,`td`),wg(),jc(157,`tr`)(158,`td`)(159,`code`),iO(160,`--color-hover`),wg()(),jc(161,`td`),iO(162,`Cor principal no estado hover`),wg(),jc(163,`td`)(164,`code`),iO(165,`var(--color-action-hover)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--background-hover`),wg()(),jc(170,`td`),iO(171,`Cor de background no estado hover`),wg(),jc(172,`td`)(173,`code`),iO(174,`var(--color-brand-01-lighter)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`strong`),iO(178,`Focused`),wg()(),nu(179,`td`)(180,`td`),wg(),jc(181,`tr`)(182,`td`)(183,`code`),iO(184,`--color-focused`),wg()(),jc(185,`td`),iO(186,`Cor principal no estado de focus`),wg(),jc(187,`td`)(188,`code`),iO(189,`var(--color-action-default)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`code`),iO(193,`--outline-color-focused`),wg(),iO(194,` \xA0`),wg(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-disabled`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-action-disabled)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-disabled`),wg(),iO(219,` \xA0`),wg(),jc(220,`td`),iO(221,`Cor de background no estado disabled \xA0`),wg(),jc(222,`td`)(223,`code`),iO(224,`var(--color-neutral-light-20)`),wg()()(),jc(225,`tr`)(226,`td`)(227,`strong`),iO(228,`Error`),wg()(),nu(229,`td`)(230,`td`),wg(),jc(231,`tr`)(232,`td`)(233,`code`),iO(234,`--color-error`),wg()(),jc(235,`td`),iO(236,`Cor principal no estado error`),wg(),jc(237,`td`)(238,`code`),iO(239,`var(--color-feedback-negative-base)`),wg()()()()()(),jc(240,`div`,7)(241,`h4`,8),iO(242,`Seletor`),wg(),jc(243,`pre`,9),iO(244,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),wg()(),jc(245,`h4`,10),iO(246,`Propriedades`),wg(),jc(247,`table`,11)(248,`tr`,12)(249,`th`,13),iO(250,`Nome`),wg(),jc(251,`th`,13),iO(252,`Tipo`),wg(),jc(253,`th`,13),iO(254,`Padrão`),wg(),jc(255,`th`,13),iO(256,`Descrição`),wg()(),jc(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),iO(261,` (p-additional-help)`),nu(262,`br`),wg()(),jc(263,`div`,18),iO(264,`Deprecated`),wg()(),jc(265,`td`,19)(266,`code`,20),iO(267,`EventEmitter`),wg()(),jc(268,`td`,21),iO(269,`-`),wg(),jc(270,`td`,22)(271,`em`)(272,`strong`),iO(273,`(opcional)`),wg()(),jc(274,`p`),iO(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(276,`blockquote`)(277,`p`),iO(278,`Essa propriedade está `),jc(279,`strong`),iO(280,`depreciada`),wg(),iO(281,` e será removida na versão `),jc(282,`code`),iO(283,`23.x.x`),wg(),iO(284,`. Recomendamos utilizar a propriedade `),jc(285,`code`),iO(286,`p-helper`),wg(),iO(287,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(288,`tr`,14)(289,`td`,15)(290,`div`,23)(291,`span`,24),iO(292,` p-additional-help-tooltip`),nu(293,`br`),wg()(),jc(294,`div`,18),iO(295,`Deprecated`),wg()(),jc(296,`td`,19)(297,`code`,25),iO(298,`string`),wg()(),jc(299,`td`,21),iO(300,`-`),wg(),jc(301,`td`,22)(302,`em`)(303,`strong`),iO(304,`(opcional)`),wg()(),jc(305,`p`),iO(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(307,`code`),iO(308,`po-helper`),wg(),iO(309,`.
`),jc(310,`strong`),iO(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(312,`blockquote`)(313,`p`),iO(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(315,`blockquote`)(316,`p`),iO(317,`Essa propriedade está `),jc(318,`strong`),iO(319,`depreciada`),wg(),iO(320,` e será removida na versão `),jc(321,`code`),iO(322,`23.x.x`),wg(),iO(323,`. Recomendamos utilizar a propriedade `),jc(324,`code`),iO(325,`p-helper`),wg(),iO(326,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(327,`tr`,14)(328,`td`,15)(329,`div`,23)(330,`span`,24),iO(331,` p-append-in-body`),nu(332,`br`),wg()()(),jc(333,`td`,19)(334,`code`,26),iO(335,`boolean`),wg()(),jc(336,`td`,21)(337,`p`)(338,`code`),iO(339,`false`),wg()()(),jc(340,`td`,22)(341,`em`)(342,`strong`),iO(343,`(opcional)`),wg()(),jc(344,`p`),iO(345,`Define que o `),jc(346,`code`),iO(347,`listbox`),wg(),iO(348,` e/ou popover (`),jc(349,`code`),iO(350,`p-helper`),wg(),iO(351,` e/ou `),jc(352,`code`),iO(353,`p-error-limit`),wg(),iO(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(355,`blockquote`)(356,`p`),iO(357,`Quando utilizado com `),jc(358,`code`),iO(359,`p-helper`),wg(),iO(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),iO(365,` p-auto-focus`),nu(366,`br`),wg()()(),jc(367,`td`,19)(368,`code`,26),iO(369,`boolean`),wg()(),jc(370,`td`,21)(371,`p`)(372,`code`),iO(373,`false`),wg()()(),jc(374,`td`,22)(375,`em`)(376,`strong`),iO(377,`(opcional)`),wg()(),jc(378,`p`),iO(379,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(380,`blockquote`)(381,`p`),iO(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(383,`tr`,14)(384,`td`,15)(385,`div`,23)(386,`span`,24),iO(387,` p-auto-height`),nu(388,`br`),wg()()(),jc(389,`td`,19)(390,`code`,26),iO(391,`boolean`),wg()(),jc(392,`td`,21)(393,`p`)(394,`code`),iO(395,`false`),wg()()(),jc(396,`td`,22)(397,`em`)(398,`strong`),iO(399,`(opcional)`),wg()(),jc(400,`p`),iO(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),wg(),jc(402,`blockquote`)(403,`p`),iO(404,`O valor padrão será `),jc(405,`code`),iO(406,`true`),wg(),iO(407,` quando houver serviço (`),jc(408,`code`),iO(409,`p-filter-service`),wg(),iO(410,`).`),wg()()()(),jc(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),iO(415,` (p-blur)`),nu(416,`br`),wg()()(),jc(417,`td`,19)(418,`code`,20),iO(419,`EventEmitter`),wg()(),jc(420,`td`,21),iO(421,`-`),wg(),jc(422,`td`,22)(423,`em`)(424,`strong`),iO(425,`(opcional)`),wg()(),jc(426,`p`),iO(427,`Evento disparado ao sair do campo.`),wg()()(),jc(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),iO(432,` (p-change)`),nu(433,`br`),wg()()(),jc(434,`td`,19)(435,`code`,20),iO(436,`EventEmitter`),wg()(),jc(437,`td`,21),iO(438,`-`),wg(),jc(439,`td`,22)(440,`em`)(441,`strong`),iO(442,`(opcional)`),wg()(),jc(443,`p`),iO(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),wg()()(),jc(445,`tr`,14)(446,`td`,15)(447,`div`,16)(448,`span`,17),iO(449,` (p-change-model)`),nu(450,`br`),wg()()(),jc(451,`td`,19)(452,`code`,20),iO(453,`EventEmitter`),wg()(),jc(454,`td`,21),iO(455,`-`),wg(),jc(456,`td`,22)(457,`em`)(458,`strong`),iO(459,`(opcional)`),wg()(),jc(460,`p`),iO(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(462,`code`),iO(463,`setValue`),wg(),iO(464,`, `),jc(465,`code`),iO(466,`patchValue`),wg(),iO(467,`, carregamento assíncrono).`),wg(),jc(468,`p`),iO(469,`Diferentemente do `),jc(470,`code`),iO(471,`p-change`),wg(),iO(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(473,`code`),iO(474,`p-change-model`),wg(),iO(475,` cobre todos os cenários de alteração de valor.`),wg(),jc(476,`p`),iO(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(478,`tr`,14)(479,`td`,15)(480,`div`,23)(481,`span`,24),iO(482,` p-compact-label`),nu(483,`br`),wg()()(),jc(484,`td`,19)(485,`code`,26),iO(486,`boolean`),wg()(),jc(487,`td`,21)(488,`p`)(489,`code`),iO(490,`false`),wg()()(),jc(491,`td`,22)(492,`em`)(493,`strong`),iO(494,`(opcional)`),wg()(),jc(495,`p`),iO(496,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(497,`p`),iO(498,`Quando habilitado (`),jc(499,`code`),iO(500,`true`),wg(),iO(501,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(502,`ul`)(503,`li`)(504,`code`),iO(505,`po-label`),wg()(),jc(506,`li`)(507,`code`),iO(508,`p-requirement (showRequired)`),wg()(),jc(509,`li`)(510,`code`),iO(511,`po-helper`),wg()()(),jc(512,`p`),iO(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(514,`p`),iO(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(516,`ul`)(517,`li`)(518,`code`),iO(519,`--field-container-title-justify`),wg()(),jc(520,`li`)(521,`code`),iO(522,`--field-container-title-flex`),wg()()(),jc(523,`p`),iO(524,`Exemplo:`),wg(),jc(525,`pre`)(526,`code`),iO(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(528,`p`),iO(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(530,`tr`,14)(531,`td`,15)(532,`div`,23)(533,`span`,24),iO(534,` p-debounce-time`),nu(535,`br`),wg()()(),jc(536,`td`,19)(537,`code`,27),iO(538,`number`),wg()(),jc(539,`td`,21)(540,`p`)(541,`code`),iO(542,`400`),wg()()(),jc(543,`td`,22)(544,`em`)(545,`strong`),iO(546,`(opcional)`),wg()(),jc(547,`p`),iO(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),wg(),jc(549,`blockquote`)(550,`p`),iO(551,`Será utilizada apenas quando houver serviço (`),jc(552,`code`),iO(553,`p-filter-service`),wg(),iO(554,`) e somente será aceito valor maior do que `),jc(555,`em`),iO(556,`zero`),wg(),iO(557,`.`),wg()()()(),jc(558,`tr`,14)(559,`td`,15)(560,`div`,23)(561,`span`,24),iO(562,` p-disabled`),nu(563,`br`),wg()()(),jc(564,`td`,19)(565,`code`,26),iO(566,`boolean`),wg()(),jc(567,`td`,21)(568,`p`)(569,`code`),iO(570,`false`),wg()()(),jc(571,`td`,22)(572,`em`)(573,`strong`),iO(574,`(opcional)`),wg()(),jc(575,`p`),iO(576,`Indica que o campo será desabilitado.`),wg()()(),jc(577,`tr`,14)(578,`td`,15)(579,`div`,23)(580,`span`,24),iO(581,` p-error-limit`),nu(582,`br`),wg()()(),jc(583,`td`,19)(584,`code`,26),iO(585,`boolean`),wg()(),jc(586,`td`,21)(587,`p`)(588,`code`),iO(589,`false`),wg()()(),jc(590,`td`,22)(591,`em`)(592,`strong`),iO(593,`(opcional)`),wg()(),jc(594,`p`),iO(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(596,`blockquote`)(597,`p`),iO(598,`Caso essa propriedade seja definida como `),jc(599,`code`),iO(600,`true`),wg(),iO(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(602,`tr`,14)(603,`td`,15)(604,`div`,23)(605,`span`,24),iO(606,` p-field-error-message`),nu(607,`br`),wg()()(),jc(608,`td`,19)(609,`code`,25),iO(610,`string`),wg()(),jc(611,`td`,21),iO(612,`-`),wg(),jc(613,`td`,22)(614,`em`)(615,`strong`),iO(616,`(opcional)`),wg()(),jc(617,`p`),iO(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(619,`blockquote`)(620,`p`),iO(621,`Necessário que a propriedade `),jc(622,`code`),iO(623,`p-required`),wg(),iO(624,` esteja habilitada.`),wg()()()(),jc(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),iO(629,` p-field-label`),nu(630,`br`),wg()()(),jc(631,`td`,19)(632,`code`,25),iO(633,`string`),wg()(),jc(634,`td`,21)(635,`p`)(636,`code`),iO(637,`label`),wg()()(),jc(638,`td`,22)(639,`em`)(640,`strong`),iO(641,`(opcional)`),wg()(),jc(642,`p`),iO(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(644,`code`),iO(645,`p-options`),wg(),iO(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),wg(),jc(647,`p`),iO(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),jc(649,`code`),iO(650,`PoMultiSelectOption`),wg(),iO(651,`.`),wg()()(),jc(652,`tr`,14)(653,`td`,15)(654,`div`,23)(655,`span`,24),iO(656,` p-field-value`),nu(657,`br`),wg()()(),jc(658,`td`,19)(659,`code`,25),iO(660,`string`),wg()(),jc(661,`td`,21)(662,`p`)(663,`code`),iO(664,`value`),wg()()(),jc(665,`td`,22)(666,`em`)(667,`strong`),iO(668,`(opcional)`),wg()(),jc(669,`p`),iO(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(671,`code`),iO(672,`p-options`),wg(),iO(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),wg(),jc(674,`p`),iO(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),jc(676,`code`),iO(677,`PoMultiSelectOption`),wg(),iO(678,`.`),wg()()(),jc(679,`tr`,14)(680,`td`,15)(681,`div`,23)(682,`span`,24),iO(683,` p-filter-mode`),nu(684,`br`),wg()()(),jc(685,`td`,19)(686,`code`,28),iO(687,`PoMultiselectFilterMode`),wg()(),jc(688,`td`,21)(689,`p`)(690,`code`),iO(691,`startsWith`),wg()()(),jc(692,`td`,22)(693,`em`)(694,`strong`),iO(695,`(opcional)`),wg()(),jc(696,`p`),iO(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),wg()()(),jc(698,`tr`,14)(699,`td`,15)(700,`div`,23)(701,`span`,24),iO(702,` p-filter-service`),nu(703,`br`),wg()()(),jc(704,`td`,19)(705,`code`,25),iO(706,`string `),wg(),jc(707,`code`,29),iO(708,` PoMultiselectFilter`),wg()(),jc(709,`td`,21),iO(710,`-`),wg(),jc(711,`td`,22)(712,`em`)(713,`strong`),iO(714,`(opcional)`),wg()(),jc(715,`p`),iO(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),wg(),jc(717,`p`),iO(718,`Também existe a possibilidade de informar um serviço implementando a interface `),jc(719,`code`),iO(720,`PoMultiselectFilter`),wg(),iO(721,`.`),wg(),jc(722,`p`),iO(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),jc(724,`a`,30),iO(725,`API PO UI`),wg(),iO(726,` e utilizar as propriedades `),jc(727,`code`),iO(728,`p-field-label`),wg(),iO(729,` e `),jc(730,`code`),iO(731,`p-field-value`),wg(),iO(732,` para a construção da lista de itens.`),wg(),jc(733,`p`),iO(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),wg(),jc(735,`pre`)(736,`code`),iO(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),wg()(),jc(738,`p`),iO(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),wg(),jc(740,`pre`)(741,`code`),iO(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),wg()()()(),jc(743,`tr`,14)(744,`td`,15)(745,`div`,23)(746,`span`,24),iO(747,` p-help`),nu(748,`br`),wg()()(),jc(749,`td`,19)(750,`code`,25),iO(751,`string`),wg()(),jc(752,`td`,21),iO(753,`-`),wg(),jc(754,`td`,22)(755,`em`)(756,`strong`),iO(757,`(opcional)`),wg()(),jc(758,`p`),iO(759,`Texto de apoio para o campo.`),wg()()(),jc(760,`tr`,14)(761,`td`,15)(762,`div`,23)(763,`span`,24),iO(764,` p-hide-search`),nu(765,`br`),wg()()(),jc(766,`td`,19)(767,`code`,26),iO(768,`boolean`),wg()(),jc(769,`td`,21)(770,`p`)(771,`code`),iO(772,`false`),wg()()(),jc(773,`td`,22)(774,`em`)(775,`strong`),iO(776,`(opcional)`),wg()(),jc(777,`p`),iO(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),wg()()(),jc(779,`tr`,14)(780,`td`,15)(781,`div`,23)(782,`span`,24),iO(783,` p-hide-select-all`),nu(784,`br`),wg()()(),jc(785,`td`,19)(786,`code`,26),iO(787,`boolean`),wg()(),jc(788,`td`,21)(789,`p`)(790,`code`),iO(791,`false`),wg()()(),jc(792,`td`,22)(793,`em`)(794,`strong`),iO(795,`(opcional)`),wg()(),jc(796,`p`),iO(797,`Indica se o campo "Selecionar todos" será escondido.`),wg()()(),jc(798,`tr`,14)(799,`td`,15)(800,`div`,16)(801,`span`,17),iO(802,` (p-keydown)`),nu(803,`br`),wg()()(),jc(804,`td`,19)(805,`code`,20),iO(806,`EventEmitter`),wg()(),jc(807,`td`,21),iO(808,`-`),wg(),jc(809,`td`,22)(810,`em`)(811,`strong`),iO(812,`(opcional)`),wg()(),jc(813,`p`),iO(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(815,`code`),iO(816,`KeyboardEvent`),wg(),iO(817,` com informações sobre a tecla.`),wg()()(),jc(818,`tr`,14)(819,`td`,15)(820,`div`,23)(821,`span`,24),iO(822,` p-label`),nu(823,`br`),wg()()(),jc(824,`td`,19)(825,`code`,25),iO(826,`string`),wg()(),jc(827,`td`,21),iO(828,`-`),wg(),jc(829,`td`,22)(830,`em`)(831,`strong`),iO(832,`(opcional)`),wg()(),jc(833,`p`),iO(834,`Label no componente.`),wg()()(),jc(835,`tr`,14)(836,`td`,15)(837,`div`,23)(838,`span`,24),iO(839,` p-label-text-wrap`),nu(840,`br`),wg()()(),jc(841,`td`,19)(842,`code`,26),iO(843,`boolean`),wg()(),jc(844,`td`,21)(845,`p`)(846,`code`),iO(847,`false`),wg()()(),jc(848,`td`,22)(849,`em`)(850,`strong`),iO(851,`(opcional)`),wg()(),jc(852,`p`),iO(853,`Habilita a quebra automática do texto da propriedade `),jc(854,`code`),iO(855,`p-label`),wg(),iO(856,`. Quando `),jc(857,`code`),iO(858,`p-label-text-wrap`),wg(),iO(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(860,`tr`,14)(861,`td`,15)(862,`div`,23)(863,`span`,24),iO(864,` p-listbox-control-position`),nu(865,`br`),wg()()(),jc(866,`td`,19)(867,`code`,31),iO(868,`'top' `),wg(),jc(869,`code`,32),iO(870,` 'bottom'`),wg()(),jc(871,`td`,21)(872,`p`)(873,`code`),iO(874,`bottom`),wg()()(),jc(875,`td`,22)(876,`em`)(877,`strong`),iO(878,`(opcional)`),wg()(),jc(879,`p`),iO(880,`Define a direção preferida para exibição do `),jc(881,`code`),iO(882,`listbox`),wg(),iO(883,` em relação ao campo (`),jc(884,`code`),iO(885,`top`),wg(),iO(886,` ou `),jc(887,`code`),iO(888,`bottom`),wg(),iO(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),wg()()(),jc(890,`tr`,14)(891,`td`,15)(892,`div`,23)(893,`span`,24),iO(894,` p-literals`),nu(895,`br`),wg()()(),jc(896,`td`,19)(897,`code`,33),iO(898,`PoMultiselectLiterals`),wg()(),jc(899,`td`,21),iO(900,`-`),wg(),jc(901,`td`,22)(902,`em`)(903,`strong`),iO(904,`(opcional)`),wg()(),jc(905,`p`),iO(906,`Objeto com as literais usadas no `),jc(907,`code`),iO(908,`po-multiselect`),wg(),iO(909,`.`),wg(),jc(910,`p`),iO(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(912,`pre`)(913,`code`),iO(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),wg()(),jc(915,`p`),iO(916,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(917,`pre`)(918,`code`),iO(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),wg()(),jc(920,`p`),iO(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),wg(),jc(922,`pre`)(923,`code`),iO(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),wg()(),jc(925,`blockquote`)(926,`p`),iO(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(928,`a`,34)(929,`code`),iO(930,`PoI18nService`),wg()(),iO(931,` ou do browser.`),wg()()()(),jc(932,`tr`,14)(933,`td`,15)(934,`div`,23)(935,`span`,24),iO(936,` p-loading`),nu(937,`br`),wg()()(),jc(938,`td`,19)(939,`code`,26),iO(940,`boolean`),wg()(),jc(941,`td`,21)(942,`p`)(943,`code`),iO(944,`false`),wg()()(),jc(945,`td`,22)(946,`em`)(947,`strong`),iO(948,`(opcional)`),wg()(),jc(949,`p`),iO(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(951,`tr`,14)(952,`td`,15)(953,`div`,23)(954,`span`,24),iO(955,` name`),nu(956,`br`),wg()()(),jc(957,`td`,19)(958,`code`,25),iO(959,`string`),wg()(),jc(960,`td`,21),iO(961,`-`),wg(),jc(962,`td`,22)(963,`p`),iO(964,`Nome do componente.`),wg()()(),jc(965,`tr`,14)(966,`td`,15)(967,`div`,23)(968,`span`,24),iO(969,` p-optional`),nu(970,`br`),wg()()(),jc(971,`td`,19)(972,`code`,26),iO(973,`boolean`),wg()(),jc(974,`td`,21)(975,`p`)(976,`code`),iO(977,`false`),wg()()(),jc(978,`td`,22)(979,`em`)(980,`strong`),iO(981,`(opcional)`),wg()(),jc(982,`p`),iO(983,`Define se a indicação de campo opcional será exibida.`),wg(),jc(984,`blockquote`)(985,`p`),iO(986,`Não será exibida a indicação se:`),wg()(),jc(987,`ul`)(988,`li`),iO(989,`O campo conter `),jc(990,`code`),iO(991,`p-required`),wg(),iO(992,`;`),wg(),jc(993,`li`),iO(994,`Não possuir `),jc(995,`code`),iO(996,`p-help`),wg(),iO(997,` e/ou `),jc(998,`code`),iO(999,`p-label`),wg(),iO(1e3,`.`),wg()()()(),jc(1001,`tr`,14)(1002,`td`,15)(1003,`div`,23)(1004,`span`,24),iO(1005,` p-options`),nu(1006,`br`),wg()()(),jc(1007,`td`,19)(1008,`code`,35),iO(1009,`Array<PoMultiselectOption `),wg(),jc(1010,`code`,36),iO(1011,` any>`),wg()(),jc(1012,`td`,21),iO(1013,`-`),wg(),jc(1014,`td`,22)(1015,`p`),iO(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),wg(),jc(1017,`blockquote`)(1018,`p`),iO(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),wg()(),jc(1020,`pre`)(1021,`code`),iO(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),wg()(),jc(1023,`blockquote`)(1024,`p`),iO(1025,`A lista pode ser definida utilizando um array com o valor representando `),jc(1026,`code`),iO(1027,`value`),wg(),iO(1028,` e `),jc(1029,`code`),iO(1030,`label`),wg(),iO(1031,` das seguintes formas:`),wg()(),jc(1032,`pre`)(1033,`code`),iO(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),wg()(),jc(1035,`pre`)(1036,`code`),iO(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),wg()(),jc(1038,`ul`)(1039,`li`),iO(1040,`Aconselha-se utilizar valores distintos no `),jc(1041,`code`),iO(1042,`label`),wg(),iO(1043,` e `),jc(1044,`code`),iO(1045,`value`),wg(),iO(1046,` dos itens.`),wg()()()(),jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),iO(1051,` p-placeholder`),nu(1052,`br`),wg()()(),jc(1053,`td`,19)(1054,`code`,25),iO(1055,`string`),wg()(),jc(1056,`td`,21),iO(1057,`-`),wg(),jc(1058,`td`,22)(1059,`em`)(1060,`strong`),iO(1061,`(opcional)`),wg()(),jc(1062,`p`),iO(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),wg()()(),jc(1064,`tr`,14)(1065,`td`,15)(1066,`div`,23)(1067,`span`,24),iO(1068,` p-placeholder-search`),nu(1069,`br`),wg()()(),jc(1070,`td`,19)(1071,`code`,25),iO(1072,`string`),wg()(),jc(1073,`td`,21)(1074,`p`)(1075,`code`),iO(1076,`Buscar`),wg()()(),jc(1077,`td`,22)(1078,`em`)(1079,`strong`),iO(1080,`(opcional)`),wg()(),jc(1081,`p`),iO(1082,`Placeholder do campo de pesquisa.`),wg(),jc(1083,`blockquote`)(1084,`p`),iO(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),wg()()()(),jc(1086,`tr`,14)(1087,`td`,15)(1088,`div`,23)(1089,`span`,24),iO(1090,` p-helper`),nu(1091,`br`),wg()()(),jc(1092,`td`,19)(1093,`code`,37),iO(1094,`PoHelperOptions `),wg(),jc(1095,`code`,25),iO(1096,` string`),wg()(),jc(1097,`td`,21),iO(1098,`-`),wg(),jc(1099,`td`,22)(1100,`em`)(1101,`strong`),iO(1102,`(opcional)`),wg()(),jc(1103,`p`),iO(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1105,`code`),iO(1106,`p-label`),wg(),iO(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1108,`code`),iO(1109,`p-label`),wg(),iO(1110,`.`),wg(),jc(1111,`blockquote`)(1112,`p`),iO(1113,`Para mais informações acesse: `),jc(1114,`a`,38),iO(1115,`https://po-ui.io/documentation/po-helper`),wg(),iO(1116,`.`),wg()(),jc(1117,`blockquote`)(1118,`p`),iO(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1120,`code`),iO(1121,`p-additional-help-tooltip`),wg(),iO(1122,` e `),jc(1123,`code`),iO(1124,`p-additional-help`),wg(),iO(1125,`) será ignorado.`),wg()()()(),jc(1126,`tr`,14)(1127,`td`,15)(1128,`div`,23)(1129,`span`,24),iO(1130,` p-required`),nu(1131,`br`),wg()()(),jc(1132,`td`,19)(1133,`code`,26),iO(1134,`boolean`),wg()(),jc(1135,`td`,21)(1136,`p`)(1137,`code`),iO(1138,`false`),wg()()(),jc(1139,`td`,22)(1140,`em`)(1141,`strong`),iO(1142,`(opcional)`),wg()(),jc(1143,`p`),iO(1144,`Define que o campo será obrigatório.`),wg(),jc(1145,`blockquote`)(1146,`p`),iO(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1148,`code`),iO(1149,`(p-disabled)`),wg(),iO(1150,`.`),wg()()()(),jc(1151,`tr`,14)(1152,`td`,15)(1153,`div`,23)(1154,`span`,24),iO(1155,` p-show-required`),nu(1156,`br`),wg()()(),jc(1157,`td`,19)(1158,`code`,26),iO(1159,`boolean`),wg()(),jc(1160,`td`,21),iO(1161,`-`),wg(),jc(1162,`td`,22)(1163,`p`),iO(1164,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1165,`blockquote`)(1166,`p`),iO(1167,`Não será exibida a indicação se:`),wg()(),jc(1168,`ul`)(1169,`li`),iO(1170,`Não possuir `),jc(1171,`code`),iO(1172,`p-help`),wg(),iO(1173,` e/ou `),jc(1174,`code`),iO(1175,`p-label`),wg(),iO(1176,`.`),wg()()()(),jc(1177,`tr`,14)(1178,`td`,15)(1179,`div`,23)(1180,`span`,24),iO(1181,` p-size`),nu(1182,`br`),wg()()(),jc(1183,`td`,19)(1184,`code`,25),iO(1185,`string`),wg()(),jc(1186,`td`,21)(1187,`p`)(1188,`code`),iO(1189,`medium`),wg()()(),jc(1190,`td`,22)(1191,`em`)(1192,`strong`),iO(1193,`(opcional)`),wg()(),jc(1194,`p`),iO(1195,`Define o tamanho do componente:`),wg(),jc(1196,`ul`)(1197,`li`)(1198,`code`),iO(1199,`small`),wg(),iO(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1201,`li`)(1202,`code`),iO(1203,`medium`),wg(),iO(1204,`: altura do input como 44px.`),wg()(),jc(1205,`blockquote`)(1206,`p`),iO(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1208,`code`),iO(1209,`medium`),wg(),iO(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1211,`a`,39),iO(1212,`po-theme`),wg(),iO(1213,`.`),wg()()()(),jc(1214,`tr`,14)(1215,`td`,15)(1216,`div`,23)(1217,`span`,24),iO(1218,` p-sort`),nu(1219,`br`),wg()()(),jc(1220,`td`,19)(1221,`code`,26),iO(1222,`boolean`),wg()(),jc(1223,`td`,21)(1224,`p`)(1225,`code`),iO(1226,`false`),wg()()(),jc(1227,`td`,22)(1228,`em`)(1229,`strong`),iO(1230,`(opcional)`),wg()(),jc(1231,`p`),iO(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),wg()()()(),jc(1233,`h3`,10),iO(1234,`Métodos`),wg(),jc(1235,`table`,40)(1236,`tr`,14)(1237,`th`,41)(1238,`div`,23)(1239,`h4`)(1240,`span`,24),iO(1241,` focus `),wg()()()()(),jc(1242,`tr`,22)(1243,`td`,22)(1244,`p`),iO(1245,`Função que atribui foco ao componente.`),wg(),jc(1246,`p`),iO(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1248,`pre`)(1249,`code`),iO(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),wg()()()()(),nu(1251,`br`),jc(1252,`table`,40)(1253,`tr`,14)(1254,`th`,41)(1255,`div`,23)(1256,`h4`)(1257,`span`,24),iO(1258,` showAdditionalHelp `),wg()()()()(),jc(1259,`tr`,22)(1260,`td`,22)(1261,`p`),iO(1262,`Método que exibe `),jc(1263,`code`),iO(1264,`p-helper`),wg(),iO(1265,` ou executa a ação definida em `),jc(1266,`code`),iO(1267,`p-helper{eventOnClick}`),wg(),iO(1268,` ou em `),jc(1269,`code`),iO(1270,`p-additionalHelp`),wg(),iO(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1272,`code`),iO(1273,`p-keydown`),wg(),iO(1274,`.`),wg(),jc(1275,`blockquote`)(1276,`p`),iO(1277,`Exibe ou oculta o conteúdo do componente `),jc(1278,`code`),iO(1279,`po-helper`),wg(),iO(1280,` quando o componente estiver com foco.`),wg()(),jc(1281,`pre`)(1282,`code`),iO(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),wg()(),jc(1284,`pre`)(1285,`code`),iO(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1287,`br`),jc(1288,`h3`),iO(1289,`Interfaces`),wg(),jc(1290,`h4`,42)(1291,`code`,5),iO(1292,`PoMultiselectFilter`),wg()(),jc(1293,`div`,2)(1294,`p`),iO(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),wg()(),jc(1296,`h4`,10),iO(1297,`Métodos`),wg(),jc(1298,`table`,40)(1299,`tr`,14)(1300,`th`,41)(1301,`div`,23)(1302,`h4`)(1303,`span`,24),iO(1304,` getFilteredData `),wg()()()()(),jc(1305,`tr`,22)(1306,`td`,22)(1307,`p`),iO(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),jc(1309,`code`),iO(1310,`PoMultiselectOption`),wg(),iO(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),wg()()()(),jc(1312,`h5`)(1313,`b`),iO(1314,`Parâmetros`),wg()(),jc(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),iO(1318,`Nome`),wg(),jc(1319,`th`,13),iO(1320,`Tipo`),wg(),jc(1321,`th`,13),iO(1322,`Descrição`),wg()(),jc(1323,`tr`,14)(1324,`td`,15),iO(1325,` params`),wg(),jc(1326,`td`,19)(1327,`code`,43),iO(1328,` { property: string, value: string } `),wg()(),jc(1329,`td`,22)(1330,`p`),iO(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),wg()()()(),nu(1332,`br`),jc(1333,`table`,40)(1334,`tr`,14)(1335,`th`,41)(1336,`div`,23)(1337,`h4`)(1338,`span`,24),iO(1339,` getObjectsByValues `),wg()()()()(),jc(1340,`tr`,22)(1341,`td`,22)(1342,`p`),iO(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),jc(1344,`code`),iO(1345,`PoMultiselectOption`),wg(),iO(1346,`, será informado por parâmetro valor a ser pesquisado.`),wg()()()(),jc(1347,`h5`)(1348,`b`),iO(1349,`Parâmetros`),wg()(),jc(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),iO(1353,`Nome`),wg(),jc(1354,`th`,13),iO(1355,`Tipo`),wg(),jc(1356,`th`,13),iO(1357,`Descrição`),wg()(),jc(1358,`tr`,14)(1359,`td`,15),iO(1360,` values`),wg(),jc(1361,`td`,19)(1362,`code`,44),iO(1363,` Array<string `),wg(),jc(1364,`code`,45),iO(1365,` number> `),wg()(),jc(1366,`td`,22)(1367,`p`),iO(1368,`Array com os valores a serem buscados.`),wg()()()(),nu(1369,`br`),jc(1370,`h4`,42)(1371,`code`,5),iO(1372,`PoMultiselectLiterals`),wg()(),jc(1373,`div`,2)(1374,`p`),iO(1375,`Interface para definição das literais usadas no `),jc(1376,`code`),iO(1377,`po-multiselect`),wg(),iO(1378,`.`),wg()(),jc(1379,`h4`,10),iO(1380,`Propriedades`),wg(),jc(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),iO(1384,`Nome`),wg(),jc(1385,`th`,13),iO(1386,`Tipo`),wg(),jc(1387,`th`,13),iO(1388,`Descrição`),wg()(),jc(1389,`tr`,14)(1390,`td`,15)(1391,`div`,23)(1392,`span`,24),iO(1393,` noData`),nu(1394,`br`),wg()()(),jc(1395,`td`,19)(1396,`code`,25),iO(1397,`string`),wg()(),jc(1398,`td`,22)(1399,`em`)(1400,`strong`),iO(1401,`(opcional)`),wg()(),jc(1402,`p`),iO(1403,`Texto exibido quando não houver dados encontrados na busca.`),wg()()(),jc(1404,`tr`,14)(1405,`td`,15)(1406,`div`,23)(1407,`span`,24),iO(1408,` placeholderSearch`),nu(1409,`br`),wg()()(),jc(1410,`td`,19)(1411,`code`,25),iO(1412,`string`),wg()(),jc(1413,`td`,22)(1414,`em`)(1415,`strong`),iO(1416,`(opcional)`),wg()(),jc(1417,`p`),iO(1418,`Texto do `),jc(1419,`em`),iO(1420,`placeholder`),wg(),iO(1421,` do campo de busca.`),wg()()(),jc(1422,`tr`,14)(1423,`td`,15)(1424,`div`,23)(1425,`span`,24),iO(1426,` selectAll`),nu(1427,`br`),wg()()(),jc(1428,`td`,19)(1429,`code`,25),iO(1430,`string`),wg()(),jc(1431,`td`,22)(1432,`em`)(1433,`strong`),iO(1434,`(opcional)`),wg()(),jc(1435,`p`),iO(1436,`Texto exibido no botão de selecionar todos.`),wg()()(),jc(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),iO(1441,` selectItem`),nu(1442,`br`),wg()()(),jc(1443,`td`,19)(1444,`code`,25),iO(1445,`string`),wg()(),jc(1446,`td`,22)(1447,`em`)(1448,`strong`),iO(1449,`(opcional)`),wg()(),jc(1450,`p`),iO(1451,`Texto exibido na propriedade placeholder.`),wg()()()(),jc(1452,`h4`,42)(1453,`code`,5),iO(1454,`PoMultiselectOption`),wg()(),jc(1455,`div`,2)(1456,`p`),iO(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),wg()(),jc(1458,`h4`,10),iO(1459,`Propriedades`),wg(),jc(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),iO(1463,`Nome`),wg(),jc(1464,`th`,13),iO(1465,`Tipo`),wg(),jc(1466,`th`,13),iO(1467,`Descrição`),wg()(),jc(1468,`tr`,14)(1469,`td`,15)(1470,`div`,23)(1471,`span`,24),iO(1472,` label`),nu(1473,`br`),wg()()(),jc(1474,`td`,19)(1475,`code`,25),iO(1476,`string`),wg()(),jc(1477,`td`,22)(1478,`p`),iO(1479,`Label exibido nos itens da lista.`),wg()()(),jc(1480,`tr`,14)(1481,`td`,15)(1482,`div`,23)(1483,`span`,24),iO(1484,` value`),nu(1485,`br`),wg()()(),jc(1486,`td`,19)(1487,`code`,25),iO(1488,`string `),wg(),jc(1489,`code`,27),iO(1490,` number`),wg()(),jc(1491,`td`,22)(1492,`p`),iO(1493,`Valor do objeto que será atribuído ao model.`),wg()()()(),jc(1494,`h3`),iO(1495,`Enums`),wg(),jc(1496,`h4`,4)(1497,`code`,5),iO(1498,`PoMultiselectFilterMode`),wg()(),jc(1499,`div`,2)(1500,`p`),iO(1501,`Define o tipo de busca usado no po-multiselect.`),wg()(),jc(1502,`h4`,10),iO(1503,`Propriedades`),wg(),jc(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),iO(1507,`Nome`),wg(),jc(1508,`th`,13),iO(1509,`Descrição`),wg()(),jc(1510,`tr`,14)(1511,`td`,15)(1512,`div`,23)(1513,`span`,24),iO(1514,` startsWith`),nu(1515,`br`),wg()()(),jc(1516,`td`,22)(1517,`p`),iO(1518,`Verifica se o texto `),jc(1519,`em`),iO(1520,`inicia`),wg(),iO(1521,` com o valor pesquisado.`),wg()()(),jc(1522,`tr`,14)(1523,`td`,15)(1524,`div`,23)(1525,`span`,24),iO(1526,` contains`),nu(1527,`br`),wg()()(),jc(1528,`td`,22)(1529,`p`),iO(1530,`Verifica se o texto `),jc(1531,`em`),iO(1532,`contém`),wg(),iO(1533,` o valor pesquisado.`),wg()()(),jc(1534,`tr`,14)(1535,`td`,15)(1536,`div`,23)(1537,`span`,24),iO(1538,` endsWith`),nu(1539,`br`),wg()()(),jc(1540,`td`,22)(1541,`p`),iO(1542,`Verifica se o texto `),jc(1543,`em`),iO(1544,`finaliza`),wg(),iO(1545,` com o valor pesquisado.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var gt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-multiselect-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-multiselect-basic-view`)(6,`sample-po-multiselect-labs-view`)(7,`sample-po-multiselect-vacation-view`)(8,`sample-po-multiselect-vacation-reactive-form-view`)(9,`sample-po-multiselect-template-view`)(10,`sample-po-multiselect-heroes-view`)(11,`sample-po-multiselect-any-array-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Ve,Ae,Oe,qe,Be,ze,Ie,He],encapsulation:2,changeDetection:1})}return l})()}];var Re=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[C1.forChild(gt),C1]})}return l})();var vn=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[Ta,Re]})}return l})();export{vn as DocPoMultiselectModule};