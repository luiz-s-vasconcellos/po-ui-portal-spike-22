import{t as r}from"./chunk-zystk1pz.js";import{$i as pt$1,C as C4,Ca as zO,Cr as Kc,En as v4,Er as LP,Gi as mg,Gn as Ax,Gr as S9,Ji as p0,Jr as TE,Ki as nk,Kn as BN,Lt as cP,Mi as hw,Nn as xs,Oi as he,Ri as kL,Rt as cae,Sr as KP,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Wr as Rx,X as Mc,Xn as Bx,Zn as C9,_a as wn,_n as ta,ai as Zx,ca as ue,cn as noe,ea as q,fr as Hp,gi as e_,gn as soe,hr as IE,i as _a,ia as sE,in as mae,ir as E,jn as wte,ki as hm,li as be,mn as rb,mr as I,na as qP,nr as DN,oi as aN,on as n4,or as FN,ot as Pte,pa as vN,qn as BP,r as Ta,si as b9,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,yi as f,yr as Jv,zr as Qn,zt as cne}from"./main-DRZDQSOK.js";var Te=(()=>{class l{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,i){a&1&&Kc(0,`po-multiselect`,0),a&2&&cE(`p-options`,i.options)},dependencies:[cP],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l});var Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-multiselect-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Te],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let c=Bx();Ac(0,`div`,2)(1,`po-multiselect`,3),RE(`ngModelChange`,function(p){return Jv(c),DN(i.multiselect,p)||(i.multiselect=p),e_(p)}),pt$1(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),ug(),Kc(2,`po-divider`),Ac(3,`div`,2),Kc(4,`po-info`,4)(5,`po-info`,5),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),RE(`ngModelChange`,function(p){return Jv(c),DN(i.option.label,p)||(i.option.label=p),e_(p)}),ug(),p0(),Ac(11,`po-input`,7),RE(`ngModelChange`,function(p){return Jv(c),DN(i.option.value,p)||(i.option.value=p),e_(p)}),ug(),p0(),ug(),Ac(12,`div`,2)(13,`po-button`,8),pt$1(`p-click`,function(){return i.addOption()}),ug()()(),Kc(14,`po-divider`),Ac(15,`form`,null,1)(17,`po-input`,9),RE(`ngModelChange`,function(p){return Jv(c),DN(i.label,p)||(i.label=p),e_(p)}),ug(),p0(),Ac(18,`po-input`,10),RE(`ngModelChange`,function(p){return Jv(c),DN(i.help,p)||(i.help=p),e_(p)}),ug(),p0(),Ac(19,`po-input`,11),RE(`ngModelChange`,function(p){return Jv(c),DN(i.helperText,p)||(i.helperText=p),e_(p)}),ug(),p0(),Ac(20,`po-input`,12),RE(`ngModelChange`,function(p){return Jv(c),DN(i.placeholder,p)||(i.placeholder=p),e_(p)}),ug(),p0(),Ac(21,`po-input`,13),RE(`ngModelChange`,function(p){return Jv(c),DN(i.placeholderSearch,p)||(i.placeholderSearch=p),e_(p)}),ug(),p0(),Ac(22,`po-input`,14),RE(`ngModelChange`,function(p){return Jv(c),DN(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),e_(p)}),ug(),p0(),Ac(23,`po-input`,15),RE(`ngModelChange`,function(p){return Jv(c),DN(i.literals,p)||(i.literals=p),e_(p)}),pt$1(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(24,`po-input`,16),RE(`ngModelChange`,function(p){return Jv(c),DN(i.filterService,p)||(i.filterService=p),e_(p)}),ug(),p0(),Ac(25,`po-input`,17),RE(`ngModelChange`,function(p){return Jv(c),DN(i.fieldValue,p)||(i.fieldValue=p),e_(p)}),ug(),p0(),Ac(26,`po-input`,18),RE(`ngModelChange`,function(p){return Jv(c),DN(i.fieldLabel,p)||(i.fieldLabel=p),e_(p)}),ug(),p0(),Ac(27,`po-checkbox-group`,19),RE(`ngModelChange`,function(p){return Jv(c),DN(i.properties,p)||(i.properties=p),e_(p)}),ug(),p0(),Ac(28,`po-radio-group`,20),RE(`ngModelChange`,function(p){return Jv(c),DN(i.filterMode,p)||(i.filterMode=p),e_(p)}),ug(),p0(),Ac(29,`po-radio-group`,21),RE(`ngModelChange`,function(p){return Jv(c),DN(i.size,p)||(i.size=p),e_(p)}),ug(),p0(),Ac(30,`po-radio-group`,22),RE(`ngModelChange`,function(p){return Jv(c),DN(i.listboxPosition,p)||(i.listboxPosition=p),e_(p)}),ug(),p0(),Ac(31,`div`,2)(32,`po-button`,23),pt$1(`p-click`,function(){return i.restore()}),ug()()()}if(a&2){let c=Zx(8);Hp(),TE(`ngModel`,i.multiselect),cE(`p-helper`,i.helperText)(`p-auto-height`,i.properties.includes(`autoHeight`))(`p-disabled`,i.properties.includes(`disabled`))(`p-field-label`,i.fieldLabel)(`p-field-value`,i.fieldValue)(`p-filter-service`,i.filterService)(`p-filter-mode`,i.filterMode)(`p-help`,i.help)(`p-hide-search`,i.properties.includes(`hideSearch`))(`p-hide-select-all`,i.properties.includes(`hideSelectAll`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-optional`,i.properties.includes(`optional`))(`p-options`,i.options)(`p-placeholder`,i.placeholder)(`p-placeholder-search`,i.placeholderSearch)(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-sort`,i.properties.includes(`sort`))(`p-listbox-control-position`,i.listboxPosition)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,i.multiselect),Hp(),cE(`p-value`,i.event),Hp(5),TE(`ngModel`,i.option.label),m0(),Hp(),TE(`ngModel`,i.option.value),m0(),Hp(2),cE(`p-disabled`,c.form.invalid),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.placeholderSearch),m0(),Hp(),TE(`ngModel`,i.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.filterService),m0(),Hp(),TE(`ngModel`,i.fieldValue),m0(),Hp(),TE(`ngModel`,i.fieldLabel),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.filterMode),cE(`p-disabled`,i.properties.includes(`hideSearch`))(`p-options`,i.filterModeOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0(),Hp(),TE(`ngModel`,i.listboxPosition),cE(`p-options`,i.listboxPositionOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,C4,cP,wte,soe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l});var Ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-multiselect-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,De],encapsulation:2,changeDetection:1})}return l})();var Le=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Bx();Ac(0,`form`,null,0)(2,`h3`),vN(3,`Collective vacations`),ug(),Kc(4,`po-divider`),Ac(5,`div`,2)(6,`po-datepicker`,3),RE(`ngModelChange`,function(p){return Jv(c),DN(i.initialPeriod,p)||(i.initialPeriod=p),e_(p)}),ug(),p0(),Ac(7,`po-datepicker`,4),RE(`ngModelChange`,function(p){return Jv(c),DN(i.finalPeriod,p)||(i.finalPeriod=p),e_(p)}),ug(),p0(),ug(),Ac(8,`div`,2)(9,`po-radio-group`,5),RE(`ngModelChange`,function(p){return Jv(c),DN(i.days,p)||(i.days=p),e_(p)}),ug(),p0(),ug(),Ac(10,`div`,2)(11,`po-multiselect`,6),RE(`ngModelChange`,function(p){return Jv(c),DN(i.employeesVacations,p)||(i.employeesVacations=p),e_(p)}),ug(),p0(),ug(),Ac(12,`div`,2)(13,`po-button`,7),pt$1(`p-click`,function(){Jv(c);let p=Zx(16);return i.updateNameEmployeesVacations(),e_(p.open())}),ug(),Ac(14,`po-button`,8),pt$1(`p-click`,function(){return i.clean()}),ug()()(),Ac(15,`po-modal`,9,1)(17,`div`,2),Kc(18,`po-info`,10),FN(19,`date`),Kc(20,`po-info`,11),FN(21,`date`),Kc(22,`po-info`,12),ug(),Kc(23,`po-divider`),Ac(24,`div`,2),Kc(25,`po-info`,13),ug()()}if(a&2){let c=Zx(1);Hp(6),TE(`ngModel`,i.initialPeriod),m0(),Hp(),TE(`ngModel`,i.finalPeriod),cE(`p-min-date`,i.initialPeriod),m0(),Hp(2),TE(`ngModel`,i.days),cE(`p-options`,i.daysOptions),m0(),Hp(2),TE(`ngModel`,i.employeesVacations),cE(`p-options`,i.employees),m0(),Hp(2),cE(`p-disabled`,c.form.invalid),Hp(5),cE(`p-value`,BN(19,12,i.initialPeriod,`longDate`,`+0000`)),Hp(2),cE(`p-value`,BN(21,16,i.finalPeriod,`longDate`,`+0000`)),Hp(2),cE(`p-value`,i.days),Hp(3),cE(`p-value`,i.nameEmployeesVacations)}},dependencies:[b9,D9,C9,BP,LP,oi,rb,Pte,cP,wte,soe,ta,nk],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l});var Oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect - Vacation`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #f="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-multiselect-vacation`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Le],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{formBuilder=f(S9);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,hm.required],finalPeriod:[null,hm.required],days:[null,hm.required],employeesVacations:[null,hm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Bx();Ac(0,`form`,1)(1,`h3`),vN(2,`Collective vacations`),ug(),Kc(3,`po-divider`),Ac(4,`div`,2),Kc(5,`po-datepicker`,3),p0(),Kc(6,`po-datepicker`,4),p0(),ug(),Ac(7,`div`,2),Kc(8,`po-multiselect`,5),p0(),Kc(9,`po-radio-group`,6),p0(),ug(),Ac(10,`div`,2)(11,`po-button`,7),pt$1(`p-click`,function(){Jv(c);let p=Zx(14);return i.updateEmployeesVacations(),e_(p.open())}),ug(),Ac(12,`po-button`,8),pt$1(`p-click`,function(){return i.clean()}),ug()()(),Ac(13,`po-modal`,9,0)(15,`div`,2),Kc(16,`po-info`,10),FN(17,`date`),Kc(18,`po-info`,11),FN(19,`date`),Kc(20,`po-info`,12),ug(),Kc(21,`po-divider`),Ac(22,`div`,2),Kc(23,`po-info`,13),ug()()}a&2&&(cE(`formGroup`,i.formCollectiveVacations),Hp(5),m0(),Hp(),cE(`p-min-date`,i.getRangeFinalPeriod()),m0(),Hp(2),cE(`p-auto-height`,!0)(`p-options`,i.employees)(`p-required`,!0),m0(),Hp(),cE(`p-options`,i.daysOptions)(`p-columns`,3),m0(),Hp(2),cE(`p-disabled`,i.formCollectiveVacations.invalid),Hp(5),cE(`p-value`,BN(17,12,i.initialPeriod,`longDate`,`+0000`)),Hp(2),cE(`p-value`,BN(19,16,i.finalPeriod,`longDate`,`+0000`)),Hp(2),cE(`p-value`,i.days),Hp(3),cE(`p-value`,i.nameEmployeesVacations))},dependencies:[b9,D9,C9,KP,qP,oi,rb,Pte,cP,wte,soe,ta,nk],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l});var qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect - Vacation Reactive Form`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form [formGroup]="formCollectiveVacations">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-multiselect-vacation-reactive-form`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,tt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ke],encapsulation:2,changeDetection:1})}return l})();function it(l,K){l&1&&Kc(0,`po-tag`,11),l&2&&cE(`p-icon`,!0)}function ot(l,K){l&1&&Kc(0,`po-tag`,12),l&2&&cE(`p-icon`,!0)}function lt(l,K){l&1&&Kc(0,`po-tag`,13),l&2&&cE(`p-icon`,!0)}function at(l,K){if(l&1&&(Ac(0,`div`,0)(1,`div`,7)(2,`div`,8),vN(3),ug()(),Ac(4,`div`,9)(5,`div`,10),Rx(6,it,1,1,`po-tag`,11),Rx(7,ot,1,1,`po-tag`,12),Rx(8,lt,1,1,`po-tag`,13),ug()()()),l&2){let s=K.$implicit;Hp(3),IE(s.label),Hp(3),Ax(s.admin?6:-1),Hp(),Ax(s.access?7:-1),Hp(),Ax(!s.admin&&!s.access?8:-1)}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`po-select`,1),RE(`ngModelChange`,function(d){return DN(i.employee,d)||(i.employee=d),d}),ug(),p0(),Ac(2,`po-select`,2),RE(`ngModelChange`,function(d){return DN(i.typeAccess,d)||(i.typeAccess=d),d}),ug(),p0(),Ac(3,`div`,3)(4,`po-button`,4),pt$1(`p-click`,function(){return i.changeAccess()}),ug()(),Ac(5,`po-multiselect`,5),sE(6,at,9,4,`ng-template`,6),ug()()),a&2&&(Hp(),cE(`p-options`,i.employees),TE(`ngModel`,i.employee),m0(),Hp(),cE(`p-options`,i.typeAccessValue),TE(`ngModel`,i.typeAccess),m0(),Hp(2),cE(`p-disabled`,!i.employee||!i.typeAccess),Hp(),cE(`p-options`,i.options)(`p-hide-select-all`,!0))},dependencies:[D9,BP,oi,cP,cne,noe,xs],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return l})();var pt=l=>({"docs-sample-code-tabs":l});var Be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect - Template`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.containerFlex {
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-multiselect-template`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,pt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Fe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{http=f(hw);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(q(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(q(a=>a.items))}static ɵfac=function(a){return new(a||l)};static ɵprov=I({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var We=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[be([se])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`po-multiselect`,1),RE(`ngModelChange`,function(d){return DN(i.multiselect,d)||(i.multiselect=d),d}),pt$1(`p-change`,function(d){return i.changeOptions(d)}),ug(),p0(),Ac(2,`po-container`,2),Kc(3,`po-table`,3),ug()()),a&2&&(Hp(),TE(`ngModel`,i.multiselect),cE(`p-filter-service`,i.filterService)(`p-debounce-time`,i.debounce),m0(),Hp(2),cE(`p-columns`,i.columns)(`p-items`,i.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[D9,BP,Mc,cP,v4],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l});var ze=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect - Heroes - using API`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-multiselect-heroes`),ug(),Kc(27,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,dt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,We],encapsulation:2,changeDetection:1})}return l})();var Ne=(()=>{class l{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`div`,1)(2,`po-select`,2),RE(`ngModelChange`,function(d){return DN(i.fieldLabel,d)||(i.fieldLabel=d),d}),pt$1(`p-change`,function(d){return i.onChange(d)}),ug(),p0(),Ac(3,`po-select`,3),RE(`ngModelChange`,function(d){return DN(i.fieldValue,d)||(i.fieldValue=d),d}),pt$1(`p-change`,function(d){return i.onChange(d)}),ug(),p0(),ug(),Ac(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),RE(`ngModelChange`,function(d){return DN(i.company,d)||(i.company=d),d}),ug(),p0(),ug(),Ac(7,`div`,0),Kc(8,`po-info`,5),ug()()()),a&2&&(Hp(2),cE(`p-options`,i.optionsSelect),TE(`ngModel`,i.fieldLabel),m0(),Hp(),cE(`p-options`,i.optionsSelect),TE(`ngModel`,i.fieldValue),m0(),Hp(3),cE(`p-options`,i.options)(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel),TE(`ngModel`,i.company),m0(),Hp(2),cE(`p-value`,i.company))},dependencies:[D9,BP,cP,noe,soe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l});var Ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Multiselect - Array Any`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-multiselect-any-array`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,bt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Ne],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1546,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoMultiselectComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),ug(),Ac(24,`p`),vN(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),ug(),Ac(26,`p`),vN(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),ug(),Ac(28,`p`),vN(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Ac(30,`code`),vN(31,`p-filter-service`),ug(),vN(32,`.`),ug(),Ac(33,`h4`),vN(34,`Boas práticas`),ug(),Ac(35,`ul`)(36,`li`),vN(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),ug(),Ac(38,`li`),vN(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),ug()(),Ac(40,`h4`),vN(41,`Acessibilidade tratada no componente`),ug(),Ac(42,`p`),vN(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(44,`ul`)(45,`li`),vN(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),ug(),Ac(47,`li`),vN(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),ug(),Ac(49,`li`),vN(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),ug(),Ac(51,`li`),vN(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),ug(),Ac(53,`li`),vN(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),ug()(),Ac(55,`h4`),vN(56,`Tokens customizáveis`),ug(),Ac(57,`p`),vN(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(59,`blockquote`)(60,`p`),vN(61,`Para maiores informações, acesse o guia `),Ac(62,`a`,6),vN(63,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(64,`.`),ug()(),Ac(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),vN(69,`Propriedade`),ug(),Ac(70,`th`),vN(71,`Descrição`),ug(),Ac(72,`th`),vN(73,`Valor Padrão`),ug()()(),Ac(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),vN(78,`Default Values`),ug()(),Kc(79,`td`)(80,`td`),ug(),Ac(81,`tr`)(82,`td`)(83,`code`),vN(84,`--font-family`),ug()(),Ac(85,`td`),vN(86,`Família tipográfica usada`),ug(),Ac(87,`td`)(88,`code`),vN(89,`var(--font-family-theme)`),ug()()(),Ac(90,`tr`)(91,`td`)(92,`code`),vN(93,`--font-size`),ug()(),Ac(94,`td`),vN(95,`Tamanho da fonte`),ug(),Ac(96,`td`)(97,`code`),vN(98,`var(--font-size-default)`),ug()()(),Ac(99,`tr`)(100,`td`)(101,`code`),vN(102,`--text-color-placeholder`),ug(),vN(103,` \xA0`),ug(),Ac(104,`td`),vN(105,`Cor do texto do placeholder`),ug(),Ac(106,`td`)(107,`code`),vN(108,`var(--color-action-disabled)`),ug()()(),Ac(109,`tr`)(110,`td`)(111,`code`),vN(112,`--color`),ug()(),Ac(113,`td`),vN(114,`Cor principal do multiselect`),ug(),Ac(115,`td`)(116,`code`),vN(117,`var(--color-neutral-dark-70)`),ug()()(),Ac(118,`tr`)(119,`td`)(120,`code`),vN(121,`--background`),ug()(),Ac(122,`td`),vN(123,`Cor de background`),ug(),Ac(124,`td`)(125,`code`),vN(126,`var(--color-neutral-light-05)`),ug()()(),Ac(127,`tr`)(128,`td`)(129,`code`),vN(130,`--field-container-title-justify`),ug()(),Ac(131,`td`),vN(132,`Alinhamento horizontal do título (`),Ac(133,`code`),vN(134,`justify-content`),ug(),vN(135,`)`),ug(),Ac(136,`td`)(137,`code`),vN(138,`space-between`),ug()()(),Ac(139,`tr`)(140,`td`)(141,`code`),vN(142,`--field-container-title-flex`),ug()(),Ac(143,`td`),vN(144,`Flex do título (`),Ac(145,`code`),vN(146,`flex`),ug(),vN(147,`)`),ug(),Ac(148,`td`)(149,`code`),vN(150,`1 auto`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`strong`),vN(154,`Hover`),ug()(),Kc(155,`td`)(156,`td`),ug(),Ac(157,`tr`)(158,`td`)(159,`code`),vN(160,`--color-hover`),ug()(),Ac(161,`td`),vN(162,`Cor principal no estado hover`),ug(),Ac(163,`td`)(164,`code`),vN(165,`var(--color-action-hover)`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--background-hover`),ug()(),Ac(170,`td`),vN(171,`Cor de background no estado hover`),ug(),Ac(172,`td`)(173,`code`),vN(174,`var(--color-brand-01-lighter)`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`strong`),vN(178,`Focused`),ug()(),Kc(179,`td`)(180,`td`),ug(),Ac(181,`tr`)(182,`td`)(183,`code`),vN(184,`--color-focused`),ug()(),Ac(185,`td`),vN(186,`Cor principal no estado de focus`),ug(),Ac(187,`td`)(188,`code`),vN(189,`var(--color-action-default)`),ug()()(),Ac(190,`tr`)(191,`td`)(192,`code`),vN(193,`--outline-color-focused`),ug(),vN(194,` \xA0`),ug(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-action-disabled)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug(),vN(219,` \xA0`),ug(),Ac(220,`td`),vN(221,`Cor de background no estado disabled \xA0`),ug(),Ac(222,`td`)(223,`code`),vN(224,`var(--color-neutral-light-20)`),ug()()(),Ac(225,`tr`)(226,`td`)(227,`strong`),vN(228,`Error`),ug()(),Kc(229,`td`)(230,`td`),ug(),Ac(231,`tr`)(232,`td`)(233,`code`),vN(234,`--color-error`),ug()(),Ac(235,`td`),vN(236,`Cor principal no estado error`),ug(),Ac(237,`td`)(238,`code`),vN(239,`var(--color-feedback-negative-base)`),ug()()()()()(),Ac(240,`div`,7)(241,`h4`,8),vN(242,`Seletor`),ug(),Ac(243,`pre`,9),vN(244,`<po-multiselect
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
`),ug()(),Ac(245,`h4`,10),vN(246,`Propriedades`),ug(),Ac(247,`table`,11)(248,`tr`,12)(249,`th`,13),vN(250,`Nome`),ug(),Ac(251,`th`,13),vN(252,`Tipo`),ug(),Ac(253,`th`,13),vN(254,`Padrão`),ug(),Ac(255,`th`,13),vN(256,`Descrição`),ug()(),Ac(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),vN(261,` (p-additional-help)`),Kc(262,`br`),ug()(),Ac(263,`div`,18),vN(264,`Deprecated`),ug()(),Ac(265,`td`,19)(266,`code`,20),vN(267,`EventEmitter`),ug()(),Ac(268,`td`,21),vN(269,`-`),ug(),Ac(270,`td`,22)(271,`em`)(272,`strong`),vN(273,`(opcional)`),ug()(),Ac(274,`p`),vN(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(276,`blockquote`)(277,`p`),vN(278,`Essa propriedade está `),Ac(279,`strong`),vN(280,`depreciada`),ug(),vN(281,` e será removida na versão `),Ac(282,`code`),vN(283,`23.x.x`),ug(),vN(284,`. Recomendamos utilizar a propriedade `),Ac(285,`code`),vN(286,`p-helper`),ug(),vN(287,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(288,`tr`,14)(289,`td`,15)(290,`div`,23)(291,`span`,24),vN(292,` p-additional-help-tooltip`),Kc(293,`br`),ug()(),Ac(294,`div`,18),vN(295,`Deprecated`),ug()(),Ac(296,`td`,19)(297,`code`,25),vN(298,`string`),ug()(),Ac(299,`td`,21),vN(300,`-`),ug(),Ac(301,`td`,22)(302,`em`)(303,`strong`),vN(304,`(opcional)`),ug()(),Ac(305,`p`),vN(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(307,`code`),vN(308,`po-helper`),ug(),vN(309,`.
`),Ac(310,`strong`),vN(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(312,`blockquote`)(313,`p`),vN(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(315,`blockquote`)(316,`p`),vN(317,`Essa propriedade está `),Ac(318,`strong`),vN(319,`depreciada`),ug(),vN(320,` e será removida na versão `),Ac(321,`code`),vN(322,`23.x.x`),ug(),vN(323,`. Recomendamos utilizar a propriedade `),Ac(324,`code`),vN(325,`p-helper`),ug(),vN(326,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(327,`tr`,14)(328,`td`,15)(329,`div`,23)(330,`span`,24),vN(331,` p-append-in-body`),Kc(332,`br`),ug()()(),Ac(333,`td`,19)(334,`code`,26),vN(335,`boolean`),ug()(),Ac(336,`td`,21)(337,`p`)(338,`code`),vN(339,`false`),ug()()(),Ac(340,`td`,22)(341,`em`)(342,`strong`),vN(343,`(opcional)`),ug()(),Ac(344,`p`),vN(345,`Define que o `),Ac(346,`code`),vN(347,`listbox`),ug(),vN(348,` e/ou popover (`),Ac(349,`code`),vN(350,`p-helper`),ug(),vN(351,` e/ou `),Ac(352,`code`),vN(353,`p-error-limit`),ug(),vN(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(355,`blockquote`)(356,`p`),vN(357,`Quando utilizado com `),Ac(358,`code`),vN(359,`p-helper`),ug(),vN(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),vN(365,` p-auto-focus`),Kc(366,`br`),ug()()(),Ac(367,`td`,19)(368,`code`,26),vN(369,`boolean`),ug()(),Ac(370,`td`,21)(371,`p`)(372,`code`),vN(373,`false`),ug()()(),Ac(374,`td`,22)(375,`em`)(376,`strong`),vN(377,`(opcional)`),ug()(),Ac(378,`p`),vN(379,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(380,`blockquote`)(381,`p`),vN(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(383,`tr`,14)(384,`td`,15)(385,`div`,23)(386,`span`,24),vN(387,` p-auto-height`),Kc(388,`br`),ug()()(),Ac(389,`td`,19)(390,`code`,26),vN(391,`boolean`),ug()(),Ac(392,`td`,21)(393,`p`)(394,`code`),vN(395,`false`),ug()()(),Ac(396,`td`,22)(397,`em`)(398,`strong`),vN(399,`(opcional)`),ug()(),Ac(400,`p`),vN(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ug(),Ac(402,`blockquote`)(403,`p`),vN(404,`O valor padrão será `),Ac(405,`code`),vN(406,`true`),ug(),vN(407,` quando houver serviço (`),Ac(408,`code`),vN(409,`p-filter-service`),ug(),vN(410,`).`),ug()()()(),Ac(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),vN(415,` (p-blur)`),Kc(416,`br`),ug()()(),Ac(417,`td`,19)(418,`code`,20),vN(419,`EventEmitter`),ug()(),Ac(420,`td`,21),vN(421,`-`),ug(),Ac(422,`td`,22)(423,`em`)(424,`strong`),vN(425,`(opcional)`),ug()(),Ac(426,`p`),vN(427,`Evento disparado ao sair do campo.`),ug()()(),Ac(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),vN(432,` (p-change)`),Kc(433,`br`),ug()()(),Ac(434,`td`,19)(435,`code`,20),vN(436,`EventEmitter`),ug()(),Ac(437,`td`,21),vN(438,`-`),ug(),Ac(439,`td`,22)(440,`em`)(441,`strong`),vN(442,`(opcional)`),ug()(),Ac(443,`p`),vN(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),ug()()(),Ac(445,`tr`,14)(446,`td`,15)(447,`div`,16)(448,`span`,17),vN(449,` (p-change-model)`),Kc(450,`br`),ug()()(),Ac(451,`td`,19)(452,`code`,20),vN(453,`EventEmitter`),ug()(),Ac(454,`td`,21),vN(455,`-`),ug(),Ac(456,`td`,22)(457,`em`)(458,`strong`),vN(459,`(opcional)`),ug()(),Ac(460,`p`),vN(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(462,`code`),vN(463,`setValue`),ug(),vN(464,`, `),Ac(465,`code`),vN(466,`patchValue`),ug(),vN(467,`, carregamento assíncrono).`),ug(),Ac(468,`p`),vN(469,`Diferentemente do `),Ac(470,`code`),vN(471,`p-change`),ug(),vN(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(473,`code`),vN(474,`p-change-model`),ug(),vN(475,` cobre todos os cenários de alteração de valor.`),ug(),Ac(476,`p`),vN(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(478,`tr`,14)(479,`td`,15)(480,`div`,23)(481,`span`,24),vN(482,` p-compact-label`),Kc(483,`br`),ug()()(),Ac(484,`td`,19)(485,`code`,26),vN(486,`boolean`),ug()(),Ac(487,`td`,21)(488,`p`)(489,`code`),vN(490,`false`),ug()()(),Ac(491,`td`,22)(492,`em`)(493,`strong`),vN(494,`(opcional)`),ug()(),Ac(495,`p`),vN(496,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(497,`p`),vN(498,`Quando habilitado (`),Ac(499,`code`),vN(500,`true`),ug(),vN(501,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(502,`ul`)(503,`li`)(504,`code`),vN(505,`po-label`),ug()(),Ac(506,`li`)(507,`code`),vN(508,`p-requirement (showRequired)`),ug()(),Ac(509,`li`)(510,`code`),vN(511,`po-helper`),ug()()(),Ac(512,`p`),vN(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(514,`p`),vN(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(516,`ul`)(517,`li`)(518,`code`),vN(519,`--field-container-title-justify`),ug()(),Ac(520,`li`)(521,`code`),vN(522,`--field-container-title-flex`),ug()()(),Ac(523,`p`),vN(524,`Exemplo:`),ug(),Ac(525,`pre`)(526,`code`),vN(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(528,`p`),vN(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(530,`tr`,14)(531,`td`,15)(532,`div`,23)(533,`span`,24),vN(534,` p-debounce-time`),Kc(535,`br`),ug()()(),Ac(536,`td`,19)(537,`code`,27),vN(538,`number`),ug()(),Ac(539,`td`,21)(540,`p`)(541,`code`),vN(542,`400`),ug()()(),Ac(543,`td`,22)(544,`em`)(545,`strong`),vN(546,`(opcional)`),ug()(),Ac(547,`p`),vN(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),ug(),Ac(549,`blockquote`)(550,`p`),vN(551,`Será utilizada apenas quando houver serviço (`),Ac(552,`code`),vN(553,`p-filter-service`),ug(),vN(554,`) e somente será aceito valor maior do que `),Ac(555,`em`),vN(556,`zero`),ug(),vN(557,`.`),ug()()()(),Ac(558,`tr`,14)(559,`td`,15)(560,`div`,23)(561,`span`,24),vN(562,` p-disabled`),Kc(563,`br`),ug()()(),Ac(564,`td`,19)(565,`code`,26),vN(566,`boolean`),ug()(),Ac(567,`td`,21)(568,`p`)(569,`code`),vN(570,`false`),ug()()(),Ac(571,`td`,22)(572,`em`)(573,`strong`),vN(574,`(opcional)`),ug()(),Ac(575,`p`),vN(576,`Indica que o campo será desabilitado.`),ug()()(),Ac(577,`tr`,14)(578,`td`,15)(579,`div`,23)(580,`span`,24),vN(581,` p-error-limit`),Kc(582,`br`),ug()()(),Ac(583,`td`,19)(584,`code`,26),vN(585,`boolean`),ug()(),Ac(586,`td`,21)(587,`p`)(588,`code`),vN(589,`false`),ug()()(),Ac(590,`td`,22)(591,`em`)(592,`strong`),vN(593,`(opcional)`),ug()(),Ac(594,`p`),vN(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(596,`blockquote`)(597,`p`),vN(598,`Caso essa propriedade seja definida como `),Ac(599,`code`),vN(600,`true`),ug(),vN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(602,`tr`,14)(603,`td`,15)(604,`div`,23)(605,`span`,24),vN(606,` p-field-error-message`),Kc(607,`br`),ug()()(),Ac(608,`td`,19)(609,`code`,25),vN(610,`string`),ug()(),Ac(611,`td`,21),vN(612,`-`),ug(),Ac(613,`td`,22)(614,`em`)(615,`strong`),vN(616,`(opcional)`),ug()(),Ac(617,`p`),vN(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(619,`blockquote`)(620,`p`),vN(621,`Necessário que a propriedade `),Ac(622,`code`),vN(623,`p-required`),ug(),vN(624,` esteja habilitada.`),ug()()()(),Ac(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),vN(629,` p-field-label`),Kc(630,`br`),ug()()(),Ac(631,`td`,19)(632,`code`,25),vN(633,`string`),ug()(),Ac(634,`td`,21)(635,`p`)(636,`code`),vN(637,`label`),ug()()(),Ac(638,`td`,22)(639,`em`)(640,`strong`),vN(641,`(opcional)`),ug()(),Ac(642,`p`),vN(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(644,`code`),vN(645,`p-options`),ug(),vN(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ug(),Ac(647,`p`),vN(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Ac(649,`code`),vN(650,`PoMultiSelectOption`),ug(),vN(651,`.`),ug()()(),Ac(652,`tr`,14)(653,`td`,15)(654,`div`,23)(655,`span`,24),vN(656,` p-field-value`),Kc(657,`br`),ug()()(),Ac(658,`td`,19)(659,`code`,25),vN(660,`string`),ug()(),Ac(661,`td`,21)(662,`p`)(663,`code`),vN(664,`value`),ug()()(),Ac(665,`td`,22)(666,`em`)(667,`strong`),vN(668,`(opcional)`),ug()(),Ac(669,`p`),vN(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(671,`code`),vN(672,`p-options`),ug(),vN(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),ug(),Ac(674,`p`),vN(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Ac(676,`code`),vN(677,`PoMultiSelectOption`),ug(),vN(678,`.`),ug()()(),Ac(679,`tr`,14)(680,`td`,15)(681,`div`,23)(682,`span`,24),vN(683,` p-filter-mode`),Kc(684,`br`),ug()()(),Ac(685,`td`,19)(686,`code`,28),vN(687,`PoMultiselectFilterMode`),ug()(),Ac(688,`td`,21)(689,`p`)(690,`code`),vN(691,`startsWith`),ug()()(),Ac(692,`td`,22)(693,`em`)(694,`strong`),vN(695,`(opcional)`),ug()(),Ac(696,`p`),vN(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),ug()()(),Ac(698,`tr`,14)(699,`td`,15)(700,`div`,23)(701,`span`,24),vN(702,` p-filter-service`),Kc(703,`br`),ug()()(),Ac(704,`td`,19)(705,`code`,25),vN(706,`string `),ug(),Ac(707,`code`,29),vN(708,` PoMultiselectFilter`),ug()(),Ac(709,`td`,21),vN(710,`-`),ug(),Ac(711,`td`,22)(712,`em`)(713,`strong`),vN(714,`(opcional)`),ug()(),Ac(715,`p`),vN(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),ug(),Ac(717,`p`),vN(718,`Também existe a possibilidade de informar um serviço implementando a interface `),Ac(719,`code`),vN(720,`PoMultiselectFilter`),ug(),vN(721,`.`),ug(),Ac(722,`p`),vN(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Ac(724,`a`,30),vN(725,`API PO UI`),ug(),vN(726,` e utilizar as propriedades `),Ac(727,`code`),vN(728,`p-field-label`),ug(),vN(729,` e `),Ac(730,`code`),vN(731,`p-field-value`),ug(),vN(732,` para a construção da lista de itens.`),ug(),Ac(733,`p`),vN(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),ug(),Ac(735,`pre`)(736,`code`),vN(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),ug()(),Ac(738,`p`),vN(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),ug(),Ac(740,`pre`)(741,`code`),vN(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),ug()()()(),Ac(743,`tr`,14)(744,`td`,15)(745,`div`,23)(746,`span`,24),vN(747,` p-help`),Kc(748,`br`),ug()()(),Ac(749,`td`,19)(750,`code`,25),vN(751,`string`),ug()(),Ac(752,`td`,21),vN(753,`-`),ug(),Ac(754,`td`,22)(755,`em`)(756,`strong`),vN(757,`(opcional)`),ug()(),Ac(758,`p`),vN(759,`Texto de apoio para o campo.`),ug()()(),Ac(760,`tr`,14)(761,`td`,15)(762,`div`,23)(763,`span`,24),vN(764,` p-hide-search`),Kc(765,`br`),ug()()(),Ac(766,`td`,19)(767,`code`,26),vN(768,`boolean`),ug()(),Ac(769,`td`,21)(770,`p`)(771,`code`),vN(772,`false`),ug()()(),Ac(773,`td`,22)(774,`em`)(775,`strong`),vN(776,`(opcional)`),ug()(),Ac(777,`p`),vN(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),ug()()(),Ac(779,`tr`,14)(780,`td`,15)(781,`div`,23)(782,`span`,24),vN(783,` p-hide-select-all`),Kc(784,`br`),ug()()(),Ac(785,`td`,19)(786,`code`,26),vN(787,`boolean`),ug()(),Ac(788,`td`,21)(789,`p`)(790,`code`),vN(791,`false`),ug()()(),Ac(792,`td`,22)(793,`em`)(794,`strong`),vN(795,`(opcional)`),ug()(),Ac(796,`p`),vN(797,`Indica se o campo "Selecionar todos" será escondido.`),ug()()(),Ac(798,`tr`,14)(799,`td`,15)(800,`div`,16)(801,`span`,17),vN(802,` (p-keydown)`),Kc(803,`br`),ug()()(),Ac(804,`td`,19)(805,`code`,20),vN(806,`EventEmitter`),ug()(),Ac(807,`td`,21),vN(808,`-`),ug(),Ac(809,`td`,22)(810,`em`)(811,`strong`),vN(812,`(opcional)`),ug()(),Ac(813,`p`),vN(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(815,`code`),vN(816,`KeyboardEvent`),ug(),vN(817,` com informações sobre a tecla.`),ug()()(),Ac(818,`tr`,14)(819,`td`,15)(820,`div`,23)(821,`span`,24),vN(822,` p-label`),Kc(823,`br`),ug()()(),Ac(824,`td`,19)(825,`code`,25),vN(826,`string`),ug()(),Ac(827,`td`,21),vN(828,`-`),ug(),Ac(829,`td`,22)(830,`em`)(831,`strong`),vN(832,`(opcional)`),ug()(),Ac(833,`p`),vN(834,`Label no componente.`),ug()()(),Ac(835,`tr`,14)(836,`td`,15)(837,`div`,23)(838,`span`,24),vN(839,` p-label-text-wrap`),Kc(840,`br`),ug()()(),Ac(841,`td`,19)(842,`code`,26),vN(843,`boolean`),ug()(),Ac(844,`td`,21)(845,`p`)(846,`code`),vN(847,`false`),ug()()(),Ac(848,`td`,22)(849,`em`)(850,`strong`),vN(851,`(opcional)`),ug()(),Ac(852,`p`),vN(853,`Habilita a quebra automática do texto da propriedade `),Ac(854,`code`),vN(855,`p-label`),ug(),vN(856,`. Quando `),Ac(857,`code`),vN(858,`p-label-text-wrap`),ug(),vN(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(860,`tr`,14)(861,`td`,15)(862,`div`,23)(863,`span`,24),vN(864,` p-listbox-control-position`),Kc(865,`br`),ug()()(),Ac(866,`td`,19)(867,`code`,31),vN(868,`'top' `),ug(),Ac(869,`code`,32),vN(870,` 'bottom'`),ug()(),Ac(871,`td`,21)(872,`p`)(873,`code`),vN(874,`bottom`),ug()()(),Ac(875,`td`,22)(876,`em`)(877,`strong`),vN(878,`(opcional)`),ug()(),Ac(879,`p`),vN(880,`Define a direção preferida para exibição do `),Ac(881,`code`),vN(882,`listbox`),ug(),vN(883,` em relação ao campo (`),Ac(884,`code`),vN(885,`top`),ug(),vN(886,` ou `),Ac(887,`code`),vN(888,`bottom`),ug(),vN(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ug()()(),Ac(890,`tr`,14)(891,`td`,15)(892,`div`,23)(893,`span`,24),vN(894,` p-literals`),Kc(895,`br`),ug()()(),Ac(896,`td`,19)(897,`code`,33),vN(898,`PoMultiselectLiterals`),ug()(),Ac(899,`td`,21),vN(900,`-`),ug(),Ac(901,`td`,22)(902,`em`)(903,`strong`),vN(904,`(opcional)`),ug()(),Ac(905,`p`),vN(906,`Objeto com as literais usadas no `),Ac(907,`code`),vN(908,`po-multiselect`),ug(),vN(909,`.`),ug(),Ac(910,`p`),vN(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(912,`pre`)(913,`code`),vN(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),ug()(),Ac(915,`p`),vN(916,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(917,`pre`)(918,`code`),vN(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),ug()(),Ac(920,`p`),vN(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ug(),Ac(922,`pre`)(923,`code`),vN(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),ug()(),Ac(925,`blockquote`)(926,`p`),vN(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(928,`a`,34)(929,`code`),vN(930,`PoI18nService`),ug()(),vN(931,` ou do browser.`),ug()()()(),Ac(932,`tr`,14)(933,`td`,15)(934,`div`,23)(935,`span`,24),vN(936,` p-loading`),Kc(937,`br`),ug()()(),Ac(938,`td`,19)(939,`code`,26),vN(940,`boolean`),ug()(),Ac(941,`td`,21)(942,`p`)(943,`code`),vN(944,`false`),ug()()(),Ac(945,`td`,22)(946,`em`)(947,`strong`),vN(948,`(opcional)`),ug()(),Ac(949,`p`),vN(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(951,`tr`,14)(952,`td`,15)(953,`div`,23)(954,`span`,24),vN(955,` name`),Kc(956,`br`),ug()()(),Ac(957,`td`,19)(958,`code`,25),vN(959,`string`),ug()(),Ac(960,`td`,21),vN(961,`-`),ug(),Ac(962,`td`,22)(963,`p`),vN(964,`Nome do componente.`),ug()()(),Ac(965,`tr`,14)(966,`td`,15)(967,`div`,23)(968,`span`,24),vN(969,` p-optional`),Kc(970,`br`),ug()()(),Ac(971,`td`,19)(972,`code`,26),vN(973,`boolean`),ug()(),Ac(974,`td`,21)(975,`p`)(976,`code`),vN(977,`false`),ug()()(),Ac(978,`td`,22)(979,`em`)(980,`strong`),vN(981,`(opcional)`),ug()(),Ac(982,`p`),vN(983,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(984,`blockquote`)(985,`p`),vN(986,`Não será exibida a indicação se:`),ug()(),Ac(987,`ul`)(988,`li`),vN(989,`O campo conter `),Ac(990,`code`),vN(991,`p-required`),ug(),vN(992,`;`),ug(),Ac(993,`li`),vN(994,`Não possuir `),Ac(995,`code`),vN(996,`p-help`),ug(),vN(997,` e/ou `),Ac(998,`code`),vN(999,`p-label`),ug(),vN(1e3,`.`),ug()()()(),Ac(1001,`tr`,14)(1002,`td`,15)(1003,`div`,23)(1004,`span`,24),vN(1005,` p-options`),Kc(1006,`br`),ug()()(),Ac(1007,`td`,19)(1008,`code`,35),vN(1009,`Array<PoMultiselectOption `),ug(),Ac(1010,`code`,36),vN(1011,` any>`),ug()(),Ac(1012,`td`,21),vN(1013,`-`),ug(),Ac(1014,`td`,22)(1015,`p`),vN(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),ug(),Ac(1017,`blockquote`)(1018,`p`),vN(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ug()(),Ac(1020,`pre`)(1021,`code`),vN(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ug()(),Ac(1023,`blockquote`)(1024,`p`),vN(1025,`A lista pode ser definida utilizando um array com o valor representando `),Ac(1026,`code`),vN(1027,`value`),ug(),vN(1028,` e `),Ac(1029,`code`),vN(1030,`label`),ug(),vN(1031,` das seguintes formas:`),ug()(),Ac(1032,`pre`)(1033,`code`),vN(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),ug()(),Ac(1035,`pre`)(1036,`code`),vN(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),ug()(),Ac(1038,`ul`)(1039,`li`),vN(1040,`Aconselha-se utilizar valores distintos no `),Ac(1041,`code`),vN(1042,`label`),ug(),vN(1043,` e `),Ac(1044,`code`),vN(1045,`value`),ug(),vN(1046,` dos itens.`),ug()()()(),Ac(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),vN(1051,` p-placeholder`),Kc(1052,`br`),ug()()(),Ac(1053,`td`,19)(1054,`code`,25),vN(1055,`string`),ug()(),Ac(1056,`td`,21),vN(1057,`-`),ug(),Ac(1058,`td`,22)(1059,`em`)(1060,`strong`),vN(1061,`(opcional)`),ug()(),Ac(1062,`p`),vN(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),ug()()(),Ac(1064,`tr`,14)(1065,`td`,15)(1066,`div`,23)(1067,`span`,24),vN(1068,` p-placeholder-search`),Kc(1069,`br`),ug()()(),Ac(1070,`td`,19)(1071,`code`,25),vN(1072,`string`),ug()(),Ac(1073,`td`,21)(1074,`p`)(1075,`code`),vN(1076,`Buscar`),ug()()(),Ac(1077,`td`,22)(1078,`em`)(1079,`strong`),vN(1080,`(opcional)`),ug()(),Ac(1081,`p`),vN(1082,`Placeholder do campo de pesquisa.`),ug(),Ac(1083,`blockquote`)(1084,`p`),vN(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ug()()()(),Ac(1086,`tr`,14)(1087,`td`,15)(1088,`div`,23)(1089,`span`,24),vN(1090,` p-helper`),Kc(1091,`br`),ug()()(),Ac(1092,`td`,19)(1093,`code`,37),vN(1094,`PoHelperOptions `),ug(),Ac(1095,`code`,25),vN(1096,` string`),ug()(),Ac(1097,`td`,21),vN(1098,`-`),ug(),Ac(1099,`td`,22)(1100,`em`)(1101,`strong`),vN(1102,`(opcional)`),ug()(),Ac(1103,`p`),vN(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1105,`code`),vN(1106,`p-label`),ug(),vN(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1108,`code`),vN(1109,`p-label`),ug(),vN(1110,`.`),ug(),Ac(1111,`blockquote`)(1112,`p`),vN(1113,`Para mais informações acesse: `),Ac(1114,`a`,38),vN(1115,`https://po-ui.io/documentation/po-helper`),ug(),vN(1116,`.`),ug()(),Ac(1117,`blockquote`)(1118,`p`),vN(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1120,`code`),vN(1121,`p-additional-help-tooltip`),ug(),vN(1122,` e `),Ac(1123,`code`),vN(1124,`p-additional-help`),ug(),vN(1125,`) será ignorado.`),ug()()()(),Ac(1126,`tr`,14)(1127,`td`,15)(1128,`div`,23)(1129,`span`,24),vN(1130,` p-required`),Kc(1131,`br`),ug()()(),Ac(1132,`td`,19)(1133,`code`,26),vN(1134,`boolean`),ug()(),Ac(1135,`td`,21)(1136,`p`)(1137,`code`),vN(1138,`false`),ug()()(),Ac(1139,`td`,22)(1140,`em`)(1141,`strong`),vN(1142,`(opcional)`),ug()(),Ac(1143,`p`),vN(1144,`Define que o campo será obrigatório.`),ug(),Ac(1145,`blockquote`)(1146,`p`),vN(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1148,`code`),vN(1149,`(p-disabled)`),ug(),vN(1150,`.`),ug()()()(),Ac(1151,`tr`,14)(1152,`td`,15)(1153,`div`,23)(1154,`span`,24),vN(1155,` p-show-required`),Kc(1156,`br`),ug()()(),Ac(1157,`td`,19)(1158,`code`,26),vN(1159,`boolean`),ug()(),Ac(1160,`td`,21),vN(1161,`-`),ug(),Ac(1162,`td`,22)(1163,`p`),vN(1164,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1165,`blockquote`)(1166,`p`),vN(1167,`Não será exibida a indicação se:`),ug()(),Ac(1168,`ul`)(1169,`li`),vN(1170,`Não possuir `),Ac(1171,`code`),vN(1172,`p-help`),ug(),vN(1173,` e/ou `),Ac(1174,`code`),vN(1175,`p-label`),ug(),vN(1176,`.`),ug()()()(),Ac(1177,`tr`,14)(1178,`td`,15)(1179,`div`,23)(1180,`span`,24),vN(1181,` p-size`),Kc(1182,`br`),ug()()(),Ac(1183,`td`,19)(1184,`code`,25),vN(1185,`string`),ug()(),Ac(1186,`td`,21)(1187,`p`)(1188,`code`),vN(1189,`medium`),ug()()(),Ac(1190,`td`,22)(1191,`em`)(1192,`strong`),vN(1193,`(opcional)`),ug()(),Ac(1194,`p`),vN(1195,`Define o tamanho do componente:`),ug(),Ac(1196,`ul`)(1197,`li`)(1198,`code`),vN(1199,`small`),ug(),vN(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1201,`li`)(1202,`code`),vN(1203,`medium`),ug(),vN(1204,`: altura do input como 44px.`),ug()(),Ac(1205,`blockquote`)(1206,`p`),vN(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1208,`code`),vN(1209,`medium`),ug(),vN(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1211,`a`,39),vN(1212,`po-theme`),ug(),vN(1213,`.`),ug()()()(),Ac(1214,`tr`,14)(1215,`td`,15)(1216,`div`,23)(1217,`span`,24),vN(1218,` p-sort`),Kc(1219,`br`),ug()()(),Ac(1220,`td`,19)(1221,`code`,26),vN(1222,`boolean`),ug()(),Ac(1223,`td`,21)(1224,`p`)(1225,`code`),vN(1226,`false`),ug()()(),Ac(1227,`td`,22)(1228,`em`)(1229,`strong`),vN(1230,`(opcional)`),ug()(),Ac(1231,`p`),vN(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),ug()()()(),Ac(1233,`h3`,10),vN(1234,`Métodos`),ug(),Ac(1235,`table`,40)(1236,`tr`,14)(1237,`th`,41)(1238,`div`,23)(1239,`h4`)(1240,`span`,24),vN(1241,` focus `),ug()()()()(),Ac(1242,`tr`,22)(1243,`td`,22)(1244,`p`),vN(1245,`Função que atribui foco ao componente.`),ug(),Ac(1246,`p`),vN(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1248,`pre`)(1249,`code`),vN(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),ug()()()()(),Kc(1251,`br`),Ac(1252,`table`,40)(1253,`tr`,14)(1254,`th`,41)(1255,`div`,23)(1256,`h4`)(1257,`span`,24),vN(1258,` showAdditionalHelp `),ug()()()()(),Ac(1259,`tr`,22)(1260,`td`,22)(1261,`p`),vN(1262,`Método que exibe `),Ac(1263,`code`),vN(1264,`p-helper`),ug(),vN(1265,` ou executa a ação definida em `),Ac(1266,`code`),vN(1267,`p-helper{eventOnClick}`),ug(),vN(1268,` ou em `),Ac(1269,`code`),vN(1270,`p-additionalHelp`),ug(),vN(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1272,`code`),vN(1273,`p-keydown`),ug(),vN(1274,`.`),ug(),Ac(1275,`blockquote`)(1276,`p`),vN(1277,`Exibe ou oculta o conteúdo do componente `),Ac(1278,`code`),vN(1279,`po-helper`),ug(),vN(1280,` quando o componente estiver com foco.`),ug()(),Ac(1281,`pre`)(1282,`code`),vN(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),ug()(),Ac(1284,`pre`)(1285,`code`),vN(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1287,`br`),Ac(1288,`h3`),vN(1289,`Interfaces`),ug(),Ac(1290,`h4`,42)(1291,`code`,5),vN(1292,`PoMultiselectFilter`),ug()(),Ac(1293,`div`,2)(1294,`p`),vN(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),ug()(),Ac(1296,`h4`,10),vN(1297,`Métodos`),ug(),Ac(1298,`table`,40)(1299,`tr`,14)(1300,`th`,41)(1301,`div`,23)(1302,`h4`)(1303,`span`,24),vN(1304,` getFilteredData `),ug()()()()(),Ac(1305,`tr`,22)(1306,`td`,22)(1307,`p`),vN(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Ac(1309,`code`),vN(1310,`PoMultiselectOption`),ug(),vN(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),ug()()()(),Ac(1312,`h5`)(1313,`b`),vN(1314,`Parâmetros`),ug()(),Ac(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),vN(1318,`Nome`),ug(),Ac(1319,`th`,13),vN(1320,`Tipo`),ug(),Ac(1321,`th`,13),vN(1322,`Descrição`),ug()(),Ac(1323,`tr`,14)(1324,`td`,15),vN(1325,` params`),ug(),Ac(1326,`td`,19)(1327,`code`,43),vN(1328,` { property: string, value: string } `),ug()(),Ac(1329,`td`,22)(1330,`p`),vN(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),ug()()()(),Kc(1332,`br`),Ac(1333,`table`,40)(1334,`tr`,14)(1335,`th`,41)(1336,`div`,23)(1337,`h4`)(1338,`span`,24),vN(1339,` getObjectsByValues `),ug()()()()(),Ac(1340,`tr`,22)(1341,`td`,22)(1342,`p`),vN(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Ac(1344,`code`),vN(1345,`PoMultiselectOption`),ug(),vN(1346,`, será informado por parâmetro valor a ser pesquisado.`),ug()()()(),Ac(1347,`h5`)(1348,`b`),vN(1349,`Parâmetros`),ug()(),Ac(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),vN(1353,`Nome`),ug(),Ac(1354,`th`,13),vN(1355,`Tipo`),ug(),Ac(1356,`th`,13),vN(1357,`Descrição`),ug()(),Ac(1358,`tr`,14)(1359,`td`,15),vN(1360,` values`),ug(),Ac(1361,`td`,19)(1362,`code`,44),vN(1363,` Array<string `),ug(),Ac(1364,`code`,45),vN(1365,` number> `),ug()(),Ac(1366,`td`,22)(1367,`p`),vN(1368,`Array com os valores a serem buscados.`),ug()()()(),Kc(1369,`br`),Ac(1370,`h4`,42)(1371,`code`,5),vN(1372,`PoMultiselectLiterals`),ug()(),Ac(1373,`div`,2)(1374,`p`),vN(1375,`Interface para definição das literais usadas no `),Ac(1376,`code`),vN(1377,`po-multiselect`),ug(),vN(1378,`.`),ug()(),Ac(1379,`h4`,10),vN(1380,`Propriedades`),ug(),Ac(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),vN(1384,`Nome`),ug(),Ac(1385,`th`,13),vN(1386,`Tipo`),ug(),Ac(1387,`th`,13),vN(1388,`Descrição`),ug()(),Ac(1389,`tr`,14)(1390,`td`,15)(1391,`div`,23)(1392,`span`,24),vN(1393,` noData`),Kc(1394,`br`),ug()()(),Ac(1395,`td`,19)(1396,`code`,25),vN(1397,`string`),ug()(),Ac(1398,`td`,22)(1399,`em`)(1400,`strong`),vN(1401,`(opcional)`),ug()(),Ac(1402,`p`),vN(1403,`Texto exibido quando não houver dados encontrados na busca.`),ug()()(),Ac(1404,`tr`,14)(1405,`td`,15)(1406,`div`,23)(1407,`span`,24),vN(1408,` placeholderSearch`),Kc(1409,`br`),ug()()(),Ac(1410,`td`,19)(1411,`code`,25),vN(1412,`string`),ug()(),Ac(1413,`td`,22)(1414,`em`)(1415,`strong`),vN(1416,`(opcional)`),ug()(),Ac(1417,`p`),vN(1418,`Texto do `),Ac(1419,`em`),vN(1420,`placeholder`),ug(),vN(1421,` do campo de busca.`),ug()()(),Ac(1422,`tr`,14)(1423,`td`,15)(1424,`div`,23)(1425,`span`,24),vN(1426,` selectAll`),Kc(1427,`br`),ug()()(),Ac(1428,`td`,19)(1429,`code`,25),vN(1430,`string`),ug()(),Ac(1431,`td`,22)(1432,`em`)(1433,`strong`),vN(1434,`(opcional)`),ug()(),Ac(1435,`p`),vN(1436,`Texto exibido no botão de selecionar todos.`),ug()()(),Ac(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),vN(1441,` selectItem`),Kc(1442,`br`),ug()()(),Ac(1443,`td`,19)(1444,`code`,25),vN(1445,`string`),ug()(),Ac(1446,`td`,22)(1447,`em`)(1448,`strong`),vN(1449,`(opcional)`),ug()(),Ac(1450,`p`),vN(1451,`Texto exibido na propriedade placeholder.`),ug()()()(),Ac(1452,`h4`,42)(1453,`code`,5),vN(1454,`PoMultiselectOption`),ug()(),Ac(1455,`div`,2)(1456,`p`),vN(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),ug()(),Ac(1458,`h4`,10),vN(1459,`Propriedades`),ug(),Ac(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),vN(1463,`Nome`),ug(),Ac(1464,`th`,13),vN(1465,`Tipo`),ug(),Ac(1466,`th`,13),vN(1467,`Descrição`),ug()(),Ac(1468,`tr`,14)(1469,`td`,15)(1470,`div`,23)(1471,`span`,24),vN(1472,` label`),Kc(1473,`br`),ug()()(),Ac(1474,`td`,19)(1475,`code`,25),vN(1476,`string`),ug()(),Ac(1477,`td`,22)(1478,`p`),vN(1479,`Label exibido nos itens da lista.`),ug()()(),Ac(1480,`tr`,14)(1481,`td`,15)(1482,`div`,23)(1483,`span`,24),vN(1484,` value`),Kc(1485,`br`),ug()()(),Ac(1486,`td`,19)(1487,`code`,25),vN(1488,`string `),ug(),Ac(1489,`code`,27),vN(1490,` number`),ug()(),Ac(1491,`td`,22)(1492,`p`),vN(1493,`Valor do objeto que será atribuído ao model.`),ug()()()(),Ac(1494,`h3`),vN(1495,`Enums`),ug(),Ac(1496,`h4`,4)(1497,`code`,5),vN(1498,`PoMultiselectFilterMode`),ug()(),Ac(1499,`div`,2)(1500,`p`),vN(1501,`Define o tipo de busca usado no po-multiselect.`),ug()(),Ac(1502,`h4`,10),vN(1503,`Propriedades`),ug(),Ac(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),vN(1507,`Nome`),ug(),Ac(1508,`th`,13),vN(1509,`Descrição`),ug()(),Ac(1510,`tr`,14)(1511,`td`,15)(1512,`div`,23)(1513,`span`,24),vN(1514,` startsWith`),Kc(1515,`br`),ug()()(),Ac(1516,`td`,22)(1517,`p`),vN(1518,`Verifica se o texto `),Ac(1519,`em`),vN(1520,`inicia`),ug(),vN(1521,` com o valor pesquisado.`),ug()()(),Ac(1522,`tr`,14)(1523,`td`,15)(1524,`div`,23)(1525,`span`,24),vN(1526,` contains`),Kc(1527,`br`),ug()()(),Ac(1528,`td`,22)(1529,`p`),vN(1530,`Verifica se o texto `),Ac(1531,`em`),vN(1532,`contém`),ug(),vN(1533,` o valor pesquisado.`),ug()()(),Ac(1534,`tr`,14)(1535,`td`,15)(1536,`div`,23)(1537,`span`,24),vN(1538,` endsWith`),Kc(1539,`br`),ug()()(),Ac(1540,`td`,22)(1541,`p`),vN(1542,`Verifica se o texto `),Ac(1543,`em`),vN(1544,`finaliza`),ug(),vN(1545,` com o valor pesquisado.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var gt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-multiselect-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-multiselect-basic-view`)(6,`sample-po-multiselect-labs-view`)(7,`sample-po-multiselect-vacation-view`)(8,`sample-po-multiselect-vacation-reactive-form-view`)(9,`sample-po-multiselect-template-view`)(10,`sample-po-multiselect-heroes-view`)(11,`sample-po-multiselect-any-array-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,Ve,Ae,Oe,qe,Be,ze,Ie,He],encapsulation:2,changeDetection:1})}return l})()}];var Re=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[kL.forChild(gt),kL]})}return l})();var vn=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[Ta,Re]})}return l})();export{vn as DocPoMultiselectModule};