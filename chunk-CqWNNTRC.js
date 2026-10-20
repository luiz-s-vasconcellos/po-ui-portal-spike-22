import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Ot as Yte,Pi as mt,Qt as ea,Ri as nu,Si as iu,V as Io,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,ft as Sb,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(jc(0,`div`,0),nu(1,`po-toaster`,1),wg())},dependencies:[Yte],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Toaster Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-toaster-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=Io.Information;mode=Sb.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Io.Success},{label:`Error`,value:Io.Error},{label:`Warning`,value:Io.Warning},{label:`Information`,value:Io.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=Io.Information,this.mode=Sb.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&iu(ea,7)(Ee,5),a&2){let m;vo(m=_o())&&(n.poModal=m.first),vo(m=_o())&&(n.toasterRef=m.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let m=Sx();jc(0,`div`,2),nu(1,`po-toaster`,3,0),wg(),nu(3,`po-divider`),jc(4,`form`,null,1)(6,`po-radio-group`,4),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.type,l)||(n.type=l),v_(l)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.message,l)||(n.message=l),v_(l)}),wg(),jc(8,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.supportMessage,l)||(n.supportMessage=l),v_(l)}),wg(),jc(9,`po-switch`,7),JN(),mt(`p-change`,function(){return n.changeAction()}),ob(`ngModelChange`,function(l){return y_(m),sO(n.hasAction,l)||(n.hasAction=l),v_(l)}),wg(),jc(10,`po-input`,8),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.actionLabel,l)||(n.actionLabel=l),v_(l)}),wg(),jc(11,`div`,2)(12,`po-checkbox-group`,9),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.properties,l)||(n.properties=l),v_(l)}),wg(),jc(13,`po-radio-group`,10),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.sizeActions,l)||(n.sizeActions=l),v_(l)}),wg()(),nu(14,`po-divider`),jc(15,`div`,2)(16,`po-button`,11),mt(`p-click`,function(){return n.restore()}),wg()()(),jc(17,`po-modal`,12),iO(18,` Notification Action `),wg()}a&2&&(rg(),jE(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),rg(5),ib(`ngModel`,n.type),jE(`p-options`,n.typeOptions),t0(),rg(),ib(`ngModel`,n.message),t0(),rg(),ib(`ngModel`,n.supportMessage),t0(),rg(),ib(`ngModel`,n.hasAction),t0(),rg(),ib(`ngModel`,n.actionLabel),t0(),rg(2),ib(`ngModel`,n.properties),jE(`p-options`,n.propertiesOptions),t0(),rg(),ib(`ngModel`,n.sizeActions),jE(`p-options`,n.sizeActionsOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,w5,ea,Yte],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Toaster Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-toaster-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`]],template:function(a,n){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoToasterModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-toaster.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoToasterComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),wg(),jc(15,`h4`),iO(16,`Acessibilidade tratada no componente`),wg(),jc(17,`p`),iO(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(19,`ul`)(20,`li`),iO(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),wg(),jc(22,`li`),iO(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),wg(),jc(24,`li`),iO(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),wg(),jc(26,`li`),iO(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),wg()(),jc(28,`h4`),iO(29,`Tokens customizáveis`),wg(),jc(30,`p`),iO(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(32,`blockquote`)(33,`p`),iO(34,`Para maiores informações, acesse o guia `),jc(35,`a`,6),iO(36,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(37,`.`),wg()(),jc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),iO(42,`Propriedade`),wg(),jc(43,`th`),iO(44,`Descrição`),wg(),jc(45,`th`),iO(46,`Valor Padrão`),wg()()(),jc(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),iO(51,`Default Values`),wg()(),nu(52,`td`)(53,`td`),wg(),jc(54,`tr`)(55,`td`)(56,`code`),iO(57,`--font-family`),wg()(),jc(58,`td`),iO(59,`Família tipográfica usada`),wg(),jc(60,`td`)(61,`code`),iO(62,`var(--font-family-theme)`),wg()()(),jc(63,`tr`)(64,`td`)(65,`code`),iO(66,`--font-color`),wg()(),jc(67,`td`),iO(68,`Cor principal do texto`),wg(),jc(69,`td`)(70,`code`),iO(71,`var(--color-neutral-dark-90)`),wg()()(),jc(72,`tr`)(73,`td`)(74,`code`),iO(75,`--font-color-support`),wg()(),jc(76,`td`),iO(77,`Cor principal do texto de supporte`),wg(),jc(78,`td`)(79,`code`),iO(80,`var(--color-neutral-dark-80)`),wg()()(),jc(81,`tr`)(82,`td`)(83,`code`),iO(84,`--border-radius`),wg()(),jc(85,`td`),iO(86,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(87,`td`)(88,`code`),iO(89,`var(--border-radius-md)`),wg()()(),jc(90,`tr`)(91,`td`)(92,`strong`),iO(93,`Type Success`),wg()(),nu(94,`td`)(95,`td`),wg(),jc(96,`tr`)(97,`td`)(98,`code`),iO(99,`--color-success`),wg()(),jc(100,`td`),iO(101,`Cor principal no tipo success`),wg(),jc(102,`td`)(103,`code`),iO(104,`var(--color-feedback-positive-base)`),wg()()(),jc(105,`tr`)(106,`td`)(107,`code`),iO(108,`--background-success`),wg()(),jc(109,`td`),iO(110,`Cor de fundo principal no tipo success`),wg(),jc(111,`td`)(112,`code`),iO(113,`var(--color-feedback-positive-lightest)`),wg()()(),jc(114,`tr`)(115,`td`)(116,`code`),iO(117,`--border-color-success`),wg()(),jc(118,`td`),iO(119,`Cor da borda principal tipo success`),wg(),jc(120,`td`)(121,`code`),iO(122,`var(--color-feedback-positive-lighter)`),wg()()(),jc(123,`tr`)(124,`td`)(125,`strong`),iO(126,`Type Error`),wg()(),nu(127,`td`)(128,`td`),wg(),jc(129,`tr`)(130,`td`)(131,`code`),iO(132,`--color-error`),wg()(),jc(133,`td`),iO(134,`Cor principal no tipo error`),wg(),jc(135,`td`)(136,`code`),iO(137,`var(--color-feedback-negative-base)`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),iO(141,`--background-error`),wg()(),jc(142,`td`),iO(143,`Cor de fundo principal no tipo error`),wg(),jc(144,`td`)(145,`code`),iO(146,`var(--color-feedback-negative-lightest)`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),iO(150,`--border-color-error`),wg()(),jc(151,`td`),iO(152,`Cor da borda principal tipo error`),wg(),jc(153,`td`)(154,`code`),iO(155,`var(--color-feedback-negative-lighter)`),wg()()(),jc(156,`tr`)(157,`td`)(158,`strong`),iO(159,`Type Warning`),wg()(),nu(160,`td`)(161,`td`),wg(),jc(162,`tr`)(163,`td`)(164,`code`),iO(165,`--color-icon-warning`),wg()(),jc(166,`td`),iO(167,`Cor principal do icone no tipo warning`),wg(),jc(168,`td`)(169,`code`),iO(170,`var(--color-neutral-dark-90)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`code`),iO(174,`--color-warning`),wg()(),jc(175,`td`),iO(176,`Cor principal no tipo warning`),wg(),jc(177,`td`)(178,`code`),iO(179,`var(--color-feedback-warning-base)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`code`),iO(183,`--background-warning`),wg()(),jc(184,`td`),iO(185,`Cor de fundo principal no tipo warning`),wg(),jc(186,`td`)(187,`code`),iO(188,`var(--color-feedback-warning-lightest)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`code`),iO(192,`--border-color-warning`),wg()(),jc(193,`td`),iO(194,`Cor da borda principal tipo warning`),wg(),jc(195,`td`)(196,`code`),iO(197,`var(--color-feedback-warning-lighter)`),wg()()(),jc(198,`tr`)(199,`td`)(200,`strong`),iO(201,`Type Info`),wg()(),nu(202,`td`)(203,`td`),wg(),jc(204,`tr`)(205,`td`)(206,`code`),iO(207,`--color-info`),wg()(),jc(208,`td`),iO(209,`Cor principal no tipo info`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-feedback-info-base)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`code`),iO(216,`--background-info`),wg()(),jc(217,`td`),iO(218,`Cor de fundo principal no tipo info`),wg(),jc(219,`td`)(220,`code`),iO(221,`var(--color-feedback-info-lightest)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`code`),iO(225,`--border-color-info`),wg()(),jc(226,`td`),iO(227,`Cor da borda principal tipo info`),wg(),jc(228,`td`)(229,`code`),iO(230,`var(--color-feedback-info-lighter)`),wg()()()()()(),jc(231,`div`,7)(232,`h4`,8),iO(233,`Seletor`),wg(),jc(234,`pre`,9),iO(235,`<po-toaster
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
`),wg()(),jc(236,`h4`,10),iO(237,`Propriedades`),wg(),jc(238,`table`,11)(239,`tr`,12)(240,`th`,13),iO(241,`Nome`),wg(),jc(242,`th`,13),iO(243,`Tipo`),wg(),jc(244,`th`,13),iO(245,`Padrão`),wg(),jc(246,`th`,13),iO(247,`Descrição`),wg()(),jc(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),iO(252,` p-action`),nu(253,`br`),wg()()(),jc(254,`td`,18)(255,`code`,19),iO(256,`Function`),wg()(),jc(257,`td`,20),iO(258,`-`),wg(),jc(259,`td`,21)(260,`em`)(261,`strong`),iO(262,`(opcional)`),wg()(),jc(263,`p`),iO(264,`Ação para a notificação.`),wg()()(),jc(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),iO(269,` p-action-label`),nu(270,`br`),wg()()(),jc(271,`td`,18)(272,`code`,22),iO(273,`string`),wg()(),jc(274,`td`,20),iO(275,`-`),wg(),jc(276,`td`,21)(277,`em`)(278,`strong`),iO(279,`(opcional)`),wg()(),jc(280,`p`),iO(281,`Label do botão quando houver uma ação definida.`),wg()()(),jc(282,`tr`,14)(283,`td`,15)(284,`div`,16)(285,`span`,17),iO(286,` p-hide`),nu(287,`br`),wg()()(),jc(288,`td`,18)(289,`code`,23),iO(290,`boolean`),wg()(),jc(291,`td`,20)(292,`p`)(293,`code`),iO(294,`false`),wg()()(),jc(295,`td`,21)(296,`em`)(297,`strong`),iO(298,`(opcional)`),wg()(),jc(299,`p`),iO(300,`Define se o Toaster esta invisivel.`),wg()()(),jc(301,`tr`,14)(302,`td`,15)(303,`div`,24)(304,`span`,25),iO(305,` (p-hide-change)`),nu(306,`br`),wg()()(),jc(307,`td`,18)(308,`code`,26),iO(309,`EventEmitter`),wg()(),jc(310,`td`,20),iO(311,`-`),wg(),jc(312,`td`,21)(313,`em`)(314,`strong`),iO(315,`(opcional)`),wg()(),jc(316,`p`),iO(317,`Evento emitido quando o valor de `),jc(318,`code`),iO(319,`isHide`),wg(),iO(320,` é alterado.`),wg()()(),jc(321,`tr`,14)(322,`td`,15)(323,`div`,16)(324,`span`,17),iO(325,` p-message`),nu(326,`br`),wg()()(),jc(327,`td`,18)(328,`code`,22),iO(329,`string`),wg()(),jc(330,`td`,20),iO(331,`-`),wg(),jc(332,`td`,21)(333,`em`)(334,`strong`),iO(335,`(opcional)`),wg()(),jc(336,`p`),iO(337,`Mensagem a ser exibida na notificação.`),wg()()(),jc(338,`tr`,14)(339,`td`,15)(340,`div`,16)(341,`span`,17),iO(342,` p-show-close`),nu(343,`br`),wg()()(),jc(344,`td`,18)(345,`code`,23),iO(346,`boolean`),wg()(),jc(347,`td`,20)(348,`p`)(349,`code`),iO(350,`true`),wg()()(),jc(351,`td`,21)(352,`em`)(353,`strong`),iO(354,`(opcional)`),wg()(),jc(355,`p`),iO(356,`Exibe botão de fechar no toaster modo inline.`),wg()()(),jc(357,`tr`,14)(358,`td`,15)(359,`div`,16)(360,`span`,17),iO(361,` p-size-actions`),nu(362,`br`),wg()()(),jc(363,`td`,18)(364,`code`,22),iO(365,`string`),wg()(),jc(366,`td`,20)(367,`p`)(368,`code`),iO(369,`medium`),wg()()(),jc(370,`td`,21)(371,`em`)(372,`strong`),iO(373,`(opcional)`),wg()(),jc(374,`p`),iO(375,`Define o tamanho das ações no componente:`),wg(),jc(376,`ul`)(377,`li`)(378,`code`),iO(379,`small`),wg(),iO(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(381,`li`)(382,`code`),iO(383,`medium`),wg(),iO(384,`: aplica a medida medium de cada componente.`),wg()(),jc(385,`blockquote`)(386,`p`),iO(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(388,`code`),iO(389,`medium`),wg(),iO(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(391,`a`,27),iO(392,`po-theme`),wg(),iO(393,`.`),wg()()()(),jc(394,`tr`,14)(395,`td`,15)(396,`div`,16)(397,`span`,17),iO(398,` p-support-message`),nu(399,`br`),wg()()(),jc(400,`td`,18)(401,`code`,22),iO(402,`string`),wg()(),jc(403,`td`,20),iO(404,`-`),wg(),jc(405,`td`,21)(406,`em`)(407,`strong`),iO(408,`(opcional)`),wg()(),jc(409,`p`),iO(410,`Mensagem de suporte a ser exibida na notificação.`),wg()()(),jc(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),iO(415,` p-type`),nu(416,`br`),wg()()(),jc(417,`td`,18)(418,`code`,28),iO(419,`PoToasterType`),wg()(),jc(420,`td`,20)(421,`p`)(422,`code`),iO(423,`PoToasterType.Information`),wg()()(),jc(424,`td`,21)(425,`em`)(426,`strong`),iO(427,`(opcional)`),wg()(),jc(428,`p`),iO(429,`Determina o tipo de notificação.`),wg(),jc(430,`p`),iO(431,`Valores aceitos: `),jc(432,`code`),iO(433,`error`),wg(),iO(434,`, `),jc(435,`code`),iO(436,`information`),wg(),iO(437,`, `),jc(438,`code`),iO(439,`success`),wg(),iO(440,` e `),jc(441,`code`),iO(442,`warning`),wg(),iO(443,`.`),wg()()()(),jc(444,`h3`),iO(445,`Enums`),wg(),jc(446,`h4`,4)(447,`code`,5),iO(448,`PoToasterType`),wg()(),jc(449,`div`,2)(450,`p`),iO(451,`Define os tipos possíveis para o `),jc(452,`code`),iO(453,`PoToasterComponent`),wg(),iO(454,`.`),wg()(),jc(455,`h4`,10),iO(456,`Propriedades`),wg(),jc(457,`table`,11)(458,`tr`,12)(459,`th`,13),iO(460,`Nome`),wg(),jc(461,`th`,13),iO(462,`Descrição`),wg()(),jc(463,`tr`,14)(464,`td`,15)(465,`div`,16)(466,`span`,17),iO(467,` Error`),nu(468,`br`),wg()()(),jc(469,`td`,21)(470,`p`),iO(471,`Tipo de toaster para mensagens de erro.`),wg()()(),jc(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),iO(476,` Information`),nu(477,`br`),wg()()(),jc(478,`td`,21)(479,`p`),iO(480,`Tipo de toaster para mensagens informativas.`),wg()()(),jc(481,`tr`,14)(482,`td`,15)(483,`div`,16)(484,`span`,17),iO(485,` Success`),nu(486,`br`),wg()()(),jc(487,`td`,21)(488,`p`),iO(489,`Tipo de toaster para mensagens de sucesso.`),wg()()(),jc(490,`tr`,14)(491,`td`,15)(492,`div`,16)(493,`span`,17),iO(494,` Warning`),nu(495,`br`),wg()()(),jc(496,`td`,21)(497,`p`),iO(498,`Tipo de toaster para mensagens de atenção.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Toaster`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-toaster-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-toaster-basic-view`)(6,`sample-po-toaster-labs-view`),wg()()()),a&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue({imports:[C1.forChild(ve),C1]})}return i})();var He=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue({imports:[Ta,de]})}return i})();export{He as DocPoToasterModule};