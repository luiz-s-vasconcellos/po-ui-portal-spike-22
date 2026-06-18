import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,cJ as dNe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&Wl(0,"po-page-detail",0);},dependencies:[dNe],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Detail Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ee],encapsulation:2})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Ex();Sl(0,"po-page-detail",4),ht("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),Sl(1,"div",5),Wl(2,"po-info",6),sg(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"po-input",7),Ew("ngModelChange",function(m){return Xy(s),tN(n.title,m)||(n.title=m),Qy(m)}),sg(),JA(),Sl(7,"po-input",8),Ew("ngModelChange",function(m){return Xy(s),tN(n.subtitle,m)||(n.subtitle=m),Qy(m)}),sg(),JA(),Sl(8,"po-radio-group",9),Ew("ngModelChange",function(m){return Xy(s),tN(n.componentsSize,m)||(n.componentsSize=m),Qy(m)}),sg(),JA(),Wl(9,"po-divider"),Sl(10,"form",null,1)(12,"div",5)(13,"po-input",10),Ew("ngModelChange",function(m){return Xy(s),tN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Qy(m)}),sg(),JA(),sg()(),Sl(14,"form",null,2)(16,"div",5)(17,"po-input",11),Ew("ngModelChange",function(m){return Xy(s),tN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Qy(m)}),sg(),JA(),Sl(18,"po-input",12),Ew("ngModelChange",function(m){return Xy(s),tN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Qy(m)}),sg(),JA(),sg(),Sl(19,"div",5)(20,"po-button",13),ht("p-click",function(){return n.addBreadcrumbItem()}),sg()()(),Wl(21,"po-divider"),Sl(22,"form",null,3)(24,"div",5)(25,"po-input",14),Ew("ngModelChange",function(m){return Xy(s),tN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Qy(m)}),sg(),JA(),Sl(26,"po-input",15),Ew("ngModelChange",function(m){return Xy(s),tN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Qy(m)}),sg(),JA(),sg(),Sl(27,"div",5)(28,"po-button",16),ht("p-click",function(){return n.addBreadcrumbParam()}),sg()()(),Sl(29,"div",5)(30,"po-input",17),Ew("ngModelChange",function(m){return Xy(s),tN(n.literals,m)||(n.literals=m),Qy(m)}),ht("p-change",function(){return n.changeLiterals()}),sg(),JA(),sg(),Sl(31,"div",5)(32,"po-button",18),ht("p-click",function(){return n.restore()}),sg()()()();}if(l&2){let s=xx(15),c=xx(23);tw("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Vp(2),tw("p-value",n.action),Vp(4),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.subtitle),t0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),t0(),Vp(5),Dw("ngModel",n.breadcrumb.favorite),t0(),Vp(4),Dw("ngModel",n.breadcrumbItem.label),t0(),Vp(),Dw("ngModel",n.breadcrumbItem.link),t0(),Vp(2),tw("p-disabled",s.invalid),Vp(5),Dw("ngModel",n.breadcrumbParams.property),t0(),Vp(),Dw("ngModel",n.breadcrumbParams.value),t0(),Vp(2),tw("p-disabled",c.invalid),Vp(2),Dw("ngModel",n.literals),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,Qhe,dNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Detail Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbFavorite"
          [(ngModel)]="breadcrumb.favorite"
          p-clean
          p-help="https://po-sample-api.onrender.com/v1/favorite"
          p-label="Breadcrumb favorite"
        >
        </po-input>
      </div>
    </form>

    <form #formBreadcrumbItems="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbItemLabel"
          [(ngModel)]="breadcrumbItem.label"
          p-clean
          p-label="Breadcrumb item label"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbItemLink"
          [(ngModel)]="breadcrumbItem.link"
          p-clean
          p-label="Breadcrumb item link"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb item"
          [p-disabled]="formBreadcrumbItems.invalid"
          (p-click)="addBreadcrumbItem()"
        >
        </po-button>
      </div>
    </form>

    <po-divider />

    <form #formBreadcrumbParams="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbParamsProperty"
          [(ngModel)]="breadcrumbParams.property"
          p-clean
          p-label="Breadcrumb params property"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbParamsValue"
          [(ngModel)]="breadcrumbParams.value"
          p-clean
          p-label="Breadcrumb params value"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ne],encapsulation:2})}return a})();var oe=(()=>{class a{router=f(wn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(Sl(0,"po-page-detail",0),ht("p-edit",function(){return n.edit()}),Sl(1,"div",1),Wl(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"div",1),Wl(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),sg(),Wl(10,"po-divider"),Sl(11,"div",1),Wl(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),sg(),Wl(15,"po-divider"),Sl(16,"div",1),Wl(17,"po-info",11)(18,"po-info",12),sg()()),l&2&&(tw("p-breadcrumb",n.breadcrumb),Vp(2),tw("p-value",n.userId),Vp(),tw("p-value",n.email),Vp(),tw("p-value",n.name),Vp(3),tw("p-value",n.nickname),Vp(),tw("p-value",n.birthDate),Vp(),tw("p-value",n.genre),Vp(3),tw("p-value",n.nationality),Vp(),tw("p-value",n.placeOfBirth),Vp(),tw("p-value",n.graduation),Vp(3),tw("p-value",n.fathersName),Vp(),tw("p-value",n.mothersName));},dependencies:[mv,Qhe,dNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Detail - User"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-user"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),Jx(8,"po-page-default"),sg(),Jx(9,", "),Sl(10,"code"),Jx(11,"po-page-detail"),sg(),Jx(12,`,
`),Sl(13,"code"),Jx(14,"po-page-edit"),sg(),Jx(15,", "),Sl(16,"code"),Jx(17,"po-page-list"),sg(),Jx(18," e "),Sl(19,"code"),Jx(20,"po-page-slide"),sg(),Jx(21,"."),sg()(),Sl(22,"h3",3),Jx(23,"Componente"),sg(),Sl(24,"h4",4)(25,"code",5),Jx(26,"PoPageDetailComponent"),sg()(),Sl(27,"div",2)(28,"p"),Jx(29,"O componente "),Sl(30,"strong"),Jx(31,"po-page-detail"),sg(),Jx(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),sg(),Sl(33,"h4"),Jx(34,"Tokens customiz\xE1veis"),sg(),Sl(35,"blockquote")(36,"p"),Jx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(38,"a",6),Jx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(40,"."),sg()(),Sl(41,"table")(42,"thead")(43,"tr")(44,"th"),Jx(45,"Propriedade"),sg(),Sl(46,"th"),Jx(47,"Descri\xE7\xE3o"),sg(),Sl(48,"th"),Jx(49,"Valor Padr\xE3o"),sg()()(),Sl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Jx(54,"Header"),sg()(),Wl(55,"td")(56,"td"),sg(),Sl(57,"tr")(58,"td")(59,"code"),Jx(60,"--padding"),sg()(),Sl(61,"td"),Jx(62,"Espa\xE7amento do header"),sg(),Sl(63,"td")(64,"code"),Jx(65,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(66,"tr")(67,"td")(68,"code"),Jx(69,"--gap"),sg()(),Sl(70,"td"),Jx(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(72,"td")(73,"code"),Jx(74,"var(--spacing-md)"),sg()()(),Sl(75,"tr")(76,"td")(77,"code"),Jx(78,"--gap-actions"),sg()(),Sl(79,"td"),Jx(80,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(81,"td")(82,"code"),Jx(83,"var(--spacing-xs)"),sg()()(),Sl(84,"tr")(85,"td")(86,"code"),Jx(87,"--font-family"),sg()(),Sl(88,"td"),Jx(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(90,"td")(91,"code"),Jx(92,"var(--font-family-theme)"),sg()()(),Sl(93,"tr")(94,"td")(95,"strong"),Jx(96,"Content"),sg()(),Wl(97,"td")(98,"td"),sg(),Sl(99,"tr")(100,"td")(101,"code"),Jx(102,"--padding-content"),sg()(),Sl(103,"td"),Jx(104,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(105,"td")(106,"code"),Jx(107,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(108,"div",7)(109,"h4",8),Jx(110,"Seletor"),sg(),Sl(111,"pre",9),Jx(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),sg()(),Sl(113,"h4",10),Jx(114,"Propriedades"),sg(),Sl(115,"table",11)(116,"tr",12)(117,"th",13),Jx(118,"Nome"),sg(),Sl(119,"th",13),Jx(120,"Tipo"),sg(),Sl(121,"th",13),Jx(122,"Padr\xE3o"),sg(),Sl(123,"th",13),Jx(124,"Descri\xE7\xE3o"),sg()(),Sl(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),Jx(129," (p-back)"),Wl(130,"br"),sg()()(),Sl(131,"td",18)(132,"code",19),Jx(133,"EventEmitter"),sg()(),Sl(134,"td",20),Jx(135,"-"),sg(),Sl(136,"td",21)(137,"p"),Jx(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),sg(),Sl(139,"pre")(140,"code"),Jx(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),sg()(),Sl(142,"blockquote")(143,"p"),Jx(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),Jx(149," p-breadcrumb"),Wl(150,"br"),sg()()(),Sl(151,"td",18)(152,"code",24),Jx(153,"PoBreadcrumb"),sg()(),Sl(154,"td",20),Jx(155,"-"),sg(),Sl(156,"td",21)(157,"p"),Jx(158,"Objeto com propriedades do breadcrumb."),sg()()(),Sl(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),Jx(163," p-components-size"),Wl(164,"br"),sg()()(),Sl(165,"td",18)(166,"code",25),Jx(167,"string"),sg()(),Sl(168,"td",20)(169,"p")(170,"code"),Jx(171,"medium"),sg()()(),Sl(172,"td",21)(173,"em")(174,"strong"),Jx(175,"(opcional)"),sg()(),Sl(176,"p"),Jx(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(178,"ul")(179,"li")(180,"code"),Jx(181,"small"),sg(),Jx(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(183,"li")(184,"code"),Jx(185,"medium"),sg(),Jx(186,": aplica a medida medium de cada componente."),sg()(),Sl(187,"blockquote")(188,"p"),Jx(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(190,"code"),Jx(191,"medium"),sg(),Jx(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(193,"a",26),Jx(194,"po-theme"),sg(),Jx(195,"."),sg()()()(),Sl(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),Jx(200," (p-edit)"),Wl(201,"br"),sg()()(),Sl(202,"td",18)(203,"code",19),Jx(204,"EventEmitter"),sg()(),Sl(205,"td",20),Jx(206,"-"),sg(),Sl(207,"td",21)(208,"p"),Jx(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),sg(),Sl(210,"pre")(211,"code"),Jx(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),sg()(),Sl(213,"blockquote")(214,"p"),Jx(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),Jx(220," p-literals"),Wl(221,"br"),sg()()(),Sl(222,"td",18)(223,"code",27),Jx(224,"PoPageDetailLiterals"),sg()(),Sl(225,"td",20),Jx(226,"-"),sg(),Sl(227,"td",21)(228,"em")(229,"strong"),Jx(230,"(opcional)"),sg()(),Sl(231,"p"),Jx(232,"Objeto com as literais usadas no "),Sl(233,"code"),Jx(234,"po-page-detail"),sg(),Jx(235,"."),sg(),Sl(236,"p"),Jx(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(238,"pre")(239,"code"),Jx(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),sg()(),Sl(241,"p"),Jx(242,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(243,"pre")(244,"code"),Jx(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),sg()(),Sl(246,"p"),Jx(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(248,"pre")(249,"code"),Jx(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),sg()(),Sl(251,"blockquote")(252,"p"),Jx(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(254,"a",28)(255,"code"),Jx(256,"PoI18nService"),sg()(),Jx(257," ou do browser."),sg()()()(),Sl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Jx(262," (p-remove)"),Wl(263,"br"),sg()()(),Sl(264,"td",18)(265,"code",19),Jx(266,"EventEmitter"),sg()(),Sl(267,"td",20),Jx(268,"-"),sg(),Sl(269,"td",21)(270,"p"),Jx(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),sg(),Sl(272,"pre")(273,"code"),Jx(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),sg()(),Sl(275,"blockquote")(276,"p"),Jx(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),Jx(282," p-subtitle"),Wl(283,"br"),sg()()(),Sl(284,"td",18)(285,"code",25),Jx(286,"string"),sg()(),Sl(287,"td",20),Jx(288,"-"),sg(),Sl(289,"td",21)(290,"em")(291,"strong"),Jx(292,"(opcional)"),sg()(),Sl(293,"p"),Jx(294,"Subtitulo do Header da p\xE1gina."),sg(),Sl(295,"p"),Jx(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(297,"code"),Jx(298,"<b>"),sg(),Jx(299," (negrito), "),Sl(300,"code"),Jx(301,"<strong>"),sg(),Jx(302," (negrito), "),Sl(303,"code"),Jx(304,"<i>"),sg(),Jx(305," (it\xE1lico), "),Sl(306,"code"),Jx(307,"<em>"),sg(),Jx(308,` (it\xE1lico) e
`),Sl(309,"code"),Jx(310,"<u>"),sg(),Jx(311," (sublinhado)."),sg(),Sl(312,"p"),Jx(313,"Exemplo:"),sg(),Sl(314,"pre")(315,"code",29),Jx(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),sg()(),Sl(317,"blockquote")(318,"p"),Jx(319,"Requer que "),Sl(320,"code"),Jx(321,"p-title"),sg(),Jx(322," esteja definido."),sg()()()(),Sl(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),Jx(327," p-title"),Wl(328,"br"),sg()()(),Sl(329,"td",18)(330,"code",25),Jx(331,"string"),sg()(),Sl(332,"td",20),Jx(333,"-"),sg(),Sl(334,"td",21)(335,"p"),Jx(336,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(337,"h3"),Jx(338,"Interfaces"),sg(),Sl(339,"h4",30)(340,"code",5),Jx(341,"PoBreadcrumbItem"),sg()(),Sl(342,"div",2)(343,"p"),Jx(344,"Interface que define cada item do componente "),Sl(345,"strong"),Jx(346,"po-breadcrumb"),sg(),Jx(347,"."),sg()(),Sl(348,"h4",10),Jx(349,"Propriedades"),sg(),Sl(350,"table",11)(351,"tr",12)(352,"th",13),Jx(353,"Nome"),sg(),Sl(354,"th",13),Jx(355,"Tipo"),sg(),Sl(356,"th",13),Jx(357,"Descri\xE7\xE3o"),sg()(),Sl(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),Jx(362," action"),Wl(363,"br"),sg()()(),Sl(364,"td",18)(365,"code",31),Jx(366,"Function"),sg()(),Sl(367,"td",21)(368,"em")(369,"strong"),Jx(370,"(opcional)"),sg()(),Sl(371,"p"),Jx(372,"A\xE7\xE3o executada ao clicar no item."),sg(),Sl(373,"blockquote")(374,"p"),Jx(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(376,"em"),Jx(377,"label"),sg(),Jx(378," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Sl(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),Jx(383," label"),Wl(384,"br"),sg()()(),Sl(385,"td",18)(386,"code",25),Jx(387,"string"),sg()(),Sl(388,"td",21)(389,"p"),Jx(390,"R\xF3tulo do item."),sg()()(),Sl(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),Jx(395," link"),Wl(396,"br"),sg()()(),Sl(397,"td",18)(398,"code",25),Jx(399,"string"),sg()(),Sl(400,"td",21)(401,"em")(402,"strong"),Jx(403,"(opcional)"),sg()(),Sl(404,"p"),Jx(405,"Url do item."),sg(),Sl(406,"blockquote")(407,"p"),Jx(408,"Caso o item tamb\xE9m contenha uma "),Sl(409,"em"),Jx(410,"action"),sg(),Jx(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(412,"em"),Jx(413,"link"),sg(),Jx(414,"."),sg()(),Sl(415,"blockquote")(416,"p"),Jx(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(418,"strong")(419,"a",32),Jx(420,"Veja um exemplo de como criar rotas aqui"),sg()(),Jx(421,"."),sg()(),Sl(422,"blockquote")(423,"p"),Jx(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(425,"code"),Jx(426,"p-favorite-service"),sg(),Jx(427," consiga favoritar ou desfavoritar."),sg()()()()(),Sl(428,"h4",30)(429,"code",5),Jx(430,"PoBreadcrumb"),sg()(),Sl(431,"div",2)(432,"p"),Jx(433,"Interface que define o "),Sl(434,"code"),Jx(435,"po-breadcrumb"),sg(),Jx(436,"."),sg()(),Sl(437,"h4",10),Jx(438,"Propriedades"),sg(),Sl(439,"table",11)(440,"tr",12)(441,"th",13),Jx(442,"Nome"),sg(),Sl(443,"th",13),Jx(444,"Tipo"),sg(),Sl(445,"th",13),Jx(446,"Descri\xE7\xE3o"),sg()(),Sl(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),Jx(451," favorite"),Wl(452,"br"),sg()()(),Sl(453,"td",18)(454,"code",25),Jx(455,"string"),sg()(),Sl(456,"td",21)(457,"em")(458,"strong"),Jx(459,"(opcional)"),sg()(),Sl(460,"p"),Jx(461,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Sl(462,"blockquote")(463,"p"),Jx(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(465,"code"),Jx(466,"p-favorite-service"),sg(),Jx(467," do componente "),Sl(468,"code"),Jx(469,"po-breadcrumb"),sg(),Jx(470,"."),sg()()()(),Sl(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),Jx(475," items"),Wl(476,"br"),sg()()(),Sl(477,"td",18)(478,"code",33),Jx(479,"Array<PoBreadcrumbItem>"),sg()(),Sl(480,"td",21)(481,"p"),Jx(482,"Lista de itens do "),Sl(483,"em"),Jx(484,"breadcrumb"),sg(),Jx(485,"."),sg(),Sl(486,"p")(487,"strong"),Jx(488,"Exemplo:"),sg()(),Sl(489,"pre")(490,"code"),Jx(491,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Sl(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),Jx(496," params"),Wl(497,"br"),sg()()(),Sl(498,"td",18)(499,"code",34),Jx(500,"object"),sg()(),Sl(501,"td",21)(502,"em")(503,"strong"),Jx(504,"(opcional)"),sg()(),Sl(505,"p"),Jx(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Sl(507,"h4",30)(508,"code",5),Jx(509,"PoPageDetailLiterals"),sg()(),Sl(510,"div",2)(511,"p"),Jx(512,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(513,"code"),Jx(514,"po-page-detail"),sg(),Jx(515,"."),sg()(),Sl(516,"h4",10),Jx(517,"Propriedades"),sg(),Sl(518,"table",11)(519,"tr",12)(520,"th",13),Jx(521,"Nome"),sg(),Sl(522,"th",13),Jx(523,"Tipo"),sg(),Sl(524,"th",13),Jx(525,"Descri\xE7\xE3o"),sg()(),Sl(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),Jx(530," back"),Wl(531,"br"),sg()()(),Sl(532,"td",18)(533,"code",25),Jx(534,"string"),sg()(),Sl(535,"td",21)(536,"em")(537,"strong"),Jx(538,"(opcional)"),sg()(),Sl(539,"p"),Jx(540,"Label da a\xE7\xE3o "),Sl(541,"code"),Jx(542,"back"),sg(),Jx(543,"."),sg()()(),Sl(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),Jx(548," edit"),Wl(549,"br"),sg()()(),Sl(550,"td",18)(551,"code",25),Jx(552,"string"),sg()(),Sl(553,"td",21)(554,"em")(555,"strong"),Jx(556,"(opcional)"),sg()(),Sl(557,"p"),Jx(558,"Label da a\xE7\xE3o "),Sl(559,"code"),Jx(560,"edit"),sg(),Jx(561,"."),sg()()(),Sl(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),Jx(566," remove"),Wl(567,"br"),sg()()(),Sl(568,"td",18)(569,"code",25),Jx(570,"string"),sg()(),Sl(571,"td",21)(572,"em")(573,"strong"),Jx(574,"(opcional)"),sg()(),Sl(575,"p"),Jx(576,"Label da a\xE7\xE3o "),Sl(577,"code"),Jx(578,"remove"),sg(),Jx(579,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-detail-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ie,ae,le,re],encapsulation:2})}return a})();var fe=[{path:"",component:me}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(fe),pL]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,pe]})}return a})();export{Qe as DocPoPageDetailModule};