import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-stepper"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoStepComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-step"),og(),qx(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Cl(18,"em"),qx(19,"step"),og(),qx(20,") do "),Cl(21,"code"),qx(22,"po-stepper"),og(),qx(23,", por exemplo:"),og(),Cl(24,"pre")(25,"code"),qx(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),og()(),Cl(27,"p"),qx(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Cl(29,"code"),qx(30,"po-step"),og(),qx(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Cl(32,"em"),qx(33,"default"),og(),qx(34,` e os demais ficam
desabilitados (`),Cl(35,"em"),qx(36,"disabled"),og(),qx(37,")."),og(),Cl(38,"p"),qx(39,"Ao clicar no "),Cl(40,"code"),qx(41,"po-step"),og(),qx(42," que est\xE1 com o status "),Cl(43,"em"),qx(44,"default"),og(),qx(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Cl(46,"em"),qx(47,"done"),og(),qx(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Cl(49,"em"),qx(50,"default"),og(),qx(51,` e o restante permanecer\xE1
com o status desabilitado.`),og(),Cl(52,"blockquote")(53,"p"),qx(54,"Ao utilizar o "),Cl(55,"code"),qx(56,"po-step"),og(),qx(57,", o componente "),Cl(58,"code"),qx(59,"po-stepper"),og(),qx(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Cl(61,"code"),qx(62,"po-step"),og(),qx(63," que esteja com o status igual a desabilitado ("),Cl(64,"em"),qx(65,"disabled"),og(),qx(66,")."),og()(),Cl(67,"p"),qx(68,"Acesse a "),Cl(69,"a",6),qx(70,"documenta\xE7\xE3o do "),Cl(71,"code"),qx(72,"po-stepper"),og()(),qx(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),og()(),Cl(74,"div",7)(75,"h4",8),qx(76,"Seletor"),og(),Cl(77,"pre",9),qx(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),og()(),Cl(79,"h4",10),qx(80,"Propriedades"),og(),Cl(81,"table",11)(82,"tr",12)(83,"th",13),qx(84,"Nome"),og(),Cl(85,"th",13),qx(86,"Tipo"),og(),Cl(87,"th",13),qx(88,"Padr\xE3o"),og(),Cl(89,"th",13),qx(90,"Descri\xE7\xE3o"),og()(),Cl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),qx(95," p-can-active-next-step"),Hl(96,"br"),og()()(),Cl(97,"td",18)(98,"code",19),qx(99,"((currentStep) => boolean) "),og(),Cl(100,"code",20),qx(101," ((currentStep) => Observable<boolean>)"),og()(),Cl(102,"td",21),qx(103,"-"),og(),Cl(104,"td",22)(105,"em")(106,"strong"),qx(107,"(opcional)"),og()(),Cl(108,"p"),qx(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Cl(110,"em"),qx(111,"step"),og(),qx(112," for clicado ou quando o m\xE9todo "),Cl(113,"code"),qx(114,"PoStepperComponent.next()"),og(),qx(115,` for chamado.
Ao retornar `),Cl(116,"code"),qx(117,"true"),og(),qx(118," define que esse "),Cl(119,"em"),qx(120,"step"),og(),qx(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Cl(122,"em"),qx(123,"done"),og(),qx(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Cl(125,"code"),qx(126,"Observable<boolean>"),og(),qx(127,". Ao retornar um "),Cl(128,"code"),qx(129,"Observable<boolean>"),og(),qx(130,`,
garanta que esse `),Cl(131,"code"),qx(132,"Observable"),og(),qx(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Cl(134,"em"),qx(135,"step"),og(),qx(136,"."),og(),Cl(137,"p"),qx(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Cl(139,"code"),qx(140,"PoStepComponent"),og(),qx(141," atual."),og(),Cl(142,"p"),qx(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Cl(144,"code"),qx(145,"PoStepComponent"),og(),qx(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Cl(147,"code"),qx(148,"bind"),og(),qx(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Cl(150,"code"),qx(151,"validate"),og(),qx(152,":"),og(),Cl(153,"pre")(154,"code"),qx(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),og()()()(),Cl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),qx(160," p-icon-default"),Hl(161,"br"),og()()(),Cl(162,"td",18)(163,"code",23),qx(164,"string "),og(),Cl(165,"code",24),qx(166," TemplateRef<void>"),og()(),Cl(167,"td",21),qx(168,"-"),og(),Cl(169,"td",22)(170,"em")(171,"strong"),qx(172,"(opcional)"),og()(),Cl(173,"p"),qx(174,"Define o \xEDcone padr\xE3o do step em seu status "),Cl(175,"em"),qx(176,"default"),og(),qx(177,`.
Esta propriedade permite usar \xEDcones da `),Cl(178,"a",25),qx(179,"Biblioteca de \xEDcones"),og(),qx(180,"."),og(),Cl(181,"pre")(182,"code"),qx(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),og()(),Cl(184,"p"),qx(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(186,"code"),qx(187,"TemplateRef"),og(),qx(188,", conforme exemplo abaixo:"),og(),Cl(189,"pre")(190,"code"),qx(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),og()(),Cl(192,"blockquote")(193,"p"),qx(194,"Deve-se usar "),Cl(195,"code"),qx(196,"font-size: inherit"),og(),qx(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Cl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),qx(202," p-label"),Hl(203,"br"),og()()(),Cl(204,"td",18)(205,"code",23),qx(206,"string"),og()(),Cl(207,"td",21),qx(208,"-"),og(),Cl(209,"td",22)(210,"p"),qx(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Cl(212,"em"),qx(213,"step"),og(),qx(214,")."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-step-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[bL.forChild(M),bL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ca,q]})}return i})();export{L as DocPoStepModule};