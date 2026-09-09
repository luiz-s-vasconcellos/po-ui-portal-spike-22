import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var x=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-table`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoTableCellTemplateDirective`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ag(),Tl(15,`p`),cN(16,`Em seu uso, deve-se apenas adicionar a diretiva `),Tl(17,`strong`),cN(18,`p-table-cell-template`),ag(),cN(19,` à tag `),Tl(20,`code`),cN(21,`ng-template`),ag(),cN(22,`.`),ag(),Tl(23,`p`),cN(24,`Retorno:`),ag(),Tl(25,`ul`)(26,`li`)(27,`code`),cN(28,`column`),ag(),cN(29,`: conteúdo da coluna corrente.`),ag(),Tl(30,`li`)(31,`code`),cN(32,`row`),ag(),cN(33,`: conteúdo da linha corrente`),ag()(),Tl(34,`p`),cN(35,`Modo de uso:`),ag(),Tl(36,`pre`)(37,`code`),cN(38,`...
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
`),ag()(),Tl(39,`blockquote`)(40,`p`),cN(41,`No exemplo acima, o usuário tem como retorno `),Tl(42,`code`),cN(43,`row`),ag(),cN(44,` e a `),Tl(45,`code`),cN(46,`column`),ag(),cN(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),ag()(),Tl(48,`p`),cN(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),ag(),Tl(50,`pre`)(51,`code`),cN(52,`...
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
`),ag()(),Tl(53,`blockquote`)(54,`p`),cN(55,`Observação: Sempre adicionar o `),Tl(56,`strong`),cN(57,`type`),ag(),cN(58,` da coluna que deseja manipular com a directiva como `),Tl(59,`code`),cN(60,`cellTemplate`),ag()()()(),Tl(61,`div`,6)(62,`h4`,7),cN(63,`Seletor`),ag(),Tl(64,`pre`,8),cN(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),ag()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var I=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-table-cell-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ag()()()),a&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,x],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(I),bL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableCellTemplateModule};