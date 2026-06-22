import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aH as Ga,T as Tl,z as tN,L as sg,J as Gl,a3 as aNe,b8 as Hme,b9 as Gme,a1 as ht,M as tw,F as Vp}from'./main-LUSFEIN7.js';var D=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(o,r){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-list-view"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoListViewContentTemplateDirective"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),sg(),Tl(18,"p"),tN(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Tl(20,"ul")(21,"li"),tN(22,"Item: "),Tl(23,"code"),tN(24,"item"),sg(),tN(25," determina o item da linha corrente."),sg(),Tl(26,"li"),tN(27,"\xCDndice: "),Tl(28,"code"),tN(29,"index"),sg(),tN(30," determina o \xEDndice da linha corrente."),sg()(),Tl(31,"p"),tN(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Tl(33,"em"),tN(34,"syntax sugar"),sg(),tN(35,". Veja a seguir ambos, respectivamente:"),sg(),Tl(36,"pre")(37,"code"),tN(38,`...
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
`),sg()(),Tl(39,"pre")(40,"code"),tN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),sg()(),Tl(42,"p"),tN(43,"A diretiva "),Tl(44,"strong"),tN(45,"p-list-view-content-template"),sg(),tN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Tl(47,"code"),tN(48,"p-title"),sg(),tN(49,`,
a mesma deve retornar um valor do tipo `),Tl(50,"em"),tN(51,"string"),sg(),tN(52,". Veja o exemplo a seguir:"),sg(),Tl(53,"pre")(54,"code"),tN(55,`...
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
`),sg()()(),Tl(56,"div",6)(57,"h4",7),tN(58,"Seletor"),sg(),Tl(59,"pre",8),tN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),sg()(),Tl(61,"h4",9),tN(62,"Propriedades"),sg(),Tl(63,"table",10)(64,"tr",11)(65,"th",12),tN(66,"Nome"),sg(),Tl(67,"th",12),tN(68,"Tipo"),sg(),Tl(69,"th",12),tN(70,"Padr\xE3o"),sg(),Tl(71,"th",12),tN(72,"Descri\xE7\xE3o"),sg()(),Tl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),tN(77," p-title"),Gl(78,"br"),sg()()(),Tl(79,"td",17)(80,"code",18),tN(81,"(item) => string"),sg()(),Tl(82,"td",19),tN(83,"-"),sg(),Tl(84,"td",20)(85,"em")(86,"strong"),tN(87,"(opcional)"),sg()(),Tl(88,"p"),tN(89,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Tl(90,"code"),tN(91,"string"),sg(),tN(92,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),sg(),Tl(93,"blockquote")(94,"p"),tN(95,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var T=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,r){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-list-view-content-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),o&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[aNe,Hme,Gme,D],encapsulation:2})}return n})();var V=[{path:"",component:T}],P=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(V),vL]})}return n})();var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,P]})}return n})();export{W as DocPoListViewContentTemplateModule};