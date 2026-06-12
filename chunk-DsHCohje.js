import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-table"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTableRowTemplateDirective"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),og(),Cl(15,"blockquote")(16,"p"),qx(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Cl(18,"em"),qx(19,"master-detail"),og(),qx(20,"."),og()(),Cl(21,"p"),qx(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Cl(23,"em"),qx(24,"linha"),og(),qx(25," e/ou "),Cl(26,"em"),qx(27,"\xEDndice"),og(),qx(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),og(),Cl(29,"ul")(30,"li"),qx(31,"Linha: "),Cl(32,"code"),qx(33,"row"),og(),qx(34," determina o item da linha corrente."),og(),Cl(35,"li"),qx(36,"\xCDndice: "),Cl(37,"code"),qx(38,"rowIndex"),og(),qx(39," determina o \xEDndice da linha corrente."),og()(),Cl(40,"p"),qx(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Cl(42,"em"),qx(43,"syntax sugar"),og(),qx(44,". Veja a seguir ambos, respectivamente:"),og(),Cl(45,"pre")(46,"code"),qx(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),og()(),Cl(48,"pre")(49,"code"),qx(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),og()(),Cl(51,"p"),qx(52,"A diretiva "),Cl(53,"strong"),qx(54,"p-table-row-template"),og(),qx(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Cl(56,"em"),qx(57,"template"),og(),qx(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Cl(59,"code"),qx(60,"p-table-row-template-show"),og(),qx(61,`,
a mesma deve retornar um valor do tipo `),Cl(62,"em"),qx(63,"boolean"),og(),qx(64,". Veja o exemplo a seguir:"),og(),Cl(65,"pre")(66,"code"),qx(67,`...
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
`),og()(),Cl(68,"blockquote")(69,"p"),qx(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Cl(71,"code"),qx(72,"status"),og(),qx(73,`
n\xE3o correspondam \xE0 `),Cl(74,"em"),qx(75,"delivered"),og(),qx(76,"."),og()()(),Cl(77,"div",6)(78,"h4",7),qx(79,"Seletor"),og(),Cl(80,"pre",8),qx(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),og()(),Cl(82,"h4",9),qx(83,"Propriedades"),og(),Cl(84,"table",10)(85,"tr",11)(86,"th",12),qx(87,"Nome"),og(),Cl(88,"th",12),qx(89,"Tipo"),og(),Cl(90,"th",12),qx(91,"Padr\xE3o"),og(),Cl(92,"th",12),qx(93,"Descri\xE7\xE3o"),og()(),Cl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),qx(98," p-table-row-template-show"),Hl(99,"br"),og()()(),Cl(100,"td",17)(101,"code",18),qx(102,"(row: any, index: number) => boolean"),og()(),Cl(103,"td",19)(104,"p")(105,"code"),qx(106,"true"),og()()(),Cl(107,"td",20)(108,"em")(109,"strong"),qx(110,"(opcional)"),og()(),Cl(111,"p"),qx(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),og(),Cl(113,"p"),qx(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),og()()(),Cl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),qx(119," p-table-row-template-arrow-direction"),Hl(120,"br"),og()()(),Cl(121,"td",17)(122,"code",21),qx(123,"PoTableRowTemplateArrowDirection"),og()(),Cl(124,"td",19)(125,"p")(126,"code"),qx(127,"'LEFT'"),og()()(),Cl(128,"td",20)(129,"em")(130,"strong"),qx(131,"(opcional)"),og()(),Cl(132,"p"),qx(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),og()()()(),Cl(134,"h3"),qx(135,"Enums"),og(),Cl(136,"h4",4)(137,"code",5),qx(138,"PoTableRowTemplateArrowDirection"),og()(),Cl(139,"div",2)(140,"p"),qx(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),og()(),Cl(142,"h4",9),qx(143,"Propriedades"),og(),Cl(144,"table",10)(145,"tr",11)(146,"th",12),qx(147,"Nome"),og(),Cl(148,"th",12),qx(149,"Descri\xE7\xE3o"),og()(),Cl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),qx(154," Left"),Hl(155,"br"),og()()(),Cl(156,"td",20)(157,"p"),qx(158,"Posiciona a "),Cl(159,"em"),qx(160,"arrow"),og(),qx(161," na esquerda. (Padr\xE3o)"),og()()(),Cl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),qx(166," Right"),Hl(167,"br"),og()()(),Cl(168,"td",20)(169,"p"),qx(170,"Posiciona a "),Cl(171,"em"),qx(172,"arrow"),og(),qx(173," na direita"),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-table-row-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(q),bL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,y]})}return o})();export{U as DocPoTableRowTemplateModule};