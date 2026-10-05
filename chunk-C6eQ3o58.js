import{$i as pt,C as C4,Ca as zO,Cr as Kc,Gi as mg,Ji as p0,Jr as TE,Mi as hw,Oi as he,Ri as kL,Rt as cae,Sn as u4,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,_a as wn,ca as ue,fr as Hp,gn as soe,i as _a,in as mae,ir as E,it as P5,nr as DN,oi as aN,pa as vN,qn as BP,qr as Sw,r as Ta,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,zr as Qn}from"./main-M64QO35D.js";var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a})}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(E(hw),E(P5))};static ɵcmp=Hn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,r){i&1&&(Ac(0,`div`,0),Kc(1,`po-info`,1),ug(),Ac(2,`div`,0)(3,`po-input`,2),RE(`ngModelChange`,function(l){return DN(r.url,l)||(r.url=l),l}),ug(),p0(),ug(),Ac(4,`div`,0)(5,`po-switch`,3),RE(`ngModelChange`,function(l){return DN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),ug(),p0(),Ac(6,`po-switch`,4),RE(`ngModelChange`,function(l){return DN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),ug(),p0(),ug(),Ac(7,`div`,0)(8,`po-button`,5),pt(`p-click`,function(){return r.getRequest()}),ug()()),i&2&&(Hp(),cE(`p-value`,r.pendingRequests),Hp(2),TE(`ngModel`,r.url),m0(),Hp(2),TE(`ngModel`,r.countPendingRequestHeaderParam),m0(),Hp(),TE(`ngModel`,r.screenLockHeaderParam),m0(),Hp(2),cE(`p-disabled`,!r.url))},dependencies:[Sw,D9,BP,oi,C4,u4,soe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o});var U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,r){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Http Request Interceptor Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-http-request-interceptor-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-http-request-interceptor-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-http-request-interceptor-labs`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Y,r.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,V],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,r){i&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Services`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoHttpRequestInterceptorService`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),ug(),Ac(13,`p`),vN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Ac(15,`code`),vN(16,`X-PO-No-Count-Pending-Requests`),ug(),vN(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Ac(18,`code`),vN(19,`'true'`),ug(),vN(20,`,
por exemplo:`),ug(),Ac(21,`pre`)(22,`code`),vN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ug()(),Ac(24,`p`),vN(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Ac(26,`code`),vN(27,`getCountPendingRequests`),ug(),vN(28,` do
servi\xE7o `),Ac(29,`code`),vN(30,`PoHttpRequestInterceptorService`),ug(),vN(31,`, com isso, ao realizar requisições utilizando `),Ac(32,`code`),vN(33,`HttpClient`),ug(),vN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),ug(),Ac(35,`p`),vN(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Ac(37,`em`),vN(38,`loading`),ug(),vN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Ac(40,`code`),vN(41,`X-PO-Screen-Lock`),ug(),vN(42,` no cabeçalho da requisição com valor `),Ac(43,`code`),vN(44,`'true'`),ug(),vN(45,`.`),ug(),Ac(46,`p`),vN(47,`por exemplo:`),ug(),Ac(48,`pre`)(49,`code`),vN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ug()(),Ac(51,`blockquote`)(52,`p`),vN(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),ug()(),Ac(54,`h2`),vN(55,`Configuração`),ug(),Ac(56,`p`),vN(57,`É necessário configurar o `),Ac(58,`code`),vN(59,`HttpClient`),ug(),vN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Ac(61,`code`),vN(62,`provideHttpClient(withInterceptorsFromDi())`),ug(),vN(63,`.`),ug(),Ac(64,`h3`),vN(65,`1) NgModule`),ug(),Ac(66,`pre`)(67,`code`),vN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),ug()(),Ac(69,`p`),vN(70,`Ao importar o módulo `),Ac(71,`code`),vN(72,`PoModule`),ug(),vN(73,` na aplicação, o `),Ac(74,`code`),vN(75,`po-http-request-interceptor`),ug(),vN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ug(),Ac(77,`h3`),vN(78,`2) Standalone`),ug(),Ac(79,`p`),vN(80,`No arquivo contendo a configuração da aplicação (geralmente `),Ac(81,`code`),vN(82,`src/app/app.config.ts`),ug(),vN(83,`), adicione os providers e configure o `),Ac(84,`code`),vN(85,`HttpClient`),ug(),vN(86,`,
como no exemplo abaixo:`),ug(),Ac(87,`pre`)(88,`code`),vN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),ug()(),Ac(90,`h2`),vN(91,`Como usar`),ug(),Ac(92,`p`),vN(93,`Segue abaixo um exemplo de uso:`),ug(),Ac(94,`pre`)(95,`code`),vN(96,`import { HttpClient } from '@angular/common/http';

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
`),ug()()()())},encapsulation:2,changeDetection:1})}return o})();var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,r){i&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-http-request-interceptor-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),Kc(5,`sample-po-http-request-interceptor-labs-view`),ug()()()),i&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Cze,cae,mae,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(ee),kL]})}return o})();var Pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,K]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};