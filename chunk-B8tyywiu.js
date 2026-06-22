import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,r as rb,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c8 as Sde,bb as ia,aB as Cx,T as Tl,z as tN,L as sg,aM as Ew,aN as t0,J as Gl,a1 as ht,F as Vp,aO as Dw,aP as r0,M as tw,an as TO,aH as Ga,b8 as Hme,b9 as Gme,ar as zx,au as fg,bs as hN,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(r){return new(r||n)(w(rb))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let u=Cx();Tl(0,"h2"),tN(1,"Process request with Http Interceptor"),sg(),Tl(2,"p",1),tN(3,"Edit response object by server with pattern expected by Http Interceptor:"),sg(),Tl(4,"po-code-editor",2),Ew("ngModelChange",function(p){return Ky(u),rN(i.requestMessage,p)||(i.requestMessage=p),Xy(p)}),sg(),t0(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),Ew("ngModelChange",function(p){return Ky(u),rN(i.status,p)||(i.status=p),Xy(p)}),ht("p-change",function(){return i.changeOption()}),sg(),t0(),Tl(10,"po-radio-group",5),Ew("ngModelChange",function(p){return Ky(u),rN(i.headerParam,p)||(i.headerParam=p),Xy(p)}),sg(),t0(),sg(),Tl(11,"div",6)(12,"po-button",7),ht("p-click",function(){return i.processRequest()}),sg()(),Tl(13,"div",6)(14,"po-button",8),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Vp(4),Dw("ngModel",i.requestMessage),r0(),Vp(5),Dw("ngModel",i.status),tw("p-options",i.statusOptions),r0(),Vp(),Dw("ngModel",i.headerParam),tw("p-options",i.headerParamOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,Sde,ia],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Http Interceptor Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-http-interceptor-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<h2>Process request with Http Interceptor</h2>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-http-interceptor-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-http-interceptor-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,oe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Q],encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:184,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),tN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),tN(9,"PoHttpInterceptorService"),sg()(),Tl(10,"div",2)(11,"p"),tN(12,"O "),Tl(13,"em"),tN(14,"interceptor"),sg(),tN(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),sg(),Tl(16,"p"),tN(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),sg(),Tl(18,"h2"),tN(19,"Configura\xE7\xE3o"),sg(),Tl(20,"p"),tN(21,"Para o correto funcionamento do interceptor "),Tl(22,"code"),tN(23,"po-http-interceptor"),sg(),tN(24,", \xE9 necess\xE1rio configurar o "),Tl(25,"code"),tN(26,"HttpClient"),sg(),tN(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Tl(28,"code"),tN(29,"provideHttpClient(withInterceptorsFromDi())"),sg(),tN(30,"."),sg(),Tl(31,"h3"),tN(32,"1) NgModule"),sg(),Tl(33,"p"),tN(34,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),Tl(35,"code"),tN(36,"AppModule"),sg(),tN(37,"), configure o "),Tl(38,"code"),tN(39,"HttpClient"),sg(),tN(40,`,
como no exemplo abaixo:`),sg(),Tl(41,"pre")(42,"code"),tN(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),sg()(),Tl(44,"p"),tN(45,"Ao importar o m\xF3dulo "),Tl(46,"code"),tN(47,"PoModule"),sg(),tN(48," na aplica\xE7\xE3o, o "),Tl(49,"code"),tN(50,"po-http-interceptor"),sg(),tN(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),sg(),Tl(52,"h3"),tN(53,"2) Standalone"),sg(),Tl(54,"p"),tN(55,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Tl(56,"code"),tN(57,"src/app/app.config.ts"),sg(),tN(58,"), adicione os providers e configure o "),Tl(59,"code"),tN(60,"HttpClient"),sg(),tN(61,`,
como no exemplo abaixo:`),sg(),Tl(62,"pre")(63,"code"),tN(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),sg()(),Tl(65,"h2"),tN(66,"Como usar"),sg(),Tl(67,"p"),tN(68,"Ao realizar requisi\xE7\xF5es utilize o "),Tl(69,"code"),tN(70,"HttpClient"),sg(),tN(71,", conforme exemplo abaixo:"),sg(),Tl(72,"pre")(73,"code"),tN(74,`import { HttpClient } from '@angular/common/http';

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
`),sg()(),Tl(75,"p"),tN(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),sg(),Tl(77,"h3"),tN(78,"Estrutura das mensagens"),sg(),Tl(79,"h4"),tN(80,"Mensagens de sucesso "),Tl(81,"code"),tN(82,"2xx"),sg()(),Tl(83,"p"),tN(84,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),Tl(85,"code"),tN(86,"_messages"),sg(),tN(87,` no objeto de retorno.
Por exemplo:`),sg(),Tl(88,"pre")(89,"code"),tN(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),sg()(),Tl(91,"h4"),tN(92,"Mensagens de erro "),Tl(93,"code"),tN(94,"4xx"),sg(),tN(95," ou "),Tl(96,"code"),tN(97,"5xx"),sg()(),Tl(98,"p"),tN(99,"Ao retornar erro, o objeto n\xE3o necessita ter "),Tl(100,"code"),tN(101,"_messages"),sg(),tN(102,", deve-se retornar o objeto diretamente:"),sg(),Tl(103,"pre")(104,"code"),tN(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),sg()(),Tl(106,"p"),tN(107,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),sg(),Tl(108,"ul")(109,"li")(110,"code"),tN(111,"helpUrl"),sg(),tN(112,": link para a documenta\xE7\xE3o do erro;"),Tl(113,"ul")(114,"li"),tN(115,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),Tl(116,"code"),tN(117,"detailedMessage"),sg(),tN(118,"."),sg()()(),Tl(119,"li")(120,"code"),tN(121,"type"),sg(),tN(122,": \xC9 poss\xEDvel informar "),Tl(123,"code"),tN(124,"error"),sg(),tN(125,", "),Tl(126,"code"),tN(127,"warning"),sg(),tN(128," e "),Tl(129,"code"),tN(130,"information"),sg(),tN(131,", sendo "),Tl(132,"code"),tN(133,"error"),sg(),tN(134," o valor padr\xE3o."),sg(),Tl(135,"li")(136,"code"),tN(137,"details"),sg(),tN(138,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),sg(),Tl(139,"li")(140,"code"),tN(141,"detailTitle"),sg(),tN(142,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),Tl(143,"code"),tN(144,"code - message"),sg()()(),Tl(145,"blockquote")(146,"p"),tN(147,"Veja o "),Tl(148,"a",6),tN(149,"Guia de implementa\xE7\xE3o de APIs"),sg(),tN(150," para mais detalhes sobre a estrutura das mensagens."),sg()(),Tl(151,"h3"),tN(152,"Cabe\xE7alho"),sg(),Tl(153,"p"),tN(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Tl(155,"code"),tN(156,"true"),sg(),tN(157,":"),sg(),Tl(158,"ul")(159,"li")(160,"p")(161,"code"),tN(162,"X-PO-No-Message"),sg(),tN(163,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),sg()(),Tl(164,"li")(165,"p")(166,"code"),tN(167,"X-PO-No-Error"),sg(),tN(168,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),Tl(169,"code"),tN(170,"4xx"),sg(),tN(171," e "),Tl(172,"code"),tN(173,"5xx"),sg(),tN(174,"."),sg()()(),Tl(175,"pre")(176,"code"),tN(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),sg()(),Tl(178,"blockquote")(179,"p"),tN(180,"Ap\xF3s a valida\xE7\xE3o no "),Tl(181,"em"),tN(182,"interceptor"),sg(),tN(183,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),sg()()()());},encapsulation:2})}return n})();var $=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-http-interceptor-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-http-interceptor-labs-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Y,Z],encapsulation:2})}return n})();var re=[{path:"",component:$}],ee=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(re),vL]})}return n})();var _e=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};