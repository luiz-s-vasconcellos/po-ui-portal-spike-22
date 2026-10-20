import{$r as Zn,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Pn as woe,Ri as nu,Y as Kze,Yi as rg,a as aa,aa as v_,ai as b,cr as FE,dt as Sae,et as Noe,ga as xx,i as _a,ji as mO,pa as wg,r as Ta,s as gn,ta as ue,u as mn,va as y_,wi as jE,wt as Wze,xi as ir,yi as iO,z as I5,zr as Sn}from"./main-ADAH4OB5.js";var G=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&nu(0,`po-page-job-scheduler`,0),o&2&&jE(`p-breadcrumb`,l.breadcrumb)},dependencies:[aa],encapsulation:2,changeDetection:1})}return i})();var ne=i=>({"docs-sample-code-tabs":i});var W=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Job Scheduler - Background Process`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-job-scheduler-background-process`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ne,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,G],encapsulation:2,changeDetection:1})}return i})();function oe(i,_){if(i&1){let r=Sx();jc(0,`h1`),iO(1,`Etapa 1`),wg(),jc(2,`po-dynamic-form`,4),mt(`p-form`,function(l){y_(r);let u=xx();return v_(u.getFormExample(l))}),wg()}if(i&2){let r=xx();rg(2),jE(`p-fields`,r.parametersForm)}}function ae(i,_){if(i&1){let r=Sx();jc(0,`po-table`,5),mt(`p-selected`,function(l){y_(r);let u=xx();return v_(u.selectedItem(l))}),wg()}if(i&2){let r=xx();jE(`p-items`,r.items)(`p-selectable`,!0)}}function re(i,_){if(i&1&&(jc(0,`po-widget`,6),nu(1,`po-dynamic-view`,7),wg()),i&2){let r=xx();rg(),jE(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(jc(0,`po-page-job-scheduler`,0),FE(1,oe,3,1,`ng-template`,1)(2,ae,1,2,`ng-template`,2)(3,re,2,2,`ng-template`,3),wg()),o&2&&(jE(`p-step-execution-last`,!0),rg(),jE(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),rg(),jE(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[woe,Wze,I5,Noe,aa,mn,gn],encapsulation:2,changeDetection:1})}return i})();var me=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Job Scheduler - Directives`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-job-scheduler
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-job-scheduler-directives`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,me,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,U],encapsulation:2,changeDetection:1})}return i})();var $=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&nu(0,`po-page-job-scheduler`,0),o&2&&jE(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[aa],encapsulation:2})}return i})();var se=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Job Scheduler - Navegação Flexível`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-job-scheduler-flexible-navigation`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,se,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Componente`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoPageJobSchedulerComponent`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`O `),jc(13,`code`),iO(14,`po-page-job-scheduler`),wg(),iO(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),wg(),jc(16,`p`),iO(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),wg(),jc(18,`p`),iO(19,`Veja mais sobre os padrões utilizados nas requisições no `),jc(20,`a`,6),iO(21,`Guia de implementação de APIs`),wg(),iO(22,`.`),wg(),jc(23,`h4`),iO(24,`Tokens customizáveis`),wg(),jc(25,`blockquote`)(26,`p`),iO(27,`Para maiores informações, acesse o guia `),jc(28,`a`,7),iO(29,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(30,`.`),wg()(),jc(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),iO(35,`Propriedade`),wg(),jc(36,`th`),iO(37,`Descrição`),wg(),jc(38,`th`),iO(39,`Valor Padrão`),wg()()(),jc(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),iO(44,`Header`),wg()(),nu(45,`td`)(46,`td`),wg(),jc(47,`tr`)(48,`td`)(49,`code`),iO(50,`--padding`),wg()(),jc(51,`td`),iO(52,`Espaçamento do header`),wg(),jc(53,`td`)(54,`code`),iO(55,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(56,`tr`)(57,`td`)(58,`code`),iO(59,`--gap`),wg()(),jc(60,`td`),iO(61,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(62,`td`)(63,`code`),iO(64,`var(--spacing-md)`),wg()()(),jc(65,`tr`)(66,`td`)(67,`code`),iO(68,`--gap-actions`),wg()(),jc(69,`td`),iO(70,`Espaçamento entre as ações`),wg(),jc(71,`td`)(72,`code`),iO(73,`var(--spacing-xs)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-family`),wg()(),jc(78,`td`),iO(79,`Família tipográfica do título`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-family-theme)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`strong`),iO(86,`Content`),wg()(),nu(87,`td`)(88,`td`),wg(),jc(89,`tr`)(90,`td`)(91,`code`),iO(92,`--padding-content`),wg()(),jc(93,`td`),iO(94,`Espaçamento do conteúdo`),wg(),jc(95,`td`)(96,`code`),iO(97,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(98,`div`,8)(99,`h4`,9),iO(100,`Seletor`),wg(),jc(101,`pre`,10),iO(102,`<po-page-job-scheduler
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
`),wg()(),jc(103,`h4`,11),iO(104,`Propriedades`),wg(),jc(105,`table`,12)(106,`tr`,13)(107,`th`,14),iO(108,`Nome`),wg(),jc(109,`th`,14),iO(110,`Tipo`),wg(),jc(111,`th`,14),iO(112,`Padrão`),wg(),jc(113,`th`,14),iO(114,`Descrição`),wg()(),jc(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),iO(119,` p-allow-direct-navigation`),nu(120,`br`),wg()()(),jc(121,`td`,19)(122,`code`,20),iO(123,`boolean`),wg()(),jc(124,`td`,21)(125,`p`)(126,`code`),iO(127,`false`),wg()()(),jc(128,`td`,22)(129,`em`)(130,`strong`),iO(131,`(opcional)`),wg()(),jc(132,`p`),iO(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),wg(),jc(134,`p`),iO(135,`Quando habilitado (`),jc(136,`code`),iO(137,`true`),wg(),iO(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),wg(),jc(139,`blockquote`)(140,`p`),iO(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),wg()()()(),jc(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),iO(146,` p-before-send`),nu(147,`br`),wg()()(),jc(148,`td`,19)(149,`code`,23),iO(150,`unknown`),wg()(),jc(151,`td`,21),iO(152,`-`),wg(),jc(153,`td`,22)(154,`em`)(155,`strong`),iO(156,`(opcional)`),wg()(),jc(157,`p`),iO(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),wg(),jc(159,`blockquote`)(160,`p`),iO(161,`Deve retornar um objeto do tipo `),jc(162,`code`),iO(163,`PoPageJobScheduler`),wg(),iO(164,` para ser adicionado ao model do PoPageJobScheduler.`),wg()(),jc(165,`blockquote`)(166,`p`),iO(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),jc(168,`code`),iO(169,`PoJobSchedulerInternal`),wg(),iO(170,`.`),wg()(),jc(171,`p`),iO(172,`O contexto da função que será chamada, será o mesmo que o do `),jc(173,`code`),iO(174,`PoPageJobScheduler`),wg(),iO(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),jc(176,`code`),iO(177,`bind`),wg(),iO(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),jc(179,`code`),iO(180,`beforeSend`),wg(),iO(181,`:`),wg(),jc(182,`pre`)(183,`code`),iO(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),wg()()()(),jc(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),iO(189,` p-breadcrumb`),nu(190,`br`),wg()()(),jc(191,`td`,19)(192,`code`,24),iO(193,`PoBreadcrumb`),wg()(),jc(194,`td`,21),iO(195,`-`),wg(),jc(196,`td`,22)(197,`em`)(198,`strong`),iO(199,`(opcional)`),wg()(),jc(200,`p`),iO(201,`Objeto com as propriedades do breadcrumb.`),wg()()(),jc(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),iO(206,` p-components-size`),nu(207,`br`),wg()()(),jc(208,`td`,19)(209,`code`,25),iO(210,`string`),wg()(),jc(211,`td`,21)(212,`p`)(213,`code`),iO(214,`medium`),wg()()(),jc(215,`td`,22)(216,`em`)(217,`strong`),iO(218,`(opcional)`),wg()(),jc(219,`p`),iO(220,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(221,`ul`)(222,`li`)(223,`code`),iO(224,`small`),wg(),iO(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(226,`li`)(227,`code`),iO(228,`medium`),wg(),iO(229,`: aplica a medida medium de cada componente.`),wg()(),jc(230,`blockquote`)(231,`p`),iO(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(233,`code`),iO(234,`medium`),wg(),iO(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(236,`a`,26),iO(237,`po-theme`),wg(),iO(238,`.`),wg()()()(),jc(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),iO(243,` (p-error)`),nu(244,`br`),wg()()(),jc(245,`td`,19)(246,`code`,29),iO(247,`EventEmitter`),wg()(),jc(248,`td`,21),iO(249,`-`),wg(),jc(250,`td`,22)(251,`em`)(252,`strong`),iO(253,`(opcional)`),wg()(),jc(254,`p`),iO(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),wg()()(),jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),iO(260,` p-parameters`),nu(261,`br`),wg()()(),jc(262,`td`,19)(263,`code`,30),iO(264,`Array<PoDynamicFormField>`),wg()(),jc(265,`td`,21),iO(266,`-`),wg(),jc(267,`td`,22)(268,`p`),iO(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),wg(),jc(270,`p`),iO(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),wg()()(),jc(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),iO(276,` p-service-api`),nu(277,`br`),wg()()(),jc(278,`td`,19)(279,`code`,25),iO(280,`string`),wg()(),jc(281,`td`,21),iO(282,`-`),wg(),jc(283,`td`,22)(284,`p`),iO(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),wg(),jc(286,`h4`),iO(287,`Processos`),wg(),jc(288,`p`),iO(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),jc(290,`code`),iO(291,`GET`),wg(),iO(292,` para o endpoint `),jc(293,`code`),iO(294,`{service-api}/processes`),wg(),iO(295,`, para buscar
essa lista de processos.`),wg(),jc(296,`p`),iO(297,`Este endpoint `),jc(298,`code`),iO(299,`{service-api}/processes`),wg(),iO(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),wg(),jc(301,`pre`)(302,`code`),iO(303,`GET {service-api}/processes
`),wg()(),jc(304,`pre`)(305,`code`),iO(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),wg()(),jc(307,`p`),iO(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),wg(),jc(309,`p`),iO(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),jc(311,`code`),iO(312,`search`),wg(),iO(313,`. Da seguinte forma:`),wg(),jc(314,`pre`)(315,`code`),iO(316,`GET {service-api}/processes?search=relatorio
`),wg()(),jc(317,`blockquote`)(318,`p`),iO(319,`Veja mais sobre paginação e filtros no `),jc(320,`a`,6),iO(321,`Guia de implementação de APIs`),wg(),iO(322,`.
Caso seja informada a propriedade `),jc(323,`code`),iO(324,`p-parameters`),wg(),iO(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),wg()(),jc(326,`p`),iO(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),jc(328,`code`),iO(329,`{service-api}/processes`),wg(),iO(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),jc(331,`strong`),iO(332,`identificador do processo - `),jc(333,`code`),iO(334,`processID`),wg()(),iO(335,` e ao salvar será enviado um `),jc(336,`code`),iO(337,`POST`),wg(),iO(338,` para o endpoint difinido `),jc(339,`code`),iO(340,`serviceApi`),wg(),iO(341,` conforme abaixo:`),wg(),jc(342,`pre`)(343,`code`),iO(344,`POST {service-api}
`),wg()(),jc(345,`p`)(346,`em`),iO(347,`Request payload`),wg(),iO(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(349,`code`),iO(350,`PoJobScheduler`),wg(),iO(351,`:`),wg(),jc(352,`pre`)(353,`code`),iO(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),wg()(),jc(355,`p`),iO(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),jc(357,`code`),iO(358,`GET`),wg(),iO(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),jc(360,`a`,31),iO(361,`PoDynamicFormField`),wg(),iO(362,`. Porém, caso utilizar a propriedade `),jc(363,`code`),iO(364,`p-parameters`),wg(),iO(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),wg(),jc(366,`pre`)(367,`code`),iO(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),wg()(),jc(369,`h4`),iO(370,`Salvar e Atualizar`),wg(),jc(371,`p`),iO(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),jc(373,`em`),iO(374,`payload`),wg(),iO(375,`.
Abaixo uma requisi\xE7\xE3o `),jc(376,`code`),iO(377,`POST`),wg(),iO(378,` disparada, onde as propriedades do `),jc(379,`em`),iO(380,`Job Scheduler`),wg(),iO(381,` foram preenchidas:`),wg(),jc(382,`pre`)(383,`code`),iO(384,`POST {service-api}
`),wg()(),jc(385,`p`)(386,`em`),iO(387,`Request payload`),wg(),iO(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(389,`code`),iO(390,`PoJobScheduler`),wg(),iO(391,`:`),wg(),jc(392,`pre`)(393,`code`),iO(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),wg()(),jc(395,`p`),iO(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),jc(397,`code`),iO(398,`id`),wg(),iO(399,`.`),wg(),jc(400,`p`),iO(401,`Exemplo de configuração de rota:`),wg(),jc(402,`pre`)(403,`code`),iO(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),wg()(),jc(405,`p`),iO(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),wg(),jc(407,`pre`)(408,`code`),iO(409,`GET {service-api}/{id}
`),wg()(),jc(410,`p`),iO(411,`Ao atualizar o agendamento, será disparado um `),jc(412,`code`),iO(413,`PUT`),wg(),iO(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),jc(415,`code`),iO(416,`PUT`),wg(),iO(417,` disparada, onde a propriedade `),jc(418,`em`),iO(419,`recurrent`),wg(),iO(420,` e `),jc(421,`em`),iO(422,`daily`),wg(),iO(423,` foram atualizadas:`),wg(),jc(424,`pre`)(425,`code`),iO(426,`PUT {service-api}/{id}
`),wg()(),jc(427,`p`)(428,`em`),iO(429,`Request payload`),wg(),iO(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(431,`code`),iO(432,`PoJobScheduler`),wg(),iO(433,`:`),wg(),jc(434,`pre`)(435,`code`),iO(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),wg()()()(),jc(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),iO(441,` p-step-execution-last`),nu(442,`br`),wg()()(),jc(443,`td`,19)(444,`code`,20),iO(445,`boolean`),wg()(),jc(446,`td`,21),iO(447,`-`),wg(),jc(448,`td`,22)(449,`em`)(450,`strong`),iO(451,`(opcional)`),wg()(),jc(452,`p`),iO(453,`Define se o step `),jc(454,`code`),iO(455,`Agendamento`),wg(),iO(456,` deve ser exibido como o último na sequência de steps`),wg(),jc(457,`blockquote`)(458,`p`),iO(459,`Aplicável apenas quando utilizado `),jc(460,`code`),iO(461,`PoJobSchedulerParametersTemplateDirective`),wg()()()()(),jc(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),iO(466,` p-orientation`),nu(467,`br`),wg()()(),jc(468,`td`,19)(469,`code`,32),iO(470,`PoStepperOrientation`),wg()(),jc(471,`td`,21),iO(472,`-`),wg(),jc(473,`td`,22)(474,`em`)(475,`strong`),iO(476,`(opcional)`),wg()(),jc(477,`p`),iO(478,`Define a orientação de exibição do `),jc(479,`code`),iO(480,`po-stepper`),wg(),iO(481,`.`),wg(),jc(482,`blockquote`)(483,`p`),iO(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),wg()(),jc(485,`blockquote`)(486,`p`),iO(487,`Veja os valores válidos no `),jc(488,`em`),iO(489,`enum`),wg(),jc(490,`a`,33),iO(491,`PoStepperOrientation`),wg(),iO(492,`.`),wg()()()(),jc(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),iO(497,` (p-success)`),nu(498,`br`),wg()()(),jc(499,`td`,19)(500,`code`,29),iO(501,`EventEmitter`),wg()(),jc(502,`td`,21),iO(503,`-`),wg(),jc(504,`td`,22)(505,`em`)(506,`strong`),iO(507,`(opcional)`),wg()(),jc(508,`p`),iO(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),wg()()(),jc(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),iO(514,` p-title`),nu(515,`br`),wg()()(),jc(516,`td`,19)(517,`code`,25),iO(518,`string`),wg()(),jc(519,`td`,21),iO(520,`-`),wg(),jc(521,`td`,22)(522,`p`),iO(523,`Título da página.`),wg()()()(),jc(524,`h3`),iO(525,`Interfaces`),wg(),jc(526,`h4`,34)(527,`code`,5),iO(528,`PoJobScheduler`),wg()(),jc(529,`div`,2)(530,`p`),iO(531,`Estrutura do `),jc(532,`em`),iO(533,`payload`),wg(),iO(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),jc(535,`em`),iO(536,`Job Scheduler`),wg(),iO(537,`.`),wg()(),jc(538,`h4`,11),iO(539,`Propriedades`),wg(),jc(540,`table`,12)(541,`tr`,13)(542,`th`,14),iO(543,`Nome`),wg(),jc(544,`th`,14),iO(545,`Tipo`),wg(),jc(546,`th`,14),iO(547,`Descrição`),wg()(),jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),iO(552,` daily`),nu(553,`br`),wg()()(),jc(554,`td`,19)(555,`code`,35),iO(556,`{ hour: number; minute: number;
}`),wg()(),jc(557,`td`,22)(558,`em`)(559,`strong`),iO(560,`(opcional)`),wg()(),jc(561,`p`),iO(562,`Define uma repetição diária.`),wg()()(),jc(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),iO(567,` executionParameter`),nu(568,`br`),wg()()(),jc(569,`td`,19)(570,`code`,36),iO(571,`object`),wg()(),jc(572,`td`,22)(573,`em`)(574,`strong`),iO(575,`(opcional)`),wg()(),jc(576,`p`),iO(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),wg()()(),jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),iO(582,` firstExecution`),nu(583,`br`),wg()()(),jc(584,`td`,19)(585,`code`,25),iO(586,`string`),wg()(),jc(587,`td`,22)(588,`em`)(589,`strong`),iO(590,`(opcional)`),wg()(),jc(591,`p`),iO(592,`Data da primeira execução.`),wg()()(),jc(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),iO(597,` monthly`),nu(598,`br`),wg()()(),jc(599,`td`,19)(600,`code`,37),iO(601,`{ day: number; hour: number; minute: number;
}`),wg()(),jc(602,`td`,22)(603,`em`)(604,`strong`),iO(605,`(opcional)`),wg()(),jc(606,`p`),iO(607,`Define uma repetição mensal.`),wg()()(),jc(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),iO(612,` processID`),nu(613,`br`),wg()()(),jc(614,`td`,19)(615,`code`,25),iO(616,`string`),wg()(),jc(617,`td`,22)(618,`p`),iO(619,`Identificador do processo.`),wg()()(),jc(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),iO(624,` recurrent`),nu(625,`br`),wg()()(),jc(626,`td`,19)(627,`code`,20),iO(628,`boolean`),wg()(),jc(629,`td`,22)(630,`em`)(631,`strong`),iO(632,`(opcional)`),wg()(),jc(633,`p`),iO(634,`Permite uma execução recorrente.`),wg()()(),jc(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),iO(639,` weekly`),nu(640,`br`),wg()()(),jc(641,`td`,19)(642,`code`,38),iO(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),wg()(),jc(644,`td`,22)(645,`em`)(646,`strong`),iO(647,`(opcional)`),wg()(),jc(648,`p`),iO(649,`Define uma repetição semanal.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var Ee=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-page-job-scheduler-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),nu(5,`sample-po-page-job-scheduler-background-process-view`)(6,`sample-po-page-job-scheduler-directives-view`)(7,`sample-po-page-job-scheduler-flexible-navigation-view`),wg()()()),o&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,W,Q,K,Y],encapsulation:2,changeDetection:1})}return i})()}];var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[C1.forChild(Ee),C1]})}return i})();var Ie=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[Ta,ee]})}return i})();export{Ie as DocPoPageJobSchedulerModule};