import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,M as Wl,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-BY5NURRA.js';var D=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(o,r){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-list-view"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoListViewContentTemplateDirective"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),sg(),Sl(18,"p"),Jx(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Sl(20,"ul")(21,"li"),Jx(22,"Item: "),Sl(23,"code"),Jx(24,"item"),sg(),Jx(25," determina o item da linha corrente."),sg(),Sl(26,"li"),Jx(27,"\xCDndice: "),Sl(28,"code"),Jx(29,"index"),sg(),Jx(30," determina o \xEDndice da linha corrente."),sg()(),Sl(31,"p"),Jx(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(33,"em"),Jx(34,"syntax sugar"),sg(),Jx(35,". Veja a seguir ambos, respectivamente:"),sg(),Sl(36,"pre")(37,"code"),Jx(38,`...
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
`),sg()(),Sl(39,"pre")(40,"code"),Jx(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),sg()(),Sl(42,"p"),Jx(43,"A diretiva "),Sl(44,"strong"),Jx(45,"p-list-view-content-template"),sg(),Jx(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Sl(47,"code"),Jx(48,"p-title"),sg(),Jx(49,`,
a mesma deve retornar um valor do tipo `),Sl(50,"em"),Jx(51,"string"),sg(),Jx(52,". Veja o exemplo a seguir:"),sg(),Sl(53,"pre")(54,"code"),Jx(55,`...
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
`),sg()()(),Sl(56,"div",6)(57,"h4",7),Jx(58,"Seletor"),sg(),Sl(59,"pre",8),Jx(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),sg()(),Sl(61,"h4",9),Jx(62,"Propriedades"),sg(),Sl(63,"table",10)(64,"tr",11)(65,"th",12),Jx(66,"Nome"),sg(),Sl(67,"th",12),Jx(68,"Tipo"),sg(),Sl(69,"th",12),Jx(70,"Padr\xE3o"),sg(),Sl(71,"th",12),Jx(72,"Descri\xE7\xE3o"),sg()(),Sl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),Jx(77," p-title"),Wl(78,"br"),sg()()(),Sl(79,"td",17)(80,"code",18),Jx(81,"(item) => string"),sg()(),Sl(82,"td",19),Jx(83,"-"),sg(),Sl(84,"td",20)(85,"em")(86,"strong"),Jx(87,"(opcional)"),sg()(),Sl(88,"p"),Jx(89,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Sl(90,"code"),Jx(91,"string"),sg(),Jx(92,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),sg(),Sl(93,"blockquote")(94,"p"),Jx(95,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var T=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,r){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-list-view-content-template-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),o&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[pNe,Gme,Qme,D],encapsulation:2})}return n})();var V=[{path:"",component:T}],P=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(V),pL]})}return n})();var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,P]})}return n})();export{W as DocPoListViewContentTemplateModule};