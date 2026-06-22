import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,dI as Jn,dJ as Tv,dK as Rde,T as Tl,J as Gl,L as sg,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,bH as k3,b6 as Yo,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Tl(0,"div",0),Gl(1,"po-toaster",1),sg());},dependencies:[Rde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Toaster Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toaster-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ie],encapsulation:2})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=Jn.Information;mode=Tv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=Jn.Information,this.mode=Tv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&Yl(Yo,7)(Ee,5),a&2){let m;uo(m=fo())&&(n.poModal=m.first),uo(m=fo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=Cx();Tl(0,"div",2),Gl(1,"po-toaster",3,0),sg(),Gl(3,"po-divider"),Tl(4,"form",null,1)(6,"po-radio-group",4),Ew("ngModelChange",function(l){return Ky(m),rN(n.type,l)||(n.type=l),Xy(l)}),sg(),t0(),Tl(7,"po-input",5),Ew("ngModelChange",function(l){return Ky(m),rN(n.message,l)||(n.message=l),Xy(l)}),sg(),t0(),Tl(8,"po-input",6),Ew("ngModelChange",function(l){return Ky(m),rN(n.supportMessage,l)||(n.supportMessage=l),Xy(l)}),sg(),t0(),Tl(9,"po-switch",7),ht("p-change",function(){return n.changeAction()}),Ew("ngModelChange",function(l){return Ky(m),rN(n.hasAction,l)||(n.hasAction=l),Xy(l)}),sg(),t0(),Tl(10,"po-input",8),Ew("ngModelChange",function(l){return Ky(m),rN(n.actionLabel,l)||(n.actionLabel=l),Xy(l)}),sg(),t0(),Tl(11,"div",2)(12,"po-checkbox-group",9),Ew("ngModelChange",function(l){return Ky(m),rN(n.properties,l)||(n.properties=l),Xy(l)}),sg(),t0(),Tl(13,"po-radio-group",10),Ew("ngModelChange",function(l){return Ky(m),rN(n.sizeActions,l)||(n.sizeActions=l),Xy(l)}),sg(),t0(),sg(),Gl(14,"po-divider"),Tl(15,"div",2)(16,"po-button",11),ht("p-click",function(){return n.restore()}),sg()()(),Tl(17,"po-modal",12),tN(18," Notification Action "),sg();}a&2&&(Vp(),tw("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Vp(5),Dw("ngModel",n.type),tw("p-options",n.typeOptions),r0(),Vp(),Dw("ngModel",n.message),r0(),Vp(),Dw("ngModel",n.supportMessage),r0(),Vp(),Dw("ngModel",n.hasAction),r0(),Vp(),Dw("ngModel",n.actionLabel),r0(),Vp(2),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),r0(),Vp(),Dw("ngModel",n.sizeActions),tw("p-options",n.sizeActionsOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,k3,Yo,Rde],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Toaster Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toaster-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoToasterModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-toaster."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoToasterComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),sg(),Tl(15,"h4"),tN(16,"Acessibilidade tratada no componente"),sg(),Tl(17,"p"),tN(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(19,"ul")(20,"li"),tN(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),sg(),Tl(22,"li"),tN(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),sg(),Tl(24,"li"),tN(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),sg(),Tl(26,"li"),tN(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),sg()(),Tl(28,"h4"),tN(29,"Tokens customiz\xE1veis"),sg(),Tl(30,"p"),tN(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(32,"blockquote")(33,"p"),tN(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(35,"a",6),tN(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(37,"."),sg()(),Tl(38,"table")(39,"thead")(40,"tr")(41,"th"),tN(42,"Propriedade"),sg(),Tl(43,"th"),tN(44,"Descri\xE7\xE3o"),sg(),Tl(45,"th"),tN(46,"Valor Padr\xE3o"),sg()()(),Tl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),tN(51,"Default Values"),sg()(),Gl(52,"td")(53,"td"),sg(),Tl(54,"tr")(55,"td")(56,"code"),tN(57,"--font-family"),sg()(),Tl(58,"td"),tN(59,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(60,"td")(61,"code"),tN(62,"var(--font-family-theme)"),sg()()(),Tl(63,"tr")(64,"td")(65,"code"),tN(66,"--font-color"),sg()(),Tl(67,"td"),tN(68,"Cor principal do texto"),sg(),Tl(69,"td")(70,"code"),tN(71,"var(--color-neutral-dark-90)"),sg()()(),Tl(72,"tr")(73,"td")(74,"code"),tN(75,"--font-color-support"),sg()(),Tl(76,"td"),tN(77,"Cor principal do texto de supporte"),sg(),Tl(78,"td")(79,"code"),tN(80,"var(--color-neutral-dark-80)"),sg()()(),Tl(81,"tr")(82,"td")(83,"code"),tN(84,"--border-radius"),sg()(),Tl(85,"td"),tN(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(87,"td")(88,"code"),tN(89,"var(--border-radius-md)"),sg()()(),Tl(90,"tr")(91,"td")(92,"strong"),tN(93,"Type Success"),sg()(),Gl(94,"td")(95,"td"),sg(),Tl(96,"tr")(97,"td")(98,"code"),tN(99,"--color-success"),sg()(),Tl(100,"td"),tN(101,"Cor principal no tipo success"),sg(),Tl(102,"td")(103,"code"),tN(104,"var(--color-feedback-positive-base)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),tN(108,"--background-success"),sg()(),Tl(109,"td"),tN(110,"Cor de fundo principal no tipo success"),sg(),Tl(111,"td")(112,"code"),tN(113,"var(--color-feedback-positive-lightest)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),tN(117,"--border-color-success"),sg()(),Tl(118,"td"),tN(119,"Cor da borda principal tipo success"),sg(),Tl(120,"td")(121,"code"),tN(122,"var(--color-feedback-positive-lighter)"),sg()()(),Tl(123,"tr")(124,"td")(125,"strong"),tN(126,"Type Error"),sg()(),Gl(127,"td")(128,"td"),sg(),Tl(129,"tr")(130,"td")(131,"code"),tN(132,"--color-error"),sg()(),Tl(133,"td"),tN(134,"Cor principal no tipo error"),sg(),Tl(135,"td")(136,"code"),tN(137,"var(--color-feedback-negative-base)"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),tN(141,"--background-error"),sg()(),Tl(142,"td"),tN(143,"Cor de fundo principal no tipo error"),sg(),Tl(144,"td")(145,"code"),tN(146,"var(--color-feedback-negative-lightest)"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),tN(150,"--border-color-error"),sg()(),Tl(151,"td"),tN(152,"Cor da borda principal tipo error"),sg(),Tl(153,"td")(154,"code"),tN(155,"var(--color-feedback-negative-lighter)"),sg()()(),Tl(156,"tr")(157,"td")(158,"strong"),tN(159,"Type Warning"),sg()(),Gl(160,"td")(161,"td"),sg(),Tl(162,"tr")(163,"td")(164,"code"),tN(165,"--color-icon-warning"),sg()(),Tl(166,"td"),tN(167,"Cor principal do icone no tipo warning"),sg(),Tl(168,"td")(169,"code"),tN(170,"var(--color-neutral-dark-90)"),sg()()(),Tl(171,"tr")(172,"td")(173,"code"),tN(174,"--color-warning"),sg()(),Tl(175,"td"),tN(176,"Cor principal no tipo warning"),sg(),Tl(177,"td")(178,"code"),tN(179,"var(--color-feedback-warning-base)"),sg()()(),Tl(180,"tr")(181,"td")(182,"code"),tN(183,"--background-warning"),sg()(),Tl(184,"td"),tN(185,"Cor de fundo principal no tipo warning"),sg(),Tl(186,"td")(187,"code"),tN(188,"var(--color-feedback-warning-lightest)"),sg()()(),Tl(189,"tr")(190,"td")(191,"code"),tN(192,"--border-color-warning"),sg()(),Tl(193,"td"),tN(194,"Cor da borda principal tipo warning"),sg(),Tl(195,"td")(196,"code"),tN(197,"var(--color-feedback-warning-lighter)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),tN(201,"Type Info"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),tN(207,"--color-info"),sg()(),Tl(208,"td"),tN(209,"Cor principal no tipo info"),sg(),Tl(210,"td")(211,"code"),tN(212,"var(--color-feedback-info-base)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),tN(216,"--background-info"),sg()(),Tl(217,"td"),tN(218,"Cor de fundo principal no tipo info"),sg(),Tl(219,"td")(220,"code"),tN(221,"var(--color-feedback-info-lightest)"),sg()()(),Tl(222,"tr")(223,"td")(224,"code"),tN(225,"--border-color-info"),sg()(),Tl(226,"td"),tN(227,"Cor da borda principal tipo info"),sg(),Tl(228,"td")(229,"code"),tN(230,"var(--color-feedback-info-lighter)"),sg()()()()()(),Tl(231,"div",7)(232,"h4",8),tN(233,"Seletor"),sg(),Tl(234,"pre",9),tN(235,`<po-toaster
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
`),sg()(),Tl(236,"h4",10),tN(237,"Propriedades"),sg(),Tl(238,"table",11)(239,"tr",12)(240,"th",13),tN(241,"Nome"),sg(),Tl(242,"th",13),tN(243,"Tipo"),sg(),Tl(244,"th",13),tN(245,"Padr\xE3o"),sg(),Tl(246,"th",13),tN(247,"Descri\xE7\xE3o"),sg()(),Tl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),tN(252," p-action"),Gl(253,"br"),sg()()(),Tl(254,"td",18)(255,"code",19),tN(256,"Function"),sg()(),Tl(257,"td",20),tN(258,"-"),sg(),Tl(259,"td",21)(260,"em")(261,"strong"),tN(262,"(opcional)"),sg()(),Tl(263,"p"),tN(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),sg()()(),Tl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),tN(269," p-action-label"),Gl(270,"br"),sg()()(),Tl(271,"td",18)(272,"code",22),tN(273,"string"),sg()(),Tl(274,"td",20),tN(275,"-"),sg(),Tl(276,"td",21)(277,"em")(278,"strong"),tN(279,"(opcional)"),sg()(),Tl(280,"p"),tN(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),sg()()(),Tl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),tN(286," p-hide"),Gl(287,"br"),sg()()(),Tl(288,"td",18)(289,"code",23),tN(290,"boolean"),sg()(),Tl(291,"td",20)(292,"p")(293,"code"),tN(294,"false"),sg()()(),Tl(295,"td",21)(296,"em")(297,"strong"),tN(298,"(opcional)"),sg()(),Tl(299,"p"),tN(300,"Define se o Toaster esta invisivel."),sg()()(),Tl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),tN(305," (p-hide-change)"),Gl(306,"br"),sg()()(),Tl(307,"td",18)(308,"code",26),tN(309,"EventEmitter"),sg()(),Tl(310,"td",20),tN(311,"-"),sg(),Tl(312,"td",21)(313,"em")(314,"strong"),tN(315,"(opcional)"),sg()(),Tl(316,"p"),tN(317,"Evento emitido quando o valor de "),Tl(318,"code"),tN(319,"isHide"),sg(),tN(320," \xE9 alterado."),sg()()(),Tl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),tN(325," p-message"),Gl(326,"br"),sg()()(),Tl(327,"td",18)(328,"code",22),tN(329,"string"),sg()(),Tl(330,"td",20),tN(331,"-"),sg(),Tl(332,"td",21)(333,"em")(334,"strong"),tN(335,"(opcional)"),sg()(),Tl(336,"p"),tN(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),tN(342," p-show-close"),Gl(343,"br"),sg()()(),Tl(344,"td",18)(345,"code",23),tN(346,"boolean"),sg()(),Tl(347,"td",20)(348,"p")(349,"code"),tN(350,"true"),sg()()(),Tl(351,"td",21)(352,"em")(353,"strong"),tN(354,"(opcional)"),sg()(),Tl(355,"p"),tN(356,"Exibe bot\xE3o de fechar no toaster modo inline."),sg()()(),Tl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),tN(361," p-size-actions"),Gl(362,"br"),sg()()(),Tl(363,"td",18)(364,"code",22),tN(365,"string"),sg()(),Tl(366,"td",20)(367,"p")(368,"code"),tN(369,"medium"),sg()()(),Tl(370,"td",21)(371,"em")(372,"strong"),tN(373,"(opcional)"),sg()(),Tl(374,"p"),tN(375,"Define o tamanho das a\xE7\xF5es no componente:"),sg(),Tl(376,"ul")(377,"li")(378,"code"),tN(379,"small"),sg(),tN(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(381,"li")(382,"code"),tN(383,"medium"),sg(),tN(384,": aplica a medida medium de cada componente."),sg()(),Tl(385,"blockquote")(386,"p"),tN(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(388,"code"),tN(389,"medium"),sg(),tN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(391,"a",27),tN(392,"po-theme"),sg(),tN(393,"."),sg()()()(),Tl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),tN(398," p-support-message"),Gl(399,"br"),sg()()(),Tl(400,"td",18)(401,"code",22),tN(402,"string"),sg()(),Tl(403,"td",20),tN(404,"-"),sg(),Tl(405,"td",21)(406,"em")(407,"strong"),tN(408,"(opcional)"),sg()(),Tl(409,"p"),tN(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),tN(415," p-type"),Gl(416,"br"),sg()()(),Tl(417,"td",18)(418,"code",28),tN(419,"PoToasterType"),sg()(),Tl(420,"td",20)(421,"p")(422,"code"),tN(423,"PoToasterType.Information"),sg()()(),Tl(424,"td",21)(425,"em")(426,"strong"),tN(427,"(opcional)"),sg()(),Tl(428,"p"),tN(429,"Determina o tipo de notifica\xE7\xE3o."),sg(),Tl(430,"p"),tN(431,"Valores aceitos: "),Tl(432,"code"),tN(433,"error"),sg(),tN(434,", "),Tl(435,"code"),tN(436,"information"),sg(),tN(437,", "),Tl(438,"code"),tN(439,"success"),sg(),tN(440," e "),Tl(441,"code"),tN(442,"warning"),sg(),tN(443,"."),sg()()()(),Tl(444,"h3"),tN(445,"Enums"),sg(),Tl(446,"h4",4)(447,"code",5),tN(448,"PoToasterType"),sg()(),Tl(449,"div",2)(450,"p"),tN(451,"Define os tipos poss\xEDveis para o "),Tl(452,"code"),tN(453,"PoToasterComponent"),sg(),tN(454,"."),sg()(),Tl(455,"h4",10),tN(456,"Propriedades"),sg(),Tl(457,"table",11)(458,"tr",12)(459,"th",13),tN(460,"Nome"),sg(),Tl(461,"th",13),tN(462,"Descri\xE7\xE3o"),sg()(),Tl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),tN(467," Error"),Gl(468,"br"),sg()()(),Tl(469,"td",21)(470,"p"),tN(471,"Tipo de toaster para mensagens de erro."),sg()()(),Tl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),tN(476," Information"),Gl(477,"br"),sg()()(),Tl(478,"td",21)(479,"p"),tN(480,"Tipo de toaster para mensagens informativas."),sg()()(),Tl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),tN(485," Success"),Gl(486,"br"),sg()()(),Tl(487,"td",21)(488,"p"),tN(489,"Tipo de toaster para mensagens de sucesso."),sg()()(),Tl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),tN(494," Warning"),Gl(495,"br"),sg()()(),Tl(496,"td",21)(497,"p"),tN(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-toaster-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),sg()()()),a&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,re,se,pe],encapsulation:2})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(ve),vL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,de]})}return i})();export{He as DocPoToasterModule};