import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,r as rb,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c8 as Pde,bb as ia,aB as Ex,H as Sl,J as Jx,O as sg,aM as Ew,aN as JA,M as Wl,a1 as ht,z as Vp,aO as Dw,aP as t0,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,ar as Hx,au as fg,bs as dN,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(r){return new(r||n)(C(rb))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let u=Ex();Sl(0,"h2"),Jx(1,"Process request with Http Interceptor"),sg(),Sl(2,"p",1),Jx(3,"Edit response object by server with pattern expected by Http Interceptor:"),sg(),Sl(4,"po-code-editor",2),Ew("ngModelChange",function(p){return Xy(u),tN(i.requestMessage,p)||(i.requestMessage=p),Qy(p)}),sg(),JA(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),Ew("ngModelChange",function(p){return Xy(u),tN(i.status,p)||(i.status=p),Qy(p)}),ht("p-change",function(){return i.changeOption()}),sg(),JA(),Sl(10,"po-radio-group",5),Ew("ngModelChange",function(p){return Xy(u),tN(i.headerParam,p)||(i.headerParam=p),Qy(p)}),sg(),JA(),sg(),Sl(11,"div",6)(12,"po-button",7),ht("p-click",function(){return i.processRequest()}),sg()(),Sl(13,"div",6)(14,"po-button",8),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Vp(4),Dw("ngModel",i.requestMessage),t0(),Vp(5),Dw("ngModel",i.status),tw("p-options",i.statusOptions),t0(),Vp(),Dw("ngModel",i.headerParam),tw("p-options",i.headerParamOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,Pde,ia],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Http Interceptor Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-http-interceptor-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<h2>Process request with Http Interceptor</h2>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-http-interceptor-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-http-interceptor-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,oe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Q],encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:184,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),sg()(),Wl(4,"div",2),Sl(5,"h3",3),Jx(6,"Services"),sg(),Sl(7,"h4",4)(8,"code",5),Jx(9,"PoHttpInterceptorService"),sg()(),Sl(10,"div",2)(11,"p"),Jx(12,"O "),Sl(13,"em"),Jx(14,"interceptor"),sg(),Jx(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),sg(),Sl(16,"p"),Jx(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),sg(),Sl(18,"h2"),Jx(19,"Configura\xE7\xE3o"),sg(),Sl(20,"p"),Jx(21,"Para o correto funcionamento do interceptor "),Sl(22,"code"),Jx(23,"po-http-interceptor"),sg(),Jx(24,", \xE9 necess\xE1rio configurar o "),Sl(25,"code"),Jx(26,"HttpClient"),sg(),Jx(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Sl(28,"code"),Jx(29,"provideHttpClient(withInterceptorsFromDi())"),sg(),Jx(30,"."),sg(),Sl(31,"h3"),Jx(32,"1) NgModule"),sg(),Sl(33,"p"),Jx(34,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),Sl(35,"code"),Jx(36,"AppModule"),sg(),Jx(37,"), configure o "),Sl(38,"code"),Jx(39,"HttpClient"),sg(),Jx(40,`,
como no exemplo abaixo:`),sg(),Sl(41,"pre")(42,"code"),Jx(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),sg()(),Sl(44,"p"),Jx(45,"Ao importar o m\xF3dulo "),Sl(46,"code"),Jx(47,"PoModule"),sg(),Jx(48," na aplica\xE7\xE3o, o "),Sl(49,"code"),Jx(50,"po-http-interceptor"),sg(),Jx(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),sg(),Sl(52,"h3"),Jx(53,"2) Standalone"),sg(),Sl(54,"p"),Jx(55,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Sl(56,"code"),Jx(57,"src/app/app.config.ts"),sg(),Jx(58,"), adicione os providers e configure o "),Sl(59,"code"),Jx(60,"HttpClient"),sg(),Jx(61,`,
como no exemplo abaixo:`),sg(),Sl(62,"pre")(63,"code"),Jx(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),sg()(),Sl(65,"h2"),Jx(66,"Como usar"),sg(),Sl(67,"p"),Jx(68,"Ao realizar requisi\xE7\xF5es utilize o "),Sl(69,"code"),Jx(70,"HttpClient"),sg(),Jx(71,", conforme exemplo abaixo:"),sg(),Sl(72,"pre")(73,"code"),Jx(74,`import { HttpClient } from '@angular/common/http';

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
`),sg()(),Sl(75,"p"),Jx(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),sg(),Sl(77,"h3"),Jx(78,"Estrutura das mensagens"),sg(),Sl(79,"h4"),Jx(80,"Mensagens de sucesso "),Sl(81,"code"),Jx(82,"2xx"),sg()(),Sl(83,"p"),Jx(84,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),Sl(85,"code"),Jx(86,"_messages"),sg(),Jx(87,` no objeto de retorno.
Por exemplo:`),sg(),Sl(88,"pre")(89,"code"),Jx(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),sg()(),Sl(91,"h4"),Jx(92,"Mensagens de erro "),Sl(93,"code"),Jx(94,"4xx"),sg(),Jx(95," ou "),Sl(96,"code"),Jx(97,"5xx"),sg()(),Sl(98,"p"),Jx(99,"Ao retornar erro, o objeto n\xE3o necessita ter "),Sl(100,"code"),Jx(101,"_messages"),sg(),Jx(102,", deve-se retornar o objeto diretamente:"),sg(),Sl(103,"pre")(104,"code"),Jx(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),sg()(),Sl(106,"p"),Jx(107,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),sg(),Sl(108,"ul")(109,"li")(110,"code"),Jx(111,"helpUrl"),sg(),Jx(112,": link para a documenta\xE7\xE3o do erro;"),Sl(113,"ul")(114,"li"),Jx(115,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),Sl(116,"code"),Jx(117,"detailedMessage"),sg(),Jx(118,"."),sg()()(),Sl(119,"li")(120,"code"),Jx(121,"type"),sg(),Jx(122,": \xC9 poss\xEDvel informar "),Sl(123,"code"),Jx(124,"error"),sg(),Jx(125,", "),Sl(126,"code"),Jx(127,"warning"),sg(),Jx(128," e "),Sl(129,"code"),Jx(130,"information"),sg(),Jx(131,", sendo "),Sl(132,"code"),Jx(133,"error"),sg(),Jx(134," o valor padr\xE3o."),sg(),Sl(135,"li")(136,"code"),Jx(137,"details"),sg(),Jx(138,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),sg(),Sl(139,"li")(140,"code"),Jx(141,"detailTitle"),sg(),Jx(142,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),Sl(143,"code"),Jx(144,"code - message"),sg()()(),Sl(145,"blockquote")(146,"p"),Jx(147,"Veja o "),Sl(148,"a",6),Jx(149,"Guia de implementa\xE7\xE3o de APIs"),sg(),Jx(150," para mais detalhes sobre a estrutura das mensagens."),sg()(),Sl(151,"h3"),Jx(152,"Cabe\xE7alho"),sg(),Sl(153,"p"),Jx(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Sl(155,"code"),Jx(156,"true"),sg(),Jx(157,":"),sg(),Sl(158,"ul")(159,"li")(160,"p")(161,"code"),Jx(162,"X-PO-No-Message"),sg(),Jx(163,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),sg()(),Sl(164,"li")(165,"p")(166,"code"),Jx(167,"X-PO-No-Error"),sg(),Jx(168,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),Sl(169,"code"),Jx(170,"4xx"),sg(),Jx(171," e "),Sl(172,"code"),Jx(173,"5xx"),sg(),Jx(174,"."),sg()()(),Sl(175,"pre")(176,"code"),Jx(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Sl(178,"blockquote")(179,"p"),Jx(180,"Ap\xF3s a valida\xE7\xE3o no "),Sl(181,"em"),Jx(182,"interceptor"),sg(),Jx(183,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),sg()()()());},encapsulation:2})}return n})();var $=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-http-interceptor-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-http-interceptor-labs-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Y,Z],encapsulation:2})}return n})();var re=[{path:"",component:$}],ee=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(re),pL]})}return n})();var _e=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};