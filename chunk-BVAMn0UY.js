import{$r as Xy,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,d as ia,fi as ag,gi as bL,ha as ww,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),a=JSON.parse(this.requestMessage),i={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,a,{headers:r,params:i}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(a){return new(a||n)(w(ob))};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=Ax();Tl(0,`h2`),cN(1,`Process request with Http Interceptor`),ag(),Tl(2,`p`,1),cN(3,`Edit response object by server with pattern expected by Http Interceptor:`),ag(),Tl(4,`po-code-editor`,2),ww(`ngModelChange`,function(p){return Ky(u),uN(i.requestMessage,p)||(i.requestMessage=p),Xy(p)}),ag(),a0(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),ww(`ngModelChange`,function(p){return Ky(u),uN(i.status,p)||(i.status=p),Xy(p)}),ht(`p-change`,function(){return i.changeOption()}),ag(),a0(),Tl(10,`po-radio-group`,5),ww(`ngModelChange`,function(p){return Ky(u),uN(i.headerParam,p)||(i.headerParam=p),Xy(p)}),ag(),a0(),ag(),Tl(11,`div`,6)(12,`po-button`,7),ht(`p-click`,function(){return i.processRequest()}),ag()(),Tl(13,`div`,6)(14,`po-button`,8),ht(`p-click`,function(){return i.restore()}),ag()()()}a&2&&(jp(4),Ew(`ngModel`,i.requestMessage),l0(),jp(5),Ew(`ngModel`,i.status),nw(`p-options`,i.statusOptions),l0(),jp(),Ew(`ngModel`,i.headerParam),nw(`p-options`,i.headerParamOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,L0e,ia],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n});var Y=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Http Interceptor Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-http-interceptor-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<h2>Process request with Http Interceptor</h2>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-http-interceptor-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-http-interceptor-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,oe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Q],encapsulation:2,changeDetection:1})}return n})();var Z=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Services`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoHttpInterceptorService`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`O `),Tl(13,`em`),cN(14,`interceptor`),ag(),cN(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),ag(),Tl(16,`p`),cN(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),ag(),Tl(18,`h2`),cN(19,`Configuração`),ag(),Tl(20,`p`),cN(21,`Para o correto funcionamento do interceptor `),Tl(22,`code`),cN(23,`po-http-interceptor`),ag(),cN(24,`, é necessário configurar o `),Tl(25,`code`),cN(26,`HttpClient`),ag(),cN(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Tl(28,`code`),cN(29,`provideHttpClient(withInterceptorsFromDi())`),ag(),cN(30,`.`),ag(),Tl(31,`h3`),cN(32,`1) NgModule`),ag(),Tl(33,`p`),cN(34,`No módulo principal da aplicação (geralmente `),Tl(35,`code`),cN(36,`AppModule`),ag(),cN(37,`), configure o `),Tl(38,`code`),cN(39,`HttpClient`),ag(),cN(40,`,
como no exemplo abaixo:`),ag(),Tl(41,`pre`)(42,`code`),cN(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),ag()(),Tl(44,`p`),cN(45,`Ao importar o módulo `),Tl(46,`code`),cN(47,`PoModule`),ag(),cN(48,` na aplicação, o `),Tl(49,`code`),cN(50,`po-http-interceptor`),ag(),cN(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ag(),Tl(52,`h3`),cN(53,`2) Standalone`),ag(),Tl(54,`p`),cN(55,`No arquivo contendo a configuração da aplicação (geralmente `),Tl(56,`code`),cN(57,`src/app/app.config.ts`),ag(),cN(58,`), adicione os providers e configure o `),Tl(59,`code`),cN(60,`HttpClient`),ag(),cN(61,`,
como no exemplo abaixo:`),ag(),Tl(62,`pre`)(63,`code`),cN(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),ag()(),Tl(65,`h2`),cN(66,`Como usar`),ag(),Tl(67,`p`),cN(68,`Ao realizar requisições utilize o `),Tl(69,`code`),cN(70,`HttpClient`),ag(),cN(71,`, conforme exemplo abaixo:`),ag(),Tl(72,`pre`)(73,`code`),cN(74,`import { HttpClient } from '@angular/common/http';

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
`),ag()(),Tl(75,`p`),cN(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),ag(),Tl(77,`h3`),cN(78,`Estrutura das mensagens`),ag(),Tl(79,`h4`),cN(80,`Mensagens de sucesso `),Tl(81,`code`),cN(82,`2xx`),ag()(),Tl(83,`p`),cN(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Tl(85,`code`),cN(86,`_messages`),ag(),cN(87,` no objeto de retorno.
Por exemplo:`),ag(),Tl(88,`pre`)(89,`code`),cN(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),ag()(),Tl(91,`h4`),cN(92,`Mensagens de erro `),Tl(93,`code`),cN(94,`4xx`),ag(),cN(95,` ou `),Tl(96,`code`),cN(97,`5xx`),ag()(),Tl(98,`p`),cN(99,`Ao retornar erro, o objeto não necessita ter `),Tl(100,`code`),cN(101,`_messages`),ag(),cN(102,`, deve-se retornar o objeto diretamente:`),ag(),Tl(103,`pre`)(104,`code`),cN(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),ag()(),Tl(106,`p`),cN(107,`Também é possível informar as seguintes propriedades:`),ag(),Tl(108,`ul`)(109,`li`)(110,`code`),cN(111,`helpUrl`),ag(),cN(112,`: link para a documentação do erro;`),Tl(113,`ul`)(114,`li`),cN(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Tl(116,`code`),cN(117,`detailedMessage`),ag(),cN(118,`.`),ag()()(),Tl(119,`li`)(120,`code`),cN(121,`type`),ag(),cN(122,`: É possível informar `),Tl(123,`code`),cN(124,`error`),ag(),cN(125,`, `),Tl(126,`code`),cN(127,`warning`),ag(),cN(128,` e `),Tl(129,`code`),cN(130,`information`),ag(),cN(131,`, sendo `),Tl(132,`code`),cN(133,`error`),ag(),cN(134,` o valor padrão.`),ag(),Tl(135,`li`)(136,`code`),cN(137,`details`),ag(),cN(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),ag(),Tl(139,`li`)(140,`code`),cN(141,`detailTitle`),ag(),cN(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Tl(143,`code`),cN(144,`code - message`),ag()()(),Tl(145,`blockquote`)(146,`p`),cN(147,`Veja o `),Tl(148,`a`,6),cN(149,`Guia de implementação de APIs`),ag(),cN(150,` para mais detalhes sobre a estrutura das mensagens.`),ag()(),Tl(151,`h3`),cN(152,`Cabeçalho`),ag(),Tl(153,`p`),cN(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Tl(155,`code`),cN(156,`true`),ag(),cN(157,`:`),ag(),Tl(158,`ul`)(159,`li`)(160,`p`)(161,`code`),cN(162,`X-PO-No-Message`),ag(),cN(163,`: Não exibe notificações de erro e/ou sucesso.`),ag()(),Tl(164,`li`)(165,`p`)(166,`code`),cN(167,`X-PO-No-Error`),ag(),cN(168,`: Não mostra notificações de erro com códigos `),Tl(169,`code`),cN(170,`4xx`),ag(),cN(171,` e `),Tl(172,`code`),cN(173,`5xx`),ag(),cN(174,`.`),ag()()(),Tl(175,`pre`)(176,`code`),cN(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ag()(),Tl(178,`blockquote`)(179,`p`),cN(180,`Após a validação no `),Tl(181,`em`),cN(182,`interceptor`),ag(),cN(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),ag()()()())},encapsulation:2,changeDetection:1})}return n})();var ae=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-http-interceptor-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-http-interceptor-labs-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Y,Z],encapsulation:2,changeDetection:1})}return n})()}];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(ae),bL]})}return n})();var _e=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};