import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aH as Ka,T as Tl,C as iN,M as sg,L as Gl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ht,O as nw,H as Vp}from'./main-JFQ6NFFH.js';var T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:82,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,l){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-list-view"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoListViewDetailTemplateDirective"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Tl(18,"code"),iN(19,"Exibir detalhes"),sg(),iN(20," abaixo do conte\xFAdo principal do item."),sg(),Tl(21,"p"),iN(22,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Tl(23,"ul")(24,"li"),iN(25,"Item: "),Tl(26,"code"),iN(27,"item"),sg(),iN(28," determina o item da linha corrente."),sg(),Tl(29,"li"),iN(30,"\xCDndice: "),Tl(31,"code"),iN(32,"index"),sg(),iN(33," determina o \xEDndice da linha corrente."),sg()(),Tl(34,"p"),iN(35,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Tl(36,"em"),iN(37,"syntax sugar"),sg(),iN(38,". Veja a seguir ambos, respectivamente:"),sg(),Tl(39,"pre")(40,"code"),iN(41,`...
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
`),sg()(),Tl(42,"pre")(43,"code"),iN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),sg()()(),Tl(45,"div",6)(46,"h4",7),iN(47,"Seletor"),sg(),Tl(48,"pre",8),iN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),sg()(),Tl(50,"h4",9),iN(51,"Propriedades"),sg(),Tl(52,"table",10)(53,"tr",11)(54,"th",12),iN(55,"Nome"),sg(),Tl(56,"th",12),iN(57,"Tipo"),sg(),Tl(58,"th",12),iN(59,"Padr\xE3o"),sg(),Tl(60,"th",12),iN(61,"Descri\xE7\xE3o"),sg()(),Tl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),iN(66," p-show-detail"),Gl(67,"br"),sg()()(),Tl(68,"td",17)(69,"code",18),iN(70,"(item) => boolean"),sg()(),Tl(71,"td",19),iN(72,"-"),sg(),Tl(73,"td",20)(74,"em")(75,"strong"),iN(76,"(opcional)"),sg()(),Tl(77,"p"),iN(78,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Tl(79,"code"),iN(80,"boolean"),sg(),iN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var y=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-list-view-detail-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),n&2&&(nw("p-actions",l.actions),Vp(2),nw("p-active",l.activeTab==="doc"),Vp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,T],encapsulation:2,changeDetection:1})}return o})();var V=[{path:"",component:y}],P=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[DL.forChild(V),DL]})}return o})();var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,P]})}return o})();export{B as DocPoListViewDetailTemplateModule};