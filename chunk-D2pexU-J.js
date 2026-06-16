import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,by as vle,cS as fO,N as Ul,a$ as fO$1,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,aU as IR,X as we,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&Ul(0,"po-toolbar",0);},dependencies:[fO],encapsulation:2,changeDetection:1})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Toolbar Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-toolbar-basic"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,n.hideSampleCodeTabs)));},dependencies:[fO$1,fP,Vd,Rd,pe],encapsulation:2})}return a})();var ce=(()=>{class a{poNotification=f(Bp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=lx();Ul(0,"po-toolbar",3),wl(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),pw("ngModelChange",function(i){return Qy(s),$x(n.action.action,i)||(n.action.action=i),Jy(i)}),ng(),$0(),wl(6,"po-select",7),pw("ngModelChange",function(i){return Qy(s),$x(n.action.icon,i)||(n.action.icon=i),Jy(i)}),ng(),$0(),wl(7,"po-input",8),pw("ngModelChange",function(i){return Qy(s),$x(n.action.label,i)||(n.action.label=i),Jy(i)}),ng(),$0(),wl(8,"po-input",9),pw("ngModelChange",function(i){return Qy(s),$x(n.action.url,i)||(n.action.url=i),Jy(i)}),ng(),$0(),wl(9,"po-radio-group",10),pw("ngModelChange",function(i){return Qy(s),$x(n.action.type,i)||(n.action.type=i),Jy(i)}),ng(),$0(),wl(10,"po-switch",11),pw("ngModelChange",function(i){return Qy(s),$x(n.action.separator,i)||(n.action.separator=i),Jy(i)}),ng(),$0(),wl(11,"po-radio-group",12),pw("ngModelChange",function(i){return Qy(s),$x(n.toolbarActionType,i)||(n.toolbarActionType=i),Jy(i)}),ng(),$0(),ng(),wl(12,"div",5)(13,"po-button",13),ut("p-click",function(){Qy(s);let i=_x(3);return Jy(n.addAction(n.action,i))}),ng()()(),Ul(14,"po-divider"),wl(15,"div",5)(16,"po-select",14),pw("ngModelChange",function(i){return Qy(s),$x(n.actionsIcon,i)||(n.actionsIcon=i),Jy(i)}),ng(),$0(),ng(),Ul(17,"po-divider"),wl(18,"form",null,1)(20,"div",5)(21,"po-input",15),pw("ngModelChange",function(i){return Qy(s),$x(n.profile.title,i)||(n.profile.title=i),Jy(i)}),ng(),$0(),wl(22,"po-input",16),pw("ngModelChange",function(i){return Qy(s),$x(n.profile.subtitle,i)||(n.profile.subtitle=i),Jy(i)}),ng(),$0(),wl(23,"po-input",17),pw("ngModelChange",function(i){return Qy(s),$x(n.profile.avatar,i)||(n.profile.avatar=i),Jy(i)}),ng(),$0(),ng()(),Ul(24,"po-divider"),wl(25,"form",null,2)(27,"div",5)(28,"po-input",18),pw("ngModelChange",function(i){return Qy(s),$x(n.title,i)||(n.title=i),Jy(i)}),ng(),$0(),wl(29,"po-number",19),pw("ngModelChange",function(i){return Qy(s),$x(n.notificationNumber,i)||(n.notificationNumber=i),Jy(i)}),ng(),$0(),wl(30,"po-switch",20),pw("ngModelChange",function(i){return Qy(s),$x(n.showNotification,i)||(n.showNotification=i),Jy(i)}),ng(),$0(),ng(),wl(31,"div",5)(32,"po-button",21),ut("p-click",function(){Qy(s);let i=_x(3),Ee=_x(19);return _x(26).reset(),Ee.reset(),i.reset(),Jy(n.restore())}),ng()()()();}if(p&2){let s=_x(3);YE("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Pp(5),hw("ngModel",n.action.action),G0(),Pp(),hw("ngModel",n.action.icon),YE("p-options",n.iconOptions),G0(),Pp(),hw("ngModel",n.action.label),G0(),Pp(),hw("ngModel",n.action.url),G0(),Pp(),hw("ngModel",n.action.type),YE("p-options",n.actionTypes),G0(),Pp(),hw("ngModel",n.action.separator),G0(),Pp(),hw("ngModel",n.toolbarActionType),YE("p-options",n.toolbarActionTypes),G0(),Pp(2),YE("p-disabled",s.invalid),Pp(3),hw("ngModel",n.actionsIcon),YE("p-options",n.actionsIconOptions),G0(),Pp(5),hw("ngModel",n.profile.title),G0(),Pp(),hw("ngModel",n.profile.subtitle),G0(),Pp(),hw("ngModel",n.profile.avatar),G0(),Pp(5),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.notificationNumber),G0(),Pp(),hw("ngModel",n.showNotification),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ha,ga,ya,na,fO],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Toolbar Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<style>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-toolbar-labs"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,n.hideSampleCodeTabs)));},dependencies:[fO$1,fP,Vd,Rd,ce],encapsulation:2})}return a})();var ue=(()=>{class a{poDialog=f(vle);poNotification=f(Bp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we([Bp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(Ul(0,"po-toolbar",0),wl(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),Ux(5),ng(),wl(6,"div",5),Ux(7,"Let's work hard!"),ng()()()()),p&2&&(YE("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Pp(5),cg("Hello, ",n.profile.title,"."));},dependencies:[fO,IR],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var xe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Toolbar - Logged"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),ng(),wl(13,"pre",7),Ux(14,`<style>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-toolbar-logged"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,xe,n.hideSampleCodeTabs)));},dependencies:[fO$1,fP,Vd,Rd,ue],encapsulation:2})}return a})();var fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-toolbar"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoToolbarComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-toolbar"),ng(),Ux(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),ng()(),wl(18,"div",6)(19,"h4",7),Ux(20,"Seletor"),ng(),wl(21,"pre",8),Ux(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),ng()(),wl(23,"h4",9),Ux(24,"Propriedades"),ng(),wl(25,"table",10)(26,"tr",11)(27,"th",12),Ux(28,"Nome"),ng(),wl(29,"th",12),Ux(30,"Tipo"),ng(),wl(31,"th",12),Ux(32,"Padr\xE3o"),ng(),wl(33,"th",12),Ux(34,"Descri\xE7\xE3o"),ng()(),wl(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),Ux(39," p-actions"),Ul(40,"br"),ng()()(),wl(41,"td",17)(42,"code",18),Ux(43,"Array<PoToolbarAction>"),ng()(),wl(44,"td",19),Ux(45,"-"),ng(),wl(46,"td",20)(47,"em")(48,"strong"),Ux(49,"(opcional)"),ng()(),wl(50,"p"),Ux(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),wl(52,"code"),Ux(53,"p-actions-icon"),ng(),Ux(54,"."),ng()()(),wl(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),Ux(59," p-actions-icon"),Ul(60,"br"),ng()()(),wl(61,"td",17)(62,"code",21),Ux(63,"string "),ng(),wl(64,"code",22),Ux(65," TemplateRef<void>"),ng()(),wl(66,"td",19)(67,"p")(68,"code"),Ux(69,"an-dots-three"),ng()()(),wl(70,"td",20)(71,"em")(72,"strong"),Ux(73,"(opcional)"),ng()(),wl(74,"p"),Ux(75,"Define um "),wl(76,"a",23),Ux(77,"\xEDcone"),ng(),Ux(78," para a propriedade "),wl(79,"code"),Ux(80,"p-actions"),ng(),Ux(81,"."),ng(),wl(82,"p"),Ux(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(84,"a",23),Ux(85,"Biblioteca de \xEDcones"),ng(),Ux(86,". conforme exemplo abaixo:"),ng(),wl(87,"pre")(88,"code"),Ux(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),ng()(),wl(90,"p"),Ux(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(92,"em"),Ux(93,"Font Awesome"),ng(),Ux(94,", da seguinte forma:"),ng(),wl(95,"pre")(96,"code"),Ux(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),ng()(),wl(98,"p"),Ux(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(100,"code"),Ux(101,"TemplateRef"),ng(),Ux(102,", conforme exemplo abaixo:"),ng(),wl(103,"pre")(104,"code"),Ux(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(106,"blockquote")(107,"p"),Ux(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(109,"code"),Ux(110,"font-size: inherit"),ng(),Ux(111," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()(),wl(112,"blockquote")(113,"p"),Ux(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),wl(115,"code"),Ux(116,"p-actions"),ng(),Ux(117,", o \xEDcone n\xE3o ser\xE1 exibido."),ng()()()(),wl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Ux(122," p-notification-actions"),Ul(123,"br"),ng()()(),wl(124,"td",17)(125,"code",18),Ux(126,"Array<PoToolbarAction>"),ng()(),wl(127,"td",19),Ux(128,"-"),ng(),wl(129,"td",20)(130,"em")(131,"strong"),Ux(132,"(opcional)"),ng()(),wl(133,"p"),Ux(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),ng()()(),wl(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),Ux(139," p-notification-number"),Ul(140,"br"),ng()()(),wl(141,"td",17)(142,"code",24),Ux(143,"number"),ng()(),wl(144,"td",19),Ux(145,"-"),ng(),wl(146,"td",20)(147,"em")(148,"strong"),Ux(149,"(opcional)"),ng()(),wl(150,"p"),Ux(151,"N\xFAmero de notifica\xE7\xF5es."),ng()()(),wl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),Ux(156," p-profile"),Ul(157,"br"),ng()()(),wl(158,"td",17)(159,"code",25),Ux(160,"PoToolbarProfile"),ng()(),wl(161,"td",19),Ux(162,"-"),ng(),wl(163,"td",20)(164,"em")(165,"strong"),Ux(166,"(opcional)"),ng()(),wl(167,"p"),Ux(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),ng()()(),wl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Ux(173," p-profile-actions"),Ul(174,"br"),ng()()(),wl(175,"td",17)(176,"code",18),Ux(177,"Array<PoToolbarAction>"),ng()(),wl(178,"td",19),Ux(179,"-"),ng(),wl(180,"td",20)(181,"em")(182,"strong"),Ux(183,"(opcional)"),ng()(),wl(184,"p"),Ux(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),ng()()(),wl(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),Ux(190," p-show-notification"),Ul(191,"br"),ng()()(),wl(192,"td",17)(193,"code",26),Ux(194,"boolean"),ng()(),wl(195,"td",19),Ux(196,"-"),ng(),wl(197,"td",20)(198,"em")(199,"strong"),Ux(200,"(opcional)"),ng()(),wl(201,"p"),Ux(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),ng()()(),wl(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),Ux(207," p-title"),Ul(208,"br"),ng()()(),wl(209,"td",17)(210,"code",21),Ux(211,"string"),ng()(),wl(212,"td",19),Ux(213,"-"),ng(),wl(214,"td",20)(215,"p"),Ux(216,"T\xEDtulo do "),wl(217,"em"),Ux(218,"toolbar"),ng(),Ux(219," e aplica\xE7\xE3o."),ng()()()(),wl(220,"h3"),Ux(221,"Interfaces"),ng(),wl(222,"h4",27)(223,"code",5),Ux(224,"PoToolbarAction"),ng()(),wl(225,"div",2)(226,"p"),Ux(227,"Interface para lista de a\xE7\xF5es do componente. "),ng()(),wl(228,"h4",9),Ux(229,"Propriedades"),ng(),wl(230,"table",10)(231,"tr",11)(232,"th",12),Ux(233,"Nome"),ng(),wl(234,"th",12),Ux(235,"Tipo"),ng(),wl(236,"th",12),Ux(237,"Descri\xE7\xE3o"),ng()(),wl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Ux(242," action"),Ul(243,"br"),ng()()(),wl(244,"td",17)(245,"code",28),Ux(246,"Function"),ng()(),wl(247,"td",20)(248,"em")(249,"strong"),Ux(250,"(opcional)"),ng()(),wl(251,"p"),Ux(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(253,"p"),Ux(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(255,"code"),Ux(256,"subItems"),ng(),Ux(257,"."),ng(),wl(258,"blockquote")(259,"p"),Ux(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(261,"em"),Ux(262,"bind"),ng(),Ux(263,`:
`),wl(264,"code"),Ux(265,"action: this.myFunction.bind(this)"),ng()()()()(),wl(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),Ux(270," disabled"),Ul(271,"br"),ng()()(),wl(272,"td",17)(273,"code",26),Ux(274,"boolean "),ng(),wl(275,"code",28),Ux(276," Function"),ng()(),wl(277,"td",20)(278,"em")(279,"strong"),Ux(280,"(opcional)"),ng()(),wl(281,"p"),Ux(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),Ux(287," icon"),Ul(288,"br"),ng()()(),wl(289,"td",17)(290,"code",21),Ux(291,"string "),ng(),wl(292,"code",22),Ux(293," TemplateRef<void>"),ng()(),wl(294,"td",20)(295,"em")(296,"strong"),Ux(297,"(opcional)"),ng()(),wl(298,"p"),Ux(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(300,"p"),Ux(301,"Aceita \xEDcones da "),wl(302,"a",23),Ux(303,"Biblioteca de \xEDcones"),ng(),Ux(304,`, fontes externas (ex: Font Awesome)
ou um `),wl(305,"code"),Ux(306,"TemplateRef"),ng(),Ux(307," para \xEDcones customizados."),ng(),wl(308,"pre")(309,"code"),Ux(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),Ux(315," label"),Ul(316,"br"),ng()()(),wl(317,"td",17)(318,"code",21),Ux(319,"string"),ng()(),wl(320,"td",20)(321,"p"),Ux(322,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(323,"p"),Ux(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(325,"code"),Ux(326,"subItems"),ng(),Ux(327,"."),ng()()(),wl(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),Ux(332," selected"),Ul(333,"br"),ng()()(),wl(334,"td",17)(335,"code",26),Ux(336,"boolean"),ng()(),wl(337,"td",20)(338,"em")(339,"strong"),Ux(340,"(opcional)"),ng()(),wl(341,"p"),Ux(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),Ux(347," separator"),Ul(348,"br"),ng()()(),wl(349,"td",17)(350,"code",26),Ux(351,"boolean"),ng()(),wl(352,"td",20)(353,"em")(354,"strong"),Ux(355,"(opcional)"),ng()(),wl(356,"p"),Ux(357,"Atribui uma linha separadora acima do item."),ng()()(),wl(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),Ux(362," subItems"),Ul(363,"br"),ng()()(),wl(364,"td",17)(365,"code",29),Ux(366,"Array<PoPopupAction>"),ng()(),wl(367,"td",20)(368,"em")(369,"strong"),Ux(370,"(opcional)"),ng()(),wl(371,"p"),Ux(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(373,"p"),Ux(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(375,"blockquote")(376,"p"),Ux(377,"As propriedades "),wl(378,"code"),Ux(379,"disabled"),ng(),Ux(380,", "),wl(381,"code"),Ux(382,"type"),ng(),Ux(383," e "),wl(384,"code"),Ux(385,"visible"),ng(),Ux(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(387,"blockquote")(388,"p"),Ux(389,"Quando "),wl(390,"code"),Ux(391,"url"),ng(),Ux(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(393,"blockquote")(394,"p"),Ux(395,"Em subn\xEDveis aninhados, o "),wl(396,"code"),Ux(397,"icon"),ng(),Ux(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),Ux(403," type"),Ul(404,"br"),ng()()(),wl(405,"td",17)(406,"code",21),Ux(407,"string"),ng()(),wl(408,"td",20)(409,"em")(410,"strong"),Ux(411,"(opcional)"),ng()(),wl(412,"p"),Ux(413,"Define a cor do item."),ng(),wl(414,"p"),Ux(415,"Valores v\xE1lidos:"),ng(),wl(416,"ul")(417,"li")(418,"code"),Ux(419,"default"),ng()(),wl(420,"li")(421,"code"),Ux(422,"danger"),ng()()()()(),wl(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),Ux(427," url"),Ul(428,"br"),ng()()(),wl(429,"td",17)(430,"code",21),Ux(431,"string"),ng()(),wl(432,"td",20)(433,"em")(434,"strong"),Ux(435,"(opcional)"),ng()(),wl(436,"p"),Ux(437,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(438,"p"),Ux(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(440,"code"),Ux(441,"url"),ng(),Ux(442," \xE9 informada em um agrupador, o clique "),wl(443,"strong"),Ux(444,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(446,"blockquote")(447,"p"),Ux(448,"Quando informada, tem prioridade sobre a propriedade "),wl(449,"code"),Ux(450,"action"),ng(),Ux(451,"."),ng()()()(),wl(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),Ux(456," visible"),Ul(457,"br"),ng()()(),wl(458,"td",17)(459,"code",26),Ux(460,"boolean "),ng(),wl(461,"code",28),Ux(462," Function"),ng()(),wl(463,"td",20)(464,"em")(465,"strong"),Ux(466,"(opcional)"),ng()(),wl(467,"p"),Ux(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(469,"h4",27)(470,"code",5),Ux(471,"PoToolbarProfile"),ng()(),wl(472,"div",2)(473,"p"),Ux(474,"Interface que define o perfil do "),wl(475,"code"),Ux(476,"PoToolbarComponent"),ng(),Ux(477,"."),ng()(),wl(478,"h4",9),Ux(479,"Propriedades"),ng(),wl(480,"table",10)(481,"tr",11)(482,"th",12),Ux(483,"Nome"),ng(),wl(484,"th",12),Ux(485,"Tipo"),ng(),wl(486,"th",12),Ux(487,"Descri\xE7\xE3o"),ng()(),wl(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),Ux(492," avatar"),Ul(493,"br"),ng()()(),wl(494,"td",17)(495,"code",21),Ux(496,"string"),ng()(),wl(497,"td",20)(498,"em")(499,"strong"),Ux(500,"(opcional)"),ng()(),wl(501,"p"),Ux(502,"Define o caminho da imagem do perfil."),ng()()(),wl(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),Ux(507," subtitle"),Ul(508,"br"),ng()()(),wl(509,"td",17)(510,"code",21),Ux(511,"string"),ng()(),wl(512,"td",20)(513,"em")(514,"strong"),Ux(515,"(opcional)"),ng()(),wl(516,"p"),Ux(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),ng()()(),wl(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),Ux(522," title"),Ul(523,"br"),ng()()(),wl(524,"td",17)(525,"code",21),Ux(526,"string"),ng()(),wl(527,"td",20)(528,"p"),Ux(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var ge=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-toolbar-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),ng()()()),p&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,se,de,be,fe],encapsulation:2})}return a})();var Me=[{path:"",component:ge}],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[vL.forChild(Me),vL]})}return a})();var Et=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[u5,he]})}return a})();export{Et as DocPoToolbarModule};