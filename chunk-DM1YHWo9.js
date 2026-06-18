import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,M as Wl,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-QNYCBKHQ.js';var T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:82,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,l){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-list-view"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoListViewDetailTemplateDirective"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Sl(18,"code"),Jx(19,"Exibir detalhes"),sg(),Jx(20," abaixo do conte\xFAdo principal do item."),sg(),Sl(21,"p"),Jx(22,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Sl(23,"ul")(24,"li"),Jx(25,"Item: "),Sl(26,"code"),Jx(27,"item"),sg(),Jx(28," determina o item da linha corrente."),sg(),Sl(29,"li"),Jx(30,"\xCDndice: "),Sl(31,"code"),Jx(32,"index"),sg(),Jx(33," determina o \xEDndice da linha corrente."),sg()(),Sl(34,"p"),Jx(35,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(36,"em"),Jx(37,"syntax sugar"),sg(),Jx(38,". Veja a seguir ambos, respectivamente:"),sg(),Sl(39,"pre")(40,"code"),Jx(41,`...
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
`),sg()(),Sl(42,"pre")(43,"code"),Jx(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),sg()()(),Sl(45,"div",6)(46,"h4",7),Jx(47,"Seletor"),sg(),Sl(48,"pre",8),Jx(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),sg()(),Sl(50,"h4",9),Jx(51,"Propriedades"),sg(),Sl(52,"table",10)(53,"tr",11)(54,"th",12),Jx(55,"Nome"),sg(),Sl(56,"th",12),Jx(57,"Tipo"),sg(),Sl(58,"th",12),Jx(59,"Padr\xE3o"),sg(),Sl(60,"th",12),Jx(61,"Descri\xE7\xE3o"),sg()(),Sl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),Jx(66," p-show-detail"),Wl(67,"br"),sg()()(),Sl(68,"td",17)(69,"code",18),Jx(70,"(item) => boolean"),sg()(),Sl(71,"td",19),Jx(72,"-"),sg(),Sl(73,"td",20)(74,"em")(75,"strong"),Jx(76,"(opcional)"),sg()(),Sl(77,"p"),Jx(78,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Sl(79,"code"),Jx(80,"boolean"),sg(),Jx(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-list-view-detail-template-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,T],encapsulation:2})}return o})();var V=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[pL.forChild(V),pL]})}return o})();var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,y]})}return o})();export{B as DocPoListViewDetailTemplateModule};