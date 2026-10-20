import{$r as Zn,A as F4,Ca as zw,Ei as jc,Hi as pe,Ht as bae,Ii as nI,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Ri as nu,Rt as _oe,Vr as TF,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,ai as b,b as A5,bi as ib,dt as Sae,i as _a,ji as mO,mn as ni,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a})}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(b(zw),b(F4))};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,r){i&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),jc(2,`div`,0)(3,`po-input`,2),JN(),ob(`ngModelChange`,function(l){return sO(r.url,l)||(r.url=l),l}),wg()(),jc(4,`div`,0)(5,`po-switch`,3),JN(),ob(`ngModelChange`,function(l){return sO(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),wg(),jc(6,`po-switch`,4),JN(),ob(`ngModelChange`,function(l){return sO(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),wg()(),jc(7,`div`,0)(8,`po-button`,5),mt(`p-click`,function(){return r.getRequest()}),wg()()),i&2&&(rg(),jE(`p-value`,r.pendingRequests),rg(2),ib(`ngModel`,r.url),t0(),rg(2),ib(`ngModel`,r.countPendingRequestHeaderParam),t0(),rg(),ib(`ngModel`,r.screenLockHeaderParam),t0(),rg(2),jE(`p-disabled`,!r.url))},dependencies:[nI,CK,TF,ni,A5,w5,_oe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o});var U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,r){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Http Request Interceptor Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-http-request-interceptor-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-http-request-interceptor-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-http-request-interceptor-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Y,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,V],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,r){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Services`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoHttpRequestInterceptorService`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),wg(),jc(13,`p`),iO(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),jc(15,`code`),iO(16,`X-PO-No-Count-Pending-Requests`),wg(),iO(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),jc(18,`code`),iO(19,`'true'`),wg(),iO(20,`,
por exemplo:`),wg(),jc(21,`pre`)(22,`code`),iO(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),wg()(),jc(24,`p`),iO(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),jc(26,`code`),iO(27,`getCountPendingRequests`),wg(),iO(28,` do
servi\xE7o `),jc(29,`code`),iO(30,`PoHttpRequestInterceptorService`),wg(),iO(31,`, com isso, ao realizar requisições utilizando `),jc(32,`code`),iO(33,`HttpClient`),wg(),iO(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),wg(),jc(35,`p`),iO(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),jc(37,`em`),iO(38,`loading`),wg(),iO(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),jc(40,`code`),iO(41,`X-PO-Screen-Lock`),wg(),iO(42,` no cabeçalho da requisição com valor `),jc(43,`code`),iO(44,`'true'`),wg(),iO(45,`.`),wg(),jc(46,`p`),iO(47,`por exemplo:`),wg(),jc(48,`pre`)(49,`code`),iO(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),wg()(),jc(51,`blockquote`)(52,`p`),iO(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),wg()(),jc(54,`h2`),iO(55,`Configuração`),wg(),jc(56,`p`),iO(57,`É necessário configurar o `),jc(58,`code`),iO(59,`HttpClient`),wg(),iO(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),jc(61,`code`),iO(62,`provideHttpClient(withInterceptorsFromDi())`),wg(),iO(63,`.`),wg(),jc(64,`h3`),iO(65,`1) NgModule`),wg(),jc(66,`pre`)(67,`code`),iO(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),wg()(),jc(69,`p`),iO(70,`Ao importar o módulo `),jc(71,`code`),iO(72,`PoModule`),wg(),iO(73,` na aplicação, o `),jc(74,`code`),iO(75,`po-http-request-interceptor`),wg(),iO(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),wg(),jc(77,`h3`),iO(78,`2) Standalone`),wg(),jc(79,`p`),iO(80,`No arquivo contendo a configuração da aplicação (geralmente `),jc(81,`code`),iO(82,`src/app/app.config.ts`),wg(),iO(83,`), adicione os providers e configure o `),jc(84,`code`),iO(85,`HttpClient`),wg(),iO(86,`,
como no exemplo abaixo:`),wg(),jc(87,`pre`)(88,`code`),iO(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),wg()(),jc(90,`h2`),iO(91,`Como usar`),wg(),jc(92,`p`),iO(93,`Segue abaixo um exemplo de uso:`),wg(),jc(94,`pre`)(95,`code`),iO(96,`import { HttpClient } from '@angular/common/http';

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
`),wg()()()())},encapsulation:2,changeDetection:1})}return o})();var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,r){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-http-request-interceptor-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),nu(5,`sample-po-http-request-interceptor-labs-view`),wg()()()),i&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(ee),C1]})}return o})();var Pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,K]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};