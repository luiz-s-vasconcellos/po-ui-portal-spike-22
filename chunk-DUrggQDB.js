import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var D=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoListViewModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-list-view`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoListViewContentTemplateDirective`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),wg(),jc(18,`p`),iO(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),wg(),jc(20,`ul`)(21,`li`),iO(22,`Item: `),jc(23,`code`),iO(24,`item`),wg(),iO(25,` determina o item da linha corrente.`),wg(),jc(26,`li`),iO(27,`Índice: `),jc(28,`code`),iO(29,`index`),wg(),iO(30,` determina o índice da linha corrente.`),wg()(),jc(31,`p`),iO(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),jc(33,`em`),iO(34,`syntax sugar`),wg(),iO(35,`. Veja a seguir ambos, respectivamente:`),wg(),jc(36,`pre`)(37,`code`),iO(38,`...
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
`),wg()(),jc(39,`pre`)(40,`code`),iO(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),wg()(),jc(42,`p`),iO(43,`A diretiva `),jc(44,`strong`),iO(45,`p-list-view-content-template`),wg(),iO(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),jc(47,`code`),iO(48,`p-title`),wg(),iO(49,`,
a mesma deve retornar um valor do tipo `),jc(50,`em`),iO(51,`string`),wg(),iO(52,`. Veja o exemplo a seguir:`),wg(),jc(53,`pre`)(54,`code`),iO(55,`...
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
`),wg()()(),jc(56,`div`,6)(57,`h4`,7),iO(58,`Seletor`),wg(),jc(59,`pre`,8),iO(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),wg()(),jc(61,`h4`,9),iO(62,`Propriedades`),wg(),jc(63,`table`,10)(64,`tr`,11)(65,`th`,12),iO(66,`Nome`),wg(),jc(67,`th`,12),iO(68,`Tipo`),wg(),jc(69,`th`,12),iO(70,`Padrão`),wg(),jc(71,`th`,12),iO(72,`Descrição`),wg()(),jc(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),iO(77,` p-title`),nu(78,`br`),wg()()(),jc(79,`td`,17)(80,`code`,18),iO(81,`(item) => string`),wg()(),jc(82,`td`,19),iO(83,`-`),wg(),jc(84,`td`,20)(85,`em`)(86,`strong`),iO(87,`(opcional)`),wg()(),jc(88,`p`),iO(89,`Função que deve retornar um valor do tipo `),jc(90,`code`),iO(91,`string`),wg(),iO(92,`, que será utilizado como o título de cada item da lista.`),wg(),jc(93,`blockquote`)(94,`p`),iO(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var V=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,r){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-list-view-content-template-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),wg()()()),o&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,D],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[C1.forChild(V),C1]})}return n})();var W=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[Ta,P]})}return n})();export{W as DocPoListViewContentTemplateModule};