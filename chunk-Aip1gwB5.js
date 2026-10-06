import{Gn as Ac,Ni as hw,Tr as Km,Vr as Qv,ar as E,b as $ze,ca as ue,cn as m5,di as cE,dr as Hn,hr as I$1,ki as he,pa as vN,pr as Hp,r as Ta,ri as Xv,ua as ug,ui as be,wr as Kc,zi as kL,zt as bt}from"./main-EZZF3RMT.js";var S=(()=>{class a{constructor(){}getMenus(r){return new Array({label:`Guia de implementação de APIs`,link:`guides/api`},{label:`Compatibilidade com os navegadores`,link:`guides/browser-support`},{label:`Depreciações`,link:`guides/deprecations`},{label:`Contribuindo para o PO UI`,link:`guides/development-flow`},{label:`Primeiros passos`,link:`guides/getting-started`},{label:`Guia de uso para Gráficos`,link:`guides/guide-charts`},{label:`Migração do PO UI para V2`,link:`guides/migration-poui-v2`},{label:`Migração do PO UI`,link:`guides/migration-poui`},{label:`Migração do THF para o PO UI v1.x`,link:`guides/migration-thf-to-po-ui`},{label:`Press Kit`,link:`guides/press-kit`},{label:`Lançamentos e suporte`,link:`guides/release-schedule`},{label:`Releases`,link:`guides/releases`},{label:`Schematics`,link:`guides/schematics`},{label:`Fundamentos do PO Sync`,link:`guides/sync-fundamentals`},{label:`Começando com o PO Sync`,link:`guides/sync-get-started`},{label:`Customização de Temas usando o serviço PO-UI`,link:`guides/theme-service`},{label:`Criando um tema para o PO UI`,link:`guides/create-theme-customization`},{label:`Grid System`,link:`guides/grid-system`},{label:`Espaçamento`,link:`guides/spacing`},{label:`Personalizando o Tema Padrão com Tokens CSS`,link:`guides/theme-customization`},{label:`Tipografia`,link:`guides/typography`})}static ɵfac=function(o){return new(o||a)};static ɵprov=I$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var F=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get(`./assets/json/api-list.json`).subscribe(r=>{this.menus=this.menuGuidesService.getMenus(r).map(o=>(o.link=o.link.replace(`guides/`,``),o))},r=>console.error(r))}static ɵfac=function(o){return new(o||a)(E(S),E(hw))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,features:[be([S])],decls:4,vars:1,consts:[[`userMenu`,``],[1,`po-wrapper`],[`p-filter`,``,3,`p-menus`]],template:function(o,s){o&1&&(Ac(0,`div`,1),Kc(1,`po-menu`,2,0)(3,`router-outlet`),ug()),o&2&&(Hp(),cE(`p-menus`,s.menus))},dependencies:[m5,Km],encapsulation:2,changeDetection:1})}return a})();var T=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:225,vars:0,consts:[[`p-title`,`Guia de implementação de APIs`,1,`guides`,`app-portal`],[`href`,`guides/api#introduction`],[`href`,`guides/api#responseMessage`],[`href`,`guides/api#errorMessages`],[`href`,`guides/api#successMessages`],[`href`,`guides/api#successMessagesForCollections`],[`href`,`guides/api#collections`],[`href`,`guides/api#order`],[`href`,`guides/api#filters`],[`href`,`guides/api#pagination`],[`id`,`introduction`],[`id`,`responseMessage`],[`id`,`errorMessages`],[`id`,`successMessages`],[`id`,`successMessagesForCollections`],[`id`,`collections`],[`id`,`order`],[`id`,`filters`],[`id`,`pagination`],[`href`,`#successMessagesForCollections`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`h2`),vN(2,`Conteúdo`),ug(),Ac(3,`ul`)(4,`li`)(5,`a`,1),vN(6,`Introdução`),ug()(),Ac(7,`li`)(8,`a`,2),vN(9,`Formato das mensagens de resposta`),ug(),Ac(10,`ul`)(11,`li`)(12,`a`,3),vN(13,`Mensagens de erro`),ug()(),Ac(14,`li`)(15,`a`,4),vN(16,`Mensagens de sucesso`),ug()(),Ac(17,`li`)(18,`a`,5),vN(19,`Mensagens de sucesso para coleções`),ug()()()(),Ac(20,`li`)(21,`a`,6),vN(22,`Formato das requisições para coleções`),ug(),Ac(23,`ul`)(24,`li`)(25,`a`,7),vN(26,`Ordenação`),ug()(),Ac(27,`li`)(28,`a`,8),vN(29,`Filtros`),ug()(),Ac(30,`li`)(31,`a`,9),vN(32,`Paginação`),ug()()()()(),Ac(33,`p`),Kc(34,`a`,10),ug(),Ac(35,`h2`),vN(36,`Introdução`),ug(),Ac(37,`p`),vN(38,`Este guia tem a finalidade de exibir os modelos de requisições e respostas HTTP que o PO UI utiliza em seus componentes e `),Ac(39,`em`),vN(40,`interceptors`),ug(),vN(41,`.`),ug(),Ac(42,`p`),Kc(43,`a`,11),ug(),Ac(44,`h2`),vN(45,`Formato das mensagens de resposta`),ug(),Ac(46,`p`),vN(47,`Alguns componentes utilizam `),Ac(48,`code`),vN(49,`endpoints`),ug(),vN(50,` para poder buscar os itens. Para isso, é necessário que o formato no qual estes itens serão devolvidos seja padronizado, para uma comunicação mais efetiva. A seguir serão apresentados o formato de mensagem de resposta esperado pelos `),Ac(51,`code`),vN(52,`endpoints`),ug(),vN(53,`.`),ug(),Ac(54,`p`),Kc(55,`a`,12),ug(),Ac(56,`h3`),vN(57,`Mensagens de erro`),ug(),Ac(58,`p`),vN(59,`Para todas as mensagens que representam um erro (códigos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresentá-las:`),ug(),Ac(60,`pre`)(61,`code`),vN(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),ug()(),Ac(63,`p`),vN(64,`Opcionalmente pode-se retornar os campos:`),ug(),Ac(65,`ul`)(66,`li`)(67,`code`),vN(68,`helpUrl`),ug(),vN(69,`: link para a documentação do erro;`),ug(),Ac(70,`li`)(71,`code`),vN(72,`type`),ug(),vN(73,`: pode ser informado os seguintes valores: `),Ac(74,`code`),vN(75,`error`),ug(),vN(76,`, `),Ac(77,`code`),vN(78,`warning`),ug(),vN(79,` e `),Ac(80,`code`),vN(81,`information`),ug(),vN(82,`;`),ug(),Ac(83,`li`)(84,`code`),vN(85,`details`),ug(),vN(86,`: lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal.`),ug()(),Ac(87,`pre`)(88,`code`),vN(89,`{
    code: "C\xF3digo identificador do erro",
    type: "error"
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro",
    helpUrl: "link para a documenta\xE7\xE3o do error",
    details [
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        }
    ]
}
`),ug()(),Ac(90,`p`),Kc(91,`a`,13),ug(),Ac(92,`h3`),vN(93,`Mensagens de sucesso`),ug(),Ac(94,`p`),vN(95,`Mensagens de sucesso (código HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da operação do `),Ac(96,`em`),vN(97,`endpoint`),ug(),vN(98,`. Exemplo:`),ug(),Ac(99,`pre`)(100,`code`),vN(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),ug()(),Ac(102,`p`),vN(103,`Opcionalmente, o atributo `),Ac(104,`code`),vN(105,`_messages`),ug(),vN(106,` pode ser incluído no objeto retornado para fornecer alguma informação complementar ao processamento realizado (mensagens de aviso, de negócio, etc). `),ug(),Ac(107,`p`),vN(108,`O formato do objeto de mensagem segue o padrão anteriormente descrito, para mensagens de erro.`),ug(),Ac(109,`pre`)(110,`code`),vN(111,`GET https://example.com.br/api/users/10
 
{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US",
    _messages: [{
      code: "INFO",
      type: "information",
      message: "Esta \xE9 uma mensagem informativa",
      detailedMessage: "Mais detalhes sobre esta mensagem podem ser vistos aqui."
    }]
}
`),ug()(),Ac(112,`p`),Kc(113,`a`,14),ug(),Ac(114,`h4`),vN(115,`Mensagens de sucesso para coleções`),ug(),Ac(116,`p`),vN(117,`Nos casos em que o resultado da operação do `),Ac(118,`em`),vN(119,`endpoint`),ug(),vN(120,` representa uma coleção (lista de itens), os itens devem estar agrupados em um objeto com as propriedades `),Ac(121,`code`),vN(122,`hasNext`),ug(),vN(123,`, indicando se existe uma próxima página com mais registros para aquela coleção e `),Ac(124,`code`),vN(125,`items`),ug(),vN(126,` que representam a lista de itens retornados.`),ug(),Ac(127,`pre`)(128,`code`),vN(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),ug()(),Ac(130,`p`),vN(131,`Para o retorno de coleções, também é possível incluir o atributo `),Ac(132,`code`),vN(133,`_messages`),ug(),vN(134,`, conforme segue:`),ug(),Ac(135,`pre`)(136,`code`),vN(137,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ],
  _messages: [{
    code: "INFO",
    type: "information",
    message: "Uma mensagem informativa.",
    detailedMessage: "Detalhes relativos a mensagem."
  }]
}
`),ug()(),Ac(138,`p`),Kc(139,`a`,15),ug(),Ac(140,`h2`),vN(141,`Formato das requisições para as coleções`),ug(),Ac(142,`p`),vN(143,`Os `),Ac(144,`em`),vN(145,`endpoints`),ug(),vN(146,` também podem receber parâmetros na requisição que servem para especificar o tipo de resposta desejada, por exemplo: ordenação. A seguir, serão apresentados os parâmetros que poderão ser enviados nessas requisições.`),ug(),Ac(147,`p`),Kc(148,`a`,16),ug(),Ac(149,`h3`),vN(150,`Ordenação`),ug(),Ac(151,`p`),vN(152,`Quando algum componente, como `),Ac(153,`code`),vN(154,`po-lookup`),ug(),vN(155,`, realizar alguma ordenação será enviado o parâmetro `),Ac(156,`code`),vN(157,`order`),ug(),vN(158,`, com as seguintes características:`),ug(),Ac(159,`ul`)(160,`li`),vN(161,`campos precedidos por um sinal de subtração (-) devem ser ordenados de forma decrescente;`),ug(),Ac(162,`li`),vN(163,`campos que omitirem o sinal (subtração) devem ser ordenados de forma crescente.`),ug()(),Ac(164,`p`),vN(165,`Por exemplo, a seguinte requisição deve retornar a lista de usuários ordenados pelo nome de forma crescente e então pela idade de forma decrescente e pelo sobrenome de forma crescente:`),ug(),Ac(166,`pre`)(167,`code`),vN(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),ug()(),Ac(169,`p`),Kc(170,`a`,17),ug(),Ac(171,`h3`),vN(172,`Filtros`),ug(),Ac(173,`p`),vN(174,`Aos realizar um filtro será enviado um parâmetro no formato `),Ac(175,`code`),vN(176,`property=value`),ug(),vN(177,`:`),ug(),Ac(178,`p`)(179,`code`),vN(180,`GET https://example.com.br/api/users?name=john&surname=doe`),ug()(),Ac(181,`p`),Kc(182,`a`,18),ug(),Ac(183,`h3`),vN(184,`Paginação`),ug(),Ac(185,`p`),vN(186,`A paginação é definida pelos parâmetros `),Ac(187,`code`),vN(188,`page`),ug(),vN(189,` e `),Ac(190,`code`),vN(191,`pageSize`),ug(),vN(192,`, respeitando as seguintes regras: `),ug(),Ac(193,`ul`)(194,`li`),vN(195,`o valor do parâmetro `),Ac(196,`code`),vN(197,`page`),ug(),vN(198,` deve ser um valor numérico (maior que zero) representando a página solicitada;`),ug(),Ac(199,`li`),vN(200,`o valor do parâmetro `),Ac(201,`code`),vN(202,`pageSize`),ug(),vN(203,` deve ser um valor numérico (maior que zero) representando o total de registros retornados na consulta;`),ug(),Ac(204,`li`),vN(205,`os parâmetros de paginação devem obedecer a semântica de multiplicador, ou seja, se o cliente solicitou `),Ac(206,`code`),vN(207,`page=2`),ug(),vN(208,` com um `),Ac(209,`code`),vN(210,`pageSize=20`),ug(),vN(211,` deve-se retornar os registros de 21 até 40;`),ug(),Ac(212,`li`),vN(213,`a resposta de uma requisição com paginação deve retornar um atributo indicando se existe uma próxima página disponível conforme descrito na `),Ac(214,`a`,19),vN(215,`mensagem de sucesso de coleções`),ug(),vN(216,` e esse atributo deve ter o nome `),Ac(217,`code`),vN(218,`hasNext`),ug(),vN(219,`.`),ug()(),Ac(220,`p`),vN(221,`Por exemplo, a seguinte requisição deve retornar a quarta página de registros (dos registros 31 a 40 inclusive) de usuários:`),ug(),Ac(222,`p`)(223,`code`),vN(224,`GET https://example.com.br/api/users/?page=4&pageSize=10`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:77,vars:0,consts:[[`p-title`,`Compatibilidade com os navegadores`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://angular.dev/reference/versions#browser-support`],[`href`,`https://angular.io/guide/deployment#local-development-in-older-browsers`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Atualmente o PO está homologado para os seguintes navegadores:`),ug(),Ac(3,`div`,1)(4,`div`,2)(5,`table`,3)(6,`thead`)(7,`tr`,4)(8,`th`,5),vN(9,`Navegadores`),ug(),Ac(10,`th`,5),vN(11,`Versões`),ug()()(),Ac(12,`tbody`)(13,`tr`,6)(14,`th`,7),vN(15,`Chrome`),ug(),Ac(16,`td`,7),vN(17,`2 versões mais recentes`),ug()(),Ac(18,`tr`,6)(19,`th`,7),vN(20,`Firefox`),ug(),Ac(21,`td`,7),vN(22,`versão mais recente e versão de suporte estendido (ESR)`),ug()(),Ac(23,`tr`,6)(24,`th`,7),vN(25,`Edge`),ug(),Ac(26,`td`,7),vN(27,`2 últimas versões principais`),ug()(),Ac(28,`tr`,6)(29,`th`,7),vN(30,`IOS`),ug(),Ac(31,`td`,7),vN(32,`2 últimas versões principais`),ug()(),Ac(33,`tr`,6)(34,`th`,7),vN(35,`Android`),ug(),Ac(36,`td`,7),vN(37,`2 últimas versões principais`),ug()()()()()(),Ac(38,`blockquote`)(39,`p`),vN(40,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),Ac(41,`a`,8)(42,`em`),vN(43,`Browser support`),ug()(),vN(44,` do Angular.`),ug()(),Ac(45,`blockquote`)(46,`p`),vN(47,`Caso precise de algum `),Ac(48,`em`),vN(49,`polyfill`),ug(),vN(50,` em sua aplicação ou precisa de mais informação sobre como funciona um `),Ac(51,`em`),vN(52,`polyfill`),ug(),vN(53,` acesse a documentação `),Ac(54,`a`,8)(55,`em`),vN(56,`Browser support`),ug()(),vN(57,` do Angular.`),ug()(),Ac(58,`h2`),vN(59,`Executando a aplicação localmente`),ug(),Ac(60,`p`),vN(61,`A partir do Angular CLI v8, os comandos `),Ac(62,`em`),vN(63,`ng serve`),ug(),vN(64,`, `),Ac(65,`em`),vN(66,`ng test`),ug(),vN(67,` e `),Ac(68,`em`),vN(69,`ng e2e`),ug(),vN(70,` são executados com ES2015, não sendo suportado para navegadores como Internet Explorer.`),ug(),Ac(71,`p`),vN(72,`Para conseguir executar a aplicação localmente no Internet Explorer, veja a documentação`),Kc(73,`br`),Ac(74,`a`,9),vN(75,`Desenvolvendo localmente em navegadores antigos`),ug(),vN(76,`.`),ug()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var D=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:865,vars:0,consts:[[`p-title`,`Depreciações`,1,`guides`,`app-portal`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`documentation/po-navbar`],[1,`po-table-column`,2,`text-align`,`center`],[`href`,`documentation/po-gauge`],[`href`,`documentation/po-tabs`],[`href`,`documentation/po-tag`],[`href`,`documentation/po-button`],[`href`,`documentation/po-button-group`],[`href`,`documentation/po-container`],[`href`,`documentation/po-table`],[`href`,`documentation/po-chart`],[`href`,`/icons`],[`href`,`documentation/po-header`],[`href`,`documentation/po-input`],[`href`,`documentation/po-dynamic-form`],[`href`,`documentation/po-select`],[`href`,`documentation/po-switch`],[`href`,`documentation`],[`href`,`https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368`],[`href`,`documentation/po-page-list`],[`href`,`documentation/po-page-login`],[`href`,`documentation/po-sync`],[`href`,`documentation/po-upload`],[`href`,`documentation/po-lookup`],[`href`,`documentation/po-http-interceptor`],[`href`,`documentation/po-page-detail`],[`href`,`documentation/po-page-edit`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Às vezes as mudanças são necessárias para inovar e se manter atualizado, e para tornar essas transições o mais fácil possível, assumimos o compromisso de minimizar o número de mudanças significativas e fornecer ferramentas de migração, além disso, seguimos uma política de suspensão de uso para que você tenha tempo hábil para atualizar suas aplicações com as funcionalidades mais recentes.`),ug(),Ac(3,`h2`),vN(4,`Descontinuidade`),ug(),Ac(5,`p`),vN(6,`Anunciamos os recursos obsoletos no nosso `),Ac(7,`a`,1),vN(8,`CHANGELOG`),ug(),vN(9,`. Esses recursos obsoletos aparecem na documentação com uma marcação de `),Ac(10,`em`)(11,`code`),vN(12,`Deprecated`),ug()(),vN(13,` e não são mais exemplificados nos `),Ac(14,`em`),vN(15,`samples`),ug(),vN(16,` do portal. Quando anunciamos uma suspensão de uso, sempre anunciamos também um caminho de atualização recomendado. Neste documento teremos um resumo desses recursos depreciados.`),ug(),Ac(17,`p`),vN(18,`Quando um recurso é descontinuado ele ainda se mantém presente geralmente pelas próximas `),Ac(19,`code`),vN(20,`duas`),ug(),vN(21,` versões principais. Depois disso esses recursos serão removidos. Uma descontinuação pode ser anunciada em qualquer versão, mas a sua remoção acontecerá apenas na versão principal. Até um recurso depreciado ser removido, manteremos o suporte a problemas críticos e de segurança e também temos ferramentas de migração que geralmente automatizam a maior parte das atualizações.`),ug(),Ac(22,`h2`),vN(23,`Índice`),ug(),Ac(24,`p`),vN(25,`A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que serão removidos. Cada item contém um link para a seção que descreve o motivo da suspensão de uso e as opções de substituição.`),ug(),Ac(26,`div`,2)(27,`div`,3)(28,`table`,4)(29,`thead`)(30,`tr`,5)(31,`th`,6),vN(32,`Área`),ug(),Ac(33,`th`,6),vN(34,`API ou Funcionalidade`),ug(),Ac(35,`th`,6),vN(36,`Removida em`),ug()()(),Ac(37,`tbody`)(38,`tr`,7)(39,`th`,8)(40,`a`,9),vN(41,`PoNavbar`),ug()(),Ac(42,`td`,8),vN(43,`Componente descontinuado`),ug(),Ac(44,`td`,10),vN(45,`v23`),ug()(),Ac(46,`tr`,7)(47,`th`,8)(48,`a`,11),vN(49,`PoGauge`),ug()(),Ac(50,`td`,8),vN(51,`Componente descontinuado`),ug(),Ac(52,`td`,10),vN(53,`v22`),ug()(),Ac(54,`tr`,7)(55,`th`,8)(56,`a`,12),vN(57,`PoTabs`),ug()(),Ac(58,`td`,8),vN(59,`p-small`),ug(),Ac(60,`td`,10),vN(61,`v18`),ug()(),Ac(62,`tr`,7)(63,`th`,8)(64,`a`,13),vN(65,`PoTag`),ug()(),Ac(66,`td`,8),vN(67,`p-inverse`),ug(),Ac(68,`td`,10),vN(69,`v18`),ug()(),Ac(70,`tr`,7)(71,`th`,8)(72,`a`,14),vN(73,`PoButton`),ug()(),Ac(74,`td`,8),vN(75,`p-small`),ug(),Ac(76,`td`,10),vN(77,`v17`),ug()(),Ac(78,`tr`,7)(79,`th`,8)(80,`a`,15),vN(81,`PoButtonGroup`),ug()(),Ac(82,`td`,8),vN(83,`p-small`),ug(),Ac(84,`td`,10),vN(85,`v17`),ug()(),Ac(86,`tr`,7)(87,`th`,8)(88,`a`,16),vN(89,`PoContainer`),ug()(),Ac(90,`td`,8),vN(91,`p-no-shadow`),ug(),Ac(92,`td`,10),vN(93,`v17`),ug()(),Ac(94,`tr`,7)(95,`th`,8)(96,`a`,17),vN(97,`PoTable`),ug()(),Ac(98,`td`,8),vN(99,`p-hide-text-overflow`),ug(),Ac(100,`td`,10),vN(101,`v17`),ug()()()()()(),Ac(102,`blockquote`)(103,`p`),vN(104,`Ver mais detalhes no nosso `),Ac(105,`a`,1),vN(106,`CHANGELOG`),ug(),vN(107,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),ug()(),Ac(108,`h2`),vN(109,`Depreciações`),ug(),Ac(110,`p`),vN(111,`Esta seção contém uma lista completa de todos os recursos obsoletos com detalhes para ajudá-lo a planejar sua migração.`),ug(),Ac(112,`h3`),vN(113,`PoGauge`),ug(),Ac(114,`div`,2)(115,`div`,3)(116,`table`,4)(117,`thead`)(118,`tr`,5)(119,`th`,6),vN(120,`Recurso`),ug(),Ac(121,`th`,6),vN(122,`Substituição`),ug(),Ac(123,`th`,6),vN(124,`Anúncio da Depreciação`),ug(),Ac(125,`th`,6),vN(126,`Removido em`),ug()()(),Ac(127,`tbody`)(128,`tr`,7)(129,`th`,8),vN(130,`Componente po-gauge`),ug(),Ac(131,`td`,8)(132,`a`,18),vN(133,`po-chart (type=gauge)`),ug()(),Ac(134,`td`,10),vN(135,`v19`),ug(),Ac(136,`td`,10),vN(137,`v22`),ug()()()()()(),Ac(138,`p`),vN(139,`O componente `),Ac(140,`code`),vN(141,`po-gauge`),ug(),vN(142,` foi removido. Utilize o `),Ac(143,`code`),vN(144,`po-chart`),ug(),vN(145,` com `),Ac(146,`code`),vN(147,`p-type="gauge"`),ug(),vN(148,` como alternativa.`),ug(),Ac(149,`p`),vN(150,`Antes:`),ug(),Ac(151,`pre`)(152,`code`),vN(153,`<po-gauge [p-value]="72" [p-ranges]="ranges"></po-gauge>
`),ug()(),Ac(154,`p`),vN(155,`Depois:`),ug(),Ac(156,`pre`)(157,`code`),vN(158,`<po-chart p-type="gauge" [p-options]="gaugeOptions" [p-series]="gaugeSeries"></po-chart>
`),ug()(),Ac(159,`h3`),vN(160,`PoButton`),ug(),Ac(161,`div`,2)(162,`div`,3)(163,`table`,4)(164,`thead`)(165,`tr`,5)(166,`th`,6),vN(167,`Recurso`),ug(),Ac(168,`th`,6),vN(169,`Substituição`),ug(),Ac(170,`th`,6),vN(171,`Anúncio da Depreciação`),ug(),Ac(172,`th`,6),vN(173,`Removido em`),ug()()(),Ac(174,`tbody`)(175,`tr`,7)(176,`th`,8),vN(177,`p-type`),ug(),Ac(178,`td`,8)(179,`a`,14),vN(180,`p-kind`),ug()(),Ac(181,`td`,10),vN(182,`v6`),ug(),Ac(183,`td`,10),vN(184,`v15`),ug()()()()()(),Ac(185,`h4`),vN(186,`Deprecia p-type default`),ug(),Ac(187,`p`),vN(188,`Indicamos o uso da propriedade `),Ac(189,`code`),vN(190,`p-kind`),ug(),vN(191,` secondary`),ug(),Ac(192,`p`),vN(193,`Antes:`),ug(),Ac(194,`pre`)(195,`code`),vN(196,`// html
<po-button [p-type]="default" ...></po-button>
`),ug()(),Ac(197,`p`),vN(198,`Depois:`),ug(),Ac(199,`pre`)(200,`code`),vN(201,`// html
<po-button p-kind="secondary" ...></po-button>
`),ug()(),Ac(202,`h4`),vN(203,`Deprecia p-type primary`),ug(),Ac(204,`p`),vN(205,`Indicamos o uso da propriedade `),Ac(206,`code`),vN(207,`p-kind`),ug(),vN(208,` primary`),ug(),Ac(209,`p`),vN(210,`Antes:`),ug(),Ac(211,`pre`)(212,`code`),vN(213,`// html
<po-button [p-type]="primary" ...></po-button>
`),ug()(),Ac(214,`p`),vN(215,`Depois:`),ug(),Ac(216,`pre`)(217,`code`),vN(218,`// html
<po-button p-kind="primary" ...></po-button>
`),ug()(),Ac(219,`h4`),vN(220,`Deprecia p-type link`),ug(),Ac(221,`p`),vN(222,`Indicamos o uso da propriedade `),Ac(223,`code`),vN(224,`p-kind`),ug(),vN(225,` tertiary`),ug(),Ac(226,`p`),vN(227,`Antes:`),ug(),Ac(228,`pre`)(229,`code`),vN(230,`// html
<po-button [p-type]="link" ...></po-button>
`),ug()(),Ac(231,`p`),vN(232,`Depois:`),ug(),Ac(233,`pre`)(234,`code`),vN(235,`// html
<po-button p-kind="tertiary" ...></po-button>
`),ug()(),Ac(236,`h4`),vN(237,`Deprecia p-type danger`),ug(),Ac(238,`p`),vN(239,`Indicamos o uso da propriedade `),Ac(240,`code`),vN(241,`p-danger`),ug(),vN(242,` true`),ug(),Ac(243,`p`),vN(244,`Antes:`),ug(),Ac(245,`pre`)(246,`code`),vN(247,`// html
<po-button [p-type]="danger" ...></po-button>
`),ug()(),Ac(248,`p`),vN(249,`Depois:`),ug(),Ac(250,`pre`)(251,`code`),vN(252,`// html
<po-button [p-danger]="true" ...></po-button>
`),ug()(),Ac(253,`h3`),vN(254,`HttpClientModule`),ug(),Ac(255,`blockquote`)(256,`p`),vN(257,`O módulo HttpClientModule foi removido do projeto não sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas práticas é necessário importar o HttpClientModule apenas no módulo principal da aplicação.`),ug()(),Ac(258,`p`),vN(259,`Exemplo:`),ug(),Ac(260,`pre`)(261,`code`),vN(262,`// app.module.ts
...
import { HttpClientModule } from '@angular/common/http';
...

@NgModule({
  declarations: [
    ...
    AppComponent
    ...
  ],
  imports: [
    ...
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [
    ...
    AppComponent
    ...
    ]
})
export class AppModule { }
`),ug()(),Ac(263,`h3`),vN(264,`Remoção da biblioteca POIcon`),ug(),Ac(265,`p`),vN(266,`A partir da v21, a biblioteca de ícones POIcon foi removida. O conjunto padrão de ícones passa a ser a lib Animalia Icons.`),ug(),Ac(267,`p`),vN(268,`Antes - PO Icon (legado)`),ug(),Ac(269,`pre`)(270,`code`),vN(271,`//html
<i class="po-icon po-icon-user"></i>
`),ug()(),Ac(272,`p`),vN(273,`Depois - Animalia Icons (atual)`),ug(),Ac(274,`pre`)(275,`code`),vN(276,`//html
<i class="an an-user"></i>
`),ug()(),Ac(277,`blockquote`)(278,`p`),vN(279,`Para saber como utilizar, veja em `),Ac(280,`a`,19),vN(281,`Biblioteca de ícones`),ug(),vN(282,` do PO UI.`),ug()(),Ac(283,`h2`),vN(284,`Breaking Changes`),ug(),Ac(285,`div`,2)(286,`div`,3)(287,`table`,4)(288,`thead`)(289,`tr`,5)(290,`th`,6),vN(291,`Área`),ug(),Ac(292,`th`,6),vN(293,`Funcionalidade`),ug(),Ac(294,`th`,6),vN(295,`Substituição`),ug(),Ac(296,`th`,6),vN(297,`Removida em`),ug()()(),Ac(298,`tbody`)(299,`tr`,7)(300,`th`,8)(301,`a`,11),vN(302,`PoGauge`),ug()(),Ac(303,`td`,8),vN(304,`Componente descontinuado`),ug(),Ac(305,`td`,8)(306,`a`,18),vN(307,`PoChart (type=gauge)`),ug()(),Ac(308,`td`,10),vN(309,`v22`),ug()(),Ac(310,`tr`,7)(311,`th`,8)(312,`a`,9),vN(313,`PoNavbar`),ug()(),Ac(314,`td`,8),vN(315,`Componente descontinuado`),ug(),Ac(316,`td`,8)(317,`a`,20),vN(318,`PoHeader`),ug()(),Ac(319,`td`,10),vN(320,`v23`),ug()(),Ac(321,`tr`,7)(322,`th`,8)(323,`a`,21),vN(324,`Campos de formulários`),ug()(),Ac(325,`td`,8),vN(326,`p-additional-help-tooltip`),ug(),Ac(327,`td`,8),vN(328,`p-helper`),ug(),Ac(329,`td`,10),vN(330,`v23`),ug()(),Ac(331,`tr`,7)(332,`th`,8)(333,`a`,22),vN(334,`PoDynamicForm`),ug()(),Ac(335,`td`,8),vN(336,`p-additional-help-tooltip`),ug(),Ac(337,`td`,8),vN(338,`p-helper`),ug(),Ac(339,`td`,10),vN(340,`v23`),ug()(),Ac(341,`tr`,7)(342,`th`,8)(343,`a`,19),vN(344,`POIcon`),ug()(),Ac(345,`td`,8),vN(346,`Biblioteca de ícones`),ug(),Ac(347,`td`,8),vN(348,`Animalia Icons`),ug(),Ac(349,`td`,10),vN(350,`v21`),ug()(),Ac(351,`tr`,7)(352,`th`,8)(353,`a`,12),vN(354,`PoTabs`),ug()(),Ac(355,`td`,8),vN(356,`p-small`),ug(),Ac(357,`td`,8),vN(358,`-`),ug(),Ac(359,`td`,10),vN(360,`v18`),ug()(),Ac(361,`tr`,7)(362,`th`,8)(363,`a`,13),vN(364,`PoTag`),ug()(),Ac(365,`td`,8),vN(366,`p-inverse`),ug(),Ac(367,`td`,8),vN(368,`-`),ug(),Ac(369,`td`,10),vN(370,`v18`),ug()(),Ac(371,`tr`,7)(372,`th`,8)(373,`a`,14),vN(374,`PoButton`),ug()(),Ac(375,`td`,8),vN(376,`p-small`),ug(),Ac(377,`td`,8),vN(378,`-`),ug(),Ac(379,`td`,10),vN(380,`v17`),ug()(),Ac(381,`tr`,7)(382,`th`,8)(383,`a`,15),vN(384,`PoButtonGroup`),ug()(),Ac(385,`td`,8),vN(386,`p-small`),ug(),Ac(387,`td`,8),vN(388,`-`),ug(),Ac(389,`td`,10),vN(390,`v17`),ug()(),Ac(391,`tr`,7)(392,`th`,8)(393,`a`,16),vN(394,`PoContainer`),ug()(),Ac(395,`td`,8),vN(396,`p-no-shadow`),ug(),Ac(397,`td`,8),vN(398,`-`),ug(),Ac(399,`td`,10),vN(400,`v17`),ug()(),Ac(401,`tr`,7)(402,`th`,8)(403,`a`,17),vN(404,`PoTable`),ug()(),Ac(405,`td`,8),vN(406,`p-hide-text-overflow`),ug(),Ac(407,`td`,8),vN(408,`-`),ug(),Ac(409,`td`,10),vN(410,`v17`),ug()(),Ac(411,`tr`,7)(412,`th`,8)(413,`a`,14),vN(414,`PoButton`),ug()(),Ac(415,`td`,8),vN(416,`p-type`),ug(),Ac(417,`td`,8),vN(418,`-`),ug(),Ac(419,`td`,10),vN(420,`v15`),ug()(),Ac(421,`tr`,7)(422,`th`,8),vN(423,`Build`),ug(),Ac(424,`td`,8),vN(425,`HttpClientModule`),ug(),Ac(426,`td`,8),vN(427,`-`),ug(),Ac(428,`td`,10),vN(429,`v15`),ug()(),Ac(430,`tr`,7)(431,`th`,8)(432,`a`,21),vN(433,`PoDynamicFormFields`),ug()(),Ac(434,`td`,8),vN(435,`p-auto-focus`),ug(),Ac(436,`td`,8),vN(437,`-`),ug(),Ac(438,`td`,10),vN(439,`v14`),ug()(),Ac(440,`tr`,7)(441,`th`,8)(442,`a`,23),vN(443,`PoSelect`),ug()(),Ac(444,`td`,8),vN(445,`p-auto-focus`),ug(),Ac(446,`td`,8),vN(447,`-`),ug(),Ac(448,`td`,10),vN(449,`v14`),ug()(),Ac(450,`tr`,7)(451,`th`,8)(452,`a`,24),vN(453,`PoSwitch`),ug()(),Ac(454,`td`,8),vN(455,`p-auto-focus`),ug(),Ac(456,`td`,8),vN(457,`-`),ug(),Ac(458,`td`,10),vN(459,`v14`),ug()(),Ac(460,`tr`,7)(461,`th`,8)(462,`a`,14),vN(463,`PoButton`),ug()(),Ac(464,`td`,8),vN(465,`p-auto-focus`),ug(),Ac(466,`td`,8),vN(467,`-`),ug(),Ac(468,`td`,10),vN(469,`v14`),ug()(),Ac(470,`tr`,7)(471,`th`,8)(472,`a`,21),vN(473,`PoSelectOptionTemplate`),ug()(),Ac(474,`td`,8),vN(475,`-`),ug(),Ac(476,`td`,8),vN(477,`PoComboOptionTemplate`),ug(),Ac(478,`td`,10),vN(479,`v14`),ug()(),Ac(480,`tr`,7)(481,`th`,8)(482,`a`,25),vN(483,`Components`),ug()(),Ac(484,`td`,8),vN(485,`diminuição da altura em pequenas resoluções. `),Ac(486,`a`,26),vN(487,`Ver mais`),ug()(),Ac(488,`td`,8),vN(489,`-`),ug(),Ac(490,`td`,10),vN(491,`v14`),ug()(),Ac(492,`tr`,7)(493,`th`,8)(494,`a`,18),vN(495,`PoChart`),ug()(),Ac(496,`td`,8),vN(497,`PoChartGaugeSerie`),ug(),Ac(498,`td`,8)(499,`a`,11),vN(500,`PoGauge`),ug()(),Ac(501,`td`,10),vN(502,`v6`),ug()(),Ac(503,`tr`,7)(504,`th`,8)(505,`a`,18),vN(506,`PoChart`),ug()(),Ac(507,`td`,8),vN(508,`PoChartSerie.category`),ug(),Ac(509,`td`,8),vN(510,`PoChartSerie.label`),ug(),Ac(511,`td`,10),vN(512,`v6`),ug()(),Ac(513,`tr`,7)(514,`th`,8)(515,`a`,18),vN(516,`PoChart`),ug()(),Ac(517,`td`,8),vN(518,`PoChartSerie.value`),ug(),Ac(519,`td`,8),vN(520,`PoChartSerie.data`),ug(),Ac(521,`td`,10),vN(522,`v6`),ug()(),Ac(523,`tr`,7)(524,`th`,8)(525,`a`,18),vN(526,`PoChart`),ug()(),Ac(527,`td`,8),vN(528,`PoChartType.Gauge`),ug(),Ac(529,`td`,8)(530,`a`,11),vN(531,`PoGauge`),ug()(),Ac(532,`td`,10),vN(533,`v6`),ug()(),Ac(534,`tr`,7)(535,`th`,8)(536,`a`,9),vN(537,`PoNavBar`),ug()(),Ac(538,`td`,8),vN(539,`p-menu`),ug(),Ac(540,`td`,8),vN(541,`-`),ug(),Ac(542,`td`,10),vN(543,`v6`),ug()(),Ac(544,`tr`,7)(545,`th`,8)(546,`a`,18),vN(547,`PoChart`),ug()(),Ac(548,`td`,8),vN(549,`PoPieChartSeries`),ug(),Ac(550,`td`,8),vN(551,`PoChartSerie`),ug(),Ac(552,`td`,10),vN(553,`v5`),ug()(),Ac(554,`tr`,7)(555,`th`,8)(556,`a`,18),vN(557,`PoChart`),ug()(),Ac(558,`td`,8),vN(559,`PoDonutChartSeries`),ug(),Ac(560,`td`,8),vN(561,`PoChartSerie`),ug(),Ac(562,`td`,10),vN(563,`v5`),ug()(),Ac(564,`tr`,7)(565,`th`,8)(566,`a`,18),vN(567,`PoChart`),ug()(),Ac(568,`td`,8),vN(569,`PoBarChartSeries`),ug(),Ac(570,`td`,8),vN(571,`PoChartSerie`),ug(),Ac(572,`td`,10),vN(573,`v5`),ug()(),Ac(574,`tr`,7)(575,`th`,8)(576,`a`,18),vN(577,`PoChart`),ug()(),Ac(578,`td`,8),vN(579,`PoColumnChartSeries`),ug(),Ac(580,`td`,8),vN(581,`PoChartSerie`),ug(),Ac(582,`td`,10),vN(583,`v5`),ug()(),Ac(584,`tr`,7)(585,`th`,8)(586,`a`,18),vN(587,`PoChart`),ug()(),Ac(588,`td`,8),vN(589,`PoLineChartSeries`),ug(),Ac(590,`td`,8),vN(591,`PoChartSerie`),ug(),Ac(592,`td`,10),vN(593,`v5`),ug()(),Ac(594,`tr`,7)(595,`th`,8)(596,`a`,17),vN(597,`PoTable`),ug()(),Ac(598,`td`,8),vN(599,`p-single-select`),ug(),Ac(600,`td`,8),vN(601,`[p-single-select]="false"`),ug(),Ac(602,`td`,10),vN(603,`v5`),ug()(),Ac(604,`tr`,7)(605,`th`,8)(606,`a`,17),vN(607,`PoTable`),ug()(),Ac(608,`td`,8),vN(609,`p-hide-select-all`),ug(),Ac(610,`td`,8),vN(611,`[p-hide-select-all]="false"`),ug(),Ac(612,`td`,10),vN(613,`v5`),ug()(),Ac(614,`tr`,7)(615,`th`,8)(616,`a`,17),vN(617,`PoTable`),ug()(),Ac(618,`td`,8),vN(619,`p-striped`),ug(),Ac(620,`td`,8),vN(621,`[p-striped]="false"`),ug(),Ac(622,`td`,10),vN(623,`v5`),ug()(),Ac(624,`tr`,7)(625,`th`,8)(626,`a`,17),vN(627,`PoTable`),ug()(),Ac(628,`td`,8),vN(629,`p-show-more-disabled`),ug(),Ac(630,`td`,8),vN(631,`[p-show-more-disabled]="false"`),ug(),Ac(632,`td`,10),vN(633,`v5`),ug()(),Ac(634,`tr`,7)(635,`th`,8)(636,`a`,17),vN(637,`PoTable`),ug()(),Ac(638,`td`,8),vN(639,`p-sort`),ug(),Ac(640,`td`,8),vN(641,`[p-sort]="false"`),ug(),Ac(642,`td`,10),vN(643,`v5`),ug()(),Ac(644,`tr`,7)(645,`th`,8)(646,`a`,27),vN(647,`PoPageList`),ug()(),Ac(648,`td`,8),vN(649,`PoPageFilter.ngModel`),ug(),Ac(650,`td`,8),vN(651,`-`),ug(),Ac(652,`td`,10),vN(653,`v4`),ug()(),Ac(654,`tr`,7)(655,`th`,8)(656,`a`,27),vN(657,`PoPageList`),ug()(),Ac(658,`td`,8),vN(659,`PoPageFilter.action: string`),ug(),Ac(660,`td`,8),vN(661,`PoPageFilter.action: Function`),ug(),Ac(662,`td`,10),vN(663,`v4`),ug()(),Ac(664,`tr`,7)(665,`th`,8)(666,`a`,27),vN(667,`PoPageList`),ug()(),Ac(668,`td`,8),vN(669,`PoPageFilter.advancedAction: string`),ug(),Ac(670,`td`,8),vN(671,`PoPageFilter.advancedAction: Function`),ug(),Ac(672,`td`,10),vN(673,`v4`),ug()(),Ac(674,`tr`,7)(675,`th`,8)(676,`a`,28),vN(677,`PoPageLogin`),ug()(),Ac(678,`td`,8),vN(679,`PoPageLoginLiterals.title`),ug(),Ac(680,`td`,8),vN(681,`p-product-name`),ug(),Ac(682,`td`,10),vN(683,`v4`),ug()(),Ac(684,`tr`,7)(685,`th`,8)(686,`a`,18),vN(687,`PoChart`),ug()(),Ac(688,`td`,8),vN(689,`PoChartOptions.axis.axisXGridLines`),ug(),Ac(690,`td`,8),vN(691,`PoChartOptions.axis.gridLines`),ug(),Ac(692,`td`,10),vN(693,`v4`),ug()(),Ac(694,`tr`,7)(695,`th`,8)(696,`a`,29),vN(697,`PoSync`),ug()(),Ac(698,`td`,8),vN(699,`portinari_sync_date`),ug(),Ac(700,`td`,8),vN(701,`po_sync_date`),ug(),Ac(702,`td`,10),vN(703,`v3`),ug()(),Ac(704,`tr`,7)(705,`th`,8)(706,`a`,30),vN(707,`PoUpload`),ug()(),Ac(708,`td`,8),vN(709,`PoUploadLiterals.cancel`),ug(),Ac(710,`td`,8),vN(711,`-`),ug(),Ac(712,`td`,10),vN(713,`v3`),ug()(),Ac(714,`tr`,7)(715,`th`,8)(716,`a`,30),vN(717,`PoUpload`),ug()(),Ac(718,`td`,8),vN(719,`PoUploadLiterals.deleteFile`),ug(),Ac(720,`td`,8),vN(721,`-`),ug(),Ac(722,`td`,10),vN(723,`v3`),ug()(),Ac(724,`tr`,7)(725,`th`,8)(726,`a`,30),vN(727,`PoUpload`),ug()(),Ac(728,`td`,8),vN(729,`PoUploadLiterals.tryAgain`),ug(),Ac(730,`td`,8),vN(731,`-`),ug(),Ac(732,`td`,10),vN(733,`v3`),ug()(),Ac(734,`tr`,7)(735,`th`,8)(736,`a`,31),vN(737,`PoLookup`),ug()(),Ac(738,`td`,8),vN(739,`getFilteredData`),ug(),Ac(740,`td`,8),vN(741,`getFilteredItems`),ug(),Ac(742,`td`,10),vN(743,`v3`),ug()(),Ac(744,`tr`,7)(745,`th`,8)(746,`a`,17),vN(747,`PoTable`),ug()(),Ac(748,`td`,8),vN(749,`p-checkbox`),ug(),Ac(750,`td`,8),vN(751,`p-selectable`),ug(),Ac(752,`td`,10),vN(753,`v3`),ug()(),Ac(754,`tr`,7)(755,`th`,8)(756,`a`,21),vN(757,`PoField`),ug()(),Ac(758,`td`,8),vN(759,`p-focus`),ug(),Ac(760,`td`,8),vN(761,`p-auto-focus`),ug(),Ac(762,`td`,10),vN(763,`v2`),ug()(),Ac(764,`tr`,7)(765,`th`,8),vN(766,`Packages`),ug(),Ac(767,`td`,8),vN(768,`@portinari/portinari-ui`),ug(),Ac(769,`td`,8),vN(770,`@po-ui/ng-components`),ug(),Ac(771,`td`,10),vN(772,`v2`),ug()(),Ac(773,`tr`,7)(774,`th`,8),vN(775,`Packages`),ug(),Ac(776,`td`,8),vN(777,`@portinari/portinari-templates`),ug(),Ac(778,`td`,8),vN(779,`@po-ui/ng-templates`),ug(),Ac(780,`td`,10),vN(781,`v2`),ug()(),Ac(782,`tr`,7)(783,`th`,8),vN(784,`Packages`),ug(),Ac(785,`td`,8),vN(786,`@portinari/portinari-code-editor`),ug(),Ac(787,`td`,8),vN(788,`@po-ui/ng-code-editor`),ug(),Ac(789,`td`,10),vN(790,`v2`),ug()(),Ac(791,`tr`,7)(792,`th`,8),vN(793,`Packages`),ug(),Ac(794,`td`,8),vN(795,`@portinari/portinari-storage`),ug(),Ac(796,`td`,8),vN(797,`@po-ui/ng-storage`),ug(),Ac(798,`td`,10),vN(799,`v2`),ug()(),Ac(800,`tr`,7)(801,`th`,8),vN(802,`Packages`),ug(),Ac(803,`td`,8),vN(804,`@portinari/portinari-sync`),ug(),Ac(805,`td`,8),vN(806,`@po-ui/ng-sync`),ug(),Ac(807,`td`,10),vN(808,`v2`),ug()(),Ac(809,`tr`,7)(810,`th`,8)(811,`a`,32),vN(812,`PoHttpInterceptor`),ug()(),Ac(813,`td`,8),vN(814,`X-Portinari-No-Message`),ug(),Ac(815,`td`,8),vN(816,`X-PO-No-Message`),ug(),Ac(817,`td`,10),vN(818,`v2`),ug()(),Ac(819,`tr`,7)(820,`th`,8)(821,`a`,32),vN(822,`PoHttpInterceptor`),ug()(),Ac(823,`td`,8),vN(824,`X-Portinari-SCREEN-LOCK`),ug(),Ac(825,`td`,8),vN(826,`X-PO-SCREEN-LOCK`),ug(),Ac(827,`td`,10),vN(828,`v2`),ug()(),Ac(829,`tr`,7)(830,`th`,8)(831,`a`,32),vN(832,`PoHttpInterceptor`),ug()(),Ac(833,`td`,8),vN(834,`X-Portinari-No-Count-Pending-Requests`),ug(),Ac(835,`td`,8),vN(836,`X-PO-No-Count-Pending-Requests`),ug(),Ac(837,`td`,10),vN(838,`v2`),ug()(),Ac(839,`tr`,7)(840,`th`,8)(841,`a`,33),vN(842,`PoPageDetail`),ug()(),Ac(843,`td`,8),vN(844,`reconhecimento das ações via funções no typescript`),ug(),Ac(845,`td`,8),vN(846,`utilização das propriedades p-back, p-edit e p-remove`),ug(),Ac(847,`td`,10),vN(848,`v2`),ug()(),Ac(849,`tr`,7)(850,`th`,8)(851,`a`,34),vN(852,`PoPageEdit`),ug()(),Ac(853,`td`,8),vN(854,`reconhecimento das ações via funções no typescript`),ug(),Ac(855,`td`,8),vN(856,`utilização das propriedades p-save, p-save-new e p-cancel`),ug(),Ac(857,`td`,10),vN(858,`v2`),ug()()()()()(),Ac(859,`blockquote`)(860,`p`),vN(861,`Ver mais detalhes no nosso `),Ac(862,`a`,1),vN(863,`CHANGELOG`),ug(),vN(864,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var M=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:423,vars:0,consts:[[`p-title`,`Contribuindo para o PO UI`,1,`guides`,`app-portal`],[`href`,`guides/development-flow#code-of-conduct`],[`href`,`guides/development-flow#flow`],[`href`,`guides/development-flow#create-issue`],[`href`,`guides/development-flow#code-reproduction`],[`href`,`guides/development-flow#contribute`],[`href`,`guides/development-flow#setup`],[`href`,`guides/development-flow#modifying-components`],[`href`,`guides/development-flow#preview-changes`],[`href`,`guides/development-flow#tests`],[`href`,`guides/development-flow#lint`],[`href`,`guides/development-flow#po-style`],[`href`,`guides/development-flow#build`],[`href`,`guides/development-flow#pr`],[`id`,`code-of-conduct`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md`],[`id`,`flow`],[1,`card-list-item`],[`id`,`create-issue`],[1,`po-row`],[1,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/bug.png`,1,`card-list-icon`],[1,`po-font-subtitle`,`po-pb-1`],[`href`,`https://github.com/po-ui/po-angular/issues/439`],[`href`,`https://github.com/po-ui/po-angular/pulls`],[`id`,`code-reproduction`],[`src`,`./assets/graphics/contribute/ambiente_teste.png`,1,`card-list-icon`],[`href`,`https://stackblitz.com/edit/po-ui`],[`id`,`contribute`],[`src`,`./assets/graphics/contribute/colabore.png`,1,`card-list-icon`],[1,`po-font-text`],[`id`,`setup`],[`src`,`./assets/graphics/contribute/setup.png`,1,`card-list-icon`],[1,`po-text-color-neutral-dark-40`],[`href`,`https://git-scm.com/book/en/v2`],[`href`,`https://github.com/po-ui/po-angular`],[`id`,`modifying-components`],[`src`,`./assets/graphics/contribute/modificando.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md`],[`href`,`https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md`],[`id`,`preview-changes`],[`src`,`./assets/graphics/contribute/rodando_local.png`,1,`card-list-icon`],[`id`,`tests`],[`src`,`./assets/graphics/contribute/teste_unitario.png`,1,`card-list-icon`],[`id`,`lint`],[`src`,`./assets/graphics/contribute/lint.png`,1,`card-list-icon`],[`id`,`po-style`],[`src`,`./assets/graphics/contribute/css.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-style`],[`href`,`https://github.com/po-ui/po-style/blob/master/README.md`],[`id`,`build`],[`src`,`./assets/graphics/contribute/build.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits`],[`id`,`pr`],[1,`po-pl-sm-5`,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/pr.png`,1,`card-list-icon`],[`href`,`https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`h4`),vN(2,`Obrigado pelo interesse em contribuir para a biblioteca PO UI!`),ug(),Ac(3,`h2`),vN(4,`Conteúdo`),ug(),Ac(5,`ul`)(6,`li`)(7,`a`,1),vN(8,`Código de conduta`),ug()(),Ac(9,`li`)(10,`a`,2),vN(11,`Fluxo`),ug(),Ac(12,`ul`)(13,`li`)(14,`a`,3),vN(15,`Criando `),Ac(16,`em`),vN(17,`issue`),ug(),vN(18,` no GitHub`),ug()(),Ac(19,`li`)(20,`a`,4),vN(21,`Criando reprodução de código para nova `),Ac(22,`em`),vN(23,`issue`),ug()()(),Ac(24,`li`)(25,`a`,5),vN(26,`Colaborando com o PO UI`),ug()(),Ac(27,`li`)(28,`a`,6),vN(29,`Setup Inicial`),ug()(),Ac(30,`li`)(31,`a`,7),vN(32,`Modificando Componentes`),ug()(),Ac(33,`li`)(34,`a`,8),vN(35,`Subindo as modificações localmente`),ug()(),Ac(36,`li`)(37,`a`,9),vN(38,`Testes Unitários`),ug()(),Ac(39,`li`)(40,`a`,10),vN(41,`ES Lint`),ug()(),Ac(42,`li`)(43,`a`,11),vN(44,`Po Style`),ug()(),Ac(45,`li`)(46,`a`,12),vN(47,`Build das modificações`),ug()(),Ac(48,`li`)(49,`a`,13),vN(50,`Criando Pull Request`),ug()()()()(),Ac(51,`p`),Kc(52,`a`,14),ug(),Ac(53,`h3`),vN(54,`Código de conduta`),ug(),Ac(55,`p`),vN(56,`Primeiramente, pedimos para que leiam com atenção nosso `),Ac(57,`a`,15),vN(58,`Código de Conduta`),ug(),vN(59,` para se inteirarem sobre nossas regras.`),ug(),Ac(60,`p`),Kc(61,`a`,16),ug(),Ac(62,`h2`),vN(63,`Fluxo`),ug(),Ac(64,`p`),vN(65,`Este guia tem por objetivo definir as regras para criação de `),Ac(66,`em`),vN(67,`Issues`),ug(),vN(68,` relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para criação de novas `),Ac(69,`em`),vN(70,`Branchs`),ug(),vN(71,`, `),Ac(72,`em`),vN(73,`Pull Requests`),ug(),vN(74,` e `),Ac(75,`em`),vN(76,`Commits`),ug(),vN(77,` no projeto PO UI. `),ug(),Ac(78,`div`)(79,`div`,17),Kc(80,`a`,18),Ac(81,`div`,19)(82,`div`,20),Kc(83,`img`,21),Ac(84,`h3`,22),vN(85,`Criando uma `),Ac(86,`em`),vN(87,`issue`),ug(),vN(88,` no GitHub`),ug(),Ac(89,`ul`)(90,`li`),vN(91,`Antes de tudo, se você possui alguma questão relacionada ao uso da biblioteca, bem como dúvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos `),Ac(92,`a`,23),vN(93,`canais de comunicação`),ug(),vN(94,`.`),ug(),Ac(95,`li`),vN(96,`A lista de `),Ac(97,`em`),vN(98,`issues`),ug(),vN(99,` do repositório PO UI é de uso exclusivo para informe de `),Ac(100,`em`),vN(101,`bugs`),ug(),vN(102,` e requisições de melhorias. `),Ac(103,`em`),vN(104,`Issues`),ug(),vN(105,` que não se enquadrarem nisso serão fechadas imediatamente.`),ug(),Ac(106,`li`),vN(107,`Se você tem uma nova `),Ac(108,`em`),vN(109,`feature`),ug(),vN(110,` para nos sugerir ou então deseja reportar um bug, por favor avalie se nas `),Ac(111,`a`,24)(112,`em`),vN(113,`Pull Requests`),ug(),vN(114,` do PO UI`),ug(),vN(115,` não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.`),ug(),Ac(116,`li`),vN(117,`É requerido que você descreva de maneira clara os passos necessários para reproduzir a `),Ac(118,`em`),vN(119,`issue`),ug(),vN(120,` reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.`),ug(),Ac(121,`li`),vN(122,`As `),Ac(123,`em`),vN(124,`issues`),ug(),vN(125,` que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do `),Ac(126,`em`),vN(127,`core team`),ug(),vN(128,` por maiores evidências, o autor da `),Ac(129,`em`),vN(130,`issue`),ug(),vN(131,` terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a `),Ac(132,`em`),vN(133,`issue`),ug(),vN(134,` será fechada.`),ug()()()()(),Ac(135,`div`,17),Kc(136,`a`,25),Ac(137,`div`,19)(138,`div`,20),Kc(139,`img`,26),Ac(140,`h3`,22),vN(141,`Criando reprodução de código para nova `),Ac(142,`em`),vN(143,`issue`),ug()(),Ac(144,`ul`)(145,`li`),vN(146,`Crie uma nova aplicação em Angular incluindo o componente e o comportamento reportado para nossa análise.`),ug(),Ac(147,`li`),vN(148,`Adicione o mínimo de código necessário para reprodução do bug, facilitando assim a verificação da situação.`),ug(),Ac(149,`li`),vN(150,`Publique a aplicação no GitHub e inclua o link ao criar a issue.`),ug(),Ac(151,`li`),vN(152,`Pode-se também usar o `),Ac(153,`a`,27),vN(154,`Stackblitz`),ug(),vN(155,` para reproduzir o `),Ac(156,`em`),vN(157,`bug`),ug(),vN(158,` relatado na `),Ac(159,`em`),vN(160,`issue`),ug(),vN(161,`.`),ug(),Ac(162,`li`),vN(163,`Certifique-se de incluir os passos para reprodução da issue. Estes passos devem ser claros e simples de seguir.`),ug()()()()(),Ac(164,`div`,17),Kc(165,`a`,28),Ac(166,`div`,19)(167,`div`,20),Kc(168,`img`,29),Ac(169,`h3`,22),vN(170,`Colaborando com o PO UI`),ug(),Ac(171,`p`,30),vN(172,`Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma `),Ac(173,`em`),vN(174,`pull request`),ug(),vN(175,`, pedimos pra que você crie uma `),Ac(176,`em`),vN(177,`issue`),ug(),vN(178,` reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de bug e nos deixe ciente de que deseja criar uma `),Ac(179,`em`),vN(180,`pull request`),ug(),vN(181,` para isso. Caso se trate de uma `),Ac(182,`em`),vN(183,`issue`),ug(),vN(184,` já existente, por favor comente na `),Ac(185,`em`),vN(186,`issue`),ug(),vN(187,`. Isso nos ajuda a acompanhar as `),Ac(188,`em`),vN(189,`pull requests`),ug(),vN(190,` e também evitar duplicidades.`),ug()()()(),Ac(191,`div`,17),Kc(192,`a`,31),Ac(193,`div`,19)(194,`div`,20),Kc(195,`img`,32),Ac(196,`h3`,22),vN(197,`Setup Inicial`),ug(),Ac(198,`blockquote`,33),vN(199,`Para seguir o guia é fundamental o conhecimento da `),Ac(200,`a`,34),vN(201,`ferramenta Git.`),ug()(),Ac(202,`ul`)(203,`li`),vN(204,`Para utilizar o PO UI, é pré-requisito ter o `),Ac(205,`code`),vN(206,`Node.js`),ug(),vN(207,` instalado (versão 18.13.0 ou acima) e o seu gerenciador de pacote favorito na versão mais atual.`),ug(),Ac(208,`li`)(209,`p`),vN(210,`É importante que tenha a versão equivalente do Angular instalada. Instale-o via `),Ac(211,`code`),vN(212,`npm`),ug(),vN(213,` ou `),Ac(214,`code`),vN(215,`yarn`),ug(),vN(216,`:`),ug(),Ac(217,`p`),vN(218,`Instalando com npm:`),ug(),Ac(219,`pre`)(220,`code`),vN(221,`npm i -g @angular/cli`),ug()(),Ac(222,`p`),vN(223,`Caso opte pelo yarn:`),ug(),Ac(224,`pre`)(225,`code`),vN(226,`yarn global add @angular/cli`),ug()()(),Ac(227,`li`),vN(228,`Faça um `),Ac(229,`a`,35)(230,`em`),vN(231,`fork`),ug(),vN(232,` do repositório PO UI`),ug(),vN(233,`. `),Ac(234,`blockquote`),vN(235,`Membros do `),Ac(236,`em`),vN(237,`Core Team`),ug(),vN(238,` devem gerar uma nova `),Ac(239,`em`),vN(240,`branch`),ug(),vN(241,` ao invés do `),Ac(242,`em`),vN(243,`fork`),ug(),vN(244,`.`),ug()(),Ac(245,`li`),vN(246,`Faça `),Ac(247,`em`),vN(248,`clone`),ug(),vN(249,` do `),Ac(250,`em`),vN(251,`fork`),ug(),vN(252,` gerado.`),ug(),Ac(253,`li`),vN(254,`Execute `),Ac(255,`code`),vN(256,`npm install`),ug(),vN(257,` para instalar as dependências.`),ug()()()()(),Ac(258,`div`,17),Kc(259,`a`,36),Ac(260,`div`,19)(261,`div`,20),Kc(262,`img`,37),Ac(263,`h3`,22),vN(264,`Modificando componentes`),ug(),Ac(265,`ul`)(266,`li`),vN(267,`Localize o componente em `),Ac(268,`code`),vN(269,`projects/<projeto>/src/lib`),ug()(),Ac(270,`li`),vN(271,`É muito importante que analise nossa documentação sobre `),Ac(272,`a`,38),vN(273,`boas práticas`),ug(),vN(274,` para entender a implementação dos componentes PO UI.`),ug(),Ac(275,`li`),vN(276,`Modifique a documentação com base em nosso `),Ac(277,`a`,39),vN(278,`guia detalhado de documentação`),ug(),vN(279,`.`),ug(),Ac(280,`li`),vN(281,`Se as implementações também contemplarem estilo, note que deverá modificá-las no repositório `),Ac(282,`a`,11),vN(283,`PO UI Style`),ug(),vN(284,`.`),ug(),Ac(285,`li`),vN(286,`Faça as implementações desejadas, seja um novo componente, correção ou melhoria, e `),Ac(287,`a`,8),vN(288,`verifique no portal`),ug(),vN(289,` as modificações realizadas tanto nos `),Ac(290,`em`),vN(291,`samples`),ug(),vN(292,` quanto na documentação.`),ug()()()()(),Ac(293,`div`,17),Kc(294,`a`,40),Ac(295,`div`,19)(296,`div`,20),Kc(297,`img`,41),Ac(298,`h3`,22),vN(299,`Subindo as modificações localmente`),ug(),Ac(300,`ul`)(301,`li`)(302,`p`),vN(303,`As modificações de código e documentação realizadas podem ser conferidas executando os comandos:`),ug(),Ac(304,`pre`)(305,`code`),vN(306,`npm run build:portal && ng serve portal`),ug()()(),Ac(307,`li`),vN(308,`O navegador exibirá o portal na url `),Ac(309,`code`),vN(310,`http://localhost:4200/`),ug(),vN(311,`.`),ug(),Ac(312,`li`),vN(313,`A partir disso, navegue até o componente para verificação das modificações.`),ug(),Ac(314,`li`),vN(315,`Pedimos para que atente para a inclusão da melhoria em nossos `),Ac(316,`em`),vN(317,`samples`),ug(),vN(318,`, em especial no sample `),Ac(319,`code`),vN(320,`labs`),ug(),vN(321,`. Na inviabilidade de usar os `),Ac(322,`em`),vN(323,`samples`),ug(),vN(324,` já existentes, considere a necessidade de criar um novo `),Ac(325,`em`),vN(326,`sample`),ug(),vN(327,` de uso.`),ug()()()()(),Ac(328,`div`,17),Kc(329,`a`,42),Ac(330,`div`,19)(331,`div`,20),Kc(332,`img`,43),Ac(333,`h3`,22),vN(334,`Testes Unitários`),ug(),Ac(335,`p`),vN(336,`A cobertura de testes do PO UI é total. Isso significa que, obrigatoriamente, as modificações devem ser totalmente testadas. Para tal, execute os testes nos arquivos `),Ac(337,`em`),vN(338,`.spec`),ug(),vN(339,` contidos no mesmo diretório do componente.`),ug(),Ac(340,`p`),vN(341,`Para rodar os testes, rode o comando:`),ug(),Ac(342,`pre`)(343,`code`),vN(344,`npm run test`),ug()(),Ac(345,`p`),vN(346,`A cobertura de testes pode ser avaliada no arquivo `),Ac(347,`code`),vN(348,`index.html`),ug(),vN(349,` existente no diretório `),Ac(350,`code`),vN(351,`./coverage`),ug(),vN(352,`. `),ug()()()(),Ac(353,`div`,17),Kc(354,`a`,44),Ac(355,`div`,19)(356,`div`,20),Kc(357,`img`,45),Ac(358,`h3`,22),vN(359,`ESLint`),ug(),Ac(360,`p`),vN(361,`O PO UI utiliza o ESLint como linter padrão. Execute `),Ac(362,`code`),vN(363,`ng lint`),ug(),vN(364,` para fazer a checagem de código-fonte e verificar eventuais erros programáticos, estilísticos, construções suspeitas, entre outros.`),ug()()()(),Ac(365,`div`,17),Kc(366,`a`,46),Ac(367,`div`,19)(368,`div`,20),Kc(369,`img`,47),Ac(370,`h3`,22),vN(371,`PO Style`),ug(),Ac(372,`p`),vN(373,`As implementações de estilo do PO UI são armazenadas no `),Ac(374,`a`,48),vN(375,`repositório PO Style`),ug(),vN(376,`.`),ug(),Ac(377,`p`),vN(378,`O desenvolvimento dos estilos é aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e correções de erros.`),ug(),Ac(379,`p`),vN(380,`Para saber como você pode pode participar na melhoria dos estilos, acesse o `),Ac(381,`a`,49),vN(382,`guia de implementação de estilo`),ug(),vN(383,`.`),ug()()()(),Ac(384,`div`,17),Kc(385,`a`,50),Ac(386,`div`,19)(387,`div`,20),Kc(388,`img`,51),Ac(389,`h3`,22),vN(390,`Build das modificações`),ug(),Ac(391,`p`),vN(392,`Uma vez em que as modificações desejadas forem concluidas e a documentação esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI.`),ug(),Ac(393,`pre`)(394,`code`),vN(395,`npm run build
npm run build:portal
ng serve portal`),ug()(),Ac(396,`p`),vN(397,`Revisadas as novas funcionalidades/correções, é chegada a hora da geração de commit. Confira as `),Ac(398,`a`,52),vN(399,`regras para criação de commit`),ug(),vN(400,`.`),ug()()()(),Ac(401,`div`,17),Kc(402,`a`,53),Ac(403,`div`,19)(404,`div`,54),Kc(405,`img`,55),Ac(406,`h3`,22),vN(407,`Criando Pull Request`),ug(),Ac(408,`p`),vN(409,`Crie uma nova pull request com a master branch como base. Confira `),Ac(410,`a`,56),vN(411,`como criar pull request a partir de um fork`),ug(),vN(412,`.`),ug(),Ac(413,`p`),vN(414,`É importante que siga guia contendo as `),Ac(415,`a`,57),vN(416,`regras para geração de Pull Requests`),ug(),vN(417,`.`),ug(),Ac(418,`p`),vN(419,`Ao abrir a `),Ac(420,`em`),vN(421,`pull request`),ug(),vN(422,`, uma análise automática comenta na PR os componentes alterados, os componentes que os consomem, o risco estimado e onde testar. Use esse relatório como ponto de partida para o teste integrado.`),ug()()()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var I=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:213,vars:0,consts:[[`p-title`,`Primeiros passos`,1,`guides`,`app-portal`],[`href`,`https://cli.angular.io/`],[1,`language-json`],[`href`,`https://angular.dev/tools/cli/build-system-migration`],[`href`,`http://localhost:4200`],[1,`po-text-center`],[`src`,`./assets/graphics/app-running.png`,`width`,`660px`],[`href`,`/documentation/po-page-login`],[`href`,`/documentation/po-modal-password-recovery`],[`href`,`/documentation/po-page-blocked-user`],[`href`,`/documentation/po-page-dynamic-table`],[`href`,`/documentation`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`h3`),vN(2,`Pré-requisitos`),ug(),Ac(3,`p`),vN(4,`Para começar a utilizar o `),Ac(5,`strong`),vN(6,`PO UI`),ug(),vN(7,` é pré-requisito ter o `),Ac(8,`code`),vN(9,`Node.js`),ug(),vN(10,` instalado (versão 24.15.0 e acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `),Ac(11,`code`),vN(12,`@angular/cli`),ug(),vN(13,`, instale-o via `),Ac(14,`code`),vN(15,`npm`),ug(),vN(16,` ou `),Ac(17,`code`),vN(18,`yarn`),ug(),vN(19,`.`),ug(),Ac(20,`p`),vN(21,`Instalando com npm:`),ug(),Ac(22,`pre`)(23,`code`),vN(24,`npm i -g @angular/cli@22
`),ug()(),Ac(25,`p`),vN(26,`Caso prefira instalar com o yarn:`),ug(),Ac(27,`pre`)(28,`code`),vN(29,`yarn global add @angular/cli@22
`),ug()(),Ac(30,`h3`),vN(31,`Passo 1 - Crie o seu primeiro projeto`),ug(),Ac(32,`blockquote`)(33,`p`),vN(34,`Caso você já tenha um projeto criado e deseje apenas incluir o `),Ac(35,`strong`),vN(36,`Po`),ug(),vN(37,`, pule esta etapa e vá para o `),Ac(38,`strong`),vN(39,`Passo 1.1`),ug(),vN(40,`.`),ug()(),Ac(41,`p`),vN(42,`O `),Ac(43,`a`,1),vN(44,`Angular CLI`),ug(),vN(45,` se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:`),ug(),Ac(46,`pre`)(47,`code`),vN(48,`ng new my-po-project --skip-install
`),ug()(),Ac(49,`blockquote`)(50,`p`),vN(51,`O parâmetro `),Ac(52,`code`),vN(53,`--skip-install`),ug(),vN(54,` permite criar o projeto, contudo, não instalará as dependências automaticamente.`),ug()(),Ac(55,`h4`),vN(56,`Passo 1.1 - Instalando as dependências`),ug(),Ac(57,`p`),vN(58,`Antes de executar a instalação ou inserir o `),Ac(59,`strong`),vN(60,`Po`),ug(),vN(61,` no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do `),Ac(62,`strong`),vN(63,`Po`),ug(),vN(64,` e Angular (elas podem ser encontradas no arquivo `),Ac(65,`code`),vN(66,`package.json`),ug(),vN(67,` localizado na raiz da aplicação).`),ug(),Ac(68,`p`),vN(69,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),ug(),Ac(70,`pre`)(71,`code`,2),vN(72,`  "dependencies": {
    "@angular/common": "~22.0.1",
    "@angular/compiler": "~22.0.1",
    "@angular/core": "~22.0.1",
    "@angular/forms": "~22.0.1",
    "@angular/platform-browser": "~22.0.1",
    "@angular/router": "~22.0.1",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
    ...
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.0.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.0.1",
    "@angular/compiler-cli": "~22.0.1",
    ...
    "typescript": "~6.0.3",
    "vitest": "^4.0.0"
  }
`),ug()(),Ac(73,`p`),vN(74,`Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:`),ug(),Ac(75,`p`),vN(76,`Instalando com npm:`),ug(),Ac(77,`pre`)(78,`code`),vN(79,`npm install
`),ug()(),Ac(80,`p`),vN(81,`Caso prefira instalar com o yarn:`),ug(),Ac(82,`pre`)(83,`code`),vN(84,`yarn install
`),ug()(),Ac(85,`h3`),vN(86,`Observação para Angular 19+`),ug(),Ac(87,`p`),vN(88,`Em versões mais recentes do Angular, o projeto utiliza, por padrão, novo build system baseado em `),Ac(89,`strong`),vN(90,`@angular/build`),ug(),vN(91,`. `),ug(),Ac(92,`p`),vN(93,`Verifique se o pacote está declarado em `),Ac(94,`strong`),vN(95,`devDependencies`),ug(),vN(96,`. Além disso, valide no arquivo angular.json se o builder está configurado para `),Ac(97,`strong`),vN(98,`@angular/build:`),ug(),vN(99,`*:`),ug(),Ac(100,`pre`)(101,`code`),vN(102,`"projects": {
  "app-name": {
    "architect": {
      "build": {
        "builder": "@angular/build:application"
      } ,
      "serve": {
        "builder": "@angular/build:dev-server"
      }
    }
  }
}
`),ug()(),Ac(103,`p`),vN(104,`Para maiores informações veja na documentação oficial do `),Ac(105,`a`,3),vN(106,`Angular`),ug(),vN(107,`.`),ug(),Ac(108,`h3`),vN(109,`Passo 2 - Adicionando o pacote @po-ui/ng-components`),ug(),Ac(110,`p`),vN(111,`Utilizando o comando `),Ac(112,`code`),vN(113,`ng add`),ug(),vN(114,` do `),Ac(115,`a`,1),vN(116,`Angular CLI`),ug(),vN(117,`, vamos adicionar o `),Ac(118,`strong`),vN(119,`Po`),ug(),vN(120,` em seu projeto e o mesmo se encarregará de configurar o tema, instalar o pacote e importar o módulo do `),Ac(121,`strong`),vN(122,`Po`),ug(),vN(123,`. Além de importar também o modulo `),Ac(124,`strong`),vN(125,`HttpClientModule`),ug(),vN(126,`.`),ug(),Ac(127,`p`),vN(128,`Execute o comando abaixo na pasta raiz do seu projeto:`),ug(),Ac(129,`pre`)(130,`code`),vN(131,`ng add @po-ui/ng-components@next
`),ug()(),Ac(132,`blockquote`)(133,`p`),vN(134,`Ao executar o comando acima, será perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, página e toolbar, utilizando componentes do `),Ac(135,`strong`),vN(136,`Po`),ug(),vN(137,`, `),Ac(138,`strong`),vN(139,`caso desejar, apenas informe: `),Ac(140,`code`),vN(141,`Y`),ug()(),vN(142,`.`),ug()(),Ac(143,`h3`),vN(144,`Passo 3 - Rode o seu projeto`),ug(),Ac(145,`p`),vN(146,`Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no `),Ac(147,`em`),vN(148,`browser`),ug(),vN(149,` ;).`),ug(),Ac(150,`pre`)(151,`code`),vN(152,`ng serve
`),ug()(),Ac(153,`p`),vN(154,`Abra o `),Ac(155,`em`),vN(156,`browser`),ug(),vN(157,` e acesse a url `),Ac(158,`a`,4),vN(159,`http://localhost:4200`),ug(),vN(160,`. Pronto! Se você escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:`),ug(),Ac(161,`p`,5),Kc(162,`img`,6),ug(),Kc(163,`hr`),Ac(164,`h3`),vN(165,`E agora?`),ug(),Ac(166,`p`),vN(167,`Agora é só abrir seu `),Ac(168,`strong`),vN(169,`editor / IDE`),ug(),vN(170,` favorito e começar a trabalhar no seu projeto.`),ug(),Ac(171,`p`),vN(172,`Caso você queira utilizar nossos componentes de templates, como o `),Ac(173,`strong`)(174,`a`,7),vN(175,`po-page-login`),ug()(),vN(176,`, `),Ac(177,`strong`)(178,`a`,8),vN(179,`po-modal-password-recovery`),ug()(),vN(180,`, `),Ac(181,`strong`)(182,`a`,9),vN(183,`po-page-blocked-user`),ug()(),vN(184,`, `),Ac(185,`strong`)(186,`a`,10),vN(187,`po-page-dynamic-table`),ug()(),vN(188,` entre outros, basta adicionar o pacote `),Ac(189,`code`),vN(190,`@po-ui/ng-templates`),ug(),vN(191,` executando o comando abaixo:`),ug(),Ac(192,`pre`)(193,`code`),vN(194,`ng add @po-ui/ng-templates@next
`),ug()(),Ac(195,`blockquote`)(196,`p`),vN(197,`Ao executar este comando, será instalado o pacote `),Ac(198,`code`),vN(199,`@po-ui/ng-templates`),ug(),vN(200,` e configurado o `),Ac(201,`code`),vN(202,`PoTemplatesModules`),ug(),vN(203,` no `),Ac(204,`code`),vN(205,`app.module`),ug(),vN(206,` somente se sua aplicação for configurada com módulos.`),ug()(),Ac(207,`p`),vN(208,`A partir dai o seu projeto está preparado para receber outros componentes do `),Ac(209,`strong`)(210,`a`,11),vN(211,`Po`),ug()(),vN(212,`! \\o/`),ug()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var j=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:257,vars:0,consts:[[`p-title`,`Guia de uso para Gráficos`,1,`guides`,`app-portal`],[`href`,`guides/guide-charts#area`],[`href`,`guides/guide-charts#bar`],[`href`,`guides/guide-charts#column`],[`href`,`guides/guide-charts#column-line`],[`href`,`guides/guide-charts#gauge-semicircle`],[`href`,`guides/guide-charts#line`],[`href`,`guides/guide-charts#pie`],[`href`,`guides/guide-charts#donut`],[`href`,`guides/guide-charts#radar`],[`href`,`guides/guide-charts#guide-colors`],[`id`,`area`],[`id`,`bar`],[`id`,`column`],[`id`,`column-line`],[`id`,`gauge-semicircle`],[`id`,`line`],[`id`,`pie`],[`id`,`donut`],[`id`,`radar`],[`id`,`guide-colors`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Este guia tem o objetivo de informar práticas de uso para cada tipo de gráfico do PO UI, o que devemos evitar ao utilizar determinado gráfico e também as boas práticas relacionadas às cores nos gráficos.`),ug(),Ac(3,`p`),vN(4,`Gráficos em geral têm a função de garantir que as pessoas de qualquer cultura ou país tenham entendimento claro para tomar as melhores decisões com base nas suas visualizações.`),ug(),Ac(5,`h2`),vN(6,`Conteúdo`),ug(),Ac(7,`ul`)(8,`li`)(9,`a`,1),vN(10,`Gráfico de área`),ug()(),Ac(11,`li`)(12,`a`,2),vN(13,`Gráfico de barra`),ug()(),Ac(14,`li`)(15,`a`,3),vN(16,`Gráfico de coluna`),ug()(),Ac(17,`li`)(18,`a`,4),vN(19,`Gráfico de coluna com linha`),ug()(),Ac(20,`li`)(21,`a`,5),vN(22,`Gráfico de gauge semicircular`),ug()(),Ac(23,`li`)(24,`a`,6),vN(25,`Gráfico de linha`),ug()(),Ac(26,`li`)(27,`a`,7),vN(28,`Gráfico de pizza`),ug()(),Ac(29,`li`)(30,`a`,8),vN(31,`Gráfico de rosca`),ug()(),Ac(32,`li`)(33,`a`,9),vN(34,`Gráfico de radar`),ug()(),Ac(35,`li`)(36,`a`,10),vN(37,`Guia de cores`),ug()()(),Kc(38,`br`),Ac(39,`p`),Kc(40,`a`,11),ug(),Ac(41,`h2`),vN(42,`Gráfico de área (Area Chart)`),ug(),Ac(43,`p`),vN(44,`O gráfico de área combina o gráfico de linhas e o gráfico de barras para mostrar como os valores numéricos de um ou mais grupos mudam ao longo da progressão de uma segunda variável, normalmente a do tempo. Um gráfico de área se distingue de um gráfico de linha pela adição de sombreamento entre as linhas e uma linha de base, como em um gráfico de barras.`),ug(),Ac(45,`p`),vN(46,`A versão disponível no PO UI é o gráfico de área de sobreposição ou em inglês, `),Ac(47,`em`),vN(48,`overlapping area chart`),ug(),vN(49,`.`),ug(),Ac(50,`h4`),vN(51,`Quando usar?`),ug(),Ac(52,`ul`)(53,`li`),vN(54,`Para representar os totais acumulados usando números ou porcentagens (gráficos de área empilhados, neste caso) ao longo do tempo;`),ug(),Ac(55,`li`),vN(56,`Mostrar tendências ao longo do tempo entre os atributos relacionados.`),ug()(),Kc(57,`br`),Ac(58,`p`),Kc(59,`a`,12),ug(),Ac(60,`h2`),vN(61,`Gráfico de barra (Bar Chart)`),ug(),Ac(62,`p`),vN(63,`O gráfico de barra é organizado de forma temporal ou por tópicos ao longo do eixo vertical (y) e seus valores têm variação ao longo do eixo vertical (x). É uma variação direta da estrutura do gráfico de coluna.`),ug(),Ac(64,`h4`),vN(65,`Quando usar?`),ug(),Ac(66,`ul`)(67,`li`),vN(68,`Demonstrar as variações de dados em um período de tempo;`),ug(),Ac(69,`li`),vN(70,`Ilustrar comparações entre tópicos diretamente relacionados.`),ug()(),Ac(71,`h4`),vN(72,`Boas práticas`),ug(),Ac(73,`p`),vN(74,`Prefira utilizar o gráfico de barra quando for necessário muitos itens temporais ou de tópicos.`),ug(),Kc(75,`br`),Ac(76,`p`),Kc(77,`a`,13),ug(),Ac(78,`h2`),vN(79,`Gráfico de coluna (Column Chart)`),ug(),Ac(80,`p`),vN(81,`O gráfico de coluna é organizado de forma temporal ou por tópicos ao longo do eixo horizontal (x) e seus valores têm variação ao longo do eixo vertical (y).`),ug(),Ac(82,`h4`),vN(83,`Quando usar?`),ug(),Ac(84,`ul`)(85,`li`),vN(86,`Demonstrar as variações de dados em um período de tempo;`),ug(),Ac(87,`li`),vN(88,`Ilustrar comparações entre tópicos diretamente relacionados.`),ug()(),Ac(89,`h4`),vN(90,`Boas práticas`),ug(),Ac(91,`p`),vN(92,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),ug(),Kc(93,`br`),Ac(94,`p`),Kc(95,`a`,14),ug(),Ac(96,`h2`),vN(97,`Gráfico de pareto / coluna com linha (Column and Line Chart)`),ug(),Ac(98,`p`),vN(99,`O gráfico de pareto contém colunas e um gráfico de linhas, onde os valores individuais são representados em ordem decrescente por colunas e o total acumulado é representado pela linha.`),ug(),Ac(100,`h4`),vN(101,`Quando usar?`),ug(),Ac(102,`ul`)(103,`li`),vN(104,`Destacar o mais importante entre um conjunto de fatores, por exemplo:`),Ac(105,`ul`)(106,`li`),vN(107,`Sempre que uma equipe não estiver certa sobre onde direcionar seus esforços de melhoria deve usar uma análise de pareto.`),ug()()()(),Kc(108,`br`),Ac(109,`p`),Kc(110,`a`,15),ug(),Ac(111,`h2`),vN(112,`Gráfico de gauge semicircular (Semi Circle Gauge Chart)`),ug(),Ac(113,`p`),vN(114,`O gráfico de gauge semicircular é uma variação direta do gauge tradicional.`),ug(),Ac(115,`h4`),vN(116,`Quando usar?`),ug(),Ac(117,`ul`)(118,`li`),vN(119,`Demonstrar cálculos de desempenho por um certo período (em andamento ou como histórico), por exemplo: `),Ac(120,`ul`)(121,`li`),vN(122,`Desempenho de vendas de uma equipe em relação a meta.`),ug()()()(),Kc(123,`br`),Ac(124,`p`),Kc(125,`a`,16),ug(),Ac(126,`h2`),vN(127,`Gráfico de linha (Line Chart)`),ug(),Ac(128,`p`),vN(129,`O gráfico de linha pode exibir dados contínuos ao longo de um período de tempo, definidos em relação a uma escala comum. Os dados de categorias são comumente distribuídos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem variação são subdivididos igualmente ao longo do eixo vertical. `),ug(),Ac(130,`h4`),vN(131,`Quando usar?`),ug(),Ac(132,`ul`)(133,`li`),vN(134,`Quando deseja exibir tendências nos dados ao longo do tempo, por exemplo:`),Ac(135,`ul`)(136,`li`),vN(137,`Demonstrar a alteração no preço das ações em um período de tempo;`),ug(),Ac(138,`li`),vN(139,`Quantidade de visitas em um site durante um mês.`),ug()()()(),Ac(140,`h4`),vN(141,`Boas práticas`),ug(),Ac(142,`ul`)(143,`li`),vN(144,`Ideal para demonstrar a frequência em que ocorrem os dados;`),ug(),Ac(145,`li`),vN(146,`Não é recomendado para caso de distribuição de dados, neste caso pode-se utilizar o gráfico de coluna.`),ug()(),Kc(147,`br`),Ac(148,`p`),Kc(149,`a`,17),ug(),Ac(150,`h2`),vN(151,`Gráfico de pizza (Pie Chart)`),ug(),Ac(152,`p`),vN(153,`O gráfico de pizza ou torta é adequado para mostrar partes divididas de um todo, pois representa fatias que somadas compõem 100% da forma.`),ug(),Ac(154,`h4`),vN(155,`Quando usar?`),ug(),Ac(156,`ul`)(157,`li`),vN(158,`Para demonstrar proporções, por exemplo:`),Ac(159,`ul`)(160,`li`),vN(161,`Porcentagem de orçamento gasto em diferentes departamentos;`),ug(),Ac(162,`li`),vN(163,`Respostas de pesquisa;`),ug(),Ac(164,`li`),vN(165,`Divisão de tempo em uma atividade.`),ug()()()(),Ac(166,`h4`),vN(167,`Boas práticas`),ug(),Ac(168,`ul`)(169,`li`),vN(170,`Não é recomendado para comparar dados;`),ug(),Ac(171,`li`),vN(172,`Evite gráficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gráfico ou visualização dos valores.`),ug()(),Kc(173,`br`),Ac(174,`p`),Kc(175,`a`,18),ug(),Ac(176,`h2`),vN(177,`Gráfico de rosca (Donut Chart)`),ug(),Ac(178,`p`),vN(179,`O gráfico de rosca é adequado para mostrar partes de um todo, pois representa fatias que somadas compõem 100% de algo. É uma variação visual do gráfico de pizza.`),ug(),Ac(180,`h4`),vN(181,`Quando usar?`),ug(),Ac(182,`ul`)(183,`li`),vN(184,`Para demonstrar proporções comparativas em porcentagem ou quantidade.`),ug()(),Ac(185,`h4`),vN(186,`Boas práticas:`),ug(),Ac(187,`p`),vN(188,`O valor mínimo de visualização deve ser de 10% do total para demonstrar as informações no gráfico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sessão agrupada "Outros" e especifique o conteúdo que o compõe na legenda.`),ug(),Kc(189,`br`),Ac(190,`p`),Kc(191,`a`,19),ug(),Ac(192,`h2`),vN(193,`Gráfico de radar (Radar Chart)`),ug(),Ac(194,`p`),vN(195,`O gráfico de radar é utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),ug(),Ac(196,`h4`),vN(197,`Quando usar?`),ug(),Ac(198,`ul`)(199,`li`),vN(200,`Para demonstrar cenários onde é preciso avaliar e apresentar um "perfil" de desempenho de algo/alguém.`),ug()(),Kc(201,`br`),Ac(202,`p`),Kc(203,`a`,20),ug(),Ac(204,`h2`),vN(205,`Guia de cores`),ug(),Ac(206,`h4`),vN(207,`Boas práticas`),ug(),Ac(208,`ul`)(209,`li`),vN(210,`Use uma única cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas mês a mês em um gráfico de barras, use uma única cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gráfico agrupado, prefira utilizar uma cor diferente para cada ano;`),ug(),Ac(211,`li`),vN(212,`Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimilação do usuário referente às informações traduzidas no gráfico;`),ug(),Ac(213,`li`),vN(214,`Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecessário ou direcionamento errado aos dados.`),ug(),Ac(215,`li`),vN(216,`Prefira utilizar uma única cor com sombra variável ou um espectro entre duas cores análogas para mostrar intensidade;`),ug(),Ac(217,`li`),vN(218,`Destaque a informação mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gráfico.`),ug()(),Ac(219,`h4`),vN(220,`Evite`),ug(),Ac(221,`ul`)(222,`li`),vN(223,`Não use vermelho para números positivos ou verde para números negativos. Essas associações de cores são decisivas na interpretação do usuário;`),ug(),Ac(224,`li`),vN(225,`Não utilize combinações de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);`),ug(),Ac(226,`li`),vN(227,`Não utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca).`),ug()(),Ac(228,`h4`),vN(229,`Opções de combinação de cores`),ug(),Ac(230,`p`),vN(231,`Modelos de cores que podem combinar e facilitar a visualização dos gráficos: `),ug(),Ac(232,`ul`)(233,`li`)(234,`p`),vN(235,`Cinza e azul:`),ug(),Ac(236,`ul`)(237,`li`),vN(238,`Para informações de atual e passado, mas atenção com o nível do contraste para que sejam legíveis as diferenças entre os dados;`),ug()()(),Ac(239,`li`)(240,`p`),vN(241,`Azul e laranja:`),ug(),Ac(242,`ul`)(243,`li`),vN(244,`Azul para indicação de dados positivos e laranja para negativos;`),ug()()(),Ac(245,`li`)(246,`p`),vN(247,`Verde e vermelho:`),ug(),Ac(248,`ul`)(249,`li`),vN(250,`Verde sinaliza dados positivo e vermelho os negativos;`),ug()()(),Ac(251,`li`)(252,`p`),vN(253,`Azul, cinza e verde:`),ug(),Ac(254,`ul`)(255,`li`),vN(256,`Para uma composição de três cores.`),ug()()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var k=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:432,vars:0,consts:[[`p-title`,`Migração do PO UI para V2`,1,`guides`,`app-portal`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui-v2#components`],[`href`,`guides/migration-poui-v2#sync`],[`id`,`components`],[1,`po-text-color-neutral-dark-40`],[`href`,`http://po-ui.io/documentation/po-page-change-password`],[`href`,`http://po-ui.io/documentation/po-button-group`],[`href`,`http://po-ui.io/documentation/po-menu`],[`href`,`http://po-ui.io/documentation/po-menu-panel`],[`href`,`http://po-ui.io/documentation/po-navbar`],[`href`,`http://po-ui.io/documentation/po-page-list`],[`href`,`http://po-ui.io/documentation/po-page-default`],[`href`,`http://po-ui.io/documentation/po-popup`],[`href`,`http://po-ui.io/documentation/po-step`],[`href`,`http://po-ui.io/documentation/po-table`],[`href`,`http://po-ui.io/documentation/po-toolbar`],[`id`,`sync`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Este guia contém informações sobre a migração do seu projeto para a versão 2 do PO UI.`),ug(),Ac(3,`h2`),vN(4,`Atualizando o projeto com Angular`),ug(),Ac(5,`p`),vN(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),ug(),Ac(7,`p`)(8,`code`),vN(9,`ng update @angular/cli@9 @angular/core@9`),ug()(),Ac(10,`blockquote`)(11,`p`),vN(12,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Ac(13,`a`,1)(14,`strong`),vN(15,`Guia de Upgrade do Angular`),ug()(),vN(16,`.`),ug()(),Ac(17,`p`),vN(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),Ac(19,`em`),vN(20,`flag`),ug(),Ac(21,`code`),vN(22,`--force`),ug(),vN(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Ac(24,`em`),vN(25,`flags`),ug(),vN(26,` disponíveis veja a `),Ac(27,`a`,2)(28,`strong`),vN(29,`documentação do ng update`),ug()(),vN(30,`.`),ug(),Ac(31,`h2`),vN(32,`Atualizando o PO UI`),ug(),Ac(33,`p`),vN(34,`Para facilitar a migração do seu projeto para o PO UI v2, implementamos o `),Ac(35,`code`),vN(36,`ng update`),ug(),vN(37,` nos pacotes abaixo:`),ug(),Ac(38,`ul`)(39,`li`)(40,`a`,3)(41,`strong`),vN(42,`@po-ui/ng-components`),ug()()(),Ac(43,`li`)(44,`a`,4)(45,`strong`),vN(46,`@po-ui/ng-sync`),ug()()()(),Ac(47,`p`),vN(48,`O `),Ac(49,`code`),vN(50,`ng update`),ug(),vN(51,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),ug(),Ac(52,`ul`)(53,`li`),vN(54,`Alterar maioria dos conteúdos relacionados ao `),Ac(55,`strong`),vN(56,`BREAKING CHANGES`),ug(),vN(57,` e `),Ac(58,`strong`),vN(59,`Depreciações`),ug(),vN(60,` no seu projeto;`),ug(),Ac(61,`li`),vN(62,`Atualizar as versões dos pacotes `),Ac(63,`code`),vN(64,`@po-ui`),ug(),vN(65,`.`),ug()(),Ac(66,`p`),vN(67,`Mas é importante conhecer os `),Ac(68,`strong`),vN(69,`BREAKING CHANGES`),ug(),vN(70,` e `),Ac(71,`strong`),vN(72,`Depreciações`),ug(),vN(73,` para realizar as alterações manualmente caso necessário.`),ug(),Ac(74,`p`),Kc(75,`a`,5),ug(),Ac(76,`h3`),vN(77,`ng update @po-ui/ng-components`),ug(),Ac(78,`p`),vN(79,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),ug(),Ac(80,`p`)(81,`code`),vN(82,`npm i --save @po-ui/ng-components@2`),ug()(),Ac(83,`p`)(84,`code`),vN(85,`ng update @po-ui/ng-components --from 1 --migrate-only`),ug()(),Ac(86,`h4`),vN(87,`Breaking Changes`),ug(),Ac(88,`p`),vN(89,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),ug(),Ac(90,`table`)(91,`thead`)(92,`tr`)(93,`th`,6),vN(94,`Pacotes`),ug(),Ac(95,`th`,6),vN(96,`Substituído por`),ug()()(),Ac(97,`tbody`)(98,`tr`)(99,`td`)(100,`code`),vN(101,`@portinari/portinari-ui`),ug()(),Ac(102,`td`)(103,`code`),vN(104,`@po-ui/ng-components`),ug()()(),Ac(105,`tr`)(106,`td`)(107,`code`),vN(108,`@portinari/portinari-templates`),ug()(),Ac(109,`td`)(110,`code`),vN(111,`@po-ui/ng-templates`),ug()()(),Ac(112,`tr`)(113,`td`)(114,`code`),vN(115,`@portinari/portinari-code-editor`),ug()(),Ac(116,`td`)(117,`code`),vN(118,`@po-ui/ng-code-editor`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`@portinari/tslint`),ug()(),Ac(123,`td`)(124,`code`),vN(125,`@po-ui/ng-tslint`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`@portinari/style`),ug()(),Ac(130,`td`)(131,`code`),vN(132,`@po-ui/style`),ug()()()()(),Ac(133,`p`),vN(134,`Também foi realizado remoções das propriedades, onde passam a valer as novas definições, veja a tabela abaixo:`),ug(),Ac(135,`table`)(136,`thead`)(137,`tr`)(138,`th`,6),vN(139,`Componentes`),ug(),Ac(140,`th`,6),vN(141,`Anteriormente`),ug(),Ac(142,`th`,6),vN(143,`Substituído por`),ug()()(),Ac(144,`tbody`)(145,`tr`)(146,`td`)(147,`code`),vN(148,`PoFieldModule`),ug()(),Ac(149,`td`)(150,`code`),vN(151,`[p-focus]`),ug()(),Ac(152,`td`)(153,`code`),vN(154,`[p-auto-focus]`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`code`),vN(158,`PoHttpResquestInterceptor`),ug()(),Ac(159,`td`)(160,`code`),vN(161,`X-Portinari-Screen-Lock`),ug()(),Ac(162,`td`)(163,`code`),vN(164,`X-PO-Screen-Lock`),ug()()(),Ac(165,`tr`)(166,`td`)(167,`code`),vN(168,`PoHttpResquestInterceptor`),ug()(),Ac(169,`td`)(170,`code`),vN(171,`X-Portinari-No-Count-Pending-Requests`),ug()(),Ac(172,`td`)(173,`code`),vN(174,`X-PO-No-Count-Pending-Requests`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`code`),vN(178,`PoHttpInterceptor`),ug()(),Ac(179,`td`)(180,`code`),vN(181,`X-Portinari-No-Message`),ug()(),Ac(182,`td`)(183,`code`),vN(184,`X-PO-No-Message`),ug()()(),Ac(185,`tr`)(186,`td`)(187,`code`),vN(188,`PoPageEdit`),ug()(),Ac(189,`td`,6),vN(190,`Possuir a ação `),Ac(191,`code`),vN(192,`cancel() {}`),ug(),vN(193,` no TS`),ug(),Ac(194,`td`)(195,`code`),vN(196,`(p-cancel)`),ug()()(),Ac(197,`tr`)(198,`td`)(199,`code`),vN(200,`PoPageEdit`),ug()(),Ac(201,`td`,6),vN(202,`Possuir a ação `),Ac(203,`code`),vN(204,`save() {}`),ug(),vN(205,` no TS`),ug(),Ac(206,`td`)(207,`code`),vN(208,`(p-save)`),ug()()(),Ac(209,`tr`)(210,`td`)(211,`code`),vN(212,`PoPageEdit`),ug()(),Ac(213,`td`,6),vN(214,`Possuir a ação `),Ac(215,`code`),vN(216,`saveNew() {}`),ug(),vN(217,` no TS`),ug(),Ac(218,`td`)(219,`code`),vN(220,`(p-save-new)`),ug()()(),Ac(221,`tr`)(222,`td`)(223,`code`),vN(224,`PoPageDetail`),ug()(),Ac(225,`td`,6),vN(226,`Possuir a ação `),Ac(227,`code`),vN(228,`back() {}`),ug(),vN(229,` no TS`),ug(),Ac(230,`td`)(231,`code`),vN(232,`(p-back)`),ug()()(),Ac(233,`tr`)(234,`td`)(235,`code`),vN(236,`PoPageDetail`),ug()(),Ac(237,`td`,6),vN(238,`Possuir a ação `),Ac(239,`code`),vN(240,`edit() {}`),ug(),vN(241,` no TS`),ug(),Ac(242,`td`)(243,`code`),vN(244,`(p-edit)`),ug()()(),Ac(245,`tr`)(246,`td`)(247,`code`),vN(248,`PoPageDetail`),ug()(),Ac(249,`td`,6),vN(250,`Possuir a ação `),Ac(251,`code`),vN(252,`remove() {}`),ug(),vN(253,` no TS`),ug(),Ac(254,`td`)(255,`code`),vN(256,`(p-remove)`),ug()()()()(),Ac(257,`h4`),vN(258,`Depreciação`),ug(),Ac(259,`p`),vN(260,`Nas versões `),Ac(261,`code`),vN(262,`1.x.x`),ug(),vN(263,` era possível passar funções para nossas propriedades sem informar o `),Ac(264,`code`),vN(265,`.bind(this)`),ug(),vN(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),Ac(267,`code`),vN(268,`.bind(this)`),ug(),vN(269,` para que o mesmo execute a função no contexto invocado, tanto em funções dentro de `),Ac(270,`em`),vN(271,`arrays`),ug(),vN(272,` quanto em funções via `),Ac(273,`em`),vN(274,`property bind`),ug(),vN(275,`.`),ug(),Ac(276,`p`),vN(277,`Os componentes que sofrerão esta depreciação, são:`),ug(),Ac(278,`ul`)(279,`li`)(280,`a`,7)(281,`strong`),vN(282,`PageChangePassword`),ug()()(),Ac(283,`li`)(284,`a`,8)(285,`strong`),vN(286,`ButtonGroup`),ug()()(),Ac(287,`li`)(288,`a`,9)(289,`strong`),vN(290,`Menu`),ug()()(),Ac(291,`li`)(292,`a`,10)(293,`strong`),vN(294,`MenuPanel`),ug()()(),Ac(295,`li`)(296,`a`,11)(297,`strong`),vN(298,`Navbar`),ug()()(),Ac(299,`li`)(300,`a`,12)(301,`strong`),vN(302,`PageList`),ug()()(),Ac(303,`li`)(304,`a`,13)(305,`strong`),vN(306,`PageDefault`),ug()()(),Ac(307,`li`)(308,`a`,14)(309,`strong`),vN(310,`Popup`),ug()()(),Ac(311,`li`)(312,`a`,15)(313,`strong`),vN(314,`Stepper`),ug()()(),Ac(315,`li`)(316,`a`,16)(317,`strong`),vN(318,`Table`),ug()()(),Ac(319,`li`)(320,`a`,17)(321,`strong`),vN(322,`Toolbar`),ug()()()(),Ac(323,`p`),vN(324,`Abaixo listamos dois exemplos comparativos com essas depreciações em alguns componentes.`),ug(),Ac(325,`p`),vN(326,`Exemplo via funções dentro de arrays:`),ug(),Ac(327,`ul`)(328,`li`),vN(329,`Antes:`),ug()(),Ac(330,`pre`)(331,`code`),vN(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),ug()(),Ac(333,`pre`)(334,`code`),vN(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),ug()(),Ac(336,`ul`)(337,`li`),vN(338,`Agora:`),ug()(),Ac(339,`pre`)(340,`code`),vN(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),ug()(),Ac(342,`pre`)(343,`code`),vN(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),ug()(),Ac(345,`p`),vN(346,`Exemplo funções via `),Ac(347,`em`),vN(348,`property bind`),ug()(),Ac(349,`ul`)(350,`li`),vN(351,`Antes:`),ug()(),Ac(352,`pre`)(353,`code`),vN(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),ug()(),Ac(355,`ul`)(356,`li`),vN(357,`Agora:`),ug()(),Ac(358,`pre`)(359,`code`),vN(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),ug()(),Ac(361,`p`),Kc(362,`a`,18),ug(),Ac(363,`h3`),vN(364,`ng update @po-ui/ng-sync`),ug(),Ac(365,`p`),vN(366,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),ug(),Ac(367,`p`)(368,`code`),vN(369,`npm i --save @po-ui/ng-sync@2`),ug()(),Ac(370,`p`)(371,`code`),vN(372,`ng update @po-ui/ng-sync --from 1 --migrate-only`),ug()(),Ac(373,`h4`),vN(374,`Breaking Changes`),ug(),Ac(375,`p`),vN(376,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),ug(),Ac(377,`table`)(378,`thead`)(379,`tr`)(380,`th`,6),vN(381,`Pacotes`),ug(),Ac(382,`th`,6),vN(383,`Substituído por`),ug()()(),Ac(384,`tbody`)(385,`tr`)(386,`td`)(387,`code`),vN(388,`@portinari/portinari-sync`),ug()(),Ac(389,`td`)(390,`code`),vN(391,`@po-ui/ng-sync`),ug()()(),Ac(392,`tr`)(393,`td`)(394,`code`),vN(395,`@portinari/portinari-storage`),ug()(),Ac(396,`td`)(397,`code`),vN(398,`@po-ui/ng-storage`),ug()()(),Ac(399,`tr`)(400,`td`)(401,`code`),vN(402,`@portinari/tslint`),ug()(),Ac(403,`td`)(404,`code`),vN(405,`@po-ui/ng-tslint`),ug()()()()(),Ac(406,`h4`),vN(407,`Depreciação`),ug(),Ac(408,`p`),vN(409,`Também foi realizada uma depreciação, onde ainda será aceito o modelo anterior, porém na versão 3 será removido.`),ug(),Ac(410,`p`),vN(411,`A depreciação ocorreu no retorno do `),Ac(412,`code`),vN(413,`Endpoint de sincronização`),ug(),vN(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),Ac(415,`code`),vN(416,`portinari_sync_date`),ug(),vN(417,`, que agora passa a ser `),Ac(418,`code`),vN(419,`po_sync_date`),ug(),vN(420,`, veja o antes e depois:`),ug(),Ac(421,`pre`)(422,`code`),vN(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),ug()(),Ac(424,`p`),vN(425,`A propriedade `),Ac(426,`code`),vN(427,`portinari_sync_date`),ug(),vN(428,` foi depreciada e o nova propriedade é:`),ug(),Ac(429,`pre`)(430,`code`),vN(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var w=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:221,vars:0,consts:[[`p-title`,`Migração do PO UI`,1,`guides`,`app-portal`],[`href`,`guides/migration-poui-v2`],[`href`,`https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui#components`],[`href`,`guides/migration-poui#sync`],[`id`,`components`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`sync`],[`href`,`guides/deprecations`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Este guia contém informações sobre a migração do seu projeto para a versão mais atualizada do PO UI.`),ug(),Ac(3,`blockquote`)(4,`p`),vN(5,`Caso você não estiver utilizando a versão anterior da mais atualizada, é importante realizar a migração para a mesma.`),ug()(),Ac(6,`blockquote`)(7,`p`),vN(8,`Se seu projeto estiver na v1, veja este Guia de Migração do PO UI para `),Ac(9,`a`,1)(10,`strong`),vN(11,`V2`),ug()(),vN(12,`.`),ug()(),Ac(13,`h2`),vN(14,`Atualizando o projeto com Angular`),ug(),Ac(15,`p`),vN(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),Ac(17,`a`,2),vN(18,`tabela de compatibilidade`),ug(),vN(19,` em nosso Github Wiki.`),ug(),Ac(20,`blockquote`)(21,`p`),vN(22,`Caso o seu projeto não possua a dependência `),Ac(23,`code`),vN(24,`@angular-devkit/schematics`),ug(),vN(25,`, realize a instalação do pacote para o nosso script de atualização funcionar corretamente:`),ug()(),Ac(26,`pre`)(27,`code`),vN(28,`npm install @angular-devkit/schematics --save-dev
`),ug()(),Ac(29,`p`),vN(30,`Para atualizar o Angular, execute o comando abaixo:`),ug(),Ac(31,`pre`)(32,`code`),vN(33,`ng update @angular/cli@<version> @angular/core@<version> --force
`),ug()(),Ac(34,`p`),vN(35,`Por exemplo:`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`ng update @angular/cli@22 @angular/core@22 --force
`),ug()(),Ac(39,`blockquote`)(40,`p`),vN(41,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Ac(42,`a`,3)(43,`strong`),vN(44,`Guia de Upgrade do Angular`),ug()(),vN(45,`.`),ug()(),Ac(46,`p`),vN(47,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),Ac(48,`em`),vN(49,`flag`),ug(),Ac(50,`code`),vN(51,`--force`),ug(),vN(52,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Ac(53,`em`),vN(54,`flags`),ug(),vN(55,` disponíveis veja a `),Ac(56,`a`,4)(57,`strong`),vN(58,`documentação do ng update`),ug()(),vN(59,`.`),ug(),Ac(60,`h2`),vN(61,`Atualizando o PO UI`),ug(),Ac(62,`p`),vN(63,`Para facilitar a migração do seu projeto para o PO UI mais recente, implementamos o `),Ac(64,`code`),vN(65,`ng update`),ug(),vN(66,` nos pacotes abaixo:`),ug(),Ac(67,`ul`)(68,`li`)(69,`a`,5)(70,`strong`),vN(71,`@po-ui/ng-components`),ug()()(),Ac(72,`li`)(73,`a`,6)(74,`strong`),vN(75,`@po-ui/ng-sync`),ug()()()(),Ac(76,`p`),Kc(77,`a`,7),ug(),Ac(78,`h3`),vN(79,`ng update @po-ui/ng-components`),ug(),Ac(80,`p`),vN(81,`Para realizar a migração, devemos executar o comando `),Ac(82,`code`),vN(83,`ng update`),ug(),vN(84,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Ac(85,`em`),vN(86,`flag`),ug(),Ac(87,`code`),vN(88,`--allow-dirty`),ug(),vN(89,` em conjunto.`),ug(),Ac(90,`pre`)(91,`code`),vN(92,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),ug()(),Ac(93,`p`),vN(94,`Por exemplo:`),ug(),Ac(95,`pre`)(96,`code`),vN(97,`ng update @po-ui/ng-components@next --allow-dirty --force
`),ug()(),Ac(98,`blockquote`)(99,`p`),vN(100,`Caso ocorra um erro ao concluir o comando acima pode ser necessário fazer uma instalação limpa no projeto apagando a pasta `),Ac(101,`code`),vN(102,`node_modules`),ug(),vN(103,` e o arquivo `),Ac(104,`code`),vN(105,`package-lock.json`),ug(),vN(106,` e executando o comando `),Ac(107,`code`),vN(108,`npm i --legacy-peer-deps`),ug(),vN(109,` antes de realizar o `),Ac(110,`code`),vN(111,`ng update`),ug(),vN(112,`.`),ug()(),Ac(113,`p`),vN(114,`O `),Ac(115,`code`),vN(116,`ng update`),ug(),vN(117,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),ug(),Ac(118,`ul`)(119,`li`),vN(120,`Caso houver `),Ac(121,`em`),vN(122,`breaking changes`),ug(),vN(123,`, serão realizados as alterações possíveis, mas fique atento ao `),Ac(124,`a`,8),vN(125,`CHANGELOG`),ug(),vN(126,`;`),ug(),Ac(127,`li`),vN(128,`Atualizar as versões dos pacotes:`),Ac(129,`ul`)(130,`li`)(131,`code`),vN(132,`@po-ui/ng-components`),ug(),vN(133,`;`),ug(),Ac(134,`li`)(135,`code`),vN(136,`@po-ui/ng-templates`),ug(),vN(137,`;`),ug(),Ac(138,`li`)(139,`code`),vN(140,`@po-ui/ng-code-editor`),ug(),vN(141,`;`),ug(),Ac(142,`li`)(143,`code`),vN(144,`@po-ui/ng-storage`),ug(),vN(145,`;`),ug(),Ac(146,`li`)(147,`code`),vN(148,`@po-ui/ng-sync`),ug(),vN(149,`;`),ug(),Ac(150,`li`)(151,`code`),vN(152,`@po-ui/style`),ug(),vN(153,`;`),ug()()()(),Ac(154,`p`),vN(155,`Além disso, será realizada uma pergunta para que o usuário decida se quer utilizar a nova biblioteca de ícones. Caso a escolha seja positiva, o processo de update irá substituir classes de ícones do po-ui pelas novas referências.`),ug(),Ac(156,`p`),Kc(157,`a`,9),ug(),Ac(158,`h3`),vN(159,`ng update @po-ui/ng-sync`),ug(),Ac(160,`blockquote`)(161,`p`),vN(162,`Caso você também utilize `),Ac(163,`code`),vN(164,`@po-ui/ng-components`),ug(),vN(165,` não há necessidade de executar o `),Ac(166,`em`),vN(167,`ng update`),ug(),vN(168,` do `),Ac(169,`code`),vN(170,`@po-ui/ng-sync`),ug(),vN(171,`.`),ug()(),Ac(172,`p`),vN(173,`Para realizar a migração, devemos executar o comando `),Ac(174,`code`),vN(175,`ng update`),ug(),vN(176,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Ac(177,`em`),vN(178,`flag`),ug(),Ac(179,`code`),vN(180,`--allow-dirty`),ug(),vN(181,` em conjunto.`),ug(),Ac(182,`pre`)(183,`code`),vN(184,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),ug()(),Ac(185,`p`),vN(186,`Por exemplo:`),ug(),Ac(187,`pre`)(188,`code`),vN(189,`ng update @po-ui/ng-sync@next --allow-dirty --force
`),ug()(),Ac(190,`p`),vN(191,`O `),Ac(192,`code`),vN(193,`ng update`),ug(),vN(194,` ajudará nas alterações necessárias para seu projeto, que será atualizar as versões dos pacotes:`),ug(),Ac(195,`ul`)(196,`li`)(197,`code`),vN(198,`@po-ui/ng-sync`),ug(),vN(199,`;`),ug(),Ac(200,`li`)(201,`code`),vN(202,`@po-ui/ng-storage`),ug(),vN(203,`;`),ug()(),Ac(204,`h2`),vN(205,`Depreciações e Breaking Changes`),ug(),Ac(206,`p`),vN(207,`Possuimos uma documentação que lista as depreciações correntes e os `),Ac(208,`em`),vN(209,`breaking changes`),ug(),vN(210,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),Ac(211,`a`,10),vN(212,`Depreciações`),ug()(),Ac(213,`p`),vN(214,`Verifique também nosso `),Ac(215,`a`,8),vN(216,`CHANGELOG`),ug(),vN(217,` para obter
mais detalhes dos `),Ac(218,`em`),vN(219,`breaking changes`),ug(),vN(220,` realizados.`),ug()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var G=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:63,vars:0,consts:[[`p-title`,`Migração do THF para o PO UI v1.x`,1,`guides`,`app-portal`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Para facilitar a migração do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta conversão. `),ug(),Ac(3,`p`),vN(4,`Este pacote, irá passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI.`),ug(),Ac(5,`h3`),vN(6,`Antes de iniciar a migração`),ug(),Ac(7,`p`),vN(8,`Antes de iniciar a migração certifique-se que:`),ug(),Ac(9,`ul`)(10,`li`),vN(11,`Este pacote de migração é apenas para a migração do `),Ac(12,`strong`),vN(13,`THF versão 4 ou superior para o PO UI versão 1.x`),ug(),vN(14,` que é compatível com a versão 8 do Angular. `),ug(),Ac(15,`li`),vN(16,`As dependências do THF encontram-se na versão 4 ou superior.`),ug(),Ac(17,`li`),vN(18,`Todos os arquivos estão salvos.`),ug(),Ac(19,`li`),vN(20,`Se as pastas e os arquivos possuem permissão para terceiros alterá-los.`),ug()(),Ac(21,`h3`),vN(22,`Instalação do pacote de migração`),ug(),Ac(23,`p`),vN(24,`Instale globalmente o pacote `),Ac(25,`code`),vN(26,`po-migration`),ug(),vN(27,` utilizando o npm, conforme o comando abaixo:`),ug(),Ac(28,`pre`)(29,`code`),vN(30,`npm install -g po-migration
`),ug()(),Ac(31,`h3`),vN(32,`Migrando o seu projeto`),ug(),Ac(33,`p`),vN(34,`Após a instalação, navegue até a pasta do projeto que você deseja migrar para o PO UI.`),ug(),Ac(35,`p`),vN(36,`Para iniciar a migração, execute o comando:`),ug(),Ac(37,`pre`)(38,`code`),vN(39,`po-migration start
`),ug()(),Ac(40,`p`),vN(41,`Este comando irá utilizar um dicionário de palavras-chaves do próprio THF para realizar a migração, ou seja, se tiver outra palavra que você criou e que não faz parte do THF, ele não irá alterar.`),ug(),Ac(42,`p`),vN(43,`No entanto, caso você queira alterar até mesmo palavras criadas por você, utilize o seguinte comando:`),ug(),Ac(44,`pre`)(45,`code`),vN(46,`po-migration start --all
`),ug()(),Ac(47,`p`),vN(48,`Este comando atualiza todas as palavras do projeto que contém "thf, t-, ou totvs".`),ug(),Ac(49,`blockquote`)(50,`p`),vN(51,`Ao utilizar a opção `),Ac(52,`code`),vN(53,`--all`),ug(),vN(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),ug()(),Ac(55,`p`),vN(56,`Veja a documentação completa do pacote `),Ac(57,`code`),vN(58,`po-migration`),ug(),vN(59,` executando o comando:`),ug(),Ac(60,`pre`)(61,`code`),vN(62,`po-migration --help
`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:81,vars:0,consts:[[`p-title`,`Press Kit`,1,`guides`,`app-portal`],[`href`,`https://creativecommons.org/licenses/by/4.0/`],[1,`docs-presskit-row`,`po-mb-5`],[`src`,`./assets/po-logos/po_color_bg.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo com segundo plano degradê`],[1,`po-ml-md-2`],[`href`,`./assets/po-logos/po_color_bg.png`,`download`,``],[`href`,`./assets/po-logos/po_color_bg.svg`,`download`,``],[`src`,`./assets/po-logos/po_color.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo degradê`],[`href`,`./assets/po-logos/po_color.png`,`download`,``],[`href`,`./assets/po-logos/po_color.svg`,`download`,``],[`src`,`./assets/po-logos/po_black.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo preto`],[`href`,`./assets/po-logos/po_black.png`,`download`,``],[`href`,`./assets/po-logos/po_black.svg`,`download`,``],[`src`,`./assets/po-logos/po_inverse.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano preto`],[`href`,`./assets/po-logos/po_inverse.png`,`download`,``],[`href`,`./assets/po-logos/po_inverse.svg`,`download`,``],[`src`,`./assets/po-logos/po_white_mock_bg.png`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano transparente`],[`href`,`./assets/po-logos/po_white.png`,`download`,``],[`href`,`./assets/po-logos/po_white.svg`,`download`,``]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`h2`),vN(2,`Logomarca`),ug(),Ac(3,`p`),vN(4,`A licença para uso das variações de logomarca do `),Ac(5,`strong`),vN(6,`PO UI`),ug(),vN(7,` é seguida de acordo com a `),Ac(8,`a`,1),vN(9,`CC BY 4.0`),ug(),vN(10,`. Ou seja, pode-se utilizá-las como convier e para qualquer uso, como por exemplo na impressão em camisetas, divulgação em websites, etc.`),ug(),Ac(11,`div`,2)(12,`div`),Kc(13,`img`,3),ug(),Ac(14,`div`,4)(15,`h3`),vN(16,`Versão com segundo plano degradê`),ug(),Ac(17,`p`),vN(18,`Logo com segundo plano degradê (png) - `),Ac(19,`a`,5),vN(20,`Download`),ug()(),Ac(21,`p`),vN(22,`Logo com segundo plano degradê (svg) - `),Ac(23,`a`,6),vN(24,`Download`),ug()()()(),Ac(25,`div`,2)(26,`div`),Kc(27,`img`,7),ug(),Ac(28,`div`,4)(29,`h3`),vN(30,`Versão do logo degradê`),ug(),Ac(31,`p`),vN(32,`Logo degradê (png) - `),Ac(33,`a`,8),vN(34,`Download`),ug()(),Ac(35,`p`),vN(36,`Logo degradê (svg) - `),Ac(37,`a`,9),vN(38,`Download`),ug()()()(),Ac(39,`div`,2)(40,`div`),Kc(41,`img`,10),ug(),Ac(42,`div`,4)(43,`h3`),vN(44,`Versão do logo em preto`),ug(),Ac(45,`p`),vN(46,`Logo preto (png) - `),Ac(47,`a`,11),vN(48,`Download`),ug()(),Ac(49,`p`),vN(50,`Logo preto (svg) - `),Ac(51,`a`,12),vN(52,`Download`),ug()()()(),Ac(53,`div`,2)(54,`div`),Kc(55,`img`,13),ug(),Ac(56,`div`,4)(57,`h3`),vN(58,`Versão branco com segundo plano preto`),ug(),Ac(59,`p`),vN(60,`Logo branco (png) - `),Ac(61,`a`,14),vN(62,`Download`),ug()(),Ac(63,`p`),vN(64,`Logo branco (svg) - `),Ac(65,`a`,15),vN(66,`Download`),ug()()()(),Ac(67,`div`,2)(68,`div`),Kc(69,`img`,16),ug(),Ac(70,`div`,4)(71,`h3`),vN(72,`Versão branco com segundo plano transparente`),ug(),Ac(73,`p`),vN(74,`Logo branco (png) - `),Ac(75,`a`,17),vN(76,`Download`),ug()(),Ac(77,`p`),vN(78,`Logo branco (svg) - `),Ac(79,`a`,18),vN(80,`Download`),ug()()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:187,vars:0,consts:[[`p-title`,`Lançamentos e suporte`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-12`,`po-lg-12`,`po-md-12`,`po-sm-12`],[`src`,`./assets/graphics/release-schedule.jpg`,`alt`,`Cronograma de Lançamentos`,2,`max-width`,`100%`,`max-height`,`33vh`],[1,`po-xl-10`,`po-lg-12`,`po-md-12`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://semver.org/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://angular.dev/reference/releases`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`guides/releases`],[`href`,`guides/migration-poui`],[`href`,`guides/getting-started`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Suporte estendido para versões principais ímpares por até 18 meses, a partir da versão 17.`),ug(),Ac(3,`h3`),vN(4,`Cronograma de Lançamentos`),ug(),Ac(5,`div`,1)(6,`div`,2),Kc(7,`img`,3),ug()(),Ac(8,`h3`),vN(9,`Janela de Suporte PO UI`),ug(),Ac(10,`p`),vN(11,`Todas as versões Major Ímpares possuem período ativo de 12 meses + suporte (LTS) de 18 meses:`),ug(),Ac(12,`div`,1)(13,`div`,4)(14,`table`,5)(15,`thead`)(16,`tr`,6)(17,`th`,7),vN(18,`Estágio de suporte`),ug(),Ac(19,`th`,7),vN(20,`Tempo de suporte`),ug(),Ac(21,`th`,7),vN(22,`Detalhes`),ug()()(),Ac(23,`tbody`)(24,`tr`,8)(25,`td`,9),vN(26,`Active (versões major ímpares)`),ug(),Ac(27,`td`,9),vN(28,`12 meses`),ug(),Ac(29,`td`,9),vN(30,`Atualizações e correções programadas regularmente`),ug()(),Ac(31,`tr`,8)(32,`td`,9),vN(33,`Longo prazo (LTS) (versões major ímpares)`),ug(),Ac(34,`td`,9),vN(35,`18 meses`),ug(),Ac(36,`td`,9),vN(37,`Apenas correções nas versões ímpares`),ug()(),Ac(38,`tr`,8)(39,`td`,9),vN(40,`Active (versões major pares)`),ug(),Ac(41,`td`,9),vN(42,`6 meses`),ug(),Ac(43,`td`,9),vN(44,`Atualizações e correções programadas regularmente até o lançamento da próxima versão major ímpar`),ug()()()()()(),Ac(45,`h3`),vN(46,`Versões PO UI`),ug(),Ac(47,`p`),vN(48,`As bibliotecas seguem as regras de versionamento definidas pelo Semantic Versioning (SemVer), conforme descrito em: `),Ac(49,`a`,10),vN(50,`https://semver.org/`),ug()(),Ac(51,`div`,1)(52,`div`,4)(53,`table`,5)(54,`thead`)(55,`tr`,6)(56,`th`,7),vN(57,`Versão`),ug(),Ac(58,`th`,7),vN(59,`Status`),ug(),Ac(60,`th`,7),vN(61,`Lançado`),ug(),Ac(62,`th`,7),vN(63,`Fim do período ativo`),ug(),Ac(64,`th`,7),vN(65,`Fim do LTS`),ug()()(),Ac(66,`tbody`)(67,`tr`,8)(68,`td`,9),vN(69,`^23.0.0*`),ug(),Ac(70,`td`,9),vN(71,`Previsto`),ug(),Ac(72,`td`,9),vN(73,`Janeiro/2027`),ug(),Ac(74,`td`,9),vN(75,`Dezembro/2027`),ug(),Ac(76,`td`,9),vN(77,`Junho/2029`),ug()(),Ac(78,`tr`,8)(79,`td`,9),vN(80,`^22.0.0*`),ug(),Ac(81,`td`,9),vN(82,`Previsto`),ug(),Ac(83,`td`,9),vN(84,`Julho/2026`),ug(),Ac(85,`td`,9),vN(86,`Dezembro/2026`),ug(),Ac(87,`td`,9),vN(88,`N/A`),ug()(),Ac(89,`tr`,8)(90,`td`,9),vN(91,`^21.0.0`),ug(),Ac(92,`td`,9),vN(93,`Active`),ug(),Ac(94,`td`,9),vN(95,`Janeiro/2026`),ug(),Ac(96,`td`,9),vN(97,`Dezembro/2026`),ug(),Ac(98,`td`,9),vN(99,`Junho/2028`),ug()(),Ac(100,`tr`,8)(101,`td`,9),vN(102,`^19.0.0`),ug(),Ac(103,`td`,9),vN(104,`LTS`),ug(),Ac(105,`td`,9),vN(106,`Janeiro/2025`),ug(),Ac(107,`td`,9),vN(108,`Dezembro/2025`),ug(),Ac(109,`td`,9),vN(110,`Junho/2027`),ug()(),Ac(111,`tr`,8)(112,`td`,9),vN(113,`^20.0.0`),ug(),Ac(114,`td`,9),vN(115,`Active Encerrado`),ug(),Ac(116,`td`,9),vN(117,`Setembro/2025`),ug(),Ac(118,`td`,9),vN(119,`Janeiro/2026`),ug(),Ac(120,`td`,9),vN(121,`N/A`),ug()(),Ac(122,`tr`,8)(123,`td`,9),vN(124,`^18.0.0`),ug(),Ac(125,`td`,9),vN(126,`Active Encerrado`),ug(),Ac(127,`td`,9),vN(128,`Julho/2024`),ug(),Ac(129,`td`,9),vN(130,`Dezembro/2024`),ug(),Ac(131,`td`,9),vN(132,`N/A`),ug()(),Ac(133,`tr`,8)(134,`td`,9),vN(135,`^17.0.0`),ug(),Ac(136,`td`,9),vN(137,`LTS Encerrado`),ug(),Ac(138,`td`,9),vN(139,`Março/2024`),ug(),Ac(140,`td`,9),vN(141,`Agosto/2024`),ug(),Ac(142,`td`,9),vN(143,`Agosto/2025`),ug()()()()()(),Ac(144,`p`),vN(145,`Versões LTS recebem apenas correções de segurança e bugs críticos. Não há novas funcionalidades ou melhorias visuais.`),ug(),Ac(146,`blockquote`)(147,`p`),vN(148,`*Datas aproximadas, sujeitas a alterações.`),ug()(),Ac(149,`h3`),vN(150,`Segurança — Vulnerabilidades em versões LTS`),ug(),Ac(151,`p`),vN(152,`Versões LTS podem apresentar `),Ac(153,`strong`),vN(154,`vulnerabilidades altas ou críticas`),ug(),vN(155,` no `),Ac(156,`code`),vN(157,`npm audit`),ug(),Ac(158,`strong`),vN(159,`sem patch disponível`),ug(),vN(160,`, especialmente quando o Angular (peer dependency) já encerrou o suporte da versão utilizada (`),Ac(161,`strong`),vN(162,`EOL`),ug(),vN(163,`).`),ug(),Ac(164,`blockquote`)(165,`p`),vN(166,`O Status EOL reflete o estado do suporte ao respectivo produto no lançamento da release. O PO UI prestará suporte em sistemas operacionais, produtos, bibliotecas terceiras ou serviços (incluindo o Angular), apenas dentro do ciclo de vida e correções de vulnerabilidades estabelecidos por seus respectivos fabricantes e mantenedores. `),Ac(167,`strong`),vN(168,`O PO UI não prestará suporte`),ug(),vN(169,` em sistemas operacionais, produtos, bibliotecas terceiras ou serviços fora de seus ciclos de vida ativos.`),ug()(),Ac(170,`p`),vN(171,`Planeje a migração para a versão Active quando possível.`),ug(),Ac(172,`p`),vN(173,`Referências:`),ug(),Ac(174,`ul`)(175,`li`)(176,`a`,11),vN(177,`Angular Release Schedule`),ug()(),Ac(178,`li`)(179,`a`,12),vN(180,`Releases e versionamento`),ug()(),Ac(181,`li`)(182,`a`,13),vN(183,`Migração do PO UI`),ug()(),Ac(184,`li`)(185,`a`,14),vN(186,`Primeiros passos`),ug()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var N=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:253,vars:0,consts:[[`p-title`,`Releases`,1,`guides`,`app-portal`],[`href`,`https://semver.org/`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`guides/migration-poui`],[`href`,`guides/migration-poui-v2`],[`href`,`guides/migration-thf-to-po-ui`],[`href`,`https://github.com/po-ui/po-angular/issues/1184`],[`href`,`https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions`],[`href`,`guides/release-schedule`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Reconhecemos que você precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais não se tornem obsoletos inesperadamente. A estabilidade é essencial para um ecossistema com angular e PO UI prosperar.`),ug(),Ac(3,`p`),vN(4,`Também compartilhamos com você o desejo de que o PO UI continue evoluindo. Nós nos esforçamos para garantir que a biblioteca de componentes sobre a qual está construindo sua aplicação continue melhorando e permitindo que você se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usuário.`),ug(),Ac(5,`p`),vN(6,`Este documento contém as práticas que seguimos para fornecer a você uma biblioteca de componentes de ponta, equilibrada e com estabilidade. Nós nos esforçamos para garantir que as mudanças futuras sejam sempre introduzidas de forma previsível. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos serão adicionados e estejam bem preparados quando os obsoletos são removidos.`),ug(),Ac(7,`h2`),vN(8,`Controle de Versão PO UI`),ug(),Ac(9,`p`),vN(10,`Os números de versão do PO UI indicam o nível de mudanças introduzidas pelo lançamento. Este uso de `),Ac(11,`a`,1),vN(12,`versionamento semântico`),ug(),vN(13,` ajuda a entender o impacto potencial de atualizar para uma nova versão.`),ug(),Ac(14,`p`),vN(15,`Números de versão PO UI tem três partes: `),Ac(16,`code`),vN(17,`major.minor.patch`),ug(),vN(18,`. Por exemplo, a versão 4.16.1 indica a versão principal 4, a versão secundária 2 e o nível de patch 1.`),ug(),Ac(19,`p`),vN(20,`O número da versão principal é incrementado com base na versão do Angular que ele atende.`),ug(),Ac(21,`ul`)(22,`li`)(23,`strong`),vN(24,`As versões principais`),ug(),vN(25,` contêm os novos recursos disponibilizados pelo Angular, mas espera-se uma assistência mínima do desenvolvedor durante a atualização. Ao atualizar para uma nova versão principal, pode ser necessário executar scripts de atualização, refatorar códigos, executar testes adicionais e aprender novas APIs.`),ug(),Ac(26,`li`)(27,`strong`),vN(28,`Versões secundárias`),ug(),vN(29,` contém novos recursos menores. Versões menores são totalmente compatíveis com versões anteriores; nenhuma assistência do desenvolvedor é esperada durante a atualização, mas você pode opcionalmente modificar seus aplicativos e bibliotecas para começar a usar novas APIs, recursos e capacidades que foram adicionados na versão. São incrementadas regularmente ao final de nossas sprints.`),ug(),Ac(30,`li`)(31,`strong`),vN(32,`Lançamentos de patch`),ug(),vN(33,` são lançamentos de correção de bugs. Nenhuma ajuda do desenvolvedor é esperada durante a atualização.`),ug()(),Ac(34,`h2`),vN(35,`Caminhos de atualização suportados`),ug(),Ac(36,`p`),vN(37,`Em alinhamento com o esquema de controle de versão descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualização:`),ug(),Ac(38,`ul`)(39,`li`),vN(40,`Se você estiver atualizando na `),Ac(41,`strong`),vN(42,`versão principal`),ug(),vN(43,`, poderá pular todas as versões intermediárias e atualizar diretamente para a versão de destino. Por exemplo, você pode atualizar diretamente da versão 4.0.0 para a 4.17.0.`),ug(),Ac(44,`li`),vN(45,`Se você estiver atualizando de `),Ac(46,`strong`),vN(47,`uma versão principal para outra`),ug(),vN(48,`, recomendamos que `),Ac(49,`strong`),vN(50,`não ignore as versões principais`),ug(),vN(51,`. Siga as instruções para atualizar de forma incremental para a próxima versão principal, testando e validando em cada erapa. Por exemplo, se você deseja atualizar da versão 2.xx para a versão 4.xx, recomendamos que você atualize para a versão 3.xx mais recente primeiro. Depois de atualizar com sucesso para a versão 3.xx, você pode atualizar para a 4.xx.`),ug()(),Ac(52,`p`),vN(53,`Consulte abaixo nossos guias de migração de versão para obter mais informações sobre como atualizar o PO UI para a versão mais recente nos seus projetos Angular.`),ug(),Ac(54,`h3`),vN(55,`Comparativo de versões Angular x PO UI`),ug(),Ac(56,`div`,2)(57,`div`,3)(58,`table`,4)(59,`thead`)(60,`tr`,5)(61,`th`,6),vN(62,`Angular`),ug(),Ac(63,`th`,6),vN(64,`PO UI`),ug(),Ac(65,`th`,6),vN(66,`Migração`),ug()()(),Ac(67,`tbody`)(68,`tr`,7)(69,`td`,8),vN(70,`22.0.0`),ug(),Ac(71,`td`,8),vN(72,`22.0.0`),ug(),Ac(73,`td`,8)(74,`a`,9),vN(75,`Migração do PO UI`),ug()()(),Ac(76,`tr`,7)(77,`td`,8),vN(78,`21.0.0`),ug(),Ac(79,`td`,8),vN(80,`21.0.0`),ug(),Ac(81,`td`,8)(82,`a`,9),vN(83,`Migração do PO UI`),ug()()(),Ac(84,`tr`,7)(85,`td`,8),vN(86,`20.0.0`),ug(),Ac(87,`td`,8),vN(88,`20.0.0`),ug(),Ac(89,`td`,8)(90,`a`,9),vN(91,`Migração do PO UI`),ug()()(),Ac(92,`tr`,7)(93,`td`,8),vN(94,`19.0.0`),ug(),Ac(95,`td`,8),vN(96,`19.0.0`),ug(),Ac(97,`td`,8)(98,`a`,9),vN(99,`Migração do PO UI`),ug()()(),Ac(100,`tr`,7)(101,`td`,8),vN(102,`18.0.0`),ug(),Ac(103,`td`,8),vN(104,`18.0.0`),ug(),Ac(105,`td`,8)(106,`a`,9),vN(107,`Migração do PO UI`),ug()()(),Ac(108,`tr`,7)(109,`td`,8),vN(110,`17.0.0`),ug(),Ac(111,`td`,8),vN(112,`17.0.0`),ug(),Ac(113,`td`,8)(114,`a`,9),vN(115,`Migração do PO UI`),ug()()(),Ac(116,`tr`,7)(117,`td`,8),vN(118,`16.0.0`),ug(),Ac(119,`td`,8),vN(120,`16.0.0`),ug(),Ac(121,`td`,8)(122,`a`,9),vN(123,`Migração do PO UI`),ug()()(),Ac(124,`tr`,7)(125,`td`,8),vN(126,`15.0.0`),ug(),Ac(127,`td`,8),vN(128,`15.0.0`),ug(),Ac(129,`td`,8)(130,`a`,9),vN(131,`Migração do PO UI`),ug()()(),Ac(132,`tr`,7)(133,`td`,8),vN(134,`14.0.0`),ug(),Ac(135,`td`,8),vN(136,`14.0.0`),ug(),Ac(137,`td`,8)(138,`a`,9),vN(139,`Migração do PO UI`),ug()()(),Ac(140,`tr`,7)(141,`td`,8),vN(142,`13.0.0`),ug(),Ac(143,`td`,8),vN(144,`6.0.0`),ug(),Ac(145,`td`,8)(146,`a`,9),vN(147,`Migração do PO UI`),ug()()(),Ac(148,`tr`,7)(149,`td`,8),vN(150,`12.0.0`),ug(),Ac(151,`td`,8),vN(152,`5.0.0`),ug(),Ac(153,`td`,8)(154,`a`,9),vN(155,`Migração do PO UI`),ug()()(),Ac(156,`tr`,7)(157,`td`,8),vN(158,`11.0.0`),ug(),Ac(159,`td`,8),vN(160,`4.0.0`),ug(),Ac(161,`td`,8)(162,`a`,9),vN(163,`Migração do PO UI`),ug()()(),Ac(164,`tr`,7)(165,`td`,8),vN(166,`10.0.0`),ug(),Ac(167,`td`,8),vN(168,`3.0.0`),ug(),Ac(169,`td`,8)(170,`a`,9),vN(171,`Migração do PO UI`),ug()()(),Ac(172,`tr`,7)(173,`td`,8),vN(174,`9.0.0`),ug(),Ac(175,`td`,8),vN(176,`2.0.0`),ug(),Ac(177,`td`,8)(178,`a`,10),vN(179,`Migração do PO UI para V2`),ug()()(),Ac(180,`tr`,7)(181,`td`,8),vN(182,`8.0.0`),ug(),Ac(183,`td`,8),vN(184,`1.0.0`),ug(),Ac(185,`td`,8)(186,`a`,11),vN(187,`Migração THF para PO UI v1.x`),ug()()()()()()(),Ac(188,`blockquote`)(189,`p`),vN(190,`Conforme agenda de publicação de novas versões estáveis do Angular, nós atualizamos nossas versões como de costume e aproveitaremos para fazer uma mudança na nomenclatura das nossas versões. A versão `),Ac(191,`code`),vN(192,`v7.x.x`),ug(),vN(193,` foi lançada como `),Ac(194,`strong`)(195,`code`),vN(196,`v14.x.x`),ug()(),vN(197,`, assim `),Ac(198,`code`),vN(199,`a versão 14.x.x do PO UI tem compatibilidade com a v14 do Angular`),ug(),vN(200,` e assim por diante. `),Ac(201,`a`,12),vN(202,`Mais informações`),ug(),vN(203,`.`),ug()(),Ac(204,`h2`),vN(205,`Versões prévias`),ug(),Ac(206,`p`),vN(207,`Permitimos que você visualize o que está por vir, fornecendo pré-lançamentos `),Ac(208,`code`),vN(209,`next`),ug(),vN(210,` ou Release Candidates (`),Ac(211,`code`),vN(212,`rc`),ug(),vN(213,`) para cada versão principal:`),ug(),Ac(214,`ul`)(215,`li`)(216,`strong`),vN(217,`Next`),ug(),vN(218,`: a versão que está em desenvolvimento, com testes ativos e com breaking changes a resolver. O próximo lançamento é indicado por uma tag de lançamento anexada ao identificador `),Ac(219,`code`),vN(220,`-next`),ug(),vN(221,`, como `),Ac(222,`code`),vN(223,`17.0.0-next`),ug(),vN(224,`.`),ug(),Ac(225,`li`)(226,`strong`),vN(227,`Release Candidate`),ug(),vN(228,`: um lançamento com recurso concluído, teste finalizado e sem breaking changes a resolver. Um candidato a lançamento é indicado por uma tag de lançamento anexada ao identificador `),Ac(229,`code`),vN(230,`-rc`),ug(),vN(231,`, como versão `),Ac(232,`code`),vN(233,`17.0.0-rc`),ug(),vN(234,`.`),ug()(),Ac(235,`p`),vN(236,`A versão mais recente `),Ac(237,`code`),vN(238,`next`),ug(),vN(239,` ou de pré-lançamento `),Ac(240,`code`),vN(241,`rc`),ug(),vN(242,` fica disponível no `),Ac(243,`a`,13),vN(244,`npm do projeto`),ug(),vN(245,`.`),ug(),Ac(246,`h2`),vN(247,`Lançamentos e suporte`),ug(),Ac(248,`p`),vN(249,`Para informações sobre o cronograma de lançamentos, janela de suporte (Active/LTS) e política de segurança em versões LTS, consulte o guia `),Ac(250,`a`,14),vN(251,`Lançamentos e suporte`),ug(),vN(252,`.`),ug()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:60,vars:0,consts:[[`p-title`,`Schematics`,1,`guides`,`app-portal`],[`href`,`https://angular.io/cli`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`O PO contém `),Ac(3,`em`),vN(4,`schematics`),ug(),vN(5,` do `),Ac(6,`a`,1),vN(7,`Angular CLI`),ug(),vN(8,` em seu pacote, para facilitar o desenvolvimento de aplicações PO.`),ug(),Ac(9,`h2`),vN(10,`Instalando`),ug(),Ac(11,`p`),vN(12,`Um vez que for instalado o pacotes, teremos disponível os `),Ac(13,`em`),vN(14,`schematics`),ug(),vN(15,` através do Angular CLI.`),ug(),Ac(16,`h3`),vN(17,`PO UI Components`),ug(),Ac(18,`p`),vN(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),Ac(20,`code`),vN(21,`@po-ui/ng-components`),ug(),vN(22,` e realizadas algumas configurações, que serão descritas em seguida:`),ug(),Ac(23,`pre`)(24,`code`),vN(25,`ng add @po-ui/ng-components@next
`),ug()(),Ac(26,`ul`)(27,`li`),vN(28,`Substitui o `),Ac(29,`code`),vN(30,`AppComponent`),ug(),vN(31,` com uma estrutura incial de um projeto, utilizando os components `),Ac(32,`code`),vN(33,`po-page-default`),ug(),vN(34,`, `),Ac(35,`code`),vN(36,`po-toolbar`),ug(),vN(37,`, e `),Ac(38,`code`),vN(39,`po-menu`),ug(),vN(40,`;`),ug(),Ac(41,`li`),vN(42,`Importa o módulo do PO;`),ug(),Ac(43,`li`),vN(44,`Configura o tema do PO no projeto;`),ug()(),Ac(45,`h3`),vN(46,`PO UI Templates`),ug(),Ac(47,`p`),vN(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),Ac(49,`code`),vN(50,`@po-ui/ng-templates`),ug(),vN(51,`:`),ug(),Ac(52,`pre`)(53,`code`),vN(54,`ng add @po-ui/ng-templates@next
`),ug()(),Ac(55,`ul`)(56,`li`),vN(57,`Importa o módulo do PO;`),ug(),Ac(58,`li`),vN(59,`Configura o tema do PO no projeto caso não possua;`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:1071,vars:0,consts:[[`p-title`,`Fundamentos do PO Sync`,1,`guides`,`app-portal`],[`href`,`guides/sync-fundamentals#introduction`],[`href`,`guides/sync-fundamentals#knowledge`],[`href`,`guides/sync-fundamentals#schemas`],[`href`,`guides/sync-fundamentals#create-schema`],[`href`,`guides/sync-fundamentals#schematic`],[`href`,`guides/sync-fundamentals#prepare-api`],[`href`,`guides/sync-fundamentals#logical-deletion`],[`href`,`guides/sync-fundamentals#sync-url`],[`href`,`guides/sync-fundamentals#prepare`],[`href`,`guides/sync-fundamentals#periodic`],[`href`,`guides/sync-fundamentals#load-data`],[`href`,`guides/sync-fundamentals#po-entity`],[`href`,`guides/sync-fundamentals#find-data`],[`href`,`guides/sync-fundamentals#save-and-remove`],[`href`,`guides/sync-fundamentals#sync`],[`href`,`guides/sync-fundamentals#advanced-techniques`],[`href`,`guides/sync-fundamentals#on-sync`],[`href`,`guides/sync-fundamentals#po-data-transform`],[`href`,`guides/sync-fundamentals#get-responses`],[`href`,`guides/sync-fundamentals#insert-http-command`],[`href`,`guides/sync-fundamentals#custom-request-id`],[`href`,`guides/sync-fundamentals#schemas-definition`],[`href`,`guides/sync-fundamentals#po-conference`],[`id`,`introduction`],[2,`text-align`,`center`],[`src`,`./assets/graphics/po-sync/event-sourcing.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-send.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-get.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`href`,`/documentation/po-sync`],[`href`,`guides/sync-get-started`],[`id`,`knowledge`],[`href`,`http://es6-features.org`],[`href`,`http://es6-features.org/#PromiseUsage`],[`href`,`https://ionicframework.com/`],[`href`,`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html`],[`href`,`https://rxjs-dev.firebaseapp.com/guide/overview`],[`id`,`schemas`],[`id`,`create-schema`],[1,`language-shell`],[1,`language-typescript`],[`id`,`schematic`],[`id`,`prepare-api`],[`id`,`logical-deletion`],[1,`language-javascript`],[`id`,`sync-url`],[`href`,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prepare`],[`id`,`periodic`],[`id`,`load-data`],[`id`,`po-entity`],[`href`,`/documentation/po-entity`],[`id`,`find-data`],[`href`,`/documentation/po-query-builder`],[`id`,`save-and-remove`],[`id`,`sync`],[`id`,`advanced-techniques`],[`id`,`on-sync`],[`id`,`po-data-transform`],[`href`,`/documentation/po-data-transform`],[`id`,`get-responses`],[`href`,`/documentation/po-event-sourcing-error-response`],[`id`,`insert-http-command`],[`id`,`custom-request-id`],[`id`,`schemas-definition`],[`id`,`po-conference`],[`href`,`https://github.com/ionic-team/ionic-conference-app`],[`href`,`https://github.com/po-ui/po-sample-conference`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`h2`),vN(2,`Conteúdo`),ug(),Ac(3,`ul`)(4,`li`)(5,`a`,1),vN(6,`Introdução`),ug()(),Ac(7,`li`)(8,`a`,2),vN(9,`Conhecimentos necessários`),ug()(),Ac(10,`li`)(11,`a`,3)(12,`em`),vN(13,`Schemas`),ug()(),Ac(14,`ul`)(15,`li`)(16,`a`,4),vN(17,`Como criar um `),Ac(18,`em`),vN(19,`schema`),ug()()(),Ac(20,`li`)(21,`a`,5),vN(22,`Schematic`),ug()()()(),Ac(23,`li`)(24,`a`,6),vN(25,`Preparando a API para a sincronização`),ug(),Ac(26,`ul`)(27,`li`)(28,`a`,7),vN(29,`Exclusão lógica`),ug()(),Ac(30,`li`)(31,`a`,8)(32,`em`),vN(33,`Endpoint`),ug(),vN(34,` de sincronização`),ug()()()(),Ac(35,`li`)(36,`a`,9),vN(37,`Preparando a aplicação`),ug(),Ac(38,`ul`)(39,`li`)(40,`a`,10),vN(41,`Sincronização periódica`),ug()(),Ac(42,`li`)(43,`a`,11),vN(44,`Carga inicial dos dados`),ug()()()(),Ac(45,`li`)(46,`a`,12),vN(47,`Manipulando os registros de um `),Ac(48,`em`),vN(49,`schema`),ug()(),Ac(50,`ul`)(51,`li`)(52,`a`,13),vN(53,`Buscando os registros`),ug()(),Ac(54,`li`)(55,`a`,14),vN(56,`Criação, atualização e exclusão de um registro`),ug()()()(),Ac(57,`li`)(58,`a`,15),vN(59,`Sincronização manual`),ug()(),Ac(60,`li`)(61,`a`,16),vN(62,`Técnicas avançadas`),ug(),Ac(63,`ul`)(64,`li`)(65,`a`,17),vN(66,`Notificação pós-sincronização`),ug()(),Ac(67,`li`)(68,`a`,18),vN(69,`Adaptando a resposta da API para o padrão do PO UI`),ug()(),Ac(70,`li`)(71,`a`,19),vN(72,`Capturando respostas da sincronização`),ug()(),Ac(73,`li`)(74,`a`,20),vN(75,`Inserindo requisições HTTP na fila de eventos`),ug()(),Ac(76,`li`)(77,`a`,21),vN(78,`Criação de identificador customizado para eventos da fila`),ug()(),Ac(79,`li`)(80,`a`,22),vN(81,`Alterando as definições dos `),Ac(82,`em`),vN(83,`schemas`),ug()()()()(),Ac(84,`li`)(85,`a`,23),vN(86,`Aplicativo de demonstração do PO Sync`),ug()()(),Ac(87,`p`),Kc(88,`a`,24),ug(),Ac(89,`h2`),vN(90,`Introdução`),ug(),Ac(91,`p`),vN(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),Ac(93,`em`),vN(94,`online`),ug(),vN(95,` quanto `),Ac(96,`em`),vN(97,`offline`),ug(),vN(98,`, com a mesma experiência de uso.`),ug(),Ac(99,`h3`),vN(100,`Como o PO Sync mantém os dados atualizados com o servidor?`),ug(),Ac(101,`p`),vN(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),ug(),Ac(103,`p`,25),Kc(104,`img`,26),ug(),Ac(105,`p`),vN(106,`É no processo de sincronização que os dados são atualizados tanto da aplicação local para o servidor quanto do servidor para a aplicação local.`),ug(),Ac(107,`blockquote`)(108,`p`),vN(109,`A sincronização sempre acontece com a aplicação `),Ac(110,`em`),vN(111,`online`),ug(),vN(112,` e em segundo plano, permitindo que o usuário continue utilizando a aplicação normalmente.`),ug()(),Ac(113,`h4`),vN(114,`Como ocorre a sincronização?`),ug(),Ac(115,`p`),vN(116,`A sincronização dos dados acontece em duas etapas:`),ug(),Ac(117,`p`)(118,`strong`),vN(119,`1)`),ug(),vN(120,` Busca os itens da fila de eventos e envia os dados modificados da aplicação local para o servidor sequencialmente:`),ug(),Ac(121,`p`,25),Kc(122,`img`,27),ug(),Ac(123,`p`)(124,`strong`),vN(125,`2)`),ug(),vN(126,` Busca os dados que foram modificados no servidor e atualiza na aplicação local:`),ug(),Ac(127,`p`,25),Kc(128,`img`,28),ug(),Ac(129,`p`),vN(130,`Esta sincronização pode ser acionada (gatilho) das seguintes formas:`),ug(),Ac(131,`ul`)(132,`li`)(133,`p`),vN(134,`Reativa: toda vez que houver alguma mudança no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;`),ug()(),Ac(135,`li`)(136,`p`)(137,`a`,10),vN(138,`Periódica`),ug(),vN(139,`: será acionada periodicamente baseada nos parâmetros de configurações do `),Ac(140,`a`,29),vN(141,`PoSyncConfig`),ug(),vN(142,`;`),ug()(),Ac(143,`li`)(144,`p`)(145,`a`,15),vN(146,`Manualmente`),ug(),vN(147,`: será acionada na chamada manual do método `),Ac(148,`code`),vN(149,`PoSyncService.sync()`),ug(),vN(150,`.`),ug()()(),Ac(151,`blockquote`)(152,`p`),vN(153,`Antes de continuar os próximos passos, siga as instruções do `),Ac(154,`a`,30),vN(155,`Começando com o PO Sync`),ug(),vN(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),ug()(),Ac(157,`p`),Kc(158,`a`,31),ug(),Ac(159,`h2`),vN(160,`Conhecimentos necessários`),ug(),Ac(161,`p`),vN(162,`Para compreender o funcionamento do PO Sync e utilizá-lo é necessário ter conhecimento técnico em:`),ug(),Ac(163,`ul`)(164,`li`)(165,`a`,32),vN(166,`JavaScript (ES6)`),ug(),vN(167,`, em particular a utilização do padrão `),Ac(168,`a`,33)(169,`em`),vN(170,`Promises`),ug()(),vN(171,`;`),ug(),Ac(172,`li`)(173,`a`,34),vN(174,`Ionic`),ug(),vN(175,`;`),ug(),Ac(176,`li`)(177,`a`,35),vN(178,`Observable`),ug(),vN(179,` do `),Ac(180,`a`,36),vN(181,`RxJS`),ug(),vN(182,`;`),ug(),Ac(183,`li`),vN(184,`Protocolo de comunicação HTTP;`),ug(),Ac(185,`li`),vN(186,`Arquitetura REST.`),ug()(),Ac(187,`p`),Kc(188,`a`,37),ug(),Ac(189,`h2`)(190,`em`),vN(191,`Schemas`),ug()(),Ac(192,`p`),vN(193,`O PO Sync sincroniza os dados com base em um conjunto de `),Ac(194,`em`),vN(195,`schemas`),ug(),vN(196,`. Onde cada `),Ac(197,`em`),vN(198,`schema`),ug(),vN(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),Ac(200,`em`),vN(201,`schemas`),ug(),vN(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),ug(),Ac(203,`p`),Kc(204,`a`,38),ug(),Ac(205,`h3`),vN(206,`Como criar um `),Ac(207,`em`),vN(208,`schema`),ug()(),Ac(209,`p`),vN(210,`Cada `),Ac(211,`em`),vN(212,`schema`),ug(),vN(213,` deve implementar a interface `),Ac(214,`a`,29),vN(215,`PoSyncSchema`),ug(),vN(216,`. Para criar um `),Ac(217,`em`),vN(218,`schema`),ug(),vN(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),ug(),Ac(220,`pre`)(221,`code`,39),vN(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),ug()(),Ac(223,`p`),vN(224,`O comando ng generate do Angular CLI criará um arquivo com uma estrutura semelhante a essa:`),ug(),Ac(225,`pre`)(226,`code`,40),vN(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  // Endpoint para o m\xE9todo GET
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),ug()(),Ac(228,`p`),vN(229,`Nesta definição de `),Ac(230,`em`),vN(231,`schema`),ug(),vN(232,` podem ser configurados os `),Ac(233,`em`),vN(234,`endpoints`),ug(),vN(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),Ac(236,`em`),vN(237,`endpoint`),ug(),vN(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),Ac(239,`em`),vN(240,`endpoint`),ug(),vN(241,` do método GET para os outros métodos.`),ug(),Ac(242,`p`),vN(243,`A propriedade `),Ac(244,`code`),vN(245,`fields`),ug(),vN(246,` da interface `),Ac(247,`a`,29),vN(248,`PoSyncSchema`),ug(),vN(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),Ac(250,`em`),vN(251,`schema`),ug(),vN(252,` do tipo Pessoa, poderíamos ter os campos: nome, idade e endereço.`),ug(),Ac(253,`p`),vN(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),ug(),Ac(255,`p`),Kc(256,`a`,41),ug(),Ac(257,`h3`),vN(258,`Schematic`),ug(),Ac(259,`p`),vN(260,`Você pode utilizar um schematic para criar o arquivo com a estrutura básica do schema.`),ug(),Ac(261,`p`),vN(262,`Para isso utilize o comando`),ug(),Ac(263,`pre`)(264,`code`,39),vN(265,`ng generate @po-ui/ng-sync:schema
`),ug()(),Ac(266,`p`),vN(267,`Você também pode informar um caminho completo.`),ug(),Ac(268,`pre`)(269,`code`,39),vN(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),ug()(),Ac(271,`p`),vN(272,`Ou apenas o nome do schema que ele criará o arquivo na pasta que o comando for executado.`),ug(),Ac(273,`pre`)(274,`code`,39),vN(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),ug()(),Ac(276,`p`),Kc(277,`a`,42),ug(),Ac(278,`h2`),vN(279,`Preparando a API para a sincronização`),ug(),Ac(280,`p`),vN(281,`Para que a sincronização aconteça corretamente é necessário que a API tenha implementado a `),Ac(282,`a`,7),vN(283,`exclusão lógica`),ug(),vN(284,` e um `),Ac(285,`a`,8)(286,`em`),vN(287,`endpoint`),ug(),vN(288,` de sincronização`),ug(),vN(289,`.`),ug(),Ac(290,`p`),Kc(291,`a`,43),ug(),Ac(292,`h3`),vN(293,`Exclusão lógica`),ug(),Ac(294,`p`),vN(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),ug(),Ac(296,`pre`)(297,`code`,44),vN(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),ug()(),Ac(299,`p`),vN(300,`No registro acima o campo chamado `),Ac(301,`code`),vN(302,`isDeleted`),ug(),vN(303,` descreve se ele foi excluído ou não.`),ug(),Ac(304,`p`),vN(305,`Esta informação do campo deverá ser fornecida ao PO Sync dentro da declaração de cada `),Ac(306,`em`),vN(307,`schema`),ug(),vN(308,`, para isso temos a
propriedade `),Ac(309,`code`),vN(310,`deletedField`),ug(),vN(311,` na interface `),Ac(312,`a`,29),vN(313,`PoSyncSchema`),ug(),vN(314,`, por exemplo:`),ug(),Ac(315,`pre`)(316,`code`,40),vN(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  // Defini\xE7\xE3o do nome do campo
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),ug()(),Ac(318,`h4`),vN(319,`Porque exclusão lógica?`),ug(),Ac(320,`p`),vN(321,`A exclusão lógica é utilizada para que outras aplicações possam saber se um registro foi removido.`),ug(),Ac(322,`p`),vN(323,`Imagine que dois aplicativos estejam manipulando o mesmo registro através de um `),Ac(324,`em`),vN(325,`endpoint`),ug(),vN(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),ug(),Ac(327,`p`),Kc(328,`a`,45),ug(),Ac(329,`h3`)(330,`em`),vN(331,`Endpoint`),ug(),vN(332,` de sincronização`),ug(),Ac(333,`p`),vN(334,`Sempre que houver uma sincronização, uma requisição é feita neste `),Ac(335,`em`),vN(336,`endpoint`),ug(),vN(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),Ac(338,`em`),vN(339,`endpoint`),ug(),vN(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),Ac(341,`em`),vN(342,`schemas`),ug(),vN(343,` é necessário ter um `),Ac(344,`em`),vN(345,`endpoint`),ug(),vN(346,` de sincronização.`),ug(),Ac(347,`p`),vN(348,`Abra o seu navegador e acesse a URL
`),Ac(349,`a`,46),vN(350,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`),ug(),vN(351,`.`),ug(),Ac(352,`p`),vN(353,`O `),Ac(354,`em`),vN(355,`endpoint`),ug(),vN(356,` de sincronização deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:`),ug(),Ac(357,`pre`)(358,`code`,44),vN(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),ug()(),Ac(360,`p`),vN(361,`Onde:`),ug(),Ac(362,`ul`)(363,`li`)(364,`code`),vN(365,`hasNext`),ug(),vN(366,`: Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),ug(),Ac(367,`li`)(368,`code`),vN(369,`items`),ug(),vN(370,`: Lista de itens retornados.`),ug(),Ac(371,`li`)(372,`code`),vN(373,`po_sync_date`),ug(),vN(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),Ac(375,`em`),vN(376,`endpoint`),ug(),vN(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),ug()(),Ac(378,`blockquote`)(379,`p`),vN(380,`Esta estrutura de resposta é padronizada pelo `),Ac(381,`a`,47),vN(382,`Guia de implementação de APIs`),ug(),vN(383,`.`),ug()(),Ac(384,`blockquote`)(385,`p`)(386,`strong`),vN(387,`Primeira sincronização:`),ug(),vN(388,` como na primeira sincronização o PO Sync ainda não recebeu nenhuma data dos `),Ac(389,`em`),vN(390,`endpoints`),ug(),vN(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),ug()(),Ac(392,`p`),vN(393,`A definição deste `),Ac(394,`em`),vN(395,`endpoint`),ug(),vN(396,` deve ser feita na propriedade `),Ac(397,`code`),vN(398,`diffUrlApi`),ug(),vN(399,` da sua definição do `),Ac(400,`em`),vN(401,`schema`),ug(),vN(402,`, como no exemplo
abaixo:`),ug(),Ac(403,`pre`)(404,`code`,40),vN(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  // Defini\xE7\xE3o da URL de sincroniza\xE7\xE3o
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),ug()(),Ac(406,`p`),Kc(407,`a`,48),ug(),Ac(408,`h2`),vN(409,`Preparando a aplicação`),ug(),Ac(410,`p`),vN(411,`Após ter criado os `),Ac(412,`em`),vN(413,`schemas`),ug(),vN(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),Ac(415,`em`),vN(416,`schemas`),ug(),vN(417,` e as configurações iniciais. Se você seguiu o guia `),Ac(418,`a`,30),vN(419,`Começando com o PO Sync`),ug(),vN(420,`,
dentro do arquivo `),Ac(421,`code`),vN(422,`src/app/app.component.ts`),ug(),vN(423,`, no método `),Ac(424,`code`),vN(425,`initSync()`),ug(),vN(426,` foi feita a seguinte implementação:`),ug(),Ac(427,`pre`)(428,`code`,40),vN(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),ug()(),Ac(430,`p`),vN(431,`A variável `),Ac(432,`code`),vN(433,`config`),ug(),vN(434,` implementa a interface `),Ac(435,`a`,29),vN(436,`PoSyncConfig`),ug(),vN(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),Ac(438,`code`),vN(439,`type`),ug(),vN(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),Ac(441,`code`),vN(442,`poSync.sync()`),ug(),vN(443,` pode ser chamado para sincronizar os dados.`),ug(),Ac(444,`p`),Kc(445,`a`,49),ug(),Ac(446,`h3`),vN(447,`Sincronização periódica`),ug(),Ac(448,`p`),vN(449,`Para que os dados sejam atualizados dentro de um período de tempo, modifique a constante `),Ac(450,`code`),vN(451,`config`),ug(),vN(452,` do exemplo
anterior para ficar da seguinte forma:`),ug(),Ac(453,`pre`)(454,`code`,40),vN(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),ug()(),Ac(456,`p`),vN(457,`Onde o valor da propriedade `),Ac(458,`code`),vN(459,`period`),ug(),vN(460,` define que o sincronismo deverá ser ativado a cada 30 segundos.`),ug(),Ac(461,`p`),Kc(462,`a`,50),ug(),Ac(463,`h3`),vN(464,`Carga inicial dos dados`),ug(),Ac(465,`p`),vN(466,`Caso queira fazer a carga inicial dos dados que estão no servidor antes de fazer o primeiro sincronismo, o serviço `),Ac(467,`a`,29),vN(468,`PoSyncService`),ug(),vN(469,`
disponibiliza um m\xE9todo chamado `),Ac(470,`code`),vN(471,`PoSyncService.loadData()`),ug(),vN(472,`.`),ug(),Ac(473,`blockquote`)(474,`p`)(475,`strong`),vN(476,`Atenção:`),ug(),vN(477,` este método deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo.`),ug()(),Ac(478,`p`),vN(479,`Para implementar a carga inicial no código anterior, basta substituir a linha onde estava `),Ac(480,`code`),vN(481,`this.poSync.sync();`),ug(),vN(482,` pela
seguinte implementa\xE7\xE3o:`),ug(),Ac(483,`pre`)(484,`code`,40),vN(485,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  
  // Implementa\xE7\xE3o adicionada
  if(<condicao>) {
    this.poSync.loadData();
  }

});
`),ug()(),Ac(486,`p`),vN(487,`Onde `),Ac(488,`code`),vN(489,`<condicao>`),ug(),vN(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),ug(),Ac(491,`p`),Kc(492,`a`,51),ug(),Ac(493,`h2`),vN(494,`Manipulando os registros de um `),Ac(495,`em`),vN(496,`schema`),ug()(),Ac(497,`p`),vN(498,`Toda a manipulação dos registros de um `),Ac(499,`em`),vN(500,`schema`),ug(),vN(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),Ac(502,`a`,52),vN(503,`PoEntity`),ug(),vN(504,` que pode ser obtida a partir do método `),Ac(505,`code`),vN(506,`PoSyncService.getModel()`),ug(),vN(507,`, por exemplo:`),ug(),Ac(508,`pre`)(509,`code`,40),vN(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),ug()(),Ac(511,`p`),vN(512,`Onde o parâmetro "conference" representa o nome do `),Ac(513,`em`),vN(514,`schema`),ug(),vN(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),Ac(516,`code`),vN(517,`name`),ug(),vN(518,` da interface `),Ac(519,`a`,29),vN(520,`PoSyncSchema`),ug(),vN(521,`.`),ug(),Ac(522,`p`),vN(523,`Agora com esta instância podemos utilizar todos os métodos do `),Ac(524,`a`,52),vN(525,`PoEntity`),ug(),vN(526,` para manipular os registros.`),ug(),Ac(527,`p`),Kc(528,`a`,53),ug(),Ac(529,`h3`),vN(530,`Buscando os registros`),ug(),Ac(531,`blockquote`)(532,`p`),vN(533,`A busca dos registros sempre é feita na aplicação local, pois a mesma é atualizada com o servidor através do processo de sincronização.`),ug()(),Ac(534,`p`),vN(535,`Com a instância de `),Ac(536,`a`,52),vN(537,`PoEntity`),ug(),vN(538,` armazenada na propriedade `),Ac(539,`code`),vN(540,`this.conferenceModel`),ug(),vN(541,` podemos buscar
os registros com o `),Ac(542,`code`),vN(543,`PoEntity.find()`),ug(),vN(544,` da seguinte forma:`),ug(),Ac(545,`pre`)(546,`code`,40),vN(547,`this.conferences = await this.conferenceModel.find().exec();
`),ug()(),Ac(548,`p`),vN(549,`Podemos notar que após usar o método, foi necessário concatená-lo com o método `),Ac(550,`code`),vN(551,`PoQueryBuilder.exec()`),ug(),vN(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),ug(),Ac(553,`p`),vN(554,`Isso acontece porque o método `),Ac(555,`code`),vN(556,`PoEntity.find()`),ug(),vN(557,` retorna uma instância da classe `),Ac(558,`a`,54),vN(559,`PoQueryBuilder`),ug(),vN(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),Ac(561,`code`),vN(562,`PoQueryBuilder.exec()`),ug(),vN(563,` para concluir a busca.`),ug(),Ac(564,`p`),vN(565,`Por exemplo, para buscar os dados e ordená-los pelo campo do `),Ac(566,`em`),vN(567,`schema`),ug(),vN(568,` chamado `),Ac(569,`code`),vN(570,`title`),ug(),vN(571,`, podemos fazer:`),ug(),Ac(572,`pre`)(573,`code`,40),vN(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),ug()(),Ac(575,`p`),vN(576,`E se quisermos retornar somente os campos `),Ac(577,`code`),vN(578,`title`),ug(),vN(579,` e `),Ac(580,`code`),vN(581,`location`),ug(),vN(582,`, podemos fazer:`),ug(),Ac(583,`pre`)(584,`code`,40),vN(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),ug()(),Ac(586,`blockquote`)(587,`p`),vN(588,`Para saber mais sobre os métodos para construção de consultas, acesse `),Ac(589,`a`,54),vN(590,`PoQueryBuilder`),ug(),vN(591,`.`),ug()(),Ac(592,`p`),Kc(593,`a`,55),ug(),Ac(594,`h3`),vN(595,`Criação, atualização e exclusão de um registro`),ug(),Ac(596,`p`),vN(597,`Ainda com a instância de `),Ac(598,`a`,52),vN(599,`PoEntity`),ug(),vN(600,` podemos utilizar o método `),Ac(601,`code`),vN(602,`PoEntity.save()`),ug(),vN(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),ug(),Ac(604,`pre`)(605,`code`,40),vN(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),ug()(),Ac(607,`p`),vN(608,`E para atualizar a conferência, é necessário ter o registro buscado através do `),Ac(609,`a`,52),vN(610,`PoEntity`),ug(),vN(611,`,
pois este registro dever\xE1 conter o `),Ac(612,`em`),vN(613,`id`),ug(),vN(614,` depois que for salvo.`),ug(),Ac(615,`p`),vN(616,`Por exemplo, para buscarmos e atualizarmos a conferência que criamos acima, podemos fazer:`),ug(),Ac(617,`p`)(618,`strong`),vN(619,`1)`),ug(),vN(620,` Buscar a conferência pelo título "BrasilJS":`),ug(),Ac(621,`pre`)(622,`code`,40),vN(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),ug()(),Ac(624,`p`)(625,`strong`),vN(626,`2)`),ug(),vN(627,` Podemos atualizar a localização, por exemplo:`),ug(),Ac(628,`pre`)(629,`code`,40),vN(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),ug()(),Ac(631,`p`)(632,`strong`),vN(633,`3)`),ug(),vN(634,` Utilizamos o método `),Ac(635,`code`),vN(636,`PoEntity.save()`),ug(),vN(637,` para efetuar a atualização:`),ug(),Ac(638,`pre`)(639,`code`,40),vN(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),ug()(),Ac(641,`p`),vN(642,`Para excluir um registro também é necessário buscá-lo através do `),Ac(643,`a`,52),vN(644,`PoEntity`),ug(),vN(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),Ac(646,`code`),vN(647,`PoEntity.remove()`),ug(),vN(648,` para remover o registro, por exemplo:`),ug(),Ac(649,`pre`)(650,`code`,40),vN(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),ug()(),Ac(652,`p`),Kc(653,`a`,56),ug(),Ac(654,`h2`),vN(655,`Sincronização manual`),ug(),Ac(656,`p`),vN(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),ug(),Ac(658,`p`),vN(659,`Esta operação pode ser feita através do método `),Ac(660,`code`),vN(661,`PoSyncService.sync()`),ug(),vN(662,`. Por exemplo:`),ug(),Ac(663,`pre`)(664,`code`,40),vN(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),ug()(),Ac(666,`p`),Kc(667,`a`,57),ug(),Ac(668,`h2`),vN(669,`Técnicas avançadas`),ug(),Ac(670,`p`),Kc(671,`a`,58),ug(),Ac(672,`h3`),vN(673,`Notificação pós-sincronização`),ug(),Ac(674,`p`),vN(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),Ac(676,`code`),vN(677,`PoSyncService.onSync()`),ug(),vN(678,` que irá notificá-lo sempre que uma sincronização acontecer com sucesso.`),ug(),Ac(679,`p`),vN(680,`Por exemplo, no guia `),Ac(681,`a`,30),vN(682,`Começando com o PO Sync`),ug(),vN(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),Ac(684,`code`),vN(685,`PoSyncService.onSync()`),ug(),vN(686,` dentro do `),Ac(687,`code`),vN(688,`constructor()`),ug(),vN(689,`, localizado no arquivo `),Ac(690,`code`),vN(691,`src/pages/home/home.ts`),ug(),vN(692,`:`),ug(),Ac(693,`pre`)(694,`code`,40),vN(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),ug()(),Ac(696,`blockquote`)(697,`p`),vN(698,`Para saber mais sobre este método acesse `),Ac(699,`a`,29),vN(700,`PoSyncService.onSync()`),ug(),vN(701,`.`),ug()(),Ac(702,`p`),Kc(703,`a`,59),ug(),Ac(704,`h3`),vN(705,`Adaptando a resposta da API para o padrão do PO`),ug(),Ac(706,`p`),vN(707,`O PO Sync necessita que as APIs utilizem o padrão de respostas que está no `),Ac(708,`a`,47),vN(709,`Guia de implementação de APIs`),ug(),vN(710,` que segue a seguinte estrutura:`),ug(),Ac(711,`pre`)(712,`code`,44),vN(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),ug()(),Ac(714,`p`),vN(715,`No entanto, existem APIs que ainda não seguem este padrão. Imagine que você possua uma API que sempre retorne a seguinte estrutura:`),ug(),Ac(716,`pre`)(717,`code`,40),vN(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),ug()(),Ac(719,`p`),vN(720,`Onde:`),ug(),Ac(721,`ul`)(722,`li`)(723,`code`),vN(724,`next`),ug(),vN(725,`: é a URL da próxima página. Por exemplo: `),Ac(726,`code`),vN(727,`https://<url>?page=3`),ug(),vN(728,`;`),ug(),Ac(729,`li`)(730,`code`),vN(731,`data`),ug(),vN(732,`: lista de itens retornados;`),ug(),Ac(733,`li`)(734,`code`),vN(735,`sync_date`),ug(),vN(736,`: data da última sincronização.`),ug()(),Ac(737,`p`),vN(738,`E a API espera para paginação os seguintes parâmetros na URL:`),ug(),Ac(739,`ul`)(740,`li`)(741,`code`),vN(742,`pageNumber`),ug(),vN(743,`: indica o número da página;`),ug(),Ac(744,`li`)(745,`code`),vN(746,`size`),ug(),vN(747,`: quantidade de itens por página.`),ug()(),Ac(748,`p`),vN(749,`Por exemplo:`),ug(),Ac(750,`pre`)(751,`code`),vN(752,`http://<url>/?pageNumber=2&size=10
`),ug()(),Ac(753,`p`),vN(754,`É possível fazer a adaptação desta resposta utilizando a classe `),Ac(755,`a`,60),vN(756,`PoDataTransform`),ug(),vN(757,`.
Esta classe possui uma propriedade chamada `),Ac(758,`code`),vN(759,`data`),ug(),vN(760,` que representa a resposta que o `),Ac(761,`em`),vN(762,`endpoint`),ug(),vN(763,` retornou.`),ug(),Ac(764,`p`),vN(765,`Para fazer a adaptação desta estrutura de resposta:`),ug(),Ac(766,`p`)(767,`strong`),vN(768,`1)`),ug(),vN(769,` Crie uma nova classe e a faça herdar a classe `),Ac(770,`a`,60),vN(771,`PoDataTransform`),ug(),vN(772,`:`),ug(),Ac(773,`pre`)(774,`code`,40),vN(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),ug()(),Ac(776,`p`)(777,`strong`),vN(778,`2)`),ug(),vN(779,` Implemente os métodos da classe `),Ac(780,`a`,60),vN(781,`PoDataTransform`),ug(),vN(782,`:`),ug(),Ac(783,`pre`)(784,`code`,40),vN(785,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {

  getDateFieldName(): string {
    return 'sync_date';
  }

  getItemsFieldName(): string {
    return 'data';
  }

  getPageParamName(): string {
    return 'pageNumber';
  }

  getPageSizeParamName(): string {
    return 'size';
  }

  hasNext(): boolean {
    return !!this.data.next;
  }

}
`),ug()(),Ac(786,`p`),vN(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),Ac(788,`code`),vN(789,`items`),ug(),vN(790,` conforme o padrão PO UI, mas sim em `),Ac(791,`code`),vN(792,`data`),ug(),vN(793,`, ent\xE3o no m\xE9todo
`),Ac(794,`code`),vN(795,`MyDataTransform.getItemsFieldName()`),ug(),vN(796,` será retornado o valor `),Ac(797,`code`),vN(798,`data`),ug(),vN(799,`.`),ug(),Ac(800,`p`),vN(801,`O método `),Ac(802,`code`),vN(803,`MyDataTransform.hasNext()`),ug(),vN(804,` deve retornar um valor `),Ac(805,`em`),vN(806,`booleano`),ug(),vN(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),Ac(808,`code`),vN(809,`next`),ug(),vN(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),Ac(811,`code`),vN(812,`data`),ug(),vN(813,`, podemos saber se existe uma próxima página do seguinte modo:`),ug(),Ac(814,`pre`)(815,`code`,40),vN(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),ug()(),Ac(817,`p`)(818,`strong`),vN(819,`3)`),ug(),vN(820,` Por fim, deve ser criado uma instância desta classe `),Ac(821,`code`),vN(822,`MyDataTransform`),ug(),vN(823,` e incluí-la na propriedade do objeto `),Ac(824,`code`),vN(825,`PoSyncConfig`),ug(),vN(826,`
que \xE9 inserido no m\xE9todo `),Ac(827,`code`),vN(828,`PoSyncService.prepare()`),ug(),vN(829,`, da seguinte forma:`),ug(),Ac(830,`pre`)(831,`code`,40),vN(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),ug()(),Ac(833,`p`),vN(834,`Com isto, todas as respostas dos `),Ac(835,`em`),vN(836,`endpoints`),ug(),vN(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),ug(),Ac(838,`p`),Kc(839,`a`,61),ug(),Ac(840,`h3`),vN(841,`Capturando respostas da sincronização`),ug(),Ac(842,`p`),vN(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),Ac(844,`code`),vN(845,`PoSyncService.getResponses()`),ug(),vN(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),Ac(847,`code`),vN(848,`.subscribe()`),ug(),vN(849,`, retorna um objeto do tipo `),Ac(850,`code`),vN(851,`PoSyncResponse`),ug(),vN(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),ug(),Ac(853,`pre`)(854,`code`,40),vN(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),ug()(),Ac(856,`h4`),vN(857,`Em que situações este monitoramento pode ser útil?`),ug(),Ac(858,`p`),vN(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),ug(),Ac(860,`p`),vN(861,`O consumo da fila de eventos pode ser suspenso em duas situações:`),ug(),Ac(862,`ul`)(863,`li`),vN(864,`Se o servidor rejeitar a requisição com `),Ac(865,`em`),vN(866,`status`),ug(),vN(867,` diferente da classe de `),Ac(868,`em`),vN(869,`status 2xx`),ug(),vN(870,` (sucesso);`),ug(),Ac(871,`li`),vN(872,`Se um item da fila representa uma requisição de alteração ou exclusão e o registro envolvido não possuir `),Ac(873,`em`),vN(874,`id`),ug(),vN(875,`.`),ug()(),Ac(876,`p`),vN(877,`Para resolver este tipo de problema, uma solução é remover este item da fila de eventos, isto pode ser feito da seguinte forma:`),ug(),Ac(878,`pre`)(879,`code`,40),vN(880,`// Monitora o consumo da fila de eventos
this.poSync.getResponses().subscribe(poSyncResponse => {

  // Verifica se o retorno do consumo da fila \xE9 um erro HTTP
  if (poSyncResponse.response instanceof HttpErrorResponse || poSyncResponse.response instanceof PoEventSourcingErrorResponse) {

    // Remove o item da fila de eventos
    this.poSync.removeItemOfSync(poSyncResponse.id).then(() => {
      // Sincroniza os itens novamente
      return this.poSync.resumeSync();
    });

  }

});
`),ug()(),Ac(881,`blockquote`)(882,`p`),vN(883,`Saiba mais sobre `),Ac(884,`a`,29),vN(885,`PoSyncService.getResponses()`),ug(),vN(886,`, `),Ac(887,`a`,29),vN(888,`PoSyncService.removeItemOfSync()`),ug(),vN(889,`
e `),Ac(890,`a`,62),vN(891,`PoEventSourcingErrorResponse`),ug(),vN(892,`.`),ug()(),Ac(893,`p`),Kc(894,`a`,63),ug(),Ac(895,`h3`),vN(896,`Inserindo requisições HTTP na fila de eventos`),ug(),Ac(897,`p`),vN(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),Ac(899,`code`),vN(900,`PoSyncService.insertHttpCommand()`),ug(),vN(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),Ac(902,`a`,29),vN(903,`PoHttpRequestData`),ug(),vN(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),ug(),Ac(905,`pre`)(906,`code`,40),vN(907,`const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};

this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Item adicionado na fila de eventos e retornado o ID do evento em "commandId"
});
`),ug()(),Ac(908,`p`),vN(909,`O método `),Ac(910,`code`),vN(911,`PoSyncService.insertHttpCommand()`),ug(),vN(912,` retorna uma promessa e no parâmetro do `),Ac(913,`em`),vN(914,`callback`),ug(),vN(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),Ac(916,`a`,29),vN(917,`PoSyncService.getResponses()`),ug(),vN(918,`, por exemplo:`),ug(),Ac(919,`pre`)(920,`code`,40),vN(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

  if(poSyncResponse.id === this.commandResponseId) {
    // \xC9 o evento de requisi\xE7\xE3o HTTP customizado
  }

});

const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};


this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Atribui\xE7\xE3o do identificador do evento a uma propriedade
  this.commandResponseId = commandId
});
`),ug()(),Ac(922,`p`),vN(923,`Também é possível fazer o envio de arquivo (File) para o servidor utilizando o `),Ac(924,`code`),vN(925,`Content-Type: multipart/form-data`),ug(),vN(926,`. Para isso, deve ser informado no `),Ac(927,`code`),vN(928,`body`),ug(),vN(929,` o `),Ac(930,`code`),vN(931,`rawFile`),ug(),vN(932,`, conforme exemplo abaixo:`),ug(),Ac(933,`pre`)(934,`code`,40),vN(935,`public insertFileHttpCommand(file: File) {
  const requestData: PoHttpRequestData = {
    url: 'http://my-server/api/v1/upload';,
    method: PoHttpRequestType.POST,
    headers: Array<PoHttpHeaderOption> = [{ name: 'Authorization', value: 'Basic ' + btoa('13' + ':' + '13') }],
    body: file.rawFile,
    formField: 'files',
  };

  this.poSync.insertHttpCommand(requestData).then(commandId => {
    // Evento HTTP adicionado na fila de eventos e retornado o ID do evento em "commandId"
  });
}
`),ug()(),Ac(936,`blockquote`)(937,`p`),vN(938,`Caso não seja passado nenhum valor para a propriedade `),Ac(939,`code`),vN(940,`formField`),ug(),vN(941,` será aplicado o valor padrão `),Ac(942,`code`),vN(943,`file`),ug(),vN(944,`.`),ug()(),Ac(945,`blockquote`)(946,`p`),vN(947,`Para o envio de arquivos recomendamos o uso prioritário do `),Ac(948,`code`),vN(949,`lokijs`),ug(),vN(950,` nas configurações do `),Ac(951,`code`),vN(952,`PoStorageModule`),ug(),vN(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),Ac(954,`code`),vN(955,`app.module.ts`),ug(),vN(956,` da sua aplicação, por exemplo:`),ug()(),Ac(957,`pre`)(958,`code`,40),vN(959,`...
@NgModule({
  ...
  imports: [
    ...
    PoStorageModule.forRoot({ // import do m\xF3dulo Po Storage,
      name: 'mystorage',
      storeName: '_mystore',
      driverOrder: ['lokijs', 'indexeddb', 'localstorage', 'websql']
    }),
    PoSyncModule, // import do m\xF3dulo Po Sync
  ],
  ...
})
export class AppModule {}
`),ug()(),Ac(960,`p`),Kc(961,`a`,64),ug(),Ac(962,`h3`),vN(963,`Criação de identificador customizado para eventos da fila`),ug(),Ac(964,`p`),vN(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),Ac(966,`code`),vN(967,`PoEntity.save()`),ug(),vN(968,`, `),Ac(969,`code`),vN(970,`PoEntity.remove()`),ug(),vN(971,` ou `),Ac(972,`code`),vN(973,`PoSync.insertHttpCommand`),ug(),vN(974,`. Este identificador é retornado junto com o objeto `),Ac(975,`code`),vN(976,`PoSyncResponse`),ug(),vN(977,` do método `),Ac(978,`code`),vN(979,`PoSync.getResponses()`),ug(),vN(980,`, o que possibilita identificar se o evento foi enviado ou não, da seguinte forma:`),ug(),Ac(981,`p`),vN(982,`Na criação ou alteração de um registro:`),ug(),Ac(983,`pre`)(984,`code`,40),vN(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),ug()(),Ac(986,`p`),vN(987,`Na remoção de um registro:`),ug(),Ac(988,`pre`)(989,`code`,40),vN(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),ug()(),Ac(991,`p`),vN(992,`Ou na criação de uma requisição HTTP customizada:`),ug(),Ac(993,`pre`)(994,`code`,40),vN(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),ug()(),Ac(996,`p`),Kc(997,`a`,65),ug(),Ac(998,`h3`),vN(999,`Alterando as definições dos `),Ac(1e3,`em`),vN(1001,`schemas`),ug()(),Ac(1002,`p`),vN(1003,`Em algumas situações, pode existir a necessidade de alterar a definição do `),Ac(1004,`em`),vN(1005,`schema`),ug(),vN(1006,` que foi inserido como parâmetro dentro do método `),Ac(1007,`code`),vN(1008,`PoSyncService.prepare()`),ug(),vN(1009,`. Uma alternativa para fazer esta alteração é:`),ug(),Ac(1010,`p`)(1011,`strong`),vN(1012,`1)`),ug(),vN(1013,` Chamar o método `),Ac(1014,`a`,29)(1015,`code`),vN(1016,`PoSynceService.destroy()`),ug()(),vN(1017,`:`),ug(),Ac(1018,`pre`)(1019,`code`,40),vN(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),ug()(),Ac(1021,`blockquote`)(1022,`p`)(1023,`strong`),vN(1024,`Atenção:`),ug(),vN(1025,` ao utilizar o método `),Ac(1026,`code`),vN(1027,`PoSynceService.destroy()`),ug(),vN(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),ug()(),Ac(1029,`p`)(1030,`strong`),vN(1031,`2)`),ug(),vN(1032,` E após a conclusão da promessa do método `),Ac(1033,`code`),vN(1034,`PoSynceService.destroy()`),ug(),vN(1035,` chamar o m\xE9todo
`),Ac(1036,`code`),vN(1037,`PoSyncService.prepare()`),ug(),vN(1038,` com a nova definição:`),ug(),Ac(1039,`pre`)(1040,`code`,40),vN(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),ug()(),Ac(1042,`blockquote`)(1043,`p`)(1044,`strong`),vN(1045,`Atenção:`),ug(),vN(1046,` para que não venham ocorrer erros em ações que dependem das definições dos `),Ac(1047,`em`),vN(1048,`schemas`),ug(),vN(1049,`, recomenda-se utilizar
o m\xE9todo `),Ac(1050,`code`),vN(1051,`PoSyncService.prepare()`),ug(),vN(1052,` logo após o método `),Ac(1053,`code`),vN(1054,`PoSynceService.destroy()`),ug(),vN(1055,`.`),ug()(),Ac(1056,`p`),Kc(1057,`a`,66),ug(),Ac(1058,`h2`),vN(1059,`Aplicativo de demonstração do PO Sync`),ug(),Ac(1060,`p`),vN(1061,`PO Conference Application é um aplicativo de demonstração do PO Sync baseado no `),Ac(1062,`a`,67),vN(1063,`Ionic Conference Application`),ug(),vN(1064,`. Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma didática.`),ug(),Ac(1065,`blockquote`)(1066,`p`),vN(1067,`Acesse o repositório do aplicativo `),Ac(1068,`a`,68),vN(1069,`neste link`),ug(),vN(1070,`.`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:414,vars:0,consts:[[`p-title`,`Começando com o PO Sync`,1,`guides`,`app-portal`],[`href`,`https://ionicframework.com/docs`],[`href`,`/guides/sync-fundamentals`],[`href`,`/documentation/po-sync`],[`href`,`https://nodejs.org/en/`],[`href`,`https://cli.angular.io/`],[1,`language-shell`],[`href`,`https://ionicframework.com/docs/cli/`],[1,`language-json`],[1,`language-typescript`],[1,`language-html`],[`href`,`https://github.com/ionic-team/ionicons/issues/1011`],[`src`,`./assets/graphics/po-sync/app-get-started.gif`,`alt`,`Getting Started App`],[`href`,`./guides/sync-fundamentals`],[`href`,`./documentation/po-sync`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Esse guia servirá para criar e configurar uma aplicação em `),Ac(3,`a`,1),vN(4,`Ionic`),ug(),vN(5,` com o uso do PO Sync.`),ug(),Ac(6,`p`),vN(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),Ac(8,`a`,2),vN(9,`Fundamentos do PO Sync`),ug(),vN(10,` e a documentação de referência de `),Ac(11,`a`,3),vN(12,`API do PO Sync`),ug(),vN(13,`.`),ug(),Ac(14,`h3`),vN(15,`Pré-requisitos`),ug(),Ac(16,`ul`)(17,`li`)(18,`a`,4),vN(19,`Node.js e NPM`),ug()(),Ac(20,`li`)(21,`a`,5),vN(22,`Angular CLI`),ug(),vN(23,` (~22.0.1):`),Ac(24,`ul`)(25,`li`)(26,`pre`)(27,`code`,6),vN(28,`npm install -g @angular/cli@22
`),ug()()()()(),Ac(29,`li`)(30,`a`,7),vN(31,`Ionic`),ug(),vN(32,`:`),Ac(33,`ul`)(34,`li`)(35,`pre`)(36,`code`,6),vN(37,`npm install -g @ionic/cli
`),ug()()()()()(),Ac(38,`blockquote`)(39,`p`),vN(40,`É importante ter conhecimento prévio em Angular e Ionic para seguir esta documentação e obter melhor entendimento do PO Sync.`),ug()(),Ac(41,`h3`),vN(42,`Passo 1 - Criando o aplicativo`),ug(),Ac(43,`p`),vN(44,`Para a aplicação de exemplo usaremos o template `),Ac(45,`em`),vN(46,`blank`),ug(),vN(47,` do Ionic. Para isso, execute o seguinte comando:`),ug(),Ac(48,`pre`)(49,`code`,6),vN(50,`ionic start po-sync-getting-started blank
`),ug()(),Ac(51,`p`),vN(52,`Caso surja a questão relacionada ao framework desejado, opte por `),Ac(53,`code`),vN(54,`Angular`),ug(),vN(55,`.`),ug(),Ac(56,`h3`),vN(57,`Passo 2 - Instalando as dependências`),ug(),Ac(58,`p`),vN(59,`É necessário realizar alguns ajustes de compatibilidade do PO UI para o projeto criado.`),ug(),Ac(60,`p`),vN(61,`Navegue até a pasta do aplicativo:`),ug(),Ac(62,`pre`)(63,`code`,6),vN(64,`cd po-sync-getting-started
`),ug()(),Ac(65,`p`),vN(66,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),ug(),Ac(67,`pre`)(68,`code`,8),vN(69,`  ...
  "dependencies": {
    "@angular/common": "~22.0.1",
    "@angular/compiler": "~22.0.1",
    "@angular/core": "~22.0.1",
    "@angular/forms": "~22.0.1",
    "@angular/platform-browser": "~22.0.1",
    "@angular/router": "~22.0.1",
    "@capacitor/app": "8.0.0",
    "@capacitor/core": "8.0.1",
    "@capacitor/haptics": "8.0.0",
    "@capacitor/keyboard": "8.0.0",
    "@capacitor/splash-screen": "8.0.0",
    "@capacitor/status-bar": "8.0.0",
    "@ionic/angular": "~8.7.16",
    "ionicons": "^7.0.0",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.0.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.0.1",
    "@angular/compiler-cli": "~22.0.1",
    "@angular/language-service": "~22.0.1",
    "@capacitor/cli": "8.0.1",
    "@ionic/angular-toolkit": "^12.0.0",
    ...
    "typescript": "~6.0.3"
  },
  ...
`),ug()(),Ac(70,`blockquote`)(71,`p`)(72,`strong`),vN(73,`Nota para projetos com módulos (NgModule)`),ug(),vN(74,`: A CLI do Ionic pode gerar projetos com o arquivo `),Ac(75,`code`),vN(76,`src/main.ts`),ug(),vN(77,` utilizando o `),Ac(78,`code`),vN(79,`platformBrowserDynamic`),ug(),vN(80,`. Caso isso aconteça, será necessário adicionar o pacote `),Ac(81,`code`),vN(82,`@angular/platform-browser-dynamic`),ug(),vN(83,` no arquivo `),Ac(84,`code`),vN(85,`package.json`),ug(),vN(86,` (dentro de `),Ac(87,`code`),vN(88,`dependencies`),ug(),vN(89,`), juntamente com as outras dependências listadas acima:`),ug(),Ac(90,`pre`)(91,`code`,8),vN(92,`"dependencies": {
  ...
  "@angular/platform-browser-dynamic": "~22.0.1",
  ...
}
`),ug()()(),Ac(93,`blockquote`)(94,`p`),vN(95,`Após configurar seu arquivo, certifique-se de salvar as alterações realizadas.`),ug()(),Ac(96,`p`),vN(97,`Realize a limpeza do arquivo `),Ac(98,`code`),vN(99,`package-lock.json`),ug(),vN(100,` e da pasta `),Ac(101,`code`),vN(102,`node_modules/`),ug(),vN(103,`, para então executar o seguinte comando para instalar as dependências:`),ug(),Ac(104,`pre`)(105,`code`,6),vN(106,`npm install
`),ug()(),Ac(107,`h3`),vN(108,`Passo 3 - Instalando o po-sync`),ug(),Ac(109,`p`),vN(110,`Para instalar o `),Ac(111,`code`),vN(112,`po-sync`),ug(),vN(113,` no aplicativo execute o seguinte comando:`),ug(),Ac(114,`pre`)(115,`code`,6),vN(116,`ng add @po-ui/ng-sync@next
`),ug()(),Ac(117,`h3`),vN(118,`Passo 4 - Utilizando o po-sync`),ug(),Ac(119,`h4`),vN(120,`Passo 4.1 (NgModule) - Importando o `),Ac(121,`code`),vN(122,`po-sync`),ug(),vN(123,` e o `),Ac(124,`code`),vN(125,`po-storage`),ug()(),Ac(126,`p`),vN(127,`No arquivo `),Ac(128,`code`),vN(129,`src/app/app.module.ts`),ug(),vN(130,`, adicione a importação dos módulos do `),Ac(131,`code`),vN(132,`po-storage`),ug(),vN(133,` e do `),Ac(134,`code`),vN(135,`po-sync`),ug(),vN(136,`:`),ug(),Ac(137,`pre`)(138,`code`,9),vN(139,`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PoStorageModule } from '@po-ui/ng-storage';
import { PoSyncModule } from '@po-ui/ng-sync';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PoStorageModule.forRoot(),
    PoSyncModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
`),ug()(),Ac(140,`h4`),vN(141,`Passo 4.1 (Standalone) - Importando o `),Ac(142,`code`),vN(143,`po-sync`),ug(),vN(144,` e o `),Ac(145,`code`),vN(146,`po-storage`),ug()(),Ac(147,`p`),vN(148,`No arquivo `),Ac(149,`code`),vN(150,`src/main.ts`),ug(),vN(151,`, avalie se foi feita a importação dos módulos do `),Ac(152,`code`),vN(153,`po-storage`),ug(),vN(154,` e do `),Ac(155,`code`),vN(156,`po-sync`),ug(),vN(157,`: `),ug(),Ac(158,`pre`)(159,`code`,9),vN(160,`import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoSyncModule } from '@po-ui/ng-sync';
import { PoStorageModule } from '@po-ui/ng-storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(PoSyncModule),
    importProvidersFrom(PoStorageModule.forRoot()),
  ],
});
`),ug()(),Ac(161,`h4`),vN(162,`Passo 4.2 - Mapeando seu primeiro `),Ac(163,`em`),vN(164,`schema`),ug()(),Ac(165,`p`),vN(166,`O `),Ac(167,`code`),vN(168,`po-sync`),ug(),vN(169,` utiliza a definição de `),Ac(170,`code`),vN(171,`schemas`),ug(),vN(172,`, onde cada `),Ac(173,`code`),vN(174,`schema`),ug(),vN(175,` representa um modelo de dados armazenado no dispositivo.`),ug(),Ac(176,`p`),vN(177,`Crie o arquivo `),Ac(178,`code`),vN(179,`src/app/home/conference-schema.constants.ts`),ug(),vN(180,` e adicione o conteúdo abaixo:`),ug(),Ac(181,`pre`)(182,`code`,9),vN(183,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),ug()(),Ac(184,`h3`),vN(185,`Passo 5 - Configurando o método prepare`),ug(),Ac(186,`p`),vN(187,`Após ter o seu primeiro `),Ac(188,`em`),vN(189,`schema`),ug(),vN(190,` criado, configure o seu aplicativo utilizando o `),Ac(191,`code`),vN(192,`po-sync`),ug(),vN(193,` através do método `),Ac(194,`code`),vN(195,`PoSyncService.prepare()`),ug(),vN(196,`.`),ug(),Ac(197,`h4`),vN(198,`Passo 5.1 (NgModule) - Alterando o `),Ac(199,`code`),vN(200,`src/app/app.component.ts`),ug()(),Ac(201,`p`),vN(202,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),ug(),Ac(203,`pre`)(204,`code`,9),vN(205,`import { Component, OnInit, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';
import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };
    const schemas = [conferenceSchema];
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),ug()(),Ac(206,`p`),vN(207,`Após utilizar o método `),Ac(208,`code`),vN(209,`PoSyncService.prepare()`),ug(),vN(210,`, a aplicação estará pronta para sincronizar os dados através do método `),Ac(211,`code`),vN(212,`PoSyncService.sync()`),ug(),vN(213,`.`),ug(),Ac(214,`h4`),vN(215,`Passo 5.1 (Standalone) - Alterando o `),Ac(216,`code`),vN(217,`src/app/app.component.ts`),ug()(),Ac(218,`p`),vN(219,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),ug(),Ac(220,`pre`)(221,`code`,9),vN(222,`import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';

import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };

    const schemas = [conferenceSchema];
    
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),ug()(),Ac(223,`h3`),vN(224,`Passo 6 (NgModule) - Acessando os dados`),ug(),Ac(225,`p`),vN(226,`Caso o projeto tenha sido gerado em uma versão anterior a 9.x do `),Ac(227,`code`),vN(228,`@ionic/angular`),ug(),vN(229,`, no arquivo `),Ac(230,`code`),vN(231,`po-sync-getting-started/src/app/home/home.module.ts`),ug(),vN(232,`, atualize a importação do `),Ac(233,`code`),vN(234,`IonicModule`),ug(),vN(235,` para utilizar o caminho `),Ac(236,`code`),vN(237,`import { IonicModule } from '@ionic/angular';`),ug(),vN(238,`:`),ug(),Ac(239,`pre`)(240,`code`,9),vN(241,`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
`),ug()(),Ac(242,`blockquote`)(243,`p`)(244,`strong`),vN(245,`Nota sobre importação do `),Ac(246,`code`),vN(247,`IonicModule`),ug()(),vN(248,`: As versões anteriores à 9.x do `),Ac(249,`code`),vN(250,`@ionic/angular`),ug(),vN(251,` não possuem o export `),Ac(252,`code`),vN(253,`lazy`),ug(),vN(254,`, devendo ser feito o import de `),Ac(255,`code`),vN(256,`@ionic/angular`),ug(),vN(257,`. A partir da versão 9.x, o import de `),Ac(258,`code`),vN(259,`@ionic/angular/lazy`),ug(),vN(260,` funciona normalmente (sendo o padrão da CLI do ionic para projetos standalone).`),ug()(),Ac(261,`p`),vN(262,`Localize o arquivo `),Ac(263,`code`),vN(264,`src/app/home/home.page.ts`),ug(),vN(265,` e faça as seguintes alterações:`),ug(),Ac(266,`pre`)(267,`code`,9),vN(268,`import { Component, inject, signal } from '@angular/core';

import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}
`),ug()(),Ac(269,`p`),vN(270,`No construtor, foi realizado uma inscrição no método `),Ac(271,`code`),vN(272,`PoSyncService.onSync()`),ug(),vN(273,`, para quando ocorrer uma sincronização, o método `),Ac(274,`code`),vN(275,`loadHomePage()`),ug(),vN(276,` busque um registro do `),Ac(277,`em`),vN(278,`schema`),ug(),vN(279,` "Conference".`),ug(),Ac(280,`h3`),vN(281,`Passo 6 (Standalone) - Acessando os dados`),ug(),Ac(282,`p`),vN(283,`Localize o arquivo `),Ac(284,`code`),vN(285,`src/app/home/home.page.ts`),ug(),vN(286,` e faça as seguintes alterações:`),ug(),Ac(287,`pre`)(288,`code`,9),vN(289,`import { Component, inject, signal } from '@angular/core';

import {
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle
} from '@ionic/angular/standalone';
import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonCard, IonCardContent, IonCardTitle],
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}
`),ug()(),Ac(290,`h3`),vN(291,`Passo 7 - Exibindo os dados em tela`),ug(),Ac(292,`p`),vN(293,`No arquivo `),Ac(294,`code`),vN(295,`src/app/home/home.page.html`),ug(),vN(296,` crie a seguinte estrutura:`),ug(),Ac(297,`pre`)(298,`code`,10),vN(299,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()" (keyup.enter)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>  
  <ion-button expand="full" color="danger" (click)="clear()" (keyup.enter)="clear()">Apagar informa\xE7\xF5es</ion-button>

  @if (conference(); as conference) {
    <ion-card>
      <ion-card-content>
        <ion-card-title>
          `),Ac(300,`span`),Qv(),vN(301,`{{`),Xv(),ug(),vN(302,` conference.title `),Ac(303,`span`),Qv(),vN(304,`}}`),Xv(),ug(),vN(305,`
        </ion-card-title>
        <p>`),Ac(306,`span`),Qv(),vN(307,`{{`),Xv(),ug(),vN(308,` conference.description `),Ac(309,`span`),Qv(),vN(310,`}}`),Xv(),ug(),vN(311,`</p>
        <p>`),Ac(312,`span`),Qv(),vN(313,`{{`),Xv(),ug(),vN(314,` conference.location `),Ac(315,`span`),Qv(),vN(316,`}}`),Xv(),ug(),vN(317,`</p>
      </ion-card-content>
    </ion-card>
  }
</ion-content>
`),ug()(),Ac(318,`h3`),vN(319,`Passo 8 - Executando o aplicativo`),ug(),Ac(320,`p`),vN(321,`Execute o comando `),Ac(322,`code`),vN(323,`ionic serve`),ug(),vN(324,` e verifique o funcionamento do aplicativo Ionic com `),Ac(325,`code`),vN(326,`po-sync`),ug(),vN(327,`.`),ug(),Ac(328,`blockquote`)(329,`p`),vN(330,`Pode ocorrer o seguinte erro `),Ac(331,`code`),vN(332,`TypeError: Failed to fetch dynamically imported module...`),ug(),vN(333,`, sendo necessário adicionar ao arquivo `),Ac(334,`code`),vN(335,`angular.json`),ug(),vN(336,` as seguintes configurações:`),ug(),Ac(337,`pre`)(338,`code`,8),vN(339,`{
  "projects": {
    "app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            ...
            "polyfills": ["zone.js"],
          },
        },
        "serve": {
          ...
          "builder": "@angular/build:dev-server",
          "options": {
            ...
            "prebundle": {
              "exclude": ["@ionic/angular", "@ionic/core", "ionicons"]
            }
          }
        },
      }
    }
  },
}
`),ug()()(),Ac(340,`blockquote`)(341,`p`),vN(342,`Pode ocorrer o seguinte erro `),Ac(343,`code`),vN(344,`TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'`),ug(),vN(345,` por conta da versão do TypeScript conforme esta `),Ac(346,`a`,11),vN(347,`issue`),ug(),vN(348,`, neste caso adicione no arquivo `),Ac(349,`strong`),vN(350,`tsconfig.json`),ug(),Ac(351,`code`),vN(352,`"skipLibCheck": true`),ug(),vN(353,`.`),ug()(),Ac(354,`blockquote`)(355,`p`),vN(356,`Ao executar um projeto standalone, pode ocorrer o seguinte erro: `),Ac(357,`code`),vN(358,`[ERROR] Invalid project type: angular-standalone (project config: ./ionic.config.json).`),ug(),vN(359,`. Para corrigir, edite o arquivo `),Ac(360,`code`),vN(361,`ionic.config.json`),ug(),vN(362,` e ajuste a propriedade `),Ac(363,`code`),vN(364,`type`),ug(),vN(365,` para o valor `),Ac(366,`code`),vN(367,`angular`),ug(),vN(368,`.`),ug()(),Ac(369,`h4`),vN(370,`Passo 8.1 - Entendendo o funcionamento do `),Ac(371,`code`),vN(372,`po-sync`),ug()(),Ac(373,`ul`)(374,`li`)(375,`p`),vN(376,`O aplicativo sincroniza os dados que estão no servidor através do método `),Ac(377,`code`),vN(378,`PoSyncService.sync()`),ug(),vN(379,`;`),ug()(),Ac(380,`li`)(381,`p`),vN(382,`Durante esta sincronização é efetuada a busca dos registros utilizando a URL de GET, informada no `),Ac(383,`code`),vN(384,`conference-schema.constants.ts`),ug(),vN(385,`, e o retorno é salvo no dispositivo do cliente;`),ug()(),Ac(386,`li`)(387,`p`),vN(388,`Com os dados salvos no dispositivo, é possível desabilitar o acesso à internet do aplicativo e ainda continuar acessando os dados através do `),Ac(389,`code`),vN(390,`po-sync`),ug(),vN(391,`.`),ug()()(),Ac(392,`p`),vN(393,`Demonstração do aplicativo acessando os dados `),Ac(394,`em`),vN(395,`offline`),ug(),vN(396,`:`),ug(),Ac(397,`p`),Kc(398,`img`,12),ug(),Ac(399,`h3`),vN(400,`Próximos passos`),ug(),Ac(401,`ul`)(402,`li`)(403,`p`),vN(404,`Leia sobre os principais `),Ac(405,`a`,13),vN(406,`fundamentos do PO Sync`),ug(),vN(407,`.`),ug()(),Ac(408,`li`)(409,`p`),vN(410,`Saiba mais sobre a `),Ac(411,`a`,14),vN(412,`API do PO Sync`),ug(),vN(413,`.`),ug()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var H=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:298,vars:0,consts:[[`p-title`,`Customização de Temas usando o serviço PO-UI`,1,`guides`,`app-portal`],[1,`po-row`,2,`margin`,`20px 0`],[1,`po-lg-2`,`po-md-5`,`po-sm-12`,2,`padding`,`10px`],[2,`text-align`,`center`],[`p-icon`,`an an-palette`,2,`font-size`,`24px`],[`p-icon`,`an an-sun`,2,`font-size`,`24px`],[`p-icon`,`an an-moon`,2,`font-size`,`24px`],[`p-icon`,`an an-wheelchair-motion`,2,`font-size`,`24px`],[`p-icon`,`an an-wrench`,2,`font-size`,`24px`],[`p-icon`,`an an-lightning`,2,`font-size`,`24px`],[`href`,`guides/theme-service#introduction`],[`href`,`guides/theme-service#whyUse`],[`href`,`guides/theme-service#config`],[`href`,`guides/theme-service#configModule`],[`href`,`guides/theme-service#configStyle`],[`href`,`guides/theme-service#configService`],[`href`,`guides/theme-service#howToUse`],[`href`,`guides/theme-service#howToUseBasic`],[`href`,`guides/theme-service#howToUseComplete`],[`href`,`guides/theme-service#applyTheme`],[`href`,`guides/theme-service#applyThemeInitial`],[`href`,`guides/theme-service#applyThemeDynamic`],[`href`,`guides/theme-service#advanced`],[`href`,`guides/theme-service#advancedOverride`],[`href`,`guides/theme-service#advancedReset`],[`href`,`guides/theme-service#advancedPersist`],[`href`,`guides/theme-service#advancedSize`],[`href`,`guides/theme-service#more`],[`href`,`guides/theme-service#sampleStackblitz`],[`id`,`introduction`],[`id`,`whyUse`],[`id`,`config`],[`id`,`configModule`],[1,`language-typescript`],[`id`,`configStyle`],[1,`language-json`],[`id`,`configService`],[`id`,`howToUse`],[`id`,`howToUseBasic`],[`id`,`howToUseComplete`],[`id`,`applyTheme`],[`id`,`applyThemeInitial`],[`id`,`applyThemeDynamic`],[`id`,`advanced`],[`id`,`advancedOverride`],[1,`language-html`],[1,`language-css`],[`id`,`advancedReset`],[`id`,`advancedPersist`],[`id`,`advancedSize`],[`id`,`more`],[`href`,`documentation/po-theme`],[`href`,`https://doc.animaliads.io/`],[`id`,`sampleStackblitz`],[`href`,`https://stackblitz.com/edit/poui-theme-service`,`target`,`_blank`,`rel`,`noreferrer`],[`src`,`https://developer.stackblitz.com/img/open_in_stackblitz.svg`,`alt`,`Open in StackBlitz`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`A partir da versão 19.X.X, o PO-UI oferece um serviço completo para criação e gestão de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos específicos de componente.`),ug(),Ac(3,`p`),vN(4,`Principais Recursos:`),ug(),Ac(5,`div`,1)(6,`div`,2)(7,`div`,3),Kc(8,`po-icon`,4),Ac(9,`p`),vN(10,`Paletas de cores`),ug()()(),Ac(11,`div`,2)(12,`div`,3)(13,`div`),Kc(14,`po-icon`,5)(15,`po-icon`,6),ug(),Ac(16,`p`),vN(17,`Temas light/dark`),ug()()(),Ac(18,`div`,2)(19,`div`,3),Kc(20,`po-icon`,7),Ac(21,`p`),vN(22,`Acessibilidade (AA/AAA)`),ug()()(),Ac(23,`div`,2)(24,`div`,3),Kc(25,`po-icon`,8),Ac(26,`p`),vN(27,`Sobrescrita de estilos`),ug()()(),Ac(28,`div`,2)(29,`div`,3),Kc(30,`po-icon`,9),Ac(31,`p`),vN(32,`Aplicação dinâmica`),ug()()()(),Ac(33,`h3`),vN(34,`Conteúdo`),ug(),Ac(35,`ul`)(36,`li`)(37,`a`,10),vN(38,`Introdução à Customização de Temas no PO UI`),ug()(),Ac(39,`li`)(40,`a`,11),vN(41,`Por Que Usar o PoThemeService?`),ug()(),Ac(42,`li`)(43,`a`,12),vN(44,`Configuração Inicial`),ug(),Ac(45,`ul`)(46,`li`)(47,`a`,13),vN(48,`Importação do Módulo`),ug()(),Ac(49,`li`)(50,`a`,14),vN(51,`Estilo PO-UI`),ug()(),Ac(52,`li`)(53,`a`,15),vN(54,`Injeção do Serviço`),ug()()()(),Ac(55,`li`)(56,`a`,16),vN(57,`Como Utilizar o Serviço de Tema`),ug(),Ac(58,`ul`)(59,`li`)(60,`a`,17),vN(61,`Estrutura Básica`),ug()(),Ac(62,`li`)(63,`a`,18),vN(64,`Exemplo Completo`),ug()()()(),Ac(65,`li`)(66,`a`,19),vN(67,`Aplicando o Tema`),ug(),Ac(68,`ul`)(69,`li`)(70,`a`,20),vN(71,`Aplicação Inicial`),ug()(),Ac(72,`li`)(73,`a`,21),vN(74,`Aplicação Dinâmica`),ug()()()(),Ac(75,`li`)(76,`a`,22),vN(77,`Técnicas Avançadas`),ug(),Ac(78,`ul`)(79,`li`)(80,`a`,23),vN(81,`Sobrescrita de Variáveis`),ug()(),Ac(82,`li`)(83,`a`,24),vN(84,`Reset para Tema Padrão`),ug()(),Ac(85,`li`)(86,`a`,25),vN(87,`Persistência de Tema`),ug()(),Ac(88,`li`)(89,`a`,26),vN(90,`Gerenciamento de Tamanhos`),ug()()()(),Ac(91,`li`)(92,`a`,27),vN(93,`Mais informações`),ug()(),Ac(94,`li`)(95,`a`,28),vN(96,`Exemplo Completo no Stackblitz`),ug()()(),Ac(97,`p`),Kc(98,`a`,29),ug(),Ac(99,`h3`),vN(100,`Introdução à Customização de Temas no PO UI`),ug(),Ac(101,`p`),vN(102,`O PO UI oferece um sistema robusto e flexível para personalização visual de componentes, permitindo que desenvolvedores e designers criem experiências únicas e alinhadas às necessidades específicas de cada projeto. A customização vai além da simples alteração de cores - é um sistema completo que abrange desde variáveis CSS globais até a criação de temas dinâmicos com suporte a light/dark mode, acessibilidade avançada e controle granular sobre cada componente.`),ug(),Ac(103,`p`),Kc(104,`a`,30),ug(),Ac(105,`h3`),vN(106,`Por Que Usar o PoThemeService?`),ug(),Ac(107,`p`),vN(108,`O serviço de temas do PO UI (PoThemeService) é o coração do sistema de customização, oferecendo:`),ug(),Ac(109,`details`)(110,`summary`)(111,`strong`),vN(112,`Aplicação Dinâmica de Temas`),ug()(),Ac(113,`ul`)(114,`li`),vN(115,`Alterações em tempo real sem recarregar a aplicação`),ug(),Ac(116,`li`),vN(117,`Transições suaves entre temas light/dark`),ug()()(),Ac(118,`details`)(119,`summary`)(120,`strong`),vN(121,`Gestão Centralizada`),ug()(),Ac(122,`ul`)(123,`li`),vN(124,`Criação e armazenamento de múltiplos temas`),ug(),Ac(125,`li`),vN(126,`Combinação de temas globais e customizações locais`),ug()()(),Ac(127,`details`)(128,`summary`)(129,`strong`),vN(130,`Integração com Estado da Aplicação`),ug()(),Ac(131,`ul`)(132,`li`),vN(133,`Persistência de preferências (localStorage)`),ug(),Ac(134,`li`),vN(135,`Sincronização com configurações do usuário`),ug()()(),Ac(136,`details`)(137,`summary`)(138,`strong`),vN(139,`Controle de Acessibilidade`),ug()(),Ac(140,`ul`)(141,`li`),vN(142,`Ativação de níveis AA/AAA conforme requisitos`),ug(),Ac(143,`li`),vN(144,`Ajustes automáticos de contrastes`),ug()()(),Ac(145,`details`)(146,`summary`)(147,`strong`),vN(148,`Sobrescrita Flexível`),ug()(),Ac(149,`ul`)(150,`li`),vN(151,`Hierarquia clara: Tema > Variáveis Globais > Estilos Locais`),ug()()(),Ac(152,`p`),Kc(153,`a`,31),ug(),Ac(154,`h3`),vN(155,`Configuração Inicial`),ug(),Ac(156,`p`),Kc(157,`a`,32),ug(),Ac(158,`h4`),vN(159,`Importação do Módulo`),ug(),Ac(160,`pre`)(161,`code`,33),vN(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),ug()(),Ac(163,`p`),Kc(164,`a`,34),ug(),Ac(165,`h4`),vN(166,`Estilo PO-UI`),ug(),Ac(167,`p`),vN(168,`Configurar o arquivo angular.json da seguinte maneira:`),ug(),Ac(169,`pre`)(170,`code`,35),vN(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),ug()(),Ac(172,`p`),Kc(173,`a`,36),ug(),Ac(174,`h4`),vN(175,`Injeção do Serviço`),ug(),Ac(176,`p`),vN(177,`Injeção do Serviço no construtor do componente:`),ug(),Ac(178,`pre`)(179,`code`,33),vN(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),ug()(),Ac(181,`p`),Kc(182,`a`,37),ug(),Ac(183,`h3`),vN(184,`Como Utilizar o Serviço de Tema`),ug(),Ac(185,`p`),vN(186,`Criando um Tema Personalizado`),ug(),Ac(187,`p`),Kc(188,`a`,38),ug(),Ac(189,`h4`),vN(190,`Estrutura Básica`),ug(),Ac(191,`pre`)(192,`code`,33),vN(193,`const meuTema: PoTheme = {
  name: 'meu-tema',
  type: [
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AAA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AAA*/ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),ug()(),Ac(194,`p`),Kc(195,`a`,39),ug(),Ac(196,`h4`),vN(197,`Exemplo Completo`),ug(),Ac(198,`pre`)(199,`code`,33),vN(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

export const corporateTheme: PoTheme = {
  name: 'corporate',
  type: [
    {
      light: {
        color: {
          brand: {
            '01': { 
              base: '#2A5C8D',
              light: '#4D7BA5',
              dark: '#1D4364'
            },
            '02': { base: '#FF6B35' },
            '03': { base: '#00CC66' }
          },
          neutral: { /* Tons de cinza */ },
          feedback: { /* Cores de feedback */ }
        },
        onRoot: {
          '--font-family': "'Inter', sans-serif",
          '--border-radius': '6px',
          '--po-density-header-padding': '2rem'; /* Padding em headers (inclui pages, page slide e modal) */
          '--po-density-content-padding': '1rem'; /* Padding em contents (inclui pages, container, list view, page slide, modal, stepper, disclaimer-group) */
          '--po-density-footer-padding': '1rem'; /* Padding em footers (inclui modal e page slide) */
          '--po-density-gap-header-content': '1rem'; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
          '--po-density-gap-spacing': '1rem'; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
          '--po-density-floating-padding': '0.5rem'; /* Padding interno de componentes flutuantes como tooltip e popover */ 
        },
        perComponent: {
          'po-button': {
            '--padding': '0.75rem 1.5rem',
            '--font-weight': '600'
          }
        }
      },
      dark: { /* Configura\xE7\xF5es dark mode */ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),ug()(),Ac(201,`p`),Kc(202,`a`,40),ug(),Ac(203,`h3`),vN(204,`Aplicando o Tema`),ug(),Ac(205,`p`),Kc(206,`a`,41),ug(),Ac(207,`h4`),vN(208,`Aplicação Inicial`),ug(),Ac(209,`pre`)(210,`code`,33),vN(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),ug()(),Ac(212,`p`),Kc(213,`a`,42),ug(),Ac(214,`h4`),vN(215,`Aplicação Dinâmica`),ug(),Ac(216,`pre`)(217,`code`,33),vN(218,`// Alternar entre light/dark mode
toggleTheme() {
  const newType = this.currentTheme === PoThemeTypeEnum.light 
    ? PoThemeTypeEnum.dark 
    : PoThemeTypeEnum.light;
  
  this.poTheme.changeCurrentThemeType(newType);
}

// Alterar n\xEDvel de acessibilidade
setAcessibilidade(nivel: PoThemeA11yEnum) {
  this.poTheme.setCurrentThemeA11y(nivel);
}
`),ug()(),Ac(219,`p`),Kc(220,`a`,43),ug(),Ac(221,`h3`),vN(222,`Técnicas Avançadas`),ug(),Ac(223,`p`),Kc(224,`a`,44),ug(),Ac(225,`h4`),vN(226,`Sobrescrita de Variáveis`),ug(),Ac(227,`blockquote`)(228,`p`)(229,`strong`),vN(230,`Recomendação:`),ug(),vN(231,` Utilize sempre o serviço `),Ac(232,`code`),vN(233,`PoThemeService`),ug(),vN(234,` para manipulação de temas. Reserve esta técnica para casos extremos.`),ug()(),Ac(235,`p`)(236,`strong`),vN(237,`Quando usar?`),ug()(),Ac(238,`ul`)(239,`li`),vN(240,`Necessidade de ajustes pontuais não cobertos pelos tokens padrão `),ug(),Ac(241,`li`),vN(242,`Prototipagem rápida`),ug()(),Ac(243,`p`)(244,`strong`),vN(245,`Implementação:`),ug()(),Ac(246,`pre`)(247,`code`,45),vN(248,`<html class='override-theme'>
`),ug()(),Ac(249,`pre`)(250,`code`,46),vN(251,`/* styles.scss */
:root .override-theme {
  --color-brand-01-base: #FF0000;
  --po-density-header-padding: 2rem; /* Padding interno em headers (inclui pages, dynamics, page slide e modal) */
  --po-density-content-padding: 1rem; /* Padding interno em contents (inclui pages, dynamics, container, list view, page slide, modal, stepper e disclaimer-group) */
  --po-density-footer-padding: 1rem; /* Padding interno em footers (inclui modal e page slide) */
  --po-density-gap-header-content: 1rem; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
  --po-density-gap-spacing: 1rem; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
  --po-density-floating-padding: 0.5rem; /* Padding interno de componentes flutuantes como tooltip e popover */ 
}
`),ug()(),Ac(252,`p`),Kc(253,`a`,47),ug(),Ac(254,`h4`),vN(255,`Reset para Tema Padrão`),ug(),Ac(256,`p`),vN(257,`Restaura todos os valores para o tema base configurado:`),ug(),Ac(258,`pre`)(259,`code`,33),vN(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),ug()(),Ac(261,`p`),Kc(262,`a`,48),ug(),Ac(263,`h4`),vN(264,`Persistência de Tema`),ug(),Ac(265,`p`),vN(266,`Fluxo recomendado:`),ug(),Ac(267,`pre`)(268,`code`,33),vN(269,`ngOnInit() {
  this.initTheme();
}

private initTheme() {
  const savedTheme = this.poThemeService.getThemeActive();
  
  savedTheme 
    ? this.poThemeService.persistThemeActive()
    : this.themeService.setTheme(
        poThemeDefault,
        PoThemeTypeEnum.light,
        PoThemeA11yEnum.
      );
}
`),ug()(),Ac(270,`p`),Kc(271,`a`,49),ug(),Ac(272,`h4`),vN(273,`Gerenciamento de Tamanhos`),ug(),Ac(274,`p`),vN(275,`Padrão acessível (AAA):`),ug(),Ac(276,`pre`)(277,`code`,33),vN(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),ug()(),Ac(279,`p`),Kc(280,`a`,50),ug(),Ac(281,`h4`),vN(282,`Referências Técnicas`),ug(),Ac(283,`ul`)(284,`li`)(285,`a`,51),vN(286,`PoThemeService API`),ug(),vN(287,` - Métodos completos do serviço`),ug(),Ac(288,`li`)(289,`a`,52),vN(290,`Animalia DS`),ug(),vN(291,` - Base dos nossos tokens de design`),ug()(),Ac(292,`p`),Kc(293,`a`,53),ug(),Ac(294,`h3`),vN(295,`Exemplo Completo no Stackblitz`),ug(),Ac(296,`a`,54),Kc(297,`img`,55),ug()())},dependencies:[bt,$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var V=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:149,vars:0,consts:[[`p-title`,`Criando um tema para o PO UI`,1,`guides`,`app-portal`],[1,`language-json`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`Para criação de novos temas vamos utilizar a ferramenta `),Ac(3,`strong`),vN(4,`Po Theme Cli`),ug()(),Ac(5,`h2`),vN(6,`Instalação`),ug(),Ac(7,`p`),vN(8,`Faça a instalação global da ferramenta:`),ug(),Ac(9,`pre`)(10,`code`),vN(11,`npm install -g @po-ui/theme-cli
`),ug()(),Ac(12,`p`),vN(13,`Você pode ver as opções disponíveis através do comando:`),ug(),Ac(14,`pre`)(15,`code`),vN(16,`po-theme -help
`),ug()(),Ac(17,`h2`),vN(18,`Iniciando um projeto para o novo tema customizado`),ug(),Ac(19,`p`),vN(20,`Navegue até o diretório que você deseja e execute o comando:`),ug(),Ac(21,`pre`)(22,`code`),vN(23,`po-theme new my-custom-po-theme
`),ug()(),Ac(24,`p`),vN(25,`Isso irá gerar um novo diretório com o nome `),Ac(26,`code`),vN(27,`my-custom-po-theme`),ug(),vN(28,` e com os arquivos iniciais
para seu tema.`),ug(),Ac(29,`p`),vN(30,`Acesse o arquivo `),Ac(31,`code`),vN(32,`src/po-theme-custom.css`),ug(),vN(33,` e faça as customizações necessárias.`),ug(),Ac(34,`blockquote`)(35,`p`),vN(36,`Para customização das fontes você deve colocar seus arquivos na pasta `),Ac(37,`code`),vN(38,`src/assets/fonts`),ug(),vN(39,`.`),ug()(),Ac(40,`h2`),vN(41,`Gerando build do tema customizado`),ug(),Ac(42,`p`),vN(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),ug(),Ac(44,`pre`)(45,`code`),vN(46,`po-theme build
`),ug()(),Ac(47,`blockquote`)(48,`p`),vN(49,`Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o parâmetro `),Ac(50,`code`),vN(51,`--name`),ug(),vN(52,` informando o nome desejado.`),ug()(),Ac(53,`blockquote`)(54,`p`),vN(55,`Se você estiver customizando as fontes do tema, você deve usar o parâmetro `),Ac(56,`code`),vN(57,`--fonts`),ug(),vN(58,`.`),ug()(),Ac(59,`p`),vN(60,`Após a execução do comando de `),Ac(61,`em`),vN(62,`build`),ug(),vN(63,`, irá ser gerado uma pasta chamada `),Ac(64,`code`),vN(65,`dist`),ug(),vN(66,` dentro do diret\xF3rio
do seu projeto.`),ug(),Ac(67,`blockquote`)(68,`p`),vN(69,`Você pode modificar seu `),Ac(70,`code`),vN(71,`package.json`),ug(),vN(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),ug()(),Ac(73,`h3`),vN(74,`Publicando o novo tema customizado`),ug(),Ac(75,`p`),vN(76,`Acesse a pasta `),Ac(77,`code`),vN(78,`dist`),ug(),vN(79,` e execute o seguinte comando:`),ug(),Ac(80,`pre`)(81,`code`),vN(82,`npm publish
`),ug()(),Ac(83,`h2`),vN(84,`Utilizando o tema customizado`),ug(),Ac(85,`p`),vN(86,`Existem 3 formas de você usar o tema customizado após a publicação.`),ug(),Ac(87,`p`),vN(88,`Configure o arquivo `),Ac(89,`code`),vN(90,`angular.json`),ug(),vN(91,` da aplicação conforme for mais conveniente as suas necessidade.`),ug(),Ac(92,`h3`),vN(93,`1 - Usar o arquivo "compilado" com todo o CSS.`),ug(),Ac(94,`pre`)(95,`code`,1),vN(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),ug()(),Ac(97,`p`)(98,`strong`),vN(99,`Prós:`),ug(),vN(100,` Modo mais simples de usar e atende aos browser suportados.`),ug(),Ac(101,`p`)(102,`strong`),vN(103,`Contras:`),ug(),vN(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),ug(),Ac(105,`h3`),vN(106,`2 - Usar o arquivo de variáveis do tema customizado + arquivo CSS do tema padrão`),ug(),Ac(107,`pre`)(108,`code`,1),vN(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),ug()(),Ac(110,`blockquote`)(111,`p`),vN(112,`Atenção a ordem dos arquivos`),ug()(),Ac(113,`p`)(114,`strong`),vN(115,`Prós:`),ug(),vN(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),ug(),Ac(117,`p`)(118,`strong`),vN(119,`Contras:`),ug(),vN(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),Ac(121,`em`),vN(122,`browsers`),ug(),vN(123,` antigos que não dão suporte a variáveis no CSS.`),ug(),Ac(124,`h3`),vN(125,`3 - Usar o arquivo de variáveis do tema padrão + variáveis do tema customizado + arquivo CSS do tema padrão`),ug(),Ac(126,`pre`)(127,`code`,1),vN(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),ug()(),Ac(129,`blockquote`)(130,`p`),vN(131,`Atenção a ordem dos arquivos`),ug()(),Ac(132,`p`)(133,`strong`),vN(134,`Prós:`),ug(),vN(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),ug(),Ac(136,`p`)(137,`strong`),vN(138,`Contras:`),ug(),vN(139,` Pode ter incompatibilidade com `),Ac(140,`em`),vN(141,`browsers`),ug(),vN(142,` antigos que não dão suporte a variáveis no CSS.`),ug(),Ac(143,`blockquote`)(144,`p`),vN(145,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Ac(146,`a`,2),vN(147,`Can I use`),ug(),vN(148,`.`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:402,vars:0,consts:[[`p-title`,`Grid System`,1,`guides`,`app-portal`],[`href`,`https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout`],[1,`po-row`,`guides-grid-system-box`],[1,`po-xl-1`,`po-lg-1`,`po-md-1`,`po-sm-1`],[1,`language-html`],[`href`,`/guides/how-install`],[1,`po-xl-6`,`po-lg-6`,`po-md-6`,`po-sm-6`],[1,`po-xl-8`,`po-lg-8`,`po-md-8`,`po-sm-8`],[1,`po-xl-4`,`po-lg-4`,`po-md-4`,`po-sm-4`],[1,`po-md-6`],[1,`po-lg-4`],[1,`po-xl-6`,`po-lg-6`,`po-md-12`,`po-sm-12`],[1,`guides-grid-system-containers`],[1,`po-visible-sm`,`po-sm-12`],[1,`po-visible-md`,`po-md-12`],[1,`po-visible-lg-12`],[1,`po-visible-xl-12`],[1,`po-hidden-sm`,`po-md-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-md`,`po-sm-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-lg`,`po-sm-12`,`po-md-12`,`po-xl-12`],[1,`po-hidden-xl`,`po-sm-12`,`po-md-12`,`po-lg-12`],[1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-3`,`po-offset-xl-3`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-xl-3`,`po-lg-3`,`po-md-6`,`po-sm-12`],[1,`language-css`],[1,`language-typescript`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`O `),Ac(3,`a`,1),vN(4,`Grid System`),ug(),vN(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),ug(),Ac(6,`ul`)(7,`li`),vN(8,`Um número máximo de colunas que uma tela pode ser dividida.`),ug(),Ac(9,`li`),vN(10,`Padrão na nomenclatura das classes que referem-se as colunas.`),ug(),Ac(11,`li`),vN(12,`As colunas podem ser envolvidas por uma classe que delimita e representa a linha.`),ug(),Ac(13,`li`),vN(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),ug()(),Ac(15,`p`),vN(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),ug(),Ac(17,`div`,2),Kc(18,`div`,3)(19,`div`,3)(20,`div`,3)(21,`div`,3)(22,`div`,3)(23,`div`,3)(24,`div`,3)(25,`div`,3)(26,`div`,3)(27,`div`,3)(28,`div`,3)(29,`div`,3),ug(),Ac(30,`pre`)(31,`code`,4),vN(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
`),ug()(),Ac(33,`blockquote`)(34,`p`),vN(35,`Estas classes podem ser usadas instalando o `),Ac(36,`code`),vN(37,`@po-ui/style`),ug(),vN(38,` do `),Ac(39,`strong`),vN(40,`PO`),ug(),vN(41,`. Veja mais em `),Ac(42,`a`,5),vN(43,`Como instalar o PO`),ug(),vN(44,`.`),ug()(),Ac(45,`h2`),vN(46,`Nomenclatura das classes e tamanhos das telas`),ug(),Ac(47,`p`),vN(48,`A nomenclatura das classes das colunas seguem o padrão: `),Ac(49,`code`),vN(50,`po-<tamanho-tela>-<tamanho-coluna>`),ug(),vN(51,`, como por exemplo a classe
`),Ac(52,`code`),vN(53,`po-md-6`),ug(),vN(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),ug(),Ac(55,`ul`)(56,`li`)(57,`code`),vN(58,`po-sm-*`),ug(),vN(59,` para telas com tamanho máximo de 480px.`),ug(),Ac(60,`li`)(61,`code`),vN(62,`po-md-*`),ug(),vN(63,` para telas com tamanho entre 481px e 960px.`),ug(),Ac(64,`li`)(65,`code`),vN(66,`po-lg-*`),ug(),vN(67,` para telas com tamanho entre 961px e 1366px.`),ug(),Ac(68,`li`)(69,`code`),vN(70,`po-xl-*`),ug(),vN(71,` para telas com tamanho mínimo de 1367px.`),ug()(),Ac(72,`p`),vN(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),ug(),Ac(74,`div`,2),Kc(75,`div`,6)(76,`div`,6),ug(),Ac(77,`pre`)(78,`code`,4),vN(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),ug()(),Ac(80,`p`),vN(81,`Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:`),ug(),Ac(82,`div`,2),Kc(83,`div`,7)(84,`div`,8),ug(),Ac(85,`pre`)(86,`code`,4),vN(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),ug()(),Ac(88,`p`),vN(89,`Ao definir apenas a classe `),Ac(90,`code`),vN(91,`po-md-*`),ug(),vN(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),Ac(93,`code`),vN(94,`*`),ug(),vN(95,`. Da mesma forma ocorre com a classe `),Ac(96,`code`),vN(97,`po-lg-*`),ug(),vN(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),Ac(99,`code`),vN(100,`*`),ug(),vN(101,`.`),ug(),Ac(102,`blockquote`)(103,`p`),vN(104,`Este comportamento limita-se apenas as classes `),Ac(105,`code`),vN(106,`po-md-*`),ug(),vN(107,` e `),Ac(108,`code`),vN(109,`po-lg-*`),ug(),vN(110,`.`),ug()(),Ac(111,`p`),vN(112,`O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador.`),ug(),Ac(113,`div`,2)(114,`div`,9),vN(115,`po-md-6`),ug(),Ac(116,`div`,9),vN(117,`po-md-6`),ug()(),Ac(118,`div`,2)(119,`div`,10),vN(120,`po-lg-4`),ug(),Ac(121,`div`,10),vN(122,`po-lg-4`),ug(),Ac(123,`div`,10),vN(124,`po-lg-4`),ug()(),Ac(125,`pre`)(126,`code`,4),vN(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),ug()(),Ac(128,`blockquote`)(129,`p`),vN(130,`A classe para envolver as colunas é chamada de `),Ac(131,`code`),vN(132,`po-row`),ug(),vN(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),ug()(),Ac(134,`h2`),vN(135,`Responsividade`),ug(),Ac(136,`p`),vN(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),ug(),Ac(138,`div`,2),Kc(139,`div`,6)(140,`div`,6),ug(),Ac(141,`pre`)(142,`code`,4),vN(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),ug()(),Ac(144,`p`),vN(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),ug(),Ac(146,`div`,2),Kc(147,`div`,11)(148,`div`,11),ug(),Ac(149,`pre`)(150,`code`,4),vN(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),ug()(),Ac(152,`p`),vN(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),ug(),Ac(154,`blockquote`)(155,`p`),vN(156,`Consulte o Style Guide do PO UI, para saber o número máximo de colunas por tamanho de tela.`),ug()(),Ac(157,`h2`),vN(158,`Classes visible e hidden`),ug(),Ac(159,`p`),vN(160,`Para poder deixar um determinado tamanho visível ou não, existem disponíveis as classes `),Ac(161,`code`),vN(162,`po-visible-[tamanho]`),ug(),vN(163,` e `),Ac(164,`code`),vN(165,`po-hidden-[tamanho]`),ug(),vN(166,`.`),ug(),Ac(167,`h3`),vN(168,`po-visible-[tamanho]`),ug(),Ac(169,`p`),vN(170,`Esta classe determina que o elemento será visível na tela quando estiver em determinado tamanho. Ao fazer essa declaração, o elemento assume a propriedade `),Ac(171,`code`),vN(172,`display: block`),ug(),vN(173,` e os demais tamanhos ficarão invisíveis `),Ac(174,`code`),vN(175,`(display: none)`),ug(),vN(176,`. Existem duas formas de descrever a classe po-visible. Uma forma seria a definição de visibilidade separado da definição do tamanho, como `),Ac(177,`code`),vN(178,`po-visible-sm po-sm-6`),ug(),vN(179,`. Outra forma seria a opção de utilizar a definição junto com a declaração do tamanho, como: `),Ac(180,`code`),vN(181,`po-visible-sm-6`),ug(),vN(182,`.`),ug(),Ac(183,`p`),vN(184,`Abaixo tem-se um exemplo onde só irá aparecer a `),Ac(185,`code`),vN(186,`<div>`),ug(),vN(187,` quando atingir o tamanho especificado no po-visible. `),ug(),Ac(188,`blockquote`)(189,`p`),vN(190,`Para isso, redimensione a tela do seu navegador.`),ug()(),Ac(191,`div`,12)(192,`div`,13),vN(193,`Visível no tamanho 'sm'`),ug(),Ac(194,`div`,14),vN(195,`Visível no tamanho 'md'`),ug(),Ac(196,`div`,15),vN(197,`Visível no tamanho 'lg'`),ug(),Ac(198,`div`,16),vN(199,`Visível no tamanho 'xl'`),ug()(),Ac(200,`pre`)(201,`code`,4),vN(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),ug()(),Ac(203,`blockquote`)(204,`p`),vN(205,`Atenção: ao utilizar esta classe, o elemento recebe a propriedade `),Ac(206,`code`),vN(207,`display`),ug(),vN(208,` com o valor `),Ac(209,`code`),vN(210,`block`),ug(),vN(211,`. `),ug()(),Ac(212,`h3`),vN(213,`po-hidden-[tamanho]`),ug(),Ac(214,`p`),vN(215,`Ao utilizar esta classe, o elemento ficará invisível `),Ac(216,`code`),vN(217,`(display: none)`),ug(),vN(218,` ao atingir o tamanho especificado. Por exemplo, as `),Ac(219,`code`),vN(220,`<div>`),ug(),vN(221,` abaixo irão desaparecer quando atingir o tamanho especificado no po-hidden. `),ug(),Ac(222,`blockquote`)(223,`p`),vN(224,`Para isso, redimensione a tela do seu navegador.`),ug()(),Ac(225,`div`,12)(226,`div`,17),vN(227,`Ficará invisível no tamanho 'sm'`),ug(),Ac(228,`div`,18),vN(229,`Ficará invisível no tamanho 'md'`),ug(),Ac(230,`div`,19),vN(231,`Ficará invisível no tamanho 'lg'`),ug(),Ac(232,`div`,20),vN(233,`Ficará invisível no tamanho 'xl'`),ug()(),Ac(234,`pre`)(235,`code`,4),vN(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),ug()(),Ac(237,`h2`),vN(238,`Deslocamento de colunas (po-offset)`),ug(),Ac(239,`p`),vN(240,`É possível fazer o deslocamento das colunas para a direita utilizando a classe `),Ac(241,`code`),vN(242,`po-offset-[ sm | md | lg | xl ]-[tamanho]`),ug(),vN(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),Ac(244,`code`),vN(245,`sm`),ug(),vN(246,` ou `),Ac(247,`code`),vN(248,`md`),ug(),vN(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),Ac(250,`code`),vN(251,`sm`),ug(),vN(252,`, basta escrever: `),Ac(253,`code`),vN(254,`po-offset-sm-2`),ug(),vN(255,`.`),ug(),Ac(256,`p`),vN(257,`No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho `),Ac(258,`code`),vN(259,`lg`),ug(),vN(260,` e `),Ac(261,`code`),vN(262,`xl`),ug(),vN(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),ug(),Ac(264,`div`,2)(265,`div`,21),vN(266,`Tamanho 4 e sem offset`),ug(),Ac(267,`div`,22),vN(268,`Tamanho 4 e offset 4`),ug()(),Ac(269,`div`,2)(270,`div`,23),vN(271,`Tamanho 4 e offset 3`),ug(),Ac(272,`div`,24),vN(273,`Tamanho 3 e sem offset`),ug()(),Ac(274,`pre`)(275,`code`,4),vN(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),ug()(),Ac(277,`blockquote`)(278,`p`),vN(279,`O número de colunas para o deslocamento não necessita ser igual ao tamanho do elemento. Por exemplo: `),Ac(280,`code`),vN(281,`po-offset-lg-3 po-lg-4`),ug(),vN(282,`.`),ug()(),Ac(283,`blockquote`)(284,`p`),vN(285,`É importante lembrar que o somatório de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12.`),ug()(),Ac(286,`blockquote`)(287,`p`),vN(288,`Os tamanhos de deslocamentos do po-offset variam de 1 a 11, não incluindo o espaçamento igual a 12.`),ug()(),Ac(289,`h2`),vN(290,`Customização dos breakpoints`),ug(),Ac(291,`p`),vN(292,`Atualmente, os navegadores não interpretam a leitura de variáveis em regras de breakpoint como por exemplo:`),ug(),Ac(293,`p`)(294,`code`),vN(295,`@media (min-width: var(--variavel-customizavel))`),ug()(),Ac(296,`p`),vN(297,`Porém, disponibilizamos os tokens de breakpoint no formato `),Ac(298,`code`),vN(299,`var(--nome-da-variavel)`),ug(),vN(300,` junto as regras de media query permitindo ao desenvolvedor realizar a customização dos breakpoints em tempo de execução através do serviço `),Ac(301,`code`),vN(302,`PoMediaQueryService`),ug(),vN(303,`.`),ug(),Ac(304,`h3`),vN(305,`Tokens de breakpoint customizáveis:`),ug(),Ac(306,`ul`)(307,`li`)(308,`code`),vN(309,`--gridSystemSmMaxWidth`),ug(),vN(310,`: 480px (valor padrão)`),ug(),Ac(311,`li`)(312,`code`),vN(313,`--gridSystemMdMinWidth`),ug(),vN(314,`: 481px (valor padrão)`),ug(),Ac(315,`li`)(316,`code`),vN(317,`--gridSystemMdMaxWidth`),ug(),vN(318,`: 960px (valor padrão)`),ug(),Ac(319,`li`)(320,`code`),vN(321,`--gridSystemLgMinWidth`),ug(),vN(322,`: 961px (valor padrão)`),ug(),Ac(323,`li`)(324,`code`),vN(325,`--gridSystemLgMaxWidth`),ug(),vN(326,`: 1366px (valor padrão)`),ug(),Ac(327,`li`)(328,`code`),vN(329,`--gridSystemXlMinWidth`),ug(),vN(330,`: 1367px (valor padrão)`),ug(),Ac(331,`li`)(332,`code`),vN(333,`--gridSystemPullMaxWidth`),ug(),vN(334,`: 480px (valor padrão)`),ug(),Ac(335,`li`)(336,`code`),vN(337,`--gidSystemOffsetMaxWidth`),ug(),vN(338,`: 480px (valor padrão)`),ug()(),Ac(339,`p`),vN(340,`Nos arquivos de `),Ac(341,`code`),vN(342,`grid-system`),ug(),vN(343,` do `),Ac(344,`code`),vN(345,`po-style`),ug(),vN(346,`, a regra de breakpoint está escrita conforme modelo:`),ug(),Ac(347,`pre`)(348,`code`,25),vN(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),ug()(),Ac(350,`p`),vN(351,`No exemplo acima está demonstrado o formato da regra de breakpoint para `),Ac(352,`code`),vN(353,`gridsystem-md`),ug(),vN(354,`.`),ug(),Ac(355,`p`),vN(356,`Para o desenvolvedor customizar a regra do grid-system acima, poderá utilizar o serviço PoMediaQueryService na inicialização do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:`),ug(),Ac(357,`pre`)(358,`code`,26),vN(359,`const tokens: PoMediaQueryTokens =  {
 *     sm: {
 *      gridSystemSmMaxWidth: '1023px'
 *      },
 *     md: {
 *      gridSystemMdMinWidth: '1024px',
 *      gridSystemMdMaxWidth: '1366px'
 *     },
 *     lg: {
 *      gridSystemLgMinWidth: '1367px',
 *      gridSystemLgMaxWidth: '9999px'
 *     }
 *    };

this.styleService.updateTokens(tokensMediaQueries);
`),ug()(),Ac(360,`p`),vN(361,`A seguir segue a relação das regras de breakpoints do grid-system caso necessite customizá-las:`),ug(),Ac(362,`div`,27)(363,`div`,28)(364,`table`,29)(365,`thead`)(366,`tr`,30)(367,`th`,31),vN(368,`Grid-System`),ug(),Ac(369,`th`,31),vN(370,`Regra de breakpoint`),ug()()(),Ac(371,`tbody`)(372,`tr`,32)(373,`td`,33),vN(374,`po-grid-system-sm`),ug(),Ac(375,`td`,33),vN(376,`(max-width: var(--gridSystemSmMaxWidth))`),ug()(),Ac(377,`tr`,32)(378,`td`,33),vN(379,`po-grid-system-md`),ug(),Ac(380,`td`,33),vN(381,`(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))`),ug()(),Ac(382,`tr`,32)(383,`td`,33),vN(384,`po-grid-system-lg`),ug(),Ac(385,`td`,33),vN(386,`(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))`),ug()(),Ac(387,`tr`,32)(388,`td`,33),vN(389,`po-grid-system-xl`),ug(),Ac(390,`td`,33),vN(391,`(min-width: var(--gridSystemXlMinWidth))`),ug()(),Ac(392,`tr`,32)(393,`td`,33),vN(394,`po-grid-system-pull`),ug(),Ac(395,`td`,33),vN(396,`(max-width: var(--gridSystemPullMaxWidth))`),ug()(),Ac(397,`tr`,32)(398,`td`,33),vN(399,`po-grid-system-offset`),ug(),Ac(400,`td`,33),vN(401,`(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))`),ug()()()()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:287,vars:0,consts:[[`p-title`,`Espaçamento`,1,`guides`,`app-portal`],[`href`,`/guides/how-install`],[1,`guides-spacing-sample-container`,`po-mt-1`,`po-mb-1`],[1,`guides-spacing`],[1,`po-m-5`],[1,`po-ml-5`],[1,`po-ml-md-5`],[1,`po-ml-lg-5`],[1,`po-ml-5`,`po-mr-5`],[1,`po-ml-md-5`,`po-ml-xl-0`],[1,`language-html`],[`href`,`https://www.w3schools.com/cssref/pr_margin.asp`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`O PO conta com um set de classes CSS utilitárias para modificação do espaçamento entre elementos HTML.`),ug(),Ac(3,`h2`),vN(4,`Como funciona`),ug(),Ac(5,`p`),vN(6,`Na composição de telas é eventual o ajuste do espaçamento entre os elementos adjacentes envolvidos. Exemplos disso são vistos quando trabalha-se responsivamente um grupo de elementos, como `),Ac(7,`em`),vN(8,`widgets`),ug(),vN(9,` (po-widget) ou linhas de um `),Ac(10,`em`),vN(11,`grid system`),ug(),vN(12,` (po-row).`),ug(),Ac(13,`p`),vN(14,`Há cinco dimensões disponíveis para definição de `),Ac(15,`strong`),vN(16,`margin`),ug(),vN(17,` e também para `),Ac(18,`strong`),vN(19,`padding`),ug(),vN(20,`. A unidade de medida utilizada para elas no CSS é a REM. Basicamente, a REM sempre terá o valor do contexto do ROOT, ou seja, o valor de font-size definido em `),Ac(21,`em`),vN(22,`body`),ug(),vN(23,`. Considerando que `),Ac(24,`code`),vN(25,`font-family: 16px`),ug(),vN(26,` é o padrão no PO, então `),Ac(27,`code`),vN(28,`margin: 1rem`),ug(),vN(29,` também equivale a 16px. As variantes das classes de margem e padding vão de 0.5rem (8px) a 2.5rem (40px).`),ug(),Ac(30,`h2`),vN(31,`Definições`),ug(),Ac(32,`p`),vN(33,`Os nomes das classes usam o formato: `),ug(),Ac(34,`ul`)(35,`li`)(36,`code`),vN(37,`po-<propriedade>-<tamanho-espaçamento>`),ug(),vN(38,` para definição em todos os lados do elemento. Por exemplo: `),Ac(39,`code`),vN(40,`po-m-1`),ug(),vN(41,`; `),ug(),Ac(42,`li`)(43,`code`),vN(44,`po-<propriedade><lado>-<tamanho-espaçamento>`),ug(),vN(45,` para apenas um dos lados. Por exemplo: `),Ac(46,`code`),vN(47,`po-ml-1`),ug(),vN(48,`;`),ug(),Ac(49,`li`)(50,`code`),vN(51,`po-<propriedade><lado>-<tamanho-tela>-<tamanho-espaçamento>`),ug(),vN(52,` para tamanhos específicos de telas. Por exemplo: `),Ac(53,`code`),vN(54,`po-ml-md-1`),ug(),vN(55,`.`),ug()(),Ac(56,`p`),vN(57,`As definições de propridades são:`),ug(),Ac(58,`ul`)(59,`li`)(60,`code`),vN(61,`m`),ug(),vN(62,` - para classes de ajuste de `),Ac(63,`code`),vN(64,`margin`),ug(),vN(65,`;`),ug(),Ac(66,`li`)(67,`code`),vN(68,`p`),ug(),vN(69,` - para classes de ajuste de `),Ac(70,`code`),vN(71,`padding`),ug(),vN(72,`.`),ug()(),Ac(73,`p`),vN(74,`As definições de lados são:`),ug(),Ac(75,`ul`)(76,`li`)(77,`code`),vN(78,`t`),ug(),vN(79,` - para ajustes de `),Ac(80,`code`),vN(81,`margin-top`),ug(),vN(82,` ou `),Ac(83,`code`),vN(84,`padding-top`),ug(),vN(85,`;`),ug(),Ac(86,`li`)(87,`code`),vN(88,`r`),ug(),vN(89,` - para ajustes de `),Ac(90,`code`),vN(91,`margin-right`),ug(),vN(92,` ou `),Ac(93,`code`),vN(94,`padding-right`),ug(),vN(95,`;`),ug(),Ac(96,`li`)(97,`code`),vN(98,`b`),ug(),vN(99,` - para ajustes de `),Ac(100,`code`),vN(101,`margin-bottom`),ug(),vN(102,` ou `),Ac(103,`code`),vN(104,`padding-bottom`),ug(),vN(105,`;`),ug(),Ac(106,`li`)(107,`code`),vN(108,`l`),ug(),vN(109,` - para ajustes de `),Ac(110,`code`),vN(111,`margin-left`),ug(),vN(112,` ou `),Ac(113,`code`),vN(114,`padding-left`),ug(),vN(115,`;`),ug(),Ac(116,`li`)(117,`em`),vN(118,`Para todos os lados basta ignorar essa definição`),ug(),vN(119,`;`),ug()(),Ac(120,`p`),vN(121,`As definições de tamanho de tela são:`),ug(),Ac(122,`ul`)(123,`li`)(124,`code`),vN(125,`sm`),ug(),vN(126,` - para telas com tamanho máximo de `),Ac(127,`code`),vN(128,`480px`),ug(),vN(129,`;`),ug(),Ac(130,`li`)(131,`code`),vN(132,`md`),ug(),vN(133,` - para telas com tamanho a partir de `),Ac(134,`code`),vN(135,`481px`),ug(),vN(136,`;`),ug(),Ac(137,`li`)(138,`code`),vN(139,`lg`),ug(),vN(140,` - para telas com tamanho a partir de `),Ac(141,`code`),vN(142,`961px`),ug(),vN(143,`;`),ug(),Ac(144,`li`)(145,`code`),vN(146,`xl`),ug(),vN(147,` - para telas com tamanho a partir de `),Ac(148,`code`),vN(149,`1367px`),ug(),vN(150,`.`),ug()(),Ac(151,`p`),vN(152,`As definições de tamanhos disponíveis são:`),ug(),Ac(153,`ul`)(154,`li`)(155,`code`),vN(156,`0`),ug(),vN(157,` - `),Ac(158,`code`),vN(159,`margin`),ug(),vN(160,` ou `),Ac(161,`code`),vN(162,`padding`),ug(),vN(163,` com valor igual a `),Ac(164,`code`),vN(165,`0`),ug(),vN(166,`; `),ug(),Ac(167,`li`)(168,`code`),vN(169,`1`),ug(),vN(170,` - `),Ac(171,`code`),vN(172,`margin`),ug(),vN(173,` ou `),Ac(174,`code`),vN(175,`padding`),ug(),vN(176,` com valor igual a `),Ac(177,`code`),vN(178,`8px`),ug(),vN(179,`; `),ug(),Ac(180,`li`)(181,`code`),vN(182,`2`),ug(),vN(183,` - `),Ac(184,`code`),vN(185,`margin`),ug(),vN(186,` ou `),Ac(187,`code`),vN(188,`padding`),ug(),vN(189,` com valor igual a `),Ac(190,`code`),vN(191,`16px`),ug(),vN(192,`; `),ug(),Ac(193,`li`)(194,`code`),vN(195,`3`),ug(),vN(196,` - `),Ac(197,`code`),vN(198,`margin`),ug(),vN(199,` ou `),Ac(200,`code`),vN(201,`padding`),ug(),vN(202,` com valor igual a `),Ac(203,`code`),vN(204,`24px`),ug(),vN(205,`; `),ug(),Ac(206,`li`)(207,`code`),vN(208,`4`),ug(),vN(209,` - `),Ac(210,`code`),vN(211,`margin`),ug(),vN(212,` ou `),Ac(213,`code`),vN(214,`padding`),ug(),vN(215,` com valor igual a `),Ac(216,`code`),vN(217,`32px`),ug(),vN(218,`; `),ug(),Ac(219,`li`)(220,`code`),vN(221,`5`),ug(),vN(222,` - `),Ac(223,`code`),vN(224,`margin`),ug(),vN(225,` ou `),Ac(226,`code`),vN(227,`padding`),ug(),vN(228,` com valor igual a `),Ac(229,`code`),vN(230,`40px`),ug(),vN(231,`;`),ug()(),Ac(232,`blockquote`)(233,`p`),vN(234,`Estas classes podem ser usadas instalando o `),Ac(235,`code`),vN(236,`@po-ui/style`),ug(),vN(237,` do `),Ac(238,`strong`),vN(239,`PO`),ug(),vN(240,`. Veja mais em `),Ac(241,`a`,1),vN(242,`Como instalar o PO`),ug(),vN(243,`.`),ug()(),Ac(244,`h2`),vN(245,`Exemplos`),ug(),Ac(246,`p`),vN(247,`Alguns exemplos de aplicação das classes:`),ug(),Ac(248,`div`,2)(249,`div`,3)(250,`div`,4),vN(251,`po-m-5`),ug()()(),Ac(252,`div`,2)(253,`div`,3)(254,`div`,5),vN(255,`po-ml-5`),ug()()(),Ac(256,`div`,2)(257,`div`,3)(258,`div`,6),vN(259,`po-ml-md-5`),ug()()(),Ac(260,`div`,2)(261,`div`,3)(262,`div`,7),vN(263,`po-ml-lg-5`),ug()()(),Ac(264,`div`,2)(265,`div`,3)(266,`div`,8),vN(267,`po-ml-5 po-mr-5`),ug()()(),Ac(268,`div`,2)(269,`div`,3)(270,`div`,9),vN(271,`po-ml-md-5 po-ml-xl-0`),ug()()(),Ac(272,`pre`)(273,`code`,10),vN(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),ug()(),Ac(275,`blockquote`)(276,`p`),vN(277,`Quando duas margens verticais entrarem em contato entre si, ocorrerá um `),Ac(278,`a`,11),vN(279,`colapso de margem`),ug(),vN(280,`. Se uma margem for maior que a outra, esta sobrescreverá o valor da menor, sobrando apenas a definição de margem com maior valor.`),ug()(),Ac(281,`blockquote`)(282,`p`),vN(283,`É considerada uma boa prática de CSS trabalhar, sempre que possível, apenas com definições de `),Ac(284,`code`),vN(285,`margin-bottom`),ug(),vN(286,` para espaçamento entre elementos adjacentes.`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var X=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:122,vars:0,consts:[[`p-title`,`Personalizando o Tema Padrão com Tokens CSS`,1,`guides`,`app-portal`],[`href`,`guides/theme-service`],[1,`language-json`],[1,`language-css`],[`src`,`./assets/graphics/theme/button-green-and-black.png`,`alt`,`Componente Button com a cor preta.`],[`src`,`./assets/graphics/theme/components-custom-colors.png`,`alt`,`Exemplo dos componentes com cores customizadas. Scroll da página com track amarelo e thumb laranja.`],[`href`,`https://doc.animaliads.io/docs/components/button/#live-demo`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`blockquote`)(2,`p`)(3,`strong`),vN(4,`⚠️ Atualização Importante para Versões 18+`),ug(),Kc(5,`br`),vN(6,`A partir da versão 18.X.X do PO-UI, recomendamos `),Ac(7,`strong`),vN(8,`fortemente`),ug(),vN(9,` a utilização do `),Ac(10,`code`),vN(11,`PoThemeService`),ug(),vN(12,` para todas as customizações de temas, incluindo:`),ug(),Ac(13,`ul`)(14,`li`),vN(15,`Tokens globais (cores, tipografia, espaçamentos) `),ug(),Ac(16,`li`),vN(17,`Estilos específicos por componente `),ug(),Ac(18,`li`),vN(19,`Gerenciamento de dark/light mode `),ug(),Ac(20,`li`),vN(21,`Controle de acessibilidade (AA/AAA)`),ug()(),Ac(22,`p`)(23,`strong`),vN(24,`Benefícios:`),ug(),Kc(25,`br`),vN(26,`✅ Maior consistência visual`),Kc(27,`br`),vN(28,`✅ Manutenção simplificada`),Kc(29,`br`),vN(30,`✅ Transições suaves entre temas`),Kc(31,`br`),vN(32,`✅ Suporte integrado a acessibilidade `),ug(),Ac(33,`p`),vN(34,`📚 `),Ac(35,`a`,1),vN(36,`Guia completo de Customização de Temas`),ug()()(),Ac(37,`p`),vN(38,`A partir da versão 1.9.0, o `),Ac(39,`strong`),vN(40,`PO UI`),ug(),vN(41,` oferece a flexibilidade de personalização do tema padrão. Você pode ajustar várias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das variáveis utilizadas no CSS do tema padrão.`),ug(),Ac(42,`h3`),vN(43,`Como o tema do PO UI funciona`),ug(),Ac(44,`p`),vN(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),Ac(46,`code`),vN(47,`angular.json`),ug(),vN(48,` configurado da seguinte maneira.`),ug(),Ac(49,`pre`)(50,`code`,2),vN(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),ug()(),Ac(52,`p`),vN(53,`Essa configuração usa o arquivo CSS minificado e `),Ac(54,`em`),vN(55,`"compilado"`),ug(),vN(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),ug(),Ac(57,`pre`)(58,`code`,3),vN(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),ug()(),Ac(60,`h3`),vN(61,`Configurando sua aplicação para permitir personalização abrangente`),ug(),Ac(62,`p`),vN(63,`Para possibilitar uma personalização abrangente, o `),Ac(64,`em`),vN(65,`package`),ug(),Ac(66,`code`),vN(67,`@po-ui/style`),ug(),vN(68,` agora disponibiliza os arquivos contendo as variáveis CSS, bem como o arquivo de estilo sem a `),Ac(69,`em`),vN(70,`"compilação"`),ug(),vN(71,` das variáveis. Isso permite não apenas a modificação das cores, mas também de outras propriedades via tokens. Para realizar essa configuração em seu projeto, é necessário carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modificação abrangente das cores.`),ug(),Ac(72,`pre`)(73,`code`,2),vN(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),ug()(),Ac(75,`blockquote`)(76,`p`),vN(77,`Só isso não vai fazer diferença no seu projeto, as cores padrões ainda serão mantidas.`),ug()(),Ac(78,`h3`),vN(79,`Customizando Estilos no Seu Projeto`),ug(),Ac(80,`p`),vN(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),ug(),Ac(82,`pre`)(83,`code`,3),vN(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),ug()(),Ac(85,`p`),vN(86,`Só com isso já conseguimos dar uma nova cara para os nossos botões.`),ug(),Ac(87,`p`),Kc(88,`img`,4),ug(),Ac(89,`p`),vN(90,`Caso queira personalizar cores de forma global, é possível sobrescrever algumas variáveis globais:`),ug(),Ac(91,`pre`)(92,`code`,3),vN(93,`:root {
  --color-track: #ffecb3;
  --color-thumb: orange;
}
`),ug()(),Ac(94,`p`),Kc(95,`img`,5),ug(),Ac(96,`p`),vN(97,`Com essas personalizações, você terá controle não apenas sobre as cores, mas também sobre outros aspectos visuais dos componentes e templates em sua aplicação que utilizam o PO UI.`),ug(),Ac(98,`blockquote`)(99,`p`),vN(100,`Para descobrir quais variáveis você pode personalizar, consulte o arquivo `),Ac(101,`code`),vN(102,`po-theme-default-variables.css`),ug(),vN(103,` na pasta `),Ac(104,`code`),vN(105,`node_modules/@po-ui/style/css`),ug(),vN(106,`, l\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),ug()(),Ac(107,`blockquote`)(108,`p`),vN(109,`Para customização do componente `),Ac(110,`code`),vN(111,`po-button`),ug(),vN(112,` verificar `),Ac(113,`a`,6),vN(114,`variáveis customizaveis`),ug(),vN(115,` na aba de customização.`),ug()(),Ac(116,`blockquote`)(117,`p`),vN(118,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Ac(119,`a`,7),vN(120,`Can I use`),ug(),vN(121,`.`),ug()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var J=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:378,vars:0,consts:[[`p-title`,`Tipografia`,1,`guides`,`app-portal`],[1,`language-html`],[1,`po-font-text`],[1,`po-row`],[1,`po-md-8`,`po-lg-6`,`po-offset-md-2`,`po-offset-lg-3`,`po-offset-xl-3`,`po-shadow-card`],[1,`po-font-display`],[1,`po-sm-6`],[1,`po-font-text-large-bold`],[1,`po-font-large`],[1,`po-md-12`,`po-text-center`],[1,`po-font-title`],[1,`po-font-subtitle`],[1,`po-font-text-large`],[1,`po-font-text-bold`],[1,`po-font-text-uppercase`],[1,`po-font-text-small`],[1,`po-font-text-small-bold`],[1,`po-font-text-smaller`]],template:function(o,s){o&1&&(Ac(0,`po-page-default`,0)(1,`p`),vN(2,`O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX.`),ug(),Ac(3,`h3`),vN(4,`Como Usar?`),ug(),Ac(5,`pre`)(6,`code`,1),vN(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),ug()(),Ac(8,`p`)(9,`font`,2),vN(10,`Texto usado pelo PO`),ug()(),Ac(11,`h3`),vN(12,`Tipos Disponíveis`),ug(),Ac(13,`div`,3)(14,`div`,4)(15,`div`,3)(16,`font`,5),vN(17,`Display`),ug()(),Kc(18,`hr`),Ac(19,`div`,3)(20,`div`,6)(21,`font`,7),vN(22,`Typeface:`),ug()(),Ac(23,`div`,6)(24,`font`,8),vN(25,`NunitoSans-ExtraLight`),ug()()(),Ac(26,`div`,3)(27,`div`,6)(28,`font`,7),vN(29,`Font-size:`),ug()(),Ac(30,`div`,6)(31,`font`,8),vN(32,`50`),ug()()(),Ac(33,`div`,3)(34,`div`,6)(35,`font`,7),vN(36,`Line-height:`),ug()(),Ac(37,`div`,6)(38,`font`,8),vN(39,`64`),ug()()(),Ac(40,`div`,3)(41,`div`,9)(42,`font`,7),vN(43,`.po-font-display`),ug()()()()(),Kc(44,`br`),Ac(45,`div`,3)(46,`div`,4)(47,`div`,3)(48,`font`,10),vN(49,`Title`),ug()(),Kc(50,`hr`),Ac(51,`div`,3)(52,`div`,6)(53,`font`,7),vN(54,`Typeface:`),ug()(),Ac(55,`div`,6)(56,`font`,8),vN(57,`NunitoSans-ExtraLight`),ug()()(),Ac(58,`div`,3)(59,`div`,6)(60,`font`,7),vN(61,`Font-size:`),ug()(),Ac(62,`div`,6)(63,`font`,8),vN(64,`34`),ug()()(),Ac(65,`div`,3)(66,`div`,6)(67,`font`,7),vN(68,`Line-height:`),ug()(),Ac(69,`div`,6)(70,`font`,8),vN(71,`48`),ug()()(),Ac(72,`div`,3)(73,`div`,9)(74,`font`,7),vN(75,`.po-font-title`),ug()()()()(),Kc(76,`br`),Ac(77,`div`,3)(78,`div`,4)(79,`div`,3)(80,`font`,11),vN(81,`Subtitle`),ug()(),Kc(82,`hr`),Ac(83,`div`,3)(84,`div`,6)(85,`font`,7),vN(86,`Typeface:`),ug()(),Ac(87,`div`,6)(88,`font`,8),vN(89,`NunitoSans`),ug()()(),Ac(90,`div`,3)(91,`div`,6)(92,`font`,7),vN(93,`Font-size:`),ug()(),Ac(94,`div`,6)(95,`font`,8),vN(96,`24`),ug()()(),Ac(97,`div`,3)(98,`div`,6)(99,`font`,7),vN(100,`Line-height:`),ug()(),Ac(101,`div`,6)(102,`font`,8),vN(103,`32`),ug()()(),Ac(104,`div`,3)(105,`div`,9)(106,`font`,7),vN(107,`.po-font-subtitle`),ug()()()()(),Kc(108,`br`),Ac(109,`div`,3)(110,`div`,4)(111,`div`,3)(112,`font`,12),vN(113,`Text Large`),ug()(),Kc(114,`hr`),Ac(115,`div`,3)(116,`div`,6)(117,`font`,7),vN(118,`Typeface:`),ug()(),Ac(119,`div`,6)(120,`font`,8),vN(121,`NunitoSans`),ug()()(),Ac(122,`div`,3)(123,`div`,6)(124,`font`,7),vN(125,`Font-size:`),ug()(),Ac(126,`div`,6)(127,`font`,8),vN(128,`16`),ug()()(),Ac(129,`div`,3)(130,`div`,6)(131,`font`,7),vN(132,`Line-height:`),ug()(),Ac(133,`div`,6)(134,`font`,8),vN(135,`24`),ug()()(),Ac(136,`div`,3)(137,`div`,9)(138,`font`,7),vN(139,`.po-font-text-large`),ug()()()()(),Kc(140,`br`),Ac(141,`div`,3)(142,`div`,4)(143,`div`,3)(144,`font`,7),vN(145,`Text Large Bold`),ug()(),Kc(146,`hr`),Ac(147,`div`,3)(148,`div`,6)(149,`font`,7),vN(150,`Typeface:`),ug()(),Ac(151,`div`,6)(152,`font`,8),vN(153,`NunitoSans-Bold`),ug()()(),Ac(154,`div`,3)(155,`div`,6)(156,`font`,7),vN(157,`Font-size:`),ug()(),Ac(158,`div`,6)(159,`font`,8),vN(160,`16`),ug()()(),Ac(161,`div`,3)(162,`div`,6)(163,`font`,7),vN(164,`Line-height:`),ug()(),Ac(165,`div`,6)(166,`font`,8),vN(167,`24`),ug()()(),Ac(168,`div`,3)(169,`div`,9)(170,`font`,7),vN(171,`.po-font-text-large-bold`),ug()()()()(),Kc(172,`br`),Ac(173,`div`,3)(174,`div`,4)(175,`div`,3)(176,`font`,2),vN(177,`Text`),ug()(),Kc(178,`hr`),Ac(179,`div`,3)(180,`div`,6)(181,`font`,7),vN(182,`Typeface:`),ug()(),Ac(183,`div`,6)(184,`font`,8),vN(185,`NunitoSans`),ug()()(),Ac(186,`div`,3)(187,`div`,6)(188,`font`,7),vN(189,`Font-size:`),ug()(),Ac(190,`div`,6)(191,`font`,8),vN(192,`14`),ug()()(),Ac(193,`div`,3)(194,`div`,6)(195,`font`,7),vN(196,`Line-height:`),ug()(),Ac(197,`div`,6)(198,`font`,8),vN(199,`24`),ug()()(),Ac(200,`div`,3)(201,`div`,9)(202,`font`,7),vN(203,`.po-font-text`),ug()()()()(),Kc(204,`br`),Ac(205,`div`,3)(206,`div`,4)(207,`div`,3)(208,`font`,13),vN(209,`Text Bold`),ug()(),Kc(210,`hr`),Ac(211,`div`,3)(212,`div`,6)(213,`font`,7),vN(214,`Typeface:`),ug()(),Ac(215,`div`,6)(216,`font`,8),vN(217,`NunitoSans-Bold`),ug()()(),Ac(218,`div`,3)(219,`div`,6)(220,`font`,7),vN(221,`Font-size:`),ug()(),Ac(222,`div`,6)(223,`font`,8),vN(224,`14`),ug()()(),Ac(225,`div`,3)(226,`div`,6)(227,`font`,7),vN(228,`Line-height:`),ug()(),Ac(229,`div`,6)(230,`font`,8),vN(231,`24`),ug()()(),Ac(232,`div`,3)(233,`div`,9)(234,`font`,7),vN(235,`.po-font-text-bold`),ug()()()()(),Kc(236,`br`),Ac(237,`div`,3)(238,`div`,4)(239,`div`,3)(240,`font`,14),vN(241,`Text Uppercase`),ug()(),Kc(242,`hr`),Ac(243,`div`,3)(244,`div`,6)(245,`font`,7),vN(246,`Typeface:`),ug()(),Ac(247,`div`,6)(248,`font`,8),vN(249,`NunitoSans-Bold`),ug()()(),Ac(250,`div`,3)(251,`div`,6)(252,`font`,7),vN(253,`Font-size:`),ug()(),Ac(254,`div`,6)(255,`font`,8),vN(256,`14`),ug()()(),Ac(257,`div`,3)(258,`div`,6)(259,`font`,7),vN(260,`Line-height:`),ug()(),Ac(261,`div`,6)(262,`font`,8),vN(263,`24`),ug()()(),Ac(264,`div`,3)(265,`div`,6)(266,`font`,7),vN(267,`Transform:`),ug()(),Ac(268,`div`,6)(269,`font`,8),vN(270,`Uppercase`),ug()()(),Ac(271,`div`,3)(272,`div`,9)(273,`font`,7),vN(274,`.po-font-text-uppercase`),ug()()()()(),Kc(275,`br`),Ac(276,`div`,3)(277,`div`,4)(278,`div`,3)(279,`font`,15),vN(280,`Text Small`),ug()(),Kc(281,`hr`),Ac(282,`div`,3)(283,`div`,6)(284,`font`,7),vN(285,`Typeface:`),ug()(),Ac(286,`div`,6)(287,`font`,8),vN(288,`NunitoSans`),ug()()(),Ac(289,`div`,3)(290,`div`,6)(291,`font`,7),vN(292,`Font-size:`),ug()(),Ac(293,`div`,6)(294,`font`,8),vN(295,`12`),ug()()(),Ac(296,`div`,3)(297,`div`,6)(298,`font`,7),vN(299,`Line-height:`),ug()(),Ac(300,`div`,6)(301,`font`,8),vN(302,`16`),ug()()(),Ac(303,`div`,3)(304,`div`,9)(305,`font`,7),vN(306,`.po-font-text-small`),ug()()()()(),Kc(307,`br`),Ac(308,`div`,3)(309,`div`,4)(310,`div`,3)(311,`font`,16),vN(312,`Text Small Bold`),ug()(),Kc(313,`hr`),Ac(314,`div`,3)(315,`div`,6)(316,`font`,7),vN(317,`Typeface:`),ug()(),Ac(318,`div`,6)(319,`font`,8),vN(320,`NunitoSans-Bold`),ug()()(),Ac(321,`div`,3)(322,`div`,6)(323,`font`,7),vN(324,`Font-size:`),ug()(),Ac(325,`div`,6)(326,`font`,8),vN(327,`12`),ug()()(),Ac(328,`div`,3)(329,`div`,6)(330,`font`,7),vN(331,`Line-height:`),ug()(),Ac(332,`div`,6)(333,`font`,8),vN(334,`16`),ug()()(),Ac(335,`div`,3)(336,`div`,9)(337,`font`,7),vN(338,`.po-font-text-small-bold`),ug()()()()(),Kc(339,`br`),Ac(340,`div`,3)(341,`div`,4)(342,`div`,3)(343,`font`,17),vN(344,`Text Smaller`),ug()(),Kc(345,`hr`),Ac(346,`div`,3)(347,`div`,6)(348,`font`,7),vN(349,`Typeface:`),ug()(),Ac(350,`div`,6)(351,`font`,8),vN(352,`NunitoSans-Bold`),ug()()(),Ac(353,`div`,3)(354,`div`,6)(355,`font`,7),vN(356,`Font-size:`),ug()(),Ac(357,`div`,6)(358,`font`,8),vN(359,`10`),ug()()(),Ac(360,`div`,3)(361,`div`,6)(362,`font`,7),vN(363,`Line-height:`),ug()(),Ac(364,`div`,6)(365,`font`,8),vN(366,`16`),ug()()(),Ac(367,`div`,3)(368,`div`,6)(369,`font`,7),vN(370,`Transform:`),ug()(),Ac(371,`div`,6)(372,`font`,8),vN(373,`Uppercase`),ug()()(),Ac(374,`div`,3)(375,`div`,9)(376,`font`,7),vN(377,`.po-font-text-smaller`),ug()()()()()())},dependencies:[$ze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Y=[{path:``,component:F,children:[{path:`api`,component:T},{path:`browser-support`,component:O},{path:`deprecations`,component:D},{path:`development-flow`,component:M},{path:`getting-started`,component:I},{path:`guide-charts`,component:j},{path:`migration-poui-v2`,component:k},{path:`migration-poui`,component:w},{path:`migration-thf-to-po-ui`,component:G},{path:`press-kit`,component:U},{path:`release-schedule`,component:R},{path:`releases`,component:N},{path:`schematics`,component:L},{path:`sync-fundamentals`,component:_},{path:`sync-get-started`,component:B},{path:`theme-service`,component:H},{path:`create-theme-customization`,component:V},{path:`grid-system`,component:W},{path:`spacing`,component:Q},{path:`theme-customization`,component:X},{path:`typography`,component:J},{path:``,pathMatch:`full`,redirectTo:`getting-started`}]}];var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Y),kL]})}return a})();var Nt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,K]})}return a})();export{Nt as GuideModule};