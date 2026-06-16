import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,K as KC,dn as Sz,b1 as lb,ae as iY,af as ck,aK as Pe,aO as Yo,bd as na,bC as Vp,J as wl,N as Ul,R as ng,am as pw,an as $0,a1 as ut,P as Pp,S as YE,ap as hw,aq as G0,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,bw as Ax,aY as cg,bi as Jx,a3 as D3,aB as $x}from'./main-6SPFG3VI.js';var z=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(C(KC),C(Sz))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(wl(0,"div",0),Ul(1,"po-info",1),ng(),wl(2,"div",0)(3,"po-input",2),pw("ngModelChange",function(l){return $x(r.url,l)||(r.url=l),l}),ng(),$0(),ng(),wl(4,"div",0)(5,"po-switch",3),pw("ngModelChange",function(l){return $x(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),ng(),$0(),wl(6,"po-switch",4),pw("ngModelChange",function(l){return $x(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),ng(),$0(),ng(),wl(7,"div",0)(8,"po-button",5),ut("p-click",function(){return r.getRequest()}),ng()()),i&2&&(Pp(),YE("p-value",r.pendingRequests),Pp(2),hw("ngModel",r.url),G0(),Pp(2),hw("ngModel",r.countPendingRequestHeaderParam),G0(),Pp(),hw("ngModel",r.screenLockHeaderParam),G0(),Pp(2),YE("p-disabled",!r.url));},dependencies:[lb,iY,ck,Pe,Yo,na,Vp],encapsulation:2,changeDetection:1})}return o})();var Z=o=>({"docs-sample-code-tabs":o}),V=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Http Request Interceptor Labs"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-http-request-interceptor-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-info class="po-lg-12" p-label="Pending Requests" [p-value]="pendingRequests"> </po-info>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6"
    name="url"
    [(ngModel)]="url"
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="URL"
    p-required
  >
  </po-input>
</div>

<div class="po-row">
  <po-switch
    class="po-lg-6"
    name="countPendingRequestHeaderParam"
    [(ngModel)]="countPendingRequestHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-No-Count-Pending-Requests"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>

  <po-switch
    class="po-lg-6"
    name="screenLockHeaderParam"
    [(ngModel)]="screenLockHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-Screen-Lock"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>
</div>

<div class="po-row">
  <po-button class="po-md-4" p-label="Get request" [p-disabled]="!url" (p-click)="getRequest()"> </po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-http-request-interceptor-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PoHttpRequestInterceptorService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-http-request-interceptor-labs',
  templateUrl: './sample-po-http-request-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {
  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: PoHttpRequestInterceptorService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-PO-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-PO-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-http-request-interceptor-labs"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Z,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,z],encapsulation:2})}return o})();var U=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Services"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoHttpRequestInterceptorService"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),ng(),wl(13,"p"),Ux(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),wl(15,"code"),Ux(16,"X-PO-No-Count-Pending-Requests"),ng(),Ux(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),wl(18,"code"),Ux(19,"'true'"),ng(),Ux(20,`,
por exemplo:`),ng(),wl(21,"pre")(22,"code"),Ux(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ng()(),wl(24,"p"),Ux(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),wl(26,"code"),Ux(27,"getCountPendingRequests"),ng(),Ux(28,` do
servi\xE7o `),wl(29,"code"),Ux(30,"PoHttpRequestInterceptorService"),ng(),Ux(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),wl(32,"code"),Ux(33,"HttpClient"),ng(),Ux(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),ng(),wl(35,"p"),Ux(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),wl(37,"em"),Ux(38,"loading"),ng(),Ux(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),wl(40,"code"),Ux(41,"X-PO-Screen-Lock"),ng(),Ux(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),wl(43,"code"),Ux(44,"'true'"),ng(),Ux(45,"."),ng(),wl(46,"p"),Ux(47,"por exemplo:"),ng(),wl(48,"pre")(49,"code"),Ux(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ng()(),wl(51,"blockquote")(52,"p"),Ux(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),ng()(),wl(54,"h2"),Ux(55,"Configura\xE7\xE3o"),ng(),wl(56,"p"),Ux(57,"\xC9 necess\xE1rio configurar o "),wl(58,"code"),Ux(59,"HttpClient"),ng(),Ux(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),wl(61,"code"),Ux(62,"provideHttpClient(withInterceptorsFromDi())"),ng(),Ux(63,"."),ng(),wl(64,"h3"),Ux(65,"1) NgModule"),ng(),wl(66,"pre")(67,"code"),Ux(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(69,"p"),Ux(70,"Ao importar o m\xF3dulo "),wl(71,"code"),Ux(72,"PoModule"),ng(),Ux(73," na aplica\xE7\xE3o, o "),wl(74,"code"),Ux(75,"po-http-request-interceptor"),ng(),Ux(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ng(),wl(77,"h3"),Ux(78,"2) Standalone"),ng(),wl(79,"p"),Ux(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),wl(81,"code"),Ux(82,"src/app/app.config.ts"),ng(),Ux(83,"), adicione os providers e configure o "),wl(84,"code"),Ux(85,"HttpClient"),ng(),Ux(86,`,
como no exemplo abaixo:`),ng(),wl(87,"pre")(88,"code"),Ux(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpRequestModule
    ]),
    ...
  ]
};
`),ng()(),wl(90,"h2"),Ux(91,"Como usar"),ng(),wl(92,"p"),Ux(93,"Segue abaixo um exemplo de uso:"),ng(),wl(94,"pre")(95,"code"),Ux(96,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
 providedIn: 'root'
})
export class CustomersService {

 headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 pendingRequests: number = 0;
 subscription: Subscription;

 constructor(
   private http: HttpClient,
   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

 ngOnInit(): void {
   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
     this.pendingRequests = data;
   });
 }

 getCustomers() {
   return this.http.get(\`/customers/1\`, { headers: headers });
 }

 ...

}
`),ng()()()());},encapsulation:2})}return o})();var G=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-http-request-interceptor-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),Ul(5,"sample-po-http-request-interceptor-labs-view"),ng()()()),i&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,V,U],encapsulation:2})}return o})();var te=[{path:"",component:G}],J=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(te),vL]})}return o})();var xe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,J]})}return o})();export{xe as DocPoHttpRequestInterceptorModule};