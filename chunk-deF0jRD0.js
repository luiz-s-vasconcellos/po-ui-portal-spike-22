import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-accordion-item-doc"]],standalone:false,decls:227,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(n,m){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-accordion"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-accordion"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),og()(),Cl(19,"p"),qx(20,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(21,"pre")(22,"code"),qx(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),og()(),Cl(24,"p"),qx(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(26,"pre")(27,"code"),qx(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoAccordionItemComponent"),og()(),Cl(34,"div",2)(35,"p"),qx(36,"Componente utilizado para renderizar os itens do "),Cl(37,"code"),qx(38,"po-accordion"),og(),qx(39,"."),og(),Cl(40,"p"),qx(41,"O componente "),Cl(42,"code"),qx(43,"po-accordion"),og(),qx(44,` j\xE1 faz o controle de abertura e fechamento dos itens automaticamente,
mas caso houver a necessidade de abrir algum dos `),Cl(45,"code"),qx(46,"po-accordion-item"),og(),qx(47," via Typescript, pode ser feita da seguinte forma:"),og(),Cl(48,"pre")(49,"code"),qx(50,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1" #item1>
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),og()(),Cl(51,"p"),qx(52,"e no typescript pode-se utilizar o "),Cl(53,"code"),qx(54,"@ViewChild"),og(),qx(55,":"),og(),Cl(56,"pre")(57,"code"),qx(58,`@ViewChild(PoAccordionItemComponent, { static: true }) item1: PoAccordionItemComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapse()
  this.item1.expand();
}
`),og()()(),Cl(59,"div",6)(60,"h4",7),qx(61,"Seletor"),og(),Cl(62,"pre",8),qx(63,`<po-accordion-item
    (p-collapse)="EventEmitter"
    p-disabled="boolean"
    (p-expand)="EventEmitter"
    p-label="string"
    p-label-tag="string"
    p-type-tag="PoTagType" >
</po-accordion-item>
`),og()(),Cl(64,"h4",9),qx(65,"Propriedades"),og(),Cl(66,"table",10)(67,"tr",11)(68,"th",12),qx(69,"Nome"),og(),Cl(70,"th",12),qx(71,"Tipo"),og(),Cl(72,"th",12),qx(73,"Padr\xE3o"),og(),Cl(74,"th",12),qx(75,"Descri\xE7\xE3o"),og()(),Cl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),qx(80," (p-collapse)"),Hl(81,"br"),og()()(),Cl(82,"td",17)(83,"code",18),qx(84,"EventEmitter"),og()(),Cl(85,"td",19),qx(86,"-"),og(),Cl(87,"td",20)(88,"p"),qx(89,"Evento disparado ao retrair o item, seja manualmente ou programaticamente."),og()()(),Cl(90,"tr",13)(91,"td",14)(92,"div",21)(93,"span",22),qx(94," p-disabled"),Hl(95,"br"),og()()(),Cl(96,"td",17)(97,"code",23),qx(98,"boolean"),og()(),Cl(99,"td",19)(100,"p")(101,"code"),qx(102,"false"),og()()(),Cl(103,"td",20)(104,"em")(105,"strong"),qx(106,"(opcional)"),og()(),Cl(107,"p"),qx(108,"Desabilita item."),og()()(),Cl(109,"tr",13)(110,"td",14)(111,"div",15)(112,"span",16),qx(113," (p-expand)"),Hl(114,"br"),og()()(),Cl(115,"td",17)(116,"code",18),qx(117,"EventEmitter"),og()(),Cl(118,"td",19),qx(119,"-"),og(),Cl(120,"td",20)(121,"p"),qx(122,"Evento disparado ao expandir o item, seja manualmente ou programaticamente."),og()()(),Cl(123,"tr",13)(124,"td",14)(125,"div",21)(126,"span",22),qx(127," p-label"),Hl(128,"br"),og()()(),Cl(129,"td",17)(130,"code",24),qx(131,"string"),og()(),Cl(132,"td",19),qx(133,"-"),og(),Cl(134,"td",20)(135,"p"),qx(136,"T\xEDtulo do item."),og()()(),Cl(137,"tr",13)(138,"td",14)(139,"div",21)(140,"span",22),qx(141," p-label-tag"),Hl(142,"br"),og()()(),Cl(143,"td",17)(144,"code",24),qx(145,"string"),og()(),Cl(146,"td",19),qx(147,"-"),og(),Cl(148,"td",20)(149,"em")(150,"strong"),qx(151,"(opcional)"),og()(),Cl(152,"p"),qx(153,"Label da Tag."),og()()(),Cl(154,"tr",13)(155,"td",14)(156,"div",21)(157,"span",22),qx(158," p-type-tag"),Hl(159,"br"),og()()(),Cl(160,"td",17)(161,"code",25),qx(162,"PoTagType"),og()(),Cl(163,"td",19)(164,"p")(165,"code"),qx(166,"info"),og()()(),Cl(167,"td",20)(168,"em")(169,"strong"),qx(170,"(opcional)"),og()(),Cl(171,"p"),qx(172,"Define o tipo da "),Cl(173,"em"),qx(174,"tag"),og(),qx(175," caso ela esteja sendo exibida."),og(),Cl(176,"p"),qx(177,"Valores v\xE1lidos:"),og(),Cl(178,"ul")(179,"li")(180,"code"),qx(181,"success"),og(),qx(182,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Cl(183,"li")(184,"code"),qx(185,"warning"),og(),qx(186,": cor amarela que representa aviso ou advert\xEAncia."),og(),Cl(187,"li")(188,"code"),qx(189,"danger"),og(),qx(190,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Cl(191,"li")(192,"code"),qx(193,"info"),og(),qx(194,": cor cinza escuro que caracteriza conte\xFAdo informativo."),og()()()()(),Cl(195,"h3",9),qx(196,"M\xE9todos"),og(),Cl(197,"table",26)(198,"tr",13)(199,"th",27)(200,"div",21)(201,"h4")(202,"span",22),qx(203," collapse "),og()()()()(),Cl(204,"tr",20)(205,"td",20)(206,"p"),qx(207,"M\xE9todo para colapsar o "),Cl(208,"code"),qx(209,"po-accordion-item"),og(),qx(210,"."),og()()()(),Hl(211,"br"),Cl(212,"table",26)(213,"tr",13)(214,"th",27)(215,"div",21)(216,"h4")(217,"span",22),qx(218," expand "),og()()()()(),Cl(219,"tr",20)(220,"td",20)(221,"p"),qx(222,"M\xE9todo para expandir o "),Cl(223,"code"),qx(224,"po-accordion-item"),og(),qx(225,"."),og()()()(),Hl(226,"br"),og());},dependencies:[Zr],encapsulation:2})}return o})();var C=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Accordion Item",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,m){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return m.changeTab("doc")}),Hl(3,"sample-po-accordion-item-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return m.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",m.actions),Lp(2),ZE("p-active",m.activeTab==="doc"),Lp(2),ZE("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[SNe,ofe,lfe,y],encapsulation:2})}return o})();var T=[{path:"",component:C}],D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(T),bL]})}return o})();var V=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,D]})}return o})();export{V as DocPoAccordionItemModule};