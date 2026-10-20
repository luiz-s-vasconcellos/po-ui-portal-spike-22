import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoStepperModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-stepper`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoStepComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-step`),wg(),iO(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),jc(18,`em`),iO(19,`step`),wg(),iO(20,`) do `),jc(21,`code`),iO(22,`po-stepper`),wg(),iO(23,`, por exemplo:`),wg(),jc(24,`pre`)(25,`code`),iO(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),wg()(),jc(27,`p`),iO(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),jc(29,`code`),iO(30,`po-step`),wg(),iO(31,` encontrado será colocado como ativo, o próximo fica com o status `),jc(32,`em`),iO(33,`default`),wg(),iO(34,` e os demais ficam
desabilitados (`),jc(35,`em`),iO(36,`disabled`),wg(),iO(37,`).`),wg(),jc(38,`p`),iO(39,`Ao clicar no `),jc(40,`code`),iO(41,`po-step`),wg(),iO(42,` que está com o status `),jc(43,`em`),iO(44,`default`),wg(),iO(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),jc(46,`em`),iO(47,`done`),wg(),iO(48,`) e o próximo que estava desabilitado ficará com o status `),jc(49,`em`),iO(50,`default`),wg(),iO(51,` e o restante permanecer\xE1
com o status desabilitado.`),wg(),jc(52,`blockquote`)(53,`p`),iO(54,`Ao utilizar o `),jc(55,`code`),iO(56,`po-step`),wg(),iO(57,`, o componente `),jc(58,`code`),iO(59,`po-stepper`),wg(),iO(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),jc(61,`code`),iO(62,`po-step`),wg(),iO(63,` que esteja com o status igual a desabilitado (`),jc(64,`em`),iO(65,`disabled`),wg(),iO(66,`).`),wg()(),jc(67,`p`),iO(68,`Acesse a `),jc(69,`a`,6),iO(70,`documentação do `),jc(71,`code`),iO(72,`po-stepper`),wg()(),iO(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),wg()(),jc(74,`div`,7)(75,`h4`,8),iO(76,`Seletor`),wg(),jc(77,`pre`,9),iO(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),wg()(),jc(79,`h4`,10),iO(80,`Propriedades`),wg(),jc(81,`table`,11)(82,`tr`,12)(83,`th`,13),iO(84,`Nome`),wg(),jc(85,`th`,13),iO(86,`Tipo`),wg(),jc(87,`th`,13),iO(88,`Padrão`),wg(),jc(89,`th`,13),iO(90,`Descrição`),wg()(),jc(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),iO(95,` p-can-active-next-step`),nu(96,`br`),wg()()(),jc(97,`td`,18)(98,`code`,19),iO(99,`((currentStep) => boolean) `),wg(),jc(100,`code`,20),iO(101,` ((currentStep) => Observable<boolean>)`),wg()(),jc(102,`td`,21),iO(103,`-`),wg(),jc(104,`td`,22)(105,`em`)(106,`strong`),iO(107,`(opcional)`),wg()(),jc(108,`p`),iO(109,`Função chamada quando o próximo `),jc(110,`em`),iO(111,`step`),wg(),iO(112,` for clicado ou quando o método `),jc(113,`code`),iO(114,`PoStepperComponent.next()`),wg(),iO(115,` for chamado.
Ao retornar `),jc(116,`code`),iO(117,`true`),wg(),iO(118,` define que esse `),jc(119,`em`),iO(120,`step`),wg(),iO(121,` ficará ativo e o atual como concluído (`),jc(122,`em`),iO(123,`done`),wg(),iO(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),jc(125,`code`),iO(126,`Observable<boolean>`),wg(),iO(127,`. Ao retornar um `),jc(128,`code`),iO(129,`Observable<boolean>`),wg(),iO(130,`,
garanta que esse `),jc(131,`code`),iO(132,`Observable`),wg(),iO(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),jc(134,`em`),iO(135,`step`),wg(),iO(136,`.`),wg(),jc(137,`p`),iO(138,`Ao ser disparada, a mesma receberá por parâmetro o `),jc(139,`code`),iO(140,`PoStepComponent`),wg(),iO(141,` atual.`),wg(),jc(142,`p`),iO(143,`O contexto da função que será chamada, será o mesmo que o do `),jc(144,`code`),iO(145,`PoStepComponent`),wg(),iO(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),jc(147,`code`),iO(148,`bind`),wg(),iO(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),jc(150,`code`),iO(151,`validate`),wg(),iO(152,`:`),wg(),jc(153,`pre`)(154,`code`),iO(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),wg()()()(),jc(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),iO(160,` p-icon-default`),nu(161,`br`),wg()()(),jc(162,`td`,18)(163,`code`,23),iO(164,`string `),wg(),jc(165,`code`,24),iO(166,` TemplateRef<void>`),wg()(),jc(167,`td`,21),iO(168,`-`),wg(),jc(169,`td`,22)(170,`em`)(171,`strong`),iO(172,`(opcional)`),wg()(),jc(173,`p`),iO(174,`Define o ícone padrão do step em seu status `),jc(175,`em`),iO(176,`default`),wg(),iO(177,`.
Esta propriedade permite usar \xEDcones da `),jc(178,`a`,25),iO(179,`Biblioteca de ícones`),wg(),iO(180,`.`),wg(),jc(181,`pre`)(182,`code`),iO(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),wg()(),jc(184,`p`),iO(185,`Outra opção seria a customização do ícone através do `),jc(186,`code`),iO(187,`TemplateRef`),wg(),iO(188,`, conforme exemplo abaixo:`),wg(),jc(189,`pre`)(190,`code`),iO(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),wg()(),jc(192,`blockquote`)(193,`p`),iO(194,`Deve-se usar `),jc(195,`code`),iO(196,`font-size: inherit`),wg(),iO(197,` para ajustar ícones que não se ajustam automaticamente.`),wg()()()(),jc(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),iO(202,` p-label`),nu(203,`br`),wg()()(),jc(204,`td`,18)(205,`code`,23),iO(206,`string`),wg()(),jc(207,`td`,21),iO(208,`-`),wg(),jc(209,`td`,22)(210,`p`),iO(211,`Título que será exibido descrevendo o passo (`),jc(212,`em`),iO(213,`step`),wg(),iO(214,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var M=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-step-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),wg()()()),n&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,y],encapsulation:2,changeDetection:1})}return i})()}];var q=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[C1.forChild(M),C1]})}return i})();var L=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[Ta,q]})}return i})();export{L as DocPoStepModule};