import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-TFA52GHY.js";var D=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-table`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTableRowTemplateDirective`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),ug(),Ac(15,`blockquote`)(16,`p`),vN(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Ac(18,`em`),vN(19,`master-detail`),ug(),vN(20,`.`),ug()(),Ac(21,`p`),vN(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Ac(23,`em`),vN(24,`linha`),ug(),vN(25,` e/ou `),Ac(26,`em`),vN(27,`índice`),ug(),vN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),ug(),Ac(29,`ul`)(30,`li`),vN(31,`Linha: `),Ac(32,`code`),vN(33,`row`),ug(),vN(34,` determina o item da linha corrente.`),ug(),Ac(35,`li`),vN(36,`Índice: `),Ac(37,`code`),vN(38,`rowIndex`),ug(),vN(39,` determina o índice da linha corrente.`),ug()(),Ac(40,`p`),vN(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Ac(42,`em`),vN(43,`syntax sugar`),ug(),vN(44,`. Veja a seguir ambos, respectivamente:`),ug(),Ac(45,`pre`)(46,`code`),vN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),ug()(),Ac(48,`pre`)(49,`code`),vN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),ug()(),Ac(51,`p`),vN(52,`A diretiva `),Ac(53,`strong`),vN(54,`p-table-row-template`),ug(),vN(55,`, possibilita também que determinada linha apresente ou não seu `),Ac(56,`em`),vN(57,`template`),ug(),vN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Ac(59,`code`),vN(60,`p-table-row-template-show`),ug(),vN(61,`,
a mesma deve retornar um valor do tipo `),Ac(62,`em`),vN(63,`boolean`),ug(),vN(64,`. Veja o exemplo a seguir:`),ug(),Ac(65,`pre`)(66,`code`),vN(67,`...
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
`),ug()(),Ac(68,`blockquote`)(69,`p`),vN(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Ac(71,`code`),vN(72,`status`),ug(),vN(73,`
n\xE3o correspondam \xE0 `),Ac(74,`em`),vN(75,`delivered`),ug(),vN(76,`.`),ug()()(),Ac(77,`div`,6)(78,`h4`,7),vN(79,`Seletor`),ug(),Ac(80,`pre`,8),vN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),ug()(),Ac(82,`h4`,9),vN(83,`Propriedades`),ug(),Ac(84,`table`,10)(85,`tr`,11)(86,`th`,12),vN(87,`Nome`),ug(),Ac(88,`th`,12),vN(89,`Tipo`),ug(),Ac(90,`th`,12),vN(91,`Padrão`),ug(),Ac(92,`th`,12),vN(93,`Descrição`),ug()(),Ac(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),vN(98,` p-table-row-template-show`),Kc(99,`br`),ug()()(),Ac(100,`td`,17)(101,`code`,18),vN(102,`(row: any, index: number) => boolean`),ug()(),Ac(103,`td`,19)(104,`p`)(105,`code`),vN(106,`true`),ug()()(),Ac(107,`td`,20)(108,`em`)(109,`strong`),vN(110,`(opcional)`),ug()(),Ac(111,`p`),vN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),ug(),Ac(113,`p`),vN(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),ug()()(),Ac(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),vN(119,` p-table-row-template-arrow-direction`),Kc(120,`br`),ug()()(),Ac(121,`td`,17)(122,`code`,21),vN(123,`PoTableRowTemplateArrowDirection`),ug()(),Ac(124,`td`,19)(125,`p`)(126,`code`),vN(127,`'LEFT'`),ug()()(),Ac(128,`td`,20)(129,`em`)(130,`strong`),vN(131,`(opcional)`),ug()(),Ac(132,`p`),vN(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),ug()()()(),Ac(134,`h3`),vN(135,`Enums`),ug(),Ac(136,`h4`,4)(137,`code`,5),vN(138,`PoTableRowTemplateArrowDirection`),ug()(),Ac(139,`div`,2)(140,`p`),vN(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),ug()(),Ac(142,`h4`,9),vN(143,`Propriedades`),ug(),Ac(144,`table`,10)(145,`tr`,11)(146,`th`,12),vN(147,`Nome`),ug(),Ac(148,`th`,12),vN(149,`Descrição`),ug()(),Ac(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),vN(154,` Left`),Kc(155,`br`),ug()()(),Ac(156,`td`,20)(157,`p`),vN(158,`Posiciona a `),Ac(159,`em`),vN(160,`arrow`),ug(),vN(161,` na esquerda. (Padrão)`),ug()()(),Ac(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),vN(166,` Right`),Kc(167,`br`),ug()()(),Ac(168,`td`,20)(169,`p`),vN(170,`Posiciona a `),Ac(171,`em`),vN(172,`arrow`),ug(),vN(173,` na direita`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var q=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,r){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-table-row-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),ug()()()),n&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[vze,tae,aae,D],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(q),kL]})}return o})();var U=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,y]})}return o})();export{U as DocPoTableRowTemplateModule};