import{Br as TN,Et as V8e,Ii as ht,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,da as uo,ga as w,i as La,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,ui as Zl,vt as SCe}from"./main-NT5YGKBQ.js";var V=()=>({property:`id`,label:`User ID`});var G=a=>[a];var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,d){o&1&&ql(0,`po-page-dynamic-edit`,0),o&2&&cw(`p-fields`,MN(2,G,TN(1,V)))},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a});var L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Dynamic Edit Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return d.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-dynamic-edit-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+d.sampleCodeButtonIcon),Up(),gg(` `,d.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,W,d.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,B],encapsulation:2,changeDetection:1})}return a})();var J=[`dynamicEdit`];var j=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,d){if(o&1&&Zl(J,7),o&2){let u;lo(u=uo())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,d){o&1&&ql(0,`po-page-dynamic-edit`,1,0),o&2&&cw(`p-auto-router`,!0)(`p-actions`,d.actions)(`p-breadcrumb`,d.breadcrumb)(`p-fields`,d.fields)(`p-literals`,d.literals)(`p-service-api`,d.serviceApi)},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a});var O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Dynamic Edit - User`),lg(),Ml(4,`a`,2),ht(`click`,function(){return d.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-dynamic-edit
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-dynamic-edit-user`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+d.sampleCodeButtonIcon),Up(),gg(` `,d.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Z,d.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,d){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do template do po-page-dynamic-detail.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoPageDynamicEditComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O `),Ml(15,`code`),mN(16,`po-page-dynamic-edit`),lg(),mN(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),lg(),Ml(18,`h3`),mN(19,`Utilização via rota`),lg(),Ml(20,`p`),mN(21,`Ao utilizar as rotas para inicializar o template, o `),Ml(22,`code`),mN(23,`page-dynamic-edit`),lg(),mN(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),lg(),Ml(25,`p`),mN(26,`Exemplo de utilização:`),lg(),Ml(27,`p`),mN(28,`Arquivo de configuração de rotas da aplicação: `),Ml(29,`code`),mN(30,`app-routing.module.ts`),lg()(),Ml(31,`pre`)(32,`code`),mN(33,`const routes: Routes = [
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
`),lg()(),Ml(34,`p`),mN(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),lg(),Ml(36,`p`),mN(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),lg(),Ml(38,`blockquote`)(39,`p`),mN(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),lg()(),Ml(41,`p`),mN(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),Ml(43,`code`),mN(44,`id`),lg(),mN(45,`:`),lg(),Ml(46,`pre`)(47,`code`),mN(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),lg()(),Ml(49,`p`),mN(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),lg(),Ml(51,`p`),mN(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Ml(53,`a`,6),mN(54,`PoPageDynamicEditMetadata`),lg(),mN(55,`. Por exemplo:`),lg(),Ml(56,`pre`)(57,`code`),mN(58,` {
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
`),lg()(),Ml(59,`blockquote`)(60,`p`),mN(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),Ml(62,`code`),mN(63,`serviceApi`),lg(),mN(64,` da seguinte forma:`),lg()(),Ml(65,`pre`)(66,`code`),mN(67,`GET {end-point}/metadata?type=edit&version={version}
`),lg()(),Ml(68,`h4`),mN(69,`Tokens customizáveis`),lg(),Ml(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),mN(74,`Propriedade`),lg(),Ml(75,`th`),mN(76,`Descrição`),lg(),Ml(77,`th`),mN(78,`Valor Padrão`),lg()()(),Ml(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),mN(83,`Header`),lg()(),ql(84,`td`)(85,`td`),lg(),Ml(86,`tr`)(87,`td`)(88,`code`),mN(89,`--padding`),lg()(),Ml(90,`td`),mN(91,`Espaçamento do header`),lg(),Ml(92,`td`)(93,`code`),mN(94,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(95,`tr`)(96,`td`)(97,`code`),mN(98,`--gap`),lg()(),Ml(99,`td`),mN(100,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(101,`td`)(102,`code`),mN(103,`var(--spacing-md)`),lg()()(),Ml(104,`tr`)(105,`td`)(106,`code`),mN(107,`--gap-actions`),lg()(),Ml(108,`td`),mN(109,`Espaçamento entre as ações`),lg(),Ml(110,`td`)(111,`code`),mN(112,`var(--spacing-xs)`),lg()()(),Ml(113,`tr`)(114,`td`)(115,`code`),mN(116,`--font-family`),lg()(),Ml(117,`td`),mN(118,`Família tipográfica do título`),lg(),Ml(119,`td`)(120,`code`),mN(121,`var(--font-family-theme)`),lg()()(),Ml(122,`tr`)(123,`td`)(124,`strong`),mN(125,`Content`),lg()(),ql(126,`td`)(127,`td`),lg(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--padding-content`),lg()(),Ml(132,`td`),mN(133,`Espaçamento do conteúdo`),lg(),Ml(134,`td`)(135,`code`),mN(136,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(137,`div`,7)(138,`h4`,8),mN(139,`Seletor`),lg(),Ml(140,`pre`,9),mN(141,`<po-page-dynamic-edit
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
`),lg()(),Ml(142,`h4`,10),mN(143,`Propriedades`),lg(),Ml(144,`table`,11)(145,`tr`,12)(146,`th`,13),mN(147,`Nome`),lg(),Ml(148,`th`,13),mN(149,`Tipo`),lg(),Ml(150,`th`,13),mN(151,`Padrão`),lg(),Ml(152,`th`,13),mN(153,`Descrição`),lg()(),Ml(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),mN(158,` p-actions`),ql(159,`br`),lg()()(),Ml(160,`td`,18)(161,`code`,19),mN(162,`PoPageDynamicEditActions`),lg()(),Ml(163,`td`,20),mN(164,`-`),lg(),Ml(165,`td`,21)(166,`em`)(167,`strong`),mN(168,`(opcional)`),lg()(),Ml(169,`p`),mN(170,`Ações da página.`),lg()()(),Ml(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),mN(175,` p-auto-router`),ql(176,`br`),lg()()(),Ml(177,`td`,18)(178,`code`,22),mN(179,`boolean`),lg()(),Ml(180,`td`,20)(181,`p`),mN(182,`false`),lg()(),Ml(183,`td`,21)(184,`em`)(185,`strong`),mN(186,`(opcional)`),lg()(),Ml(187,`p`),mN(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),lg(),Ml(189,`blockquote`)(190,`p`),mN(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),Ml(192,`code`),mN(193,`**`),lg(),mN(194,`) especificada.`),lg()()()(),Ml(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),mN(199,` p-breadcrumb`),ql(200,`br`),lg()()(),Ml(201,`td`,18)(202,`code`,23),mN(203,`PoBreadcrumb`),lg()(),Ml(204,`td`,20),mN(205,`-`),lg(),Ml(206,`td`,21)(207,`em`)(208,`strong`),mN(209,`(opcional)`),lg()(),Ml(210,`p`),mN(211,`Objeto com propriedades do breadcrumb.`),lg()()(),Ml(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),mN(216,` p-components-size`),ql(217,`br`),lg()()(),Ml(218,`td`,18)(219,`code`,24),mN(220,`string`),lg()(),Ml(221,`td`,20)(222,`p`)(223,`code`),mN(224,`medium`),lg()()(),Ml(225,`td`,21)(226,`em`)(227,`strong`),mN(228,`(opcional)`),lg()(),Ml(229,`p`),mN(230,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(231,`ul`)(232,`li`)(233,`code`),mN(234,`small`),lg(),mN(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(236,`li`)(237,`code`),mN(238,`medium`),lg(),mN(239,`: aplica a medida medium de cada componente.`),lg()(),Ml(240,`blockquote`)(241,`p`),mN(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(243,`code`),mN(244,`medium`),lg(),mN(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(246,`a`,25),mN(247,`po-theme`),lg(),mN(248,`.`),lg()()()(),Ml(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),mN(253,` p-fields`),ql(254,`br`),lg()()(),Ml(255,`td`,18)(256,`code`,26),mN(257,`Array<PoPageDynamicEditField>`),lg()(),Ml(258,`td`,20),mN(259,`-`),lg(),Ml(260,`td`,21)(261,`p`),mN(262,`Lista dos campos usados na tabela e busca avançada.`),lg()()(),Ml(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),mN(267,` p-literals`),ql(268,`br`),lg()()(),Ml(269,`td`,18)(270,`code`,27),mN(271,`PoPageDynamicEditLiterals`),lg()(),Ml(272,`td`,20),mN(273,`-`),lg(),Ml(274,`td`,21)(275,`em`)(276,`strong`),mN(277,`(opcional)`),lg()(),Ml(278,`p`),mN(279,`Objeto com as literais usadas no `),Ml(280,`code`),mN(281,`po-page-dynamic-edit`),lg(),mN(282,`.`),lg(),Ml(283,`p`),mN(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),lg(),Ml(285,`pre`)(286,`code`),mN(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),lg()(),Ml(288,`p`),mN(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(290,`pre`)(291,`code`),mN(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),lg()(),Ml(293,`blockquote`)(294,`p`),mN(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ml(296,`a`,28)(297,`code`),mN(298,`PoI18nService`),lg()(),mN(299,` ou `),Ml(300,`em`),mN(301,`browser`),lg(),mN(302,`.`),lg()()()(),Ml(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),mN(307,` p-notification-type`),ql(308,`br`),lg()()(),Ml(309,`td`,18)(310,`code`,24),mN(311,`string`),lg()(),Ml(312,`td`,20)(313,`p`),mN(314,`warning`),lg()(),Ml(315,`td`,21)(316,`em`)(317,`strong`),mN(318,`(opcional)`),lg()(),Ml(319,`p`),mN(320,`Tipo da notificação.`),lg(),Ml(321,`p`),mN(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),lg(),Ml(323,`pre`)(324,`code`),mN(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),lg()(),Ml(326,`blockquote`)(327,`p`),mN(328,`Os valores aceitos são 'warning' e 'error'.`),lg()()()(),Ml(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),mN(333,` p-load`),ql(334,`br`),lg()()(),Ml(335,`td`,18)(336,`code`,24),mN(337,`string `),lg(),Ml(338,`code`,29),mN(339,` (() => PoPageDynamicEditOptions)`),lg()(),Ml(340,`td`,20),mN(341,`-`),lg(),Ml(342,`td`,21)(343,`p`),mN(344,`Função ou serviço que será executado na inicialização do componente.`),lg(),Ml(345,`p`),mN(346,`A propriedade aceita os seguintes tipos:`),lg(),Ml(347,`ul`)(348,`li`)(349,`code`),mN(350,`string`),lg(),mN(351,`: `),Ml(352,`em`),mN(353,`Endpoint`),lg(),mN(354,` usado pelo componente para requisição via `),Ml(355,`code`),mN(356,`POST`),lg(),mN(357,`.`),lg(),Ml(358,`li`)(359,`code`),mN(360,`function`),lg(),mN(361,`: Método que será executado.`),lg()(),Ml(362,`p`),mN(363,`O retorno desta função deve ser do tipo `),Ml(364,`code`),mN(365,`PoPageDynamicEditOptions`),lg(),mN(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),lg(),Ml(367,`p`),mN(368,`Por exemplo:`),lg(),Ml(369,`pre`)(370,`code`),mN(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),lg()(),Ml(372,`p`),mN(373,`Para referenciar a sua função utilize a propriedade `),Ml(374,`code`),mN(375,`bind`),lg(),mN(376,`, por exemplo:`),lg(),Ml(377,`pre`)(378,`code`),mN(379,`[p-load]="onLoadOptions.bind(this)"
`),lg()()()(),Ml(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),mN(384,` p-load-data`),ql(385,`br`),lg()()(),Ml(386,`td`,18)(387,`code`,30),mN(388,`unknown`),lg()(),Ml(389,`td`,20),mN(390,`-`),lg(),Ml(391,`td`,21)(392,`em`)(393,`strong`),mN(394,`(opcional)`),lg()(),Ml(395,`p`),mN(396,`Função que será executada após ser realizada a busca dos dados.`),lg(),Ml(397,`p`),mN(398,`A propriedade aceita os seguintes tipos:`),lg(),Ml(399,`ul`)(400,`li`)(401,`code`),mN(402,`function`),lg(),mN(403,`: Método que será executado.`),lg()(),Ml(404,`p`),mN(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),lg(),Ml(406,`p`),mN(407,`Por exemplo:`),lg(),Ml(408,`pre`)(409,`code`),mN(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),lg()(),Ml(411,`p`),mN(412,`Para referenciar a sua função utilize a propriedade `),Ml(413,`code`),mN(414,`bind`),lg(),mN(415,`, por exemplo:`),lg(),Ml(416,`pre`)(417,`code`),mN(418,`[p-load-data]="onLoadCustom.bind(this)"
`),lg()()()(),Ml(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),mN(423,` p-service-api`),ql(424,`br`),lg()()(),Ml(425,`td`,18)(426,`code`,24),mN(427,`string`),lg()(),Ml(428,`td`,20),mN(429,`-`),lg(),Ml(430,`td`,21)(431,`p`),mN(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),lg(),Ml(433,`p`),mN(434,`Para as ações de `),Ml(435,`code`),mN(436,`save`),lg(),mN(437,` e `),Ml(438,`code`),mN(439,`saveNew`),lg(),mN(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),lg(),Ml(441,`blockquote`)(442,`p`)(443,`code`),mN(444,`POST {end-point}`),lg()()(),Ml(445,`pre`)(446,`code`),mN(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),lg()(),Ml(448,`p`),mN(449,`Resquisição disparada, onde a propriedade `),Ml(450,`code`),mN(451,`name`),lg(),mN(452,` e `),Ml(453,`code`),mN(454,`city`),lg(),mN(455,` foram preenchidas:`),lg(),Ml(456,`pre`)(457,`code`),mN(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),lg()(),Ml(459,`p`),mN(460,`Request payload:`),lg(),Ml(461,`pre`)(462,`code`),mN(463,`{ "name": "Fulano", "city": "Smallville" }
`),lg()(),Ml(464,`p`),mN(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),Ml(466,`code`),mN(467,`id`),lg(),mN(468,`.`),lg(),Ml(469,`p`),mN(470,`Exemplo de configuração de rota:`),lg(),Ml(471,`pre`)(472,`code`),mN(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),lg()(),Ml(474,`p`),mN(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),lg(),Ml(476,`blockquote`)(477,`p`)(478,`code`),mN(479,`GET {end-point}/{id}`),lg()()(),Ml(480,`p`),mN(481,`Nos métodos de `),Ml(482,`code`),mN(483,`save`),lg(),mN(484,` e `),Ml(485,`code`),mN(486,`saveNew`),lg(),mN(487,`, ao invés de um `),Ml(488,`code`),mN(489,`POST`),lg(),mN(490,`, será disparado um `),Ml(491,`code`),mN(492,`PUT`),lg(),mN(493,`.`),lg(),Ml(494,`p`),mN(495,`Resquisição disparada, onde a propriedade `),Ml(496,`code`),mN(497,`name`),lg(),mN(498,` e `),Ml(499,`code`),mN(500,`city`),lg(),mN(501,` foram preenchidas / atualizadas, e o `),Ml(502,`code`),mN(503,`id`),lg(),mN(504,` da url é 2:`),lg(),Ml(505,`pre`)(506,`code`),mN(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),lg()(),Ml(508,`p`),mN(509,`Request payload:`),lg(),Ml(510,`pre`)(511,`code`),mN(512,`{ "name": "Fulano", "city": "Metropolis" }
`),lg()()()(),Ml(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),mN(517,` p-title`),ql(518,`br`),lg()()(),Ml(519,`td`,18)(520,`code`,24),mN(521,`string`),lg()(),Ml(522,`td`,20),mN(523,`-`),lg(),Ml(524,`td`,21)(525,`p`),mN(526,`Título da página.`),lg()()()(),Ml(527,`h3`,10),mN(528,`Métodos`),lg(),Ml(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),mN(535,` showAdditionalHelp `),lg()()()()(),Ml(536,`tr`,21)(537,`td`,21)(538,`p`),mN(539,`Método que exibe `),Ml(540,`code`),mN(541,`p-helper`),lg(),mN(542,` ou executa a ação definida em `),Ml(543,`code`),mN(544,`p-helper{eventOnClick}`),lg(),mN(545,` ou em `),Ml(546,`code`),mN(547,`p-additionalHelp`),lg(),mN(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(549,`code`),mN(550,`keydown`),lg(),mN(551,`.`),lg(),Ml(552,`pre`)(553,`code`),mN(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),lg()()()()(),Ml(555,`h5`)(556,`b`),mN(557,`Parâmetros`),lg()(),Ml(558,`table`,11)(559,`tr`,12)(560,`th`,13),mN(561,`Nome`),lg(),Ml(562,`th`,13),mN(563,`Tipo`),lg(),Ml(564,`th`,13),mN(565,`Descrição`),lg()(),Ml(566,`tr`,14)(567,`td`,15),mN(568,` property`),lg(),Ml(569,`td`,18)(570,`code`,33),mN(571,` string `),lg()(),Ml(572,`td`,21)(573,`p`),mN(574,`Identificador da coluna.`),lg()()()(),ql(575,`br`),Ml(576,`h3`),mN(577,`Interfaces`),lg(),Ml(578,`h4`,34)(579,`code`,5),mN(580,`PoPageDynamicEditActions`),lg()(),Ml(581,`div`,2)(582,`p`),mN(583,`Interface para as ações do componente po-page-dynamic-edit.`),lg()(),Ml(584,`h4`,10),mN(585,`Propriedades`),lg(),Ml(586,`table`,11)(587,`tr`,12)(588,`th`,13),mN(589,`Nome`),lg(),Ml(590,`th`,13),mN(591,`Tipo`),lg(),Ml(592,`th`,13),mN(593,`Descrição`),lg()(),Ml(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),mN(598,` beforeCancel`),ql(599,`br`),lg()()(),Ml(600,`td`,18)(601,`code`,24),mN(602,`string `),lg(),Ml(603,`code`,35),mN(604,` (() => PoPageDynamicEditBeforeCancel)`),lg()(),Ml(605,`td`,21)(606,`em`)(607,`strong`),mN(608,`(opcional)`),lg()(),Ml(609,`p`),mN(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),lg(),Ml(611,`p`),mN(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ml(613,`code`),mN(614,`PoPageDynamicEditBeforeCancel`),lg(),mN(615,`.`),lg(),Ml(616,`blockquote`)(617,`p`),mN(618,`A url será chamada via POST`),lg()(),Ml(619,`p`),mN(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ml(621,`strong`),mN(622,`beforeCancel`),lg(),mN(623,`
ou definir a mensagem no atributo `),Ml(624,`code`),mN(625,`_messages`),lg(),mN(626,` na resposta da API conforme definido
em `),Ml(627,`a`,36),mN(628,`Guia de implementação de APIs`),lg()()()(),Ml(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),mN(633,` beforeSave`),ql(634,`br`),lg()()(),Ml(635,`td`,18)(636,`code`,24),mN(637,`string `),lg(),Ml(638,`code`,37),mN(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),lg()(),Ml(640,`td`,21)(641,`em`)(642,`strong`),mN(643,`(opcional)`),lg()(),Ml(644,`p`),mN(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),lg(),Ml(646,`p`),mN(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ml(648,`code`),mN(649,`PoPageDynamicEditBeforeSave`),lg(),mN(650,`.`),lg(),Ml(651,`blockquote`)(652,`p`),mN(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Ml(654,`code`),mN(655,`POST {beforeSave}/{key}`),lg(),mN(656,`.`),lg()(),Ml(657,`p`),mN(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ml(659,`strong`),mN(660,`beforeSave`),lg(),mN(661,`
ou definir a mensagem no atributo `),Ml(662,`code`),mN(663,`_messages`),lg(),mN(664,` na resposta da API conforme definido
em `),Ml(665,`a`,36),mN(666,`Guia de implementação de APIs`),lg()()()(),Ml(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),mN(671,` beforeSaveNew`),ql(672,`br`),lg()()(),Ml(673,`td`,18)(674,`code`,24),mN(675,`string `),lg(),Ml(676,`code`,38),mN(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),lg()(),Ml(678,`td`,21)(679,`em`)(680,`strong`),mN(681,`(opcional)`),lg()(),Ml(682,`p`),mN(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),lg(),Ml(684,`p`),mN(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Ml(686,`code`),mN(687,`PoPageDynamicEditBeforeSaveNew`),lg(),mN(688,`.`),lg(),Ml(689,`blockquote`)(690,`p`),mN(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Ml(692,`code`),mN(693,`POST {beforeSave}/{key}`),lg(),mN(694,`.`),lg()(),Ml(695,`p`),mN(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Ml(697,`strong`),mN(698,`beforeSaveNew`),lg(),mN(699,`
ou definir a mensagem no atributo `),Ml(700,`code`),mN(701,`_messages`),lg(),mN(702,` na resposta da API conforme definido
em `),Ml(703,`a`,36),mN(704,`Guia de implementação de APIs`),lg()()()(),Ml(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),mN(709,` cancel`),ql(710,`br`),lg()()(),Ml(711,`td`,18)(712,`code`,24),mN(713,`string `),lg(),Ml(714,`code`,22),mN(715,` boolean `),lg(),Ml(716,`code`,39),mN(717,` Function`),lg()(),Ml(718,`td`,21)(719,`em`)(720,`strong`),mN(721,`(opcional)`),lg()(),Ml(722,`p`),mN(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),Ml(724,`code`),mN(725,`navigator.back()`),lg(),mN(726,`.`),lg(),Ml(727,`blockquote`)(728,`p`),mN(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),lg()(),Ml(730,`blockquote`)(731,`p`),mN(732,`Caso queira esconder a ação deve ser passado o valor `),Ml(733,`code`),mN(734,`false`),lg(),mN(735,`;`),lg()(),Ml(736,`pre`)(737,`code`),mN(738,`actions = {
  cancel: '/'
};
`),lg()()()(),Ml(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),mN(743,` save`),ql(744,`br`),lg()()(),Ml(745,`td`,18)(746,`code`,24),mN(747,`string `),lg(),Ml(748,`code`,40),mN(749,` ((resource: any, id: string) => void)`),lg()(),Ml(750,`td`,21)(751,`em`)(752,`strong`),mN(753,`(opcional)`),lg()(),Ml(754,`p`),mN(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),lg(),Ml(756,`p`),mN(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),lg(),Ml(758,`blockquote`)(759,`p`),mN(760,`A rota pode conter um parâmetro chamando id.`),lg()(),Ml(761,`pre`)(762,`code`),mN(763,`actions = {
  save: 'detail/:id'
};
`),lg()(),Ml(764,`p`),mN(765,`Se for passado um método:`),lg(),Ml(766,`ul`)(767,`li`),mN(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),Ml(769,`code`),mN(770,`{ email: 'example@email.com' }`),lg(),mN(771,`.`),lg(),Ml(772,`li`),mN(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),lg()()()(),Ml(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),mN(778,` saveNew`),ql(779,`br`),lg()()(),Ml(780,`td`,18)(781,`code`,24),mN(782,`string `),lg(),Ml(783,`code`,41),mN(784,` ((resource: any, id?: string) => void)`),lg()(),Ml(785,`td`,21)(786,`em`)(787,`strong`),mN(788,`(opcional)`),lg()(),Ml(789,`p`),mN(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),lg(),Ml(791,`p`),mN(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),lg(),Ml(793,`blockquote`)(794,`p`),mN(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),lg()(),Ml(796,`pre`)(797,`code`),mN(798,`actions = {
  saveNew: 'new'
};
`),lg()(),Ml(799,`p`),mN(800,`A rota pode conter um parâmetro id.`),lg(),Ml(801,`pre`)(802,`code`),mN(803,`actions = {
  saveNew: 'edit/:id'
};
`),lg()(),Ml(804,`p`),mN(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),lg()()()(),Ml(806,`h4`,34)(807,`code`,5),mN(808,`PoPageDynamicEditBeforeCancel`),lg()(),Ml(809,`div`,2)(810,`p`),mN(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ml(812,`code`),mN(813,`beforeCancel`),lg(),mN(814,`.`),lg()(),Ml(815,`h4`,10),mN(816,`Propriedades`),lg(),Ml(817,`table`,11)(818,`tr`,12)(819,`th`,13),mN(820,`Nome`),lg(),Ml(821,`th`,13),mN(822,`Tipo`),lg(),Ml(823,`th`,13),mN(824,`Descrição`),lg()(),Ml(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),mN(829,` allowAction`),ql(830,`br`),lg()()(),Ml(831,`td`,18)(832,`code`,22),mN(833,`boolean`),lg()(),Ml(834,`td`,21)(835,`em`)(836,`strong`),mN(837,`(opcional)`),lg()(),Ml(838,`p`),mN(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),lg()()(),Ml(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),mN(844,` newUrl`),ql(845,`br`),lg()()(),Ml(846,`td`,18)(847,`code`,24),mN(848,`string`),lg()(),Ml(849,`td`,21)(850,`em`)(851,`strong`),mN(852,`(opcional)`),lg()(),Ml(853,`p`),mN(854,`Nova rota para navegação que substituirá a definida anteriormente em `),Ml(855,`code`),mN(856,`cancel`),lg(),mN(857,`.`),lg()()()(),Ml(858,`h4`,34)(859,`code`,5),mN(860,`PoPageDynamicEditBeforeSaveNew`),lg()(),Ml(861,`div`,2)(862,`p`),mN(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ml(864,`code`),mN(865,`beforeSaveNew`),lg(),mN(866,`.`),lg()(),Ml(867,`h4`,10),mN(868,`Propriedades`),lg(),Ml(869,`table`,11)(870,`tr`,12)(871,`th`,13),mN(872,`Nome`),lg(),Ml(873,`th`,13),mN(874,`Tipo`),lg(),Ml(875,`th`,13),mN(876,`Descrição`),lg()(),Ml(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),mN(881,` allowAction`),ql(882,`br`),lg()()(),Ml(883,`td`,18)(884,`code`,22),mN(885,`boolean`),lg()(),Ml(886,`td`,21)(887,`em`)(888,`strong`),mN(889,`(opcional)`),lg()(),Ml(890,`p`),mN(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),lg()()(),Ml(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),mN(896,` newUrl`),ql(897,`br`),lg()()(),Ml(898,`td`,18)(899,`code`,24),mN(900,`string`),lg()(),Ml(901,`td`,21)(902,`em`)(903,`strong`),mN(904,`(opcional)`),lg()(),Ml(905,`p`),mN(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),Ml(907,`code`),mN(908,`saveNew`),lg(),mN(909,`.`),lg()()(),Ml(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),mN(914,` resource`),ql(915,`br`),lg()()(),Ml(916,`td`,18)(917,`code`,42),mN(918,`any`),lg()(),Ml(919,`td`,21)(920,`em`)(921,`strong`),mN(922,`(opcional)`),lg()(),Ml(923,`p`),mN(924,`Recurso atualizado.`),lg(),Ml(925,`p`),mN(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Ml(927,`code`),mN(928,`key: true`),lg(),mN(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),lg(),Ml(930,`ul`)(931,`li`)(932,`p`),mN(933,`recurso anterior com a propriedade id foi que definida como `),Ml(934,`em`),mN(935,`key`),lg(),mN(936,`:`),lg(),Ml(937,`pre`)(938,`code`),mN(939,`{ id: 1, name: 'Ane' }
`),lg()()(),Ml(940,`li`)(941,`p`),mN(942,`recurso retornado no `),Ml(943,`code`),mN(944,`beforeSaveNew`),lg(),mN(945,`:`),lg(),Ml(946,`pre`)(947,`code`),mN(948,`{ id: 50, age: 23 }
`),lg()()(),Ml(949,`li`)(950,`p`),mN(951,`Mesclagem do recurso:`),lg(),Ml(952,`pre`)(953,`code`),mN(954,`{ id: 1, name: 'Ane', age: 23 }
`),lg()()()(),Ml(955,`blockquote`)(956,`p`),mN(957,`Caso `),Ml(958,`code`),mN(959,`allowAction`),lg(),mN(960,` seja `),Ml(961,`code`),mN(962,`false`),lg(),mN(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),lg()()()()(),Ml(964,`h4`,34)(965,`code`,5),mN(966,`PoPageDynamicEditBeforeSave`),lg()(),Ml(967,`div`,2)(968,`p`),mN(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Ml(970,`code`),mN(971,`beforeSave`),lg(),mN(972,`.`),lg()(),Ml(973,`h4`,10),mN(974,`Propriedades`),lg(),Ml(975,`table`,11)(976,`tr`,12)(977,`th`,13),mN(978,`Nome`),lg(),Ml(979,`th`,13),mN(980,`Tipo`),lg(),Ml(981,`th`,13),mN(982,`Descrição`),lg()(),Ml(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),mN(987,` allowAction`),ql(988,`br`),lg()()(),Ml(989,`td`,18)(990,`code`,22),mN(991,`boolean`),lg()(),Ml(992,`td`,21)(993,`em`)(994,`strong`),mN(995,`(opcional)`),lg()(),Ml(996,`p`),mN(997,`Define se deve ou não executar a ação salvar (save).`),lg()()(),Ml(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),mN(1002,` newUrl`),ql(1003,`br`),lg()()(),Ml(1004,`td`,18)(1005,`code`,24),mN(1006,`string`),lg()(),Ml(1007,`td`,21)(1008,`em`)(1009,`strong`),mN(1010,`(opcional)`),lg()(),Ml(1011,`p`),mN(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),Ml(1013,`code`),mN(1014,`save`),lg(),mN(1015,`.`),lg()()(),Ml(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),mN(1020,` resource`),ql(1021,`br`),lg()()(),Ml(1022,`td`,18)(1023,`code`,42),mN(1024,`any`),lg()(),Ml(1025,`td`,21)(1026,`em`)(1027,`strong`),mN(1028,`(opcional)`),lg()(),Ml(1029,`p`),mN(1030,`Recurso atualizado.`),lg(),Ml(1031,`p`),mN(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),lg(),Ml(1033,`ul`)(1034,`li`)(1035,`p`),mN(1036,`recurso anterior:`),lg(),Ml(1037,`pre`)(1038,`code`),mN(1039,`{ name: 'Ane' }
`),lg()()(),Ml(1040,`li`)(1041,`p`),mN(1042,`recurso retornado no `),Ml(1043,`code`),mN(1044,`beforeSave`),lg(),mN(1045,`:`),lg(),Ml(1046,`pre`)(1047,`code`),mN(1048,`{ age: 23 }
`),lg()()(),Ml(1049,`li`)(1050,`p`),mN(1051,`Mesclagem do recurso:`),lg(),Ml(1052,`pre`)(1053,`code`),mN(1054,`{ name: 'Ane', age: 23 }
`),lg()()()(),Ml(1055,`blockquote`)(1056,`p`),mN(1057,`Caso `),Ml(1058,`code`),mN(1059,`allowAction`),lg(),mN(1060,` seja `),Ml(1061,`code`),mN(1062,`false`),lg(),mN(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),lg()()()()(),Ml(1064,`h4`,34)(1065,`code`,5),mN(1066,`PoPageDynamicEditField`),lg()(),Ml(1067,`div`,2)(1068,`p`),mN(1069,`Interface dos fields usados para compor o template `),Ml(1070,`code`),mN(1071,`po-page-dynamic-edit`),lg(),mN(1072,`.
Herda as defini\xE7\xF5es da interface
`),Ml(1073,`a`,43),mN(1074,`PoDynamicFormField`),lg(),mN(1075,`.`),lg()(),Ml(1076,`h4`,10),mN(1077,`Propriedades`),lg(),Ml(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),mN(1081,`Nome`),lg(),Ml(1082,`th`,13),mN(1083,`Tipo`),lg(),Ml(1084,`th`,13),mN(1085,`Descrição`),lg()(),Ml(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),mN(1090,` duplicate`),ql(1091,`br`),lg()()(),Ml(1092,`td`,18)(1093,`code`,22),mN(1094,`boolean`),lg()(),Ml(1095,`td`,21)(1096,`em`)(1097,`strong`),mN(1098,`(opcional)`),lg()(),Ml(1099,`p`),mN(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),lg()()()(),Ml(1101,`h4`,34)(1102,`code`,5),mN(1103,`PoPageDynamicEditLiterals`),lg()(),Ml(1104,`div`,2)(1105,`p`),mN(1106,`Interface para definição das literais usadas no `),Ml(1107,`code`),mN(1108,`po-page-dynamic-edit`),lg(),mN(1109,`.`),lg()(),Ml(1110,`h4`,10),mN(1111,`Propriedades`),lg(),Ml(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),mN(1115,`Nome`),lg(),Ml(1116,`th`,13),mN(1117,`Tipo`),lg(),Ml(1118,`th`,13),mN(1119,`Descrição`),lg()(),Ml(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),mN(1124,` cancelConfirmMessage`),ql(1125,`br`),lg()()(),Ml(1126,`td`,18)(1127,`code`,24),mN(1128,`string`),lg()(),Ml(1129,`td`,21)(1130,`em`)(1131,`strong`),mN(1132,`(opcional)`),lg()(),Ml(1133,`p`),mN(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),lg()()(),Ml(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),mN(1139,` detailActionNew`),ql(1140,`br`),lg()()(),Ml(1141,`td`,18)(1142,`code`,24),mN(1143,`string`),lg()(),Ml(1144,`td`,21)(1145,`em`)(1146,`strong`),mN(1147,`(opcional)`),lg()(),Ml(1148,`p`),mN(1149,`Rótulo exibido no botão `),Ml(1150,`code`),mN(1151,`Novo`),lg(),mN(1152,`.`),lg()()(),Ml(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),mN(1157,` pageActionCancel`),ql(1158,`br`),lg()()(),Ml(1159,`td`,18)(1160,`code`,24),mN(1161,`string`),lg()(),Ml(1162,`td`,21)(1163,`em`)(1164,`strong`),mN(1165,`(opcional)`),lg()(),Ml(1166,`p`),mN(1167,`Rótulo exibido no botão `),Ml(1168,`code`),mN(1169,`Cancelar`),lg(),mN(1170,`.`),lg()()(),Ml(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),mN(1175,` pageActionSave`),ql(1176,`br`),lg()()(),Ml(1177,`td`,18)(1178,`code`,24),mN(1179,`string`),lg()(),Ml(1180,`td`,21)(1181,`em`)(1182,`strong`),mN(1183,`(opcional)`),lg()(),Ml(1184,`p`),mN(1185,`Rótulo exibido no botão `),Ml(1186,`code`),mN(1187,`Salvar`),lg(),mN(1188,`.`),lg()()(),Ml(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),mN(1193,` pageActionSaveNew`),ql(1194,`br`),lg()()(),Ml(1195,`td`,18)(1196,`code`,24),mN(1197,`string`),lg()(),Ml(1198,`td`,21)(1199,`em`)(1200,`strong`),mN(1201,`(opcional)`),lg()(),Ml(1202,`p`),mN(1203,`Rótulo exibido no botão `),Ml(1204,`code`),mN(1205,`Salvar e novo`),lg(),mN(1206,`.`),lg()()(),Ml(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),mN(1211,` registerNotFound`),ql(1212,`br`),lg()()(),Ml(1213,`td`,18)(1214,`code`,24),mN(1215,`string`),lg()(),Ml(1216,`td`,21)(1217,`em`)(1218,`strong`),mN(1219,`(opcional)`),lg()(),Ml(1220,`p`),mN(1221,`Texto exibido para resgistro não encontrado.`),lg()()(),Ml(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),mN(1226,` saveNotificationError`),ql(1227,`br`),lg()()(),Ml(1228,`td`,18)(1229,`code`,24),mN(1230,`string`),lg()(),Ml(1231,`td`,21)(1232,`em`)(1233,`strong`),mN(1234,`(opcional)`),lg()(),Ml(1235,`p`),mN(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),lg()()(),Ml(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),mN(1241,` saveNotificationSuccessSave`),ql(1242,`br`),lg()()(),Ml(1243,`td`,18)(1244,`code`,24),mN(1245,`string`),lg()(),Ml(1246,`td`,21)(1247,`em`)(1248,`strong`),mN(1249,`(opcional)`),lg()(),Ml(1250,`p`),mN(1251,`Texto exibido para recurso salvo com sucesso.`),lg()()(),Ml(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),mN(1256,` saveNotificationSuccessUpdate`),ql(1257,`br`),lg()()(),Ml(1258,`td`,18)(1259,`code`,24),mN(1260,`string`),lg()(),Ml(1261,`td`,21)(1262,`em`)(1263,`strong`),mN(1264,`(opcional)`),lg()(),Ml(1265,`p`),mN(1266,`Texto exibido para recurso atualizado com sucesso.`),lg()()(),Ml(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),mN(1271,` saveNotificationWarning`),ql(1272,`br`),lg()()(),Ml(1273,`td`,18)(1274,`code`,24),mN(1275,`string`),lg()(),Ml(1276,`td`,21)(1277,`em`)(1278,`strong`),mN(1279,`(opcional)`),lg()(),Ml(1280,`p`),mN(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),lg()()()(),Ml(1282,`h4`,34)(1283,`code`,5),mN(1284,`PoPageDynamicEditMetadata`),lg()(),Ml(1285,`div`,2)(1286,`p`),mN(1287,`Interface para as propriedades de uma página dinâmica. `),ql(1288,`a`,44),lg()(),Ml(1289,`h4`,10),mN(1290,`Propriedades`),lg(),Ml(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),mN(1294,`Nome`),lg(),Ml(1295,`th`,13),mN(1296,`Tipo`),lg(),Ml(1297,`th`,13),mN(1298,`Descrição`),lg()(),Ml(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),mN(1303,` actions`),ql(1304,`br`),lg()()(),Ml(1305,`td`,18)(1306,`code`,19),mN(1307,`PoPageDynamicEditActions`),lg()(),Ml(1308,`td`,21)(1309,`em`)(1310,`strong`),mN(1311,`(opcional)`),lg()(),Ml(1312,`p`),mN(1313,`Ações que o usuário poderá executar na página através de botões.`),lg()()(),Ml(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),mN(1318,` autoRouter`),ql(1319,`br`),lg()()(),Ml(1320,`td`,18)(1321,`code`,22),mN(1322,`boolean`),lg()(),Ml(1323,`td`,21)(1324,`em`)(1325,`strong`),mN(1326,`(opcional)`),lg()(),Ml(1327,`p`),mN(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),Ml(1329,`code`),mN(1330,`p-actions`),lg()(),Ml(1331,`p`),mN(1332,`As rotas criadas serão baseadas na propriedade `),Ml(1333,`code`),mN(1334,`p-actions`),lg(),mN(1335,`.`),lg(),Ml(1336,`blockquote`)(1337,`p`),mN(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),Ml(1339,`code`),mN(1340,`**`),lg(),mN(1341,`) especificada.`),lg()()()(),Ml(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),mN(1346,` breadcrumb`),ql(1347,`br`),lg()()(),Ml(1348,`td`,18)(1349,`code`,23),mN(1350,`PoBreadcrumb`),lg()(),Ml(1351,`td`,21)(1352,`em`)(1353,`strong`),mN(1354,`(opcional)`),lg()(),Ml(1355,`p`),mN(1356,`Objeto com propriedades do breadcrumb.`),lg()()(),Ml(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),mN(1361,` fields`),ql(1362,`br`),lg()()(),Ml(1363,`td`,18)(1364,`code`,26),mN(1365,`Array<PoPageDynamicEditField>`),lg()(),Ml(1366,`td`,21)(1367,`em`)(1368,`strong`),mN(1369,`(opcional)`),lg()(),Ml(1370,`p`),mN(1371,`Lista dos campos usados.`),lg()()(),Ml(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),mN(1376,` title`),ql(1377,`br`),lg()()(),Ml(1378,`td`,18)(1379,`code`,24),mN(1380,`string`),lg()(),Ml(1381,`td`,21)(1382,`em`)(1383,`strong`),mN(1384,`(opcional)`),lg()(),Ml(1385,`p`),mN(1386,`Título da página.`),lg()()(),Ml(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),mN(1391,` version`),ql(1392,`br`),lg()()(),Ml(1393,`td`,18)(1394,`code`,45),mN(1395,`number`),lg()(),Ml(1396,`td`,21)(1397,`p`),mN(1398,`Versão do metadado devolvido pelo backend.`),lg()()()(),Ml(1399,`h4`,34)(1400,`code`,5),mN(1401,`PoPageDynamicEditOptions`),lg()(),Ml(1402,`div`,2)(1403,`p`),mN(1404,`Interface para as propriedades de uma página dinâmica.`),lg()(),Ml(1405,`h4`,10),mN(1406,`Propriedades`),lg(),Ml(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),mN(1410,`Nome`),lg(),Ml(1411,`th`,13),mN(1412,`Tipo`),lg(),Ml(1413,`th`,13),mN(1414,`Descrição`),lg()(),Ml(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),mN(1419,` actions`),ql(1420,`br`),lg()()(),Ml(1421,`td`,18)(1422,`code`,19),mN(1423,`PoPageDynamicEditActions`),lg()(),Ml(1424,`td`,21)(1425,`em`)(1426,`strong`),mN(1427,`(opcional)`),lg()(),Ml(1428,`p`),mN(1429,`Ações que o usuário poderá executar na página através de botões.`),lg()()(),Ml(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),mN(1434,` breadcrumb`),ql(1435,`br`),lg()()(),Ml(1436,`td`,18)(1437,`code`,23),mN(1438,`PoBreadcrumb`),lg()(),Ml(1439,`td`,21)(1440,`em`)(1441,`strong`),mN(1442,`(opcional)`),lg()(),Ml(1443,`p`),mN(1444,`Objeto com propriedades do breadcrumb.`),lg()()(),Ml(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),mN(1449,` fields`),ql(1450,`br`),lg()()(),Ml(1451,`td`,18)(1452,`code`,26),mN(1453,`Array<PoPageDynamicEditField>`),lg()(),Ml(1454,`td`,21)(1455,`em`)(1456,`strong`),mN(1457,`(opcional)`),lg()(),Ml(1458,`p`),mN(1459,`Lista dos campos usados.`),lg()()(),Ml(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),mN(1464,` title`),ql(1465,`br`),lg()()(),Ml(1466,`td`,18)(1467,`code`,24),mN(1468,`string`),lg()(),Ml(1469,`td`,21)(1470,`em`)(1471,`strong`),mN(1472,`(opcional)`),lg()(),Ml(1473,`p`),mN(1474,`Título da página.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var te=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,d){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return d.changeTab(`doc`)}),ql(3,`sample-po-page-dynamic-edit-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return d.changeTab(`web`)}),ql(5,`sample-po-page-dynamic-edit-basic-view`)(6,`sample-po-page-dynamic-edit-user-view`),lg()()()),o&2&&(cw(`p-actions`,d.actions),Up(2),cw(`p-active`,d.activeTab===`doc`),Up(2),cw(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[V8e,SCe,ECe,L,O,_],encapsulation:2,changeDetection:1})}return a})()}];var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(te),NL]})}return a})();var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,U]})}return a})();export{fe as DocPoPageDynamicEditModule};