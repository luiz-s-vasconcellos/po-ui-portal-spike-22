import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,cO as TNe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&Hl(0,"po-page-detail",0);},dependencies:[TNe],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Detail Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-detail-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ee],encapsulation:2})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=gx();Cl(0,"po-page-detail",4),dt("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),Cl(1,"div",5),Hl(2,"po-info",6),og(),Hl(3,"po-divider"),Cl(4,"form",null,0)(6,"po-input",7),gw("ngModelChange",function(m){return Jy(s),Zx(n.title,m)||(n.title=m),e_(m)}),og(),Z0(),Cl(7,"po-input",8),gw("ngModelChange",function(m){return Jy(s),Zx(n.subtitle,m)||(n.subtitle=m),e_(m)}),og(),Z0(),Cl(8,"po-radio-group",9),gw("ngModelChange",function(m){return Jy(s),Zx(n.componentsSize,m)||(n.componentsSize=m),e_(m)}),og(),Z0(),Hl(9,"po-divider"),Cl(10,"form",null,1)(12,"div",5)(13,"po-input",10),gw("ngModelChange",function(m){return Jy(s),Zx(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),e_(m)}),og(),Z0(),og()(),Cl(14,"form",null,2)(16,"div",5)(17,"po-input",11),gw("ngModelChange",function(m){return Jy(s),Zx(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),e_(m)}),og(),Z0(),Cl(18,"po-input",12),gw("ngModelChange",function(m){return Jy(s),Zx(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),e_(m)}),og(),Z0(),og(),Cl(19,"div",5)(20,"po-button",13),dt("p-click",function(){return n.addBreadcrumbItem()}),og()()(),Hl(21,"po-divider"),Cl(22,"form",null,3)(24,"div",5)(25,"po-input",14),gw("ngModelChange",function(m){return Jy(s),Zx(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),e_(m)}),og(),Z0(),Cl(26,"po-input",15),gw("ngModelChange",function(m){return Jy(s),Zx(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),e_(m)}),og(),Z0(),og(),Cl(27,"div",5)(28,"po-button",16),dt("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Cl(29,"div",5)(30,"po-input",17),gw("ngModelChange",function(m){return Jy(s),Zx(n.literals,m)||(n.literals=m),e_(m)}),dt("p-change",function(){return n.changeLiterals()}),og(),Z0(),og(),Cl(31,"div",5)(32,"po-button",18),dt("p-click",function(){return n.restore()}),og()()()();}if(l&2){let s=Sx(15),c=Sx(23);ZE("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),ZE("p-value",n.action),Lp(4),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.subtitle),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0(),Lp(5),pw("ngModel",n.breadcrumb.favorite),X0(),Lp(4),pw("ngModel",n.breadcrumbItem.label),X0(),Lp(),pw("ngModel",n.breadcrumbItem.link),X0(),Lp(2),ZE("p-disabled",s.invalid),Lp(5),pw("ngModel",n.breadcrumbParams.property),X0(),Lp(),pw("ngModel",n.breadcrumbParams.value),X0(),Lp(2),ZE("p-disabled",c.invalid),Lp(2),pw("ngModel",n.literals),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,sme,TNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Detail Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-detail
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-detail-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,be,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return a})();var oe=(()=>{class a{router=f(Cn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(Cl(0,"po-page-detail",0),dt("p-edit",function(){return n.edit()}),Cl(1,"div",1),Hl(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"div",1),Hl(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),og(),Hl(10,"po-divider"),Cl(11,"div",1),Hl(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),og(),Hl(15,"po-divider"),Cl(16,"div",1),Hl(17,"po-info",11)(18,"po-info",12),og()()),l&2&&(ZE("p-breadcrumb",n.breadcrumb),Lp(2),ZE("p-value",n.userId),Lp(),ZE("p-value",n.email),Lp(),ZE("p-value",n.name),Lp(3),ZE("p-value",n.nickname),Lp(),ZE("p-value",n.birthDate),Lp(),ZE("p-value",n.genre),Lp(3),ZE("p-value",n.nationality),Lp(),ZE("p-value",n.placeOfBirth),Lp(),ZE("p-value",n.graduation),Lp(3),ZE("p-value",n.fathersName),Lp(),ZE("p-value",n.mothersName));},dependencies:[_v,sme,TNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Detail - User"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-detail
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-detail-user"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Cl(7,"code"),qx(8,"po-page-default"),og(),qx(9,", "),Cl(10,"code"),qx(11,"po-page-detail"),og(),qx(12,`,
`),Cl(13,"code"),qx(14,"po-page-edit"),og(),qx(15,", "),Cl(16,"code"),qx(17,"po-page-list"),og(),qx(18," e "),Cl(19,"code"),qx(20,"po-page-slide"),og(),qx(21,"."),og()(),Cl(22,"h3",3),qx(23,"Componente"),og(),Cl(24,"h4",4)(25,"code",5),qx(26,"PoPageDetailComponent"),og()(),Cl(27,"div",2)(28,"p"),qx(29,"O componente "),Cl(30,"strong"),qx(31,"po-page-detail"),og(),qx(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),og(),Cl(33,"h4"),qx(34,"Tokens customiz\xE1veis"),og(),Cl(35,"blockquote")(36,"p"),qx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(38,"a",6),qx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(40,"."),og()(),Cl(41,"table")(42,"thead")(43,"tr")(44,"th"),qx(45,"Propriedade"),og(),Cl(46,"th"),qx(47,"Descri\xE7\xE3o"),og(),Cl(48,"th"),qx(49,"Valor Padr\xE3o"),og()()(),Cl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),qx(54,"Header"),og()(),Hl(55,"td")(56,"td"),og(),Cl(57,"tr")(58,"td")(59,"code"),qx(60,"--padding"),og()(),Cl(61,"td"),qx(62,"Espa\xE7amento do header"),og(),Cl(63,"td")(64,"code"),qx(65,"var(--spacing-xs) var(--spacing-md)"),og()()(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--gap"),og()(),Cl(70,"td"),qx(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Cl(72,"td")(73,"code"),qx(74,"var(--spacing-md)"),og()()(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--gap-actions"),og()(),Cl(79,"td"),qx(80,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Cl(81,"td")(82,"code"),qx(83,"var(--spacing-xs)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--font-family"),og()(),Cl(88,"td"),qx(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--font-family-theme)"),og()()(),Cl(93,"tr")(94,"td")(95,"strong"),qx(96,"Content"),og()(),Hl(97,"td")(98,"td"),og(),Cl(99,"tr")(100,"td")(101,"code"),qx(102,"--padding-content"),og()(),Cl(103,"td"),qx(104,"Espa\xE7amento do conte\xFAdo"),og(),Cl(105,"td")(106,"code"),qx(107,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Cl(108,"div",7)(109,"h4",8),qx(110,"Seletor"),og(),Cl(111,"pre",9),qx(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),og()(),Cl(113,"h4",10),qx(114,"Propriedades"),og(),Cl(115,"table",11)(116,"tr",12)(117,"th",13),qx(118,"Nome"),og(),Cl(119,"th",13),qx(120,"Tipo"),og(),Cl(121,"th",13),qx(122,"Padr\xE3o"),og(),Cl(123,"th",13),qx(124,"Descri\xE7\xE3o"),og()(),Cl(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),qx(129," (p-back)"),Hl(130,"br"),og()()(),Cl(131,"td",18)(132,"code",19),qx(133,"EventEmitter"),og()(),Cl(134,"td",20),qx(135,"-"),og(),Cl(136,"td",21)(137,"p"),qx(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),og(),Cl(139,"pre")(140,"code"),qx(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),og()(),Cl(142,"blockquote")(143,"p"),qx(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),og()()()(),Cl(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),qx(149," p-breadcrumb"),Hl(150,"br"),og()()(),Cl(151,"td",18)(152,"code",24),qx(153,"PoBreadcrumb"),og()(),Cl(154,"td",20),qx(155,"-"),og(),Cl(156,"td",21)(157,"p"),qx(158,"Objeto com propriedades do breadcrumb."),og()()(),Cl(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),qx(163," p-components-size"),Hl(164,"br"),og()()(),Cl(165,"td",18)(166,"code",25),qx(167,"string"),og()(),Cl(168,"td",20)(169,"p")(170,"code"),qx(171,"medium"),og()()(),Cl(172,"td",21)(173,"em")(174,"strong"),qx(175,"(opcional)"),og()(),Cl(176,"p"),qx(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(178,"ul")(179,"li")(180,"code"),qx(181,"small"),og(),qx(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(183,"li")(184,"code"),qx(185,"medium"),og(),qx(186,": aplica a medida medium de cada componente."),og()(),Cl(187,"blockquote")(188,"p"),qx(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(190,"code"),qx(191,"medium"),og(),qx(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(193,"a",26),qx(194,"po-theme"),og(),qx(195,"."),og()()()(),Cl(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),qx(200," (p-edit)"),Hl(201,"br"),og()()(),Cl(202,"td",18)(203,"code",19),qx(204,"EventEmitter"),og()(),Cl(205,"td",20),qx(206,"-"),og(),Cl(207,"td",21)(208,"p"),qx(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),og(),Cl(210,"pre")(211,"code"),qx(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),og()(),Cl(213,"blockquote")(214,"p"),qx(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),og()()()(),Cl(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),qx(220," p-literals"),Hl(221,"br"),og()()(),Cl(222,"td",18)(223,"code",27),qx(224,"PoPageDetailLiterals"),og()(),Cl(225,"td",20),qx(226,"-"),og(),Cl(227,"td",21)(228,"em")(229,"strong"),qx(230,"(opcional)"),og()(),Cl(231,"p"),qx(232,"Objeto com as literais usadas no "),Cl(233,"code"),qx(234,"po-page-detail"),og(),qx(235,"."),og(),Cl(236,"p"),qx(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(238,"pre")(239,"code"),qx(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),og()(),Cl(241,"p"),qx(242,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(243,"pre")(244,"code"),qx(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),og()(),Cl(246,"p"),qx(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(248,"pre")(249,"code"),qx(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),og()(),Cl(251,"blockquote")(252,"p"),qx(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(254,"a",28)(255,"code"),qx(256,"PoI18nService"),og()(),qx(257," ou do browser."),og()()()(),Cl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),qx(262," (p-remove)"),Hl(263,"br"),og()()(),Cl(264,"td",18)(265,"code",19),qx(266,"EventEmitter"),og()(),Cl(267,"td",20),qx(268,"-"),og(),Cl(269,"td",21)(270,"p"),qx(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),og(),Cl(272,"pre")(273,"code"),qx(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),og()(),Cl(275,"blockquote")(276,"p"),qx(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),og()()()(),Cl(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),qx(282," p-subtitle"),Hl(283,"br"),og()()(),Cl(284,"td",18)(285,"code",25),qx(286,"string"),og()(),Cl(287,"td",20),qx(288,"-"),og(),Cl(289,"td",21)(290,"em")(291,"strong"),qx(292,"(opcional)"),og()(),Cl(293,"p"),qx(294,"Subtitulo do Header da p\xE1gina."),og(),Cl(295,"p"),qx(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Cl(297,"code"),qx(298,"<b>"),og(),qx(299," (negrito), "),Cl(300,"code"),qx(301,"<strong>"),og(),qx(302," (negrito), "),Cl(303,"code"),qx(304,"<i>"),og(),qx(305," (it\xE1lico), "),Cl(306,"code"),qx(307,"<em>"),og(),qx(308,` (it\xE1lico) e
`),Cl(309,"code"),qx(310,"<u>"),og(),qx(311," (sublinhado)."),og(),Cl(312,"p"),qx(313,"Exemplo:"),og(),Cl(314,"pre")(315,"code",29),qx(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),og()(),Cl(317,"blockquote")(318,"p"),qx(319,"Requer que "),Cl(320,"code"),qx(321,"p-title"),og(),qx(322," esteja definido."),og()()()(),Cl(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),qx(327," p-title"),Hl(328,"br"),og()()(),Cl(329,"td",18)(330,"code",25),qx(331,"string"),og()(),Cl(332,"td",20),qx(333,"-"),og(),Cl(334,"td",21)(335,"p"),qx(336,"T\xEDtulo da p\xE1gina."),og()()()(),Cl(337,"h3"),qx(338,"Interfaces"),og(),Cl(339,"h4",30)(340,"code",5),qx(341,"PoBreadcrumbItem"),og()(),Cl(342,"div",2)(343,"p"),qx(344,"Interface que define cada item do componente "),Cl(345,"strong"),qx(346,"po-breadcrumb"),og(),qx(347,"."),og()(),Cl(348,"h4",10),qx(349,"Propriedades"),og(),Cl(350,"table",11)(351,"tr",12)(352,"th",13),qx(353,"Nome"),og(),Cl(354,"th",13),qx(355,"Tipo"),og(),Cl(356,"th",13),qx(357,"Descri\xE7\xE3o"),og()(),Cl(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),qx(362," action"),Hl(363,"br"),og()()(),Cl(364,"td",18)(365,"code",31),qx(366,"Function"),og()(),Cl(367,"td",21)(368,"em")(369,"strong"),qx(370,"(opcional)"),og()(),Cl(371,"p"),qx(372,"A\xE7\xE3o executada ao clicar no item."),og(),Cl(373,"blockquote")(374,"p"),qx(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Cl(376,"em"),qx(377,"label"),og(),qx(378," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Cl(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),qx(383," label"),Hl(384,"br"),og()()(),Cl(385,"td",18)(386,"code",25),qx(387,"string"),og()(),Cl(388,"td",21)(389,"p"),qx(390,"R\xF3tulo do item."),og()()(),Cl(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),qx(395," link"),Hl(396,"br"),og()()(),Cl(397,"td",18)(398,"code",25),qx(399,"string"),og()(),Cl(400,"td",21)(401,"em")(402,"strong"),qx(403,"(opcional)"),og()(),Cl(404,"p"),qx(405,"Url do item."),og(),Cl(406,"blockquote")(407,"p"),qx(408,"Caso o item tamb\xE9m contenha uma "),Cl(409,"em"),qx(410,"action"),og(),qx(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Cl(412,"em"),qx(413,"link"),og(),qx(414,"."),og()(),Cl(415,"blockquote")(416,"p"),qx(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Cl(418,"strong")(419,"a",32),qx(420,"Veja um exemplo de como criar rotas aqui"),og()(),qx(421,"."),og()(),Cl(422,"blockquote")(423,"p"),qx(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Cl(425,"code"),qx(426,"p-favorite-service"),og(),qx(427," consiga favoritar ou desfavoritar."),og()()()()(),Cl(428,"h4",30)(429,"code",5),qx(430,"PoBreadcrumb"),og()(),Cl(431,"div",2)(432,"p"),qx(433,"Interface que define o "),Cl(434,"code"),qx(435,"po-breadcrumb"),og(),qx(436,"."),og()(),Cl(437,"h4",10),qx(438,"Propriedades"),og(),Cl(439,"table",11)(440,"tr",12)(441,"th",13),qx(442,"Nome"),og(),Cl(443,"th",13),qx(444,"Tipo"),og(),Cl(445,"th",13),qx(446,"Descri\xE7\xE3o"),og()(),Cl(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),qx(451," favorite"),Hl(452,"br"),og()()(),Cl(453,"td",18)(454,"code",25),qx(455,"string"),og()(),Cl(456,"td",21)(457,"em")(458,"strong"),qx(459,"(opcional)"),og()(),Cl(460,"p"),qx(461,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Cl(462,"blockquote")(463,"p"),qx(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),Cl(465,"code"),qx(466,"p-favorite-service"),og(),qx(467," do componente "),Cl(468,"code"),qx(469,"po-breadcrumb"),og(),qx(470,"."),og()()()(),Cl(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),qx(475," items"),Hl(476,"br"),og()()(),Cl(477,"td",18)(478,"code",33),qx(479,"Array<PoBreadcrumbItem>"),og()(),Cl(480,"td",21)(481,"p"),qx(482,"Lista de itens do "),Cl(483,"em"),qx(484,"breadcrumb"),og(),qx(485,"."),og(),Cl(486,"p")(487,"strong"),qx(488,"Exemplo:"),og()(),Cl(489,"pre")(490,"code"),qx(491,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Cl(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),qx(496," params"),Hl(497,"br"),og()()(),Cl(498,"td",18)(499,"code",34),qx(500,"object"),og()(),Cl(501,"td",21)(502,"em")(503,"strong"),qx(504,"(opcional)"),og()(),Cl(505,"p"),qx(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Cl(507,"h4",30)(508,"code",5),qx(509,"PoPageDetailLiterals"),og()(),Cl(510,"div",2)(511,"p"),qx(512,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(513,"code"),qx(514,"po-page-detail"),og(),qx(515,"."),og()(),Cl(516,"h4",10),qx(517,"Propriedades"),og(),Cl(518,"table",11)(519,"tr",12)(520,"th",13),qx(521,"Nome"),og(),Cl(522,"th",13),qx(523,"Tipo"),og(),Cl(524,"th",13),qx(525,"Descri\xE7\xE3o"),og()(),Cl(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),qx(530," back"),Hl(531,"br"),og()()(),Cl(532,"td",18)(533,"code",25),qx(534,"string"),og()(),Cl(535,"td",21)(536,"em")(537,"strong"),qx(538,"(opcional)"),og()(),Cl(539,"p"),qx(540,"Label da a\xE7\xE3o "),Cl(541,"code"),qx(542,"back"),og(),qx(543,"."),og()()(),Cl(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),qx(548," edit"),Hl(549,"br"),og()()(),Cl(550,"td",18)(551,"code",25),qx(552,"string"),og()(),Cl(553,"td",21)(554,"em")(555,"strong"),qx(556,"(opcional)"),og()(),Cl(557,"p"),qx(558,"Label da a\xE7\xE3o "),Cl(559,"code"),qx(560,"edit"),og(),qx(561,"."),og()()(),Cl(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),qx(566," remove"),Hl(567,"br"),og()()(),Cl(568,"td",18)(569,"code",25),qx(570,"string"),og()(),Cl(571,"td",21)(572,"em")(573,"strong"),qx(574,"(opcional)"),og()(),Cl(575,"p"),qx(576,"Label da a\xE7\xE3o "),Cl(577,"code"),qx(578,"remove"),og(),qx(579,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-page-detail-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,ae,le,re],encapsulation:2})}return a})();var fe=[{path:"",component:me}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(fe),bL]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,pe]})}return a})();export{Qe as DocPoPageDetailModule};