import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var b=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do serviço `),Tl(7,`code`),cN(8,`po-media-query`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Services`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoMediaQueryService`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),ag(),Tl(18,`p`),cN(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),ag(),Tl(20,`p`),cN(21,`Exemplo de uso:`),ag(),Tl(22,`p`),cN(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),ag(),Tl(24,`pre`)(25,`code`),cN(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),ag()()(),Tl(27,`h3`,6),cN(28,`Métodos`),ag(),Tl(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),cN(35,` updateTokens `),ag()()()()(),Tl(36,`tr`,12)(37,`td`,12)(38,`p`),cN(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),ag()()()(),Tl(40,`h5`)(41,`b`),cN(42,`Parâmetros`),ag()(),Tl(43,`table`,13)(44,`tr`,14)(45,`th`,15),cN(46,`Nome`),ag(),Tl(47,`th`,15),cN(48,`Tipo`),ag(),Tl(49,`th`,15),cN(50,`Descrição`),ag()(),Tl(51,`tr`,8)(52,`td`,16),cN(53,` tokens`),ag(),Tl(54,`td`,17)(55,`code`,18),cN(56,` PoMediaQueryTokens `),ag()(),Tl(57,`td`,12)(58,`p`),cN(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),ag()()()(),Gl(60,`br`),Tl(61,`h3`),cN(62,`Interfaces`),ag(),Tl(63,`h4`,19)(64,`code`,5),cN(65,`PoMediaQueryTokens`),ag()(),Tl(66,`div`,2)(67,`p`),cN(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),ag(),Tl(69,`blockquote`)(70,`p`),cN(71,`Os tipos de valores aceitos para cada token são: `),Tl(72,`code`),cN(73,`pixels`),ag(),cN(74,` , `),Tl(75,`code`),cN(76,`em`),ag(),cN(77,` e `),Tl(78,`code`),cN(79,`rem`),ag(),cN(80,`.`),ag()()(),Tl(81,`h4`,6),cN(82,`Propriedades`),ag(),Tl(83,`table`,13)(84,`tr`,14)(85,`th`,15),cN(86,`Nome`),ag(),Tl(87,`th`,15),cN(88,`Tipo`),ag(),Tl(89,`th`,15),cN(90,`Descrição`),ag()(),Tl(91,`tr`,8)(92,`td`,16)(93,`div`,10)(94,`span`,11),cN(95,` lg`),Gl(96,`br`),ag()()(),Tl(97,`td`,17)(98,`code`,20),cN(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),ag()(),Tl(100,`td`,12)(101,`em`)(102,`strong`),cN(103,`(opcional)`),ag()(),Tl(104,`p`),cN(105,`Define a regra para lg.`),ag(),Tl(106,`p`)(107,`code`),cN(108,`gridSystemLgMinWidth`),ag(),cN(109,` define a largura mínima para o grid no tamanho pequeno (`),Tl(110,`code`),cN(111,`lg`),ag(),cN(112,`).`),ag(),Tl(113,`p`)(114,`code`),cN(115,`gridSystemLgMaxWidth`),ag(),cN(116,` define a largura máxima para o grid no tamanho pequeno (`),Tl(117,`code`),cN(118,`lg`),ag(),cN(119,`).`),ag(),Tl(120,`p`),cN(121,`Exemplo de uso:`),ag(),Tl(122,`pre`)(123,`code`,21),cN(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),ag()()()(),Tl(125,`tr`,8)(126,`td`,16)(127,`div`,10)(128,`span`,11),cN(129,` md`),Gl(130,`br`),ag()()(),Tl(131,`td`,17)(132,`code`,22),cN(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),ag()(),Tl(134,`td`,12)(135,`em`)(136,`strong`),cN(137,`(opcional)`),ag()(),Tl(138,`p`),cN(139,`Define a regra para md.`),ag(),Tl(140,`p`)(141,`code`),cN(142,`gridSystemMdMinWidth`),ag(),cN(143,` define a largura mínima para o grid no tamanho pequeno (`),Tl(144,`code`),cN(145,`md`),ag(),cN(146,`).`),ag(),Tl(147,`p`)(148,`code`),cN(149,`gridSystemMdMaxWidth`),ag(),cN(150,` define a largura máxima para o grid no tamanho pequeno (`),Tl(151,`code`),cN(152,`md`),ag(),cN(153,`).`),ag(),Tl(154,`p`),cN(155,`Exemplo de uso:`),ag(),Tl(156,`pre`)(157,`code`,21),cN(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),ag()()()(),Tl(159,`tr`,8)(160,`td`,16)(161,`div`,10)(162,`span`,11),cN(163,` offset`),Gl(164,`br`),ag()()(),Tl(165,`td`,17)(166,`code`,23),cN(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),ag()(),Tl(168,`td`,12)(169,`em`)(170,`strong`),cN(171,`(opcional)`),ag()(),Tl(172,`p`),cN(173,`Define a regra offset.`),ag(),Tl(174,`p`)(175,`code`),cN(176,`gridSystemOffsetMinWidth`),ag(),cN(177,` define a largura mínima para o grid no tamanho pequeno (`),Tl(178,`code`),cN(179,`offset`),ag(),cN(180,`).`),ag(),Tl(181,`p`)(182,`code`),cN(183,`gridSystemOffsetMaxWidth`),ag(),cN(184,` define a largura máxima para o grid no tamanho pequeno (`),Tl(185,`code`),cN(186,`offset`),ag(),cN(187,`).`),ag(),Tl(188,`p`),cN(189,`Exemplo de uso:`),ag(),Tl(190,`pre`)(191,`code`,21),cN(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),ag()()()(),Tl(193,`tr`,8)(194,`td`,16)(195,`div`,10)(196,`span`,11),cN(197,` pull`),Gl(198,`br`),ag()()(),Tl(199,`td`,17)(200,`code`,24),cN(201,`{ 'gridSystemPullMaxWidth': string;
}`),ag()(),Tl(202,`td`,12)(203,`em`)(204,`strong`),cN(205,`(opcional)`),ag()(),Tl(206,`p`),cN(207,`Define a regra pull.`),ag(),Tl(208,`p`)(209,`code`),cN(210,`gridSystemPullMaxWidth`),ag(),cN(211,` define a largura máxima para o grid no tamanho pequeno (`),Tl(212,`code`),cN(213,`pull`),ag(),cN(214,`).`),ag(),Tl(215,`p`),cN(216,`Exemplo de uso:`),ag(),Tl(217,`pre`)(218,`code`,21),cN(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),ag()()()(),Tl(220,`tr`,8)(221,`td`,16)(222,`div`,10)(223,`span`,11),cN(224,` sm`),Gl(225,`br`),ag()()(),Tl(226,`td`,17)(227,`code`,25),cN(228,`{ 'gridSystemSmMaxWidth': string;
}`),ag()(),Tl(229,`td`,12)(230,`em`)(231,`strong`),cN(232,`(opcional)`),ag()(),Tl(233,`p`),cN(234,`Define a regra para sm.`),ag(),Tl(235,`p`)(236,`code`),cN(237,`gridSystemSmMaxWidth`),ag(),cN(238,` define a largura máxima para o grid no tamanho pequeno (`),Tl(239,`code`),cN(240,`sm`),ag(),cN(241,`).`),ag(),Tl(242,`p`),cN(243,`Exemplo de uso:`),ag(),Tl(244,`pre`)(245,`code`,21),cN(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),ag()()()(),Tl(247,`tr`,8)(248,`td`,16)(249,`div`,10)(250,`span`,11),cN(251,` xl`),Gl(252,`br`),ag()()(),Tl(253,`td`,17)(254,`code`,26),cN(255,`{ 'gridSystemXlMinWidth': string;
}`),ag()(),Tl(256,`td`,12)(257,`em`)(258,`strong`),cN(259,`(opcional)`),ag()(),Tl(260,`p`),cN(261,`Define a regra xl.`),ag(),Tl(262,`p`)(263,`code`),cN(264,`gridSystemXlMinWidth`),ag(),cN(265,` define a largura mínima para o grid no tamanho pequeno (`),Tl(266,`code`),cN(267,`pull`),ag(),cN(268,`).`),ag(),Tl(269,`p`),cN(270,`Exemplo de uso:`),ag(),Tl(271,`pre`)(272,`code`,21),cN(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),ag()()()()()())},encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Media Query`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,d){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return d.changeTab(`doc`)}),Gl(3,`sample-po-media-query-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return d.changeTab(`web`)}),ag()()()),a&2&&(nw(`p-actions`,d.actions),jp(2),nw(`p-active`,d.activeTab===`doc`),jp(2),nw(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,b],encapsulation:2,changeDetection:1})}return n})()}];var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(q),bL]})}return n})();var R=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,W]})}return n})();export{R as DocPoMediaQueryModule};