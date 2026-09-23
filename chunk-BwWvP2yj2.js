import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var b=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do serviço `),Ml(7,`code`),mN(8,`po-media-query`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Services`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoMediaQueryService`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),lg(),Ml(18,`p`),mN(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),lg(),Ml(20,`p`),mN(21,`Exemplo de uso:`),lg(),Ml(22,`p`),mN(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),lg(),Ml(24,`pre`)(25,`code`),mN(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),lg()()(),Ml(27,`h3`,6),mN(28,`Métodos`),lg(),Ml(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),mN(35,` updateTokens `),lg()()()()(),Ml(36,`tr`,12)(37,`td`,12)(38,`p`),mN(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),lg()()()(),Ml(40,`h5`)(41,`b`),mN(42,`Parâmetros`),lg()(),Ml(43,`table`,13)(44,`tr`,14)(45,`th`,15),mN(46,`Nome`),lg(),Ml(47,`th`,15),mN(48,`Tipo`),lg(),Ml(49,`th`,15),mN(50,`Descrição`),lg()(),Ml(51,`tr`,8)(52,`td`,16),mN(53,` tokens`),lg(),Ml(54,`td`,17)(55,`code`,18),mN(56,` PoMediaQueryTokens `),lg()(),Ml(57,`td`,12)(58,`p`),mN(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),lg()()()(),ql(60,`br`),Ml(61,`h3`),mN(62,`Interfaces`),lg(),Ml(63,`h4`,19)(64,`code`,5),mN(65,`PoMediaQueryTokens`),lg()(),Ml(66,`div`,2)(67,`p`),mN(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),lg(),Ml(69,`blockquote`)(70,`p`),mN(71,`Os tipos de valores aceitos para cada token são: `),Ml(72,`code`),mN(73,`pixels`),lg(),mN(74,` , `),Ml(75,`code`),mN(76,`em`),lg(),mN(77,` e `),Ml(78,`code`),mN(79,`rem`),lg(),mN(80,`.`),lg()()(),Ml(81,`h4`,6),mN(82,`Propriedades`),lg(),Ml(83,`table`,13)(84,`tr`,14)(85,`th`,15),mN(86,`Nome`),lg(),Ml(87,`th`,15),mN(88,`Tipo`),lg(),Ml(89,`th`,15),mN(90,`Descrição`),lg()(),Ml(91,`tr`,8)(92,`td`,16)(93,`div`,10)(94,`span`,11),mN(95,` lg`),ql(96,`br`),lg()()(),Ml(97,`td`,17)(98,`code`,20),mN(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),lg()(),Ml(100,`td`,12)(101,`em`)(102,`strong`),mN(103,`(opcional)`),lg()(),Ml(104,`p`),mN(105,`Define a regra para lg.`),lg(),Ml(106,`p`)(107,`code`),mN(108,`gridSystemLgMinWidth`),lg(),mN(109,` define a largura mínima para o grid no tamanho pequeno (`),Ml(110,`code`),mN(111,`lg`),lg(),mN(112,`).`),lg(),Ml(113,`p`)(114,`code`),mN(115,`gridSystemLgMaxWidth`),lg(),mN(116,` define a largura máxima para o grid no tamanho pequeno (`),Ml(117,`code`),mN(118,`lg`),lg(),mN(119,`).`),lg(),Ml(120,`p`),mN(121,`Exemplo de uso:`),lg(),Ml(122,`pre`)(123,`code`,21),mN(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),lg()()()(),Ml(125,`tr`,8)(126,`td`,16)(127,`div`,10)(128,`span`,11),mN(129,` md`),ql(130,`br`),lg()()(),Ml(131,`td`,17)(132,`code`,22),mN(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),lg()(),Ml(134,`td`,12)(135,`em`)(136,`strong`),mN(137,`(opcional)`),lg()(),Ml(138,`p`),mN(139,`Define a regra para md.`),lg(),Ml(140,`p`)(141,`code`),mN(142,`gridSystemMdMinWidth`),lg(),mN(143,` define a largura mínima para o grid no tamanho pequeno (`),Ml(144,`code`),mN(145,`md`),lg(),mN(146,`).`),lg(),Ml(147,`p`)(148,`code`),mN(149,`gridSystemMdMaxWidth`),lg(),mN(150,` define a largura máxima para o grid no tamanho pequeno (`),Ml(151,`code`),mN(152,`md`),lg(),mN(153,`).`),lg(),Ml(154,`p`),mN(155,`Exemplo de uso:`),lg(),Ml(156,`pre`)(157,`code`,21),mN(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),lg()()()(),Ml(159,`tr`,8)(160,`td`,16)(161,`div`,10)(162,`span`,11),mN(163,` offset`),ql(164,`br`),lg()()(),Ml(165,`td`,17)(166,`code`,23),mN(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),lg()(),Ml(168,`td`,12)(169,`em`)(170,`strong`),mN(171,`(opcional)`),lg()(),Ml(172,`p`),mN(173,`Define a regra offset.`),lg(),Ml(174,`p`)(175,`code`),mN(176,`gridSystemOffsetMinWidth`),lg(),mN(177,` define a largura mínima para o grid no tamanho pequeno (`),Ml(178,`code`),mN(179,`offset`),lg(),mN(180,`).`),lg(),Ml(181,`p`)(182,`code`),mN(183,`gridSystemOffsetMaxWidth`),lg(),mN(184,` define a largura máxima para o grid no tamanho pequeno (`),Ml(185,`code`),mN(186,`offset`),lg(),mN(187,`).`),lg(),Ml(188,`p`),mN(189,`Exemplo de uso:`),lg(),Ml(190,`pre`)(191,`code`,21),mN(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),lg()()()(),Ml(193,`tr`,8)(194,`td`,16)(195,`div`,10)(196,`span`,11),mN(197,` pull`),ql(198,`br`),lg()()(),Ml(199,`td`,17)(200,`code`,24),mN(201,`{ 'gridSystemPullMaxWidth': string;
}`),lg()(),Ml(202,`td`,12)(203,`em`)(204,`strong`),mN(205,`(opcional)`),lg()(),Ml(206,`p`),mN(207,`Define a regra pull.`),lg(),Ml(208,`p`)(209,`code`),mN(210,`gridSystemPullMaxWidth`),lg(),mN(211,` define a largura máxima para o grid no tamanho pequeno (`),Ml(212,`code`),mN(213,`pull`),lg(),mN(214,`).`),lg(),Ml(215,`p`),mN(216,`Exemplo de uso:`),lg(),Ml(217,`pre`)(218,`code`,21),mN(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),lg()()()(),Ml(220,`tr`,8)(221,`td`,16)(222,`div`,10)(223,`span`,11),mN(224,` sm`),ql(225,`br`),lg()()(),Ml(226,`td`,17)(227,`code`,25),mN(228,`{ 'gridSystemSmMaxWidth': string;
}`),lg()(),Ml(229,`td`,12)(230,`em`)(231,`strong`),mN(232,`(opcional)`),lg()(),Ml(233,`p`),mN(234,`Define a regra para sm.`),lg(),Ml(235,`p`)(236,`code`),mN(237,`gridSystemSmMaxWidth`),lg(),mN(238,` define a largura máxima para o grid no tamanho pequeno (`),Ml(239,`code`),mN(240,`sm`),lg(),mN(241,`).`),lg(),Ml(242,`p`),mN(243,`Exemplo de uso:`),lg(),Ml(244,`pre`)(245,`code`,21),mN(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),lg()()()(),Ml(247,`tr`,8)(248,`td`,16)(249,`div`,10)(250,`span`,11),mN(251,` xl`),ql(252,`br`),lg()()(),Ml(253,`td`,17)(254,`code`,26),mN(255,`{ 'gridSystemXlMinWidth': string;
}`),lg()(),Ml(256,`td`,12)(257,`em`)(258,`strong`),mN(259,`(opcional)`),lg()(),Ml(260,`p`),mN(261,`Define a regra xl.`),lg(),Ml(262,`p`)(263,`code`),mN(264,`gridSystemXlMinWidth`),lg(),mN(265,` define a largura mínima para o grid no tamanho pequeno (`),Ml(266,`code`),mN(267,`pull`),lg(),mN(268,`).`),lg(),Ml(269,`p`),mN(270,`Exemplo de uso:`),lg(),Ml(271,`pre`)(272,`code`,21),mN(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),lg()()()()()())},encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Media Query`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,d){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return d.changeTab(`doc`)}),ql(3,`sample-po-media-query-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return d.changeTab(`web`)}),lg()()()),a&2&&(cw(`p-actions`,d.actions),Up(2),cw(`p-active`,d.activeTab===`doc`),Up(2),cw(`p-hide`,d.hidePoWebSample)(`p-active`,d.activeTab===`web`))},dependencies:[V8e,SCe,ECe,b],encapsulation:2,changeDetection:1})}return n})()}];var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(q),NL]})}return n})();var R=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,W]})}return n})();export{R as DocPoMediaQueryModule};