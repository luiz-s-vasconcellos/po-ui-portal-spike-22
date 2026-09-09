import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Dr as NN,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,K as Ma,Ki as lo,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Wn as Be$1,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ei as Yl,er as EN,fi as ag,gi as bL,ha as ww,j as F8e,k as Eu,l as ar,la as uo,lr as Gl,mr as JE,nn as j4,on as mCe,pa as w,qn as CN,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vi as bx,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var he=(()=>{class a{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(l){this.poNotification=l}myAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(r,i){r&1&&Gl(0,`po-header`,0),r&2&&nw(`p-brand`,i.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[F8e],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Header Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-header-basic/sample-po-header-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-header-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return a})();var _e=()=>({label:`Positive`,value:`positive`});var He=()=>({label:`Negative`,value:`negative`});var Me=()=>({label:`Warning`,value:`warning`});var Be=()=>({label:`Disabled`,value:`disabled`});var ke=(a,A,l,r)=>[a,A,l,r];var Le=()=>({label:`Medium`,value:`medium`});var De=()=>({label:`Small`,value:`small`});var Ne=(a,A)=>[a,A];var ge=(()=>{class a{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(l){this.poNotification=l}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,l],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let p=Ax();Gl(0,`po-header`,1),Tl(1,`div`,2)(2,`po-input`,3),ww(`ngModelChange`,function(d){return Ky(p),uN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Xy(d)}),ag(),a0(),Tl(3,`po-input`,4),ww(`ngModelChange`,function(d){return Ky(p),uN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Xy(d)}),ag(),a0(),Tl(4,`po-input`,5),ww(`ngModelChange`,function(d){return Ky(p),uN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Xy(d)}),ag(),a0(),Tl(5,`div`,6)(6,`po-button`,7),ht(`p-click`,function(){return i.addBrand()}),ag()()(),Gl(7,`hr`),Tl(8,`div`,8)(9,`h3`,9),cN(10,`Ações dos itens de menu`),ag(),Tl(11,`po-input`,10),ww(`ngModelChange`,function(d){return Ky(p),uN(i.menuActionEvent,d)||(i.menuActionEvent=d),Xy(d)}),ag(),a0(),Tl(12,`po-input`,11),ww(`ngModelChange`,function(d){return Ky(p),uN(i.menuActionLabel,d)||(i.menuActionLabel=d),Xy(d)}),ag(),a0(),Tl(13,`po-button`,12),ht(`p-click`,function(){return i.addAction()}),ag()(),Gl(14,`hr`),Tl(15,`h3`,9),cN(16,`Ações das configurações`),ag(),Tl(17,`form`,8,0)(19,`po-input`,13),ww(`ngModelChange`,function(d){return Ky(p),uN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Xy(d)}),ag(),a0(),Tl(20,`po-input`,14),ww(`ngModelChange`,function(d){return Ky(p),uN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Xy(d)}),ag(),a0(),Tl(21,`po-number`,15),ww(`ngModelChange`,function(d){return Ky(p),uN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Xy(d)}),ag(),a0(),Tl(22,`po-switch`,16),ww(`ngModelChange`,function(d){return Ky(p),uN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Xy(d)}),ag(),a0(),Tl(23,`po-button`,17),ht(`p-click`,function(){return i.addTool(i.actionNewTool)}),ag()(),Gl(24,`hr`),Tl(25,`h3`,9),cN(26,`Ações do Usuário`),ag(),Tl(27,`form`,8,0)(29,`po-input`,18),ww(`ngModelChange`,function(d){return Ky(p),uN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Xy(d)}),ag(),a0(),Tl(30,`po-input`,19),ww(`ngModelChange`,function(d){return Ky(p),uN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Xy(d)}),ag(),a0(),Tl(31,`po-radio-group`,20),ww(`ngModelChange`,function(d){return Ky(p),uN(i.newActionUser.status,d)||(i.newActionUser.status=d),Xy(d)}),ag(),a0(),Tl(32,`po-button`,17),ht(`p-click`,function(){return i.addUser()}),ag(),Gl(33,`hr`),Tl(34,`h3`,9),cN(35,`Variações de tamanho`),ag(),Tl(36,`div`,8)(37,`po-radio-group`,21),ww(`ngModelChange`,function(d){return Ky(p),uN(i.size,d)||(i.size=d),Xy(d)}),ag(),a0(),ag(),Gl(38,`hr`),Tl(39,`po-button`,22),ht(`p-click`,function(){return i.reset()}),ag()()}r&2&&(nw(`p-side-menu-only-action`,!0)(`p-brand`,i.headerBrand)(`p-menu-items`,i.menuActions)(`p-actions-tools`,i.actionTools)(`p-header-user`,i.actionUser)(`p-size`,i.size),jp(2),Ew(`ngModel`,i.headerBrandTitle),l0(),jp(),Ew(`ngModel`,i.headerBrandLogo),l0(),jp(),Ew(`ngModel`,i.headerBrandSmallLogo),l0(),jp(7),Ew(`ngModel`,i.menuActionEvent),l0(),jp(),Ew(`ngModel`,i.menuActionLabel),l0(),jp(),nw(`p-disabled`,!i.menuActionLabel),jp(6),Ew(`ngModel`,i.actionNewTool.icon),l0(),jp(),Ew(`ngModel`,i.actionNewTool.tooltip),l0(),jp(),Ew(`ngModel`,i.actionNewTool.badge),l0(),jp(),Ew(`ngModel`,i.actionNewToolEvent),l0(),jp(),nw(`p-disabled`,i.actionTools.length>2),jp(6),Ew(`ngModel`,i.newActionUser.customerBrand),l0(),jp(),Ew(`ngModel`,i.newActionUser.avatar),l0(),jp(),Ew(`ngModel`,i.newActionUser.status),nw(`p-options`,CN(28,ke,_N(24,_e),_N(25,He),_N(26,Me),_N(27,Be))),l0(),jp(),nw(`p-disabled`,!i.newActionUser.avatar||i.newActionUser.customerBrand),jp(5),Ew(`ngModel`,i.size),nw(`p-options`,EN(35,Ne,_N(33,Le),_N(34,De))),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,iU,ube,L0e,j4,F8e],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Header Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-header-labs/sample-po-header-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-header
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-header-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return a})();var Ve=[`meuTemplate`];var qe=(a,A)=>A.icon;function Oe(a,A){if(a&1&&Gl(0,`po-button`,4),a&2){let l=A.$implicit;nw(`p-icon`,l.icon)}}function ze(a,A){if(a&1&&(Tl(0,`div`,2)(1,`p`),cN(2,`Meus aplicativos`),ag(),Gl(3,`br`),Tl(4,`div`,3),Cx(5,Oe,1,1,`po-button`,4,qe),ag()()),a&2){let l=Fx();jp(5),bx(l.systemApps)}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)},{label:`Notificações`,icon:`an an-chat-circle-dots`,tooltip:`Notificações do usuário`,badge:5,items:this.listItem,onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(l,r){this.poNotification=l,this.cd=r}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r({},l),{popover:s(r({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges()}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ma.Top})}onOpenTool(l){this.poNotification.information({message:`Opened: ${l} (p-actions-tools)`,orientation:Ma.Top})}onCloseTool(l){this.poNotification.warning({message:`Closed: ${l} (p-actions-tools)`,orientation:Ma.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Ma.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Ma.Top})}static ɵfac=function(r){return new(r||a)(w(Eu),w(Be$1))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-apps`]],viewQuery:function(r,i){if(r&1&&Yl(Ve,5),r&2){let p;lo(p=uo())&&(i.meuTemplate=p.first)}},standalone:!1,decls:3,vars:5,consts:[[`meuTemplate`,``],[3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`]],template:function(r,i){r&1&&(Gl(0,`po-header`,1),JE(1,ze,7,0,`ng-template`,null,0,NN)),r&2&&nw(`p-brand`,i.headerBrand)(`p-menu-items`,i.menuItems)(`p-actions-tools`,i.actionTools)(`p-header-user`,i.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[Zt,F8e],styles:[`.app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Header Apps`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-header-apps/sample-po-header-apps.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-header
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    .custom-template {
      padding: 0.5rem;
    }

    .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;

  listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  menuItems: Array<PoHeaderActions> = [
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
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem,
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    }
  ];

  headerUser: PoHeaderUser = {
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

  systemApps = [
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
      if (action.popover) {
        return {
          ...action,
          popover: {
            ...action.popover,
            content: this.meuTemplate
          }
        };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Top });
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-header-apps`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,je,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-header`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoHeaderComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O componente `),Tl(18,`code`),cN(19,`po-header`),ag(),cN(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Tl(21,`code`),cN(22,`p-brand`),ag(),cN(23,`, `),Tl(24,`code`),cN(25,`p-menu-items`),ag(),cN(26,`, `),Tl(27,`code`),cN(28,`p-actions-tools`),ag(),cN(29,` e `),Tl(30,`code`),cN(31,`p-header-user`),ag(),cN(32,`.`),ag(),Tl(33,`ul`)(34,`li`)(35,`code`),cN(36,`p-brand`),ag(),cN(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),ag(),Tl(38,`li`)(39,`code`),cN(40,`p-menu-items`),ag(),cN(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),ag(),Tl(42,`li`)(43,`code`),cN(44,`p-actions-tools`),ag(),cN(45,`: Possibilita a inclusão de até 3 botões com ações.`),ag(),Tl(46,`li`)(47,`code`),cN(48,`p-header-user`),ag(),cN(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),ag()(),Tl(50,`p`),cN(51,`O componente `),Tl(52,`code`),cN(53,`po-header`),ag(),cN(54,` pode ser usado de duas formas:`),ag(),Tl(55,`p`),cN(56,`Com `),Tl(57,`code`),cN(58,`po-menu`),ag(),cN(59,` definido pelo usuário:`),ag(),Tl(60,`pre`)(61,`code`),cN(62,`...
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
`),ag()(),Tl(63,`p`),cN(64,`Passando os itens diretamente para o `),Tl(65,`code`),cN(66,`po-header`),ag(),cN(67,` pela propriedade `),Tl(68,`code`),cN(69,`p-menus`),ag(),cN(70,`:`),ag(),Tl(71,`pre`)(72,`code`),cN(73,`...
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
`),ag()(),Tl(74,`h4`),cN(75,`Tokens customizáveis`),ag(),Tl(76,`p`),cN(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(78,`blockquote`)(79,`p`),cN(80,`Para maiores informações, acesse o guia `),Tl(81,`a`,6),cN(82,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(83,`.`),ag()(),Tl(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),cN(88,`Propriedade`),ag(),Tl(89,`th`),cN(90,`Descrição`),ag(),Tl(91,`th`),cN(92,`Valor Padrão`),ag()()(),Tl(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),cN(97,`--font-family`),ag()(),Tl(98,`td`),cN(99,`Família tipográfica usada`),ag(),Tl(100,`td`)(101,`code`),cN(102,`var(--font-family-theme)`),ag()()(),Tl(103,`tr`)(104,`td`)(105,`code`),cN(106,`--font-weight`),ag()(),Tl(107,`td`),cN(108,`Peso da fonte`),ag(),Tl(109,`td`)(110,`code`),cN(111,`var(--font-weight-bold)`),ag()()(),Tl(112,`tr`)(113,`td`)(114,`code`),cN(115,`--text-color`),ag()(),Tl(116,`td`),cN(117,`Cor do texto`),ag(),Tl(118,`td`)(119,`code`),cN(120,`var(--color-neutral-dark-70)`),ag()()(),Tl(121,`tr`)(122,`td`)(123,`code`),cN(124,`--outline-color-focused`),ag()(),Tl(125,`td`),cN(126,`Cor do outline dos itens de sub-menu e customer`),ag(),Tl(127,`td`)(128,`code`),cN(129,`var(--color-neutral-dark-95)`),ag()()(),Tl(130,`tr`)(131,`td`)(132,`code`),cN(133,`--object-fit-brand`),ag()(),Tl(134,`td`),cN(135,`Valor do object-fit da imagem do logo`),ag(),Tl(136,`td`)(137,`code`),cN(138,`contain`),ag()()(),Tl(139,`tr`)(140,`td`)(141,`code`),cN(142,`--object-fit-customer`),ag()(),Tl(143,`td`),cN(144,`Valor do object-fit da imagem do logo na seção customer`),ag(),Tl(145,`td`)(146,`code`),cN(147,`contain`),ag()()(),Tl(148,`tr`)(149,`td`)(150,`code`),cN(151,`--object-fit-customer-user`),ag()(),Tl(152,`td`),cN(153,`Valor do object-fit da imagem do avatar`),ag(),Tl(154,`td`)(155,`code`),cN(156,`cover`),ag()()(),Tl(157,`tr`)(158,`td`)(159,`strong`),cN(160,`Header`),ag()(),Gl(161,`td`)(162,`td`),ag(),Tl(163,`tr`)(164,`td`)(165,`code`),cN(166,`--background-color`),ag()(),Tl(167,`td`),cN(168,`Cor de background do header`),ag(),Tl(169,`td`)(170,`code`),cN(171,`var(--color-neutral-light-05)`),ag()()(),Tl(172,`tr`)(173,`td`)(174,`code`),cN(175,`--border-radius-bottom-left`),ag()(),Tl(176,`td`),cN(177,`Valor do radius do lado esquerdo do header`),ag(),Tl(178,`td`)(179,`code`),cN(180,`var(--border-radius-md)`),ag()()(),Tl(181,`tr`)(182,`td`)(183,`code`),cN(184,`--border-radius-bottom-right`),ag()(),Tl(185,`td`),cN(186,`Valor do radius do lado direito do header`),ag(),Tl(187,`td`)(188,`code`),cN(189,`var(--border-radius-md)`),ag()()(),Tl(190,`tr`)(191,`td`)(192,`code`),cN(193,`--base shadow`),ag()(),Tl(194,`td`),cN(195,`Cor da sombra do header`),ag(),Tl(196,`td`)(197,`code`),cN(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),ag()()(),Tl(199,`tr`)(200,`td`)(201,`code`),cN(202,`--stroke-color`),ag()(),Tl(203,`td`),cN(204,`Cor da borda inferior do header`),ag(),Tl(205,`td`)(206,`code`),cN(207,`var(--color-brand-01-base)`),ag()()(),Tl(208,`tr`)(209,`td`)(210,`strong`),cN(211,`Sub-menu`),ag()(),Gl(212,`td`)(213,`td`),ag(),Tl(214,`tr`)(215,`td`)(216,`code`),cN(217,`--border-radius`),ag()(),Tl(218,`td`),cN(219,`Valor do radius dos itens do sub-menu`),ag(),Tl(220,`td`)(221,`code`),cN(222,`var(--border-radius-md);`),ag()()(),Tl(223,`tr`)(224,`td`)(225,`code`),cN(226,`--text-color-submenu`),ag()(),Tl(227,`td`),cN(228,`Cor do texto dos itens do sub-menu`),ag(),Tl(229,`td`)(230,`code`),cN(231,`var(--color-brand-01-base)`),ag()()(),Tl(232,`tr`)(233,`td`)(234,`code`),cN(235,`--icon-color`),ag()(),Tl(236,`td`),cN(237,`Cor do ícone do sub-menu com itens`),ag(),Tl(238,`td`)(239,`code`),cN(240,`var(--color-brand-01-base)`),ag()()(),Tl(241,`tr`)(242,`td`)(243,`code`),cN(244,`--border-color`),ag()(),Tl(245,`td`),cN(246,`Cor da borda`),ag(),Tl(247,`td`)(248,`code`),cN(249,`var(--color-transparent)`),ag()()(),Tl(250,`tr`)(251,`td`)(252,`code`),cN(253,`--shadow`),ag()(),Tl(254,`td`),cN(255,`Contém o valor da sombra do elemento`),ag(),Tl(256,`td`)(257,`code`),cN(258,`var(--shadow-none)`),ag()()(),Tl(259,`tr`)(260,`td`)(261,`code`),cN(262,`--font-family-submenu`),ag()(),Tl(263,`td`),cN(264,`Fonte do texto dos itens de sub-menu`),ag(),Tl(265,`td`)(266,`code`),cN(267,`var(--font-family-theme)`),ag()()(),Tl(268,`tr`)(269,`td`)(270,`code`),cN(271,`--font-weight-submenu`),ag()(),Tl(272,`td`),cN(273,`Peso da fonte do texto dos itens de sub-menu`),ag(),Tl(274,`td`)(275,`code`),cN(276,`var(--font-weight-bold)`),ag()()(),Tl(277,`tr`)(278,`td`)(279,`strong`),cN(280,`Sub-menu - Hover`),ag()(),Gl(281,`td`)(282,`td`),ag(),Tl(283,`tr`)(284,`td`)(285,`code`),cN(286,`--background-hover`),ag()(),Tl(287,`td`),cN(288,`Cor de background dos itens do sub-menu no estado hover`),ag(),Tl(289,`td`)(290,`code`),cN(291,`var(--color-brand-01-lighter)`),ag()()(),Tl(292,`tr`)(293,`td`)(294,`code`),cN(295,`--icon-color-hover`),ag()(),Tl(296,`td`),cN(297,`Cor do ícone dos itens de sub-menu no estado hover`),ag(),Tl(298,`td`)(299,`code`),cN(300,`var(--color-brand-01-darkest)`),ag()()(),Tl(301,`tr`)(302,`td`)(303,`code`),cN(304,`--text-color-hover`),ag()(),Tl(305,`td`),cN(306,`Cor do texto dos itens de sub-menu no estado hover`),ag(),Tl(307,`td`)(308,`code`),cN(309,`var(--color-brand-01-darkest)`),ag()()(),Tl(310,`tr`)(311,`td`)(312,`strong`),cN(313,`Sub-menu - pressed`),ag()(),Gl(314,`td`)(315,`td`),ag(),Tl(316,`tr`)(317,`td`)(318,`code`),cN(319,`--background-pressed`),ag()(),Tl(320,`td`),cN(321,`Cor de background dos itens do sub-menu no estado pressed`),ag(),Tl(322,`td`)(323,`code`),cN(324,`var(--color-brand-01-light)`),ag()()(),Tl(325,`tr`)(326,`td`)(327,`code`),cN(328,`--icon-color-pressed`),ag()(),Tl(329,`td`),cN(330,`Cor do ícone dos itens de sub-menu no estado pressed`),ag(),Tl(331,`td`)(332,`code`),cN(333,`var(--color-brand-01-darkest)`),ag()()(),Tl(334,`tr`)(335,`td`)(336,`code`),cN(337,`--text-color-pressed`),ag()(),Tl(338,`td`),cN(339,`Cor do texto dos itens de sub-menu no estado pressed`),ag(),Tl(340,`td`)(341,`code`),cN(342,`var(--color-brand-01-darkest)`),ag()()(),Tl(343,`tr`)(344,`td`)(345,`strong`),cN(346,`Sub-menu - selected`),ag()(),Gl(347,`td`)(348,`td`),ag(),Tl(349,`tr`)(350,`td`)(351,`code`),cN(352,`--background-selected`),ag()(),Tl(353,`td`),cN(354,`Cor de background dos itens do sub-menu no estado selected`),ag(),Tl(355,`td`)(356,`code`),cN(357,`var(--color-brand-01-light)`),ag()()(),Tl(358,`tr`)(359,`td`)(360,`code`),cN(361,`--icon-color-selected`),ag()(),Tl(362,`td`),cN(363,`Cor do ícone dos itens de sub-menu no estado selected`),ag(),Tl(364,`td`)(365,`code`),cN(366,`var(--color-neutral-dark-95)`),ag()()(),Tl(367,`tr`)(368,`td`)(369,`code`),cN(370,`--text-color-selected`),ag()(),Tl(371,`td`),cN(372,`Cor do texto dos itens de sub-menu no estado selected`),ag(),Tl(373,`td`)(374,`code`),cN(375,`var(--color-brand-01-darkest)`),ag()()(),Tl(376,`tr`)(377,`td`)(378,`strong`),cN(379,`Customer`),ag()(),Gl(380,`td`)(381,`td`),ag(),Tl(382,`tr`)(383,`td`)(384,`code`),cN(385,`--background-color-customer`),ag()(),Tl(386,`td`),cN(387,`Cor do background da seção customer`),ag(),Tl(388,`td`)(389,`code`),cN(390,`var(--color-neutral-light-00)`),ag()()(),Tl(391,`tr`)(392,`td`)(393,`code`),cN(394,`--border-color`),ag()(),Tl(395,`td`),cN(396,`Cor da borda da seção customer`),ag(),Tl(397,`td`)(398,`code`),cN(399,`var(--color-neutral-light-10)`),ag()()(),Tl(400,`tr`)(401,`td`)(402,`code`),cN(403,`--border-style`),ag()(),Tl(404,`td`),cN(405,`Estilo da borda da seção customer`),ag(),Tl(406,`td`)(407,`code`),cN(408,`solid`),ag()()(),Tl(409,`tr`)(410,`td`)(411,`code`),cN(412,`--border-width`),ag()(),Tl(413,`td`),cN(414,`Largura da borda da seção customer`),ag(),Tl(415,`td`)(416,`code`),cN(417,`var(--border-width-sm)`),ag()()(),Tl(418,`tr`)(419,`td`)(420,`strong`),cN(421,`Customer - hover`),ag()(),Gl(422,`td`)(423,`td`),ag(),Tl(424,`tr`)(425,`td`)(426,`code`),cN(427,`--background-color-customer-hover`),ag()(),Tl(428,`td`),cN(429,`Cor do background da seção customer no estado hover`),ag(),Tl(430,`td`)(431,`code`),cN(432,`var(--color-brand-01-lighter)`),ag()()(),Tl(433,`tr`)(434,`td`)(435,`strong`),cN(436,`Customer - pressed`),ag()(),Gl(437,`td`)(438,`td`),ag(),Tl(439,`tr`)(440,`td`)(441,`code`),cN(442,`--background-color-customer-pressed`),ag()(),Tl(443,`td`),cN(444,`Cor do background da seção customer no estado pressed`),ag(),Tl(445,`td`)(446,`code`),cN(447,`var(--color-brand-01-light)`),ag()()(),Tl(448,`tr`)(449,`td`)(450,`code`),cN(451,`--border-width-pressed`),ag()(),Tl(452,`td`),cN(453,`Largura da borda da seção customer no estado pressed`),ag(),Tl(454,`td`)(455,`code`),cN(456,`var(--border-width-md)`),ag()()()()()(),Tl(457,`div`,7)(458,`h4`,8),cN(459,`Seletor`),ag(),Tl(460,`pre`,9),cN(461,`<po-header
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
`),ag()(),Tl(462,`h4`,10),cN(463,`Propriedades`),ag(),Tl(464,`table`,11)(465,`tr`,12)(466,`th`,13),cN(467,`Nome`),ag(),Tl(468,`th`,13),cN(469,`Tipo`),ag(),Tl(470,`th`,13),cN(471,`Padrão`),ag(),Tl(472,`th`,13),cN(473,`Descrição`),ag()(),Tl(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),cN(478,` p-actions-tools`),Gl(479,`br`),ag()()(),Tl(480,`td`,18)(481,`code`,19),cN(482,`Array<PoHeaderActionTool>`),ag()(),Tl(483,`td`,20),cN(484,`-`),ag(),Tl(485,`td`,21)(486,`em`)(487,`strong`),cN(488,`(opcional)`),ag()(),Tl(489,`p`),cN(490,`Propriedade para configurar a seção de tools do `),Tl(491,`code`),cN(492,`po-header`),ag()(),Tl(493,`blockquote`)(494,`p`),cN(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),ag()()()(),Tl(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),cN(500,` p-amount-more`),Gl(501,`br`),ag()()(),Tl(502,`td`,18)(503,`code`,22),cN(504,`number`),ag()(),Tl(505,`td`,20),cN(506,`-`),ag(),Tl(507,`td`,21)(508,`em`)(509,`strong`),cN(510,`(opcional)`),ag()(),Tl(511,`p`),cN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),ag(),Tl(513,`blockquote`)(514,`p`),cN(515,`Ao utilizar essa propriedade o `),Tl(516,`code`),cN(517,`po-header`),ag(),cN(518,` não irá realizar o calculo automatíco de itens.`),ag()()()(),Tl(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),cN(523,` p-brand`),Gl(524,`br`),ag()()(),Tl(525,`td`,18)(526,`code`,23),cN(527,`PoHeaderBrand `),ag(),Tl(528,`code`,24),cN(529,` string`),ag()(),Tl(530,`td`,20),cN(531,`-`),ag(),Tl(532,`td`,21)(533,`em`)(534,`strong`),cN(535,`(opcional)`),ag()(),Tl(536,`p`),cN(537,`Propriedade para configurar a seção de brand do `),Tl(538,`code`),cN(539,`po-header`),ag()(),Tl(540,`p`),cN(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),ag()()(),Tl(542,`tr`,14)(543,`td`,15)(544,`div`,25)(545,`span`,26),cN(546,` (p-colapsed-menu)`),Gl(547,`br`),ag()()(),Tl(548,`td`,18)(549,`code`,27),cN(550,`EventEmitter`),ag()(),Tl(551,`td`,20),cN(552,`-`),ag(),Tl(553,`td`,21)(554,`em`)(555,`strong`),cN(556,`(opcional)`),ag()(),Tl(557,`p`),cN(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),ag()()(),Tl(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),cN(563,` p-filter-menu`),Gl(564,`br`),ag()()(),Tl(565,`td`,18)(566,`code`,28),cN(567,`boolean`),ag()(),Tl(568,`td`,20),cN(569,`-`),ag(),Tl(570,`td`,21)(571,`em`)(572,`strong`),cN(573,`(opcional)`),ag()(),Tl(574,`p`),cN(575,`Habilita campo para filtrar itens no menu`),ag()()(),Tl(576,`tr`,14)(577,`td`,15)(578,`div`,16)(579,`span`,17),cN(580,` p-header-template`),Gl(581,`br`),ag()()(),Tl(582,`td`,18)(583,`code`,29),cN(584,`TemplateRef<any>`),ag()(),Tl(585,`td`,20),cN(586,`-`),ag(),Tl(587,`td`,21)(588,`em`)(589,`strong`),cN(590,`(opcional)`),ag()(),Tl(591,`p`),cN(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Tl(593,`code`),cN(594,`p-menu-items`),ag()()()(),Tl(595,`tr`,14)(596,`td`,15)(597,`div`,16)(598,`span`,17),cN(599,` p-header-user`),Gl(600,`br`),ag()()(),Tl(601,`td`,18)(602,`code`,30),cN(603,`PoHeaderUser`),ag()(),Tl(604,`td`,20),cN(605,`-`),ag(),Tl(606,`td`,21)(607,`em`)(608,`strong`),cN(609,`(opcional)`),ag()(),Tl(610,`p`),cN(611,`Propriedade para configurar a seção de headerUser do `),Tl(612,`code`),cN(613,`po-header`),ag()()()(),Tl(614,`tr`,14)(615,`td`,15)(616,`div`,16)(617,`span`,17),cN(618,` p-hide-button-menu`),Gl(619,`br`),ag()()(),Tl(620,`td`,18)(621,`code`,28),cN(622,`boolean`),ag()(),Tl(623,`td`,20),cN(624,`-`),ag(),Tl(625,`td`,21)(626,`em`)(627,`strong`),cN(628,`(opcional)`),ag()(),Tl(629,`p`),cN(630,`Esconde o botão de menu colapsado.`),ag()()(),Tl(631,`tr`,14)(632,`td`,15)(633,`div`,16)(634,`span`,17),cN(635,` p-literals`),Gl(636,`br`),ag()()(),Tl(637,`td`,18)(638,`code`,31),cN(639,`PoHeaderLiterals`),ag()(),Tl(640,`td`,20),cN(641,`-`),ag(),Tl(642,`td`,21)(643,`em`)(644,`strong`),cN(645,`(opcional)`),ag()(),Tl(646,`p`),cN(647,`Objeto com a literal usada na propriedade `),Tl(648,`code`),cN(649,`p-literals`),ag(),cN(650,`.`),ag(),Tl(651,`p`),cN(652,`Para customizar a literal, basta declarar um objeto do tipo `),Tl(653,`code`),cN(654,`PoHeaderLiterals`),ag(),cN(655,` conforme exemplo abaixo:`),ag(),Tl(656,`pre`)(657,`code`),cN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),ag()(),Tl(659,`p`),cN(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(661,`pre`)(662,`code`),cN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),ag()(),Tl(664,`blockquote`)(665,`p`),cN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(667,`a`,32)(668,`code`),cN(669,`PoI18nService`),ag()(),cN(670,` ou do browser.`),ag()()()(),Tl(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),cN(675,` p-menus`),Gl(676,`br`),ag()()(),Tl(677,`td`,18)(678,`code`,33),cN(679,`Array<PoMenuItem>`),ag()(),Tl(680,`td`,20),cN(681,`-`),ag(),Tl(682,`td`,21)(683,`em`)(684,`strong`),cN(685,`(opcional)`),ag()(),Tl(686,`p`),cN(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ag(),Tl(688,`blockquote`)(689,`p`),cN(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),ag()()()(),Tl(691,`tr`,14)(692,`td`,15)(693,`div`,16)(694,`span`,17),cN(695,` p-menu-items`),Gl(696,`br`),ag()()(),Tl(697,`td`,18)(698,`code`,34),cN(699,`Array<PoHeaderActions>`),ag()(),Tl(700,`td`,20),cN(701,`-`),ag(),Tl(702,`td`,21)(703,`em`)(704,`strong`),cN(705,`(opcional)`),ag()(),Tl(706,`p`),cN(707,`Propriedade para configurar a seção de menu do `),Tl(708,`code`),cN(709,`po-header`),ag(),cN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),ag(),Tl(711,`blockquote`)(712,`p`),cN(713,`Os itens irão ficar visíveis em uma tela de até 960px`),ag()()()(),Tl(714,`tr`,14)(715,`td`,15)(716,`div`,16)(717,`span`,17),cN(718,` p-size`),Gl(719,`br`),ag()()(),Tl(720,`td`,18)(721,`code`,24),cN(722,`string`),ag()(),Tl(723,`td`,20)(724,`p`)(725,`code`),cN(726,`medium`),ag()()(),Tl(727,`td`,21)(728,`em`)(729,`strong`),cN(730,`(opcional)`),ag()(),Tl(731,`p`),cN(732,`Define o tamanho do componente:`),ag(),Tl(733,`ul`)(734,`li`)(735,`code`),cN(736,`small`),ag(),cN(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),ag(),Tl(738,`li`)(739,`code`),cN(740,`medium`),ag(),cN(741,`: altura de 56px.`),ag()(),Tl(742,`blockquote`)(743,`p`),cN(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(745,`code`),cN(746,`medium`),ag(),cN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(748,`a`,35),cN(749,`po-theme`),ag(),cN(750,`.`),ag()()()()(),Tl(751,`h3`),cN(752,`Interfaces`),ag(),Tl(753,`h4`,36)(754,`code`,5),cN(755,`PoHeaderActionTool`),ag()(),Tl(756,`div`,2)(757,`p`)(758,`em`),cN(759,`Interface`),ag(),cN(760,` que define a seção de Actions do header.`),ag(),Tl(761,`p`),cN(762,`Indicação de uso:`),ag(),Tl(763,`ul`)(764,`li`),cN(765,`Primeira ação destinada à app launcher.`),ag(),Tl(766,`li`),cN(767,`Segunda ação (terceiro ícone) destinada à notificações.`),ag(),Tl(768,`li`),cN(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),ag()(),Tl(770,`blockquote`)(771,`p`),cN(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),ag()()(),Tl(773,`h4`,10),cN(774,`Propriedades`),ag(),Tl(775,`table`,11)(776,`tr`,12)(777,`th`,13),cN(778,`Nome`),ag(),Tl(779,`th`,13),cN(780,`Tipo`),ag(),Tl(781,`th`,13),cN(782,`Descrição`),ag()(),Tl(783,`tr`,14)(784,`td`,15)(785,`div`,16)(786,`span`,17),cN(787,` action`),Gl(788,`br`),ag()()(),Tl(789,`td`,18)(790,`code`,37),cN(791,`Function`),ag()(),Tl(792,`td`,21)(793,`em`)(794,`strong`),cN(795,`(opcional)`),ag()(),Tl(796,`p`),cN(797,`Evento emitido ao clicar em uma ação`),ag(),Tl(798,`p`),cN(799,`Exemplo: `),Tl(800,`code`),cN(801,`action: this.myFunction.bind(this)`),ag()()()(),Tl(802,`tr`,14)(803,`td`,15)(804,`div`,16)(805,`span`,17),cN(806,` badge`),Gl(807,`br`),ag()()(),Tl(808,`td`,18)(809,`code`,22),cN(810,`number`),ag()(),Tl(811,`td`,21)(812,`em`)(813,`strong`),cN(814,`(opcional)`),ag()(),Tl(815,`p`),cN(816,`Valor númerico com a repsentação de notificações`),ag()()(),Tl(817,`tr`,14)(818,`td`,15)(819,`div`,16)(820,`span`,17),cN(821,` icon`),Gl(822,`br`),ag()()(),Tl(823,`td`,18)(824,`code`,24),cN(825,`string`),ag()(),Tl(826,`td`,21)(827,`em`)(828,`strong`),cN(829,`(opcional)`),ag()(),Tl(830,`p`),cN(831,`Ícone do botão de ação`),ag()()(),Tl(832,`tr`,14)(833,`td`,15)(834,`div`,16)(835,`span`,17),cN(836,` items`),Gl(837,`br`),ag()()(),Tl(838,`td`,18)(839,`code`,38),cN(840,`Array<PoHeaderActionToolItem>`),ag()(),Tl(841,`td`,21)(842,`em`)(843,`strong`),cN(844,`(opcional)`),ag()(),Tl(845,`p`),cN(846,`Itens de ações`),ag()()(),Tl(847,`tr`,14)(848,`td`,15)(849,`div`,16)(850,`span`,17),cN(851,` label`),Gl(852,`br`),ag()()(),Tl(853,`td`,18)(854,`code`,24),cN(855,`string`),ag()(),Tl(856,`td`,21)(857,`em`)(858,`strong`),cN(859,`(opcional)`),ag()(),Tl(860,`p`),cN(861,`Título da ação`),ag()()(),Tl(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),cN(866,` link`),Gl(867,`br`),ag()()(),Tl(868,`td`,18)(869,`code`,24),cN(870,`string`),ag()(),Tl(871,`td`,21)(872,`em`)(873,`strong`),cN(874,`(opcional)`),ag()(),Tl(875,`p`),cN(876,`link utilizado no redirecionamento das páginas.`),ag()()(),Tl(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),cN(881,` onClose`),Gl(882,`br`),ag()()(),Tl(883,`td`,18)(884,`code`,39),cN(885,`(label?: string) => void`),ag()(),Tl(886,`td`,21)(887,`em`)(888,`strong`),cN(889,`(opcional)`),ag()(),Tl(890,`p`),cN(891,`Função executada quando o popup ou popover da ação é fechado.`),ag(),Tl(892,`p`),cN(893,`Esse evento é disparado toda vez que o popup (quando há `),Tl(894,`code`),cN(895,`items`),ag(),cN(896,`) ou o popover (quando há `),Tl(897,`code`),cN(898,`popover`),ag(),cN(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),ag(),Tl(900,`p`),cN(901,`O callback recebe como parâmetro o `),Tl(902,`code`),cN(903,`label`),ag(),cN(904,` da ação que disparou o evento.`),ag(),Tl(905,`p`),cN(906,`Exemplo: `),Tl(907,`code`),cN(908,`onClose: (label) => console.log('Fechado:', label)`),ag()()()(),Tl(909,`tr`,14)(910,`td`,15)(911,`div`,16)(912,`span`,17),cN(913,` onOpen`),Gl(914,`br`),ag()()(),Tl(915,`td`,18)(916,`code`,39),cN(917,`(label?: string) => void`),ag()(),Tl(918,`td`,21)(919,`em`)(920,`strong`),cN(921,`(opcional)`),ag()(),Tl(922,`p`),cN(923,`Função executada quando o popup ou popover da ação é aberto.`),ag(),Tl(924,`p`),cN(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Tl(926,`code`),cN(927,`items`),ag(),cN(928,`)
ou o popover (quando h\xE1 `),Tl(929,`code`),cN(930,`popover`),ag(),cN(931,`) é exibido.`),ag(),Tl(932,`p`),cN(933,`O callback recebe como parâmetro o `),Tl(934,`code`),cN(935,`label`),ag(),cN(936,` da ação que disparou o evento.`),ag(),Tl(937,`p`),cN(938,`Exemplo: `),Tl(939,`code`),cN(940,`onOpen: (label) => console.log('Aberto:', label)`),ag()()()(),Tl(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),cN(945,` popover`),Gl(946,`br`),ag()()(),Tl(947,`td`,18)(948,`code`,40),cN(949,`PoHeaderActionPopoverAction`),ag()(),Tl(950,`td`,21)(951,`em`)(952,`strong`),cN(953,`(opcional)`),ag()(),Tl(954,`p`),cN(955,`Template que será utilizado na ação`),ag()()(),Tl(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),cN(960,` tooltip`),Gl(961,`br`),ag()()(),Tl(962,`td`,18)(963,`code`,24),cN(964,`string`),ag()(),Tl(965,`td`,21)(966,`em`)(967,`strong`),cN(968,`(opcional)`),ag()(),Tl(969,`p`),cN(970,`Texto que será apresentado na tooltip`),ag()()()(),Tl(971,`h4`,36)(972,`code`,5),cN(973,`PoHeaderActionPopoverAction`),ag()(),Tl(974,`div`,2)(975,`p`)(976,`em`),cN(977,`Interface`),ag(),cN(978,` que define um template para uma ação.`),ag()(),Tl(979,`h4`,10),cN(980,`Propriedades`),ag(),Tl(981,`table`,11)(982,`tr`,12)(983,`th`,13),cN(984,`Nome`),ag(),Tl(985,`th`,13),cN(986,`Tipo`),ag(),Tl(987,`th`,13),cN(988,`Descrição`),ag()(),Tl(989,`tr`,14)(990,`td`,15)(991,`div`,16)(992,`span`,17),cN(993,` content`),Gl(994,`br`),ag()()(),Tl(995,`td`,18)(996,`code`,29),cN(997,`TemplateRef<any>`),ag()(),Tl(998,`td`,21)(999,`p`),cN(1e3,`Template que será renderizado dentro do popover.`),ag()()(),Tl(1001,`tr`,14)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),cN(1005,` width`),Gl(1006,`br`),ag()()(),Tl(1007,`td`,18)(1008,`code`,22),cN(1009,`number`),ag()(),Tl(1010,`td`,21)(1011,`em`)(1012,`strong`),cN(1013,`(opcional)`),ag()(),Tl(1014,`p`),cN(1015,`Largura, em pixels, do template renderizado dentro do popover.`),ag(),Tl(1016,`p`),cN(1017,`Valores permitidos: de 240 a 800.`),ag()()()(),Tl(1018,`h4`,36)(1019,`code`,5),cN(1020,`PoHeaderActionToolItem`),ag()(),Tl(1021,`div`,2)(1022,`p`)(1023,`em`),cN(1024,`Interface`),ag(),cN(1025,` que define uma lista de ações.`),ag()(),Tl(1026,`h4`,10),cN(1027,`Propriedades`),ag(),Tl(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),cN(1031,`Nome`),ag(),Tl(1032,`th`,13),cN(1033,`Tipo`),ag(),Tl(1034,`th`,13),cN(1035,`Descrição`),ag()(),Tl(1036,`tr`,14)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),cN(1040,` action`),Gl(1041,`br`),ag()()(),Tl(1042,`td`,18)(1043,`code`,37),cN(1044,`Function`),ag()(),Tl(1045,`td`,21)(1046,`p`),cN(1047,`Evento emitido ao clicar em uma ação`),ag(),Tl(1048,`p`),cN(1049,`Exemplo: `),Tl(1050,`code`),cN(1051,`action: this.myFunction.bind(this)`),ag()()()(),Tl(1052,`tr`,14)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),cN(1056,` label`),Gl(1057,`br`),ag()()(),Tl(1058,`td`,18)(1059,`code`,24),cN(1060,`string`),ag()(),Tl(1061,`td`,21)(1062,`p`),cN(1063,`Label da ação`),ag()()()(),Tl(1064,`h4`,36)(1065,`code`,5),cN(1066,`PoHeaderActions`),ag()(),Tl(1067,`div`,2)(1068,`p`)(1069,`em`),cN(1070,`Interface`),ag(),cN(1071,` que define uma lista de ações no sub-menu.`),ag()(),Tl(1072,`h4`,10),cN(1073,`Propriedades`),ag(),Tl(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),cN(1077,`Nome`),ag(),Tl(1078,`th`,13),cN(1079,`Tipo`),ag(),Tl(1080,`th`,13),cN(1081,`Descrição`),ag()(),Tl(1082,`tr`,14)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),cN(1086,` action`),Gl(1087,`br`),ag()()(),Tl(1088,`td`,18)(1089,`code`,37),cN(1090,`Function`),ag()(),Tl(1091,`td`,21)(1092,`em`)(1093,`strong`),cN(1094,`(opcional)`),ag()(),Tl(1095,`p`),cN(1096,`Evento da ação`),ag(),Tl(1097,`p`),cN(1098,` Exemplo: `),Tl(1099,`code`),cN(1100,`action: this.myFunction.bind(this)`),ag()()()(),Tl(1101,`tr`,14)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),cN(1105,` id`),Gl(1106,`br`),ag()()(),Tl(1107,`td`,18)(1108,`code`,24),cN(1109,`string`),ag()(),Tl(1110,`td`,21)(1111,`em`)(1112,`strong`),cN(1113,`(opcional)`),ag()(),Tl(1114,`p`),cN(1115,`Identificador da ação`),ag()()(),Tl(1116,`tr`,14)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),cN(1120,` label`),Gl(1121,`br`),ag()()(),Tl(1122,`td`,18)(1123,`code`,24),cN(1124,`string`),ag()(),Tl(1125,`td`,21)(1126,`p`),cN(1127,`Label da ação`),ag()()(),Tl(1128,`tr`,14)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),cN(1132,` link`),Gl(1133,`br`),ag()()(),Tl(1134,`td`,18)(1135,`code`,24),cN(1136,`string`),ag()(),Tl(1137,`td`,21)(1138,`em`)(1139,`strong`),cN(1140,`(opcional)`),ag()(),Tl(1141,`p`),cN(1142,`link utilizado no redirecionamento das páginas.`),ag()()()(),Tl(1143,`h4`,36)(1144,`code`,5),cN(1145,`PoHeaderBrand`),ag()(),Tl(1146,`div`,2)(1147,`p`)(1148,`em`),cN(1149,`Interface`),ag(),cN(1150,` que define a seção de brand.`),ag()(),Tl(1151,`h4`,10),cN(1152,`Propriedades`),ag(),Tl(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),cN(1156,`Nome`),ag(),Tl(1157,`th`,13),cN(1158,`Tipo`),ag(),Tl(1159,`th`,13),cN(1160,`Descrição`),ag()(),Tl(1161,`tr`,14)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),cN(1165,` action`),Gl(1166,`br`),ag()()(),Tl(1167,`td`,18)(1168,`code`,37),cN(1169,`Function`),ag()(),Tl(1170,`td`,21)(1171,`em`)(1172,`strong`),cN(1173,`(opcional)`),ag()(),Tl(1174,`p`),cN(1175,`Evento da ação`),ag(),Tl(1176,`p`),cN(1177,` Exemplo: `),Tl(1178,`code`),cN(1179,`action: this.myFunction.bind(this)`),ag()()()(),Tl(1180,`tr`,14)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),cN(1184,` link`),Gl(1185,`br`),ag()()(),Tl(1186,`td`,18)(1187,`code`,24),cN(1188,`string`),ag()(),Tl(1189,`td`,21)(1190,`em`)(1191,`strong`),cN(1192,`(opcional)`),ag()(),Tl(1193,`p`),cN(1194,`link utilizado no redirecionamento das páginas.`),ag()()(),Tl(1195,`tr`,14)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),cN(1199,` logo`),Gl(1200,`br`),ag()()(),Tl(1201,`td`,18)(1202,`code`,24),cN(1203,`string`),ag()(),Tl(1204,`td`,21)(1205,`em`)(1206,`strong`),cN(1207,`(opcional)`),ag()(),Tl(1208,`p`),cN(1209,`Imagem da marca`),ag()()(),Tl(1210,`tr`,14)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),cN(1214,` smallLogo`),Gl(1215,`br`),ag()()(),Tl(1216,`td`,18)(1217,`code`,24),cN(1218,`string`),ag()(),Tl(1219,`td`,21)(1220,`em`)(1221,`strong`),cN(1222,`(opcional)`),ag()(),Tl(1223,`p`),cN(1224,`Imagem da marca quando a tela é menor que 960px`),ag()()(),Tl(1225,`tr`,14)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),cN(1229,` title`),Gl(1230,`br`),ag()()(),Tl(1231,`td`,18)(1232,`code`,24),cN(1233,`string`),ag()(),Tl(1234,`td`,21)(1235,`em`)(1236,`strong`),cN(1237,`(opcional)`),ag()(),Tl(1238,`p`),cN(1239,`Título da marca`),ag()()()(),Tl(1240,`h4`,36)(1241,`code`,5),cN(1242,`PoHeaderLiterals`),ag()(),Tl(1243,`div`,2)(1244,`p`),cN(1245,`Interface para definição das literais usadas no `),Tl(1246,`code`),cN(1247,`po-header`),ag(),cN(1248,`.`),ag()(),Tl(1249,`h4`,10),cN(1250,`Propriedades`),ag(),Tl(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),cN(1254,`Nome`),ag(),Tl(1255,`th`,13),cN(1256,`Tipo`),ag(),Tl(1257,`th`,13),cN(1258,`Descrição`),ag()(),Tl(1259,`tr`,14)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),cN(1263,` headerLinks`),Gl(1264,`br`),ag()()(),Tl(1265,`td`,18)(1266,`code`,24),cN(1267,`string`),ag()(),Tl(1268,`td`,21)(1269,`em`)(1270,`strong`),cN(1271,`(opcional)`),ag()(),Tl(1272,`p`),cN(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),ag()()(),Tl(1274,`tr`,14)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),cN(1278,` notifications`),Gl(1279,`br`),ag()()(),Tl(1280,`td`,18)(1281,`code`,24),cN(1282,`string`),ag()(),Tl(1283,`td`,21)(1284,`em`)(1285,`strong`),cN(1286,`(opcional)`),ag()(),Tl(1287,`p`),cN(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Tl(1289,`code`),cN(1290,`badge`),ag()()()()(),Tl(1291,`h4`,36)(1292,`code`,5),cN(1293,`PoHeaderUser`),ag()(),Tl(1294,`div`,2)(1295,`p`)(1296,`em`),cN(1297,`Interface`),ag(),cN(1298,` que define a seção de Customer do header.`),ag()(),Tl(1299,`h4`,10),cN(1300,`Propriedades`),ag(),Tl(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),cN(1304,`Nome`),ag(),Tl(1305,`th`,13),cN(1306,`Tipo`),ag(),Tl(1307,`th`,13),cN(1308,`Descrição`),ag()(),Tl(1309,`tr`,14)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),cN(1313,` action`),Gl(1314,`br`),ag()()(),Tl(1315,`td`,18)(1316,`code`,37),cN(1317,`Function`),ag()(),Tl(1318,`td`,21)(1319,`em`)(1320,`strong`),cN(1321,`(opcional)`),ag()(),Tl(1322,`p`),cN(1323,`Evento emitido ao clicar na seção`),ag(),Tl(1324,`p`),cN(1325,`Exemplo: `),Tl(1326,`code`),cN(1327,`action: this.myFunction.bind(this)`),ag()()()(),Tl(1328,`tr`,14)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),cN(1332,` avatar`),Gl(1333,`br`),ag()()(),Tl(1334,`td`,18)(1335,`code`,24),cN(1336,`string`),ag()(),Tl(1337,`td`,21)(1338,`p`),cN(1339,`Logo representando o perfil`),ag()()(),Tl(1340,`tr`,14)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),cN(1344,` customerBrand`),Gl(1345,`br`),ag()()(),Tl(1346,`td`,18)(1347,`code`,24),cN(1348,`string`),ag()(),Tl(1349,`td`,21)(1350,`p`),cN(1351,`Imagem da marca`),ag()()(),Tl(1352,`tr`,14)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),cN(1356,` items`),Gl(1357,`br`),ag()()(),Tl(1358,`td`,18)(1359,`code`,38),cN(1360,`Array<PoHeaderActionToolItem>`),ag()(),Tl(1361,`td`,21)(1362,`em`)(1363,`strong`),cN(1364,`(opcional)`),ag()(),Tl(1365,`p`),cN(1366,`Itens de ações`),ag(),Tl(1367,`blockquote`)(1368,`p`),cN(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),ag()()()(),Tl(1370,`tr`,14)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),cN(1374,` onClose`),Gl(1375,`br`),ag()()(),Tl(1376,`td`,18)(1377,`code`,37),cN(1378,`Function`),ag()(),Tl(1379,`td`,21)(1380,`em`)(1381,`strong`),cN(1382,`(opcional)`),ag()(),Tl(1383,`p`),cN(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),ag(),Tl(1385,`p`),cN(1386,`Esse evento é disparado toda vez que o popup (quando há `),Tl(1387,`code`),cN(1388,`items`),ag(),cN(1389,`) ou o popover (quando há `),Tl(1390,`code`),cN(1391,`popover`),ag(),cN(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),ag(),Tl(1393,`p`),cN(1394,`Exemplo: `),Tl(1395,`code`),cN(1396,`onClose: this.onCloseNotifications.bind(this)`),ag()()()(),Tl(1397,`tr`,14)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),cN(1401,` onOpen`),Gl(1402,`br`),ag()()(),Tl(1403,`td`,18)(1404,`code`,37),cN(1405,`Function`),ag()(),Tl(1406,`td`,21)(1407,`em`)(1408,`strong`),cN(1409,`(opcional)`),ag()(),Tl(1410,`p`),cN(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),ag(),Tl(1412,`p`),cN(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Tl(1414,`code`),cN(1415,`items`),ag(),cN(1416,`) ou o popover (quando há `),Tl(1417,`code`),cN(1418,`popover`),ag(),cN(1419,`) é exibido.`),ag(),Tl(1420,`p`),cN(1421,`Exemplo: `),Tl(1422,`code`),cN(1423,`onOpen: this.onOpenNotifications.bind(this)`),ag()()()(),Tl(1424,`tr`,14)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),cN(1428,` popover`),Gl(1429,`br`),ag()()(),Tl(1430,`td`,18)(1431,`code`,40),cN(1432,`PoHeaderActionPopoverAction`),ag()(),Tl(1433,`td`,21)(1434,`em`)(1435,`strong`),cN(1436,`(opcional)`),ag()(),Tl(1437,`p`),cN(1438,`Template que será utilizado na ação`),ag()()(),Tl(1439,`tr`,14)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),cN(1443,` status`),Gl(1444,`br`),ag()()(),Tl(1445,`td`,18)(1446,`code`,41),cN(1447,`'positive' `),ag(),Tl(1448,`code`,42),cN(1449,` 'negative' `),ag(),Tl(1450,`code`,43),cN(1451,` 'warning' `),ag(),Tl(1452,`code`,44),cN(1453,` 'disabled'`),ag()(),Tl(1454,`td`,21)(1455,`em`)(1456,`strong`),cN(1457,`(opcional)`),ag()(),Tl(1458,`p`),cN(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),ag(),Tl(1460,`ul`)(1461,`li`)(1462,`code`),cN(1463,`positive`),ag(),cN(1464,`: Define a cor do `),Tl(1465,`code`),cN(1466,`status`),ag(),cN(1467,` com a cor de feedback positivo.`),ag(),Tl(1468,`li`)(1469,`code`),cN(1470,`negative`),ag(),cN(1471,`: Define a cor do `),Tl(1472,`code`),cN(1473,`status`),ag(),cN(1474,` com a cor de feedback negative.`),ag(),Tl(1475,`li`)(1476,`code`),cN(1477,`warning`),ag(),cN(1478,`: Define a cor do `),Tl(1479,`code`),cN(1480,`status`),ag(),cN(1481,` com a cor de feedback warning.`),ag(),Tl(1482,`li`)(1483,`code`),cN(1484,`disabled`),ag(),cN(1485,`: Define a cor do `),Tl(1486,`code`),cN(1487,`status`),ag(),cN(1488,` com a cor de feedback disabled`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-header-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-header-basic-view`)(6,`sample-po-header-labs-view`)(7,`sample-po-header-apps-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,be,xe,fe,Ce],encapsulation:2,changeDetection:1})}return a})()}];var Ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[bL.forChild(Qe),bL]})}return a})();var ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,Ae]})}return a})();export{ft as DocPoHeaderModule};