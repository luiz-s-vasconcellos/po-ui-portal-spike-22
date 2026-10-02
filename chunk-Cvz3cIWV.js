import{Di as he,Dt as aae,Li as kL,Qi as pt,Rr as Qn,Sr as Kc,Tn as vze,Un as Ac,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-TFA52GHY.js";var x=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-slide`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoSlideContentTemplateDirective`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Esta diretiva permite a customização de um slide.`),ug(),Ac(18,`p`),vN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),ug(),Ac(20,`ul`)(21,`li`),vN(22,`Item: `),Ac(23,`code`),vN(24,`item`),ug(),vN(25,` determina o item do slide corrente.`),ug(),Ac(26,`li`),vN(27,`Índice: `),Ac(28,`code`),vN(29,`index`),ug(),vN(30,` determina o índice do slide corrente.`),ug()(),Ac(31,`p`),vN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ac(33,`em`),vN(34,`syntax sugar`),ug(),vN(35,`. Veja a seguir ambos, respectivamente:`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`...
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
`),ug()(),Ac(39,`pre`)(40,`code`),vN(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),ug()()(),Ac(42,`div`,6)(43,`h4`,7),vN(44,`Seletor`),ug(),Ac(45,`pre`,8),vN(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),ug()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var _=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-slide-content-template-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),ug()()()),n&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,x],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(_),kL]})}return o})();var O=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,y]})}return o})();export{O as DocPoSlideContentTemplateModule};