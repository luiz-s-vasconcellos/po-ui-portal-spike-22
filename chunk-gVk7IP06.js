import{$r as Zn,At as Zee,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,pa as wg,r as Ta,ta as ue,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var pe=()=>({label:`Po Portal`,link:`portal`});var ce=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var se=(n,de)=>[n,de];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&nu(0,`po-breadcrumb`,0),a&2&&jE(`p-items`,yO(3,se,gO(1,pe),gO(2,ce)))},dependencies:[Zee],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Breadcrumb Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-breadcrumb-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Se,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=p(zu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let c=Sx();nu(0,`po-breadcrumb`,2)(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),JN(),ob(`ngModelChange`,function(d){return y_(c),sO(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),v_(d)}),wg(),jc(6,`po-input`,5),JN(),ob(`ngModelChange`,function(d){return y_(c),sO(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),v_(d)}),wg(),jc(7,`po-input`,6),JN(),ob(`ngModelChange`,function(d){return y_(c),sO(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),v_(d)}),wg()(),jc(8,`div`,3)(9,`po-button`,7),mt(`p-click`,function(){return o.addBreadcrumb()}),wg()()(),nu(10,`po-divider`),jc(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),JN(),ob(`ngModelChange`,function(d){return y_(c),sO(o.favoriteService,d)||(o.favoriteService=d),v_(d)}),wg(),jc(15,`po-input`,9),JN(),ob(`ngModelChange`,function(d){return y_(c),sO(o.paramsService,d)||(o.paramsService=d),v_(d)}),wg()(),nu(16,`po-divider`),jc(17,`div`,3)(18,`po-button`,10),mt(`p-click`,function(){y_(c);let d=Fx(3),le=Fx(12);return d.reset(),le.reset(),v_(o.restore())}),wg()()()}if(a&2){let c=Fx(3);jE(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),rg(5),ib(`ngModel`,o.breadcrumbItem.action),t0(),rg(),ib(`ngModel`,o.breadcrumbItem.label),t0(),rg(),ib(`ngModel`,o.breadcrumbItem.link),t0(),rg(2),jE(`p-disabled`,c.invalid),rg(5),ib(`ngModel`,o.favoriteService),jE(`p-disabled`,!o.breadcrumbItems?.length),t0(),rg(),ib(`ngModel`,o.paramsService),jE(`p-disabled`,!o.breadcrumbItems?.length),t0()}},dependencies:[wK,CK,EK,TF,EF,Zee,ni,Lf,A5],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Breadcrumb Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
</po-breadcrumb>

<po-divider />

<form #breadcrumbForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="breadcrumbAction" [(ngModel)]="breadcrumbItem.action" p-label="Breadcrumb action">
    </po-input>

    <po-input
      class="po-md-4"
      name="breadcrumbLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-label="Breadcrumb label"
      p-required
    >
    </po-input>

    <po-input class="po-md-4" name="breadcrumbLink" [(ngModel)]="breadcrumbItem.link" p-label="Breadcrumb link">
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add breadcrumb"
      [p-disabled]="breadcrumbForm.invalid"
      (p-click)="addBreadcrumb()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="favoriteService"
      [(ngModel)]="favoriteService"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/favorite"
      p-label="Favorite service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="paramsService"
      [(ngModel)]="paramsService"
      p-clean
      p-help="Ex.: { id: 14, user: 'dev.po' }"
      p-label="Params service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="breadcrumbForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumbItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-breadcrumb-labs',
  templateUrl: './sample-po-breadcrumb-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: PoBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Breadcrumb clicked: \${action}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-breadcrumb-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-breadcrumb.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoBreadcrumbComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),wg(),jc(15,`p`),iO(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),wg(),jc(17,`p`),iO(18,`Caso um endereço seja especificado na propriedade `),jc(19,`code`),iO(20,`p-favorite-service`),wg(),iO(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),wg(),jc(22,`p`),iO(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),jc(24,`code`),iO(25,`p-params-service`),wg(),iO(26,` que recebe um objeto contendo as informações.`),wg(),jc(27,`h4`),iO(28,`Tokens customizáveis`),wg(),jc(29,`p`),iO(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(31,`blockquote`)(32,`p`),iO(33,`Para maiores informações, acesse o guia `),jc(34,`a`,6),iO(35,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(36,`.`),wg()(),jc(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),iO(41,`Propriedade`),wg(),jc(42,`th`),iO(43,`Descrição`),wg(),jc(44,`th`),iO(45,`Valor Padrão`),wg()()(),jc(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),iO(50,`Default Values`),wg()(),nu(51,`td`)(52,`td`),wg(),jc(53,`tr`)(54,`td`)(55,`code`),iO(56,`--font-family`),wg()(),jc(57,`td`),iO(58,`Família tipográfica usada \xA0`),wg(),jc(59,`td`)(60,`code`),iO(61,`var(--font-family-theme)`),wg()()(),jc(62,`tr`)(63,`td`)(64,`code`),iO(65,`--color`),wg()(),jc(66,`td`),iO(67,`Cor principal do icone de lista`),wg(),jc(68,`td`)(69,`code`),iO(70,`var(--color-action-default)`),wg()()(),jc(71,`tr`)(72,`td`)(73,`code`),iO(74,`--color-icon`),wg()(),jc(75,`td`),iO(76,`Cor do icone ">"`),wg(),jc(77,`td`)(78,`code`),iO(79,`var(--color-neutral-mid-60)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),iO(83,`--color-current-page`),wg(),iO(84,` \xA0`),wg(),jc(85,`td`),iO(86,`Cor do pagina atual`),wg(),jc(87,`td`)(88,`code`),iO(89,`var(--color-neutral-mid-60)`),wg()()()()()(),jc(90,`div`,7)(91,`h4`,8),iO(92,`Seletor`),wg(),jc(93,`pre`,9),iO(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),wg()(),jc(95,`h4`,10),iO(96,`Propriedades`),wg(),jc(97,`table`,11)(98,`tr`,12)(99,`th`,13),iO(100,`Nome`),wg(),jc(101,`th`,13),iO(102,`Tipo`),wg(),jc(103,`th`,13),iO(104,`Padrão`),wg(),jc(105,`th`,13),iO(106,`Descrição`),wg()(),jc(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),iO(111,` p-favorite-service`),nu(112,`br`),wg()()(),jc(113,`td`,18)(114,`code`,19),iO(115,`string`),wg()(),jc(116,`td`,20),iO(117,`-`),wg(),jc(118,`td`,21)(119,`em`)(120,`strong`),iO(121,`(opcional)`),wg()(),jc(122,`p`),iO(123,`Permite definir uma URL no componente `),jc(124,`code`),iO(125,`po-breadcrumb`),wg(),iO(126,` para favoritar ou desfavoritar.`),wg(),jc(127,`blockquote`)(128,`p`),iO(129,`Para utilizar esta propriedade, o último `),jc(130,`code`),iO(131,`PoBreadcrumbItem`),wg(),iO(132,` da lista de items da propriedade `),jc(133,`code`),iO(134,`p-items`),wg(),iO(135,` deve ter um link informado.`),wg()(),jc(136,`blockquote`)(137,`p`),iO(138,`A API deve estar preparada para retornar um objeto no formato `),jc(139,`code`),iO(140,`{ isFavorite: boolean }`),wg(),iO(141,`.`),wg()(),jc(142,`p`),iO(143,`Ao iniciar, o `),jc(144,`code`),iO(145,`po-breadcrumb`),wg(),iO(146,` faz um GET na URL definida na propriedade `),jc(147,`code`),iO(148,`p-favorite-service`),wg(),iO(149,` e deve retornar a propriedade
`),jc(150,`code`),iO(151,`{ isFavorite: boolean }`),wg(),iO(152,` do último `),jc(153,`code`),iO(154,`PoBreadcrumbItem`),wg(),iO(155,` definido na lista de itens da propriedade `),jc(156,`code`),iO(157,`p-items`),wg(),iO(158,`.`),wg(),jc(159,`p`),iO(160,`Ao clicar em favoritar ou desfavoritar o `),jc(161,`code`),iO(162,`po-breadcrumb`),wg(),iO(163,` faz um POST com o link e a propriedade `),jc(164,`code`),iO(165,`{ isFavorite: boolean }`),wg(),iO(166,`
definidos no \xFAltimo item da propriedade `),jc(167,`code`),iO(168,`p-items`),wg(),iO(169,`.`),wg(),jc(170,`blockquote`)(171,`p`),iO(172,`Caso algum parâmetro seja definido na propriedade `),jc(173,`code`),iO(174,`p-params-service`),wg(),iO(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),wg()(),jc(176,`p`),iO(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),wg(),jc(178,`pre`)(179,`code`),iO(180,`https://po-ui.io/sample/api/favorite
`),wg()(),jc(181,`p`),iO(182,`Ao fazer o GET o `),jc(183,`code`),iO(184,`po-breadcrumb`),wg(),iO(185,` concatena o link com a URL de serviço. Exemplo:`),wg(),jc(186,`pre`)(187,`code`),iO(188,`GET http://<domain>/api/favorite?url=/example
`),wg()(),jc(189,`pre`)(190,`code`),iO(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),wg()(),jc(192,`pre`)(193,`code`),iO(194,`POST
payload: { isFavorite: true, url: '/example' }
`),wg()(),jc(195,`p`),iO(196,`Caso possua parâmetros definidos na propriedade `),jc(197,`code`),iO(198,`p-params-service`),wg(),iO(199,`:`),wg(),jc(200,`pre`)(201,`code`),iO(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),wg()(),jc(203,`p`),iO(204,`Exemplos de retorno:`),wg(),jc(205,`pre`)(206,`code`),iO(207,`{ isFavorite: true, url: "/example" }
`),wg()(),jc(208,`pre`)(209,`code`),iO(210,`{ isFavorite: false, url: "/example" }
`),wg()(),jc(211,`pre`)(212,`code`),iO(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),wg()()()(),jc(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),iO(218,` p-items`),nu(219,`br`),wg()()(),jc(220,`td`,18)(221,`code`,22),iO(222,`PoBreadcrumbItem[]`),wg()(),jc(223,`td`,20),iO(224,`-`),wg(),jc(225,`td`,21)(226,`p`),iO(227,`Lista de itens do `),jc(228,`em`),iO(229,`breadcrumb`),wg(),iO(230,`.`),wg(),jc(231,`p`)(232,`strong`),iO(233,`Exemplo:`),wg()(),jc(234,`pre`)(235,`code`),iO(236,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),iO(241,` p-params-service`),nu(242,`br`),wg()()(),jc(243,`td`,18)(244,`code`,23),iO(245,`object`),wg()(),jc(246,`td`,20),iO(247,`-`),wg(),jc(248,`td`,21)(249,`em`)(250,`strong`),iO(251,`(opcional)`),wg()(),jc(252,`p`),iO(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()(),jc(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),iO(258,` p-size`),nu(259,`br`),wg()()(),jc(260,`td`,18)(261,`code`,19),iO(262,`string`),wg()(),jc(263,`td`,20)(264,`p`)(265,`code`),iO(266,`medium`),wg()()(),jc(267,`td`,21)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Define o tamanho do componente entre `),jc(273,`code`),iO(274,`small`),wg(),iO(275,` ou `),jc(276,`code`),iO(277,`medium`),wg(),iO(278,`.`),wg(),jc(279,`blockquote`)(280,`p`),iO(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(282,`code`),iO(283,`medium`),wg(),iO(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(285,`a`,24),iO(286,`po-theme`),wg(),iO(287,`.`),wg()()()()(),jc(288,`h3`),iO(289,`Interfaces`),wg(),jc(290,`h4`,25)(291,`code`,5),iO(292,`PoBreadcrumbItem`),wg()(),jc(293,`div`,2)(294,`p`),iO(295,`Interface que define cada item do componente `),jc(296,`strong`),iO(297,`po-breadcrumb`),wg(),iO(298,`.`),wg()(),jc(299,`h4`,10),iO(300,`Propriedades`),wg(),jc(301,`table`,11)(302,`tr`,12)(303,`th`,13),iO(304,`Nome`),wg(),jc(305,`th`,13),iO(306,`Tipo`),wg(),jc(307,`th`,13),iO(308,`Descrição`),wg()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),iO(313,` action`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,26),iO(317,`Function`),wg()(),jc(318,`td`,21)(319,`em`)(320,`strong`),iO(321,`(opcional)`),wg()(),jc(322,`p`),iO(323,`Ação executada ao clicar no item.`),wg(),jc(324,`blockquote`)(325,`p`),iO(326,`A função atribuída a esta propriedade receberá o `),jc(327,`em`),iO(328,`label`),wg(),iO(329,` do item como parâmetro para execução.`),wg()()()(),jc(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),iO(334,` label`),nu(335,`br`),wg()()(),jc(336,`td`,18)(337,`code`,19),iO(338,`string`),wg()(),jc(339,`td`,21)(340,`p`),iO(341,`Rótulo do item.`),wg()()(),jc(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),iO(346,` link`),nu(347,`br`),wg()()(),jc(348,`td`,18)(349,`code`,19),iO(350,`string`),wg()(),jc(351,`td`,21)(352,`em`)(353,`strong`),iO(354,`(opcional)`),wg()(),jc(355,`p`),iO(356,`Url do item.`),wg(),jc(357,`blockquote`)(358,`p`),iO(359,`Caso o item também contenha uma `),jc(360,`em`),iO(361,`action`),wg(),iO(362,` definida, a preferência de execução será do `),jc(363,`em`),iO(364,`link`),wg(),iO(365,`.`),wg()(),jc(366,`blockquote`)(367,`p`),iO(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(369,`strong`)(370,`a`,27),iO(371,`Veja um exemplo de como criar rotas aqui`),wg()(),iO(372,`.`),wg()(),jc(373,`blockquote`)(374,`p`),iO(375,`Esta propriedade é necessária para que a propriedade `),jc(376,`code`),iO(377,`p-favorite-service`),wg(),iO(378,` consiga favoritar ou desfavoritar.`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-breadcrumb-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-breadcrumb-basic-view`)(6,`sample-po-breadcrumb-labs-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,ie,oe,ae],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[C1.forChild(xe),C1]})}return n})();var Ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[Ta,me]})}return n})();export{Ge as DocPoBreadcrumbModule};