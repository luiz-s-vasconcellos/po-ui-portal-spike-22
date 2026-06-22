import {f as fe$1,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,c5 as Ode,dl as mNe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,cp as Nhe,c8 as Sde,aJ as Uhe,bH as k3,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,ba as gNe,O as we$1,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&Gl(0,"po-toolbar",0);},dependencies:[mNe],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Toolbar Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toolbar-basic"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ee,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification=f(Yp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=Cx();Gl(0,"po-toolbar",3),Tl(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.action,i)||(n.action.action=i),Xy(i)}),sg(),t0(),Tl(6,"po-select",7),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.icon,i)||(n.action.icon=i),Xy(i)}),sg(),t0(),Tl(7,"po-input",8),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.label,i)||(n.action.label=i),Xy(i)}),sg(),t0(),Tl(8,"po-input",9),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.url,i)||(n.action.url=i),Xy(i)}),sg(),t0(),Tl(9,"po-radio-group",10),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.type,i)||(n.action.type=i),Xy(i)}),sg(),t0(),Tl(10,"po-switch",11),Ew("ngModelChange",function(i){return Ky(s),rN(n.action.separator,i)||(n.action.separator=i),Xy(i)}),sg(),t0(),Tl(11,"po-radio-group",12),Ew("ngModelChange",function(i){return Ky(s),rN(n.toolbarActionType,i)||(n.toolbarActionType=i),Xy(i)}),sg(),t0(),sg(),Tl(12,"div",5)(13,"po-button",13),ht("p-click",function(){Ky(s);let i=Ox(3);return Xy(n.addAction(n.action,i))}),sg()()(),Gl(14,"po-divider"),Tl(15,"div",5)(16,"po-select",14),Ew("ngModelChange",function(i){return Ky(s),rN(n.actionsIcon,i)||(n.actionsIcon=i),Xy(i)}),sg(),t0(),sg(),Gl(17,"po-divider"),Tl(18,"form",null,1)(20,"div",5)(21,"po-input",15),Ew("ngModelChange",function(i){return Ky(s),rN(n.profile.title,i)||(n.profile.title=i),Xy(i)}),sg(),t0(),Tl(22,"po-input",16),Ew("ngModelChange",function(i){return Ky(s),rN(n.profile.subtitle,i)||(n.profile.subtitle=i),Xy(i)}),sg(),t0(),Tl(23,"po-input",17),Ew("ngModelChange",function(i){return Ky(s),rN(n.profile.avatar,i)||(n.profile.avatar=i),Xy(i)}),sg(),t0(),sg()(),Gl(24,"po-divider"),Tl(25,"form",null,2)(27,"div",5)(28,"po-input",18),Ew("ngModelChange",function(i){return Ky(s),rN(n.title,i)||(n.title=i),Xy(i)}),sg(),t0(),Tl(29,"po-number",19),Ew("ngModelChange",function(i){return Ky(s),rN(n.notificationNumber,i)||(n.notificationNumber=i),Xy(i)}),sg(),t0(),Tl(30,"po-switch",20),Ew("ngModelChange",function(i){return Ky(s),rN(n.showNotification,i)||(n.showNotification=i),Xy(i)}),sg(),t0(),sg(),Tl(31,"div",5)(32,"po-button",21),ht("p-click",function(){Ky(s);let i=Ox(3),ge=Ox(19);return Ox(26).reset(),ge.reset(),i.reset(),Xy(n.restore())}),sg()()()();}if(p&2){let s=Ox(3);tw("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Vp(5),Dw("ngModel",n.action.action),r0(),Vp(),Dw("ngModel",n.action.icon),tw("p-options",n.iconOptions),r0(),Vp(),Dw("ngModel",n.action.label),r0(),Vp(),Dw("ngModel",n.action.url),r0(),Vp(),Dw("ngModel",n.action.type),tw("p-options",n.actionTypes),r0(),Vp(),Dw("ngModel",n.action.separator),r0(),Vp(),Dw("ngModel",n.toolbarActionType),tw("p-options",n.toolbarActionTypes),r0(),Vp(2),tw("p-disabled",s.invalid),Vp(3),Dw("ngModel",n.actionsIcon),tw("p-options",n.actionsIconOptions),r0(),Vp(5),Dw("ngModel",n.profile.title),r0(),Vp(),Dw("ngModel",n.profile.subtitle),r0(),Vp(),Dw("ngModel",n.profile.avatar),r0(),Vp(5),Dw("ngModel",n.title),r0(),Vp(),Dw("ngModel",n.notificationNumber),r0(),Vp(),Dw("ngModel",n.showNotification),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Nhe,Sde,Uhe,k3,mNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Toolbar Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<style>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toolbar-labs"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ve,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return a})();var ce=(()=>{class a{poDialog=f(Ode);poNotification=f(Yp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we$1([Yp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(Gl(0,"po-toolbar",0),Tl(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),tN(5),sg(),Tl(6,"div",5),tN(7,"Let's work hard!"),sg()()()()),p&2&&(tw("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Vp(5),fg("Hello, ",n.profile.title,"."));},dependencies:[mNe,gNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Toolbar - Logged"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),sg(),Tl(13,"pre",7),tN(14,`<style>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-toolbar-logged"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,we,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ce],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-toolbar"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoToolbarComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-toolbar"),sg(),tN(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),sg()(),Tl(18,"div",6)(19,"h4",7),tN(20,"Seletor"),sg(),Tl(21,"pre",8),tN(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),sg()(),Tl(23,"h4",9),tN(24,"Propriedades"),sg(),Tl(25,"table",10)(26,"tr",11)(27,"th",12),tN(28,"Nome"),sg(),Tl(29,"th",12),tN(30,"Tipo"),sg(),Tl(31,"th",12),tN(32,"Padr\xE3o"),sg(),Tl(33,"th",12),tN(34,"Descri\xE7\xE3o"),sg()(),Tl(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),tN(39," p-actions"),Gl(40,"br"),sg()()(),Tl(41,"td",17)(42,"code",18),tN(43,"Array<PoToolbarAction>"),sg()(),Tl(44,"td",19),tN(45,"-"),sg(),Tl(46,"td",20)(47,"em")(48,"strong"),tN(49,"(opcional)"),sg()(),Tl(50,"p"),tN(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),Tl(52,"code"),tN(53,"p-actions-icon"),sg(),tN(54,"."),sg()()(),Tl(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),tN(59," p-actions-icon"),Gl(60,"br"),sg()()(),Tl(61,"td",17)(62,"code",21),tN(63,"string "),sg(),Tl(64,"code",22),tN(65," TemplateRef<void>"),sg()(),Tl(66,"td",19)(67,"p")(68,"code"),tN(69,"an-dots-three"),sg()()(),Tl(70,"td",20)(71,"em")(72,"strong"),tN(73,"(opcional)"),sg()(),Tl(74,"p"),tN(75,"Define um "),Tl(76,"a",23),tN(77,"\xEDcone"),sg(),tN(78," para a propriedade "),Tl(79,"code"),tN(80,"p-actions"),sg(),tN(81,"."),sg(),Tl(82,"p"),tN(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(84,"a",23),tN(85,"Biblioteca de \xEDcones"),sg(),tN(86,". conforme exemplo abaixo:"),sg(),Tl(87,"pre")(88,"code"),tN(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),sg()(),Tl(90,"p"),tN(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(92,"em"),tN(93,"Font Awesome"),sg(),tN(94,", da seguinte forma:"),sg(),Tl(95,"pre")(96,"code"),tN(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),sg()(),Tl(98,"p"),tN(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(100,"code"),tN(101,"TemplateRef"),sg(),tN(102,", conforme exemplo abaixo:"),sg(),Tl(103,"pre")(104,"code"),tN(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(106,"blockquote")(107,"p"),tN(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(109,"code"),tN(110,"font-size: inherit"),sg(),tN(111," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()(),Tl(112,"blockquote")(113,"p"),tN(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),Tl(115,"code"),tN(116,"p-actions"),sg(),tN(117,", o \xEDcone n\xE3o ser\xE1 exibido."),sg()()()(),Tl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),tN(122," p-notification-actions"),Gl(123,"br"),sg()()(),Tl(124,"td",17)(125,"code",18),tN(126,"Array<PoToolbarAction>"),sg()(),Tl(127,"td",19),tN(128,"-"),sg(),Tl(129,"td",20)(130,"em")(131,"strong"),tN(132,"(opcional)"),sg()(),Tl(133,"p"),tN(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),sg()()(),Tl(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),tN(139," p-notification-number"),Gl(140,"br"),sg()()(),Tl(141,"td",17)(142,"code",24),tN(143,"number"),sg()(),Tl(144,"td",19),tN(145,"-"),sg(),Tl(146,"td",20)(147,"em")(148,"strong"),tN(149,"(opcional)"),sg()(),Tl(150,"p"),tN(151,"N\xFAmero de notifica\xE7\xF5es."),sg()()(),Tl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),tN(156," p-profile"),Gl(157,"br"),sg()()(),Tl(158,"td",17)(159,"code",25),tN(160,"PoToolbarProfile"),sg()(),Tl(161,"td",19),tN(162,"-"),sg(),Tl(163,"td",20)(164,"em")(165,"strong"),tN(166,"(opcional)"),sg()(),Tl(167,"p"),tN(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),sg()()(),Tl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),tN(173," p-profile-actions"),Gl(174,"br"),sg()()(),Tl(175,"td",17)(176,"code",18),tN(177,"Array<PoToolbarAction>"),sg()(),Tl(178,"td",19),tN(179,"-"),sg(),Tl(180,"td",20)(181,"em")(182,"strong"),tN(183,"(opcional)"),sg()(),Tl(184,"p"),tN(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),sg()()(),Tl(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),tN(190," p-show-notification"),Gl(191,"br"),sg()()(),Tl(192,"td",17)(193,"code",26),tN(194,"boolean"),sg()(),Tl(195,"td",19),tN(196,"-"),sg(),Tl(197,"td",20)(198,"em")(199,"strong"),tN(200,"(opcional)"),sg()(),Tl(201,"p"),tN(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),sg()()(),Tl(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),tN(207," p-title"),Gl(208,"br"),sg()()(),Tl(209,"td",17)(210,"code",21),tN(211,"string"),sg()(),Tl(212,"td",19),tN(213,"-"),sg(),Tl(214,"td",20)(215,"p"),tN(216,"T\xEDtulo do "),Tl(217,"em"),tN(218,"toolbar"),sg(),tN(219," e aplica\xE7\xE3o."),sg()()()(),Tl(220,"h3"),tN(221,"Interfaces"),sg(),Tl(222,"h4",27)(223,"code",5),tN(224,"PoToolbarAction"),sg()(),Tl(225,"div",2)(226,"p"),tN(227,"Interface para lista de a\xE7\xF5es do componente. "),sg()(),Tl(228,"h4",9),tN(229,"Propriedades"),sg(),Tl(230,"table",10)(231,"tr",11)(232,"th",12),tN(233,"Nome"),sg(),Tl(234,"th",12),tN(235,"Tipo"),sg(),Tl(236,"th",12),tN(237,"Descri\xE7\xE3o"),sg()(),Tl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),tN(242," action"),Gl(243,"br"),sg()()(),Tl(244,"td",17)(245,"code",28),tN(246,"Function"),sg()(),Tl(247,"td",20)(248,"em")(249,"strong"),tN(250,"(opcional)"),sg()(),Tl(251,"p"),tN(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(253,"p"),tN(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(255,"code"),tN(256,"subItems"),sg(),tN(257,"."),sg(),Tl(258,"blockquote")(259,"p"),tN(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(261,"em"),tN(262,"bind"),sg(),tN(263,`:
`),Tl(264,"code"),tN(265,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),tN(270," disabled"),Gl(271,"br"),sg()()(),Tl(272,"td",17)(273,"code",26),tN(274,"boolean "),sg(),Tl(275,"code",28),tN(276," Function"),sg()(),Tl(277,"td",20)(278,"em")(279,"strong"),tN(280,"(opcional)"),sg()(),Tl(281,"p"),tN(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),tN(287," icon"),Gl(288,"br"),sg()()(),Tl(289,"td",17)(290,"code",21),tN(291,"string "),sg(),Tl(292,"code",22),tN(293," TemplateRef<void>"),sg()(),Tl(294,"td",20)(295,"em")(296,"strong"),tN(297,"(opcional)"),sg()(),Tl(298,"p"),tN(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(300,"p"),tN(301,"Aceita \xEDcones da "),Tl(302,"a",23),tN(303,"Biblioteca de \xEDcones"),sg(),tN(304,`, fontes externas (ex: Font Awesome)
ou um `),Tl(305,"code"),tN(306,"TemplateRef"),sg(),tN(307," para \xEDcones customizados."),sg(),Tl(308,"pre")(309,"code"),tN(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),tN(315," label"),Gl(316,"br"),sg()()(),Tl(317,"td",17)(318,"code",21),tN(319,"string"),sg()(),Tl(320,"td",20)(321,"p"),tN(322,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(323,"p"),tN(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(325,"code"),tN(326,"subItems"),sg(),tN(327,"."),sg()()(),Tl(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),tN(332," selected"),Gl(333,"br"),sg()()(),Tl(334,"td",17)(335,"code",26),tN(336,"boolean"),sg()(),Tl(337,"td",20)(338,"em")(339,"strong"),tN(340,"(opcional)"),sg()(),Tl(341,"p"),tN(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),tN(347," separator"),Gl(348,"br"),sg()()(),Tl(349,"td",17)(350,"code",26),tN(351,"boolean"),sg()(),Tl(352,"td",20)(353,"em")(354,"strong"),tN(355,"(opcional)"),sg()(),Tl(356,"p"),tN(357,"Atribui uma linha separadora acima do item."),sg()()(),Tl(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),tN(362," subItems"),Gl(363,"br"),sg()()(),Tl(364,"td",17)(365,"code",29),tN(366,"Array<PoPopupAction>"),sg()(),Tl(367,"td",20)(368,"em")(369,"strong"),tN(370,"(opcional)"),sg()(),Tl(371,"p"),tN(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(373,"p"),tN(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(375,"blockquote")(376,"p"),tN(377,"As propriedades "),Tl(378,"code"),tN(379,"disabled"),sg(),tN(380,", "),Tl(381,"code"),tN(382,"type"),sg(),tN(383," e "),Tl(384,"code"),tN(385,"visible"),sg(),tN(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(387,"blockquote")(388,"p"),tN(389,"Quando "),Tl(390,"code"),tN(391,"url"),sg(),tN(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(393,"blockquote")(394,"p"),tN(395,"Em subn\xEDveis aninhados, o "),Tl(396,"code"),tN(397,"icon"),sg(),tN(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),tN(403," type"),Gl(404,"br"),sg()()(),Tl(405,"td",17)(406,"code",21),tN(407,"string"),sg()(),Tl(408,"td",20)(409,"em")(410,"strong"),tN(411,"(opcional)"),sg()(),Tl(412,"p"),tN(413,"Define a cor do item."),sg(),Tl(414,"p"),tN(415,"Valores v\xE1lidos:"),sg(),Tl(416,"ul")(417,"li")(418,"code"),tN(419,"default"),sg()(),Tl(420,"li")(421,"code"),tN(422,"danger"),sg()()()()(),Tl(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),tN(427," url"),Gl(428,"br"),sg()()(),Tl(429,"td",17)(430,"code",21),tN(431,"string"),sg()(),Tl(432,"td",20)(433,"em")(434,"strong"),tN(435,"(opcional)"),sg()(),Tl(436,"p"),tN(437,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(438,"p"),tN(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(440,"code"),tN(441,"url"),sg(),tN(442," \xE9 informada em um agrupador, o clique "),Tl(443,"strong"),tN(444,"n\xE3o abrir\xE1 os subitens"),sg(),tN(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(446,"blockquote")(447,"p"),tN(448,"Quando informada, tem prioridade sobre a propriedade "),Tl(449,"code"),tN(450,"action"),sg(),tN(451,"."),sg()()()(),Tl(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),tN(456," visible"),Gl(457,"br"),sg()()(),Tl(458,"td",17)(459,"code",26),tN(460,"boolean "),sg(),Tl(461,"code",28),tN(462," Function"),sg()(),Tl(463,"td",20)(464,"em")(465,"strong"),tN(466,"(opcional)"),sg()(),Tl(467,"p"),tN(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(469,"h4",27)(470,"code",5),tN(471,"PoToolbarProfile"),sg()(),Tl(472,"div",2)(473,"p"),tN(474,"Interface que define o perfil do "),Tl(475,"code"),tN(476,"PoToolbarComponent"),sg(),tN(477,"."),sg()(),Tl(478,"h4",9),tN(479,"Propriedades"),sg(),Tl(480,"table",10)(481,"tr",11)(482,"th",12),tN(483,"Nome"),sg(),Tl(484,"th",12),tN(485,"Tipo"),sg(),Tl(486,"th",12),tN(487,"Descri\xE7\xE3o"),sg()(),Tl(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),tN(492," avatar"),Gl(493,"br"),sg()()(),Tl(494,"td",17)(495,"code",21),tN(496,"string"),sg()(),Tl(497,"td",20)(498,"em")(499,"strong"),tN(500,"(opcional)"),sg()(),Tl(501,"p"),tN(502,"Define o caminho da imagem do perfil."),sg()()(),Tl(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),tN(507," subtitle"),Gl(508,"br"),sg()()(),Tl(509,"td",17)(510,"code",21),tN(511,"string"),sg()(),Tl(512,"td",20)(513,"em")(514,"strong"),tN(515,"(opcional)"),sg()(),Tl(516,"p"),tN(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),sg()()(),Tl(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),tN(522," title"),Gl(523,"br"),sg()()(),Tl(524,"td",17)(525,"code",21),tN(526,"string"),sg()(),Tl(527,"td",20)(528,"p"),tN(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-toolbar-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),sg()()()),p&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,pe,se,de,ue],encapsulation:2})}return a})();var Ae=[{path:"",component:be}],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[vL.forChild(Ae),vL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,fe]})}return a})();export{rt as DocPoToolbarModule};