import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aH as Zr,Q as Cl,z as qx,T as og,R as Hl,a3 as SNe,b7 as ofe,b8 as lfe,a1 as dt,Z as ZE,H as Lp}from'./main-OS7VVRJY.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:115,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-list-view"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-list-view"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
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
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoListViewContentTemplateDirective"),og()(),Cl(34,"div",2)(35,"p"),qx(36,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),og(),Cl(37,"p"),qx(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Cl(39,"ul")(40,"li"),qx(41,"Item: "),Cl(42,"code"),qx(43,"item"),og(),qx(44," determina o item da linha corrente."),og(),Cl(45,"li"),qx(46,"\xCDndice: "),Cl(47,"code"),qx(48,"index"),og(),qx(49," determina o \xEDndice da linha corrente."),og()(),Cl(50,"p"),qx(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Cl(52,"em"),qx(53,"syntax sugar"),og(),qx(54,". Veja a seguir ambos, respectivamente:"),og(),Cl(55,"pre")(56,"code"),qx(57,`...
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
`),og()(),Cl(58,"pre")(59,"code"),qx(60,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()(),Cl(61,"p"),qx(62,"A diretiva "),Cl(63,"strong"),qx(64,"p-list-view-content-template"),og(),qx(65,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Cl(66,"code"),qx(67,"p-title"),og(),qx(68,`,
a mesma deve retornar um valor do tipo `),Cl(69,"em"),qx(70,"string"),og(),qx(71,". Veja o exemplo a seguir:"),og(),Cl(72,"pre")(73,"code"),qx(74,`...
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
`),og()()(),Cl(75,"div",6)(76,"h4",7),qx(77,"Seletor"),og(),Cl(78,"pre",8),qx(79,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),og()(),Cl(80,"h4",9),qx(81,"Propriedades"),og(),Cl(82,"table",10)(83,"tr",11)(84,"th",12),qx(85,"Nome"),og(),Cl(86,"th",12),qx(87,"Tipo"),og(),Cl(88,"th",12),qx(89,"Padr\xE3o"),og(),Cl(90,"th",12),qx(91,"Descri\xE7\xE3o"),og()(),Cl(92,"tr",13)(93,"td",14)(94,"div",15)(95,"span",16),qx(96," p-title"),Hl(97,"br"),og()()(),Cl(98,"td",17)(99,"code",18),qx(100,"(item) => string"),og()(),Cl(101,"td",19),qx(102,"-"),og(),Cl(103,"td",20)(104,"em")(105,"strong"),qx(106,"(opcional)"),og()(),Cl(107,"p"),qx(108,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Cl(109,"code"),qx(110,"string"),og(),qx(111,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),og(),Cl(112,"blockquote")(113,"p"),qx(114,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-list-view-content-template-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,D],encapsulation:2})}return o})();var L=[{path:"",component:P}],T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(L),bL]})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,T]})}return o})();export{W as DocPoListViewContentTemplateModule};