import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-stepper`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoStepComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-step`),ag(),cN(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),Tl(18,`em`),cN(19,`step`),ag(),cN(20,`) do `),Tl(21,`code`),cN(22,`po-stepper`),ag(),cN(23,`, por exemplo:`),ag(),Tl(24,`pre`)(25,`code`),cN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),ag()(),Tl(27,`p`),cN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Tl(29,`code`),cN(30,`po-step`),ag(),cN(31,` encontrado será colocado como ativo, o próximo fica com o status `),Tl(32,`em`),cN(33,`default`),ag(),cN(34,` e os demais ficam
desabilitados (`),Tl(35,`em`),cN(36,`disabled`),ag(),cN(37,`).`),ag(),Tl(38,`p`),cN(39,`Ao clicar no `),Tl(40,`code`),cN(41,`po-step`),ag(),cN(42,` que está com o status `),Tl(43,`em`),cN(44,`default`),ag(),cN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Tl(46,`em`),cN(47,`done`),ag(),cN(48,`) e o próximo que estava desabilitado ficará com o status `),Tl(49,`em`),cN(50,`default`),ag(),cN(51,` e o restante permanecer\xE1
com o status desabilitado.`),ag(),Tl(52,`blockquote`)(53,`p`),cN(54,`Ao utilizar o `),Tl(55,`code`),cN(56,`po-step`),ag(),cN(57,`, o componente `),Tl(58,`code`),cN(59,`po-stepper`),ag(),cN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Tl(61,`code`),cN(62,`po-step`),ag(),cN(63,` que esteja com o status igual a desabilitado (`),Tl(64,`em`),cN(65,`disabled`),ag(),cN(66,`).`),ag()(),Tl(67,`p`),cN(68,`Acesse a `),Tl(69,`a`,6),cN(70,`documentação do `),Tl(71,`code`),cN(72,`po-stepper`),ag()(),cN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),ag()(),Tl(74,`div`,7)(75,`h4`,8),cN(76,`Seletor`),ag(),Tl(77,`pre`,9),cN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),ag()(),Tl(79,`h4`,10),cN(80,`Propriedades`),ag(),Tl(81,`table`,11)(82,`tr`,12)(83,`th`,13),cN(84,`Nome`),ag(),Tl(85,`th`,13),cN(86,`Tipo`),ag(),Tl(87,`th`,13),cN(88,`Padrão`),ag(),Tl(89,`th`,13),cN(90,`Descrição`),ag()(),Tl(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),cN(95,` p-can-active-next-step`),Gl(96,`br`),ag()()(),Tl(97,`td`,18)(98,`code`,19),cN(99,`((currentStep) => boolean) `),ag(),Tl(100,`code`,20),cN(101,` ((currentStep) => Observable<boolean>)`),ag()(),Tl(102,`td`,21),cN(103,`-`),ag(),Tl(104,`td`,22)(105,`em`)(106,`strong`),cN(107,`(opcional)`),ag()(),Tl(108,`p`),cN(109,`Função chamada quando o próximo `),Tl(110,`em`),cN(111,`step`),ag(),cN(112,` for clicado ou quando o método `),Tl(113,`code`),cN(114,`PoStepperComponent.next()`),ag(),cN(115,` for chamado.
Ao retornar `),Tl(116,`code`),cN(117,`true`),ag(),cN(118,` define que esse `),Tl(119,`em`),cN(120,`step`),ag(),cN(121,` ficará ativo e o atual como concluído (`),Tl(122,`em`),cN(123,`done`),ag(),cN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Tl(125,`code`),cN(126,`Observable<boolean>`),ag(),cN(127,`. Ao retornar um `),Tl(128,`code`),cN(129,`Observable<boolean>`),ag(),cN(130,`,
garanta que esse `),Tl(131,`code`),cN(132,`Observable`),ag(),cN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Tl(134,`em`),cN(135,`step`),ag(),cN(136,`.`),ag(),Tl(137,`p`),cN(138,`Ao ser disparada, a mesma receberá por parâmetro o `),Tl(139,`code`),cN(140,`PoStepComponent`),ag(),cN(141,` atual.`),ag(),Tl(142,`p`),cN(143,`O contexto da função que será chamada, será o mesmo que o do `),Tl(144,`code`),cN(145,`PoStepComponent`),ag(),cN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Tl(147,`code`),cN(148,`bind`),ag(),cN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Tl(150,`code`),cN(151,`validate`),ag(),cN(152,`:`),ag(),Tl(153,`pre`)(154,`code`),cN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),ag()()()(),Tl(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),cN(160,` p-icon-default`),Gl(161,`br`),ag()()(),Tl(162,`td`,18)(163,`code`,23),cN(164,`string `),ag(),Tl(165,`code`,24),cN(166,` TemplateRef<void>`),ag()(),Tl(167,`td`,21),cN(168,`-`),ag(),Tl(169,`td`,22)(170,`em`)(171,`strong`),cN(172,`(opcional)`),ag()(),Tl(173,`p`),cN(174,`Define o ícone padrão do step em seu status `),Tl(175,`em`),cN(176,`default`),ag(),cN(177,`.
Esta propriedade permite usar \xEDcones da `),Tl(178,`a`,25),cN(179,`Biblioteca de ícones`),ag(),cN(180,`.`),ag(),Tl(181,`pre`)(182,`code`),cN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),ag()(),Tl(184,`p`),cN(185,`Outra opção seria a customização do ícone através do `),Tl(186,`code`),cN(187,`TemplateRef`),ag(),cN(188,`, conforme exemplo abaixo:`),ag(),Tl(189,`pre`)(190,`code`),cN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),ag()(),Tl(192,`blockquote`)(193,`p`),cN(194,`Deve-se usar `),Tl(195,`code`),cN(196,`font-size: inherit`),ag(),cN(197,` para ajustar ícones que não se ajustam automaticamente.`),ag()()()(),Tl(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),cN(202,` p-label`),Gl(203,`br`),ag()()(),Tl(204,`td`,18)(205,`code`,23),cN(206,`string`),ag()(),Tl(207,`td`,21),cN(208,`-`),ag(),Tl(209,`td`,22)(210,`p`),cN(211,`Título que será exibido descrevendo o passo (`),Tl(212,`em`),cN(213,`step`),ag(),cN(214,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var M=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-step-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ag()()()),n&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,y],encapsulation:2,changeDetection:1})}return i})()}];var q=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[bL.forChild(M),bL]})}return i})();var L=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,q]})}return i})();export{L as DocPoStepModule};