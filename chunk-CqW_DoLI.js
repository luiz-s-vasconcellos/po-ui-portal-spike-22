import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do servi\xE7o "),Cl(7,"code"),qx(8,"po-media-query"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Services"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoMediaQueryService"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),og(),Cl(18,"p"),qx(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),og(),Cl(20,"p"),qx(21,"Exemplo de uso:"),og(),Cl(22,"p"),qx(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),og(),Cl(24,"pre")(25,"code"),qx(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),og()()(),Cl(27,"h3",6),qx(28,"M\xE9todos"),og(),Cl(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),qx(35," updateTokens "),og()()()()(),Cl(36,"tr",12)(37,"td",12)(38,"p"),qx(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),og()()()(),Cl(40,"h5")(41,"b"),qx(42,"Par\xE2metros"),og()(),Cl(43,"table",13)(44,"tr",14)(45,"th",15),qx(46,"Nome"),og(),Cl(47,"th",15),qx(48,"Tipo"),og(),Cl(49,"th",15),qx(50,"Descri\xE7\xE3o"),og()(),Cl(51,"tr",8)(52,"td",16),qx(53," tokens"),og(),Cl(54,"td",17)(55,"code",18),qx(56," PoMediaQueryTokens "),og()(),Cl(57,"td",12)(58,"p"),qx(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),og()()()(),Hl(60,"br"),Cl(61,"h3"),qx(62,"Interfaces"),og(),Cl(63,"h4",19)(64,"code",5),qx(65,"PoMediaQueryTokens"),og()(),Cl(66,"div",2)(67,"p"),qx(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),og(),Cl(69,"blockquote")(70,"p"),qx(71,"Os tipos de valores aceitos para cada token s\xE3o: "),Cl(72,"code"),qx(73,"pixels"),og(),qx(74," , "),Cl(75,"code"),qx(76,"em"),og(),qx(77," e "),Cl(78,"code"),qx(79,"rem"),og(),qx(80,"."),og()()(),Cl(81,"h4",6),qx(82,"Propriedades"),og(),Cl(83,"table",13)(84,"tr",14)(85,"th",15),qx(86,"Nome"),og(),Cl(87,"th",15),qx(88,"Tipo"),og(),Cl(89,"th",15),qx(90,"Descri\xE7\xE3o"),og()(),Cl(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),qx(95," lg"),Hl(96,"br"),og()()(),Cl(97,"td",17)(98,"code",20),qx(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),og()(),Cl(100,"td",12)(101,"em")(102,"strong"),qx(103,"(opcional)"),og()(),Cl(104,"p"),qx(105,"Define a regra para lg."),og(),Cl(106,"p")(107,"code"),qx(108,"gridSystemLgMinWidth"),og(),qx(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),Cl(110,"code"),qx(111,"lg"),og(),qx(112,")."),og(),Cl(113,"p")(114,"code"),qx(115,"gridSystemLgMaxWidth"),og(),qx(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),Cl(117,"code"),qx(118,"lg"),og(),qx(119,")."),og(),Cl(120,"p"),qx(121,"Exemplo de uso:"),og(),Cl(122,"pre")(123,"code",21),qx(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),og()()()(),Cl(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),qx(129," md"),Hl(130,"br"),og()()(),Cl(131,"td",17)(132,"code",22),qx(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),og()(),Cl(134,"td",12)(135,"em")(136,"strong"),qx(137,"(opcional)"),og()(),Cl(138,"p"),qx(139,"Define a regra para md."),og(),Cl(140,"p")(141,"code"),qx(142,"gridSystemMdMinWidth"),og(),qx(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),Cl(144,"code"),qx(145,"md"),og(),qx(146,")."),og(),Cl(147,"p")(148,"code"),qx(149,"gridSystemMdMaxWidth"),og(),qx(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),Cl(151,"code"),qx(152,"md"),og(),qx(153,")."),og(),Cl(154,"p"),qx(155,"Exemplo de uso:"),og(),Cl(156,"pre")(157,"code",21),qx(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),og()()()(),Cl(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),qx(163," offset"),Hl(164,"br"),og()()(),Cl(165,"td",17)(166,"code",23),qx(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),og()(),Cl(168,"td",12)(169,"em")(170,"strong"),qx(171,"(opcional)"),og()(),Cl(172,"p"),qx(173,"Define a regra offset."),og(),Cl(174,"p")(175,"code"),qx(176,"gridSystemOffsetMinWidth"),og(),qx(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),Cl(178,"code"),qx(179,"offset"),og(),qx(180,")."),og(),Cl(181,"p")(182,"code"),qx(183,"gridSystemOffsetMaxWidth"),og(),qx(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),Cl(185,"code"),qx(186,"offset"),og(),qx(187,")."),og(),Cl(188,"p"),qx(189,"Exemplo de uso:"),og(),Cl(190,"pre")(191,"code",21),qx(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),og()()()(),Cl(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),qx(197," pull"),Hl(198,"br"),og()()(),Cl(199,"td",17)(200,"code",24),qx(201,`{ 'gridSystemPullMaxWidth': string;
}`),og()(),Cl(202,"td",12)(203,"em")(204,"strong"),qx(205,"(opcional)"),og()(),Cl(206,"p"),qx(207,"Define a regra pull."),og(),Cl(208,"p")(209,"code"),qx(210,"gridSystemPullMaxWidth"),og(),qx(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),Cl(212,"code"),qx(213,"pull"),og(),qx(214,")."),og(),Cl(215,"p"),qx(216,"Exemplo de uso:"),og(),Cl(217,"pre")(218,"code",21),qx(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),og()()()(),Cl(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),qx(224," sm"),Hl(225,"br"),og()()(),Cl(226,"td",17)(227,"code",25),qx(228,`{ 'gridSystemSmMaxWidth': string;
}`),og()(),Cl(229,"td",12)(230,"em")(231,"strong"),qx(232,"(opcional)"),og()(),Cl(233,"p"),qx(234,"Define a regra para sm."),og(),Cl(235,"p")(236,"code"),qx(237,"gridSystemSmMaxWidth"),og(),qx(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),Cl(239,"code"),qx(240,"sm"),og(),qx(241,")."),og(),Cl(242,"p"),qx(243,"Exemplo de uso:"),og(),Cl(244,"pre")(245,"code",21),qx(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),og()()()(),Cl(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),qx(251," xl"),Hl(252,"br"),og()()(),Cl(253,"td",17)(254,"code",26),qx(255,`{ 'gridSystemXlMinWidth': string;
}`),og()(),Cl(256,"td",12)(257,"em")(258,"strong"),qx(259,"(opcional)"),og()(),Cl(260,"p"),qx(261,"Define a regra xl."),og(),Cl(262,"p")(263,"code"),qx(264,"gridSystemXlMinWidth"),og(),qx(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),Cl(266,"code"),qx(267,"pull"),og(),qx(268,")."),og(),Cl(269,"p"),qx(270,"Exemplo de uso:"),og(),Cl(271,"pre")(272,"code",21),qx(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),og()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return d.changeTab("doc")}),Hl(3,"sample-po-media-query-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return d.changeTab("web")}),og()()()),a&2&&(ZE("p-actions",d.actions),Lp(2),ZE("p-active",d.activeTab==="doc"),Lp(2),ZE("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[SNe,ofe,lfe,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(q),bL]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,W]})}return n})();export{R as DocPoMediaQueryModule};