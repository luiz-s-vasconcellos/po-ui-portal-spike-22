import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aV as Xp,r as r$1,s,aU as Gr,ae as He$1,di as FNe,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b3 as q3,ct as Hhe,cc as Nde,bL as H3,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,dj as cN,a7 as iN,bQ as sN,a2 as WE,av as zl,aw as uo,ax as fo,a3 as SNe,aQ as cx,aA as Ex,aS as lx,aD as Jy,aT as Zx,aE as e_,bV as vN}from'./main-OS7VVRJY.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Hl(0,"po-header",0),r&2&&ZE("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[FNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Header Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-header-basic/sample-po-header-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-header-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=gx();Hl(0,"po-header",1),Cl(1,"div",2)(2,"po-input",3),gw("ngModelChange",function(d){return Jy(p),Zx(i.headerBrandTitle,d)||(i.headerBrandTitle=d),e_(d)}),og(),Z0(),Cl(3,"po-input",4),gw("ngModelChange",function(d){return Jy(p),Zx(i.headerBrandLogo,d)||(i.headerBrandLogo=d),e_(d)}),og(),Z0(),Cl(4,"po-input",5),gw("ngModelChange",function(d){return Jy(p),Zx(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),e_(d)}),og(),Z0(),Cl(5,"div",6)(6,"po-button",7),dt("p-click",function(){return i.addBrand()}),og()()(),Hl(7,"hr"),Cl(8,"div",8)(9,"h3",9),qx(10,"A\xE7\xF5es dos itens de menu"),og(),Cl(11,"po-input",10),gw("ngModelChange",function(d){return Jy(p),Zx(i.menuActionEvent,d)||(i.menuActionEvent=d),e_(d)}),og(),Z0(),Cl(12,"po-input",11),gw("ngModelChange",function(d){return Jy(p),Zx(i.menuActionLabel,d)||(i.menuActionLabel=d),e_(d)}),og(),Z0(),Cl(13,"po-button",12),dt("p-click",function(){return i.addAction()}),og()(),Hl(14,"hr"),Cl(15,"h3",9),qx(16,"A\xE7\xF5es das configura\xE7\xF5es"),og(),Cl(17,"form",8,0)(19,"po-input",13),gw("ngModelChange",function(d){return Jy(p),Zx(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),e_(d)}),og(),Z0(),Cl(20,"po-input",14),gw("ngModelChange",function(d){return Jy(p),Zx(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),e_(d)}),og(),Z0(),Cl(21,"po-number",15),gw("ngModelChange",function(d){return Jy(p),Zx(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),e_(d)}),og(),Z0(),Cl(22,"po-switch",16),gw("ngModelChange",function(d){return Jy(p),Zx(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),e_(d)}),og(),Z0(),Cl(23,"po-button",17),dt("p-click",function(){return i.addTool(i.actionNewTool)}),og()(),Hl(24,"hr"),Cl(25,"h3",9),qx(26,"A\xE7\xF5es do Usu\xE1rio"),og(),Cl(27,"form",8,0)(29,"po-input",18),gw("ngModelChange",function(d){return Jy(p),Zx(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),e_(d)}),og(),Z0(),Cl(30,"po-input",19),gw("ngModelChange",function(d){return Jy(p),Zx(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),e_(d)}),og(),Z0(),Cl(31,"po-radio-group",20),gw("ngModelChange",function(d){return Jy(p),Zx(i.newActionUser.status,d)||(i.newActionUser.status=d),e_(d)}),og(),Z0(),Cl(32,"po-button",17),dt("p-click",function(){return i.addUser()}),og(),Hl(33,"hr"),Cl(34,"h3",9),qx(35,"Varia\xE7\xF5es de tamanho"),og(),Cl(36,"div",8)(37,"po-radio-group",21),gw("ngModelChange",function(d){return Jy(p),Zx(i.size,d)||(i.size=d),e_(d)}),og(),Z0(),og(),Hl(38,"hr"),Cl(39,"po-button",22),dt("p-click",function(){return i.reset()}),og()();}r&2&&(ZE("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Lp(2),pw("ngModel",i.headerBrandTitle),X0(),Lp(),pw("ngModel",i.headerBrandLogo),X0(),Lp(),pw("ngModel",i.headerBrandSmallLogo),X0(),Lp(7),pw("ngModel",i.menuActionEvent),X0(),Lp(),pw("ngModel",i.menuActionLabel),X0(),Lp(),ZE("p-disabled",!i.menuActionLabel),Lp(6),pw("ngModel",i.actionNewTool.icon),X0(),Lp(),pw("ngModel",i.actionNewTool.tooltip),X0(),Lp(),pw("ngModel",i.actionNewTool.badge),X0(),Lp(),pw("ngModel",i.actionNewToolEvent),X0(),Lp(),ZE("p-disabled",i.actionTools.length>2),Lp(6),pw("ngModel",i.newActionUser.customerBrand),X0(),Lp(),pw("ngModel",i.newActionUser.avatar),X0(),Lp(),pw("ngModel",i.newActionUser.status),ZE("p-options",cN(28,Le,iN(24,_e),iN(25,He),iN(26,Me),iN(27,Be))),X0(),Lp(),ZE("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Lp(5),pw("ngModel",i.size),ZE("p-options",sN(35,Ne,iN(33,ke),iN(34,De))),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,q3,Hhe,Nde,H3,FNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Header Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-header-labs/sample-po-header-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-header
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-header-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&Hl(0,"po-button",4),a&2){let l=A.$implicit;ZE("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Cl(0,"div",2)(1,"p"),qx(2,"Meus aplicativos"),og(),Hl(3,"br"),Cl(4,"div",3),cx(5,We,1,1,"po-button",4,ze),og()()),a&2){let l=Ex();Lp(5),lx(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Gr.Top});}static \u0275fac=function(r){return new(r||a)(w(Xp),w(He$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&zl(Ue,5),r&2){let p;uo(p=fo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Hl(0,"po-header",1),WE(1,qe,7,0,"ng-template",null,0,vN)),r&2&&ZE("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,FNe],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Header Apps"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-header-apps/sample-po-header-apps.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-header
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-header-apps"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-header"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoHeaderComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"O componente "),Cl(18,"code"),qx(19,"po-header"),og(),qx(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Cl(21,"code"),qx(22,"p-brand"),og(),qx(23,", "),Cl(24,"code"),qx(25,"p-menu-items"),og(),qx(26,", "),Cl(27,"code"),qx(28,"p-actions-tools"),og(),qx(29," e "),Cl(30,"code"),qx(31,"p-header-user"),og(),qx(32,"."),og(),Cl(33,"ul")(34,"li")(35,"code"),qx(36,"p-brand"),og(),qx(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),og(),Cl(38,"li")(39,"code"),qx(40,"p-menu-items"),og(),qx(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),og(),Cl(42,"li")(43,"code"),qx(44,"p-actions-tools"),og(),qx(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),og(),Cl(46,"li")(47,"code"),qx(48,"p-header-user"),og(),qx(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),og()(),Cl(50,"p"),qx(51,"O componente "),Cl(52,"code"),qx(53,"po-header"),og(),qx(54," pode ser usado de duas formas:"),og(),Cl(55,"p"),qx(56,"Com "),Cl(57,"code"),qx(58,"po-menu"),og(),qx(59," definido pelo usu\xE1rio:"),og(),Cl(60,"pre")(61,"code"),qx(62,`...
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
`),og()(),Cl(63,"p"),qx(64,"Passando os itens diretamente para o "),Cl(65,"code"),qx(66,"po-header"),og(),qx(67," pela propriedade "),Cl(68,"code"),qx(69,"p-menus"),og(),qx(70,":"),og(),Cl(71,"pre")(72,"code"),qx(73,`...
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
`),og()(),Cl(74,"h4"),qx(75,"Tokens customiz\xE1veis"),og(),Cl(76,"p"),qx(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(78,"blockquote")(79,"p"),qx(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(81,"a",6),qx(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(83,"."),og()(),Cl(84,"table")(85,"thead")(86,"tr")(87,"th"),qx(88,"Propriedade"),og(),Cl(89,"th"),qx(90,"Descri\xE7\xE3o"),og(),Cl(91,"th"),qx(92,"Valor Padr\xE3o"),og()()(),Cl(93,"tbody")(94,"tr")(95,"td")(96,"code"),qx(97,"--font-family"),og()(),Cl(98,"td"),qx(99,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(100,"td")(101,"code"),qx(102,"var(--font-family-theme)"),og()()(),Cl(103,"tr")(104,"td")(105,"code"),qx(106,"--font-weight"),og()(),Cl(107,"td"),qx(108,"Peso da fonte"),og(),Cl(109,"td")(110,"code"),qx(111,"var(--font-weight-bold)"),og()()(),Cl(112,"tr")(113,"td")(114,"code"),qx(115,"--text-color"),og()(),Cl(116,"td"),qx(117,"Cor do texto"),og(),Cl(118,"td")(119,"code"),qx(120,"var(--color-neutral-dark-70)"),og()()(),Cl(121,"tr")(122,"td")(123,"code"),qx(124,"--outline-color-focused"),og()(),Cl(125,"td"),qx(126,"Cor do outline dos itens de sub-menu e customer"),og(),Cl(127,"td")(128,"code"),qx(129,"var(--color-neutral-dark-95)"),og()()(),Cl(130,"tr")(131,"td")(132,"code"),qx(133,"--object-fit-brand"),og()(),Cl(134,"td"),qx(135,"Valor do object-fit da imagem do logo"),og(),Cl(136,"td")(137,"code"),qx(138,"contain"),og()()(),Cl(139,"tr")(140,"td")(141,"code"),qx(142,"--object-fit-customer"),og()(),Cl(143,"td"),qx(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),og(),Cl(145,"td")(146,"code"),qx(147,"contain"),og()()(),Cl(148,"tr")(149,"td")(150,"code"),qx(151,"--object-fit-customer-user"),og()(),Cl(152,"td"),qx(153,"Valor do object-fit da imagem do avatar"),og(),Cl(154,"td")(155,"code"),qx(156,"cover"),og()()(),Cl(157,"tr")(158,"td")(159,"strong"),qx(160,"Header"),og()(),Hl(161,"td")(162,"td"),og(),Cl(163,"tr")(164,"td")(165,"code"),qx(166,"--background-color"),og()(),Cl(167,"td"),qx(168,"Cor de background do header"),og(),Cl(169,"td")(170,"code"),qx(171,"var(--color-neutral-light-05)"),og()()(),Cl(172,"tr")(173,"td")(174,"code"),qx(175,"--border-radius-bottom-left"),og()(),Cl(176,"td"),qx(177,"Valor do radius do lado esquerdo do header"),og(),Cl(178,"td")(179,"code"),qx(180,"var(--border-radius-md)"),og()()(),Cl(181,"tr")(182,"td")(183,"code"),qx(184,"--border-radius-bottom-right"),og()(),Cl(185,"td"),qx(186,"Valor do radius do lado direito do header"),og(),Cl(187,"td")(188,"code"),qx(189,"var(--border-radius-md)"),og()()(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--base shadow"),og()(),Cl(194,"td"),qx(195,"Cor da sombra do header"),og(),Cl(196,"td")(197,"code"),qx(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),og()()(),Cl(199,"tr")(200,"td")(201,"code"),qx(202,"--stroke-color"),og()(),Cl(203,"td"),qx(204,"Cor da borda inferior do header"),og(),Cl(205,"td")(206,"code"),qx(207,"var(--color-brand-01-base)"),og()()(),Cl(208,"tr")(209,"td")(210,"strong"),qx(211,"Sub-menu"),og()(),Hl(212,"td")(213,"td"),og(),Cl(214,"tr")(215,"td")(216,"code"),qx(217,"--border-radius"),og()(),Cl(218,"td"),qx(219,"Valor do radius dos itens do sub-menu"),og(),Cl(220,"td")(221,"code"),qx(222,"var(--border-radius-md);"),og()()(),Cl(223,"tr")(224,"td")(225,"code"),qx(226,"--text-color-submenu"),og()(),Cl(227,"td"),qx(228,"Cor do texto dos itens do sub-menu"),og(),Cl(229,"td")(230,"code"),qx(231,"var(--color-brand-01-base)"),og()()(),Cl(232,"tr")(233,"td")(234,"code"),qx(235,"--icon-color"),og()(),Cl(236,"td"),qx(237,"Cor do \xEDcone do sub-menu com itens"),og(),Cl(238,"td")(239,"code"),qx(240,"var(--color-brand-01-base)"),og()()(),Cl(241,"tr")(242,"td")(243,"code"),qx(244,"--border-color"),og()(),Cl(245,"td"),qx(246,"Cor da borda"),og(),Cl(247,"td")(248,"code"),qx(249,"var(--color-transparent)"),og()()(),Cl(250,"tr")(251,"td")(252,"code"),qx(253,"--shadow"),og()(),Cl(254,"td"),qx(255,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(256,"td")(257,"code"),qx(258,"var(--shadow-none)"),og()()(),Cl(259,"tr")(260,"td")(261,"code"),qx(262,"--font-family-submenu"),og()(),Cl(263,"td"),qx(264,"Fonte do texto dos itens de sub-menu"),og(),Cl(265,"td")(266,"code"),qx(267,"var(--font-family-theme)"),og()()(),Cl(268,"tr")(269,"td")(270,"code"),qx(271,"--font-weight-submenu"),og()(),Cl(272,"td"),qx(273,"Peso da fonte do texto dos itens de sub-menu"),og(),Cl(274,"td")(275,"code"),qx(276,"var(--font-weight-bold)"),og()()(),Cl(277,"tr")(278,"td")(279,"strong"),qx(280,"Sub-menu - Hover"),og()(),Hl(281,"td")(282,"td"),og(),Cl(283,"tr")(284,"td")(285,"code"),qx(286,"--background-hover"),og()(),Cl(287,"td"),qx(288,"Cor de background dos itens do sub-menu no estado hover"),og(),Cl(289,"td")(290,"code"),qx(291,"var(--color-brand-01-lighter)"),og()()(),Cl(292,"tr")(293,"td")(294,"code"),qx(295,"--icon-color-hover"),og()(),Cl(296,"td"),qx(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),og(),Cl(298,"td")(299,"code"),qx(300,"var(--color-brand-01-darkest)"),og()()(),Cl(301,"tr")(302,"td")(303,"code"),qx(304,"--text-color-hover"),og()(),Cl(305,"td"),qx(306,"Cor do texto dos itens de sub-menu no estado hover"),og(),Cl(307,"td")(308,"code"),qx(309,"var(--color-brand-01-darkest)"),og()()(),Cl(310,"tr")(311,"td")(312,"strong"),qx(313,"Sub-menu - pressed"),og()(),Hl(314,"td")(315,"td"),og(),Cl(316,"tr")(317,"td")(318,"code"),qx(319,"--background-pressed"),og()(),Cl(320,"td"),qx(321,"Cor de background dos itens do sub-menu no estado pressed"),og(),Cl(322,"td")(323,"code"),qx(324,"var(--color-brand-01-light)"),og()()(),Cl(325,"tr")(326,"td")(327,"code"),qx(328,"--icon-color-pressed"),og()(),Cl(329,"td"),qx(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),og(),Cl(331,"td")(332,"code"),qx(333,"var(--color-brand-01-darkest)"),og()()(),Cl(334,"tr")(335,"td")(336,"code"),qx(337,"--text-color-pressed"),og()(),Cl(338,"td"),qx(339,"Cor do texto dos itens de sub-menu no estado pressed"),og(),Cl(340,"td")(341,"code"),qx(342,"var(--color-brand-01-darkest)"),og()()(),Cl(343,"tr")(344,"td")(345,"strong"),qx(346,"Sub-menu - selected"),og()(),Hl(347,"td")(348,"td"),og(),Cl(349,"tr")(350,"td")(351,"code"),qx(352,"--background-selected"),og()(),Cl(353,"td"),qx(354,"Cor de background dos itens do sub-menu no estado selected"),og(),Cl(355,"td")(356,"code"),qx(357,"var(--color-brand-01-light)"),og()()(),Cl(358,"tr")(359,"td")(360,"code"),qx(361,"--icon-color-selected"),og()(),Cl(362,"td"),qx(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),og(),Cl(364,"td")(365,"code"),qx(366,"var(--color-neutral-dark-95)"),og()()(),Cl(367,"tr")(368,"td")(369,"code"),qx(370,"--text-color-selected"),og()(),Cl(371,"td"),qx(372,"Cor do texto dos itens de sub-menu no estado selected"),og(),Cl(373,"td")(374,"code"),qx(375,"var(--color-brand-01-darkest)"),og()()(),Cl(376,"tr")(377,"td")(378,"strong"),qx(379,"Customer"),og()(),Hl(380,"td")(381,"td"),og(),Cl(382,"tr")(383,"td")(384,"code"),qx(385,"--background-color-customer"),og()(),Cl(386,"td"),qx(387,"Cor do background da se\xE7\xE3o customer"),og(),Cl(388,"td")(389,"code"),qx(390,"var(--color-neutral-light-00)"),og()()(),Cl(391,"tr")(392,"td")(393,"code"),qx(394,"--border-color"),og()(),Cl(395,"td"),qx(396,"Cor da borda da se\xE7\xE3o customer"),og(),Cl(397,"td")(398,"code"),qx(399,"var(--color-neutral-light-10)"),og()()(),Cl(400,"tr")(401,"td")(402,"code"),qx(403,"--border-style"),og()(),Cl(404,"td"),qx(405,"Estilo da borda da se\xE7\xE3o customer"),og(),Cl(406,"td")(407,"code"),qx(408,"solid"),og()()(),Cl(409,"tr")(410,"td")(411,"code"),qx(412,"--border-width"),og()(),Cl(413,"td"),qx(414,"Largura da borda da se\xE7\xE3o customer"),og(),Cl(415,"td")(416,"code"),qx(417,"var(--border-width-sm)"),og()()(),Cl(418,"tr")(419,"td")(420,"strong"),qx(421,"Customer - hover"),og()(),Hl(422,"td")(423,"td"),og(),Cl(424,"tr")(425,"td")(426,"code"),qx(427,"--background-color-customer-hover"),og()(),Cl(428,"td"),qx(429,"Cor do background da se\xE7\xE3o customer no estado hover"),og(),Cl(430,"td")(431,"code"),qx(432,"var(--color-brand-01-lighter)"),og()()(),Cl(433,"tr")(434,"td")(435,"strong"),qx(436,"Customer - pressed"),og()(),Hl(437,"td")(438,"td"),og(),Cl(439,"tr")(440,"td")(441,"code"),qx(442,"--background-color-customer-pressed"),og()(),Cl(443,"td"),qx(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),og(),Cl(445,"td")(446,"code"),qx(447,"var(--color-brand-01-light)"),og()()(),Cl(448,"tr")(449,"td")(450,"code"),qx(451,"--border-width-pressed"),og()(),Cl(452,"td"),qx(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),og(),Cl(454,"td")(455,"code"),qx(456,"var(--border-width-md)"),og()()()()()(),Cl(457,"div",7)(458,"h4",8),qx(459,"Seletor"),og(),Cl(460,"pre",9),qx(461,`<po-header
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
`),og()(),Cl(462,"h4",10),qx(463,"Propriedades"),og(),Cl(464,"table",11)(465,"tr",12)(466,"th",13),qx(467,"Nome"),og(),Cl(468,"th",13),qx(469,"Tipo"),og(),Cl(470,"th",13),qx(471,"Padr\xE3o"),og(),Cl(472,"th",13),qx(473,"Descri\xE7\xE3o"),og()(),Cl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),qx(478," p-actions-tools"),Hl(479,"br"),og()()(),Cl(480,"td",18)(481,"code",19),qx(482,"Array<PoHeaderActionTool>"),og()(),Cl(483,"td",20),qx(484,"-"),og(),Cl(485,"td",21)(486,"em")(487,"strong"),qx(488,"(opcional)"),og()(),Cl(489,"p"),qx(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Cl(491,"code"),qx(492,"po-header"),og()(),Cl(493,"blockquote")(494,"p"),qx(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),og()()()(),Cl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),qx(500," p-amount-more"),Hl(501,"br"),og()()(),Cl(502,"td",18)(503,"code",22),qx(504,"number"),og()(),Cl(505,"td",20),qx(506,"-"),og(),Cl(507,"td",21)(508,"em")(509,"strong"),qx(510,"(opcional)"),og()(),Cl(511,"p"),qx(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),og(),Cl(513,"blockquote")(514,"p"),qx(515,"Ao utilizar essa propriedade o "),Cl(516,"code"),qx(517,"po-header"),og(),qx(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),og()()()(),Cl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),qx(523," p-brand"),Hl(524,"br"),og()()(),Cl(525,"td",18)(526,"code",23),qx(527,"PoHeaderBrand "),og(),Cl(528,"code",24),qx(529," string"),og()(),Cl(530,"td",20),qx(531,"-"),og(),Cl(532,"td",21)(533,"em")(534,"strong"),qx(535,"(opcional)"),og()(),Cl(536,"p"),qx(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Cl(538,"code"),qx(539,"po-header"),og()(),Cl(540,"p"),qx(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),og()()(),Cl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),qx(546," (p-colapsed-menu)"),Hl(547,"br"),og()()(),Cl(548,"td",18)(549,"code",27),qx(550,"EventEmitter"),og()(),Cl(551,"td",20),qx(552,"-"),og(),Cl(553,"td",21)(554,"em")(555,"strong"),qx(556,"(opcional)"),og()(),Cl(557,"p"),qx(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),og()()(),Cl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),qx(563," p-filter-menu"),Hl(564,"br"),og()()(),Cl(565,"td",18)(566,"code",28),qx(567,"boolean"),og()(),Cl(568,"td",20),qx(569,"-"),og(),Cl(570,"td",21)(571,"em")(572,"strong"),qx(573,"(opcional)"),og()(),Cl(574,"p"),qx(575,"Habilita campo para filtrar itens no menu"),og()()(),Cl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),qx(580," p-header-template"),Hl(581,"br"),og()()(),Cl(582,"td",18)(583,"code",29),qx(584,"TemplateRef<any>"),og()(),Cl(585,"td",20),qx(586,"-"),og(),Cl(587,"td",21)(588,"em")(589,"strong"),qx(590,"(opcional)"),og()(),Cl(591,"p"),qx(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Cl(593,"code"),qx(594,"p-menu-items"),og()()()(),Cl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),qx(599," p-header-user"),Hl(600,"br"),og()()(),Cl(601,"td",18)(602,"code",30),qx(603,"PoHeaderUser"),og()(),Cl(604,"td",20),qx(605,"-"),og(),Cl(606,"td",21)(607,"em")(608,"strong"),qx(609,"(opcional)"),og()(),Cl(610,"p"),qx(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Cl(612,"code"),qx(613,"po-header"),og()()()(),Cl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),qx(618," p-hide-button-menu"),Hl(619,"br"),og()()(),Cl(620,"td",18)(621,"code",28),qx(622,"boolean"),og()(),Cl(623,"td",20),qx(624,"-"),og(),Cl(625,"td",21)(626,"em")(627,"strong"),qx(628,"(opcional)"),og()(),Cl(629,"p"),qx(630,"Esconde o bot\xE3o de menu colapsado."),og()()(),Cl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),qx(635," p-literals"),Hl(636,"br"),og()()(),Cl(637,"td",18)(638,"code",31),qx(639,"PoHeaderLiterals"),og()(),Cl(640,"td",20),qx(641,"-"),og(),Cl(642,"td",21)(643,"em")(644,"strong"),qx(645,"(opcional)"),og()(),Cl(646,"p"),qx(647,"Objeto com a literal usada na propriedade "),Cl(648,"code"),qx(649,"p-literals"),og(),qx(650,"."),og(),Cl(651,"p"),qx(652,"Para customizar a literal, basta declarar um objeto do tipo "),Cl(653,"code"),qx(654,"PoHeaderLiterals"),og(),qx(655," conforme exemplo abaixo:"),og(),Cl(656,"pre")(657,"code"),qx(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),og()(),Cl(659,"p"),qx(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(661,"pre")(662,"code"),qx(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),og()(),Cl(664,"blockquote")(665,"p"),qx(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(667,"a",32)(668,"code"),qx(669,"PoI18nService"),og()(),qx(670," ou do browser."),og()()()(),Cl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),qx(675," p-menus"),Hl(676,"br"),og()()(),Cl(677,"td",18)(678,"code",33),qx(679,"Array<PoMenuItem>"),og()(),Cl(680,"td",20),qx(681,"-"),og(),Cl(682,"td",21)(683,"em")(684,"strong"),qx(685,"(opcional)"),og()(),Cl(686,"p"),qx(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Cl(688,"blockquote")(689,"p"),qx(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),og()()()(),Cl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),qx(695," p-menu-items"),Hl(696,"br"),og()()(),Cl(697,"td",18)(698,"code",34),qx(699,"Array<PoHeaderActions>"),og()(),Cl(700,"td",20),qx(701,"-"),og(),Cl(702,"td",21)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Cl(708,"code"),qx(709,"po-header"),og(),qx(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),og(),Cl(711,"blockquote")(712,"p"),qx(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),og()()()(),Cl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),qx(718," p-size"),Hl(719,"br"),og()()(),Cl(720,"td",18)(721,"code",24),qx(722,"string"),og()(),Cl(723,"td",20)(724,"p")(725,"code"),qx(726,"medium"),og()()(),Cl(727,"td",21)(728,"em")(729,"strong"),qx(730,"(opcional)"),og()(),Cl(731,"p"),qx(732,"Define o tamanho do componente:"),og(),Cl(733,"ul")(734,"li")(735,"code"),qx(736,"small"),og(),qx(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(738,"li")(739,"code"),qx(740,"medium"),og(),qx(741,": altura de 56px."),og()(),Cl(742,"blockquote")(743,"p"),qx(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(745,"code"),qx(746,"medium"),og(),qx(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(748,"a",35),qx(749,"po-theme"),og(),qx(750,"."),og()()()()(),Cl(751,"h3"),qx(752,"Interfaces"),og(),Cl(753,"h4",36)(754,"code",5),qx(755,"PoHeaderActionTool"),og()(),Cl(756,"div",2)(757,"p")(758,"em"),qx(759,"Interface"),og(),qx(760," que define a se\xE7\xE3o de Actions do header."),og(),Cl(761,"p"),qx(762,"Indica\xE7\xE3o de uso:"),og(),Cl(763,"ul")(764,"li"),qx(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),og(),Cl(766,"li"),qx(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),og(),Cl(768,"li"),qx(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),og()(),Cl(770,"blockquote")(771,"p"),qx(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),og()()(),Cl(773,"h4",10),qx(774,"Propriedades"),og(),Cl(775,"table",11)(776,"tr",12)(777,"th",13),qx(778,"Nome"),og(),Cl(779,"th",13),qx(780,"Tipo"),og(),Cl(781,"th",13),qx(782,"Descri\xE7\xE3o"),og()(),Cl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),qx(787," action"),Hl(788,"br"),og()()(),Cl(789,"td",18)(790,"code",37),qx(791,"Function"),og()(),Cl(792,"td",21)(793,"em")(794,"strong"),qx(795,"(opcional)"),og()(),Cl(796,"p"),qx(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Cl(798,"p"),qx(799,"Exemplo: "),Cl(800,"code"),qx(801,"action: this.myFunction.bind(this)"),og()()()(),Cl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),qx(806," badge"),Hl(807,"br"),og()()(),Cl(808,"td",18)(809,"code",22),qx(810,"number"),og()(),Cl(811,"td",21)(812,"em")(813,"strong"),qx(814,"(opcional)"),og()(),Cl(815,"p"),qx(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),og()()(),Cl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),qx(821," icon"),Hl(822,"br"),og()()(),Cl(823,"td",18)(824,"code",24),qx(825,"string"),og()(),Cl(826,"td",21)(827,"em")(828,"strong"),qx(829,"(opcional)"),og()(),Cl(830,"p"),qx(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),og()()(),Cl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),qx(836," items"),Hl(837,"br"),og()()(),Cl(838,"td",18)(839,"code",38),qx(840,"Array<PoHeaderActionToolItem>"),og()(),Cl(841,"td",21)(842,"em")(843,"strong"),qx(844,"(opcional)"),og()(),Cl(845,"p"),qx(846,"Itens de a\xE7\xF5es"),og()()(),Cl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),qx(851," label"),Hl(852,"br"),og()()(),Cl(853,"td",18)(854,"code",24),qx(855,"string"),og()(),Cl(856,"td",21)(857,"em")(858,"strong"),qx(859,"(opcional)"),og()(),Cl(860,"p"),qx(861,"T\xEDtulo da a\xE7\xE3o"),og()()(),Cl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),qx(866," link"),Hl(867,"br"),og()()(),Cl(868,"td",18)(869,"code",24),qx(870,"string"),og()(),Cl(871,"td",21)(872,"em")(873,"strong"),qx(874,"(opcional)"),og()(),Cl(875,"p"),qx(876,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Cl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),qx(881," popover"),Hl(882,"br"),og()()(),Cl(883,"td",18)(884,"code",39),qx(885,"PoHeaderActionPopoverAction"),og()(),Cl(886,"td",21)(887,"em")(888,"strong"),qx(889,"(opcional)"),og()(),Cl(890,"p"),qx(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Cl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),qx(896," tooltip"),Hl(897,"br"),og()()(),Cl(898,"td",18)(899,"code",24),qx(900,"string"),og()(),Cl(901,"td",21)(902,"em")(903,"strong"),qx(904,"(opcional)"),og()(),Cl(905,"p"),qx(906,"Texto que ser\xE1 apresentado na tooltip"),og()()()(),Cl(907,"h4",36)(908,"code",5),qx(909,"PoHeaderActionPopoverAction"),og()(),Cl(910,"div",2)(911,"p")(912,"em"),qx(913,"Interface"),og(),qx(914," que define um template para uma a\xE7\xE3o."),og()(),Cl(915,"h4",10),qx(916,"Propriedades"),og(),Cl(917,"table",11)(918,"tr",12)(919,"th",13),qx(920,"Nome"),og(),Cl(921,"th",13),qx(922,"Tipo"),og(),Cl(923,"th",13),qx(924,"Descri\xE7\xE3o"),og()(),Cl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),qx(929," content"),Hl(930,"br"),og()()(),Cl(931,"td",18)(932,"code",29),qx(933,"TemplateRef<any>"),og()(),Cl(934,"td",21)(935,"p"),qx(936,"Template que ser\xE1 renderizado dentro do popover."),og()()(),Cl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),qx(941," width"),Hl(942,"br"),og()()(),Cl(943,"td",18)(944,"code",22),qx(945,"number"),og()(),Cl(946,"td",21)(947,"em")(948,"strong"),qx(949,"(opcional)"),og()(),Cl(950,"p"),qx(951,"Largura, em pixels, do template renderizado dentro do popover."),og(),Cl(952,"p"),qx(953,"Valores permitidos: de 240 a 800."),og()()()(),Cl(954,"h4",36)(955,"code",5),qx(956,"PoHeaderActionToolItem"),og()(),Cl(957,"div",2)(958,"p")(959,"em"),qx(960,"Interface"),og(),qx(961," que define uma lista de a\xE7\xF5es."),og()(),Cl(962,"h4",10),qx(963,"Propriedades"),og(),Cl(964,"table",11)(965,"tr",12)(966,"th",13),qx(967,"Nome"),og(),Cl(968,"th",13),qx(969,"Tipo"),og(),Cl(970,"th",13),qx(971,"Descri\xE7\xE3o"),og()(),Cl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),qx(976," action"),Hl(977,"br"),og()()(),Cl(978,"td",18)(979,"code",37),qx(980,"Function"),og()(),Cl(981,"td",21)(982,"p"),qx(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Cl(984,"p"),qx(985,"Exemplo: "),Cl(986,"code"),qx(987,"action: this.myFunction.bind(this)"),og()()()(),Cl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),qx(992," label"),Hl(993,"br"),og()()(),Cl(994,"td",18)(995,"code",24),qx(996,"string"),og()(),Cl(997,"td",21)(998,"p"),qx(999,"Label da a\xE7\xE3o"),og()()()(),Cl(1e3,"h4",36)(1001,"code",5),qx(1002,"PoHeaderActions"),og()(),Cl(1003,"div",2)(1004,"p")(1005,"em"),qx(1006,"Interface"),og(),qx(1007," que define uma lista de a\xE7\xF5es no sub-menu."),og()(),Cl(1008,"h4",10),qx(1009,"Propriedades"),og(),Cl(1010,"table",11)(1011,"tr",12)(1012,"th",13),qx(1013,"Nome"),og(),Cl(1014,"th",13),qx(1015,"Tipo"),og(),Cl(1016,"th",13),qx(1017,"Descri\xE7\xE3o"),og()(),Cl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),qx(1022," action"),Hl(1023,"br"),og()()(),Cl(1024,"td",18)(1025,"code",37),qx(1026,"Function"),og()(),Cl(1027,"td",21)(1028,"em")(1029,"strong"),qx(1030,"(opcional)"),og()(),Cl(1031,"p"),qx(1032,"Evento da a\xE7\xE3o"),og(),Cl(1033,"p"),qx(1034," Exemplo: "),Cl(1035,"code"),qx(1036,"action: this.myFunction.bind(this)"),og()()()(),Cl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),qx(1041," id"),Hl(1042,"br"),og()()(),Cl(1043,"td",18)(1044,"code",24),qx(1045,"string"),og()(),Cl(1046,"td",21)(1047,"em")(1048,"strong"),qx(1049,"(opcional)"),og()(),Cl(1050,"p"),qx(1051,"Identificador da a\xE7\xE3o"),og()()(),Cl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),qx(1056," label"),Hl(1057,"br"),og()()(),Cl(1058,"td",18)(1059,"code",24),qx(1060,"string"),og()(),Cl(1061,"td",21)(1062,"p"),qx(1063,"Label da a\xE7\xE3o"),og()()(),Cl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),qx(1068," link"),Hl(1069,"br"),og()()(),Cl(1070,"td",18)(1071,"code",24),qx(1072,"string"),og()(),Cl(1073,"td",21)(1074,"em")(1075,"strong"),qx(1076,"(opcional)"),og()(),Cl(1077,"p"),qx(1078,"link utilizado no redirecionamento das p\xE1ginas."),og()()()(),Cl(1079,"h4",36)(1080,"code",5),qx(1081,"PoHeaderBrand"),og()(),Cl(1082,"div",2)(1083,"p")(1084,"em"),qx(1085,"Interface"),og(),qx(1086," que define a se\xE7\xE3o de brand."),og()(),Cl(1087,"h4",10),qx(1088,"Propriedades"),og(),Cl(1089,"table",11)(1090,"tr",12)(1091,"th",13),qx(1092,"Nome"),og(),Cl(1093,"th",13),qx(1094,"Tipo"),og(),Cl(1095,"th",13),qx(1096,"Descri\xE7\xE3o"),og()(),Cl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),qx(1101," action"),Hl(1102,"br"),og()()(),Cl(1103,"td",18)(1104,"code",37),qx(1105,"Function"),og()(),Cl(1106,"td",21)(1107,"em")(1108,"strong"),qx(1109,"(opcional)"),og()(),Cl(1110,"p"),qx(1111,"Evento da a\xE7\xE3o"),og(),Cl(1112,"p"),qx(1113," Exemplo: "),Cl(1114,"code"),qx(1115,"action: this.myFunction.bind(this)"),og()()()(),Cl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),qx(1120," link"),Hl(1121,"br"),og()()(),Cl(1122,"td",18)(1123,"code",24),qx(1124,"string"),og()(),Cl(1125,"td",21)(1126,"em")(1127,"strong"),qx(1128,"(opcional)"),og()(),Cl(1129,"p"),qx(1130,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Cl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),qx(1135," logo"),Hl(1136,"br"),og()()(),Cl(1137,"td",18)(1138,"code",24),qx(1139,"string"),og()(),Cl(1140,"td",21)(1141,"em")(1142,"strong"),qx(1143,"(opcional)"),og()(),Cl(1144,"p"),qx(1145,"Imagem da marca"),og()()(),Cl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),qx(1150," smallLogo"),Hl(1151,"br"),og()()(),Cl(1152,"td",18)(1153,"code",24),qx(1154,"string"),og()(),Cl(1155,"td",21)(1156,"em")(1157,"strong"),qx(1158,"(opcional)"),og()(),Cl(1159,"p"),qx(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),og()()(),Cl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),qx(1165," title"),Hl(1166,"br"),og()()(),Cl(1167,"td",18)(1168,"code",24),qx(1169,"string"),og()(),Cl(1170,"td",21)(1171,"em")(1172,"strong"),qx(1173,"(opcional)"),og()(),Cl(1174,"p"),qx(1175,"T\xEDtulo da marca"),og()()()(),Cl(1176,"h4",36)(1177,"code",5),qx(1178,"PoHeaderLiterals"),og()(),Cl(1179,"div",2)(1180,"p"),qx(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1182,"code"),qx(1183,"po-header"),og(),qx(1184,"."),og()(),Cl(1185,"h4",10),qx(1186,"Propriedades"),og(),Cl(1187,"table",11)(1188,"tr",12)(1189,"th",13),qx(1190,"Nome"),og(),Cl(1191,"th",13),qx(1192,"Tipo"),og(),Cl(1193,"th",13),qx(1194,"Descri\xE7\xE3o"),og()(),Cl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),qx(1199," headerLinks"),Hl(1200,"br"),og()()(),Cl(1201,"td",18)(1202,"code",24),qx(1203,"string"),og()(),Cl(1204,"td",21)(1205,"em")(1206,"strong"),qx(1207,"(opcional)"),og()(),Cl(1208,"p"),qx(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),og()()(),Cl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),qx(1214," notifications"),Hl(1215,"br"),og()()(),Cl(1216,"td",18)(1217,"code",24),qx(1218,"string"),og()(),Cl(1219,"td",21)(1220,"em")(1221,"strong"),qx(1222,"(opcional)"),og()(),Cl(1223,"p"),qx(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Cl(1225,"code"),qx(1226,"badge"),og()()()()(),Cl(1227,"h4",36)(1228,"code",5),qx(1229,"PoHeaderUser"),og()(),Cl(1230,"div",2)(1231,"p")(1232,"em"),qx(1233,"Interface"),og(),qx(1234," que define a se\xE7\xE3o de Customer do header."),og()(),Cl(1235,"h4",10),qx(1236,"Propriedades"),og(),Cl(1237,"table",11)(1238,"tr",12)(1239,"th",13),qx(1240,"Nome"),og(),Cl(1241,"th",13),qx(1242,"Tipo"),og(),Cl(1243,"th",13),qx(1244,"Descri\xE7\xE3o"),og()(),Cl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),qx(1249," action"),Hl(1250,"br"),og()()(),Cl(1251,"td",18)(1252,"code",37),qx(1253,"Function"),og()(),Cl(1254,"td",21)(1255,"em")(1256,"strong"),qx(1257,"(opcional)"),og()(),Cl(1258,"p"),qx(1259,"Evento emitido ao clicar na se\xE7\xE3o"),og(),Cl(1260,"p"),qx(1261,"Exemplo: "),Cl(1262,"code"),qx(1263,"action: this.myFunction.bind(this)"),og()()()(),Cl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),qx(1268," avatar"),Hl(1269,"br"),og()()(),Cl(1270,"td",18)(1271,"code",24),qx(1272,"string"),og()(),Cl(1273,"td",21)(1274,"p"),qx(1275,"Logo representando o perfil"),og()()(),Cl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),qx(1280," customerBrand"),Hl(1281,"br"),og()()(),Cl(1282,"td",18)(1283,"code",24),qx(1284,"string"),og()(),Cl(1285,"td",21)(1286,"p"),qx(1287,"Imagem da marca"),og()()(),Cl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),qx(1292," items"),Hl(1293,"br"),og()()(),Cl(1294,"td",18)(1295,"code",38),qx(1296,"Array<PoHeaderActionToolItem>"),og()(),Cl(1297,"td",21)(1298,"em")(1299,"strong"),qx(1300,"(opcional)"),og()(),Cl(1301,"p"),qx(1302,"Itens de a\xE7\xF5es"),og(),Cl(1303,"blockquote")(1304,"p"),qx(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),og()()()(),Cl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),qx(1310," popover"),Hl(1311,"br"),og()()(),Cl(1312,"td",18)(1313,"code",39),qx(1314,"PoHeaderActionPopoverAction"),og()(),Cl(1315,"td",21)(1316,"em")(1317,"strong"),qx(1318,"(opcional)"),og()(),Cl(1319,"p"),qx(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Cl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),qx(1325," status"),Hl(1326,"br"),og()()(),Cl(1327,"td",18)(1328,"code",40),qx(1329,"'positive' "),og(),Cl(1330,"code",41),qx(1331," 'negative' "),og(),Cl(1332,"code",42),qx(1333," 'warning' "),og(),Cl(1334,"code",43),qx(1335," 'disabled'"),og()(),Cl(1336,"td",21)(1337,"em")(1338,"strong"),qx(1339,"(opcional)"),og()(),Cl(1340,"p"),qx(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),og(),Cl(1342,"ul")(1343,"li")(1344,"code"),qx(1345,"positive"),og(),qx(1346,": Define a cor do "),Cl(1347,"code"),qx(1348,"status"),og(),qx(1349," com a cor de feedback positivo."),og(),Cl(1350,"li")(1351,"code"),qx(1352,"negative"),og(),qx(1353,": Define a cor do "),Cl(1354,"code"),qx(1355,"status"),og(),qx(1356," com a cor de feedback negative."),og(),Cl(1357,"li")(1358,"code"),qx(1359,"warning"),og(),qx(1360,": Define a cor do "),Cl(1361,"code"),qx(1362,"status"),og(),qx(1363," com a cor de feedback warning."),og(),Cl(1364,"li")(1365,"code"),qx(1366,"disabled"),og(),qx(1367,": Define a cor do "),Cl(1368,"code"),qx(1369,"status"),og(),qx(1370," com a cor de feedback disabled"),og()()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-header-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ge,xe,fe,Ce],encapsulation:2})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Qe),bL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,Ae]})}return a})();export{ft as DocPoHeaderModule};