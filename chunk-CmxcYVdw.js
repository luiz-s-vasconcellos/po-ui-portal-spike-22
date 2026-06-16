import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTableModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-table"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoTableColumnTemplateDirective"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ng(),wl(15,"p"),Ux(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),ng(),wl(17,"p"),Ux(18,"Retorno:"),ng(),wl(19,"ul")(20,"li"),Ux(21,"value: valor referente ao conte\xFAdo da linha corrente."),ng()(),wl(22,"p"),Ux(23,"Modo de uso:"),ng(),wl(24,"pre")(25,"code",6),Ux(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ng()(),wl(27,"blockquote")(28,"p"),Ux(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),wl(30,"code"),Ux(31,"status"),ng(),Ux(32," ter\xE3o o conte\xFAdo alterado para "),wl(33,"code"),Ux(34,"<h1>${value}</h1>"),ng(),Ux(35,`,
sendo que `),wl(36,"code"),Ux(37,"value"),ng(),Ux(38," refere-se ao conte\xFAdo da linha."),ng()(),wl(39,"pre")(40,"code",6),Ux(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),ng()(),wl(42,"blockquote")(43,"p"),Ux(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),ng()(),wl(45,"p"),Ux(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),ng(),wl(47,"pre")(48,"code",7),Ux(49,`...
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
`),ng()(),wl(50,"blockquote")(51,"p"),Ux(52,"Observa\xE7\xE3o: Sempre adicionar o "),wl(53,"strong"),Ux(54,"type"),ng(),Ux(55," da coluna que deseja manipular com a directiva como "),wl(56,"code"),Ux(57,"columnTemplate"),ng()()()(),wl(58,"div",8)(59,"h4",9),Ux(60,"Seletor"),ng(),wl(61,"pre",10),Ux(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),ng()(),wl(63,"h4",11),Ux(64,"Propriedades"),ng(),wl(65,"table",12)(66,"tr",13)(67,"th",14),Ux(68,"Nome"),ng(),wl(69,"th",14),Ux(70,"Tipo"),ng(),wl(71,"th",14),Ux(72,"Padr\xE3o"),ng(),wl(73,"th",14),Ux(74,"Descri\xE7\xE3o"),ng()(),wl(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),Ux(79," p-property"),Ul(80,"br"),ng()()(),wl(81,"td",19)(82,"code",20),Ux(83,"string"),ng()(),wl(84,"td",21),Ux(85,"-"),ng(),wl(86,"td",22)(87,"em")(88,"strong"),Ux(89,"(opcional)"),ng()(),wl(90,"p"),Ux(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),ng(),wl(92,"p"),Ux(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-table-column-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),ng()()()),a&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(q),vL]})}return n})();var V=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,P]})}return n})();export{V as DocPoTableColumnTemplateModule};