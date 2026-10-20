import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Si as iu,Y as Kze,Yi as rg,ai as b,c as ia,dt as Sae,i as _a,ji as mO,mi as gO,ni as _o,pa as wg,r as Ta,sa as vo,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var V=()=>({property:`id`,label:`User ID`});var G=a=>[a];var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,d){o&1&&nu(0,`po-page-dynamic-edit`,0),o&2&&jE(`p-fields`,mO(2,G,gO(1,V)))},dependencies:[ia],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a});var L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Dynamic Edit Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return d.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-dynamic-edit-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+d.sampleCodeButtonIcon),rg(),Ag(` `,d.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,W,d.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,B],encapsulation:2,changeDetection:1})}return a})();var J=[`dynamicEdit`];var j=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,d){if(o&1&&iu(J,7),o&2){let u;vo(u=_o())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,d){o&1&&nu(0,`po-page-dynamic-edit`,1,0),o&2&&jE(`p-auto-router`,!0)(`p-actions`,d.actions)(`p-breadcrumb`,d.breadcrumb)(`p-fields`,d.fields)(`p-literals`,d.literals)(`p-service-api`,d.serviceApi)},dependencies:[ia],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a});var O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,d){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Dynamic Edit - User`),wg(),jc(4,`a`,2),mt(`click`,function(){return d.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-dynamic-edit
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-dynamic-edit-user`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+d.sampleCodeButtonIcon),rg(),Ag(` `,d.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Z,d.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,d){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do template do po-page-dynamic-detail.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoPageDynamicEditComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O `),jc(15,`code`),iO(16,`po-page-dynamic-edit`),wg(),iO(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),wg(),jc(18,`h3`),iO(19,`Utilização via rota`),wg(),jc(20,`p`),iO(21,`Ao utilizar as rotas para inicializar o template, o `),jc(22,`code`),iO(23,`page-dynamic-edit`),wg(),iO(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),wg(),jc(25,`p`),iO(26,`Exemplo de utilização:`),wg(),jc(27,`p`),iO(28,`Arquivo de configuração de rotas da aplicação: `),jc(29,`code`),iO(30,`app-routing.module.ts`),wg()(),jc(31,`pre`)(32,`code`),iO(33,`const routes: Routes = [
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
`),wg()(),jc(34,`p`),iO(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),wg(),jc(36,`p`),iO(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),wg(),jc(38,`blockquote`)(39,`p`),iO(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),wg()(),jc(41,`p`),iO(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),jc(43,`code`),iO(44,`id`),wg(),iO(45,`:`),wg(),jc(46,`pre`)(47,`code`),iO(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),wg()(),jc(49,`p`),iO(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),wg(),jc(51,`p`),iO(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),jc(53,`a`,6),iO(54,`PoPageDynamicEditMetadata`),wg(),iO(55,`. Por exemplo:`),wg(),jc(56,`pre`)(57,`code`),iO(58,` {
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
`),wg()(),jc(59,`blockquote`)(60,`p`),iO(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),jc(62,`code`),iO(63,`serviceApi`),wg(),iO(64,` da seguinte forma:`),wg()(),jc(65,`pre`)(66,`code`),iO(67,`GET {end-point}/metadata?type=edit&version={version}
`),wg()(),jc(68,`h4`),iO(69,`Tokens customizáveis`),wg(),jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),iO(74,`Propriedade`),wg(),jc(75,`th`),iO(76,`Descrição`),wg(),jc(77,`th`),iO(78,`Valor Padrão`),wg()()(),jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),iO(83,`Header`),wg()(),nu(84,`td`)(85,`td`),wg(),jc(86,`tr`)(87,`td`)(88,`code`),iO(89,`--padding`),wg()(),jc(90,`td`),iO(91,`Espaçamento do header`),wg(),jc(92,`td`)(93,`code`),iO(94,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(95,`tr`)(96,`td`)(97,`code`),iO(98,`--gap`),wg()(),jc(99,`td`),iO(100,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(101,`td`)(102,`code`),iO(103,`var(--spacing-md)`),wg()()(),jc(104,`tr`)(105,`td`)(106,`code`),iO(107,`--gap-actions`),wg()(),jc(108,`td`),iO(109,`Espaçamento entre as ações`),wg(),jc(110,`td`)(111,`code`),iO(112,`var(--spacing-xs)`),wg()()(),jc(113,`tr`)(114,`td`)(115,`code`),iO(116,`--font-family`),wg()(),jc(117,`td`),iO(118,`Família tipográfica do título`),wg(),jc(119,`td`)(120,`code`),iO(121,`var(--font-family-theme)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`strong`),iO(125,`Content`),wg()(),nu(126,`td`)(127,`td`),wg(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--padding-content`),wg()(),jc(132,`td`),iO(133,`Espaçamento do conteúdo`),wg(),jc(134,`td`)(135,`code`),iO(136,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(137,`div`,7)(138,`h4`,8),iO(139,`Seletor`),wg(),jc(140,`pre`,9),iO(141,`<po-page-dynamic-edit
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
`),wg()(),jc(142,`h4`,10),iO(143,`Propriedades`),wg(),jc(144,`table`,11)(145,`tr`,12)(146,`th`,13),iO(147,`Nome`),wg(),jc(148,`th`,13),iO(149,`Tipo`),wg(),jc(150,`th`,13),iO(151,`Padrão`),wg(),jc(152,`th`,13),iO(153,`Descrição`),wg()(),jc(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),iO(158,` p-actions`),nu(159,`br`),wg()()(),jc(160,`td`,18)(161,`code`,19),iO(162,`PoPageDynamicEditActions`),wg()(),jc(163,`td`,20),iO(164,`-`),wg(),jc(165,`td`,21)(166,`em`)(167,`strong`),iO(168,`(opcional)`),wg()(),jc(169,`p`),iO(170,`Ações da página.`),wg()()(),jc(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),iO(175,` p-auto-router`),nu(176,`br`),wg()()(),jc(177,`td`,18)(178,`code`,22),iO(179,`boolean`),wg()(),jc(180,`td`,20)(181,`p`),iO(182,`false`),wg()(),jc(183,`td`,21)(184,`em`)(185,`strong`),iO(186,`(opcional)`),wg()(),jc(187,`p`),iO(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),wg(),jc(189,`blockquote`)(190,`p`),iO(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),jc(192,`code`),iO(193,`**`),wg(),iO(194,`) especificada.`),wg()()()(),jc(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),iO(199,` p-breadcrumb`),nu(200,`br`),wg()()(),jc(201,`td`,18)(202,`code`,23),iO(203,`PoBreadcrumb`),wg()(),jc(204,`td`,20),iO(205,`-`),wg(),jc(206,`td`,21)(207,`em`)(208,`strong`),iO(209,`(opcional)`),wg()(),jc(210,`p`),iO(211,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),iO(216,` p-components-size`),nu(217,`br`),wg()()(),jc(218,`td`,18)(219,`code`,24),iO(220,`string`),wg()(),jc(221,`td`,20)(222,`p`)(223,`code`),iO(224,`medium`),wg()()(),jc(225,`td`,21)(226,`em`)(227,`strong`),iO(228,`(opcional)`),wg()(),jc(229,`p`),iO(230,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(231,`ul`)(232,`li`)(233,`code`),iO(234,`small`),wg(),iO(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(236,`li`)(237,`code`),iO(238,`medium`),wg(),iO(239,`: aplica a medida medium de cada componente.`),wg()(),jc(240,`blockquote`)(241,`p`),iO(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(243,`code`),iO(244,`medium`),wg(),iO(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(246,`a`,25),iO(247,`po-theme`),wg(),iO(248,`.`),wg()()()(),jc(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),iO(253,` p-fields`),nu(254,`br`),wg()()(),jc(255,`td`,18)(256,`code`,26),iO(257,`Array<PoPageDynamicEditField>`),wg()(),jc(258,`td`,20),iO(259,`-`),wg(),jc(260,`td`,21)(261,`p`),iO(262,`Lista dos campos usados na tabela e busca avançada.`),wg()()(),jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),iO(267,` p-literals`),nu(268,`br`),wg()()(),jc(269,`td`,18)(270,`code`,27),iO(271,`PoPageDynamicEditLiterals`),wg()(),jc(272,`td`,20),iO(273,`-`),wg(),jc(274,`td`,21)(275,`em`)(276,`strong`),iO(277,`(opcional)`),wg()(),jc(278,`p`),iO(279,`Objeto com as literais usadas no `),jc(280,`code`),iO(281,`po-page-dynamic-edit`),wg(),iO(282,`.`),wg(),jc(283,`p`),iO(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),wg(),jc(285,`pre`)(286,`code`),iO(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),wg()(),jc(288,`p`),iO(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(290,`pre`)(291,`code`),iO(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),wg()(),jc(293,`blockquote`)(294,`p`),iO(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(296,`a`,28)(297,`code`),iO(298,`PoI18nService`),wg()(),iO(299,` ou `),jc(300,`em`),iO(301,`browser`),wg(),iO(302,`.`),wg()()()(),jc(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),iO(307,` p-notification-type`),nu(308,`br`),wg()()(),jc(309,`td`,18)(310,`code`,24),iO(311,`string`),wg()(),jc(312,`td`,20)(313,`p`),iO(314,`warning`),wg()(),jc(315,`td`,21)(316,`em`)(317,`strong`),iO(318,`(opcional)`),wg()(),jc(319,`p`),iO(320,`Tipo da notificação.`),wg(),jc(321,`p`),iO(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),wg(),jc(323,`pre`)(324,`code`),iO(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),wg()(),jc(326,`blockquote`)(327,`p`),iO(328,`Os valores aceitos são 'warning' e 'error'.`),wg()()()(),jc(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),iO(333,` p-load`),nu(334,`br`),wg()()(),jc(335,`td`,18)(336,`code`,24),iO(337,`string `),wg(),jc(338,`code`,29),iO(339,` (() => PoPageDynamicEditOptions)`),wg()(),jc(340,`td`,20),iO(341,`-`),wg(),jc(342,`td`,21)(343,`p`),iO(344,`Função ou serviço que será executado na inicialização do componente.`),wg(),jc(345,`p`),iO(346,`A propriedade aceita os seguintes tipos:`),wg(),jc(347,`ul`)(348,`li`)(349,`code`),iO(350,`string`),wg(),iO(351,`: `),jc(352,`em`),iO(353,`Endpoint`),wg(),iO(354,` usado pelo componente para requisição via `),jc(355,`code`),iO(356,`POST`),wg(),iO(357,`.`),wg(),jc(358,`li`)(359,`code`),iO(360,`function`),wg(),iO(361,`: Método que será executado.`),wg()(),jc(362,`p`),iO(363,`O retorno desta função deve ser do tipo `),jc(364,`code`),iO(365,`PoPageDynamicEditOptions`),wg(),iO(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),wg(),jc(367,`p`),iO(368,`Por exemplo:`),wg(),jc(369,`pre`)(370,`code`),iO(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),wg()(),jc(372,`p`),iO(373,`Para referenciar a sua função utilize a propriedade `),jc(374,`code`),iO(375,`bind`),wg(),iO(376,`, por exemplo:`),wg(),jc(377,`pre`)(378,`code`),iO(379,`[p-load]="onLoadOptions.bind(this)"
`),wg()()()(),jc(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),iO(384,` p-load-data`),nu(385,`br`),wg()()(),jc(386,`td`,18)(387,`code`,30),iO(388,`unknown`),wg()(),jc(389,`td`,20),iO(390,`-`),wg(),jc(391,`td`,21)(392,`em`)(393,`strong`),iO(394,`(opcional)`),wg()(),jc(395,`p`),iO(396,`Função que será executada após ser realizada a busca dos dados.`),wg(),jc(397,`p`),iO(398,`A propriedade aceita os seguintes tipos:`),wg(),jc(399,`ul`)(400,`li`)(401,`code`),iO(402,`function`),wg(),iO(403,`: Método que será executado.`),wg()(),jc(404,`p`),iO(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),wg(),jc(406,`p`),iO(407,`Por exemplo:`),wg(),jc(408,`pre`)(409,`code`),iO(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),wg()(),jc(411,`p`),iO(412,`Para referenciar a sua função utilize a propriedade `),jc(413,`code`),iO(414,`bind`),wg(),iO(415,`, por exemplo:`),wg(),jc(416,`pre`)(417,`code`),iO(418,`[p-load-data]="onLoadCustom.bind(this)"
`),wg()()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),iO(423,` p-service-api`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,24),iO(427,`string`),wg()(),jc(428,`td`,20),iO(429,`-`),wg(),jc(430,`td`,21)(431,`p`),iO(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),wg(),jc(433,`p`),iO(434,`Para as ações de `),jc(435,`code`),iO(436,`save`),wg(),iO(437,` e `),jc(438,`code`),iO(439,`saveNew`),wg(),iO(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),wg(),jc(441,`blockquote`)(442,`p`)(443,`code`),iO(444,`POST {end-point}`),wg()()(),jc(445,`pre`)(446,`code`),iO(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),wg()(),jc(448,`p`),iO(449,`Resquisição disparada, onde a propriedade `),jc(450,`code`),iO(451,`name`),wg(),iO(452,` e `),jc(453,`code`),iO(454,`city`),wg(),iO(455,` foram preenchidas:`),wg(),jc(456,`pre`)(457,`code`),iO(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),wg()(),jc(459,`p`),iO(460,`Request payload:`),wg(),jc(461,`pre`)(462,`code`),iO(463,`{ "name": "Fulano", "city": "Smallville" }
`),wg()(),jc(464,`p`),iO(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),jc(466,`code`),iO(467,`id`),wg(),iO(468,`.`),wg(),jc(469,`p`),iO(470,`Exemplo de configuração de rota:`),wg(),jc(471,`pre`)(472,`code`),iO(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),wg()(),jc(474,`p`),iO(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),wg(),jc(476,`blockquote`)(477,`p`)(478,`code`),iO(479,`GET {end-point}/{id}`),wg()()(),jc(480,`p`),iO(481,`Nos métodos de `),jc(482,`code`),iO(483,`save`),wg(),iO(484,` e `),jc(485,`code`),iO(486,`saveNew`),wg(),iO(487,`, ao invés de um `),jc(488,`code`),iO(489,`POST`),wg(),iO(490,`, será disparado um `),jc(491,`code`),iO(492,`PUT`),wg(),iO(493,`.`),wg(),jc(494,`p`),iO(495,`Resquisição disparada, onde a propriedade `),jc(496,`code`),iO(497,`name`),wg(),iO(498,` e `),jc(499,`code`),iO(500,`city`),wg(),iO(501,` foram preenchidas / atualizadas, e o `),jc(502,`code`),iO(503,`id`),wg(),iO(504,` da url é 2:`),wg(),jc(505,`pre`)(506,`code`),iO(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),wg()(),jc(508,`p`),iO(509,`Request payload:`),wg(),jc(510,`pre`)(511,`code`),iO(512,`{ "name": "Fulano", "city": "Metropolis" }
`),wg()()()(),jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),iO(517,` p-title`),nu(518,`br`),wg()()(),jc(519,`td`,18)(520,`code`,24),iO(521,`string`),wg()(),jc(522,`td`,20),iO(523,`-`),wg(),jc(524,`td`,21)(525,`p`),iO(526,`Título da página.`),wg()()()(),jc(527,`h3`,10),iO(528,`Métodos`),wg(),jc(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),iO(535,` showAdditionalHelp `),wg()()()()(),jc(536,`tr`,21)(537,`td`,21)(538,`p`),iO(539,`Método que exibe `),jc(540,`code`),iO(541,`p-helper`),wg(),iO(542,` ou executa a ação definida em `),jc(543,`code`),iO(544,`p-helper{eventOnClick}`),wg(),iO(545,` ou em `),jc(546,`code`),iO(547,`p-additionalHelp`),wg(),iO(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(549,`code`),iO(550,`keydown`),wg(),iO(551,`.`),wg(),jc(552,`pre`)(553,`code`),iO(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),wg()()()()(),jc(555,`h5`)(556,`b`),iO(557,`Parâmetros`),wg()(),jc(558,`table`,11)(559,`tr`,12)(560,`th`,13),iO(561,`Nome`),wg(),jc(562,`th`,13),iO(563,`Tipo`),wg(),jc(564,`th`,13),iO(565,`Descrição`),wg()(),jc(566,`tr`,14)(567,`td`,15),iO(568,` property`),wg(),jc(569,`td`,18)(570,`code`,33),iO(571,` string `),wg()(),jc(572,`td`,21)(573,`p`),iO(574,`Identificador da coluna.`),wg()()()(),nu(575,`br`),jc(576,`h3`),iO(577,`Interfaces`),wg(),jc(578,`h4`,34)(579,`code`,5),iO(580,`PoPageDynamicEditActions`),wg()(),jc(581,`div`,2)(582,`p`),iO(583,`Interface para as ações do componente po-page-dynamic-edit.`),wg()(),jc(584,`h4`,10),iO(585,`Propriedades`),wg(),jc(586,`table`,11)(587,`tr`,12)(588,`th`,13),iO(589,`Nome`),wg(),jc(590,`th`,13),iO(591,`Tipo`),wg(),jc(592,`th`,13),iO(593,`Descrição`),wg()(),jc(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),iO(598,` beforeCancel`),nu(599,`br`),wg()()(),jc(600,`td`,18)(601,`code`,24),iO(602,`string `),wg(),jc(603,`code`,35),iO(604,` (() => PoPageDynamicEditBeforeCancel)`),wg()(),jc(605,`td`,21)(606,`em`)(607,`strong`),iO(608,`(opcional)`),wg()(),jc(609,`p`),iO(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),wg(),jc(611,`p`),iO(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(613,`code`),iO(614,`PoPageDynamicEditBeforeCancel`),wg(),iO(615,`.`),wg(),jc(616,`blockquote`)(617,`p`),iO(618,`A url será chamada via POST`),wg()(),jc(619,`p`),iO(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(621,`strong`),iO(622,`beforeCancel`),wg(),iO(623,`
ou definir a mensagem no atributo `),jc(624,`code`),iO(625,`_messages`),wg(),iO(626,` na resposta da API conforme definido
em `),jc(627,`a`,36),iO(628,`Guia de implementação de APIs`),wg()()()(),jc(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),iO(633,` beforeSave`),nu(634,`br`),wg()()(),jc(635,`td`,18)(636,`code`,24),iO(637,`string `),wg(),jc(638,`code`,37),iO(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),wg()(),jc(640,`td`,21)(641,`em`)(642,`strong`),iO(643,`(opcional)`),wg()(),jc(644,`p`),iO(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),wg(),jc(646,`p`),iO(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(648,`code`),iO(649,`PoPageDynamicEditBeforeSave`),wg(),iO(650,`.`),wg(),jc(651,`blockquote`)(652,`p`),iO(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),jc(654,`code`),iO(655,`POST {beforeSave}/{key}`),wg(),iO(656,`.`),wg()(),jc(657,`p`),iO(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(659,`strong`),iO(660,`beforeSave`),wg(),iO(661,`
ou definir a mensagem no atributo `),jc(662,`code`),iO(663,`_messages`),wg(),iO(664,` na resposta da API conforme definido
em `),jc(665,`a`,36),iO(666,`Guia de implementação de APIs`),wg()()()(),jc(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),iO(671,` beforeSaveNew`),nu(672,`br`),wg()()(),jc(673,`td`,18)(674,`code`,24),iO(675,`string `),wg(),jc(676,`code`,38),iO(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),wg()(),jc(678,`td`,21)(679,`em`)(680,`strong`),iO(681,`(opcional)`),wg()(),jc(682,`p`),iO(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),wg(),jc(684,`p`),iO(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(686,`code`),iO(687,`PoPageDynamicEditBeforeSaveNew`),wg(),iO(688,`.`),wg(),jc(689,`blockquote`)(690,`p`),iO(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),jc(692,`code`),iO(693,`POST {beforeSave}/{key}`),wg(),iO(694,`.`),wg()(),jc(695,`p`),iO(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(697,`strong`),iO(698,`beforeSaveNew`),wg(),iO(699,`
ou definir a mensagem no atributo `),jc(700,`code`),iO(701,`_messages`),wg(),iO(702,` na resposta da API conforme definido
em `),jc(703,`a`,36),iO(704,`Guia de implementação de APIs`),wg()()()(),jc(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),iO(709,` cancel`),nu(710,`br`),wg()()(),jc(711,`td`,18)(712,`code`,24),iO(713,`string `),wg(),jc(714,`code`,22),iO(715,` boolean `),wg(),jc(716,`code`,39),iO(717,` Function`),wg()(),jc(718,`td`,21)(719,`em`)(720,`strong`),iO(721,`(opcional)`),wg()(),jc(722,`p`),iO(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),jc(724,`code`),iO(725,`navigator.back()`),wg(),iO(726,`.`),wg(),jc(727,`blockquote`)(728,`p`),iO(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),wg()(),jc(730,`blockquote`)(731,`p`),iO(732,`Caso queira esconder a ação deve ser passado o valor `),jc(733,`code`),iO(734,`false`),wg(),iO(735,`;`),wg()(),jc(736,`pre`)(737,`code`),iO(738,`actions = {
  cancel: '/'
};
`),wg()()()(),jc(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),iO(743,` save`),nu(744,`br`),wg()()(),jc(745,`td`,18)(746,`code`,24),iO(747,`string `),wg(),jc(748,`code`,40),iO(749,` ((resource: any, id: string) => void)`),wg()(),jc(750,`td`,21)(751,`em`)(752,`strong`),iO(753,`(opcional)`),wg()(),jc(754,`p`),iO(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),wg(),jc(756,`p`),iO(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),wg(),jc(758,`blockquote`)(759,`p`),iO(760,`A rota pode conter um parâmetro chamando id.`),wg()(),jc(761,`pre`)(762,`code`),iO(763,`actions = {
  save: 'detail/:id'
};
`),wg()(),jc(764,`p`),iO(765,`Se for passado um método:`),wg(),jc(766,`ul`)(767,`li`),iO(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),jc(769,`code`),iO(770,`{ email: 'example@email.com' }`),wg(),iO(771,`.`),wg(),jc(772,`li`),iO(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),wg()()()(),jc(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),iO(778,` saveNew`),nu(779,`br`),wg()()(),jc(780,`td`,18)(781,`code`,24),iO(782,`string `),wg(),jc(783,`code`,41),iO(784,` ((resource: any, id?: string) => void)`),wg()(),jc(785,`td`,21)(786,`em`)(787,`strong`),iO(788,`(opcional)`),wg()(),jc(789,`p`),iO(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),wg(),jc(791,`p`),iO(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),wg(),jc(793,`blockquote`)(794,`p`),iO(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),wg()(),jc(796,`pre`)(797,`code`),iO(798,`actions = {
  saveNew: 'new'
};
`),wg()(),jc(799,`p`),iO(800,`A rota pode conter um parâmetro id.`),wg(),jc(801,`pre`)(802,`code`),iO(803,`actions = {
  saveNew: 'edit/:id'
};
`),wg()(),jc(804,`p`),iO(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),wg()()()(),jc(806,`h4`,34)(807,`code`,5),iO(808,`PoPageDynamicEditBeforeCancel`),wg()(),jc(809,`div`,2)(810,`p`),iO(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(812,`code`),iO(813,`beforeCancel`),wg(),iO(814,`.`),wg()(),jc(815,`h4`,10),iO(816,`Propriedades`),wg(),jc(817,`table`,11)(818,`tr`,12)(819,`th`,13),iO(820,`Nome`),wg(),jc(821,`th`,13),iO(822,`Tipo`),wg(),jc(823,`th`,13),iO(824,`Descrição`),wg()(),jc(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),iO(829,` allowAction`),nu(830,`br`),wg()()(),jc(831,`td`,18)(832,`code`,22),iO(833,`boolean`),wg()(),jc(834,`td`,21)(835,`em`)(836,`strong`),iO(837,`(opcional)`),wg()(),jc(838,`p`),iO(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),wg()()(),jc(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),iO(844,` newUrl`),nu(845,`br`),wg()()(),jc(846,`td`,18)(847,`code`,24),iO(848,`string`),wg()(),jc(849,`td`,21)(850,`em`)(851,`strong`),iO(852,`(opcional)`),wg()(),jc(853,`p`),iO(854,`Nova rota para navegação que substituirá a definida anteriormente em `),jc(855,`code`),iO(856,`cancel`),wg(),iO(857,`.`),wg()()()(),jc(858,`h4`,34)(859,`code`,5),iO(860,`PoPageDynamicEditBeforeSaveNew`),wg()(),jc(861,`div`,2)(862,`p`),iO(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(864,`code`),iO(865,`beforeSaveNew`),wg(),iO(866,`.`),wg()(),jc(867,`h4`,10),iO(868,`Propriedades`),wg(),jc(869,`table`,11)(870,`tr`,12)(871,`th`,13),iO(872,`Nome`),wg(),jc(873,`th`,13),iO(874,`Tipo`),wg(),jc(875,`th`,13),iO(876,`Descrição`),wg()(),jc(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),iO(881,` allowAction`),nu(882,`br`),wg()()(),jc(883,`td`,18)(884,`code`,22),iO(885,`boolean`),wg()(),jc(886,`td`,21)(887,`em`)(888,`strong`),iO(889,`(opcional)`),wg()(),jc(890,`p`),iO(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),wg()()(),jc(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),iO(896,` newUrl`),nu(897,`br`),wg()()(),jc(898,`td`,18)(899,`code`,24),iO(900,`string`),wg()(),jc(901,`td`,21)(902,`em`)(903,`strong`),iO(904,`(opcional)`),wg()(),jc(905,`p`),iO(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),jc(907,`code`),iO(908,`saveNew`),wg(),iO(909,`.`),wg()()(),jc(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),iO(914,` resource`),nu(915,`br`),wg()()(),jc(916,`td`,18)(917,`code`,42),iO(918,`any`),wg()(),jc(919,`td`,21)(920,`em`)(921,`strong`),iO(922,`(opcional)`),wg()(),jc(923,`p`),iO(924,`Recurso atualizado.`),wg(),jc(925,`p`),iO(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),jc(927,`code`),iO(928,`key: true`),wg(),iO(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),wg(),jc(930,`ul`)(931,`li`)(932,`p`),iO(933,`recurso anterior com a propriedade id foi que definida como `),jc(934,`em`),iO(935,`key`),wg(),iO(936,`:`),wg(),jc(937,`pre`)(938,`code`),iO(939,`{ id: 1, name: 'Ane' }
`),wg()()(),jc(940,`li`)(941,`p`),iO(942,`recurso retornado no `),jc(943,`code`),iO(944,`beforeSaveNew`),wg(),iO(945,`:`),wg(),jc(946,`pre`)(947,`code`),iO(948,`{ id: 50, age: 23 }
`),wg()()(),jc(949,`li`)(950,`p`),iO(951,`Mesclagem do recurso:`),wg(),jc(952,`pre`)(953,`code`),iO(954,`{ id: 1, name: 'Ane', age: 23 }
`),wg()()()(),jc(955,`blockquote`)(956,`p`),iO(957,`Caso `),jc(958,`code`),iO(959,`allowAction`),wg(),iO(960,` seja `),jc(961,`code`),iO(962,`false`),wg(),iO(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),wg()()()()(),jc(964,`h4`,34)(965,`code`,5),iO(966,`PoPageDynamicEditBeforeSave`),wg()(),jc(967,`div`,2)(968,`p`),iO(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(970,`code`),iO(971,`beforeSave`),wg(),iO(972,`.`),wg()(),jc(973,`h4`,10),iO(974,`Propriedades`),wg(),jc(975,`table`,11)(976,`tr`,12)(977,`th`,13),iO(978,`Nome`),wg(),jc(979,`th`,13),iO(980,`Tipo`),wg(),jc(981,`th`,13),iO(982,`Descrição`),wg()(),jc(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),iO(987,` allowAction`),nu(988,`br`),wg()()(),jc(989,`td`,18)(990,`code`,22),iO(991,`boolean`),wg()(),jc(992,`td`,21)(993,`em`)(994,`strong`),iO(995,`(opcional)`),wg()(),jc(996,`p`),iO(997,`Define se deve ou não executar a ação salvar (save).`),wg()()(),jc(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),iO(1002,` newUrl`),nu(1003,`br`),wg()()(),jc(1004,`td`,18)(1005,`code`,24),iO(1006,`string`),wg()(),jc(1007,`td`,21)(1008,`em`)(1009,`strong`),iO(1010,`(opcional)`),wg()(),jc(1011,`p`),iO(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),jc(1013,`code`),iO(1014,`save`),wg(),iO(1015,`.`),wg()()(),jc(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),iO(1020,` resource`),nu(1021,`br`),wg()()(),jc(1022,`td`,18)(1023,`code`,42),iO(1024,`any`),wg()(),jc(1025,`td`,21)(1026,`em`)(1027,`strong`),iO(1028,`(opcional)`),wg()(),jc(1029,`p`),iO(1030,`Recurso atualizado.`),wg(),jc(1031,`p`),iO(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),wg(),jc(1033,`ul`)(1034,`li`)(1035,`p`),iO(1036,`recurso anterior:`),wg(),jc(1037,`pre`)(1038,`code`),iO(1039,`{ name: 'Ane' }
`),wg()()(),jc(1040,`li`)(1041,`p`),iO(1042,`recurso retornado no `),jc(1043,`code`),iO(1044,`beforeSave`),wg(),iO(1045,`:`),wg(),jc(1046,`pre`)(1047,`code`),iO(1048,`{ age: 23 }
`),wg()()(),jc(1049,`li`)(1050,`p`),iO(1051,`Mesclagem do recurso:`),wg(),jc(1052,`pre`)(1053,`code`),iO(1054,`{ name: 'Ane', age: 23 }
`),wg()()()(),jc(1055,`blockquote`)(1056,`p`),iO(1057,`Caso `),jc(1058,`code`),iO(1059,`allowAction`),wg(),iO(1060,` seja `),jc(1061,`code`),iO(1062,`false`),wg(),iO(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),wg()()()()(),jc(1064,`h4`,34)(1065,`code`,5),iO(1066,`PoPageDynamicEditField`),wg()(),jc(1067,`div`,2)(1068,`p`),iO(1069,`Interface dos fields usados para compor o template `),jc(1070,`code`),iO(1071,`po-page-dynamic-edit`),wg(),iO(1072,`.
Herda as defini\xE7\xF5es da interface
`),jc(1073,`a`,43),iO(1074,`PoDynamicFormField`),wg(),iO(1075,`.`),wg()(),jc(1076,`h4`,10),iO(1077,`Propriedades`),wg(),jc(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),iO(1081,`Nome`),wg(),jc(1082,`th`,13),iO(1083,`Tipo`),wg(),jc(1084,`th`,13),iO(1085,`Descrição`),wg()(),jc(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),iO(1090,` duplicate`),nu(1091,`br`),wg()()(),jc(1092,`td`,18)(1093,`code`,22),iO(1094,`boolean`),wg()(),jc(1095,`td`,21)(1096,`em`)(1097,`strong`),iO(1098,`(opcional)`),wg()(),jc(1099,`p`),iO(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),wg()()()(),jc(1101,`h4`,34)(1102,`code`,5),iO(1103,`PoPageDynamicEditLiterals`),wg()(),jc(1104,`div`,2)(1105,`p`),iO(1106,`Interface para definição das literais usadas no `),jc(1107,`code`),iO(1108,`po-page-dynamic-edit`),wg(),iO(1109,`.`),wg()(),jc(1110,`h4`,10),iO(1111,`Propriedades`),wg(),jc(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),iO(1115,`Nome`),wg(),jc(1116,`th`,13),iO(1117,`Tipo`),wg(),jc(1118,`th`,13),iO(1119,`Descrição`),wg()(),jc(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),iO(1124,` cancelConfirmMessage`),nu(1125,`br`),wg()()(),jc(1126,`td`,18)(1127,`code`,24),iO(1128,`string`),wg()(),jc(1129,`td`,21)(1130,`em`)(1131,`strong`),iO(1132,`(opcional)`),wg()(),jc(1133,`p`),iO(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),wg()()(),jc(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),iO(1139,` detailActionNew`),nu(1140,`br`),wg()()(),jc(1141,`td`,18)(1142,`code`,24),iO(1143,`string`),wg()(),jc(1144,`td`,21)(1145,`em`)(1146,`strong`),iO(1147,`(opcional)`),wg()(),jc(1148,`p`),iO(1149,`Rótulo exibido no botão `),jc(1150,`code`),iO(1151,`Novo`),wg(),iO(1152,`.`),wg()()(),jc(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),iO(1157,` pageActionCancel`),nu(1158,`br`),wg()()(),jc(1159,`td`,18)(1160,`code`,24),iO(1161,`string`),wg()(),jc(1162,`td`,21)(1163,`em`)(1164,`strong`),iO(1165,`(opcional)`),wg()(),jc(1166,`p`),iO(1167,`Rótulo exibido no botão `),jc(1168,`code`),iO(1169,`Cancelar`),wg(),iO(1170,`.`),wg()()(),jc(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),iO(1175,` pageActionSave`),nu(1176,`br`),wg()()(),jc(1177,`td`,18)(1178,`code`,24),iO(1179,`string`),wg()(),jc(1180,`td`,21)(1181,`em`)(1182,`strong`),iO(1183,`(opcional)`),wg()(),jc(1184,`p`),iO(1185,`Rótulo exibido no botão `),jc(1186,`code`),iO(1187,`Salvar`),wg(),iO(1188,`.`),wg()()(),jc(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),iO(1193,` pageActionSaveNew`),nu(1194,`br`),wg()()(),jc(1195,`td`,18)(1196,`code`,24),iO(1197,`string`),wg()(),jc(1198,`td`,21)(1199,`em`)(1200,`strong`),iO(1201,`(opcional)`),wg()(),jc(1202,`p`),iO(1203,`Rótulo exibido no botão `),jc(1204,`code`),iO(1205,`Salvar e novo`),wg(),iO(1206,`.`),wg()()(),jc(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),iO(1211,` registerNotFound`),nu(1212,`br`),wg()()(),jc(1213,`td`,18)(1214,`code`,24),iO(1215,`string`),wg()(),jc(1216,`td`,21)(1217,`em`)(1218,`strong`),iO(1219,`(opcional)`),wg()(),jc(1220,`p`),iO(1221,`Texto exibido para resgistro não encontrado.`),wg()()(),jc(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),iO(1226,` saveNotificationError`),nu(1227,`br`),wg()()(),jc(1228,`td`,18)(1229,`code`,24),iO(1230,`string`),wg()(),jc(1231,`td`,21)(1232,`em`)(1233,`strong`),iO(1234,`(opcional)`),wg()(),jc(1235,`p`),iO(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),wg()()(),jc(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),iO(1241,` saveNotificationSuccessSave`),nu(1242,`br`),wg()()(),jc(1243,`td`,18)(1244,`code`,24),iO(1245,`string`),wg()(),jc(1246,`td`,21)(1247,`em`)(1248,`strong`),iO(1249,`(opcional)`),wg()(),jc(1250,`p`),iO(1251,`Texto exibido para recurso salvo com sucesso.`),wg()()(),jc(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),iO(1256,` saveNotificationSuccessUpdate`),nu(1257,`br`),wg()()(),jc(1258,`td`,18)(1259,`code`,24),iO(1260,`string`),wg()(),jc(1261,`td`,21)(1262,`em`)(1263,`strong`),iO(1264,`(opcional)`),wg()(),jc(1265,`p`),iO(1266,`Texto exibido para recurso atualizado com sucesso.`),wg()()(),jc(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),iO(1271,` saveNotificationWarning`),nu(1272,`br`),wg()()(),jc(1273,`td`,18)(1274,`code`,24),iO(1275,`string`),wg()(),jc(1276,`td`,21)(1277,`em`)(1278,`strong`),iO(1279,`(opcional)`),wg()(),jc(1280,`p`),iO(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),wg()()()(),jc(1282,`h4`,34)(1283,`code`,5),iO(1284,`PoPageDynamicEditMetadata`),wg()(),jc(1285,`div`,2)(1286,`p`),iO(1287,`Interface para as propriedades de uma página dinâmica. `),nu(1288,`a`,44),wg()(),jc(1289,`h4`,10),iO(1290,`Propriedades`),wg(),jc(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),iO(1294,`Nome`),wg(),jc(1295,`th`,13),iO(1296,`Tipo`),wg(),jc(1297,`th`,13),iO(1298,`Descrição`),wg()(),jc(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),iO(1303,` actions`),nu(1304,`br`),wg()()(),jc(1305,`td`,18)(1306,`code`,19),iO(1307,`PoPageDynamicEditActions`),wg()(),jc(1308,`td`,21)(1309,`em`)(1310,`strong`),iO(1311,`(opcional)`),wg()(),jc(1312,`p`),iO(1313,`Ações que o usuário poderá executar na página através de botões.`),wg()()(),jc(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),iO(1318,` autoRouter`),nu(1319,`br`),wg()()(),jc(1320,`td`,18)(1321,`code`,22),iO(1322,`boolean`),wg()(),jc(1323,`td`,21)(1324,`em`)(1325,`strong`),iO(1326,`(opcional)`),wg()(),jc(1327,`p`),iO(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),jc(1329,`code`),iO(1330,`p-actions`),wg()(),jc(1331,`p`),iO(1332,`As rotas criadas serão baseadas na propriedade `),jc(1333,`code`),iO(1334,`p-actions`),wg(),iO(1335,`.`),wg(),jc(1336,`blockquote`)(1337,`p`),iO(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),jc(1339,`code`),iO(1340,`**`),wg(),iO(1341,`) especificada.`),wg()()()(),jc(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),iO(1346,` breadcrumb`),nu(1347,`br`),wg()()(),jc(1348,`td`,18)(1349,`code`,23),iO(1350,`PoBreadcrumb`),wg()(),jc(1351,`td`,21)(1352,`em`)(1353,`strong`),iO(1354,`(opcional)`),wg()(),jc(1355,`p`),iO(1356,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),iO(1361,` fields`),nu(1362,`br`),wg()()(),jc(1363,`td`,18)(1364,`code`,26),iO(1365,`Array<PoPageDynamicEditField>`),wg()(),jc(1366,`td`,21)(1367,`em`)(1368,`strong`),iO(1369,`(opcional)`),wg()(),jc(1370,`p`),iO(1371,`Lista dos campos usados.`),wg()()(),jc(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),iO(1376,` title`),nu(1377,`br`),wg()()(),jc(1378,`td`,18)(1379,`code`,24),iO(1380,`string`),wg()(),jc(1381,`td`,21)(1382,`em`)(1383,`strong`),iO(1384,`(opcional)`),wg()(),jc(1385,`p`),iO(1386,`Título da página.`),wg()()(),jc(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),iO(1391,` version`),nu(1392,`br`),wg()()(),jc(1393,`td`,18)(1394,`code`,45),iO(1395,`number`),wg()(),jc(1396,`td`,21)(1397,`p`),iO(1398,`Versão do metadado devolvido pelo backend.`),wg()()()(),jc(1399,`h4`,34)(1400,`code`,5),iO(1401,`PoPageDynamicEditOptions`),wg()(),jc(1402,`div`,2)(1403,`p`),iO(1404,`Interface para as propriedades de uma página dinâmica.`),wg()(),jc(1405,`h4`,10),iO(1406,`Propriedades`),wg(),jc(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),iO(1410,`Nome`),wg(),jc(1411,`th`,13),iO(1412,`Tipo`),wg(),jc(1413,`th`,13),iO(1414,`Descrição`),wg()(),jc(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),iO(1419,` actions`),nu(1420,`br`),wg()()(),jc(1421,`td`,18)(1422,`code`,19),iO(1423,`PoPageDynamicEditActions`),wg()(),jc(1424,`td`,21)(1425,`em`)(1426,`strong`),iO(1427,`(opcional)`),wg()(),jc(1428,`p`),iO(1429,`Ações que o usuário poderá executar na página através de botões.`),wg()()(),jc(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),iO(1434,` breadcrumb`),nu(1435,`br`),wg()()(),jc(1436,`td`,18)(1437,`code`,23),iO(1438,`PoBreadcrumb`),wg()(),jc(1439,`td`,21)(1440,`em`)(1441,`strong`),iO(1442,`(opcional)`),wg()(),jc(1443,`p`),iO(1444,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),iO(1449,` fields`),nu(1450,`br`),wg()()(),jc(1451,`td`,18)(1452,`code`,26),iO(1453,`Array<PoPageDynamicEditField>`),wg()(),jc(1454,`td`,21)(1455,`em`)(1456,`strong`),iO(1457,`(opcional)`),wg()(),jc(1458,`p`),iO(1459,`Lista dos campos usados.`),wg()()(),jc(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),iO(1464,` title`),nu(1465,`br`),wg()()(),jc(1466,`td`,18)(1467,`code`,24),iO(1468,`string`),wg()(),jc(1469,`td`,21)(1470,`em`)(1471,`strong`),iO(1472,`(opcional)`),wg()(),jc(1473,`p`),iO(1474,`Título da página.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var te=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,d){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return d.changeTab(`doc`)}),nu(3,`sample-po-page-dynamic-edit-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return d.changeTab(`web`)}),nu(5,`sample-po-page-dynamic-edit-basic-view`)(6,`sample-po-page-dynamic-edit-user-view`),wg()()()),o&2&&(jE(`p-actions`,d.actions),rg(2),jE(`p-active`,d.activeTab===`doc`),rg(2),jE(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[Kze,bae,Sae,L,O,_],encapsulation:2,changeDetection:1})}return a})()}];var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(te),C1]})}return a})();var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,U]})}return a})();export{fe as DocPoPageDynamicEditModule};