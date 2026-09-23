import{$r as Vx,Cr as Nx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Ot as WH,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,gi as bw,in as jye,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,w as Bbe,wa as zx,xa as xx,yr as Mx}from"./main-NT5YGKBQ.js";var xe=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&ql(0,`po-search-ai`,0)},dependencies:[WH],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,xe],encapsulation:2,changeDetection:1})}return o})();function Ie(o,O){if(o&1&&(Ml(0,`po-container`,4)(1,`p`)(2,`strong`),mN(3,`Query:`),lg(),mN(4),lg(),Ml(5,`p`)(6,`strong`),mN(7,`Filtro:`),lg(),mN(8),lg(),Ml(9,`p`)(10,`strong`),mN(11,`Descrição:`),lg(),mN(12),lg(),Ml(13,`p`)(14,`strong`),mN(15,`Confiança:`),lg(),mN(16),lg()()),o&2){let a=zx();Up(4),gg(` `,a.result.query),Up(4),gg(` `,a.result.filter),Up(4),gg(` `,a.result.description),Up(4),gg(` `,a.result.confidence)}}var be=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Vx();Ml(0,`po-search-ai`,1),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(p){return i.onResult(p)}),lg(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),lg(),Tx(4,Ie,17,4,`po-container`,4),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.label,p)||(i.label=p),Jy(p)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.help,p)||(i.help=p),Jy(p)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.helperText,p)||(i.helperText=p),Jy(p)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.placeholder,p)||(i.placeholder=p),Jy(p)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.errorPattern,p)||(i.errorPattern=p),Jy(p)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.url,p)||(i.url=p),Jy(p)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.timeout,p)||(i.timeout=p),Jy(p)}),lg(),f0(),Ml(15,`po-decimal`,12),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.minConfidence,p)||(i.minConfidence=p),Jy(p)}),lg(),f0(),Ml(16,`po-checkbox-group`,13),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.properties,p)||(i.properties=p),Jy(p)}),lg(),f0(),Ml(17,`po-radio-group`,14),Mw(`ngModelChange`,function(p){return Qy(d),yN(i.size,p)||(i.size=p),Jy(p)}),lg(),f0(),Ml(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return Qy(d),Yx(7).reset(),Jy(i.restore())}),lg()()()}l&2&&(cw(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),Up(3),cw(`p-value`,i.event),Up(),Mx(i.result?4:-1),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.url),p0(),Up(),Tw(`ngModel`,i.timeout),p0(),Up(),Tw(`ngModel`,i.minConfidence),cw(`p-decimals-length`,2),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,wp,nb,G4,jye,lU,WH,xbe,q0e,kbe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return o})();function Fe(o,O){if(o&1&&(Ml(0,`po-container`,1)(1,`p`)(2,`strong`),mN(3,`Query:`),lg(),mN(4),lg(),Ml(5,`p`)(6,`strong`),mN(7,`Filtro:`),lg(),mN(8),lg(),Ml(9,`p`)(10,`strong`),mN(11,`Descrição:`),lg(),mN(12),lg(),Ml(13,`p`)(14,`strong`),mN(15,`Confiança:`),lg(),mN(16),lg()()),o&2){let a=zx();Up(4),gg(` `,a.result.query),Up(4),gg(` `,a.result.filter),Up(4),gg(` `,a.result.description),Up(4),gg(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Ml(0,`po-search-ai`,0),ht(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),lg(),Tx(1,Fe,17,4,`po-container`,1)),l&2&&(cw(`p-columns`,i.columns),Up(),Mx(i.result?1:-1))},dependencies:[wp,WH],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search - Result`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-result`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ve],encapsulation:2,changeDetection:1})}return o})();function Ve(o,O){if(o&1){let a=Vx();Ml(0,`po-filter-chip`,10),ht(`p-selected-change`,function(i){let d=Qy(a).$implicit;return Jy(zx().onSuggestionChange(d,i))}),lg()}if(o&2){let a=O.$implicit,l=zx();cw(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(Ml(0,`po-container`,9)(1,`p`,11),mN(2,`Filtro OData gerado`),lg(),Ml(3,`p`)(4,`strong`),mN(5,`Consulta:`),lg(),mN(6),lg(),Ml(7,`p`)(8,`strong`),mN(9,`Descrição:`),lg(),mN(10),lg(),Ml(11,`p`)(12,`strong`),mN(13,`Confiança:`),lg(),mN(14),lg(),Ml(15,`pre`,12),mN(16),lg()()),o&2){let a=zx();Up(6),gg(` `,a.query),Up(4),gg(` `,a.description),Up(4),gg(` `,a.confidence),Up(2),bw(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(w(Eu))};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Zl(WH,5),l&2){let d;lo(d=uo())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Ml(0,`po-container`,0)(1,`p`,1),mN(2,`Gere um filtro com IA`),lg(),Ml(3,`p`,2),mN(4,` Este exemplo usa o `),Ml(5,`code`),mN(6,`po-search-ai`),lg(),mN(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),lg(),Ml(8,`p`,3),mN(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Ml(10,`a`,4),mN(11,`po-table`),lg(),mN(12,` já integra o `),Ml(13,`code`),mN(14,`po-search-ai`),lg(),mN(15,` de forma inteligente através da propriedade `),Ml(16,`code`),mN(17,`p-search-ai-field`),lg(),mN(18,`, experimente também! `),lg()(),Ml(19,`po-search-ai`,5),ht(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),lg(),Ml(20,`p`,6),mN(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),lg(),Ml(22,`div`,7),xx(23,Ve,1,3,`po-filter-chip`,8,Ax),lg(),Tx(25,ze,17,4,`po-container`,9)),l&2&&(Up(19),cw(`p-columns`,i.columns),Up(4),Nx(i.examples),Up(2),Mx(i.filter?25:-1))},dependencies:[wp,WH,Bbe],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search - Filter`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container class="po-mb-2" p-no-border>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-filter`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,We,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoSearchAiComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-search-ai`),lg(),mN(26,` é um componente de `),Ml(27,`strong`),mN(28,`busca em linguagem natural`),lg(),mN(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Ml(30,`em`),mN(31,`"clientes de SP com saldo acima de R$ 500"`),lg(),mN(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Ml(33,`a`,6)(34,`code`),mN(35,`po-table`),lg()(),mN(36,`.`),lg(),Ml(37,`blockquote`)(38,`p`)(39,`strong`),mN(40,`Componente experimental:`),lg(),mN(41,` o `),Ml(42,`code`),mN(43,`po-search-ai`),lg(),mN(44,` est\xE1 em fase experimental. Sua API
(propriedades, eventos e contrato com o backend) pode sofrer altera\xE7\xF5es
entre vers\xF5es. Utilize com cautela em ambientes de produ\xE7\xE3o.`),lg()(),Ml(45,`p`),mN(46,`O componente é `),Ml(47,`strong`),mN(48,`agnóstico ao provedor de IA`),lg(),mN(49,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Ml(50,`code`),mN(51,`p-url`),lg(),mN(52,`, que recebe `),Ml(53,`code`),mN(54,`{ query, columns }`),lg(),mN(55,` e deve retornar
`),Ml(56,`code`),mN(57,`{ filter, description, confidence }`),lg(),mN(58,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),lg(),Ml(59,`p`),mN(60,`Por herdar de `),Ml(61,`code`),mN(62,`po-input`),lg(),mN(63,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Ml(64,`code`),mN(65,`template-driven`),lg(),mN(66,` e `),Ml(67,`code`),mN(68,`reactive`),lg(),mN(69,`.`),lg(),Ml(70,`h4`),mN(71,`Endpoint de IA (backend)`),lg(),Ml(72,`p`),mN(73,`O componente `),Ml(74,`strong`),mN(75,`não conversa diretamente com a LLM`),lg(),mN(76,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Ml(77,`code`),mN(78,`p-url`),lg(),mN(79,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),lg(),Ml(80,`p`),mN(81,`O contrato é simples. O componente faz um `),Ml(82,`code`),mN(83,`POST`),lg(),mN(84,` enviando:`),lg(),Ml(85,`pre`)(86,`code`,7),mN(87,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),lg()(),Ml(88,`p`),mN(89,`E o endpoint deve responder com:`),lg(),Ml(90,`pre`)(91,`code`,7),mN(92,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),lg()(),Ml(93,`p`),mN(94,`Onde `),Ml(95,`code`),mN(96,`filter`),lg(),mN(97,` é o filtro estruturado gerado pela IA (normalmente OData), `),Ml(98,`code`),mN(99,`description`),lg(),mN(100,` \xE9 um
resumo leg\xEDvel e `),Ml(101,`code`),mN(102,`confidence`),lg(),mN(103,` (`),Ml(104,`code`),mN(105,`0.0`),lg(),mN(106,` a `),Ml(107,`code`),mN(108,`1.0`),lg(),mN(109,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Ml(110,`code`),mN(111,`p-min-confidence`),lg(),mN(112,` para decidir entre os eventos `),Ml(113,`code`),mN(114,`p-result`),lg(),mN(115,` e `),Ml(116,`code`),mN(117,`p-low-confidence`),lg(),mN(118,`.`),lg(),Ml(119,`blockquote`)(120,`p`)(121,`strong`),mN(122,`Exemplo de implementação:`),lg(),mN(123,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),lg(),Ml(124,`ul`)(125,`li`),mN(126,`Endpoint público: `),Ml(127,`a`,8)(128,`code`),mN(129,`/v1/ai/filter`),lg()()(),Ml(130,`li`),mN(131,`Código-fonte: `),Ml(132,`a`,9),mN(133,`po-sample-api/src/ai/ai.service.ts`),lg()()()(),Ml(134,`h4`),mN(135,`Estados de comportamento`),lg(),Ml(136,`ul`)(137,`li`)(138,`strong`),mN(139,`Idle:`),lg(),mN(140,` aguardando a digitação da consulta.`),lg(),Ml(141,`li`)(142,`strong`),mN(143,`Loading:`),lg(),mN(144,` consulta em andamento (ícone de carregamento ativo).`),lg(),Ml(145,`li`)(146,`strong`),mN(147,`Aplicado:`),lg(),mN(148,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),lg(),Ml(149,`li`)(150,`strong`),mN(151,`Baixa confiança:`),lg(),mN(152,` quando `),Ml(153,`code`),mN(154,`confidence`),lg(),mN(155,` for menor que `),Ml(156,`code`),mN(157,`p-min-confidence`),lg(),mN(158,`, emite
`),Ml(159,`code`),mN(160,`p-low-confidence`),lg(),mN(161,` e não aplica o filtro automaticamente.`),lg(),Ml(162,`li`)(163,`strong`),mN(164,`Erro:`),lg(),mN(165,` quando a chamada falha, emite `),Ml(166,`code`),mN(167,`p-error`),lg(),mN(168,`.`),lg()(),Ml(169,`h4`),mN(170,`Tokens customizáveis`),lg(),Ml(171,`p`),mN(172,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(173,`blockquote`)(174,`p`),mN(175,`Para maiores informações, acesse o guia `),Ml(176,`a`,10),mN(177,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(178,`.`),lg()(),Ml(179,`table`)(180,`thead`)(181,`tr`)(182,`th`),mN(183,`Propriedade`),lg(),Ml(184,`th`),mN(185,`Descrição`),lg(),Ml(186,`th`),mN(187,`Valor Padrão`),lg()()(),Ml(188,`tbody`)(189,`tr`)(190,`td`)(191,`strong`),mN(192,`Default`),lg()(),ql(193,`td`)(194,`td`),lg(),Ml(195,`tr`)(196,`td`)(197,`code`),mN(198,`--font-family`),lg()(),Ml(199,`td`),mN(200,`Família tipográfica do campo`),lg(),Ml(201,`td`)(202,`code`),mN(203,`var(--font-family-theme)`),lg()()(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--font-size`),lg()(),Ml(208,`td`),mN(209,`Tamanho da fonte do campo`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--font-size)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`code`),mN(216,`--text-color`),lg()(),Ml(217,`td`),mN(218,`Cor do texto digitado`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-neutral-dark-90)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`code`),mN(225,`--text-color-placeholder`),lg()(),Ml(226,`td`),mN(227,`Cor do texto do placeholder`),lg(),Ml(228,`td`)(229,`code`),mN(230,`var(--color-neutral-light-30)`),lg()()(),Ml(231,`tr`)(232,`td`)(233,`code`),mN(234,`--color`),lg()(),Ml(235,`td`),mN(236,`Cor da borda do campo`),lg(),Ml(237,`td`)(238,`code`),mN(239,`var(--color-neutral-dark-70)`),lg()()(),Ml(240,`tr`)(241,`td`)(242,`code`),mN(243,`--background`),lg()(),Ml(244,`td`),mN(245,`Cor de fundo do campo`),lg(),Ml(246,`td`)(247,`code`),mN(248,`var(--color-neutral-light-05)`),lg()()(),Ml(249,`tr`)(250,`td`)(251,`code`),mN(252,`--border-radius`),lg()(),Ml(253,`td`),mN(254,`Raio da borda do campo`),lg(),Ml(255,`td`)(256,`code`),mN(257,`var(--border-radius-md)`),lg()()(),Ml(258,`tr`)(259,`td`)(260,`strong`),mN(261,`Ícones e divisória`),lg()(),ql(262,`td`)(263,`td`),lg(),Ml(264,`tr`)(265,`td`)(266,`code`),mN(267,`--color-icon-read`),lg()(),Ml(268,`td`),mN(269,`Cor do ícone de busca por IA`),lg(),Ml(270,`td`)(271,`code`),mN(272,`var(--color-neutral-dark-70)`),lg()()(),Ml(273,`tr`)(274,`td`)(275,`code`),mN(276,`--color-divider`),lg()(),Ml(277,`td`),mN(278,`Cor da divisória vertical entre o campo e o botão de busca`),lg(),Ml(279,`td`)(280,`code`),mN(281,`var(--color-neutral-mid-40)`),lg()()(),Ml(282,`tr`)(283,`td`)(284,`code`),mN(285,`--color-icon-processing`),lg()(),Ml(286,`td`),mN(287,`Cor do ícone exibido enquanto a consulta está sendo processada`),lg(),Ml(288,`td`)(289,`code`),mN(290,`var(--color-action-default)`),lg()()(),Ml(291,`tr`)(292,`td`)(293,`strong`),mN(294,`Hover`),lg()(),ql(295,`td`)(296,`td`),lg(),Ml(297,`tr`)(298,`td`)(299,`code`),mN(300,`--color-hover`),lg()(),Ml(301,`td`),mN(302,`Cor da borda no estado hover`),lg(),Ml(303,`td`)(304,`code`),mN(305,`var(--color-brand-01-dark)`),lg()()(),Ml(306,`tr`)(307,`td`)(308,`code`),mN(309,`--background-hover`),lg()(),Ml(310,`td`),mN(311,`Cor de fundo no estado hover`),lg(),Ml(312,`td`)(313,`code`),mN(314,`var(--color-brand-01-lightest)`),lg()()(),Ml(315,`tr`)(316,`td`)(317,`strong`),mN(318,`Focused`),lg()(),ql(319,`td`)(320,`td`),lg(),Ml(321,`tr`)(322,`td`)(323,`code`),mN(324,`--color-focused`),lg()(),Ml(325,`td`),mN(326,`Cor da borda no estado de foco`),lg(),Ml(327,`td`)(328,`code`),mN(329,`var(--color-action-default)`),lg()()(),Ml(330,`tr`)(331,`td`)(332,`code`),mN(333,`--outline-color-focused`),lg()(),Ml(334,`td`),mN(335,`Cor do outline no estado de foco`),lg(),Ml(336,`td`)(337,`code`),mN(338,`var(--color-action-focus)`),lg()()(),Ml(339,`tr`)(340,`td`)(341,`strong`),mN(342,`Disabled`),lg()(),ql(343,`td`)(344,`td`),lg(),Ml(345,`tr`)(346,`td`)(347,`code`),mN(348,`--color-disabled`),lg()(),Ml(349,`td`),mN(350,`Cor da borda no estado desabilitado`),lg(),Ml(351,`td`)(352,`code`),mN(353,`var(--color-neutral-light-30)`),lg()()(),Ml(354,`tr`)(355,`td`)(356,`code`),mN(357,`--background-disabled`),lg()(),Ml(358,`td`),mN(359,`Cor de fundo no estado desabilitado`),lg(),Ml(360,`td`)(361,`code`),mN(362,`var(--color-neutral-light-20)`),lg()()()()()(),Ml(363,`div`,11)(364,`h4`,12),mN(365,`Seletor`),lg(),Ml(366,`pre`,13),mN(367,`<po-search-ai
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
`),lg()(),Ml(368,`h4`,14),mN(369,`Propriedades`),lg(),Ml(370,`table`,15)(371,`tr`,16)(372,`th`,17),mN(373,`Nome`),lg(),Ml(374,`th`,17),mN(375,`Tipo`),lg(),Ml(376,`th`,17),mN(377,`Padrão`),lg(),Ml(378,`th`,17),mN(379,`Descrição`),lg()(),Ml(380,`tr`,18)(381,`td`,19)(382,`div`,20)(383,`span`,21),mN(384,` (p-clear)`),ql(385,`br`),lg()()(),Ml(386,`td`,22)(387,`code`,23),mN(388,`EventEmitter`),lg()(),Ml(389,`td`,24),mN(390,`-`),lg(),Ml(391,`td`,25)(392,`em`)(393,`strong`),mN(394,`(opcional)`),lg()(),Ml(395,`p`),mN(396,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),lg()()(),Ml(397,`tr`,18)(398,`td`,19)(399,`div`,26)(400,`span`,27),mN(401,` p-columns`),ql(402,`br`),lg()()(),Ml(403,`td`,22)(404,`code`,28),mN(405,`Array<PoSearchAiColumn>`),lg()(),Ml(406,`td`,24)(407,`p`)(408,`code`),mN(409,`[]`),lg()()(),Ml(410,`td`,25)(411,`em`)(412,`strong`),mN(413,`(opcional)`),lg()(),Ml(414,`p`),mN(415,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Ml(416,`code`),mN(417,`p-url`),lg(),mN(418,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),lg()()(),Ml(419,`tr`,18)(420,`td`,19)(421,`div`,20)(422,`span`,21),mN(423,` (p-error)`),ql(424,`br`),lg()()(),Ml(425,`td`,22)(426,`code`,23),mN(427,`EventEmitter`),lg()(),Ml(428,`td`,24),mN(429,`-`),lg(),Ml(430,`td`,25)(431,`em`)(432,`strong`),mN(433,`(opcional)`),lg()(),Ml(434,`p`),mN(435,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Ml(436,`code`),mN(437,`PoSearchAiError`),lg(),mN(438,`.`),lg()()(),Ml(439,`tr`,18)(440,`td`,19)(441,`div`,26)(442,`span`,27),mN(443,` p-literals`),ql(444,`br`),lg()()(),Ml(445,`td`,22)(446,`code`,29),mN(447,`PoSearchAiLiterals`),lg()(),Ml(448,`td`,24),mN(449,`-`),lg(),Ml(450,`td`,25)(451,`em`)(452,`strong`),mN(453,`(opcional)`),lg()(),Ml(454,`p`),mN(455,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),lg()()(),Ml(456,`tr`,18)(457,`td`,19)(458,`div`,20)(459,`span`,21),mN(460,` (p-low-confidence)`),ql(461,`br`),lg()()(),Ml(462,`td`,22)(463,`code`,23),mN(464,`EventEmitter`),lg()(),Ml(465,`td`,24),mN(466,`-`),lg(),Ml(467,`td`,25)(468,`em`)(469,`strong`),mN(470,`(opcional)`),lg()(),Ml(471,`p`),mN(472,`Evento disparado quando a confiança da resposta da IA é menor que `),Ml(473,`code`),mN(474,`p-min-confidence`),lg(),mN(475,`.
Emite um objeto `),Ml(476,`code`),mN(477,`PoSearchAiResult`),lg(),mN(478,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),lg()()(),Ml(479,`tr`,18)(480,`td`,19)(481,`div`,26)(482,`span`,27),mN(483,` p-min-confidence`),ql(484,`br`),lg()()(),Ml(485,`td`,22)(486,`code`,30),mN(487,`number`),lg()(),Ml(488,`td`,24)(489,`p`)(490,`code`),mN(491,`0.5`),lg()()(),Ml(492,`td`,25)(493,`em`)(494,`strong`),mN(495,`(opcional)`),lg()(),Ml(496,`p`),mN(497,`Nível mínimo de confiança (`),Ml(498,`code`),mN(499,`0.0`),lg(),mN(500,` a `),Ml(501,`code`),mN(502,`1.0`),lg(),mN(503,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Ml(504,`code`),mN(505,`p-low-confidence`),lg(),mN(506,` \xE9
emitido em vez de `),Ml(507,`code`),mN(508,`p-result`),lg(),mN(509,`.`),lg()()(),Ml(510,`tr`,18)(511,`td`,19)(512,`div`,20)(513,`span`,21),mN(514,` (p-result)`),ql(515,`br`),lg()()(),Ml(516,`td`,22)(517,`code`,23),mN(518,`EventEmitter`),lg()(),Ml(519,`td`,24),mN(520,`-`),lg(),Ml(521,`td`,25)(522,`em`)(523,`strong`),mN(524,`(opcional)`),lg()(),Ml(525,`p`),mN(526,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Ml(527,`code`),mN(528,`p-min-confidence`),lg(),mN(529,`. Emite um objeto `),Ml(530,`code`),mN(531,`PoSearchAiResult`),lg(),mN(532,`.`),lg(),Ml(533,`p`),mN(534,`O campo `),Ml(535,`code`),mN(536,`type`),lg(),mN(537,` do resultado indica como o consumidor deve interpretar a resposta:`),lg(),Ml(538,`ul`)(539,`li`)(540,`p`)(541,`strong`)(542,`code`),mN(543,`filter`),lg()(),Ml(544,`em`),mN(545,`(padrão)`),lg(),mN(546,`: a IA retornou um filtro estruturado (ex: OData). Use `),Ml(547,`code`),mN(548,`result.filter`),lg(),mN(549,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Ml(550,`code`),mN(551,`po-table`),lg(),mN(552,` via `),Ml(553,`code`),mN(554,`p-filter`),lg(),mN(555,`.`),lg()(),Ml(556,`li`)(557,`p`)(558,`strong`)(559,`code`),mN(560,`chat`),lg()(),mN(561,`: a IA retornou uma resposta conversacional. Use `),Ml(562,`code`),mN(563,`result.data`),lg(),mN(564,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),lg()(),Ml(565,`li`)(566,`p`)(567,`strong`)(568,`code`),mN(569,`custom`),lg()(),mN(570,`: a IA retornou um payload genérico definido pelo backend. Use `),Ml(571,`code`),mN(572,`result.data`),lg(),mN(573,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),lg()()()()(),Ml(574,`tr`,18)(575,`td`,19)(576,`div`,26)(577,`span`,27),mN(578,` p-timeout`),ql(579,`br`),lg()()(),Ml(580,`td`,22)(581,`code`,30),mN(582,`number`),lg()(),Ml(583,`td`,24)(584,`p`)(585,`code`),mN(586,`10000`),lg()()(),Ml(587,`td`,25)(588,`em`)(589,`strong`),mN(590,`(opcional)`),lg()(),Ml(591,`p`),mN(592,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Ml(593,`code`),mN(594,`p-error`),lg(),mN(595,` com `),Ml(596,`code`),mN(597,`statusCode 408`),lg(),mN(598,`.`),lg()()(),Ml(599,`tr`,18)(600,`td`,19)(601,`div`,26)(602,`span`,27),mN(603,` p-url`),ql(604,`br`),lg()()(),Ml(605,`td`,22)(606,`code`,31),mN(607,`string`),lg()(),Ml(608,`td`,24),mN(609,`-`),lg(),Ml(610,`td`,25)(611,`em`)(612,`strong`),mN(613,`(opcional)`),lg()(),Ml(614,`p`),mN(615,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Ml(616,`code`),mN(617,`{ query, columns }`),lg(),mN(618,` via `),Ml(619,`code`),mN(620,`POST`),lg(),mN(621,` e deve retornar `),Ml(622,`code`),mN(623,`{ filter, description, confidence }`),lg(),mN(624,`.`),lg(),Ml(625,`blockquote`)(626,`p`),mN(627,`A integração com a LLM e a guarda de chaves devem ocorrer `),Ml(628,`strong`),mN(629,`no backend`),lg(),mN(630,`, nunca no client-side.`),lg()()()()(),Ml(631,`h3`,14),mN(632,`Métodos`),lg(),Ml(633,`table`,32)(634,`tr`,18)(635,`th`,33)(636,`div`,26)(637,`h4`)(638,`span`,27),mN(639,` search `),lg()()()()(),Ml(640,`tr`,25)(641,`td`,25)(642,`p`),mN(643,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Ml(644,`code`),mN(645,`p-url`),lg(),mN(646,`.`),lg(),Ml(647,`p`),mN(648,`Caso a consulta esteja vazia ou `),Ml(649,`code`),mN(650,`p-url`),lg(),mN(651,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Ml(652,`code`),mN(653,`p-result`),lg(),mN(654,` (ou `),Ml(655,`code`),mN(656,`p-low-confidence`),lg(),mN(657,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Ml(658,`code`),mN(659,`p-error`),lg(),mN(660,`.`),lg()()()(),ql(661,`br`),Ml(662,`table`,32)(663,`tr`,18)(664,`th`,33)(665,`div`,26)(666,`h4`)(667,`span`,27),mN(668,` clearSearch `),lg()()()()(),Ml(669,`tr`,25)(670,`td`,25)(671,`p`),mN(672,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Ml(673,`code`),mN(674,`p-clear`),lg(),mN(675,`.`),lg()()()(),ql(676,`br`),Ml(677,`table`,32)(678,`tr`,18)(679,`th`,33)(680,`div`,26)(681,`h4`)(682,`span`,27),mN(683,` onSearchKeydown `),lg()()()()(),Ml(684,`tr`,25)(685,`td`,25)(686,`p`),mN(687,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Ml(688,`code`),mN(689,`Enter`),lg(),mN(690,`.`),lg()()()(),Ml(691,`h5`)(692,`b`),mN(693,`Parâmetros`),lg()(),Ml(694,`table`,15)(695,`tr`,16)(696,`th`,17),mN(697,`Nome`),lg(),Ml(698,`th`,17),mN(699,`Tipo`),lg(),Ml(700,`th`,17),mN(701,`Descrição`),lg()(),Ml(702,`tr`,18)(703,`td`,19),mN(704,` event`),lg(),ql(705,`td`,22),Ml(706,`td`,25)(707,`p`),mN(708,`Evento de teclado.`),lg()()()(),ql(709,`br`),Ml(710,`h3`),mN(711,`Interfaces`),lg(),Ml(712,`h4`,34)(713,`code`,5),mN(714,`PoSearchAiColumn`),lg()(),Ml(715,`div`,2)(716,`p`),mN(717,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),lg(),Ml(718,`p`),mN(719,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),lg()(),Ml(720,`h4`,14),mN(721,`Propriedades`),lg(),Ml(722,`table`,15)(723,`tr`,16)(724,`th`,17),mN(725,`Nome`),lg(),Ml(726,`th`,17),mN(727,`Tipo`),lg(),Ml(728,`th`,17),mN(729,`Descrição`),lg()(),Ml(730,`tr`,18)(731,`td`,19)(732,`div`,26)(733,`span`,27),mN(734,` label`),ql(735,`br`),lg()()(),Ml(736,`td`,22)(737,`code`,31),mN(738,`string`),lg()(),Ml(739,`td`,25)(740,`p`),mN(741,`Rótulo legível exibido ao usuário (ex: `),Ml(742,`code`),mN(743,`Nome`),lg(),mN(744,`, `),Ml(745,`code`),mN(746,`Idade`),lg(),mN(747,`, `),Ml(748,`code`),mN(749,`Cidade`),lg(),mN(750,`).`),lg()()(),Ml(751,`tr`,18)(752,`td`,19)(753,`div`,26)(754,`span`,27),mN(755,` property`),ql(756,`br`),lg()()(),Ml(757,`td`,22)(758,`code`,31),mN(759,`string`),lg()(),Ml(760,`td`,25)(761,`p`),mN(762,`Nome da propriedade do campo (ex: `),Ml(763,`code`),mN(764,`name`),lg(),mN(765,`, `),Ml(766,`code`),mN(767,`age`),lg(),mN(768,`, `),Ml(769,`code`),mN(770,`city`),lg(),mN(771,`).`),lg()()(),Ml(772,`tr`,18)(773,`td`,19)(774,`div`,26)(775,`span`,27),mN(776,` type`),ql(777,`br`),lg()()(),Ml(778,`td`,22)(779,`code`,31),mN(780,`string`),lg()(),Ml(781,`td`,25)(782,`em`)(783,`strong`),mN(784,`(opcional)`),lg()(),Ml(785,`p`),mN(786,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),lg(),Ml(787,`p`),mN(788,`Valores comuns: `),Ml(789,`code`),mN(790,`string`),lg(),mN(791,`, `),Ml(792,`code`),mN(793,`number`),lg(),mN(794,`, `),Ml(795,`code`),mN(796,`date`),lg(),mN(797,`, `),Ml(798,`code`),mN(799,`currency`),lg(),mN(800,`, `),Ml(801,`code`),mN(802,`boolean`),lg(),mN(803,`.`),lg()()()(),Ml(804,`h4`,34)(805,`code`,5),mN(806,`PoSearchAiLiterals`),lg()(),Ml(807,`div`,2)(808,`p`),mN(809,`Interface para definição das literais usadas no `),Ml(810,`code`),mN(811,`po-search-ai`),lg(),mN(812,`.`),lg()(),Ml(813,`h4`,14),mN(814,`Propriedades`),lg(),Ml(815,`table`,15)(816,`tr`,16)(817,`th`,17),mN(818,`Nome`),lg(),Ml(819,`th`,17),mN(820,`Tipo`),lg(),Ml(821,`th`,17),mN(822,`Descrição`),lg()(),Ml(823,`tr`,18)(824,`td`,19)(825,`div`,26)(826,`span`,27),mN(827,` clean`),ql(828,`br`),lg()()(),Ml(829,`td`,22)(830,`code`,31),mN(831,`string`),lg()(),Ml(832,`td`,25)(833,`em`)(834,`strong`),mN(835,`(opcional)`),lg()(),Ml(836,`p`),mN(837,`Texto de acessibilidade do botão de limpar o campo.`),lg()()(),Ml(838,`tr`,18)(839,`td`,19)(840,`div`,26)(841,`span`,27),mN(842,` errorMessage`),ql(843,`br`),lg()()(),Ml(844,`td`,22)(845,`code`,31),mN(846,`string`),lg()(),Ml(847,`td`,25)(848,`em`)(849,`strong`),mN(850,`(opcional)`),lg()(),Ml(851,`p`),mN(852,`Mensagem exibida quando a busca com IA falha.`),lg()()()(),Ml(853,`h4`,34)(854,`code`,5),mN(855,`PoSearchAiRequest`),lg()(),Ml(856,`div`,2)(857,`p`),mN(858,`Interface que define o payload enviado ao endpoint de IA configurado via `),Ml(859,`code`),mN(860,`p-url`),lg(),mN(861,`.`),lg(),Ml(862,`p`),mN(863,`O componente é `),Ml(864,`strong`),mN(865,`agnóstico ao provedor de IA`),lg(),mN(866,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Ml(867,`code`),mN(868,`PoSearchAiResponse`),lg(),mN(869,`.`),lg()(),Ml(870,`h4`,14),mN(871,`Propriedades`),lg(),Ml(872,`table`,15)(873,`tr`,16)(874,`th`,17),mN(875,`Nome`),lg(),Ml(876,`th`,17),mN(877,`Tipo`),lg(),Ml(878,`th`,17),mN(879,`Descrição`),lg()(),Ml(880,`tr`,18)(881,`td`,19)(882,`div`,26)(883,`span`,27),mN(884,` columns`),ql(885,`br`),lg()()(),Ml(886,`td`,22)(887,`code`,28),mN(888,`Array<PoSearchAiColumn>`),lg()(),Ml(889,`td`,25)(890,`p`),mN(891,`Metadados dos campos disponíveis para a busca (ver `),Ml(892,`code`),mN(893,`PoSearchAiColumn`),lg(),mN(894,`).`),lg()()(),Ml(895,`tr`,18)(896,`td`,19)(897,`div`,26)(898,`span`,27),mN(899,` query`),ql(900,`br`),lg()()(),Ml(901,`td`,22)(902,`code`,31),mN(903,`string`),lg()(),Ml(904,`td`,25)(905,`p`),mN(906,`Texto em linguagem natural digitado pelo usuário.`),lg()()()(),Ml(907,`h4`,34)(908,`code`,5),mN(909,`PoSearchAiResponse`),lg()(),Ml(910,`div`,2)(911,`p`),mN(912,`Interface que define a resposta esperada do endpoint de IA configurado via `),Ml(913,`code`),mN(914,`p-url`),lg(),mN(915,`.`),lg()(),Ml(916,`h4`,14),mN(917,`Propriedades`),lg(),Ml(918,`table`,15)(919,`tr`,16)(920,`th`,17),mN(921,`Nome`),lg(),Ml(922,`th`,17),mN(923,`Tipo`),lg(),Ml(924,`th`,17),mN(925,`Descrição`),lg()(),Ml(926,`tr`,18)(927,`td`,19)(928,`div`,26)(929,`span`,27),mN(930,` confidence`),ql(931,`br`),lg()()(),Ml(932,`td`,22)(933,`code`,30),mN(934,`number`),lg()(),Ml(935,`td`,25)(936,`em`)(937,`strong`),mN(938,`(opcional)`),lg()(),Ml(939,`p`),mN(940,`Nível de confiança da interpretação da IA, em um intervalo de `),Ml(941,`code`),mN(942,`0.0`),lg(),mN(943,` a `),Ml(944,`code`),mN(945,`1.0`),lg(),mN(946,`.`),lg(),Ml(947,`p`),mN(948,`Utilizado em conjunto com `),Ml(949,`code`),mN(950,`p-min-confidence`),lg(),mN(951,` para decidir se o resultado é confiável.`),lg()()(),Ml(952,`tr`,18)(953,`td`,19)(954,`div`,26)(955,`span`,27),mN(956,` data`),ql(957,`br`),lg()()(),Ml(958,`td`,22)(959,`code`,35),mN(960,`Record<string, any>`),lg()(),Ml(961,`td`,25)(962,`em`)(963,`strong`),mN(964,`(opcional)`),lg()(),Ml(965,`p`),mN(966,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),lg(),Ml(967,`p`),mN(968,`Utilizado quando `),Ml(969,`code`),mN(970,`type`),lg(),mN(971,` é `),Ml(972,`code`),mN(973,`'chat'`),lg(),mN(974,` ou `),Ml(975,`code`),mN(976,`'custom'`),lg(),mN(977,`.`),lg()()(),Ml(978,`tr`,18)(979,`td`,19)(980,`div`,26)(981,`span`,27),mN(982,` description`),ql(983,`br`),lg()()(),Ml(984,`td`,22)(985,`code`,31),mN(986,`string`),lg()(),Ml(987,`td`,25)(988,`em`)(989,`strong`),mN(990,`(opcional)`),lg()(),Ml(991,`p`),mN(992,`Descrição legível, em linguagem natural, da resposta.`),lg()()(),Ml(993,`tr`,18)(994,`td`,19)(995,`div`,26)(996,`span`,27),mN(997,` filter`),ql(998,`br`),lg()()(),Ml(999,`td`,22)(1e3,`code`,31),mN(1001,`string`),lg()(),Ml(1002,`td`,25)(1003,`em`)(1004,`strong`),mN(1005,`(opcional)`),lg()(),Ml(1006,`p`),mN(1007,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Ml(1008,`code`),mN(1009,`age gt 30 and city eq 'São Paulo'`),lg(),mN(1010,`).`),lg(),Ml(1011,`p`),mN(1012,`Utilizado quando `),Ml(1013,`code`),mN(1014,`type`),lg(),mN(1015,` é `),Ml(1016,`code`),mN(1017,`'filter'`),lg(),mN(1018,`.`),lg()()(),Ml(1019,`tr`,18)(1020,`td`,19)(1021,`div`,26)(1022,`span`,27),mN(1023,` type`),ql(1024,`br`),lg()()(),Ml(1025,`td`,22)(1026,`code`,36),mN(1027,`PoSearchAiResponseType`),lg()(),Ml(1028,`td`,25)(1029,`em`)(1030,`strong`),mN(1031,`(opcional)`),lg()(),Ml(1032,`p`),mN(1033,`Tipo da resposta retornada pela IA.`),lg(),Ml(1034,`p`),mN(1035,`Quando omitido, o componente infere `),Ml(1036,`code`),mN(1037,`'filter'`),lg(),mN(1038,` se `),Ml(1039,`code`),mN(1040,`filter`),lg(),mN(1041,` estiver presente,
caso contr\xE1rio assume `),Ml(1042,`code`),mN(1043,`'custom'`),lg(),mN(1044,`.`),lg()()()(),Ml(1045,`h4`,34)(1046,`code`,5),mN(1047,`PoSearchAiResult`),lg()(),Ml(1048,`div`,2)(1049,`p`),mN(1050,`Interface que define o objeto emitido pelos eventos `),Ml(1051,`code`),mN(1052,`p-result`),lg(),mN(1053,` e `),Ml(1054,`code`),mN(1055,`p-low-confidence`),lg(),mN(1056,`.`),lg()(),Ml(1057,`h4`,14),mN(1058,`Propriedades`),lg(),Ml(1059,`table`,15)(1060,`tr`,16)(1061,`th`,17),mN(1062,`Nome`),lg(),Ml(1063,`th`,17),mN(1064,`Tipo`),lg(),Ml(1065,`th`,17),mN(1066,`Descrição`),lg()(),Ml(1067,`tr`,18)(1068,`td`,19)(1069,`div`,26)(1070,`span`,27),mN(1071,` confidence`),ql(1072,`br`),lg()()(),Ml(1073,`td`,22)(1074,`code`,30),mN(1075,`number`),lg()(),Ml(1076,`td`,25)(1077,`em`)(1078,`strong`),mN(1079,`(opcional)`),lg()(),Ml(1080,`p`),mN(1081,`Nível de confiança da interpretação (`),Ml(1082,`code`),mN(1083,`0.0`),lg(),mN(1084,` a `),Ml(1085,`code`),mN(1086,`1.0`),lg(),mN(1087,`).`),lg()()(),Ml(1088,`tr`,18)(1089,`td`,19)(1090,`div`,26)(1091,`span`,27),mN(1092,` data`),ql(1093,`br`),lg()()(),Ml(1094,`td`,22)(1095,`code`,35),mN(1096,`Record<string, any>`),lg()(),Ml(1097,`td`,25)(1098,`em`)(1099,`strong`),mN(1100,`(opcional)`),lg()(),Ml(1101,`p`),mN(1102,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),lg()()(),Ml(1103,`tr`,18)(1104,`td`,19)(1105,`div`,26)(1106,`span`,27),mN(1107,` description`),ql(1108,`br`),lg()()(),Ml(1109,`td`,22)(1110,`code`,31),mN(1111,`string`),lg()(),Ml(1112,`td`,25)(1113,`em`)(1114,`strong`),mN(1115,`(opcional)`),lg()(),Ml(1116,`p`),mN(1117,`Descrição legível da resposta.`),lg()()(),Ml(1118,`tr`,18)(1119,`td`,19)(1120,`div`,26)(1121,`span`,27),mN(1122,` filter`),ql(1123,`br`),lg()()(),Ml(1124,`td`,22)(1125,`code`,31),mN(1126,`string`),lg()(),Ml(1127,`td`,25)(1128,`em`)(1129,`strong`),mN(1130,`(opcional)`),lg()(),Ml(1131,`p`),mN(1132,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Ml(1133,`code`),mN(1134,`type`),lg(),mN(1135,` é `),Ml(1136,`code`),mN(1137,`'filter'`),lg(),mN(1138,`.`),lg()()(),Ml(1139,`tr`,18)(1140,`td`,19)(1141,`div`,26)(1142,`span`,27),mN(1143,` query`),ql(1144,`br`),lg()()(),Ml(1145,`td`,22)(1146,`code`,31),mN(1147,`string`),lg()(),Ml(1148,`td`,25)(1149,`p`),mN(1150,`Texto original digitado pelo usuário.`),lg()()(),Ml(1151,`tr`,18)(1152,`td`,19)(1153,`div`,26)(1154,`span`,27),mN(1155,` type`),ql(1156,`br`),lg()()(),Ml(1157,`td`,22)(1158,`code`,36),mN(1159,`PoSearchAiResponseType`),lg()(),Ml(1160,`td`,25)(1161,`p`),mN(1162,`Tipo da resposta retornada pela IA.`),lg()()()(),Ml(1163,`h4`,34)(1164,`code`,5),mN(1165,`PoSearchAiError`),lg()(),Ml(1166,`div`,2)(1167,`p`),mN(1168,`Interface que define o objeto emitido pelo evento `),Ml(1169,`code`),mN(1170,`p-error`),lg(),mN(1171,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),lg()(),Ml(1172,`h4`,14),mN(1173,`Propriedades`),lg(),Ml(1174,`table`,15)(1175,`tr`,16)(1176,`th`,17),mN(1177,`Nome`),lg(),Ml(1178,`th`,17),mN(1179,`Tipo`),lg(),Ml(1180,`th`,17),mN(1181,`Descrição`),lg()(),Ml(1182,`tr`,18)(1183,`td`,19)(1184,`div`,26)(1185,`span`,27),mN(1186,` message`),ql(1187,`br`),lg()()(),Ml(1188,`td`,22)(1189,`code`,31),mN(1190,`string`),lg()(),Ml(1191,`td`,25)(1192,`p`),mN(1193,`Mensagem de erro.`),lg()()(),Ml(1194,`tr`,18)(1195,`td`,19)(1196,`div`,26)(1197,`span`,27),mN(1198,` query`),ql(1199,`br`),lg()()(),Ml(1200,`td`,22)(1201,`code`,31),mN(1202,`string`),lg()(),Ml(1203,`td`,25)(1204,`p`),mN(1205,`Texto original digitado pelo usuário.`),lg()()(),Ml(1206,`tr`,18)(1207,`td`,19)(1208,`div`,26)(1209,`span`,27),mN(1210,` statusCode`),ql(1211,`br`),lg()()(),Ml(1212,`td`,22)(1213,`code`,30),mN(1214,`number`),lg()(),Ml(1215,`td`,25)(1216,`p`),mN(1217,`Código HTTP do erro (ex: `),Ml(1218,`code`),mN(1219,`500`),lg(),mN(1220,`, `),Ml(1221,`code`),mN(1222,`408`),lg(),mN(1223,` para timeout).`),lg()()()(),Ml(1224,`h3`),mN(1225,`Enums`),lg(),Ml(1226,`h4`,4)(1227,`code`,5),mN(1228,`PoSearchAiResponseType`),lg()(),Ml(1229,`div`,2)(1230,`p`),mN(1231,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),lg()(),Ml(1232,`h4`,14),mN(1233,`Propriedades`),lg(),Ml(1234,`table`,15)(1235,`tr`,16)(1236,`th`,17),mN(1237,`Nome`),lg(),Ml(1238,`th`,17),mN(1239,`Descrição`),lg()(),Ml(1240,`tr`,18)(1241,`td`,19)(1242,`div`,26)(1243,`span`,27),mN(1244,` filter`),ql(1245,`br`),lg()()(),Ml(1246,`td`,25)(1247,`p`),mN(1248,`Resposta contendo um filtro estruturado (ex: OData).`),lg()()(),Ml(1249,`tr`,18)(1250,`td`,19)(1251,`div`,26)(1252,`span`,27),mN(1253,` chat`),ql(1254,`br`),lg()()(),Ml(1255,`td`,25)(1256,`p`),mN(1257,`Resposta conversacional em linguagem natural.`),lg()()(),Ml(1258,`tr`,18)(1259,`td`,19)(1260,`div`,26)(1261,`span`,27),mN(1262,` custom`),ql(1263,`br`),lg()()(),Ml(1264,`td`,25)(1265,`p`),mN(1266,`Payload genérico definido pelo consumidor.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-search-ai-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-search-ai-basic-view`)(6,`sample-po-search-ai-labs-view`)(7,`sample-po-search-ai-result-view`)(8,`sample-po-search-ai-filter-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ge,fe,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(Ge),NL]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,Te]})}return o})();export{vt as DocPoSearchAiModule};