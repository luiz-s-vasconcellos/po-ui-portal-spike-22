import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,a3 as D3,aS as Vd,aT as Rd,a1 as ut,N as Ul,S as YE,P as Pp}from'./main-6SPFG3VI.js';var D=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTableModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-table"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoTableCellTemplateDirective"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ng(),wl(15,"p"),Ux(16,"Em seu uso, deve-se apenas adicionar a diretiva "),wl(17,"strong"),Ux(18,"p-table-cell-template"),ng(),Ux(19," \xE0 tag "),wl(20,"code"),Ux(21,"ng-template"),ng(),Ux(22,"."),ng(),wl(23,"p"),Ux(24,"Retorno:"),ng(),wl(25,"ul")(26,"li")(27,"code"),Ux(28,"column"),ng(),Ux(29,": conte\xFAdo da coluna corrente."),ng(),wl(30,"li")(31,"code"),Ux(32,"row"),ng(),Ux(33,": conte\xFAdo da linha corrente"),ng()(),wl(34,"p"),Ux(35,"Modo de uso:"),ng(),wl(36,"pre")(37,"code"),Ux(38,`...
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
`),ng()(),wl(39,"blockquote")(40,"p"),Ux(41,"No exemplo acima, o usu\xE1rio tem como retorno "),wl(42,"code"),Ux(43,"row"),ng(),Ux(44," e a "),wl(45,"code"),Ux(46,"column"),ng(),Ux(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),ng()(),wl(48,"p"),Ux(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),ng(),wl(50,"pre")(51,"code"),Ux(52,`...
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
`),ng()(),wl(53,"blockquote")(54,"p"),Ux(55,"Observa\xE7\xE3o: Sempre adicionar o "),wl(56,"strong"),Ux(57,"type"),ng(),Ux(58," da coluna que deseja manipular com a directiva como "),wl(59,"code"),Ux(60,"cellTemplate"),ng()()()(),wl(61,"div",6)(62,"h4",7),Ux(63,"Seletor"),ng(),wl(64,"pre",8),Ux(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),ng()()());},dependencies:[fP],encapsulation:2})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-table-cell-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),ng()()()),a&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,D],encapsulation:2})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(I),vL]})}return n})();var Z=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,P]})}return n})();export{Z as DocPoTableCellTemplateModule};