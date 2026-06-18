import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,H as Sl,J as Jx,O as sg,M as Wl,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-QNYCBKHQ.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do servi\xE7o "),Sl(7,"code"),Jx(8,"po-media-query"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Services"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoMediaQueryService"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),sg(),Sl(18,"p"),Jx(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),sg(),Sl(20,"p"),Jx(21,"Exemplo de uso:"),sg(),Sl(22,"p"),Jx(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),sg(),Sl(24,"pre")(25,"code"),Jx(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),sg()()(),Sl(27,"h3",6),Jx(28,"M\xE9todos"),sg(),Sl(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),Jx(35," updateTokens "),sg()()()()(),Sl(36,"tr",12)(37,"td",12)(38,"p"),Jx(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),sg()()()(),Sl(40,"h5")(41,"b"),Jx(42,"Par\xE2metros"),sg()(),Sl(43,"table",13)(44,"tr",14)(45,"th",15),Jx(46,"Nome"),sg(),Sl(47,"th",15),Jx(48,"Tipo"),sg(),Sl(49,"th",15),Jx(50,"Descri\xE7\xE3o"),sg()(),Sl(51,"tr",8)(52,"td",16),Jx(53," tokens"),sg(),Sl(54,"td",17)(55,"code",18),Jx(56," PoMediaQueryTokens "),sg()(),Sl(57,"td",12)(58,"p"),Jx(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),sg()()()(),Wl(60,"br"),Sl(61,"h3"),Jx(62,"Interfaces"),sg(),Sl(63,"h4",19)(64,"code",5),Jx(65,"PoMediaQueryTokens"),sg()(),Sl(66,"div",2)(67,"p"),Jx(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),sg(),Sl(69,"blockquote")(70,"p"),Jx(71,"Os tipos de valores aceitos para cada token s\xE3o: "),Sl(72,"code"),Jx(73,"pixels"),sg(),Jx(74," , "),Sl(75,"code"),Jx(76,"em"),sg(),Jx(77," e "),Sl(78,"code"),Jx(79,"rem"),sg(),Jx(80,"."),sg()()(),Sl(81,"h4",6),Jx(82,"Propriedades"),sg(),Sl(83,"table",13)(84,"tr",14)(85,"th",15),Jx(86,"Nome"),sg(),Sl(87,"th",15),Jx(88,"Tipo"),sg(),Sl(89,"th",15),Jx(90,"Descri\xE7\xE3o"),sg()(),Sl(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),Jx(95," lg"),Wl(96,"br"),sg()()(),Sl(97,"td",17)(98,"code",20),Jx(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),sg()(),Sl(100,"td",12)(101,"em")(102,"strong"),Jx(103,"(opcional)"),sg()(),Sl(104,"p"),Jx(105,"Define a regra para lg."),sg(),Sl(106,"p")(107,"code"),Jx(108,"gridSystemLgMinWidth"),sg(),Jx(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(110,"code"),Jx(111,"lg"),sg(),Jx(112,")."),sg(),Sl(113,"p")(114,"code"),Jx(115,"gridSystemLgMaxWidth"),sg(),Jx(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(117,"code"),Jx(118,"lg"),sg(),Jx(119,")."),sg(),Sl(120,"p"),Jx(121,"Exemplo de uso:"),sg(),Sl(122,"pre")(123,"code",21),Jx(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),sg()()()(),Sl(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),Jx(129," md"),Wl(130,"br"),sg()()(),Sl(131,"td",17)(132,"code",22),Jx(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),sg()(),Sl(134,"td",12)(135,"em")(136,"strong"),Jx(137,"(opcional)"),sg()(),Sl(138,"p"),Jx(139,"Define a regra para md."),sg(),Sl(140,"p")(141,"code"),Jx(142,"gridSystemMdMinWidth"),sg(),Jx(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(144,"code"),Jx(145,"md"),sg(),Jx(146,")."),sg(),Sl(147,"p")(148,"code"),Jx(149,"gridSystemMdMaxWidth"),sg(),Jx(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(151,"code"),Jx(152,"md"),sg(),Jx(153,")."),sg(),Sl(154,"p"),Jx(155,"Exemplo de uso:"),sg(),Sl(156,"pre")(157,"code",21),Jx(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),sg()()()(),Sl(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),Jx(163," offset"),Wl(164,"br"),sg()()(),Sl(165,"td",17)(166,"code",23),Jx(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),sg()(),Sl(168,"td",12)(169,"em")(170,"strong"),Jx(171,"(opcional)"),sg()(),Sl(172,"p"),Jx(173,"Define a regra offset."),sg(),Sl(174,"p")(175,"code"),Jx(176,"gridSystemOffsetMinWidth"),sg(),Jx(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(178,"code"),Jx(179,"offset"),sg(),Jx(180,")."),sg(),Sl(181,"p")(182,"code"),Jx(183,"gridSystemOffsetMaxWidth"),sg(),Jx(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(185,"code"),Jx(186,"offset"),sg(),Jx(187,")."),sg(),Sl(188,"p"),Jx(189,"Exemplo de uso:"),sg(),Sl(190,"pre")(191,"code",21),Jx(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),sg()()()(),Sl(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),Jx(197," pull"),Wl(198,"br"),sg()()(),Sl(199,"td",17)(200,"code",24),Jx(201,`{ 'gridSystemPullMaxWidth': string;
}`),sg()(),Sl(202,"td",12)(203,"em")(204,"strong"),Jx(205,"(opcional)"),sg()(),Sl(206,"p"),Jx(207,"Define a regra pull."),sg(),Sl(208,"p")(209,"code"),Jx(210,"gridSystemPullMaxWidth"),sg(),Jx(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(212,"code"),Jx(213,"pull"),sg(),Jx(214,")."),sg(),Sl(215,"p"),Jx(216,"Exemplo de uso:"),sg(),Sl(217,"pre")(218,"code",21),Jx(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),sg()()()(),Sl(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),Jx(224," sm"),Wl(225,"br"),sg()()(),Sl(226,"td",17)(227,"code",25),Jx(228,`{ 'gridSystemSmMaxWidth': string;
}`),sg()(),Sl(229,"td",12)(230,"em")(231,"strong"),Jx(232,"(opcional)"),sg()(),Sl(233,"p"),Jx(234,"Define a regra para sm."),sg(),Sl(235,"p")(236,"code"),Jx(237,"gridSystemSmMaxWidth"),sg(),Jx(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(239,"code"),Jx(240,"sm"),sg(),Jx(241,")."),sg(),Sl(242,"p"),Jx(243,"Exemplo de uso:"),sg(),Sl(244,"pre")(245,"code",21),Jx(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),sg()()()(),Sl(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),Jx(251," xl"),Wl(252,"br"),sg()()(),Sl(253,"td",17)(254,"code",26),Jx(255,`{ 'gridSystemXlMinWidth': string;
}`),sg()(),Sl(256,"td",12)(257,"em")(258,"strong"),Jx(259,"(opcional)"),sg()(),Sl(260,"p"),Jx(261,"Define a regra xl."),sg(),Sl(262,"p")(263,"code"),Jx(264,"gridSystemXlMinWidth"),sg(),Jx(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(266,"code"),Jx(267,"pull"),sg(),Jx(268,")."),sg(),Sl(269,"p"),Jx(270,"Exemplo de uso:"),sg(),Sl(271,"pre")(272,"code",21),Jx(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),sg()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return d.changeTab("doc")}),Wl(3,"sample-po-media-query-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return d.changeTab("web")}),sg()()()),a&2&&(tw("p-actions",d.actions),Vp(2),tw("p-active",d.activeTab==="doc"),Vp(2),tw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[pNe,Gme,Qme,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(q),pL]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,W]})}return n})();export{R as DocPoMediaQueryModule};