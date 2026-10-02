import{Di as he,Dt as aae,Hn as AN,Li as kL,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,Tn as vze,Un as Ac,Vr as RN,Wi as mg,ai as aN,c as ia,dr as Hp,ei as Xc,fa as vN,ga as wn,gn as tae,i as _a,ki as ho,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue,xi as fo}from"./main-TFA52GHY.js";var V=()=>({property:`id`,label:`User ID`});var G=a=>[a];var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,d){o&1&&Kc(0,`po-page-dynamic-edit`,0),o&2&&cE(`p-fields`,AN(2,G,RN(1,V)))},dependencies:[ia],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a});var L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Dynamic Edit Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return d.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-dynamic-edit-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+d.sampleCodeButtonIcon),Hp(),mg(` `,d.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,W,d.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,B],encapsulation:2,changeDetection:1})}return a})();var J=[`dynamicEdit`];var j=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,d){if(o&1&&Xc(J,7),o&2){let u;fo(u=ho())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,d){o&1&&Kc(0,`po-page-dynamic-edit`,1,0),o&2&&cE(`p-auto-router`,!0)(`p-actions`,d.actions)(`p-breadcrumb`,d.breadcrumb)(`p-fields`,d.fields)(`p-literals`,d.literals)(`p-service-api`,d.serviceApi)},dependencies:[ia],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a});var O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Dynamic Edit - User`),ug(),Ac(4,`a`,2),pt(`click`,function(){return d.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-dynamic-edit-user`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+d.sampleCodeButtonIcon),Hp(),mg(` `,d.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Z,d.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,d){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do template do po-page-dynamic-detail.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPageDynamicEditComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O `),Ac(15,`code`),vN(16,`po-page-dynamic-edit`),ug(),vN(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),ug(),Ac(18,`h3`),vN(19,`Utilização via rota`),ug(),Ac(20,`p`),vN(21,`Ao utilizar as rotas para inicializar o template, o `),Ac(22,`code`),vN(23,`page-dynamic-edit`),ug(),vN(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),ug(),Ac(25,`p`),vN(26,`Exemplo de utilização:`),ug(),Ac(27,`p`),vN(28,`Arquivo de configuração de rotas da aplicação: `),Ac(29,`code`),vN(30,`app-routing.module.ts`),ug()(),Ac(31,`pre`)(32,`code`),vN(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),ug()(),Ac(34,`p`),vN(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),ug(),Ac(36,`p`),vN(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ug(),Ac(38,`blockquote`)(39,`p`),vN(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),ug()(),Ac(41,`p`),vN(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),Ac(43,`code`),vN(44,`id`),ug(),vN(45,`:`),ug(),Ac(46,`pre`)(47,`code`),vN(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),ug()(),Ac(49,`p`),vN(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ug(),Ac(51,`p`),vN(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Ac(53,`a`,6),vN(54,`PoPageDynamicEditMetadata`),ug(),vN(55,`. Por exemplo:`),ug(),Ac(56,`pre`)(57,`code`),vN(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),ug()(),Ac(59,`blockquote`)(60,`p`),vN(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),Ac(62,`code`),vN(63,`serviceApi`),ug(),vN(64,` da seguinte forma:`),ug()(),Ac(65,`pre`)(66,`code`),vN(67,`GET {end-point}/metadata?type=edit&version={version}
`),ug()(),Ac(68,`h4`),vN(69,`Tokens customizáveis`),ug(),Ac(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),vN(74,`Propriedade`),ug(),Ac(75,`th`),vN(76,`Descrição`),ug(),Ac(77,`th`),vN(78,`Valor Padrão`),ug()()(),Ac(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),vN(83,`Header`),ug()(),Kc(84,`td`)(85,`td`),ug(),Ac(86,`tr`)(87,`td`)(88,`code`),vN(89,`--padding`),ug()(),Ac(90,`td`),vN(91,`Espaçamento do header`),ug(),Ac(92,`td`)(93,`code`),vN(94,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(95,`tr`)(96,`td`)(97,`code`),vN(98,`--gap`),ug()(),Ac(99,`td`),vN(100,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(101,`td`)(102,`code`),vN(103,`var(--spacing-md)`),ug()()(),Ac(104,`tr`)(105,`td`)(106,`code`),vN(107,`--gap-actions`),ug()(),Ac(108,`td`),vN(109,`Espaçamento entre as ações`),ug(),Ac(110,`td`)(111,`code`),vN(112,`var(--spacing-xs)`),ug()()(),Ac(113,`tr`)(114,`td`)(115,`code`),vN(116,`--font-family`),ug()(),Ac(117,`td`),vN(118,`Família tipográfica do título`),ug(),Ac(119,`td`)(120,`code`),vN(121,`var(--font-family-theme)`),ug()()(),Ac(122,`tr`)(123,`td`)(124,`strong`),vN(125,`Content`),ug()(),Kc(126,`td`)(127,`td`),ug(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--padding-content`),ug()(),Ac(132,`td`),vN(133,`Espaçamento do conteúdo`),ug(),Ac(134,`td`)(135,`code`),vN(136,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(137,`div`,7)(138,`h4`,8),vN(139,`Seletor`),ug(),Ac(140,`pre`,9),vN(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),ug()(),Ac(142,`h4`,10),vN(143,`Propriedades`),ug(),Ac(144,`table`,11)(145,`tr`,12)(146,`th`,13),vN(147,`Nome`),ug(),Ac(148,`th`,13),vN(149,`Tipo`),ug(),Ac(150,`th`,13),vN(151,`Padrão`),ug(),Ac(152,`th`,13),vN(153,`Descrição`),ug()(),Ac(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),vN(158,` p-actions`),Kc(159,`br`),ug()()(),Ac(160,`td`,18)(161,`code`,19),vN(162,`PoPageDynamicEditActions`),ug()(),Ac(163,`td`,20),vN(164,`-`),ug(),Ac(165,`td`,21)(166,`em`)(167,`strong`),vN(168,`(opcional)`),ug()(),Ac(169,`p`),vN(170,`Ações da página.`),ug()()(),Ac(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),vN(175,` p-auto-router`),Kc(176,`br`),ug()()(),Ac(177,`td`,18)(178,`code`,22),vN(179,`boolean`),ug()(),Ac(180,`td`,20)(181,`p`),vN(182,`false`),ug()(),Ac(183,`td`,21)(184,`em`)(185,`strong`),vN(186,`(opcional)`),ug()(),Ac(187,`p`),vN(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),ug(),Ac(189,`blockquote`)(190,`p`),vN(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),Ac(192,`code`),vN(193,`**`),ug(),vN(194,`) especificada.`),ug()()()(),Ac(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),vN(199,` p-breadcrumb`),Kc(200,`br`),ug()()(),Ac(201,`td`,18)(202,`code`,23),vN(203,`PoBreadcrumb`),ug()(),Ac(204,`td`,20),vN(205,`-`),ug(),Ac(206,`td`,21)(207,`em`)(208,`strong`),vN(209,`(opcional)`),ug()(),Ac(210,`p`),vN(211,`Objeto com propriedades do breadcrumb.`),ug()()(),Ac(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),vN(216,` p-components-size`),Kc(217,`br`),ug()()(),Ac(218,`td`,18)(219,`code`,24),vN(220,`string`),ug()(),Ac(221,`td`,20)(222,`p`)(223,`code`),vN(224,`medium`),ug()()(),Ac(225,`td`,21)(226,`em`)(227,`strong`),vN(228,`(opcional)`),ug()(),Ac(229,`p`),vN(230,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(231,`ul`)(232,`li`)(233,`code`),vN(234,`small`),ug(),vN(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(236,`li`)(237,`code`),vN(238,`medium`),ug(),vN(239,`: aplica a medida medium de cada componente.`),ug()(),Ac(240,`blockquote`)(241,`p`),vN(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(243,`code`),vN(244,`medium`),ug(),vN(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(246,`a`,25),vN(247,`po-theme`),ug(),vN(248,`.`),ug()()()(),Ac(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),vN(253,` p-fields`),Kc(254,`br`),ug()()(),Ac(255,`td`,18)(256,`code`,26),vN(257,`Array<PoPageDynamicEditField>`),ug()(),Ac(258,`td`,20),vN(259,`-`),ug(),Ac(260,`td`,21)(261,`p`),vN(262,`Lista dos campos usados na tabela e busca avançada.`),ug()()(),Ac(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),vN(267,` p-literals`),Kc(268,`br`),ug()()(),Ac(269,`td`,18)(270,`code`,27),vN(271,`PoPageDynamicEditLiterals`),ug()(),Ac(272,`td`,20),vN(273,`-`),ug(),Ac(274,`td`,21)(275,`em`)(276,`strong`),vN(277,`(opcional)`),ug()(),Ac(278,`p`),vN(279,`Objeto com as literais usadas no `),Ac(280,`code`),vN(281,`po-page-dynamic-edit`),ug(),vN(282,`.`),ug(),Ac(283,`p`),vN(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),ug(),Ac(285,`pre`)(286,`code`),vN(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),ug()(),Ac(288,`p`),vN(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(290,`pre`)(291,`code`),vN(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),ug()(),Ac(293,`blockquote`)(294,`p`),vN(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ac(296,`a`,28)(297,`code`),vN(298,`PoI18nService`),ug()(),vN(299,` ou `),Ac(300,`em`),vN(301,`browser`),ug(),vN(302,`.`),ug()()()(),Ac(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),vN(307,` p-notification-type`),Kc(308,`br`),ug()()(),Ac(309,`td`,18)(310,`code`,24),vN(311,`string`),ug()(),Ac(312,`td`,20)(313,`p`),vN(314,`warning`),ug()(),Ac(315,`td`,21)(316,`em`)(317,`strong`),vN(318,`(opcional)`),ug()(),Ac(319,`p`),vN(320,`Tipo da notificação.`),ug(),Ac(321,`p`),vN(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),ug(),Ac(323,`pre`)(324,`code`),vN(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),ug()(),Ac(326,`blockquote`)(327,`p`),vN(328,`Os valores aceitos são 'warning' e 'error'.`),ug()()()(),Ac(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),vN(333,` p-load`),Kc(334,`br`),ug()()(),Ac(335,`td`,18)(336,`code`,24),vN(337,`string `),ug(),Ac(338,`code`,29),vN(339,` (() => PoPageDynamicEditOptions)`),ug()(),Ac(340,`td`,20),vN(341,`-`),ug(),Ac(342,`td`,21)(343,`p`),vN(344,`Função ou serviço que será executado na inicialização do componente.`),ug(),Ac(345,`p`),vN(346,`A propriedade aceita os seguintes tipos:`),ug(),Ac(347,`ul`)(348,`li`)(349,`code`),vN(350,`string`),ug(),vN(351,`: `),Ac(352,`em`),vN(353,`Endpoint`),ug(),vN(354,` usado pelo componente para requisição via `),Ac(355,`code`),vN(356,`POST`),ug(),vN(357,`.`),ug(),Ac(358,`li`)(359,`code`),vN(360,`function`),ug(),vN(361,`: Método que será executado.`),ug()(),Ac(362,`p`),vN(363,`O retorno desta função deve ser do tipo `),Ac(364,`code`),vN(365,`PoPageDynamicEditOptions`),ug(),vN(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),ug(),Ac(367,`p`),vN(368,`Por exemplo:`),ug(),Ac(369,`pre`)(370,`code`),vN(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),ug()(),Ac(372,`p`),vN(373,`Para referenciar a sua função utilize a propriedade `),Ac(374,`code`),vN(375,`bind`),ug(),vN(376,`, por exemplo:`),ug(),Ac(377,`pre`)(378,`code`),vN(379,`[p-load]="onLoadOptions.bind(this)"
`),ug()()()(),Ac(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),vN(384,` p-load-data`),Kc(385,`br`),ug()()(),Ac(386,`td`,18)(387,`code`,30),vN(388,`unknown`),ug()(),Ac(389,`td`,20),vN(390,`-`),ug(),Ac(391,`td`,21)(392,`em`)(393,`strong`),vN(394,`(opcional)`),ug()(),Ac(395,`p`),vN(396,`Função que será executada após ser realizada a busca dos dados.`),ug(),Ac(397,`p`),vN(398,`A propriedade aceita os seguintes tipos:`),ug(),Ac(399,`ul`)(400,`li`)(401,`code`),vN(402,`function`),ug(),vN(403,`: Método que será executado.`),ug()(),Ac(404,`p`),vN(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),ug(),Ac(406,`p`),vN(407,`Por exemplo:`),ug(),Ac(408,`pre`)(409,`code`),vN(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),ug()(),Ac(411,`p`),vN(412,`Para referenciar a sua função utilize a propriedade `),Ac(413,`code`),vN(414,`bind`),ug(),vN(415,`, por exemplo:`),ug(),Ac(416,`pre`)(417,`code`),vN(418,`[p-load-data]="onLoadCustom.bind(this)"
`),ug()()()(),Ac(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),vN(423,` p-service-api`),Kc(424,`br`),ug()()(),Ac(425,`td`,18)(426,`code`,24),vN(427,`string`),ug()(),Ac(428,`td`,20),vN(429,`-`),ug(),Ac(430,`td`,21)(431,`p`),vN(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),ug(),Ac(433,`p`),vN(434,`Para as ações de `),Ac(435,`code`),vN(436,`save`),ug(),vN(437,` e `),Ac(438,`code`),vN(439,`saveNew`),ug(),vN(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),ug(),Ac(441,`blockquote`)(442,`p`)(443,`code`),vN(444,`POST {end-point}`),ug()()(),Ac(445,`pre`)(446,`code`),vN(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),ug()(),Ac(448,`p`),vN(449,`Resquisição disparada, onde a propriedade `),Ac(450,`code`),vN(451,`name`),ug(),vN(452,` e `),Ac(453,`code`),vN(454,`city`),ug(),vN(455,` foram preenchidas:`),ug(),Ac(456,`pre`)(457,`code`),vN(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ug()(),Ac(459,`p`),vN(460,`Request payload:`),ug(),Ac(461,`pre`)(462,`code`),vN(463,`{ "name": "Fulano", "city": "Smallville" }
`),ug()(),Ac(464,`p`),vN(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),Ac(466,`code`),vN(467,`id`),ug(),vN(468,`.`),ug(),Ac(469,`p`),vN(470,`Exemplo de configuração de rota:`),ug(),Ac(471,`pre`)(472,`code`),vN(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),ug()(),Ac(474,`p`),vN(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),ug(),Ac(476,`blockquote`)(477,`p`)(478,`code`),vN(479,`GET {end-point}/{id}`),ug()()(),Ac(480,`p`),vN(481,`Nos métodos de `),Ac(482,`code`),vN(483,`save`),ug(),vN(484,` e `),Ac(485,`code`),vN(486,`saveNew`),ug(),vN(487,`, ao invés de um `),Ac(488,`code`),vN(489,`POST`),ug(),vN(490,`, será disparado um `),Ac(491,`code`),vN(492,`PUT`),ug(),vN(493,`.`),ug(),Ac(494,`p`),vN(495,`Resquisição disparada, onde a propriedade `),Ac(496,`code`),vN(497,`name`),ug(),vN(498,` e `),Ac(499,`code`),vN(500,`city`),ug(),vN(501,` foram preenchidas / atualizadas, e o `),Ac(502,`code`),vN(503,`id`),ug(),vN(504,` da url é 2:`),ug(),Ac(505,`pre`)(506,`code`),vN(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ug()(),Ac(508,`p`),vN(509,`Request payload:`),ug(),Ac(510,`pre`)(511,`code`),vN(512,`{ "name": "Fulano", "city": "Metropolis" }
`),ug()()()(),Ac(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),vN(517,` p-title`),Kc(518,`br`),ug()()(),Ac(519,`td`,18)(520,`code`,24),vN(521,`string`),ug()(),Ac(522,`td`,20),vN(523,`-`),ug(),Ac(524,`td`,21)(525,`p`),vN(526,`Título da página.`),ug()()()(),Ac(527,`h3`,10),vN(528,`Métodos`),ug(),Ac(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),vN(535,` showAdditionalHelp `),ug()()()()(),Ac(536,`tr`,21)(537,`td`,21)(538,`p`),vN(539,`Método que exibe `),Ac(540,`code`),vN(541,`p-helper`),ug(),vN(542,` ou executa a ação definida em `),Ac(543,`code`),vN(544,`p-helper{eventOnClick}`),ug(),vN(545,` ou em `),Ac(546,`code`),vN(547,`p-additionalHelp`),ug(),vN(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(549,`code`),vN(550,`keydown`),ug(),vN(551,`.`),ug(),Ac(552,`pre`)(553,`code`),vN(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),ug()()()()(),Ac(555,`h5`)(556,`b`),vN(557,`Parâmetros`),ug()(),Ac(558,`table`,11)(559,`tr`,12)(560,`th`,13),vN(561,`Nome`),ug(),Ac(562,`th`,13),vN(563,`Tipo`),ug(),Ac(564,`th`,13),vN(565,`Descrição`),ug()(),Ac(566,`tr`,14)(567,`td`,15),vN(568,` property`),ug(),Ac(569,`td`,18)(570,`code`,33),vN(571,` string `),ug()(),Ac(572,`td`,21)(573,`p`),vN(574,`Identificador da coluna.`),ug()()()(),Kc(575,`br`),Ac(576,`h3`),vN(577,`Interfaces`),ug(),Ac(578,`h4`,34)(579,`code`,5),vN(580,`PoPageDynamicEditActions`),ug()(),Ac(581,`div`,2)(582,`p`),vN(583,`Interface para as ações do componente po-page-dynamic-edit.`),ug()(),Ac(584,`h4`,10),vN(585,`Propriedades`),ug(),Ac(586,`table`,11)(587,`tr`,12)(588,`th`,13),vN(589,`Nome`),ug(),Ac(590,`th`,13),vN(591,`Tipo`),ug(),Ac(592,`th`,13),vN(593,`Descrição`),ug()(),Ac(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),vN(598,` beforeCancel`),Kc(599,`br`),ug()()(),Ac(600,`td`,18)(601,`code`,24),vN(602,`string `),ug(),Ac(603,`code`,35),vN(604,` (() => PoPageDynamicEditBeforeCancel)`),ug()(),Ac(605,`td`,21)(606,`em`)(607,`strong`),vN(608,`(opcional)`),ug()(),Ac(609,`p`),vN(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),ug(),Ac(611,`p`),vN(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ac(613,`code`),vN(614,`PoPageDynamicEditBeforeCancel`),ug(),vN(615,`.`),ug(),Ac(616,`blockquote`)(617,`p`),vN(618,`A url será chamada via POST`),ug()(),Ac(619,`p`),vN(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ac(621,`strong`),vN(622,`beforeCancel`),ug(),vN(623,`
ou definir a mensagem no atributo `),Ac(624,`code`),vN(625,`_messages`),ug(),vN(626,` na resposta da API conforme definido
em `),Ac(627,`a`,36),vN(628,`Guia de implementação de APIs`),ug()()()(),Ac(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),vN(633,` beforeSave`),Kc(634,`br`),ug()()(),Ac(635,`td`,18)(636,`code`,24),vN(637,`string `),ug(),Ac(638,`code`,37),vN(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),ug()(),Ac(640,`td`,21)(641,`em`)(642,`strong`),vN(643,`(opcional)`),ug()(),Ac(644,`p`),vN(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),ug(),Ac(646,`p`),vN(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ac(648,`code`),vN(649,`PoPageDynamicEditBeforeSave`),ug(),vN(650,`.`),ug(),Ac(651,`blockquote`)(652,`p`),vN(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Ac(654,`code`),vN(655,`POST {beforeSave}/{key}`),ug(),vN(656,`.`),ug()(),Ac(657,`p`),vN(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ac(659,`strong`),vN(660,`beforeSave`),ug(),vN(661,`
ou definir a mensagem no atributo `),Ac(662,`code`),vN(663,`_messages`),ug(),vN(664,` na resposta da API conforme definido
em `),Ac(665,`a`,36),vN(666,`Guia de implementação de APIs`),ug()()()(),Ac(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),vN(671,` beforeSaveNew`),Kc(672,`br`),ug()()(),Ac(673,`td`,18)(674,`code`,24),vN(675,`string `),ug(),Ac(676,`code`,38),vN(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),ug()(),Ac(678,`td`,21)(679,`em`)(680,`strong`),vN(681,`(opcional)`),ug()(),Ac(682,`p`),vN(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),ug(),Ac(684,`p`),vN(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ac(686,`code`),vN(687,`PoPageDynamicEditBeforeSaveNew`),ug(),vN(688,`.`),ug(),Ac(689,`blockquote`)(690,`p`),vN(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Ac(692,`code`),vN(693,`POST {beforeSave}/{key}`),ug(),vN(694,`.`),ug()(),Ac(695,`p`),vN(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ac(697,`strong`),vN(698,`beforeSaveNew`),ug(),vN(699,`
ou definir a mensagem no atributo `),Ac(700,`code`),vN(701,`_messages`),ug(),vN(702,` na resposta da API conforme definido
em `),Ac(703,`a`,36),vN(704,`Guia de implementação de APIs`),ug()()()(),Ac(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),vN(709,` cancel`),Kc(710,`br`),ug()()(),Ac(711,`td`,18)(712,`code`,24),vN(713,`string `),ug(),Ac(714,`code`,22),vN(715,` boolean `),ug(),Ac(716,`code`,39),vN(717,` Function`),ug()(),Ac(718,`td`,21)(719,`em`)(720,`strong`),vN(721,`(opcional)`),ug()(),Ac(722,`p`),vN(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),Ac(724,`code`),vN(725,`navigator.back()`),ug(),vN(726,`.`),ug(),Ac(727,`blockquote`)(728,`p`),vN(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),ug()(),Ac(730,`blockquote`)(731,`p`),vN(732,`Caso queira esconder a ação deve ser passado o valor `),Ac(733,`code`),vN(734,`false`),ug(),vN(735,`;`),ug()(),Ac(736,`pre`)(737,`code`),vN(738,`actions = {
  cancel: '/'
};
`),ug()()()(),Ac(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),vN(743,` save`),Kc(744,`br`),ug()()(),Ac(745,`td`,18)(746,`code`,24),vN(747,`string `),ug(),Ac(748,`code`,40),vN(749,` ((resource: any, id: string) => void)`),ug()(),Ac(750,`td`,21)(751,`em`)(752,`strong`),vN(753,`(opcional)`),ug()(),Ac(754,`p`),vN(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),ug(),Ac(756,`p`),vN(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),ug(),Ac(758,`blockquote`)(759,`p`),vN(760,`A rota pode conter um parâmetro chamando id.`),ug()(),Ac(761,`pre`)(762,`code`),vN(763,`actions = {
  save: 'detail/:id'
};
`),ug()(),Ac(764,`p`),vN(765,`Se for passado um método:`),ug(),Ac(766,`ul`)(767,`li`),vN(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),Ac(769,`code`),vN(770,`{ email: 'example@email.com' }`),ug(),vN(771,`.`),ug(),Ac(772,`li`),vN(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ug()()()(),Ac(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),vN(778,` saveNew`),Kc(779,`br`),ug()()(),Ac(780,`td`,18)(781,`code`,24),vN(782,`string `),ug(),Ac(783,`code`,41),vN(784,` ((resource: any, id?: string) => void)`),ug()(),Ac(785,`td`,21)(786,`em`)(787,`strong`),vN(788,`(opcional)`),ug()(),Ac(789,`p`),vN(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),ug(),Ac(791,`p`),vN(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),ug(),Ac(793,`blockquote`)(794,`p`),vN(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),ug()(),Ac(796,`pre`)(797,`code`),vN(798,`actions = {
  saveNew: 'new'
};
`),ug()(),Ac(799,`p`),vN(800,`A rota pode conter um parâmetro id.`),ug(),Ac(801,`pre`)(802,`code`),vN(803,`actions = {
  saveNew: 'edit/:id'
};
`),ug()(),Ac(804,`p`),vN(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ug()()()(),Ac(806,`h4`,34)(807,`code`,5),vN(808,`PoPageDynamicEditBeforeCancel`),ug()(),Ac(809,`div`,2)(810,`p`),vN(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ac(812,`code`),vN(813,`beforeCancel`),ug(),vN(814,`.`),ug()(),Ac(815,`h4`,10),vN(816,`Propriedades`),ug(),Ac(817,`table`,11)(818,`tr`,12)(819,`th`,13),vN(820,`Nome`),ug(),Ac(821,`th`,13),vN(822,`Tipo`),ug(),Ac(823,`th`,13),vN(824,`Descrição`),ug()(),Ac(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),vN(829,` allowAction`),Kc(830,`br`),ug()()(),Ac(831,`td`,18)(832,`code`,22),vN(833,`boolean`),ug()(),Ac(834,`td`,21)(835,`em`)(836,`strong`),vN(837,`(opcional)`),ug()(),Ac(838,`p`),vN(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),ug()()(),Ac(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),vN(844,` newUrl`),Kc(845,`br`),ug()()(),Ac(846,`td`,18)(847,`code`,24),vN(848,`string`),ug()(),Ac(849,`td`,21)(850,`em`)(851,`strong`),vN(852,`(opcional)`),ug()(),Ac(853,`p`),vN(854,`Nova rota para navegação que substituirá a definida anteriormente em `),Ac(855,`code`),vN(856,`cancel`),ug(),vN(857,`.`),ug()()()(),Ac(858,`h4`,34)(859,`code`,5),vN(860,`PoPageDynamicEditBeforeSaveNew`),ug()(),Ac(861,`div`,2)(862,`p`),vN(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ac(864,`code`),vN(865,`beforeSaveNew`),ug(),vN(866,`.`),ug()(),Ac(867,`h4`,10),vN(868,`Propriedades`),ug(),Ac(869,`table`,11)(870,`tr`,12)(871,`th`,13),vN(872,`Nome`),ug(),Ac(873,`th`,13),vN(874,`Tipo`),ug(),Ac(875,`th`,13),vN(876,`Descrição`),ug()(),Ac(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),vN(881,` allowAction`),Kc(882,`br`),ug()()(),Ac(883,`td`,18)(884,`code`,22),vN(885,`boolean`),ug()(),Ac(886,`td`,21)(887,`em`)(888,`strong`),vN(889,`(opcional)`),ug()(),Ac(890,`p`),vN(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),ug()()(),Ac(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),vN(896,` newUrl`),Kc(897,`br`),ug()()(),Ac(898,`td`,18)(899,`code`,24),vN(900,`string`),ug()(),Ac(901,`td`,21)(902,`em`)(903,`strong`),vN(904,`(opcional)`),ug()(),Ac(905,`p`),vN(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),Ac(907,`code`),vN(908,`saveNew`),ug(),vN(909,`.`),ug()()(),Ac(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),vN(914,` resource`),Kc(915,`br`),ug()()(),Ac(916,`td`,18)(917,`code`,42),vN(918,`any`),ug()(),Ac(919,`td`,21)(920,`em`)(921,`strong`),vN(922,`(opcional)`),ug()(),Ac(923,`p`),vN(924,`Recurso atualizado.`),ug(),Ac(925,`p`),vN(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Ac(927,`code`),vN(928,`key: true`),ug(),vN(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),ug(),Ac(930,`ul`)(931,`li`)(932,`p`),vN(933,`recurso anterior com a propriedade id foi que definida como `),Ac(934,`em`),vN(935,`key`),ug(),vN(936,`:`),ug(),Ac(937,`pre`)(938,`code`),vN(939,`{ id: 1, name: 'Ane' }
`),ug()()(),Ac(940,`li`)(941,`p`),vN(942,`recurso retornado no `),Ac(943,`code`),vN(944,`beforeSaveNew`),ug(),vN(945,`:`),ug(),Ac(946,`pre`)(947,`code`),vN(948,`{ id: 50, age: 23 }
`),ug()()(),Ac(949,`li`)(950,`p`),vN(951,`Mesclagem do recurso:`),ug(),Ac(952,`pre`)(953,`code`),vN(954,`{ id: 1, name: 'Ane', age: 23 }
`),ug()()()(),Ac(955,`blockquote`)(956,`p`),vN(957,`Caso `),Ac(958,`code`),vN(959,`allowAction`),ug(),vN(960,` seja `),Ac(961,`code`),vN(962,`false`),ug(),vN(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),ug()()()()(),Ac(964,`h4`,34)(965,`code`,5),vN(966,`PoPageDynamicEditBeforeSave`),ug()(),Ac(967,`div`,2)(968,`p`),vN(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ac(970,`code`),vN(971,`beforeSave`),ug(),vN(972,`.`),ug()(),Ac(973,`h4`,10),vN(974,`Propriedades`),ug(),Ac(975,`table`,11)(976,`tr`,12)(977,`th`,13),vN(978,`Nome`),ug(),Ac(979,`th`,13),vN(980,`Tipo`),ug(),Ac(981,`th`,13),vN(982,`Descrição`),ug()(),Ac(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),vN(987,` allowAction`),Kc(988,`br`),ug()()(),Ac(989,`td`,18)(990,`code`,22),vN(991,`boolean`),ug()(),Ac(992,`td`,21)(993,`em`)(994,`strong`),vN(995,`(opcional)`),ug()(),Ac(996,`p`),vN(997,`Define se deve ou não executar a ação salvar (save).`),ug()()(),Ac(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),vN(1002,` newUrl`),Kc(1003,`br`),ug()()(),Ac(1004,`td`,18)(1005,`code`,24),vN(1006,`string`),ug()(),Ac(1007,`td`,21)(1008,`em`)(1009,`strong`),vN(1010,`(opcional)`),ug()(),Ac(1011,`p`),vN(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),Ac(1013,`code`),vN(1014,`save`),ug(),vN(1015,`.`),ug()()(),Ac(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),vN(1020,` resource`),Kc(1021,`br`),ug()()(),Ac(1022,`td`,18)(1023,`code`,42),vN(1024,`any`),ug()(),Ac(1025,`td`,21)(1026,`em`)(1027,`strong`),vN(1028,`(opcional)`),ug()(),Ac(1029,`p`),vN(1030,`Recurso atualizado.`),ug(),Ac(1031,`p`),vN(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),ug(),Ac(1033,`ul`)(1034,`li`)(1035,`p`),vN(1036,`recurso anterior:`),ug(),Ac(1037,`pre`)(1038,`code`),vN(1039,`{ name: 'Ane' }
`),ug()()(),Ac(1040,`li`)(1041,`p`),vN(1042,`recurso retornado no `),Ac(1043,`code`),vN(1044,`beforeSave`),ug(),vN(1045,`:`),ug(),Ac(1046,`pre`)(1047,`code`),vN(1048,`{ age: 23 }
`),ug()()(),Ac(1049,`li`)(1050,`p`),vN(1051,`Mesclagem do recurso:`),ug(),Ac(1052,`pre`)(1053,`code`),vN(1054,`{ name: 'Ane', age: 23 }
`),ug()()()(),Ac(1055,`blockquote`)(1056,`p`),vN(1057,`Caso `),Ac(1058,`code`),vN(1059,`allowAction`),ug(),vN(1060,` seja `),Ac(1061,`code`),vN(1062,`false`),ug(),vN(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),ug()()()()(),Ac(1064,`h4`,34)(1065,`code`,5),vN(1066,`PoPageDynamicEditField`),ug()(),Ac(1067,`div`,2)(1068,`p`),vN(1069,`Interface dos fields usados para compor o template `),Ac(1070,`code`),vN(1071,`po-page-dynamic-edit`),ug(),vN(1072,`.
Herda as defini\xE7\xF5es da interface
`),Ac(1073,`a`,43),vN(1074,`PoDynamicFormField`),ug(),vN(1075,`.`),ug()(),Ac(1076,`h4`,10),vN(1077,`Propriedades`),ug(),Ac(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),vN(1081,`Nome`),ug(),Ac(1082,`th`,13),vN(1083,`Tipo`),ug(),Ac(1084,`th`,13),vN(1085,`Descrição`),ug()(),Ac(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),vN(1090,` duplicate`),Kc(1091,`br`),ug()()(),Ac(1092,`td`,18)(1093,`code`,22),vN(1094,`boolean`),ug()(),Ac(1095,`td`,21)(1096,`em`)(1097,`strong`),vN(1098,`(opcional)`),ug()(),Ac(1099,`p`),vN(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),ug()()()(),Ac(1101,`h4`,34)(1102,`code`,5),vN(1103,`PoPageDynamicEditLiterals`),ug()(),Ac(1104,`div`,2)(1105,`p`),vN(1106,`Interface para definição das literais usadas no `),Ac(1107,`code`),vN(1108,`po-page-dynamic-edit`),ug(),vN(1109,`.`),ug()(),Ac(1110,`h4`,10),vN(1111,`Propriedades`),ug(),Ac(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),vN(1115,`Nome`),ug(),Ac(1116,`th`,13),vN(1117,`Tipo`),ug(),Ac(1118,`th`,13),vN(1119,`Descrição`),ug()(),Ac(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),vN(1124,` cancelConfirmMessage`),Kc(1125,`br`),ug()()(),Ac(1126,`td`,18)(1127,`code`,24),vN(1128,`string`),ug()(),Ac(1129,`td`,21)(1130,`em`)(1131,`strong`),vN(1132,`(opcional)`),ug()(),Ac(1133,`p`),vN(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),ug()()(),Ac(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),vN(1139,` detailActionNew`),Kc(1140,`br`),ug()()(),Ac(1141,`td`,18)(1142,`code`,24),vN(1143,`string`),ug()(),Ac(1144,`td`,21)(1145,`em`)(1146,`strong`),vN(1147,`(opcional)`),ug()(),Ac(1148,`p`),vN(1149,`Rótulo exibido no botão `),Ac(1150,`code`),vN(1151,`Novo`),ug(),vN(1152,`.`),ug()()(),Ac(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),vN(1157,` pageActionCancel`),Kc(1158,`br`),ug()()(),Ac(1159,`td`,18)(1160,`code`,24),vN(1161,`string`),ug()(),Ac(1162,`td`,21)(1163,`em`)(1164,`strong`),vN(1165,`(opcional)`),ug()(),Ac(1166,`p`),vN(1167,`Rótulo exibido no botão `),Ac(1168,`code`),vN(1169,`Cancelar`),ug(),vN(1170,`.`),ug()()(),Ac(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),vN(1175,` pageActionSave`),Kc(1176,`br`),ug()()(),Ac(1177,`td`,18)(1178,`code`,24),vN(1179,`string`),ug()(),Ac(1180,`td`,21)(1181,`em`)(1182,`strong`),vN(1183,`(opcional)`),ug()(),Ac(1184,`p`),vN(1185,`Rótulo exibido no botão `),Ac(1186,`code`),vN(1187,`Salvar`),ug(),vN(1188,`.`),ug()()(),Ac(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),vN(1193,` pageActionSaveNew`),Kc(1194,`br`),ug()()(),Ac(1195,`td`,18)(1196,`code`,24),vN(1197,`string`),ug()(),Ac(1198,`td`,21)(1199,`em`)(1200,`strong`),vN(1201,`(opcional)`),ug()(),Ac(1202,`p`),vN(1203,`Rótulo exibido no botão `),Ac(1204,`code`),vN(1205,`Salvar e novo`),ug(),vN(1206,`.`),ug()()(),Ac(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),vN(1211,` registerNotFound`),Kc(1212,`br`),ug()()(),Ac(1213,`td`,18)(1214,`code`,24),vN(1215,`string`),ug()(),Ac(1216,`td`,21)(1217,`em`)(1218,`strong`),vN(1219,`(opcional)`),ug()(),Ac(1220,`p`),vN(1221,`Texto exibido para resgistro não encontrado.`),ug()()(),Ac(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),vN(1226,` saveNotificationError`),Kc(1227,`br`),ug()()(),Ac(1228,`td`,18)(1229,`code`,24),vN(1230,`string`),ug()(),Ac(1231,`td`,21)(1232,`em`)(1233,`strong`),vN(1234,`(opcional)`),ug()(),Ac(1235,`p`),vN(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),ug()()(),Ac(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),vN(1241,` saveNotificationSuccessSave`),Kc(1242,`br`),ug()()(),Ac(1243,`td`,18)(1244,`code`,24),vN(1245,`string`),ug()(),Ac(1246,`td`,21)(1247,`em`)(1248,`strong`),vN(1249,`(opcional)`),ug()(),Ac(1250,`p`),vN(1251,`Texto exibido para recurso salvo com sucesso.`),ug()()(),Ac(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),vN(1256,` saveNotificationSuccessUpdate`),Kc(1257,`br`),ug()()(),Ac(1258,`td`,18)(1259,`code`,24),vN(1260,`string`),ug()(),Ac(1261,`td`,21)(1262,`em`)(1263,`strong`),vN(1264,`(opcional)`),ug()(),Ac(1265,`p`),vN(1266,`Texto exibido para recurso atualizado com sucesso.`),ug()()(),Ac(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),vN(1271,` saveNotificationWarning`),Kc(1272,`br`),ug()()(),Ac(1273,`td`,18)(1274,`code`,24),vN(1275,`string`),ug()(),Ac(1276,`td`,21)(1277,`em`)(1278,`strong`),vN(1279,`(opcional)`),ug()(),Ac(1280,`p`),vN(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),ug()()()(),Ac(1282,`h4`,34)(1283,`code`,5),vN(1284,`PoPageDynamicEditMetadata`),ug()(),Ac(1285,`div`,2)(1286,`p`),vN(1287,`Interface para as propriedades de uma página dinâmica. `),Kc(1288,`a`,44),ug()(),Ac(1289,`h4`,10),vN(1290,`Propriedades`),ug(),Ac(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),vN(1294,`Nome`),ug(),Ac(1295,`th`,13),vN(1296,`Tipo`),ug(),Ac(1297,`th`,13),vN(1298,`Descrição`),ug()(),Ac(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),vN(1303,` actions`),Kc(1304,`br`),ug()()(),Ac(1305,`td`,18)(1306,`code`,19),vN(1307,`PoPageDynamicEditActions`),ug()(),Ac(1308,`td`,21)(1309,`em`)(1310,`strong`),vN(1311,`(opcional)`),ug()(),Ac(1312,`p`),vN(1313,`Ações que o usuário poderá executar na página através de botões.`),ug()()(),Ac(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),vN(1318,` autoRouter`),Kc(1319,`br`),ug()()(),Ac(1320,`td`,18)(1321,`code`,22),vN(1322,`boolean`),ug()(),Ac(1323,`td`,21)(1324,`em`)(1325,`strong`),vN(1326,`(opcional)`),ug()(),Ac(1327,`p`),vN(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),Ac(1329,`code`),vN(1330,`p-actions`),ug()(),Ac(1331,`p`),vN(1332,`As rotas criadas serão baseadas na propriedade `),Ac(1333,`code`),vN(1334,`p-actions`),ug(),vN(1335,`.`),ug(),Ac(1336,`blockquote`)(1337,`p`),vN(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),Ac(1339,`code`),vN(1340,`**`),ug(),vN(1341,`) especificada.`),ug()()()(),Ac(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),vN(1346,` breadcrumb`),Kc(1347,`br`),ug()()(),Ac(1348,`td`,18)(1349,`code`,23),vN(1350,`PoBreadcrumb`),ug()(),Ac(1351,`td`,21)(1352,`em`)(1353,`strong`),vN(1354,`(opcional)`),ug()(),Ac(1355,`p`),vN(1356,`Objeto com propriedades do breadcrumb.`),ug()()(),Ac(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),vN(1361,` fields`),Kc(1362,`br`),ug()()(),Ac(1363,`td`,18)(1364,`code`,26),vN(1365,`Array<PoPageDynamicEditField>`),ug()(),Ac(1366,`td`,21)(1367,`em`)(1368,`strong`),vN(1369,`(opcional)`),ug()(),Ac(1370,`p`),vN(1371,`Lista dos campos usados.`),ug()()(),Ac(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),vN(1376,` title`),Kc(1377,`br`),ug()()(),Ac(1378,`td`,18)(1379,`code`,24),vN(1380,`string`),ug()(),Ac(1381,`td`,21)(1382,`em`)(1383,`strong`),vN(1384,`(opcional)`),ug()(),Ac(1385,`p`),vN(1386,`Título da página.`),ug()()(),Ac(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),vN(1391,` version`),Kc(1392,`br`),ug()()(),Ac(1393,`td`,18)(1394,`code`,45),vN(1395,`number`),ug()(),Ac(1396,`td`,21)(1397,`p`),vN(1398,`Versão do metadado devolvido pelo backend.`),ug()()()(),Ac(1399,`h4`,34)(1400,`code`,5),vN(1401,`PoPageDynamicEditOptions`),ug()(),Ac(1402,`div`,2)(1403,`p`),vN(1404,`Interface para as propriedades de uma página dinâmica.`),ug()(),Ac(1405,`h4`,10),vN(1406,`Propriedades`),ug(),Ac(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),vN(1410,`Nome`),ug(),Ac(1411,`th`,13),vN(1412,`Tipo`),ug(),Ac(1413,`th`,13),vN(1414,`Descrição`),ug()(),Ac(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),vN(1419,` actions`),Kc(1420,`br`),ug()()(),Ac(1421,`td`,18)(1422,`code`,19),vN(1423,`PoPageDynamicEditActions`),ug()(),Ac(1424,`td`,21)(1425,`em`)(1426,`strong`),vN(1427,`(opcional)`),ug()(),Ac(1428,`p`),vN(1429,`Ações que o usuário poderá executar na página através de botões.`),ug()()(),Ac(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),vN(1434,` breadcrumb`),Kc(1435,`br`),ug()()(),Ac(1436,`td`,18)(1437,`code`,23),vN(1438,`PoBreadcrumb`),ug()(),Ac(1439,`td`,21)(1440,`em`)(1441,`strong`),vN(1442,`(opcional)`),ug()(),Ac(1443,`p`),vN(1444,`Objeto com propriedades do breadcrumb.`),ug()()(),Ac(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),vN(1449,` fields`),Kc(1450,`br`),ug()()(),Ac(1451,`td`,18)(1452,`code`,26),vN(1453,`Array<PoPageDynamicEditField>`),ug()(),Ac(1454,`td`,21)(1455,`em`)(1456,`strong`),vN(1457,`(opcional)`),ug()(),Ac(1458,`p`),vN(1459,`Lista dos campos usados.`),ug()()(),Ac(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),vN(1464,` title`),Kc(1465,`br`),ug()()(),Ac(1466,`td`,18)(1467,`code`,24),vN(1468,`string`),ug()(),Ac(1469,`td`,21)(1470,`em`)(1471,`strong`),vN(1472,`(opcional)`),ug()(),Ac(1473,`p`),vN(1474,`Título da página.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var te=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,d){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return d.changeTab(`doc`)}),Kc(3,`sample-po-page-dynamic-edit-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return d.changeTab(`web`)}),Kc(5,`sample-po-page-dynamic-edit-basic-view`)(6,`sample-po-page-dynamic-edit-user-view`),ug()()()),o&2&&(cE(`p-actions`,d.actions),Hp(2),cE(`p-active`,d.activeTab===`doc`),Hp(2),cE(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[vze,tae,aae,L,O,_],encapsulation:2,changeDetection:1})}return a})()}];var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(te),kL]})}return a})();var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,U]})}return a})();export{fe as DocPoPageDynamicEditModule};