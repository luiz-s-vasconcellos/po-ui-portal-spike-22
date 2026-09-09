import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Kn as Bx,L as I8e,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var le=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&Gl(0,`po-toolbar`,0)},dependencies:[I8e],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Toolbar Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-toolbar-basic`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poNotification=f(Eu);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();Gl(0,`po-toolbar`,3),Tl(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.action,i)||(n.action.action=i),Xy(i)}),ag(),a0(),Tl(6,`po-select`,7),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.icon,i)||(n.action.icon=i),Xy(i)}),ag(),a0(),Tl(7,`po-input`,8),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.label,i)||(n.action.label=i),Xy(i)}),ag(),a0(),Tl(8,`po-input`,9),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.url,i)||(n.action.url=i),Xy(i)}),ag(),a0(),Tl(9,`po-radio-group`,10),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.type,i)||(n.action.type=i),Xy(i)}),ag(),a0(),Tl(10,`po-switch`,11),ww(`ngModelChange`,function(i){return Ky(s),uN(n.action.separator,i)||(n.action.separator=i),Xy(i)}),ag(),a0(),Tl(11,`po-radio-group`,12),ww(`ngModelChange`,function(i){return Ky(s),uN(n.toolbarActionType,i)||(n.toolbarActionType=i),Xy(i)}),ag(),a0(),ag(),Tl(12,`div`,5)(13,`po-button`,13),ht(`p-click`,function(){Ky(s);let i=Bx(3);return Xy(n.addAction(n.action,i))}),ag()()(),Gl(14,`po-divider`),Tl(15,`div`,5)(16,`po-select`,14),ww(`ngModelChange`,function(i){return Ky(s),uN(n.actionsIcon,i)||(n.actionsIcon=i),Xy(i)}),ag(),a0(),ag(),Gl(17,`po-divider`),Tl(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),ww(`ngModelChange`,function(i){return Ky(s),uN(n.profile.title,i)||(n.profile.title=i),Xy(i)}),ag(),a0(),Tl(22,`po-input`,16),ww(`ngModelChange`,function(i){return Ky(s),uN(n.profile.subtitle,i)||(n.profile.subtitle=i),Xy(i)}),ag(),a0(),Tl(23,`po-input`,17),ww(`ngModelChange`,function(i){return Ky(s),uN(n.profile.avatar,i)||(n.profile.avatar=i),Xy(i)}),ag(),a0(),ag()(),Gl(24,`po-divider`),Tl(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),ww(`ngModelChange`,function(i){return Ky(s),uN(n.title,i)||(n.title=i),Xy(i)}),ag(),a0(),Tl(29,`po-number`,19),ww(`ngModelChange`,function(i){return Ky(s),uN(n.notificationNumber,i)||(n.notificationNumber=i),Xy(i)}),ag(),a0(),Tl(30,`po-switch`,20),ww(`ngModelChange`,function(i){return Ky(s),uN(n.showNotification,i)||(n.showNotification=i),Xy(i)}),ag(),a0(),ag(),Tl(31,`div`,5)(32,`po-button`,21),ht(`p-click`,function(){Ky(s);let i=Bx(3),ge=Bx(19);return Bx(26).reset(),ge.reset(),i.reset(),Xy(n.restore())}),ag()()()()}if(p&2){let s=Bx(3);nw(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),jp(5),Ew(`ngModel`,n.action.action),l0(),jp(),Ew(`ngModel`,n.action.icon),nw(`p-options`,n.iconOptions),l0(),jp(),Ew(`ngModel`,n.action.label),l0(),jp(),Ew(`ngModel`,n.action.url),l0(),jp(),Ew(`ngModel`,n.action.type),nw(`p-options`,n.actionTypes),l0(),jp(),Ew(`ngModel`,n.action.separator),l0(),jp(),Ew(`ngModel`,n.toolbarActionType),nw(`p-options`,n.toolbarActionTypes),l0(),jp(2),nw(`p-disabled`,s.invalid),jp(3),Ew(`ngModel`,n.actionsIcon),nw(`p-options`,n.actionsIconOptions),l0(),jp(5),Ew(`ngModel`,n.profile.title),l0(),jp(),Ew(`ngModel`,n.profile.subtitle),l0(),jp(),Ew(`ngModel`,n.profile.avatar),l0(),jp(5),Ew(`ngModel`,n.title),l0(),jp(),Ew(`ngModel`,n.notificationNumber),l0(),jp(),Ew(`ngModel`,n.showNotification),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,ube,L0e,fbe,j4,I8e],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Toolbar Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<style>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-toolbar-labs`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poDialog=f(W0e);poNotification=f(Eu);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:l=>this.onClickNotification(l)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:l=>this.openDialog(l)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:l=>this.showAction(l)},{icon:`an an-building-apartment`,label:`Company data`,action:l=>this.showAction(l)},{icon:`an an-gear`,label:`Settings`,action:l=>this.showAction(l)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:l=>this.showAction(l)}];actions=[{label:`Start cash register`,action:l=>this.showAction(l)},{label:`Finalize cash register`,action:l=>this.showAction(l)},{label:`Cash register options`,action:l=>this.showAction(l)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(l=>l.type===`danger`).length}onClickNotification(l){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),l.type=`default`}openDialog(l){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),l.type=`default`}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[Ce([Eu])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(Gl(0,`po-toolbar`,0),Tl(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),cN(5),ag(),Tl(6,`div`,5),cN(7,`Let's work hard!`),ag()()()()),p&2&&(nw(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),jp(5),hg(`Hello, `,n.profile.title,`.`))},dependencies:[I8e,O8e],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Toolbar - Logged`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<style>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-toolbar-logged`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:530,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(p,n){p&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-toolbar`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoToolbarComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-toolbar`),ag(),cN(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),ag()(),Tl(18,`div`,6)(19,`h4`,7),cN(20,`Seletor`),ag(),Tl(21,`pre`,8),cN(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),ag()(),Tl(23,`h4`,9),cN(24,`Propriedades`),ag(),Tl(25,`table`,10)(26,`tr`,11)(27,`th`,12),cN(28,`Nome`),ag(),Tl(29,`th`,12),cN(30,`Tipo`),ag(),Tl(31,`th`,12),cN(32,`Padrão`),ag(),Tl(33,`th`,12),cN(34,`Descrição`),ag()(),Tl(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),cN(39,` p-actions`),Gl(40,`br`),ag()()(),Tl(41,`td`,17)(42,`code`,18),cN(43,`Array<PoToolbarAction>`),ag()(),Tl(44,`td`,19),cN(45,`-`),ag(),Tl(46,`td`,20)(47,`em`)(48,`strong`),cN(49,`(opcional)`),ag()(),Tl(50,`p`),cN(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Tl(52,`code`),cN(53,`p-actions-icon`),ag(),cN(54,`.`),ag()()(),Tl(55,`tr`,13)(56,`td`,14)(57,`div`,15)(58,`span`,16),cN(59,` p-actions-icon`),Gl(60,`br`),ag()()(),Tl(61,`td`,17)(62,`code`,21),cN(63,`string `),ag(),Tl(64,`code`,22),cN(65,` TemplateRef<void>`),ag()(),Tl(66,`td`,19)(67,`p`)(68,`code`),cN(69,`an-dots-three`),ag()()(),Tl(70,`td`,20)(71,`em`)(72,`strong`),cN(73,`(opcional)`),ag()(),Tl(74,`p`),cN(75,`Define um `),Tl(76,`a`,23),cN(77,`ícone`),ag(),cN(78,` para a propriedade `),Tl(79,`code`),cN(80,`p-actions`),ag(),cN(81,`.`),ag(),Tl(82,`p`),cN(83,`É possível usar qualquer um dos ícones da `),Tl(84,`a`,23),cN(85,`Biblioteca de ícones`),ag(),cN(86,`. conforme exemplo abaixo:`),ag(),Tl(87,`pre`)(88,`code`),cN(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),ag()(),Tl(90,`p`),cN(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(92,`em`),cN(93,`Font Awesome`),ag(),cN(94,`, da seguinte forma:`),ag(),Tl(95,`pre`)(96,`code`),cN(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),ag()(),Tl(98,`p`),cN(99,`Outra opção seria a customização do ícone através do `),Tl(100,`code`),cN(101,`TemplateRef`),ag(),cN(102,`, conforme exemplo abaixo:`),ag(),Tl(103,`pre`)(104,`code`),cN(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(106,`blockquote`)(107,`p`),cN(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(109,`code`),cN(110,`font-size: inherit`),ag(),cN(111,` caso o ícone utilizado não aplique-o.`),ag()(),Tl(112,`blockquote`)(113,`p`),cN(114,`Caso não haja ações definidas em `),Tl(115,`code`),cN(116,`p-actions`),ag(),cN(117,`, o ícone não será exibido.`),ag()()()(),Tl(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),cN(122,` p-notification-actions`),Gl(123,`br`),ag()()(),Tl(124,`td`,17)(125,`code`,18),cN(126,`Array<PoToolbarAction>`),ag()(),Tl(127,`td`,19),cN(128,`-`),ag(),Tl(129,`td`,20)(130,`em`)(131,`strong`),cN(132,`(opcional)`),ag()(),Tl(133,`p`),cN(134,`Lista de ações da notificação.`),ag()()(),Tl(135,`tr`,13)(136,`td`,14)(137,`div`,15)(138,`span`,16),cN(139,` p-notification-number`),Gl(140,`br`),ag()()(),Tl(141,`td`,17)(142,`code`,24),cN(143,`number`),ag()(),Tl(144,`td`,19),cN(145,`-`),ag(),Tl(146,`td`,20)(147,`em`)(148,`strong`),cN(149,`(opcional)`),ag()(),Tl(150,`p`),cN(151,`Número de notificações.`),ag()()(),Tl(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),cN(156,` p-profile`),Gl(157,`br`),ag()()(),Tl(158,`td`,17)(159,`code`,25),cN(160,`PoToolbarProfile`),ag()(),Tl(161,`td`,19),cN(162,`-`),ag(),Tl(163,`td`,20)(164,`em`)(165,`strong`),cN(166,`(opcional)`),ag()(),Tl(167,`p`),cN(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),ag()()(),Tl(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),cN(173,` p-profile-actions`),Gl(174,`br`),ag()()(),Tl(175,`td`,17)(176,`code`,18),cN(177,`Array<PoToolbarAction>`),ag()(),Tl(178,`td`,19),cN(179,`-`),ag(),Tl(180,`td`,20)(181,`em`)(182,`strong`),cN(183,`(opcional)`),ag()(),Tl(184,`p`),cN(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),ag()()(),Tl(186,`tr`,13)(187,`td`,14)(188,`div`,15)(189,`span`,16),cN(190,` p-show-notification`),Gl(191,`br`),ag()()(),Tl(192,`td`,17)(193,`code`,26),cN(194,`boolean`),ag()(),Tl(195,`td`,19),cN(196,`-`),ag(),Tl(197,`td`,20)(198,`em`)(199,`strong`),cN(200,`(opcional)`),ag()(),Tl(201,`p`),cN(202,`Se falso, oculta o ícone de notificações.`),ag()()(),Tl(203,`tr`,13)(204,`td`,14)(205,`div`,15)(206,`span`,16),cN(207,` p-title`),Gl(208,`br`),ag()()(),Tl(209,`td`,17)(210,`code`,21),cN(211,`string`),ag()(),Tl(212,`td`,19),cN(213,`-`),ag(),Tl(214,`td`,20)(215,`p`),cN(216,`Título do `),Tl(217,`em`),cN(218,`toolbar`),ag(),cN(219,` e aplicação.`),ag()()()(),Tl(220,`h3`),cN(221,`Interfaces`),ag(),Tl(222,`h4`,27)(223,`code`,5),cN(224,`PoToolbarAction`),ag()(),Tl(225,`div`,2)(226,`p`),cN(227,`Interface para lista de ações do componente. `),ag()(),Tl(228,`h4`,9),cN(229,`Propriedades`),ag(),Tl(230,`table`,10)(231,`tr`,11)(232,`th`,12),cN(233,`Nome`),ag(),Tl(234,`th`,12),cN(235,`Tipo`),ag(),Tl(236,`th`,12),cN(237,`Descrição`),ag()(),Tl(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),cN(242,` action`),Gl(243,`br`),ag()()(),Tl(244,`td`,17)(245,`code`,28),cN(246,`Function`),ag()(),Tl(247,`td`,20)(248,`em`)(249,`strong`),cN(250,`(opcional)`),ag()(),Tl(251,`p`),cN(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(253,`p`),cN(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(255,`code`),cN(256,`subItems`),ag(),cN(257,`.`),ag(),Tl(258,`blockquote`)(259,`p`),cN(260,`Para que a função seja executada no contexto do componente, utilize `),Tl(261,`em`),cN(262,`bind`),ag(),cN(263,`:
`),Tl(264,`code`),cN(265,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(266,`tr`,13)(267,`td`,14)(268,`div`,15)(269,`span`,16),cN(270,` disabled`),Gl(271,`br`),ag()()(),Tl(272,`td`,17)(273,`code`,26),cN(274,`boolean `),ag(),Tl(275,`code`,28),cN(276,` Function`),ag()(),Tl(277,`td`,20)(278,`em`)(279,`strong`),cN(280,`(opcional)`),ag()(),Tl(281,`p`),cN(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(283,`tr`,13)(284,`td`,14)(285,`div`,15)(286,`span`,16),cN(287,` icon`),Gl(288,`br`),ag()()(),Tl(289,`td`,17)(290,`code`,21),cN(291,`string `),ag(),Tl(292,`code`,22),cN(293,` TemplateRef<void>`),ag()(),Tl(294,`td`,20)(295,`em`)(296,`strong`),cN(297,`(opcional)`),ag()(),Tl(298,`p`),cN(299,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(300,`p`),cN(301,`Aceita ícones da `),Tl(302,`a`,23),cN(303,`Biblioteca de ícones`),ag(),cN(304,`, fontes externas (ex: Font Awesome)
ou um `),Tl(305,`code`),cN(306,`TemplateRef`),ag(),cN(307,` para ícones customizados.`),ag(),Tl(308,`pre`)(309,`code`),cN(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(311,`tr`,13)(312,`td`,14)(313,`div`,15)(314,`span`,16),cN(315,` label`),Gl(316,`br`),ag()()(),Tl(317,`td`,17)(318,`code`,21),cN(319,`string`),ag()(),Tl(320,`td`,20)(321,`p`),cN(322,`Rótulo da ação.`),ag(),Tl(323,`p`),cN(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(325,`code`),cN(326,`subItems`),ag(),cN(327,`.`),ag()()(),Tl(328,`tr`,13)(329,`td`,14)(330,`div`,15)(331,`span`,16),cN(332,` selected`),Gl(333,`br`),ag()()(),Tl(334,`td`,17)(335,`code`,26),cN(336,`boolean`),ag()(),Tl(337,`td`,20)(338,`em`)(339,`strong`),cN(340,`(opcional)`),ag()(),Tl(341,`p`),cN(342,`Define se a ação está selecionada.`),ag()()(),Tl(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),cN(347,` separator`),Gl(348,`br`),ag()()(),Tl(349,`td`,17)(350,`code`,26),cN(351,`boolean`),ag()(),Tl(352,`td`,20)(353,`em`)(354,`strong`),cN(355,`(opcional)`),ag()(),Tl(356,`p`),cN(357,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(358,`tr`,13)(359,`td`,14)(360,`div`,15)(361,`span`,16),cN(362,` subItems`),Gl(363,`br`),ag()()(),Tl(364,`td`,17)(365,`code`,29),cN(366,`Array<PoPopupAction>`),ag()(),Tl(367,`td`,20)(368,`em`)(369,`strong`),cN(370,`(opcional)`),ag()(),Tl(371,`p`),cN(372,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(373,`p`),cN(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(375,`blockquote`)(376,`p`),cN(377,`As propriedades `),Tl(378,`code`),cN(379,`disabled`),ag(),cN(380,`, `),Tl(381,`code`),cN(382,`type`),ag(),cN(383,` e `),Tl(384,`code`),cN(385,`visible`),ag(),cN(386,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(387,`blockquote`)(388,`p`),cN(389,`Quando `),Tl(390,`code`),cN(391,`url`),ag(),cN(392,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(393,`blockquote`)(394,`p`),cN(395,`Em subníveis aninhados, o `),Tl(396,`code`),cN(397,`icon`),ag(),cN(398,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(399,`tr`,13)(400,`td`,14)(401,`div`,15)(402,`span`,16),cN(403,` type`),Gl(404,`br`),ag()()(),Tl(405,`td`,17)(406,`code`,21),cN(407,`string`),ag()(),Tl(408,`td`,20)(409,`em`)(410,`strong`),cN(411,`(opcional)`),ag()(),Tl(412,`p`),cN(413,`Define a cor do item.`),ag(),Tl(414,`p`),cN(415,`Valores válidos:`),ag(),Tl(416,`ul`)(417,`li`)(418,`code`),cN(419,`default`),ag()(),Tl(420,`li`)(421,`code`),cN(422,`danger`),ag()()()()(),Tl(423,`tr`,13)(424,`td`,14)(425,`div`,15)(426,`span`,16),cN(427,` url`),Gl(428,`br`),ag()()(),Tl(429,`td`,17)(430,`code`,21),cN(431,`string`),ag()(),Tl(432,`td`,20)(433,`em`)(434,`strong`),cN(435,`(opcional)`),ag()(),Tl(436,`p`),cN(437,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(438,`p`),cN(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(440,`code`),cN(441,`url`),ag(),cN(442,` é informada em um agrupador, o clique `),Tl(443,`strong`),cN(444,`não abrirá os subitens`),ag(),cN(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(446,`blockquote`)(447,`p`),cN(448,`Quando informada, tem prioridade sobre a propriedade `),Tl(449,`code`),cN(450,`action`),ag(),cN(451,`.`),ag()()()(),Tl(452,`tr`,13)(453,`td`,14)(454,`div`,15)(455,`span`,16),cN(456,` visible`),Gl(457,`br`),ag()()(),Tl(458,`td`,17)(459,`code`,26),cN(460,`boolean `),ag(),Tl(461,`code`,28),cN(462,` Function`),ag()(),Tl(463,`td`,20)(464,`em`)(465,`strong`),cN(466,`(opcional)`),ag()(),Tl(467,`p`),cN(468,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()(),Tl(469,`h4`,27)(470,`code`,5),cN(471,`PoToolbarProfile`),ag()(),Tl(472,`div`,2)(473,`p`),cN(474,`Interface que define o perfil do `),Tl(475,`code`),cN(476,`PoToolbarComponent`),ag(),cN(477,`.`),ag()(),Tl(478,`h4`,9),cN(479,`Propriedades`),ag(),Tl(480,`table`,10)(481,`tr`,11)(482,`th`,12),cN(483,`Nome`),ag(),Tl(484,`th`,12),cN(485,`Tipo`),ag(),Tl(486,`th`,12),cN(487,`Descrição`),ag()(),Tl(488,`tr`,13)(489,`td`,14)(490,`div`,15)(491,`span`,16),cN(492,` avatar`),Gl(493,`br`),ag()()(),Tl(494,`td`,17)(495,`code`,21),cN(496,`string`),ag()(),Tl(497,`td`,20)(498,`em`)(499,`strong`),cN(500,`(opcional)`),ag()(),Tl(501,`p`),cN(502,`Define o caminho da imagem do perfil.`),ag()()(),Tl(503,`tr`,13)(504,`td`,14)(505,`div`,15)(506,`span`,16),cN(507,` subtitle`),Gl(508,`br`),ag()()(),Tl(509,`td`,17)(510,`code`,21),cN(511,`string`),ag()(),Tl(512,`td`,20)(513,`em`)(514,`strong`),cN(515,`(opcional)`),ag()(),Tl(516,`p`),cN(517,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),ag()()(),Tl(518,`tr`,13)(519,`td`,14)(520,`div`,15)(521,`span`,16),cN(522,` title`),Gl(523,`br`),ag()()(),Tl(524,`td`,17)(525,`code`,21),cN(526,`string`),ag()(),Tl(527,`td`,20)(528,`p`),cN(529,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ae=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-toolbar-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-toolbar-basic-view`)(6,`sample-po-toolbar-labs-view`)(7,`sample-po-toolbar-logged-view`),ag()()()),p&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,se,de,ue],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[bL.forChild(Ae),bL]})}return a})();var rt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,fe]})}return a})();export{rt as DocPoToolbarModule};