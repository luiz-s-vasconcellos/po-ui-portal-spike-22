import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var D=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-list-view`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoListViewContentTemplateDirective`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),ag(),Tl(18,`p`),cN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ag(),Tl(20,`ul`)(21,`li`),cN(22,`Item: `),Tl(23,`code`),cN(24,`item`),ag(),cN(25,` determina o item da linha corrente.`),ag(),Tl(26,`li`),cN(27,`Índice: `),Tl(28,`code`),cN(29,`index`),ag(),cN(30,` determina o índice da linha corrente.`),ag()(),Tl(31,`p`),cN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Tl(33,`em`),cN(34,`syntax sugar`),ag(),cN(35,`. Veja a seguir ambos, respectivamente:`),ag(),Tl(36,`pre`)(37,`code`),cN(38,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),ag()(),Tl(39,`pre`)(40,`code`),cN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ag()(),Tl(42,`p`),cN(43,`A diretiva `),Tl(44,`strong`),cN(45,`p-list-view-content-template`),ag(),cN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Tl(47,`code`),cN(48,`p-title`),ag(),cN(49,`,
a mesma deve retornar um valor do tipo `),Tl(50,`em`),cN(51,`string`),ag(),cN(52,`. Veja o exemplo a seguir:`),ag(),Tl(53,`pre`)(54,`code`),cN(55,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),ag()()(),Tl(56,`div`,6)(57,`h4`,7),cN(58,`Seletor`),ag(),Tl(59,`pre`,8),cN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),ag()(),Tl(61,`h4`,9),cN(62,`Propriedades`),ag(),Tl(63,`table`,10)(64,`tr`,11)(65,`th`,12),cN(66,`Nome`),ag(),Tl(67,`th`,12),cN(68,`Tipo`),ag(),Tl(69,`th`,12),cN(70,`Padrão`),ag(),Tl(71,`th`,12),cN(72,`Descrição`),ag()(),Tl(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),cN(77,` p-title`),Gl(78,`br`),ag()()(),Tl(79,`td`,17)(80,`code`,18),cN(81,`(item) => string`),ag()(),Tl(82,`td`,19),cN(83,`-`),ag(),Tl(84,`td`,20)(85,`em`)(86,`strong`),cN(87,`(opcional)`),ag()(),Tl(88,`p`),cN(89,`Função que deve retornar um valor do tipo `),Tl(90,`code`),cN(91,`string`),ag(),cN(92,`, que será utilizado como o título de cada item da lista.`),ag(),Tl(93,`blockquote`)(94,`p`),cN(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var V=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,r){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-list-view-content-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ag()()()),o&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,D],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(V),bL]})}return n})();var W=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoListViewContentTemplateModule};