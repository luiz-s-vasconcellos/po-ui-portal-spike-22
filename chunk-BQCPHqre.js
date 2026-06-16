import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,N as Ul,a3 as D3,aS as Vd,aT as Rd,a1 as ut,S as YE,P as Pp}from'./main-6SPFG3VI.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:115,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoListViewModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-list-view"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-list-view"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
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
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoListViewContentTemplateDirective"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),ng(),wl(37,"p"),Ux(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),ng(),wl(39,"ul")(40,"li"),Ux(41,"Item: "),wl(42,"code"),Ux(43,"item"),ng(),Ux(44," determina o item da linha corrente."),ng(),wl(45,"li"),Ux(46,"\xCDndice: "),wl(47,"code"),Ux(48,"index"),ng(),Ux(49," determina o \xEDndice da linha corrente."),ng()(),wl(50,"p"),Ux(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),wl(52,"em"),Ux(53,"syntax sugar"),ng(),Ux(54,". Veja a seguir ambos, respectivamente:"),ng(),wl(55,"pre")(56,"code"),Ux(57,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),ng()(),wl(58,"pre")(59,"code"),Ux(60,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),ng()(),wl(61,"p"),Ux(62,"A diretiva "),wl(63,"strong"),Ux(64,"p-list-view-content-template"),ng(),Ux(65,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),wl(66,"code"),Ux(67,"p-title"),ng(),Ux(68,`,
a mesma deve retornar um valor do tipo `),wl(69,"em"),Ux(70,"string"),ng(),Ux(71,". Veja o exemplo a seguir:"),ng(),wl(72,"pre")(73,"code"),Ux(74,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),ng()()(),wl(75,"div",6)(76,"h4",7),Ux(77,"Seletor"),ng(),wl(78,"pre",8),Ux(79,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),ng()(),wl(80,"h4",9),Ux(81,"Propriedades"),ng(),wl(82,"table",10)(83,"tr",11)(84,"th",12),Ux(85,"Nome"),ng(),wl(86,"th",12),Ux(87,"Tipo"),ng(),wl(88,"th",12),Ux(89,"Padr\xE3o"),ng(),wl(90,"th",12),Ux(91,"Descri\xE7\xE3o"),ng()(),wl(92,"tr",13)(93,"td",14)(94,"div",15)(95,"span",16),Ux(96," p-title"),Ul(97,"br"),ng()()(),wl(98,"td",17)(99,"code",18),Ux(100,"(item) => string"),ng()(),wl(101,"td",19),Ux(102,"-"),ng(),wl(103,"td",20)(104,"em")(105,"strong"),Ux(106,"(opcional)"),ng()(),wl(107,"p"),Ux(108,"Fun\xE7\xE3o que deve retornar um valor do tipo "),wl(109,"code"),Ux(110,"string"),ng(),Ux(111,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),ng(),wl(112,"blockquote")(113,"p"),Ux(114,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-list-view-content-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,D],encapsulation:2})}return o})();var L=[{path:"",component:P}],T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(L),vL]})}return o})();var $=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,T]})}return o})();export{$ as DocPoListViewContentTemplateModule};