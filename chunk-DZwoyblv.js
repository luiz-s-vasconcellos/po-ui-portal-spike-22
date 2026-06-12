import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,s,r as r$1,S,a3 as SNe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,bF as mc,b3 as q3,cc as Nde,aJ as nme,b9 as ONe,aB as gx,aM as gw,aN as Z0,aq as ix,bc as Sx,a7 as iN,aO as pw,aP as X0,at as ox,cE as Uz,b5 as Ko,b6 as U3,W as we$1,av as zl,aw as uo,ax as fo,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&Hl(0,"po-page-default",0);},dependencies:[SNe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Default Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-default-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return l})();var Fe=()=>({});function Be(l,Me){if(l&1){let d=gx();Cl(0,"po-input",36),gw("ngModelChange",function(i){Jy(d);let m=Ex(2);return Zx(m.helperFooterLabel,i)||(m.helperFooterLabel=i),e_(i)}),og(),Z0();}if(l&2){let d=Ex(2);pw("ngModel",d.helperFooterLabel),X0();}}function Oe(l,Me){if(l&1){let d=gx();Cl(0,"po-widget",10)(1,"div",6)(2,"po-input",32),gw("ngModelChange",function(i){Jy(d);let m=Ex();return Zx(m.helperTitle,i)||(m.helperTitle=i),e_(i)}),og(),Z0(),Cl(3,"po-input",33),gw("ngModelChange",function(i){Jy(d);let m=Ex();return Zx(m.helperContent,i)||(m.helperContent=i),e_(i)}),og(),Z0(),og(),Cl(4,"div",6)(5,"po-radio-group",34),dt("ngModelChange",function(i){Jy(d);let m=Ex();return e_(m.helperType=i)}),og(),Z0(),og(),Cl(6,"div",6),ix(7,Be,1,1,"po-input",35),og()();}if(l&2){let d=Ex();Lp(2),pw("ngModel",d.helperTitle),X0(),Lp(),pw("ngModel",d.helperContent),X0(),Lp(2),ZE("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),X0(),Lp(2),ox(d.helperType==="help"?7:-1);}}var ve=(()=>{class l{poNotification=f(Xp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=gx();Cl(0,"po-page-default",5),dt("p-back",function(){return i.onBack()}),og(),Hl(1,"po-divider"),Cl(2,"form",null,0)(4,"div",6)(5,"po-input",7),gw("ngModelChange",function(o){return Jy(m),Zx(i.title,o)||(i.title=o),e_(o)}),og(),Z0(),Cl(6,"po-input",8),gw("ngModelChange",function(o){return Jy(m),Zx(i.subtitle,o)||(i.subtitle=o),e_(o)}),og(),Z0(),Cl(7,"po-checkbox",9),gw("ngModelChange",function(o){return Jy(m),Zx(i.showHelper,o)||(i.showHelper=o),e_(o)}),og(),Z0(),ix(8,Oe,8,6,"po-widget",10),Cl(9,"po-select",11),dt("ngModelChange",function(o){return i.pageHeaderType=o}),og(),Z0(),Cl(10,"po-select",12),dt("ngModelChange",function(o){return i.pageActionsLayout=o}),og(),Z0(),Cl(11,"po-input",13),gw("ngModelChange",function(o){return Jy(m),Zx(i.literals,o)||(i.literals=o),e_(o)}),dt("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(12,"po-radio-group",14),gw("ngModelChange",function(o){return Jy(m),Zx(i.componentsSize,o)||(i.componentsSize=o),e_(o)}),og(),Z0(),og()(),Hl(13,"po-divider"),Cl(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),gw("ngModelChange",function(o){return Jy(m),Zx(i.action.label,o)||(i.action.label=o),e_(o)}),og(),Z0(),Cl(19,"po-input",17),gw("ngModelChange",function(o){return Jy(m),Zx(i.action.action,o)||(i.action.action=o),e_(o)}),og(),Z0(),Cl(20,"po-input",18),gw("ngModelChange",function(o){return Jy(m),Zx(i.action.url,o)||(i.action.url=o),e_(o)}),og(),Z0(),Cl(21,"po-select",19),dt("ngModelChange",function(o){return i.action.type=o}),og(),Z0(),Cl(22,"po-select",20),dt("ngModelChange",function(o){return i.action.icon=o}),og(),Z0(),Cl(23,"po-select",21),dt("ngModelChange",function(o){return i.action.kind=o}),og(),Z0(),Cl(24,"po-checkbox-group",22),dt("ngModelChange",function(o){return i.action=o}),og(),Z0(),og(),Cl(25,"div",6)(26,"po-button",23),dt("p-click",function(){return i.addAction(i.action)}),og()()()(),Hl(27,"po-divider"),Cl(28,"form",null,2)(30,"div",6)(31,"po-input",24),gw("ngModelChange",function(o){return Jy(m),Zx(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),e_(o)}),og(),Z0(),og()(),Cl(32,"form",null,3)(34,"div",6)(35,"po-input",25),gw("ngModelChange",function(o){return Jy(m),Zx(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),e_(o)}),og(),Z0(),Cl(36,"po-input",26),gw("ngModelChange",function(o){return Jy(m),Zx(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),e_(o)}),og(),Z0(),og(),Cl(37,"div",6)(38,"po-button",27),dt("p-click",function(){return i.addBreadcrumbItem()}),og()()(),Hl(39,"po-divider"),Cl(40,"form",null,4)(42,"div",6)(43,"po-input",28),gw("ngModelChange",function(o){return Jy(m),Zx(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),e_(o)}),og(),Z0(),Cl(44,"po-input",29),gw("ngModelChange",function(o){return Jy(m),Zx(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),e_(o)}),og(),Z0(),og(),Cl(45,"div",6)(46,"po-button",30),dt("p-click",function(){return i.addBreadcrumbParam()}),og()()(),Hl(47,"po-divider"),Cl(48,"div",6)(49,"po-button",31),dt("p-click",function(){return i.restore()}),og()();}if(r&2){let m=Sx(16),s=Sx(33),o=Sx(41);ZE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??iN(42,Fe))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Lp(5),pw("ngModel",i.title),X0(),Lp(),pw("ngModel",i.subtitle),X0(),Lp(),pw("ngModel",i.showHelper),X0(),Lp(),ox(i.showHelper?8:-1),Lp(),ZE("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),X0(),Lp(),ZE("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),X0(),Lp(),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.componentsSize),ZE("p-columns",4)("p-options",i.componentsSizeOptions),X0(),Lp(6),pw("ngModel",i.action.label),X0(),Lp(),pw("ngModel",i.action.action),X0(),Lp(),pw("ngModel",i.action.url),X0(),Lp(),ZE("ngModel",i.action.type)("p-options",i.typeOptions),X0(),Lp(),ZE("ngModel",i.action.icon)("p-options",i.iconOptions),X0(),Lp(),ZE("ngModel",i.action.kind)("p-options",i.actionKindOptions),X0(),Lp(),ZE("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),X0(),Lp(2),ZE("p-disabled",m.form.invalid),Lp(5),pw("ngModel",i.breadcrumb.favorite),X0(),Lp(4),pw("ngModel",i.breadcrumbItem.label),X0(),Lp(),pw("ngModel",i.breadcrumbItem.link),X0(),Lp(2),ZE("p-disabled",s.invalid??false),Lp(5),pw("ngModel",i.breadcrumbParams.property),X0(),Lp(),pw("ngModel",i.breadcrumbParams.value),X0(),Lp(2),ZE("p-disabled",o.invalid??false);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,mc,q3,Nde,nme,SNe,ONe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Default Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-default-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,qe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ve],encapsulation:2})}return l})();var ee=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=S({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ve=["formShare"],ye=(()=>{class l{poNotification=f(Xp);sampleDashboardService=f(ee);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&zl(Ve,7)(Ko,7),r&2){let m;uo(m=fo())&&(i.formShare=m.first),uo(m=fo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([ee])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=gx();Cl(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),qx(4,"540"),og(),Cl(5,"div",5),qx(6,"www.po.com.br"),og()(),Cl(7,"po-widget",6)(8,"div",4),qx(9,"300 views"),og(),Cl(10,"div",5),qx(11,"https://po-ui.io"),og()(),Cl(12,"po-widget",7)(13,"div",4),qx(14,"Online"),og(),Cl(15,"div",5),qx(16,"28 days"),og()(),Cl(17,"po-widget",8)(18,"div",4),qx(19,"266"),og(),Cl(20,"div",5),qx(21,"@po-ui/ng-components - 1.10.1"),og()(),Cl(22,"po-widget",9)(23,"div",4),qx(24,"800 questions"),og(),Cl(25,"div",5),qx(26,"https://devforum.po.com.br"),og()(),Cl(27,"po-widget",10)(28,"div",4),qx(29,"AngularJS - Angular 6"),og(),Cl(30,"div",5),qx(31,"Angular 6 most downloaded"),og()()(),Hl(32,"po-divider")(33,"po-table",11),og(),Cl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),gw("ngModelChange",function(o){return Jy(m),Zx(i.email,o)||(i.email=o),e_(o)}),og(),Z0(),og()();}r&2&&(ZE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Lp(33),ZE("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),ZE("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),pw("ngModel",i.email),X0());},dependencies:[lY,sY,aY,gk,fk,_v,Uz,Ko,SNe,U3,ONe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Default - Dashboard"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),og(),Cl(29,"pre",11),qx(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-page-default-dashboard"),og(),Hl(33,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ye],encapsulation:2})}return l})();var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Cl(7,"code"),qx(8,"po-page-default"),og(),qx(9,", "),Cl(10,"code"),qx(11,"po-page-detail"),og(),qx(12,`,
`),Cl(13,"code"),qx(14,"po-page-edit"),og(),qx(15,", "),Cl(16,"code"),qx(17,"po-page-list"),og(),qx(18," e "),Cl(19,"code"),qx(20,"po-page-slide"),og(),qx(21,"."),og()(),Cl(22,"h3",3),qx(23,"Componente"),og(),Cl(24,"h4",4)(25,"code",5),qx(26,"PoPageDefaultComponent"),og()(),Cl(27,"div",2)(28,"p"),qx(29,"O "),Cl(30,"code"),qx(31,"po-page-default"),og(),qx(32," \xE9 utilizado como container principal para telas sem um template definido."),og(),Cl(33,"p"),qx(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),Cl(35,"code"),qx(36,"p-page-header-type"),og(),qx(37,", navega\xE7\xE3o por "),Cl(38,"em"),qx(39,"breadcrumb"),og(),qx(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Cl(41,"code"),qx(42,"p-page-actions-layout"),og(),qx(43,"."),og(),Cl(44,"h4"),qx(45,"Tokens customiz\xE1veis"),og(),Cl(46,"blockquote")(47,"p"),qx(48,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(49,"a",6),qx(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(51,"."),og()(),Cl(52,"table")(53,"thead")(54,"tr")(55,"th"),qx(56,"Propriedade"),og(),Cl(57,"th"),qx(58,"Descri\xE7\xE3o"),og(),Cl(59,"th"),qx(60,"Valor Padr\xE3o"),og()()(),Cl(61,"tbody")(62,"tr")(63,"td")(64,"strong"),qx(65,"P\xE1gina (po-page-default)"),og()(),Hl(66,"td")(67,"td"),og(),Cl(68,"tr")(69,"td")(70,"code"),qx(71,"--background"),og()(),Cl(72,"td"),qx(73,"Background da p\xE1gina (header e body)"),og(),Cl(74,"td")(75,"code"),qx(76,"var(--color-page-background-color-page)"),og()()(),Cl(77,"tr")(78,"td")(79,"strong"),qx(80,"Header (po-page-header)"),og()(),Hl(81,"td")(82,"td"),og(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--padding"),og()(),Cl(87,"td"),qx(88,"Espa\xE7amento do header"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--spacing-xs) var(--spacing-md)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--gap"),og()(),Cl(96,"td"),qx(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--spacing-md)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--gap-actions"),og()(),Cl(105,"td"),qx(106,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--spacing-xs)"),og()()(),Cl(110,"tr")(111,"td")(112,"strong"),qx(113,"Header (po-page-header .po-page-header-title)"),og()(),Hl(114,"td")(115,"td"),og(),Cl(116,"tr")(117,"td")(118,"code"),qx(119,"--font-family"),og()(),Cl(120,"td"),qx(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Cl(122,"td")(123,"code"),qx(124,"var(--font-family-theme)"),og()()(),Cl(125,"tr")(126,"td")(127,"strong"),qx(128,"Content (po-page-content)"),og()(),Hl(129,"td")(130,"td"),og(),Cl(131,"tr")(132,"td")(133,"code"),qx(134,"--padding-content"),og()(),Cl(135,"td"),qx(136,"Espa\xE7amento do conte\xFAdo"),og(),Cl(137,"td")(138,"code"),qx(139,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Cl(140,"div",7)(141,"h4",8),qx(142,"Seletor"),og(),Cl(143,"pre",9),qx(144,`<po-page-default
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
`),og()(),Cl(145,"h4",10),qx(146,"Propriedades"),og(),Cl(147,"table",11)(148,"tr",12)(149,"th",13),qx(150,"Nome"),og(),Cl(151,"th",13),qx(152,"Tipo"),og(),Cl(153,"th",13),qx(154,"Padr\xE3o"),og(),Cl(155,"th",13),qx(156,"Descri\xE7\xE3o"),og()(),Cl(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),qx(161," p-actions"),Hl(162,"br"),og()()(),Cl(163,"td",18)(164,"code",19),qx(165,"Array<PoPageAction>"),og()(),Cl(166,"td",20)(167,"p")(168,"code"),qx(169,"[]"),og()()(),Cl(170,"td",21)(171,"em")(172,"strong"),qx(173,"(opcional)"),og()(),Cl(174,"p"),qx(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),og(),Cl(176,"p"),qx(177,"Recebe um array de objetos que implementam a interface "),Cl(178,"code"),qx(179,"PoPageAction"),og(),qx(180,"."),og(),Cl(181,"blockquote")(182,"p"),qx(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),Cl(184,"code"),qx(185,"p-page-actions-layout"),og(),qx(186,"."),og()()()(),Cl(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),qx(191," (p-back)"),Hl(192,"br"),og()()(),Cl(193,"td",18)(194,"code",24),qx(195,"EventEmitter"),og()(),Cl(196,"td",20),qx(197,"-"),og(),Cl(198,"td",21)(199,"em")(200,"strong"),qx(201,"(opcional)"),og()(),Cl(202,"p"),qx(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),og(),Cl(204,"blockquote")(205,"p"),qx(206,"Bot\xE3o exibido apenas quando a propriedade "),Cl(207,"code"),qx(208,"p-page-header-type"),og(),qx(209," est\xE1 configurada como "),Cl(210,"code"),qx(211,"secondary"),og(),qx(212,"."),og()()()(),Cl(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),qx(217," p-breadcrumb"),Hl(218,"br"),og()()(),Cl(219,"td",18)(220,"code",25),qx(221,"PoBreadcrumb"),og()(),Cl(222,"td",20),qx(223,"-"),og(),Cl(224,"td",21)(225,"em")(226,"strong"),qx(227,"(opcional)"),og()(),Cl(228,"p"),qx(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),og(),Cl(230,"p"),qx(231,"Recebe um objeto que implementa a interface "),Cl(232,"code"),qx(233,"PoBreadcrumb"),og(),qx(234,"."),og(),Cl(235,"blockquote")(236,"p"),qx(237,"Compat\xEDvel com o cabe\xE7alho ("),Cl(238,"code"),qx(239,"p-page-header-type"),og(),qx(240,") do tipo "),Cl(241,"code"),qx(242,"primary"),og(),qx(243,"."),og()()()(),Cl(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),qx(248," p-components-size"),Hl(249,"br"),og()()(),Cl(250,"td",18)(251,"code",26),qx(252,"string"),og()(),Cl(253,"td",20)(254,"p")(255,"code"),qx(256,"medium"),og()()(),Cl(257,"td",21)(258,"em")(259,"strong"),qx(260,"(opcional)"),og()(),Cl(261,"p"),qx(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(263,"ul")(264,"li")(265,"code"),qx(266,"small"),og(),qx(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(268,"li")(269,"code"),qx(270,"medium"),og(),qx(271,": aplica a medida medium de cada componente."),og()(),Cl(272,"blockquote")(273,"p"),qx(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(275,"code"),qx(276,"medium"),og(),qx(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(278,"a",27),qx(279,"po-theme"),og(),qx(280,"."),og()()()(),Cl(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),qx(285," p-helper"),Hl(286,"br"),og()()(),Cl(287,"td",18)(288,"code",28),qx(289,"PoHelperOptions "),og(),Cl(290,"code",26),qx(291," string"),og()(),Cl(292,"td",20)(293,"p")(294,"code"),qx(295,"info"),og()()(),Cl(296,"td",21)(297,"em")(298,"strong"),qx(299,"(opcional)"),og()(),Cl(300,"p"),qx(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),og(),Cl(302,"p"),qx(303,"Quando n\xE3o houver subt\xEDtulo ("),Cl(304,"code"),qx(305,"p-subtitle"),og(),qx(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),og(),Cl(307,"p"),qx(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Cl(309,"code"),qx(310,"PoHelperOptions"),og(),qx(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),og(),Cl(312,"p"),qx(313,"Exemplo de uso:"),og(),Cl(314,"pre")(315,"code",29),qx(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),og()()()(),Cl(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),qx(321," p-literals"),Hl(322,"br"),og()()(),Cl(323,"td",18)(324,"code",30),qx(325,"PoPageDefaultLiterals"),og()(),Cl(326,"td",20),qx(327,"-"),og(),Cl(328,"td",21)(329,"em")(330,"strong"),qx(331,"(opcional)"),og()(),Cl(332,"p"),qx(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),og(),Cl(334,"p"),qx(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),Cl(336,"code"),qx(337,"PoPageDefaultLiterals"),og(),qx(338,"."),og(),Cl(339,"p"),qx(340,"Exemplo de uso:"),og(),Cl(341,"pre")(342,"code",29),qx(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),og()(),Cl(344,"pre")(345,"code",31),qx(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),og()(),Cl(347,"blockquote")(348,"p"),qx(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Cl(350,"a",32)(351,"code"),qx(352,"PoI18nService"),og()(),qx(353," ou navegador."),og()()()(),Cl(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),qx(358," p-page-actions-layout"),Hl(359,"br"),og()()(),Cl(360,"td",18)(361,"code",26),qx(362,"string"),og()(),Cl(363,"td",20)(364,"p")(365,"code"),qx(366,"default"),og()()(),Cl(367,"td",21)(368,"em")(369,"strong"),qx(370,"(opcional)"),og()(),Cl(371,"p"),qx(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),og(),Cl(373,"p"),qx(374,"Aceita valores do enum "),Cl(375,"code"),qx(376,"PoPageActionsLayout"),og(),qx(377,"."),og(),Cl(378,"blockquote")(379,"p"),qx(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),Cl(381,"em"),qx(382,"dropdown"),og(),qx(383," que possuam a propriedade "),Cl(384,"code"),qx(385,"PoPageAction.icon"),og(),qx(386,` definida
exibir\xE3o apenas o \xEDcone.`),og()()()(),Cl(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),qx(391," p-page-header-type"),Hl(392,"br"),og()()(),Cl(393,"td",18)(394,"code",26),qx(395,"string"),og()(),Cl(396,"td",20)(397,"p")(398,"code"),qx(399,"primary"),og()()(),Cl(400,"td",21)(401,"em")(402,"strong"),qx(403,"(opcional)"),og()(),Cl(404,"p"),qx(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),og(),Cl(406,"p"),qx(407,"Aceita valores do enum "),Cl(408,"code"),qx(409,"PoPageHeaderType"),og(),qx(410,"."),og()()(),Cl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),qx(415," p-subtitle"),Hl(416,"br"),og()()(),Cl(417,"td",18)(418,"code",26),qx(419,"string"),og()(),Cl(420,"td",20),qx(421,"-"),og(),Cl(422,"td",21)(423,"em")(424,"strong"),qx(425,"(opcional)"),og()(),Cl(426,"p"),qx(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),og(),Cl(428,"p"),qx(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Cl(430,"code"),qx(431,"<b>"),og(),qx(432," (negrito), "),Cl(433,"code"),qx(434,"<strong>"),og(),qx(435," (negrito), "),Cl(436,"code"),qx(437,"<i>"),og(),qx(438," (it\xE1lico), "),Cl(439,"code"),qx(440,"<em>"),og(),qx(441,` (it\xE1lico) e
`),Cl(442,"code"),qx(443,"<u>"),og(),qx(444," (sublinhado)."),og(),Cl(445,"p"),qx(446,"Exemplo:"),og(),Cl(447,"pre")(448,"code",31),qx(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),og()(),Cl(450,"blockquote")(451,"p"),qx(452,"Requer que "),Cl(453,"code"),qx(454,"p-title"),og(),qx(455," esteja definido."),og()()()(),Cl(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),qx(460," p-title"),Hl(461,"br"),og()()(),Cl(462,"td",18)(463,"code",26),qx(464,"string"),og()(),Cl(465,"td",20),qx(466,"-"),og(),Cl(467,"td",21)(468,"em")(469,"strong"),qx(470,"(opcional)"),og()(),Cl(471,"p"),qx(472,"Define o t\xEDtulo principal da p\xE1gina."),og()()()(),Cl(473,"h3"),qx(474,"Interfaces"),og(),Cl(475,"h4",33)(476,"code",5),qx(477,"PoBreadcrumbItem"),og()(),Cl(478,"div",2)(479,"p"),qx(480,"Interface que define cada item do componente "),Cl(481,"strong"),qx(482,"po-breadcrumb"),og(),qx(483,"."),og()(),Cl(484,"h4",10),qx(485,"Propriedades"),og(),Cl(486,"table",11)(487,"tr",12)(488,"th",13),qx(489,"Nome"),og(),Cl(490,"th",13),qx(491,"Tipo"),og(),Cl(492,"th",13),qx(493,"Descri\xE7\xE3o"),og()(),Cl(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),qx(498," action"),Hl(499,"br"),og()()(),Cl(500,"td",18)(501,"code",34),qx(502,"Function"),og()(),Cl(503,"td",21)(504,"em")(505,"strong"),qx(506,"(opcional)"),og()(),Cl(507,"p"),qx(508,"A\xE7\xE3o executada ao clicar no item."),og(),Cl(509,"blockquote")(510,"p"),qx(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Cl(512,"em"),qx(513,"label"),og(),qx(514," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Cl(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),qx(519," label"),Hl(520,"br"),og()()(),Cl(521,"td",18)(522,"code",26),qx(523,"string"),og()(),Cl(524,"td",21)(525,"p"),qx(526,"R\xF3tulo do item."),og()()(),Cl(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),qx(531," link"),Hl(532,"br"),og()()(),Cl(533,"td",18)(534,"code",26),qx(535,"string"),og()(),Cl(536,"td",21)(537,"em")(538,"strong"),qx(539,"(opcional)"),og()(),Cl(540,"p"),qx(541,"Url do item."),og(),Cl(542,"blockquote")(543,"p"),qx(544,"Caso o item tamb\xE9m contenha uma "),Cl(545,"em"),qx(546,"action"),og(),qx(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Cl(548,"em"),qx(549,"link"),og(),qx(550,"."),og()(),Cl(551,"blockquote")(552,"p"),qx(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Cl(554,"strong")(555,"a",35),qx(556,"Veja um exemplo de como criar rotas aqui"),og()(),qx(557,"."),og()(),Cl(558,"blockquote")(559,"p"),qx(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Cl(561,"code"),qx(562,"p-favorite-service"),og(),qx(563," consiga favoritar ou desfavoritar."),og()()()()(),Cl(564,"h4",33)(565,"code",5),qx(566,"PoBreadcrumb"),og()(),Cl(567,"div",2)(568,"p"),qx(569,"Interface que define o "),Cl(570,"code"),qx(571,"po-breadcrumb"),og(),qx(572,"."),og()(),Cl(573,"h4",10),qx(574,"Propriedades"),og(),Cl(575,"table",11)(576,"tr",12)(577,"th",13),qx(578,"Nome"),og(),Cl(579,"th",13),qx(580,"Tipo"),og(),Cl(581,"th",13),qx(582,"Descri\xE7\xE3o"),og()(),Cl(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),qx(587," favorite"),Hl(588,"br"),og()()(),Cl(589,"td",18)(590,"code",26),qx(591,"string"),og()(),Cl(592,"td",21)(593,"em")(594,"strong"),qx(595,"(opcional)"),og()(),Cl(596,"p"),qx(597,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Cl(598,"blockquote")(599,"p"),qx(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),Cl(601,"code"),qx(602,"p-favorite-service"),og(),qx(603," do componente "),Cl(604,"code"),qx(605,"po-breadcrumb"),og(),qx(606,"."),og()()()(),Cl(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),qx(611," items"),Hl(612,"br"),og()()(),Cl(613,"td",18)(614,"code",36),qx(615,"Array<PoBreadcrumbItem>"),og()(),Cl(616,"td",21)(617,"p"),qx(618,"Lista de itens do "),Cl(619,"em"),qx(620,"breadcrumb"),og(),qx(621,"."),og(),Cl(622,"p")(623,"strong"),qx(624,"Exemplo:"),og()(),Cl(625,"pre")(626,"code"),qx(627,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Cl(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),qx(632," params"),Hl(633,"br"),og()()(),Cl(634,"td",18)(635,"code",37),qx(636,"object"),og()(),Cl(637,"td",21)(638,"em")(639,"strong"),qx(640,"(opcional)"),og()(),Cl(641,"p"),qx(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Cl(643,"h4",33)(644,"code",5),qx(645,"PoHelperOptions"),og()(),Cl(646,"div",2)(647,"p"),qx(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Cl(649,"em"),qx(650,"helper"),og(),qx(651,")."),og()(),Cl(652,"h4",10),qx(653,"Propriedades"),og(),Cl(654,"table",11)(655,"tr",12)(656,"th",13),qx(657,"Nome"),og(),Cl(658,"th",13),qx(659,"Tipo"),og(),Cl(660,"th",13),qx(661,"Descri\xE7\xE3o"),og()(),Cl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),qx(666," content"),Hl(667,"br"),og()()(),Cl(668,"td",18)(669,"code",26),qx(670,"string"),og()(),Cl(671,"td",21)(672,"em")(673,"strong"),qx(674,"(opcional)"),og()(),Cl(675,"p"),qx(676,"Texto explicativo exibido no popover."),og(),Cl(677,"p"),qx(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Cl(679,"code"),qx(680,"<b>"),og(),qx(681," (negrito), "),Cl(682,"code"),qx(683,"<strong>"),og(),qx(684," (negrito), "),Cl(685,"code"),qx(686,"<i>"),og(),qx(687," (it\xE1lico), "),Cl(688,"code"),qx(689,"<em>"),og(),qx(690,` (it\xE1lico) e
`),Cl(691,"code"),qx(692,"<u>"),og(),qx(693," (sublinhado)."),og(),Cl(694,"p"),qx(695,"Exemplo:"),og(),Cl(696,"pre")(697,"code",31),qx(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Cl(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),qx(703," eventOnClick"),Hl(704,"br"),og()()(),Cl(705,"td",18)(706,"code",34),qx(707,"Function"),og()(),Cl(708,"td",21)(709,"em")(710,"strong"),qx(711,"(opcional)"),og()(),Cl(712,"p"),qx(713,"Evento disparado ao clicar no \xEDcone do helper."),og(),Cl(714,"p"),qx(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Cl(716,"p"),qx(717,"Pode ser uma fun\xE7\xE3o ou um "),Cl(718,"code"),qx(719,"EventEmitter"),og(),qx(720,"."),og(),Cl(721,"p"),qx(722,"Exemplo:"),og(),Cl(723,"pre")(724,"code"),qx(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Cl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),qx(730," footerAction"),Hl(731,"br"),og()()(),Cl(732,"td",18)(733,"code",38),qx(734,`{ label: string; action: Function;
}`),og()(),Cl(735,"td",21)(736,"em")(737,"strong"),qx(738,"(opcional)"),og()(),Cl(739,"p"),qx(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Cl(741,"code"),qx(742,"help"),og(),qx(743," e desconsiderada quando o type for "),Cl(744,"code"),qx(745,"info"),og(),qx(746,"."),og(),Cl(747,"p"),qx(748,"Deve ser um objeto com as propriedades:"),og(),Cl(749,"ul")(750,"li")(751,"code"),qx(752,"label"),og(),qx(753,": Texto do bot\xE3o."),og(),Cl(754,"li")(755,"code"),qx(756,"action"),og(),qx(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Cl(758,"p"),qx(759,"Exemplo:"),og(),Cl(760,"pre")(761,"code",31),qx(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Cl(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),qx(767," title"),Hl(768,"br"),og()()(),Cl(769,"td",18)(770,"code",26),qx(771,"string"),og()(),Cl(772,"td",21)(773,"em")(774,"strong"),qx(775,"(opcional)"),og()(),Cl(776,"p"),qx(777,"T\xEDtulo do helper exibido no popover."),og()()(),Cl(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),qx(782," type"),Hl(783,"br"),og()()(),Cl(784,"td",18)(785,"code",39),qx(786,"'info' "),og(),Cl(787,"code",40),qx(788," 'help'"),og()(),Cl(789,"td",21)(790,"em")(791,"strong"),qx(792,"(opcional)"),og()(),Cl(793,"p"),qx(794,"Tipo do \xEDcone exibido: "),Cl(795,"code"),qx(796,"info"),og(),qx(797," ou "),Cl(798,"code"),qx(799,"help"),og(),qx(800,"."),og(),Cl(801,"p"),qx(802,"Quando o valor \xE9 "),Cl(803,"code"),qx(804,"info"),og(),qx(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Cl(806,"p"),qx(807,"Quando o valor \xE9 "),Cl(808,"code"),qx(809,"help"),og(),qx(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()(),Cl(811,"h4",33)(812,"code",5),qx(813,"PoPageAction"),og()(),Cl(814,"div",2)(815,"p"),qx(816,"Interface para as a\xE7\xF5es dos componentes "),Cl(817,"code"),qx(818,"po-page-default"),og(),qx(819," e "),Cl(820,"code"),qx(821,"po-page-list"),og(),qx(822,"."),og(),Cl(823,"p"),qx(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Cl(825,"em"),qx(826,"dropdown"),og(),qx(827,`,
conforme o `),Cl(828,"code"),qx(829,"PoPageActionsLayout"),og(),qx(830," e o tamanho da tela."),og(),Cl(831,"blockquote")(832,"p"),qx(833,"As propriedades "),Cl(834,"code"),qx(835,"separator"),og(),qx(836,", "),Cl(837,"code"),qx(838,"selected"),og(),qx(839," e "),Cl(840,"code"),qx(841,"subItems"),og(),qx(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Cl(843,"em"),qx(844,"dropdown"),og(),qx(845,"."),og()()(),Cl(846,"h4",10),qx(847,"Propriedades"),og(),Cl(848,"table",11)(849,"tr",12)(850,"th",13),qx(851,"Nome"),og(),Cl(852,"th",13),qx(853,"Tipo"),og(),Cl(854,"th",13),qx(855,"Descri\xE7\xE3o"),og()(),Cl(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),qx(860," action"),Hl(861,"br"),og()()(),Cl(862,"td",18)(863,"code",34),qx(864,"Function"),og()(),Cl(865,"td",21)(866,"em")(867,"strong"),qx(868,"(opcional)"),og()(),Cl(869,"p"),qx(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(871,"p"),qx(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(873,"code"),qx(874,"subItems"),og(),qx(875,"."),og(),Cl(876,"blockquote")(877,"p"),qx(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(879,"em"),qx(880,"bind"),og(),qx(881,`:
`),Cl(882,"code"),qx(883,"action: this.myFunction.bind(this)"),og()()()()(),Cl(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),qx(888," disabled"),Hl(889,"br"),og()()(),Cl(890,"td",18)(891,"code",41),qx(892,"boolean "),og(),Cl(893,"code",34),qx(894," Function"),og()(),Cl(895,"td",21)(896,"em")(897,"strong"),qx(898,"(opcional)"),og()(),Cl(899,"p"),qx(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),qx(905," icon"),Hl(906,"br"),og()()(),Cl(907,"td",18)(908,"code",26),qx(909,"string "),og(),Cl(910,"code",42),qx(911," TemplateRef<void>"),og()(),Cl(912,"td",21)(913,"em")(914,"strong"),qx(915,"(opcional)"),og()(),Cl(916,"p"),qx(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(918,"p"),qx(919,"Aceita \xEDcones da "),Cl(920,"a",43),qx(921,"Biblioteca de \xEDcones"),og(),qx(922,`, fontes externas (ex: Font Awesome)
ou um `),Cl(923,"code"),qx(924,"TemplateRef"),og(),qx(925," para \xEDcones customizados."),og(),Cl(926,"pre")(927,"code"),qx(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),qx(933," kind"),Hl(934,"br"),og()()(),Cl(935,"td",18)(936,"code",26),qx(937,"string"),og()(),Cl(938,"td",21)(939,"em")(940,"strong"),qx(941,"(opcional)"),og()(),Cl(942,"p"),qx(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Cl(944,"em"),qx(945,"dropdown"),og(),qx(946,"."),og(),Cl(947,"p"),qx(948,"Valores permitidos:"),og(),Cl(949,"ul")(950,"li")(951,"code"),qx(952,"primary"),og(),qx(953,": bot\xE3o com maior destaque visual."),og(),Cl(954,"li")(955,"code"),qx(956,"secondary"),og(),qx(957,": estilo padr\xE3o."),og()(),Cl(958,"blockquote")(959,"p"),qx(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Cl(961,"blockquote")(962,"p"),qx(963,"Somente uma a\xE7\xE3o pode ter "),Cl(964,"code"),qx(965,"kind"),og(),qx(966," igual a "),Cl(967,"code"),qx(968,"primary"),og(),qx(969,". Caso mais de uma defina "),Cl(970,"code"),qx(971,"primary"),og(),qx(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Cl(973,"code"),qx(974,"secondary"),og(),qx(975,"."),og()(),Cl(976,"blockquote")(977,"p"),qx(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Cl(979,"code"),qx(980,"PoPageActionsLayout"),og(),qx(981,"."),og()()()(),Cl(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),qx(986," label"),Hl(987,"br"),og()()(),Cl(988,"td",18)(989,"code",26),qx(990,"string"),og()(),Cl(991,"td",21)(992,"p"),qx(993,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(994,"p"),qx(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(996,"code"),qx(997,"subItems"),og(),qx(998,"."),og()()(),Cl(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),qx(1003," selected"),Hl(1004,"br"),og()()(),Cl(1005,"td",18)(1006,"code",41),qx(1007,"boolean"),og()(),Cl(1008,"td",21)(1009,"em")(1010,"strong"),qx(1011,"(opcional)"),og()(),Cl(1012,"p"),qx(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),qx(1018," separator"),Hl(1019,"br"),og()()(),Cl(1020,"td",18)(1021,"code",41),qx(1022,"boolean"),og()(),Cl(1023,"td",21)(1024,"em")(1025,"strong"),qx(1026,"(opcional)"),og()(),Cl(1027,"p"),qx(1028,"Atribui uma linha separadora acima do item."),og()()(),Cl(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),qx(1033," subItems"),Hl(1034,"br"),og()()(),Cl(1035,"td",18)(1036,"code",44),qx(1037,"Array<PoPopupAction>"),og()(),Cl(1038,"td",21)(1039,"em")(1040,"strong"),qx(1041,"(opcional)"),og()(),Cl(1042,"p"),qx(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(1044,"p"),qx(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(1046,"blockquote")(1047,"p"),qx(1048,"As propriedades "),Cl(1049,"code"),qx(1050,"disabled"),og(),qx(1051,", "),Cl(1052,"code"),qx(1053,"type"),og(),qx(1054," e "),Cl(1055,"code"),qx(1056,"visible"),og(),qx(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(1058,"blockquote")(1059,"p"),qx(1060,"Quando "),Cl(1061,"code"),qx(1062,"url"),og(),qx(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(1064,"blockquote")(1065,"p"),qx(1066,"Em subn\xEDveis aninhados, o "),Cl(1067,"code"),qx(1068,"icon"),og(),qx(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),qx(1074," type"),Hl(1075,"br"),og()()(),Cl(1076,"td",18)(1077,"code",26),qx(1078,"string"),og()(),Cl(1079,"td",21)(1080,"em")(1081,"strong"),qx(1082,"(opcional)"),og()(),Cl(1083,"p"),qx(1084,"Define a cor do item."),og(),Cl(1085,"p"),qx(1086,"Valores v\xE1lidos:"),og(),Cl(1087,"ul")(1088,"li")(1089,"code"),qx(1090,"default"),og()(),Cl(1091,"li")(1092,"code"),qx(1093,"danger"),og()()()()(),Cl(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),qx(1098," url"),Hl(1099,"br"),og()()(),Cl(1100,"td",18)(1101,"code",26),qx(1102,"string"),og()(),Cl(1103,"td",21)(1104,"em")(1105,"strong"),qx(1106,"(opcional)"),og()(),Cl(1107,"p"),qx(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(1109,"p"),qx(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(1111,"code"),qx(1112,"url"),og(),qx(1113," \xE9 informada em um agrupador, o clique "),Cl(1114,"strong"),qx(1115,"n\xE3o abrir\xE1 os subitens"),og(),qx(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(1117,"blockquote")(1118,"p"),qx(1119,"Quando informada, tem prioridade sobre a propriedade "),Cl(1120,"code"),qx(1121,"action"),og(),qx(1122,"."),og()()()(),Cl(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),qx(1127," visible"),Hl(1128,"br"),og()()(),Cl(1129,"td",18)(1130,"code",41),qx(1131,"boolean "),og(),Cl(1132,"code",34),qx(1133," Function"),og()(),Cl(1134,"td",21)(1135,"em")(1136,"strong"),qx(1137,"(opcional)"),og()(),Cl(1138,"p"),qx(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(1140,"h4",33)(1141,"code",5),qx(1142,"PoPageDefaultLiterals"),og()(),Cl(1143,"div",2)(1144,"p"),qx(1145,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1146,"code"),qx(1147,"po-page-default"),og(),qx(1148,"."),og()(),Cl(1149,"h4",10),qx(1150,"Propriedades"),og(),Cl(1151,"table",11)(1152,"tr",12)(1153,"th",13),qx(1154,"Nome"),og(),Cl(1155,"th",13),qx(1156,"Tipo"),og(),Cl(1157,"th",13),qx(1158,"Descri\xE7\xE3o"),og()(),Cl(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),qx(1163," otherActions"),Hl(1164,"br"),og()()(),Cl(1165,"td",18)(1166,"code",26),qx(1167,"string"),og()(),Cl(1168,"td",21)(1169,"em")(1170,"strong"),qx(1171,"(opcional)"),og()(),Cl(1172,"p"),qx(1173,"Legenda do "),Cl(1174,"code"),qx(1175,"po-dropdown"),og(),qx(1176," de a\xE7\xF5es."),og()()()(),Cl(1177,"h3"),qx(1178,"Enums"),og(),Cl(1179,"h4",4)(1180,"code",5),qx(1181,"PoPageActionsLayout"),og()(),Cl(1182,"div",2)(1183,"p"),qx(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),Cl(1185,"code"),qx(1186,"po-page-default"),og(),qx(1187,"."),og(),Cl(1188,"blockquote")(1189,"p"),qx(1190,"Compat\xEDvel com todos os valores de "),Cl(1191,"code"),qx(1192,"PoPageHeaderType"),og(),qx(1193,"."),og()()(),Cl(1194,"h4",10),qx(1195,"Propriedades"),og(),Cl(1196,"table",11)(1197,"tr",12)(1198,"th",13),qx(1199,"Nome"),og(),Cl(1200,"th",13),qx(1201,"Descri\xE7\xE3o"),og()(),Cl(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),qx(1206," default"),Hl(1207,"br"),og()()(),Cl(1208,"td",21)(1209,"p"),qx(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),Cl(1211,"em"),qx(1212,"dropdown"),og(),qx(1213,"."),og(),Cl(1214,"p"),qx(1215,"Quando "),Cl(1216,"code"),qx(1217,"PoPageAction.kind"),og(),qx(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),Cl(1219,"code"),qx(1220,"primary"),og(),qx(1221,`
e as demais recebem `),Cl(1222,"code"),qx(1223,"secondary"),og(),qx(1224,"."),og()()(),Cl(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),qx(1229," dropdown"),Hl(1230,"br"),og()()(),Cl(1231,"td",21)(1232,"p"),qx(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),Cl(1234,"em"),qx(1235,"dropdown"),og(),qx(1236,"."),og()()(),Cl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),qx(1241," mixed"),Hl(1242,"br"),og()()(),Cl(1243,"td",21)(1244,"p"),qx(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),Cl(1246,"em"),qx(1247,"dropdown"),og(),qx(1248,"."),og()()()(),Cl(1249,"h4",4)(1250,"code",5),qx(1251,"PoPageHeaderType"),og()(),Cl(1252,"div",2)(1253,"p"),qx(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),Cl(1255,"code"),qx(1256,"po-page-default"),og(),qx(1257,"."),og()(),Cl(1258,"h4",10),qx(1259,"Propriedades"),og(),Cl(1260,"table",11)(1261,"tr",12)(1262,"th",13),qx(1263,"Nome"),og(),Cl(1264,"th",13),qx(1265,"Descri\xE7\xE3o"),og()(),Cl(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),qx(1270," primary"),Hl(1271,"br"),og()()(),Cl(1272,"td",21)(1273,"p"),qx(1274,"Layout padr\xE3o com suporte a "),Cl(1275,"code"),qx(1276,"p-breadcrumb"),og(),qx(1277,"."),og()()(),Cl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),qx(1282," secondary"),Hl(1283,"br"),og()()(),Cl(1284,"td",21)(1285,"p"),qx(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),og(),Cl(1287,"blockquote")(1288,"p"),qx(1289,"Incompat\xEDvel com "),Cl(1290,"code"),qx(1291,"p-breadcrumb"),og(),qx(1292,"."),og()()()(),Cl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),qx(1297," tertiary"),Hl(1298,"br"),og()()(),Cl(1299,"td",21)(1300,"p"),qx(1301,"Layout simplificado sem bot\xE3o de retorno."),og(),Cl(1302,"blockquote")(1303,"p"),qx(1304,"Incompat\xEDvel com "),Cl(1305,"code"),qx(1306,"p-breadcrumb"),og(),qx(1307,"."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-page-default-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,xe,Pe,Ce,we],encapsulation:2})}return l})();var Re=[{path:"",component:De}],_e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[bL.forChild(Re),bL]})}return l})();var Dt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ca,_e]})}return l})();export{Dt as DocPoPageDefaultModule};