import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,c9 as Qde,ds as INe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,b9 as ONe,W as we$1,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&Hl(0,"po-toolbar",0);},dependencies:[INe],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Toolbar Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-toolbar-basic"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification=f(Xp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=gx();Hl(0,"po-toolbar",3),Cl(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.action,i)||(n.action.action=i),e_(i)}),og(),Z0(),Cl(6,"po-select",7),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.icon,i)||(n.action.icon=i),e_(i)}),og(),Z0(),Cl(7,"po-input",8),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.label,i)||(n.action.label=i),e_(i)}),og(),Z0(),Cl(8,"po-input",9),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.url,i)||(n.action.url=i),e_(i)}),og(),Z0(),Cl(9,"po-radio-group",10),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.type,i)||(n.action.type=i),e_(i)}),og(),Z0(),Cl(10,"po-switch",11),gw("ngModelChange",function(i){return Jy(s),Zx(n.action.separator,i)||(n.action.separator=i),e_(i)}),og(),Z0(),Cl(11,"po-radio-group",12),gw("ngModelChange",function(i){return Jy(s),Zx(n.toolbarActionType,i)||(n.toolbarActionType=i),e_(i)}),og(),Z0(),og(),Cl(12,"div",5)(13,"po-button",13),dt("p-click",function(){Jy(s);let i=Sx(3);return e_(n.addAction(n.action,i))}),og()()(),Hl(14,"po-divider"),Cl(15,"div",5)(16,"po-select",14),gw("ngModelChange",function(i){return Jy(s),Zx(n.actionsIcon,i)||(n.actionsIcon=i),e_(i)}),og(),Z0(),og(),Hl(17,"po-divider"),Cl(18,"form",null,1)(20,"div",5)(21,"po-input",15),gw("ngModelChange",function(i){return Jy(s),Zx(n.profile.title,i)||(n.profile.title=i),e_(i)}),og(),Z0(),Cl(22,"po-input",16),gw("ngModelChange",function(i){return Jy(s),Zx(n.profile.subtitle,i)||(n.profile.subtitle=i),e_(i)}),og(),Z0(),Cl(23,"po-input",17),gw("ngModelChange",function(i){return Jy(s),Zx(n.profile.avatar,i)||(n.profile.avatar=i),e_(i)}),og(),Z0(),og()(),Hl(24,"po-divider"),Cl(25,"form",null,2)(27,"div",5)(28,"po-input",18),gw("ngModelChange",function(i){return Jy(s),Zx(n.title,i)||(n.title=i),e_(i)}),og(),Z0(),Cl(29,"po-number",19),gw("ngModelChange",function(i){return Jy(s),Zx(n.notificationNumber,i)||(n.notificationNumber=i),e_(i)}),og(),Z0(),Cl(30,"po-switch",20),gw("ngModelChange",function(i){return Jy(s),Zx(n.showNotification,i)||(n.showNotification=i),e_(i)}),og(),Z0(),og(),Cl(31,"div",5)(32,"po-button",21),dt("p-click",function(){Jy(s);let i=Sx(3),ge=Sx(19);return Sx(26).reset(),ge.reset(),i.reset(),e_(n.restore())}),og()()()();}if(p&2){let s=Sx(3);ZE("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Lp(5),pw("ngModel",n.action.action),X0(),Lp(),pw("ngModel",n.action.icon),ZE("p-options",n.iconOptions),X0(),Lp(),pw("ngModel",n.action.label),X0(),Lp(),pw("ngModel",n.action.url),X0(),Lp(),pw("ngModel",n.action.type),ZE("p-options",n.actionTypes),X0(),Lp(),pw("ngModel",n.action.separator),X0(),Lp(),pw("ngModel",n.toolbarActionType),ZE("p-options",n.toolbarActionTypes),X0(),Lp(2),ZE("p-disabled",s.invalid),Lp(3),pw("ngModel",n.actionsIcon),ZE("p-options",n.actionsIconOptions),X0(),Lp(5),pw("ngModel",n.profile.title),X0(),Lp(),pw("ngModel",n.profile.subtitle),X0(),Lp(),pw("ngModel",n.profile.avatar),X0(),Lp(5),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.notificationNumber),X0(),Lp(),pw("ngModel",n.showNotification),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Hhe,Nde,nme,H3,INe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Toolbar Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<style>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-toolbar-labs"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return a})();var ce=(()=>{class a{poDialog=f(Qde);poNotification=f(Xp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we$1([Xp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(Hl(0,"po-toolbar",0),Cl(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),qx(5),og(),Cl(6,"div",5),qx(7,"Let's work hard!"),og()()()()),p&2&&(ZE("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Lp(5),dg("Hello, ",n.profile.title,"."));},dependencies:[INe,ONe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Toolbar - Logged"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),og(),Cl(13,"pre",7),qx(14,`<style>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-toolbar-logged"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-toolbar"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoToolbarComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-toolbar"),og(),qx(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),og()(),Cl(18,"div",6)(19,"h4",7),qx(20,"Seletor"),og(),Cl(21,"pre",8),qx(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),og()(),Cl(23,"h4",9),qx(24,"Propriedades"),og(),Cl(25,"table",10)(26,"tr",11)(27,"th",12),qx(28,"Nome"),og(),Cl(29,"th",12),qx(30,"Tipo"),og(),Cl(31,"th",12),qx(32,"Padr\xE3o"),og(),Cl(33,"th",12),qx(34,"Descri\xE7\xE3o"),og()(),Cl(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),qx(39," p-actions"),Hl(40,"br"),og()()(),Cl(41,"td",17)(42,"code",18),qx(43,"Array<PoToolbarAction>"),og()(),Cl(44,"td",19),qx(45,"-"),og(),Cl(46,"td",20)(47,"em")(48,"strong"),qx(49,"(opcional)"),og()(),Cl(50,"p"),qx(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),Cl(52,"code"),qx(53,"p-actions-icon"),og(),qx(54,"."),og()()(),Cl(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),qx(59," p-actions-icon"),Hl(60,"br"),og()()(),Cl(61,"td",17)(62,"code",21),qx(63,"string "),og(),Cl(64,"code",22),qx(65," TemplateRef<void>"),og()(),Cl(66,"td",19)(67,"p")(68,"code"),qx(69,"an-dots-three"),og()()(),Cl(70,"td",20)(71,"em")(72,"strong"),qx(73,"(opcional)"),og()(),Cl(74,"p"),qx(75,"Define um "),Cl(76,"a",23),qx(77,"\xEDcone"),og(),qx(78," para a propriedade "),Cl(79,"code"),qx(80,"p-actions"),og(),qx(81,"."),og(),Cl(82,"p"),qx(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(84,"a",23),qx(85,"Biblioteca de \xEDcones"),og(),qx(86,". conforme exemplo abaixo:"),og(),Cl(87,"pre")(88,"code"),qx(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),og()(),Cl(90,"p"),qx(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(92,"em"),qx(93,"Font Awesome"),og(),qx(94,", da seguinte forma:"),og(),Cl(95,"pre")(96,"code"),qx(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),og()(),Cl(98,"p"),qx(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(100,"code"),qx(101,"TemplateRef"),og(),qx(102,", conforme exemplo abaixo:"),og(),Cl(103,"pre")(104,"code"),qx(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(106,"blockquote")(107,"p"),qx(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(109,"code"),qx(110,"font-size: inherit"),og(),qx(111," caso o \xEDcone utilizado n\xE3o aplique-o."),og()(),Cl(112,"blockquote")(113,"p"),qx(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),Cl(115,"code"),qx(116,"p-actions"),og(),qx(117,", o \xEDcone n\xE3o ser\xE1 exibido."),og()()()(),Cl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),qx(122," p-notification-actions"),Hl(123,"br"),og()()(),Cl(124,"td",17)(125,"code",18),qx(126,"Array<PoToolbarAction>"),og()(),Cl(127,"td",19),qx(128,"-"),og(),Cl(129,"td",20)(130,"em")(131,"strong"),qx(132,"(opcional)"),og()(),Cl(133,"p"),qx(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),og()()(),Cl(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),qx(139," p-notification-number"),Hl(140,"br"),og()()(),Cl(141,"td",17)(142,"code",24),qx(143,"number"),og()(),Cl(144,"td",19),qx(145,"-"),og(),Cl(146,"td",20)(147,"em")(148,"strong"),qx(149,"(opcional)"),og()(),Cl(150,"p"),qx(151,"N\xFAmero de notifica\xE7\xF5es."),og()()(),Cl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),qx(156," p-profile"),Hl(157,"br"),og()()(),Cl(158,"td",17)(159,"code",25),qx(160,"PoToolbarProfile"),og()(),Cl(161,"td",19),qx(162,"-"),og(),Cl(163,"td",20)(164,"em")(165,"strong"),qx(166,"(opcional)"),og()(),Cl(167,"p"),qx(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),og()()(),Cl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),qx(173," p-profile-actions"),Hl(174,"br"),og()()(),Cl(175,"td",17)(176,"code",18),qx(177,"Array<PoToolbarAction>"),og()(),Cl(178,"td",19),qx(179,"-"),og(),Cl(180,"td",20)(181,"em")(182,"strong"),qx(183,"(opcional)"),og()(),Cl(184,"p"),qx(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),og()()(),Cl(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),qx(190," p-show-notification"),Hl(191,"br"),og()()(),Cl(192,"td",17)(193,"code",26),qx(194,"boolean"),og()(),Cl(195,"td",19),qx(196,"-"),og(),Cl(197,"td",20)(198,"em")(199,"strong"),qx(200,"(opcional)"),og()(),Cl(201,"p"),qx(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),og()()(),Cl(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),qx(207," p-title"),Hl(208,"br"),og()()(),Cl(209,"td",17)(210,"code",21),qx(211,"string"),og()(),Cl(212,"td",19),qx(213,"-"),og(),Cl(214,"td",20)(215,"p"),qx(216,"T\xEDtulo do "),Cl(217,"em"),qx(218,"toolbar"),og(),qx(219," e aplica\xE7\xE3o."),og()()()(),Cl(220,"h3"),qx(221,"Interfaces"),og(),Cl(222,"h4",27)(223,"code",5),qx(224,"PoToolbarAction"),og()(),Cl(225,"div",2)(226,"p"),qx(227,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Cl(228,"h4",9),qx(229,"Propriedades"),og(),Cl(230,"table",10)(231,"tr",11)(232,"th",12),qx(233,"Nome"),og(),Cl(234,"th",12),qx(235,"Tipo"),og(),Cl(236,"th",12),qx(237,"Descri\xE7\xE3o"),og()(),Cl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),qx(242," action"),Hl(243,"br"),og()()(),Cl(244,"td",17)(245,"code",28),qx(246,"Function"),og()(),Cl(247,"td",20)(248,"em")(249,"strong"),qx(250,"(opcional)"),og()(),Cl(251,"p"),qx(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(253,"p"),qx(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(255,"code"),qx(256,"subItems"),og(),qx(257,"."),og(),Cl(258,"blockquote")(259,"p"),qx(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(261,"em"),qx(262,"bind"),og(),qx(263,`:
`),Cl(264,"code"),qx(265,"action: this.myFunction.bind(this)"),og()()()()(),Cl(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),qx(270," disabled"),Hl(271,"br"),og()()(),Cl(272,"td",17)(273,"code",26),qx(274,"boolean "),og(),Cl(275,"code",28),qx(276," Function"),og()(),Cl(277,"td",20)(278,"em")(279,"strong"),qx(280,"(opcional)"),og()(),Cl(281,"p"),qx(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),qx(287," icon"),Hl(288,"br"),og()()(),Cl(289,"td",17)(290,"code",21),qx(291,"string "),og(),Cl(292,"code",22),qx(293," TemplateRef<void>"),og()(),Cl(294,"td",20)(295,"em")(296,"strong"),qx(297,"(opcional)"),og()(),Cl(298,"p"),qx(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(300,"p"),qx(301,"Aceita \xEDcones da "),Cl(302,"a",23),qx(303,"Biblioteca de \xEDcones"),og(),qx(304,`, fontes externas (ex: Font Awesome)
ou um `),Cl(305,"code"),qx(306,"TemplateRef"),og(),qx(307," para \xEDcones customizados."),og(),Cl(308,"pre")(309,"code"),qx(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),qx(315," label"),Hl(316,"br"),og()()(),Cl(317,"td",17)(318,"code",21),qx(319,"string"),og()(),Cl(320,"td",20)(321,"p"),qx(322,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(323,"p"),qx(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(325,"code"),qx(326,"subItems"),og(),qx(327,"."),og()()(),Cl(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),qx(332," selected"),Hl(333,"br"),og()()(),Cl(334,"td",17)(335,"code",26),qx(336,"boolean"),og()(),Cl(337,"td",20)(338,"em")(339,"strong"),qx(340,"(opcional)"),og()(),Cl(341,"p"),qx(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),qx(347," separator"),Hl(348,"br"),og()()(),Cl(349,"td",17)(350,"code",26),qx(351,"boolean"),og()(),Cl(352,"td",20)(353,"em")(354,"strong"),qx(355,"(opcional)"),og()(),Cl(356,"p"),qx(357,"Atribui uma linha separadora acima do item."),og()()(),Cl(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),qx(362," subItems"),Hl(363,"br"),og()()(),Cl(364,"td",17)(365,"code",29),qx(366,"Array<PoPopupAction>"),og()(),Cl(367,"td",20)(368,"em")(369,"strong"),qx(370,"(opcional)"),og()(),Cl(371,"p"),qx(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(373,"p"),qx(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(375,"blockquote")(376,"p"),qx(377,"As propriedades "),Cl(378,"code"),qx(379,"disabled"),og(),qx(380,", "),Cl(381,"code"),qx(382,"type"),og(),qx(383," e "),Cl(384,"code"),qx(385,"visible"),og(),qx(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(387,"blockquote")(388,"p"),qx(389,"Quando "),Cl(390,"code"),qx(391,"url"),og(),qx(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(393,"blockquote")(394,"p"),qx(395,"Em subn\xEDveis aninhados, o "),Cl(396,"code"),qx(397,"icon"),og(),qx(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),qx(403," type"),Hl(404,"br"),og()()(),Cl(405,"td",17)(406,"code",21),qx(407,"string"),og()(),Cl(408,"td",20)(409,"em")(410,"strong"),qx(411,"(opcional)"),og()(),Cl(412,"p"),qx(413,"Define a cor do item."),og(),Cl(414,"p"),qx(415,"Valores v\xE1lidos:"),og(),Cl(416,"ul")(417,"li")(418,"code"),qx(419,"default"),og()(),Cl(420,"li")(421,"code"),qx(422,"danger"),og()()()()(),Cl(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),qx(427," url"),Hl(428,"br"),og()()(),Cl(429,"td",17)(430,"code",21),qx(431,"string"),og()(),Cl(432,"td",20)(433,"em")(434,"strong"),qx(435,"(opcional)"),og()(),Cl(436,"p"),qx(437,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(438,"p"),qx(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(440,"code"),qx(441,"url"),og(),qx(442," \xE9 informada em um agrupador, o clique "),Cl(443,"strong"),qx(444,"n\xE3o abrir\xE1 os subitens"),og(),qx(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(446,"blockquote")(447,"p"),qx(448,"Quando informada, tem prioridade sobre a propriedade "),Cl(449,"code"),qx(450,"action"),og(),qx(451,"."),og()()()(),Cl(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),qx(456," visible"),Hl(457,"br"),og()()(),Cl(458,"td",17)(459,"code",26),qx(460,"boolean "),og(),Cl(461,"code",28),qx(462," Function"),og()(),Cl(463,"td",20)(464,"em")(465,"strong"),qx(466,"(opcional)"),og()(),Cl(467,"p"),qx(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(469,"h4",27)(470,"code",5),qx(471,"PoToolbarProfile"),og()(),Cl(472,"div",2)(473,"p"),qx(474,"Interface que define o perfil do "),Cl(475,"code"),qx(476,"PoToolbarComponent"),og(),qx(477,"."),og()(),Cl(478,"h4",9),qx(479,"Propriedades"),og(),Cl(480,"table",10)(481,"tr",11)(482,"th",12),qx(483,"Nome"),og(),Cl(484,"th",12),qx(485,"Tipo"),og(),Cl(486,"th",12),qx(487,"Descri\xE7\xE3o"),og()(),Cl(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),qx(492," avatar"),Hl(493,"br"),og()()(),Cl(494,"td",17)(495,"code",21),qx(496,"string"),og()(),Cl(497,"td",20)(498,"em")(499,"strong"),qx(500,"(opcional)"),og()(),Cl(501,"p"),qx(502,"Define o caminho da imagem do perfil."),og()()(),Cl(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),qx(507," subtitle"),Hl(508,"br"),og()()(),Cl(509,"td",17)(510,"code",21),qx(511,"string"),og()(),Cl(512,"td",20)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),og()()(),Cl(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),qx(522," title"),Hl(523,"br"),og()()(),Cl(524,"td",17)(525,"code",21),qx(526,"string"),og()(),Cl(527,"td",20)(528,"p"),qx(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-toolbar-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),og()()()),p&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,se,de,ue],encapsulation:2})}return a})();var Ae=[{path:"",component:be}],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(Ae),bL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,fe]})}return a})();export{rt as DocPoToolbarModule};