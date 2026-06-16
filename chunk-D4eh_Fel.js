import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,ag as fP,J as wl,z as Ux,R as ng,a3 as D3,aS as Vd,aT as Rd,a1 as ut,N as Ul,S as YE,P as Pp}from'./main-6SPFG3VI.js';var P=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-slide-content-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoSlideModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-slide"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-slide"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
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
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoSlideContentTemplateDirective"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),ng(),wl(37,"p"),Ux(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),ng(),wl(39,"ul")(40,"li"),Ux(41,"Item: "),wl(42,"code"),Ux(43,"item"),ng(),Ux(44," determina o item do slide corrente."),ng(),wl(45,"li"),Ux(46,"\xCDndice: "),wl(47,"code"),Ux(48,"index"),ng(),Ux(49," determina o \xEDndice do slide corrente."),ng()(),wl(50,"p"),Ux(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),wl(52,"em"),Ux(53,"syntax sugar"),ng(),Ux(54,". Veja a seguir ambos, respectivamente:"),ng(),wl(55,"pre")(56,"code"),Ux(57,`...
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
`),ng()(),wl(58,"pre")(59,"code"),Ux(60,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),ng()()(),wl(61,"div",6)(62,"h4",7),Ux(63,"Seletor"),ng(),wl(64,"pre",8),Ux(65,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),ng()()());},dependencies:[fP],encapsulation:2})}return i})();var T=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-slide-content-template-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),ng()()()),n&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,P],encapsulation:2})}return i})();var A=[{path:"",component:T}],M=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(A),vL]})}return i})();var G=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[u5,M]})}return i})();export{G as DocPoSlideContentTemplateModule};