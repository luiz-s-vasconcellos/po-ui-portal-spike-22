import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Si as db,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,d as ia,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),a=JSON.parse(this.requestMessage),i={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,a,{headers:r,params:i}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(a){return new(a||n)(w(db))};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=Vx();Ml(0,`h2`),mN(1,`Process request with Http Interceptor`),lg(),Ml(2,`p`,1),mN(3,`Edit response object by server with pattern expected by Http Interceptor:`),lg(),Ml(4,`po-code-editor`,2),Mw(`ngModelChange`,function(p){return Qy(u),yN(i.requestMessage,p)||(i.requestMessage=p),Jy(p)}),lg(),f0(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),Mw(`ngModelChange`,function(p){return Qy(u),yN(i.status,p)||(i.status=p),Jy(p)}),ht(`p-change`,function(){return i.changeOption()}),lg(),f0(),Ml(10,`po-radio-group`,5),Mw(`ngModelChange`,function(p){return Qy(u),yN(i.headerParam,p)||(i.headerParam=p),Jy(p)}),lg(),f0(),lg(),Ml(11,`div`,6)(12,`po-button`,7),ht(`p-click`,function(){return i.processRequest()}),lg()(),Ml(13,`div`,6)(14,`po-button`,8),ht(`p-click`,function(){return i.restore()}),lg()()()}a&2&&(Up(4),Tw(`ngModel`,i.requestMessage),p0(),Up(5),Tw(`ngModel`,i.status),cw(`p-options`,i.statusOptions),p0(),Up(),Tw(`ngModel`,i.headerParam),cw(`p-options`,i.headerParamOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,q0e,ia],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n});var Y=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Http Interceptor Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-http-interceptor-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<h2>Process request with Http Interceptor</h2>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-http-interceptor-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-http-interceptor-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,oe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Q],encapsulation:2,changeDetection:1})}return n})();var Z=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Services`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoHttpInterceptorService`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`O `),Ml(13,`em`),mN(14,`interceptor`),lg(),mN(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),lg(),Ml(16,`p`),mN(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),lg(),Ml(18,`h2`),mN(19,`Configuração`),lg(),Ml(20,`p`),mN(21,`Para o correto funcionamento do interceptor `),Ml(22,`code`),mN(23,`po-http-interceptor`),lg(),mN(24,`, é necessário configurar o `),Ml(25,`code`),mN(26,`HttpClient`),lg(),mN(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Ml(28,`code`),mN(29,`provideHttpClient(withInterceptorsFromDi())`),lg(),mN(30,`.`),lg(),Ml(31,`h3`),mN(32,`1) NgModule`),lg(),Ml(33,`p`),mN(34,`No módulo principal da aplicação (geralmente `),Ml(35,`code`),mN(36,`AppModule`),lg(),mN(37,`), configure o `),Ml(38,`code`),mN(39,`HttpClient`),lg(),mN(40,`,
como no exemplo abaixo:`),lg(),Ml(41,`pre`)(42,`code`),mN(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),lg()(),Ml(44,`p`),mN(45,`Ao importar o módulo `),Ml(46,`code`),mN(47,`PoModule`),lg(),mN(48,` na aplicação, o `),Ml(49,`code`),mN(50,`po-http-interceptor`),lg(),mN(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),lg(),Ml(52,`h3`),mN(53,`2) Standalone`),lg(),Ml(54,`p`),mN(55,`No arquivo contendo a configuração da aplicação (geralmente `),Ml(56,`code`),mN(57,`src/app/app.config.ts`),lg(),mN(58,`), adicione os providers e configure o `),Ml(59,`code`),mN(60,`HttpClient`),lg(),mN(61,`,
como no exemplo abaixo:`),lg(),Ml(62,`pre`)(63,`code`),mN(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),lg()(),Ml(65,`h2`),mN(66,`Como usar`),lg(),Ml(67,`p`),mN(68,`Ao realizar requisições utilize o `),Ml(69,`code`),mN(70,`HttpClient`),lg(),mN(71,`, conforme exemplo abaixo:`),lg(),Ml(72,`pre`)(73,`code`),mN(74,`import { HttpClient } from '@angular/common/http';

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
`),lg()(),Ml(75,`p`),mN(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),lg(),Ml(77,`h3`),mN(78,`Estrutura das mensagens`),lg(),Ml(79,`h4`),mN(80,`Mensagens de sucesso `),Ml(81,`code`),mN(82,`2xx`),lg()(),Ml(83,`p`),mN(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Ml(85,`code`),mN(86,`_messages`),lg(),mN(87,` no objeto de retorno.
Por exemplo:`),lg(),Ml(88,`pre`)(89,`code`),mN(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),lg()(),Ml(91,`h4`),mN(92,`Mensagens de erro `),Ml(93,`code`),mN(94,`4xx`),lg(),mN(95,` ou `),Ml(96,`code`),mN(97,`5xx`),lg()(),Ml(98,`p`),mN(99,`Ao retornar erro, o objeto não necessita ter `),Ml(100,`code`),mN(101,`_messages`),lg(),mN(102,`, deve-se retornar o objeto diretamente:`),lg(),Ml(103,`pre`)(104,`code`),mN(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),lg()(),Ml(106,`p`),mN(107,`Também é possível informar as seguintes propriedades:`),lg(),Ml(108,`ul`)(109,`li`)(110,`code`),mN(111,`helpUrl`),lg(),mN(112,`: link para a documentação do erro;`),Ml(113,`ul`)(114,`li`),mN(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Ml(116,`code`),mN(117,`detailedMessage`),lg(),mN(118,`.`),lg()()(),Ml(119,`li`)(120,`code`),mN(121,`type`),lg(),mN(122,`: É possível informar `),Ml(123,`code`),mN(124,`error`),lg(),mN(125,`, `),Ml(126,`code`),mN(127,`warning`),lg(),mN(128,` e `),Ml(129,`code`),mN(130,`information`),lg(),mN(131,`, sendo `),Ml(132,`code`),mN(133,`error`),lg(),mN(134,` o valor padrão.`),lg(),Ml(135,`li`)(136,`code`),mN(137,`details`),lg(),mN(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),lg(),Ml(139,`li`)(140,`code`),mN(141,`detailTitle`),lg(),mN(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Ml(143,`code`),mN(144,`code - message`),lg()()(),Ml(145,`blockquote`)(146,`p`),mN(147,`Veja o `),Ml(148,`a`,6),mN(149,`Guia de implementação de APIs`),lg(),mN(150,` para mais detalhes sobre a estrutura das mensagens.`),lg()(),Ml(151,`h3`),mN(152,`Cabeçalho`),lg(),Ml(153,`p`),mN(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Ml(155,`code`),mN(156,`true`),lg(),mN(157,`:`),lg(),Ml(158,`ul`)(159,`li`)(160,`p`)(161,`code`),mN(162,`X-PO-No-Message`),lg(),mN(163,`: Não exibe notificações de erro e/ou sucesso.`),lg()(),Ml(164,`li`)(165,`p`)(166,`code`),mN(167,`X-PO-No-Error`),lg(),mN(168,`: Não mostra notificações de erro com códigos `),Ml(169,`code`),mN(170,`4xx`),lg(),mN(171,` e `),Ml(172,`code`),mN(173,`5xx`),lg(),mN(174,`.`),lg()()(),Ml(175,`pre`)(176,`code`),mN(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),lg()(),Ml(178,`blockquote`)(179,`p`),mN(180,`Após a validação no `),Ml(181,`em`),mN(182,`interceptor`),lg(),mN(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),lg()()()())},encapsulation:2,changeDetection:1})}return n})();var ae=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-http-interceptor-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-http-interceptor-labs-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Y,Z],encapsulation:2,changeDetection:1})}return n})()}];var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(ae),NL]})}return n})();var _e=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};