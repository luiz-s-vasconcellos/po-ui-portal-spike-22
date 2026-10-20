import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var x=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoTableCellTemplateDirective`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),wg(),jc(15,`p`),iO(16,`Em seu uso, deve-se apenas adicionar a diretiva `),jc(17,`strong`),iO(18,`p-table-cell-template`),wg(),iO(19,` à tag `),jc(20,`code`),iO(21,`ng-template`),wg(),iO(22,`.`),wg(),jc(23,`p`),iO(24,`Retorno:`),wg(),jc(25,`ul`)(26,`li`)(27,`code`),iO(28,`column`),wg(),iO(29,`: conteúdo da coluna corrente.`),wg(),jc(30,`li`)(31,`code`),iO(32,`row`),wg(),iO(33,`: conteúdo da linha corrente`),wg()(),jc(34,`p`),iO(35,`Modo de uso:`),wg(),jc(36,`pre`)(37,`code`),iO(38,`...
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
`),wg()(),jc(39,`blockquote`)(40,`p`),iO(41,`No exemplo acima, o usuário tem como retorno `),jc(42,`code`),iO(43,`row`),wg(),iO(44,` e a `),jc(45,`code`),iO(46,`column`),wg(),iO(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),wg()(),jc(48,`p`),iO(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),wg(),jc(50,`pre`)(51,`code`),iO(52,`...
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
`),wg()(),jc(53,`blockquote`)(54,`p`),iO(55,`Observação: Sempre adicionar o `),jc(56,`strong`),iO(57,`type`),wg(),iO(58,` da coluna que deseja manipular com a directiva como `),jc(59,`code`),iO(60,`cellTemplate`),wg()()()(),jc(61,`div`,6)(62,`h4`,7),iO(63,`Seletor`),wg(),jc(64,`pre`,8),iO(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),wg()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var I=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-table-cell-template-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),wg()()()),a&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,x],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[C1.forChild(I),C1]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[Ta,P]})}return n})();export{W as DocPoTableCellTemplateModule};