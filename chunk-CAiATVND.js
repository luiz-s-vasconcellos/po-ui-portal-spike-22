import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aH as Ka,T as Tl,C as iN,M as sg,a3 as sNe,b8 as Ume,b9 as $me,a1 as ht,L as Gl,O as nw,H as Vp}from'./main-JFQ6NFFH.js';var x=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-table"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoTableCellTemplateDirective"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),sg(),Tl(15,"p"),iN(16,"Em seu uso, deve-se apenas adicionar a diretiva "),Tl(17,"strong"),iN(18,"p-table-cell-template"),sg(),iN(19," \xE0 tag "),Tl(20,"code"),iN(21,"ng-template"),sg(),iN(22,"."),sg(),Tl(23,"p"),iN(24,"Retorno:"),sg(),Tl(25,"ul")(26,"li")(27,"code"),iN(28,"column"),sg(),iN(29,": conte\xFAdo da coluna corrente."),sg(),Tl(30,"li")(31,"code"),iN(32,"row"),sg(),iN(33,": conte\xFAdo da linha corrente"),sg()(),Tl(34,"p"),iN(35,"Modo de uso:"),sg(),Tl(36,"pre")(37,"code"),iN(38,`...
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
`),sg()(),Tl(39,"blockquote")(40,"p"),iN(41,"No exemplo acima, o usu\xE1rio tem como retorno "),Tl(42,"code"),iN(43,"row"),sg(),iN(44," e a "),Tl(45,"code"),iN(46,"column"),sg(),iN(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),sg()(),Tl(48,"p"),iN(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),sg(),Tl(50,"pre")(51,"code"),iN(52,`...
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
`),sg()(),Tl(53,"blockquote")(54,"p"),iN(55,"Observa\xE7\xE3o: Sempre adicionar o "),Tl(56,"strong"),iN(57,"type"),sg(),iN(58," da coluna que deseja manipular com a directiva como "),Tl(59,"code"),iN(60,"cellTemplate"),sg()()()(),Tl(61,"div",6)(62,"h4",7),iN(63,"Seletor"),sg(),Tl(64,"pre",8),iN(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),sg()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-table-cell-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),a&2&&(nw("p-actions",l.actions),Vp(2),nw("p-active",l.activeTab==="doc"),Vp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,x],encapsulation:2,changeDetection:1})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[DL.forChild(I),DL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoTableCellTemplateModule};