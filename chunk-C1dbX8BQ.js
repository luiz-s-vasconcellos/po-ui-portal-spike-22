import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,K as KC,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bB as ga,aV as Nh,al as lx,J as wl,z as Ux,R as ng,am as pw,an as $0,N as Ul,a1 as ut,P as Pp,ap as hw,aq as G0,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,bw as Ax,aY as cg,bi as Jx,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var K=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(r){return new(r||n)(C(KC))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let u=lx();wl(0,"h2"),Ux(1,"Process request with Http Interceptor"),ng(),wl(2,"p",1),Ux(3,"Edit response object by server with pattern expected by Http Interceptor:"),ng(),wl(4,"po-code-editor",2),pw("ngModelChange",function(p){return Qy(u),$x(i.requestMessage,p)||(i.requestMessage=p),Jy(p)}),ng(),$0(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),pw("ngModelChange",function(p){return Qy(u),$x(i.status,p)||(i.status=p),Jy(p)}),ut("p-change",function(){return i.changeOption()}),ng(),$0(),wl(10,"po-radio-group",5),pw("ngModelChange",function(p){return Qy(u),$x(i.headerParam,p)||(i.headerParam=p),Jy(p)}),ng(),$0(),ng(),wl(11,"div",6)(12,"po-button",7),ut("p-click",function(){return i.processRequest()}),ng()(),wl(13,"div",6)(14,"po-button",8),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(Pp(4),hw("ngModel",i.requestMessage),G0(),Pp(5),hw("ngModel",i.status),YE("p-options",i.statusOptions),G0(),Pp(),hw("ngModel",i.headerParam),YE("p-options",i.headerParamOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ga,Nh],encapsulation:2,changeDetection:1})}return n})();var ne=n=>({"docs-sample-code-tabs":n}),Q=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Http Interceptor Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-http-interceptor-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<h2>Process request with Http Interceptor</h2>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-http-interceptor-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-http-interceptor-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ne,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,K],encapsulation:2})}return n})();var Y=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:190,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Services"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoHttpInterceptorService"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"O "),wl(13,"em"),Ux(14,"interceptor"),ng(),Ux(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),ng(),wl(16,"p"),Ux(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),ng(),wl(18,"h2"),Ux(19,"Configura\xE7\xE3o"),ng(),wl(20,"p"),Ux(21,"Para o correto funcionamento do interceptor "),wl(22,"code"),Ux(23,"po-http-interceptor"),ng(),Ux(24,", deve ser importado o "),wl(25,"code"),Ux(26,"BrowserAnimationsModule"),ng(),Ux(27,` na
aplica\xE7\xE3o. Al\xE9m disso, \xE9 necess\xE1rio configurar o `),wl(28,"code"),Ux(29,"HttpClient"),ng(),Ux(30,` para utilizar os interceptors registrados via Dependency
Injection (DI) por meio da fun\xE7\xE3o `),wl(31,"code"),Ux(32,"provideHttpClient(withInterceptorsFromDi())"),ng(),Ux(33,"."),ng(),wl(34,"h3"),Ux(35,"1) NgModule"),ng(),wl(36,"p"),Ux(37,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),wl(38,"code"),Ux(39,"AppModule"),ng(),Ux(40,"), importe o "),wl(41,"code"),Ux(42,"BrowserAnimationsModule"),ng(),Ux(43," e configure o "),wl(44,"code"),Ux(45,"HttpClient"),ng(),Ux(46,`,
como no exemplo abaixo:`),ng(),wl(47,"pre")(48,"code"),Ux(49,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
`),ng()(),wl(50,"p"),Ux(51,"Ao importar o m\xF3dulo "),wl(52,"code"),Ux(53,"PoModule"),ng(),Ux(54," na aplica\xE7\xE3o, o "),wl(55,"code"),Ux(56,"po-http-interceptor"),ng(),Ux(57,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),ng(),wl(58,"h3"),Ux(59,"2) Standalone"),ng(),wl(60,"p"),Ux(61,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),wl(62,"code"),Ux(63,"src/app/app.config.ts"),ng(),Ux(64,"), adicione os providers e configure o "),wl(65,"code"),Ux(66,"HttpClient"),ng(),Ux(67,`,
como no exemplo abaixo:`),ng(),wl(68,"pre")(69,"code"),Ux(70,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpInterceptorModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpInterceptorModule
    ]),
    ...
  ]
};
`),ng()(),wl(71,"h2"),Ux(72,"Como usar"),ng(),wl(73,"p"),Ux(74,"Ao realizar requisi\xE7\xF5es utilize o "),wl(75,"code"),Ux(76,"HttpClient"),ng(),Ux(77,", conforme exemplo abaixo:"),ng(),wl(78,"pre")(79,"code"),Ux(80,`import { HttpClient } from '@angular/common/http';

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
`),ng()(),wl(81,"p"),Ux(82,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),ng(),wl(83,"h3"),Ux(84,"Estrutura das mensagens"),ng(),wl(85,"h4"),Ux(86,"Mensagens de sucesso "),wl(87,"code"),Ux(88,"2xx"),ng()(),wl(89,"p"),Ux(90,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),wl(91,"code"),Ux(92,"_messages"),ng(),Ux(93,` no objeto de retorno.
Por exemplo:`),ng(),wl(94,"pre")(95,"code"),Ux(96,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),ng()(),wl(97,"h4"),Ux(98,"Mensagens de erro "),wl(99,"code"),Ux(100,"4xx"),ng(),Ux(101," ou "),wl(102,"code"),Ux(103,"5xx"),ng()(),wl(104,"p"),Ux(105,"Ao retornar erro, o objeto n\xE3o necessita ter "),wl(106,"code"),Ux(107,"_messages"),ng(),Ux(108,", deve-se retornar o objeto diretamente:"),ng(),wl(109,"pre")(110,"code"),Ux(111,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),ng()(),wl(112,"p"),Ux(113,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),ng(),wl(114,"ul")(115,"li")(116,"code"),Ux(117,"helpUrl"),ng(),Ux(118,": link para a documenta\xE7\xE3o do erro;"),wl(119,"ul")(120,"li"),Ux(121,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),wl(122,"code"),Ux(123,"detailedMessage"),ng(),Ux(124,"."),ng()()(),wl(125,"li")(126,"code"),Ux(127,"type"),ng(),Ux(128,": \xC9 poss\xEDvel informar "),wl(129,"code"),Ux(130,"error"),ng(),Ux(131,", "),wl(132,"code"),Ux(133,"warning"),ng(),Ux(134," e "),wl(135,"code"),Ux(136,"information"),ng(),Ux(137,", sendo "),wl(138,"code"),Ux(139,"error"),ng(),Ux(140," o valor padr\xE3o."),ng(),wl(141,"li")(142,"code"),Ux(143,"details"),ng(),Ux(144,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),ng(),wl(145,"li")(146,"code"),Ux(147,"detailTitle"),ng(),Ux(148,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),wl(149,"code"),Ux(150,"code - message"),ng()()(),wl(151,"blockquote")(152,"p"),Ux(153,"Veja o "),wl(154,"a",6),Ux(155,"Guia de implementa\xE7\xE3o de APIs"),ng(),Ux(156," para mais detalhes sobre a estrutura das mensagens."),ng()(),wl(157,"h3"),Ux(158,"Cabe\xE7alho"),ng(),wl(159,"p"),Ux(160,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),wl(161,"code"),Ux(162,"true"),ng(),Ux(163,":"),ng(),wl(164,"ul")(165,"li")(166,"p")(167,"code"),Ux(168,"X-PO-No-Message"),ng(),Ux(169,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),ng()(),wl(170,"li")(171,"p")(172,"code"),Ux(173,"X-PO-No-Error"),ng(),Ux(174,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),wl(175,"code"),Ux(176,"4xx"),ng(),Ux(177," e "),wl(178,"code"),Ux(179,"5xx"),ng(),Ux(180,"."),ng()()(),wl(181,"pre")(182,"code"),Ux(183,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),ng()(),wl(184,"blockquote")(185,"p"),Ux(186,"Ap\xF3s a valida\xE7\xE3o no "),wl(187,"em"),Ux(188,"interceptor"),ng(),Ux(189,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),ng()()()());},encapsulation:2})}return n})();var Z=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-http-interceptor-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-http-interceptor-labs-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,Q,Y],encapsulation:2})}return n})();var ae=[{path:"",component:Z}],$=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(ae),vL]})}return n})();var Te=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,$]})}return n})();export{Te as DocPoHttpInterceptorModule};