import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dJ as Jn,dK as Tv,dL as Hde,H as Sl,M as Wl,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,bH as E3,b6 as Yo,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Sl(0,"div",0),Wl(1,"po-toaster",1),sg());},dependencies:[Hde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Toaster Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toaster-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=Jn.Information;mode=Tv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=Jn.Information,this.mode=Tv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&ql(Yo,7)(Ee,5),a&2){let m;lo(m=uo())&&(n.poModal=m.first),lo(m=uo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=Ex();Sl(0,"div",2),Wl(1,"po-toaster",3,0),sg(),Wl(3,"po-divider"),Sl(4,"form",null,1)(6,"po-radio-group",4),Ew("ngModelChange",function(l){return Xy(m),tN(n.type,l)||(n.type=l),Qy(l)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(l){return Xy(m),tN(n.message,l)||(n.message=l),Qy(l)}),sg(),JA(),Sl(8,"po-input",6),Ew("ngModelChange",function(l){return Xy(m),tN(n.supportMessage,l)||(n.supportMessage=l),Qy(l)}),sg(),JA(),Sl(9,"po-switch",7),ht("p-change",function(){return n.changeAction()}),Ew("ngModelChange",function(l){return Xy(m),tN(n.hasAction,l)||(n.hasAction=l),Qy(l)}),sg(),JA(),Sl(10,"po-input",8),Ew("ngModelChange",function(l){return Xy(m),tN(n.actionLabel,l)||(n.actionLabel=l),Qy(l)}),sg(),JA(),Sl(11,"div",2)(12,"po-checkbox-group",9),Ew("ngModelChange",function(l){return Xy(m),tN(n.properties,l)||(n.properties=l),Qy(l)}),sg(),JA(),Sl(13,"po-radio-group",10),Ew("ngModelChange",function(l){return Xy(m),tN(n.sizeActions,l)||(n.sizeActions=l),Qy(l)}),sg(),JA(),sg(),Wl(14,"po-divider"),Sl(15,"div",2)(16,"po-button",11),ht("p-click",function(){return n.restore()}),sg()()(),Sl(17,"po-modal",12),Jx(18," Notification Action "),sg();}a&2&&(Vp(),tw("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Vp(5),Dw("ngModel",n.type),tw("p-options",n.typeOptions),t0(),Vp(),Dw("ngModel",n.message),t0(),Vp(),Dw("ngModel",n.supportMessage),t0(),Vp(),Dw("ngModel",n.hasAction),t0(),Vp(),Dw("ngModel",n.actionLabel),t0(),Vp(2),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0(),Vp(),Dw("ngModel",n.sizeActions),tw("p-options",n.sizeActionsOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,E3,Yo,Hde],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Toaster Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toaster-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoToasterModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-toaster."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoToasterComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),sg(),Sl(15,"h4"),Jx(16,"Acessibilidade tratada no componente"),sg(),Sl(17,"p"),Jx(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(19,"ul")(20,"li"),Jx(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),sg(),Sl(22,"li"),Jx(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),sg(),Sl(24,"li"),Jx(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),sg(),Sl(26,"li"),Jx(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),sg()(),Sl(28,"h4"),Jx(29,"Tokens customiz\xE1veis"),sg(),Sl(30,"p"),Jx(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(32,"blockquote")(33,"p"),Jx(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(35,"a",6),Jx(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(37,"."),sg()(),Sl(38,"table")(39,"thead")(40,"tr")(41,"th"),Jx(42,"Propriedade"),sg(),Sl(43,"th"),Jx(44,"Descri\xE7\xE3o"),sg(),Sl(45,"th"),Jx(46,"Valor Padr\xE3o"),sg()()(),Sl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),Jx(51,"Default Values"),sg()(),Wl(52,"td")(53,"td"),sg(),Sl(54,"tr")(55,"td")(56,"code"),Jx(57,"--font-family"),sg()(),Sl(58,"td"),Jx(59,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(60,"td")(61,"code"),Jx(62,"var(--font-family-theme)"),sg()()(),Sl(63,"tr")(64,"td")(65,"code"),Jx(66,"--font-color"),sg()(),Sl(67,"td"),Jx(68,"Cor principal do texto"),sg(),Sl(69,"td")(70,"code"),Jx(71,"var(--color-neutral-dark-90)"),sg()()(),Sl(72,"tr")(73,"td")(74,"code"),Jx(75,"--font-color-support"),sg()(),Sl(76,"td"),Jx(77,"Cor principal do texto de supporte"),sg(),Sl(78,"td")(79,"code"),Jx(80,"var(--color-neutral-dark-80)"),sg()()(),Sl(81,"tr")(82,"td")(83,"code"),Jx(84,"--border-radius"),sg()(),Sl(85,"td"),Jx(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(87,"td")(88,"code"),Jx(89,"var(--border-radius-md)"),sg()()(),Sl(90,"tr")(91,"td")(92,"strong"),Jx(93,"Type Success"),sg()(),Wl(94,"td")(95,"td"),sg(),Sl(96,"tr")(97,"td")(98,"code"),Jx(99,"--color-success"),sg()(),Sl(100,"td"),Jx(101,"Cor principal no tipo success"),sg(),Sl(102,"td")(103,"code"),Jx(104,"var(--color-feedback-positive-base)"),sg()()(),Sl(105,"tr")(106,"td")(107,"code"),Jx(108,"--background-success"),sg()(),Sl(109,"td"),Jx(110,"Cor de fundo principal no tipo success"),sg(),Sl(111,"td")(112,"code"),Jx(113,"var(--color-feedback-positive-lightest)"),sg()()(),Sl(114,"tr")(115,"td")(116,"code"),Jx(117,"--border-color-success"),sg()(),Sl(118,"td"),Jx(119,"Cor da borda principal tipo success"),sg(),Sl(120,"td")(121,"code"),Jx(122,"var(--color-feedback-positive-lighter)"),sg()()(),Sl(123,"tr")(124,"td")(125,"strong"),Jx(126,"Type Error"),sg()(),Wl(127,"td")(128,"td"),sg(),Sl(129,"tr")(130,"td")(131,"code"),Jx(132,"--color-error"),sg()(),Sl(133,"td"),Jx(134,"Cor principal no tipo error"),sg(),Sl(135,"td")(136,"code"),Jx(137,"var(--color-feedback-negative-base)"),sg()()(),Sl(138,"tr")(139,"td")(140,"code"),Jx(141,"--background-error"),sg()(),Sl(142,"td"),Jx(143,"Cor de fundo principal no tipo error"),sg(),Sl(144,"td")(145,"code"),Jx(146,"var(--color-feedback-negative-lightest)"),sg()()(),Sl(147,"tr")(148,"td")(149,"code"),Jx(150,"--border-color-error"),sg()(),Sl(151,"td"),Jx(152,"Cor da borda principal tipo error"),sg(),Sl(153,"td")(154,"code"),Jx(155,"var(--color-feedback-negative-lighter)"),sg()()(),Sl(156,"tr")(157,"td")(158,"strong"),Jx(159,"Type Warning"),sg()(),Wl(160,"td")(161,"td"),sg(),Sl(162,"tr")(163,"td")(164,"code"),Jx(165,"--color-icon-warning"),sg()(),Sl(166,"td"),Jx(167,"Cor principal do icone no tipo warning"),sg(),Sl(168,"td")(169,"code"),Jx(170,"var(--color-neutral-dark-90)"),sg()()(),Sl(171,"tr")(172,"td")(173,"code"),Jx(174,"--color-warning"),sg()(),Sl(175,"td"),Jx(176,"Cor principal no tipo warning"),sg(),Sl(177,"td")(178,"code"),Jx(179,"var(--color-feedback-warning-base)"),sg()()(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--background-warning"),sg()(),Sl(184,"td"),Jx(185,"Cor de fundo principal no tipo warning"),sg(),Sl(186,"td")(187,"code"),Jx(188,"var(--color-feedback-warning-lightest)"),sg()()(),Sl(189,"tr")(190,"td")(191,"code"),Jx(192,"--border-color-warning"),sg()(),Sl(193,"td"),Jx(194,"Cor da borda principal tipo warning"),sg(),Sl(195,"td")(196,"code"),Jx(197,"var(--color-feedback-warning-lighter)"),sg()()(),Sl(198,"tr")(199,"td")(200,"strong"),Jx(201,"Type Info"),sg()(),Wl(202,"td")(203,"td"),sg(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--color-info"),sg()(),Sl(208,"td"),Jx(209,"Cor principal no tipo info"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-feedback-info-base)"),sg()()(),Sl(213,"tr")(214,"td")(215,"code"),Jx(216,"--background-info"),sg()(),Sl(217,"td"),Jx(218,"Cor de fundo principal no tipo info"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-feedback-info-lightest)"),sg()()(),Sl(222,"tr")(223,"td")(224,"code"),Jx(225,"--border-color-info"),sg()(),Sl(226,"td"),Jx(227,"Cor da borda principal tipo info"),sg(),Sl(228,"td")(229,"code"),Jx(230,"var(--color-feedback-info-lighter)"),sg()()()()()(),Sl(231,"div",7)(232,"h4",8),Jx(233,"Seletor"),sg(),Sl(234,"pre",9),Jx(235,`<po-toaster
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
`),sg()(),Sl(236,"h4",10),Jx(237,"Propriedades"),sg(),Sl(238,"table",11)(239,"tr",12)(240,"th",13),Jx(241,"Nome"),sg(),Sl(242,"th",13),Jx(243,"Tipo"),sg(),Sl(244,"th",13),Jx(245,"Padr\xE3o"),sg(),Sl(246,"th",13),Jx(247,"Descri\xE7\xE3o"),sg()(),Sl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),Jx(252," p-action"),Wl(253,"br"),sg()()(),Sl(254,"td",18)(255,"code",19),Jx(256,"Function"),sg()(),Sl(257,"td",20),Jx(258,"-"),sg(),Sl(259,"td",21)(260,"em")(261,"strong"),Jx(262,"(opcional)"),sg()(),Sl(263,"p"),Jx(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),sg()()(),Sl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Jx(269," p-action-label"),Wl(270,"br"),sg()()(),Sl(271,"td",18)(272,"code",22),Jx(273,"string"),sg()(),Sl(274,"td",20),Jx(275,"-"),sg(),Sl(276,"td",21)(277,"em")(278,"strong"),Jx(279,"(opcional)"),sg()(),Sl(280,"p"),Jx(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),sg()()(),Sl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),Jx(286," p-hide"),Wl(287,"br"),sg()()(),Sl(288,"td",18)(289,"code",23),Jx(290,"boolean"),sg()(),Sl(291,"td",20)(292,"p")(293,"code"),Jx(294,"false"),sg()()(),Sl(295,"td",21)(296,"em")(297,"strong"),Jx(298,"(opcional)"),sg()(),Sl(299,"p"),Jx(300,"Define se o Toaster esta invisivel."),sg()()(),Sl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),Jx(305," (p-hide-change)"),Wl(306,"br"),sg()()(),Sl(307,"td",18)(308,"code",26),Jx(309,"EventEmitter"),sg()(),Sl(310,"td",20),Jx(311,"-"),sg(),Sl(312,"td",21)(313,"em")(314,"strong"),Jx(315,"(opcional)"),sg()(),Sl(316,"p"),Jx(317,"Evento emitido quando o valor de "),Sl(318,"code"),Jx(319,"isHide"),sg(),Jx(320," \xE9 alterado."),sg()()(),Sl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),Jx(325," p-message"),Wl(326,"br"),sg()()(),Sl(327,"td",18)(328,"code",22),Jx(329,"string"),sg()(),Sl(330,"td",20),Jx(331,"-"),sg(),Sl(332,"td",21)(333,"em")(334,"strong"),Jx(335,"(opcional)"),sg()(),Sl(336,"p"),Jx(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),sg()()(),Sl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),Jx(342," p-show-close"),Wl(343,"br"),sg()()(),Sl(344,"td",18)(345,"code",23),Jx(346,"boolean"),sg()(),Sl(347,"td",20)(348,"p")(349,"code"),Jx(350,"true"),sg()()(),Sl(351,"td",21)(352,"em")(353,"strong"),Jx(354,"(opcional)"),sg()(),Sl(355,"p"),Jx(356,"Exibe bot\xE3o de fechar no toaster modo inline."),sg()()(),Sl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),Jx(361," p-size-actions"),Wl(362,"br"),sg()()(),Sl(363,"td",18)(364,"code",22),Jx(365,"string"),sg()(),Sl(366,"td",20)(367,"p")(368,"code"),Jx(369,"medium"),sg()()(),Sl(370,"td",21)(371,"em")(372,"strong"),Jx(373,"(opcional)"),sg()(),Sl(374,"p"),Jx(375,"Define o tamanho das a\xE7\xF5es no componente:"),sg(),Sl(376,"ul")(377,"li")(378,"code"),Jx(379,"small"),sg(),Jx(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(381,"li")(382,"code"),Jx(383,"medium"),sg(),Jx(384,": aplica a medida medium de cada componente."),sg()(),Sl(385,"blockquote")(386,"p"),Jx(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(388,"code"),Jx(389,"medium"),sg(),Jx(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(391,"a",27),Jx(392,"po-theme"),sg(),Jx(393,"."),sg()()()(),Sl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),Jx(398," p-support-message"),Wl(399,"br"),sg()()(),Sl(400,"td",18)(401,"code",22),Jx(402,"string"),sg()(),Sl(403,"td",20),Jx(404,"-"),sg(),Sl(405,"td",21)(406,"em")(407,"strong"),Jx(408,"(opcional)"),sg()(),Sl(409,"p"),Jx(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),sg()()(),Sl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Jx(415," p-type"),Wl(416,"br"),sg()()(),Sl(417,"td",18)(418,"code",28),Jx(419,"PoToasterType"),sg()(),Sl(420,"td",20)(421,"p")(422,"code"),Jx(423,"PoToasterType.Information"),sg()()(),Sl(424,"td",21)(425,"em")(426,"strong"),Jx(427,"(opcional)"),sg()(),Sl(428,"p"),Jx(429,"Determina o tipo de notifica\xE7\xE3o."),sg(),Sl(430,"p"),Jx(431,"Valores aceitos: "),Sl(432,"code"),Jx(433,"error"),sg(),Jx(434,", "),Sl(435,"code"),Jx(436,"information"),sg(),Jx(437,", "),Sl(438,"code"),Jx(439,"success"),sg(),Jx(440," e "),Sl(441,"code"),Jx(442,"warning"),sg(),Jx(443,"."),sg()()()(),Sl(444,"h3"),Jx(445,"Enums"),sg(),Sl(446,"h4",4)(447,"code",5),Jx(448,"PoToasterType"),sg()(),Sl(449,"div",2)(450,"p"),Jx(451,"Define os tipos poss\xEDveis para o "),Sl(452,"code"),Jx(453,"PoToasterComponent"),sg(),Jx(454,"."),sg()(),Sl(455,"h4",10),Jx(456,"Propriedades"),sg(),Sl(457,"table",11)(458,"tr",12)(459,"th",13),Jx(460,"Nome"),sg(),Sl(461,"th",13),Jx(462,"Descri\xE7\xE3o"),sg()(),Sl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),Jx(467," Error"),Wl(468,"br"),sg()()(),Sl(469,"td",21)(470,"p"),Jx(471,"Tipo de toaster para mensagens de erro."),sg()()(),Sl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Jx(476," Information"),Wl(477,"br"),sg()()(),Sl(478,"td",21)(479,"p"),Jx(480,"Tipo de toaster para mensagens informativas."),sg()()(),Sl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),Jx(485," Success"),Wl(486,"br"),sg()()(),Sl(487,"td",21)(488,"p"),Jx(489,"Tipo de toaster para mensagens de sucesso."),sg()()(),Sl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),Jx(494," Warning"),Wl(495,"br"),sg()()(),Sl(496,"td",21)(497,"p"),Jx(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-toaster-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),sg()()()),a&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,re,se,pe],encapsulation:2})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[pL.forChild(ve),pL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,de]})}return i})();export{He as DocPoToasterModule};