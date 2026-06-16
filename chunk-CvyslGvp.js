import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,cd as $3,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&Ul(0,"po-page-detail",0);},dependencies:[$3],encapsulation:2,changeDetection:1})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Detail Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-detail-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ue,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return a})();var oe=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=lx();wl(0,"po-page-detail",4),ut("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),wl(1,"div",5),Ul(2,"po-info",6),ng(),Ul(3,"po-divider"),wl(4,"form",null,0)(6,"po-input",7),pw("ngModelChange",function(m){return Qy(s),$x(n.title,m)||(n.title=m),Jy(m)}),ng(),$0(),wl(7,"po-input",8),pw("ngModelChange",function(m){return Qy(s),$x(n.subtitle,m)||(n.subtitle=m),Jy(m)}),ng(),$0(),wl(8,"po-radio-group",9),pw("ngModelChange",function(m){return Qy(s),$x(n.componentsSize,m)||(n.componentsSize=m),Jy(m)}),ng(),$0(),Ul(9,"po-divider"),wl(10,"form",null,1)(12,"div",5)(13,"po-input",10),pw("ngModelChange",function(m){return Qy(s),$x(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Jy(m)}),ng(),$0(),ng()(),wl(14,"form",null,2)(16,"div",5)(17,"po-input",11),pw("ngModelChange",function(m){return Qy(s),$x(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Jy(m)}),ng(),$0(),wl(18,"po-input",12),pw("ngModelChange",function(m){return Qy(s),$x(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Jy(m)}),ng(),$0(),ng(),wl(19,"div",5)(20,"po-button",13),ut("p-click",function(){return n.addBreadcrumbItem()}),ng()()(),Ul(21,"po-divider"),wl(22,"form",null,3)(24,"div",5)(25,"po-input",14),pw("ngModelChange",function(m){return Qy(s),$x(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Jy(m)}),ng(),$0(),wl(26,"po-input",15),pw("ngModelChange",function(m){return Qy(s),$x(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Jy(m)}),ng(),$0(),ng(),wl(27,"div",5)(28,"po-button",16),ut("p-click",function(){return n.addBreadcrumbParam()}),ng()()(),wl(29,"div",5)(30,"po-input",17),pw("ngModelChange",function(m){return Qy(s),$x(n.literals,m)||(n.literals=m),Jy(m)}),ut("p-change",function(){return n.changeLiterals()}),ng(),$0(),ng(),wl(31,"div",5)(32,"po-button",18),ut("p-click",function(){return n.restore()}),ng()()()();}if(l&2){let s=_x(15),c=_x(23);YE("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Pp(2),YE("p-value",n.action),Pp(4),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.subtitle),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0(),Pp(5),hw("ngModel",n.breadcrumb.favorite),G0(),Pp(4),hw("ngModel",n.breadcrumbItem.label),G0(),Pp(),hw("ngModel",n.breadcrumbItem.link),G0(),Pp(2),YE("p-disabled",s.invalid),Pp(5),hw("ngModel",n.breadcrumbParams.property),G0(),Pp(),hw("ngModel",n.breadcrumbParams.value),G0(),Pp(2),YE("p-disabled",c.invalid),Pp(2),hw("ngModel",n.literals),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,ga,Vp,$3],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Detail Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-detail
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-detail-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,he,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,oe],encapsulation:2})}return a})();var re=(()=>{class a{router=f(Cn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(wl(0,"po-page-detail",0),ut("p-edit",function(){return n.edit()}),wl(1,"div",1),Ul(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"div",1),Ul(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),ng(),Ul(10,"po-divider"),wl(11,"div",1),Ul(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),ng(),Ul(15,"po-divider"),wl(16,"div",1),Ul(17,"po-info",11)(18,"po-info",12),ng()()),l&2&&(YE("p-breadcrumb",n.breadcrumb),Pp(2),YE("p-value",n.userId),Pp(),YE("p-value",n.email),Pp(),YE("p-value",n.name),Pp(3),YE("p-value",n.nickname),Pp(),YE("p-value",n.birthDate),Pp(),YE("p-value",n.genre),Pp(3),YE("p-value",n.nationality),Pp(),YE("p-value",n.placeOfBirth),Pp(),YE("p-value",n.graduation),Pp(3),YE("p-value",n.fathersName),Pp(),YE("p-value",n.mothersName));},dependencies:[di,Vp,$3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Detail - User"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-detail
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-detail-user"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),wl(7,"code"),Ux(8,"po-page-default"),ng(),Ux(9,", "),wl(10,"code"),Ux(11,"po-page-detail"),ng(),Ux(12,`,
`),wl(13,"code"),Ux(14,"po-page-edit"),ng(),Ux(15,", "),wl(16,"code"),Ux(17,"po-page-list"),ng(),Ux(18," e "),wl(19,"code"),Ux(20,"po-page-slide"),ng(),Ux(21,"."),ng()(),wl(22,"h3",3),Ux(23,"Componente"),ng(),wl(24,"h4",4)(25,"code",5),Ux(26,"PoPageDetailComponent"),ng()(),wl(27,"div",2)(28,"p"),Ux(29,"O componente "),wl(30,"strong"),Ux(31,"po-page-detail"),ng(),Ux(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),ng(),wl(33,"h4"),Ux(34,"Tokens customiz\xE1veis"),ng(),wl(35,"blockquote")(36,"p"),Ux(37,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(38,"a",6),Ux(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(40,"."),ng()(),wl(41,"table")(42,"thead")(43,"tr")(44,"th"),Ux(45,"Propriedade"),ng(),wl(46,"th"),Ux(47,"Descri\xE7\xE3o"),ng(),wl(48,"th"),Ux(49,"Valor Padr\xE3o"),ng()()(),wl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Ux(54,"Header"),ng()(),Ul(55,"td")(56,"td"),ng(),wl(57,"tr")(58,"td")(59,"code"),Ux(60,"--padding"),ng()(),wl(61,"td"),Ux(62,"Espa\xE7amento do header"),ng(),wl(63,"td")(64,"code"),Ux(65,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(66,"tr")(67,"td")(68,"code"),Ux(69,"--gap"),ng()(),wl(70,"td"),Ux(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(72,"td")(73,"code"),Ux(74,"var(--spacing-md)"),ng()()(),wl(75,"tr")(76,"td")(77,"code"),Ux(78,"--gap-actions"),ng()(),wl(79,"td"),Ux(80,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(81,"td")(82,"code"),Ux(83,"var(--spacing-xs)"),ng()()(),wl(84,"tr")(85,"td")(86,"code"),Ux(87,"--font-family"),ng()(),wl(88,"td"),Ux(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(90,"td")(91,"code"),Ux(92,"var(--font-family-theme)"),ng()()(),wl(93,"tr")(94,"td")(95,"strong"),Ux(96,"Content"),ng()(),Ul(97,"td")(98,"td"),ng(),wl(99,"tr")(100,"td")(101,"code"),Ux(102,"--padding-content"),ng()(),wl(103,"td"),Ux(104,"Espa\xE7amento do conte\xFAdo"),ng(),wl(105,"td")(106,"code"),Ux(107,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(108,"div",7)(109,"h4",8),Ux(110,"Seletor"),ng(),wl(111,"pre",9),Ux(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),ng()(),wl(113,"h4",10),Ux(114,"Propriedades"),ng(),wl(115,"table",11)(116,"tr",12)(117,"th",13),Ux(118,"Nome"),ng(),wl(119,"th",13),Ux(120,"Tipo"),ng(),wl(121,"th",13),Ux(122,"Padr\xE3o"),ng(),wl(123,"th",13),Ux(124,"Descri\xE7\xE3o"),ng()(),wl(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),Ux(129," (p-back)"),Ul(130,"br"),ng()()(),wl(131,"td",18)(132,"code",19),Ux(133,"EventEmitter"),ng()(),wl(134,"td",20),Ux(135,"-"),ng(),wl(136,"td",21)(137,"p"),Ux(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),ng(),wl(139,"pre")(140,"code"),Ux(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),ng()(),wl(142,"blockquote")(143,"p"),Ux(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),Ux(149," p-breadcrumb"),Ul(150,"br"),ng()()(),wl(151,"td",18)(152,"code",24),Ux(153,"PoBreadcrumb"),ng()(),wl(154,"td",20),Ux(155,"-"),ng(),wl(156,"td",21)(157,"p"),Ux(158,"Objeto com propriedades do breadcrumb."),ng()()(),wl(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),Ux(163," p-components-size"),Ul(164,"br"),ng()()(),wl(165,"td",18)(166,"code",25),Ux(167,"string"),ng()(),wl(168,"td",20)(169,"p")(170,"code"),Ux(171,"medium"),ng()()(),wl(172,"td",21)(173,"em")(174,"strong"),Ux(175,"(opcional)"),ng()(),wl(176,"p"),Ux(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(178,"ul")(179,"li")(180,"code"),Ux(181,"small"),ng(),Ux(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(183,"li")(184,"code"),Ux(185,"medium"),ng(),Ux(186,": aplica a medida medium de cada componente."),ng()(),wl(187,"blockquote")(188,"p"),Ux(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(190,"code"),Ux(191,"medium"),ng(),Ux(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(193,"a",26),Ux(194,"po-theme"),ng(),Ux(195,"."),ng()()()(),wl(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),Ux(200," (p-edit)"),Ul(201,"br"),ng()()(),wl(202,"td",18)(203,"code",19),Ux(204,"EventEmitter"),ng()(),wl(205,"td",20),Ux(206,"-"),ng(),wl(207,"td",21)(208,"p"),Ux(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),ng(),wl(210,"pre")(211,"code"),Ux(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),ng()(),wl(213,"blockquote")(214,"p"),Ux(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),Ux(220," p-literals"),Ul(221,"br"),ng()()(),wl(222,"td",18)(223,"code",27),Ux(224,"PoPageDetailLiterals"),ng()(),wl(225,"td",20),Ux(226,"-"),ng(),wl(227,"td",21)(228,"em")(229,"strong"),Ux(230,"(opcional)"),ng()(),wl(231,"p"),Ux(232,"Objeto com as literais usadas no "),wl(233,"code"),Ux(234,"po-page-detail"),ng(),Ux(235,"."),ng(),wl(236,"p"),Ux(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(238,"pre")(239,"code"),Ux(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),ng()(),wl(241,"p"),Ux(242,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(243,"pre")(244,"code"),Ux(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),ng()(),wl(246,"p"),Ux(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(248,"pre")(249,"code"),Ux(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),ng()(),wl(251,"blockquote")(252,"p"),Ux(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(254,"a",28)(255,"code"),Ux(256,"PoI18nService"),ng()(),Ux(257," ou do browser."),ng()()()(),wl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Ux(262," (p-remove)"),Ul(263,"br"),ng()()(),wl(264,"td",18)(265,"code",19),Ux(266,"EventEmitter"),ng()(),wl(267,"td",20),Ux(268,"-"),ng(),wl(269,"td",21)(270,"p"),Ux(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),ng(),wl(272,"pre")(273,"code"),Ux(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),ng()(),wl(275,"blockquote")(276,"p"),Ux(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),Ux(282," p-subtitle"),Ul(283,"br"),ng()()(),wl(284,"td",18)(285,"code",25),Ux(286,"string"),ng()(),wl(287,"td",20),Ux(288,"-"),ng(),wl(289,"td",21)(290,"em")(291,"strong"),Ux(292,"(opcional)"),ng()(),wl(293,"p"),Ux(294,"Subtitulo do Header da p\xE1gina."),ng(),wl(295,"p"),Ux(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(297,"code"),Ux(298,"<b>"),ng(),Ux(299," (negrito), "),wl(300,"code"),Ux(301,"<strong>"),ng(),Ux(302," (negrito), "),wl(303,"code"),Ux(304,"<i>"),ng(),Ux(305," (it\xE1lico), "),wl(306,"code"),Ux(307,"<em>"),ng(),Ux(308,` (it\xE1lico) e
`),wl(309,"code"),Ux(310,"<u>"),ng(),Ux(311," (sublinhado)."),ng(),wl(312,"p"),Ux(313,"Exemplo:"),ng(),wl(314,"pre")(315,"code",29),Ux(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),ng()(),wl(317,"blockquote")(318,"p"),Ux(319,"Requer que "),wl(320,"code"),Ux(321,"p-title"),ng(),Ux(322," esteja definido."),ng()()()(),wl(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),Ux(327," p-title"),Ul(328,"br"),ng()()(),wl(329,"td",18)(330,"code",25),Ux(331,"string"),ng()(),wl(332,"td",20),Ux(333,"-"),ng(),wl(334,"td",21)(335,"p"),Ux(336,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(337,"h3"),Ux(338,"Interfaces"),ng(),wl(339,"h4",30)(340,"code",5),Ux(341,"PoBreadcrumbItem"),ng()(),wl(342,"div",2)(343,"p"),Ux(344,"Interface que define cada item do componente "),wl(345,"strong"),Ux(346,"po-breadcrumb"),ng(),Ux(347,"."),ng()(),wl(348,"h4",10),Ux(349,"Propriedades"),ng(),wl(350,"table",11)(351,"tr",12)(352,"th",13),Ux(353,"Nome"),ng(),wl(354,"th",13),Ux(355,"Tipo"),ng(),wl(356,"th",13),Ux(357,"Descri\xE7\xE3o"),ng()(),wl(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),Ux(362," action"),Ul(363,"br"),ng()()(),wl(364,"td",18)(365,"code",31),Ux(366,"Function"),ng()(),wl(367,"td",21)(368,"em")(369,"strong"),Ux(370,"(opcional)"),ng()(),wl(371,"p"),Ux(372,"A\xE7\xE3o executada ao clicar no item."),ng(),wl(373,"blockquote")(374,"p"),Ux(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),wl(376,"em"),Ux(377,"label"),ng(),Ux(378," do item como par\xE2metro para execu\xE7\xE3o."),ng()()()(),wl(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),Ux(383," label"),Ul(384,"br"),ng()()(),wl(385,"td",18)(386,"code",25),Ux(387,"string"),ng()(),wl(388,"td",21)(389,"p"),Ux(390,"R\xF3tulo do item."),ng()()(),wl(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),Ux(395," link"),Ul(396,"br"),ng()()(),wl(397,"td",18)(398,"code",25),Ux(399,"string"),ng()(),wl(400,"td",21)(401,"em")(402,"strong"),Ux(403,"(opcional)"),ng()(),wl(404,"p"),Ux(405,"Url do item."),ng(),wl(406,"blockquote")(407,"p"),Ux(408,"Caso o item tamb\xE9m contenha uma "),wl(409,"em"),Ux(410,"action"),ng(),Ux(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),wl(412,"em"),Ux(413,"link"),ng(),Ux(414,"."),ng()(),wl(415,"blockquote")(416,"p"),Ux(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),wl(418,"strong")(419,"a",32),Ux(420,"Veja um exemplo de como criar rotas aqui"),ng()(),Ux(421,"."),ng()(),wl(422,"blockquote")(423,"p"),Ux(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),wl(425,"code"),Ux(426,"p-favorite-service"),ng(),Ux(427," consiga favoritar ou desfavoritar."),ng()()()()(),wl(428,"h4",30)(429,"code",5),Ux(430,"PoBreadcrumb"),ng()(),wl(431,"div",2)(432,"p"),Ux(433,"Interface que define o "),wl(434,"code"),Ux(435,"po-breadcrumb"),ng(),Ux(436,"."),ng()(),wl(437,"h4",10),Ux(438,"Propriedades"),ng(),wl(439,"table",11)(440,"tr",12)(441,"th",13),Ux(442,"Nome"),ng(),wl(443,"th",13),Ux(444,"Tipo"),ng(),wl(445,"th",13),Ux(446,"Descri\xE7\xE3o"),ng()(),wl(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),Ux(451," favorite"),Ul(452,"br"),ng()()(),wl(453,"td",18)(454,"code",25),Ux(455,"string"),ng()(),wl(456,"td",21)(457,"em")(458,"strong"),Ux(459,"(opcional)"),ng()(),wl(460,"p"),Ux(461,"Permite definir uma URL para favoritar ou desfavoritar."),ng(),wl(462,"blockquote")(463,"p"),Ux(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),wl(465,"code"),Ux(466,"p-favorite-service"),ng(),Ux(467," do componente "),wl(468,"code"),Ux(469,"po-breadcrumb"),ng(),Ux(470,"."),ng()()()(),wl(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),Ux(475," items"),Ul(476,"br"),ng()()(),wl(477,"td",18)(478,"code",33),Ux(479,"Array<PoBreadcrumbItem>"),ng()(),wl(480,"td",21)(481,"p"),Ux(482,"Lista de itens do "),wl(483,"em"),Ux(484,"breadcrumb"),ng(),Ux(485,"."),ng(),wl(486,"p")(487,"strong"),Ux(488,"Exemplo:"),ng()(),wl(489,"pre")(490,"code"),Ux(491,`{ label: 'Po Portal', link: 'portal' }
`),ng()()()(),wl(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),Ux(496," params"),Ul(497,"br"),ng()()(),wl(498,"td",18)(499,"code",34),Ux(500,"object"),ng()(),wl(501,"td",21)(502,"em")(503,"strong"),Ux(504,"(opcional)"),ng()(),wl(505,"p"),Ux(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),ng()()()(),wl(507,"h4",30)(508,"code",5),Ux(509,"PoPageDetailLiterals"),ng()(),wl(510,"div",2)(511,"p"),Ux(512,"Interface para defini\xE7\xE3o das literais usadas no "),wl(513,"code"),Ux(514,"po-page-detail"),ng(),Ux(515,"."),ng()(),wl(516,"h4",10),Ux(517,"Propriedades"),ng(),wl(518,"table",11)(519,"tr",12)(520,"th",13),Ux(521,"Nome"),ng(),wl(522,"th",13),Ux(523,"Tipo"),ng(),wl(524,"th",13),Ux(525,"Descri\xE7\xE3o"),ng()(),wl(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),Ux(530," back"),Ul(531,"br"),ng()()(),wl(532,"td",18)(533,"code",25),Ux(534,"string"),ng()(),wl(535,"td",21)(536,"em")(537,"strong"),Ux(538,"(opcional)"),ng()(),wl(539,"p"),Ux(540,"Label da a\xE7\xE3o "),wl(541,"code"),Ux(542,"back"),ng(),Ux(543,"."),ng()()(),wl(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),Ux(548," edit"),Ul(549,"br"),ng()()(),wl(550,"td",18)(551,"code",25),Ux(552,"string"),ng()(),wl(553,"td",21)(554,"em")(555,"strong"),Ux(556,"(opcional)"),ng()(),wl(557,"p"),Ux(558,"Label da a\xE7\xE3o "),wl(559,"code"),Ux(560,"edit"),ng(),Ux(561,"."),ng()()(),wl(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),Ux(566," remove"),Ul(567,"br"),ng()()(),wl(568,"td",18)(569,"code",25),Ux(570,"string"),ng()(),wl(571,"td",21)(572,"em")(573,"strong"),Ux(574,"(opcional)"),ng()(),wl(575,"p"),Ux(576,"Label da a\xE7\xE3o "),wl(577,"code"),Ux(578,"remove"),ng(),Ux(579,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-page-detail-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ae,le,me,pe],encapsulation:2})}return a})();var De=[{path:"",component:de}],se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[vL.forChild(De),vL]})}return a})();var nt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[u5,se]})}return a})();export{nt as DocPoPageDetailModule};