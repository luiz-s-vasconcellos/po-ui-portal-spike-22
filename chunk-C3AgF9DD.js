import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,dI as Xn$1,dJ as Tv,dK as Nde,T as Tl,L as Gl,M as sg,an as AO,aH as Ka,b8 as Ume,b9 as $me,C as iN,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,bH as k3,b6 as Yo,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,a3 as sNe,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Tl(0,"div",0),Gl(1,"po-toaster",1),sg());},dependencies:[Nde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Toaster Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toaster-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ge,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=Xn$1.Information;mode=Tv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Xn$1.Success},{label:"Error",value:Xn$1.Error},{label:"Warning",value:Xn$1.Warning},{label:"Information",value:Xn$1.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=Xn$1.Information,this.mode=Tv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&Yl(Yo,7)(Ee,5),a&2){let m;uo(m=fo())&&(n.poModal=m.first),uo(m=fo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=Sx();Tl(0,"div",2),Gl(1,"po-toaster",3,0),sg(),Gl(3,"po-divider"),Tl(4,"form",null,1)(6,"po-radio-group",4),ww("ngModelChange",function(l){return Ky(m),sN(n.type,l)||(n.type=l),Xy(l)}),sg(),r0(),Tl(7,"po-input",5),ww("ngModelChange",function(l){return Ky(m),sN(n.message,l)||(n.message=l),Xy(l)}),sg(),r0(),Tl(8,"po-input",6),ww("ngModelChange",function(l){return Ky(m),sN(n.supportMessage,l)||(n.supportMessage=l),Xy(l)}),sg(),r0(),Tl(9,"po-switch",7),ht("p-change",function(){return n.changeAction()}),ww("ngModelChange",function(l){return Ky(m),sN(n.hasAction,l)||(n.hasAction=l),Xy(l)}),sg(),r0(),Tl(10,"po-input",8),ww("ngModelChange",function(l){return Ky(m),sN(n.actionLabel,l)||(n.actionLabel=l),Xy(l)}),sg(),r0(),Tl(11,"div",2)(12,"po-checkbox-group",9),ww("ngModelChange",function(l){return Ky(m),sN(n.properties,l)||(n.properties=l),Xy(l)}),sg(),r0(),Tl(13,"po-radio-group",10),ww("ngModelChange",function(l){return Ky(m),sN(n.sizeActions,l)||(n.sizeActions=l),Xy(l)}),sg(),r0(),sg(),Gl(14,"po-divider"),Tl(15,"div",2)(16,"po-button",11),ht("p-click",function(){return n.restore()}),sg()()(),Tl(17,"po-modal",12),iN(18," Notification Action "),sg();}a&2&&(Vp(),nw("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Vp(5),Ew("ngModel",n.type),nw("p-options",n.typeOptions),o0(),Vp(),Ew("ngModel",n.message),o0(),Vp(),Ew("ngModel",n.supportMessage),o0(),Vp(),Ew("ngModel",n.hasAction),o0(),Vp(),Ew("ngModel",n.actionLabel),o0(),Vp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(),Ew("ngModel",n.sizeActions),nw("p-options",n.sizeActionsOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,b3,L3,Tde,k3,Yo,Nde],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Toaster Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toaster-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,be,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoToasterModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-toaster."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoToasterComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),sg(),Tl(15,"h4"),iN(16,"Acessibilidade tratada no componente"),sg(),Tl(17,"p"),iN(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(19,"ul")(20,"li"),iN(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),sg(),Tl(22,"li"),iN(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),sg(),Tl(24,"li"),iN(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),sg(),Tl(26,"li"),iN(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),sg()(),Tl(28,"h4"),iN(29,"Tokens customiz\xE1veis"),sg(),Tl(30,"p"),iN(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(32,"blockquote")(33,"p"),iN(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(35,"a",6),iN(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(37,"."),sg()(),Tl(38,"table")(39,"thead")(40,"tr")(41,"th"),iN(42,"Propriedade"),sg(),Tl(43,"th"),iN(44,"Descri\xE7\xE3o"),sg(),Tl(45,"th"),iN(46,"Valor Padr\xE3o"),sg()()(),Tl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),iN(51,"Default Values"),sg()(),Gl(52,"td")(53,"td"),sg(),Tl(54,"tr")(55,"td")(56,"code"),iN(57,"--font-family"),sg()(),Tl(58,"td"),iN(59,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(60,"td")(61,"code"),iN(62,"var(--font-family-theme)"),sg()()(),Tl(63,"tr")(64,"td")(65,"code"),iN(66,"--font-color"),sg()(),Tl(67,"td"),iN(68,"Cor principal do texto"),sg(),Tl(69,"td")(70,"code"),iN(71,"var(--color-neutral-dark-90)"),sg()()(),Tl(72,"tr")(73,"td")(74,"code"),iN(75,"--font-color-support"),sg()(),Tl(76,"td"),iN(77,"Cor principal do texto de supporte"),sg(),Tl(78,"td")(79,"code"),iN(80,"var(--color-neutral-dark-80)"),sg()()(),Tl(81,"tr")(82,"td")(83,"code"),iN(84,"--border-radius"),sg()(),Tl(85,"td"),iN(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(87,"td")(88,"code"),iN(89,"var(--border-radius-md)"),sg()()(),Tl(90,"tr")(91,"td")(92,"strong"),iN(93,"Type Success"),sg()(),Gl(94,"td")(95,"td"),sg(),Tl(96,"tr")(97,"td")(98,"code"),iN(99,"--color-success"),sg()(),Tl(100,"td"),iN(101,"Cor principal no tipo success"),sg(),Tl(102,"td")(103,"code"),iN(104,"var(--color-feedback-positive-base)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),iN(108,"--background-success"),sg()(),Tl(109,"td"),iN(110,"Cor de fundo principal no tipo success"),sg(),Tl(111,"td")(112,"code"),iN(113,"var(--color-feedback-positive-lightest)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),iN(117,"--border-color-success"),sg()(),Tl(118,"td"),iN(119,"Cor da borda principal tipo success"),sg(),Tl(120,"td")(121,"code"),iN(122,"var(--color-feedback-positive-lighter)"),sg()()(),Tl(123,"tr")(124,"td")(125,"strong"),iN(126,"Type Error"),sg()(),Gl(127,"td")(128,"td"),sg(),Tl(129,"tr")(130,"td")(131,"code"),iN(132,"--color-error"),sg()(),Tl(133,"td"),iN(134,"Cor principal no tipo error"),sg(),Tl(135,"td")(136,"code"),iN(137,"var(--color-feedback-negative-base)"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),iN(141,"--background-error"),sg()(),Tl(142,"td"),iN(143,"Cor de fundo principal no tipo error"),sg(),Tl(144,"td")(145,"code"),iN(146,"var(--color-feedback-negative-lightest)"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),iN(150,"--border-color-error"),sg()(),Tl(151,"td"),iN(152,"Cor da borda principal tipo error"),sg(),Tl(153,"td")(154,"code"),iN(155,"var(--color-feedback-negative-lighter)"),sg()()(),Tl(156,"tr")(157,"td")(158,"strong"),iN(159,"Type Warning"),sg()(),Gl(160,"td")(161,"td"),sg(),Tl(162,"tr")(163,"td")(164,"code"),iN(165,"--color-icon-warning"),sg()(),Tl(166,"td"),iN(167,"Cor principal do icone no tipo warning"),sg(),Tl(168,"td")(169,"code"),iN(170,"var(--color-neutral-dark-90)"),sg()()(),Tl(171,"tr")(172,"td")(173,"code"),iN(174,"--color-warning"),sg()(),Tl(175,"td"),iN(176,"Cor principal no tipo warning"),sg(),Tl(177,"td")(178,"code"),iN(179,"var(--color-feedback-warning-base)"),sg()()(),Tl(180,"tr")(181,"td")(182,"code"),iN(183,"--background-warning"),sg()(),Tl(184,"td"),iN(185,"Cor de fundo principal no tipo warning"),sg(),Tl(186,"td")(187,"code"),iN(188,"var(--color-feedback-warning-lightest)"),sg()()(),Tl(189,"tr")(190,"td")(191,"code"),iN(192,"--border-color-warning"),sg()(),Tl(193,"td"),iN(194,"Cor da borda principal tipo warning"),sg(),Tl(195,"td")(196,"code"),iN(197,"var(--color-feedback-warning-lighter)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),iN(201,"Type Info"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),iN(207,"--color-info"),sg()(),Tl(208,"td"),iN(209,"Cor principal no tipo info"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-feedback-info-base)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),iN(216,"--background-info"),sg()(),Tl(217,"td"),iN(218,"Cor de fundo principal no tipo info"),sg(),Tl(219,"td")(220,"code"),iN(221,"var(--color-feedback-info-lightest)"),sg()()(),Tl(222,"tr")(223,"td")(224,"code"),iN(225,"--border-color-info"),sg()(),Tl(226,"td"),iN(227,"Cor da borda principal tipo info"),sg(),Tl(228,"td")(229,"code"),iN(230,"var(--color-feedback-info-lighter)"),sg()()()()()(),Tl(231,"div",7)(232,"h4",8),iN(233,"Seletor"),sg(),Tl(234,"pre",9),iN(235,`<po-toaster
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
`),sg()(),Tl(236,"h4",10),iN(237,"Propriedades"),sg(),Tl(238,"table",11)(239,"tr",12)(240,"th",13),iN(241,"Nome"),sg(),Tl(242,"th",13),iN(243,"Tipo"),sg(),Tl(244,"th",13),iN(245,"Padr\xE3o"),sg(),Tl(246,"th",13),iN(247,"Descri\xE7\xE3o"),sg()(),Tl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),iN(252," p-action"),Gl(253,"br"),sg()()(),Tl(254,"td",18)(255,"code",19),iN(256,"Function"),sg()(),Tl(257,"td",20),iN(258,"-"),sg(),Tl(259,"td",21)(260,"em")(261,"strong"),iN(262,"(opcional)"),sg()(),Tl(263,"p"),iN(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),sg()()(),Tl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),iN(269," p-action-label"),Gl(270,"br"),sg()()(),Tl(271,"td",18)(272,"code",22),iN(273,"string"),sg()(),Tl(274,"td",20),iN(275,"-"),sg(),Tl(276,"td",21)(277,"em")(278,"strong"),iN(279,"(opcional)"),sg()(),Tl(280,"p"),iN(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),sg()()(),Tl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),iN(286," p-hide"),Gl(287,"br"),sg()()(),Tl(288,"td",18)(289,"code",23),iN(290,"boolean"),sg()(),Tl(291,"td",20)(292,"p")(293,"code"),iN(294,"false"),sg()()(),Tl(295,"td",21)(296,"em")(297,"strong"),iN(298,"(opcional)"),sg()(),Tl(299,"p"),iN(300,"Define se o Toaster esta invisivel."),sg()()(),Tl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),iN(305," (p-hide-change)"),Gl(306,"br"),sg()()(),Tl(307,"td",18)(308,"code",26),iN(309,"EventEmitter"),sg()(),Tl(310,"td",20),iN(311,"-"),sg(),Tl(312,"td",21)(313,"em")(314,"strong"),iN(315,"(opcional)"),sg()(),Tl(316,"p"),iN(317,"Evento emitido quando o valor de "),Tl(318,"code"),iN(319,"isHide"),sg(),iN(320," \xE9 alterado."),sg()()(),Tl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),iN(325," p-message"),Gl(326,"br"),sg()()(),Tl(327,"td",18)(328,"code",22),iN(329,"string"),sg()(),Tl(330,"td",20),iN(331,"-"),sg(),Tl(332,"td",21)(333,"em")(334,"strong"),iN(335,"(opcional)"),sg()(),Tl(336,"p"),iN(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),iN(342," p-show-close"),Gl(343,"br"),sg()()(),Tl(344,"td",18)(345,"code",23),iN(346,"boolean"),sg()(),Tl(347,"td",20)(348,"p")(349,"code"),iN(350,"true"),sg()()(),Tl(351,"td",21)(352,"em")(353,"strong"),iN(354,"(opcional)"),sg()(),Tl(355,"p"),iN(356,"Exibe bot\xE3o de fechar no toaster modo inline."),sg()()(),Tl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),iN(361," p-size-actions"),Gl(362,"br"),sg()()(),Tl(363,"td",18)(364,"code",22),iN(365,"string"),sg()(),Tl(366,"td",20)(367,"p")(368,"code"),iN(369,"medium"),sg()()(),Tl(370,"td",21)(371,"em")(372,"strong"),iN(373,"(opcional)"),sg()(),Tl(374,"p"),iN(375,"Define o tamanho das a\xE7\xF5es no componente:"),sg(),Tl(376,"ul")(377,"li")(378,"code"),iN(379,"small"),sg(),iN(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(381,"li")(382,"code"),iN(383,"medium"),sg(),iN(384,": aplica a medida medium de cada componente."),sg()(),Tl(385,"blockquote")(386,"p"),iN(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(388,"code"),iN(389,"medium"),sg(),iN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(391,"a",27),iN(392,"po-theme"),sg(),iN(393,"."),sg()()()(),Tl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),iN(398," p-support-message"),Gl(399,"br"),sg()()(),Tl(400,"td",18)(401,"code",22),iN(402,"string"),sg()(),Tl(403,"td",20),iN(404,"-"),sg(),Tl(405,"td",21)(406,"em")(407,"strong"),iN(408,"(opcional)"),sg()(),Tl(409,"p"),iN(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),iN(415," p-type"),Gl(416,"br"),sg()()(),Tl(417,"td",18)(418,"code",28),iN(419,"PoToasterType"),sg()(),Tl(420,"td",20)(421,"p")(422,"code"),iN(423,"PoToasterType.Information"),sg()()(),Tl(424,"td",21)(425,"em")(426,"strong"),iN(427,"(opcional)"),sg()(),Tl(428,"p"),iN(429,"Determina o tipo de notifica\xE7\xE3o."),sg(),Tl(430,"p"),iN(431,"Valores aceitos: "),Tl(432,"code"),iN(433,"error"),sg(),iN(434,", "),Tl(435,"code"),iN(436,"information"),sg(),iN(437,", "),Tl(438,"code"),iN(439,"success"),sg(),iN(440," e "),Tl(441,"code"),iN(442,"warning"),sg(),iN(443,"."),sg()()()(),Tl(444,"h3"),iN(445,"Enums"),sg(),Tl(446,"h4",4)(447,"code",5),iN(448,"PoToasterType"),sg()(),Tl(449,"div",2)(450,"p"),iN(451,"Define os tipos poss\xEDveis para o "),Tl(452,"code"),iN(453,"PoToasterComponent"),sg(),iN(454,"."),sg()(),Tl(455,"h4",10),iN(456,"Propriedades"),sg(),Tl(457,"table",11)(458,"tr",12)(459,"th",13),iN(460,"Nome"),sg(),Tl(461,"th",13),iN(462,"Descri\xE7\xE3o"),sg()(),Tl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),iN(467," Error"),Gl(468,"br"),sg()()(),Tl(469,"td",21)(470,"p"),iN(471,"Tipo de toaster para mensagens de erro."),sg()()(),Tl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),iN(476," Information"),Gl(477,"br"),sg()()(),Tl(478,"td",21)(479,"p"),iN(480,"Tipo de toaster para mensagens informativas."),sg()()(),Tl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),iN(485," Success"),Gl(486,"br"),sg()()(),Tl(487,"td",21)(488,"p"),iN(489,"Tipo de toaster para mensagens de sucesso."),sg()()(),Tl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),iN(494," Warning"),Gl(495,"br"),sg()()(),Tl(496,"td",21)(497,"p"),iN(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-toaster-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),sg()()()),a&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,re,se,pe],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[DL.forChild(ve),DL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,de]})}return i})();export{He as DocPoToasterModule};