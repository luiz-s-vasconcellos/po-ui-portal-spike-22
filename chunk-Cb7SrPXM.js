import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aE as Bp,r as r$1,s,aD as Or,a_ as Ue$1,cJ as qN,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aO as Yo,bT as ha,bB as ga,bd as na,al as lx,am as pw,an as $0,ap as hw,aq as G0,cK as nN,a7 as Qx,bj as eN,a2 as GE,as as $l,at as uo,au as fo,a3 as D3,av as nx,ax as gx,ay as rx,az as Qy,aB as $x,aA as Jy,bo as dN}from'./main-6SPFG3VI.js';var be=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Ul(0,"po-header",0),r&2&&YE("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[qN],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Header Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-header-basic/sample-po-header-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-header-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,He,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return a})();var Le=()=>({label:"Positive",value:"positive"}),ke=()=>({label:"Negative",value:"negative"}),De=()=>({label:"Warning",value:"warning"}),Ne=()=>({label:"Disabled",value:"disabled"}),Ie=(a,A,l,r)=>[a,A,l,r],Fe=()=>({label:"Medium",value:"medium"}),Ve=()=>({label:"Small",value:"small"}),Ue=(a,A)=>[a,A],fe=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=lx();Ul(0,"po-header",1),wl(1,"div",2)(2,"po-input",3),pw("ngModelChange",function(d){return Qy(p),$x(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Jy(d)}),ng(),$0(),wl(3,"po-input",4),pw("ngModelChange",function(d){return Qy(p),$x(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Jy(d)}),ng(),$0(),wl(4,"po-input",5),pw("ngModelChange",function(d){return Qy(p),$x(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Jy(d)}),ng(),$0(),wl(5,"div",6)(6,"po-button",7),ut("p-click",function(){return i.addBrand()}),ng()()(),Ul(7,"hr"),wl(8,"div",8)(9,"h3",9),Ux(10,"A\xE7\xF5es dos itens de menu"),ng(),wl(11,"po-input",10),pw("ngModelChange",function(d){return Qy(p),$x(i.menuActionEvent,d)||(i.menuActionEvent=d),Jy(d)}),ng(),$0(),wl(12,"po-input",11),pw("ngModelChange",function(d){return Qy(p),$x(i.menuActionLabel,d)||(i.menuActionLabel=d),Jy(d)}),ng(),$0(),wl(13,"po-button",12),ut("p-click",function(){return i.addAction()}),ng()(),Ul(14,"hr"),wl(15,"h3",9),Ux(16,"A\xE7\xF5es das configura\xE7\xF5es"),ng(),wl(17,"form",8,0)(19,"po-input",13),pw("ngModelChange",function(d){return Qy(p),$x(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Jy(d)}),ng(),$0(),wl(20,"po-input",14),pw("ngModelChange",function(d){return Qy(p),$x(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Jy(d)}),ng(),$0(),wl(21,"po-number",15),pw("ngModelChange",function(d){return Qy(p),$x(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Jy(d)}),ng(),$0(),wl(22,"po-switch",16),pw("ngModelChange",function(d){return Qy(p),$x(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Jy(d)}),ng(),$0(),wl(23,"po-button",17),ut("p-click",function(){return i.addTool(i.actionNewTool)}),ng()(),Ul(24,"hr"),wl(25,"h3",9),Ux(26,"A\xE7\xF5es do Usu\xE1rio"),ng(),wl(27,"form",8,0)(29,"po-input",18),pw("ngModelChange",function(d){return Qy(p),$x(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Jy(d)}),ng(),$0(),wl(30,"po-input",19),pw("ngModelChange",function(d){return Qy(p),$x(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Jy(d)}),ng(),$0(),wl(31,"po-radio-group",20),pw("ngModelChange",function(d){return Qy(p),$x(i.newActionUser.status,d)||(i.newActionUser.status=d),Jy(d)}),ng(),$0(),wl(32,"po-button",17),ut("p-click",function(){return i.addUser()}),ng(),Ul(33,"hr"),wl(34,"h3",9),Ux(35,"Varia\xE7\xF5es de tamanho"),ng(),wl(36,"div",8)(37,"po-radio-group",21),pw("ngModelChange",function(d){return Qy(p),$x(i.size,d)||(i.size=d),Jy(d)}),ng(),$0(),ng(),Ul(38,"hr"),wl(39,"po-button",22),ut("p-click",function(){return i.reset()}),ng()();}r&2&&(YE("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Pp(2),hw("ngModel",i.headerBrandTitle),G0(),Pp(),hw("ngModel",i.headerBrandLogo),G0(),Pp(),hw("ngModel",i.headerBrandSmallLogo),G0(),Pp(7),hw("ngModel",i.menuActionEvent),G0(),Pp(),hw("ngModel",i.menuActionLabel),G0(),Pp(),YE("p-disabled",!i.menuActionLabel),Pp(6),hw("ngModel",i.actionNewTool.icon),G0(),Pp(),hw("ngModel",i.actionNewTool.tooltip),G0(),Pp(),hw("ngModel",i.actionNewTool.badge),G0(),Pp(),hw("ngModel",i.actionNewToolEvent),G0(),Pp(),YE("p-disabled",i.actionTools.length>2),Pp(6),hw("ngModel",i.newActionUser.customerBrand),G0(),Pp(),hw("ngModel",i.newActionUser.avatar),G0(),Pp(),hw("ngModel",i.newActionUser.status),YE("p-options",nN(28,Ie,Qx(24,Le),Qx(25,ke),Qx(26,De),Qx(27,Ne))),G0(),Pp(),YE("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Pp(5),hw("ngModel",i.size),YE("p-options",eN(35,Ue,Qx(33,Fe),Qx(34,Ve))),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,Yo,ha,ga,na,qN],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Header Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-header-labs/sample-po-header-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-header
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-header-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,We,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return a})();var je=["meuTemplate"],Oe=(a,A)=>A.icon;function Re(a,A){if(a&1&&Ul(0,"po-button",4),a&2){let l=A.$implicit;YE("p-icon",l.icon);}}function Ge(a,A){if(a&1&&(wl(0,"div",2)(1,"p"),Ux(2,"Meus aplicativos"),ng(),Ul(3,"br"),wl(4,"div",3),nx(5,Re,1,1,"po-button",4,Oe),ng()()),a&2){let l=gx();Pp(5),rx(l.systemApps);}}var ye=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Or.Top});}static \u0275fac=function(r){return new(r||a)(C(Bp),C(Ue$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&$l(je,5),r&2){let p;uo(p=fo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Ul(0,"po-header",1),GE(1,Ge,7,0,"ng-template",null,0,dN)),r&2&&YE("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Pe$1,qN],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Header Apps"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-header-apps/sample-po-header-apps.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-header
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
      }
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem
    }
  ];

  headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    action: this.myAction.bind(this, 'Meu Usu\xE1rio'),
    status: 'positive'
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
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-header-apps"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Je,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-header"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoHeaderComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"O componente "),wl(18,"code"),Ux(19,"po-header"),ng(),Ux(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),wl(21,"code"),Ux(22,"p-brand"),ng(),Ux(23,", "),wl(24,"code"),Ux(25,"p-menu-items"),ng(),Ux(26,", "),wl(27,"code"),Ux(28,"p-actions-tools"),ng(),Ux(29," e "),wl(30,"code"),Ux(31,"p-header-user"),ng(),Ux(32,"."),ng(),wl(33,"ul")(34,"li")(35,"code"),Ux(36,"p-brand"),ng(),Ux(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),ng(),wl(38,"li")(39,"code"),Ux(40,"p-menu-items"),ng(),Ux(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),ng(),wl(42,"li")(43,"code"),Ux(44,"p-actions-tools"),ng(),Ux(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),ng(),wl(46,"li")(47,"code"),Ux(48,"p-header-user"),ng(),Ux(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),ng()(),wl(50,"p"),Ux(51,"O componente "),wl(52,"code"),Ux(53,"po-header"),ng(),Ux(54," pode ser usado de duas formas:"),ng(),wl(55,"p"),Ux(56,"Com "),wl(57,"code"),Ux(58,"po-menu"),ng(),Ux(59," definido pelo usu\xE1rio:"),ng(),wl(60,"pre")(61,"code"),Ux(62,`...
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
`),ng()(),wl(63,"p"),Ux(64,"Passando os itens diretamente para o "),wl(65,"code"),Ux(66,"po-header"),ng(),Ux(67," pela propriedade "),wl(68,"code"),Ux(69,"p-menus"),ng(),Ux(70,":"),ng(),wl(71,"pre")(72,"code"),Ux(73,`...
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
`),ng()(),wl(74,"h4"),Ux(75,"Tokens customiz\xE1veis"),ng(),wl(76,"p"),Ux(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(78,"blockquote")(79,"p"),Ux(80,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(81,"a",6),Ux(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(83,"."),ng()(),wl(84,"table")(85,"thead")(86,"tr")(87,"th"),Ux(88,"Propriedade"),ng(),wl(89,"th"),Ux(90,"Descri\xE7\xE3o"),ng(),wl(91,"th"),Ux(92,"Valor Padr\xE3o"),ng()()(),wl(93,"tbody")(94,"tr")(95,"td")(96,"code"),Ux(97,"--font-family"),ng()(),wl(98,"td"),Ux(99,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(100,"td")(101,"code"),Ux(102,"var(--font-family-theme)"),ng()()(),wl(103,"tr")(104,"td")(105,"code"),Ux(106,"--font-weight"),ng()(),wl(107,"td"),Ux(108,"Peso da fonte"),ng(),wl(109,"td")(110,"code"),Ux(111,"var(--font-weight-bold)"),ng()()(),wl(112,"tr")(113,"td")(114,"code"),Ux(115,"--text-color"),ng()(),wl(116,"td"),Ux(117,"Cor do texto"),ng(),wl(118,"td")(119,"code"),Ux(120,"var(--color-neutral-dark-70)"),ng()()(),wl(121,"tr")(122,"td")(123,"code"),Ux(124,"--outline-color-focused"),ng()(),wl(125,"td"),Ux(126,"Cor do outline dos itens de sub-menu e customer"),ng(),wl(127,"td")(128,"code"),Ux(129,"var(--color-neutral-dark-95)"),ng()()(),wl(130,"tr")(131,"td")(132,"code"),Ux(133,"--object-fit-brand"),ng()(),wl(134,"td"),Ux(135,"Valor do object-fit da imagem do logo"),ng(),wl(136,"td")(137,"code"),Ux(138,"contain"),ng()()(),wl(139,"tr")(140,"td")(141,"code"),Ux(142,"--object-fit-customer"),ng()(),wl(143,"td"),Ux(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),ng(),wl(145,"td")(146,"code"),Ux(147,"contain"),ng()()(),wl(148,"tr")(149,"td")(150,"code"),Ux(151,"--object-fit-customer-user"),ng()(),wl(152,"td"),Ux(153,"Valor do object-fit da imagem do avatar"),ng(),wl(154,"td")(155,"code"),Ux(156,"cover"),ng()()(),wl(157,"tr")(158,"td")(159,"strong"),Ux(160,"Header"),ng()(),Ul(161,"td")(162,"td"),ng(),wl(163,"tr")(164,"td")(165,"code"),Ux(166,"--background-color"),ng()(),wl(167,"td"),Ux(168,"Cor de background do header"),ng(),wl(169,"td")(170,"code"),Ux(171,"var(--color-neutral-light-05)"),ng()()(),wl(172,"tr")(173,"td")(174,"code"),Ux(175,"--border-radius-bottom-left"),ng()(),wl(176,"td"),Ux(177,"Valor do radius do lado esquerdo do header"),ng(),wl(178,"td")(179,"code"),Ux(180,"var(--border-radius-md)"),ng()()(),wl(181,"tr")(182,"td")(183,"code"),Ux(184,"--border-radius-bottom-right"),ng()(),wl(185,"td"),Ux(186,"Valor do radius do lado direito do header"),ng(),wl(187,"td")(188,"code"),Ux(189,"var(--border-radius-md)"),ng()()(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--base shadow"),ng()(),wl(194,"td"),Ux(195,"Cor da sombra do header"),ng(),wl(196,"td")(197,"code"),Ux(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),ng()()(),wl(199,"tr")(200,"td")(201,"code"),Ux(202,"--stroke-color"),ng()(),wl(203,"td"),Ux(204,"Cor da borda inferior do header"),ng(),wl(205,"td")(206,"code"),Ux(207,"var(--color-brand-01-base)"),ng()()(),wl(208,"tr")(209,"td")(210,"strong"),Ux(211,"Sub-menu"),ng()(),Ul(212,"td")(213,"td"),ng(),wl(214,"tr")(215,"td")(216,"code"),Ux(217,"--border-radius"),ng()(),wl(218,"td"),Ux(219,"Valor do radius dos itens do sub-menu"),ng(),wl(220,"td")(221,"code"),Ux(222,"var(--border-radius-md);"),ng()()(),wl(223,"tr")(224,"td")(225,"code"),Ux(226,"--text-color-submenu"),ng()(),wl(227,"td"),Ux(228,"Cor do texto dos itens do sub-menu"),ng(),wl(229,"td")(230,"code"),Ux(231,"var(--color-brand-01-base)"),ng()()(),wl(232,"tr")(233,"td")(234,"code"),Ux(235,"--icon-color"),ng()(),wl(236,"td"),Ux(237,"Cor do \xEDcone do sub-menu com itens"),ng(),wl(238,"td")(239,"code"),Ux(240,"var(--color-brand-01-base)"),ng()()(),wl(241,"tr")(242,"td")(243,"code"),Ux(244,"--border-color"),ng()(),wl(245,"td"),Ux(246,"Cor da borda"),ng(),wl(247,"td")(248,"code"),Ux(249,"var(--color-transparent)"),ng()()(),wl(250,"tr")(251,"td")(252,"code"),Ux(253,"--shadow"),ng()(),wl(254,"td"),Ux(255,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(256,"td")(257,"code"),Ux(258,"var(--shadow-none)"),ng()()(),wl(259,"tr")(260,"td")(261,"code"),Ux(262,"--font-family-submenu"),ng()(),wl(263,"td"),Ux(264,"Fonte do texto dos itens de sub-menu"),ng(),wl(265,"td")(266,"code"),Ux(267,"var(--font-family-theme)"),ng()()(),wl(268,"tr")(269,"td")(270,"code"),Ux(271,"--font-weight-submenu"),ng()(),wl(272,"td"),Ux(273,"Peso da fonte do texto dos itens de sub-menu"),ng(),wl(274,"td")(275,"code"),Ux(276,"var(--font-weight-bold)"),ng()()(),wl(277,"tr")(278,"td")(279,"strong"),Ux(280,"Sub-menu - Hover"),ng()(),Ul(281,"td")(282,"td"),ng(),wl(283,"tr")(284,"td")(285,"code"),Ux(286,"--background-hover"),ng()(),wl(287,"td"),Ux(288,"Cor de background dos itens do sub-menu no estado hover"),ng(),wl(289,"td")(290,"code"),Ux(291,"var(--color-brand-01-lighter)"),ng()()(),wl(292,"tr")(293,"td")(294,"code"),Ux(295,"--icon-color-hover"),ng()(),wl(296,"td"),Ux(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),ng(),wl(298,"td")(299,"code"),Ux(300,"var(--color-brand-01-darkest)"),ng()()(),wl(301,"tr")(302,"td")(303,"code"),Ux(304,"--text-color-hover"),ng()(),wl(305,"td"),Ux(306,"Cor do texto dos itens de sub-menu no estado hover"),ng(),wl(307,"td")(308,"code"),Ux(309,"var(--color-brand-01-darkest)"),ng()()(),wl(310,"tr")(311,"td")(312,"strong"),Ux(313,"Sub-menu - pressed"),ng()(),Ul(314,"td")(315,"td"),ng(),wl(316,"tr")(317,"td")(318,"code"),Ux(319,"--background-pressed"),ng()(),wl(320,"td"),Ux(321,"Cor de background dos itens do sub-menu no estado pressed"),ng(),wl(322,"td")(323,"code"),Ux(324,"var(--color-brand-01-light)"),ng()()(),wl(325,"tr")(326,"td")(327,"code"),Ux(328,"--icon-color-pressed"),ng()(),wl(329,"td"),Ux(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),ng(),wl(331,"td")(332,"code"),Ux(333,"var(--color-brand-01-darkest)"),ng()()(),wl(334,"tr")(335,"td")(336,"code"),Ux(337,"--text-color-pressed"),ng()(),wl(338,"td"),Ux(339,"Cor do texto dos itens de sub-menu no estado pressed"),ng(),wl(340,"td")(341,"code"),Ux(342,"var(--color-brand-01-darkest)"),ng()()(),wl(343,"tr")(344,"td")(345,"strong"),Ux(346,"Sub-menu - selected"),ng()(),Ul(347,"td")(348,"td"),ng(),wl(349,"tr")(350,"td")(351,"code"),Ux(352,"--background-selected"),ng()(),wl(353,"td"),Ux(354,"Cor de background dos itens do sub-menu no estado selected"),ng(),wl(355,"td")(356,"code"),Ux(357,"var(--color-brand-01-light)"),ng()()(),wl(358,"tr")(359,"td")(360,"code"),Ux(361,"--icon-color-selected"),ng()(),wl(362,"td"),Ux(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),ng(),wl(364,"td")(365,"code"),Ux(366,"var(--color-neutral-dark-95)"),ng()()(),wl(367,"tr")(368,"td")(369,"code"),Ux(370,"--text-color-selected"),ng()(),wl(371,"td"),Ux(372,"Cor do texto dos itens de sub-menu no estado selected"),ng(),wl(373,"td")(374,"code"),Ux(375,"var(--color-brand-01-darkest)"),ng()()(),wl(376,"tr")(377,"td")(378,"strong"),Ux(379,"Customer"),ng()(),Ul(380,"td")(381,"td"),ng(),wl(382,"tr")(383,"td")(384,"code"),Ux(385,"--background-color-customer"),ng()(),wl(386,"td"),Ux(387,"Cor do background da se\xE7\xE3o customer"),ng(),wl(388,"td")(389,"code"),Ux(390,"var(--color-neutral-light-00)"),ng()()(),wl(391,"tr")(392,"td")(393,"code"),Ux(394,"--border-color"),ng()(),wl(395,"td"),Ux(396,"Cor da borda da se\xE7\xE3o customer"),ng(),wl(397,"td")(398,"code"),Ux(399,"var(--color-neutral-light-10)"),ng()()(),wl(400,"tr")(401,"td")(402,"code"),Ux(403,"--border-style"),ng()(),wl(404,"td"),Ux(405,"Estilo da borda da se\xE7\xE3o customer"),ng(),wl(406,"td")(407,"code"),Ux(408,"solid"),ng()()(),wl(409,"tr")(410,"td")(411,"code"),Ux(412,"--border-width"),ng()(),wl(413,"td"),Ux(414,"Largura da borda da se\xE7\xE3o customer"),ng(),wl(415,"td")(416,"code"),Ux(417,"var(--border-width-sm)"),ng()()(),wl(418,"tr")(419,"td")(420,"strong"),Ux(421,"Customer - hover"),ng()(),Ul(422,"td")(423,"td"),ng(),wl(424,"tr")(425,"td")(426,"code"),Ux(427,"--background-color-customer-hover"),ng()(),wl(428,"td"),Ux(429,"Cor do background da se\xE7\xE3o customer no estado hover"),ng(),wl(430,"td")(431,"code"),Ux(432,"var(--color-brand-01-lighter)"),ng()()(),wl(433,"tr")(434,"td")(435,"strong"),Ux(436,"Customer - pressed"),ng()(),Ul(437,"td")(438,"td"),ng(),wl(439,"tr")(440,"td")(441,"code"),Ux(442,"--background-color-customer-pressed"),ng()(),wl(443,"td"),Ux(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),ng(),wl(445,"td")(446,"code"),Ux(447,"var(--color-brand-01-light)"),ng()()(),wl(448,"tr")(449,"td")(450,"code"),Ux(451,"--border-width-pressed"),ng()(),wl(452,"td"),Ux(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),ng(),wl(454,"td")(455,"code"),Ux(456,"var(--border-width-md)"),ng()()()()()(),wl(457,"div",7)(458,"h4",8),Ux(459,"Seletor"),ng(),wl(460,"pre",9),Ux(461,`<po-header
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
`),ng()(),wl(462,"h4",10),Ux(463,"Propriedades"),ng(),wl(464,"table",11)(465,"tr",12)(466,"th",13),Ux(467,"Nome"),ng(),wl(468,"th",13),Ux(469,"Tipo"),ng(),wl(470,"th",13),Ux(471,"Padr\xE3o"),ng(),wl(472,"th",13),Ux(473,"Descri\xE7\xE3o"),ng()(),wl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),Ux(478," p-actions-tools"),Ul(479,"br"),ng()()(),wl(480,"td",18)(481,"code",19),Ux(482,"Array<PoHeaderActionTool>"),ng()(),wl(483,"td",20),Ux(484,"-"),ng(),wl(485,"td",21)(486,"em")(487,"strong"),Ux(488,"(opcional)"),ng()(),wl(489,"p"),Ux(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),wl(491,"code"),Ux(492,"po-header"),ng()(),wl(493,"blockquote")(494,"p"),Ux(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),ng()()()(),wl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Ux(500," p-amount-more"),Ul(501,"br"),ng()()(),wl(502,"td",18)(503,"code",22),Ux(504,"number"),ng()(),wl(505,"td",20),Ux(506,"-"),ng(),wl(507,"td",21)(508,"em")(509,"strong"),Ux(510,"(opcional)"),ng()(),wl(511,"p"),Ux(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),ng(),wl(513,"blockquote")(514,"p"),Ux(515,"Ao utilizar essa propriedade o "),wl(516,"code"),Ux(517,"po-header"),ng(),Ux(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),ng()()()(),wl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Ux(523," p-brand"),Ul(524,"br"),ng()()(),wl(525,"td",18)(526,"code",23),Ux(527,"PoHeaderBrand "),ng(),wl(528,"code",24),Ux(529," string"),ng()(),wl(530,"td",20),Ux(531,"-"),ng(),wl(532,"td",21)(533,"em")(534,"strong"),Ux(535,"(opcional)"),ng()(),wl(536,"p"),Ux(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),wl(538,"code"),Ux(539,"po-header"),ng()(),wl(540,"p"),Ux(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),ng()()(),wl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),Ux(546," (p-colapsed-menu)"),Ul(547,"br"),ng()()(),wl(548,"td",18)(549,"code",27),Ux(550,"EventEmitter"),ng()(),wl(551,"td",20),Ux(552,"-"),ng(),wl(553,"td",21)(554,"em")(555,"strong"),Ux(556,"(opcional)"),ng()(),wl(557,"p"),Ux(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),ng()()(),wl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Ux(563," p-filter-menu"),Ul(564,"br"),ng()()(),wl(565,"td",18)(566,"code",28),Ux(567,"boolean"),ng()(),wl(568,"td",20),Ux(569,"-"),ng(),wl(570,"td",21)(571,"em")(572,"strong"),Ux(573,"(opcional)"),ng()(),wl(574,"p"),Ux(575,"Habilita campo para filtrar itens no menu"),ng()()(),wl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),Ux(580," p-header-template"),Ul(581,"br"),ng()()(),wl(582,"td",18)(583,"code",29),Ux(584,"TemplateRef<any>"),ng()(),wl(585,"td",20),Ux(586,"-"),ng(),wl(587,"td",21)(588,"em")(589,"strong"),Ux(590,"(opcional)"),ng()(),wl(591,"p"),Ux(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),wl(593,"code"),Ux(594,"p-menu-items"),ng()()()(),wl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),Ux(599," p-header-user"),Ul(600,"br"),ng()()(),wl(601,"td",18)(602,"code",30),Ux(603,"PoHeaderUser"),ng()(),wl(604,"td",20),Ux(605,"-"),ng(),wl(606,"td",21)(607,"em")(608,"strong"),Ux(609,"(opcional)"),ng()(),wl(610,"p"),Ux(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),wl(612,"code"),Ux(613,"po-header"),ng()()()(),wl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),Ux(618," p-hide-button-menu"),Ul(619,"br"),ng()()(),wl(620,"td",18)(621,"code",28),Ux(622,"boolean"),ng()(),wl(623,"td",20),Ux(624,"-"),ng(),wl(625,"td",21)(626,"em")(627,"strong"),Ux(628,"(opcional)"),ng()(),wl(629,"p"),Ux(630,"Esconde o bot\xE3o de menu colapsado."),ng()()(),wl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),Ux(635," p-literals"),Ul(636,"br"),ng()()(),wl(637,"td",18)(638,"code",31),Ux(639,"PoHeaderLiterals"),ng()(),wl(640,"td",20),Ux(641,"-"),ng(),wl(642,"td",21)(643,"em")(644,"strong"),Ux(645,"(opcional)"),ng()(),wl(646,"p"),Ux(647,"Objeto com a literal usada na propriedade "),wl(648,"code"),Ux(649,"p-literals"),ng(),Ux(650,"."),ng(),wl(651,"p"),Ux(652,"Para customizar a literal, basta declarar um objeto do tipo "),wl(653,"code"),Ux(654,"PoHeaderLiterals"),ng(),Ux(655," conforme exemplo abaixo:"),ng(),wl(656,"pre")(657,"code"),Ux(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),ng()(),wl(659,"p"),Ux(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(661,"pre")(662,"code"),Ux(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),ng()(),wl(664,"blockquote")(665,"p"),Ux(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(667,"a",32)(668,"code"),Ux(669,"PoI18nService"),ng()(),Ux(670," ou do browser."),ng()()()(),wl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Ux(675," p-menus"),Ul(676,"br"),ng()()(),wl(677,"td",18)(678,"code",33),Ux(679,"Array<PoMenuItem>"),ng()(),wl(680,"td",20),Ux(681,"-"),ng(),wl(682,"td",21)(683,"em")(684,"strong"),Ux(685,"(opcional)"),ng()(),wl(686,"p"),Ux(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),ng(),wl(688,"blockquote")(689,"p"),Ux(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),ng()()()(),wl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),Ux(695," p-menu-items"),Ul(696,"br"),ng()()(),wl(697,"td",18)(698,"code",34),Ux(699,"Array<PoHeaderActions>"),ng()(),wl(700,"td",20),Ux(701,"-"),ng(),wl(702,"td",21)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),wl(708,"code"),Ux(709,"po-header"),ng(),Ux(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),ng(),wl(711,"blockquote")(712,"p"),Ux(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),ng()()()(),wl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),Ux(718," p-size"),Ul(719,"br"),ng()()(),wl(720,"td",18)(721,"code",24),Ux(722,"string"),ng()(),wl(723,"td",20)(724,"p")(725,"code"),Ux(726,"medium"),ng()()(),wl(727,"td",21)(728,"em")(729,"strong"),Ux(730,"(opcional)"),ng()(),wl(731,"p"),Ux(732,"Define o tamanho do componente:"),ng(),wl(733,"ul")(734,"li")(735,"code"),Ux(736,"small"),ng(),Ux(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(738,"li")(739,"code"),Ux(740,"medium"),ng(),Ux(741,": altura de 56px."),ng()(),wl(742,"blockquote")(743,"p"),Ux(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(745,"code"),Ux(746,"medium"),ng(),Ux(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(748,"a",35),Ux(749,"po-theme"),ng(),Ux(750,"."),ng()()()()(),wl(751,"h3"),Ux(752,"Interfaces"),ng(),wl(753,"h4",36)(754,"code",5),Ux(755,"PoHeaderActionTool"),ng()(),wl(756,"div",2)(757,"p")(758,"em"),Ux(759,"Interface"),ng(),Ux(760," que define a se\xE7\xE3o de Actions do header."),ng(),wl(761,"p"),Ux(762,"Indica\xE7\xE3o de uso:"),ng(),wl(763,"ul")(764,"li"),Ux(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),ng(),wl(766,"li"),Ux(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),ng(),wl(768,"li"),Ux(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),ng()(),wl(770,"blockquote")(771,"p"),Ux(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),ng()()(),wl(773,"h4",10),Ux(774,"Propriedades"),ng(),wl(775,"table",11)(776,"tr",12)(777,"th",13),Ux(778,"Nome"),ng(),wl(779,"th",13),Ux(780,"Tipo"),ng(),wl(781,"th",13),Ux(782,"Descri\xE7\xE3o"),ng()(),wl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),Ux(787," action"),Ul(788,"br"),ng()()(),wl(789,"td",18)(790,"code",37),Ux(791,"Function"),ng()(),wl(792,"td",21)(793,"em")(794,"strong"),Ux(795,"(opcional)"),ng()(),wl(796,"p"),Ux(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),ng(),wl(798,"p"),Ux(799,"Exemplo: "),wl(800,"code"),Ux(801,"action: this.myFunction.bind(this)"),ng()()()(),wl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),Ux(806," badge"),Ul(807,"br"),ng()()(),wl(808,"td",18)(809,"code",22),Ux(810,"number"),ng()(),wl(811,"td",21)(812,"em")(813,"strong"),Ux(814,"(opcional)"),ng()(),wl(815,"p"),Ux(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),ng()()(),wl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),Ux(821," icon"),Ul(822,"br"),ng()()(),wl(823,"td",18)(824,"code",24),Ux(825,"string"),ng()(),wl(826,"td",21)(827,"em")(828,"strong"),Ux(829,"(opcional)"),ng()(),wl(830,"p"),Ux(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),ng()()(),wl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),Ux(836," items"),Ul(837,"br"),ng()()(),wl(838,"td",18)(839,"code",38),Ux(840,"Array<PoHeaderActionToolItem>"),ng()(),wl(841,"td",21)(842,"em")(843,"strong"),Ux(844,"(opcional)"),ng()(),wl(845,"p"),Ux(846,"Itens de a\xE7\xF5es"),ng()()(),wl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),Ux(851," label"),Ul(852,"br"),ng()()(),wl(853,"td",18)(854,"code",24),Ux(855,"string"),ng()(),wl(856,"td",21)(857,"em")(858,"strong"),Ux(859,"(opcional)"),ng()(),wl(860,"p"),Ux(861,"T\xEDtulo da a\xE7\xE3o"),ng()()(),wl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Ux(866," link"),Ul(867,"br"),ng()()(),wl(868,"td",18)(869,"code",24),Ux(870,"string"),ng()(),wl(871,"td",21)(872,"em")(873,"strong"),Ux(874,"(opcional)"),ng()(),wl(875,"p"),Ux(876,"link utilizado no redirecionamento das p\xE1ginas."),ng()()(),wl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Ux(881," popover"),Ul(882,"br"),ng()()(),wl(883,"td",18)(884,"code",39),Ux(885,"PoHeaderActionPopoverAction"),ng()(),wl(886,"td",21)(887,"em")(888,"strong"),Ux(889,"(opcional)"),ng()(),wl(890,"p"),Ux(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),ng()()(),wl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Ux(896," tooltip"),Ul(897,"br"),ng()()(),wl(898,"td",18)(899,"code",24),Ux(900,"string"),ng()(),wl(901,"td",21)(902,"em")(903,"strong"),Ux(904,"(opcional)"),ng()(),wl(905,"p"),Ux(906,"Texto que ser\xE1 apresentado na tooltip"),ng()()()(),wl(907,"h4",36)(908,"code",5),Ux(909,"PoHeaderActionPopoverAction"),ng()(),wl(910,"div",2)(911,"p")(912,"em"),Ux(913,"Interface"),ng(),Ux(914," que define um template para uma a\xE7\xE3o."),ng()(),wl(915,"h4",10),Ux(916,"Propriedades"),ng(),wl(917,"table",11)(918,"tr",12)(919,"th",13),Ux(920,"Nome"),ng(),wl(921,"th",13),Ux(922,"Tipo"),ng(),wl(923,"th",13),Ux(924,"Descri\xE7\xE3o"),ng()(),wl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),Ux(929," content"),Ul(930,"br"),ng()()(),wl(931,"td",18)(932,"code",29),Ux(933,"TemplateRef<any>"),ng()(),wl(934,"td",21)(935,"p"),Ux(936,"Template que ser\xE1 renderizado dentro do popover."),ng()()(),wl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),Ux(941," width"),Ul(942,"br"),ng()()(),wl(943,"td",18)(944,"code",22),Ux(945,"number"),ng()(),wl(946,"td",21)(947,"em")(948,"strong"),Ux(949,"(opcional)"),ng()(),wl(950,"p"),Ux(951,"Largura, em pixels, do template renderizado dentro do popover."),ng(),wl(952,"p"),Ux(953,"Valores permitidos: de 240 a 800."),ng()()()(),wl(954,"h4",36)(955,"code",5),Ux(956,"PoHeaderActionToolItem"),ng()(),wl(957,"div",2)(958,"p")(959,"em"),Ux(960,"Interface"),ng(),Ux(961," que define uma lista de a\xE7\xF5es."),ng()(),wl(962,"h4",10),Ux(963,"Propriedades"),ng(),wl(964,"table",11)(965,"tr",12)(966,"th",13),Ux(967,"Nome"),ng(),wl(968,"th",13),Ux(969,"Tipo"),ng(),wl(970,"th",13),Ux(971,"Descri\xE7\xE3o"),ng()(),wl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Ux(976," action"),Ul(977,"br"),ng()()(),wl(978,"td",18)(979,"code",37),Ux(980,"Function"),ng()(),wl(981,"td",21)(982,"p"),Ux(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),ng(),wl(984,"p"),Ux(985,"Exemplo: "),wl(986,"code"),Ux(987,"action: this.myFunction.bind(this)"),ng()()()(),wl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),Ux(992," label"),Ul(993,"br"),ng()()(),wl(994,"td",18)(995,"code",24),Ux(996,"string"),ng()(),wl(997,"td",21)(998,"p"),Ux(999,"Label da a\xE7\xE3o"),ng()()()(),wl(1e3,"h4",36)(1001,"code",5),Ux(1002,"PoHeaderActions"),ng()(),wl(1003,"div",2)(1004,"p")(1005,"em"),Ux(1006,"Interface"),ng(),Ux(1007," que define uma lista de a\xE7\xF5es no sub-menu."),ng()(),wl(1008,"h4",10),Ux(1009,"Propriedades"),ng(),wl(1010,"table",11)(1011,"tr",12)(1012,"th",13),Ux(1013,"Nome"),ng(),wl(1014,"th",13),Ux(1015,"Tipo"),ng(),wl(1016,"th",13),Ux(1017,"Descri\xE7\xE3o"),ng()(),wl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),Ux(1022," action"),Ul(1023,"br"),ng()()(),wl(1024,"td",18)(1025,"code",37),Ux(1026,"Function"),ng()(),wl(1027,"td",21)(1028,"em")(1029,"strong"),Ux(1030,"(opcional)"),ng()(),wl(1031,"p"),Ux(1032,"Evento da a\xE7\xE3o"),ng(),wl(1033,"p"),Ux(1034," Exemplo: "),wl(1035,"code"),Ux(1036,"action: this.myFunction.bind(this)"),ng()()()(),wl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),Ux(1041," id"),Ul(1042,"br"),ng()()(),wl(1043,"td",18)(1044,"code",24),Ux(1045,"string"),ng()(),wl(1046,"td",21)(1047,"em")(1048,"strong"),Ux(1049,"(opcional)"),ng()(),wl(1050,"p"),Ux(1051,"Identificador da a\xE7\xE3o"),ng()()(),wl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),Ux(1056," label"),Ul(1057,"br"),ng()()(),wl(1058,"td",18)(1059,"code",24),Ux(1060,"string"),ng()(),wl(1061,"td",21)(1062,"p"),Ux(1063,"Label da a\xE7\xE3o"),ng()()(),wl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),Ux(1068," link"),Ul(1069,"br"),ng()()(),wl(1070,"td",18)(1071,"code",24),Ux(1072,"string"),ng()(),wl(1073,"td",21)(1074,"em")(1075,"strong"),Ux(1076,"(opcional)"),ng()(),wl(1077,"p"),Ux(1078,"link utilizado no redirecionamento das p\xE1ginas."),ng()()()(),wl(1079,"h4",36)(1080,"code",5),Ux(1081,"PoHeaderBrand"),ng()(),wl(1082,"div",2)(1083,"p")(1084,"em"),Ux(1085,"Interface"),ng(),Ux(1086," que define a se\xE7\xE3o de brand."),ng()(),wl(1087,"h4",10),Ux(1088,"Propriedades"),ng(),wl(1089,"table",11)(1090,"tr",12)(1091,"th",13),Ux(1092,"Nome"),ng(),wl(1093,"th",13),Ux(1094,"Tipo"),ng(),wl(1095,"th",13),Ux(1096,"Descri\xE7\xE3o"),ng()(),wl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),Ux(1101," action"),Ul(1102,"br"),ng()()(),wl(1103,"td",18)(1104,"code",37),Ux(1105,"Function"),ng()(),wl(1106,"td",21)(1107,"em")(1108,"strong"),Ux(1109,"(opcional)"),ng()(),wl(1110,"p"),Ux(1111,"Evento da a\xE7\xE3o"),ng(),wl(1112,"p"),Ux(1113," Exemplo: "),wl(1114,"code"),Ux(1115,"action: this.myFunction.bind(this)"),ng()()()(),wl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),Ux(1120," link"),Ul(1121,"br"),ng()()(),wl(1122,"td",18)(1123,"code",24),Ux(1124,"string"),ng()(),wl(1125,"td",21)(1126,"em")(1127,"strong"),Ux(1128,"(opcional)"),ng()(),wl(1129,"p"),Ux(1130,"link utilizado no redirecionamento das p\xE1ginas."),ng()()(),wl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),Ux(1135," logo"),Ul(1136,"br"),ng()()(),wl(1137,"td",18)(1138,"code",24),Ux(1139,"string"),ng()(),wl(1140,"td",21)(1141,"em")(1142,"strong"),Ux(1143,"(opcional)"),ng()(),wl(1144,"p"),Ux(1145,"Imagem da marca"),ng()()(),wl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),Ux(1150," smallLogo"),Ul(1151,"br"),ng()()(),wl(1152,"td",18)(1153,"code",24),Ux(1154,"string"),ng()(),wl(1155,"td",21)(1156,"em")(1157,"strong"),Ux(1158,"(opcional)"),ng()(),wl(1159,"p"),Ux(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),ng()()(),wl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),Ux(1165," title"),Ul(1166,"br"),ng()()(),wl(1167,"td",18)(1168,"code",24),Ux(1169,"string"),ng()(),wl(1170,"td",21)(1171,"em")(1172,"strong"),Ux(1173,"(opcional)"),ng()(),wl(1174,"p"),Ux(1175,"T\xEDtulo da marca"),ng()()()(),wl(1176,"h4",36)(1177,"code",5),Ux(1178,"PoHeaderLiterals"),ng()(),wl(1179,"div",2)(1180,"p"),Ux(1181,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1182,"code"),Ux(1183,"po-header"),ng(),Ux(1184,"."),ng()(),wl(1185,"h4",10),Ux(1186,"Propriedades"),ng(),wl(1187,"table",11)(1188,"tr",12)(1189,"th",13),Ux(1190,"Nome"),ng(),wl(1191,"th",13),Ux(1192,"Tipo"),ng(),wl(1193,"th",13),Ux(1194,"Descri\xE7\xE3o"),ng()(),wl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),Ux(1199," headerLinks"),Ul(1200,"br"),ng()()(),wl(1201,"td",18)(1202,"code",24),Ux(1203,"string"),ng()(),wl(1204,"td",21)(1205,"em")(1206,"strong"),Ux(1207,"(opcional)"),ng()(),wl(1208,"p"),Ux(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),ng()()(),wl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),Ux(1214," notifications"),Ul(1215,"br"),ng()()(),wl(1216,"td",18)(1217,"code",24),Ux(1218,"string"),ng()(),wl(1219,"td",21)(1220,"em")(1221,"strong"),Ux(1222,"(opcional)"),ng()(),wl(1223,"p"),Ux(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),wl(1225,"code"),Ux(1226,"badge"),ng()()()()(),wl(1227,"h4",36)(1228,"code",5),Ux(1229,"PoHeaderUser"),ng()(),wl(1230,"div",2)(1231,"p")(1232,"em"),Ux(1233,"Interface"),ng(),Ux(1234," que define a se\xE7\xE3o de Customer do header."),ng()(),wl(1235,"h4",10),Ux(1236,"Propriedades"),ng(),wl(1237,"table",11)(1238,"tr",12)(1239,"th",13),Ux(1240,"Nome"),ng(),wl(1241,"th",13),Ux(1242,"Tipo"),ng(),wl(1243,"th",13),Ux(1244,"Descri\xE7\xE3o"),ng()(),wl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),Ux(1249," action"),Ul(1250,"br"),ng()()(),wl(1251,"td",18)(1252,"code",37),Ux(1253,"Function"),ng()(),wl(1254,"td",21)(1255,"em")(1256,"strong"),Ux(1257,"(opcional)"),ng()(),wl(1258,"p"),Ux(1259,"Evento emitido ao clicar na se\xE7\xE3o"),ng(),wl(1260,"p"),Ux(1261,"Exemplo: "),wl(1262,"code"),Ux(1263,"action: this.myFunction.bind(this)"),ng()()()(),wl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),Ux(1268," avatar"),Ul(1269,"br"),ng()()(),wl(1270,"td",18)(1271,"code",24),Ux(1272,"string"),ng()(),wl(1273,"td",21)(1274,"p"),Ux(1275,"Logo representando o perfil"),ng()()(),wl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),Ux(1280," customerBrand"),Ul(1281,"br"),ng()()(),wl(1282,"td",18)(1283,"code",24),Ux(1284,"string"),ng()(),wl(1285,"td",21)(1286,"p"),Ux(1287,"Imagem da marca"),ng()()(),wl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),Ux(1292," items"),Ul(1293,"br"),ng()()(),wl(1294,"td",18)(1295,"code",38),Ux(1296,"Array<PoHeaderActionToolItem>"),ng()(),wl(1297,"td",21)(1298,"em")(1299,"strong"),Ux(1300,"(opcional)"),ng()(),wl(1301,"p"),Ux(1302,"Itens de a\xE7\xF5es"),ng(),wl(1303,"blockquote")(1304,"p"),Ux(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),ng()()()(),wl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),Ux(1310," popover"),Ul(1311,"br"),ng()()(),wl(1312,"td",18)(1313,"code",39),Ux(1314,"PoHeaderActionPopoverAction"),ng()(),wl(1315,"td",21)(1316,"em")(1317,"strong"),Ux(1318,"(opcional)"),ng()(),wl(1319,"p"),Ux(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),ng()()(),wl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),Ux(1325," status"),Ul(1326,"br"),ng()()(),wl(1327,"td",18)(1328,"code",40),Ux(1329,"'positive' "),ng(),wl(1330,"code",41),Ux(1331," 'negative' "),ng(),wl(1332,"code",42),Ux(1333," 'warning' "),ng(),wl(1334,"code",43),Ux(1335," 'disabled'"),ng()(),wl(1336,"td",21)(1337,"em")(1338,"strong"),Ux(1339,"(opcional)"),ng()(),wl(1340,"p"),Ux(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),ng(),wl(1342,"ul")(1343,"li")(1344,"code"),Ux(1345,"positive"),ng(),Ux(1346,": Define a cor do "),wl(1347,"code"),Ux(1348,"status"),ng(),Ux(1349," com a cor de feedback positivo."),ng(),wl(1350,"li")(1351,"code"),Ux(1352,"negative"),ng(),Ux(1353,": Define a cor do "),wl(1354,"code"),Ux(1355,"status"),ng(),Ux(1356," com a cor de feedback negative."),ng(),wl(1357,"li")(1358,"code"),Ux(1359,"warning"),ng(),Ux(1360,": Define a cor do "),wl(1361,"code"),Ux(1362,"status"),ng(),Ux(1363," com a cor de feedback warning."),ng(),wl(1364,"li")(1365,"code"),Ux(1366,"disabled"),ng(),Ux(1367,": Define a cor do "),wl(1368,"code"),Ux(1369,"status"),ng(),Ux(1370," com a cor de feedback disabled"),ng()()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-header-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ve,Ce,Ae,we],encapsulation:2})}return a})();var Ye=[{path:"",component:Pe}],Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Ye),vL]})}return a})();var Mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,Te]})}return a})();export{Mt as DocPoHeaderModule};