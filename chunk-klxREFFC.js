import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var D=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-table`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoTableRowTemplateDirective`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),ag(),Tl(15,`blockquote`)(16,`p`),cN(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Tl(18,`em`),cN(19,`master-detail`),ag(),cN(20,`.`),ag()(),Tl(21,`p`),cN(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Tl(23,`em`),cN(24,`linha`),ag(),cN(25,` e/ou `),Tl(26,`em`),cN(27,`índice`),ag(),cN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),ag(),Tl(29,`ul`)(30,`li`),cN(31,`Linha: `),Tl(32,`code`),cN(33,`row`),ag(),cN(34,` determina o item da linha corrente.`),ag(),Tl(35,`li`),cN(36,`Índice: `),Tl(37,`code`),cN(38,`rowIndex`),ag(),cN(39,` determina o índice da linha corrente.`),ag()(),Tl(40,`p`),cN(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Tl(42,`em`),cN(43,`syntax sugar`),ag(),cN(44,`. Veja a seguir ambos, respectivamente:`),ag(),Tl(45,`pre`)(46,`code`),cN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),ag()(),Tl(48,`pre`)(49,`code`),cN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),ag()(),Tl(51,`p`),cN(52,`A diretiva `),Tl(53,`strong`),cN(54,`p-table-row-template`),ag(),cN(55,`, possibilita também que determinada linha apresente ou não seu `),Tl(56,`em`),cN(57,`template`),ag(),cN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Tl(59,`code`),cN(60,`p-table-row-template-show`),ag(),cN(61,`,
a mesma deve retornar um valor do tipo `),Tl(62,`em`),cN(63,`boolean`),ag(),cN(64,`. Veja o exemplo a seguir:`),ag(),Tl(65,`pre`)(66,`code`),cN(67,`...
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
`),ag()(),Tl(68,`blockquote`)(69,`p`),cN(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Tl(71,`code`),cN(72,`status`),ag(),cN(73,`
n\xE3o correspondam \xE0 `),Tl(74,`em`),cN(75,`delivered`),ag(),cN(76,`.`),ag()()(),Tl(77,`div`,6)(78,`h4`,7),cN(79,`Seletor`),ag(),Tl(80,`pre`,8),cN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),ag()(),Tl(82,`h4`,9),cN(83,`Propriedades`),ag(),Tl(84,`table`,10)(85,`tr`,11)(86,`th`,12),cN(87,`Nome`),ag(),Tl(88,`th`,12),cN(89,`Tipo`),ag(),Tl(90,`th`,12),cN(91,`Padrão`),ag(),Tl(92,`th`,12),cN(93,`Descrição`),ag()(),Tl(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),cN(98,` p-table-row-template-show`),Gl(99,`br`),ag()()(),Tl(100,`td`,17)(101,`code`,18),cN(102,`(row: any, index: number) => boolean`),ag()(),Tl(103,`td`,19)(104,`p`)(105,`code`),cN(106,`true`),ag()()(),Tl(107,`td`,20)(108,`em`)(109,`strong`),cN(110,`(opcional)`),ag()(),Tl(111,`p`),cN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),ag(),Tl(113,`p`),cN(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),ag()()(),Tl(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),cN(119,` p-table-row-template-arrow-direction`),Gl(120,`br`),ag()()(),Tl(121,`td`,17)(122,`code`,21),cN(123,`PoTableRowTemplateArrowDirection`),ag()(),Tl(124,`td`,19)(125,`p`)(126,`code`),cN(127,`'LEFT'`),ag()()(),Tl(128,`td`,20)(129,`em`)(130,`strong`),cN(131,`(opcional)`),ag()(),Tl(132,`p`),cN(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),ag()()()(),Tl(134,`h3`),cN(135,`Enums`),ag(),Tl(136,`h4`,4)(137,`code`,5),cN(138,`PoTableRowTemplateArrowDirection`),ag()(),Tl(139,`div`,2)(140,`p`),cN(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),ag()(),Tl(142,`h4`,9),cN(143,`Propriedades`),ag(),Tl(144,`table`,10)(145,`tr`,11)(146,`th`,12),cN(147,`Nome`),ag(),Tl(148,`th`,12),cN(149,`Descrição`),ag()(),Tl(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),cN(154,` Left`),Gl(155,`br`),ag()()(),Tl(156,`td`,20)(157,`p`),cN(158,`Posiciona a `),Tl(159,`em`),cN(160,`arrow`),ag(),cN(161,` na esquerda. (Padrão)`),ag()()(),Tl(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),cN(166,` Right`),Gl(167,`br`),ag()()(),Tl(168,`td`,20)(169,`p`),cN(170,`Posiciona a `),Tl(171,`em`),cN(172,`arrow`),ag(),cN(173,` na direita`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var q=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-table-row-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ag()()()),n&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,D],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(q),bL]})}return o})();var U=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,y]})}return o})();export{U as DocPoTableRowTemplateModule};