import{$i as ow,$r as Vx,Et as V8e,Ii as ht,Ir as Qy,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Ui as lg,Xn as Cn,Yi as mN,_ as $8e,_r as Ml,bi as cw,br as NL,c as Ws,dn as oU,f as js,ga as w,l as ar,mr as MN,n as Fa,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ut as Obe,vt as SCe,wa as zx,x as A8e}from"./main-NT5YGKBQ.js";var G=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&ql(0,`po-page-job-scheduler`,0),o&2&&cw(`p-breadcrumb`,l.breadcrumb)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return i})();var ne=i=>({"docs-sample-code-tabs":i});var W=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Job Scheduler - Background Process`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-job-scheduler-background-process`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ne,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,G],encapsulation:2,changeDetection:1})}return i})();function oe(i,_){if(i&1){let r=Vx();Ml(0,`h1`),mN(1,`Etapa 1`),lg(),Ml(2,`po-dynamic-form`,4),ht(`p-form`,function(l){Qy(r);return Jy(zx().getFormExample(l))}),lg()}if(i&2){let r=zx();Up(2),cw(`p-fields`,r.parametersForm)}}function ae(i,_){if(i&1){let r=Vx();Ml(0,`po-table`,5),ht(`p-selected`,function(l){Qy(r);return Jy(zx().selectedItem(l))}),lg()}if(i&2)cw(`p-items`,zx().items)(`p-selectable`,!0)}function re(i,_){if(i&1&&(Ml(0,`po-widget`,6),ql(1,`po-dynamic-view`,7),lg()),i&2){let r=zx();Up(),cw(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(Ml(0,`po-page-job-scheduler`,0),ow(1,oe,3,1,`ng-template`,1)(2,ae,1,2,`ng-template`,2)(3,re,2,2,`ng-template`,3),lg()),o&2&&(cw(`p-step-execution-last`,!0),Up(),cw(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),Up(),cw(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[Obe,A8e,oU,$8e,Fa,Ws,js],encapsulation:2,changeDetection:1})}return i})();var me=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Job Scheduler - Directives`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-job-scheduler-directives`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,me,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,U],encapsulation:2,changeDetection:1})}return i})();var $=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&ql(0,`po-page-job-scheduler`,0),o&2&&cw(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[Fa],encapsulation:2})}return i})();var se=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Job Scheduler - Navegação Flexível`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-flexible-navigation',
  templateUrl: './sample-po-page-job-scheduler-flexible-navigation.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerFlexibleNavigationComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Navega\xE7\xE3o Flex\xEDvel' }]
  };

  parameters: Array<PoDynamicFormField> = [
    {
      property: 'server',
      label: 'Servidor',
      required: true,
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'port',
      label: 'Porta',
      type: 'number',
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'environment',
      label: 'Ambiente',
      options: ['Desenvolvimento', 'Homologa\xE7\xE3o', 'Produ\xE7\xE3o'],
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'notify',
      label: 'Notificar por e-mail',
      type: 'boolean',
      booleanTrue: 'Sim',
      booleanFalse: 'N\xE3o',
      gridLgColumns: 6,
      gridXlColumns: 6
    }
  ];
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-job-scheduler-flexible-navigation`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,se,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Componente`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoPageJobSchedulerComponent`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`O `),Ml(13,`code`),mN(14,`po-page-job-scheduler`),lg(),mN(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),lg(),Ml(16,`p`),mN(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),lg(),Ml(18,`p`),mN(19,`Veja mais sobre os padrões utilizados nas requisições no `),Ml(20,`a`,6),mN(21,`Guia de implementação de APIs`),lg(),mN(22,`.`),lg(),Ml(23,`h4`),mN(24,`Tokens customizáveis`),lg(),Ml(25,`blockquote`)(26,`p`),mN(27,`Para maiores informações, acesse o guia `),Ml(28,`a`,7),mN(29,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(30,`.`),lg()(),Ml(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),mN(35,`Propriedade`),lg(),Ml(36,`th`),mN(37,`Descrição`),lg(),Ml(38,`th`),mN(39,`Valor Padrão`),lg()()(),Ml(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),mN(44,`Header`),lg()(),ql(45,`td`)(46,`td`),lg(),Ml(47,`tr`)(48,`td`)(49,`code`),mN(50,`--padding`),lg()(),Ml(51,`td`),mN(52,`Espaçamento do header`),lg(),Ml(53,`td`)(54,`code`),mN(55,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(56,`tr`)(57,`td`)(58,`code`),mN(59,`--gap`),lg()(),Ml(60,`td`),mN(61,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(62,`td`)(63,`code`),mN(64,`var(--spacing-md)`),lg()()(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--gap-actions`),lg()(),Ml(69,`td`),mN(70,`Espaçamento entre as ações`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--spacing-xs)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-family`),lg()(),Ml(78,`td`),mN(79,`Família tipográfica do título`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-family-theme)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`strong`),mN(86,`Content`),lg()(),ql(87,`td`)(88,`td`),lg(),Ml(89,`tr`)(90,`td`)(91,`code`),mN(92,`--padding-content`),lg()(),Ml(93,`td`),mN(94,`Espaçamento do conteúdo`),lg(),Ml(95,`td`)(96,`code`),mN(97,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(98,`div`,8)(99,`h4`,9),mN(100,`Seletor`),lg(),Ml(101,`pre`,10),mN(102,`<po-page-job-scheduler
    p-allow-direct-navigation="boolean"
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),lg()(),Ml(103,`h4`,11),mN(104,`Propriedades`),lg(),Ml(105,`table`,12)(106,`tr`,13)(107,`th`,14),mN(108,`Nome`),lg(),Ml(109,`th`,14),mN(110,`Tipo`),lg(),Ml(111,`th`,14),mN(112,`Padrão`),lg(),Ml(113,`th`,14),mN(114,`Descrição`),lg()(),Ml(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),mN(119,` p-allow-direct-navigation`),ql(120,`br`),lg()()(),Ml(121,`td`,19)(122,`code`,20),mN(123,`boolean`),lg()(),Ml(124,`td`,21)(125,`p`)(126,`code`),mN(127,`false`),lg()()(),Ml(128,`td`,22)(129,`em`)(130,`strong`),mN(131,`(opcional)`),lg()(),Ml(132,`p`),mN(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),lg(),Ml(134,`p`),mN(135,`Quando habilitado (`),Ml(136,`code`),mN(137,`true`),lg(),mN(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),lg(),Ml(139,`blockquote`)(140,`p`),mN(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),lg()()()(),Ml(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),mN(146,` p-before-send`),ql(147,`br`),lg()()(),Ml(148,`td`,19)(149,`code`,23),mN(150,`unknown`),lg()(),Ml(151,`td`,21),mN(152,`-`),lg(),Ml(153,`td`,22)(154,`em`)(155,`strong`),mN(156,`(opcional)`),lg()(),Ml(157,`p`),mN(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),lg(),Ml(159,`blockquote`)(160,`p`),mN(161,`Deve retornar um objeto do tipo `),Ml(162,`code`),mN(163,`PoPageJobScheduler`),lg(),mN(164,` para ser adicionado ao model do PoPageJobScheduler.`),lg()(),Ml(165,`blockquote`)(166,`p`),mN(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Ml(168,`code`),mN(169,`PoJobSchedulerInternal`),lg(),mN(170,`.`),lg()(),Ml(171,`p`),mN(172,`O contexto da função que será chamada, será o mesmo que o do `),Ml(173,`code`),mN(174,`PoPageJobScheduler`),lg(),mN(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Ml(176,`code`),mN(177,`bind`),lg(),mN(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Ml(179,`code`),mN(180,`beforeSend`),lg(),mN(181,`:`),lg(),Ml(182,`pre`)(183,`code`),mN(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),lg()()()(),Ml(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),mN(189,` p-breadcrumb`),ql(190,`br`),lg()()(),Ml(191,`td`,19)(192,`code`,24),mN(193,`PoBreadcrumb`),lg()(),Ml(194,`td`,21),mN(195,`-`),lg(),Ml(196,`td`,22)(197,`em`)(198,`strong`),mN(199,`(opcional)`),lg()(),Ml(200,`p`),mN(201,`Objeto com as propriedades do breadcrumb.`),lg()()(),Ml(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),mN(206,` p-components-size`),ql(207,`br`),lg()()(),Ml(208,`td`,19)(209,`code`,25),mN(210,`string`),lg()(),Ml(211,`td`,21)(212,`p`)(213,`code`),mN(214,`medium`),lg()()(),Ml(215,`td`,22)(216,`em`)(217,`strong`),mN(218,`(opcional)`),lg()(),Ml(219,`p`),mN(220,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(221,`ul`)(222,`li`)(223,`code`),mN(224,`small`),lg(),mN(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(226,`li`)(227,`code`),mN(228,`medium`),lg(),mN(229,`: aplica a medida medium de cada componente.`),lg()(),Ml(230,`blockquote`)(231,`p`),mN(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(233,`code`),mN(234,`medium`),lg(),mN(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(236,`a`,26),mN(237,`po-theme`),lg(),mN(238,`.`),lg()()()(),Ml(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),mN(243,` (p-error)`),ql(244,`br`),lg()()(),Ml(245,`td`,19)(246,`code`,29),mN(247,`EventEmitter`),lg()(),Ml(248,`td`,21),mN(249,`-`),lg(),Ml(250,`td`,22)(251,`em`)(252,`strong`),mN(253,`(opcional)`),lg()(),Ml(254,`p`),mN(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),lg()()(),Ml(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),mN(260,` p-parameters`),ql(261,`br`),lg()()(),Ml(262,`td`,19)(263,`code`,30),mN(264,`Array<PoDynamicFormField>`),lg()(),Ml(265,`td`,21),mN(266,`-`),lg(),Ml(267,`td`,22)(268,`p`),mN(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),lg(),Ml(270,`p`),mN(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),lg()()(),Ml(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),mN(276,` p-service-api`),ql(277,`br`),lg()()(),Ml(278,`td`,19)(279,`code`,25),mN(280,`string`),lg()(),Ml(281,`td`,21),mN(282,`-`),lg(),Ml(283,`td`,22)(284,`p`),mN(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),lg(),Ml(286,`h4`),mN(287,`Processos`),lg(),Ml(288,`p`),mN(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Ml(290,`code`),mN(291,`GET`),lg(),mN(292,` para o endpoint `),Ml(293,`code`),mN(294,`{service-api}/processes`),lg(),mN(295,`, para buscar
essa lista de processos.`),lg(),Ml(296,`p`),mN(297,`Este endpoint `),Ml(298,`code`),mN(299,`{service-api}/processes`),lg(),mN(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),lg(),Ml(301,`pre`)(302,`code`),mN(303,`GET {service-api}/processes
`),lg()(),Ml(304,`pre`)(305,`code`),mN(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),lg()(),Ml(307,`p`),mN(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),lg(),Ml(309,`p`),mN(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Ml(311,`code`),mN(312,`search`),lg(),mN(313,`. Da seguinte forma:`),lg(),Ml(314,`pre`)(315,`code`),mN(316,`GET {service-api}/processes?search=relatorio
`),lg()(),Ml(317,`blockquote`)(318,`p`),mN(319,`Veja mais sobre paginação e filtros no `),Ml(320,`a`,6),mN(321,`Guia de implementação de APIs`),lg(),mN(322,`.
Caso seja informada a propriedade `),Ml(323,`code`),mN(324,`p-parameters`),lg(),mN(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),lg()(),Ml(326,`p`),mN(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Ml(328,`code`),mN(329,`{service-api}/processes`),lg(),mN(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Ml(331,`strong`),mN(332,`identificador do processo - `),Ml(333,`code`),mN(334,`processID`),lg()(),mN(335,` e ao salvar será enviado um `),Ml(336,`code`),mN(337,`POST`),lg(),mN(338,` para o endpoint difinido `),Ml(339,`code`),mN(340,`serviceApi`),lg(),mN(341,` conforme abaixo:`),lg(),Ml(342,`pre`)(343,`code`),mN(344,`POST {service-api}
`),lg()(),Ml(345,`p`)(346,`em`),mN(347,`Request payload`),lg(),mN(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ml(349,`code`),mN(350,`PoJobScheduler`),lg(),mN(351,`:`),lg(),Ml(352,`pre`)(353,`code`),mN(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),lg()(),Ml(355,`p`),mN(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Ml(357,`code`),mN(358,`GET`),lg(),mN(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Ml(360,`a`,31),mN(361,`PoDynamicFormField`),lg(),mN(362,`. Porém, caso utilizar a propriedade `),Ml(363,`code`),mN(364,`p-parameters`),lg(),mN(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),lg(),Ml(366,`pre`)(367,`code`),mN(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),lg()(),Ml(369,`h4`),mN(370,`Salvar e Atualizar`),lg(),Ml(371,`p`),mN(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Ml(373,`em`),mN(374,`payload`),lg(),mN(375,`.
Abaixo uma requisi\xE7\xE3o `),Ml(376,`code`),mN(377,`POST`),lg(),mN(378,` disparada, onde as propriedades do `),Ml(379,`em`),mN(380,`Job Scheduler`),lg(),mN(381,` foram preenchidas:`),lg(),Ml(382,`pre`)(383,`code`),mN(384,`POST {service-api}
`),lg()(),Ml(385,`p`)(386,`em`),mN(387,`Request payload`),lg(),mN(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ml(389,`code`),mN(390,`PoJobScheduler`),lg(),mN(391,`:`),lg(),Ml(392,`pre`)(393,`code`),mN(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),lg()(),Ml(395,`p`),mN(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Ml(397,`code`),mN(398,`id`),lg(),mN(399,`.`),lg(),Ml(400,`p`),mN(401,`Exemplo de configuração de rota:`),lg(),Ml(402,`pre`)(403,`code`),mN(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),lg()(),Ml(405,`p`),mN(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),lg(),Ml(407,`pre`)(408,`code`),mN(409,`GET {service-api}/{id}
`),lg()(),Ml(410,`p`),mN(411,`Ao atualizar o agendamento, será disparado um `),Ml(412,`code`),mN(413,`PUT`),lg(),mN(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Ml(415,`code`),mN(416,`PUT`),lg(),mN(417,` disparada, onde a propriedade `),Ml(418,`em`),mN(419,`recurrent`),lg(),mN(420,` e `),Ml(421,`em`),mN(422,`daily`),lg(),mN(423,` foram atualizadas:`),lg(),Ml(424,`pre`)(425,`code`),mN(426,`PUT {service-api}/{id}
`),lg()(),Ml(427,`p`)(428,`em`),mN(429,`Request payload`),lg(),mN(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ml(431,`code`),mN(432,`PoJobScheduler`),lg(),mN(433,`:`),lg(),Ml(434,`pre`)(435,`code`),mN(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),lg()()()(),Ml(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),mN(441,` p-step-execution-last`),ql(442,`br`),lg()()(),Ml(443,`td`,19)(444,`code`,20),mN(445,`boolean`),lg()(),Ml(446,`td`,21),mN(447,`-`),lg(),Ml(448,`td`,22)(449,`em`)(450,`strong`),mN(451,`(opcional)`),lg()(),Ml(452,`p`),mN(453,`Define se o step `),Ml(454,`code`),mN(455,`Agendamento`),lg(),mN(456,` deve ser exibido como o último na sequência de steps`),lg(),Ml(457,`blockquote`)(458,`p`),mN(459,`Aplicável apenas quando utilizado `),Ml(460,`code`),mN(461,`PoJobSchedulerParametersTemplateDirective`),lg()()()()(),Ml(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),mN(466,` p-orientation`),ql(467,`br`),lg()()(),Ml(468,`td`,19)(469,`code`,32),mN(470,`PoStepperOrientation`),lg()(),Ml(471,`td`,21),mN(472,`-`),lg(),Ml(473,`td`,22)(474,`em`)(475,`strong`),mN(476,`(opcional)`),lg()(),Ml(477,`p`),mN(478,`Define a orientação de exibição do `),Ml(479,`code`),mN(480,`po-stepper`),lg(),mN(481,`.`),lg(),Ml(482,`blockquote`)(483,`p`),mN(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),lg()(),Ml(485,`blockquote`)(486,`p`),mN(487,`Veja os valores válidos no `),Ml(488,`em`),mN(489,`enum`),lg(),Ml(490,`a`,33),mN(491,`PoStepperOrientation`),lg(),mN(492,`.`),lg()()()(),Ml(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),mN(497,` (p-success)`),ql(498,`br`),lg()()(),Ml(499,`td`,19)(500,`code`,29),mN(501,`EventEmitter`),lg()(),Ml(502,`td`,21),mN(503,`-`),lg(),Ml(504,`td`,22)(505,`em`)(506,`strong`),mN(507,`(opcional)`),lg()(),Ml(508,`p`),mN(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),lg()()(),Ml(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),mN(514,` p-title`),ql(515,`br`),lg()()(),Ml(516,`td`,19)(517,`code`,25),mN(518,`string`),lg()(),Ml(519,`td`,21),mN(520,`-`),lg(),Ml(521,`td`,22)(522,`p`),mN(523,`Título da página.`),lg()()()(),Ml(524,`h3`),mN(525,`Interfaces`),lg(),Ml(526,`h4`,34)(527,`code`,5),mN(528,`PoJobScheduler`),lg()(),Ml(529,`div`,2)(530,`p`),mN(531,`Estrutura do `),Ml(532,`em`),mN(533,`payload`),lg(),mN(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Ml(535,`em`),mN(536,`Job Scheduler`),lg(),mN(537,`.`),lg()(),Ml(538,`h4`,11),mN(539,`Propriedades`),lg(),Ml(540,`table`,12)(541,`tr`,13)(542,`th`,14),mN(543,`Nome`),lg(),Ml(544,`th`,14),mN(545,`Tipo`),lg(),Ml(546,`th`,14),mN(547,`Descrição`),lg()(),Ml(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),mN(552,` daily`),ql(553,`br`),lg()()(),Ml(554,`td`,19)(555,`code`,35),mN(556,`{ hour: number; minute: number;
}`),lg()(),Ml(557,`td`,22)(558,`em`)(559,`strong`),mN(560,`(opcional)`),lg()(),Ml(561,`p`),mN(562,`Define uma repetição diária.`),lg()()(),Ml(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),mN(567,` executionParameter`),ql(568,`br`),lg()()(),Ml(569,`td`,19)(570,`code`,36),mN(571,`object`),lg()(),Ml(572,`td`,22)(573,`em`)(574,`strong`),mN(575,`(opcional)`),lg()(),Ml(576,`p`),mN(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),lg()()(),Ml(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),mN(582,` firstExecution`),ql(583,`br`),lg()()(),Ml(584,`td`,19)(585,`code`,25),mN(586,`string`),lg()(),Ml(587,`td`,22)(588,`em`)(589,`strong`),mN(590,`(opcional)`),lg()(),Ml(591,`p`),mN(592,`Data da primeira execução.`),lg()()(),Ml(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),mN(597,` monthly`),ql(598,`br`),lg()()(),Ml(599,`td`,19)(600,`code`,37),mN(601,`{ day: number; hour: number; minute: number;
}`),lg()(),Ml(602,`td`,22)(603,`em`)(604,`strong`),mN(605,`(opcional)`),lg()(),Ml(606,`p`),mN(607,`Define uma repetição mensal.`),lg()()(),Ml(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),mN(612,` processID`),ql(613,`br`),lg()()(),Ml(614,`td`,19)(615,`code`,25),mN(616,`string`),lg()(),Ml(617,`td`,22)(618,`p`),mN(619,`Identificador do processo.`),lg()()(),Ml(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),mN(624,` recurrent`),ql(625,`br`),lg()()(),Ml(626,`td`,19)(627,`code`,20),mN(628,`boolean`),lg()(),Ml(629,`td`,22)(630,`em`)(631,`strong`),mN(632,`(opcional)`),lg()(),Ml(633,`p`),mN(634,`Permite uma execução recorrente.`),lg()()(),Ml(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),mN(639,` weekly`),ql(640,`br`),lg()()(),Ml(641,`td`,19)(642,`code`,38),mN(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),lg()(),Ml(644,`td`,22)(645,`em`)(646,`strong`),mN(647,`(opcional)`),lg()(),Ml(648,`p`),mN(649,`Define uma repetição semanal.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Ee=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-page-job-scheduler-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ql(5,`sample-po-page-job-scheduler-background-process-view`)(6,`sample-po-page-job-scheduler-directives-view`)(7,`sample-po-page-job-scheduler-flexible-navigation-view`),lg()()()),o&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,W,Q,K,Y],encapsulation:2,changeDetection:1})}return i})()}];var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[NL.forChild(Ee),NL]})}return i})();var Ie=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,ee]})}return i})();export{Ie as DocPoPageJobSchedulerModule};