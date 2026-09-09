import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var T=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:69,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoComboOptionTemplateDirective`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),ag(),Tl(24,`blockquote`)(25,`p`),cN(26,`Quando utilizada em dispositivos `),Tl(27,`em`),cN(28,`mobile`),ag(),cN(29,` será exibido o componente nativo.`),ag()(),Tl(30,`p`),cN(31,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Tl(32,`code`),cN(33,`p-combo-option-template`),ag(),cN(34,` com `),Tl(35,`code`),cN(36,`ng-template`),ag(),cN(37,`
dentro da `),Tl(38,`em`),cN(39,`tag`),ag(),Tl(40,`code`),cN(41,`po-combo`),ag(),cN(42,`.`),ag(),Tl(43,`p`),cN(44,`Para obter a referência do item atual utilize `),Tl(45,`code`),cN(46,`let-option`),ag(),cN(47,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),ag(),Tl(48,`p`),cN(49,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Tl(50,`em`),cN(51,`syntax sugar`),ag(),cN(52,`. Veja a seguir ambos, respectivamente:`),ag(),Tl(53,`pre`)(54,`code`),cN(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),ag()(),Tl(56,`pre`)(57,`code`),cN(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),ag()(),Tl(59,`p`),cN(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),ag(),Tl(61,`pre`)(62,`code`),cN(63,`...
<ng-template p-combo-option-template let-option>
  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
  <ng-template #optionsGroupTitle>
    <p class="po-combo-item-title" [innerHtml]="option.label"></p>
  </ng-template>
  <ng-template #optionsGroupList>
    <div class="po-combo-item">
      <div class="po-row">
        <po-avatar class="po-md-1" p-size="sm"></po-avatar>
        <div class="po-md-11" [innerHtml]="option.label"></div>
      </div>
    </div>
  </ng-template>
</ng-template>
...
`),ag()()(),Tl(64,`div`,6)(65,`h4`,7),cN(66,`Seletor`),ag(),Tl(67,`pre`,8),cN(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),ag()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var O=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return p.changeTab(`doc`)}),Gl(3,`sample-po-combo-option-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return p.changeTab(`web`)}),ag()()()),n&2&&(nw(`p-actions`,p.actions),jp(2),nw(`p-active`,p.activeTab===`doc`),jp(2),nw(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,T],encapsulation:2,changeDetection:1})}return i})()}];var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[bL.forChild(O),bL]})}return i})();var W=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,y]})}return i})();export{W as DocPoComboOptionTemplateModule};