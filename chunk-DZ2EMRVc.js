import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-VW33P2VM.js";var T=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-list-view-detail-template-doc`]],standalone:!1,decls:82,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(n,l){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-list-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoListViewDetailTemplateDirective`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Ac(18,`code`),vN(19,`Exibir detalhes`),ug(),vN(20,` abaixo do conteúdo principal do item.`),ug(),Ac(21,`p`),vN(22,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ug(),Ac(23,`ul`)(24,`li`),vN(25,`Item: `),Ac(26,`code`),vN(27,`item`),ug(),vN(28,` determina o item da linha corrente.`),ug(),Ac(29,`li`),vN(30,`Índice: `),Ac(31,`code`),vN(32,`index`),ug(),vN(33,` determina o índice da linha corrente.`),ug()(),Ac(34,`p`),vN(35,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ac(36,`em`),vN(37,`syntax sugar`),ug(),vN(38,`. Veja a seguir ambos, respectivamente:`),ug(),Ac(39,`pre`)(40,`code`),vN(41,`...
<po-list-view
  p-property-title="name"
  [p-items]="items">

  <ng-template p-list-view-detail-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),ug()(),Ac(42,`pre`)(43,`code`),vN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ug()()(),Ac(45,`div`,6)(46,`h4`,7),vN(47,`Seletor`),ug(),Ac(48,`pre`,8),vN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),ug()(),Ac(50,`h4`,9),vN(51,`Propriedades`),ug(),Ac(52,`table`,10)(53,`tr`,11)(54,`th`,12),vN(55,`Nome`),ug(),Ac(56,`th`,12),vN(57,`Tipo`),ug(),Ac(58,`th`,12),vN(59,`Padrão`),ug(),Ac(60,`th`,12),vN(61,`Descrição`),ug()(),Ac(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),vN(66,` p-show-detail`),Kc(67,`br`),ug()()(),Ac(68,`td`,17)(69,`code`,18),vN(70,`(item) => boolean`),ug()(),Ac(71,`td`,19),vN(72,`-`),ug(),Ac(73,`td`,20)(74,`em`)(75,`strong`),vN(76,`(opcional)`),ug()(),Ac(77,`p`),vN(78,`Função que deve retornar um valor do tipo `),Ac(79,`code`),vN(80,`boolean`),ug(),vN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var V=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Detail Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-list-view-detail-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),ug()()()),n&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,T],encapsulation:2,changeDetection:1})}return o})()}];var P=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(V),kL]})}return o})();var B=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,P]})}return o})();export{B as DocPoListViewDetailTemplateModule};