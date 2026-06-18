import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,M as Wl,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,T as tw,z as Vp}from'./main-UTR4MKMU.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-table"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoTableRowTemplateDirective"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),sg(),Sl(15,"blockquote")(16,"p"),Jx(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Sl(18,"em"),Jx(19,"master-detail"),sg(),Jx(20,"."),sg()(),Sl(21,"p"),Jx(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Sl(23,"em"),Jx(24,"linha"),sg(),Jx(25," e/ou "),Sl(26,"em"),Jx(27,"\xEDndice"),sg(),Jx(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),sg(),Sl(29,"ul")(30,"li"),Jx(31,"Linha: "),Sl(32,"code"),Jx(33,"row"),sg(),Jx(34," determina o item da linha corrente."),sg(),Sl(35,"li"),Jx(36,"\xCDndice: "),Sl(37,"code"),Jx(38,"rowIndex"),sg(),Jx(39," determina o \xEDndice da linha corrente."),sg()(),Sl(40,"p"),Jx(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Sl(42,"em"),Jx(43,"syntax sugar"),sg(),Jx(44,". Veja a seguir ambos, respectivamente:"),sg(),Sl(45,"pre")(46,"code"),Jx(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),sg()(),Sl(48,"pre")(49,"code"),Jx(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),sg()(),Sl(51,"p"),Jx(52,"A diretiva "),Sl(53,"strong"),Jx(54,"p-table-row-template"),sg(),Jx(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Sl(56,"em"),Jx(57,"template"),sg(),Jx(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Sl(59,"code"),Jx(60,"p-table-row-template-show"),sg(),Jx(61,`,
a mesma deve retornar um valor do tipo `),Sl(62,"em"),Jx(63,"boolean"),sg(),Jx(64,". Veja o exemplo a seguir:"),sg(),Sl(65,"pre")(66,"code"),Jx(67,`...
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
`),sg()(),Sl(68,"blockquote")(69,"p"),Jx(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Sl(71,"code"),Jx(72,"status"),sg(),Jx(73,`
n\xE3o correspondam \xE0 `),Sl(74,"em"),Jx(75,"delivered"),sg(),Jx(76,"."),sg()()(),Sl(77,"div",6)(78,"h4",7),Jx(79,"Seletor"),sg(),Sl(80,"pre",8),Jx(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),sg()(),Sl(82,"h4",9),Jx(83,"Propriedades"),sg(),Sl(84,"table",10)(85,"tr",11)(86,"th",12),Jx(87,"Nome"),sg(),Sl(88,"th",12),Jx(89,"Tipo"),sg(),Sl(90,"th",12),Jx(91,"Padr\xE3o"),sg(),Sl(92,"th",12),Jx(93,"Descri\xE7\xE3o"),sg()(),Sl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),Jx(98," p-table-row-template-show"),Wl(99,"br"),sg()()(),Sl(100,"td",17)(101,"code",18),Jx(102,"(row: any, index: number) => boolean"),sg()(),Sl(103,"td",19)(104,"p")(105,"code"),Jx(106,"true"),sg()()(),Sl(107,"td",20)(108,"em")(109,"strong"),Jx(110,"(opcional)"),sg()(),Sl(111,"p"),Jx(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),sg(),Sl(113,"p"),Jx(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),sg()()(),Sl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),Jx(119," p-table-row-template-arrow-direction"),Wl(120,"br"),sg()()(),Sl(121,"td",17)(122,"code",21),Jx(123,"PoTableRowTemplateArrowDirection"),sg()(),Sl(124,"td",19)(125,"p")(126,"code"),Jx(127,"'LEFT'"),sg()()(),Sl(128,"td",20)(129,"em")(130,"strong"),Jx(131,"(opcional)"),sg()(),Sl(132,"p"),Jx(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),sg()()()(),Sl(134,"h3"),Jx(135,"Enums"),sg(),Sl(136,"h4",4)(137,"code",5),Jx(138,"PoTableRowTemplateArrowDirection"),sg()(),Sl(139,"div",2)(140,"p"),Jx(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),sg()(),Sl(142,"h4",9),Jx(143,"Propriedades"),sg(),Sl(144,"table",10)(145,"tr",11)(146,"th",12),Jx(147,"Nome"),sg(),Sl(148,"th",12),Jx(149,"Descri\xE7\xE3o"),sg()(),Sl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),Jx(154," Left"),Wl(155,"br"),sg()()(),Sl(156,"td",20)(157,"p"),Jx(158,"Posiciona a "),Sl(159,"em"),Jx(160,"arrow"),sg(),Jx(161," na esquerda. (Padr\xE3o)"),sg()()(),Sl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),Jx(166," Right"),Wl(167,"br"),sg()()(),Sl(168,"td",20)(169,"p"),Jx(170,"Posiciona a "),Sl(171,"em"),Jx(172,"arrow"),sg(),Jx(173," na direita"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-table-row-template-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[pNe,Gme,Qme,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[pL.forChild(q),pL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,y]})}return o})();export{U as DocPoTableRowTemplateModule};