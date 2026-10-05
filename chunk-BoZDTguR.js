import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as pt,A as Eze,Ai as ho,C as C4,Ca as zO,Cr as Kc,Er as LP,Fr as Ox,Gi as mg,Gt as eoe,Hr as RN,Ji as p0,Jr as TE,Nr as ON,Oi as he,Ri as kL,Rt as cae,Si as fo,Sn as u4,T as Cze,Un as AN,Vi as kx,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,Zr as Ue$1,_a as wn,ca as ue,cr as HN,ei as Wx,fr as Hp,gi as e_,i as _a,ia as sE,in as mae,ir as E,jn as wte,kt as _ze,mn as rb,nr as DN,oi as aN,pa as vN,q as Lr,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,va as xN,yr as Jv,zr as Qn}from"./main-M64QO35D.js";var be=(()=>{class r{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(i){this.poNotification=i}myAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(l){return new(l||r)(E(Lu))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(l,o){l&1&&Kc(0,`po-header`,0),l&2&&cE(`p-brand`,o.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[Eze],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return r})();var _e=r=>({"docs-sample-code-tabs":r});var xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Header Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-header-basic/sample-po-header-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-header-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,be],encapsulation:2,changeDetection:1})}return r})();var Ne=()=>({label:`Positive`,value:`positive`});var He=()=>({label:`Negative`,value:`negative`});var Be=()=>({label:`Warning`,value:`warning`});var Le=()=>({label:`Disabled`,value:`disabled`});var Me=(r,T,i,l)=>[r,T,i,l];var De=()=>({label:`Medium`,value:`medium`});var Fe=()=>({label:`Small`,value:`small`});var Ve=(r,T)=>[r,T];var fe=(()=>{class r$1{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(i){this.poNotification=i}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(i){let l=i;i.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(l.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,i],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(l){return new(l||r$1)(E(Lu))};static ɵcmp=Hn({type:r$1,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let m=Bx();Kc(0,`po-header`,1),Ac(1,`div`,2)(2,`po-input`,3),RE(`ngModelChange`,function(d){return Jv(m),DN(o.headerBrandTitle,d)||(o.headerBrandTitle=d),e_(d)}),ug(),p0(),Ac(3,`po-input`,4),RE(`ngModelChange`,function(d){return Jv(m),DN(o.headerBrandLogo,d)||(o.headerBrandLogo=d),e_(d)}),ug(),p0(),Ac(4,`po-input`,5),RE(`ngModelChange`,function(d){return Jv(m),DN(o.headerBrandSmallLogo,d)||(o.headerBrandSmallLogo=d),e_(d)}),ug(),p0(),Ac(5,`div`,6)(6,`po-button`,7),pt(`p-click`,function(){return o.addBrand()}),ug()()(),Kc(7,`hr`),Ac(8,`div`,8)(9,`h3`,9),vN(10,`Ações dos itens de menu`),ug(),Ac(11,`po-input`,10),RE(`ngModelChange`,function(d){return Jv(m),DN(o.menuActionEvent,d)||(o.menuActionEvent=d),e_(d)}),ug(),p0(),Ac(12,`po-input`,11),RE(`ngModelChange`,function(d){return Jv(m),DN(o.menuActionLabel,d)||(o.menuActionLabel=d),e_(d)}),ug(),p0(),Ac(13,`po-button`,12),pt(`p-click`,function(){return o.addAction()}),ug()(),Kc(14,`hr`),Ac(15,`h3`,9),vN(16,`Ações das configurações`),ug(),Ac(17,`form`,8,0)(19,`po-input`,13),RE(`ngModelChange`,function(d){return Jv(m),DN(o.actionNewTool.icon,d)||(o.actionNewTool.icon=d),e_(d)}),ug(),p0(),Ac(20,`po-input`,14),RE(`ngModelChange`,function(d){return Jv(m),DN(o.actionNewTool.tooltip,d)||(o.actionNewTool.tooltip=d),e_(d)}),ug(),p0(),Ac(21,`po-number`,15),RE(`ngModelChange`,function(d){return Jv(m),DN(o.actionNewTool.badge,d)||(o.actionNewTool.badge=d),e_(d)}),ug(),p0(),Ac(22,`po-switch`,16),RE(`ngModelChange`,function(d){return Jv(m),DN(o.actionNewToolEvent,d)||(o.actionNewToolEvent=d),e_(d)}),ug(),p0(),Ac(23,`po-button`,17),pt(`p-click`,function(){return o.addTool(o.actionNewTool)}),ug()(),Kc(24,`hr`),Ac(25,`h3`,9),vN(26,`Ações do Usuário`),ug(),Ac(27,`form`,8,0)(29,`po-input`,18),RE(`ngModelChange`,function(d){return Jv(m),DN(o.newActionUser.customerBrand,d)||(o.newActionUser.customerBrand=d),e_(d)}),ug(),p0(),Ac(30,`po-input`,19),RE(`ngModelChange`,function(d){return Jv(m),DN(o.newActionUser.avatar,d)||(o.newActionUser.avatar=d),e_(d)}),ug(),p0(),Ac(31,`po-radio-group`,20),RE(`ngModelChange`,function(d){return Jv(m),DN(o.newActionUser.status,d)||(o.newActionUser.status=d),e_(d)}),ug(),p0(),Ac(32,`po-button`,17),pt(`p-click`,function(){return o.addUser()}),ug(),Kc(33,`hr`),Ac(34,`h3`,9),vN(35,`Variações de tamanho`),ug(),Ac(36,`div`,8)(37,`po-radio-group`,21),RE(`ngModelChange`,function(d){return Jv(m),DN(o.size,d)||(o.size=d),e_(d)}),ug(),p0(),ug(),Kc(38,`hr`),Ac(39,`po-button`,22),pt(`p-click`,function(){return o.reset()}),ug()()}l&2&&(cE(`p-side-menu-only-action`,!0)(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuActions)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.actionUser)(`p-size`,o.size),Hp(2),TE(`ngModel`,o.headerBrandTitle),m0(),Hp(),TE(`ngModel`,o.headerBrandLogo),m0(),Hp(),TE(`ngModel`,o.headerBrandSmallLogo),m0(),Hp(7),TE(`ngModel`,o.menuActionEvent),m0(),Hp(),TE(`ngModel`,o.menuActionLabel),m0(),Hp(),cE(`p-disabled`,!o.menuActionLabel),Hp(6),TE(`ngModel`,o.actionNewTool.icon),m0(),Hp(),TE(`ngModel`,o.actionNewTool.tooltip),m0(),Hp(),TE(`ngModel`,o.actionNewTool.badge),m0(),Hp(),TE(`ngModel`,o.actionNewToolEvent),m0(),Hp(),cE(`p-disabled`,o.actionTools.length>2),Hp(6),TE(`ngModel`,o.newActionUser.customerBrand),m0(),Hp(),TE(`ngModel`,o.newActionUser.avatar),m0(),Hp(),TE(`ngModel`,o.newActionUser.status),cE(`p-options`,ON(28,Me,RN(24,Ne),RN(25,He),RN(26,Be),RN(27,Le))),m0(),Hp(),cE(`p-disabled`,!o.newActionUser.avatar||o.newActionUser.customerBrand),Hp(5),TE(`ngModel`,o.size),cE(`p-options`,xN(35,Ve,RN(33,De),RN(34,Fe))),m0())},dependencies:[b9,D9,C9,BP,LP,oi,C4,eoe,wte,u4,Eze],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return r$1})();var Ue=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Header Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-header-labs/sample-po-header-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-header-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,fe],encapsulation:2,changeDetection:1})}return r})();var Oe=[`meuTemplate`];var ze=[`notificationTemplate`];var We=(r,T)=>T.icon;function je(r,T){if(r&1&&Kc(0,`po-button`,5),r&2){let i=T.$implicit;cE(`p-icon`,i.icon)}}function Re(r,T){if(r&1&&(Ac(0,`div`,3)(1,`p`),vN(2,`Meus aplicativos`),ug(),Kc(3,`br`),Ac(4,`div`,4),Ox(5,je,1,1,`po-button`,5,We),ug()()),r&2){let i=Wx();Hp(5),kx(i.systemApps)}}function Qe(r,T){if(r&1){let i=Bx();Ac(0,`div`,6)(1,`div`,7)(2,`span`,8),vN(3,`Notificações`),ug()(),Ac(4,`div`,9)(5,`po-button`,10),pt(`p-click`,function(){Jv(i);let o=Wx();return e_(o.markAllAsRead())}),ug()()(),Kc(6,`po-divider`),Ac(7,`po-list-view`,11),pt(`p-item-click`,function(o){Jv(i);let m=Wx();return e_(m.readNotification(o))}),ug(),Kc(8,`po-divider`),Ac(9,`div`,12)(10,`div`,13)(11,`po-button`,14),pt(`p-click`,function(){Jv(i);let o=Wx();return e_(o.resetNotifications())}),ug(),Ac(12,`po-button`,15),pt(`p-click`,function(){Jv(i);let o=Wx();return e_(o.markAllAsUnread())}),ug()()()}if(r&2){let i=Wx();Hp(5),cE(`p-disabled`,!i.hasNotifications),Hp(2),cE(`p-field-properties`,i.fieldProperties)(`p-items`,i.notificationList)(`p-select`,!1)(`p-literals`,i.notificationLiterals)}}var Ce=(()=>{class r$2{poNotification;cd;meuTemplate;notificationTemplate;fieldProperties={title:`title`,subtitle:`content`,avatar:`avatar`,highlighted:`checked`,tag:{value:`tag`,type:`tagType`}};initialNotifications=[{title:`Relatório de faturamento`,content:`O arquivo solicitado já está disponível para download`,tag:`Concluído`,tagType:`success`,avatar:{progress:100,status:`success`,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Folha de pagamento`,content:`O cálculo da folha de pagamento está em andamento`,tag:`Em andamento`,tagType:`info`,avatar:{progress:80,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Nova versão TOTVS 2.1`,content:`Atualize seu sistema para a versão TOTVS 2.1`,tag:`Novidade`,tagType:`neutral`,avatar:{icon:`an an-arrow-circle-up`,color:`#ffffff`,backgroundColor:`#000000`},checked:!0},{title:`6 novos colaboradores`,content:`Você tem 6 novos colaboradores cadastrados`,tag:`Info`,tagType:`info`,avatar:{icon:`an an-user`,color:`#753399`,backgroundColor:`#f0e6f5`},checked:!0},{title:`Novo usuário`,content:`Novo usuário adicionado ao grupo Financeiro`,tag:`Info`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=12`,checked:!0}];allNotifications=this.initialNotifications.map(i=>r({},i));notificationList=this.allNotifications.filter(i=>i.checked);get hasNotifications(){return this.notificationList.some(i=>i.checked)}notificationLiterals={noData:`Você está atualizado! Você não tem novas notificações no momento. Assim que surgirem novidades ou alertas, eles aparecerão aqui.`};listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)},{label:`Notificações`,icon:`an an-bell`,tooltip:`Notificações do usuário`,badge:5,popover:{content:this.notificationTemplate,width:480},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(i,l){this.poNotification=i,this.cd=l}ngAfterViewInit(){this.actionTools=this.actionTools.map(i=>i.label===`Aplicativos`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.meuTemplate})}):i.label===`Notificações`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.notificationTemplate})}):i),this.cd.detectChanges()}myAction(i){this.poNotification.success({message:`Action clicked: ${i}`,orientation:Lr.Bottom})}markAllAsRead(){this.allNotifications.forEach(i=>i.checked=!1),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(void 0),this.poNotification.success({message:`Todas as notificações foram marcadas como lidas.`,orientation:Lr.Top})}readNotification(i){let l=this.allNotifications.find(o=>o.title===i?.title);l&&(l.checked=!1),setTimeout(()=>{this.notificationList=this.allNotifications.filter(m=>m.checked);let o=this.notificationList.length;this.setNotificationBadge(o>0?o:void 0)}),this.poNotification.information({message:`Notifica\xE7\xE3o lida: ${i?.title}`,orientation:Lr.Top})}resetNotifications(){this.notificationList=this.allNotifications.map(i=>r({},i))}markAllAsUnread(){this.allNotifications.forEach(i=>i.checked=!0),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(this.allNotifications.length),this.poNotification.information({message:`Todas as notificações foram marcadas como não lidas.`,orientation:Lr.Top})}setNotificationBadge(i){setTimeout(()=>{this.actionTools=this.actionTools.map(l=>l.label===`Notificações`?s(r({},l),{badge:i}):l),this.cd.detectChanges()})}onOpenTool(i){this.poNotification.information({message:`Opened: ${i} (p-actions-tools)`,orientation:Lr.Top})}onCloseTool(i){this.poNotification.warning({message:`Closed: ${i} (p-actions-tools)`,orientation:Lr.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Lr.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Lr.Top})}static ɵfac=function(l){return new(l||r$2)(E(Lu),E(Ue$1))};static ɵcmp=Hn({type:r$2,selectors:[[`sample-po-header-apps`]],viewQuery:function(l,o){if(l&1&&Xc(Oe,5)(ze,5),l&2){let m;fo(m=ho())&&(o.meuTemplate=m.first),fo(m=ho())&&(o.notificationTemplate=m.first)}},standalone:!1,decls:5,vars:5,consts:[[`meuTemplate`,``],[`notificationTemplate`,``],[1,`example-notification-header`,3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-2`,`po-pb-0`],[1,`po-md-6`],[1,`po-font-subtitle`],[1,`po-md-6`,`po-text-right`],[`p-icon`,`an an-checks`,`p-label`,`Marcar todas como lidas`,`p-kind`,`tertiary`,3,`p-click`,`p-disabled`],[`p-tag-position`,`top`,`p-avatar-size`,`md`,3,`p-item-click`,`p-field-properties`,`p-items`,`p-select`,`p-literals`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-0`,`po-pb-2`],[1,`po-md-12`,`po-text-right`],[`p-label`,`Ver todas notificações`,`p-kind`,`primary`,1,`po-mr-1`,3,`p-click`],[`p-icon`,`an an-arrow-counter-clockwise`,`p-kind`,`tertiary`,`p-aria-label`,`Marcar todas como não lidas`,3,`p-click`]],template:function(l,o){l&1&&(Kc(0,`po-header`,2),sE(1,Re,7,0,`ng-template`,null,0,HN)(3,Qe,13,5,`ng-template`,null,1,HN)),l&2&&cE(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuItems)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[oi,rb,_ze,Eze],styles:[`sample-po-header-apps{display:block;min-height:768px}sample-po-header-apps .app-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}sample-po-header-apps .custom-template{padding:.5rem}sample-po-header-apps .custom-template p{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}sample-po-header-apps po-header{--nav-position: flex}po-header.example-notification-header po-list-view{--po-density-gap-spacing: 0px;--po-density-content-padding: 0px;--list-item-shadow: none;--list-item-border-radius: 0px;--list-item-border-color: transparent}po-header.example-notification-header po-divider{--po-density-gap-spacing: 0}
`],encapsulation:2,changeDetection:1})}return r$2})();var Je=r=>({"docs-sample-code-tabs":r});var ye=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Header Apps`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-header-apps/sample-po-header-apps.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-header
  class="example-notification-header"
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>

<ng-template #notificationTemplate>
  <div class="po-row po-pr-1 po-pl-1 po-pt-2 po-pb-0">
    <div class="po-md-6">
      <span class="po-font-subtitle">Notifica\xE7\xF5es</span>
    </div>
    <div class="po-md-6 po-text-right">
      <po-button
        p-icon="an an-checks"
        p-label="Marcar todas como lidas"
        p-kind="tertiary"
        [p-disabled]="!hasNotifications"
        (p-click)="markAllAsRead()"
      ></po-button>
    </div>
  </div>

  <po-divider></po-divider>

  <po-list-view
    p-tag-position="top"
    p-avatar-size="md"
    [p-field-properties]="fieldProperties"
    [p-items]="notificationList"
    [p-select]="false"
    [p-literals]="notificationLiterals"
    (p-item-click)="readNotification($event)"
  >
  </po-list-view>

  <po-divider></po-divider>

  <div class="po-row po-pr-1 po-pl-1 po-pt-0 po-pb-2">
    <div class="po-md-12 po-text-right">
      <po-button
        class="po-mr-1"
        p-label="Ver todas notifica\xE7\xF5es"
        p-kind="primary"
        (p-click)="resetNotifications()"
      ></po-button>
      <po-button
        p-icon="an an-arrow-counter-clockwise"
        p-kind="tertiary"
        p-aria-label="Marcar todas como n\xE3o lidas"
        (p-click)="markAllAsUnread()"
      ></po-button>
    </div>
  </div>
</ng-template>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
  ChangeDetectionStrategy
} from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoListViewFieldProperties,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    sample-po-header-apps {
      display: block;
      min-height: 768px;
    }

    sample-po-header-apps .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    sample-po-header-apps .custom-template {
      padding: 0.5rem;
    }

    sample-po-header-apps .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    sample-po-header-apps po-header {
      --nav-position: flex;
    }

    po-header.example-notification-header po-list-view {
      --po-density-gap-spacing: 0px;
      --po-density-content-padding: 0px;

      --list-item-shadow: none;
      --list-item-border-radius: 0px;
      --list-item-border-color: transparent;
    }

    po-header.example-notification-header po-divider {
      --po-density-gap-spacing: 0;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;
  @ViewChild('notificationTemplate') notificationTemplate!: TemplateRef<any>;

  fieldProperties: PoListViewFieldProperties = {
    title: 'title',
    subtitle: 'content',
    avatar: 'avatar',
    highlighted: 'checked',
    tag: { value: 'tag', type: 'tagType' }
  };

  private readonly initialNotifications = [
    {
      title: 'Relat\xF3rio de faturamento',
      content: 'O arquivo solicitado j\xE1 est\xE1 dispon\xEDvel para download',
      tag: 'Conclu\xEDdo',
      tagType: 'success',
      avatar: { progress: 100, status: 'success', showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Folha de pagamento',
      content: 'O c\xE1lculo da folha de pagamento est\xE1 em andamento',
      tag: 'Em andamento',
      tagType: 'info',
      avatar: { progress: 80, showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Nova vers\xE3o TOTVS 2.1',
      content: 'Atualize seu sistema para a vers\xE3o TOTVS 2.1',
      tag: 'Novidade',
      tagType: 'neutral',
      avatar: { icon: 'an an-arrow-circle-up', color: '#ffffff', backgroundColor: '#000000' },
      checked: true
    },
    {
      title: '6 novos colaboradores',
      content: 'Voc\xEA tem 6 novos colaboradores cadastrados',
      tag: 'Info',
      tagType: 'info',
      avatar: { icon: 'an an-user', color: '#753399', backgroundColor: '#f0e6f5' },
      checked: true
    },
    {
      title: 'Novo usu\xE1rio',
      content: 'Novo usu\xE1rio adicionado ao grupo Financeiro',
      tag: 'Info',
      tagType: 'info',
      avatar: 'https://i.pravatar.cc/150?img=12',
      checked: true
    }
  ];

  private allNotifications = this.initialNotifications.map(item => ({ ...item }));

  notificationList = this.allNotifications.filter(item => item.checked);

  get hasNotifications(): boolean {
    return this.notificationList.some(item => item.checked);
  }

  readonly notificationLiterals = {
    noData:
      'Voc\xEA est\xE1 atualizado! Voc\xEA n\xE3o tem novas notifica\xE7\xF5es no momento. Assim que surgirem novidades ou alertas, eles aparecer\xE3o aqui.'
  };

  readonly listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  readonly headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  readonly menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-bell',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      popover: {
        content: this.notificationTemplate,
        width: 480
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    }
  ];

  readonly headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    status: 'positive',
    items: [
      { label: 'Meu perfil', action: this.myAction.bind(this, 'Meu perfil') },
      { label: 'Configura\xE7\xF5es', action: this.myAction.bind(this, 'Configura\xE7\xF5es') },
      { label: 'Sair', action: this.myAction.bind(this, 'Sair') }
    ],
    onOpen: () => this.onOpenUser(),
    onClose: () => this.onCloseUser()
  };

  readonly systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.label === 'Aplicativos' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.meuTemplate } };
      }
      if (action.label === 'Notifica\xE7\xF5es' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.notificationTemplate } };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Bottom });
  }

  markAllAsRead(): void {
    this.allNotifications.forEach(item => (item.checked = false));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(undefined);

    this.poNotification.success({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  readNotification(item: any): void {
    const notification = this.allNotifications.find(current => current.title === item?.title);
    if (notification) {
      notification.checked = false;
    }

    setTimeout(() => {
      this.notificationList = this.allNotifications.filter(current => current.checked);
      const unread = this.notificationList.length;
      this.setNotificationBadge(unread > 0 ? unread : undefined);
    });

    this.poNotification.information({
      message: \`Notifica\xE7\xE3o lida: \${item?.title}\`,
      orientation: PoToasterOrientation.Top
    });
  }

  resetNotifications(): void {
    this.notificationList = this.allNotifications.map(current => ({ ...current }));
  }

  markAllAsUnread(): void {
    this.allNotifications.forEach(item => (item.checked = true));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(this.allNotifications.length);

    this.poNotification.information({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como n\xE3o lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  private setNotificationBadge(badge: number | undefined): void {
    setTimeout(() => {
      this.actionTools = this.actionTools.map(action =>
        action.label === 'Notifica\xE7\xF5es' ? { ...action, badge } : action
      );
      this.cd.detectChanges();
    });
  }

  /** Callback de abertura para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onOpenTool(label?: string): void {
    this.poNotification.information({
      message: \`Opened: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onCloseTool(label?: string): void {
    this.poNotification.warning({
      message: \`Closed: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de abertura para o \`p-header-user\`. */
  onOpenUser(): void {
    this.poNotification.information({
      message: 'Opened: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para o \`p-header-user\`. */
  onCloseUser(): void {
    this.poNotification.warning({
      message: 'Closed: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-header-apps`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Je,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Ce],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-header`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoHeaderComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O componente `),Ac(18,`code`),vN(19,`po-header`),ug(),vN(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Ac(21,`code`),vN(22,`p-brand`),ug(),vN(23,`, `),Ac(24,`code`),vN(25,`p-menu-items`),ug(),vN(26,`, `),Ac(27,`code`),vN(28,`p-actions-tools`),ug(),vN(29,` e `),Ac(30,`code`),vN(31,`p-header-user`),ug(),vN(32,`.`),ug(),Ac(33,`ul`)(34,`li`)(35,`code`),vN(36,`p-brand`),ug(),vN(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),ug(),Ac(38,`li`)(39,`code`),vN(40,`p-menu-items`),ug(),vN(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),ug(),Ac(42,`li`)(43,`code`),vN(44,`p-actions-tools`),ug(),vN(45,`: Possibilita a inclusão de até 3 botões com ações.`),ug(),Ac(46,`li`)(47,`code`),vN(48,`p-header-user`),ug(),vN(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),ug()(),Ac(50,`p`),vN(51,`O componente `),Ac(52,`code`),vN(53,`po-header`),ug(),vN(54,` pode ser usado de duas formas:`),ug(),Ac(55,`p`),vN(56,`Com `),Ac(57,`code`),vN(58,`po-menu`),ug(),vN(59,` definido pelo usuário:`),ug(),Ac(60,`pre`)(61,`code`),vN(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),ug()(),Ac(63,`p`),vN(64,`Passando os itens diretamente para o `),Ac(65,`code`),vN(66,`po-header`),ug(),vN(67,` pela propriedade `),Ac(68,`code`),vN(69,`p-menus`),ug(),vN(70,`:`),ug(),Ac(71,`pre`)(72,`code`),vN(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),ug()(),Ac(74,`h4`),vN(75,`Tokens customizáveis`),ug(),Ac(76,`p`),vN(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(78,`blockquote`)(79,`p`),vN(80,`Para maiores informações, acesse o guia `),Ac(81,`a`,6),vN(82,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(83,`.`),ug()(),Ac(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),vN(88,`Propriedade`),ug(),Ac(89,`th`),vN(90,`Descrição`),ug(),Ac(91,`th`),vN(92,`Valor Padrão`),ug()()(),Ac(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),vN(97,`--font-family`),ug()(),Ac(98,`td`),vN(99,`Família tipográfica usada`),ug(),Ac(100,`td`)(101,`code`),vN(102,`var(--font-family-theme)`),ug()()(),Ac(103,`tr`)(104,`td`)(105,`code`),vN(106,`--font-weight`),ug()(),Ac(107,`td`),vN(108,`Peso da fonte`),ug(),Ac(109,`td`)(110,`code`),vN(111,`var(--font-weight-bold)`),ug()()(),Ac(112,`tr`)(113,`td`)(114,`code`),vN(115,`--text-color`),ug()(),Ac(116,`td`),vN(117,`Cor do texto`),ug(),Ac(118,`td`)(119,`code`),vN(120,`var(--color-neutral-dark-70)`),ug()()(),Ac(121,`tr`)(122,`td`)(123,`code`),vN(124,`--outline-color-focused`),ug()(),Ac(125,`td`),vN(126,`Cor do outline dos itens de sub-menu e customer`),ug(),Ac(127,`td`)(128,`code`),vN(129,`var(--color-neutral-dark-95)`),ug()()(),Ac(130,`tr`)(131,`td`)(132,`code`),vN(133,`--object-fit-brand`),ug()(),Ac(134,`td`),vN(135,`Valor do object-fit da imagem do logo`),ug(),Ac(136,`td`)(137,`code`),vN(138,`contain`),ug()()(),Ac(139,`tr`)(140,`td`)(141,`code`),vN(142,`--object-fit-customer`),ug()(),Ac(143,`td`),vN(144,`Valor do object-fit da imagem do logo na seção customer`),ug(),Ac(145,`td`)(146,`code`),vN(147,`contain`),ug()()(),Ac(148,`tr`)(149,`td`)(150,`code`),vN(151,`--object-fit-customer-user`),ug()(),Ac(152,`td`),vN(153,`Valor do object-fit da imagem do avatar`),ug(),Ac(154,`td`)(155,`code`),vN(156,`cover`),ug()()(),Ac(157,`tr`)(158,`td`)(159,`strong`),vN(160,`Header`),ug()(),Kc(161,`td`)(162,`td`),ug(),Ac(163,`tr`)(164,`td`)(165,`code`),vN(166,`--background-color`),ug()(),Ac(167,`td`),vN(168,`Cor de background do header`),ug(),Ac(169,`td`)(170,`code`),vN(171,`var(--color-neutral-light-05)`),ug()()(),Ac(172,`tr`)(173,`td`)(174,`code`),vN(175,`--border-radius-bottom-left`),ug()(),Ac(176,`td`),vN(177,`Valor do radius do lado esquerdo do header`),ug(),Ac(178,`td`)(179,`code`),vN(180,`var(--border-radius-md)`),ug()()(),Ac(181,`tr`)(182,`td`)(183,`code`),vN(184,`--border-radius-bottom-right`),ug()(),Ac(185,`td`),vN(186,`Valor do radius do lado direito do header`),ug(),Ac(187,`td`)(188,`code`),vN(189,`var(--border-radius-md)`),ug()()(),Ac(190,`tr`)(191,`td`)(192,`code`),vN(193,`--base shadow`),ug()(),Ac(194,`td`),vN(195,`Cor da sombra do header`),ug(),Ac(196,`td`)(197,`code`),vN(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),ug()()(),Ac(199,`tr`)(200,`td`)(201,`code`),vN(202,`--stroke-color`),ug()(),Ac(203,`td`),vN(204,`Cor da borda inferior do header`),ug(),Ac(205,`td`)(206,`code`),vN(207,`var(--color-brand-01-base)`),ug()()(),Ac(208,`tr`)(209,`td`)(210,`strong`),vN(211,`Sub-menu`),ug()(),Kc(212,`td`)(213,`td`),ug(),Ac(214,`tr`)(215,`td`)(216,`code`),vN(217,`--border-radius`),ug()(),Ac(218,`td`),vN(219,`Valor do radius dos itens do sub-menu`),ug(),Ac(220,`td`)(221,`code`),vN(222,`var(--border-radius-md);`),ug()()(),Ac(223,`tr`)(224,`td`)(225,`code`),vN(226,`--text-color-submenu`),ug()(),Ac(227,`td`),vN(228,`Cor do texto dos itens do sub-menu`),ug(),Ac(229,`td`)(230,`code`),vN(231,`var(--color-brand-01-base)`),ug()()(),Ac(232,`tr`)(233,`td`)(234,`code`),vN(235,`--icon-color`),ug()(),Ac(236,`td`),vN(237,`Cor do ícone do sub-menu com itens`),ug(),Ac(238,`td`)(239,`code`),vN(240,`var(--color-brand-01-base)`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`code`),vN(244,`--border-color`),ug()(),Ac(245,`td`),vN(246,`Cor da borda`),ug(),Ac(247,`td`)(248,`code`),vN(249,`var(--color-transparent)`),ug()()(),Ac(250,`tr`)(251,`td`)(252,`code`),vN(253,`--shadow`),ug()(),Ac(254,`td`),vN(255,`Contém o valor da sombra do elemento`),ug(),Ac(256,`td`)(257,`code`),vN(258,`var(--shadow-none)`),ug()()(),Ac(259,`tr`)(260,`td`)(261,`code`),vN(262,`--font-family-submenu`),ug()(),Ac(263,`td`),vN(264,`Fonte do texto dos itens de sub-menu`),ug(),Ac(265,`td`)(266,`code`),vN(267,`var(--font-family-theme)`),ug()()(),Ac(268,`tr`)(269,`td`)(270,`code`),vN(271,`--font-weight-submenu`),ug()(),Ac(272,`td`),vN(273,`Peso da fonte do texto dos itens de sub-menu`),ug(),Ac(274,`td`)(275,`code`),vN(276,`var(--font-weight-bold)`),ug()()(),Ac(277,`tr`)(278,`td`)(279,`strong`),vN(280,`Sub-menu - Hover`),ug()(),Kc(281,`td`)(282,`td`),ug(),Ac(283,`tr`)(284,`td`)(285,`code`),vN(286,`--background-hover`),ug()(),Ac(287,`td`),vN(288,`Cor de background dos itens do sub-menu no estado hover`),ug(),Ac(289,`td`)(290,`code`),vN(291,`var(--color-brand-01-lighter)`),ug()()(),Ac(292,`tr`)(293,`td`)(294,`code`),vN(295,`--icon-color-hover`),ug()(),Ac(296,`td`),vN(297,`Cor do ícone dos itens de sub-menu no estado hover`),ug(),Ac(298,`td`)(299,`code`),vN(300,`var(--color-brand-01-darkest)`),ug()()(),Ac(301,`tr`)(302,`td`)(303,`code`),vN(304,`--text-color-hover`),ug()(),Ac(305,`td`),vN(306,`Cor do texto dos itens de sub-menu no estado hover`),ug(),Ac(307,`td`)(308,`code`),vN(309,`var(--color-brand-01-darkest)`),ug()()(),Ac(310,`tr`)(311,`td`)(312,`strong`),vN(313,`Sub-menu - pressed`),ug()(),Kc(314,`td`)(315,`td`),ug(),Ac(316,`tr`)(317,`td`)(318,`code`),vN(319,`--background-pressed`),ug()(),Ac(320,`td`),vN(321,`Cor de background dos itens do sub-menu no estado pressed`),ug(),Ac(322,`td`)(323,`code`),vN(324,`var(--color-brand-01-light)`),ug()()(),Ac(325,`tr`)(326,`td`)(327,`code`),vN(328,`--icon-color-pressed`),ug()(),Ac(329,`td`),vN(330,`Cor do ícone dos itens de sub-menu no estado pressed`),ug(),Ac(331,`td`)(332,`code`),vN(333,`var(--color-brand-01-darkest)`),ug()()(),Ac(334,`tr`)(335,`td`)(336,`code`),vN(337,`--text-color-pressed`),ug()(),Ac(338,`td`),vN(339,`Cor do texto dos itens de sub-menu no estado pressed`),ug(),Ac(340,`td`)(341,`code`),vN(342,`var(--color-brand-01-darkest)`),ug()()(),Ac(343,`tr`)(344,`td`)(345,`strong`),vN(346,`Sub-menu - selected`),ug()(),Kc(347,`td`)(348,`td`),ug(),Ac(349,`tr`)(350,`td`)(351,`code`),vN(352,`--background-selected`),ug()(),Ac(353,`td`),vN(354,`Cor de background dos itens do sub-menu no estado selected`),ug(),Ac(355,`td`)(356,`code`),vN(357,`var(--color-brand-01-light)`),ug()()(),Ac(358,`tr`)(359,`td`)(360,`code`),vN(361,`--icon-color-selected`),ug()(),Ac(362,`td`),vN(363,`Cor do ícone dos itens de sub-menu no estado selected`),ug(),Ac(364,`td`)(365,`code`),vN(366,`var(--color-neutral-dark-95)`),ug()()(),Ac(367,`tr`)(368,`td`)(369,`code`),vN(370,`--text-color-selected`),ug()(),Ac(371,`td`),vN(372,`Cor do texto dos itens de sub-menu no estado selected`),ug(),Ac(373,`td`)(374,`code`),vN(375,`var(--color-brand-01-darkest)`),ug()()(),Ac(376,`tr`)(377,`td`)(378,`strong`),vN(379,`Customer`),ug()(),Kc(380,`td`)(381,`td`),ug(),Ac(382,`tr`)(383,`td`)(384,`code`),vN(385,`--background-color-customer`),ug()(),Ac(386,`td`),vN(387,`Cor do background da seção customer`),ug(),Ac(388,`td`)(389,`code`),vN(390,`var(--color-neutral-light-00)`),ug()()(),Ac(391,`tr`)(392,`td`)(393,`code`),vN(394,`--border-color`),ug()(),Ac(395,`td`),vN(396,`Cor da borda da seção customer`),ug(),Ac(397,`td`)(398,`code`),vN(399,`var(--color-neutral-light-10)`),ug()()(),Ac(400,`tr`)(401,`td`)(402,`code`),vN(403,`--border-style`),ug()(),Ac(404,`td`),vN(405,`Estilo da borda da seção customer`),ug(),Ac(406,`td`)(407,`code`),vN(408,`solid`),ug()()(),Ac(409,`tr`)(410,`td`)(411,`code`),vN(412,`--border-width`),ug()(),Ac(413,`td`),vN(414,`Largura da borda da seção customer`),ug(),Ac(415,`td`)(416,`code`),vN(417,`var(--border-width-sm)`),ug()()(),Ac(418,`tr`)(419,`td`)(420,`strong`),vN(421,`Customer - hover`),ug()(),Kc(422,`td`)(423,`td`),ug(),Ac(424,`tr`)(425,`td`)(426,`code`),vN(427,`--background-color-customer-hover`),ug()(),Ac(428,`td`),vN(429,`Cor do background da seção customer no estado hover`),ug(),Ac(430,`td`)(431,`code`),vN(432,`var(--color-brand-01-lighter)`),ug()()(),Ac(433,`tr`)(434,`td`)(435,`strong`),vN(436,`Customer - pressed`),ug()(),Kc(437,`td`)(438,`td`),ug(),Ac(439,`tr`)(440,`td`)(441,`code`),vN(442,`--background-color-customer-pressed`),ug()(),Ac(443,`td`),vN(444,`Cor do background da seção customer no estado pressed`),ug(),Ac(445,`td`)(446,`code`),vN(447,`var(--color-brand-01-light)`),ug()()(),Ac(448,`tr`)(449,`td`)(450,`code`),vN(451,`--border-width-pressed`),ug()(),Ac(452,`td`),vN(453,`Largura da borda da seção customer no estado pressed`),ug(),Ac(454,`td`)(455,`code`),vN(456,`var(--border-width-md)`),ug()()()()()(),Ac(457,`div`,7)(458,`h4`,8),vN(459,`Seletor`),ug(),Ac(460,`pre`,9),vN(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),ug()(),Ac(462,`h4`,10),vN(463,`Propriedades`),ug(),Ac(464,`table`,11)(465,`tr`,12)(466,`th`,13),vN(467,`Nome`),ug(),Ac(468,`th`,13),vN(469,`Tipo`),ug(),Ac(470,`th`,13),vN(471,`Padrão`),ug(),Ac(472,`th`,13),vN(473,`Descrição`),ug()(),Ac(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),vN(478,` p-actions-tools`),Kc(479,`br`),ug()()(),Ac(480,`td`,18)(481,`code`,19),vN(482,`Array<PoHeaderActionTool>`),ug()(),Ac(483,`td`,20),vN(484,`-`),ug(),Ac(485,`td`,21)(486,`em`)(487,`strong`),vN(488,`(opcional)`),ug()(),Ac(489,`p`),vN(490,`Propriedade para configurar a seção de tools do `),Ac(491,`code`),vN(492,`po-header`),ug()(),Ac(493,`blockquote`)(494,`p`),vN(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),ug()()()(),Ac(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),vN(500,` p-amount-more`),Kc(501,`br`),ug()()(),Ac(502,`td`,18)(503,`code`,22),vN(504,`number`),ug()(),Ac(505,`td`,20),vN(506,`-`),ug(),Ac(507,`td`,21)(508,`em`)(509,`strong`),vN(510,`(opcional)`),ug()(),Ac(511,`p`),vN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),ug(),Ac(513,`blockquote`)(514,`p`),vN(515,`Ao utilizar essa propriedade o `),Ac(516,`code`),vN(517,`po-header`),ug(),vN(518,` não irá realizar o calculo automatíco de itens.`),ug()()()(),Ac(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),vN(523,` p-brand`),Kc(524,`br`),ug()()(),Ac(525,`td`,18)(526,`code`,23),vN(527,`PoHeaderBrand `),ug(),Ac(528,`code`,24),vN(529,` string`),ug()(),Ac(530,`td`,20),vN(531,`-`),ug(),Ac(532,`td`,21)(533,`em`)(534,`strong`),vN(535,`(opcional)`),ug()(),Ac(536,`p`),vN(537,`Propriedade para configurar a seção de brand do `),Ac(538,`code`),vN(539,`po-header`),ug()(),Ac(540,`p`),vN(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),ug()()(),Ac(542,`tr`,14)(543,`td`,15)(544,`div`,25)(545,`span`,26),vN(546,` (p-colapsed-menu)`),Kc(547,`br`),ug()()(),Ac(548,`td`,18)(549,`code`,27),vN(550,`EventEmitter`),ug()(),Ac(551,`td`,20),vN(552,`-`),ug(),Ac(553,`td`,21)(554,`em`)(555,`strong`),vN(556,`(opcional)`),ug()(),Ac(557,`p`),vN(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),ug()()(),Ac(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),vN(563,` p-filter-menu`),Kc(564,`br`),ug()()(),Ac(565,`td`,18)(566,`code`,28),vN(567,`boolean`),ug()(),Ac(568,`td`,20),vN(569,`-`),ug(),Ac(570,`td`,21)(571,`em`)(572,`strong`),vN(573,`(opcional)`),ug()(),Ac(574,`p`),vN(575,`Habilita campo para filtrar itens no menu`),ug()()(),Ac(576,`tr`,14)(577,`td`,15)(578,`div`,16)(579,`span`,17),vN(580,` p-header-template`),Kc(581,`br`),ug()()(),Ac(582,`td`,18)(583,`code`,29),vN(584,`TemplateRef<any>`),ug()(),Ac(585,`td`,20),vN(586,`-`),ug(),Ac(587,`td`,21)(588,`em`)(589,`strong`),vN(590,`(opcional)`),ug()(),Ac(591,`p`),vN(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Ac(593,`code`),vN(594,`p-menu-items`),ug()()()(),Ac(595,`tr`,14)(596,`td`,15)(597,`div`,16)(598,`span`,17),vN(599,` p-header-user`),Kc(600,`br`),ug()()(),Ac(601,`td`,18)(602,`code`,30),vN(603,`PoHeaderUser`),ug()(),Ac(604,`td`,20),vN(605,`-`),ug(),Ac(606,`td`,21)(607,`em`)(608,`strong`),vN(609,`(opcional)`),ug()(),Ac(610,`p`),vN(611,`Propriedade para configurar a seção de headerUser do `),Ac(612,`code`),vN(613,`po-header`),ug()()()(),Ac(614,`tr`,14)(615,`td`,15)(616,`div`,16)(617,`span`,17),vN(618,` p-hide-button-menu`),Kc(619,`br`),ug()()(),Ac(620,`td`,18)(621,`code`,28),vN(622,`boolean`),ug()(),Ac(623,`td`,20),vN(624,`-`),ug(),Ac(625,`td`,21)(626,`em`)(627,`strong`),vN(628,`(opcional)`),ug()(),Ac(629,`p`),vN(630,`Esconde o botão de menu colapsado.`),ug()()(),Ac(631,`tr`,14)(632,`td`,15)(633,`div`,16)(634,`span`,17),vN(635,` p-literals`),Kc(636,`br`),ug()()(),Ac(637,`td`,18)(638,`code`,31),vN(639,`PoHeaderLiterals`),ug()(),Ac(640,`td`,20),vN(641,`-`),ug(),Ac(642,`td`,21)(643,`em`)(644,`strong`),vN(645,`(opcional)`),ug()(),Ac(646,`p`),vN(647,`Objeto com a literal usada na propriedade `),Ac(648,`code`),vN(649,`p-literals`),ug(),vN(650,`.`),ug(),Ac(651,`p`),vN(652,`Para customizar a literal, basta declarar um objeto do tipo `),Ac(653,`code`),vN(654,`PoHeaderLiterals`),ug(),vN(655,` conforme exemplo abaixo:`),ug(),Ac(656,`pre`)(657,`code`),vN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),ug()(),Ac(659,`p`),vN(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(661,`pre`)(662,`code`),vN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),ug()(),Ac(664,`blockquote`)(665,`p`),vN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(667,`a`,32)(668,`code`),vN(669,`PoI18nService`),ug()(),vN(670,` ou do browser.`),ug()()()(),Ac(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),vN(675,` p-menus`),Kc(676,`br`),ug()()(),Ac(677,`td`,18)(678,`code`,33),vN(679,`Array<PoMenuItem>`),ug()(),Ac(680,`td`,20),vN(681,`-`),ug(),Ac(682,`td`,21)(683,`em`)(684,`strong`),vN(685,`(opcional)`),ug()(),Ac(686,`p`),vN(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ug(),Ac(688,`blockquote`)(689,`p`),vN(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),ug()()()(),Ac(691,`tr`,14)(692,`td`,15)(693,`div`,16)(694,`span`,17),vN(695,` p-menu-items`),Kc(696,`br`),ug()()(),Ac(697,`td`,18)(698,`code`,34),vN(699,`Array<PoHeaderActions>`),ug()(),Ac(700,`td`,20),vN(701,`-`),ug(),Ac(702,`td`,21)(703,`em`)(704,`strong`),vN(705,`(opcional)`),ug()(),Ac(706,`p`),vN(707,`Propriedade para configurar a seção de menu do `),Ac(708,`code`),vN(709,`po-header`),ug(),vN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),ug(),Ac(711,`blockquote`)(712,`p`),vN(713,`Os itens irão ficar visíveis em uma tela de até 960px`),ug()()()(),Ac(714,`tr`,14)(715,`td`,15)(716,`div`,16)(717,`span`,17),vN(718,` p-size`),Kc(719,`br`),ug()()(),Ac(720,`td`,18)(721,`code`,24),vN(722,`string`),ug()(),Ac(723,`td`,20)(724,`p`)(725,`code`),vN(726,`medium`),ug()()(),Ac(727,`td`,21)(728,`em`)(729,`strong`),vN(730,`(opcional)`),ug()(),Ac(731,`p`),vN(732,`Define o tamanho do componente:`),ug(),Ac(733,`ul`)(734,`li`)(735,`code`),vN(736,`small`),ug(),vN(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),ug(),Ac(738,`li`)(739,`code`),vN(740,`medium`),ug(),vN(741,`: altura de 56px.`),ug()(),Ac(742,`blockquote`)(743,`p`),vN(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(745,`code`),vN(746,`medium`),ug(),vN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(748,`a`,35),vN(749,`po-theme`),ug(),vN(750,`.`),ug()()()()(),Ac(751,`h3`),vN(752,`Interfaces`),ug(),Ac(753,`h4`,36)(754,`code`,5),vN(755,`PoHeaderActionTool`),ug()(),Ac(756,`div`,2)(757,`p`)(758,`em`),vN(759,`Interface`),ug(),vN(760,` que define a seção de Actions do header.`),ug(),Ac(761,`p`),vN(762,`Indicação de uso:`),ug(),Ac(763,`ul`)(764,`li`),vN(765,`Primeira ação destinada à app launcher.`),ug(),Ac(766,`li`),vN(767,`Segunda ação (terceiro ícone) destinada à notificações.`),ug(),Ac(768,`li`),vN(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),ug()(),Ac(770,`blockquote`)(771,`p`),vN(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),ug()()(),Ac(773,`h4`,10),vN(774,`Propriedades`),ug(),Ac(775,`table`,11)(776,`tr`,12)(777,`th`,13),vN(778,`Nome`),ug(),Ac(779,`th`,13),vN(780,`Tipo`),ug(),Ac(781,`th`,13),vN(782,`Descrição`),ug()(),Ac(783,`tr`,14)(784,`td`,15)(785,`div`,16)(786,`span`,17),vN(787,` action`),Kc(788,`br`),ug()()(),Ac(789,`td`,18)(790,`code`,37),vN(791,`Function`),ug()(),Ac(792,`td`,21)(793,`em`)(794,`strong`),vN(795,`(opcional)`),ug()(),Ac(796,`p`),vN(797,`Evento emitido ao clicar em uma ação`),ug(),Ac(798,`p`),vN(799,`Exemplo: `),Ac(800,`code`),vN(801,`action: this.myFunction.bind(this)`),ug()()()(),Ac(802,`tr`,14)(803,`td`,15)(804,`div`,16)(805,`span`,17),vN(806,` badge`),Kc(807,`br`),ug()()(),Ac(808,`td`,18)(809,`code`,22),vN(810,`number`),ug()(),Ac(811,`td`,21)(812,`em`)(813,`strong`),vN(814,`(opcional)`),ug()(),Ac(815,`p`),vN(816,`Valor númerico com a repsentação de notificações`),ug()()(),Ac(817,`tr`,14)(818,`td`,15)(819,`div`,16)(820,`span`,17),vN(821,` icon`),Kc(822,`br`),ug()()(),Ac(823,`td`,18)(824,`code`,24),vN(825,`string`),ug()(),Ac(826,`td`,21)(827,`em`)(828,`strong`),vN(829,`(opcional)`),ug()(),Ac(830,`p`),vN(831,`Ícone do botão de ação`),ug()()(),Ac(832,`tr`,14)(833,`td`,15)(834,`div`,16)(835,`span`,17),vN(836,` items`),Kc(837,`br`),ug()()(),Ac(838,`td`,18)(839,`code`,38),vN(840,`Array<PoHeaderActionToolItem>`),ug()(),Ac(841,`td`,21)(842,`em`)(843,`strong`),vN(844,`(opcional)`),ug()(),Ac(845,`p`),vN(846,`Itens de ações`),ug()()(),Ac(847,`tr`,14)(848,`td`,15)(849,`div`,16)(850,`span`,17),vN(851,` label`),Kc(852,`br`),ug()()(),Ac(853,`td`,18)(854,`code`,24),vN(855,`string`),ug()(),Ac(856,`td`,21)(857,`em`)(858,`strong`),vN(859,`(opcional)`),ug()(),Ac(860,`p`),vN(861,`Título da ação`),ug()()(),Ac(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),vN(866,` link`),Kc(867,`br`),ug()()(),Ac(868,`td`,18)(869,`code`,24),vN(870,`string`),ug()(),Ac(871,`td`,21)(872,`em`)(873,`strong`),vN(874,`(opcional)`),ug()(),Ac(875,`p`),vN(876,`link utilizado no redirecionamento das páginas.`),ug()()(),Ac(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),vN(881,` onClose`),Kc(882,`br`),ug()()(),Ac(883,`td`,18)(884,`code`,39),vN(885,`(label?: string) => void`),ug()(),Ac(886,`td`,21)(887,`em`)(888,`strong`),vN(889,`(opcional)`),ug()(),Ac(890,`p`),vN(891,`Função executada quando o popup ou popover da ação é fechado.`),ug(),Ac(892,`p`),vN(893,`Esse evento é disparado toda vez que o popup (quando há `),Ac(894,`code`),vN(895,`items`),ug(),vN(896,`) ou o popover (quando há `),Ac(897,`code`),vN(898,`popover`),ug(),vN(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),ug(),Ac(900,`p`),vN(901,`O callback recebe como parâmetro o `),Ac(902,`code`),vN(903,`label`),ug(),vN(904,` da ação que disparou o evento.`),ug(),Ac(905,`p`),vN(906,`Exemplo: `),Ac(907,`code`),vN(908,`onClose: (label) => console.log('Fechado:', label)`),ug()()()(),Ac(909,`tr`,14)(910,`td`,15)(911,`div`,16)(912,`span`,17),vN(913,` onOpen`),Kc(914,`br`),ug()()(),Ac(915,`td`,18)(916,`code`,39),vN(917,`(label?: string) => void`),ug()(),Ac(918,`td`,21)(919,`em`)(920,`strong`),vN(921,`(opcional)`),ug()(),Ac(922,`p`),vN(923,`Função executada quando o popup ou popover da ação é aberto.`),ug(),Ac(924,`p`),vN(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Ac(926,`code`),vN(927,`items`),ug(),vN(928,`)
ou o popover (quando h\xE1 `),Ac(929,`code`),vN(930,`popover`),ug(),vN(931,`) é exibido.`),ug(),Ac(932,`p`),vN(933,`O callback recebe como parâmetro o `),Ac(934,`code`),vN(935,`label`),ug(),vN(936,` da ação que disparou o evento.`),ug(),Ac(937,`p`),vN(938,`Exemplo: `),Ac(939,`code`),vN(940,`onOpen: (label) => console.log('Aberto:', label)`),ug()()()(),Ac(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),vN(945,` popover`),Kc(946,`br`),ug()()(),Ac(947,`td`,18)(948,`code`,40),vN(949,`PoHeaderActionPopoverAction`),ug()(),Ac(950,`td`,21)(951,`em`)(952,`strong`),vN(953,`(opcional)`),ug()(),Ac(954,`p`),vN(955,`Template que será utilizado na ação`),ug()()(),Ac(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),vN(960,` tooltip`),Kc(961,`br`),ug()()(),Ac(962,`td`,18)(963,`code`,24),vN(964,`string`),ug()(),Ac(965,`td`,21)(966,`em`)(967,`strong`),vN(968,`(opcional)`),ug()(),Ac(969,`p`),vN(970,`Texto que será apresentado na tooltip`),ug()()()(),Ac(971,`h4`,36)(972,`code`,5),vN(973,`PoHeaderActionPopoverAction`),ug()(),Ac(974,`div`,2)(975,`p`)(976,`em`),vN(977,`Interface`),ug(),vN(978,` que define um template para uma ação.`),ug()(),Ac(979,`h4`,10),vN(980,`Propriedades`),ug(),Ac(981,`table`,11)(982,`tr`,12)(983,`th`,13),vN(984,`Nome`),ug(),Ac(985,`th`,13),vN(986,`Tipo`),ug(),Ac(987,`th`,13),vN(988,`Descrição`),ug()(),Ac(989,`tr`,14)(990,`td`,15)(991,`div`,16)(992,`span`,17),vN(993,` content`),Kc(994,`br`),ug()()(),Ac(995,`td`,18)(996,`code`,29),vN(997,`TemplateRef<any>`),ug()(),Ac(998,`td`,21)(999,`p`),vN(1e3,`Template que será renderizado dentro do popover.`),ug()()(),Ac(1001,`tr`,14)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),vN(1005,` width`),Kc(1006,`br`),ug()()(),Ac(1007,`td`,18)(1008,`code`,22),vN(1009,`number`),ug()(),Ac(1010,`td`,21)(1011,`em`)(1012,`strong`),vN(1013,`(opcional)`),ug()(),Ac(1014,`p`),vN(1015,`Largura, em pixels, do template renderizado dentro do popover.`),ug(),Ac(1016,`p`),vN(1017,`Valores permitidos: de 240 a 800.`),ug()()()(),Ac(1018,`h4`,36)(1019,`code`,5),vN(1020,`PoHeaderActionToolItem`),ug()(),Ac(1021,`div`,2)(1022,`p`)(1023,`em`),vN(1024,`Interface`),ug(),vN(1025,` que define uma lista de ações.`),ug()(),Ac(1026,`h4`,10),vN(1027,`Propriedades`),ug(),Ac(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),vN(1031,`Nome`),ug(),Ac(1032,`th`,13),vN(1033,`Tipo`),ug(),Ac(1034,`th`,13),vN(1035,`Descrição`),ug()(),Ac(1036,`tr`,14)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),vN(1040,` action`),Kc(1041,`br`),ug()()(),Ac(1042,`td`,18)(1043,`code`,37),vN(1044,`Function`),ug()(),Ac(1045,`td`,21)(1046,`p`),vN(1047,`Evento emitido ao clicar em uma ação`),ug(),Ac(1048,`p`),vN(1049,`Exemplo: `),Ac(1050,`code`),vN(1051,`action: this.myFunction.bind(this)`),ug()()()(),Ac(1052,`tr`,14)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),vN(1056,` label`),Kc(1057,`br`),ug()()(),Ac(1058,`td`,18)(1059,`code`,24),vN(1060,`string`),ug()(),Ac(1061,`td`,21)(1062,`p`),vN(1063,`Label da ação`),ug()()()(),Ac(1064,`h4`,36)(1065,`code`,5),vN(1066,`PoHeaderActions`),ug()(),Ac(1067,`div`,2)(1068,`p`)(1069,`em`),vN(1070,`Interface`),ug(),vN(1071,` que define uma lista de ações no sub-menu.`),ug()(),Ac(1072,`h4`,10),vN(1073,`Propriedades`),ug(),Ac(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),vN(1077,`Nome`),ug(),Ac(1078,`th`,13),vN(1079,`Tipo`),ug(),Ac(1080,`th`,13),vN(1081,`Descrição`),ug()(),Ac(1082,`tr`,14)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),vN(1086,` action`),Kc(1087,`br`),ug()()(),Ac(1088,`td`,18)(1089,`code`,37),vN(1090,`Function`),ug()(),Ac(1091,`td`,21)(1092,`em`)(1093,`strong`),vN(1094,`(opcional)`),ug()(),Ac(1095,`p`),vN(1096,`Evento da ação`),ug(),Ac(1097,`p`),vN(1098,` Exemplo: `),Ac(1099,`code`),vN(1100,`action: this.myFunction.bind(this)`),ug()()()(),Ac(1101,`tr`,14)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),vN(1105,` id`),Kc(1106,`br`),ug()()(),Ac(1107,`td`,18)(1108,`code`,24),vN(1109,`string`),ug()(),Ac(1110,`td`,21)(1111,`em`)(1112,`strong`),vN(1113,`(opcional)`),ug()(),Ac(1114,`p`),vN(1115,`Identificador da ação`),ug()()(),Ac(1116,`tr`,14)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),vN(1120,` label`),Kc(1121,`br`),ug()()(),Ac(1122,`td`,18)(1123,`code`,24),vN(1124,`string`),ug()(),Ac(1125,`td`,21)(1126,`p`),vN(1127,`Label da ação`),ug()()(),Ac(1128,`tr`,14)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),vN(1132,` link`),Kc(1133,`br`),ug()()(),Ac(1134,`td`,18)(1135,`code`,24),vN(1136,`string`),ug()(),Ac(1137,`td`,21)(1138,`em`)(1139,`strong`),vN(1140,`(opcional)`),ug()(),Ac(1141,`p`),vN(1142,`link utilizado no redirecionamento das páginas.`),ug()()()(),Ac(1143,`h4`,36)(1144,`code`,5),vN(1145,`PoHeaderBrand`),ug()(),Ac(1146,`div`,2)(1147,`p`)(1148,`em`),vN(1149,`Interface`),ug(),vN(1150,` que define a seção de brand.`),ug()(),Ac(1151,`h4`,10),vN(1152,`Propriedades`),ug(),Ac(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),vN(1156,`Nome`),ug(),Ac(1157,`th`,13),vN(1158,`Tipo`),ug(),Ac(1159,`th`,13),vN(1160,`Descrição`),ug()(),Ac(1161,`tr`,14)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),vN(1165,` action`),Kc(1166,`br`),ug()()(),Ac(1167,`td`,18)(1168,`code`,37),vN(1169,`Function`),ug()(),Ac(1170,`td`,21)(1171,`em`)(1172,`strong`),vN(1173,`(opcional)`),ug()(),Ac(1174,`p`),vN(1175,`Evento da ação`),ug(),Ac(1176,`p`),vN(1177,` Exemplo: `),Ac(1178,`code`),vN(1179,`action: this.myFunction.bind(this)`),ug()()()(),Ac(1180,`tr`,14)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),vN(1184,` link`),Kc(1185,`br`),ug()()(),Ac(1186,`td`,18)(1187,`code`,24),vN(1188,`string`),ug()(),Ac(1189,`td`,21)(1190,`em`)(1191,`strong`),vN(1192,`(opcional)`),ug()(),Ac(1193,`p`),vN(1194,`link utilizado no redirecionamento das páginas.`),ug()()(),Ac(1195,`tr`,14)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),vN(1199,` logo`),Kc(1200,`br`),ug()()(),Ac(1201,`td`,18)(1202,`code`,24),vN(1203,`string`),ug()(),Ac(1204,`td`,21)(1205,`em`)(1206,`strong`),vN(1207,`(opcional)`),ug()(),Ac(1208,`p`),vN(1209,`Imagem da marca`),ug()()(),Ac(1210,`tr`,14)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),vN(1214,` smallLogo`),Kc(1215,`br`),ug()()(),Ac(1216,`td`,18)(1217,`code`,24),vN(1218,`string`),ug()(),Ac(1219,`td`,21)(1220,`em`)(1221,`strong`),vN(1222,`(opcional)`),ug()(),Ac(1223,`p`),vN(1224,`Imagem da marca quando a tela é menor que 960px`),ug()()(),Ac(1225,`tr`,14)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),vN(1229,` title`),Kc(1230,`br`),ug()()(),Ac(1231,`td`,18)(1232,`code`,24),vN(1233,`string`),ug()(),Ac(1234,`td`,21)(1235,`em`)(1236,`strong`),vN(1237,`(opcional)`),ug()(),Ac(1238,`p`),vN(1239,`Título da marca`),ug()()()(),Ac(1240,`h4`,36)(1241,`code`,5),vN(1242,`PoHeaderLiterals`),ug()(),Ac(1243,`div`,2)(1244,`p`),vN(1245,`Interface para definição das literais usadas no `),Ac(1246,`code`),vN(1247,`po-header`),ug(),vN(1248,`.`),ug()(),Ac(1249,`h4`,10),vN(1250,`Propriedades`),ug(),Ac(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),vN(1254,`Nome`),ug(),Ac(1255,`th`,13),vN(1256,`Tipo`),ug(),Ac(1257,`th`,13),vN(1258,`Descrição`),ug()(),Ac(1259,`tr`,14)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),vN(1263,` headerLinks`),Kc(1264,`br`),ug()()(),Ac(1265,`td`,18)(1266,`code`,24),vN(1267,`string`),ug()(),Ac(1268,`td`,21)(1269,`em`)(1270,`strong`),vN(1271,`(opcional)`),ug()(),Ac(1272,`p`),vN(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),ug()()(),Ac(1274,`tr`,14)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),vN(1278,` notifications`),Kc(1279,`br`),ug()()(),Ac(1280,`td`,18)(1281,`code`,24),vN(1282,`string`),ug()(),Ac(1283,`td`,21)(1284,`em`)(1285,`strong`),vN(1286,`(opcional)`),ug()(),Ac(1287,`p`),vN(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Ac(1289,`code`),vN(1290,`badge`),ug()()()()(),Ac(1291,`h4`,36)(1292,`code`,5),vN(1293,`PoHeaderUser`),ug()(),Ac(1294,`div`,2)(1295,`p`)(1296,`em`),vN(1297,`Interface`),ug(),vN(1298,` que define a seção de Customer do header.`),ug()(),Ac(1299,`h4`,10),vN(1300,`Propriedades`),ug(),Ac(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),vN(1304,`Nome`),ug(),Ac(1305,`th`,13),vN(1306,`Tipo`),ug(),Ac(1307,`th`,13),vN(1308,`Descrição`),ug()(),Ac(1309,`tr`,14)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),vN(1313,` action`),Kc(1314,`br`),ug()()(),Ac(1315,`td`,18)(1316,`code`,37),vN(1317,`Function`),ug()(),Ac(1318,`td`,21)(1319,`em`)(1320,`strong`),vN(1321,`(opcional)`),ug()(),Ac(1322,`p`),vN(1323,`Evento emitido ao clicar na seção`),ug(),Ac(1324,`p`),vN(1325,`Exemplo: `),Ac(1326,`code`),vN(1327,`action: this.myFunction.bind(this)`),ug()()()(),Ac(1328,`tr`,14)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),vN(1332,` avatar`),Kc(1333,`br`),ug()()(),Ac(1334,`td`,18)(1335,`code`,24),vN(1336,`string`),ug()(),Ac(1337,`td`,21)(1338,`p`),vN(1339,`Logo representando o perfil`),ug()()(),Ac(1340,`tr`,14)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),vN(1344,` customerBrand`),Kc(1345,`br`),ug()()(),Ac(1346,`td`,18)(1347,`code`,24),vN(1348,`string`),ug()(),Ac(1349,`td`,21)(1350,`p`),vN(1351,`Imagem da marca`),ug()()(),Ac(1352,`tr`,14)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),vN(1356,` items`),Kc(1357,`br`),ug()()(),Ac(1358,`td`,18)(1359,`code`,38),vN(1360,`Array<PoHeaderActionToolItem>`),ug()(),Ac(1361,`td`,21)(1362,`em`)(1363,`strong`),vN(1364,`(opcional)`),ug()(),Ac(1365,`p`),vN(1366,`Itens de ações`),ug(),Ac(1367,`blockquote`)(1368,`p`),vN(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),ug()()()(),Ac(1370,`tr`,14)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),vN(1374,` onClose`),Kc(1375,`br`),ug()()(),Ac(1376,`td`,18)(1377,`code`,37),vN(1378,`Function`),ug()(),Ac(1379,`td`,21)(1380,`em`)(1381,`strong`),vN(1382,`(opcional)`),ug()(),Ac(1383,`p`),vN(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),ug(),Ac(1385,`p`),vN(1386,`Esse evento é disparado toda vez que o popup (quando há `),Ac(1387,`code`),vN(1388,`items`),ug(),vN(1389,`) ou o popover (quando há `),Ac(1390,`code`),vN(1391,`popover`),ug(),vN(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),ug(),Ac(1393,`p`),vN(1394,`Exemplo: `),Ac(1395,`code`),vN(1396,`onClose: this.onCloseNotifications.bind(this)`),ug()()()(),Ac(1397,`tr`,14)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),vN(1401,` onOpen`),Kc(1402,`br`),ug()()(),Ac(1403,`td`,18)(1404,`code`,37),vN(1405,`Function`),ug()(),Ac(1406,`td`,21)(1407,`em`)(1408,`strong`),vN(1409,`(opcional)`),ug()(),Ac(1410,`p`),vN(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),ug(),Ac(1412,`p`),vN(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Ac(1414,`code`),vN(1415,`items`),ug(),vN(1416,`) ou o popover (quando há `),Ac(1417,`code`),vN(1418,`popover`),ug(),vN(1419,`) é exibido.`),ug(),Ac(1420,`p`),vN(1421,`Exemplo: `),Ac(1422,`code`),vN(1423,`onOpen: this.onOpenNotifications.bind(this)`),ug()()()(),Ac(1424,`tr`,14)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),vN(1428,` popover`),Kc(1429,`br`),ug()()(),Ac(1430,`td`,18)(1431,`code`,40),vN(1432,`PoHeaderActionPopoverAction`),ug()(),Ac(1433,`td`,21)(1434,`em`)(1435,`strong`),vN(1436,`(opcional)`),ug()(),Ac(1437,`p`),vN(1438,`Template que será utilizado na ação`),ug()()(),Ac(1439,`tr`,14)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),vN(1443,` status`),Kc(1444,`br`),ug()()(),Ac(1445,`td`,18)(1446,`code`,41),vN(1447,`'positive' `),ug(),Ac(1448,`code`,42),vN(1449,` 'negative' `),ug(),Ac(1450,`code`,43),vN(1451,` 'warning' `),ug(),Ac(1452,`code`,44),vN(1453,` 'disabled'`),ug()(),Ac(1454,`td`,21)(1455,`em`)(1456,`strong`),vN(1457,`(opcional)`),ug()(),Ac(1458,`p`),vN(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),ug(),Ac(1460,`ul`)(1461,`li`)(1462,`code`),vN(1463,`positive`),ug(),vN(1464,`: Define a cor do `),Ac(1465,`code`),vN(1466,`status`),ug(),vN(1467,` com a cor de feedback positivo.`),ug(),Ac(1468,`li`)(1469,`code`),vN(1470,`negative`),ug(),vN(1471,`: Define a cor do `),Ac(1472,`code`),vN(1473,`status`),ug(),vN(1474,` com a cor de feedback negative.`),ug(),Ac(1475,`li`)(1476,`code`),vN(1477,`warning`),ug(),vN(1478,`: Define a cor do `),Ac(1479,`code`),vN(1480,`status`),ug(),vN(1481,` com a cor de feedback warning.`),ug(),Ac(1482,`li`)(1483,`code`),vN(1484,`disabled`),ug(),vN(1485,`: Define a cor do `),Ac(1486,`code`),vN(1487,`status`),ug(),vN(1488,` com a cor de feedback disabled`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var Ye=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(E(Qn),E(wn))};static ɵcmp=Hn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-header-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-header-basic-view`)(6,`sample-po-header-labs-view`)(7,`sample-po-header-apps-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Cze,cae,mae,xe,ve,ye,Te],encapsulation:2,changeDetection:1})}return r})()}];var we=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[kL.forChild(Ye),kL]})}return r})();var At=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[Ta,we]})}return r})();export{At as DocPoHeaderModule};