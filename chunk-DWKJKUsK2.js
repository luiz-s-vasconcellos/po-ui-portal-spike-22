import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var x=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTableModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-table`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTableCellTemplateDirective`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),lg(),Ml(15,`p`),mN(16,`Em seu uso, deve-se apenas adicionar a diretiva `),Ml(17,`strong`),mN(18,`p-table-cell-template`),lg(),mN(19,` à tag `),Ml(20,`code`),mN(21,`ng-template`),lg(),mN(22,`.`),lg(),Ml(23,`p`),mN(24,`Retorno:`),lg(),Ml(25,`ul`)(26,`li`)(27,`code`),mN(28,`column`),lg(),mN(29,`: conteúdo da coluna corrente.`),lg(),Ml(30,`li`)(31,`code`),mN(32,`row`),lg(),mN(33,`: conteúdo da linha corrente`),lg()(),Ml(34,`p`),mN(35,`Modo de uso:`),lg(),Ml(36,`pre`)(37,`code`),mN(38,`...
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
`),lg()(),Ml(39,`blockquote`)(40,`p`),mN(41,`No exemplo acima, o usuário tem como retorno `),Ml(42,`code`),mN(43,`row`),lg(),mN(44,` e a `),Ml(45,`code`),mN(46,`column`),lg(),mN(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),lg()(),Ml(48,`p`),mN(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),lg(),Ml(50,`pre`)(51,`code`),mN(52,`...
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
`),lg()(),Ml(53,`blockquote`)(54,`p`),mN(55,`Observação: Sempre adicionar o `),Ml(56,`strong`),mN(57,`type`),lg(),mN(58,` da coluna que deseja manipular com a directiva como `),Ml(59,`code`),mN(60,`cellTemplate`),lg()()()(),Ml(61,`div`,6)(62,`h4`,7),mN(63,`Seletor`),lg(),Ml(64,`pre`,8),mN(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),lg()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var I=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-table-cell-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),lg()()()),a&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,x],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(I),NL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,P]})}return n})();export{W as DocPoTableCellTemplateModule};