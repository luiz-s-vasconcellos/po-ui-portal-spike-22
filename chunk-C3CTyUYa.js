import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,R as Hl,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var P=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-combo-option-template-doc"]],standalone:false,decls:69,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,p){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoComboOptionTemplateDirective"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"Esta diretiva permite personalizar o conte\xFAdo dos itens exibidos na lista de op\xE7\xF5es do componente."),og(),Cl(24,"blockquote")(25,"p"),qx(26,"Quando utilizada em dispositivos "),Cl(27,"em"),qx(28,"mobile"),og(),qx(29," ser\xE1 exibido o componente nativo."),og()(),Cl(30,"p"),qx(31,"Para personalizar o conte\xFAdo de cada item da lista deve-se utilizar a diretiva "),Cl(32,"code"),qx(33,"p-combo-option-template"),og(),qx(34," com "),Cl(35,"code"),qx(36,"ng-template"),og(),qx(37,`
dentro da `),Cl(38,"em"),qx(39,"tag"),og(),Cl(40,"code"),qx(41,"po-combo"),og(),qx(42,"."),og(),Cl(43,"p"),qx(44,"Para obter a refer\xEAncia do item atual utilize "),Cl(45,"code"),qx(46,"let-option"),og(),qx(47,", com isso voc\xEA ter\xE1 acesso aos valores e poder\xE1 personalizar sua exibi\xE7\xE3o."),og(),Cl(48,"p"),qx(49,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Cl(50,"em"),qx(51,"syntax sugar"),og(),qx(52,". Veja a seguir ambos, respectivamente:"),og(),Cl(53,"pre")(54,"code"),qx(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),og()(),Cl(56,"pre")(57,"code"),qx(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),og()(),Cl(59,"p"),qx(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),og(),Cl(61,"pre")(62,"code"),qx(63,`...
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
`),og()()(),Cl(64,"div",6)(65,"h4",7),qx(66,"Seletor"),og(),Cl(67,"pre",8),qx(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),og()()());},dependencies:[Zr],encapsulation:2})}return i})();var D=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Combo Option Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,p){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return p.changeTab("doc")}),Hl(3,"sample-po-combo-option-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return p.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",p.actions),Lp(2),ZE("p-active",p.activeTab==="doc"),Lp(2),ZE("p-hide",p.hidePoWebSample)("p-active",p.activeTab==="web"));},dependencies:[SNe,ofe,lfe,P],encapsulation:2})}return i})();var O=[{path:"",component:D}],M=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[bL.forChild(O),bL]})}return i})();var W=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ca,M]})}return i})();export{W as DocPoComboOptionTemplateModule};