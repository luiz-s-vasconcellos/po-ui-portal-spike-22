import{$r as Xy,An as y8e,At as _Ce,Bi as jp,Ct as X4,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Li as ht,Nr as PO,Qn as DN,Qr as Xx,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,c as Ws,dt as Sbe,f as js,fi as ag,gi as bL,l as ar,lr as Gl,mr as JE,n as Fa,nt as O8e,on as mCe,pa as w,r as Ga,sa as ue,sr as Fx,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var G=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&Gl(0,`po-page-job-scheduler`,0),o&2&&nw(`p-breadcrumb`,l.breadcrumb)},dependencies:[Fa],encapsulation:2,changeDetection:1})}return i})();var ne=i=>({"docs-sample-code-tabs":i});var W=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Job Scheduler - Background Process`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-job-scheduler-background-process`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ne,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,G],encapsulation:2,changeDetection:1})}return i})();function oe(i,_){if(i&1){let r=Ax();Tl(0,`h1`),cN(1,`Etapa 1`),ag(),Tl(2,`po-dynamic-form`,4),ht(`p-form`,function(l){Ky(r);return Xy(Fx().getFormExample(l))}),ag()}if(i&2){let r=Fx();jp(2),nw(`p-fields`,r.parametersForm)}}function ae(i,_){if(i&1){let r=Ax();Tl(0,`po-table`,5),ht(`p-selected`,function(l){Ky(r);return Xy(Fx().selectedItem(l))}),ag()}if(i&2)nw(`p-items`,Fx().items)(`p-selectable`,!0)}function re(i,_){if(i&1&&(Tl(0,`po-widget`,6),Gl(1,`po-dynamic-view`,7),ag()),i&2){let r=Fx();jp(),nw(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(Tl(0,`po-page-job-scheduler`,0),JE(1,oe,3,1,`ng-template`,1)(2,ae,1,2,`ng-template`,2)(3,re,2,2,`ng-template`,3),ag()),o&2&&(nw(`p-step-execution-last`,!0),jp(),nw(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),jp(),nw(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[Sbe,y8e,X4,O8e,Fa,Ws,js],encapsulation:2,changeDetection:1})}return i})();var me=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Job Scheduler - Directives`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-job-scheduler
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-job-scheduler-directives`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,me,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,U],encapsulation:2,changeDetection:1})}return i})();var $=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&Gl(0,`po-page-job-scheduler`,0),o&2&&nw(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[Fa],encapsulation:2})}return i})();var se=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Job Scheduler - Navegação Flexível`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-job-scheduler-flexible-navigation`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,se,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Componente`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoPageJobSchedulerComponent`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`O `),Tl(13,`code`),cN(14,`po-page-job-scheduler`),ag(),cN(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),ag(),Tl(16,`p`),cN(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),ag(),Tl(18,`p`),cN(19,`Veja mais sobre os padrões utilizados nas requisições no `),Tl(20,`a`,6),cN(21,`Guia de implementação de APIs`),ag(),cN(22,`.`),ag(),Tl(23,`h4`),cN(24,`Tokens customizáveis`),ag(),Tl(25,`blockquote`)(26,`p`),cN(27,`Para maiores informações, acesse o guia `),Tl(28,`a`,7),cN(29,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(30,`.`),ag()(),Tl(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),cN(35,`Propriedade`),ag(),Tl(36,`th`),cN(37,`Descrição`),ag(),Tl(38,`th`),cN(39,`Valor Padrão`),ag()()(),Tl(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),cN(44,`Header`),ag()(),Gl(45,`td`)(46,`td`),ag(),Tl(47,`tr`)(48,`td`)(49,`code`),cN(50,`--padding`),ag()(),Tl(51,`td`),cN(52,`Espaçamento do header`),ag(),Tl(53,`td`)(54,`code`),cN(55,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(56,`tr`)(57,`td`)(58,`code`),cN(59,`--gap`),ag()(),Tl(60,`td`),cN(61,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(62,`td`)(63,`code`),cN(64,`var(--spacing-md)`),ag()()(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--gap-actions`),ag()(),Tl(69,`td`),cN(70,`Espaçamento entre as ações`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--spacing-xs)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-family`),ag()(),Tl(78,`td`),cN(79,`Família tipográfica do título`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-family-theme)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`strong`),cN(86,`Content`),ag()(),Gl(87,`td`)(88,`td`),ag(),Tl(89,`tr`)(90,`td`)(91,`code`),cN(92,`--padding-content`),ag()(),Tl(93,`td`),cN(94,`Espaçamento do conteúdo`),ag(),Tl(95,`td`)(96,`code`),cN(97,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(98,`div`,8)(99,`h4`,9),cN(100,`Seletor`),ag(),Tl(101,`pre`,10),cN(102,`<po-page-job-scheduler
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
`),ag()(),Tl(103,`h4`,11),cN(104,`Propriedades`),ag(),Tl(105,`table`,12)(106,`tr`,13)(107,`th`,14),cN(108,`Nome`),ag(),Tl(109,`th`,14),cN(110,`Tipo`),ag(),Tl(111,`th`,14),cN(112,`Padrão`),ag(),Tl(113,`th`,14),cN(114,`Descrição`),ag()(),Tl(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),cN(119,` p-allow-direct-navigation`),Gl(120,`br`),ag()()(),Tl(121,`td`,19)(122,`code`,20),cN(123,`boolean`),ag()(),Tl(124,`td`,21)(125,`p`)(126,`code`),cN(127,`false`),ag()()(),Tl(128,`td`,22)(129,`em`)(130,`strong`),cN(131,`(opcional)`),ag()(),Tl(132,`p`),cN(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),ag(),Tl(134,`p`),cN(135,`Quando habilitado (`),Tl(136,`code`),cN(137,`true`),ag(),cN(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),ag(),Tl(139,`blockquote`)(140,`p`),cN(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),ag()()()(),Tl(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),cN(146,` p-before-send`),Gl(147,`br`),ag()()(),Tl(148,`td`,19)(149,`code`,23),cN(150,`unknown`),ag()(),Tl(151,`td`,21),cN(152,`-`),ag(),Tl(153,`td`,22)(154,`em`)(155,`strong`),cN(156,`(opcional)`),ag()(),Tl(157,`p`),cN(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),ag(),Tl(159,`blockquote`)(160,`p`),cN(161,`Deve retornar um objeto do tipo `),Tl(162,`code`),cN(163,`PoPageJobScheduler`),ag(),cN(164,` para ser adicionado ao model do PoPageJobScheduler.`),ag()(),Tl(165,`blockquote`)(166,`p`),cN(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Tl(168,`code`),cN(169,`PoJobSchedulerInternal`),ag(),cN(170,`.`),ag()(),Tl(171,`p`),cN(172,`O contexto da função que será chamada, será o mesmo que o do `),Tl(173,`code`),cN(174,`PoPageJobScheduler`),ag(),cN(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Tl(176,`code`),cN(177,`bind`),ag(),cN(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Tl(179,`code`),cN(180,`beforeSend`),ag(),cN(181,`:`),ag(),Tl(182,`pre`)(183,`code`),cN(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),ag()()()(),Tl(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),cN(189,` p-breadcrumb`),Gl(190,`br`),ag()()(),Tl(191,`td`,19)(192,`code`,24),cN(193,`PoBreadcrumb`),ag()(),Tl(194,`td`,21),cN(195,`-`),ag(),Tl(196,`td`,22)(197,`em`)(198,`strong`),cN(199,`(opcional)`),ag()(),Tl(200,`p`),cN(201,`Objeto com as propriedades do breadcrumb.`),ag()()(),Tl(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),cN(206,` p-components-size`),Gl(207,`br`),ag()()(),Tl(208,`td`,19)(209,`code`,25),cN(210,`string`),ag()(),Tl(211,`td`,21)(212,`p`)(213,`code`),cN(214,`medium`),ag()()(),Tl(215,`td`,22)(216,`em`)(217,`strong`),cN(218,`(opcional)`),ag()(),Tl(219,`p`),cN(220,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(221,`ul`)(222,`li`)(223,`code`),cN(224,`small`),ag(),cN(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(226,`li`)(227,`code`),cN(228,`medium`),ag(),cN(229,`: aplica a medida medium de cada componente.`),ag()(),Tl(230,`blockquote`)(231,`p`),cN(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(233,`code`),cN(234,`medium`),ag(),cN(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(236,`a`,26),cN(237,`po-theme`),ag(),cN(238,`.`),ag()()()(),Tl(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),cN(243,` (p-error)`),Gl(244,`br`),ag()()(),Tl(245,`td`,19)(246,`code`,29),cN(247,`EventEmitter`),ag()(),Tl(248,`td`,21),cN(249,`-`),ag(),Tl(250,`td`,22)(251,`em`)(252,`strong`),cN(253,`(opcional)`),ag()(),Tl(254,`p`),cN(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),ag()()(),Tl(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),cN(260,` p-parameters`),Gl(261,`br`),ag()()(),Tl(262,`td`,19)(263,`code`,30),cN(264,`Array<PoDynamicFormField>`),ag()(),Tl(265,`td`,21),cN(266,`-`),ag(),Tl(267,`td`,22)(268,`p`),cN(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),ag(),Tl(270,`p`),cN(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),ag()()(),Tl(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),cN(276,` p-service-api`),Gl(277,`br`),ag()()(),Tl(278,`td`,19)(279,`code`,25),cN(280,`string`),ag()(),Tl(281,`td`,21),cN(282,`-`),ag(),Tl(283,`td`,22)(284,`p`),cN(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),ag(),Tl(286,`h4`),cN(287,`Processos`),ag(),Tl(288,`p`),cN(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Tl(290,`code`),cN(291,`GET`),ag(),cN(292,` para o endpoint `),Tl(293,`code`),cN(294,`{service-api}/processes`),ag(),cN(295,`, para buscar
essa lista de processos.`),ag(),Tl(296,`p`),cN(297,`Este endpoint `),Tl(298,`code`),cN(299,`{service-api}/processes`),ag(),cN(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),ag(),Tl(301,`pre`)(302,`code`),cN(303,`GET {service-api}/processes
`),ag()(),Tl(304,`pre`)(305,`code`),cN(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),ag()(),Tl(307,`p`),cN(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),ag(),Tl(309,`p`),cN(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Tl(311,`code`),cN(312,`search`),ag(),cN(313,`. Da seguinte forma:`),ag(),Tl(314,`pre`)(315,`code`),cN(316,`GET {service-api}/processes?search=relatorio
`),ag()(),Tl(317,`blockquote`)(318,`p`),cN(319,`Veja mais sobre paginação e filtros no `),Tl(320,`a`,6),cN(321,`Guia de implementação de APIs`),ag(),cN(322,`.
Caso seja informada a propriedade `),Tl(323,`code`),cN(324,`p-parameters`),ag(),cN(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),ag()(),Tl(326,`p`),cN(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Tl(328,`code`),cN(329,`{service-api}/processes`),ag(),cN(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Tl(331,`strong`),cN(332,`identificador do processo - `),Tl(333,`code`),cN(334,`processID`),ag()(),cN(335,` e ao salvar será enviado um `),Tl(336,`code`),cN(337,`POST`),ag(),cN(338,` para o endpoint difinido `),Tl(339,`code`),cN(340,`serviceApi`),ag(),cN(341,` conforme abaixo:`),ag(),Tl(342,`pre`)(343,`code`),cN(344,`POST {service-api}
`),ag()(),Tl(345,`p`)(346,`em`),cN(347,`Request payload`),ag(),cN(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),Tl(349,`code`),cN(350,`PoJobScheduler`),ag(),cN(351,`:`),ag(),Tl(352,`pre`)(353,`code`),cN(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),ag()(),Tl(355,`p`),cN(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Tl(357,`code`),cN(358,`GET`),ag(),cN(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Tl(360,`a`,31),cN(361,`PoDynamicFormField`),ag(),cN(362,`. Porém, caso utilizar a propriedade `),Tl(363,`code`),cN(364,`p-parameters`),ag(),cN(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),ag(),Tl(366,`pre`)(367,`code`),cN(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),ag()(),Tl(369,`h4`),cN(370,`Salvar e Atualizar`),ag(),Tl(371,`p`),cN(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Tl(373,`em`),cN(374,`payload`),ag(),cN(375,`.
Abaixo uma requisi\xE7\xE3o `),Tl(376,`code`),cN(377,`POST`),ag(),cN(378,` disparada, onde as propriedades do `),Tl(379,`em`),cN(380,`Job Scheduler`),ag(),cN(381,` foram preenchidas:`),ag(),Tl(382,`pre`)(383,`code`),cN(384,`POST {service-api}
`),ag()(),Tl(385,`p`)(386,`em`),cN(387,`Request payload`),ag(),cN(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),Tl(389,`code`),cN(390,`PoJobScheduler`),ag(),cN(391,`:`),ag(),Tl(392,`pre`)(393,`code`),cN(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ag()(),Tl(395,`p`),cN(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Tl(397,`code`),cN(398,`id`),ag(),cN(399,`.`),ag(),Tl(400,`p`),cN(401,`Exemplo de configuração de rota:`),ag(),Tl(402,`pre`)(403,`code`),cN(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),ag()(),Tl(405,`p`),cN(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),ag(),Tl(407,`pre`)(408,`code`),cN(409,`GET {service-api}/{id}
`),ag()(),Tl(410,`p`),cN(411,`Ao atualizar o agendamento, será disparado um `),Tl(412,`code`),cN(413,`PUT`),ag(),cN(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Tl(415,`code`),cN(416,`PUT`),ag(),cN(417,` disparada, onde a propriedade `),Tl(418,`em`),cN(419,`recurrent`),ag(),cN(420,` e `),Tl(421,`em`),cN(422,`daily`),ag(),cN(423,` foram atualizadas:`),ag(),Tl(424,`pre`)(425,`code`),cN(426,`PUT {service-api}/{id}
`),ag()(),Tl(427,`p`)(428,`em`),cN(429,`Request payload`),ag(),cN(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),Tl(431,`code`),cN(432,`PoJobScheduler`),ag(),cN(433,`:`),ag(),Tl(434,`pre`)(435,`code`),cN(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ag()()()(),Tl(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),cN(441,` p-step-execution-last`),Gl(442,`br`),ag()()(),Tl(443,`td`,19)(444,`code`,20),cN(445,`boolean`),ag()(),Tl(446,`td`,21),cN(447,`-`),ag(),Tl(448,`td`,22)(449,`em`)(450,`strong`),cN(451,`(opcional)`),ag()(),Tl(452,`p`),cN(453,`Define se o step `),Tl(454,`code`),cN(455,`Agendamento`),ag(),cN(456,` deve ser exibido como o último na sequência de steps`),ag(),Tl(457,`blockquote`)(458,`p`),cN(459,`Aplicável apenas quando utilizado `),Tl(460,`code`),cN(461,`PoJobSchedulerParametersTemplateDirective`),ag()()()()(),Tl(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),cN(466,` p-orientation`),Gl(467,`br`),ag()()(),Tl(468,`td`,19)(469,`code`,32),cN(470,`PoStepperOrientation`),ag()(),Tl(471,`td`,21),cN(472,`-`),ag(),Tl(473,`td`,22)(474,`em`)(475,`strong`),cN(476,`(opcional)`),ag()(),Tl(477,`p`),cN(478,`Define a orientação de exibição do `),Tl(479,`code`),cN(480,`po-stepper`),ag(),cN(481,`.`),ag(),Tl(482,`blockquote`)(483,`p`),cN(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),ag()(),Tl(485,`blockquote`)(486,`p`),cN(487,`Veja os valores válidos no `),Tl(488,`em`),cN(489,`enum`),ag(),Tl(490,`a`,33),cN(491,`PoStepperOrientation`),ag(),cN(492,`.`),ag()()()(),Tl(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),cN(497,` (p-success)`),Gl(498,`br`),ag()()(),Tl(499,`td`,19)(500,`code`,29),cN(501,`EventEmitter`),ag()(),Tl(502,`td`,21),cN(503,`-`),ag(),Tl(504,`td`,22)(505,`em`)(506,`strong`),cN(507,`(opcional)`),ag()(),Tl(508,`p`),cN(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),ag()()(),Tl(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),cN(514,` p-title`),Gl(515,`br`),ag()()(),Tl(516,`td`,19)(517,`code`,25),cN(518,`string`),ag()(),Tl(519,`td`,21),cN(520,`-`),ag(),Tl(521,`td`,22)(522,`p`),cN(523,`Título da página.`),ag()()()(),Tl(524,`h3`),cN(525,`Interfaces`),ag(),Tl(526,`h4`,34)(527,`code`,5),cN(528,`PoJobScheduler`),ag()(),Tl(529,`div`,2)(530,`p`),cN(531,`Estrutura do `),Tl(532,`em`),cN(533,`payload`),ag(),cN(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Tl(535,`em`),cN(536,`Job Scheduler`),ag(),cN(537,`.`),ag()(),Tl(538,`h4`,11),cN(539,`Propriedades`),ag(),Tl(540,`table`,12)(541,`tr`,13)(542,`th`,14),cN(543,`Nome`),ag(),Tl(544,`th`,14),cN(545,`Tipo`),ag(),Tl(546,`th`,14),cN(547,`Descrição`),ag()(),Tl(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),cN(552,` daily`),Gl(553,`br`),ag()()(),Tl(554,`td`,19)(555,`code`,35),cN(556,`{ hour: number; minute: number;
}`),ag()(),Tl(557,`td`,22)(558,`em`)(559,`strong`),cN(560,`(opcional)`),ag()(),Tl(561,`p`),cN(562,`Define uma repetição diária.`),ag()()(),Tl(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),cN(567,` executionParameter`),Gl(568,`br`),ag()()(),Tl(569,`td`,19)(570,`code`,36),cN(571,`object`),ag()(),Tl(572,`td`,22)(573,`em`)(574,`strong`),cN(575,`(opcional)`),ag()(),Tl(576,`p`),cN(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),ag()()(),Tl(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),cN(582,` firstExecution`),Gl(583,`br`),ag()()(),Tl(584,`td`,19)(585,`code`,25),cN(586,`string`),ag()(),Tl(587,`td`,22)(588,`em`)(589,`strong`),cN(590,`(opcional)`),ag()(),Tl(591,`p`),cN(592,`Data da primeira execução.`),ag()()(),Tl(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),cN(597,` monthly`),Gl(598,`br`),ag()()(),Tl(599,`td`,19)(600,`code`,37),cN(601,`{ day: number; hour: number; minute: number;
}`),ag()(),Tl(602,`td`,22)(603,`em`)(604,`strong`),cN(605,`(opcional)`),ag()(),Tl(606,`p`),cN(607,`Define uma repetição mensal.`),ag()()(),Tl(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),cN(612,` processID`),Gl(613,`br`),ag()()(),Tl(614,`td`,19)(615,`code`,25),cN(616,`string`),ag()(),Tl(617,`td`,22)(618,`p`),cN(619,`Identificador do processo.`),ag()()(),Tl(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),cN(624,` recurrent`),Gl(625,`br`),ag()()(),Tl(626,`td`,19)(627,`code`,20),cN(628,`boolean`),ag()(),Tl(629,`td`,22)(630,`em`)(631,`strong`),cN(632,`(opcional)`),ag()(),Tl(633,`p`),cN(634,`Permite uma execução recorrente.`),ag()()(),Tl(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),cN(639,` weekly`),Gl(640,`br`),ag()()(),Tl(641,`td`,19)(642,`code`,38),cN(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),ag()(),Tl(644,`td`,22)(645,`em`)(646,`strong`),cN(647,`(opcional)`),ag()(),Tl(648,`p`),cN(649,`Define uma repetição semanal.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Ee=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-page-job-scheduler-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),Gl(5,`sample-po-page-job-scheduler-background-process-view`)(6,`sample-po-page-job-scheduler-directives-view`)(7,`sample-po-page-job-scheduler-flexible-navigation-view`),ag()()()),o&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,W,Q,K,Y],encapsulation:2,changeDetection:1})}return i})()}];var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[bL.forChild(Ee),bL]})}return i})();var Ie=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,ee]})}return i})();export{Ie as DocPoPageJobSchedulerModule};