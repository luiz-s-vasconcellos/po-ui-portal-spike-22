import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Bt as f8e,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ht as fr,Ii as hg,Li as ht,Mt as bp,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Xi as nw,Xr as Xn,Y as Mt,Yn as Cn,_r as Ky,aa as uN,ai as _N,er as EN,fi as ag,gi as bL,ha as ww,l as ar,li as _x,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,sr as Fx,ui as a0,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&Gl(0,`po-helper`,0),l&2&&nw(`p-helper`,i.poHelper)},dependencies:[Mt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Helper Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-helper-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,V)=>[o,V];var ve=()=>({label:`Medium`,value:`medium`});var Ce=()=>({label:`Small`,value:`small`});function ye(o,V){if(o&1){let p=Ax();Tl(0,`po-input`,9),ww(`ngModelChange`,function(i){Ky(p);let d=Fx();return uN(d.footerTitle,i)||(d.footerTitle=i),Xy(i)}),ht(`ngModelChange`,function(i){Ky(p);return Xy(Fx().setFooterTitle(i))}),ag(),a0()}if(o&2)Ew(`ngModel`,Fx().footerTitle),l0()}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(p){this.helperOptions=s(r({},this.helperOptions),{type:p})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(Gl(0,`po-helper`,0)(1,`po-divider`),Tl(2,`div`,1)(3,`po-input`,2),ht(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),ag(),a0(),Tl(4,`po-input`,3),ht(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),ag(),a0(),ag(),Tl(5,`div`,1),_x(6,ye,1,1,`po-input`,4),ag(),Tl(7,`div`,1)(8,`po-radio-group`,5),ht(`ngModelChange`,function(u){return i.updateHelperType(u)}),ag(),a0(),ag(),Tl(9,`div`,1)(10,`po-radio-group`,6),ww(`ngModelChange`,function(u){return uN(i.helperSize,u)||(i.helperSize=u),u}),ag(),a0(),ag(),Tl(11,`div`,1)(12,`po-checkbox`,7),ww(`ngModelChange`,function(u){return uN(i.helperDisabled,u)||(i.helperDisabled=u),u}),ag(),a0(),ag(),Gl(13,`po-divider`),Tl(14,`div`,1)(15,`po-button`,8),ht(`p-click`,function(){return i.reset()}),ag()()),l&2&&(nw(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),jp(3),nw(`ngModel`,i.helperOptions.title),l0(),jp(),nw(`ngModel`,i.helperOptions.content),l0(),jp(2),Dx(i.helperOptions.type===`help`?6:-1),jp(2),nw(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,EN(15,re,_N(13,ge),_N(14,xe))),l0(),jp(2),Ew(`ngModel`,i.helperSize),nw(`p-columns`,4)(`p-options`,EN(20,re,_N(18,ve),_N(19,Ce))),l0(),jp(2),Ew(`ngModel`,i.helperDisabled),l0())},dependencies:[gY,Ak,Zt,Xy$1,bp,iU,L0e,Mt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Helper Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-helper-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=fr.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(Tl(0,`po-container`)(1,`div`,0)(2,`div`,1),cN(3,`Sales Performance`),ag(),Gl(4,`po-helper`,2),ag(),Tl(5,`div`,3)(6,`div`,4),Gl(7,`po-chart`,5),ag()()()),l&2&&(jp(4),nw(`p-helper`,i.helperOptions),jp(3),nw(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[f8e,xp,Mt],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Helper Sales Performance`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-helper-sales-performance`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoHelperModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-helper`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoHelperComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-helper`),ag(),cN(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),ag(),Tl(18,`p`),cN(19,`Principais funcionalidades:`),ag(),Tl(20,`ul`)(21,`li`),cN(22,`Exibe ícone de ajuda (`),Tl(23,`code`),cN(24,`help`),ag(),cN(25,`) ou informação (`),Tl(26,`code`),cN(27,`info`),ag(),cN(28,`) conforme configuração.`),ag(),Tl(29,`li`),cN(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Tl(31,`code`),cN(32,`p-helper`),ag(),cN(33,`.`),ag(),Tl(34,`li`),cN(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),ag(),Tl(36,`li`),cN(37,`Controle do tamanho do componente via propriedade `),Tl(38,`code`),cN(39,`p-size`),ag(),cN(40,` (`),Tl(41,`code`),cN(42,`small`),ag(),cN(43,` ou `),Tl(44,`code`),cN(45,`medium`),ag(),cN(46,`).`),ag(),Tl(47,`li`),cN(48,`Permite customizar ações no rodapé do popover.`),ag()(),Tl(49,`p`),cN(50,`Exemplo de uso:`),ag(),Tl(51,`pre`)(52,`code`,6),cN(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),ag()(),Tl(54,`p`),cN(55,`Também é possível passar apenas uma string para o conteúdo:`),ag(),Tl(56,`pre`)(57,`code`,6),cN(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),ag()(),Tl(59,`p`),cN(60,`A propriedade `),Tl(61,`code`),cN(62,`p-helper`),ag(),cN(63,` aceita um objeto do tipo `),Tl(64,`code`),cN(65,`PoHelperOptions`),ag(),cN(66,`:`),ag(),Tl(67,`pre`)(68,`code`,7),cN(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),ag()(),Tl(70,`blockquote`)(71,`p`)(72,`strong`),cN(73,`Importante:`),ag(),cN(74,` A propriedade `),Tl(75,`code`),cN(76,`footerAction`),ag(),cN(77,` não pode ser utilizada quando o tipo do helper for `),Tl(78,`code`),cN(79,`info`),ag(),cN(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),ag()(),Tl(81,`h4`),cN(82,`Tokens customizáveis`),ag(),Tl(83,`p`),cN(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(85,`blockquote`)(86,`p`),cN(87,`Para maiores informações, acesse o guia `),Tl(88,`a`,8),cN(89,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(90,`.`),ag()(),Tl(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),cN(95,`Propriedade`),ag(),Tl(96,`th`),cN(97,`Descrição`),ag(),Tl(98,`th`),cN(99,`Valor Padrão`),ag()()(),Tl(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),cN(104,`--color`),ag()(),Tl(105,`td`),cN(106,`Cor principal do ícone`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-action-default)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--border-color-hover`),ag()(),Tl(114,`td`),cN(115,`Cor da borda no estado hover`),ag(),Tl(116,`td`)(117,`code`),cN(118,`var(--color-brand-01-darkest)`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--background-pressed`),ag()(),Tl(123,`td`),cN(124,`Cor de background no estado de pressionado\xA0`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-brand-01-light)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--color-disabled`),ag()(),Tl(132,`td`),cN(133,`Cor principal no estado disabled`),ag(),Tl(134,`td`)(135,`code`),cN(136,`var(--color-action-disabled)`),ag()()()()()(),Tl(137,`div`,9)(138,`h4`,10),cN(139,`Seletor`),ag(),Tl(140,`pre`,11),cN(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),ag()(),Tl(142,`h4`,12),cN(143,`Propriedades`),ag(),Tl(144,`table`,13)(145,`tr`,14)(146,`th`,15),cN(147,`Nome`),ag(),Tl(148,`th`,15),cN(149,`Tipo`),ag(),Tl(150,`th`,15),cN(151,`Padrão`),ag(),Tl(152,`th`,15),cN(153,`Descrição`),ag()(),Tl(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),cN(158,` p-append-in-body`),Gl(159,`br`),ag()()(),Tl(160,`td`,20)(161,`code`,21),cN(162,`boolean`),ag()(),Tl(163,`td`,22),cN(164,`-`),ag(),Tl(165,`td`,23)(166,`em`)(167,`strong`),cN(168,`(opcional)`),ag()(),Tl(169,`p`),cN(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Tl(171,`code`),cN(172,`p-target`),ag(),cN(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ag()()(),Tl(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),cN(178,` p-disabled`),Gl(179,`br`),ag()()(),Tl(180,`td`,20)(181,`code`,21),cN(182,`boolean`),ag()(),Tl(183,`td`,22)(184,`p`)(185,`code`),cN(186,`false`),ag()()(),Tl(187,`td`,23)(188,`em`)(189,`strong`),cN(190,`(opcional)`),ag()(),Tl(191,`p`),cN(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),ag()()(),Tl(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),cN(197,` p-helper`),Gl(198,`br`),ag()()(),Tl(199,`td`,20)(200,`code`,24),cN(201,`PoHelperOptions `),ag(),Tl(202,`code`,25),cN(203,` string`),ag()(),Tl(204,`td`,22),cN(205,`-`),ag(),Tl(206,`td`,23)(207,`em`)(208,`strong`),cN(209,`(opcional)`),ag()(),Tl(210,`p`),cN(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),ag(),Tl(212,`p`),cN(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Tl(214,`code`),cN(215,`PoHelperOptions`),ag(),cN(216,` para configuração avançada:`),ag(),Tl(217,`ul`)(218,`li`)(219,`code`),cN(220,`title`),ag(),cN(221,`: Título do popover.`),ag(),Tl(222,`li`)(223,`code`),cN(224,`content`),ag(),cN(225,`: Conteúdo explicativo exibido no popover.`),ag(),Tl(226,`li`)(227,`code`),cN(228,`type`),ag(),cN(229,`: Tipo do ícone (`),Tl(230,`code`),cN(231,`help`),ag(),cN(232,` ou `),Tl(233,`code`),cN(234,`info`),ag(),cN(235,`).`),ag(),Tl(236,`li`)(237,`code`),cN(238,`eventOnClick`),ag(),cN(239,`: Função chamada ao clicar no ícone.`),ag(),Tl(240,`li`)(241,`code`),cN(242,`footerAction`),ag(),cN(243,`: Objeto com `),Tl(244,`code`),cN(245,`label`),ag(),cN(246,` e `),Tl(247,`code`),cN(248,`action`),ag(),cN(249,` para ação customizada no rodapé do popover.`),ag()(),Tl(250,`p`),cN(251,`Exemplo de uso:`),ag(),Tl(252,`pre`)(253,`code`,6),cN(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),ag()()()(),Tl(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),cN(259,` p-size`),Gl(260,`br`),ag()()(),Tl(261,`td`,20)(262,`code`,25),cN(263,`string`),ag()(),Tl(264,`td`,22)(265,`p`)(266,`code`),cN(267,`medium`),ag()()(),Tl(268,`td`,23)(269,`em`)(270,`strong`),cN(271,`(opcional)`),ag()(),Tl(272,`p`),cN(273,`Define o tamanho do componente:`),ag(),Tl(274,`ul`)(275,`li`)(276,`code`),cN(277,`small`),ag(),cN(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),ag(),Tl(279,`li`)(280,`code`),cN(281,`medium`),ag(),cN(282,`: altura do ícone com seu valor de 24px.`),ag()(),Tl(283,`blockquote`)(284,`p`),cN(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(286,`code`),cN(287,`medium`),ag(),cN(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(289,`a`,26),cN(290,`po-theme`),ag(),cN(291,`.`),ag()()()()(),Tl(292,`h3`),cN(293,`Interfaces`),ag(),Tl(294,`h4`,27)(295,`code`,5),cN(296,`PoHelperOptions`),ag()(),Tl(297,`div`,2)(298,`p`),cN(299,`Interface para configuração das opções de ajuda (`),Tl(300,`em`),cN(301,`helper`),ag(),cN(302,`).`),ag()(),Tl(303,`h4`,12),cN(304,`Propriedades`),ag(),Tl(305,`table`,13)(306,`tr`,14)(307,`th`,15),cN(308,`Nome`),ag(),Tl(309,`th`,15),cN(310,`Tipo`),ag(),Tl(311,`th`,15),cN(312,`Descrição`),ag()(),Tl(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),cN(317,` content`),Gl(318,`br`),ag()()(),Tl(319,`td`,20)(320,`code`,25),cN(321,`string`),ag()(),Tl(322,`td`,23)(323,`em`)(324,`strong`),cN(325,`(opcional)`),ag()(),Tl(326,`p`),cN(327,`Texto explicativo exibido no popover.`),ag(),Tl(328,`p`),cN(329,`Suporta formatação básica com as tags `),Tl(330,`code`),cN(331,`<b>`),ag(),cN(332,` (negrito), `),Tl(333,`code`),cN(334,`<strong>`),ag(),cN(335,` (negrito), `),Tl(336,`code`),cN(337,`<i>`),ag(),cN(338,` (itálico), `),Tl(339,`code`),cN(340,`<em>`),ag(),cN(341,` (it\xE1lico) e
`),Tl(342,`code`),cN(343,`<u>`),ag(),cN(344,` (sublinhado).`),ag(),Tl(345,`p`),cN(346,`Exemplo:`),ag(),Tl(347,`pre`)(348,`code`,7),cN(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ag()()()(),Tl(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),cN(354,` eventOnClick`),Gl(355,`br`),ag()()(),Tl(356,`td`,20)(357,`code`,28),cN(358,`Function`),ag()(),Tl(359,`td`,23)(360,`em`)(361,`strong`),cN(362,`(opcional)`),ag()(),Tl(363,`p`),cN(364,`Evento disparado ao clicar no ícone do helper.`),ag(),Tl(365,`p`),cN(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),ag(),Tl(367,`p`),cN(368,`Pode ser uma função ou um `),Tl(369,`code`),cN(370,`EventEmitter`),ag(),cN(371,`.`),ag(),Tl(372,`p`),cN(373,`Exemplo:`),ag(),Tl(374,`pre`)(375,`code`),cN(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ag()()()(),Tl(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),cN(381,` footerAction`),Gl(382,`br`),ag()()(),Tl(383,`td`,20)(384,`code`,29),cN(385,`{ label: string; action: Function;
}`),ag()(),Tl(386,`td`,23)(387,`em`)(388,`strong`),cN(389,`(opcional)`),ag()(),Tl(390,`p`),cN(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Tl(392,`code`),cN(393,`help`),ag(),cN(394,` e desconsiderada quando o type for `),Tl(395,`code`),cN(396,`info`),ag(),cN(397,`.`),ag(),Tl(398,`p`),cN(399,`Deve ser um objeto com as propriedades:`),ag(),Tl(400,`ul`)(401,`li`)(402,`code`),cN(403,`label`),ag(),cN(404,`: Texto do botão.`),ag(),Tl(405,`li`)(406,`code`),cN(407,`action`),ag(),cN(408,`: Função executada ao clicar no botão.`),ag()(),Tl(409,`p`),cN(410,`Exemplo:`),ag(),Tl(411,`pre`)(412,`code`,7),cN(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ag()()()(),Tl(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),cN(418,` title`),Gl(419,`br`),ag()()(),Tl(420,`td`,20)(421,`code`,25),cN(422,`string`),ag()(),Tl(423,`td`,23)(424,`em`)(425,`strong`),cN(426,`(opcional)`),ag()(),Tl(427,`p`),cN(428,`Título do helper exibido no popover.`),ag()()(),Tl(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),cN(433,` type`),Gl(434,`br`),ag()()(),Tl(435,`td`,20)(436,`code`,30),cN(437,`'info' `),ag(),Tl(438,`code`,31),cN(439,` 'help'`),ag()(),Tl(440,`td`,23)(441,`em`)(442,`strong`),cN(443,`(opcional)`),ag()(),Tl(444,`p`),cN(445,`Tipo do ícone exibido: `),Tl(446,`code`),cN(447,`info`),ag(),cN(448,` ou `),Tl(449,`code`),cN(450,`help`),ag(),cN(451,`.`),ag(),Tl(452,`p`),cN(453,`Quando o valor é `),Tl(454,`code`),cN(455,`info`),ag(),cN(456,`, o popover exibe apenas informações e não permite ações customizadas.`),ag(),Tl(457,`p`),cN(458,`Quando o valor é `),Tl(459,`code`),cN(460,`help`),ag(),cN(461,`, o popover pode exibir ações customizadas no rodapé.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-helper-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-helper-basic-view`)(6,`sample-po-helper-labs-view`)(7,`sample-po-helper-sales-performance-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[bL.forChild(Oe),bL]})}return o})();var it=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Ee]})}return o})();export{it as DocPoHelperModule};