import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Ni as hw,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,fn as ni,i as _a,in as kte,ki as he,l as kn,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}`;successMessage=`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),a=JSON.parse(this.requestMessage),i={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,a,{headers:r,params:i}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(a){return new(a||n)(E(hw))};static ɵcmp=Hn({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=Bx();Ac(0,`h2`),vN(1,`Process request with Http Interceptor`),ug(),Ac(2,`p`,1),vN(3,`Edit response object by server with pattern expected by Http Interceptor:`),ug(),Ac(4,`po-code-editor`,2),RE(`ngModelChange`,function(p){return Jv(u),DN(i.requestMessage,p)||(i.requestMessage=p),e_(p)}),ug(),p0(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),RE(`ngModelChange`,function(p){return Jv(u),DN(i.status,p)||(i.status=p),e_(p)}),pt(`p-change`,function(){return i.changeOption()}),ug(),p0(),Ac(10,`po-radio-group`,5),RE(`ngModelChange`,function(p){return Jv(u),DN(i.headerParam,p)||(i.headerParam=p),e_(p)}),ug(),p0(),ug(),Ac(11,`div`,6)(12,`po-button`,7),pt(`p-click`,function(){return i.processRequest()}),ug()(),Ac(13,`div`,6)(14,`po-button`,8),pt(`p-click`,function(){return i.restore()}),ug()()()}a&2&&(Hp(4),TE(`ngModel`,i.requestMessage),m0(),Hp(5),TE(`ngModel`,i.status),cE(`p-options`,i.statusOptions),m0(),Hp(),TE(`ngModel`,i.headerParam),cE(`p-options`,i.headerParamOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,kte,kn],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n});var Y=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Http Interceptor Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-http-interceptor-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<h2>Process request with Http Interceptor</h2>
<p class="po-text-color-neutral-dark-40">Edit response object by server with pattern expected by Http Interceptor:</p>

<po-code-editor [(ngModel)]="requestMessage" p-height="330" p-theme="vs-dark"> </po-code-editor>

<po-divider />

<form #requestForm="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="status"
      [(ngModel)]="status"
      p-label="Http Status"
      [p-options]="statusOptions"
      (p-change)="changeOption()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="headerParam"
      [(ngModel)]="headerParam"
      p-label="Disables Notifications"
      [p-options]="headerParamOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Process Request" (p-click)="processRequest()"> </po-button>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-http-interceptor-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sample-po-http-interceptor-labs',
  templateUrl: './sample-po-http-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpInterceptorLabsComponent implements OnDestroy, OnInit {
  headerParam: string;
  requestMessage: string;
  status: string;

  errorMessage = \`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}\`;

  successMessage = \`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}\`;

  readonly statusOptions: Array<PoRadioGroupOption> = [
    { label: '200 - Success', value: '200' },
    { label: '401 - Error', value: '401' }
  ];

  readonly headerParamOptions: Array<PoRadioGroupOption> = [
    { label: 'X-PO-No-Message', value: 'No-Message' },
    { label: 'X-PO-No-Error', value: 'No-Error' }
  ];

  private apiSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.restore();
  }

  changeOption() {
    this.requestMessage = this.status === '200' ? this.successMessage : this.errorMessage;
  }

  getParam() {
    return this.headerParam === 'No-Message'
      ? { 'X-PO-No-Message': 'true' }
      : this.headerParam === 'No-Error'
        ? { 'X-PO-No-Error': 'true' }
        : {};
  }

  processRequest() {
    const headers = this.getParam();
    const body = JSON.parse(this.requestMessage);
    const params = { status: this.status || '' };

    this.apiSubscription = this.http
      .post(\`https://po-sample-api.onrender.com/v1/messages\`, body, { headers, params })
      .subscribe();
  }

  restore() {
    this.headerParam = undefined;
    this.requestMessage = this.successMessage;
    this.status = '200';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-http-interceptor-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,oe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Q],encapsulation:2,changeDetection:1})}return n})();var Z=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Services`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoHttpInterceptorService`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`O `),Ac(13,`em`),vN(14,`interceptor`),ug(),vN(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),ug(),Ac(16,`p`),vN(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),ug(),Ac(18,`h2`),vN(19,`Configuração`),ug(),Ac(20,`p`),vN(21,`Para o correto funcionamento do interceptor `),Ac(22,`code`),vN(23,`po-http-interceptor`),ug(),vN(24,`, é necessário configurar o `),Ac(25,`code`),vN(26,`HttpClient`),ug(),vN(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Ac(28,`code`),vN(29,`provideHttpClient(withInterceptorsFromDi())`),ug(),vN(30,`.`),ug(),Ac(31,`h3`),vN(32,`1) NgModule`),ug(),Ac(33,`p`),vN(34,`No módulo principal da aplicação (geralmente `),Ac(35,`code`),vN(36,`AppModule`),ug(),vN(37,`), configure o `),Ac(38,`code`),vN(39,`HttpClient`),ug(),vN(40,`,
como no exemplo abaixo:`),ug(),Ac(41,`pre`)(42,`code`),vN(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
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
`),ug()(),Ac(44,`p`),vN(45,`Ao importar o módulo `),Ac(46,`code`),vN(47,`PoModule`),ug(),vN(48,` na aplicação, o `),Ac(49,`code`),vN(50,`po-http-interceptor`),ug(),vN(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ug(),Ac(52,`h3`),vN(53,`2) Standalone`),ug(),Ac(54,`p`),vN(55,`No arquivo contendo a configuração da aplicação (geralmente `),Ac(56,`code`),vN(57,`src/app/app.config.ts`),ug(),vN(58,`), adicione os providers e configure o `),Ac(59,`code`),vN(60,`HttpClient`),ug(),vN(61,`,
como no exemplo abaixo:`),ug(),Ac(62,`pre`)(63,`code`),vN(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpInterceptorModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpInterceptorModule
    ]),
    ...
  ]
};
`),ug()(),Ac(65,`h2`),vN(66,`Como usar`),ug(),Ac(67,`p`),vN(68,`Ao realizar requisições utilize o `),Ac(69,`code`),vN(70,`HttpClient`),ug(),vN(71,`, conforme exemplo abaixo:`),ug(),Ac(72,`pre`)(73,`code`),vN(74,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users');
  }

  ...

}
`),ug()(),Ac(75,`p`),vN(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),ug(),Ac(77,`h3`),vN(78,`Estrutura das mensagens`),ug(),Ac(79,`h4`),vN(80,`Mensagens de sucesso `),Ac(81,`code`),vN(82,`2xx`),ug()(),Ac(83,`p`),vN(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Ac(85,`code`),vN(86,`_messages`),ug(),vN(87,` no objeto de retorno.
Por exemplo:`),ug(),Ac(88,`pre`)(89,`code`),vN(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),ug()(),Ac(91,`h4`),vN(92,`Mensagens de erro `),Ac(93,`code`),vN(94,`4xx`),ug(),vN(95,` ou `),Ac(96,`code`),vN(97,`5xx`),ug()(),Ac(98,`p`),vN(99,`Ao retornar erro, o objeto não necessita ter `),Ac(100,`code`),vN(101,`_messages`),ug(),vN(102,`, deve-se retornar o objeto diretamente:`),ug(),Ac(103,`pre`)(104,`code`),vN(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),ug()(),Ac(106,`p`),vN(107,`Também é possível informar as seguintes propriedades:`),ug(),Ac(108,`ul`)(109,`li`)(110,`code`),vN(111,`helpUrl`),ug(),vN(112,`: link para a documentação do erro;`),Ac(113,`ul`)(114,`li`),vN(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Ac(116,`code`),vN(117,`detailedMessage`),ug(),vN(118,`.`),ug()()(),Ac(119,`li`)(120,`code`),vN(121,`type`),ug(),vN(122,`: É possível informar `),Ac(123,`code`),vN(124,`error`),ug(),vN(125,`, `),Ac(126,`code`),vN(127,`warning`),ug(),vN(128,` e `),Ac(129,`code`),vN(130,`information`),ug(),vN(131,`, sendo `),Ac(132,`code`),vN(133,`error`),ug(),vN(134,` o valor padrão.`),ug(),Ac(135,`li`)(136,`code`),vN(137,`details`),ug(),vN(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),ug(),Ac(139,`li`)(140,`code`),vN(141,`detailTitle`),ug(),vN(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Ac(143,`code`),vN(144,`code - message`),ug()()(),Ac(145,`blockquote`)(146,`p`),vN(147,`Veja o `),Ac(148,`a`,6),vN(149,`Guia de implementação de APIs`),ug(),vN(150,` para mais detalhes sobre a estrutura das mensagens.`),ug()(),Ac(151,`h3`),vN(152,`Cabeçalho`),ug(),Ac(153,`p`),vN(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Ac(155,`code`),vN(156,`true`),ug(),vN(157,`:`),ug(),Ac(158,`ul`)(159,`li`)(160,`p`)(161,`code`),vN(162,`X-PO-No-Message`),ug(),vN(163,`: Não exibe notificações de erro e/ou sucesso.`),ug()(),Ac(164,`li`)(165,`p`)(166,`code`),vN(167,`X-PO-No-Error`),ug(),vN(168,`: Não mostra notificações de erro com códigos `),Ac(169,`code`),vN(170,`4xx`),ug(),vN(171,` e `),Ac(172,`code`),vN(173,`5xx`),ug(),vN(174,`.`),ug()()(),Ac(175,`pre`)(176,`code`),vN(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ug()(),Ac(178,`blockquote`)(179,`p`),vN(180,`Após a validação no `),Ac(181,`em`),vN(182,`interceptor`),ug(),vN(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),ug()()()())},encapsulation:2,changeDetection:1})}return n})();var ae=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-http-interceptor-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-http-interceptor-labs-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,Y,Z],encapsulation:2,changeDetection:1})}return n})()}];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(ae),kL]})}return n})();var _e=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};