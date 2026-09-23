import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var T=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-list-view-detail-template-doc`]],standalone:!1,decls:82,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(n,l){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-list-view`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoListViewDetailTemplateDirective`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Ml(18,`code`),mN(19,`Exibir detalhes`),lg(),mN(20,` abaixo do conteúdo principal do item.`),lg(),Ml(21,`p`),mN(22,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),lg(),Ml(23,`ul`)(24,`li`),mN(25,`Item: `),Ml(26,`code`),mN(27,`item`),lg(),mN(28,` determina o item da linha corrente.`),lg(),Ml(29,`li`),mN(30,`Índice: `),Ml(31,`code`),mN(32,`index`),lg(),mN(33,` determina o índice da linha corrente.`),lg()(),Ml(34,`p`),mN(35,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ml(36,`em`),mN(37,`syntax sugar`),lg(),mN(38,`. Veja a seguir ambos, respectivamente:`),lg(),Ml(39,`pre`)(40,`code`),mN(41,`...
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
`),lg()(),Ml(42,`pre`)(43,`code`),mN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),lg()()(),Ml(45,`div`,6)(46,`h4`,7),mN(47,`Seletor`),lg(),Ml(48,`pre`,8),mN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),lg()(),Ml(50,`h4`,9),mN(51,`Propriedades`),lg(),Ml(52,`table`,10)(53,`tr`,11)(54,`th`,12),mN(55,`Nome`),lg(),Ml(56,`th`,12),mN(57,`Tipo`),lg(),Ml(58,`th`,12),mN(59,`Padrão`),lg(),Ml(60,`th`,12),mN(61,`Descrição`),lg()(),Ml(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),mN(66,` p-show-detail`),ql(67,`br`),lg()()(),Ml(68,`td`,17)(69,`code`,18),mN(70,`(item) => boolean`),lg()(),Ml(71,`td`,19),mN(72,`-`),lg(),Ml(73,`td`,20)(74,`em`)(75,`strong`),mN(76,`(opcional)`),lg()(),Ml(77,`p`),mN(78,`Função que deve retornar um valor do tipo `),Ml(79,`code`),mN(80,`boolean`),lg(),mN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var V=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Detail Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-list-view-detail-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),lg()()()),n&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,T],encapsulation:2,changeDetection:1})}return o})()}];var P=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(V),NL]})}return o})();var B=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,P]})}return o})();export{B as DocPoListViewDetailTemplateModule};