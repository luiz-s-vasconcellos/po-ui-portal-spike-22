import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,ea as p0,ga as w,gn as q8e,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var le=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&ql(0,`po-toolbar`,0)},dependencies:[q8e],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Toolbar Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-toolbar-basic`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poNotification=f(Eu);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let s=Vx();ql(0,`po-toolbar`,3),Ml(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.action,i)||(n.action.action=i),Jy(i)}),lg(),f0(),Ml(6,`po-select`,7),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.icon,i)||(n.action.icon=i),Jy(i)}),lg(),f0(),Ml(7,`po-input`,8),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.label,i)||(n.action.label=i),Jy(i)}),lg(),f0(),Ml(8,`po-input`,9),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.url,i)||(n.action.url=i),Jy(i)}),lg(),f0(),Ml(9,`po-radio-group`,10),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.type,i)||(n.action.type=i),Jy(i)}),lg(),f0(),Ml(10,`po-switch`,11),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.action.separator,i)||(n.action.separator=i),Jy(i)}),lg(),f0(),Ml(11,`po-radio-group`,12),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.toolbarActionType,i)||(n.toolbarActionType=i),Jy(i)}),lg(),f0(),lg(),Ml(12,`div`,5)(13,`po-button`,13),ht(`p-click`,function(){Qy(s);let i=Yx(3);return Jy(n.addAction(n.action,i))}),lg()()(),ql(14,`po-divider`),Ml(15,`div`,5)(16,`po-select`,14),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.actionsIcon,i)||(n.actionsIcon=i),Jy(i)}),lg(),f0(),lg(),ql(17,`po-divider`),Ml(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.profile.title,i)||(n.profile.title=i),Jy(i)}),lg(),f0(),Ml(22,`po-input`,16),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.profile.subtitle,i)||(n.profile.subtitle=i),Jy(i)}),lg(),f0(),Ml(23,`po-input`,17),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.profile.avatar,i)||(n.profile.avatar=i),Jy(i)}),lg(),f0(),lg()(),ql(24,`po-divider`),Ml(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.title,i)||(n.title=i),Jy(i)}),lg(),f0(),Ml(29,`po-number`,19),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.notificationNumber,i)||(n.notificationNumber=i),Jy(i)}),lg(),f0(),Ml(30,`po-switch`,20),Mw(`ngModelChange`,function(i){return Qy(s),yN(n.showNotification,i)||(n.showNotification=i),Jy(i)}),lg(),f0(),lg(),Ml(31,`div`,5)(32,`po-button`,21),ht(`p-click`,function(){Qy(s);let i=Yx(3),ge=Yx(19);return Yx(26).reset(),ge.reset(),i.reset(),Jy(n.restore())}),lg()()()()}if(p&2){let s=Yx(3);cw(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),Up(5),Tw(`ngModel`,n.action.action),p0(),Up(),Tw(`ngModel`,n.action.icon),cw(`p-options`,n.iconOptions),p0(),Up(),Tw(`ngModel`,n.action.label),p0(),Up(),Tw(`ngModel`,n.action.url),p0(),Up(),Tw(`ngModel`,n.action.type),cw(`p-options`,n.actionTypes),p0(),Up(),Tw(`ngModel`,n.action.separator),p0(),Up(),Tw(`ngModel`,n.toolbarActionType),cw(`p-options`,n.toolbarActionTypes),p0(),Up(2),cw(`p-disabled`,s.invalid),Up(3),Tw(`ngModel`,n.actionsIcon),cw(`p-options`,n.actionsIconOptions),p0(),Up(5),Tw(`ngModel`,n.profile.title),p0(),Up(),Tw(`ngModel`,n.profile.subtitle),p0(),Up(),Tw(`ngModel`,n.profile.avatar),p0(),Up(5),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.notificationNumber),p0(),Up(),Tw(`ngModel`,n.showNotification),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,xbe,q0e,Tbe,J4,q8e],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Toolbar Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  [p-actions]="actions"
  [p-actions-icon]="actionsIcon"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="notificationNumber"
  [p-show-notification]="showNotification"
  [p-title]="title"
>
</po-toolbar>

<div class="sample-container">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-select
        class="po-md-6"
        name="actionIcon"
        [(ngModel)]="action.icon"
        p-clean
        p-label="Action icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-clean p-label="Action label" p-required>
      </po-input>

      <po-input class="po-md-6" name="actionUrl" [(ngModel)]="action.url" p-clean p-label="Action url"> </po-input>

      <po-radio-group
        class="po-md-6"
        name="actionType"
        [(ngModel)]="action.type"
        p-label="Action type"
        [p-options]="actionTypes"
      >
      </po-radio-group>

      <po-switch
        class="po-md-6"
        name="actionDisabled"
        [(ngModel)]="action.separator"
        p-clean
        p-label="Action separator"
      >
      </po-switch>

      <po-radio-group
        class="po-md-6"
        name="toolbarActionType"
        [(ngModel)]="toolbarActionType"
        p-columns="3"
        p-label="Toolbar action type"
        [p-options]="toolbarActionTypes"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Action"
        [p-disabled]="formAction.invalid"
        (p-click)="addAction(action, formAction)"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="actionsIcon"
      [(ngModel)]="actionsIcon"
      p-clean
      p-label="Actions icon"
      [p-options]="actionsIconOptions"
    >
    </po-select>
  </div>

  <po-divider />

  <form #formProfile="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="profileTitle"
        [(ngModel)]="profile.title"
        p-clean
        p-label="Profile title"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="profileSubtitle"
        [(ngModel)]="profile.subtitle"
        p-clean
        p-label="Profile subtitle"
      >
      </po-input>

      <po-input class="po-md-6" name="profileAvatar" [(ngModel)]="profile.avatar" p-clean p-label="Profile avatar">
      </po-input>
    </div>
  </form>

  <po-divider />

  <form #formToolbar="ngForm">
    <div class="po-row">
      <po-input class="po-md-4" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

      <po-number
        class="po-md-4"
        name="notificationNumber"
        [(ngModel)]="notificationNumber"
        p-clean
        p-label="Notification number"
      >
      </po-number>

      <po-switch
        class="po-md-4"
        name="showNotification"
        [(ngModel)]="showNotification"
        p-clean
        p-label="Show notification"
      >
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="formToolbar.reset(); formProfile.reset(); formAction.reset(); restore()"
      >
      </po-button>
    </div>
  </form>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-labs',
  templateUrl: './sample-po-toolbar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoToolbarAction;
  actions: Array<PoToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<PoToolbarAction>;
  notificationNumber: number;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<PoRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-chats', label: 'an an-chats' },
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly actionsIconOptions: Array<PoSelectOption> = [
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'an an-gear', label: 'an an-gear' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'PO Toolbar';
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-toolbar-labs`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poDialog=f(e_e);poNotification=f(Eu);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:l=>this.onClickNotification(l)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:l=>this.openDialog(l)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:l=>this.showAction(l)},{icon:`an an-building-apartment`,label:`Company data`,action:l=>this.showAction(l)},{icon:`an an-gear`,label:`Settings`,action:l=>this.showAction(l)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:l=>this.showAction(l)}];actions=[{label:`Start cash register`,action:l=>this.showAction(l)},{label:`Finalize cash register`,action:l=>this.showAction(l)},{label:`Cash register options`,action:l=>this.showAction(l)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(l=>l.type===`danger`).length}onClickNotification(l){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),l.type=`default`}openDialog(l){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),l.type=`default`}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[Ce([Eu])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(ql(0,`po-toolbar`,0),Ml(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),mN(5),lg(),Ml(6,`div`,5),mN(7,`Let's work hard!`),lg()()()()),p&2&&(cw(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),Up(5),gg(`Hello, `,n.profile.title,`.`))},dependencies:[q8e,$8e],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Toolbar - Logged`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  p-actions-icon="an an-shopping-cart-simple"
  [p-actions]="actions"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="getNotificationNumber()"
  [p-title]="title"
>
</po-toolbar>

<div class="po-row">
  <div class="sample-container">
    <po-widget class="po-sm-12">
      <div class="po-font-title">Hello, { { profile.title }}.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-logged',
  templateUrl: './sample-po-toolbar-logged.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLoggedComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'an an-newspaper',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'an an-chat', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'an an-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'an an-building-apartment', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'an an-gear', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'an an-sign-out', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: \`Hello Mr. Dev! Congratulations, you are a TOTVS!\`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(\`Action clicked: \${item.label}\`);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-toolbar-logged`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:530,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(p,n){p&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-toolbar`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoToolbarComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-toolbar`),lg(),mN(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),lg()(),Ml(18,`div`,6)(19,`h4`,7),mN(20,`Seletor`),lg(),Ml(21,`pre`,8),mN(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),lg()(),Ml(23,`h4`,9),mN(24,`Propriedades`),lg(),Ml(25,`table`,10)(26,`tr`,11)(27,`th`,12),mN(28,`Nome`),lg(),Ml(29,`th`,12),mN(30,`Tipo`),lg(),Ml(31,`th`,12),mN(32,`Padrão`),lg(),Ml(33,`th`,12),mN(34,`Descrição`),lg()(),Ml(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),mN(39,` p-actions`),ql(40,`br`),lg()()(),Ml(41,`td`,17)(42,`code`,18),mN(43,`Array<PoToolbarAction>`),lg()(),Ml(44,`td`,19),mN(45,`-`),lg(),Ml(46,`td`,20)(47,`em`)(48,`strong`),mN(49,`(opcional)`),lg()(),Ml(50,`p`),mN(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Ml(52,`code`),mN(53,`p-actions-icon`),lg(),mN(54,`.`),lg()()(),Ml(55,`tr`,13)(56,`td`,14)(57,`div`,15)(58,`span`,16),mN(59,` p-actions-icon`),ql(60,`br`),lg()()(),Ml(61,`td`,17)(62,`code`,21),mN(63,`string `),lg(),Ml(64,`code`,22),mN(65,` TemplateRef<void>`),lg()(),Ml(66,`td`,19)(67,`p`)(68,`code`),mN(69,`an-dots-three`),lg()()(),Ml(70,`td`,20)(71,`em`)(72,`strong`),mN(73,`(opcional)`),lg()(),Ml(74,`p`),mN(75,`Define um `),Ml(76,`a`,23),mN(77,`ícone`),lg(),mN(78,` para a propriedade `),Ml(79,`code`),mN(80,`p-actions`),lg(),mN(81,`.`),lg(),Ml(82,`p`),mN(83,`É possível usar qualquer um dos ícones da `),Ml(84,`a`,23),mN(85,`Biblioteca de ícones`),lg(),mN(86,`. conforme exemplo abaixo:`),lg(),Ml(87,`pre`)(88,`code`),mN(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),lg()(),Ml(90,`p`),mN(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(92,`em`),mN(93,`Font Awesome`),lg(),mN(94,`, da seguinte forma:`),lg(),Ml(95,`pre`)(96,`code`),mN(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),lg()(),Ml(98,`p`),mN(99,`Outra opção seria a customização do ícone através do `),Ml(100,`code`),mN(101,`TemplateRef`),lg(),mN(102,`, conforme exemplo abaixo:`),lg(),Ml(103,`pre`)(104,`code`),mN(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(106,`blockquote`)(107,`p`),mN(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(109,`code`),mN(110,`font-size: inherit`),lg(),mN(111,` caso o ícone utilizado não aplique-o.`),lg()(),Ml(112,`blockquote`)(113,`p`),mN(114,`Caso não haja ações definidas em `),Ml(115,`code`),mN(116,`p-actions`),lg(),mN(117,`, o ícone não será exibido.`),lg()()()(),Ml(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),mN(122,` p-notification-actions`),ql(123,`br`),lg()()(),Ml(124,`td`,17)(125,`code`,18),mN(126,`Array<PoToolbarAction>`),lg()(),Ml(127,`td`,19),mN(128,`-`),lg(),Ml(129,`td`,20)(130,`em`)(131,`strong`),mN(132,`(opcional)`),lg()(),Ml(133,`p`),mN(134,`Lista de ações da notificação.`),lg()()(),Ml(135,`tr`,13)(136,`td`,14)(137,`div`,15)(138,`span`,16),mN(139,` p-notification-number`),ql(140,`br`),lg()()(),Ml(141,`td`,17)(142,`code`,24),mN(143,`number`),lg()(),Ml(144,`td`,19),mN(145,`-`),lg(),Ml(146,`td`,20)(147,`em`)(148,`strong`),mN(149,`(opcional)`),lg()(),Ml(150,`p`),mN(151,`Número de notificações.`),lg()()(),Ml(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),mN(156,` p-profile`),ql(157,`br`),lg()()(),Ml(158,`td`,17)(159,`code`,25),mN(160,`PoToolbarProfile`),lg()(),Ml(161,`td`,19),mN(162,`-`),lg(),Ml(163,`td`,20)(164,`em`)(165,`strong`),mN(166,`(opcional)`),lg()(),Ml(167,`p`),mN(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),lg()()(),Ml(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),mN(173,` p-profile-actions`),ql(174,`br`),lg()()(),Ml(175,`td`,17)(176,`code`,18),mN(177,`Array<PoToolbarAction>`),lg()(),Ml(178,`td`,19),mN(179,`-`),lg(),Ml(180,`td`,20)(181,`em`)(182,`strong`),mN(183,`(opcional)`),lg()(),Ml(184,`p`),mN(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),lg()()(),Ml(186,`tr`,13)(187,`td`,14)(188,`div`,15)(189,`span`,16),mN(190,` p-show-notification`),ql(191,`br`),lg()()(),Ml(192,`td`,17)(193,`code`,26),mN(194,`boolean`),lg()(),Ml(195,`td`,19),mN(196,`-`),lg(),Ml(197,`td`,20)(198,`em`)(199,`strong`),mN(200,`(opcional)`),lg()(),Ml(201,`p`),mN(202,`Se falso, oculta o ícone de notificações.`),lg()()(),Ml(203,`tr`,13)(204,`td`,14)(205,`div`,15)(206,`span`,16),mN(207,` p-title`),ql(208,`br`),lg()()(),Ml(209,`td`,17)(210,`code`,21),mN(211,`string`),lg()(),Ml(212,`td`,19),mN(213,`-`),lg(),Ml(214,`td`,20)(215,`p`),mN(216,`Título do `),Ml(217,`em`),mN(218,`toolbar`),lg(),mN(219,` e aplicação.`),lg()()()(),Ml(220,`h3`),mN(221,`Interfaces`),lg(),Ml(222,`h4`,27)(223,`code`,5),mN(224,`PoToolbarAction`),lg()(),Ml(225,`div`,2)(226,`p`),mN(227,`Interface para lista de ações do componente. `),lg()(),Ml(228,`h4`,9),mN(229,`Propriedades`),lg(),Ml(230,`table`,10)(231,`tr`,11)(232,`th`,12),mN(233,`Nome`),lg(),Ml(234,`th`,12),mN(235,`Tipo`),lg(),Ml(236,`th`,12),mN(237,`Descrição`),lg()(),Ml(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),mN(242,` action`),ql(243,`br`),lg()()(),Ml(244,`td`,17)(245,`code`,28),mN(246,`Function`),lg()(),Ml(247,`td`,20)(248,`em`)(249,`strong`),mN(250,`(opcional)`),lg()(),Ml(251,`p`),mN(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(253,`p`),mN(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(255,`code`),mN(256,`subItems`),lg(),mN(257,`.`),lg(),Ml(258,`blockquote`)(259,`p`),mN(260,`Para que a função seja executada no contexto do componente, utilize `),Ml(261,`em`),mN(262,`bind`),lg(),mN(263,`:
`),Ml(264,`code`),mN(265,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(266,`tr`,13)(267,`td`,14)(268,`div`,15)(269,`span`,16),mN(270,` disabled`),ql(271,`br`),lg()()(),Ml(272,`td`,17)(273,`code`,26),mN(274,`boolean `),lg(),Ml(275,`code`,28),mN(276,` Function`),lg()(),Ml(277,`td`,20)(278,`em`)(279,`strong`),mN(280,`(opcional)`),lg()(),Ml(281,`p`),mN(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(283,`tr`,13)(284,`td`,14)(285,`div`,15)(286,`span`,16),mN(287,` icon`),ql(288,`br`),lg()()(),Ml(289,`td`,17)(290,`code`,21),mN(291,`string `),lg(),Ml(292,`code`,22),mN(293,` TemplateRef<void>`),lg()(),Ml(294,`td`,20)(295,`em`)(296,`strong`),mN(297,`(opcional)`),lg()(),Ml(298,`p`),mN(299,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(300,`p`),mN(301,`Aceita ícones da `),Ml(302,`a`,23),mN(303,`Biblioteca de ícones`),lg(),mN(304,`, fontes externas (ex: Font Awesome)
ou um `),Ml(305,`code`),mN(306,`TemplateRef`),lg(),mN(307,` para ícones customizados.`),lg(),Ml(308,`pre`)(309,`code`),mN(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(311,`tr`,13)(312,`td`,14)(313,`div`,15)(314,`span`,16),mN(315,` label`),ql(316,`br`),lg()()(),Ml(317,`td`,17)(318,`code`,21),mN(319,`string`),lg()(),Ml(320,`td`,20)(321,`p`),mN(322,`Rótulo da ação.`),lg(),Ml(323,`p`),mN(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(325,`code`),mN(326,`subItems`),lg(),mN(327,`.`),lg()()(),Ml(328,`tr`,13)(329,`td`,14)(330,`div`,15)(331,`span`,16),mN(332,` selected`),ql(333,`br`),lg()()(),Ml(334,`td`,17)(335,`code`,26),mN(336,`boolean`),lg()(),Ml(337,`td`,20)(338,`em`)(339,`strong`),mN(340,`(opcional)`),lg()(),Ml(341,`p`),mN(342,`Define se a ação está selecionada.`),lg()()(),Ml(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),mN(347,` separator`),ql(348,`br`),lg()()(),Ml(349,`td`,17)(350,`code`,26),mN(351,`boolean`),lg()(),Ml(352,`td`,20)(353,`em`)(354,`strong`),mN(355,`(opcional)`),lg()(),Ml(356,`p`),mN(357,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(358,`tr`,13)(359,`td`,14)(360,`div`,15)(361,`span`,16),mN(362,` subItems`),ql(363,`br`),lg()()(),Ml(364,`td`,17)(365,`code`,29),mN(366,`Array<PoPopupAction>`),lg()(),Ml(367,`td`,20)(368,`em`)(369,`strong`),mN(370,`(opcional)`),lg()(),Ml(371,`p`),mN(372,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(373,`p`),mN(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(375,`blockquote`)(376,`p`),mN(377,`As propriedades `),Ml(378,`code`),mN(379,`disabled`),lg(),mN(380,`, `),Ml(381,`code`),mN(382,`type`),lg(),mN(383,` e `),Ml(384,`code`),mN(385,`visible`),lg(),mN(386,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(387,`blockquote`)(388,`p`),mN(389,`Quando `),Ml(390,`code`),mN(391,`url`),lg(),mN(392,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(393,`blockquote`)(394,`p`),mN(395,`Em subníveis aninhados, o `),Ml(396,`code`),mN(397,`icon`),lg(),mN(398,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(399,`tr`,13)(400,`td`,14)(401,`div`,15)(402,`span`,16),mN(403,` type`),ql(404,`br`),lg()()(),Ml(405,`td`,17)(406,`code`,21),mN(407,`string`),lg()(),Ml(408,`td`,20)(409,`em`)(410,`strong`),mN(411,`(opcional)`),lg()(),Ml(412,`p`),mN(413,`Define a cor do item.`),lg(),Ml(414,`p`),mN(415,`Valores válidos:`),lg(),Ml(416,`ul`)(417,`li`)(418,`code`),mN(419,`default`),lg()(),Ml(420,`li`)(421,`code`),mN(422,`danger`),lg()()()()(),Ml(423,`tr`,13)(424,`td`,14)(425,`div`,15)(426,`span`,16),mN(427,` url`),ql(428,`br`),lg()()(),Ml(429,`td`,17)(430,`code`,21),mN(431,`string`),lg()(),Ml(432,`td`,20)(433,`em`)(434,`strong`),mN(435,`(opcional)`),lg()(),Ml(436,`p`),mN(437,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(438,`p`),mN(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(440,`code`),mN(441,`url`),lg(),mN(442,` é informada em um agrupador, o clique `),Ml(443,`strong`),mN(444,`não abrirá os subitens`),lg(),mN(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(446,`blockquote`)(447,`p`),mN(448,`Quando informada, tem prioridade sobre a propriedade `),Ml(449,`code`),mN(450,`action`),lg(),mN(451,`.`),lg()()()(),Ml(452,`tr`,13)(453,`td`,14)(454,`div`,15)(455,`span`,16),mN(456,` visible`),ql(457,`br`),lg()()(),Ml(458,`td`,17)(459,`code`,26),mN(460,`boolean `),lg(),Ml(461,`code`,28),mN(462,` Function`),lg()(),Ml(463,`td`,20)(464,`em`)(465,`strong`),mN(466,`(opcional)`),lg()(),Ml(467,`p`),mN(468,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(469,`h4`,27)(470,`code`,5),mN(471,`PoToolbarProfile`),lg()(),Ml(472,`div`,2)(473,`p`),mN(474,`Interface que define o perfil do `),Ml(475,`code`),mN(476,`PoToolbarComponent`),lg(),mN(477,`.`),lg()(),Ml(478,`h4`,9),mN(479,`Propriedades`),lg(),Ml(480,`table`,10)(481,`tr`,11)(482,`th`,12),mN(483,`Nome`),lg(),Ml(484,`th`,12),mN(485,`Tipo`),lg(),Ml(486,`th`,12),mN(487,`Descrição`),lg()(),Ml(488,`tr`,13)(489,`td`,14)(490,`div`,15)(491,`span`,16),mN(492,` avatar`),ql(493,`br`),lg()()(),Ml(494,`td`,17)(495,`code`,21),mN(496,`string`),lg()(),Ml(497,`td`,20)(498,`em`)(499,`strong`),mN(500,`(opcional)`),lg()(),Ml(501,`p`),mN(502,`Define o caminho da imagem do perfil.`),lg()()(),Ml(503,`tr`,13)(504,`td`,14)(505,`div`,15)(506,`span`,16),mN(507,` subtitle`),ql(508,`br`),lg()()(),Ml(509,`td`,17)(510,`code`,21),mN(511,`string`),lg()(),Ml(512,`td`,20)(513,`em`)(514,`strong`),mN(515,`(opcional)`),lg()(),Ml(516,`p`),mN(517,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),lg()()(),Ml(518,`tr`,13)(519,`td`,14)(520,`div`,15)(521,`span`,16),mN(522,` title`),ql(523,`br`),lg()()(),Ml(524,`td`,17)(525,`code`,21),mN(526,`string`),lg()(),Ml(527,`td`,20)(528,`p`),mN(529,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ae=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-toolbar-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-toolbar-basic-view`)(6,`sample-po-toolbar-labs-view`)(7,`sample-po-toolbar-logged-view`),lg()()()),p&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,se,de,ue],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[NL.forChild(Ae),NL]})}return a})();var rt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,fe]})}return a})();export{rt as DocPoToolbarModule};