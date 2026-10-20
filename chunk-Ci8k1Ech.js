import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var T=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:69,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoComboOptionTemplateDirective`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),wg(),jc(24,`blockquote`)(25,`p`),iO(26,`Quando utilizada em dispositivos `),jc(27,`em`),iO(28,`mobile`),wg(),iO(29,` será exibido o componente nativo.`),wg()(),jc(30,`p`),iO(31,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),jc(32,`code`),iO(33,`p-combo-option-template`),wg(),iO(34,` com `),jc(35,`code`),iO(36,`ng-template`),wg(),iO(37,`
dentro da `),jc(38,`em`),iO(39,`tag`),wg(),jc(40,`code`),iO(41,`po-combo`),wg(),iO(42,`.`),wg(),jc(43,`p`),iO(44,`Para obter a referência do item atual utilize `),jc(45,`code`),iO(46,`let-option`),wg(),iO(47,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),wg(),jc(48,`p`),iO(49,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),jc(50,`em`),iO(51,`syntax sugar`),wg(),iO(52,`. Veja a seguir ambos, respectivamente:`),wg(),jc(53,`pre`)(54,`code`),iO(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),wg()(),jc(56,`pre`)(57,`code`),iO(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),wg()(),jc(59,`p`),iO(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),wg(),jc(61,`pre`)(62,`code`),iO(63,`...
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
`),wg()()(),jc(64,`div`,6)(65,`h4`,7),iO(66,`Seletor`),wg(),jc(67,`pre`,8),iO(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),wg()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var O=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return p.changeTab(`doc`)}),nu(3,`sample-po-combo-option-template-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return p.changeTab(`web`)}),wg()()()),n&2&&(jE(`p-actions`,p.actions),rg(2),jE(`p-active`,p.activeTab===`doc`),rg(2),jE(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[Kze,bae,Sae,T],encapsulation:2,changeDetection:1})}return i})()}];var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[C1.forChild(O),C1]})}return i})();var W=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[Ta,y]})}return i})();export{W as DocPoComboOptionTemplateModule};