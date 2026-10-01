import{$r as Vx,Cr as Nx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Ot as WH,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,gi as bw,in as jye,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,w as Bbe,wa as zx,xa as xx,yr as Mx}from"./main-AB5D2EEN.js";var ge=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&ql(0,`po-search-ai`,0)},dependencies:[WH],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return o})();function qe(o,O){if(o&1&&(Ml(0,`po-container`,4)(1,`p`)(2,`strong`),mN(3,`Query:`),lg(),mN(4),lg(),Ml(5,`p`)(6,`strong`),mN(7,`Filtro:`),lg(),mN(8),lg(),Ml(9,`p`)(10,`strong`),mN(11,`Descrição:`),lg(),mN(12),lg(),Ml(13,`p`)(14,`strong`),mN(15,`Confiança:`),lg(),mN(16),lg()()),o&2){let a=zx();Up(4),gg(` `,a.result.query),Up(4),gg(` `,a.result.filter),Up(4),gg(` `,a.result.description),Up(4),gg(` `,a.result.confidence)}}var fe=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Vx();Ml(0,`po-search-ai`,1),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(m){return i.onResult(m)}),lg(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),lg(),Tx(4,qe,17,4,`po-container`,4),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.label,m)||(i.label=m),Jy(m)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.help,m)||(i.help=m),Jy(m)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.helperText,m)||(i.helperText=m),Jy(m)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.placeholder,m)||(i.placeholder=m),Jy(m)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.errorPattern,m)||(i.errorPattern=m),Jy(m)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.url,m)||(i.url=m),Jy(m)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.timeout,m)||(i.timeout=m),Jy(m)}),lg(),f0(),Ml(15,`po-decimal`,12),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.minConfidence,m)||(i.minConfidence=m),Jy(m)}),lg(),f0(),Ml(16,`po-checkbox-group`,13),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.properties,m)||(i.properties=m),Jy(m)}),lg(),f0(),Ml(17,`po-radio-group`,14),Mw(`ngModelChange`,function(m){return Qy(d),yN(i.size,m)||(i.size=m),Jy(m)}),lg(),f0(),Ml(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return Qy(d),Yx(7).reset(),Jy(i.restore())}),lg()()()}l&2&&(cw(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),Up(3),cw(`p-value`,i.event),Up(),Mx(i.result?4:-1),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.url),p0(),Up(),Tw(`ngModel`,i.timeout),p0(),Up(),Tw(`ngModel`,i.minConfidence),cw(`p-decimals-length`,2),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,wp,nb,G4,jye,lU,WH,xbe,q0e,kbe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return o})();function Re(o,O){if(o&1&&(Ml(0,`po-container`,1)(1,`p`)(2,`strong`),mN(3,`Query:`),lg(),mN(4),lg(),Ml(5,`p`)(6,`strong`),mN(7,`Filtro:`),lg(),mN(8),lg(),Ml(9,`p`)(10,`strong`),mN(11,`Descrição:`),lg(),mN(12),lg(),Ml(13,`p`)(14,`strong`),mN(15,`Confiança:`),lg(),mN(16),lg()()),o&2){let a=zx();Up(4),gg(` `,a.result.query),Up(4),gg(` `,a.result.filter),Up(4),gg(` `,a.result.description),Up(4),gg(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Ml(0,`po-search-ai`,0),ht(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),lg(),Tx(1,Re,17,4,`po-container`,1)),l&2&&(cw(`p-columns`,i.columns),Up(),Mx(i.result?1:-1))},dependencies:[wp,WH],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO AI Search - Result`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search-ai
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-ai-filter`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,We,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoSearchAiComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-search-ai`),lg(),mN(26,` é um componente de `),Ml(27,`strong`),mN(28,`busca em linguagem natural`),lg(),mN(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Ml(30,`em`),mN(31,`"clientes de SP com saldo acima de R$ 500"`),lg(),mN(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Ml(33,`a`,6)(34,`code`),mN(35,`po-table`),lg()(),mN(36,`.`),lg(),Ml(37,`p`),mN(38,`O componente é `),Ml(39,`strong`),mN(40,`agnóstico ao provedor de IA`),lg(),mN(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Ml(42,`code`),mN(43,`p-url`),lg(),mN(44,`, que recebe `),Ml(45,`code`),mN(46,`{ query, columns }`),lg(),mN(47,` e deve retornar
`),Ml(48,`code`),mN(49,`{ filter, description, confidence }`),lg(),mN(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),lg(),Ml(51,`p`),mN(52,`Por herdar de `),Ml(53,`code`),mN(54,`po-input`),lg(),mN(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Ml(56,`code`),mN(57,`template-driven`),lg(),mN(58,` e `),Ml(59,`code`),mN(60,`reactive`),lg(),mN(61,`.`),lg(),Ml(62,`h4`),mN(63,`Endpoint de IA (backend)`),lg(),Ml(64,`p`),mN(65,`O componente `),Ml(66,`strong`),mN(67,`não conversa diretamente com a LLM`),lg(),mN(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Ml(69,`code`),mN(70,`p-url`),lg(),mN(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),lg(),Ml(72,`p`),mN(73,`O contrato é simples. O componente faz um `),Ml(74,`code`),mN(75,`POST`),lg(),mN(76,` enviando:`),lg(),Ml(77,`pre`)(78,`code`,7),mN(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),lg()(),Ml(80,`p`),mN(81,`E o endpoint deve responder com:`),lg(),Ml(82,`pre`)(83,`code`,7),mN(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),lg()(),Ml(85,`p`),mN(86,`Onde `),Ml(87,`code`),mN(88,`filter`),lg(),mN(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),Ml(90,`code`),mN(91,`description`),lg(),mN(92,` \xE9 um
resumo leg\xEDvel e `),Ml(93,`code`),mN(94,`confidence`),lg(),mN(95,` (`),Ml(96,`code`),mN(97,`0.0`),lg(),mN(98,` a `),Ml(99,`code`),mN(100,`1.0`),lg(),mN(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Ml(102,`code`),mN(103,`p-min-confidence`),lg(),mN(104,` para decidir entre os eventos `),Ml(105,`code`),mN(106,`p-result`),lg(),mN(107,` e `),Ml(108,`code`),mN(109,`p-low-confidence`),lg(),mN(110,`.`),lg(),Ml(111,`blockquote`)(112,`p`)(113,`strong`),mN(114,`Exemplo de implementação:`),lg(),mN(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),lg(),Ml(116,`ul`)(117,`li`),mN(118,`Endpoint público: `),Ml(119,`a`,8)(120,`code`),mN(121,`/v1/ai/filter`),lg()()(),Ml(122,`li`),mN(123,`Código-fonte: `),Ml(124,`a`,9),mN(125,`po-sample-api/src/ai/ai.service.ts`),lg()()()(),Ml(126,`h4`),mN(127,`Estados de comportamento`),lg(),Ml(128,`ul`)(129,`li`)(130,`strong`),mN(131,`Idle:`),lg(),mN(132,` aguardando a digitação da consulta.`),lg(),Ml(133,`li`)(134,`strong`),mN(135,`Loading:`),lg(),mN(136,` consulta em andamento (ícone de carregamento ativo).`),lg(),Ml(137,`li`)(138,`strong`),mN(139,`Aplicado:`),lg(),mN(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),lg(),Ml(141,`li`)(142,`strong`),mN(143,`Baixa confiança:`),lg(),mN(144,` quando `),Ml(145,`code`),mN(146,`confidence`),lg(),mN(147,` for menor que `),Ml(148,`code`),mN(149,`p-min-confidence`),lg(),mN(150,`, emite
`),Ml(151,`code`),mN(152,`p-low-confidence`),lg(),mN(153,` e não aplica o filtro automaticamente.`),lg(),Ml(154,`li`)(155,`strong`),mN(156,`Erro:`),lg(),mN(157,` quando a chamada falha, emite `),Ml(158,`code`),mN(159,`p-error`),lg(),mN(160,`.`),lg()(),Ml(161,`h4`),mN(162,`Tokens customizáveis`),lg(),Ml(163,`p`),mN(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(165,`blockquote`)(166,`p`),mN(167,`Para maiores informações, acesse o guia `),Ml(168,`a`,10),mN(169,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(170,`.`),lg()(),Ml(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),mN(175,`Propriedade`),lg(),Ml(176,`th`),mN(177,`Descrição`),lg(),Ml(178,`th`),mN(179,`Valor Padrão`),lg()()(),Ml(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),mN(184,`Default`),lg()(),ql(185,`td`)(186,`td`),lg(),Ml(187,`tr`)(188,`td`)(189,`code`),mN(190,`--font-family`),lg()(),Ml(191,`td`),mN(192,`Família tipográfica do campo`),lg(),Ml(193,`td`)(194,`code`),mN(195,`var(--font-family-theme)`),lg()()(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--font-size`),lg()(),Ml(200,`td`),mN(201,`Tamanho da fonte do campo`),lg(),Ml(202,`td`)(203,`code`),mN(204,`var(--font-size)`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`code`),mN(208,`--text-color`),lg()(),Ml(209,`td`),mN(210,`Cor do texto digitado`),lg(),Ml(211,`td`)(212,`code`),mN(213,`var(--color-neutral-dark-90)`),lg()()(),Ml(214,`tr`)(215,`td`)(216,`code`),mN(217,`--text-color-placeholder`),lg()(),Ml(218,`td`),mN(219,`Cor do texto do placeholder`),lg(),Ml(220,`td`)(221,`code`),mN(222,`var(--color-neutral-light-30)`),lg()()(),Ml(223,`tr`)(224,`td`)(225,`code`),mN(226,`--color`),lg()(),Ml(227,`td`),mN(228,`Cor da borda do campo`),lg(),Ml(229,`td`)(230,`code`),mN(231,`var(--color-neutral-dark-70)`),lg()()(),Ml(232,`tr`)(233,`td`)(234,`code`),mN(235,`--background`),lg()(),Ml(236,`td`),mN(237,`Cor de fundo do campo`),lg(),Ml(238,`td`)(239,`code`),mN(240,`var(--color-neutral-light-05)`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`code`),mN(244,`--border-radius`),lg()(),Ml(245,`td`),mN(246,`Raio da borda do campo`),lg(),Ml(247,`td`)(248,`code`),mN(249,`var(--border-radius-md)`),lg()()(),Ml(250,`tr`)(251,`td`)(252,`strong`),mN(253,`Ícones e divisória`),lg()(),ql(254,`td`)(255,`td`),lg(),Ml(256,`tr`)(257,`td`)(258,`code`),mN(259,`--color-icon-read`),lg()(),Ml(260,`td`),mN(261,`Cor do ícone de busca por IA`),lg(),Ml(262,`td`)(263,`code`),mN(264,`var(--color-neutral-dark-70)`),lg()()(),Ml(265,`tr`)(266,`td`)(267,`code`),mN(268,`--color-divider`),lg()(),Ml(269,`td`),mN(270,`Cor da divisória vertical entre o campo e o botão de busca`),lg(),Ml(271,`td`)(272,`code`),mN(273,`var(--color-neutral-mid-40)`),lg()()(),Ml(274,`tr`)(275,`td`)(276,`code`),mN(277,`--color-icon-processing`),lg()(),Ml(278,`td`),mN(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),lg(),Ml(280,`td`)(281,`code`),mN(282,`var(--color-action-default)`),lg()()(),Ml(283,`tr`)(284,`td`)(285,`strong`),mN(286,`Hover`),lg()(),ql(287,`td`)(288,`td`),lg(),Ml(289,`tr`)(290,`td`)(291,`code`),mN(292,`--color-hover`),lg()(),Ml(293,`td`),mN(294,`Cor da borda no estado hover`),lg(),Ml(295,`td`)(296,`code`),mN(297,`var(--color-brand-01-dark)`),lg()()(),Ml(298,`tr`)(299,`td`)(300,`code`),mN(301,`--background-hover`),lg()(),Ml(302,`td`),mN(303,`Cor de fundo no estado hover`),lg(),Ml(304,`td`)(305,`code`),mN(306,`var(--color-brand-01-lightest)`),lg()()(),Ml(307,`tr`)(308,`td`)(309,`strong`),mN(310,`Focused`),lg()(),ql(311,`td`)(312,`td`),lg(),Ml(313,`tr`)(314,`td`)(315,`code`),mN(316,`--color-focused`),lg()(),Ml(317,`td`),mN(318,`Cor da borda no estado de foco`),lg(),Ml(319,`td`)(320,`code`),mN(321,`var(--color-action-default)`),lg()()(),Ml(322,`tr`)(323,`td`)(324,`code`),mN(325,`--outline-color-focused`),lg()(),Ml(326,`td`),mN(327,`Cor do outline no estado de foco`),lg(),Ml(328,`td`)(329,`code`),mN(330,`var(--color-action-focus)`),lg()()(),Ml(331,`tr`)(332,`td`)(333,`strong`),mN(334,`Disabled`),lg()(),ql(335,`td`)(336,`td`),lg(),Ml(337,`tr`)(338,`td`)(339,`code`),mN(340,`--color-disabled`),lg()(),Ml(341,`td`),mN(342,`Cor da borda no estado desabilitado`),lg(),Ml(343,`td`)(344,`code`),mN(345,`var(--color-neutral-light-30)`),lg()()(),Ml(346,`tr`)(347,`td`)(348,`code`),mN(349,`--background-disabled`),lg()(),Ml(350,`td`),mN(351,`Cor de fundo no estado desabilitado`),lg(),Ml(352,`td`)(353,`code`),mN(354,`var(--color-neutral-light-20)`),lg()()()()()(),Ml(355,`div`,11)(356,`h4`,12),mN(357,`Seletor`),lg(),Ml(358,`pre`,13),mN(359,`<po-search-ai
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
`),lg()(),Ml(360,`h4`,14),mN(361,`Propriedades`),lg(),Ml(362,`table`,15)(363,`tr`,16)(364,`th`,17),mN(365,`Nome`),lg(),Ml(366,`th`,17),mN(367,`Tipo`),lg(),Ml(368,`th`,17),mN(369,`Padrão`),lg(),Ml(370,`th`,17),mN(371,`Descrição`),lg()(),Ml(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),mN(376,` (p-clear)`),ql(377,`br`),lg()()(),Ml(378,`td`,22)(379,`code`,23),mN(380,`EventEmitter`),lg()(),Ml(381,`td`,24),mN(382,`-`),lg(),Ml(383,`td`,25)(384,`em`)(385,`strong`),mN(386,`(opcional)`),lg()(),Ml(387,`p`),mN(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),lg()()(),Ml(389,`tr`,18)(390,`td`,19)(391,`div`,26)(392,`span`,27),mN(393,` p-columns`),ql(394,`br`),lg()()(),Ml(395,`td`,22)(396,`code`,28),mN(397,`Array<PoSearchAiColumn>`),lg()(),Ml(398,`td`,24)(399,`p`)(400,`code`),mN(401,`[]`),lg()()(),Ml(402,`td`,25)(403,`em`)(404,`strong`),mN(405,`(opcional)`),lg()(),Ml(406,`p`),mN(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Ml(408,`code`),mN(409,`p-url`),lg(),mN(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),lg()()(),Ml(411,`tr`,18)(412,`td`,19)(413,`div`,20)(414,`span`,21),mN(415,` (p-error)`),ql(416,`br`),lg()()(),Ml(417,`td`,22)(418,`code`,23),mN(419,`EventEmitter`),lg()(),Ml(420,`td`,24),mN(421,`-`),lg(),Ml(422,`td`,25)(423,`em`)(424,`strong`),mN(425,`(opcional)`),lg()(),Ml(426,`p`),mN(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Ml(428,`code`),mN(429,`PoSearchAiError`),lg(),mN(430,`.`),lg()()(),Ml(431,`tr`,18)(432,`td`,19)(433,`div`,26)(434,`span`,27),mN(435,` p-literals`),ql(436,`br`),lg()()(),Ml(437,`td`,22)(438,`code`,29),mN(439,`PoSearchAiLiterals`),lg()(),Ml(440,`td`,24),mN(441,`-`),lg(),Ml(442,`td`,25)(443,`em`)(444,`strong`),mN(445,`(opcional)`),lg()(),Ml(446,`p`),mN(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),lg()()(),Ml(448,`tr`,18)(449,`td`,19)(450,`div`,20)(451,`span`,21),mN(452,` (p-low-confidence)`),ql(453,`br`),lg()()(),Ml(454,`td`,22)(455,`code`,23),mN(456,`EventEmitter`),lg()(),Ml(457,`td`,24),mN(458,`-`),lg(),Ml(459,`td`,25)(460,`em`)(461,`strong`),mN(462,`(opcional)`),lg()(),Ml(463,`p`),mN(464,`Evento disparado quando a confiança da resposta da IA é menor que `),Ml(465,`code`),mN(466,`p-min-confidence`),lg(),mN(467,`.
Emite um objeto `),Ml(468,`code`),mN(469,`PoSearchAiResult`),lg(),mN(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),lg()()(),Ml(471,`tr`,18)(472,`td`,19)(473,`div`,26)(474,`span`,27),mN(475,` p-min-confidence`),ql(476,`br`),lg()()(),Ml(477,`td`,22)(478,`code`,30),mN(479,`number`),lg()(),Ml(480,`td`,24)(481,`p`)(482,`code`),mN(483,`0.5`),lg()()(),Ml(484,`td`,25)(485,`em`)(486,`strong`),mN(487,`(opcional)`),lg()(),Ml(488,`p`),mN(489,`Nível mínimo de confiança (`),Ml(490,`code`),mN(491,`0.0`),lg(),mN(492,` a `),Ml(493,`code`),mN(494,`1.0`),lg(),mN(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Ml(496,`code`),mN(497,`p-low-confidence`),lg(),mN(498,` \xE9
emitido em vez de `),Ml(499,`code`),mN(500,`p-result`),lg(),mN(501,`.`),lg()()(),Ml(502,`tr`,18)(503,`td`,19)(504,`div`,20)(505,`span`,21),mN(506,` (p-result)`),ql(507,`br`),lg()()(),Ml(508,`td`,22)(509,`code`,23),mN(510,`EventEmitter`),lg()(),Ml(511,`td`,24),mN(512,`-`),lg(),Ml(513,`td`,25)(514,`em`)(515,`strong`),mN(516,`(opcional)`),lg()(),Ml(517,`p`),mN(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Ml(519,`code`),mN(520,`p-min-confidence`),lg(),mN(521,`. Emite um objeto `),Ml(522,`code`),mN(523,`PoSearchAiResult`),lg(),mN(524,`.`),lg(),Ml(525,`p`),mN(526,`O campo `),Ml(527,`code`),mN(528,`type`),lg(),mN(529,` do resultado indica como o consumidor deve interpretar a resposta:`),lg(),Ml(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),mN(535,`filter`),lg()(),Ml(536,`em`),mN(537,`(padrão)`),lg(),mN(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),Ml(539,`code`),mN(540,`result.filter`),lg(),mN(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Ml(542,`code`),mN(543,`po-table`),lg(),mN(544,` via `),Ml(545,`code`),mN(546,`p-filter`),lg(),mN(547,`.`),lg()(),Ml(548,`li`)(549,`p`)(550,`strong`)(551,`code`),mN(552,`chat`),lg()(),mN(553,`: a IA retornou uma resposta conversacional. Use `),Ml(554,`code`),mN(555,`result.data`),lg(),mN(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),lg()(),Ml(557,`li`)(558,`p`)(559,`strong`)(560,`code`),mN(561,`custom`),lg()(),mN(562,`: a IA retornou um payload genérico definido pelo backend. Use `),Ml(563,`code`),mN(564,`result.data`),lg(),mN(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),lg()()()()(),Ml(566,`tr`,18)(567,`td`,19)(568,`div`,26)(569,`span`,27),mN(570,` p-timeout`),ql(571,`br`),lg()()(),Ml(572,`td`,22)(573,`code`,30),mN(574,`number`),lg()(),Ml(575,`td`,24)(576,`p`)(577,`code`),mN(578,`10000`),lg()()(),Ml(579,`td`,25)(580,`em`)(581,`strong`),mN(582,`(opcional)`),lg()(),Ml(583,`p`),mN(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Ml(585,`code`),mN(586,`p-error`),lg(),mN(587,` com `),Ml(588,`code`),mN(589,`statusCode 408`),lg(),mN(590,`.`),lg()()(),Ml(591,`tr`,18)(592,`td`,19)(593,`div`,26)(594,`span`,27),mN(595,` p-url`),ql(596,`br`),lg()()(),Ml(597,`td`,22)(598,`code`,31),mN(599,`string`),lg()(),Ml(600,`td`,24),mN(601,`-`),lg(),Ml(602,`td`,25)(603,`em`)(604,`strong`),mN(605,`(opcional)`),lg()(),Ml(606,`p`),mN(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Ml(608,`code`),mN(609,`{ query, columns }`),lg(),mN(610,` via `),Ml(611,`code`),mN(612,`POST`),lg(),mN(613,` e deve retornar `),Ml(614,`code`),mN(615,`{ filter, description, confidence }`),lg(),mN(616,`.`),lg(),Ml(617,`blockquote`)(618,`p`),mN(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),Ml(620,`strong`),mN(621,`no backend`),lg(),mN(622,`, nunca no client-side.`),lg()()()()(),Ml(623,`h3`,14),mN(624,`Métodos`),lg(),Ml(625,`table`,32)(626,`tr`,18)(627,`th`,33)(628,`div`,26)(629,`h4`)(630,`span`,27),mN(631,` search `),lg()()()()(),Ml(632,`tr`,25)(633,`td`,25)(634,`p`),mN(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Ml(636,`code`),mN(637,`p-url`),lg(),mN(638,`.`),lg(),Ml(639,`p`),mN(640,`Caso a consulta esteja vazia ou `),Ml(641,`code`),mN(642,`p-url`),lg(),mN(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Ml(644,`code`),mN(645,`p-result`),lg(),mN(646,` (ou `),Ml(647,`code`),mN(648,`p-low-confidence`),lg(),mN(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Ml(650,`code`),mN(651,`p-error`),lg(),mN(652,`.`),lg()()()(),ql(653,`br`),Ml(654,`table`,32)(655,`tr`,18)(656,`th`,33)(657,`div`,26)(658,`h4`)(659,`span`,27),mN(660,` clearSearch `),lg()()()()(),Ml(661,`tr`,25)(662,`td`,25)(663,`p`),mN(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Ml(665,`code`),mN(666,`p-clear`),lg(),mN(667,`.`),lg()()()(),ql(668,`br`),Ml(669,`table`,32)(670,`tr`,18)(671,`th`,33)(672,`div`,26)(673,`h4`)(674,`span`,27),mN(675,` onSearchKeydown `),lg()()()()(),Ml(676,`tr`,25)(677,`td`,25)(678,`p`),mN(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Ml(680,`code`),mN(681,`Enter`),lg(),mN(682,`.`),lg()()()(),Ml(683,`h5`)(684,`b`),mN(685,`Parâmetros`),lg()(),Ml(686,`table`,15)(687,`tr`,16)(688,`th`,17),mN(689,`Nome`),lg(),Ml(690,`th`,17),mN(691,`Tipo`),lg(),Ml(692,`th`,17),mN(693,`Descrição`),lg()(),Ml(694,`tr`,18)(695,`td`,19),mN(696,` event`),lg(),ql(697,`td`,22),Ml(698,`td`,25)(699,`p`),mN(700,`Evento de teclado.`),lg()()()(),ql(701,`br`),Ml(702,`h3`),mN(703,`Interfaces`),lg(),Ml(704,`h4`,34)(705,`code`,5),mN(706,`PoSearchAiColumn`),lg()(),Ml(707,`div`,2)(708,`p`),mN(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),lg(),Ml(710,`p`),mN(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),lg()(),Ml(712,`h4`,14),mN(713,`Propriedades`),lg(),Ml(714,`table`,15)(715,`tr`,16)(716,`th`,17),mN(717,`Nome`),lg(),Ml(718,`th`,17),mN(719,`Tipo`),lg(),Ml(720,`th`,17),mN(721,`Descrição`),lg()(),Ml(722,`tr`,18)(723,`td`,19)(724,`div`,26)(725,`span`,27),mN(726,` label`),ql(727,`br`),lg()()(),Ml(728,`td`,22)(729,`code`,31),mN(730,`string`),lg()(),Ml(731,`td`,25)(732,`p`),mN(733,`Rótulo legível exibido ao usuário (ex: `),Ml(734,`code`),mN(735,`Nome`),lg(),mN(736,`, `),Ml(737,`code`),mN(738,`Idade`),lg(),mN(739,`, `),Ml(740,`code`),mN(741,`Cidade`),lg(),mN(742,`).`),lg()()(),Ml(743,`tr`,18)(744,`td`,19)(745,`div`,26)(746,`span`,27),mN(747,` property`),ql(748,`br`),lg()()(),Ml(749,`td`,22)(750,`code`,31),mN(751,`string`),lg()(),Ml(752,`td`,25)(753,`p`),mN(754,`Nome da propriedade do campo (ex: `),Ml(755,`code`),mN(756,`name`),lg(),mN(757,`, `),Ml(758,`code`),mN(759,`age`),lg(),mN(760,`, `),Ml(761,`code`),mN(762,`city`),lg(),mN(763,`).`),lg()()(),Ml(764,`tr`,18)(765,`td`,19)(766,`div`,26)(767,`span`,27),mN(768,` type`),ql(769,`br`),lg()()(),Ml(770,`td`,22)(771,`code`,31),mN(772,`string`),lg()(),Ml(773,`td`,25)(774,`em`)(775,`strong`),mN(776,`(opcional)`),lg()(),Ml(777,`p`),mN(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),lg(),Ml(779,`p`),mN(780,`Valores comuns: `),Ml(781,`code`),mN(782,`string`),lg(),mN(783,`, `),Ml(784,`code`),mN(785,`number`),lg(),mN(786,`, `),Ml(787,`code`),mN(788,`date`),lg(),mN(789,`, `),Ml(790,`code`),mN(791,`currency`),lg(),mN(792,`, `),Ml(793,`code`),mN(794,`boolean`),lg(),mN(795,`.`),lg()()()(),Ml(796,`h4`,34)(797,`code`,5),mN(798,`PoSearchAiLiterals`),lg()(),Ml(799,`div`,2)(800,`p`),mN(801,`Interface para definição das literais usadas no `),Ml(802,`code`),mN(803,`po-search-ai`),lg(),mN(804,`.`),lg()(),Ml(805,`h4`,14),mN(806,`Propriedades`),lg(),Ml(807,`table`,15)(808,`tr`,16)(809,`th`,17),mN(810,`Nome`),lg(),Ml(811,`th`,17),mN(812,`Tipo`),lg(),Ml(813,`th`,17),mN(814,`Descrição`),lg()(),Ml(815,`tr`,18)(816,`td`,19)(817,`div`,26)(818,`span`,27),mN(819,` clean`),ql(820,`br`),lg()()(),Ml(821,`td`,22)(822,`code`,31),mN(823,`string`),lg()(),Ml(824,`td`,25)(825,`em`)(826,`strong`),mN(827,`(opcional)`),lg()(),Ml(828,`p`),mN(829,`Texto de acessibilidade do botão de limpar o campo.`),lg()()(),Ml(830,`tr`,18)(831,`td`,19)(832,`div`,26)(833,`span`,27),mN(834,` errorMessage`),ql(835,`br`),lg()()(),Ml(836,`td`,22)(837,`code`,31),mN(838,`string`),lg()(),Ml(839,`td`,25)(840,`em`)(841,`strong`),mN(842,`(opcional)`),lg()(),Ml(843,`p`),mN(844,`Mensagem exibida quando a busca com IA falha.`),lg()()()(),Ml(845,`h4`,34)(846,`code`,5),mN(847,`PoSearchAiRequest`),lg()(),Ml(848,`div`,2)(849,`p`),mN(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),Ml(851,`code`),mN(852,`p-url`),lg(),mN(853,`.`),lg(),Ml(854,`p`),mN(855,`O componente é `),Ml(856,`strong`),mN(857,`agnóstico ao provedor de IA`),lg(),mN(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Ml(859,`code`),mN(860,`PoSearchAiResponse`),lg(),mN(861,`.`),lg()(),Ml(862,`h4`,14),mN(863,`Propriedades`),lg(),Ml(864,`table`,15)(865,`tr`,16)(866,`th`,17),mN(867,`Nome`),lg(),Ml(868,`th`,17),mN(869,`Tipo`),lg(),Ml(870,`th`,17),mN(871,`Descrição`),lg()(),Ml(872,`tr`,18)(873,`td`,19)(874,`div`,26)(875,`span`,27),mN(876,` columns`),ql(877,`br`),lg()()(),Ml(878,`td`,22)(879,`code`,28),mN(880,`Array<PoSearchAiColumn>`),lg()(),Ml(881,`td`,25)(882,`p`),mN(883,`Metadados dos campos disponíveis para a busca (ver `),Ml(884,`code`),mN(885,`PoSearchAiColumn`),lg(),mN(886,`).`),lg()()(),Ml(887,`tr`,18)(888,`td`,19)(889,`div`,26)(890,`span`,27),mN(891,` query`),ql(892,`br`),lg()()(),Ml(893,`td`,22)(894,`code`,31),mN(895,`string`),lg()(),Ml(896,`td`,25)(897,`p`),mN(898,`Texto em linguagem natural digitado pelo usuário.`),lg()()()(),Ml(899,`h4`,34)(900,`code`,5),mN(901,`PoSearchAiResponse`),lg()(),Ml(902,`div`,2)(903,`p`),mN(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),Ml(905,`code`),mN(906,`p-url`),lg(),mN(907,`.`),lg()(),Ml(908,`h4`,14),mN(909,`Propriedades`),lg(),Ml(910,`table`,15)(911,`tr`,16)(912,`th`,17),mN(913,`Nome`),lg(),Ml(914,`th`,17),mN(915,`Tipo`),lg(),Ml(916,`th`,17),mN(917,`Descrição`),lg()(),Ml(918,`tr`,18)(919,`td`,19)(920,`div`,26)(921,`span`,27),mN(922,` confidence`),ql(923,`br`),lg()()(),Ml(924,`td`,22)(925,`code`,30),mN(926,`number`),lg()(),Ml(927,`td`,25)(928,`em`)(929,`strong`),mN(930,`(opcional)`),lg()(),Ml(931,`p`),mN(932,`Nível de confiança da interpretação da IA, em um intervalo de `),Ml(933,`code`),mN(934,`0.0`),lg(),mN(935,` a `),Ml(936,`code`),mN(937,`1.0`),lg(),mN(938,`.`),lg(),Ml(939,`p`),mN(940,`Utilizado em conjunto com `),Ml(941,`code`),mN(942,`p-min-confidence`),lg(),mN(943,` para decidir se o resultado é confiável.`),lg()()(),Ml(944,`tr`,18)(945,`td`,19)(946,`div`,26)(947,`span`,27),mN(948,` data`),ql(949,`br`),lg()()(),Ml(950,`td`,22)(951,`code`,35),mN(952,`Record<string, any>`),lg()(),Ml(953,`td`,25)(954,`em`)(955,`strong`),mN(956,`(opcional)`),lg()(),Ml(957,`p`),mN(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),lg(),Ml(959,`p`),mN(960,`Utilizado quando `),Ml(961,`code`),mN(962,`type`),lg(),mN(963,` é `),Ml(964,`code`),mN(965,`'chat'`),lg(),mN(966,` ou `),Ml(967,`code`),mN(968,`'custom'`),lg(),mN(969,`.`),lg()()(),Ml(970,`tr`,18)(971,`td`,19)(972,`div`,26)(973,`span`,27),mN(974,` description`),ql(975,`br`),lg()()(),Ml(976,`td`,22)(977,`code`,31),mN(978,`string`),lg()(),Ml(979,`td`,25)(980,`em`)(981,`strong`),mN(982,`(opcional)`),lg()(),Ml(983,`p`),mN(984,`Descrição legível, em linguagem natural, da resposta.`),lg()()(),Ml(985,`tr`,18)(986,`td`,19)(987,`div`,26)(988,`span`,27),mN(989,` filter`),ql(990,`br`),lg()()(),Ml(991,`td`,22)(992,`code`,31),mN(993,`string`),lg()(),Ml(994,`td`,25)(995,`em`)(996,`strong`),mN(997,`(opcional)`),lg()(),Ml(998,`p`),mN(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Ml(1e3,`code`),mN(1001,`age gt 30 and city eq 'São Paulo'`),lg(),mN(1002,`).`),lg(),Ml(1003,`p`),mN(1004,`Utilizado quando `),Ml(1005,`code`),mN(1006,`type`),lg(),mN(1007,` é `),Ml(1008,`code`),mN(1009,`'filter'`),lg(),mN(1010,`.`),lg()()(),Ml(1011,`tr`,18)(1012,`td`,19)(1013,`div`,26)(1014,`span`,27),mN(1015,` type`),ql(1016,`br`),lg()()(),Ml(1017,`td`,22)(1018,`code`,36),mN(1019,`PoSearchAiResponseType`),lg()(),Ml(1020,`td`,25)(1021,`em`)(1022,`strong`),mN(1023,`(opcional)`),lg()(),Ml(1024,`p`),mN(1025,`Tipo da resposta retornada pela IA.`),lg(),Ml(1026,`p`),mN(1027,`Quando omitido, o componente infere `),Ml(1028,`code`),mN(1029,`'filter'`),lg(),mN(1030,` se `),Ml(1031,`code`),mN(1032,`filter`),lg(),mN(1033,` estiver presente,
caso contr\xE1rio assume `),Ml(1034,`code`),mN(1035,`'custom'`),lg(),mN(1036,`.`),lg()()()(),Ml(1037,`h4`,34)(1038,`code`,5),mN(1039,`PoSearchAiResult`),lg()(),Ml(1040,`div`,2)(1041,`p`),mN(1042,`Interface que define o objeto emitido pelos eventos `),Ml(1043,`code`),mN(1044,`p-result`),lg(),mN(1045,` e `),Ml(1046,`code`),mN(1047,`p-low-confidence`),lg(),mN(1048,`.`),lg()(),Ml(1049,`h4`,14),mN(1050,`Propriedades`),lg(),Ml(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),mN(1054,`Nome`),lg(),Ml(1055,`th`,17),mN(1056,`Tipo`),lg(),Ml(1057,`th`,17),mN(1058,`Descrição`),lg()(),Ml(1059,`tr`,18)(1060,`td`,19)(1061,`div`,26)(1062,`span`,27),mN(1063,` confidence`),ql(1064,`br`),lg()()(),Ml(1065,`td`,22)(1066,`code`,30),mN(1067,`number`),lg()(),Ml(1068,`td`,25)(1069,`em`)(1070,`strong`),mN(1071,`(opcional)`),lg()(),Ml(1072,`p`),mN(1073,`Nível de confiança da interpretação (`),Ml(1074,`code`),mN(1075,`0.0`),lg(),mN(1076,` a `),Ml(1077,`code`),mN(1078,`1.0`),lg(),mN(1079,`).`),lg()()(),Ml(1080,`tr`,18)(1081,`td`,19)(1082,`div`,26)(1083,`span`,27),mN(1084,` data`),ql(1085,`br`),lg()()(),Ml(1086,`td`,22)(1087,`code`,35),mN(1088,`Record<string, any>`),lg()(),Ml(1089,`td`,25)(1090,`em`)(1091,`strong`),mN(1092,`(opcional)`),lg()(),Ml(1093,`p`),mN(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),lg()()(),Ml(1095,`tr`,18)(1096,`td`,19)(1097,`div`,26)(1098,`span`,27),mN(1099,` description`),ql(1100,`br`),lg()()(),Ml(1101,`td`,22)(1102,`code`,31),mN(1103,`string`),lg()(),Ml(1104,`td`,25)(1105,`em`)(1106,`strong`),mN(1107,`(opcional)`),lg()(),Ml(1108,`p`),mN(1109,`Descrição legível da resposta.`),lg()()(),Ml(1110,`tr`,18)(1111,`td`,19)(1112,`div`,26)(1113,`span`,27),mN(1114,` filter`),ql(1115,`br`),lg()()(),Ml(1116,`td`,22)(1117,`code`,31),mN(1118,`string`),lg()(),Ml(1119,`td`,25)(1120,`em`)(1121,`strong`),mN(1122,`(opcional)`),lg()(),Ml(1123,`p`),mN(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Ml(1125,`code`),mN(1126,`type`),lg(),mN(1127,` é `),Ml(1128,`code`),mN(1129,`'filter'`),lg(),mN(1130,`.`),lg()()(),Ml(1131,`tr`,18)(1132,`td`,19)(1133,`div`,26)(1134,`span`,27),mN(1135,` query`),ql(1136,`br`),lg()()(),Ml(1137,`td`,22)(1138,`code`,31),mN(1139,`string`),lg()(),Ml(1140,`td`,25)(1141,`p`),mN(1142,`Texto original digitado pelo usuário.`),lg()()(),Ml(1143,`tr`,18)(1144,`td`,19)(1145,`div`,26)(1146,`span`,27),mN(1147,` type`),ql(1148,`br`),lg()()(),Ml(1149,`td`,22)(1150,`code`,36),mN(1151,`PoSearchAiResponseType`),lg()(),Ml(1152,`td`,25)(1153,`p`),mN(1154,`Tipo da resposta retornada pela IA.`),lg()()()(),Ml(1155,`h4`,34)(1156,`code`,5),mN(1157,`PoSearchAiError`),lg()(),Ml(1158,`div`,2)(1159,`p`),mN(1160,`Interface que define o objeto emitido pelo evento `),Ml(1161,`code`),mN(1162,`p-error`),lg(),mN(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),lg()(),Ml(1164,`h4`,14),mN(1165,`Propriedades`),lg(),Ml(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),mN(1169,`Nome`),lg(),Ml(1170,`th`,17),mN(1171,`Tipo`),lg(),Ml(1172,`th`,17),mN(1173,`Descrição`),lg()(),Ml(1174,`tr`,18)(1175,`td`,19)(1176,`div`,26)(1177,`span`,27),mN(1178,` message`),ql(1179,`br`),lg()()(),Ml(1180,`td`,22)(1181,`code`,31),mN(1182,`string`),lg()(),Ml(1183,`td`,25)(1184,`p`),mN(1185,`Mensagem de erro.`),lg()()(),Ml(1186,`tr`,18)(1187,`td`,19)(1188,`div`,26)(1189,`span`,27),mN(1190,` query`),ql(1191,`br`),lg()()(),Ml(1192,`td`,22)(1193,`code`,31),mN(1194,`string`),lg()(),Ml(1195,`td`,25)(1196,`p`),mN(1197,`Texto original digitado pelo usuário.`),lg()()(),Ml(1198,`tr`,18)(1199,`td`,19)(1200,`div`,26)(1201,`span`,27),mN(1202,` statusCode`),ql(1203,`br`),lg()()(),Ml(1204,`td`,22)(1205,`code`,30),mN(1206,`number`),lg()(),Ml(1207,`td`,25)(1208,`p`),mN(1209,`Código HTTP do erro (ex: `),Ml(1210,`code`),mN(1211,`500`),lg(),mN(1212,`, `),Ml(1213,`code`),mN(1214,`408`),lg(),mN(1215,` para timeout).`),lg()()()(),Ml(1216,`h3`),mN(1217,`Enums`),lg(),Ml(1218,`h4`,4)(1219,`code`,5),mN(1220,`PoSearchAiResponseType`),lg()(),Ml(1221,`div`,2)(1222,`p`),mN(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),lg()(),Ml(1224,`h4`,14),mN(1225,`Propriedades`),lg(),Ml(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),mN(1229,`Nome`),lg(),Ml(1230,`th`,17),mN(1231,`Descrição`),lg()(),Ml(1232,`tr`,18)(1233,`td`,19)(1234,`div`,26)(1235,`span`,27),mN(1236,` filter`),ql(1237,`br`),lg()()(),Ml(1238,`td`,25)(1239,`p`),mN(1240,`Resposta contendo um filtro estruturado (ex: OData).`),lg()()(),Ml(1241,`tr`,18)(1242,`td`,19)(1243,`div`,26)(1244,`span`,27),mN(1245,` chat`),ql(1246,`br`),lg()()(),Ml(1247,`td`,25)(1248,`p`),mN(1249,`Resposta conversacional em linguagem natural.`),lg()()(),Ml(1250,`tr`,18)(1251,`td`,19)(1252,`div`,26)(1253,`span`,27),mN(1254,` custom`),ql(1255,`br`),lg()()(),Ml(1256,`td`,25)(1257,`p`),mN(1258,`Payload genérico definido pelo consumidor.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-search-ai-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-search-ai-basic-view`)(6,`sample-po-search-ai-labs-view`)(7,`sample-po-search-ai-result-view`)(8,`sample-po-search-ai-filter-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,xe,be,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(Ge),NL]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,Te]})}return o})();export{vt as DocPoSearchAiModule};