import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,I,c5 as Ode,_ as cNe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,bv as mb,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aJ as Uhe,bH as k3,c9 as $he,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,bF as Ow,b6 as Yo,b7 as E3,O as we,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Gl(0,"po-page-list",0);},dependencies:[cNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page List Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-list-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,_e,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,be],encapsulation:2})}return s})();var Se=(()=>{class s{poNotification=f(Yp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=Cx();Tl(0,"po-page-list",6),Gl(1,"po-divider")(2,"po-info",7),sg(),Gl(3,"po-divider"),Tl(4,"form",null,0)(6,"div",8)(7,"po-input",9),Ew("ngModelChange",function(a){return Ky(d),rN(n.action.action,a)||(n.action.action=a),Xy(a)}),sg(),t0(),Tl(8,"po-input",10),Ew("ngModelChange",function(a){return Ky(d),rN(n.action.label,a)||(n.action.label=a),Xy(a)}),sg(),t0(),Tl(9,"po-input",11),Ew("ngModelChange",function(a){return Ky(d),rN(n.action.url,a)||(n.action.url=a),Xy(a)}),sg(),t0(),Tl(10,"po-select",12),Ew("ngModelChange",function(a){return Ky(d),rN(n.action.type,a)||(n.action.type=a),Xy(a)}),sg(),t0(),Tl(11,"po-select",13),Ew("ngModelChange",function(a){return Ky(d),rN(n.action.icon,a)||(n.action.icon=a),Xy(a)}),sg(),t0(),Tl(12,"po-checkbox-group",14),Ew("ngModelChange",function(a){return Ky(d),rN(n.action,a)||(n.action=a),Xy(a)}),sg(),t0(),sg(),Tl(13,"div",8)(14,"po-button",15),ht("p-click",function(){return n.addAction(n.action)}),sg()()(),Gl(15,"po-divider"),Tl(16,"form",null,1)(18,"div",8)(19,"po-input",16),Ew("ngModelChange",function(a){return Ky(d),rN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Xy(a)}),sg(),t0(),sg()(),Tl(20,"form",null,2)(22,"div",8)(23,"po-input",17),Ew("ngModelChange",function(a){return Ky(d),rN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Xy(a)}),sg(),t0(),Tl(24,"po-input",18),Ew("ngModelChange",function(a){return Ky(d),rN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Xy(a)}),sg(),t0(),sg(),Tl(25,"div",8)(26,"po-button",19),ht("p-click",function(){return n.addBreadcrumbItem()}),sg()()(),Gl(27,"po-divider"),Tl(28,"form",null,3)(30,"div",8)(31,"po-input",20),Ew("ngModelChange",function(a){return Ky(d),rN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Xy(a)}),sg(),t0(),Tl(32,"po-input",21),Ew("ngModelChange",function(a){return Ky(d),rN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Xy(a)}),sg(),t0(),sg(),Tl(33,"div",8)(34,"po-button",22),ht("p-click",function(){return n.addBreadcrumbParam()}),sg()()(),Gl(35,"po-divider"),Tl(36,"div",8)(37,"po-input",23),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Xy(a)}),ht("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),sg(),t0(),Tl(38,"po-switch",24),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Xy(a)}),ht("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),sg(),t0(),sg(),Tl(39,"form",null,4)(41,"div",8)(42,"po-input",25),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Xy(a)}),sg(),t0(),Tl(43,"po-input",26),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Xy(a)}),sg(),t0(),sg(),Tl(44,"div",8)(45,"po-input",27),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerValue,a)||(n.disclaimerValue=a),Xy(a)}),sg(),t0(),Tl(46,"po-switch",28),Ew("ngModelChange",function(a){return Ky(d),rN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Xy(a)}),sg(),t0(),sg(),Tl(47,"div",8)(48,"po-button",29),ht("p-click",function(){return n.addDisclaimer()}),sg()()(),Gl(49,"po-divider"),Tl(50,"form",null,5)(52,"po-input",30),Ew("ngModelChange",function(a){return Ky(d),rN(n.title,a)||(n.title=a),Xy(a)}),sg(),t0(),Tl(53,"po-input",31),Ew("ngModelChange",function(a){return Ky(d),rN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),sg(),t0(),Tl(54,"po-input",32),Ew("ngModelChange",function(a){return Ky(d),rN(n.filter.placeholder,a)||(n.filter.placeholder=a),Xy(a)}),sg(),t0(),Tl(55,"po-input",33),Ew("ngModelChange",function(a){return Ky(d),rN(n.filter.width,a)||(n.filter.width=a),Xy(a)}),sg(),t0(),Tl(56,"po-input",34),Ew("ngModelChange",function(a){return Ky(d),rN(n.literals,a)||(n.literals=a),Xy(a)}),ht("p-change",function(){return n.changeLiterals()}),sg(),t0(),Tl(57,"po-radio-group",35),Ew("ngModelChange",function(a){return Ky(d),rN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),sg(),t0(),Tl(58,"div",8)(59,"po-button",36),ht("p-click",function(){return n.restore()}),sg()()();}if(r&2){let d=Ox(5),p=Ox(21),a=Ox(29),Le=Ox(40);tw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Vp(2),tw("p-value",n.filterModel),Vp(5),Dw("ngModel",n.action.action),r0(),Vp(),Dw("ngModel",n.action.label),r0(),Vp(),Dw("ngModel",n.action.url),r0(),Vp(),Dw("ngModel",n.action.type),tw("p-options",n.typeOptions),r0(),Vp(),Dw("ngModel",n.action.icon),tw("p-options",n.iconOptions),r0(),Vp(),Dw("ngModel",n.action),tw("p-options",n.actionOptions),r0(),Vp(2),tw("p-disabled",d.form.invalid),Vp(5),Dw("ngModel",n.breadcrumb.favorite),r0(),Vp(4),Dw("ngModel",n.breadcrumbItem.label),r0(),Vp(),Dw("ngModel",n.breadcrumbItem.link),r0(),Vp(2),tw("p-disabled",p.invalid),Vp(5),Dw("ngModel",n.breadcrumbParams.property),r0(),Vp(),Dw("ngModel",n.breadcrumbParams.value),r0(),Vp(2),tw("p-disabled",a.invalid),Vp(3),Dw("ngModel",n.disclaimerGroupTitle),r0(),Vp(),Dw("ngModel",n.disclaimerGroupHideRemoveAll),r0(),Vp(4),Dw("ngModel",n.disclaimerLabel),r0(),Vp(),Dw("ngModel",n.disclaimerProperty),r0(),Vp(2),Dw("ngModel",n.disclaimerValue),r0(),Vp(),Dw("ngModel",n.disclaimerHideClose),r0(),Vp(2),tw("p-disabled",Le.invalid),Vp(4),Dw("ngModel",n.title),r0(),Vp(),Dw("ngModel",n.subtitle),r0(),Vp(),Dw("ngModel",n.filter.placeholder),r0(),Vp(),Dw("ngModel",n.filter.width),r0(),Vp(),Dw("ngModel",n.literals),r0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),r0();}},dependencies:[nY,mb,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,Uhe,k3,$he,cNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page List Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
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
      class="po-lg-3 po-md-4"
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
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
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

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-list-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Te,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Yp);poDialog=f(Ode);router=f(wn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&Yl(ke,7)(Be,7),r&2){let d;uo(d=fo())&&(n.advancedFilterModal=d.first),uo(d=fo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=Cx();Tl(0,"po-page-list",3,0),Gl(2,"po-table",4),sg(),Tl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),Ew("ngModelChange",function(a){return Ky(d),rN(n.jobDescription,a)||(n.jobDescription=a),Xy(a)}),sg(),t0(),Tl(8,"po-checkbox-group",7),Ew("ngModelChange",function(a){return Ky(d),rN(n.status,a)||(n.status=a),Xy(a)}),sg(),t0(),sg()();}r&2&&(tw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Vp(2),tw("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Vp(),tw("p-primary-action",n.advancedFilterPrimaryAction),Vp(4),Dw("ngModel",n.jobDescription),tw("p-options",n.jobDescriptionOptions),r0(),Vp(),Dw("ngModel",n.status),tw("p-options",n.statusOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,C3,Ow,Yo,cNe,E3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page List - Hiring Processes"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),sg(),Tl(21,"label",6),tN(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-page-list-hiring-processes"),sg(),Gl(27,"hr")),r&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,je,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Pe],encapsulation:2})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Tl(7,"code"),tN(8,"po-page-default"),sg(),tN(9,", "),Tl(10,"code"),tN(11,"po-page-detail"),sg(),tN(12,`,
`),Tl(13,"code"),tN(14,"po-page-edit"),sg(),tN(15,", "),Tl(16,"code"),tN(17,"po-page-list"),sg(),tN(18," e "),Tl(19,"code"),tN(20,"po-page-slide"),sg(),tN(21,"."),sg()(),Tl(22,"h3",3),tN(23,"Componente"),sg(),Tl(24,"h4",4)(25,"code",5),tN(26,"PoPageListComponent"),sg()(),Tl(27,"div",2)(28,"p"),tN(29,"O componente "),Tl(30,"code"),tN(31,"po-page-list"),sg(),tN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),sg(),Tl(33,"p"),tN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Tl(35,"em"),tN(36,"click"),sg(),tN(37," do \xEDcone "),Tl(38,"a",6),tN(39,"an-magnifying-glass"),sg(),tN(40,`
quanto ao pressionar da tecla `),Tl(41,"em"),tN(42,"ENTER"),sg(),tN(43," quando o foco estiver no campo de pesquisa."),sg(),Tl(44,"p"),tN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Tl(46,"a",7)(47,"code"),tN(48,"po-disclaimer-group"),sg()(),tN(49,"."),sg(),Tl(50,"h4"),tN(51,"Tokens customiz\xE1veis"),sg(),Tl(52,"blockquote")(53,"p"),tN(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(55,"a",8),tN(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(57,"."),sg()(),Tl(58,"table")(59,"thead")(60,"tr")(61,"th"),tN(62,"Propriedade"),sg(),Tl(63,"th"),tN(64,"Descri\xE7\xE3o"),sg(),Tl(65,"th"),tN(66,"Valor Padr\xE3o"),sg()()(),Tl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),tN(71,"Header"),sg()(),Gl(72,"td")(73,"td"),sg(),Tl(74,"tr")(75,"td")(76,"code"),tN(77,"--padding"),sg()(),Tl(78,"td"),tN(79,"Espa\xE7amento do header"),sg(),Tl(80,"td")(81,"code"),tN(82,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--gap"),sg()(),Tl(87,"td"),tN(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--spacing-md)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--gap-actions"),sg()(),Tl(96,"td"),tN(97,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--spacing-xs)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--font-family"),sg()(),Tl(105,"td"),tN(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--font-family-theme)"),sg()()(),Tl(110,"tr")(111,"td")(112,"strong"),tN(113,"Content"),sg()(),Gl(114,"td")(115,"td"),sg(),Tl(116,"tr")(117,"td")(118,"code"),tN(119,"--padding-content"),sg()(),Tl(120,"td"),tN(121,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(122,"td")(123,"code"),tN(124,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(125,"div",9)(126,"h4",10),tN(127,"Seletor"),sg(),Tl(128,"pre",11),tN(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),sg()(),Tl(130,"h4",12),tN(131,"Propriedades"),sg(),Tl(132,"table",13)(133,"tr",14)(134,"th",15),tN(135,"Nome"),sg(),Tl(136,"th",15),tN(137,"Tipo"),sg(),Tl(138,"th",15),tN(139,"Padr\xE3o"),sg(),Tl(140,"th",15),tN(141,"Descri\xE7\xE3o"),sg()(),Tl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),tN(146," p-actions"),Gl(147,"br"),sg()()(),Tl(148,"td",20)(149,"code",21),tN(150,"Array<PoPageAction>"),sg()(),Tl(151,"td",22),tN(152,"-"),sg(),Tl(153,"td",23)(154,"em")(155,"strong"),tN(156,"(opcional)"),sg()(),Tl(157,"p"),tN(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Tl(159,"code"),tN(160,"PoPageAction"),sg(),tN(161,"."),sg()()(),Tl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),tN(166," p-breadcrumb"),Gl(167,"br"),sg()()(),Tl(168,"td",20)(169,"code",24),tN(170,"PoBreadcrumb"),sg()(),Tl(171,"td",22),tN(172,"-"),sg(),Tl(173,"td",23)(174,"em")(175,"strong"),tN(176,"(opcional)"),sg()(),Tl(177,"p"),tN(178,"Objeto que implementa as propriedades da interface "),Tl(179,"code"),tN(180,"PoBreadcrumb"),sg(),tN(181,"."),sg()()(),Tl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),tN(186," p-components-size"),Gl(187,"br"),sg()()(),Tl(188,"td",20)(189,"code",25),tN(190,"string"),sg()(),Tl(191,"td",22)(192,"p")(193,"code"),tN(194,"medium"),sg()()(),Tl(195,"td",23)(196,"em")(197,"strong"),tN(198,"(opcional)"),sg()(),Tl(199,"p"),tN(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(201,"ul")(202,"li")(203,"code"),tN(204,"small"),sg(),tN(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(206,"li")(207,"code"),tN(208,"medium"),sg(),tN(209,": aplica a medida medium de cada componente."),sg()(),Tl(210,"blockquote")(211,"p"),tN(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(213,"code"),tN(214,"medium"),sg(),tN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(216,"a",26),tN(217,"po-theme"),sg(),tN(218,"."),sg()()()(),Tl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),tN(223," p-disclaimer-group"),Gl(224,"br"),sg()()(),Tl(225,"td",20)(226,"code",27),tN(227,"PoDisclaimerGroup"),sg()(),Tl(228,"td",22),tN(229,"-"),sg(),Tl(230,"td",23)(231,"em")(232,"strong"),tN(233,"(opcional)"),sg()(),Tl(234,"p"),tN(235,"Objeto que implementa as propriedades da interface "),Tl(236,"code"),tN(237,"PoDisclaimerGroup"),sg(),tN(238,"."),sg()()(),Tl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),tN(243," p-filter"),Gl(244,"br"),sg()()(),Tl(245,"td",20)(246,"code",28),tN(247,"PoPageFilter"),sg()(),Tl(248,"td",22),tN(249,"-"),sg(),Tl(250,"td",23)(251,"p"),tN(252,"Objeto que implementa as propriedades da interface "),Tl(253,"code"),tN(254,"PoPageFilter"),sg(),tN(255,"."),sg()()(),Tl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),tN(260," p-literals"),Gl(261,"br"),sg()()(),Tl(262,"td",20)(263,"code",29),tN(264,"PoPageListLiterals"),sg()(),Tl(265,"td",22),tN(266,"-"),sg(),Tl(267,"td",23)(268,"em")(269,"strong"),tN(270,"(opcional)"),sg()(),Tl(271,"p"),tN(272,"Objeto com as literais usadas no "),Tl(273,"code"),tN(274,"po-page-list"),sg(),tN(275,"."),sg(),Tl(276,"p"),tN(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(278,"pre")(279,"code"),tN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),sg()(),Tl(281,"p"),tN(282,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(283,"pre")(284,"code"),tN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),sg()(),Tl(286,"p"),tN(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(288,"pre")(289,"code"),tN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),sg()(),Tl(291,"blockquote")(292,"p"),tN(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Tl(294,"a",30)(295,"code"),tN(296,"PoI18nService"),sg()(),tN(297," ou "),Tl(298,"em"),tN(299,"browser"),sg(),tN(300,"."),sg()()()(),Tl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),tN(305," p-quick-search-value"),Gl(306,"br"),sg()()(),Tl(307,"td",20)(308,"code",25),tN(309,"string"),sg()(),Tl(310,"td",22),tN(311,"-"),sg(),Tl(312,"td",23)(313,"em")(314,"strong"),tN(315,"(opcional)"),sg()(),Tl(316,"p"),tN(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),sg()()(),Tl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),tN(322," p-subtitle"),Gl(323,"br"),sg()()(),Tl(324,"td",20)(325,"code",25),tN(326,"string"),sg()(),Tl(327,"td",22),tN(328,"-"),sg(),Tl(329,"td",23)(330,"em")(331,"strong"),tN(332,"(opcional)"),sg()(),Tl(333,"p"),tN(334,"Subtitulo do Header da p\xE1gina."),sg(),Tl(335,"p"),tN(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(337,"code"),tN(338,"<b>"),sg(),tN(339," (negrito), "),Tl(340,"code"),tN(341,"<strong>"),sg(),tN(342," (negrito), "),Tl(343,"code"),tN(344,"<i>"),sg(),tN(345," (it\xE1lico), "),Tl(346,"code"),tN(347,"<em>"),sg(),tN(348,` (it\xE1lico) e
`),Tl(349,"code"),tN(350,"<u>"),sg(),tN(351," (sublinhado)."),sg(),Tl(352,"p"),tN(353,"Exemplo:"),sg(),Tl(354,"pre")(355,"code",31),tN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),sg()(),Tl(357,"blockquote")(358,"p"),tN(359,"Requer que "),Tl(360,"code"),tN(361,"p-title"),sg(),tN(362," esteja definido."),sg()()()(),Tl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),tN(367," p-title"),Gl(368,"br"),sg()()(),Tl(369,"td",20)(370,"code",25),tN(371,"string"),sg()(),Tl(372,"td",22),tN(373,"-"),sg(),Tl(374,"td",23)(375,"p"),tN(376,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(377,"h3",12),tN(378,"M\xE9todos"),sg(),Tl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),tN(385," clearInputSearch "),sg()()()()(),Tl(386,"tr",23)(387,"td",23)(388,"p"),tN(389,"Limpa o campo de pesquisa."),sg()()()(),Gl(390,"br"),Tl(391,"h3"),tN(392,"Interfaces"),sg(),Tl(393,"h4",34)(394,"code",5),tN(395,"PoBreadcrumbItem"),sg()(),Tl(396,"div",2)(397,"p"),tN(398,"Interface que define cada item do componente "),Tl(399,"strong"),tN(400,"po-breadcrumb"),sg(),tN(401,"."),sg()(),Tl(402,"h4",12),tN(403,"Propriedades"),sg(),Tl(404,"table",13)(405,"tr",14)(406,"th",15),tN(407,"Nome"),sg(),Tl(408,"th",15),tN(409,"Tipo"),sg(),Tl(410,"th",15),tN(411,"Descri\xE7\xE3o"),sg()(),Tl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),tN(416," action"),Gl(417,"br"),sg()()(),Tl(418,"td",20)(419,"code",35),tN(420,"Function"),sg()(),Tl(421,"td",23)(422,"em")(423,"strong"),tN(424,"(opcional)"),sg()(),Tl(425,"p"),tN(426,"A\xE7\xE3o executada ao clicar no item."),sg(),Tl(427,"blockquote")(428,"p"),tN(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Tl(430,"em"),tN(431,"label"),sg(),tN(432," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Tl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),tN(437," label"),Gl(438,"br"),sg()()(),Tl(439,"td",20)(440,"code",25),tN(441,"string"),sg()(),Tl(442,"td",23)(443,"p"),tN(444,"R\xF3tulo do item."),sg()()(),Tl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),tN(449," link"),Gl(450,"br"),sg()()(),Tl(451,"td",20)(452,"code",25),tN(453,"string"),sg()(),Tl(454,"td",23)(455,"em")(456,"strong"),tN(457,"(opcional)"),sg()(),Tl(458,"p"),tN(459,"Url do item."),sg(),Tl(460,"blockquote")(461,"p"),tN(462,"Caso o item tamb\xE9m contenha uma "),Tl(463,"em"),tN(464,"action"),sg(),tN(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Tl(466,"em"),tN(467,"link"),sg(),tN(468,"."),sg()(),Tl(469,"blockquote")(470,"p"),tN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(472,"strong")(473,"a",36),tN(474,"Veja um exemplo de como criar rotas aqui"),sg()(),tN(475,"."),sg()(),Tl(476,"blockquote")(477,"p"),tN(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Tl(479,"code"),tN(480,"p-favorite-service"),sg(),tN(481," consiga favoritar ou desfavoritar."),sg()()()()(),Tl(482,"h4",34)(483,"code",5),tN(484,"PoBreadcrumb"),sg()(),Tl(485,"div",2)(486,"p"),tN(487,"Interface que define o "),Tl(488,"code"),tN(489,"po-breadcrumb"),sg(),tN(490,"."),sg()(),Tl(491,"h4",12),tN(492,"Propriedades"),sg(),Tl(493,"table",13)(494,"tr",14)(495,"th",15),tN(496,"Nome"),sg(),Tl(497,"th",15),tN(498,"Tipo"),sg(),Tl(499,"th",15),tN(500,"Descri\xE7\xE3o"),sg()(),Tl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),tN(505," favorite"),Gl(506,"br"),sg()()(),Tl(507,"td",20)(508,"code",25),tN(509,"string"),sg()(),Tl(510,"td",23)(511,"em")(512,"strong"),tN(513,"(opcional)"),sg()(),Tl(514,"p"),tN(515,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Tl(516,"blockquote")(517,"p"),tN(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Tl(519,"code"),tN(520,"p-favorite-service"),sg(),tN(521," do componente "),Tl(522,"code"),tN(523,"po-breadcrumb"),sg(),tN(524,"."),sg()()()(),Tl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),tN(529," items"),Gl(530,"br"),sg()()(),Tl(531,"td",20)(532,"code",37),tN(533,"Array<PoBreadcrumbItem>"),sg()(),Tl(534,"td",23)(535,"p"),tN(536,"Lista de itens do "),Tl(537,"em"),tN(538,"breadcrumb"),sg(),tN(539,"."),sg(),Tl(540,"p")(541,"strong"),tN(542,"Exemplo:"),sg()(),Tl(543,"pre")(544,"code"),tN(545,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Tl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),tN(550," params"),Gl(551,"br"),sg()()(),Tl(552,"td",20)(553,"code",38),tN(554,"object"),sg()(),Tl(555,"td",23)(556,"em")(557,"strong"),tN(558,"(opcional)"),sg()(),Tl(559,"p"),tN(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Tl(561,"h4",34)(562,"code",5),tN(563,"PoDisclaimer"),sg()(),Tl(564,"div",2)(565,"p"),tN(566,"Interface que representa o objeto "),Tl(567,"code"),tN(568,"po-disclaimer"),sg(),tN(569,"."),sg()(),Tl(570,"h4",12),tN(571,"Propriedades"),sg(),Tl(572,"table",13)(573,"tr",14)(574,"th",15),tN(575,"Nome"),sg(),Tl(576,"th",15),tN(577,"Tipo"),sg(),Tl(578,"th",15),tN(579,"Descri\xE7\xE3o"),sg()(),Tl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),tN(584," hideClose"),Gl(585,"br"),sg()()(),Tl(586,"td",20)(587,"code",39),tN(588,"boolean"),sg()(),Tl(589,"td",23)(590,"em")(591,"strong"),tN(592,"(opcional)"),sg()(),Tl(593,"p"),tN(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Tl(595,"em"),tN(596,"disclaimer"),sg(),tN(597,"."),sg()()(),Tl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),tN(602," label"),Gl(603,"br"),sg()()(),Tl(604,"td",20)(605,"code",25),tN(606,"string"),sg()(),Tl(607,"td",23)(608,"em")(609,"strong"),tN(610,"(opcional)"),sg()(),Tl(611,"p"),tN(612,"Texto de exibi\xE7\xE3o do objeto."),sg()()(),Tl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),tN(617," property"),Gl(618,"br"),sg()()(),Tl(619,"td",20)(620,"code",25),tN(621,"string"),sg()(),Tl(622,"td",23)(623,"em")(624,"strong"),tN(625,"(opcional)"),sg()(),Tl(626,"p"),tN(627,"Nome da propriedade vinculada ao objeto "),Tl(628,"em"),tN(629,"disclaimer"),sg(),tN(630,"."),sg()()(),Tl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),tN(635," value"),Gl(636,"br"),sg()()(),Tl(637,"td",20)(638,"code",40),tN(639,"any"),sg()(),Tl(640,"td",23)(641,"p"),tN(642,"Valor do objeto."),sg()()()(),Tl(643,"h4",34)(644,"code",5),tN(645,"PoDisclaimerGroupRemoveAction"),sg()(),Tl(646,"div",2)(647,"p"),tN(648,"Estrutura do objeto representando o estado dos "),Tl(649,"em"),tN(650,"disclaimers"),sg(),tN(651," ap\xF3s a remo\xE7\xE3o."),sg()(),Tl(652,"h4",12),tN(653,"Propriedades"),sg(),Tl(654,"table",13)(655,"tr",14)(656,"th",15),tN(657,"Nome"),sg(),Tl(658,"th",15),tN(659,"Tipo"),sg(),Tl(660,"th",15),tN(661,"Descri\xE7\xE3o"),sg()(),Tl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),tN(666," currentDisclaimers"),Gl(667,"br"),sg()()(),Tl(668,"td",20)(669,"code",41),tN(670,"Array<PoDisclaimer>"),sg()(),Tl(671,"td",23)(672,"p"),tN(673,"Lista com os "),Tl(674,"em"),tN(675,"disclaimers"),sg(),tN(676," atuais (restantes)."),sg()()(),Tl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),tN(681," removedDisclaimer"),Gl(682,"br"),sg()()(),Tl(683,"td",20)(684,"code",42),tN(685,"PoDisclaimer"),sg()(),Tl(686,"td",23)(687,"p")(688,"em"),tN(689,"Disclaimer"),sg(),tN(690," que foi removido."),sg()()()(),Tl(691,"h4",34)(692,"code",5),tN(693,"PoDisclaimerGroup"),sg()(),Tl(694,"div",2)(695,"p"),tN(696,"Interface que representa o objeto "),Tl(697,"code"),tN(698,"po-disclaimer-group"),sg(),tN(699,"."),sg()(),Tl(700,"h4",12),tN(701,"Propriedades"),sg(),Tl(702,"table",13)(703,"tr",14)(704,"th",15),tN(705,"Nome"),sg(),Tl(706,"th",15),tN(707,"Tipo"),sg(),Tl(708,"th",15),tN(709,"Descri\xE7\xE3o"),sg()(),Tl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),tN(714," change"),Gl(715,"br"),sg()()(),Tl(716,"td",20)(717,"code",35),tN(718,"Function"),sg()(),Tl(719,"td",23)(720,"em")(721,"strong"),tN(722,"(opcional)"),sg()(),Tl(723,"p"),tN(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Tl(725,"em"),tN(726,"disclaimers"),sg(),tN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Tl(728,"em"),tN(729,"disclaimers"),sg(),tN(730,"."),sg()()(),Tl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),tN(735," disclaimers"),Gl(736,"br"),sg()()(),Tl(737,"td",20)(738,"code",41),tN(739,"Array<PoDisclaimer>"),sg()(),Tl(740,"td",23)(741,"p"),tN(742,"Lista de "),Tl(743,"em"),tN(744,"disclaimers"),sg(),tN(745,"."),sg(),Tl(746,"p"),tN(747,"Exemplo:"),sg(),Tl(748,"pre")(749,"code"),tN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),sg()(),Tl(751,"p"),tN(752,"Para que a lista de "),Tl(753,"em"),tN(754,"disclaimers"),sg(),tN(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Tl(756,"code"),tN(757,"PoDisclaimer"),sg(),tN(758,"."),sg(),Tl(759,"p"),tN(760,"Exemplo:"),sg(),Tl(761,"pre")(762,"code"),tN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),sg()()()(),Tl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),tN(768," hideRemoveAll"),Gl(769,"br"),sg()()(),Tl(770,"td",20)(771,"code",39),tN(772,"boolean"),sg()(),Tl(773,"td",23)(774,"em")(775,"strong"),tN(776,"(opcional)"),sg()(),Tl(777,"p"),tN(778,"Oculta o bot\xE3o para remover todos os "),Tl(779,"em"),tN(780,"disclaimers"),sg(),tN(781," do grupo."),sg(),Tl(782,"blockquote")(783,"p"),tN(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Tl(785,"em"),tN(786,"disclaimers"),sg(),tN(787," com a op\xE7\xE3o "),Tl(788,"code"),tN(789,"hideClose"),sg(),tN(790," habilitada."),sg()()()(),Tl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),tN(795," remove"),Gl(796,"br"),sg()()(),Tl(797,"td",20)(798,"code",35),tN(799,"Function"),sg()(),Tl(800,"td",23)(801,"em")(802,"strong"),tN(803,"(opcional)"),sg()(),Tl(804,"p"),tN(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Tl(806,"em"),tN(807,"disclaimer"),sg(),tN(808,` for removido da lista de
`),Tl(809,"em"),tN(810,"disclaimers"),sg(),tN(811," pelo usu\xE1rio."),sg(),Tl(812,"p"),tN(813,"Recebe como par\xE2metro um objeto conforme a interface "),Tl(814,"code"),tN(815,"PoDisclaimerGroupRemoveAction"),sg(),tN(816,"."),sg()()(),Tl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),tN(821," removeAll"),Gl(822,"br"),sg()()(),Tl(823,"td",20)(824,"code",35),tN(825,"Function"),sg()(),Tl(826,"td",23)(827,"em")(828,"strong"),tN(829,"(opcional)"),sg()(),Tl(830,"p"),tN(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Tl(832,"em"),tN(833,"disclaimers"),sg(),tN(834," forem removidos da lista de "),Tl(835,"em"),tN(836,"disclaimers"),sg(),tN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),sg(),Tl(838,"p"),tN(839,"Recebe como par\xE2metro uma lista contendo todos os "),Tl(840,"code"),tN(841,"disclaimers"),sg(),tN(842," removidos."),sg()()(),Tl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),tN(847," title"),Gl(848,"br"),sg()()(),Tl(849,"td",20)(850,"code",25),tN(851,"string"),sg()(),Tl(852,"td",23)(853,"em")(854,"strong"),tN(855,"(opcional)"),sg()(),Tl(856,"p"),tN(857,"T\xEDtulo do grupo de "),Tl(858,"em"),tN(859,"disclaimers"),sg(),tN(860,"."),sg()()()(),Tl(861,"h4",34)(862,"code",5),tN(863,"PoPageAction"),sg()(),Tl(864,"div",2)(865,"p"),tN(866,"Interface para as a\xE7\xF5es dos componentes "),Tl(867,"code"),tN(868,"po-page-default"),sg(),tN(869," e "),Tl(870,"code"),tN(871,"po-page-list"),sg(),tN(872,"."),sg(),Tl(873,"p"),tN(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Tl(875,"em"),tN(876,"dropdown"),sg(),tN(877,`,
conforme o `),Tl(878,"code"),tN(879,"PoPageActionsLayout"),sg(),tN(880," e o tamanho da tela."),sg(),Tl(881,"blockquote")(882,"p"),tN(883,"As propriedades "),Tl(884,"code"),tN(885,"separator"),sg(),tN(886,", "),Tl(887,"code"),tN(888,"selected"),sg(),tN(889," e "),Tl(890,"code"),tN(891,"subItems"),sg(),tN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Tl(893,"em"),tN(894,"dropdown"),sg(),tN(895,"."),sg()()(),Tl(896,"h4",12),tN(897,"Propriedades"),sg(),Tl(898,"table",13)(899,"tr",14)(900,"th",15),tN(901,"Nome"),sg(),Tl(902,"th",15),tN(903,"Tipo"),sg(),Tl(904,"th",15),tN(905,"Descri\xE7\xE3o"),sg()(),Tl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),tN(910," action"),Gl(911,"br"),sg()()(),Tl(912,"td",20)(913,"code",35),tN(914,"Function"),sg()(),Tl(915,"td",23)(916,"em")(917,"strong"),tN(918,"(opcional)"),sg()(),Tl(919,"p"),tN(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(921,"p"),tN(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(923,"code"),tN(924,"subItems"),sg(),tN(925,"."),sg(),Tl(926,"blockquote")(927,"p"),tN(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(929,"em"),tN(930,"bind"),sg(),tN(931,`:
`),Tl(932,"code"),tN(933,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),tN(938," disabled"),Gl(939,"br"),sg()()(),Tl(940,"td",20)(941,"code",39),tN(942,"boolean "),sg(),Tl(943,"code",35),tN(944," Function"),sg()(),Tl(945,"td",23)(946,"em")(947,"strong"),tN(948,"(opcional)"),sg()(),Tl(949,"p"),tN(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),tN(955," icon"),Gl(956,"br"),sg()()(),Tl(957,"td",20)(958,"code",25),tN(959,"string "),sg(),Tl(960,"code",43),tN(961," TemplateRef<void>"),sg()(),Tl(962,"td",23)(963,"em")(964,"strong"),tN(965,"(opcional)"),sg()(),Tl(966,"p"),tN(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(968,"p"),tN(969,"Aceita \xEDcones da "),Tl(970,"a",6),tN(971,"Biblioteca de \xEDcones"),sg(),tN(972,`, fontes externas (ex: Font Awesome)
ou um `),Tl(973,"code"),tN(974,"TemplateRef"),sg(),tN(975," para \xEDcones customizados."),sg(),Tl(976,"pre")(977,"code"),tN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),tN(983," kind"),Gl(984,"br"),sg()()(),Tl(985,"td",20)(986,"code",25),tN(987,"string"),sg()(),Tl(988,"td",23)(989,"em")(990,"strong"),tN(991,"(opcional)"),sg()(),Tl(992,"p"),tN(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Tl(994,"em"),tN(995,"dropdown"),sg(),tN(996,"."),sg(),Tl(997,"p"),tN(998,"Valores permitidos:"),sg(),Tl(999,"ul")(1e3,"li")(1001,"code"),tN(1002,"primary"),sg(),tN(1003,": bot\xE3o com maior destaque visual."),sg(),Tl(1004,"li")(1005,"code"),tN(1006,"secondary"),sg(),tN(1007,": estilo padr\xE3o."),sg()(),Tl(1008,"blockquote")(1009,"p"),tN(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),sg()(),Tl(1011,"blockquote")(1012,"p"),tN(1013,"Somente uma a\xE7\xE3o pode ter "),Tl(1014,"code"),tN(1015,"kind"),sg(),tN(1016," igual a "),Tl(1017,"code"),tN(1018,"primary"),sg(),tN(1019,". Caso mais de uma defina "),Tl(1020,"code"),tN(1021,"primary"),sg(),tN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Tl(1023,"code"),tN(1024,"secondary"),sg(),tN(1025,"."),sg()(),Tl(1026,"blockquote")(1027,"p"),tN(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Tl(1029,"code"),tN(1030,"PoPageActionsLayout"),sg(),tN(1031,"."),sg()()()(),Tl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),tN(1036," label"),Gl(1037,"br"),sg()()(),Tl(1038,"td",20)(1039,"code",25),tN(1040,"string"),sg()(),Tl(1041,"td",23)(1042,"p"),tN(1043,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(1044,"p"),tN(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1046,"code"),tN(1047,"subItems"),sg(),tN(1048,"."),sg()()(),Tl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),tN(1053," selected"),Gl(1054,"br"),sg()()(),Tl(1055,"td",20)(1056,"code",39),tN(1057,"boolean"),sg()(),Tl(1058,"td",23)(1059,"em")(1060,"strong"),tN(1061,"(opcional)"),sg()(),Tl(1062,"p"),tN(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),tN(1068," separator"),Gl(1069,"br"),sg()()(),Tl(1070,"td",20)(1071,"code",39),tN(1072,"boolean"),sg()(),Tl(1073,"td",23)(1074,"em")(1075,"strong"),tN(1076,"(opcional)"),sg()(),Tl(1077,"p"),tN(1078,"Atribui uma linha separadora acima do item."),sg()()(),Tl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),tN(1083," subItems"),Gl(1084,"br"),sg()()(),Tl(1085,"td",20)(1086,"code",44),tN(1087,"Array<PoPopupAction>"),sg()(),Tl(1088,"td",23)(1089,"em")(1090,"strong"),tN(1091,"(opcional)"),sg()(),Tl(1092,"p"),tN(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(1094,"p"),tN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(1096,"blockquote")(1097,"p"),tN(1098,"As propriedades "),Tl(1099,"code"),tN(1100,"disabled"),sg(),tN(1101,", "),Tl(1102,"code"),tN(1103,"type"),sg(),tN(1104," e "),Tl(1105,"code"),tN(1106,"visible"),sg(),tN(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(1108,"blockquote")(1109,"p"),tN(1110,"Quando "),Tl(1111,"code"),tN(1112,"url"),sg(),tN(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(1114,"blockquote")(1115,"p"),tN(1116,"Em subn\xEDveis aninhados, o "),Tl(1117,"code"),tN(1118,"icon"),sg(),tN(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),tN(1124," type"),Gl(1125,"br"),sg()()(),Tl(1126,"td",20)(1127,"code",25),tN(1128,"string"),sg()(),Tl(1129,"td",23)(1130,"em")(1131,"strong"),tN(1132,"(opcional)"),sg()(),Tl(1133,"p"),tN(1134,"Define a cor do item."),sg(),Tl(1135,"p"),tN(1136,"Valores v\xE1lidos:"),sg(),Tl(1137,"ul")(1138,"li")(1139,"code"),tN(1140,"default"),sg()(),Tl(1141,"li")(1142,"code"),tN(1143,"danger"),sg()()()()(),Tl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),tN(1148," url"),Gl(1149,"br"),sg()()(),Tl(1150,"td",20)(1151,"code",25),tN(1152,"string"),sg()(),Tl(1153,"td",23)(1154,"em")(1155,"strong"),tN(1156,"(opcional)"),sg()(),Tl(1157,"p"),tN(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(1159,"p"),tN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1161,"code"),tN(1162,"url"),sg(),tN(1163," \xE9 informada em um agrupador, o clique "),Tl(1164,"strong"),tN(1165,"n\xE3o abrir\xE1 os subitens"),sg(),tN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(1167,"blockquote")(1168,"p"),tN(1169,"Quando informada, tem prioridade sobre a propriedade "),Tl(1170,"code"),tN(1171,"action"),sg(),tN(1172,"."),sg()()()(),Tl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),tN(1177," visible"),Gl(1178,"br"),sg()()(),Tl(1179,"td",20)(1180,"code",39),tN(1181,"boolean "),sg(),Tl(1182,"code",35),tN(1183," Function"),sg()(),Tl(1184,"td",23)(1185,"em")(1186,"strong"),tN(1187,"(opcional)"),sg()(),Tl(1188,"p"),tN(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(1190,"h4",34)(1191,"code",5),tN(1192,"PoPageFilter"),sg()(),Tl(1193,"div",2)(1194,"p"),tN(1195,"Interface para o atributo "),Tl(1196,"code"),tN(1197,"filter"),sg(),tN(1198," do componente "),Tl(1199,"code"),tN(1200,"po-page-list"),sg(),tN(1201,"."),sg()(),Tl(1202,"h4",12),tN(1203,"Propriedades"),sg(),Tl(1204,"table",13)(1205,"tr",14)(1206,"th",15),tN(1207,"Nome"),sg(),Tl(1208,"th",15),tN(1209,"Tipo"),sg(),Tl(1210,"th",15),tN(1211,"Descri\xE7\xE3o"),sg()(),Tl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),tN(1216," action"),Gl(1217,"br"),sg()()(),Tl(1218,"td",20)(1219,"code",35),tN(1220,"Function"),sg()(),Tl(1221,"td",23)(1222,"em")(1223,"strong"),tN(1224,"(opcional)"),sg()(),Tl(1225,"p"),tN(1226,"A\xE7\xE3o a ser executada."),sg()()(),Tl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),tN(1231," advancedAction"),Gl(1232,"br"),sg()()(),Tl(1233,"td",20)(1234,"code",35),tN(1235,"Function"),sg()(),Tl(1236,"td",23)(1237,"em")(1238,"strong"),tN(1239,"(opcional)"),sg()(),Tl(1240,"p"),tN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Tl(1242,"em"),tN(1243,"click"),sg(),tN(1244," atrav\xE9s do r\xF3tulo "),Tl(1245,"strong"),tN(1246,"Busca Avan\xE7ada"),sg(),tN(1247,"."),sg()()(),Tl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),tN(1252," placeholder"),Gl(1253,"br"),sg()()(),Tl(1254,"td",20)(1255,"code",25),tN(1256,"string"),sg()(),Tl(1257,"td",23)(1258,"em")(1259,"strong"),tN(1260,"(opcional)"),sg()(),Tl(1261,"p"),tN(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),sg()()(),Tl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),tN(1267," width"),Gl(1268,"br"),sg()()(),Tl(1269,"td",20)(1270,"code",45),tN(1271,"number"),sg()(),Tl(1272,"td",23)(1273,"em")(1274,"strong"),tN(1275,"(opcional)"),sg()(),Tl(1276,"p"),tN(1277,"Tamanho do filtro em tela, utilizando o "),Tl(1278,"em"),tN(1279,"Grid System"),sg(),tN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),sg()()()(),Tl(1281,"h4",34)(1282,"code",5),tN(1283,"PoPageListLiterals"),sg()(),Tl(1284,"div",2)(1285,"p"),tN(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1287,"code"),tN(1288,"po-page-list"),sg(),tN(1289,"."),sg()(),Tl(1290,"h4",12),tN(1291,"Propriedades"),sg(),Tl(1292,"table",13)(1293,"tr",14)(1294,"th",15),tN(1295,"Nome"),sg(),Tl(1296,"th",15),tN(1297,"Tipo"),sg(),Tl(1298,"th",15),tN(1299,"Descri\xE7\xE3o"),sg()(),Tl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),tN(1304," otherActions"),Gl(1305,"br"),sg()()(),Tl(1306,"td",20)(1307,"code",25),tN(1308,"string"),sg()(),Tl(1309,"td",23)(1310,"em")(1311,"strong"),tN(1312,"(opcional)"),sg()(),Tl(1313,"p"),tN(1314,"Legenda do "),Tl(1315,"code"),tN(1316,"po-dropdown"),sg(),tN(1317," de a\xE7\xF5es."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(w(Xn),w(wn))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-page-list-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),sg()()()),r&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Ee,fe,xe,ve],encapsulation:2})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[vL.forChild(Ge),vL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[ar,ye]})}return s})();export{vt as DocPoPageListModule};