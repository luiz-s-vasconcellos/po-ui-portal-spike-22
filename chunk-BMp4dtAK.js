import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aH as Ga,T as Tl,z as tN,L as sg,a3 as aNe,b8 as Hme,b9 as Gme,a1 as ht,J as Gl,M as tw,F as Vp}from'./main-LUSFEIN7.js';var x=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-slide-content-template-doc"]],standalone:false,decls:47,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoSlideModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-slide"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoSlideContentTemplateDirective"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),sg(),Tl(18,"p"),tN(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Tl(20,"ul")(21,"li"),tN(22,"Item: "),Tl(23,"code"),tN(24,"item"),sg(),tN(25," determina o item do slide corrente."),sg(),Tl(26,"li"),tN(27,"\xCDndice: "),Tl(28,"code"),tN(29,"index"),sg(),tN(30," determina o \xEDndice do slide corrente."),sg()(),Tl(31,"p"),tN(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Tl(33,"em"),tN(34,"syntax sugar"),sg(),tN(35,". Veja a seguir ambos, respectivamente:"),sg(),Tl(36,"pre")(37,"code"),tN(38,`...
<po-slide
  [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

  <ng-template p-slide-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-slide>

...
`),sg()(),Tl(39,"pre")(40,"code"),tN(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),sg()()(),Tl(42,"div",6)(43,"h4",7),tN(44,"Seletor"),sg(),Tl(45,"pre",8),tN(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),sg()()());},dependencies:[Ga],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-slide-content-template-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[aNe,Hme,Gme,x],encapsulation:2})}return o})();var _=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(_),vL]})}return o})();var O=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,y]})}return o})();export{O as DocPoSlideContentTemplateModule};