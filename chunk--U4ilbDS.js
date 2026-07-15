import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,aH as Ga,T as Tl,C as iN,M as sg,L as Gl,a3 as lNe,b8 as Wme,b9 as jme,a1 as ht,O as nw,H as Vp}from'./main-P7IRR5MZ.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-stepper"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoStepComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-step"),sg(),iN(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Tl(18,"em"),iN(19,"step"),sg(),iN(20,") do "),Tl(21,"code"),iN(22,"po-stepper"),sg(),iN(23,", por exemplo:"),sg(),Tl(24,"pre")(25,"code"),iN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),sg()(),Tl(27,"p"),iN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Tl(29,"code"),iN(30,"po-step"),sg(),iN(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Tl(32,"em"),iN(33,"default"),sg(),iN(34,` e os demais ficam
desabilitados (`),Tl(35,"em"),iN(36,"disabled"),sg(),iN(37,")."),sg(),Tl(38,"p"),iN(39,"Ao clicar no "),Tl(40,"code"),iN(41,"po-step"),sg(),iN(42," que est\xE1 com o status "),Tl(43,"em"),iN(44,"default"),sg(),iN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Tl(46,"em"),iN(47,"done"),sg(),iN(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Tl(49,"em"),iN(50,"default"),sg(),iN(51,` e o restante permanecer\xE1
com o status desabilitado.`),sg(),Tl(52,"blockquote")(53,"p"),iN(54,"Ao utilizar o "),Tl(55,"code"),iN(56,"po-step"),sg(),iN(57,", o componente "),Tl(58,"code"),iN(59,"po-stepper"),sg(),iN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Tl(61,"code"),iN(62,"po-step"),sg(),iN(63," que esteja com o status igual a desabilitado ("),Tl(64,"em"),iN(65,"disabled"),sg(),iN(66,")."),sg()(),Tl(67,"p"),iN(68,"Acesse a "),Tl(69,"a",6),iN(70,"documenta\xE7\xE3o do "),Tl(71,"code"),iN(72,"po-stepper"),sg()(),iN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),sg()(),Tl(74,"div",7)(75,"h4",8),iN(76,"Seletor"),sg(),Tl(77,"pre",9),iN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),sg()(),Tl(79,"h4",10),iN(80,"Propriedades"),sg(),Tl(81,"table",11)(82,"tr",12)(83,"th",13),iN(84,"Nome"),sg(),Tl(85,"th",13),iN(86,"Tipo"),sg(),Tl(87,"th",13),iN(88,"Padr\xE3o"),sg(),Tl(89,"th",13),iN(90,"Descri\xE7\xE3o"),sg()(),Tl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),iN(95," p-can-active-next-step"),Gl(96,"br"),sg()()(),Tl(97,"td",18)(98,"code",19),iN(99,"((currentStep) => boolean) "),sg(),Tl(100,"code",20),iN(101," ((currentStep) => Observable<boolean>)"),sg()(),Tl(102,"td",21),iN(103,"-"),sg(),Tl(104,"td",22)(105,"em")(106,"strong"),iN(107,"(opcional)"),sg()(),Tl(108,"p"),iN(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Tl(110,"em"),iN(111,"step"),sg(),iN(112," for clicado ou quando o m\xE9todo "),Tl(113,"code"),iN(114,"PoStepperComponent.next()"),sg(),iN(115,` for chamado.
Ao retornar `),Tl(116,"code"),iN(117,"true"),sg(),iN(118," define que esse "),Tl(119,"em"),iN(120,"step"),sg(),iN(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Tl(122,"em"),iN(123,"done"),sg(),iN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Tl(125,"code"),iN(126,"Observable<boolean>"),sg(),iN(127,". Ao retornar um "),Tl(128,"code"),iN(129,"Observable<boolean>"),sg(),iN(130,`,
garanta que esse `),Tl(131,"code"),iN(132,"Observable"),sg(),iN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Tl(134,"em"),iN(135,"step"),sg(),iN(136,"."),sg(),Tl(137,"p"),iN(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Tl(139,"code"),iN(140,"PoStepComponent"),sg(),iN(141," atual."),sg(),Tl(142,"p"),iN(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Tl(144,"code"),iN(145,"PoStepComponent"),sg(),iN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Tl(147,"code"),iN(148,"bind"),sg(),iN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Tl(150,"code"),iN(151,"validate"),sg(),iN(152,":"),sg(),Tl(153,"pre")(154,"code"),iN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),sg()()()(),Tl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),iN(160," p-icon-default"),Gl(161,"br"),sg()()(),Tl(162,"td",18)(163,"code",23),iN(164,"string "),sg(),Tl(165,"code",24),iN(166," TemplateRef<void>"),sg()(),Tl(167,"td",21),iN(168,"-"),sg(),Tl(169,"td",22)(170,"em")(171,"strong"),iN(172,"(opcional)"),sg()(),Tl(173,"p"),iN(174,"Define o \xEDcone padr\xE3o do step em seu status "),Tl(175,"em"),iN(176,"default"),sg(),iN(177,`.
Esta propriedade permite usar \xEDcones da `),Tl(178,"a",25),iN(179,"Biblioteca de \xEDcones"),sg(),iN(180,"."),sg(),Tl(181,"pre")(182,"code"),iN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),sg()(),Tl(184,"p"),iN(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(186,"code"),iN(187,"TemplateRef"),sg(),iN(188,", conforme exemplo abaixo:"),sg(),Tl(189,"pre")(190,"code"),iN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),sg()(),Tl(192,"blockquote")(193,"p"),iN(194,"Deve-se usar "),Tl(195,"code"),iN(196,"font-size: inherit"),sg(),iN(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Tl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),iN(202," p-label"),Gl(203,"br"),sg()()(),Tl(204,"td",18)(205,"code",23),iN(206,"string"),sg()(),Tl(207,"td",21),iN(208,"-"),sg(),Tl(209,"td",22)(210,"p"),iN(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Tl(212,"em"),iN(213,"step"),sg(),iN(214,")."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-step-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),n&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[lNe,Wme,jme,y],encapsulation:2,changeDetection:1})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[DL.forChild(M),DL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,q]})}return i})();export{L as DocPoStepModule};