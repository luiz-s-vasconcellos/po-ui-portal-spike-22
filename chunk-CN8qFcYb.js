import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-table"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTableColumnTemplateDirective"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Cl(15,"p"),qx(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),og(),Cl(17,"p"),qx(18,"Retorno:"),og(),Cl(19,"ul")(20,"li"),qx(21,"value: valor referente ao conte\xFAdo da linha corrente."),og()(),Cl(22,"p"),qx(23,"Modo de uso:"),og(),Cl(24,"pre")(25,"code",6),qx(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Cl(27,"blockquote")(28,"p"),qx(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),Cl(30,"code"),qx(31,"status"),og(),qx(32," ter\xE3o o conte\xFAdo alterado para "),Cl(33,"code"),qx(34,"<h1>${value}</h1>"),og(),qx(35,`,
sendo que `),Cl(36,"code"),qx(37,"value"),og(),qx(38," refere-se ao conte\xFAdo da linha."),og()(),Cl(39,"pre")(40,"code",6),qx(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Cl(42,"blockquote")(43,"p"),qx(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),og()(),Cl(45,"p"),qx(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Cl(47,"pre")(48,"code",7),qx(49,`...
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
`),og()(),Cl(50,"blockquote")(51,"p"),qx(52,"Observa\xE7\xE3o: Sempre adicionar o "),Cl(53,"strong"),qx(54,"type"),og(),qx(55," da coluna que deseja manipular com a directiva como "),Cl(56,"code"),qx(57,"columnTemplate"),og()()()(),Cl(58,"div",8)(59,"h4",9),qx(60,"Seletor"),og(),Cl(61,"pre",10),qx(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),og()(),Cl(63,"h4",11),qx(64,"Propriedades"),og(),Cl(65,"table",12)(66,"tr",13)(67,"th",14),qx(68,"Nome"),og(),Cl(69,"th",14),qx(70,"Tipo"),og(),Cl(71,"th",14),qx(72,"Padr\xE3o"),og(),Cl(73,"th",14),qx(74,"Descri\xE7\xE3o"),og()(),Cl(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),qx(79," p-property"),Hl(80,"br"),og()()(),Cl(81,"td",19)(82,"code",20),qx(83,"string"),og()(),Cl(84,"td",21),qx(85,"-"),og(),Cl(86,"td",22)(87,"em")(88,"strong"),qx(89,"(opcional)"),og()(),Cl(90,"p"),qx(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),og(),Cl(92,"p"),qx(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-table-column-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(q),bL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,P]})}return n})();export{W as DocPoTableColumnTemplateModule};