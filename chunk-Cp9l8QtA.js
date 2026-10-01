import{$r as Wx,Bi as kx,Br as RE,Di as he,Dt as aae,Hn as AN,Kn as BP,Li as kL,Pr as Ox,Qi as pt,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Ur as Rx,Wi as mg,Wn as Ax,Xn as C9,Yn as Bx,ai as aN,b as Au,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,ki as ho,kr as Nx,la as ug,li as cE,lr as Hn,lt as Sne,mn as t4,mr as IE,nn as ob,oi as b9,q as M3,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,vr as Jv,wn as voe,wt as _4,xi as fo}from"./main-LIMZAZLW.js";var ge=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&Kc(0,`po-search-ai`,0)},dependencies:[M3],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO AI Search Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-ai-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ge],encapsulation:2,changeDetection:1})}return o})();function qe(o,O){if(o&1&&(Ac(0,`po-container`,4)(1,`p`)(2,`strong`),vN(3,`Query:`),ug(),vN(4),ug(),Ac(5,`p`)(6,`strong`),vN(7,`Filtro:`),ug(),vN(8),ug(),Ac(9,`p`)(10,`strong`),vN(11,`Descrição:`),ug(),vN(12),ug(),Ac(13,`p`)(14,`strong`),vN(15,`Confiança:`),ug(),vN(16),ug()()),o&2){let a=Wx();Hp(4),mg(` `,a.result.query),Hp(4),mg(` `,a.result.filter),Hp(4),mg(` `,a.result.description),Hp(4),mg(` `,a.result.confidence)}}var fe=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Bx();Ac(0,`po-search-ai`,1),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(m){return i.onResult(m)}),ug(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),ug(),Rx(4,qe,17,4,`po-container`,4),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(m){return Jv(d),DN(i.label,m)||(i.label=m),e_(m)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(m){return Jv(d),DN(i.help,m)||(i.help=m),e_(m)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(m){return Jv(d),DN(i.helperText,m)||(i.helperText=m),e_(m)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(m){return Jv(d),DN(i.placeholder,m)||(i.placeholder=m),e_(m)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(m){return Jv(d),DN(i.errorPattern,m)||(i.errorPattern=m),e_(m)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(m){return Jv(d),DN(i.url,m)||(i.url=m),e_(m)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(m){return Jv(d),DN(i.timeout,m)||(i.timeout=m),e_(m)}),ug(),p0(),Ac(15,`po-decimal`,12),RE(`ngModelChange`,function(m){return Jv(d),DN(i.minConfidence,m)||(i.minConfidence=m),e_(m)}),ug(),p0(),Ac(16,`po-checkbox-group`,13),RE(`ngModelChange`,function(m){return Jv(d),DN(i.properties,m)||(i.properties=m),e_(m)}),ug(),p0(),Ac(17,`po-radio-group`,14),RE(`ngModelChange`,function(m){return Jv(d),DN(i.size,m)||(i.size=m),e_(m)}),ug(),p0(),Ac(18,`div`,2)(19,`po-button`,15),pt(`p-click`,function(){return Jv(d),Zx(7).reset(),e_(i.restore())}),ug()()()}l&2&&(cE(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),Hp(3),cE(`p-value`,i.event),Hp(),Ax(i.result?4:-1),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.url),m0(),Hp(),TE(`ngModel`,i.timeout),m0(),Hp(),TE(`ngModel`,i.minConfidence),cE(`p-decimals-length`,2),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ic,ob,t4,Sne,_4,M3,Jne,Cte,roe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO AI Search Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-search-ai
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-ai-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,fe],encapsulation:2,changeDetection:1})}return o})();function Re(o,O){if(o&1&&(Ac(0,`po-container`,1)(1,`p`)(2,`strong`),vN(3,`Query:`),ug(),vN(4),ug(),Ac(5,`p`)(6,`strong`),vN(7,`Filtro:`),ug(),vN(8),ug(),Ac(9,`p`)(10,`strong`),vN(11,`Descrição:`),ug(),vN(12),ug(),Ac(13,`p`)(14,`strong`),vN(15,`Confiança:`),ug(),vN(16),ug()()),o&2){let a=Wx();Hp(4),mg(` `,a.result.query),Hp(4),mg(` `,a.result.filter),Hp(4),mg(` `,a.result.description),Hp(4),mg(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Ac(0,`po-search-ai`,0),pt(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),ug(),Rx(1,Re,17,4,`po-container`,1)),l&2&&(cE(`p-columns`,i.columns),Hp(),Ax(i.result?1:-1))},dependencies:[Ic,M3],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO AI Search - Result`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-search-ai
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-ai-result`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ve],encapsulation:2,changeDetection:1})}return o})();function Ve(o,O){if(o&1){let a=Bx();Ac(0,`po-filter-chip`,10),pt(`p-selected-change`,function(i){let d=Jv(a).$implicit,s=Wx();return e_(s.onSuggestionChange(d,i))}),ug()}if(o&2){let a=O.$implicit,l=Wx();cE(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(Ac(0,`po-container`,9)(1,`p`,11),vN(2,`Filtro OData gerado`),ug(),Ac(3,`p`)(4,`strong`),vN(5,`Consulta:`),ug(),vN(6),ug(),Ac(7,`p`)(8,`strong`),vN(9,`Descrição:`),ug(),vN(10),ug(),Ac(11,`p`)(12,`strong`),vN(13,`Confiança:`),ug(),vN(14),ug(),Ac(15,`pre`,12),vN(16),ug()()),o&2){let a=Wx();Hp(6),mg(` `,a.query),Hp(4),mg(` `,a.description),Hp(4),mg(` `,a.confidence),Hp(2),IE(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(E(Au))};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Xc(M3,5),l&2){let d;fo(d=ho())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Ac(0,`po-container`,0)(1,`p`,1),vN(2,`Gere um filtro com IA`),ug(),Ac(3,`p`,2),vN(4,` Este exemplo usa o `),Ac(5,`code`),vN(6,`po-search-ai`),ug(),vN(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),ug(),Ac(8,`p`,3),vN(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Ac(10,`a`,4),vN(11,`po-table`),ug(),vN(12,` já integra o `),Ac(13,`code`),vN(14,`po-search-ai`),ug(),vN(15,` de forma inteligente através da propriedade `),Ac(16,`code`),vN(17,`p-search-ai-field`),ug(),vN(18,`, experimente também! `),ug()(),Ac(19,`po-search-ai`,5),pt(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),ug(),Ac(20,`p`,6),vN(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),ug(),Ac(22,`div`,7),Ox(23,Ve,1,3,`po-filter-chip`,8,Nx),ug(),Rx(25,ze,17,4,`po-container`,9)),l&2&&(Hp(19),cE(`p-columns`,i.columns),Hp(4),kx(i.examples),Hp(2),Ax(i.filter?25:-1))},dependencies:[Ic,M3,voe],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO AI Search - Filter`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container class="po-mb-2" p-no-border>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-ai-filter`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,We,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoSearchAiComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O `),Ac(24,`code`),vN(25,`po-search-ai`),ug(),vN(26,` é um componente de `),Ac(27,`strong`),vN(28,`busca em linguagem natural`),ug(),vN(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Ac(30,`em`),vN(31,`"clientes de SP com saldo acima de R$ 500"`),ug(),vN(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Ac(33,`a`,6)(34,`code`),vN(35,`po-table`),ug()(),vN(36,`.`),ug(),Ac(37,`p`),vN(38,`O componente é `),Ac(39,`strong`),vN(40,`agnóstico ao provedor de IA`),ug(),vN(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Ac(42,`code`),vN(43,`p-url`),ug(),vN(44,`, que recebe `),Ac(45,`code`),vN(46,`{ query, columns }`),ug(),vN(47,` e deve retornar
`),Ac(48,`code`),vN(49,`{ filter, description, confidence }`),ug(),vN(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),ug(),Ac(51,`p`),vN(52,`Por herdar de `),Ac(53,`code`),vN(54,`po-input`),ug(),vN(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Ac(56,`code`),vN(57,`template-driven`),ug(),vN(58,` e `),Ac(59,`code`),vN(60,`reactive`),ug(),vN(61,`.`),ug(),Ac(62,`h4`),vN(63,`Endpoint de IA (backend)`),ug(),Ac(64,`p`),vN(65,`O componente `),Ac(66,`strong`),vN(67,`não conversa diretamente com a LLM`),ug(),vN(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Ac(69,`code`),vN(70,`p-url`),ug(),vN(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),ug(),Ac(72,`p`),vN(73,`O contrato é simples. O componente faz um `),Ac(74,`code`),vN(75,`POST`),ug(),vN(76,` enviando:`),ug(),Ac(77,`pre`)(78,`code`,7),vN(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),ug()(),Ac(80,`p`),vN(81,`E o endpoint deve responder com:`),ug(),Ac(82,`pre`)(83,`code`,7),vN(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),ug()(),Ac(85,`p`),vN(86,`Onde `),Ac(87,`code`),vN(88,`filter`),ug(),vN(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),Ac(90,`code`),vN(91,`description`),ug(),vN(92,` \xE9 um
resumo leg\xEDvel e `),Ac(93,`code`),vN(94,`confidence`),ug(),vN(95,` (`),Ac(96,`code`),vN(97,`0.0`),ug(),vN(98,` a `),Ac(99,`code`),vN(100,`1.0`),ug(),vN(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Ac(102,`code`),vN(103,`p-min-confidence`),ug(),vN(104,` para decidir entre os eventos `),Ac(105,`code`),vN(106,`p-result`),ug(),vN(107,` e `),Ac(108,`code`),vN(109,`p-low-confidence`),ug(),vN(110,`.`),ug(),Ac(111,`blockquote`)(112,`p`)(113,`strong`),vN(114,`Exemplo de implementação:`),ug(),vN(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),ug(),Ac(116,`ul`)(117,`li`),vN(118,`Endpoint público: `),Ac(119,`a`,8)(120,`code`),vN(121,`/v1/ai/filter`),ug()()(),Ac(122,`li`),vN(123,`Código-fonte: `),Ac(124,`a`,9),vN(125,`po-sample-api/src/ai/ai.service.ts`),ug()()()(),Ac(126,`h4`),vN(127,`Estados de comportamento`),ug(),Ac(128,`ul`)(129,`li`)(130,`strong`),vN(131,`Idle:`),ug(),vN(132,` aguardando a digitação da consulta.`),ug(),Ac(133,`li`)(134,`strong`),vN(135,`Loading:`),ug(),vN(136,` consulta em andamento (ícone de carregamento ativo).`),ug(),Ac(137,`li`)(138,`strong`),vN(139,`Aplicado:`),ug(),vN(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),ug(),Ac(141,`li`)(142,`strong`),vN(143,`Baixa confiança:`),ug(),vN(144,` quando `),Ac(145,`code`),vN(146,`confidence`),ug(),vN(147,` for menor que `),Ac(148,`code`),vN(149,`p-min-confidence`),ug(),vN(150,`, emite
`),Ac(151,`code`),vN(152,`p-low-confidence`),ug(),vN(153,` e não aplica o filtro automaticamente.`),ug(),Ac(154,`li`)(155,`strong`),vN(156,`Erro:`),ug(),vN(157,` quando a chamada falha, emite `),Ac(158,`code`),vN(159,`p-error`),ug(),vN(160,`.`),ug()(),Ac(161,`h4`),vN(162,`Tokens customizáveis`),ug(),Ac(163,`p`),vN(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(165,`blockquote`)(166,`p`),vN(167,`Para maiores informações, acesse o guia `),Ac(168,`a`,10),vN(169,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(170,`.`),ug()(),Ac(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),vN(175,`Propriedade`),ug(),Ac(176,`th`),vN(177,`Descrição`),ug(),Ac(178,`th`),vN(179,`Valor Padrão`),ug()()(),Ac(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),vN(184,`Default`),ug()(),Kc(185,`td`)(186,`td`),ug(),Ac(187,`tr`)(188,`td`)(189,`code`),vN(190,`--font-family`),ug()(),Ac(191,`td`),vN(192,`Família tipográfica do campo`),ug(),Ac(193,`td`)(194,`code`),vN(195,`var(--font-family-theme)`),ug()()(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--font-size`),ug()(),Ac(200,`td`),vN(201,`Tamanho da fonte do campo`),ug(),Ac(202,`td`)(203,`code`),vN(204,`var(--font-size)`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`code`),vN(208,`--text-color`),ug()(),Ac(209,`td`),vN(210,`Cor do texto digitado`),ug(),Ac(211,`td`)(212,`code`),vN(213,`var(--color-neutral-dark-90)`),ug()()(),Ac(214,`tr`)(215,`td`)(216,`code`),vN(217,`--text-color-placeholder`),ug()(),Ac(218,`td`),vN(219,`Cor do texto do placeholder`),ug(),Ac(220,`td`)(221,`code`),vN(222,`var(--color-neutral-light-30)`),ug()()(),Ac(223,`tr`)(224,`td`)(225,`code`),vN(226,`--color`),ug()(),Ac(227,`td`),vN(228,`Cor da borda do campo`),ug(),Ac(229,`td`)(230,`code`),vN(231,`var(--color-neutral-dark-70)`),ug()()(),Ac(232,`tr`)(233,`td`)(234,`code`),vN(235,`--background`),ug()(),Ac(236,`td`),vN(237,`Cor de fundo do campo`),ug(),Ac(238,`td`)(239,`code`),vN(240,`var(--color-neutral-light-05)`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`code`),vN(244,`--border-radius`),ug()(),Ac(245,`td`),vN(246,`Raio da borda do campo`),ug(),Ac(247,`td`)(248,`code`),vN(249,`var(--border-radius-md)`),ug()()(),Ac(250,`tr`)(251,`td`)(252,`strong`),vN(253,`Ícones e divisória`),ug()(),Kc(254,`td`)(255,`td`),ug(),Ac(256,`tr`)(257,`td`)(258,`code`),vN(259,`--color-icon-read`),ug()(),Ac(260,`td`),vN(261,`Cor do ícone de busca por IA`),ug(),Ac(262,`td`)(263,`code`),vN(264,`var(--color-neutral-dark-70)`),ug()()(),Ac(265,`tr`)(266,`td`)(267,`code`),vN(268,`--color-divider`),ug()(),Ac(269,`td`),vN(270,`Cor da divisória vertical entre o campo e o botão de busca`),ug(),Ac(271,`td`)(272,`code`),vN(273,`var(--color-neutral-mid-40)`),ug()()(),Ac(274,`tr`)(275,`td`)(276,`code`),vN(277,`--color-icon-processing`),ug()(),Ac(278,`td`),vN(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),ug(),Ac(280,`td`)(281,`code`),vN(282,`var(--color-action-default)`),ug()()(),Ac(283,`tr`)(284,`td`)(285,`strong`),vN(286,`Hover`),ug()(),Kc(287,`td`)(288,`td`),ug(),Ac(289,`tr`)(290,`td`)(291,`code`),vN(292,`--color-hover`),ug()(),Ac(293,`td`),vN(294,`Cor da borda no estado hover`),ug(),Ac(295,`td`)(296,`code`),vN(297,`var(--color-brand-01-dark)`),ug()()(),Ac(298,`tr`)(299,`td`)(300,`code`),vN(301,`--background-hover`),ug()(),Ac(302,`td`),vN(303,`Cor de fundo no estado hover`),ug(),Ac(304,`td`)(305,`code`),vN(306,`var(--color-brand-01-lightest)`),ug()()(),Ac(307,`tr`)(308,`td`)(309,`strong`),vN(310,`Focused`),ug()(),Kc(311,`td`)(312,`td`),ug(),Ac(313,`tr`)(314,`td`)(315,`code`),vN(316,`--color-focused`),ug()(),Ac(317,`td`),vN(318,`Cor da borda no estado de foco`),ug(),Ac(319,`td`)(320,`code`),vN(321,`var(--color-action-default)`),ug()()(),Ac(322,`tr`)(323,`td`)(324,`code`),vN(325,`--outline-color-focused`),ug()(),Ac(326,`td`),vN(327,`Cor do outline no estado de foco`),ug(),Ac(328,`td`)(329,`code`),vN(330,`var(--color-action-focus)`),ug()()(),Ac(331,`tr`)(332,`td`)(333,`strong`),vN(334,`Disabled`),ug()(),Kc(335,`td`)(336,`td`),ug(),Ac(337,`tr`)(338,`td`)(339,`code`),vN(340,`--color-disabled`),ug()(),Ac(341,`td`),vN(342,`Cor da borda no estado desabilitado`),ug(),Ac(343,`td`)(344,`code`),vN(345,`var(--color-neutral-light-30)`),ug()()(),Ac(346,`tr`)(347,`td`)(348,`code`),vN(349,`--background-disabled`),ug()(),Ac(350,`td`),vN(351,`Cor de fundo no estado desabilitado`),ug(),Ac(352,`td`)(353,`code`),vN(354,`var(--color-neutral-light-20)`),ug()()()()()(),Ac(355,`div`,11)(356,`h4`,12),vN(357,`Seletor`),ug(),Ac(358,`pre`,13),vN(359,`<po-search-ai
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
`),ug()(),Ac(360,`h4`,14),vN(361,`Propriedades`),ug(),Ac(362,`table`,15)(363,`tr`,16)(364,`th`,17),vN(365,`Nome`),ug(),Ac(366,`th`,17),vN(367,`Tipo`),ug(),Ac(368,`th`,17),vN(369,`Padrão`),ug(),Ac(370,`th`,17),vN(371,`Descrição`),ug()(),Ac(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),vN(376,` (p-clear)`),Kc(377,`br`),ug()()(),Ac(378,`td`,22)(379,`code`,23),vN(380,`EventEmitter`),ug()(),Ac(381,`td`,24),vN(382,`-`),ug(),Ac(383,`td`,25)(384,`em`)(385,`strong`),vN(386,`(opcional)`),ug()(),Ac(387,`p`),vN(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),ug()()(),Ac(389,`tr`,18)(390,`td`,19)(391,`div`,26)(392,`span`,27),vN(393,` p-columns`),Kc(394,`br`),ug()()(),Ac(395,`td`,22)(396,`code`,28),vN(397,`Array<PoSearchAiColumn>`),ug()(),Ac(398,`td`,24)(399,`p`)(400,`code`),vN(401,`[]`),ug()()(),Ac(402,`td`,25)(403,`em`)(404,`strong`),vN(405,`(opcional)`),ug()(),Ac(406,`p`),vN(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Ac(408,`code`),vN(409,`p-url`),ug(),vN(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),ug()()(),Ac(411,`tr`,18)(412,`td`,19)(413,`div`,20)(414,`span`,21),vN(415,` (p-error)`),Kc(416,`br`),ug()()(),Ac(417,`td`,22)(418,`code`,23),vN(419,`EventEmitter`),ug()(),Ac(420,`td`,24),vN(421,`-`),ug(),Ac(422,`td`,25)(423,`em`)(424,`strong`),vN(425,`(opcional)`),ug()(),Ac(426,`p`),vN(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Ac(428,`code`),vN(429,`PoSearchAiError`),ug(),vN(430,`.`),ug()()(),Ac(431,`tr`,18)(432,`td`,19)(433,`div`,26)(434,`span`,27),vN(435,` p-literals`),Kc(436,`br`),ug()()(),Ac(437,`td`,22)(438,`code`,29),vN(439,`PoSearchAiLiterals`),ug()(),Ac(440,`td`,24),vN(441,`-`),ug(),Ac(442,`td`,25)(443,`em`)(444,`strong`),vN(445,`(opcional)`),ug()(),Ac(446,`p`),vN(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),ug()()(),Ac(448,`tr`,18)(449,`td`,19)(450,`div`,20)(451,`span`,21),vN(452,` (p-low-confidence)`),Kc(453,`br`),ug()()(),Ac(454,`td`,22)(455,`code`,23),vN(456,`EventEmitter`),ug()(),Ac(457,`td`,24),vN(458,`-`),ug(),Ac(459,`td`,25)(460,`em`)(461,`strong`),vN(462,`(opcional)`),ug()(),Ac(463,`p`),vN(464,`Evento disparado quando a confiança da resposta da IA é menor que `),Ac(465,`code`),vN(466,`p-min-confidence`),ug(),vN(467,`.
Emite um objeto `),Ac(468,`code`),vN(469,`PoSearchAiResult`),ug(),vN(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),ug()()(),Ac(471,`tr`,18)(472,`td`,19)(473,`div`,26)(474,`span`,27),vN(475,` p-min-confidence`),Kc(476,`br`),ug()()(),Ac(477,`td`,22)(478,`code`,30),vN(479,`number`),ug()(),Ac(480,`td`,24)(481,`p`)(482,`code`),vN(483,`0.5`),ug()()(),Ac(484,`td`,25)(485,`em`)(486,`strong`),vN(487,`(opcional)`),ug()(),Ac(488,`p`),vN(489,`Nível mínimo de confiança (`),Ac(490,`code`),vN(491,`0.0`),ug(),vN(492,` a `),Ac(493,`code`),vN(494,`1.0`),ug(),vN(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Ac(496,`code`),vN(497,`p-low-confidence`),ug(),vN(498,` \xE9
emitido em vez de `),Ac(499,`code`),vN(500,`p-result`),ug(),vN(501,`.`),ug()()(),Ac(502,`tr`,18)(503,`td`,19)(504,`div`,20)(505,`span`,21),vN(506,` (p-result)`),Kc(507,`br`),ug()()(),Ac(508,`td`,22)(509,`code`,23),vN(510,`EventEmitter`),ug()(),Ac(511,`td`,24),vN(512,`-`),ug(),Ac(513,`td`,25)(514,`em`)(515,`strong`),vN(516,`(opcional)`),ug()(),Ac(517,`p`),vN(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Ac(519,`code`),vN(520,`p-min-confidence`),ug(),vN(521,`. Emite um objeto `),Ac(522,`code`),vN(523,`PoSearchAiResult`),ug(),vN(524,`.`),ug(),Ac(525,`p`),vN(526,`O campo `),Ac(527,`code`),vN(528,`type`),ug(),vN(529,` do resultado indica como o consumidor deve interpretar a resposta:`),ug(),Ac(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),vN(535,`filter`),ug()(),Ac(536,`em`),vN(537,`(padrão)`),ug(),vN(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),Ac(539,`code`),vN(540,`result.filter`),ug(),vN(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Ac(542,`code`),vN(543,`po-table`),ug(),vN(544,` via `),Ac(545,`code`),vN(546,`p-filter`),ug(),vN(547,`.`),ug()(),Ac(548,`li`)(549,`p`)(550,`strong`)(551,`code`),vN(552,`chat`),ug()(),vN(553,`: a IA retornou uma resposta conversacional. Use `),Ac(554,`code`),vN(555,`result.data`),ug(),vN(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),ug()(),Ac(557,`li`)(558,`p`)(559,`strong`)(560,`code`),vN(561,`custom`),ug()(),vN(562,`: a IA retornou um payload genérico definido pelo backend. Use `),Ac(563,`code`),vN(564,`result.data`),ug(),vN(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),ug()()()()(),Ac(566,`tr`,18)(567,`td`,19)(568,`div`,26)(569,`span`,27),vN(570,` p-timeout`),Kc(571,`br`),ug()()(),Ac(572,`td`,22)(573,`code`,30),vN(574,`number`),ug()(),Ac(575,`td`,24)(576,`p`)(577,`code`),vN(578,`10000`),ug()()(),Ac(579,`td`,25)(580,`em`)(581,`strong`),vN(582,`(opcional)`),ug()(),Ac(583,`p`),vN(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Ac(585,`code`),vN(586,`p-error`),ug(),vN(587,` com `),Ac(588,`code`),vN(589,`statusCode 408`),ug(),vN(590,`.`),ug()()(),Ac(591,`tr`,18)(592,`td`,19)(593,`div`,26)(594,`span`,27),vN(595,` p-url`),Kc(596,`br`),ug()()(),Ac(597,`td`,22)(598,`code`,31),vN(599,`string`),ug()(),Ac(600,`td`,24),vN(601,`-`),ug(),Ac(602,`td`,25)(603,`em`)(604,`strong`),vN(605,`(opcional)`),ug()(),Ac(606,`p`),vN(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Ac(608,`code`),vN(609,`{ query, columns }`),ug(),vN(610,` via `),Ac(611,`code`),vN(612,`POST`),ug(),vN(613,` e deve retornar `),Ac(614,`code`),vN(615,`{ filter, description, confidence }`),ug(),vN(616,`.`),ug(),Ac(617,`blockquote`)(618,`p`),vN(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),Ac(620,`strong`),vN(621,`no backend`),ug(),vN(622,`, nunca no client-side.`),ug()()()()(),Ac(623,`h3`,14),vN(624,`Métodos`),ug(),Ac(625,`table`,32)(626,`tr`,18)(627,`th`,33)(628,`div`,26)(629,`h4`)(630,`span`,27),vN(631,` search `),ug()()()()(),Ac(632,`tr`,25)(633,`td`,25)(634,`p`),vN(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Ac(636,`code`),vN(637,`p-url`),ug(),vN(638,`.`),ug(),Ac(639,`p`),vN(640,`Caso a consulta esteja vazia ou `),Ac(641,`code`),vN(642,`p-url`),ug(),vN(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Ac(644,`code`),vN(645,`p-result`),ug(),vN(646,` (ou `),Ac(647,`code`),vN(648,`p-low-confidence`),ug(),vN(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Ac(650,`code`),vN(651,`p-error`),ug(),vN(652,`.`),ug()()()(),Kc(653,`br`),Ac(654,`table`,32)(655,`tr`,18)(656,`th`,33)(657,`div`,26)(658,`h4`)(659,`span`,27),vN(660,` clearSearch `),ug()()()()(),Ac(661,`tr`,25)(662,`td`,25)(663,`p`),vN(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Ac(665,`code`),vN(666,`p-clear`),ug(),vN(667,`.`),ug()()()(),Kc(668,`br`),Ac(669,`table`,32)(670,`tr`,18)(671,`th`,33)(672,`div`,26)(673,`h4`)(674,`span`,27),vN(675,` onSearchKeydown `),ug()()()()(),Ac(676,`tr`,25)(677,`td`,25)(678,`p`),vN(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Ac(680,`code`),vN(681,`Enter`),ug(),vN(682,`.`),ug()()()(),Ac(683,`h5`)(684,`b`),vN(685,`Parâmetros`),ug()(),Ac(686,`table`,15)(687,`tr`,16)(688,`th`,17),vN(689,`Nome`),ug(),Ac(690,`th`,17),vN(691,`Tipo`),ug(),Ac(692,`th`,17),vN(693,`Descrição`),ug()(),Ac(694,`tr`,18)(695,`td`,19),vN(696,` event`),ug(),Kc(697,`td`,22),Ac(698,`td`,25)(699,`p`),vN(700,`Evento de teclado.`),ug()()()(),Kc(701,`br`),Ac(702,`h3`),vN(703,`Interfaces`),ug(),Ac(704,`h4`,34)(705,`code`,5),vN(706,`PoSearchAiColumn`),ug()(),Ac(707,`div`,2)(708,`p`),vN(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),ug(),Ac(710,`p`),vN(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),ug()(),Ac(712,`h4`,14),vN(713,`Propriedades`),ug(),Ac(714,`table`,15)(715,`tr`,16)(716,`th`,17),vN(717,`Nome`),ug(),Ac(718,`th`,17),vN(719,`Tipo`),ug(),Ac(720,`th`,17),vN(721,`Descrição`),ug()(),Ac(722,`tr`,18)(723,`td`,19)(724,`div`,26)(725,`span`,27),vN(726,` label`),Kc(727,`br`),ug()()(),Ac(728,`td`,22)(729,`code`,31),vN(730,`string`),ug()(),Ac(731,`td`,25)(732,`p`),vN(733,`Rótulo legível exibido ao usuário (ex: `),Ac(734,`code`),vN(735,`Nome`),ug(),vN(736,`, `),Ac(737,`code`),vN(738,`Idade`),ug(),vN(739,`, `),Ac(740,`code`),vN(741,`Cidade`),ug(),vN(742,`).`),ug()()(),Ac(743,`tr`,18)(744,`td`,19)(745,`div`,26)(746,`span`,27),vN(747,` property`),Kc(748,`br`),ug()()(),Ac(749,`td`,22)(750,`code`,31),vN(751,`string`),ug()(),Ac(752,`td`,25)(753,`p`),vN(754,`Nome da propriedade do campo (ex: `),Ac(755,`code`),vN(756,`name`),ug(),vN(757,`, `),Ac(758,`code`),vN(759,`age`),ug(),vN(760,`, `),Ac(761,`code`),vN(762,`city`),ug(),vN(763,`).`),ug()()(),Ac(764,`tr`,18)(765,`td`,19)(766,`div`,26)(767,`span`,27),vN(768,` type`),Kc(769,`br`),ug()()(),Ac(770,`td`,22)(771,`code`,31),vN(772,`string`),ug()(),Ac(773,`td`,25)(774,`em`)(775,`strong`),vN(776,`(opcional)`),ug()(),Ac(777,`p`),vN(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),ug(),Ac(779,`p`),vN(780,`Valores comuns: `),Ac(781,`code`),vN(782,`string`),ug(),vN(783,`, `),Ac(784,`code`),vN(785,`number`),ug(),vN(786,`, `),Ac(787,`code`),vN(788,`date`),ug(),vN(789,`, `),Ac(790,`code`),vN(791,`currency`),ug(),vN(792,`, `),Ac(793,`code`),vN(794,`boolean`),ug(),vN(795,`.`),ug()()()(),Ac(796,`h4`,34)(797,`code`,5),vN(798,`PoSearchAiLiterals`),ug()(),Ac(799,`div`,2)(800,`p`),vN(801,`Interface para definição das literais usadas no `),Ac(802,`code`),vN(803,`po-search-ai`),ug(),vN(804,`.`),ug()(),Ac(805,`h4`,14),vN(806,`Propriedades`),ug(),Ac(807,`table`,15)(808,`tr`,16)(809,`th`,17),vN(810,`Nome`),ug(),Ac(811,`th`,17),vN(812,`Tipo`),ug(),Ac(813,`th`,17),vN(814,`Descrição`),ug()(),Ac(815,`tr`,18)(816,`td`,19)(817,`div`,26)(818,`span`,27),vN(819,` clean`),Kc(820,`br`),ug()()(),Ac(821,`td`,22)(822,`code`,31),vN(823,`string`),ug()(),Ac(824,`td`,25)(825,`em`)(826,`strong`),vN(827,`(opcional)`),ug()(),Ac(828,`p`),vN(829,`Texto de acessibilidade do botão de limpar o campo.`),ug()()(),Ac(830,`tr`,18)(831,`td`,19)(832,`div`,26)(833,`span`,27),vN(834,` errorMessage`),Kc(835,`br`),ug()()(),Ac(836,`td`,22)(837,`code`,31),vN(838,`string`),ug()(),Ac(839,`td`,25)(840,`em`)(841,`strong`),vN(842,`(opcional)`),ug()(),Ac(843,`p`),vN(844,`Mensagem exibida quando a busca com IA falha.`),ug()()()(),Ac(845,`h4`,34)(846,`code`,5),vN(847,`PoSearchAiRequest`),ug()(),Ac(848,`div`,2)(849,`p`),vN(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),Ac(851,`code`),vN(852,`p-url`),ug(),vN(853,`.`),ug(),Ac(854,`p`),vN(855,`O componente é `),Ac(856,`strong`),vN(857,`agnóstico ao provedor de IA`),ug(),vN(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Ac(859,`code`),vN(860,`PoSearchAiResponse`),ug(),vN(861,`.`),ug()(),Ac(862,`h4`,14),vN(863,`Propriedades`),ug(),Ac(864,`table`,15)(865,`tr`,16)(866,`th`,17),vN(867,`Nome`),ug(),Ac(868,`th`,17),vN(869,`Tipo`),ug(),Ac(870,`th`,17),vN(871,`Descrição`),ug()(),Ac(872,`tr`,18)(873,`td`,19)(874,`div`,26)(875,`span`,27),vN(876,` columns`),Kc(877,`br`),ug()()(),Ac(878,`td`,22)(879,`code`,28),vN(880,`Array<PoSearchAiColumn>`),ug()(),Ac(881,`td`,25)(882,`p`),vN(883,`Metadados dos campos disponíveis para a busca (ver `),Ac(884,`code`),vN(885,`PoSearchAiColumn`),ug(),vN(886,`).`),ug()()(),Ac(887,`tr`,18)(888,`td`,19)(889,`div`,26)(890,`span`,27),vN(891,` query`),Kc(892,`br`),ug()()(),Ac(893,`td`,22)(894,`code`,31),vN(895,`string`),ug()(),Ac(896,`td`,25)(897,`p`),vN(898,`Texto em linguagem natural digitado pelo usuário.`),ug()()()(),Ac(899,`h4`,34)(900,`code`,5),vN(901,`PoSearchAiResponse`),ug()(),Ac(902,`div`,2)(903,`p`),vN(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),Ac(905,`code`),vN(906,`p-url`),ug(),vN(907,`.`),ug()(),Ac(908,`h4`,14),vN(909,`Propriedades`),ug(),Ac(910,`table`,15)(911,`tr`,16)(912,`th`,17),vN(913,`Nome`),ug(),Ac(914,`th`,17),vN(915,`Tipo`),ug(),Ac(916,`th`,17),vN(917,`Descrição`),ug()(),Ac(918,`tr`,18)(919,`td`,19)(920,`div`,26)(921,`span`,27),vN(922,` confidence`),Kc(923,`br`),ug()()(),Ac(924,`td`,22)(925,`code`,30),vN(926,`number`),ug()(),Ac(927,`td`,25)(928,`em`)(929,`strong`),vN(930,`(opcional)`),ug()(),Ac(931,`p`),vN(932,`Nível de confiança da interpretação da IA, em um intervalo de `),Ac(933,`code`),vN(934,`0.0`),ug(),vN(935,` a `),Ac(936,`code`),vN(937,`1.0`),ug(),vN(938,`.`),ug(),Ac(939,`p`),vN(940,`Utilizado em conjunto com `),Ac(941,`code`),vN(942,`p-min-confidence`),ug(),vN(943,` para decidir se o resultado é confiável.`),ug()()(),Ac(944,`tr`,18)(945,`td`,19)(946,`div`,26)(947,`span`,27),vN(948,` data`),Kc(949,`br`),ug()()(),Ac(950,`td`,22)(951,`code`,35),vN(952,`Record<string, any>`),ug()(),Ac(953,`td`,25)(954,`em`)(955,`strong`),vN(956,`(opcional)`),ug()(),Ac(957,`p`),vN(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),ug(),Ac(959,`p`),vN(960,`Utilizado quando `),Ac(961,`code`),vN(962,`type`),ug(),vN(963,` é `),Ac(964,`code`),vN(965,`'chat'`),ug(),vN(966,` ou `),Ac(967,`code`),vN(968,`'custom'`),ug(),vN(969,`.`),ug()()(),Ac(970,`tr`,18)(971,`td`,19)(972,`div`,26)(973,`span`,27),vN(974,` description`),Kc(975,`br`),ug()()(),Ac(976,`td`,22)(977,`code`,31),vN(978,`string`),ug()(),Ac(979,`td`,25)(980,`em`)(981,`strong`),vN(982,`(opcional)`),ug()(),Ac(983,`p`),vN(984,`Descrição legível, em linguagem natural, da resposta.`),ug()()(),Ac(985,`tr`,18)(986,`td`,19)(987,`div`,26)(988,`span`,27),vN(989,` filter`),Kc(990,`br`),ug()()(),Ac(991,`td`,22)(992,`code`,31),vN(993,`string`),ug()(),Ac(994,`td`,25)(995,`em`)(996,`strong`),vN(997,`(opcional)`),ug()(),Ac(998,`p`),vN(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Ac(1e3,`code`),vN(1001,`age gt 30 and city eq 'São Paulo'`),ug(),vN(1002,`).`),ug(),Ac(1003,`p`),vN(1004,`Utilizado quando `),Ac(1005,`code`),vN(1006,`type`),ug(),vN(1007,` é `),Ac(1008,`code`),vN(1009,`'filter'`),ug(),vN(1010,`.`),ug()()(),Ac(1011,`tr`,18)(1012,`td`,19)(1013,`div`,26)(1014,`span`,27),vN(1015,` type`),Kc(1016,`br`),ug()()(),Ac(1017,`td`,22)(1018,`code`,36),vN(1019,`PoSearchAiResponseType`),ug()(),Ac(1020,`td`,25)(1021,`em`)(1022,`strong`),vN(1023,`(opcional)`),ug()(),Ac(1024,`p`),vN(1025,`Tipo da resposta retornada pela IA.`),ug(),Ac(1026,`p`),vN(1027,`Quando omitido, o componente infere `),Ac(1028,`code`),vN(1029,`'filter'`),ug(),vN(1030,` se `),Ac(1031,`code`),vN(1032,`filter`),ug(),vN(1033,` estiver presente,
caso contr\xE1rio assume `),Ac(1034,`code`),vN(1035,`'custom'`),ug(),vN(1036,`.`),ug()()()(),Ac(1037,`h4`,34)(1038,`code`,5),vN(1039,`PoSearchAiResult`),ug()(),Ac(1040,`div`,2)(1041,`p`),vN(1042,`Interface que define o objeto emitido pelos eventos `),Ac(1043,`code`),vN(1044,`p-result`),ug(),vN(1045,` e `),Ac(1046,`code`),vN(1047,`p-low-confidence`),ug(),vN(1048,`.`),ug()(),Ac(1049,`h4`,14),vN(1050,`Propriedades`),ug(),Ac(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),vN(1054,`Nome`),ug(),Ac(1055,`th`,17),vN(1056,`Tipo`),ug(),Ac(1057,`th`,17),vN(1058,`Descrição`),ug()(),Ac(1059,`tr`,18)(1060,`td`,19)(1061,`div`,26)(1062,`span`,27),vN(1063,` confidence`),Kc(1064,`br`),ug()()(),Ac(1065,`td`,22)(1066,`code`,30),vN(1067,`number`),ug()(),Ac(1068,`td`,25)(1069,`em`)(1070,`strong`),vN(1071,`(opcional)`),ug()(),Ac(1072,`p`),vN(1073,`Nível de confiança da interpretação (`),Ac(1074,`code`),vN(1075,`0.0`),ug(),vN(1076,` a `),Ac(1077,`code`),vN(1078,`1.0`),ug(),vN(1079,`).`),ug()()(),Ac(1080,`tr`,18)(1081,`td`,19)(1082,`div`,26)(1083,`span`,27),vN(1084,` data`),Kc(1085,`br`),ug()()(),Ac(1086,`td`,22)(1087,`code`,35),vN(1088,`Record<string, any>`),ug()(),Ac(1089,`td`,25)(1090,`em`)(1091,`strong`),vN(1092,`(opcional)`),ug()(),Ac(1093,`p`),vN(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),ug()()(),Ac(1095,`tr`,18)(1096,`td`,19)(1097,`div`,26)(1098,`span`,27),vN(1099,` description`),Kc(1100,`br`),ug()()(),Ac(1101,`td`,22)(1102,`code`,31),vN(1103,`string`),ug()(),Ac(1104,`td`,25)(1105,`em`)(1106,`strong`),vN(1107,`(opcional)`),ug()(),Ac(1108,`p`),vN(1109,`Descrição legível da resposta.`),ug()()(),Ac(1110,`tr`,18)(1111,`td`,19)(1112,`div`,26)(1113,`span`,27),vN(1114,` filter`),Kc(1115,`br`),ug()()(),Ac(1116,`td`,22)(1117,`code`,31),vN(1118,`string`),ug()(),Ac(1119,`td`,25)(1120,`em`)(1121,`strong`),vN(1122,`(opcional)`),ug()(),Ac(1123,`p`),vN(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Ac(1125,`code`),vN(1126,`type`),ug(),vN(1127,` é `),Ac(1128,`code`),vN(1129,`'filter'`),ug(),vN(1130,`.`),ug()()(),Ac(1131,`tr`,18)(1132,`td`,19)(1133,`div`,26)(1134,`span`,27),vN(1135,` query`),Kc(1136,`br`),ug()()(),Ac(1137,`td`,22)(1138,`code`,31),vN(1139,`string`),ug()(),Ac(1140,`td`,25)(1141,`p`),vN(1142,`Texto original digitado pelo usuário.`),ug()()(),Ac(1143,`tr`,18)(1144,`td`,19)(1145,`div`,26)(1146,`span`,27),vN(1147,` type`),Kc(1148,`br`),ug()()(),Ac(1149,`td`,22)(1150,`code`,36),vN(1151,`PoSearchAiResponseType`),ug()(),Ac(1152,`td`,25)(1153,`p`),vN(1154,`Tipo da resposta retornada pela IA.`),ug()()()(),Ac(1155,`h4`,34)(1156,`code`,5),vN(1157,`PoSearchAiError`),ug()(),Ac(1158,`div`,2)(1159,`p`),vN(1160,`Interface que define o objeto emitido pelo evento `),Ac(1161,`code`),vN(1162,`p-error`),ug(),vN(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),ug()(),Ac(1164,`h4`,14),vN(1165,`Propriedades`),ug(),Ac(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),vN(1169,`Nome`),ug(),Ac(1170,`th`,17),vN(1171,`Tipo`),ug(),Ac(1172,`th`,17),vN(1173,`Descrição`),ug()(),Ac(1174,`tr`,18)(1175,`td`,19)(1176,`div`,26)(1177,`span`,27),vN(1178,` message`),Kc(1179,`br`),ug()()(),Ac(1180,`td`,22)(1181,`code`,31),vN(1182,`string`),ug()(),Ac(1183,`td`,25)(1184,`p`),vN(1185,`Mensagem de erro.`),ug()()(),Ac(1186,`tr`,18)(1187,`td`,19)(1188,`div`,26)(1189,`span`,27),vN(1190,` query`),Kc(1191,`br`),ug()()(),Ac(1192,`td`,22)(1193,`code`,31),vN(1194,`string`),ug()(),Ac(1195,`td`,25)(1196,`p`),vN(1197,`Texto original digitado pelo usuário.`),ug()()(),Ac(1198,`tr`,18)(1199,`td`,19)(1200,`div`,26)(1201,`span`,27),vN(1202,` statusCode`),Kc(1203,`br`),ug()()(),Ac(1204,`td`,22)(1205,`code`,30),vN(1206,`number`),ug()(),Ac(1207,`td`,25)(1208,`p`),vN(1209,`Código HTTP do erro (ex: `),Ac(1210,`code`),vN(1211,`500`),ug(),vN(1212,`, `),Ac(1213,`code`),vN(1214,`408`),ug(),vN(1215,` para timeout).`),ug()()()(),Ac(1216,`h3`),vN(1217,`Enums`),ug(),Ac(1218,`h4`,4)(1219,`code`,5),vN(1220,`PoSearchAiResponseType`),ug()(),Ac(1221,`div`,2)(1222,`p`),vN(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),ug()(),Ac(1224,`h4`,14),vN(1225,`Propriedades`),ug(),Ac(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),vN(1229,`Nome`),ug(),Ac(1230,`th`,17),vN(1231,`Descrição`),ug()(),Ac(1232,`tr`,18)(1233,`td`,19)(1234,`div`,26)(1235,`span`,27),vN(1236,` filter`),Kc(1237,`br`),ug()()(),Ac(1238,`td`,25)(1239,`p`),vN(1240,`Resposta contendo um filtro estruturado (ex: OData).`),ug()()(),Ac(1241,`tr`,18)(1242,`td`,19)(1243,`div`,26)(1244,`span`,27),vN(1245,` chat`),Kc(1246,`br`),ug()()(),Ac(1247,`td`,25)(1248,`p`),vN(1249,`Resposta conversacional em linguagem natural.`),ug()()(),Ac(1250,`tr`,18)(1251,`td`,19)(1252,`div`,26)(1253,`span`,27),vN(1254,` custom`),Kc(1255,`br`),ug()()(),Ac(1256,`td`,25)(1257,`p`),vN(1258,`Payload genérico definido pelo consumidor.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-search-ai-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-search-ai-basic-view`)(6,`sample-po-search-ai-labs-view`)(7,`sample-po-search-ai-result-view`)(8,`sample-po-search-ai-filter-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,xe,be,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(Ge),kL]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,Te]})}return o})();export{vt as DocPoSearchAiModule};