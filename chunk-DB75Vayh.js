import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,H as Sl,J as Jx,O as sg,M as Wl,a9 as Ky,aa as Zy,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-BY5NURRA.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoI18nModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do servi\xE7o "),Sl(7,"code"),Jx(8,"PoI18nService"),sg(),Jx(9," para controle de idiomas com PO."),sg(),Sl(10,"p"),Jx(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),Sl(12,"code"),Jx(13,"PoI18nService"),sg(),Jx(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Sl(15,"code"),Jx(16,"PoModule"),sg(),Jx(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),Sl(18,"code"),Jx(19,"config"),sg(),Jx(20,`, informando um objeto que deve implementar
a interface `),Sl(21,"a",3)(22,"code"),Jx(23,"PoI18nConfig"),sg()(),Jx(24," para configura\xE7\xE3o."),sg(),Sl(25,"p"),Wl(26,"a",4),Sl(27,"strong"),Jx(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),sg()(),Sl(29,"pre")(30,"code"),Jx(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),sg()(),Sl(32,"p"),Jx(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),sg(),Sl(34,"p"),Jx(35,"Arquivo general-pt.ts"),sg(),Sl(36,"pre")(37,"code"),Jx(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),sg()(),Sl(39,"p"),Jx(40,"Arquivo general-en.ts"),sg(),Sl(41,"pre")(42,"code"),Jx(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),sg()(),Sl(44,"p")(45,"strong"),Jx(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),sg()(),Sl(47,"pre")(48,"code"),Jx(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),sg()(),Sl(50,"p")(51,"strong"),Jx(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),sg()(),Sl(53,"p"),Jx(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),sg(),Sl(55,"ul")(56,"li")(57,"a",5),Jx(58,"http://10.0.0.1:3000/api/translations/crm"),sg()(),Sl(59,"li")(60,"a",6),Jx(61,"http://10.0.0.1:3000/api/translations/general"),sg()()(),Sl(62,"p"),Jx(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),sg(),Sl(64,"ul")(65,"li")(66,"strong"),Jx(67,"language"),sg(),Jx(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Sl(69,"code"),Jx(70,"pt-br"),sg(),Jx(71,", "),Sl(72,"code"),Jx(73,"en-us"),sg(),Jx(74,", "),Sl(75,"code"),Jx(76,"es-es"),sg(),Jx(77," ou "),Sl(78,"code"),Jx(79,"ru"),sg(),Jx(80,")."),sg(),Sl(81,"li")(82,"strong"),Jx(83,"literals"),sg(),Jx(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),sg()(),Sl(85,"p"),Jx(86,"Exemplos de requisi\xE7\xE3o:"),sg(),Sl(87,"ul")(88,"li")(89,"a",7),Jx(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),sg()(),Sl(91,"li")(92,"a",8),Jx(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),sg()()(),Sl(94,"blockquote")(95,"p"),Jx(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Sl(97,"code"),Jx(98,"pt-br"),sg(),Jx(99,"."),sg()(),Sl(100,"p"),Jx(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),Sl(102,"em"),Jx(103,"default"),sg(),Jx(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Sl(105,"a",3)(106,"code"),Jx(107,"PoI18nConfig"),sg()(),Jx(108,":"),sg(),Sl(109,"p")(110,"strong"),Jx(111,"Exemplo de padr\xF5es definidos:"),sg()(),Sl(112,"pre")(113,"code"),Jx(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),sg()(),Sl(115,"p")(116,"strong"),Jx(117,"Importante:"),sg()(),Sl(118,"p"),Jx(119,"Recomenda-se que as defini\xE7\xF5es "),Sl(120,"em"),Jx(121,"default"),sg(),Jx(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Sl(123,"code"),Jx(124,"AppModule"),sg(),Jx(125,"."),sg(),Sl(126,"p")(127,"strong"),Jx(128,"i18n com "),Sl(129,"em"),Jx(130,"Lazy loading"),sg()()(),Sl(131,"p"),Jx(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),Sl(133,"em"),Jx(134,"lazy loading"),sg(),Jx(135,`, caso seja
definida outra configura\xE7\xE3o do `),Sl(136,"code"),Jx(137,"PoI18nModule"),sg(),Jx(138,", deve-se atentar os seguintes detalhes:"),sg(),Sl(139,"ul")(140,"li"),Jx(141,"N\xE3o defina outra "),Sl(142,"em"),Jx(143,"default language"),sg(),Jx(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),sg(),Sl(145,"li"),Jx(146,"Caso precise de m\xF3dulos carregados via "),Sl(147,"em"),Jx(148,"lazy loading"),sg(),Jx(149,` com linguagens diferentes, utilize o
m\xE9todo `),Sl(150,"a",9)(151,"code"),Jx(152,"setLanguage()"),sg()(),Jx(153," disponibilizado pelo "),Sl(154,"code"),Jx(155,"PoI18nService"),sg(),Jx(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),sg()()(),Sl(157,"h3",10),Jx(158,"Services"),sg(),Sl(159,"h4",11)(160,"code",12),Jx(161,"PoI18nService"),sg()(),Sl(162,"div",2)(163,"p"),Jx(164,"O servi\xE7o "),Sl(165,"code"),Jx(166,"PoI18nService"),sg(),Jx(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),sg(),Sl(168,"blockquote")(169,"p"),Jx(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Sl(171,"a",13),Jx(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),Sl(173,"code"),Jx(174,"PoI18nModule"),sg()(),Jx(175,"."),sg()(),Sl(176,"p")(177,"strong"),Jx(178,"Utiliza\xE7\xE3o do servi\xE7o "),Sl(179,"code"),Jx(180,"PoI18nService"),sg(),Jx(181,":"),sg()(),Sl(182,"p"),Jx(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),sg(),Sl(184,"pre")(185,"code"),Jx(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),sg()(),Sl(187,"p"),Jx(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),Sl(189,"a",14),Jx(190,"Observable"),sg(),Jx(191,` pelo
m\xE9todo `),Sl(192,"code"),Jx(193,"getLiterals()"),sg(),Jx(194,"."),sg(),Sl(195,"blockquote")(196,"p"),Jx(197,"O m\xE9todo "),Sl(198,"code"),Jx(199,"getLiterals()"),sg(),Jx(200," pode receber um objeto do tipo da interface "),Sl(201,"code"),Jx(202,"PoI18nLiterals"),sg(),Jx(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),sg()(),Sl(204,"ul")(205,"li")(206,"h2"),Jx(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),sg()()(),Sl(208,"p"),Jx(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Sl(210,"code"),Jx(211,"getLiterals"),sg(),Jx(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Sl(213,"code"),Jx(214,"getLiterals"),sg(),Jx(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),sg(),Sl(216,"p")(217,"strong"),Jx(218,"Exemplo de chamada com contexto expl\xEDcito:"),sg()(),Sl(219,"pre")(220,"code",15),Jx(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),sg()(),Sl(222,"p")(223,"strong"),Jx(224,"Cen\xE1rio de Contextos Iguais:"),sg(),Jx(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),sg(),Sl(226,"p")(227,"strong"),Jx(228,"Recomenda\xE7\xF5es:"),sg()(),Sl(229,"ul")(230,"li"),Jx(231,"Sempre informar o contexto ao chamar "),Sl(232,"code"),Jx(233,"getLiterals"),sg(),Jx(234," para evitar conflitos de literais."),sg(),Sl(235,"li"),Jx(236,"Caso a aplica\xE7\xE3o utilize "),Sl(237,"code"),Jx(238,"lazy loading"),sg(),Jx(239,", utilizar "),Sl(240,"code"),Jx(241,"setLanguage()"),sg(),Jx(242," para garantir a correta configura\xE7\xE3o de idioma."),sg()(),Sl(243,"p"),Jx(244,"Exemplos de requisi\xE7\xE3o:"),sg(),Sl(245,"pre")(246,"code"),Jx(247,`literals = {};
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
`),sg()(),Sl(248,"p"),Jx(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),sg(),Sl(250,"pre"),Ky(),Jx(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Zy(),sg(),Sl(252,"p"),Jx(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),Sl(254,"em"),Jx(255,"pipe"),sg(),Sl(256,"code"),Jx(257,"poI18n"),sg(),Jx(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Sl(259,"code"),Jx(260,"name"),sg(),Jx(261," e "),Sl(262,"code"),Jx(263,"nickname"),sg(),Jx(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),sg(),Sl(265,"pre"),Ky(),Jx(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Zy(),sg(),Sl(267,"blockquote")(268,"p"),Jx(269,"\xC9 importante o uso do operador "),Sl(270,"code"),Jx(271,"?"),sg(),Jx(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),sg()(),Sl(273,"h3"),Jx(274,"Teste unit\xE1rio"),sg(),Sl(275,"p"),Jx(276,"Abaixo segue um exemplo de "),Sl(277,"em"),Jx(278,"setup"),sg(),Jx(279," inicial de teste unit\xE1rio do "),Sl(280,"em"),Jx(281,"AppComponent"),sg(),Jx(282," que utiliza o "),Sl(283,"code"),Jx(284,"PoI18nService"),sg(),Jx(285,":"),sg(),Sl(286,"blockquote")(287,"p"),Jx(288,"Aten\xE7\xE3o: n\xE3o declarar o "),Sl(289,"code"),Jx(290,"PoI18nService"),sg(),Jx(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),sg()(),Sl(292,"pre")(293,"code"),Jx(294,`import { async, TestBed } from '@angular/core/testing';
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
`),sg()()(),Sl(295,"h3",16),Jx(296,"M\xE9todos"),sg(),Sl(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),Jx(303," getLanguage "),sg()()()()(),Sl(304,"tr",22)(305,"td",22)(306,"p"),Wl(307,"a",23),Jx(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),sg(),Sl(309,"p"),Jx(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),sg(),Sl(311,"p"),Jx(312," 1 - o idioma que foi armazenado no "),Sl(313,"em"),Jx(314,"localStorage"),sg(),Jx(315,", atrav\xE9s do m\xE9todo "),Sl(316,"a",9)(317,"code"),Jx(318,"setLanguage()"),sg()(),Jx(319,"."),sg(),Sl(320,"p"),Jx(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),Sl(322,"code"),Jx(323,"config"),sg(),Jx(324,`, sendo o idioma inserido na propriedade
`),Sl(325,"code"),Jx(326,"language"),sg(),Jx(327," da interface "),Sl(328,"a",24)(329,"code"),Jx(330,"PoI18nConfigDefault"),sg()(),Jx(331,"."),sg(),Sl(332,"p"),Jx(333," 3 - o idioma do navegador utilizado."),sg(),Sl(334,"blockquote")(335,"p"),Jx(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),Sl(337,"code"),Jx(338,"pt"),sg(),Jx(339,", "),Sl(340,"code"),Jx(341,"en"),sg(),Jx(342,", "),Sl(343,"code"),Jx(344,"es"),sg(),Jx(345," ou "),Sl(346,"code"),Jx(347,"ru"),sg(),Jx(348,"), ser\xE1 retornado valor "),Sl(349,"code"),Jx(350,"pt"),sg(),Jx(351,"."),sg()()()()(),Sl(352,"h5")(353,"b"),Jx(354,"Retorno"),sg()(),Sl(355,"table",25)(356,"tr",26)(357,"th",27),Jx(358,"Tipo"),sg(),Sl(359,"th",27),Jx(360,"Descri\xE7\xE3o"),sg()(),Sl(361,"tr",18)(362,"td",28)(363,"code",29),Jx(364,"string"),sg()(),Sl(365,"td",22)(366,"p"),Jx(367,"sigla do idioma padr\xE3o."),sg()()()(),Wl(368,"br"),Sl(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),Jx(375," getShortLanguage "),sg()()()()(),Sl(376,"tr",22)(377,"td",22)(378,"p"),Jx(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),sg(),Sl(380,"p"),Jx(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),Sl(382,"a",30)(383,"strong"),Jx(384,"getLanguage()"),sg()(),Jx(385,"."),sg()()()(),Sl(386,"h5")(387,"b"),Jx(388,"Retorno"),sg()(),Sl(389,"table",25)(390,"tr",26)(391,"th",27),Jx(392,"Tipo"),sg(),Sl(393,"th",27),Jx(394,"Descri\xE7\xE3o"),sg()(),Sl(395,"tr",18)(396,"td",28)(397,"code",29),Jx(398,"string"),sg()(),Sl(399,"td",22)(400,"p"),Jx(401,"sigla do idioma padr\xE3o."),sg()()()(),Wl(402,"br"),Sl(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),Jx(409," setLanguage "),sg()()()()(),Sl(410,"tr",22)(411,"td",22)(412,"p"),Wl(413,"a",31),Jx(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),sg(),Sl(415,"p"),Jx(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Sl(417,"code"),Jx(418,"i18n"),sg(),Jx(419," para buscar as literais no idioma padr\xE3o."),sg()()()(),Sl(420,"h5")(421,"b"),Jx(422,"Par\xE2metros"),sg()(),Sl(423,"table",25)(424,"tr",26)(425,"th",27),Jx(426,"Nome"),sg(),Sl(427,"th",27),Jx(428,"Tipo"),sg(),Sl(429,"th",27),Jx(430,"Descri\xE7\xE3o"),sg()(),Sl(431,"tr",18)(432,"td",32),Jx(433," language"),sg(),Sl(434,"td",28)(435,"code",29),Jx(436," string "),sg()(),Sl(437,"td",22)(438,"p"),Jx(439,"Sigla do idioma."),sg(),Sl(440,"p"),Jx(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Sl(442,"code"),Jx(443,"pt"),sg(),Jx(444,", "),Sl(445,"code"),Jx(446,"pt-BR"),sg(),Jx(447,", "),Sl(448,"code"),Jx(449,"pt-br"),sg(),Jx(450,", "),Sl(451,"code"),Jx(452,"en"),sg(),Jx(453," ou "),Sl(454,"code"),Jx(455,"en-US"),sg(),Jx(456,"."),sg(),Sl(457,"blockquote")(458,"p"),Jx(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),sg()()()(),Sl(460,"tr",18)(461,"td",32),Jx(462," reload"),sg(),Sl(463,"td",28)(464,"code",29),Jx(465," boolean "),sg()(),Sl(466,"td",22)(467,"p"),Jx(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),sg(),Sl(469,"p"),Jx(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),Sl(471,"code"),Jx(472,"getLiterals()"),sg(),Jx(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),sg()()()(),Wl(474,"br"),Sl(475,"h3"),Jx(476,"Interfaces"),sg(),Sl(477,"h4",33)(478,"code",12),Jx(479,"PoI18nConfigContext"),sg()(),Sl(480,"div",2)(481,"p"),Wl(482,"a",34),sg(),Sl(483,"p"),Jx(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),Sl(485,"code"),Jx(486,"PoI18nModule"),sg(),Jx(487,"."),sg()(),Sl(488,"h4",33)(489,"code",12),Jx(490,"PoI18nConfigDefault"),sg()(),Sl(491,"div",2)(492,"p"),Wl(493,"a",35),sg(),Sl(494,"p"),Jx(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),sg()(),Sl(496,"h4",16),Jx(497,"Propriedades"),sg(),Sl(498,"table",25)(499,"tr",26)(500,"th",27),Jx(501,"Nome"),sg(),Sl(502,"th",27),Jx(503,"Tipo"),sg(),Sl(504,"th",27),Jx(505,"Descri\xE7\xE3o"),sg()(),Sl(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),Jx(510," cache"),Wl(511,"br"),sg()()(),Sl(512,"td",28)(513,"code",36),Jx(514,"boolean"),sg()(),Sl(515,"td",22)(516,"em")(517,"strong"),Jx(518,"(opcional)"),sg()(),Sl(519,"p"),Jx(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),sg(),Sl(521,"p"),Jx(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),sg(),Sl(523,"p"),Jx(524,"Por padr\xE3o n\xE3o utiliza."),sg()()(),Sl(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),Jx(529," context"),Wl(530,"br"),sg()()(),Sl(531,"td",28)(532,"code",37),Jx(533,"string"),sg()(),Sl(534,"td",22)(535,"em")(536,"strong"),Jx(537,"(opcional)"),sg()(),Sl(538,"p"),Jx(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),sg(),Sl(540,"blockquote")(541,"p"),Jx(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),sg()()()(),Sl(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),Jx(547," language"),Wl(548,"br"),sg()()(),Sl(549,"td",28)(550,"code",37),Jx(551,"string"),sg()(),Sl(552,"td",22)(553,"em")(554,"strong"),Jx(555,"(opcional)"),sg()(),Sl(556,"p"),Jx(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),sg(),Sl(558,"p"),Jx(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Sl(560,"a",9)(561,"code"),Jx(562,"setLanguage()"),sg()(),Jx(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),sg()()()(),Sl(564,"h4",33)(565,"code",12),Jx(566,"PoI18nConfig"),sg()(),Sl(567,"div",2)(568,"p"),Wl(569,"a",38),sg(),Sl(570,"p"),Jx(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),Sl(572,"code"),Jx(573,"PoI18nModule"),sg(),Jx(574,"."),sg()(),Sl(575,"h4",16),Jx(576,"Propriedades"),sg(),Sl(577,"table",25)(578,"tr",26)(579,"th",27),Jx(580,"Nome"),sg(),Sl(581,"th",27),Jx(582,"Tipo"),sg(),Sl(583,"th",27),Jx(584,"Descri\xE7\xE3o"),sg()(),Sl(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),Jx(589," contexts"),Wl(590,"br"),sg()()(),Sl(591,"td",28)(592,"code",39),Jx(593,"PoI18nConfigContext"),sg()(),Sl(594,"td",22)(595,"p"),Jx(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Sl(597,"code"),Jx(598,"url"),sg(),Jx(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),sg(),Sl(600,"p"),Jx(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),sg(),Sl(602,"pre")(603,"code"),Jx(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),sg()(),Sl(605,"p"),Jx(606,"E como informado, podemos utilizar a propriedade "),Sl(607,"code"),Jx(608,"url"),sg(),Jx(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),sg(),Sl(610,"pre")(611,"code"),Jx(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),sg()(),Sl(613,"p"),Jx(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),sg(),Sl(615,"pre")(616,"code"),Jx(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),sg()(),Sl(618,"p"),Jx(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),sg(),Sl(620,"ul")(621,"li")(622,"code"),Jx(623,"language"),sg(),Jx(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Sl(625,"code"),Jx(626,"pt-br"),sg(),Jx(627,", "),Sl(628,"code"),Jx(629,"en-us"),sg(),Jx(630,");"),sg(),Sl(631,"li")(632,"code"),Jx(633,"literals"),sg(),Jx(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),sg()(),Sl(635,"p"),Jx(636,"Exemplos de requisi\xE7\xE3o:"),sg(),Sl(637,"pre")(638,"code"),Jx(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),sg()(),Sl(640,"blockquote")(641,"p"),Jx(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Sl(643,"code"),Jx(644,"pt-br"),sg(),Jx(645,"."),sg()(),Sl(646,"p"),Jx(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Sl(648,"em"),Jx(649,"backup"),sg(),Jx(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),sg(),Sl(651,"pre")(652,"code"),Jx(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),sg()(),Sl(654,"blockquote")(655,"p"),Jx(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),sg()()()(),Sl(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),Jx(661," default"),Wl(662,"br"),sg()()(),Sl(663,"td",28)(664,"code",40),Jx(665,"PoI18nConfigDefault"),sg()(),Sl(666,"td",22)(667,"em")(668,"strong"),Jx(669,"(opcional)"),sg()(),Sl(670,"p"),Jx(671,"Configura\xE7\xF5es padr\xF5es."),sg()()()(),Sl(672,"h4",33)(673,"code",12),Jx(674,"PoI18nLiterals"),sg()(),Sl(675,"div",2)(676,"p"),Jx(677,"Interface para o m\xE9todo "),Sl(678,"code"),Jx(679,"getLiterals()"),sg(),Jx(680," do servi\xE7o PoI18nService."),sg()(),Sl(681,"h4",16),Jx(682,"Propriedades"),sg(),Sl(683,"table",25)(684,"tr",26)(685,"th",27),Jx(686,"Nome"),sg(),Sl(687,"th",27),Jx(688,"Tipo"),sg(),Sl(689,"th",27),Jx(690,"Descri\xE7\xE3o"),sg()(),Sl(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),Jx(695," context"),Wl(696,"br"),sg()()(),Sl(697,"td",28)(698,"code",37),Jx(699,"string"),sg()(),Sl(700,"td",22)(701,"em")(702,"strong"),Jx(703,"(opcional)"),sg()(),Sl(704,"p"),Jx(705,"Contexto utilizado na busca das literais."),sg()()(),Sl(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),Jx(710," language"),Wl(711,"br"),sg()()(),Sl(712,"td",28)(713,"code",37),Jx(714,"string"),sg()(),Sl(715,"td",22)(716,"em")(717,"strong"),Jx(718,"(opcional)"),sg()(),Sl(719,"p"),Jx(720,"Idioma a ser buscado."),sg()()(),Sl(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),Jx(725," literals"),Wl(726,"br"),sg()()(),Sl(727,"td",28)(728,"code",41),Jx(729,"Array<string>"),sg()(),Sl(730,"td",22)(731,"em")(732,"strong"),Jx(733,"(opcional)"),sg()(),Sl(734,"p"),Jx(735,"Lista das literais."),sg()()()(),Sl(736,"h4",33)(737,"code",12),Jx(738,"PoLanguage"),sg()(),Sl(739,"div",2)(740,"p"),Wl(741,"a",42),sg(),Sl(742,"p"),Jx(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),sg()(),Sl(744,"h4",16),Jx(745,"Propriedades"),sg(),Sl(746,"table",25)(747,"tr",26)(748,"th",27),Jx(749,"Nome"),sg(),Sl(750,"th",27),Jx(751,"Tipo"),sg(),Sl(752,"th",27),Jx(753,"Descri\xE7\xE3o"),sg()(),Sl(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),Jx(758," description"),Wl(759,"br"),sg()()(),Sl(760,"td",28)(761,"code",37),Jx(762,"string"),sg()(),Sl(763,"td",22)(764,"em")(765,"strong"),Jx(766,"(opcional)"),sg()(),Sl(767,"p"),Jx(768,"Descri\xE7\xE3o do idioma"),sg()()(),Sl(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),Jx(773," language"),Wl(774,"br"),sg()()(),Sl(775,"td",28)(776,"code",37),Jx(777,"string"),sg()(),Sl(778,"td",22)(779,"em")(780,"strong"),Jx(781,"(opcional)"),sg()(),Sl(782,"p"),Jx(783,"C\xF3digo do idioma "),Sl(784,"a",43),Jx(785,"ISO 639-1"),sg()(),Sl(786,"blockquote")(787,"p"),Jx(788,"Exemplo: 'pt','en'"),sg()()()()(),Sl(789,"h4",33)(790,"code",12),Jx(791,"PoNumberSeparator"),sg()(),Sl(792,"div",2)(793,"p"),Wl(794,"a",44),sg(),Sl(795,"p"),Jx(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),sg()(),Sl(797,"h4",16),Jx(798,"Propriedades"),sg(),Sl(799,"table",25)(800,"tr",26)(801,"th",27),Jx(802,"Nome"),sg(),Sl(803,"th",27),Jx(804,"Tipo"),sg(),Sl(805,"th",27),Jx(806,"Descri\xE7\xE3o"),sg()(),Sl(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),Jx(811," language"),Wl(812,"br"),sg()()(),Sl(813,"td",28)(814,"code",37),Jx(815,"string"),sg()(),Sl(816,"td",22)(817,"em")(818,"strong"),Jx(819,"(opcional)"),sg()(),Sl(820,"p"),Jx(821,"C\xF3digo do idioma "),Sl(822,"a",43),Jx(823,"ISO 639-1"),sg()(),Sl(824,"blockquote")(825,"p"),Jx(826,"Exemplo: 'pt','en'"),sg()()()(),Sl(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),Jx(831," separator"),Wl(832,"br"),sg()()(),Sl(833,"td",28)(834,"code",37),Jx(835,"string"),sg()(),Sl(836,"td",22)(837,"em")(838,"strong"),Jx(839,"(opcional)"),sg()(),Sl(840,"p"),Jx(841,"Separador num\xE9rico"),sg()()()(),Sl(842,"h4",33)(843,"code",12),Jx(844,"PoDateSeparator"),sg()(),Sl(845,"div",2)(846,"p"),Wl(847,"a",45),sg(),Sl(848,"p"),Jx(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),sg()(),Sl(850,"h4",16),Jx(851,"Propriedades"),sg(),Sl(852,"table",25)(853,"tr",26)(854,"th",27),Jx(855,"Nome"),sg(),Sl(856,"th",27),Jx(857,"Tipo"),sg(),Sl(858,"th",27),Jx(859,"Descri\xE7\xE3o"),sg()(),Sl(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),Jx(864," locale"),Wl(865,"br"),sg()()(),Sl(866,"td",28)(867,"code",37),Jx(868,"string"),sg()(),Sl(869,"td",22)(870,"em")(871,"strong"),Jx(872,"(opcional)"),sg()(),Sl(873,"p"),Jx(874,"C\xF3digo do locale "),Sl(875,"a",43),Jx(876,"ISO 639-1"),sg()(),Sl(877,"blockquote")(878,"p"),Jx(879,"Exemplo: 'pt','en'"),sg()()()(),Sl(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),Jx(884," separator"),Wl(885,"br"),sg()()(),Sl(886,"td",28)(887,"code",37),Jx(888,"string"),sg()(),Sl(889,"td",22)(890,"em")(891,"strong"),Jx(892,"(opcional)"),sg()(),Sl(893,"p"),Jx(894,"Separador de data"),sg(),Sl(895,"blockquote")(896,"p"),Jx(897,"Exemplo: '/','.','-'"),sg()()()()()());},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-i18n-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),a&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[pL.forChild(T),pL]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,z]})}return o})();export{H as DocPoI18nModule};