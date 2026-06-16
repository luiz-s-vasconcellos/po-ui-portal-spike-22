import {f as fe,u as ue,a as u5,v as vL,C as C$1,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-accordion-item-doc"]],standalone:false,decls:227,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(n,m){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-accordion"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-accordion"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),ng()(),wl(19,"p"),Ux(20,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(21,"pre")(22,"code"),Ux(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(24,"p"),Ux(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(26,"pre")(27,"code"),Ux(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoAccordionItemComponent"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,"Componente utilizado para renderizar os itens do "),wl(37,"code"),Ux(38,"po-accordion"),ng(),Ux(39,"."),ng(),wl(40,"p"),Ux(41,"O componente "),wl(42,"code"),Ux(43,"po-accordion"),ng(),Ux(44,` j\xE1 faz o controle de abertura e fechamento dos itens automaticamente,
mas caso houver a necessidade de abrir algum dos `),wl(45,"code"),Ux(46,"po-accordion-item"),ng(),Ux(47," via Typescript, pode ser feita da seguinte forma:"),ng(),wl(48,"pre")(49,"code"),Ux(50,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1" #item1>
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),ng()(),wl(51,"p"),Ux(52,"e no typescript pode-se utilizar o "),wl(53,"code"),Ux(54,"@ViewChild"),ng(),Ux(55,":"),ng(),wl(56,"pre")(57,"code"),Ux(58,`@ViewChild(PoAccordionItemComponent, { static: true }) item1: PoAccordionItemComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapse()
  this.item1.expand();
}
`),ng()()(),wl(59,"div",6)(60,"h4",7),Ux(61,"Seletor"),ng(),wl(62,"pre",8),Ux(63,`<po-accordion-item
    (p-collapse)="EventEmitter"
    p-disabled="boolean"
    (p-expand)="EventEmitter"
    p-label="string"
    p-label-tag="string"
    p-type-tag="PoTagType" >
</po-accordion-item>
`),ng()(),wl(64,"h4",9),Ux(65,"Propriedades"),ng(),wl(66,"table",10)(67,"tr",11)(68,"th",12),Ux(69,"Nome"),ng(),wl(70,"th",12),Ux(71,"Tipo"),ng(),wl(72,"th",12),Ux(73,"Padr\xE3o"),ng(),wl(74,"th",12),Ux(75,"Descri\xE7\xE3o"),ng()(),wl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Ux(80," (p-collapse)"),Ul(81,"br"),ng()()(),wl(82,"td",17)(83,"code",18),Ux(84,"EventEmitter"),ng()(),wl(85,"td",19),Ux(86,"-"),ng(),wl(87,"td",20)(88,"p"),Ux(89,"Evento disparado ao retrair o item, seja manualmente ou programaticamente."),ng()()(),wl(90,"tr",13)(91,"td",14)(92,"div",21)(93,"span",22),Ux(94," p-disabled"),Ul(95,"br"),ng()()(),wl(96,"td",17)(97,"code",23),Ux(98,"boolean"),ng()(),wl(99,"td",19)(100,"p")(101,"code"),Ux(102,"false"),ng()()(),wl(103,"td",20)(104,"em")(105,"strong"),Ux(106,"(opcional)"),ng()(),wl(107,"p"),Ux(108,"Desabilita item."),ng()()(),wl(109,"tr",13)(110,"td",14)(111,"div",15)(112,"span",16),Ux(113," (p-expand)"),Ul(114,"br"),ng()()(),wl(115,"td",17)(116,"code",18),Ux(117,"EventEmitter"),ng()(),wl(118,"td",19),Ux(119,"-"),ng(),wl(120,"td",20)(121,"p"),Ux(122,"Evento disparado ao expandir o item, seja manualmente ou programaticamente."),ng()()(),wl(123,"tr",13)(124,"td",14)(125,"div",21)(126,"span",22),Ux(127," p-label"),Ul(128,"br"),ng()()(),wl(129,"td",17)(130,"code",24),Ux(131,"string"),ng()(),wl(132,"td",19),Ux(133,"-"),ng(),wl(134,"td",20)(135,"p"),Ux(136,"T\xEDtulo do item."),ng()()(),wl(137,"tr",13)(138,"td",14)(139,"div",21)(140,"span",22),Ux(141," p-label-tag"),Ul(142,"br"),ng()()(),wl(143,"td",17)(144,"code",24),Ux(145,"string"),ng()(),wl(146,"td",19),Ux(147,"-"),ng(),wl(148,"td",20)(149,"em")(150,"strong"),Ux(151,"(opcional)"),ng()(),wl(152,"p"),Ux(153,"Label da Tag."),ng()()(),wl(154,"tr",13)(155,"td",14)(156,"div",21)(157,"span",22),Ux(158," p-type-tag"),Ul(159,"br"),ng()()(),wl(160,"td",17)(161,"code",25),Ux(162,"PoTagType"),ng()(),wl(163,"td",19)(164,"p")(165,"code"),Ux(166,"info"),ng()()(),wl(167,"td",20)(168,"em")(169,"strong"),Ux(170,"(opcional)"),ng()(),wl(171,"p"),Ux(172,"Define o tipo da "),wl(173,"em"),Ux(174,"tag"),ng(),Ux(175," caso ela esteja sendo exibida."),ng(),wl(176,"p"),Ux(177,"Valores v\xE1lidos:"),ng(),wl(178,"ul")(179,"li")(180,"code"),Ux(181,"success"),ng(),Ux(182,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),ng(),wl(183,"li")(184,"code"),Ux(185,"warning"),ng(),Ux(186,": cor amarela que representa aviso ou advert\xEAncia."),ng(),wl(187,"li")(188,"code"),Ux(189,"danger"),ng(),Ux(190,": cor vermelha para erro ou aviso cr\xEDtico."),ng(),wl(191,"li")(192,"code"),Ux(193,"info"),ng(),Ux(194,": cor cinza escuro que caracteriza conte\xFAdo informativo."),ng()()()()(),wl(195,"h3",9),Ux(196,"M\xE9todos"),ng(),wl(197,"table",26)(198,"tr",13)(199,"th",27)(200,"div",21)(201,"h4")(202,"span",22),Ux(203," collapse "),ng()()()()(),wl(204,"tr",20)(205,"td",20)(206,"p"),Ux(207,"M\xE9todo para colapsar o "),wl(208,"code"),Ux(209,"po-accordion-item"),ng(),Ux(210,"."),ng()()()(),Ul(211,"br"),wl(212,"table",26)(213,"tr",13)(214,"th",27)(215,"div",21)(216,"h4")(217,"span",22),Ux(218," expand "),ng()()()()(),wl(219,"tr",20)(220,"td",20)(221,"p"),Ux(222,"M\xE9todo para expandir o "),wl(223,"code"),Ux(224,"po-accordion-item"),ng(),Ux(225,"."),ng()()()(),Ul(226,"br"),ng());},dependencies:[fP],encapsulation:2})}return o})();var C=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C$1(Xn),C$1(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Accordion Item",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,m){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return m.changeTab("doc")}),Ul(3,"sample-po-accordion-item-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return m.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",m.actions),Pp(2),YE("p-active",m.activeTab==="doc"),Pp(2),YE("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[D3,Vd,Rd,y],encapsulation:2})}return o})();var T=[{path:"",component:C}],D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(T),vL]})}return o})();var G=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,D]})}return o})();export{G as DocPoAccordionItemModule};