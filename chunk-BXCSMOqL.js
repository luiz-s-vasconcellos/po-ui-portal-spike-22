import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Ni as he,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var x=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-slide`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoSlideContentTemplateDirective`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Esta diretiva permite a customização de um slide.`),lg(),Ml(18,`p`),mN(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),lg(),Ml(20,`ul`)(21,`li`),mN(22,`Item: `),Ml(23,`code`),mN(24,`item`),lg(),mN(25,` determina o item do slide corrente.`),lg(),Ml(26,`li`),mN(27,`Índice: `),Ml(28,`code`),mN(29,`index`),lg(),mN(30,` determina o índice do slide corrente.`),lg()(),Ml(31,`p`),mN(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Ml(33,`em`),mN(34,`syntax sugar`),lg(),mN(35,`. Veja a seguir ambos, respectivamente:`),lg(),Ml(36,`pre`)(37,`code`),mN(38,`...
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
`),lg()(),Ml(39,`pre`)(40,`code`),mN(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),lg()()(),Ml(42,`div`,6)(43,`h4`,7),mN(44,`Seletor`),lg(),Ml(45,`pre`,8),mN(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),lg()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var _=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-slide-content-template-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),lg()()()),n&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,x],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(_),NL]})}return o})();var O=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,y]})}return o})();export{O as DocPoSlideContentTemplateModule};