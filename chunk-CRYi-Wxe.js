import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do servi\xE7o "),wl(7,"code"),Ux(8,"po-media-query"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Services"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoMediaQueryService"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),ng(),wl(18,"p"),Ux(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),ng(),wl(20,"p"),Ux(21,"Exemplo de uso:"),ng(),wl(22,"p"),Ux(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),ng(),wl(24,"pre")(25,"code"),Ux(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),ng()()(),wl(27,"h3",6),Ux(28,"M\xE9todos"),ng(),wl(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),Ux(35," updateTokens "),ng()()()()(),wl(36,"tr",12)(37,"td",12)(38,"p"),Ux(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),ng()()()(),wl(40,"h5")(41,"b"),Ux(42,"Par\xE2metros"),ng()(),wl(43,"table",13)(44,"tr",14)(45,"th",15),Ux(46,"Nome"),ng(),wl(47,"th",15),Ux(48,"Tipo"),ng(),wl(49,"th",15),Ux(50,"Descri\xE7\xE3o"),ng()(),wl(51,"tr",8)(52,"td",16),Ux(53," tokens"),ng(),wl(54,"td",17)(55,"code",18),Ux(56," PoMediaQueryTokens "),ng()(),wl(57,"td",12)(58,"p"),Ux(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),ng()()()(),Ul(60,"br"),wl(61,"h3"),Ux(62,"Interfaces"),ng(),wl(63,"h4",19)(64,"code",5),Ux(65,"PoMediaQueryTokens"),ng()(),wl(66,"div",2)(67,"p"),Ux(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),ng(),wl(69,"blockquote")(70,"p"),Ux(71,"Os tipos de valores aceitos para cada token s\xE3o: "),wl(72,"code"),Ux(73,"pixels"),ng(),Ux(74," , "),wl(75,"code"),Ux(76,"em"),ng(),Ux(77," e "),wl(78,"code"),Ux(79,"rem"),ng(),Ux(80,"."),ng()()(),wl(81,"h4",6),Ux(82,"Propriedades"),ng(),wl(83,"table",13)(84,"tr",14)(85,"th",15),Ux(86,"Nome"),ng(),wl(87,"th",15),Ux(88,"Tipo"),ng(),wl(89,"th",15),Ux(90,"Descri\xE7\xE3o"),ng()(),wl(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),Ux(95," lg"),Ul(96,"br"),ng()()(),wl(97,"td",17)(98,"code",20),Ux(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),ng()(),wl(100,"td",12)(101,"em")(102,"strong"),Ux(103,"(opcional)"),ng()(),wl(104,"p"),Ux(105,"Define a regra para lg."),ng(),wl(106,"p")(107,"code"),Ux(108,"gridSystemLgMinWidth"),ng(),Ux(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),wl(110,"code"),Ux(111,"lg"),ng(),Ux(112,")."),ng(),wl(113,"p")(114,"code"),Ux(115,"gridSystemLgMaxWidth"),ng(),Ux(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),wl(117,"code"),Ux(118,"lg"),ng(),Ux(119,")."),ng(),wl(120,"p"),Ux(121,"Exemplo de uso:"),ng(),wl(122,"pre")(123,"code",21),Ux(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),ng()()()(),wl(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),Ux(129," md"),Ul(130,"br"),ng()()(),wl(131,"td",17)(132,"code",22),Ux(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),ng()(),wl(134,"td",12)(135,"em")(136,"strong"),Ux(137,"(opcional)"),ng()(),wl(138,"p"),Ux(139,"Define a regra para md."),ng(),wl(140,"p")(141,"code"),Ux(142,"gridSystemMdMinWidth"),ng(),Ux(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),wl(144,"code"),Ux(145,"md"),ng(),Ux(146,")."),ng(),wl(147,"p")(148,"code"),Ux(149,"gridSystemMdMaxWidth"),ng(),Ux(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),wl(151,"code"),Ux(152,"md"),ng(),Ux(153,")."),ng(),wl(154,"p"),Ux(155,"Exemplo de uso:"),ng(),wl(156,"pre")(157,"code",21),Ux(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),ng()()()(),wl(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),Ux(163," offset"),Ul(164,"br"),ng()()(),wl(165,"td",17)(166,"code",23),Ux(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),ng()(),wl(168,"td",12)(169,"em")(170,"strong"),Ux(171,"(opcional)"),ng()(),wl(172,"p"),Ux(173,"Define a regra offset."),ng(),wl(174,"p")(175,"code"),Ux(176,"gridSystemOffsetMinWidth"),ng(),Ux(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),wl(178,"code"),Ux(179,"offset"),ng(),Ux(180,")."),ng(),wl(181,"p")(182,"code"),Ux(183,"gridSystemOffsetMaxWidth"),ng(),Ux(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),wl(185,"code"),Ux(186,"offset"),ng(),Ux(187,")."),ng(),wl(188,"p"),Ux(189,"Exemplo de uso:"),ng(),wl(190,"pre")(191,"code",21),Ux(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),ng()()()(),wl(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),Ux(197," pull"),Ul(198,"br"),ng()()(),wl(199,"td",17)(200,"code",24),Ux(201,`{ 'gridSystemPullMaxWidth': string;
}`),ng()(),wl(202,"td",12)(203,"em")(204,"strong"),Ux(205,"(opcional)"),ng()(),wl(206,"p"),Ux(207,"Define a regra pull."),ng(),wl(208,"p")(209,"code"),Ux(210,"gridSystemPullMaxWidth"),ng(),Ux(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),wl(212,"code"),Ux(213,"pull"),ng(),Ux(214,")."),ng(),wl(215,"p"),Ux(216,"Exemplo de uso:"),ng(),wl(217,"pre")(218,"code",21),Ux(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),ng()()()(),wl(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),Ux(224," sm"),Ul(225,"br"),ng()()(),wl(226,"td",17)(227,"code",25),Ux(228,`{ 'gridSystemSmMaxWidth': string;
}`),ng()(),wl(229,"td",12)(230,"em")(231,"strong"),Ux(232,"(opcional)"),ng()(),wl(233,"p"),Ux(234,"Define a regra para sm."),ng(),wl(235,"p")(236,"code"),Ux(237,"gridSystemSmMaxWidth"),ng(),Ux(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),wl(239,"code"),Ux(240,"sm"),ng(),Ux(241,")."),ng(),wl(242,"p"),Ux(243,"Exemplo de uso:"),ng(),wl(244,"pre")(245,"code",21),Ux(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),ng()()()(),wl(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),Ux(251," xl"),Ul(252,"br"),ng()()(),wl(253,"td",17)(254,"code",26),Ux(255,`{ 'gridSystemXlMinWidth': string;
}`),ng()(),wl(256,"td",12)(257,"em")(258,"strong"),Ux(259,"(opcional)"),ng()(),wl(260,"p"),Ux(261,"Define a regra xl."),ng(),wl(262,"p")(263,"code"),Ux(264,"gridSystemXlMinWidth"),ng(),Ux(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),wl(266,"code"),Ux(267,"pull"),ng(),Ux(268,")."),ng(),wl(269,"p"),Ux(270,"Exemplo de uso:"),ng(),wl(271,"pre")(272,"code",21),Ux(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),ng()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return d.changeTab("doc")}),Ul(3,"sample-po-media-query-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return d.changeTab("web")}),ng()()()),a&2&&(YE("p-actions",d.actions),Pp(2),YE("p-active",d.activeTab==="doc"),Pp(2),YE("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[D3,Vd,Rd,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(q),vL]})}return n})();var X=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,W]})}return n})();export{X as DocPoMediaQueryModule};