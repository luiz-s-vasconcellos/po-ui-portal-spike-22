import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var T=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:69,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoComboOptionTemplateDirective`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),lg(),Ml(24,`blockquote`)(25,`p`),mN(26,`Quando utilizada em dispositivos `),Ml(27,`em`),mN(28,`mobile`),lg(),mN(29,` será exibido o componente nativo.`),lg()(),Ml(30,`p`),mN(31,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Ml(32,`code`),mN(33,`p-combo-option-template`),lg(),mN(34,` com `),Ml(35,`code`),mN(36,`ng-template`),lg(),mN(37,`
dentro da `),Ml(38,`em`),mN(39,`tag`),lg(),Ml(40,`code`),mN(41,`po-combo`),lg(),mN(42,`.`),lg(),Ml(43,`p`),mN(44,`Para obter a referência do item atual utilize `),Ml(45,`code`),mN(46,`let-option`),lg(),mN(47,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),lg(),Ml(48,`p`),mN(49,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Ml(50,`em`),mN(51,`syntax sugar`),lg(),mN(52,`. Veja a seguir ambos, respectivamente:`),lg(),Ml(53,`pre`)(54,`code`),mN(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),lg()(),Ml(56,`pre`)(57,`code`),mN(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),lg()(),Ml(59,`p`),mN(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),lg(),Ml(61,`pre`)(62,`code`),mN(63,`...
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
`),lg()()(),Ml(64,`div`,6)(65,`h4`,7),mN(66,`Seletor`),lg(),Ml(67,`pre`,8),mN(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),lg()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var O=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return p.changeTab(`doc`)}),ql(3,`sample-po-combo-option-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return p.changeTab(`web`)}),lg()()()),n&2&&(cw(`p-actions`,p.actions),Up(2),cw(`p-active`,p.activeTab===`doc`),Up(2),cw(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[V8e,SCe,ECe,T],encapsulation:2,changeDetection:1})}return i})()}];var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[NL.forChild(O),NL]})}return i})();var W=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,y]})}return i})();export{W as DocPoComboOptionTemplateModule};