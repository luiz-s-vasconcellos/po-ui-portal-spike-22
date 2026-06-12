import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,Q as Cl,z as qx,T as og,R as Hl,a9 as Qy,aa as Xy,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoI18nModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do servi\xE7o "),Cl(7,"code"),qx(8,"PoI18nService"),og(),qx(9," para controle de idiomas com PO."),og(),Cl(10,"p"),qx(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),Cl(12,"code"),qx(13,"PoI18nService"),og(),qx(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Cl(15,"code"),qx(16,"PoModule"),og(),qx(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),Cl(18,"code"),qx(19,"config"),og(),qx(20,`, informando um objeto que deve implementar
a interface `),Cl(21,"a",3)(22,"code"),qx(23,"PoI18nConfig"),og()(),qx(24," para configura\xE7\xE3o."),og(),Cl(25,"p"),Hl(26,"a",4),Cl(27,"strong"),qx(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),og()(),Cl(29,"pre")(30,"code"),qx(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),og()(),Cl(32,"p"),qx(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),og(),Cl(34,"p"),qx(35,"Arquivo general-pt.ts"),og(),Cl(36,"pre")(37,"code"),qx(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),og()(),Cl(39,"p"),qx(40,"Arquivo general-en.ts"),og(),Cl(41,"pre")(42,"code"),qx(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),og()(),Cl(44,"p")(45,"strong"),qx(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),og()(),Cl(47,"pre")(48,"code"),qx(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),og()(),Cl(50,"p")(51,"strong"),qx(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),og()(),Cl(53,"p"),qx(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),og(),Cl(55,"ul")(56,"li")(57,"a",5),qx(58,"http://10.0.0.1:3000/api/translations/crm"),og()(),Cl(59,"li")(60,"a",6),qx(61,"http://10.0.0.1:3000/api/translations/general"),og()()(),Cl(62,"p"),qx(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Cl(64,"ul")(65,"li")(66,"strong"),qx(67,"language"),og(),qx(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Cl(69,"code"),qx(70,"pt-br"),og(),qx(71,", "),Cl(72,"code"),qx(73,"en-us"),og(),qx(74,", "),Cl(75,"code"),qx(76,"es-es"),og(),qx(77," ou "),Cl(78,"code"),qx(79,"ru"),og(),qx(80,")."),og(),Cl(81,"li")(82,"strong"),qx(83,"literals"),og(),qx(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Cl(85,"p"),qx(86,"Exemplos de requisi\xE7\xE3o:"),og(),Cl(87,"ul")(88,"li")(89,"a",7),qx(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),og()(),Cl(91,"li")(92,"a",8),qx(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),og()()(),Cl(94,"blockquote")(95,"p"),qx(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Cl(97,"code"),qx(98,"pt-br"),og(),qx(99,"."),og()(),Cl(100,"p"),qx(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),Cl(102,"em"),qx(103,"default"),og(),qx(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Cl(105,"a",3)(106,"code"),qx(107,"PoI18nConfig"),og()(),qx(108,":"),og(),Cl(109,"p")(110,"strong"),qx(111,"Exemplo de padr\xF5es definidos:"),og()(),Cl(112,"pre")(113,"code"),qx(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),og()(),Cl(115,"p")(116,"strong"),qx(117,"Importante:"),og()(),Cl(118,"p"),qx(119,"Recomenda-se que as defini\xE7\xF5es "),Cl(120,"em"),qx(121,"default"),og(),qx(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Cl(123,"code"),qx(124,"AppModule"),og(),qx(125,"."),og(),Cl(126,"p")(127,"strong"),qx(128,"i18n com "),Cl(129,"em"),qx(130,"Lazy loading"),og()()(),Cl(131,"p"),qx(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),Cl(133,"em"),qx(134,"lazy loading"),og(),qx(135,`, caso seja
definida outra configura\xE7\xE3o do `),Cl(136,"code"),qx(137,"PoI18nModule"),og(),qx(138,", deve-se atentar os seguintes detalhes:"),og(),Cl(139,"ul")(140,"li"),qx(141,"N\xE3o defina outra "),Cl(142,"em"),qx(143,"default language"),og(),qx(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),og(),Cl(145,"li"),qx(146,"Caso precise de m\xF3dulos carregados via "),Cl(147,"em"),qx(148,"lazy loading"),og(),qx(149,` com linguagens diferentes, utilize o
m\xE9todo `),Cl(150,"a",9)(151,"code"),qx(152,"setLanguage()"),og()(),qx(153," disponibilizado pelo "),Cl(154,"code"),qx(155,"PoI18nService"),og(),qx(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),og()()(),Cl(157,"h3",10),qx(158,"Services"),og(),Cl(159,"h4",11)(160,"code",12),qx(161,"PoI18nService"),og()(),Cl(162,"div",2)(163,"p"),qx(164,"O servi\xE7o "),Cl(165,"code"),qx(166,"PoI18nService"),og(),qx(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),og(),Cl(168,"blockquote")(169,"p"),qx(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Cl(171,"a",13),qx(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),Cl(173,"code"),qx(174,"PoI18nModule"),og()(),qx(175,"."),og()(),Cl(176,"p")(177,"strong"),qx(178,"Utiliza\xE7\xE3o do servi\xE7o "),Cl(179,"code"),qx(180,"PoI18nService"),og(),qx(181,":"),og()(),Cl(182,"p"),qx(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),og(),Cl(184,"pre")(185,"code"),qx(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),og()(),Cl(187,"p"),qx(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),Cl(189,"a",14),qx(190,"Observable"),og(),qx(191,` pelo
m\xE9todo `),Cl(192,"code"),qx(193,"getLiterals()"),og(),qx(194,"."),og(),Cl(195,"blockquote")(196,"p"),qx(197,"O m\xE9todo "),Cl(198,"code"),qx(199,"getLiterals()"),og(),qx(200," pode receber um objeto do tipo da interface "),Cl(201,"code"),qx(202,"PoI18nLiterals"),og(),qx(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),og()(),Cl(204,"ul")(205,"li")(206,"h2"),qx(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),og()()(),Cl(208,"p"),qx(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Cl(210,"code"),qx(211,"getLiterals"),og(),qx(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Cl(213,"code"),qx(214,"getLiterals"),og(),qx(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),og(),Cl(216,"p")(217,"strong"),qx(218,"Exemplo de chamada com contexto expl\xEDcito:"),og()(),Cl(219,"pre")(220,"code",15),qx(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),og()(),Cl(222,"p")(223,"strong"),qx(224,"Cen\xE1rio de Contextos Iguais:"),og(),qx(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),og(),Cl(226,"p")(227,"strong"),qx(228,"Recomenda\xE7\xF5es:"),og()(),Cl(229,"ul")(230,"li"),qx(231,"Sempre informar o contexto ao chamar "),Cl(232,"code"),qx(233,"getLiterals"),og(),qx(234," para evitar conflitos de literais."),og(),Cl(235,"li"),qx(236,"Caso a aplica\xE7\xE3o utilize "),Cl(237,"code"),qx(238,"lazy loading"),og(),qx(239,", utilizar "),Cl(240,"code"),qx(241,"setLanguage()"),og(),qx(242," para garantir a correta configura\xE7\xE3o de idioma."),og()(),Cl(243,"p"),qx(244,"Exemplos de requisi\xE7\xE3o:"),og(),Cl(245,"pre")(246,"code"),qx(247,`literals = {};
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
`),og()(),Cl(248,"p"),qx(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),og(),Cl(250,"pre"),Qy(),qx(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Xy(),og(),Cl(252,"p"),qx(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),Cl(254,"em"),qx(255,"pipe"),og(),Cl(256,"code"),qx(257,"poI18n"),og(),qx(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Cl(259,"code"),qx(260,"name"),og(),qx(261," e "),Cl(262,"code"),qx(263,"nickname"),og(),qx(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),og(),Cl(265,"pre"),Qy(),qx(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Xy(),og(),Cl(267,"blockquote")(268,"p"),qx(269,"\xC9 importante o uso do operador "),Cl(270,"code"),qx(271,"?"),og(),qx(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),og()(),Cl(273,"h3"),qx(274,"Teste unit\xE1rio"),og(),Cl(275,"p"),qx(276,"Abaixo segue um exemplo de "),Cl(277,"em"),qx(278,"setup"),og(),qx(279," inicial de teste unit\xE1rio do "),Cl(280,"em"),qx(281,"AppComponent"),og(),qx(282," que utiliza o "),Cl(283,"code"),qx(284,"PoI18nService"),og(),qx(285,":"),og(),Cl(286,"blockquote")(287,"p"),qx(288,"Aten\xE7\xE3o: n\xE3o declarar o "),Cl(289,"code"),qx(290,"PoI18nService"),og(),qx(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),og()(),Cl(292,"pre")(293,"code"),qx(294,`import { async, TestBed } from '@angular/core/testing';
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
`),og()()(),Cl(295,"h3",16),qx(296,"M\xE9todos"),og(),Cl(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),qx(303," getLanguage "),og()()()()(),Cl(304,"tr",22)(305,"td",22)(306,"p"),Hl(307,"a",23),qx(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),og(),Cl(309,"p"),qx(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),og(),Cl(311,"p"),qx(312," 1 - o idioma que foi armazenado no "),Cl(313,"em"),qx(314,"localStorage"),og(),qx(315,", atrav\xE9s do m\xE9todo "),Cl(316,"a",9)(317,"code"),qx(318,"setLanguage()"),og()(),qx(319,"."),og(),Cl(320,"p"),qx(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),Cl(322,"code"),qx(323,"config"),og(),qx(324,`, sendo o idioma inserido na propriedade
`),Cl(325,"code"),qx(326,"language"),og(),qx(327," da interface "),Cl(328,"a",24)(329,"code"),qx(330,"PoI18nConfigDefault"),og()(),qx(331,"."),og(),Cl(332,"p"),qx(333," 3 - o idioma do navegador utilizado."),og(),Cl(334,"blockquote")(335,"p"),qx(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),Cl(337,"code"),qx(338,"pt"),og(),qx(339,", "),Cl(340,"code"),qx(341,"en"),og(),qx(342,", "),Cl(343,"code"),qx(344,"es"),og(),qx(345," ou "),Cl(346,"code"),qx(347,"ru"),og(),qx(348,"), ser\xE1 retornado valor "),Cl(349,"code"),qx(350,"pt"),og(),qx(351,"."),og()()()()(),Cl(352,"h5")(353,"b"),qx(354,"Retorno"),og()(),Cl(355,"table",25)(356,"tr",26)(357,"th",27),qx(358,"Tipo"),og(),Cl(359,"th",27),qx(360,"Descri\xE7\xE3o"),og()(),Cl(361,"tr",18)(362,"td",28)(363,"code",29),qx(364,"string"),og()(),Cl(365,"td",22)(366,"p"),qx(367,"sigla do idioma padr\xE3o."),og()()()(),Hl(368,"br"),Cl(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),qx(375," getShortLanguage "),og()()()()(),Cl(376,"tr",22)(377,"td",22)(378,"p"),qx(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),og(),Cl(380,"p"),qx(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),Cl(382,"a",30)(383,"strong"),qx(384,"getLanguage()"),og()(),qx(385,"."),og()()()(),Cl(386,"h5")(387,"b"),qx(388,"Retorno"),og()(),Cl(389,"table",25)(390,"tr",26)(391,"th",27),qx(392,"Tipo"),og(),Cl(393,"th",27),qx(394,"Descri\xE7\xE3o"),og()(),Cl(395,"tr",18)(396,"td",28)(397,"code",29),qx(398,"string"),og()(),Cl(399,"td",22)(400,"p"),qx(401,"sigla do idioma padr\xE3o."),og()()()(),Hl(402,"br"),Cl(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),qx(409," setLanguage "),og()()()()(),Cl(410,"tr",22)(411,"td",22)(412,"p"),Hl(413,"a",31),qx(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),og(),Cl(415,"p"),qx(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Cl(417,"code"),qx(418,"i18n"),og(),qx(419," para buscar as literais no idioma padr\xE3o."),og()()()(),Cl(420,"h5")(421,"b"),qx(422,"Par\xE2metros"),og()(),Cl(423,"table",25)(424,"tr",26)(425,"th",27),qx(426,"Nome"),og(),Cl(427,"th",27),qx(428,"Tipo"),og(),Cl(429,"th",27),qx(430,"Descri\xE7\xE3o"),og()(),Cl(431,"tr",18)(432,"td",32),qx(433," language"),og(),Cl(434,"td",28)(435,"code",29),qx(436," string "),og()(),Cl(437,"td",22)(438,"p"),qx(439,"Sigla do idioma."),og(),Cl(440,"p"),qx(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Cl(442,"code"),qx(443,"pt"),og(),qx(444,", "),Cl(445,"code"),qx(446,"pt-BR"),og(),qx(447,", "),Cl(448,"code"),qx(449,"pt-br"),og(),qx(450,", "),Cl(451,"code"),qx(452,"en"),og(),qx(453," ou "),Cl(454,"code"),qx(455,"en-US"),og(),qx(456,"."),og(),Cl(457,"blockquote")(458,"p"),qx(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),og()()()(),Cl(460,"tr",18)(461,"td",32),qx(462," reload"),og(),Cl(463,"td",28)(464,"code",29),qx(465," boolean "),og()(),Cl(466,"td",22)(467,"p"),qx(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),og(),Cl(469,"p"),qx(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),Cl(471,"code"),qx(472,"getLiterals()"),og(),qx(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),og()()()(),Hl(474,"br"),Cl(475,"h3"),qx(476,"Interfaces"),og(),Cl(477,"h4",33)(478,"code",12),qx(479,"PoI18nConfigContext"),og()(),Cl(480,"div",2)(481,"p"),Hl(482,"a",34),og(),Cl(483,"p"),qx(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),Cl(485,"code"),qx(486,"PoI18nModule"),og(),qx(487,"."),og()(),Cl(488,"h4",33)(489,"code",12),qx(490,"PoI18nConfigDefault"),og()(),Cl(491,"div",2)(492,"p"),Hl(493,"a",35),og(),Cl(494,"p"),qx(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),og()(),Cl(496,"h4",16),qx(497,"Propriedades"),og(),Cl(498,"table",25)(499,"tr",26)(500,"th",27),qx(501,"Nome"),og(),Cl(502,"th",27),qx(503,"Tipo"),og(),Cl(504,"th",27),qx(505,"Descri\xE7\xE3o"),og()(),Cl(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),qx(510," cache"),Hl(511,"br"),og()()(),Cl(512,"td",28)(513,"code",36),qx(514,"boolean"),og()(),Cl(515,"td",22)(516,"em")(517,"strong"),qx(518,"(opcional)"),og()(),Cl(519,"p"),qx(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),og(),Cl(521,"p"),qx(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),og(),Cl(523,"p"),qx(524,"Por padr\xE3o n\xE3o utiliza."),og()()(),Cl(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),qx(529," context"),Hl(530,"br"),og()()(),Cl(531,"td",28)(532,"code",37),qx(533,"string"),og()(),Cl(534,"td",22)(535,"em")(536,"strong"),qx(537,"(opcional)"),og()(),Cl(538,"p"),qx(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Cl(540,"blockquote")(541,"p"),qx(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),og()()()(),Cl(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),qx(547," language"),Hl(548,"br"),og()()(),Cl(549,"td",28)(550,"code",37),qx(551,"string"),og()(),Cl(552,"td",22)(553,"em")(554,"strong"),qx(555,"(opcional)"),og()(),Cl(556,"p"),qx(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Cl(558,"p"),qx(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Cl(560,"a",9)(561,"code"),qx(562,"setLanguage()"),og()(),qx(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),og()()()(),Cl(564,"h4",33)(565,"code",12),qx(566,"PoI18nConfig"),og()(),Cl(567,"div",2)(568,"p"),Hl(569,"a",38),og(),Cl(570,"p"),qx(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),Cl(572,"code"),qx(573,"PoI18nModule"),og(),qx(574,"."),og()(),Cl(575,"h4",16),qx(576,"Propriedades"),og(),Cl(577,"table",25)(578,"tr",26)(579,"th",27),qx(580,"Nome"),og(),Cl(581,"th",27),qx(582,"Tipo"),og(),Cl(583,"th",27),qx(584,"Descri\xE7\xE3o"),og()(),Cl(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),qx(589," contexts"),Hl(590,"br"),og()()(),Cl(591,"td",28)(592,"code",39),qx(593,"PoI18nConfigContext"),og()(),Cl(594,"td",22)(595,"p"),qx(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Cl(597,"code"),qx(598,"url"),og(),qx(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),og(),Cl(600,"p"),qx(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),og(),Cl(602,"pre")(603,"code"),qx(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),og()(),Cl(605,"p"),qx(606,"E como informado, podemos utilizar a propriedade "),Cl(607,"code"),qx(608,"url"),og(),qx(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),og(),Cl(610,"pre")(611,"code"),qx(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),og()(),Cl(613,"p"),qx(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),og(),Cl(615,"pre")(616,"code"),qx(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),og()(),Cl(618,"p"),qx(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Cl(620,"ul")(621,"li")(622,"code"),qx(623,"language"),og(),qx(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Cl(625,"code"),qx(626,"pt-br"),og(),qx(627,", "),Cl(628,"code"),qx(629,"en-us"),og(),qx(630,");"),og(),Cl(631,"li")(632,"code"),qx(633,"literals"),og(),qx(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Cl(635,"p"),qx(636,"Exemplos de requisi\xE7\xE3o:"),og(),Cl(637,"pre")(638,"code"),qx(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),og()(),Cl(640,"blockquote")(641,"p"),qx(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Cl(643,"code"),qx(644,"pt-br"),og(),qx(645,"."),og()(),Cl(646,"p"),qx(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Cl(648,"em"),qx(649,"backup"),og(),qx(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),og(),Cl(651,"pre")(652,"code"),qx(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),og()(),Cl(654,"blockquote")(655,"p"),qx(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),og()()()(),Cl(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),qx(661," default"),Hl(662,"br"),og()()(),Cl(663,"td",28)(664,"code",40),qx(665,"PoI18nConfigDefault"),og()(),Cl(666,"td",22)(667,"em")(668,"strong"),qx(669,"(opcional)"),og()(),Cl(670,"p"),qx(671,"Configura\xE7\xF5es padr\xF5es."),og()()()(),Cl(672,"h4",33)(673,"code",12),qx(674,"PoI18nLiterals"),og()(),Cl(675,"div",2)(676,"p"),qx(677,"Interface para o m\xE9todo "),Cl(678,"code"),qx(679,"getLiterals()"),og(),qx(680," do servi\xE7o PoI18nService."),og()(),Cl(681,"h4",16),qx(682,"Propriedades"),og(),Cl(683,"table",25)(684,"tr",26)(685,"th",27),qx(686,"Nome"),og(),Cl(687,"th",27),qx(688,"Tipo"),og(),Cl(689,"th",27),qx(690,"Descri\xE7\xE3o"),og()(),Cl(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),qx(695," context"),Hl(696,"br"),og()()(),Cl(697,"td",28)(698,"code",37),qx(699,"string"),og()(),Cl(700,"td",22)(701,"em")(702,"strong"),qx(703,"(opcional)"),og()(),Cl(704,"p"),qx(705,"Contexto utilizado na busca das literais."),og()()(),Cl(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),qx(710," language"),Hl(711,"br"),og()()(),Cl(712,"td",28)(713,"code",37),qx(714,"string"),og()(),Cl(715,"td",22)(716,"em")(717,"strong"),qx(718,"(opcional)"),og()(),Cl(719,"p"),qx(720,"Idioma a ser buscado."),og()()(),Cl(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),qx(725," literals"),Hl(726,"br"),og()()(),Cl(727,"td",28)(728,"code",41),qx(729,"Array<string>"),og()(),Cl(730,"td",22)(731,"em")(732,"strong"),qx(733,"(opcional)"),og()(),Cl(734,"p"),qx(735,"Lista das literais."),og()()()(),Cl(736,"h4",33)(737,"code",12),qx(738,"PoLanguage"),og()(),Cl(739,"div",2)(740,"p"),Hl(741,"a",42),og(),Cl(742,"p"),qx(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),og()(),Cl(744,"h4",16),qx(745,"Propriedades"),og(),Cl(746,"table",25)(747,"tr",26)(748,"th",27),qx(749,"Nome"),og(),Cl(750,"th",27),qx(751,"Tipo"),og(),Cl(752,"th",27),qx(753,"Descri\xE7\xE3o"),og()(),Cl(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),qx(758," description"),Hl(759,"br"),og()()(),Cl(760,"td",28)(761,"code",37),qx(762,"string"),og()(),Cl(763,"td",22)(764,"em")(765,"strong"),qx(766,"(opcional)"),og()(),Cl(767,"p"),qx(768,"Descri\xE7\xE3o do idioma"),og()()(),Cl(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),qx(773," language"),Hl(774,"br"),og()()(),Cl(775,"td",28)(776,"code",37),qx(777,"string"),og()(),Cl(778,"td",22)(779,"em")(780,"strong"),qx(781,"(opcional)"),og()(),Cl(782,"p"),qx(783,"C\xF3digo do idioma "),Cl(784,"a",43),qx(785,"ISO 639-1"),og()(),Cl(786,"blockquote")(787,"p"),qx(788,"Exemplo: 'pt','en'"),og()()()()(),Cl(789,"h4",33)(790,"code",12),qx(791,"PoNumberSeparator"),og()(),Cl(792,"div",2)(793,"p"),Hl(794,"a",44),og(),Cl(795,"p"),qx(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),og()(),Cl(797,"h4",16),qx(798,"Propriedades"),og(),Cl(799,"table",25)(800,"tr",26)(801,"th",27),qx(802,"Nome"),og(),Cl(803,"th",27),qx(804,"Tipo"),og(),Cl(805,"th",27),qx(806,"Descri\xE7\xE3o"),og()(),Cl(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),qx(811," language"),Hl(812,"br"),og()()(),Cl(813,"td",28)(814,"code",37),qx(815,"string"),og()(),Cl(816,"td",22)(817,"em")(818,"strong"),qx(819,"(opcional)"),og()(),Cl(820,"p"),qx(821,"C\xF3digo do idioma "),Cl(822,"a",43),qx(823,"ISO 639-1"),og()(),Cl(824,"blockquote")(825,"p"),qx(826,"Exemplo: 'pt','en'"),og()()()(),Cl(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),qx(831," separator"),Hl(832,"br"),og()()(),Cl(833,"td",28)(834,"code",37),qx(835,"string"),og()(),Cl(836,"td",22)(837,"em")(838,"strong"),qx(839,"(opcional)"),og()(),Cl(840,"p"),qx(841,"Separador num\xE9rico"),og()()()(),Cl(842,"h4",33)(843,"code",12),qx(844,"PoDateSeparator"),og()(),Cl(845,"div",2)(846,"p"),Hl(847,"a",45),og(),Cl(848,"p"),qx(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),og()(),Cl(850,"h4",16),qx(851,"Propriedades"),og(),Cl(852,"table",25)(853,"tr",26)(854,"th",27),qx(855,"Nome"),og(),Cl(856,"th",27),qx(857,"Tipo"),og(),Cl(858,"th",27),qx(859,"Descri\xE7\xE3o"),og()(),Cl(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),qx(864," locale"),Hl(865,"br"),og()()(),Cl(866,"td",28)(867,"code",37),qx(868,"string"),og()(),Cl(869,"td",22)(870,"em")(871,"strong"),qx(872,"(opcional)"),og()(),Cl(873,"p"),qx(874,"C\xF3digo do locale "),Cl(875,"a",43),qx(876,"ISO 639-1"),og()(),Cl(877,"blockquote")(878,"p"),qx(879,"Exemplo: 'pt','en'"),og()()()(),Cl(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),qx(884," separator"),Hl(885,"br"),og()()(),Cl(886,"td",28)(887,"code",37),qx(888,"string"),og()(),Cl(889,"td",22)(890,"em")(891,"strong"),qx(892,"(opcional)"),og()(),Cl(893,"p"),qx(894,"Separador de data"),og(),Cl(895,"blockquote")(896,"p"),qx(897,"Exemplo: '/','.','-'"),og()()()()()());},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-i18n-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(T),bL]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,z]})}return o})();export{H as DocPoI18nModule};