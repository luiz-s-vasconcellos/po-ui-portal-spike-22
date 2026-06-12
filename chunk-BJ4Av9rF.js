import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,bC as tde,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Hl(0,"po-breadcrumb",0),a&2&&ZE("p-items",sN(3,se,iN(1,pe),iN(2,ce)));},dependencies:[tde],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Breadcrumb Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-breadcrumb-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ee],encapsulation:2})}return n})();var ne=(()=>{class n{poNotification=f(Xp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=gx();Hl(0,"po-breadcrumb",2)(1,"po-divider"),Cl(2,"form",null,0)(4,"div",3)(5,"po-input",4),gw("ngModelChange",function(d){return Jy(c),Zx(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),e_(d)}),og(),Z0(),Cl(6,"po-input",5),gw("ngModelChange",function(d){return Jy(c),Zx(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),e_(d)}),og(),Z0(),Cl(7,"po-input",6),gw("ngModelChange",function(d){return Jy(c),Zx(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),e_(d)}),og(),Z0(),og(),Cl(8,"div",3)(9,"po-button",7),dt("p-click",function(){return o.addBreadcrumb()}),og()()(),Hl(10,"po-divider"),Cl(11,"form",null,1)(13,"div",3)(14,"po-input",8),gw("ngModelChange",function(d){return Jy(c),Zx(o.favoriteService,d)||(o.favoriteService=d),e_(d)}),og(),Z0(),Cl(15,"po-input",9),gw("ngModelChange",function(d){return Jy(c),Zx(o.paramsService,d)||(o.paramsService=d),e_(d)}),og(),Z0(),og(),Hl(16,"po-divider"),Cl(17,"div",3)(18,"po-button",10),dt("p-click",function(){Jy(c);let d=Sx(3),le=Sx(12);return d.reset(),le.reset(),e_(o.restore())}),og()()();}if(a&2){let c=Sx(3);ZE("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Lp(5),pw("ngModel",o.breadcrumbItem.action),X0(),Lp(),pw("ngModel",o.breadcrumbItem.label),X0(),Lp(),pw("ngModel",o.breadcrumbItem.link),X0(),Lp(2),ZE("p-disabled",c.invalid),Lp(5),pw("ngModel",o.favoriteService),ZE("p-disabled",!o.breadcrumbItems?.length),X0(),Lp(),pw("ngModel",o.paramsService),ZE("p-disabled",!o.breadcrumbItems?.length),X0();}},dependencies:[lY,sY,aY,gk,fk,tde,Qt,_v,q3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Breadcrumb Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-breadcrumb-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-breadcrumb."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoBreadcrumbComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),og(),Cl(15,"p"),qx(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),og(),Cl(17,"p"),qx(18,"Caso um endere\xE7o seja especificado na propriedade "),Cl(19,"code"),qx(20,"p-favorite-service"),og(),qx(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),og(),Cl(22,"p"),qx(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Cl(24,"code"),qx(25,"p-params-service"),og(),qx(26," que recebe um objeto contendo as informa\xE7\xF5es."),og(),Cl(27,"h4"),qx(28,"Tokens customiz\xE1veis"),og(),Cl(29,"p"),qx(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(31,"blockquote")(32,"p"),qx(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(34,"a",6),qx(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(36,"."),og()(),Cl(37,"table")(38,"thead")(39,"tr")(40,"th"),qx(41,"Propriedade"),og(),Cl(42,"th"),qx(43,"Descri\xE7\xE3o"),og(),Cl(44,"th"),qx(45,"Valor Padr\xE3o"),og()()(),Cl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),qx(50,"Default Values"),og()(),Hl(51,"td")(52,"td"),og(),Cl(53,"tr")(54,"td")(55,"code"),qx(56,"--font-family"),og()(),Cl(57,"td"),qx(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),og(),Cl(59,"td")(60,"code"),qx(61,"var(--font-family-theme)"),og()()(),Cl(62,"tr")(63,"td")(64,"code"),qx(65,"--color"),og()(),Cl(66,"td"),qx(67,"Cor principal do icone de lista"),og(),Cl(68,"td")(69,"code"),qx(70,"var(--color-action-default)"),og()()(),Cl(71,"tr")(72,"td")(73,"code"),qx(74,"--color-icon"),og()(),Cl(75,"td"),qx(76,'Cor do icone ">"'),og(),Cl(77,"td")(78,"code"),qx(79,"var(--color-neutral-mid-60)"),og()()(),Cl(80,"tr")(81,"td")(82,"code"),qx(83,"--color-current-page"),og(),qx(84," \xA0"),og(),Cl(85,"td"),qx(86,"Cor do pagina atual"),og(),Cl(87,"td")(88,"code"),qx(89,"var(--color-neutral-mid-60)"),og()()()()()(),Cl(90,"div",7)(91,"h4",8),qx(92,"Seletor"),og(),Cl(93,"pre",9),qx(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),og()(),Cl(95,"h4",10),qx(96,"Propriedades"),og(),Cl(97,"table",11)(98,"tr",12)(99,"th",13),qx(100,"Nome"),og(),Cl(101,"th",13),qx(102,"Tipo"),og(),Cl(103,"th",13),qx(104,"Padr\xE3o"),og(),Cl(105,"th",13),qx(106,"Descri\xE7\xE3o"),og()(),Cl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),qx(111," p-favorite-service"),Hl(112,"br"),og()()(),Cl(113,"td",18)(114,"code",19),qx(115,"string"),og()(),Cl(116,"td",20),qx(117,"-"),og(),Cl(118,"td",21)(119,"em")(120,"strong"),qx(121,"(opcional)"),og()(),Cl(122,"p"),qx(123,"Permite definir uma URL no componente "),Cl(124,"code"),qx(125,"po-breadcrumb"),og(),qx(126," para favoritar ou desfavoritar."),og(),Cl(127,"blockquote")(128,"p"),qx(129,"Para utilizar esta propriedade, o \xFAltimo "),Cl(130,"code"),qx(131,"PoBreadcrumbItem"),og(),qx(132," da lista de items da propriedade "),Cl(133,"code"),qx(134,"p-items"),og(),qx(135," deve ter um link informado."),og()(),Cl(136,"blockquote")(137,"p"),qx(138,"A API deve estar preparada para retornar um objeto no formato "),Cl(139,"code"),qx(140,"{ isFavorite: boolean }"),og(),qx(141,"."),og()(),Cl(142,"p"),qx(143,"Ao iniciar, o "),Cl(144,"code"),qx(145,"po-breadcrumb"),og(),qx(146," faz um GET na URL definida na propriedade "),Cl(147,"code"),qx(148,"p-favorite-service"),og(),qx(149,` e deve retornar a propriedade
`),Cl(150,"code"),qx(151,"{ isFavorite: boolean }"),og(),qx(152," do \xFAltimo "),Cl(153,"code"),qx(154,"PoBreadcrumbItem"),og(),qx(155," definido na lista de itens da propriedade "),Cl(156,"code"),qx(157,"p-items"),og(),qx(158,"."),og(),Cl(159,"p"),qx(160,"Ao clicar em favoritar ou desfavoritar o "),Cl(161,"code"),qx(162,"po-breadcrumb"),og(),qx(163," faz um POST com o link e a propriedade "),Cl(164,"code"),qx(165,"{ isFavorite: boolean }"),og(),qx(166,`
definidos no \xFAltimo item da propriedade `),Cl(167,"code"),qx(168,"p-items"),og(),qx(169,"."),og(),Cl(170,"blockquote")(171,"p"),qx(172,"Caso algum par\xE2metro seja definido na propriedade "),Cl(173,"code"),qx(174,"p-params-service"),og(),qx(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),og()(),Cl(176,"p"),qx(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),og(),Cl(178,"pre")(179,"code"),qx(180,`https://po-ui.io/sample/api/favorite
`),og()(),Cl(181,"p"),qx(182,"Ao fazer o GET o "),Cl(183,"code"),qx(184,"po-breadcrumb"),og(),qx(185," concatena o link com a URL de servi\xE7o. Exemplo:"),og(),Cl(186,"pre")(187,"code"),qx(188,`GET http://<domain>/api/favorite?url=/example
`),og()(),Cl(189,"pre")(190,"code"),qx(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),og()(),Cl(192,"pre")(193,"code"),qx(194,`POST
payload: { isFavorite: true, url: '/example' }
`),og()(),Cl(195,"p"),qx(196,"Caso possua par\xE2metros definidos na propriedade "),Cl(197,"code"),qx(198,"p-params-service"),og(),qx(199,":"),og(),Cl(200,"pre")(201,"code"),qx(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()(),Cl(203,"p"),qx(204,"Exemplos de retorno:"),og(),Cl(205,"pre")(206,"code"),qx(207,`{ isFavorite: true, url: "/example" }
`),og()(),Cl(208,"pre")(209,"code"),qx(210,`{ isFavorite: false, url: "/example" }
`),og()(),Cl(211,"pre")(212,"code"),qx(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()()()(),Cl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),qx(218," p-items"),Hl(219,"br"),og()()(),Cl(220,"td",18)(221,"code",22),qx(222,"PoBreadcrumbItem[]"),og()(),Cl(223,"td",20),qx(224,"-"),og(),Cl(225,"td",21)(226,"p"),qx(227,"Lista de itens do "),Cl(228,"em"),qx(229,"breadcrumb"),og(),qx(230,"."),og(),Cl(231,"p")(232,"strong"),qx(233,"Exemplo:"),og()(),Cl(234,"pre")(235,"code"),qx(236,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Cl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),qx(241," p-params-service"),Hl(242,"br"),og()()(),Cl(243,"td",18)(244,"code",23),qx(245,"object"),og()(),Cl(246,"td",20),qx(247,"-"),og(),Cl(248,"td",21)(249,"em")(250,"strong"),qx(251,"(opcional)"),og()(),Cl(252,"p"),qx(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()(),Cl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),qx(258," p-size"),Hl(259,"br"),og()()(),Cl(260,"td",18)(261,"code",19),qx(262,"string"),og()(),Cl(263,"td",20)(264,"p")(265,"code"),qx(266,"medium"),og()()(),Cl(267,"td",21)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Define o tamanho do componente entre "),Cl(273,"code"),qx(274,"small"),og(),qx(275," ou "),Cl(276,"code"),qx(277,"medium"),og(),qx(278,"."),og(),Cl(279,"blockquote")(280,"p"),qx(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(282,"code"),qx(283,"medium"),og(),qx(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(285,"a",24),qx(286,"po-theme"),og(),qx(287,"."),og()()()()(),Cl(288,"h3"),qx(289,"Interfaces"),og(),Cl(290,"h4",25)(291,"code",5),qx(292,"PoBreadcrumbItem"),og()(),Cl(293,"div",2)(294,"p"),qx(295,"Interface que define cada item do componente "),Cl(296,"strong"),qx(297,"po-breadcrumb"),og(),qx(298,"."),og()(),Cl(299,"h4",10),qx(300,"Propriedades"),og(),Cl(301,"table",11)(302,"tr",12)(303,"th",13),qx(304,"Nome"),og(),Cl(305,"th",13),qx(306,"Tipo"),og(),Cl(307,"th",13),qx(308,"Descri\xE7\xE3o"),og()(),Cl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),qx(313," action"),Hl(314,"br"),og()()(),Cl(315,"td",18)(316,"code",26),qx(317,"Function"),og()(),Cl(318,"td",21)(319,"em")(320,"strong"),qx(321,"(opcional)"),og()(),Cl(322,"p"),qx(323,"A\xE7\xE3o executada ao clicar no item."),og(),Cl(324,"blockquote")(325,"p"),qx(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Cl(327,"em"),qx(328,"label"),og(),qx(329," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Cl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),qx(334," label"),Hl(335,"br"),og()()(),Cl(336,"td",18)(337,"code",19),qx(338,"string"),og()(),Cl(339,"td",21)(340,"p"),qx(341,"R\xF3tulo do item."),og()()(),Cl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),qx(346," link"),Hl(347,"br"),og()()(),Cl(348,"td",18)(349,"code",19),qx(350,"string"),og()(),Cl(351,"td",21)(352,"em")(353,"strong"),qx(354,"(opcional)"),og()(),Cl(355,"p"),qx(356,"Url do item."),og(),Cl(357,"blockquote")(358,"p"),qx(359,"Caso o item tamb\xE9m contenha uma "),Cl(360,"em"),qx(361,"action"),og(),qx(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Cl(363,"em"),qx(364,"link"),og(),qx(365,"."),og()(),Cl(366,"blockquote")(367,"p"),qx(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Cl(369,"strong")(370,"a",27),qx(371,"Veja um exemplo de como criar rotas aqui"),og()(),qx(372,"."),og()(),Cl(373,"blockquote")(374,"p"),qx(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Cl(376,"code"),qx(377,"p-favorite-service"),og(),qx(378," consiga favoritar ou desfavoritar."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-breadcrumb-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,oe,ae],encapsulation:2})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(xe),bL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,me]})}return n})();export{Ge as DocPoBreadcrumbModule};