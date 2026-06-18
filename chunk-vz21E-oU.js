import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,by as Wpe,M as Wl,T as tw,bM as fN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Wl(0,"po-breadcrumb",0),a&2&&tw("p-items",fN(3,se,uN(1,pe),uN(2,ce)));},dependencies:[Wpe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Breadcrumb Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ee],encapsulation:2})}return n})();var ne=(()=>{class n{poNotification=f(Yp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=Ex();Wl(0,"po-breadcrumb",2)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(d){return Xy(c),tN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Qy(d)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(d){return Xy(c),tN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Qy(d)}),sg(),JA(),Sl(7,"po-input",6),Ew("ngModelChange",function(d){return Xy(c),tN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Qy(d)}),sg(),JA(),sg(),Sl(8,"div",3)(9,"po-button",7),ht("p-click",function(){return o.addBreadcrumb()}),sg()()(),Wl(10,"po-divider"),Sl(11,"form",null,1)(13,"div",3)(14,"po-input",8),Ew("ngModelChange",function(d){return Xy(c),tN(o.favoriteService,d)||(o.favoriteService=d),Qy(d)}),sg(),JA(),Sl(15,"po-input",9),Ew("ngModelChange",function(d){return Xy(c),tN(o.paramsService,d)||(o.paramsService=d),Qy(d)}),sg(),JA(),sg(),Wl(16,"po-divider"),Sl(17,"div",3)(18,"po-button",10),ht("p-click",function(){Xy(c);let d=xx(3),le=xx(12);return d.reset(),le.reset(),Qy(o.restore())}),sg()()();}if(a&2){let c=xx(3);tw("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Vp(5),Dw("ngModel",o.breadcrumbItem.action),t0(),Vp(),Dw("ngModel",o.breadcrumbItem.label),t0(),Vp(),Dw("ngModel",o.breadcrumbItem.link),t0(),Vp(2),tw("p-disabled",c.invalid),Vp(5),Dw("ngModel",o.favoriteService),tw("p-disabled",!o.breadcrumbItems?.length),t0(),Vp(),Dw("ngModel",o.paramsService),tw("p-disabled",!o.breadcrumbItems?.length),t0();}},dependencies:[J9,K9,X9,Dk,vk,Wpe,Qt,mv,F3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Breadcrumb Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-breadcrumb."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoBreadcrumbComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),sg(),Sl(15,"p"),Jx(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),sg(),Sl(17,"p"),Jx(18,"Caso um endere\xE7o seja especificado na propriedade "),Sl(19,"code"),Jx(20,"p-favorite-service"),sg(),Jx(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),sg(),Sl(22,"p"),Jx(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Sl(24,"code"),Jx(25,"p-params-service"),sg(),Jx(26," que recebe um objeto contendo as informa\xE7\xF5es."),sg(),Sl(27,"h4"),Jx(28,"Tokens customiz\xE1veis"),sg(),Sl(29,"p"),Jx(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(31,"blockquote")(32,"p"),Jx(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(34,"a",6),Jx(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(36,"."),sg()(),Sl(37,"table")(38,"thead")(39,"tr")(40,"th"),Jx(41,"Propriedade"),sg(),Sl(42,"th"),Jx(43,"Descri\xE7\xE3o"),sg(),Sl(44,"th"),Jx(45,"Valor Padr\xE3o"),sg()()(),Sl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),Jx(50,"Default Values"),sg()(),Wl(51,"td")(52,"td"),sg(),Sl(53,"tr")(54,"td")(55,"code"),Jx(56,"--font-family"),sg()(),Sl(57,"td"),Jx(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),sg(),Sl(59,"td")(60,"code"),Jx(61,"var(--font-family-theme)"),sg()()(),Sl(62,"tr")(63,"td")(64,"code"),Jx(65,"--color"),sg()(),Sl(66,"td"),Jx(67,"Cor principal do icone de lista"),sg(),Sl(68,"td")(69,"code"),Jx(70,"var(--color-action-default)"),sg()()(),Sl(71,"tr")(72,"td")(73,"code"),Jx(74,"--color-icon"),sg()(),Sl(75,"td"),Jx(76,'Cor do icone ">"'),sg(),Sl(77,"td")(78,"code"),Jx(79,"var(--color-neutral-mid-60)"),sg()()(),Sl(80,"tr")(81,"td")(82,"code"),Jx(83,"--color-current-page"),sg(),Jx(84," \xA0"),sg(),Sl(85,"td"),Jx(86,"Cor do pagina atual"),sg(),Sl(87,"td")(88,"code"),Jx(89,"var(--color-neutral-mid-60)"),sg()()()()()(),Sl(90,"div",7)(91,"h4",8),Jx(92,"Seletor"),sg(),Sl(93,"pre",9),Jx(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),sg()(),Sl(95,"h4",10),Jx(96,"Propriedades"),sg(),Sl(97,"table",11)(98,"tr",12)(99,"th",13),Jx(100,"Nome"),sg(),Sl(101,"th",13),Jx(102,"Tipo"),sg(),Sl(103,"th",13),Jx(104,"Padr\xE3o"),sg(),Sl(105,"th",13),Jx(106,"Descri\xE7\xE3o"),sg()(),Sl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),Jx(111," p-favorite-service"),Wl(112,"br"),sg()()(),Sl(113,"td",18)(114,"code",19),Jx(115,"string"),sg()(),Sl(116,"td",20),Jx(117,"-"),sg(),Sl(118,"td",21)(119,"em")(120,"strong"),Jx(121,"(opcional)"),sg()(),Sl(122,"p"),Jx(123,"Permite definir uma URL no componente "),Sl(124,"code"),Jx(125,"po-breadcrumb"),sg(),Jx(126," para favoritar ou desfavoritar."),sg(),Sl(127,"blockquote")(128,"p"),Jx(129,"Para utilizar esta propriedade, o \xFAltimo "),Sl(130,"code"),Jx(131,"PoBreadcrumbItem"),sg(),Jx(132," da lista de items da propriedade "),Sl(133,"code"),Jx(134,"p-items"),sg(),Jx(135," deve ter um link informado."),sg()(),Sl(136,"blockquote")(137,"p"),Jx(138,"A API deve estar preparada para retornar um objeto no formato "),Sl(139,"code"),Jx(140,"{ isFavorite: boolean }"),sg(),Jx(141,"."),sg()(),Sl(142,"p"),Jx(143,"Ao iniciar, o "),Sl(144,"code"),Jx(145,"po-breadcrumb"),sg(),Jx(146," faz um GET na URL definida na propriedade "),Sl(147,"code"),Jx(148,"p-favorite-service"),sg(),Jx(149,` e deve retornar a propriedade
`),Sl(150,"code"),Jx(151,"{ isFavorite: boolean }"),sg(),Jx(152," do \xFAltimo "),Sl(153,"code"),Jx(154,"PoBreadcrumbItem"),sg(),Jx(155," definido na lista de itens da propriedade "),Sl(156,"code"),Jx(157,"p-items"),sg(),Jx(158,"."),sg(),Sl(159,"p"),Jx(160,"Ao clicar em favoritar ou desfavoritar o "),Sl(161,"code"),Jx(162,"po-breadcrumb"),sg(),Jx(163," faz um POST com o link e a propriedade "),Sl(164,"code"),Jx(165,"{ isFavorite: boolean }"),sg(),Jx(166,`
definidos no \xFAltimo item da propriedade `),Sl(167,"code"),Jx(168,"p-items"),sg(),Jx(169,"."),sg(),Sl(170,"blockquote")(171,"p"),Jx(172,"Caso algum par\xE2metro seja definido na propriedade "),Sl(173,"code"),Jx(174,"p-params-service"),sg(),Jx(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),sg()(),Sl(176,"p"),Jx(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),sg(),Sl(178,"pre")(179,"code"),Jx(180,`https://po-ui.io/sample/api/favorite
`),sg()(),Sl(181,"p"),Jx(182,"Ao fazer o GET o "),Sl(183,"code"),Jx(184,"po-breadcrumb"),sg(),Jx(185," concatena o link com a URL de servi\xE7o. Exemplo:"),sg(),Sl(186,"pre")(187,"code"),Jx(188,`GET http://<domain>/api/favorite?url=/example
`),sg()(),Sl(189,"pre")(190,"code"),Jx(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),sg()(),Sl(192,"pre")(193,"code"),Jx(194,`POST
payload: { isFavorite: true, url: '/example' }
`),sg()(),Sl(195,"p"),Jx(196,"Caso possua par\xE2metros definidos na propriedade "),Sl(197,"code"),Jx(198,"p-params-service"),sg(),Jx(199,":"),sg(),Sl(200,"pre")(201,"code"),Jx(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),sg()(),Sl(203,"p"),Jx(204,"Exemplos de retorno:"),sg(),Sl(205,"pre")(206,"code"),Jx(207,`{ isFavorite: true, url: "/example" }
`),sg()(),Sl(208,"pre")(209,"code"),Jx(210,`{ isFavorite: false, url: "/example" }
`),sg()(),Sl(211,"pre")(212,"code"),Jx(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),sg()()()(),Sl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),Jx(218," p-items"),Wl(219,"br"),sg()()(),Sl(220,"td",18)(221,"code",22),Jx(222,"PoBreadcrumbItem[]"),sg()(),Sl(223,"td",20),Jx(224,"-"),sg(),Sl(225,"td",21)(226,"p"),Jx(227,"Lista de itens do "),Sl(228,"em"),Jx(229,"breadcrumb"),sg(),Jx(230,"."),sg(),Sl(231,"p")(232,"strong"),Jx(233,"Exemplo:"),sg()(),Sl(234,"pre")(235,"code"),Jx(236,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Sl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),Jx(241," p-params-service"),Wl(242,"br"),sg()()(),Sl(243,"td",18)(244,"code",23),Jx(245,"object"),sg()(),Sl(246,"td",20),Jx(247,"-"),sg(),Sl(248,"td",21)(249,"em")(250,"strong"),Jx(251,"(opcional)"),sg()(),Sl(252,"p"),Jx(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()(),Sl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),Jx(258," p-size"),Wl(259,"br"),sg()()(),Sl(260,"td",18)(261,"code",19),Jx(262,"string"),sg()(),Sl(263,"td",20)(264,"p")(265,"code"),Jx(266,"medium"),sg()()(),Sl(267,"td",21)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Define o tamanho do componente entre "),Sl(273,"code"),Jx(274,"small"),sg(),Jx(275," ou "),Sl(276,"code"),Jx(277,"medium"),sg(),Jx(278,"."),sg(),Sl(279,"blockquote")(280,"p"),Jx(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(282,"code"),Jx(283,"medium"),sg(),Jx(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(285,"a",24),Jx(286,"po-theme"),sg(),Jx(287,"."),sg()()()()(),Sl(288,"h3"),Jx(289,"Interfaces"),sg(),Sl(290,"h4",25)(291,"code",5),Jx(292,"PoBreadcrumbItem"),sg()(),Sl(293,"div",2)(294,"p"),Jx(295,"Interface que define cada item do componente "),Sl(296,"strong"),Jx(297,"po-breadcrumb"),sg(),Jx(298,"."),sg()(),Sl(299,"h4",10),Jx(300,"Propriedades"),sg(),Sl(301,"table",11)(302,"tr",12)(303,"th",13),Jx(304,"Nome"),sg(),Sl(305,"th",13),Jx(306,"Tipo"),sg(),Sl(307,"th",13),Jx(308,"Descri\xE7\xE3o"),sg()(),Sl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),Jx(313," action"),Wl(314,"br"),sg()()(),Sl(315,"td",18)(316,"code",26),Jx(317,"Function"),sg()(),Sl(318,"td",21)(319,"em")(320,"strong"),Jx(321,"(opcional)"),sg()(),Sl(322,"p"),Jx(323,"A\xE7\xE3o executada ao clicar no item."),sg(),Sl(324,"blockquote")(325,"p"),Jx(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(327,"em"),Jx(328,"label"),sg(),Jx(329," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Sl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),Jx(334," label"),Wl(335,"br"),sg()()(),Sl(336,"td",18)(337,"code",19),Jx(338,"string"),sg()(),Sl(339,"td",21)(340,"p"),Jx(341,"R\xF3tulo do item."),sg()()(),Sl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),Jx(346," link"),Wl(347,"br"),sg()()(),Sl(348,"td",18)(349,"code",19),Jx(350,"string"),sg()(),Sl(351,"td",21)(352,"em")(353,"strong"),Jx(354,"(opcional)"),sg()(),Sl(355,"p"),Jx(356,"Url do item."),sg(),Sl(357,"blockquote")(358,"p"),Jx(359,"Caso o item tamb\xE9m contenha uma "),Sl(360,"em"),Jx(361,"action"),sg(),Jx(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(363,"em"),Jx(364,"link"),sg(),Jx(365,"."),sg()(),Sl(366,"blockquote")(367,"p"),Jx(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(369,"strong")(370,"a",27),Jx(371,"Veja um exemplo de como criar rotas aqui"),sg()(),Jx(372,"."),sg()(),Sl(373,"blockquote")(374,"p"),Jx(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(376,"code"),Jx(377,"p-favorite-service"),sg(),Jx(378," consiga favoritar ou desfavoritar."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-breadcrumb-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ie,oe,ae],encapsulation:2})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(xe),pL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,me]})}return n})();export{Ge as DocPoBreadcrumbModule};