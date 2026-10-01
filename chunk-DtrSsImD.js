import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-LIMZAZLW.js";var D=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-list-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoListViewContentTemplateDirective`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),ug(),Ac(18,`p`),vN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ug(),Ac(20,`ul`)(21,`li`),vN(22,`Item: `),Ac(23,`code`),vN(24,`item`),ug(),vN(25,` determina o item da linha corrente.`),ug(),Ac(26,`li`),vN(27,`Índice: `),Ac(28,`code`),vN(29,`index`),ug(),vN(30,` determina o índice da linha corrente.`),ug()(),Ac(31,`p`),vN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ac(33,`em`),vN(34,`syntax sugar`),ug(),vN(35,`. Veja a seguir ambos, respectivamente:`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`...
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
`),ug()(),Ac(39,`pre`)(40,`code`),vN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ug()(),Ac(42,`p`),vN(43,`A diretiva `),Ac(44,`strong`),vN(45,`p-list-view-content-template`),ug(),vN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Ac(47,`code`),vN(48,`p-title`),ug(),vN(49,`,
a mesma deve retornar um valor do tipo `),Ac(50,`em`),vN(51,`string`),ug(),vN(52,`. Veja o exemplo a seguir:`),ug(),Ac(53,`pre`)(54,`code`),vN(55,`...
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
`),ug()()(),Ac(56,`div`,6)(57,`h4`,7),vN(58,`Seletor`),ug(),Ac(59,`pre`,8),vN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),ug()(),Ac(61,`h4`,9),vN(62,`Propriedades`),ug(),Ac(63,`table`,10)(64,`tr`,11)(65,`th`,12),vN(66,`Nome`),ug(),Ac(67,`th`,12),vN(68,`Tipo`),ug(),Ac(69,`th`,12),vN(70,`Padrão`),ug(),Ac(71,`th`,12),vN(72,`Descrição`),ug()(),Ac(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),vN(77,` p-title`),Kc(78,`br`),ug()()(),Ac(79,`td`,17)(80,`code`,18),vN(81,`(item) => string`),ug()(),Ac(82,`td`,19),vN(83,`-`),ug(),Ac(84,`td`,20)(85,`em`)(86,`strong`),vN(87,`(opcional)`),ug()(),Ac(88,`p`),vN(89,`Função que deve retornar um valor do tipo `),Ac(90,`code`),vN(91,`string`),ug(),vN(92,`, que será utilizado como o título de cada item da lista.`),ug(),Ac(93,`blockquote`)(94,`p`),vN(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var V=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,r){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-list-view-content-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),ug()()()),o&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[vze,tae,aae,D],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(V),kL]})}return n})();var W=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,P]})}return n})();export{W as DocPoListViewContentTemplateModule};