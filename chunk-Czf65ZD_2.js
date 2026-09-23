import{$r as Vx,A as Do,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,da as uo,ea as p0,fn as o_e,ga as w,kn as vr,l as ar,ln as mb,mn as q0e,mr as MN,nr as HO,oa as ql,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(Ml(0,`div`,0),ql(1,`po-toaster`,1),lg())},dependencies:[o_e],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Toaster Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-toaster-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=Do.Information;mode=mb.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Do.Success},{label:`Error`,value:Do.Error},{label:`Warning`,value:Do.Warning},{label:`Information`,value:Do.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=Do.Information,this.mode=mb.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&Zl(vr,7)(Ee,5),a&2){let m;lo(m=uo())&&(n.poModal=m.first),lo(m=uo())&&(n.toasterRef=m.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let m=Vx();Ml(0,`div`,2),ql(1,`po-toaster`,3,0),lg(),ql(3,`po-divider`),Ml(4,`form`,null,1)(6,`po-radio-group`,4),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.type,l)||(n.type=l),Jy(l)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.message,l)||(n.message=l),Jy(l)}),lg(),f0(),Ml(8,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.supportMessage,l)||(n.supportMessage=l),Jy(l)}),lg(),f0(),Ml(9,`po-switch`,7),ht(`p-change`,function(){return n.changeAction()}),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.hasAction,l)||(n.hasAction=l),Jy(l)}),lg(),f0(),Ml(10,`po-input`,8),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.actionLabel,l)||(n.actionLabel=l),Jy(l)}),lg(),f0(),Ml(11,`div`,2)(12,`po-checkbox-group`,9),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.properties,l)||(n.properties=l),Jy(l)}),lg(),f0(),Ml(13,`po-radio-group`,10),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.sizeActions,l)||(n.sizeActions=l),Jy(l)}),lg(),f0(),lg(),ql(14,`po-divider`),Ml(15,`div`,2)(16,`po-button`,11),ht(`p-click`,function(){return n.restore()}),lg()()(),Ml(17,`po-modal`,12),mN(18,` Notification Action `),lg()}a&2&&(Up(),cw(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),Up(5),Tw(`ngModel`,n.type),cw(`p-options`,n.typeOptions),p0(),Up(),Tw(`ngModel`,n.message),p0(),Up(),Tw(`ngModel`,n.supportMessage),p0(),Up(),Tw(`ngModel`,n.hasAction),p0(),Up(),Tw(`ngModel`,n.actionLabel),p0(),Up(2),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(),Tw(`ngModel`,n.sizeActions),cw(`p-options`,n.sizeActionsOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,J4,vr,o_e],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Toaster Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-toaster-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`]],template:function(a,n){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoToasterModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-toaster.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoToasterComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),lg(),Ml(15,`h4`),mN(16,`Acessibilidade tratada no componente`),lg(),Ml(17,`p`),mN(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(19,`ul`)(20,`li`),mN(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),lg(),Ml(22,`li`),mN(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),lg(),Ml(24,`li`),mN(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),lg(),Ml(26,`li`),mN(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),lg()(),Ml(28,`h4`),mN(29,`Tokens customizáveis`),lg(),Ml(30,`p`),mN(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(32,`blockquote`)(33,`p`),mN(34,`Para maiores informações, acesse o guia `),Ml(35,`a`,6),mN(36,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(37,`.`),lg()(),Ml(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),mN(42,`Propriedade`),lg(),Ml(43,`th`),mN(44,`Descrição`),lg(),Ml(45,`th`),mN(46,`Valor Padrão`),lg()()(),Ml(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),mN(51,`Default Values`),lg()(),ql(52,`td`)(53,`td`),lg(),Ml(54,`tr`)(55,`td`)(56,`code`),mN(57,`--font-family`),lg()(),Ml(58,`td`),mN(59,`Família tipográfica usada`),lg(),Ml(60,`td`)(61,`code`),mN(62,`var(--font-family-theme)`),lg()()(),Ml(63,`tr`)(64,`td`)(65,`code`),mN(66,`--font-color`),lg()(),Ml(67,`td`),mN(68,`Cor principal do texto`),lg(),Ml(69,`td`)(70,`code`),mN(71,`var(--color-neutral-dark-90)`),lg()()(),Ml(72,`tr`)(73,`td`)(74,`code`),mN(75,`--font-color-support`),lg()(),Ml(76,`td`),mN(77,`Cor principal do texto de supporte`),lg(),Ml(78,`td`)(79,`code`),mN(80,`var(--color-neutral-dark-80)`),lg()()(),Ml(81,`tr`)(82,`td`)(83,`code`),mN(84,`--border-radius`),lg()(),Ml(85,`td`),mN(86,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(87,`td`)(88,`code`),mN(89,`var(--border-radius-md)`),lg()()(),Ml(90,`tr`)(91,`td`)(92,`strong`),mN(93,`Type Success`),lg()(),ql(94,`td`)(95,`td`),lg(),Ml(96,`tr`)(97,`td`)(98,`code`),mN(99,`--color-success`),lg()(),Ml(100,`td`),mN(101,`Cor principal no tipo success`),lg(),Ml(102,`td`)(103,`code`),mN(104,`var(--color-feedback-positive-base)`),lg()()(),Ml(105,`tr`)(106,`td`)(107,`code`),mN(108,`--background-success`),lg()(),Ml(109,`td`),mN(110,`Cor de fundo principal no tipo success`),lg(),Ml(111,`td`)(112,`code`),mN(113,`var(--color-feedback-positive-lightest)`),lg()()(),Ml(114,`tr`)(115,`td`)(116,`code`),mN(117,`--border-color-success`),lg()(),Ml(118,`td`),mN(119,`Cor da borda principal tipo success`),lg(),Ml(120,`td`)(121,`code`),mN(122,`var(--color-feedback-positive-lighter)`),lg()()(),Ml(123,`tr`)(124,`td`)(125,`strong`),mN(126,`Type Error`),lg()(),ql(127,`td`)(128,`td`),lg(),Ml(129,`tr`)(130,`td`)(131,`code`),mN(132,`--color-error`),lg()(),Ml(133,`td`),mN(134,`Cor principal no tipo error`),lg(),Ml(135,`td`)(136,`code`),mN(137,`var(--color-feedback-negative-base)`),lg()()(),Ml(138,`tr`)(139,`td`)(140,`code`),mN(141,`--background-error`),lg()(),Ml(142,`td`),mN(143,`Cor de fundo principal no tipo error`),lg(),Ml(144,`td`)(145,`code`),mN(146,`var(--color-feedback-negative-lightest)`),lg()()(),Ml(147,`tr`)(148,`td`)(149,`code`),mN(150,`--border-color-error`),lg()(),Ml(151,`td`),mN(152,`Cor da borda principal tipo error`),lg(),Ml(153,`td`)(154,`code`),mN(155,`var(--color-feedback-negative-lighter)`),lg()()(),Ml(156,`tr`)(157,`td`)(158,`strong`),mN(159,`Type Warning`),lg()(),ql(160,`td`)(161,`td`),lg(),Ml(162,`tr`)(163,`td`)(164,`code`),mN(165,`--color-icon-warning`),lg()(),Ml(166,`td`),mN(167,`Cor principal do icone no tipo warning`),lg(),Ml(168,`td`)(169,`code`),mN(170,`var(--color-neutral-dark-90)`),lg()()(),Ml(171,`tr`)(172,`td`)(173,`code`),mN(174,`--color-warning`),lg()(),Ml(175,`td`),mN(176,`Cor principal no tipo warning`),lg(),Ml(177,`td`)(178,`code`),mN(179,`var(--color-feedback-warning-base)`),lg()()(),Ml(180,`tr`)(181,`td`)(182,`code`),mN(183,`--background-warning`),lg()(),Ml(184,`td`),mN(185,`Cor de fundo principal no tipo warning`),lg(),Ml(186,`td`)(187,`code`),mN(188,`var(--color-feedback-warning-lightest)`),lg()()(),Ml(189,`tr`)(190,`td`)(191,`code`),mN(192,`--border-color-warning`),lg()(),Ml(193,`td`),mN(194,`Cor da borda principal tipo warning`),lg(),Ml(195,`td`)(196,`code`),mN(197,`var(--color-feedback-warning-lighter)`),lg()()(),Ml(198,`tr`)(199,`td`)(200,`strong`),mN(201,`Type Info`),lg()(),ql(202,`td`)(203,`td`),lg(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--color-info`),lg()(),Ml(208,`td`),mN(209,`Cor principal no tipo info`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-feedback-info-base)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`code`),mN(216,`--background-info`),lg()(),Ml(217,`td`),mN(218,`Cor de fundo principal no tipo info`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-feedback-info-lightest)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`code`),mN(225,`--border-color-info`),lg()(),Ml(226,`td`),mN(227,`Cor da borda principal tipo info`),lg(),Ml(228,`td`)(229,`code`),mN(230,`var(--color-feedback-info-lighter)`),lg()()()()()(),Ml(231,`div`,7)(232,`h4`,8),mN(233,`Seletor`),lg(),Ml(234,`pre`,9),mN(235,`<po-toaster
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
`),lg()(),Ml(236,`h4`,10),mN(237,`Propriedades`),lg(),Ml(238,`table`,11)(239,`tr`,12)(240,`th`,13),mN(241,`Nome`),lg(),Ml(242,`th`,13),mN(243,`Tipo`),lg(),Ml(244,`th`,13),mN(245,`Padrão`),lg(),Ml(246,`th`,13),mN(247,`Descrição`),lg()(),Ml(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),mN(252,` p-action`),ql(253,`br`),lg()()(),Ml(254,`td`,18)(255,`code`,19),mN(256,`Function`),lg()(),Ml(257,`td`,20),mN(258,`-`),lg(),Ml(259,`td`,21)(260,`em`)(261,`strong`),mN(262,`(opcional)`),lg()(),Ml(263,`p`),mN(264,`Ação para a notificação.`),lg()()(),Ml(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),mN(269,` p-action-label`),ql(270,`br`),lg()()(),Ml(271,`td`,18)(272,`code`,22),mN(273,`string`),lg()(),Ml(274,`td`,20),mN(275,`-`),lg(),Ml(276,`td`,21)(277,`em`)(278,`strong`),mN(279,`(opcional)`),lg()(),Ml(280,`p`),mN(281,`Label do botão quando houver uma ação definida.`),lg()()(),Ml(282,`tr`,14)(283,`td`,15)(284,`div`,16)(285,`span`,17),mN(286,` p-hide`),ql(287,`br`),lg()()(),Ml(288,`td`,18)(289,`code`,23),mN(290,`boolean`),lg()(),Ml(291,`td`,20)(292,`p`)(293,`code`),mN(294,`false`),lg()()(),Ml(295,`td`,21)(296,`em`)(297,`strong`),mN(298,`(opcional)`),lg()(),Ml(299,`p`),mN(300,`Define se o Toaster esta invisivel.`),lg()()(),Ml(301,`tr`,14)(302,`td`,15)(303,`div`,24)(304,`span`,25),mN(305,` (p-hide-change)`),ql(306,`br`),lg()()(),Ml(307,`td`,18)(308,`code`,26),mN(309,`EventEmitter`),lg()(),Ml(310,`td`,20),mN(311,`-`),lg(),Ml(312,`td`,21)(313,`em`)(314,`strong`),mN(315,`(opcional)`),lg()(),Ml(316,`p`),mN(317,`Evento emitido quando o valor de `),Ml(318,`code`),mN(319,`isHide`),lg(),mN(320,` é alterado.`),lg()()(),Ml(321,`tr`,14)(322,`td`,15)(323,`div`,16)(324,`span`,17),mN(325,` p-message`),ql(326,`br`),lg()()(),Ml(327,`td`,18)(328,`code`,22),mN(329,`string`),lg()(),Ml(330,`td`,20),mN(331,`-`),lg(),Ml(332,`td`,21)(333,`em`)(334,`strong`),mN(335,`(opcional)`),lg()(),Ml(336,`p`),mN(337,`Mensagem a ser exibida na notificação.`),lg()()(),Ml(338,`tr`,14)(339,`td`,15)(340,`div`,16)(341,`span`,17),mN(342,` p-show-close`),ql(343,`br`),lg()()(),Ml(344,`td`,18)(345,`code`,23),mN(346,`boolean`),lg()(),Ml(347,`td`,20)(348,`p`)(349,`code`),mN(350,`true`),lg()()(),Ml(351,`td`,21)(352,`em`)(353,`strong`),mN(354,`(opcional)`),lg()(),Ml(355,`p`),mN(356,`Exibe botão de fechar no toaster modo inline.`),lg()()(),Ml(357,`tr`,14)(358,`td`,15)(359,`div`,16)(360,`span`,17),mN(361,` p-size-actions`),ql(362,`br`),lg()()(),Ml(363,`td`,18)(364,`code`,22),mN(365,`string`),lg()(),Ml(366,`td`,20)(367,`p`)(368,`code`),mN(369,`medium`),lg()()(),Ml(370,`td`,21)(371,`em`)(372,`strong`),mN(373,`(opcional)`),lg()(),Ml(374,`p`),mN(375,`Define o tamanho das ações no componente:`),lg(),Ml(376,`ul`)(377,`li`)(378,`code`),mN(379,`small`),lg(),mN(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(381,`li`)(382,`code`),mN(383,`medium`),lg(),mN(384,`: aplica a medida medium de cada componente.`),lg()(),Ml(385,`blockquote`)(386,`p`),mN(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(388,`code`),mN(389,`medium`),lg(),mN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(391,`a`,27),mN(392,`po-theme`),lg(),mN(393,`.`),lg()()()(),Ml(394,`tr`,14)(395,`td`,15)(396,`div`,16)(397,`span`,17),mN(398,` p-support-message`),ql(399,`br`),lg()()(),Ml(400,`td`,18)(401,`code`,22),mN(402,`string`),lg()(),Ml(403,`td`,20),mN(404,`-`),lg(),Ml(405,`td`,21)(406,`em`)(407,`strong`),mN(408,`(opcional)`),lg()(),Ml(409,`p`),mN(410,`Mensagem de suporte a ser exibida na notificação.`),lg()()(),Ml(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),mN(415,` p-type`),ql(416,`br`),lg()()(),Ml(417,`td`,18)(418,`code`,28),mN(419,`PoToasterType`),lg()(),Ml(420,`td`,20)(421,`p`)(422,`code`),mN(423,`PoToasterType.Information`),lg()()(),Ml(424,`td`,21)(425,`em`)(426,`strong`),mN(427,`(opcional)`),lg()(),Ml(428,`p`),mN(429,`Determina o tipo de notificação.`),lg(),Ml(430,`p`),mN(431,`Valores aceitos: `),Ml(432,`code`),mN(433,`error`),lg(),mN(434,`, `),Ml(435,`code`),mN(436,`information`),lg(),mN(437,`, `),Ml(438,`code`),mN(439,`success`),lg(),mN(440,` e `),Ml(441,`code`),mN(442,`warning`),lg(),mN(443,`.`),lg()()()(),Ml(444,`h3`),mN(445,`Enums`),lg(),Ml(446,`h4`,4)(447,`code`,5),mN(448,`PoToasterType`),lg()(),Ml(449,`div`,2)(450,`p`),mN(451,`Define os tipos possíveis para o `),Ml(452,`code`),mN(453,`PoToasterComponent`),lg(),mN(454,`.`),lg()(),Ml(455,`h4`,10),mN(456,`Propriedades`),lg(),Ml(457,`table`,11)(458,`tr`,12)(459,`th`,13),mN(460,`Nome`),lg(),Ml(461,`th`,13),mN(462,`Descrição`),lg()(),Ml(463,`tr`,14)(464,`td`,15)(465,`div`,16)(466,`span`,17),mN(467,` Error`),ql(468,`br`),lg()()(),Ml(469,`td`,21)(470,`p`),mN(471,`Tipo de toaster para mensagens de erro.`),lg()()(),Ml(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),mN(476,` Information`),ql(477,`br`),lg()()(),Ml(478,`td`,21)(479,`p`),mN(480,`Tipo de toaster para mensagens informativas.`),lg()()(),Ml(481,`tr`,14)(482,`td`,15)(483,`div`,16)(484,`span`,17),mN(485,` Success`),ql(486,`br`),lg()()(),Ml(487,`td`,21)(488,`p`),mN(489,`Tipo de toaster para mensagens de sucesso.`),lg()()(),Ml(490,`tr`,14)(491,`td`,15)(492,`div`,16)(493,`span`,17),mN(494,` Warning`),ql(495,`br`),lg()()(),Ml(496,`td`,21)(497,`p`),mN(498,`Tipo de toaster para mensagens de atenção.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Toaster`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-toaster-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-toaster-basic-view`)(6,`sample-po-toaster-labs-view`),lg()()()),a&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[NL.forChild(ve),NL]})}return i})();var He=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,de]})}return i})();export{He as DocPoToasterModule};