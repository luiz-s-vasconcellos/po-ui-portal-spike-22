import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var D=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-list-view`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoListViewContentTemplateDirective`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),lg(),Ml(18,`p`),mN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),lg(),Ml(20,`ul`)(21,`li`),mN(22,`Item: `),Ml(23,`code`),mN(24,`item`),lg(),mN(25,` determina o item da linha corrente.`),lg(),Ml(26,`li`),mN(27,`Índice: `),Ml(28,`code`),mN(29,`index`),lg(),mN(30,` determina o índice da linha corrente.`),lg()(),Ml(31,`p`),mN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ml(33,`em`),mN(34,`syntax sugar`),lg(),mN(35,`. Veja a seguir ambos, respectivamente:`),lg(),Ml(36,`pre`)(37,`code`),mN(38,`...
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
`),lg()(),Ml(39,`pre`)(40,`code`),mN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),lg()(),Ml(42,`p`),mN(43,`A diretiva `),Ml(44,`strong`),mN(45,`p-list-view-content-template`),lg(),mN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Ml(47,`code`),mN(48,`p-title`),lg(),mN(49,`,
a mesma deve retornar um valor do tipo `),Ml(50,`em`),mN(51,`string`),lg(),mN(52,`. Veja o exemplo a seguir:`),lg(),Ml(53,`pre`)(54,`code`),mN(55,`...
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
`),lg()()(),Ml(56,`div`,6)(57,`h4`,7),mN(58,`Seletor`),lg(),Ml(59,`pre`,8),mN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),lg()(),Ml(61,`h4`,9),mN(62,`Propriedades`),lg(),Ml(63,`table`,10)(64,`tr`,11)(65,`th`,12),mN(66,`Nome`),lg(),Ml(67,`th`,12),mN(68,`Tipo`),lg(),Ml(69,`th`,12),mN(70,`Padrão`),lg(),Ml(71,`th`,12),mN(72,`Descrição`),lg()(),Ml(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),mN(77,` p-title`),ql(78,`br`),lg()()(),Ml(79,`td`,17)(80,`code`,18),mN(81,`(item) => string`),lg()(),Ml(82,`td`,19),mN(83,`-`),lg(),Ml(84,`td`,20)(85,`em`)(86,`strong`),mN(87,`(opcional)`),lg()(),Ml(88,`p`),mN(89,`Função que deve retornar um valor do tipo `),Ml(90,`code`),mN(91,`string`),lg(),mN(92,`, que será utilizado como o título de cada item da lista.`),lg(),Ml(93,`blockquote`)(94,`p`),mN(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var V=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,r){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-list-view-content-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),lg()()()),o&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,D],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(V),NL]})}return n})();var W=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoListViewContentTemplateModule};