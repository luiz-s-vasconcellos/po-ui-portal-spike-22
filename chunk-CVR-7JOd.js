import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,C as Bze,Ei as jc,Fi as mx,Hi as pe$1,Ht as bae,In as xa,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,L as Ht,Pi as mt,Ri as nu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,b as A5,bi as ib,dt as Sae,ga as xx,i as _a,ji as mO,k as Ec,lt as Rl,mi as gO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue$1,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&nu(0,`po-helper`,0),l&2&&jE(`p-helper`,i.poHelper)},dependencies:[Ht],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Helper Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,V)=>[o,V];var ve=()=>({label:`Medium`,value:`medium`});var Ce=()=>({label:`Small`,value:`small`});function ye(o,V){if(o&1){let p=Sx();jc(0,`po-input`,9),JN(),ob(`ngModelChange`,function(i){y_(p);let d=xx();return sO(d.footerTitle,i)||(d.footerTitle=i),v_(i)}),mt(`ngModelChange`,function(i){y_(p);let d=xx();return v_(d.setFooterTitle(i))}),wg()}if(o&2){let p=xx();ib(`ngModel`,p.footerTitle),t0()}}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(p){this.helperOptions=s(r({},this.helperOptions),{type:p})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(nu(0,`po-helper`,0)(1,`po-divider`),jc(2,`div`,1)(3,`po-input`,2),JN(),mt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),wg(),jc(4,`po-input`,3),JN(),mt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),wg()(),jc(5,`div`,1),px(6,ye,1,1,`po-input`,4),wg(),jc(7,`div`,1)(8,`po-radio-group`,5),JN(),mt(`ngModelChange`,function(u){return i.updateHelperType(u)}),wg()(),jc(9,`div`,1)(10,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(u){return sO(i.helperSize,u)||(i.helperSize=u),u}),wg()(),jc(11,`div`,1)(12,`po-checkbox`,7),JN(),ob(`ngModelChange`,function(u){return sO(i.helperDisabled,u)||(i.helperDisabled=u),u}),wg()(),nu(13,`po-divider`),jc(14,`div`,1)(15,`po-button`,8),mt(`p-click`,function(){return i.reset()}),wg()()),l&2&&(jE(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),rg(3),jE(`ngModel`,i.helperOptions.title),t0(),rg(),jE(`ngModel`,i.helperOptions.content),t0(),rg(2),mx(i.helperOptions.type===`help`?6:-1),rg(2),jE(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,yO(15,re,gO(13,ge),gO(14,xe))),t0(),rg(2),ib(`ngModel`,i.helperSize),jE(`p-columns`,4)(`p-options`,yO(20,re,gO(18,ve),gO(19,Ce))),t0(),rg(2),ib(`ngModel`,i.helperDisabled),t0())},dependencies:[CK,TF,ni,Lf,Rl,A5,Ote,Ht],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Helper Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

<po-divider></po-divider>

<div class="po-row">
  <po-input
    class="po-md-6"
    name="title"
    [ngModel]="helperOptions.title"
    (ngModelChange)="helperOptions = { ...helperOptions, title: $event }"
    p-clean
    p-label="Title"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="content"
    [ngModel]="helperOptions.content"
    (ngModelChange)="helperOptions = { ...helperOptions, content: $event }"
    p-clean
    p-label="Content"
    p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="Footer Action"
    >
    </po-input>
  }
</div>

<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12"
    [p-columns]="4"
    p-label="Type"
    [ngModel]="helperOptions.type"
    (ngModelChange)="updateHelperType($event)"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="helperSize"
    [p-columns]="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-checkbox class="po-md-12" name="disabled" [(ngModel)]="helperDisabled" p-label="Disabled"> </po-checkbox>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="reset()"></po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperDisabled: boolean = false;
  helperSize: string = 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    this.footerTitle = title;
    if (title.length === 0) {
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions = {
        ...this.helperOptions,
        footerAction: {
          label: this.footerTitle,
          action: this.footerAction.bind(this)
        }
      };
    }
  }

  updateHelperType(type: string) {
    this.helperOptions = {
      ...this.helperOptions,
      type: type as 'help' | 'info'
    };
  }

  reset() {
    this.helperDisabled = false;
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=xa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(jc(0,`po-container`)(1,`div`,0)(2,`div`,1),iO(3,`Sales Performance`),wg(),nu(4,`po-helper`,2),wg(),jc(5,`div`,3)(6,`div`,4),nu(7,`po-chart`,5),wg()()()),l&2&&(rg(4),jE(`p-helper`,i.helperOptions),rg(3),jE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[Bze,Ec,Ht],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Helper Sales Performance`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
  <div class="po-row po-mb-3">
    <div class="po-font-title">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-sales-performance`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoHelperModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-helper`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoHelperComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-helper`),wg(),iO(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),wg(),jc(18,`p`),iO(19,`Principais funcionalidades:`),wg(),jc(20,`ul`)(21,`li`),iO(22,`Exibe ícone de ajuda (`),jc(23,`code`),iO(24,`help`),wg(),iO(25,`) ou informação (`),jc(26,`code`),iO(27,`info`),wg(),iO(28,`) conforme configuração.`),wg(),jc(29,`li`),iO(30,`Permite definir título, conteúdo e ações no popover via propriedade `),jc(31,`code`),iO(32,`p-helper`),wg(),iO(33,`.`),wg(),jc(34,`li`),iO(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),wg(),jc(36,`li`),iO(37,`Controle do tamanho do componente via propriedade `),jc(38,`code`),iO(39,`p-size`),wg(),iO(40,` (`),jc(41,`code`),iO(42,`small`),wg(),iO(43,` ou `),jc(44,`code`),iO(45,`medium`),wg(),iO(46,`).`),wg(),jc(47,`li`),iO(48,`Permite customizar ações no rodapé do popover.`),wg()(),jc(49,`p`),iO(50,`Exemplo de uso:`),wg(),jc(51,`pre`)(52,`code`,6),iO(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),wg()(),jc(54,`p`),iO(55,`Também é possível passar apenas uma string para o conteúdo:`),wg(),jc(56,`pre`)(57,`code`,6),iO(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),wg()(),jc(59,`p`),iO(60,`A propriedade `),jc(61,`code`),iO(62,`p-helper`),wg(),iO(63,` aceita um objeto do tipo `),jc(64,`code`),iO(65,`PoHelperOptions`),wg(),iO(66,`:`),wg(),jc(67,`pre`)(68,`code`,7),iO(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),wg()(),jc(70,`blockquote`)(71,`p`)(72,`strong`),iO(73,`Importante:`),wg(),iO(74,` A propriedade `),jc(75,`code`),iO(76,`footerAction`),wg(),iO(77,` não pode ser utilizada quando o tipo do helper for `),jc(78,`code`),iO(79,`info`),wg(),iO(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),wg()(),jc(81,`h4`),iO(82,`Tokens customizáveis`),wg(),jc(83,`p`),iO(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(85,`blockquote`)(86,`p`),iO(87,`Para maiores informações, acesse o guia `),jc(88,`a`,8),iO(89,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(90,`.`),wg()(),jc(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),iO(95,`Propriedade`),wg(),jc(96,`th`),iO(97,`Descrição`),wg(),jc(98,`th`),iO(99,`Valor Padrão`),wg()()(),jc(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),iO(104,`--color`),wg()(),jc(105,`td`),iO(106,`Cor principal do ícone`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--color-action-default)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--border-color-hover`),wg()(),jc(114,`td`),iO(115,`Cor da borda no estado hover`),wg(),jc(116,`td`)(117,`code`),iO(118,`var(--color-brand-01-darkest)`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--background-pressed`),wg()(),jc(123,`td`),iO(124,`Cor de background no estado de pressionado\xA0`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--color-brand-01-light)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--color-disabled`),wg()(),jc(132,`td`),iO(133,`Cor principal no estado disabled`),wg(),jc(134,`td`)(135,`code`),iO(136,`var(--color-action-disabled)`),wg()()()()()(),jc(137,`div`,9)(138,`h4`,10),iO(139,`Seletor`),wg(),jc(140,`pre`,11),iO(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),wg()(),jc(142,`h4`,12),iO(143,`Propriedades`),wg(),jc(144,`table`,13)(145,`tr`,14)(146,`th`,15),iO(147,`Nome`),wg(),jc(148,`th`,15),iO(149,`Tipo`),wg(),jc(150,`th`,15),iO(151,`Padrão`),wg(),jc(152,`th`,15),iO(153,`Descrição`),wg()(),jc(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),iO(158,` p-append-in-body`),nu(159,`br`),wg()()(),jc(160,`td`,20)(161,`code`,21),iO(162,`boolean`),wg()(),jc(163,`td`,22),iO(164,`-`),wg(),jc(165,`td`,23)(166,`em`)(167,`strong`),iO(168,`(opcional)`),wg()(),jc(169,`p`),iO(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),jc(171,`code`),iO(172,`p-target`),wg(),iO(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),wg()()(),jc(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),iO(178,` p-disabled`),nu(179,`br`),wg()()(),jc(180,`td`,20)(181,`code`,21),iO(182,`boolean`),wg()(),jc(183,`td`,22)(184,`p`)(185,`code`),iO(186,`false`),wg()()(),jc(187,`td`,23)(188,`em`)(189,`strong`),iO(190,`(opcional)`),wg()(),jc(191,`p`),iO(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),wg()()(),jc(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),iO(197,` p-helper`),nu(198,`br`),wg()()(),jc(199,`td`,20)(200,`code`,24),iO(201,`PoHelperOptions `),wg(),jc(202,`code`,25),iO(203,` string`),wg()(),jc(204,`td`,22),iO(205,`-`),wg(),jc(206,`td`,23)(207,`em`)(208,`strong`),iO(209,`(opcional)`),wg()(),jc(210,`p`),iO(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),wg(),jc(212,`p`),iO(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),jc(214,`code`),iO(215,`PoHelperOptions`),wg(),iO(216,` para configuração avançada:`),wg(),jc(217,`ul`)(218,`li`)(219,`code`),iO(220,`title`),wg(),iO(221,`: Título do popover.`),wg(),jc(222,`li`)(223,`code`),iO(224,`content`),wg(),iO(225,`: Conteúdo explicativo exibido no popover.`),wg(),jc(226,`li`)(227,`code`),iO(228,`type`),wg(),iO(229,`: Tipo do ícone (`),jc(230,`code`),iO(231,`help`),wg(),iO(232,` ou `),jc(233,`code`),iO(234,`info`),wg(),iO(235,`).`),wg(),jc(236,`li`)(237,`code`),iO(238,`eventOnClick`),wg(),iO(239,`: Função chamada ao clicar no ícone.`),wg(),jc(240,`li`)(241,`code`),iO(242,`footerAction`),wg(),iO(243,`: Objeto com `),jc(244,`code`),iO(245,`label`),wg(),iO(246,` e `),jc(247,`code`),iO(248,`action`),wg(),iO(249,` para ação customizada no rodapé do popover.`),wg()(),jc(250,`p`),iO(251,`Exemplo de uso:`),wg(),jc(252,`pre`)(253,`code`,6),iO(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),wg()()()(),jc(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),iO(259,` p-size`),nu(260,`br`),wg()()(),jc(261,`td`,20)(262,`code`,25),iO(263,`string`),wg()(),jc(264,`td`,22)(265,`p`)(266,`code`),iO(267,`medium`),wg()()(),jc(268,`td`,23)(269,`em`)(270,`strong`),iO(271,`(opcional)`),wg()(),jc(272,`p`),iO(273,`Define o tamanho do componente:`),wg(),jc(274,`ul`)(275,`li`)(276,`code`),iO(277,`small`),wg(),iO(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),wg(),jc(279,`li`)(280,`code`),iO(281,`medium`),wg(),iO(282,`: altura do ícone com seu valor de 24px.`),wg()(),jc(283,`blockquote`)(284,`p`),iO(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(286,`code`),iO(287,`medium`),wg(),iO(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(289,`a`,26),iO(290,`po-theme`),wg(),iO(291,`.`),wg()()()()(),jc(292,`h3`),iO(293,`Interfaces`),wg(),jc(294,`h4`,27)(295,`code`,5),iO(296,`PoHelperOptions`),wg()(),jc(297,`div`,2)(298,`p`),iO(299,`Interface para configuração das opções de ajuda (`),jc(300,`em`),iO(301,`helper`),wg(),iO(302,`).`),wg()(),jc(303,`h4`,12),iO(304,`Propriedades`),wg(),jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),iO(308,`Nome`),wg(),jc(309,`th`,15),iO(310,`Tipo`),wg(),jc(311,`th`,15),iO(312,`Descrição`),wg()(),jc(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),iO(317,` content`),nu(318,`br`),wg()()(),jc(319,`td`,20)(320,`code`,25),iO(321,`string`),wg()(),jc(322,`td`,23)(323,`em`)(324,`strong`),iO(325,`(opcional)`),wg()(),jc(326,`p`),iO(327,`Texto explicativo exibido no popover.`),wg(),jc(328,`p`),iO(329,`Suporta formatação básica com as tags `),jc(330,`code`),iO(331,`<b>`),wg(),iO(332,` (negrito), `),jc(333,`code`),iO(334,`<strong>`),wg(),iO(335,` (negrito), `),jc(336,`code`),iO(337,`<i>`),wg(),iO(338,` (itálico), `),jc(339,`code`),iO(340,`<em>`),wg(),iO(341,` (it\xE1lico) e
`),jc(342,`code`),iO(343,`<u>`),wg(),iO(344,` (sublinhado).`),wg(),jc(345,`p`),iO(346,`Exemplo:`),wg(),jc(347,`pre`)(348,`code`,7),iO(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),wg()()()(),jc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),iO(354,` eventOnClick`),nu(355,`br`),wg()()(),jc(356,`td`,20)(357,`code`,28),iO(358,`Function`),wg()(),jc(359,`td`,23)(360,`em`)(361,`strong`),iO(362,`(opcional)`),wg()(),jc(363,`p`),iO(364,`Evento disparado ao clicar no ícone do helper.`),wg(),jc(365,`p`),iO(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),wg(),jc(367,`p`),iO(368,`Pode ser uma função ou um `),jc(369,`code`),iO(370,`EventEmitter`),wg(),iO(371,`.`),wg(),jc(372,`p`),iO(373,`Exemplo:`),wg(),jc(374,`pre`)(375,`code`),iO(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),wg()()()(),jc(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),iO(381,` footerAction`),nu(382,`br`),wg()()(),jc(383,`td`,20)(384,`code`,29),iO(385,`{ label: string; action: Function;
}`),wg()(),jc(386,`td`,23)(387,`em`)(388,`strong`),iO(389,`(opcional)`),wg()(),jc(390,`p`),iO(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),jc(392,`code`),iO(393,`help`),wg(),iO(394,` e desconsiderada quando o type for `),jc(395,`code`),iO(396,`info`),wg(),iO(397,`.`),wg(),jc(398,`p`),iO(399,`Deve ser um objeto com as propriedades:`),wg(),jc(400,`ul`)(401,`li`)(402,`code`),iO(403,`label`),wg(),iO(404,`: Texto do botão.`),wg(),jc(405,`li`)(406,`code`),iO(407,`action`),wg(),iO(408,`: Função executada ao clicar no botão.`),wg()(),jc(409,`p`),iO(410,`Exemplo:`),wg(),jc(411,`pre`)(412,`code`,7),iO(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),wg()()()(),jc(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),iO(418,` title`),nu(419,`br`),wg()()(),jc(420,`td`,20)(421,`code`,25),iO(422,`string`),wg()(),jc(423,`td`,23)(424,`em`)(425,`strong`),iO(426,`(opcional)`),wg()(),jc(427,`p`),iO(428,`Título do helper exibido no popover.`),wg()()(),jc(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),iO(433,` type`),nu(434,`br`),wg()()(),jc(435,`td`,20)(436,`code`,30),iO(437,`'info' `),wg(),jc(438,`code`,31),iO(439,` 'help'`),wg()(),jc(440,`td`,23)(441,`em`)(442,`strong`),iO(443,`(opcional)`),wg()(),jc(444,`p`),iO(445,`Tipo do ícone exibido: `),jc(446,`code`),iO(447,`info`),wg(),iO(448,` ou `),jc(449,`code`),iO(450,`help`),wg(),iO(451,`.`),wg(),jc(452,`p`),iO(453,`Quando o valor é `),jc(454,`code`),iO(455,`info`),wg(),iO(456,`, o popover exibe apenas informações e não permite ações customizadas.`),wg(),jc(457,`p`),iO(458,`Quando o valor é `),jc(459,`code`),iO(460,`help`),wg(),iO(461,`, o popover pode exibir ações customizadas no rodapé.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-helper-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-helper-basic-view`)(6,`sample-po-helper-labs-view`)(7,`sample-po-helper-sales-performance-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[C1.forChild(Oe),C1]})}return o})();var it=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[Ta,Ee]})}return o})();export{it as DocPoHelperModule};