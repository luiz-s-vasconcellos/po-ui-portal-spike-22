import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,s,e as r$1,I,a3 as aNe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,bB as cc,b4 as O3,c8 as Sde,aJ as Uhe,ba as gNe,aB as Cx,aM as Ew,aN as t0,aq as fx,bd as Ox,a7 as fN,aO as Dw,aP as r0,at as hx,cz as Mz,b6 as Yo,b7 as E3,O as we$1,av as Yl,aw as uo,ax as fo,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&Gl(0,"po-page-default",0);},dependencies:[aNe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Default Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-default-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return l})();var Fe=()=>({});function Be(l,Me){if(l&1){let d=Cx();Tl(0,"po-input",36),Ew("ngModelChange",function(i){Ky(d);let m=Rx(2);return rN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Xy(i)}),sg(),t0();}if(l&2){let d=Rx(2);Dw("ngModel",d.helperFooterLabel),r0();}}function Oe(l,Me){if(l&1){let d=Cx();Tl(0,"po-widget",10)(1,"div",6)(2,"po-input",32),Ew("ngModelChange",function(i){Ky(d);let m=Rx();return rN(m.helperTitle,i)||(m.helperTitle=i),Xy(i)}),sg(),t0(),Tl(3,"po-input",33),Ew("ngModelChange",function(i){Ky(d);let m=Rx();return rN(m.helperContent,i)||(m.helperContent=i),Xy(i)}),sg(),t0(),sg(),Tl(4,"div",6)(5,"po-radio-group",34),ht("ngModelChange",function(i){Ky(d);let m=Rx();return Xy(m.helperType=i)}),sg(),t0(),sg(),Tl(6,"div",6),fx(7,Be,1,1,"po-input",35),sg()();}if(l&2){let d=Rx();Vp(2),Dw("ngModel",d.helperTitle),r0(),Vp(),Dw("ngModel",d.helperContent),r0(),Vp(2),tw("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),r0(),Vp(2),hx(d.helperType==="help"?7:-1);}}var ve=(()=>{class l{poNotification=f(Yp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Cx();Tl(0,"po-page-default",5),ht("p-back",function(){return i.onBack()}),sg(),Gl(1,"po-divider"),Tl(2,"form",null,0)(4,"div",6)(5,"po-input",7),Ew("ngModelChange",function(o){return Ky(m),rN(i.title,o)||(i.title=o),Xy(o)}),sg(),t0(),Tl(6,"po-input",8),Ew("ngModelChange",function(o){return Ky(m),rN(i.subtitle,o)||(i.subtitle=o),Xy(o)}),sg(),t0(),Tl(7,"po-checkbox",9),Ew("ngModelChange",function(o){return Ky(m),rN(i.showHelper,o)||(i.showHelper=o),Xy(o)}),sg(),t0(),fx(8,Oe,8,6,"po-widget",10),Tl(9,"po-select",11),ht("ngModelChange",function(o){return i.pageHeaderType=o}),sg(),t0(),Tl(10,"po-select",12),ht("ngModelChange",function(o){return i.pageActionsLayout=o}),sg(),t0(),Tl(11,"po-input",13),Ew("ngModelChange",function(o){return Ky(m),rN(i.literals,o)||(i.literals=o),Xy(o)}),ht("p-change",function(){return i.changeLiterals()}),sg(),t0(),Tl(12,"po-radio-group",14),Ew("ngModelChange",function(o){return Ky(m),rN(i.componentsSize,o)||(i.componentsSize=o),Xy(o)}),sg(),t0(),sg()(),Gl(13,"po-divider"),Tl(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),Ew("ngModelChange",function(o){return Ky(m),rN(i.action.label,o)||(i.action.label=o),Xy(o)}),sg(),t0(),Tl(19,"po-input",17),Ew("ngModelChange",function(o){return Ky(m),rN(i.action.action,o)||(i.action.action=o),Xy(o)}),sg(),t0(),Tl(20,"po-input",18),Ew("ngModelChange",function(o){return Ky(m),rN(i.action.url,o)||(i.action.url=o),Xy(o)}),sg(),t0(),Tl(21,"po-select",19),ht("ngModelChange",function(o){return i.action.type=o}),sg(),t0(),Tl(22,"po-select",20),ht("ngModelChange",function(o){return i.action.icon=o}),sg(),t0(),Tl(23,"po-select",21),ht("ngModelChange",function(o){return i.action.kind=o}),sg(),t0(),Tl(24,"po-checkbox-group",22),ht("ngModelChange",function(o){return i.action=o}),sg(),t0(),sg(),Tl(25,"div",6)(26,"po-button",23),ht("p-click",function(){return i.addAction(i.action)}),sg()()()(),Gl(27,"po-divider"),Tl(28,"form",null,2)(30,"div",6)(31,"po-input",24),Ew("ngModelChange",function(o){return Ky(m),rN(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),Xy(o)}),sg(),t0(),sg()(),Tl(32,"form",null,3)(34,"div",6)(35,"po-input",25),Ew("ngModelChange",function(o){return Ky(m),rN(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),Xy(o)}),sg(),t0(),Tl(36,"po-input",26),Ew("ngModelChange",function(o){return Ky(m),rN(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),Xy(o)}),sg(),t0(),sg(),Tl(37,"div",6)(38,"po-button",27),ht("p-click",function(){return i.addBreadcrumbItem()}),sg()()(),Gl(39,"po-divider"),Tl(40,"form",null,4)(42,"div",6)(43,"po-input",28),Ew("ngModelChange",function(o){return Ky(m),rN(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),Xy(o)}),sg(),t0(),Tl(44,"po-input",29),Ew("ngModelChange",function(o){return Ky(m),rN(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),Xy(o)}),sg(),t0(),sg(),Tl(45,"div",6)(46,"po-button",30),ht("p-click",function(){return i.addBreadcrumbParam()}),sg()()(),Gl(47,"po-divider"),Tl(48,"div",6)(49,"po-button",31),ht("p-click",function(){return i.restore()}),sg()();}if(r&2){let m=Ox(16),s=Ox(33),o=Ox(41);tw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??fN(42,Fe))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Vp(5),Dw("ngModel",i.title),r0(),Vp(),Dw("ngModel",i.subtitle),r0(),Vp(),Dw("ngModel",i.showHelper),r0(),Vp(),hx(i.showHelper?8:-1),Vp(),tw("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),r0(),Vp(),tw("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),r0(),Vp(),Dw("ngModel",i.literals),r0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-columns",4)("p-options",i.componentsSizeOptions),r0(),Vp(6),Dw("ngModel",i.action.label),r0(),Vp(),Dw("ngModel",i.action.action),r0(),Vp(),Dw("ngModel",i.action.url),r0(),Vp(),tw("ngModel",i.action.type)("p-options",i.typeOptions),r0(),Vp(),tw("ngModel",i.action.icon)("p-options",i.iconOptions),r0(),Vp(),tw("ngModel",i.action.kind)("p-options",i.actionKindOptions),r0(),Vp(),tw("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),r0(),Vp(2),tw("p-disabled",m.form.invalid),Vp(5),Dw("ngModel",i.breadcrumb.favorite),r0(),Vp(4),Dw("ngModel",i.breadcrumbItem.label),r0(),Vp(),Dw("ngModel",i.breadcrumbItem.link),r0(),Vp(2),tw("p-disabled",s.invalid??false),Vp(5),Dw("ngModel",i.breadcrumbParams.property),r0(),Vp(),Dw("ngModel",i.breadcrumbParams.value),r0(),Vp(2),tw("p-disabled",o.invalid??false);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,cc,O3,Sde,Uhe,aNe,gNe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Default Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-default-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ve],encapsulation:2})}return l})();var ee=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=I({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ve=["formShare"],ye=(()=>{class l{poNotification=f(Yp);sampleDashboardService=f(ee);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&Yl(Ve,7)(Yo,7),r&2){let m;uo(m=fo())&&(i.formShare=m.first),uo(m=fo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([ee])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Cx();Tl(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),tN(4,"540"),sg(),Tl(5,"div",5),tN(6,"www.po.com.br"),sg()(),Tl(7,"po-widget",6)(8,"div",4),tN(9,"300 views"),sg(),Tl(10,"div",5),tN(11,"https://po-ui.io"),sg()(),Tl(12,"po-widget",7)(13,"div",4),tN(14,"Online"),sg(),Tl(15,"div",5),tN(16,"28 days"),sg()(),Tl(17,"po-widget",8)(18,"div",4),tN(19,"266"),sg(),Tl(20,"div",5),tN(21,"@po-ui/ng-components - 1.10.1"),sg()(),Tl(22,"po-widget",9)(23,"div",4),tN(24,"800 questions"),sg(),Tl(25,"div",5),tN(26,"https://devforum.po.com.br"),sg()(),Tl(27,"po-widget",10)(28,"div",4),tN(29,"AngularJS - Angular 6"),sg(),Tl(30,"div",5),tN(31,"Angular 6 most downloaded"),sg()()(),Gl(32,"po-divider")(33,"po-table",11),sg(),Tl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),Ew("ngModelChange",function(o){return Ky(m),rN(i.email,o)||(i.email=o),Xy(o)}),sg(),t0(),sg()();}r&2&&(tw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Vp(33),tw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Vp(),tw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Vp(3),Dw("ngModel",i.email),r0());},dependencies:[nY,J9,eY,Ck,Dk,mv,Mz,Yo,aNe,E3,gNe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Default - Dashboard"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),tN(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),sg(),Tl(29,"pre",11),tN(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-page-default-dashboard"),sg(),Gl(33,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ye],encapsulation:2})}return l})();var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Tl(7,"code"),tN(8,"po-page-default"),sg(),tN(9,", "),Tl(10,"code"),tN(11,"po-page-detail"),sg(),tN(12,`,
`),Tl(13,"code"),tN(14,"po-page-edit"),sg(),tN(15,", "),Tl(16,"code"),tN(17,"po-page-list"),sg(),tN(18," e "),Tl(19,"code"),tN(20,"po-page-slide"),sg(),tN(21,"."),sg()(),Tl(22,"h3",3),tN(23,"Componente"),sg(),Tl(24,"h4",4)(25,"code",5),tN(26,"PoPageDefaultComponent"),sg()(),Tl(27,"div",2)(28,"p"),tN(29,"O "),Tl(30,"code"),tN(31,"po-page-default"),sg(),tN(32," \xE9 utilizado como container principal para telas sem um template definido."),sg(),Tl(33,"p"),tN(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),Tl(35,"code"),tN(36,"p-page-header-type"),sg(),tN(37,", navega\xE7\xE3o por "),Tl(38,"em"),tN(39,"breadcrumb"),sg(),tN(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Tl(41,"code"),tN(42,"p-page-actions-layout"),sg(),tN(43,"."),sg(),Tl(44,"h4"),tN(45,"Tokens customiz\xE1veis"),sg(),Tl(46,"blockquote")(47,"p"),tN(48,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(49,"a",6),tN(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(51,"."),sg()(),Tl(52,"table")(53,"thead")(54,"tr")(55,"th"),tN(56,"Propriedade"),sg(),Tl(57,"th"),tN(58,"Descri\xE7\xE3o"),sg(),Tl(59,"th"),tN(60,"Valor Padr\xE3o"),sg()()(),Tl(61,"tbody")(62,"tr")(63,"td")(64,"strong"),tN(65,"P\xE1gina (po-page-default)"),sg()(),Gl(66,"td")(67,"td"),sg(),Tl(68,"tr")(69,"td")(70,"code"),tN(71,"--background"),sg()(),Tl(72,"td"),tN(73,"Background da p\xE1gina (header e body)"),sg(),Tl(74,"td")(75,"code"),tN(76,"var(--color-page-background-color-page)"),sg()()(),Tl(77,"tr")(78,"td")(79,"strong"),tN(80,"Header (po-page-header)"),sg()(),Gl(81,"td")(82,"td"),sg(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--padding"),sg()(),Tl(87,"td"),tN(88,"Espa\xE7amento do header"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--gap"),sg()(),Tl(96,"td"),tN(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--spacing-md)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--gap-actions"),sg()(),Tl(105,"td"),tN(106,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--spacing-xs)"),sg()()(),Tl(110,"tr")(111,"td")(112,"strong"),tN(113,"Header (po-page-header .po-page-header-title)"),sg()(),Gl(114,"td")(115,"td"),sg(),Tl(116,"tr")(117,"td")(118,"code"),tN(119,"--font-family"),sg()(),Tl(120,"td"),tN(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(122,"td")(123,"code"),tN(124,"var(--font-family-theme)"),sg()()(),Tl(125,"tr")(126,"td")(127,"strong"),tN(128,"Content (po-page-content)"),sg()(),Gl(129,"td")(130,"td"),sg(),Tl(131,"tr")(132,"td")(133,"code"),tN(134,"--padding-content"),sg()(),Tl(135,"td"),tN(136,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(137,"td")(138,"code"),tN(139,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(140,"div",7)(141,"h4",8),tN(142,"Seletor"),sg(),Tl(143,"pre",9),tN(144,`<po-page-default
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
`),sg()(),Tl(145,"h4",10),tN(146,"Propriedades"),sg(),Tl(147,"table",11)(148,"tr",12)(149,"th",13),tN(150,"Nome"),sg(),Tl(151,"th",13),tN(152,"Tipo"),sg(),Tl(153,"th",13),tN(154,"Padr\xE3o"),sg(),Tl(155,"th",13),tN(156,"Descri\xE7\xE3o"),sg()(),Tl(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),tN(161," p-actions"),Gl(162,"br"),sg()()(),Tl(163,"td",18)(164,"code",19),tN(165,"Array<PoPageAction>"),sg()(),Tl(166,"td",20)(167,"p")(168,"code"),tN(169,"[]"),sg()()(),Tl(170,"td",21)(171,"em")(172,"strong"),tN(173,"(opcional)"),sg()(),Tl(174,"p"),tN(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),sg(),Tl(176,"p"),tN(177,"Recebe um array de objetos que implementam a interface "),Tl(178,"code"),tN(179,"PoPageAction"),sg(),tN(180,"."),sg(),Tl(181,"blockquote")(182,"p"),tN(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),Tl(184,"code"),tN(185,"p-page-actions-layout"),sg(),tN(186,"."),sg()()()(),Tl(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),tN(191," (p-back)"),Gl(192,"br"),sg()()(),Tl(193,"td",18)(194,"code",24),tN(195,"EventEmitter"),sg()(),Tl(196,"td",20),tN(197,"-"),sg(),Tl(198,"td",21)(199,"em")(200,"strong"),tN(201,"(opcional)"),sg()(),Tl(202,"p"),tN(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),sg(),Tl(204,"blockquote")(205,"p"),tN(206,"Bot\xE3o exibido apenas quando a propriedade "),Tl(207,"code"),tN(208,"p-page-header-type"),sg(),tN(209," est\xE1 configurada como "),Tl(210,"code"),tN(211,"secondary"),sg(),tN(212,"."),sg()()()(),Tl(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),tN(217," p-breadcrumb"),Gl(218,"br"),sg()()(),Tl(219,"td",18)(220,"code",25),tN(221,"PoBreadcrumb"),sg()(),Tl(222,"td",20),tN(223,"-"),sg(),Tl(224,"td",21)(225,"em")(226,"strong"),tN(227,"(opcional)"),sg()(),Tl(228,"p"),tN(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),sg(),Tl(230,"p"),tN(231,"Recebe um objeto que implementa a interface "),Tl(232,"code"),tN(233,"PoBreadcrumb"),sg(),tN(234,"."),sg(),Tl(235,"blockquote")(236,"p"),tN(237,"Compat\xEDvel com o cabe\xE7alho ("),Tl(238,"code"),tN(239,"p-page-header-type"),sg(),tN(240,") do tipo "),Tl(241,"code"),tN(242,"primary"),sg(),tN(243,"."),sg()()()(),Tl(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),tN(248," p-components-size"),Gl(249,"br"),sg()()(),Tl(250,"td",18)(251,"code",26),tN(252,"string"),sg()(),Tl(253,"td",20)(254,"p")(255,"code"),tN(256,"medium"),sg()()(),Tl(257,"td",21)(258,"em")(259,"strong"),tN(260,"(opcional)"),sg()(),Tl(261,"p"),tN(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(263,"ul")(264,"li")(265,"code"),tN(266,"small"),sg(),tN(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(268,"li")(269,"code"),tN(270,"medium"),sg(),tN(271,": aplica a medida medium de cada componente."),sg()(),Tl(272,"blockquote")(273,"p"),tN(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(275,"code"),tN(276,"medium"),sg(),tN(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(278,"a",27),tN(279,"po-theme"),sg(),tN(280,"."),sg()()()(),Tl(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),tN(285," p-helper"),Gl(286,"br"),sg()()(),Tl(287,"td",18)(288,"code",28),tN(289,"PoHelperOptions "),sg(),Tl(290,"code",26),tN(291," string"),sg()(),Tl(292,"td",20)(293,"p")(294,"code"),tN(295,"info"),sg()()(),Tl(296,"td",21)(297,"em")(298,"strong"),tN(299,"(opcional)"),sg()(),Tl(300,"p"),tN(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),sg(),Tl(302,"p"),tN(303,"Quando n\xE3o houver subt\xEDtulo ("),Tl(304,"code"),tN(305,"p-subtitle"),sg(),tN(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),sg(),Tl(307,"p"),tN(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Tl(309,"code"),tN(310,"PoHelperOptions"),sg(),tN(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),sg(),Tl(312,"p"),tN(313,"Exemplo de uso:"),sg(),Tl(314,"pre")(315,"code",29),tN(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),sg()()()(),Tl(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),tN(321," p-literals"),Gl(322,"br"),sg()()(),Tl(323,"td",18)(324,"code",30),tN(325,"PoPageDefaultLiterals"),sg()(),Tl(326,"td",20),tN(327,"-"),sg(),Tl(328,"td",21)(329,"em")(330,"strong"),tN(331,"(opcional)"),sg()(),Tl(332,"p"),tN(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),sg(),Tl(334,"p"),tN(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),Tl(336,"code"),tN(337,"PoPageDefaultLiterals"),sg(),tN(338,"."),sg(),Tl(339,"p"),tN(340,"Exemplo de uso:"),sg(),Tl(341,"pre")(342,"code",29),tN(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),sg()(),Tl(344,"pre")(345,"code",31),tN(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),sg()(),Tl(347,"blockquote")(348,"p"),tN(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Tl(350,"a",32)(351,"code"),tN(352,"PoI18nService"),sg()(),tN(353," ou navegador."),sg()()()(),Tl(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),tN(358," p-page-actions-layout"),Gl(359,"br"),sg()()(),Tl(360,"td",18)(361,"code",26),tN(362,"string"),sg()(),Tl(363,"td",20)(364,"p")(365,"code"),tN(366,"default"),sg()()(),Tl(367,"td",21)(368,"em")(369,"strong"),tN(370,"(opcional)"),sg()(),Tl(371,"p"),tN(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),sg(),Tl(373,"p"),tN(374,"Aceita valores do enum "),Tl(375,"code"),tN(376,"PoPageActionsLayout"),sg(),tN(377,"."),sg(),Tl(378,"blockquote")(379,"p"),tN(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),Tl(381,"em"),tN(382,"dropdown"),sg(),tN(383," que possuam a propriedade "),Tl(384,"code"),tN(385,"PoPageAction.icon"),sg(),tN(386,` definida
exibir\xE3o apenas o \xEDcone.`),sg()()()(),Tl(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),tN(391," p-page-header-type"),Gl(392,"br"),sg()()(),Tl(393,"td",18)(394,"code",26),tN(395,"string"),sg()(),Tl(396,"td",20)(397,"p")(398,"code"),tN(399,"primary"),sg()()(),Tl(400,"td",21)(401,"em")(402,"strong"),tN(403,"(opcional)"),sg()(),Tl(404,"p"),tN(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),sg(),Tl(406,"p"),tN(407,"Aceita valores do enum "),Tl(408,"code"),tN(409,"PoPageHeaderType"),sg(),tN(410,"."),sg()()(),Tl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),tN(415," p-subtitle"),Gl(416,"br"),sg()()(),Tl(417,"td",18)(418,"code",26),tN(419,"string"),sg()(),Tl(420,"td",20),tN(421,"-"),sg(),Tl(422,"td",21)(423,"em")(424,"strong"),tN(425,"(opcional)"),sg()(),Tl(426,"p"),tN(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),sg(),Tl(428,"p"),tN(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(430,"code"),tN(431,"<b>"),sg(),tN(432," (negrito), "),Tl(433,"code"),tN(434,"<strong>"),sg(),tN(435," (negrito), "),Tl(436,"code"),tN(437,"<i>"),sg(),tN(438," (it\xE1lico), "),Tl(439,"code"),tN(440,"<em>"),sg(),tN(441,` (it\xE1lico) e
`),Tl(442,"code"),tN(443,"<u>"),sg(),tN(444," (sublinhado)."),sg(),Tl(445,"p"),tN(446,"Exemplo:"),sg(),Tl(447,"pre")(448,"code",31),tN(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),sg()(),Tl(450,"blockquote")(451,"p"),tN(452,"Requer que "),Tl(453,"code"),tN(454,"p-title"),sg(),tN(455," esteja definido."),sg()()()(),Tl(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),tN(460," p-title"),Gl(461,"br"),sg()()(),Tl(462,"td",18)(463,"code",26),tN(464,"string"),sg()(),Tl(465,"td",20),tN(466,"-"),sg(),Tl(467,"td",21)(468,"em")(469,"strong"),tN(470,"(opcional)"),sg()(),Tl(471,"p"),tN(472,"Define o t\xEDtulo principal da p\xE1gina."),sg()()()(),Tl(473,"h3"),tN(474,"Interfaces"),sg(),Tl(475,"h4",33)(476,"code",5),tN(477,"PoBreadcrumbItem"),sg()(),Tl(478,"div",2)(479,"p"),tN(480,"Interface que define cada item do componente "),Tl(481,"strong"),tN(482,"po-breadcrumb"),sg(),tN(483,"."),sg()(),Tl(484,"h4",10),tN(485,"Propriedades"),sg(),Tl(486,"table",11)(487,"tr",12)(488,"th",13),tN(489,"Nome"),sg(),Tl(490,"th",13),tN(491,"Tipo"),sg(),Tl(492,"th",13),tN(493,"Descri\xE7\xE3o"),sg()(),Tl(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),tN(498," action"),Gl(499,"br"),sg()()(),Tl(500,"td",18)(501,"code",34),tN(502,"Function"),sg()(),Tl(503,"td",21)(504,"em")(505,"strong"),tN(506,"(opcional)"),sg()(),Tl(507,"p"),tN(508,"A\xE7\xE3o executada ao clicar no item."),sg(),Tl(509,"blockquote")(510,"p"),tN(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Tl(512,"em"),tN(513,"label"),sg(),tN(514," do item como par\xE2metro para execu\xE7\xE3o."),sg()()()(),Tl(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),tN(519," label"),Gl(520,"br"),sg()()(),Tl(521,"td",18)(522,"code",26),tN(523,"string"),sg()(),Tl(524,"td",21)(525,"p"),tN(526,"R\xF3tulo do item."),sg()()(),Tl(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),tN(531," link"),Gl(532,"br"),sg()()(),Tl(533,"td",18)(534,"code",26),tN(535,"string"),sg()(),Tl(536,"td",21)(537,"em")(538,"strong"),tN(539,"(opcional)"),sg()(),Tl(540,"p"),tN(541,"Url do item."),sg(),Tl(542,"blockquote")(543,"p"),tN(544,"Caso o item tamb\xE9m contenha uma "),Tl(545,"em"),tN(546,"action"),sg(),tN(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Tl(548,"em"),tN(549,"link"),sg(),tN(550,"."),sg()(),Tl(551,"blockquote")(552,"p"),tN(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(554,"strong")(555,"a",35),tN(556,"Veja um exemplo de como criar rotas aqui"),sg()(),tN(557,"."),sg()(),Tl(558,"blockquote")(559,"p"),tN(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Tl(561,"code"),tN(562,"p-favorite-service"),sg(),tN(563," consiga favoritar ou desfavoritar."),sg()()()()(),Tl(564,"h4",33)(565,"code",5),tN(566,"PoBreadcrumb"),sg()(),Tl(567,"div",2)(568,"p"),tN(569,"Interface que define o "),Tl(570,"code"),tN(571,"po-breadcrumb"),sg(),tN(572,"."),sg()(),Tl(573,"h4",10),tN(574,"Propriedades"),sg(),Tl(575,"table",11)(576,"tr",12)(577,"th",13),tN(578,"Nome"),sg(),Tl(579,"th",13),tN(580,"Tipo"),sg(),Tl(581,"th",13),tN(582,"Descri\xE7\xE3o"),sg()(),Tl(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),tN(587," favorite"),Gl(588,"br"),sg()()(),Tl(589,"td",18)(590,"code",26),tN(591,"string"),sg()(),Tl(592,"td",21)(593,"em")(594,"strong"),tN(595,"(opcional)"),sg()(),Tl(596,"p"),tN(597,"Permite definir uma URL para favoritar ou desfavoritar."),sg(),Tl(598,"blockquote")(599,"p"),tN(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),Tl(601,"code"),tN(602,"p-favorite-service"),sg(),tN(603," do componente "),Tl(604,"code"),tN(605,"po-breadcrumb"),sg(),tN(606,"."),sg()()()(),Tl(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),tN(611," items"),Gl(612,"br"),sg()()(),Tl(613,"td",18)(614,"code",36),tN(615,"Array<PoBreadcrumbItem>"),sg()(),Tl(616,"td",21)(617,"p"),tN(618,"Lista de itens do "),Tl(619,"em"),tN(620,"breadcrumb"),sg(),tN(621,"."),sg(),Tl(622,"p")(623,"strong"),tN(624,"Exemplo:"),sg()(),Tl(625,"pre")(626,"code"),tN(627,`{ label: 'Po Portal', link: 'portal' }
`),sg()()()(),Tl(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),tN(632," params"),Gl(633,"br"),sg()()(),Tl(634,"td",18)(635,"code",37),tN(636,"object"),sg()(),Tl(637,"td",21)(638,"em")(639,"strong"),tN(640,"(opcional)"),sg()(),Tl(641,"p"),tN(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),sg()()()(),Tl(643,"h4",33)(644,"code",5),tN(645,"PoHelperOptions"),sg()(),Tl(646,"div",2)(647,"p"),tN(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Tl(649,"em"),tN(650,"helper"),sg(),tN(651,")."),sg()(),Tl(652,"h4",10),tN(653,"Propriedades"),sg(),Tl(654,"table",11)(655,"tr",12)(656,"th",13),tN(657,"Nome"),sg(),Tl(658,"th",13),tN(659,"Tipo"),sg(),Tl(660,"th",13),tN(661,"Descri\xE7\xE3o"),sg()(),Tl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),tN(666," content"),Gl(667,"br"),sg()()(),Tl(668,"td",18)(669,"code",26),tN(670,"string"),sg()(),Tl(671,"td",21)(672,"em")(673,"strong"),tN(674,"(opcional)"),sg()(),Tl(675,"p"),tN(676,"Texto explicativo exibido no popover."),sg(),Tl(677,"p"),tN(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(679,"code"),tN(680,"<b>"),sg(),tN(681," (negrito), "),Tl(682,"code"),tN(683,"<strong>"),sg(),tN(684," (negrito), "),Tl(685,"code"),tN(686,"<i>"),sg(),tN(687," (it\xE1lico), "),Tl(688,"code"),tN(689,"<em>"),sg(),tN(690,` (it\xE1lico) e
`),Tl(691,"code"),tN(692,"<u>"),sg(),tN(693," (sublinhado)."),sg(),Tl(694,"p"),tN(695,"Exemplo:"),sg(),Tl(696,"pre")(697,"code",31),tN(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),sg()()()(),Tl(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),tN(703," eventOnClick"),Gl(704,"br"),sg()()(),Tl(705,"td",18)(706,"code",34),tN(707,"Function"),sg()(),Tl(708,"td",21)(709,"em")(710,"strong"),tN(711,"(opcional)"),sg()(),Tl(712,"p"),tN(713,"Evento disparado ao clicar no \xEDcone do helper."),sg(),Tl(714,"p"),tN(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),sg(),Tl(716,"p"),tN(717,"Pode ser uma fun\xE7\xE3o ou um "),Tl(718,"code"),tN(719,"EventEmitter"),sg(),tN(720,"."),sg(),Tl(721,"p"),tN(722,"Exemplo:"),sg(),Tl(723,"pre")(724,"code"),tN(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),sg()()()(),Tl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),tN(730," footerAction"),Gl(731,"br"),sg()()(),Tl(732,"td",18)(733,"code",38),tN(734,`{ label: string; action: Function;
}`),sg()(),Tl(735,"td",21)(736,"em")(737,"strong"),tN(738,"(opcional)"),sg()(),Tl(739,"p"),tN(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Tl(741,"code"),tN(742,"help"),sg(),tN(743," e desconsiderada quando o type for "),Tl(744,"code"),tN(745,"info"),sg(),tN(746,"."),sg(),Tl(747,"p"),tN(748,"Deve ser um objeto com as propriedades:"),sg(),Tl(749,"ul")(750,"li")(751,"code"),tN(752,"label"),sg(),tN(753,": Texto do bot\xE3o."),sg(),Tl(754,"li")(755,"code"),tN(756,"action"),sg(),tN(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),sg()(),Tl(758,"p"),tN(759,"Exemplo:"),sg(),Tl(760,"pre")(761,"code",31),tN(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),sg()()()(),Tl(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),tN(767," title"),Gl(768,"br"),sg()()(),Tl(769,"td",18)(770,"code",26),tN(771,"string"),sg()(),Tl(772,"td",21)(773,"em")(774,"strong"),tN(775,"(opcional)"),sg()(),Tl(776,"p"),tN(777,"T\xEDtulo do helper exibido no popover."),sg()()(),Tl(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),tN(782," type"),Gl(783,"br"),sg()()(),Tl(784,"td",18)(785,"code",39),tN(786,"'info' "),sg(),Tl(787,"code",40),tN(788," 'help'"),sg()(),Tl(789,"td",21)(790,"em")(791,"strong"),tN(792,"(opcional)"),sg()(),Tl(793,"p"),tN(794,"Tipo do \xEDcone exibido: "),Tl(795,"code"),tN(796,"info"),sg(),tN(797," ou "),Tl(798,"code"),tN(799,"help"),sg(),tN(800,"."),sg(),Tl(801,"p"),tN(802,"Quando o valor \xE9 "),Tl(803,"code"),tN(804,"info"),sg(),tN(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),sg(),Tl(806,"p"),tN(807,"Quando o valor \xE9 "),Tl(808,"code"),tN(809,"help"),sg(),tN(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),sg()()()(),Tl(811,"h4",33)(812,"code",5),tN(813,"PoPageAction"),sg()(),Tl(814,"div",2)(815,"p"),tN(816,"Interface para as a\xE7\xF5es dos componentes "),Tl(817,"code"),tN(818,"po-page-default"),sg(),tN(819," e "),Tl(820,"code"),tN(821,"po-page-list"),sg(),tN(822,"."),sg(),Tl(823,"p"),tN(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Tl(825,"em"),tN(826,"dropdown"),sg(),tN(827,`,
conforme o `),Tl(828,"code"),tN(829,"PoPageActionsLayout"),sg(),tN(830," e o tamanho da tela."),sg(),Tl(831,"blockquote")(832,"p"),tN(833,"As propriedades "),Tl(834,"code"),tN(835,"separator"),sg(),tN(836,", "),Tl(837,"code"),tN(838,"selected"),sg(),tN(839," e "),Tl(840,"code"),tN(841,"subItems"),sg(),tN(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Tl(843,"em"),tN(844,"dropdown"),sg(),tN(845,"."),sg()()(),Tl(846,"h4",10),tN(847,"Propriedades"),sg(),Tl(848,"table",11)(849,"tr",12)(850,"th",13),tN(851,"Nome"),sg(),Tl(852,"th",13),tN(853,"Tipo"),sg(),Tl(854,"th",13),tN(855,"Descri\xE7\xE3o"),sg()(),Tl(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),tN(860," action"),Gl(861,"br"),sg()()(),Tl(862,"td",18)(863,"code",34),tN(864,"Function"),sg()(),Tl(865,"td",21)(866,"em")(867,"strong"),tN(868,"(opcional)"),sg()(),Tl(869,"p"),tN(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(871,"p"),tN(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(873,"code"),tN(874,"subItems"),sg(),tN(875,"."),sg(),Tl(876,"blockquote")(877,"p"),tN(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(879,"em"),tN(880,"bind"),sg(),tN(881,`:
`),Tl(882,"code"),tN(883,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),tN(888," disabled"),Gl(889,"br"),sg()()(),Tl(890,"td",18)(891,"code",41),tN(892,"boolean "),sg(),Tl(893,"code",34),tN(894," Function"),sg()(),Tl(895,"td",21)(896,"em")(897,"strong"),tN(898,"(opcional)"),sg()(),Tl(899,"p"),tN(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),tN(905," icon"),Gl(906,"br"),sg()()(),Tl(907,"td",18)(908,"code",26),tN(909,"string "),sg(),Tl(910,"code",42),tN(911," TemplateRef<void>"),sg()(),Tl(912,"td",21)(913,"em")(914,"strong"),tN(915,"(opcional)"),sg()(),Tl(916,"p"),tN(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(918,"p"),tN(919,"Aceita \xEDcones da "),Tl(920,"a",43),tN(921,"Biblioteca de \xEDcones"),sg(),tN(922,`, fontes externas (ex: Font Awesome)
ou um `),Tl(923,"code"),tN(924,"TemplateRef"),sg(),tN(925," para \xEDcones customizados."),sg(),Tl(926,"pre")(927,"code"),tN(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),tN(933," kind"),Gl(934,"br"),sg()()(),Tl(935,"td",18)(936,"code",26),tN(937,"string"),sg()(),Tl(938,"td",21)(939,"em")(940,"strong"),tN(941,"(opcional)"),sg()(),Tl(942,"p"),tN(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Tl(944,"em"),tN(945,"dropdown"),sg(),tN(946,"."),sg(),Tl(947,"p"),tN(948,"Valores permitidos:"),sg(),Tl(949,"ul")(950,"li")(951,"code"),tN(952,"primary"),sg(),tN(953,": bot\xE3o com maior destaque visual."),sg(),Tl(954,"li")(955,"code"),tN(956,"secondary"),sg(),tN(957,": estilo padr\xE3o."),sg()(),Tl(958,"blockquote")(959,"p"),tN(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),sg()(),Tl(961,"blockquote")(962,"p"),tN(963,"Somente uma a\xE7\xE3o pode ter "),Tl(964,"code"),tN(965,"kind"),sg(),tN(966," igual a "),Tl(967,"code"),tN(968,"primary"),sg(),tN(969,". Caso mais de uma defina "),Tl(970,"code"),tN(971,"primary"),sg(),tN(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Tl(973,"code"),tN(974,"secondary"),sg(),tN(975,"."),sg()(),Tl(976,"blockquote")(977,"p"),tN(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Tl(979,"code"),tN(980,"PoPageActionsLayout"),sg(),tN(981,"."),sg()()()(),Tl(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),tN(986," label"),Gl(987,"br"),sg()()(),Tl(988,"td",18)(989,"code",26),tN(990,"string"),sg()(),Tl(991,"td",21)(992,"p"),tN(993,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(994,"p"),tN(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(996,"code"),tN(997,"subItems"),sg(),tN(998,"."),sg()()(),Tl(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),tN(1003," selected"),Gl(1004,"br"),sg()()(),Tl(1005,"td",18)(1006,"code",41),tN(1007,"boolean"),sg()(),Tl(1008,"td",21)(1009,"em")(1010,"strong"),tN(1011,"(opcional)"),sg()(),Tl(1012,"p"),tN(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),tN(1018," separator"),Gl(1019,"br"),sg()()(),Tl(1020,"td",18)(1021,"code",41),tN(1022,"boolean"),sg()(),Tl(1023,"td",21)(1024,"em")(1025,"strong"),tN(1026,"(opcional)"),sg()(),Tl(1027,"p"),tN(1028,"Atribui uma linha separadora acima do item."),sg()()(),Tl(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),tN(1033," subItems"),Gl(1034,"br"),sg()()(),Tl(1035,"td",18)(1036,"code",44),tN(1037,"Array<PoPopupAction>"),sg()(),Tl(1038,"td",21)(1039,"em")(1040,"strong"),tN(1041,"(opcional)"),sg()(),Tl(1042,"p"),tN(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(1044,"p"),tN(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(1046,"blockquote")(1047,"p"),tN(1048,"As propriedades "),Tl(1049,"code"),tN(1050,"disabled"),sg(),tN(1051,", "),Tl(1052,"code"),tN(1053,"type"),sg(),tN(1054," e "),Tl(1055,"code"),tN(1056,"visible"),sg(),tN(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(1058,"blockquote")(1059,"p"),tN(1060,"Quando "),Tl(1061,"code"),tN(1062,"url"),sg(),tN(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(1064,"blockquote")(1065,"p"),tN(1066,"Em subn\xEDveis aninhados, o "),Tl(1067,"code"),tN(1068,"icon"),sg(),tN(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),tN(1074," type"),Gl(1075,"br"),sg()()(),Tl(1076,"td",18)(1077,"code",26),tN(1078,"string"),sg()(),Tl(1079,"td",21)(1080,"em")(1081,"strong"),tN(1082,"(opcional)"),sg()(),Tl(1083,"p"),tN(1084,"Define a cor do item."),sg(),Tl(1085,"p"),tN(1086,"Valores v\xE1lidos:"),sg(),Tl(1087,"ul")(1088,"li")(1089,"code"),tN(1090,"default"),sg()(),Tl(1091,"li")(1092,"code"),tN(1093,"danger"),sg()()()()(),Tl(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),tN(1098," url"),Gl(1099,"br"),sg()()(),Tl(1100,"td",18)(1101,"code",26),tN(1102,"string"),sg()(),Tl(1103,"td",21)(1104,"em")(1105,"strong"),tN(1106,"(opcional)"),sg()(),Tl(1107,"p"),tN(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(1109,"p"),tN(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1111,"code"),tN(1112,"url"),sg(),tN(1113," \xE9 informada em um agrupador, o clique "),Tl(1114,"strong"),tN(1115,"n\xE3o abrir\xE1 os subitens"),sg(),tN(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(1117,"blockquote")(1118,"p"),tN(1119,"Quando informada, tem prioridade sobre a propriedade "),Tl(1120,"code"),tN(1121,"action"),sg(),tN(1122,"."),sg()()()(),Tl(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),tN(1127," visible"),Gl(1128,"br"),sg()()(),Tl(1129,"td",18)(1130,"code",41),tN(1131,"boolean "),sg(),Tl(1132,"code",34),tN(1133," Function"),sg()(),Tl(1134,"td",21)(1135,"em")(1136,"strong"),tN(1137,"(opcional)"),sg()(),Tl(1138,"p"),tN(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(1140,"h4",33)(1141,"code",5),tN(1142,"PoPageDefaultLiterals"),sg()(),Tl(1143,"div",2)(1144,"p"),tN(1145,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1146,"code"),tN(1147,"po-page-default"),sg(),tN(1148,"."),sg()(),Tl(1149,"h4",10),tN(1150,"Propriedades"),sg(),Tl(1151,"table",11)(1152,"tr",12)(1153,"th",13),tN(1154,"Nome"),sg(),Tl(1155,"th",13),tN(1156,"Tipo"),sg(),Tl(1157,"th",13),tN(1158,"Descri\xE7\xE3o"),sg()(),Tl(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),tN(1163," otherActions"),Gl(1164,"br"),sg()()(),Tl(1165,"td",18)(1166,"code",26),tN(1167,"string"),sg()(),Tl(1168,"td",21)(1169,"em")(1170,"strong"),tN(1171,"(opcional)"),sg()(),Tl(1172,"p"),tN(1173,"Legenda do "),Tl(1174,"code"),tN(1175,"po-dropdown"),sg(),tN(1176," de a\xE7\xF5es."),sg()()()(),Tl(1177,"h3"),tN(1178,"Enums"),sg(),Tl(1179,"h4",4)(1180,"code",5),tN(1181,"PoPageActionsLayout"),sg()(),Tl(1182,"div",2)(1183,"p"),tN(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),Tl(1185,"code"),tN(1186,"po-page-default"),sg(),tN(1187,"."),sg(),Tl(1188,"blockquote")(1189,"p"),tN(1190,"Compat\xEDvel com todos os valores de "),Tl(1191,"code"),tN(1192,"PoPageHeaderType"),sg(),tN(1193,"."),sg()()(),Tl(1194,"h4",10),tN(1195,"Propriedades"),sg(),Tl(1196,"table",11)(1197,"tr",12)(1198,"th",13),tN(1199,"Nome"),sg(),Tl(1200,"th",13),tN(1201,"Descri\xE7\xE3o"),sg()(),Tl(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),tN(1206," default"),Gl(1207,"br"),sg()()(),Tl(1208,"td",21)(1209,"p"),tN(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),Tl(1211,"em"),tN(1212,"dropdown"),sg(),tN(1213,"."),sg(),Tl(1214,"p"),tN(1215,"Quando "),Tl(1216,"code"),tN(1217,"PoPageAction.kind"),sg(),tN(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),Tl(1219,"code"),tN(1220,"primary"),sg(),tN(1221,`
e as demais recebem `),Tl(1222,"code"),tN(1223,"secondary"),sg(),tN(1224,"."),sg()()(),Tl(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),tN(1229," dropdown"),Gl(1230,"br"),sg()()(),Tl(1231,"td",21)(1232,"p"),tN(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),Tl(1234,"em"),tN(1235,"dropdown"),sg(),tN(1236,"."),sg()()(),Tl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),tN(1241," mixed"),Gl(1242,"br"),sg()()(),Tl(1243,"td",21)(1244,"p"),tN(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),Tl(1246,"em"),tN(1247,"dropdown"),sg(),tN(1248,"."),sg()()()(),Tl(1249,"h4",4)(1250,"code",5),tN(1251,"PoPageHeaderType"),sg()(),Tl(1252,"div",2)(1253,"p"),tN(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),Tl(1255,"code"),tN(1256,"po-page-default"),sg(),tN(1257,"."),sg()(),Tl(1258,"h4",10),tN(1259,"Propriedades"),sg(),Tl(1260,"table",11)(1261,"tr",12)(1262,"th",13),tN(1263,"Nome"),sg(),Tl(1264,"th",13),tN(1265,"Descri\xE7\xE3o"),sg()(),Tl(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),tN(1270," primary"),Gl(1271,"br"),sg()()(),Tl(1272,"td",21)(1273,"p"),tN(1274,"Layout padr\xE3o com suporte a "),Tl(1275,"code"),tN(1276,"p-breadcrumb"),sg(),tN(1277,"."),sg()()(),Tl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),tN(1282," secondary"),Gl(1283,"br"),sg()()(),Tl(1284,"td",21)(1285,"p"),tN(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),sg(),Tl(1287,"blockquote")(1288,"p"),tN(1289,"Incompat\xEDvel com "),Tl(1290,"code"),tN(1291,"p-breadcrumb"),sg(),tN(1292,"."),sg()()()(),Tl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),tN(1297," tertiary"),Gl(1298,"br"),sg()()(),Tl(1299,"td",21)(1300,"p"),tN(1301,"Layout simplificado sem bot\xE3o de retorno."),sg(),Tl(1302,"blockquote")(1303,"p"),tN(1304,"Incompat\xEDvel com "),Tl(1305,"code"),tN(1306,"p-breadcrumb"),sg(),tN(1307,"."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-page-default-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,xe,Pe,Ce,we],encapsulation:2})}return l})();var Re=[{path:"",component:De}],_e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(Re),vL]})}return l})();var Dt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,_e]})}return l})();export{Dt as DocPoPageDefaultModule};