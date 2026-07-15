import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,i as ib,dM as mR,bv as vb,aF as nY,aG as Sk,b0 as Qt,b4 as O3,bH as M3,c9 as Yhe,T as Tl,L as Gl,M as sg,aM as ww,aN as r0,a1 as ht,H as Vp,O as nw,aO as Ew,aP as o0,an as AO,aH as Ga,b8 as Wme,b9 as jme,C as iN,ar as qx,au as fg,bs as mN,a3 as lNe,aT as sN}from'./main-P7IRR5MZ.js';var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(w(ib),w(mR))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(Tl(0,"div",0),Gl(1,"po-info",1),sg(),Tl(2,"div",0)(3,"po-input",2),ww("ngModelChange",function(l){return sN(r.url,l)||(r.url=l),l}),sg(),r0(),sg(),Tl(4,"div",0)(5,"po-switch",3),ww("ngModelChange",function(l){return sN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),sg(),r0(),Tl(6,"po-switch",4),ww("ngModelChange",function(l){return sN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),sg(),r0(),sg(),Tl(7,"div",0)(8,"po-button",5),ht("p-click",function(){return r.getRequest()}),sg()()),i&2&&(Vp(),nw("p-value",r.pendingRequests),Vp(2),Ew("ngModel",r.url),o0(),Vp(2),Ew("ngModel",r.countPendingRequestHeaderParam),o0(),Vp(),Ew("ngModel",r.screenLockHeaderParam),o0(),Vp(2),nw("p-disabled",!r.url));},dependencies:[vb,nY,Sk,Qt,O3,M3,Yhe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Http Request Interceptor Labs"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-http-request-interceptor-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-http-request-interceptor-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-http-request-interceptor-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Y,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,V],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),iN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),iN(9,"PoHttpRequestInterceptorService"),sg()(),Tl(10,"div",2)(11,"p"),iN(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),sg(),Tl(13,"p"),iN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Tl(15,"code"),iN(16,"X-PO-No-Count-Pending-Requests"),sg(),iN(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),Tl(18,"code"),iN(19,"'true'"),sg(),iN(20,`,
por exemplo:`),sg(),Tl(21,"pre")(22,"code"),iN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Tl(24,"p"),iN(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),Tl(26,"code"),iN(27,"getCountPendingRequests"),sg(),iN(28,` do
servi\xE7o `),Tl(29,"code"),iN(30,"PoHttpRequestInterceptorService"),sg(),iN(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),Tl(32,"code"),iN(33,"HttpClient"),sg(),iN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),sg(),Tl(35,"p"),iN(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),Tl(37,"em"),iN(38,"loading"),sg(),iN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Tl(40,"code"),iN(41,"X-PO-Screen-Lock"),sg(),iN(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),Tl(43,"code"),iN(44,"'true'"),sg(),iN(45,"."),sg(),Tl(46,"p"),iN(47,"por exemplo:"),sg(),Tl(48,"pre")(49,"code"),iN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Tl(51,"blockquote")(52,"p"),iN(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),sg()(),Tl(54,"h2"),iN(55,"Configura\xE7\xE3o"),sg(),Tl(56,"p"),iN(57,"\xC9 necess\xE1rio configurar o "),Tl(58,"code"),iN(59,"HttpClient"),sg(),iN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Tl(61,"code"),iN(62,"provideHttpClient(withInterceptorsFromDi())"),sg(),iN(63,"."),sg(),Tl(64,"h3"),iN(65,"1) NgModule"),sg(),Tl(66,"pre")(67,"code"),iN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),sg()(),Tl(69,"p"),iN(70,"Ao importar o m\xF3dulo "),Tl(71,"code"),iN(72,"PoModule"),sg(),iN(73," na aplica\xE7\xE3o, o "),Tl(74,"code"),iN(75,"po-http-request-interceptor"),sg(),iN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),sg(),Tl(77,"h3"),iN(78,"2) Standalone"),sg(),Tl(79,"p"),iN(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Tl(81,"code"),iN(82,"src/app/app.config.ts"),sg(),iN(83,"), adicione os providers e configure o "),Tl(84,"code"),iN(85,"HttpClient"),sg(),iN(86,`,
como no exemplo abaixo:`),sg(),Tl(87,"pre")(88,"code"),iN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),sg()(),Tl(90,"h2"),iN(91,"Como usar"),sg(),Tl(92,"p"),iN(93,"Segue abaixo um exemplo de uso:"),sg(),Tl(94,"pre")(95,"code"),iN(96,`import { HttpClient } from '@angular/common/http';

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
`),sg()()()());},encapsulation:2,changeDetection:1})}return o})();var J=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-http-request-interceptor-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Gl(5,"sample-po-http-request-interceptor-labs-view"),sg()()()),i&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[lNe,Wme,jme,U,G],encapsulation:2,changeDetection:1})}return o})();var ee=[{path:"",component:J}],K=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[DL.forChild(ee),DL]})}return o})();var Pe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,K]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};