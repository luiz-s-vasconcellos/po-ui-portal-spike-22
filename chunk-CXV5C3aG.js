import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,r as rb,dM as mR,bv as mb,aF as J9,aG as Ck,b0 as Qt,b4 as O3,bH as k3,c9 as $he,T as Tl,J as Gl,L as sg,aM as Ew,aN as t0,a1 as ht,F as Vp,M as tw,aO as Dw,aP as r0,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,ar as zx,au as fg,bs as hN,a3 as aNe,aT as rN}from'./main-LUSFEIN7.js';var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(w(rb),w(mR))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(Tl(0,"div",0),Gl(1,"po-info",1),sg(),Tl(2,"div",0)(3,"po-input",2),Ew("ngModelChange",function(l){return rN(r.url,l)||(r.url=l),l}),sg(),t0(),sg(),Tl(4,"div",0)(5,"po-switch",3),Ew("ngModelChange",function(l){return rN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),sg(),t0(),Tl(6,"po-switch",4),Ew("ngModelChange",function(l){return rN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),sg(),t0(),sg(),Tl(7,"div",0)(8,"po-button",5),ht("p-click",function(){return r.getRequest()}),sg()()),i&2&&(Vp(),tw("p-value",r.pendingRequests),Vp(2),Dw("ngModel",r.url),r0(),Vp(2),Dw("ngModel",r.countPendingRequestHeaderParam),r0(),Vp(),Dw("ngModel",r.screenLockHeaderParam),r0(),Vp(2),tw("p-disabled",!r.url));},dependencies:[mb,J9,Ck,Qt,O3,k3,$he],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Http Request Interceptor Labs"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-http-request-interceptor-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-http-request-interceptor-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-http-request-interceptor-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Y,r.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,V],encapsulation:2})}return o})();var G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),tN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),tN(9,"PoHttpRequestInterceptorService"),sg()(),Tl(10,"div",2)(11,"p"),tN(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),sg(),Tl(13,"p"),tN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Tl(15,"code"),tN(16,"X-PO-No-Count-Pending-Requests"),sg(),tN(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),Tl(18,"code"),tN(19,"'true'"),sg(),tN(20,`,
por exemplo:`),sg(),Tl(21,"pre")(22,"code"),tN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Tl(24,"p"),tN(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),Tl(26,"code"),tN(27,"getCountPendingRequests"),sg(),tN(28,` do
servi\xE7o `),Tl(29,"code"),tN(30,"PoHttpRequestInterceptorService"),sg(),tN(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),Tl(32,"code"),tN(33,"HttpClient"),sg(),tN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),sg(),Tl(35,"p"),tN(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),Tl(37,"em"),tN(38,"loading"),sg(),tN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Tl(40,"code"),tN(41,"X-PO-Screen-Lock"),sg(),tN(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),Tl(43,"code"),tN(44,"'true'"),sg(),tN(45,"."),sg(),Tl(46,"p"),tN(47,"por exemplo:"),sg(),Tl(48,"pre")(49,"code"),tN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Tl(51,"blockquote")(52,"p"),tN(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),sg()(),Tl(54,"h2"),tN(55,"Configura\xE7\xE3o"),sg(),Tl(56,"p"),tN(57,"\xC9 necess\xE1rio configurar o "),Tl(58,"code"),tN(59,"HttpClient"),sg(),tN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Tl(61,"code"),tN(62,"provideHttpClient(withInterceptorsFromDi())"),sg(),tN(63,"."),sg(),Tl(64,"h3"),tN(65,"1) NgModule"),sg(),Tl(66,"pre")(67,"code"),tN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),sg()(),Tl(69,"p"),tN(70,"Ao importar o m\xF3dulo "),Tl(71,"code"),tN(72,"PoModule"),sg(),tN(73," na aplica\xE7\xE3o, o "),Tl(74,"code"),tN(75,"po-http-request-interceptor"),sg(),tN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),sg(),Tl(77,"h3"),tN(78,"2) Standalone"),sg(),Tl(79,"p"),tN(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Tl(81,"code"),tN(82,"src/app/app.config.ts"),sg(),tN(83,"), adicione os providers e configure o "),Tl(84,"code"),tN(85,"HttpClient"),sg(),tN(86,`,
como no exemplo abaixo:`),sg(),Tl(87,"pre")(88,"code"),tN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),sg()(),Tl(90,"h2"),tN(91,"Como usar"),sg(),Tl(92,"p"),tN(93,"Segue abaixo um exemplo de uso:"),sg(),Tl(94,"pre")(95,"code"),tN(96,`import { HttpClient } from '@angular/common/http';

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
`),sg()()()());},encapsulation:2})}return o})();var J=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-http-request-interceptor-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Gl(5,"sample-po-http-request-interceptor-labs-view"),sg()()()),i&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[aNe,Hme,Gme,U,G],encapsulation:2})}return o})();var ee=[{path:"",component:J}],K=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(ee),vL]})}return o})();var qe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,K]})}return o})();export{qe as DocPoHttpRequestInterceptorModule};