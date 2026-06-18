import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,s,c as r$1,w,a3 as pNe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,bB as cc,b4 as F3,c8 as Pde,aJ as Ghe,ba as bNe,aB as Ex,aM as Ew,aN as JA,aq as ux,bd as xx,a7 as uN,aO as Dw,aP as t0,at as dx,cz as Ez,b6 as Yo,b7 as A3,X as we$1,av as ql,aw as lo,ax as uo,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&Wl(0,"po-page-default",0);},dependencies:[pNe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Default Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-default-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return l})();var Fe=()=>({});function Be(l,Me){if(l&1){let d=Ex();Sl(0,"po-input",36),Ew("ngModelChange",function(i){Xy(d);let m=Tx(2);return tN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Qy(i)}),sg(),JA();}if(l&2){let d=Tx(2);Dw("ngModel",d.helperFooterLabel),t0();}}function Oe(l,Me){if(l&1){let d=Ex();Sl(0,"po-widget",10)(1,"div",6)(2,"po-input",32),Ew("ngModelChange",function(i){Xy(d);let m=Tx();return tN(m.helperTitle,i)||(m.helperTitle=i),Qy(i)}),sg(),JA(),Sl(3,"po-input",33),Ew("ngModelChange",function(i){Xy(d);let m=Tx();return tN(m.helperContent,i)||(m.helperContent=i),Qy(i)}),sg(),JA(),sg(),Sl(4,"div",6)(5,"po-radio-group",34),ht("ngModelChange",function(i){Xy(d);let m=Tx();return Qy(m.helperType=i)}),sg(),JA(),sg(),Sl(6,"div",6),ux(7,Be,1,1,"po-input",35),sg()();}if(l&2){let d=Tx();Vp(2),Dw("ngModel",d.helperTitle),t0(),Vp(),Dw("ngModel",d.helperContent),t0(),Vp(2),tw("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),t0(),Vp(2),dx(d.helperType==="help"?7:-1);}}var ve=(()=>{class l{poNotification=f(Yp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Ex();Sl(0,"po-page-default",5),ht("p-back",function(){return i.onBack()}),sg(),Wl(1,"po-divider"),Sl(2,"form",null,0)(4,"div",6)(5,"po-input",7),Ew("ngModelChange",function(o){return Xy(m),tN(i.title,o)||(i.title=o),Qy(o)}),sg(),JA(),Sl(6,"po-input",8),Ew("ngModelChange",function(o){return Xy(m),tN(i.subtitle,o)||(i.subtitle=o),Qy(o)}),sg(),JA(),Sl(7,"po-checkbox",9),Ew("ngModelChange",function(o){return Xy(m),tN(i.showHelper,o)||(i.showHelper=o),Qy(o)}),sg(),JA(),ux(8,Oe,8,6,"po-widget",10),Sl(9,"po-select",11),ht("ngModelChange",function(o){return i.pageHeaderType=o}),sg(),JA(),Sl(10,"po-select",12),ht("ngModelChange",function(o){return i.pageActionsLayout=o}),sg(),JA(),Sl(11,"po-input",13),Ew("ngModelChange",function(o){return Xy(m),tN(i.literals,o)||(i.literals=o),Qy(o)}),ht("p-change",function(){return i.changeLiterals()}),sg(),JA(),Sl(12,"po-radio-group",14),Ew("ngModelChange",function(o){return Xy(m),tN(i.componentsSize,o)||(i.componentsSize=o),Qy(o)}),sg(),JA(),sg()(),Wl(13,"po-divider"),Sl(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),Ew("ngModelChange",function(o){return Xy(m),tN(i.action.label,o)||(i.action.label=o),Qy(o)}),sg(),JA(),Sl(19,"po-input",17),Ew("ngModelChange",function(o){return Xy(m),tN(i.action.action,o)||(i.action.action=o),Qy(o)}),sg(),JA(),Sl(20,"po-input",18),Ew("ngModelChange",function(o){return Xy(m),tN(i.action.url,o)||(i.action.url=o),Qy(o)}),sg(),JA(),Sl(21,"po-select",19),ht("ngModelChange",function(o){return i.action.type=o}),sg(),JA(),Sl(22,"po-select",20),ht("ngModelChange",function(o){return i.action.icon=o}),sg(),JA(),Sl(23,"po-select",21),ht("ngModelChange",function(o){return i.action.kind=o}),sg(),JA(),Sl(24,"po-checkbox-group",22),ht("ngModelChange",function(o){return i.action=o}),sg(),JA(),sg(),Sl(25,"div",6)(26,"po-button",23),ht("p-click",function(){return i.addAction(i.action)}),sg()()()(),Wl(27,"po-divider"),Sl(28,"form",null,2)(30,"div",6)(31,"po-input",24),Ew("ngModelChange",function(o){return Xy(m),tN(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),Qy(o)}),sg(),JA(),sg()(),Sl(32,"form",null,3)(34,"div",6)(35,"po-input",25),Ew("ngModelChange",function(o){return Xy(m),tN(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),Qy(o)}),sg(),JA(),Sl(36,"po-input",26),Ew("ngModelChange",function(o){return Xy(m),tN(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),Qy(o)}),sg(),JA(),sg(),Sl(37,"div",6)(38,"po-button",27),ht("p-click",function(){return i.addBreadcrumbItem()}),sg()()(),Wl(39,"po-divider"),Sl(40,"form",null,4)(42,"div",6)(43,"po-input",28),Ew("ngModelChange",function(o){return Xy(m),tN(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),Qy(o)}),sg(),JA(),Sl(44,"po-input",29),Ew("ngModelChange",function(o){return Xy(m),tN(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),Qy(o)}),sg(),JA(),sg(),Sl(45,"div",6)(46,"po-button",30),ht("p-click",function(){return i.addBreadcrumbParam()}),sg()()(),Wl(47,"po-divider"),Sl(48,"div",6)(49,"po-button",31),ht("p-click",function(){return i.restore()}),sg()();}if(r&2){let m=xx(16),s=xx(33),o=xx(41);tw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??uN(42,Fe))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Vp(5),Dw("ngModel",i.title),t0(),Vp(),Dw("ngModel",i.subtitle),t0(),Vp(),Dw("ngModel",i.showHelper),t0(),Vp(),dx(i.showHelper?8:-1),Vp(),tw("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),t0(),Vp(),tw("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),t0(),Vp(),Dw("ngModel",i.literals),t0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-columns",4)("p-options",i.componentsSizeOptions),t0(),Vp(6),Dw("ngModel",i.action.label),t0(),Vp(),Dw("ngModel",i.action.action),t0(),Vp(),Dw("ngModel",i.action.url),t0(),Vp(),tw("ngModel",i.action.type)("p-options",i.typeOptions),t0(),Vp(),tw("ngModel",i.action.icon)("p-options",i.iconOptions),t0(),Vp(),tw("ngModel",i.action.kind)("p-options",i.actionKindOptions),t0(),Vp(),tw("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),t0(),Vp(2),tw("p-disabled",m.form.invalid),Vp(5),Dw("ngModel",i.breadcrumb.favorite),t0(),Vp(4),Dw("ngModel",i.breadcrumbItem.label),t0(),Vp(),Dw("ngModel",i.breadcrumbItem.link),t0(),Vp(2),tw("p-disabled",s.invalid??false),Vp(5),Dw("ngModel",i.breadcrumbParams.property),t0(),Vp(),Dw("ngModel",i.breadcrumbParams.value),t0(),Vp(2),tw("p-disabled",o.invalid??false);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,cc,F3,Pde,Ghe,pNe,bNe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Default Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-checkbox class="po-md-12 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
    </po-checkbox>

    @if (showHelper) {
      <po-widget class="po-md-12 po-pb-3" p-title="Helper">
        <div class="po-row">
          <po-input class="po-md-6" name="helperTitle" [(ngModel)]="helperTitle" p-clean p-label="Title"> </po-input>

          <po-input
            class="po-md-6"
            name="helperContent"
            [(ngModel)]="helperContent"
            p-clean
            p-label="Content"
            p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
          >
          </po-input>
        </div>

        <div class="po-row">
          <po-radio-group
            name="helperType"
            class="po-md-12"
            [p-columns]="4"
            p-label="Type"
            [ngModel]="helperType"
            (ngModelChange)="helperType = $event"
            [p-options]="helperTypeOptions"
          >
          </po-radio-group>
        </div>

        <div class="po-row">
          @if (helperType === 'help') {
            <po-input
              class="po-md-6"
              name="helperFooterLabel"
              [(ngModel)]="helperFooterLabel"
              p-clean
              p-label="Footer Action"
            >
            </po-input>
          }
        </div>
      </po-widget>
    }

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [ngModel]="pageHeaderType"
      (ngModelChange)="pageHeaderType = $event"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [ngModel]="pageActionsLayout"
      (ngModelChange)="pageActionsLayout = $event"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
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
      [p-columns]="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<po-widget p-title="Action">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-lg-3 po-md-6"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="kind"
        [ngModel]="action.kind"
        (ngModelChange)="action.kind = $event"
        p-label="Kind"
        [p-options]="actionKindOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [ngModel]="action"
        (ngModelChange)="action = $event"
        [p-columns]="4"
        [p-indeterminate]="true"
        p-label="Properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-2 po-md-4"
        p-label="Add Action"
        [p-disabled]="formAction.form.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider></po-divider>

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
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid ?? false"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

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
      [p-disabled]="formBreadcrumbParams.invalid ?? false"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoHelperOptions,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

interface EditableAction extends PoPageAction {
  visible: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: EditableAction = { label: '', visible: true, disabled: false };
  actions: Array<EditableAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: '', link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  helperContent: string = '';
  helperFooterLabel: string = '';
  helperTitle: string = '';
  helperType: 'help' | 'info' = 'info';
  showHelper: boolean = false;

  public readonly helperTypeOptions: Array<PoSelectOption> = [
    { label: 'help', value: 'help' },
    { label: 'info', value: 'info' }
  ];

  get helper(): PoHelperOptions | undefined {
    if (!this.showHelper || !this.helperContent) {
      return undefined;
    }
    const options: PoHelperOptions = {
      title: this.helperTitle,
      content: this.helperContent,
      type: this.helperType
    };
    if (this.helperType === 'help' && this.helperFooterLabel) {
      options.footerAction = {
        label: this.helperFooterLabel,
        action: () => this.poNotification.information('Footer action clicked')
      };
    }
    return options;
  }

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

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

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: EditableAction) {
    const newAction: EditableAction = {
      ...action,
      visible: action.visible !== undefined ? action.visible : true,
      disabled: action.disabled !== undefined ? action.disabled : false
    };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: '', link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {
      [this.breadcrumbParams.property || '']: this.breadcrumbParams.value
    };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: '', link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.helperContent = '';
    this.helperFooterLabel = '';
    this.helperTitle = '';
    this.helperType = 'info';
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.showHelper = false;
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true,
      disabled: false
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-default-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ve],encapsulation:2})}return l})();var ee=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=w({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ve=["formShare"],ye=(()=>{class l{poNotification=f(Yp);sampleDashboardService=f(ee);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&ql(Ve,7)(Yo,7),r&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([ee])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Ex();Sl(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),Jx(4,"540"),sg(),Sl(5,"div",5),Jx(6,"www.po.com.br"),sg()(),Sl(7,"po-widget",6)(8,"div",4),Jx(9,"300 views"),sg(),Sl(10,"div",5),Jx(11,"https://po-ui.io"),sg()(),Sl(12,"po-widget",7)(13,"div",4),Jx(14,"Online"),sg(),Sl(15,"div",5),Jx(16,"28 days"),sg()(),Sl(17,"po-widget",8)(18,"div",4),Jx(19,"266"),sg(),Sl(20,"div",5),Jx(21,"@po-ui/ng-components - 1.10.1"),sg()(),Sl(22,"po-widget",9)(23,"div",4),Jx(24,"800 questions"),sg(),Sl(25,"div",5),Jx(26,"https://devforum.po.com.br"),sg()(),Sl(27,"po-widget",10)(28,"div",4),Jx(29,"AngularJS - Angular 6"),sg(),Sl(30,"div",5),Jx(31,"Angular 6 most downloaded"),sg()()(),Wl(32,"po-divider")(33,"po-table",11),sg(),Sl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),Ew("ngModelChange",function(o){return Xy(m),tN(i.email,o)||(i.email=o),Qy(o)}),sg(),JA(),sg()();}r&2&&(tw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Vp(33),tw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Vp(),tw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Vp(3),Dw("ngModel",i.email),t0());},dependencies:[J9,K9,X9,Dk,vk,mv,Ez,Yo,pNe,A3,bNe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Default - Dashboard"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default
  p-title="Dashboard"
  p-subtitle="Website analytics overview"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-helper]="helper"
>
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoHelperOptions,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  columns!: Array<PoTableColumn>;
  email: string = '';
  isSubscribed: boolean = false;
  items!: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly helper: PoHelperOptions = {
    title: 'Dashboard Info',
    content: 'View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.',
    type: 'info'
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),sg()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),Jx(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),sg(),Sl(29,"pre",11),Jx(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),sg()()()()(),Sl(31,"div",12),Wl(32,"sample-po-page-default-dashboard"),sg(),Wl(33,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ye],encapsulation:2})}return l})();var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),Jx(8,"po-page-default"),sg(),Jx(9,", "),Sl(10,"code"),Jx(11,"po-page-detail"),sg(),Jx(12,`,
`),Sl(13,"code"),Jx(14,"po-page-edit"),sg(),Jx(15,", "),Sl(16,"code"),Jx(17,"po-page-list"),sg(),Jx(18," e "),Sl(19,"code"),Jx(20,"po-page-slide"),sg(),Jx(21,"."),sg()(),Sl(22,"h3",3),Jx(23,"Componente"),sg(),Sl(24,"h4",4)(25,"code",5),Jx(26,"PoPageDefaultComponent"),sg()(),Sl(27,"div",2)(28,"p"),Jx(29,"O "),Sl(30,"code"),Jx(31,"po-page-default"),sg(),Jx(32," \xE9 utilizado como container principal para telas sem um template definido."),sg(),Sl(33,"p"),Jx(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),Sl(35,"code"),Jx(36,"p-page-header-type"),sg(),Jx(37,", navega\xE7\xE3o por "),Sl(38,"em"),Jx(39,"breadcrumb"),sg(),Jx(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Sl(41,"code"),Jx(42,"p-page-actions-layout"),sg(),Jx(43,"."),sg(),Sl(44,"h4"),Jx(45,"Tokens customiz\xE1veis"),sg(),Sl(46,"blockquote")(47,"p"),Jx(48,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(49,"a",6),Jx(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(51,"."),sg()(),Sl(52,"table")(53,"thead")(54,"tr")(55,"th"),Jx(56,"Propriedade"),sg(),Sl(57,"th"),Jx(58,"Descri\xE7\xE3o"),sg(),Sl(59,"th"),Jx(60,"Valor Padr\xE3o"),sg()()(),Sl(61,"tbody")(62,"tr")(63,"td")(64,"strong"),Jx(65,"P\xE1gina (po-page-default)"),sg()(),Wl(66,"td")(67,"td"),sg(),Sl(68,"tr")(69,"td")(70,"code"),Jx(71,"--background"),sg()(),Sl(72,"td"),Jx(73,"Background da p\xE1gina (header e body)"),sg(),Sl(74,"td")(75,"code"),Jx(76,"var(--color-page-background-color-page)"),sg()()(),Sl(77,"tr")(78,"td")(79,"strong"),Jx(80,"Header (po-page-header)"),sg()(),Wl(81,"td")(82,"td"),sg(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--padding"),sg()(),Sl(87,"td"),Jx(88,"Espa\xE7amento do header"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--gap"),sg()(),Sl(96,"td"),Jx(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--spacing-md)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--gap-actions"),sg()(),Sl(105,"td"),Jx(106,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--spacing-xs)"),sg()()(),Sl(110,"tr")(111,"td")(112,"strong"),Jx(113,"Header (po-page-header .po-page-header-title)"),sg()(),Wl(114,"td")(115,"td"),sg(),Sl(116,"tr")(117,"td")(118,"code"),Jx(119,"--font-family"),sg()(),Sl(120,"td"),Jx(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(122,"td")(123,"code"),Jx(124,"var(--font-family-theme)"),sg()()(),Sl(125,"tr")(126,"td")(127,"strong"),Jx(128,"Content (po-page-content)"),sg()(),Wl(129,"td")(130,"td"),sg(),Sl(131,"tr")(132,"td")(133,"code"),Jx(134,"--padding-content"),sg()(),Sl(135,"td"),Jx(136,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(137,"td")(138,"code"),Jx(139,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(140,"div",7)(141,"h4",8),Jx(142,"Seletor"),sg(),Sl(143,"pre",9),Jx(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-helper="PoHelperOptions | string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),sg()(),Sl(145,"h4",10),Jx(146,"Propriedades"),sg(),Sl(147,"table",11)(148,"tr",12)(149,"th",13),Jx(150,"Nome"),sg(),Sl(151,"th",13),Jx(152,"Tipo"),sg(),Sl(153,"th",13),Jx(154,"Padr\xE3o"),sg(),Sl(155,"th",13),Jx(156,"Descri\xE7\xE3o"),sg()(),Sl(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),Jx(161," p-actions"),Wl(162,"br"),sg()()(),Sl(163,"td",18)(164,"code",19),Jx(165,"Array<PoPageAction>"),sg()(),Sl(166,"td",20)(167,"p")(168,"code"),Jx(169,"[]"),sg()()(),Sl(170,"td",21)(171,"em")(172,"strong"),Jx(173,"(opcional)"),sg()(),Sl(174,"p"),Jx(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),sg(),Sl(176,"p"),Jx(177,"Recebe um array de objetos que implementam a interface "),Sl(178,"code"),Jx(179,"PoPageAction"),sg(),Jx(180,"."),sg(),Sl(181,"blockquote")(182,"p"),Jx(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),Sl(184,"code"),Jx(185,"p-page-actions-layout"),sg(),Jx(186,"."),sg()()()(),Sl(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),Jx(191," (p-back)"),Wl(192,"br"),sg()()(),Sl(193,"td",18)(194,"code",24),Jx(195,"EventEmitter"),sg()(),Sl(196,"td",20),Jx(197,"-"),sg(),Sl(198,"td",21)(199,"em")(200,"strong"),Jx(201,"(opcional)"),sg()(),Sl(202,"p"),Jx(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),sg(),Sl(204,"blockquote")(205,"p"),Jx(206,"Bot\xE3o exibido apenas quando a propriedade "),Sl(207,"code"),Jx(208,"p-page-header-type"),sg(),Jx(209," est\xE1 configurada como "),Sl(210,"code"),Jx(211,"secondary"),sg(),Jx(212,"."),sg()()()(),Sl(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),Jx(217," p-breadcrumb"),Wl(218,"br"),sg()()(),Sl(219,"td",18)(220,"code",25),Jx(221,"PoBreadcrumb"),sg()(),Sl(222,"td",20),Jx(223,"-"),sg(),Sl(224,"td",21)(225,"em")(226,"strong"),Jx(227,"(opcional)"),sg()(),Sl(228,"p"),Jx(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),sg(),Sl(230,"p"),Jx(231,"Recebe um objeto que implementa a interface "),Sl(232,"code"),Jx(233,"PoBreadcrumb"),sg(),Jx(234,"."),sg(),Sl(235,"blockquote")(236,"p"),Jx(237,"Compat\xEDvel com o cabe\xE7alho ("),Sl(238,"code"),Jx(239,"p-page-header-type"),sg(),Jx(240,") do tipo "),Sl(241,"code"),Jx(242,"primary"),sg(),Jx(243,"."),sg()()()(),Sl(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),Jx(248," p-components-size"),Wl(249,"br"),sg()()(),Sl(250,"td",18)(251,"code",26),Jx(252,"string"),sg()(),Sl(253,"td",20)(254,"p")(255,"code"),Jx(256,"medium"),sg()()(),Sl(257,"td",21)(258,"em")(259,"strong"),Jx(260,"(opcional)"),sg()(),Sl(261,"p"),Jx(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(263,"ul")(264,"li")(265,"code"),Jx(266,"small"),sg(),Jx(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(268,"li")(269,"code"),Jx(270,"medium"),sg(),Jx(271,": aplica a medida medium de cada componente."),sg()(),Sl(272,"blockquote")(273,"p"),Jx(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(275,"code"),Jx(276,"medium"),sg(),Jx(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(278,"a",27),Jx(279,"po-theme"),sg(),Jx(280,"."),sg()()()(),Sl(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),Jx(285," p-helper"),Wl(286,"br"),sg()()(),Sl(287,"td",18)(288,"code",28),Jx(289,"PoHelperOptions "),sg(),Sl(290,"code",26),Jx(291," string"),sg()(),Sl(292,"td",20)(293,"p")(294,"code"),Jx(295,"info"),sg()()(),Sl(296,"td",21)(297,"em")(298,"strong"),Jx(299,"(opcional)"),sg()(),Sl(300,"p"),Jx(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),sg(),Sl(302,"p"),Jx(303,"Quando n\xE3o houver subt\xEDtulo ("),Sl(304,"code"),Jx(305,"p-subtitle"),sg(),Jx(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),sg(),Sl(307,"p"),Jx(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Sl(309,"code"),Jx(310,"PoHelperOptions"),sg(),Jx(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),sg(),Sl(312,"p"),Jx(313,"Exemplo de uso:"),sg(),Sl(314,"pre")(315,"code",29),Jx(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),sg()()()(),Sl(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),Jx(321," p-literals"),Wl(322,"br"),sg()()(),Sl(323,"td",18)(324,"code",30),Jx(325,"PoPageDefaultLiterals"),sg()(),Sl(326,"td",20),Jx(327,"-"),sg(),Sl(328,"td",21)(329,"em")(330,"strong"),Jx(331,"(opcional)"),sg()(),Sl(332,"p"),Jx(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),sg(),Sl(334,"p"),Jx(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),Sl(336,"code"),Jx(337,"PoPageDefaultLiterals"),sg(),Jx(338,"."),sg(),Sl(339,"p"),Jx(340,"Exemplo de uso:"),sg(),Sl(341,"pre")(342,"code",29),Jx(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),sg()(),Sl(344,"pre")(345,"code",31),Jx(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),sg()(),Sl(347,"blockquote")(348,"p"),Jx(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(350,"a",32)(351,"code"),Jx(352,"PoI18nService"),sg()(),Jx(353," ou navegador."),sg()()()(),Sl(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),Jx(358," p-page-actions-layout"),Wl(359,"br"),sg()()(),Sl(360,"td",18)(361,"code",26),Jx(362,"string"),sg()(),Sl(363,"td",20)(364,"p")(365,"code"),Jx(366,"default"),sg()()(),Sl(367,"td",21)(368,"em")(369,"strong"),Jx(370,"(opcional)"),sg()(),Sl(371,"p"),Jx(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),sg(),Sl(373,"p"),Jx(374,"Aceita valores do enum "),Sl(375,"code"),Jx(376,"PoPageActionsLayout"),sg(),Jx(377,"."),sg(),Sl(378,"blockquote")(379,"p"),Jx(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),Sl(381,"em"),Jx(382,"dropdown"),sg(),Jx(383," que possuam a propriedade "),Sl(384,"code"),Jx(385,"PoPageAction.icon"),sg(),Jx(386,` definida
exibir\xE3o apenas o \xEDcone.`),sg()()()(),Sl(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),Jx(391," p-page-header-type"),Wl(392,"br"),sg()()(),Sl(393,"td",18)(394,"code",26),Jx(395,"string"),sg()(),Sl(396,"td",20)(397,"p")(398,"code"),Jx(399,"primary"),sg()()(),Sl(400,"td",21)(401,"em")(402,"strong"),Jx(403,"(opcional)"),sg()(),Sl(404,"p"),Jx(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),sg(),Sl(406,"p"),Jx(407,"Aceita valores do enum "),Sl(408,"code"),Jx(409,"PoPageHeaderType"),sg(),Jx(410,"."),sg()()(),Sl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Jx(415," p-subtitle"),Wl(416,"br"),sg()()(),Sl(417,"td",18)(418,"code",26),Jx(419,"string"),sg()(),Sl(420,"td",20),Jx(421,"-"),sg(),Sl(422,"td",21)(423,"em")(424,"strong"),Jx(425,"(opcional)"),sg()(),Sl(426,"p"),Jx(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),sg(),Sl(428,"p"),Jx(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(430,"code"),Jx(431,"<b>"),sg(),Jx(432," (negrito), "),Sl(433,"code"),Jx(434,"<strong>"),sg(),Jx(435," (negrito), "),Sl(436,"code"),Jx(437,"<i>"),sg(),Jx(438," (it\xE1lico), "),Sl(439,"code"),Jx(440,"<em>"),sg(),Jx(441,` (it\xE1lico) e
`),Sl(442,"code"),Jx(443,"<u>"),sg(),Jx(444," (sublinhado)."),sg(),Sl(445,"p"),Jx(446,"Exemplo:"),sg(),Sl(447,"pre")(448,"code",31),Jx(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),sg()(),Sl(450,"blockquote")(451,"p"),Jx(452,"Requer que "),Sl(453,"code"),Jx(454,"p-title"),sg(),Jx(455," esteja definido."),sg()()()(),Sl(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),Jx(460," p-title"),Wl(461,"br"),sg()()(),Sl(462,"td",18)(463,"code",26),Jx(464,"string"),sg()(),Sl(465,"td",20),Jx(466,"-"),sg(),Sl(467,"td",21)(468,"em")(469,"strong"),Jx(470,"(opcional)"),sg()(),Sl(471,"p"),Jx(472,"Define o t\xEDtulo principal da p\xE1gina."),sg()()()(),Sl(473,"h3"),Jx(474,"Interfaces"),sg(),Sl(475,"h4",33)(476,"code",5),Jx(477,"PoBreadcrumbItem"),sg()(),Sl(478,"div",2)(479,"p"),Jx(480,"Interface que define cada item do componente "),Sl(481,"strong"),Jx(482,"po-breadcrumb"),sg(),Jx(483,"."),sg()(),Sl(484,"h4",10),Jx(485,"Propriedades"),sg(),Sl(486,"table",11)(487,"tr",12)(488,"th",13),Jx(489,"Nome"),sg(),Sl(490,"th",13),Jx(491,"Tipo"),sg(),Sl(492,"th",13),Jx(493,"Descri\xE7\xE3o"),sg()(),Sl(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),Jx(498," action"),Wl(499,"br"),sg()()(),Sl(500,"td",18)(501,"code",34),Jx(502,"Function"),sg()(),Sl(503,"td",21)(504,"em")(505,"strong"),Jx(506,"(opcional)"),sg()(),Sl(507,"p"),Jx(508,"A\xE7\xE3o executada ao clicar no item."),sg(),Sl(509,"blockquote")(510,"p"),Jx(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(512,"em"),Jx(513,"label"),sg(),Jx(514," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Sl(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),Jx(519," label"),Wl(520,"br"),sg()()(),Sl(521,"td",18)(522,"code",26),Jx(523,"string"),sg()(),Sl(524,"td",21)(525,"p"),Jx(526,"R\xF3tulo do item."),sg()()(),Sl(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),Jx(531," link"),Wl(532,"br"),sg()()(),Sl(533,"td",18)(534,"code",26),Jx(535,"string"),sg()(),Sl(536,"td",21)(537,"em")(538,"strong"),Jx(539,"(opcional)"),sg()(),Sl(540,"p"),Jx(541,"Url do item."),sg(),Sl(542,"blockquote")(543,"p"),Jx(544,"Caso o item tamb\xE9m contenha uma "),Sl(545,"em"),Jx(546,"action"),sg(),Jx(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(548,"em"),Jx(549,"link"),sg(),Jx(550,"."),sg()(),Sl(551,"blockquote")(552,"p"),Jx(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(554,"strong")(555,"a",35),Jx(556,"Veja um exemplo de como criar rotas aqui"),sg()(),Jx(557,"."),sg()(),Sl(558,"blockquote")(559,"p"),Jx(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(561,"code"),Jx(562,"p-favorite-service"),sg(),Jx(563," consiga favoritar ou desfavoritar."),sg()()()()(),Sl(564,"h4",33)(565,"code",5),Jx(566,"PoBreadcrumb"),sg()(),Sl(567,"div",2)(568,"p"),Jx(569,"Interface que define o "),Sl(570,"code"),Jx(571,"po-breadcrumb"),sg(),Jx(572,"."),sg()(),Sl(573,"h4",10),Jx(574,"Propriedades"),sg(),Sl(575,"table",11)(576,"tr",12)(577,"th",13),Jx(578,"Nome"),sg(),Sl(579,"th",13),Jx(580,"Tipo"),sg(),Sl(581,"th",13),Jx(582,"Descri\xE7\xE3o"),sg()(),Sl(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),Jx(587," favorite"),Wl(588,"br"),sg()()(),Sl(589,"td",18)(590,"code",26),Jx(591,"string"),sg()(),Sl(592,"td",21)(593,"em")(594,"strong"),Jx(595,"(opcional)"),sg()(),Sl(596,"p"),Jx(597,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Sl(598,"blockquote")(599,"p"),Jx(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(601,"code"),Jx(602,"p-favorite-service"),sg(),Jx(603," do componente "),Sl(604,"code"),Jx(605,"po-breadcrumb"),sg(),Jx(606,"."),sg()()()(),Sl(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),Jx(611," items"),Wl(612,"br"),sg()()(),Sl(613,"td",18)(614,"code",36),Jx(615,"Array<PoBreadcrumbItem>"),sg()(),Sl(616,"td",21)(617,"p"),Jx(618,"Lista de itens do "),Sl(619,"em"),Jx(620,"breadcrumb"),sg(),Jx(621,"."),sg(),Sl(622,"p")(623,"strong"),Jx(624,"Exemplo:"),sg()(),Sl(625,"pre")(626,"code"),Jx(627,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Sl(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),Jx(632," params"),Wl(633,"br"),sg()()(),Sl(634,"td",18)(635,"code",37),Jx(636,"object"),sg()(),Sl(637,"td",21)(638,"em")(639,"strong"),Jx(640,"(opcional)"),sg()(),Sl(641,"p"),Jx(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Sl(643,"h4",33)(644,"code",5),Jx(645,"PoHelperOptions"),sg()(),Sl(646,"div",2)(647,"p"),Jx(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Sl(649,"em"),Jx(650,"helper"),sg(),Jx(651,")."),sg()(),Sl(652,"h4",10),Jx(653,"Propriedades"),sg(),Sl(654,"table",11)(655,"tr",12)(656,"th",13),Jx(657,"Nome"),sg(),Sl(658,"th",13),Jx(659,"Tipo"),sg(),Sl(660,"th",13),Jx(661,"Descri\xE7\xE3o"),sg()(),Sl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Jx(666," content"),Wl(667,"br"),sg()()(),Sl(668,"td",18)(669,"code",26),Jx(670,"string"),sg()(),Sl(671,"td",21)(672,"em")(673,"strong"),Jx(674,"(opcional)"),sg()(),Sl(675,"p"),Jx(676,"Texto explicativo exibido no popover."),sg(),Sl(677,"p"),Jx(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(679,"code"),Jx(680,"<b>"),sg(),Jx(681," (negrito), "),Sl(682,"code"),Jx(683,"<strong>"),sg(),Jx(684," (negrito), "),Sl(685,"code"),Jx(686,"<i>"),sg(),Jx(687," (it\xE1lico), "),Sl(688,"code"),Jx(689,"<em>"),sg(),Jx(690,` (it\xE1lico) e
`),Sl(691,"code"),Jx(692,"<u>"),sg(),Jx(693," (sublinhado)."),sg(),Sl(694,"p"),Jx(695,"Exemplo:"),sg(),Sl(696,"pre")(697,"code",31),Jx(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),sg()()()(),Sl(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),Jx(703," eventOnClick"),Wl(704,"br"),sg()()(),Sl(705,"td",18)(706,"code",34),Jx(707,"Function"),sg()(),Sl(708,"td",21)(709,"em")(710,"strong"),Jx(711,"(opcional)"),sg()(),Sl(712,"p"),Jx(713,"Evento disparado ao clicar no \xEDcone do helper."),sg(),Sl(714,"p"),Jx(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),sg(),Sl(716,"p"),Jx(717,"Pode ser uma fun\xE7\xE3o ou um "),Sl(718,"code"),Jx(719,"EventEmitter"),sg(),Jx(720,"."),sg(),Sl(721,"p"),Jx(722,"Exemplo:"),sg(),Sl(723,"pre")(724,"code"),Jx(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),sg()()()(),Sl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Jx(730," footerAction"),Wl(731,"br"),sg()()(),Sl(732,"td",18)(733,"code",38),Jx(734,`{ label: string; action: Function;
}`),sg()(),Sl(735,"td",21)(736,"em")(737,"strong"),Jx(738,"(opcional)"),sg()(),Sl(739,"p"),Jx(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Sl(741,"code"),Jx(742,"help"),sg(),Jx(743," e desconsiderada quando o type for "),Sl(744,"code"),Jx(745,"info"),sg(),Jx(746,"."),sg(),Sl(747,"p"),Jx(748,"Deve ser um objeto com as propriedades:"),sg(),Sl(749,"ul")(750,"li")(751,"code"),Jx(752,"label"),sg(),Jx(753,": Texto do bot\xE3o."),sg(),Sl(754,"li")(755,"code"),Jx(756,"action"),sg(),Jx(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),sg()(),Sl(758,"p"),Jx(759,"Exemplo:"),sg(),Sl(760,"pre")(761,"code",31),Jx(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),sg()()()(),Sl(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),Jx(767," title"),Wl(768,"br"),sg()()(),Sl(769,"td",18)(770,"code",26),Jx(771,"string"),sg()(),Sl(772,"td",21)(773,"em")(774,"strong"),Jx(775,"(opcional)"),sg()(),Sl(776,"p"),Jx(777,"T\xEDtulo do helper exibido no popover."),sg()()(),Sl(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),Jx(782," type"),Wl(783,"br"),sg()()(),Sl(784,"td",18)(785,"code",39),Jx(786,"'info' "),sg(),Sl(787,"code",40),Jx(788," 'help'"),sg()(),Sl(789,"td",21)(790,"em")(791,"strong"),Jx(792,"(opcional)"),sg()(),Sl(793,"p"),Jx(794,"Tipo do \xEDcone exibido: "),Sl(795,"code"),Jx(796,"info"),sg(),Jx(797," ou "),Sl(798,"code"),Jx(799,"help"),sg(),Jx(800,"."),sg(),Sl(801,"p"),Jx(802,"Quando o valor \xE9 "),Sl(803,"code"),Jx(804,"info"),sg(),Jx(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),sg(),Sl(806,"p"),Jx(807,"Quando o valor \xE9 "),Sl(808,"code"),Jx(809,"help"),sg(),Jx(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),sg()()()(),Sl(811,"h4",33)(812,"code",5),Jx(813,"PoPageAction"),sg()(),Sl(814,"div",2)(815,"p"),Jx(816,"Interface para as a\xE7\xF5es dos componentes "),Sl(817,"code"),Jx(818,"po-page-default"),sg(),Jx(819," e "),Sl(820,"code"),Jx(821,"po-page-list"),sg(),Jx(822,"."),sg(),Sl(823,"p"),Jx(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Sl(825,"em"),Jx(826,"dropdown"),sg(),Jx(827,`,
conforme o `),Sl(828,"code"),Jx(829,"PoPageActionsLayout"),sg(),Jx(830," e o tamanho da tela."),sg(),Sl(831,"blockquote")(832,"p"),Jx(833,"As propriedades "),Sl(834,"code"),Jx(835,"separator"),sg(),Jx(836,", "),Sl(837,"code"),Jx(838,"selected"),sg(),Jx(839," e "),Sl(840,"code"),Jx(841,"subItems"),sg(),Jx(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Sl(843,"em"),Jx(844,"dropdown"),sg(),Jx(845,"."),sg()()(),Sl(846,"h4",10),Jx(847,"Propriedades"),sg(),Sl(848,"table",11)(849,"tr",12)(850,"th",13),Jx(851,"Nome"),sg(),Sl(852,"th",13),Jx(853,"Tipo"),sg(),Sl(854,"th",13),Jx(855,"Descri\xE7\xE3o"),sg()(),Sl(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),Jx(860," action"),Wl(861,"br"),sg()()(),Sl(862,"td",18)(863,"code",34),Jx(864,"Function"),sg()(),Sl(865,"td",21)(866,"em")(867,"strong"),Jx(868,"(opcional)"),sg()(),Sl(869,"p"),Jx(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(871,"p"),Jx(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(873,"code"),Jx(874,"subItems"),sg(),Jx(875,"."),sg(),Sl(876,"blockquote")(877,"p"),Jx(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(879,"em"),Jx(880,"bind"),sg(),Jx(881,`:
`),Sl(882,"code"),Jx(883,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),Jx(888," disabled"),Wl(889,"br"),sg()()(),Sl(890,"td",18)(891,"code",41),Jx(892,"boolean "),sg(),Sl(893,"code",34),Jx(894," Function"),sg()(),Sl(895,"td",21)(896,"em")(897,"strong"),Jx(898,"(opcional)"),sg()(),Sl(899,"p"),Jx(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),Jx(905," icon"),Wl(906,"br"),sg()()(),Sl(907,"td",18)(908,"code",26),Jx(909,"string "),sg(),Sl(910,"code",42),Jx(911," TemplateRef<void>"),sg()(),Sl(912,"td",21)(913,"em")(914,"strong"),Jx(915,"(opcional)"),sg()(),Sl(916,"p"),Jx(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(918,"p"),Jx(919,"Aceita \xEDcones da "),Sl(920,"a",43),Jx(921,"Biblioteca de \xEDcones"),sg(),Jx(922,`, fontes externas (ex: Font Awesome)
ou um `),Sl(923,"code"),Jx(924,"TemplateRef"),sg(),Jx(925," para \xEDcones customizados."),sg(),Sl(926,"pre")(927,"code"),Jx(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),Jx(933," kind"),Wl(934,"br"),sg()()(),Sl(935,"td",18)(936,"code",26),Jx(937,"string"),sg()(),Sl(938,"td",21)(939,"em")(940,"strong"),Jx(941,"(opcional)"),sg()(),Sl(942,"p"),Jx(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Sl(944,"em"),Jx(945,"dropdown"),sg(),Jx(946,"."),sg(),Sl(947,"p"),Jx(948,"Valores permitidos:"),sg(),Sl(949,"ul")(950,"li")(951,"code"),Jx(952,"primary"),sg(),Jx(953,": bot\xE3o com maior destaque visual."),sg(),Sl(954,"li")(955,"code"),Jx(956,"secondary"),sg(),Jx(957,": estilo padr\xE3o."),sg()(),Sl(958,"blockquote")(959,"p"),Jx(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),sg()(),Sl(961,"blockquote")(962,"p"),Jx(963,"Somente uma a\xE7\xE3o pode ter "),Sl(964,"code"),Jx(965,"kind"),sg(),Jx(966," igual a "),Sl(967,"code"),Jx(968,"primary"),sg(),Jx(969,". Caso mais de uma defina "),Sl(970,"code"),Jx(971,"primary"),sg(),Jx(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Sl(973,"code"),Jx(974,"secondary"),sg(),Jx(975,"."),sg()(),Sl(976,"blockquote")(977,"p"),Jx(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Sl(979,"code"),Jx(980,"PoPageActionsLayout"),sg(),Jx(981,"."),sg()()()(),Sl(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),Jx(986," label"),Wl(987,"br"),sg()()(),Sl(988,"td",18)(989,"code",26),Jx(990,"string"),sg()(),Sl(991,"td",21)(992,"p"),Jx(993,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(994,"p"),Jx(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(996,"code"),Jx(997,"subItems"),sg(),Jx(998,"."),sg()()(),Sl(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),Jx(1003," selected"),Wl(1004,"br"),sg()()(),Sl(1005,"td",18)(1006,"code",41),Jx(1007,"boolean"),sg()(),Sl(1008,"td",21)(1009,"em")(1010,"strong"),Jx(1011,"(opcional)"),sg()(),Sl(1012,"p"),Jx(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),Jx(1018," separator"),Wl(1019,"br"),sg()()(),Sl(1020,"td",18)(1021,"code",41),Jx(1022,"boolean"),sg()(),Sl(1023,"td",21)(1024,"em")(1025,"strong"),Jx(1026,"(opcional)"),sg()(),Sl(1027,"p"),Jx(1028,"Atribui uma linha separadora acima do item."),sg()()(),Sl(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),Jx(1033," subItems"),Wl(1034,"br"),sg()()(),Sl(1035,"td",18)(1036,"code",44),Jx(1037,"Array<PoPopupAction>"),sg()(),Sl(1038,"td",21)(1039,"em")(1040,"strong"),Jx(1041,"(opcional)"),sg()(),Sl(1042,"p"),Jx(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(1044,"p"),Jx(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(1046,"blockquote")(1047,"p"),Jx(1048,"As propriedades "),Sl(1049,"code"),Jx(1050,"disabled"),sg(),Jx(1051,", "),Sl(1052,"code"),Jx(1053,"type"),sg(),Jx(1054," e "),Sl(1055,"code"),Jx(1056,"visible"),sg(),Jx(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(1058,"blockquote")(1059,"p"),Jx(1060,"Quando "),Sl(1061,"code"),Jx(1062,"url"),sg(),Jx(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(1064,"blockquote")(1065,"p"),Jx(1066,"Em subn\xEDveis aninhados, o "),Sl(1067,"code"),Jx(1068,"icon"),sg(),Jx(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),Jx(1074," type"),Wl(1075,"br"),sg()()(),Sl(1076,"td",18)(1077,"code",26),Jx(1078,"string"),sg()(),Sl(1079,"td",21)(1080,"em")(1081,"strong"),Jx(1082,"(opcional)"),sg()(),Sl(1083,"p"),Jx(1084,"Define a cor do item."),sg(),Sl(1085,"p"),Jx(1086,"Valores v\xE1lidos:"),sg(),Sl(1087,"ul")(1088,"li")(1089,"code"),Jx(1090,"default"),sg()(),Sl(1091,"li")(1092,"code"),Jx(1093,"danger"),sg()()()()(),Sl(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),Jx(1098," url"),Wl(1099,"br"),sg()()(),Sl(1100,"td",18)(1101,"code",26),Jx(1102,"string"),sg()(),Sl(1103,"td",21)(1104,"em")(1105,"strong"),Jx(1106,"(opcional)"),sg()(),Sl(1107,"p"),Jx(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(1109,"p"),Jx(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1111,"code"),Jx(1112,"url"),sg(),Jx(1113," \xE9 informada em um agrupador, o clique "),Sl(1114,"strong"),Jx(1115,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(1117,"blockquote")(1118,"p"),Jx(1119,"Quando informada, tem prioridade sobre a propriedade "),Sl(1120,"code"),Jx(1121,"action"),sg(),Jx(1122,"."),sg()()()(),Sl(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),Jx(1127," visible"),Wl(1128,"br"),sg()()(),Sl(1129,"td",18)(1130,"code",41),Jx(1131,"boolean "),sg(),Sl(1132,"code",34),Jx(1133," Function"),sg()(),Sl(1134,"td",21)(1135,"em")(1136,"strong"),Jx(1137,"(opcional)"),sg()(),Sl(1138,"p"),Jx(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Sl(1140,"h4",33)(1141,"code",5),Jx(1142,"PoPageDefaultLiterals"),sg()(),Sl(1143,"div",2)(1144,"p"),Jx(1145,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1146,"code"),Jx(1147,"po-page-default"),sg(),Jx(1148,"."),sg()(),Sl(1149,"h4",10),Jx(1150,"Propriedades"),sg(),Sl(1151,"table",11)(1152,"tr",12)(1153,"th",13),Jx(1154,"Nome"),sg(),Sl(1155,"th",13),Jx(1156,"Tipo"),sg(),Sl(1157,"th",13),Jx(1158,"Descri\xE7\xE3o"),sg()(),Sl(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),Jx(1163," otherActions"),Wl(1164,"br"),sg()()(),Sl(1165,"td",18)(1166,"code",26),Jx(1167,"string"),sg()(),Sl(1168,"td",21)(1169,"em")(1170,"strong"),Jx(1171,"(opcional)"),sg()(),Sl(1172,"p"),Jx(1173,"Legenda do "),Sl(1174,"code"),Jx(1175,"po-dropdown"),sg(),Jx(1176," de a\xE7\xF5es."),sg()()()(),Sl(1177,"h3"),Jx(1178,"Enums"),sg(),Sl(1179,"h4",4)(1180,"code",5),Jx(1181,"PoPageActionsLayout"),sg()(),Sl(1182,"div",2)(1183,"p"),Jx(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),Sl(1185,"code"),Jx(1186,"po-page-default"),sg(),Jx(1187,"."),sg(),Sl(1188,"blockquote")(1189,"p"),Jx(1190,"Compat\xEDvel com todos os valores de "),Sl(1191,"code"),Jx(1192,"PoPageHeaderType"),sg(),Jx(1193,"."),sg()()(),Sl(1194,"h4",10),Jx(1195,"Propriedades"),sg(),Sl(1196,"table",11)(1197,"tr",12)(1198,"th",13),Jx(1199,"Nome"),sg(),Sl(1200,"th",13),Jx(1201,"Descri\xE7\xE3o"),sg()(),Sl(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),Jx(1206," default"),Wl(1207,"br"),sg()()(),Sl(1208,"td",21)(1209,"p"),Jx(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),Sl(1211,"em"),Jx(1212,"dropdown"),sg(),Jx(1213,"."),sg(),Sl(1214,"p"),Jx(1215,"Quando "),Sl(1216,"code"),Jx(1217,"PoPageAction.kind"),sg(),Jx(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),Sl(1219,"code"),Jx(1220,"primary"),sg(),Jx(1221,`
e as demais recebem `),Sl(1222,"code"),Jx(1223,"secondary"),sg(),Jx(1224,"."),sg()()(),Sl(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),Jx(1229," dropdown"),Wl(1230,"br"),sg()()(),Sl(1231,"td",21)(1232,"p"),Jx(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),Sl(1234,"em"),Jx(1235,"dropdown"),sg(),Jx(1236,"."),sg()()(),Sl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Jx(1241," mixed"),Wl(1242,"br"),sg()()(),Sl(1243,"td",21)(1244,"p"),Jx(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),Sl(1246,"em"),Jx(1247,"dropdown"),sg(),Jx(1248,"."),sg()()()(),Sl(1249,"h4",4)(1250,"code",5),Jx(1251,"PoPageHeaderType"),sg()(),Sl(1252,"div",2)(1253,"p"),Jx(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),Sl(1255,"code"),Jx(1256,"po-page-default"),sg(),Jx(1257,"."),sg()(),Sl(1258,"h4",10),Jx(1259,"Propriedades"),sg(),Sl(1260,"table",11)(1261,"tr",12)(1262,"th",13),Jx(1263,"Nome"),sg(),Sl(1264,"th",13),Jx(1265,"Descri\xE7\xE3o"),sg()(),Sl(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),Jx(1270," primary"),Wl(1271,"br"),sg()()(),Sl(1272,"td",21)(1273,"p"),Jx(1274,"Layout padr\xE3o com suporte a "),Sl(1275,"code"),Jx(1276,"p-breadcrumb"),sg(),Jx(1277,"."),sg()()(),Sl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Jx(1282," secondary"),Wl(1283,"br"),sg()()(),Sl(1284,"td",21)(1285,"p"),Jx(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),sg(),Sl(1287,"blockquote")(1288,"p"),Jx(1289,"Incompat\xEDvel com "),Sl(1290,"code"),Jx(1291,"p-breadcrumb"),sg(),Jx(1292,"."),sg()()()(),Sl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Jx(1297," tertiary"),Wl(1298,"br"),sg()()(),Sl(1299,"td",21)(1300,"p"),Jx(1301,"Layout simplificado sem bot\xE3o de retorno."),sg(),Sl(1302,"blockquote")(1303,"p"),Jx(1304,"Incompat\xEDvel com "),Sl(1305,"code"),Jx(1306,"p-breadcrumb"),sg(),Jx(1307,"."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-default-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,xe,Pe,Ce,we],encapsulation:2})}return l})();var Re=[{path:"",component:De}],_e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[pL.forChild(Re),pL]})}return l})();var Dt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,_e]})}return l})();export{Dt as DocPoPageDefaultModule};