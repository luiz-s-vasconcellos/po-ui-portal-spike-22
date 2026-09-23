import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Br as TN,E as Cp,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Kr as Un,Lr as RN,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Xn as Cn,Xt as fr,Yi as mN,Zr as Vk,_r as Ml,bi as cw,br as NL,cn as lU,ea as p0,ft as P8e,ga as w,it as Mt,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,yr as Mx}from"./main-NT5YGKBQ.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&ql(0,`po-helper`,0),l&2&&cw(`p-helper`,i.poHelper)},dependencies:[Mt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Helper Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-helper-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,V)=>[o,V];var ve=()=>({label:`Medium`,value:`medium`});var Ce=()=>({label:`Small`,value:`small`});function ye(o,V){if(o&1){let p=Vx();Ml(0,`po-input`,9),Mw(`ngModelChange`,function(i){Qy(p);let d=zx();return yN(d.footerTitle,i)||(d.footerTitle=i),Jy(i)}),ht(`ngModelChange`,function(i){Qy(p);return Jy(zx().setFooterTitle(i))}),lg(),f0()}if(o&2)Tw(`ngModel`,zx().footerTitle),p0()}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(p){this.helperOptions=s(r({},this.helperOptions),{type:p})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(ql(0,`po-helper`,0)(1,`po-divider`),Ml(2,`div`,1)(3,`po-input`,2),ht(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),lg(),f0(),Ml(4,`po-input`,3),ht(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),lg(),f0(),lg(),Ml(5,`div`,1),Tx(6,ye,1,1,`po-input`,4),lg(),Ml(7,`div`,1)(8,`po-radio-group`,5),ht(`ngModelChange`,function(u){return i.updateHelperType(u)}),lg(),f0(),lg(),Ml(9,`div`,1)(10,`po-radio-group`,6),Mw(`ngModelChange`,function(u){return yN(i.helperSize,u)||(i.helperSize=u),u}),lg(),f0(),lg(),Ml(11,`div`,1)(12,`po-checkbox`,7),Mw(`ngModelChange`,function(u){return yN(i.helperDisabled,u)||(i.helperDisabled=u),u}),lg(),f0(),lg(),ql(13,`po-divider`),Ml(14,`div`,1)(15,`po-button`,8),ht(`p-click`,function(){return i.reset()}),lg()()),l&2&&(cw(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),Up(3),cw(`ngModel`,i.helperOptions.title),p0(),Up(),cw(`ngModel`,i.helperOptions.content),p0(),Up(2),Mx(i.helperOptions.type===`help`?6:-1),Up(2),cw(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,RN(15,re,TN(13,ge),TN(14,xe))),p0(),Up(2),Tw(`ngModel`,i.helperSize),cw(`p-columns`,4)(`p-options`,RN(20,re,TN(18,ve),TN(19,Ce))),p0(),Up(2),Tw(`ngModel`,i.helperDisabled),p0())},dependencies:[wY,Vk,Zt,nb,Cp,lU,q0e,Mt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Helper Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-helper-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=fr.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(Ml(0,`po-container`)(1,`div`,0)(2,`div`,1),mN(3,`Sales Performance`),lg(),ql(4,`po-helper`,2),lg(),Ml(5,`div`,3)(6,`div`,4),ql(7,`po-chart`,5),lg()()()),l&2&&(Up(4),cw(`p-helper`,i.helperOptions),Up(3),cw(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[P8e,wp,Mt],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Helper Sales Performance`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-helper-sales-performance`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoHelperModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-helper`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoHelperComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-helper`),lg(),mN(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),lg(),Ml(18,`p`),mN(19,`Principais funcionalidades:`),lg(),Ml(20,`ul`)(21,`li`),mN(22,`Exibe ícone de ajuda (`),Ml(23,`code`),mN(24,`help`),lg(),mN(25,`) ou informação (`),Ml(26,`code`),mN(27,`info`),lg(),mN(28,`) conforme configuração.`),lg(),Ml(29,`li`),mN(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Ml(31,`code`),mN(32,`p-helper`),lg(),mN(33,`.`),lg(),Ml(34,`li`),mN(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),lg(),Ml(36,`li`),mN(37,`Controle do tamanho do componente via propriedade `),Ml(38,`code`),mN(39,`p-size`),lg(),mN(40,` (`),Ml(41,`code`),mN(42,`small`),lg(),mN(43,` ou `),Ml(44,`code`),mN(45,`medium`),lg(),mN(46,`).`),lg(),Ml(47,`li`),mN(48,`Permite customizar ações no rodapé do popover.`),lg()(),Ml(49,`p`),mN(50,`Exemplo de uso:`),lg(),Ml(51,`pre`)(52,`code`,6),mN(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),lg()(),Ml(54,`p`),mN(55,`Também é possível passar apenas uma string para o conteúdo:`),lg(),Ml(56,`pre`)(57,`code`,6),mN(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),lg()(),Ml(59,`p`),mN(60,`A propriedade `),Ml(61,`code`),mN(62,`p-helper`),lg(),mN(63,` aceita um objeto do tipo `),Ml(64,`code`),mN(65,`PoHelperOptions`),lg(),mN(66,`:`),lg(),Ml(67,`pre`)(68,`code`,7),mN(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),lg()(),Ml(70,`blockquote`)(71,`p`)(72,`strong`),mN(73,`Importante:`),lg(),mN(74,` A propriedade `),Ml(75,`code`),mN(76,`footerAction`),lg(),mN(77,` não pode ser utilizada quando o tipo do helper for `),Ml(78,`code`),mN(79,`info`),lg(),mN(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),lg()(),Ml(81,`h4`),mN(82,`Tokens customizáveis`),lg(),Ml(83,`p`),mN(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(85,`blockquote`)(86,`p`),mN(87,`Para maiores informações, acesse o guia `),Ml(88,`a`,8),mN(89,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(90,`.`),lg()(),Ml(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),mN(95,`Propriedade`),lg(),Ml(96,`th`),mN(97,`Descrição`),lg(),Ml(98,`th`),mN(99,`Valor Padrão`),lg()()(),Ml(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),mN(104,`--color`),lg()(),Ml(105,`td`),mN(106,`Cor principal do ícone`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-action-default)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--border-color-hover`),lg()(),Ml(114,`td`),mN(115,`Cor da borda no estado hover`),lg(),Ml(116,`td`)(117,`code`),mN(118,`var(--color-brand-01-darkest)`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--background-pressed`),lg()(),Ml(123,`td`),mN(124,`Cor de background no estado de pressionado\xA0`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-brand-01-light)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--color-disabled`),lg()(),Ml(132,`td`),mN(133,`Cor principal no estado disabled`),lg(),Ml(134,`td`)(135,`code`),mN(136,`var(--color-action-disabled)`),lg()()()()()(),Ml(137,`div`,9)(138,`h4`,10),mN(139,`Seletor`),lg(),Ml(140,`pre`,11),mN(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),lg()(),Ml(142,`h4`,12),mN(143,`Propriedades`),lg(),Ml(144,`table`,13)(145,`tr`,14)(146,`th`,15),mN(147,`Nome`),lg(),Ml(148,`th`,15),mN(149,`Tipo`),lg(),Ml(150,`th`,15),mN(151,`Padrão`),lg(),Ml(152,`th`,15),mN(153,`Descrição`),lg()(),Ml(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),mN(158,` p-append-in-body`),ql(159,`br`),lg()()(),Ml(160,`td`,20)(161,`code`,21),mN(162,`boolean`),lg()(),Ml(163,`td`,22),mN(164,`-`),lg(),Ml(165,`td`,23)(166,`em`)(167,`strong`),mN(168,`(opcional)`),lg()(),Ml(169,`p`),mN(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Ml(171,`code`),mN(172,`p-target`),lg(),mN(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),lg()()(),Ml(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),mN(178,` p-disabled`),ql(179,`br`),lg()()(),Ml(180,`td`,20)(181,`code`,21),mN(182,`boolean`),lg()(),Ml(183,`td`,22)(184,`p`)(185,`code`),mN(186,`false`),lg()()(),Ml(187,`td`,23)(188,`em`)(189,`strong`),mN(190,`(opcional)`),lg()(),Ml(191,`p`),mN(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),lg()()(),Ml(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),mN(197,` p-helper`),ql(198,`br`),lg()()(),Ml(199,`td`,20)(200,`code`,24),mN(201,`PoHelperOptions `),lg(),Ml(202,`code`,25),mN(203,` string`),lg()(),Ml(204,`td`,22),mN(205,`-`),lg(),Ml(206,`td`,23)(207,`em`)(208,`strong`),mN(209,`(opcional)`),lg()(),Ml(210,`p`),mN(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),lg(),Ml(212,`p`),mN(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Ml(214,`code`),mN(215,`PoHelperOptions`),lg(),mN(216,` para configuração avançada:`),lg(),Ml(217,`ul`)(218,`li`)(219,`code`),mN(220,`title`),lg(),mN(221,`: Título do popover.`),lg(),Ml(222,`li`)(223,`code`),mN(224,`content`),lg(),mN(225,`: Conteúdo explicativo exibido no popover.`),lg(),Ml(226,`li`)(227,`code`),mN(228,`type`),lg(),mN(229,`: Tipo do ícone (`),Ml(230,`code`),mN(231,`help`),lg(),mN(232,` ou `),Ml(233,`code`),mN(234,`info`),lg(),mN(235,`).`),lg(),Ml(236,`li`)(237,`code`),mN(238,`eventOnClick`),lg(),mN(239,`: Função chamada ao clicar no ícone.`),lg(),Ml(240,`li`)(241,`code`),mN(242,`footerAction`),lg(),mN(243,`: Objeto com `),Ml(244,`code`),mN(245,`label`),lg(),mN(246,` e `),Ml(247,`code`),mN(248,`action`),lg(),mN(249,` para ação customizada no rodapé do popover.`),lg()(),Ml(250,`p`),mN(251,`Exemplo de uso:`),lg(),Ml(252,`pre`)(253,`code`,6),mN(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),lg()()()(),Ml(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),mN(259,` p-size`),ql(260,`br`),lg()()(),Ml(261,`td`,20)(262,`code`,25),mN(263,`string`),lg()(),Ml(264,`td`,22)(265,`p`)(266,`code`),mN(267,`medium`),lg()()(),Ml(268,`td`,23)(269,`em`)(270,`strong`),mN(271,`(opcional)`),lg()(),Ml(272,`p`),mN(273,`Define o tamanho do componente:`),lg(),Ml(274,`ul`)(275,`li`)(276,`code`),mN(277,`small`),lg(),mN(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),lg(),Ml(279,`li`)(280,`code`),mN(281,`medium`),lg(),mN(282,`: altura do ícone com seu valor de 24px.`),lg()(),Ml(283,`blockquote`)(284,`p`),mN(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(286,`code`),mN(287,`medium`),lg(),mN(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(289,`a`,26),mN(290,`po-theme`),lg(),mN(291,`.`),lg()()()()(),Ml(292,`h3`),mN(293,`Interfaces`),lg(),Ml(294,`h4`,27)(295,`code`,5),mN(296,`PoHelperOptions`),lg()(),Ml(297,`div`,2)(298,`p`),mN(299,`Interface para configuração das opções de ajuda (`),Ml(300,`em`),mN(301,`helper`),lg(),mN(302,`).`),lg()(),Ml(303,`h4`,12),mN(304,`Propriedades`),lg(),Ml(305,`table`,13)(306,`tr`,14)(307,`th`,15),mN(308,`Nome`),lg(),Ml(309,`th`,15),mN(310,`Tipo`),lg(),Ml(311,`th`,15),mN(312,`Descrição`),lg()(),Ml(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),mN(317,` content`),ql(318,`br`),lg()()(),Ml(319,`td`,20)(320,`code`,25),mN(321,`string`),lg()(),Ml(322,`td`,23)(323,`em`)(324,`strong`),mN(325,`(opcional)`),lg()(),Ml(326,`p`),mN(327,`Texto explicativo exibido no popover.`),lg(),Ml(328,`p`),mN(329,`Suporta formatação básica com as tags `),Ml(330,`code`),mN(331,`<b>`),lg(),mN(332,` (negrito), `),Ml(333,`code`),mN(334,`<strong>`),lg(),mN(335,` (negrito), `),Ml(336,`code`),mN(337,`<i>`),lg(),mN(338,` (itálico), `),Ml(339,`code`),mN(340,`<em>`),lg(),mN(341,` (it\xE1lico) e
`),Ml(342,`code`),mN(343,`<u>`),lg(),mN(344,` (sublinhado).`),lg(),Ml(345,`p`),mN(346,`Exemplo:`),lg(),Ml(347,`pre`)(348,`code`,7),mN(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),lg()()()(),Ml(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),mN(354,` eventOnClick`),ql(355,`br`),lg()()(),Ml(356,`td`,20)(357,`code`,28),mN(358,`Function`),lg()(),Ml(359,`td`,23)(360,`em`)(361,`strong`),mN(362,`(opcional)`),lg()(),Ml(363,`p`),mN(364,`Evento disparado ao clicar no ícone do helper.`),lg(),Ml(365,`p`),mN(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),lg(),Ml(367,`p`),mN(368,`Pode ser uma função ou um `),Ml(369,`code`),mN(370,`EventEmitter`),lg(),mN(371,`.`),lg(),Ml(372,`p`),mN(373,`Exemplo:`),lg(),Ml(374,`pre`)(375,`code`),mN(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),lg()()()(),Ml(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),mN(381,` footerAction`),ql(382,`br`),lg()()(),Ml(383,`td`,20)(384,`code`,29),mN(385,`{ label: string; action: Function;
}`),lg()(),Ml(386,`td`,23)(387,`em`)(388,`strong`),mN(389,`(opcional)`),lg()(),Ml(390,`p`),mN(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Ml(392,`code`),mN(393,`help`),lg(),mN(394,` e desconsiderada quando o type for `),Ml(395,`code`),mN(396,`info`),lg(),mN(397,`.`),lg(),Ml(398,`p`),mN(399,`Deve ser um objeto com as propriedades:`),lg(),Ml(400,`ul`)(401,`li`)(402,`code`),mN(403,`label`),lg(),mN(404,`: Texto do botão.`),lg(),Ml(405,`li`)(406,`code`),mN(407,`action`),lg(),mN(408,`: Função executada ao clicar no botão.`),lg()(),Ml(409,`p`),mN(410,`Exemplo:`),lg(),Ml(411,`pre`)(412,`code`,7),mN(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),lg()()()(),Ml(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),mN(418,` title`),ql(419,`br`),lg()()(),Ml(420,`td`,20)(421,`code`,25),mN(422,`string`),lg()(),Ml(423,`td`,23)(424,`em`)(425,`strong`),mN(426,`(opcional)`),lg()(),Ml(427,`p`),mN(428,`Título do helper exibido no popover.`),lg()()(),Ml(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),mN(433,` type`),ql(434,`br`),lg()()(),Ml(435,`td`,20)(436,`code`,30),mN(437,`'info' `),lg(),Ml(438,`code`,31),mN(439,` 'help'`),lg()(),Ml(440,`td`,23)(441,`em`)(442,`strong`),mN(443,`(opcional)`),lg()(),Ml(444,`p`),mN(445,`Tipo do ícone exibido: `),Ml(446,`code`),mN(447,`info`),lg(),mN(448,` ou `),Ml(449,`code`),mN(450,`help`),lg(),mN(451,`.`),lg(),Ml(452,`p`),mN(453,`Quando o valor é `),Ml(454,`code`),mN(455,`info`),lg(),mN(456,`, o popover exibe apenas informações e não permite ações customizadas.`),lg(),Ml(457,`p`),mN(458,`Quando o valor é `),Ml(459,`code`),mN(460,`help`),lg(),mN(461,`, o popover pode exibir ações customizadas no rodapé.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-helper-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-helper-basic-view`)(6,`sample-po-helper-labs-view`)(7,`sample-po-helper-sales-performance-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[NL.forChild(Oe),NL]})}return o})();var it=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Ee]})}return o})();export{it as DocPoHelperModule};