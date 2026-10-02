import{Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,Lt as fb,Qi as pt,Rn as zte,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,Xn as C9,Yn as Bx,Yt as ko,ai as aN,an as p4,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,vr as Jv,wt as _4,xi as fo}from"./main-TFA52GHY.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(Ac(0,`div`,0),Kc(1,`po-toaster`,1),ug())},dependencies:[zte],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Toaster Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-toaster-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=ko.Information;mode=fb.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:ko.Success},{label:`Error`,value:ko.Error},{label:`Warning`,value:ko.Warning},{label:`Information`,value:ko.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=ko.Information,this.mode=fb.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&Xc(wa,7)(Ee,5),a&2){let m;fo(m=ho())&&(n.poModal=m.first),fo(m=ho())&&(n.toasterRef=m.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let m=Bx();Ac(0,`div`,2),Kc(1,`po-toaster`,3,0),ug(),Kc(3,`po-divider`),Ac(4,`form`,null,1)(6,`po-radio-group`,4),RE(`ngModelChange`,function(l){return Jv(m),DN(n.type,l)||(n.type=l),e_(l)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(m),DN(n.message,l)||(n.message=l),e_(l)}),ug(),p0(),Ac(8,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(m),DN(n.supportMessage,l)||(n.supportMessage=l),e_(l)}),ug(),p0(),Ac(9,`po-switch`,7),pt(`p-change`,function(){return n.changeAction()}),RE(`ngModelChange`,function(l){return Jv(m),DN(n.hasAction,l)||(n.hasAction=l),e_(l)}),ug(),p0(),Ac(10,`po-input`,8),RE(`ngModelChange`,function(l){return Jv(m),DN(n.actionLabel,l)||(n.actionLabel=l),e_(l)}),ug(),p0(),Ac(11,`div`,2)(12,`po-checkbox-group`,9),RE(`ngModelChange`,function(l){return Jv(m),DN(n.properties,l)||(n.properties=l),e_(l)}),ug(),p0(),Ac(13,`po-radio-group`,10),RE(`ngModelChange`,function(l){return Jv(m),DN(n.sizeActions,l)||(n.sizeActions=l),e_(l)}),ug(),p0(),ug(),Kc(14,`po-divider`),Ac(15,`div`,2)(16,`po-button`,11),pt(`p-click`,function(){return n.restore()}),ug()()(),Ac(17,`po-modal`,12),vN(18,` Notification Action `),ug()}a&2&&(Hp(),cE(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),Hp(5),TE(`ngModel`,n.type),cE(`p-options`,n.typeOptions),m0(),Hp(),TE(`ngModel`,n.message),m0(),Hp(),TE(`ngModel`,n.supportMessage),m0(),Hp(),TE(`ngModel`,n.hasAction),m0(),Hp(),TE(`ngModel`,n.actionLabel),m0(),Hp(2),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(),TE(`ngModel`,n.sizeActions),cE(`p-options`,n.sizeActionsOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Cte,p4,wa,zte],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Toaster Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-toaster-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`]],template:function(a,n){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoToasterModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-toaster.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoToasterComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),ug(),Ac(15,`h4`),vN(16,`Acessibilidade tratada no componente`),ug(),Ac(17,`p`),vN(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(19,`ul`)(20,`li`),vN(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),ug(),Ac(22,`li`),vN(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),ug(),Ac(24,`li`),vN(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),ug(),Ac(26,`li`),vN(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),ug()(),Ac(28,`h4`),vN(29,`Tokens customizáveis`),ug(),Ac(30,`p`),vN(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(32,`blockquote`)(33,`p`),vN(34,`Para maiores informações, acesse o guia `),Ac(35,`a`,6),vN(36,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(37,`.`),ug()(),Ac(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),vN(42,`Propriedade`),ug(),Ac(43,`th`),vN(44,`Descrição`),ug(),Ac(45,`th`),vN(46,`Valor Padrão`),ug()()(),Ac(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),vN(51,`Default Values`),ug()(),Kc(52,`td`)(53,`td`),ug(),Ac(54,`tr`)(55,`td`)(56,`code`),vN(57,`--font-family`),ug()(),Ac(58,`td`),vN(59,`Família tipográfica usada`),ug(),Ac(60,`td`)(61,`code`),vN(62,`var(--font-family-theme)`),ug()()(),Ac(63,`tr`)(64,`td`)(65,`code`),vN(66,`--font-color`),ug()(),Ac(67,`td`),vN(68,`Cor principal do texto`),ug(),Ac(69,`td`)(70,`code`),vN(71,`var(--color-neutral-dark-90)`),ug()()(),Ac(72,`tr`)(73,`td`)(74,`code`),vN(75,`--font-color-support`),ug()(),Ac(76,`td`),vN(77,`Cor principal do texto de supporte`),ug(),Ac(78,`td`)(79,`code`),vN(80,`var(--color-neutral-dark-80)`),ug()()(),Ac(81,`tr`)(82,`td`)(83,`code`),vN(84,`--border-radius`),ug()(),Ac(85,`td`),vN(86,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(87,`td`)(88,`code`),vN(89,`var(--border-radius-md)`),ug()()(),Ac(90,`tr`)(91,`td`)(92,`strong`),vN(93,`Type Success`),ug()(),Kc(94,`td`)(95,`td`),ug(),Ac(96,`tr`)(97,`td`)(98,`code`),vN(99,`--color-success`),ug()(),Ac(100,`td`),vN(101,`Cor principal no tipo success`),ug(),Ac(102,`td`)(103,`code`),vN(104,`var(--color-feedback-positive-base)`),ug()()(),Ac(105,`tr`)(106,`td`)(107,`code`),vN(108,`--background-success`),ug()(),Ac(109,`td`),vN(110,`Cor de fundo principal no tipo success`),ug(),Ac(111,`td`)(112,`code`),vN(113,`var(--color-feedback-positive-lightest)`),ug()()(),Ac(114,`tr`)(115,`td`)(116,`code`),vN(117,`--border-color-success`),ug()(),Ac(118,`td`),vN(119,`Cor da borda principal tipo success`),ug(),Ac(120,`td`)(121,`code`),vN(122,`var(--color-feedback-positive-lighter)`),ug()()(),Ac(123,`tr`)(124,`td`)(125,`strong`),vN(126,`Type Error`),ug()(),Kc(127,`td`)(128,`td`),ug(),Ac(129,`tr`)(130,`td`)(131,`code`),vN(132,`--color-error`),ug()(),Ac(133,`td`),vN(134,`Cor principal no tipo error`),ug(),Ac(135,`td`)(136,`code`),vN(137,`var(--color-feedback-negative-base)`),ug()()(),Ac(138,`tr`)(139,`td`)(140,`code`),vN(141,`--background-error`),ug()(),Ac(142,`td`),vN(143,`Cor de fundo principal no tipo error`),ug(),Ac(144,`td`)(145,`code`),vN(146,`var(--color-feedback-negative-lightest)`),ug()()(),Ac(147,`tr`)(148,`td`)(149,`code`),vN(150,`--border-color-error`),ug()(),Ac(151,`td`),vN(152,`Cor da borda principal tipo error`),ug(),Ac(153,`td`)(154,`code`),vN(155,`var(--color-feedback-negative-lighter)`),ug()()(),Ac(156,`tr`)(157,`td`)(158,`strong`),vN(159,`Type Warning`),ug()(),Kc(160,`td`)(161,`td`),ug(),Ac(162,`tr`)(163,`td`)(164,`code`),vN(165,`--color-icon-warning`),ug()(),Ac(166,`td`),vN(167,`Cor principal do icone no tipo warning`),ug(),Ac(168,`td`)(169,`code`),vN(170,`var(--color-neutral-dark-90)`),ug()()(),Ac(171,`tr`)(172,`td`)(173,`code`),vN(174,`--color-warning`),ug()(),Ac(175,`td`),vN(176,`Cor principal no tipo warning`),ug(),Ac(177,`td`)(178,`code`),vN(179,`var(--color-feedback-warning-base)`),ug()()(),Ac(180,`tr`)(181,`td`)(182,`code`),vN(183,`--background-warning`),ug()(),Ac(184,`td`),vN(185,`Cor de fundo principal no tipo warning`),ug(),Ac(186,`td`)(187,`code`),vN(188,`var(--color-feedback-warning-lightest)`),ug()()(),Ac(189,`tr`)(190,`td`)(191,`code`),vN(192,`--border-color-warning`),ug()(),Ac(193,`td`),vN(194,`Cor da borda principal tipo warning`),ug(),Ac(195,`td`)(196,`code`),vN(197,`var(--color-feedback-warning-lighter)`),ug()()(),Ac(198,`tr`)(199,`td`)(200,`strong`),vN(201,`Type Info`),ug()(),Kc(202,`td`)(203,`td`),ug(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--color-info`),ug()(),Ac(208,`td`),vN(209,`Cor principal no tipo info`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-feedback-info-base)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`code`),vN(216,`--background-info`),ug()(),Ac(217,`td`),vN(218,`Cor de fundo principal no tipo info`),ug(),Ac(219,`td`)(220,`code`),vN(221,`var(--color-feedback-info-lightest)`),ug()()(),Ac(222,`tr`)(223,`td`)(224,`code`),vN(225,`--border-color-info`),ug()(),Ac(226,`td`),vN(227,`Cor da borda principal tipo info`),ug(),Ac(228,`td`)(229,`code`),vN(230,`var(--color-feedback-info-lighter)`),ug()()()()()(),Ac(231,`div`,7)(232,`h4`,8),vN(233,`Seletor`),ug(),Ac(234,`pre`,9),vN(235,`<po-toaster
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
`),ug()(),Ac(236,`h4`,10),vN(237,`Propriedades`),ug(),Ac(238,`table`,11)(239,`tr`,12)(240,`th`,13),vN(241,`Nome`),ug(),Ac(242,`th`,13),vN(243,`Tipo`),ug(),Ac(244,`th`,13),vN(245,`Padrão`),ug(),Ac(246,`th`,13),vN(247,`Descrição`),ug()(),Ac(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),vN(252,` p-action`),Kc(253,`br`),ug()()(),Ac(254,`td`,18)(255,`code`,19),vN(256,`Function`),ug()(),Ac(257,`td`,20),vN(258,`-`),ug(),Ac(259,`td`,21)(260,`em`)(261,`strong`),vN(262,`(opcional)`),ug()(),Ac(263,`p`),vN(264,`Ação para a notificação.`),ug()()(),Ac(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),vN(269,` p-action-label`),Kc(270,`br`),ug()()(),Ac(271,`td`,18)(272,`code`,22),vN(273,`string`),ug()(),Ac(274,`td`,20),vN(275,`-`),ug(),Ac(276,`td`,21)(277,`em`)(278,`strong`),vN(279,`(opcional)`),ug()(),Ac(280,`p`),vN(281,`Label do botão quando houver uma ação definida.`),ug()()(),Ac(282,`tr`,14)(283,`td`,15)(284,`div`,16)(285,`span`,17),vN(286,` p-hide`),Kc(287,`br`),ug()()(),Ac(288,`td`,18)(289,`code`,23),vN(290,`boolean`),ug()(),Ac(291,`td`,20)(292,`p`)(293,`code`),vN(294,`false`),ug()()(),Ac(295,`td`,21)(296,`em`)(297,`strong`),vN(298,`(opcional)`),ug()(),Ac(299,`p`),vN(300,`Define se o Toaster esta invisivel.`),ug()()(),Ac(301,`tr`,14)(302,`td`,15)(303,`div`,24)(304,`span`,25),vN(305,` (p-hide-change)`),Kc(306,`br`),ug()()(),Ac(307,`td`,18)(308,`code`,26),vN(309,`EventEmitter`),ug()(),Ac(310,`td`,20),vN(311,`-`),ug(),Ac(312,`td`,21)(313,`em`)(314,`strong`),vN(315,`(opcional)`),ug()(),Ac(316,`p`),vN(317,`Evento emitido quando o valor de `),Ac(318,`code`),vN(319,`isHide`),ug(),vN(320,` é alterado.`),ug()()(),Ac(321,`tr`,14)(322,`td`,15)(323,`div`,16)(324,`span`,17),vN(325,` p-message`),Kc(326,`br`),ug()()(),Ac(327,`td`,18)(328,`code`,22),vN(329,`string`),ug()(),Ac(330,`td`,20),vN(331,`-`),ug(),Ac(332,`td`,21)(333,`em`)(334,`strong`),vN(335,`(opcional)`),ug()(),Ac(336,`p`),vN(337,`Mensagem a ser exibida na notificação.`),ug()()(),Ac(338,`tr`,14)(339,`td`,15)(340,`div`,16)(341,`span`,17),vN(342,` p-show-close`),Kc(343,`br`),ug()()(),Ac(344,`td`,18)(345,`code`,23),vN(346,`boolean`),ug()(),Ac(347,`td`,20)(348,`p`)(349,`code`),vN(350,`true`),ug()()(),Ac(351,`td`,21)(352,`em`)(353,`strong`),vN(354,`(opcional)`),ug()(),Ac(355,`p`),vN(356,`Exibe botão de fechar no toaster modo inline.`),ug()()(),Ac(357,`tr`,14)(358,`td`,15)(359,`div`,16)(360,`span`,17),vN(361,` p-size-actions`),Kc(362,`br`),ug()()(),Ac(363,`td`,18)(364,`code`,22),vN(365,`string`),ug()(),Ac(366,`td`,20)(367,`p`)(368,`code`),vN(369,`medium`),ug()()(),Ac(370,`td`,21)(371,`em`)(372,`strong`),vN(373,`(opcional)`),ug()(),Ac(374,`p`),vN(375,`Define o tamanho das ações no componente:`),ug(),Ac(376,`ul`)(377,`li`)(378,`code`),vN(379,`small`),ug(),vN(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(381,`li`)(382,`code`),vN(383,`medium`),ug(),vN(384,`: aplica a medida medium de cada componente.`),ug()(),Ac(385,`blockquote`)(386,`p`),vN(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(388,`code`),vN(389,`medium`),ug(),vN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(391,`a`,27),vN(392,`po-theme`),ug(),vN(393,`.`),ug()()()(),Ac(394,`tr`,14)(395,`td`,15)(396,`div`,16)(397,`span`,17),vN(398,` p-support-message`),Kc(399,`br`),ug()()(),Ac(400,`td`,18)(401,`code`,22),vN(402,`string`),ug()(),Ac(403,`td`,20),vN(404,`-`),ug(),Ac(405,`td`,21)(406,`em`)(407,`strong`),vN(408,`(opcional)`),ug()(),Ac(409,`p`),vN(410,`Mensagem de suporte a ser exibida na notificação.`),ug()()(),Ac(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),vN(415,` p-type`),Kc(416,`br`),ug()()(),Ac(417,`td`,18)(418,`code`,28),vN(419,`PoToasterType`),ug()(),Ac(420,`td`,20)(421,`p`)(422,`code`),vN(423,`PoToasterType.Information`),ug()()(),Ac(424,`td`,21)(425,`em`)(426,`strong`),vN(427,`(opcional)`),ug()(),Ac(428,`p`),vN(429,`Determina o tipo de notificação.`),ug(),Ac(430,`p`),vN(431,`Valores aceitos: `),Ac(432,`code`),vN(433,`error`),ug(),vN(434,`, `),Ac(435,`code`),vN(436,`information`),ug(),vN(437,`, `),Ac(438,`code`),vN(439,`success`),ug(),vN(440,` e `),Ac(441,`code`),vN(442,`warning`),ug(),vN(443,`.`),ug()()()(),Ac(444,`h3`),vN(445,`Enums`),ug(),Ac(446,`h4`,4)(447,`code`,5),vN(448,`PoToasterType`),ug()(),Ac(449,`div`,2)(450,`p`),vN(451,`Define os tipos possíveis para o `),Ac(452,`code`),vN(453,`PoToasterComponent`),ug(),vN(454,`.`),ug()(),Ac(455,`h4`,10),vN(456,`Propriedades`),ug(),Ac(457,`table`,11)(458,`tr`,12)(459,`th`,13),vN(460,`Nome`),ug(),Ac(461,`th`,13),vN(462,`Descrição`),ug()(),Ac(463,`tr`,14)(464,`td`,15)(465,`div`,16)(466,`span`,17),vN(467,` Error`),Kc(468,`br`),ug()()(),Ac(469,`td`,21)(470,`p`),vN(471,`Tipo de toaster para mensagens de erro.`),ug()()(),Ac(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),vN(476,` Information`),Kc(477,`br`),ug()()(),Ac(478,`td`,21)(479,`p`),vN(480,`Tipo de toaster para mensagens informativas.`),ug()()(),Ac(481,`tr`,14)(482,`td`,15)(483,`div`,16)(484,`span`,17),vN(485,` Success`),Kc(486,`br`),ug()()(),Ac(487,`td`,21)(488,`p`),vN(489,`Tipo de toaster para mensagens de sucesso.`),ug()()(),Ac(490,`tr`,14)(491,`td`,15)(492,`div`,16)(493,`span`,17),vN(494,` Warning`),Kc(495,`br`),ug()()(),Ac(496,`td`,21)(497,`p`),vN(498,`Tipo de toaster para mensagens de atenção.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Toaster`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-toaster-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-toaster-basic-view`)(6,`sample-po-toaster-labs-view`),ug()()()),a&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[vze,tae,aae,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[kL.forChild(ve),kL]})}return i})();var He=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[Ta,de]})}return i})();export{He as DocPoToasterModule};