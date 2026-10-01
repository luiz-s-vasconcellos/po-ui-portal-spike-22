import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-VW33P2VM.js";var T=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:69,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoComboOptionTemplateDirective`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),ug(),Ac(24,`blockquote`)(25,`p`),vN(26,`Quando utilizada em dispositivos `),Ac(27,`em`),vN(28,`mobile`),ug(),vN(29,` será exibido o componente nativo.`),ug()(),Ac(30,`p`),vN(31,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Ac(32,`code`),vN(33,`p-combo-option-template`),ug(),vN(34,` com `),Ac(35,`code`),vN(36,`ng-template`),ug(),vN(37,`
dentro da `),Ac(38,`em`),vN(39,`tag`),ug(),Ac(40,`code`),vN(41,`po-combo`),ug(),vN(42,`.`),ug(),Ac(43,`p`),vN(44,`Para obter a referência do item atual utilize `),Ac(45,`code`),vN(46,`let-option`),ug(),vN(47,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),ug(),Ac(48,`p`),vN(49,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Ac(50,`em`),vN(51,`syntax sugar`),ug(),vN(52,`. Veja a seguir ambos, respectivamente:`),ug(),Ac(53,`pre`)(54,`code`),vN(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),ug()(),Ac(56,`pre`)(57,`code`),vN(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),ug()(),Ac(59,`p`),vN(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),ug(),Ac(61,`pre`)(62,`code`),vN(63,`...
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
`),ug()()(),Ac(64,`div`,6)(65,`h4`,7),vN(66,`Seletor`),ug(),Ac(67,`pre`,8),vN(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),ug()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var O=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,p){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return p.changeTab(`doc`)}),Kc(3,`sample-po-combo-option-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return p.changeTab(`web`)}),ug()()()),n&2&&(cE(`p-actions`,p.actions),Hp(2),cE(`p-active`,p.activeTab===`doc`),Hp(2),cE(`p-hide`,p.hidePoWebSample)(`p-active`,p.activeTab===`web`))},dependencies:[vze,tae,aae,T],encapsulation:2,changeDetection:1})}return i})()}];var y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[kL.forChild(O),kL]})}return i})();var W=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[Ta,y]})}return i})();export{W as DocPoComboOptionTemplateModule};