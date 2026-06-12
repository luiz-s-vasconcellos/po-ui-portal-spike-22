import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var P=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:101,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-list-view"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-list-view"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
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
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoListViewDetailTemplateDirective"),og()(),Cl(34,"div",2)(35,"p"),qx(36,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Cl(37,"code"),qx(38,"Exibir detalhes"),og(),qx(39," abaixo do conte\xFAdo principal do item."),og(),Cl(40,"p"),qx(41,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Cl(42,"ul")(43,"li"),qx(44,"Item: "),Cl(45,"code"),qx(46,"item"),og(),qx(47," determina o item da linha corrente."),og(),Cl(48,"li"),qx(49,"\xCDndice: "),Cl(50,"code"),qx(51,"index"),og(),qx(52," determina o \xEDndice da linha corrente."),og()(),Cl(53,"p"),qx(54,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Cl(55,"em"),qx(56,"syntax sugar"),og(),qx(57,". Veja a seguir ambos, respectivamente:"),og(),Cl(58,"pre")(59,"code"),qx(60,`...
<po-list-view
  p-property-title="name"
  [p-items]="items">

  <ng-template p-list-view-detail-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),og()(),Cl(61,"pre")(62,"code"),qx(63,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()()(),Cl(64,"div",6)(65,"h4",7),qx(66,"Seletor"),og(),Cl(67,"pre",8),qx(68,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),og()(),Cl(69,"h4",9),qx(70,"Propriedades"),og(),Cl(71,"table",10)(72,"tr",11)(73,"th",12),qx(74,"Nome"),og(),Cl(75,"th",12),qx(76,"Tipo"),og(),Cl(77,"th",12),qx(78,"Padr\xE3o"),og(),Cl(79,"th",12),qx(80,"Descri\xE7\xE3o"),og()(),Cl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),qx(85," p-show-detail"),Hl(86,"br"),og()()(),Cl(87,"td",17)(88,"code",18),qx(89,"(item) => boolean"),og()(),Cl(90,"td",19),qx(91,"-"),og(),Cl(92,"td",20)(93,"em")(94,"strong"),qx(95,"(opcional)"),og()(),Cl(96,"p"),qx(97,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Cl(98,"code"),qx(99,"boolean"),og(),qx(100,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var T=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-list-view-detail-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,P],encapsulation:2})}return o})();var L=[{path:"",component:T}],C=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(L),bL]})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,C]})}return o})();export{W as DocPoListViewDetailTemplateModule};