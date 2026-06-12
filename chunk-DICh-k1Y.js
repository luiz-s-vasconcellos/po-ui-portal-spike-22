import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,t as tb,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,cc as Nde,ba as sr,aB as gx,Q as Cl,z as qx,T as og,aM as gw,aN as Z0,R as Hl,a1 as dt,H as Lp,aO as pw,aP as X0,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,ar as Fx,au as dg,bw as oN,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(r){return new(r||n)(w(tb))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let u=gx();Cl(0,"h2"),qx(1,"Process request with Http Interceptor"),og(),Cl(2,"p",1),qx(3,"Edit response object by server with pattern expected by Http Interceptor:"),og(),Cl(4,"po-code-editor",2),gw("ngModelChange",function(p){return Jy(u),Zx(i.requestMessage,p)||(i.requestMessage=p),e_(p)}),og(),Z0(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),gw("ngModelChange",function(p){return Jy(u),Zx(i.status,p)||(i.status=p),e_(p)}),dt("p-change",function(){return i.changeOption()}),og(),Z0(),Cl(10,"po-radio-group",5),gw("ngModelChange",function(p){return Jy(u),Zx(i.headerParam,p)||(i.headerParam=p),e_(p)}),og(),Z0(),og(),Cl(11,"div",6)(12,"po-button",7),dt("p-click",function(){return i.processRequest()}),og()(),Cl(13,"div",6)(14,"po-button",8),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(Lp(4),pw("ngModel",i.requestMessage),X0(),Lp(5),pw("ngModel",i.status),ZE("p-options",i.statusOptions),X0(),Lp(),pw("ngModel",i.headerParam),ZE("p-options",i.headerParamOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,Nde,sr],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Http Interceptor Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-http-interceptor-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<h2>Process request with Http Interceptor</h2>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-http-interceptor-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-http-interceptor-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,oe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Q],encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:190,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Services"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoHttpInterceptorService"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"O "),Cl(13,"em"),qx(14,"interceptor"),og(),qx(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),og(),Cl(16,"p"),qx(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),og(),Cl(18,"h2"),qx(19,"Configura\xE7\xE3o"),og(),Cl(20,"p"),qx(21,"Para o correto funcionamento do interceptor "),Cl(22,"code"),qx(23,"po-http-interceptor"),og(),qx(24,", deve ser importado o "),Cl(25,"code"),qx(26,"BrowserAnimationsModule"),og(),qx(27,` na
aplica\xE7\xE3o. Al\xE9m disso, \xE9 necess\xE1rio configurar o `),Cl(28,"code"),qx(29,"HttpClient"),og(),qx(30,` para utilizar os interceptors registrados via Dependency
Injection (DI) por meio da fun\xE7\xE3o `),Cl(31,"code"),qx(32,"provideHttpClient(withInterceptorsFromDi())"),og(),qx(33,"."),og(),Cl(34,"h3"),qx(35,"1) NgModule"),og(),Cl(36,"p"),qx(37,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),Cl(38,"code"),qx(39,"AppModule"),og(),qx(40,"), importe o "),Cl(41,"code"),qx(42,"BrowserAnimationsModule"),og(),qx(43," e configure o "),Cl(44,"code"),qx(45,"HttpClient"),og(),qx(46,`,
como no exemplo abaixo:`),og(),Cl(47,"pre")(48,"code"),qx(49,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),og()(),Cl(50,"p"),qx(51,"Ao importar o m\xF3dulo "),Cl(52,"code"),qx(53,"PoModule"),og(),qx(54," na aplica\xE7\xE3o, o "),Cl(55,"code"),qx(56,"po-http-interceptor"),og(),qx(57,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Cl(58,"h3"),qx(59,"2) Standalone"),og(),Cl(60,"p"),qx(61,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Cl(62,"code"),qx(63,"src/app/app.config.ts"),og(),qx(64,"), adicione os providers e configure o "),Cl(65,"code"),qx(66,"HttpClient"),og(),qx(67,`,
como no exemplo abaixo:`),og(),Cl(68,"pre")(69,"code"),qx(70,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),og()(),Cl(71,"h2"),qx(72,"Como usar"),og(),Cl(73,"p"),qx(74,"Ao realizar requisi\xE7\xF5es utilize o "),Cl(75,"code"),qx(76,"HttpClient"),og(),qx(77,", conforme exemplo abaixo:"),og(),Cl(78,"pre")(79,"code"),qx(80,`import { HttpClient } from '@angular/common/http';

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
`),og()(),Cl(81,"p"),qx(82,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),og(),Cl(83,"h3"),qx(84,"Estrutura das mensagens"),og(),Cl(85,"h4"),qx(86,"Mensagens de sucesso "),Cl(87,"code"),qx(88,"2xx"),og()(),Cl(89,"p"),qx(90,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),Cl(91,"code"),qx(92,"_messages"),og(),qx(93,` no objeto de retorno.
Por exemplo:`),og(),Cl(94,"pre")(95,"code"),qx(96,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),og()(),Cl(97,"h4"),qx(98,"Mensagens de erro "),Cl(99,"code"),qx(100,"4xx"),og(),qx(101," ou "),Cl(102,"code"),qx(103,"5xx"),og()(),Cl(104,"p"),qx(105,"Ao retornar erro, o objeto n\xE3o necessita ter "),Cl(106,"code"),qx(107,"_messages"),og(),qx(108,", deve-se retornar o objeto diretamente:"),og(),Cl(109,"pre")(110,"code"),qx(111,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),og()(),Cl(112,"p"),qx(113,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),og(),Cl(114,"ul")(115,"li")(116,"code"),qx(117,"helpUrl"),og(),qx(118,": link para a documenta\xE7\xE3o do erro;"),Cl(119,"ul")(120,"li"),qx(121,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),Cl(122,"code"),qx(123,"detailedMessage"),og(),qx(124,"."),og()()(),Cl(125,"li")(126,"code"),qx(127,"type"),og(),qx(128,": \xC9 poss\xEDvel informar "),Cl(129,"code"),qx(130,"error"),og(),qx(131,", "),Cl(132,"code"),qx(133,"warning"),og(),qx(134," e "),Cl(135,"code"),qx(136,"information"),og(),qx(137,", sendo "),Cl(138,"code"),qx(139,"error"),og(),qx(140," o valor padr\xE3o."),og(),Cl(141,"li")(142,"code"),qx(143,"details"),og(),qx(144,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),og(),Cl(145,"li")(146,"code"),qx(147,"detailTitle"),og(),qx(148,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),Cl(149,"code"),qx(150,"code - message"),og()()(),Cl(151,"blockquote")(152,"p"),qx(153,"Veja o "),Cl(154,"a",6),qx(155,"Guia de implementa\xE7\xE3o de APIs"),og(),qx(156," para mais detalhes sobre a estrutura das mensagens."),og()(),Cl(157,"h3"),qx(158,"Cabe\xE7alho"),og(),Cl(159,"p"),qx(160,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Cl(161,"code"),qx(162,"true"),og(),qx(163,":"),og(),Cl(164,"ul")(165,"li")(166,"p")(167,"code"),qx(168,"X-PO-No-Message"),og(),qx(169,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),og()(),Cl(170,"li")(171,"p")(172,"code"),qx(173,"X-PO-No-Error"),og(),qx(174,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),Cl(175,"code"),qx(176,"4xx"),og(),qx(177," e "),Cl(178,"code"),qx(179,"5xx"),og(),qx(180,"."),og()()(),Cl(181,"pre")(182,"code"),qx(183,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Cl(184,"blockquote")(185,"p"),qx(186,"Ap\xF3s a valida\xE7\xE3o no "),Cl(187,"em"),qx(188,"interceptor"),og(),qx(189,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),og()()()());},encapsulation:2})}return n})();var $=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-http-interceptor-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-http-interceptor-labs-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Y,Z],encapsulation:2})}return n})();var re=[{path:"",component:$}],ee=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(re),bL]})}return n})();var we=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,ee]})}return n})();export{we as DocPoHttpInterceptorModule};