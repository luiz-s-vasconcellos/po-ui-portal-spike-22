import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,aW as Yp,ce as uNe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,bD as Ade,cz as Ez,cp as Uhe,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var pe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,i){r&1&&Wl(0,"po-page-edit",0);},dependencies:[uNe],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Edit Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}cancel(){this.action="Cancel";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle="";}save(){this.action="Save";}saveNew(){this.action="Save and new";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:false,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"po-page-edit",3),ht("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()})("p-save-new",function(){return i.saveNew()}),Sl(1,"div",4),Wl(2,"po-info",5),sg(),Wl(3,"po-divider"),Sl(4,"form")(5,"div",4)(6,"po-input",6),Ew("ngModelChange",function(a){return Xy(p),tN(i.title,a)||(i.title=a),Qy(a)}),sg(),JA(),Sl(7,"po-input",7),Ew("ngModelChange",function(a){return Xy(p),tN(i.subtitle,a)||(i.subtitle=a),Qy(a)}),sg(),JA(),Sl(8,"po-checkbox-group",8),Ew("ngModelChange",function(a){return Xy(p),tN(i.properties,a)||(i.properties=a),Qy(a)}),sg(),JA(),Sl(9,"po-radio-group",9),Ew("ngModelChange",function(a){return Xy(p),tN(i.componentsSize,a)||(i.componentsSize=a),Qy(a)}),sg(),JA(),sg(),Wl(10,"po-divider"),Sl(11,"form",null,0)(13,"div",4)(14,"po-input",10),Ew("ngModelChange",function(a){return Xy(p),tN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Qy(a)}),sg(),JA(),sg()(),Sl(15,"form",null,1)(17,"div",4)(18,"po-input",11),Ew("ngModelChange",function(a){return Xy(p),tN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Qy(a)}),sg(),JA(),Sl(19,"po-input",12),Ew("ngModelChange",function(a){return Xy(p),tN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Qy(a)}),sg(),JA(),sg(),Sl(20,"div",4)(21,"po-button",13),ht("p-click",function(){return i.addBreadcrumbItem()}),sg()()(),Wl(22,"po-divider"),Sl(23,"form",null,2)(25,"div",4)(26,"po-input",14),Ew("ngModelChange",function(a){return Xy(p),tN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Qy(a)}),sg(),JA(),Sl(27,"po-input",15),Ew("ngModelChange",function(a){return Xy(p),tN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Qy(a)}),sg(),JA(),sg(),Sl(28,"div",4)(29,"po-button",16),ht("p-click",function(){return i.addBreadcrumbParam()}),sg()()(),Sl(30,"div",4)(31,"po-input",17),Ew("ngModelChange",function(a){return Xy(p),tN(i.literals,a)||(i.literals=a),Qy(a)}),ht("p-change",function(){return i.changeLiterals()}),sg(),JA(),sg(),Sl(32,"div",4)(33,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()()();}if(r&2){let p=xx(16),s=xx(24);tw("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-disable-submit",i.properties.includes("disableSubmit"))("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),Vp(2),tw("p-value",i.action),Vp(4),Dw("ngModel",i.title),t0(),Vp(),Dw("ngModel",i.subtitle),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),t0(),Vp(5),Dw("ngModel",i.breadcrumb.favorite),t0(),Vp(4),Dw("ngModel",i.breadcrumbItem.label),t0(),Vp(),Dw("ngModel",i.breadcrumbItem.link),t0(),Vp(2),tw("p-disabled",p.invalid),Vp(5),Dw("ngModel",i.breadcrumbParams.property),t0(),Vp(),Dw("ngModel",i.breadcrumbParams.value),t0(),Vp(2),tw("p-disabled",s.invalid),Vp(2),Dw("ngModel",i.literals),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Qhe,uNe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Edit Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-edit
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return o})();var xe=["formEditUser"],ge=(()=>{class o{route=f(wn);poDialog=f(zde);poNotification=f(Yp);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize();}cancel(){this.initialize();}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635;}save(){this.poNotification.success("Save successfully");}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])});}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,i){if(r&1&&ql(xe,7),r&2){let p;lo(p=uo())&&(i.formEditUser=p.first);}},standalone:false,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"po-page-edit",1),ht("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()}),Sl(1,"form",null,0)(3,"div",2)(4,"po-number",3),Ew("ngModelChange",function(a){return Xy(p),tN(i.userId,a)||(i.userId=a),Qy(a)}),sg(),JA(),Sl(5,"po-email",4),Ew("ngModelChange",function(a){return Xy(p),tN(i.email,a)||(i.email=a),Qy(a)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(a){return Xy(p),tN(i.name,a)||(i.name=a),Qy(a)}),sg(),JA(),sg(),Sl(7,"div",2)(8,"po-input",6),Ew("ngModelChange",function(a){return Xy(p),tN(i.nickname,a)||(i.nickname=a),Qy(a)}),sg(),JA(),Sl(9,"po-datepicker",7),Ew("ngModelChange",function(a){return Xy(p),tN(i.birthDate,a)||(i.birthDate=a),Qy(a)}),sg(),JA(),Sl(10,"po-input",8),Ew("ngModelChange",function(a){return Xy(p),tN(i.genre,a)||(i.genre=a),Qy(a)}),sg(),JA(),sg(),Sl(11,"div",2)(12,"po-input",9),Ew("ngModelChange",function(a){return Xy(p),tN(i.nationality,a)||(i.nationality=a),Qy(a)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(a){return Xy(p),tN(i.placeOfBirth,a)||(i.placeOfBirth=a),Qy(a)}),sg(),JA(),Sl(14,"po-input",11),Ew("ngModelChange",function(a){return Xy(p),tN(i.graduation,a)||(i.graduation=a),Qy(a)}),sg(),JA(),sg(),Sl(15,"div",2)(16,"po-input",12),Ew("ngModelChange",function(a){return Xy(p),tN(i.fathersName,a)||(i.fathersName=a),Qy(a)}),sg(),JA(),Sl(17,"po-input",13),Ew("ngModelChange",function(a){return Xy(p),tN(i.mothersName,a)||(i.mothersName=a),Qy(a)}),sg(),JA(),sg()()();}if(r&2){let p=xx(2);tw("p-breadcrumb",i.breadcrumb)("p-disable-submit",p.invalid),Vp(4),Dw("ngModel",i.userId),t0(),Vp(),Dw("ngModel",i.email),t0(),Vp(),Dw("ngModel",i.name),t0(),Vp(2),Dw("ngModel",i.nickname),t0(),Vp(),Dw("ngModel",i.birthDate),t0(),Vp(),Dw("ngModel",i.genre),t0(),Vp(2),Dw("ngModel",i.nationality),t0(),Vp(),Dw("ngModel",i.placeOfBirth),t0(),Vp(),Dw("ngModel",i.graduation),t0(),Vp(2),Dw("ngModel",i.fathersName),t0(),Vp(),Dw("ngModel",i.mothersName),t0();}},dependencies:[J9,K9,X9,Dk,vk,Ade,Ez,F3,Uhe,uNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Edit - User"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-edit
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-user"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:false,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),Jx(8,"po-page-default"),sg(),Jx(9,", "),Sl(10,"code"),Jx(11,"po-page-detail"),sg(),Jx(12,`,
`),Sl(13,"code"),Jx(14,"po-page-edit"),sg(),Jx(15,", "),Sl(16,"code"),Jx(17,"po-page-list"),sg(),Jx(18," e "),Sl(19,"code"),Jx(20,"po-page-slide"),sg(),Jx(21,"."),sg()(),Sl(22,"h3",3),Jx(23,"Componente"),sg(),Sl(24,"h4",4)(25,"code",5),Jx(26,"PoPageEditComponent"),sg()(),Sl(27,"div",2)(28,"p"),Jx(29,"O componente "),Sl(30,"strong"),Jx(31,"po-page-edit"),sg(),Jx(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),sg(),Sl(33,"p"),Jx(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),Sl(35,"code"),Jx(36,"p-disable-submit"),sg(),Jx(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),sg(),Sl(38,"h4"),Jx(39,"Tokens customiz\xE1veis"),sg(),Sl(40,"blockquote")(41,"p"),Jx(42,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(43,"a",6),Jx(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(45,"."),sg()(),Sl(46,"table")(47,"thead")(48,"tr")(49,"th"),Jx(50,"Propriedade"),sg(),Sl(51,"th"),Jx(52,"Descri\xE7\xE3o"),sg(),Sl(53,"th"),Jx(54,"Valor Padr\xE3o"),sg()()(),Sl(55,"tbody")(56,"tr")(57,"td")(58,"strong"),Jx(59,"Header"),sg()(),Wl(60,"td")(61,"td"),sg(),Sl(62,"tr")(63,"td")(64,"code"),Jx(65,"--padding"),sg()(),Sl(66,"td"),Jx(67,"Espa\xE7amento do header"),sg(),Sl(68,"td")(69,"code"),Jx(70,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(71,"tr")(72,"td")(73,"code"),Jx(74,"--gap"),sg()(),Sl(75,"td"),Jx(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(77,"td")(78,"code"),Jx(79,"var(--spacing-md)"),sg()()(),Sl(80,"tr")(81,"td")(82,"code"),Jx(83,"--gap-actions"),sg()(),Sl(84,"td"),Jx(85,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(86,"td")(87,"code"),Jx(88,"var(--spacing-xs)"),sg()()(),Sl(89,"tr")(90,"td")(91,"code"),Jx(92,"--font-family"),sg()(),Sl(93,"td"),Jx(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(95,"td")(96,"code"),Jx(97,"var(--font-family-theme)"),sg()()(),Sl(98,"tr")(99,"td")(100,"strong"),Jx(101,"Content"),sg()(),Wl(102,"td")(103,"td"),sg(),Sl(104,"tr")(105,"td")(106,"code"),Jx(107,"--padding-content"),sg()(),Sl(108,"td"),Jx(109,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(110,"td")(111,"code"),Jx(112,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(113,"div",7)(114,"h4",8),Jx(115,"Seletor"),sg(),Sl(116,"pre",9),Jx(117,`<po-page-edit
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
`),sg()(),Sl(118,"h4",10),Jx(119,"Propriedades"),sg(),Sl(120,"table",11)(121,"tr",12)(122,"th",13),Jx(123,"Nome"),sg(),Sl(124,"th",13),Jx(125,"Tipo"),sg(),Sl(126,"th",13),Jx(127,"Padr\xE3o"),sg(),Sl(128,"th",13),Jx(129,"Descri\xE7\xE3o"),sg()(),Sl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Jx(134," p-breadcrumb"),Wl(135,"br"),sg()()(),Sl(136,"td",18)(137,"code",19),Jx(138,"PoBreadcrumb"),sg()(),Sl(139,"td",20),Jx(140,"-"),sg(),Sl(141,"td",21)(142,"em")(143,"strong"),Jx(144,"(opcional)"),sg()(),Sl(145,"p"),Jx(146,"Objeto com propriedades do breadcrumb."),sg()()(),Sl(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),Jx(151," (p-cancel)"),Wl(152,"br"),sg()()(),Sl(153,"td",18)(154,"code",24),Jx(155,"EventEmitter"),sg()(),Sl(156,"td",20),Jx(157,"-"),sg(),Sl(158,"td",21)(159,"p"),Jx(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),sg(),Sl(161,"pre")(162,"code"),Jx(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),sg()(),Sl(164,"blockquote")(165,"p"),Jx(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),Jx(171," p-components-size"),Wl(172,"br"),sg()()(),Sl(173,"td",18)(174,"code",25),Jx(175,"string"),sg()(),Sl(176,"td",20)(177,"p")(178,"code"),Jx(179,"medium"),sg()()(),Sl(180,"td",21)(181,"em")(182,"strong"),Jx(183,"(opcional)"),sg()(),Sl(184,"p"),Jx(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(186,"ul")(187,"li")(188,"code"),Jx(189,"small"),sg(),Jx(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(191,"li")(192,"code"),Jx(193,"medium"),sg(),Jx(194,": aplica a medida medium de cada componente."),sg()(),Sl(195,"blockquote")(196,"p"),Jx(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(198,"code"),Jx(199,"medium"),sg(),Jx(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(201,"a",26),Jx(202,"po-theme"),sg(),Jx(203,"."),sg()()()(),Sl(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),Jx(208," p-disable-submit"),Wl(209,"br"),sg()()(),Sl(210,"td",18)(211,"code",27),Jx(212,"boolean"),sg()(),Sl(213,"td",20),Jx(214,"-"),sg(),Sl(215,"td",21)(216,"em")(217,"strong"),Jx(218,"(opcional)"),sg()(),Sl(219,"p"),Jx(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),sg()()(),Sl(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),Jx(225," p-literals"),Wl(226,"br"),sg()()(),Sl(227,"td",18)(228,"code",28),Jx(229,"PoPageEditLiterals"),sg()(),Sl(230,"td",20),Jx(231,"-"),sg(),Sl(232,"td",21)(233,"em")(234,"strong"),Jx(235,"(opcional)"),sg()(),Sl(236,"p"),Jx(237,"Objeto com as literais usadas no "),Sl(238,"code"),Jx(239,"po-page-edit"),sg(),Jx(240,"."),sg(),Sl(241,"p"),Jx(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(243,"pre")(244,"code"),Jx(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),sg()(),Sl(246,"p"),Jx(247,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(248,"pre")(249,"code"),Jx(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),sg()(),Sl(251,"p"),Jx(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(253,"pre")(254,"code"),Jx(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),sg()(),Sl(256,"blockquote")(257,"p"),Jx(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(259,"a",29)(260,"code"),Jx(261,"PoI18nService"),sg()(),Jx(262," ou do browser."),sg()()()(),Sl(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),Jx(267," (p-save)"),Wl(268,"br"),sg()()(),Sl(269,"td",18)(270,"code",24),Jx(271,"EventEmitter"),sg()(),Sl(272,"td",20),Jx(273,"-"),sg(),Sl(274,"td",21)(275,"p"),Jx(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),sg(),Sl(277,"pre")(278,"code"),Jx(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),sg()(),Sl(280,"blockquote")(281,"p"),Jx(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),Jx(287," (p-save-new)"),Wl(288,"br"),sg()()(),Sl(289,"td",18)(290,"code",24),Jx(291,"EventEmitter"),sg()(),Sl(292,"td",20),Jx(293,"-"),sg(),Sl(294,"td",21)(295,"p"),Jx(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),sg(),Sl(297,"pre")(298,"code"),Jx(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),sg()(),Sl(300,"blockquote")(301,"p"),Jx(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),sg()()()(),Sl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Jx(307," p-subtitle"),Wl(308,"br"),sg()()(),Sl(309,"td",18)(310,"code",25),Jx(311,"string"),sg()(),Sl(312,"td",20),Jx(313,"-"),sg(),Sl(314,"td",21)(315,"em")(316,"strong"),Jx(317,"(opcional)"),sg()(),Sl(318,"p"),Jx(319,"Subtitulo do Header da p\xE1gina."),sg(),Sl(320,"p"),Jx(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(322,"code"),Jx(323,"<b>"),sg(),Jx(324," (negrito), "),Sl(325,"code"),Jx(326,"<strong>"),sg(),Jx(327," (negrito), "),Sl(328,"code"),Jx(329,"<i>"),sg(),Jx(330," (it\xE1lico), "),Sl(331,"code"),Jx(332,"<em>"),sg(),Jx(333,` (it\xE1lico) e
`),Sl(334,"code"),Jx(335,"<u>"),sg(),Jx(336," (sublinhado)."),sg(),Sl(337,"p"),Jx(338,"Exemplo:"),sg(),Sl(339,"pre")(340,"code",30),Jx(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),sg()(),Sl(342,"blockquote")(343,"p"),Jx(344,"Requer que "),Sl(345,"code"),Jx(346,"p-title"),sg(),Jx(347," esteja definido."),sg()()()(),Sl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Jx(352," p-title"),Wl(353,"br"),sg()()(),Sl(354,"td",18)(355,"code",25),Jx(356,"string"),sg()(),Sl(357,"td",20),Jx(358,"-"),sg(),Sl(359,"td",21)(360,"p"),Jx(361,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(362,"h3"),Jx(363,"Interfaces"),sg(),Sl(364,"h4",31)(365,"code",5),Jx(366,"PoBreadcrumbItem"),sg()(),Sl(367,"div",2)(368,"p"),Jx(369,"Interface que define cada item do componente "),Sl(370,"strong"),Jx(371,"po-breadcrumb"),sg(),Jx(372,"."),sg()(),Sl(373,"h4",10),Jx(374,"Propriedades"),sg(),Sl(375,"table",11)(376,"tr",12)(377,"th",13),Jx(378,"Nome"),sg(),Sl(379,"th",13),Jx(380,"Tipo"),sg(),Sl(381,"th",13),Jx(382,"Descri\xE7\xE3o"),sg()(),Sl(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),Jx(387," action"),Wl(388,"br"),sg()()(),Sl(389,"td",18)(390,"code",32),Jx(391,"Function"),sg()(),Sl(392,"td",21)(393,"em")(394,"strong"),Jx(395,"(opcional)"),sg()(),Sl(396,"p"),Jx(397,"A\xE7\xE3o executada ao clicar no item."),sg(),Sl(398,"blockquote")(399,"p"),Jx(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(401,"em"),Jx(402,"label"),sg(),Jx(403," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Sl(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),Jx(408," label"),Wl(409,"br"),sg()()(),Sl(410,"td",18)(411,"code",25),Jx(412,"string"),sg()(),Sl(413,"td",21)(414,"p"),Jx(415,"R\xF3tulo do item."),sg()()(),Sl(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),Jx(420," link"),Wl(421,"br"),sg()()(),Sl(422,"td",18)(423,"code",25),Jx(424,"string"),sg()(),Sl(425,"td",21)(426,"em")(427,"strong"),Jx(428,"(opcional)"),sg()(),Sl(429,"p"),Jx(430,"Url do item."),sg(),Sl(431,"blockquote")(432,"p"),Jx(433,"Caso o item tamb\xE9m contenha uma "),Sl(434,"em"),Jx(435,"action"),sg(),Jx(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(437,"em"),Jx(438,"link"),sg(),Jx(439,"."),sg()(),Sl(440,"blockquote")(441,"p"),Jx(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(443,"strong")(444,"a",33),Jx(445,"Veja um exemplo de como criar rotas aqui"),sg()(),Jx(446,"."),sg()(),Sl(447,"blockquote")(448,"p"),Jx(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(450,"code"),Jx(451,"p-favorite-service"),sg(),Jx(452," consiga favoritar ou desfavoritar."),sg()()()()(),Sl(453,"h4",31)(454,"code",5),Jx(455,"PoBreadcrumb"),sg()(),Sl(456,"div",2)(457,"p"),Jx(458,"Interface que define o "),Sl(459,"code"),Jx(460,"po-breadcrumb"),sg(),Jx(461,"."),sg()(),Sl(462,"h4",10),Jx(463,"Propriedades"),sg(),Sl(464,"table",11)(465,"tr",12)(466,"th",13),Jx(467,"Nome"),sg(),Sl(468,"th",13),Jx(469,"Tipo"),sg(),Sl(470,"th",13),Jx(471,"Descri\xE7\xE3o"),sg()(),Sl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Jx(476," favorite"),Wl(477,"br"),sg()()(),Sl(478,"td",18)(479,"code",25),Jx(480,"string"),sg()(),Sl(481,"td",21)(482,"em")(483,"strong"),Jx(484,"(opcional)"),sg()(),Sl(485,"p"),Jx(486,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Sl(487,"blockquote")(488,"p"),Jx(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(490,"code"),Jx(491,"p-favorite-service"),sg(),Jx(492," do componente "),Sl(493,"code"),Jx(494,"po-breadcrumb"),sg(),Jx(495,"."),sg()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Jx(500," items"),Wl(501,"br"),sg()()(),Sl(502,"td",18)(503,"code",34),Jx(504,"Array<PoBreadcrumbItem>"),sg()(),Sl(505,"td",21)(506,"p"),Jx(507,"Lista de itens do "),Sl(508,"em"),Jx(509,"breadcrumb"),sg(),Jx(510,"."),sg(),Sl(511,"p")(512,"strong"),Jx(513,"Exemplo:"),sg()(),Sl(514,"pre")(515,"code"),Jx(516,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Sl(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),Jx(521," params"),Wl(522,"br"),sg()()(),Sl(523,"td",18)(524,"code",35),Jx(525,"object"),sg()(),Sl(526,"td",21)(527,"em")(528,"strong"),Jx(529,"(opcional)"),sg()(),Sl(530,"p"),Jx(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Sl(532,"h4",31)(533,"code",5),Jx(534,"PoPageEditLiterals"),sg()(),Sl(535,"div",2)(536,"p"),Jx(537,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(538,"code"),Jx(539,"po-page-edit"),sg(),Jx(540,"."),sg()(),Sl(541,"h4",10),Jx(542,"Propriedades"),sg(),Sl(543,"table",11)(544,"tr",12)(545,"th",13),Jx(546,"Nome"),sg(),Sl(547,"th",13),Jx(548,"Tipo"),sg(),Sl(549,"th",13),Jx(550,"Descri\xE7\xE3o"),sg()(),Sl(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),Jx(555," cancel"),Wl(556,"br"),sg()()(),Sl(557,"td",18)(558,"code",25),Jx(559,"string"),sg()(),Sl(560,"td",21)(561,"em")(562,"strong"),Jx(563,"(opcional)"),sg()(),Sl(564,"p"),Jx(565,"Label da a\xE7\xE3o "),Sl(566,"code"),Jx(567,"cancel"),sg(),Jx(568,"."),sg()()(),Sl(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),Jx(573," save"),Wl(574,"br"),sg()()(),Sl(575,"td",18)(576,"code",25),Jx(577,"string"),sg()(),Sl(578,"td",21)(579,"em")(580,"strong"),Jx(581,"(opcional)"),sg()(),Sl(582,"p"),Jx(583,"Label da a\xE7\xE3o "),Sl(584,"code"),Jx(585,"save"),sg(),Jx(586,"."),sg()()(),Sl(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),Jx(591," saveNew"),Wl(592,"br"),sg()()(),Sl(593,"td",18)(594,"code",25),Jx(595,"string"),sg()(),Sl(596,"td",21)(597,"em")(598,"strong"),Jx(599,"(opcional)"),sg()(),Sl(600,"p"),Jx(601,"Label da a\xE7\xE3o "),Sl(602,"code"),Jx(603,"saveNew"),sg(),Jx(604,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-edit-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,se,ue,be,Ee],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[pL.forChild(ke),pL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoPageEditModule};