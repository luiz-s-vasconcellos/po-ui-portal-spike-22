import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,ii as Zy,l as ar,lr as Gl,on as mCe,pa as w,sa as ue,ti as Yy,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var D=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoI18nModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do serviço `),Tl(7,`code`),cN(8,`PoI18nService`),ag(),cN(9,` para controle de idiomas com PO.`),ag(),Tl(10,`p`),cN(11,`Para utilização do serviço de idiomas `),Tl(12,`code`),cN(13,`PoI18nService`),ag(),cN(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Tl(15,`code`),cN(16,`PoModule`),ag(),cN(17,`. Na importação deve ser invocado o método `),Tl(18,`code`),cN(19,`config`),ag(),cN(20,`, informando um objeto que deve implementar
a interface `),Tl(21,`a`,3)(22,`code`),cN(23,`PoI18nConfig`),ag()(),cN(24,` para configuração.`),ag(),Tl(25,`p`),Gl(26,`a`,4),Tl(27,`strong`),cN(28,`Exemplo de configuração do módulo do i18n:`),ag()(),Tl(29,`pre`)(30,`code`),cN(31,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
    hcm: {
      url: 'http://10.1.1.1/api/translations/hcm/'
    }
  }
};

@NgModule({
  declarations: [],
  imports: [
    PoModule,
    PoI18nModule.config(i18nConfig)
  ],
  bootstrap: [AppComponent]
})
`),ag()(),Tl(32,`p`),cN(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),ag(),Tl(34,`p`),cN(35,`Arquivo general-pt.ts`),ag(),Tl(36,`pre`)(37,`code`),cN(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),ag()(),Tl(39,`p`),cN(40,`Arquivo general-en.ts`),ag(),Tl(41,`pre`)(42,`code`),cN(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),ag()(),Tl(44,`p`)(45,`strong`),cN(46,`Exemplo de configuração de contextos usando constantes externas:`),ag()(),Tl(47,`pre`)(48,`code`),cN(49,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  contexts: {
    general: {
      'pt-BR': generalPt, // constantes em arquivos separados
      'en-US': generalEn // constantes em arquivos separados
    },
    crm: {
      url: 'http://10.0.0.1:3000/api/translations/crm'
    }
  },
  default: {}
}
`),ag()(),Tl(50,`p`)(51,`strong`),cN(52,`Exemplo de configuração de um contexto utilizando serviço:`),ag()(),Tl(53,`p`),cN(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),ag(),Tl(55,`ul`)(56,`li`)(57,`a`,5),cN(58,`http://10.0.0.1:3000/api/translations/crm`),ag()(),Tl(59,`li`)(60,`a`,6),cN(61,`http://10.0.0.1:3000/api/translations/general`),ag()()(),Tl(62,`p`),cN(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),ag(),Tl(64,`ul`)(65,`li`)(66,`strong`),cN(67,`language`),ag(),cN(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Tl(69,`code`),cN(70,`pt-br`),ag(),cN(71,`, `),Tl(72,`code`),cN(73,`en-us`),ag(),cN(74,`, `),Tl(75,`code`),cN(76,`es-es`),ag(),cN(77,` ou `),Tl(78,`code`),cN(79,`ru`),ag(),cN(80,`).`),ag(),Tl(81,`li`)(82,`strong`),cN(83,`literals`),ag(),cN(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ag()(),Tl(85,`p`),cN(86,`Exemplos de requisição:`),ag(),Tl(87,`ul`)(88,`li`)(89,`a`,7),cN(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),ag()(),Tl(91,`li`)(92,`a`,8),cN(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),ag()()(),Tl(94,`blockquote`)(95,`p`),cN(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Tl(97,`code`),cN(98,`pt-br`),ag(),cN(99,`.`),ag()(),Tl(100,`p`),cN(101,`Além dos contextos, é possível definir as configurações `),Tl(102,`em`),cN(103,`default`),ag(),cN(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Tl(105,`a`,3)(106,`code`),cN(107,`PoI18nConfig`),ag()(),cN(108,`:`),ag(),Tl(109,`p`)(110,`strong`),cN(111,`Exemplo de padrões definidos:`),ag()(),Tl(112,`pre`)(113,`code`),cN(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),ag()(),Tl(115,`p`)(116,`strong`),cN(117,`Importante:`),ag()(),Tl(118,`p`),cN(119,`Recomenda-se que as definições `),Tl(120,`em`),cN(121,`default`),ag(),cN(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Tl(123,`code`),cN(124,`AppModule`),ag(),cN(125,`.`),ag(),Tl(126,`p`)(127,`strong`),cN(128,`i18n com `),Tl(129,`em`),cN(130,`Lazy loading`),ag()()(),Tl(131,`p`),cN(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Tl(133,`em`),cN(134,`lazy loading`),ag(),cN(135,`, caso seja
definida outra configura\xE7\xE3o do `),Tl(136,`code`),cN(137,`PoI18nModule`),ag(),cN(138,`, deve-se atentar os seguintes detalhes:`),ag(),Tl(139,`ul`)(140,`li`),cN(141,`Não defina outra `),Tl(142,`em`),cN(143,`default language`),ag(),cN(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),ag(),Tl(145,`li`),cN(146,`Caso precise de módulos carregados via `),Tl(147,`em`),cN(148,`lazy loading`),ag(),cN(149,` com linguagens diferentes, utilize o
m\xE9todo `),Tl(150,`a`,9)(151,`code`),cN(152,`setLanguage()`),ag()(),cN(153,` disponibilizado pelo `),Tl(154,`code`),cN(155,`PoI18nService`),ag(),cN(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),ag()()(),Tl(157,`h3`,10),cN(158,`Services`),ag(),Tl(159,`h4`,11)(160,`code`,12),cN(161,`PoI18nService`),ag()(),Tl(162,`div`,2)(163,`p`),cN(164,`O serviço `),Tl(165,`code`),cN(166,`PoI18nService`),ag(),cN(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),ag(),Tl(168,`blockquote`)(169,`p`),cN(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Tl(171,`a`,13),cN(172,`importação e configuração do módulo `),Tl(173,`code`),cN(174,`PoI18nModule`),ag()(),cN(175,`.`),ag()(),Tl(176,`p`)(177,`strong`),cN(178,`Utilização do serviço `),Tl(179,`code`),cN(180,`PoI18nService`),ag(),cN(181,`:`),ag()(),Tl(182,`p`),cN(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),ag(),Tl(184,`pre`)(185,`code`),cN(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),ag()(),Tl(187,`p`),cN(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Tl(189,`a`,14),cN(190,`Observable`),ag(),cN(191,` pelo
m\xE9todo `),Tl(192,`code`),cN(193,`getLiterals()`),ag(),cN(194,`.`),ag(),Tl(195,`blockquote`)(196,`p`),cN(197,`O método `),Tl(198,`code`),cN(199,`getLiterals()`),ag(),cN(200,` pode receber um objeto do tipo da interface `),Tl(201,`code`),cN(202,`PoI18nLiterals`),ag(),cN(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),ag()(),Tl(204,`ul`)(205,`li`)(206,`h2`),cN(207,`Alterações a partir da versão 19`),ag()()(),Tl(208,`p`),cN(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Tl(210,`code`),cN(211,`getLiterals`),ag(),cN(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Tl(213,`code`),cN(214,`getLiterals`),ag(),cN(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),ag(),Tl(216,`p`)(217,`strong`),cN(218,`Exemplo de chamada com contexto explícito:`),ag()(),Tl(219,`pre`)(220,`code`,15),cN(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),ag()(),Tl(222,`p`)(223,`strong`),cN(224,`Cenário de Contextos Iguais:`),ag(),cN(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),ag(),Tl(226,`p`)(227,`strong`),cN(228,`Recomendações:`),ag()(),Tl(229,`ul`)(230,`li`),cN(231,`Sempre informar o contexto ao chamar `),Tl(232,`code`),cN(233,`getLiterals`),ag(),cN(234,` para evitar conflitos de literais.`),ag(),Tl(235,`li`),cN(236,`Caso a aplicação utilize `),Tl(237,`code`),cN(238,`lazy loading`),ag(),cN(239,`, utilizar `),Tl(240,`code`),cN(241,`setLanguage()`),ag(),cN(242,` para garantir a correta configuração de idioma.`),ag()(),Tl(243,`p`),cN(244,`Exemplos de requisição:`),ag(),Tl(245,`pre`)(246,`code`),cN(247,`literals = {};
literalsEn = {};
literalsCrm = {};

constructor(private poI18nService: PoI18nService) {
  poI18nService.getLiterals()
    .subscribe((literals) => {
      this.literals = literals;
    });

  poI18nService.getLiterals({context: 'crm', literals: ['add', 'remove']})
    .subscribe((literals) => {
      this.literalsCrm = literals;
    });

  poI18nService.getLiterals({language: 'en-us'})
    .subscribe((literals) => {
      this.literalsEn = literals;
    });
}
`),ag()(),Tl(248,`p`),cN(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),ag(),Tl(250,`pre`),Zy(),cN(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Yy(),ag(),Tl(252,`p`),cN(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Tl(254,`em`),cN(255,`pipe`),ag(),Tl(256,`code`),cN(257,`poI18n`),ag(),cN(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Tl(259,`code`),cN(260,`name`),ag(),cN(261,` e `),Tl(262,`code`),cN(263,`nickname`),ag(),cN(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),ag(),Tl(265,`pre`),Zy(),cN(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Yy(),ag(),Tl(267,`blockquote`)(268,`p`),cN(269,`É importante o uso do operador `),Tl(270,`code`),cN(271,`?`),ag(),cN(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),ag()(),Tl(273,`h3`),cN(274,`Teste unitário`),ag(),Tl(275,`p`),cN(276,`Abaixo segue um exemplo de `),Tl(277,`em`),cN(278,`setup`),ag(),cN(279,` inicial de teste unitário do `),Tl(280,`em`),cN(281,`AppComponent`),ag(),cN(282,` que utiliza o `),Tl(283,`code`),cN(284,`PoI18nService`),ag(),cN(285,`:`),ag(),Tl(286,`blockquote`)(287,`p`),cN(288,`Atenção: não declarar o `),Tl(289,`code`),cN(290,`PoI18nService`),ag(),cN(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),ag()(),Tl(292,`pre`)(293,`code`),cN(294,`import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PoI18nModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const anotherPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const generalPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const config = {
    default: {
      language: 'pt-BR',
      context: 'general',
      cache: false
    },
    contexts: {
      general: {
        'pt-br': generalPT
      },
      another: {
        'pt-br': anotherPT
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        PoI18nModule.config(config)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

});
`),ag()()(),Tl(295,`h3`,16),cN(296,`Métodos`),ag(),Tl(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),cN(303,` getLanguage `),ag()()()()(),Tl(304,`tr`,22)(305,`td`,22)(306,`p`),Gl(307,`a`,23),cN(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),ag(),Tl(309,`p`),cN(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),ag(),Tl(311,`p`),cN(312,` 1 - o idioma que foi armazenado no `),Tl(313,`em`),cN(314,`localStorage`),ag(),cN(315,`, através do método `),Tl(316,`a`,9)(317,`code`),cN(318,`setLanguage()`),ag()(),cN(319,`.`),ag(),Tl(320,`p`),cN(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Tl(322,`code`),cN(323,`config`),ag(),cN(324,`, sendo o idioma inserido na propriedade
`),Tl(325,`code`),cN(326,`language`),ag(),cN(327,` da interface `),Tl(328,`a`,24)(329,`code`),cN(330,`PoI18nConfigDefault`),ag()(),cN(331,`.`),ag(),Tl(332,`p`),cN(333,` 3 - o idioma do navegador utilizado.`),ag(),Tl(334,`blockquote`)(335,`p`),cN(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Tl(337,`code`),cN(338,`pt`),ag(),cN(339,`, `),Tl(340,`code`),cN(341,`en`),ag(),cN(342,`, `),Tl(343,`code`),cN(344,`es`),ag(),cN(345,` ou `),Tl(346,`code`),cN(347,`ru`),ag(),cN(348,`), será retornado valor `),Tl(349,`code`),cN(350,`pt`),ag(),cN(351,`.`),ag()()()()(),Tl(352,`h5`)(353,`b`),cN(354,`Retorno`),ag()(),Tl(355,`table`,25)(356,`tr`,26)(357,`th`,27),cN(358,`Tipo`),ag(),Tl(359,`th`,27),cN(360,`Descrição`),ag()(),Tl(361,`tr`,18)(362,`td`,28)(363,`code`,29),cN(364,`string`),ag()(),Tl(365,`td`,22)(366,`p`),cN(367,`sigla do idioma padrão.`),ag()()()(),Gl(368,`br`),Tl(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),cN(375,` getShortLanguage `),ag()()()()(),Tl(376,`tr`,22)(377,`td`,22)(378,`p`),cN(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),ag(),Tl(380,`p`),cN(381,`A busca deste idioma é baseada no método `),Tl(382,`a`,30)(383,`strong`),cN(384,`getLanguage()`),ag()(),cN(385,`.`),ag()()()(),Tl(386,`h5`)(387,`b`),cN(388,`Retorno`),ag()(),Tl(389,`table`,25)(390,`tr`,26)(391,`th`,27),cN(392,`Tipo`),ag(),Tl(393,`th`,27),cN(394,`Descrição`),ag()(),Tl(395,`tr`,18)(396,`td`,28)(397,`code`,29),cN(398,`string`),ag()(),Tl(399,`td`,22)(400,`p`),cN(401,`sigla do idioma padrão.`),ag()()()(),Gl(402,`br`),Tl(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),cN(409,` setLanguage `),ag()()()()(),Tl(410,`tr`,22)(411,`td`,22)(412,`p`),Gl(413,`a`,31),cN(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),ag(),Tl(415,`p`),cN(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Tl(417,`code`),cN(418,`i18n`),ag(),cN(419,` para buscar as literais no idioma padrão.`),ag()()()(),Tl(420,`h5`)(421,`b`),cN(422,`Parâmetros`),ag()(),Tl(423,`table`,25)(424,`tr`,26)(425,`th`,27),cN(426,`Nome`),ag(),Tl(427,`th`,27),cN(428,`Tipo`),ag(),Tl(429,`th`,27),cN(430,`Descrição`),ag()(),Tl(431,`tr`,18)(432,`td`,32),cN(433,` language`),ag(),Tl(434,`td`,28)(435,`code`,29),cN(436,` string `),ag()(),Tl(437,`td`,22)(438,`p`),cN(439,`Sigla do idioma.`),ag(),Tl(440,`p`),cN(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Tl(442,`code`),cN(443,`pt`),ag(),cN(444,`, `),Tl(445,`code`),cN(446,`pt-BR`),ag(),cN(447,`, `),Tl(448,`code`),cN(449,`pt-br`),ag(),cN(450,`, `),Tl(451,`code`),cN(452,`en`),ag(),cN(453,` ou `),Tl(454,`code`),cN(455,`en-US`),ag(),cN(456,`.`),ag(),Tl(457,`blockquote`)(458,`p`),cN(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),ag()()()(),Tl(460,`tr`,18)(461,`td`,32),cN(462,` reload`),ag(),Tl(463,`td`,28)(464,`code`,29),cN(465,` boolean `),ag()(),Tl(466,`td`,22)(467,`p`),cN(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),ag(),Tl(469,`p`),cN(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Tl(471,`code`),cN(472,`getLiterals()`),ag(),cN(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),ag()()()(),Gl(474,`br`),Tl(475,`h3`),cN(476,`Interfaces`),ag(),Tl(477,`h4`,33)(478,`code`,12),cN(479,`PoI18nConfigContext`),ag()(),Tl(480,`div`,2)(481,`p`),Gl(482,`a`,34),ag(),Tl(483,`p`),cN(484,`Interface para a configuração dos contextos do módulo `),Tl(485,`code`),cN(486,`PoI18nModule`),ag(),cN(487,`.`),ag()(),Tl(488,`h4`,33)(489,`code`,12),cN(490,`PoI18nConfigDefault`),ag()(),Tl(491,`div`,2)(492,`p`),Gl(493,`a`,35),ag(),Tl(494,`p`),cN(495,`Interface para a configuração padrão do módulo PoI18nModule.`),ag()(),Tl(496,`h4`,16),cN(497,`Propriedades`),ag(),Tl(498,`table`,25)(499,`tr`,26)(500,`th`,27),cN(501,`Nome`),ag(),Tl(502,`th`,27),cN(503,`Tipo`),ag(),Tl(504,`th`,27),cN(505,`Descrição`),ag()(),Tl(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),cN(510,` cache`),Gl(511,`br`),ag()()(),Tl(512,`td`,28)(513,`code`,36),cN(514,`boolean`),ag()(),Tl(515,`td`,22)(516,`em`)(517,`strong`),cN(518,`(opcional)`),ag()(),Tl(519,`p`),cN(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),ag(),Tl(521,`p`),cN(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),ag(),Tl(523,`p`),cN(524,`Por padrão não utiliza.`),ag()()(),Tl(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),cN(529,` context`),Gl(530,`br`),ag()()(),Tl(531,`td`,28)(532,`code`,37),cN(533,`string`),ag()(),Tl(534,`td`,22)(535,`em`)(536,`strong`),cN(537,`(opcional)`),ag()(),Tl(538,`p`),cN(539,`Define o contexto que será buscado por padrão pelo serviço.`),ag(),Tl(540,`blockquote`)(541,`p`),cN(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),ag()()()(),Tl(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),cN(547,` language`),Gl(548,`br`),ag()()(),Tl(549,`td`,28)(550,`code`,37),cN(551,`string`),ag()(),Tl(552,`td`,22)(553,`em`)(554,`strong`),cN(555,`(opcional)`),ag()(),Tl(556,`p`),cN(557,`Idioma que será buscado por padrão pelo serviço.`),ag(),Tl(558,`p`),cN(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Tl(560,`a`,9)(561,`code`),cN(562,`setLanguage()`),ag()(),cN(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),ag()()()(),Tl(564,`h4`,33)(565,`code`,12),cN(566,`PoI18nConfig`),ag()(),Tl(567,`div`,2)(568,`p`),Gl(569,`a`,38),ag(),Tl(570,`p`),cN(571,`Interface para a configuração do módulo `),Tl(572,`code`),cN(573,`PoI18nModule`),ag(),cN(574,`.`),ag()(),Tl(575,`h4`,16),cN(576,`Propriedades`),ag(),Tl(577,`table`,25)(578,`tr`,26)(579,`th`,27),cN(580,`Nome`),ag(),Tl(581,`th`,27),cN(582,`Tipo`),ag(),Tl(583,`th`,27),cN(584,`Descrição`),ag()(),Tl(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),cN(589,` contexts`),Gl(590,`br`),ag()()(),Tl(591,`td`,28)(592,`code`,39),cN(593,`PoI18nConfigContext`),ag()(),Tl(594,`td`,22)(595,`p`),cN(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Tl(597,`code`),cN(598,`url`),ag(),cN(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),ag(),Tl(600,`p`),cN(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),ag(),Tl(602,`pre`)(603,`code`),cN(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),ag()(),Tl(605,`p`),cN(606,`E como informado, podemos utilizar a propriedade `),Tl(607,`code`),cN(608,`url`),ag(),cN(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),ag(),Tl(610,`pre`)(611,`code`),cN(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),ag()(),Tl(613,`p`),cN(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),ag(),Tl(615,`pre`)(616,`code`),cN(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),ag()(),Tl(618,`p`),cN(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),ag(),Tl(620,`ul`)(621,`li`)(622,`code`),cN(623,`language`),ag(),cN(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Tl(625,`code`),cN(626,`pt-br`),ag(),cN(627,`, `),Tl(628,`code`),cN(629,`en-us`),ag(),cN(630,`);`),ag(),Tl(631,`li`)(632,`code`),cN(633,`literals`),ag(),cN(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ag()(),Tl(635,`p`),cN(636,`Exemplos de requisição:`),ag(),Tl(637,`pre`)(638,`code`),cN(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),ag()(),Tl(640,`blockquote`)(641,`p`),cN(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Tl(643,`code`),cN(644,`pt-br`),ag(),cN(645,`.`),ag()(),Tl(646,`p`),cN(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Tl(648,`em`),cN(649,`backup`),ag(),cN(650,` caso o serviço esteja indisponível, por exemplo:`),ag(),Tl(651,`pre`)(652,`code`),cN(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),ag()(),Tl(654,`blockquote`)(655,`p`),cN(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),ag()()()(),Tl(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),cN(661,` default`),Gl(662,`br`),ag()()(),Tl(663,`td`,28)(664,`code`,40),cN(665,`PoI18nConfigDefault`),ag()(),Tl(666,`td`,22)(667,`em`)(668,`strong`),cN(669,`(opcional)`),ag()(),Tl(670,`p`),cN(671,`Configurações padrões.`),ag()()()(),Tl(672,`h4`,33)(673,`code`,12),cN(674,`PoI18nLiterals`),ag()(),Tl(675,`div`,2)(676,`p`),cN(677,`Interface para o método `),Tl(678,`code`),cN(679,`getLiterals()`),ag(),cN(680,` do serviço PoI18nService.`),ag()(),Tl(681,`h4`,16),cN(682,`Propriedades`),ag(),Tl(683,`table`,25)(684,`tr`,26)(685,`th`,27),cN(686,`Nome`),ag(),Tl(687,`th`,27),cN(688,`Tipo`),ag(),Tl(689,`th`,27),cN(690,`Descrição`),ag()(),Tl(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),cN(695,` context`),Gl(696,`br`),ag()()(),Tl(697,`td`,28)(698,`code`,37),cN(699,`string`),ag()(),Tl(700,`td`,22)(701,`em`)(702,`strong`),cN(703,`(opcional)`),ag()(),Tl(704,`p`),cN(705,`Contexto utilizado na busca das literais.`),ag()()(),Tl(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),cN(710,` language`),Gl(711,`br`),ag()()(),Tl(712,`td`,28)(713,`code`,37),cN(714,`string`),ag()(),Tl(715,`td`,22)(716,`em`)(717,`strong`),cN(718,`(opcional)`),ag()(),Tl(719,`p`),cN(720,`Idioma a ser buscado.`),ag()()(),Tl(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),cN(725,` literals`),Gl(726,`br`),ag()()(),Tl(727,`td`,28)(728,`code`,41),cN(729,`Array<string>`),ag()(),Tl(730,`td`,22)(731,`em`)(732,`strong`),cN(733,`(opcional)`),ag()(),Tl(734,`p`),cN(735,`Lista das literais.`),ag()()()(),Tl(736,`h4`,33)(737,`code`,12),cN(738,`PoLanguage`),ag()(),Tl(739,`div`,2)(740,`p`),Gl(741,`a`,42),ag(),Tl(742,`p`),cN(743,`Interface para descrição das linguagens disponíveis no sistema.`),ag()(),Tl(744,`h4`,16),cN(745,`Propriedades`),ag(),Tl(746,`table`,25)(747,`tr`,26)(748,`th`,27),cN(749,`Nome`),ag(),Tl(750,`th`,27),cN(751,`Tipo`),ag(),Tl(752,`th`,27),cN(753,`Descrição`),ag()(),Tl(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),cN(758,` description`),Gl(759,`br`),ag()()(),Tl(760,`td`,28)(761,`code`,37),cN(762,`string`),ag()(),Tl(763,`td`,22)(764,`em`)(765,`strong`),cN(766,`(opcional)`),ag()(),Tl(767,`p`),cN(768,`Descrição do idioma`),ag()()(),Tl(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),cN(773,` language`),Gl(774,`br`),ag()()(),Tl(775,`td`,28)(776,`code`,37),cN(777,`string`),ag()(),Tl(778,`td`,22)(779,`em`)(780,`strong`),cN(781,`(opcional)`),ag()(),Tl(782,`p`),cN(783,`Código do idioma `),Tl(784,`a`,43),cN(785,`ISO 639-1`),ag()(),Tl(786,`blockquote`)(787,`p`),cN(788,`Exemplo: 'pt','en'`),ag()()()()(),Tl(789,`h4`,33)(790,`code`,12),cN(791,`PoNumberSeparator`),ag()(),Tl(792,`div`,2)(793,`p`),Gl(794,`a`,44),ag(),Tl(795,`p`),cN(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),ag()(),Tl(797,`h4`,16),cN(798,`Propriedades`),ag(),Tl(799,`table`,25)(800,`tr`,26)(801,`th`,27),cN(802,`Nome`),ag(),Tl(803,`th`,27),cN(804,`Tipo`),ag(),Tl(805,`th`,27),cN(806,`Descrição`),ag()(),Tl(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),cN(811,` language`),Gl(812,`br`),ag()()(),Tl(813,`td`,28)(814,`code`,37),cN(815,`string`),ag()(),Tl(816,`td`,22)(817,`em`)(818,`strong`),cN(819,`(opcional)`),ag()(),Tl(820,`p`),cN(821,`Código do idioma `),Tl(822,`a`,43),cN(823,`ISO 639-1`),ag()(),Tl(824,`blockquote`)(825,`p`),cN(826,`Exemplo: 'pt','en'`),ag()()()(),Tl(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),cN(831,` separator`),Gl(832,`br`),ag()()(),Tl(833,`td`,28)(834,`code`,37),cN(835,`string`),ag()(),Tl(836,`td`,22)(837,`em`)(838,`strong`),cN(839,`(opcional)`),ag()(),Tl(840,`p`),cN(841,`Separador numérico`),ag()()()(),Tl(842,`h4`,33)(843,`code`,12),cN(844,`PoDateSeparator`),ag()(),Tl(845,`div`,2)(846,`p`),Gl(847,`a`,45),ag(),Tl(848,`p`),cN(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),ag()(),Tl(850,`h4`,16),cN(851,`Propriedades`),ag(),Tl(852,`table`,25)(853,`tr`,26)(854,`th`,27),cN(855,`Nome`),ag(),Tl(856,`th`,27),cN(857,`Tipo`),ag(),Tl(858,`th`,27),cN(859,`Descrição`),ag()(),Tl(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),cN(864,` locale`),Gl(865,`br`),ag()()(),Tl(866,`td`,28)(867,`code`,37),cN(868,`string`),ag()(),Tl(869,`td`,22)(870,`em`)(871,`strong`),cN(872,`(opcional)`),ag()(),Tl(873,`p`),cN(874,`Código do locale `),Tl(875,`a`,43),cN(876,`ISO 639-1`),ag()(),Tl(877,`blockquote`)(878,`p`),cN(879,`Exemplo: 'pt','en'`),ag()()()(),Tl(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),cN(884,` separator`),Gl(885,`br`),ag()()(),Tl(886,`td`,28)(887,`code`,37),cN(888,`string`),ag()(),Tl(889,`td`,22)(890,`em`)(891,`strong`),cN(892,`(opcional)`),ag()(),Tl(893,`p`),cN(894,`Separador de data`),ag(),Tl(895,`blockquote`)(896,`p`),cN(897,`Exemplo: '/','.','-'`),ag()()()()()())},encapsulation:2,changeDetection:1})}return o})();var T=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-i18n-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ag()()()),a&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,D],encapsulation:2,changeDetection:1})}return o})()}];var z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(T),bL]})}return o})();var H=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,z]})}return o})();export{H as DocPoI18nModule};