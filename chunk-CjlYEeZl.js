import {f as fe,u as ue,a as u5,v as vL,C as C$1,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoStepperModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-stepper"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoStepComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-step"),ng(),Ux(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),wl(18,"em"),Ux(19,"step"),ng(),Ux(20,") do "),wl(21,"code"),Ux(22,"po-stepper"),ng(),Ux(23,", por exemplo:"),ng(),wl(24,"pre")(25,"code"),Ux(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),ng()(),wl(27,"p"),Ux(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),wl(29,"code"),Ux(30,"po-step"),ng(),Ux(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),wl(32,"em"),Ux(33,"default"),ng(),Ux(34,` e os demais ficam
desabilitados (`),wl(35,"em"),Ux(36,"disabled"),ng(),Ux(37,")."),ng(),wl(38,"p"),Ux(39,"Ao clicar no "),wl(40,"code"),Ux(41,"po-step"),ng(),Ux(42," que est\xE1 com o status "),wl(43,"em"),Ux(44,"default"),ng(),Ux(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),wl(46,"em"),Ux(47,"done"),ng(),Ux(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),wl(49,"em"),Ux(50,"default"),ng(),Ux(51,` e o restante permanecer\xE1
com o status desabilitado.`),ng(),wl(52,"blockquote")(53,"p"),Ux(54,"Ao utilizar o "),wl(55,"code"),Ux(56,"po-step"),ng(),Ux(57,", o componente "),wl(58,"code"),Ux(59,"po-stepper"),ng(),Ux(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),wl(61,"code"),Ux(62,"po-step"),ng(),Ux(63," que esteja com o status igual a desabilitado ("),wl(64,"em"),Ux(65,"disabled"),ng(),Ux(66,")."),ng()(),wl(67,"p"),Ux(68,"Acesse a "),wl(69,"a",6),Ux(70,"documenta\xE7\xE3o do "),wl(71,"code"),Ux(72,"po-stepper"),ng()(),Ux(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),ng()(),wl(74,"div",7)(75,"h4",8),Ux(76,"Seletor"),ng(),wl(77,"pre",9),Ux(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),ng()(),wl(79,"h4",10),Ux(80,"Propriedades"),ng(),wl(81,"table",11)(82,"tr",12)(83,"th",13),Ux(84,"Nome"),ng(),wl(85,"th",13),Ux(86,"Tipo"),ng(),wl(87,"th",13),Ux(88,"Padr\xE3o"),ng(),wl(89,"th",13),Ux(90,"Descri\xE7\xE3o"),ng()(),wl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),Ux(95," p-can-active-next-step"),Ul(96,"br"),ng()()(),wl(97,"td",18)(98,"code",19),Ux(99,"((currentStep) => boolean) "),ng(),wl(100,"code",20),Ux(101," ((currentStep) => Observable<boolean>)"),ng()(),wl(102,"td",21),Ux(103,"-"),ng(),wl(104,"td",22)(105,"em")(106,"strong"),Ux(107,"(opcional)"),ng()(),wl(108,"p"),Ux(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),wl(110,"em"),Ux(111,"step"),ng(),Ux(112," for clicado ou quando o m\xE9todo "),wl(113,"code"),Ux(114,"PoStepperComponent.next()"),ng(),Ux(115,` for chamado.
Ao retornar `),wl(116,"code"),Ux(117,"true"),ng(),Ux(118," define que esse "),wl(119,"em"),Ux(120,"step"),ng(),Ux(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),wl(122,"em"),Ux(123,"done"),ng(),Ux(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),wl(125,"code"),Ux(126,"Observable<boolean>"),ng(),Ux(127,". Ao retornar um "),wl(128,"code"),Ux(129,"Observable<boolean>"),ng(),Ux(130,`,
garanta que esse `),wl(131,"code"),Ux(132,"Observable"),ng(),Ux(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),wl(134,"em"),Ux(135,"step"),ng(),Ux(136,"."),ng(),wl(137,"p"),Ux(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),wl(139,"code"),Ux(140,"PoStepComponent"),ng(),Ux(141," atual."),ng(),wl(142,"p"),Ux(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),wl(144,"code"),Ux(145,"PoStepComponent"),ng(),Ux(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),wl(147,"code"),Ux(148,"bind"),ng(),Ux(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),wl(150,"code"),Ux(151,"validate"),ng(),Ux(152,":"),ng(),wl(153,"pre")(154,"code"),Ux(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),ng()()()(),wl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Ux(160," p-icon-default"),Ul(161,"br"),ng()()(),wl(162,"td",18)(163,"code",23),Ux(164,"string "),ng(),wl(165,"code",24),Ux(166," TemplateRef<void>"),ng()(),wl(167,"td",21),Ux(168,"-"),ng(),wl(169,"td",22)(170,"em")(171,"strong"),Ux(172,"(opcional)"),ng()(),wl(173,"p"),Ux(174,"Define o \xEDcone padr\xE3o do step em seu status "),wl(175,"em"),Ux(176,"default"),ng(),Ux(177,`.
Esta propriedade permite usar \xEDcones da `),wl(178,"a",25),Ux(179,"Biblioteca de \xEDcones"),ng(),Ux(180,"."),ng(),wl(181,"pre")(182,"code"),Ux(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),ng()(),wl(184,"p"),Ux(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(186,"code"),Ux(187,"TemplateRef"),ng(),Ux(188,", conforme exemplo abaixo:"),ng(),wl(189,"pre")(190,"code"),Ux(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),ng()(),wl(192,"blockquote")(193,"p"),Ux(194,"Deve-se usar "),wl(195,"code"),Ux(196,"font-size: inherit"),ng(),Ux(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),ng()()()(),wl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),Ux(202," p-label"),Ul(203,"br"),ng()()(),wl(204,"td",18)(205,"code",23),Ux(206,"string"),ng()(),wl(207,"td",21),Ux(208,"-"),ng(),wl(209,"td",22)(210,"p"),Ux(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),wl(212,"em"),Ux(213,"step"),ng(),Ux(214,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(C$1(Xn),C$1(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-step-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(M),vL]})}return i})();var G=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[u5,q]})}return i})();export{G as DocPoStepModule};