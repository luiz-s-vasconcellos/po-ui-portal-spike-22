import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,s,r as r$1,E,bC as Vp,Z as OI,_ as Jp,J as wl,a2 as GE,R as ng,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,z as Ux,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,cP as Zp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,bR as Qn,be as ri,aQ as dt,$ as xz,cQ as wO,X as we,as as $l,at as uo,au as fo,a3 as D3,a4 as oN,cb as Wx,a5 as aN,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var qe=()=>({name:"Registro 1",email:"register@po-ui.com"}),ze=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Ne=(a,C)=>[a,C];function We(a,C){if(a&1&&(wl(0,"div",2),Ul(1,"po-info",3),ng()),a&2){let o=C.$implicit;Pp(),YE("p-value",o.email);}}var De=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic"]],standalone:false,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(wl(0,"po-list-view",0),GE(1,We,2,1,"ng-template",1),ng()),l&2&&YE("p-items",eN(3,Ne,Qx(1,qe),Qx(2,ze)));},dependencies:[Vp,OI,Jp],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO List View Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-list-view-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,De],encapsulation:2})}return a})();function $e(a,C){if(a&1&&(wl(0,"div",5),Ul(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),ng()),a&2){let o=C.$implicit;Pp(),YE("p-value",o.name),Pp(),YE("p-value",o.email),Pp(),YE("p-value",o.location),Pp(),YE("p-value",o.phone);}}function Qe(a,C){if(a&1&&(wl(0,"div",5),Ul(1,"po-info",26)(2,"po-info",27),ng()),a&2){let o=C.$implicit;Pp(),YE("p-value",o.company),Pp(),YE("p-value",o.zipCode);}}var ke=(()=>{class a{poNotification=f(Bp);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:true},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore();}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm();}addItem(){this.items.push(this.generateNewItem(this.items.length+1));}changeAction(o){this.titleAction=o;}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?s(r$1({},o),{disabled:!this.properties.includes("select")}):o);}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm();}showMore(){this.addItem();}generateNewItem(o){return {name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null};}showAction(o){this.poNotification.success(`Action clicked: ${o}`);}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs"]],standalone:false,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-list-view",2),ut("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),GE(1,$e,5,4,"ng-template",3)(2,Qe,3,2,"ng-template",4),ng(),Ul(3,"po-divider"),wl(4,"div",5)(5,"po-button",6),ut("p-click",function(){return n.addItem()}),ng()(),Ul(6,"po-divider"),wl(7,"div",5),Ul(8,"po-info",7),ng(),Ul(9,"po-divider"),wl(10,"form",null,0)(12,"div",5)(13,"po-select",8),pw("ngModelChange",function(p){return Qy(d),$x(n.propertyTitle,p)||(n.propertyTitle=p),Jy(p)}),ng(),$0(),wl(14,"po-number",9),pw("ngModelChange",function(p){return Qy(d),$x(n.height,p)||(n.height=p),Jy(p)}),ut("p-change",function(){return n.changeLiterals()}),ng(),$0(),wl(15,"po-input",10),pw("ngModelChange",function(p){return Qy(d),$x(n.propertyLinkValue,p)||(n.propertyLinkValue=p),Jy(p)}),ng(),$0(),wl(16,"po-input",11),pw("ngModelChange",function(p){return Qy(d),$x(n.literals,p)||(n.literals=p),Jy(p)}),ut("p-change",function(){return n.changeLiterals()}),ng(),$0(),wl(17,"po-radio-group",12),pw("ngModelChange",function(p){return Qy(d),$x(n.componentsSize,p)||(n.componentsSize=p),Jy(p)}),ng(),$0(),ng(),wl(18,"div",5)(19,"po-checkbox-group",13),pw("ngModelChange",function(p){return Qy(d),$x(n.properties,p)||(n.properties=p),Jy(p)}),ut("p-change",function(){return n.changeActionOptions()}),ng(),$0(),ng()(),Ul(20,"po-divider"),wl(21,"form",null,1)(23,"div",5)(24,"po-input",14),pw("ngModelChange",function(p){return Qy(d),$x(n.action.action,p)||(n.action.action=p),Jy(p)}),ng(),$0(),wl(25,"po-input",15),pw("ngModelChange",function(p){return Qy(d),$x(n.action.label,p)||(n.action.label=p),Jy(p)}),ng(),$0(),wl(26,"po-input",16),pw("ngModelChange",function(p){return Qy(d),$x(n.action.url,p)||(n.action.url=p),Jy(p)}),ng(),$0(),wl(27,"po-select",17),pw("ngModelChange",function(p){return Qy(d),$x(n.action.type,p)||(n.action.type=p),Jy(p)}),ng(),$0(),wl(28,"po-select",18),pw("ngModelChange",function(p){return Qy(d),$x(n.action.icon,p)||(n.action.icon=p),Jy(p)}),ng(),$0(),wl(29,"po-checkbox-group",19),pw("ngModelChange",function(p){return Qy(d),$x(n.action,p)||(n.action=p),Jy(p)}),ng(),$0(),ng(),wl(30,"div",5)(31,"po-button",20),ut("p-click",function(){return n.addAction(n.action)}),ng()()(),Ul(32,"po-divider"),wl(33,"div",5)(34,"po-button",21),ut("p-click",function(){return Qy(d),_x(22).reset(),Jy(n.restore())}),ng()();}if(l&2){let d=_x(22);YE("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),Pp(8),YE("p-value",n.titleAction),Pp(5),hw("ngModel",n.propertyTitle),YE("p-options",n.propertyTitleOptions),G0(),Pp(),hw("ngModel",n.height),G0(),Pp(),hw("ngModel",n.propertyLinkValue),G0(),Pp(),hw("ngModel",n.literals),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0(),Pp(2),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(5),hw("ngModel",n.action.action),G0(),Pp(),hw("ngModel",n.action.label),G0(),Pp(),hw("ngModel",n.action.url),G0(),Pp(),hw("ngModel",n.action.type),YE("p-options",n.typeOptions),G0(),Pp(),hw("ngModel",n.action.icon),YE("p-options",n.iconOptions),G0(),Pp(),hw("ngModel",n.action),YE("p-options",n.actionOptions),G0(),Pp(2),YE("p-disabled",d.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ha,ga,ya,Vp,OI,Jp,Zp],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO List View Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-list-view-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ze,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ke],encapsulation:2})}return a})();var $=(()=>{class a{getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Xe=["detailsModal"];function et(a,C){if(a&1&&(wl(0,"div",6),Ul(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),oN(4,"uppercase"),ng()),a&2){let o=C.$implicit;Pp(),YE("p-value",o.idCard),Pp(),YE("p-value",o.jobDescription),Pp(),YE("p-value",Wx(aN(4,4,o.hireStatus)));}}function tt(a,C){if(a&1&&(wl(0,"div",6),Ul(1,"po-info",17)(2,"po-info",18),ng()),a&2){let o=C.$implicit;Pp(),YE("p-value",o.age),Pp(),YE("p-value",o.city);}}var Ie=(()=>{class a{poNotification=f(Bp);hiringProcessesService=f($);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=false;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses];}formatTitle(o){return `${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open();}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!");}disableHireButton(){return !this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!");}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)));}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`;}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case "progress":o.call(this,l);break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=false;}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&$l(Xe,7),l&2){let d;uo(d=fo())&&(n.detailsModalElement=d.first);}},standalone:false,features:[we([$])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(wl(0,"po-page-list",1)(1,"po-list-view",2),ut("p-title-action",function(c){return n.showDetailModal(c)}),GE(2,et,5,6,"ng-template",3)(3,tt,3,2,"ng-template",4),ng(),wl(4,"po-modal",5,0)(6,"div",6)(7,"div",7),Ul(8,"po-avatar",8),ng(),wl(9,"div",9)(10,"div",10),Ul(11,"po-tag",11),ng(),wl(12,"div",10),Ul(13,"po-info",12),ng(),wl(14,"div",10),Ul(15,"po-info",13),ng()()()()()),l&2&&(YE("p-actions",n.pageActions)("p-filter",n.filterSettings),Pp(),YE("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),Pp(),YE("p-title",n.formatTitle),Pp(),YE("p-show-detail",n.showDetail),Pp(),YE("p-title",n.titleDetailsModal),Pp(7),YE("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),Pp(2),YE("p-value",n.selectedActionItem.email),Pp(2),YE("p-value",n.selectedActionItem.telephone));},dependencies:[Qn,ri,Vp,OI,Jp,Zp,dt,xz,wO],encapsulation:2,changeDetection:1})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO List View - Hiring Processes"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-list-view-hiring-processes"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,nt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ie],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-doc"]],standalone:false,decls:726,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoListViewModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-list-view"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-list-view"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),ng()(),wl(19,"p"),Ux(20,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(21,"pre")(22,"code"),Ux(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(24,"p"),Ux(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(26,"pre")(27,"code"),Ux(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoListViewComponent"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),wl(37,"em"),Ux(38,"templates"),ng(),wl(39,"strong")(40,"a",6),Ux(41,"p-list-view-content-template"),ng()(),Ux(42,` e
`),wl(43,"strong")(44,"a",7),Ux(45,"p-list-view-detail-template"),ng()(),Ux(46,"."),ng(),wl(47,"p"),Ux(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),wl(49,"strong")(50,"a",7),Ux(51,"p-list-view-detail-template"),ng()(),Ux(52,". "),ng()(),wl(53,"div",8)(54,"h4",9),Ux(55,"Seletor"),ng(),wl(56,"pre",10),Ux(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),ng()(),wl(58,"h4",11),Ux(59,"Propriedades"),ng(),wl(60,"table",12)(61,"tr",13)(62,"th",14),Ux(63,"Nome"),ng(),wl(64,"th",14),Ux(65,"Tipo"),ng(),wl(66,"th",14),Ux(67,"Padr\xE3o"),ng(),wl(68,"th",14),Ux(69,"Descri\xE7\xE3o"),ng()(),wl(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),Ux(74," p-actions"),Ul(75,"br"),ng()()(),wl(76,"td",19)(77,"code",20),Ux(78,"PoListViewAction[]"),ng()(),wl(79,"td",21),Ux(80,"-"),ng(),wl(81,"td",22)(82,"em")(83,"strong"),Ux(84,"(opcional)"),ng()(),wl(85,"p"),Ux(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),ng()()(),wl(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),Ux(91," p-components-size"),Ul(92,"br"),ng()()(),wl(93,"td",19)(94,"code",23),Ux(95,"string"),ng()(),wl(96,"td",21)(97,"p")(98,"code"),Ux(99,"medium"),ng()()(),wl(100,"td",22)(101,"em")(102,"strong"),Ux(103,"(opcional)"),ng()(),wl(104,"p"),Ux(105,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(106,"ul")(107,"li")(108,"code"),Ux(109,"small"),ng(),Ux(110,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(111,"li")(112,"code"),Ux(113,"medium"),ng(),Ux(114,": aplica a medida medium de cada componente."),ng()(),wl(115,"blockquote")(116,"p"),Ux(117,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(118,"code"),Ux(119,"medium"),ng(),Ux(120,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(121,"a",24),Ux(122,"po-theme"),ng(),Ux(123,"."),ng()()()(),wl(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),Ux(128," p-height"),Ul(129,"br"),ng()()(),wl(130,"td",19)(131,"code",25),Ux(132,"number"),ng()(),wl(133,"td",21),Ux(134,"-"),ng(),wl(135,"td",22)(136,"em")(137,"strong"),Ux(138,"(opcional)"),ng()(),wl(139,"p"),Ux(140,"Define a altura do "),wl(141,"code"),Ux(142,"po-list-view"),ng(),Ux(143," em "),wl(144,"em"),Ux(145,"pixels"),ng(),Ux(146,"."),ng()()(),wl(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),Ux(151," p-hide-select-all"),Ul(152,"br"),ng()()(),wl(153,"td",19)(154,"code",26),Ux(155,"boolean"),ng()(),wl(156,"td",21)(157,"p")(158,"code"),Ux(159,"false"),ng()()(),wl(160,"td",22)(161,"p"),Ux(162,"Esconde o "),wl(163,"em"),Ux(164,"checkbox"),ng(),Ux(165," para sele\xE7\xE3o de todos os itens."),ng()()(),wl(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),Ux(170," p-items"),Ul(171,"br"),ng()()(),wl(172,"td",19)(173,"code",27),Ux(174,"any[]"),ng()(),wl(175,"td",21),Ux(176,"-"),ng(),wl(177,"td",22)(178,"p"),Ux(179,"Lista de itens que ser\xE3o exibidos no componente."),ng()()(),wl(180,"tr",15)(181,"td",16)(182,"div",17)(183,"span",18),Ux(184," p-literals"),Ul(185,"br"),ng()()(),wl(186,"td",19)(187,"code",28),Ux(188,"PoListViewLiterals"),ng()(),wl(189,"td",21),Ux(190,"-"),ng(),wl(191,"td",22)(192,"em")(193,"strong"),Ux(194,"(opcional)"),ng()(),wl(195,"p"),Ux(196,"Objeto com as literais usadas no "),wl(197,"code"),Ux(198,"po-list-view"),ng(),Ux(199,"."),ng(),wl(200,"p"),Ux(201,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(202,"pre")(203,"code"),Ux(204,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),ng()(),wl(205,"p"),Ux(206,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(207,"pre")(208,"code"),Ux(209,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),ng()(),wl(210,"p"),Ux(211,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(212,"pre")(213,"code"),Ux(214,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),ng()(),wl(215,"blockquote")(216,"p"),Ux(217,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(218,"a",29)(219,"code"),Ux(220,"PoI18nService"),ng()(),Ux(221," ou do browser."),ng()()()(),wl(222,"tr",15)(223,"td",16)(224,"div",17)(225,"span",18),Ux(226," p-property-link"),Ul(227,"br"),ng()()(),wl(228,"td",19)(229,"code",23),Ux(230,"string"),ng()(),wl(231,"td",21),Ux(232,"-"),ng(),wl(233,"td",22)(234,"em")(235,"strong"),Ux(236,"(opcional)"),ng()(),wl(237,"p"),Ux(238,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),ng()()(),wl(239,"tr",15)(240,"td",16)(241,"div",17)(242,"span",18),Ux(243," p-property-title"),Ul(244,"br"),ng()()(),wl(245,"td",19)(246,"code",23),Ux(247,"string"),ng()(),wl(248,"td",21),Ux(249,"-"),ng(),wl(250,"td",22)(251,"em")(252,"strong"),Ux(253,"(opcional)"),ng()(),wl(254,"p"),Ux(255,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),ng()()(),wl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Ux(260," p-select"),Ul(261,"br"),ng()()(),wl(262,"td",19)(263,"code",26),Ux(264,"boolean"),ng()(),wl(265,"td",21)(266,"p")(267,"code"),Ux(268,"false"),ng()()(),wl(269,"td",22)(270,"em")(271,"strong"),Ux(272,"(opcional)"),ng()(),wl(273,"p"),Ux(274,"Habilita um "),wl(275,"em"),Ux(276,"checkbox"),ng(),Ux(277," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),wl(278,"code"),Ux(279,"$selected"),ng(),Ux(280,` para identificar se o
item est\xE1 selecionado, por exemplo:`),ng(),wl(281,"pre")(282,"code"),Ux(283,`item.$selected

// ou

item['$selected']
`),ng()()()(),wl(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),Ux(288," (p-show-detail)"),Ul(289,"br"),ng()()(),wl(290,"td",19)(291,"code",32),Ux(292,"EventEmitter"),ng()(),wl(293,"td",21),Ux(294,"-"),ng(),wl(295,"td",22)(296,"em")(297,"strong"),Ux(298,"(opcional)"),ng()(),wl(299,"p"),Ux(300,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),ng(),wl(301,"p"),Ux(302,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),ng()()(),wl(303,"tr",15)(304,"td",16)(305,"div",30)(306,"span",31),Ux(307," (p-show-more)"),Ul(308,"br"),ng()()(),wl(309,"td",19)(310,"code",32),Ux(311,"EventEmitter"),ng()(),wl(312,"td",21),Ux(313,"-"),ng(),wl(314,"td",22)(315,"em")(316,"strong"),Ux(317,"(opcional)"),ng()(),wl(318,"p"),Ux(319,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),ng(),wl(320,"blockquote")(321,"p"),Ux(322,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),ng()()()(),wl(323,"tr",15)(324,"td",16)(325,"div",17)(326,"span",18),Ux(327," p-show-more-disabled"),Ul(328,"br"),ng()()(),wl(329,"td",19)(330,"code",26),Ux(331,"boolean"),ng()(),wl(332,"td",21),Ux(333,"-"),ng(),wl(334,"td",22)(335,"em")(336,"strong"),Ux(337,"(opcional)"),ng()(),wl(338,"p"),Ux(339,"Indica que o bot\xE3o "),wl(340,"code"),Ux(341,"Carregar Mais Resultados"),ng(),Ux(342," ser\xE1 desabilitado."),ng()()(),wl(343,"tr",15)(344,"td",16)(345,"div",30)(346,"span",31),Ux(347," (p-title-action)"),Ul(348,"br"),ng()()(),wl(349,"td",19)(350,"code",32),Ux(351,"EventEmitter"),ng()(),wl(352,"td",21),Ux(353,"-"),ng(),wl(354,"td",22)(355,"em")(356,"strong"),Ux(357,"(opcional)"),ng()(),wl(358,"p"),Ux(359,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),ng(),wl(360,"p"),Ux(361,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),ng()()()(),wl(362,"h3"),Ux(363,"Interfaces"),ng(),wl(364,"h4",33)(365,"code",5),Ux(366,"PoListViewAction"),ng()(),wl(367,"div",2)(368,"p"),Ux(369,"Interface que define as a\xE7\xF5es do componente "),wl(370,"code"),Ux(371,"po-list-view"),ng(),Ux(372,"."),ng(),wl(373,"blockquote")(374,"p"),Ux(375,"As propriedades "),wl(376,"code"),Ux(377,"subItems"),ng(),Ux(378,", "),wl(379,"code"),Ux(380,"separator"),ng(),Ux(381,", "),wl(382,"code"),Ux(383,"url"),ng(),Ux(384," e "),wl(385,"code"),Ux(386,"selected"),ng(),Ux(387,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),ng()()(),wl(388,"h4",11),Ux(389,"Propriedades"),ng(),wl(390,"table",12)(391,"tr",13)(392,"th",14),Ux(393,"Nome"),ng(),wl(394,"th",14),Ux(395,"Tipo"),ng(),wl(396,"th",14),Ux(397,"Descri\xE7\xE3o"),ng()(),wl(398,"tr",15)(399,"td",16)(400,"div",17)(401,"span",18),Ux(402," action"),Ul(403,"br"),ng()()(),wl(404,"td",19)(405,"code",34),Ux(406,"Function"),ng()(),wl(407,"td",22)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(413,"p"),Ux(414,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(415,"code"),Ux(416,"subItems"),ng(),Ux(417,"."),ng(),wl(418,"blockquote")(419,"p"),Ux(420,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(421,"em"),Ux(422,"bind"),ng(),Ux(423,`:
`),wl(424,"code"),Ux(425,"action: this.myFunction.bind(this)"),ng()()()()(),wl(426,"tr",15)(427,"td",16)(428,"div",17)(429,"span",18),Ux(430," disabled"),Ul(431,"br"),ng()()(),wl(432,"td",19)(433,"code",26),Ux(434,"boolean "),ng(),wl(435,"code",34),Ux(436," Function"),ng()(),wl(437,"td",22)(438,"em")(439,"strong"),Ux(440,"(opcional)"),ng()(),wl(441,"p"),Ux(442,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),Ux(447," icon"),Ul(448,"br"),ng()()(),wl(449,"td",19)(450,"code",23),Ux(451,"string "),ng(),wl(452,"code",35),Ux(453," TemplateRef<void>"),ng()(),wl(454,"td",22)(455,"em")(456,"strong"),Ux(457,"(opcional)"),ng()(),wl(458,"p"),Ux(459,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(460,"p"),Ux(461,"Aceita \xEDcones da "),wl(462,"a",36),Ux(463,"Biblioteca de \xEDcones"),ng(),Ux(464,`, fontes externas (ex: Font Awesome)
ou um `),wl(465,"code"),Ux(466,"TemplateRef"),ng(),Ux(467," para \xEDcones customizados."),ng(),wl(468,"pre")(469,"code"),Ux(470,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),Ux(475," label"),Ul(476,"br"),ng()()(),wl(477,"td",19)(478,"code",23),Ux(479,"string"),ng()(),wl(480,"td",22)(481,"p"),Ux(482,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(483,"p"),Ux(484,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(485,"code"),Ux(486,"subItems"),ng(),Ux(487,"."),ng()()(),wl(488,"tr",15)(489,"td",16)(490,"div",17)(491,"span",18),Ux(492," selected"),Ul(493,"br"),ng()()(),wl(494,"td",19)(495,"code",26),Ux(496,"boolean"),ng()(),wl(497,"td",22)(498,"em")(499,"strong"),Ux(500,"(opcional)"),ng()(),wl(501,"p"),Ux(502,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),Ux(507," separator"),Ul(508,"br"),ng()()(),wl(509,"td",19)(510,"code",26),Ux(511,"boolean"),ng()(),wl(512,"td",22)(513,"em")(514,"strong"),Ux(515,"(opcional)"),ng()(),wl(516,"p"),Ux(517,"Atribui uma linha separadora acima do item."),ng()()(),wl(518,"tr",15)(519,"td",16)(520,"div",17)(521,"span",18),Ux(522," subItems"),Ul(523,"br"),ng()()(),wl(524,"td",19)(525,"code",37),Ux(526,"Array<PoPopupAction>"),ng()(),wl(527,"td",22)(528,"em")(529,"strong"),Ux(530,"(opcional)"),ng()(),wl(531,"p"),Ux(532,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(533,"p"),Ux(534,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(535,"blockquote")(536,"p"),Ux(537,"As propriedades "),wl(538,"code"),Ux(539,"disabled"),ng(),Ux(540,", "),wl(541,"code"),Ux(542,"type"),ng(),Ux(543," e "),wl(544,"code"),Ux(545,"visible"),ng(),Ux(546," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(547,"blockquote")(548,"p"),Ux(549,"Quando "),wl(550,"code"),Ux(551,"url"),ng(),Ux(552," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(553,"blockquote")(554,"p"),Ux(555,"Em subn\xEDveis aninhados, o "),wl(556,"code"),Ux(557,"icon"),ng(),Ux(558," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(559,"tr",15)(560,"td",16)(561,"div",17)(562,"span",18),Ux(563," type"),Ul(564,"br"),ng()()(),wl(565,"td",19)(566,"code",23),Ux(567,"string"),ng()(),wl(568,"td",22)(569,"em")(570,"strong"),Ux(571,"(opcional)"),ng()(),wl(572,"p"),Ux(573,"Define a cor do item."),ng(),wl(574,"p"),Ux(575,"Valores v\xE1lidos:"),ng(),wl(576,"ul")(577,"li")(578,"code"),Ux(579,"default"),ng()(),wl(580,"li")(581,"code"),Ux(582,"danger"),ng()()()()(),wl(583,"tr",15)(584,"td",16)(585,"div",17)(586,"span",18),Ux(587," url"),Ul(588,"br"),ng()()(),wl(589,"td",19)(590,"code",23),Ux(591,"string"),ng()(),wl(592,"td",22)(593,"em")(594,"strong"),Ux(595,"(opcional)"),ng()(),wl(596,"p"),Ux(597,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(598,"p"),Ux(599,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(600,"code"),Ux(601,"url"),ng(),Ux(602," \xE9 informada em um agrupador, o clique "),wl(603,"strong"),Ux(604,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(605,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(606,"blockquote")(607,"p"),Ux(608,"Quando informada, tem prioridade sobre a propriedade "),wl(609,"code"),Ux(610,"action"),ng(),Ux(611,"."),ng()()()(),wl(612,"tr",15)(613,"td",16)(614,"div",17)(615,"span",18),Ux(616," visible"),Ul(617,"br"),ng()()(),wl(618,"td",19)(619,"code",26),Ux(620,"boolean "),ng(),wl(621,"code",34),Ux(622," Function"),ng()(),wl(623,"td",22)(624,"em")(625,"strong"),Ux(626,"(opcional)"),ng()(),wl(627,"p"),Ux(628,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(629,"h4",33)(630,"code",5),Ux(631,"PoListViewLiterals"),ng()(),wl(632,"div",2)(633,"p"),Ux(634,"Interface para defini\xE7\xE3o das literais usadas no "),wl(635,"code"),Ux(636,"po-list-view"),ng(),Ux(637,"."),ng()(),wl(638,"h4",11),Ux(639,"Propriedades"),ng(),wl(640,"table",12)(641,"tr",13)(642,"th",14),Ux(643,"Nome"),ng(),wl(644,"th",14),Ux(645,"Tipo"),ng(),wl(646,"th",14),Ux(647,"Descri\xE7\xE3o"),ng()(),wl(648,"tr",15)(649,"td",16)(650,"div",17)(651,"span",18),Ux(652," hideDetails"),Ul(653,"br"),ng()()(),wl(654,"td",19)(655,"code",23),Ux(656,"string"),ng()(),wl(657,"td",22)(658,"em")(659,"strong"),Ux(660,"(opcional)"),ng()(),wl(661,"p"),Ux(662,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),ng()()(),wl(663,"tr",15)(664,"td",16)(665,"div",17)(666,"span",18),Ux(667," loadMoreData"),Ul(668,"br"),ng()()(),wl(669,"td",19)(670,"code",23),Ux(671,"string"),ng()(),wl(672,"td",22)(673,"em")(674,"strong"),Ux(675,"(opcional)"),ng()(),wl(676,"p"),Ux(677,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),ng()()(),wl(678,"tr",15)(679,"td",16)(680,"div",17)(681,"span",18),Ux(682," noData"),Ul(683,"br"),ng()()(),wl(684,"td",19)(685,"code",23),Ux(686,"string"),ng()(),wl(687,"td",22)(688,"em")(689,"strong"),Ux(690,"(opcional)"),ng()(),wl(691,"p"),Ux(692,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),ng()()(),wl(693,"tr",15)(694,"td",16)(695,"div",17)(696,"span",18),Ux(697," selectAll"),Ul(698,"br"),ng()()(),wl(699,"td",19)(700,"code",23),Ux(701,"string"),ng()(),wl(702,"td",22)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"R\xF3tulo do "),wl(708,"code"),Ux(709,"checkbox"),ng(),Ux(710," da op\xE7\xE3o de selecionar todos."),ng()()(),wl(711,"tr",15)(712,"td",16)(713,"div",17)(714,"span",18),Ux(715," showDetails"),Ul(716,"br"),ng()()(),wl(717,"td",19)(718,"code",23),Ux(719,"string"),ng()(),wl(720,"td",22)(721,"em")(722,"strong"),Ux(723,"(opcional)"),ng()(),wl(724,"p"),Ux(725,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-list-view-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,Te,Fe,Oe,He],encapsulation:2})}return a})();var lt=[{path:"",component:Be}],je=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(lt),vL]})}return a})();var ti=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,je]})}return a})();export{ti as DocPoListViewModule};