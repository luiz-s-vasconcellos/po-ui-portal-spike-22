import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-stepper`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoStepComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-step`),lg(),mN(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),Ml(18,`em`),mN(19,`step`),lg(),mN(20,`) do `),Ml(21,`code`),mN(22,`po-stepper`),lg(),mN(23,`, por exemplo:`),lg(),Ml(24,`pre`)(25,`code`),mN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),lg()(),Ml(27,`p`),mN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Ml(29,`code`),mN(30,`po-step`),lg(),mN(31,` encontrado será colocado como ativo, o próximo fica com o status `),Ml(32,`em`),mN(33,`default`),lg(),mN(34,` e os demais ficam
desabilitados (`),Ml(35,`em`),mN(36,`disabled`),lg(),mN(37,`).`),lg(),Ml(38,`p`),mN(39,`Ao clicar no `),Ml(40,`code`),mN(41,`po-step`),lg(),mN(42,` que está com o status `),Ml(43,`em`),mN(44,`default`),lg(),mN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Ml(46,`em`),mN(47,`done`),lg(),mN(48,`) e o próximo que estava desabilitado ficará com o status `),Ml(49,`em`),mN(50,`default`),lg(),mN(51,` e o restante permanecer\xE1
com o status desabilitado.`),lg(),Ml(52,`blockquote`)(53,`p`),mN(54,`Ao utilizar o `),Ml(55,`code`),mN(56,`po-step`),lg(),mN(57,`, o componente `),Ml(58,`code`),mN(59,`po-stepper`),lg(),mN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Ml(61,`code`),mN(62,`po-step`),lg(),mN(63,` que esteja com o status igual a desabilitado (`),Ml(64,`em`),mN(65,`disabled`),lg(),mN(66,`).`),lg()(),Ml(67,`p`),mN(68,`Acesse a `),Ml(69,`a`,6),mN(70,`documentação do `),Ml(71,`code`),mN(72,`po-stepper`),lg()(),mN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),lg()(),Ml(74,`div`,7)(75,`h4`,8),mN(76,`Seletor`),lg(),Ml(77,`pre`,9),mN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),lg()(),Ml(79,`h4`,10),mN(80,`Propriedades`),lg(),Ml(81,`table`,11)(82,`tr`,12)(83,`th`,13),mN(84,`Nome`),lg(),Ml(85,`th`,13),mN(86,`Tipo`),lg(),Ml(87,`th`,13),mN(88,`Padrão`),lg(),Ml(89,`th`,13),mN(90,`Descrição`),lg()(),Ml(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),mN(95,` p-can-active-next-step`),ql(96,`br`),lg()()(),Ml(97,`td`,18)(98,`code`,19),mN(99,`((currentStep) => boolean) `),lg(),Ml(100,`code`,20),mN(101,` ((currentStep) => Observable<boolean>)`),lg()(),Ml(102,`td`,21),mN(103,`-`),lg(),Ml(104,`td`,22)(105,`em`)(106,`strong`),mN(107,`(opcional)`),lg()(),Ml(108,`p`),mN(109,`Função chamada quando o próximo `),Ml(110,`em`),mN(111,`step`),lg(),mN(112,` for clicado ou quando o método `),Ml(113,`code`),mN(114,`PoStepperComponent.next()`),lg(),mN(115,` for chamado.
Ao retornar `),Ml(116,`code`),mN(117,`true`),lg(),mN(118,` define que esse `),Ml(119,`em`),mN(120,`step`),lg(),mN(121,` ficará ativo e o atual como concluído (`),Ml(122,`em`),mN(123,`done`),lg(),mN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Ml(125,`code`),mN(126,`Observable<boolean>`),lg(),mN(127,`. Ao retornar um `),Ml(128,`code`),mN(129,`Observable<boolean>`),lg(),mN(130,`,
garanta que esse `),Ml(131,`code`),mN(132,`Observable`),lg(),mN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Ml(134,`em`),mN(135,`step`),lg(),mN(136,`.`),lg(),Ml(137,`p`),mN(138,`Ao ser disparada, a mesma receberá por parâmetro o `),Ml(139,`code`),mN(140,`PoStepComponent`),lg(),mN(141,` atual.`),lg(),Ml(142,`p`),mN(143,`O contexto da função que será chamada, será o mesmo que o do `),Ml(144,`code`),mN(145,`PoStepComponent`),lg(),mN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Ml(147,`code`),mN(148,`bind`),lg(),mN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Ml(150,`code`),mN(151,`validate`),lg(),mN(152,`:`),lg(),Ml(153,`pre`)(154,`code`),mN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),lg()()()(),Ml(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),mN(160,` p-icon-default`),ql(161,`br`),lg()()(),Ml(162,`td`,18)(163,`code`,23),mN(164,`string `),lg(),Ml(165,`code`,24),mN(166,` TemplateRef<void>`),lg()(),Ml(167,`td`,21),mN(168,`-`),lg(),Ml(169,`td`,22)(170,`em`)(171,`strong`),mN(172,`(opcional)`),lg()(),Ml(173,`p`),mN(174,`Define o ícone padrão do step em seu status `),Ml(175,`em`),mN(176,`default`),lg(),mN(177,`.
Esta propriedade permite usar \xEDcones da `),Ml(178,`a`,25),mN(179,`Biblioteca de ícones`),lg(),mN(180,`.`),lg(),Ml(181,`pre`)(182,`code`),mN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),lg()(),Ml(184,`p`),mN(185,`Outra opção seria a customização do ícone através do `),Ml(186,`code`),mN(187,`TemplateRef`),lg(),mN(188,`, conforme exemplo abaixo:`),lg(),Ml(189,`pre`)(190,`code`),mN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),lg()(),Ml(192,`blockquote`)(193,`p`),mN(194,`Deve-se usar `),Ml(195,`code`),mN(196,`font-size: inherit`),lg(),mN(197,` para ajustar ícones que não se ajustam automaticamente.`),lg()()()(),Ml(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),mN(202,` p-label`),ql(203,`br`),lg()()(),Ml(204,`td`,18)(205,`code`,23),mN(206,`string`),lg()(),Ml(207,`td`,21),mN(208,`-`),lg(),Ml(209,`td`,22)(210,`p`),mN(211,`Título que será exibido descrevendo o passo (`),Ml(212,`em`),mN(213,`step`),lg(),mN(214,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var M=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-step-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),lg()()()),n&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,y],encapsulation:2,changeDetection:1})}return i})()}];var q=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[NL.forChild(M),NL]})}return i})();var L=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,q]})}return i})();export{L as DocPoStepModule};