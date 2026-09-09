import{t as r}from"./chunk-zystk1pz.js";import{$i as q,$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Bn as AN,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Kn as Bx,Li as ht,Lt as eP,Mn as ys,Ni as gY,Nn as z0e,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ba as yw,ca as um,cr as GO,dr as I,fi as ag,gi as bL,ha as ww,jn as ybe,kn as xye,l as ar,li as _x,lr as Gl,mr as JE,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,tr as EY,ui as a0,ut as S8e,va as yY,wn as vr,xr as Lk,yi as cN,zi as jk,zr as SN}from"./main-3EWTGE7T.js";var Te=(()=>{class l{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,i){a&1&&Gl(0,`po-multiselect`,0),a&2&&nw(`p-options`,i.options)},dependencies:[eP],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l});var Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-multiselect-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Te],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let c=Ax();Tl(0,`div`,2)(1,`po-multiselect`,3),ww(`ngModelChange`,function(p){return Ky(c),uN(i.multiselect,p)||(i.multiselect=p),Xy(p)}),ht(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),ag(),Gl(2,`po-divider`),Tl(3,`div`,2),Gl(4,`po-info`,4)(5,`po-info`,5),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),ww(`ngModelChange`,function(p){return Ky(c),uN(i.option.label,p)||(i.option.label=p),Xy(p)}),ag(),a0(),Tl(11,`po-input`,7),ww(`ngModelChange`,function(p){return Ky(c),uN(i.option.value,p)||(i.option.value=p),Xy(p)}),ag(),a0(),ag(),Tl(12,`div`,2)(13,`po-button`,8),ht(`p-click`,function(){return i.addOption()}),ag()()(),Gl(14,`po-divider`),Tl(15,`form`,null,1)(17,`po-input`,9),ww(`ngModelChange`,function(p){return Ky(c),uN(i.label,p)||(i.label=p),Xy(p)}),ag(),a0(),Tl(18,`po-input`,10),ww(`ngModelChange`,function(p){return Ky(c),uN(i.help,p)||(i.help=p),Xy(p)}),ag(),a0(),Tl(19,`po-input`,11),ww(`ngModelChange`,function(p){return Ky(c),uN(i.helperText,p)||(i.helperText=p),Xy(p)}),ag(),a0(),Tl(20,`po-input`,12),ww(`ngModelChange`,function(p){return Ky(c),uN(i.placeholder,p)||(i.placeholder=p),Xy(p)}),ag(),a0(),Tl(21,`po-input`,13),ww(`ngModelChange`,function(p){return Ky(c),uN(i.placeholderSearch,p)||(i.placeholderSearch=p),Xy(p)}),ag(),a0(),Tl(22,`po-input`,14),ww(`ngModelChange`,function(p){return Ky(c),uN(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),Xy(p)}),ag(),a0(),Tl(23,`po-input`,15),ww(`ngModelChange`,function(p){return Ky(c),uN(i.literals,p)||(i.literals=p),Xy(p)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(24,`po-input`,16),ww(`ngModelChange`,function(p){return Ky(c),uN(i.filterService,p)||(i.filterService=p),Xy(p)}),ag(),a0(),Tl(25,`po-input`,17),ww(`ngModelChange`,function(p){return Ky(c),uN(i.fieldValue,p)||(i.fieldValue=p),Xy(p)}),ag(),a0(),Tl(26,`po-input`,18),ww(`ngModelChange`,function(p){return Ky(c),uN(i.fieldLabel,p)||(i.fieldLabel=p),Xy(p)}),ag(),a0(),Tl(27,`po-checkbox-group`,19),ww(`ngModelChange`,function(p){return Ky(c),uN(i.properties,p)||(i.properties=p),Xy(p)}),ag(),a0(),Tl(28,`po-radio-group`,20),ww(`ngModelChange`,function(p){return Ky(c),uN(i.filterMode,p)||(i.filterMode=p),Xy(p)}),ag(),a0(),Tl(29,`po-radio-group`,21),ww(`ngModelChange`,function(p){return Ky(c),uN(i.size,p)||(i.size=p),Xy(p)}),ag(),a0(),Tl(30,`po-radio-group`,22),ww(`ngModelChange`,function(p){return Ky(c),uN(i.listboxPosition,p)||(i.listboxPosition=p),Xy(p)}),ag(),a0(),Tl(31,`div`,2)(32,`po-button`,23),ht(`p-click`,function(){return i.restore()}),ag()()()}if(a&2){let c=Bx(8);jp(),Ew(`ngModel`,i.multiselect),nw(`p-helper`,i.helperText)(`p-auto-height`,i.properties.includes(`autoHeight`))(`p-disabled`,i.properties.includes(`disabled`))(`p-field-label`,i.fieldLabel)(`p-field-value`,i.fieldValue)(`p-filter-service`,i.filterService)(`p-filter-mode`,i.filterMode)(`p-help`,i.help)(`p-hide-search`,i.properties.includes(`hideSearch`))(`p-hide-select-all`,i.properties.includes(`hideSelectAll`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-optional`,i.properties.includes(`optional`))(`p-options`,i.options)(`p-placeholder`,i.placeholder)(`p-placeholder-search`,i.placeholderSearch)(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-sort`,i.properties.includes(`sort`))(`p-listbox-control-position`,i.listboxPosition)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,i.multiselect),jp(),nw(`p-value`,i.event),jp(5),Ew(`ngModel`,i.option.label),l0(),jp(),Ew(`ngModel`,i.option.value),l0(),jp(2),nw(`p-disabled`,c.form.invalid),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.placeholderSearch),l0(),jp(),Ew(`ngModel`,i.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.filterService),l0(),jp(),Ew(`ngModel`,i.fieldValue),l0(),jp(),Ew(`ngModel`,i.fieldLabel),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.filterMode),nw(`p-disabled`,i.properties.includes(`hideSearch`))(`p-options`,i.filterModeOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0(),jp(),Ew(`ngModel`,i.listboxPosition),nw(`p-options`,i.listboxPositionOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,eP,L0e,ybe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l});var Ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-multiselect-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,De],encapsulation:2,changeDetection:1})}return l})();var Le=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Ax();Tl(0,`form`,null,0)(2,`h3`),cN(3,`Collective vacations`),ag(),Gl(4,`po-divider`),Tl(5,`div`,2)(6,`po-datepicker`,3),ww(`ngModelChange`,function(p){return Ky(c),uN(i.initialPeriod,p)||(i.initialPeriod=p),Xy(p)}),ag(),a0(),Tl(7,`po-datepicker`,4),ww(`ngModelChange`,function(p){return Ky(c),uN(i.finalPeriod,p)||(i.finalPeriod=p),Xy(p)}),ag(),a0(),ag(),Tl(8,`div`,2)(9,`po-radio-group`,5),ww(`ngModelChange`,function(p){return Ky(c),uN(i.days,p)||(i.days=p),Xy(p)}),ag(),a0(),ag(),Tl(10,`div`,2)(11,`po-multiselect`,6),ww(`ngModelChange`,function(p){return Ky(c),uN(i.employeesVacations,p)||(i.employeesVacations=p),Xy(p)}),ag(),a0(),ag(),Tl(12,`div`,2)(13,`po-button`,7),ht(`p-click`,function(){Ky(c);let p=Bx(16);return i.updateNameEmployeesVacations(),Xy(p.open())}),ag(),Tl(14,`po-button`,8),ht(`p-click`,function(){return i.clean()}),ag()()(),Tl(15,`po-modal`,9,1)(17,`div`,2),Gl(18,`po-info`,10),SN(19,`date`),Gl(20,`po-info`,11),SN(21,`date`),Gl(22,`po-info`,12),ag(),Gl(23,`po-divider`),Tl(24,`div`,2),Gl(25,`po-info`,13),ag()()}if(a&2){let c=Bx(1);jp(6),Ew(`ngModel`,i.initialPeriod),l0(),jp(),Ew(`ngModel`,i.finalPeriod),nw(`p-min-date`,i.initialPeriod),l0(),jp(2),Ew(`ngModel`,i.days),nw(`p-options`,i.daysOptions),l0(),jp(2),Ew(`ngModel`,i.employeesVacations),nw(`p-options`,i.employees),l0(),jp(2),nw(`p-disabled`,c.form.invalid),jp(5),nw(`p-value`,AN(19,12,i.initialPeriod,`longDate`,`+0000`)),jp(2),nw(`p-value`,AN(21,16,i.finalPeriod,`longDate`,`+0000`)),jp(2),nw(`p-value`,i.days),jp(3),nw(`p-value`,i.nameEmployeesVacations)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,z0e,eP,L0e,ybe,vr,GO],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l});var Oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect - Vacation`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #f="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-multiselect-vacation`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Le],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{formBuilder=f(EY);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,um.required],finalPeriod:[null,um.required],days:[null,um.required],employeesVacations:[null,um.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=Ax();Tl(0,`form`,1)(1,`h3`),cN(2,`Collective vacations`),ag(),Gl(3,`po-divider`),Tl(4,`div`,2),Gl(5,`po-datepicker`,3),a0(),Gl(6,`po-datepicker`,4),a0(),ag(),Tl(7,`div`,2),Gl(8,`po-multiselect`,5),a0(),Gl(9,`po-radio-group`,6),a0(),ag(),Tl(10,`div`,2)(11,`po-button`,7),ht(`p-click`,function(){Ky(c);let p=Bx(14);return i.updateEmployeesVacations(),Xy(p.open())}),ag(),Tl(12,`po-button`,8),ht(`p-click`,function(){return i.clean()}),ag()()(),Tl(13,`po-modal`,9,0)(15,`div`,2),Gl(16,`po-info`,10),SN(17,`date`),Gl(18,`po-info`,11),SN(19,`date`),Gl(20,`po-info`,12),ag(),Gl(21,`po-divider`),Tl(22,`div`,2),Gl(23,`po-info`,13),ag()()}a&2&&(nw(`formGroup`,i.formCollectiveVacations),jp(5),l0(),jp(),nw(`p-min-date`,i.getRangeFinalPeriod()),l0(),jp(2),nw(`p-auto-height`,!0)(`p-options`,i.employees)(`p-required`,!0),l0(),jp(),nw(`p-options`,i.daysOptions)(`p-columns`,3),l0(),jp(2),nw(`p-disabled`,i.formCollectiveVacations.invalid),jp(5),nw(`p-value`,AN(17,12,i.initialPeriod,`longDate`,`+0000`)),jp(2),nw(`p-value`,AN(19,16,i.finalPeriod,`longDate`,`+0000`)),jp(2),nw(`p-value`,i.days),jp(3),nw(`p-value`,i.nameEmployeesVacations))},dependencies:[yY,gY,mY,jk,Lk,Zt,Xy$1,z0e,eP,L0e,ybe,vr,GO],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l});var qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect - Vacation Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form [formGroup]="formCollectiveVacations">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-multiselect-vacation-reactive-form`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,tt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ke],encapsulation:2,changeDetection:1})}return l})();function it(l,K){l&1&&Gl(0,`po-tag`,11),l&2&&nw(`p-icon`,!0)}function ot(l,K){l&1&&Gl(0,`po-tag`,12),l&2&&nw(`p-icon`,!0)}function lt(l,K){l&1&&Gl(0,`po-tag`,13),l&2&&nw(`p-icon`,!0)}function at(l,K){if(l&1&&(Tl(0,`div`,0)(1,`div`,7)(2,`div`,8),cN(3),ag()(),Tl(4,`div`,9)(5,`div`,10),_x(6,it,1,1,`po-tag`,11),_x(7,ot,1,1,`po-tag`,12),_x(8,lt,1,1,`po-tag`,13),ag()()()),l&2){let s=K.$implicit;jp(3),yw(s.label),jp(3),Dx(s.admin?6:-1),jp(),Dx(s.access?7:-1),jp(),Dx(!s.admin&&!s.access?8:-1)}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`po-select`,1),ww(`ngModelChange`,function(d){return uN(i.employee,d)||(i.employee=d),d}),ag(),a0(),Tl(2,`po-select`,2),ww(`ngModelChange`,function(d){return uN(i.typeAccess,d)||(i.typeAccess=d),d}),ag(),a0(),Tl(3,`div`,3)(4,`po-button`,4),ht(`p-click`,function(){return i.changeAccess()}),ag()(),Tl(5,`po-multiselect`,5),JE(6,at,9,4,`ng-template`,6),ag()()),a&2&&(jp(),nw(`p-options`,i.employees),Ew(`ngModel`,i.employee),l0(),jp(),nw(`p-options`,i.typeAccessValue),Ew(`ngModel`,i.typeAccess),l0(),jp(2),nw(`p-disabled`,!i.employee||!i.typeAccess),jp(),nw(`p-options`,i.options)(`p-hide-select-all`,!0))},dependencies:[gY,Ak,Zt,eP,xye,fbe,ys],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return l})();var pt=l=>({"docs-sample-code-tabs":l});var Be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect - Template`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.containerFlex {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-multiselect-template`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,pt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Fe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{http=f(ob);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(q(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(q(a=>a.items))}static ɵfac=function(a){return new(a||l)};static ɵprov=I({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var We=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[Ce([se])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`po-multiselect`,1),ww(`ngModelChange`,function(d){return uN(i.multiselect,d)||(i.multiselect=d),d}),ht(`p-change`,function(d){return i.changeOptions(d)}),ag(),a0(),Tl(2,`po-container`,2),Gl(3,`po-table`,3),ag()()),a&2&&(jp(),Ew(`ngModel`,i.multiselect),nw(`p-filter-service`,i.filterService)(`p-debounce-time`,i.debounce),l0(),jp(2),nw(`p-columns`,i.columns)(`p-items`,i.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[gY,Ak,xp,eP,X4],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l});var ze=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect - Heroes - using API`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-multiselect-heroes`),ag(),Gl(27,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,dt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,We],encapsulation:2,changeDetection:1})}return l})();var Ne=(()=>{class l{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`div`,1)(2,`po-select`,2),ww(`ngModelChange`,function(d){return uN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ht(`p-change`,function(d){return i.onChange(d)}),ag(),a0(),Tl(3,`po-select`,3),ww(`ngModelChange`,function(d){return uN(i.fieldValue,d)||(i.fieldValue=d),d}),ht(`p-change`,function(d){return i.onChange(d)}),ag(),a0(),ag(),Tl(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),ww(`ngModelChange`,function(d){return uN(i.company,d)||(i.company=d),d}),ag(),a0(),ag(),Tl(7,`div`,0),Gl(8,`po-info`,5),ag()()()),a&2&&(jp(2),nw(`p-options`,i.optionsSelect),Ew(`ngModel`,i.fieldLabel),l0(),jp(),nw(`p-options`,i.optionsSelect),Ew(`ngModel`,i.fieldValue),l0(),jp(3),nw(`p-options`,i.options)(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel),Ew(`ngModel`,i.company),l0(),jp(2),nw(`p-value`,i.company))},dependencies:[gY,Ak,eP,fbe,ybe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l});var Ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Multiselect - Array Any`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-multiselect-any-array`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,bt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ne],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1546,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoMultiselectComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),ag(),Tl(24,`p`),cN(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),ag(),Tl(26,`p`),cN(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),ag(),Tl(28,`p`),cN(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Tl(30,`code`),cN(31,`p-filter-service`),ag(),cN(32,`.`),ag(),Tl(33,`h4`),cN(34,`Boas práticas`),ag(),Tl(35,`ul`)(36,`li`),cN(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),ag(),Tl(38,`li`),cN(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),ag()(),Tl(40,`h4`),cN(41,`Acessibilidade tratada no componente`),ag(),Tl(42,`p`),cN(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(44,`ul`)(45,`li`),cN(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),ag(),Tl(47,`li`),cN(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),ag(),Tl(49,`li`),cN(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),ag(),Tl(51,`li`),cN(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),ag(),Tl(53,`li`),cN(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),ag()(),Tl(55,`h4`),cN(56,`Tokens customizáveis`),ag(),Tl(57,`p`),cN(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(59,`blockquote`)(60,`p`),cN(61,`Para maiores informações, acesse o guia `),Tl(62,`a`,6),cN(63,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(64,`.`),ag()(),Tl(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),cN(69,`Propriedade`),ag(),Tl(70,`th`),cN(71,`Descrição`),ag(),Tl(72,`th`),cN(73,`Valor Padrão`),ag()()(),Tl(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),cN(78,`Default Values`),ag()(),Gl(79,`td`)(80,`td`),ag(),Tl(81,`tr`)(82,`td`)(83,`code`),cN(84,`--font-family`),ag()(),Tl(85,`td`),cN(86,`Família tipográfica usada`),ag(),Tl(87,`td`)(88,`code`),cN(89,`var(--font-family-theme)`),ag()()(),Tl(90,`tr`)(91,`td`)(92,`code`),cN(93,`--font-size`),ag()(),Tl(94,`td`),cN(95,`Tamanho da fonte`),ag(),Tl(96,`td`)(97,`code`),cN(98,`var(--font-size-default)`),ag()()(),Tl(99,`tr`)(100,`td`)(101,`code`),cN(102,`--text-color-placeholder`),ag(),cN(103,` \xA0`),ag(),Tl(104,`td`),cN(105,`Cor do texto do placeholder`),ag(),Tl(106,`td`)(107,`code`),cN(108,`var(--color-action-disabled)`),ag()()(),Tl(109,`tr`)(110,`td`)(111,`code`),cN(112,`--color`),ag()(),Tl(113,`td`),cN(114,`Cor principal do multiselect`),ag(),Tl(115,`td`)(116,`code`),cN(117,`var(--color-neutral-dark-70)`),ag()()(),Tl(118,`tr`)(119,`td`)(120,`code`),cN(121,`--background`),ag()(),Tl(122,`td`),cN(123,`Cor de background`),ag(),Tl(124,`td`)(125,`code`),cN(126,`var(--color-neutral-light-05)`),ag()()(),Tl(127,`tr`)(128,`td`)(129,`code`),cN(130,`--field-container-title-justify`),ag()(),Tl(131,`td`),cN(132,`Alinhamento horizontal do título (`),Tl(133,`code`),cN(134,`justify-content`),ag(),cN(135,`)`),ag(),Tl(136,`td`)(137,`code`),cN(138,`space-between`),ag()()(),Tl(139,`tr`)(140,`td`)(141,`code`),cN(142,`--field-container-title-flex`),ag()(),Tl(143,`td`),cN(144,`Flex do título (`),Tl(145,`code`),cN(146,`flex`),ag(),cN(147,`)`),ag(),Tl(148,`td`)(149,`code`),cN(150,`1 auto`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`strong`),cN(154,`Hover`),ag()(),Gl(155,`td`)(156,`td`),ag(),Tl(157,`tr`)(158,`td`)(159,`code`),cN(160,`--color-hover`),ag()(),Tl(161,`td`),cN(162,`Cor principal no estado hover`),ag(),Tl(163,`td`)(164,`code`),cN(165,`var(--color-action-hover)`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--background-hover`),ag()(),Tl(170,`td`),cN(171,`Cor de background no estado hover`),ag(),Tl(172,`td`)(173,`code`),cN(174,`var(--color-brand-01-lighter)`),ag()()(),Tl(175,`tr`)(176,`td`)(177,`strong`),cN(178,`Focused`),ag()(),Gl(179,`td`)(180,`td`),ag(),Tl(181,`tr`)(182,`td`)(183,`code`),cN(184,`--color-focused`),ag()(),Tl(185,`td`),cN(186,`Cor principal no estado de focus`),ag(),Tl(187,`td`)(188,`code`),cN(189,`var(--color-action-default)`),ag()()(),Tl(190,`tr`)(191,`td`)(192,`code`),cN(193,`--outline-color-focused`),ag(),cN(194,` \xA0`),ag(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-action-disabled)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag(),cN(219,` \xA0`),ag(),Tl(220,`td`),cN(221,`Cor de background no estado disabled \xA0`),ag(),Tl(222,`td`)(223,`code`),cN(224,`var(--color-neutral-light-20)`),ag()()(),Tl(225,`tr`)(226,`td`)(227,`strong`),cN(228,`Error`),ag()(),Gl(229,`td`)(230,`td`),ag(),Tl(231,`tr`)(232,`td`)(233,`code`),cN(234,`--color-error`),ag()(),Tl(235,`td`),cN(236,`Cor principal no estado error`),ag(),Tl(237,`td`)(238,`code`),cN(239,`var(--color-feedback-negative-base)`),ag()()()()()(),Tl(240,`div`,7)(241,`h4`,8),cN(242,`Seletor`),ag(),Tl(243,`pre`,9),cN(244,`<po-multiselect
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
`),ag()(),Tl(245,`h4`,10),cN(246,`Propriedades`),ag(),Tl(247,`table`,11)(248,`tr`,12)(249,`th`,13),cN(250,`Nome`),ag(),Tl(251,`th`,13),cN(252,`Tipo`),ag(),Tl(253,`th`,13),cN(254,`Padrão`),ag(),Tl(255,`th`,13),cN(256,`Descrição`),ag()(),Tl(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),cN(261,` (p-additional-help)`),Gl(262,`br`),ag()(),Tl(263,`div`,18),cN(264,`Deprecated`),ag()(),Tl(265,`td`,19)(266,`code`,20),cN(267,`EventEmitter`),ag()(),Tl(268,`td`,21),cN(269,`-`),ag(),Tl(270,`td`,22)(271,`em`)(272,`strong`),cN(273,`(opcional)`),ag()(),Tl(274,`p`),cN(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(276,`blockquote`)(277,`p`),cN(278,`Essa propriedade está `),Tl(279,`strong`),cN(280,`depreciada`),ag(),cN(281,` e será removida na versão `),Tl(282,`code`),cN(283,`23.x.x`),ag(),cN(284,`. Recomendamos utilizar a propriedade `),Tl(285,`code`),cN(286,`p-helper`),ag(),cN(287,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(288,`tr`,14)(289,`td`,15)(290,`div`,23)(291,`span`,24),cN(292,` p-additional-help-tooltip`),Gl(293,`br`),ag()(),Tl(294,`div`,18),cN(295,`Deprecated`),ag()(),Tl(296,`td`,19)(297,`code`,25),cN(298,`string`),ag()(),Tl(299,`td`,21),cN(300,`-`),ag(),Tl(301,`td`,22)(302,`em`)(303,`strong`),cN(304,`(opcional)`),ag()(),Tl(305,`p`),cN(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(307,`code`),cN(308,`po-helper`),ag(),cN(309,`.
`),Tl(310,`strong`),cN(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(312,`blockquote`)(313,`p`),cN(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(315,`blockquote`)(316,`p`),cN(317,`Essa propriedade está `),Tl(318,`strong`),cN(319,`depreciada`),ag(),cN(320,` e será removida na versão `),Tl(321,`code`),cN(322,`23.x.x`),ag(),cN(323,`. Recomendamos utilizar a propriedade `),Tl(324,`code`),cN(325,`p-helper`),ag(),cN(326,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(327,`tr`,14)(328,`td`,15)(329,`div`,23)(330,`span`,24),cN(331,` p-append-in-body`),Gl(332,`br`),ag()()(),Tl(333,`td`,19)(334,`code`,26),cN(335,`boolean`),ag()(),Tl(336,`td`,21)(337,`p`)(338,`code`),cN(339,`false`),ag()()(),Tl(340,`td`,22)(341,`em`)(342,`strong`),cN(343,`(opcional)`),ag()(),Tl(344,`p`),cN(345,`Define que o `),Tl(346,`code`),cN(347,`listbox`),ag(),cN(348,` e/ou popover (`),Tl(349,`code`),cN(350,`p-helper`),ag(),cN(351,` e/ou `),Tl(352,`code`),cN(353,`p-error-limit`),ag(),cN(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ag(),Tl(355,`blockquote`)(356,`p`),cN(357,`Quando utilizado com `),Tl(358,`code`),cN(359,`p-helper`),ag(),cN(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),cN(365,` p-auto-focus`),Gl(366,`br`),ag()()(),Tl(367,`td`,19)(368,`code`,26),cN(369,`boolean`),ag()(),Tl(370,`td`,21)(371,`p`)(372,`code`),cN(373,`false`),ag()()(),Tl(374,`td`,22)(375,`em`)(376,`strong`),cN(377,`(opcional)`),ag()(),Tl(378,`p`),cN(379,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(380,`blockquote`)(381,`p`),cN(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(383,`tr`,14)(384,`td`,15)(385,`div`,23)(386,`span`,24),cN(387,` p-auto-height`),Gl(388,`br`),ag()()(),Tl(389,`td`,19)(390,`code`,26),cN(391,`boolean`),ag()(),Tl(392,`td`,21)(393,`p`)(394,`code`),cN(395,`false`),ag()()(),Tl(396,`td`,22)(397,`em`)(398,`strong`),cN(399,`(opcional)`),ag()(),Tl(400,`p`),cN(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ag(),Tl(402,`blockquote`)(403,`p`),cN(404,`O valor padrão será `),Tl(405,`code`),cN(406,`true`),ag(),cN(407,` quando houver serviço (`),Tl(408,`code`),cN(409,`p-filter-service`),ag(),cN(410,`).`),ag()()()(),Tl(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),cN(415,` (p-blur)`),Gl(416,`br`),ag()()(),Tl(417,`td`,19)(418,`code`,20),cN(419,`EventEmitter`),ag()(),Tl(420,`td`,21),cN(421,`-`),ag(),Tl(422,`td`,22)(423,`em`)(424,`strong`),cN(425,`(opcional)`),ag()(),Tl(426,`p`),cN(427,`Evento disparado ao sair do campo.`),ag()()(),Tl(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),cN(432,` (p-change)`),Gl(433,`br`),ag()()(),Tl(434,`td`,19)(435,`code`,20),cN(436,`EventEmitter`),ag()(),Tl(437,`td`,21),cN(438,`-`),ag(),Tl(439,`td`,22)(440,`em`)(441,`strong`),cN(442,`(opcional)`),ag()(),Tl(443,`p`),cN(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),ag()()(),Tl(445,`tr`,14)(446,`td`,15)(447,`div`,16)(448,`span`,17),cN(449,` (p-change-model)`),Gl(450,`br`),ag()()(),Tl(451,`td`,19)(452,`code`,20),cN(453,`EventEmitter`),ag()(),Tl(454,`td`,21),cN(455,`-`),ag(),Tl(456,`td`,22)(457,`em`)(458,`strong`),cN(459,`(opcional)`),ag()(),Tl(460,`p`),cN(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(462,`code`),cN(463,`setValue`),ag(),cN(464,`, `),Tl(465,`code`),cN(466,`patchValue`),ag(),cN(467,`, carregamento assíncrono).`),ag(),Tl(468,`p`),cN(469,`Diferentemente do `),Tl(470,`code`),cN(471,`p-change`),ag(),cN(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(473,`code`),cN(474,`p-change-model`),ag(),cN(475,` cobre todos os cenários de alteração de valor.`),ag(),Tl(476,`p`),cN(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(478,`tr`,14)(479,`td`,15)(480,`div`,23)(481,`span`,24),cN(482,` p-compact-label`),Gl(483,`br`),ag()()(),Tl(484,`td`,19)(485,`code`,26),cN(486,`boolean`),ag()(),Tl(487,`td`,21)(488,`p`)(489,`code`),cN(490,`false`),ag()()(),Tl(491,`td`,22)(492,`em`)(493,`strong`),cN(494,`(opcional)`),ag()(),Tl(495,`p`),cN(496,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(497,`p`),cN(498,`Quando habilitado (`),Tl(499,`code`),cN(500,`true`),ag(),cN(501,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(502,`ul`)(503,`li`)(504,`code`),cN(505,`po-label`),ag()(),Tl(506,`li`)(507,`code`),cN(508,`p-requirement (showRequired)`),ag()(),Tl(509,`li`)(510,`code`),cN(511,`po-helper`),ag()()(),Tl(512,`p`),cN(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(514,`p`),cN(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(516,`ul`)(517,`li`)(518,`code`),cN(519,`--field-container-title-justify`),ag()(),Tl(520,`li`)(521,`code`),cN(522,`--field-container-title-flex`),ag()()(),Tl(523,`p`),cN(524,`Exemplo:`),ag(),Tl(525,`pre`)(526,`code`),cN(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(528,`p`),cN(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(530,`tr`,14)(531,`td`,15)(532,`div`,23)(533,`span`,24),cN(534,` p-debounce-time`),Gl(535,`br`),ag()()(),Tl(536,`td`,19)(537,`code`,27),cN(538,`number`),ag()(),Tl(539,`td`,21)(540,`p`)(541,`code`),cN(542,`400`),ag()()(),Tl(543,`td`,22)(544,`em`)(545,`strong`),cN(546,`(opcional)`),ag()(),Tl(547,`p`),cN(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),ag(),Tl(549,`blockquote`)(550,`p`),cN(551,`Será utilizada apenas quando houver serviço (`),Tl(552,`code`),cN(553,`p-filter-service`),ag(),cN(554,`) e somente será aceito valor maior do que `),Tl(555,`em`),cN(556,`zero`),ag(),cN(557,`.`),ag()()()(),Tl(558,`tr`,14)(559,`td`,15)(560,`div`,23)(561,`span`,24),cN(562,` p-disabled`),Gl(563,`br`),ag()()(),Tl(564,`td`,19)(565,`code`,26),cN(566,`boolean`),ag()(),Tl(567,`td`,21)(568,`p`)(569,`code`),cN(570,`false`),ag()()(),Tl(571,`td`,22)(572,`em`)(573,`strong`),cN(574,`(opcional)`),ag()(),Tl(575,`p`),cN(576,`Indica que o campo será desabilitado.`),ag()()(),Tl(577,`tr`,14)(578,`td`,15)(579,`div`,23)(580,`span`,24),cN(581,` p-error-limit`),Gl(582,`br`),ag()()(),Tl(583,`td`,19)(584,`code`,26),cN(585,`boolean`),ag()(),Tl(586,`td`,21)(587,`p`)(588,`code`),cN(589,`false`),ag()()(),Tl(590,`td`,22)(591,`em`)(592,`strong`),cN(593,`(opcional)`),ag()(),Tl(594,`p`),cN(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(596,`blockquote`)(597,`p`),cN(598,`Caso essa propriedade seja definida como `),Tl(599,`code`),cN(600,`true`),ag(),cN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(602,`tr`,14)(603,`td`,15)(604,`div`,23)(605,`span`,24),cN(606,` p-field-error-message`),Gl(607,`br`),ag()()(),Tl(608,`td`,19)(609,`code`,25),cN(610,`string`),ag()(),Tl(611,`td`,21),cN(612,`-`),ag(),Tl(613,`td`,22)(614,`em`)(615,`strong`),cN(616,`(opcional)`),ag()(),Tl(617,`p`),cN(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(619,`blockquote`)(620,`p`),cN(621,`Necessário que a propriedade `),Tl(622,`code`),cN(623,`p-required`),ag(),cN(624,` esteja habilitada.`),ag()()()(),Tl(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),cN(629,` p-field-label`),Gl(630,`br`),ag()()(),Tl(631,`td`,19)(632,`code`,25),cN(633,`string`),ag()(),Tl(634,`td`,21)(635,`p`)(636,`code`),cN(637,`label`),ag()()(),Tl(638,`td`,22)(639,`em`)(640,`strong`),cN(641,`(opcional)`),ag()(),Tl(642,`p`),cN(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(644,`code`),cN(645,`p-options`),ag(),cN(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ag(),Tl(647,`p`),cN(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Tl(649,`code`),cN(650,`PoMultiSelectOption`),ag(),cN(651,`.`),ag()()(),Tl(652,`tr`,14)(653,`td`,15)(654,`div`,23)(655,`span`,24),cN(656,` p-field-value`),Gl(657,`br`),ag()()(),Tl(658,`td`,19)(659,`code`,25),cN(660,`string`),ag()(),Tl(661,`td`,21)(662,`p`)(663,`code`),cN(664,`value`),ag()()(),Tl(665,`td`,22)(666,`em`)(667,`strong`),cN(668,`(opcional)`),ag()(),Tl(669,`p`),cN(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(671,`code`),cN(672,`p-options`),ag(),cN(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),ag(),Tl(674,`p`),cN(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Tl(676,`code`),cN(677,`PoMultiSelectOption`),ag(),cN(678,`.`),ag()()(),Tl(679,`tr`,14)(680,`td`,15)(681,`div`,23)(682,`span`,24),cN(683,` p-filter-mode`),Gl(684,`br`),ag()()(),Tl(685,`td`,19)(686,`code`,28),cN(687,`PoMultiselectFilterMode`),ag()(),Tl(688,`td`,21)(689,`p`)(690,`code`),cN(691,`startsWith`),ag()()(),Tl(692,`td`,22)(693,`em`)(694,`strong`),cN(695,`(opcional)`),ag()(),Tl(696,`p`),cN(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),ag()()(),Tl(698,`tr`,14)(699,`td`,15)(700,`div`,23)(701,`span`,24),cN(702,` p-filter-service`),Gl(703,`br`),ag()()(),Tl(704,`td`,19)(705,`code`,25),cN(706,`string `),ag(),Tl(707,`code`,29),cN(708,` PoMultiselectFilter`),ag()(),Tl(709,`td`,21),cN(710,`-`),ag(),Tl(711,`td`,22)(712,`em`)(713,`strong`),cN(714,`(opcional)`),ag()(),Tl(715,`p`),cN(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),ag(),Tl(717,`p`),cN(718,`Também existe a possibilidade de informar um serviço implementando a interface `),Tl(719,`code`),cN(720,`PoMultiselectFilter`),ag(),cN(721,`.`),ag(),Tl(722,`p`),cN(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Tl(724,`a`,30),cN(725,`API PO UI`),ag(),cN(726,` e utilizar as propriedades `),Tl(727,`code`),cN(728,`p-field-label`),ag(),cN(729,` e `),Tl(730,`code`),cN(731,`p-field-value`),ag(),cN(732,` para a construção da lista de itens.`),ag(),Tl(733,`p`),cN(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),ag(),Tl(735,`pre`)(736,`code`),cN(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),ag()(),Tl(738,`p`),cN(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),ag(),Tl(740,`pre`)(741,`code`),cN(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),ag()()()(),Tl(743,`tr`,14)(744,`td`,15)(745,`div`,23)(746,`span`,24),cN(747,` p-help`),Gl(748,`br`),ag()()(),Tl(749,`td`,19)(750,`code`,25),cN(751,`string`),ag()(),Tl(752,`td`,21),cN(753,`-`),ag(),Tl(754,`td`,22)(755,`em`)(756,`strong`),cN(757,`(opcional)`),ag()(),Tl(758,`p`),cN(759,`Texto de apoio para o campo.`),ag()()(),Tl(760,`tr`,14)(761,`td`,15)(762,`div`,23)(763,`span`,24),cN(764,` p-hide-search`),Gl(765,`br`),ag()()(),Tl(766,`td`,19)(767,`code`,26),cN(768,`boolean`),ag()(),Tl(769,`td`,21)(770,`p`)(771,`code`),cN(772,`false`),ag()()(),Tl(773,`td`,22)(774,`em`)(775,`strong`),cN(776,`(opcional)`),ag()(),Tl(777,`p`),cN(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),ag()()(),Tl(779,`tr`,14)(780,`td`,15)(781,`div`,23)(782,`span`,24),cN(783,` p-hide-select-all`),Gl(784,`br`),ag()()(),Tl(785,`td`,19)(786,`code`,26),cN(787,`boolean`),ag()(),Tl(788,`td`,21)(789,`p`)(790,`code`),cN(791,`false`),ag()()(),Tl(792,`td`,22)(793,`em`)(794,`strong`),cN(795,`(opcional)`),ag()(),Tl(796,`p`),cN(797,`Indica se o campo "Selecionar todos" será escondido.`),ag()()(),Tl(798,`tr`,14)(799,`td`,15)(800,`div`,16)(801,`span`,17),cN(802,` (p-keydown)`),Gl(803,`br`),ag()()(),Tl(804,`td`,19)(805,`code`,20),cN(806,`EventEmitter`),ag()(),Tl(807,`td`,21),cN(808,`-`),ag(),Tl(809,`td`,22)(810,`em`)(811,`strong`),cN(812,`(opcional)`),ag()(),Tl(813,`p`),cN(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(815,`code`),cN(816,`KeyboardEvent`),ag(),cN(817,` com informações sobre a tecla.`),ag()()(),Tl(818,`tr`,14)(819,`td`,15)(820,`div`,23)(821,`span`,24),cN(822,` p-label`),Gl(823,`br`),ag()()(),Tl(824,`td`,19)(825,`code`,25),cN(826,`string`),ag()(),Tl(827,`td`,21),cN(828,`-`),ag(),Tl(829,`td`,22)(830,`em`)(831,`strong`),cN(832,`(opcional)`),ag()(),Tl(833,`p`),cN(834,`Label no componente.`),ag()()(),Tl(835,`tr`,14)(836,`td`,15)(837,`div`,23)(838,`span`,24),cN(839,` p-label-text-wrap`),Gl(840,`br`),ag()()(),Tl(841,`td`,19)(842,`code`,26),cN(843,`boolean`),ag()(),Tl(844,`td`,21)(845,`p`)(846,`code`),cN(847,`false`),ag()()(),Tl(848,`td`,22)(849,`em`)(850,`strong`),cN(851,`(opcional)`),ag()(),Tl(852,`p`),cN(853,`Habilita a quebra automática do texto da propriedade `),Tl(854,`code`),cN(855,`p-label`),ag(),cN(856,`. Quando `),Tl(857,`code`),cN(858,`p-label-text-wrap`),ag(),cN(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(860,`tr`,14)(861,`td`,15)(862,`div`,23)(863,`span`,24),cN(864,` p-listbox-control-position`),Gl(865,`br`),ag()()(),Tl(866,`td`,19)(867,`code`,31),cN(868,`'top' `),ag(),Tl(869,`code`,32),cN(870,` 'bottom'`),ag()(),Tl(871,`td`,21)(872,`p`)(873,`code`),cN(874,`bottom`),ag()()(),Tl(875,`td`,22)(876,`em`)(877,`strong`),cN(878,`(opcional)`),ag()(),Tl(879,`p`),cN(880,`Define a direção preferida para exibição do `),Tl(881,`code`),cN(882,`listbox`),ag(),cN(883,` em relação ao campo (`),Tl(884,`code`),cN(885,`top`),ag(),cN(886,` ou `),Tl(887,`code`),cN(888,`bottom`),ag(),cN(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ag()()(),Tl(890,`tr`,14)(891,`td`,15)(892,`div`,23)(893,`span`,24),cN(894,` p-literals`),Gl(895,`br`),ag()()(),Tl(896,`td`,19)(897,`code`,33),cN(898,`PoMultiselectLiterals`),ag()(),Tl(899,`td`,21),cN(900,`-`),ag(),Tl(901,`td`,22)(902,`em`)(903,`strong`),cN(904,`(opcional)`),ag()(),Tl(905,`p`),cN(906,`Objeto com as literais usadas no `),Tl(907,`code`),cN(908,`po-multiselect`),ag(),cN(909,`.`),ag(),Tl(910,`p`),cN(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(912,`pre`)(913,`code`),cN(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),ag()(),Tl(915,`p`),cN(916,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(917,`pre`)(918,`code`),cN(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),ag()(),Tl(920,`p`),cN(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ag(),Tl(922,`pre`)(923,`code`),cN(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),ag()(),Tl(925,`blockquote`)(926,`p`),cN(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(928,`a`,34)(929,`code`),cN(930,`PoI18nService`),ag()(),cN(931,` ou do browser.`),ag()()()(),Tl(932,`tr`,14)(933,`td`,15)(934,`div`,23)(935,`span`,24),cN(936,` p-loading`),Gl(937,`br`),ag()()(),Tl(938,`td`,19)(939,`code`,26),cN(940,`boolean`),ag()(),Tl(941,`td`,21)(942,`p`)(943,`code`),cN(944,`false`),ag()()(),Tl(945,`td`,22)(946,`em`)(947,`strong`),cN(948,`(opcional)`),ag()(),Tl(949,`p`),cN(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(951,`tr`,14)(952,`td`,15)(953,`div`,23)(954,`span`,24),cN(955,` name`),Gl(956,`br`),ag()()(),Tl(957,`td`,19)(958,`code`,25),cN(959,`string`),ag()(),Tl(960,`td`,21),cN(961,`-`),ag(),Tl(962,`td`,22)(963,`p`),cN(964,`Nome do componente.`),ag()()(),Tl(965,`tr`,14)(966,`td`,15)(967,`div`,23)(968,`span`,24),cN(969,` p-optional`),Gl(970,`br`),ag()()(),Tl(971,`td`,19)(972,`code`,26),cN(973,`boolean`),ag()(),Tl(974,`td`,21)(975,`p`)(976,`code`),cN(977,`false`),ag()()(),Tl(978,`td`,22)(979,`em`)(980,`strong`),cN(981,`(opcional)`),ag()(),Tl(982,`p`),cN(983,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(984,`blockquote`)(985,`p`),cN(986,`Não será exibida a indicação se:`),ag()(),Tl(987,`ul`)(988,`li`),cN(989,`O campo conter `),Tl(990,`code`),cN(991,`p-required`),ag(),cN(992,`;`),ag(),Tl(993,`li`),cN(994,`Não possuir `),Tl(995,`code`),cN(996,`p-help`),ag(),cN(997,` e/ou `),Tl(998,`code`),cN(999,`p-label`),ag(),cN(1e3,`.`),ag()()()(),Tl(1001,`tr`,14)(1002,`td`,15)(1003,`div`,23)(1004,`span`,24),cN(1005,` p-options`),Gl(1006,`br`),ag()()(),Tl(1007,`td`,19)(1008,`code`,35),cN(1009,`Array<PoMultiselectOption `),ag(),Tl(1010,`code`,36),cN(1011,` any>`),ag()(),Tl(1012,`td`,21),cN(1013,`-`),ag(),Tl(1014,`td`,22)(1015,`p`),cN(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),ag(),Tl(1017,`blockquote`)(1018,`p`),cN(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ag()(),Tl(1020,`pre`)(1021,`code`),cN(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ag()(),Tl(1023,`blockquote`)(1024,`p`),cN(1025,`A lista pode ser definida utilizando um array com o valor representando `),Tl(1026,`code`),cN(1027,`value`),ag(),cN(1028,` e `),Tl(1029,`code`),cN(1030,`label`),ag(),cN(1031,` das seguintes formas:`),ag()(),Tl(1032,`pre`)(1033,`code`),cN(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),ag()(),Tl(1035,`pre`)(1036,`code`),cN(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),ag()(),Tl(1038,`ul`)(1039,`li`),cN(1040,`Aconselha-se utilizar valores distintos no `),Tl(1041,`code`),cN(1042,`label`),ag(),cN(1043,` e `),Tl(1044,`code`),cN(1045,`value`),ag(),cN(1046,` dos itens.`),ag()()()(),Tl(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),cN(1051,` p-placeholder`),Gl(1052,`br`),ag()()(),Tl(1053,`td`,19)(1054,`code`,25),cN(1055,`string`),ag()(),Tl(1056,`td`,21),cN(1057,`-`),ag(),Tl(1058,`td`,22)(1059,`em`)(1060,`strong`),cN(1061,`(opcional)`),ag()(),Tl(1062,`p`),cN(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),ag()()(),Tl(1064,`tr`,14)(1065,`td`,15)(1066,`div`,23)(1067,`span`,24),cN(1068,` p-placeholder-search`),Gl(1069,`br`),ag()()(),Tl(1070,`td`,19)(1071,`code`,25),cN(1072,`string`),ag()(),Tl(1073,`td`,21)(1074,`p`)(1075,`code`),cN(1076,`Buscar`),ag()()(),Tl(1077,`td`,22)(1078,`em`)(1079,`strong`),cN(1080,`(opcional)`),ag()(),Tl(1081,`p`),cN(1082,`Placeholder do campo de pesquisa.`),ag(),Tl(1083,`blockquote`)(1084,`p`),cN(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ag()()()(),Tl(1086,`tr`,14)(1087,`td`,15)(1088,`div`,23)(1089,`span`,24),cN(1090,` p-helper`),Gl(1091,`br`),ag()()(),Tl(1092,`td`,19)(1093,`code`,37),cN(1094,`PoHelperOptions `),ag(),Tl(1095,`code`,25),cN(1096,` string`),ag()(),Tl(1097,`td`,21),cN(1098,`-`),ag(),Tl(1099,`td`,22)(1100,`em`)(1101,`strong`),cN(1102,`(opcional)`),ag()(),Tl(1103,`p`),cN(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1105,`code`),cN(1106,`p-label`),ag(),cN(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1108,`code`),cN(1109,`p-label`),ag(),cN(1110,`.`),ag(),Tl(1111,`blockquote`)(1112,`p`),cN(1113,`Para mais informações acesse: `),Tl(1114,`a`,38),cN(1115,`https://po-ui.io/documentation/po-helper`),ag(),cN(1116,`.`),ag()(),Tl(1117,`blockquote`)(1118,`p`),cN(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1120,`code`),cN(1121,`p-additional-help-tooltip`),ag(),cN(1122,` e `),Tl(1123,`code`),cN(1124,`p-additional-help`),ag(),cN(1125,`) será ignorado.`),ag()()()(),Tl(1126,`tr`,14)(1127,`td`,15)(1128,`div`,23)(1129,`span`,24),cN(1130,` p-required`),Gl(1131,`br`),ag()()(),Tl(1132,`td`,19)(1133,`code`,26),cN(1134,`boolean`),ag()(),Tl(1135,`td`,21)(1136,`p`)(1137,`code`),cN(1138,`false`),ag()()(),Tl(1139,`td`,22)(1140,`em`)(1141,`strong`),cN(1142,`(opcional)`),ag()(),Tl(1143,`p`),cN(1144,`Define que o campo será obrigatório.`),ag(),Tl(1145,`blockquote`)(1146,`p`),cN(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1148,`code`),cN(1149,`(p-disabled)`),ag(),cN(1150,`.`),ag()()()(),Tl(1151,`tr`,14)(1152,`td`,15)(1153,`div`,23)(1154,`span`,24),cN(1155,` p-show-required`),Gl(1156,`br`),ag()()(),Tl(1157,`td`,19)(1158,`code`,26),cN(1159,`boolean`),ag()(),Tl(1160,`td`,21),cN(1161,`-`),ag(),Tl(1162,`td`,22)(1163,`p`),cN(1164,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1165,`blockquote`)(1166,`p`),cN(1167,`Não será exibida a indicação se:`),ag()(),Tl(1168,`ul`)(1169,`li`),cN(1170,`Não possuir `),Tl(1171,`code`),cN(1172,`p-help`),ag(),cN(1173,` e/ou `),Tl(1174,`code`),cN(1175,`p-label`),ag(),cN(1176,`.`),ag()()()(),Tl(1177,`tr`,14)(1178,`td`,15)(1179,`div`,23)(1180,`span`,24),cN(1181,` p-size`),Gl(1182,`br`),ag()()(),Tl(1183,`td`,19)(1184,`code`,25),cN(1185,`string`),ag()(),Tl(1186,`td`,21)(1187,`p`)(1188,`code`),cN(1189,`medium`),ag()()(),Tl(1190,`td`,22)(1191,`em`)(1192,`strong`),cN(1193,`(opcional)`),ag()(),Tl(1194,`p`),cN(1195,`Define o tamanho do componente:`),ag(),Tl(1196,`ul`)(1197,`li`)(1198,`code`),cN(1199,`small`),ag(),cN(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1201,`li`)(1202,`code`),cN(1203,`medium`),ag(),cN(1204,`: altura do input como 44px.`),ag()(),Tl(1205,`blockquote`)(1206,`p`),cN(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1208,`code`),cN(1209,`medium`),ag(),cN(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1211,`a`,39),cN(1212,`po-theme`),ag(),cN(1213,`.`),ag()()()(),Tl(1214,`tr`,14)(1215,`td`,15)(1216,`div`,23)(1217,`span`,24),cN(1218,` p-sort`),Gl(1219,`br`),ag()()(),Tl(1220,`td`,19)(1221,`code`,26),cN(1222,`boolean`),ag()(),Tl(1223,`td`,21)(1224,`p`)(1225,`code`),cN(1226,`false`),ag()()(),Tl(1227,`td`,22)(1228,`em`)(1229,`strong`),cN(1230,`(opcional)`),ag()(),Tl(1231,`p`),cN(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),ag()()()(),Tl(1233,`h3`,10),cN(1234,`Métodos`),ag(),Tl(1235,`table`,40)(1236,`tr`,14)(1237,`th`,41)(1238,`div`,23)(1239,`h4`)(1240,`span`,24),cN(1241,` focus `),ag()()()()(),Tl(1242,`tr`,22)(1243,`td`,22)(1244,`p`),cN(1245,`Função que atribui foco ao componente.`),ag(),Tl(1246,`p`),cN(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1248,`pre`)(1249,`code`),cN(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),ag()()()()(),Gl(1251,`br`),Tl(1252,`table`,40)(1253,`tr`,14)(1254,`th`,41)(1255,`div`,23)(1256,`h4`)(1257,`span`,24),cN(1258,` showAdditionalHelp `),ag()()()()(),Tl(1259,`tr`,22)(1260,`td`,22)(1261,`p`),cN(1262,`Método que exibe `),Tl(1263,`code`),cN(1264,`p-helper`),ag(),cN(1265,` ou executa a ação definida em `),Tl(1266,`code`),cN(1267,`p-helper{eventOnClick}`),ag(),cN(1268,` ou em `),Tl(1269,`code`),cN(1270,`p-additionalHelp`),ag(),cN(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1272,`code`),cN(1273,`p-keydown`),ag(),cN(1274,`.`),ag(),Tl(1275,`blockquote`)(1276,`p`),cN(1277,`Exibe ou oculta o conteúdo do componente `),Tl(1278,`code`),cN(1279,`po-helper`),ag(),cN(1280,` quando o componente estiver com foco.`),ag()(),Tl(1281,`pre`)(1282,`code`),cN(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),ag()(),Tl(1284,`pre`)(1285,`code`),cN(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1287,`br`),Tl(1288,`h3`),cN(1289,`Interfaces`),ag(),Tl(1290,`h4`,42)(1291,`code`,5),cN(1292,`PoMultiselectFilter`),ag()(),Tl(1293,`div`,2)(1294,`p`),cN(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),ag()(),Tl(1296,`h4`,10),cN(1297,`Métodos`),ag(),Tl(1298,`table`,40)(1299,`tr`,14)(1300,`th`,41)(1301,`div`,23)(1302,`h4`)(1303,`span`,24),cN(1304,` getFilteredData `),ag()()()()(),Tl(1305,`tr`,22)(1306,`td`,22)(1307,`p`),cN(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Tl(1309,`code`),cN(1310,`PoMultiselectOption`),ag(),cN(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),ag()()()(),Tl(1312,`h5`)(1313,`b`),cN(1314,`Parâmetros`),ag()(),Tl(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),cN(1318,`Nome`),ag(),Tl(1319,`th`,13),cN(1320,`Tipo`),ag(),Tl(1321,`th`,13),cN(1322,`Descrição`),ag()(),Tl(1323,`tr`,14)(1324,`td`,15),cN(1325,` params`),ag(),Tl(1326,`td`,19)(1327,`code`,43),cN(1328,` { property: string, value: string } `),ag()(),Tl(1329,`td`,22)(1330,`p`),cN(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),ag()()()(),Gl(1332,`br`),Tl(1333,`table`,40)(1334,`tr`,14)(1335,`th`,41)(1336,`div`,23)(1337,`h4`)(1338,`span`,24),cN(1339,` getObjectsByValues `),ag()()()()(),Tl(1340,`tr`,22)(1341,`td`,22)(1342,`p`),cN(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Tl(1344,`code`),cN(1345,`PoMultiselectOption`),ag(),cN(1346,`, será informado por parâmetro valor a ser pesquisado.`),ag()()()(),Tl(1347,`h5`)(1348,`b`),cN(1349,`Parâmetros`),ag()(),Tl(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),cN(1353,`Nome`),ag(),Tl(1354,`th`,13),cN(1355,`Tipo`),ag(),Tl(1356,`th`,13),cN(1357,`Descrição`),ag()(),Tl(1358,`tr`,14)(1359,`td`,15),cN(1360,` values`),ag(),Tl(1361,`td`,19)(1362,`code`,44),cN(1363,` Array<string `),ag(),Tl(1364,`code`,45),cN(1365,` number> `),ag()(),Tl(1366,`td`,22)(1367,`p`),cN(1368,`Array com os valores a serem buscados.`),ag()()()(),Gl(1369,`br`),Tl(1370,`h4`,42)(1371,`code`,5),cN(1372,`PoMultiselectLiterals`),ag()(),Tl(1373,`div`,2)(1374,`p`),cN(1375,`Interface para definição das literais usadas no `),Tl(1376,`code`),cN(1377,`po-multiselect`),ag(),cN(1378,`.`),ag()(),Tl(1379,`h4`,10),cN(1380,`Propriedades`),ag(),Tl(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),cN(1384,`Nome`),ag(),Tl(1385,`th`,13),cN(1386,`Tipo`),ag(),Tl(1387,`th`,13),cN(1388,`Descrição`),ag()(),Tl(1389,`tr`,14)(1390,`td`,15)(1391,`div`,23)(1392,`span`,24),cN(1393,` noData`),Gl(1394,`br`),ag()()(),Tl(1395,`td`,19)(1396,`code`,25),cN(1397,`string`),ag()(),Tl(1398,`td`,22)(1399,`em`)(1400,`strong`),cN(1401,`(opcional)`),ag()(),Tl(1402,`p`),cN(1403,`Texto exibido quando não houver dados encontrados na busca.`),ag()()(),Tl(1404,`tr`,14)(1405,`td`,15)(1406,`div`,23)(1407,`span`,24),cN(1408,` placeholderSearch`),Gl(1409,`br`),ag()()(),Tl(1410,`td`,19)(1411,`code`,25),cN(1412,`string`),ag()(),Tl(1413,`td`,22)(1414,`em`)(1415,`strong`),cN(1416,`(opcional)`),ag()(),Tl(1417,`p`),cN(1418,`Texto do `),Tl(1419,`em`),cN(1420,`placeholder`),ag(),cN(1421,` do campo de busca.`),ag()()(),Tl(1422,`tr`,14)(1423,`td`,15)(1424,`div`,23)(1425,`span`,24),cN(1426,` selectAll`),Gl(1427,`br`),ag()()(),Tl(1428,`td`,19)(1429,`code`,25),cN(1430,`string`),ag()(),Tl(1431,`td`,22)(1432,`em`)(1433,`strong`),cN(1434,`(opcional)`),ag()(),Tl(1435,`p`),cN(1436,`Texto exibido no botão de selecionar todos.`),ag()()(),Tl(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),cN(1441,` selectItem`),Gl(1442,`br`),ag()()(),Tl(1443,`td`,19)(1444,`code`,25),cN(1445,`string`),ag()(),Tl(1446,`td`,22)(1447,`em`)(1448,`strong`),cN(1449,`(opcional)`),ag()(),Tl(1450,`p`),cN(1451,`Texto exibido na propriedade placeholder.`),ag()()()(),Tl(1452,`h4`,42)(1453,`code`,5),cN(1454,`PoMultiselectOption`),ag()(),Tl(1455,`div`,2)(1456,`p`),cN(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),ag()(),Tl(1458,`h4`,10),cN(1459,`Propriedades`),ag(),Tl(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),cN(1463,`Nome`),ag(),Tl(1464,`th`,13),cN(1465,`Tipo`),ag(),Tl(1466,`th`,13),cN(1467,`Descrição`),ag()(),Tl(1468,`tr`,14)(1469,`td`,15)(1470,`div`,23)(1471,`span`,24),cN(1472,` label`),Gl(1473,`br`),ag()()(),Tl(1474,`td`,19)(1475,`code`,25),cN(1476,`string`),ag()(),Tl(1477,`td`,22)(1478,`p`),cN(1479,`Label exibido nos itens da lista.`),ag()()(),Tl(1480,`tr`,14)(1481,`td`,15)(1482,`div`,23)(1483,`span`,24),cN(1484,` value`),Gl(1485,`br`),ag()()(),Tl(1486,`td`,19)(1487,`code`,25),cN(1488,`string `),ag(),Tl(1489,`code`,27),cN(1490,` number`),ag()(),Tl(1491,`td`,22)(1492,`p`),cN(1493,`Valor do objeto que será atribuído ao model.`),ag()()()(),Tl(1494,`h3`),cN(1495,`Enums`),ag(),Tl(1496,`h4`,4)(1497,`code`,5),cN(1498,`PoMultiselectFilterMode`),ag()(),Tl(1499,`div`,2)(1500,`p`),cN(1501,`Define o tipo de busca usado no po-multiselect.`),ag()(),Tl(1502,`h4`,10),cN(1503,`Propriedades`),ag(),Tl(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),cN(1507,`Nome`),ag(),Tl(1508,`th`,13),cN(1509,`Descrição`),ag()(),Tl(1510,`tr`,14)(1511,`td`,15)(1512,`div`,23)(1513,`span`,24),cN(1514,` startsWith`),Gl(1515,`br`),ag()()(),Tl(1516,`td`,22)(1517,`p`),cN(1518,`Verifica se o texto `),Tl(1519,`em`),cN(1520,`inicia`),ag(),cN(1521,` com o valor pesquisado.`),ag()()(),Tl(1522,`tr`,14)(1523,`td`,15)(1524,`div`,23)(1525,`span`,24),cN(1526,` contains`),Gl(1527,`br`),ag()()(),Tl(1528,`td`,22)(1529,`p`),cN(1530,`Verifica se o texto `),Tl(1531,`em`),cN(1532,`contém`),ag(),cN(1533,` o valor pesquisado.`),ag()()(),Tl(1534,`tr`,14)(1535,`td`,15)(1536,`div`,23)(1537,`span`,24),cN(1538,` endsWith`),Gl(1539,`br`),ag()()(),Tl(1540,`td`,22)(1541,`p`),cN(1542,`Verifica se o texto `),Tl(1543,`em`),cN(1544,`finaliza`),ag(),cN(1545,` com o valor pesquisado.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var gt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-multiselect-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-multiselect-basic-view`)(6,`sample-po-multiselect-labs-view`)(7,`sample-po-multiselect-vacation-view`)(8,`sample-po-multiselect-vacation-reactive-form-view`)(9,`sample-po-multiselect-template-view`)(10,`sample-po-multiselect-heroes-view`)(11,`sample-po-multiselect-any-array-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ve,Ae,Oe,qe,Be,ze,Ie,He],encapsulation:2,changeDetection:1})}return l})()}];var Re=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[bL.forChild(gt),bL]})}return l})();var vn=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[ar,Re]})}return l})();export{vn as DocPoMultiselectModule};