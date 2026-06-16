import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTableModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-table"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoTableRowTemplateDirective"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),ng(),wl(15,"blockquote")(16,"p"),Ux(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),wl(18,"em"),Ux(19,"master-detail"),ng(),Ux(20,"."),ng()(),wl(21,"p"),Ux(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),wl(23,"em"),Ux(24,"linha"),ng(),Ux(25," e/ou "),wl(26,"em"),Ux(27,"\xEDndice"),ng(),Ux(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),ng(),wl(29,"ul")(30,"li"),Ux(31,"Linha: "),wl(32,"code"),Ux(33,"row"),ng(),Ux(34," determina o item da linha corrente."),ng(),wl(35,"li"),Ux(36,"\xCDndice: "),wl(37,"code"),Ux(38,"rowIndex"),ng(),Ux(39," determina o \xEDndice da linha corrente."),ng()(),wl(40,"p"),Ux(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),wl(42,"em"),Ux(43,"syntax sugar"),ng(),Ux(44,". Veja a seguir ambos, respectivamente:"),ng(),wl(45,"pre")(46,"code"),Ux(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),ng()(),wl(48,"pre")(49,"code"),Ux(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),ng()(),wl(51,"p"),Ux(52,"A diretiva "),wl(53,"strong"),Ux(54,"p-table-row-template"),ng(),Ux(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),wl(56,"em"),Ux(57,"template"),ng(),Ux(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),wl(59,"code"),Ux(60,"p-table-row-template-show"),ng(),Ux(61,`,
a mesma deve retornar um valor do tipo `),wl(62,"em"),Ux(63,"boolean"),ng(),Ux(64,". Veja o exemplo a seguir:"),ng(),wl(65,"pre")(66,"code"),Ux(67,`...
@Component({
   selector: 'app-root',
   templateUrl: \`
     ...
     <po-table
       [p-columns]="columns"
       [p-items]="items">
         <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isUndelivered">
           <detail-row [row]="rowItem"> </detail-row>
         </div>
     ...
   \`
})
export class AppComponent {
   public dataTable = [{
     code: 1200,
     product: 'Rice',
     costumer: 'Supermarket 1',
     quantity: 3,
     status: 'delivered',
     license_plate: 'MDJD9191',
     batch_product: 18041822,
     driver: 'Jos\xE9 Oliveira'
   }, {
     code: 1355,
     product: 'Bean',
     costumer: 'Supermarket 2',
     quantity: 1,
     status: 'transport',
     license_plate: 'XXA5454',
     batch_product: 18041821,
     driver: 'Francisco Pereira'
   }];

   isUndelivered(row, index: number) {
     return row.status !== 'delivered';
   }
}
`),ng()(),wl(68,"blockquote")(69,"p"),Ux(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),wl(71,"code"),Ux(72,"status"),ng(),Ux(73,`
n\xE3o correspondam \xE0 `),wl(74,"em"),Ux(75,"delivered"),ng(),Ux(76,"."),ng()()(),wl(77,"div",6)(78,"h4",7),Ux(79,"Seletor"),ng(),wl(80,"pre",8),Ux(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),ng()(),wl(82,"h4",9),Ux(83,"Propriedades"),ng(),wl(84,"table",10)(85,"tr",11)(86,"th",12),Ux(87,"Nome"),ng(),wl(88,"th",12),Ux(89,"Tipo"),ng(),wl(90,"th",12),Ux(91,"Padr\xE3o"),ng(),wl(92,"th",12),Ux(93,"Descri\xE7\xE3o"),ng()(),wl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),Ux(98," p-table-row-template-show"),Ul(99,"br"),ng()()(),wl(100,"td",17)(101,"code",18),Ux(102,"(row: any, index: number) => boolean"),ng()(),wl(103,"td",19)(104,"p")(105,"code"),Ux(106,"true"),ng()()(),wl(107,"td",20)(108,"em")(109,"strong"),Ux(110,"(opcional)"),ng()(),wl(111,"p"),Ux(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),ng(),wl(113,"p"),Ux(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),ng()()(),wl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),Ux(119," p-table-row-template-arrow-direction"),Ul(120,"br"),ng()()(),wl(121,"td",17)(122,"code",21),Ux(123,"PoTableRowTemplateArrowDirection"),ng()(),wl(124,"td",19)(125,"p")(126,"code"),Ux(127,"'LEFT'"),ng()()(),wl(128,"td",20)(129,"em")(130,"strong"),Ux(131,"(opcional)"),ng()(),wl(132,"p"),Ux(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),ng()()()(),wl(134,"h3"),Ux(135,"Enums"),ng(),wl(136,"h4",4)(137,"code",5),Ux(138,"PoTableRowTemplateArrowDirection"),ng()(),wl(139,"div",2)(140,"p"),Ux(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),ng()(),wl(142,"h4",9),Ux(143,"Propriedades"),ng(),wl(144,"table",10)(145,"tr",11)(146,"th",12),Ux(147,"Nome"),ng(),wl(148,"th",12),Ux(149,"Descri\xE7\xE3o"),ng()(),wl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),Ux(154," Left"),Ul(155,"br"),ng()()(),wl(156,"td",20)(157,"p"),Ux(158,"Posiciona a "),wl(159,"em"),Ux(160,"arrow"),ng(),Ux(161," na esquerda. (Padr\xE3o)"),ng()()(),wl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),Ux(166," Right"),Ul(167,"br"),ng()()(),wl(168,"td",20)(169,"p"),Ux(170,"Posiciona a "),wl(171,"em"),Ux(172,"arrow"),ng(),Ux(173," na direita"),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-table-row-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(q),vL]})}return o})();var J=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,y]})}return o})();export{J as DocPoTableRowTemplateModule};