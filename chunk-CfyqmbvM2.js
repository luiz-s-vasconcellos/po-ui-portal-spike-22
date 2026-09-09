import{$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Ii as hg,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Ui as l0,Vn as Ak,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_ as A5,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,ya as yb,yi as cN}from"./main-3EWTGE7T.js";var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a})}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(w(ob),w(A5))};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,r){i&1&&(Tl(0,`div`,0),Gl(1,`po-info`,1),ag(),Tl(2,`div`,0)(3,`po-input`,2),ww(`ngModelChange`,function(l){return uN(r.url,l)||(r.url=l),l}),ag(),a0(),ag(),Tl(4,`div`,0)(5,`po-switch`,3),ww(`ngModelChange`,function(l){return uN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),ag(),a0(),Tl(6,`po-switch`,4),ww(`ngModelChange`,function(l){return uN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),ag(),a0(),ag(),Tl(7,`div`,0)(8,`po-button`,5),ht(`p-click`,function(){return r.getRequest()}),ag()()),i&2&&(jp(),nw(`p-value`,r.pendingRequests),jp(2),Ew(`ngModel`,r.url),l0(),jp(2),Ew(`ngModel`,r.countPendingRequestHeaderParam),l0(),jp(),Ew(`ngModel`,r.screenLockHeaderParam),l0(),jp(2),nw(`p-disabled`,!r.url))},dependencies:[yb,gY,Ak,Zt,iU,j4,ybe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o});var U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,r){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Http Request Interceptor Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-http-request-interceptor-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-http-request-interceptor-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-http-request-interceptor-labs`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Y,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,V],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,r){i&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Services`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoHttpRequestInterceptorService`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),ag(),Tl(13,`p`),cN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Tl(15,`code`),cN(16,`X-PO-No-Count-Pending-Requests`),ag(),cN(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Tl(18,`code`),cN(19,`'true'`),ag(),cN(20,`,
por exemplo:`),ag(),Tl(21,`pre`)(22,`code`),cN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ag()(),Tl(24,`p`),cN(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Tl(26,`code`),cN(27,`getCountPendingRequests`),ag(),cN(28,` do
servi\xE7o `),Tl(29,`code`),cN(30,`PoHttpRequestInterceptorService`),ag(),cN(31,`, com isso, ao realizar requisições utilizando `),Tl(32,`code`),cN(33,`HttpClient`),ag(),cN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),ag(),Tl(35,`p`),cN(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Tl(37,`em`),cN(38,`loading`),ag(),cN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Tl(40,`code`),cN(41,`X-PO-Screen-Lock`),ag(),cN(42,` no cabeçalho da requisição com valor `),Tl(43,`code`),cN(44,`'true'`),ag(),cN(45,`.`),ag(),Tl(46,`p`),cN(47,`por exemplo:`),ag(),Tl(48,`pre`)(49,`code`),cN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ag()(),Tl(51,`blockquote`)(52,`p`),cN(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),ag()(),Tl(54,`h2`),cN(55,`Configuração`),ag(),Tl(56,`p`),cN(57,`É necessário configurar o `),Tl(58,`code`),cN(59,`HttpClient`),ag(),cN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Tl(61,`code`),cN(62,`provideHttpClient(withInterceptorsFromDi())`),ag(),cN(63,`.`),ag(),Tl(64,`h3`),cN(65,`1) NgModule`),ag(),Tl(66,`pre`)(67,`code`),cN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),ag()(),Tl(69,`p`),cN(70,`Ao importar o módulo `),Tl(71,`code`),cN(72,`PoModule`),ag(),cN(73,` na aplicação, o `),Tl(74,`code`),cN(75,`po-http-request-interceptor`),ag(),cN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ag(),Tl(77,`h3`),cN(78,`2) Standalone`),ag(),Tl(79,`p`),cN(80,`No arquivo contendo a configuração da aplicação (geralmente `),Tl(81,`code`),cN(82,`src/app/app.config.ts`),ag(),cN(83,`), adicione os providers e configure o `),Tl(84,`code`),cN(85,`HttpClient`),ag(),cN(86,`,
como no exemplo abaixo:`),ag(),Tl(87,`pre`)(88,`code`),cN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),ag()(),Tl(90,`h2`),cN(91,`Como usar`),ag(),Tl(92,`p`),cN(93,`Segue abaixo um exemplo de uso:`),ag(),Tl(94,`pre`)(95,`code`),cN(96,`import { HttpClient } from '@angular/common/http';

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
`),ag()()()())},encapsulation:2,changeDetection:1})}return o})();var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,r){i&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-http-request-interceptor-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),Gl(5,`sample-po-http-request-interceptor-labs-view`),ag()()()),i&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(ee),bL]})}return o})();var Pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,K]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};