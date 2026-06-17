import {f as fe,u as ue,a as ar,p as pL,C as C$1,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,M as Wl,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-BY5NURRA.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-stepper"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoStepComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-step"),sg(),Jx(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Sl(18,"em"),Jx(19,"step"),sg(),Jx(20,") do "),Sl(21,"code"),Jx(22,"po-stepper"),sg(),Jx(23,", por exemplo:"),sg(),Sl(24,"pre")(25,"code"),Jx(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),sg()(),Sl(27,"p"),Jx(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Sl(29,"code"),Jx(30,"po-step"),sg(),Jx(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Sl(32,"em"),Jx(33,"default"),sg(),Jx(34,` e os demais ficam
desabilitados (`),Sl(35,"em"),Jx(36,"disabled"),sg(),Jx(37,")."),sg(),Sl(38,"p"),Jx(39,"Ao clicar no "),Sl(40,"code"),Jx(41,"po-step"),sg(),Jx(42," que est\xE1 com o status "),Sl(43,"em"),Jx(44,"default"),sg(),Jx(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Sl(46,"em"),Jx(47,"done"),sg(),Jx(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Sl(49,"em"),Jx(50,"default"),sg(),Jx(51,` e o restante permanecer\xE1
com o status desabilitado.`),sg(),Sl(52,"blockquote")(53,"p"),Jx(54,"Ao utilizar o "),Sl(55,"code"),Jx(56,"po-step"),sg(),Jx(57,", o componente "),Sl(58,"code"),Jx(59,"po-stepper"),sg(),Jx(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Sl(61,"code"),Jx(62,"po-step"),sg(),Jx(63," que esteja com o status igual a desabilitado ("),Sl(64,"em"),Jx(65,"disabled"),sg(),Jx(66,")."),sg()(),Sl(67,"p"),Jx(68,"Acesse a "),Sl(69,"a",6),Jx(70,"documenta\xE7\xE3o do "),Sl(71,"code"),Jx(72,"po-stepper"),sg()(),Jx(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),sg()(),Sl(74,"div",7)(75,"h4",8),Jx(76,"Seletor"),sg(),Sl(77,"pre",9),Jx(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),sg()(),Sl(79,"h4",10),Jx(80,"Propriedades"),sg(),Sl(81,"table",11)(82,"tr",12)(83,"th",13),Jx(84,"Nome"),sg(),Sl(85,"th",13),Jx(86,"Tipo"),sg(),Sl(87,"th",13),Jx(88,"Padr\xE3o"),sg(),Sl(89,"th",13),Jx(90,"Descri\xE7\xE3o"),sg()(),Sl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),Jx(95," p-can-active-next-step"),Wl(96,"br"),sg()()(),Sl(97,"td",18)(98,"code",19),Jx(99,"((currentStep) => boolean) "),sg(),Sl(100,"code",20),Jx(101," ((currentStep) => Observable<boolean>)"),sg()(),Sl(102,"td",21),Jx(103,"-"),sg(),Sl(104,"td",22)(105,"em")(106,"strong"),Jx(107,"(opcional)"),sg()(),Sl(108,"p"),Jx(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Sl(110,"em"),Jx(111,"step"),sg(),Jx(112," for clicado ou quando o m\xE9todo "),Sl(113,"code"),Jx(114,"PoStepperComponent.next()"),sg(),Jx(115,` for chamado.
Ao retornar `),Sl(116,"code"),Jx(117,"true"),sg(),Jx(118," define que esse "),Sl(119,"em"),Jx(120,"step"),sg(),Jx(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Sl(122,"em"),Jx(123,"done"),sg(),Jx(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Sl(125,"code"),Jx(126,"Observable<boolean>"),sg(),Jx(127,". Ao retornar um "),Sl(128,"code"),Jx(129,"Observable<boolean>"),sg(),Jx(130,`,
garanta que esse `),Sl(131,"code"),Jx(132,"Observable"),sg(),Jx(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Sl(134,"em"),Jx(135,"step"),sg(),Jx(136,"."),sg(),Sl(137,"p"),Jx(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Sl(139,"code"),Jx(140,"PoStepComponent"),sg(),Jx(141," atual."),sg(),Sl(142,"p"),Jx(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Sl(144,"code"),Jx(145,"PoStepComponent"),sg(),Jx(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Sl(147,"code"),Jx(148,"bind"),sg(),Jx(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Sl(150,"code"),Jx(151,"validate"),sg(),Jx(152,":"),sg(),Sl(153,"pre")(154,"code"),Jx(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),sg()()()(),Sl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Jx(160," p-icon-default"),Wl(161,"br"),sg()()(),Sl(162,"td",18)(163,"code",23),Jx(164,"string "),sg(),Sl(165,"code",24),Jx(166," TemplateRef<void>"),sg()(),Sl(167,"td",21),Jx(168,"-"),sg(),Sl(169,"td",22)(170,"em")(171,"strong"),Jx(172,"(opcional)"),sg()(),Sl(173,"p"),Jx(174,"Define o \xEDcone padr\xE3o do step em seu status "),Sl(175,"em"),Jx(176,"default"),sg(),Jx(177,`.
Esta propriedade permite usar \xEDcones da `),Sl(178,"a",25),Jx(179,"Biblioteca de \xEDcones"),sg(),Jx(180,"."),sg(),Sl(181,"pre")(182,"code"),Jx(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),sg()(),Sl(184,"p"),Jx(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(186,"code"),Jx(187,"TemplateRef"),sg(),Jx(188,", conforme exemplo abaixo:"),sg(),Sl(189,"pre")(190,"code"),Jx(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),sg()(),Sl(192,"blockquote")(193,"p"),Jx(194,"Deve-se usar "),Sl(195,"code"),Jx(196,"font-size: inherit"),sg(),Jx(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Sl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),Jx(202," p-label"),Wl(203,"br"),sg()()(),Sl(204,"td",18)(205,"code",23),Jx(206,"string"),sg()(),Sl(207,"td",21),Jx(208,"-"),sg(),Sl(209,"td",22)(210,"p"),Jx(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Sl(212,"em"),Jx(213,"step"),sg(),Jx(214,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(C$1(Xn),C$1(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-step-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[pNe,Gme,Qme,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[pL.forChild(M),pL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,q]})}return i})();export{L as DocPoStepModule};