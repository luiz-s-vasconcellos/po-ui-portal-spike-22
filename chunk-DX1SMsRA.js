import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aW as Yp,c as r$1,s,aV as Ur,ae as Be$1,dd as CNe,M as Wl,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b4 as F3,cp as Uhe,c8 as Pde,bH as E3,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,de as pN,a7 as uN,bM as fN,a2 as QE,av as ql,aw as lo,ax as uo,a3 as pNe,aQ as px,aA as Tx,aS as gx,aD as Xy,aT as tN,aE as Qy,bR as CN}from'./main-BY5NURRA.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Wl(0,"po-header",0),r&2&&tw("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[CNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Header Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-header-basic/sample-po-header-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=Ex();Wl(0,"po-header",1),Sl(1,"div",2)(2,"po-input",3),Ew("ngModelChange",function(d){return Xy(p),tN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Qy(d)}),sg(),JA(),Sl(3,"po-input",4),Ew("ngModelChange",function(d){return Xy(p),tN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Qy(d)}),sg(),JA(),Sl(4,"po-input",5),Ew("ngModelChange",function(d){return Xy(p),tN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Qy(d)}),sg(),JA(),Sl(5,"div",6)(6,"po-button",7),ht("p-click",function(){return i.addBrand()}),sg()()(),Wl(7,"hr"),Sl(8,"div",8)(9,"h3",9),Jx(10,"A\xE7\xF5es dos itens de menu"),sg(),Sl(11,"po-input",10),Ew("ngModelChange",function(d){return Xy(p),tN(i.menuActionEvent,d)||(i.menuActionEvent=d),Qy(d)}),sg(),JA(),Sl(12,"po-input",11),Ew("ngModelChange",function(d){return Xy(p),tN(i.menuActionLabel,d)||(i.menuActionLabel=d),Qy(d)}),sg(),JA(),Sl(13,"po-button",12),ht("p-click",function(){return i.addAction()}),sg()(),Wl(14,"hr"),Sl(15,"h3",9),Jx(16,"A\xE7\xF5es das configura\xE7\xF5es"),sg(),Sl(17,"form",8,0)(19,"po-input",13),Ew("ngModelChange",function(d){return Xy(p),tN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Qy(d)}),sg(),JA(),Sl(20,"po-input",14),Ew("ngModelChange",function(d){return Xy(p),tN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Qy(d)}),sg(),JA(),Sl(21,"po-number",15),Ew("ngModelChange",function(d){return Xy(p),tN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Qy(d)}),sg(),JA(),Sl(22,"po-switch",16),Ew("ngModelChange",function(d){return Xy(p),tN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Qy(d)}),sg(),JA(),Sl(23,"po-button",17),ht("p-click",function(){return i.addTool(i.actionNewTool)}),sg()(),Wl(24,"hr"),Sl(25,"h3",9),Jx(26,"A\xE7\xF5es do Usu\xE1rio"),sg(),Sl(27,"form",8,0)(29,"po-input",18),Ew("ngModelChange",function(d){return Xy(p),tN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Qy(d)}),sg(),JA(),Sl(30,"po-input",19),Ew("ngModelChange",function(d){return Xy(p),tN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Qy(d)}),sg(),JA(),Sl(31,"po-radio-group",20),Ew("ngModelChange",function(d){return Xy(p),tN(i.newActionUser.status,d)||(i.newActionUser.status=d),Qy(d)}),sg(),JA(),Sl(32,"po-button",17),ht("p-click",function(){return i.addUser()}),sg(),Wl(33,"hr"),Sl(34,"h3",9),Jx(35,"Varia\xE7\xF5es de tamanho"),sg(),Sl(36,"div",8)(37,"po-radio-group",21),Ew("ngModelChange",function(d){return Xy(p),tN(i.size,d)||(i.size=d),Qy(d)}),sg(),JA(),sg(),Wl(38,"hr"),Sl(39,"po-button",22),ht("p-click",function(){return i.reset()}),sg()();}r&2&&(tw("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Vp(2),Dw("ngModel",i.headerBrandTitle),t0(),Vp(),Dw("ngModel",i.headerBrandLogo),t0(),Vp(),Dw("ngModel",i.headerBrandSmallLogo),t0(),Vp(7),Dw("ngModel",i.menuActionEvent),t0(),Vp(),Dw("ngModel",i.menuActionLabel),t0(),Vp(),tw("p-disabled",!i.menuActionLabel),Vp(6),Dw("ngModel",i.actionNewTool.icon),t0(),Vp(),Dw("ngModel",i.actionNewTool.tooltip),t0(),Vp(),Dw("ngModel",i.actionNewTool.badge),t0(),Vp(),Dw("ngModel",i.actionNewToolEvent),t0(),Vp(),tw("p-disabled",i.actionTools.length>2),Vp(6),Dw("ngModel",i.newActionUser.customerBrand),t0(),Vp(),Dw("ngModel",i.newActionUser.avatar),t0(),Vp(),Dw("ngModel",i.newActionUser.status),tw("p-options",pN(28,Le,uN(24,_e),uN(25,He),uN(26,Me),uN(27,Be))),t0(),Vp(),tw("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Vp(5),Dw("ngModel",i.size),tw("p-options",fN(35,Ne,uN(33,ke),uN(34,De))),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,F3,Uhe,Pde,E3,CNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Header Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-header-labs/sample-po-header-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-header
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&Wl(0,"po-button",4),a&2){let l=A.$implicit;tw("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Sl(0,"div",2)(1,"p"),Jx(2,"Meus aplicativos"),sg(),Wl(3,"br"),Sl(4,"div",3),px(5,We,1,1,"po-button",4,ze),sg()()),a&2){let l=Tx();Vp(5),gx(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ur.Top});}static \u0275fac=function(r){return new(r||a)(C(Yp),C(Be$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&ql(Ue,5),r&2){let p;lo(p=uo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Wl(0,"po-header",1),QE(1,qe,7,0,"ng-template",null,0,CN)),r&2&&tw("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,CNe],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Header Apps"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-header-apps/sample-po-header-apps.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-header
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-apps"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-header"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoHeaderComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"O componente "),Sl(18,"code"),Jx(19,"po-header"),sg(),Jx(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Sl(21,"code"),Jx(22,"p-brand"),sg(),Jx(23,", "),Sl(24,"code"),Jx(25,"p-menu-items"),sg(),Jx(26,", "),Sl(27,"code"),Jx(28,"p-actions-tools"),sg(),Jx(29," e "),Sl(30,"code"),Jx(31,"p-header-user"),sg(),Jx(32,"."),sg(),Sl(33,"ul")(34,"li")(35,"code"),Jx(36,"p-brand"),sg(),Jx(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),sg(),Sl(38,"li")(39,"code"),Jx(40,"p-menu-items"),sg(),Jx(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),sg(),Sl(42,"li")(43,"code"),Jx(44,"p-actions-tools"),sg(),Jx(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),sg(),Sl(46,"li")(47,"code"),Jx(48,"p-header-user"),sg(),Jx(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),sg()(),Sl(50,"p"),Jx(51,"O componente "),Sl(52,"code"),Jx(53,"po-header"),sg(),Jx(54," pode ser usado de duas formas:"),sg(),Sl(55,"p"),Jx(56,"Com "),Sl(57,"code"),Jx(58,"po-menu"),sg(),Jx(59," definido pelo usu\xE1rio:"),sg(),Sl(60,"pre")(61,"code"),Jx(62,`...
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
`),sg()(),Sl(63,"p"),Jx(64,"Passando os itens diretamente para o "),Sl(65,"code"),Jx(66,"po-header"),sg(),Jx(67," pela propriedade "),Sl(68,"code"),Jx(69,"p-menus"),sg(),Jx(70,":"),sg(),Sl(71,"pre")(72,"code"),Jx(73,`...
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
`),sg()(),Sl(74,"h4"),Jx(75,"Tokens customiz\xE1veis"),sg(),Sl(76,"p"),Jx(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(78,"blockquote")(79,"p"),Jx(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(81,"a",6),Jx(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(83,"."),sg()(),Sl(84,"table")(85,"thead")(86,"tr")(87,"th"),Jx(88,"Propriedade"),sg(),Sl(89,"th"),Jx(90,"Descri\xE7\xE3o"),sg(),Sl(91,"th"),Jx(92,"Valor Padr\xE3o"),sg()()(),Sl(93,"tbody")(94,"tr")(95,"td")(96,"code"),Jx(97,"--font-family"),sg()(),Sl(98,"td"),Jx(99,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(100,"td")(101,"code"),Jx(102,"var(--font-family-theme)"),sg()()(),Sl(103,"tr")(104,"td")(105,"code"),Jx(106,"--font-weight"),sg()(),Sl(107,"td"),Jx(108,"Peso da fonte"),sg(),Sl(109,"td")(110,"code"),Jx(111,"var(--font-weight-bold)"),sg()()(),Sl(112,"tr")(113,"td")(114,"code"),Jx(115,"--text-color"),sg()(),Sl(116,"td"),Jx(117,"Cor do texto"),sg(),Sl(118,"td")(119,"code"),Jx(120,"var(--color-neutral-dark-70)"),sg()()(),Sl(121,"tr")(122,"td")(123,"code"),Jx(124,"--outline-color-focused"),sg()(),Sl(125,"td"),Jx(126,"Cor do outline dos itens de sub-menu e customer"),sg(),Sl(127,"td")(128,"code"),Jx(129,"var(--color-neutral-dark-95)"),sg()()(),Sl(130,"tr")(131,"td")(132,"code"),Jx(133,"--object-fit-brand"),sg()(),Sl(134,"td"),Jx(135,"Valor do object-fit da imagem do logo"),sg(),Sl(136,"td")(137,"code"),Jx(138,"contain"),sg()()(),Sl(139,"tr")(140,"td")(141,"code"),Jx(142,"--object-fit-customer"),sg()(),Sl(143,"td"),Jx(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),sg(),Sl(145,"td")(146,"code"),Jx(147,"contain"),sg()()(),Sl(148,"tr")(149,"td")(150,"code"),Jx(151,"--object-fit-customer-user"),sg()(),Sl(152,"td"),Jx(153,"Valor do object-fit da imagem do avatar"),sg(),Sl(154,"td")(155,"code"),Jx(156,"cover"),sg()()(),Sl(157,"tr")(158,"td")(159,"strong"),Jx(160,"Header"),sg()(),Wl(161,"td")(162,"td"),sg(),Sl(163,"tr")(164,"td")(165,"code"),Jx(166,"--background-color"),sg()(),Sl(167,"td"),Jx(168,"Cor de background do header"),sg(),Sl(169,"td")(170,"code"),Jx(171,"var(--color-neutral-light-05)"),sg()()(),Sl(172,"tr")(173,"td")(174,"code"),Jx(175,"--border-radius-bottom-left"),sg()(),Sl(176,"td"),Jx(177,"Valor do radius do lado esquerdo do header"),sg(),Sl(178,"td")(179,"code"),Jx(180,"var(--border-radius-md)"),sg()()(),Sl(181,"tr")(182,"td")(183,"code"),Jx(184,"--border-radius-bottom-right"),sg()(),Sl(185,"td"),Jx(186,"Valor do radius do lado direito do header"),sg(),Sl(187,"td")(188,"code"),Jx(189,"var(--border-radius-md)"),sg()()(),Sl(190,"tr")(191,"td")(192,"code"),Jx(193,"--base shadow"),sg()(),Sl(194,"td"),Jx(195,"Cor da sombra do header"),sg(),Sl(196,"td")(197,"code"),Jx(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),sg()()(),Sl(199,"tr")(200,"td")(201,"code"),Jx(202,"--stroke-color"),sg()(),Sl(203,"td"),Jx(204,"Cor da borda inferior do header"),sg(),Sl(205,"td")(206,"code"),Jx(207,"var(--color-brand-01-base)"),sg()()(),Sl(208,"tr")(209,"td")(210,"strong"),Jx(211,"Sub-menu"),sg()(),Wl(212,"td")(213,"td"),sg(),Sl(214,"tr")(215,"td")(216,"code"),Jx(217,"--border-radius"),sg()(),Sl(218,"td"),Jx(219,"Valor do radius dos itens do sub-menu"),sg(),Sl(220,"td")(221,"code"),Jx(222,"var(--border-radius-md);"),sg()()(),Sl(223,"tr")(224,"td")(225,"code"),Jx(226,"--text-color-submenu"),sg()(),Sl(227,"td"),Jx(228,"Cor do texto dos itens do sub-menu"),sg(),Sl(229,"td")(230,"code"),Jx(231,"var(--color-brand-01-base)"),sg()()(),Sl(232,"tr")(233,"td")(234,"code"),Jx(235,"--icon-color"),sg()(),Sl(236,"td"),Jx(237,"Cor do \xEDcone do sub-menu com itens"),sg(),Sl(238,"td")(239,"code"),Jx(240,"var(--color-brand-01-base)"),sg()()(),Sl(241,"tr")(242,"td")(243,"code"),Jx(244,"--border-color"),sg()(),Sl(245,"td"),Jx(246,"Cor da borda"),sg(),Sl(247,"td")(248,"code"),Jx(249,"var(--color-transparent)"),sg()()(),Sl(250,"tr")(251,"td")(252,"code"),Jx(253,"--shadow"),sg()(),Sl(254,"td"),Jx(255,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(256,"td")(257,"code"),Jx(258,"var(--shadow-none)"),sg()()(),Sl(259,"tr")(260,"td")(261,"code"),Jx(262,"--font-family-submenu"),sg()(),Sl(263,"td"),Jx(264,"Fonte do texto dos itens de sub-menu"),sg(),Sl(265,"td")(266,"code"),Jx(267,"var(--font-family-theme)"),sg()()(),Sl(268,"tr")(269,"td")(270,"code"),Jx(271,"--font-weight-submenu"),sg()(),Sl(272,"td"),Jx(273,"Peso da fonte do texto dos itens de sub-menu"),sg(),Sl(274,"td")(275,"code"),Jx(276,"var(--font-weight-bold)"),sg()()(),Sl(277,"tr")(278,"td")(279,"strong"),Jx(280,"Sub-menu - Hover"),sg()(),Wl(281,"td")(282,"td"),sg(),Sl(283,"tr")(284,"td")(285,"code"),Jx(286,"--background-hover"),sg()(),Sl(287,"td"),Jx(288,"Cor de background dos itens do sub-menu no estado hover"),sg(),Sl(289,"td")(290,"code"),Jx(291,"var(--color-brand-01-lighter)"),sg()()(),Sl(292,"tr")(293,"td")(294,"code"),Jx(295,"--icon-color-hover"),sg()(),Sl(296,"td"),Jx(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),sg(),Sl(298,"td")(299,"code"),Jx(300,"var(--color-brand-01-darkest)"),sg()()(),Sl(301,"tr")(302,"td")(303,"code"),Jx(304,"--text-color-hover"),sg()(),Sl(305,"td"),Jx(306,"Cor do texto dos itens de sub-menu no estado hover"),sg(),Sl(307,"td")(308,"code"),Jx(309,"var(--color-brand-01-darkest)"),sg()()(),Sl(310,"tr")(311,"td")(312,"strong"),Jx(313,"Sub-menu - pressed"),sg()(),Wl(314,"td")(315,"td"),sg(),Sl(316,"tr")(317,"td")(318,"code"),Jx(319,"--background-pressed"),sg()(),Sl(320,"td"),Jx(321,"Cor de background dos itens do sub-menu no estado pressed"),sg(),Sl(322,"td")(323,"code"),Jx(324,"var(--color-brand-01-light)"),sg()()(),Sl(325,"tr")(326,"td")(327,"code"),Jx(328,"--icon-color-pressed"),sg()(),Sl(329,"td"),Jx(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),sg(),Sl(331,"td")(332,"code"),Jx(333,"var(--color-brand-01-darkest)"),sg()()(),Sl(334,"tr")(335,"td")(336,"code"),Jx(337,"--text-color-pressed"),sg()(),Sl(338,"td"),Jx(339,"Cor do texto dos itens de sub-menu no estado pressed"),sg(),Sl(340,"td")(341,"code"),Jx(342,"var(--color-brand-01-darkest)"),sg()()(),Sl(343,"tr")(344,"td")(345,"strong"),Jx(346,"Sub-menu - selected"),sg()(),Wl(347,"td")(348,"td"),sg(),Sl(349,"tr")(350,"td")(351,"code"),Jx(352,"--background-selected"),sg()(),Sl(353,"td"),Jx(354,"Cor de background dos itens do sub-menu no estado selected"),sg(),Sl(355,"td")(356,"code"),Jx(357,"var(--color-brand-01-light)"),sg()()(),Sl(358,"tr")(359,"td")(360,"code"),Jx(361,"--icon-color-selected"),sg()(),Sl(362,"td"),Jx(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),sg(),Sl(364,"td")(365,"code"),Jx(366,"var(--color-neutral-dark-95)"),sg()()(),Sl(367,"tr")(368,"td")(369,"code"),Jx(370,"--text-color-selected"),sg()(),Sl(371,"td"),Jx(372,"Cor do texto dos itens de sub-menu no estado selected"),sg(),Sl(373,"td")(374,"code"),Jx(375,"var(--color-brand-01-darkest)"),sg()()(),Sl(376,"tr")(377,"td")(378,"strong"),Jx(379,"Customer"),sg()(),Wl(380,"td")(381,"td"),sg(),Sl(382,"tr")(383,"td")(384,"code"),Jx(385,"--background-color-customer"),sg()(),Sl(386,"td"),Jx(387,"Cor do background da se\xE7\xE3o customer"),sg(),Sl(388,"td")(389,"code"),Jx(390,"var(--color-neutral-light-00)"),sg()()(),Sl(391,"tr")(392,"td")(393,"code"),Jx(394,"--border-color"),sg()(),Sl(395,"td"),Jx(396,"Cor da borda da se\xE7\xE3o customer"),sg(),Sl(397,"td")(398,"code"),Jx(399,"var(--color-neutral-light-10)"),sg()()(),Sl(400,"tr")(401,"td")(402,"code"),Jx(403,"--border-style"),sg()(),Sl(404,"td"),Jx(405,"Estilo da borda da se\xE7\xE3o customer"),sg(),Sl(406,"td")(407,"code"),Jx(408,"solid"),sg()()(),Sl(409,"tr")(410,"td")(411,"code"),Jx(412,"--border-width"),sg()(),Sl(413,"td"),Jx(414,"Largura da borda da se\xE7\xE3o customer"),sg(),Sl(415,"td")(416,"code"),Jx(417,"var(--border-width-sm)"),sg()()(),Sl(418,"tr")(419,"td")(420,"strong"),Jx(421,"Customer - hover"),sg()(),Wl(422,"td")(423,"td"),sg(),Sl(424,"tr")(425,"td")(426,"code"),Jx(427,"--background-color-customer-hover"),sg()(),Sl(428,"td"),Jx(429,"Cor do background da se\xE7\xE3o customer no estado hover"),sg(),Sl(430,"td")(431,"code"),Jx(432,"var(--color-brand-01-lighter)"),sg()()(),Sl(433,"tr")(434,"td")(435,"strong"),Jx(436,"Customer - pressed"),sg()(),Wl(437,"td")(438,"td"),sg(),Sl(439,"tr")(440,"td")(441,"code"),Jx(442,"--background-color-customer-pressed"),sg()(),Sl(443,"td"),Jx(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),sg(),Sl(445,"td")(446,"code"),Jx(447,"var(--color-brand-01-light)"),sg()()(),Sl(448,"tr")(449,"td")(450,"code"),Jx(451,"--border-width-pressed"),sg()(),Sl(452,"td"),Jx(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),sg(),Sl(454,"td")(455,"code"),Jx(456,"var(--border-width-md)"),sg()()()()()(),Sl(457,"div",7)(458,"h4",8),Jx(459,"Seletor"),sg(),Sl(460,"pre",9),Jx(461,`<po-header
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
`),sg()(),Sl(462,"h4",10),Jx(463,"Propriedades"),sg(),Sl(464,"table",11)(465,"tr",12)(466,"th",13),Jx(467,"Nome"),sg(),Sl(468,"th",13),Jx(469,"Tipo"),sg(),Sl(470,"th",13),Jx(471,"Padr\xE3o"),sg(),Sl(472,"th",13),Jx(473,"Descri\xE7\xE3o"),sg()(),Sl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),Jx(478," p-actions-tools"),Wl(479,"br"),sg()()(),Sl(480,"td",18)(481,"code",19),Jx(482,"Array<PoHeaderActionTool>"),sg()(),Sl(483,"td",20),Jx(484,"-"),sg(),Sl(485,"td",21)(486,"em")(487,"strong"),Jx(488,"(opcional)"),sg()(),Sl(489,"p"),Jx(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Sl(491,"code"),Jx(492,"po-header"),sg()(),Sl(493,"blockquote")(494,"p"),Jx(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),sg()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Jx(500," p-amount-more"),Wl(501,"br"),sg()()(),Sl(502,"td",18)(503,"code",22),Jx(504,"number"),sg()(),Sl(505,"td",20),Jx(506,"-"),sg(),Sl(507,"td",21)(508,"em")(509,"strong"),Jx(510,"(opcional)"),sg()(),Sl(511,"p"),Jx(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),sg(),Sl(513,"blockquote")(514,"p"),Jx(515,"Ao utilizar essa propriedade o "),Sl(516,"code"),Jx(517,"po-header"),sg(),Jx(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),sg()()()(),Sl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Jx(523," p-brand"),Wl(524,"br"),sg()()(),Sl(525,"td",18)(526,"code",23),Jx(527,"PoHeaderBrand "),sg(),Sl(528,"code",24),Jx(529," string"),sg()(),Sl(530,"td",20),Jx(531,"-"),sg(),Sl(532,"td",21)(533,"em")(534,"strong"),Jx(535,"(opcional)"),sg()(),Sl(536,"p"),Jx(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Sl(538,"code"),Jx(539,"po-header"),sg()(),Sl(540,"p"),Jx(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),sg()()(),Sl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),Jx(546," (p-colapsed-menu)"),Wl(547,"br"),sg()()(),Sl(548,"td",18)(549,"code",27),Jx(550,"EventEmitter"),sg()(),Sl(551,"td",20),Jx(552,"-"),sg(),Sl(553,"td",21)(554,"em")(555,"strong"),Jx(556,"(opcional)"),sg()(),Sl(557,"p"),Jx(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),sg()()(),Sl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Jx(563," p-filter-menu"),Wl(564,"br"),sg()()(),Sl(565,"td",18)(566,"code",28),Jx(567,"boolean"),sg()(),Sl(568,"td",20),Jx(569,"-"),sg(),Sl(570,"td",21)(571,"em")(572,"strong"),Jx(573,"(opcional)"),sg()(),Sl(574,"p"),Jx(575,"Habilita campo para filtrar itens no menu"),sg()()(),Sl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),Jx(580," p-header-template"),Wl(581,"br"),sg()()(),Sl(582,"td",18)(583,"code",29),Jx(584,"TemplateRef<any>"),sg()(),Sl(585,"td",20),Jx(586,"-"),sg(),Sl(587,"td",21)(588,"em")(589,"strong"),Jx(590,"(opcional)"),sg()(),Sl(591,"p"),Jx(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Sl(593,"code"),Jx(594,"p-menu-items"),sg()()()(),Sl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),Jx(599," p-header-user"),Wl(600,"br"),sg()()(),Sl(601,"td",18)(602,"code",30),Jx(603,"PoHeaderUser"),sg()(),Sl(604,"td",20),Jx(605,"-"),sg(),Sl(606,"td",21)(607,"em")(608,"strong"),Jx(609,"(opcional)"),sg()(),Sl(610,"p"),Jx(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Sl(612,"code"),Jx(613,"po-header"),sg()()()(),Sl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),Jx(618," p-hide-button-menu"),Wl(619,"br"),sg()()(),Sl(620,"td",18)(621,"code",28),Jx(622,"boolean"),sg()(),Sl(623,"td",20),Jx(624,"-"),sg(),Sl(625,"td",21)(626,"em")(627,"strong"),Jx(628,"(opcional)"),sg()(),Sl(629,"p"),Jx(630,"Esconde o bot\xE3o de menu colapsado."),sg()()(),Sl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),Jx(635," p-literals"),Wl(636,"br"),sg()()(),Sl(637,"td",18)(638,"code",31),Jx(639,"PoHeaderLiterals"),sg()(),Sl(640,"td",20),Jx(641,"-"),sg(),Sl(642,"td",21)(643,"em")(644,"strong"),Jx(645,"(opcional)"),sg()(),Sl(646,"p"),Jx(647,"Objeto com a literal usada na propriedade "),Sl(648,"code"),Jx(649,"p-literals"),sg(),Jx(650,"."),sg(),Sl(651,"p"),Jx(652,"Para customizar a literal, basta declarar um objeto do tipo "),Sl(653,"code"),Jx(654,"PoHeaderLiterals"),sg(),Jx(655," conforme exemplo abaixo:"),sg(),Sl(656,"pre")(657,"code"),Jx(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),sg()(),Sl(659,"p"),Jx(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(661,"pre")(662,"code"),Jx(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),sg()(),Sl(664,"blockquote")(665,"p"),Jx(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(667,"a",32)(668,"code"),Jx(669,"PoI18nService"),sg()(),Jx(670," ou do browser."),sg()()()(),Sl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Jx(675," p-menus"),Wl(676,"br"),sg()()(),Sl(677,"td",18)(678,"code",33),Jx(679,"Array<PoMenuItem>"),sg()(),Sl(680,"td",20),Jx(681,"-"),sg(),Sl(682,"td",21)(683,"em")(684,"strong"),Jx(685,"(opcional)"),sg()(),Sl(686,"p"),Jx(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg(),Sl(688,"blockquote")(689,"p"),Jx(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),sg()()()(),Sl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),Jx(695," p-menu-items"),Wl(696,"br"),sg()()(),Sl(697,"td",18)(698,"code",34),Jx(699,"Array<PoHeaderActions>"),sg()(),Sl(700,"td",20),Jx(701,"-"),sg(),Sl(702,"td",21)(703,"em")(704,"strong"),Jx(705,"(opcional)"),sg()(),Sl(706,"p"),Jx(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Sl(708,"code"),Jx(709,"po-header"),sg(),Jx(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),sg(),Sl(711,"blockquote")(712,"p"),Jx(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),sg()()()(),Sl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),Jx(718," p-size"),Wl(719,"br"),sg()()(),Sl(720,"td",18)(721,"code",24),Jx(722,"string"),sg()(),Sl(723,"td",20)(724,"p")(725,"code"),Jx(726,"medium"),sg()()(),Sl(727,"td",21)(728,"em")(729,"strong"),Jx(730,"(opcional)"),sg()(),Sl(731,"p"),Jx(732,"Define o tamanho do componente:"),sg(),Sl(733,"ul")(734,"li")(735,"code"),Jx(736,"small"),sg(),Jx(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(738,"li")(739,"code"),Jx(740,"medium"),sg(),Jx(741,": altura de 56px."),sg()(),Sl(742,"blockquote")(743,"p"),Jx(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(745,"code"),Jx(746,"medium"),sg(),Jx(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(748,"a",35),Jx(749,"po-theme"),sg(),Jx(750,"."),sg()()()()(),Sl(751,"h3"),Jx(752,"Interfaces"),sg(),Sl(753,"h4",36)(754,"code",5),Jx(755,"PoHeaderActionTool"),sg()(),Sl(756,"div",2)(757,"p")(758,"em"),Jx(759,"Interface"),sg(),Jx(760," que define a se\xE7\xE3o de Actions do header."),sg(),Sl(761,"p"),Jx(762,"Indica\xE7\xE3o de uso:"),sg(),Sl(763,"ul")(764,"li"),Jx(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),sg(),Sl(766,"li"),Jx(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),sg(),Sl(768,"li"),Jx(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),sg()(),Sl(770,"blockquote")(771,"p"),Jx(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),sg()()(),Sl(773,"h4",10),Jx(774,"Propriedades"),sg(),Sl(775,"table",11)(776,"tr",12)(777,"th",13),Jx(778,"Nome"),sg(),Sl(779,"th",13),Jx(780,"Tipo"),sg(),Sl(781,"th",13),Jx(782,"Descri\xE7\xE3o"),sg()(),Sl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),Jx(787," action"),Wl(788,"br"),sg()()(),Sl(789,"td",18)(790,"code",37),Jx(791,"Function"),sg()(),Sl(792,"td",21)(793,"em")(794,"strong"),Jx(795,"(opcional)"),sg()(),Sl(796,"p"),Jx(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Sl(798,"p"),Jx(799,"Exemplo: "),Sl(800,"code"),Jx(801,"action: this.myFunction.bind(this)"),sg()()()(),Sl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),Jx(806," badge"),Wl(807,"br"),sg()()(),Sl(808,"td",18)(809,"code",22),Jx(810,"number"),sg()(),Sl(811,"td",21)(812,"em")(813,"strong"),Jx(814,"(opcional)"),sg()(),Sl(815,"p"),Jx(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),sg()()(),Sl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),Jx(821," icon"),Wl(822,"br"),sg()()(),Sl(823,"td",18)(824,"code",24),Jx(825,"string"),sg()(),Sl(826,"td",21)(827,"em")(828,"strong"),Jx(829,"(opcional)"),sg()(),Sl(830,"p"),Jx(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),sg()()(),Sl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),Jx(836," items"),Wl(837,"br"),sg()()(),Sl(838,"td",18)(839,"code",38),Jx(840,"Array<PoHeaderActionToolItem>"),sg()(),Sl(841,"td",21)(842,"em")(843,"strong"),Jx(844,"(opcional)"),sg()(),Sl(845,"p"),Jx(846,"Itens de a\xE7\xF5es"),sg()()(),Sl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),Jx(851," label"),Wl(852,"br"),sg()()(),Sl(853,"td",18)(854,"code",24),Jx(855,"string"),sg()(),Sl(856,"td",21)(857,"em")(858,"strong"),Jx(859,"(opcional)"),sg()(),Sl(860,"p"),Jx(861,"T\xEDtulo da a\xE7\xE3o"),sg()()(),Sl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Jx(866," link"),Wl(867,"br"),sg()()(),Sl(868,"td",18)(869,"code",24),Jx(870,"string"),sg()(),Sl(871,"td",21)(872,"em")(873,"strong"),Jx(874,"(opcional)"),sg()(),Sl(875,"p"),Jx(876,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Sl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Jx(881," popover"),Wl(882,"br"),sg()()(),Sl(883,"td",18)(884,"code",39),Jx(885,"PoHeaderActionPopoverAction"),sg()(),Sl(886,"td",21)(887,"em")(888,"strong"),Jx(889,"(opcional)"),sg()(),Sl(890,"p"),Jx(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Sl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Jx(896," tooltip"),Wl(897,"br"),sg()()(),Sl(898,"td",18)(899,"code",24),Jx(900,"string"),sg()(),Sl(901,"td",21)(902,"em")(903,"strong"),Jx(904,"(opcional)"),sg()(),Sl(905,"p"),Jx(906,"Texto que ser\xE1 apresentado na tooltip"),sg()()()(),Sl(907,"h4",36)(908,"code",5),Jx(909,"PoHeaderActionPopoverAction"),sg()(),Sl(910,"div",2)(911,"p")(912,"em"),Jx(913,"Interface"),sg(),Jx(914," que define um template para uma a\xE7\xE3o."),sg()(),Sl(915,"h4",10),Jx(916,"Propriedades"),sg(),Sl(917,"table",11)(918,"tr",12)(919,"th",13),Jx(920,"Nome"),sg(),Sl(921,"th",13),Jx(922,"Tipo"),sg(),Sl(923,"th",13),Jx(924,"Descri\xE7\xE3o"),sg()(),Sl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),Jx(929," content"),Wl(930,"br"),sg()()(),Sl(931,"td",18)(932,"code",29),Jx(933,"TemplateRef<any>"),sg()(),Sl(934,"td",21)(935,"p"),Jx(936,"Template que ser\xE1 renderizado dentro do popover."),sg()()(),Sl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),Jx(941," width"),Wl(942,"br"),sg()()(),Sl(943,"td",18)(944,"code",22),Jx(945,"number"),sg()(),Sl(946,"td",21)(947,"em")(948,"strong"),Jx(949,"(opcional)"),sg()(),Sl(950,"p"),Jx(951,"Largura, em pixels, do template renderizado dentro do popover."),sg(),Sl(952,"p"),Jx(953,"Valores permitidos: de 240 a 800."),sg()()()(),Sl(954,"h4",36)(955,"code",5),Jx(956,"PoHeaderActionToolItem"),sg()(),Sl(957,"div",2)(958,"p")(959,"em"),Jx(960,"Interface"),sg(),Jx(961," que define uma lista de a\xE7\xF5es."),sg()(),Sl(962,"h4",10),Jx(963,"Propriedades"),sg(),Sl(964,"table",11)(965,"tr",12)(966,"th",13),Jx(967,"Nome"),sg(),Sl(968,"th",13),Jx(969,"Tipo"),sg(),Sl(970,"th",13),Jx(971,"Descri\xE7\xE3o"),sg()(),Sl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Jx(976," action"),Wl(977,"br"),sg()()(),Sl(978,"td",18)(979,"code",37),Jx(980,"Function"),sg()(),Sl(981,"td",21)(982,"p"),Jx(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Sl(984,"p"),Jx(985,"Exemplo: "),Sl(986,"code"),Jx(987,"action: this.myFunction.bind(this)"),sg()()()(),Sl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),Jx(992," label"),Wl(993,"br"),sg()()(),Sl(994,"td",18)(995,"code",24),Jx(996,"string"),sg()(),Sl(997,"td",21)(998,"p"),Jx(999,"Label da a\xE7\xE3o"),sg()()()(),Sl(1e3,"h4",36)(1001,"code",5),Jx(1002,"PoHeaderActions"),sg()(),Sl(1003,"div",2)(1004,"p")(1005,"em"),Jx(1006,"Interface"),sg(),Jx(1007," que define uma lista de a\xE7\xF5es no sub-menu."),sg()(),Sl(1008,"h4",10),Jx(1009,"Propriedades"),sg(),Sl(1010,"table",11)(1011,"tr",12)(1012,"th",13),Jx(1013,"Nome"),sg(),Sl(1014,"th",13),Jx(1015,"Tipo"),sg(),Sl(1016,"th",13),Jx(1017,"Descri\xE7\xE3o"),sg()(),Sl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),Jx(1022," action"),Wl(1023,"br"),sg()()(),Sl(1024,"td",18)(1025,"code",37),Jx(1026,"Function"),sg()(),Sl(1027,"td",21)(1028,"em")(1029,"strong"),Jx(1030,"(opcional)"),sg()(),Sl(1031,"p"),Jx(1032,"Evento da a\xE7\xE3o"),sg(),Sl(1033,"p"),Jx(1034," Exemplo: "),Sl(1035,"code"),Jx(1036,"action: this.myFunction.bind(this)"),sg()()()(),Sl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),Jx(1041," id"),Wl(1042,"br"),sg()()(),Sl(1043,"td",18)(1044,"code",24),Jx(1045,"string"),sg()(),Sl(1046,"td",21)(1047,"em")(1048,"strong"),Jx(1049,"(opcional)"),sg()(),Sl(1050,"p"),Jx(1051,"Identificador da a\xE7\xE3o"),sg()()(),Sl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),Jx(1056," label"),Wl(1057,"br"),sg()()(),Sl(1058,"td",18)(1059,"code",24),Jx(1060,"string"),sg()(),Sl(1061,"td",21)(1062,"p"),Jx(1063,"Label da a\xE7\xE3o"),sg()()(),Sl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),Jx(1068," link"),Wl(1069,"br"),sg()()(),Sl(1070,"td",18)(1071,"code",24),Jx(1072,"string"),sg()(),Sl(1073,"td",21)(1074,"em")(1075,"strong"),Jx(1076,"(opcional)"),sg()(),Sl(1077,"p"),Jx(1078,"link utilizado no redirecionamento das p\xE1ginas."),sg()()()(),Sl(1079,"h4",36)(1080,"code",5),Jx(1081,"PoHeaderBrand"),sg()(),Sl(1082,"div",2)(1083,"p")(1084,"em"),Jx(1085,"Interface"),sg(),Jx(1086," que define a se\xE7\xE3o de brand."),sg()(),Sl(1087,"h4",10),Jx(1088,"Propriedades"),sg(),Sl(1089,"table",11)(1090,"tr",12)(1091,"th",13),Jx(1092,"Nome"),sg(),Sl(1093,"th",13),Jx(1094,"Tipo"),sg(),Sl(1095,"th",13),Jx(1096,"Descri\xE7\xE3o"),sg()(),Sl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),Jx(1101," action"),Wl(1102,"br"),sg()()(),Sl(1103,"td",18)(1104,"code",37),Jx(1105,"Function"),sg()(),Sl(1106,"td",21)(1107,"em")(1108,"strong"),Jx(1109,"(opcional)"),sg()(),Sl(1110,"p"),Jx(1111,"Evento da a\xE7\xE3o"),sg(),Sl(1112,"p"),Jx(1113," Exemplo: "),Sl(1114,"code"),Jx(1115,"action: this.myFunction.bind(this)"),sg()()()(),Sl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),Jx(1120," link"),Wl(1121,"br"),sg()()(),Sl(1122,"td",18)(1123,"code",24),Jx(1124,"string"),sg()(),Sl(1125,"td",21)(1126,"em")(1127,"strong"),Jx(1128,"(opcional)"),sg()(),Sl(1129,"p"),Jx(1130,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Sl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),Jx(1135," logo"),Wl(1136,"br"),sg()()(),Sl(1137,"td",18)(1138,"code",24),Jx(1139,"string"),sg()(),Sl(1140,"td",21)(1141,"em")(1142,"strong"),Jx(1143,"(opcional)"),sg()(),Sl(1144,"p"),Jx(1145,"Imagem da marca"),sg()()(),Sl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),Jx(1150," smallLogo"),Wl(1151,"br"),sg()()(),Sl(1152,"td",18)(1153,"code",24),Jx(1154,"string"),sg()(),Sl(1155,"td",21)(1156,"em")(1157,"strong"),Jx(1158,"(opcional)"),sg()(),Sl(1159,"p"),Jx(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),sg()()(),Sl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),Jx(1165," title"),Wl(1166,"br"),sg()()(),Sl(1167,"td",18)(1168,"code",24),Jx(1169,"string"),sg()(),Sl(1170,"td",21)(1171,"em")(1172,"strong"),Jx(1173,"(opcional)"),sg()(),Sl(1174,"p"),Jx(1175,"T\xEDtulo da marca"),sg()()()(),Sl(1176,"h4",36)(1177,"code",5),Jx(1178,"PoHeaderLiterals"),sg()(),Sl(1179,"div",2)(1180,"p"),Jx(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1182,"code"),Jx(1183,"po-header"),sg(),Jx(1184,"."),sg()(),Sl(1185,"h4",10),Jx(1186,"Propriedades"),sg(),Sl(1187,"table",11)(1188,"tr",12)(1189,"th",13),Jx(1190,"Nome"),sg(),Sl(1191,"th",13),Jx(1192,"Tipo"),sg(),Sl(1193,"th",13),Jx(1194,"Descri\xE7\xE3o"),sg()(),Sl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),Jx(1199," headerLinks"),Wl(1200,"br"),sg()()(),Sl(1201,"td",18)(1202,"code",24),Jx(1203,"string"),sg()(),Sl(1204,"td",21)(1205,"em")(1206,"strong"),Jx(1207,"(opcional)"),sg()(),Sl(1208,"p"),Jx(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),sg()()(),Sl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),Jx(1214," notifications"),Wl(1215,"br"),sg()()(),Sl(1216,"td",18)(1217,"code",24),Jx(1218,"string"),sg()(),Sl(1219,"td",21)(1220,"em")(1221,"strong"),Jx(1222,"(opcional)"),sg()(),Sl(1223,"p"),Jx(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Sl(1225,"code"),Jx(1226,"badge"),sg()()()()(),Sl(1227,"h4",36)(1228,"code",5),Jx(1229,"PoHeaderUser"),sg()(),Sl(1230,"div",2)(1231,"p")(1232,"em"),Jx(1233,"Interface"),sg(),Jx(1234," que define a se\xE7\xE3o de Customer do header."),sg()(),Sl(1235,"h4",10),Jx(1236,"Propriedades"),sg(),Sl(1237,"table",11)(1238,"tr",12)(1239,"th",13),Jx(1240,"Nome"),sg(),Sl(1241,"th",13),Jx(1242,"Tipo"),sg(),Sl(1243,"th",13),Jx(1244,"Descri\xE7\xE3o"),sg()(),Sl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),Jx(1249," action"),Wl(1250,"br"),sg()()(),Sl(1251,"td",18)(1252,"code",37),Jx(1253,"Function"),sg()(),Sl(1254,"td",21)(1255,"em")(1256,"strong"),Jx(1257,"(opcional)"),sg()(),Sl(1258,"p"),Jx(1259,"Evento emitido ao clicar na se\xE7\xE3o"),sg(),Sl(1260,"p"),Jx(1261,"Exemplo: "),Sl(1262,"code"),Jx(1263,"action: this.myFunction.bind(this)"),sg()()()(),Sl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),Jx(1268," avatar"),Wl(1269,"br"),sg()()(),Sl(1270,"td",18)(1271,"code",24),Jx(1272,"string"),sg()(),Sl(1273,"td",21)(1274,"p"),Jx(1275,"Logo representando o perfil"),sg()()(),Sl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),Jx(1280," customerBrand"),Wl(1281,"br"),sg()()(),Sl(1282,"td",18)(1283,"code",24),Jx(1284,"string"),sg()(),Sl(1285,"td",21)(1286,"p"),Jx(1287,"Imagem da marca"),sg()()(),Sl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),Jx(1292," items"),Wl(1293,"br"),sg()()(),Sl(1294,"td",18)(1295,"code",38),Jx(1296,"Array<PoHeaderActionToolItem>"),sg()(),Sl(1297,"td",21)(1298,"em")(1299,"strong"),Jx(1300,"(opcional)"),sg()(),Sl(1301,"p"),Jx(1302,"Itens de a\xE7\xF5es"),sg(),Sl(1303,"blockquote")(1304,"p"),Jx(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),sg()()()(),Sl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),Jx(1310," popover"),Wl(1311,"br"),sg()()(),Sl(1312,"td",18)(1313,"code",39),Jx(1314,"PoHeaderActionPopoverAction"),sg()(),Sl(1315,"td",21)(1316,"em")(1317,"strong"),Jx(1318,"(opcional)"),sg()(),Sl(1319,"p"),Jx(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Sl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),Jx(1325," status"),Wl(1326,"br"),sg()()(),Sl(1327,"td",18)(1328,"code",40),Jx(1329,"'positive' "),sg(),Sl(1330,"code",41),Jx(1331," 'negative' "),sg(),Sl(1332,"code",42),Jx(1333," 'warning' "),sg(),Sl(1334,"code",43),Jx(1335," 'disabled'"),sg()(),Sl(1336,"td",21)(1337,"em")(1338,"strong"),Jx(1339,"(opcional)"),sg()(),Sl(1340,"p"),Jx(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),sg(),Sl(1342,"ul")(1343,"li")(1344,"code"),Jx(1345,"positive"),sg(),Jx(1346,": Define a cor do "),Sl(1347,"code"),Jx(1348,"status"),sg(),Jx(1349," com a cor de feedback positivo."),sg(),Sl(1350,"li")(1351,"code"),Jx(1352,"negative"),sg(),Jx(1353,": Define a cor do "),Sl(1354,"code"),Jx(1355,"status"),sg(),Jx(1356," com a cor de feedback negative."),sg(),Sl(1357,"li")(1358,"code"),Jx(1359,"warning"),sg(),Jx(1360,": Define a cor do "),Sl(1361,"code"),Jx(1362,"status"),sg(),Jx(1363," com a cor de feedback warning."),sg(),Sl(1364,"li")(1365,"code"),Jx(1366,"disabled"),sg(),Jx(1367,": Define a cor do "),Sl(1368,"code"),Jx(1369,"status"),sg(),Jx(1370," com a cor de feedback disabled"),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-header-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ge,xe,fe,Ce],encapsulation:2})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Qe),pL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,Ae]})}return a})();export{ft as DocPoHeaderModule};