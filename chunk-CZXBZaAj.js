import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,ii as Xy,l as ar,lr as Ky,oa as ql,qr as Up,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var D=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoI18nModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do serviço `),Ml(7,`code`),mN(8,`PoI18nService`),lg(),mN(9,` para controle de idiomas com PO.`),lg(),Ml(10,`p`),mN(11,`Para utilização do serviço de idiomas `),Ml(12,`code`),mN(13,`PoI18nService`),lg(),mN(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Ml(15,`code`),mN(16,`PoModule`),lg(),mN(17,`. Na importação deve ser invocado o método `),Ml(18,`code`),mN(19,`config`),lg(),mN(20,`, informando um objeto que deve implementar
a interface `),Ml(21,`a`,3)(22,`code`),mN(23,`PoI18nConfig`),lg()(),mN(24,` para configuração.`),lg(),Ml(25,`p`),ql(26,`a`,4),Ml(27,`strong`),mN(28,`Exemplo de configuração do módulo do i18n:`),lg()(),Ml(29,`pre`)(30,`code`),mN(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),lg()(),Ml(32,`p`),mN(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),lg(),Ml(34,`p`),mN(35,`Arquivo general-pt.ts`),lg(),Ml(36,`pre`)(37,`code`),mN(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),lg()(),Ml(39,`p`),mN(40,`Arquivo general-en.ts`),lg(),Ml(41,`pre`)(42,`code`),mN(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),lg()(),Ml(44,`p`)(45,`strong`),mN(46,`Exemplo de configuração de contextos usando constantes externas:`),lg()(),Ml(47,`pre`)(48,`code`),mN(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),lg()(),Ml(50,`p`)(51,`strong`),mN(52,`Exemplo de configuração de um contexto utilizando serviço:`),lg()(),Ml(53,`p`),mN(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),lg(),Ml(55,`ul`)(56,`li`)(57,`a`,5),mN(58,`http://10.0.0.1:3000/api/translations/crm`),lg()(),Ml(59,`li`)(60,`a`,6),mN(61,`http://10.0.0.1:3000/api/translations/general`),lg()()(),Ml(62,`p`),mN(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),lg(),Ml(64,`ul`)(65,`li`)(66,`strong`),mN(67,`language`),lg(),mN(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Ml(69,`code`),mN(70,`pt-br`),lg(),mN(71,`, `),Ml(72,`code`),mN(73,`en-us`),lg(),mN(74,`, `),Ml(75,`code`),mN(76,`es-es`),lg(),mN(77,` ou `),Ml(78,`code`),mN(79,`ru`),lg(),mN(80,`).`),lg(),Ml(81,`li`)(82,`strong`),mN(83,`literals`),lg(),mN(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),lg()(),Ml(85,`p`),mN(86,`Exemplos de requisição:`),lg(),Ml(87,`ul`)(88,`li`)(89,`a`,7),mN(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),lg()(),Ml(91,`li`)(92,`a`,8),mN(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),lg()()(),Ml(94,`blockquote`)(95,`p`),mN(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Ml(97,`code`),mN(98,`pt-br`),lg(),mN(99,`.`),lg()(),Ml(100,`p`),mN(101,`Além dos contextos, é possível definir as configurações `),Ml(102,`em`),mN(103,`default`),lg(),mN(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Ml(105,`a`,3)(106,`code`),mN(107,`PoI18nConfig`),lg()(),mN(108,`:`),lg(),Ml(109,`p`)(110,`strong`),mN(111,`Exemplo de padrões definidos:`),lg()(),Ml(112,`pre`)(113,`code`),mN(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),lg()(),Ml(115,`p`)(116,`strong`),mN(117,`Importante:`),lg()(),Ml(118,`p`),mN(119,`Recomenda-se que as definições `),Ml(120,`em`),mN(121,`default`),lg(),mN(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Ml(123,`code`),mN(124,`AppModule`),lg(),mN(125,`.`),lg(),Ml(126,`p`)(127,`strong`),mN(128,`i18n com `),Ml(129,`em`),mN(130,`Lazy loading`),lg()()(),Ml(131,`p`),mN(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Ml(133,`em`),mN(134,`lazy loading`),lg(),mN(135,`, caso seja
definida outra configura\xE7\xE3o do `),Ml(136,`code`),mN(137,`PoI18nModule`),lg(),mN(138,`, deve-se atentar os seguintes detalhes:`),lg(),Ml(139,`ul`)(140,`li`),mN(141,`Não defina outra `),Ml(142,`em`),mN(143,`default language`),lg(),mN(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),lg(),Ml(145,`li`),mN(146,`Caso precise de módulos carregados via `),Ml(147,`em`),mN(148,`lazy loading`),lg(),mN(149,` com linguagens diferentes, utilize o
m\xE9todo `),Ml(150,`a`,9)(151,`code`),mN(152,`setLanguage()`),lg()(),mN(153,` disponibilizado pelo `),Ml(154,`code`),mN(155,`PoI18nService`),lg(),mN(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),lg()()(),Ml(157,`h3`,10),mN(158,`Services`),lg(),Ml(159,`h4`,11)(160,`code`,12),mN(161,`PoI18nService`),lg()(),Ml(162,`div`,2)(163,`p`),mN(164,`O serviço `),Ml(165,`code`),mN(166,`PoI18nService`),lg(),mN(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),lg(),Ml(168,`blockquote`)(169,`p`),mN(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Ml(171,`a`,13),mN(172,`importação e configuração do módulo `),Ml(173,`code`),mN(174,`PoI18nModule`),lg()(),mN(175,`.`),lg()(),Ml(176,`p`)(177,`strong`),mN(178,`Utilização do serviço `),Ml(179,`code`),mN(180,`PoI18nService`),lg(),mN(181,`:`),lg()(),Ml(182,`p`),mN(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),lg(),Ml(184,`pre`)(185,`code`),mN(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),lg()(),Ml(187,`p`),mN(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Ml(189,`a`,14),mN(190,`Observable`),lg(),mN(191,` pelo
m\xE9todo `),Ml(192,`code`),mN(193,`getLiterals()`),lg(),mN(194,`.`),lg(),Ml(195,`blockquote`)(196,`p`),mN(197,`O método `),Ml(198,`code`),mN(199,`getLiterals()`),lg(),mN(200,` pode receber um objeto do tipo da interface `),Ml(201,`code`),mN(202,`PoI18nLiterals`),lg(),mN(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),lg()(),Ml(204,`ul`)(205,`li`)(206,`h2`),mN(207,`Alterações a partir da versão 19`),lg()()(),Ml(208,`p`),mN(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Ml(210,`code`),mN(211,`getLiterals`),lg(),mN(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Ml(213,`code`),mN(214,`getLiterals`),lg(),mN(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),lg(),Ml(216,`p`)(217,`strong`),mN(218,`Exemplo de chamada com contexto explícito:`),lg()(),Ml(219,`pre`)(220,`code`,15),mN(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),lg()(),Ml(222,`p`)(223,`strong`),mN(224,`Cenário de Contextos Iguais:`),lg(),mN(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),lg(),Ml(226,`p`)(227,`strong`),mN(228,`Recomendações:`),lg()(),Ml(229,`ul`)(230,`li`),mN(231,`Sempre informar o contexto ao chamar `),Ml(232,`code`),mN(233,`getLiterals`),lg(),mN(234,` para evitar conflitos de literais.`),lg(),Ml(235,`li`),mN(236,`Caso a aplicação utilize `),Ml(237,`code`),mN(238,`lazy loading`),lg(),mN(239,`, utilizar `),Ml(240,`code`),mN(241,`setLanguage()`),lg(),mN(242,` para garantir a correta configuração de idioma.`),lg()(),Ml(243,`p`),mN(244,`Exemplos de requisição:`),lg(),Ml(245,`pre`)(246,`code`),mN(247,`literals = {};
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
`),lg()(),Ml(248,`p`),mN(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),lg(),Ml(250,`pre`),Xy(),mN(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Ky(),lg(),Ml(252,`p`),mN(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Ml(254,`em`),mN(255,`pipe`),lg(),Ml(256,`code`),mN(257,`poI18n`),lg(),mN(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Ml(259,`code`),mN(260,`name`),lg(),mN(261,` e `),Ml(262,`code`),mN(263,`nickname`),lg(),mN(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),lg(),Ml(265,`pre`),Xy(),mN(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Ky(),lg(),Ml(267,`blockquote`)(268,`p`),mN(269,`É importante o uso do operador `),Ml(270,`code`),mN(271,`?`),lg(),mN(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),lg()(),Ml(273,`h3`),mN(274,`Teste unitário`),lg(),Ml(275,`p`),mN(276,`Abaixo segue um exemplo de `),Ml(277,`em`),mN(278,`setup`),lg(),mN(279,` inicial de teste unitário do `),Ml(280,`em`),mN(281,`AppComponent`),lg(),mN(282,` que utiliza o `),Ml(283,`code`),mN(284,`PoI18nService`),lg(),mN(285,`:`),lg(),Ml(286,`blockquote`)(287,`p`),mN(288,`Atenção: não declarar o `),Ml(289,`code`),mN(290,`PoI18nService`),lg(),mN(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),lg()(),Ml(292,`pre`)(293,`code`),mN(294,`import { async, TestBed } from '@angular/core/testing';
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
`),lg()()(),Ml(295,`h3`,16),mN(296,`Métodos`),lg(),Ml(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),mN(303,` getLanguage `),lg()()()()(),Ml(304,`tr`,22)(305,`td`,22)(306,`p`),ql(307,`a`,23),mN(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),lg(),Ml(309,`p`),mN(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),lg(),Ml(311,`p`),mN(312,` 1 - o idioma que foi armazenado no `),Ml(313,`em`),mN(314,`localStorage`),lg(),mN(315,`, através do método `),Ml(316,`a`,9)(317,`code`),mN(318,`setLanguage()`),lg()(),mN(319,`.`),lg(),Ml(320,`p`),mN(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Ml(322,`code`),mN(323,`config`),lg(),mN(324,`, sendo o idioma inserido na propriedade
`),Ml(325,`code`),mN(326,`language`),lg(),mN(327,` da interface `),Ml(328,`a`,24)(329,`code`),mN(330,`PoI18nConfigDefault`),lg()(),mN(331,`.`),lg(),Ml(332,`p`),mN(333,` 3 - o idioma do navegador utilizado.`),lg(),Ml(334,`blockquote`)(335,`p`),mN(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Ml(337,`code`),mN(338,`pt`),lg(),mN(339,`, `),Ml(340,`code`),mN(341,`en`),lg(),mN(342,`, `),Ml(343,`code`),mN(344,`es`),lg(),mN(345,` ou `),Ml(346,`code`),mN(347,`ru`),lg(),mN(348,`), será retornado valor `),Ml(349,`code`),mN(350,`pt`),lg(),mN(351,`.`),lg()()()()(),Ml(352,`h5`)(353,`b`),mN(354,`Retorno`),lg()(),Ml(355,`table`,25)(356,`tr`,26)(357,`th`,27),mN(358,`Tipo`),lg(),Ml(359,`th`,27),mN(360,`Descrição`),lg()(),Ml(361,`tr`,18)(362,`td`,28)(363,`code`,29),mN(364,`string`),lg()(),Ml(365,`td`,22)(366,`p`),mN(367,`sigla do idioma padrão.`),lg()()()(),ql(368,`br`),Ml(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),mN(375,` getShortLanguage `),lg()()()()(),Ml(376,`tr`,22)(377,`td`,22)(378,`p`),mN(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),lg(),Ml(380,`p`),mN(381,`A busca deste idioma é baseada no método `),Ml(382,`a`,30)(383,`strong`),mN(384,`getLanguage()`),lg()(),mN(385,`.`),lg()()()(),Ml(386,`h5`)(387,`b`),mN(388,`Retorno`),lg()(),Ml(389,`table`,25)(390,`tr`,26)(391,`th`,27),mN(392,`Tipo`),lg(),Ml(393,`th`,27),mN(394,`Descrição`),lg()(),Ml(395,`tr`,18)(396,`td`,28)(397,`code`,29),mN(398,`string`),lg()(),Ml(399,`td`,22)(400,`p`),mN(401,`sigla do idioma padrão.`),lg()()()(),ql(402,`br`),Ml(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),mN(409,` setLanguage `),lg()()()()(),Ml(410,`tr`,22)(411,`td`,22)(412,`p`),ql(413,`a`,31),mN(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),lg(),Ml(415,`p`),mN(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Ml(417,`code`),mN(418,`i18n`),lg(),mN(419,` para buscar as literais no idioma padrão.`),lg()()()(),Ml(420,`h5`)(421,`b`),mN(422,`Parâmetros`),lg()(),Ml(423,`table`,25)(424,`tr`,26)(425,`th`,27),mN(426,`Nome`),lg(),Ml(427,`th`,27),mN(428,`Tipo`),lg(),Ml(429,`th`,27),mN(430,`Descrição`),lg()(),Ml(431,`tr`,18)(432,`td`,32),mN(433,` language`),lg(),Ml(434,`td`,28)(435,`code`,29),mN(436,` string `),lg()(),Ml(437,`td`,22)(438,`p`),mN(439,`Sigla do idioma.`),lg(),Ml(440,`p`),mN(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Ml(442,`code`),mN(443,`pt`),lg(),mN(444,`, `),Ml(445,`code`),mN(446,`pt-BR`),lg(),mN(447,`, `),Ml(448,`code`),mN(449,`pt-br`),lg(),mN(450,`, `),Ml(451,`code`),mN(452,`en`),lg(),mN(453,` ou `),Ml(454,`code`),mN(455,`en-US`),lg(),mN(456,`.`),lg(),Ml(457,`blockquote`)(458,`p`),mN(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),lg()()()(),Ml(460,`tr`,18)(461,`td`,32),mN(462,` reload`),lg(),Ml(463,`td`,28)(464,`code`,29),mN(465,` boolean `),lg()(),Ml(466,`td`,22)(467,`p`),mN(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),lg(),Ml(469,`p`),mN(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Ml(471,`code`),mN(472,`getLiterals()`),lg(),mN(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),lg()()()(),ql(474,`br`),Ml(475,`h3`),mN(476,`Interfaces`),lg(),Ml(477,`h4`,33)(478,`code`,12),mN(479,`PoI18nConfigContext`),lg()(),Ml(480,`div`,2)(481,`p`),ql(482,`a`,34),lg(),Ml(483,`p`),mN(484,`Interface para a configuração dos contextos do módulo `),Ml(485,`code`),mN(486,`PoI18nModule`),lg(),mN(487,`.`),lg()(),Ml(488,`h4`,33)(489,`code`,12),mN(490,`PoI18nConfigDefault`),lg()(),Ml(491,`div`,2)(492,`p`),ql(493,`a`,35),lg(),Ml(494,`p`),mN(495,`Interface para a configuração padrão do módulo PoI18nModule.`),lg()(),Ml(496,`h4`,16),mN(497,`Propriedades`),lg(),Ml(498,`table`,25)(499,`tr`,26)(500,`th`,27),mN(501,`Nome`),lg(),Ml(502,`th`,27),mN(503,`Tipo`),lg(),Ml(504,`th`,27),mN(505,`Descrição`),lg()(),Ml(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),mN(510,` cache`),ql(511,`br`),lg()()(),Ml(512,`td`,28)(513,`code`,36),mN(514,`boolean`),lg()(),Ml(515,`td`,22)(516,`em`)(517,`strong`),mN(518,`(opcional)`),lg()(),Ml(519,`p`),mN(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),lg(),Ml(521,`p`),mN(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),lg(),Ml(523,`p`),mN(524,`Por padrão não utiliza.`),lg()()(),Ml(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),mN(529,` context`),ql(530,`br`),lg()()(),Ml(531,`td`,28)(532,`code`,37),mN(533,`string`),lg()(),Ml(534,`td`,22)(535,`em`)(536,`strong`),mN(537,`(opcional)`),lg()(),Ml(538,`p`),mN(539,`Define o contexto que será buscado por padrão pelo serviço.`),lg(),Ml(540,`blockquote`)(541,`p`),mN(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),lg()()()(),Ml(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),mN(547,` language`),ql(548,`br`),lg()()(),Ml(549,`td`,28)(550,`code`,37),mN(551,`string`),lg()(),Ml(552,`td`,22)(553,`em`)(554,`strong`),mN(555,`(opcional)`),lg()(),Ml(556,`p`),mN(557,`Idioma que será buscado por padrão pelo serviço.`),lg(),Ml(558,`p`),mN(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Ml(560,`a`,9)(561,`code`),mN(562,`setLanguage()`),lg()(),mN(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),lg()()()(),Ml(564,`h4`,33)(565,`code`,12),mN(566,`PoI18nConfig`),lg()(),Ml(567,`div`,2)(568,`p`),ql(569,`a`,38),lg(),Ml(570,`p`),mN(571,`Interface para a configuração do módulo `),Ml(572,`code`),mN(573,`PoI18nModule`),lg(),mN(574,`.`),lg()(),Ml(575,`h4`,16),mN(576,`Propriedades`),lg(),Ml(577,`table`,25)(578,`tr`,26)(579,`th`,27),mN(580,`Nome`),lg(),Ml(581,`th`,27),mN(582,`Tipo`),lg(),Ml(583,`th`,27),mN(584,`Descrição`),lg()(),Ml(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),mN(589,` contexts`),ql(590,`br`),lg()()(),Ml(591,`td`,28)(592,`code`,39),mN(593,`PoI18nConfigContext`),lg()(),Ml(594,`td`,22)(595,`p`),mN(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Ml(597,`code`),mN(598,`url`),lg(),mN(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),lg(),Ml(600,`p`),mN(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),lg(),Ml(602,`pre`)(603,`code`),mN(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),lg()(),Ml(605,`p`),mN(606,`E como informado, podemos utilizar a propriedade `),Ml(607,`code`),mN(608,`url`),lg(),mN(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),lg(),Ml(610,`pre`)(611,`code`),mN(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),lg()(),Ml(613,`p`),mN(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),lg(),Ml(615,`pre`)(616,`code`),mN(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),lg()(),Ml(618,`p`),mN(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),lg(),Ml(620,`ul`)(621,`li`)(622,`code`),mN(623,`language`),lg(),mN(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Ml(625,`code`),mN(626,`pt-br`),lg(),mN(627,`, `),Ml(628,`code`),mN(629,`en-us`),lg(),mN(630,`);`),lg(),Ml(631,`li`)(632,`code`),mN(633,`literals`),lg(),mN(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),lg()(),Ml(635,`p`),mN(636,`Exemplos de requisição:`),lg(),Ml(637,`pre`)(638,`code`),mN(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),lg()(),Ml(640,`blockquote`)(641,`p`),mN(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Ml(643,`code`),mN(644,`pt-br`),lg(),mN(645,`.`),lg()(),Ml(646,`p`),mN(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Ml(648,`em`),mN(649,`backup`),lg(),mN(650,` caso o serviço esteja indisponível, por exemplo:`),lg(),Ml(651,`pre`)(652,`code`),mN(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),lg()(),Ml(654,`blockquote`)(655,`p`),mN(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),lg()()()(),Ml(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),mN(661,` default`),ql(662,`br`),lg()()(),Ml(663,`td`,28)(664,`code`,40),mN(665,`PoI18nConfigDefault`),lg()(),Ml(666,`td`,22)(667,`em`)(668,`strong`),mN(669,`(opcional)`),lg()(),Ml(670,`p`),mN(671,`Configurações padrões.`),lg()()()(),Ml(672,`h4`,33)(673,`code`,12),mN(674,`PoI18nLiterals`),lg()(),Ml(675,`div`,2)(676,`p`),mN(677,`Interface para o método `),Ml(678,`code`),mN(679,`getLiterals()`),lg(),mN(680,` do serviço PoI18nService.`),lg()(),Ml(681,`h4`,16),mN(682,`Propriedades`),lg(),Ml(683,`table`,25)(684,`tr`,26)(685,`th`,27),mN(686,`Nome`),lg(),Ml(687,`th`,27),mN(688,`Tipo`),lg(),Ml(689,`th`,27),mN(690,`Descrição`),lg()(),Ml(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),mN(695,` context`),ql(696,`br`),lg()()(),Ml(697,`td`,28)(698,`code`,37),mN(699,`string`),lg()(),Ml(700,`td`,22)(701,`em`)(702,`strong`),mN(703,`(opcional)`),lg()(),Ml(704,`p`),mN(705,`Contexto utilizado na busca das literais.`),lg()()(),Ml(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),mN(710,` language`),ql(711,`br`),lg()()(),Ml(712,`td`,28)(713,`code`,37),mN(714,`string`),lg()(),Ml(715,`td`,22)(716,`em`)(717,`strong`),mN(718,`(opcional)`),lg()(),Ml(719,`p`),mN(720,`Idioma a ser buscado.`),lg()()(),Ml(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),mN(725,` literals`),ql(726,`br`),lg()()(),Ml(727,`td`,28)(728,`code`,41),mN(729,`Array<string>`),lg()(),Ml(730,`td`,22)(731,`em`)(732,`strong`),mN(733,`(opcional)`),lg()(),Ml(734,`p`),mN(735,`Lista das literais.`),lg()()()(),Ml(736,`h4`,33)(737,`code`,12),mN(738,`PoLanguage`),lg()(),Ml(739,`div`,2)(740,`p`),ql(741,`a`,42),lg(),Ml(742,`p`),mN(743,`Interface para descrição das linguagens disponíveis no sistema.`),lg()(),Ml(744,`h4`,16),mN(745,`Propriedades`),lg(),Ml(746,`table`,25)(747,`tr`,26)(748,`th`,27),mN(749,`Nome`),lg(),Ml(750,`th`,27),mN(751,`Tipo`),lg(),Ml(752,`th`,27),mN(753,`Descrição`),lg()(),Ml(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),mN(758,` description`),ql(759,`br`),lg()()(),Ml(760,`td`,28)(761,`code`,37),mN(762,`string`),lg()(),Ml(763,`td`,22)(764,`em`)(765,`strong`),mN(766,`(opcional)`),lg()(),Ml(767,`p`),mN(768,`Descrição do idioma`),lg()()(),Ml(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),mN(773,` language`),ql(774,`br`),lg()()(),Ml(775,`td`,28)(776,`code`,37),mN(777,`string`),lg()(),Ml(778,`td`,22)(779,`em`)(780,`strong`),mN(781,`(opcional)`),lg()(),Ml(782,`p`),mN(783,`Código do idioma `),Ml(784,`a`,43),mN(785,`ISO 639-1`),lg()(),Ml(786,`blockquote`)(787,`p`),mN(788,`Exemplo: 'pt','en'`),lg()()()()(),Ml(789,`h4`,33)(790,`code`,12),mN(791,`PoNumberSeparator`),lg()(),Ml(792,`div`,2)(793,`p`),ql(794,`a`,44),lg(),Ml(795,`p`),mN(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),lg()(),Ml(797,`h4`,16),mN(798,`Propriedades`),lg(),Ml(799,`table`,25)(800,`tr`,26)(801,`th`,27),mN(802,`Nome`),lg(),Ml(803,`th`,27),mN(804,`Tipo`),lg(),Ml(805,`th`,27),mN(806,`Descrição`),lg()(),Ml(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),mN(811,` language`),ql(812,`br`),lg()()(),Ml(813,`td`,28)(814,`code`,37),mN(815,`string`),lg()(),Ml(816,`td`,22)(817,`em`)(818,`strong`),mN(819,`(opcional)`),lg()(),Ml(820,`p`),mN(821,`Código do idioma `),Ml(822,`a`,43),mN(823,`ISO 639-1`),lg()(),Ml(824,`blockquote`)(825,`p`),mN(826,`Exemplo: 'pt','en'`),lg()()()(),Ml(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),mN(831,` separator`),ql(832,`br`),lg()()(),Ml(833,`td`,28)(834,`code`,37),mN(835,`string`),lg()(),Ml(836,`td`,22)(837,`em`)(838,`strong`),mN(839,`(opcional)`),lg()(),Ml(840,`p`),mN(841,`Separador numérico`),lg()()()(),Ml(842,`h4`,33)(843,`code`,12),mN(844,`PoDateSeparator`),lg()(),Ml(845,`div`,2)(846,`p`),ql(847,`a`,45),lg(),Ml(848,`p`),mN(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),lg()(),Ml(850,`h4`,16),mN(851,`Propriedades`),lg(),Ml(852,`table`,25)(853,`tr`,26)(854,`th`,27),mN(855,`Nome`),lg(),Ml(856,`th`,27),mN(857,`Tipo`),lg(),Ml(858,`th`,27),mN(859,`Descrição`),lg()(),Ml(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),mN(864,` locale`),ql(865,`br`),lg()()(),Ml(866,`td`,28)(867,`code`,37),mN(868,`string`),lg()(),Ml(869,`td`,22)(870,`em`)(871,`strong`),mN(872,`(opcional)`),lg()(),Ml(873,`p`),mN(874,`Código do locale `),Ml(875,`a`,43),mN(876,`ISO 639-1`),lg()(),Ml(877,`blockquote`)(878,`p`),mN(879,`Exemplo: 'pt','en'`),lg()()()(),Ml(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),mN(884,` separator`),ql(885,`br`),lg()()(),Ml(886,`td`,28)(887,`code`,37),mN(888,`string`),lg()(),Ml(889,`td`,22)(890,`em`)(891,`strong`),mN(892,`(opcional)`),lg()(),Ml(893,`p`),mN(894,`Separador de data`),lg(),Ml(895,`blockquote`)(896,`p`),mN(897,`Exemplo: '/','.','-'`),lg()()()()()())},encapsulation:2,changeDetection:1})}return o})();var T=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-i18n-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),lg()()()),a&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,D],encapsulation:2,changeDetection:1})}return o})()}];var z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(T),NL]})}return o})();var H=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,z]})}return o})();export{H as DocPoI18nModule};