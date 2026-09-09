import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Li as ht,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var x=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-slide`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoSlideContentTemplateDirective`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Esta diretiva permite a customização de um slide.`),ag(),Tl(18,`p`),cN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ag(),Tl(20,`ul`)(21,`li`),cN(22,`Item: `),Tl(23,`code`),cN(24,`item`),ag(),cN(25,` determina o item do slide corrente.`),ag(),Tl(26,`li`),cN(27,`Índice: `),Tl(28,`code`),cN(29,`index`),ag(),cN(30,` determina o índice do slide corrente.`),ag()(),Tl(31,`p`),cN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Tl(33,`em`),cN(34,`syntax sugar`),ag(),cN(35,`. Veja a seguir ambos, respectivamente:`),ag(),Tl(36,`pre`)(37,`code`),cN(38,`...
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
`),ag()(),Tl(39,`pre`)(40,`code`),cN(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),ag()()(),Tl(42,`div`,6)(43,`h4`,7),cN(44,`Seletor`),ag(),Tl(45,`pre`,8),cN(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),ag()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var _=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-slide-content-template-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ag()()()),n&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,x],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(_),bL]})}return o})();var O=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,y]})}return o})();export{O as DocPoSlideContentTemplateModule};