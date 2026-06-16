import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,E,by as vle,$ as xz,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,b1 as lb,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,bb as dn,aQ as dt,aR as ty,X as we$1,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Ee=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Ul(0,"po-page-list",0);},dependencies:[xz],encapsulation:2,changeDetection:1})}return s})();var De=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page List Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-list-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return s})();var Pe=(()=>{class s{poNotification=f(Bp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=lx();wl(0,"po-page-list",6),Ul(1,"po-divider")(2,"po-info",7),ng(),Ul(3,"po-divider"),wl(4,"form",null,0)(6,"div",8)(7,"po-input",9),pw("ngModelChange",function(a){return Qy(d),$x(n.action.action,a)||(n.action.action=a),Jy(a)}),ng(),$0(),wl(8,"po-input",10),pw("ngModelChange",function(a){return Qy(d),$x(n.action.label,a)||(n.action.label=a),Jy(a)}),ng(),$0(),wl(9,"po-input",11),pw("ngModelChange",function(a){return Qy(d),$x(n.action.url,a)||(n.action.url=a),Jy(a)}),ng(),$0(),wl(10,"po-select",12),pw("ngModelChange",function(a){return Qy(d),$x(n.action.type,a)||(n.action.type=a),Jy(a)}),ng(),$0(),wl(11,"po-select",13),pw("ngModelChange",function(a){return Qy(d),$x(n.action.icon,a)||(n.action.icon=a),Jy(a)}),ng(),$0(),wl(12,"po-checkbox-group",14),pw("ngModelChange",function(a){return Qy(d),$x(n.action,a)||(n.action=a),Jy(a)}),ng(),$0(),ng(),wl(13,"div",8)(14,"po-button",15),ut("p-click",function(){return n.addAction(n.action)}),ng()()(),Ul(15,"po-divider"),wl(16,"form",null,1)(18,"div",8)(19,"po-input",16),pw("ngModelChange",function(a){return Qy(d),$x(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Jy(a)}),ng(),$0(),ng()(),wl(20,"form",null,2)(22,"div",8)(23,"po-input",17),pw("ngModelChange",function(a){return Qy(d),$x(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Jy(a)}),ng(),$0(),wl(24,"po-input",18),pw("ngModelChange",function(a){return Qy(d),$x(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Jy(a)}),ng(),$0(),ng(),wl(25,"div",8)(26,"po-button",19),ut("p-click",function(){return n.addBreadcrumbItem()}),ng()()(),Ul(27,"po-divider"),wl(28,"form",null,3)(30,"div",8)(31,"po-input",20),pw("ngModelChange",function(a){return Qy(d),$x(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Jy(a)}),ng(),$0(),wl(32,"po-input",21),pw("ngModelChange",function(a){return Qy(d),$x(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Jy(a)}),ng(),$0(),ng(),wl(33,"div",8)(34,"po-button",22),ut("p-click",function(){return n.addBreadcrumbParam()}),ng()()(),Ul(35,"po-divider"),wl(36,"div",8)(37,"po-input",23),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Jy(a)}),ut("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),ng(),$0(),wl(38,"po-switch",24),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Jy(a)}),ut("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),ng(),$0(),ng(),wl(39,"form",null,4)(41,"div",8)(42,"po-input",25),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Jy(a)}),ng(),$0(),wl(43,"po-input",26),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Jy(a)}),ng(),$0(),ng(),wl(44,"div",8)(45,"po-input",27),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerValue,a)||(n.disclaimerValue=a),Jy(a)}),ng(),$0(),wl(46,"po-switch",28),pw("ngModelChange",function(a){return Qy(d),$x(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Jy(a)}),ng(),$0(),ng(),wl(47,"div",8)(48,"po-button",29),ut("p-click",function(){return n.addDisclaimer()}),ng()()(),Ul(49,"po-divider"),wl(50,"form",null,5)(52,"po-input",30),pw("ngModelChange",function(a){return Qy(d),$x(n.title,a)||(n.title=a),Jy(a)}),ng(),$0(),wl(53,"po-input",31),pw("ngModelChange",function(a){return Qy(d),$x(n.subtitle,a)||(n.subtitle=a),Jy(a)}),ng(),$0(),wl(54,"po-input",32),pw("ngModelChange",function(a){return Qy(d),$x(n.filter.placeholder,a)||(n.filter.placeholder=a),Jy(a)}),ng(),$0(),wl(55,"po-input",33),pw("ngModelChange",function(a){return Qy(d),$x(n.filter.width,a)||(n.filter.width=a),Jy(a)}),ng(),$0(),wl(56,"po-input",34),pw("ngModelChange",function(a){return Qy(d),$x(n.literals,a)||(n.literals=a),Jy(a)}),ut("p-change",function(){return n.changeLiterals()}),ng(),$0(),wl(57,"po-radio-group",35),pw("ngModelChange",function(a){return Qy(d),$x(n.componentsSize,a)||(n.componentsSize=a),Jy(a)}),ng(),$0(),wl(58,"div",8)(59,"po-button",36),ut("p-click",function(){return n.restore()}),ng()()();}if(r&2){let d=_x(5),p=_x(21),a=_x(29),_e=_x(40);YE("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Pp(2),YE("p-value",n.filterModel),Pp(5),hw("ngModel",n.action.action),G0(),Pp(),hw("ngModel",n.action.label),G0(),Pp(),hw("ngModel",n.action.url),G0(),Pp(),hw("ngModel",n.action.type),YE("p-options",n.typeOptions),G0(),Pp(),hw("ngModel",n.action.icon),YE("p-options",n.iconOptions),G0(),Pp(),hw("ngModel",n.action),YE("p-options",n.actionOptions),G0(),Pp(2),YE("p-disabled",d.form.invalid),Pp(5),hw("ngModel",n.breadcrumb.favorite),G0(),Pp(4),hw("ngModel",n.breadcrumbItem.label),G0(),Pp(),hw("ngModel",n.breadcrumbItem.link),G0(),Pp(2),YE("p-disabled",p.invalid),Pp(5),hw("ngModel",n.breadcrumbParams.property),G0(),Pp(),hw("ngModel",n.breadcrumbParams.value),G0(),Pp(2),YE("p-disabled",a.invalid),Pp(3),hw("ngModel",n.disclaimerGroupTitle),G0(),Pp(),hw("ngModel",n.disclaimerGroupHideRemoveAll),G0(),Pp(4),hw("ngModel",n.disclaimerLabel),G0(),Pp(),hw("ngModel",n.disclaimerProperty),G0(),Pp(2),hw("ngModel",n.disclaimerValue),G0(),Pp(),hw("ngModel",n.disclaimerHideClose),G0(),Pp(2),YE("p-disabled",_e.invalid),Pp(4),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.subtitle),G0(),Pp(),hw("ngModel",n.filter.placeholder),G0(),Pp(),hw("ngModel",n.filter.width),G0(),Pp(),hw("ngModel",n.literals),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0();}},dependencies:[aY,lb,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,ya,na,Vp,xz],encapsulation:2,changeDetection:1})}return s})();var Be=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page List Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-list
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-list-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Be,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return s})();var X=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=E({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var je=["advancedFilterModal"],Ve=["poPageList"],ve=(()=>{class s{sampleHiringProcessesService=f(X);poNotification=f(Bp);poDialog=f(vle);router=f(Cn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&$l(je,7)(Ve,7),r&2){let d;uo(d=fo())&&(n.advancedFilterModal=d.first),uo(d=fo())&&(n.poPageList=d.first);}},standalone:false,features:[we$1([X])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=lx();wl(0,"po-page-list",3,0),Ul(2,"po-table",4),ng(),wl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),pw("ngModelChange",function(a){return Qy(d),$x(n.jobDescription,a)||(n.jobDescription=a),Jy(a)}),ng(),$0(),wl(8,"po-checkbox-group",7),pw("ngModelChange",function(a){return Qy(d),$x(n.status,a)||(n.status=a),Jy(a)}),ng(),$0(),ng()();}r&2&&(YE("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Pp(2),YE("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Pp(),YE("p-primary-action",n.advancedFilterPrimaryAction),Pp(4),hw("ngModel",n.jobDescription),YE("p-options",n.jobDescriptionOptions),G0(),Pp(),hw("ngModel",n.status),YE("p-options",n.statusOptions),G0());},dependencies:[aY,iY,oY,ck,ok,ia,dn,dt,xz,ty],encapsulation:2,changeDetection:1})}return s})();var Ge=s=>({"docs-sample-code-tabs":s}),Ce=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page List - Hiring Processes"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-list
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-page-list-hiring-processes"),ng(),Ul(27,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ve],encapsulation:2})}return s})();var ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),wl(7,"code"),Ux(8,"po-page-default"),ng(),Ux(9,", "),wl(10,"code"),Ux(11,"po-page-detail"),ng(),Ux(12,`,
`),wl(13,"code"),Ux(14,"po-page-edit"),ng(),Ux(15,", "),wl(16,"code"),Ux(17,"po-page-list"),ng(),Ux(18," e "),wl(19,"code"),Ux(20,"po-page-slide"),ng(),Ux(21,"."),ng()(),wl(22,"h3",3),Ux(23,"Componente"),ng(),wl(24,"h4",4)(25,"code",5),Ux(26,"PoPageListComponent"),ng()(),wl(27,"div",2)(28,"p"),Ux(29,"O componente "),wl(30,"code"),Ux(31,"po-page-list"),ng(),Ux(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),ng(),wl(33,"p"),Ux(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),wl(35,"em"),Ux(36,"click"),ng(),Ux(37," do \xEDcone "),wl(38,"a",6),Ux(39,"an-magnifying-glass"),ng(),Ux(40,`
quanto ao pressionar da tecla `),wl(41,"em"),Ux(42,"ENTER"),ng(),Ux(43," quando o foco estiver no campo de pesquisa."),ng(),wl(44,"p"),Ux(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),wl(46,"a",7)(47,"code"),Ux(48,"po-disclaimer-group"),ng()(),Ux(49,"."),ng(),wl(50,"h4"),Ux(51,"Tokens customiz\xE1veis"),ng(),wl(52,"blockquote")(53,"p"),Ux(54,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(55,"a",8),Ux(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(57,"."),ng()(),wl(58,"table")(59,"thead")(60,"tr")(61,"th"),Ux(62,"Propriedade"),ng(),wl(63,"th"),Ux(64,"Descri\xE7\xE3o"),ng(),wl(65,"th"),Ux(66,"Valor Padr\xE3o"),ng()()(),wl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),Ux(71,"Header"),ng()(),Ul(72,"td")(73,"td"),ng(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--padding"),ng()(),wl(78,"td"),Ux(79,"Espa\xE7amento do header"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--gap"),ng()(),wl(87,"td"),Ux(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--spacing-md)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--gap-actions"),ng()(),wl(96,"td"),Ux(97,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--spacing-xs)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--font-family"),ng()(),wl(105,"td"),Ux(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--font-family-theme)"),ng()()(),wl(110,"tr")(111,"td")(112,"strong"),Ux(113,"Content"),ng()(),Ul(114,"td")(115,"td"),ng(),wl(116,"tr")(117,"td")(118,"code"),Ux(119,"--padding-content"),ng()(),wl(120,"td"),Ux(121,"Espa\xE7amento do conte\xFAdo"),ng(),wl(122,"td")(123,"code"),Ux(124,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(125,"div",9)(126,"h4",10),Ux(127,"Seletor"),ng(),wl(128,"pre",11),Ux(129,`<po-page-list
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
`),ng()(),wl(130,"h4",12),Ux(131,"Propriedades"),ng(),wl(132,"table",13)(133,"tr",14)(134,"th",15),Ux(135,"Nome"),ng(),wl(136,"th",15),Ux(137,"Tipo"),ng(),wl(138,"th",15),Ux(139,"Padr\xE3o"),ng(),wl(140,"th",15),Ux(141,"Descri\xE7\xE3o"),ng()(),wl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),Ux(146," p-actions"),Ul(147,"br"),ng()()(),wl(148,"td",20)(149,"code",21),Ux(150,"Array<PoPageAction>"),ng()(),wl(151,"td",22),Ux(152,"-"),ng(),wl(153,"td",23)(154,"em")(155,"strong"),Ux(156,"(opcional)"),ng()(),wl(157,"p"),Ux(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),wl(159,"code"),Ux(160,"PoPageAction"),ng(),Ux(161,"."),ng()()(),wl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),Ux(166," p-breadcrumb"),Ul(167,"br"),ng()()(),wl(168,"td",20)(169,"code",24),Ux(170,"PoBreadcrumb"),ng()(),wl(171,"td",22),Ux(172,"-"),ng(),wl(173,"td",23)(174,"em")(175,"strong"),Ux(176,"(opcional)"),ng()(),wl(177,"p"),Ux(178,"Objeto que implementa as propriedades da interface "),wl(179,"code"),Ux(180,"PoBreadcrumb"),ng(),Ux(181,"."),ng()()(),wl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),Ux(186," p-components-size"),Ul(187,"br"),ng()()(),wl(188,"td",20)(189,"code",25),Ux(190,"string"),ng()(),wl(191,"td",22)(192,"p")(193,"code"),Ux(194,"medium"),ng()()(),wl(195,"td",23)(196,"em")(197,"strong"),Ux(198,"(opcional)"),ng()(),wl(199,"p"),Ux(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(201,"ul")(202,"li")(203,"code"),Ux(204,"small"),ng(),Ux(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(206,"li")(207,"code"),Ux(208,"medium"),ng(),Ux(209,": aplica a medida medium de cada componente."),ng()(),wl(210,"blockquote")(211,"p"),Ux(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(213,"code"),Ux(214,"medium"),ng(),Ux(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(216,"a",26),Ux(217,"po-theme"),ng(),Ux(218,"."),ng()()()(),wl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),Ux(223," p-disclaimer-group"),Ul(224,"br"),ng()()(),wl(225,"td",20)(226,"code",27),Ux(227,"PoDisclaimerGroup"),ng()(),wl(228,"td",22),Ux(229,"-"),ng(),wl(230,"td",23)(231,"em")(232,"strong"),Ux(233,"(opcional)"),ng()(),wl(234,"p"),Ux(235,"Objeto que implementa as propriedades da interface "),wl(236,"code"),Ux(237,"PoDisclaimerGroup"),ng(),Ux(238,"."),ng()()(),wl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),Ux(243," p-filter"),Ul(244,"br"),ng()()(),wl(245,"td",20)(246,"code",28),Ux(247,"PoPageFilter"),ng()(),wl(248,"td",22),Ux(249,"-"),ng(),wl(250,"td",23)(251,"p"),Ux(252,"Objeto que implementa as propriedades da interface "),wl(253,"code"),Ux(254,"PoPageFilter"),ng(),Ux(255,"."),ng()()(),wl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),Ux(260," p-literals"),Ul(261,"br"),ng()()(),wl(262,"td",20)(263,"code",29),Ux(264,"PoPageListLiterals"),ng()(),wl(265,"td",22),Ux(266,"-"),ng(),wl(267,"td",23)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Objeto com as literais usadas no "),wl(273,"code"),Ux(274,"po-page-list"),ng(),Ux(275,"."),ng(),wl(276,"p"),Ux(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(278,"pre")(279,"code"),Ux(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),ng()(),wl(281,"p"),Ux(282,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(283,"pre")(284,"code"),Ux(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),ng()(),wl(286,"p"),Ux(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(288,"pre")(289,"code"),Ux(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),ng()(),wl(291,"blockquote")(292,"p"),Ux(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),wl(294,"a",30)(295,"code"),Ux(296,"PoI18nService"),ng()(),Ux(297," ou "),wl(298,"em"),Ux(299,"browser"),ng(),Ux(300,"."),ng()()()(),wl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),Ux(305," p-quick-search-value"),Ul(306,"br"),ng()()(),wl(307,"td",20)(308,"code",25),Ux(309,"string"),ng()(),wl(310,"td",22),Ux(311,"-"),ng(),wl(312,"td",23)(313,"em")(314,"strong"),Ux(315,"(opcional)"),ng()(),wl(316,"p"),Ux(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),ng()()(),wl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),Ux(322," p-subtitle"),Ul(323,"br"),ng()()(),wl(324,"td",20)(325,"code",25),Ux(326,"string"),ng()(),wl(327,"td",22),Ux(328,"-"),ng(),wl(329,"td",23)(330,"em")(331,"strong"),Ux(332,"(opcional)"),ng()(),wl(333,"p"),Ux(334,"Subtitulo do Header da p\xE1gina."),ng(),wl(335,"p"),Ux(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(337,"code"),Ux(338,"<b>"),ng(),Ux(339," (negrito), "),wl(340,"code"),Ux(341,"<strong>"),ng(),Ux(342," (negrito), "),wl(343,"code"),Ux(344,"<i>"),ng(),Ux(345," (it\xE1lico), "),wl(346,"code"),Ux(347,"<em>"),ng(),Ux(348,` (it\xE1lico) e
`),wl(349,"code"),Ux(350,"<u>"),ng(),Ux(351," (sublinhado)."),ng(),wl(352,"p"),Ux(353,"Exemplo:"),ng(),wl(354,"pre")(355,"code",31),Ux(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),ng()(),wl(357,"blockquote")(358,"p"),Ux(359,"Requer que "),wl(360,"code"),Ux(361,"p-title"),ng(),Ux(362," esteja definido."),ng()()()(),wl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),Ux(367," p-title"),Ul(368,"br"),ng()()(),wl(369,"td",20)(370,"code",25),Ux(371,"string"),ng()(),wl(372,"td",22),Ux(373,"-"),ng(),wl(374,"td",23)(375,"p"),Ux(376,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(377,"h3",12),Ux(378,"M\xE9todos"),ng(),wl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),Ux(385," clearInputSearch "),ng()()()()(),wl(386,"tr",23)(387,"td",23)(388,"p"),Ux(389,"Limpa o campo de pesquisa."),ng()()()(),Ul(390,"br"),wl(391,"h3"),Ux(392,"Interfaces"),ng(),wl(393,"h4",34)(394,"code",5),Ux(395,"PoBreadcrumbItem"),ng()(),wl(396,"div",2)(397,"p"),Ux(398,"Interface que define cada item do componente "),wl(399,"strong"),Ux(400,"po-breadcrumb"),ng(),Ux(401,"."),ng()(),wl(402,"h4",12),Ux(403,"Propriedades"),ng(),wl(404,"table",13)(405,"tr",14)(406,"th",15),Ux(407,"Nome"),ng(),wl(408,"th",15),Ux(409,"Tipo"),ng(),wl(410,"th",15),Ux(411,"Descri\xE7\xE3o"),ng()(),wl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),Ux(416," action"),Ul(417,"br"),ng()()(),wl(418,"td",20)(419,"code",35),Ux(420,"Function"),ng()(),wl(421,"td",23)(422,"em")(423,"strong"),Ux(424,"(opcional)"),ng()(),wl(425,"p"),Ux(426,"A\xE7\xE3o executada ao clicar no item."),ng(),wl(427,"blockquote")(428,"p"),Ux(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),wl(430,"em"),Ux(431,"label"),ng(),Ux(432," do item como par\xE2metro para execu\xE7\xE3o."),ng()()()(),wl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Ux(437," label"),Ul(438,"br"),ng()()(),wl(439,"td",20)(440,"code",25),Ux(441,"string"),ng()(),wl(442,"td",23)(443,"p"),Ux(444,"R\xF3tulo do item."),ng()()(),wl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),Ux(449," link"),Ul(450,"br"),ng()()(),wl(451,"td",20)(452,"code",25),Ux(453,"string"),ng()(),wl(454,"td",23)(455,"em")(456,"strong"),Ux(457,"(opcional)"),ng()(),wl(458,"p"),Ux(459,"Url do item."),ng(),wl(460,"blockquote")(461,"p"),Ux(462,"Caso o item tamb\xE9m contenha uma "),wl(463,"em"),Ux(464,"action"),ng(),Ux(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),wl(466,"em"),Ux(467,"link"),ng(),Ux(468,"."),ng()(),wl(469,"blockquote")(470,"p"),Ux(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),wl(472,"strong")(473,"a",36),Ux(474,"Veja um exemplo de como criar rotas aqui"),ng()(),Ux(475,"."),ng()(),wl(476,"blockquote")(477,"p"),Ux(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),wl(479,"code"),Ux(480,"p-favorite-service"),ng(),Ux(481," consiga favoritar ou desfavoritar."),ng()()()()(),wl(482,"h4",34)(483,"code",5),Ux(484,"PoBreadcrumb"),ng()(),wl(485,"div",2)(486,"p"),Ux(487,"Interface que define o "),wl(488,"code"),Ux(489,"po-breadcrumb"),ng(),Ux(490,"."),ng()(),wl(491,"h4",12),Ux(492,"Propriedades"),ng(),wl(493,"table",13)(494,"tr",14)(495,"th",15),Ux(496,"Nome"),ng(),wl(497,"th",15),Ux(498,"Tipo"),ng(),wl(499,"th",15),Ux(500,"Descri\xE7\xE3o"),ng()(),wl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),Ux(505," favorite"),Ul(506,"br"),ng()()(),wl(507,"td",20)(508,"code",25),Ux(509,"string"),ng()(),wl(510,"td",23)(511,"em")(512,"strong"),Ux(513,"(opcional)"),ng()(),wl(514,"p"),Ux(515,"Permite definir uma URL para favoritar ou desfavoritar."),ng(),wl(516,"blockquote")(517,"p"),Ux(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),wl(519,"code"),Ux(520,"p-favorite-service"),ng(),Ux(521," do componente "),wl(522,"code"),Ux(523,"po-breadcrumb"),ng(),Ux(524,"."),ng()()()(),wl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),Ux(529," items"),Ul(530,"br"),ng()()(),wl(531,"td",20)(532,"code",37),Ux(533,"Array<PoBreadcrumbItem>"),ng()(),wl(534,"td",23)(535,"p"),Ux(536,"Lista de itens do "),wl(537,"em"),Ux(538,"breadcrumb"),ng(),Ux(539,"."),ng(),wl(540,"p")(541,"strong"),Ux(542,"Exemplo:"),ng()(),wl(543,"pre")(544,"code"),Ux(545,`{ label: 'Po Portal', link: 'portal' }
`),ng()()()(),wl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),Ux(550," params"),Ul(551,"br"),ng()()(),wl(552,"td",20)(553,"code",38),Ux(554,"object"),ng()(),wl(555,"td",23)(556,"em")(557,"strong"),Ux(558,"(opcional)"),ng()(),wl(559,"p"),Ux(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),ng()()()(),wl(561,"h4",34)(562,"code",5),Ux(563,"PoDisclaimer"),ng()(),wl(564,"div",2)(565,"p"),Ux(566,"Interface que representa o objeto "),wl(567,"code"),Ux(568,"po-disclaimer"),ng(),Ux(569,"."),ng()(),wl(570,"h4",12),Ux(571,"Propriedades"),ng(),wl(572,"table",13)(573,"tr",14)(574,"th",15),Ux(575,"Nome"),ng(),wl(576,"th",15),Ux(577,"Tipo"),ng(),wl(578,"th",15),Ux(579,"Descri\xE7\xE3o"),ng()(),wl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),Ux(584," hideClose"),Ul(585,"br"),ng()()(),wl(586,"td",20)(587,"code",39),Ux(588,"boolean"),ng()(),wl(589,"td",23)(590,"em")(591,"strong"),Ux(592,"(opcional)"),ng()(),wl(593,"p"),Ux(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),wl(595,"em"),Ux(596,"disclaimer"),ng(),Ux(597,"."),ng()()(),wl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),Ux(602," label"),Ul(603,"br"),ng()()(),wl(604,"td",20)(605,"code",25),Ux(606,"string"),ng()(),wl(607,"td",23)(608,"em")(609,"strong"),Ux(610,"(opcional)"),ng()(),wl(611,"p"),Ux(612,"Texto de exibi\xE7\xE3o do objeto."),ng()()(),wl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),Ux(617," property"),Ul(618,"br"),ng()()(),wl(619,"td",20)(620,"code",25),Ux(621,"string"),ng()(),wl(622,"td",23)(623,"em")(624,"strong"),Ux(625,"(opcional)"),ng()(),wl(626,"p"),Ux(627,"Nome da propriedade vinculada ao objeto "),wl(628,"em"),Ux(629,"disclaimer"),ng(),Ux(630,"."),ng()()(),wl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),Ux(635," value"),Ul(636,"br"),ng()()(),wl(637,"td",20)(638,"code",40),Ux(639,"any"),ng()(),wl(640,"td",23)(641,"p"),Ux(642,"Valor do objeto."),ng()()()(),wl(643,"h4",34)(644,"code",5),Ux(645,"PoDisclaimerGroupRemoveAction"),ng()(),wl(646,"div",2)(647,"p"),Ux(648,"Estrutura do objeto representando o estado dos "),wl(649,"em"),Ux(650,"disclaimers"),ng(),Ux(651," ap\xF3s a remo\xE7\xE3o."),ng()(),wl(652,"h4",12),Ux(653,"Propriedades"),ng(),wl(654,"table",13)(655,"tr",14)(656,"th",15),Ux(657,"Nome"),ng(),wl(658,"th",15),Ux(659,"Tipo"),ng(),wl(660,"th",15),Ux(661,"Descri\xE7\xE3o"),ng()(),wl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),Ux(666," currentDisclaimers"),Ul(667,"br"),ng()()(),wl(668,"td",20)(669,"code",41),Ux(670,"Array<PoDisclaimer>"),ng()(),wl(671,"td",23)(672,"p"),Ux(673,"Lista com os "),wl(674,"em"),Ux(675,"disclaimers"),ng(),Ux(676," atuais (restantes)."),ng()()(),wl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),Ux(681," removedDisclaimer"),Ul(682,"br"),ng()()(),wl(683,"td",20)(684,"code",42),Ux(685,"PoDisclaimer"),ng()(),wl(686,"td",23)(687,"p")(688,"em"),Ux(689,"Disclaimer"),ng(),Ux(690," que foi removido."),ng()()()(),wl(691,"h4",34)(692,"code",5),Ux(693,"PoDisclaimerGroup"),ng()(),wl(694,"div",2)(695,"p"),Ux(696,"Interface que representa o objeto "),wl(697,"code"),Ux(698,"po-disclaimer-group"),ng(),Ux(699,"."),ng()(),wl(700,"h4",12),Ux(701,"Propriedades"),ng(),wl(702,"table",13)(703,"tr",14)(704,"th",15),Ux(705,"Nome"),ng(),wl(706,"th",15),Ux(707,"Tipo"),ng(),wl(708,"th",15),Ux(709,"Descri\xE7\xE3o"),ng()(),wl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),Ux(714," change"),Ul(715,"br"),ng()()(),wl(716,"td",20)(717,"code",35),Ux(718,"Function"),ng()(),wl(719,"td",23)(720,"em")(721,"strong"),Ux(722,"(opcional)"),ng()(),wl(723,"p"),Ux(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),wl(725,"em"),Ux(726,"disclaimers"),ng(),Ux(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),wl(728,"em"),Ux(729,"disclaimers"),ng(),Ux(730,"."),ng()()(),wl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),Ux(735," disclaimers"),Ul(736,"br"),ng()()(),wl(737,"td",20)(738,"code",41),Ux(739,"Array<PoDisclaimer>"),ng()(),wl(740,"td",23)(741,"p"),Ux(742,"Lista de "),wl(743,"em"),Ux(744,"disclaimers"),ng(),Ux(745,"."),ng(),wl(746,"p"),Ux(747,"Exemplo:"),ng(),wl(748,"pre")(749,"code"),Ux(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),ng()(),wl(751,"p"),Ux(752,"Para que a lista de "),wl(753,"em"),Ux(754,"disclaimers"),ng(),Ux(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),wl(756,"code"),Ux(757,"PoDisclaimer"),ng(),Ux(758,"."),ng(),wl(759,"p"),Ux(760,"Exemplo:"),ng(),wl(761,"pre")(762,"code"),Ux(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),ng()()()(),wl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),Ux(768," hideRemoveAll"),Ul(769,"br"),ng()()(),wl(770,"td",20)(771,"code",39),Ux(772,"boolean"),ng()(),wl(773,"td",23)(774,"em")(775,"strong"),Ux(776,"(opcional)"),ng()(),wl(777,"p"),Ux(778,"Oculta o bot\xE3o para remover todos os "),wl(779,"em"),Ux(780,"disclaimers"),ng(),Ux(781," do grupo."),ng(),wl(782,"blockquote")(783,"p"),Ux(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),wl(785,"em"),Ux(786,"disclaimers"),ng(),Ux(787," com a op\xE7\xE3o "),wl(788,"code"),Ux(789,"hideClose"),ng(),Ux(790," habilitada."),ng()()()(),wl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),Ux(795," remove"),Ul(796,"br"),ng()()(),wl(797,"td",20)(798,"code",35),Ux(799,"Function"),ng()(),wl(800,"td",23)(801,"em")(802,"strong"),Ux(803,"(opcional)"),ng()(),wl(804,"p"),Ux(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),wl(806,"em"),Ux(807,"disclaimer"),ng(),Ux(808,` for removido da lista de
`),wl(809,"em"),Ux(810,"disclaimers"),ng(),Ux(811," pelo usu\xE1rio."),ng(),wl(812,"p"),Ux(813,"Recebe como par\xE2metro um objeto conforme a interface "),wl(814,"code"),Ux(815,"PoDisclaimerGroupRemoveAction"),ng(),Ux(816,"."),ng()()(),wl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),Ux(821," removeAll"),Ul(822,"br"),ng()()(),wl(823,"td",20)(824,"code",35),Ux(825,"Function"),ng()(),wl(826,"td",23)(827,"em")(828,"strong"),Ux(829,"(opcional)"),ng()(),wl(830,"p"),Ux(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),wl(832,"em"),Ux(833,"disclaimers"),ng(),Ux(834," forem removidos da lista de "),wl(835,"em"),Ux(836,"disclaimers"),ng(),Ux(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),ng(),wl(838,"p"),Ux(839,"Recebe como par\xE2metro uma lista contendo todos os "),wl(840,"code"),Ux(841,"disclaimers"),ng(),Ux(842," removidos."),ng()()(),wl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),Ux(847," title"),Ul(848,"br"),ng()()(),wl(849,"td",20)(850,"code",25),Ux(851,"string"),ng()(),wl(852,"td",23)(853,"em")(854,"strong"),Ux(855,"(opcional)"),ng()(),wl(856,"p"),Ux(857,"T\xEDtulo do grupo de "),wl(858,"em"),Ux(859,"disclaimers"),ng(),Ux(860,"."),ng()()()(),wl(861,"h4",34)(862,"code",5),Ux(863,"PoPageAction"),ng()(),wl(864,"div",2)(865,"p"),Ux(866,"Interface para as a\xE7\xF5es dos componentes "),wl(867,"code"),Ux(868,"po-page-default"),ng(),Ux(869," e "),wl(870,"code"),Ux(871,"po-page-list"),ng(),Ux(872,"."),ng(),wl(873,"p"),Ux(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),wl(875,"em"),Ux(876,"dropdown"),ng(),Ux(877,`,
conforme o `),wl(878,"code"),Ux(879,"PoPageActionsLayout"),ng(),Ux(880," e o tamanho da tela."),ng(),wl(881,"blockquote")(882,"p"),Ux(883,"As propriedades "),wl(884,"code"),Ux(885,"separator"),ng(),Ux(886,", "),wl(887,"code"),Ux(888,"selected"),ng(),Ux(889," e "),wl(890,"code"),Ux(891,"subItems"),ng(),Ux(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),wl(893,"em"),Ux(894,"dropdown"),ng(),Ux(895,"."),ng()()(),wl(896,"h4",12),Ux(897,"Propriedades"),ng(),wl(898,"table",13)(899,"tr",14)(900,"th",15),Ux(901,"Nome"),ng(),wl(902,"th",15),Ux(903,"Tipo"),ng(),wl(904,"th",15),Ux(905,"Descri\xE7\xE3o"),ng()(),wl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),Ux(910," action"),Ul(911,"br"),ng()()(),wl(912,"td",20)(913,"code",35),Ux(914,"Function"),ng()(),wl(915,"td",23)(916,"em")(917,"strong"),Ux(918,"(opcional)"),ng()(),wl(919,"p"),Ux(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(921,"p"),Ux(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(923,"code"),Ux(924,"subItems"),ng(),Ux(925,"."),ng(),wl(926,"blockquote")(927,"p"),Ux(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(929,"em"),Ux(930,"bind"),ng(),Ux(931,`:
`),wl(932,"code"),Ux(933,"action: this.myFunction.bind(this)"),ng()()()()(),wl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),Ux(938," disabled"),Ul(939,"br"),ng()()(),wl(940,"td",20)(941,"code",39),Ux(942,"boolean "),ng(),wl(943,"code",35),Ux(944," Function"),ng()(),wl(945,"td",23)(946,"em")(947,"strong"),Ux(948,"(opcional)"),ng()(),wl(949,"p"),Ux(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),Ux(955," icon"),Ul(956,"br"),ng()()(),wl(957,"td",20)(958,"code",25),Ux(959,"string "),ng(),wl(960,"code",43),Ux(961," TemplateRef<void>"),ng()(),wl(962,"td",23)(963,"em")(964,"strong"),Ux(965,"(opcional)"),ng()(),wl(966,"p"),Ux(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(968,"p"),Ux(969,"Aceita \xEDcones da "),wl(970,"a",6),Ux(971,"Biblioteca de \xEDcones"),ng(),Ux(972,`, fontes externas (ex: Font Awesome)
ou um `),wl(973,"code"),Ux(974,"TemplateRef"),ng(),Ux(975," para \xEDcones customizados."),ng(),wl(976,"pre")(977,"code"),Ux(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),Ux(983," kind"),Ul(984,"br"),ng()()(),wl(985,"td",20)(986,"code",25),Ux(987,"string"),ng()(),wl(988,"td",23)(989,"em")(990,"strong"),Ux(991,"(opcional)"),ng()(),wl(992,"p"),Ux(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),wl(994,"em"),Ux(995,"dropdown"),ng(),Ux(996,"."),ng(),wl(997,"p"),Ux(998,"Valores permitidos:"),ng(),wl(999,"ul")(1e3,"li")(1001,"code"),Ux(1002,"primary"),ng(),Ux(1003,": bot\xE3o com maior destaque visual."),ng(),wl(1004,"li")(1005,"code"),Ux(1006,"secondary"),ng(),Ux(1007,": estilo padr\xE3o."),ng()(),wl(1008,"blockquote")(1009,"p"),Ux(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),ng()(),wl(1011,"blockquote")(1012,"p"),Ux(1013,"Somente uma a\xE7\xE3o pode ter "),wl(1014,"code"),Ux(1015,"kind"),ng(),Ux(1016," igual a "),wl(1017,"code"),Ux(1018,"primary"),ng(),Ux(1019,". Caso mais de uma defina "),wl(1020,"code"),Ux(1021,"primary"),ng(),Ux(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),wl(1023,"code"),Ux(1024,"secondary"),ng(),Ux(1025,"."),ng()(),wl(1026,"blockquote")(1027,"p"),Ux(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),wl(1029,"code"),Ux(1030,"PoPageActionsLayout"),ng(),Ux(1031,"."),ng()()()(),wl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Ux(1036," label"),Ul(1037,"br"),ng()()(),wl(1038,"td",20)(1039,"code",25),Ux(1040,"string"),ng()(),wl(1041,"td",23)(1042,"p"),Ux(1043,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(1044,"p"),Ux(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(1046,"code"),Ux(1047,"subItems"),ng(),Ux(1048,"."),ng()()(),wl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Ux(1053," selected"),Ul(1054,"br"),ng()()(),wl(1055,"td",20)(1056,"code",39),Ux(1057,"boolean"),ng()(),wl(1058,"td",23)(1059,"em")(1060,"strong"),Ux(1061,"(opcional)"),ng()(),wl(1062,"p"),Ux(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),Ux(1068," separator"),Ul(1069,"br"),ng()()(),wl(1070,"td",20)(1071,"code",39),Ux(1072,"boolean"),ng()(),wl(1073,"td",23)(1074,"em")(1075,"strong"),Ux(1076,"(opcional)"),ng()(),wl(1077,"p"),Ux(1078,"Atribui uma linha separadora acima do item."),ng()()(),wl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),Ux(1083," subItems"),Ul(1084,"br"),ng()()(),wl(1085,"td",20)(1086,"code",44),Ux(1087,"Array<PoPopupAction>"),ng()(),wl(1088,"td",23)(1089,"em")(1090,"strong"),Ux(1091,"(opcional)"),ng()(),wl(1092,"p"),Ux(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(1094,"p"),Ux(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(1096,"blockquote")(1097,"p"),Ux(1098,"As propriedades "),wl(1099,"code"),Ux(1100,"disabled"),ng(),Ux(1101,", "),wl(1102,"code"),Ux(1103,"type"),ng(),Ux(1104," e "),wl(1105,"code"),Ux(1106,"visible"),ng(),Ux(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(1108,"blockquote")(1109,"p"),Ux(1110,"Quando "),wl(1111,"code"),Ux(1112,"url"),ng(),Ux(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(1114,"blockquote")(1115,"p"),Ux(1116,"Em subn\xEDveis aninhados, o "),wl(1117,"code"),Ux(1118,"icon"),ng(),Ux(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),Ux(1124," type"),Ul(1125,"br"),ng()()(),wl(1126,"td",20)(1127,"code",25),Ux(1128,"string"),ng()(),wl(1129,"td",23)(1130,"em")(1131,"strong"),Ux(1132,"(opcional)"),ng()(),wl(1133,"p"),Ux(1134,"Define a cor do item."),ng(),wl(1135,"p"),Ux(1136,"Valores v\xE1lidos:"),ng(),wl(1137,"ul")(1138,"li")(1139,"code"),Ux(1140,"default"),ng()(),wl(1141,"li")(1142,"code"),Ux(1143,"danger"),ng()()()()(),wl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),Ux(1148," url"),Ul(1149,"br"),ng()()(),wl(1150,"td",20)(1151,"code",25),Ux(1152,"string"),ng()(),wl(1153,"td",23)(1154,"em")(1155,"strong"),Ux(1156,"(opcional)"),ng()(),wl(1157,"p"),Ux(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(1159,"p"),Ux(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(1161,"code"),Ux(1162,"url"),ng(),Ux(1163," \xE9 informada em um agrupador, o clique "),wl(1164,"strong"),Ux(1165,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(1167,"blockquote")(1168,"p"),Ux(1169,"Quando informada, tem prioridade sobre a propriedade "),wl(1170,"code"),Ux(1171,"action"),ng(),Ux(1172,"."),ng()()()(),wl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),Ux(1177," visible"),Ul(1178,"br"),ng()()(),wl(1179,"td",20)(1180,"code",39),Ux(1181,"boolean "),ng(),wl(1182,"code",35),Ux(1183," Function"),ng()(),wl(1184,"td",23)(1185,"em")(1186,"strong"),Ux(1187,"(opcional)"),ng()(),wl(1188,"p"),Ux(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(1190,"h4",34)(1191,"code",5),Ux(1192,"PoPageFilter"),ng()(),wl(1193,"div",2)(1194,"p"),Ux(1195,"Interface para o atributo "),wl(1196,"code"),Ux(1197,"filter"),ng(),Ux(1198," do componente "),wl(1199,"code"),Ux(1200,"po-page-list"),ng(),Ux(1201,"."),ng()(),wl(1202,"h4",12),Ux(1203,"Propriedades"),ng(),wl(1204,"table",13)(1205,"tr",14)(1206,"th",15),Ux(1207,"Nome"),ng(),wl(1208,"th",15),Ux(1209,"Tipo"),ng(),wl(1210,"th",15),Ux(1211,"Descri\xE7\xE3o"),ng()(),wl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),Ux(1216," action"),Ul(1217,"br"),ng()()(),wl(1218,"td",20)(1219,"code",35),Ux(1220,"Function"),ng()(),wl(1221,"td",23)(1222,"em")(1223,"strong"),Ux(1224,"(opcional)"),ng()(),wl(1225,"p"),Ux(1226,"A\xE7\xE3o a ser executada."),ng()()(),wl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),Ux(1231," advancedAction"),Ul(1232,"br"),ng()()(),wl(1233,"td",20)(1234,"code",35),Ux(1235,"Function"),ng()(),wl(1236,"td",23)(1237,"em")(1238,"strong"),Ux(1239,"(opcional)"),ng()(),wl(1240,"p"),Ux(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),wl(1242,"em"),Ux(1243,"click"),ng(),Ux(1244," atrav\xE9s do r\xF3tulo "),wl(1245,"strong"),Ux(1246,"Busca Avan\xE7ada"),ng(),Ux(1247,"."),ng()()(),wl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),Ux(1252," placeholder"),Ul(1253,"br"),ng()()(),wl(1254,"td",20)(1255,"code",25),Ux(1256,"string"),ng()(),wl(1257,"td",23)(1258,"em")(1259,"strong"),Ux(1260,"(opcional)"),ng()(),wl(1261,"p"),Ux(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),ng()()(),wl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),Ux(1267," width"),Ul(1268,"br"),ng()()(),wl(1269,"td",20)(1270,"code",45),Ux(1271,"number"),ng()(),wl(1272,"td",23)(1273,"em")(1274,"strong"),Ux(1275,"(opcional)"),ng()(),wl(1276,"p"),Ux(1277,"Tamanho do filtro em tela, utilizando o "),wl(1278,"em"),Ux(1279,"Grid System"),ng(),Ux(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),ng()()()(),wl(1281,"h4",34)(1282,"code",5),Ux(1283,"PoPageListLiterals"),ng()(),wl(1284,"div",2)(1285,"p"),Ux(1286,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1287,"code"),Ux(1288,"po-page-list"),ng(),Ux(1289,"."),ng()(),wl(1290,"h4",12),Ux(1291,"Propriedades"),ng(),wl(1292,"table",13)(1293,"tr",14)(1294,"th",15),Ux(1295,"Nome"),ng(),wl(1296,"th",15),Ux(1297,"Tipo"),ng(),wl(1298,"th",15),Ux(1299,"Descri\xE7\xE3o"),ng()(),wl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),Ux(1304," otherActions"),Ul(1305,"br"),ng()()(),wl(1306,"td",20)(1307,"code",25),Ux(1308,"string"),ng()(),wl(1309,"td",23)(1310,"em")(1311,"strong"),Ux(1312,"(opcional)"),ng()(),wl(1313,"p"),Ux(1314,"Legenda do "),wl(1315,"code"),Ux(1316,"po-dropdown"),ng(),Ux(1317," de a\xE7\xF5es."),ng()()()()());},dependencies:[fP],encapsulation:2})}return s})();var Le=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(C(Xn),C(Cn))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-page-list-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),ng()()()),r&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,fe,xe,Ce,ye],encapsulation:2})}return s})();var We=[{path:"",component:Le}],we=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[vL.forChild(We),vL]})}return s})();var jt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[u5,we]})}return s})();export{jt as DocPoPageListModule};