import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Mi as m_,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,hi as g_,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var D=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoI18nModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do serviço `),jc(7,`code`),iO(8,`PoI18nService`),wg(),iO(9,` para controle de idiomas com PO.`),wg(),jc(10,`p`),iO(11,`Para utilização do serviço de idiomas `),jc(12,`code`),iO(13,`PoI18nService`),wg(),iO(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),jc(15,`code`),iO(16,`PoModule`),wg(),iO(17,`. Na importação deve ser invocado o método `),jc(18,`code`),iO(19,`config`),wg(),iO(20,`, informando um objeto que deve implementar
a interface `),jc(21,`a`,3)(22,`code`),iO(23,`PoI18nConfig`),wg()(),iO(24,` para configuração.`),wg(),jc(25,`p`),nu(26,`a`,4),jc(27,`strong`),iO(28,`Exemplo de configuração do módulo do i18n:`),wg()(),jc(29,`pre`)(30,`code`),iO(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),wg()(),jc(32,`p`),iO(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),wg(),jc(34,`p`),iO(35,`Arquivo general-pt.ts`),wg(),jc(36,`pre`)(37,`code`),iO(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),wg()(),jc(39,`p`),iO(40,`Arquivo general-en.ts`),wg(),jc(41,`pre`)(42,`code`),iO(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),wg()(),jc(44,`p`)(45,`strong`),iO(46,`Exemplo de configuração de contextos usando constantes externas:`),wg()(),jc(47,`pre`)(48,`code`),iO(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),wg()(),jc(50,`p`)(51,`strong`),iO(52,`Exemplo de configuração de um contexto utilizando serviço:`),wg()(),jc(53,`p`),iO(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),wg(),jc(55,`ul`)(56,`li`)(57,`a`,5),iO(58,`http://10.0.0.1:3000/api/translations/crm`),wg()(),jc(59,`li`)(60,`a`,6),iO(61,`http://10.0.0.1:3000/api/translations/general`),wg()()(),jc(62,`p`),iO(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),wg(),jc(64,`ul`)(65,`li`)(66,`strong`),iO(67,`language`),wg(),iO(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),jc(69,`code`),iO(70,`pt-br`),wg(),iO(71,`, `),jc(72,`code`),iO(73,`en-us`),wg(),iO(74,`, `),jc(75,`code`),iO(76,`es-es`),wg(),iO(77,` ou `),jc(78,`code`),iO(79,`ru`),wg(),iO(80,`).`),wg(),jc(81,`li`)(82,`strong`),iO(83,`literals`),wg(),iO(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),wg()(),jc(85,`p`),iO(86,`Exemplos de requisição:`),wg(),jc(87,`ul`)(88,`li`)(89,`a`,7),iO(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),wg()(),jc(91,`li`)(92,`a`,8),iO(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),wg()()(),jc(94,`blockquote`)(95,`p`),iO(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),jc(97,`code`),iO(98,`pt-br`),wg(),iO(99,`.`),wg()(),jc(100,`p`),iO(101,`Além dos contextos, é possível definir as configurações `),jc(102,`em`),iO(103,`default`),wg(),iO(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),jc(105,`a`,3)(106,`code`),iO(107,`PoI18nConfig`),wg()(),iO(108,`:`),wg(),jc(109,`p`)(110,`strong`),iO(111,`Exemplo de padrões definidos:`),wg()(),jc(112,`pre`)(113,`code`),iO(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),wg()(),jc(115,`p`)(116,`strong`),iO(117,`Importante:`),wg()(),jc(118,`p`),iO(119,`Recomenda-se que as definições `),jc(120,`em`),iO(121,`default`),wg(),iO(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),jc(123,`code`),iO(124,`AppModule`),wg(),iO(125,`.`),wg(),jc(126,`p`)(127,`strong`),iO(128,`i18n com `),jc(129,`em`),iO(130,`Lazy loading`),wg()()(),jc(131,`p`),iO(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),jc(133,`em`),iO(134,`lazy loading`),wg(),iO(135,`, caso seja
definida outra configura\xE7\xE3o do `),jc(136,`code`),iO(137,`PoI18nModule`),wg(),iO(138,`, deve-se atentar os seguintes detalhes:`),wg(),jc(139,`ul`)(140,`li`),iO(141,`Não defina outra `),jc(142,`em`),iO(143,`default language`),wg(),iO(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),wg(),jc(145,`li`),iO(146,`Caso precise de módulos carregados via `),jc(147,`em`),iO(148,`lazy loading`),wg(),iO(149,` com linguagens diferentes, utilize o
m\xE9todo `),jc(150,`a`,9)(151,`code`),iO(152,`setLanguage()`),wg()(),iO(153,` disponibilizado pelo `),jc(154,`code`),iO(155,`PoI18nService`),wg(),iO(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),wg()()(),jc(157,`h3`,10),iO(158,`Services`),wg(),jc(159,`h4`,11)(160,`code`,12),iO(161,`PoI18nService`),wg()(),jc(162,`div`,2)(163,`p`),iO(164,`O serviço `),jc(165,`code`),iO(166,`PoI18nService`),wg(),iO(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),wg(),jc(168,`blockquote`)(169,`p`),iO(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),jc(171,`a`,13),iO(172,`importação e configuração do módulo `),jc(173,`code`),iO(174,`PoI18nModule`),wg()(),iO(175,`.`),wg()(),jc(176,`p`)(177,`strong`),iO(178,`Utilização do serviço `),jc(179,`code`),iO(180,`PoI18nService`),wg(),iO(181,`:`),wg()(),jc(182,`p`),iO(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),wg(),jc(184,`pre`)(185,`code`),iO(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),wg()(),jc(187,`p`),iO(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),jc(189,`a`,14),iO(190,`Observable`),wg(),iO(191,` pelo
m\xE9todo `),jc(192,`code`),iO(193,`getLiterals()`),wg(),iO(194,`.`),wg(),jc(195,`blockquote`)(196,`p`),iO(197,`O método `),jc(198,`code`),iO(199,`getLiterals()`),wg(),iO(200,` pode receber um objeto do tipo da interface `),jc(201,`code`),iO(202,`PoI18nLiterals`),wg(),iO(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),wg()(),jc(204,`ul`)(205,`li`)(206,`h2`),iO(207,`Alterações a partir da versão 19`),wg()()(),jc(208,`p`),iO(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),jc(210,`code`),iO(211,`getLiterals`),wg(),iO(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),jc(213,`code`),iO(214,`getLiterals`),wg(),iO(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),wg(),jc(216,`p`)(217,`strong`),iO(218,`Exemplo de chamada com contexto explícito:`),wg()(),jc(219,`pre`)(220,`code`,15),iO(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),wg()(),jc(222,`p`)(223,`strong`),iO(224,`Cenário de Contextos Iguais:`),wg(),iO(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),wg(),jc(226,`p`)(227,`strong`),iO(228,`Recomendações:`),wg()(),jc(229,`ul`)(230,`li`),iO(231,`Sempre informar o contexto ao chamar `),jc(232,`code`),iO(233,`getLiterals`),wg(),iO(234,` para evitar conflitos de literais.`),wg(),jc(235,`li`),iO(236,`Caso a aplicação utilize `),jc(237,`code`),iO(238,`lazy loading`),wg(),iO(239,`, utilizar `),jc(240,`code`),iO(241,`setLanguage()`),wg(),iO(242,` para garantir a correta configuração de idioma.`),wg()(),jc(243,`p`),iO(244,`Exemplos de requisição:`),wg(),jc(245,`pre`)(246,`code`),iO(247,`literals = {};
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
`),wg()(),jc(248,`p`),iO(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),wg(),jc(250,`pre`),m_(),iO(251,`{{ literals?.add }}
{{ literals?.remove }}
`),g_(),wg(),jc(252,`p`),iO(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),jc(254,`em`),iO(255,`pipe`),wg(),jc(256,`code`),iO(257,`poI18n`),wg(),iO(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),jc(259,`code`),iO(260,`name`),wg(),iO(261,` e `),jc(262,`code`),iO(263,`nickname`),wg(),iO(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),wg(),jc(265,`pre`),m_(),iO(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),g_(),wg(),jc(267,`blockquote`)(268,`p`),iO(269,`É importante o uso do operador `),jc(270,`code`),iO(271,`?`),wg(),iO(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),wg()(),jc(273,`h3`),iO(274,`Teste unitário`),wg(),jc(275,`p`),iO(276,`Abaixo segue um exemplo de `),jc(277,`em`),iO(278,`setup`),wg(),iO(279,` inicial de teste unitário do `),jc(280,`em`),iO(281,`AppComponent`),wg(),iO(282,` que utiliza o `),jc(283,`code`),iO(284,`PoI18nService`),wg(),iO(285,`:`),wg(),jc(286,`blockquote`)(287,`p`),iO(288,`Atenção: não declarar o `),jc(289,`code`),iO(290,`PoI18nService`),wg(),iO(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),wg()(),jc(292,`pre`)(293,`code`),iO(294,`import { async, TestBed } from '@angular/core/testing';
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
`),wg()()(),jc(295,`h3`,16),iO(296,`Métodos`),wg(),jc(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),iO(303,` getLanguage `),wg()()()()(),jc(304,`tr`,22)(305,`td`,22)(306,`p`),nu(307,`a`,23),iO(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),wg(),jc(309,`p`),iO(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),wg(),jc(311,`p`),iO(312,` 1 - o idioma que foi armazenado no `),jc(313,`em`),iO(314,`localStorage`),wg(),iO(315,`, através do método `),jc(316,`a`,9)(317,`code`),iO(318,`setLanguage()`),wg()(),iO(319,`.`),wg(),jc(320,`p`),iO(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),jc(322,`code`),iO(323,`config`),wg(),iO(324,`, sendo o idioma inserido na propriedade
`),jc(325,`code`),iO(326,`language`),wg(),iO(327,` da interface `),jc(328,`a`,24)(329,`code`),iO(330,`PoI18nConfigDefault`),wg()(),iO(331,`.`),wg(),jc(332,`p`),iO(333,` 3 - o idioma do navegador utilizado.`),wg(),jc(334,`blockquote`)(335,`p`),iO(336,`Caso o idioma do navegador não seja suportado pelo PO (`),jc(337,`code`),iO(338,`pt`),wg(),iO(339,`, `),jc(340,`code`),iO(341,`en`),wg(),iO(342,`, `),jc(343,`code`),iO(344,`es`),wg(),iO(345,` ou `),jc(346,`code`),iO(347,`ru`),wg(),iO(348,`), será retornado valor `),jc(349,`code`),iO(350,`pt`),wg(),iO(351,`.`),wg()()()()(),jc(352,`h5`)(353,`b`),iO(354,`Retorno`),wg()(),jc(355,`table`,25)(356,`tr`,26)(357,`th`,27),iO(358,`Tipo`),wg(),jc(359,`th`,27),iO(360,`Descrição`),wg()(),jc(361,`tr`,18)(362,`td`,28)(363,`code`,29),iO(364,`string`),wg()(),jc(365,`td`,22)(366,`p`),iO(367,`sigla do idioma padrão.`),wg()()()(),nu(368,`br`),jc(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),iO(375,` getShortLanguage `),wg()()()()(),jc(376,`tr`,22)(377,`td`,22)(378,`p`),iO(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),wg(),jc(380,`p`),iO(381,`A busca deste idioma é baseada no método `),jc(382,`a`,30)(383,`strong`),iO(384,`getLanguage()`),wg()(),iO(385,`.`),wg()()()(),jc(386,`h5`)(387,`b`),iO(388,`Retorno`),wg()(),jc(389,`table`,25)(390,`tr`,26)(391,`th`,27),iO(392,`Tipo`),wg(),jc(393,`th`,27),iO(394,`Descrição`),wg()(),jc(395,`tr`,18)(396,`td`,28)(397,`code`,29),iO(398,`string`),wg()(),jc(399,`td`,22)(400,`p`),iO(401,`sigla do idioma padrão.`),wg()()()(),nu(402,`br`),jc(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),iO(409,` setLanguage `),wg()()()()(),jc(410,`tr`,22)(411,`td`,22)(412,`p`),nu(413,`a`,31),iO(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),wg(),jc(415,`p`),iO(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),jc(417,`code`),iO(418,`i18n`),wg(),iO(419,` para buscar as literais no idioma padrão.`),wg()()()(),jc(420,`h5`)(421,`b`),iO(422,`Parâmetros`),wg()(),jc(423,`table`,25)(424,`tr`,26)(425,`th`,27),iO(426,`Nome`),wg(),jc(427,`th`,27),iO(428,`Tipo`),wg(),jc(429,`th`,27),iO(430,`Descrição`),wg()(),jc(431,`tr`,18)(432,`td`,32),iO(433,` language`),wg(),jc(434,`td`,28)(435,`code`,29),iO(436,` string `),wg()(),jc(437,`td`,22)(438,`p`),iO(439,`Sigla do idioma.`),wg(),jc(440,`p`),iO(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),jc(442,`code`),iO(443,`pt`),wg(),iO(444,`, `),jc(445,`code`),iO(446,`pt-BR`),wg(),iO(447,`, `),jc(448,`code`),iO(449,`pt-br`),wg(),iO(450,`, `),jc(451,`code`),iO(452,`en`),wg(),iO(453,` ou `),jc(454,`code`),iO(455,`en-US`),wg(),iO(456,`.`),wg(),jc(457,`blockquote`)(458,`p`),iO(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),wg()()()(),jc(460,`tr`,18)(461,`td`,32),iO(462,` reload`),wg(),jc(463,`td`,28)(464,`code`,29),iO(465,` boolean `),wg()(),jc(466,`td`,22)(467,`p`),iO(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),wg(),jc(469,`p`),iO(470,`Este recurso pode ser útil para os usuários que utilizam o método `),jc(471,`code`),iO(472,`getLiterals()`),wg(),iO(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),wg()()()(),nu(474,`br`),jc(475,`h3`),iO(476,`Interfaces`),wg(),jc(477,`h4`,33)(478,`code`,12),iO(479,`PoI18nConfigContext`),wg()(),jc(480,`div`,2)(481,`p`),nu(482,`a`,34),wg(),jc(483,`p`),iO(484,`Interface para a configuração dos contextos do módulo `),jc(485,`code`),iO(486,`PoI18nModule`),wg(),iO(487,`.`),wg()(),jc(488,`h4`,33)(489,`code`,12),iO(490,`PoI18nConfigDefault`),wg()(),jc(491,`div`,2)(492,`p`),nu(493,`a`,35),wg(),jc(494,`p`),iO(495,`Interface para a configuração padrão do módulo PoI18nModule.`),wg()(),jc(496,`h4`,16),iO(497,`Propriedades`),wg(),jc(498,`table`,25)(499,`tr`,26)(500,`th`,27),iO(501,`Nome`),wg(),jc(502,`th`,27),iO(503,`Tipo`),wg(),jc(504,`th`,27),iO(505,`Descrição`),wg()(),jc(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),iO(510,` cache`),nu(511,`br`),wg()()(),jc(512,`td`,28)(513,`code`,36),iO(514,`boolean`),wg()(),jc(515,`td`,22)(516,`em`)(517,`strong`),iO(518,`(opcional)`),wg()(),jc(519,`p`),iO(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),wg(),jc(521,`p`),iO(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),wg(),jc(523,`p`),iO(524,`Por padrão não utiliza.`),wg()()(),jc(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),iO(529,` context`),nu(530,`br`),wg()()(),jc(531,`td`,28)(532,`code`,37),iO(533,`string`),wg()(),jc(534,`td`,22)(535,`em`)(536,`strong`),iO(537,`(opcional)`),wg()(),jc(538,`p`),iO(539,`Define o contexto que será buscado por padrão pelo serviço.`),wg(),jc(540,`blockquote`)(541,`p`),iO(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),wg()()()(),jc(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),iO(547,` language`),nu(548,`br`),wg()()(),jc(549,`td`,28)(550,`code`,37),iO(551,`string`),wg()(),jc(552,`td`,22)(553,`em`)(554,`strong`),iO(555,`(opcional)`),wg()(),jc(556,`p`),iO(557,`Idioma que será buscado por padrão pelo serviço.`),wg(),jc(558,`p`),iO(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),jc(560,`a`,9)(561,`code`),iO(562,`setLanguage()`),wg()(),iO(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),wg()()()(),jc(564,`h4`,33)(565,`code`,12),iO(566,`PoI18nConfig`),wg()(),jc(567,`div`,2)(568,`p`),nu(569,`a`,38),wg(),jc(570,`p`),iO(571,`Interface para a configuração do módulo `),jc(572,`code`),iO(573,`PoI18nModule`),wg(),iO(574,`.`),wg()(),jc(575,`h4`,16),iO(576,`Propriedades`),wg(),jc(577,`table`,25)(578,`tr`,26)(579,`th`,27),iO(580,`Nome`),wg(),jc(581,`th`,27),iO(582,`Tipo`),wg(),jc(583,`th`,27),iO(584,`Descrição`),wg()(),jc(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),iO(589,` contexts`),nu(590,`br`),wg()()(),jc(591,`td`,28)(592,`code`,39),iO(593,`PoI18nConfigContext`),wg()(),jc(594,`td`,22)(595,`p`),iO(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),jc(597,`code`),iO(598,`url`),wg(),iO(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),wg(),jc(600,`p`),iO(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),wg(),jc(602,`pre`)(603,`code`),iO(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),wg()(),jc(605,`p`),iO(606,`E como informado, podemos utilizar a propriedade `),jc(607,`code`),iO(608,`url`),wg(),iO(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),wg(),jc(610,`pre`)(611,`code`),iO(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),wg()(),jc(613,`p`),iO(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),wg(),jc(615,`pre`)(616,`code`),iO(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),wg()(),jc(618,`p`),iO(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),wg(),jc(620,`ul`)(621,`li`)(622,`code`),iO(623,`language`),wg(),iO(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),jc(625,`code`),iO(626,`pt-br`),wg(),iO(627,`, `),jc(628,`code`),iO(629,`en-us`),wg(),iO(630,`);`),wg(),jc(631,`li`)(632,`code`),iO(633,`literals`),wg(),iO(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),wg()(),jc(635,`p`),iO(636,`Exemplos de requisição:`),wg(),jc(637,`pre`)(638,`code`),iO(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),wg()(),jc(640,`blockquote`)(641,`p`),iO(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),jc(643,`code`),iO(644,`pt-br`),wg(),iO(645,`.`),wg()(),jc(646,`p`),iO(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),jc(648,`em`),iO(649,`backup`),wg(),iO(650,` caso o serviço esteja indisponível, por exemplo:`),wg(),jc(651,`pre`)(652,`code`),iO(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),wg()(),jc(654,`blockquote`)(655,`p`),iO(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),wg()()()(),jc(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),iO(661,` default`),nu(662,`br`),wg()()(),jc(663,`td`,28)(664,`code`,40),iO(665,`PoI18nConfigDefault`),wg()(),jc(666,`td`,22)(667,`em`)(668,`strong`),iO(669,`(opcional)`),wg()(),jc(670,`p`),iO(671,`Configurações padrões.`),wg()()()(),jc(672,`h4`,33)(673,`code`,12),iO(674,`PoI18nLiterals`),wg()(),jc(675,`div`,2)(676,`p`),iO(677,`Interface para o método `),jc(678,`code`),iO(679,`getLiterals()`),wg(),iO(680,` do serviço PoI18nService.`),wg()(),jc(681,`h4`,16),iO(682,`Propriedades`),wg(),jc(683,`table`,25)(684,`tr`,26)(685,`th`,27),iO(686,`Nome`),wg(),jc(687,`th`,27),iO(688,`Tipo`),wg(),jc(689,`th`,27),iO(690,`Descrição`),wg()(),jc(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),iO(695,` context`),nu(696,`br`),wg()()(),jc(697,`td`,28)(698,`code`,37),iO(699,`string`),wg()(),jc(700,`td`,22)(701,`em`)(702,`strong`),iO(703,`(opcional)`),wg()(),jc(704,`p`),iO(705,`Contexto utilizado na busca das literais.`),wg()()(),jc(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),iO(710,` language`),nu(711,`br`),wg()()(),jc(712,`td`,28)(713,`code`,37),iO(714,`string`),wg()(),jc(715,`td`,22)(716,`em`)(717,`strong`),iO(718,`(opcional)`),wg()(),jc(719,`p`),iO(720,`Idioma a ser buscado.`),wg()()(),jc(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),iO(725,` literals`),nu(726,`br`),wg()()(),jc(727,`td`,28)(728,`code`,41),iO(729,`Array<string>`),wg()(),jc(730,`td`,22)(731,`em`)(732,`strong`),iO(733,`(opcional)`),wg()(),jc(734,`p`),iO(735,`Lista das literais.`),wg()()()(),jc(736,`h4`,33)(737,`code`,12),iO(738,`PoLanguage`),wg()(),jc(739,`div`,2)(740,`p`),nu(741,`a`,42),wg(),jc(742,`p`),iO(743,`Interface para descrição das linguagens disponíveis no sistema.`),wg()(),jc(744,`h4`,16),iO(745,`Propriedades`),wg(),jc(746,`table`,25)(747,`tr`,26)(748,`th`,27),iO(749,`Nome`),wg(),jc(750,`th`,27),iO(751,`Tipo`),wg(),jc(752,`th`,27),iO(753,`Descrição`),wg()(),jc(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),iO(758,` description`),nu(759,`br`),wg()()(),jc(760,`td`,28)(761,`code`,37),iO(762,`string`),wg()(),jc(763,`td`,22)(764,`em`)(765,`strong`),iO(766,`(opcional)`),wg()(),jc(767,`p`),iO(768,`Descrição do idioma`),wg()()(),jc(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),iO(773,` language`),nu(774,`br`),wg()()(),jc(775,`td`,28)(776,`code`,37),iO(777,`string`),wg()(),jc(778,`td`,22)(779,`em`)(780,`strong`),iO(781,`(opcional)`),wg()(),jc(782,`p`),iO(783,`Código do idioma `),jc(784,`a`,43),iO(785,`ISO 639-1`),wg()(),jc(786,`blockquote`)(787,`p`),iO(788,`Exemplo: 'pt','en'`),wg()()()()(),jc(789,`h4`,33)(790,`code`,12),iO(791,`PoNumberSeparator`),wg()(),jc(792,`div`,2)(793,`p`),nu(794,`a`,44),wg(),jc(795,`p`),iO(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),wg()(),jc(797,`h4`,16),iO(798,`Propriedades`),wg(),jc(799,`table`,25)(800,`tr`,26)(801,`th`,27),iO(802,`Nome`),wg(),jc(803,`th`,27),iO(804,`Tipo`),wg(),jc(805,`th`,27),iO(806,`Descrição`),wg()(),jc(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),iO(811,` language`),nu(812,`br`),wg()()(),jc(813,`td`,28)(814,`code`,37),iO(815,`string`),wg()(),jc(816,`td`,22)(817,`em`)(818,`strong`),iO(819,`(opcional)`),wg()(),jc(820,`p`),iO(821,`Código do idioma `),jc(822,`a`,43),iO(823,`ISO 639-1`),wg()(),jc(824,`blockquote`)(825,`p`),iO(826,`Exemplo: 'pt','en'`),wg()()()(),jc(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),iO(831,` separator`),nu(832,`br`),wg()()(),jc(833,`td`,28)(834,`code`,37),iO(835,`string`),wg()(),jc(836,`td`,22)(837,`em`)(838,`strong`),iO(839,`(opcional)`),wg()(),jc(840,`p`),iO(841,`Separador numérico`),wg()()()(),jc(842,`h4`,33)(843,`code`,12),iO(844,`PoDateSeparator`),wg()(),jc(845,`div`,2)(846,`p`),nu(847,`a`,45),wg(),jc(848,`p`),iO(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),wg()(),jc(850,`h4`,16),iO(851,`Propriedades`),wg(),jc(852,`table`,25)(853,`tr`,26)(854,`th`,27),iO(855,`Nome`),wg(),jc(856,`th`,27),iO(857,`Tipo`),wg(),jc(858,`th`,27),iO(859,`Descrição`),wg()(),jc(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),iO(864,` locale`),nu(865,`br`),wg()()(),jc(866,`td`,28)(867,`code`,37),iO(868,`string`),wg()(),jc(869,`td`,22)(870,`em`)(871,`strong`),iO(872,`(opcional)`),wg()(),jc(873,`p`),iO(874,`Código do locale `),jc(875,`a`,43),iO(876,`ISO 639-1`),wg()(),jc(877,`blockquote`)(878,`p`),iO(879,`Exemplo: 'pt','en'`),wg()()()(),jc(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),iO(884,` separator`),nu(885,`br`),wg()()(),jc(886,`td`,28)(887,`code`,37),iO(888,`string`),wg()(),jc(889,`td`,22)(890,`em`)(891,`strong`),iO(892,`(opcional)`),wg()(),jc(893,`p`),iO(894,`Separador de data`),wg(),jc(895,`blockquote`)(896,`p`),iO(897,`Exemplo: '/','.','-'`),wg()()()()()())},encapsulation:2,changeDetection:1})}return o})();var T=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-i18n-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),wg()()()),a&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,D],encapsulation:2,changeDetection:1})}return o})()}];var z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(T),C1]})}return o})();var H=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,z]})}return o})();export{H as DocPoI18nModule};