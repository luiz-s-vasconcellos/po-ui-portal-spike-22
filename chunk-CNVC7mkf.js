import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aW as Yp,e as r$1,s,aV as Ur,ae as Be$1,dc as vNe,J as Gl,M as tw,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b4 as O3,cp as Nhe,c8 as Sde,bH as k3,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,dd as mN,a7 as fN,bM as pN,a2 as QE,av as Yl,aw as uo,ax as fo,a3 as aNe,aQ as mx,aA as Rx,aS as vx,aD as Ky,aT as rN,aE as Xy,bR as IN}from'./main-LUSFEIN7.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Gl(0,"po-header",0),r&2&&tw("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[vNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Header Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-header-basic/sample-po-header-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,he],encapsulation:2})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=Cx();Gl(0,"po-header",1),Tl(1,"div",2)(2,"po-input",3),Ew("ngModelChange",function(d){return Ky(p),rN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Xy(d)}),sg(),t0(),Tl(3,"po-input",4),Ew("ngModelChange",function(d){return Ky(p),rN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Xy(d)}),sg(),t0(),Tl(4,"po-input",5),Ew("ngModelChange",function(d){return Ky(p),rN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Xy(d)}),sg(),t0(),Tl(5,"div",6)(6,"po-button",7),ht("p-click",function(){return i.addBrand()}),sg()()(),Gl(7,"hr"),Tl(8,"div",8)(9,"h3",9),tN(10,"A\xE7\xF5es dos itens de menu"),sg(),Tl(11,"po-input",10),Ew("ngModelChange",function(d){return Ky(p),rN(i.menuActionEvent,d)||(i.menuActionEvent=d),Xy(d)}),sg(),t0(),Tl(12,"po-input",11),Ew("ngModelChange",function(d){return Ky(p),rN(i.menuActionLabel,d)||(i.menuActionLabel=d),Xy(d)}),sg(),t0(),Tl(13,"po-button",12),ht("p-click",function(){return i.addAction()}),sg()(),Gl(14,"hr"),Tl(15,"h3",9),tN(16,"A\xE7\xF5es das configura\xE7\xF5es"),sg(),Tl(17,"form",8,0)(19,"po-input",13),Ew("ngModelChange",function(d){return Ky(p),rN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Xy(d)}),sg(),t0(),Tl(20,"po-input",14),Ew("ngModelChange",function(d){return Ky(p),rN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Xy(d)}),sg(),t0(),Tl(21,"po-number",15),Ew("ngModelChange",function(d){return Ky(p),rN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Xy(d)}),sg(),t0(),Tl(22,"po-switch",16),Ew("ngModelChange",function(d){return Ky(p),rN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Xy(d)}),sg(),t0(),Tl(23,"po-button",17),ht("p-click",function(){return i.addTool(i.actionNewTool)}),sg()(),Gl(24,"hr"),Tl(25,"h3",9),tN(26,"A\xE7\xF5es do Usu\xE1rio"),sg(),Tl(27,"form",8,0)(29,"po-input",18),Ew("ngModelChange",function(d){return Ky(p),rN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Xy(d)}),sg(),t0(),Tl(30,"po-input",19),Ew("ngModelChange",function(d){return Ky(p),rN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Xy(d)}),sg(),t0(),Tl(31,"po-radio-group",20),Ew("ngModelChange",function(d){return Ky(p),rN(i.newActionUser.status,d)||(i.newActionUser.status=d),Xy(d)}),sg(),t0(),Tl(32,"po-button",17),ht("p-click",function(){return i.addUser()}),sg(),Gl(33,"hr"),Tl(34,"h3",9),tN(35,"Varia\xE7\xF5es de tamanho"),sg(),Tl(36,"div",8)(37,"po-radio-group",21),Ew("ngModelChange",function(d){return Ky(p),rN(i.size,d)||(i.size=d),Xy(d)}),sg(),t0(),sg(),Gl(38,"hr"),Tl(39,"po-button",22),ht("p-click",function(){return i.reset()}),sg()();}r&2&&(tw("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Vp(2),Dw("ngModel",i.headerBrandTitle),r0(),Vp(),Dw("ngModel",i.headerBrandLogo),r0(),Vp(),Dw("ngModel",i.headerBrandSmallLogo),r0(),Vp(7),Dw("ngModel",i.menuActionEvent),r0(),Vp(),Dw("ngModel",i.menuActionLabel),r0(),Vp(),tw("p-disabled",!i.menuActionLabel),Vp(6),Dw("ngModel",i.actionNewTool.icon),r0(),Vp(),Dw("ngModel",i.actionNewTool.tooltip),r0(),Vp(),Dw("ngModel",i.actionNewTool.badge),r0(),Vp(),Dw("ngModel",i.actionNewToolEvent),r0(),Vp(),tw("p-disabled",i.actionTools.length>2),Vp(6),Dw("ngModel",i.newActionUser.customerBrand),r0(),Vp(),Dw("ngModel",i.newActionUser.avatar),r0(),Vp(),Dw("ngModel",i.newActionUser.status),tw("p-options",mN(28,Le,fN(24,_e),fN(25,He),fN(26,Me),fN(27,Be))),r0(),Vp(),tw("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Vp(5),Dw("ngModel",i.size),tw("p-options",pN(35,Ne,fN(33,ke),fN(34,De))),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,O3,Nhe,Sde,k3,vNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Header Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-header-labs/sample-po-header-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-header
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,be],encapsulation:2})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&Gl(0,"po-button",4),a&2){let l=A.$implicit;tw("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Tl(0,"div",2)(1,"p"),tN(2,"Meus aplicativos"),sg(),Gl(3,"br"),Tl(4,"div",3),mx(5,We,1,1,"po-button",4,ze),sg()()),a&2){let l=Rx();Vp(5),vx(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ur.Top});}static \u0275fac=function(r){return new(r||a)(w(Yp),w(Be$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&Yl(Ue,5),r&2){let p;uo(p=fo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Gl(0,"po-header",1),QE(1,qe,7,0,"ng-template",null,0,IN)),r&2&&tw("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,vNe],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Header Apps"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-header-apps/sample-po-header-apps.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-header
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-apps"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-header"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoHeaderComponent"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,"O componente "),Tl(18,"code"),tN(19,"po-header"),sg(),tN(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Tl(21,"code"),tN(22,"p-brand"),sg(),tN(23,", "),Tl(24,"code"),tN(25,"p-menu-items"),sg(),tN(26,", "),Tl(27,"code"),tN(28,"p-actions-tools"),sg(),tN(29," e "),Tl(30,"code"),tN(31,"p-header-user"),sg(),tN(32,"."),sg(),Tl(33,"ul")(34,"li")(35,"code"),tN(36,"p-brand"),sg(),tN(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),sg(),Tl(38,"li")(39,"code"),tN(40,"p-menu-items"),sg(),tN(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),sg(),Tl(42,"li")(43,"code"),tN(44,"p-actions-tools"),sg(),tN(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),sg(),Tl(46,"li")(47,"code"),tN(48,"p-header-user"),sg(),tN(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),sg()(),Tl(50,"p"),tN(51,"O componente "),Tl(52,"code"),tN(53,"po-header"),sg(),tN(54," pode ser usado de duas formas:"),sg(),Tl(55,"p"),tN(56,"Com "),Tl(57,"code"),tN(58,"po-menu"),sg(),tN(59," definido pelo usu\xE1rio:"),sg(),Tl(60,"pre")(61,"code"),tN(62,`...
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
`),sg()(),Tl(63,"p"),tN(64,"Passando os itens diretamente para o "),Tl(65,"code"),tN(66,"po-header"),sg(),tN(67," pela propriedade "),Tl(68,"code"),tN(69,"p-menus"),sg(),tN(70,":"),sg(),Tl(71,"pre")(72,"code"),tN(73,`...
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
`),sg()(),Tl(74,"h4"),tN(75,"Tokens customiz\xE1veis"),sg(),Tl(76,"p"),tN(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(78,"blockquote")(79,"p"),tN(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(81,"a",6),tN(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(83,"."),sg()(),Tl(84,"table")(85,"thead")(86,"tr")(87,"th"),tN(88,"Propriedade"),sg(),Tl(89,"th"),tN(90,"Descri\xE7\xE3o"),sg(),Tl(91,"th"),tN(92,"Valor Padr\xE3o"),sg()()(),Tl(93,"tbody")(94,"tr")(95,"td")(96,"code"),tN(97,"--font-family"),sg()(),Tl(98,"td"),tN(99,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(100,"td")(101,"code"),tN(102,"var(--font-family-theme)"),sg()()(),Tl(103,"tr")(104,"td")(105,"code"),tN(106,"--font-weight"),sg()(),Tl(107,"td"),tN(108,"Peso da fonte"),sg(),Tl(109,"td")(110,"code"),tN(111,"var(--font-weight-bold)"),sg()()(),Tl(112,"tr")(113,"td")(114,"code"),tN(115,"--text-color"),sg()(),Tl(116,"td"),tN(117,"Cor do texto"),sg(),Tl(118,"td")(119,"code"),tN(120,"var(--color-neutral-dark-70)"),sg()()(),Tl(121,"tr")(122,"td")(123,"code"),tN(124,"--outline-color-focused"),sg()(),Tl(125,"td"),tN(126,"Cor do outline dos itens de sub-menu e customer"),sg(),Tl(127,"td")(128,"code"),tN(129,"var(--color-neutral-dark-95)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),tN(133,"--object-fit-brand"),sg()(),Tl(134,"td"),tN(135,"Valor do object-fit da imagem do logo"),sg(),Tl(136,"td")(137,"code"),tN(138,"contain"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),tN(142,"--object-fit-customer"),sg()(),Tl(143,"td"),tN(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),sg(),Tl(145,"td")(146,"code"),tN(147,"contain"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),tN(151,"--object-fit-customer-user"),sg()(),Tl(152,"td"),tN(153,"Valor do object-fit da imagem do avatar"),sg(),Tl(154,"td")(155,"code"),tN(156,"cover"),sg()()(),Tl(157,"tr")(158,"td")(159,"strong"),tN(160,"Header"),sg()(),Gl(161,"td")(162,"td"),sg(),Tl(163,"tr")(164,"td")(165,"code"),tN(166,"--background-color"),sg()(),Tl(167,"td"),tN(168,"Cor de background do header"),sg(),Tl(169,"td")(170,"code"),tN(171,"var(--color-neutral-light-05)"),sg()()(),Tl(172,"tr")(173,"td")(174,"code"),tN(175,"--border-radius-bottom-left"),sg()(),Tl(176,"td"),tN(177,"Valor do radius do lado esquerdo do header"),sg(),Tl(178,"td")(179,"code"),tN(180,"var(--border-radius-md)"),sg()()(),Tl(181,"tr")(182,"td")(183,"code"),tN(184,"--border-radius-bottom-right"),sg()(),Tl(185,"td"),tN(186,"Valor do radius do lado direito do header"),sg(),Tl(187,"td")(188,"code"),tN(189,"var(--border-radius-md)"),sg()()(),Tl(190,"tr")(191,"td")(192,"code"),tN(193,"--base shadow"),sg()(),Tl(194,"td"),tN(195,"Cor da sombra do header"),sg(),Tl(196,"td")(197,"code"),tN(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),tN(202,"--stroke-color"),sg()(),Tl(203,"td"),tN(204,"Cor da borda inferior do header"),sg(),Tl(205,"td")(206,"code"),tN(207,"var(--color-brand-01-base)"),sg()()(),Tl(208,"tr")(209,"td")(210,"strong"),tN(211,"Sub-menu"),sg()(),Gl(212,"td")(213,"td"),sg(),Tl(214,"tr")(215,"td")(216,"code"),tN(217,"--border-radius"),sg()(),Tl(218,"td"),tN(219,"Valor do radius dos itens do sub-menu"),sg(),Tl(220,"td")(221,"code"),tN(222,"var(--border-radius-md);"),sg()()(),Tl(223,"tr")(224,"td")(225,"code"),tN(226,"--text-color-submenu"),sg()(),Tl(227,"td"),tN(228,"Cor do texto dos itens do sub-menu"),sg(),Tl(229,"td")(230,"code"),tN(231,"var(--color-brand-01-base)"),sg()()(),Tl(232,"tr")(233,"td")(234,"code"),tN(235,"--icon-color"),sg()(),Tl(236,"td"),tN(237,"Cor do \xEDcone do sub-menu com itens"),sg(),Tl(238,"td")(239,"code"),tN(240,"var(--color-brand-01-base)"),sg()()(),Tl(241,"tr")(242,"td")(243,"code"),tN(244,"--border-color"),sg()(),Tl(245,"td"),tN(246,"Cor da borda"),sg(),Tl(247,"td")(248,"code"),tN(249,"var(--color-transparent)"),sg()()(),Tl(250,"tr")(251,"td")(252,"code"),tN(253,"--shadow"),sg()(),Tl(254,"td"),tN(255,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(256,"td")(257,"code"),tN(258,"var(--shadow-none)"),sg()()(),Tl(259,"tr")(260,"td")(261,"code"),tN(262,"--font-family-submenu"),sg()(),Tl(263,"td"),tN(264,"Fonte do texto dos itens de sub-menu"),sg(),Tl(265,"td")(266,"code"),tN(267,"var(--font-family-theme)"),sg()()(),Tl(268,"tr")(269,"td")(270,"code"),tN(271,"--font-weight-submenu"),sg()(),Tl(272,"td"),tN(273,"Peso da fonte do texto dos itens de sub-menu"),sg(),Tl(274,"td")(275,"code"),tN(276,"var(--font-weight-bold)"),sg()()(),Tl(277,"tr")(278,"td")(279,"strong"),tN(280,"Sub-menu - Hover"),sg()(),Gl(281,"td")(282,"td"),sg(),Tl(283,"tr")(284,"td")(285,"code"),tN(286,"--background-hover"),sg()(),Tl(287,"td"),tN(288,"Cor de background dos itens do sub-menu no estado hover"),sg(),Tl(289,"td")(290,"code"),tN(291,"var(--color-brand-01-lighter)"),sg()()(),Tl(292,"tr")(293,"td")(294,"code"),tN(295,"--icon-color-hover"),sg()(),Tl(296,"td"),tN(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),sg(),Tl(298,"td")(299,"code"),tN(300,"var(--color-brand-01-darkest)"),sg()()(),Tl(301,"tr")(302,"td")(303,"code"),tN(304,"--text-color-hover"),sg()(),Tl(305,"td"),tN(306,"Cor do texto dos itens de sub-menu no estado hover"),sg(),Tl(307,"td")(308,"code"),tN(309,"var(--color-brand-01-darkest)"),sg()()(),Tl(310,"tr")(311,"td")(312,"strong"),tN(313,"Sub-menu - pressed"),sg()(),Gl(314,"td")(315,"td"),sg(),Tl(316,"tr")(317,"td")(318,"code"),tN(319,"--background-pressed"),sg()(),Tl(320,"td"),tN(321,"Cor de background dos itens do sub-menu no estado pressed"),sg(),Tl(322,"td")(323,"code"),tN(324,"var(--color-brand-01-light)"),sg()()(),Tl(325,"tr")(326,"td")(327,"code"),tN(328,"--icon-color-pressed"),sg()(),Tl(329,"td"),tN(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),sg(),Tl(331,"td")(332,"code"),tN(333,"var(--color-brand-01-darkest)"),sg()()(),Tl(334,"tr")(335,"td")(336,"code"),tN(337,"--text-color-pressed"),sg()(),Tl(338,"td"),tN(339,"Cor do texto dos itens de sub-menu no estado pressed"),sg(),Tl(340,"td")(341,"code"),tN(342,"var(--color-brand-01-darkest)"),sg()()(),Tl(343,"tr")(344,"td")(345,"strong"),tN(346,"Sub-menu - selected"),sg()(),Gl(347,"td")(348,"td"),sg(),Tl(349,"tr")(350,"td")(351,"code"),tN(352,"--background-selected"),sg()(),Tl(353,"td"),tN(354,"Cor de background dos itens do sub-menu no estado selected"),sg(),Tl(355,"td")(356,"code"),tN(357,"var(--color-brand-01-light)"),sg()()(),Tl(358,"tr")(359,"td")(360,"code"),tN(361,"--icon-color-selected"),sg()(),Tl(362,"td"),tN(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),sg(),Tl(364,"td")(365,"code"),tN(366,"var(--color-neutral-dark-95)"),sg()()(),Tl(367,"tr")(368,"td")(369,"code"),tN(370,"--text-color-selected"),sg()(),Tl(371,"td"),tN(372,"Cor do texto dos itens de sub-menu no estado selected"),sg(),Tl(373,"td")(374,"code"),tN(375,"var(--color-brand-01-darkest)"),sg()()(),Tl(376,"tr")(377,"td")(378,"strong"),tN(379,"Customer"),sg()(),Gl(380,"td")(381,"td"),sg(),Tl(382,"tr")(383,"td")(384,"code"),tN(385,"--background-color-customer"),sg()(),Tl(386,"td"),tN(387,"Cor do background da se\xE7\xE3o customer"),sg(),Tl(388,"td")(389,"code"),tN(390,"var(--color-neutral-light-00)"),sg()()(),Tl(391,"tr")(392,"td")(393,"code"),tN(394,"--border-color"),sg()(),Tl(395,"td"),tN(396,"Cor da borda da se\xE7\xE3o customer"),sg(),Tl(397,"td")(398,"code"),tN(399,"var(--color-neutral-light-10)"),sg()()(),Tl(400,"tr")(401,"td")(402,"code"),tN(403,"--border-style"),sg()(),Tl(404,"td"),tN(405,"Estilo da borda da se\xE7\xE3o customer"),sg(),Tl(406,"td")(407,"code"),tN(408,"solid"),sg()()(),Tl(409,"tr")(410,"td")(411,"code"),tN(412,"--border-width"),sg()(),Tl(413,"td"),tN(414,"Largura da borda da se\xE7\xE3o customer"),sg(),Tl(415,"td")(416,"code"),tN(417,"var(--border-width-sm)"),sg()()(),Tl(418,"tr")(419,"td")(420,"strong"),tN(421,"Customer - hover"),sg()(),Gl(422,"td")(423,"td"),sg(),Tl(424,"tr")(425,"td")(426,"code"),tN(427,"--background-color-customer-hover"),sg()(),Tl(428,"td"),tN(429,"Cor do background da se\xE7\xE3o customer no estado hover"),sg(),Tl(430,"td")(431,"code"),tN(432,"var(--color-brand-01-lighter)"),sg()()(),Tl(433,"tr")(434,"td")(435,"strong"),tN(436,"Customer - pressed"),sg()(),Gl(437,"td")(438,"td"),sg(),Tl(439,"tr")(440,"td")(441,"code"),tN(442,"--background-color-customer-pressed"),sg()(),Tl(443,"td"),tN(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),sg(),Tl(445,"td")(446,"code"),tN(447,"var(--color-brand-01-light)"),sg()()(),Tl(448,"tr")(449,"td")(450,"code"),tN(451,"--border-width-pressed"),sg()(),Tl(452,"td"),tN(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),sg(),Tl(454,"td")(455,"code"),tN(456,"var(--border-width-md)"),sg()()()()()(),Tl(457,"div",7)(458,"h4",8),tN(459,"Seletor"),sg(),Tl(460,"pre",9),tN(461,`<po-header
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
`),sg()(),Tl(462,"h4",10),tN(463,"Propriedades"),sg(),Tl(464,"table",11)(465,"tr",12)(466,"th",13),tN(467,"Nome"),sg(),Tl(468,"th",13),tN(469,"Tipo"),sg(),Tl(470,"th",13),tN(471,"Padr\xE3o"),sg(),Tl(472,"th",13),tN(473,"Descri\xE7\xE3o"),sg()(),Tl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),tN(478," p-actions-tools"),Gl(479,"br"),sg()()(),Tl(480,"td",18)(481,"code",19),tN(482,"Array<PoHeaderActionTool>"),sg()(),Tl(483,"td",20),tN(484,"-"),sg(),Tl(485,"td",21)(486,"em")(487,"strong"),tN(488,"(opcional)"),sg()(),Tl(489,"p"),tN(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Tl(491,"code"),tN(492,"po-header"),sg()(),Tl(493,"blockquote")(494,"p"),tN(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),sg()()()(),Tl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),tN(500," p-amount-more"),Gl(501,"br"),sg()()(),Tl(502,"td",18)(503,"code",22),tN(504,"number"),sg()(),Tl(505,"td",20),tN(506,"-"),sg(),Tl(507,"td",21)(508,"em")(509,"strong"),tN(510,"(opcional)"),sg()(),Tl(511,"p"),tN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),sg(),Tl(513,"blockquote")(514,"p"),tN(515,"Ao utilizar essa propriedade o "),Tl(516,"code"),tN(517,"po-header"),sg(),tN(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),sg()()()(),Tl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),tN(523," p-brand"),Gl(524,"br"),sg()()(),Tl(525,"td",18)(526,"code",23),tN(527,"PoHeaderBrand "),sg(),Tl(528,"code",24),tN(529," string"),sg()(),Tl(530,"td",20),tN(531,"-"),sg(),Tl(532,"td",21)(533,"em")(534,"strong"),tN(535,"(opcional)"),sg()(),Tl(536,"p"),tN(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Tl(538,"code"),tN(539,"po-header"),sg()(),Tl(540,"p"),tN(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),sg()()(),Tl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),tN(546," (p-colapsed-menu)"),Gl(547,"br"),sg()()(),Tl(548,"td",18)(549,"code",27),tN(550,"EventEmitter"),sg()(),Tl(551,"td",20),tN(552,"-"),sg(),Tl(553,"td",21)(554,"em")(555,"strong"),tN(556,"(opcional)"),sg()(),Tl(557,"p"),tN(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),sg()()(),Tl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),tN(563," p-filter-menu"),Gl(564,"br"),sg()()(),Tl(565,"td",18)(566,"code",28),tN(567,"boolean"),sg()(),Tl(568,"td",20),tN(569,"-"),sg(),Tl(570,"td",21)(571,"em")(572,"strong"),tN(573,"(opcional)"),sg()(),Tl(574,"p"),tN(575,"Habilita campo para filtrar itens no menu"),sg()()(),Tl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),tN(580," p-header-template"),Gl(581,"br"),sg()()(),Tl(582,"td",18)(583,"code",29),tN(584,"TemplateRef<any>"),sg()(),Tl(585,"td",20),tN(586,"-"),sg(),Tl(587,"td",21)(588,"em")(589,"strong"),tN(590,"(opcional)"),sg()(),Tl(591,"p"),tN(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Tl(593,"code"),tN(594,"p-menu-items"),sg()()()(),Tl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),tN(599," p-header-user"),Gl(600,"br"),sg()()(),Tl(601,"td",18)(602,"code",30),tN(603,"PoHeaderUser"),sg()(),Tl(604,"td",20),tN(605,"-"),sg(),Tl(606,"td",21)(607,"em")(608,"strong"),tN(609,"(opcional)"),sg()(),Tl(610,"p"),tN(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Tl(612,"code"),tN(613,"po-header"),sg()()()(),Tl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),tN(618," p-hide-button-menu"),Gl(619,"br"),sg()()(),Tl(620,"td",18)(621,"code",28),tN(622,"boolean"),sg()(),Tl(623,"td",20),tN(624,"-"),sg(),Tl(625,"td",21)(626,"em")(627,"strong"),tN(628,"(opcional)"),sg()(),Tl(629,"p"),tN(630,"Esconde o bot\xE3o de menu colapsado."),sg()()(),Tl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),tN(635," p-literals"),Gl(636,"br"),sg()()(),Tl(637,"td",18)(638,"code",31),tN(639,"PoHeaderLiterals"),sg()(),Tl(640,"td",20),tN(641,"-"),sg(),Tl(642,"td",21)(643,"em")(644,"strong"),tN(645,"(opcional)"),sg()(),Tl(646,"p"),tN(647,"Objeto com a literal usada na propriedade "),Tl(648,"code"),tN(649,"p-literals"),sg(),tN(650,"."),sg(),Tl(651,"p"),tN(652,"Para customizar a literal, basta declarar um objeto do tipo "),Tl(653,"code"),tN(654,"PoHeaderLiterals"),sg(),tN(655," conforme exemplo abaixo:"),sg(),Tl(656,"pre")(657,"code"),tN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),sg()(),Tl(659,"p"),tN(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(661,"pre")(662,"code"),tN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),sg()(),Tl(664,"blockquote")(665,"p"),tN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(667,"a",32)(668,"code"),tN(669,"PoI18nService"),sg()(),tN(670," ou do browser."),sg()()()(),Tl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),tN(675," p-menus"),Gl(676,"br"),sg()()(),Tl(677,"td",18)(678,"code",33),tN(679,"Array<PoMenuItem>"),sg()(),Tl(680,"td",20),tN(681,"-"),sg(),Tl(682,"td",21)(683,"em")(684,"strong"),tN(685,"(opcional)"),sg()(),Tl(686,"p"),tN(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg(),Tl(688,"blockquote")(689,"p"),tN(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),sg()()()(),Tl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),tN(695," p-menu-items"),Gl(696,"br"),sg()()(),Tl(697,"td",18)(698,"code",34),tN(699,"Array<PoHeaderActions>"),sg()(),Tl(700,"td",20),tN(701,"-"),sg(),Tl(702,"td",21)(703,"em")(704,"strong"),tN(705,"(opcional)"),sg()(),Tl(706,"p"),tN(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Tl(708,"code"),tN(709,"po-header"),sg(),tN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),sg(),Tl(711,"blockquote")(712,"p"),tN(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),sg()()()(),Tl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),tN(718," p-size"),Gl(719,"br"),sg()()(),Tl(720,"td",18)(721,"code",24),tN(722,"string"),sg()(),Tl(723,"td",20)(724,"p")(725,"code"),tN(726,"medium"),sg()()(),Tl(727,"td",21)(728,"em")(729,"strong"),tN(730,"(opcional)"),sg()(),Tl(731,"p"),tN(732,"Define o tamanho do componente:"),sg(),Tl(733,"ul")(734,"li")(735,"code"),tN(736,"small"),sg(),tN(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(738,"li")(739,"code"),tN(740,"medium"),sg(),tN(741,": altura de 56px."),sg()(),Tl(742,"blockquote")(743,"p"),tN(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(745,"code"),tN(746,"medium"),sg(),tN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(748,"a",35),tN(749,"po-theme"),sg(),tN(750,"."),sg()()()()(),Tl(751,"h3"),tN(752,"Interfaces"),sg(),Tl(753,"h4",36)(754,"code",5),tN(755,"PoHeaderActionTool"),sg()(),Tl(756,"div",2)(757,"p")(758,"em"),tN(759,"Interface"),sg(),tN(760," que define a se\xE7\xE3o de Actions do header."),sg(),Tl(761,"p"),tN(762,"Indica\xE7\xE3o de uso:"),sg(),Tl(763,"ul")(764,"li"),tN(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),sg(),Tl(766,"li"),tN(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),sg(),Tl(768,"li"),tN(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),sg()(),Tl(770,"blockquote")(771,"p"),tN(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),sg()()(),Tl(773,"h4",10),tN(774,"Propriedades"),sg(),Tl(775,"table",11)(776,"tr",12)(777,"th",13),tN(778,"Nome"),sg(),Tl(779,"th",13),tN(780,"Tipo"),sg(),Tl(781,"th",13),tN(782,"Descri\xE7\xE3o"),sg()(),Tl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),tN(787," action"),Gl(788,"br"),sg()()(),Tl(789,"td",18)(790,"code",37),tN(791,"Function"),sg()(),Tl(792,"td",21)(793,"em")(794,"strong"),tN(795,"(opcional)"),sg()(),Tl(796,"p"),tN(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Tl(798,"p"),tN(799,"Exemplo: "),Tl(800,"code"),tN(801,"action: this.myFunction.bind(this)"),sg()()()(),Tl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),tN(806," badge"),Gl(807,"br"),sg()()(),Tl(808,"td",18)(809,"code",22),tN(810,"number"),sg()(),Tl(811,"td",21)(812,"em")(813,"strong"),tN(814,"(opcional)"),sg()(),Tl(815,"p"),tN(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),sg()()(),Tl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),tN(821," icon"),Gl(822,"br"),sg()()(),Tl(823,"td",18)(824,"code",24),tN(825,"string"),sg()(),Tl(826,"td",21)(827,"em")(828,"strong"),tN(829,"(opcional)"),sg()(),Tl(830,"p"),tN(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),sg()()(),Tl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),tN(836," items"),Gl(837,"br"),sg()()(),Tl(838,"td",18)(839,"code",38),tN(840,"Array<PoHeaderActionToolItem>"),sg()(),Tl(841,"td",21)(842,"em")(843,"strong"),tN(844,"(opcional)"),sg()(),Tl(845,"p"),tN(846,"Itens de a\xE7\xF5es"),sg()()(),Tl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),tN(851," label"),Gl(852,"br"),sg()()(),Tl(853,"td",18)(854,"code",24),tN(855,"string"),sg()(),Tl(856,"td",21)(857,"em")(858,"strong"),tN(859,"(opcional)"),sg()(),Tl(860,"p"),tN(861,"T\xEDtulo da a\xE7\xE3o"),sg()()(),Tl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),tN(866," link"),Gl(867,"br"),sg()()(),Tl(868,"td",18)(869,"code",24),tN(870,"string"),sg()(),Tl(871,"td",21)(872,"em")(873,"strong"),tN(874,"(opcional)"),sg()(),Tl(875,"p"),tN(876,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Tl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),tN(881," popover"),Gl(882,"br"),sg()()(),Tl(883,"td",18)(884,"code",39),tN(885,"PoHeaderActionPopoverAction"),sg()(),Tl(886,"td",21)(887,"em")(888,"strong"),tN(889,"(opcional)"),sg()(),Tl(890,"p"),tN(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Tl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),tN(896," tooltip"),Gl(897,"br"),sg()()(),Tl(898,"td",18)(899,"code",24),tN(900,"string"),sg()(),Tl(901,"td",21)(902,"em")(903,"strong"),tN(904,"(opcional)"),sg()(),Tl(905,"p"),tN(906,"Texto que ser\xE1 apresentado na tooltip"),sg()()()(),Tl(907,"h4",36)(908,"code",5),tN(909,"PoHeaderActionPopoverAction"),sg()(),Tl(910,"div",2)(911,"p")(912,"em"),tN(913,"Interface"),sg(),tN(914," que define um template para uma a\xE7\xE3o."),sg()(),Tl(915,"h4",10),tN(916,"Propriedades"),sg(),Tl(917,"table",11)(918,"tr",12)(919,"th",13),tN(920,"Nome"),sg(),Tl(921,"th",13),tN(922,"Tipo"),sg(),Tl(923,"th",13),tN(924,"Descri\xE7\xE3o"),sg()(),Tl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),tN(929," content"),Gl(930,"br"),sg()()(),Tl(931,"td",18)(932,"code",29),tN(933,"TemplateRef<any>"),sg()(),Tl(934,"td",21)(935,"p"),tN(936,"Template que ser\xE1 renderizado dentro do popover."),sg()()(),Tl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),tN(941," width"),Gl(942,"br"),sg()()(),Tl(943,"td",18)(944,"code",22),tN(945,"number"),sg()(),Tl(946,"td",21)(947,"em")(948,"strong"),tN(949,"(opcional)"),sg()(),Tl(950,"p"),tN(951,"Largura, em pixels, do template renderizado dentro do popover."),sg(),Tl(952,"p"),tN(953,"Valores permitidos: de 240 a 800."),sg()()()(),Tl(954,"h4",36)(955,"code",5),tN(956,"PoHeaderActionToolItem"),sg()(),Tl(957,"div",2)(958,"p")(959,"em"),tN(960,"Interface"),sg(),tN(961," que define uma lista de a\xE7\xF5es."),sg()(),Tl(962,"h4",10),tN(963,"Propriedades"),sg(),Tl(964,"table",11)(965,"tr",12)(966,"th",13),tN(967,"Nome"),sg(),Tl(968,"th",13),tN(969,"Tipo"),sg(),Tl(970,"th",13),tN(971,"Descri\xE7\xE3o"),sg()(),Tl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),tN(976," action"),Gl(977,"br"),sg()()(),Tl(978,"td",18)(979,"code",37),tN(980,"Function"),sg()(),Tl(981,"td",21)(982,"p"),tN(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Tl(984,"p"),tN(985,"Exemplo: "),Tl(986,"code"),tN(987,"action: this.myFunction.bind(this)"),sg()()()(),Tl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),tN(992," label"),Gl(993,"br"),sg()()(),Tl(994,"td",18)(995,"code",24),tN(996,"string"),sg()(),Tl(997,"td",21)(998,"p"),tN(999,"Label da a\xE7\xE3o"),sg()()()(),Tl(1e3,"h4",36)(1001,"code",5),tN(1002,"PoHeaderActions"),sg()(),Tl(1003,"div",2)(1004,"p")(1005,"em"),tN(1006,"Interface"),sg(),tN(1007," que define uma lista de a\xE7\xF5es no sub-menu."),sg()(),Tl(1008,"h4",10),tN(1009,"Propriedades"),sg(),Tl(1010,"table",11)(1011,"tr",12)(1012,"th",13),tN(1013,"Nome"),sg(),Tl(1014,"th",13),tN(1015,"Tipo"),sg(),Tl(1016,"th",13),tN(1017,"Descri\xE7\xE3o"),sg()(),Tl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),tN(1022," action"),Gl(1023,"br"),sg()()(),Tl(1024,"td",18)(1025,"code",37),tN(1026,"Function"),sg()(),Tl(1027,"td",21)(1028,"em")(1029,"strong"),tN(1030,"(opcional)"),sg()(),Tl(1031,"p"),tN(1032,"Evento da a\xE7\xE3o"),sg(),Tl(1033,"p"),tN(1034," Exemplo: "),Tl(1035,"code"),tN(1036,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),tN(1041," id"),Gl(1042,"br"),sg()()(),Tl(1043,"td",18)(1044,"code",24),tN(1045,"string"),sg()(),Tl(1046,"td",21)(1047,"em")(1048,"strong"),tN(1049,"(opcional)"),sg()(),Tl(1050,"p"),tN(1051,"Identificador da a\xE7\xE3o"),sg()()(),Tl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),tN(1056," label"),Gl(1057,"br"),sg()()(),Tl(1058,"td",18)(1059,"code",24),tN(1060,"string"),sg()(),Tl(1061,"td",21)(1062,"p"),tN(1063,"Label da a\xE7\xE3o"),sg()()(),Tl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),tN(1068," link"),Gl(1069,"br"),sg()()(),Tl(1070,"td",18)(1071,"code",24),tN(1072,"string"),sg()(),Tl(1073,"td",21)(1074,"em")(1075,"strong"),tN(1076,"(opcional)"),sg()(),Tl(1077,"p"),tN(1078,"link utilizado no redirecionamento das p\xE1ginas."),sg()()()(),Tl(1079,"h4",36)(1080,"code",5),tN(1081,"PoHeaderBrand"),sg()(),Tl(1082,"div",2)(1083,"p")(1084,"em"),tN(1085,"Interface"),sg(),tN(1086," que define a se\xE7\xE3o de brand."),sg()(),Tl(1087,"h4",10),tN(1088,"Propriedades"),sg(),Tl(1089,"table",11)(1090,"tr",12)(1091,"th",13),tN(1092,"Nome"),sg(),Tl(1093,"th",13),tN(1094,"Tipo"),sg(),Tl(1095,"th",13),tN(1096,"Descri\xE7\xE3o"),sg()(),Tl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),tN(1101," action"),Gl(1102,"br"),sg()()(),Tl(1103,"td",18)(1104,"code",37),tN(1105,"Function"),sg()(),Tl(1106,"td",21)(1107,"em")(1108,"strong"),tN(1109,"(opcional)"),sg()(),Tl(1110,"p"),tN(1111,"Evento da a\xE7\xE3o"),sg(),Tl(1112,"p"),tN(1113," Exemplo: "),Tl(1114,"code"),tN(1115,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),tN(1120," link"),Gl(1121,"br"),sg()()(),Tl(1122,"td",18)(1123,"code",24),tN(1124,"string"),sg()(),Tl(1125,"td",21)(1126,"em")(1127,"strong"),tN(1128,"(opcional)"),sg()(),Tl(1129,"p"),tN(1130,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Tl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),tN(1135," logo"),Gl(1136,"br"),sg()()(),Tl(1137,"td",18)(1138,"code",24),tN(1139,"string"),sg()(),Tl(1140,"td",21)(1141,"em")(1142,"strong"),tN(1143,"(opcional)"),sg()(),Tl(1144,"p"),tN(1145,"Imagem da marca"),sg()()(),Tl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),tN(1150," smallLogo"),Gl(1151,"br"),sg()()(),Tl(1152,"td",18)(1153,"code",24),tN(1154,"string"),sg()(),Tl(1155,"td",21)(1156,"em")(1157,"strong"),tN(1158,"(opcional)"),sg()(),Tl(1159,"p"),tN(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),sg()()(),Tl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),tN(1165," title"),Gl(1166,"br"),sg()()(),Tl(1167,"td",18)(1168,"code",24),tN(1169,"string"),sg()(),Tl(1170,"td",21)(1171,"em")(1172,"strong"),tN(1173,"(opcional)"),sg()(),Tl(1174,"p"),tN(1175,"T\xEDtulo da marca"),sg()()()(),Tl(1176,"h4",36)(1177,"code",5),tN(1178,"PoHeaderLiterals"),sg()(),Tl(1179,"div",2)(1180,"p"),tN(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1182,"code"),tN(1183,"po-header"),sg(),tN(1184,"."),sg()(),Tl(1185,"h4",10),tN(1186,"Propriedades"),sg(),Tl(1187,"table",11)(1188,"tr",12)(1189,"th",13),tN(1190,"Nome"),sg(),Tl(1191,"th",13),tN(1192,"Tipo"),sg(),Tl(1193,"th",13),tN(1194,"Descri\xE7\xE3o"),sg()(),Tl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),tN(1199," headerLinks"),Gl(1200,"br"),sg()()(),Tl(1201,"td",18)(1202,"code",24),tN(1203,"string"),sg()(),Tl(1204,"td",21)(1205,"em")(1206,"strong"),tN(1207,"(opcional)"),sg()(),Tl(1208,"p"),tN(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),sg()()(),Tl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),tN(1214," notifications"),Gl(1215,"br"),sg()()(),Tl(1216,"td",18)(1217,"code",24),tN(1218,"string"),sg()(),Tl(1219,"td",21)(1220,"em")(1221,"strong"),tN(1222,"(opcional)"),sg()(),Tl(1223,"p"),tN(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Tl(1225,"code"),tN(1226,"badge"),sg()()()()(),Tl(1227,"h4",36)(1228,"code",5),tN(1229,"PoHeaderUser"),sg()(),Tl(1230,"div",2)(1231,"p")(1232,"em"),tN(1233,"Interface"),sg(),tN(1234," que define a se\xE7\xE3o de Customer do header."),sg()(),Tl(1235,"h4",10),tN(1236,"Propriedades"),sg(),Tl(1237,"table",11)(1238,"tr",12)(1239,"th",13),tN(1240,"Nome"),sg(),Tl(1241,"th",13),tN(1242,"Tipo"),sg(),Tl(1243,"th",13),tN(1244,"Descri\xE7\xE3o"),sg()(),Tl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),tN(1249," action"),Gl(1250,"br"),sg()()(),Tl(1251,"td",18)(1252,"code",37),tN(1253,"Function"),sg()(),Tl(1254,"td",21)(1255,"em")(1256,"strong"),tN(1257,"(opcional)"),sg()(),Tl(1258,"p"),tN(1259,"Evento emitido ao clicar na se\xE7\xE3o"),sg(),Tl(1260,"p"),tN(1261,"Exemplo: "),Tl(1262,"code"),tN(1263,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),tN(1268," avatar"),Gl(1269,"br"),sg()()(),Tl(1270,"td",18)(1271,"code",24),tN(1272,"string"),sg()(),Tl(1273,"td",21)(1274,"p"),tN(1275,"Logo representando o perfil"),sg()()(),Tl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),tN(1280," customerBrand"),Gl(1281,"br"),sg()()(),Tl(1282,"td",18)(1283,"code",24),tN(1284,"string"),sg()(),Tl(1285,"td",21)(1286,"p"),tN(1287,"Imagem da marca"),sg()()(),Tl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),tN(1292," items"),Gl(1293,"br"),sg()()(),Tl(1294,"td",18)(1295,"code",38),tN(1296,"Array<PoHeaderActionToolItem>"),sg()(),Tl(1297,"td",21)(1298,"em")(1299,"strong"),tN(1300,"(opcional)"),sg()(),Tl(1301,"p"),tN(1302,"Itens de a\xE7\xF5es"),sg(),Tl(1303,"blockquote")(1304,"p"),tN(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),sg()()()(),Tl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),tN(1310," popover"),Gl(1311,"br"),sg()()(),Tl(1312,"td",18)(1313,"code",39),tN(1314,"PoHeaderActionPopoverAction"),sg()(),Tl(1315,"td",21)(1316,"em")(1317,"strong"),tN(1318,"(opcional)"),sg()(),Tl(1319,"p"),tN(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Tl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),tN(1325," status"),Gl(1326,"br"),sg()()(),Tl(1327,"td",18)(1328,"code",40),tN(1329,"'positive' "),sg(),Tl(1330,"code",41),tN(1331," 'negative' "),sg(),Tl(1332,"code",42),tN(1333," 'warning' "),sg(),Tl(1334,"code",43),tN(1335," 'disabled'"),sg()(),Tl(1336,"td",21)(1337,"em")(1338,"strong"),tN(1339,"(opcional)"),sg()(),Tl(1340,"p"),tN(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),sg(),Tl(1342,"ul")(1343,"li")(1344,"code"),tN(1345,"positive"),sg(),tN(1346,": Define a cor do "),Tl(1347,"code"),tN(1348,"status"),sg(),tN(1349," com a cor de feedback positivo."),sg(),Tl(1350,"li")(1351,"code"),tN(1352,"negative"),sg(),tN(1353,": Define a cor do "),Tl(1354,"code"),tN(1355,"status"),sg(),tN(1356," com a cor de feedback negative."),sg(),Tl(1357,"li")(1358,"code"),tN(1359,"warning"),sg(),tN(1360,": Define a cor do "),Tl(1361,"code"),tN(1362,"status"),sg(),tN(1363," com a cor de feedback warning."),sg(),Tl(1364,"li")(1365,"code"),tN(1366,"disabled"),sg(),tN(1367,": Define a cor do "),Tl(1368,"code"),tN(1369,"status"),sg(),tN(1370," com a cor de feedback disabled"),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-header-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ge,xe,fe,Ce],encapsulation:2})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Qe),vL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,Ae]})}return a})();export{ft as DocPoHeaderModule};