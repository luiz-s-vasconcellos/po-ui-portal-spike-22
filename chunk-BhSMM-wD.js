import {f as fe$1,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aW as Yp,r as r$1,h as s,aV as Ur,ae as Be$1,dc as _Ne,L as Gl,O as nw,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b4 as L3,cp as Bhe,c8 as Tde,bH as k3,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,dd as _N,a7 as gN,bM as vN,a2 as JE,av as Yl,aw as uo,ax as fo,a3 as sNe,aQ as _x,aA as Nx,aS as Dx,aD as Ky,aT as sN,aE as Xy,bR as MN}from'./main-JFQ6NFFH.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Gl(0,"po-header",0),r&2&&nw("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[_Ne],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Header Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-header-basic/sample-po-header-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=Sx();Gl(0,"po-header",1),Tl(1,"div",2)(2,"po-input",3),ww("ngModelChange",function(d){return Ky(p),sN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Xy(d)}),sg(),r0(),Tl(3,"po-input",4),ww("ngModelChange",function(d){return Ky(p),sN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Xy(d)}),sg(),r0(),Tl(4,"po-input",5),ww("ngModelChange",function(d){return Ky(p),sN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Xy(d)}),sg(),r0(),Tl(5,"div",6)(6,"po-button",7),ht("p-click",function(){return i.addBrand()}),sg()()(),Gl(7,"hr"),Tl(8,"div",8)(9,"h3",9),iN(10,"A\xE7\xF5es dos itens de menu"),sg(),Tl(11,"po-input",10),ww("ngModelChange",function(d){return Ky(p),sN(i.menuActionEvent,d)||(i.menuActionEvent=d),Xy(d)}),sg(),r0(),Tl(12,"po-input",11),ww("ngModelChange",function(d){return Ky(p),sN(i.menuActionLabel,d)||(i.menuActionLabel=d),Xy(d)}),sg(),r0(),Tl(13,"po-button",12),ht("p-click",function(){return i.addAction()}),sg()(),Gl(14,"hr"),Tl(15,"h3",9),iN(16,"A\xE7\xF5es das configura\xE7\xF5es"),sg(),Tl(17,"form",8,0)(19,"po-input",13),ww("ngModelChange",function(d){return Ky(p),sN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Xy(d)}),sg(),r0(),Tl(20,"po-input",14),ww("ngModelChange",function(d){return Ky(p),sN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Xy(d)}),sg(),r0(),Tl(21,"po-number",15),ww("ngModelChange",function(d){return Ky(p),sN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Xy(d)}),sg(),r0(),Tl(22,"po-switch",16),ww("ngModelChange",function(d){return Ky(p),sN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Xy(d)}),sg(),r0(),Tl(23,"po-button",17),ht("p-click",function(){return i.addTool(i.actionNewTool)}),sg()(),Gl(24,"hr"),Tl(25,"h3",9),iN(26,"A\xE7\xF5es do Usu\xE1rio"),sg(),Tl(27,"form",8,0)(29,"po-input",18),ww("ngModelChange",function(d){return Ky(p),sN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Xy(d)}),sg(),r0(),Tl(30,"po-input",19),ww("ngModelChange",function(d){return Ky(p),sN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Xy(d)}),sg(),r0(),Tl(31,"po-radio-group",20),ww("ngModelChange",function(d){return Ky(p),sN(i.newActionUser.status,d)||(i.newActionUser.status=d),Xy(d)}),sg(),r0(),Tl(32,"po-button",17),ht("p-click",function(){return i.addUser()}),sg(),Gl(33,"hr"),Tl(34,"h3",9),iN(35,"Varia\xE7\xF5es de tamanho"),sg(),Tl(36,"div",8)(37,"po-radio-group",21),ww("ngModelChange",function(d){return Ky(p),sN(i.size,d)||(i.size=d),Xy(d)}),sg(),r0(),sg(),Gl(38,"hr"),Tl(39,"po-button",22),ht("p-click",function(){return i.reset()}),sg()();}r&2&&(nw("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Vp(2),Ew("ngModel",i.headerBrandTitle),o0(),Vp(),Ew("ngModel",i.headerBrandLogo),o0(),Vp(),Ew("ngModel",i.headerBrandSmallLogo),o0(),Vp(7),Ew("ngModel",i.menuActionEvent),o0(),Vp(),Ew("ngModel",i.menuActionLabel),o0(),Vp(),nw("p-disabled",!i.menuActionLabel),Vp(6),Ew("ngModel",i.actionNewTool.icon),o0(),Vp(),Ew("ngModel",i.actionNewTool.tooltip),o0(),Vp(),Ew("ngModel",i.actionNewTool.badge),o0(),Vp(),Ew("ngModel",i.actionNewToolEvent),o0(),Vp(),nw("p-disabled",i.actionTools.length>2),Vp(6),Ew("ngModel",i.newActionUser.customerBrand),o0(),Vp(),Ew("ngModel",i.newActionUser.avatar),o0(),Vp(),Ew("ngModel",i.newActionUser.status),nw("p-options",_N(28,Le,gN(24,_e),gN(25,He),gN(26,Me),gN(27,Be))),o0(),Vp(),nw("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Vp(5),Ew("ngModel",i.size),nw("p-options",vN(35,Ne,gN(33,ke),gN(34,De))),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,L3,Bhe,Tde,k3,_Ne],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Header Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-header-labs/sample-po-header-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-header
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&Gl(0,"po-button",4),a&2){let l=A.$implicit;nw("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Tl(0,"div",2)(1,"p"),iN(2,"Meus aplicativos"),sg(),Gl(3,"br"),Tl(4,"div",3),_x(5,We,1,1,"po-button",4,ze),sg()()),a&2){let l=Nx();Vp(5),Dx(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ur.Top});}static \u0275fac=function(r){return new(r||a)(w(Yp),w(Be$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&Yl(Ue,5),r&2){let p;uo(p=fo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Gl(0,"po-header",1),JE(1,qe,7,0,"ng-template",null,0,MN)),r&2&&nw("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,_Ne],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Header Apps"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-header-apps/sample-po-header-apps.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-header
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-header-apps"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ve],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-header"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoHeaderComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"O componente "),Tl(18,"code"),iN(19,"po-header"),sg(),iN(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Tl(21,"code"),iN(22,"p-brand"),sg(),iN(23,", "),Tl(24,"code"),iN(25,"p-menu-items"),sg(),iN(26,", "),Tl(27,"code"),iN(28,"p-actions-tools"),sg(),iN(29," e "),Tl(30,"code"),iN(31,"p-header-user"),sg(),iN(32,"."),sg(),Tl(33,"ul")(34,"li")(35,"code"),iN(36,"p-brand"),sg(),iN(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),sg(),Tl(38,"li")(39,"code"),iN(40,"p-menu-items"),sg(),iN(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),sg(),Tl(42,"li")(43,"code"),iN(44,"p-actions-tools"),sg(),iN(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),sg(),Tl(46,"li")(47,"code"),iN(48,"p-header-user"),sg(),iN(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),sg()(),Tl(50,"p"),iN(51,"O componente "),Tl(52,"code"),iN(53,"po-header"),sg(),iN(54," pode ser usado de duas formas:"),sg(),Tl(55,"p"),iN(56,"Com "),Tl(57,"code"),iN(58,"po-menu"),sg(),iN(59," definido pelo usu\xE1rio:"),sg(),Tl(60,"pre")(61,"code"),iN(62,`...
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
`),sg()(),Tl(63,"p"),iN(64,"Passando os itens diretamente para o "),Tl(65,"code"),iN(66,"po-header"),sg(),iN(67," pela propriedade "),Tl(68,"code"),iN(69,"p-menus"),sg(),iN(70,":"),sg(),Tl(71,"pre")(72,"code"),iN(73,`...
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
`),sg()(),Tl(74,"h4"),iN(75,"Tokens customiz\xE1veis"),sg(),Tl(76,"p"),iN(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(78,"blockquote")(79,"p"),iN(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(81,"a",6),iN(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(83,"."),sg()(),Tl(84,"table")(85,"thead")(86,"tr")(87,"th"),iN(88,"Propriedade"),sg(),Tl(89,"th"),iN(90,"Descri\xE7\xE3o"),sg(),Tl(91,"th"),iN(92,"Valor Padr\xE3o"),sg()()(),Tl(93,"tbody")(94,"tr")(95,"td")(96,"code"),iN(97,"--font-family"),sg()(),Tl(98,"td"),iN(99,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(100,"td")(101,"code"),iN(102,"var(--font-family-theme)"),sg()()(),Tl(103,"tr")(104,"td")(105,"code"),iN(106,"--font-weight"),sg()(),Tl(107,"td"),iN(108,"Peso da fonte"),sg(),Tl(109,"td")(110,"code"),iN(111,"var(--font-weight-bold)"),sg()()(),Tl(112,"tr")(113,"td")(114,"code"),iN(115,"--text-color"),sg()(),Tl(116,"td"),iN(117,"Cor do texto"),sg(),Tl(118,"td")(119,"code"),iN(120,"var(--color-neutral-dark-70)"),sg()()(),Tl(121,"tr")(122,"td")(123,"code"),iN(124,"--outline-color-focused"),sg()(),Tl(125,"td"),iN(126,"Cor do outline dos itens de sub-menu e customer"),sg(),Tl(127,"td")(128,"code"),iN(129,"var(--color-neutral-dark-95)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),iN(133,"--object-fit-brand"),sg()(),Tl(134,"td"),iN(135,"Valor do object-fit da imagem do logo"),sg(),Tl(136,"td")(137,"code"),iN(138,"contain"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),iN(142,"--object-fit-customer"),sg()(),Tl(143,"td"),iN(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),sg(),Tl(145,"td")(146,"code"),iN(147,"contain"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),iN(151,"--object-fit-customer-user"),sg()(),Tl(152,"td"),iN(153,"Valor do object-fit da imagem do avatar"),sg(),Tl(154,"td")(155,"code"),iN(156,"cover"),sg()()(),Tl(157,"tr")(158,"td")(159,"strong"),iN(160,"Header"),sg()(),Gl(161,"td")(162,"td"),sg(),Tl(163,"tr")(164,"td")(165,"code"),iN(166,"--background-color"),sg()(),Tl(167,"td"),iN(168,"Cor de background do header"),sg(),Tl(169,"td")(170,"code"),iN(171,"var(--color-neutral-light-05)"),sg()()(),Tl(172,"tr")(173,"td")(174,"code"),iN(175,"--border-radius-bottom-left"),sg()(),Tl(176,"td"),iN(177,"Valor do radius do lado esquerdo do header"),sg(),Tl(178,"td")(179,"code"),iN(180,"var(--border-radius-md)"),sg()()(),Tl(181,"tr")(182,"td")(183,"code"),iN(184,"--border-radius-bottom-right"),sg()(),Tl(185,"td"),iN(186,"Valor do radius do lado direito do header"),sg(),Tl(187,"td")(188,"code"),iN(189,"var(--border-radius-md)"),sg()()(),Tl(190,"tr")(191,"td")(192,"code"),iN(193,"--base shadow"),sg()(),Tl(194,"td"),iN(195,"Cor da sombra do header"),sg(),Tl(196,"td")(197,"code"),iN(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),iN(202,"--stroke-color"),sg()(),Tl(203,"td"),iN(204,"Cor da borda inferior do header"),sg(),Tl(205,"td")(206,"code"),iN(207,"var(--color-brand-01-base)"),sg()()(),Tl(208,"tr")(209,"td")(210,"strong"),iN(211,"Sub-menu"),sg()(),Gl(212,"td")(213,"td"),sg(),Tl(214,"tr")(215,"td")(216,"code"),iN(217,"--border-radius"),sg()(),Tl(218,"td"),iN(219,"Valor do radius dos itens do sub-menu"),sg(),Tl(220,"td")(221,"code"),iN(222,"var(--border-radius-md);"),sg()()(),Tl(223,"tr")(224,"td")(225,"code"),iN(226,"--text-color-submenu"),sg()(),Tl(227,"td"),iN(228,"Cor do texto dos itens do sub-menu"),sg(),Tl(229,"td")(230,"code"),iN(231,"var(--color-brand-01-base)"),sg()()(),Tl(232,"tr")(233,"td")(234,"code"),iN(235,"--icon-color"),sg()(),Tl(236,"td"),iN(237,"Cor do \xEDcone do sub-menu com itens"),sg(),Tl(238,"td")(239,"code"),iN(240,"var(--color-brand-01-base)"),sg()()(),Tl(241,"tr")(242,"td")(243,"code"),iN(244,"--border-color"),sg()(),Tl(245,"td"),iN(246,"Cor da borda"),sg(),Tl(247,"td")(248,"code"),iN(249,"var(--color-transparent)"),sg()()(),Tl(250,"tr")(251,"td")(252,"code"),iN(253,"--shadow"),sg()(),Tl(254,"td"),iN(255,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(256,"td")(257,"code"),iN(258,"var(--shadow-none)"),sg()()(),Tl(259,"tr")(260,"td")(261,"code"),iN(262,"--font-family-submenu"),sg()(),Tl(263,"td"),iN(264,"Fonte do texto dos itens de sub-menu"),sg(),Tl(265,"td")(266,"code"),iN(267,"var(--font-family-theme)"),sg()()(),Tl(268,"tr")(269,"td")(270,"code"),iN(271,"--font-weight-submenu"),sg()(),Tl(272,"td"),iN(273,"Peso da fonte do texto dos itens de sub-menu"),sg(),Tl(274,"td")(275,"code"),iN(276,"var(--font-weight-bold)"),sg()()(),Tl(277,"tr")(278,"td")(279,"strong"),iN(280,"Sub-menu - Hover"),sg()(),Gl(281,"td")(282,"td"),sg(),Tl(283,"tr")(284,"td")(285,"code"),iN(286,"--background-hover"),sg()(),Tl(287,"td"),iN(288,"Cor de background dos itens do sub-menu no estado hover"),sg(),Tl(289,"td")(290,"code"),iN(291,"var(--color-brand-01-lighter)"),sg()()(),Tl(292,"tr")(293,"td")(294,"code"),iN(295,"--icon-color-hover"),sg()(),Tl(296,"td"),iN(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),sg(),Tl(298,"td")(299,"code"),iN(300,"var(--color-brand-01-darkest)"),sg()()(),Tl(301,"tr")(302,"td")(303,"code"),iN(304,"--text-color-hover"),sg()(),Tl(305,"td"),iN(306,"Cor do texto dos itens de sub-menu no estado hover"),sg(),Tl(307,"td")(308,"code"),iN(309,"var(--color-brand-01-darkest)"),sg()()(),Tl(310,"tr")(311,"td")(312,"strong"),iN(313,"Sub-menu - pressed"),sg()(),Gl(314,"td")(315,"td"),sg(),Tl(316,"tr")(317,"td")(318,"code"),iN(319,"--background-pressed"),sg()(),Tl(320,"td"),iN(321,"Cor de background dos itens do sub-menu no estado pressed"),sg(),Tl(322,"td")(323,"code"),iN(324,"var(--color-brand-01-light)"),sg()()(),Tl(325,"tr")(326,"td")(327,"code"),iN(328,"--icon-color-pressed"),sg()(),Tl(329,"td"),iN(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),sg(),Tl(331,"td")(332,"code"),iN(333,"var(--color-brand-01-darkest)"),sg()()(),Tl(334,"tr")(335,"td")(336,"code"),iN(337,"--text-color-pressed"),sg()(),Tl(338,"td"),iN(339,"Cor do texto dos itens de sub-menu no estado pressed"),sg(),Tl(340,"td")(341,"code"),iN(342,"var(--color-brand-01-darkest)"),sg()()(),Tl(343,"tr")(344,"td")(345,"strong"),iN(346,"Sub-menu - selected"),sg()(),Gl(347,"td")(348,"td"),sg(),Tl(349,"tr")(350,"td")(351,"code"),iN(352,"--background-selected"),sg()(),Tl(353,"td"),iN(354,"Cor de background dos itens do sub-menu no estado selected"),sg(),Tl(355,"td")(356,"code"),iN(357,"var(--color-brand-01-light)"),sg()()(),Tl(358,"tr")(359,"td")(360,"code"),iN(361,"--icon-color-selected"),sg()(),Tl(362,"td"),iN(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),sg(),Tl(364,"td")(365,"code"),iN(366,"var(--color-neutral-dark-95)"),sg()()(),Tl(367,"tr")(368,"td")(369,"code"),iN(370,"--text-color-selected"),sg()(),Tl(371,"td"),iN(372,"Cor do texto dos itens de sub-menu no estado selected"),sg(),Tl(373,"td")(374,"code"),iN(375,"var(--color-brand-01-darkest)"),sg()()(),Tl(376,"tr")(377,"td")(378,"strong"),iN(379,"Customer"),sg()(),Gl(380,"td")(381,"td"),sg(),Tl(382,"tr")(383,"td")(384,"code"),iN(385,"--background-color-customer"),sg()(),Tl(386,"td"),iN(387,"Cor do background da se\xE7\xE3o customer"),sg(),Tl(388,"td")(389,"code"),iN(390,"var(--color-neutral-light-00)"),sg()()(),Tl(391,"tr")(392,"td")(393,"code"),iN(394,"--border-color"),sg()(),Tl(395,"td"),iN(396,"Cor da borda da se\xE7\xE3o customer"),sg(),Tl(397,"td")(398,"code"),iN(399,"var(--color-neutral-light-10)"),sg()()(),Tl(400,"tr")(401,"td")(402,"code"),iN(403,"--border-style"),sg()(),Tl(404,"td"),iN(405,"Estilo da borda da se\xE7\xE3o customer"),sg(),Tl(406,"td")(407,"code"),iN(408,"solid"),sg()()(),Tl(409,"tr")(410,"td")(411,"code"),iN(412,"--border-width"),sg()(),Tl(413,"td"),iN(414,"Largura da borda da se\xE7\xE3o customer"),sg(),Tl(415,"td")(416,"code"),iN(417,"var(--border-width-sm)"),sg()()(),Tl(418,"tr")(419,"td")(420,"strong"),iN(421,"Customer - hover"),sg()(),Gl(422,"td")(423,"td"),sg(),Tl(424,"tr")(425,"td")(426,"code"),iN(427,"--background-color-customer-hover"),sg()(),Tl(428,"td"),iN(429,"Cor do background da se\xE7\xE3o customer no estado hover"),sg(),Tl(430,"td")(431,"code"),iN(432,"var(--color-brand-01-lighter)"),sg()()(),Tl(433,"tr")(434,"td")(435,"strong"),iN(436,"Customer - pressed"),sg()(),Gl(437,"td")(438,"td"),sg(),Tl(439,"tr")(440,"td")(441,"code"),iN(442,"--background-color-customer-pressed"),sg()(),Tl(443,"td"),iN(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),sg(),Tl(445,"td")(446,"code"),iN(447,"var(--color-brand-01-light)"),sg()()(),Tl(448,"tr")(449,"td")(450,"code"),iN(451,"--border-width-pressed"),sg()(),Tl(452,"td"),iN(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),sg(),Tl(454,"td")(455,"code"),iN(456,"var(--border-width-md)"),sg()()()()()(),Tl(457,"div",7)(458,"h4",8),iN(459,"Seletor"),sg(),Tl(460,"pre",9),iN(461,`<po-header
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
`),sg()(),Tl(462,"h4",10),iN(463,"Propriedades"),sg(),Tl(464,"table",11)(465,"tr",12)(466,"th",13),iN(467,"Nome"),sg(),Tl(468,"th",13),iN(469,"Tipo"),sg(),Tl(470,"th",13),iN(471,"Padr\xE3o"),sg(),Tl(472,"th",13),iN(473,"Descri\xE7\xE3o"),sg()(),Tl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),iN(478," p-actions-tools"),Gl(479,"br"),sg()()(),Tl(480,"td",18)(481,"code",19),iN(482,"Array<PoHeaderActionTool>"),sg()(),Tl(483,"td",20),iN(484,"-"),sg(),Tl(485,"td",21)(486,"em")(487,"strong"),iN(488,"(opcional)"),sg()(),Tl(489,"p"),iN(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Tl(491,"code"),iN(492,"po-header"),sg()(),Tl(493,"blockquote")(494,"p"),iN(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),sg()()()(),Tl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),iN(500," p-amount-more"),Gl(501,"br"),sg()()(),Tl(502,"td",18)(503,"code",22),iN(504,"number"),sg()(),Tl(505,"td",20),iN(506,"-"),sg(),Tl(507,"td",21)(508,"em")(509,"strong"),iN(510,"(opcional)"),sg()(),Tl(511,"p"),iN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),sg(),Tl(513,"blockquote")(514,"p"),iN(515,"Ao utilizar essa propriedade o "),Tl(516,"code"),iN(517,"po-header"),sg(),iN(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),sg()()()(),Tl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),iN(523," p-brand"),Gl(524,"br"),sg()()(),Tl(525,"td",18)(526,"code",23),iN(527,"PoHeaderBrand "),sg(),Tl(528,"code",24),iN(529," string"),sg()(),Tl(530,"td",20),iN(531,"-"),sg(),Tl(532,"td",21)(533,"em")(534,"strong"),iN(535,"(opcional)"),sg()(),Tl(536,"p"),iN(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Tl(538,"code"),iN(539,"po-header"),sg()(),Tl(540,"p"),iN(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),sg()()(),Tl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),iN(546," (p-colapsed-menu)"),Gl(547,"br"),sg()()(),Tl(548,"td",18)(549,"code",27),iN(550,"EventEmitter"),sg()(),Tl(551,"td",20),iN(552,"-"),sg(),Tl(553,"td",21)(554,"em")(555,"strong"),iN(556,"(opcional)"),sg()(),Tl(557,"p"),iN(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),sg()()(),Tl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),iN(563," p-filter-menu"),Gl(564,"br"),sg()()(),Tl(565,"td",18)(566,"code",28),iN(567,"boolean"),sg()(),Tl(568,"td",20),iN(569,"-"),sg(),Tl(570,"td",21)(571,"em")(572,"strong"),iN(573,"(opcional)"),sg()(),Tl(574,"p"),iN(575,"Habilita campo para filtrar itens no menu"),sg()()(),Tl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),iN(580," p-header-template"),Gl(581,"br"),sg()()(),Tl(582,"td",18)(583,"code",29),iN(584,"TemplateRef<any>"),sg()(),Tl(585,"td",20),iN(586,"-"),sg(),Tl(587,"td",21)(588,"em")(589,"strong"),iN(590,"(opcional)"),sg()(),Tl(591,"p"),iN(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Tl(593,"code"),iN(594,"p-menu-items"),sg()()()(),Tl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),iN(599," p-header-user"),Gl(600,"br"),sg()()(),Tl(601,"td",18)(602,"code",30),iN(603,"PoHeaderUser"),sg()(),Tl(604,"td",20),iN(605,"-"),sg(),Tl(606,"td",21)(607,"em")(608,"strong"),iN(609,"(opcional)"),sg()(),Tl(610,"p"),iN(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Tl(612,"code"),iN(613,"po-header"),sg()()()(),Tl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),iN(618," p-hide-button-menu"),Gl(619,"br"),sg()()(),Tl(620,"td",18)(621,"code",28),iN(622,"boolean"),sg()(),Tl(623,"td",20),iN(624,"-"),sg(),Tl(625,"td",21)(626,"em")(627,"strong"),iN(628,"(opcional)"),sg()(),Tl(629,"p"),iN(630,"Esconde o bot\xE3o de menu colapsado."),sg()()(),Tl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),iN(635," p-literals"),Gl(636,"br"),sg()()(),Tl(637,"td",18)(638,"code",31),iN(639,"PoHeaderLiterals"),sg()(),Tl(640,"td",20),iN(641,"-"),sg(),Tl(642,"td",21)(643,"em")(644,"strong"),iN(645,"(opcional)"),sg()(),Tl(646,"p"),iN(647,"Objeto com a literal usada na propriedade "),Tl(648,"code"),iN(649,"p-literals"),sg(),iN(650,"."),sg(),Tl(651,"p"),iN(652,"Para customizar a literal, basta declarar um objeto do tipo "),Tl(653,"code"),iN(654,"PoHeaderLiterals"),sg(),iN(655," conforme exemplo abaixo:"),sg(),Tl(656,"pre")(657,"code"),iN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),sg()(),Tl(659,"p"),iN(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(661,"pre")(662,"code"),iN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),sg()(),Tl(664,"blockquote")(665,"p"),iN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(667,"a",32)(668,"code"),iN(669,"PoI18nService"),sg()(),iN(670," ou do browser."),sg()()()(),Tl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),iN(675," p-menus"),Gl(676,"br"),sg()()(),Tl(677,"td",18)(678,"code",33),iN(679,"Array<PoMenuItem>"),sg()(),Tl(680,"td",20),iN(681,"-"),sg(),Tl(682,"td",21)(683,"em")(684,"strong"),iN(685,"(opcional)"),sg()(),Tl(686,"p"),iN(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg(),Tl(688,"blockquote")(689,"p"),iN(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),sg()()()(),Tl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),iN(695," p-menu-items"),Gl(696,"br"),sg()()(),Tl(697,"td",18)(698,"code",34),iN(699,"Array<PoHeaderActions>"),sg()(),Tl(700,"td",20),iN(701,"-"),sg(),Tl(702,"td",21)(703,"em")(704,"strong"),iN(705,"(opcional)"),sg()(),Tl(706,"p"),iN(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Tl(708,"code"),iN(709,"po-header"),sg(),iN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),sg(),Tl(711,"blockquote")(712,"p"),iN(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),sg()()()(),Tl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),iN(718," p-size"),Gl(719,"br"),sg()()(),Tl(720,"td",18)(721,"code",24),iN(722,"string"),sg()(),Tl(723,"td",20)(724,"p")(725,"code"),iN(726,"medium"),sg()()(),Tl(727,"td",21)(728,"em")(729,"strong"),iN(730,"(opcional)"),sg()(),Tl(731,"p"),iN(732,"Define o tamanho do componente:"),sg(),Tl(733,"ul")(734,"li")(735,"code"),iN(736,"small"),sg(),iN(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(738,"li")(739,"code"),iN(740,"medium"),sg(),iN(741,": altura de 56px."),sg()(),Tl(742,"blockquote")(743,"p"),iN(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(745,"code"),iN(746,"medium"),sg(),iN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(748,"a",35),iN(749,"po-theme"),sg(),iN(750,"."),sg()()()()(),Tl(751,"h3"),iN(752,"Interfaces"),sg(),Tl(753,"h4",36)(754,"code",5),iN(755,"PoHeaderActionTool"),sg()(),Tl(756,"div",2)(757,"p")(758,"em"),iN(759,"Interface"),sg(),iN(760," que define a se\xE7\xE3o de Actions do header."),sg(),Tl(761,"p"),iN(762,"Indica\xE7\xE3o de uso:"),sg(),Tl(763,"ul")(764,"li"),iN(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),sg(),Tl(766,"li"),iN(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),sg(),Tl(768,"li"),iN(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),sg()(),Tl(770,"blockquote")(771,"p"),iN(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),sg()()(),Tl(773,"h4",10),iN(774,"Propriedades"),sg(),Tl(775,"table",11)(776,"tr",12)(777,"th",13),iN(778,"Nome"),sg(),Tl(779,"th",13),iN(780,"Tipo"),sg(),Tl(781,"th",13),iN(782,"Descri\xE7\xE3o"),sg()(),Tl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),iN(787," action"),Gl(788,"br"),sg()()(),Tl(789,"td",18)(790,"code",37),iN(791,"Function"),sg()(),Tl(792,"td",21)(793,"em")(794,"strong"),iN(795,"(opcional)"),sg()(),Tl(796,"p"),iN(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Tl(798,"p"),iN(799,"Exemplo: "),Tl(800,"code"),iN(801,"action: this.myFunction.bind(this)"),sg()()()(),Tl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),iN(806," badge"),Gl(807,"br"),sg()()(),Tl(808,"td",18)(809,"code",22),iN(810,"number"),sg()(),Tl(811,"td",21)(812,"em")(813,"strong"),iN(814,"(opcional)"),sg()(),Tl(815,"p"),iN(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),sg()()(),Tl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),iN(821," icon"),Gl(822,"br"),sg()()(),Tl(823,"td",18)(824,"code",24),iN(825,"string"),sg()(),Tl(826,"td",21)(827,"em")(828,"strong"),iN(829,"(opcional)"),sg()(),Tl(830,"p"),iN(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),sg()()(),Tl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),iN(836," items"),Gl(837,"br"),sg()()(),Tl(838,"td",18)(839,"code",38),iN(840,"Array<PoHeaderActionToolItem>"),sg()(),Tl(841,"td",21)(842,"em")(843,"strong"),iN(844,"(opcional)"),sg()(),Tl(845,"p"),iN(846,"Itens de a\xE7\xF5es"),sg()()(),Tl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),iN(851," label"),Gl(852,"br"),sg()()(),Tl(853,"td",18)(854,"code",24),iN(855,"string"),sg()(),Tl(856,"td",21)(857,"em")(858,"strong"),iN(859,"(opcional)"),sg()(),Tl(860,"p"),iN(861,"T\xEDtulo da a\xE7\xE3o"),sg()()(),Tl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),iN(866," link"),Gl(867,"br"),sg()()(),Tl(868,"td",18)(869,"code",24),iN(870,"string"),sg()(),Tl(871,"td",21)(872,"em")(873,"strong"),iN(874,"(opcional)"),sg()(),Tl(875,"p"),iN(876,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Tl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),iN(881," popover"),Gl(882,"br"),sg()()(),Tl(883,"td",18)(884,"code",39),iN(885,"PoHeaderActionPopoverAction"),sg()(),Tl(886,"td",21)(887,"em")(888,"strong"),iN(889,"(opcional)"),sg()(),Tl(890,"p"),iN(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Tl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),iN(896," tooltip"),Gl(897,"br"),sg()()(),Tl(898,"td",18)(899,"code",24),iN(900,"string"),sg()(),Tl(901,"td",21)(902,"em")(903,"strong"),iN(904,"(opcional)"),sg()(),Tl(905,"p"),iN(906,"Texto que ser\xE1 apresentado na tooltip"),sg()()()(),Tl(907,"h4",36)(908,"code",5),iN(909,"PoHeaderActionPopoverAction"),sg()(),Tl(910,"div",2)(911,"p")(912,"em"),iN(913,"Interface"),sg(),iN(914," que define um template para uma a\xE7\xE3o."),sg()(),Tl(915,"h4",10),iN(916,"Propriedades"),sg(),Tl(917,"table",11)(918,"tr",12)(919,"th",13),iN(920,"Nome"),sg(),Tl(921,"th",13),iN(922,"Tipo"),sg(),Tl(923,"th",13),iN(924,"Descri\xE7\xE3o"),sg()(),Tl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),iN(929," content"),Gl(930,"br"),sg()()(),Tl(931,"td",18)(932,"code",29),iN(933,"TemplateRef<any>"),sg()(),Tl(934,"td",21)(935,"p"),iN(936,"Template que ser\xE1 renderizado dentro do popover."),sg()()(),Tl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),iN(941," width"),Gl(942,"br"),sg()()(),Tl(943,"td",18)(944,"code",22),iN(945,"number"),sg()(),Tl(946,"td",21)(947,"em")(948,"strong"),iN(949,"(opcional)"),sg()(),Tl(950,"p"),iN(951,"Largura, em pixels, do template renderizado dentro do popover."),sg(),Tl(952,"p"),iN(953,"Valores permitidos: de 240 a 800."),sg()()()(),Tl(954,"h4",36)(955,"code",5),iN(956,"PoHeaderActionToolItem"),sg()(),Tl(957,"div",2)(958,"p")(959,"em"),iN(960,"Interface"),sg(),iN(961," que define uma lista de a\xE7\xF5es."),sg()(),Tl(962,"h4",10),iN(963,"Propriedades"),sg(),Tl(964,"table",11)(965,"tr",12)(966,"th",13),iN(967,"Nome"),sg(),Tl(968,"th",13),iN(969,"Tipo"),sg(),Tl(970,"th",13),iN(971,"Descri\xE7\xE3o"),sg()(),Tl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),iN(976," action"),Gl(977,"br"),sg()()(),Tl(978,"td",18)(979,"code",37),iN(980,"Function"),sg()(),Tl(981,"td",21)(982,"p"),iN(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),sg(),Tl(984,"p"),iN(985,"Exemplo: "),Tl(986,"code"),iN(987,"action: this.myFunction.bind(this)"),sg()()()(),Tl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),iN(992," label"),Gl(993,"br"),sg()()(),Tl(994,"td",18)(995,"code",24),iN(996,"string"),sg()(),Tl(997,"td",21)(998,"p"),iN(999,"Label da a\xE7\xE3o"),sg()()()(),Tl(1e3,"h4",36)(1001,"code",5),iN(1002,"PoHeaderActions"),sg()(),Tl(1003,"div",2)(1004,"p")(1005,"em"),iN(1006,"Interface"),sg(),iN(1007," que define uma lista de a\xE7\xF5es no sub-menu."),sg()(),Tl(1008,"h4",10),iN(1009,"Propriedades"),sg(),Tl(1010,"table",11)(1011,"tr",12)(1012,"th",13),iN(1013,"Nome"),sg(),Tl(1014,"th",13),iN(1015,"Tipo"),sg(),Tl(1016,"th",13),iN(1017,"Descri\xE7\xE3o"),sg()(),Tl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),iN(1022," action"),Gl(1023,"br"),sg()()(),Tl(1024,"td",18)(1025,"code",37),iN(1026,"Function"),sg()(),Tl(1027,"td",21)(1028,"em")(1029,"strong"),iN(1030,"(opcional)"),sg()(),Tl(1031,"p"),iN(1032,"Evento da a\xE7\xE3o"),sg(),Tl(1033,"p"),iN(1034," Exemplo: "),Tl(1035,"code"),iN(1036,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),iN(1041," id"),Gl(1042,"br"),sg()()(),Tl(1043,"td",18)(1044,"code",24),iN(1045,"string"),sg()(),Tl(1046,"td",21)(1047,"em")(1048,"strong"),iN(1049,"(opcional)"),sg()(),Tl(1050,"p"),iN(1051,"Identificador da a\xE7\xE3o"),sg()()(),Tl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),iN(1056," label"),Gl(1057,"br"),sg()()(),Tl(1058,"td",18)(1059,"code",24),iN(1060,"string"),sg()(),Tl(1061,"td",21)(1062,"p"),iN(1063,"Label da a\xE7\xE3o"),sg()()(),Tl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),iN(1068," link"),Gl(1069,"br"),sg()()(),Tl(1070,"td",18)(1071,"code",24),iN(1072,"string"),sg()(),Tl(1073,"td",21)(1074,"em")(1075,"strong"),iN(1076,"(opcional)"),sg()(),Tl(1077,"p"),iN(1078,"link utilizado no redirecionamento das p\xE1ginas."),sg()()()(),Tl(1079,"h4",36)(1080,"code",5),iN(1081,"PoHeaderBrand"),sg()(),Tl(1082,"div",2)(1083,"p")(1084,"em"),iN(1085,"Interface"),sg(),iN(1086," que define a se\xE7\xE3o de brand."),sg()(),Tl(1087,"h4",10),iN(1088,"Propriedades"),sg(),Tl(1089,"table",11)(1090,"tr",12)(1091,"th",13),iN(1092,"Nome"),sg(),Tl(1093,"th",13),iN(1094,"Tipo"),sg(),Tl(1095,"th",13),iN(1096,"Descri\xE7\xE3o"),sg()(),Tl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),iN(1101," action"),Gl(1102,"br"),sg()()(),Tl(1103,"td",18)(1104,"code",37),iN(1105,"Function"),sg()(),Tl(1106,"td",21)(1107,"em")(1108,"strong"),iN(1109,"(opcional)"),sg()(),Tl(1110,"p"),iN(1111,"Evento da a\xE7\xE3o"),sg(),Tl(1112,"p"),iN(1113," Exemplo: "),Tl(1114,"code"),iN(1115,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),iN(1120," link"),Gl(1121,"br"),sg()()(),Tl(1122,"td",18)(1123,"code",24),iN(1124,"string"),sg()(),Tl(1125,"td",21)(1126,"em")(1127,"strong"),iN(1128,"(opcional)"),sg()(),Tl(1129,"p"),iN(1130,"link utilizado no redirecionamento das p\xE1ginas."),sg()()(),Tl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),iN(1135," logo"),Gl(1136,"br"),sg()()(),Tl(1137,"td",18)(1138,"code",24),iN(1139,"string"),sg()(),Tl(1140,"td",21)(1141,"em")(1142,"strong"),iN(1143,"(opcional)"),sg()(),Tl(1144,"p"),iN(1145,"Imagem da marca"),sg()()(),Tl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),iN(1150," smallLogo"),Gl(1151,"br"),sg()()(),Tl(1152,"td",18)(1153,"code",24),iN(1154,"string"),sg()(),Tl(1155,"td",21)(1156,"em")(1157,"strong"),iN(1158,"(opcional)"),sg()(),Tl(1159,"p"),iN(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),sg()()(),Tl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),iN(1165," title"),Gl(1166,"br"),sg()()(),Tl(1167,"td",18)(1168,"code",24),iN(1169,"string"),sg()(),Tl(1170,"td",21)(1171,"em")(1172,"strong"),iN(1173,"(opcional)"),sg()(),Tl(1174,"p"),iN(1175,"T\xEDtulo da marca"),sg()()()(),Tl(1176,"h4",36)(1177,"code",5),iN(1178,"PoHeaderLiterals"),sg()(),Tl(1179,"div",2)(1180,"p"),iN(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1182,"code"),iN(1183,"po-header"),sg(),iN(1184,"."),sg()(),Tl(1185,"h4",10),iN(1186,"Propriedades"),sg(),Tl(1187,"table",11)(1188,"tr",12)(1189,"th",13),iN(1190,"Nome"),sg(),Tl(1191,"th",13),iN(1192,"Tipo"),sg(),Tl(1193,"th",13),iN(1194,"Descri\xE7\xE3o"),sg()(),Tl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),iN(1199," headerLinks"),Gl(1200,"br"),sg()()(),Tl(1201,"td",18)(1202,"code",24),iN(1203,"string"),sg()(),Tl(1204,"td",21)(1205,"em")(1206,"strong"),iN(1207,"(opcional)"),sg()(),Tl(1208,"p"),iN(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),sg()()(),Tl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),iN(1214," notifications"),Gl(1215,"br"),sg()()(),Tl(1216,"td",18)(1217,"code",24),iN(1218,"string"),sg()(),Tl(1219,"td",21)(1220,"em")(1221,"strong"),iN(1222,"(opcional)"),sg()(),Tl(1223,"p"),iN(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Tl(1225,"code"),iN(1226,"badge"),sg()()()()(),Tl(1227,"h4",36)(1228,"code",5),iN(1229,"PoHeaderUser"),sg()(),Tl(1230,"div",2)(1231,"p")(1232,"em"),iN(1233,"Interface"),sg(),iN(1234," que define a se\xE7\xE3o de Customer do header."),sg()(),Tl(1235,"h4",10),iN(1236,"Propriedades"),sg(),Tl(1237,"table",11)(1238,"tr",12)(1239,"th",13),iN(1240,"Nome"),sg(),Tl(1241,"th",13),iN(1242,"Tipo"),sg(),Tl(1243,"th",13),iN(1244,"Descri\xE7\xE3o"),sg()(),Tl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),iN(1249," action"),Gl(1250,"br"),sg()()(),Tl(1251,"td",18)(1252,"code",37),iN(1253,"Function"),sg()(),Tl(1254,"td",21)(1255,"em")(1256,"strong"),iN(1257,"(opcional)"),sg()(),Tl(1258,"p"),iN(1259,"Evento emitido ao clicar na se\xE7\xE3o"),sg(),Tl(1260,"p"),iN(1261,"Exemplo: "),Tl(1262,"code"),iN(1263,"action: this.myFunction.bind(this)"),sg()()()(),Tl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),iN(1268," avatar"),Gl(1269,"br"),sg()()(),Tl(1270,"td",18)(1271,"code",24),iN(1272,"string"),sg()(),Tl(1273,"td",21)(1274,"p"),iN(1275,"Logo representando o perfil"),sg()()(),Tl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),iN(1280," customerBrand"),Gl(1281,"br"),sg()()(),Tl(1282,"td",18)(1283,"code",24),iN(1284,"string"),sg()(),Tl(1285,"td",21)(1286,"p"),iN(1287,"Imagem da marca"),sg()()(),Tl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),iN(1292," items"),Gl(1293,"br"),sg()()(),Tl(1294,"td",18)(1295,"code",38),iN(1296,"Array<PoHeaderActionToolItem>"),sg()(),Tl(1297,"td",21)(1298,"em")(1299,"strong"),iN(1300,"(opcional)"),sg()(),Tl(1301,"p"),iN(1302,"Itens de a\xE7\xF5es"),sg(),Tl(1303,"blockquote")(1304,"p"),iN(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),sg()()()(),Tl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),iN(1310," popover"),Gl(1311,"br"),sg()()(),Tl(1312,"td",18)(1313,"code",39),iN(1314,"PoHeaderActionPopoverAction"),sg()(),Tl(1315,"td",21)(1316,"em")(1317,"strong"),iN(1318,"(opcional)"),sg()(),Tl(1319,"p"),iN(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),sg()()(),Tl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),iN(1325," status"),Gl(1326,"br"),sg()()(),Tl(1327,"td",18)(1328,"code",40),iN(1329,"'positive' "),sg(),Tl(1330,"code",41),iN(1331," 'negative' "),sg(),Tl(1332,"code",42),iN(1333," 'warning' "),sg(),Tl(1334,"code",43),iN(1335," 'disabled'"),sg()(),Tl(1336,"td",21)(1337,"em")(1338,"strong"),iN(1339,"(opcional)"),sg()(),Tl(1340,"p"),iN(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),sg(),Tl(1342,"ul")(1343,"li")(1344,"code"),iN(1345,"positive"),sg(),iN(1346,": Define a cor do "),Tl(1347,"code"),iN(1348,"status"),sg(),iN(1349," com a cor de feedback positivo."),sg(),Tl(1350,"li")(1351,"code"),iN(1352,"negative"),sg(),iN(1353,": Define a cor do "),Tl(1354,"code"),iN(1355,"status"),sg(),iN(1356," com a cor de feedback negative."),sg(),Tl(1357,"li")(1358,"code"),iN(1359,"warning"),sg(),iN(1360,": Define a cor do "),Tl(1361,"code"),iN(1362,"status"),sg(),iN(1363," com a cor de feedback warning."),sg(),Tl(1364,"li")(1365,"code"),iN(1366,"disabled"),sg(),iN(1367,": Define a cor do "),Tl(1368,"code"),iN(1369,"status"),sg(),iN(1370," com a cor de feedback disabled"),sg()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-header-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ge,xe,fe,Ce],encapsulation:2,changeDetection:1})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[DL.forChild(Qe),DL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Ae]})}return a})();export{ft as DocPoHeaderModule};