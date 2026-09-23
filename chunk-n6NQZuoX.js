import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as ow,$r as Vx,Br as TN,Cr as Nx,Et as V8e,Gr as Ue,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Wn as BN,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,da as uo,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,nt as Ma,oa as ql,q as J4,qr as Up,r as Ga,ri as Xn,rn as j8e,sr as Jy,ua as ue,ui as Zl,va as wY,vr as Mw,vt as SCe,wa as zx,xa as xx,ya as xN}from"./main-NT5YGKBQ.js";var he=(()=>{class a{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(l){this.poNotification=l}myAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(r,i){r&1&&ql(0,`po-header`,0),r&2&&cw(`p-brand`,i.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[j8e],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Header Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-header-basic/sample-po-header-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-header-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return a})();var _e=()=>({label:`Positive`,value:`positive`});var He=()=>({label:`Negative`,value:`negative`});var Me=()=>({label:`Warning`,value:`warning`});var Be=()=>({label:`Disabled`,value:`disabled`});var ke=(a,A,l,r)=>[a,A,l,r];var Le=()=>({label:`Medium`,value:`medium`});var De=()=>({label:`Small`,value:`small`});var Ne=(a,A)=>[a,A];var ge=(()=>{class a{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(l){this.poNotification=l}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,l],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let p=Vx();ql(0,`po-header`,1),Ml(1,`div`,2)(2,`po-input`,3),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Jy(d)}),lg(),f0(),Ml(3,`po-input`,4),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Jy(d)}),lg(),f0(),Ml(4,`po-input`,5),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Jy(d)}),lg(),f0(),Ml(5,`div`,6)(6,`po-button`,7),ht(`p-click`,function(){return i.addBrand()}),lg()()(),ql(7,`hr`),Ml(8,`div`,8)(9,`h3`,9),mN(10,`Ações dos itens de menu`),lg(),Ml(11,`po-input`,10),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.menuActionEvent,d)||(i.menuActionEvent=d),Jy(d)}),lg(),f0(),Ml(12,`po-input`,11),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.menuActionLabel,d)||(i.menuActionLabel=d),Jy(d)}),lg(),f0(),Ml(13,`po-button`,12),ht(`p-click`,function(){return i.addAction()}),lg()(),ql(14,`hr`),Ml(15,`h3`,9),mN(16,`Ações das configurações`),lg(),Ml(17,`form`,8,0)(19,`po-input`,13),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Jy(d)}),lg(),f0(),Ml(20,`po-input`,14),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Jy(d)}),lg(),f0(),Ml(21,`po-number`,15),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Jy(d)}),lg(),f0(),Ml(22,`po-switch`,16),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Jy(d)}),lg(),f0(),Ml(23,`po-button`,17),ht(`p-click`,function(){return i.addTool(i.actionNewTool)}),lg()(),ql(24,`hr`),Ml(25,`h3`,9),mN(26,`Ações do Usuário`),lg(),Ml(27,`form`,8,0)(29,`po-input`,18),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Jy(d)}),lg(),f0(),Ml(30,`po-input`,19),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Jy(d)}),lg(),f0(),Ml(31,`po-radio-group`,20),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.newActionUser.status,d)||(i.newActionUser.status=d),Jy(d)}),lg(),f0(),Ml(32,`po-button`,17),ht(`p-click`,function(){return i.addUser()}),lg(),ql(33,`hr`),Ml(34,`h3`,9),mN(35,`Variações de tamanho`),lg(),Ml(36,`div`,8)(37,`po-radio-group`,21),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.size,d)||(i.size=d),Jy(d)}),lg(),f0(),lg(),ql(38,`hr`),Ml(39,`po-button`,22),ht(`p-click`,function(){return i.reset()}),lg()()}r&2&&(cw(`p-side-menu-only-action`,!0)(`p-brand`,i.headerBrand)(`p-menu-items`,i.menuActions)(`p-actions-tools`,i.actionTools)(`p-header-user`,i.actionUser)(`p-size`,i.size),Up(2),Tw(`ngModel`,i.headerBrandTitle),p0(),Up(),Tw(`ngModel`,i.headerBrandLogo),p0(),Up(),Tw(`ngModel`,i.headerBrandSmallLogo),p0(),Up(7),Tw(`ngModel`,i.menuActionEvent),p0(),Up(),Tw(`ngModel`,i.menuActionLabel),p0(),Up(),cw(`p-disabled`,!i.menuActionLabel),Up(6),Tw(`ngModel`,i.actionNewTool.icon),p0(),Up(),Tw(`ngModel`,i.actionNewTool.tooltip),p0(),Up(),Tw(`ngModel`,i.actionNewTool.badge),p0(),Up(),Tw(`ngModel`,i.actionNewToolEvent),p0(),Up(),cw(`p-disabled`,i.actionTools.length>2),Up(6),Tw(`ngModel`,i.newActionUser.customerBrand),p0(),Up(),Tw(`ngModel`,i.newActionUser.avatar),p0(),Up(),Tw(`ngModel`,i.newActionUser.status),cw(`p-options`,xN(28,ke,TN(24,_e),TN(25,He),TN(26,Me),TN(27,Be))),p0(),Up(),cw(`p-disabled`,!i.newActionUser.avatar||i.newActionUser.customerBrand),Up(5),Tw(`ngModel`,i.size),cw(`p-options`,RN(35,Ne,TN(33,Le),TN(34,De))),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,lU,xbe,q0e,J4,j8e],styles:[`po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Header Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-header-labs/sample-po-header-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-header
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-header-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return a})();var Ve=[`meuTemplate`];var qe=(a,A)=>A.icon;function Oe(a,A){if(a&1&&ql(0,`po-button`,4),a&2){let l=A.$implicit;cw(`p-icon`,l.icon)}}function ze(a,A){if(a&1&&(Ml(0,`div`,2)(1,`p`),mN(2,`Meus aplicativos`),lg(),ql(3,`br`),Ml(4,`div`,3),xx(5,Oe,1,1,`po-button`,4,qe),lg()()),a&2){let l=zx();Up(5),Nx(l.systemApps)}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)},{label:`Notificações`,icon:`an an-chat-circle-dots`,tooltip:`Notificações do usuário`,badge:5,items:this.listItem,onOpen:l=>this.onOpenTool(l),onClose:l=>this.onCloseTool(l)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(l,r){this.poNotification=l,this.cd=r}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r({},l),{popover:s(r({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges()}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ma.Top})}onOpenTool(l){this.poNotification.information({message:`Opened: ${l} (p-actions-tools)`,orientation:Ma.Top})}onCloseTool(l){this.poNotification.warning({message:`Closed: ${l} (p-actions-tools)`,orientation:Ma.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Ma.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Ma.Top})}static ɵfac=function(r){return new(r||a)(w(Eu),w(Ue))};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-apps`]],viewQuery:function(r,i){if(r&1&&Zl(Ve,5),r&2){let p;lo(p=uo())&&(i.meuTemplate=p.first)}},standalone:!1,decls:3,vars:5,consts:[[`meuTemplate`,``],[3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`]],template:function(r,i){r&1&&(ql(0,`po-header`,1),ow(1,ze,7,0,`ng-template`,null,0,BN)),r&2&&cw(`p-brand`,i.headerBrand)(`p-menu-items`,i.menuItems)(`p-actions-tools`,i.actionTools)(`p-header-user`,i.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[Zt,j8e],styles:[`.app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Header Apps`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-header-apps/sample-po-header-apps.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-header
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import {
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-header-apps`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,je,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ve],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-header`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoHeaderComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`O componente `),Ml(18,`code`),mN(19,`po-header`),lg(),mN(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Ml(21,`code`),mN(22,`p-brand`),lg(),mN(23,`, `),Ml(24,`code`),mN(25,`p-menu-items`),lg(),mN(26,`, `),Ml(27,`code`),mN(28,`p-actions-tools`),lg(),mN(29,` e `),Ml(30,`code`),mN(31,`p-header-user`),lg(),mN(32,`.`),lg(),Ml(33,`ul`)(34,`li`)(35,`code`),mN(36,`p-brand`),lg(),mN(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),lg(),Ml(38,`li`)(39,`code`),mN(40,`p-menu-items`),lg(),mN(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),lg(),Ml(42,`li`)(43,`code`),mN(44,`p-actions-tools`),lg(),mN(45,`: Possibilita a inclusão de até 3 botões com ações.`),lg(),Ml(46,`li`)(47,`code`),mN(48,`p-header-user`),lg(),mN(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),lg()(),Ml(50,`p`),mN(51,`O componente `),Ml(52,`code`),mN(53,`po-header`),lg(),mN(54,` pode ser usado de duas formas:`),lg(),Ml(55,`p`),mN(56,`Com `),Ml(57,`code`),mN(58,`po-menu`),lg(),mN(59,` definido pelo usuário:`),lg(),Ml(60,`pre`)(61,`code`),mN(62,`...
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
`),lg()(),Ml(63,`p`),mN(64,`Passando os itens diretamente para o `),Ml(65,`code`),mN(66,`po-header`),lg(),mN(67,` pela propriedade `),Ml(68,`code`),mN(69,`p-menus`),lg(),mN(70,`:`),lg(),Ml(71,`pre`)(72,`code`),mN(73,`...
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
`),lg()(),Ml(74,`h4`),mN(75,`Tokens customizáveis`),lg(),Ml(76,`p`),mN(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(78,`blockquote`)(79,`p`),mN(80,`Para maiores informações, acesse o guia `),Ml(81,`a`,6),mN(82,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(83,`.`),lg()(),Ml(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),mN(88,`Propriedade`),lg(),Ml(89,`th`),mN(90,`Descrição`),lg(),Ml(91,`th`),mN(92,`Valor Padrão`),lg()()(),Ml(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),mN(97,`--font-family`),lg()(),Ml(98,`td`),mN(99,`Família tipográfica usada`),lg(),Ml(100,`td`)(101,`code`),mN(102,`var(--font-family-theme)`),lg()()(),Ml(103,`tr`)(104,`td`)(105,`code`),mN(106,`--font-weight`),lg()(),Ml(107,`td`),mN(108,`Peso da fonte`),lg(),Ml(109,`td`)(110,`code`),mN(111,`var(--font-weight-bold)`),lg()()(),Ml(112,`tr`)(113,`td`)(114,`code`),mN(115,`--text-color`),lg()(),Ml(116,`td`),mN(117,`Cor do texto`),lg(),Ml(118,`td`)(119,`code`),mN(120,`var(--color-neutral-dark-70)`),lg()()(),Ml(121,`tr`)(122,`td`)(123,`code`),mN(124,`--outline-color-focused`),lg()(),Ml(125,`td`),mN(126,`Cor do outline dos itens de sub-menu e customer`),lg(),Ml(127,`td`)(128,`code`),mN(129,`var(--color-neutral-dark-95)`),lg()()(),Ml(130,`tr`)(131,`td`)(132,`code`),mN(133,`--object-fit-brand`),lg()(),Ml(134,`td`),mN(135,`Valor do object-fit da imagem do logo`),lg(),Ml(136,`td`)(137,`code`),mN(138,`contain`),lg()()(),Ml(139,`tr`)(140,`td`)(141,`code`),mN(142,`--object-fit-customer`),lg()(),Ml(143,`td`),mN(144,`Valor do object-fit da imagem do logo na seção customer`),lg(),Ml(145,`td`)(146,`code`),mN(147,`contain`),lg()()(),Ml(148,`tr`)(149,`td`)(150,`code`),mN(151,`--object-fit-customer-user`),lg()(),Ml(152,`td`),mN(153,`Valor do object-fit da imagem do avatar`),lg(),Ml(154,`td`)(155,`code`),mN(156,`cover`),lg()()(),Ml(157,`tr`)(158,`td`)(159,`strong`),mN(160,`Header`),lg()(),ql(161,`td`)(162,`td`),lg(),Ml(163,`tr`)(164,`td`)(165,`code`),mN(166,`--background-color`),lg()(),Ml(167,`td`),mN(168,`Cor de background do header`),lg(),Ml(169,`td`)(170,`code`),mN(171,`var(--color-neutral-light-05)`),lg()()(),Ml(172,`tr`)(173,`td`)(174,`code`),mN(175,`--border-radius-bottom-left`),lg()(),Ml(176,`td`),mN(177,`Valor do radius do lado esquerdo do header`),lg(),Ml(178,`td`)(179,`code`),mN(180,`var(--border-radius-md)`),lg()()(),Ml(181,`tr`)(182,`td`)(183,`code`),mN(184,`--border-radius-bottom-right`),lg()(),Ml(185,`td`),mN(186,`Valor do radius do lado direito do header`),lg(),Ml(187,`td`)(188,`code`),mN(189,`var(--border-radius-md)`),lg()()(),Ml(190,`tr`)(191,`td`)(192,`code`),mN(193,`--base shadow`),lg()(),Ml(194,`td`),mN(195,`Cor da sombra do header`),lg(),Ml(196,`td`)(197,`code`),mN(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),lg()()(),Ml(199,`tr`)(200,`td`)(201,`code`),mN(202,`--stroke-color`),lg()(),Ml(203,`td`),mN(204,`Cor da borda inferior do header`),lg(),Ml(205,`td`)(206,`code`),mN(207,`var(--color-brand-01-base)`),lg()()(),Ml(208,`tr`)(209,`td`)(210,`strong`),mN(211,`Sub-menu`),lg()(),ql(212,`td`)(213,`td`),lg(),Ml(214,`tr`)(215,`td`)(216,`code`),mN(217,`--border-radius`),lg()(),Ml(218,`td`),mN(219,`Valor do radius dos itens do sub-menu`),lg(),Ml(220,`td`)(221,`code`),mN(222,`var(--border-radius-md);`),lg()()(),Ml(223,`tr`)(224,`td`)(225,`code`),mN(226,`--text-color-submenu`),lg()(),Ml(227,`td`),mN(228,`Cor do texto dos itens do sub-menu`),lg(),Ml(229,`td`)(230,`code`),mN(231,`var(--color-brand-01-base)`),lg()()(),Ml(232,`tr`)(233,`td`)(234,`code`),mN(235,`--icon-color`),lg()(),Ml(236,`td`),mN(237,`Cor do ícone do sub-menu com itens`),lg(),Ml(238,`td`)(239,`code`),mN(240,`var(--color-brand-01-base)`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`code`),mN(244,`--border-color`),lg()(),Ml(245,`td`),mN(246,`Cor da borda`),lg(),Ml(247,`td`)(248,`code`),mN(249,`var(--color-transparent)`),lg()()(),Ml(250,`tr`)(251,`td`)(252,`code`),mN(253,`--shadow`),lg()(),Ml(254,`td`),mN(255,`Contém o valor da sombra do elemento`),lg(),Ml(256,`td`)(257,`code`),mN(258,`var(--shadow-none)`),lg()()(),Ml(259,`tr`)(260,`td`)(261,`code`),mN(262,`--font-family-submenu`),lg()(),Ml(263,`td`),mN(264,`Fonte do texto dos itens de sub-menu`),lg(),Ml(265,`td`)(266,`code`),mN(267,`var(--font-family-theme)`),lg()()(),Ml(268,`tr`)(269,`td`)(270,`code`),mN(271,`--font-weight-submenu`),lg()(),Ml(272,`td`),mN(273,`Peso da fonte do texto dos itens de sub-menu`),lg(),Ml(274,`td`)(275,`code`),mN(276,`var(--font-weight-bold)`),lg()()(),Ml(277,`tr`)(278,`td`)(279,`strong`),mN(280,`Sub-menu - Hover`),lg()(),ql(281,`td`)(282,`td`),lg(),Ml(283,`tr`)(284,`td`)(285,`code`),mN(286,`--background-hover`),lg()(),Ml(287,`td`),mN(288,`Cor de background dos itens do sub-menu no estado hover`),lg(),Ml(289,`td`)(290,`code`),mN(291,`var(--color-brand-01-lighter)`),lg()()(),Ml(292,`tr`)(293,`td`)(294,`code`),mN(295,`--icon-color-hover`),lg()(),Ml(296,`td`),mN(297,`Cor do ícone dos itens de sub-menu no estado hover`),lg(),Ml(298,`td`)(299,`code`),mN(300,`var(--color-brand-01-darkest)`),lg()()(),Ml(301,`tr`)(302,`td`)(303,`code`),mN(304,`--text-color-hover`),lg()(),Ml(305,`td`),mN(306,`Cor do texto dos itens de sub-menu no estado hover`),lg(),Ml(307,`td`)(308,`code`),mN(309,`var(--color-brand-01-darkest)`),lg()()(),Ml(310,`tr`)(311,`td`)(312,`strong`),mN(313,`Sub-menu - pressed`),lg()(),ql(314,`td`)(315,`td`),lg(),Ml(316,`tr`)(317,`td`)(318,`code`),mN(319,`--background-pressed`),lg()(),Ml(320,`td`),mN(321,`Cor de background dos itens do sub-menu no estado pressed`),lg(),Ml(322,`td`)(323,`code`),mN(324,`var(--color-brand-01-light)`),lg()()(),Ml(325,`tr`)(326,`td`)(327,`code`),mN(328,`--icon-color-pressed`),lg()(),Ml(329,`td`),mN(330,`Cor do ícone dos itens de sub-menu no estado pressed`),lg(),Ml(331,`td`)(332,`code`),mN(333,`var(--color-brand-01-darkest)`),lg()()(),Ml(334,`tr`)(335,`td`)(336,`code`),mN(337,`--text-color-pressed`),lg()(),Ml(338,`td`),mN(339,`Cor do texto dos itens de sub-menu no estado pressed`),lg(),Ml(340,`td`)(341,`code`),mN(342,`var(--color-brand-01-darkest)`),lg()()(),Ml(343,`tr`)(344,`td`)(345,`strong`),mN(346,`Sub-menu - selected`),lg()(),ql(347,`td`)(348,`td`),lg(),Ml(349,`tr`)(350,`td`)(351,`code`),mN(352,`--background-selected`),lg()(),Ml(353,`td`),mN(354,`Cor de background dos itens do sub-menu no estado selected`),lg(),Ml(355,`td`)(356,`code`),mN(357,`var(--color-brand-01-light)`),lg()()(),Ml(358,`tr`)(359,`td`)(360,`code`),mN(361,`--icon-color-selected`),lg()(),Ml(362,`td`),mN(363,`Cor do ícone dos itens de sub-menu no estado selected`),lg(),Ml(364,`td`)(365,`code`),mN(366,`var(--color-neutral-dark-95)`),lg()()(),Ml(367,`tr`)(368,`td`)(369,`code`),mN(370,`--text-color-selected`),lg()(),Ml(371,`td`),mN(372,`Cor do texto dos itens de sub-menu no estado selected`),lg(),Ml(373,`td`)(374,`code`),mN(375,`var(--color-brand-01-darkest)`),lg()()(),Ml(376,`tr`)(377,`td`)(378,`strong`),mN(379,`Customer`),lg()(),ql(380,`td`)(381,`td`),lg(),Ml(382,`tr`)(383,`td`)(384,`code`),mN(385,`--background-color-customer`),lg()(),Ml(386,`td`),mN(387,`Cor do background da seção customer`),lg(),Ml(388,`td`)(389,`code`),mN(390,`var(--color-neutral-light-00)`),lg()()(),Ml(391,`tr`)(392,`td`)(393,`code`),mN(394,`--border-color`),lg()(),Ml(395,`td`),mN(396,`Cor da borda da seção customer`),lg(),Ml(397,`td`)(398,`code`),mN(399,`var(--color-neutral-light-10)`),lg()()(),Ml(400,`tr`)(401,`td`)(402,`code`),mN(403,`--border-style`),lg()(),Ml(404,`td`),mN(405,`Estilo da borda da seção customer`),lg(),Ml(406,`td`)(407,`code`),mN(408,`solid`),lg()()(),Ml(409,`tr`)(410,`td`)(411,`code`),mN(412,`--border-width`),lg()(),Ml(413,`td`),mN(414,`Largura da borda da seção customer`),lg(),Ml(415,`td`)(416,`code`),mN(417,`var(--border-width-sm)`),lg()()(),Ml(418,`tr`)(419,`td`)(420,`strong`),mN(421,`Customer - hover`),lg()(),ql(422,`td`)(423,`td`),lg(),Ml(424,`tr`)(425,`td`)(426,`code`),mN(427,`--background-color-customer-hover`),lg()(),Ml(428,`td`),mN(429,`Cor do background da seção customer no estado hover`),lg(),Ml(430,`td`)(431,`code`),mN(432,`var(--color-brand-01-lighter)`),lg()()(),Ml(433,`tr`)(434,`td`)(435,`strong`),mN(436,`Customer - pressed`),lg()(),ql(437,`td`)(438,`td`),lg(),Ml(439,`tr`)(440,`td`)(441,`code`),mN(442,`--background-color-customer-pressed`),lg()(),Ml(443,`td`),mN(444,`Cor do background da seção customer no estado pressed`),lg(),Ml(445,`td`)(446,`code`),mN(447,`var(--color-brand-01-light)`),lg()()(),Ml(448,`tr`)(449,`td`)(450,`code`),mN(451,`--border-width-pressed`),lg()(),Ml(452,`td`),mN(453,`Largura da borda da seção customer no estado pressed`),lg(),Ml(454,`td`)(455,`code`),mN(456,`var(--border-width-md)`),lg()()()()()(),Ml(457,`div`,7)(458,`h4`,8),mN(459,`Seletor`),lg(),Ml(460,`pre`,9),mN(461,`<po-header
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
`),lg()(),Ml(462,`h4`,10),mN(463,`Propriedades`),lg(),Ml(464,`table`,11)(465,`tr`,12)(466,`th`,13),mN(467,`Nome`),lg(),Ml(468,`th`,13),mN(469,`Tipo`),lg(),Ml(470,`th`,13),mN(471,`Padrão`),lg(),Ml(472,`th`,13),mN(473,`Descrição`),lg()(),Ml(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),mN(478,` p-actions-tools`),ql(479,`br`),lg()()(),Ml(480,`td`,18)(481,`code`,19),mN(482,`Array<PoHeaderActionTool>`),lg()(),Ml(483,`td`,20),mN(484,`-`),lg(),Ml(485,`td`,21)(486,`em`)(487,`strong`),mN(488,`(opcional)`),lg()(),Ml(489,`p`),mN(490,`Propriedade para configurar a seção de tools do `),Ml(491,`code`),mN(492,`po-header`),lg()(),Ml(493,`blockquote`)(494,`p`),mN(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),lg()()()(),Ml(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),mN(500,` p-amount-more`),ql(501,`br`),lg()()(),Ml(502,`td`,18)(503,`code`,22),mN(504,`number`),lg()(),Ml(505,`td`,20),mN(506,`-`),lg(),Ml(507,`td`,21)(508,`em`)(509,`strong`),mN(510,`(opcional)`),lg()(),Ml(511,`p`),mN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),lg(),Ml(513,`blockquote`)(514,`p`),mN(515,`Ao utilizar essa propriedade o `),Ml(516,`code`),mN(517,`po-header`),lg(),mN(518,` não irá realizar o calculo automatíco de itens.`),lg()()()(),Ml(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),mN(523,` p-brand`),ql(524,`br`),lg()()(),Ml(525,`td`,18)(526,`code`,23),mN(527,`PoHeaderBrand `),lg(),Ml(528,`code`,24),mN(529,` string`),lg()(),Ml(530,`td`,20),mN(531,`-`),lg(),Ml(532,`td`,21)(533,`em`)(534,`strong`),mN(535,`(opcional)`),lg()(),Ml(536,`p`),mN(537,`Propriedade para configurar a seção de brand do `),Ml(538,`code`),mN(539,`po-header`),lg()(),Ml(540,`p`),mN(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),lg()()(),Ml(542,`tr`,14)(543,`td`,15)(544,`div`,25)(545,`span`,26),mN(546,` (p-colapsed-menu)`),ql(547,`br`),lg()()(),Ml(548,`td`,18)(549,`code`,27),mN(550,`EventEmitter`),lg()(),Ml(551,`td`,20),mN(552,`-`),lg(),Ml(553,`td`,21)(554,`em`)(555,`strong`),mN(556,`(opcional)`),lg()(),Ml(557,`p`),mN(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),lg()()(),Ml(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),mN(563,` p-filter-menu`),ql(564,`br`),lg()()(),Ml(565,`td`,18)(566,`code`,28),mN(567,`boolean`),lg()(),Ml(568,`td`,20),mN(569,`-`),lg(),Ml(570,`td`,21)(571,`em`)(572,`strong`),mN(573,`(opcional)`),lg()(),Ml(574,`p`),mN(575,`Habilita campo para filtrar itens no menu`),lg()()(),Ml(576,`tr`,14)(577,`td`,15)(578,`div`,16)(579,`span`,17),mN(580,` p-header-template`),ql(581,`br`),lg()()(),Ml(582,`td`,18)(583,`code`,29),mN(584,`TemplateRef<any>`),lg()(),Ml(585,`td`,20),mN(586,`-`),lg(),Ml(587,`td`,21)(588,`em`)(589,`strong`),mN(590,`(opcional)`),lg()(),Ml(591,`p`),mN(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Ml(593,`code`),mN(594,`p-menu-items`),lg()()()(),Ml(595,`tr`,14)(596,`td`,15)(597,`div`,16)(598,`span`,17),mN(599,` p-header-user`),ql(600,`br`),lg()()(),Ml(601,`td`,18)(602,`code`,30),mN(603,`PoHeaderUser`),lg()(),Ml(604,`td`,20),mN(605,`-`),lg(),Ml(606,`td`,21)(607,`em`)(608,`strong`),mN(609,`(opcional)`),lg()(),Ml(610,`p`),mN(611,`Propriedade para configurar a seção de headerUser do `),Ml(612,`code`),mN(613,`po-header`),lg()()()(),Ml(614,`tr`,14)(615,`td`,15)(616,`div`,16)(617,`span`,17),mN(618,` p-hide-button-menu`),ql(619,`br`),lg()()(),Ml(620,`td`,18)(621,`code`,28),mN(622,`boolean`),lg()(),Ml(623,`td`,20),mN(624,`-`),lg(),Ml(625,`td`,21)(626,`em`)(627,`strong`),mN(628,`(opcional)`),lg()(),Ml(629,`p`),mN(630,`Esconde o botão de menu colapsado.`),lg()()(),Ml(631,`tr`,14)(632,`td`,15)(633,`div`,16)(634,`span`,17),mN(635,` p-literals`),ql(636,`br`),lg()()(),Ml(637,`td`,18)(638,`code`,31),mN(639,`PoHeaderLiterals`),lg()(),Ml(640,`td`,20),mN(641,`-`),lg(),Ml(642,`td`,21)(643,`em`)(644,`strong`),mN(645,`(opcional)`),lg()(),Ml(646,`p`),mN(647,`Objeto com a literal usada na propriedade `),Ml(648,`code`),mN(649,`p-literals`),lg(),mN(650,`.`),lg(),Ml(651,`p`),mN(652,`Para customizar a literal, basta declarar um objeto do tipo `),Ml(653,`code`),mN(654,`PoHeaderLiterals`),lg(),mN(655,` conforme exemplo abaixo:`),lg(),Ml(656,`pre`)(657,`code`),mN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),lg()(),Ml(659,`p`),mN(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(661,`pre`)(662,`code`),mN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),lg()(),Ml(664,`blockquote`)(665,`p`),mN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(667,`a`,32)(668,`code`),mN(669,`PoI18nService`),lg()(),mN(670,` ou do browser.`),lg()()()(),Ml(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),mN(675,` p-menus`),ql(676,`br`),lg()()(),Ml(677,`td`,18)(678,`code`,33),mN(679,`Array<PoMenuItem>`),lg()(),Ml(680,`td`,20),mN(681,`-`),lg(),Ml(682,`td`,21)(683,`em`)(684,`strong`),mN(685,`(opcional)`),lg()(),Ml(686,`p`),mN(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),lg(),Ml(688,`blockquote`)(689,`p`),mN(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),lg()()()(),Ml(691,`tr`,14)(692,`td`,15)(693,`div`,16)(694,`span`,17),mN(695,` p-menu-items`),ql(696,`br`),lg()()(),Ml(697,`td`,18)(698,`code`,34),mN(699,`Array<PoHeaderActions>`),lg()(),Ml(700,`td`,20),mN(701,`-`),lg(),Ml(702,`td`,21)(703,`em`)(704,`strong`),mN(705,`(opcional)`),lg()(),Ml(706,`p`),mN(707,`Propriedade para configurar a seção de menu do `),Ml(708,`code`),mN(709,`po-header`),lg(),mN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),lg(),Ml(711,`blockquote`)(712,`p`),mN(713,`Os itens irão ficar visíveis em uma tela de até 960px`),lg()()()(),Ml(714,`tr`,14)(715,`td`,15)(716,`div`,16)(717,`span`,17),mN(718,` p-size`),ql(719,`br`),lg()()(),Ml(720,`td`,18)(721,`code`,24),mN(722,`string`),lg()(),Ml(723,`td`,20)(724,`p`)(725,`code`),mN(726,`medium`),lg()()(),Ml(727,`td`,21)(728,`em`)(729,`strong`),mN(730,`(opcional)`),lg()(),Ml(731,`p`),mN(732,`Define o tamanho do componente:`),lg(),Ml(733,`ul`)(734,`li`)(735,`code`),mN(736,`small`),lg(),mN(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),lg(),Ml(738,`li`)(739,`code`),mN(740,`medium`),lg(),mN(741,`: altura de 56px.`),lg()(),Ml(742,`blockquote`)(743,`p`),mN(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(745,`code`),mN(746,`medium`),lg(),mN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(748,`a`,35),mN(749,`po-theme`),lg(),mN(750,`.`),lg()()()()(),Ml(751,`h3`),mN(752,`Interfaces`),lg(),Ml(753,`h4`,36)(754,`code`,5),mN(755,`PoHeaderActionTool`),lg()(),Ml(756,`div`,2)(757,`p`)(758,`em`),mN(759,`Interface`),lg(),mN(760,` que define a seção de Actions do header.`),lg(),Ml(761,`p`),mN(762,`Indicação de uso:`),lg(),Ml(763,`ul`)(764,`li`),mN(765,`Primeira ação destinada à app launcher.`),lg(),Ml(766,`li`),mN(767,`Segunda ação (terceiro ícone) destinada à notificações.`),lg(),Ml(768,`li`),mN(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),lg()(),Ml(770,`blockquote`)(771,`p`),mN(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),lg()()(),Ml(773,`h4`,10),mN(774,`Propriedades`),lg(),Ml(775,`table`,11)(776,`tr`,12)(777,`th`,13),mN(778,`Nome`),lg(),Ml(779,`th`,13),mN(780,`Tipo`),lg(),Ml(781,`th`,13),mN(782,`Descrição`),lg()(),Ml(783,`tr`,14)(784,`td`,15)(785,`div`,16)(786,`span`,17),mN(787,` action`),ql(788,`br`),lg()()(),Ml(789,`td`,18)(790,`code`,37),mN(791,`Function`),lg()(),Ml(792,`td`,21)(793,`em`)(794,`strong`),mN(795,`(opcional)`),lg()(),Ml(796,`p`),mN(797,`Evento emitido ao clicar em uma ação`),lg(),Ml(798,`p`),mN(799,`Exemplo: `),Ml(800,`code`),mN(801,`action: this.myFunction.bind(this)`),lg()()()(),Ml(802,`tr`,14)(803,`td`,15)(804,`div`,16)(805,`span`,17),mN(806,` badge`),ql(807,`br`),lg()()(),Ml(808,`td`,18)(809,`code`,22),mN(810,`number`),lg()(),Ml(811,`td`,21)(812,`em`)(813,`strong`),mN(814,`(opcional)`),lg()(),Ml(815,`p`),mN(816,`Valor númerico com a repsentação de notificações`),lg()()(),Ml(817,`tr`,14)(818,`td`,15)(819,`div`,16)(820,`span`,17),mN(821,` icon`),ql(822,`br`),lg()()(),Ml(823,`td`,18)(824,`code`,24),mN(825,`string`),lg()(),Ml(826,`td`,21)(827,`em`)(828,`strong`),mN(829,`(opcional)`),lg()(),Ml(830,`p`),mN(831,`Ícone do botão de ação`),lg()()(),Ml(832,`tr`,14)(833,`td`,15)(834,`div`,16)(835,`span`,17),mN(836,` items`),ql(837,`br`),lg()()(),Ml(838,`td`,18)(839,`code`,38),mN(840,`Array<PoHeaderActionToolItem>`),lg()(),Ml(841,`td`,21)(842,`em`)(843,`strong`),mN(844,`(opcional)`),lg()(),Ml(845,`p`),mN(846,`Itens de ações`),lg()()(),Ml(847,`tr`,14)(848,`td`,15)(849,`div`,16)(850,`span`,17),mN(851,` label`),ql(852,`br`),lg()()(),Ml(853,`td`,18)(854,`code`,24),mN(855,`string`),lg()(),Ml(856,`td`,21)(857,`em`)(858,`strong`),mN(859,`(opcional)`),lg()(),Ml(860,`p`),mN(861,`Título da ação`),lg()()(),Ml(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),mN(866,` link`),ql(867,`br`),lg()()(),Ml(868,`td`,18)(869,`code`,24),mN(870,`string`),lg()(),Ml(871,`td`,21)(872,`em`)(873,`strong`),mN(874,`(opcional)`),lg()(),Ml(875,`p`),mN(876,`link utilizado no redirecionamento das páginas.`),lg()()(),Ml(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),mN(881,` onClose`),ql(882,`br`),lg()()(),Ml(883,`td`,18)(884,`code`,39),mN(885,`(label?: string) => void`),lg()(),Ml(886,`td`,21)(887,`em`)(888,`strong`),mN(889,`(opcional)`),lg()(),Ml(890,`p`),mN(891,`Função executada quando o popup ou popover da ação é fechado.`),lg(),Ml(892,`p`),mN(893,`Esse evento é disparado toda vez que o popup (quando há `),Ml(894,`code`),mN(895,`items`),lg(),mN(896,`) ou o popover (quando há `),Ml(897,`code`),mN(898,`popover`),lg(),mN(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),lg(),Ml(900,`p`),mN(901,`O callback recebe como parâmetro o `),Ml(902,`code`),mN(903,`label`),lg(),mN(904,` da ação que disparou o evento.`),lg(),Ml(905,`p`),mN(906,`Exemplo: `),Ml(907,`code`),mN(908,`onClose: (label) => console.log('Fechado:', label)`),lg()()()(),Ml(909,`tr`,14)(910,`td`,15)(911,`div`,16)(912,`span`,17),mN(913,` onOpen`),ql(914,`br`),lg()()(),Ml(915,`td`,18)(916,`code`,39),mN(917,`(label?: string) => void`),lg()(),Ml(918,`td`,21)(919,`em`)(920,`strong`),mN(921,`(opcional)`),lg()(),Ml(922,`p`),mN(923,`Função executada quando o popup ou popover da ação é aberto.`),lg(),Ml(924,`p`),mN(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Ml(926,`code`),mN(927,`items`),lg(),mN(928,`)
ou o popover (quando h\xE1 `),Ml(929,`code`),mN(930,`popover`),lg(),mN(931,`) é exibido.`),lg(),Ml(932,`p`),mN(933,`O callback recebe como parâmetro o `),Ml(934,`code`),mN(935,`label`),lg(),mN(936,` da ação que disparou o evento.`),lg(),Ml(937,`p`),mN(938,`Exemplo: `),Ml(939,`code`),mN(940,`onOpen: (label) => console.log('Aberto:', label)`),lg()()()(),Ml(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),mN(945,` popover`),ql(946,`br`),lg()()(),Ml(947,`td`,18)(948,`code`,40),mN(949,`PoHeaderActionPopoverAction`),lg()(),Ml(950,`td`,21)(951,`em`)(952,`strong`),mN(953,`(opcional)`),lg()(),Ml(954,`p`),mN(955,`Template que será utilizado na ação`),lg()()(),Ml(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),mN(960,` tooltip`),ql(961,`br`),lg()()(),Ml(962,`td`,18)(963,`code`,24),mN(964,`string`),lg()(),Ml(965,`td`,21)(966,`em`)(967,`strong`),mN(968,`(opcional)`),lg()(),Ml(969,`p`),mN(970,`Texto que será apresentado na tooltip`),lg()()()(),Ml(971,`h4`,36)(972,`code`,5),mN(973,`PoHeaderActionPopoverAction`),lg()(),Ml(974,`div`,2)(975,`p`)(976,`em`),mN(977,`Interface`),lg(),mN(978,` que define um template para uma ação.`),lg()(),Ml(979,`h4`,10),mN(980,`Propriedades`),lg(),Ml(981,`table`,11)(982,`tr`,12)(983,`th`,13),mN(984,`Nome`),lg(),Ml(985,`th`,13),mN(986,`Tipo`),lg(),Ml(987,`th`,13),mN(988,`Descrição`),lg()(),Ml(989,`tr`,14)(990,`td`,15)(991,`div`,16)(992,`span`,17),mN(993,` content`),ql(994,`br`),lg()()(),Ml(995,`td`,18)(996,`code`,29),mN(997,`TemplateRef<any>`),lg()(),Ml(998,`td`,21)(999,`p`),mN(1e3,`Template que será renderizado dentro do popover.`),lg()()(),Ml(1001,`tr`,14)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),mN(1005,` width`),ql(1006,`br`),lg()()(),Ml(1007,`td`,18)(1008,`code`,22),mN(1009,`number`),lg()(),Ml(1010,`td`,21)(1011,`em`)(1012,`strong`),mN(1013,`(opcional)`),lg()(),Ml(1014,`p`),mN(1015,`Largura, em pixels, do template renderizado dentro do popover.`),lg(),Ml(1016,`p`),mN(1017,`Valores permitidos: de 240 a 800.`),lg()()()(),Ml(1018,`h4`,36)(1019,`code`,5),mN(1020,`PoHeaderActionToolItem`),lg()(),Ml(1021,`div`,2)(1022,`p`)(1023,`em`),mN(1024,`Interface`),lg(),mN(1025,` que define uma lista de ações.`),lg()(),Ml(1026,`h4`,10),mN(1027,`Propriedades`),lg(),Ml(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),mN(1031,`Nome`),lg(),Ml(1032,`th`,13),mN(1033,`Tipo`),lg(),Ml(1034,`th`,13),mN(1035,`Descrição`),lg()(),Ml(1036,`tr`,14)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),mN(1040,` action`),ql(1041,`br`),lg()()(),Ml(1042,`td`,18)(1043,`code`,37),mN(1044,`Function`),lg()(),Ml(1045,`td`,21)(1046,`p`),mN(1047,`Evento emitido ao clicar em uma ação`),lg(),Ml(1048,`p`),mN(1049,`Exemplo: `),Ml(1050,`code`),mN(1051,`action: this.myFunction.bind(this)`),lg()()()(),Ml(1052,`tr`,14)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),mN(1056,` label`),ql(1057,`br`),lg()()(),Ml(1058,`td`,18)(1059,`code`,24),mN(1060,`string`),lg()(),Ml(1061,`td`,21)(1062,`p`),mN(1063,`Label da ação`),lg()()()(),Ml(1064,`h4`,36)(1065,`code`,5),mN(1066,`PoHeaderActions`),lg()(),Ml(1067,`div`,2)(1068,`p`)(1069,`em`),mN(1070,`Interface`),lg(),mN(1071,` que define uma lista de ações no sub-menu.`),lg()(),Ml(1072,`h4`,10),mN(1073,`Propriedades`),lg(),Ml(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),mN(1077,`Nome`),lg(),Ml(1078,`th`,13),mN(1079,`Tipo`),lg(),Ml(1080,`th`,13),mN(1081,`Descrição`),lg()(),Ml(1082,`tr`,14)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),mN(1086,` action`),ql(1087,`br`),lg()()(),Ml(1088,`td`,18)(1089,`code`,37),mN(1090,`Function`),lg()(),Ml(1091,`td`,21)(1092,`em`)(1093,`strong`),mN(1094,`(opcional)`),lg()(),Ml(1095,`p`),mN(1096,`Evento da ação`),lg(),Ml(1097,`p`),mN(1098,` Exemplo: `),Ml(1099,`code`),mN(1100,`action: this.myFunction.bind(this)`),lg()()()(),Ml(1101,`tr`,14)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),mN(1105,` id`),ql(1106,`br`),lg()()(),Ml(1107,`td`,18)(1108,`code`,24),mN(1109,`string`),lg()(),Ml(1110,`td`,21)(1111,`em`)(1112,`strong`),mN(1113,`(opcional)`),lg()(),Ml(1114,`p`),mN(1115,`Identificador da ação`),lg()()(),Ml(1116,`tr`,14)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),mN(1120,` label`),ql(1121,`br`),lg()()(),Ml(1122,`td`,18)(1123,`code`,24),mN(1124,`string`),lg()(),Ml(1125,`td`,21)(1126,`p`),mN(1127,`Label da ação`),lg()()(),Ml(1128,`tr`,14)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),mN(1132,` link`),ql(1133,`br`),lg()()(),Ml(1134,`td`,18)(1135,`code`,24),mN(1136,`string`),lg()(),Ml(1137,`td`,21)(1138,`em`)(1139,`strong`),mN(1140,`(opcional)`),lg()(),Ml(1141,`p`),mN(1142,`link utilizado no redirecionamento das páginas.`),lg()()()(),Ml(1143,`h4`,36)(1144,`code`,5),mN(1145,`PoHeaderBrand`),lg()(),Ml(1146,`div`,2)(1147,`p`)(1148,`em`),mN(1149,`Interface`),lg(),mN(1150,` que define a seção de brand.`),lg()(),Ml(1151,`h4`,10),mN(1152,`Propriedades`),lg(),Ml(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),mN(1156,`Nome`),lg(),Ml(1157,`th`,13),mN(1158,`Tipo`),lg(),Ml(1159,`th`,13),mN(1160,`Descrição`),lg()(),Ml(1161,`tr`,14)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),mN(1165,` action`),ql(1166,`br`),lg()()(),Ml(1167,`td`,18)(1168,`code`,37),mN(1169,`Function`),lg()(),Ml(1170,`td`,21)(1171,`em`)(1172,`strong`),mN(1173,`(opcional)`),lg()(),Ml(1174,`p`),mN(1175,`Evento da ação`),lg(),Ml(1176,`p`),mN(1177,` Exemplo: `),Ml(1178,`code`),mN(1179,`action: this.myFunction.bind(this)`),lg()()()(),Ml(1180,`tr`,14)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),mN(1184,` link`),ql(1185,`br`),lg()()(),Ml(1186,`td`,18)(1187,`code`,24),mN(1188,`string`),lg()(),Ml(1189,`td`,21)(1190,`em`)(1191,`strong`),mN(1192,`(opcional)`),lg()(),Ml(1193,`p`),mN(1194,`link utilizado no redirecionamento das páginas.`),lg()()(),Ml(1195,`tr`,14)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),mN(1199,` logo`),ql(1200,`br`),lg()()(),Ml(1201,`td`,18)(1202,`code`,24),mN(1203,`string`),lg()(),Ml(1204,`td`,21)(1205,`em`)(1206,`strong`),mN(1207,`(opcional)`),lg()(),Ml(1208,`p`),mN(1209,`Imagem da marca`),lg()()(),Ml(1210,`tr`,14)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),mN(1214,` smallLogo`),ql(1215,`br`),lg()()(),Ml(1216,`td`,18)(1217,`code`,24),mN(1218,`string`),lg()(),Ml(1219,`td`,21)(1220,`em`)(1221,`strong`),mN(1222,`(opcional)`),lg()(),Ml(1223,`p`),mN(1224,`Imagem da marca quando a tela é menor que 960px`),lg()()(),Ml(1225,`tr`,14)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),mN(1229,` title`),ql(1230,`br`),lg()()(),Ml(1231,`td`,18)(1232,`code`,24),mN(1233,`string`),lg()(),Ml(1234,`td`,21)(1235,`em`)(1236,`strong`),mN(1237,`(opcional)`),lg()(),Ml(1238,`p`),mN(1239,`Título da marca`),lg()()()(),Ml(1240,`h4`,36)(1241,`code`,5),mN(1242,`PoHeaderLiterals`),lg()(),Ml(1243,`div`,2)(1244,`p`),mN(1245,`Interface para definição das literais usadas no `),Ml(1246,`code`),mN(1247,`po-header`),lg(),mN(1248,`.`),lg()(),Ml(1249,`h4`,10),mN(1250,`Propriedades`),lg(),Ml(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),mN(1254,`Nome`),lg(),Ml(1255,`th`,13),mN(1256,`Tipo`),lg(),Ml(1257,`th`,13),mN(1258,`Descrição`),lg()(),Ml(1259,`tr`,14)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),mN(1263,` headerLinks`),ql(1264,`br`),lg()()(),Ml(1265,`td`,18)(1266,`code`,24),mN(1267,`string`),lg()(),Ml(1268,`td`,21)(1269,`em`)(1270,`strong`),mN(1271,`(opcional)`),lg()(),Ml(1272,`p`),mN(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),lg()()(),Ml(1274,`tr`,14)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),mN(1278,` notifications`),ql(1279,`br`),lg()()(),Ml(1280,`td`,18)(1281,`code`,24),mN(1282,`string`),lg()(),Ml(1283,`td`,21)(1284,`em`)(1285,`strong`),mN(1286,`(opcional)`),lg()(),Ml(1287,`p`),mN(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Ml(1289,`code`),mN(1290,`badge`),lg()()()()(),Ml(1291,`h4`,36)(1292,`code`,5),mN(1293,`PoHeaderUser`),lg()(),Ml(1294,`div`,2)(1295,`p`)(1296,`em`),mN(1297,`Interface`),lg(),mN(1298,` que define a seção de Customer do header.`),lg()(),Ml(1299,`h4`,10),mN(1300,`Propriedades`),lg(),Ml(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),mN(1304,`Nome`),lg(),Ml(1305,`th`,13),mN(1306,`Tipo`),lg(),Ml(1307,`th`,13),mN(1308,`Descrição`),lg()(),Ml(1309,`tr`,14)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),mN(1313,` action`),ql(1314,`br`),lg()()(),Ml(1315,`td`,18)(1316,`code`,37),mN(1317,`Function`),lg()(),Ml(1318,`td`,21)(1319,`em`)(1320,`strong`),mN(1321,`(opcional)`),lg()(),Ml(1322,`p`),mN(1323,`Evento emitido ao clicar na seção`),lg(),Ml(1324,`p`),mN(1325,`Exemplo: `),Ml(1326,`code`),mN(1327,`action: this.myFunction.bind(this)`),lg()()()(),Ml(1328,`tr`,14)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),mN(1332,` avatar`),ql(1333,`br`),lg()()(),Ml(1334,`td`,18)(1335,`code`,24),mN(1336,`string`),lg()(),Ml(1337,`td`,21)(1338,`p`),mN(1339,`Logo representando o perfil`),lg()()(),Ml(1340,`tr`,14)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),mN(1344,` customerBrand`),ql(1345,`br`),lg()()(),Ml(1346,`td`,18)(1347,`code`,24),mN(1348,`string`),lg()(),Ml(1349,`td`,21)(1350,`p`),mN(1351,`Imagem da marca`),lg()()(),Ml(1352,`tr`,14)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),mN(1356,` items`),ql(1357,`br`),lg()()(),Ml(1358,`td`,18)(1359,`code`,38),mN(1360,`Array<PoHeaderActionToolItem>`),lg()(),Ml(1361,`td`,21)(1362,`em`)(1363,`strong`),mN(1364,`(opcional)`),lg()(),Ml(1365,`p`),mN(1366,`Itens de ações`),lg(),Ml(1367,`blockquote`)(1368,`p`),mN(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),lg()()()(),Ml(1370,`tr`,14)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),mN(1374,` onClose`),ql(1375,`br`),lg()()(),Ml(1376,`td`,18)(1377,`code`,37),mN(1378,`Function`),lg()(),Ml(1379,`td`,21)(1380,`em`)(1381,`strong`),mN(1382,`(opcional)`),lg()(),Ml(1383,`p`),mN(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),lg(),Ml(1385,`p`),mN(1386,`Esse evento é disparado toda vez que o popup (quando há `),Ml(1387,`code`),mN(1388,`items`),lg(),mN(1389,`) ou o popover (quando há `),Ml(1390,`code`),mN(1391,`popover`),lg(),mN(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),lg(),Ml(1393,`p`),mN(1394,`Exemplo: `),Ml(1395,`code`),mN(1396,`onClose: this.onCloseNotifications.bind(this)`),lg()()()(),Ml(1397,`tr`,14)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),mN(1401,` onOpen`),ql(1402,`br`),lg()()(),Ml(1403,`td`,18)(1404,`code`,37),mN(1405,`Function`),lg()(),Ml(1406,`td`,21)(1407,`em`)(1408,`strong`),mN(1409,`(opcional)`),lg()(),Ml(1410,`p`),mN(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),lg(),Ml(1412,`p`),mN(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Ml(1414,`code`),mN(1415,`items`),lg(),mN(1416,`) ou o popover (quando há `),Ml(1417,`code`),mN(1418,`popover`),lg(),mN(1419,`) é exibido.`),lg(),Ml(1420,`p`),mN(1421,`Exemplo: `),Ml(1422,`code`),mN(1423,`onOpen: this.onOpenNotifications.bind(this)`),lg()()()(),Ml(1424,`tr`,14)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),mN(1428,` popover`),ql(1429,`br`),lg()()(),Ml(1430,`td`,18)(1431,`code`,40),mN(1432,`PoHeaderActionPopoverAction`),lg()(),Ml(1433,`td`,21)(1434,`em`)(1435,`strong`),mN(1436,`(opcional)`),lg()(),Ml(1437,`p`),mN(1438,`Template que será utilizado na ação`),lg()()(),Ml(1439,`tr`,14)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),mN(1443,` status`),ql(1444,`br`),lg()()(),Ml(1445,`td`,18)(1446,`code`,41),mN(1447,`'positive' `),lg(),Ml(1448,`code`,42),mN(1449,` 'negative' `),lg(),Ml(1450,`code`,43),mN(1451,` 'warning' `),lg(),Ml(1452,`code`,44),mN(1453,` 'disabled'`),lg()(),Ml(1454,`td`,21)(1455,`em`)(1456,`strong`),mN(1457,`(opcional)`),lg()(),Ml(1458,`p`),mN(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),lg(),Ml(1460,`ul`)(1461,`li`)(1462,`code`),mN(1463,`positive`),lg(),mN(1464,`: Define a cor do `),Ml(1465,`code`),mN(1466,`status`),lg(),mN(1467,` com a cor de feedback positivo.`),lg(),Ml(1468,`li`)(1469,`code`),mN(1470,`negative`),lg(),mN(1471,`: Define a cor do `),Ml(1472,`code`),mN(1473,`status`),lg(),mN(1474,` com a cor de feedback negative.`),lg(),Ml(1475,`li`)(1476,`code`),mN(1477,`warning`),lg(),mN(1478,`: Define a cor do `),Ml(1479,`code`),mN(1480,`status`),lg(),mN(1481,` com a cor de feedback warning.`),lg(),Ml(1482,`li`)(1483,`code`),mN(1484,`disabled`),lg(),mN(1485,`: Define a cor do `),Ml(1486,`code`),mN(1487,`status`),lg(),mN(1488,` com a cor de feedback disabled`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-header-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-header-basic-view`)(6,`sample-po-header-labs-view`)(7,`sample-po-header-apps-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,be,xe,fe,Ce],encapsulation:2,changeDetection:1})}return a})()}];var Ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[NL.forChild(Qe),NL]})}return a})();var ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,Ae]})}return a})();export{ft as DocPoHeaderModule};