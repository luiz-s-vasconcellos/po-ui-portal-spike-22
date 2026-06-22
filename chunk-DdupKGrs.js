import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aH as Ga,T as Tl,z as tN,L as sg,J as Gl,a3 as aNe,b8 as Hme,b9 as Gme,a1 as ht,M as tw,F as Vp}from'./main-LUSFEIN7.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-table"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoTableColumnTemplateDirective"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),sg(),Tl(15,"p"),tN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),sg(),Tl(17,"p"),tN(18,"Retorno:"),sg(),Tl(19,"ul")(20,"li"),tN(21,"value: valor referente ao conte\xFAdo da linha corrente."),sg()(),Tl(22,"p"),tN(23,"Modo de uso:"),sg(),Tl(24,"pre")(25,"code",6),tN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),sg()(),Tl(27,"blockquote")(28,"p"),tN(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),Tl(30,"code"),tN(31,"status"),sg(),tN(32," ter\xE3o o conte\xFAdo alterado para "),Tl(33,"code"),tN(34,"<h1>${value}</h1>"),sg(),tN(35,`,
sendo que `),Tl(36,"code"),tN(37,"value"),sg(),tN(38," refere-se ao conte\xFAdo da linha."),sg()(),Tl(39,"pre")(40,"code",6),tN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),sg()(),Tl(42,"blockquote")(43,"p"),tN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),sg()(),Tl(45,"p"),tN(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),sg(),Tl(47,"pre")(48,"code",7),tN(49,`...
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
`),sg()(),Tl(50,"blockquote")(51,"p"),tN(52,"Observa\xE7\xE3o: Sempre adicionar o "),Tl(53,"strong"),tN(54,"type"),sg(),tN(55," da coluna que deseja manipular com a directiva como "),Tl(56,"code"),tN(57,"columnTemplate"),sg()()()(),Tl(58,"div",8)(59,"h4",9),tN(60,"Seletor"),sg(),Tl(61,"pre",10),tN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),sg()(),Tl(63,"h4",11),tN(64,"Propriedades"),sg(),Tl(65,"table",12)(66,"tr",13)(67,"th",14),tN(68,"Nome"),sg(),Tl(69,"th",14),tN(70,"Tipo"),sg(),Tl(71,"th",14),tN(72,"Padr\xE3o"),sg(),Tl(73,"th",14),tN(74,"Descri\xE7\xE3o"),sg()(),Tl(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),tN(79," p-property"),Gl(80,"br"),sg()()(),Tl(81,"td",19)(82,"code",20),tN(83,"string"),sg()(),Tl(84,"td",21),tN(85,"-"),sg(),Tl(86,"td",22)(87,"em")(88,"strong"),tN(89,"(opcional)"),sg()(),Tl(90,"p"),tN(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),sg(),Tl(92,"p"),tN(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-table-column-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),a&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[aNe,Hme,Gme,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(q),vL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableColumnTemplateModule};