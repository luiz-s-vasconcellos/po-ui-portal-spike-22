import{Et as V8e,Hr as Tw,Ii as ht,It as Zt,Kr as Un,Ln as z5,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Si as db,Ti as f0,Ui as lg,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,bi as cw,br as NL,cn as lU,ea as p0,ga as w,hi as bb,l as ar,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,ua as ue,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a})}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(w(db),w(z5))};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,r){i&1&&(Ml(0,`div`,0),ql(1,`po-info`,1),lg(),Ml(2,`div`,0)(3,`po-input`,2),Mw(`ngModelChange`,function(l){return yN(r.url,l)||(r.url=l),l}),lg(),f0(),lg(),Ml(4,`div`,0)(5,`po-switch`,3),Mw(`ngModelChange`,function(l){return yN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),lg(),f0(),Ml(6,`po-switch`,4),Mw(`ngModelChange`,function(l){return yN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),lg(),f0(),lg(),Ml(7,`div`,0)(8,`po-button`,5),ht(`p-click`,function(){return r.getRequest()}),lg()()),i&2&&(Up(),cw(`p-value`,r.pendingRequests),Up(2),Tw(`ngModel`,r.url),p0(),Up(2),Tw(`ngModel`,r.countPendingRequestHeaderParam),p0(),Up(),Tw(`ngModel`,r.screenLockHeaderParam),p0(),Up(2),cw(`p-disabled`,!r.url))},dependencies:[bb,wY,Vk,Zt,lU,J4,kbe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o});var U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,r){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Http Request Interceptor Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-http-request-interceptor-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-http-request-interceptor-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-http-request-interceptor-labs`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Y,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,V],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,r){i&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Services`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoHttpRequestInterceptorService`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),lg(),Ml(13,`p`),mN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Ml(15,`code`),mN(16,`X-PO-No-Count-Pending-Requests`),lg(),mN(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Ml(18,`code`),mN(19,`'true'`),lg(),mN(20,`,
por exemplo:`),lg(),Ml(21,`pre`)(22,`code`),mN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),lg()(),Ml(24,`p`),mN(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Ml(26,`code`),mN(27,`getCountPendingRequests`),lg(),mN(28,` do
servi\xE7o `),Ml(29,`code`),mN(30,`PoHttpRequestInterceptorService`),lg(),mN(31,`, com isso, ao realizar requisições utilizando `),Ml(32,`code`),mN(33,`HttpClient`),lg(),mN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),lg(),Ml(35,`p`),mN(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Ml(37,`em`),mN(38,`loading`),lg(),mN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Ml(40,`code`),mN(41,`X-PO-Screen-Lock`),lg(),mN(42,` no cabeçalho da requisição com valor `),Ml(43,`code`),mN(44,`'true'`),lg(),mN(45,`.`),lg(),Ml(46,`p`),mN(47,`por exemplo:`),lg(),Ml(48,`pre`)(49,`code`),mN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),lg()(),Ml(51,`blockquote`)(52,`p`),mN(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),lg()(),Ml(54,`h2`),mN(55,`Configuração`),lg(),Ml(56,`p`),mN(57,`É necessário configurar o `),Ml(58,`code`),mN(59,`HttpClient`),lg(),mN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Ml(61,`code`),mN(62,`provideHttpClient(withInterceptorsFromDi())`),lg(),mN(63,`.`),lg(),Ml(64,`h3`),mN(65,`1) NgModule`),lg(),Ml(66,`pre`)(67,`code`),mN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),lg()(),Ml(69,`p`),mN(70,`Ao importar o módulo `),Ml(71,`code`),mN(72,`PoModule`),lg(),mN(73,` na aplicação, o `),Ml(74,`code`),mN(75,`po-http-request-interceptor`),lg(),mN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),lg(),Ml(77,`h3`),mN(78,`2) Standalone`),lg(),Ml(79,`p`),mN(80,`No arquivo contendo a configuração da aplicação (geralmente `),Ml(81,`code`),mN(82,`src/app/app.config.ts`),lg(),mN(83,`), adicione os providers e configure o `),Ml(84,`code`),mN(85,`HttpClient`),lg(),mN(86,`,
como no exemplo abaixo:`),lg(),Ml(87,`pre`)(88,`code`),mN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),lg()(),Ml(90,`h2`),mN(91,`Como usar`),lg(),Ml(92,`p`),mN(93,`Segue abaixo um exemplo de uso:`),lg(),Ml(94,`pre`)(95,`code`),mN(96,`import { HttpClient } from '@angular/common/http';

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
`),lg()()()())},encapsulation:2,changeDetection:1})}return o})();var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,r){i&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-http-request-interceptor-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ql(5,`sample-po-http-request-interceptor-labs-view`),lg()()()),i&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(ee),NL]})}return o})();var Pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,K]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};