import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,aH as Ga,T as Tl,C as iN,M as sg,a3 as lNe,b8 as Wme,b9 as jme,a1 as ht,L as Gl,O as nw,H as Vp}from'./main-56B5DD5U.js';var T=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-combo-option-template-doc"]],standalone:false,decls:69,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,p){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoComboOptionTemplateDirective"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"Esta diretiva permite personalizar o conte\xFAdo dos itens exibidos na lista de op\xE7\xF5es do componente."),sg(),Tl(24,"blockquote")(25,"p"),iN(26,"Quando utilizada em dispositivos "),Tl(27,"em"),iN(28,"mobile"),sg(),iN(29," ser\xE1 exibido o componente nativo."),sg()(),Tl(30,"p"),iN(31,"Para personalizar o conte\xFAdo de cada item da lista deve-se utilizar a diretiva "),Tl(32,"code"),iN(33,"p-combo-option-template"),sg(),iN(34," com "),Tl(35,"code"),iN(36,"ng-template"),sg(),iN(37,`
dentro da `),Tl(38,"em"),iN(39,"tag"),sg(),Tl(40,"code"),iN(41,"po-combo"),sg(),iN(42,"."),sg(),Tl(43,"p"),iN(44,"Para obter a refer\xEAncia do item atual utilize "),Tl(45,"code"),iN(46,"let-option"),sg(),iN(47,", com isso voc\xEA ter\xE1 acesso aos valores e poder\xE1 personalizar sua exibi\xE7\xE3o."),sg(),Tl(48,"p"),iN(49,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Tl(50,"em"),iN(51,"syntax sugar"),sg(),iN(52,". Veja a seguir ambos, respectivamente:"),sg(),Tl(53,"pre")(54,"code"),iN(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),sg()(),Tl(56,"pre")(57,"code"),iN(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),sg()(),Tl(59,"p"),iN(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),sg(),Tl(61,"pre")(62,"code"),iN(63,`...
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
`),sg()()(),Tl(64,"div",6)(65,"h4",7),iN(66,"Seletor"),sg(),Tl(67,"pre",8),iN(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),sg()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var P=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Combo Option Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,p){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return p.changeTab("doc")}),Gl(3,"sample-po-combo-option-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return p.changeTab("web")}),sg()()()),n&2&&(nw("p-actions",p.actions),Vp(2),nw("p-active",p.activeTab==="doc"),Vp(2),nw("p-hide",p.hidePoWebSample)("p-active",p.activeTab==="web"));},dependencies:[lNe,Wme,jme,T],encapsulation:2,changeDetection:1})}return i})();var O=[{path:"",component:P}],y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[DL.forChild(O),DL]})}return i})();var W=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,y]})}return i})();export{W as DocPoComboOptionTemplateModule};