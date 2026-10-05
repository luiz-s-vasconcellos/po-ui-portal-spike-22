import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as pt,C as C4,Ca as zO,Cr as Kc,Gi as mg,Gn as Ax,Hr as RN,Ji as p0,Jr as TE,Oi as he,Ri as kL,Rt as cae,T as Cze,Tn as uze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Wr as Rx,X as Mc,Xn as Bx,_a as wn,ca as ue$1,ei as Wx,fr as Hp,gi as e_,i as _a,in as mae,ir as E,jn as wte,kn as wa,mn as rb,nr as DN,oi as aN,pa as vN,qn as BP,r as Ta,tr as D9,tt as Nt,ua as ug,ui as cE,un as oi,ur as Hn,ut as Rl,va as xN,yr as Jv,zr as Qn}from"./main-DRZDQSOK.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&Kc(0,`po-helper`,0),l&2&&cE(`p-helper`,i.poHelper)},dependencies:[Nt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Helper Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-helper-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,V)=>[o,V];var ve=()=>({label:`Medium`,value:`medium`});var Ce=()=>({label:`Small`,value:`small`});function ye(o,V){if(o&1){let p=Bx();Ac(0,`po-input`,9),RE(`ngModelChange`,function(i){Jv(p);let d=Wx();return DN(d.footerTitle,i)||(d.footerTitle=i),e_(i)}),pt(`ngModelChange`,function(i){Jv(p);let d=Wx();return e_(d.setFooterTitle(i))}),ug(),p0()}if(o&2){let p=Wx();TE(`ngModel`,p.footerTitle),m0()}}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(p){this.helperOptions=s(r({},this.helperOptions),{type:p})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(Kc(0,`po-helper`,0)(1,`po-divider`),Ac(2,`div`,1)(3,`po-input`,2),pt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),ug(),p0(),Ac(4,`po-input`,3),pt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),ug(),p0(),ug(),Ac(5,`div`,1),Rx(6,ye,1,1,`po-input`,4),ug(),Ac(7,`div`,1)(8,`po-radio-group`,5),pt(`ngModelChange`,function(u){return i.updateHelperType(u)}),ug(),p0(),ug(),Ac(9,`div`,1)(10,`po-radio-group`,6),RE(`ngModelChange`,function(u){return DN(i.helperSize,u)||(i.helperSize=u),u}),ug(),p0(),ug(),Ac(11,`div`,1)(12,`po-checkbox`,7),RE(`ngModelChange`,function(u){return DN(i.helperDisabled,u)||(i.helperDisabled=u),u}),ug(),p0(),ug(),Kc(13,`po-divider`),Ac(14,`div`,1)(15,`po-button`,8),pt(`p-click`,function(){return i.reset()}),ug()()),l&2&&(cE(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),Hp(3),cE(`ngModel`,i.helperOptions.title),m0(),Hp(),cE(`ngModel`,i.helperOptions.content),m0(),Hp(2),Ax(i.helperOptions.type===`help`?6:-1),Hp(2),cE(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,xN(15,re,RN(13,ge),RN(14,xe))),m0(),Hp(2),TE(`ngModel`,i.helperSize),cE(`p-columns`,4)(`p-options`,xN(20,re,RN(18,ve),RN(19,Ce))),m0(),Hp(2),TE(`ngModel`,i.helperDisabled),m0())},dependencies:[D9,BP,oi,rb,Rl,C4,wte,Nt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Helper Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-helper-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=wa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(Ac(0,`po-container`)(1,`div`,0)(2,`div`,1),vN(3,`Sales Performance`),ug(),Kc(4,`po-helper`,2),ug(),Ac(5,`div`,3)(6,`div`,4),Kc(7,`po-chart`,5),ug()()()),l&2&&(Hp(4),cE(`p-helper`,i.helperOptions),Hp(3),cE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[uze,Mc,Nt],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Helper Sales Performance`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-helper-sales-performance`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoHelperModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-helper`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoHelperComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-helper`),ug(),vN(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),ug(),Ac(18,`p`),vN(19,`Principais funcionalidades:`),ug(),Ac(20,`ul`)(21,`li`),vN(22,`Exibe ícone de ajuda (`),Ac(23,`code`),vN(24,`help`),ug(),vN(25,`) ou informação (`),Ac(26,`code`),vN(27,`info`),ug(),vN(28,`) conforme configuração.`),ug(),Ac(29,`li`),vN(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Ac(31,`code`),vN(32,`p-helper`),ug(),vN(33,`.`),ug(),Ac(34,`li`),vN(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),ug(),Ac(36,`li`),vN(37,`Controle do tamanho do componente via propriedade `),Ac(38,`code`),vN(39,`p-size`),ug(),vN(40,` (`),Ac(41,`code`),vN(42,`small`),ug(),vN(43,` ou `),Ac(44,`code`),vN(45,`medium`),ug(),vN(46,`).`),ug(),Ac(47,`li`),vN(48,`Permite customizar ações no rodapé do popover.`),ug()(),Ac(49,`p`),vN(50,`Exemplo de uso:`),ug(),Ac(51,`pre`)(52,`code`,6),vN(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),ug()(),Ac(54,`p`),vN(55,`Também é possível passar apenas uma string para o conteúdo:`),ug(),Ac(56,`pre`)(57,`code`,6),vN(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),ug()(),Ac(59,`p`),vN(60,`A propriedade `),Ac(61,`code`),vN(62,`p-helper`),ug(),vN(63,` aceita um objeto do tipo `),Ac(64,`code`),vN(65,`PoHelperOptions`),ug(),vN(66,`:`),ug(),Ac(67,`pre`)(68,`code`,7),vN(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),ug()(),Ac(70,`blockquote`)(71,`p`)(72,`strong`),vN(73,`Importante:`),ug(),vN(74,` A propriedade `),Ac(75,`code`),vN(76,`footerAction`),ug(),vN(77,` não pode ser utilizada quando o tipo do helper for `),Ac(78,`code`),vN(79,`info`),ug(),vN(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),ug()(),Ac(81,`h4`),vN(82,`Tokens customizáveis`),ug(),Ac(83,`p`),vN(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(85,`blockquote`)(86,`p`),vN(87,`Para maiores informações, acesse o guia `),Ac(88,`a`,8),vN(89,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(90,`.`),ug()(),Ac(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),vN(95,`Propriedade`),ug(),Ac(96,`th`),vN(97,`Descrição`),ug(),Ac(98,`th`),vN(99,`Valor Padrão`),ug()()(),Ac(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),vN(104,`--color`),ug()(),Ac(105,`td`),vN(106,`Cor principal do ícone`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-action-default)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--border-color-hover`),ug()(),Ac(114,`td`),vN(115,`Cor da borda no estado hover`),ug(),Ac(116,`td`)(117,`code`),vN(118,`var(--color-brand-01-darkest)`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--background-pressed`),ug()(),Ac(123,`td`),vN(124,`Cor de background no estado de pressionado\xA0`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-brand-01-light)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--color-disabled`),ug()(),Ac(132,`td`),vN(133,`Cor principal no estado disabled`),ug(),Ac(134,`td`)(135,`code`),vN(136,`var(--color-action-disabled)`),ug()()()()()(),Ac(137,`div`,9)(138,`h4`,10),vN(139,`Seletor`),ug(),Ac(140,`pre`,11),vN(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),ug()(),Ac(142,`h4`,12),vN(143,`Propriedades`),ug(),Ac(144,`table`,13)(145,`tr`,14)(146,`th`,15),vN(147,`Nome`),ug(),Ac(148,`th`,15),vN(149,`Tipo`),ug(),Ac(150,`th`,15),vN(151,`Padrão`),ug(),Ac(152,`th`,15),vN(153,`Descrição`),ug()(),Ac(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),vN(158,` p-append-in-body`),Kc(159,`br`),ug()()(),Ac(160,`td`,20)(161,`code`,21),vN(162,`boolean`),ug()(),Ac(163,`td`,22),vN(164,`-`),ug(),Ac(165,`td`,23)(166,`em`)(167,`strong`),vN(168,`(opcional)`),ug()(),Ac(169,`p`),vN(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Ac(171,`code`),vN(172,`p-target`),ug(),vN(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ug()()(),Ac(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),vN(178,` p-disabled`),Kc(179,`br`),ug()()(),Ac(180,`td`,20)(181,`code`,21),vN(182,`boolean`),ug()(),Ac(183,`td`,22)(184,`p`)(185,`code`),vN(186,`false`),ug()()(),Ac(187,`td`,23)(188,`em`)(189,`strong`),vN(190,`(opcional)`),ug()(),Ac(191,`p`),vN(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),ug()()(),Ac(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),vN(197,` p-helper`),Kc(198,`br`),ug()()(),Ac(199,`td`,20)(200,`code`,24),vN(201,`PoHelperOptions `),ug(),Ac(202,`code`,25),vN(203,` string`),ug()(),Ac(204,`td`,22),vN(205,`-`),ug(),Ac(206,`td`,23)(207,`em`)(208,`strong`),vN(209,`(opcional)`),ug()(),Ac(210,`p`),vN(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),ug(),Ac(212,`p`),vN(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Ac(214,`code`),vN(215,`PoHelperOptions`),ug(),vN(216,` para configuração avançada:`),ug(),Ac(217,`ul`)(218,`li`)(219,`code`),vN(220,`title`),ug(),vN(221,`: Título do popover.`),ug(),Ac(222,`li`)(223,`code`),vN(224,`content`),ug(),vN(225,`: Conteúdo explicativo exibido no popover.`),ug(),Ac(226,`li`)(227,`code`),vN(228,`type`),ug(),vN(229,`: Tipo do ícone (`),Ac(230,`code`),vN(231,`help`),ug(),vN(232,` ou `),Ac(233,`code`),vN(234,`info`),ug(),vN(235,`).`),ug(),Ac(236,`li`)(237,`code`),vN(238,`eventOnClick`),ug(),vN(239,`: Função chamada ao clicar no ícone.`),ug(),Ac(240,`li`)(241,`code`),vN(242,`footerAction`),ug(),vN(243,`: Objeto com `),Ac(244,`code`),vN(245,`label`),ug(),vN(246,` e `),Ac(247,`code`),vN(248,`action`),ug(),vN(249,` para ação customizada no rodapé do popover.`),ug()(),Ac(250,`p`),vN(251,`Exemplo de uso:`),ug(),Ac(252,`pre`)(253,`code`,6),vN(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),ug()()()(),Ac(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),vN(259,` p-size`),Kc(260,`br`),ug()()(),Ac(261,`td`,20)(262,`code`,25),vN(263,`string`),ug()(),Ac(264,`td`,22)(265,`p`)(266,`code`),vN(267,`medium`),ug()()(),Ac(268,`td`,23)(269,`em`)(270,`strong`),vN(271,`(opcional)`),ug()(),Ac(272,`p`),vN(273,`Define o tamanho do componente:`),ug(),Ac(274,`ul`)(275,`li`)(276,`code`),vN(277,`small`),ug(),vN(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),ug(),Ac(279,`li`)(280,`code`),vN(281,`medium`),ug(),vN(282,`: altura do ícone com seu valor de 24px.`),ug()(),Ac(283,`blockquote`)(284,`p`),vN(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(286,`code`),vN(287,`medium`),ug(),vN(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(289,`a`,26),vN(290,`po-theme`),ug(),vN(291,`.`),ug()()()()(),Ac(292,`h3`),vN(293,`Interfaces`),ug(),Ac(294,`h4`,27)(295,`code`,5),vN(296,`PoHelperOptions`),ug()(),Ac(297,`div`,2)(298,`p`),vN(299,`Interface para configuração das opções de ajuda (`),Ac(300,`em`),vN(301,`helper`),ug(),vN(302,`).`),ug()(),Ac(303,`h4`,12),vN(304,`Propriedades`),ug(),Ac(305,`table`,13)(306,`tr`,14)(307,`th`,15),vN(308,`Nome`),ug(),Ac(309,`th`,15),vN(310,`Tipo`),ug(),Ac(311,`th`,15),vN(312,`Descrição`),ug()(),Ac(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),vN(317,` content`),Kc(318,`br`),ug()()(),Ac(319,`td`,20)(320,`code`,25),vN(321,`string`),ug()(),Ac(322,`td`,23)(323,`em`)(324,`strong`),vN(325,`(opcional)`),ug()(),Ac(326,`p`),vN(327,`Texto explicativo exibido no popover.`),ug(),Ac(328,`p`),vN(329,`Suporta formatação básica com as tags `),Ac(330,`code`),vN(331,`<b>`),ug(),vN(332,` (negrito), `),Ac(333,`code`),vN(334,`<strong>`),ug(),vN(335,` (negrito), `),Ac(336,`code`),vN(337,`<i>`),ug(),vN(338,` (itálico), `),Ac(339,`code`),vN(340,`<em>`),ug(),vN(341,` (it\xE1lico) e
`),Ac(342,`code`),vN(343,`<u>`),ug(),vN(344,` (sublinhado).`),ug(),Ac(345,`p`),vN(346,`Exemplo:`),ug(),Ac(347,`pre`)(348,`code`,7),vN(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ug()()()(),Ac(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),vN(354,` eventOnClick`),Kc(355,`br`),ug()()(),Ac(356,`td`,20)(357,`code`,28),vN(358,`Function`),ug()(),Ac(359,`td`,23)(360,`em`)(361,`strong`),vN(362,`(opcional)`),ug()(),Ac(363,`p`),vN(364,`Evento disparado ao clicar no ícone do helper.`),ug(),Ac(365,`p`),vN(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),ug(),Ac(367,`p`),vN(368,`Pode ser uma função ou um `),Ac(369,`code`),vN(370,`EventEmitter`),ug(),vN(371,`.`),ug(),Ac(372,`p`),vN(373,`Exemplo:`),ug(),Ac(374,`pre`)(375,`code`),vN(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ug()()()(),Ac(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),vN(381,` footerAction`),Kc(382,`br`),ug()()(),Ac(383,`td`,20)(384,`code`,29),vN(385,`{ label: string; action: Function;
}`),ug()(),Ac(386,`td`,23)(387,`em`)(388,`strong`),vN(389,`(opcional)`),ug()(),Ac(390,`p`),vN(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Ac(392,`code`),vN(393,`help`),ug(),vN(394,` e desconsiderada quando o type for `),Ac(395,`code`),vN(396,`info`),ug(),vN(397,`.`),ug(),Ac(398,`p`),vN(399,`Deve ser um objeto com as propriedades:`),ug(),Ac(400,`ul`)(401,`li`)(402,`code`),vN(403,`label`),ug(),vN(404,`: Texto do botão.`),ug(),Ac(405,`li`)(406,`code`),vN(407,`action`),ug(),vN(408,`: Função executada ao clicar no botão.`),ug()(),Ac(409,`p`),vN(410,`Exemplo:`),ug(),Ac(411,`pre`)(412,`code`,7),vN(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ug()()()(),Ac(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),vN(418,` title`),Kc(419,`br`),ug()()(),Ac(420,`td`,20)(421,`code`,25),vN(422,`string`),ug()(),Ac(423,`td`,23)(424,`em`)(425,`strong`),vN(426,`(opcional)`),ug()(),Ac(427,`p`),vN(428,`Título do helper exibido no popover.`),ug()()(),Ac(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),vN(433,` type`),Kc(434,`br`),ug()()(),Ac(435,`td`,20)(436,`code`,30),vN(437,`'info' `),ug(),Ac(438,`code`,31),vN(439,` 'help'`),ug()(),Ac(440,`td`,23)(441,`em`)(442,`strong`),vN(443,`(opcional)`),ug()(),Ac(444,`p`),vN(445,`Tipo do ícone exibido: `),Ac(446,`code`),vN(447,`info`),ug(),vN(448,` ou `),Ac(449,`code`),vN(450,`help`),ug(),vN(451,`.`),ug(),Ac(452,`p`),vN(453,`Quando o valor é `),Ac(454,`code`),vN(455,`info`),ug(),vN(456,`, o popover exibe apenas informações e não permite ações customizadas.`),ug(),Ac(457,`p`),vN(458,`Quando o valor é `),Ac(459,`code`),vN(460,`help`),ug(),vN(461,`, o popover pode exibir ações customizadas no rodapé.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-helper-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-helper-basic-view`)(6,`sample-po-helper-labs-view`)(7,`sample-po-helper-sales-performance-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[kL.forChild(Oe),kL]})}return o})();var it=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[Ta,Ee]})}return o})();export{it as DocPoHelperModule};