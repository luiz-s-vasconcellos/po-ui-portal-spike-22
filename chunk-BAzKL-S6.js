import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,J as wl,z as Ux,R as ng,N as Ul,a9 as Xy,aa as Ky,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoI18nModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do servi\xE7o "),wl(7,"code"),Ux(8,"PoI18nService"),ng(),Ux(9," para controle de idiomas com PO."),ng(),wl(10,"p"),Ux(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),wl(12,"code"),Ux(13,"PoI18nService"),ng(),Ux(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),wl(15,"code"),Ux(16,"PoModule"),ng(),Ux(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),wl(18,"code"),Ux(19,"config"),ng(),Ux(20,`, informando um objeto que deve implementar
a interface `),wl(21,"a",3)(22,"code"),Ux(23,"PoI18nConfig"),ng()(),Ux(24," para configura\xE7\xE3o."),ng(),wl(25,"p"),Ul(26,"a",4),wl(27,"strong"),Ux(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),ng()(),wl(29,"pre")(30,"code"),Ux(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),ng()(),wl(32,"p"),Ux(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),ng(),wl(34,"p"),Ux(35,"Arquivo general-pt.ts"),ng(),wl(36,"pre")(37,"code"),Ux(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),ng()(),wl(39,"p"),Ux(40,"Arquivo general-en.ts"),ng(),wl(41,"pre")(42,"code"),Ux(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),ng()(),wl(44,"p")(45,"strong"),Ux(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),ng()(),wl(47,"pre")(48,"code"),Ux(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),ng()(),wl(50,"p")(51,"strong"),Ux(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),ng()(),wl(53,"p"),Ux(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),ng(),wl(55,"ul")(56,"li")(57,"a",5),Ux(58,"http://10.0.0.1:3000/api/translations/crm"),ng()(),wl(59,"li")(60,"a",6),Ux(61,"http://10.0.0.1:3000/api/translations/general"),ng()()(),wl(62,"p"),Ux(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),ng(),wl(64,"ul")(65,"li")(66,"strong"),Ux(67,"language"),ng(),Ux(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),wl(69,"code"),Ux(70,"pt-br"),ng(),Ux(71,", "),wl(72,"code"),Ux(73,"en-us"),ng(),Ux(74,", "),wl(75,"code"),Ux(76,"es-es"),ng(),Ux(77," ou "),wl(78,"code"),Ux(79,"ru"),ng(),Ux(80,")."),ng(),wl(81,"li")(82,"strong"),Ux(83,"literals"),ng(),Ux(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ng()(),wl(85,"p"),Ux(86,"Exemplos de requisi\xE7\xE3o:"),ng(),wl(87,"ul")(88,"li")(89,"a",7),Ux(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),ng()(),wl(91,"li")(92,"a",8),Ux(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),ng()()(),wl(94,"blockquote")(95,"p"),Ux(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),wl(97,"code"),Ux(98,"pt-br"),ng(),Ux(99,"."),ng()(),wl(100,"p"),Ux(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),wl(102,"em"),Ux(103,"default"),ng(),Ux(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),wl(105,"a",3)(106,"code"),Ux(107,"PoI18nConfig"),ng()(),Ux(108,":"),ng(),wl(109,"p")(110,"strong"),Ux(111,"Exemplo de padr\xF5es definidos:"),ng()(),wl(112,"pre")(113,"code"),Ux(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),ng()(),wl(115,"p")(116,"strong"),Ux(117,"Importante:"),ng()(),wl(118,"p"),Ux(119,"Recomenda-se que as defini\xE7\xF5es "),wl(120,"em"),Ux(121,"default"),ng(),Ux(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),wl(123,"code"),Ux(124,"AppModule"),ng(),Ux(125,"."),ng(),wl(126,"p")(127,"strong"),Ux(128,"i18n com "),wl(129,"em"),Ux(130,"Lazy loading"),ng()()(),wl(131,"p"),Ux(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),wl(133,"em"),Ux(134,"lazy loading"),ng(),Ux(135,`, caso seja
definida outra configura\xE7\xE3o do `),wl(136,"code"),Ux(137,"PoI18nModule"),ng(),Ux(138,", deve-se atentar os seguintes detalhes:"),ng(),wl(139,"ul")(140,"li"),Ux(141,"N\xE3o defina outra "),wl(142,"em"),Ux(143,"default language"),ng(),Ux(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),ng(),wl(145,"li"),Ux(146,"Caso precise de m\xF3dulos carregados via "),wl(147,"em"),Ux(148,"lazy loading"),ng(),Ux(149,` com linguagens diferentes, utilize o
m\xE9todo `),wl(150,"a",9)(151,"code"),Ux(152,"setLanguage()"),ng()(),Ux(153," disponibilizado pelo "),wl(154,"code"),Ux(155,"PoI18nService"),ng(),Ux(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),ng()()(),wl(157,"h3",10),Ux(158,"Services"),ng(),wl(159,"h4",11)(160,"code",12),Ux(161,"PoI18nService"),ng()(),wl(162,"div",2)(163,"p"),Ux(164,"O servi\xE7o "),wl(165,"code"),Ux(166,"PoI18nService"),ng(),Ux(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),ng(),wl(168,"blockquote")(169,"p"),Ux(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),wl(171,"a",13),Ux(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),wl(173,"code"),Ux(174,"PoI18nModule"),ng()(),Ux(175,"."),ng()(),wl(176,"p")(177,"strong"),Ux(178,"Utiliza\xE7\xE3o do servi\xE7o "),wl(179,"code"),Ux(180,"PoI18nService"),ng(),Ux(181,":"),ng()(),wl(182,"p"),Ux(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),ng(),wl(184,"pre")(185,"code"),Ux(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),ng()(),wl(187,"p"),Ux(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),wl(189,"a",14),Ux(190,"Observable"),ng(),Ux(191,` pelo
m\xE9todo `),wl(192,"code"),Ux(193,"getLiterals()"),ng(),Ux(194,"."),ng(),wl(195,"blockquote")(196,"p"),Ux(197,"O m\xE9todo "),wl(198,"code"),Ux(199,"getLiterals()"),ng(),Ux(200," pode receber um objeto do tipo da interface "),wl(201,"code"),Ux(202,"PoI18nLiterals"),ng(),Ux(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),ng()(),wl(204,"ul")(205,"li")(206,"h2"),Ux(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),ng()()(),wl(208,"p"),Ux(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),wl(210,"code"),Ux(211,"getLiterals"),ng(),Ux(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),wl(213,"code"),Ux(214,"getLiterals"),ng(),Ux(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),ng(),wl(216,"p")(217,"strong"),Ux(218,"Exemplo de chamada com contexto expl\xEDcito:"),ng()(),wl(219,"pre")(220,"code",15),Ux(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),ng()(),wl(222,"p")(223,"strong"),Ux(224,"Cen\xE1rio de Contextos Iguais:"),ng(),Ux(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),ng(),wl(226,"p")(227,"strong"),Ux(228,"Recomenda\xE7\xF5es:"),ng()(),wl(229,"ul")(230,"li"),Ux(231,"Sempre informar o contexto ao chamar "),wl(232,"code"),Ux(233,"getLiterals"),ng(),Ux(234," para evitar conflitos de literais."),ng(),wl(235,"li"),Ux(236,"Caso a aplica\xE7\xE3o utilize "),wl(237,"code"),Ux(238,"lazy loading"),ng(),Ux(239,", utilizar "),wl(240,"code"),Ux(241,"setLanguage()"),ng(),Ux(242," para garantir a correta configura\xE7\xE3o de idioma."),ng()(),wl(243,"p"),Ux(244,"Exemplos de requisi\xE7\xE3o:"),ng(),wl(245,"pre")(246,"code"),Ux(247,`literals = {};
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
`),ng()(),wl(248,"p"),Ux(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),ng(),wl(250,"pre"),Xy(),Ux(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Ky(),ng(),wl(252,"p"),Ux(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),wl(254,"em"),Ux(255,"pipe"),ng(),wl(256,"code"),Ux(257,"poI18n"),ng(),Ux(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),wl(259,"code"),Ux(260,"name"),ng(),Ux(261," e "),wl(262,"code"),Ux(263,"nickname"),ng(),Ux(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),ng(),wl(265,"pre"),Xy(),Ux(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Ky(),ng(),wl(267,"blockquote")(268,"p"),Ux(269,"\xC9 importante o uso do operador "),wl(270,"code"),Ux(271,"?"),ng(),Ux(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),ng()(),wl(273,"h3"),Ux(274,"Teste unit\xE1rio"),ng(),wl(275,"p"),Ux(276,"Abaixo segue um exemplo de "),wl(277,"em"),Ux(278,"setup"),ng(),Ux(279," inicial de teste unit\xE1rio do "),wl(280,"em"),Ux(281,"AppComponent"),ng(),Ux(282," que utiliza o "),wl(283,"code"),Ux(284,"PoI18nService"),ng(),Ux(285,":"),ng(),wl(286,"blockquote")(287,"p"),Ux(288,"Aten\xE7\xE3o: n\xE3o declarar o "),wl(289,"code"),Ux(290,"PoI18nService"),ng(),Ux(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),ng()(),wl(292,"pre")(293,"code"),Ux(294,`import { async, TestBed } from '@angular/core/testing';
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
`),ng()()(),wl(295,"h3",16),Ux(296,"M\xE9todos"),ng(),wl(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),Ux(303," getLanguage "),ng()()()()(),wl(304,"tr",22)(305,"td",22)(306,"p"),Ul(307,"a",23),Ux(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),ng(),wl(309,"p"),Ux(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),ng(),wl(311,"p"),Ux(312," 1 - o idioma que foi armazenado no "),wl(313,"em"),Ux(314,"localStorage"),ng(),Ux(315,", atrav\xE9s do m\xE9todo "),wl(316,"a",9)(317,"code"),Ux(318,"setLanguage()"),ng()(),Ux(319,"."),ng(),wl(320,"p"),Ux(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),wl(322,"code"),Ux(323,"config"),ng(),Ux(324,`, sendo o idioma inserido na propriedade
`),wl(325,"code"),Ux(326,"language"),ng(),Ux(327," da interface "),wl(328,"a",24)(329,"code"),Ux(330,"PoI18nConfigDefault"),ng()(),Ux(331,"."),ng(),wl(332,"p"),Ux(333," 3 - o idioma do navegador utilizado."),ng(),wl(334,"blockquote")(335,"p"),Ux(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),wl(337,"code"),Ux(338,"pt"),ng(),Ux(339,", "),wl(340,"code"),Ux(341,"en"),ng(),Ux(342,", "),wl(343,"code"),Ux(344,"es"),ng(),Ux(345," ou "),wl(346,"code"),Ux(347,"ru"),ng(),Ux(348,"), ser\xE1 retornado valor "),wl(349,"code"),Ux(350,"pt"),ng(),Ux(351,"."),ng()()()()(),wl(352,"h5")(353,"b"),Ux(354,"Retorno"),ng()(),wl(355,"table",25)(356,"tr",26)(357,"th",27),Ux(358,"Tipo"),ng(),wl(359,"th",27),Ux(360,"Descri\xE7\xE3o"),ng()(),wl(361,"tr",18)(362,"td",28)(363,"code",29),Ux(364,"string"),ng()(),wl(365,"td",22)(366,"p"),Ux(367,"sigla do idioma padr\xE3o."),ng()()()(),Ul(368,"br"),wl(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),Ux(375," getShortLanguage "),ng()()()()(),wl(376,"tr",22)(377,"td",22)(378,"p"),Ux(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),ng(),wl(380,"p"),Ux(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),wl(382,"a",30)(383,"strong"),Ux(384,"getLanguage()"),ng()(),Ux(385,"."),ng()()()(),wl(386,"h5")(387,"b"),Ux(388,"Retorno"),ng()(),wl(389,"table",25)(390,"tr",26)(391,"th",27),Ux(392,"Tipo"),ng(),wl(393,"th",27),Ux(394,"Descri\xE7\xE3o"),ng()(),wl(395,"tr",18)(396,"td",28)(397,"code",29),Ux(398,"string"),ng()(),wl(399,"td",22)(400,"p"),Ux(401,"sigla do idioma padr\xE3o."),ng()()()(),Ul(402,"br"),wl(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),Ux(409," setLanguage "),ng()()()()(),wl(410,"tr",22)(411,"td",22)(412,"p"),Ul(413,"a",31),Ux(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),ng(),wl(415,"p"),Ux(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),wl(417,"code"),Ux(418,"i18n"),ng(),Ux(419," para buscar as literais no idioma padr\xE3o."),ng()()()(),wl(420,"h5")(421,"b"),Ux(422,"Par\xE2metros"),ng()(),wl(423,"table",25)(424,"tr",26)(425,"th",27),Ux(426,"Nome"),ng(),wl(427,"th",27),Ux(428,"Tipo"),ng(),wl(429,"th",27),Ux(430,"Descri\xE7\xE3o"),ng()(),wl(431,"tr",18)(432,"td",32),Ux(433," language"),ng(),wl(434,"td",28)(435,"code",29),Ux(436," string "),ng()(),wl(437,"td",22)(438,"p"),Ux(439,"Sigla do idioma."),ng(),wl(440,"p"),Ux(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),wl(442,"code"),Ux(443,"pt"),ng(),Ux(444,", "),wl(445,"code"),Ux(446,"pt-BR"),ng(),Ux(447,", "),wl(448,"code"),Ux(449,"pt-br"),ng(),Ux(450,", "),wl(451,"code"),Ux(452,"en"),ng(),Ux(453," ou "),wl(454,"code"),Ux(455,"en-US"),ng(),Ux(456,"."),ng(),wl(457,"blockquote")(458,"p"),Ux(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),ng()()()(),wl(460,"tr",18)(461,"td",32),Ux(462," reload"),ng(),wl(463,"td",28)(464,"code",29),Ux(465," boolean "),ng()(),wl(466,"td",22)(467,"p"),Ux(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),ng(),wl(469,"p"),Ux(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),wl(471,"code"),Ux(472,"getLiterals()"),ng(),Ux(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),ng()()()(),Ul(474,"br"),wl(475,"h3"),Ux(476,"Interfaces"),ng(),wl(477,"h4",33)(478,"code",12),Ux(479,"PoI18nConfigContext"),ng()(),wl(480,"div",2)(481,"p"),Ul(482,"a",34),ng(),wl(483,"p"),Ux(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),wl(485,"code"),Ux(486,"PoI18nModule"),ng(),Ux(487,"."),ng()(),wl(488,"h4",33)(489,"code",12),Ux(490,"PoI18nConfigDefault"),ng()(),wl(491,"div",2)(492,"p"),Ul(493,"a",35),ng(),wl(494,"p"),Ux(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),ng()(),wl(496,"h4",16),Ux(497,"Propriedades"),ng(),wl(498,"table",25)(499,"tr",26)(500,"th",27),Ux(501,"Nome"),ng(),wl(502,"th",27),Ux(503,"Tipo"),ng(),wl(504,"th",27),Ux(505,"Descri\xE7\xE3o"),ng()(),wl(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),Ux(510," cache"),Ul(511,"br"),ng()()(),wl(512,"td",28)(513,"code",36),Ux(514,"boolean"),ng()(),wl(515,"td",22)(516,"em")(517,"strong"),Ux(518,"(opcional)"),ng()(),wl(519,"p"),Ux(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),ng(),wl(521,"p"),Ux(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),ng(),wl(523,"p"),Ux(524,"Por padr\xE3o n\xE3o utiliza."),ng()()(),wl(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),Ux(529," context"),Ul(530,"br"),ng()()(),wl(531,"td",28)(532,"code",37),Ux(533,"string"),ng()(),wl(534,"td",22)(535,"em")(536,"strong"),Ux(537,"(opcional)"),ng()(),wl(538,"p"),Ux(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),ng(),wl(540,"blockquote")(541,"p"),Ux(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),ng()()()(),wl(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),Ux(547," language"),Ul(548,"br"),ng()()(),wl(549,"td",28)(550,"code",37),Ux(551,"string"),ng()(),wl(552,"td",22)(553,"em")(554,"strong"),Ux(555,"(opcional)"),ng()(),wl(556,"p"),Ux(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),ng(),wl(558,"p"),Ux(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),wl(560,"a",9)(561,"code"),Ux(562,"setLanguage()"),ng()(),Ux(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),ng()()()(),wl(564,"h4",33)(565,"code",12),Ux(566,"PoI18nConfig"),ng()(),wl(567,"div",2)(568,"p"),Ul(569,"a",38),ng(),wl(570,"p"),Ux(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),wl(572,"code"),Ux(573,"PoI18nModule"),ng(),Ux(574,"."),ng()(),wl(575,"h4",16),Ux(576,"Propriedades"),ng(),wl(577,"table",25)(578,"tr",26)(579,"th",27),Ux(580,"Nome"),ng(),wl(581,"th",27),Ux(582,"Tipo"),ng(),wl(583,"th",27),Ux(584,"Descri\xE7\xE3o"),ng()(),wl(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),Ux(589," contexts"),Ul(590,"br"),ng()()(),wl(591,"td",28)(592,"code",39),Ux(593,"PoI18nConfigContext"),ng()(),wl(594,"td",22)(595,"p"),Ux(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),wl(597,"code"),Ux(598,"url"),ng(),Ux(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),ng(),wl(600,"p"),Ux(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),ng(),wl(602,"pre")(603,"code"),Ux(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),ng()(),wl(605,"p"),Ux(606,"E como informado, podemos utilizar a propriedade "),wl(607,"code"),Ux(608,"url"),ng(),Ux(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),ng(),wl(610,"pre")(611,"code"),Ux(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),ng()(),wl(613,"p"),Ux(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),ng(),wl(615,"pre")(616,"code"),Ux(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),ng()(),wl(618,"p"),Ux(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),ng(),wl(620,"ul")(621,"li")(622,"code"),Ux(623,"language"),ng(),Ux(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),wl(625,"code"),Ux(626,"pt-br"),ng(),Ux(627,", "),wl(628,"code"),Ux(629,"en-us"),ng(),Ux(630,");"),ng(),wl(631,"li")(632,"code"),Ux(633,"literals"),ng(),Ux(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),ng()(),wl(635,"p"),Ux(636,"Exemplos de requisi\xE7\xE3o:"),ng(),wl(637,"pre")(638,"code"),Ux(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),ng()(),wl(640,"blockquote")(641,"p"),Ux(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),wl(643,"code"),Ux(644,"pt-br"),ng(),Ux(645,"."),ng()(),wl(646,"p"),Ux(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),wl(648,"em"),Ux(649,"backup"),ng(),Ux(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),ng(),wl(651,"pre")(652,"code"),Ux(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),ng()(),wl(654,"blockquote")(655,"p"),Ux(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),ng()()()(),wl(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),Ux(661," default"),Ul(662,"br"),ng()()(),wl(663,"td",28)(664,"code",40),Ux(665,"PoI18nConfigDefault"),ng()(),wl(666,"td",22)(667,"em")(668,"strong"),Ux(669,"(opcional)"),ng()(),wl(670,"p"),Ux(671,"Configura\xE7\xF5es padr\xF5es."),ng()()()(),wl(672,"h4",33)(673,"code",12),Ux(674,"PoI18nLiterals"),ng()(),wl(675,"div",2)(676,"p"),Ux(677,"Interface para o m\xE9todo "),wl(678,"code"),Ux(679,"getLiterals()"),ng(),Ux(680," do servi\xE7o PoI18nService."),ng()(),wl(681,"h4",16),Ux(682,"Propriedades"),ng(),wl(683,"table",25)(684,"tr",26)(685,"th",27),Ux(686,"Nome"),ng(),wl(687,"th",27),Ux(688,"Tipo"),ng(),wl(689,"th",27),Ux(690,"Descri\xE7\xE3o"),ng()(),wl(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),Ux(695," context"),Ul(696,"br"),ng()()(),wl(697,"td",28)(698,"code",37),Ux(699,"string"),ng()(),wl(700,"td",22)(701,"em")(702,"strong"),Ux(703,"(opcional)"),ng()(),wl(704,"p"),Ux(705,"Contexto utilizado na busca das literais."),ng()()(),wl(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),Ux(710," language"),Ul(711,"br"),ng()()(),wl(712,"td",28)(713,"code",37),Ux(714,"string"),ng()(),wl(715,"td",22)(716,"em")(717,"strong"),Ux(718,"(opcional)"),ng()(),wl(719,"p"),Ux(720,"Idioma a ser buscado."),ng()()(),wl(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),Ux(725," literals"),Ul(726,"br"),ng()()(),wl(727,"td",28)(728,"code",41),Ux(729,"Array<string>"),ng()(),wl(730,"td",22)(731,"em")(732,"strong"),Ux(733,"(opcional)"),ng()(),wl(734,"p"),Ux(735,"Lista das literais."),ng()()()(),wl(736,"h4",33)(737,"code",12),Ux(738,"PoLanguage"),ng()(),wl(739,"div",2)(740,"p"),Ul(741,"a",42),ng(),wl(742,"p"),Ux(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),ng()(),wl(744,"h4",16),Ux(745,"Propriedades"),ng(),wl(746,"table",25)(747,"tr",26)(748,"th",27),Ux(749,"Nome"),ng(),wl(750,"th",27),Ux(751,"Tipo"),ng(),wl(752,"th",27),Ux(753,"Descri\xE7\xE3o"),ng()(),wl(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),Ux(758," description"),Ul(759,"br"),ng()()(),wl(760,"td",28)(761,"code",37),Ux(762,"string"),ng()(),wl(763,"td",22)(764,"em")(765,"strong"),Ux(766,"(opcional)"),ng()(),wl(767,"p"),Ux(768,"Descri\xE7\xE3o do idioma"),ng()()(),wl(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),Ux(773," language"),Ul(774,"br"),ng()()(),wl(775,"td",28)(776,"code",37),Ux(777,"string"),ng()(),wl(778,"td",22)(779,"em")(780,"strong"),Ux(781,"(opcional)"),ng()(),wl(782,"p"),Ux(783,"C\xF3digo do idioma "),wl(784,"a",43),Ux(785,"ISO 639-1"),ng()(),wl(786,"blockquote")(787,"p"),Ux(788,"Exemplo: 'pt','en'"),ng()()()()(),wl(789,"h4",33)(790,"code",12),Ux(791,"PoNumberSeparator"),ng()(),wl(792,"div",2)(793,"p"),Ul(794,"a",44),ng(),wl(795,"p"),Ux(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),ng()(),wl(797,"h4",16),Ux(798,"Propriedades"),ng(),wl(799,"table",25)(800,"tr",26)(801,"th",27),Ux(802,"Nome"),ng(),wl(803,"th",27),Ux(804,"Tipo"),ng(),wl(805,"th",27),Ux(806,"Descri\xE7\xE3o"),ng()(),wl(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),Ux(811," language"),Ul(812,"br"),ng()()(),wl(813,"td",28)(814,"code",37),Ux(815,"string"),ng()(),wl(816,"td",22)(817,"em")(818,"strong"),Ux(819,"(opcional)"),ng()(),wl(820,"p"),Ux(821,"C\xF3digo do idioma "),wl(822,"a",43),Ux(823,"ISO 639-1"),ng()(),wl(824,"blockquote")(825,"p"),Ux(826,"Exemplo: 'pt','en'"),ng()()()(),wl(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),Ux(831," separator"),Ul(832,"br"),ng()()(),wl(833,"td",28)(834,"code",37),Ux(835,"string"),ng()(),wl(836,"td",22)(837,"em")(838,"strong"),Ux(839,"(opcional)"),ng()(),wl(840,"p"),Ux(841,"Separador num\xE9rico"),ng()()()(),wl(842,"h4",33)(843,"code",12),Ux(844,"PoDateSeparator"),ng()(),wl(845,"div",2)(846,"p"),Ul(847,"a",45),ng(),wl(848,"p"),Ux(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),ng()(),wl(850,"h4",16),Ux(851,"Propriedades"),ng(),wl(852,"table",25)(853,"tr",26)(854,"th",27),Ux(855,"Nome"),ng(),wl(856,"th",27),Ux(857,"Tipo"),ng(),wl(858,"th",27),Ux(859,"Descri\xE7\xE3o"),ng()(),wl(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),Ux(864," locale"),Ul(865,"br"),ng()()(),wl(866,"td",28)(867,"code",37),Ux(868,"string"),ng()(),wl(869,"td",22)(870,"em")(871,"strong"),Ux(872,"(opcional)"),ng()(),wl(873,"p"),Ux(874,"C\xF3digo do locale "),wl(875,"a",43),Ux(876,"ISO 639-1"),ng()(),wl(877,"blockquote")(878,"p"),Ux(879,"Exemplo: 'pt','en'"),ng()()()(),wl(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),Ux(884," separator"),Ul(885,"br"),ng()()(),wl(886,"td",28)(887,"code",37),Ux(888,"string"),ng()(),wl(889,"td",22)(890,"em")(891,"strong"),Ux(892,"(opcional)"),ng()(),wl(893,"p"),Ux(894,"Separador de data"),ng(),wl(895,"blockquote")(896,"p"),Ux(897,"Exemplo: '/','.','-'"),ng()()()()()());},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-i18n-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),ng()()()),a&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(T),vL]})}return o})();var G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,z]})}return o})();export{G as DocPoI18nModule};