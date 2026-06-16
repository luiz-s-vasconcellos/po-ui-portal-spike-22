import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,s,r as r$1,E,a3 as D3,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,b7 as Ge,aO as Yo,bB as ga,ai as ya,aU as IR,al as lx,am as pw,an as $0,ao as QA,aX as _x,a7 as Qx,ap as hw,aq as G0,ar as JA,c2 as Ap,aQ as dt,aR as ty,X as we$1,as as $l,c3 as zo,at as uo,au as fo,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&Ul(0,"po-page-default",0);},dependencies:[D3],encapsulation:2,changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Default Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-default-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ve],encapsulation:2})}return l})();var He=()=>({});function Ve(l,ke){if(l&1){let d=lx();wl(0,"po-input",36),pw("ngModelChange",function(i){Qy(d);let m=gx(2);return $x(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Jy(i)}),ng(),$0();}if(l&2){let d=gx(2);hw("ngModel",d.helperFooterLabel),G0();}}function We(l,ke){if(l&1){let d=lx();wl(0,"po-widget",10)(1,"div",6)(2,"po-input",32),pw("ngModelChange",function(i){Qy(d);let m=gx();return $x(m.helperTitle,i)||(m.helperTitle=i),Jy(i)}),ng(),$0(),wl(3,"po-input",33),pw("ngModelChange",function(i){Qy(d);let m=gx();return $x(m.helperContent,i)||(m.helperContent=i),Jy(i)}),ng(),$0(),ng(),wl(4,"div",6)(5,"po-radio-group",34),ut("ngModelChange",function(i){Qy(d);let m=gx();return Jy(m.helperType=i)}),ng(),$0(),ng(),wl(6,"div",6),QA(7,Ve,1,1,"po-input",35),ng()();}if(l&2){let d=gx();Pp(2),hw("ngModel",d.helperTitle),G0(),Pp(),hw("ngModel",d.helperContent),G0(),Pp(2),YE("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),G0(),Pp(2),JA(d.helperType==="help"?7:-1);}}var Ce=(()=>{class l{poNotification=f(Bp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=lx();wl(0,"po-page-default",5),ut("p-back",function(){return i.onBack()}),ng(),Ul(1,"po-divider"),wl(2,"form",null,0)(4,"div",6)(5,"po-input",7),pw("ngModelChange",function(a){return Qy(m),$x(i.title,a)||(i.title=a),Jy(a)}),ng(),$0(),wl(6,"po-input",8),pw("ngModelChange",function(a){return Qy(m),$x(i.subtitle,a)||(i.subtitle=a),Jy(a)}),ng(),$0(),wl(7,"po-checkbox",9),pw("ngModelChange",function(a){return Qy(m),$x(i.showHelper,a)||(i.showHelper=a),Jy(a)}),ng(),$0(),QA(8,We,8,6,"po-widget",10),wl(9,"po-select",11),ut("ngModelChange",function(a){return i.pageHeaderType=a}),ng(),$0(),wl(10,"po-select",12),ut("ngModelChange",function(a){return i.pageActionsLayout=a}),ng(),$0(),wl(11,"po-input",13),pw("ngModelChange",function(a){return Qy(m),$x(i.literals,a)||(i.literals=a),Jy(a)}),ut("p-change",function(){return i.changeLiterals()}),ng(),$0(),wl(12,"po-radio-group",14),pw("ngModelChange",function(a){return Qy(m),$x(i.componentsSize,a)||(i.componentsSize=a),Jy(a)}),ng(),$0(),ng()(),Ul(13,"po-divider"),wl(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),pw("ngModelChange",function(a){return Qy(m),$x(i.action.label,a)||(i.action.label=a),Jy(a)}),ng(),$0(),wl(19,"po-input",17),pw("ngModelChange",function(a){return Qy(m),$x(i.action.action,a)||(i.action.action=a),Jy(a)}),ng(),$0(),wl(20,"po-input",18),pw("ngModelChange",function(a){return Qy(m),$x(i.action.url,a)||(i.action.url=a),Jy(a)}),ng(),$0(),wl(21,"po-select",19),ut("ngModelChange",function(a){return i.action.type=a}),ng(),$0(),wl(22,"po-select",20),ut("ngModelChange",function(a){return i.action.icon=a}),ng(),$0(),wl(23,"po-select",21),ut("ngModelChange",function(a){return i.action.kind=a}),ng(),$0(),wl(24,"po-checkbox-group",22),ut("ngModelChange",function(a){return i.action=a}),ng(),$0(),ng(),wl(25,"div",6)(26,"po-button",23),ut("p-click",function(){return i.addAction(i.action)}),ng()()()(),Ul(27,"po-divider"),wl(28,"form",null,2)(30,"div",6)(31,"po-input",24),pw("ngModelChange",function(a){return Qy(m),$x(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Jy(a)}),ng(),$0(),ng()(),wl(32,"form",null,3)(34,"div",6)(35,"po-input",25),pw("ngModelChange",function(a){return Qy(m),$x(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Jy(a)}),ng(),$0(),wl(36,"po-input",26),pw("ngModelChange",function(a){return Qy(m),$x(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Jy(a)}),ng(),$0(),ng(),wl(37,"div",6)(38,"po-button",27),ut("p-click",function(){return i.addBreadcrumbItem()}),ng()()(),Ul(39,"po-divider"),wl(40,"form",null,4)(42,"div",6)(43,"po-input",28),pw("ngModelChange",function(a){return Qy(m),$x(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Jy(a)}),ng(),$0(),wl(44,"po-input",29),pw("ngModelChange",function(a){return Qy(m),$x(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Jy(a)}),ng(),$0(),ng(),wl(45,"div",6)(46,"po-button",30),ut("p-click",function(){return i.addBreadcrumbParam()}),ng()()(),Ul(47,"po-divider"),wl(48,"div",6)(49,"po-button",31),ut("p-click",function(){return i.restore()}),ng()();}if(r&2){let m=_x(16),s=_x(33),a=_x(41);YE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??Qx(42,He))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Pp(5),hw("ngModel",i.title),G0(),Pp(),hw("ngModel",i.subtitle),G0(),Pp(),hw("ngModel",i.showHelper),G0(),Pp(),JA(i.showHelper?8:-1),Pp(),YE("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),G0(),Pp(),YE("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),G0(),Pp(),hw("ngModel",i.literals),G0(),Pp(),hw("ngModel",i.componentsSize),YE("p-columns",4)("p-options",i.componentsSizeOptions),G0(),Pp(6),hw("ngModel",i.action.label),G0(),Pp(),hw("ngModel",i.action.action),G0(),Pp(),hw("ngModel",i.action.url),G0(),Pp(),YE("ngModel",i.action.type)("p-options",i.typeOptions),G0(),Pp(),YE("ngModel",i.action.icon)("p-options",i.iconOptions),G0(),Pp(),YE("ngModel",i.action.kind)("p-options",i.actionKindOptions),G0(),Pp(),YE("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),G0(),Pp(2),YE("p-disabled",m.form.invalid),Pp(5),hw("ngModel",i.breadcrumb.favorite),G0(),Pp(4),hw("ngModel",i.breadcrumbItem.label),G0(),Pp(),hw("ngModel",i.breadcrumbItem.link),G0(),Pp(2),YE("p-disabled",s.invalid??false),Pp(5),hw("ngModel",i.breadcrumbParams.property),G0(),Pp(),hw("ngModel",i.breadcrumbParams.value),G0(),Pp(2),YE("p-disabled",a.invalid??false);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Ge,Yo,ga,ya,D3,IR],encapsulation:2,changeDetection:1})}return l})();var ze=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Default Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-default-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return l})();var te=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=E({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Re=["formShare"],De=(()=>{class l{poNotification=f(Bp);sampleDashboardService=f(te);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&$l(Re,7)(zo,7),r&2){let m;uo(m=fo())&&(i.formShare=m.first),uo(m=fo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([te])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=lx();wl(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),Ux(4,"540"),ng(),wl(5,"div",5),Ux(6,"www.po.com.br"),ng()(),wl(7,"po-widget",6)(8,"div",4),Ux(9,"300 views"),ng(),wl(10,"div",5),Ux(11,"https://po-ui.io"),ng()(),wl(12,"po-widget",7)(13,"div",4),Ux(14,"Online"),ng(),wl(15,"div",5),Ux(16,"28 days"),ng()(),wl(17,"po-widget",8)(18,"div",4),Ux(19,"266"),ng(),wl(20,"div",5),Ux(21,"@po-ui/ng-components - 1.10.1"),ng()(),wl(22,"po-widget",9)(23,"div",4),Ux(24,"800 questions"),ng(),wl(25,"div",5),Ux(26,"https://devforum.po.com.br"),ng()(),wl(27,"po-widget",10)(28,"div",4),Ux(29,"AngularJS - Angular 6"),ng(),wl(30,"div",5),Ux(31,"Angular 6 most downloaded"),ng()()(),Ul(32,"po-divider")(33,"po-table",11),ng(),wl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),pw("ngModelChange",function(a){return Qy(m),$x(i.email,a)||(i.email=a),Jy(a)}),ng(),$0(),ng()();}r&2&&(YE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Pp(33),YE("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Pp(),YE("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Pp(3),hw("ngModel",i.email),G0());},dependencies:[aY,iY,oY,ck,ok,di,Ap,dt,D3,ty,IR],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Qe=l=>({"docs-sample-code-tabs":l}),_e=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Default - Dashboard"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),ng(),wl(29,"pre",11),Ux(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-page-default-dashboard"),ng(),Ul(33,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Qe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,De],encapsulation:2})}return l})();var Me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),wl(7,"code"),Ux(8,"po-page-default"),ng(),Ux(9,", "),wl(10,"code"),Ux(11,"po-page-detail"),ng(),Ux(12,`,
`),wl(13,"code"),Ux(14,"po-page-edit"),ng(),Ux(15,", "),wl(16,"code"),Ux(17,"po-page-list"),ng(),Ux(18," e "),wl(19,"code"),Ux(20,"po-page-slide"),ng(),Ux(21,"."),ng()(),wl(22,"h3",3),Ux(23,"Componente"),ng(),wl(24,"h4",4)(25,"code",5),Ux(26,"PoPageDefaultComponent"),ng()(),wl(27,"div",2)(28,"p"),Ux(29,"O "),wl(30,"code"),Ux(31,"po-page-default"),ng(),Ux(32," \xE9 utilizado como container principal para telas sem um template definido."),ng(),wl(33,"p"),Ux(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),wl(35,"code"),Ux(36,"p-page-header-type"),ng(),Ux(37,", navega\xE7\xE3o por "),wl(38,"em"),Ux(39,"breadcrumb"),ng(),Ux(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),wl(41,"code"),Ux(42,"p-page-actions-layout"),ng(),Ux(43,"."),ng(),wl(44,"h4"),Ux(45,"Tokens customiz\xE1veis"),ng(),wl(46,"blockquote")(47,"p"),Ux(48,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(49,"a",6),Ux(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(51,"."),ng()(),wl(52,"table")(53,"thead")(54,"tr")(55,"th"),Ux(56,"Propriedade"),ng(),wl(57,"th"),Ux(58,"Descri\xE7\xE3o"),ng(),wl(59,"th"),Ux(60,"Valor Padr\xE3o"),ng()()(),wl(61,"tbody")(62,"tr")(63,"td")(64,"strong"),Ux(65,"P\xE1gina (po-page-default)"),ng()(),Ul(66,"td")(67,"td"),ng(),wl(68,"tr")(69,"td")(70,"code"),Ux(71,"--background"),ng()(),wl(72,"td"),Ux(73,"Background da p\xE1gina (header e body)"),ng(),wl(74,"td")(75,"code"),Ux(76,"var(--color-page-background-color-page)"),ng()()(),wl(77,"tr")(78,"td")(79,"strong"),Ux(80,"Header (po-page-header)"),ng()(),Ul(81,"td")(82,"td"),ng(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--padding"),ng()(),wl(87,"td"),Ux(88,"Espa\xE7amento do header"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--gap"),ng()(),wl(96,"td"),Ux(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--spacing-md)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--gap-actions"),ng()(),wl(105,"td"),Ux(106,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--spacing-xs)"),ng()()(),wl(110,"tr")(111,"td")(112,"strong"),Ux(113,"Header (po-page-header .po-page-header-title)"),ng()(),Ul(114,"td")(115,"td"),ng(),wl(116,"tr")(117,"td")(118,"code"),Ux(119,"--font-family"),ng()(),wl(120,"td"),Ux(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(122,"td")(123,"code"),Ux(124,"var(--font-family-theme)"),ng()()(),wl(125,"tr")(126,"td")(127,"strong"),Ux(128,"Content (po-page-content)"),ng()(),Ul(129,"td")(130,"td"),ng(),wl(131,"tr")(132,"td")(133,"code"),Ux(134,"--padding-content"),ng()(),wl(135,"td"),Ux(136,"Espa\xE7amento do conte\xFAdo"),ng(),wl(137,"td")(138,"code"),Ux(139,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(140,"div",7)(141,"h4",8),Ux(142,"Seletor"),ng(),wl(143,"pre",9),Ux(144,`<po-page-default
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
`),ng()(),wl(145,"h4",10),Ux(146,"Propriedades"),ng(),wl(147,"table",11)(148,"tr",12)(149,"th",13),Ux(150,"Nome"),ng(),wl(151,"th",13),Ux(152,"Tipo"),ng(),wl(153,"th",13),Ux(154,"Padr\xE3o"),ng(),wl(155,"th",13),Ux(156,"Descri\xE7\xE3o"),ng()(),wl(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),Ux(161," p-actions"),Ul(162,"br"),ng()()(),wl(163,"td",18)(164,"code",19),Ux(165,"Array<PoPageAction>"),ng()(),wl(166,"td",20)(167,"p")(168,"code"),Ux(169,"[]"),ng()()(),wl(170,"td",21)(171,"em")(172,"strong"),Ux(173,"(opcional)"),ng()(),wl(174,"p"),Ux(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),ng(),wl(176,"p"),Ux(177,"Recebe um array de objetos que implementam a interface "),wl(178,"code"),Ux(179,"PoPageAction"),ng(),Ux(180,"."),ng(),wl(181,"blockquote")(182,"p"),Ux(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),wl(184,"code"),Ux(185,"p-page-actions-layout"),ng(),Ux(186,"."),ng()()()(),wl(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),Ux(191," (p-back)"),Ul(192,"br"),ng()()(),wl(193,"td",18)(194,"code",24),Ux(195,"EventEmitter"),ng()(),wl(196,"td",20),Ux(197,"-"),ng(),wl(198,"td",21)(199,"em")(200,"strong"),Ux(201,"(opcional)"),ng()(),wl(202,"p"),Ux(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),ng(),wl(204,"blockquote")(205,"p"),Ux(206,"Bot\xE3o exibido apenas quando a propriedade "),wl(207,"code"),Ux(208,"p-page-header-type"),ng(),Ux(209," est\xE1 configurada como "),wl(210,"code"),Ux(211,"secondary"),ng(),Ux(212,"."),ng()()()(),wl(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),Ux(217," p-breadcrumb"),Ul(218,"br"),ng()()(),wl(219,"td",18)(220,"code",25),Ux(221,"PoBreadcrumb"),ng()(),wl(222,"td",20),Ux(223,"-"),ng(),wl(224,"td",21)(225,"em")(226,"strong"),Ux(227,"(opcional)"),ng()(),wl(228,"p"),Ux(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),ng(),wl(230,"p"),Ux(231,"Recebe um objeto que implementa a interface "),wl(232,"code"),Ux(233,"PoBreadcrumb"),ng(),Ux(234,"."),ng(),wl(235,"blockquote")(236,"p"),Ux(237,"Compat\xEDvel com o cabe\xE7alho ("),wl(238,"code"),Ux(239,"p-page-header-type"),ng(),Ux(240,") do tipo "),wl(241,"code"),Ux(242,"primary"),ng(),Ux(243,"."),ng()()()(),wl(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),Ux(248," p-components-size"),Ul(249,"br"),ng()()(),wl(250,"td",18)(251,"code",26),Ux(252,"string"),ng()(),wl(253,"td",20)(254,"p")(255,"code"),Ux(256,"medium"),ng()()(),wl(257,"td",21)(258,"em")(259,"strong"),Ux(260,"(opcional)"),ng()(),wl(261,"p"),Ux(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(263,"ul")(264,"li")(265,"code"),Ux(266,"small"),ng(),Ux(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(268,"li")(269,"code"),Ux(270,"medium"),ng(),Ux(271,": aplica a medida medium de cada componente."),ng()(),wl(272,"blockquote")(273,"p"),Ux(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(275,"code"),Ux(276,"medium"),ng(),Ux(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(278,"a",27),Ux(279,"po-theme"),ng(),Ux(280,"."),ng()()()(),wl(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),Ux(285," p-helper"),Ul(286,"br"),ng()()(),wl(287,"td",18)(288,"code",28),Ux(289,"PoHelperOptions "),ng(),wl(290,"code",26),Ux(291," string"),ng()(),wl(292,"td",20)(293,"p")(294,"code"),Ux(295,"info"),ng()()(),wl(296,"td",21)(297,"em")(298,"strong"),Ux(299,"(opcional)"),ng()(),wl(300,"p"),Ux(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),ng(),wl(302,"p"),Ux(303,"Quando n\xE3o houver subt\xEDtulo ("),wl(304,"code"),Ux(305,"p-subtitle"),ng(),Ux(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),ng(),wl(307,"p"),Ux(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),wl(309,"code"),Ux(310,"PoHelperOptions"),ng(),Ux(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),ng(),wl(312,"p"),Ux(313,"Exemplo de uso:"),ng(),wl(314,"pre")(315,"code",29),Ux(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),ng()()()(),wl(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),Ux(321," p-literals"),Ul(322,"br"),ng()()(),wl(323,"td",18)(324,"code",30),Ux(325,"PoPageDefaultLiterals"),ng()(),wl(326,"td",20),Ux(327,"-"),ng(),wl(328,"td",21)(329,"em")(330,"strong"),Ux(331,"(opcional)"),ng()(),wl(332,"p"),Ux(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),ng(),wl(334,"p"),Ux(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),wl(336,"code"),Ux(337,"PoPageDefaultLiterals"),ng(),Ux(338,"."),ng(),wl(339,"p"),Ux(340,"Exemplo de uso:"),ng(),wl(341,"pre")(342,"code",29),Ux(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),ng()(),wl(344,"pre")(345,"code",31),Ux(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),ng()(),wl(347,"blockquote")(348,"p"),Ux(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),wl(350,"a",32)(351,"code"),Ux(352,"PoI18nService"),ng()(),Ux(353," ou navegador."),ng()()()(),wl(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),Ux(358," p-page-actions-layout"),Ul(359,"br"),ng()()(),wl(360,"td",18)(361,"code",26),Ux(362,"string"),ng()(),wl(363,"td",20)(364,"p")(365,"code"),Ux(366,"default"),ng()()(),wl(367,"td",21)(368,"em")(369,"strong"),Ux(370,"(opcional)"),ng()(),wl(371,"p"),Ux(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),ng(),wl(373,"p"),Ux(374,"Aceita valores do enum "),wl(375,"code"),Ux(376,"PoPageActionsLayout"),ng(),Ux(377,"."),ng(),wl(378,"blockquote")(379,"p"),Ux(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),wl(381,"em"),Ux(382,"dropdown"),ng(),Ux(383," que possuam a propriedade "),wl(384,"code"),Ux(385,"PoPageAction.icon"),ng(),Ux(386,` definida
exibir\xE3o apenas o \xEDcone.`),ng()()()(),wl(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),Ux(391," p-page-header-type"),Ul(392,"br"),ng()()(),wl(393,"td",18)(394,"code",26),Ux(395,"string"),ng()(),wl(396,"td",20)(397,"p")(398,"code"),Ux(399,"primary"),ng()()(),wl(400,"td",21)(401,"em")(402,"strong"),Ux(403,"(opcional)"),ng()(),wl(404,"p"),Ux(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),ng(),wl(406,"p"),Ux(407,"Aceita valores do enum "),wl(408,"code"),Ux(409,"PoPageHeaderType"),ng(),Ux(410,"."),ng()()(),wl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Ux(415," p-subtitle"),Ul(416,"br"),ng()()(),wl(417,"td",18)(418,"code",26),Ux(419,"string"),ng()(),wl(420,"td",20),Ux(421,"-"),ng(),wl(422,"td",21)(423,"em")(424,"strong"),Ux(425,"(opcional)"),ng()(),wl(426,"p"),Ux(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),ng(),wl(428,"p"),Ux(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(430,"code"),Ux(431,"<b>"),ng(),Ux(432," (negrito), "),wl(433,"code"),Ux(434,"<strong>"),ng(),Ux(435," (negrito), "),wl(436,"code"),Ux(437,"<i>"),ng(),Ux(438," (it\xE1lico), "),wl(439,"code"),Ux(440,"<em>"),ng(),Ux(441,` (it\xE1lico) e
`),wl(442,"code"),Ux(443,"<u>"),ng(),Ux(444," (sublinhado)."),ng(),wl(445,"p"),Ux(446,"Exemplo:"),ng(),wl(447,"pre")(448,"code",31),Ux(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),ng()(),wl(450,"blockquote")(451,"p"),Ux(452,"Requer que "),wl(453,"code"),Ux(454,"p-title"),ng(),Ux(455," esteja definido."),ng()()()(),wl(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),Ux(460," p-title"),Ul(461,"br"),ng()()(),wl(462,"td",18)(463,"code",26),Ux(464,"string"),ng()(),wl(465,"td",20),Ux(466,"-"),ng(),wl(467,"td",21)(468,"em")(469,"strong"),Ux(470,"(opcional)"),ng()(),wl(471,"p"),Ux(472,"Define o t\xEDtulo principal da p\xE1gina."),ng()()()(),wl(473,"h3"),Ux(474,"Interfaces"),ng(),wl(475,"h4",33)(476,"code",5),Ux(477,"PoBreadcrumbItem"),ng()(),wl(478,"div",2)(479,"p"),Ux(480,"Interface que define cada item do componente "),wl(481,"strong"),Ux(482,"po-breadcrumb"),ng(),Ux(483,"."),ng()(),wl(484,"h4",10),Ux(485,"Propriedades"),ng(),wl(486,"table",11)(487,"tr",12)(488,"th",13),Ux(489,"Nome"),ng(),wl(490,"th",13),Ux(491,"Tipo"),ng(),wl(492,"th",13),Ux(493,"Descri\xE7\xE3o"),ng()(),wl(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),Ux(498," action"),Ul(499,"br"),ng()()(),wl(500,"td",18)(501,"code",34),Ux(502,"Function"),ng()(),wl(503,"td",21)(504,"em")(505,"strong"),Ux(506,"(opcional)"),ng()(),wl(507,"p"),Ux(508,"A\xE7\xE3o executada ao clicar no item."),ng(),wl(509,"blockquote")(510,"p"),Ux(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),wl(512,"em"),Ux(513,"label"),ng(),Ux(514," do item como par\xE2metro para execu\xE7\xE3o."),ng()()()(),wl(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),Ux(519," label"),Ul(520,"br"),ng()()(),wl(521,"td",18)(522,"code",26),Ux(523,"string"),ng()(),wl(524,"td",21)(525,"p"),Ux(526,"R\xF3tulo do item."),ng()()(),wl(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),Ux(531," link"),Ul(532,"br"),ng()()(),wl(533,"td",18)(534,"code",26),Ux(535,"string"),ng()(),wl(536,"td",21)(537,"em")(538,"strong"),Ux(539,"(opcional)"),ng()(),wl(540,"p"),Ux(541,"Url do item."),ng(),wl(542,"blockquote")(543,"p"),Ux(544,"Caso o item tamb\xE9m contenha uma "),wl(545,"em"),Ux(546,"action"),ng(),Ux(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),wl(548,"em"),Ux(549,"link"),ng(),Ux(550,"."),ng()(),wl(551,"blockquote")(552,"p"),Ux(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),wl(554,"strong")(555,"a",35),Ux(556,"Veja um exemplo de como criar rotas aqui"),ng()(),Ux(557,"."),ng()(),wl(558,"blockquote")(559,"p"),Ux(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),wl(561,"code"),Ux(562,"p-favorite-service"),ng(),Ux(563," consiga favoritar ou desfavoritar."),ng()()()()(),wl(564,"h4",33)(565,"code",5),Ux(566,"PoBreadcrumb"),ng()(),wl(567,"div",2)(568,"p"),Ux(569,"Interface que define o "),wl(570,"code"),Ux(571,"po-breadcrumb"),ng(),Ux(572,"."),ng()(),wl(573,"h4",10),Ux(574,"Propriedades"),ng(),wl(575,"table",11)(576,"tr",12)(577,"th",13),Ux(578,"Nome"),ng(),wl(579,"th",13),Ux(580,"Tipo"),ng(),wl(581,"th",13),Ux(582,"Descri\xE7\xE3o"),ng()(),wl(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),Ux(587," favorite"),Ul(588,"br"),ng()()(),wl(589,"td",18)(590,"code",26),Ux(591,"string"),ng()(),wl(592,"td",21)(593,"em")(594,"strong"),Ux(595,"(opcional)"),ng()(),wl(596,"p"),Ux(597,"Permite definir uma URL para favoritar ou desfavoritar."),ng(),wl(598,"blockquote")(599,"p"),Ux(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),wl(601,"code"),Ux(602,"p-favorite-service"),ng(),Ux(603," do componente "),wl(604,"code"),Ux(605,"po-breadcrumb"),ng(),Ux(606,"."),ng()()()(),wl(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),Ux(611," items"),Ul(612,"br"),ng()()(),wl(613,"td",18)(614,"code",36),Ux(615,"Array<PoBreadcrumbItem>"),ng()(),wl(616,"td",21)(617,"p"),Ux(618,"Lista de itens do "),wl(619,"em"),Ux(620,"breadcrumb"),ng(),Ux(621,"."),ng(),wl(622,"p")(623,"strong"),Ux(624,"Exemplo:"),ng()(),wl(625,"pre")(626,"code"),Ux(627,`{ label: 'Po Portal', link: 'portal' }
`),ng()()()(),wl(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),Ux(632," params"),Ul(633,"br"),ng()()(),wl(634,"td",18)(635,"code",37),Ux(636,"object"),ng()(),wl(637,"td",21)(638,"em")(639,"strong"),Ux(640,"(opcional)"),ng()(),wl(641,"p"),Ux(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),ng()()()(),wl(643,"h4",33)(644,"code",5),Ux(645,"PoHelperOptions"),ng()(),wl(646,"div",2)(647,"p"),Ux(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),wl(649,"em"),Ux(650,"helper"),ng(),Ux(651,")."),ng()(),wl(652,"h4",10),Ux(653,"Propriedades"),ng(),wl(654,"table",11)(655,"tr",12)(656,"th",13),Ux(657,"Nome"),ng(),wl(658,"th",13),Ux(659,"Tipo"),ng(),wl(660,"th",13),Ux(661,"Descri\xE7\xE3o"),ng()(),wl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Ux(666," content"),Ul(667,"br"),ng()()(),wl(668,"td",18)(669,"code",26),Ux(670,"string"),ng()(),wl(671,"td",21)(672,"em")(673,"strong"),Ux(674,"(opcional)"),ng()(),wl(675,"p"),Ux(676,"Texto explicativo exibido no popover."),ng(),wl(677,"p"),Ux(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(679,"code"),Ux(680,"<b>"),ng(),Ux(681," (negrito), "),wl(682,"code"),Ux(683,"<strong>"),ng(),Ux(684," (negrito), "),wl(685,"code"),Ux(686,"<i>"),ng(),Ux(687," (it\xE1lico), "),wl(688,"code"),Ux(689,"<em>"),ng(),Ux(690,` (it\xE1lico) e
`),wl(691,"code"),Ux(692,"<u>"),ng(),Ux(693," (sublinhado)."),ng(),wl(694,"p"),Ux(695,"Exemplo:"),ng(),wl(696,"pre")(697,"code",31),Ux(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ng()()()(),wl(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),Ux(703," eventOnClick"),Ul(704,"br"),ng()()(),wl(705,"td",18)(706,"code",34),Ux(707,"Function"),ng()(),wl(708,"td",21)(709,"em")(710,"strong"),Ux(711,"(opcional)"),ng()(),wl(712,"p"),Ux(713,"Evento disparado ao clicar no \xEDcone do helper."),ng(),wl(714,"p"),Ux(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),ng(),wl(716,"p"),Ux(717,"Pode ser uma fun\xE7\xE3o ou um "),wl(718,"code"),Ux(719,"EventEmitter"),ng(),Ux(720,"."),ng(),wl(721,"p"),Ux(722,"Exemplo:"),ng(),wl(723,"pre")(724,"code"),Ux(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ng()()()(),wl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Ux(730," footerAction"),Ul(731,"br"),ng()()(),wl(732,"td",18)(733,"code",38),Ux(734,`{ label: string; action: Function;
}`),ng()(),wl(735,"td",21)(736,"em")(737,"strong"),Ux(738,"(opcional)"),ng()(),wl(739,"p"),Ux(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),wl(741,"code"),Ux(742,"help"),ng(),Ux(743," e desconsiderada quando o type for "),wl(744,"code"),Ux(745,"info"),ng(),Ux(746,"."),ng(),wl(747,"p"),Ux(748,"Deve ser um objeto com as propriedades:"),ng(),wl(749,"ul")(750,"li")(751,"code"),Ux(752,"label"),ng(),Ux(753,": Texto do bot\xE3o."),ng(),wl(754,"li")(755,"code"),Ux(756,"action"),ng(),Ux(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),ng()(),wl(758,"p"),Ux(759,"Exemplo:"),ng(),wl(760,"pre")(761,"code",31),Ux(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ng()()()(),wl(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),Ux(767," title"),Ul(768,"br"),ng()()(),wl(769,"td",18)(770,"code",26),Ux(771,"string"),ng()(),wl(772,"td",21)(773,"em")(774,"strong"),Ux(775,"(opcional)"),ng()(),wl(776,"p"),Ux(777,"T\xEDtulo do helper exibido no popover."),ng()()(),wl(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),Ux(782," type"),Ul(783,"br"),ng()()(),wl(784,"td",18)(785,"code",39),Ux(786,"'info' "),ng(),wl(787,"code",40),Ux(788," 'help'"),ng()(),wl(789,"td",21)(790,"em")(791,"strong"),Ux(792,"(opcional)"),ng()(),wl(793,"p"),Ux(794,"Tipo do \xEDcone exibido: "),wl(795,"code"),Ux(796,"info"),ng(),Ux(797," ou "),wl(798,"code"),Ux(799,"help"),ng(),Ux(800,"."),ng(),wl(801,"p"),Ux(802,"Quando o valor \xE9 "),wl(803,"code"),Ux(804,"info"),ng(),Ux(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),ng(),wl(806,"p"),Ux(807,"Quando o valor \xE9 "),wl(808,"code"),Ux(809,"help"),ng(),Ux(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),ng()()()(),wl(811,"h4",33)(812,"code",5),Ux(813,"PoPageAction"),ng()(),wl(814,"div",2)(815,"p"),Ux(816,"Interface para as a\xE7\xF5es dos componentes "),wl(817,"code"),Ux(818,"po-page-default"),ng(),Ux(819," e "),wl(820,"code"),Ux(821,"po-page-list"),ng(),Ux(822,"."),ng(),wl(823,"p"),Ux(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),wl(825,"em"),Ux(826,"dropdown"),ng(),Ux(827,`,
conforme o `),wl(828,"code"),Ux(829,"PoPageActionsLayout"),ng(),Ux(830," e o tamanho da tela."),ng(),wl(831,"blockquote")(832,"p"),Ux(833,"As propriedades "),wl(834,"code"),Ux(835,"separator"),ng(),Ux(836,", "),wl(837,"code"),Ux(838,"selected"),ng(),Ux(839," e "),wl(840,"code"),Ux(841,"subItems"),ng(),Ux(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),wl(843,"em"),Ux(844,"dropdown"),ng(),Ux(845,"."),ng()()(),wl(846,"h4",10),Ux(847,"Propriedades"),ng(),wl(848,"table",11)(849,"tr",12)(850,"th",13),Ux(851,"Nome"),ng(),wl(852,"th",13),Ux(853,"Tipo"),ng(),wl(854,"th",13),Ux(855,"Descri\xE7\xE3o"),ng()(),wl(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),Ux(860," action"),Ul(861,"br"),ng()()(),wl(862,"td",18)(863,"code",34),Ux(864,"Function"),ng()(),wl(865,"td",21)(866,"em")(867,"strong"),Ux(868,"(opcional)"),ng()(),wl(869,"p"),Ux(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(871,"p"),Ux(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(873,"code"),Ux(874,"subItems"),ng(),Ux(875,"."),ng(),wl(876,"blockquote")(877,"p"),Ux(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(879,"em"),Ux(880,"bind"),ng(),Ux(881,`:
`),wl(882,"code"),Ux(883,"action: this.myFunction.bind(this)"),ng()()()()(),wl(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),Ux(888," disabled"),Ul(889,"br"),ng()()(),wl(890,"td",18)(891,"code",41),Ux(892,"boolean "),ng(),wl(893,"code",34),Ux(894," Function"),ng()(),wl(895,"td",21)(896,"em")(897,"strong"),Ux(898,"(opcional)"),ng()(),wl(899,"p"),Ux(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),Ux(905," icon"),Ul(906,"br"),ng()()(),wl(907,"td",18)(908,"code",26),Ux(909,"string "),ng(),wl(910,"code",42),Ux(911," TemplateRef<void>"),ng()(),wl(912,"td",21)(913,"em")(914,"strong"),Ux(915,"(opcional)"),ng()(),wl(916,"p"),Ux(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(918,"p"),Ux(919,"Aceita \xEDcones da "),wl(920,"a",43),Ux(921,"Biblioteca de \xEDcones"),ng(),Ux(922,`, fontes externas (ex: Font Awesome)
ou um `),wl(923,"code"),Ux(924,"TemplateRef"),ng(),Ux(925," para \xEDcones customizados."),ng(),wl(926,"pre")(927,"code"),Ux(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),Ux(933," kind"),Ul(934,"br"),ng()()(),wl(935,"td",18)(936,"code",26),Ux(937,"string"),ng()(),wl(938,"td",21)(939,"em")(940,"strong"),Ux(941,"(opcional)"),ng()(),wl(942,"p"),Ux(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),wl(944,"em"),Ux(945,"dropdown"),ng(),Ux(946,"."),ng(),wl(947,"p"),Ux(948,"Valores permitidos:"),ng(),wl(949,"ul")(950,"li")(951,"code"),Ux(952,"primary"),ng(),Ux(953,": bot\xE3o com maior destaque visual."),ng(),wl(954,"li")(955,"code"),Ux(956,"secondary"),ng(),Ux(957,": estilo padr\xE3o."),ng()(),wl(958,"blockquote")(959,"p"),Ux(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),ng()(),wl(961,"blockquote")(962,"p"),Ux(963,"Somente uma a\xE7\xE3o pode ter "),wl(964,"code"),Ux(965,"kind"),ng(),Ux(966," igual a "),wl(967,"code"),Ux(968,"primary"),ng(),Ux(969,". Caso mais de uma defina "),wl(970,"code"),Ux(971,"primary"),ng(),Ux(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),wl(973,"code"),Ux(974,"secondary"),ng(),Ux(975,"."),ng()(),wl(976,"blockquote")(977,"p"),Ux(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),wl(979,"code"),Ux(980,"PoPageActionsLayout"),ng(),Ux(981,"."),ng()()()(),wl(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),Ux(986," label"),Ul(987,"br"),ng()()(),wl(988,"td",18)(989,"code",26),Ux(990,"string"),ng()(),wl(991,"td",21)(992,"p"),Ux(993,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(994,"p"),Ux(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(996,"code"),Ux(997,"subItems"),ng(),Ux(998,"."),ng()()(),wl(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),Ux(1003," selected"),Ul(1004,"br"),ng()()(),wl(1005,"td",18)(1006,"code",41),Ux(1007,"boolean"),ng()(),wl(1008,"td",21)(1009,"em")(1010,"strong"),Ux(1011,"(opcional)"),ng()(),wl(1012,"p"),Ux(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),Ux(1018," separator"),Ul(1019,"br"),ng()()(),wl(1020,"td",18)(1021,"code",41),Ux(1022,"boolean"),ng()(),wl(1023,"td",21)(1024,"em")(1025,"strong"),Ux(1026,"(opcional)"),ng()(),wl(1027,"p"),Ux(1028,"Atribui uma linha separadora acima do item."),ng()()(),wl(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),Ux(1033," subItems"),Ul(1034,"br"),ng()()(),wl(1035,"td",18)(1036,"code",44),Ux(1037,"Array<PoPopupAction>"),ng()(),wl(1038,"td",21)(1039,"em")(1040,"strong"),Ux(1041,"(opcional)"),ng()(),wl(1042,"p"),Ux(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(1044,"p"),Ux(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(1046,"blockquote")(1047,"p"),Ux(1048,"As propriedades "),wl(1049,"code"),Ux(1050,"disabled"),ng(),Ux(1051,", "),wl(1052,"code"),Ux(1053,"type"),ng(),Ux(1054," e "),wl(1055,"code"),Ux(1056,"visible"),ng(),Ux(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(1058,"blockquote")(1059,"p"),Ux(1060,"Quando "),wl(1061,"code"),Ux(1062,"url"),ng(),Ux(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(1064,"blockquote")(1065,"p"),Ux(1066,"Em subn\xEDveis aninhados, o "),wl(1067,"code"),Ux(1068,"icon"),ng(),Ux(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),Ux(1074," type"),Ul(1075,"br"),ng()()(),wl(1076,"td",18)(1077,"code",26),Ux(1078,"string"),ng()(),wl(1079,"td",21)(1080,"em")(1081,"strong"),Ux(1082,"(opcional)"),ng()(),wl(1083,"p"),Ux(1084,"Define a cor do item."),ng(),wl(1085,"p"),Ux(1086,"Valores v\xE1lidos:"),ng(),wl(1087,"ul")(1088,"li")(1089,"code"),Ux(1090,"default"),ng()(),wl(1091,"li")(1092,"code"),Ux(1093,"danger"),ng()()()()(),wl(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),Ux(1098," url"),Ul(1099,"br"),ng()()(),wl(1100,"td",18)(1101,"code",26),Ux(1102,"string"),ng()(),wl(1103,"td",21)(1104,"em")(1105,"strong"),Ux(1106,"(opcional)"),ng()(),wl(1107,"p"),Ux(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(1109,"p"),Ux(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(1111,"code"),Ux(1112,"url"),ng(),Ux(1113," \xE9 informada em um agrupador, o clique "),wl(1114,"strong"),Ux(1115,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(1117,"blockquote")(1118,"p"),Ux(1119,"Quando informada, tem prioridade sobre a propriedade "),wl(1120,"code"),Ux(1121,"action"),ng(),Ux(1122,"."),ng()()()(),wl(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),Ux(1127," visible"),Ul(1128,"br"),ng()()(),wl(1129,"td",18)(1130,"code",41),Ux(1131,"boolean "),ng(),wl(1132,"code",34),Ux(1133," Function"),ng()(),wl(1134,"td",21)(1135,"em")(1136,"strong"),Ux(1137,"(opcional)"),ng()(),wl(1138,"p"),Ux(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(1140,"h4",33)(1141,"code",5),Ux(1142,"PoPageDefaultLiterals"),ng()(),wl(1143,"div",2)(1144,"p"),Ux(1145,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1146,"code"),Ux(1147,"po-page-default"),ng(),Ux(1148,"."),ng()(),wl(1149,"h4",10),Ux(1150,"Propriedades"),ng(),wl(1151,"table",11)(1152,"tr",12)(1153,"th",13),Ux(1154,"Nome"),ng(),wl(1155,"th",13),Ux(1156,"Tipo"),ng(),wl(1157,"th",13),Ux(1158,"Descri\xE7\xE3o"),ng()(),wl(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),Ux(1163," otherActions"),Ul(1164,"br"),ng()()(),wl(1165,"td",18)(1166,"code",26),Ux(1167,"string"),ng()(),wl(1168,"td",21)(1169,"em")(1170,"strong"),Ux(1171,"(opcional)"),ng()(),wl(1172,"p"),Ux(1173,"Legenda do "),wl(1174,"code"),Ux(1175,"po-dropdown"),ng(),Ux(1176," de a\xE7\xF5es."),ng()()()(),wl(1177,"h3"),Ux(1178,"Enums"),ng(),wl(1179,"h4",4)(1180,"code",5),Ux(1181,"PoPageActionsLayout"),ng()(),wl(1182,"div",2)(1183,"p"),Ux(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),wl(1185,"code"),Ux(1186,"po-page-default"),ng(),Ux(1187,"."),ng(),wl(1188,"blockquote")(1189,"p"),Ux(1190,"Compat\xEDvel com todos os valores de "),wl(1191,"code"),Ux(1192,"PoPageHeaderType"),ng(),Ux(1193,"."),ng()()(),wl(1194,"h4",10),Ux(1195,"Propriedades"),ng(),wl(1196,"table",11)(1197,"tr",12)(1198,"th",13),Ux(1199,"Nome"),ng(),wl(1200,"th",13),Ux(1201,"Descri\xE7\xE3o"),ng()(),wl(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),Ux(1206," default"),Ul(1207,"br"),ng()()(),wl(1208,"td",21)(1209,"p"),Ux(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),wl(1211,"em"),Ux(1212,"dropdown"),ng(),Ux(1213,"."),ng(),wl(1214,"p"),Ux(1215,"Quando "),wl(1216,"code"),Ux(1217,"PoPageAction.kind"),ng(),Ux(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),wl(1219,"code"),Ux(1220,"primary"),ng(),Ux(1221,`
e as demais recebem `),wl(1222,"code"),Ux(1223,"secondary"),ng(),Ux(1224,"."),ng()()(),wl(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),Ux(1229," dropdown"),Ul(1230,"br"),ng()()(),wl(1231,"td",21)(1232,"p"),Ux(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),wl(1234,"em"),Ux(1235,"dropdown"),ng(),Ux(1236,"."),ng()()(),wl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Ux(1241," mixed"),Ul(1242,"br"),ng()()(),wl(1243,"td",21)(1244,"p"),Ux(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),wl(1246,"em"),Ux(1247,"dropdown"),ng(),Ux(1248,"."),ng()()()(),wl(1249,"h4",4)(1250,"code",5),Ux(1251,"PoPageHeaderType"),ng()(),wl(1252,"div",2)(1253,"p"),Ux(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),wl(1255,"code"),Ux(1256,"po-page-default"),ng(),Ux(1257,"."),ng()(),wl(1258,"h4",10),Ux(1259,"Propriedades"),ng(),wl(1260,"table",11)(1261,"tr",12)(1262,"th",13),Ux(1263,"Nome"),ng(),wl(1264,"th",13),Ux(1265,"Descri\xE7\xE3o"),ng()(),wl(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),Ux(1270," primary"),Ul(1271,"br"),ng()()(),wl(1272,"td",21)(1273,"p"),Ux(1274,"Layout padr\xE3o com suporte a "),wl(1275,"code"),Ux(1276,"p-breadcrumb"),ng(),Ux(1277,"."),ng()()(),wl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Ux(1282," secondary"),Ul(1283,"br"),ng()()(),wl(1284,"td",21)(1285,"p"),Ux(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),ng(),wl(1287,"blockquote")(1288,"p"),Ux(1289,"Incompat\xEDvel com "),wl(1290,"code"),Ux(1291,"p-breadcrumb"),ng(),Ux(1292,"."),ng()()()(),wl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Ux(1297," tertiary"),Ul(1298,"br"),ng()()(),wl(1299,"td",21)(1300,"p"),Ux(1301,"Layout simplificado sem bot\xE3o de retorno."),ng(),wl(1302,"blockquote")(1303,"p"),Ux(1304,"Incompat\xEDvel com "),wl(1305,"code"),Ux(1306,"p-breadcrumb"),ng(),Ux(1307,"."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return l})();var Te=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-page-default-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ye,we,_e,Me],encapsulation:2})}return l})();var Ke=[{path:"",component:Te}],Ae=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(Ke),vL]})}return l})();var Wt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[u5,Ae]})}return l})();export{Wt as DocPoPageDefaultModule};