import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,N as Fne,Pi as mt,Qi as tb,Ri as nu,Rt as _oe,Si as iu,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_t as U3,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cn as koe,dt as Sae,ga as xx,i as _a,ii as _x,ir as EF,ji as mO,k as Ec,la as vx,mn as ni,ni as _o,pa as wg,r as Ta,rr as Dx,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ge=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&nu(0,`po-search-ai`,0)},dependencies:[U3],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO AI Search Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-ai-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return o})();function qe(o,O){if(o&1&&(jc(0,`po-container`,4)(1,`p`)(2,`strong`),iO(3,`Query:`),wg(),iO(4),wg(),jc(5,`p`)(6,`strong`),iO(7,`Filtro:`),wg(),iO(8),wg(),jc(9,`p`)(10,`strong`),iO(11,`Descrição:`),wg(),iO(12),wg(),jc(13,`p`)(14,`strong`),iO(15,`Confiança:`),wg(),iO(16),wg()()),o&2){let a=xx();rg(4),Ag(` `,a.result.query),rg(4),Ag(` `,a.result.filter),rg(4),Ag(` `,a.result.description),rg(4),Ag(` `,a.result.confidence)}}var fe=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Sx();jc(0,`po-search-ai`,1),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(m){return i.onResult(m)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),wg(),px(4,qe,17,4,`po-container`,4),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.label,m)||(i.label=m),v_(m)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.help,m)||(i.help=m),v_(m)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.helperText,m)||(i.helperText=m),v_(m)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.placeholder,m)||(i.placeholder=m),v_(m)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.errorPattern,m)||(i.errorPattern=m),v_(m)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.url,m)||(i.url=m),v_(m)}),wg(),jc(14,`po-number`,11),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.timeout,m)||(i.timeout=m),v_(m)}),wg(),jc(15,`po-decimal`,12),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.minConfidence,m)||(i.minConfidence=m),v_(m)}),wg(),jc(16,`po-checkbox-group`,13),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.properties,m)||(i.properties=m),v_(m)}),wg(),jc(17,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(m){return y_(d),sO(i.size,m)||(i.size=m),v_(m)}),wg(),jc(18,`div`,2)(19,`po-button`,15),mt(`p-click`,function(){return y_(d),Fx(7).reset(),v_(i.restore())}),wg()()()}l&2&&(jE(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),rg(3),jE(`p-value`,i.event),rg(),mx(i.result?4:-1),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.url),t0(),rg(),ib(`ngModel`,i.timeout),t0(),rg(),ib(`ngModel`,i.minConfidence),jE(`p-decimals-length`,2),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Ec,Lf,m5,Fne,A5,U3,doe,Ote,_oe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO AI Search Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-search-ai
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-ai-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return o})();function Re(o,O){if(o&1&&(jc(0,`po-container`,1)(1,`p`)(2,`strong`),iO(3,`Query:`),wg(),iO(4),wg(),jc(5,`p`)(6,`strong`),iO(7,`Filtro:`),wg(),iO(8),wg(),jc(9,`p`)(10,`strong`),iO(11,`Descrição:`),wg(),iO(12),wg(),jc(13,`p`)(14,`strong`),iO(15,`Confiança:`),wg(),iO(16),wg()()),o&2){let a=xx();rg(4),Ag(` `,a.result.query),rg(4),Ag(` `,a.result.filter),rg(4),Ag(` `,a.result.description),rg(4),Ag(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(jc(0,`po-search-ai`,0),mt(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),wg(),px(1,Re,17,4,`po-container`,1)),l&2&&(jE(`p-columns`,i.columns),rg(),mx(i.result?1:-1))},dependencies:[Ec,U3],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO AI Search - Result`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-search-ai
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-ai-result`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ve],encapsulation:2,changeDetection:1})}return o})();function Ve(o,O){if(o&1){let a=Sx();jc(0,`po-filter-chip`,10),mt(`p-selected-change`,function(i){let d=y_(a).$implicit,s=xx();return v_(s.onSuggestionChange(d,i))}),wg()}if(o&2){let a=O.$implicit,l=xx();jE(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(jc(0,`po-container`,9)(1,`p`,11),iO(2,`Filtro OData gerado`),wg(),jc(3,`p`)(4,`strong`),iO(5,`Consulta:`),wg(),iO(6),wg(),jc(7,`p`)(8,`strong`),iO(9,`Descrição:`),wg(),iO(10),wg(),jc(11,`p`)(12,`strong`),iO(13,`Confiança:`),wg(),iO(14),wg(),jc(15,`pre`,12),iO(16),wg()()),o&2){let a=xx();rg(6),Ag(` `,a.query),rg(4),Ag(` `,a.description),rg(4),Ag(` `,a.confidence),rg(2),tb(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(b(zu))};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&iu(U3,5),l&2){let d;vo(d=_o())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(jc(0,`po-container`,0)(1,`p`,1),iO(2,`Gere um filtro com IA`),wg(),jc(3,`p`,2),iO(4,` Este exemplo usa o `),jc(5,`code`),iO(6,`po-search-ai`),wg(),iO(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),wg(),jc(8,`p`,3),iO(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),jc(10,`a`,4),iO(11,`po-table`),wg(),iO(12,` já integra o `),jc(13,`code`),iO(14,`po-search-ai`),wg(),iO(15,` de forma inteligente através da propriedade `),jc(16,`code`),iO(17,`p-search-ai-field`),wg(),iO(18,`, experimente também! `),wg()(),jc(19,`po-search-ai`,5),mt(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),wg(),jc(20,`p`,6),iO(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),wg(),jc(22,`div`,7),_x(23,Ve,1,3,`po-filter-chip`,8,vx),wg(),px(25,ze,17,4,`po-container`,9)),l&2&&(rg(19),jE(`p-columns`,i.columns),rg(4),Dx(i.examples),rg(2),mx(i.filter?25:-1))},dependencies:[Ec,U3,koe],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO AI Search - Filter`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container class="po-mb-2" p-no-border>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-ai-filter`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,We,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoSearchAiComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O `),jc(24,`code`),iO(25,`po-search-ai`),wg(),iO(26,` é um componente de `),jc(27,`strong`),iO(28,`busca em linguagem natural`),wg(),iO(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),jc(30,`em`),iO(31,`"clientes de SP com saldo acima de R$ 500"`),wg(),iO(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),jc(33,`a`,6)(34,`code`),iO(35,`po-table`),wg()(),iO(36,`.`),wg(),jc(37,`p`),iO(38,`O componente é `),jc(39,`strong`),iO(40,`agnóstico ao provedor de IA`),wg(),iO(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),jc(42,`code`),iO(43,`p-url`),wg(),iO(44,`, que recebe `),jc(45,`code`),iO(46,`{ query, columns }`),wg(),iO(47,` e deve retornar
`),jc(48,`code`),iO(49,`{ filter, description, confidence }`),wg(),iO(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),wg(),jc(51,`p`),iO(52,`Por herdar de `),jc(53,`code`),iO(54,`po-input`),wg(),iO(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),jc(56,`code`),iO(57,`template-driven`),wg(),iO(58,` e `),jc(59,`code`),iO(60,`reactive`),wg(),iO(61,`.`),wg(),jc(62,`h4`),iO(63,`Endpoint de IA (backend)`),wg(),jc(64,`p`),iO(65,`O componente `),jc(66,`strong`),iO(67,`não conversa diretamente com a LLM`),wg(),iO(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),jc(69,`code`),iO(70,`p-url`),wg(),iO(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),wg(),jc(72,`p`),iO(73,`O contrato é simples. O componente faz um `),jc(74,`code`),iO(75,`POST`),wg(),iO(76,` enviando:`),wg(),jc(77,`pre`)(78,`code`,7),iO(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),wg()(),jc(80,`p`),iO(81,`E o endpoint deve responder com:`),wg(),jc(82,`pre`)(83,`code`,7),iO(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),wg()(),jc(85,`p`),iO(86,`Onde `),jc(87,`code`),iO(88,`filter`),wg(),iO(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),jc(90,`code`),iO(91,`description`),wg(),iO(92,` \xE9 um
resumo leg\xEDvel e `),jc(93,`code`),iO(94,`confidence`),wg(),iO(95,` (`),jc(96,`code`),iO(97,`0.0`),wg(),iO(98,` a `),jc(99,`code`),iO(100,`1.0`),wg(),iO(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),jc(102,`code`),iO(103,`p-min-confidence`),wg(),iO(104,` para decidir entre os eventos `),jc(105,`code`),iO(106,`p-result`),wg(),iO(107,` e `),jc(108,`code`),iO(109,`p-low-confidence`),wg(),iO(110,`.`),wg(),jc(111,`blockquote`)(112,`p`)(113,`strong`),iO(114,`Exemplo de implementação:`),wg(),iO(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),wg(),jc(116,`ul`)(117,`li`),iO(118,`Endpoint público: `),jc(119,`a`,8)(120,`code`),iO(121,`/v1/ai/filter`),wg()()(),jc(122,`li`),iO(123,`Código-fonte: `),jc(124,`a`,9),iO(125,`po-sample-api/src/ai/ai.service.ts`),wg()()()(),jc(126,`h4`),iO(127,`Estados de comportamento`),wg(),jc(128,`ul`)(129,`li`)(130,`strong`),iO(131,`Idle:`),wg(),iO(132,` aguardando a digitação da consulta.`),wg(),jc(133,`li`)(134,`strong`),iO(135,`Loading:`),wg(),iO(136,` consulta em andamento (ícone de carregamento ativo).`),wg(),jc(137,`li`)(138,`strong`),iO(139,`Aplicado:`),wg(),iO(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),wg(),jc(141,`li`)(142,`strong`),iO(143,`Baixa confiança:`),wg(),iO(144,` quando `),jc(145,`code`),iO(146,`confidence`),wg(),iO(147,` for menor que `),jc(148,`code`),iO(149,`p-min-confidence`),wg(),iO(150,`, emite
`),jc(151,`code`),iO(152,`p-low-confidence`),wg(),iO(153,` e não aplica o filtro automaticamente.`),wg(),jc(154,`li`)(155,`strong`),iO(156,`Erro:`),wg(),iO(157,` quando a chamada falha, emite `),jc(158,`code`),iO(159,`p-error`),wg(),iO(160,`.`),wg()(),jc(161,`h4`),iO(162,`Tokens customizáveis`),wg(),jc(163,`p`),iO(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(165,`blockquote`)(166,`p`),iO(167,`Para maiores informações, acesse o guia `),jc(168,`a`,10),iO(169,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(170,`.`),wg()(),jc(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),iO(175,`Propriedade`),wg(),jc(176,`th`),iO(177,`Descrição`),wg(),jc(178,`th`),iO(179,`Valor Padrão`),wg()()(),jc(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),iO(184,`Default`),wg()(),nu(185,`td`)(186,`td`),wg(),jc(187,`tr`)(188,`td`)(189,`code`),iO(190,`--font-family`),wg()(),jc(191,`td`),iO(192,`Família tipográfica do campo`),wg(),jc(193,`td`)(194,`code`),iO(195,`var(--font-family-theme)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),iO(199,`--font-size`),wg()(),jc(200,`td`),iO(201,`Tamanho da fonte do campo`),wg(),jc(202,`td`)(203,`code`),iO(204,`var(--font-size)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),iO(208,`--text-color`),wg()(),jc(209,`td`),iO(210,`Cor do texto digitado`),wg(),jc(211,`td`)(212,`code`),iO(213,`var(--color-neutral-dark-90)`),wg()()(),jc(214,`tr`)(215,`td`)(216,`code`),iO(217,`--text-color-placeholder`),wg()(),jc(218,`td`),iO(219,`Cor do texto do placeholder`),wg(),jc(220,`td`)(221,`code`),iO(222,`var(--color-neutral-light-30)`),wg()()(),jc(223,`tr`)(224,`td`)(225,`code`),iO(226,`--color`),wg()(),jc(227,`td`),iO(228,`Cor da borda do campo`),wg(),jc(229,`td`)(230,`code`),iO(231,`var(--color-neutral-dark-70)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),iO(235,`--background`),wg()(),jc(236,`td`),iO(237,`Cor de fundo do campo`),wg(),jc(238,`td`)(239,`code`),iO(240,`var(--color-neutral-light-05)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),iO(244,`--border-radius`),wg()(),jc(245,`td`),iO(246,`Raio da borda do campo`),wg(),jc(247,`td`)(248,`code`),iO(249,`var(--border-radius-md)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`strong`),iO(253,`Ícones e divisória`),wg()(),nu(254,`td`)(255,`td`),wg(),jc(256,`tr`)(257,`td`)(258,`code`),iO(259,`--color-icon-read`),wg()(),jc(260,`td`),iO(261,`Cor do ícone de busca por IA`),wg(),jc(262,`td`)(263,`code`),iO(264,`var(--color-neutral-dark-70)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),iO(268,`--color-divider`),wg()(),jc(269,`td`),iO(270,`Cor da divisória vertical entre o campo e o botão de busca`),wg(),jc(271,`td`)(272,`code`),iO(273,`var(--color-neutral-mid-40)`),wg()()(),jc(274,`tr`)(275,`td`)(276,`code`),iO(277,`--color-icon-processing`),wg()(),jc(278,`td`),iO(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),wg(),jc(280,`td`)(281,`code`),iO(282,`var(--color-action-default)`),wg()()(),jc(283,`tr`)(284,`td`)(285,`strong`),iO(286,`Hover`),wg()(),nu(287,`td`)(288,`td`),wg(),jc(289,`tr`)(290,`td`)(291,`code`),iO(292,`--color-hover`),wg()(),jc(293,`td`),iO(294,`Cor da borda no estado hover`),wg(),jc(295,`td`)(296,`code`),iO(297,`var(--color-brand-01-dark)`),wg()()(),jc(298,`tr`)(299,`td`)(300,`code`),iO(301,`--background-hover`),wg()(),jc(302,`td`),iO(303,`Cor de fundo no estado hover`),wg(),jc(304,`td`)(305,`code`),iO(306,`var(--color-brand-01-lightest)`),wg()()(),jc(307,`tr`)(308,`td`)(309,`strong`),iO(310,`Focused`),wg()(),nu(311,`td`)(312,`td`),wg(),jc(313,`tr`)(314,`td`)(315,`code`),iO(316,`--color-focused`),wg()(),jc(317,`td`),iO(318,`Cor da borda no estado de foco`),wg(),jc(319,`td`)(320,`code`),iO(321,`var(--color-action-default)`),wg()()(),jc(322,`tr`)(323,`td`)(324,`code`),iO(325,`--outline-color-focused`),wg()(),jc(326,`td`),iO(327,`Cor do outline no estado de foco`),wg(),jc(328,`td`)(329,`code`),iO(330,`var(--color-action-focus)`),wg()()(),jc(331,`tr`)(332,`td`)(333,`strong`),iO(334,`Disabled`),wg()(),nu(335,`td`)(336,`td`),wg(),jc(337,`tr`)(338,`td`)(339,`code`),iO(340,`--color-disabled`),wg()(),jc(341,`td`),iO(342,`Cor da borda no estado desabilitado`),wg(),jc(343,`td`)(344,`code`),iO(345,`var(--color-neutral-light-30)`),wg()()(),jc(346,`tr`)(347,`td`)(348,`code`),iO(349,`--background-disabled`),wg()(),jc(350,`td`),iO(351,`Cor de fundo no estado desabilitado`),wg(),jc(352,`td`)(353,`code`),iO(354,`var(--color-neutral-light-20)`),wg()()()()()(),jc(355,`div`,11)(356,`h4`,12),iO(357,`Seletor`),wg(),jc(358,`pre`,13),iO(359,`<po-search-ai
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
`),wg()(),jc(360,`h4`,14),iO(361,`Propriedades`),wg(),jc(362,`table`,15)(363,`tr`,16)(364,`th`,17),iO(365,`Nome`),wg(),jc(366,`th`,17),iO(367,`Tipo`),wg(),jc(368,`th`,17),iO(369,`Padrão`),wg(),jc(370,`th`,17),iO(371,`Descrição`),wg()(),jc(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),iO(376,` (p-clear)`),nu(377,`br`),wg()()(),jc(378,`td`,22)(379,`code`,23),iO(380,`EventEmitter`),wg()(),jc(381,`td`,24),iO(382,`-`),wg(),jc(383,`td`,25)(384,`em`)(385,`strong`),iO(386,`(opcional)`),wg()(),jc(387,`p`),iO(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),wg()()(),jc(389,`tr`,18)(390,`td`,19)(391,`div`,26)(392,`span`,27),iO(393,` p-columns`),nu(394,`br`),wg()()(),jc(395,`td`,22)(396,`code`,28),iO(397,`Array<PoSearchAiColumn>`),wg()(),jc(398,`td`,24)(399,`p`)(400,`code`),iO(401,`[]`),wg()()(),jc(402,`td`,25)(403,`em`)(404,`strong`),iO(405,`(opcional)`),wg()(),jc(406,`p`),iO(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),jc(408,`code`),iO(409,`p-url`),wg(),iO(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),wg()()(),jc(411,`tr`,18)(412,`td`,19)(413,`div`,20)(414,`span`,21),iO(415,` (p-error)`),nu(416,`br`),wg()()(),jc(417,`td`,22)(418,`code`,23),iO(419,`EventEmitter`),wg()(),jc(420,`td`,24),iO(421,`-`),wg(),jc(422,`td`,25)(423,`em`)(424,`strong`),iO(425,`(opcional)`),wg()(),jc(426,`p`),iO(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),jc(428,`code`),iO(429,`PoSearchAiError`),wg(),iO(430,`.`),wg()()(),jc(431,`tr`,18)(432,`td`,19)(433,`div`,26)(434,`span`,27),iO(435,` p-literals`),nu(436,`br`),wg()()(),jc(437,`td`,22)(438,`code`,29),iO(439,`PoSearchAiLiterals`),wg()(),jc(440,`td`,24),iO(441,`-`),wg(),jc(442,`td`,25)(443,`em`)(444,`strong`),iO(445,`(opcional)`),wg()(),jc(446,`p`),iO(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),wg()()(),jc(448,`tr`,18)(449,`td`,19)(450,`div`,20)(451,`span`,21),iO(452,` (p-low-confidence)`),nu(453,`br`),wg()()(),jc(454,`td`,22)(455,`code`,23),iO(456,`EventEmitter`),wg()(),jc(457,`td`,24),iO(458,`-`),wg(),jc(459,`td`,25)(460,`em`)(461,`strong`),iO(462,`(opcional)`),wg()(),jc(463,`p`),iO(464,`Evento disparado quando a confiança da resposta da IA é menor que `),jc(465,`code`),iO(466,`p-min-confidence`),wg(),iO(467,`.
Emite um objeto `),jc(468,`code`),iO(469,`PoSearchAiResult`),wg(),iO(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),wg()()(),jc(471,`tr`,18)(472,`td`,19)(473,`div`,26)(474,`span`,27),iO(475,` p-min-confidence`),nu(476,`br`),wg()()(),jc(477,`td`,22)(478,`code`,30),iO(479,`number`),wg()(),jc(480,`td`,24)(481,`p`)(482,`code`),iO(483,`0.5`),wg()()(),jc(484,`td`,25)(485,`em`)(486,`strong`),iO(487,`(opcional)`),wg()(),jc(488,`p`),iO(489,`Nível mínimo de confiança (`),jc(490,`code`),iO(491,`0.0`),wg(),iO(492,` a `),jc(493,`code`),iO(494,`1.0`),wg(),iO(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),jc(496,`code`),iO(497,`p-low-confidence`),wg(),iO(498,` \xE9
emitido em vez de `),jc(499,`code`),iO(500,`p-result`),wg(),iO(501,`.`),wg()()(),jc(502,`tr`,18)(503,`td`,19)(504,`div`,20)(505,`span`,21),iO(506,` (p-result)`),nu(507,`br`),wg()()(),jc(508,`td`,22)(509,`code`,23),iO(510,`EventEmitter`),wg()(),jc(511,`td`,24),iO(512,`-`),wg(),jc(513,`td`,25)(514,`em`)(515,`strong`),iO(516,`(opcional)`),wg()(),jc(517,`p`),iO(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),jc(519,`code`),iO(520,`p-min-confidence`),wg(),iO(521,`. Emite um objeto `),jc(522,`code`),iO(523,`PoSearchAiResult`),wg(),iO(524,`.`),wg(),jc(525,`p`),iO(526,`O campo `),jc(527,`code`),iO(528,`type`),wg(),iO(529,` do resultado indica como o consumidor deve interpretar a resposta:`),wg(),jc(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),iO(535,`filter`),wg()(),jc(536,`em`),iO(537,`(padrão)`),wg(),iO(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),jc(539,`code`),iO(540,`result.filter`),wg(),iO(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),jc(542,`code`),iO(543,`po-table`),wg(),iO(544,` via `),jc(545,`code`),iO(546,`p-filter`),wg(),iO(547,`.`),wg()(),jc(548,`li`)(549,`p`)(550,`strong`)(551,`code`),iO(552,`chat`),wg()(),iO(553,`: a IA retornou uma resposta conversacional. Use `),jc(554,`code`),iO(555,`result.data`),wg(),iO(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),wg()(),jc(557,`li`)(558,`p`)(559,`strong`)(560,`code`),iO(561,`custom`),wg()(),iO(562,`: a IA retornou um payload genérico definido pelo backend. Use `),jc(563,`code`),iO(564,`result.data`),wg(),iO(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),wg()()()()(),jc(566,`tr`,18)(567,`td`,19)(568,`div`,26)(569,`span`,27),iO(570,` p-timeout`),nu(571,`br`),wg()()(),jc(572,`td`,22)(573,`code`,30),iO(574,`number`),wg()(),jc(575,`td`,24)(576,`p`)(577,`code`),iO(578,`10000`),wg()()(),jc(579,`td`,25)(580,`em`)(581,`strong`),iO(582,`(opcional)`),wg()(),jc(583,`p`),iO(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),jc(585,`code`),iO(586,`p-error`),wg(),iO(587,` com `),jc(588,`code`),iO(589,`statusCode 408`),wg(),iO(590,`.`),wg()()(),jc(591,`tr`,18)(592,`td`,19)(593,`div`,26)(594,`span`,27),iO(595,` p-url`),nu(596,`br`),wg()()(),jc(597,`td`,22)(598,`code`,31),iO(599,`string`),wg()(),jc(600,`td`,24),iO(601,`-`),wg(),jc(602,`td`,25)(603,`em`)(604,`strong`),iO(605,`(opcional)`),wg()(),jc(606,`p`),iO(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),jc(608,`code`),iO(609,`{ query, columns }`),wg(),iO(610,` via `),jc(611,`code`),iO(612,`POST`),wg(),iO(613,` e deve retornar `),jc(614,`code`),iO(615,`{ filter, description, confidence }`),wg(),iO(616,`.`),wg(),jc(617,`blockquote`)(618,`p`),iO(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),jc(620,`strong`),iO(621,`no backend`),wg(),iO(622,`, nunca no client-side.`),wg()()()()(),jc(623,`h3`,14),iO(624,`Métodos`),wg(),jc(625,`table`,32)(626,`tr`,18)(627,`th`,33)(628,`div`,26)(629,`h4`)(630,`span`,27),iO(631,` search `),wg()()()()(),jc(632,`tr`,25)(633,`td`,25)(634,`p`),iO(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),jc(636,`code`),iO(637,`p-url`),wg(),iO(638,`.`),wg(),jc(639,`p`),iO(640,`Caso a consulta esteja vazia ou `),jc(641,`code`),iO(642,`p-url`),wg(),iO(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),jc(644,`code`),iO(645,`p-result`),wg(),iO(646,` (ou `),jc(647,`code`),iO(648,`p-low-confidence`),wg(),iO(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),jc(650,`code`),iO(651,`p-error`),wg(),iO(652,`.`),wg()()()(),nu(653,`br`),jc(654,`table`,32)(655,`tr`,18)(656,`th`,33)(657,`div`,26)(658,`h4`)(659,`span`,27),iO(660,` clearSearch `),wg()()()()(),jc(661,`tr`,25)(662,`td`,25)(663,`p`),iO(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),jc(665,`code`),iO(666,`p-clear`),wg(),iO(667,`.`),wg()()()(),nu(668,`br`),jc(669,`table`,32)(670,`tr`,18)(671,`th`,33)(672,`div`,26)(673,`h4`)(674,`span`,27),iO(675,` onSearchKeydown `),wg()()()()(),jc(676,`tr`,25)(677,`td`,25)(678,`p`),iO(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),jc(680,`code`),iO(681,`Enter`),wg(),iO(682,`.`),wg()()()(),jc(683,`h5`)(684,`b`),iO(685,`Parâmetros`),wg()(),jc(686,`table`,15)(687,`tr`,16)(688,`th`,17),iO(689,`Nome`),wg(),jc(690,`th`,17),iO(691,`Tipo`),wg(),jc(692,`th`,17),iO(693,`Descrição`),wg()(),jc(694,`tr`,18)(695,`td`,19),iO(696,` event`),wg(),nu(697,`td`,22),jc(698,`td`,25)(699,`p`),iO(700,`Evento de teclado.`),wg()()()(),nu(701,`br`),jc(702,`h3`),iO(703,`Interfaces`),wg(),jc(704,`h4`,34)(705,`code`,5),iO(706,`PoSearchAiColumn`),wg()(),jc(707,`div`,2)(708,`p`),iO(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),wg(),jc(710,`p`),iO(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),wg()(),jc(712,`h4`,14),iO(713,`Propriedades`),wg(),jc(714,`table`,15)(715,`tr`,16)(716,`th`,17),iO(717,`Nome`),wg(),jc(718,`th`,17),iO(719,`Tipo`),wg(),jc(720,`th`,17),iO(721,`Descrição`),wg()(),jc(722,`tr`,18)(723,`td`,19)(724,`div`,26)(725,`span`,27),iO(726,` label`),nu(727,`br`),wg()()(),jc(728,`td`,22)(729,`code`,31),iO(730,`string`),wg()(),jc(731,`td`,25)(732,`p`),iO(733,`Rótulo legível exibido ao usuário (ex: `),jc(734,`code`),iO(735,`Nome`),wg(),iO(736,`, `),jc(737,`code`),iO(738,`Idade`),wg(),iO(739,`, `),jc(740,`code`),iO(741,`Cidade`),wg(),iO(742,`).`),wg()()(),jc(743,`tr`,18)(744,`td`,19)(745,`div`,26)(746,`span`,27),iO(747,` property`),nu(748,`br`),wg()()(),jc(749,`td`,22)(750,`code`,31),iO(751,`string`),wg()(),jc(752,`td`,25)(753,`p`),iO(754,`Nome da propriedade do campo (ex: `),jc(755,`code`),iO(756,`name`),wg(),iO(757,`, `),jc(758,`code`),iO(759,`age`),wg(),iO(760,`, `),jc(761,`code`),iO(762,`city`),wg(),iO(763,`).`),wg()()(),jc(764,`tr`,18)(765,`td`,19)(766,`div`,26)(767,`span`,27),iO(768,` type`),nu(769,`br`),wg()()(),jc(770,`td`,22)(771,`code`,31),iO(772,`string`),wg()(),jc(773,`td`,25)(774,`em`)(775,`strong`),iO(776,`(opcional)`),wg()(),jc(777,`p`),iO(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),wg(),jc(779,`p`),iO(780,`Valores comuns: `),jc(781,`code`),iO(782,`string`),wg(),iO(783,`, `),jc(784,`code`),iO(785,`number`),wg(),iO(786,`, `),jc(787,`code`),iO(788,`date`),wg(),iO(789,`, `),jc(790,`code`),iO(791,`currency`),wg(),iO(792,`, `),jc(793,`code`),iO(794,`boolean`),wg(),iO(795,`.`),wg()()()(),jc(796,`h4`,34)(797,`code`,5),iO(798,`PoSearchAiLiterals`),wg()(),jc(799,`div`,2)(800,`p`),iO(801,`Interface para definição das literais usadas no `),jc(802,`code`),iO(803,`po-search-ai`),wg(),iO(804,`.`),wg()(),jc(805,`h4`,14),iO(806,`Propriedades`),wg(),jc(807,`table`,15)(808,`tr`,16)(809,`th`,17),iO(810,`Nome`),wg(),jc(811,`th`,17),iO(812,`Tipo`),wg(),jc(813,`th`,17),iO(814,`Descrição`),wg()(),jc(815,`tr`,18)(816,`td`,19)(817,`div`,26)(818,`span`,27),iO(819,` clean`),nu(820,`br`),wg()()(),jc(821,`td`,22)(822,`code`,31),iO(823,`string`),wg()(),jc(824,`td`,25)(825,`em`)(826,`strong`),iO(827,`(opcional)`),wg()(),jc(828,`p`),iO(829,`Texto de acessibilidade do botão de limpar o campo.`),wg()()(),jc(830,`tr`,18)(831,`td`,19)(832,`div`,26)(833,`span`,27),iO(834,` errorMessage`),nu(835,`br`),wg()()(),jc(836,`td`,22)(837,`code`,31),iO(838,`string`),wg()(),jc(839,`td`,25)(840,`em`)(841,`strong`),iO(842,`(opcional)`),wg()(),jc(843,`p`),iO(844,`Mensagem exibida quando a busca com IA falha.`),wg()()()(),jc(845,`h4`,34)(846,`code`,5),iO(847,`PoSearchAiRequest`),wg()(),jc(848,`div`,2)(849,`p`),iO(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),jc(851,`code`),iO(852,`p-url`),wg(),iO(853,`.`),wg(),jc(854,`p`),iO(855,`O componente é `),jc(856,`strong`),iO(857,`agnóstico ao provedor de IA`),wg(),iO(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),jc(859,`code`),iO(860,`PoSearchAiResponse`),wg(),iO(861,`.`),wg()(),jc(862,`h4`,14),iO(863,`Propriedades`),wg(),jc(864,`table`,15)(865,`tr`,16)(866,`th`,17),iO(867,`Nome`),wg(),jc(868,`th`,17),iO(869,`Tipo`),wg(),jc(870,`th`,17),iO(871,`Descrição`),wg()(),jc(872,`tr`,18)(873,`td`,19)(874,`div`,26)(875,`span`,27),iO(876,` columns`),nu(877,`br`),wg()()(),jc(878,`td`,22)(879,`code`,28),iO(880,`Array<PoSearchAiColumn>`),wg()(),jc(881,`td`,25)(882,`p`),iO(883,`Metadados dos campos disponíveis para a busca (ver `),jc(884,`code`),iO(885,`PoSearchAiColumn`),wg(),iO(886,`).`),wg()()(),jc(887,`tr`,18)(888,`td`,19)(889,`div`,26)(890,`span`,27),iO(891,` query`),nu(892,`br`),wg()()(),jc(893,`td`,22)(894,`code`,31),iO(895,`string`),wg()(),jc(896,`td`,25)(897,`p`),iO(898,`Texto em linguagem natural digitado pelo usuário.`),wg()()()(),jc(899,`h4`,34)(900,`code`,5),iO(901,`PoSearchAiResponse`),wg()(),jc(902,`div`,2)(903,`p`),iO(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),jc(905,`code`),iO(906,`p-url`),wg(),iO(907,`.`),wg()(),jc(908,`h4`,14),iO(909,`Propriedades`),wg(),jc(910,`table`,15)(911,`tr`,16)(912,`th`,17),iO(913,`Nome`),wg(),jc(914,`th`,17),iO(915,`Tipo`),wg(),jc(916,`th`,17),iO(917,`Descrição`),wg()(),jc(918,`tr`,18)(919,`td`,19)(920,`div`,26)(921,`span`,27),iO(922,` confidence`),nu(923,`br`),wg()()(),jc(924,`td`,22)(925,`code`,30),iO(926,`number`),wg()(),jc(927,`td`,25)(928,`em`)(929,`strong`),iO(930,`(opcional)`),wg()(),jc(931,`p`),iO(932,`Nível de confiança da interpretação da IA, em um intervalo de `),jc(933,`code`),iO(934,`0.0`),wg(),iO(935,` a `),jc(936,`code`),iO(937,`1.0`),wg(),iO(938,`.`),wg(),jc(939,`p`),iO(940,`Utilizado em conjunto com `),jc(941,`code`),iO(942,`p-min-confidence`),wg(),iO(943,` para decidir se o resultado é confiável.`),wg()()(),jc(944,`tr`,18)(945,`td`,19)(946,`div`,26)(947,`span`,27),iO(948,` data`),nu(949,`br`),wg()()(),jc(950,`td`,22)(951,`code`,35),iO(952,`Record<string, any>`),wg()(),jc(953,`td`,25)(954,`em`)(955,`strong`),iO(956,`(opcional)`),wg()(),jc(957,`p`),iO(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),wg(),jc(959,`p`),iO(960,`Utilizado quando `),jc(961,`code`),iO(962,`type`),wg(),iO(963,` é `),jc(964,`code`),iO(965,`'chat'`),wg(),iO(966,` ou `),jc(967,`code`),iO(968,`'custom'`),wg(),iO(969,`.`),wg()()(),jc(970,`tr`,18)(971,`td`,19)(972,`div`,26)(973,`span`,27),iO(974,` description`),nu(975,`br`),wg()()(),jc(976,`td`,22)(977,`code`,31),iO(978,`string`),wg()(),jc(979,`td`,25)(980,`em`)(981,`strong`),iO(982,`(opcional)`),wg()(),jc(983,`p`),iO(984,`Descrição legível, em linguagem natural, da resposta.`),wg()()(),jc(985,`tr`,18)(986,`td`,19)(987,`div`,26)(988,`span`,27),iO(989,` filter`),nu(990,`br`),wg()()(),jc(991,`td`,22)(992,`code`,31),iO(993,`string`),wg()(),jc(994,`td`,25)(995,`em`)(996,`strong`),iO(997,`(opcional)`),wg()(),jc(998,`p`),iO(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),jc(1e3,`code`),iO(1001,`age gt 30 and city eq 'São Paulo'`),wg(),iO(1002,`).`),wg(),jc(1003,`p`),iO(1004,`Utilizado quando `),jc(1005,`code`),iO(1006,`type`),wg(),iO(1007,` é `),jc(1008,`code`),iO(1009,`'filter'`),wg(),iO(1010,`.`),wg()()(),jc(1011,`tr`,18)(1012,`td`,19)(1013,`div`,26)(1014,`span`,27),iO(1015,` type`),nu(1016,`br`),wg()()(),jc(1017,`td`,22)(1018,`code`,36),iO(1019,`PoSearchAiResponseType`),wg()(),jc(1020,`td`,25)(1021,`em`)(1022,`strong`),iO(1023,`(opcional)`),wg()(),jc(1024,`p`),iO(1025,`Tipo da resposta retornada pela IA.`),wg(),jc(1026,`p`),iO(1027,`Quando omitido, o componente infere `),jc(1028,`code`),iO(1029,`'filter'`),wg(),iO(1030,` se `),jc(1031,`code`),iO(1032,`filter`),wg(),iO(1033,` estiver presente,
caso contr\xE1rio assume `),jc(1034,`code`),iO(1035,`'custom'`),wg(),iO(1036,`.`),wg()()()(),jc(1037,`h4`,34)(1038,`code`,5),iO(1039,`PoSearchAiResult`),wg()(),jc(1040,`div`,2)(1041,`p`),iO(1042,`Interface que define o objeto emitido pelos eventos `),jc(1043,`code`),iO(1044,`p-result`),wg(),iO(1045,` e `),jc(1046,`code`),iO(1047,`p-low-confidence`),wg(),iO(1048,`.`),wg()(),jc(1049,`h4`,14),iO(1050,`Propriedades`),wg(),jc(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),iO(1054,`Nome`),wg(),jc(1055,`th`,17),iO(1056,`Tipo`),wg(),jc(1057,`th`,17),iO(1058,`Descrição`),wg()(),jc(1059,`tr`,18)(1060,`td`,19)(1061,`div`,26)(1062,`span`,27),iO(1063,` confidence`),nu(1064,`br`),wg()()(),jc(1065,`td`,22)(1066,`code`,30),iO(1067,`number`),wg()(),jc(1068,`td`,25)(1069,`em`)(1070,`strong`),iO(1071,`(opcional)`),wg()(),jc(1072,`p`),iO(1073,`Nível de confiança da interpretação (`),jc(1074,`code`),iO(1075,`0.0`),wg(),iO(1076,` a `),jc(1077,`code`),iO(1078,`1.0`),wg(),iO(1079,`).`),wg()()(),jc(1080,`tr`,18)(1081,`td`,19)(1082,`div`,26)(1083,`span`,27),iO(1084,` data`),nu(1085,`br`),wg()()(),jc(1086,`td`,22)(1087,`code`,35),iO(1088,`Record<string, any>`),wg()(),jc(1089,`td`,25)(1090,`em`)(1091,`strong`),iO(1092,`(opcional)`),wg()(),jc(1093,`p`),iO(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),wg()()(),jc(1095,`tr`,18)(1096,`td`,19)(1097,`div`,26)(1098,`span`,27),iO(1099,` description`),nu(1100,`br`),wg()()(),jc(1101,`td`,22)(1102,`code`,31),iO(1103,`string`),wg()(),jc(1104,`td`,25)(1105,`em`)(1106,`strong`),iO(1107,`(opcional)`),wg()(),jc(1108,`p`),iO(1109,`Descrição legível da resposta.`),wg()()(),jc(1110,`tr`,18)(1111,`td`,19)(1112,`div`,26)(1113,`span`,27),iO(1114,` filter`),nu(1115,`br`),wg()()(),jc(1116,`td`,22)(1117,`code`,31),iO(1118,`string`),wg()(),jc(1119,`td`,25)(1120,`em`)(1121,`strong`),iO(1122,`(opcional)`),wg()(),jc(1123,`p`),iO(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),jc(1125,`code`),iO(1126,`type`),wg(),iO(1127,` é `),jc(1128,`code`),iO(1129,`'filter'`),wg(),iO(1130,`.`),wg()()(),jc(1131,`tr`,18)(1132,`td`,19)(1133,`div`,26)(1134,`span`,27),iO(1135,` query`),nu(1136,`br`),wg()()(),jc(1137,`td`,22)(1138,`code`,31),iO(1139,`string`),wg()(),jc(1140,`td`,25)(1141,`p`),iO(1142,`Texto original digitado pelo usuário.`),wg()()(),jc(1143,`tr`,18)(1144,`td`,19)(1145,`div`,26)(1146,`span`,27),iO(1147,` type`),nu(1148,`br`),wg()()(),jc(1149,`td`,22)(1150,`code`,36),iO(1151,`PoSearchAiResponseType`),wg()(),jc(1152,`td`,25)(1153,`p`),iO(1154,`Tipo da resposta retornada pela IA.`),wg()()()(),jc(1155,`h4`,34)(1156,`code`,5),iO(1157,`PoSearchAiError`),wg()(),jc(1158,`div`,2)(1159,`p`),iO(1160,`Interface que define o objeto emitido pelo evento `),jc(1161,`code`),iO(1162,`p-error`),wg(),iO(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),wg()(),jc(1164,`h4`,14),iO(1165,`Propriedades`),wg(),jc(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),iO(1169,`Nome`),wg(),jc(1170,`th`,17),iO(1171,`Tipo`),wg(),jc(1172,`th`,17),iO(1173,`Descrição`),wg()(),jc(1174,`tr`,18)(1175,`td`,19)(1176,`div`,26)(1177,`span`,27),iO(1178,` message`),nu(1179,`br`),wg()()(),jc(1180,`td`,22)(1181,`code`,31),iO(1182,`string`),wg()(),jc(1183,`td`,25)(1184,`p`),iO(1185,`Mensagem de erro.`),wg()()(),jc(1186,`tr`,18)(1187,`td`,19)(1188,`div`,26)(1189,`span`,27),iO(1190,` query`),nu(1191,`br`),wg()()(),jc(1192,`td`,22)(1193,`code`,31),iO(1194,`string`),wg()(),jc(1195,`td`,25)(1196,`p`),iO(1197,`Texto original digitado pelo usuário.`),wg()()(),jc(1198,`tr`,18)(1199,`td`,19)(1200,`div`,26)(1201,`span`,27),iO(1202,` statusCode`),nu(1203,`br`),wg()()(),jc(1204,`td`,22)(1205,`code`,30),iO(1206,`number`),wg()(),jc(1207,`td`,25)(1208,`p`),iO(1209,`Código HTTP do erro (ex: `),jc(1210,`code`),iO(1211,`500`),wg(),iO(1212,`, `),jc(1213,`code`),iO(1214,`408`),wg(),iO(1215,` para timeout).`),wg()()()(),jc(1216,`h3`),iO(1217,`Enums`),wg(),jc(1218,`h4`,4)(1219,`code`,5),iO(1220,`PoSearchAiResponseType`),wg()(),jc(1221,`div`,2)(1222,`p`),iO(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),wg()(),jc(1224,`h4`,14),iO(1225,`Propriedades`),wg(),jc(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),iO(1229,`Nome`),wg(),jc(1230,`th`,17),iO(1231,`Descrição`),wg()(),jc(1232,`tr`,18)(1233,`td`,19)(1234,`div`,26)(1235,`span`,27),iO(1236,` filter`),nu(1237,`br`),wg()()(),jc(1238,`td`,25)(1239,`p`),iO(1240,`Resposta contendo um filtro estruturado (ex: OData).`),wg()()(),jc(1241,`tr`,18)(1242,`td`,19)(1243,`div`,26)(1244,`span`,27),iO(1245,` chat`),nu(1246,`br`),wg()()(),jc(1247,`td`,25)(1248,`p`),iO(1249,`Resposta conversacional em linguagem natural.`),wg()()(),jc(1250,`tr`,18)(1251,`td`,19)(1252,`div`,26)(1253,`span`,27),iO(1254,` custom`),nu(1255,`br`),wg()()(),jc(1256,`td`,25)(1257,`p`),iO(1258,`Payload genérico definido pelo consumidor.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-search-ai-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-search-ai-basic-view`)(6,`sample-po-search-ai-labs-view`)(7,`sample-po-search-ai-result-view`)(8,`sample-po-search-ai-filter-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,xe,be,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(Ge),C1]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,Te]})}return o})();export{vt as DocPoSearchAiModule};