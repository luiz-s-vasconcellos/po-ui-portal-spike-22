import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,c5 as Ode,aW as Yp,ce as lNe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,bD as Mde,cz as Mz,cp as Nhe,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var pe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,i){r&1&&Gl(0,"po-page-edit",0);},dependencies:[lNe],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Edit Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-edit-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,pe],encapsulation:2})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}cancel(){this.action="Cancel";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle="";}save(){this.action="Save";}saveNew(){this.action="Save and new";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:false,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"po-page-edit",3),ht("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()})("p-save-new",function(){return i.saveNew()}),Tl(1,"div",4),Gl(2,"po-info",5),sg(),Gl(3,"po-divider"),Tl(4,"form")(5,"div",4)(6,"po-input",6),Ew("ngModelChange",function(a){return Ky(p),rN(i.title,a)||(i.title=a),Xy(a)}),sg(),t0(),Tl(7,"po-input",7),Ew("ngModelChange",function(a){return Ky(p),rN(i.subtitle,a)||(i.subtitle=a),Xy(a)}),sg(),t0(),Tl(8,"po-checkbox-group",8),Ew("ngModelChange",function(a){return Ky(p),rN(i.properties,a)||(i.properties=a),Xy(a)}),sg(),t0(),Tl(9,"po-radio-group",9),Ew("ngModelChange",function(a){return Ky(p),rN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),sg(),t0(),sg(),Gl(10,"po-divider"),Tl(11,"form",null,0)(13,"div",4)(14,"po-input",10),Ew("ngModelChange",function(a){return Ky(p),rN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Xy(a)}),sg(),t0(),sg()(),Tl(15,"form",null,1)(17,"div",4)(18,"po-input",11),Ew("ngModelChange",function(a){return Ky(p),rN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Xy(a)}),sg(),t0(),Tl(19,"po-input",12),Ew("ngModelChange",function(a){return Ky(p),rN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Xy(a)}),sg(),t0(),sg(),Tl(20,"div",4)(21,"po-button",13),ht("p-click",function(){return i.addBreadcrumbItem()}),sg()()(),Gl(22,"po-divider"),Tl(23,"form",null,2)(25,"div",4)(26,"po-input",14),Ew("ngModelChange",function(a){return Ky(p),rN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Xy(a)}),sg(),t0(),Tl(27,"po-input",15),Ew("ngModelChange",function(a){return Ky(p),rN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Xy(a)}),sg(),t0(),sg(),Tl(28,"div",4)(29,"po-button",16),ht("p-click",function(){return i.addBreadcrumbParam()}),sg()()(),Tl(30,"div",4)(31,"po-input",17),Ew("ngModelChange",function(a){return Ky(p),rN(i.literals,a)||(i.literals=a),Xy(a)}),ht("p-change",function(){return i.changeLiterals()}),sg(),t0(),sg(),Tl(32,"div",4)(33,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()()();}if(r&2){let p=Ox(16),s=Ox(24);tw("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-disable-submit",i.properties.includes("disableSubmit"))("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),Vp(2),tw("p-value",i.action),Vp(4),Dw("ngModel",i.title),r0(),Vp(),Dw("ngModel",i.subtitle),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),r0(),Vp(5),Dw("ngModel",i.breadcrumb.favorite),r0(),Vp(4),Dw("ngModel",i.breadcrumbItem.label),r0(),Vp(),Dw("ngModel",i.breadcrumbItem.link),r0(),Vp(2),tw("p-disabled",p.invalid),Vp(5),Dw("ngModel",i.breadcrumbParams.property),r0(),Vp(),Dw("ngModel",i.breadcrumbParams.value),r0(),Vp(2),tw("p-disabled",s.invalid),Vp(2),Dw("ngModel",i.literals),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,$he,lNe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Edit Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-edit
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-edit-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ce],encapsulation:2})}return o})();var xe=["formEditUser"],ge=(()=>{class o{route=f(wn);poDialog=f(Ode);poNotification=f(Yp);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize();}cancel(){this.initialize();}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635;}save(){this.poNotification.success("Save successfully");}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])});}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,i){if(r&1&&Yl(xe,7),r&2){let p;uo(p=fo())&&(i.formEditUser=p.first);}},standalone:false,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"po-page-edit",1),ht("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()}),Tl(1,"form",null,0)(3,"div",2)(4,"po-number",3),Ew("ngModelChange",function(a){return Ky(p),rN(i.userId,a)||(i.userId=a),Xy(a)}),sg(),t0(),Tl(5,"po-email",4),Ew("ngModelChange",function(a){return Ky(p),rN(i.email,a)||(i.email=a),Xy(a)}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(a){return Ky(p),rN(i.name,a)||(i.name=a),Xy(a)}),sg(),t0(),sg(),Tl(7,"div",2)(8,"po-input",6),Ew("ngModelChange",function(a){return Ky(p),rN(i.nickname,a)||(i.nickname=a),Xy(a)}),sg(),t0(),Tl(9,"po-datepicker",7),Ew("ngModelChange",function(a){return Ky(p),rN(i.birthDate,a)||(i.birthDate=a),Xy(a)}),sg(),t0(),Tl(10,"po-input",8),Ew("ngModelChange",function(a){return Ky(p),rN(i.genre,a)||(i.genre=a),Xy(a)}),sg(),t0(),sg(),Tl(11,"div",2)(12,"po-input",9),Ew("ngModelChange",function(a){return Ky(p),rN(i.nationality,a)||(i.nationality=a),Xy(a)}),sg(),t0(),Tl(13,"po-input",10),Ew("ngModelChange",function(a){return Ky(p),rN(i.placeOfBirth,a)||(i.placeOfBirth=a),Xy(a)}),sg(),t0(),Tl(14,"po-input",11),Ew("ngModelChange",function(a){return Ky(p),rN(i.graduation,a)||(i.graduation=a),Xy(a)}),sg(),t0(),sg(),Tl(15,"div",2)(16,"po-input",12),Ew("ngModelChange",function(a){return Ky(p),rN(i.fathersName,a)||(i.fathersName=a),Xy(a)}),sg(),t0(),Tl(17,"po-input",13),Ew("ngModelChange",function(a){return Ky(p),rN(i.mothersName,a)||(i.mothersName=a),Xy(a)}),sg(),t0(),sg()()();}if(r&2){let p=Ox(2);tw("p-breadcrumb",i.breadcrumb)("p-disable-submit",p.invalid),Vp(4),Dw("ngModel",i.userId),r0(),Vp(),Dw("ngModel",i.email),r0(),Vp(),Dw("ngModel",i.name),r0(),Vp(2),Dw("ngModel",i.nickname),r0(),Vp(),Dw("ngModel",i.birthDate),r0(),Vp(),Dw("ngModel",i.genre),r0(),Vp(2),Dw("ngModel",i.nationality),r0(),Vp(),Dw("ngModel",i.placeOfBirth),r0(),Vp(),Dw("ngModel",i.graduation),r0(),Vp(2),Dw("ngModel",i.fathersName),r0(),Vp(),Dw("ngModel",i.mothersName),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Mde,Mz,O3,Nhe,lNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Edit - User"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-edit
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-edit-user"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Be,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:false,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Tl(7,"code"),tN(8,"po-page-default"),sg(),tN(9,", "),Tl(10,"code"),tN(11,"po-page-detail"),sg(),tN(12,`,
`),Tl(13,"code"),tN(14,"po-page-edit"),sg(),tN(15,", "),Tl(16,"code"),tN(17,"po-page-list"),sg(),tN(18," e "),Tl(19,"code"),tN(20,"po-page-slide"),sg(),tN(21,"."),sg()(),Tl(22,"h3",3),tN(23,"Componente"),sg(),Tl(24,"h4",4)(25,"code",5),tN(26,"PoPageEditComponent"),sg()(),Tl(27,"div",2)(28,"p"),tN(29,"O componente "),Tl(30,"strong"),tN(31,"po-page-edit"),sg(),tN(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),sg(),Tl(33,"p"),tN(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),Tl(35,"code"),tN(36,"p-disable-submit"),sg(),tN(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),sg(),Tl(38,"h4"),tN(39,"Tokens customiz\xE1veis"),sg(),Tl(40,"blockquote")(41,"p"),tN(42,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(43,"a",6),tN(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(45,"."),sg()(),Tl(46,"table")(47,"thead")(48,"tr")(49,"th"),tN(50,"Propriedade"),sg(),Tl(51,"th"),tN(52,"Descri\xE7\xE3o"),sg(),Tl(53,"th"),tN(54,"Valor Padr\xE3o"),sg()()(),Tl(55,"tbody")(56,"tr")(57,"td")(58,"strong"),tN(59,"Header"),sg()(),Gl(60,"td")(61,"td"),sg(),Tl(62,"tr")(63,"td")(64,"code"),tN(65,"--padding"),sg()(),Tl(66,"td"),tN(67,"Espa\xE7amento do header"),sg(),Tl(68,"td")(69,"code"),tN(70,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(71,"tr")(72,"td")(73,"code"),tN(74,"--gap"),sg()(),Tl(75,"td"),tN(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(77,"td")(78,"code"),tN(79,"var(--spacing-md)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),tN(83,"--gap-actions"),sg()(),Tl(84,"td"),tN(85,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(86,"td")(87,"code"),tN(88,"var(--spacing-xs)"),sg()()(),Tl(89,"tr")(90,"td")(91,"code"),tN(92,"--font-family"),sg()(),Tl(93,"td"),tN(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(95,"td")(96,"code"),tN(97,"var(--font-family-theme)"),sg()()(),Tl(98,"tr")(99,"td")(100,"strong"),tN(101,"Content"),sg()(),Gl(102,"td")(103,"td"),sg(),Tl(104,"tr")(105,"td")(106,"code"),tN(107,"--padding-content"),sg()(),Tl(108,"td"),tN(109,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(110,"td")(111,"code"),tN(112,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(113,"div",7)(114,"h4",8),tN(115,"Seletor"),sg(),Tl(116,"pre",9),tN(117,`<po-page-edit
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
`),sg()(),Tl(118,"h4",10),tN(119,"Propriedades"),sg(),Tl(120,"table",11)(121,"tr",12)(122,"th",13),tN(123,"Nome"),sg(),Tl(124,"th",13),tN(125,"Tipo"),sg(),Tl(126,"th",13),tN(127,"Padr\xE3o"),sg(),Tl(128,"th",13),tN(129,"Descri\xE7\xE3o"),sg()(),Tl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),tN(134," p-breadcrumb"),Gl(135,"br"),sg()()(),Tl(136,"td",18)(137,"code",19),tN(138,"PoBreadcrumb"),sg()(),Tl(139,"td",20),tN(140,"-"),sg(),Tl(141,"td",21)(142,"em")(143,"strong"),tN(144,"(opcional)"),sg()(),Tl(145,"p"),tN(146,"Objeto com propriedades do breadcrumb."),sg()()(),Tl(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),tN(151," (p-cancel)"),Gl(152,"br"),sg()()(),Tl(153,"td",18)(154,"code",24),tN(155,"EventEmitter"),sg()(),Tl(156,"td",20),tN(157,"-"),sg(),Tl(158,"td",21)(159,"p"),tN(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),sg(),Tl(161,"pre")(162,"code"),tN(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),sg()(),Tl(164,"blockquote")(165,"p"),tN(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),tN(171," p-components-size"),Gl(172,"br"),sg()()(),Tl(173,"td",18)(174,"code",25),tN(175,"string"),sg()(),Tl(176,"td",20)(177,"p")(178,"code"),tN(179,"medium"),sg()()(),Tl(180,"td",21)(181,"em")(182,"strong"),tN(183,"(opcional)"),sg()(),Tl(184,"p"),tN(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(186,"ul")(187,"li")(188,"code"),tN(189,"small"),sg(),tN(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(191,"li")(192,"code"),tN(193,"medium"),sg(),tN(194,": aplica a medida medium de cada componente."),sg()(),Tl(195,"blockquote")(196,"p"),tN(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(198,"code"),tN(199,"medium"),sg(),tN(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(201,"a",26),tN(202,"po-theme"),sg(),tN(203,"."),sg()()()(),Tl(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),tN(208," p-disable-submit"),Gl(209,"br"),sg()()(),Tl(210,"td",18)(211,"code",27),tN(212,"boolean"),sg()(),Tl(213,"td",20),tN(214,"-"),sg(),Tl(215,"td",21)(216,"em")(217,"strong"),tN(218,"(opcional)"),sg()(),Tl(219,"p"),tN(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),sg()()(),Tl(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),tN(225," p-literals"),Gl(226,"br"),sg()()(),Tl(227,"td",18)(228,"code",28),tN(229,"PoPageEditLiterals"),sg()(),Tl(230,"td",20),tN(231,"-"),sg(),Tl(232,"td",21)(233,"em")(234,"strong"),tN(235,"(opcional)"),sg()(),Tl(236,"p"),tN(237,"Objeto com as literais usadas no "),Tl(238,"code"),tN(239,"po-page-edit"),sg(),tN(240,"."),sg(),Tl(241,"p"),tN(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(243,"pre")(244,"code"),tN(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),sg()(),Tl(246,"p"),tN(247,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(248,"pre")(249,"code"),tN(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),sg()(),Tl(251,"p"),tN(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(253,"pre")(254,"code"),tN(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),sg()(),Tl(256,"blockquote")(257,"p"),tN(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(259,"a",29)(260,"code"),tN(261,"PoI18nService"),sg()(),tN(262," ou do browser."),sg()()()(),Tl(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),tN(267," (p-save)"),Gl(268,"br"),sg()()(),Tl(269,"td",18)(270,"code",24),tN(271,"EventEmitter"),sg()(),Tl(272,"td",20),tN(273,"-"),sg(),Tl(274,"td",21)(275,"p"),tN(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),sg(),Tl(277,"pre")(278,"code"),tN(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),sg()(),Tl(280,"blockquote")(281,"p"),tN(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),tN(287," (p-save-new)"),Gl(288,"br"),sg()()(),Tl(289,"td",18)(290,"code",24),tN(291,"EventEmitter"),sg()(),Tl(292,"td",20),tN(293,"-"),sg(),Tl(294,"td",21)(295,"p"),tN(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),sg(),Tl(297,"pre")(298,"code"),tN(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),sg()(),Tl(300,"blockquote")(301,"p"),tN(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),sg()()()(),Tl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),tN(307," p-subtitle"),Gl(308,"br"),sg()()(),Tl(309,"td",18)(310,"code",25),tN(311,"string"),sg()(),Tl(312,"td",20),tN(313,"-"),sg(),Tl(314,"td",21)(315,"em")(316,"strong"),tN(317,"(opcional)"),sg()(),Tl(318,"p"),tN(319,"Subtitulo do Header da p\xE1gina."),sg(),Tl(320,"p"),tN(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(322,"code"),tN(323,"<b>"),sg(),tN(324," (negrito), "),Tl(325,"code"),tN(326,"<strong>"),sg(),tN(327," (negrito), "),Tl(328,"code"),tN(329,"<i>"),sg(),tN(330," (it\xE1lico), "),Tl(331,"code"),tN(332,"<em>"),sg(),tN(333,` (it\xE1lico) e
`),Tl(334,"code"),tN(335,"<u>"),sg(),tN(336," (sublinhado)."),sg(),Tl(337,"p"),tN(338,"Exemplo:"),sg(),Tl(339,"pre")(340,"code",30),tN(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),sg()(),Tl(342,"blockquote")(343,"p"),tN(344,"Requer que "),Tl(345,"code"),tN(346,"p-title"),sg(),tN(347," esteja definido."),sg()()()(),Tl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),tN(352," p-title"),Gl(353,"br"),sg()()(),Tl(354,"td",18)(355,"code",25),tN(356,"string"),sg()(),Tl(357,"td",20),tN(358,"-"),sg(),Tl(359,"td",21)(360,"p"),tN(361,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(362,"h3"),tN(363,"Interfaces"),sg(),Tl(364,"h4",31)(365,"code",5),tN(366,"PoBreadcrumbItem"),sg()(),Tl(367,"div",2)(368,"p"),tN(369,"Interface que define cada item do componente "),Tl(370,"strong"),tN(371,"po-breadcrumb"),sg(),tN(372,"."),sg()(),Tl(373,"h4",10),tN(374,"Propriedades"),sg(),Tl(375,"table",11)(376,"tr",12)(377,"th",13),tN(378,"Nome"),sg(),Tl(379,"th",13),tN(380,"Tipo"),sg(),Tl(381,"th",13),tN(382,"Descri\xE7\xE3o"),sg()(),Tl(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),tN(387," action"),Gl(388,"br"),sg()()(),Tl(389,"td",18)(390,"code",32),tN(391,"Function"),sg()(),Tl(392,"td",21)(393,"em")(394,"strong"),tN(395,"(opcional)"),sg()(),Tl(396,"p"),tN(397,"A\xE7\xE3o executada ao clicar no item."),sg(),Tl(398,"blockquote")(399,"p"),tN(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Tl(401,"em"),tN(402,"label"),sg(),tN(403," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Tl(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),tN(408," label"),Gl(409,"br"),sg()()(),Tl(410,"td",18)(411,"code",25),tN(412,"string"),sg()(),Tl(413,"td",21)(414,"p"),tN(415,"R\xF3tulo do item."),sg()()(),Tl(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),tN(420," link"),Gl(421,"br"),sg()()(),Tl(422,"td",18)(423,"code",25),tN(424,"string"),sg()(),Tl(425,"td",21)(426,"em")(427,"strong"),tN(428,"(opcional)"),sg()(),Tl(429,"p"),tN(430,"Url do item."),sg(),Tl(431,"blockquote")(432,"p"),tN(433,"Caso o item tamb\xE9m contenha uma "),Tl(434,"em"),tN(435,"action"),sg(),tN(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Tl(437,"em"),tN(438,"link"),sg(),tN(439,"."),sg()(),Tl(440,"blockquote")(441,"p"),tN(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(443,"strong")(444,"a",33),tN(445,"Veja um exemplo de como criar rotas aqui"),sg()(),tN(446,"."),sg()(),Tl(447,"blockquote")(448,"p"),tN(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Tl(450,"code"),tN(451,"p-favorite-service"),sg(),tN(452," consiga favoritar ou desfavoritar."),sg()()()()(),Tl(453,"h4",31)(454,"code",5),tN(455,"PoBreadcrumb"),sg()(),Tl(456,"div",2)(457,"p"),tN(458,"Interface que define o "),Tl(459,"code"),tN(460,"po-breadcrumb"),sg(),tN(461,"."),sg()(),Tl(462,"h4",10),tN(463,"Propriedades"),sg(),Tl(464,"table",11)(465,"tr",12)(466,"th",13),tN(467,"Nome"),sg(),Tl(468,"th",13),tN(469,"Tipo"),sg(),Tl(470,"th",13),tN(471,"Descri\xE7\xE3o"),sg()(),Tl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),tN(476," favorite"),Gl(477,"br"),sg()()(),Tl(478,"td",18)(479,"code",25),tN(480,"string"),sg()(),Tl(481,"td",21)(482,"em")(483,"strong"),tN(484,"(opcional)"),sg()(),Tl(485,"p"),tN(486,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Tl(487,"blockquote")(488,"p"),tN(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),Tl(490,"code"),tN(491,"p-favorite-service"),sg(),tN(492," do componente "),Tl(493,"code"),tN(494,"po-breadcrumb"),sg(),tN(495,"."),sg()()()(),Tl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),tN(500," items"),Gl(501,"br"),sg()()(),Tl(502,"td",18)(503,"code",34),tN(504,"Array<PoBreadcrumbItem>"),sg()(),Tl(505,"td",21)(506,"p"),tN(507,"Lista de itens do "),Tl(508,"em"),tN(509,"breadcrumb"),sg(),tN(510,"."),sg(),Tl(511,"p")(512,"strong"),tN(513,"Exemplo:"),sg()(),Tl(514,"pre")(515,"code"),tN(516,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Tl(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),tN(521," params"),Gl(522,"br"),sg()()(),Tl(523,"td",18)(524,"code",35),tN(525,"object"),sg()(),Tl(526,"td",21)(527,"em")(528,"strong"),tN(529,"(opcional)"),sg()(),Tl(530,"p"),tN(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Tl(532,"h4",31)(533,"code",5),tN(534,"PoPageEditLiterals"),sg()(),Tl(535,"div",2)(536,"p"),tN(537,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(538,"code"),tN(539,"po-page-edit"),sg(),tN(540,"."),sg()(),Tl(541,"h4",10),tN(542,"Propriedades"),sg(),Tl(543,"table",11)(544,"tr",12)(545,"th",13),tN(546,"Nome"),sg(),Tl(547,"th",13),tN(548,"Tipo"),sg(),Tl(549,"th",13),tN(550,"Descri\xE7\xE3o"),sg()(),Tl(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),tN(555," cancel"),Gl(556,"br"),sg()()(),Tl(557,"td",18)(558,"code",25),tN(559,"string"),sg()(),Tl(560,"td",21)(561,"em")(562,"strong"),tN(563,"(opcional)"),sg()(),Tl(564,"p"),tN(565,"Label da a\xE7\xE3o "),Tl(566,"code"),tN(567,"cancel"),sg(),tN(568,"."),sg()()(),Tl(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),tN(573," save"),Gl(574,"br"),sg()()(),Tl(575,"td",18)(576,"code",25),tN(577,"string"),sg()(),Tl(578,"td",21)(579,"em")(580,"strong"),tN(581,"(opcional)"),sg()(),Tl(582,"p"),tN(583,"Label da a\xE7\xE3o "),Tl(584,"code"),tN(585,"save"),sg(),tN(586,"."),sg()()(),Tl(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),tN(591," saveNew"),Gl(592,"br"),sg()()(),Tl(593,"td",18)(594,"code",25),tN(595,"string"),sg()(),Tl(596,"td",21)(597,"em")(598,"strong"),tN(599,"(opcional)"),sg()(),Tl(600,"p"),tN(601,"Label da a\xE7\xE3o "),Tl(602,"code"),tN(603,"saveNew"),sg(),tN(604,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-page-edit-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,se,ue,be,Ee],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoPageEditModule};