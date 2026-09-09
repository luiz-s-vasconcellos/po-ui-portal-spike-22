import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var y=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:94,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-table`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoTableColumnTemplateDirective`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ag(),Tl(15,`p`),cN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),ag(),Tl(17,`p`),cN(18,`Retorno:`),ag(),Tl(19,`ul`)(20,`li`),cN(21,`value: valor referente ao conteúdo da linha corrente.`),ag()(),Tl(22,`p`),cN(23,`Modo de uso:`),ag(),Tl(24,`pre`)(25,`code`,6),cN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ag()(),Tl(27,`blockquote`)(28,`p`),cN(29,`No exemplo acima, todas as células correspondentes a coluna `),Tl(30,`code`),cN(31,`status`),ag(),cN(32,` terão o conteúdo alterado para `),Tl(33,`code`),cN(34,"<h1>${value}</h1>"),ag(),cN(35,`,
sendo que `),Tl(36,`code`),cN(37,`value`),ag(),cN(38,` refere-se ao conteúdo da linha.`),ag()(),Tl(39,`pre`)(40,`code`,6),cN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ag()(),Tl(42,`blockquote`)(43,`p`),cN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),ag()(),Tl(45,`p`),cN(46,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),ag(),Tl(47,`pre`)(48,`code`,7),cN(49,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),ag()(),Tl(50,`blockquote`)(51,`p`),cN(52,`Observação: Sempre adicionar o `),Tl(53,`strong`),cN(54,`type`),ag(),cN(55,` da coluna que deseja manipular com a directiva como `),Tl(56,`code`),cN(57,`columnTemplate`),ag()()()(),Tl(58,`div`,8)(59,`h4`,9),cN(60,`Seletor`),ag(),Tl(61,`pre`,10),cN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),ag()(),Tl(63,`h4`,11),cN(64,`Propriedades`),ag(),Tl(65,`table`,12)(66,`tr`,13)(67,`th`,14),cN(68,`Nome`),ag(),Tl(69,`th`,14),cN(70,`Tipo`),ag(),Tl(71,`th`,14),cN(72,`Padrão`),ag(),Tl(73,`th`,14),cN(74,`Descrição`),ag()(),Tl(75,`tr`,15)(76,`td`,16)(77,`div`,17)(78,`span`,18),cN(79,` p-property`),Gl(80,`br`),ag()()(),Tl(81,`td`,19)(82,`code`,20),cN(83,`string`),ag()(),Tl(84,`td`,21),cN(85,`-`),ag(),Tl(86,`td`,22)(87,`em`)(88,`strong`),cN(89,`(opcional)`),ag()(),Tl(90,`p`),cN(91,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),ag(),Tl(92,`p`),cN(93,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-table-column-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ag()()()),a&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,y],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(q),bL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableColumnTemplateModule};