import{$r as Vx,Br as TN,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,Lr as RN,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,bn as s0e,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var pe=()=>({label:`Po Portal`,link:`portal`});var ce=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var se=(n,de)=>[n,de];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&ql(0,`po-breadcrumb`,0),a&2&&cw(`p-items`,RN(3,se,TN(1,pe),TN(2,ce)))},dependencies:[s0e],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Breadcrumb Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-breadcrumb-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=f(Eu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let c=Vx();ql(0,`po-breadcrumb`,2)(1,`po-divider`),Ml(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),Mw(`ngModelChange`,function(d){return Qy(c),yN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Jy(d)}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(d){return Qy(c),yN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Jy(d)}),lg(),f0(),Ml(7,`po-input`,6),Mw(`ngModelChange`,function(d){return Qy(c),yN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Jy(d)}),lg(),f0(),lg(),Ml(8,`div`,3)(9,`po-button`,7),ht(`p-click`,function(){return o.addBreadcrumb()}),lg()()(),ql(10,`po-divider`),Ml(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),Mw(`ngModelChange`,function(d){return Qy(c),yN(o.favoriteService,d)||(o.favoriteService=d),Jy(d)}),lg(),f0(),Ml(15,`po-input`,9),Mw(`ngModelChange`,function(d){return Qy(c),yN(o.paramsService,d)||(o.paramsService=d),Jy(d)}),lg(),f0(),lg(),ql(16,`po-divider`),Ml(17,`div`,3)(18,`po-button`,10),ht(`p-click`,function(){Qy(c);let d=Yx(3),le=Yx(12);return d.reset(),le.reset(),Jy(o.restore())}),lg()()()}if(a&2){let c=Yx(3);cw(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),Up(5),Tw(`ngModel`,o.breadcrumbItem.action),p0(),Up(),Tw(`ngModel`,o.breadcrumbItem.label),p0(),Up(),Tw(`ngModel`,o.breadcrumbItem.link),p0(),Up(2),cw(`p-disabled`,c.invalid),Up(5),Tw(`ngModel`,o.favoriteService),cw(`p-disabled`,!o.breadcrumbItems?.length),p0(),Up(),Tw(`ngModel`,o.paramsService),cw(`p-disabled`,!o.breadcrumbItems?.length),p0()}},dependencies:[IY,wY,CY,Vk,kk,s0e,Zt,nb,lU],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Breadcrumb Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-breadcrumb-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-breadcrumb.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoBreadcrumbComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),lg(),Ml(15,`p`),mN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),lg(),Ml(17,`p`),mN(18,`Caso um endereço seja especificado na propriedade `),Ml(19,`code`),mN(20,`p-favorite-service`),lg(),mN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),lg(),Ml(22,`p`),mN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Ml(24,`code`),mN(25,`p-params-service`),lg(),mN(26,` que recebe um objeto contendo as informações.`),lg(),Ml(27,`h4`),mN(28,`Tokens customizáveis`),lg(),Ml(29,`p`),mN(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(31,`blockquote`)(32,`p`),mN(33,`Para maiores informações, acesse o guia `),Ml(34,`a`,6),mN(35,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(36,`.`),lg()(),Ml(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),mN(41,`Propriedade`),lg(),Ml(42,`th`),mN(43,`Descrição`),lg(),Ml(44,`th`),mN(45,`Valor Padrão`),lg()()(),Ml(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),mN(50,`Default Values`),lg()(),ql(51,`td`)(52,`td`),lg(),Ml(53,`tr`)(54,`td`)(55,`code`),mN(56,`--font-family`),lg()(),Ml(57,`td`),mN(58,`Família tipográfica usada \xA0`),lg(),Ml(59,`td`)(60,`code`),mN(61,`var(--font-family-theme)`),lg()()(),Ml(62,`tr`)(63,`td`)(64,`code`),mN(65,`--color`),lg()(),Ml(66,`td`),mN(67,`Cor principal do icone de lista`),lg(),Ml(68,`td`)(69,`code`),mN(70,`var(--color-action-default)`),lg()()(),Ml(71,`tr`)(72,`td`)(73,`code`),mN(74,`--color-icon`),lg()(),Ml(75,`td`),mN(76,`Cor do icone ">"`),lg(),Ml(77,`td`)(78,`code`),mN(79,`var(--color-neutral-mid-60)`),lg()()(),Ml(80,`tr`)(81,`td`)(82,`code`),mN(83,`--color-current-page`),lg(),mN(84,` \xA0`),lg(),Ml(85,`td`),mN(86,`Cor do pagina atual`),lg(),Ml(87,`td`)(88,`code`),mN(89,`var(--color-neutral-mid-60)`),lg()()()()()(),Ml(90,`div`,7)(91,`h4`,8),mN(92,`Seletor`),lg(),Ml(93,`pre`,9),mN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),lg()(),Ml(95,`h4`,10),mN(96,`Propriedades`),lg(),Ml(97,`table`,11)(98,`tr`,12)(99,`th`,13),mN(100,`Nome`),lg(),Ml(101,`th`,13),mN(102,`Tipo`),lg(),Ml(103,`th`,13),mN(104,`Padrão`),lg(),Ml(105,`th`,13),mN(106,`Descrição`),lg()(),Ml(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),mN(111,` p-favorite-service`),ql(112,`br`),lg()()(),Ml(113,`td`,18)(114,`code`,19),mN(115,`string`),lg()(),Ml(116,`td`,20),mN(117,`-`),lg(),Ml(118,`td`,21)(119,`em`)(120,`strong`),mN(121,`(opcional)`),lg()(),Ml(122,`p`),mN(123,`Permite definir uma URL no componente `),Ml(124,`code`),mN(125,`po-breadcrumb`),lg(),mN(126,` para favoritar ou desfavoritar.`),lg(),Ml(127,`blockquote`)(128,`p`),mN(129,`Para utilizar esta propriedade, o último `),Ml(130,`code`),mN(131,`PoBreadcrumbItem`),lg(),mN(132,` da lista de items da propriedade `),Ml(133,`code`),mN(134,`p-items`),lg(),mN(135,` deve ter um link informado.`),lg()(),Ml(136,`blockquote`)(137,`p`),mN(138,`A API deve estar preparada para retornar um objeto no formato `),Ml(139,`code`),mN(140,`{ isFavorite: boolean }`),lg(),mN(141,`.`),lg()(),Ml(142,`p`),mN(143,`Ao iniciar, o `),Ml(144,`code`),mN(145,`po-breadcrumb`),lg(),mN(146,` faz um GET na URL definida na propriedade `),Ml(147,`code`),mN(148,`p-favorite-service`),lg(),mN(149,` e deve retornar a propriedade
`),Ml(150,`code`),mN(151,`{ isFavorite: boolean }`),lg(),mN(152,` do último `),Ml(153,`code`),mN(154,`PoBreadcrumbItem`),lg(),mN(155,` definido na lista de itens da propriedade `),Ml(156,`code`),mN(157,`p-items`),lg(),mN(158,`.`),lg(),Ml(159,`p`),mN(160,`Ao clicar em favoritar ou desfavoritar o `),Ml(161,`code`),mN(162,`po-breadcrumb`),lg(),mN(163,` faz um POST com o link e a propriedade `),Ml(164,`code`),mN(165,`{ isFavorite: boolean }`),lg(),mN(166,`
definidos no \xFAltimo item da propriedade `),Ml(167,`code`),mN(168,`p-items`),lg(),mN(169,`.`),lg(),Ml(170,`blockquote`)(171,`p`),mN(172,`Caso algum parâmetro seja definido na propriedade `),Ml(173,`code`),mN(174,`p-params-service`),lg(),mN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),lg()(),Ml(176,`p`),mN(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),lg(),Ml(178,`pre`)(179,`code`),mN(180,`https://po-ui.io/sample/api/favorite
`),lg()(),Ml(181,`p`),mN(182,`Ao fazer o GET o `),Ml(183,`code`),mN(184,`po-breadcrumb`),lg(),mN(185,` concatena o link com a URL de serviço. Exemplo:`),lg(),Ml(186,`pre`)(187,`code`),mN(188,`GET http://<domain>/api/favorite?url=/example
`),lg()(),Ml(189,`pre`)(190,`code`),mN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),lg()(),Ml(192,`pre`)(193,`code`),mN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),lg()(),Ml(195,`p`),mN(196,`Caso possua parâmetros definidos na propriedade `),Ml(197,`code`),mN(198,`p-params-service`),lg(),mN(199,`:`),lg(),Ml(200,`pre`)(201,`code`),mN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),lg()(),Ml(203,`p`),mN(204,`Exemplos de retorno:`),lg(),Ml(205,`pre`)(206,`code`),mN(207,`{ isFavorite: true, url: "/example" }
`),lg()(),Ml(208,`pre`)(209,`code`),mN(210,`{ isFavorite: false, url: "/example" }
`),lg()(),Ml(211,`pre`)(212,`code`),mN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),lg()()()(),Ml(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),mN(218,` p-items`),ql(219,`br`),lg()()(),Ml(220,`td`,18)(221,`code`,22),mN(222,`PoBreadcrumbItem[]`),lg()(),Ml(223,`td`,20),mN(224,`-`),lg(),Ml(225,`td`,21)(226,`p`),mN(227,`Lista de itens do `),Ml(228,`em`),mN(229,`breadcrumb`),lg(),mN(230,`.`),lg(),Ml(231,`p`)(232,`strong`),mN(233,`Exemplo:`),lg()(),Ml(234,`pre`)(235,`code`),mN(236,`{ label: 'Po Portal', link: 'portal' }
`),lg()()()(),Ml(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),mN(241,` p-params-service`),ql(242,`br`),lg()()(),Ml(243,`td`,18)(244,`code`,23),mN(245,`object`),lg()(),Ml(246,`td`,20),mN(247,`-`),lg(),Ml(248,`td`,21)(249,`em`)(250,`strong`),mN(251,`(opcional)`),lg()(),Ml(252,`p`),mN(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),lg()()(),Ml(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),mN(258,` p-size`),ql(259,`br`),lg()()(),Ml(260,`td`,18)(261,`code`,19),mN(262,`string`),lg()(),Ml(263,`td`,20)(264,`p`)(265,`code`),mN(266,`medium`),lg()()(),Ml(267,`td`,21)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Define o tamanho do componente entre `),Ml(273,`code`),mN(274,`small`),lg(),mN(275,` ou `),Ml(276,`code`),mN(277,`medium`),lg(),mN(278,`.`),lg(),Ml(279,`blockquote`)(280,`p`),mN(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(282,`code`),mN(283,`medium`),lg(),mN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(285,`a`,24),mN(286,`po-theme`),lg(),mN(287,`.`),lg()()()()(),Ml(288,`h3`),mN(289,`Interfaces`),lg(),Ml(290,`h4`,25)(291,`code`,5),mN(292,`PoBreadcrumbItem`),lg()(),Ml(293,`div`,2)(294,`p`),mN(295,`Interface que define cada item do componente `),Ml(296,`strong`),mN(297,`po-breadcrumb`),lg(),mN(298,`.`),lg()(),Ml(299,`h4`,10),mN(300,`Propriedades`),lg(),Ml(301,`table`,11)(302,`tr`,12)(303,`th`,13),mN(304,`Nome`),lg(),Ml(305,`th`,13),mN(306,`Tipo`),lg(),Ml(307,`th`,13),mN(308,`Descrição`),lg()(),Ml(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),mN(313,` action`),ql(314,`br`),lg()()(),Ml(315,`td`,18)(316,`code`,26),mN(317,`Function`),lg()(),Ml(318,`td`,21)(319,`em`)(320,`strong`),mN(321,`(opcional)`),lg()(),Ml(322,`p`),mN(323,`Ação executada ao clicar no item.`),lg(),Ml(324,`blockquote`)(325,`p`),mN(326,`A função atribuída a esta propriedade receberá o `),Ml(327,`em`),mN(328,`label`),lg(),mN(329,` do item como parâmetro para execução.`),lg()()()(),Ml(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),mN(334,` label`),ql(335,`br`),lg()()(),Ml(336,`td`,18)(337,`code`,19),mN(338,`string`),lg()(),Ml(339,`td`,21)(340,`p`),mN(341,`Rótulo do item.`),lg()()(),Ml(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),mN(346,` link`),ql(347,`br`),lg()()(),Ml(348,`td`,18)(349,`code`,19),mN(350,`string`),lg()(),Ml(351,`td`,21)(352,`em`)(353,`strong`),mN(354,`(opcional)`),lg()(),Ml(355,`p`),mN(356,`Url do item.`),lg(),Ml(357,`blockquote`)(358,`p`),mN(359,`Caso o item também contenha uma `),Ml(360,`em`),mN(361,`action`),lg(),mN(362,` definida, a preferência de execução será do `),Ml(363,`em`),mN(364,`link`),lg(),mN(365,`.`),lg()(),Ml(366,`blockquote`)(367,`p`),mN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ml(369,`strong`)(370,`a`,27),mN(371,`Veja um exemplo de como criar rotas aqui`),lg()(),mN(372,`.`),lg()(),Ml(373,`blockquote`)(374,`p`),mN(375,`Esta propriedade é necessária para que a propriedade `),Ml(376,`code`),mN(377,`p-favorite-service`),lg(),mN(378,` consiga favoritar ou desfavoritar.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-breadcrumb-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-breadcrumb-basic-view`)(6,`sample-po-breadcrumb-labs-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ie,oe,ae],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(xe),NL]})}return n})();var Ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,me]})}return n})();export{Ge as DocPoBreadcrumbModule};