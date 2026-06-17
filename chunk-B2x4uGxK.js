import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,w,c5 as zde,$ as hNe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,bv as mb,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,bF as Fw,b6 as Yo,b7 as A3,X as we,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Wl(0,"po-page-list",0);},dependencies:[hNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page List Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return s})();var Se=(()=>{class s{poNotification=f(Yp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=Ex();Sl(0,"po-page-list",6),Wl(1,"po-divider")(2,"po-info",7),sg(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",8)(7,"po-input",9),Ew("ngModelChange",function(a){return Xy(d),tN(n.action.action,a)||(n.action.action=a),Qy(a)}),sg(),JA(),Sl(8,"po-input",10),Ew("ngModelChange",function(a){return Xy(d),tN(n.action.label,a)||(n.action.label=a),Qy(a)}),sg(),JA(),Sl(9,"po-input",11),Ew("ngModelChange",function(a){return Xy(d),tN(n.action.url,a)||(n.action.url=a),Qy(a)}),sg(),JA(),Sl(10,"po-select",12),Ew("ngModelChange",function(a){return Xy(d),tN(n.action.type,a)||(n.action.type=a),Qy(a)}),sg(),JA(),Sl(11,"po-select",13),Ew("ngModelChange",function(a){return Xy(d),tN(n.action.icon,a)||(n.action.icon=a),Qy(a)}),sg(),JA(),Sl(12,"po-checkbox-group",14),Ew("ngModelChange",function(a){return Xy(d),tN(n.action,a)||(n.action=a),Qy(a)}),sg(),JA(),sg(),Sl(13,"div",8)(14,"po-button",15),ht("p-click",function(){return n.addAction(n.action)}),sg()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",8)(19,"po-input",16),Ew("ngModelChange",function(a){return Xy(d),tN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Qy(a)}),sg(),JA(),sg()(),Sl(20,"form",null,2)(22,"div",8)(23,"po-input",17),Ew("ngModelChange",function(a){return Xy(d),tN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Qy(a)}),sg(),JA(),Sl(24,"po-input",18),Ew("ngModelChange",function(a){return Xy(d),tN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Qy(a)}),sg(),JA(),sg(),Sl(25,"div",8)(26,"po-button",19),ht("p-click",function(){return n.addBreadcrumbItem()}),sg()()(),Wl(27,"po-divider"),Sl(28,"form",null,3)(30,"div",8)(31,"po-input",20),Ew("ngModelChange",function(a){return Xy(d),tN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Qy(a)}),sg(),JA(),Sl(32,"po-input",21),Ew("ngModelChange",function(a){return Xy(d),tN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Qy(a)}),sg(),JA(),sg(),Sl(33,"div",8)(34,"po-button",22),ht("p-click",function(){return n.addBreadcrumbParam()}),sg()()(),Wl(35,"po-divider"),Sl(36,"div",8)(37,"po-input",23),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Qy(a)}),ht("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),sg(),JA(),Sl(38,"po-switch",24),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Qy(a)}),ht("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),sg(),JA(),sg(),Sl(39,"form",null,4)(41,"div",8)(42,"po-input",25),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Qy(a)}),sg(),JA(),Sl(43,"po-input",26),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Qy(a)}),sg(),JA(),sg(),Sl(44,"div",8)(45,"po-input",27),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerValue,a)||(n.disclaimerValue=a),Qy(a)}),sg(),JA(),Sl(46,"po-switch",28),Ew("ngModelChange",function(a){return Xy(d),tN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Qy(a)}),sg(),JA(),sg(),Sl(47,"div",8)(48,"po-button",29),ht("p-click",function(){return n.addDisclaimer()}),sg()()(),Wl(49,"po-divider"),Sl(50,"form",null,5)(52,"po-input",30),Ew("ngModelChange",function(a){return Xy(d),tN(n.title,a)||(n.title=a),Qy(a)}),sg(),JA(),Sl(53,"po-input",31),Ew("ngModelChange",function(a){return Xy(d),tN(n.subtitle,a)||(n.subtitle=a),Qy(a)}),sg(),JA(),Sl(54,"po-input",32),Ew("ngModelChange",function(a){return Xy(d),tN(n.filter.placeholder,a)||(n.filter.placeholder=a),Qy(a)}),sg(),JA(),Sl(55,"po-input",33),Ew("ngModelChange",function(a){return Xy(d),tN(n.filter.width,a)||(n.filter.width=a),Qy(a)}),sg(),JA(),Sl(56,"po-input",34),Ew("ngModelChange",function(a){return Xy(d),tN(n.literals,a)||(n.literals=a),Qy(a)}),ht("p-change",function(){return n.changeLiterals()}),sg(),JA(),Sl(57,"po-radio-group",35),Ew("ngModelChange",function(a){return Xy(d),tN(n.componentsSize,a)||(n.componentsSize=a),Qy(a)}),sg(),JA(),Sl(58,"div",8)(59,"po-button",36),ht("p-click",function(){return n.restore()}),sg()()();}if(r&2){let d=xx(5),p=xx(21),a=xx(29),Le=xx(40);tw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Vp(2),tw("p-value",n.filterModel),Vp(5),Dw("ngModel",n.action.action),t0(),Vp(),Dw("ngModel",n.action.label),t0(),Vp(),Dw("ngModel",n.action.url),t0(),Vp(),Dw("ngModel",n.action.type),tw("p-options",n.typeOptions),t0(),Vp(),Dw("ngModel",n.action.icon),tw("p-options",n.iconOptions),t0(),Vp(),Dw("ngModel",n.action),tw("p-options",n.actionOptions),t0(),Vp(2),tw("p-disabled",d.form.invalid),Vp(5),Dw("ngModel",n.breadcrumb.favorite),t0(),Vp(4),Dw("ngModel",n.breadcrumbItem.label),t0(),Vp(),Dw("ngModel",n.breadcrumbItem.link),t0(),Vp(2),tw("p-disabled",p.invalid),Vp(5),Dw("ngModel",n.breadcrumbParams.property),t0(),Vp(),Dw("ngModel",n.breadcrumbParams.value),t0(),Vp(2),tw("p-disabled",a.invalid),Vp(3),Dw("ngModel",n.disclaimerGroupTitle),t0(),Vp(),Dw("ngModel",n.disclaimerGroupHideRemoveAll),t0(),Vp(4),Dw("ngModel",n.disclaimerLabel),t0(),Vp(),Dw("ngModel",n.disclaimerProperty),t0(),Vp(2),Dw("ngModel",n.disclaimerValue),t0(),Vp(),Dw("ngModel",n.disclaimerHideClose),t0(),Vp(2),tw("p-disabled",Le.invalid),Vp(4),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.subtitle),t0(),Vp(),Dw("ngModel",n.filter.placeholder),t0(),Vp(),Dw("ngModel",n.filter.width),t0(),Vp(),Dw("ngModel",n.literals),t0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),t0();}},dependencies:[J9,mb,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Ghe,E3,Qhe,hNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page List Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-list
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=w({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Yp);poDialog=f(zde);router=f(wn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&ql(ke,7)(Be,7),r&2){let d;lo(d=uo())&&(n.advancedFilterModal=d.first),lo(d=uo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=Ex();Sl(0,"po-page-list",3,0),Wl(2,"po-table",4),sg(),Sl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),Ew("ngModelChange",function(a){return Xy(d),tN(n.jobDescription,a)||(n.jobDescription=a),Qy(a)}),sg(),JA(),Sl(8,"po-checkbox-group",7),Ew("ngModelChange",function(a){return Xy(d),tN(n.status,a)||(n.status=a),Qy(a)}),sg(),JA(),sg()();}r&2&&(tw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Vp(2),tw("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Vp(),tw("p-primary-action",n.advancedFilterPrimaryAction),Vp(4),Dw("ngModel",n.jobDescription),tw("p-options",n.jobDescriptionOptions),t0(),Vp(),Dw("ngModel",n.status),tw("p-options",n.statusOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,x3,Fw,Yo,hNe,A3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page List - Hiring Processes"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-list
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-page-list-hiring-processes"),sg(),Wl(27,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,je,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Pe],encapsulation:2})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),Jx(8,"po-page-default"),sg(),Jx(9,", "),Sl(10,"code"),Jx(11,"po-page-detail"),sg(),Jx(12,`,
`),Sl(13,"code"),Jx(14,"po-page-edit"),sg(),Jx(15,", "),Sl(16,"code"),Jx(17,"po-page-list"),sg(),Jx(18," e "),Sl(19,"code"),Jx(20,"po-page-slide"),sg(),Jx(21,"."),sg()(),Sl(22,"h3",3),Jx(23,"Componente"),sg(),Sl(24,"h4",4)(25,"code",5),Jx(26,"PoPageListComponent"),sg()(),Sl(27,"div",2)(28,"p"),Jx(29,"O componente "),Sl(30,"code"),Jx(31,"po-page-list"),sg(),Jx(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),sg(),Sl(33,"p"),Jx(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Sl(35,"em"),Jx(36,"click"),sg(),Jx(37," do \xEDcone "),Sl(38,"a",6),Jx(39,"an-magnifying-glass"),sg(),Jx(40,`
quanto ao pressionar da tecla `),Sl(41,"em"),Jx(42,"ENTER"),sg(),Jx(43," quando o foco estiver no campo de pesquisa."),sg(),Sl(44,"p"),Jx(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Sl(46,"a",7)(47,"code"),Jx(48,"po-disclaimer-group"),sg()(),Jx(49,"."),sg(),Sl(50,"h4"),Jx(51,"Tokens customiz\xE1veis"),sg(),Sl(52,"blockquote")(53,"p"),Jx(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(55,"a",8),Jx(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(57,"."),sg()(),Sl(58,"table")(59,"thead")(60,"tr")(61,"th"),Jx(62,"Propriedade"),sg(),Sl(63,"th"),Jx(64,"Descri\xE7\xE3o"),sg(),Sl(65,"th"),Jx(66,"Valor Padr\xE3o"),sg()()(),Sl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),Jx(71,"Header"),sg()(),Wl(72,"td")(73,"td"),sg(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--padding"),sg()(),Sl(78,"td"),Jx(79,"Espa\xE7amento do header"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--gap"),sg()(),Sl(87,"td"),Jx(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--spacing-md)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--gap-actions"),sg()(),Sl(96,"td"),Jx(97,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--spacing-xs)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--font-family"),sg()(),Sl(105,"td"),Jx(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--font-family-theme)"),sg()()(),Sl(110,"tr")(111,"td")(112,"strong"),Jx(113,"Content"),sg()(),Wl(114,"td")(115,"td"),sg(),Sl(116,"tr")(117,"td")(118,"code"),Jx(119,"--padding-content"),sg()(),Sl(120,"td"),Jx(121,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(122,"td")(123,"code"),Jx(124,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(125,"div",9)(126,"h4",10),Jx(127,"Seletor"),sg(),Sl(128,"pre",11),Jx(129,`<po-page-list
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
`),sg()(),Sl(130,"h4",12),Jx(131,"Propriedades"),sg(),Sl(132,"table",13)(133,"tr",14)(134,"th",15),Jx(135,"Nome"),sg(),Sl(136,"th",15),Jx(137,"Tipo"),sg(),Sl(138,"th",15),Jx(139,"Padr\xE3o"),sg(),Sl(140,"th",15),Jx(141,"Descri\xE7\xE3o"),sg()(),Sl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),Jx(146," p-actions"),Wl(147,"br"),sg()()(),Sl(148,"td",20)(149,"code",21),Jx(150,"Array<PoPageAction>"),sg()(),Sl(151,"td",22),Jx(152,"-"),sg(),Sl(153,"td",23)(154,"em")(155,"strong"),Jx(156,"(opcional)"),sg()(),Sl(157,"p"),Jx(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Sl(159,"code"),Jx(160,"PoPageAction"),sg(),Jx(161,"."),sg()()(),Sl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),Jx(166," p-breadcrumb"),Wl(167,"br"),sg()()(),Sl(168,"td",20)(169,"code",24),Jx(170,"PoBreadcrumb"),sg()(),Sl(171,"td",22),Jx(172,"-"),sg(),Sl(173,"td",23)(174,"em")(175,"strong"),Jx(176,"(opcional)"),sg()(),Sl(177,"p"),Jx(178,"Objeto que implementa as propriedades da interface "),Sl(179,"code"),Jx(180,"PoBreadcrumb"),sg(),Jx(181,"."),sg()()(),Sl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),Jx(186," p-components-size"),Wl(187,"br"),sg()()(),Sl(188,"td",20)(189,"code",25),Jx(190,"string"),sg()(),Sl(191,"td",22)(192,"p")(193,"code"),Jx(194,"medium"),sg()()(),Sl(195,"td",23)(196,"em")(197,"strong"),Jx(198,"(opcional)"),sg()(),Sl(199,"p"),Jx(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(201,"ul")(202,"li")(203,"code"),Jx(204,"small"),sg(),Jx(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(206,"li")(207,"code"),Jx(208,"medium"),sg(),Jx(209,": aplica a medida medium de cada componente."),sg()(),Sl(210,"blockquote")(211,"p"),Jx(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(213,"code"),Jx(214,"medium"),sg(),Jx(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(216,"a",26),Jx(217,"po-theme"),sg(),Jx(218,"."),sg()()()(),Sl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),Jx(223," p-disclaimer-group"),Wl(224,"br"),sg()()(),Sl(225,"td",20)(226,"code",27),Jx(227,"PoDisclaimerGroup"),sg()(),Sl(228,"td",22),Jx(229,"-"),sg(),Sl(230,"td",23)(231,"em")(232,"strong"),Jx(233,"(opcional)"),sg()(),Sl(234,"p"),Jx(235,"Objeto que implementa as propriedades da interface "),Sl(236,"code"),Jx(237,"PoDisclaimerGroup"),sg(),Jx(238,"."),sg()()(),Sl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),Jx(243," p-filter"),Wl(244,"br"),sg()()(),Sl(245,"td",20)(246,"code",28),Jx(247,"PoPageFilter"),sg()(),Sl(248,"td",22),Jx(249,"-"),sg(),Sl(250,"td",23)(251,"p"),Jx(252,"Objeto que implementa as propriedades da interface "),Sl(253,"code"),Jx(254,"PoPageFilter"),sg(),Jx(255,"."),sg()()(),Sl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),Jx(260," p-literals"),Wl(261,"br"),sg()()(),Sl(262,"td",20)(263,"code",29),Jx(264,"PoPageListLiterals"),sg()(),Sl(265,"td",22),Jx(266,"-"),sg(),Sl(267,"td",23)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Objeto com as literais usadas no "),Sl(273,"code"),Jx(274,"po-page-list"),sg(),Jx(275,"."),sg(),Sl(276,"p"),Jx(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(278,"pre")(279,"code"),Jx(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),sg()(),Sl(281,"p"),Jx(282,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(283,"pre")(284,"code"),Jx(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),sg()(),Sl(286,"p"),Jx(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(288,"pre")(289,"code"),Jx(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),sg()(),Sl(291,"blockquote")(292,"p"),Jx(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(294,"a",30)(295,"code"),Jx(296,"PoI18nService"),sg()(),Jx(297," ou "),Sl(298,"em"),Jx(299,"browser"),sg(),Jx(300,"."),sg()()()(),Sl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),Jx(305," p-quick-search-value"),Wl(306,"br"),sg()()(),Sl(307,"td",20)(308,"code",25),Jx(309,"string"),sg()(),Sl(310,"td",22),Jx(311,"-"),sg(),Sl(312,"td",23)(313,"em")(314,"strong"),Jx(315,"(opcional)"),sg()(),Sl(316,"p"),Jx(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),sg()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),Jx(322," p-subtitle"),Wl(323,"br"),sg()()(),Sl(324,"td",20)(325,"code",25),Jx(326,"string"),sg()(),Sl(327,"td",22),Jx(328,"-"),sg(),Sl(329,"td",23)(330,"em")(331,"strong"),Jx(332,"(opcional)"),sg()(),Sl(333,"p"),Jx(334,"Subtitulo do Header da p\xE1gina."),sg(),Sl(335,"p"),Jx(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(337,"code"),Jx(338,"<b>"),sg(),Jx(339," (negrito), "),Sl(340,"code"),Jx(341,"<strong>"),sg(),Jx(342," (negrito), "),Sl(343,"code"),Jx(344,"<i>"),sg(),Jx(345," (it\xE1lico), "),Sl(346,"code"),Jx(347,"<em>"),sg(),Jx(348,` (it\xE1lico) e
`),Sl(349,"code"),Jx(350,"<u>"),sg(),Jx(351," (sublinhado)."),sg(),Sl(352,"p"),Jx(353,"Exemplo:"),sg(),Sl(354,"pre")(355,"code",31),Jx(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),sg()(),Sl(357,"blockquote")(358,"p"),Jx(359,"Requer que "),Sl(360,"code"),Jx(361,"p-title"),sg(),Jx(362," esteja definido."),sg()()()(),Sl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),Jx(367," p-title"),Wl(368,"br"),sg()()(),Sl(369,"td",20)(370,"code",25),Jx(371,"string"),sg()(),Sl(372,"td",22),Jx(373,"-"),sg(),Sl(374,"td",23)(375,"p"),Jx(376,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(377,"h3",12),Jx(378,"M\xE9todos"),sg(),Sl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),Jx(385," clearInputSearch "),sg()()()()(),Sl(386,"tr",23)(387,"td",23)(388,"p"),Jx(389,"Limpa o campo de pesquisa."),sg()()()(),Wl(390,"br"),Sl(391,"h3"),Jx(392,"Interfaces"),sg(),Sl(393,"h4",34)(394,"code",5),Jx(395,"PoBreadcrumbItem"),sg()(),Sl(396,"div",2)(397,"p"),Jx(398,"Interface que define cada item do componente "),Sl(399,"strong"),Jx(400,"po-breadcrumb"),sg(),Jx(401,"."),sg()(),Sl(402,"h4",12),Jx(403,"Propriedades"),sg(),Sl(404,"table",13)(405,"tr",14)(406,"th",15),Jx(407,"Nome"),sg(),Sl(408,"th",15),Jx(409,"Tipo"),sg(),Sl(410,"th",15),Jx(411,"Descri\xE7\xE3o"),sg()(),Sl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),Jx(416," action"),Wl(417,"br"),sg()()(),Sl(418,"td",20)(419,"code",35),Jx(420,"Function"),sg()(),Sl(421,"td",23)(422,"em")(423,"strong"),Jx(424,"(opcional)"),sg()(),Sl(425,"p"),Jx(426,"A\xE7\xE3o executada ao clicar no item."),sg(),Sl(427,"blockquote")(428,"p"),Jx(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(430,"em"),Jx(431,"label"),sg(),Jx(432," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Sl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Jx(437," label"),Wl(438,"br"),sg()()(),Sl(439,"td",20)(440,"code",25),Jx(441,"string"),sg()(),Sl(442,"td",23)(443,"p"),Jx(444,"R\xF3tulo do item."),sg()()(),Sl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),Jx(449," link"),Wl(450,"br"),sg()()(),Sl(451,"td",20)(452,"code",25),Jx(453,"string"),sg()(),Sl(454,"td",23)(455,"em")(456,"strong"),Jx(457,"(opcional)"),sg()(),Sl(458,"p"),Jx(459,"Url do item."),sg(),Sl(460,"blockquote")(461,"p"),Jx(462,"Caso o item tamb\xE9m contenha uma "),Sl(463,"em"),Jx(464,"action"),sg(),Jx(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(466,"em"),Jx(467,"link"),sg(),Jx(468,"."),sg()(),Sl(469,"blockquote")(470,"p"),Jx(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(472,"strong")(473,"a",36),Jx(474,"Veja um exemplo de como criar rotas aqui"),sg()(),Jx(475,"."),sg()(),Sl(476,"blockquote")(477,"p"),Jx(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(479,"code"),Jx(480,"p-favorite-service"),sg(),Jx(481," consiga favoritar ou desfavoritar."),sg()()()()(),Sl(482,"h4",34)(483,"code",5),Jx(484,"PoBreadcrumb"),sg()(),Sl(485,"div",2)(486,"p"),Jx(487,"Interface que define o "),Sl(488,"code"),Jx(489,"po-breadcrumb"),sg(),Jx(490,"."),sg()(),Sl(491,"h4",12),Jx(492,"Propriedades"),sg(),Sl(493,"table",13)(494,"tr",14)(495,"th",15),Jx(496,"Nome"),sg(),Sl(497,"th",15),Jx(498,"Tipo"),sg(),Sl(499,"th",15),Jx(500,"Descri\xE7\xE3o"),sg()(),Sl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),Jx(505," favorite"),Wl(506,"br"),sg()()(),Sl(507,"td",20)(508,"code",25),Jx(509,"string"),sg()(),Sl(510,"td",23)(511,"em")(512,"strong"),Jx(513,"(opcional)"),sg()(),Sl(514,"p"),Jx(515,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Sl(516,"blockquote")(517,"p"),Jx(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(519,"code"),Jx(520,"p-favorite-service"),sg(),Jx(521," do componente "),Sl(522,"code"),Jx(523,"po-breadcrumb"),sg(),Jx(524,"."),sg()()()(),Sl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),Jx(529," items"),Wl(530,"br"),sg()()(),Sl(531,"td",20)(532,"code",37),Jx(533,"Array<PoBreadcrumbItem>"),sg()(),Sl(534,"td",23)(535,"p"),Jx(536,"Lista de itens do "),Sl(537,"em"),Jx(538,"breadcrumb"),sg(),Jx(539,"."),sg(),Sl(540,"p")(541,"strong"),Jx(542,"Exemplo:"),sg()(),Sl(543,"pre")(544,"code"),Jx(545,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Sl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),Jx(550," params"),Wl(551,"br"),sg()()(),Sl(552,"td",20)(553,"code",38),Jx(554,"object"),sg()(),Sl(555,"td",23)(556,"em")(557,"strong"),Jx(558,"(opcional)"),sg()(),Sl(559,"p"),Jx(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Sl(561,"h4",34)(562,"code",5),Jx(563,"PoDisclaimer"),sg()(),Sl(564,"div",2)(565,"p"),Jx(566,"Interface que representa o objeto "),Sl(567,"code"),Jx(568,"po-disclaimer"),sg(),Jx(569,"."),sg()(),Sl(570,"h4",12),Jx(571,"Propriedades"),sg(),Sl(572,"table",13)(573,"tr",14)(574,"th",15),Jx(575,"Nome"),sg(),Sl(576,"th",15),Jx(577,"Tipo"),sg(),Sl(578,"th",15),Jx(579,"Descri\xE7\xE3o"),sg()(),Sl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),Jx(584," hideClose"),Wl(585,"br"),sg()()(),Sl(586,"td",20)(587,"code",39),Jx(588,"boolean"),sg()(),Sl(589,"td",23)(590,"em")(591,"strong"),Jx(592,"(opcional)"),sg()(),Sl(593,"p"),Jx(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(595,"em"),Jx(596,"disclaimer"),sg(),Jx(597,"."),sg()()(),Sl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),Jx(602," label"),Wl(603,"br"),sg()()(),Sl(604,"td",20)(605,"code",25),Jx(606,"string"),sg()(),Sl(607,"td",23)(608,"em")(609,"strong"),Jx(610,"(opcional)"),sg()(),Sl(611,"p"),Jx(612,"Texto de exibi\xE7\xE3o do objeto."),sg()()(),Sl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),Jx(617," property"),Wl(618,"br"),sg()()(),Sl(619,"td",20)(620,"code",25),Jx(621,"string"),sg()(),Sl(622,"td",23)(623,"em")(624,"strong"),Jx(625,"(opcional)"),sg()(),Sl(626,"p"),Jx(627,"Nome da propriedade vinculada ao objeto "),Sl(628,"em"),Jx(629,"disclaimer"),sg(),Jx(630,"."),sg()()(),Sl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),Jx(635," value"),Wl(636,"br"),sg()()(),Sl(637,"td",20)(638,"code",40),Jx(639,"any"),sg()(),Sl(640,"td",23)(641,"p"),Jx(642,"Valor do objeto."),sg()()()(),Sl(643,"h4",34)(644,"code",5),Jx(645,"PoDisclaimerGroupRemoveAction"),sg()(),Sl(646,"div",2)(647,"p"),Jx(648,"Estrutura do objeto representando o estado dos "),Sl(649,"em"),Jx(650,"disclaimers"),sg(),Jx(651," ap\xF3s a remo\xE7\xE3o."),sg()(),Sl(652,"h4",12),Jx(653,"Propriedades"),sg(),Sl(654,"table",13)(655,"tr",14)(656,"th",15),Jx(657,"Nome"),sg(),Sl(658,"th",15),Jx(659,"Tipo"),sg(),Sl(660,"th",15),Jx(661,"Descri\xE7\xE3o"),sg()(),Sl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),Jx(666," currentDisclaimers"),Wl(667,"br"),sg()()(),Sl(668,"td",20)(669,"code",41),Jx(670,"Array<PoDisclaimer>"),sg()(),Sl(671,"td",23)(672,"p"),Jx(673,"Lista com os "),Sl(674,"em"),Jx(675,"disclaimers"),sg(),Jx(676," atuais (restantes)."),sg()()(),Sl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),Jx(681," removedDisclaimer"),Wl(682,"br"),sg()()(),Sl(683,"td",20)(684,"code",42),Jx(685,"PoDisclaimer"),sg()(),Sl(686,"td",23)(687,"p")(688,"em"),Jx(689,"Disclaimer"),sg(),Jx(690," que foi removido."),sg()()()(),Sl(691,"h4",34)(692,"code",5),Jx(693,"PoDisclaimerGroup"),sg()(),Sl(694,"div",2)(695,"p"),Jx(696,"Interface que representa o objeto "),Sl(697,"code"),Jx(698,"po-disclaimer-group"),sg(),Jx(699,"."),sg()(),Sl(700,"h4",12),Jx(701,"Propriedades"),sg(),Sl(702,"table",13)(703,"tr",14)(704,"th",15),Jx(705,"Nome"),sg(),Sl(706,"th",15),Jx(707,"Tipo"),sg(),Sl(708,"th",15),Jx(709,"Descri\xE7\xE3o"),sg()(),Sl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),Jx(714," change"),Wl(715,"br"),sg()()(),Sl(716,"td",20)(717,"code",35),Jx(718,"Function"),sg()(),Sl(719,"td",23)(720,"em")(721,"strong"),Jx(722,"(opcional)"),sg()(),Sl(723,"p"),Jx(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(725,"em"),Jx(726,"disclaimers"),sg(),Jx(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Sl(728,"em"),Jx(729,"disclaimers"),sg(),Jx(730,"."),sg()()(),Sl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),Jx(735," disclaimers"),Wl(736,"br"),sg()()(),Sl(737,"td",20)(738,"code",41),Jx(739,"Array<PoDisclaimer>"),sg()(),Sl(740,"td",23)(741,"p"),Jx(742,"Lista de "),Sl(743,"em"),Jx(744,"disclaimers"),sg(),Jx(745,"."),sg(),Sl(746,"p"),Jx(747,"Exemplo:"),sg(),Sl(748,"pre")(749,"code"),Jx(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),sg()(),Sl(751,"p"),Jx(752,"Para que a lista de "),Sl(753,"em"),Jx(754,"disclaimers"),sg(),Jx(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(756,"code"),Jx(757,"PoDisclaimer"),sg(),Jx(758,"."),sg(),Sl(759,"p"),Jx(760,"Exemplo:"),sg(),Sl(761,"pre")(762,"code"),Jx(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),sg()()()(),Sl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),Jx(768," hideRemoveAll"),Wl(769,"br"),sg()()(),Sl(770,"td",20)(771,"code",39),Jx(772,"boolean"),sg()(),Sl(773,"td",23)(774,"em")(775,"strong"),Jx(776,"(opcional)"),sg()(),Sl(777,"p"),Jx(778,"Oculta o bot\xE3o para remover todos os "),Sl(779,"em"),Jx(780,"disclaimers"),sg(),Jx(781," do grupo."),sg(),Sl(782,"blockquote")(783,"p"),Jx(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(785,"em"),Jx(786,"disclaimers"),sg(),Jx(787," com a op\xE7\xE3o "),Sl(788,"code"),Jx(789,"hideClose"),sg(),Jx(790," habilitada."),sg()()()(),Sl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),Jx(795," remove"),Wl(796,"br"),sg()()(),Sl(797,"td",20)(798,"code",35),Jx(799,"Function"),sg()(),Sl(800,"td",23)(801,"em")(802,"strong"),Jx(803,"(opcional)"),sg()(),Sl(804,"p"),Jx(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(806,"em"),Jx(807,"disclaimer"),sg(),Jx(808,` for removido da lista de
`),Sl(809,"em"),Jx(810,"disclaimers"),sg(),Jx(811," pelo usu\xE1rio."),sg(),Sl(812,"p"),Jx(813,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(814,"code"),Jx(815,"PoDisclaimerGroupRemoveAction"),sg(),Jx(816,"."),sg()()(),Sl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),Jx(821," removeAll"),Wl(822,"br"),sg()()(),Sl(823,"td",20)(824,"code",35),Jx(825,"Function"),sg()(),Sl(826,"td",23)(827,"em")(828,"strong"),Jx(829,"(opcional)"),sg()(),Sl(830,"p"),Jx(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(832,"em"),Jx(833,"disclaimers"),sg(),Jx(834," forem removidos da lista de "),Sl(835,"em"),Jx(836,"disclaimers"),sg(),Jx(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),sg(),Sl(838,"p"),Jx(839,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(840,"code"),Jx(841,"disclaimers"),sg(),Jx(842," removidos."),sg()()(),Sl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),Jx(847," title"),Wl(848,"br"),sg()()(),Sl(849,"td",20)(850,"code",25),Jx(851,"string"),sg()(),Sl(852,"td",23)(853,"em")(854,"strong"),Jx(855,"(opcional)"),sg()(),Sl(856,"p"),Jx(857,"T\xEDtulo do grupo de "),Sl(858,"em"),Jx(859,"disclaimers"),sg(),Jx(860,"."),sg()()()(),Sl(861,"h4",34)(862,"code",5),Jx(863,"PoPageAction"),sg()(),Sl(864,"div",2)(865,"p"),Jx(866,"Interface para as a\xE7\xF5es dos componentes "),Sl(867,"code"),Jx(868,"po-page-default"),sg(),Jx(869," e "),Sl(870,"code"),Jx(871,"po-page-list"),sg(),Jx(872,"."),sg(),Sl(873,"p"),Jx(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Sl(875,"em"),Jx(876,"dropdown"),sg(),Jx(877,`,
conforme o `),Sl(878,"code"),Jx(879,"PoPageActionsLayout"),sg(),Jx(880," e o tamanho da tela."),sg(),Sl(881,"blockquote")(882,"p"),Jx(883,"As propriedades "),Sl(884,"code"),Jx(885,"separator"),sg(),Jx(886,", "),Sl(887,"code"),Jx(888,"selected"),sg(),Jx(889," e "),Sl(890,"code"),Jx(891,"subItems"),sg(),Jx(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Sl(893,"em"),Jx(894,"dropdown"),sg(),Jx(895,"."),sg()()(),Sl(896,"h4",12),Jx(897,"Propriedades"),sg(),Sl(898,"table",13)(899,"tr",14)(900,"th",15),Jx(901,"Nome"),sg(),Sl(902,"th",15),Jx(903,"Tipo"),sg(),Sl(904,"th",15),Jx(905,"Descri\xE7\xE3o"),sg()(),Sl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),Jx(910," action"),Wl(911,"br"),sg()()(),Sl(912,"td",20)(913,"code",35),Jx(914,"Function"),sg()(),Sl(915,"td",23)(916,"em")(917,"strong"),Jx(918,"(opcional)"),sg()(),Sl(919,"p"),Jx(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(921,"p"),Jx(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(923,"code"),Jx(924,"subItems"),sg(),Jx(925,"."),sg(),Sl(926,"blockquote")(927,"p"),Jx(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(929,"em"),Jx(930,"bind"),sg(),Jx(931,`:
`),Sl(932,"code"),Jx(933,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),Jx(938," disabled"),Wl(939,"br"),sg()()(),Sl(940,"td",20)(941,"code",39),Jx(942,"boolean "),sg(),Sl(943,"code",35),Jx(944," Function"),sg()(),Sl(945,"td",23)(946,"em")(947,"strong"),Jx(948,"(opcional)"),sg()(),Sl(949,"p"),Jx(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),Jx(955," icon"),Wl(956,"br"),sg()()(),Sl(957,"td",20)(958,"code",25),Jx(959,"string "),sg(),Sl(960,"code",43),Jx(961," TemplateRef<void>"),sg()(),Sl(962,"td",23)(963,"em")(964,"strong"),Jx(965,"(opcional)"),sg()(),Sl(966,"p"),Jx(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(968,"p"),Jx(969,"Aceita \xEDcones da "),Sl(970,"a",6),Jx(971,"Biblioteca de \xEDcones"),sg(),Jx(972,`, fontes externas (ex: Font Awesome)
ou um `),Sl(973,"code"),Jx(974,"TemplateRef"),sg(),Jx(975," para \xEDcones customizados."),sg(),Sl(976,"pre")(977,"code"),Jx(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),Jx(983," kind"),Wl(984,"br"),sg()()(),Sl(985,"td",20)(986,"code",25),Jx(987,"string"),sg()(),Sl(988,"td",23)(989,"em")(990,"strong"),Jx(991,"(opcional)"),sg()(),Sl(992,"p"),Jx(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Sl(994,"em"),Jx(995,"dropdown"),sg(),Jx(996,"."),sg(),Sl(997,"p"),Jx(998,"Valores permitidos:"),sg(),Sl(999,"ul")(1e3,"li")(1001,"code"),Jx(1002,"primary"),sg(),Jx(1003,": bot\xE3o com maior destaque visual."),sg(),Sl(1004,"li")(1005,"code"),Jx(1006,"secondary"),sg(),Jx(1007,": estilo padr\xE3o."),sg()(),Sl(1008,"blockquote")(1009,"p"),Jx(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),sg()(),Sl(1011,"blockquote")(1012,"p"),Jx(1013,"Somente uma a\xE7\xE3o pode ter "),Sl(1014,"code"),Jx(1015,"kind"),sg(),Jx(1016," igual a "),Sl(1017,"code"),Jx(1018,"primary"),sg(),Jx(1019,". Caso mais de uma defina "),Sl(1020,"code"),Jx(1021,"primary"),sg(),Jx(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Sl(1023,"code"),Jx(1024,"secondary"),sg(),Jx(1025,"."),sg()(),Sl(1026,"blockquote")(1027,"p"),Jx(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Sl(1029,"code"),Jx(1030,"PoPageActionsLayout"),sg(),Jx(1031,"."),sg()()()(),Sl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Jx(1036," label"),Wl(1037,"br"),sg()()(),Sl(1038,"td",20)(1039,"code",25),Jx(1040,"string"),sg()(),Sl(1041,"td",23)(1042,"p"),Jx(1043,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(1044,"p"),Jx(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1046,"code"),Jx(1047,"subItems"),sg(),Jx(1048,"."),sg()()(),Sl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Jx(1053," selected"),Wl(1054,"br"),sg()()(),Sl(1055,"td",20)(1056,"code",39),Jx(1057,"boolean"),sg()(),Sl(1058,"td",23)(1059,"em")(1060,"strong"),Jx(1061,"(opcional)"),sg()(),Sl(1062,"p"),Jx(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),Jx(1068," separator"),Wl(1069,"br"),sg()()(),Sl(1070,"td",20)(1071,"code",39),Jx(1072,"boolean"),sg()(),Sl(1073,"td",23)(1074,"em")(1075,"strong"),Jx(1076,"(opcional)"),sg()(),Sl(1077,"p"),Jx(1078,"Atribui uma linha separadora acima do item."),sg()()(),Sl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),Jx(1083," subItems"),Wl(1084,"br"),sg()()(),Sl(1085,"td",20)(1086,"code",44),Jx(1087,"Array<PoPopupAction>"),sg()(),Sl(1088,"td",23)(1089,"em")(1090,"strong"),Jx(1091,"(opcional)"),sg()(),Sl(1092,"p"),Jx(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(1094,"p"),Jx(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(1096,"blockquote")(1097,"p"),Jx(1098,"As propriedades "),Sl(1099,"code"),Jx(1100,"disabled"),sg(),Jx(1101,", "),Sl(1102,"code"),Jx(1103,"type"),sg(),Jx(1104," e "),Sl(1105,"code"),Jx(1106,"visible"),sg(),Jx(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(1108,"blockquote")(1109,"p"),Jx(1110,"Quando "),Sl(1111,"code"),Jx(1112,"url"),sg(),Jx(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(1114,"blockquote")(1115,"p"),Jx(1116,"Em subn\xEDveis aninhados, o "),Sl(1117,"code"),Jx(1118,"icon"),sg(),Jx(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),Jx(1124," type"),Wl(1125,"br"),sg()()(),Sl(1126,"td",20)(1127,"code",25),Jx(1128,"string"),sg()(),Sl(1129,"td",23)(1130,"em")(1131,"strong"),Jx(1132,"(opcional)"),sg()(),Sl(1133,"p"),Jx(1134,"Define a cor do item."),sg(),Sl(1135,"p"),Jx(1136,"Valores v\xE1lidos:"),sg(),Sl(1137,"ul")(1138,"li")(1139,"code"),Jx(1140,"default"),sg()(),Sl(1141,"li")(1142,"code"),Jx(1143,"danger"),sg()()()()(),Sl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),Jx(1148," url"),Wl(1149,"br"),sg()()(),Sl(1150,"td",20)(1151,"code",25),Jx(1152,"string"),sg()(),Sl(1153,"td",23)(1154,"em")(1155,"strong"),Jx(1156,"(opcional)"),sg()(),Sl(1157,"p"),Jx(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(1159,"p"),Jx(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1161,"code"),Jx(1162,"url"),sg(),Jx(1163," \xE9 informada em um agrupador, o clique "),Sl(1164,"strong"),Jx(1165,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(1167,"blockquote")(1168,"p"),Jx(1169,"Quando informada, tem prioridade sobre a propriedade "),Sl(1170,"code"),Jx(1171,"action"),sg(),Jx(1172,"."),sg()()()(),Sl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),Jx(1177," visible"),Wl(1178,"br"),sg()()(),Sl(1179,"td",20)(1180,"code",39),Jx(1181,"boolean "),sg(),Sl(1182,"code",35),Jx(1183," Function"),sg()(),Sl(1184,"td",23)(1185,"em")(1186,"strong"),Jx(1187,"(opcional)"),sg()(),Sl(1188,"p"),Jx(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Sl(1190,"h4",34)(1191,"code",5),Jx(1192,"PoPageFilter"),sg()(),Sl(1193,"div",2)(1194,"p"),Jx(1195,"Interface para o atributo "),Sl(1196,"code"),Jx(1197,"filter"),sg(),Jx(1198," do componente "),Sl(1199,"code"),Jx(1200,"po-page-list"),sg(),Jx(1201,"."),sg()(),Sl(1202,"h4",12),Jx(1203,"Propriedades"),sg(),Sl(1204,"table",13)(1205,"tr",14)(1206,"th",15),Jx(1207,"Nome"),sg(),Sl(1208,"th",15),Jx(1209,"Tipo"),sg(),Sl(1210,"th",15),Jx(1211,"Descri\xE7\xE3o"),sg()(),Sl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),Jx(1216," action"),Wl(1217,"br"),sg()()(),Sl(1218,"td",20)(1219,"code",35),Jx(1220,"Function"),sg()(),Sl(1221,"td",23)(1222,"em")(1223,"strong"),Jx(1224,"(opcional)"),sg()(),Sl(1225,"p"),Jx(1226,"A\xE7\xE3o a ser executada."),sg()()(),Sl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),Jx(1231," advancedAction"),Wl(1232,"br"),sg()()(),Sl(1233,"td",20)(1234,"code",35),Jx(1235,"Function"),sg()(),Sl(1236,"td",23)(1237,"em")(1238,"strong"),Jx(1239,"(opcional)"),sg()(),Sl(1240,"p"),Jx(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Sl(1242,"em"),Jx(1243,"click"),sg(),Jx(1244," atrav\xE9s do r\xF3tulo "),Sl(1245,"strong"),Jx(1246,"Busca Avan\xE7ada"),sg(),Jx(1247,"."),sg()()(),Sl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),Jx(1252," placeholder"),Wl(1253,"br"),sg()()(),Sl(1254,"td",20)(1255,"code",25),Jx(1256,"string"),sg()(),Sl(1257,"td",23)(1258,"em")(1259,"strong"),Jx(1260,"(opcional)"),sg()(),Sl(1261,"p"),Jx(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),sg()()(),Sl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),Jx(1267," width"),Wl(1268,"br"),sg()()(),Sl(1269,"td",20)(1270,"code",45),Jx(1271,"number"),sg()(),Sl(1272,"td",23)(1273,"em")(1274,"strong"),Jx(1275,"(opcional)"),sg()(),Sl(1276,"p"),Jx(1277,"Tamanho do filtro em tela, utilizando o "),Sl(1278,"em"),Jx(1279,"Grid System"),sg(),Jx(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),sg()()()(),Sl(1281,"h4",34)(1282,"code",5),Jx(1283,"PoPageListLiterals"),sg()(),Sl(1284,"div",2)(1285,"p"),Jx(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1287,"code"),Jx(1288,"po-page-list"),sg(),Jx(1289,"."),sg()(),Sl(1290,"h4",12),Jx(1291,"Propriedades"),sg(),Sl(1292,"table",13)(1293,"tr",14)(1294,"th",15),Jx(1295,"Nome"),sg(),Sl(1296,"th",15),Jx(1297,"Tipo"),sg(),Sl(1298,"th",15),Jx(1299,"Descri\xE7\xE3o"),sg()(),Sl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),Jx(1304," otherActions"),Wl(1305,"br"),sg()()(),Sl(1306,"td",20)(1307,"code",25),Jx(1308,"string"),sg()(),Sl(1309,"td",23)(1310,"em")(1311,"strong"),Jx(1312,"(opcional)"),sg()(),Sl(1313,"p"),Jx(1314,"Legenda do "),Sl(1315,"code"),Jx(1316,"po-dropdown"),sg(),Jx(1317," de a\xE7\xF5es."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(C(Xn),C(wn))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-list-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),sg()()()),r&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Ee,fe,xe,ve],encapsulation:2})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[pL.forChild(Ge),pL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[ar,ye]})}return s})();export{vt as DocPoPageListModule};