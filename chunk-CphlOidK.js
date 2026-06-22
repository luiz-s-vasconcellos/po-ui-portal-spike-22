import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,T as Tl,z as tN,L as sg,J as Gl,a3 as aNe,b8 as Hme,b9 as Gme,a1 as ht,M as tw,F as Vp}from'./main-LUSFEIN7.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do servi\xE7o "),Tl(7,"code"),tN(8,"po-media-query"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Services"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoMediaQueryService"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),sg(),Tl(18,"p"),tN(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),sg(),Tl(20,"p"),tN(21,"Exemplo de uso:"),sg(),Tl(22,"p"),tN(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),sg(),Tl(24,"pre")(25,"code"),tN(26,`import { PoMediaQueryService } from './po-media-query.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {

 // Definindo tokens personalizados para os breakpoints do grid system
 constructor(private poMediaQueryService: PoMediaQueryService) {}

 ngOnInit() {
   const tokens: PoMediaQueryTokens =  {
    sm: {
     gridSystemSmMaxWidth: '1024px' // Limite m\xE1ximo para telas pequenas (at\xE9 1024px)
     },
    md: {
     gridSystemMdMinWidth: '1025px', // Limite m\xEDnimo para telas m\xE9dias (a partir de 1025px)
     gridSystemMdMaxWidth: '1366px' // Limite m\xE1ximo para telas m\xE9dias (at\xE9 1366px)
    },
    lg: {
     gridSystemLgMinWidth: '1367px', // Limite m\xEDnimo para telas grandes (a partir de 1367px)
     gridSystemLgMaxWidth: '1465px' // Limite m\xE1ximo para telas grandes (at\xE9 1465px)
    },
    xl: {
     gridSystemXlMinWidth: '1466px' // Limite m\xEDnimo para telas extra grandes (a partir de 1466px)
    }
   };

   // Atualiza os tokens de media queries com os novos valores
   this.poMediaQueryService.updateTokens(tokens);
 }
}
`),sg()()(),Tl(27,"h3",6),tN(28,"M\xE9todos"),sg(),Tl(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),tN(35," updateTokens "),sg()()()()(),Tl(36,"tr",12)(37,"td",12)(38,"p"),tN(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),sg()()()(),Tl(40,"h5")(41,"b"),tN(42,"Par\xE2metros"),sg()(),Tl(43,"table",13)(44,"tr",14)(45,"th",15),tN(46,"Nome"),sg(),Tl(47,"th",15),tN(48,"Tipo"),sg(),Tl(49,"th",15),tN(50,"Descri\xE7\xE3o"),sg()(),Tl(51,"tr",8)(52,"td",16),tN(53," tokens"),sg(),Tl(54,"td",17)(55,"code",18),tN(56," PoMediaQueryTokens "),sg()(),Tl(57,"td",12)(58,"p"),tN(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),sg()()()(),Gl(60,"br"),Tl(61,"h3"),tN(62,"Interfaces"),sg(),Tl(63,"h4",19)(64,"code",5),tN(65,"PoMediaQueryTokens"),sg()(),Tl(66,"div",2)(67,"p"),tN(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),sg(),Tl(69,"blockquote")(70,"p"),tN(71,"Os tipos de valores aceitos para cada token s\xE3o: "),Tl(72,"code"),tN(73,"pixels"),sg(),tN(74," , "),Tl(75,"code"),tN(76,"em"),sg(),tN(77," e "),Tl(78,"code"),tN(79,"rem"),sg(),tN(80,"."),sg()()(),Tl(81,"h4",6),tN(82,"Propriedades"),sg(),Tl(83,"table",13)(84,"tr",14)(85,"th",15),tN(86,"Nome"),sg(),Tl(87,"th",15),tN(88,"Tipo"),sg(),Tl(89,"th",15),tN(90,"Descri\xE7\xE3o"),sg()(),Tl(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),tN(95," lg"),Gl(96,"br"),sg()()(),Tl(97,"td",17)(98,"code",20),tN(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),sg()(),Tl(100,"td",12)(101,"em")(102,"strong"),tN(103,"(opcional)"),sg()(),Tl(104,"p"),tN(105,"Define a regra para lg."),sg(),Tl(106,"p")(107,"code"),tN(108,"gridSystemLgMinWidth"),sg(),tN(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),Tl(110,"code"),tN(111,"lg"),sg(),tN(112,")."),sg(),Tl(113,"p")(114,"code"),tN(115,"gridSystemLgMaxWidth"),sg(),tN(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),Tl(117,"code"),tN(118,"lg"),sg(),tN(119,")."),sg(),Tl(120,"p"),tN(121,"Exemplo de uso:"),sg(),Tl(122,"pre")(123,"code",21),tN(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),sg()()()(),Tl(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),tN(129," md"),Gl(130,"br"),sg()()(),Tl(131,"td",17)(132,"code",22),tN(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),sg()(),Tl(134,"td",12)(135,"em")(136,"strong"),tN(137,"(opcional)"),sg()(),Tl(138,"p"),tN(139,"Define a regra para md."),sg(),Tl(140,"p")(141,"code"),tN(142,"gridSystemMdMinWidth"),sg(),tN(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),Tl(144,"code"),tN(145,"md"),sg(),tN(146,")."),sg(),Tl(147,"p")(148,"code"),tN(149,"gridSystemMdMaxWidth"),sg(),tN(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),Tl(151,"code"),tN(152,"md"),sg(),tN(153,")."),sg(),Tl(154,"p"),tN(155,"Exemplo de uso:"),sg(),Tl(156,"pre")(157,"code",21),tN(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),sg()()()(),Tl(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),tN(163," offset"),Gl(164,"br"),sg()()(),Tl(165,"td",17)(166,"code",23),tN(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),sg()(),Tl(168,"td",12)(169,"em")(170,"strong"),tN(171,"(opcional)"),sg()(),Tl(172,"p"),tN(173,"Define a regra offset."),sg(),Tl(174,"p")(175,"code"),tN(176,"gridSystemOffsetMinWidth"),sg(),tN(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),Tl(178,"code"),tN(179,"offset"),sg(),tN(180,")."),sg(),Tl(181,"p")(182,"code"),tN(183,"gridSystemOffsetMaxWidth"),sg(),tN(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),Tl(185,"code"),tN(186,"offset"),sg(),tN(187,")."),sg(),Tl(188,"p"),tN(189,"Exemplo de uso:"),sg(),Tl(190,"pre")(191,"code",21),tN(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),sg()()()(),Tl(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),tN(197," pull"),Gl(198,"br"),sg()()(),Tl(199,"td",17)(200,"code",24),tN(201,`{ 'gridSystemPullMaxWidth': string;
}`),sg()(),Tl(202,"td",12)(203,"em")(204,"strong"),tN(205,"(opcional)"),sg()(),Tl(206,"p"),tN(207,"Define a regra pull."),sg(),Tl(208,"p")(209,"code"),tN(210,"gridSystemPullMaxWidth"),sg(),tN(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),Tl(212,"code"),tN(213,"pull"),sg(),tN(214,")."),sg(),Tl(215,"p"),tN(216,"Exemplo de uso:"),sg(),Tl(217,"pre")(218,"code",21),tN(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),sg()()()(),Tl(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),tN(224," sm"),Gl(225,"br"),sg()()(),Tl(226,"td",17)(227,"code",25),tN(228,`{ 'gridSystemSmMaxWidth': string;
}`),sg()(),Tl(229,"td",12)(230,"em")(231,"strong"),tN(232,"(opcional)"),sg()(),Tl(233,"p"),tN(234,"Define a regra para sm."),sg(),Tl(235,"p")(236,"code"),tN(237,"gridSystemSmMaxWidth"),sg(),tN(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),Tl(239,"code"),tN(240,"sm"),sg(),tN(241,")."),sg(),Tl(242,"p"),tN(243,"Exemplo de uso:"),sg(),Tl(244,"pre")(245,"code",21),tN(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),sg()()()(),Tl(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),tN(251," xl"),Gl(252,"br"),sg()()(),Tl(253,"td",17)(254,"code",26),tN(255,`{ 'gridSystemXlMinWidth': string;
}`),sg()(),Tl(256,"td",12)(257,"em")(258,"strong"),tN(259,"(opcional)"),sg()(),Tl(260,"p"),tN(261,"Define a regra xl."),sg(),Tl(262,"p")(263,"code"),tN(264,"gridSystemXlMinWidth"),sg(),tN(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),Tl(266,"code"),tN(267,"pull"),sg(),tN(268,")."),sg(),Tl(269,"p"),tN(270,"Exemplo de uso:"),sg(),Tl(271,"pre")(272,"code",21),tN(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),sg()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return d.changeTab("doc")}),Gl(3,"sample-po-media-query-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return d.changeTab("web")}),sg()()()),a&2&&(tw("p-actions",d.actions),Vp(2),tw("p-active",d.activeTab==="doc"),Vp(2),tw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[aNe,Hme,Gme,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(q),vL]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,W]})}return n})();export{R as DocPoMediaQueryModule};