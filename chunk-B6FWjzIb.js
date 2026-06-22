import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,by as Hpe,J as Gl,M as tw,bM as pN,a7 as fN,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Gl(0,"po-breadcrumb",0),a&2&&tw("p-items",pN(3,se,fN(1,pe),fN(2,ce)));},dependencies:[Hpe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Breadcrumb Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-breadcrumb-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ee],encapsulation:2})}return n})();var ne=(()=>{class n{poNotification=f(Yp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=Cx();Gl(0,"po-breadcrumb",2)(1,"po-divider"),Tl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(d){return Ky(c),rN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Xy(d)}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(d){return Ky(c),rN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Xy(d)}),sg(),t0(),Tl(7,"po-input",6),Ew("ngModelChange",function(d){return Ky(c),rN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Xy(d)}),sg(),t0(),sg(),Tl(8,"div",3)(9,"po-button",7),ht("p-click",function(){return o.addBreadcrumb()}),sg()()(),Gl(10,"po-divider"),Tl(11,"form",null,1)(13,"div",3)(14,"po-input",8),Ew("ngModelChange",function(d){return Ky(c),rN(o.favoriteService,d)||(o.favoriteService=d),Xy(d)}),sg(),t0(),Tl(15,"po-input",9),Ew("ngModelChange",function(d){return Ky(c),rN(o.paramsService,d)||(o.paramsService=d),Xy(d)}),sg(),t0(),sg(),Gl(16,"po-divider"),Tl(17,"div",3)(18,"po-button",10),ht("p-click",function(){Ky(c);let d=Ox(3),le=Ox(12);return d.reset(),le.reset(),Xy(o.restore())}),sg()()();}if(a&2){let c=Ox(3);tw("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Vp(5),Dw("ngModel",o.breadcrumbItem.action),r0(),Vp(),Dw("ngModel",o.breadcrumbItem.label),r0(),Vp(),Dw("ngModel",o.breadcrumbItem.link),r0(),Vp(2),tw("p-disabled",c.invalid),Vp(5),Dw("ngModel",o.favoriteService),tw("p-disabled",!o.breadcrumbItems?.length),r0(),Vp(),Dw("ngModel",o.paramsService),tw("p-disabled",!o.breadcrumbItems?.length),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Hpe,Qt,mv,O3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Breadcrumb Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-breadcrumb-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ve,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-breadcrumb."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoBreadcrumbComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),sg(),Tl(15,"p"),tN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),sg(),Tl(17,"p"),tN(18,"Caso um endere\xE7o seja especificado na propriedade "),Tl(19,"code"),tN(20,"p-favorite-service"),sg(),tN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),sg(),Tl(22,"p"),tN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Tl(24,"code"),tN(25,"p-params-service"),sg(),tN(26," que recebe um objeto contendo as informa\xE7\xF5es."),sg(),Tl(27,"h4"),tN(28,"Tokens customiz\xE1veis"),sg(),Tl(29,"p"),tN(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(31,"blockquote")(32,"p"),tN(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(34,"a",6),tN(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(36,"."),sg()(),Tl(37,"table")(38,"thead")(39,"tr")(40,"th"),tN(41,"Propriedade"),sg(),Tl(42,"th"),tN(43,"Descri\xE7\xE3o"),sg(),Tl(44,"th"),tN(45,"Valor Padr\xE3o"),sg()()(),Tl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),tN(50,"Default Values"),sg()(),Gl(51,"td")(52,"td"),sg(),Tl(53,"tr")(54,"td")(55,"code"),tN(56,"--font-family"),sg()(),Tl(57,"td"),tN(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),sg(),Tl(59,"td")(60,"code"),tN(61,"var(--font-family-theme)"),sg()()(),Tl(62,"tr")(63,"td")(64,"code"),tN(65,"--color"),sg()(),Tl(66,"td"),tN(67,"Cor principal do icone de lista"),sg(),Tl(68,"td")(69,"code"),tN(70,"var(--color-action-default)"),sg()()(),Tl(71,"tr")(72,"td")(73,"code"),tN(74,"--color-icon"),sg()(),Tl(75,"td"),tN(76,'Cor do icone ">"'),sg(),Tl(77,"td")(78,"code"),tN(79,"var(--color-neutral-mid-60)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),tN(83,"--color-current-page"),sg(),tN(84," \xA0"),sg(),Tl(85,"td"),tN(86,"Cor do pagina atual"),sg(),Tl(87,"td")(88,"code"),tN(89,"var(--color-neutral-mid-60)"),sg()()()()()(),Tl(90,"div",7)(91,"h4",8),tN(92,"Seletor"),sg(),Tl(93,"pre",9),tN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),sg()(),Tl(95,"h4",10),tN(96,"Propriedades"),sg(),Tl(97,"table",11)(98,"tr",12)(99,"th",13),tN(100,"Nome"),sg(),Tl(101,"th",13),tN(102,"Tipo"),sg(),Tl(103,"th",13),tN(104,"Padr\xE3o"),sg(),Tl(105,"th",13),tN(106,"Descri\xE7\xE3o"),sg()(),Tl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),tN(111," p-favorite-service"),Gl(112,"br"),sg()()(),Tl(113,"td",18)(114,"code",19),tN(115,"string"),sg()(),Tl(116,"td",20),tN(117,"-"),sg(),Tl(118,"td",21)(119,"em")(120,"strong"),tN(121,"(opcional)"),sg()(),Tl(122,"p"),tN(123,"Permite definir uma URL no componente "),Tl(124,"code"),tN(125,"po-breadcrumb"),sg(),tN(126," para favoritar ou desfavoritar."),sg(),Tl(127,"blockquote")(128,"p"),tN(129,"Para utilizar esta propriedade, o \xFAltimo "),Tl(130,"code"),tN(131,"PoBreadcrumbItem"),sg(),tN(132," da lista de items da propriedade "),Tl(133,"code"),tN(134,"p-items"),sg(),tN(135," deve ter um link informado."),sg()(),Tl(136,"blockquote")(137,"p"),tN(138,"A API deve estar preparada para retornar um objeto no formato "),Tl(139,"code"),tN(140,"{ isFavorite: boolean }"),sg(),tN(141,"."),sg()(),Tl(142,"p"),tN(143,"Ao iniciar, o "),Tl(144,"code"),tN(145,"po-breadcrumb"),sg(),tN(146," faz um GET na URL definida na propriedade "),Tl(147,"code"),tN(148,"p-favorite-service"),sg(),tN(149,` e deve retornar a propriedade
`),Tl(150,"code"),tN(151,"{ isFavorite: boolean }"),sg(),tN(152," do \xFAltimo "),Tl(153,"code"),tN(154,"PoBreadcrumbItem"),sg(),tN(155," definido na lista de itens da propriedade "),Tl(156,"code"),tN(157,"p-items"),sg(),tN(158,"."),sg(),Tl(159,"p"),tN(160,"Ao clicar em favoritar ou desfavoritar o "),Tl(161,"code"),tN(162,"po-breadcrumb"),sg(),tN(163," faz um POST com o link e a propriedade "),Tl(164,"code"),tN(165,"{ isFavorite: boolean }"),sg(),tN(166,`
definidos no \xFAltimo item da propriedade `),Tl(167,"code"),tN(168,"p-items"),sg(),tN(169,"."),sg(),Tl(170,"blockquote")(171,"p"),tN(172,"Caso algum par\xE2metro seja definido na propriedade "),Tl(173,"code"),tN(174,"p-params-service"),sg(),tN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),sg()(),Tl(176,"p"),tN(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),sg(),Tl(178,"pre")(179,"code"),tN(180,`https://po-ui.io/sample/api/favorite
`),sg()(),Tl(181,"p"),tN(182,"Ao fazer o GET o "),Tl(183,"code"),tN(184,"po-breadcrumb"),sg(),tN(185," concatena o link com a URL de servi\xE7o. Exemplo:"),sg(),Tl(186,"pre")(187,"code"),tN(188,`GET http://<domain>/api/favorite?url=/example
`),sg()(),Tl(189,"pre")(190,"code"),tN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),sg()(),Tl(192,"pre")(193,"code"),tN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),sg()(),Tl(195,"p"),tN(196,"Caso possua par\xE2metros definidos na propriedade "),Tl(197,"code"),tN(198,"p-params-service"),sg(),tN(199,":"),sg(),Tl(200,"pre")(201,"code"),tN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),sg()(),Tl(203,"p"),tN(204,"Exemplos de retorno:"),sg(),Tl(205,"pre")(206,"code"),tN(207,`{ isFavorite: true, url: "/example" }
`),sg()(),Tl(208,"pre")(209,"code"),tN(210,`{ isFavorite: false, url: "/example" }
`),sg()(),Tl(211,"pre")(212,"code"),tN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),sg()()()(),Tl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),tN(218," p-items"),Gl(219,"br"),sg()()(),Tl(220,"td",18)(221,"code",22),tN(222,"PoBreadcrumbItem[]"),sg()(),Tl(223,"td",20),tN(224,"-"),sg(),Tl(225,"td",21)(226,"p"),tN(227,"Lista de itens do "),Tl(228,"em"),tN(229,"breadcrumb"),sg(),tN(230,"."),sg(),Tl(231,"p")(232,"strong"),tN(233,"Exemplo:"),sg()(),Tl(234,"pre")(235,"code"),tN(236,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Tl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),tN(241," p-params-service"),Gl(242,"br"),sg()()(),Tl(243,"td",18)(244,"code",23),tN(245,"object"),sg()(),Tl(246,"td",20),tN(247,"-"),sg(),Tl(248,"td",21)(249,"em")(250,"strong"),tN(251,"(opcional)"),sg()(),Tl(252,"p"),tN(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()(),Tl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),tN(258," p-size"),Gl(259,"br"),sg()()(),Tl(260,"td",18)(261,"code",19),tN(262,"string"),sg()(),Tl(263,"td",20)(264,"p")(265,"code"),tN(266,"medium"),sg()()(),Tl(267,"td",21)(268,"em")(269,"strong"),tN(270,"(opcional)"),sg()(),Tl(271,"p"),tN(272,"Define o tamanho do componente entre "),Tl(273,"code"),tN(274,"small"),sg(),tN(275," ou "),Tl(276,"code"),tN(277,"medium"),sg(),tN(278,"."),sg(),Tl(279,"blockquote")(280,"p"),tN(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(282,"code"),tN(283,"medium"),sg(),tN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(285,"a",24),tN(286,"po-theme"),sg(),tN(287,"."),sg()()()()(),Tl(288,"h3"),tN(289,"Interfaces"),sg(),Tl(290,"h4",25)(291,"code",5),tN(292,"PoBreadcrumbItem"),sg()(),Tl(293,"div",2)(294,"p"),tN(295,"Interface que define cada item do componente "),Tl(296,"strong"),tN(297,"po-breadcrumb"),sg(),tN(298,"."),sg()(),Tl(299,"h4",10),tN(300,"Propriedades"),sg(),Tl(301,"table",11)(302,"tr",12)(303,"th",13),tN(304,"Nome"),sg(),Tl(305,"th",13),tN(306,"Tipo"),sg(),Tl(307,"th",13),tN(308,"Descri\xE7\xE3o"),sg()(),Tl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),tN(313," action"),Gl(314,"br"),sg()()(),Tl(315,"td",18)(316,"code",26),tN(317,"Function"),sg()(),Tl(318,"td",21)(319,"em")(320,"strong"),tN(321,"(opcional)"),sg()(),Tl(322,"p"),tN(323,"A\xE7\xE3o executada ao clicar no item."),sg(),Tl(324,"blockquote")(325,"p"),tN(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Tl(327,"em"),tN(328,"label"),sg(),tN(329," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Tl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),tN(334," label"),Gl(335,"br"),sg()()(),Tl(336,"td",18)(337,"code",19),tN(338,"string"),sg()(),Tl(339,"td",21)(340,"p"),tN(341,"R\xF3tulo do item."),sg()()(),Tl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),tN(346," link"),Gl(347,"br"),sg()()(),Tl(348,"td",18)(349,"code",19),tN(350,"string"),sg()(),Tl(351,"td",21)(352,"em")(353,"strong"),tN(354,"(opcional)"),sg()(),Tl(355,"p"),tN(356,"Url do item."),sg(),Tl(357,"blockquote")(358,"p"),tN(359,"Caso o item tamb\xE9m contenha uma "),Tl(360,"em"),tN(361,"action"),sg(),tN(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Tl(363,"em"),tN(364,"link"),sg(),tN(365,"."),sg()(),Tl(366,"blockquote")(367,"p"),tN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(369,"strong")(370,"a",27),tN(371,"Veja um exemplo de como criar rotas aqui"),sg()(),tN(372,"."),sg()(),Tl(373,"blockquote")(374,"p"),tN(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Tl(376,"code"),tN(377,"p-favorite-service"),sg(),tN(378," consiga favoritar ou desfavoritar."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-breadcrumb-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ie,oe,ae],encapsulation:2})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(xe),vL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,me]})}return n})();export{Ge as DocPoBreadcrumbModule};