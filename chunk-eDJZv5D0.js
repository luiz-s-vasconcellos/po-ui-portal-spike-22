import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dO as to,dP as kv,dQ as Jde,Q as Cl,R as Hl,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,bL as H3,b5 as Ko,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Cl(0,"div",0),Hl(1,"po-toaster",1),og());},dependencies:[Jde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Toaster Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-toaster-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ie],encapsulation:2})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=to.Information;mode=kv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:to.Success},{label:"Error",value:to.Error},{label:"Warning",value:to.Warning},{label:"Information",value:to.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=to.Information,this.mode=kv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&zl(Ko,7)(Ee,5),a&2){let m;uo(m=fo())&&(n.poModal=m.first),uo(m=fo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=gx();Cl(0,"div",2),Hl(1,"po-toaster",3,0),og(),Hl(3,"po-divider"),Cl(4,"form",null,1)(6,"po-radio-group",4),gw("ngModelChange",function(l){return Jy(m),Zx(n.type,l)||(n.type=l),e_(l)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(l){return Jy(m),Zx(n.message,l)||(n.message=l),e_(l)}),og(),Z0(),Cl(8,"po-input",6),gw("ngModelChange",function(l){return Jy(m),Zx(n.supportMessage,l)||(n.supportMessage=l),e_(l)}),og(),Z0(),Cl(9,"po-switch",7),dt("p-change",function(){return n.changeAction()}),gw("ngModelChange",function(l){return Jy(m),Zx(n.hasAction,l)||(n.hasAction=l),e_(l)}),og(),Z0(),Cl(10,"po-input",8),gw("ngModelChange",function(l){return Jy(m),Zx(n.actionLabel,l)||(n.actionLabel=l),e_(l)}),og(),Z0(),Cl(11,"div",2)(12,"po-checkbox-group",9),gw("ngModelChange",function(l){return Jy(m),Zx(n.properties,l)||(n.properties=l),e_(l)}),og(),Z0(),Cl(13,"po-radio-group",10),gw("ngModelChange",function(l){return Jy(m),Zx(n.sizeActions,l)||(n.sizeActions=l),e_(l)}),og(),Z0(),og(),Hl(14,"po-divider"),Cl(15,"div",2)(16,"po-button",11),dt("p-click",function(){return n.restore()}),og()()(),Cl(17,"po-modal",12),qx(18," Notification Action "),og();}a&2&&(Lp(),ZE("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Lp(5),pw("ngModel",n.type),ZE("p-options",n.typeOptions),X0(),Lp(),pw("ngModel",n.message),X0(),Lp(),pw("ngModel",n.supportMessage),X0(),Lp(),pw("ngModel",n.hasAction),X0(),Lp(),pw("ngModel",n.actionLabel),X0(),Lp(2),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.sizeActions),ZE("p-options",n.sizeActionsOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,H3,Ko,Jde],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Toaster Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-toaster-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoToasterModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-toaster."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoToasterComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),og(),Cl(15,"h4"),qx(16,"Acessibilidade tratada no componente"),og(),Cl(17,"p"),qx(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(19,"ul")(20,"li"),qx(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Cl(22,"li"),qx(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),og(),Cl(24,"li"),qx(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),og(),Cl(26,"li"),qx(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),og()(),Cl(28,"h4"),qx(29,"Tokens customiz\xE1veis"),og(),Cl(30,"p"),qx(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(32,"blockquote")(33,"p"),qx(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(35,"a",6),qx(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(37,"."),og()(),Cl(38,"table")(39,"thead")(40,"tr")(41,"th"),qx(42,"Propriedade"),og(),Cl(43,"th"),qx(44,"Descri\xE7\xE3o"),og(),Cl(45,"th"),qx(46,"Valor Padr\xE3o"),og()()(),Cl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),qx(51,"Default Values"),og()(),Hl(52,"td")(53,"td"),og(),Cl(54,"tr")(55,"td")(56,"code"),qx(57,"--font-family"),og()(),Cl(58,"td"),qx(59,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(60,"td")(61,"code"),qx(62,"var(--font-family-theme)"),og()()(),Cl(63,"tr")(64,"td")(65,"code"),qx(66,"--font-color"),og()(),Cl(67,"td"),qx(68,"Cor principal do texto"),og(),Cl(69,"td")(70,"code"),qx(71,"var(--color-neutral-dark-90)"),og()()(),Cl(72,"tr")(73,"td")(74,"code"),qx(75,"--font-color-support"),og()(),Cl(76,"td"),qx(77,"Cor principal do texto de supporte"),og(),Cl(78,"td")(79,"code"),qx(80,"var(--color-neutral-dark-80)"),og()()(),Cl(81,"tr")(82,"td")(83,"code"),qx(84,"--border-radius"),og()(),Cl(85,"td"),qx(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(87,"td")(88,"code"),qx(89,"var(--border-radius-md)"),og()()(),Cl(90,"tr")(91,"td")(92,"strong"),qx(93,"Type Success"),og()(),Hl(94,"td")(95,"td"),og(),Cl(96,"tr")(97,"td")(98,"code"),qx(99,"--color-success"),og()(),Cl(100,"td"),qx(101,"Cor principal no tipo success"),og(),Cl(102,"td")(103,"code"),qx(104,"var(--color-feedback-positive-base)"),og()()(),Cl(105,"tr")(106,"td")(107,"code"),qx(108,"--background-success"),og()(),Cl(109,"td"),qx(110,"Cor de fundo principal no tipo success"),og(),Cl(111,"td")(112,"code"),qx(113,"var(--color-feedback-positive-lightest)"),og()()(),Cl(114,"tr")(115,"td")(116,"code"),qx(117,"--border-color-success"),og()(),Cl(118,"td"),qx(119,"Cor da borda principal tipo success"),og(),Cl(120,"td")(121,"code"),qx(122,"var(--color-feedback-positive-lighter)"),og()()(),Cl(123,"tr")(124,"td")(125,"strong"),qx(126,"Type Error"),og()(),Hl(127,"td")(128,"td"),og(),Cl(129,"tr")(130,"td")(131,"code"),qx(132,"--color-error"),og()(),Cl(133,"td"),qx(134,"Cor principal no tipo error"),og(),Cl(135,"td")(136,"code"),qx(137,"var(--color-feedback-negative-base)"),og()()(),Cl(138,"tr")(139,"td")(140,"code"),qx(141,"--background-error"),og()(),Cl(142,"td"),qx(143,"Cor de fundo principal no tipo error"),og(),Cl(144,"td")(145,"code"),qx(146,"var(--color-feedback-negative-lightest)"),og()()(),Cl(147,"tr")(148,"td")(149,"code"),qx(150,"--border-color-error"),og()(),Cl(151,"td"),qx(152,"Cor da borda principal tipo error"),og(),Cl(153,"td")(154,"code"),qx(155,"var(--color-feedback-negative-lighter)"),og()()(),Cl(156,"tr")(157,"td")(158,"strong"),qx(159,"Type Warning"),og()(),Hl(160,"td")(161,"td"),og(),Cl(162,"tr")(163,"td")(164,"code"),qx(165,"--color-icon-warning"),og()(),Cl(166,"td"),qx(167,"Cor principal do icone no tipo warning"),og(),Cl(168,"td")(169,"code"),qx(170,"var(--color-neutral-dark-90)"),og()()(),Cl(171,"tr")(172,"td")(173,"code"),qx(174,"--color-warning"),og()(),Cl(175,"td"),qx(176,"Cor principal no tipo warning"),og(),Cl(177,"td")(178,"code"),qx(179,"var(--color-feedback-warning-base)"),og()()(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--background-warning"),og()(),Cl(184,"td"),qx(185,"Cor de fundo principal no tipo warning"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-feedback-warning-lightest)"),og()()(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--border-color-warning"),og()(),Cl(193,"td"),qx(194,"Cor da borda principal tipo warning"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--color-feedback-warning-lighter)"),og()()(),Cl(198,"tr")(199,"td")(200,"strong"),qx(201,"Type Info"),og()(),Hl(202,"td")(203,"td"),og(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--color-info"),og()(),Cl(208,"td"),qx(209,"Cor principal no tipo info"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-feedback-info-base)"),og()()(),Cl(213,"tr")(214,"td")(215,"code"),qx(216,"--background-info"),og()(),Cl(217,"td"),qx(218,"Cor de fundo principal no tipo info"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-feedback-info-lightest)"),og()()(),Cl(222,"tr")(223,"td")(224,"code"),qx(225,"--border-color-info"),og()(),Cl(226,"td"),qx(227,"Cor da borda principal tipo info"),og(),Cl(228,"td")(229,"code"),qx(230,"var(--color-feedback-info-lighter)"),og()()()()()(),Cl(231,"div",7)(232,"h4",8),qx(233,"Seletor"),og(),Cl(234,"pre",9),qx(235,`<po-toaster
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
`),og()(),Cl(236,"h4",10),qx(237,"Propriedades"),og(),Cl(238,"table",11)(239,"tr",12)(240,"th",13),qx(241,"Nome"),og(),Cl(242,"th",13),qx(243,"Tipo"),og(),Cl(244,"th",13),qx(245,"Padr\xE3o"),og(),Cl(246,"th",13),qx(247,"Descri\xE7\xE3o"),og()(),Cl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),qx(252," p-action"),Hl(253,"br"),og()()(),Cl(254,"td",18)(255,"code",19),qx(256,"Function"),og()(),Cl(257,"td",20),qx(258,"-"),og(),Cl(259,"td",21)(260,"em")(261,"strong"),qx(262,"(opcional)"),og()(),Cl(263,"p"),qx(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),og()()(),Cl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),qx(269," p-action-label"),Hl(270,"br"),og()()(),Cl(271,"td",18)(272,"code",22),qx(273,"string"),og()(),Cl(274,"td",20),qx(275,"-"),og(),Cl(276,"td",21)(277,"em")(278,"strong"),qx(279,"(opcional)"),og()(),Cl(280,"p"),qx(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Cl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),qx(286," p-hide"),Hl(287,"br"),og()()(),Cl(288,"td",18)(289,"code",23),qx(290,"boolean"),og()(),Cl(291,"td",20)(292,"p")(293,"code"),qx(294,"false"),og()()(),Cl(295,"td",21)(296,"em")(297,"strong"),qx(298,"(opcional)"),og()(),Cl(299,"p"),qx(300,"Define se o Toaster esta invisivel."),og()()(),Cl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),qx(305," (p-hide-change)"),Hl(306,"br"),og()()(),Cl(307,"td",18)(308,"code",26),qx(309,"EventEmitter"),og()(),Cl(310,"td",20),qx(311,"-"),og(),Cl(312,"td",21)(313,"em")(314,"strong"),qx(315,"(opcional)"),og()(),Cl(316,"p"),qx(317,"Evento emitido quando o valor de "),Cl(318,"code"),qx(319,"isHide"),og(),qx(320," \xE9 alterado."),og()()(),Cl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),qx(325," p-message"),Hl(326,"br"),og()()(),Cl(327,"td",18)(328,"code",22),qx(329,"string"),og()(),Cl(330,"td",20),qx(331,"-"),og(),Cl(332,"td",21)(333,"em")(334,"strong"),qx(335,"(opcional)"),og()(),Cl(336,"p"),qx(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Cl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),qx(342," p-show-close"),Hl(343,"br"),og()()(),Cl(344,"td",18)(345,"code",23),qx(346,"boolean"),og()(),Cl(347,"td",20)(348,"p")(349,"code"),qx(350,"true"),og()()(),Cl(351,"td",21)(352,"em")(353,"strong"),qx(354,"(opcional)"),og()(),Cl(355,"p"),qx(356,"Exibe bot\xE3o de fechar no toaster modo inline."),og()()(),Cl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),qx(361," p-size-actions"),Hl(362,"br"),og()()(),Cl(363,"td",18)(364,"code",22),qx(365,"string"),og()(),Cl(366,"td",20)(367,"p")(368,"code"),qx(369,"medium"),og()()(),Cl(370,"td",21)(371,"em")(372,"strong"),qx(373,"(opcional)"),og()(),Cl(374,"p"),qx(375,"Define o tamanho das a\xE7\xF5es no componente:"),og(),Cl(376,"ul")(377,"li")(378,"code"),qx(379,"small"),og(),qx(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(381,"li")(382,"code"),qx(383,"medium"),og(),qx(384,": aplica a medida medium de cada componente."),og()(),Cl(385,"blockquote")(386,"p"),qx(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(388,"code"),qx(389,"medium"),og(),qx(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(391,"a",27),qx(392,"po-theme"),og(),qx(393,"."),og()()()(),Cl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),qx(398," p-support-message"),Hl(399,"br"),og()()(),Cl(400,"td",18)(401,"code",22),qx(402,"string"),og()(),Cl(403,"td",20),qx(404,"-"),og(),Cl(405,"td",21)(406,"em")(407,"strong"),qx(408,"(opcional)"),og()(),Cl(409,"p"),qx(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()(),Cl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),qx(415," p-type"),Hl(416,"br"),og()()(),Cl(417,"td",18)(418,"code",28),qx(419,"PoToasterType"),og()(),Cl(420,"td",20)(421,"p")(422,"code"),qx(423,"PoToasterType.Information"),og()()(),Cl(424,"td",21)(425,"em")(426,"strong"),qx(427,"(opcional)"),og()(),Cl(428,"p"),qx(429,"Determina o tipo de notifica\xE7\xE3o."),og(),Cl(430,"p"),qx(431,"Valores aceitos: "),Cl(432,"code"),qx(433,"error"),og(),qx(434,", "),Cl(435,"code"),qx(436,"information"),og(),qx(437,", "),Cl(438,"code"),qx(439,"success"),og(),qx(440," e "),Cl(441,"code"),qx(442,"warning"),og(),qx(443,"."),og()()()(),Cl(444,"h3"),qx(445,"Enums"),og(),Cl(446,"h4",4)(447,"code",5),qx(448,"PoToasterType"),og()(),Cl(449,"div",2)(450,"p"),qx(451,"Define os tipos poss\xEDveis para o "),Cl(452,"code"),qx(453,"PoToasterComponent"),og(),qx(454,"."),og()(),Cl(455,"h4",10),qx(456,"Propriedades"),og(),Cl(457,"table",11)(458,"tr",12)(459,"th",13),qx(460,"Nome"),og(),Cl(461,"th",13),qx(462,"Descri\xE7\xE3o"),og()(),Cl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),qx(467," Error"),Hl(468,"br"),og()()(),Cl(469,"td",21)(470,"p"),qx(471,"Tipo de toaster para mensagens de erro."),og()()(),Cl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),qx(476," Information"),Hl(477,"br"),og()()(),Cl(478,"td",21)(479,"p"),qx(480,"Tipo de toaster para mensagens informativas."),og()()(),Cl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),qx(485," Success"),Hl(486,"br"),og()()(),Cl(487,"td",21)(488,"p"),qx(489,"Tipo de toaster para mensagens de sucesso."),og()()(),Cl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),qx(494," Warning"),Hl(495,"br"),og()()(),Cl(496,"td",21)(497,"p"),qx(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-toaster-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),og()()()),a&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,re,se,pe],encapsulation:2})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[bL.forChild(ve),bL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ca,de]})}return i})();export{He as DocPoToasterModule};