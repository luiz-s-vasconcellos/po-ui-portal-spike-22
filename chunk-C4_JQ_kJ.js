import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Li as ht,Ni as gY,Nr as PO,Nt as cb,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,gt as To,ha as ww,l as ar,la as uo,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,tn as j0e,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(Tl(0,`div`,0),Gl(1,`po-toaster`,1),ag())},dependencies:[j0e],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Toaster Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-toaster-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=To.Information;mode=cb.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:To.Success},{label:`Error`,value:To.Error},{label:`Warning`,value:To.Warning},{label:`Information`,value:To.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=To.Information,this.mode=cb.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&Yl(vr,7)(Ee,5),a&2){let m;lo(m=uo())&&(n.poModal=m.first),lo(m=uo())&&(n.toasterRef=m.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let m=Ax();Tl(0,`div`,2),Gl(1,`po-toaster`,3,0),ag(),Gl(3,`po-divider`),Tl(4,`form`,null,1)(6,`po-radio-group`,4),ww(`ngModelChange`,function(l){return Ky(m),uN(n.type,l)||(n.type=l),Xy(l)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(m),uN(n.message,l)||(n.message=l),Xy(l)}),ag(),a0(),Tl(8,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(m),uN(n.supportMessage,l)||(n.supportMessage=l),Xy(l)}),ag(),a0(),Tl(9,`po-switch`,7),ht(`p-change`,function(){return n.changeAction()}),ww(`ngModelChange`,function(l){return Ky(m),uN(n.hasAction,l)||(n.hasAction=l),Xy(l)}),ag(),a0(),Tl(10,`po-input`,8),ww(`ngModelChange`,function(l){return Ky(m),uN(n.actionLabel,l)||(n.actionLabel=l),Xy(l)}),ag(),a0(),Tl(11,`div`,2)(12,`po-checkbox-group`,9),ww(`ngModelChange`,function(l){return Ky(m),uN(n.properties,l)||(n.properties=l),Xy(l)}),ag(),a0(),Tl(13,`po-radio-group`,10),ww(`ngModelChange`,function(l){return Ky(m),uN(n.sizeActions,l)||(n.sizeActions=l),Xy(l)}),ag(),a0(),ag(),Gl(14,`po-divider`),Tl(15,`div`,2)(16,`po-button`,11),ht(`p-click`,function(){return n.restore()}),ag()()(),Tl(17,`po-modal`,12),cN(18,` Notification Action `),ag()}a&2&&(jp(),nw(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),jp(5),Ew(`ngModel`,n.type),nw(`p-options`,n.typeOptions),l0(),jp(),Ew(`ngModel`,n.message),l0(),jp(),Ew(`ngModel`,n.supportMessage),l0(),jp(),Ew(`ngModel`,n.hasAction),l0(),jp(),Ew(`ngModel`,n.actionLabel),l0(),jp(2),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(),Ew(`ngModel`,n.sizeActions),nw(`p-options`,n.sizeActionsOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,j4,vr,j0e],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Toaster Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-toaster-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`]],template:function(a,n){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoToasterModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-toaster.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoToasterComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),ag(),Tl(15,`h4`),cN(16,`Acessibilidade tratada no componente`),ag(),Tl(17,`p`),cN(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(19,`ul`)(20,`li`),cN(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),ag(),Tl(22,`li`),cN(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),ag(),Tl(24,`li`),cN(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),ag(),Tl(26,`li`),cN(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),ag()(),Tl(28,`h4`),cN(29,`Tokens customizáveis`),ag(),Tl(30,`p`),cN(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(32,`blockquote`)(33,`p`),cN(34,`Para maiores informações, acesse o guia `),Tl(35,`a`,6),cN(36,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(37,`.`),ag()(),Tl(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),cN(42,`Propriedade`),ag(),Tl(43,`th`),cN(44,`Descrição`),ag(),Tl(45,`th`),cN(46,`Valor Padrão`),ag()()(),Tl(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),cN(51,`Default Values`),ag()(),Gl(52,`td`)(53,`td`),ag(),Tl(54,`tr`)(55,`td`)(56,`code`),cN(57,`--font-family`),ag()(),Tl(58,`td`),cN(59,`Família tipográfica usada`),ag(),Tl(60,`td`)(61,`code`),cN(62,`var(--font-family-theme)`),ag()()(),Tl(63,`tr`)(64,`td`)(65,`code`),cN(66,`--font-color`),ag()(),Tl(67,`td`),cN(68,`Cor principal do texto`),ag(),Tl(69,`td`)(70,`code`),cN(71,`var(--color-neutral-dark-90)`),ag()()(),Tl(72,`tr`)(73,`td`)(74,`code`),cN(75,`--font-color-support`),ag()(),Tl(76,`td`),cN(77,`Cor principal do texto de supporte`),ag(),Tl(78,`td`)(79,`code`),cN(80,`var(--color-neutral-dark-80)`),ag()()(),Tl(81,`tr`)(82,`td`)(83,`code`),cN(84,`--border-radius`),ag()(),Tl(85,`td`),cN(86,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(87,`td`)(88,`code`),cN(89,`var(--border-radius-md)`),ag()()(),Tl(90,`tr`)(91,`td`)(92,`strong`),cN(93,`Type Success`),ag()(),Gl(94,`td`)(95,`td`),ag(),Tl(96,`tr`)(97,`td`)(98,`code`),cN(99,`--color-success`),ag()(),Tl(100,`td`),cN(101,`Cor principal no tipo success`),ag(),Tl(102,`td`)(103,`code`),cN(104,`var(--color-feedback-positive-base)`),ag()()(),Tl(105,`tr`)(106,`td`)(107,`code`),cN(108,`--background-success`),ag()(),Tl(109,`td`),cN(110,`Cor de fundo principal no tipo success`),ag(),Tl(111,`td`)(112,`code`),cN(113,`var(--color-feedback-positive-lightest)`),ag()()(),Tl(114,`tr`)(115,`td`)(116,`code`),cN(117,`--border-color-success`),ag()(),Tl(118,`td`),cN(119,`Cor da borda principal tipo success`),ag(),Tl(120,`td`)(121,`code`),cN(122,`var(--color-feedback-positive-lighter)`),ag()()(),Tl(123,`tr`)(124,`td`)(125,`strong`),cN(126,`Type Error`),ag()(),Gl(127,`td`)(128,`td`),ag(),Tl(129,`tr`)(130,`td`)(131,`code`),cN(132,`--color-error`),ag()(),Tl(133,`td`),cN(134,`Cor principal no tipo error`),ag(),Tl(135,`td`)(136,`code`),cN(137,`var(--color-feedback-negative-base)`),ag()()(),Tl(138,`tr`)(139,`td`)(140,`code`),cN(141,`--background-error`),ag()(),Tl(142,`td`),cN(143,`Cor de fundo principal no tipo error`),ag(),Tl(144,`td`)(145,`code`),cN(146,`var(--color-feedback-negative-lightest)`),ag()()(),Tl(147,`tr`)(148,`td`)(149,`code`),cN(150,`--border-color-error`),ag()(),Tl(151,`td`),cN(152,`Cor da borda principal tipo error`),ag(),Tl(153,`td`)(154,`code`),cN(155,`var(--color-feedback-negative-lighter)`),ag()()(),Tl(156,`tr`)(157,`td`)(158,`strong`),cN(159,`Type Warning`),ag()(),Gl(160,`td`)(161,`td`),ag(),Tl(162,`tr`)(163,`td`)(164,`code`),cN(165,`--color-icon-warning`),ag()(),Tl(166,`td`),cN(167,`Cor principal do icone no tipo warning`),ag(),Tl(168,`td`)(169,`code`),cN(170,`var(--color-neutral-dark-90)`),ag()()(),Tl(171,`tr`)(172,`td`)(173,`code`),cN(174,`--color-warning`),ag()(),Tl(175,`td`),cN(176,`Cor principal no tipo warning`),ag(),Tl(177,`td`)(178,`code`),cN(179,`var(--color-feedback-warning-base)`),ag()()(),Tl(180,`tr`)(181,`td`)(182,`code`),cN(183,`--background-warning`),ag()(),Tl(184,`td`),cN(185,`Cor de fundo principal no tipo warning`),ag(),Tl(186,`td`)(187,`code`),cN(188,`var(--color-feedback-warning-lightest)`),ag()()(),Tl(189,`tr`)(190,`td`)(191,`code`),cN(192,`--border-color-warning`),ag()(),Tl(193,`td`),cN(194,`Cor da borda principal tipo warning`),ag(),Tl(195,`td`)(196,`code`),cN(197,`var(--color-feedback-warning-lighter)`),ag()()(),Tl(198,`tr`)(199,`td`)(200,`strong`),cN(201,`Type Info`),ag()(),Gl(202,`td`)(203,`td`),ag(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--color-info`),ag()(),Tl(208,`td`),cN(209,`Cor principal no tipo info`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-feedback-info-base)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`code`),cN(216,`--background-info`),ag()(),Tl(217,`td`),cN(218,`Cor de fundo principal no tipo info`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-feedback-info-lightest)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`code`),cN(225,`--border-color-info`),ag()(),Tl(226,`td`),cN(227,`Cor da borda principal tipo info`),ag(),Tl(228,`td`)(229,`code`),cN(230,`var(--color-feedback-info-lighter)`),ag()()()()()(),Tl(231,`div`,7)(232,`h4`,8),cN(233,`Seletor`),ag(),Tl(234,`pre`,9),cN(235,`<po-toaster
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
`),ag()(),Tl(236,`h4`,10),cN(237,`Propriedades`),ag(),Tl(238,`table`,11)(239,`tr`,12)(240,`th`,13),cN(241,`Nome`),ag(),Tl(242,`th`,13),cN(243,`Tipo`),ag(),Tl(244,`th`,13),cN(245,`Padrão`),ag(),Tl(246,`th`,13),cN(247,`Descrição`),ag()(),Tl(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),cN(252,` p-action`),Gl(253,`br`),ag()()(),Tl(254,`td`,18)(255,`code`,19),cN(256,`Function`),ag()(),Tl(257,`td`,20),cN(258,`-`),ag(),Tl(259,`td`,21)(260,`em`)(261,`strong`),cN(262,`(opcional)`),ag()(),Tl(263,`p`),cN(264,`Ação para a notificação.`),ag()()(),Tl(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),cN(269,` p-action-label`),Gl(270,`br`),ag()()(),Tl(271,`td`,18)(272,`code`,22),cN(273,`string`),ag()(),Tl(274,`td`,20),cN(275,`-`),ag(),Tl(276,`td`,21)(277,`em`)(278,`strong`),cN(279,`(opcional)`),ag()(),Tl(280,`p`),cN(281,`Label do botão quando houver uma ação definida.`),ag()()(),Tl(282,`tr`,14)(283,`td`,15)(284,`div`,16)(285,`span`,17),cN(286,` p-hide`),Gl(287,`br`),ag()()(),Tl(288,`td`,18)(289,`code`,23),cN(290,`boolean`),ag()(),Tl(291,`td`,20)(292,`p`)(293,`code`),cN(294,`false`),ag()()(),Tl(295,`td`,21)(296,`em`)(297,`strong`),cN(298,`(opcional)`),ag()(),Tl(299,`p`),cN(300,`Define se o Toaster esta invisivel.`),ag()()(),Tl(301,`tr`,14)(302,`td`,15)(303,`div`,24)(304,`span`,25),cN(305,` (p-hide-change)`),Gl(306,`br`),ag()()(),Tl(307,`td`,18)(308,`code`,26),cN(309,`EventEmitter`),ag()(),Tl(310,`td`,20),cN(311,`-`),ag(),Tl(312,`td`,21)(313,`em`)(314,`strong`),cN(315,`(opcional)`),ag()(),Tl(316,`p`),cN(317,`Evento emitido quando o valor de `),Tl(318,`code`),cN(319,`isHide`),ag(),cN(320,` é alterado.`),ag()()(),Tl(321,`tr`,14)(322,`td`,15)(323,`div`,16)(324,`span`,17),cN(325,` p-message`),Gl(326,`br`),ag()()(),Tl(327,`td`,18)(328,`code`,22),cN(329,`string`),ag()(),Tl(330,`td`,20),cN(331,`-`),ag(),Tl(332,`td`,21)(333,`em`)(334,`strong`),cN(335,`(opcional)`),ag()(),Tl(336,`p`),cN(337,`Mensagem a ser exibida na notificação.`),ag()()(),Tl(338,`tr`,14)(339,`td`,15)(340,`div`,16)(341,`span`,17),cN(342,` p-show-close`),Gl(343,`br`),ag()()(),Tl(344,`td`,18)(345,`code`,23),cN(346,`boolean`),ag()(),Tl(347,`td`,20)(348,`p`)(349,`code`),cN(350,`true`),ag()()(),Tl(351,`td`,21)(352,`em`)(353,`strong`),cN(354,`(opcional)`),ag()(),Tl(355,`p`),cN(356,`Exibe botão de fechar no toaster modo inline.`),ag()()(),Tl(357,`tr`,14)(358,`td`,15)(359,`div`,16)(360,`span`,17),cN(361,` p-size-actions`),Gl(362,`br`),ag()()(),Tl(363,`td`,18)(364,`code`,22),cN(365,`string`),ag()(),Tl(366,`td`,20)(367,`p`)(368,`code`),cN(369,`medium`),ag()()(),Tl(370,`td`,21)(371,`em`)(372,`strong`),cN(373,`(opcional)`),ag()(),Tl(374,`p`),cN(375,`Define o tamanho das ações no componente:`),ag(),Tl(376,`ul`)(377,`li`)(378,`code`),cN(379,`small`),ag(),cN(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(381,`li`)(382,`code`),cN(383,`medium`),ag(),cN(384,`: aplica a medida medium de cada componente.`),ag()(),Tl(385,`blockquote`)(386,`p`),cN(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(388,`code`),cN(389,`medium`),ag(),cN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(391,`a`,27),cN(392,`po-theme`),ag(),cN(393,`.`),ag()()()(),Tl(394,`tr`,14)(395,`td`,15)(396,`div`,16)(397,`span`,17),cN(398,` p-support-message`),Gl(399,`br`),ag()()(),Tl(400,`td`,18)(401,`code`,22),cN(402,`string`),ag()(),Tl(403,`td`,20),cN(404,`-`),ag(),Tl(405,`td`,21)(406,`em`)(407,`strong`),cN(408,`(opcional)`),ag()(),Tl(409,`p`),cN(410,`Mensagem de suporte a ser exibida na notificação.`),ag()()(),Tl(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),cN(415,` p-type`),Gl(416,`br`),ag()()(),Tl(417,`td`,18)(418,`code`,28),cN(419,`PoToasterType`),ag()(),Tl(420,`td`,20)(421,`p`)(422,`code`),cN(423,`PoToasterType.Information`),ag()()(),Tl(424,`td`,21)(425,`em`)(426,`strong`),cN(427,`(opcional)`),ag()(),Tl(428,`p`),cN(429,`Determina o tipo de notificação.`),ag(),Tl(430,`p`),cN(431,`Valores aceitos: `),Tl(432,`code`),cN(433,`error`),ag(),cN(434,`, `),Tl(435,`code`),cN(436,`information`),ag(),cN(437,`, `),Tl(438,`code`),cN(439,`success`),ag(),cN(440,` e `),Tl(441,`code`),cN(442,`warning`),ag(),cN(443,`.`),ag()()()(),Tl(444,`h3`),cN(445,`Enums`),ag(),Tl(446,`h4`,4)(447,`code`,5),cN(448,`PoToasterType`),ag()(),Tl(449,`div`,2)(450,`p`),cN(451,`Define os tipos possíveis para o `),Tl(452,`code`),cN(453,`PoToasterComponent`),ag(),cN(454,`.`),ag()(),Tl(455,`h4`,10),cN(456,`Propriedades`),ag(),Tl(457,`table`,11)(458,`tr`,12)(459,`th`,13),cN(460,`Nome`),ag(),Tl(461,`th`,13),cN(462,`Descrição`),ag()(),Tl(463,`tr`,14)(464,`td`,15)(465,`div`,16)(466,`span`,17),cN(467,` Error`),Gl(468,`br`),ag()()(),Tl(469,`td`,21)(470,`p`),cN(471,`Tipo de toaster para mensagens de erro.`),ag()()(),Tl(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),cN(476,` Information`),Gl(477,`br`),ag()()(),Tl(478,`td`,21)(479,`p`),cN(480,`Tipo de toaster para mensagens informativas.`),ag()()(),Tl(481,`tr`,14)(482,`td`,15)(483,`div`,16)(484,`span`,17),cN(485,` Success`),Gl(486,`br`),ag()()(),Tl(487,`td`,21)(488,`p`),cN(489,`Tipo de toaster para mensagens de sucesso.`),ag()()(),Tl(490,`tr`,14)(491,`td`,15)(492,`div`,16)(493,`span`,17),cN(494,` Warning`),Gl(495,`br`),ag()()(),Tl(496,`td`,21)(497,`p`),cN(498,`Tipo de toaster para mensagens de atenção.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Toaster`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-toaster-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-toaster-basic-view`)(6,`sample-po-toaster-labs-view`),ag()()()),a&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[bL.forChild(ve),bL]})}return i})();var He=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,de]})}return i})();export{He as DocPoToasterModule};