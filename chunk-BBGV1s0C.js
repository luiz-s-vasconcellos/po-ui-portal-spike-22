import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b$1,dt as Sae,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var b=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do serviço `),jc(7,`code`),iO(8,`po-media-query`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Services`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoMediaQueryService`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),wg(),jc(18,`p`),iO(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),wg(),jc(20,`p`),iO(21,`Exemplo de uso:`),wg(),jc(22,`p`),iO(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),wg(),jc(24,`pre`)(25,`code`),iO(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),wg()()(),jc(27,`h3`,6),iO(28,`Métodos`),wg(),jc(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),iO(35,` updateTokens `),wg()()()()(),jc(36,`tr`,12)(37,`td`,12)(38,`p`),iO(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),wg()()()(),jc(40,`h5`)(41,`b`),iO(42,`Parâmetros`),wg()(),jc(43,`table`,13)(44,`tr`,14)(45,`th`,15),iO(46,`Nome`),wg(),jc(47,`th`,15),iO(48,`Tipo`),wg(),jc(49,`th`,15),iO(50,`Descrição`),wg()(),jc(51,`tr`,8)(52,`td`,16),iO(53,` tokens`),wg(),jc(54,`td`,17)(55,`code`,18),iO(56,` PoMediaQueryTokens `),wg()(),jc(57,`td`,12)(58,`p`),iO(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),wg()()()(),nu(60,`br`),jc(61,`h3`),iO(62,`Interfaces`),wg(),jc(63,`h4`,19)(64,`code`,5),iO(65,`PoMediaQueryTokens`),wg()(),jc(66,`div`,2)(67,`p`),iO(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),wg(),jc(69,`blockquote`)(70,`p`),iO(71,`Os tipos de valores aceitos para cada token são: `),jc(72,`code`),iO(73,`pixels`),wg(),iO(74,` , `),jc(75,`code`),iO(76,`em`),wg(),iO(77,` e `),jc(78,`code`),iO(79,`rem`),wg(),iO(80,`.`),wg()()(),jc(81,`h4`,6),iO(82,`Propriedades`),wg(),jc(83,`table`,13)(84,`tr`,14)(85,`th`,15),iO(86,`Nome`),wg(),jc(87,`th`,15),iO(88,`Tipo`),wg(),jc(89,`th`,15),iO(90,`Descrição`),wg()(),jc(91,`tr`,8)(92,`td`,16)(93,`div`,10)(94,`span`,11),iO(95,` lg`),nu(96,`br`),wg()()(),jc(97,`td`,17)(98,`code`,20),iO(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),wg()(),jc(100,`td`,12)(101,`em`)(102,`strong`),iO(103,`(opcional)`),wg()(),jc(104,`p`),iO(105,`Define a regra para lg.`),wg(),jc(106,`p`)(107,`code`),iO(108,`gridSystemLgMinWidth`),wg(),iO(109,` define a largura mínima para o grid no tamanho pequeno (`),jc(110,`code`),iO(111,`lg`),wg(),iO(112,`).`),wg(),jc(113,`p`)(114,`code`),iO(115,`gridSystemLgMaxWidth`),wg(),iO(116,` define a largura máxima para o grid no tamanho pequeno (`),jc(117,`code`),iO(118,`lg`),wg(),iO(119,`).`),wg(),jc(120,`p`),iO(121,`Exemplo de uso:`),wg(),jc(122,`pre`)(123,`code`,21),iO(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),wg()()()(),jc(125,`tr`,8)(126,`td`,16)(127,`div`,10)(128,`span`,11),iO(129,` md`),nu(130,`br`),wg()()(),jc(131,`td`,17)(132,`code`,22),iO(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),wg()(),jc(134,`td`,12)(135,`em`)(136,`strong`),iO(137,`(opcional)`),wg()(),jc(138,`p`),iO(139,`Define a regra para md.`),wg(),jc(140,`p`)(141,`code`),iO(142,`gridSystemMdMinWidth`),wg(),iO(143,` define a largura mínima para o grid no tamanho pequeno (`),jc(144,`code`),iO(145,`md`),wg(),iO(146,`).`),wg(),jc(147,`p`)(148,`code`),iO(149,`gridSystemMdMaxWidth`),wg(),iO(150,` define a largura máxima para o grid no tamanho pequeno (`),jc(151,`code`),iO(152,`md`),wg(),iO(153,`).`),wg(),jc(154,`p`),iO(155,`Exemplo de uso:`),wg(),jc(156,`pre`)(157,`code`,21),iO(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),wg()()()(),jc(159,`tr`,8)(160,`td`,16)(161,`div`,10)(162,`span`,11),iO(163,` offset`),nu(164,`br`),wg()()(),jc(165,`td`,17)(166,`code`,23),iO(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),wg()(),jc(168,`td`,12)(169,`em`)(170,`strong`),iO(171,`(opcional)`),wg()(),jc(172,`p`),iO(173,`Define a regra offset.`),wg(),jc(174,`p`)(175,`code`),iO(176,`gridSystemOffsetMinWidth`),wg(),iO(177,` define a largura mínima para o grid no tamanho pequeno (`),jc(178,`code`),iO(179,`offset`),wg(),iO(180,`).`),wg(),jc(181,`p`)(182,`code`),iO(183,`gridSystemOffsetMaxWidth`),wg(),iO(184,` define a largura máxima para o grid no tamanho pequeno (`),jc(185,`code`),iO(186,`offset`),wg(),iO(187,`).`),wg(),jc(188,`p`),iO(189,`Exemplo de uso:`),wg(),jc(190,`pre`)(191,`code`,21),iO(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),wg()()()(),jc(193,`tr`,8)(194,`td`,16)(195,`div`,10)(196,`span`,11),iO(197,` pull`),nu(198,`br`),wg()()(),jc(199,`td`,17)(200,`code`,24),iO(201,`{ 'gridSystemPullMaxWidth': string;
}`),wg()(),jc(202,`td`,12)(203,`em`)(204,`strong`),iO(205,`(opcional)`),wg()(),jc(206,`p`),iO(207,`Define a regra pull.`),wg(),jc(208,`p`)(209,`code`),iO(210,`gridSystemPullMaxWidth`),wg(),iO(211,` define a largura máxima para o grid no tamanho pequeno (`),jc(212,`code`),iO(213,`pull`),wg(),iO(214,`).`),wg(),jc(215,`p`),iO(216,`Exemplo de uso:`),wg(),jc(217,`pre`)(218,`code`,21),iO(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),wg()()()(),jc(220,`tr`,8)(221,`td`,16)(222,`div`,10)(223,`span`,11),iO(224,` sm`),nu(225,`br`),wg()()(),jc(226,`td`,17)(227,`code`,25),iO(228,`{ 'gridSystemSmMaxWidth': string;
}`),wg()(),jc(229,`td`,12)(230,`em`)(231,`strong`),iO(232,`(opcional)`),wg()(),jc(233,`p`),iO(234,`Define a regra para sm.`),wg(),jc(235,`p`)(236,`code`),iO(237,`gridSystemSmMaxWidth`),wg(),iO(238,` define a largura máxima para o grid no tamanho pequeno (`),jc(239,`code`),iO(240,`sm`),wg(),iO(241,`).`),wg(),jc(242,`p`),iO(243,`Exemplo de uso:`),wg(),jc(244,`pre`)(245,`code`,21),iO(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),wg()()()(),jc(247,`tr`,8)(248,`td`,16)(249,`div`,10)(250,`span`,11),iO(251,` xl`),nu(252,`br`),wg()()(),jc(253,`td`,17)(254,`code`,26),iO(255,`{ 'gridSystemXlMinWidth': string;
}`),wg()(),jc(256,`td`,12)(257,`em`)(258,`strong`),iO(259,`(opcional)`),wg()(),jc(260,`p`),iO(261,`Define a regra xl.`),wg(),jc(262,`p`)(263,`code`),iO(264,`gridSystemXlMinWidth`),wg(),iO(265,` define a largura mínima para o grid no tamanho pequeno (`),jc(266,`code`),iO(267,`pull`),wg(),iO(268,`).`),wg(),jc(269,`p`),iO(270,`Exemplo de uso:`),wg(),jc(271,`pre`)(272,`code`,21),iO(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),wg()()()()()())},encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b$1(ir),b$1(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Media Query`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,d){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return d.changeTab(`doc`)}),nu(3,`sample-po-media-query-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return d.changeTab(`web`)}),wg()()()),a&2&&(jE(`p-actions`,d.actions),rg(2),jE(`p-active`,d.activeTab===`doc`),rg(2),jE(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[Kze,bae,Sae,b],encapsulation:2,changeDetection:1})}return n})()}];var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[C1.forChild(q),C1]})}return n})();var R=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[Ta,W]})}return n})();export{R as DocPoMediaQueryModule};