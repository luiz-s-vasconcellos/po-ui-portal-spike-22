import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var T=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-list-view-detail-template-doc`]],standalone:!1,decls:82,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(n,l){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-list-view`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoListViewDetailTemplateDirective`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Tl(18,`code`),cN(19,`Exibir detalhes`),ag(),cN(20,` abaixo do conteúdo principal do item.`),ag(),Tl(21,`p`),cN(22,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ag(),Tl(23,`ul`)(24,`li`),cN(25,`Item: `),Tl(26,`code`),cN(27,`item`),ag(),cN(28,` determina o item da linha corrente.`),ag(),Tl(29,`li`),cN(30,`Índice: `),Tl(31,`code`),cN(32,`index`),ag(),cN(33,` determina o índice da linha corrente.`),ag()(),Tl(34,`p`),cN(35,`Esta diretiva pode ser usada de duas formas: explícita ou `),Tl(36,`em`),cN(37,`syntax sugar`),ag(),cN(38,`. Veja a seguir ambos, respectivamente:`),ag(),Tl(39,`pre`)(40,`code`),cN(41,`...
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
`),ag()(),Tl(42,`pre`)(43,`code`),cN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ag()()(),Tl(45,`div`,6)(46,`h4`,7),cN(47,`Seletor`),ag(),Tl(48,`pre`,8),cN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),ag()(),Tl(50,`h4`,9),cN(51,`Propriedades`),ag(),Tl(52,`table`,10)(53,`tr`,11)(54,`th`,12),cN(55,`Nome`),ag(),Tl(56,`th`,12),cN(57,`Tipo`),ag(),Tl(58,`th`,12),cN(59,`Padrão`),ag(),Tl(60,`th`,12),cN(61,`Descrição`),ag()(),Tl(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),cN(66,` p-show-detail`),Gl(67,`br`),ag()()(),Tl(68,`td`,17)(69,`code`,18),cN(70,`(item) => boolean`),ag()(),Tl(71,`td`,19),cN(72,`-`),ag(),Tl(73,`td`,20)(74,`em`)(75,`strong`),cN(76,`(opcional)`),ag()(),Tl(77,`p`),cN(78,`Função que deve retornar um valor do tipo `),Tl(79,`code`),cN(80,`boolean`),ag(),cN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var V=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Detail Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-list-view-detail-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ag()()()),n&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,T],encapsulation:2,changeDetection:1})}return o})()}];var P=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(V),bL]})}return o})();var B=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,P]})}return o})();export{B as DocPoListViewDetailTemplateModule};