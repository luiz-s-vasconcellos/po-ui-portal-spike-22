import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,b4 as $c,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var se=()=>({label:"Po Portal",link:"portal"}),ue=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),be=(n,le)=>[n,le],$=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Ul(0,"po-breadcrumb",0),a&2&&YE("p-items",eN(3,be,Qx(1,se),Qx(2,ue)));},dependencies:[$c],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Breadcrumb Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-breadcrumb-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,$],encapsulation:2})}return n})();var oe=(()=>{class n{poNotification=f(Bp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=lx();Ul(0,"po-breadcrumb",2)(1,"po-divider"),wl(2,"form",null,0)(4,"div",3)(5,"po-input",4),pw("ngModelChange",function(d){return Qy(c),$x(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Jy(d)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(d){return Qy(c),$x(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Jy(d)}),ng(),$0(),wl(7,"po-input",6),pw("ngModelChange",function(d){return Qy(c),$x(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Jy(d)}),ng(),$0(),ng(),wl(8,"div",3)(9,"po-button",7),ut("p-click",function(){return o.addBreadcrumb()}),ng()()(),Ul(10,"po-divider"),wl(11,"form",null,1)(13,"div",3)(14,"po-input",8),pw("ngModelChange",function(d){return Qy(c),$x(o.favoriteService,d)||(o.favoriteService=d),Jy(d)}),ng(),$0(),wl(15,"po-input",9),pw("ngModelChange",function(d){return Qy(c),$x(o.paramsService,d)||(o.paramsService=d),Jy(d)}),ng(),$0(),ng(),Ul(16,"po-divider"),wl(17,"div",3)(18,"po-button",10),ut("p-click",function(){Qy(c);let d=_x(3),pe=_x(12);return d.reset(),pe.reset(),Jy(o.restore())}),ng()()();}if(a&2){let c=_x(3);YE("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Pp(5),hw("ngModel",o.breadcrumbItem.action),G0(),Pp(),hw("ngModel",o.breadcrumbItem.label),G0(),Pp(),hw("ngModel",o.breadcrumbItem.link),G0(),Pp(2),YE("p-disabled",c.invalid),Pp(5),hw("ngModel",o.favoriteService),YE("p-disabled",!o.breadcrumbItems?.length),G0(),Pp(),hw("ngModel",o.paramsService),YE("p-disabled",!o.breadcrumbItems?.length),G0();}},dependencies:[aY,iY,oY,ck,ok,$c,Pe$1,di,Yo],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Breadcrumb Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-breadcrumb-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ge,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,oe],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-breadcrumb."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoBreadcrumbComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),ng(),wl(15,"p"),Ux(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),ng(),wl(17,"p"),Ux(18,"Caso um endere\xE7o seja especificado na propriedade "),wl(19,"code"),Ux(20,"p-favorite-service"),ng(),Ux(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),ng(),wl(22,"p"),Ux(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),wl(24,"code"),Ux(25,"p-params-service"),ng(),Ux(26," que recebe um objeto contendo as informa\xE7\xF5es."),ng(),wl(27,"h4"),Ux(28,"Tokens customiz\xE1veis"),ng(),wl(29,"p"),Ux(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(31,"blockquote")(32,"p"),Ux(33,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(34,"a",6),Ux(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(36,"."),ng()(),wl(37,"table")(38,"thead")(39,"tr")(40,"th"),Ux(41,"Propriedade"),ng(),wl(42,"th"),Ux(43,"Descri\xE7\xE3o"),ng(),wl(44,"th"),Ux(45,"Valor Padr\xE3o"),ng()()(),wl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),Ux(50,"Default Values"),ng()(),Ul(51,"td")(52,"td"),ng(),wl(53,"tr")(54,"td")(55,"code"),Ux(56,"--font-family"),ng()(),wl(57,"td"),Ux(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),ng(),wl(59,"td")(60,"code"),Ux(61,"var(--font-family-theme)"),ng()()(),wl(62,"tr")(63,"td")(64,"code"),Ux(65,"--color"),ng()(),wl(66,"td"),Ux(67,"Cor principal do icone de lista"),ng(),wl(68,"td")(69,"code"),Ux(70,"var(--color-action-default)"),ng()()(),wl(71,"tr")(72,"td")(73,"code"),Ux(74,"--color-icon"),ng()(),wl(75,"td"),Ux(76,'Cor do icone ">"'),ng(),wl(77,"td")(78,"code"),Ux(79,"var(--color-neutral-mid-60)"),ng()()(),wl(80,"tr")(81,"td")(82,"code"),Ux(83,"--color-current-page"),ng(),Ux(84," \xA0"),ng(),wl(85,"td"),Ux(86,"Cor do pagina atual"),ng(),wl(87,"td")(88,"code"),Ux(89,"var(--color-neutral-mid-60)"),ng()()()()()(),wl(90,"div",7)(91,"h4",8),Ux(92,"Seletor"),ng(),wl(93,"pre",9),Ux(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),ng()(),wl(95,"h4",10),Ux(96,"Propriedades"),ng(),wl(97,"table",11)(98,"tr",12)(99,"th",13),Ux(100,"Nome"),ng(),wl(101,"th",13),Ux(102,"Tipo"),ng(),wl(103,"th",13),Ux(104,"Padr\xE3o"),ng(),wl(105,"th",13),Ux(106,"Descri\xE7\xE3o"),ng()(),wl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),Ux(111," p-favorite-service"),Ul(112,"br"),ng()()(),wl(113,"td",18)(114,"code",19),Ux(115,"string"),ng()(),wl(116,"td",20),Ux(117,"-"),ng(),wl(118,"td",21)(119,"em")(120,"strong"),Ux(121,"(opcional)"),ng()(),wl(122,"p"),Ux(123,"Permite definir uma URL no componente "),wl(124,"code"),Ux(125,"po-breadcrumb"),ng(),Ux(126," para favoritar ou desfavoritar."),ng(),wl(127,"blockquote")(128,"p"),Ux(129,"Para utilizar esta propriedade, o \xFAltimo "),wl(130,"code"),Ux(131,"PoBreadcrumbItem"),ng(),Ux(132," da lista de items da propriedade "),wl(133,"code"),Ux(134,"p-items"),ng(),Ux(135," deve ter um link informado."),ng()(),wl(136,"blockquote")(137,"p"),Ux(138,"A API deve estar preparada para retornar um objeto no formato "),wl(139,"code"),Ux(140,"{ isFavorite: boolean }"),ng(),Ux(141,"."),ng()(),wl(142,"p"),Ux(143,"Ao iniciar, o "),wl(144,"code"),Ux(145,"po-breadcrumb"),ng(),Ux(146," faz um GET na URL definida na propriedade "),wl(147,"code"),Ux(148,"p-favorite-service"),ng(),Ux(149,` e deve retornar a propriedade
`),wl(150,"code"),Ux(151,"{ isFavorite: boolean }"),ng(),Ux(152," do \xFAltimo "),wl(153,"code"),Ux(154,"PoBreadcrumbItem"),ng(),Ux(155," definido na lista de itens da propriedade "),wl(156,"code"),Ux(157,"p-items"),ng(),Ux(158,"."),ng(),wl(159,"p"),Ux(160,"Ao clicar em favoritar ou desfavoritar o "),wl(161,"code"),Ux(162,"po-breadcrumb"),ng(),Ux(163," faz um POST com o link e a propriedade "),wl(164,"code"),Ux(165,"{ isFavorite: boolean }"),ng(),Ux(166,`
definidos no \xFAltimo item da propriedade `),wl(167,"code"),Ux(168,"p-items"),ng(),Ux(169,"."),ng(),wl(170,"blockquote")(171,"p"),Ux(172,"Caso algum par\xE2metro seja definido na propriedade "),wl(173,"code"),Ux(174,"p-params-service"),ng(),Ux(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),ng()(),wl(176,"p"),Ux(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),ng(),wl(178,"pre")(179,"code"),Ux(180,`https://po-ui.io/sample/api/favorite
`),ng()(),wl(181,"p"),Ux(182,"Ao fazer o GET o "),wl(183,"code"),Ux(184,"po-breadcrumb"),ng(),Ux(185," concatena o link com a URL de servi\xE7o. Exemplo:"),ng(),wl(186,"pre")(187,"code"),Ux(188,`GET http://<domain>/api/favorite?url=/example
`),ng()(),wl(189,"pre")(190,"code"),Ux(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),ng()(),wl(192,"pre")(193,"code"),Ux(194,`POST
payload: { isFavorite: true, url: '/example' }
`),ng()(),wl(195,"p"),Ux(196,"Caso possua par\xE2metros definidos na propriedade "),wl(197,"code"),Ux(198,"p-params-service"),ng(),Ux(199,":"),ng(),wl(200,"pre")(201,"code"),Ux(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ng()(),wl(203,"p"),Ux(204,"Exemplos de retorno:"),ng(),wl(205,"pre")(206,"code"),Ux(207,`{ isFavorite: true, url: "/example" }
`),ng()(),wl(208,"pre")(209,"code"),Ux(210,`{ isFavorite: false, url: "/example" }
`),ng()(),wl(211,"pre")(212,"code"),Ux(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),ng()()()(),wl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),Ux(218," p-items"),Ul(219,"br"),ng()()(),wl(220,"td",18)(221,"code",22),Ux(222,"PoBreadcrumbItem[]"),ng()(),wl(223,"td",20),Ux(224,"-"),ng(),wl(225,"td",21)(226,"p"),Ux(227,"Lista de itens do "),wl(228,"em"),Ux(229,"breadcrumb"),ng(),Ux(230,"."),ng(),wl(231,"p")(232,"strong"),Ux(233,"Exemplo:"),ng()(),wl(234,"pre")(235,"code"),Ux(236,`{ label: 'Po Portal', link: 'portal' }
`),ng()()()(),wl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),Ux(241," p-params-service"),Ul(242,"br"),ng()()(),wl(243,"td",18)(244,"code",23),Ux(245,"object"),ng()(),wl(246,"td",20),Ux(247,"-"),ng(),wl(248,"td",21)(249,"em")(250,"strong"),Ux(251,"(opcional)"),ng()(),wl(252,"p"),Ux(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),ng()()(),wl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),Ux(258," p-size"),Ul(259,"br"),ng()()(),wl(260,"td",18)(261,"code",19),Ux(262,"string"),ng()(),wl(263,"td",20)(264,"p")(265,"code"),Ux(266,"medium"),ng()()(),wl(267,"td",21)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Define o tamanho do componente entre "),wl(273,"code"),Ux(274,"small"),ng(),Ux(275," ou "),wl(276,"code"),Ux(277,"medium"),ng(),Ux(278,"."),ng(),wl(279,"blockquote")(280,"p"),Ux(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(282,"code"),Ux(283,"medium"),ng(),Ux(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(285,"a",24),Ux(286,"po-theme"),ng(),Ux(287,"."),ng()()()()(),wl(288,"h3"),Ux(289,"Interfaces"),ng(),wl(290,"h4",25)(291,"code",5),Ux(292,"PoBreadcrumbItem"),ng()(),wl(293,"div",2)(294,"p"),Ux(295,"Interface que define cada item do componente "),wl(296,"strong"),Ux(297,"po-breadcrumb"),ng(),Ux(298,"."),ng()(),wl(299,"h4",10),Ux(300,"Propriedades"),ng(),wl(301,"table",11)(302,"tr",12)(303,"th",13),Ux(304,"Nome"),ng(),wl(305,"th",13),Ux(306,"Tipo"),ng(),wl(307,"th",13),Ux(308,"Descri\xE7\xE3o"),ng()(),wl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),Ux(313," action"),Ul(314,"br"),ng()()(),wl(315,"td",18)(316,"code",26),Ux(317,"Function"),ng()(),wl(318,"td",21)(319,"em")(320,"strong"),Ux(321,"(opcional)"),ng()(),wl(322,"p"),Ux(323,"A\xE7\xE3o executada ao clicar no item."),ng(),wl(324,"blockquote")(325,"p"),Ux(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),wl(327,"em"),Ux(328,"label"),ng(),Ux(329," do item como par\xE2metro para execu\xE7\xE3o."),ng()()()(),wl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),Ux(334," label"),Ul(335,"br"),ng()()(),wl(336,"td",18)(337,"code",19),Ux(338,"string"),ng()(),wl(339,"td",21)(340,"p"),Ux(341,"R\xF3tulo do item."),ng()()(),wl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),Ux(346," link"),Ul(347,"br"),ng()()(),wl(348,"td",18)(349,"code",19),Ux(350,"string"),ng()(),wl(351,"td",21)(352,"em")(353,"strong"),Ux(354,"(opcional)"),ng()(),wl(355,"p"),Ux(356,"Url do item."),ng(),wl(357,"blockquote")(358,"p"),Ux(359,"Caso o item tamb\xE9m contenha uma "),wl(360,"em"),Ux(361,"action"),ng(),Ux(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),wl(363,"em"),Ux(364,"link"),ng(),Ux(365,"."),ng()(),wl(366,"blockquote")(367,"p"),Ux(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),wl(369,"strong")(370,"a",27),Ux(371,"Veja um exemplo de como criar rotas aqui"),ng()(),Ux(372,"."),ng()(),wl(373,"blockquote")(374,"p"),Ux(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),wl(376,"code"),Ux(377,"p-favorite-service"),ng(),Ux(378," consiga favoritar ou desfavoritar."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return n})();var me=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-breadcrumb-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,ne,ae,re],encapsulation:2})}return n})();var Pe=[{path:"",component:me}],de=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Pe),vL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[u5,de]})}return n})();export{Ze as DocPoBreadcrumbModule};