import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,M as Wl,T as tw,z as Vp}from'./main-UTR4MKMU.js';var D=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-table"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoTableCellTemplateDirective"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),sg(),Sl(15,"p"),Jx(16,"Em seu uso, deve-se apenas adicionar a diretiva "),Sl(17,"strong"),Jx(18,"p-table-cell-template"),sg(),Jx(19," \xE0 tag "),Sl(20,"code"),Jx(21,"ng-template"),sg(),Jx(22,"."),sg(),Sl(23,"p"),Jx(24,"Retorno:"),sg(),Sl(25,"ul")(26,"li")(27,"code"),Jx(28,"column"),sg(),Jx(29,": conte\xFAdo da coluna corrente."),sg(),Sl(30,"li")(31,"code"),Jx(32,"row"),sg(),Jx(33,": conte\xFAdo da linha corrente"),sg()(),Sl(34,"p"),Jx(35,"Modo de uso:"),sg(),Sl(36,"pre")(37,"code"),Jx(38,`...
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
`),sg()(),Sl(39,"blockquote")(40,"p"),Jx(41,"No exemplo acima, o usu\xE1rio tem como retorno "),Sl(42,"code"),Jx(43,"row"),sg(),Jx(44," e a "),Sl(45,"code"),Jx(46,"column"),sg(),Jx(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),sg()(),Sl(48,"p"),Jx(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),sg(),Sl(50,"pre")(51,"code"),Jx(52,`...
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
`),sg()(),Sl(53,"blockquote")(54,"p"),Jx(55,"Observa\xE7\xE3o: Sempre adicionar o "),Sl(56,"strong"),Jx(57,"type"),sg(),Jx(58," da coluna que deseja manipular com a directiva como "),Sl(59,"code"),Jx(60,"cellTemplate"),sg()()()(),Sl(61,"div",6)(62,"h4",7),Jx(63,"Seletor"),sg(),Sl(64,"pre",8),Jx(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),sg()()());},dependencies:[Ga],encapsulation:2})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-table-cell-template-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),a&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,D],encapsulation:2})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(I),pL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableCellTemplateModule};