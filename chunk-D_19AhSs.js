import {f as fe,u as ue,a as u5,v as vL,C as C$1,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var P=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:101,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoListViewModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-list-view"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-list-view"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
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
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoListViewDetailTemplateDirective"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),wl(37,"code"),Ux(38,"Exibir detalhes"),ng(),Ux(39," abaixo do conte\xFAdo principal do item."),ng(),wl(40,"p"),Ux(41,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),ng(),wl(42,"ul")(43,"li"),Ux(44,"Item: "),wl(45,"code"),Ux(46,"item"),ng(),Ux(47," determina o item da linha corrente."),ng(),wl(48,"li"),Ux(49,"\xCDndice: "),wl(50,"code"),Ux(51,"index"),ng(),Ux(52," determina o \xEDndice da linha corrente."),ng()(),wl(53,"p"),Ux(54,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),wl(55,"em"),Ux(56,"syntax sugar"),ng(),Ux(57,". Veja a seguir ambos, respectivamente:"),ng(),wl(58,"pre")(59,"code"),Ux(60,`...
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
`),ng()(),wl(61,"pre")(62,"code"),Ux(63,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ng()()(),wl(64,"div",6)(65,"h4",7),Ux(66,"Seletor"),ng(),wl(67,"pre",8),Ux(68,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),ng()(),wl(69,"h4",9),Ux(70,"Propriedades"),ng(),wl(71,"table",10)(72,"tr",11)(73,"th",12),Ux(74,"Nome"),ng(),wl(75,"th",12),Ux(76,"Tipo"),ng(),wl(77,"th",12),Ux(78,"Padr\xE3o"),ng(),wl(79,"th",12),Ux(80,"Descri\xE7\xE3o"),ng()(),wl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),Ux(85," p-show-detail"),Ul(86,"br"),ng()()(),wl(87,"td",17)(88,"code",18),Ux(89,"(item) => boolean"),ng()(),wl(90,"td",19),Ux(91,"-"),ng(),wl(92,"td",20)(93,"em")(94,"strong"),Ux(95,"(opcional)"),ng()(),wl(96,"p"),Ux(97,"Fun\xE7\xE3o que deve retornar um valor do tipo "),wl(98,"code"),Ux(99,"boolean"),ng(),Ux(100,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var T=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C$1(Xn),C$1(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-list-view-detail-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,P],encapsulation:2})}return o})();var L=[{path:"",component:T}],C=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(L),vL]})}return o})();var G=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,C]})}return o})();export{G as DocPoListViewDetailTemplateModule};