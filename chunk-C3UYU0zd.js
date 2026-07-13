import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aH as Ka,T as Tl,C as iN,M as sg,L as Gl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ht,O as nw,H as Vp}from'./main-JFQ6NFFH.js';var D=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(o,r){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-list-view"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoListViewContentTemplateDirective"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),sg(),Tl(18,"p"),iN(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Tl(20,"ul")(21,"li"),iN(22,"Item: "),Tl(23,"code"),iN(24,"item"),sg(),iN(25," determina o item da linha corrente."),sg(),Tl(26,"li"),iN(27,"\xCDndice: "),Tl(28,"code"),iN(29,"index"),sg(),iN(30," determina o \xEDndice da linha corrente."),sg()(),Tl(31,"p"),iN(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Tl(33,"em"),iN(34,"syntax sugar"),sg(),iN(35,". Veja a seguir ambos, respectivamente:"),sg(),Tl(36,"pre")(37,"code"),iN(38,`...
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
`),sg()(),Tl(39,"pre")(40,"code"),iN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),sg()(),Tl(42,"p"),iN(43,"A diretiva "),Tl(44,"strong"),iN(45,"p-list-view-content-template"),sg(),iN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Tl(47,"code"),iN(48,"p-title"),sg(),iN(49,`,
a mesma deve retornar um valor do tipo `),Tl(50,"em"),iN(51,"string"),sg(),iN(52,". Veja o exemplo a seguir:"),sg(),Tl(53,"pre")(54,"code"),iN(55,`...
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
`),sg()()(),Tl(56,"div",6)(57,"h4",7),iN(58,"Seletor"),sg(),Tl(59,"pre",8),iN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),sg()(),Tl(61,"h4",9),iN(62,"Propriedades"),sg(),Tl(63,"table",10)(64,"tr",11)(65,"th",12),iN(66,"Nome"),sg(),Tl(67,"th",12),iN(68,"Tipo"),sg(),Tl(69,"th",12),iN(70,"Padr\xE3o"),sg(),Tl(71,"th",12),iN(72,"Descri\xE7\xE3o"),sg()(),Tl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),iN(77," p-title"),Gl(78,"br"),sg()()(),Tl(79,"td",17)(80,"code",18),iN(81,"(item) => string"),sg()(),Tl(82,"td",19),iN(83,"-"),sg(),Tl(84,"td",20)(85,"em")(86,"strong"),iN(87,"(opcional)"),sg()(),Tl(88,"p"),iN(89,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Tl(90,"code"),iN(91,"string"),sg(),iN(92,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),sg(),Tl(93,"blockquote")(94,"p"),iN(95,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),sg()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var T=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,r){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-list-view-content-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),o&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[sNe,Ume,$me,D],encapsulation:2,changeDetection:1})}return n})();var V=[{path:"",component:T}],P=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[DL.forChild(V),DL]})}return n})();var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoListViewContentTemplateModule};