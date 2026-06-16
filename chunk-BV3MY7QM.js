import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,dj as jn,dk as av,dl as Jn,J as wl,N as Ul,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,bd as na,aQ as dt,al as lx,am as pw,an as $0,ap as hw,aq as G0,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy,c3 as zo}from'./main-6SPFG3VI.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(wl(0,"div",0),Ul(1,"po-toaster",1),ng());},dependencies:[Jn],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Toaster Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-toaster-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,be,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return i})();var fe=["toasterRef"],pe=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=jn.Information;mode=av.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:jn.Success},{label:"Error",value:jn.Error},{label:"Warning",value:jn.Warning},{label:"Information",value:jn.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=jn.Information,this.mode=av.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&$l(zo,7)(fe,5),a&2){let m;uo(m=fo())&&(n.poModal=m.first),uo(m=fo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=lx();wl(0,"div",2),Ul(1,"po-toaster",3,0),ng(),Ul(3,"po-divider"),wl(4,"form",null,1)(6,"po-radio-group",4),pw("ngModelChange",function(l){return Qy(m),$x(n.type,l)||(n.type=l),Jy(l)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(l){return Qy(m),$x(n.message,l)||(n.message=l),Jy(l)}),ng(),$0(),wl(8,"po-input",6),pw("ngModelChange",function(l){return Qy(m),$x(n.supportMessage,l)||(n.supportMessage=l),Jy(l)}),ng(),$0(),wl(9,"po-switch",7),ut("p-change",function(){return n.changeAction()}),pw("ngModelChange",function(l){return Qy(m),$x(n.hasAction,l)||(n.hasAction=l),Jy(l)}),ng(),$0(),wl(10,"po-input",8),pw("ngModelChange",function(l){return Qy(m),$x(n.actionLabel,l)||(n.actionLabel=l),Jy(l)}),ng(),$0(),wl(11,"div",2)(12,"po-checkbox-group",9),pw("ngModelChange",function(l){return Qy(m),$x(n.properties,l)||(n.properties=l),Jy(l)}),ng(),$0(),wl(13,"po-radio-group",10),pw("ngModelChange",function(l){return Qy(m),$x(n.sizeActions,l)||(n.sizeActions=l),Jy(l)}),ng(),$0(),ng(),Ul(14,"po-divider"),wl(15,"div",2)(16,"po-button",11),ut("p-click",function(){return n.restore()}),ng()()(),wl(17,"po-modal",12),Ux(18," Notification Action "),ng();}a&2&&(Pp(),YE("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Pp(5),hw("ngModel",n.type),YE("p-options",n.typeOptions),G0(),Pp(),hw("ngModel",n.message),G0(),Pp(),hw("ngModel",n.supportMessage),G0(),Pp(),hw("ngModel",n.hasAction),G0(),Pp(),hw("ngModel",n.actionLabel),G0(),Pp(2),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.sizeActions),YE("p-options",n.sizeActionsOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,na,dt,Jn],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Toaster Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-toaster
    #toasterRef
    class="po-md-12"
    [p-size-actions]="sizeActions"
    [p-hide]="properties.includes('hide')"
    [p-mode]="mode"
    [p-message]="message"
    [p-support-message]="supportMessage"
    [p-type]="type"
    [p-show-close]="properties.includes('showClose')"
    [p-action]="action"
    [p-action-label]="actionLabel"
  ></po-toaster>
</div>

<po-divider />

<form #f="ngForm">
  <po-radio-group
    p-columns="4"
    p-label="Type"
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    [p-options]="typeOptions"
  ></po-radio-group>

  <po-input p-label="Message" class="po-md-6" name="message" [(ngModel)]="message" p-clean p-required> </po-input>

  <po-input p-label="Support Message" class="po-md-6" name="supportMessage" [(ngModel)]="supportMessage" p-clean>
  </po-input>

  <po-switch
    p-label="Has Action"
    class="po-md-6 po-lg-2"
    (p-change)="changeAction()"
    name="action"
    [(ngModel)]="hasAction"
  >
  </po-switch>

  <po-input p-label="Action Label" class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="actionLabel" p-clean>
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-6"
      name="sizeActions"
      [(ngModel)]="sizeActions"
      p-label="Size actions"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoToasterComponent,
  PoToasterMode,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toaster-labs',
  templateUrl: './sample-po-toaster-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterLabsComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('toasterRef') toasterRef: PoToasterComponent;

  message = 'Title Message';
  supportMessage =
    'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
  actionLabel = 'action';
  type: PoToasterType = PoToasterType.Information;
  mode = PoToasterMode.Inline;
  showIcon = true;
  hasAction = false;
  action = undefined;
  properties: Array<string> = [];
  sizeActions: string = 'medium';

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hide', label: 'Hide' },
    { value: 'showClose', label: 'Show close' }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor() {}

  changeAction() {
    if (this.hasAction) {
      this.action = () => this.poModal.open();
    } else {
      this.action = undefined;
    }
  }

  restore() {
    this.message = 'Title Message';
    this.supportMessage =
      'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
    this.actionLabel = 'action';
    this.type = PoToasterType.Information;
    this.mode = PoToasterMode.Inline;
    this.showIcon = true;
    this.hasAction = false;
    this.action = undefined;
    this.properties = [];
    this.sizeActions = 'medium';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-toaster-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return i})();var de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoToasterModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-toaster."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoToasterComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),ng(),wl(15,"h4"),Ux(16,"Acessibilidade tratada no componente"),ng(),wl(17,"p"),Ux(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(19,"ul")(20,"li"),Ux(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),ng(),wl(22,"li"),Ux(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),ng(),wl(24,"li"),Ux(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),ng(),wl(26,"li"),Ux(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),ng()(),wl(28,"h4"),Ux(29,"Tokens customiz\xE1veis"),ng(),wl(30,"p"),Ux(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(32,"blockquote")(33,"p"),Ux(34,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(35,"a",6),Ux(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(37,"."),ng()(),wl(38,"table")(39,"thead")(40,"tr")(41,"th"),Ux(42,"Propriedade"),ng(),wl(43,"th"),Ux(44,"Descri\xE7\xE3o"),ng(),wl(45,"th"),Ux(46,"Valor Padr\xE3o"),ng()()(),wl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),Ux(51,"Default Values"),ng()(),Ul(52,"td")(53,"td"),ng(),wl(54,"tr")(55,"td")(56,"code"),Ux(57,"--font-family"),ng()(),wl(58,"td"),Ux(59,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(60,"td")(61,"code"),Ux(62,"var(--font-family-theme)"),ng()()(),wl(63,"tr")(64,"td")(65,"code"),Ux(66,"--font-color"),ng()(),wl(67,"td"),Ux(68,"Cor principal do texto"),ng(),wl(69,"td")(70,"code"),Ux(71,"var(--color-neutral-dark-90)"),ng()()(),wl(72,"tr")(73,"td")(74,"code"),Ux(75,"--font-color-support"),ng()(),wl(76,"td"),Ux(77,"Cor principal do texto de supporte"),ng(),wl(78,"td")(79,"code"),Ux(80,"var(--color-neutral-dark-80)"),ng()()(),wl(81,"tr")(82,"td")(83,"code"),Ux(84,"--border-radius"),ng()(),wl(85,"td"),Ux(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(87,"td")(88,"code"),Ux(89,"var(--border-radius-md)"),ng()()(),wl(90,"tr")(91,"td")(92,"strong"),Ux(93,"Type Success"),ng()(),Ul(94,"td")(95,"td"),ng(),wl(96,"tr")(97,"td")(98,"code"),Ux(99,"--color-success"),ng()(),wl(100,"td"),Ux(101,"Cor principal no tipo success"),ng(),wl(102,"td")(103,"code"),Ux(104,"var(--color-feedback-positive-base)"),ng()()(),wl(105,"tr")(106,"td")(107,"code"),Ux(108,"--background-success"),ng()(),wl(109,"td"),Ux(110,"Cor de fundo principal no tipo success"),ng(),wl(111,"td")(112,"code"),Ux(113,"var(--color-feedback-positive-lightest)"),ng()()(),wl(114,"tr")(115,"td")(116,"code"),Ux(117,"--border-color-success"),ng()(),wl(118,"td"),Ux(119,"Cor da borda principal tipo success"),ng(),wl(120,"td")(121,"code"),Ux(122,"var(--color-feedback-positive-lighter)"),ng()()(),wl(123,"tr")(124,"td")(125,"strong"),Ux(126,"Type Error"),ng()(),Ul(127,"td")(128,"td"),ng(),wl(129,"tr")(130,"td")(131,"code"),Ux(132,"--color-error"),ng()(),wl(133,"td"),Ux(134,"Cor principal no tipo error"),ng(),wl(135,"td")(136,"code"),Ux(137,"var(--color-feedback-negative-base)"),ng()()(),wl(138,"tr")(139,"td")(140,"code"),Ux(141,"--background-error"),ng()(),wl(142,"td"),Ux(143,"Cor de fundo principal no tipo error"),ng(),wl(144,"td")(145,"code"),Ux(146,"var(--color-feedback-negative-lightest)"),ng()()(),wl(147,"tr")(148,"td")(149,"code"),Ux(150,"--border-color-error"),ng()(),wl(151,"td"),Ux(152,"Cor da borda principal tipo error"),ng(),wl(153,"td")(154,"code"),Ux(155,"var(--color-feedback-negative-lighter)"),ng()()(),wl(156,"tr")(157,"td")(158,"strong"),Ux(159,"Type Warning"),ng()(),Ul(160,"td")(161,"td"),ng(),wl(162,"tr")(163,"td")(164,"code"),Ux(165,"--color-icon-warning"),ng()(),wl(166,"td"),Ux(167,"Cor principal do icone no tipo warning"),ng(),wl(168,"td")(169,"code"),Ux(170,"var(--color-neutral-dark-90)"),ng()()(),wl(171,"tr")(172,"td")(173,"code"),Ux(174,"--color-warning"),ng()(),wl(175,"td"),Ux(176,"Cor principal no tipo warning"),ng(),wl(177,"td")(178,"code"),Ux(179,"var(--color-feedback-warning-base)"),ng()()(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--background-warning"),ng()(),wl(184,"td"),Ux(185,"Cor de fundo principal no tipo warning"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-feedback-warning-lightest)"),ng()()(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--border-color-warning"),ng()(),wl(193,"td"),Ux(194,"Cor da borda principal tipo warning"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--color-feedback-warning-lighter)"),ng()()(),wl(198,"tr")(199,"td")(200,"strong"),Ux(201,"Type Info"),ng()(),Ul(202,"td")(203,"td"),ng(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--color-info"),ng()(),wl(208,"td"),Ux(209,"Cor principal no tipo info"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-feedback-info-base)"),ng()()(),wl(213,"tr")(214,"td")(215,"code"),Ux(216,"--background-info"),ng()(),wl(217,"td"),Ux(218,"Cor de fundo principal no tipo info"),ng(),wl(219,"td")(220,"code"),Ux(221,"var(--color-feedback-info-lightest)"),ng()()(),wl(222,"tr")(223,"td")(224,"code"),Ux(225,"--border-color-info"),ng()(),wl(226,"td"),Ux(227,"Cor da borda principal tipo info"),ng(),wl(228,"td")(229,"code"),Ux(230,"var(--color-feedback-info-lighter)"),ng()()()()()(),wl(231,"div",7)(232,"h4",8),Ux(233,"Seletor"),ng(),wl(234,"pre",9),Ux(235,`<po-toaster
    p-action="Function"
    p-action-label="string"
    p-hide="boolean"
    (p-hide-change)="EventEmitter"
    p-message="string"
    p-show-close="boolean"
    p-size-actions="string"
    p-support-message="string"
    p-type="PoToasterType" >
</po-toaster>
`),ng()(),wl(236,"h4",10),Ux(237,"Propriedades"),ng(),wl(238,"table",11)(239,"tr",12)(240,"th",13),Ux(241,"Nome"),ng(),wl(242,"th",13),Ux(243,"Tipo"),ng(),wl(244,"th",13),Ux(245,"Padr\xE3o"),ng(),wl(246,"th",13),Ux(247,"Descri\xE7\xE3o"),ng()(),wl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),Ux(252," p-action"),Ul(253,"br"),ng()()(),wl(254,"td",18)(255,"code",19),Ux(256,"Function"),ng()(),wl(257,"td",20),Ux(258,"-"),ng(),wl(259,"td",21)(260,"em")(261,"strong"),Ux(262,"(opcional)"),ng()(),wl(263,"p"),Ux(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),ng()()(),wl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Ux(269," p-action-label"),Ul(270,"br"),ng()()(),wl(271,"td",18)(272,"code",22),Ux(273,"string"),ng()(),wl(274,"td",20),Ux(275,"-"),ng(),wl(276,"td",21)(277,"em")(278,"strong"),Ux(279,"(opcional)"),ng()(),wl(280,"p"),Ux(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),ng()()(),wl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),Ux(286," p-hide"),Ul(287,"br"),ng()()(),wl(288,"td",18)(289,"code",23),Ux(290,"boolean"),ng()(),wl(291,"td",20)(292,"p")(293,"code"),Ux(294,"false"),ng()()(),wl(295,"td",21)(296,"em")(297,"strong"),Ux(298,"(opcional)"),ng()(),wl(299,"p"),Ux(300,"Define se o Toaster esta invisivel."),ng()()(),wl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),Ux(305," (p-hide-change)"),Ul(306,"br"),ng()()(),wl(307,"td",18)(308,"code",26),Ux(309,"EventEmitter"),ng()(),wl(310,"td",20),Ux(311,"-"),ng(),wl(312,"td",21)(313,"em")(314,"strong"),Ux(315,"(opcional)"),ng()(),wl(316,"p"),Ux(317,"Evento emitido quando o valor de "),wl(318,"code"),Ux(319,"isHide"),ng(),Ux(320," \xE9 alterado."),ng()()(),wl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),Ux(325," p-message"),Ul(326,"br"),ng()()(),wl(327,"td",18)(328,"code",22),Ux(329,"string"),ng()(),wl(330,"td",20),Ux(331,"-"),ng(),wl(332,"td",21)(333,"em")(334,"strong"),Ux(335,"(opcional)"),ng()(),wl(336,"p"),Ux(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),ng()()(),wl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),Ux(342," p-show-close"),Ul(343,"br"),ng()()(),wl(344,"td",18)(345,"code",23),Ux(346,"boolean"),ng()(),wl(347,"td",20)(348,"p")(349,"code"),Ux(350,"true"),ng()()(),wl(351,"td",21)(352,"em")(353,"strong"),Ux(354,"(opcional)"),ng()(),wl(355,"p"),Ux(356,"Exibe bot\xE3o de fechar no toaster modo inline."),ng()()(),wl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),Ux(361," p-size-actions"),Ul(362,"br"),ng()()(),wl(363,"td",18)(364,"code",22),Ux(365,"string"),ng()(),wl(366,"td",20)(367,"p")(368,"code"),Ux(369,"medium"),ng()()(),wl(370,"td",21)(371,"em")(372,"strong"),Ux(373,"(opcional)"),ng()(),wl(374,"p"),Ux(375,"Define o tamanho das a\xE7\xF5es no componente:"),ng(),wl(376,"ul")(377,"li")(378,"code"),Ux(379,"small"),ng(),Ux(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(381,"li")(382,"code"),Ux(383,"medium"),ng(),Ux(384,": aplica a medida medium de cada componente."),ng()(),wl(385,"blockquote")(386,"p"),Ux(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(388,"code"),Ux(389,"medium"),ng(),Ux(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(391,"a",27),Ux(392,"po-theme"),ng(),Ux(393,"."),ng()()()(),wl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),Ux(398," p-support-message"),Ul(399,"br"),ng()()(),wl(400,"td",18)(401,"code",22),Ux(402,"string"),ng()(),wl(403,"td",20),Ux(404,"-"),ng(),wl(405,"td",21)(406,"em")(407,"strong"),Ux(408,"(opcional)"),ng()(),wl(409,"p"),Ux(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),ng()()(),wl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Ux(415," p-type"),Ul(416,"br"),ng()()(),wl(417,"td",18)(418,"code",28),Ux(419,"PoToasterType"),ng()(),wl(420,"td",20)(421,"p")(422,"code"),Ux(423,"PoToasterType.Information"),ng()()(),wl(424,"td",21)(425,"em")(426,"strong"),Ux(427,"(opcional)"),ng()(),wl(428,"p"),Ux(429,"Determina o tipo de notifica\xE7\xE3o."),ng(),wl(430,"p"),Ux(431,"Valores aceitos: "),wl(432,"code"),Ux(433,"error"),ng(),Ux(434,", "),wl(435,"code"),Ux(436,"information"),ng(),Ux(437,", "),wl(438,"code"),Ux(439,"success"),ng(),Ux(440," e "),wl(441,"code"),Ux(442,"warning"),ng(),Ux(443,"."),ng()()()(),wl(444,"h3"),Ux(445,"Enums"),ng(),wl(446,"h4",4)(447,"code",5),Ux(448,"PoToasterType"),ng()(),wl(449,"div",2)(450,"p"),Ux(451,"Define os tipos poss\xEDveis para o "),wl(452,"code"),Ux(453,"PoToasterComponent"),ng(),Ux(454,"."),ng()(),wl(455,"h4",10),Ux(456,"Propriedades"),ng(),wl(457,"table",11)(458,"tr",12)(459,"th",13),Ux(460,"Nome"),ng(),wl(461,"th",13),Ux(462,"Descri\xE7\xE3o"),ng()(),wl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),Ux(467," Error"),Ul(468,"br"),ng()()(),wl(469,"td",21)(470,"p"),Ux(471,"Tipo de toaster para mensagens de erro."),ng()()(),wl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Ux(476," Information"),Ul(477,"br"),ng()()(),wl(478,"td",21)(479,"p"),Ux(480,"Tipo de toaster para mensagens informativas."),ng()()(),wl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),Ux(485," Success"),Ul(486,"br"),ng()()(),wl(487,"td",21)(488,"p"),Ux(489,"Tipo de toaster para mensagens de sucesso."),ng()()(),wl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),Ux(494," Warning"),Ul(495,"br"),ng()()(),wl(496,"td",21)(497,"p"),Ux(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-toaster-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),ng()()()),a&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,se,me,de],encapsulation:2})}return i})();var ye=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(ye),vL]})}return i})();var et=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,ue]})}return i})();export{et as DocPoToasterModule};