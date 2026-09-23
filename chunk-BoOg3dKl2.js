import{t as r}from"./chunk-zystk1pz.js";import{$i as ow,$r as Vx,Ci as eP,Et as V8e,F as G4,Hr as Tw,Ii as ht,In as ys,Ir as Qy,It as Zt,Jn as CY,K as Iye,Kr as Un,M as ECe,Mi as gg,Ni as he,Nt as Y0e,Qi as oN,Sa as yN,Si as db,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Xr as VN,Yi as mN,Yn as Ce,Zr as Vk,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,dn as oU,ea as p0,ga as w,gi as bw,hr as MY,ia as q,ir as I,jn as wp,ki as fm,kn as vr,kr as PN,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wi as f,xn as sP,yr as Mx}from"./main-NT5YGKBQ.js";var Te=(()=>{class l{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,i){a&1&&ql(0,`po-multiselect`,0),a&2&&cw(`p-options`,i.options)},dependencies:[sP],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l});var Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-multiselect-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Te],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let c=Vx();Ml(0,`div`,2)(1,`po-multiselect`,3),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.multiselect,p)||(i.multiselect=p),Jy(p)}),ht(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),lg(),ql(2,`po-divider`),Ml(3,`div`,2),ql(4,`po-info`,4)(5,`po-info`,5),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.option.label,p)||(i.option.label=p),Jy(p)}),lg(),f0(),Ml(11,`po-input`,7),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.option.value,p)||(i.option.value=p),Jy(p)}),lg(),f0(),lg(),Ml(12,`div`,2)(13,`po-button`,8),ht(`p-click`,function(){return i.addOption()}),lg()()(),ql(14,`po-divider`),Ml(15,`form`,null,1)(17,`po-input`,9),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.label,p)||(i.label=p),Jy(p)}),lg(),f0(),Ml(18,`po-input`,10),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.help,p)||(i.help=p),Jy(p)}),lg(),f0(),Ml(19,`po-input`,11),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.helperText,p)||(i.helperText=p),Jy(p)}),lg(),f0(),Ml(20,`po-input`,12),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.placeholder,p)||(i.placeholder=p),Jy(p)}),lg(),f0(),Ml(21,`po-input`,13),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.placeholderSearch,p)||(i.placeholderSearch=p),Jy(p)}),lg(),f0(),Ml(22,`po-input`,14),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),Jy(p)}),lg(),f0(),Ml(23,`po-input`,15),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.literals,p)||(i.literals=p),Jy(p)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(24,`po-input`,16),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.filterService,p)||(i.filterService=p),Jy(p)}),lg(),f0(),Ml(25,`po-input`,17),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.fieldValue,p)||(i.fieldValue=p),Jy(p)}),lg(),f0(),Ml(26,`po-input`,18),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.fieldLabel,p)||(i.fieldLabel=p),Jy(p)}),lg(),f0(),Ml(27,`po-checkbox-group`,19),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.properties,p)||(i.properties=p),Jy(p)}),lg(),f0(),Ml(28,`po-radio-group`,20),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.filterMode,p)||(i.filterMode=p),Jy(p)}),lg(),f0(),Ml(29,`po-radio-group`,21),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.size,p)||(i.size=p),Jy(p)}),lg(),f0(),Ml(30,`po-radio-group`,22),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.listboxPosition,p)||(i.listboxPosition=p),Jy(p)}),lg(),f0(),Ml(31,`div`,2)(32,`po-button`,23),ht(`p-click`,function(){return i.restore()}),lg()()()}if(a&2){let c=Yx(8);Up(),Tw(`ngModel`,i.multiselect),cw(`p-helper`,i.helperText)(`p-auto-height`,i.properties.includes(`autoHeight`))(`p-disabled`,i.properties.includes(`disabled`))(`p-field-label`,i.fieldLabel)(`p-field-value`,i.fieldValue)(`p-filter-service`,i.filterService)(`p-filter-mode`,i.filterMode)(`p-help`,i.help)(`p-hide-search`,i.properties.includes(`hideSearch`))(`p-hide-select-all`,i.properties.includes(`hideSelectAll`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-optional`,i.properties.includes(`optional`))(`p-options`,i.options)(`p-placeholder`,i.placeholder)(`p-placeholder-search`,i.placeholderSearch)(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-sort`,i.properties.includes(`sort`))(`p-listbox-control-position`,i.listboxPosition)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,i.multiselect),Up(),cw(`p-value`,i.event),Up(5),Tw(`ngModel`,i.option.label),p0(),Up(),Tw(`ngModel`,i.option.value),p0(),Up(2),cw(`p-disabled`,c.form.invalid),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.placeholderSearch),p0(),Up(),Tw(`ngModel`,i.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.filterService),p0(),Up(),Tw(`ngModel`,i.fieldValue),p0(),Up(),Tw(`ngModel`,i.fieldLabel),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.filterMode),cw(`p-disabled`,i.properties.includes(`hideSearch`))(`p-options`,i.filterModeOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0(),Up(),Tw(`ngModel`,i.listboxPosition),cw(`p-options`,i.listboxPositionOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,sP,q0e,kbe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l});var Ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-multiselect-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,De],encapsulation:2,changeDetection:1})}return l})();var Le=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Vx();Ml(0,`form`,null,0)(2,`h3`),mN(3,`Collective vacations`),lg(),ql(4,`po-divider`),Ml(5,`div`,2)(6,`po-datepicker`,3),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.initialPeriod,p)||(i.initialPeriod=p),Jy(p)}),lg(),f0(),Ml(7,`po-datepicker`,4),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.finalPeriod,p)||(i.finalPeriod=p),Jy(p)}),lg(),f0(),lg(),Ml(8,`div`,2)(9,`po-radio-group`,5),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.days,p)||(i.days=p),Jy(p)}),lg(),f0(),lg(),Ml(10,`div`,2)(11,`po-multiselect`,6),Mw(`ngModelChange`,function(p){return Qy(c),yN(i.employeesVacations,p)||(i.employeesVacations=p),Jy(p)}),lg(),f0(),lg(),Ml(12,`div`,2)(13,`po-button`,7),ht(`p-click`,function(){Qy(c);let p=Yx(16);return i.updateNameEmployeesVacations(),Jy(p.open())}),lg(),Ml(14,`po-button`,8),ht(`p-click`,function(){return i.clean()}),lg()()(),Ml(15,`po-modal`,9,1)(17,`div`,2),ql(18,`po-info`,10),PN(19,`date`),ql(20,`po-info`,11),PN(21,`date`),ql(22,`po-info`,12),lg(),ql(23,`po-divider`),Ml(24,`div`,2),ql(25,`po-info`,13),lg()()}if(a&2){let c=Yx(1);Up(6),Tw(`ngModel`,i.initialPeriod),p0(),Up(),Tw(`ngModel`,i.finalPeriod),cw(`p-min-date`,i.initialPeriod),p0(),Up(2),Tw(`ngModel`,i.days),cw(`p-options`,i.daysOptions),p0(),Up(2),Tw(`ngModel`,i.employeesVacations),cw(`p-options`,i.employees),p0(),Up(2),cw(`p-disabled`,c.form.invalid),Up(5),cw(`p-value`,VN(19,12,i.initialPeriod,`longDate`,`+0000`)),Up(2),cw(`p-value`,VN(21,16,i.finalPeriod,`longDate`,`+0000`)),Up(2),cw(`p-value`,i.days),Up(3),cw(`p-value`,i.nameEmployeesVacations)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,Y0e,sP,q0e,kbe,vr,eP],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l});var Oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect - Vacation`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #f="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-multiselect-vacation`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Le],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{formBuilder=f(MY);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,fm.required],finalPeriod:[null,fm.required],days:[null,fm.required],employeesVacations:[null,fm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Vx();Ml(0,`form`,1)(1,`h3`),mN(2,`Collective vacations`),lg(),ql(3,`po-divider`),Ml(4,`div`,2),ql(5,`po-datepicker`,3),f0(),ql(6,`po-datepicker`,4),f0(),lg(),Ml(7,`div`,2),ql(8,`po-multiselect`,5),f0(),ql(9,`po-radio-group`,6),f0(),lg(),Ml(10,`div`,2)(11,`po-button`,7),ht(`p-click`,function(){Qy(c);let p=Yx(14);return i.updateEmployeesVacations(),Jy(p.open())}),lg(),Ml(12,`po-button`,8),ht(`p-click`,function(){return i.clean()}),lg()()(),Ml(13,`po-modal`,9,0)(15,`div`,2),ql(16,`po-info`,10),PN(17,`date`),ql(18,`po-info`,11),PN(19,`date`),ql(20,`po-info`,12),lg(),ql(21,`po-divider`),Ml(22,`div`,2),ql(23,`po-info`,13),lg()()}a&2&&(cw(`formGroup`,i.formCollectiveVacations),Up(5),p0(),Up(),cw(`p-min-date`,i.getRangeFinalPeriod()),p0(),Up(2),cw(`p-auto-height`,!0)(`p-options`,i.employees)(`p-required`,!0),p0(),Up(),cw(`p-options`,i.daysOptions)(`p-columns`,3),p0(),Up(2),cw(`p-disabled`,i.formCollectiveVacations.invalid),Up(5),cw(`p-value`,VN(17,12,i.initialPeriod,`longDate`,`+0000`)),Up(2),cw(`p-value`,VN(19,16,i.finalPeriod,`longDate`,`+0000`)),Up(2),cw(`p-value`,i.days),Up(3),cw(`p-value`,i.nameEmployeesVacations))},dependencies:[IY,wY,CY,qk,Wk,Zt,nb,Y0e,sP,q0e,kbe,vr,eP],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l});var qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect - Vacation Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form [formGroup]="formCollectiveVacations">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-multiselect-vacation-reactive-form`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,tt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ke],encapsulation:2,changeDetection:1})}return l})();function it(l,K){l&1&&ql(0,`po-tag`,11),l&2&&cw(`p-icon`,!0)}function ot(l,K){l&1&&ql(0,`po-tag`,12),l&2&&cw(`p-icon`,!0)}function lt(l,K){l&1&&ql(0,`po-tag`,13),l&2&&cw(`p-icon`,!0)}function at(l,K){if(l&1&&(Ml(0,`div`,0)(1,`div`,7)(2,`div`,8),mN(3),lg()(),Ml(4,`div`,9)(5,`div`,10),Tx(6,it,1,1,`po-tag`,11),Tx(7,ot,1,1,`po-tag`,12),Tx(8,lt,1,1,`po-tag`,13),lg()()()),l&2){let s=K.$implicit;Up(3),bw(s.label),Up(3),Mx(s.admin?6:-1),Up(),Mx(s.access?7:-1),Up(),Mx(!s.admin&&!s.access?8:-1)}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`po-select`,1),Mw(`ngModelChange`,function(d){return yN(i.employee,d)||(i.employee=d),d}),lg(),f0(),Ml(2,`po-select`,2),Mw(`ngModelChange`,function(d){return yN(i.typeAccess,d)||(i.typeAccess=d),d}),lg(),f0(),Ml(3,`div`,3)(4,`po-button`,4),ht(`p-click`,function(){return i.changeAccess()}),lg()(),Ml(5,`po-multiselect`,5),ow(6,at,9,4,`ng-template`,6),lg()()),a&2&&(Up(),cw(`p-options`,i.employees),Tw(`ngModel`,i.employee),p0(),Up(),cw(`p-options`,i.typeAccessValue),Tw(`ngModel`,i.typeAccess),p0(),Up(2),cw(`p-disabled`,!i.employee||!i.typeAccess),Up(),cw(`p-options`,i.options)(`p-hide-select-all`,!0))},dependencies:[wY,Vk,Zt,sP,Iye,Tbe,ys],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return l})();var pt=l=>({"docs-sample-code-tabs":l});var Be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect - Template`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.containerFlex {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-multiselect-template`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,pt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Fe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{http=f(db);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(q(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(q(a=>a.items))}static ɵfac=function(a){return new(a||l)};static ɵprov=I({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var We=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[Ce([se])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`po-multiselect`,1),Mw(`ngModelChange`,function(d){return yN(i.multiselect,d)||(i.multiselect=d),d}),ht(`p-change`,function(d){return i.changeOptions(d)}),lg(),f0(),Ml(2,`po-container`,2),ql(3,`po-table`,3),lg()()),a&2&&(Up(),Tw(`ngModel`,i.multiselect),cw(`p-filter-service`,i.filterService)(`p-debounce-time`,i.debounce),p0(),Up(2),cw(`p-columns`,i.columns)(`p-items`,i.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[wY,Vk,wp,sP,oU],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l});var ze=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect - Heroes - using API`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-multiselect-heroes`),lg(),ql(27,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,dt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,We],encapsulation:2,changeDetection:1})}return l})();var Ne=(()=>{class l{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`div`,1)(2,`po-select`,2),Mw(`ngModelChange`,function(d){return yN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ht(`p-change`,function(d){return i.onChange(d)}),lg(),f0(),Ml(3,`po-select`,3),Mw(`ngModelChange`,function(d){return yN(i.fieldValue,d)||(i.fieldValue=d),d}),ht(`p-change`,function(d){return i.onChange(d)}),lg(),f0(),lg(),Ml(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),Mw(`ngModelChange`,function(d){return yN(i.company,d)||(i.company=d),d}),lg(),f0(),lg(),Ml(7,`div`,0),ql(8,`po-info`,5),lg()()()),a&2&&(Up(2),cw(`p-options`,i.optionsSelect),Tw(`ngModel`,i.fieldLabel),p0(),Up(),cw(`p-options`,i.optionsSelect),Tw(`ngModel`,i.fieldValue),p0(),Up(3),cw(`p-options`,i.options)(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel),Tw(`ngModel`,i.company),p0(),Up(2),cw(`p-value`,i.company))},dependencies:[wY,Vk,sP,Tbe,kbe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l});var Ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Multiselect - Array Any`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-multiselect-any-array`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,bt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ne],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1546,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoMultiselectComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),lg(),Ml(24,`p`),mN(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),lg(),Ml(26,`p`),mN(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),lg(),Ml(28,`p`),mN(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Ml(30,`code`),mN(31,`p-filter-service`),lg(),mN(32,`.`),lg(),Ml(33,`h4`),mN(34,`Boas práticas`),lg(),Ml(35,`ul`)(36,`li`),mN(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),lg(),Ml(38,`li`),mN(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),lg()(),Ml(40,`h4`),mN(41,`Acessibilidade tratada no componente`),lg(),Ml(42,`p`),mN(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(44,`ul`)(45,`li`),mN(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),lg(),Ml(47,`li`),mN(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),lg(),Ml(49,`li`),mN(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),lg(),Ml(51,`li`),mN(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),lg(),Ml(53,`li`),mN(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),lg()(),Ml(55,`h4`),mN(56,`Tokens customizáveis`),lg(),Ml(57,`p`),mN(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(59,`blockquote`)(60,`p`),mN(61,`Para maiores informações, acesse o guia `),Ml(62,`a`,6),mN(63,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(64,`.`),lg()(),Ml(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),mN(69,`Propriedade`),lg(),Ml(70,`th`),mN(71,`Descrição`),lg(),Ml(72,`th`),mN(73,`Valor Padrão`),lg()()(),Ml(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),mN(78,`Default Values`),lg()(),ql(79,`td`)(80,`td`),lg(),Ml(81,`tr`)(82,`td`)(83,`code`),mN(84,`--font-family`),lg()(),Ml(85,`td`),mN(86,`Família tipográfica usada`),lg(),Ml(87,`td`)(88,`code`),mN(89,`var(--font-family-theme)`),lg()()(),Ml(90,`tr`)(91,`td`)(92,`code`),mN(93,`--font-size`),lg()(),Ml(94,`td`),mN(95,`Tamanho da fonte`),lg(),Ml(96,`td`)(97,`code`),mN(98,`var(--font-size-default)`),lg()()(),Ml(99,`tr`)(100,`td`)(101,`code`),mN(102,`--text-color-placeholder`),lg(),mN(103,` \xA0`),lg(),Ml(104,`td`),mN(105,`Cor do texto do placeholder`),lg(),Ml(106,`td`)(107,`code`),mN(108,`var(--color-action-disabled)`),lg()()(),Ml(109,`tr`)(110,`td`)(111,`code`),mN(112,`--color`),lg()(),Ml(113,`td`),mN(114,`Cor principal do multiselect`),lg(),Ml(115,`td`)(116,`code`),mN(117,`var(--color-neutral-dark-70)`),lg()()(),Ml(118,`tr`)(119,`td`)(120,`code`),mN(121,`--background`),lg()(),Ml(122,`td`),mN(123,`Cor de background`),lg(),Ml(124,`td`)(125,`code`),mN(126,`var(--color-neutral-light-05)`),lg()()(),Ml(127,`tr`)(128,`td`)(129,`code`),mN(130,`--field-container-title-justify`),lg()(),Ml(131,`td`),mN(132,`Alinhamento horizontal do título (`),Ml(133,`code`),mN(134,`justify-content`),lg(),mN(135,`)`),lg(),Ml(136,`td`)(137,`code`),mN(138,`space-between`),lg()()(),Ml(139,`tr`)(140,`td`)(141,`code`),mN(142,`--field-container-title-flex`),lg()(),Ml(143,`td`),mN(144,`Flex do título (`),Ml(145,`code`),mN(146,`flex`),lg(),mN(147,`)`),lg(),Ml(148,`td`)(149,`code`),mN(150,`1 auto`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`strong`),mN(154,`Hover`),lg()(),ql(155,`td`)(156,`td`),lg(),Ml(157,`tr`)(158,`td`)(159,`code`),mN(160,`--color-hover`),lg()(),Ml(161,`td`),mN(162,`Cor principal no estado hover`),lg(),Ml(163,`td`)(164,`code`),mN(165,`var(--color-action-hover)`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--background-hover`),lg()(),Ml(170,`td`),mN(171,`Cor de background no estado hover`),lg(),Ml(172,`td`)(173,`code`),mN(174,`var(--color-brand-01-lighter)`),lg()()(),Ml(175,`tr`)(176,`td`)(177,`strong`),mN(178,`Focused`),lg()(),ql(179,`td`)(180,`td`),lg(),Ml(181,`tr`)(182,`td`)(183,`code`),mN(184,`--color-focused`),lg()(),Ml(185,`td`),mN(186,`Cor principal no estado de focus`),lg(),Ml(187,`td`)(188,`code`),mN(189,`var(--color-action-default)`),lg()()(),Ml(190,`tr`)(191,`td`)(192,`code`),mN(193,`--outline-color-focused`),lg(),mN(194,` \xA0`),lg(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-action-disabled)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg(),mN(219,` \xA0`),lg(),Ml(220,`td`),mN(221,`Cor de background no estado disabled \xA0`),lg(),Ml(222,`td`)(223,`code`),mN(224,`var(--color-neutral-light-20)`),lg()()(),Ml(225,`tr`)(226,`td`)(227,`strong`),mN(228,`Error`),lg()(),ql(229,`td`)(230,`td`),lg(),Ml(231,`tr`)(232,`td`)(233,`code`),mN(234,`--color-error`),lg()(),Ml(235,`td`),mN(236,`Cor principal no estado error`),lg(),Ml(237,`td`)(238,`code`),mN(239,`var(--color-feedback-negative-base)`),lg()()()()()(),Ml(240,`div`,7)(241,`h4`,8),mN(242,`Seletor`),lg(),Ml(243,`pre`,9),mN(244,`<po-multiselect
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
`),lg()(),Ml(245,`h4`,10),mN(246,`Propriedades`),lg(),Ml(247,`table`,11)(248,`tr`,12)(249,`th`,13),mN(250,`Nome`),lg(),Ml(251,`th`,13),mN(252,`Tipo`),lg(),Ml(253,`th`,13),mN(254,`Padrão`),lg(),Ml(255,`th`,13),mN(256,`Descrição`),lg()(),Ml(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),mN(261,` (p-additional-help)`),ql(262,`br`),lg()(),Ml(263,`div`,18),mN(264,`Deprecated`),lg()(),Ml(265,`td`,19)(266,`code`,20),mN(267,`EventEmitter`),lg()(),Ml(268,`td`,21),mN(269,`-`),lg(),Ml(270,`td`,22)(271,`em`)(272,`strong`),mN(273,`(opcional)`),lg()(),Ml(274,`p`),mN(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(276,`blockquote`)(277,`p`),mN(278,`Essa propriedade está `),Ml(279,`strong`),mN(280,`depreciada`),lg(),mN(281,` e será removida na versão `),Ml(282,`code`),mN(283,`23.x.x`),lg(),mN(284,`. Recomendamos utilizar a propriedade `),Ml(285,`code`),mN(286,`p-helper`),lg(),mN(287,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(288,`tr`,14)(289,`td`,15)(290,`div`,23)(291,`span`,24),mN(292,` p-additional-help-tooltip`),ql(293,`br`),lg()(),Ml(294,`div`,18),mN(295,`Deprecated`),lg()(),Ml(296,`td`,19)(297,`code`,25),mN(298,`string`),lg()(),Ml(299,`td`,21),mN(300,`-`),lg(),Ml(301,`td`,22)(302,`em`)(303,`strong`),mN(304,`(opcional)`),lg()(),Ml(305,`p`),mN(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(307,`code`),mN(308,`po-helper`),lg(),mN(309,`.
`),Ml(310,`strong`),mN(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(312,`blockquote`)(313,`p`),mN(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(315,`blockquote`)(316,`p`),mN(317,`Essa propriedade está `),Ml(318,`strong`),mN(319,`depreciada`),lg(),mN(320,` e será removida na versão `),Ml(321,`code`),mN(322,`23.x.x`),lg(),mN(323,`. Recomendamos utilizar a propriedade `),Ml(324,`code`),mN(325,`p-helper`),lg(),mN(326,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(327,`tr`,14)(328,`td`,15)(329,`div`,23)(330,`span`,24),mN(331,` p-append-in-body`),ql(332,`br`),lg()()(),Ml(333,`td`,19)(334,`code`,26),mN(335,`boolean`),lg()(),Ml(336,`td`,21)(337,`p`)(338,`code`),mN(339,`false`),lg()()(),Ml(340,`td`,22)(341,`em`)(342,`strong`),mN(343,`(opcional)`),lg()(),Ml(344,`p`),mN(345,`Define que o `),Ml(346,`code`),mN(347,`listbox`),lg(),mN(348,` e/ou popover (`),Ml(349,`code`),mN(350,`p-helper`),lg(),mN(351,` e/ou `),Ml(352,`code`),mN(353,`p-error-limit`),lg(),mN(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),lg(),Ml(355,`blockquote`)(356,`p`),mN(357,`Quando utilizado com `),Ml(358,`code`),mN(359,`p-helper`),lg(),mN(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),mN(365,` p-auto-focus`),ql(366,`br`),lg()()(),Ml(367,`td`,19)(368,`code`,26),mN(369,`boolean`),lg()(),Ml(370,`td`,21)(371,`p`)(372,`code`),mN(373,`false`),lg()()(),Ml(374,`td`,22)(375,`em`)(376,`strong`),mN(377,`(opcional)`),lg()(),Ml(378,`p`),mN(379,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(380,`blockquote`)(381,`p`),mN(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(383,`tr`,14)(384,`td`,15)(385,`div`,23)(386,`span`,24),mN(387,` p-auto-height`),ql(388,`br`),lg()()(),Ml(389,`td`,19)(390,`code`,26),mN(391,`boolean`),lg()(),Ml(392,`td`,21)(393,`p`)(394,`code`),mN(395,`false`),lg()()(),Ml(396,`td`,22)(397,`em`)(398,`strong`),mN(399,`(opcional)`),lg()(),Ml(400,`p`),mN(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),lg(),Ml(402,`blockquote`)(403,`p`),mN(404,`O valor padrão será `),Ml(405,`code`),mN(406,`true`),lg(),mN(407,` quando houver serviço (`),Ml(408,`code`),mN(409,`p-filter-service`),lg(),mN(410,`).`),lg()()()(),Ml(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),mN(415,` (p-blur)`),ql(416,`br`),lg()()(),Ml(417,`td`,19)(418,`code`,20),mN(419,`EventEmitter`),lg()(),Ml(420,`td`,21),mN(421,`-`),lg(),Ml(422,`td`,22)(423,`em`)(424,`strong`),mN(425,`(opcional)`),lg()(),Ml(426,`p`),mN(427,`Evento disparado ao sair do campo.`),lg()()(),Ml(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),mN(432,` (p-change)`),ql(433,`br`),lg()()(),Ml(434,`td`,19)(435,`code`,20),mN(436,`EventEmitter`),lg()(),Ml(437,`td`,21),mN(438,`-`),lg(),Ml(439,`td`,22)(440,`em`)(441,`strong`),mN(442,`(opcional)`),lg()(),Ml(443,`p`),mN(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),lg()()(),Ml(445,`tr`,14)(446,`td`,15)(447,`div`,16)(448,`span`,17),mN(449,` (p-change-model)`),ql(450,`br`),lg()()(),Ml(451,`td`,19)(452,`code`,20),mN(453,`EventEmitter`),lg()(),Ml(454,`td`,21),mN(455,`-`),lg(),Ml(456,`td`,22)(457,`em`)(458,`strong`),mN(459,`(opcional)`),lg()(),Ml(460,`p`),mN(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(462,`code`),mN(463,`setValue`),lg(),mN(464,`, `),Ml(465,`code`),mN(466,`patchValue`),lg(),mN(467,`, carregamento assíncrono).`),lg(),Ml(468,`p`),mN(469,`Diferentemente do `),Ml(470,`code`),mN(471,`p-change`),lg(),mN(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(473,`code`),mN(474,`p-change-model`),lg(),mN(475,` cobre todos os cenários de alteração de valor.`),lg(),Ml(476,`p`),mN(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(478,`tr`,14)(479,`td`,15)(480,`div`,23)(481,`span`,24),mN(482,` p-compact-label`),ql(483,`br`),lg()()(),Ml(484,`td`,19)(485,`code`,26),mN(486,`boolean`),lg()(),Ml(487,`td`,21)(488,`p`)(489,`code`),mN(490,`false`),lg()()(),Ml(491,`td`,22)(492,`em`)(493,`strong`),mN(494,`(opcional)`),lg()(),Ml(495,`p`),mN(496,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(497,`p`),mN(498,`Quando habilitado (`),Ml(499,`code`),mN(500,`true`),lg(),mN(501,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(502,`ul`)(503,`li`)(504,`code`),mN(505,`po-label`),lg()(),Ml(506,`li`)(507,`code`),mN(508,`p-requirement (showRequired)`),lg()(),Ml(509,`li`)(510,`code`),mN(511,`po-helper`),lg()()(),Ml(512,`p`),mN(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(514,`p`),mN(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(516,`ul`)(517,`li`)(518,`code`),mN(519,`--field-container-title-justify`),lg()(),Ml(520,`li`)(521,`code`),mN(522,`--field-container-title-flex`),lg()()(),Ml(523,`p`),mN(524,`Exemplo:`),lg(),Ml(525,`pre`)(526,`code`),mN(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(528,`p`),mN(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(530,`tr`,14)(531,`td`,15)(532,`div`,23)(533,`span`,24),mN(534,` p-debounce-time`),ql(535,`br`),lg()()(),Ml(536,`td`,19)(537,`code`,27),mN(538,`number`),lg()(),Ml(539,`td`,21)(540,`p`)(541,`code`),mN(542,`400`),lg()()(),Ml(543,`td`,22)(544,`em`)(545,`strong`),mN(546,`(opcional)`),lg()(),Ml(547,`p`),mN(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),lg(),Ml(549,`blockquote`)(550,`p`),mN(551,`Será utilizada apenas quando houver serviço (`),Ml(552,`code`),mN(553,`p-filter-service`),lg(),mN(554,`) e somente será aceito valor maior do que `),Ml(555,`em`),mN(556,`zero`),lg(),mN(557,`.`),lg()()()(),Ml(558,`tr`,14)(559,`td`,15)(560,`div`,23)(561,`span`,24),mN(562,` p-disabled`),ql(563,`br`),lg()()(),Ml(564,`td`,19)(565,`code`,26),mN(566,`boolean`),lg()(),Ml(567,`td`,21)(568,`p`)(569,`code`),mN(570,`false`),lg()()(),Ml(571,`td`,22)(572,`em`)(573,`strong`),mN(574,`(opcional)`),lg()(),Ml(575,`p`),mN(576,`Indica que o campo será desabilitado.`),lg()()(),Ml(577,`tr`,14)(578,`td`,15)(579,`div`,23)(580,`span`,24),mN(581,` p-error-limit`),ql(582,`br`),lg()()(),Ml(583,`td`,19)(584,`code`,26),mN(585,`boolean`),lg()(),Ml(586,`td`,21)(587,`p`)(588,`code`),mN(589,`false`),lg()()(),Ml(590,`td`,22)(591,`em`)(592,`strong`),mN(593,`(opcional)`),lg()(),Ml(594,`p`),mN(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(596,`blockquote`)(597,`p`),mN(598,`Caso essa propriedade seja definida como `),Ml(599,`code`),mN(600,`true`),lg(),mN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(602,`tr`,14)(603,`td`,15)(604,`div`,23)(605,`span`,24),mN(606,` p-field-error-message`),ql(607,`br`),lg()()(),Ml(608,`td`,19)(609,`code`,25),mN(610,`string`),lg()(),Ml(611,`td`,21),mN(612,`-`),lg(),Ml(613,`td`,22)(614,`em`)(615,`strong`),mN(616,`(opcional)`),lg()(),Ml(617,`p`),mN(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(619,`blockquote`)(620,`p`),mN(621,`Necessário que a propriedade `),Ml(622,`code`),mN(623,`p-required`),lg(),mN(624,` esteja habilitada.`),lg()()()(),Ml(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),mN(629,` p-field-label`),ql(630,`br`),lg()()(),Ml(631,`td`,19)(632,`code`,25),mN(633,`string`),lg()(),Ml(634,`td`,21)(635,`p`)(636,`code`),mN(637,`label`),lg()()(),Ml(638,`td`,22)(639,`em`)(640,`strong`),mN(641,`(opcional)`),lg()(),Ml(642,`p`),mN(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ml(644,`code`),mN(645,`p-options`),lg(),mN(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),lg(),Ml(647,`p`),mN(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Ml(649,`code`),mN(650,`PoMultiSelectOption`),lg(),mN(651,`.`),lg()()(),Ml(652,`tr`,14)(653,`td`,15)(654,`div`,23)(655,`span`,24),mN(656,` p-field-value`),ql(657,`br`),lg()()(),Ml(658,`td`,19)(659,`code`,25),mN(660,`string`),lg()(),Ml(661,`td`,21)(662,`p`)(663,`code`),mN(664,`value`),lg()()(),Ml(665,`td`,22)(666,`em`)(667,`strong`),mN(668,`(opcional)`),lg()(),Ml(669,`p`),mN(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ml(671,`code`),mN(672,`p-options`),lg(),mN(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),lg(),Ml(674,`p`),mN(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Ml(676,`code`),mN(677,`PoMultiSelectOption`),lg(),mN(678,`.`),lg()()(),Ml(679,`tr`,14)(680,`td`,15)(681,`div`,23)(682,`span`,24),mN(683,` p-filter-mode`),ql(684,`br`),lg()()(),Ml(685,`td`,19)(686,`code`,28),mN(687,`PoMultiselectFilterMode`),lg()(),Ml(688,`td`,21)(689,`p`)(690,`code`),mN(691,`startsWith`),lg()()(),Ml(692,`td`,22)(693,`em`)(694,`strong`),mN(695,`(opcional)`),lg()(),Ml(696,`p`),mN(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),lg()()(),Ml(698,`tr`,14)(699,`td`,15)(700,`div`,23)(701,`span`,24),mN(702,` p-filter-service`),ql(703,`br`),lg()()(),Ml(704,`td`,19)(705,`code`,25),mN(706,`string `),lg(),Ml(707,`code`,29),mN(708,` PoMultiselectFilter`),lg()(),Ml(709,`td`,21),mN(710,`-`),lg(),Ml(711,`td`,22)(712,`em`)(713,`strong`),mN(714,`(opcional)`),lg()(),Ml(715,`p`),mN(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),lg(),Ml(717,`p`),mN(718,`Também existe a possibilidade de informar um serviço implementando a interface `),Ml(719,`code`),mN(720,`PoMultiselectFilter`),lg(),mN(721,`.`),lg(),Ml(722,`p`),mN(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Ml(724,`a`,30),mN(725,`API PO UI`),lg(),mN(726,` e utilizar as propriedades `),Ml(727,`code`),mN(728,`p-field-label`),lg(),mN(729,` e `),Ml(730,`code`),mN(731,`p-field-value`),lg(),mN(732,` para a construção da lista de itens.`),lg(),Ml(733,`p`),mN(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),lg(),Ml(735,`pre`)(736,`code`),mN(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),lg()(),Ml(738,`p`),mN(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),lg(),Ml(740,`pre`)(741,`code`),mN(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),lg()()()(),Ml(743,`tr`,14)(744,`td`,15)(745,`div`,23)(746,`span`,24),mN(747,` p-help`),ql(748,`br`),lg()()(),Ml(749,`td`,19)(750,`code`,25),mN(751,`string`),lg()(),Ml(752,`td`,21),mN(753,`-`),lg(),Ml(754,`td`,22)(755,`em`)(756,`strong`),mN(757,`(opcional)`),lg()(),Ml(758,`p`),mN(759,`Texto de apoio para o campo.`),lg()()(),Ml(760,`tr`,14)(761,`td`,15)(762,`div`,23)(763,`span`,24),mN(764,` p-hide-search`),ql(765,`br`),lg()()(),Ml(766,`td`,19)(767,`code`,26),mN(768,`boolean`),lg()(),Ml(769,`td`,21)(770,`p`)(771,`code`),mN(772,`false`),lg()()(),Ml(773,`td`,22)(774,`em`)(775,`strong`),mN(776,`(opcional)`),lg()(),Ml(777,`p`),mN(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),lg()()(),Ml(779,`tr`,14)(780,`td`,15)(781,`div`,23)(782,`span`,24),mN(783,` p-hide-select-all`),ql(784,`br`),lg()()(),Ml(785,`td`,19)(786,`code`,26),mN(787,`boolean`),lg()(),Ml(788,`td`,21)(789,`p`)(790,`code`),mN(791,`false`),lg()()(),Ml(792,`td`,22)(793,`em`)(794,`strong`),mN(795,`(opcional)`),lg()(),Ml(796,`p`),mN(797,`Indica se o campo "Selecionar todos" será escondido.`),lg()()(),Ml(798,`tr`,14)(799,`td`,15)(800,`div`,16)(801,`span`,17),mN(802,` (p-keydown)`),ql(803,`br`),lg()()(),Ml(804,`td`,19)(805,`code`,20),mN(806,`EventEmitter`),lg()(),Ml(807,`td`,21),mN(808,`-`),lg(),Ml(809,`td`,22)(810,`em`)(811,`strong`),mN(812,`(opcional)`),lg()(),Ml(813,`p`),mN(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(815,`code`),mN(816,`KeyboardEvent`),lg(),mN(817,` com informações sobre a tecla.`),lg()()(),Ml(818,`tr`,14)(819,`td`,15)(820,`div`,23)(821,`span`,24),mN(822,` p-label`),ql(823,`br`),lg()()(),Ml(824,`td`,19)(825,`code`,25),mN(826,`string`),lg()(),Ml(827,`td`,21),mN(828,`-`),lg(),Ml(829,`td`,22)(830,`em`)(831,`strong`),mN(832,`(opcional)`),lg()(),Ml(833,`p`),mN(834,`Label no componente.`),lg()()(),Ml(835,`tr`,14)(836,`td`,15)(837,`div`,23)(838,`span`,24),mN(839,` p-label-text-wrap`),ql(840,`br`),lg()()(),Ml(841,`td`,19)(842,`code`,26),mN(843,`boolean`),lg()(),Ml(844,`td`,21)(845,`p`)(846,`code`),mN(847,`false`),lg()()(),Ml(848,`td`,22)(849,`em`)(850,`strong`),mN(851,`(opcional)`),lg()(),Ml(852,`p`),mN(853,`Habilita a quebra automática do texto da propriedade `),Ml(854,`code`),mN(855,`p-label`),lg(),mN(856,`. Quando `),Ml(857,`code`),mN(858,`p-label-text-wrap`),lg(),mN(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(860,`tr`,14)(861,`td`,15)(862,`div`,23)(863,`span`,24),mN(864,` p-listbox-control-position`),ql(865,`br`),lg()()(),Ml(866,`td`,19)(867,`code`,31),mN(868,`'top' `),lg(),Ml(869,`code`,32),mN(870,` 'bottom'`),lg()(),Ml(871,`td`,21)(872,`p`)(873,`code`),mN(874,`bottom`),lg()()(),Ml(875,`td`,22)(876,`em`)(877,`strong`),mN(878,`(opcional)`),lg()(),Ml(879,`p`),mN(880,`Define a direção preferida para exibição do `),Ml(881,`code`),mN(882,`listbox`),lg(),mN(883,` em relação ao campo (`),Ml(884,`code`),mN(885,`top`),lg(),mN(886,` ou `),Ml(887,`code`),mN(888,`bottom`),lg(),mN(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),lg()()(),Ml(890,`tr`,14)(891,`td`,15)(892,`div`,23)(893,`span`,24),mN(894,` p-literals`),ql(895,`br`),lg()()(),Ml(896,`td`,19)(897,`code`,33),mN(898,`PoMultiselectLiterals`),lg()(),Ml(899,`td`,21),mN(900,`-`),lg(),Ml(901,`td`,22)(902,`em`)(903,`strong`),mN(904,`(opcional)`),lg()(),Ml(905,`p`),mN(906,`Objeto com as literais usadas no `),Ml(907,`code`),mN(908,`po-multiselect`),lg(),mN(909,`.`),lg(),Ml(910,`p`),mN(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(912,`pre`)(913,`code`),mN(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),lg()(),Ml(915,`p`),mN(916,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(917,`pre`)(918,`code`),mN(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),lg()(),Ml(920,`p`),mN(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),lg(),Ml(922,`pre`)(923,`code`),mN(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),lg()(),Ml(925,`blockquote`)(926,`p`),mN(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(928,`a`,34)(929,`code`),mN(930,`PoI18nService`),lg()(),mN(931,` ou do browser.`),lg()()()(),Ml(932,`tr`,14)(933,`td`,15)(934,`div`,23)(935,`span`,24),mN(936,` p-loading`),ql(937,`br`),lg()()(),Ml(938,`td`,19)(939,`code`,26),mN(940,`boolean`),lg()(),Ml(941,`td`,21)(942,`p`)(943,`code`),mN(944,`false`),lg()()(),Ml(945,`td`,22)(946,`em`)(947,`strong`),mN(948,`(opcional)`),lg()(),Ml(949,`p`),mN(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(951,`tr`,14)(952,`td`,15)(953,`div`,23)(954,`span`,24),mN(955,` name`),ql(956,`br`),lg()()(),Ml(957,`td`,19)(958,`code`,25),mN(959,`string`),lg()(),Ml(960,`td`,21),mN(961,`-`),lg(),Ml(962,`td`,22)(963,`p`),mN(964,`Nome do componente.`),lg()()(),Ml(965,`tr`,14)(966,`td`,15)(967,`div`,23)(968,`span`,24),mN(969,` p-optional`),ql(970,`br`),lg()()(),Ml(971,`td`,19)(972,`code`,26),mN(973,`boolean`),lg()(),Ml(974,`td`,21)(975,`p`)(976,`code`),mN(977,`false`),lg()()(),Ml(978,`td`,22)(979,`em`)(980,`strong`),mN(981,`(opcional)`),lg()(),Ml(982,`p`),mN(983,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(984,`blockquote`)(985,`p`),mN(986,`Não será exibida a indicação se:`),lg()(),Ml(987,`ul`)(988,`li`),mN(989,`O campo conter `),Ml(990,`code`),mN(991,`p-required`),lg(),mN(992,`;`),lg(),Ml(993,`li`),mN(994,`Não possuir `),Ml(995,`code`),mN(996,`p-help`),lg(),mN(997,` e/ou `),Ml(998,`code`),mN(999,`p-label`),lg(),mN(1e3,`.`),lg()()()(),Ml(1001,`tr`,14)(1002,`td`,15)(1003,`div`,23)(1004,`span`,24),mN(1005,` p-options`),ql(1006,`br`),lg()()(),Ml(1007,`td`,19)(1008,`code`,35),mN(1009,`Array<PoMultiselectOption `),lg(),Ml(1010,`code`,36),mN(1011,` any>`),lg()(),Ml(1012,`td`,21),mN(1013,`-`),lg(),Ml(1014,`td`,22)(1015,`p`),mN(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),lg(),Ml(1017,`blockquote`)(1018,`p`),mN(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),lg()(),Ml(1020,`pre`)(1021,`code`),mN(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),lg()(),Ml(1023,`blockquote`)(1024,`p`),mN(1025,`A lista pode ser definida utilizando um array com o valor representando `),Ml(1026,`code`),mN(1027,`value`),lg(),mN(1028,` e `),Ml(1029,`code`),mN(1030,`label`),lg(),mN(1031,` das seguintes formas:`),lg()(),Ml(1032,`pre`)(1033,`code`),mN(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),lg()(),Ml(1035,`pre`)(1036,`code`),mN(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),lg()(),Ml(1038,`ul`)(1039,`li`),mN(1040,`Aconselha-se utilizar valores distintos no `),Ml(1041,`code`),mN(1042,`label`),lg(),mN(1043,` e `),Ml(1044,`code`),mN(1045,`value`),lg(),mN(1046,` dos itens.`),lg()()()(),Ml(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),mN(1051,` p-placeholder`),ql(1052,`br`),lg()()(),Ml(1053,`td`,19)(1054,`code`,25),mN(1055,`string`),lg()(),Ml(1056,`td`,21),mN(1057,`-`),lg(),Ml(1058,`td`,22)(1059,`em`)(1060,`strong`),mN(1061,`(opcional)`),lg()(),Ml(1062,`p`),mN(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),lg()()(),Ml(1064,`tr`,14)(1065,`td`,15)(1066,`div`,23)(1067,`span`,24),mN(1068,` p-placeholder-search`),ql(1069,`br`),lg()()(),Ml(1070,`td`,19)(1071,`code`,25),mN(1072,`string`),lg()(),Ml(1073,`td`,21)(1074,`p`)(1075,`code`),mN(1076,`Buscar`),lg()()(),Ml(1077,`td`,22)(1078,`em`)(1079,`strong`),mN(1080,`(opcional)`),lg()(),Ml(1081,`p`),mN(1082,`Placeholder do campo de pesquisa.`),lg(),Ml(1083,`blockquote`)(1084,`p`),mN(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),lg()()()(),Ml(1086,`tr`,14)(1087,`td`,15)(1088,`div`,23)(1089,`span`,24),mN(1090,` p-helper`),ql(1091,`br`),lg()()(),Ml(1092,`td`,19)(1093,`code`,37),mN(1094,`PoHelperOptions `),lg(),Ml(1095,`code`,25),mN(1096,` string`),lg()(),Ml(1097,`td`,21),mN(1098,`-`),lg(),Ml(1099,`td`,22)(1100,`em`)(1101,`strong`),mN(1102,`(opcional)`),lg()(),Ml(1103,`p`),mN(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1105,`code`),mN(1106,`p-label`),lg(),mN(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1108,`code`),mN(1109,`p-label`),lg(),mN(1110,`.`),lg(),Ml(1111,`blockquote`)(1112,`p`),mN(1113,`Para mais informações acesse: `),Ml(1114,`a`,38),mN(1115,`https://po-ui.io/documentation/po-helper`),lg(),mN(1116,`.`),lg()(),Ml(1117,`blockquote`)(1118,`p`),mN(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1120,`code`),mN(1121,`p-additional-help-tooltip`),lg(),mN(1122,` e `),Ml(1123,`code`),mN(1124,`p-additional-help`),lg(),mN(1125,`) será ignorado.`),lg()()()(),Ml(1126,`tr`,14)(1127,`td`,15)(1128,`div`,23)(1129,`span`,24),mN(1130,` p-required`),ql(1131,`br`),lg()()(),Ml(1132,`td`,19)(1133,`code`,26),mN(1134,`boolean`),lg()(),Ml(1135,`td`,21)(1136,`p`)(1137,`code`),mN(1138,`false`),lg()()(),Ml(1139,`td`,22)(1140,`em`)(1141,`strong`),mN(1142,`(opcional)`),lg()(),Ml(1143,`p`),mN(1144,`Define que o campo será obrigatório.`),lg(),Ml(1145,`blockquote`)(1146,`p`),mN(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1148,`code`),mN(1149,`(p-disabled)`),lg(),mN(1150,`.`),lg()()()(),Ml(1151,`tr`,14)(1152,`td`,15)(1153,`div`,23)(1154,`span`,24),mN(1155,` p-show-required`),ql(1156,`br`),lg()()(),Ml(1157,`td`,19)(1158,`code`,26),mN(1159,`boolean`),lg()(),Ml(1160,`td`,21),mN(1161,`-`),lg(),Ml(1162,`td`,22)(1163,`p`),mN(1164,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1165,`blockquote`)(1166,`p`),mN(1167,`Não será exibida a indicação se:`),lg()(),Ml(1168,`ul`)(1169,`li`),mN(1170,`Não possuir `),Ml(1171,`code`),mN(1172,`p-help`),lg(),mN(1173,` e/ou `),Ml(1174,`code`),mN(1175,`p-label`),lg(),mN(1176,`.`),lg()()()(),Ml(1177,`tr`,14)(1178,`td`,15)(1179,`div`,23)(1180,`span`,24),mN(1181,` p-size`),ql(1182,`br`),lg()()(),Ml(1183,`td`,19)(1184,`code`,25),mN(1185,`string`),lg()(),Ml(1186,`td`,21)(1187,`p`)(1188,`code`),mN(1189,`medium`),lg()()(),Ml(1190,`td`,22)(1191,`em`)(1192,`strong`),mN(1193,`(opcional)`),lg()(),Ml(1194,`p`),mN(1195,`Define o tamanho do componente:`),lg(),Ml(1196,`ul`)(1197,`li`)(1198,`code`),mN(1199,`small`),lg(),mN(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1201,`li`)(1202,`code`),mN(1203,`medium`),lg(),mN(1204,`: altura do input como 44px.`),lg()(),Ml(1205,`blockquote`)(1206,`p`),mN(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1208,`code`),mN(1209,`medium`),lg(),mN(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1211,`a`,39),mN(1212,`po-theme`),lg(),mN(1213,`.`),lg()()()(),Ml(1214,`tr`,14)(1215,`td`,15)(1216,`div`,23)(1217,`span`,24),mN(1218,` p-sort`),ql(1219,`br`),lg()()(),Ml(1220,`td`,19)(1221,`code`,26),mN(1222,`boolean`),lg()(),Ml(1223,`td`,21)(1224,`p`)(1225,`code`),mN(1226,`false`),lg()()(),Ml(1227,`td`,22)(1228,`em`)(1229,`strong`),mN(1230,`(opcional)`),lg()(),Ml(1231,`p`),mN(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),lg()()()(),Ml(1233,`h3`,10),mN(1234,`Métodos`),lg(),Ml(1235,`table`,40)(1236,`tr`,14)(1237,`th`,41)(1238,`div`,23)(1239,`h4`)(1240,`span`,24),mN(1241,` focus `),lg()()()()(),Ml(1242,`tr`,22)(1243,`td`,22)(1244,`p`),mN(1245,`Função que atribui foco ao componente.`),lg(),Ml(1246,`p`),mN(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1248,`pre`)(1249,`code`),mN(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),lg()()()()(),ql(1251,`br`),Ml(1252,`table`,40)(1253,`tr`,14)(1254,`th`,41)(1255,`div`,23)(1256,`h4`)(1257,`span`,24),mN(1258,` showAdditionalHelp `),lg()()()()(),Ml(1259,`tr`,22)(1260,`td`,22)(1261,`p`),mN(1262,`Método que exibe `),Ml(1263,`code`),mN(1264,`p-helper`),lg(),mN(1265,` ou executa a ação definida em `),Ml(1266,`code`),mN(1267,`p-helper{eventOnClick}`),lg(),mN(1268,` ou em `),Ml(1269,`code`),mN(1270,`p-additionalHelp`),lg(),mN(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1272,`code`),mN(1273,`p-keydown`),lg(),mN(1274,`.`),lg(),Ml(1275,`blockquote`)(1276,`p`),mN(1277,`Exibe ou oculta o conteúdo do componente `),Ml(1278,`code`),mN(1279,`po-helper`),lg(),mN(1280,` quando o componente estiver com foco.`),lg()(),Ml(1281,`pre`)(1282,`code`),mN(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),lg()(),Ml(1284,`pre`)(1285,`code`),mN(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1287,`br`),Ml(1288,`h3`),mN(1289,`Interfaces`),lg(),Ml(1290,`h4`,42)(1291,`code`,5),mN(1292,`PoMultiselectFilter`),lg()(),Ml(1293,`div`,2)(1294,`p`),mN(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),lg()(),Ml(1296,`h4`,10),mN(1297,`Métodos`),lg(),Ml(1298,`table`,40)(1299,`tr`,14)(1300,`th`,41)(1301,`div`,23)(1302,`h4`)(1303,`span`,24),mN(1304,` getFilteredData `),lg()()()()(),Ml(1305,`tr`,22)(1306,`td`,22)(1307,`p`),mN(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Ml(1309,`code`),mN(1310,`PoMultiselectOption`),lg(),mN(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),lg()()()(),Ml(1312,`h5`)(1313,`b`),mN(1314,`Parâmetros`),lg()(),Ml(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),mN(1318,`Nome`),lg(),Ml(1319,`th`,13),mN(1320,`Tipo`),lg(),Ml(1321,`th`,13),mN(1322,`Descrição`),lg()(),Ml(1323,`tr`,14)(1324,`td`,15),mN(1325,` params`),lg(),Ml(1326,`td`,19)(1327,`code`,43),mN(1328,` { property: string, value: string } `),lg()(),Ml(1329,`td`,22)(1330,`p`),mN(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),lg()()()(),ql(1332,`br`),Ml(1333,`table`,40)(1334,`tr`,14)(1335,`th`,41)(1336,`div`,23)(1337,`h4`)(1338,`span`,24),mN(1339,` getObjectsByValues `),lg()()()()(),Ml(1340,`tr`,22)(1341,`td`,22)(1342,`p`),mN(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Ml(1344,`code`),mN(1345,`PoMultiselectOption`),lg(),mN(1346,`, será informado por parâmetro valor a ser pesquisado.`),lg()()()(),Ml(1347,`h5`)(1348,`b`),mN(1349,`Parâmetros`),lg()(),Ml(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),mN(1353,`Nome`),lg(),Ml(1354,`th`,13),mN(1355,`Tipo`),lg(),Ml(1356,`th`,13),mN(1357,`Descrição`),lg()(),Ml(1358,`tr`,14)(1359,`td`,15),mN(1360,` values`),lg(),Ml(1361,`td`,19)(1362,`code`,44),mN(1363,` Array<string `),lg(),Ml(1364,`code`,45),mN(1365,` number> `),lg()(),Ml(1366,`td`,22)(1367,`p`),mN(1368,`Array com os valores a serem buscados.`),lg()()()(),ql(1369,`br`),Ml(1370,`h4`,42)(1371,`code`,5),mN(1372,`PoMultiselectLiterals`),lg()(),Ml(1373,`div`,2)(1374,`p`),mN(1375,`Interface para definição das literais usadas no `),Ml(1376,`code`),mN(1377,`po-multiselect`),lg(),mN(1378,`.`),lg()(),Ml(1379,`h4`,10),mN(1380,`Propriedades`),lg(),Ml(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),mN(1384,`Nome`),lg(),Ml(1385,`th`,13),mN(1386,`Tipo`),lg(),Ml(1387,`th`,13),mN(1388,`Descrição`),lg()(),Ml(1389,`tr`,14)(1390,`td`,15)(1391,`div`,23)(1392,`span`,24),mN(1393,` noData`),ql(1394,`br`),lg()()(),Ml(1395,`td`,19)(1396,`code`,25),mN(1397,`string`),lg()(),Ml(1398,`td`,22)(1399,`em`)(1400,`strong`),mN(1401,`(opcional)`),lg()(),Ml(1402,`p`),mN(1403,`Texto exibido quando não houver dados encontrados na busca.`),lg()()(),Ml(1404,`tr`,14)(1405,`td`,15)(1406,`div`,23)(1407,`span`,24),mN(1408,` placeholderSearch`),ql(1409,`br`),lg()()(),Ml(1410,`td`,19)(1411,`code`,25),mN(1412,`string`),lg()(),Ml(1413,`td`,22)(1414,`em`)(1415,`strong`),mN(1416,`(opcional)`),lg()(),Ml(1417,`p`),mN(1418,`Texto do `),Ml(1419,`em`),mN(1420,`placeholder`),lg(),mN(1421,` do campo de busca.`),lg()()(),Ml(1422,`tr`,14)(1423,`td`,15)(1424,`div`,23)(1425,`span`,24),mN(1426,` selectAll`),ql(1427,`br`),lg()()(),Ml(1428,`td`,19)(1429,`code`,25),mN(1430,`string`),lg()(),Ml(1431,`td`,22)(1432,`em`)(1433,`strong`),mN(1434,`(opcional)`),lg()(),Ml(1435,`p`),mN(1436,`Texto exibido no botão de selecionar todos.`),lg()()(),Ml(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),mN(1441,` selectItem`),ql(1442,`br`),lg()()(),Ml(1443,`td`,19)(1444,`code`,25),mN(1445,`string`),lg()(),Ml(1446,`td`,22)(1447,`em`)(1448,`strong`),mN(1449,`(opcional)`),lg()(),Ml(1450,`p`),mN(1451,`Texto exibido na propriedade placeholder.`),lg()()()(),Ml(1452,`h4`,42)(1453,`code`,5),mN(1454,`PoMultiselectOption`),lg()(),Ml(1455,`div`,2)(1456,`p`),mN(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),lg()(),Ml(1458,`h4`,10),mN(1459,`Propriedades`),lg(),Ml(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),mN(1463,`Nome`),lg(),Ml(1464,`th`,13),mN(1465,`Tipo`),lg(),Ml(1466,`th`,13),mN(1467,`Descrição`),lg()(),Ml(1468,`tr`,14)(1469,`td`,15)(1470,`div`,23)(1471,`span`,24),mN(1472,` label`),ql(1473,`br`),lg()()(),Ml(1474,`td`,19)(1475,`code`,25),mN(1476,`string`),lg()(),Ml(1477,`td`,22)(1478,`p`),mN(1479,`Label exibido nos itens da lista.`),lg()()(),Ml(1480,`tr`,14)(1481,`td`,15)(1482,`div`,23)(1483,`span`,24),mN(1484,` value`),ql(1485,`br`),lg()()(),Ml(1486,`td`,19)(1487,`code`,25),mN(1488,`string `),lg(),Ml(1489,`code`,27),mN(1490,` number`),lg()(),Ml(1491,`td`,22)(1492,`p`),mN(1493,`Valor do objeto que será atribuído ao model.`),lg()()()(),Ml(1494,`h3`),mN(1495,`Enums`),lg(),Ml(1496,`h4`,4)(1497,`code`,5),mN(1498,`PoMultiselectFilterMode`),lg()(),Ml(1499,`div`,2)(1500,`p`),mN(1501,`Define o tipo de busca usado no po-multiselect.`),lg()(),Ml(1502,`h4`,10),mN(1503,`Propriedades`),lg(),Ml(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),mN(1507,`Nome`),lg(),Ml(1508,`th`,13),mN(1509,`Descrição`),lg()(),Ml(1510,`tr`,14)(1511,`td`,15)(1512,`div`,23)(1513,`span`,24),mN(1514,` startsWith`),ql(1515,`br`),lg()()(),Ml(1516,`td`,22)(1517,`p`),mN(1518,`Verifica se o texto `),Ml(1519,`em`),mN(1520,`inicia`),lg(),mN(1521,` com o valor pesquisado.`),lg()()(),Ml(1522,`tr`,14)(1523,`td`,15)(1524,`div`,23)(1525,`span`,24),mN(1526,` contains`),ql(1527,`br`),lg()()(),Ml(1528,`td`,22)(1529,`p`),mN(1530,`Verifica se o texto `),Ml(1531,`em`),mN(1532,`contém`),lg(),mN(1533,` o valor pesquisado.`),lg()()(),Ml(1534,`tr`,14)(1535,`td`,15)(1536,`div`,23)(1537,`span`,24),mN(1538,` endsWith`),ql(1539,`br`),lg()()(),Ml(1540,`td`,22)(1541,`p`),mN(1542,`Verifica se o texto `),Ml(1543,`em`),mN(1544,`finaliza`),lg(),mN(1545,` com o valor pesquisado.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var gt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-multiselect-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-multiselect-basic-view`)(6,`sample-po-multiselect-labs-view`)(7,`sample-po-multiselect-vacation-view`)(8,`sample-po-multiselect-vacation-reactive-form-view`)(9,`sample-po-multiselect-template-view`)(10,`sample-po-multiselect-heroes-view`)(11,`sample-po-multiselect-any-array-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ve,Ae,Oe,qe,Be,ze,Ie,He],encapsulation:2,changeDetection:1})}return l})()}];var Re=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[NL.forChild(gt),NL]})}return l})();var vn=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[ar,Re]})}return l})();export{vn as DocPoMultiselectModule};