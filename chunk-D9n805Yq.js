import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,aE as Bp,bH as lz,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,b9 as Ro,c2 as Ap,bT as ha,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&Ul(0,"po-page-edit",0);},dependencies:[lz],encapsulation:2,changeDetection:1})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Edit Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-edit-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return o})();var ge=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}cancel(){this.action="Cancel";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle="";}save(){this.action="Save";}saveNew(){this.action="Save and new";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:false,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=lx();wl(0,"po-page-edit",3),ut("p-cancel",function(){return n.cancel()})("p-save",function(){return n.save()})("p-save-new",function(){return n.saveNew()}),wl(1,"div",4),Ul(2,"po-info",5),ng(),Ul(3,"po-divider"),wl(4,"form")(5,"div",4)(6,"po-input",6),pw("ngModelChange",function(a){return Qy(p),$x(n.title,a)||(n.title=a),Jy(a)}),ng(),$0(),wl(7,"po-input",7),pw("ngModelChange",function(a){return Qy(p),$x(n.subtitle,a)||(n.subtitle=a),Jy(a)}),ng(),$0(),wl(8,"po-checkbox-group",8),pw("ngModelChange",function(a){return Qy(p),$x(n.properties,a)||(n.properties=a),Jy(a)}),ng(),$0(),wl(9,"po-radio-group",9),pw("ngModelChange",function(a){return Qy(p),$x(n.componentsSize,a)||(n.componentsSize=a),Jy(a)}),ng(),$0(),ng(),Ul(10,"po-divider"),wl(11,"form",null,0)(13,"div",4)(14,"po-input",10),pw("ngModelChange",function(a){return Qy(p),$x(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Jy(a)}),ng(),$0(),ng()(),wl(15,"form",null,1)(17,"div",4)(18,"po-input",11),pw("ngModelChange",function(a){return Qy(p),$x(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Jy(a)}),ng(),$0(),wl(19,"po-input",12),pw("ngModelChange",function(a){return Qy(p),$x(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Jy(a)}),ng(),$0(),ng(),wl(20,"div",4)(21,"po-button",13),ut("p-click",function(){return n.addBreadcrumbItem()}),ng()()(),Ul(22,"po-divider"),wl(23,"form",null,2)(25,"div",4)(26,"po-input",14),pw("ngModelChange",function(a){return Qy(p),$x(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Jy(a)}),ng(),$0(),wl(27,"po-input",15),pw("ngModelChange",function(a){return Qy(p),$x(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Jy(a)}),ng(),$0(),ng(),wl(28,"div",4)(29,"po-button",16),ut("p-click",function(){return n.addBreadcrumbParam()}),ng()()(),wl(30,"div",4)(31,"po-input",17),pw("ngModelChange",function(a){return Qy(p),$x(n.literals,a)||(n.literals=a),Jy(a)}),ut("p-change",function(){return n.changeLiterals()}),ng(),$0(),ng(),wl(32,"div",4)(33,"po-button",18),ut("p-click",function(){return n.restore()}),ng()()()();}if(r&2){let p=_x(16),s=_x(24);YE("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Pp(2),YE("p-value",n.action),Pp(4),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.subtitle),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0(),Pp(5),hw("ngModel",n.breadcrumb.favorite),G0(),Pp(4),hw("ngModel",n.breadcrumbItem.label),G0(),Pp(),hw("ngModel",n.breadcrumbItem.link),G0(),Pp(2),YE("p-disabled",p.invalid),Pp(5),hw("ngModel",n.breadcrumbParams.property),G0(),Pp(),hw("ngModel",n.breadcrumbParams.value),G0(),Pp(2),YE("p-disabled",s.invalid),Pp(2),hw("ngModel",n.literals),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,Vp,lz],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Edit Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

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
    </div>

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
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-edit-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return o})();var Te=["formEditUser"],Ee=(()=>{class o{route=f(Cn);poDialog=f(vle);poNotification=f(Bp);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize();}cancel(){this.initialize();}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635;}save(){this.poNotification.success("Save successfully");}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])});}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&$l(Te,7),r&2){let p;uo(p=fo())&&(n.formEditUser=p.first);}},standalone:false,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let p=lx();wl(0,"po-page-edit",1),ut("p-cancel",function(){return n.cancel()})("p-save",function(){return n.save()}),wl(1,"form",null,0)(3,"div",2)(4,"po-number",3),pw("ngModelChange",function(a){return Qy(p),$x(n.userId,a)||(n.userId=a),Jy(a)}),ng(),$0(),wl(5,"po-email",4),pw("ngModelChange",function(a){return Qy(p),$x(n.email,a)||(n.email=a),Jy(a)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(a){return Qy(p),$x(n.name,a)||(n.name=a),Jy(a)}),ng(),$0(),ng(),wl(7,"div",2)(8,"po-input",6),pw("ngModelChange",function(a){return Qy(p),$x(n.nickname,a)||(n.nickname=a),Jy(a)}),ng(),$0(),wl(9,"po-datepicker",7),pw("ngModelChange",function(a){return Qy(p),$x(n.birthDate,a)||(n.birthDate=a),Jy(a)}),ng(),$0(),wl(10,"po-input",8),pw("ngModelChange",function(a){return Qy(p),$x(n.genre,a)||(n.genre=a),Jy(a)}),ng(),$0(),ng(),wl(11,"div",2)(12,"po-input",9),pw("ngModelChange",function(a){return Qy(p),$x(n.nationality,a)||(n.nationality=a),Jy(a)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(a){return Qy(p),$x(n.placeOfBirth,a)||(n.placeOfBirth=a),Jy(a)}),ng(),$0(),wl(14,"po-input",11),pw("ngModelChange",function(a){return Qy(p),$x(n.graduation,a)||(n.graduation=a),Jy(a)}),ng(),$0(),ng(),wl(15,"div",2)(16,"po-input",12),pw("ngModelChange",function(a){return Qy(p),$x(n.fathersName,a)||(n.fathersName=a),Jy(a)}),ng(),$0(),wl(17,"po-input",13),pw("ngModelChange",function(a){return Qy(p),$x(n.mothersName,a)||(n.mothersName=a),Jy(a)}),ng(),$0(),ng()()();}if(r&2){let p=_x(2);YE("p-breadcrumb",n.breadcrumb)("p-disable-submit",p.invalid),Pp(4),hw("ngModel",n.userId),G0(),Pp(),hw("ngModel",n.email),G0(),Pp(),hw("ngModel",n.name),G0(),Pp(2),hw("ngModel",n.nickname),G0(),Pp(),hw("ngModel",n.birthDate),G0(),Pp(),hw("ngModel",n.genre),G0(),Pp(2),hw("ngModel",n.nationality),G0(),Pp(),hw("ngModel",n.placeOfBirth),G0(),Pp(),hw("ngModel",n.graduation),G0(),Pp(2),hw("ngModel",n.fathersName),G0(),Pp(),hw("ngModel",n.mothersName),G0();}},dependencies:[aY,iY,oY,ck,ok,Ro,Ap,Yo,ha,lz],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Edit - User"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-edit
  p-title="User Edit"
  p-subtitle="Fields marked with <b>*</b> are <u>required</u>"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-edit-user"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ke,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:false,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),wl(7,"code"),Ux(8,"po-page-default"),ng(),Ux(9,", "),wl(10,"code"),Ux(11,"po-page-detail"),ng(),Ux(12,`,
`),wl(13,"code"),Ux(14,"po-page-edit"),ng(),Ux(15,", "),wl(16,"code"),Ux(17,"po-page-list"),ng(),Ux(18," e "),wl(19,"code"),Ux(20,"po-page-slide"),ng(),Ux(21,"."),ng()(),wl(22,"h3",3),Ux(23,"Componente"),ng(),wl(24,"h4",4)(25,"code",5),Ux(26,"PoPageEditComponent"),ng()(),wl(27,"div",2)(28,"p"),Ux(29,"O componente "),wl(30,"strong"),Ux(31,"po-page-edit"),ng(),Ux(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),ng(),wl(33,"p"),Ux(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),wl(35,"code"),Ux(36,"p-disable-submit"),ng(),Ux(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),ng(),wl(38,"h4"),Ux(39,"Tokens customiz\xE1veis"),ng(),wl(40,"blockquote")(41,"p"),Ux(42,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(43,"a",6),Ux(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(45,"."),ng()(),wl(46,"table")(47,"thead")(48,"tr")(49,"th"),Ux(50,"Propriedade"),ng(),wl(51,"th"),Ux(52,"Descri\xE7\xE3o"),ng(),wl(53,"th"),Ux(54,"Valor Padr\xE3o"),ng()()(),wl(55,"tbody")(56,"tr")(57,"td")(58,"strong"),Ux(59,"Header"),ng()(),Ul(60,"td")(61,"td"),ng(),wl(62,"tr")(63,"td")(64,"code"),Ux(65,"--padding"),ng()(),wl(66,"td"),Ux(67,"Espa\xE7amento do header"),ng(),wl(68,"td")(69,"code"),Ux(70,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(71,"tr")(72,"td")(73,"code"),Ux(74,"--gap"),ng()(),wl(75,"td"),Ux(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(77,"td")(78,"code"),Ux(79,"var(--spacing-md)"),ng()()(),wl(80,"tr")(81,"td")(82,"code"),Ux(83,"--gap-actions"),ng()(),wl(84,"td"),Ux(85,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(86,"td")(87,"code"),Ux(88,"var(--spacing-xs)"),ng()()(),wl(89,"tr")(90,"td")(91,"code"),Ux(92,"--font-family"),ng()(),wl(93,"td"),Ux(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(95,"td")(96,"code"),Ux(97,"var(--font-family-theme)"),ng()()(),wl(98,"tr")(99,"td")(100,"strong"),Ux(101,"Content"),ng()(),Ul(102,"td")(103,"td"),ng(),wl(104,"tr")(105,"td")(106,"code"),Ux(107,"--padding-content"),ng()(),wl(108,"td"),Ux(109,"Espa\xE7amento do conte\xFAdo"),ng(),wl(110,"td")(111,"code"),Ux(112,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(113,"div",7)(114,"h4",8),Ux(115,"Seletor"),ng(),wl(116,"pre",9),Ux(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),ng()(),wl(118,"h4",10),Ux(119,"Propriedades"),ng(),wl(120,"table",11)(121,"tr",12)(122,"th",13),Ux(123,"Nome"),ng(),wl(124,"th",13),Ux(125,"Tipo"),ng(),wl(126,"th",13),Ux(127,"Padr\xE3o"),ng(),wl(128,"th",13),Ux(129,"Descri\xE7\xE3o"),ng()(),wl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Ux(134," p-breadcrumb"),Ul(135,"br"),ng()()(),wl(136,"td",18)(137,"code",19),Ux(138,"PoBreadcrumb"),ng()(),wl(139,"td",20),Ux(140,"-"),ng(),wl(141,"td",21)(142,"em")(143,"strong"),Ux(144,"(opcional)"),ng()(),wl(145,"p"),Ux(146,"Objeto com propriedades do breadcrumb."),ng()()(),wl(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),Ux(151," (p-cancel)"),Ul(152,"br"),ng()()(),wl(153,"td",18)(154,"code",24),Ux(155,"EventEmitter"),ng()(),wl(156,"td",20),Ux(157,"-"),ng(),wl(158,"td",21)(159,"p"),Ux(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),ng(),wl(161,"pre")(162,"code"),Ux(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),ng()(),wl(164,"blockquote")(165,"p"),Ux(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),Ux(171," p-components-size"),Ul(172,"br"),ng()()(),wl(173,"td",18)(174,"code",25),Ux(175,"string"),ng()(),wl(176,"td",20)(177,"p")(178,"code"),Ux(179,"medium"),ng()()(),wl(180,"td",21)(181,"em")(182,"strong"),Ux(183,"(opcional)"),ng()(),wl(184,"p"),Ux(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(186,"ul")(187,"li")(188,"code"),Ux(189,"small"),ng(),Ux(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(191,"li")(192,"code"),Ux(193,"medium"),ng(),Ux(194,": aplica a medida medium de cada componente."),ng()(),wl(195,"blockquote")(196,"p"),Ux(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(198,"code"),Ux(199,"medium"),ng(),Ux(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(201,"a",26),Ux(202,"po-theme"),ng(),Ux(203,"."),ng()()()(),wl(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),Ux(208," p-disable-submit"),Ul(209,"br"),ng()()(),wl(210,"td",18)(211,"code",27),Ux(212,"boolean"),ng()(),wl(213,"td",20),Ux(214,"-"),ng(),wl(215,"td",21)(216,"em")(217,"strong"),Ux(218,"(opcional)"),ng()(),wl(219,"p"),Ux(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),ng()()(),wl(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),Ux(225," p-literals"),Ul(226,"br"),ng()()(),wl(227,"td",18)(228,"code",28),Ux(229,"PoPageEditLiterals"),ng()(),wl(230,"td",20),Ux(231,"-"),ng(),wl(232,"td",21)(233,"em")(234,"strong"),Ux(235,"(opcional)"),ng()(),wl(236,"p"),Ux(237,"Objeto com as literais usadas no "),wl(238,"code"),Ux(239,"po-page-edit"),ng(),Ux(240,"."),ng(),wl(241,"p"),Ux(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(243,"pre")(244,"code"),Ux(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),ng()(),wl(246,"p"),Ux(247,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(248,"pre")(249,"code"),Ux(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),ng()(),wl(251,"p"),Ux(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(253,"pre")(254,"code"),Ux(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),ng()(),wl(256,"blockquote")(257,"p"),Ux(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(259,"a",29)(260,"code"),Ux(261,"PoI18nService"),ng()(),Ux(262," ou do browser."),ng()()()(),wl(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),Ux(267," (p-save)"),Ul(268,"br"),ng()()(),wl(269,"td",18)(270,"code",24),Ux(271,"EventEmitter"),ng()(),wl(272,"td",20),Ux(273,"-"),ng(),wl(274,"td",21)(275,"p"),Ux(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),ng(),wl(277,"pre")(278,"code"),Ux(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),ng()(),wl(280,"blockquote")(281,"p"),Ux(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),Ux(287," (p-save-new)"),Ul(288,"br"),ng()()(),wl(289,"td",18)(290,"code",24),Ux(291,"EventEmitter"),ng()(),wl(292,"td",20),Ux(293,"-"),ng(),wl(294,"td",21)(295,"p"),Ux(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),ng(),wl(297,"pre")(298,"code"),Ux(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),ng()(),wl(300,"blockquote")(301,"p"),Ux(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),ng()()()(),wl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Ux(307," p-subtitle"),Ul(308,"br"),ng()()(),wl(309,"td",18)(310,"code",25),Ux(311,"string"),ng()(),wl(312,"td",20),Ux(313,"-"),ng(),wl(314,"td",21)(315,"em")(316,"strong"),Ux(317,"(opcional)"),ng()(),wl(318,"p"),Ux(319,"Subtitulo do Header da p\xE1gina."),ng(),wl(320,"p"),Ux(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(322,"code"),Ux(323,"<b>"),ng(),Ux(324," (negrito), "),wl(325,"code"),Ux(326,"<strong>"),ng(),Ux(327," (negrito), "),wl(328,"code"),Ux(329,"<i>"),ng(),Ux(330," (it\xE1lico), "),wl(331,"code"),Ux(332,"<em>"),ng(),Ux(333,` (it\xE1lico) e
`),wl(334,"code"),Ux(335,"<u>"),ng(),Ux(336," (sublinhado)."),ng(),wl(337,"p"),Ux(338,"Exemplo:"),ng(),wl(339,"pre")(340,"code",30),Ux(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),ng()(),wl(342,"blockquote")(343,"p"),Ux(344,"Requer que "),wl(345,"code"),Ux(346,"p-title"),ng(),Ux(347," esteja definido."),ng()()()(),wl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Ux(352," p-title"),Ul(353,"br"),ng()()(),wl(354,"td",18)(355,"code",25),Ux(356,"string"),ng()(),wl(357,"td",20),Ux(358,"-"),ng(),wl(359,"td",21)(360,"p"),Ux(361,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(362,"h3"),Ux(363,"Interfaces"),ng(),wl(364,"h4",31)(365,"code",5),Ux(366,"PoBreadcrumbItem"),ng()(),wl(367,"div",2)(368,"p"),Ux(369,"Interface que define cada item do componente "),wl(370,"strong"),Ux(371,"po-breadcrumb"),ng(),Ux(372,"."),ng()(),wl(373,"h4",10),Ux(374,"Propriedades"),ng(),wl(375,"table",11)(376,"tr",12)(377,"th",13),Ux(378,"Nome"),ng(),wl(379,"th",13),Ux(380,"Tipo"),ng(),wl(381,"th",13),Ux(382,"Descri\xE7\xE3o"),ng()(),wl(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),Ux(387," action"),Ul(388,"br"),ng()()(),wl(389,"td",18)(390,"code",32),Ux(391,"Function"),ng()(),wl(392,"td",21)(393,"em")(394,"strong"),Ux(395,"(opcional)"),ng()(),wl(396,"p"),Ux(397,"A\xE7\xE3o executada ao clicar no item."),ng(),wl(398,"blockquote")(399,"p"),Ux(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),wl(401,"em"),Ux(402,"label"),ng(),Ux(403," do item como par\xE2metro para execu\xE7\xE3o."),ng()()()(),wl(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),Ux(408," label"),Ul(409,"br"),ng()()(),wl(410,"td",18)(411,"code",25),Ux(412,"string"),ng()(),wl(413,"td",21)(414,"p"),Ux(415,"R\xF3tulo do item."),ng()()(),wl(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),Ux(420," link"),Ul(421,"br"),ng()()(),wl(422,"td",18)(423,"code",25),Ux(424,"string"),ng()(),wl(425,"td",21)(426,"em")(427,"strong"),Ux(428,"(opcional)"),ng()(),wl(429,"p"),Ux(430,"Url do item."),ng(),wl(431,"blockquote")(432,"p"),Ux(433,"Caso o item tamb\xE9m contenha uma "),wl(434,"em"),Ux(435,"action"),ng(),Ux(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),wl(437,"em"),Ux(438,"link"),ng(),Ux(439,"."),ng()(),wl(440,"blockquote")(441,"p"),Ux(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),wl(443,"strong")(444,"a",33),Ux(445,"Veja um exemplo de como criar rotas aqui"),ng()(),Ux(446,"."),ng()(),wl(447,"blockquote")(448,"p"),Ux(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),wl(450,"code"),Ux(451,"p-favorite-service"),ng(),Ux(452," consiga favoritar ou desfavoritar."),ng()()()()(),wl(453,"h4",31)(454,"code",5),Ux(455,"PoBreadcrumb"),ng()(),wl(456,"div",2)(457,"p"),Ux(458,"Interface que define o "),wl(459,"code"),Ux(460,"po-breadcrumb"),ng(),Ux(461,"."),ng()(),wl(462,"h4",10),Ux(463,"Propriedades"),ng(),wl(464,"table",11)(465,"tr",12)(466,"th",13),Ux(467,"Nome"),ng(),wl(468,"th",13),Ux(469,"Tipo"),ng(),wl(470,"th",13),Ux(471,"Descri\xE7\xE3o"),ng()(),wl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Ux(476," favorite"),Ul(477,"br"),ng()()(),wl(478,"td",18)(479,"code",25),Ux(480,"string"),ng()(),wl(481,"td",21)(482,"em")(483,"strong"),Ux(484,"(opcional)"),ng()(),wl(485,"p"),Ux(486,"Permite definir uma URL para favoritar ou desfavoritar."),ng(),wl(487,"blockquote")(488,"p"),Ux(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),wl(490,"code"),Ux(491,"p-favorite-service"),ng(),Ux(492," do componente "),wl(493,"code"),Ux(494,"po-breadcrumb"),ng(),Ux(495,"."),ng()()()(),wl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Ux(500," items"),Ul(501,"br"),ng()()(),wl(502,"td",18)(503,"code",34),Ux(504,"Array<PoBreadcrumbItem>"),ng()(),wl(505,"td",21)(506,"p"),Ux(507,"Lista de itens do "),wl(508,"em"),Ux(509,"breadcrumb"),ng(),Ux(510,"."),ng(),wl(511,"p")(512,"strong"),Ux(513,"Exemplo:"),ng()(),wl(514,"pre")(515,"code"),Ux(516,`{ label: 'Po Portal', link: 'portal' }
`),ng()()()(),wl(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),Ux(521," params"),Ul(522,"br"),ng()()(),wl(523,"td",18)(524,"code",35),Ux(525,"object"),ng()(),wl(526,"td",21)(527,"em")(528,"strong"),Ux(529,"(opcional)"),ng()(),wl(530,"p"),Ux(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),ng()()()(),wl(532,"h4",31)(533,"code",5),Ux(534,"PoPageEditLiterals"),ng()(),wl(535,"div",2)(536,"p"),Ux(537,"Interface para defini\xE7\xE3o das literais usadas no "),wl(538,"code"),Ux(539,"po-page-edit"),ng(),Ux(540,"."),ng()(),wl(541,"h4",10),Ux(542,"Propriedades"),ng(),wl(543,"table",11)(544,"tr",12)(545,"th",13),Ux(546,"Nome"),ng(),wl(547,"th",13),Ux(548,"Tipo"),ng(),wl(549,"th",13),Ux(550,"Descri\xE7\xE3o"),ng()(),wl(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),Ux(555," cancel"),Ul(556,"br"),ng()()(),wl(557,"td",18)(558,"code",25),Ux(559,"string"),ng()(),wl(560,"td",21)(561,"em")(562,"strong"),Ux(563,"(opcional)"),ng()(),wl(564,"p"),Ux(565,"Label da a\xE7\xE3o "),wl(566,"code"),Ux(567,"cancel"),ng(),Ux(568,"."),ng()()(),wl(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),Ux(573," save"),Ul(574,"br"),ng()()(),wl(575,"td",18)(576,"code",25),Ux(577,"string"),ng()(),wl(578,"td",21)(579,"em")(580,"strong"),Ux(581,"(opcional)"),ng()(),wl(582,"p"),Ux(583,"Label da a\xE7\xE3o "),wl(584,"code"),Ux(585,"save"),ng(),Ux(586,"."),ng()()(),wl(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),Ux(591," saveNew"),Ul(592,"br"),ng()()(),wl(593,"td",18)(594,"code",25),Ux(595,"string"),ng()(),wl(596,"td",21)(597,"em")(598,"strong"),Ux(599,"(opcional)"),ng()(),wl(600,"p"),Ux(601,"Label da a\xE7\xE3o "),wl(602,"code"),Ux(603,"saveNew"),ng(),Ux(604,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-page-edit-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),ng()()()),r&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ue,be,he,Se],encapsulation:2})}return o})();var Ie=[{path:"",component:fe}],Pe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[vL.forChild(Ie),vL]})}return o})();var Pt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[u5,Pe]})}return o})();export{Pt as DocPoPageEditModule};