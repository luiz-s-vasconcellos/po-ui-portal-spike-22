import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,In as zye,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Pn as zH,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ba as yw,ei as Yl,fi as ag,ga as wx,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,li as _x,lr as Gl,on as mCe,pa as w,q as Mbe,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vi as bx,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var xe=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&Gl(0,`po-search-ai`,0)},dependencies:[zH],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO AI Search Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component } from '@angular/core';

import { PoSearchAiColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-basic',
  templateUrl: './sample-po-search-ai-basic.component.html',
  standalone: false
})
export class SamplePoSearchAiBasicComponent {
  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-ai-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return o})();function Ie(o,O){if(o&1&&(Tl(0,`po-container`,4)(1,`p`)(2,`strong`),cN(3,`Query:`),ag(),cN(4),ag(),Tl(5,`p`)(6,`strong`),cN(7,`Filtro:`),ag(),cN(8),ag(),Tl(9,`p`)(10,`strong`),cN(11,`Descrição:`),ag(),cN(12),ag(),Tl(13,`p`)(14,`strong`),cN(15,`Confiança:`),ag(),cN(16),ag()()),o&2){let a=Fx();jp(4),hg(` `,a.result.query),jp(4),hg(` `,a.result.filter),jp(4),hg(` `,a.result.description),jp(4),hg(` `,a.result.confidence)}}var be=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Ax();Tl(0,`po-search-ai`,1),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(p){return i.onResult(p)}),ag(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3),ag(),_x(4,Ie,17,4,`po-container`,4),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(p){return Ky(d),uN(i.label,p)||(i.label=p),Xy(p)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(p){return Ky(d),uN(i.help,p)||(i.help=p),Xy(p)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(p){return Ky(d),uN(i.helperText,p)||(i.helperText=p),Xy(p)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(p){return Ky(d),uN(i.placeholder,p)||(i.placeholder=p),Xy(p)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(p){return Ky(d),uN(i.errorPattern,p)||(i.errorPattern=p),Xy(p)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(p){return Ky(d),uN(i.url,p)||(i.url=p),Xy(p)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(p){return Ky(d),uN(i.timeout,p)||(i.timeout=p),Xy(p)}),ag(),a0(),Tl(15,`po-decimal`,12),ww(`ngModelChange`,function(p){return Ky(d),uN(i.minConfidence,p)||(i.minConfidence=p),Xy(p)}),ag(),a0(),Tl(16,`po-checkbox-group`,13),ww(`ngModelChange`,function(p){return Ky(d),uN(i.properties,p)||(i.properties=p),Xy(p)}),ag(),a0(),Tl(17,`po-radio-group`,14),ww(`ngModelChange`,function(p){return Ky(d),uN(i.size,p)||(i.size=p),Xy(p)}),ag(),a0(),Tl(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return Ky(d),Bx(7).reset(),Xy(i.restore())}),ag()()()}l&2&&(nw(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),jp(3),nw(`p-value`,i.event),jp(),Dx(i.result?4:-1),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.url),l0(),jp(),Ew(`ngModel`,i.timeout),l0(),jp(),Ew(`ngModel`,i.minConfidence),nw(`p-decimals-length`,2),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,xp,Xy$1,N4,zye,iU,zH,ube,L0e,ybe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO AI Search Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-search-ai
  name="searchAi"
  [p-columns]="columns"
  [p-clean]="properties?.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties?.includes('loading')"
  [p-min-confidence]="minConfidence"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties?.includes('readonly')"
  [p-required]="properties?.includes('required')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-size]="size"
  [p-timeout]="timeout"
  [p-url]="url"
  (p-blur)="changeEvent('p-blur')"
  (p-clear)="onClear()"
  (p-enter)="changeEvent('p-enter')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-low-confidence)="changeEvent('p-low-confidence')"
  (p-result)="onResult($event)"
>
</po-search-ai>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
  </po-container>
}

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-label="URL"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="timeout" [(ngModel)]="timeout" p-clean p-label="Timeout (ms)"> </po-number>

  <po-decimal
    class="po-md-6 po-lg-3"
    name="minConfidence"
    [(ngModel)]="minConfidence"
    p-clean
    p-label="Min Confidence"
    [p-decimals-length]="2"
    p-help="Valor entre 0 e 1"
  >
  </po-decimal>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-labs',
  templateUrl: './sample-po-search-ai-labs.component.html',
  standalone: false
})
export class SamplePoSearchAiLabsComponent implements OnInit {
  compactLabel: boolean;
  errorPattern: string;
  event: string;
  result: PoSearchAiResult;
  help: string;
  helperText: string;
  label: string;
  labelTextWrap: boolean;
  loading: boolean;
  minConfidence: number;
  noAutocomplete: boolean;
  placeholder: string;
  properties: Array<string>;
  size: string;
  timeout: number;
  url: string;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  onResult(result: PoSearchAiResult) {
    this.result = result;
    this.event = 'p-result';
  }

  onClear() {
    this.result = undefined;
    this.event = 'p-clear';
  }

  restore() {
    this.errorPattern = undefined;
    this.event = undefined;
    this.result = undefined;
    this.help = undefined;
    this.helperText = undefined;
    this.label = 'Busca inteligente';
    this.minConfidence = 0.5;
    this.placeholder = 'Descreva o que procura em linguagem natural';
    this.properties = ['clean'];
    this.size = 'medium';
    this.timeout = 10000;
    this.url = 'https://po-sample-api.onrender.com/v1/ai/filter';
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-ai-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return o})();function Fe(o,O){if(o&1&&(Tl(0,`po-container`,1)(1,`p`)(2,`strong`),cN(3,`Query:`),ag(),cN(4),ag(),Tl(5,`p`)(6,`strong`),cN(7,`Filtro:`),ag(),cN(8),ag(),Tl(9,`p`)(10,`strong`),cN(11,`Descrição:`),ag(),cN(12),ag(),Tl(13,`p`)(14,`strong`),cN(15,`Confiança:`),ag(),cN(16),ag()()),o&2){let a=Fx();jp(4),hg(` `,a.result.query),jp(4),hg(` `,a.result.filter),jp(4),hg(` `,a.result.description),jp(4),hg(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Tl(0,`po-search-ai`,0),ht(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),ag(),_x(1,Fe,17,4,`po-container`,1)),l&2&&(nw(`p-columns`,i.columns),jp(),Dx(i.result?1:-1))},dependencies:[xp,zH],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO AI Search - Result`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-search-ai
  name="searchAi"
  p-label="Busca inteligente"
  p-help="Descreva o que procura em linguagem natural e pressione Enter"
  p-placeholder="Ex: clientes de SP com idade acima de 30"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
  </po-container>
}
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-result',
  templateUrl: './sample-po-search-ai-result.component.html',
  standalone: false
})
export class SamplePoSearchAiResultComponent {
  result: PoSearchAiResult;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  onResult(result: PoSearchAiResult) {
    this.result = result;
  }

  onClear() {
    this.result = undefined;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-ai-result`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return o})();function Ve(o,O){if(o&1){let a=Ax();Tl(0,`po-filter-chip`,10),ht(`p-selected-change`,function(i){let d=Ky(a).$implicit;return Xy(Fx().onSuggestionChange(d,i))}),ag()}if(o&2){let a=O.$implicit,l=Fx();nw(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(Tl(0,`po-container`,9)(1,`p`,11),cN(2,`Filtro OData gerado`),ag(),Tl(3,`p`)(4,`strong`),cN(5,`Consulta:`),ag(),cN(6),ag(),Tl(7,`p`)(8,`strong`),cN(9,`Descrição:`),ag(),cN(10),ag(),Tl(11,`p`)(12,`strong`),cN(13,`Confiança:`),ag(),cN(14),ag(),Tl(15,`pre`,12),cN(16),ag()()),o&2){let a=Fx();jp(6),hg(` `,a.query),jp(4),hg(` `,a.description),jp(4),hg(` `,a.confidence),jp(2),yw(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(w(Eu))};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Yl(zH,5),l&2){let d;lo(d=uo())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Tl(0,`po-container`,0)(1,`p`,1),cN(2,`Gere um filtro com IA`),ag(),Tl(3,`p`,2),cN(4,` Este exemplo usa o `),Tl(5,`code`),cN(6,`po-search-ai`),ag(),cN(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),ag(),Tl(8,`p`,3),cN(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Tl(10,`a`,4),cN(11,`po-table`),ag(),cN(12,` já integra o `),Tl(13,`code`),cN(14,`po-search-ai`),ag(),cN(15,` de forma inteligente através da propriedade `),Tl(16,`code`),cN(17,`p-search-ai-field`),ag(),cN(18,`, experimente também! `),ag()(),Tl(19,`po-search-ai`,5),ht(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),ag(),Tl(20,`p`,6),cN(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),ag(),Tl(22,`div`,7),Cx(23,Ve,1,3,`po-filter-chip`,8,wx),ag(),_x(25,ze,17,4,`po-container`,9)),l&2&&(jp(19),nw(`p-columns`,i.columns),jp(4),bx(i.examples),jp(2),Dx(i.filter?25:-1))},dependencies:[xp,zH,Mbe],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO AI Search - Filter`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container class="po-mb-2" p-no-border>
  <p class="po-font-text-large-bold po-mb-1">Gere um filtro com IA</p>
  <p class="po-font-text" style="color: var(--color-neutral-dark-70)">
    Este exemplo usa o <code>po-search-ai</code> de forma isolada para transformar uma frase em linguagem natural em um
    filtro OData reutiliz\xE1vel, que voc\xEA pode aplicar em qualquer fonte de dados.
  </p>
  <p class="po-font-text po-mt-1" style="color: var(--color-neutral-dark-70)">
    Quer aplicar o filtro automaticamente em uma tabela? O
    <a href="https://po-ui.io/documentation/po-table" target="_blank">po-table</a>
    j\xE1 integra o <code>po-search-ai</code> de forma inteligente atrav\xE9s da propriedade <code>p-search-ai-field</code>,
    experimente tamb\xE9m!
  </p>
</po-container>

<po-search-ai
  name="searchAi"
  p-label="Gerar filtro com IA"
  p-help="Descreva o que procura e pressione Enter para gerar um filtro OData"
  p-placeholder="Ex: funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-low-confidence)="onLowConfidence($event)"
  (p-error)="onError($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

<p class="po-font-text-small po-mt-2 po-mb-1" style="color: var(--color-neutral-mid-tone)">
  Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
</p>
<div class="po-mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  @for (ex of examples; track ex) {
    <po-filter-chip
      [p-label]="ex"
      [p-selected]="selectedSuggestion === ex"
      [p-disabled]="suggestionsLocked && selectedSuggestion !== ex"
      (p-selected-change)="onSuggestionChange(ex, $event)"
    ></po-filter-chip>
  }
</div>

@if (filter) {
  <po-container class="po-mt-2" p-no-padding>
    <p class="po-font-text-large-bold">Filtro OData gerado</p>
    <p><strong>Consulta:</strong> { { query }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { description }}</p>
    <p><strong>Confian\xE7a:</strong> { { confidence }}</p>
    <pre class="po-font-text" style="background: var(--color-neutral-light-10); padding: 8px; border-radius: 4px">{ {
      filter
    }}</pre>
  </po-container>
}
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiColumn,
  PoSearchAiComponent,
  PoSearchAiError,
  PoSearchAiResult
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-filter',
  templateUrl: './sample-po-search-ai-filter.component.html',
  standalone: false
})
export class SamplePoSearchAiFilterComponent {
  @ViewChild(PoSearchAiComponent) searchAi: PoSearchAiComponent;

  confidence: number;
  description: string;
  filter: string;
  query: string;

  selectedSuggestion: string;
  suggestionsLocked = false;

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' },
    { property: 'department', label: 'Departamento', type: 'string' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'number' }
  ];

  readonly examples: Array<string> = [
    'funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000',
    'departamento Engenharia',
    'com menos de 30 anos',
    'sal\xE1rio entre 8000 e 12000',
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design'
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    if (!this.searchAi) {
      return;
    }

    this.searchAi.writeValueModel(query);
    this.searchAi.search();
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    // Considera apenas o evento de sele\xE7\xE3o; emiss\xF5es de desele\xE7\xE3o vindas da
    // sincroniza\xE7\xE3o do input \`p-selected\` (single-select) s\xE3o ignoradas.
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onResult(result: PoSearchAiResult) {
    this.query = result.query;
    this.filter = result.filter;
    this.description = result.description;
    this.confidence = result.confidence;
  }

  onLowConfidence(result: PoSearchAiResult) {
    this.poNotification.warning(
      \`N\xE3o tenho certeza do que voc\xEA quis dizer com "\${result.query}". Tente reformular a busca.\`
    );
  }

  onError(error: PoSearchAiError) {
    this.poNotification.error(\`Erro ao consultar a IA: \${error.message}\`);
  }

  onClear() {
    this.confidence = undefined;
    this.description = undefined;
    this.filter = undefined;
    this.query = undefined;
    this.selectedSuggestion = undefined;
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-ai-filter`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,We,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoSearchAiComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O `),Tl(24,`code`),cN(25,`po-search-ai`),ag(),cN(26,` é um componente de `),Tl(27,`strong`),cN(28,`busca em linguagem natural`),ag(),cN(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Tl(30,`em`),cN(31,`"clientes de SP com saldo acima de R$ 500"`),ag(),cN(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Tl(33,`a`,6)(34,`code`),cN(35,`po-table`),ag()(),cN(36,`.`),ag(),Tl(37,`blockquote`)(38,`p`)(39,`strong`),cN(40,`Componente experimental:`),ag(),cN(41,` o `),Tl(42,`code`),cN(43,`po-search-ai`),ag(),cN(44,` est\xE1 em fase experimental. Sua API
(propriedades, eventos e contrato com o backend) pode sofrer altera\xE7\xF5es
entre vers\xF5es. Utilize com cautela em ambientes de produ\xE7\xE3o.`),ag()(),Tl(45,`p`),cN(46,`O componente é `),Tl(47,`strong`),cN(48,`agnóstico ao provedor de IA`),ag(),cN(49,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Tl(50,`code`),cN(51,`p-url`),ag(),cN(52,`, que recebe `),Tl(53,`code`),cN(54,`{ query, columns }`),ag(),cN(55,` e deve retornar
`),Tl(56,`code`),cN(57,`{ filter, description, confidence }`),ag(),cN(58,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),ag(),Tl(59,`p`),cN(60,`Por herdar de `),Tl(61,`code`),cN(62,`po-input`),ag(),cN(63,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Tl(64,`code`),cN(65,`template-driven`),ag(),cN(66,` e `),Tl(67,`code`),cN(68,`reactive`),ag(),cN(69,`.`),ag(),Tl(70,`h4`),cN(71,`Endpoint de IA (backend)`),ag(),Tl(72,`p`),cN(73,`O componente `),Tl(74,`strong`),cN(75,`não conversa diretamente com a LLM`),ag(),cN(76,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Tl(77,`code`),cN(78,`p-url`),ag(),cN(79,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),ag(),Tl(80,`p`),cN(81,`O contrato é simples. O componente faz um `),Tl(82,`code`),cN(83,`POST`),ag(),cN(84,` enviando:`),ag(),Tl(85,`pre`)(86,`code`,7),cN(87,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),ag()(),Tl(88,`p`),cN(89,`E o endpoint deve responder com:`),ag(),Tl(90,`pre`)(91,`code`,7),cN(92,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),ag()(),Tl(93,`p`),cN(94,`Onde `),Tl(95,`code`),cN(96,`filter`),ag(),cN(97,` é o filtro estruturado gerado pela IA (normalmente OData), `),Tl(98,`code`),cN(99,`description`),ag(),cN(100,` \xE9 um
resumo leg\xEDvel e `),Tl(101,`code`),cN(102,`confidence`),ag(),cN(103,` (`),Tl(104,`code`),cN(105,`0.0`),ag(),cN(106,` a `),Tl(107,`code`),cN(108,`1.0`),ag(),cN(109,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Tl(110,`code`),cN(111,`p-min-confidence`),ag(),cN(112,` para decidir entre os eventos `),Tl(113,`code`),cN(114,`p-result`),ag(),cN(115,` e `),Tl(116,`code`),cN(117,`p-low-confidence`),ag(),cN(118,`.`),ag(),Tl(119,`blockquote`)(120,`p`)(121,`strong`),cN(122,`Exemplo de implementação:`),ag(),cN(123,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),ag(),Tl(124,`ul`)(125,`li`),cN(126,`Endpoint público: `),Tl(127,`a`,8)(128,`code`),cN(129,`/v1/ai/filter`),ag()()(),Tl(130,`li`),cN(131,`Código-fonte: `),Tl(132,`a`,9),cN(133,`po-sample-api/src/ai/ai.service.ts`),ag()()()(),Tl(134,`h4`),cN(135,`Estados de comportamento`),ag(),Tl(136,`ul`)(137,`li`)(138,`strong`),cN(139,`Idle:`),ag(),cN(140,` aguardando a digitação da consulta.`),ag(),Tl(141,`li`)(142,`strong`),cN(143,`Loading:`),ag(),cN(144,` consulta em andamento (ícone de carregamento ativo).`),ag(),Tl(145,`li`)(146,`strong`),cN(147,`Aplicado:`),ag(),cN(148,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),ag(),Tl(149,`li`)(150,`strong`),cN(151,`Baixa confiança:`),ag(),cN(152,` quando `),Tl(153,`code`),cN(154,`confidence`),ag(),cN(155,` for menor que `),Tl(156,`code`),cN(157,`p-min-confidence`),ag(),cN(158,`, emite
`),Tl(159,`code`),cN(160,`p-low-confidence`),ag(),cN(161,` e não aplica o filtro automaticamente.`),ag(),Tl(162,`li`)(163,`strong`),cN(164,`Erro:`),ag(),cN(165,` quando a chamada falha, emite `),Tl(166,`code`),cN(167,`p-error`),ag(),cN(168,`.`),ag()(),Tl(169,`h4`),cN(170,`Tokens customizáveis`),ag(),Tl(171,`p`),cN(172,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(173,`blockquote`)(174,`p`),cN(175,`Para maiores informações, acesse o guia `),Tl(176,`a`,10),cN(177,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(178,`.`),ag()(),Tl(179,`table`)(180,`thead`)(181,`tr`)(182,`th`),cN(183,`Propriedade`),ag(),Tl(184,`th`),cN(185,`Descrição`),ag(),Tl(186,`th`),cN(187,`Valor Padrão`),ag()()(),Tl(188,`tbody`)(189,`tr`)(190,`td`)(191,`strong`),cN(192,`Default`),ag()(),Gl(193,`td`)(194,`td`),ag(),Tl(195,`tr`)(196,`td`)(197,`code`),cN(198,`--font-family`),ag()(),Tl(199,`td`),cN(200,`Família tipográfica do campo`),ag(),Tl(201,`td`)(202,`code`),cN(203,`var(--font-family-theme)`),ag()()(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--font-size`),ag()(),Tl(208,`td`),cN(209,`Tamanho da fonte do campo`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--font-size)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`code`),cN(216,`--text-color`),ag()(),Tl(217,`td`),cN(218,`Cor do texto digitado`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-neutral-dark-90)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`code`),cN(225,`--text-color-placeholder`),ag()(),Tl(226,`td`),cN(227,`Cor do texto do placeholder`),ag(),Tl(228,`td`)(229,`code`),cN(230,`var(--color-neutral-light-30)`),ag()()(),Tl(231,`tr`)(232,`td`)(233,`code`),cN(234,`--color`),ag()(),Tl(235,`td`),cN(236,`Cor da borda do campo`),ag(),Tl(237,`td`)(238,`code`),cN(239,`var(--color-neutral-dark-70)`),ag()()(),Tl(240,`tr`)(241,`td`)(242,`code`),cN(243,`--background`),ag()(),Tl(244,`td`),cN(245,`Cor de fundo do campo`),ag(),Tl(246,`td`)(247,`code`),cN(248,`var(--color-neutral-light-05)`),ag()()(),Tl(249,`tr`)(250,`td`)(251,`code`),cN(252,`--border-radius`),ag()(),Tl(253,`td`),cN(254,`Raio da borda do campo`),ag(),Tl(255,`td`)(256,`code`),cN(257,`var(--border-radius-md)`),ag()()(),Tl(258,`tr`)(259,`td`)(260,`strong`),cN(261,`Ícones e divisória`),ag()(),Gl(262,`td`)(263,`td`),ag(),Tl(264,`tr`)(265,`td`)(266,`code`),cN(267,`--color-icon-read`),ag()(),Tl(268,`td`),cN(269,`Cor do ícone de busca por IA`),ag(),Tl(270,`td`)(271,`code`),cN(272,`var(--color-neutral-dark-70)`),ag()()(),Tl(273,`tr`)(274,`td`)(275,`code`),cN(276,`--color-divider`),ag()(),Tl(277,`td`),cN(278,`Cor da divisória vertical entre o campo e o botão de busca`),ag(),Tl(279,`td`)(280,`code`),cN(281,`var(--color-neutral-mid-40)`),ag()()(),Tl(282,`tr`)(283,`td`)(284,`code`),cN(285,`--color-icon-processing`),ag()(),Tl(286,`td`),cN(287,`Cor do ícone exibido enquanto a consulta está sendo processada`),ag(),Tl(288,`td`)(289,`code`),cN(290,`var(--color-action-default)`),ag()()(),Tl(291,`tr`)(292,`td`)(293,`strong`),cN(294,`Hover`),ag()(),Gl(295,`td`)(296,`td`),ag(),Tl(297,`tr`)(298,`td`)(299,`code`),cN(300,`--color-hover`),ag()(),Tl(301,`td`),cN(302,`Cor da borda no estado hover`),ag(),Tl(303,`td`)(304,`code`),cN(305,`var(--color-brand-01-dark)`),ag()()(),Tl(306,`tr`)(307,`td`)(308,`code`),cN(309,`--background-hover`),ag()(),Tl(310,`td`),cN(311,`Cor de fundo no estado hover`),ag(),Tl(312,`td`)(313,`code`),cN(314,`var(--color-brand-01-lightest)`),ag()()(),Tl(315,`tr`)(316,`td`)(317,`strong`),cN(318,`Focused`),ag()(),Gl(319,`td`)(320,`td`),ag(),Tl(321,`tr`)(322,`td`)(323,`code`),cN(324,`--color-focused`),ag()(),Tl(325,`td`),cN(326,`Cor da borda no estado de foco`),ag(),Tl(327,`td`)(328,`code`),cN(329,`var(--color-action-default)`),ag()()(),Tl(330,`tr`)(331,`td`)(332,`code`),cN(333,`--outline-color-focused`),ag()(),Tl(334,`td`),cN(335,`Cor do outline no estado de foco`),ag(),Tl(336,`td`)(337,`code`),cN(338,`var(--color-action-focus)`),ag()()(),Tl(339,`tr`)(340,`td`)(341,`strong`),cN(342,`Disabled`),ag()(),Gl(343,`td`)(344,`td`),ag(),Tl(345,`tr`)(346,`td`)(347,`code`),cN(348,`--color-disabled`),ag()(),Tl(349,`td`),cN(350,`Cor da borda no estado desabilitado`),ag(),Tl(351,`td`)(352,`code`),cN(353,`var(--color-neutral-light-30)`),ag()()(),Tl(354,`tr`)(355,`td`)(356,`code`),cN(357,`--background-disabled`),ag()(),Tl(358,`td`),cN(359,`Cor de fundo no estado desabilitado`),ag(),Tl(360,`td`)(361,`code`),cN(362,`var(--color-neutral-light-20)`),ag()()()()()(),Tl(363,`div`,11)(364,`h4`,12),cN(365,`Seletor`),ag(),Tl(366,`pre`,13),cN(367,`<po-search-ai
    (p-clear)="EventEmitter"
    p-columns="Array<PoSearchAiColumn>"
    (p-error)="EventEmitter"
    p-literals="PoSearchAiLiterals"
    (p-low-confidence)="EventEmitter"
    p-min-confidence="number"
    (p-result)="EventEmitter"
    p-timeout="number"
    p-url="string" >
</po-search-ai>
`),ag()(),Tl(368,`h4`,14),cN(369,`Propriedades`),ag(),Tl(370,`table`,15)(371,`tr`,16)(372,`th`,17),cN(373,`Nome`),ag(),Tl(374,`th`,17),cN(375,`Tipo`),ag(),Tl(376,`th`,17),cN(377,`Padrão`),ag(),Tl(378,`th`,17),cN(379,`Descrição`),ag()(),Tl(380,`tr`,18)(381,`td`,19)(382,`div`,20)(383,`span`,21),cN(384,` (p-clear)`),Gl(385,`br`),ag()()(),Tl(386,`td`,22)(387,`code`,23),cN(388,`EventEmitter`),ag()(),Tl(389,`td`,24),cN(390,`-`),ag(),Tl(391,`td`,25)(392,`em`)(393,`strong`),cN(394,`(opcional)`),ag()(),Tl(395,`p`),cN(396,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),ag()()(),Tl(397,`tr`,18)(398,`td`,19)(399,`div`,26)(400,`span`,27),cN(401,` p-columns`),Gl(402,`br`),ag()()(),Tl(403,`td`,22)(404,`code`,28),cN(405,`Array<PoSearchAiColumn>`),ag()(),Tl(406,`td`,24)(407,`p`)(408,`code`),cN(409,`[]`),ag()()(),Tl(410,`td`,25)(411,`em`)(412,`strong`),cN(413,`(opcional)`),ag()(),Tl(414,`p`),cN(415,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Tl(416,`code`),cN(417,`p-url`),ag(),cN(418,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),ag()()(),Tl(419,`tr`,18)(420,`td`,19)(421,`div`,20)(422,`span`,21),cN(423,` (p-error)`),Gl(424,`br`),ag()()(),Tl(425,`td`,22)(426,`code`,23),cN(427,`EventEmitter`),ag()(),Tl(428,`td`,24),cN(429,`-`),ag(),Tl(430,`td`,25)(431,`em`)(432,`strong`),cN(433,`(opcional)`),ag()(),Tl(434,`p`),cN(435,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Tl(436,`code`),cN(437,`PoSearchAiError`),ag(),cN(438,`.`),ag()()(),Tl(439,`tr`,18)(440,`td`,19)(441,`div`,26)(442,`span`,27),cN(443,` p-literals`),Gl(444,`br`),ag()()(),Tl(445,`td`,22)(446,`code`,29),cN(447,`PoSearchAiLiterals`),ag()(),Tl(448,`td`,24),cN(449,`-`),ag(),Tl(450,`td`,25)(451,`em`)(452,`strong`),cN(453,`(opcional)`),ag()(),Tl(454,`p`),cN(455,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),ag()()(),Tl(456,`tr`,18)(457,`td`,19)(458,`div`,20)(459,`span`,21),cN(460,` (p-low-confidence)`),Gl(461,`br`),ag()()(),Tl(462,`td`,22)(463,`code`,23),cN(464,`EventEmitter`),ag()(),Tl(465,`td`,24),cN(466,`-`),ag(),Tl(467,`td`,25)(468,`em`)(469,`strong`),cN(470,`(opcional)`),ag()(),Tl(471,`p`),cN(472,`Evento disparado quando a confiança da resposta da IA é menor que `),Tl(473,`code`),cN(474,`p-min-confidence`),ag(),cN(475,`.
Emite um objeto `),Tl(476,`code`),cN(477,`PoSearchAiResult`),ag(),cN(478,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),ag()()(),Tl(479,`tr`,18)(480,`td`,19)(481,`div`,26)(482,`span`,27),cN(483,` p-min-confidence`),Gl(484,`br`),ag()()(),Tl(485,`td`,22)(486,`code`,30),cN(487,`number`),ag()(),Tl(488,`td`,24)(489,`p`)(490,`code`),cN(491,`0.5`),ag()()(),Tl(492,`td`,25)(493,`em`)(494,`strong`),cN(495,`(opcional)`),ag()(),Tl(496,`p`),cN(497,`Nível mínimo de confiança (`),Tl(498,`code`),cN(499,`0.0`),ag(),cN(500,` a `),Tl(501,`code`),cN(502,`1.0`),ag(),cN(503,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Tl(504,`code`),cN(505,`p-low-confidence`),ag(),cN(506,` \xE9
emitido em vez de `),Tl(507,`code`),cN(508,`p-result`),ag(),cN(509,`.`),ag()()(),Tl(510,`tr`,18)(511,`td`,19)(512,`div`,20)(513,`span`,21),cN(514,` (p-result)`),Gl(515,`br`),ag()()(),Tl(516,`td`,22)(517,`code`,23),cN(518,`EventEmitter`),ag()(),Tl(519,`td`,24),cN(520,`-`),ag(),Tl(521,`td`,25)(522,`em`)(523,`strong`),cN(524,`(opcional)`),ag()(),Tl(525,`p`),cN(526,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Tl(527,`code`),cN(528,`p-min-confidence`),ag(),cN(529,`. Emite um objeto `),Tl(530,`code`),cN(531,`PoSearchAiResult`),ag(),cN(532,`.`),ag(),Tl(533,`p`),cN(534,`O campo `),Tl(535,`code`),cN(536,`type`),ag(),cN(537,` do resultado indica como o consumidor deve interpretar a resposta:`),ag(),Tl(538,`ul`)(539,`li`)(540,`p`)(541,`strong`)(542,`code`),cN(543,`filter`),ag()(),Tl(544,`em`),cN(545,`(padrão)`),ag(),cN(546,`: a IA retornou um filtro estruturado (ex: OData). Use `),Tl(547,`code`),cN(548,`result.filter`),ag(),cN(549,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Tl(550,`code`),cN(551,`po-table`),ag(),cN(552,` via `),Tl(553,`code`),cN(554,`p-filter`),ag(),cN(555,`.`),ag()(),Tl(556,`li`)(557,`p`)(558,`strong`)(559,`code`),cN(560,`chat`),ag()(),cN(561,`: a IA retornou uma resposta conversacional. Use `),Tl(562,`code`),cN(563,`result.data`),ag(),cN(564,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),ag()(),Tl(565,`li`)(566,`p`)(567,`strong`)(568,`code`),cN(569,`custom`),ag()(),cN(570,`: a IA retornou um payload genérico definido pelo backend. Use `),Tl(571,`code`),cN(572,`result.data`),ag(),cN(573,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),ag()()()()(),Tl(574,`tr`,18)(575,`td`,19)(576,`div`,26)(577,`span`,27),cN(578,` p-timeout`),Gl(579,`br`),ag()()(),Tl(580,`td`,22)(581,`code`,30),cN(582,`number`),ag()(),Tl(583,`td`,24)(584,`p`)(585,`code`),cN(586,`10000`),ag()()(),Tl(587,`td`,25)(588,`em`)(589,`strong`),cN(590,`(opcional)`),ag()(),Tl(591,`p`),cN(592,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Tl(593,`code`),cN(594,`p-error`),ag(),cN(595,` com `),Tl(596,`code`),cN(597,`statusCode 408`),ag(),cN(598,`.`),ag()()(),Tl(599,`tr`,18)(600,`td`,19)(601,`div`,26)(602,`span`,27),cN(603,` p-url`),Gl(604,`br`),ag()()(),Tl(605,`td`,22)(606,`code`,31),cN(607,`string`),ag()(),Tl(608,`td`,24),cN(609,`-`),ag(),Tl(610,`td`,25)(611,`em`)(612,`strong`),cN(613,`(opcional)`),ag()(),Tl(614,`p`),cN(615,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Tl(616,`code`),cN(617,`{ query, columns }`),ag(),cN(618,` via `),Tl(619,`code`),cN(620,`POST`),ag(),cN(621,` e deve retornar `),Tl(622,`code`),cN(623,`{ filter, description, confidence }`),ag(),cN(624,`.`),ag(),Tl(625,`blockquote`)(626,`p`),cN(627,`A integração com a LLM e a guarda de chaves devem ocorrer `),Tl(628,`strong`),cN(629,`no backend`),ag(),cN(630,`, nunca no client-side.`),ag()()()()(),Tl(631,`h3`,14),cN(632,`Métodos`),ag(),Tl(633,`table`,32)(634,`tr`,18)(635,`th`,33)(636,`div`,26)(637,`h4`)(638,`span`,27),cN(639,` search `),ag()()()()(),Tl(640,`tr`,25)(641,`td`,25)(642,`p`),cN(643,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Tl(644,`code`),cN(645,`p-url`),ag(),cN(646,`.`),ag(),Tl(647,`p`),cN(648,`Caso a consulta esteja vazia ou `),Tl(649,`code`),cN(650,`p-url`),ag(),cN(651,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Tl(652,`code`),cN(653,`p-result`),ag(),cN(654,` (ou `),Tl(655,`code`),cN(656,`p-low-confidence`),ag(),cN(657,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Tl(658,`code`),cN(659,`p-error`),ag(),cN(660,`.`),ag()()()(),Gl(661,`br`),Tl(662,`table`,32)(663,`tr`,18)(664,`th`,33)(665,`div`,26)(666,`h4`)(667,`span`,27),cN(668,` clearSearch `),ag()()()()(),Tl(669,`tr`,25)(670,`td`,25)(671,`p`),cN(672,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Tl(673,`code`),cN(674,`p-clear`),ag(),cN(675,`.`),ag()()()(),Gl(676,`br`),Tl(677,`table`,32)(678,`tr`,18)(679,`th`,33)(680,`div`,26)(681,`h4`)(682,`span`,27),cN(683,` onSearchKeydown `),ag()()()()(),Tl(684,`tr`,25)(685,`td`,25)(686,`p`),cN(687,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Tl(688,`code`),cN(689,`Enter`),ag(),cN(690,`.`),ag()()()(),Tl(691,`h5`)(692,`b`),cN(693,`Parâmetros`),ag()(),Tl(694,`table`,15)(695,`tr`,16)(696,`th`,17),cN(697,`Nome`),ag(),Tl(698,`th`,17),cN(699,`Tipo`),ag(),Tl(700,`th`,17),cN(701,`Descrição`),ag()(),Tl(702,`tr`,18)(703,`td`,19),cN(704,` event`),ag(),Gl(705,`td`,22),Tl(706,`td`,25)(707,`p`),cN(708,`Evento de teclado.`),ag()()()(),Gl(709,`br`),Tl(710,`h3`),cN(711,`Interfaces`),ag(),Tl(712,`h4`,34)(713,`code`,5),cN(714,`PoSearchAiColumn`),ag()(),Tl(715,`div`,2)(716,`p`),cN(717,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),ag(),Tl(718,`p`),cN(719,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),ag()(),Tl(720,`h4`,14),cN(721,`Propriedades`),ag(),Tl(722,`table`,15)(723,`tr`,16)(724,`th`,17),cN(725,`Nome`),ag(),Tl(726,`th`,17),cN(727,`Tipo`),ag(),Tl(728,`th`,17),cN(729,`Descrição`),ag()(),Tl(730,`tr`,18)(731,`td`,19)(732,`div`,26)(733,`span`,27),cN(734,` label`),Gl(735,`br`),ag()()(),Tl(736,`td`,22)(737,`code`,31),cN(738,`string`),ag()(),Tl(739,`td`,25)(740,`p`),cN(741,`Rótulo legível exibido ao usuário (ex: `),Tl(742,`code`),cN(743,`Nome`),ag(),cN(744,`, `),Tl(745,`code`),cN(746,`Idade`),ag(),cN(747,`, `),Tl(748,`code`),cN(749,`Cidade`),ag(),cN(750,`).`),ag()()(),Tl(751,`tr`,18)(752,`td`,19)(753,`div`,26)(754,`span`,27),cN(755,` property`),Gl(756,`br`),ag()()(),Tl(757,`td`,22)(758,`code`,31),cN(759,`string`),ag()(),Tl(760,`td`,25)(761,`p`),cN(762,`Nome da propriedade do campo (ex: `),Tl(763,`code`),cN(764,`name`),ag(),cN(765,`, `),Tl(766,`code`),cN(767,`age`),ag(),cN(768,`, `),Tl(769,`code`),cN(770,`city`),ag(),cN(771,`).`),ag()()(),Tl(772,`tr`,18)(773,`td`,19)(774,`div`,26)(775,`span`,27),cN(776,` type`),Gl(777,`br`),ag()()(),Tl(778,`td`,22)(779,`code`,31),cN(780,`string`),ag()(),Tl(781,`td`,25)(782,`em`)(783,`strong`),cN(784,`(opcional)`),ag()(),Tl(785,`p`),cN(786,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),ag(),Tl(787,`p`),cN(788,`Valores comuns: `),Tl(789,`code`),cN(790,`string`),ag(),cN(791,`, `),Tl(792,`code`),cN(793,`number`),ag(),cN(794,`, `),Tl(795,`code`),cN(796,`date`),ag(),cN(797,`, `),Tl(798,`code`),cN(799,`currency`),ag(),cN(800,`, `),Tl(801,`code`),cN(802,`boolean`),ag(),cN(803,`.`),ag()()()(),Tl(804,`h4`,34)(805,`code`,5),cN(806,`PoSearchAiLiterals`),ag()(),Tl(807,`div`,2)(808,`p`),cN(809,`Interface para definição das literais usadas no `),Tl(810,`code`),cN(811,`po-search-ai`),ag(),cN(812,`.`),ag()(),Tl(813,`h4`,14),cN(814,`Propriedades`),ag(),Tl(815,`table`,15)(816,`tr`,16)(817,`th`,17),cN(818,`Nome`),ag(),Tl(819,`th`,17),cN(820,`Tipo`),ag(),Tl(821,`th`,17),cN(822,`Descrição`),ag()(),Tl(823,`tr`,18)(824,`td`,19)(825,`div`,26)(826,`span`,27),cN(827,` clean`),Gl(828,`br`),ag()()(),Tl(829,`td`,22)(830,`code`,31),cN(831,`string`),ag()(),Tl(832,`td`,25)(833,`em`)(834,`strong`),cN(835,`(opcional)`),ag()(),Tl(836,`p`),cN(837,`Texto de acessibilidade do botão de limpar o campo.`),ag()()(),Tl(838,`tr`,18)(839,`td`,19)(840,`div`,26)(841,`span`,27),cN(842,` errorMessage`),Gl(843,`br`),ag()()(),Tl(844,`td`,22)(845,`code`,31),cN(846,`string`),ag()(),Tl(847,`td`,25)(848,`em`)(849,`strong`),cN(850,`(opcional)`),ag()(),Tl(851,`p`),cN(852,`Mensagem exibida quando a busca com IA falha.`),ag()()()(),Tl(853,`h4`,34)(854,`code`,5),cN(855,`PoSearchAiRequest`),ag()(),Tl(856,`div`,2)(857,`p`),cN(858,`Interface que define o payload enviado ao endpoint de IA configurado via `),Tl(859,`code`),cN(860,`p-url`),ag(),cN(861,`.`),ag(),Tl(862,`p`),cN(863,`O componente é `),Tl(864,`strong`),cN(865,`agnóstico ao provedor de IA`),ag(),cN(866,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Tl(867,`code`),cN(868,`PoSearchAiResponse`),ag(),cN(869,`.`),ag()(),Tl(870,`h4`,14),cN(871,`Propriedades`),ag(),Tl(872,`table`,15)(873,`tr`,16)(874,`th`,17),cN(875,`Nome`),ag(),Tl(876,`th`,17),cN(877,`Tipo`),ag(),Tl(878,`th`,17),cN(879,`Descrição`),ag()(),Tl(880,`tr`,18)(881,`td`,19)(882,`div`,26)(883,`span`,27),cN(884,` columns`),Gl(885,`br`),ag()()(),Tl(886,`td`,22)(887,`code`,28),cN(888,`Array<PoSearchAiColumn>`),ag()(),Tl(889,`td`,25)(890,`p`),cN(891,`Metadados dos campos disponíveis para a busca (ver `),Tl(892,`code`),cN(893,`PoSearchAiColumn`),ag(),cN(894,`).`),ag()()(),Tl(895,`tr`,18)(896,`td`,19)(897,`div`,26)(898,`span`,27),cN(899,` query`),Gl(900,`br`),ag()()(),Tl(901,`td`,22)(902,`code`,31),cN(903,`string`),ag()(),Tl(904,`td`,25)(905,`p`),cN(906,`Texto em linguagem natural digitado pelo usuário.`),ag()()()(),Tl(907,`h4`,34)(908,`code`,5),cN(909,`PoSearchAiResponse`),ag()(),Tl(910,`div`,2)(911,`p`),cN(912,`Interface que define a resposta esperada do endpoint de IA configurado via `),Tl(913,`code`),cN(914,`p-url`),ag(),cN(915,`.`),ag()(),Tl(916,`h4`,14),cN(917,`Propriedades`),ag(),Tl(918,`table`,15)(919,`tr`,16)(920,`th`,17),cN(921,`Nome`),ag(),Tl(922,`th`,17),cN(923,`Tipo`),ag(),Tl(924,`th`,17),cN(925,`Descrição`),ag()(),Tl(926,`tr`,18)(927,`td`,19)(928,`div`,26)(929,`span`,27),cN(930,` confidence`),Gl(931,`br`),ag()()(),Tl(932,`td`,22)(933,`code`,30),cN(934,`number`),ag()(),Tl(935,`td`,25)(936,`em`)(937,`strong`),cN(938,`(opcional)`),ag()(),Tl(939,`p`),cN(940,`Nível de confiança da interpretação da IA, em um intervalo de `),Tl(941,`code`),cN(942,`0.0`),ag(),cN(943,` a `),Tl(944,`code`),cN(945,`1.0`),ag(),cN(946,`.`),ag(),Tl(947,`p`),cN(948,`Utilizado em conjunto com `),Tl(949,`code`),cN(950,`p-min-confidence`),ag(),cN(951,` para decidir se o resultado é confiável.`),ag()()(),Tl(952,`tr`,18)(953,`td`,19)(954,`div`,26)(955,`span`,27),cN(956,` data`),Gl(957,`br`),ag()()(),Tl(958,`td`,22)(959,`code`,35),cN(960,`Record<string, any>`),ag()(),Tl(961,`td`,25)(962,`em`)(963,`strong`),cN(964,`(opcional)`),ag()(),Tl(965,`p`),cN(966,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),ag(),Tl(967,`p`),cN(968,`Utilizado quando `),Tl(969,`code`),cN(970,`type`),ag(),cN(971,` é `),Tl(972,`code`),cN(973,`'chat'`),ag(),cN(974,` ou `),Tl(975,`code`),cN(976,`'custom'`),ag(),cN(977,`.`),ag()()(),Tl(978,`tr`,18)(979,`td`,19)(980,`div`,26)(981,`span`,27),cN(982,` description`),Gl(983,`br`),ag()()(),Tl(984,`td`,22)(985,`code`,31),cN(986,`string`),ag()(),Tl(987,`td`,25)(988,`em`)(989,`strong`),cN(990,`(opcional)`),ag()(),Tl(991,`p`),cN(992,`Descrição legível, em linguagem natural, da resposta.`),ag()()(),Tl(993,`tr`,18)(994,`td`,19)(995,`div`,26)(996,`span`,27),cN(997,` filter`),Gl(998,`br`),ag()()(),Tl(999,`td`,22)(1e3,`code`,31),cN(1001,`string`),ag()(),Tl(1002,`td`,25)(1003,`em`)(1004,`strong`),cN(1005,`(opcional)`),ag()(),Tl(1006,`p`),cN(1007,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Tl(1008,`code`),cN(1009,`age gt 30 and city eq 'São Paulo'`),ag(),cN(1010,`).`),ag(),Tl(1011,`p`),cN(1012,`Utilizado quando `),Tl(1013,`code`),cN(1014,`type`),ag(),cN(1015,` é `),Tl(1016,`code`),cN(1017,`'filter'`),ag(),cN(1018,`.`),ag()()(),Tl(1019,`tr`,18)(1020,`td`,19)(1021,`div`,26)(1022,`span`,27),cN(1023,` type`),Gl(1024,`br`),ag()()(),Tl(1025,`td`,22)(1026,`code`,36),cN(1027,`PoSearchAiResponseType`),ag()(),Tl(1028,`td`,25)(1029,`em`)(1030,`strong`),cN(1031,`(opcional)`),ag()(),Tl(1032,`p`),cN(1033,`Tipo da resposta retornada pela IA.`),ag(),Tl(1034,`p`),cN(1035,`Quando omitido, o componente infere `),Tl(1036,`code`),cN(1037,`'filter'`),ag(),cN(1038,` se `),Tl(1039,`code`),cN(1040,`filter`),ag(),cN(1041,` estiver presente,
caso contr\xE1rio assume `),Tl(1042,`code`),cN(1043,`'custom'`),ag(),cN(1044,`.`),ag()()()(),Tl(1045,`h4`,34)(1046,`code`,5),cN(1047,`PoSearchAiResult`),ag()(),Tl(1048,`div`,2)(1049,`p`),cN(1050,`Interface que define o objeto emitido pelos eventos `),Tl(1051,`code`),cN(1052,`p-result`),ag(),cN(1053,` e `),Tl(1054,`code`),cN(1055,`p-low-confidence`),ag(),cN(1056,`.`),ag()(),Tl(1057,`h4`,14),cN(1058,`Propriedades`),ag(),Tl(1059,`table`,15)(1060,`tr`,16)(1061,`th`,17),cN(1062,`Nome`),ag(),Tl(1063,`th`,17),cN(1064,`Tipo`),ag(),Tl(1065,`th`,17),cN(1066,`Descrição`),ag()(),Tl(1067,`tr`,18)(1068,`td`,19)(1069,`div`,26)(1070,`span`,27),cN(1071,` confidence`),Gl(1072,`br`),ag()()(),Tl(1073,`td`,22)(1074,`code`,30),cN(1075,`number`),ag()(),Tl(1076,`td`,25)(1077,`em`)(1078,`strong`),cN(1079,`(opcional)`),ag()(),Tl(1080,`p`),cN(1081,`Nível de confiança da interpretação (`),Tl(1082,`code`),cN(1083,`0.0`),ag(),cN(1084,` a `),Tl(1085,`code`),cN(1086,`1.0`),ag(),cN(1087,`).`),ag()()(),Tl(1088,`tr`,18)(1089,`td`,19)(1090,`div`,26)(1091,`span`,27),cN(1092,` data`),Gl(1093,`br`),ag()()(),Tl(1094,`td`,22)(1095,`code`,35),cN(1096,`Record<string, any>`),ag()(),Tl(1097,`td`,25)(1098,`em`)(1099,`strong`),cN(1100,`(opcional)`),ag()(),Tl(1101,`p`),cN(1102,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),ag()()(),Tl(1103,`tr`,18)(1104,`td`,19)(1105,`div`,26)(1106,`span`,27),cN(1107,` description`),Gl(1108,`br`),ag()()(),Tl(1109,`td`,22)(1110,`code`,31),cN(1111,`string`),ag()(),Tl(1112,`td`,25)(1113,`em`)(1114,`strong`),cN(1115,`(opcional)`),ag()(),Tl(1116,`p`),cN(1117,`Descrição legível da resposta.`),ag()()(),Tl(1118,`tr`,18)(1119,`td`,19)(1120,`div`,26)(1121,`span`,27),cN(1122,` filter`),Gl(1123,`br`),ag()()(),Tl(1124,`td`,22)(1125,`code`,31),cN(1126,`string`),ag()(),Tl(1127,`td`,25)(1128,`em`)(1129,`strong`),cN(1130,`(opcional)`),ag()(),Tl(1131,`p`),cN(1132,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Tl(1133,`code`),cN(1134,`type`),ag(),cN(1135,` é `),Tl(1136,`code`),cN(1137,`'filter'`),ag(),cN(1138,`.`),ag()()(),Tl(1139,`tr`,18)(1140,`td`,19)(1141,`div`,26)(1142,`span`,27),cN(1143,` query`),Gl(1144,`br`),ag()()(),Tl(1145,`td`,22)(1146,`code`,31),cN(1147,`string`),ag()(),Tl(1148,`td`,25)(1149,`p`),cN(1150,`Texto original digitado pelo usuário.`),ag()()(),Tl(1151,`tr`,18)(1152,`td`,19)(1153,`div`,26)(1154,`span`,27),cN(1155,` type`),Gl(1156,`br`),ag()()(),Tl(1157,`td`,22)(1158,`code`,36),cN(1159,`PoSearchAiResponseType`),ag()(),Tl(1160,`td`,25)(1161,`p`),cN(1162,`Tipo da resposta retornada pela IA.`),ag()()()(),Tl(1163,`h4`,34)(1164,`code`,5),cN(1165,`PoSearchAiError`),ag()(),Tl(1166,`div`,2)(1167,`p`),cN(1168,`Interface que define o objeto emitido pelo evento `),Tl(1169,`code`),cN(1170,`p-error`),ag(),cN(1171,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),ag()(),Tl(1172,`h4`,14),cN(1173,`Propriedades`),ag(),Tl(1174,`table`,15)(1175,`tr`,16)(1176,`th`,17),cN(1177,`Nome`),ag(),Tl(1178,`th`,17),cN(1179,`Tipo`),ag(),Tl(1180,`th`,17),cN(1181,`Descrição`),ag()(),Tl(1182,`tr`,18)(1183,`td`,19)(1184,`div`,26)(1185,`span`,27),cN(1186,` message`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,22)(1189,`code`,31),cN(1190,`string`),ag()(),Tl(1191,`td`,25)(1192,`p`),cN(1193,`Mensagem de erro.`),ag()()(),Tl(1194,`tr`,18)(1195,`td`,19)(1196,`div`,26)(1197,`span`,27),cN(1198,` query`),Gl(1199,`br`),ag()()(),Tl(1200,`td`,22)(1201,`code`,31),cN(1202,`string`),ag()(),Tl(1203,`td`,25)(1204,`p`),cN(1205,`Texto original digitado pelo usuário.`),ag()()(),Tl(1206,`tr`,18)(1207,`td`,19)(1208,`div`,26)(1209,`span`,27),cN(1210,` statusCode`),Gl(1211,`br`),ag()()(),Tl(1212,`td`,22)(1213,`code`,30),cN(1214,`number`),ag()(),Tl(1215,`td`,25)(1216,`p`),cN(1217,`Código HTTP do erro (ex: `),Tl(1218,`code`),cN(1219,`500`),ag(),cN(1220,`, `),Tl(1221,`code`),cN(1222,`408`),ag(),cN(1223,` para timeout).`),ag()()()(),Tl(1224,`h3`),cN(1225,`Enums`),ag(),Tl(1226,`h4`,4)(1227,`code`,5),cN(1228,`PoSearchAiResponseType`),ag()(),Tl(1229,`div`,2)(1230,`p`),cN(1231,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),ag()(),Tl(1232,`h4`,14),cN(1233,`Propriedades`),ag(),Tl(1234,`table`,15)(1235,`tr`,16)(1236,`th`,17),cN(1237,`Nome`),ag(),Tl(1238,`th`,17),cN(1239,`Descrição`),ag()(),Tl(1240,`tr`,18)(1241,`td`,19)(1242,`div`,26)(1243,`span`,27),cN(1244,` filter`),Gl(1245,`br`),ag()()(),Tl(1246,`td`,25)(1247,`p`),cN(1248,`Resposta contendo um filtro estruturado (ex: OData).`),ag()()(),Tl(1249,`tr`,18)(1250,`td`,19)(1251,`div`,26)(1252,`span`,27),cN(1253,` chat`),Gl(1254,`br`),ag()()(),Tl(1255,`td`,25)(1256,`p`),cN(1257,`Resposta conversacional em linguagem natural.`),ag()()(),Tl(1258,`tr`,18)(1259,`td`,19)(1260,`div`,26)(1261,`span`,27),cN(1262,` custom`),Gl(1263,`br`),ag()()(),Tl(1264,`td`,25)(1265,`p`),cN(1266,`Payload genérico definido pelo consumidor.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-search-ai-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-search-ai-basic-view`)(6,`sample-po-search-ai-labs-view`)(7,`sample-po-search-ai-result-view`)(8,`sample-po-search-ai-filter-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ge,fe,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(Ge),bL]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,Te]})}return o})();export{vt as DocPoSearchAiModule};