import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Ii as hg,Ki as lo,Li as ht,Nr as PO,Qn as DN,Qr as Xx,Xi as nw,Xr as Xn,Yn as Cn,ai as _N,ei as Yl,fi as ag,gi as bL,i as La,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var V=()=>({property:`id`,label:`User ID`});var G=a=>[a];var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,d){o&1&&Gl(0,`po-page-dynamic-edit`,0),o&2&&nw(`p-fields`,DN(2,G,_N(1,V)))},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a});var L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Dynamic Edit Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return d.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-dynamic-edit-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+d.sampleCodeButtonIcon),jp(),hg(` `,d.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,W,d.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,B],encapsulation:2,changeDetection:1})}return a})();var J=[`dynamicEdit`];var j=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,d){if(o&1&&Yl(J,7),o&2){let u;lo(u=uo())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,d){o&1&&Gl(0,`po-page-dynamic-edit`,1,0),o&2&&nw(`p-auto-router`,!0)(`p-actions`,d.actions)(`p-breadcrumb`,d.breadcrumb)(`p-fields`,d.fields)(`p-literals`,d.literals)(`p-service-api`,d.serviceApi)},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a});var O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Dynamic Edit - User`),ag(),Tl(4,`a`,2),ht(`click`,function(){return d.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-dynamic-edit
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-dynamic-edit-user`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+d.sampleCodeButtonIcon),jp(),hg(` `,d.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Z,d.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,d){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do template do po-page-dynamic-detail.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPageDynamicEditComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O `),Tl(15,`code`),cN(16,`po-page-dynamic-edit`),ag(),cN(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),ag(),Tl(18,`h3`),cN(19,`Utilização via rota`),ag(),Tl(20,`p`),cN(21,`Ao utilizar as rotas para inicializar o template, o `),Tl(22,`code`),cN(23,`page-dynamic-edit`),ag(),cN(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),ag(),Tl(25,`p`),cN(26,`Exemplo de utilização:`),ag(),Tl(27,`p`),cN(28,`Arquivo de configuração de rotas da aplicação: `),Tl(29,`code`),cN(30,`app-routing.module.ts`),ag()(),Tl(31,`pre`)(32,`code`),cN(33,`const routes: Routes = [
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
`),ag()(),Tl(34,`p`),cN(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),ag(),Tl(36,`p`),cN(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ag(),Tl(38,`blockquote`)(39,`p`),cN(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),ag()(),Tl(41,`p`),cN(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),Tl(43,`code`),cN(44,`id`),ag(),cN(45,`:`),ag(),Tl(46,`pre`)(47,`code`),cN(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),ag()(),Tl(49,`p`),cN(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ag(),Tl(51,`p`),cN(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Tl(53,`a`,6),cN(54,`PoPageDynamicEditMetadata`),ag(),cN(55,`. Por exemplo:`),ag(),Tl(56,`pre`)(57,`code`),cN(58,` {
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
`),ag()(),Tl(59,`blockquote`)(60,`p`),cN(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),Tl(62,`code`),cN(63,`serviceApi`),ag(),cN(64,` da seguinte forma:`),ag()(),Tl(65,`pre`)(66,`code`),cN(67,`GET {end-point}/metadata?type=edit&version={version}
`),ag()(),Tl(68,`h4`),cN(69,`Tokens customizáveis`),ag(),Tl(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),cN(74,`Propriedade`),ag(),Tl(75,`th`),cN(76,`Descrição`),ag(),Tl(77,`th`),cN(78,`Valor Padrão`),ag()()(),Tl(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),cN(83,`Header`),ag()(),Gl(84,`td`)(85,`td`),ag(),Tl(86,`tr`)(87,`td`)(88,`code`),cN(89,`--padding`),ag()(),Tl(90,`td`),cN(91,`Espaçamento do header`),ag(),Tl(92,`td`)(93,`code`),cN(94,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(95,`tr`)(96,`td`)(97,`code`),cN(98,`--gap`),ag()(),Tl(99,`td`),cN(100,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(101,`td`)(102,`code`),cN(103,`var(--spacing-md)`),ag()()(),Tl(104,`tr`)(105,`td`)(106,`code`),cN(107,`--gap-actions`),ag()(),Tl(108,`td`),cN(109,`Espaçamento entre as ações`),ag(),Tl(110,`td`)(111,`code`),cN(112,`var(--spacing-xs)`),ag()()(),Tl(113,`tr`)(114,`td`)(115,`code`),cN(116,`--font-family`),ag()(),Tl(117,`td`),cN(118,`Família tipográfica do título`),ag(),Tl(119,`td`)(120,`code`),cN(121,`var(--font-family-theme)`),ag()()(),Tl(122,`tr`)(123,`td`)(124,`strong`),cN(125,`Content`),ag()(),Gl(126,`td`)(127,`td`),ag(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--padding-content`),ag()(),Tl(132,`td`),cN(133,`Espaçamento do conteúdo`),ag(),Tl(134,`td`)(135,`code`),cN(136,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(137,`div`,7)(138,`h4`,8),cN(139,`Seletor`),ag(),Tl(140,`pre`,9),cN(141,`<po-page-dynamic-edit
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
`),ag()(),Tl(142,`h4`,10),cN(143,`Propriedades`),ag(),Tl(144,`table`,11)(145,`tr`,12)(146,`th`,13),cN(147,`Nome`),ag(),Tl(148,`th`,13),cN(149,`Tipo`),ag(),Tl(150,`th`,13),cN(151,`Padrão`),ag(),Tl(152,`th`,13),cN(153,`Descrição`),ag()(),Tl(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),cN(158,` p-actions`),Gl(159,`br`),ag()()(),Tl(160,`td`,18)(161,`code`,19),cN(162,`PoPageDynamicEditActions`),ag()(),Tl(163,`td`,20),cN(164,`-`),ag(),Tl(165,`td`,21)(166,`em`)(167,`strong`),cN(168,`(opcional)`),ag()(),Tl(169,`p`),cN(170,`Ações da página.`),ag()()(),Tl(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),cN(175,` p-auto-router`),Gl(176,`br`),ag()()(),Tl(177,`td`,18)(178,`code`,22),cN(179,`boolean`),ag()(),Tl(180,`td`,20)(181,`p`),cN(182,`false`),ag()(),Tl(183,`td`,21)(184,`em`)(185,`strong`),cN(186,`(opcional)`),ag()(),Tl(187,`p`),cN(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),ag(),Tl(189,`blockquote`)(190,`p`),cN(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),Tl(192,`code`),cN(193,`**`),ag(),cN(194,`) especificada.`),ag()()()(),Tl(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),cN(199,` p-breadcrumb`),Gl(200,`br`),ag()()(),Tl(201,`td`,18)(202,`code`,23),cN(203,`PoBreadcrumb`),ag()(),Tl(204,`td`,20),cN(205,`-`),ag(),Tl(206,`td`,21)(207,`em`)(208,`strong`),cN(209,`(opcional)`),ag()(),Tl(210,`p`),cN(211,`Objeto com propriedades do breadcrumb.`),ag()()(),Tl(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),cN(216,` p-components-size`),Gl(217,`br`),ag()()(),Tl(218,`td`,18)(219,`code`,24),cN(220,`string`),ag()(),Tl(221,`td`,20)(222,`p`)(223,`code`),cN(224,`medium`),ag()()(),Tl(225,`td`,21)(226,`em`)(227,`strong`),cN(228,`(opcional)`),ag()(),Tl(229,`p`),cN(230,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(231,`ul`)(232,`li`)(233,`code`),cN(234,`small`),ag(),cN(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(236,`li`)(237,`code`),cN(238,`medium`),ag(),cN(239,`: aplica a medida medium de cada componente.`),ag()(),Tl(240,`blockquote`)(241,`p`),cN(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(243,`code`),cN(244,`medium`),ag(),cN(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(246,`a`,25),cN(247,`po-theme`),ag(),cN(248,`.`),ag()()()(),Tl(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),cN(253,` p-fields`),Gl(254,`br`),ag()()(),Tl(255,`td`,18)(256,`code`,26),cN(257,`Array<PoPageDynamicEditField>`),ag()(),Tl(258,`td`,20),cN(259,`-`),ag(),Tl(260,`td`,21)(261,`p`),cN(262,`Lista dos campos usados na tabela e busca avançada.`),ag()()(),Tl(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),cN(267,` p-literals`),Gl(268,`br`),ag()()(),Tl(269,`td`,18)(270,`code`,27),cN(271,`PoPageDynamicEditLiterals`),ag()(),Tl(272,`td`,20),cN(273,`-`),ag(),Tl(274,`td`,21)(275,`em`)(276,`strong`),cN(277,`(opcional)`),ag()(),Tl(278,`p`),cN(279,`Objeto com as literais usadas no `),Tl(280,`code`),cN(281,`po-page-dynamic-edit`),ag(),cN(282,`.`),ag(),Tl(283,`p`),cN(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),ag(),Tl(285,`pre`)(286,`code`),cN(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),ag()(),Tl(288,`p`),cN(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(290,`pre`)(291,`code`),cN(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),ag()(),Tl(293,`blockquote`)(294,`p`),cN(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),Tl(296,`a`,28)(297,`code`),cN(298,`PoI18nService`),ag()(),cN(299,` ou `),Tl(300,`em`),cN(301,`browser`),ag(),cN(302,`.`),ag()()()(),Tl(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),cN(307,` p-notification-type`),Gl(308,`br`),ag()()(),Tl(309,`td`,18)(310,`code`,24),cN(311,`string`),ag()(),Tl(312,`td`,20)(313,`p`),cN(314,`warning`),ag()(),Tl(315,`td`,21)(316,`em`)(317,`strong`),cN(318,`(opcional)`),ag()(),Tl(319,`p`),cN(320,`Tipo da notificação.`),ag(),Tl(321,`p`),cN(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),ag(),Tl(323,`pre`)(324,`code`),cN(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),ag()(),Tl(326,`blockquote`)(327,`p`),cN(328,`Os valores aceitos são 'warning' e 'error'.`),ag()()()(),Tl(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),cN(333,` p-load`),Gl(334,`br`),ag()()(),Tl(335,`td`,18)(336,`code`,24),cN(337,`string `),ag(),Tl(338,`code`,29),cN(339,` (() => PoPageDynamicEditOptions)`),ag()(),Tl(340,`td`,20),cN(341,`-`),ag(),Tl(342,`td`,21)(343,`p`),cN(344,`Função ou serviço que será executado na inicialização do componente.`),ag(),Tl(345,`p`),cN(346,`A propriedade aceita os seguintes tipos:`),ag(),Tl(347,`ul`)(348,`li`)(349,`code`),cN(350,`string`),ag(),cN(351,`: `),Tl(352,`em`),cN(353,`Endpoint`),ag(),cN(354,` usado pelo componente para requisição via `),Tl(355,`code`),cN(356,`POST`),ag(),cN(357,`.`),ag(),Tl(358,`li`)(359,`code`),cN(360,`function`),ag(),cN(361,`: Método que será executado.`),ag()(),Tl(362,`p`),cN(363,`O retorno desta função deve ser do tipo `),Tl(364,`code`),cN(365,`PoPageDynamicEditOptions`),ag(),cN(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),ag(),Tl(367,`p`),cN(368,`Por exemplo:`),ag(),Tl(369,`pre`)(370,`code`),cN(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),ag()(),Tl(372,`p`),cN(373,`Para referenciar a sua função utilize a propriedade `),Tl(374,`code`),cN(375,`bind`),ag(),cN(376,`, por exemplo:`),ag(),Tl(377,`pre`)(378,`code`),cN(379,`[p-load]="onLoadOptions.bind(this)"
`),ag()()()(),Tl(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),cN(384,` p-load-data`),Gl(385,`br`),ag()()(),Tl(386,`td`,18)(387,`code`,30),cN(388,`unknown`),ag()(),Tl(389,`td`,20),cN(390,`-`),ag(),Tl(391,`td`,21)(392,`em`)(393,`strong`),cN(394,`(opcional)`),ag()(),Tl(395,`p`),cN(396,`Função que será executada após ser realizada a busca dos dados.`),ag(),Tl(397,`p`),cN(398,`A propriedade aceita os seguintes tipos:`),ag(),Tl(399,`ul`)(400,`li`)(401,`code`),cN(402,`function`),ag(),cN(403,`: Método que será executado.`),ag()(),Tl(404,`p`),cN(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),ag(),Tl(406,`p`),cN(407,`Por exemplo:`),ag(),Tl(408,`pre`)(409,`code`),cN(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),ag()(),Tl(411,`p`),cN(412,`Para referenciar a sua função utilize a propriedade `),Tl(413,`code`),cN(414,`bind`),ag(),cN(415,`, por exemplo:`),ag(),Tl(416,`pre`)(417,`code`),cN(418,`[p-load-data]="onLoadCustom.bind(this)"
`),ag()()()(),Tl(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),cN(423,` p-service-api`),Gl(424,`br`),ag()()(),Tl(425,`td`,18)(426,`code`,24),cN(427,`string`),ag()(),Tl(428,`td`,20),cN(429,`-`),ag(),Tl(430,`td`,21)(431,`p`),cN(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),ag(),Tl(433,`p`),cN(434,`Para as ações de `),Tl(435,`code`),cN(436,`save`),ag(),cN(437,` e `),Tl(438,`code`),cN(439,`saveNew`),ag(),cN(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),ag(),Tl(441,`blockquote`)(442,`p`)(443,`code`),cN(444,`POST {end-point}`),ag()()(),Tl(445,`pre`)(446,`code`),cN(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),ag()(),Tl(448,`p`),cN(449,`Resquisição disparada, onde a propriedade `),Tl(450,`code`),cN(451,`name`),ag(),cN(452,` e `),Tl(453,`code`),cN(454,`city`),ag(),cN(455,` foram preenchidas:`),ag(),Tl(456,`pre`)(457,`code`),cN(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ag()(),Tl(459,`p`),cN(460,`Request payload:`),ag(),Tl(461,`pre`)(462,`code`),cN(463,`{ "name": "Fulano", "city": "Smallville" }
`),ag()(),Tl(464,`p`),cN(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),Tl(466,`code`),cN(467,`id`),ag(),cN(468,`.`),ag(),Tl(469,`p`),cN(470,`Exemplo de configuração de rota:`),ag(),Tl(471,`pre`)(472,`code`),cN(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),ag()(),Tl(474,`p`),cN(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),ag(),Tl(476,`blockquote`)(477,`p`)(478,`code`),cN(479,`GET {end-point}/{id}`),ag()()(),Tl(480,`p`),cN(481,`Nos métodos de `),Tl(482,`code`),cN(483,`save`),ag(),cN(484,` e `),Tl(485,`code`),cN(486,`saveNew`),ag(),cN(487,`, ao invés de um `),Tl(488,`code`),cN(489,`POST`),ag(),cN(490,`, será disparado um `),Tl(491,`code`),cN(492,`PUT`),ag(),cN(493,`.`),ag(),Tl(494,`p`),cN(495,`Resquisição disparada, onde a propriedade `),Tl(496,`code`),cN(497,`name`),ag(),cN(498,` e `),Tl(499,`code`),cN(500,`city`),ag(),cN(501,` foram preenchidas / atualizadas, e o `),Tl(502,`code`),cN(503,`id`),ag(),cN(504,` da url é 2:`),ag(),Tl(505,`pre`)(506,`code`),cN(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ag()(),Tl(508,`p`),cN(509,`Request payload:`),ag(),Tl(510,`pre`)(511,`code`),cN(512,`{ "name": "Fulano", "city": "Metropolis" }
`),ag()()()(),Tl(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),cN(517,` p-title`),Gl(518,`br`),ag()()(),Tl(519,`td`,18)(520,`code`,24),cN(521,`string`),ag()(),Tl(522,`td`,20),cN(523,`-`),ag(),Tl(524,`td`,21)(525,`p`),cN(526,`Título da página.`),ag()()()(),Tl(527,`h3`,10),cN(528,`Métodos`),ag(),Tl(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),cN(535,` showAdditionalHelp `),ag()()()()(),Tl(536,`tr`,21)(537,`td`,21)(538,`p`),cN(539,`Método que exibe `),Tl(540,`code`),cN(541,`p-helper`),ag(),cN(542,` ou executa a ação definida em `),Tl(543,`code`),cN(544,`p-helper{eventOnClick}`),ag(),cN(545,` ou em `),Tl(546,`code`),cN(547,`p-additionalHelp`),ag(),cN(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(549,`code`),cN(550,`keydown`),ag(),cN(551,`.`),ag(),Tl(552,`pre`)(553,`code`),cN(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),ag()()()()(),Tl(555,`h5`)(556,`b`),cN(557,`Parâmetros`),ag()(),Tl(558,`table`,11)(559,`tr`,12)(560,`th`,13),cN(561,`Nome`),ag(),Tl(562,`th`,13),cN(563,`Tipo`),ag(),Tl(564,`th`,13),cN(565,`Descrição`),ag()(),Tl(566,`tr`,14)(567,`td`,15),cN(568,` property`),ag(),Tl(569,`td`,18)(570,`code`,33),cN(571,` string `),ag()(),Tl(572,`td`,21)(573,`p`),cN(574,`Identificador da coluna.`),ag()()()(),Gl(575,`br`),Tl(576,`h3`),cN(577,`Interfaces`),ag(),Tl(578,`h4`,34)(579,`code`,5),cN(580,`PoPageDynamicEditActions`),ag()(),Tl(581,`div`,2)(582,`p`),cN(583,`Interface para as ações do componente po-page-dynamic-edit.`),ag()(),Tl(584,`h4`,10),cN(585,`Propriedades`),ag(),Tl(586,`table`,11)(587,`tr`,12)(588,`th`,13),cN(589,`Nome`),ag(),Tl(590,`th`,13),cN(591,`Tipo`),ag(),Tl(592,`th`,13),cN(593,`Descrição`),ag()(),Tl(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),cN(598,` beforeCancel`),Gl(599,`br`),ag()()(),Tl(600,`td`,18)(601,`code`,24),cN(602,`string `),ag(),Tl(603,`code`,35),cN(604,` (() => PoPageDynamicEditBeforeCancel)`),ag()(),Tl(605,`td`,21)(606,`em`)(607,`strong`),cN(608,`(opcional)`),ag()(),Tl(609,`p`),cN(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),ag(),Tl(611,`p`),cN(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Tl(613,`code`),cN(614,`PoPageDynamicEditBeforeCancel`),ag(),cN(615,`.`),ag(),Tl(616,`blockquote`)(617,`p`),cN(618,`A url será chamada via POST`),ag()(),Tl(619,`p`),cN(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Tl(621,`strong`),cN(622,`beforeCancel`),ag(),cN(623,`
ou definir a mensagem no atributo `),Tl(624,`code`),cN(625,`_messages`),ag(),cN(626,` na resposta da API conforme definido
em `),Tl(627,`a`,36),cN(628,`Guia de implementação de APIs`),ag()()()(),Tl(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),cN(633,` beforeSave`),Gl(634,`br`),ag()()(),Tl(635,`td`,18)(636,`code`,24),cN(637,`string `),ag(),Tl(638,`code`,37),cN(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),ag()(),Tl(640,`td`,21)(641,`em`)(642,`strong`),cN(643,`(opcional)`),ag()(),Tl(644,`p`),cN(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),ag(),Tl(646,`p`),cN(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Tl(648,`code`),cN(649,`PoPageDynamicEditBeforeSave`),ag(),cN(650,`.`),ag(),Tl(651,`blockquote`)(652,`p`),cN(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Tl(654,`code`),cN(655,`POST {beforeSave}/{key}`),ag(),cN(656,`.`),ag()(),Tl(657,`p`),cN(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Tl(659,`strong`),cN(660,`beforeSave`),ag(),cN(661,`
ou definir a mensagem no atributo `),Tl(662,`code`),cN(663,`_messages`),ag(),cN(664,` na resposta da API conforme definido
em `),Tl(665,`a`,36),cN(666,`Guia de implementação de APIs`),ag()()()(),Tl(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),cN(671,` beforeSaveNew`),Gl(672,`br`),ag()()(),Tl(673,`td`,18)(674,`code`,24),cN(675,`string `),ag(),Tl(676,`code`,38),cN(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),ag()(),Tl(678,`td`,21)(679,`em`)(680,`strong`),cN(681,`(opcional)`),ag()(),Tl(682,`p`),cN(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),ag(),Tl(684,`p`),cN(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Tl(686,`code`),cN(687,`PoPageDynamicEditBeforeSaveNew`),ag(),cN(688,`.`),ag(),Tl(689,`blockquote`)(690,`p`),cN(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Tl(692,`code`),cN(693,`POST {beforeSave}/{key}`),ag(),cN(694,`.`),ag()(),Tl(695,`p`),cN(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Tl(697,`strong`),cN(698,`beforeSaveNew`),ag(),cN(699,`
ou definir a mensagem no atributo `),Tl(700,`code`),cN(701,`_messages`),ag(),cN(702,` na resposta da API conforme definido
em `),Tl(703,`a`,36),cN(704,`Guia de implementação de APIs`),ag()()()(),Tl(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),cN(709,` cancel`),Gl(710,`br`),ag()()(),Tl(711,`td`,18)(712,`code`,24),cN(713,`string `),ag(),Tl(714,`code`,22),cN(715,` boolean `),ag(),Tl(716,`code`,39),cN(717,` Function`),ag()(),Tl(718,`td`,21)(719,`em`)(720,`strong`),cN(721,`(opcional)`),ag()(),Tl(722,`p`),cN(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),Tl(724,`code`),cN(725,`navigator.back()`),ag(),cN(726,`.`),ag(),Tl(727,`blockquote`)(728,`p`),cN(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),ag()(),Tl(730,`blockquote`)(731,`p`),cN(732,`Caso queira esconder a ação deve ser passado o valor `),Tl(733,`code`),cN(734,`false`),ag(),cN(735,`;`),ag()(),Tl(736,`pre`)(737,`code`),cN(738,`actions = {
  cancel: '/'
};
`),ag()()()(),Tl(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),cN(743,` save`),Gl(744,`br`),ag()()(),Tl(745,`td`,18)(746,`code`,24),cN(747,`string `),ag(),Tl(748,`code`,40),cN(749,` ((resource: any, id: string) => void)`),ag()(),Tl(750,`td`,21)(751,`em`)(752,`strong`),cN(753,`(opcional)`),ag()(),Tl(754,`p`),cN(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),ag(),Tl(756,`p`),cN(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),ag(),Tl(758,`blockquote`)(759,`p`),cN(760,`A rota pode conter um parâmetro chamando id.`),ag()(),Tl(761,`pre`)(762,`code`),cN(763,`actions = {
  save: 'detail/:id'
};
`),ag()(),Tl(764,`p`),cN(765,`Se for passado um método:`),ag(),Tl(766,`ul`)(767,`li`),cN(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),Tl(769,`code`),cN(770,`{ email: 'example@email.com' }`),ag(),cN(771,`.`),ag(),Tl(772,`li`),cN(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ag()()()(),Tl(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),cN(778,` saveNew`),Gl(779,`br`),ag()()(),Tl(780,`td`,18)(781,`code`,24),cN(782,`string `),ag(),Tl(783,`code`,41),cN(784,` ((resource: any, id?: string) => void)`),ag()(),Tl(785,`td`,21)(786,`em`)(787,`strong`),cN(788,`(opcional)`),ag()(),Tl(789,`p`),cN(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),ag(),Tl(791,`p`),cN(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),ag(),Tl(793,`blockquote`)(794,`p`),cN(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),ag()(),Tl(796,`pre`)(797,`code`),cN(798,`actions = {
  saveNew: 'new'
};
`),ag()(),Tl(799,`p`),cN(800,`A rota pode conter um parâmetro id.`),ag(),Tl(801,`pre`)(802,`code`),cN(803,`actions = {
  saveNew: 'edit/:id'
};
`),ag()(),Tl(804,`p`),cN(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ag()()()(),Tl(806,`h4`,34)(807,`code`,5),cN(808,`PoPageDynamicEditBeforeCancel`),ag()(),Tl(809,`div`,2)(810,`p`),cN(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(812,`code`),cN(813,`beforeCancel`),ag(),cN(814,`.`),ag()(),Tl(815,`h4`,10),cN(816,`Propriedades`),ag(),Tl(817,`table`,11)(818,`tr`,12)(819,`th`,13),cN(820,`Nome`),ag(),Tl(821,`th`,13),cN(822,`Tipo`),ag(),Tl(823,`th`,13),cN(824,`Descrição`),ag()(),Tl(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),cN(829,` allowAction`),Gl(830,`br`),ag()()(),Tl(831,`td`,18)(832,`code`,22),cN(833,`boolean`),ag()(),Tl(834,`td`,21)(835,`em`)(836,`strong`),cN(837,`(opcional)`),ag()(),Tl(838,`p`),cN(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),ag()()(),Tl(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),cN(844,` newUrl`),Gl(845,`br`),ag()()(),Tl(846,`td`,18)(847,`code`,24),cN(848,`string`),ag()(),Tl(849,`td`,21)(850,`em`)(851,`strong`),cN(852,`(opcional)`),ag()(),Tl(853,`p`),cN(854,`Nova rota para navegação que substituirá a definida anteriormente em `),Tl(855,`code`),cN(856,`cancel`),ag(),cN(857,`.`),ag()()()(),Tl(858,`h4`,34)(859,`code`,5),cN(860,`PoPageDynamicEditBeforeSaveNew`),ag()(),Tl(861,`div`,2)(862,`p`),cN(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(864,`code`),cN(865,`beforeSaveNew`),ag(),cN(866,`.`),ag()(),Tl(867,`h4`,10),cN(868,`Propriedades`),ag(),Tl(869,`table`,11)(870,`tr`,12)(871,`th`,13),cN(872,`Nome`),ag(),Tl(873,`th`,13),cN(874,`Tipo`),ag(),Tl(875,`th`,13),cN(876,`Descrição`),ag()(),Tl(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),cN(881,` allowAction`),Gl(882,`br`),ag()()(),Tl(883,`td`,18)(884,`code`,22),cN(885,`boolean`),ag()(),Tl(886,`td`,21)(887,`em`)(888,`strong`),cN(889,`(opcional)`),ag()(),Tl(890,`p`),cN(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),ag()()(),Tl(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),cN(896,` newUrl`),Gl(897,`br`),ag()()(),Tl(898,`td`,18)(899,`code`,24),cN(900,`string`),ag()(),Tl(901,`td`,21)(902,`em`)(903,`strong`),cN(904,`(opcional)`),ag()(),Tl(905,`p`),cN(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),Tl(907,`code`),cN(908,`saveNew`),ag(),cN(909,`.`),ag()()(),Tl(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),cN(914,` resource`),Gl(915,`br`),ag()()(),Tl(916,`td`,18)(917,`code`,42),cN(918,`any`),ag()(),Tl(919,`td`,21)(920,`em`)(921,`strong`),cN(922,`(opcional)`),ag()(),Tl(923,`p`),cN(924,`Recurso atualizado.`),ag(),Tl(925,`p`),cN(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Tl(927,`code`),cN(928,`key: true`),ag(),cN(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),ag(),Tl(930,`ul`)(931,`li`)(932,`p`),cN(933,`recurso anterior com a propriedade id foi que definida como `),Tl(934,`em`),cN(935,`key`),ag(),cN(936,`:`),ag(),Tl(937,`pre`)(938,`code`),cN(939,`{ id: 1, name: 'Ane' }
`),ag()()(),Tl(940,`li`)(941,`p`),cN(942,`recurso retornado no `),Tl(943,`code`),cN(944,`beforeSaveNew`),ag(),cN(945,`:`),ag(),Tl(946,`pre`)(947,`code`),cN(948,`{ id: 50, age: 23 }
`),ag()()(),Tl(949,`li`)(950,`p`),cN(951,`Mesclagem do recurso:`),ag(),Tl(952,`pre`)(953,`code`),cN(954,`{ id: 1, name: 'Ane', age: 23 }
`),ag()()()(),Tl(955,`blockquote`)(956,`p`),cN(957,`Caso `),Tl(958,`code`),cN(959,`allowAction`),ag(),cN(960,` seja `),Tl(961,`code`),cN(962,`false`),ag(),cN(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),ag()()()()(),Tl(964,`h4`,34)(965,`code`,5),cN(966,`PoPageDynamicEditBeforeSave`),ag()(),Tl(967,`div`,2)(968,`p`),cN(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(970,`code`),cN(971,`beforeSave`),ag(),cN(972,`.`),ag()(),Tl(973,`h4`,10),cN(974,`Propriedades`),ag(),Tl(975,`table`,11)(976,`tr`,12)(977,`th`,13),cN(978,`Nome`),ag(),Tl(979,`th`,13),cN(980,`Tipo`),ag(),Tl(981,`th`,13),cN(982,`Descrição`),ag()(),Tl(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),cN(987,` allowAction`),Gl(988,`br`),ag()()(),Tl(989,`td`,18)(990,`code`,22),cN(991,`boolean`),ag()(),Tl(992,`td`,21)(993,`em`)(994,`strong`),cN(995,`(opcional)`),ag()(),Tl(996,`p`),cN(997,`Define se deve ou não executar a ação salvar (save).`),ag()()(),Tl(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),cN(1002,` newUrl`),Gl(1003,`br`),ag()()(),Tl(1004,`td`,18)(1005,`code`,24),cN(1006,`string`),ag()(),Tl(1007,`td`,21)(1008,`em`)(1009,`strong`),cN(1010,`(opcional)`),ag()(),Tl(1011,`p`),cN(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),Tl(1013,`code`),cN(1014,`save`),ag(),cN(1015,`.`),ag()()(),Tl(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),cN(1020,` resource`),Gl(1021,`br`),ag()()(),Tl(1022,`td`,18)(1023,`code`,42),cN(1024,`any`),ag()(),Tl(1025,`td`,21)(1026,`em`)(1027,`strong`),cN(1028,`(opcional)`),ag()(),Tl(1029,`p`),cN(1030,`Recurso atualizado.`),ag(),Tl(1031,`p`),cN(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),ag(),Tl(1033,`ul`)(1034,`li`)(1035,`p`),cN(1036,`recurso anterior:`),ag(),Tl(1037,`pre`)(1038,`code`),cN(1039,`{ name: 'Ane' }
`),ag()()(),Tl(1040,`li`)(1041,`p`),cN(1042,`recurso retornado no `),Tl(1043,`code`),cN(1044,`beforeSave`),ag(),cN(1045,`:`),ag(),Tl(1046,`pre`)(1047,`code`),cN(1048,`{ age: 23 }
`),ag()()(),Tl(1049,`li`)(1050,`p`),cN(1051,`Mesclagem do recurso:`),ag(),Tl(1052,`pre`)(1053,`code`),cN(1054,`{ name: 'Ane', age: 23 }
`),ag()()()(),Tl(1055,`blockquote`)(1056,`p`),cN(1057,`Caso `),Tl(1058,`code`),cN(1059,`allowAction`),ag(),cN(1060,` seja `),Tl(1061,`code`),cN(1062,`false`),ag(),cN(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),ag()()()()(),Tl(1064,`h4`,34)(1065,`code`,5),cN(1066,`PoPageDynamicEditField`),ag()(),Tl(1067,`div`,2)(1068,`p`),cN(1069,`Interface dos fields usados para compor o template `),Tl(1070,`code`),cN(1071,`po-page-dynamic-edit`),ag(),cN(1072,`.
Herda as defini\xE7\xF5es da interface
`),Tl(1073,`a`,43),cN(1074,`PoDynamicFormField`),ag(),cN(1075,`.`),ag()(),Tl(1076,`h4`,10),cN(1077,`Propriedades`),ag(),Tl(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),cN(1081,`Nome`),ag(),Tl(1082,`th`,13),cN(1083,`Tipo`),ag(),Tl(1084,`th`,13),cN(1085,`Descrição`),ag()(),Tl(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),cN(1090,` duplicate`),Gl(1091,`br`),ag()()(),Tl(1092,`td`,18)(1093,`code`,22),cN(1094,`boolean`),ag()(),Tl(1095,`td`,21)(1096,`em`)(1097,`strong`),cN(1098,`(opcional)`),ag()(),Tl(1099,`p`),cN(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),ag()()()(),Tl(1101,`h4`,34)(1102,`code`,5),cN(1103,`PoPageDynamicEditLiterals`),ag()(),Tl(1104,`div`,2)(1105,`p`),cN(1106,`Interface para definição das literais usadas no `),Tl(1107,`code`),cN(1108,`po-page-dynamic-edit`),ag(),cN(1109,`.`),ag()(),Tl(1110,`h4`,10),cN(1111,`Propriedades`),ag(),Tl(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),cN(1115,`Nome`),ag(),Tl(1116,`th`,13),cN(1117,`Tipo`),ag(),Tl(1118,`th`,13),cN(1119,`Descrição`),ag()(),Tl(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),cN(1124,` cancelConfirmMessage`),Gl(1125,`br`),ag()()(),Tl(1126,`td`,18)(1127,`code`,24),cN(1128,`string`),ag()(),Tl(1129,`td`,21)(1130,`em`)(1131,`strong`),cN(1132,`(opcional)`),ag()(),Tl(1133,`p`),cN(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),ag()()(),Tl(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),cN(1139,` detailActionNew`),Gl(1140,`br`),ag()()(),Tl(1141,`td`,18)(1142,`code`,24),cN(1143,`string`),ag()(),Tl(1144,`td`,21)(1145,`em`)(1146,`strong`),cN(1147,`(opcional)`),ag()(),Tl(1148,`p`),cN(1149,`Rótulo exibido no botão `),Tl(1150,`code`),cN(1151,`Novo`),ag(),cN(1152,`.`),ag()()(),Tl(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),cN(1157,` pageActionCancel`),Gl(1158,`br`),ag()()(),Tl(1159,`td`,18)(1160,`code`,24),cN(1161,`string`),ag()(),Tl(1162,`td`,21)(1163,`em`)(1164,`strong`),cN(1165,`(opcional)`),ag()(),Tl(1166,`p`),cN(1167,`Rótulo exibido no botão `),Tl(1168,`code`),cN(1169,`Cancelar`),ag(),cN(1170,`.`),ag()()(),Tl(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),cN(1175,` pageActionSave`),Gl(1176,`br`),ag()()(),Tl(1177,`td`,18)(1178,`code`,24),cN(1179,`string`),ag()(),Tl(1180,`td`,21)(1181,`em`)(1182,`strong`),cN(1183,`(opcional)`),ag()(),Tl(1184,`p`),cN(1185,`Rótulo exibido no botão `),Tl(1186,`code`),cN(1187,`Salvar`),ag(),cN(1188,`.`),ag()()(),Tl(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),cN(1193,` pageActionSaveNew`),Gl(1194,`br`),ag()()(),Tl(1195,`td`,18)(1196,`code`,24),cN(1197,`string`),ag()(),Tl(1198,`td`,21)(1199,`em`)(1200,`strong`),cN(1201,`(opcional)`),ag()(),Tl(1202,`p`),cN(1203,`Rótulo exibido no botão `),Tl(1204,`code`),cN(1205,`Salvar e novo`),ag(),cN(1206,`.`),ag()()(),Tl(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),cN(1211,` registerNotFound`),Gl(1212,`br`),ag()()(),Tl(1213,`td`,18)(1214,`code`,24),cN(1215,`string`),ag()(),Tl(1216,`td`,21)(1217,`em`)(1218,`strong`),cN(1219,`(opcional)`),ag()(),Tl(1220,`p`),cN(1221,`Texto exibido para resgistro não encontrado.`),ag()()(),Tl(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),cN(1226,` saveNotificationError`),Gl(1227,`br`),ag()()(),Tl(1228,`td`,18)(1229,`code`,24),cN(1230,`string`),ag()(),Tl(1231,`td`,21)(1232,`em`)(1233,`strong`),cN(1234,`(opcional)`),ag()(),Tl(1235,`p`),cN(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),ag()()(),Tl(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),cN(1241,` saveNotificationSuccessSave`),Gl(1242,`br`),ag()()(),Tl(1243,`td`,18)(1244,`code`,24),cN(1245,`string`),ag()(),Tl(1246,`td`,21)(1247,`em`)(1248,`strong`),cN(1249,`(opcional)`),ag()(),Tl(1250,`p`),cN(1251,`Texto exibido para recurso salvo com sucesso.`),ag()()(),Tl(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),cN(1256,` saveNotificationSuccessUpdate`),Gl(1257,`br`),ag()()(),Tl(1258,`td`,18)(1259,`code`,24),cN(1260,`string`),ag()(),Tl(1261,`td`,21)(1262,`em`)(1263,`strong`),cN(1264,`(opcional)`),ag()(),Tl(1265,`p`),cN(1266,`Texto exibido para recurso atualizado com sucesso.`),ag()()(),Tl(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),cN(1271,` saveNotificationWarning`),Gl(1272,`br`),ag()()(),Tl(1273,`td`,18)(1274,`code`,24),cN(1275,`string`),ag()(),Tl(1276,`td`,21)(1277,`em`)(1278,`strong`),cN(1279,`(opcional)`),ag()(),Tl(1280,`p`),cN(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),ag()()()(),Tl(1282,`h4`,34)(1283,`code`,5),cN(1284,`PoPageDynamicEditMetadata`),ag()(),Tl(1285,`div`,2)(1286,`p`),cN(1287,`Interface para as propriedades de uma página dinâmica. `),Gl(1288,`a`,44),ag()(),Tl(1289,`h4`,10),cN(1290,`Propriedades`),ag(),Tl(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),cN(1294,`Nome`),ag(),Tl(1295,`th`,13),cN(1296,`Tipo`),ag(),Tl(1297,`th`,13),cN(1298,`Descrição`),ag()(),Tl(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),cN(1303,` actions`),Gl(1304,`br`),ag()()(),Tl(1305,`td`,18)(1306,`code`,19),cN(1307,`PoPageDynamicEditActions`),ag()(),Tl(1308,`td`,21)(1309,`em`)(1310,`strong`),cN(1311,`(opcional)`),ag()(),Tl(1312,`p`),cN(1313,`Ações que o usuário poderá executar na página através de botões.`),ag()()(),Tl(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),cN(1318,` autoRouter`),Gl(1319,`br`),ag()()(),Tl(1320,`td`,18)(1321,`code`,22),cN(1322,`boolean`),ag()(),Tl(1323,`td`,21)(1324,`em`)(1325,`strong`),cN(1326,`(opcional)`),ag()(),Tl(1327,`p`),cN(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),Tl(1329,`code`),cN(1330,`p-actions`),ag()(),Tl(1331,`p`),cN(1332,`As rotas criadas serão baseadas na propriedade `),Tl(1333,`code`),cN(1334,`p-actions`),ag(),cN(1335,`.`),ag(),Tl(1336,`blockquote`)(1337,`p`),cN(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),Tl(1339,`code`),cN(1340,`**`),ag(),cN(1341,`) especificada.`),ag()()()(),Tl(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),cN(1346,` breadcrumb`),Gl(1347,`br`),ag()()(),Tl(1348,`td`,18)(1349,`code`,23),cN(1350,`PoBreadcrumb`),ag()(),Tl(1351,`td`,21)(1352,`em`)(1353,`strong`),cN(1354,`(opcional)`),ag()(),Tl(1355,`p`),cN(1356,`Objeto com propriedades do breadcrumb.`),ag()()(),Tl(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),cN(1361,` fields`),Gl(1362,`br`),ag()()(),Tl(1363,`td`,18)(1364,`code`,26),cN(1365,`Array<PoPageDynamicEditField>`),ag()(),Tl(1366,`td`,21)(1367,`em`)(1368,`strong`),cN(1369,`(opcional)`),ag()(),Tl(1370,`p`),cN(1371,`Lista dos campos usados.`),ag()()(),Tl(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),cN(1376,` title`),Gl(1377,`br`),ag()()(),Tl(1378,`td`,18)(1379,`code`,24),cN(1380,`string`),ag()(),Tl(1381,`td`,21)(1382,`em`)(1383,`strong`),cN(1384,`(opcional)`),ag()(),Tl(1385,`p`),cN(1386,`Título da página.`),ag()()(),Tl(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),cN(1391,` version`),Gl(1392,`br`),ag()()(),Tl(1393,`td`,18)(1394,`code`,45),cN(1395,`number`),ag()(),Tl(1396,`td`,21)(1397,`p`),cN(1398,`Versão do metadado devolvido pelo backend.`),ag()()()(),Tl(1399,`h4`,34)(1400,`code`,5),cN(1401,`PoPageDynamicEditOptions`),ag()(),Tl(1402,`div`,2)(1403,`p`),cN(1404,`Interface para as propriedades de uma página dinâmica.`),ag()(),Tl(1405,`h4`,10),cN(1406,`Propriedades`),ag(),Tl(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),cN(1410,`Nome`),ag(),Tl(1411,`th`,13),cN(1412,`Tipo`),ag(),Tl(1413,`th`,13),cN(1414,`Descrição`),ag()(),Tl(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),cN(1419,` actions`),Gl(1420,`br`),ag()()(),Tl(1421,`td`,18)(1422,`code`,19),cN(1423,`PoPageDynamicEditActions`),ag()(),Tl(1424,`td`,21)(1425,`em`)(1426,`strong`),cN(1427,`(opcional)`),ag()(),Tl(1428,`p`),cN(1429,`Ações que o usuário poderá executar na página através de botões.`),ag()()(),Tl(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),cN(1434,` breadcrumb`),Gl(1435,`br`),ag()()(),Tl(1436,`td`,18)(1437,`code`,23),cN(1438,`PoBreadcrumb`),ag()(),Tl(1439,`td`,21)(1440,`em`)(1441,`strong`),cN(1442,`(opcional)`),ag()(),Tl(1443,`p`),cN(1444,`Objeto com propriedades do breadcrumb.`),ag()()(),Tl(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),cN(1449,` fields`),Gl(1450,`br`),ag()()(),Tl(1451,`td`,18)(1452,`code`,26),cN(1453,`Array<PoPageDynamicEditField>`),ag()(),Tl(1454,`td`,21)(1455,`em`)(1456,`strong`),cN(1457,`(opcional)`),ag()(),Tl(1458,`p`),cN(1459,`Lista dos campos usados.`),ag()()(),Tl(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),cN(1464,` title`),Gl(1465,`br`),ag()()(),Tl(1466,`td`,18)(1467,`code`,24),cN(1468,`string`),ag()(),Tl(1469,`td`,21)(1470,`em`)(1471,`strong`),cN(1472,`(opcional)`),ag()(),Tl(1473,`p`),cN(1474,`Título da página.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var te=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,d){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return d.changeTab(`doc`)}),Gl(3,`sample-po-page-dynamic-edit-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return d.changeTab(`web`)}),Gl(5,`sample-po-page-dynamic-edit-basic-view`)(6,`sample-po-page-dynamic-edit-user-view`),ag()()()),o&2&&(nw(`p-actions`,d.actions),jp(2),nw(`p-active`,d.activeTab===`doc`),jp(2),nw(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,L,O,_],encapsulation:2,changeDetection:1})}return a})()}];var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(te),bL]})}return a})();var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,U]})}return a})();export{fe as DocPoPageDynamicEditModule};