import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,c5 as zde,dm as _Ne,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,bH as E3,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,ba as bNe,X as we$1,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&Wl(0,"po-toolbar",0);},dependencies:[_Ne],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Toolbar Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-basic"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification=f(Yp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=Ex();Wl(0,"po-toolbar",3),Sl(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.action,i)||(n.action.action=i),Qy(i)}),sg(),JA(),Sl(6,"po-select",7),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.icon,i)||(n.action.icon=i),Qy(i)}),sg(),JA(),Sl(7,"po-input",8),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.label,i)||(n.action.label=i),Qy(i)}),sg(),JA(),Sl(8,"po-input",9),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.url,i)||(n.action.url=i),Qy(i)}),sg(),JA(),Sl(9,"po-radio-group",10),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.type,i)||(n.action.type=i),Qy(i)}),sg(),JA(),Sl(10,"po-switch",11),Ew("ngModelChange",function(i){return Xy(s),tN(n.action.separator,i)||(n.action.separator=i),Qy(i)}),sg(),JA(),Sl(11,"po-radio-group",12),Ew("ngModelChange",function(i){return Xy(s),tN(n.toolbarActionType,i)||(n.toolbarActionType=i),Qy(i)}),sg(),JA(),sg(),Sl(12,"div",5)(13,"po-button",13),ht("p-click",function(){Xy(s);let i=xx(3);return Qy(n.addAction(n.action,i))}),sg()()(),Wl(14,"po-divider"),Sl(15,"div",5)(16,"po-select",14),Ew("ngModelChange",function(i){return Xy(s),tN(n.actionsIcon,i)||(n.actionsIcon=i),Qy(i)}),sg(),JA(),sg(),Wl(17,"po-divider"),Sl(18,"form",null,1)(20,"div",5)(21,"po-input",15),Ew("ngModelChange",function(i){return Xy(s),tN(n.profile.title,i)||(n.profile.title=i),Qy(i)}),sg(),JA(),Sl(22,"po-input",16),Ew("ngModelChange",function(i){return Xy(s),tN(n.profile.subtitle,i)||(n.profile.subtitle=i),Qy(i)}),sg(),JA(),Sl(23,"po-input",17),Ew("ngModelChange",function(i){return Xy(s),tN(n.profile.avatar,i)||(n.profile.avatar=i),Qy(i)}),sg(),JA(),sg()(),Wl(24,"po-divider"),Sl(25,"form",null,2)(27,"div",5)(28,"po-input",18),Ew("ngModelChange",function(i){return Xy(s),tN(n.title,i)||(n.title=i),Qy(i)}),sg(),JA(),Sl(29,"po-number",19),Ew("ngModelChange",function(i){return Xy(s),tN(n.notificationNumber,i)||(n.notificationNumber=i),Qy(i)}),sg(),JA(),Sl(30,"po-switch",20),Ew("ngModelChange",function(i){return Xy(s),tN(n.showNotification,i)||(n.showNotification=i),Qy(i)}),sg(),JA(),sg(),Sl(31,"div",5)(32,"po-button",21),ht("p-click",function(){Xy(s);let i=xx(3),ge=xx(19);return xx(26).reset(),ge.reset(),i.reset(),Qy(n.restore())}),sg()()()();}if(p&2){let s=xx(3);tw("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Vp(5),Dw("ngModel",n.action.action),t0(),Vp(),Dw("ngModel",n.action.icon),tw("p-options",n.iconOptions),t0(),Vp(),Dw("ngModel",n.action.label),t0(),Vp(),Dw("ngModel",n.action.url),t0(),Vp(),Dw("ngModel",n.action.type),tw("p-options",n.actionTypes),t0(),Vp(),Dw("ngModel",n.action.separator),t0(),Vp(),Dw("ngModel",n.toolbarActionType),tw("p-options",n.toolbarActionTypes),t0(),Vp(2),tw("p-disabled",s.invalid),Vp(3),Dw("ngModel",n.actionsIcon),tw("p-options",n.actionsIconOptions),t0(),Vp(5),Dw("ngModel",n.profile.title),t0(),Vp(),Dw("ngModel",n.profile.subtitle),t0(),Vp(),Dw("ngModel",n.profile.avatar),t0(),Vp(5),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.notificationNumber),t0(),Vp(),Dw("ngModel",n.showNotification),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Uhe,Pde,Ghe,E3,_Ne],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Toolbar Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<style>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-labs"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return a})();var ce=(()=>{class a{poDialog=f(zde);poNotification=f(Yp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we$1([Yp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(Wl(0,"po-toolbar",0),Sl(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),Jx(5),sg(),Sl(6,"div",5),Jx(7,"Let's work hard!"),sg()()()()),p&2&&(tw("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Vp(5),fg("Hello, ",n.profile.title,"."));},dependencies:[_Ne,bNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Toolbar - Logged"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<style>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-logged"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-toolbar"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoToolbarComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-toolbar"),sg(),Jx(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),sg()(),Sl(18,"div",6)(19,"h4",7),Jx(20,"Seletor"),sg(),Sl(21,"pre",8),Jx(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),sg()(),Sl(23,"h4",9),Jx(24,"Propriedades"),sg(),Sl(25,"table",10)(26,"tr",11)(27,"th",12),Jx(28,"Nome"),sg(),Sl(29,"th",12),Jx(30,"Tipo"),sg(),Sl(31,"th",12),Jx(32,"Padr\xE3o"),sg(),Sl(33,"th",12),Jx(34,"Descri\xE7\xE3o"),sg()(),Sl(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),Jx(39," p-actions"),Wl(40,"br"),sg()()(),Sl(41,"td",17)(42,"code",18),Jx(43,"Array<PoToolbarAction>"),sg()(),Sl(44,"td",19),Jx(45,"-"),sg(),Sl(46,"td",20)(47,"em")(48,"strong"),Jx(49,"(opcional)"),sg()(),Sl(50,"p"),Jx(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),Sl(52,"code"),Jx(53,"p-actions-icon"),sg(),Jx(54,"."),sg()()(),Sl(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),Jx(59," p-actions-icon"),Wl(60,"br"),sg()()(),Sl(61,"td",17)(62,"code",21),Jx(63,"string "),sg(),Sl(64,"code",22),Jx(65," TemplateRef<void>"),sg()(),Sl(66,"td",19)(67,"p")(68,"code"),Jx(69,"an-dots-three"),sg()()(),Sl(70,"td",20)(71,"em")(72,"strong"),Jx(73,"(opcional)"),sg()(),Sl(74,"p"),Jx(75,"Define um "),Sl(76,"a",23),Jx(77,"\xEDcone"),sg(),Jx(78," para a propriedade "),Sl(79,"code"),Jx(80,"p-actions"),sg(),Jx(81,"."),sg(),Sl(82,"p"),Jx(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(84,"a",23),Jx(85,"Biblioteca de \xEDcones"),sg(),Jx(86,". conforme exemplo abaixo:"),sg(),Sl(87,"pre")(88,"code"),Jx(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),sg()(),Sl(90,"p"),Jx(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(92,"em"),Jx(93,"Font Awesome"),sg(),Jx(94,", da seguinte forma:"),sg(),Sl(95,"pre")(96,"code"),Jx(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),sg()(),Sl(98,"p"),Jx(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(100,"code"),Jx(101,"TemplateRef"),sg(),Jx(102,", conforme exemplo abaixo:"),sg(),Sl(103,"pre")(104,"code"),Jx(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(106,"blockquote")(107,"p"),Jx(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(109,"code"),Jx(110,"font-size: inherit"),sg(),Jx(111," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()(),Sl(112,"blockquote")(113,"p"),Jx(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),Sl(115,"code"),Jx(116,"p-actions"),sg(),Jx(117,", o \xEDcone n\xE3o ser\xE1 exibido."),sg()()()(),Sl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Jx(122," p-notification-actions"),Wl(123,"br"),sg()()(),Sl(124,"td",17)(125,"code",18),Jx(126,"Array<PoToolbarAction>"),sg()(),Sl(127,"td",19),Jx(128,"-"),sg(),Sl(129,"td",20)(130,"em")(131,"strong"),Jx(132,"(opcional)"),sg()(),Sl(133,"p"),Jx(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),sg()()(),Sl(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),Jx(139," p-notification-number"),Wl(140,"br"),sg()()(),Sl(141,"td",17)(142,"code",24),Jx(143,"number"),sg()(),Sl(144,"td",19),Jx(145,"-"),sg(),Sl(146,"td",20)(147,"em")(148,"strong"),Jx(149,"(opcional)"),sg()(),Sl(150,"p"),Jx(151,"N\xFAmero de notifica\xE7\xF5es."),sg()()(),Sl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),Jx(156," p-profile"),Wl(157,"br"),sg()()(),Sl(158,"td",17)(159,"code",25),Jx(160,"PoToolbarProfile"),sg()(),Sl(161,"td",19),Jx(162,"-"),sg(),Sl(163,"td",20)(164,"em")(165,"strong"),Jx(166,"(opcional)"),sg()(),Sl(167,"p"),Jx(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),sg()()(),Sl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Jx(173," p-profile-actions"),Wl(174,"br"),sg()()(),Sl(175,"td",17)(176,"code",18),Jx(177,"Array<PoToolbarAction>"),sg()(),Sl(178,"td",19),Jx(179,"-"),sg(),Sl(180,"td",20)(181,"em")(182,"strong"),Jx(183,"(opcional)"),sg()(),Sl(184,"p"),Jx(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),sg()()(),Sl(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),Jx(190," p-show-notification"),Wl(191,"br"),sg()()(),Sl(192,"td",17)(193,"code",26),Jx(194,"boolean"),sg()(),Sl(195,"td",19),Jx(196,"-"),sg(),Sl(197,"td",20)(198,"em")(199,"strong"),Jx(200,"(opcional)"),sg()(),Sl(201,"p"),Jx(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),sg()()(),Sl(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),Jx(207," p-title"),Wl(208,"br"),sg()()(),Sl(209,"td",17)(210,"code",21),Jx(211,"string"),sg()(),Sl(212,"td",19),Jx(213,"-"),sg(),Sl(214,"td",20)(215,"p"),Jx(216,"T\xEDtulo do "),Sl(217,"em"),Jx(218,"toolbar"),sg(),Jx(219," e aplica\xE7\xE3o."),sg()()()(),Sl(220,"h3"),Jx(221,"Interfaces"),sg(),Sl(222,"h4",27)(223,"code",5),Jx(224,"PoToolbarAction"),sg()(),Sl(225,"div",2)(226,"p"),Jx(227,"Interface para lista de a\xE7\xF5es do componente. "),sg()(),Sl(228,"h4",9),Jx(229,"Propriedades"),sg(),Sl(230,"table",10)(231,"tr",11)(232,"th",12),Jx(233,"Nome"),sg(),Sl(234,"th",12),Jx(235,"Tipo"),sg(),Sl(236,"th",12),Jx(237,"Descri\xE7\xE3o"),sg()(),Sl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Jx(242," action"),Wl(243,"br"),sg()()(),Sl(244,"td",17)(245,"code",28),Jx(246,"Function"),sg()(),Sl(247,"td",20)(248,"em")(249,"strong"),Jx(250,"(opcional)"),sg()(),Sl(251,"p"),Jx(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(253,"p"),Jx(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(255,"code"),Jx(256,"subItems"),sg(),Jx(257,"."),sg(),Sl(258,"blockquote")(259,"p"),Jx(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(261,"em"),Jx(262,"bind"),sg(),Jx(263,`:
`),Sl(264,"code"),Jx(265,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),Jx(270," disabled"),Wl(271,"br"),sg()()(),Sl(272,"td",17)(273,"code",26),Jx(274,"boolean "),sg(),Sl(275,"code",28),Jx(276," Function"),sg()(),Sl(277,"td",20)(278,"em")(279,"strong"),Jx(280,"(opcional)"),sg()(),Sl(281,"p"),Jx(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),Jx(287," icon"),Wl(288,"br"),sg()()(),Sl(289,"td",17)(290,"code",21),Jx(291,"string "),sg(),Sl(292,"code",22),Jx(293," TemplateRef<void>"),sg()(),Sl(294,"td",20)(295,"em")(296,"strong"),Jx(297,"(opcional)"),sg()(),Sl(298,"p"),Jx(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(300,"p"),Jx(301,"Aceita \xEDcones da "),Sl(302,"a",23),Jx(303,"Biblioteca de \xEDcones"),sg(),Jx(304,`, fontes externas (ex: Font Awesome)
ou um `),Sl(305,"code"),Jx(306,"TemplateRef"),sg(),Jx(307," para \xEDcones customizados."),sg(),Sl(308,"pre")(309,"code"),Jx(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),Jx(315," label"),Wl(316,"br"),sg()()(),Sl(317,"td",17)(318,"code",21),Jx(319,"string"),sg()(),Sl(320,"td",20)(321,"p"),Jx(322,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(323,"p"),Jx(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(325,"code"),Jx(326,"subItems"),sg(),Jx(327,"."),sg()()(),Sl(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),Jx(332," selected"),Wl(333,"br"),sg()()(),Sl(334,"td",17)(335,"code",26),Jx(336,"boolean"),sg()(),Sl(337,"td",20)(338,"em")(339,"strong"),Jx(340,"(opcional)"),sg()(),Sl(341,"p"),Jx(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),Jx(347," separator"),Wl(348,"br"),sg()()(),Sl(349,"td",17)(350,"code",26),Jx(351,"boolean"),sg()(),Sl(352,"td",20)(353,"em")(354,"strong"),Jx(355,"(opcional)"),sg()(),Sl(356,"p"),Jx(357,"Atribui uma linha separadora acima do item."),sg()()(),Sl(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),Jx(362," subItems"),Wl(363,"br"),sg()()(),Sl(364,"td",17)(365,"code",29),Jx(366,"Array<PoPopupAction>"),sg()(),Sl(367,"td",20)(368,"em")(369,"strong"),Jx(370,"(opcional)"),sg()(),Sl(371,"p"),Jx(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(373,"p"),Jx(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(375,"blockquote")(376,"p"),Jx(377,"As propriedades "),Sl(378,"code"),Jx(379,"disabled"),sg(),Jx(380,", "),Sl(381,"code"),Jx(382,"type"),sg(),Jx(383," e "),Sl(384,"code"),Jx(385,"visible"),sg(),Jx(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(387,"blockquote")(388,"p"),Jx(389,"Quando "),Sl(390,"code"),Jx(391,"url"),sg(),Jx(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(393,"blockquote")(394,"p"),Jx(395,"Em subn\xEDveis aninhados, o "),Sl(396,"code"),Jx(397,"icon"),sg(),Jx(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),Jx(403," type"),Wl(404,"br"),sg()()(),Sl(405,"td",17)(406,"code",21),Jx(407,"string"),sg()(),Sl(408,"td",20)(409,"em")(410,"strong"),Jx(411,"(opcional)"),sg()(),Sl(412,"p"),Jx(413,"Define a cor do item."),sg(),Sl(414,"p"),Jx(415,"Valores v\xE1lidos:"),sg(),Sl(416,"ul")(417,"li")(418,"code"),Jx(419,"default"),sg()(),Sl(420,"li")(421,"code"),Jx(422,"danger"),sg()()()()(),Sl(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),Jx(427," url"),Wl(428,"br"),sg()()(),Sl(429,"td",17)(430,"code",21),Jx(431,"string"),sg()(),Sl(432,"td",20)(433,"em")(434,"strong"),Jx(435,"(opcional)"),sg()(),Sl(436,"p"),Jx(437,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(438,"p"),Jx(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(440,"code"),Jx(441,"url"),sg(),Jx(442," \xE9 informada em um agrupador, o clique "),Sl(443,"strong"),Jx(444,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(446,"blockquote")(447,"p"),Jx(448,"Quando informada, tem prioridade sobre a propriedade "),Sl(449,"code"),Jx(450,"action"),sg(),Jx(451,"."),sg()()()(),Sl(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),Jx(456," visible"),Wl(457,"br"),sg()()(),Sl(458,"td",17)(459,"code",26),Jx(460,"boolean "),sg(),Sl(461,"code",28),Jx(462," Function"),sg()(),Sl(463,"td",20)(464,"em")(465,"strong"),Jx(466,"(opcional)"),sg()(),Sl(467,"p"),Jx(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Sl(469,"h4",27)(470,"code",5),Jx(471,"PoToolbarProfile"),sg()(),Sl(472,"div",2)(473,"p"),Jx(474,"Interface que define o perfil do "),Sl(475,"code"),Jx(476,"PoToolbarComponent"),sg(),Jx(477,"."),sg()(),Sl(478,"h4",9),Jx(479,"Propriedades"),sg(),Sl(480,"table",10)(481,"tr",11)(482,"th",12),Jx(483,"Nome"),sg(),Sl(484,"th",12),Jx(485,"Tipo"),sg(),Sl(486,"th",12),Jx(487,"Descri\xE7\xE3o"),sg()(),Sl(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),Jx(492," avatar"),Wl(493,"br"),sg()()(),Sl(494,"td",17)(495,"code",21),Jx(496,"string"),sg()(),Sl(497,"td",20)(498,"em")(499,"strong"),Jx(500,"(opcional)"),sg()(),Sl(501,"p"),Jx(502,"Define o caminho da imagem do perfil."),sg()()(),Sl(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),Jx(507," subtitle"),Wl(508,"br"),sg()()(),Sl(509,"td",17)(510,"code",21),Jx(511,"string"),sg()(),Sl(512,"td",20)(513,"em")(514,"strong"),Jx(515,"(opcional)"),sg()(),Sl(516,"p"),Jx(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),sg()()(),Sl(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),Jx(522," title"),Wl(523,"br"),sg()()(),Sl(524,"td",17)(525,"code",21),Jx(526,"string"),sg()(),Sl(527,"td",20)(528,"p"),Jx(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-toolbar-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),sg()()()),p&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,se,de,ue],encapsulation:2})}return a})();var Ae=[{path:"",component:be}],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(Ae),pL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,fe]})}return a})();export{rt as DocPoToolbarModule};