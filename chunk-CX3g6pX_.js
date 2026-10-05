import{$i as pt,Br as Qn,Gi as mg,Gn as Ac,Jt as gae,Lt as bae,Nn as x4,Nt as _oe,Sa as zO,T as Bze,Wn as AN,Zn as Bx,_a as wn,_i as e_,a as aa,ar as E,b as $ze,br as Jv,ca as ue,di as cE,dr as Hn,i as _a,ia as sE,ki as he,pa as vN,pr as Hp,r as Ta,s as gn,si as aN,st as Ooe,ti as Wx,u as mn,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var G=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&Kc(0,`po-page-job-scheduler`,0),o&2&&cE(`p-breadcrumb`,l.breadcrumb)},dependencies:[aa],encapsulation:2,changeDetection:1})}return i})();var ne=i=>({"docs-sample-code-tabs":i});var W=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Job Scheduler - Background Process`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-job-scheduler-background-process`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ne,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,G],encapsulation:2,changeDetection:1})}return i})();function oe(i,_){if(i&1){let r=Bx();Ac(0,`h1`),vN(1,`Etapa 1`),ug(),Ac(2,`po-dynamic-form`,4),pt(`p-form`,function(l){Jv(r);let u=Wx();return e_(u.getFormExample(l))}),ug()}if(i&2){let r=Wx();Hp(2),cE(`p-fields`,r.parametersForm)}}function ae(i,_){if(i&1){let r=Bx();Ac(0,`po-table`,5),pt(`p-selected`,function(l){Jv(r);let u=Wx();return e_(u.selectedItem(l))}),ug()}if(i&2){let r=Wx();cE(`p-items`,r.items)(`p-selectable`,!0)}}function re(i,_){if(i&1&&(Ac(0,`po-widget`,6),Kc(1,`po-dynamic-view`,7),ug()),i&2){let r=Wx();Hp(),cE(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(Ac(0,`po-page-job-scheduler`,0),sE(1,oe,3,1,`ng-template`,1)(2,ae,1,2,`ng-template`,2)(3,re,2,2,`ng-template`,3),ug()),o&2&&(cE(`p-step-execution-last`,!0),Hp(),cE(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),Hp(),cE(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[_oe,Bze,x4,Ooe,aa,mn,gn],encapsulation:2,changeDetection:1})}return i})();var me=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Job Scheduler - Directives`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-job-scheduler
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-job-scheduler-directives`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,me,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,U],encapsulation:2,changeDetection:1})}return i})();var $=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&Kc(0,`po-page-job-scheduler`,0),o&2&&cE(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[aa],encapsulation:2})}return i})();var se=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Job Scheduler - Navegação Flexível`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-job-scheduler-flexible-navigation`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,se,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Componente`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoPageJobSchedulerComponent`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`O `),Ac(13,`code`),vN(14,`po-page-job-scheduler`),ug(),vN(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),ug(),Ac(16,`p`),vN(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),ug(),Ac(18,`p`),vN(19,`Veja mais sobre os padrões utilizados nas requisições no `),Ac(20,`a`,6),vN(21,`Guia de implementação de APIs`),ug(),vN(22,`.`),ug(),Ac(23,`h4`),vN(24,`Tokens customizáveis`),ug(),Ac(25,`blockquote`)(26,`p`),vN(27,`Para maiores informações, acesse o guia `),Ac(28,`a`,7),vN(29,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(30,`.`),ug()(),Ac(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),vN(35,`Propriedade`),ug(),Ac(36,`th`),vN(37,`Descrição`),ug(),Ac(38,`th`),vN(39,`Valor Padrão`),ug()()(),Ac(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),vN(44,`Header`),ug()(),Kc(45,`td`)(46,`td`),ug(),Ac(47,`tr`)(48,`td`)(49,`code`),vN(50,`--padding`),ug()(),Ac(51,`td`),vN(52,`Espaçamento do header`),ug(),Ac(53,`td`)(54,`code`),vN(55,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(56,`tr`)(57,`td`)(58,`code`),vN(59,`--gap`),ug()(),Ac(60,`td`),vN(61,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(62,`td`)(63,`code`),vN(64,`var(--spacing-md)`),ug()()(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--gap-actions`),ug()(),Ac(69,`td`),vN(70,`Espaçamento entre as ações`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--spacing-xs)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-family`),ug()(),Ac(78,`td`),vN(79,`Família tipográfica do título`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-family-theme)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`strong`),vN(86,`Content`),ug()(),Kc(87,`td`)(88,`td`),ug(),Ac(89,`tr`)(90,`td`)(91,`code`),vN(92,`--padding-content`),ug()(),Ac(93,`td`),vN(94,`Espaçamento do conteúdo`),ug(),Ac(95,`td`)(96,`code`),vN(97,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(98,`div`,8)(99,`h4`,9),vN(100,`Seletor`),ug(),Ac(101,`pre`,10),vN(102,`<po-page-job-scheduler
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
`),ug()(),Ac(103,`h4`,11),vN(104,`Propriedades`),ug(),Ac(105,`table`,12)(106,`tr`,13)(107,`th`,14),vN(108,`Nome`),ug(),Ac(109,`th`,14),vN(110,`Tipo`),ug(),Ac(111,`th`,14),vN(112,`Padrão`),ug(),Ac(113,`th`,14),vN(114,`Descrição`),ug()(),Ac(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),vN(119,` p-allow-direct-navigation`),Kc(120,`br`),ug()()(),Ac(121,`td`,19)(122,`code`,20),vN(123,`boolean`),ug()(),Ac(124,`td`,21)(125,`p`)(126,`code`),vN(127,`false`),ug()()(),Ac(128,`td`,22)(129,`em`)(130,`strong`),vN(131,`(opcional)`),ug()(),Ac(132,`p`),vN(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),ug(),Ac(134,`p`),vN(135,`Quando habilitado (`),Ac(136,`code`),vN(137,`true`),ug(),vN(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),ug(),Ac(139,`blockquote`)(140,`p`),vN(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),ug()()()(),Ac(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),vN(146,` p-before-send`),Kc(147,`br`),ug()()(),Ac(148,`td`,19)(149,`code`,23),vN(150,`unknown`),ug()(),Ac(151,`td`,21),vN(152,`-`),ug(),Ac(153,`td`,22)(154,`em`)(155,`strong`),vN(156,`(opcional)`),ug()(),Ac(157,`p`),vN(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),ug(),Ac(159,`blockquote`)(160,`p`),vN(161,`Deve retornar um objeto do tipo `),Ac(162,`code`),vN(163,`PoPageJobScheduler`),ug(),vN(164,` para ser adicionado ao model do PoPageJobScheduler.`),ug()(),Ac(165,`blockquote`)(166,`p`),vN(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Ac(168,`code`),vN(169,`PoJobSchedulerInternal`),ug(),vN(170,`.`),ug()(),Ac(171,`p`),vN(172,`O contexto da função que será chamada, será o mesmo que o do `),Ac(173,`code`),vN(174,`PoPageJobScheduler`),ug(),vN(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Ac(176,`code`),vN(177,`bind`),ug(),vN(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Ac(179,`code`),vN(180,`beforeSend`),ug(),vN(181,`:`),ug(),Ac(182,`pre`)(183,`code`),vN(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),ug()()()(),Ac(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),vN(189,` p-breadcrumb`),Kc(190,`br`),ug()()(),Ac(191,`td`,19)(192,`code`,24),vN(193,`PoBreadcrumb`),ug()(),Ac(194,`td`,21),vN(195,`-`),ug(),Ac(196,`td`,22)(197,`em`)(198,`strong`),vN(199,`(opcional)`),ug()(),Ac(200,`p`),vN(201,`Objeto com as propriedades do breadcrumb.`),ug()()(),Ac(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),vN(206,` p-components-size`),Kc(207,`br`),ug()()(),Ac(208,`td`,19)(209,`code`,25),vN(210,`string`),ug()(),Ac(211,`td`,21)(212,`p`)(213,`code`),vN(214,`medium`),ug()()(),Ac(215,`td`,22)(216,`em`)(217,`strong`),vN(218,`(opcional)`),ug()(),Ac(219,`p`),vN(220,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(221,`ul`)(222,`li`)(223,`code`),vN(224,`small`),ug(),vN(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(226,`li`)(227,`code`),vN(228,`medium`),ug(),vN(229,`: aplica a medida medium de cada componente.`),ug()(),Ac(230,`blockquote`)(231,`p`),vN(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(233,`code`),vN(234,`medium`),ug(),vN(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(236,`a`,26),vN(237,`po-theme`),ug(),vN(238,`.`),ug()()()(),Ac(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),vN(243,` (p-error)`),Kc(244,`br`),ug()()(),Ac(245,`td`,19)(246,`code`,29),vN(247,`EventEmitter`),ug()(),Ac(248,`td`,21),vN(249,`-`),ug(),Ac(250,`td`,22)(251,`em`)(252,`strong`),vN(253,`(opcional)`),ug()(),Ac(254,`p`),vN(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),ug()()(),Ac(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),vN(260,` p-parameters`),Kc(261,`br`),ug()()(),Ac(262,`td`,19)(263,`code`,30),vN(264,`Array<PoDynamicFormField>`),ug()(),Ac(265,`td`,21),vN(266,`-`),ug(),Ac(267,`td`,22)(268,`p`),vN(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),ug(),Ac(270,`p`),vN(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),ug()()(),Ac(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),vN(276,` p-service-api`),Kc(277,`br`),ug()()(),Ac(278,`td`,19)(279,`code`,25),vN(280,`string`),ug()(),Ac(281,`td`,21),vN(282,`-`),ug(),Ac(283,`td`,22)(284,`p`),vN(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),ug(),Ac(286,`h4`),vN(287,`Processos`),ug(),Ac(288,`p`),vN(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Ac(290,`code`),vN(291,`GET`),ug(),vN(292,` para o endpoint `),Ac(293,`code`),vN(294,`{service-api}/processes`),ug(),vN(295,`, para buscar
essa lista de processos.`),ug(),Ac(296,`p`),vN(297,`Este endpoint `),Ac(298,`code`),vN(299,`{service-api}/processes`),ug(),vN(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),ug(),Ac(301,`pre`)(302,`code`),vN(303,`GET {service-api}/processes
`),ug()(),Ac(304,`pre`)(305,`code`),vN(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),ug()(),Ac(307,`p`),vN(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),ug(),Ac(309,`p`),vN(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Ac(311,`code`),vN(312,`search`),ug(),vN(313,`. Da seguinte forma:`),ug(),Ac(314,`pre`)(315,`code`),vN(316,`GET {service-api}/processes?search=relatorio
`),ug()(),Ac(317,`blockquote`)(318,`p`),vN(319,`Veja mais sobre paginação e filtros no `),Ac(320,`a`,6),vN(321,`Guia de implementação de APIs`),ug(),vN(322,`.
Caso seja informada a propriedade `),Ac(323,`code`),vN(324,`p-parameters`),ug(),vN(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),ug()(),Ac(326,`p`),vN(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Ac(328,`code`),vN(329,`{service-api}/processes`),ug(),vN(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Ac(331,`strong`),vN(332,`identificador do processo - `),Ac(333,`code`),vN(334,`processID`),ug()(),vN(335,` e ao salvar será enviado um `),Ac(336,`code`),vN(337,`POST`),ug(),vN(338,` para o endpoint difinido `),Ac(339,`code`),vN(340,`serviceApi`),ug(),vN(341,` conforme abaixo:`),ug(),Ac(342,`pre`)(343,`code`),vN(344,`POST {service-api}
`),ug()(),Ac(345,`p`)(346,`em`),vN(347,`Request payload`),ug(),vN(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ac(349,`code`),vN(350,`PoJobScheduler`),ug(),vN(351,`:`),ug(),Ac(352,`pre`)(353,`code`),vN(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),ug()(),Ac(355,`p`),vN(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Ac(357,`code`),vN(358,`GET`),ug(),vN(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Ac(360,`a`,31),vN(361,`PoDynamicFormField`),ug(),vN(362,`. Porém, caso utilizar a propriedade `),Ac(363,`code`),vN(364,`p-parameters`),ug(),vN(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),ug(),Ac(366,`pre`)(367,`code`),vN(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),ug()(),Ac(369,`h4`),vN(370,`Salvar e Atualizar`),ug(),Ac(371,`p`),vN(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Ac(373,`em`),vN(374,`payload`),ug(),vN(375,`.
Abaixo uma requisi\xE7\xE3o `),Ac(376,`code`),vN(377,`POST`),ug(),vN(378,` disparada, onde as propriedades do `),Ac(379,`em`),vN(380,`Job Scheduler`),ug(),vN(381,` foram preenchidas:`),ug(),Ac(382,`pre`)(383,`code`),vN(384,`POST {service-api}
`),ug()(),Ac(385,`p`)(386,`em`),vN(387,`Request payload`),ug(),vN(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ac(389,`code`),vN(390,`PoJobScheduler`),ug(),vN(391,`:`),ug(),Ac(392,`pre`)(393,`code`),vN(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ug()(),Ac(395,`p`),vN(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Ac(397,`code`),vN(398,`id`),ug(),vN(399,`.`),ug(),Ac(400,`p`),vN(401,`Exemplo de configuração de rota:`),ug(),Ac(402,`pre`)(403,`code`),vN(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),ug()(),Ac(405,`p`),vN(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),ug(),Ac(407,`pre`)(408,`code`),vN(409,`GET {service-api}/{id}
`),ug()(),Ac(410,`p`),vN(411,`Ao atualizar o agendamento, será disparado um `),Ac(412,`code`),vN(413,`PUT`),ug(),vN(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Ac(415,`code`),vN(416,`PUT`),ug(),vN(417,` disparada, onde a propriedade `),Ac(418,`em`),vN(419,`recurrent`),ug(),vN(420,` e `),Ac(421,`em`),vN(422,`daily`),ug(),vN(423,` foram atualizadas:`),ug(),Ac(424,`pre`)(425,`code`),vN(426,`PUT {service-api}/{id}
`),ug()(),Ac(427,`p`)(428,`em`),vN(429,`Request payload`),ug(),vN(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),Ac(431,`code`),vN(432,`PoJobScheduler`),ug(),vN(433,`:`),ug(),Ac(434,`pre`)(435,`code`),vN(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ug()()()(),Ac(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),vN(441,` p-step-execution-last`),Kc(442,`br`),ug()()(),Ac(443,`td`,19)(444,`code`,20),vN(445,`boolean`),ug()(),Ac(446,`td`,21),vN(447,`-`),ug(),Ac(448,`td`,22)(449,`em`)(450,`strong`),vN(451,`(opcional)`),ug()(),Ac(452,`p`),vN(453,`Define se o step `),Ac(454,`code`),vN(455,`Agendamento`),ug(),vN(456,` deve ser exibido como o último na sequência de steps`),ug(),Ac(457,`blockquote`)(458,`p`),vN(459,`Aplicável apenas quando utilizado `),Ac(460,`code`),vN(461,`PoJobSchedulerParametersTemplateDirective`),ug()()()()(),Ac(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),vN(466,` p-orientation`),Kc(467,`br`),ug()()(),Ac(468,`td`,19)(469,`code`,32),vN(470,`PoStepperOrientation`),ug()(),Ac(471,`td`,21),vN(472,`-`),ug(),Ac(473,`td`,22)(474,`em`)(475,`strong`),vN(476,`(opcional)`),ug()(),Ac(477,`p`),vN(478,`Define a orientação de exibição do `),Ac(479,`code`),vN(480,`po-stepper`),ug(),vN(481,`.`),ug(),Ac(482,`blockquote`)(483,`p`),vN(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),ug()(),Ac(485,`blockquote`)(486,`p`),vN(487,`Veja os valores válidos no `),Ac(488,`em`),vN(489,`enum`),ug(),Ac(490,`a`,33),vN(491,`PoStepperOrientation`),ug(),vN(492,`.`),ug()()()(),Ac(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),vN(497,` (p-success)`),Kc(498,`br`),ug()()(),Ac(499,`td`,19)(500,`code`,29),vN(501,`EventEmitter`),ug()(),Ac(502,`td`,21),vN(503,`-`),ug(),Ac(504,`td`,22)(505,`em`)(506,`strong`),vN(507,`(opcional)`),ug()(),Ac(508,`p`),vN(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),ug()()(),Ac(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),vN(514,` p-title`),Kc(515,`br`),ug()()(),Ac(516,`td`,19)(517,`code`,25),vN(518,`string`),ug()(),Ac(519,`td`,21),vN(520,`-`),ug(),Ac(521,`td`,22)(522,`p`),vN(523,`Título da página.`),ug()()()(),Ac(524,`h3`),vN(525,`Interfaces`),ug(),Ac(526,`h4`,34)(527,`code`,5),vN(528,`PoJobScheduler`),ug()(),Ac(529,`div`,2)(530,`p`),vN(531,`Estrutura do `),Ac(532,`em`),vN(533,`payload`),ug(),vN(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Ac(535,`em`),vN(536,`Job Scheduler`),ug(),vN(537,`.`),ug()(),Ac(538,`h4`,11),vN(539,`Propriedades`),ug(),Ac(540,`table`,12)(541,`tr`,13)(542,`th`,14),vN(543,`Nome`),ug(),Ac(544,`th`,14),vN(545,`Tipo`),ug(),Ac(546,`th`,14),vN(547,`Descrição`),ug()(),Ac(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),vN(552,` daily`),Kc(553,`br`),ug()()(),Ac(554,`td`,19)(555,`code`,35),vN(556,`{ hour: number; minute: number;
}`),ug()(),Ac(557,`td`,22)(558,`em`)(559,`strong`),vN(560,`(opcional)`),ug()(),Ac(561,`p`),vN(562,`Define uma repetição diária.`),ug()()(),Ac(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),vN(567,` executionParameter`),Kc(568,`br`),ug()()(),Ac(569,`td`,19)(570,`code`,36),vN(571,`object`),ug()(),Ac(572,`td`,22)(573,`em`)(574,`strong`),vN(575,`(opcional)`),ug()(),Ac(576,`p`),vN(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),ug()()(),Ac(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),vN(582,` firstExecution`),Kc(583,`br`),ug()()(),Ac(584,`td`,19)(585,`code`,25),vN(586,`string`),ug()(),Ac(587,`td`,22)(588,`em`)(589,`strong`),vN(590,`(opcional)`),ug()(),Ac(591,`p`),vN(592,`Data da primeira execução.`),ug()()(),Ac(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),vN(597,` monthly`),Kc(598,`br`),ug()()(),Ac(599,`td`,19)(600,`code`,37),vN(601,`{ day: number; hour: number; minute: number;
}`),ug()(),Ac(602,`td`,22)(603,`em`)(604,`strong`),vN(605,`(opcional)`),ug()(),Ac(606,`p`),vN(607,`Define uma repetição mensal.`),ug()()(),Ac(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),vN(612,` processID`),Kc(613,`br`),ug()()(),Ac(614,`td`,19)(615,`code`,25),vN(616,`string`),ug()(),Ac(617,`td`,22)(618,`p`),vN(619,`Identificador do processo.`),ug()()(),Ac(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),vN(624,` recurrent`),Kc(625,`br`),ug()()(),Ac(626,`td`,19)(627,`code`,20),vN(628,`boolean`),ug()(),Ac(629,`td`,22)(630,`em`)(631,`strong`),vN(632,`(opcional)`),ug()(),Ac(633,`p`),vN(634,`Permite uma execução recorrente.`),ug()()(),Ac(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),vN(639,` weekly`),Kc(640,`br`),ug()()(),Ac(641,`td`,19)(642,`code`,38),vN(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),ug()(),Ac(644,`td`,22)(645,`em`)(646,`strong`),vN(647,`(opcional)`),ug()(),Ac(648,`p`),vN(649,`Define uma repetição semanal.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var Ee=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-page-job-scheduler-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),Kc(5,`sample-po-page-job-scheduler-background-process-view`)(6,`sample-po-page-job-scheduler-directives-view`)(7,`sample-po-page-job-scheduler-flexible-navigation-view`),ug()()()),o&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[$ze,gae,bae,W,Q,K,Y],encapsulation:2,changeDetection:1})}return i})()}];var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[kL.forChild(Ee),kL]})}return i})();var Ie=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[Ta,ee]})}return i})();export{Ie as DocPoPageJobSchedulerModule};