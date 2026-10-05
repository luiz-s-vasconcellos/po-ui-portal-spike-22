import{$i as pt,C as C4,Ca as zO,Cr as Kc,Er as LP,Gi as mg,Hr as RN,Ji as p0,Jr as TE,Oi as he,Ri as kL,Rt as cae,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,ai as Zx,ca as ue,fr as Hp,gi as e_,i as _a,in as mae,ir as E,mn as rb,nr as DN,oi as aN,pa as vN,qn as BP,r as Ta,si as b9,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,va as xN,x as Bee,yi as f,yr as Jv,zr as Qn}from"./main-M64QO35D.js";var pe=()=>({label:`Po Portal`,link:`portal`});var ce=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var se=(n,de)=>[n,de];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&Kc(0,`po-breadcrumb`,0),a&2&&cE(`p-items`,xN(3,se,RN(1,pe),RN(2,ce)))},dependencies:[Bee],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Breadcrumb Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-breadcrumb-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=f(Lu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let c=Bx();Kc(0,`po-breadcrumb`,2)(1,`po-divider`),Ac(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),RE(`ngModelChange`,function(d){return Jv(c),DN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),e_(d)}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(d){return Jv(c),DN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),e_(d)}),ug(),p0(),Ac(7,`po-input`,6),RE(`ngModelChange`,function(d){return Jv(c),DN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),e_(d)}),ug(),p0(),ug(),Ac(8,`div`,3)(9,`po-button`,7),pt(`p-click`,function(){return o.addBreadcrumb()}),ug()()(),Kc(10,`po-divider`),Ac(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),RE(`ngModelChange`,function(d){return Jv(c),DN(o.favoriteService,d)||(o.favoriteService=d),e_(d)}),ug(),p0(),Ac(15,`po-input`,9),RE(`ngModelChange`,function(d){return Jv(c),DN(o.paramsService,d)||(o.paramsService=d),e_(d)}),ug(),p0(),ug(),Kc(16,`po-divider`),Ac(17,`div`,3)(18,`po-button`,10),pt(`p-click`,function(){Jv(c);let d=Zx(3),le=Zx(12);return d.reset(),le.reset(),e_(o.restore())}),ug()()()}if(a&2){let c=Zx(3);cE(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),Hp(5),TE(`ngModel`,o.breadcrumbItem.action),m0(),Hp(),TE(`ngModel`,o.breadcrumbItem.label),m0(),Hp(),TE(`ngModel`,o.breadcrumbItem.link),m0(),Hp(2),cE(`p-disabled`,c.invalid),Hp(5),TE(`ngModel`,o.favoriteService),cE(`p-disabled`,!o.breadcrumbItems?.length),m0(),Hp(),TE(`ngModel`,o.paramsService),cE(`p-disabled`,!o.breadcrumbItems?.length),m0()}},dependencies:[b9,D9,C9,BP,LP,Bee,oi,rb,C4],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Breadcrumb Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-breadcrumb-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-breadcrumb.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoBreadcrumbComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),ug(),Ac(15,`p`),vN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),ug(),Ac(17,`p`),vN(18,`Caso um endereço seja especificado na propriedade `),Ac(19,`code`),vN(20,`p-favorite-service`),ug(),vN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),ug(),Ac(22,`p`),vN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Ac(24,`code`),vN(25,`p-params-service`),ug(),vN(26,` que recebe um objeto contendo as informações.`),ug(),Ac(27,`h4`),vN(28,`Tokens customizáveis`),ug(),Ac(29,`p`),vN(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(31,`blockquote`)(32,`p`),vN(33,`Para maiores informações, acesse o guia `),Ac(34,`a`,6),vN(35,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(36,`.`),ug()(),Ac(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),vN(41,`Propriedade`),ug(),Ac(42,`th`),vN(43,`Descrição`),ug(),Ac(44,`th`),vN(45,`Valor Padrão`),ug()()(),Ac(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),vN(50,`Default Values`),ug()(),Kc(51,`td`)(52,`td`),ug(),Ac(53,`tr`)(54,`td`)(55,`code`),vN(56,`--font-family`),ug()(),Ac(57,`td`),vN(58,`Família tipográfica usada \xA0`),ug(),Ac(59,`td`)(60,`code`),vN(61,`var(--font-family-theme)`),ug()()(),Ac(62,`tr`)(63,`td`)(64,`code`),vN(65,`--color`),ug()(),Ac(66,`td`),vN(67,`Cor principal do icone de lista`),ug(),Ac(68,`td`)(69,`code`),vN(70,`var(--color-action-default)`),ug()()(),Ac(71,`tr`)(72,`td`)(73,`code`),vN(74,`--color-icon`),ug()(),Ac(75,`td`),vN(76,`Cor do icone ">"`),ug(),Ac(77,`td`)(78,`code`),vN(79,`var(--color-neutral-mid-60)`),ug()()(),Ac(80,`tr`)(81,`td`)(82,`code`),vN(83,`--color-current-page`),ug(),vN(84,` \xA0`),ug(),Ac(85,`td`),vN(86,`Cor do pagina atual`),ug(),Ac(87,`td`)(88,`code`),vN(89,`var(--color-neutral-mid-60)`),ug()()()()()(),Ac(90,`div`,7)(91,`h4`,8),vN(92,`Seletor`),ug(),Ac(93,`pre`,9),vN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),ug()(),Ac(95,`h4`,10),vN(96,`Propriedades`),ug(),Ac(97,`table`,11)(98,`tr`,12)(99,`th`,13),vN(100,`Nome`),ug(),Ac(101,`th`,13),vN(102,`Tipo`),ug(),Ac(103,`th`,13),vN(104,`Padrão`),ug(),Ac(105,`th`,13),vN(106,`Descrição`),ug()(),Ac(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),vN(111,` p-favorite-service`),Kc(112,`br`),ug()()(),Ac(113,`td`,18)(114,`code`,19),vN(115,`string`),ug()(),Ac(116,`td`,20),vN(117,`-`),ug(),Ac(118,`td`,21)(119,`em`)(120,`strong`),vN(121,`(opcional)`),ug()(),Ac(122,`p`),vN(123,`Permite definir uma URL no componente `),Ac(124,`code`),vN(125,`po-breadcrumb`),ug(),vN(126,` para favoritar ou desfavoritar.`),ug(),Ac(127,`blockquote`)(128,`p`),vN(129,`Para utilizar esta propriedade, o último `),Ac(130,`code`),vN(131,`PoBreadcrumbItem`),ug(),vN(132,` da lista de items da propriedade `),Ac(133,`code`),vN(134,`p-items`),ug(),vN(135,` deve ter um link informado.`),ug()(),Ac(136,`blockquote`)(137,`p`),vN(138,`A API deve estar preparada para retornar um objeto no formato `),Ac(139,`code`),vN(140,`{ isFavorite: boolean }`),ug(),vN(141,`.`),ug()(),Ac(142,`p`),vN(143,`Ao iniciar, o `),Ac(144,`code`),vN(145,`po-breadcrumb`),ug(),vN(146,` faz um GET na URL definida na propriedade `),Ac(147,`code`),vN(148,`p-favorite-service`),ug(),vN(149,` e deve retornar a propriedade
`),Ac(150,`code`),vN(151,`{ isFavorite: boolean }`),ug(),vN(152,` do último `),Ac(153,`code`),vN(154,`PoBreadcrumbItem`),ug(),vN(155,` definido na lista de itens da propriedade `),Ac(156,`code`),vN(157,`p-items`),ug(),vN(158,`.`),ug(),Ac(159,`p`),vN(160,`Ao clicar em favoritar ou desfavoritar o `),Ac(161,`code`),vN(162,`po-breadcrumb`),ug(),vN(163,` faz um POST com o link e a propriedade `),Ac(164,`code`),vN(165,`{ isFavorite: boolean }`),ug(),vN(166,`
definidos no \xFAltimo item da propriedade `),Ac(167,`code`),vN(168,`p-items`),ug(),vN(169,`.`),ug(),Ac(170,`blockquote`)(171,`p`),vN(172,`Caso algum parâmetro seja definido na propriedade `),Ac(173,`code`),vN(174,`p-params-service`),ug(),vN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),ug()(),Ac(176,`p`),vN(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),ug(),Ac(178,`pre`)(179,`code`),vN(180,`https://po-ui.io/sample/api/favorite
`),ug()(),Ac(181,`p`),vN(182,`Ao fazer o GET o `),Ac(183,`code`),vN(184,`po-breadcrumb`),ug(),vN(185,` concatena o link com a URL de serviço. Exemplo:`),ug(),Ac(186,`pre`)(187,`code`),vN(188,`GET http://<domain>/api/favorite?url=/example
`),ug()(),Ac(189,`pre`)(190,`code`),vN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),ug()(),Ac(192,`pre`)(193,`code`),vN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),ug()(),Ac(195,`p`),vN(196,`Caso possua parâmetros definidos na propriedade `),Ac(197,`code`),vN(198,`p-params-service`),ug(),vN(199,`:`),ug(),Ac(200,`pre`)(201,`code`),vN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ug()(),Ac(203,`p`),vN(204,`Exemplos de retorno:`),ug(),Ac(205,`pre`)(206,`code`),vN(207,`{ isFavorite: true, url: "/example" }
`),ug()(),Ac(208,`pre`)(209,`code`),vN(210,`{ isFavorite: false, url: "/example" }
`),ug()(),Ac(211,`pre`)(212,`code`),vN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ug()()()(),Ac(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),vN(218,` p-items`),Kc(219,`br`),ug()()(),Ac(220,`td`,18)(221,`code`,22),vN(222,`PoBreadcrumbItem[]`),ug()(),Ac(223,`td`,20),vN(224,`-`),ug(),Ac(225,`td`,21)(226,`p`),vN(227,`Lista de itens do `),Ac(228,`em`),vN(229,`breadcrumb`),ug(),vN(230,`.`),ug(),Ac(231,`p`)(232,`strong`),vN(233,`Exemplo:`),ug()(),Ac(234,`pre`)(235,`code`),vN(236,`{ label: 'Po Portal', link: 'portal' }
`),ug()()()(),Ac(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),vN(241,` p-params-service`),Kc(242,`br`),ug()()(),Ac(243,`td`,18)(244,`code`,23),vN(245,`object`),ug()(),Ac(246,`td`,20),vN(247,`-`),ug(),Ac(248,`td`,21)(249,`em`)(250,`strong`),vN(251,`(opcional)`),ug()(),Ac(252,`p`),vN(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ug()()(),Ac(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),vN(258,` p-size`),Kc(259,`br`),ug()()(),Ac(260,`td`,18)(261,`code`,19),vN(262,`string`),ug()(),Ac(263,`td`,20)(264,`p`)(265,`code`),vN(266,`medium`),ug()()(),Ac(267,`td`,21)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Define o tamanho do componente entre `),Ac(273,`code`),vN(274,`small`),ug(),vN(275,` ou `),Ac(276,`code`),vN(277,`medium`),ug(),vN(278,`.`),ug(),Ac(279,`blockquote`)(280,`p`),vN(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(282,`code`),vN(283,`medium`),ug(),vN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(285,`a`,24),vN(286,`po-theme`),ug(),vN(287,`.`),ug()()()()(),Ac(288,`h3`),vN(289,`Interfaces`),ug(),Ac(290,`h4`,25)(291,`code`,5),vN(292,`PoBreadcrumbItem`),ug()(),Ac(293,`div`,2)(294,`p`),vN(295,`Interface que define cada item do componente `),Ac(296,`strong`),vN(297,`po-breadcrumb`),ug(),vN(298,`.`),ug()(),Ac(299,`h4`,10),vN(300,`Propriedades`),ug(),Ac(301,`table`,11)(302,`tr`,12)(303,`th`,13),vN(304,`Nome`),ug(),Ac(305,`th`,13),vN(306,`Tipo`),ug(),Ac(307,`th`,13),vN(308,`Descrição`),ug()(),Ac(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),vN(313,` action`),Kc(314,`br`),ug()()(),Ac(315,`td`,18)(316,`code`,26),vN(317,`Function`),ug()(),Ac(318,`td`,21)(319,`em`)(320,`strong`),vN(321,`(opcional)`),ug()(),Ac(322,`p`),vN(323,`Ação executada ao clicar no item.`),ug(),Ac(324,`blockquote`)(325,`p`),vN(326,`A função atribuída a esta propriedade receberá o `),Ac(327,`em`),vN(328,`label`),ug(),vN(329,` do item como parâmetro para execução.`),ug()()()(),Ac(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),vN(334,` label`),Kc(335,`br`),ug()()(),Ac(336,`td`,18)(337,`code`,19),vN(338,`string`),ug()(),Ac(339,`td`,21)(340,`p`),vN(341,`Rótulo do item.`),ug()()(),Ac(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),vN(346,` link`),Kc(347,`br`),ug()()(),Ac(348,`td`,18)(349,`code`,19),vN(350,`string`),ug()(),Ac(351,`td`,21)(352,`em`)(353,`strong`),vN(354,`(opcional)`),ug()(),Ac(355,`p`),vN(356,`Url do item.`),ug(),Ac(357,`blockquote`)(358,`p`),vN(359,`Caso o item também contenha uma `),Ac(360,`em`),vN(361,`action`),ug(),vN(362,` definida, a preferência de execução será do `),Ac(363,`em`),vN(364,`link`),ug(),vN(365,`.`),ug()(),Ac(366,`blockquote`)(367,`p`),vN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ac(369,`strong`)(370,`a`,27),vN(371,`Veja um exemplo de como criar rotas aqui`),ug()(),vN(372,`.`),ug()(),Ac(373,`blockquote`)(374,`p`),vN(375,`Esta propriedade é necessária para que a propriedade `),Ac(376,`code`),vN(377,`p-favorite-service`),ug(),vN(378,` consiga favoritar ou desfavoritar.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-breadcrumb-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-breadcrumb-basic-view`)(6,`sample-po-breadcrumb-labs-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Cze,cae,mae,ie,oe,ae],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(xe),kL]})}return n})();var Ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,me]})}return n})();export{Ge as DocPoBreadcrumbModule};