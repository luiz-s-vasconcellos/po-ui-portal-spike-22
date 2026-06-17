import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aH as Ga,H as Sl,J as Jx,O as sg,a3 as pNe,b8 as Gme,b9 as Qme,a1 as ht,M as Wl,T as tw,z as Vp}from'./main-BY5NURRA.js';var x=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-slide-content-template-doc"]],standalone:false,decls:47,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoSlideModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-slide"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoSlideContentTemplateDirective"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),sg(),Sl(18,"p"),Jx(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),sg(),Sl(20,"ul")(21,"li"),Jx(22,"Item: "),Sl(23,"code"),Jx(24,"item"),sg(),Jx(25," determina o item do slide corrente."),sg(),Sl(26,"li"),Jx(27,"\xCDndice: "),Sl(28,"code"),Jx(29,"index"),sg(),Jx(30," determina o \xEDndice do slide corrente."),sg()(),Sl(31,"p"),Jx(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(33,"em"),Jx(34,"syntax sugar"),sg(),Jx(35,". Veja a seguir ambos, respectivamente:"),sg(),Sl(36,"pre")(37,"code"),Jx(38,`...
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
`),sg()(),Sl(39,"pre")(40,"code"),Jx(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),sg()()(),Sl(42,"div",6)(43,"h4",7),Jx(44,"Seletor"),sg(),Sl(45,"pre",8),Jx(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),sg()()());},dependencies:[Ga],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-slide-content-template-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),sg()()()),n&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,x],encapsulation:2})}return o})();var _=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[pL.forChild(_),pL]})}return o})();var O=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,y]})}return o})();export{O as DocPoSlideContentTemplateModule};