import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var D=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTableModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-table`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTableRowTemplateDirective`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),lg(),Ml(15,`blockquote`)(16,`p`),mN(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Ml(18,`em`),mN(19,`master-detail`),lg(),mN(20,`.`),lg()(),Ml(21,`p`),mN(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Ml(23,`em`),mN(24,`linha`),lg(),mN(25,` e/ou `),Ml(26,`em`),mN(27,`índice`),lg(),mN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),lg(),Ml(29,`ul`)(30,`li`),mN(31,`Linha: `),Ml(32,`code`),mN(33,`row`),lg(),mN(34,` determina o item da linha corrente.`),lg(),Ml(35,`li`),mN(36,`Índice: `),Ml(37,`code`),mN(38,`rowIndex`),lg(),mN(39,` determina o índice da linha corrente.`),lg()(),Ml(40,`p`),mN(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Ml(42,`em`),mN(43,`syntax sugar`),lg(),mN(44,`. Veja a seguir ambos, respectivamente:`),lg(),Ml(45,`pre`)(46,`code`),mN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),lg()(),Ml(48,`pre`)(49,`code`),mN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),lg()(),Ml(51,`p`),mN(52,`A diretiva `),Ml(53,`strong`),mN(54,`p-table-row-template`),lg(),mN(55,`, possibilita também que determinada linha apresente ou não seu `),Ml(56,`em`),mN(57,`template`),lg(),mN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Ml(59,`code`),mN(60,`p-table-row-template-show`),lg(),mN(61,`,
a mesma deve retornar um valor do tipo `),Ml(62,`em`),mN(63,`boolean`),lg(),mN(64,`. Veja o exemplo a seguir:`),lg(),Ml(65,`pre`)(66,`code`),mN(67,`...
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
`),lg()(),Ml(68,`blockquote`)(69,`p`),mN(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Ml(71,`code`),mN(72,`status`),lg(),mN(73,`
n\xE3o correspondam \xE0 `),Ml(74,`em`),mN(75,`delivered`),lg(),mN(76,`.`),lg()()(),Ml(77,`div`,6)(78,`h4`,7),mN(79,`Seletor`),lg(),Ml(80,`pre`,8),mN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),lg()(),Ml(82,`h4`,9),mN(83,`Propriedades`),lg(),Ml(84,`table`,10)(85,`tr`,11)(86,`th`,12),mN(87,`Nome`),lg(),Ml(88,`th`,12),mN(89,`Tipo`),lg(),Ml(90,`th`,12),mN(91,`Padrão`),lg(),Ml(92,`th`,12),mN(93,`Descrição`),lg()(),Ml(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),mN(98,` p-table-row-template-show`),ql(99,`br`),lg()()(),Ml(100,`td`,17)(101,`code`,18),mN(102,`(row: any, index: number) => boolean`),lg()(),Ml(103,`td`,19)(104,`p`)(105,`code`),mN(106,`true`),lg()()(),Ml(107,`td`,20)(108,`em`)(109,`strong`),mN(110,`(opcional)`),lg()(),Ml(111,`p`),mN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),lg(),Ml(113,`p`),mN(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),lg()()(),Ml(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),mN(119,` p-table-row-template-arrow-direction`),ql(120,`br`),lg()()(),Ml(121,`td`,17)(122,`code`,21),mN(123,`PoTableRowTemplateArrowDirection`),lg()(),Ml(124,`td`,19)(125,`p`)(126,`code`),mN(127,`'LEFT'`),lg()()(),Ml(128,`td`,20)(129,`em`)(130,`strong`),mN(131,`(opcional)`),lg()(),Ml(132,`p`),mN(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),lg()()()(),Ml(134,`h3`),mN(135,`Enums`),lg(),Ml(136,`h4`,4)(137,`code`,5),mN(138,`PoTableRowTemplateArrowDirection`),lg()(),Ml(139,`div`,2)(140,`p`),mN(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),lg()(),Ml(142,`h4`,9),mN(143,`Propriedades`),lg(),Ml(144,`table`,10)(145,`tr`,11)(146,`th`,12),mN(147,`Nome`),lg(),Ml(148,`th`,12),mN(149,`Descrição`),lg()(),Ml(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),mN(154,` Left`),ql(155,`br`),lg()()(),Ml(156,`td`,20)(157,`p`),mN(158,`Posiciona a `),Ml(159,`em`),mN(160,`arrow`),lg(),mN(161,` na esquerda. (Padrão)`),lg()()(),Ml(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),mN(166,` Right`),ql(167,`br`),lg()()(),Ml(168,`td`,20)(169,`p`),mN(170,`Posiciona a `),Ml(171,`em`),mN(172,`arrow`),lg(),mN(173,` na direita`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var q=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-table-row-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),lg()()()),n&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,D],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(q),NL]})}return o})();var U=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,y]})}return o})();export{U as DocPoTableRowTemplateModule};