import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue,ti as Xv,zr as Qv}from"./main-LIMZAZLW.js";var D=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoI18nModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do serviço `),Ac(7,`code`),vN(8,`PoI18nService`),ug(),vN(9,` para controle de idiomas com PO.`),ug(),Ac(10,`p`),vN(11,`Para utilização do serviço de idiomas `),Ac(12,`code`),vN(13,`PoI18nService`),ug(),vN(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Ac(15,`code`),vN(16,`PoModule`),ug(),vN(17,`. Na importação deve ser invocado o método `),Ac(18,`code`),vN(19,`config`),ug(),vN(20,`, informando um objeto que deve implementar
a interface `),Ac(21,`a`,3)(22,`code`),vN(23,`PoI18nConfig`),ug()(),vN(24,` para configuração.`),ug(),Ac(25,`p`),Kc(26,`a`,4),Ac(27,`strong`),vN(28,`Exemplo de configuração do módulo do i18n:`),ug()(),Ac(29,`pre`)(30,`code`),vN(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),ug()(),Ac(32,`p`),vN(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),ug(),Ac(34,`p`),vN(35,`Arquivo general-pt.ts`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),ug()(),Ac(39,`p`),vN(40,`Arquivo general-en.ts`),ug(),Ac(41,`pre`)(42,`code`),vN(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),ug()(),Ac(44,`p`)(45,`strong`),vN(46,`Exemplo de configuração de contextos usando constantes externas:`),ug()(),Ac(47,`pre`)(48,`code`),vN(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),ug()(),Ac(50,`p`)(51,`strong`),vN(52,`Exemplo de configuração de um contexto utilizando serviço:`),ug()(),Ac(53,`p`),vN(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),ug(),Ac(55,`ul`)(56,`li`)(57,`a`,5),vN(58,`http://10.0.0.1:3000/api/translations/crm`),ug()(),Ac(59,`li`)(60,`a`,6),vN(61,`http://10.0.0.1:3000/api/translations/general`),ug()()(),Ac(62,`p`),vN(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),ug(),Ac(64,`ul`)(65,`li`)(66,`strong`),vN(67,`language`),ug(),vN(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Ac(69,`code`),vN(70,`pt-br`),ug(),vN(71,`, `),Ac(72,`code`),vN(73,`en-us`),ug(),vN(74,`, `),Ac(75,`code`),vN(76,`es-es`),ug(),vN(77,` ou `),Ac(78,`code`),vN(79,`ru`),ug(),vN(80,`).`),ug(),Ac(81,`li`)(82,`strong`),vN(83,`literals`),ug(),vN(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ug()(),Ac(85,`p`),vN(86,`Exemplos de requisição:`),ug(),Ac(87,`ul`)(88,`li`)(89,`a`,7),vN(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),ug()(),Ac(91,`li`)(92,`a`,8),vN(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),ug()()(),Ac(94,`blockquote`)(95,`p`),vN(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Ac(97,`code`),vN(98,`pt-br`),ug(),vN(99,`.`),ug()(),Ac(100,`p`),vN(101,`Além dos contextos, é possível definir as configurações `),Ac(102,`em`),vN(103,`default`),ug(),vN(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Ac(105,`a`,3)(106,`code`),vN(107,`PoI18nConfig`),ug()(),vN(108,`:`),ug(),Ac(109,`p`)(110,`strong`),vN(111,`Exemplo de padrões definidos:`),ug()(),Ac(112,`pre`)(113,`code`),vN(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),ug()(),Ac(115,`p`)(116,`strong`),vN(117,`Importante:`),ug()(),Ac(118,`p`),vN(119,`Recomenda-se que as definições `),Ac(120,`em`),vN(121,`default`),ug(),vN(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Ac(123,`code`),vN(124,`AppModule`),ug(),vN(125,`.`),ug(),Ac(126,`p`)(127,`strong`),vN(128,`i18n com `),Ac(129,`em`),vN(130,`Lazy loading`),ug()()(),Ac(131,`p`),vN(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Ac(133,`em`),vN(134,`lazy loading`),ug(),vN(135,`, caso seja
definida outra configura\xE7\xE3o do `),Ac(136,`code`),vN(137,`PoI18nModule`),ug(),vN(138,`, deve-se atentar os seguintes detalhes:`),ug(),Ac(139,`ul`)(140,`li`),vN(141,`Não defina outra `),Ac(142,`em`),vN(143,`default language`),ug(),vN(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),ug(),Ac(145,`li`),vN(146,`Caso precise de módulos carregados via `),Ac(147,`em`),vN(148,`lazy loading`),ug(),vN(149,` com linguagens diferentes, utilize o
m\xE9todo `),Ac(150,`a`,9)(151,`code`),vN(152,`setLanguage()`),ug()(),vN(153,` disponibilizado pelo `),Ac(154,`code`),vN(155,`PoI18nService`),ug(),vN(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),ug()()(),Ac(157,`h3`,10),vN(158,`Services`),ug(),Ac(159,`h4`,11)(160,`code`,12),vN(161,`PoI18nService`),ug()(),Ac(162,`div`,2)(163,`p`),vN(164,`O serviço `),Ac(165,`code`),vN(166,`PoI18nService`),ug(),vN(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),ug(),Ac(168,`blockquote`)(169,`p`),vN(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Ac(171,`a`,13),vN(172,`importação e configuração do módulo `),Ac(173,`code`),vN(174,`PoI18nModule`),ug()(),vN(175,`.`),ug()(),Ac(176,`p`)(177,`strong`),vN(178,`Utilização do serviço `),Ac(179,`code`),vN(180,`PoI18nService`),ug(),vN(181,`:`),ug()(),Ac(182,`p`),vN(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),ug(),Ac(184,`pre`)(185,`code`),vN(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),ug()(),Ac(187,`p`),vN(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Ac(189,`a`,14),vN(190,`Observable`),ug(),vN(191,` pelo
m\xE9todo `),Ac(192,`code`),vN(193,`getLiterals()`),ug(),vN(194,`.`),ug(),Ac(195,`blockquote`)(196,`p`),vN(197,`O método `),Ac(198,`code`),vN(199,`getLiterals()`),ug(),vN(200,` pode receber um objeto do tipo da interface `),Ac(201,`code`),vN(202,`PoI18nLiterals`),ug(),vN(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),ug()(),Ac(204,`ul`)(205,`li`)(206,`h2`),vN(207,`Alterações a partir da versão 19`),ug()()(),Ac(208,`p`),vN(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Ac(210,`code`),vN(211,`getLiterals`),ug(),vN(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Ac(213,`code`),vN(214,`getLiterals`),ug(),vN(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),ug(),Ac(216,`p`)(217,`strong`),vN(218,`Exemplo de chamada com contexto explícito:`),ug()(),Ac(219,`pre`)(220,`code`,15),vN(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),ug()(),Ac(222,`p`)(223,`strong`),vN(224,`Cenário de Contextos Iguais:`),ug(),vN(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),ug(),Ac(226,`p`)(227,`strong`),vN(228,`Recomendações:`),ug()(),Ac(229,`ul`)(230,`li`),vN(231,`Sempre informar o contexto ao chamar `),Ac(232,`code`),vN(233,`getLiterals`),ug(),vN(234,` para evitar conflitos de literais.`),ug(),Ac(235,`li`),vN(236,`Caso a aplicação utilize `),Ac(237,`code`),vN(238,`lazy loading`),ug(),vN(239,`, utilizar `),Ac(240,`code`),vN(241,`setLanguage()`),ug(),vN(242,` para garantir a correta configuração de idioma.`),ug()(),Ac(243,`p`),vN(244,`Exemplos de requisição:`),ug(),Ac(245,`pre`)(246,`code`),vN(247,`literals = {};
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
`),ug()(),Ac(248,`p`),vN(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),ug(),Ac(250,`pre`),Qv(),vN(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Xv(),ug(),Ac(252,`p`),vN(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Ac(254,`em`),vN(255,`pipe`),ug(),Ac(256,`code`),vN(257,`poI18n`),ug(),vN(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Ac(259,`code`),vN(260,`name`),ug(),vN(261,` e `),Ac(262,`code`),vN(263,`nickname`),ug(),vN(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),ug(),Ac(265,`pre`),Qv(),vN(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Xv(),ug(),Ac(267,`blockquote`)(268,`p`),vN(269,`É importante o uso do operador `),Ac(270,`code`),vN(271,`?`),ug(),vN(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),ug()(),Ac(273,`h3`),vN(274,`Teste unitário`),ug(),Ac(275,`p`),vN(276,`Abaixo segue um exemplo de `),Ac(277,`em`),vN(278,`setup`),ug(),vN(279,` inicial de teste unitário do `),Ac(280,`em`),vN(281,`AppComponent`),ug(),vN(282,` que utiliza o `),Ac(283,`code`),vN(284,`PoI18nService`),ug(),vN(285,`:`),ug(),Ac(286,`blockquote`)(287,`p`),vN(288,`Atenção: não declarar o `),Ac(289,`code`),vN(290,`PoI18nService`),ug(),vN(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),ug()(),Ac(292,`pre`)(293,`code`),vN(294,`import { async, TestBed } from '@angular/core/testing';
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
`),ug()()(),Ac(295,`h3`,16),vN(296,`Métodos`),ug(),Ac(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),vN(303,` getLanguage `),ug()()()()(),Ac(304,`tr`,22)(305,`td`,22)(306,`p`),Kc(307,`a`,23),vN(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),ug(),Ac(309,`p`),vN(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),ug(),Ac(311,`p`),vN(312,` 1 - o idioma que foi armazenado no `),Ac(313,`em`),vN(314,`localStorage`),ug(),vN(315,`, através do método `),Ac(316,`a`,9)(317,`code`),vN(318,`setLanguage()`),ug()(),vN(319,`.`),ug(),Ac(320,`p`),vN(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Ac(322,`code`),vN(323,`config`),ug(),vN(324,`, sendo o idioma inserido na propriedade
`),Ac(325,`code`),vN(326,`language`),ug(),vN(327,` da interface `),Ac(328,`a`,24)(329,`code`),vN(330,`PoI18nConfigDefault`),ug()(),vN(331,`.`),ug(),Ac(332,`p`),vN(333,` 3 - o idioma do navegador utilizado.`),ug(),Ac(334,`blockquote`)(335,`p`),vN(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Ac(337,`code`),vN(338,`pt`),ug(),vN(339,`, `),Ac(340,`code`),vN(341,`en`),ug(),vN(342,`, `),Ac(343,`code`),vN(344,`es`),ug(),vN(345,` ou `),Ac(346,`code`),vN(347,`ru`),ug(),vN(348,`), será retornado valor `),Ac(349,`code`),vN(350,`pt`),ug(),vN(351,`.`),ug()()()()(),Ac(352,`h5`)(353,`b`),vN(354,`Retorno`),ug()(),Ac(355,`table`,25)(356,`tr`,26)(357,`th`,27),vN(358,`Tipo`),ug(),Ac(359,`th`,27),vN(360,`Descrição`),ug()(),Ac(361,`tr`,18)(362,`td`,28)(363,`code`,29),vN(364,`string`),ug()(),Ac(365,`td`,22)(366,`p`),vN(367,`sigla do idioma padrão.`),ug()()()(),Kc(368,`br`),Ac(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),vN(375,` getShortLanguage `),ug()()()()(),Ac(376,`tr`,22)(377,`td`,22)(378,`p`),vN(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),ug(),Ac(380,`p`),vN(381,`A busca deste idioma é baseada no método `),Ac(382,`a`,30)(383,`strong`),vN(384,`getLanguage()`),ug()(),vN(385,`.`),ug()()()(),Ac(386,`h5`)(387,`b`),vN(388,`Retorno`),ug()(),Ac(389,`table`,25)(390,`tr`,26)(391,`th`,27),vN(392,`Tipo`),ug(),Ac(393,`th`,27),vN(394,`Descrição`),ug()(),Ac(395,`tr`,18)(396,`td`,28)(397,`code`,29),vN(398,`string`),ug()(),Ac(399,`td`,22)(400,`p`),vN(401,`sigla do idioma padrão.`),ug()()()(),Kc(402,`br`),Ac(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),vN(409,` setLanguage `),ug()()()()(),Ac(410,`tr`,22)(411,`td`,22)(412,`p`),Kc(413,`a`,31),vN(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),ug(),Ac(415,`p`),vN(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Ac(417,`code`),vN(418,`i18n`),ug(),vN(419,` para buscar as literais no idioma padrão.`),ug()()()(),Ac(420,`h5`)(421,`b`),vN(422,`Parâmetros`),ug()(),Ac(423,`table`,25)(424,`tr`,26)(425,`th`,27),vN(426,`Nome`),ug(),Ac(427,`th`,27),vN(428,`Tipo`),ug(),Ac(429,`th`,27),vN(430,`Descrição`),ug()(),Ac(431,`tr`,18)(432,`td`,32),vN(433,` language`),ug(),Ac(434,`td`,28)(435,`code`,29),vN(436,` string `),ug()(),Ac(437,`td`,22)(438,`p`),vN(439,`Sigla do idioma.`),ug(),Ac(440,`p`),vN(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Ac(442,`code`),vN(443,`pt`),ug(),vN(444,`, `),Ac(445,`code`),vN(446,`pt-BR`),ug(),vN(447,`, `),Ac(448,`code`),vN(449,`pt-br`),ug(),vN(450,`, `),Ac(451,`code`),vN(452,`en`),ug(),vN(453,` ou `),Ac(454,`code`),vN(455,`en-US`),ug(),vN(456,`.`),ug(),Ac(457,`blockquote`)(458,`p`),vN(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),ug()()()(),Ac(460,`tr`,18)(461,`td`,32),vN(462,` reload`),ug(),Ac(463,`td`,28)(464,`code`,29),vN(465,` boolean `),ug()(),Ac(466,`td`,22)(467,`p`),vN(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),ug(),Ac(469,`p`),vN(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Ac(471,`code`),vN(472,`getLiterals()`),ug(),vN(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),ug()()()(),Kc(474,`br`),Ac(475,`h3`),vN(476,`Interfaces`),ug(),Ac(477,`h4`,33)(478,`code`,12),vN(479,`PoI18nConfigContext`),ug()(),Ac(480,`div`,2)(481,`p`),Kc(482,`a`,34),ug(),Ac(483,`p`),vN(484,`Interface para a configuração dos contextos do módulo `),Ac(485,`code`),vN(486,`PoI18nModule`),ug(),vN(487,`.`),ug()(),Ac(488,`h4`,33)(489,`code`,12),vN(490,`PoI18nConfigDefault`),ug()(),Ac(491,`div`,2)(492,`p`),Kc(493,`a`,35),ug(),Ac(494,`p`),vN(495,`Interface para a configuração padrão do módulo PoI18nModule.`),ug()(),Ac(496,`h4`,16),vN(497,`Propriedades`),ug(),Ac(498,`table`,25)(499,`tr`,26)(500,`th`,27),vN(501,`Nome`),ug(),Ac(502,`th`,27),vN(503,`Tipo`),ug(),Ac(504,`th`,27),vN(505,`Descrição`),ug()(),Ac(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),vN(510,` cache`),Kc(511,`br`),ug()()(),Ac(512,`td`,28)(513,`code`,36),vN(514,`boolean`),ug()(),Ac(515,`td`,22)(516,`em`)(517,`strong`),vN(518,`(opcional)`),ug()(),Ac(519,`p`),vN(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),ug(),Ac(521,`p`),vN(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),ug(),Ac(523,`p`),vN(524,`Por padrão não utiliza.`),ug()()(),Ac(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),vN(529,` context`),Kc(530,`br`),ug()()(),Ac(531,`td`,28)(532,`code`,37),vN(533,`string`),ug()(),Ac(534,`td`,22)(535,`em`)(536,`strong`),vN(537,`(opcional)`),ug()(),Ac(538,`p`),vN(539,`Define o contexto que será buscado por padrão pelo serviço.`),ug(),Ac(540,`blockquote`)(541,`p`),vN(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),ug()()()(),Ac(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),vN(547,` language`),Kc(548,`br`),ug()()(),Ac(549,`td`,28)(550,`code`,37),vN(551,`string`),ug()(),Ac(552,`td`,22)(553,`em`)(554,`strong`),vN(555,`(opcional)`),ug()(),Ac(556,`p`),vN(557,`Idioma que será buscado por padrão pelo serviço.`),ug(),Ac(558,`p`),vN(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Ac(560,`a`,9)(561,`code`),vN(562,`setLanguage()`),ug()(),vN(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),ug()()()(),Ac(564,`h4`,33)(565,`code`,12),vN(566,`PoI18nConfig`),ug()(),Ac(567,`div`,2)(568,`p`),Kc(569,`a`,38),ug(),Ac(570,`p`),vN(571,`Interface para a configuração do módulo `),Ac(572,`code`),vN(573,`PoI18nModule`),ug(),vN(574,`.`),ug()(),Ac(575,`h4`,16),vN(576,`Propriedades`),ug(),Ac(577,`table`,25)(578,`tr`,26)(579,`th`,27),vN(580,`Nome`),ug(),Ac(581,`th`,27),vN(582,`Tipo`),ug(),Ac(583,`th`,27),vN(584,`Descrição`),ug()(),Ac(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),vN(589,` contexts`),Kc(590,`br`),ug()()(),Ac(591,`td`,28)(592,`code`,39),vN(593,`PoI18nConfigContext`),ug()(),Ac(594,`td`,22)(595,`p`),vN(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Ac(597,`code`),vN(598,`url`),ug(),vN(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),ug(),Ac(600,`p`),vN(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),ug(),Ac(602,`pre`)(603,`code`),vN(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),ug()(),Ac(605,`p`),vN(606,`E como informado, podemos utilizar a propriedade `),Ac(607,`code`),vN(608,`url`),ug(),vN(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),ug(),Ac(610,`pre`)(611,`code`),vN(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),ug()(),Ac(613,`p`),vN(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),ug(),Ac(615,`pre`)(616,`code`),vN(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),ug()(),Ac(618,`p`),vN(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),ug(),Ac(620,`ul`)(621,`li`)(622,`code`),vN(623,`language`),ug(),vN(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Ac(625,`code`),vN(626,`pt-br`),ug(),vN(627,`, `),Ac(628,`code`),vN(629,`en-us`),ug(),vN(630,`);`),ug(),Ac(631,`li`)(632,`code`),vN(633,`literals`),ug(),vN(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ug()(),Ac(635,`p`),vN(636,`Exemplos de requisição:`),ug(),Ac(637,`pre`)(638,`code`),vN(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),ug()(),Ac(640,`blockquote`)(641,`p`),vN(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Ac(643,`code`),vN(644,`pt-br`),ug(),vN(645,`.`),ug()(),Ac(646,`p`),vN(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Ac(648,`em`),vN(649,`backup`),ug(),vN(650,` caso o serviço esteja indisponível, por exemplo:`),ug(),Ac(651,`pre`)(652,`code`),vN(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),ug()(),Ac(654,`blockquote`)(655,`p`),vN(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),ug()()()(),Ac(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),vN(661,` default`),Kc(662,`br`),ug()()(),Ac(663,`td`,28)(664,`code`,40),vN(665,`PoI18nConfigDefault`),ug()(),Ac(666,`td`,22)(667,`em`)(668,`strong`),vN(669,`(opcional)`),ug()(),Ac(670,`p`),vN(671,`Configurações padrões.`),ug()()()(),Ac(672,`h4`,33)(673,`code`,12),vN(674,`PoI18nLiterals`),ug()(),Ac(675,`div`,2)(676,`p`),vN(677,`Interface para o método `),Ac(678,`code`),vN(679,`getLiterals()`),ug(),vN(680,` do serviço PoI18nService.`),ug()(),Ac(681,`h4`,16),vN(682,`Propriedades`),ug(),Ac(683,`table`,25)(684,`tr`,26)(685,`th`,27),vN(686,`Nome`),ug(),Ac(687,`th`,27),vN(688,`Tipo`),ug(),Ac(689,`th`,27),vN(690,`Descrição`),ug()(),Ac(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),vN(695,` context`),Kc(696,`br`),ug()()(),Ac(697,`td`,28)(698,`code`,37),vN(699,`string`),ug()(),Ac(700,`td`,22)(701,`em`)(702,`strong`),vN(703,`(opcional)`),ug()(),Ac(704,`p`),vN(705,`Contexto utilizado na busca das literais.`),ug()()(),Ac(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),vN(710,` language`),Kc(711,`br`),ug()()(),Ac(712,`td`,28)(713,`code`,37),vN(714,`string`),ug()(),Ac(715,`td`,22)(716,`em`)(717,`strong`),vN(718,`(opcional)`),ug()(),Ac(719,`p`),vN(720,`Idioma a ser buscado.`),ug()()(),Ac(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),vN(725,` literals`),Kc(726,`br`),ug()()(),Ac(727,`td`,28)(728,`code`,41),vN(729,`Array<string>`),ug()(),Ac(730,`td`,22)(731,`em`)(732,`strong`),vN(733,`(opcional)`),ug()(),Ac(734,`p`),vN(735,`Lista das literais.`),ug()()()(),Ac(736,`h4`,33)(737,`code`,12),vN(738,`PoLanguage`),ug()(),Ac(739,`div`,2)(740,`p`),Kc(741,`a`,42),ug(),Ac(742,`p`),vN(743,`Interface para descrição das linguagens disponíveis no sistema.`),ug()(),Ac(744,`h4`,16),vN(745,`Propriedades`),ug(),Ac(746,`table`,25)(747,`tr`,26)(748,`th`,27),vN(749,`Nome`),ug(),Ac(750,`th`,27),vN(751,`Tipo`),ug(),Ac(752,`th`,27),vN(753,`Descrição`),ug()(),Ac(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),vN(758,` description`),Kc(759,`br`),ug()()(),Ac(760,`td`,28)(761,`code`,37),vN(762,`string`),ug()(),Ac(763,`td`,22)(764,`em`)(765,`strong`),vN(766,`(opcional)`),ug()(),Ac(767,`p`),vN(768,`Descrição do idioma`),ug()()(),Ac(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),vN(773,` language`),Kc(774,`br`),ug()()(),Ac(775,`td`,28)(776,`code`,37),vN(777,`string`),ug()(),Ac(778,`td`,22)(779,`em`)(780,`strong`),vN(781,`(opcional)`),ug()(),Ac(782,`p`),vN(783,`Código do idioma `),Ac(784,`a`,43),vN(785,`ISO 639-1`),ug()(),Ac(786,`blockquote`)(787,`p`),vN(788,`Exemplo: 'pt','en'`),ug()()()()(),Ac(789,`h4`,33)(790,`code`,12),vN(791,`PoNumberSeparator`),ug()(),Ac(792,`div`,2)(793,`p`),Kc(794,`a`,44),ug(),Ac(795,`p`),vN(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),ug()(),Ac(797,`h4`,16),vN(798,`Propriedades`),ug(),Ac(799,`table`,25)(800,`tr`,26)(801,`th`,27),vN(802,`Nome`),ug(),Ac(803,`th`,27),vN(804,`Tipo`),ug(),Ac(805,`th`,27),vN(806,`Descrição`),ug()(),Ac(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),vN(811,` language`),Kc(812,`br`),ug()()(),Ac(813,`td`,28)(814,`code`,37),vN(815,`string`),ug()(),Ac(816,`td`,22)(817,`em`)(818,`strong`),vN(819,`(opcional)`),ug()(),Ac(820,`p`),vN(821,`Código do idioma `),Ac(822,`a`,43),vN(823,`ISO 639-1`),ug()(),Ac(824,`blockquote`)(825,`p`),vN(826,`Exemplo: 'pt','en'`),ug()()()(),Ac(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),vN(831,` separator`),Kc(832,`br`),ug()()(),Ac(833,`td`,28)(834,`code`,37),vN(835,`string`),ug()(),Ac(836,`td`,22)(837,`em`)(838,`strong`),vN(839,`(opcional)`),ug()(),Ac(840,`p`),vN(841,`Separador numérico`),ug()()()(),Ac(842,`h4`,33)(843,`code`,12),vN(844,`PoDateSeparator`),ug()(),Ac(845,`div`,2)(846,`p`),Kc(847,`a`,45),ug(),Ac(848,`p`),vN(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),ug()(),Ac(850,`h4`,16),vN(851,`Propriedades`),ug(),Ac(852,`table`,25)(853,`tr`,26)(854,`th`,27),vN(855,`Nome`),ug(),Ac(856,`th`,27),vN(857,`Tipo`),ug(),Ac(858,`th`,27),vN(859,`Descrição`),ug()(),Ac(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),vN(864,` locale`),Kc(865,`br`),ug()()(),Ac(866,`td`,28)(867,`code`,37),vN(868,`string`),ug()(),Ac(869,`td`,22)(870,`em`)(871,`strong`),vN(872,`(opcional)`),ug()(),Ac(873,`p`),vN(874,`Código do locale `),Ac(875,`a`,43),vN(876,`ISO 639-1`),ug()(),Ac(877,`blockquote`)(878,`p`),vN(879,`Exemplo: 'pt','en'`),ug()()()(),Ac(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),vN(884,` separator`),Kc(885,`br`),ug()()(),Ac(886,`td`,28)(887,`code`,37),vN(888,`string`),ug()(),Ac(889,`td`,22)(890,`em`)(891,`strong`),vN(892,`(opcional)`),ug()(),Ac(893,`p`),vN(894,`Separador de data`),ug(),Ac(895,`blockquote`)(896,`p`),vN(897,`Exemplo: '/','.','-'`),ug()()()()()())},encapsulation:2,changeDetection:1})}return o})();var T=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-i18n-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),ug()()()),a&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,D],encapsulation:2,changeDetection:1})}return o})()}];var z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(T),kL]})}return o})();var H=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,z]})}return o})();export{H as DocPoI18nModule};