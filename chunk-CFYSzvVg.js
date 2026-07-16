import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,T as Tl,C as iN,M as sg,L as Gl,a9 as Zy,aa as Yy,a3 as lNe,b8 as Wme,b9 as jme,a1 as ht,O as nw,H as Vp}from'./main-56B5DD5U.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoI18nModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do servi\xE7o "),Tl(7,"code"),iN(8,"PoI18nService"),sg(),iN(9," para controle de idiomas com PO."),sg(),Tl(10,"p"),iN(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),Tl(12,"code"),iN(13,"PoI18nService"),sg(),iN(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Tl(15,"code"),iN(16,"PoModule"),sg(),iN(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),Tl(18,"code"),iN(19,"config"),sg(),iN(20,`, informando um objeto que deve implementar
a interface `),Tl(21,"a",3)(22,"code"),iN(23,"PoI18nConfig"),sg()(),iN(24," para configura\xE7\xE3o."),sg(),Tl(25,"p"),Gl(26,"a",4),Tl(27,"strong"),iN(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),sg()(),Tl(29,"pre")(30,"code"),iN(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),sg()(),Tl(32,"p"),iN(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),sg(),Tl(34,"p"),iN(35,"Arquivo general-pt.ts"),sg(),Tl(36,"pre")(37,"code"),iN(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),sg()(),Tl(39,"p"),iN(40,"Arquivo general-en.ts"),sg(),Tl(41,"pre")(42,"code"),iN(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),sg()(),Tl(44,"p")(45,"strong"),iN(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),sg()(),Tl(47,"pre")(48,"code"),iN(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),sg()(),Tl(50,"p")(51,"strong"),iN(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),sg()(),Tl(53,"p"),iN(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),sg(),Tl(55,"ul")(56,"li")(57,"a",5),iN(58,"http://10.0.0.1:3000/api/translations/crm"),sg()(),Tl(59,"li")(60,"a",6),iN(61,"http://10.0.0.1:3000/api/translations/general"),sg()()(),Tl(62,"p"),iN(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),sg(),Tl(64,"ul")(65,"li")(66,"strong"),iN(67,"language"),sg(),iN(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Tl(69,"code"),iN(70,"pt-br"),sg(),iN(71,", "),Tl(72,"code"),iN(73,"en-us"),sg(),iN(74,", "),Tl(75,"code"),iN(76,"es-es"),sg(),iN(77," ou "),Tl(78,"code"),iN(79,"ru"),sg(),iN(80,")."),sg(),Tl(81,"li")(82,"strong"),iN(83,"literals"),sg(),iN(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),sg()(),Tl(85,"p"),iN(86,"Exemplos de requisi\xE7\xE3o:"),sg(),Tl(87,"ul")(88,"li")(89,"a",7),iN(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),sg()(),Tl(91,"li")(92,"a",8),iN(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),sg()()(),Tl(94,"blockquote")(95,"p"),iN(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Tl(97,"code"),iN(98,"pt-br"),sg(),iN(99,"."),sg()(),Tl(100,"p"),iN(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),Tl(102,"em"),iN(103,"default"),sg(),iN(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Tl(105,"a",3)(106,"code"),iN(107,"PoI18nConfig"),sg()(),iN(108,":"),sg(),Tl(109,"p")(110,"strong"),iN(111,"Exemplo de padr\xF5es definidos:"),sg()(),Tl(112,"pre")(113,"code"),iN(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),sg()(),Tl(115,"p")(116,"strong"),iN(117,"Importante:"),sg()(),Tl(118,"p"),iN(119,"Recomenda-se que as defini\xE7\xF5es "),Tl(120,"em"),iN(121,"default"),sg(),iN(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Tl(123,"code"),iN(124,"AppModule"),sg(),iN(125,"."),sg(),Tl(126,"p")(127,"strong"),iN(128,"i18n com "),Tl(129,"em"),iN(130,"Lazy loading"),sg()()(),Tl(131,"p"),iN(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),Tl(133,"em"),iN(134,"lazy loading"),sg(),iN(135,`, caso seja
definida outra configura\xE7\xE3o do `),Tl(136,"code"),iN(137,"PoI18nModule"),sg(),iN(138,", deve-se atentar os seguintes detalhes:"),sg(),Tl(139,"ul")(140,"li"),iN(141,"N\xE3o defina outra "),Tl(142,"em"),iN(143,"default language"),sg(),iN(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),sg(),Tl(145,"li"),iN(146,"Caso precise de m\xF3dulos carregados via "),Tl(147,"em"),iN(148,"lazy loading"),sg(),iN(149,` com linguagens diferentes, utilize o
m\xE9todo `),Tl(150,"a",9)(151,"code"),iN(152,"setLanguage()"),sg()(),iN(153," disponibilizado pelo "),Tl(154,"code"),iN(155,"PoI18nService"),sg(),iN(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),sg()()(),Tl(157,"h3",10),iN(158,"Services"),sg(),Tl(159,"h4",11)(160,"code",12),iN(161,"PoI18nService"),sg()(),Tl(162,"div",2)(163,"p"),iN(164,"O servi\xE7o "),Tl(165,"code"),iN(166,"PoI18nService"),sg(),iN(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),sg(),Tl(168,"blockquote")(169,"p"),iN(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Tl(171,"a",13),iN(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),Tl(173,"code"),iN(174,"PoI18nModule"),sg()(),iN(175,"."),sg()(),Tl(176,"p")(177,"strong"),iN(178,"Utiliza\xE7\xE3o do servi\xE7o "),Tl(179,"code"),iN(180,"PoI18nService"),sg(),iN(181,":"),sg()(),Tl(182,"p"),iN(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),sg(),Tl(184,"pre")(185,"code"),iN(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),sg()(),Tl(187,"p"),iN(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),Tl(189,"a",14),iN(190,"Observable"),sg(),iN(191,` pelo
m\xE9todo `),Tl(192,"code"),iN(193,"getLiterals()"),sg(),iN(194,"."),sg(),Tl(195,"blockquote")(196,"p"),iN(197,"O m\xE9todo "),Tl(198,"code"),iN(199,"getLiterals()"),sg(),iN(200," pode receber um objeto do tipo da interface "),Tl(201,"code"),iN(202,"PoI18nLiterals"),sg(),iN(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),sg()(),Tl(204,"ul")(205,"li")(206,"h2"),iN(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),sg()()(),Tl(208,"p"),iN(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Tl(210,"code"),iN(211,"getLiterals"),sg(),iN(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Tl(213,"code"),iN(214,"getLiterals"),sg(),iN(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),sg(),Tl(216,"p")(217,"strong"),iN(218,"Exemplo de chamada com contexto expl\xEDcito:"),sg()(),Tl(219,"pre")(220,"code",15),iN(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),sg()(),Tl(222,"p")(223,"strong"),iN(224,"Cen\xE1rio de Contextos Iguais:"),sg(),iN(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),sg(),Tl(226,"p")(227,"strong"),iN(228,"Recomenda\xE7\xF5es:"),sg()(),Tl(229,"ul")(230,"li"),iN(231,"Sempre informar o contexto ao chamar "),Tl(232,"code"),iN(233,"getLiterals"),sg(),iN(234," para evitar conflitos de literais."),sg(),Tl(235,"li"),iN(236,"Caso a aplica\xE7\xE3o utilize "),Tl(237,"code"),iN(238,"lazy loading"),sg(),iN(239,", utilizar "),Tl(240,"code"),iN(241,"setLanguage()"),sg(),iN(242," para garantir a correta configura\xE7\xE3o de idioma."),sg()(),Tl(243,"p"),iN(244,"Exemplos de requisi\xE7\xE3o:"),sg(),Tl(245,"pre")(246,"code"),iN(247,`literals = {};
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
`),sg()(),Tl(248,"p"),iN(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),sg(),Tl(250,"pre"),Zy(),iN(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Yy(),sg(),Tl(252,"p"),iN(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),Tl(254,"em"),iN(255,"pipe"),sg(),Tl(256,"code"),iN(257,"poI18n"),sg(),iN(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Tl(259,"code"),iN(260,"name"),sg(),iN(261," e "),Tl(262,"code"),iN(263,"nickname"),sg(),iN(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),sg(),Tl(265,"pre"),Zy(),iN(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Yy(),sg(),Tl(267,"blockquote")(268,"p"),iN(269,"\xC9 importante o uso do operador "),Tl(270,"code"),iN(271,"?"),sg(),iN(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),sg()(),Tl(273,"h3"),iN(274,"Teste unit\xE1rio"),sg(),Tl(275,"p"),iN(276,"Abaixo segue um exemplo de "),Tl(277,"em"),iN(278,"setup"),sg(),iN(279," inicial de teste unit\xE1rio do "),Tl(280,"em"),iN(281,"AppComponent"),sg(),iN(282," que utiliza o "),Tl(283,"code"),iN(284,"PoI18nService"),sg(),iN(285,":"),sg(),Tl(286,"blockquote")(287,"p"),iN(288,"Aten\xE7\xE3o: n\xE3o declarar o "),Tl(289,"code"),iN(290,"PoI18nService"),sg(),iN(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),sg()(),Tl(292,"pre")(293,"code"),iN(294,`import { async, TestBed } from '@angular/core/testing';
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
`),sg()()(),Tl(295,"h3",16),iN(296,"M\xE9todos"),sg(),Tl(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),iN(303," getLanguage "),sg()()()()(),Tl(304,"tr",22)(305,"td",22)(306,"p"),Gl(307,"a",23),iN(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),sg(),Tl(309,"p"),iN(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),sg(),Tl(311,"p"),iN(312," 1 - o idioma que foi armazenado no "),Tl(313,"em"),iN(314,"localStorage"),sg(),iN(315,", atrav\xE9s do m\xE9todo "),Tl(316,"a",9)(317,"code"),iN(318,"setLanguage()"),sg()(),iN(319,"."),sg(),Tl(320,"p"),iN(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),Tl(322,"code"),iN(323,"config"),sg(),iN(324,`, sendo o idioma inserido na propriedade
`),Tl(325,"code"),iN(326,"language"),sg(),iN(327," da interface "),Tl(328,"a",24)(329,"code"),iN(330,"PoI18nConfigDefault"),sg()(),iN(331,"."),sg(),Tl(332,"p"),iN(333," 3 - o idioma do navegador utilizado."),sg(),Tl(334,"blockquote")(335,"p"),iN(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),Tl(337,"code"),iN(338,"pt"),sg(),iN(339,", "),Tl(340,"code"),iN(341,"en"),sg(),iN(342,", "),Tl(343,"code"),iN(344,"es"),sg(),iN(345," ou "),Tl(346,"code"),iN(347,"ru"),sg(),iN(348,"), ser\xE1 retornado valor "),Tl(349,"code"),iN(350,"pt"),sg(),iN(351,"."),sg()()()()(),Tl(352,"h5")(353,"b"),iN(354,"Retorno"),sg()(),Tl(355,"table",25)(356,"tr",26)(357,"th",27),iN(358,"Tipo"),sg(),Tl(359,"th",27),iN(360,"Descri\xE7\xE3o"),sg()(),Tl(361,"tr",18)(362,"td",28)(363,"code",29),iN(364,"string"),sg()(),Tl(365,"td",22)(366,"p"),iN(367,"sigla do idioma padr\xE3o."),sg()()()(),Gl(368,"br"),Tl(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),iN(375," getShortLanguage "),sg()()()()(),Tl(376,"tr",22)(377,"td",22)(378,"p"),iN(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),sg(),Tl(380,"p"),iN(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),Tl(382,"a",30)(383,"strong"),iN(384,"getLanguage()"),sg()(),iN(385,"."),sg()()()(),Tl(386,"h5")(387,"b"),iN(388,"Retorno"),sg()(),Tl(389,"table",25)(390,"tr",26)(391,"th",27),iN(392,"Tipo"),sg(),Tl(393,"th",27),iN(394,"Descri\xE7\xE3o"),sg()(),Tl(395,"tr",18)(396,"td",28)(397,"code",29),iN(398,"string"),sg()(),Tl(399,"td",22)(400,"p"),iN(401,"sigla do idioma padr\xE3o."),sg()()()(),Gl(402,"br"),Tl(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),iN(409," setLanguage "),sg()()()()(),Tl(410,"tr",22)(411,"td",22)(412,"p"),Gl(413,"a",31),iN(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),sg(),Tl(415,"p"),iN(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Tl(417,"code"),iN(418,"i18n"),sg(),iN(419," para buscar as literais no idioma padr\xE3o."),sg()()()(),Tl(420,"h5")(421,"b"),iN(422,"Par\xE2metros"),sg()(),Tl(423,"table",25)(424,"tr",26)(425,"th",27),iN(426,"Nome"),sg(),Tl(427,"th",27),iN(428,"Tipo"),sg(),Tl(429,"th",27),iN(430,"Descri\xE7\xE3o"),sg()(),Tl(431,"tr",18)(432,"td",32),iN(433," language"),sg(),Tl(434,"td",28)(435,"code",29),iN(436," string "),sg()(),Tl(437,"td",22)(438,"p"),iN(439,"Sigla do idioma."),sg(),Tl(440,"p"),iN(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Tl(442,"code"),iN(443,"pt"),sg(),iN(444,", "),Tl(445,"code"),iN(446,"pt-BR"),sg(),iN(447,", "),Tl(448,"code"),iN(449,"pt-br"),sg(),iN(450,", "),Tl(451,"code"),iN(452,"en"),sg(),iN(453," ou "),Tl(454,"code"),iN(455,"en-US"),sg(),iN(456,"."),sg(),Tl(457,"blockquote")(458,"p"),iN(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),sg()()()(),Tl(460,"tr",18)(461,"td",32),iN(462," reload"),sg(),Tl(463,"td",28)(464,"code",29),iN(465," boolean "),sg()(),Tl(466,"td",22)(467,"p"),iN(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),sg(),Tl(469,"p"),iN(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),Tl(471,"code"),iN(472,"getLiterals()"),sg(),iN(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),sg()()()(),Gl(474,"br"),Tl(475,"h3"),iN(476,"Interfaces"),sg(),Tl(477,"h4",33)(478,"code",12),iN(479,"PoI18nConfigContext"),sg()(),Tl(480,"div",2)(481,"p"),Gl(482,"a",34),sg(),Tl(483,"p"),iN(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),Tl(485,"code"),iN(486,"PoI18nModule"),sg(),iN(487,"."),sg()(),Tl(488,"h4",33)(489,"code",12),iN(490,"PoI18nConfigDefault"),sg()(),Tl(491,"div",2)(492,"p"),Gl(493,"a",35),sg(),Tl(494,"p"),iN(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),sg()(),Tl(496,"h4",16),iN(497,"Propriedades"),sg(),Tl(498,"table",25)(499,"tr",26)(500,"th",27),iN(501,"Nome"),sg(),Tl(502,"th",27),iN(503,"Tipo"),sg(),Tl(504,"th",27),iN(505,"Descri\xE7\xE3o"),sg()(),Tl(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),iN(510," cache"),Gl(511,"br"),sg()()(),Tl(512,"td",28)(513,"code",36),iN(514,"boolean"),sg()(),Tl(515,"td",22)(516,"em")(517,"strong"),iN(518,"(opcional)"),sg()(),Tl(519,"p"),iN(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),sg(),Tl(521,"p"),iN(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),sg(),Tl(523,"p"),iN(524,"Por padr\xE3o n\xE3o utiliza."),sg()()(),Tl(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),iN(529," context"),Gl(530,"br"),sg()()(),Tl(531,"td",28)(532,"code",37),iN(533,"string"),sg()(),Tl(534,"td",22)(535,"em")(536,"strong"),iN(537,"(opcional)"),sg()(),Tl(538,"p"),iN(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),sg(),Tl(540,"blockquote")(541,"p"),iN(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),sg()()()(),Tl(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),iN(547," language"),Gl(548,"br"),sg()()(),Tl(549,"td",28)(550,"code",37),iN(551,"string"),sg()(),Tl(552,"td",22)(553,"em")(554,"strong"),iN(555,"(opcional)"),sg()(),Tl(556,"p"),iN(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),sg(),Tl(558,"p"),iN(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Tl(560,"a",9)(561,"code"),iN(562,"setLanguage()"),sg()(),iN(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),sg()()()(),Tl(564,"h4",33)(565,"code",12),iN(566,"PoI18nConfig"),sg()(),Tl(567,"div",2)(568,"p"),Gl(569,"a",38),sg(),Tl(570,"p"),iN(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),Tl(572,"code"),iN(573,"PoI18nModule"),sg(),iN(574,"."),sg()(),Tl(575,"h4",16),iN(576,"Propriedades"),sg(),Tl(577,"table",25)(578,"tr",26)(579,"th",27),iN(580,"Nome"),sg(),Tl(581,"th",27),iN(582,"Tipo"),sg(),Tl(583,"th",27),iN(584,"Descri\xE7\xE3o"),sg()(),Tl(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),iN(589," contexts"),Gl(590,"br"),sg()()(),Tl(591,"td",28)(592,"code",39),iN(593,"PoI18nConfigContext"),sg()(),Tl(594,"td",22)(595,"p"),iN(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Tl(597,"code"),iN(598,"url"),sg(),iN(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),sg(),Tl(600,"p"),iN(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),sg(),Tl(602,"pre")(603,"code"),iN(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),sg()(),Tl(605,"p"),iN(606,"E como informado, podemos utilizar a propriedade "),Tl(607,"code"),iN(608,"url"),sg(),iN(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),sg(),Tl(610,"pre")(611,"code"),iN(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),sg()(),Tl(613,"p"),iN(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),sg(),Tl(615,"pre")(616,"code"),iN(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),sg()(),Tl(618,"p"),iN(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),sg(),Tl(620,"ul")(621,"li")(622,"code"),iN(623,"language"),sg(),iN(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Tl(625,"code"),iN(626,"pt-br"),sg(),iN(627,", "),Tl(628,"code"),iN(629,"en-us"),sg(),iN(630,");"),sg(),Tl(631,"li")(632,"code"),iN(633,"literals"),sg(),iN(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),sg()(),Tl(635,"p"),iN(636,"Exemplos de requisi\xE7\xE3o:"),sg(),Tl(637,"pre")(638,"code"),iN(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),sg()(),Tl(640,"blockquote")(641,"p"),iN(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Tl(643,"code"),iN(644,"pt-br"),sg(),iN(645,"."),sg()(),Tl(646,"p"),iN(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Tl(648,"em"),iN(649,"backup"),sg(),iN(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),sg(),Tl(651,"pre")(652,"code"),iN(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),sg()(),Tl(654,"blockquote")(655,"p"),iN(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),sg()()()(),Tl(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),iN(661," default"),Gl(662,"br"),sg()()(),Tl(663,"td",28)(664,"code",40),iN(665,"PoI18nConfigDefault"),sg()(),Tl(666,"td",22)(667,"em")(668,"strong"),iN(669,"(opcional)"),sg()(),Tl(670,"p"),iN(671,"Configura\xE7\xF5es padr\xF5es."),sg()()()(),Tl(672,"h4",33)(673,"code",12),iN(674,"PoI18nLiterals"),sg()(),Tl(675,"div",2)(676,"p"),iN(677,"Interface para o m\xE9todo "),Tl(678,"code"),iN(679,"getLiterals()"),sg(),iN(680," do servi\xE7o PoI18nService."),sg()(),Tl(681,"h4",16),iN(682,"Propriedades"),sg(),Tl(683,"table",25)(684,"tr",26)(685,"th",27),iN(686,"Nome"),sg(),Tl(687,"th",27),iN(688,"Tipo"),sg(),Tl(689,"th",27),iN(690,"Descri\xE7\xE3o"),sg()(),Tl(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),iN(695," context"),Gl(696,"br"),sg()()(),Tl(697,"td",28)(698,"code",37),iN(699,"string"),sg()(),Tl(700,"td",22)(701,"em")(702,"strong"),iN(703,"(opcional)"),sg()(),Tl(704,"p"),iN(705,"Contexto utilizado na busca das literais."),sg()()(),Tl(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),iN(710," language"),Gl(711,"br"),sg()()(),Tl(712,"td",28)(713,"code",37),iN(714,"string"),sg()(),Tl(715,"td",22)(716,"em")(717,"strong"),iN(718,"(opcional)"),sg()(),Tl(719,"p"),iN(720,"Idioma a ser buscado."),sg()()(),Tl(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),iN(725," literals"),Gl(726,"br"),sg()()(),Tl(727,"td",28)(728,"code",41),iN(729,"Array<string>"),sg()(),Tl(730,"td",22)(731,"em")(732,"strong"),iN(733,"(opcional)"),sg()(),Tl(734,"p"),iN(735,"Lista das literais."),sg()()()(),Tl(736,"h4",33)(737,"code",12),iN(738,"PoLanguage"),sg()(),Tl(739,"div",2)(740,"p"),Gl(741,"a",42),sg(),Tl(742,"p"),iN(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),sg()(),Tl(744,"h4",16),iN(745,"Propriedades"),sg(),Tl(746,"table",25)(747,"tr",26)(748,"th",27),iN(749,"Nome"),sg(),Tl(750,"th",27),iN(751,"Tipo"),sg(),Tl(752,"th",27),iN(753,"Descri\xE7\xE3o"),sg()(),Tl(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),iN(758," description"),Gl(759,"br"),sg()()(),Tl(760,"td",28)(761,"code",37),iN(762,"string"),sg()(),Tl(763,"td",22)(764,"em")(765,"strong"),iN(766,"(opcional)"),sg()(),Tl(767,"p"),iN(768,"Descri\xE7\xE3o do idioma"),sg()()(),Tl(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),iN(773," language"),Gl(774,"br"),sg()()(),Tl(775,"td",28)(776,"code",37),iN(777,"string"),sg()(),Tl(778,"td",22)(779,"em")(780,"strong"),iN(781,"(opcional)"),sg()(),Tl(782,"p"),iN(783,"C\xF3digo do idioma "),Tl(784,"a",43),iN(785,"ISO 639-1"),sg()(),Tl(786,"blockquote")(787,"p"),iN(788,"Exemplo: 'pt','en'"),sg()()()()(),Tl(789,"h4",33)(790,"code",12),iN(791,"PoNumberSeparator"),sg()(),Tl(792,"div",2)(793,"p"),Gl(794,"a",44),sg(),Tl(795,"p"),iN(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),sg()(),Tl(797,"h4",16),iN(798,"Propriedades"),sg(),Tl(799,"table",25)(800,"tr",26)(801,"th",27),iN(802,"Nome"),sg(),Tl(803,"th",27),iN(804,"Tipo"),sg(),Tl(805,"th",27),iN(806,"Descri\xE7\xE3o"),sg()(),Tl(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),iN(811," language"),Gl(812,"br"),sg()()(),Tl(813,"td",28)(814,"code",37),iN(815,"string"),sg()(),Tl(816,"td",22)(817,"em")(818,"strong"),iN(819,"(opcional)"),sg()(),Tl(820,"p"),iN(821,"C\xF3digo do idioma "),Tl(822,"a",43),iN(823,"ISO 639-1"),sg()(),Tl(824,"blockquote")(825,"p"),iN(826,"Exemplo: 'pt','en'"),sg()()()(),Tl(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),iN(831," separator"),Gl(832,"br"),sg()()(),Tl(833,"td",28)(834,"code",37),iN(835,"string"),sg()(),Tl(836,"td",22)(837,"em")(838,"strong"),iN(839,"(opcional)"),sg()(),Tl(840,"p"),iN(841,"Separador num\xE9rico"),sg()()()(),Tl(842,"h4",33)(843,"code",12),iN(844,"PoDateSeparator"),sg()(),Tl(845,"div",2)(846,"p"),Gl(847,"a",45),sg(),Tl(848,"p"),iN(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),sg()(),Tl(850,"h4",16),iN(851,"Propriedades"),sg(),Tl(852,"table",25)(853,"tr",26)(854,"th",27),iN(855,"Nome"),sg(),Tl(856,"th",27),iN(857,"Tipo"),sg(),Tl(858,"th",27),iN(859,"Descri\xE7\xE3o"),sg()(),Tl(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),iN(864," locale"),Gl(865,"br"),sg()()(),Tl(866,"td",28)(867,"code",37),iN(868,"string"),sg()(),Tl(869,"td",22)(870,"em")(871,"strong"),iN(872,"(opcional)"),sg()(),Tl(873,"p"),iN(874,"C\xF3digo do locale "),Tl(875,"a",43),iN(876,"ISO 639-1"),sg()(),Tl(877,"blockquote")(878,"p"),iN(879,"Exemplo: 'pt','en'"),sg()()()(),Tl(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),iN(884," separator"),Gl(885,"br"),sg()()(),Tl(886,"td",28)(887,"code",37),iN(888,"string"),sg()(),Tl(889,"td",22)(890,"em")(891,"strong"),iN(892,"(opcional)"),sg()(),Tl(893,"p"),iN(894,"Separador de data"),sg(),Tl(895,"blockquote")(896,"p"),iN(897,"Exemplo: '/','.','-'"),sg()()()()()());},encapsulation:2,changeDetection:1})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-i18n-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),a&2&&(nw("p-actions",l.actions),Vp(2),nw("p-active",l.activeTab==="doc"),Vp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[lNe,Wme,jme,D],encapsulation:2,changeDetection:1})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[DL.forChild(T),DL]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,z]})}return o})();export{H as DocPoI18nModule};