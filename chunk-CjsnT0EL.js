import{Br as RE,Di as he,Dt as aae,Hn as AN,Kn as BP,Li as kL,M as Ete,Q as Pze,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,an as p4,b as Au,ci as be,dr as Hp,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,pt as Tze,qi as p0,qr as TE,r as Ta,rr as E,sa as ue$1,tr as DN,vi as f,vr as Jv,wt as _4}from"./main-VW33P2VM.js";var le=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Toolbar`]],template:function(p,n){p&1&&Kc(0,`po-toolbar`,0)},dependencies:[Tze],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Toolbar Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-toolbar-basic`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poNotification=f(Au);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:`danger`,label:`Danger`},{value:`default`,label:`Default`}];iconOptions=[{value:`an an-chats`,label:`an an-chats`},{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];actionsIconOptions=[{value:`an an-clock`,label:`an an-clock`},{value:`an an-sign-out`,label:`an an-sign-out`},{value:`an an-lock`,label:`an an-lock`},{value:`an an-gear`,label:`an an-gear`},{value:`far fa-comment-alt`,label:`far fa-comment-alt`}];toolbarActionTypes=[{label:`Actions`,value:`actions`},{label:`Profile`,value:`profile`},{label:`Notification`,value:`notification`}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType===`profile`?this.profileActions.push(n):this.toolbarActionType===`notification`?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:``,subtitle:``,title:``},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title=`PO Toolbar`}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-labs`]],standalone:!1,decls:33,vars:27,consts:[[`formAction`,`ngForm`],[`formProfile`,`ngForm`],[`formToolbar`,`ngForm`],[3,`p-actions`,`p-actions-icon`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-show-notification`,`p-title`],[1,`sample-container`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionIcon`,`p-clean`,``,`p-label`,`Action icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionUrl`,`p-clean`,``,`p-label`,`Action url`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionType`,`p-label`,`Action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionDisabled`,`p-clean`,``,`p-label`,`Action separator`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`toolbarActionType`,`p-columns`,`3`,`p-label`,`Toolbar action type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`actionsIcon`,`p-clean`,``,`p-label`,`Actions icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`profileTitle`,`p-clean`,``,`p-label`,`Profile title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileSubtitle`,`p-clean`,``,`p-label`,`Profile subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`profileAvatar`,`p-clean`,``,`p-label`,`Profile avatar`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`notificationNumber`,`p-clean`,``,`p-label`,`Notification number`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`showNotification`,`p-clean`,``,`p-label`,`Show notification`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(p,n){if(p&1){let s=Bx();Kc(0,`po-toolbar`,3),Ac(1,`div`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.action,i)||(n.action.action=i),e_(i)}),ug(),p0(),Ac(6,`po-select`,7),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.icon,i)||(n.action.icon=i),e_(i)}),ug(),p0(),Ac(7,`po-input`,8),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.label,i)||(n.action.label=i),e_(i)}),ug(),p0(),Ac(8,`po-input`,9),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.url,i)||(n.action.url=i),e_(i)}),ug(),p0(),Ac(9,`po-radio-group`,10),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.type,i)||(n.action.type=i),e_(i)}),ug(),p0(),Ac(10,`po-switch`,11),RE(`ngModelChange`,function(i){return Jv(s),DN(n.action.separator,i)||(n.action.separator=i),e_(i)}),ug(),p0(),Ac(11,`po-radio-group`,12),RE(`ngModelChange`,function(i){return Jv(s),DN(n.toolbarActionType,i)||(n.toolbarActionType=i),e_(i)}),ug(),p0(),ug(),Ac(12,`div`,5)(13,`po-button`,13),pt(`p-click`,function(){Jv(s);let i=Zx(3);return e_(n.addAction(n.action,i))}),ug()()(),Kc(14,`po-divider`),Ac(15,`div`,5)(16,`po-select`,14),RE(`ngModelChange`,function(i){return Jv(s),DN(n.actionsIcon,i)||(n.actionsIcon=i),e_(i)}),ug(),p0(),ug(),Kc(17,`po-divider`),Ac(18,`form`,null,1)(20,`div`,5)(21,`po-input`,15),RE(`ngModelChange`,function(i){return Jv(s),DN(n.profile.title,i)||(n.profile.title=i),e_(i)}),ug(),p0(),Ac(22,`po-input`,16),RE(`ngModelChange`,function(i){return Jv(s),DN(n.profile.subtitle,i)||(n.profile.subtitle=i),e_(i)}),ug(),p0(),Ac(23,`po-input`,17),RE(`ngModelChange`,function(i){return Jv(s),DN(n.profile.avatar,i)||(n.profile.avatar=i),e_(i)}),ug(),p0(),ug()(),Kc(24,`po-divider`),Ac(25,`form`,null,2)(27,`div`,5)(28,`po-input`,18),RE(`ngModelChange`,function(i){return Jv(s),DN(n.title,i)||(n.title=i),e_(i)}),ug(),p0(),Ac(29,`po-number`,19),RE(`ngModelChange`,function(i){return Jv(s),DN(n.notificationNumber,i)||(n.notificationNumber=i),e_(i)}),ug(),p0(),Ac(30,`po-switch`,20),RE(`ngModelChange`,function(i){return Jv(s),DN(n.showNotification,i)||(n.showNotification=i),e_(i)}),ug(),p0(),ug(),Ac(31,`div`,5)(32,`po-button`,21),pt(`p-click`,function(){Jv(s);let i=Zx(3),ge=Zx(19);return Zx(26).reset(),ge.reset(),i.reset(),e_(n.restore())}),ug()()()()}if(p&2){let s=Zx(3);cE(`p-actions`,n.actions)(`p-actions-icon`,n.actionsIcon)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.notificationNumber)(`p-show-notification`,n.showNotification)(`p-title`,n.title),Hp(5),TE(`ngModel`,n.action.action),m0(),Hp(),TE(`ngModel`,n.action.icon),cE(`p-options`,n.iconOptions),m0(),Hp(),TE(`ngModel`,n.action.label),m0(),Hp(),TE(`ngModel`,n.action.url),m0(),Hp(),TE(`ngModel`,n.action.type),cE(`p-options`,n.actionTypes),m0(),Hp(),TE(`ngModel`,n.action.separator),m0(),Hp(),TE(`ngModel`,n.toolbarActionType),cE(`p-options`,n.toolbarActionTypes),m0(),Hp(2),cE(`p-disabled`,s.invalid),Hp(3),TE(`ngModel`,n.actionsIcon),cE(`p-options`,n.actionsIconOptions),m0(),Hp(5),TE(`ngModel`,n.profile.title),m0(),Hp(),TE(`ngModel`,n.profile.subtitle),m0(),Hp(),TE(`ngModel`,n.profile.avatar),m0(),Hp(5),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.notificationNumber),m0(),Hp(),TE(`ngModel`,n.showNotification),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,Jne,Cte,ioe,p4,Tze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Toolbar Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<style>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-toolbar-labs`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poDialog=f(Ete);poNotification=f(Au);notificationActions=[{icon:`an an-newspaper`,label:`PO news, stay tuned!`,type:`danger`,action:l=>this.onClickNotification(l)},{icon:`an an-chat`,label:`New message`,type:`danger`,action:l=>this.openDialog(l)}];profile={avatar:`https://via.placeholder.com/48x48?text=AVATAR`,subtitle:`dev@po-ui.com.br`,title:`Mr. Dev PO`};profileActions=[{icon:`an an-user`,label:`User data`,action:l=>this.showAction(l)},{icon:`an an-building-apartment`,label:`Company data`,action:l=>this.showAction(l)},{icon:`an an-gear`,label:`Settings`,action:l=>this.showAction(l)},{icon:`an an-sign-out`,label:`Exit`,type:`danger`,separator:!0,action:l=>this.showAction(l)}];actions=[{label:`Start cash register`,action:l=>this.showAction(l)},{label:`Finalize cash register`,action:l=>this.showAction(l)},{label:`Cash register options`,action:l=>this.showAction(l)}];title=`PO Toolbar Logged`;getNotificationNumber(){return this.notificationActions.filter(l=>l.type===`danger`).length}onClickNotification(l){window.open(`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`,`_blank`),l.type=`default`}openDialog(l){this.poDialog.alert({title:`Welcome`,message:`Hello Mr. Dev! Congratulations, you are a TOTVS!`,ok:void 0}),l.type=`default`}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-logged`]],standalone:!1,features:[be([Au])],decls:8,vars:7,consts:[[`p-actions-icon`,`an an-shopping-cart-simple`,3,`p-actions`,`p-profile`,`p-profile-actions`,`p-notification-actions`,`p-notification-number`,`p-title`],[1,`po-row`],[1,`sample-container`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-subtitle`]],template:function(p,n){p&1&&(Kc(0,`po-toolbar`,0),Ac(1,`div`,1)(2,`div`,2)(3,`po-widget`,3)(4,`div`,4),vN(5),ug(),Ac(6,`div`,5),vN(7,`Let's work hard!`),ug()()()()),p&2&&(cE(`p-actions`,n.actions)(`p-profile`,n.profile)(`p-profile-actions`,n.profileActions)(`p-notification-actions`,n.notificationActions)(`p-notification-number`,n.getNotificationNumber())(`p-title`,n.title),Hp(5),mg(`Hello, `,n.profile.title,`.`))},dependencies:[Tze,Pze],styles:[`.sample-container[_ngcontent-%COMP%]{margin-top:50px}`],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-logged-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Toolbar - Logged`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<style>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-toolbar-logged`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-toolbar-doc`]],standalone:!1,decls:530,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoToolbarAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToolbarProfile`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(p,n){p&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoToolbarModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-toolbar`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoToolbarComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-toolbar`),ug(),vN(17,` é um cabeçalho para o título da aplicação e informações de usuário e notificações quando houver necessidade. `),ug()(),Ac(18,`div`,6)(19,`h4`,7),vN(20,`Seletor`),ug(),Ac(21,`pre`,8),vN(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),ug()(),Ac(23,`h4`,9),vN(24,`Propriedades`),ug(),Ac(25,`table`,10)(26,`tr`,11)(27,`th`,12),vN(28,`Nome`),ug(),Ac(29,`th`,12),vN(30,`Tipo`),ug(),Ac(31,`th`,12),vN(32,`Padrão`),ug(),Ac(33,`th`,12),vN(34,`Descrição`),ug()(),Ac(35,`tr`,13)(36,`td`,14)(37,`div`,15)(38,`span`,16),vN(39,` p-actions`),Kc(40,`br`),ug()()(),Ac(41,`td`,17)(42,`code`,18),vN(43,`Array<PoToolbarAction>`),ug()(),Ac(44,`td`,19),vN(45,`-`),ug(),Ac(46,`td`,20)(47,`em`)(48,`strong`),vN(49,`(opcional)`),ug()(),Ac(50,`p`),vN(51,`Define uma lista de ações que serão exibidas ao clicar no ícone declarado em `),Ac(52,`code`),vN(53,`p-actions-icon`),ug(),vN(54,`.`),ug()()(),Ac(55,`tr`,13)(56,`td`,14)(57,`div`,15)(58,`span`,16),vN(59,` p-actions-icon`),Kc(60,`br`),ug()()(),Ac(61,`td`,17)(62,`code`,21),vN(63,`string `),ug(),Ac(64,`code`,22),vN(65,` TemplateRef<void>`),ug()(),Ac(66,`td`,19)(67,`p`)(68,`code`),vN(69,`an-dots-three`),ug()()(),Ac(70,`td`,20)(71,`em`)(72,`strong`),vN(73,`(opcional)`),ug()(),Ac(74,`p`),vN(75,`Define um `),Ac(76,`a`,23),vN(77,`ícone`),ug(),vN(78,` para a propriedade `),Ac(79,`code`),vN(80,`p-actions`),ug(),vN(81,`.`),ug(),Ac(82,`p`),vN(83,`É possível usar qualquer um dos ícones da `),Ac(84,`a`,23),vN(85,`Biblioteca de ícones`),ug(),vN(86,`. conforme exemplo abaixo:`),ug(),Ac(87,`pre`)(88,`code`),vN(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),ug()(),Ac(90,`p`),vN(91,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(92,`em`),vN(93,`Font Awesome`),ug(),vN(94,`, da seguinte forma:`),ug(),Ac(95,`pre`)(96,`code`),vN(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),ug()(),Ac(98,`p`),vN(99,`Outra opção seria a customização do ícone através do `),Ac(100,`code`),vN(101,`TemplateRef`),ug(),vN(102,`, conforme exemplo abaixo:`),ug(),Ac(103,`pre`)(104,`code`),vN(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(106,`blockquote`)(107,`p`),vN(108,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(109,`code`),vN(110,`font-size: inherit`),ug(),vN(111,` caso o ícone utilizado não aplique-o.`),ug()(),Ac(112,`blockquote`)(113,`p`),vN(114,`Caso não haja ações definidas em `),Ac(115,`code`),vN(116,`p-actions`),ug(),vN(117,`, o ícone não será exibido.`),ug()()()(),Ac(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),vN(122,` p-notification-actions`),Kc(123,`br`),ug()()(),Ac(124,`td`,17)(125,`code`,18),vN(126,`Array<PoToolbarAction>`),ug()(),Ac(127,`td`,19),vN(128,`-`),ug(),Ac(129,`td`,20)(130,`em`)(131,`strong`),vN(132,`(opcional)`),ug()(),Ac(133,`p`),vN(134,`Lista de ações da notificação.`),ug()()(),Ac(135,`tr`,13)(136,`td`,14)(137,`div`,15)(138,`span`,16),vN(139,` p-notification-number`),Kc(140,`br`),ug()()(),Ac(141,`td`,17)(142,`code`,24),vN(143,`number`),ug()(),Ac(144,`td`,19),vN(145,`-`),ug(),Ac(146,`td`,20)(147,`em`)(148,`strong`),vN(149,`(opcional)`),ug()(),Ac(150,`p`),vN(151,`Número de notificações.`),ug()()(),Ac(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),vN(156,` p-profile`),Kc(157,`br`),ug()()(),Ac(158,`td`,17)(159,`code`,25),vN(160,`PoToolbarProfile`),ug()(),Ac(161,`td`,19),vN(162,`-`),ug(),Ac(163,`td`,20)(164,`em`)(165,`strong`),vN(166,`(opcional)`),ug()(),Ac(167,`p`),vN(168,`Define o objeto que será o cabeçalho da lista de ações com as informações do perfil.`),ug()()(),Ac(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),vN(173,` p-profile-actions`),Kc(174,`br`),ug()()(),Ac(175,`td`,17)(176,`code`,18),vN(177,`Array<PoToolbarAction>`),ug()(),Ac(178,`td`,19),vN(179,`-`),ug(),Ac(180,`td`,20)(181,`em`)(182,`strong`),vN(183,`(opcional)`),ug()(),Ac(184,`p`),vN(185,`Define uma lista de ações que serão exibidas ao clicar no ícone do perfil.`),ug()()(),Ac(186,`tr`,13)(187,`td`,14)(188,`div`,15)(189,`span`,16),vN(190,` p-show-notification`),Kc(191,`br`),ug()()(),Ac(192,`td`,17)(193,`code`,26),vN(194,`boolean`),ug()(),Ac(195,`td`,19),vN(196,`-`),ug(),Ac(197,`td`,20)(198,`em`)(199,`strong`),vN(200,`(opcional)`),ug()(),Ac(201,`p`),vN(202,`Se falso, oculta o ícone de notificações.`),ug()()(),Ac(203,`tr`,13)(204,`td`,14)(205,`div`,15)(206,`span`,16),vN(207,` p-title`),Kc(208,`br`),ug()()(),Ac(209,`td`,17)(210,`code`,21),vN(211,`string`),ug()(),Ac(212,`td`,19),vN(213,`-`),ug(),Ac(214,`td`,20)(215,`p`),vN(216,`Título do `),Ac(217,`em`),vN(218,`toolbar`),ug(),vN(219,` e aplicação.`),ug()()()(),Ac(220,`h3`),vN(221,`Interfaces`),ug(),Ac(222,`h4`,27)(223,`code`,5),vN(224,`PoToolbarAction`),ug()(),Ac(225,`div`,2)(226,`p`),vN(227,`Interface para lista de ações do componente. `),ug()(),Ac(228,`h4`,9),vN(229,`Propriedades`),ug(),Ac(230,`table`,10)(231,`tr`,11)(232,`th`,12),vN(233,`Nome`),ug(),Ac(234,`th`,12),vN(235,`Tipo`),ug(),Ac(236,`th`,12),vN(237,`Descrição`),ug()(),Ac(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),vN(242,` action`),Kc(243,`br`),ug()()(),Ac(244,`td`,17)(245,`code`,28),vN(246,`Function`),ug()(),Ac(247,`td`,20)(248,`em`)(249,`strong`),vN(250,`(opcional)`),ug()(),Ac(251,`p`),vN(252,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(253,`p`),vN(254,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(255,`code`),vN(256,`subItems`),ug(),vN(257,`.`),ug(),Ac(258,`blockquote`)(259,`p`),vN(260,`Para que a função seja executada no contexto do componente, utilize `),Ac(261,`em`),vN(262,`bind`),ug(),vN(263,`:
`),Ac(264,`code`),vN(265,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(266,`tr`,13)(267,`td`,14)(268,`div`,15)(269,`span`,16),vN(270,` disabled`),Kc(271,`br`),ug()()(),Ac(272,`td`,17)(273,`code`,26),vN(274,`boolean `),ug(),Ac(275,`code`,28),vN(276,` Function`),ug()(),Ac(277,`td`,20)(278,`em`)(279,`strong`),vN(280,`(opcional)`),ug()(),Ac(281,`p`),vN(282,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(283,`tr`,13)(284,`td`,14)(285,`div`,15)(286,`span`,16),vN(287,` icon`),Kc(288,`br`),ug()()(),Ac(289,`td`,17)(290,`code`,21),vN(291,`string `),ug(),Ac(292,`code`,22),vN(293,` TemplateRef<void>`),ug()(),Ac(294,`td`,20)(295,`em`)(296,`strong`),vN(297,`(opcional)`),ug()(),Ac(298,`p`),vN(299,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(300,`p`),vN(301,`Aceita ícones da `),Ac(302,`a`,23),vN(303,`Biblioteca de ícones`),ug(),vN(304,`, fontes externas (ex: Font Awesome)
ou um `),Ac(305,`code`),vN(306,`TemplateRef`),ug(),vN(307,` para ícones customizados.`),ug(),Ac(308,`pre`)(309,`code`),vN(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(311,`tr`,13)(312,`td`,14)(313,`div`,15)(314,`span`,16),vN(315,` label`),Kc(316,`br`),ug()()(),Ac(317,`td`,17)(318,`code`,21),vN(319,`string`),ug()(),Ac(320,`td`,20)(321,`p`),vN(322,`Rótulo da ação.`),ug(),Ac(323,`p`),vN(324,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(325,`code`),vN(326,`subItems`),ug(),vN(327,`.`),ug()()(),Ac(328,`tr`,13)(329,`td`,14)(330,`div`,15)(331,`span`,16),vN(332,` selected`),Kc(333,`br`),ug()()(),Ac(334,`td`,17)(335,`code`,26),vN(336,`boolean`),ug()(),Ac(337,`td`,20)(338,`em`)(339,`strong`),vN(340,`(opcional)`),ug()(),Ac(341,`p`),vN(342,`Define se a ação está selecionada.`),ug()()(),Ac(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),vN(347,` separator`),Kc(348,`br`),ug()()(),Ac(349,`td`,17)(350,`code`,26),vN(351,`boolean`),ug()(),Ac(352,`td`,20)(353,`em`)(354,`strong`),vN(355,`(opcional)`),ug()(),Ac(356,`p`),vN(357,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(358,`tr`,13)(359,`td`,14)(360,`div`,15)(361,`span`,16),vN(362,` subItems`),Kc(363,`br`),ug()()(),Ac(364,`td`,17)(365,`code`,29),vN(366,`Array<PoPopupAction>`),ug()(),Ac(367,`td`,20)(368,`em`)(369,`strong`),vN(370,`(opcional)`),ug()(),Ac(371,`p`),vN(372,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(373,`p`),vN(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(375,`blockquote`)(376,`p`),vN(377,`As propriedades `),Ac(378,`code`),vN(379,`disabled`),ug(),vN(380,`, `),Ac(381,`code`),vN(382,`type`),ug(),vN(383,` e `),Ac(384,`code`),vN(385,`visible`),ug(),vN(386,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(387,`blockquote`)(388,`p`),vN(389,`Quando `),Ac(390,`code`),vN(391,`url`),ug(),vN(392,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(393,`blockquote`)(394,`p`),vN(395,`Em subníveis aninhados, o `),Ac(396,`code`),vN(397,`icon`),ug(),vN(398,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(399,`tr`,13)(400,`td`,14)(401,`div`,15)(402,`span`,16),vN(403,` type`),Kc(404,`br`),ug()()(),Ac(405,`td`,17)(406,`code`,21),vN(407,`string`),ug()(),Ac(408,`td`,20)(409,`em`)(410,`strong`),vN(411,`(opcional)`),ug()(),Ac(412,`p`),vN(413,`Define a cor do item.`),ug(),Ac(414,`p`),vN(415,`Valores válidos:`),ug(),Ac(416,`ul`)(417,`li`)(418,`code`),vN(419,`default`),ug()(),Ac(420,`li`)(421,`code`),vN(422,`danger`),ug()()()()(),Ac(423,`tr`,13)(424,`td`,14)(425,`div`,15)(426,`span`,16),vN(427,` url`),Kc(428,`br`),ug()()(),Ac(429,`td`,17)(430,`code`,21),vN(431,`string`),ug()(),Ac(432,`td`,20)(433,`em`)(434,`strong`),vN(435,`(opcional)`),ug()(),Ac(436,`p`),vN(437,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(438,`p`),vN(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(440,`code`),vN(441,`url`),ug(),vN(442,` é informada em um agrupador, o clique `),Ac(443,`strong`),vN(444,`não abrirá os subitens`),ug(),vN(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(446,`blockquote`)(447,`p`),vN(448,`Quando informada, tem prioridade sobre a propriedade `),Ac(449,`code`),vN(450,`action`),ug(),vN(451,`.`),ug()()()(),Ac(452,`tr`,13)(453,`td`,14)(454,`div`,15)(455,`span`,16),vN(456,` visible`),Kc(457,`br`),ug()()(),Ac(458,`td`,17)(459,`code`,26),vN(460,`boolean `),ug(),Ac(461,`code`,28),vN(462,` Function`),ug()(),Ac(463,`td`,20)(464,`em`)(465,`strong`),vN(466,`(opcional)`),ug()(),Ac(467,`p`),vN(468,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(469,`h4`,27)(470,`code`,5),vN(471,`PoToolbarProfile`),ug()(),Ac(472,`div`,2)(473,`p`),vN(474,`Interface que define o perfil do `),Ac(475,`code`),vN(476,`PoToolbarComponent`),ug(),vN(477,`.`),ug()(),Ac(478,`h4`,9),vN(479,`Propriedades`),ug(),Ac(480,`table`,10)(481,`tr`,11)(482,`th`,12),vN(483,`Nome`),ug(),Ac(484,`th`,12),vN(485,`Tipo`),ug(),Ac(486,`th`,12),vN(487,`Descrição`),ug()(),Ac(488,`tr`,13)(489,`td`,14)(490,`div`,15)(491,`span`,16),vN(492,` avatar`),Kc(493,`br`),ug()()(),Ac(494,`td`,17)(495,`code`,21),vN(496,`string`),ug()(),Ac(497,`td`,20)(498,`em`)(499,`strong`),vN(500,`(opcional)`),ug()(),Ac(501,`p`),vN(502,`Define o caminho da imagem do perfil.`),ug()()(),Ac(503,`tr`,13)(504,`td`,14)(505,`div`,15)(506,`span`,16),vN(507,` subtitle`),Kc(508,`br`),ug()()(),Ac(509,`td`,17)(510,`code`,21),vN(511,`string`),ug()(),Ac(512,`td`,20)(513,`em`)(514,`strong`),vN(515,`(opcional)`),ug()(),Ac(516,`p`),vN(517,`Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usuário.`),ug()()(),Ac(518,`tr`,13)(519,`td`,14)(520,`div`,15)(521,`span`,16),vN(522,` title`),Kc(523,`br`),ug()()(),Ac(524,`td`,17)(525,`code`,21),vN(526,`string`),ug()(),Ac(527,`td`,20)(528,`p`),vN(529,`Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usuário.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ae=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Toolbar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-toolbar-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-toolbar-basic-view`)(6,`sample-po-toolbar-labs-view`)(7,`sample-po-toolbar-logged-view`),ug()()()),p&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[vze,tae,aae,pe,se,de,ue],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[kL.forChild(Ae),kL]})}return a})();var rt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[Ta,fe]})}return a})();export{rt as DocPoToolbarModule};