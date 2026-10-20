import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var D=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoTableRowTemplateDirective`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),wg(),jc(15,`blockquote`)(16,`p`),iO(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),jc(18,`em`),iO(19,`master-detail`),wg(),iO(20,`.`),wg()(),jc(21,`p`),iO(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),jc(23,`em`),iO(24,`linha`),wg(),iO(25,` e/ou `),jc(26,`em`),iO(27,`índice`),wg(),iO(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),wg(),jc(29,`ul`)(30,`li`),iO(31,`Linha: `),jc(32,`code`),iO(33,`row`),wg(),iO(34,` determina o item da linha corrente.`),wg(),jc(35,`li`),iO(36,`Índice: `),jc(37,`code`),iO(38,`rowIndex`),wg(),iO(39,` determina o índice da linha corrente.`),wg()(),jc(40,`p`),iO(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),jc(42,`em`),iO(43,`syntax sugar`),wg(),iO(44,`. Veja a seguir ambos, respectivamente:`),wg(),jc(45,`pre`)(46,`code`),iO(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),wg()(),jc(48,`pre`)(49,`code`),iO(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),wg()(),jc(51,`p`),iO(52,`A diretiva `),jc(53,`strong`),iO(54,`p-table-row-template`),wg(),iO(55,`, possibilita também que determinada linha apresente ou não seu `),jc(56,`em`),iO(57,`template`),wg(),iO(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),jc(59,`code`),iO(60,`p-table-row-template-show`),wg(),iO(61,`,
a mesma deve retornar um valor do tipo `),jc(62,`em`),iO(63,`boolean`),wg(),iO(64,`. Veja o exemplo a seguir:`),wg(),jc(65,`pre`)(66,`code`),iO(67,`...
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
`),wg()(),jc(68,`blockquote`)(69,`p`),iO(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),jc(71,`code`),iO(72,`status`),wg(),iO(73,`
n\xE3o correspondam \xE0 `),jc(74,`em`),iO(75,`delivered`),wg(),iO(76,`.`),wg()()(),jc(77,`div`,6)(78,`h4`,7),iO(79,`Seletor`),wg(),jc(80,`pre`,8),iO(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),wg()(),jc(82,`h4`,9),iO(83,`Propriedades`),wg(),jc(84,`table`,10)(85,`tr`,11)(86,`th`,12),iO(87,`Nome`),wg(),jc(88,`th`,12),iO(89,`Tipo`),wg(),jc(90,`th`,12),iO(91,`Padrão`),wg(),jc(92,`th`,12),iO(93,`Descrição`),wg()(),jc(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),iO(98,` p-table-row-template-show`),nu(99,`br`),wg()()(),jc(100,`td`,17)(101,`code`,18),iO(102,`(row: any, index: number) => boolean`),wg()(),jc(103,`td`,19)(104,`p`)(105,`code`),iO(106,`true`),wg()()(),jc(107,`td`,20)(108,`em`)(109,`strong`),iO(110,`(opcional)`),wg()(),jc(111,`p`),iO(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),wg(),jc(113,`p`),iO(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),wg()()(),jc(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),iO(119,` p-table-row-template-arrow-direction`),nu(120,`br`),wg()()(),jc(121,`td`,17)(122,`code`,21),iO(123,`PoTableRowTemplateArrowDirection`),wg()(),jc(124,`td`,19)(125,`p`)(126,`code`),iO(127,`'LEFT'`),wg()()(),jc(128,`td`,20)(129,`em`)(130,`strong`),iO(131,`(opcional)`),wg()(),jc(132,`p`),iO(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),wg()()()(),jc(134,`h3`),iO(135,`Enums`),wg(),jc(136,`h4`,4)(137,`code`,5),iO(138,`PoTableRowTemplateArrowDirection`),wg()(),jc(139,`div`,2)(140,`p`),iO(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),wg()(),jc(142,`h4`,9),iO(143,`Propriedades`),wg(),jc(144,`table`,10)(145,`tr`,11)(146,`th`,12),iO(147,`Nome`),wg(),jc(148,`th`,12),iO(149,`Descrição`),wg()(),jc(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),iO(154,` Left`),nu(155,`br`),wg()()(),jc(156,`td`,20)(157,`p`),iO(158,`Posiciona a `),jc(159,`em`),iO(160,`arrow`),wg(),iO(161,` na esquerda. (Padrão)`),wg()()(),jc(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),iO(166,` Right`),nu(167,`br`),wg()()(),jc(168,`td`,20)(169,`p`),iO(170,`Posiciona a `),jc(171,`em`),iO(172,`arrow`),wg(),iO(173,` na direita`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var q=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-table-row-template-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),wg()()()),n&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,D],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(q),C1]})}return o})();var U=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,y]})}return o})();export{U as DocPoTableRowTemplateModule};