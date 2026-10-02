import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-TFA52GHY.js";var x=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-table`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTableCellTemplateDirective`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),ug(),Ac(15,`p`),vN(16,`Em seu uso, deve-se apenas adicionar a diretiva `),Ac(17,`strong`),vN(18,`p-table-cell-template`),ug(),vN(19,` à tag `),Ac(20,`code`),vN(21,`ng-template`),ug(),vN(22,`.`),ug(),Ac(23,`p`),vN(24,`Retorno:`),ug(),Ac(25,`ul`)(26,`li`)(27,`code`),vN(28,`column`),ug(),vN(29,`: conteúdo da coluna corrente.`),ug(),Ac(30,`li`)(31,`code`),vN(32,`row`),ug(),vN(33,`: conteúdo da linha corrente`),ug()(),Ac(34,`p`),vN(35,`Modo de uso:`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`...
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
`),ug()(),Ac(39,`blockquote`)(40,`p`),vN(41,`No exemplo acima, o usuário tem como retorno `),Ac(42,`code`),vN(43,`row`),ug(),vN(44,` e a `),Ac(45,`code`),vN(46,`column`),ug(),vN(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),ug()(),Ac(48,`p`),vN(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),ug(),Ac(50,`pre`)(51,`code`),vN(52,`...
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
`),ug()(),Ac(53,`blockquote`)(54,`p`),vN(55,`Observação: Sempre adicionar o `),Ac(56,`strong`),vN(57,`type`),ug(),vN(58,` da coluna que deseja manipular com a directiva como `),Ac(59,`code`),vN(60,`cellTemplate`),ug()()()(),Ac(61,`div`,6)(62,`h4`,7),vN(63,`Seletor`),ug(),Ac(64,`pre`,8),vN(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),ug()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var I=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,l){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-table-cell-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),ug()()()),a&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,x],encapsulation:2,changeDetection:1})}return n})()}];var P=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(I),kL]})}return n})();var W=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,P]})}return n})();export{W as DocPoTableCellTemplateModule};