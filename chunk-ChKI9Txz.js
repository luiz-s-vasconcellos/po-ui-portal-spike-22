import{$i as pt,Cr as Kc,Oi as he,Ri as kL,Rt as cae,T as Cze,Wn as Ac,_a as wn,ca as ue,fr as Hp,i as _a,in as mae,ir as E,pa as vN,r as Ta,ua as ug,ui as cE,ur as Hn,zr as Qn}from"./main-DRZDQSOK.js";var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-stepper`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoStepComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-step`),ug(),vN(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),Ac(18,`em`),vN(19,`step`),ug(),vN(20,`) do `),Ac(21,`code`),vN(22,`po-stepper`),ug(),vN(23,`, por exemplo:`),ug(),Ac(24,`pre`)(25,`code`),vN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),ug()(),Ac(27,`p`),vN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Ac(29,`code`),vN(30,`po-step`),ug(),vN(31,` encontrado será colocado como ativo, o próximo fica com o status `),Ac(32,`em`),vN(33,`default`),ug(),vN(34,` e os demais ficam
desabilitados (`),Ac(35,`em`),vN(36,`disabled`),ug(),vN(37,`).`),ug(),Ac(38,`p`),vN(39,`Ao clicar no `),Ac(40,`code`),vN(41,`po-step`),ug(),vN(42,` que está com o status `),Ac(43,`em`),vN(44,`default`),ug(),vN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Ac(46,`em`),vN(47,`done`),ug(),vN(48,`) e o próximo que estava desabilitado ficará com o status `),Ac(49,`em`),vN(50,`default`),ug(),vN(51,` e o restante permanecer\xE1
com o status desabilitado.`),ug(),Ac(52,`blockquote`)(53,`p`),vN(54,`Ao utilizar o `),Ac(55,`code`),vN(56,`po-step`),ug(),vN(57,`, o componente `),Ac(58,`code`),vN(59,`po-stepper`),ug(),vN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Ac(61,`code`),vN(62,`po-step`),ug(),vN(63,` que esteja com o status igual a desabilitado (`),Ac(64,`em`),vN(65,`disabled`),ug(),vN(66,`).`),ug()(),Ac(67,`p`),vN(68,`Acesse a `),Ac(69,`a`,6),vN(70,`documentação do `),Ac(71,`code`),vN(72,`po-stepper`),ug()(),vN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),ug()(),Ac(74,`div`,7)(75,`h4`,8),vN(76,`Seletor`),ug(),Ac(77,`pre`,9),vN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),ug()(),Ac(79,`h4`,10),vN(80,`Propriedades`),ug(),Ac(81,`table`,11)(82,`tr`,12)(83,`th`,13),vN(84,`Nome`),ug(),Ac(85,`th`,13),vN(86,`Tipo`),ug(),Ac(87,`th`,13),vN(88,`Padrão`),ug(),Ac(89,`th`,13),vN(90,`Descrição`),ug()(),Ac(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),vN(95,` p-can-active-next-step`),Kc(96,`br`),ug()()(),Ac(97,`td`,18)(98,`code`,19),vN(99,`((currentStep) => boolean) `),ug(),Ac(100,`code`,20),vN(101,` ((currentStep) => Observable<boolean>)`),ug()(),Ac(102,`td`,21),vN(103,`-`),ug(),Ac(104,`td`,22)(105,`em`)(106,`strong`),vN(107,`(opcional)`),ug()(),Ac(108,`p`),vN(109,`Função chamada quando o próximo `),Ac(110,`em`),vN(111,`step`),ug(),vN(112,` for clicado ou quando o método `),Ac(113,`code`),vN(114,`PoStepperComponent.next()`),ug(),vN(115,` for chamado.
Ao retornar `),Ac(116,`code`),vN(117,`true`),ug(),vN(118,` define que esse `),Ac(119,`em`),vN(120,`step`),ug(),vN(121,` ficará ativo e o atual como concluído (`),Ac(122,`em`),vN(123,`done`),ug(),vN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Ac(125,`code`),vN(126,`Observable<boolean>`),ug(),vN(127,`. Ao retornar um `),Ac(128,`code`),vN(129,`Observable<boolean>`),ug(),vN(130,`,
garanta que esse `),Ac(131,`code`),vN(132,`Observable`),ug(),vN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Ac(134,`em`),vN(135,`step`),ug(),vN(136,`.`),ug(),Ac(137,`p`),vN(138,`Ao ser disparada, a mesma receberá por parâmetro o `),Ac(139,`code`),vN(140,`PoStepComponent`),ug(),vN(141,` atual.`),ug(),Ac(142,`p`),vN(143,`O contexto da função que será chamada, será o mesmo que o do `),Ac(144,`code`),vN(145,`PoStepComponent`),ug(),vN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Ac(147,`code`),vN(148,`bind`),ug(),vN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Ac(150,`code`),vN(151,`validate`),ug(),vN(152,`:`),ug(),Ac(153,`pre`)(154,`code`),vN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),ug()()()(),Ac(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),vN(160,` p-icon-default`),Kc(161,`br`),ug()()(),Ac(162,`td`,18)(163,`code`,23),vN(164,`string `),ug(),Ac(165,`code`,24),vN(166,` TemplateRef<void>`),ug()(),Ac(167,`td`,21),vN(168,`-`),ug(),Ac(169,`td`,22)(170,`em`)(171,`strong`),vN(172,`(opcional)`),ug()(),Ac(173,`p`),vN(174,`Define o ícone padrão do step em seu status `),Ac(175,`em`),vN(176,`default`),ug(),vN(177,`.
Esta propriedade permite usar \xEDcones da `),Ac(178,`a`,25),vN(179,`Biblioteca de ícones`),ug(),vN(180,`.`),ug(),Ac(181,`pre`)(182,`code`),vN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),ug()(),Ac(184,`p`),vN(185,`Outra opção seria a customização do ícone através do `),Ac(186,`code`),vN(187,`TemplateRef`),ug(),vN(188,`, conforme exemplo abaixo:`),ug(),Ac(189,`pre`)(190,`code`),vN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),ug()(),Ac(192,`blockquote`)(193,`p`),vN(194,`Deve-se usar `),Ac(195,`code`),vN(196,`font-size: inherit`),ug(),vN(197,` para ajustar ícones que não se ajustam automaticamente.`),ug()()()(),Ac(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),vN(202,` p-label`),Kc(203,`br`),ug()()(),Ac(204,`td`,18)(205,`code`,23),vN(206,`string`),ug()(),Ac(207,`td`,21),vN(208,`-`),ug(),Ac(209,`td`,22)(210,`p`),vN(211,`Título que será exibido descrevendo o passo (`),Ac(212,`em`),vN(213,`step`),ug(),vN(214,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var M=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-step-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),ug()()()),n&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Cze,cae,mae,y],encapsulation:2,changeDetection:1})}return i})()}];var q=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[kL.forChild(M),kL]})}return i})();var L=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[Ta,q]})}return i})();export{L as DocPoStepModule};