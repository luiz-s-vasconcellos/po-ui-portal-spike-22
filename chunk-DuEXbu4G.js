import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,t as tb,dS as MR,bz as pb,aF as sY,aG as gk,a$ as Qt,b3 as q3,bL as H3,cd as sme,Q as Cl,R as Hl,T as og,aM as gw,aN as Z0,a1 as dt,H as Lp,Z as ZE,aO as pw,aP as X0,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,ar as Fx,au as dg,bw as oN,a3 as SNe,aT as Zx}from'./main-OS7VVRJY.js';var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(w(tb),w(MR))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(Cl(0,"div",0),Hl(1,"po-info",1),og(),Cl(2,"div",0)(3,"po-input",2),gw("ngModelChange",function(l){return Zx(r.url,l)||(r.url=l),l}),og(),Z0(),og(),Cl(4,"div",0)(5,"po-switch",3),gw("ngModelChange",function(l){return Zx(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),og(),Z0(),Cl(6,"po-switch",4),gw("ngModelChange",function(l){return Zx(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),og(),Z0(),og(),Cl(7,"div",0)(8,"po-button",5),dt("p-click",function(){return r.getRequest()}),og()()),i&2&&(Lp(),ZE("p-value",r.pendingRequests),Lp(2),pw("ngModel",r.url),X0(),Lp(2),pw("ngModel",r.countPendingRequestHeaderParam),X0(),Lp(),pw("ngModel",r.screenLockHeaderParam),X0(),Lp(2),ZE("p-disabled",!r.url));},dependencies:[pb,sY,gk,Qt,q3,H3,sme],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Http Request Interceptor Labs"),og(),Cl(4,"a",2),dt("click",function(){return r.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-http-request-interceptor-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-http-request-interceptor-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-http-request-interceptor-labs"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Y,r.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,V],encapsulation:2})}return o})();var G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Services"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoHttpRequestInterceptorService"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),og(),Cl(13,"p"),qx(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Cl(15,"code"),qx(16,"X-PO-No-Count-Pending-Requests"),og(),qx(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),Cl(18,"code"),qx(19,"'true'"),og(),qx(20,`,
por exemplo:`),og(),Cl(21,"pre")(22,"code"),qx(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Cl(24,"p"),qx(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),Cl(26,"code"),qx(27,"getCountPendingRequests"),og(),qx(28,` do
servi\xE7o `),Cl(29,"code"),qx(30,"PoHttpRequestInterceptorService"),og(),qx(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),Cl(32,"code"),qx(33,"HttpClient"),og(),qx(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),og(),Cl(35,"p"),qx(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),Cl(37,"em"),qx(38,"loading"),og(),qx(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Cl(40,"code"),qx(41,"X-PO-Screen-Lock"),og(),qx(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),Cl(43,"code"),qx(44,"'true'"),og(),qx(45,"."),og(),Cl(46,"p"),qx(47,"por exemplo:"),og(),Cl(48,"pre")(49,"code"),qx(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Cl(51,"blockquote")(52,"p"),qx(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),og()(),Cl(54,"h2"),qx(55,"Configura\xE7\xE3o"),og(),Cl(56,"p"),qx(57,"\xC9 necess\xE1rio configurar o "),Cl(58,"code"),qx(59,"HttpClient"),og(),qx(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Cl(61,"code"),qx(62,"provideHttpClient(withInterceptorsFromDi())"),og(),qx(63,"."),og(),Cl(64,"h3"),qx(65,"1) NgModule"),og(),Cl(66,"pre")(67,"code"),qx(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),og()(),Cl(69,"p"),qx(70,"Ao importar o m\xF3dulo "),Cl(71,"code"),qx(72,"PoModule"),og(),qx(73," na aplica\xE7\xE3o, o "),Cl(74,"code"),qx(75,"po-http-request-interceptor"),og(),qx(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Cl(77,"h3"),qx(78,"2) Standalone"),og(),Cl(79,"p"),qx(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Cl(81,"code"),qx(82,"src/app/app.config.ts"),og(),qx(83,"), adicione os providers e configure o "),Cl(84,"code"),qx(85,"HttpClient"),og(),qx(86,`,
como no exemplo abaixo:`),og(),Cl(87,"pre")(88,"code"),qx(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),og()(),Cl(90,"h2"),qx(91,"Como usar"),og(),Cl(92,"p"),qx(93,"Segue abaixo um exemplo de uso:"),og(),Cl(94,"pre")(95,"code"),qx(96,`import { HttpClient } from '@angular/common/http';

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
`),og()()()());},encapsulation:2})}return o})();var J=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-http-request-interceptor-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),Hl(5,"sample-po-http-request-interceptor-labs-view"),og()()()),i&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,U,G],encapsulation:2})}return o})();var ee=[{path:"",component:J}],K=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(ee),bL]})}return o})();var qe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,K]})}return o})();export{qe as DocPoHttpRequestInterceptorModule};