import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,H as Kve,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,er as EN,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var pe=()=>({label:`Po Portal`,link:`portal`});var ce=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var se=(n,de)=>[n,de];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&Gl(0,`po-breadcrumb`,0),a&2&&nw(`p-items`,EN(3,se,_N(1,pe),_N(2,ce)))},dependencies:[Kve],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Breadcrumb Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-breadcrumb-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=f(Eu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let c=Ax();Gl(0,`po-breadcrumb`,2)(1,`po-divider`),Tl(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),ww(`ngModelChange`,function(d){return Ky(c),uN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Xy(d)}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(d){return Ky(c),uN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Xy(d)}),ag(),a0(),Tl(7,`po-input`,6),ww(`ngModelChange`,function(d){return Ky(c),uN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Xy(d)}),ag(),a0(),ag(),Tl(8,`div`,3)(9,`po-button`,7),ht(`p-click`,function(){return o.addBreadcrumb()}),ag()()(),Gl(10,`po-divider`),Tl(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),ww(`ngModelChange`,function(d){return Ky(c),uN(o.favoriteService,d)||(o.favoriteService=d),Xy(d)}),ag(),a0(),Tl(15,`po-input`,9),ww(`ngModelChange`,function(d){return Ky(c),uN(o.paramsService,d)||(o.paramsService=d),Xy(d)}),ag(),a0(),ag(),Gl(16,`po-divider`),Tl(17,`div`,3)(18,`po-button`,10),ht(`p-click`,function(){Ky(c);let d=Bx(3),le=Bx(12);return d.reset(),le.reset(),Xy(o.restore())}),ag()()()}if(a&2){let c=Bx(3);nw(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),jp(5),Ew(`ngModel`,o.breadcrumbItem.action),l0(),jp(),Ew(`ngModel`,o.breadcrumbItem.label),l0(),jp(),Ew(`ngModel`,o.breadcrumbItem.link),l0(),jp(2),nw(`p-disabled`,c.invalid),jp(5),Ew(`ngModel`,o.favoriteService),nw(`p-disabled`,!o.breadcrumbItems?.length),l0(),jp(),Ew(`ngModel`,o.paramsService),nw(`p-disabled`,!o.breadcrumbItems?.length),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Kve,Zt,Xy$1,iU],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Breadcrumb Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-breadcrumb-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-breadcrumb.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoBreadcrumbComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),ag(),Tl(15,`p`),cN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),ag(),Tl(17,`p`),cN(18,`Caso um endereço seja especificado na propriedade `),Tl(19,`code`),cN(20,`p-favorite-service`),ag(),cN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),ag(),Tl(22,`p`),cN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Tl(24,`code`),cN(25,`p-params-service`),ag(),cN(26,` que recebe um objeto contendo as informações.`),ag(),Tl(27,`h4`),cN(28,`Tokens customizáveis`),ag(),Tl(29,`p`),cN(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(31,`blockquote`)(32,`p`),cN(33,`Para maiores informações, acesse o guia `),Tl(34,`a`,6),cN(35,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(36,`.`),ag()(),Tl(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),cN(41,`Propriedade`),ag(),Tl(42,`th`),cN(43,`Descrição`),ag(),Tl(44,`th`),cN(45,`Valor Padrão`),ag()()(),Tl(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),cN(50,`Default Values`),ag()(),Gl(51,`td`)(52,`td`),ag(),Tl(53,`tr`)(54,`td`)(55,`code`),cN(56,`--font-family`),ag()(),Tl(57,`td`),cN(58,`Família tipográfica usada \xA0`),ag(),Tl(59,`td`)(60,`code`),cN(61,`var(--font-family-theme)`),ag()()(),Tl(62,`tr`)(63,`td`)(64,`code`),cN(65,`--color`),ag()(),Tl(66,`td`),cN(67,`Cor principal do icone de lista`),ag(),Tl(68,`td`)(69,`code`),cN(70,`var(--color-action-default)`),ag()()(),Tl(71,`tr`)(72,`td`)(73,`code`),cN(74,`--color-icon`),ag()(),Tl(75,`td`),cN(76,`Cor do icone ">"`),ag(),Tl(77,`td`)(78,`code`),cN(79,`var(--color-neutral-mid-60)`),ag()()(),Tl(80,`tr`)(81,`td`)(82,`code`),cN(83,`--color-current-page`),ag(),cN(84,` \xA0`),ag(),Tl(85,`td`),cN(86,`Cor do pagina atual`),ag(),Tl(87,`td`)(88,`code`),cN(89,`var(--color-neutral-mid-60)`),ag()()()()()(),Tl(90,`div`,7)(91,`h4`,8),cN(92,`Seletor`),ag(),Tl(93,`pre`,9),cN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),ag()(),Tl(95,`h4`,10),cN(96,`Propriedades`),ag(),Tl(97,`table`,11)(98,`tr`,12)(99,`th`,13),cN(100,`Nome`),ag(),Tl(101,`th`,13),cN(102,`Tipo`),ag(),Tl(103,`th`,13),cN(104,`Padrão`),ag(),Tl(105,`th`,13),cN(106,`Descrição`),ag()(),Tl(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),cN(111,` p-favorite-service`),Gl(112,`br`),ag()()(),Tl(113,`td`,18)(114,`code`,19),cN(115,`string`),ag()(),Tl(116,`td`,20),cN(117,`-`),ag(),Tl(118,`td`,21)(119,`em`)(120,`strong`),cN(121,`(opcional)`),ag()(),Tl(122,`p`),cN(123,`Permite definir uma URL no componente `),Tl(124,`code`),cN(125,`po-breadcrumb`),ag(),cN(126,` para favoritar ou desfavoritar.`),ag(),Tl(127,`blockquote`)(128,`p`),cN(129,`Para utilizar esta propriedade, o último `),Tl(130,`code`),cN(131,`PoBreadcrumbItem`),ag(),cN(132,` da lista de items da propriedade `),Tl(133,`code`),cN(134,`p-items`),ag(),cN(135,` deve ter um link informado.`),ag()(),Tl(136,`blockquote`)(137,`p`),cN(138,`A API deve estar preparada para retornar um objeto no formato `),Tl(139,`code`),cN(140,`{ isFavorite: boolean }`),ag(),cN(141,`.`),ag()(),Tl(142,`p`),cN(143,`Ao iniciar, o `),Tl(144,`code`),cN(145,`po-breadcrumb`),ag(),cN(146,` faz um GET na URL definida na propriedade `),Tl(147,`code`),cN(148,`p-favorite-service`),ag(),cN(149,` e deve retornar a propriedade
`),Tl(150,`code`),cN(151,`{ isFavorite: boolean }`),ag(),cN(152,` do último `),Tl(153,`code`),cN(154,`PoBreadcrumbItem`),ag(),cN(155,` definido na lista de itens da propriedade `),Tl(156,`code`),cN(157,`p-items`),ag(),cN(158,`.`),ag(),Tl(159,`p`),cN(160,`Ao clicar em favoritar ou desfavoritar o `),Tl(161,`code`),cN(162,`po-breadcrumb`),ag(),cN(163,` faz um POST com o link e a propriedade `),Tl(164,`code`),cN(165,`{ isFavorite: boolean }`),ag(),cN(166,`
definidos no \xFAltimo item da propriedade `),Tl(167,`code`),cN(168,`p-items`),ag(),cN(169,`.`),ag(),Tl(170,`blockquote`)(171,`p`),cN(172,`Caso algum parâmetro seja definido na propriedade `),Tl(173,`code`),cN(174,`p-params-service`),ag(),cN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),ag()(),Tl(176,`p`),cN(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),ag(),Tl(178,`pre`)(179,`code`),cN(180,`https://po-ui.io/sample/api/favorite
`),ag()(),Tl(181,`p`),cN(182,`Ao fazer o GET o `),Tl(183,`code`),cN(184,`po-breadcrumb`),ag(),cN(185,` concatena o link com a URL de serviço. Exemplo:`),ag(),Tl(186,`pre`)(187,`code`),cN(188,`GET http://<domain>/api/favorite?url=/example
`),ag()(),Tl(189,`pre`)(190,`code`),cN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),ag()(),Tl(192,`pre`)(193,`code`),cN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),ag()(),Tl(195,`p`),cN(196,`Caso possua parâmetros definidos na propriedade `),Tl(197,`code`),cN(198,`p-params-service`),ag(),cN(199,`:`),ag(),Tl(200,`pre`)(201,`code`),cN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ag()(),Tl(203,`p`),cN(204,`Exemplos de retorno:`),ag(),Tl(205,`pre`)(206,`code`),cN(207,`{ isFavorite: true, url: "/example" }
`),ag()(),Tl(208,`pre`)(209,`code`),cN(210,`{ isFavorite: false, url: "/example" }
`),ag()(),Tl(211,`pre`)(212,`code`),cN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ag()()()(),Tl(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),cN(218,` p-items`),Gl(219,`br`),ag()()(),Tl(220,`td`,18)(221,`code`,22),cN(222,`PoBreadcrumbItem[]`),ag()(),Tl(223,`td`,20),cN(224,`-`),ag(),Tl(225,`td`,21)(226,`p`),cN(227,`Lista de itens do `),Tl(228,`em`),cN(229,`breadcrumb`),ag(),cN(230,`.`),ag(),Tl(231,`p`)(232,`strong`),cN(233,`Exemplo:`),ag()(),Tl(234,`pre`)(235,`code`),cN(236,`{ label: 'Po Portal', link: 'portal' }
`),ag()()()(),Tl(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),cN(241,` p-params-service`),Gl(242,`br`),ag()()(),Tl(243,`td`,18)(244,`code`,23),cN(245,`object`),ag()(),Tl(246,`td`,20),cN(247,`-`),ag(),Tl(248,`td`,21)(249,`em`)(250,`strong`),cN(251,`(opcional)`),ag()(),Tl(252,`p`),cN(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ag()()(),Tl(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),cN(258,` p-size`),Gl(259,`br`),ag()()(),Tl(260,`td`,18)(261,`code`,19),cN(262,`string`),ag()(),Tl(263,`td`,20)(264,`p`)(265,`code`),cN(266,`medium`),ag()()(),Tl(267,`td`,21)(268,`em`)(269,`strong`),cN(270,`(opcional)`),ag()(),Tl(271,`p`),cN(272,`Define o tamanho do componente entre `),Tl(273,`code`),cN(274,`small`),ag(),cN(275,` ou `),Tl(276,`code`),cN(277,`medium`),ag(),cN(278,`.`),ag(),Tl(279,`blockquote`)(280,`p`),cN(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(282,`code`),cN(283,`medium`),ag(),cN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(285,`a`,24),cN(286,`po-theme`),ag(),cN(287,`.`),ag()()()()(),Tl(288,`h3`),cN(289,`Interfaces`),ag(),Tl(290,`h4`,25)(291,`code`,5),cN(292,`PoBreadcrumbItem`),ag()(),Tl(293,`div`,2)(294,`p`),cN(295,`Interface que define cada item do componente `),Tl(296,`strong`),cN(297,`po-breadcrumb`),ag(),cN(298,`.`),ag()(),Tl(299,`h4`,10),cN(300,`Propriedades`),ag(),Tl(301,`table`,11)(302,`tr`,12)(303,`th`,13),cN(304,`Nome`),ag(),Tl(305,`th`,13),cN(306,`Tipo`),ag(),Tl(307,`th`,13),cN(308,`Descrição`),ag()(),Tl(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),cN(313,` action`),Gl(314,`br`),ag()()(),Tl(315,`td`,18)(316,`code`,26),cN(317,`Function`),ag()(),Tl(318,`td`,21)(319,`em`)(320,`strong`),cN(321,`(opcional)`),ag()(),Tl(322,`p`),cN(323,`Ação executada ao clicar no item.`),ag(),Tl(324,`blockquote`)(325,`p`),cN(326,`A função atribuída a esta propriedade receberá o `),Tl(327,`em`),cN(328,`label`),ag(),cN(329,` do item como parâmetro para execução.`),ag()()()(),Tl(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),cN(334,` label`),Gl(335,`br`),ag()()(),Tl(336,`td`,18)(337,`code`,19),cN(338,`string`),ag()(),Tl(339,`td`,21)(340,`p`),cN(341,`Rótulo do item.`),ag()()(),Tl(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),cN(346,` link`),Gl(347,`br`),ag()()(),Tl(348,`td`,18)(349,`code`,19),cN(350,`string`),ag()(),Tl(351,`td`,21)(352,`em`)(353,`strong`),cN(354,`(opcional)`),ag()(),Tl(355,`p`),cN(356,`Url do item.`),ag(),Tl(357,`blockquote`)(358,`p`),cN(359,`Caso o item também contenha uma `),Tl(360,`em`),cN(361,`action`),ag(),cN(362,` definida, a preferência de execução será do `),Tl(363,`em`),cN(364,`link`),ag(),cN(365,`.`),ag()(),Tl(366,`blockquote`)(367,`p`),cN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(369,`strong`)(370,`a`,27),cN(371,`Veja um exemplo de como criar rotas aqui`),ag()(),cN(372,`.`),ag()(),Tl(373,`blockquote`)(374,`p`),cN(375,`Esta propriedade é necessária para que a propriedade `),Tl(376,`code`),cN(377,`p-favorite-service`),ag(),cN(378,` consiga favoritar ou desfavoritar.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-breadcrumb-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-breadcrumb-basic-view`)(6,`sample-po-breadcrumb-labs-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ie,oe,ae],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(xe),bL]})}return n})();var Ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,me]})}return n})();export{Ge as DocPoBreadcrumbModule};