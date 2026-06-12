import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,S,c9 as Qde,$ as PNe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,bz as pb,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,bJ as Ww,b5 as Ko,b6 as U3,W as we,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Hl(0,"po-page-list",0);},dependencies:[PNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page List Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-list-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return s})();var Se=(()=>{class s{poNotification=f(Xp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=gx();Cl(0,"po-page-list",6),Hl(1,"po-divider")(2,"po-info",7),og(),Hl(3,"po-divider"),Cl(4,"form",null,0)(6,"div",8)(7,"po-input",9),gw("ngModelChange",function(a){return Jy(d),Zx(n.action.action,a)||(n.action.action=a),e_(a)}),og(),Z0(),Cl(8,"po-input",10),gw("ngModelChange",function(a){return Jy(d),Zx(n.action.label,a)||(n.action.label=a),e_(a)}),og(),Z0(),Cl(9,"po-input",11),gw("ngModelChange",function(a){return Jy(d),Zx(n.action.url,a)||(n.action.url=a),e_(a)}),og(),Z0(),Cl(10,"po-select",12),gw("ngModelChange",function(a){return Jy(d),Zx(n.action.type,a)||(n.action.type=a),e_(a)}),og(),Z0(),Cl(11,"po-select",13),gw("ngModelChange",function(a){return Jy(d),Zx(n.action.icon,a)||(n.action.icon=a),e_(a)}),og(),Z0(),Cl(12,"po-checkbox-group",14),gw("ngModelChange",function(a){return Jy(d),Zx(n.action,a)||(n.action=a),e_(a)}),og(),Z0(),og(),Cl(13,"div",8)(14,"po-button",15),dt("p-click",function(){return n.addAction(n.action)}),og()()(),Hl(15,"po-divider"),Cl(16,"form",null,1)(18,"div",8)(19,"po-input",16),gw("ngModelChange",function(a){return Jy(d),Zx(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),e_(a)}),og(),Z0(),og()(),Cl(20,"form",null,2)(22,"div",8)(23,"po-input",17),gw("ngModelChange",function(a){return Jy(d),Zx(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),e_(a)}),og(),Z0(),Cl(24,"po-input",18),gw("ngModelChange",function(a){return Jy(d),Zx(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),e_(a)}),og(),Z0(),og(),Cl(25,"div",8)(26,"po-button",19),dt("p-click",function(){return n.addBreadcrumbItem()}),og()()(),Hl(27,"po-divider"),Cl(28,"form",null,3)(30,"div",8)(31,"po-input",20),gw("ngModelChange",function(a){return Jy(d),Zx(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),e_(a)}),og(),Z0(),Cl(32,"po-input",21),gw("ngModelChange",function(a){return Jy(d),Zx(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),e_(a)}),og(),Z0(),og(),Cl(33,"div",8)(34,"po-button",22),dt("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Hl(35,"po-divider"),Cl(36,"div",8)(37,"po-input",23),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),e_(a)}),dt("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),og(),Z0(),Cl(38,"po-switch",24),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),e_(a)}),dt("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),og(),Z0(),og(),Cl(39,"form",null,4)(41,"div",8)(42,"po-input",25),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerLabel,a)||(n.disclaimerLabel=a),e_(a)}),og(),Z0(),Cl(43,"po-input",26),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerProperty,a)||(n.disclaimerProperty=a),e_(a)}),og(),Z0(),og(),Cl(44,"div",8)(45,"po-input",27),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerValue,a)||(n.disclaimerValue=a),e_(a)}),og(),Z0(),Cl(46,"po-switch",28),gw("ngModelChange",function(a){return Jy(d),Zx(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),e_(a)}),og(),Z0(),og(),Cl(47,"div",8)(48,"po-button",29),dt("p-click",function(){return n.addDisclaimer()}),og()()(),Hl(49,"po-divider"),Cl(50,"form",null,5)(52,"po-input",30),gw("ngModelChange",function(a){return Jy(d),Zx(n.title,a)||(n.title=a),e_(a)}),og(),Z0(),Cl(53,"po-input",31),gw("ngModelChange",function(a){return Jy(d),Zx(n.subtitle,a)||(n.subtitle=a),e_(a)}),og(),Z0(),Cl(54,"po-input",32),gw("ngModelChange",function(a){return Jy(d),Zx(n.filter.placeholder,a)||(n.filter.placeholder=a),e_(a)}),og(),Z0(),Cl(55,"po-input",33),gw("ngModelChange",function(a){return Jy(d),Zx(n.filter.width,a)||(n.filter.width=a),e_(a)}),og(),Z0(),Cl(56,"po-input",34),gw("ngModelChange",function(a){return Jy(d),Zx(n.literals,a)||(n.literals=a),e_(a)}),dt("p-change",function(){return n.changeLiterals()}),og(),Z0(),Cl(57,"po-radio-group",35),gw("ngModelChange",function(a){return Jy(d),Zx(n.componentsSize,a)||(n.componentsSize=a),e_(a)}),og(),Z0(),Cl(58,"div",8)(59,"po-button",36),dt("p-click",function(){return n.restore()}),og()()();}if(r&2){let d=Sx(5),p=Sx(21),a=Sx(29),Le=Sx(40);ZE("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),ZE("p-value",n.filterModel),Lp(5),pw("ngModel",n.action.action),X0(),Lp(),pw("ngModel",n.action.label),X0(),Lp(),pw("ngModel",n.action.url),X0(),Lp(),pw("ngModel",n.action.type),ZE("p-options",n.typeOptions),X0(),Lp(),pw("ngModel",n.action.icon),ZE("p-options",n.iconOptions),X0(),Lp(),pw("ngModel",n.action),ZE("p-options",n.actionOptions),X0(),Lp(2),ZE("p-disabled",d.form.invalid),Lp(5),pw("ngModel",n.breadcrumb.favorite),X0(),Lp(4),pw("ngModel",n.breadcrumbItem.label),X0(),Lp(),pw("ngModel",n.breadcrumbItem.link),X0(),Lp(2),ZE("p-disabled",p.invalid),Lp(5),pw("ngModel",n.breadcrumbParams.property),X0(),Lp(),pw("ngModel",n.breadcrumbParams.value),X0(),Lp(2),ZE("p-disabled",a.invalid),Lp(3),pw("ngModel",n.disclaimerGroupTitle),X0(),Lp(),pw("ngModel",n.disclaimerGroupHideRemoveAll),X0(),Lp(4),pw("ngModel",n.disclaimerLabel),X0(),Lp(),pw("ngModel",n.disclaimerProperty),X0(),Lp(2),pw("ngModel",n.disclaimerValue),X0(),Lp(),pw("ngModel",n.disclaimerHideClose),X0(),Lp(2),ZE("p-disabled",Le.invalid),Lp(4),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.subtitle),X0(),Lp(),pw("ngModel",n.filter.placeholder),X0(),Lp(),pw("ngModel",n.filter.width),X0(),Lp(),pw("ngModel",n.literals),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0();}},dependencies:[lY,pb,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,H3,sme,PNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page List Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-list
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-list-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Xp);poDialog=f(Qde);router=f(Cn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&zl(ke,7)(Be,7),r&2){let d;uo(d=fo())&&(n.advancedFilterModal=d.first),uo(d=fo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=gx();Cl(0,"po-page-list",3,0),Hl(2,"po-table",4),og(),Cl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),gw("ngModelChange",function(a){return Jy(d),Zx(n.jobDescription,a)||(n.jobDescription=a),e_(a)}),og(),Z0(),Cl(8,"po-checkbox-group",7),gw("ngModelChange",function(a){return Jy(d),Zx(n.status,a)||(n.status=a),e_(a)}),og(),Z0(),og()();}r&2&&(ZE("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Lp(2),ZE("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Lp(),ZE("p-primary-action",n.advancedFilterPrimaryAction),Lp(4),pw("ngModel",n.jobDescription),ZE("p-options",n.jobDescriptionOptions),X0(),Lp(),pw("ngModel",n.status),ZE("p-options",n.statusOptions),X0());},dependencies:[lY,sY,aY,gk,fk,L3,Ww,Ko,PNe,U3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page List - Hiring Processes"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-list
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-page-list-hiring-processes"),og(),Hl(27,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,je,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Pe],encapsulation:2})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Cl(7,"code"),qx(8,"po-page-default"),og(),qx(9,", "),Cl(10,"code"),qx(11,"po-page-detail"),og(),qx(12,`,
`),Cl(13,"code"),qx(14,"po-page-edit"),og(),qx(15,", "),Cl(16,"code"),qx(17,"po-page-list"),og(),qx(18," e "),Cl(19,"code"),qx(20,"po-page-slide"),og(),qx(21,"."),og()(),Cl(22,"h3",3),qx(23,"Componente"),og(),Cl(24,"h4",4)(25,"code",5),qx(26,"PoPageListComponent"),og()(),Cl(27,"div",2)(28,"p"),qx(29,"O componente "),Cl(30,"code"),qx(31,"po-page-list"),og(),qx(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),og(),Cl(33,"p"),qx(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Cl(35,"em"),qx(36,"click"),og(),qx(37," do \xEDcone "),Cl(38,"a",6),qx(39,"an-magnifying-glass"),og(),qx(40,`
quanto ao pressionar da tecla `),Cl(41,"em"),qx(42,"ENTER"),og(),qx(43," quando o foco estiver no campo de pesquisa."),og(),Cl(44,"p"),qx(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Cl(46,"a",7)(47,"code"),qx(48,"po-disclaimer-group"),og()(),qx(49,"."),og(),Cl(50,"h4"),qx(51,"Tokens customiz\xE1veis"),og(),Cl(52,"blockquote")(53,"p"),qx(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(55,"a",8),qx(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(57,"."),og()(),Cl(58,"table")(59,"thead")(60,"tr")(61,"th"),qx(62,"Propriedade"),og(),Cl(63,"th"),qx(64,"Descri\xE7\xE3o"),og(),Cl(65,"th"),qx(66,"Valor Padr\xE3o"),og()()(),Cl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),qx(71,"Header"),og()(),Hl(72,"td")(73,"td"),og(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--padding"),og()(),Cl(78,"td"),qx(79,"Espa\xE7amento do header"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--spacing-xs) var(--spacing-md)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--gap"),og()(),Cl(87,"td"),qx(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--spacing-md)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--gap-actions"),og()(),Cl(96,"td"),qx(97,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--spacing-xs)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--font-family"),og()(),Cl(105,"td"),qx(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--font-family-theme)"),og()()(),Cl(110,"tr")(111,"td")(112,"strong"),qx(113,"Content"),og()(),Hl(114,"td")(115,"td"),og(),Cl(116,"tr")(117,"td")(118,"code"),qx(119,"--padding-content"),og()(),Cl(120,"td"),qx(121,"Espa\xE7amento do conte\xFAdo"),og(),Cl(122,"td")(123,"code"),qx(124,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Cl(125,"div",9)(126,"h4",10),qx(127,"Seletor"),og(),Cl(128,"pre",11),qx(129,`<po-page-list
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
`),og()(),Cl(130,"h4",12),qx(131,"Propriedades"),og(),Cl(132,"table",13)(133,"tr",14)(134,"th",15),qx(135,"Nome"),og(),Cl(136,"th",15),qx(137,"Tipo"),og(),Cl(138,"th",15),qx(139,"Padr\xE3o"),og(),Cl(140,"th",15),qx(141,"Descri\xE7\xE3o"),og()(),Cl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),qx(146," p-actions"),Hl(147,"br"),og()()(),Cl(148,"td",20)(149,"code",21),qx(150,"Array<PoPageAction>"),og()(),Cl(151,"td",22),qx(152,"-"),og(),Cl(153,"td",23)(154,"em")(155,"strong"),qx(156,"(opcional)"),og()(),Cl(157,"p"),qx(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Cl(159,"code"),qx(160,"PoPageAction"),og(),qx(161,"."),og()()(),Cl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),qx(166," p-breadcrumb"),Hl(167,"br"),og()()(),Cl(168,"td",20)(169,"code",24),qx(170,"PoBreadcrumb"),og()(),Cl(171,"td",22),qx(172,"-"),og(),Cl(173,"td",23)(174,"em")(175,"strong"),qx(176,"(opcional)"),og()(),Cl(177,"p"),qx(178,"Objeto que implementa as propriedades da interface "),Cl(179,"code"),qx(180,"PoBreadcrumb"),og(),qx(181,"."),og()()(),Cl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),qx(186," p-components-size"),Hl(187,"br"),og()()(),Cl(188,"td",20)(189,"code",25),qx(190,"string"),og()(),Cl(191,"td",22)(192,"p")(193,"code"),qx(194,"medium"),og()()(),Cl(195,"td",23)(196,"em")(197,"strong"),qx(198,"(opcional)"),og()(),Cl(199,"p"),qx(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(201,"ul")(202,"li")(203,"code"),qx(204,"small"),og(),qx(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(206,"li")(207,"code"),qx(208,"medium"),og(),qx(209,": aplica a medida medium de cada componente."),og()(),Cl(210,"blockquote")(211,"p"),qx(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(213,"code"),qx(214,"medium"),og(),qx(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(216,"a",26),qx(217,"po-theme"),og(),qx(218,"."),og()()()(),Cl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),qx(223," p-disclaimer-group"),Hl(224,"br"),og()()(),Cl(225,"td",20)(226,"code",27),qx(227,"PoDisclaimerGroup"),og()(),Cl(228,"td",22),qx(229,"-"),og(),Cl(230,"td",23)(231,"em")(232,"strong"),qx(233,"(opcional)"),og()(),Cl(234,"p"),qx(235,"Objeto que implementa as propriedades da interface "),Cl(236,"code"),qx(237,"PoDisclaimerGroup"),og(),qx(238,"."),og()()(),Cl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),qx(243," p-filter"),Hl(244,"br"),og()()(),Cl(245,"td",20)(246,"code",28),qx(247,"PoPageFilter"),og()(),Cl(248,"td",22),qx(249,"-"),og(),Cl(250,"td",23)(251,"p"),qx(252,"Objeto que implementa as propriedades da interface "),Cl(253,"code"),qx(254,"PoPageFilter"),og(),qx(255,"."),og()()(),Cl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),qx(260," p-literals"),Hl(261,"br"),og()()(),Cl(262,"td",20)(263,"code",29),qx(264,"PoPageListLiterals"),og()(),Cl(265,"td",22),qx(266,"-"),og(),Cl(267,"td",23)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Objeto com as literais usadas no "),Cl(273,"code"),qx(274,"po-page-list"),og(),qx(275,"."),og(),Cl(276,"p"),qx(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(278,"pre")(279,"code"),qx(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),og()(),Cl(281,"p"),qx(282,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(283,"pre")(284,"code"),qx(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),og()(),Cl(286,"p"),qx(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(288,"pre")(289,"code"),qx(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),og()(),Cl(291,"blockquote")(292,"p"),qx(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Cl(294,"a",30)(295,"code"),qx(296,"PoI18nService"),og()(),qx(297," ou "),Cl(298,"em"),qx(299,"browser"),og(),qx(300,"."),og()()()(),Cl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),qx(305," p-quick-search-value"),Hl(306,"br"),og()()(),Cl(307,"td",20)(308,"code",25),qx(309,"string"),og()(),Cl(310,"td",22),qx(311,"-"),og(),Cl(312,"td",23)(313,"em")(314,"strong"),qx(315,"(opcional)"),og()(),Cl(316,"p"),qx(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),og()()(),Cl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),qx(322," p-subtitle"),Hl(323,"br"),og()()(),Cl(324,"td",20)(325,"code",25),qx(326,"string"),og()(),Cl(327,"td",22),qx(328,"-"),og(),Cl(329,"td",23)(330,"em")(331,"strong"),qx(332,"(opcional)"),og()(),Cl(333,"p"),qx(334,"Subtitulo do Header da p\xE1gina."),og(),Cl(335,"p"),qx(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Cl(337,"code"),qx(338,"<b>"),og(),qx(339," (negrito), "),Cl(340,"code"),qx(341,"<strong>"),og(),qx(342," (negrito), "),Cl(343,"code"),qx(344,"<i>"),og(),qx(345," (it\xE1lico), "),Cl(346,"code"),qx(347,"<em>"),og(),qx(348,` (it\xE1lico) e
`),Cl(349,"code"),qx(350,"<u>"),og(),qx(351," (sublinhado)."),og(),Cl(352,"p"),qx(353,"Exemplo:"),og(),Cl(354,"pre")(355,"code",31),qx(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),og()(),Cl(357,"blockquote")(358,"p"),qx(359,"Requer que "),Cl(360,"code"),qx(361,"p-title"),og(),qx(362," esteja definido."),og()()()(),Cl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),qx(367," p-title"),Hl(368,"br"),og()()(),Cl(369,"td",20)(370,"code",25),qx(371,"string"),og()(),Cl(372,"td",22),qx(373,"-"),og(),Cl(374,"td",23)(375,"p"),qx(376,"T\xEDtulo da p\xE1gina."),og()()()(),Cl(377,"h3",12),qx(378,"M\xE9todos"),og(),Cl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),qx(385," clearInputSearch "),og()()()()(),Cl(386,"tr",23)(387,"td",23)(388,"p"),qx(389,"Limpa o campo de pesquisa."),og()()()(),Hl(390,"br"),Cl(391,"h3"),qx(392,"Interfaces"),og(),Cl(393,"h4",34)(394,"code",5),qx(395,"PoBreadcrumbItem"),og()(),Cl(396,"div",2)(397,"p"),qx(398,"Interface que define cada item do componente "),Cl(399,"strong"),qx(400,"po-breadcrumb"),og(),qx(401,"."),og()(),Cl(402,"h4",12),qx(403,"Propriedades"),og(),Cl(404,"table",13)(405,"tr",14)(406,"th",15),qx(407,"Nome"),og(),Cl(408,"th",15),qx(409,"Tipo"),og(),Cl(410,"th",15),qx(411,"Descri\xE7\xE3o"),og()(),Cl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),qx(416," action"),Hl(417,"br"),og()()(),Cl(418,"td",20)(419,"code",35),qx(420,"Function"),og()(),Cl(421,"td",23)(422,"em")(423,"strong"),qx(424,"(opcional)"),og()(),Cl(425,"p"),qx(426,"A\xE7\xE3o executada ao clicar no item."),og(),Cl(427,"blockquote")(428,"p"),qx(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Cl(430,"em"),qx(431,"label"),og(),qx(432," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Cl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),qx(437," label"),Hl(438,"br"),og()()(),Cl(439,"td",20)(440,"code",25),qx(441,"string"),og()(),Cl(442,"td",23)(443,"p"),qx(444,"R\xF3tulo do item."),og()()(),Cl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),qx(449," link"),Hl(450,"br"),og()()(),Cl(451,"td",20)(452,"code",25),qx(453,"string"),og()(),Cl(454,"td",23)(455,"em")(456,"strong"),qx(457,"(opcional)"),og()(),Cl(458,"p"),qx(459,"Url do item."),og(),Cl(460,"blockquote")(461,"p"),qx(462,"Caso o item tamb\xE9m contenha uma "),Cl(463,"em"),qx(464,"action"),og(),qx(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Cl(466,"em"),qx(467,"link"),og(),qx(468,"."),og()(),Cl(469,"blockquote")(470,"p"),qx(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Cl(472,"strong")(473,"a",36),qx(474,"Veja um exemplo de como criar rotas aqui"),og()(),qx(475,"."),og()(),Cl(476,"blockquote")(477,"p"),qx(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Cl(479,"code"),qx(480,"p-favorite-service"),og(),qx(481," consiga favoritar ou desfavoritar."),og()()()()(),Cl(482,"h4",34)(483,"code",5),qx(484,"PoBreadcrumb"),og()(),Cl(485,"div",2)(486,"p"),qx(487,"Interface que define o "),Cl(488,"code"),qx(489,"po-breadcrumb"),og(),qx(490,"."),og()(),Cl(491,"h4",12),qx(492,"Propriedades"),og(),Cl(493,"table",13)(494,"tr",14)(495,"th",15),qx(496,"Nome"),og(),Cl(497,"th",15),qx(498,"Tipo"),og(),Cl(499,"th",15),qx(500,"Descri\xE7\xE3o"),og()(),Cl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),qx(505," favorite"),Hl(506,"br"),og()()(),Cl(507,"td",20)(508,"code",25),qx(509,"string"),og()(),Cl(510,"td",23)(511,"em")(512,"strong"),qx(513,"(opcional)"),og()(),Cl(514,"p"),qx(515,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Cl(516,"blockquote")(517,"p"),qx(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Cl(519,"code"),qx(520,"p-favorite-service"),og(),qx(521," do componente "),Cl(522,"code"),qx(523,"po-breadcrumb"),og(),qx(524,"."),og()()()(),Cl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),qx(529," items"),Hl(530,"br"),og()()(),Cl(531,"td",20)(532,"code",37),qx(533,"Array<PoBreadcrumbItem>"),og()(),Cl(534,"td",23)(535,"p"),qx(536,"Lista de itens do "),Cl(537,"em"),qx(538,"breadcrumb"),og(),qx(539,"."),og(),Cl(540,"p")(541,"strong"),qx(542,"Exemplo:"),og()(),Cl(543,"pre")(544,"code"),qx(545,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Cl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),qx(550," params"),Hl(551,"br"),og()()(),Cl(552,"td",20)(553,"code",38),qx(554,"object"),og()(),Cl(555,"td",23)(556,"em")(557,"strong"),qx(558,"(opcional)"),og()(),Cl(559,"p"),qx(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Cl(561,"h4",34)(562,"code",5),qx(563,"PoDisclaimer"),og()(),Cl(564,"div",2)(565,"p"),qx(566,"Interface que representa o objeto "),Cl(567,"code"),qx(568,"po-disclaimer"),og(),qx(569,"."),og()(),Cl(570,"h4",12),qx(571,"Propriedades"),og(),Cl(572,"table",13)(573,"tr",14)(574,"th",15),qx(575,"Nome"),og(),Cl(576,"th",15),qx(577,"Tipo"),og(),Cl(578,"th",15),qx(579,"Descri\xE7\xE3o"),og()(),Cl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),qx(584," hideClose"),Hl(585,"br"),og()()(),Cl(586,"td",20)(587,"code",39),qx(588,"boolean"),og()(),Cl(589,"td",23)(590,"em")(591,"strong"),qx(592,"(opcional)"),og()(),Cl(593,"p"),qx(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Cl(595,"em"),qx(596,"disclaimer"),og(),qx(597,"."),og()()(),Cl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),qx(602," label"),Hl(603,"br"),og()()(),Cl(604,"td",20)(605,"code",25),qx(606,"string"),og()(),Cl(607,"td",23)(608,"em")(609,"strong"),qx(610,"(opcional)"),og()(),Cl(611,"p"),qx(612,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Cl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),qx(617," property"),Hl(618,"br"),og()()(),Cl(619,"td",20)(620,"code",25),qx(621,"string"),og()(),Cl(622,"td",23)(623,"em")(624,"strong"),qx(625,"(opcional)"),og()(),Cl(626,"p"),qx(627,"Nome da propriedade vinculada ao objeto "),Cl(628,"em"),qx(629,"disclaimer"),og(),qx(630,"."),og()()(),Cl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),qx(635," value"),Hl(636,"br"),og()()(),Cl(637,"td",20)(638,"code",40),qx(639,"any"),og()(),Cl(640,"td",23)(641,"p"),qx(642,"Valor do objeto."),og()()()(),Cl(643,"h4",34)(644,"code",5),qx(645,"PoDisclaimerGroupRemoveAction"),og()(),Cl(646,"div",2)(647,"p"),qx(648,"Estrutura do objeto representando o estado dos "),Cl(649,"em"),qx(650,"disclaimers"),og(),qx(651," ap\xF3s a remo\xE7\xE3o."),og()(),Cl(652,"h4",12),qx(653,"Propriedades"),og(),Cl(654,"table",13)(655,"tr",14)(656,"th",15),qx(657,"Nome"),og(),Cl(658,"th",15),qx(659,"Tipo"),og(),Cl(660,"th",15),qx(661,"Descri\xE7\xE3o"),og()(),Cl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),qx(666," currentDisclaimers"),Hl(667,"br"),og()()(),Cl(668,"td",20)(669,"code",41),qx(670,"Array<PoDisclaimer>"),og()(),Cl(671,"td",23)(672,"p"),qx(673,"Lista com os "),Cl(674,"em"),qx(675,"disclaimers"),og(),qx(676," atuais (restantes)."),og()()(),Cl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),qx(681," removedDisclaimer"),Hl(682,"br"),og()()(),Cl(683,"td",20)(684,"code",42),qx(685,"PoDisclaimer"),og()(),Cl(686,"td",23)(687,"p")(688,"em"),qx(689,"Disclaimer"),og(),qx(690," que foi removido."),og()()()(),Cl(691,"h4",34)(692,"code",5),qx(693,"PoDisclaimerGroup"),og()(),Cl(694,"div",2)(695,"p"),qx(696,"Interface que representa o objeto "),Cl(697,"code"),qx(698,"po-disclaimer-group"),og(),qx(699,"."),og()(),Cl(700,"h4",12),qx(701,"Propriedades"),og(),Cl(702,"table",13)(703,"tr",14)(704,"th",15),qx(705,"Nome"),og(),Cl(706,"th",15),qx(707,"Tipo"),og(),Cl(708,"th",15),qx(709,"Descri\xE7\xE3o"),og()(),Cl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),qx(714," change"),Hl(715,"br"),og()()(),Cl(716,"td",20)(717,"code",35),qx(718,"Function"),og()(),Cl(719,"td",23)(720,"em")(721,"strong"),qx(722,"(opcional)"),og()(),Cl(723,"p"),qx(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Cl(725,"em"),qx(726,"disclaimers"),og(),qx(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Cl(728,"em"),qx(729,"disclaimers"),og(),qx(730,"."),og()()(),Cl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),qx(735," disclaimers"),Hl(736,"br"),og()()(),Cl(737,"td",20)(738,"code",41),qx(739,"Array<PoDisclaimer>"),og()(),Cl(740,"td",23)(741,"p"),qx(742,"Lista de "),Cl(743,"em"),qx(744,"disclaimers"),og(),qx(745,"."),og(),Cl(746,"p"),qx(747,"Exemplo:"),og(),Cl(748,"pre")(749,"code"),qx(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),og()(),Cl(751,"p"),qx(752,"Para que a lista de "),Cl(753,"em"),qx(754,"disclaimers"),og(),qx(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Cl(756,"code"),qx(757,"PoDisclaimer"),og(),qx(758,"."),og(),Cl(759,"p"),qx(760,"Exemplo:"),og(),Cl(761,"pre")(762,"code"),qx(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),og()()()(),Cl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),qx(768," hideRemoveAll"),Hl(769,"br"),og()()(),Cl(770,"td",20)(771,"code",39),qx(772,"boolean"),og()(),Cl(773,"td",23)(774,"em")(775,"strong"),qx(776,"(opcional)"),og()(),Cl(777,"p"),qx(778,"Oculta o bot\xE3o para remover todos os "),Cl(779,"em"),qx(780,"disclaimers"),og(),qx(781," do grupo."),og(),Cl(782,"blockquote")(783,"p"),qx(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Cl(785,"em"),qx(786,"disclaimers"),og(),qx(787," com a op\xE7\xE3o "),Cl(788,"code"),qx(789,"hideClose"),og(),qx(790," habilitada."),og()()()(),Cl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),qx(795," remove"),Hl(796,"br"),og()()(),Cl(797,"td",20)(798,"code",35),qx(799,"Function"),og()(),Cl(800,"td",23)(801,"em")(802,"strong"),qx(803,"(opcional)"),og()(),Cl(804,"p"),qx(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Cl(806,"em"),qx(807,"disclaimer"),og(),qx(808,` for removido da lista de
`),Cl(809,"em"),qx(810,"disclaimers"),og(),qx(811," pelo usu\xE1rio."),og(),Cl(812,"p"),qx(813,"Recebe como par\xE2metro um objeto conforme a interface "),Cl(814,"code"),qx(815,"PoDisclaimerGroupRemoveAction"),og(),qx(816,"."),og()()(),Cl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),qx(821," removeAll"),Hl(822,"br"),og()()(),Cl(823,"td",20)(824,"code",35),qx(825,"Function"),og()(),Cl(826,"td",23)(827,"em")(828,"strong"),qx(829,"(opcional)"),og()(),Cl(830,"p"),qx(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Cl(832,"em"),qx(833,"disclaimers"),og(),qx(834," forem removidos da lista de "),Cl(835,"em"),qx(836,"disclaimers"),og(),qx(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Cl(838,"p"),qx(839,"Recebe como par\xE2metro uma lista contendo todos os "),Cl(840,"code"),qx(841,"disclaimers"),og(),qx(842," removidos."),og()()(),Cl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),qx(847," title"),Hl(848,"br"),og()()(),Cl(849,"td",20)(850,"code",25),qx(851,"string"),og()(),Cl(852,"td",23)(853,"em")(854,"strong"),qx(855,"(opcional)"),og()(),Cl(856,"p"),qx(857,"T\xEDtulo do grupo de "),Cl(858,"em"),qx(859,"disclaimers"),og(),qx(860,"."),og()()()(),Cl(861,"h4",34)(862,"code",5),qx(863,"PoPageAction"),og()(),Cl(864,"div",2)(865,"p"),qx(866,"Interface para as a\xE7\xF5es dos componentes "),Cl(867,"code"),qx(868,"po-page-default"),og(),qx(869," e "),Cl(870,"code"),qx(871,"po-page-list"),og(),qx(872,"."),og(),Cl(873,"p"),qx(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Cl(875,"em"),qx(876,"dropdown"),og(),qx(877,`,
conforme o `),Cl(878,"code"),qx(879,"PoPageActionsLayout"),og(),qx(880," e o tamanho da tela."),og(),Cl(881,"blockquote")(882,"p"),qx(883,"As propriedades "),Cl(884,"code"),qx(885,"separator"),og(),qx(886,", "),Cl(887,"code"),qx(888,"selected"),og(),qx(889," e "),Cl(890,"code"),qx(891,"subItems"),og(),qx(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Cl(893,"em"),qx(894,"dropdown"),og(),qx(895,"."),og()()(),Cl(896,"h4",12),qx(897,"Propriedades"),og(),Cl(898,"table",13)(899,"tr",14)(900,"th",15),qx(901,"Nome"),og(),Cl(902,"th",15),qx(903,"Tipo"),og(),Cl(904,"th",15),qx(905,"Descri\xE7\xE3o"),og()(),Cl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),qx(910," action"),Hl(911,"br"),og()()(),Cl(912,"td",20)(913,"code",35),qx(914,"Function"),og()(),Cl(915,"td",23)(916,"em")(917,"strong"),qx(918,"(opcional)"),og()(),Cl(919,"p"),qx(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(921,"p"),qx(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(923,"code"),qx(924,"subItems"),og(),qx(925,"."),og(),Cl(926,"blockquote")(927,"p"),qx(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(929,"em"),qx(930,"bind"),og(),qx(931,`:
`),Cl(932,"code"),qx(933,"action: this.myFunction.bind(this)"),og()()()()(),Cl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),qx(938," disabled"),Hl(939,"br"),og()()(),Cl(940,"td",20)(941,"code",39),qx(942,"boolean "),og(),Cl(943,"code",35),qx(944," Function"),og()(),Cl(945,"td",23)(946,"em")(947,"strong"),qx(948,"(opcional)"),og()(),Cl(949,"p"),qx(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),qx(955," icon"),Hl(956,"br"),og()()(),Cl(957,"td",20)(958,"code",25),qx(959,"string "),og(),Cl(960,"code",43),qx(961," TemplateRef<void>"),og()(),Cl(962,"td",23)(963,"em")(964,"strong"),qx(965,"(opcional)"),og()(),Cl(966,"p"),qx(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(968,"p"),qx(969,"Aceita \xEDcones da "),Cl(970,"a",6),qx(971,"Biblioteca de \xEDcones"),og(),qx(972,`, fontes externas (ex: Font Awesome)
ou um `),Cl(973,"code"),qx(974,"TemplateRef"),og(),qx(975," para \xEDcones customizados."),og(),Cl(976,"pre")(977,"code"),qx(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),qx(983," kind"),Hl(984,"br"),og()()(),Cl(985,"td",20)(986,"code",25),qx(987,"string"),og()(),Cl(988,"td",23)(989,"em")(990,"strong"),qx(991,"(opcional)"),og()(),Cl(992,"p"),qx(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Cl(994,"em"),qx(995,"dropdown"),og(),qx(996,"."),og(),Cl(997,"p"),qx(998,"Valores permitidos:"),og(),Cl(999,"ul")(1e3,"li")(1001,"code"),qx(1002,"primary"),og(),qx(1003,": bot\xE3o com maior destaque visual."),og(),Cl(1004,"li")(1005,"code"),qx(1006,"secondary"),og(),qx(1007,": estilo padr\xE3o."),og()(),Cl(1008,"blockquote")(1009,"p"),qx(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Cl(1011,"blockquote")(1012,"p"),qx(1013,"Somente uma a\xE7\xE3o pode ter "),Cl(1014,"code"),qx(1015,"kind"),og(),qx(1016," igual a "),Cl(1017,"code"),qx(1018,"primary"),og(),qx(1019,". Caso mais de uma defina "),Cl(1020,"code"),qx(1021,"primary"),og(),qx(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Cl(1023,"code"),qx(1024,"secondary"),og(),qx(1025,"."),og()(),Cl(1026,"blockquote")(1027,"p"),qx(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Cl(1029,"code"),qx(1030,"PoPageActionsLayout"),og(),qx(1031,"."),og()()()(),Cl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),qx(1036," label"),Hl(1037,"br"),og()()(),Cl(1038,"td",20)(1039,"code",25),qx(1040,"string"),og()(),Cl(1041,"td",23)(1042,"p"),qx(1043,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(1044,"p"),qx(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(1046,"code"),qx(1047,"subItems"),og(),qx(1048,"."),og()()(),Cl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),qx(1053," selected"),Hl(1054,"br"),og()()(),Cl(1055,"td",20)(1056,"code",39),qx(1057,"boolean"),og()(),Cl(1058,"td",23)(1059,"em")(1060,"strong"),qx(1061,"(opcional)"),og()(),Cl(1062,"p"),qx(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),qx(1068," separator"),Hl(1069,"br"),og()()(),Cl(1070,"td",20)(1071,"code",39),qx(1072,"boolean"),og()(),Cl(1073,"td",23)(1074,"em")(1075,"strong"),qx(1076,"(opcional)"),og()(),Cl(1077,"p"),qx(1078,"Atribui uma linha separadora acima do item."),og()()(),Cl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),qx(1083," subItems"),Hl(1084,"br"),og()()(),Cl(1085,"td",20)(1086,"code",44),qx(1087,"Array<PoPopupAction>"),og()(),Cl(1088,"td",23)(1089,"em")(1090,"strong"),qx(1091,"(opcional)"),og()(),Cl(1092,"p"),qx(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(1094,"p"),qx(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(1096,"blockquote")(1097,"p"),qx(1098,"As propriedades "),Cl(1099,"code"),qx(1100,"disabled"),og(),qx(1101,", "),Cl(1102,"code"),qx(1103,"type"),og(),qx(1104," e "),Cl(1105,"code"),qx(1106,"visible"),og(),qx(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(1108,"blockquote")(1109,"p"),qx(1110,"Quando "),Cl(1111,"code"),qx(1112,"url"),og(),qx(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(1114,"blockquote")(1115,"p"),qx(1116,"Em subn\xEDveis aninhados, o "),Cl(1117,"code"),qx(1118,"icon"),og(),qx(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),qx(1124," type"),Hl(1125,"br"),og()()(),Cl(1126,"td",20)(1127,"code",25),qx(1128,"string"),og()(),Cl(1129,"td",23)(1130,"em")(1131,"strong"),qx(1132,"(opcional)"),og()(),Cl(1133,"p"),qx(1134,"Define a cor do item."),og(),Cl(1135,"p"),qx(1136,"Valores v\xE1lidos:"),og(),Cl(1137,"ul")(1138,"li")(1139,"code"),qx(1140,"default"),og()(),Cl(1141,"li")(1142,"code"),qx(1143,"danger"),og()()()()(),Cl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),qx(1148," url"),Hl(1149,"br"),og()()(),Cl(1150,"td",20)(1151,"code",25),qx(1152,"string"),og()(),Cl(1153,"td",23)(1154,"em")(1155,"strong"),qx(1156,"(opcional)"),og()(),Cl(1157,"p"),qx(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(1159,"p"),qx(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(1161,"code"),qx(1162,"url"),og(),qx(1163," \xE9 informada em um agrupador, o clique "),Cl(1164,"strong"),qx(1165,"n\xE3o abrir\xE1 os subitens"),og(),qx(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(1167,"blockquote")(1168,"p"),qx(1169,"Quando informada, tem prioridade sobre a propriedade "),Cl(1170,"code"),qx(1171,"action"),og(),qx(1172,"."),og()()()(),Cl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),qx(1177," visible"),Hl(1178,"br"),og()()(),Cl(1179,"td",20)(1180,"code",39),qx(1181,"boolean "),og(),Cl(1182,"code",35),qx(1183," Function"),og()(),Cl(1184,"td",23)(1185,"em")(1186,"strong"),qx(1187,"(opcional)"),og()(),Cl(1188,"p"),qx(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(1190,"h4",34)(1191,"code",5),qx(1192,"PoPageFilter"),og()(),Cl(1193,"div",2)(1194,"p"),qx(1195,"Interface para o atributo "),Cl(1196,"code"),qx(1197,"filter"),og(),qx(1198," do componente "),Cl(1199,"code"),qx(1200,"po-page-list"),og(),qx(1201,"."),og()(),Cl(1202,"h4",12),qx(1203,"Propriedades"),og(),Cl(1204,"table",13)(1205,"tr",14)(1206,"th",15),qx(1207,"Nome"),og(),Cl(1208,"th",15),qx(1209,"Tipo"),og(),Cl(1210,"th",15),qx(1211,"Descri\xE7\xE3o"),og()(),Cl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),qx(1216," action"),Hl(1217,"br"),og()()(),Cl(1218,"td",20)(1219,"code",35),qx(1220,"Function"),og()(),Cl(1221,"td",23)(1222,"em")(1223,"strong"),qx(1224,"(opcional)"),og()(),Cl(1225,"p"),qx(1226,"A\xE7\xE3o a ser executada."),og()()(),Cl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),qx(1231," advancedAction"),Hl(1232,"br"),og()()(),Cl(1233,"td",20)(1234,"code",35),qx(1235,"Function"),og()(),Cl(1236,"td",23)(1237,"em")(1238,"strong"),qx(1239,"(opcional)"),og()(),Cl(1240,"p"),qx(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Cl(1242,"em"),qx(1243,"click"),og(),qx(1244," atrav\xE9s do r\xF3tulo "),Cl(1245,"strong"),qx(1246,"Busca Avan\xE7ada"),og(),qx(1247,"."),og()()(),Cl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),qx(1252," placeholder"),Hl(1253,"br"),og()()(),Cl(1254,"td",20)(1255,"code",25),qx(1256,"string"),og()(),Cl(1257,"td",23)(1258,"em")(1259,"strong"),qx(1260,"(opcional)"),og()(),Cl(1261,"p"),qx(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),og()()(),Cl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),qx(1267," width"),Hl(1268,"br"),og()()(),Cl(1269,"td",20)(1270,"code",45),qx(1271,"number"),og()(),Cl(1272,"td",23)(1273,"em")(1274,"strong"),qx(1275,"(opcional)"),og()(),Cl(1276,"p"),qx(1277,"Tamanho do filtro em tela, utilizando o "),Cl(1278,"em"),qx(1279,"Grid System"),og(),qx(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),og()()()(),Cl(1281,"h4",34)(1282,"code",5),qx(1283,"PoPageListLiterals"),og()(),Cl(1284,"div",2)(1285,"p"),qx(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1287,"code"),qx(1288,"po-page-list"),og(),qx(1289,"."),og()(),Cl(1290,"h4",12),qx(1291,"Propriedades"),og(),Cl(1292,"table",13)(1293,"tr",14)(1294,"th",15),qx(1295,"Nome"),og(),Cl(1296,"th",15),qx(1297,"Tipo"),og(),Cl(1298,"th",15),qx(1299,"Descri\xE7\xE3o"),og()(),Cl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),qx(1304," otherActions"),Hl(1305,"br"),og()()(),Cl(1306,"td",20)(1307,"code",25),qx(1308,"string"),og()(),Cl(1309,"td",23)(1310,"em")(1311,"strong"),qx(1312,"(opcional)"),og()(),Cl(1313,"p"),qx(1314,"Legenda do "),Cl(1315,"code"),qx(1316,"po-dropdown"),og(),qx(1317," de a\xE7\xF5es."),og()()()()());},dependencies:[Zr],encapsulation:2})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(w(Xn),w(Cn))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-page-list-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),og()()()),r&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ee,fe,xe,ve],encapsulation:2})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[bL.forChild(Ge),bL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[ca,ye]})}return s})();export{vt as DocPoPageListModule};