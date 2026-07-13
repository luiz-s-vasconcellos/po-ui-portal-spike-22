import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aH as Ka,T as Tl,C as iN,M as sg,L as Gl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ht,O as nw,H as Vp}from'./main-JFQ6NFFH.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-table"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoTableRowTemplateDirective"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),sg(),Tl(15,"blockquote")(16,"p"),iN(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Tl(18,"em"),iN(19,"master-detail"),sg(),iN(20,"."),sg()(),Tl(21,"p"),iN(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Tl(23,"em"),iN(24,"linha"),sg(),iN(25," e/ou "),Tl(26,"em"),iN(27,"\xEDndice"),sg(),iN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),sg(),Tl(29,"ul")(30,"li"),iN(31,"Linha: "),Tl(32,"code"),iN(33,"row"),sg(),iN(34," determina o item da linha corrente."),sg(),Tl(35,"li"),iN(36,"\xCDndice: "),Tl(37,"code"),iN(38,"rowIndex"),sg(),iN(39," determina o \xEDndice da linha corrente."),sg()(),Tl(40,"p"),iN(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Tl(42,"em"),iN(43,"syntax sugar"),sg(),iN(44,". Veja a seguir ambos, respectivamente:"),sg(),Tl(45,"pre")(46,"code"),iN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),sg()(),Tl(48,"pre")(49,"code"),iN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),sg()(),Tl(51,"p"),iN(52,"A diretiva "),Tl(53,"strong"),iN(54,"p-table-row-template"),sg(),iN(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Tl(56,"em"),iN(57,"template"),sg(),iN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Tl(59,"code"),iN(60,"p-table-row-template-show"),sg(),iN(61,`,
a mesma deve retornar um valor do tipo `),Tl(62,"em"),iN(63,"boolean"),sg(),iN(64,". Veja o exemplo a seguir:"),sg(),Tl(65,"pre")(66,"code"),iN(67,`...
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
`),sg()(),Tl(68,"blockquote")(69,"p"),iN(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Tl(71,"code"),iN(72,"status"),sg(),iN(73,`
n\xE3o correspondam \xE0 `),Tl(74,"em"),iN(75,"delivered"),sg(),iN(76,"."),sg()()(),Tl(77,"div",6)(78,"h4",7),iN(79,"Seletor"),sg(),Tl(80,"pre",8),iN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),sg()(),Tl(82,"h4",9),iN(83,"Propriedades"),sg(),Tl(84,"table",10)(85,"tr",11)(86,"th",12),iN(87,"Nome"),sg(),Tl(88,"th",12),iN(89,"Tipo"),sg(),Tl(90,"th",12),iN(91,"Padr\xE3o"),sg(),Tl(92,"th",12),iN(93,"Descri\xE7\xE3o"),sg()(),Tl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),iN(98," p-table-row-template-show"),Gl(99,"br"),sg()()(),Tl(100,"td",17)(101,"code",18),iN(102,"(row: any, index: number) => boolean"),sg()(),Tl(103,"td",19)(104,"p")(105,"code"),iN(106,"true"),sg()()(),Tl(107,"td",20)(108,"em")(109,"strong"),iN(110,"(opcional)"),sg()(),Tl(111,"p"),iN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),sg(),Tl(113,"p"),iN(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),sg()()(),Tl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),iN(119," p-table-row-template-arrow-direction"),Gl(120,"br"),sg()()(),Tl(121,"td",17)(122,"code",21),iN(123,"PoTableRowTemplateArrowDirection"),sg()(),Tl(124,"td",19)(125,"p")(126,"code"),iN(127,"'LEFT'"),sg()()(),Tl(128,"td",20)(129,"em")(130,"strong"),iN(131,"(opcional)"),sg()(),Tl(132,"p"),iN(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),sg()()()(),Tl(134,"h3"),iN(135,"Enums"),sg(),Tl(136,"h4",4)(137,"code",5),iN(138,"PoTableRowTemplateArrowDirection"),sg()(),Tl(139,"div",2)(140,"p"),iN(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),sg()(),Tl(142,"h4",9),iN(143,"Propriedades"),sg(),Tl(144,"table",10)(145,"tr",11)(146,"th",12),iN(147,"Nome"),sg(),Tl(148,"th",12),iN(149,"Descri\xE7\xE3o"),sg()(),Tl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),iN(154," Left"),Gl(155,"br"),sg()()(),Tl(156,"td",20)(157,"p"),iN(158,"Posiciona a "),Tl(159,"em"),iN(160,"arrow"),sg(),iN(161," na esquerda. (Padr\xE3o)"),sg()()(),Tl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),iN(166," Right"),Gl(167,"br"),sg()()(),Tl(168,"td",20)(169,"p"),iN(170,"Posiciona a "),Tl(171,"em"),iN(172,"arrow"),sg(),iN(173," na direita"),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-table-row-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),sg()()()),n&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[sNe,Ume,$me,D],encapsulation:2,changeDetection:1})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[DL.forChild(q),DL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{U as DocPoTableRowTemplateModule};