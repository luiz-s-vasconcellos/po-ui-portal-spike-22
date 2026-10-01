import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-VW33P2VM.js";var y=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:94,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-table`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTableColumnTemplateDirective`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ug(),Ac(15,`p`),vN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),ug(),Ac(17,`p`),vN(18,`Retorno:`),ug(),Ac(19,`ul`)(20,`li`),vN(21,`value: valor referente ao conteúdo da linha corrente.`),ug()(),Ac(22,`p`),vN(23,`Modo de uso:`),ug(),Ac(24,`pre`)(25,`code`,6),vN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ug()(),Ac(27,`blockquote`)(28,`p`),vN(29,`No exemplo acima, todas as células correspondentes a coluna `),Ac(30,`code`),vN(31,`status`),ug(),vN(32,` terão o conteúdo alterado para `),Ac(33,`code`),vN(34,"<h1>${value}</h1>"),ug(),vN(35,`,
sendo que `),Ac(36,`code`),vN(37,`value`),ug(),vN(38,` refere-se ao conteúdo da linha.`),ug()(),Ac(39,`pre`)(40,`code`,6),vN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ug()(),Ac(42,`blockquote`)(43,`p`),vN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),ug()(),Ac(45,`p`),vN(46,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),ug(),Ac(47,`pre`)(48,`code`,7),vN(49,`...
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
`),ug()(),Ac(50,`blockquote`)(51,`p`),vN(52,`Observação: Sempre adicionar o `),Ac(53,`strong`),vN(54,`type`),ug(),vN(55,` da coluna que deseja manipular com a directiva como `),Ac(56,`code`),vN(57,`columnTemplate`),ug()()()(),Ac(58,`div`,8)(59,`h4`,9),vN(60,`Seletor`),ug(),Ac(61,`pre`,10),vN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),ug()(),Ac(63,`h4`,11),vN(64,`Propriedades`),ug(),Ac(65,`table`,12)(66,`tr`,13)(67,`th`,14),vN(68,`Nome`),ug(),Ac(69,`th`,14),vN(70,`Tipo`),ug(),Ac(71,`th`,14),vN(72,`Padrão`),ug(),Ac(73,`th`,14),vN(74,`Descrição`),ug()(),Ac(75,`tr`,15)(76,`td`,16)(77,`div`,17)(78,`span`,18),vN(79,` p-property`),Kc(80,`br`),ug()()(),Ac(81,`td`,19)(82,`code`,20),vN(83,`string`),ug()(),Ac(84,`td`,21),vN(85,`-`),ug(),Ac(86,`td`,22)(87,`em`)(88,`strong`),vN(89,`(opcional)`),ug()(),Ac(90,`p`),vN(91,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),ug(),Ac(92,`p`),vN(93,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-table-column-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),ug()()()),a&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,y],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(q),kL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,P]})}return n})();export{W as DocPoTableColumnTemplateModule};