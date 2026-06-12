import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,R as Hl,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var D=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-table"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTableCellTemplateDirective"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Cl(15,"p"),qx(16,"Em seu uso, deve-se apenas adicionar a diretiva "),Cl(17,"strong"),qx(18,"p-table-cell-template"),og(),qx(19," \xE0 tag "),Cl(20,"code"),qx(21,"ng-template"),og(),qx(22,"."),og(),Cl(23,"p"),qx(24,"Retorno:"),og(),Cl(25,"ul")(26,"li")(27,"code"),qx(28,"column"),og(),qx(29,": conte\xFAdo da coluna corrente."),og(),Cl(30,"li")(31,"code"),qx(32,"row"),og(),qx(33,": conte\xFAdo da linha corrente"),og()(),Cl(34,"p"),qx(35,"Modo de uso:"),og(),Cl(36,"pre")(37,"code"),qx(38,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),og()(),Cl(39,"blockquote")(40,"p"),qx(41,"No exemplo acima, o usu\xE1rio tem como retorno "),Cl(42,"code"),qx(43,"row"),og(),qx(44," e a "),Cl(45,"code"),qx(46,"column"),og(),qx(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),og()(),Cl(48,"p"),qx(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Cl(50,"pre")(51,"code"),qx(52,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),og()(),Cl(53,"blockquote")(54,"p"),qx(55,"Observa\xE7\xE3o: Sempre adicionar o "),Cl(56,"strong"),qx(57,"type"),og(),qx(58," da coluna que deseja manipular com a directiva como "),Cl(59,"code"),qx(60,"cellTemplate"),og()()()(),Cl(61,"div",6)(62,"h4",7),qx(63,"Seletor"),og(),Cl(64,"pre",8),qx(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),og()()());},dependencies:[Zr],encapsulation:2})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-table-cell-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,D],encapsulation:2})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(I),bL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,P]})}return n})();export{W as DocPoTableCellTemplateModule};