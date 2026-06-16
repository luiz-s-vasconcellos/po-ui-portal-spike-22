import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,a_ as Ue,K as KC,W as W$1,E,G as lr,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,bX as Kc,aL as di,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,cr as tr,bC as Vp,a3 as D3,al as lx,am as pw,an as $0,a2 as GE,ap as hw,aq as G0,as as $l,at as uo,au as fo,cR as vo,cS as fO$1,X as we$1,bq as qx,az as Qy,aB as $x,aA as Jy,cT as CVe}from'./main-6SPFG3VI.js';var Ve=()=>({label:"PO UI - Angular Framework",link:"/"}),Re=a=>[a],Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Ul(0,"po-menu",0),r&2&&YE("p-menus",Jx(2,Re,Qx(1,Ve)));},dependencies:[lr],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-menu-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,qe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return a})();function Be(a,H){if(a&1&&(wl(0,"div"),Ul(1,"span"),wl(2,"span",26),Ux(3),ng()()),a&2){let m=H.$implicit;Pp(),Ax(qx("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Pp(2),cg(" ",m.label," ");}}var we=(()=>{class a{changeDetector=f(Ue);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&$l(CVe,7),r&2){let s;uo(s=fo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=lx();wl(0,"div",1),Ul(1,"po-menu",2),wl(2,"po-page-default",3)(3,"div",4),Ul(4,"po-info",5)(5,"po-button-group",6),ng(),Ul(6,"po-divider"),wl(7,"div",4),Ul(8,"po-info",7),wl(9,"form",null,0)(11,"po-switch",8),pw("ngModelChange",function(l){return Qy(s),$x(i.filter,l)||(i.filter=l),Jy(l)}),ut("ngModelChange",function(l){return i.onFilterChange(l)}),ng(),$0(),wl(12,"po-switch",9),pw("ngModelChange",function(l){return Qy(s),$x(i.searchTreeItems,l)||(i.searchTreeItems=l),Jy(l)}),ng(),$0(),wl(13,"po-select",10),pw("ngModelChange",function(l){return Qy(s),$x(i.parent,l)||(i.parent=l),Jy(l)}),ng(),$0(),wl(14,"po-input",11),pw("ngModelChange",function(l){return Qy(s),$x(i.label,l)||(i.label=l),Jy(l)}),ng(),$0(),wl(15,"po-input",12),pw("ngModelChange",function(l){return Qy(s),$x(i.shortLabel,l)||(i.shortLabel=l),Jy(l)}),ng(),$0(),wl(16,"po-url",13),pw("ngModelChange",function(l){return Qy(s),$x(i.link,l)||(i.link=l),Jy(l)}),ng(),$0(),wl(17,"po-select",14),pw("ngModelChange",function(l){return Qy(s),$x(i.badgeColor,l)||(i.badgeColor=l),Jy(l)}),GE(18,Be,4,4,"ng-template",15),ng(),$0(),wl(19,"po-number",16),pw("ngModelChange",function(l){return Qy(s),$x(i.badgeValue,l)||(i.badgeValue=l),Jy(l)}),ng(),$0(),wl(20,"po-select",17),pw("ngModelChange",function(l){return Qy(s),$x(i.icon,l)||(i.icon=l),Jy(l)}),ng(),$0(),wl(21,"div",4)(22,"po-button",18),ut("p-click",function(){return i.addMenuItem()}),ng()(),Ul(23,"po-divider"),wl(24,"po-input",19),pw("ngModelChange",function(l){return Qy(s),$x(i.service,l)||(i.service=l),Jy(l)}),ng(),$0(),wl(25,"po-input",20),pw("ngModelChange",function(l){return Qy(s),$x(i.menuParams,l)||(i.menuParams=l),Jy(l)}),ut("p-change-model",function(l){return i.onChangeParams(l)}),ng(),$0(),wl(26,"po-input",21),pw("ngModelChange",function(l){return Qy(s),$x(i.logo,l)||(i.logo=l),Jy(l)}),ng(),$0(),wl(27,"po-input",22),pw("ngModelChange",function(l){return Qy(s),$x(i.shortLogo,l)||(i.shortLogo=l),Jy(l)}),ng(),$0(),wl(28,"po-input",23),pw("ngModelChange",function(l){return Qy(s),$x(i.logoLink,l)||(i.logoLink=l),Jy(l)}),ng(),$0(),wl(29,"po-radio-group",24),pw("ngModelChange",function(l){return Qy(s),$x(i.componentsSize,l)||(i.componentsSize=l),Jy(l)}),ng(),$0(),wl(30,"div",4)(31,"po-button",25),ut("p-click",function(){return i.restore()}),ng()()()()()();}r&2&&(Pp(),YE("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Pp(4),YE("p-buttons",i.buttons),Pp(3),YE("p-value",i.menuItemSelected),Pp(3),hw("ngModel",i.filter),G0(),Pp(),hw("ngModel",i.searchTreeItems),YE("p-disabled",!i.filter),G0(),Pp(),hw("ngModel",i.parent),YE("p-options",i.parentList),G0(),Pp(),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.shortLabel),G0(),Pp(),hw("ngModel",i.link),G0(),Pp(),hw("ngModel",i.badgeColor),YE("p-options",i.badgeColorList),G0(),Pp(2),hw("ngModel",i.badgeValue),YE("p-max",i.maxBadgeValue),G0(),Pp(),hw("ngModel",i.icon),YE("p-disabled",i.parent)("p-options",i.iconsOptions),G0(),Pp(4),hw("ngModel",i.service),G0(),Pp(),hw("ngModel",i.menuParams),G0(),Pp(),hw("ngModel",i.logo),G0(),Pp(),hw("ngModel",i.shortLogo),G0(),Pp(),hw("ngModel",i.logoLink),G0(),Pp(),hw("ngModel",i.componentsSize),YE("p-options",i.componentsSizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,Kc,di,Yo,ha,ga,ya,na,tr,Vp,lr,D3],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-wrapper">
  <po-menu
    [p-components-size]="componentsSize"
    [p-filter]="filter"
    [p-logo]="logo"
    [p-logo-link]="logoLink"
    [p-menus]="menuItems"
    [p-params]="params"
    [p-service]="service"
    [p-short-logo]="shortLogo"
    [p-search-tree-items]="searchTreeItems"
  >
  </po-menu>

  <po-page-default p-title="PO Menu">
    <div class="po-row">
      <po-info class="po-lg-12" p-label="Methods" p-value="Only if all menu items have icon and short label.">
      </po-info>

      <po-button-group class="po-lg-12" [p-buttons]="buttons"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>

      <form #f="ngForm">
        <po-switch
          class="po-lg-6"
          name="filterMenu"
          [(ngModel)]="filter"
          p-label="Filter"
          p-label-off="Disabled"
          p-label-on="Enabled"
          (ngModelChange)="onFilterChange($event)"
        >
        </po-switch>

        <po-switch
          class="po-lg-6"
          name="searchTreeItems"
          [(ngModel)]="searchTreeItems"
          p-label="Filter Search Tree Items"
          p-label-off="Disabled"
          p-label-on="Enabled"
          [p-disabled]="!filter"
        >
        </po-switch>

        <po-select
          class="po-md-4"
          name="parent"
          [(ngModel)]="parent"
          p-label="Parent"
          p-placeholder="Add new menu at root level"
          [p-options]="parentList"
        >
        </po-select>

        <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label" p-required> </po-input>

        <po-input class="po-md-4" name="shortLabel" [(ngModel)]="shortLabel" p-label="Short Label" p-required>
        </po-input>

        <po-url class="po-md-4" name="link" [(ngModel)]="link" p-label="External link" p-placeholder="http://">
        </po-url>

        <po-select
          class="po-md-4"
          name="badgeColor"
          [(ngModel)]="badgeColor"
          p-label="Badge color"
          p-placeholder="Select a color of badge"
          [p-options]="badgeColorList"
        >
          <ng-template p-select-option-template let-option>
            <div>
              <span class="sample-menu-circle sample-menu-vertical-middle po-{ { option.value }}"></span>
              <span class="sample-menu-vertical-middle"> { { option.label }} </span>
            </div>
          </ng-template>
        </po-select>

        <po-number
          class="po-md-4"
          name="badgeValue"
          [(ngModel)]="badgeValue"
          p-label="Badge value"
          p-required
          [p-max]="maxBadgeValue"
        >
        </po-number>

        <po-select
          class="po-md-4"
          name="icon"
          [(ngModel)]="icon"
          p-label="Icon"
          [p-disabled]="parent"
          [p-options]="iconsOptions"
        >
        </po-select>

        <div class="po-row">
          <po-button class="po-xl-2 po-md-4" p-label="Add" (p-click)="addMenuItem()"> </po-button>
        </div>

        <po-divider />

        <po-input
          class="po-md-6"
          name="service"
          [(ngModel)]="service"
          p-clean
          p-label="Service"
          p-help="https://po-sample-api.onrender.com/v1/menus"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="menuParams"
          [(ngModel)]="menuParams"
          p-clean
          p-label="Params"
          p-help='Enter a value to be sent as a parameter. Ex: { "departament": "technology" }'
          (p-change-model)="onChangeParams($event)"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="logo"
          [(ngModel)]="logo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/po.png"
          p-label="Logo"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="shortLogo"
          [(ngModel)]="shortLogo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/logo-dgeni.png"
          p-label="Short Logo"
        >
        </po-input>

        <po-input
          class="po-md-12"
          name="logo link"
          [(ngModel)]="logoLink"
          p-clean
          p-help="ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'"
          p-label="Logo link"
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
          <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore()"> </po-button>
        </div>
      </form>
    </div>
  </po-page-default>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoMenuComponent,
  PoMenuItem,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-labs',
  templateUrl: './sample-po-menu-labs.component.html',
  styleUrls: ['./sample-po-menu-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  badgeColor: string;
  badgeValue: number;
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Collapse', action: this.collapse.bind(this) },
    { label: 'Expand', action: this.expand.bind(this) },
    { label: 'Toggle', action: this.toggle.bind(this) }
  ];
  componentsSize: string;
  filter: boolean;
  icon: string;
  label: string;
  link: string;
  logo: string;
  logoLink: string;
  maxBadgeValue = 999999999999999;
  menuItems: Array<PoMenuItem>;
  menuItemSelected: string;
  menuParams: string;
  params: any;
  parent: string;
  parentList: Array<PoSelectOption>;
  service: string;
  shortLabel: string;
  shortLogo: string;
  searchTreeItems: boolean;

  public readonly badgeColorList: Array<PoSelectOption> = [
    { label: 'color-01', value: 'color-01' },
    { label: 'color-02', value: 'color-02' },
    { label: 'color-03', value: 'color-03' },
    { label: 'color-04', value: 'color-04' },
    { label: 'color-05', value: 'color-05' },
    { label: 'color-06', value: 'color-06' },
    { label: 'color-07', value: 'color-07' },
    { label: 'color-08', value: 'color-08' },
    { label: 'color-09', value: 'color-09' },
    { label: 'color-10', value: 'color-10' },
    { label: 'color-11', value: 'color-11' },
    { label: 'color-12', value: 'color-12' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconsOptions: Array<PoSelectOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected.bind(this),
        icon: this.icon,
        label: this.label,
        link: this.link,
        shortLabel: this.shortLabel,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected.bind(this),
        label: this.label,
        link: this.link,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  onChangeParams(params: any) {
    try {
      this.params = JSON.parse(params);
    } catch (e) {
      this.params = undefined;
    }
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.logo = undefined;
    this.logoLink = undefined;
    this.params = undefined;
    this.parentList = [];
    this.menuItems = [];
    this.menuParams = undefined;
    this.service = '';
    this.shortLogo = undefined;
    this.searchTreeItems = false;

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private collapse() {
    this.menu.collapse();
  }

  private expand() {
    this.menu.expand();
  }

  private formReset() {
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.componentsSize = 'medium';
    this.icon = undefined;
    this.label = 'PO Menu';
    this.link = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<PoMenuItem>, id: string): PoMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private toggle() {
    this.menu.toggle();
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push(<PoSelectOption>{ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push(<PoSelectOption>{ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push(<PoSelectOption>{ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

  onFilterChange(newValue: boolean) {
    this.filter = newValue;
    if (!this.filter && this.searchTreeItems) {
      this.searchTreeItems = false;
    }
  }
}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-menu-labs"),ng(),Ul(29,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return a})();var W=(()=>{class a{http=f(KC);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(W$1(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function He(a,H){a&1&&(wl(0,"div",5)(1,"p"),Ux(2,"Welcome,"),ng(),wl(3,"p")(4,"b"),Ux(5," John Doe "),ng()()());}var _e=(()=>{class a{samplePoMenuHumanResourcesService=f(W);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([W])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"po-menu",1),GE(2,He,6,0,"div",2),ng(),Ul(3,"po-toolbar",3)(4,"po-page-default",4),ng()),r&2&&(Pp(),YE("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Pp(2),YE("p-show-notification",false),Pp(),YE("p-title",i.menuItemSelected));},dependencies:[lr,vo,D3,fO$1],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu - Human Resources"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-wrapper">
  <po-menu
    p-collapsed
    p-filter
    [p-menus]="menus"
    [p-service]="samplePoMenuHumanResourcesService"
    [p-automatic-toggle]="true"
  >
    <div *p-menu-header-template class="po-p-2 po-font-title sample-menu-header-text-color">
      <p>Welcome,</p>
      <p>
        <b> John Doe </b>
      </p>
    </div>
  </po-menu>

  <po-toolbar p-title="PO - Human Resources" [p-show-notification]="false"></po-toolbar>

  <po-page-default [p-title]="menuItemSelected"></po-page-default>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';

@Component({
  selector: 'sample-po-menu-human-resources',
  templateUrl: './sample-po-menu-human-resources.component.html',
  providers: [SamplePoMenuHumanResourcesService],
  styleUrls: ['./sample-po-menu-human-resources.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuHumanResourcesComponent {
  samplePoMenuHumanResourcesService = inject(SamplePoMenuHumanResourcesService);

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Register user', action: this.printMenuAction.bind(this), icon: 'an an-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      action: this.printMenuAction.bind(this),
      icon: 'an an-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },
    {
      label: 'Useful links',
      icon: 'an an-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    },
    {
      label: 'Benefits',
      icon: 'an an-star',
      shortLabel: 'Benefits',
      subItems: [
        {
          label: 'Meal tickets',
          subItems: [
            { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
            {
              label: 'Extracts',
              action: this.printMenuAction.bind(this),
              subItems: [
                { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
                { label: 'Custom', action: this.printMenuAction.bind(this) }
              ]
            }
          ]
        },
        { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
      ]
    }
  ];

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMenuHumanResourcesService implements PoMenuFilter {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/menus';

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),ng(),wl(29,"pre",11),Ux(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-menu-human-resources"),ng(),Ul(33,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ne,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return a})();var Le=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoMenuModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-menu."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoMenuComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),ng(),wl(15,"p"),Ux(16,"O componente po-menu recebe uma lista de objetos do tipo "),wl(17,"code"),Ux(18,"MenuItem"),ng(),Ux(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),ng(),wl(20,"h4"),Ux(21,"Tokens customiz\xE1veis"),ng(),wl(22,"p"),Ux(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(24,"blockquote")(25,"p"),Ux(26,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(27,"a",6),Ux(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(29,"."),ng()(),wl(30,"table")(31,"thead")(32,"tr")(33,"th"),Ux(34,"Propriedade"),ng(),wl(35,"th"),Ux(36,"Descri\xE7\xE3o"),ng(),wl(37,"th"),Ux(38,"Valor Padr\xE3o"),ng()()(),wl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Ux(43,"Default Values"),ng()(),Ul(44,"td")(45,"td"),ng(),wl(46,"tr")(47,"td")(48,"code"),Ux(49,"--border-radius"),ng()(),wl(50,"td"),Ux(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(52,"td")(53,"code"),Ux(54,"var(--border-radius-md)"),ng()()(),wl(55,"tr")(56,"td")(57,"code"),Ux(58,"--border-color"),ng()(),wl(59,"td"),Ux(60,"Cor da borda"),ng(),wl(61,"td")(62,"code"),Ux(63,"var(--color-neutral-light-20)"),ng()()(),wl(64,"tr")(65,"td")(66,"code"),Ux(67,"--background-color"),ng()(),wl(68,"td"),Ux(69,"Cor de background"),ng(),wl(70,"td")(71,"code"),Ux(72,"Var(----color-neutral-light-05)"),ng()()(),wl(73,"tr")(74,"td")(75,"strong"),Ux(76,"Menu Footer"),ng()(),Ul(77,"td")(78,"td"),ng(),wl(79,"tr")(80,"td")(81,"code"),Ux(82,"--color"),ng()(),wl(83,"td"),Ux(84,"Cor principla do menu footer"),ng(),wl(85,"td")(86,"code"),Ux(87,"var(--color-action-default)"),ng()()(),wl(88,"tr")(89,"td")(90,"code"),Ux(91,"--font-size"),ng()(),wl(92,"td"),Ux(93,"Tamanho da fonte"),ng(),wl(94,"td")(95,"code"),Ux(96,"var(--font-size-default)"),ng()()(),wl(97,"tr")(98,"td")(99,"code"),Ux(100,"--line-height"),ng()(),wl(101,"td"),Ux(102,"Tamanho da label"),ng(),wl(103,"td")(104,"code"),Ux(105,"var(--line-height-md)"),ng()()(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--outline-color-focused"),ng()(),wl(110,"td"),Ux(111,"Cor do outline do estado de focus"),ng(),wl(112,"td")(113,"code"),Ux(114,"var(--color-action-focus)"),ng()()(),wl(115,"tr")(116,"td")(117,"code"),Ux(118,"--font-weight-lvl0"),ng()(),wl(119,"td"),Ux(120,"Peso da fonte"),ng(),wl(121,"td")(122,"code"),Ux(123,"var(--font-weight-bold)"),ng()()(),wl(124,"tr")(125,"td")(126,"strong"),Ux(127,"po-menu-item"),ng()(),Ul(128,"td")(129,"td"),ng(),wl(130,"tr")(131,"td")(132,"code"),Ux(133,"--font-family"),ng()(),wl(134,"td"),Ux(135,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(136,"td")(137,"code"),Ux(138,"var(--font-family-theme)"),ng()()(),wl(139,"tr")(140,"td")(141,"code"),Ux(142,"--font-size"),ng()(),wl(143,"td"),Ux(144,"Tamanho da fonte"),ng(),wl(145,"td")(146,"code"),Ux(147,"var(--font-size-default)"),ng()()(),wl(148,"tr")(149,"td")(150,"code"),Ux(151,"--line-height"),ng()(),wl(152,"td"),Ux(153,"Tamanho da label"),ng(),wl(154,"td")(155,"code"),Ux(156,"var(--line-height-md)"),ng()()(),wl(157,"tr")(158,"td")(159,"code"),Ux(160,"--border-radius"),ng()(),wl(161,"td"),Ux(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(163,"td")(164,"code"),Ux(165,"var(--border-radius-md)"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--color"),ng()(),wl(170,"td"),Ux(171,"Cor principal do item"),ng(),wl(172,"td")(173,"code"),Ux(174,"var(--color-action-default)"),ng()()(),wl(175,"tr")(176,"td")(177,"code"),Ux(178,"--background-color"),ng()(),wl(179,"td"),Ux(180,"Cor do background"),ng(),wl(181,"td")(182,"code"),Ux(183,"transparent"),ng()()(),wl(184,"tr")(185,"td")(186,"strong"),Ux(187,"Hover"),ng()(),Ul(188,"td")(189,"td"),ng(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--color-hover"),ng()(),wl(194,"td"),Ux(195,"Cor principal no estado hover"),ng(),wl(196,"td")(197,"code"),Ux(198,"var(--color-brand-01-darkest)"),ng()()(),wl(199,"tr")(200,"td")(201,"code"),Ux(202,"--background-color-hover"),ng()(),wl(203,"td"),Ux(204,"Cor de background no estado hover"),ng(),wl(205,"td")(206,"code"),Ux(207,"var(--color-brand-01-lighter)"),ng()()(),wl(208,"tr")(209,"td")(210,"strong"),Ux(211,"Focused"),ng()(),Ul(212,"td")(213,"td"),ng(),wl(214,"tr")(215,"td")(216,"code"),Ux(217,"--outline-color-focused"),ng()(),wl(218,"td"),Ux(219,"Cor do outline do estado de focus"),ng(),wl(220,"td")(221,"code"),Ux(222,"var(--color-action-focus)"),ng()()(),wl(223,"tr")(224,"td")(225,"strong"),Ux(226,"Pressed"),ng()(),Ul(227,"td")(228,"td"),ng(),wl(229,"tr")(230,"td")(231,"code"),Ux(232,"--background-color-pressed"),ng(),Ux(233," \xA0"),ng(),wl(234,"td"),Ux(235,"Cor de background no estado de pressionado\xA0"),ng(),wl(236,"td")(237,"code"),Ux(238,"var(--color-brand-01-light)"),ng()()(),wl(239,"tr")(240,"td")(241,"strong"),Ux(242,"Actived"),ng()(),Ul(243,"td")(244,"td"),ng(),wl(245,"tr")(246,"td")(247,"code"),Ux(248,"--background-color-actived"),ng()(),wl(249,"td"),Ux(250,"Cor de background no estado actived"),ng(),wl(251,"td")(252,"code"),Ux(253,"var(--color-brand-01-darkest)"),ng()()(),wl(254,"tr")(255,"td")(256,"code"),Ux(257,"--color-actived"),ng()(),wl(258,"td"),Ux(259,"Cor principal no estado actived"),ng(),wl(260,"td")(261,"code"),Ux(262,"var(--color-brand-01-lighter)"),ng()()(),wl(263,"tr")(264,"td")(265,"strong"),Ux(266,"Font"),ng()(),Ul(267,"td")(268,"td"),ng(),wl(269,"tr")(270,"td")(271,"code"),Ux(272,"--font-weight-lvl0"),ng()(),wl(273,"td"),Ux(274,"Peso da fonte bold"),ng(),wl(275,"td")(276,"code"),Ux(277,"var(--font-weight-bold)"),ng()()(),wl(278,"tr")(279,"td")(280,"code"),Ux(281,"--font-weight-lvl1"),ng()(),wl(282,"td"),Ux(283,"Peso da fonte"),ng(),wl(284,"td")(285,"code"),Ux(286,"var(--font-weight-normal)"),ng()()()()(),wl(287,"p"),Ul(288,"br"),Ux(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),ng(),wl(290,"p"),Ux(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),ng(),wl(292,"p"),Ux(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),ng(),wl(294,"p"),Ux(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),wl(296,"a",7)(297,"strong"),Ux(298,"p-menu-header-template"),ng()(),Ux(299,"."),ng(),wl(300,"p"),Ux(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),wl(302,"code"),Ux(303,"PoMenuFilter"),ng(),Ux(304,"."),ng(),wl(305,"p"),Ux(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),wl(307,"code"),Ux(308,"RouterModule"),ng(),Ux(309," e "),wl(310,"code"),Ux(311,"Routes"),ng(),Ux(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),ng(),wl(313,"pre")(314,"code"),Ux(315,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(316,"p"),Ux(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),ng(),wl(318,"pre")(319,"code"),Ux(320,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),ng()()(),wl(321,"div",8)(322,"h4",9),Ux(323,"Seletor"),ng(),wl(324,"pre",10),Ux(325,`<po-menu
    p-automatic-toggle="boolean"
    p-collapsed="boolean"
    p-components-size="string"
    p-filter="boolean"
    p-logo="string"
    p-logo-alt="string"
    p-logo-link="boolean | string"
    p-menus="PoMenuItem[]"
    p-params="any"
    p-search-tree-items="boolean"
    p-service="string | PoMenuFilter"
    p-short-logo="string"
    (p-toggle)="EventEmitter" >
</po-menu>
`),ng()(),wl(326,"h4",11),Ux(327,"Propriedades"),ng(),wl(328,"table",12)(329,"tr",13)(330,"th",14),Ux(331,"Nome"),ng(),wl(332,"th",14),Ux(333,"Tipo"),ng(),wl(334,"th",14),Ux(335,"Padr\xE3o"),ng(),wl(336,"th",14),Ux(337,"Descri\xE7\xE3o"),ng()(),wl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),Ux(342," p-automatic-toggle"),Ul(343,"br"),ng()()(),wl(344,"td",19)(345,"code",20),Ux(346,"boolean"),ng()(),wl(347,"td",21)(348,"p")(349,"code"),Ux(350,"false"),ng()()(),wl(351,"td",22)(352,"em")(353,"strong"),Ux(354,"(opcional)"),ng()(),wl(355,"p"),Ux(356,"Expande e Colapsa (retrai) o menu automaticamente."),ng()()(),wl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Ux(361," p-collapsed"),Ul(362,"br"),ng()()(),wl(363,"td",19)(364,"code",20),Ux(365,"boolean"),ng()(),wl(366,"td",21)(367,"p")(368,"code"),Ux(369,"false"),ng()()(),wl(370,"td",22)(371,"em")(372,"strong"),Ux(373,"(opcional)"),ng()(),wl(374,"p"),Ux(375,"Colapsa (retrai) o menu e caso receba o valor "),wl(376,"code"),Ux(377,"false"),ng(),Ux(378," expande o menu."),ng(),wl(379,"blockquote")(380,"p"),Ux(381,"Utilize esta propriedade para iniciar o menu colapsado."),ng()(),wl(382,"blockquote")(383,"p"),Ux(384,"Ao utilizar os m\xE9todos "),wl(385,"a",23)(386,"code"),Ux(387,"colapse"),ng()(),Ux(388,", "),wl(389,"a",24)(390,"code"),Ux(391,"expand"),ng()(),Ux(392,` e
`),wl(393,"a",25)(394,"code"),Ux(395,"toggle"),ng()(),Ux(396," o valor desta propriedade n\xE3o \xE9 alterado."),ng()(),wl(397,"p")(398,"strong"),Ux(399,"Importante:"),ng()(),wl(400,"blockquote")(401,"p"),Ux(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),wl(403,"code"),Ux(404,"icon"),ng(),Ux(405," e "),wl(406,"code"),Ux(407,"shortLabel"),ng(),Ux(408,"."),ng()()()(),wl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),Ux(413," p-components-size"),Ul(414,"br"),ng()()(),wl(415,"td",19)(416,"code",26),Ux(417,"string"),ng()(),wl(418,"td",21)(419,"p")(420,"code"),Ux(421,"medium"),ng()()(),wl(422,"td",22)(423,"em")(424,"strong"),Ux(425,"(opcional)"),ng()(),wl(426,"p"),Ux(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),ng(),wl(428,"ul")(429,"li")(430,"code"),Ux(431,"small"),ng(),Ux(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(433,"li")(434,"code"),Ux(435,"medium"),ng(),Ux(436,": aplica a medida medium de cada componente."),ng()(),wl(437,"blockquote")(438,"p"),Ux(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(440,"code"),Ux(441,"medium"),ng(),Ux(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(443,"a",27),Ux(444,"po-theme"),ng(),Ux(445,"."),ng()()()(),wl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),Ux(450," p-filter"),Ul(451,"br"),ng()()(),wl(452,"td",19)(453,"code",20),Ux(454,"boolean"),ng()(),wl(455,"td",21)(456,"p")(457,"code"),Ux(458,"false"),ng()()(),wl(459,"td",22)(460,"em")(461,"strong"),Ux(462,"(opcional)"),ng()(),wl(463,"p"),Ux(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),wl(465,"code"),Ux(466,"p-service"),ng(),Ux(467,"."),ng(),wl(468,"blockquote")(469,"p"),Ux(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),ng()()()(),wl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),Ux(475," p-logo"),Ul(476,"br"),ng()()(),wl(477,"td",19)(478,"code",26),Ux(479,"string"),ng()(),wl(480,"td",21),Ux(481,"-"),ng(),wl(482,"td",22)(483,"em")(484,"strong"),Ux(485,"(opcional)"),ng()(),wl(486,"p"),Ux(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),ng(),wl(488,"blockquote")(489,"p")(490,"strong"),Ux(491,"Importante:"),ng()()(),wl(492,"ul")(493,"li"),Ux(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),ng(),wl(495,"li"),Ux(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),wl(497,"code"),Ux(498,"24px"),ng(),Ux(499," de altura e "),wl(500,"code"),Ux(501,"224px"),ng(),Ux(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ng()()()(),wl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),Ux(507," p-logo-alt"),Ul(508,"br"),ng()()(),wl(509,"td",19)(510,"code",26),Ux(511,"string"),ng()(),wl(512,"td",21)(513,"p")(514,"code"),Ux(515,"Logomarca in\xEDcio"),ng()()(),wl(516,"td",22)(517,"em")(518,"strong"),Ux(519,"(opcional)"),ng()(),wl(520,"p"),Ux(521,"Define o texto alternativo para a logomarca."),ng(),wl(522,"blockquote")(523,"p")(524,"strong"),Ux(525,"Importante"),ng(),Ux(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ng()()()(),wl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),Ux(531," p-logo-link"),Ul(532,"br"),ng()()(),wl(533,"td",19)(534,"code",20),Ux(535,"boolean "),ng(),wl(536,"code",26),Ux(537," string"),ng()(),wl(538,"td",21)(539,"p")(540,"code"),Ux(541,"true"),ng()()(),wl(542,"td",22)(543,"em")(544,"strong"),Ux(545,"(opcional)"),ng()(),wl(546,"p"),Ux(547,"Define o link para a rota ao clicar no logo do menu."),ng(),wl(548,"ul")(549,"li"),Ux(550,"Se o valor for uma string, define a rota para o link informado."),ng(),wl(551,"li"),Ux(552,"Se for "),wl(553,"code"),Ux(554,"false"),ng(),Ux(555,", o logo n\xE3o ter\xE1 link associado."),ng(),wl(556,"li"),Ux(557,"Se for "),wl(558,"code"),Ux(559,"true"),ng(),Ux(560,", o logo ter\xE1 a rota padr\xE3o "),wl(561,"code"),Ux(562,"./"),ng(),Ux(563,"."),ng()()()(),wl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),Ux(568," p-menus"),Ul(569,"br"),ng()()(),wl(570,"td",19)(571,"code",28),Ux(572,"PoMenuItem[]"),ng()(),wl(573,"td",21),Ux(574,"-"),ng(),wl(575,"td",22)(576,"p"),Ux(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),ng()()(),wl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),Ux(582," p-params"),Ul(583,"br"),ng()()(),wl(584,"td",19)(585,"code",29),Ux(586,"any"),ng()(),wl(587,"td",21),Ux(588,"-"),ng(),wl(589,"td",22)(590,"em")(591,"strong"),Ux(592,"(opcional)"),ng()(),wl(593,"p"),Ux(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),ng(),wl(595,"p"),Ux(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),wl(597,"code"),Ux(598,"PoMenuFilter"),ng(),Ux(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),wl(600,"code"),Ux(601,"getFilteredData"),ng(),Ux(602,"."),ng(),wl(603,"p"),Ux(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),wl(605,"em"),Ux(606,"GET"),ng(),Ux(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),wl(608,"code"),Ux(609,"search"),ng(),Ux(610,", veja exemplo:"),ng(),wl(611,"pre")(612,"code"),Ux(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),ng()()()(),wl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Ux(618," p-search-tree-items"),Ul(619,"br"),ng()()(),wl(620,"td",19)(621,"code",20),Ux(622,"boolean"),ng()(),wl(623,"td",21)(624,"p")(625,"code"),Ux(626,"false"),ng()()(),wl(627,"td",22)(628,"em")(629,"strong"),Ux(630,"(opcional)"),ng()(),wl(631,"p"),Ux(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),ng(),wl(633,"blockquote")(634,"p"),Ux(635,"\xC9 necess\xE1rio que a propriedade "),wl(636,"code"),Ux(637,"p-filter"),ng(),Ux(638," esteja habilitada."),ng()()()(),wl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),Ux(643," p-service"),Ul(644,"br"),ng()()(),wl(645,"td",19)(646,"code",26),Ux(647,"string "),ng(),wl(648,"code",30),Ux(649," PoMenuFilter"),ng()(),wl(650,"td",21),Ux(651,"-"),ng(),wl(652,"td",22)(653,"em")(654,"strong"),Ux(655,"(opcional)"),ng()(),wl(656,"p"),Ux(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),wl(658,"code"),Ux(659,"PoMenuFilter"),ng(),Ux(660,"."),ng(),wl(661,"p"),Ux(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),wl(663,"a",31),Ux(664,"Guia de implementa\xE7\xE3o de APIs"),ng(),Ux(665," do PO UI."),ng(),wl(666,"p"),Ux(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),wl(668,"em"),Ux(669,"GET"),ng(),Ux(670,` na URL informada, passando o valor digitado
no par\xE2metro `),wl(671,"code"),Ux(672,"search"),ng(),Ux(673,", veja exemplo:"),ng(),wl(674,"blockquote")(675,"p"),Ux(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),wl(677,"code"),Ux(678,"tot"),ng(),Ux(679,"."),ng()(),wl(680,"pre")(681,"code"),Ux(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),ng()(),wl(683,"blockquote")(684,"p"),Ux(685,"\xC9 necess\xE1rio que propriedade "),wl(686,"code"),Ux(687,"p-filter"),ng(),Ux(688," esteja habilitada."),ng()()()(),wl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Ux(693," p-short-logo"),Ul(694,"br"),ng()()(),wl(695,"td",19)(696,"code",26),Ux(697,"string"),ng()(),wl(698,"td",21),Ux(699,"-"),ng(),wl(700,"td",22)(701,"em")(702,"strong"),Ux(703,"(opcional)"),ng()(),wl(704,"p"),Ux(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),ng(),wl(706,"blockquote")(707,"p")(708,"strong"),Ux(709,"Importante:"),ng()()(),wl(710,"ul")(711,"li"),Ux(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),wl(713,"code"),Ux(714,"p-logo"),ng(),Ux(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),ng(),wl(716,"li"),Ux(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),wl(718,"code"),Ux(719,"48px"),ng(),Ux(720," de altura e "),wl(721,"code"),Ux(722,"48px"),ng(),Ux(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ng(),wl(724,"li"),Ux(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),wl(726,"code"),Ux(727,"p-logo"),ng(),Ux(728,"."),ng()()()(),wl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),Ux(733," (p-toggle)"),Ul(734,"br"),ng()()(),wl(735,"td",19)(736,"code",34),Ux(737,"EventEmitter"),ng()(),wl(738,"td",21),Ux(739,"-"),ng(),wl(740,"td",22)(741,"em")(742,"strong"),Ux(743,"(opcional)"),ng()(),wl(744,"p"),Ux(745,"Evento emitido toda vez que o estado do menu muda, enviando "),wl(746,"code"),Ux(747,"true"),ng(),Ux(748," quando expandido e "),wl(749,"code"),Ux(750,"false"),ng(),Ux(751," quando colapsado."),ng(),wl(752,"pre")(753,"code",35),Ux(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),ng()()()()(),wl(755,"h3",11),Ux(756,"M\xE9todos"),ng(),wl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),Ux(763," collapse "),ng()()()()(),wl(764,"tr",22)(765,"td",22)(766,"p"),Ul(767,"a",38),ng(),wl(768,"p"),Ux(769,"M\xE9todo para colapsar (retrair) o menu."),ng()()()(),Ul(770,"br"),wl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),Ux(777," expand "),ng()()()()(),wl(778,"tr",22)(779,"td",22)(780,"p"),Ul(781,"a",39),ng(),wl(782,"p"),Ux(783,"M\xE9todo para expandir (aumentar) o menu."),ng()()()(),Ul(784,"br"),wl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),Ux(791," toggle "),ng()()()()(),wl(792,"tr",22)(793,"td",22)(794,"p"),Ul(795,"a",40),Ux(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),ng(),wl(797,"blockquote")(798,"p"),Ux(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),ng()(),wl(800,"ul")(801,"li"),Ux(802,"Todos os itens de menu tiverem valor nas propriedades "),wl(803,"code"),Ux(804,"icon"),ng(),Ux(805," e "),wl(806,"code"),Ux(807,"shortLabel"),ng(),Ux(808,"."),ng()()()()(),Ul(809,"br"),wl(810,"h3"),Ux(811,"Interfaces"),ng(),wl(812,"h4",41)(813,"code",5),Ux(814,"PoMenuFilter"),ng()(),wl(815,"div",2)(816,"p"),Ux(817,"Interface do servi\xE7o utilizado no componente "),wl(818,"code"),Ux(819,"po-menu"),ng(),Ux(820,"."),ng()(),wl(821,"h4",11),Ux(822,"M\xE9todos"),ng(),wl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),Ux(829," getFilteredData "),ng()()()()(),wl(830,"tr",22)(831,"td",22)(832,"p"),Ux(833,"M\xE9todo respons\xE1vel por retornar um "),wl(834,"em"),Ux(835,"Observable"),ng(),Ux(836," que retorne uma lista de objetos que seguem a interface "),wl(837,"code"),Ux(838,"PoMenuItemFiltered"),ng(),Ux(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),wl(840,"code"),Ux(841,"p-params"),ng(),Ux(842,"."),ng()()()(),wl(843,"h5")(844,"b"),Ux(845,"Par\xE2metros"),ng()(),wl(846,"table",12)(847,"tr",13)(848,"th",14),Ux(849,"Nome"),ng(),wl(850,"th",14),Ux(851,"Tipo"),ng(),wl(852,"th",14),Ux(853,"Descri\xE7\xE3o"),ng()(),wl(854,"tr",15)(855,"td",16),Ux(856," search"),ng(),wl(857,"td",19)(858,"code",42),Ux(859," string "),ng()(),wl(860,"td",22)(861,"p"),Ux(862,"Valor informado no campo de busca dos itens de menus."),ng()()(),wl(863,"tr",15)(864,"td",16),Ux(865," params"),ng(),wl(866,"td",19)(867,"code",42),Ux(868," any "),ng()(),wl(869,"td",22)(870,"p"),Ux(871,"Valor informado atrav\xE9s da propriedade "),wl(872,"code"),Ux(873,"p-params"),ng(),Ux(874,"."),ng()()()(),Ul(875,"br"),wl(876,"h4",41)(877,"code",5),Ux(878,"PoMenuItemBadge"),ng()(),wl(879,"div",2)(880,"p"),Ux(881,"Interface do "),wl(882,"em"),Ux(883,"badge"),ng(),Ux(884," utilizado no "),wl(885,"code"),Ux(886,"po-menu"),ng(),Ux(887,"."),ng()(),wl(888,"h4",11),Ux(889,"Propriedades"),ng(),wl(890,"table",12)(891,"tr",13)(892,"th",14),Ux(893,"Nome"),ng(),wl(894,"th",14),Ux(895,"Tipo"),ng(),wl(896,"th",14),Ux(897,"Descri\xE7\xE3o"),ng()(),wl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),Ux(902," color"),Ul(903,"br"),ng()()(),wl(904,"td",19)(905,"code",26),Ux(906,"string"),ng()(),wl(907,"td",22)(908,"em")(909,"strong"),Ux(910,"(opcional)"),ng()(),wl(911,"p"),Ux(912,"Define a cor do "),wl(913,"em"),Ux(914,"badge"),ng(),Ux(915," e aceita os valores:"),ng(),wl(916,"p"),Ul(917,"span",43),wl(918,"code"),Ux(919,"color-01"),ng()(),wl(920,"p"),Ul(921,"span",44),wl(922,"code"),Ux(923,"color-02"),ng()(),wl(924,"p"),Ul(925,"span",45),wl(926,"code"),Ux(927,"color-03"),ng()(),wl(928,"p"),Ul(929,"span",46),wl(930,"code"),Ux(931,"color-04"),ng()(),wl(932,"p"),Ul(933,"span",47),wl(934,"code"),Ux(935,"color-05"),ng()(),wl(936,"p"),Ul(937,"span",48),wl(938,"code"),Ux(939,"color-06"),ng()(),wl(940,"p"),Ul(941,"span",49),wl(942,"code"),Ux(943,"color-07"),ng()(),wl(944,"p"),Ul(945,"span",50),wl(946,"code"),Ux(947,"color-08"),ng()(),wl(948,"p"),Ul(949,"span",51),wl(950,"code"),Ux(951,"color-09"),ng()(),wl(952,"p"),Ul(953,"span",52),wl(954,"code"),Ux(955,"color-10"),ng()(),wl(956,"p"),Ul(957,"span",53),wl(958,"code"),Ux(959,"color-11"),ng()(),wl(960,"p"),Ul(961,"span",54),wl(962,"code"),Ux(963,"color-12"),ng()()()(),wl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),Ux(968," value"),Ul(969,"br"),ng()()(),wl(970,"td",19)(971,"code",55),Ux(972,"number"),ng()(),wl(973,"td",22)(974,"p"),Ux(975,"N\xFAmero exibido no "),wl(976,"em"),Ux(977,"badge"),ng(),Ux(978,", caso o mesmo seja maior que "),wl(979,"strong"),Ux(980,"9"),ng(),Ux(981," o mesmo exibe "),wl(982,"strong"),Ux(983,"9+"),ng(),Ux(984,"."),ng()()()(),wl(985,"h4",41)(986,"code",5),Ux(987,"PoMenuItemFiltered"),ng()(),wl(988,"div",2)(989,"p"),Ux(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),wl(991,"code"),Ux(992,"po-menu"),ng(),Ux(993,"."),ng()(),wl(994,"h4",11),Ux(995,"Propriedades"),ng(),wl(996,"table",12)(997,"tr",13)(998,"th",14),Ux(999,"Nome"),ng(),wl(1e3,"th",14),Ux(1001,"Tipo"),ng(),wl(1002,"th",14),Ux(1003,"Descri\xE7\xE3o"),ng()(),wl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),Ux(1008," action"),Ul(1009,"br"),ng()()(),wl(1010,"td",19)(1011,"code",56),Ux(1012,"() => void"),ng()(),wl(1013,"td",22)(1014,"p"),Ux(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),ng()()(),wl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),Ux(1020," label"),Ul(1021,"br"),ng()()(),wl(1022,"td",19)(1023,"code",26),Ux(1024,"string"),ng()(),wl(1025,"td",22)(1026,"p"),Ux(1027,"Texto do item de menu."),ng()()(),wl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),Ux(1032," link"),Ul(1033,"br"),ng()()(),wl(1034,"td",19)(1035,"code",26),Ux(1036,"string"),ng()(),wl(1037,"td",22)(1038,"p"),Ux(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),wl(1040,"em"),Ux(1041,"link"),ng(),Ux(1042," interno ou externo."),ng()()()(),wl(1043,"h4",41)(1044,"code",5),Ux(1045,"PoMenuItem"),ng()(),wl(1046,"div",2)(1047,"p"),Ux(1048,"Interface para os itens de menu do componente po-menu."),ng()(),wl(1049,"h4",11),Ux(1050,"Propriedades"),ng(),wl(1051,"table",12)(1052,"tr",13)(1053,"th",14),Ux(1054,"Nome"),ng(),wl(1055,"th",14),Ux(1056,"Tipo"),ng(),wl(1057,"th",14),Ux(1058,"Descri\xE7\xE3o"),ng()(),wl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),Ux(1063," action"),Ul(1064,"br"),ng()()(),wl(1065,"td",19)(1066,"code",57),Ux(1067,"Function"),ng()(),wl(1068,"td",22)(1069,"em")(1070,"strong"),Ux(1071,"(opcional)"),ng()(),wl(1072,"p"),Ux(1073,"A\xE7\xE3o personalizada para clique do item de menu."),ng()()(),wl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),Ux(1078," badge"),Ul(1079,"br"),ng()()(),wl(1080,"td",19)(1081,"code",58),Ux(1082,"PoMenuItemBadge"),ng()(),wl(1083,"td",22)(1084,"em")(1085,"strong"),Ux(1086,"(opcional)"),ng()(),wl(1087,"p"),Ux(1088,"Badge do item de menu."),ng(),wl(1089,"p"),Ux(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),ng(),wl(1091,"blockquote")(1092,"p"),Ux(1093,"O "),wl(1094,"code"),Ux(1095,"po-badge"),ng(),Ux(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),wl(1097,"code"),Ux(1098,"subItems"),ng(),Ux(1099," e seu valor seja maior ou igual a 0."),ng()()()(),wl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Ux(1104," icon"),Ul(1105,"br"),ng()()(),wl(1106,"td",19)(1107,"code",26),Ux(1108,"string "),ng(),wl(1109,"code",59),Ux(1110," TemplateRef<void>"),ng()(),wl(1111,"td",22)(1112,"em")(1113,"strong"),Ux(1114,"(opcional)"),ng()(),wl(1115,"p"),Ux(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(1117,"a",60),Ux(1118,"Biblioteca de \xEDcones"),ng(),Ux(1119,". conforme exemplo abaixo:"),ng(),wl(1120,"pre")(1121,"code"),Ux(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),ng()(),wl(1123,"p"),Ux(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),ng(),wl(1125,"pre")(1126,"code"),Ux(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),ng()(),wl(1128,"p"),Ux(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(1130,"code"),Ux(1131,"TemplateRef"),ng(),Ux(1132,`, conforme exemplo abaixo:
component.html:`),ng(),wl(1133,"pre")(1134,"code"),Ux(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),ng()(),wl(1136,"p"),Ux(1137,"component.ts:"),ng(),wl(1138,"pre")(1139,"code"),Ux(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),ng()(),wl(1141,"blockquote")(1142,"p"),Ux(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),ng()()()(),wl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),Ux(1148," label"),Ul(1149,"br"),ng()()(),wl(1150,"td",19)(1151,"code",26),Ux(1152,"string"),ng()(),wl(1153,"td",22)(1154,"p"),Ux(1155,"Texto do item de menu."),ng()()(),wl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),Ux(1160," link"),Ul(1161,"br"),ng()()(),wl(1162,"td",19)(1163,"code",26),Ux(1164,"string"),ng()(),wl(1165,"td",22)(1166,"em")(1167,"strong"),Ux(1168,"(opcional)"),ng()(),wl(1169,"p"),Ux(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),ng()()(),wl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),Ux(1175," shortLabel"),Ul(1176,"br"),ng()()(),wl(1177,"td",19)(1178,"code",26),Ux(1179,"string"),ng()(),wl(1180,"td",22)(1181,"em")(1182,"strong"),Ux(1183,"(opcional)"),ng()(),wl(1184,"p"),Ux(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),ng()()(),wl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),Ux(1190," subItems"),Ul(1191,"br"),ng()()(),wl(1192,"td",19)(1193,"code",61),Ux(1194,"Array<PoMenuItem>"),ng()(),wl(1195,"td",22)(1196,"em")(1197,"strong"),Ux(1198,"(opcional)"),ng()(),wl(1199,"p"),Ux(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-menu-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,Pe,Ie,ke,Le],encapsulation:2})}return a})();var Qe=[{path:"",component:Te}],De=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Qe),vL]})}return a})();var Nt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,De]})}return a})();export{Nt as DocPoMenuModule};