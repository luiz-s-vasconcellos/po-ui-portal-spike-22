import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var y=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:94,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTableModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-table`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTableColumnTemplateDirective`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),lg(),Ml(15,`p`),mN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),lg(),Ml(17,`p`),mN(18,`Retorno:`),lg(),Ml(19,`ul`)(20,`li`),mN(21,`value: valor referente ao conteúdo da linha corrente.`),lg()(),Ml(22,`p`),mN(23,`Modo de uso:`),lg(),Ml(24,`pre`)(25,`code`,6),mN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),lg()(),Ml(27,`blockquote`)(28,`p`),mN(29,`No exemplo acima, todas as células correspondentes a coluna `),Ml(30,`code`),mN(31,`status`),lg(),mN(32,` terão o conteúdo alterado para `),Ml(33,`code`),mN(34,"<h1>${value}</h1>"),lg(),mN(35,`,
sendo que `),Ml(36,`code`),mN(37,`value`),lg(),mN(38,` refere-se ao conteúdo da linha.`),lg()(),Ml(39,`pre`)(40,`code`,6),mN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),lg()(),Ml(42,`blockquote`)(43,`p`),mN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),lg()(),Ml(45,`p`),mN(46,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),lg(),Ml(47,`pre`)(48,`code`,7),mN(49,`...
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
`),lg()(),Ml(50,`blockquote`)(51,`p`),mN(52,`Observação: Sempre adicionar o `),Ml(53,`strong`),mN(54,`type`),lg(),mN(55,` da coluna que deseja manipular com a directiva como `),Ml(56,`code`),mN(57,`columnTemplate`),lg()()()(),Ml(58,`div`,8)(59,`h4`,9),mN(60,`Seletor`),lg(),Ml(61,`pre`,10),mN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),lg()(),Ml(63,`h4`,11),mN(64,`Propriedades`),lg(),Ml(65,`table`,12)(66,`tr`,13)(67,`th`,14),mN(68,`Nome`),lg(),Ml(69,`th`,14),mN(70,`Tipo`),lg(),Ml(71,`th`,14),mN(72,`Padrão`),lg(),Ml(73,`th`,14),mN(74,`Descrição`),lg()(),Ml(75,`tr`,15)(76,`td`,16)(77,`div`,17)(78,`span`,18),mN(79,` p-property`),ql(80,`br`),lg()()(),Ml(81,`td`,19)(82,`code`,20),mN(83,`string`),lg()(),Ml(84,`td`,21),mN(85,`-`),lg(),Ml(86,`td`,22)(87,`em`)(88,`strong`),mN(89,`(opcional)`),lg()(),Ml(90,`p`),mN(91,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),lg(),Ml(92,`p`),mN(93,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-table-column-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),lg()()()),a&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,y],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(q),NL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableColumnTemplateModule};