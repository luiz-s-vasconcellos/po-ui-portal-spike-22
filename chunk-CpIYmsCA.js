import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Jn as C1,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var x=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoSlideModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-slide`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoSlideContentTemplateDirective`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`Esta diretiva permite a customização de um slide.`),wg(),jc(18,`p`),iO(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),wg(),jc(20,`ul`)(21,`li`),iO(22,`Item: `),jc(23,`code`),iO(24,`item`),wg(),iO(25,` determina o item do slide corrente.`),wg(),jc(26,`li`),iO(27,`Índice: `),jc(28,`code`),iO(29,`index`),wg(),iO(30,` determina o índice do slide corrente.`),wg()(),jc(31,`p`),iO(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),jc(33,`em`),iO(34,`syntax sugar`),wg(),iO(35,`. Veja a seguir ambos, respectivamente:`),wg(),jc(36,`pre`)(37,`code`),iO(38,`...
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
`),wg()(),jc(39,`pre`)(40,`code`),iO(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),wg()()(),jc(42,`div`,6)(43,`h4`,7),iO(44,`Seletor`),wg(),jc(45,`pre`,8),iO(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),wg()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var _=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:4,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,l){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-slide-content-template-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),wg()()()),n&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,x],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(_),C1]})}return o})();var O=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,y]})}return o})();export{O as DocPoSlideContentTemplateModule};