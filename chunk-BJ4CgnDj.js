import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,cJ as sNe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&Gl(0,"po-page-detail",0);},dependencies:[sNe],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Detail Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-detail-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,se,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ee],encapsulation:2})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Cx();Tl(0,"po-page-detail",4),ht("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),Tl(1,"div",5),Gl(2,"po-info",6),sg(),Gl(3,"po-divider"),Tl(4,"form",null,0)(6,"po-input",7),Ew("ngModelChange",function(m){return Ky(s),rN(n.title,m)||(n.title=m),Xy(m)}),sg(),t0(),Tl(7,"po-input",8),Ew("ngModelChange",function(m){return Ky(s),rN(n.subtitle,m)||(n.subtitle=m),Xy(m)}),sg(),t0(),Tl(8,"po-radio-group",9),Ew("ngModelChange",function(m){return Ky(s),rN(n.componentsSize,m)||(n.componentsSize=m),Xy(m)}),sg(),t0(),Gl(9,"po-divider"),Tl(10,"form",null,1)(12,"div",5)(13,"po-input",10),Ew("ngModelChange",function(m){return Ky(s),rN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Xy(m)}),sg(),t0(),sg()(),Tl(14,"form",null,2)(16,"div",5)(17,"po-input",11),Ew("ngModelChange",function(m){return Ky(s),rN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Xy(m)}),sg(),t0(),Tl(18,"po-input",12),Ew("ngModelChange",function(m){return Ky(s),rN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Xy(m)}),sg(),t0(),sg(),Tl(19,"div",5)(20,"po-button",13),ht("p-click",function(){return n.addBreadcrumbItem()}),sg()()(),Gl(21,"po-divider"),Tl(22,"form",null,3)(24,"div",5)(25,"po-input",14),Ew("ngModelChange",function(m){return Ky(s),rN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Xy(m)}),sg(),t0(),Tl(26,"po-input",15),Ew("ngModelChange",function(m){return Ky(s),rN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Xy(m)}),sg(),t0(),sg(),Tl(27,"div",5)(28,"po-button",16),ht("p-click",function(){return n.addBreadcrumbParam()}),sg()()(),Tl(29,"div",5)(30,"po-input",17),Ew("ngModelChange",function(m){return Ky(s),rN(n.literals,m)||(n.literals=m),Xy(m)}),ht("p-change",function(){return n.changeLiterals()}),sg(),t0(),sg(),Tl(31,"div",5)(32,"po-button",18),ht("p-click",function(){return n.restore()}),sg()()()();}if(l&2){let s=Ox(15),c=Ox(23);tw("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Vp(2),tw("p-value",n.action),Vp(4),Dw("ngModel",n.title),r0(),Vp(),Dw("ngModel",n.subtitle),r0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),r0(),Vp(5),Dw("ngModel",n.breadcrumb.favorite),r0(),Vp(4),Dw("ngModel",n.breadcrumbItem.label),r0(),Vp(),Dw("ngModel",n.breadcrumbItem.link),r0(),Vp(2),tw("p-disabled",s.invalid),Vp(5),Dw("ngModel",n.breadcrumbParams.property),r0(),Vp(),Dw("ngModel",n.breadcrumbParams.value),r0(),Vp(2),tw("p-disabled",c.invalid),Vp(2),Dw("ngModel",n.literals),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Sde,$he,sNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Detail Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-detail
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-detail-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,be,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ne],encapsulation:2})}return a})();var oe=(()=>{class a{router=f(wn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(Tl(0,"po-page-detail",0),ht("p-edit",function(){return n.edit()}),Tl(1,"div",1),Gl(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"div",1),Gl(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),sg(),Gl(10,"po-divider"),Tl(11,"div",1),Gl(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),sg(),Gl(15,"po-divider"),Tl(16,"div",1),Gl(17,"po-info",11)(18,"po-info",12),sg()()),l&2&&(tw("p-breadcrumb",n.breadcrumb),Vp(2),tw("p-value",n.userId),Vp(),tw("p-value",n.email),Vp(),tw("p-value",n.name),Vp(3),tw("p-value",n.nickname),Vp(),tw("p-value",n.birthDate),Vp(),tw("p-value",n.genre),Vp(3),tw("p-value",n.nationality),Vp(),tw("p-value",n.placeOfBirth),Vp(),tw("p-value",n.graduation),Vp(3),tw("p-value",n.fathersName),Vp(),tw("p-value",n.mothersName));},dependencies:[mv,$he,sNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Detail - User"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-detail
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-detail-user"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,oe],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Tl(7,"code"),tN(8,"po-page-default"),sg(),tN(9,", "),Tl(10,"code"),tN(11,"po-page-detail"),sg(),tN(12,`,
`),Tl(13,"code"),tN(14,"po-page-edit"),sg(),tN(15,", "),Tl(16,"code"),tN(17,"po-page-list"),sg(),tN(18," e "),Tl(19,"code"),tN(20,"po-page-slide"),sg(),tN(21,"."),sg()(),Tl(22,"h3",3),tN(23,"Componente"),sg(),Tl(24,"h4",4)(25,"code",5),tN(26,"PoPageDetailComponent"),sg()(),Tl(27,"div",2)(28,"p"),tN(29,"O componente "),Tl(30,"strong"),tN(31,"po-page-detail"),sg(),tN(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),sg(),Tl(33,"h4"),tN(34,"Tokens customiz\xE1veis"),sg(),Tl(35,"blockquote")(36,"p"),tN(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(38,"a",6),tN(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(40,"."),sg()(),Tl(41,"table")(42,"thead")(43,"tr")(44,"th"),tN(45,"Propriedade"),sg(),Tl(46,"th"),tN(47,"Descri\xE7\xE3o"),sg(),Tl(48,"th"),tN(49,"Valor Padr\xE3o"),sg()()(),Tl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),tN(54,"Header"),sg()(),Gl(55,"td")(56,"td"),sg(),Tl(57,"tr")(58,"td")(59,"code"),tN(60,"--padding"),sg()(),Tl(61,"td"),tN(62,"Espa\xE7amento do header"),sg(),Tl(63,"td")(64,"code"),tN(65,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(66,"tr")(67,"td")(68,"code"),tN(69,"--gap"),sg()(),Tl(70,"td"),tN(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(72,"td")(73,"code"),tN(74,"var(--spacing-md)"),sg()()(),Tl(75,"tr")(76,"td")(77,"code"),tN(78,"--gap-actions"),sg()(),Tl(79,"td"),tN(80,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(81,"td")(82,"code"),tN(83,"var(--spacing-xs)"),sg()()(),Tl(84,"tr")(85,"td")(86,"code"),tN(87,"--font-family"),sg()(),Tl(88,"td"),tN(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(90,"td")(91,"code"),tN(92,"var(--font-family-theme)"),sg()()(),Tl(93,"tr")(94,"td")(95,"strong"),tN(96,"Content"),sg()(),Gl(97,"td")(98,"td"),sg(),Tl(99,"tr")(100,"td")(101,"code"),tN(102,"--padding-content"),sg()(),Tl(103,"td"),tN(104,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(105,"td")(106,"code"),tN(107,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(108,"div",7)(109,"h4",8),tN(110,"Seletor"),sg(),Tl(111,"pre",9),tN(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),sg()(),Tl(113,"h4",10),tN(114,"Propriedades"),sg(),Tl(115,"table",11)(116,"tr",12)(117,"th",13),tN(118,"Nome"),sg(),Tl(119,"th",13),tN(120,"Tipo"),sg(),Tl(121,"th",13),tN(122,"Padr\xE3o"),sg(),Tl(123,"th",13),tN(124,"Descri\xE7\xE3o"),sg()(),Tl(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),tN(129," (p-back)"),Gl(130,"br"),sg()()(),Tl(131,"td",18)(132,"code",19),tN(133,"EventEmitter"),sg()(),Tl(134,"td",20),tN(135,"-"),sg(),Tl(136,"td",21)(137,"p"),tN(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),sg(),Tl(139,"pre")(140,"code"),tN(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),sg()(),Tl(142,"blockquote")(143,"p"),tN(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),tN(149," p-breadcrumb"),Gl(150,"br"),sg()()(),Tl(151,"td",18)(152,"code",24),tN(153,"PoBreadcrumb"),sg()(),Tl(154,"td",20),tN(155,"-"),sg(),Tl(156,"td",21)(157,"p"),tN(158,"Objeto com propriedades do breadcrumb."),sg()()(),Tl(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),tN(163," p-components-size"),Gl(164,"br"),sg()()(),Tl(165,"td",18)(166,"code",25),tN(167,"string"),sg()(),Tl(168,"td",20)(169,"p")(170,"code"),tN(171,"medium"),sg()()(),Tl(172,"td",21)(173,"em")(174,"strong"),tN(175,"(opcional)"),sg()(),Tl(176,"p"),tN(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(178,"ul")(179,"li")(180,"code"),tN(181,"small"),sg(),tN(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(183,"li")(184,"code"),tN(185,"medium"),sg(),tN(186,": aplica a medida medium de cada componente."),sg()(),Tl(187,"blockquote")(188,"p"),tN(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(190,"code"),tN(191,"medium"),sg(),tN(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(193,"a",26),tN(194,"po-theme"),sg(),tN(195,"."),sg()()()(),Tl(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),tN(200," (p-edit)"),Gl(201,"br"),sg()()(),Tl(202,"td",18)(203,"code",19),tN(204,"EventEmitter"),sg()(),Tl(205,"td",20),tN(206,"-"),sg(),Tl(207,"td",21)(208,"p"),tN(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),sg(),Tl(210,"pre")(211,"code"),tN(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),sg()(),Tl(213,"blockquote")(214,"p"),tN(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),tN(220," p-literals"),Gl(221,"br"),sg()()(),Tl(222,"td",18)(223,"code",27),tN(224,"PoPageDetailLiterals"),sg()(),Tl(225,"td",20),tN(226,"-"),sg(),Tl(227,"td",21)(228,"em")(229,"strong"),tN(230,"(opcional)"),sg()(),Tl(231,"p"),tN(232,"Objeto com as literais usadas no "),Tl(233,"code"),tN(234,"po-page-detail"),sg(),tN(235,"."),sg(),Tl(236,"p"),tN(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(238,"pre")(239,"code"),tN(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),sg()(),Tl(241,"p"),tN(242,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(243,"pre")(244,"code"),tN(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),sg()(),Tl(246,"p"),tN(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(248,"pre")(249,"code"),tN(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),sg()(),Tl(251,"blockquote")(252,"p"),tN(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(254,"a",28)(255,"code"),tN(256,"PoI18nService"),sg()(),tN(257," ou do browser."),sg()()()(),Tl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),tN(262," (p-remove)"),Gl(263,"br"),sg()()(),Tl(264,"td",18)(265,"code",19),tN(266,"EventEmitter"),sg()(),Tl(267,"td",20),tN(268,"-"),sg(),Tl(269,"td",21)(270,"p"),tN(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),sg(),Tl(272,"pre")(273,"code"),tN(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),sg()(),Tl(275,"blockquote")(276,"p"),tN(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),tN(282," p-subtitle"),Gl(283,"br"),sg()()(),Tl(284,"td",18)(285,"code",25),tN(286,"string"),sg()(),Tl(287,"td",20),tN(288,"-"),sg(),Tl(289,"td",21)(290,"em")(291,"strong"),tN(292,"(opcional)"),sg()(),Tl(293,"p"),tN(294,"Subtitulo do Header da p\xE1gina."),sg(),Tl(295,"p"),tN(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(297,"code"),tN(298,"<b>"),sg(),tN(299," (negrito), "),Tl(300,"code"),tN(301,"<strong>"),sg(),tN(302," (negrito), "),Tl(303,"code"),tN(304,"<i>"),sg(),tN(305," (it\xE1lico), "),Tl(306,"code"),tN(307,"<em>"),sg(),tN(308,` (it\xE1lico) e
`),Tl(309,"code"),tN(310,"<u>"),sg(),tN(311," (sublinhado)."),sg(),Tl(312,"p"),tN(313,"Exemplo:"),sg(),Tl(314,"pre")(315,"code",29),tN(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),sg()(),Tl(317,"blockquote")(318,"p"),tN(319,"Requer que "),Tl(320,"code"),tN(321,"p-title"),sg(),tN(322," esteja definido."),sg()()()(),Tl(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),tN(327," p-title"),Gl(328,"br"),sg()()(),Tl(329,"td",18)(330,"code",25),tN(331,"string"),sg()(),Tl(332,"td",20),tN(333,"-"),sg(),Tl(334,"td",21)(335,"p"),tN(336,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(337,"h3"),tN(338,"Interfaces"),sg(),Tl(339,"h4",30)(340,"code",5),tN(341,"PoBreadcrumbItem"),sg()(),Tl(342,"div",2)(343,"p"),tN(344,"Interface que define cada item do componente "),Tl(345,"strong"),tN(346,"po-breadcrumb"),sg(),tN(347,"."),sg()(),Tl(348,"h4",10),tN(349,"Propriedades"),sg(),Tl(350,"table",11)(351,"tr",12)(352,"th",13),tN(353,"Nome"),sg(),Tl(354,"th",13),tN(355,"Tipo"),sg(),Tl(356,"th",13),tN(357,"Descri\xE7\xE3o"),sg()(),Tl(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),tN(362," action"),Gl(363,"br"),sg()()(),Tl(364,"td",18)(365,"code",31),tN(366,"Function"),sg()(),Tl(367,"td",21)(368,"em")(369,"strong"),tN(370,"(opcional)"),sg()(),Tl(371,"p"),tN(372,"A\xE7\xE3o executada ao clicar no item."),sg(),Tl(373,"blockquote")(374,"p"),tN(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Tl(376,"em"),tN(377,"label"),sg(),tN(378," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Tl(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),tN(383," label"),Gl(384,"br"),sg()()(),Tl(385,"td",18)(386,"code",25),tN(387,"string"),sg()(),Tl(388,"td",21)(389,"p"),tN(390,"R\xF3tulo do item."),sg()()(),Tl(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),tN(395," link"),Gl(396,"br"),sg()()(),Tl(397,"td",18)(398,"code",25),tN(399,"string"),sg()(),Tl(400,"td",21)(401,"em")(402,"strong"),tN(403,"(opcional)"),sg()(),Tl(404,"p"),tN(405,"Url do item."),sg(),Tl(406,"blockquote")(407,"p"),tN(408,"Caso o item tamb\xE9m contenha uma "),Tl(409,"em"),tN(410,"action"),sg(),tN(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Tl(412,"em"),tN(413,"link"),sg(),tN(414,"."),sg()(),Tl(415,"blockquote")(416,"p"),tN(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(418,"strong")(419,"a",32),tN(420,"Veja um exemplo de como criar rotas aqui"),sg()(),tN(421,"."),sg()(),Tl(422,"blockquote")(423,"p"),tN(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Tl(425,"code"),tN(426,"p-favorite-service"),sg(),tN(427," consiga favoritar ou desfavoritar."),sg()()()()(),Tl(428,"h4",30)(429,"code",5),tN(430,"PoBreadcrumb"),sg()(),Tl(431,"div",2)(432,"p"),tN(433,"Interface que define o "),Tl(434,"code"),tN(435,"po-breadcrumb"),sg(),tN(436,"."),sg()(),Tl(437,"h4",10),tN(438,"Propriedades"),sg(),Tl(439,"table",11)(440,"tr",12)(441,"th",13),tN(442,"Nome"),sg(),Tl(443,"th",13),tN(444,"Tipo"),sg(),Tl(445,"th",13),tN(446,"Descri\xE7\xE3o"),sg()(),Tl(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),tN(451," favorite"),Gl(452,"br"),sg()()(),Tl(453,"td",18)(454,"code",25),tN(455,"string"),sg()(),Tl(456,"td",21)(457,"em")(458,"strong"),tN(459,"(opcional)"),sg()(),Tl(460,"p"),tN(461,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Tl(462,"blockquote")(463,"p"),tN(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),Tl(465,"code"),tN(466,"p-favorite-service"),sg(),tN(467," do componente "),Tl(468,"code"),tN(469,"po-breadcrumb"),sg(),tN(470,"."),sg()()()(),Tl(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),tN(475," items"),Gl(476,"br"),sg()()(),Tl(477,"td",18)(478,"code",33),tN(479,"Array<PoBreadcrumbItem>"),sg()(),Tl(480,"td",21)(481,"p"),tN(482,"Lista de itens do "),Tl(483,"em"),tN(484,"breadcrumb"),sg(),tN(485,"."),sg(),Tl(486,"p")(487,"strong"),tN(488,"Exemplo:"),sg()(),Tl(489,"pre")(490,"code"),tN(491,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Tl(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),tN(496," params"),Gl(497,"br"),sg()()(),Tl(498,"td",18)(499,"code",34),tN(500,"object"),sg()(),Tl(501,"td",21)(502,"em")(503,"strong"),tN(504,"(opcional)"),sg()(),Tl(505,"p"),tN(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Tl(507,"h4",30)(508,"code",5),tN(509,"PoPageDetailLiterals"),sg()(),Tl(510,"div",2)(511,"p"),tN(512,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(513,"code"),tN(514,"po-page-detail"),sg(),tN(515,"."),sg()(),Tl(516,"h4",10),tN(517,"Propriedades"),sg(),Tl(518,"table",11)(519,"tr",12)(520,"th",13),tN(521,"Nome"),sg(),Tl(522,"th",13),tN(523,"Tipo"),sg(),Tl(524,"th",13),tN(525,"Descri\xE7\xE3o"),sg()(),Tl(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),tN(530," back"),Gl(531,"br"),sg()()(),Tl(532,"td",18)(533,"code",25),tN(534,"string"),sg()(),Tl(535,"td",21)(536,"em")(537,"strong"),tN(538,"(opcional)"),sg()(),Tl(539,"p"),tN(540,"Label da a\xE7\xE3o "),Tl(541,"code"),tN(542,"back"),sg(),tN(543,"."),sg()()(),Tl(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),tN(548," edit"),Gl(549,"br"),sg()()(),Tl(550,"td",18)(551,"code",25),tN(552,"string"),sg()(),Tl(553,"td",21)(554,"em")(555,"strong"),tN(556,"(opcional)"),sg()(),Tl(557,"p"),tN(558,"Label da a\xE7\xE3o "),Tl(559,"code"),tN(560,"edit"),sg(),tN(561,"."),sg()()(),Tl(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),tN(566," remove"),Gl(567,"br"),sg()()(),Tl(568,"td",18)(569,"code",25),tN(570,"string"),sg()(),Tl(571,"td",21)(572,"em")(573,"strong"),tN(574,"(opcional)"),sg()(),Tl(575,"p"),tN(576,"Label da a\xE7\xE3o "),Tl(577,"code"),tN(578,"remove"),sg(),tN(579,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-page-detail-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ie,ae,le,re],encapsulation:2})}return a})();var fe=[{path:"",component:me}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(fe),vL]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,pe]})}return a})();export{Qe as DocPoPageDetailModule};