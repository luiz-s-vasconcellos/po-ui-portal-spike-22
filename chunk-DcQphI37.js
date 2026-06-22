import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aH as Ga,T as Tl,z as tN,L as sg,J as Gl,a3 as aNe,b8 as Hme,b9 as Gme,a1 as ht,M as tw,F as Vp}from'./main-LUSFEIN7.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-stepper"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoStepComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-step"),sg(),tN(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Tl(18,"em"),tN(19,"step"),sg(),tN(20,") do "),Tl(21,"code"),tN(22,"po-stepper"),sg(),tN(23,", por exemplo:"),sg(),Tl(24,"pre")(25,"code"),tN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),sg()(),Tl(27,"p"),tN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Tl(29,"code"),tN(30,"po-step"),sg(),tN(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Tl(32,"em"),tN(33,"default"),sg(),tN(34,` e os demais ficam
desabilitados (`),Tl(35,"em"),tN(36,"disabled"),sg(),tN(37,")."),sg(),Tl(38,"p"),tN(39,"Ao clicar no "),Tl(40,"code"),tN(41,"po-step"),sg(),tN(42," que est\xE1 com o status "),Tl(43,"em"),tN(44,"default"),sg(),tN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Tl(46,"em"),tN(47,"done"),sg(),tN(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Tl(49,"em"),tN(50,"default"),sg(),tN(51,` e o restante permanecer\xE1
com o status desabilitado.`),sg(),Tl(52,"blockquote")(53,"p"),tN(54,"Ao utilizar o "),Tl(55,"code"),tN(56,"po-step"),sg(),tN(57,", o componente "),Tl(58,"code"),tN(59,"po-stepper"),sg(),tN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Tl(61,"code"),tN(62,"po-step"),sg(),tN(63," que esteja com o status igual a desabilitado ("),Tl(64,"em"),tN(65,"disabled"),sg(),tN(66,")."),sg()(),Tl(67,"p"),tN(68,"Acesse a "),Tl(69,"a",6),tN(70,"documenta\xE7\xE3o do "),Tl(71,"code"),tN(72,"po-stepper"),sg()(),tN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),sg()(),Tl(74,"div",7)(75,"h4",8),tN(76,"Seletor"),sg(),Tl(77,"pre",9),tN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),sg()(),Tl(79,"h4",10),tN(80,"Propriedades"),sg(),Tl(81,"table",11)(82,"tr",12)(83,"th",13),tN(84,"Nome"),sg(),Tl(85,"th",13),tN(86,"Tipo"),sg(),Tl(87,"th",13),tN(88,"Padr\xE3o"),sg(),Tl(89,"th",13),tN(90,"Descri\xE7\xE3o"),sg()(),Tl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),tN(95," p-can-active-next-step"),Gl(96,"br"),sg()()(),Tl(97,"td",18)(98,"code",19),tN(99,"((currentStep) => boolean) "),sg(),Tl(100,"code",20),tN(101," ((currentStep) => Observable<boolean>)"),sg()(),Tl(102,"td",21),tN(103,"-"),sg(),Tl(104,"td",22)(105,"em")(106,"strong"),tN(107,"(opcional)"),sg()(),Tl(108,"p"),tN(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Tl(110,"em"),tN(111,"step"),sg(),tN(112," for clicado ou quando o m\xE9todo "),Tl(113,"code"),tN(114,"PoStepperComponent.next()"),sg(),tN(115,` for chamado.
Ao retornar `),Tl(116,"code"),tN(117,"true"),sg(),tN(118," define que esse "),Tl(119,"em"),tN(120,"step"),sg(),tN(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Tl(122,"em"),tN(123,"done"),sg(),tN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Tl(125,"code"),tN(126,"Observable<boolean>"),sg(),tN(127,". Ao retornar um "),Tl(128,"code"),tN(129,"Observable<boolean>"),sg(),tN(130,`,
garanta que esse `),Tl(131,"code"),tN(132,"Observable"),sg(),tN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Tl(134,"em"),tN(135,"step"),sg(),tN(136,"."),sg(),Tl(137,"p"),tN(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Tl(139,"code"),tN(140,"PoStepComponent"),sg(),tN(141," atual."),sg(),Tl(142,"p"),tN(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Tl(144,"code"),tN(145,"PoStepComponent"),sg(),tN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Tl(147,"code"),tN(148,"bind"),sg(),tN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Tl(150,"code"),tN(151,"validate"),sg(),tN(152,":"),sg(),Tl(153,"pre")(154,"code"),tN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),sg()()()(),Tl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),tN(160," p-icon-default"),Gl(161,"br"),sg()()(),Tl(162,"td",18)(163,"code",23),tN(164,"string "),sg(),Tl(165,"code",24),tN(166," TemplateRef<void>"),sg()(),Tl(167,"td",21),tN(168,"-"),sg(),Tl(169,"td",22)(170,"em")(171,"strong"),tN(172,"(opcional)"),sg()(),Tl(173,"p"),tN(174,"Define o \xEDcone padr\xE3o do step em seu status "),Tl(175,"em"),tN(176,"default"),sg(),tN(177,`.
Esta propriedade permite usar \xEDcones da `),Tl(178,"a",25),tN(179,"Biblioteca de \xEDcones"),sg(),tN(180,"."),sg(),Tl(181,"pre")(182,"code"),tN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),sg()(),Tl(184,"p"),tN(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(186,"code"),tN(187,"TemplateRef"),sg(),tN(188,", conforme exemplo abaixo:"),sg(),Tl(189,"pre")(190,"code"),tN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),sg()(),Tl(192,"blockquote")(193,"p"),tN(194,"Deve-se usar "),Tl(195,"code"),tN(196,"font-size: inherit"),sg(),tN(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Tl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),tN(202," p-label"),Gl(203,"br"),sg()()(),Tl(204,"td",18)(205,"code",23),tN(206,"string"),sg()(),Tl(207,"td",21),tN(208,"-"),sg(),Tl(209,"td",22)(210,"p"),tN(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Tl(212,"em"),tN(213,"step"),sg(),tN(214,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-step-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[aNe,Hme,Gme,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(M),vL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,q]})}return i})();export{L as DocPoStepModule};