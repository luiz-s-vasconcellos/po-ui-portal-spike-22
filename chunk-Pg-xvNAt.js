import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,ae as Be$1,r as rb,W,w,F as Zz,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,cs as Gpe,b1 as mv,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,bH as E3,cX as O3,c9 as Qhe,a3 as pNe,aB as Ex,aM as Ew,aN as JA,a2 as QE,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,dl as Bw,dm as _Ne,X as we$1,br as oN,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Wl(0,"po-menu",0),r&2&&tw("p-menus",dN(2,Le,uN(1,ke)));},dependencies:[Zz],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-menu-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,xe],encapsulation:2})}return a})();function Re(a,W){if(a&1&&(Sl(0,"div"),Wl(1,"span"),Sl(2,"span",26),Jx(3),sg()()),a&2){let m=W.$implicit;Vp(),Hx(oN("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Vp(2),fg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&ql(Zz,7),r&2){let s;lo(s=uo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"div",1),Wl(1,"po-menu",2),Sl(2,"po-page-default",3)(3,"div",4),Wl(4,"po-info",5)(5,"po-button-group",6),sg(),Wl(6,"po-divider"),Sl(7,"div",4),Wl(8,"po-info",7),Sl(9,"form",null,0)(11,"po-switch",8),Ew("ngModelChange",function(l){return Xy(s),tN(i.filter,l)||(i.filter=l),Qy(l)}),ht("ngModelChange",function(l){return i.onFilterChange(l)}),sg(),JA(),Sl(12,"po-switch",9),Ew("ngModelChange",function(l){return Xy(s),tN(i.searchTreeItems,l)||(i.searchTreeItems=l),Qy(l)}),sg(),JA(),Sl(13,"po-select",10),Ew("ngModelChange",function(l){return Xy(s),tN(i.parent,l)||(i.parent=l),Qy(l)}),sg(),JA(),Sl(14,"po-input",11),Ew("ngModelChange",function(l){return Xy(s),tN(i.label,l)||(i.label=l),Qy(l)}),sg(),JA(),Sl(15,"po-input",12),Ew("ngModelChange",function(l){return Xy(s),tN(i.shortLabel,l)||(i.shortLabel=l),Qy(l)}),sg(),JA(),Sl(16,"po-url",13),Ew("ngModelChange",function(l){return Xy(s),tN(i.link,l)||(i.link=l),Qy(l)}),sg(),JA(),Sl(17,"po-select",14),Ew("ngModelChange",function(l){return Xy(s),tN(i.badgeColor,l)||(i.badgeColor=l),Qy(l)}),QE(18,Re,4,4,"ng-template",15),sg(),JA(),Sl(19,"po-number",16),Ew("ngModelChange",function(l){return Xy(s),tN(i.badgeValue,l)||(i.badgeValue=l),Qy(l)}),sg(),JA(),Sl(20,"po-select",17),Ew("ngModelChange",function(l){return Xy(s),tN(i.icon,l)||(i.icon=l),Qy(l)}),sg(),JA(),Sl(21,"div",4)(22,"po-button",18),ht("p-click",function(){return i.addMenuItem()}),sg()(),Wl(23,"po-divider"),Sl(24,"po-input",19),Ew("ngModelChange",function(l){return Xy(s),tN(i.service,l)||(i.service=l),Qy(l)}),sg(),JA(),Sl(25,"po-input",20),Ew("ngModelChange",function(l){return Xy(s),tN(i.menuParams,l)||(i.menuParams=l),Qy(l)}),ht("p-change-model",function(l){return i.onChangeParams(l)}),sg(),JA(),Sl(26,"po-input",21),Ew("ngModelChange",function(l){return Xy(s),tN(i.logo,l)||(i.logo=l),Qy(l)}),sg(),JA(),Sl(27,"po-input",22),Ew("ngModelChange",function(l){return Xy(s),tN(i.shortLogo,l)||(i.shortLogo=l),Qy(l)}),sg(),JA(),Sl(28,"po-input",23),Ew("ngModelChange",function(l){return Xy(s),tN(i.logoLink,l)||(i.logoLink=l),Qy(l)}),sg(),JA(),Sl(29,"po-radio-group",24),Ew("ngModelChange",function(l){return Xy(s),tN(i.componentsSize,l)||(i.componentsSize=l),Qy(l)}),sg(),JA(),Sl(30,"div",4)(31,"po-button",25),ht("p-click",function(){return i.restore()}),sg()()()()()();}r&2&&(Vp(),tw("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Vp(4),tw("p-buttons",i.buttons),Vp(3),tw("p-value",i.menuItemSelected),Vp(3),Dw("ngModel",i.filter),t0(),Vp(),Dw("ngModel",i.searchTreeItems),tw("p-disabled",!i.filter),t0(),Vp(),Dw("ngModel",i.parent),tw("p-options",i.parentList),t0(),Vp(),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.shortLabel),t0(),Vp(),Dw("ngModel",i.link),t0(),Vp(),Dw("ngModel",i.badgeColor),tw("p-options",i.badgeColorList),t0(),Vp(2),Dw("ngModel",i.badgeValue),tw("p-max",i.maxBadgeValue),t0(),Vp(),Dw("ngModel",i.icon),tw("p-disabled",i.parent)("p-options",i.iconsOptions),t0(),Vp(4),Dw("ngModel",i.service),t0(),Vp(),Dw("ngModel",i.menuParams),t0(),Vp(),Dw("ngModel",i.logo),t0(),Vp(),Dw("ngModel",i.shortLogo),t0(),Vp(),Dw("ngModel",i.logoLink),t0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,Gpe,mv,F3,Uhe,Pde,Ghe,E3,O3,Qhe,Zz,pNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-wrapper">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-menu-labs"),sg(),Wl(29,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return a})();var O=(()=>{class a{http=f(rb);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(W(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Sl(0,"div",5)(1,"p"),Jx(2,"Welcome,"),sg(),Sl(3,"p")(4,"b"),Jx(5," John Doe "),sg()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"po-menu",1),QE(2,Be,6,0,"div",2),sg(),Wl(3,"po-toolbar",3)(4,"po-page-default",4),sg()),r&2&&(Vp(),tw("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Vp(2),tw("p-show-notification",false),Vp(),tw("p-title",i.menuItemSelected));},dependencies:[Zz,Bw,pNe,_Ne],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu - Human Resources"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-wrapper">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),Jx(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),sg(),Sl(29,"pre",11),Jx(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),sg()()()()(),Sl(31,"div",12),Wl(32,"sample-po-menu-human-resources"),sg(),Wl(33,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Pe],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoMenuModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-menu."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoMenuComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),sg(),Sl(15,"p"),Jx(16,"O componente po-menu recebe uma lista de objetos do tipo "),Sl(17,"code"),Jx(18,"MenuItem"),sg(),Jx(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),sg(),Sl(20,"h4"),Jx(21,"Tokens customiz\xE1veis"),sg(),Sl(22,"p"),Jx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(24,"blockquote")(25,"p"),Jx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(27,"a",6),Jx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(29,"."),sg()(),Sl(30,"table")(31,"thead")(32,"tr")(33,"th"),Jx(34,"Propriedade"),sg(),Sl(35,"th"),Jx(36,"Descri\xE7\xE3o"),sg(),Sl(37,"th"),Jx(38,"Valor Padr\xE3o"),sg()()(),Sl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Jx(43,"Default Values"),sg()(),Wl(44,"td")(45,"td"),sg(),Sl(46,"tr")(47,"td")(48,"code"),Jx(49,"--border-radius"),sg()(),Sl(50,"td"),Jx(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(52,"td")(53,"code"),Jx(54,"var(--border-radius-md)"),sg()()(),Sl(55,"tr")(56,"td")(57,"code"),Jx(58,"--border-color"),sg()(),Sl(59,"td"),Jx(60,"Cor da borda"),sg(),Sl(61,"td")(62,"code"),Jx(63,"var(--color-neutral-light-20)"),sg()()(),Sl(64,"tr")(65,"td")(66,"code"),Jx(67,"--background-color"),sg()(),Sl(68,"td"),Jx(69,"Cor de background"),sg(),Sl(70,"td")(71,"code"),Jx(72,"Var(----color-neutral-light-05)"),sg()()(),Sl(73,"tr")(74,"td")(75,"strong"),Jx(76,"Menu Footer"),sg()(),Wl(77,"td")(78,"td"),sg(),Sl(79,"tr")(80,"td")(81,"code"),Jx(82,"--color"),sg()(),Sl(83,"td"),Jx(84,"Cor principla do menu footer"),sg(),Sl(85,"td")(86,"code"),Jx(87,"var(--color-action-default)"),sg()()(),Sl(88,"tr")(89,"td")(90,"code"),Jx(91,"--font-size"),sg()(),Sl(92,"td"),Jx(93,"Tamanho da fonte"),sg(),Sl(94,"td")(95,"code"),Jx(96,"var(--font-size-default)"),sg()()(),Sl(97,"tr")(98,"td")(99,"code"),Jx(100,"--line-height"),sg()(),Sl(101,"td"),Jx(102,"Tamanho da label"),sg(),Sl(103,"td")(104,"code"),Jx(105,"var(--line-height-md)"),sg()()(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--outline-color-focused"),sg()(),Sl(110,"td"),Jx(111,"Cor do outline do estado de focus"),sg(),Sl(112,"td")(113,"code"),Jx(114,"var(--color-action-focus)"),sg()()(),Sl(115,"tr")(116,"td")(117,"code"),Jx(118,"--font-weight-lvl0"),sg()(),Sl(119,"td"),Jx(120,"Peso da fonte"),sg(),Sl(121,"td")(122,"code"),Jx(123,"var(--font-weight-bold)"),sg()()(),Sl(124,"tr")(125,"td")(126,"strong"),Jx(127,"po-menu-item"),sg()(),Wl(128,"td")(129,"td"),sg(),Sl(130,"tr")(131,"td")(132,"code"),Jx(133,"--font-family"),sg()(),Sl(134,"td"),Jx(135,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(136,"td")(137,"code"),Jx(138,"var(--font-family-theme)"),sg()()(),Sl(139,"tr")(140,"td")(141,"code"),Jx(142,"--font-size"),sg()(),Sl(143,"td"),Jx(144,"Tamanho da fonte"),sg(),Sl(145,"td")(146,"code"),Jx(147,"var(--font-size-default)"),sg()()(),Sl(148,"tr")(149,"td")(150,"code"),Jx(151,"--line-height"),sg()(),Sl(152,"td"),Jx(153,"Tamanho da label"),sg(),Sl(154,"td")(155,"code"),Jx(156,"var(--line-height-md)"),sg()()(),Sl(157,"tr")(158,"td")(159,"code"),Jx(160,"--border-radius"),sg()(),Sl(161,"td"),Jx(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(163,"td")(164,"code"),Jx(165,"var(--border-radius-md)"),sg()()(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--color"),sg()(),Sl(170,"td"),Jx(171,"Cor principal do item"),sg(),Sl(172,"td")(173,"code"),Jx(174,"var(--color-action-default)"),sg()()(),Sl(175,"tr")(176,"td")(177,"code"),Jx(178,"--background-color"),sg()(),Sl(179,"td"),Jx(180,"Cor do background"),sg(),Sl(181,"td")(182,"code"),Jx(183,"transparent"),sg()()(),Sl(184,"tr")(185,"td")(186,"strong"),Jx(187,"Hover"),sg()(),Wl(188,"td")(189,"td"),sg(),Sl(190,"tr")(191,"td")(192,"code"),Jx(193,"--color-hover"),sg()(),Sl(194,"td"),Jx(195,"Cor principal no estado hover"),sg(),Sl(196,"td")(197,"code"),Jx(198,"var(--color-brand-01-darkest)"),sg()()(),Sl(199,"tr")(200,"td")(201,"code"),Jx(202,"--background-color-hover"),sg()(),Sl(203,"td"),Jx(204,"Cor de background no estado hover"),sg(),Sl(205,"td")(206,"code"),Jx(207,"var(--color-brand-01-lighter)"),sg()()(),Sl(208,"tr")(209,"td")(210,"strong"),Jx(211,"Focused"),sg()(),Wl(212,"td")(213,"td"),sg(),Sl(214,"tr")(215,"td")(216,"code"),Jx(217,"--outline-color-focused"),sg()(),Sl(218,"td"),Jx(219,"Cor do outline do estado de focus"),sg(),Sl(220,"td")(221,"code"),Jx(222,"var(--color-action-focus)"),sg()()(),Sl(223,"tr")(224,"td")(225,"strong"),Jx(226,"Pressed"),sg()(),Wl(227,"td")(228,"td"),sg(),Sl(229,"tr")(230,"td")(231,"code"),Jx(232,"--background-color-pressed"),sg(),Jx(233," \xA0"),sg(),Sl(234,"td"),Jx(235,"Cor de background no estado de pressionado\xA0"),sg(),Sl(236,"td")(237,"code"),Jx(238,"var(--color-brand-01-light)"),sg()()(),Sl(239,"tr")(240,"td")(241,"strong"),Jx(242,"Actived"),sg()(),Wl(243,"td")(244,"td"),sg(),Sl(245,"tr")(246,"td")(247,"code"),Jx(248,"--background-color-actived"),sg()(),Sl(249,"td"),Jx(250,"Cor de background no estado actived"),sg(),Sl(251,"td")(252,"code"),Jx(253,"var(--color-brand-01-darkest)"),sg()()(),Sl(254,"tr")(255,"td")(256,"code"),Jx(257,"--color-actived"),sg()(),Sl(258,"td"),Jx(259,"Cor principal no estado actived"),sg(),Sl(260,"td")(261,"code"),Jx(262,"var(--color-brand-01-lighter)"),sg()()(),Sl(263,"tr")(264,"td")(265,"strong"),Jx(266,"Font"),sg()(),Wl(267,"td")(268,"td"),sg(),Sl(269,"tr")(270,"td")(271,"code"),Jx(272,"--font-weight-lvl0"),sg()(),Sl(273,"td"),Jx(274,"Peso da fonte bold"),sg(),Sl(275,"td")(276,"code"),Jx(277,"var(--font-weight-bold)"),sg()()(),Sl(278,"tr")(279,"td")(280,"code"),Jx(281,"--font-weight-lvl1"),sg()(),Sl(282,"td"),Jx(283,"Peso da fonte"),sg(),Sl(284,"td")(285,"code"),Jx(286,"var(--font-weight-normal)"),sg()()()()(),Sl(287,"p"),Wl(288,"br"),Jx(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),sg(),Sl(290,"p"),Jx(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),sg(),Sl(292,"p"),Jx(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),sg(),Sl(294,"p"),Jx(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Sl(296,"a",7)(297,"strong"),Jx(298,"p-menu-header-template"),sg()(),Jx(299,"."),sg(),Sl(300,"p"),Jx(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Sl(302,"code"),Jx(303,"PoMenuFilter"),sg(),Jx(304,"."),sg(),Sl(305,"p"),Jx(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Sl(307,"code"),Jx(308,"RouterModule"),sg(),Jx(309," e "),Sl(310,"code"),Jx(311,"Routes"),sg(),Jx(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),sg(),Sl(313,"pre")(314,"code"),Jx(315,`import { RouterModule, Routes } from '@angular/router';

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
`),sg()(),Sl(316,"p"),Jx(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),sg(),Sl(318,"pre")(319,"code"),Jx(320,`import { NgModule } from '@angular/core';

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
`),sg()()(),Sl(321,"div",8)(322,"h4",9),Jx(323,"Seletor"),sg(),Sl(324,"pre",10),Jx(325,`<po-menu
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
`),sg()(),Sl(326,"h4",11),Jx(327,"Propriedades"),sg(),Sl(328,"table",12)(329,"tr",13)(330,"th",14),Jx(331,"Nome"),sg(),Sl(332,"th",14),Jx(333,"Tipo"),sg(),Sl(334,"th",14),Jx(335,"Padr\xE3o"),sg(),Sl(336,"th",14),Jx(337,"Descri\xE7\xE3o"),sg()(),Sl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),Jx(342," p-automatic-toggle"),Wl(343,"br"),sg()()(),Sl(344,"td",19)(345,"code",20),Jx(346,"boolean"),sg()(),Sl(347,"td",21)(348,"p")(349,"code"),Jx(350,"false"),sg()()(),Sl(351,"td",22)(352,"em")(353,"strong"),Jx(354,"(opcional)"),sg()(),Sl(355,"p"),Jx(356,"Expande e Colapsa (retrai) o menu automaticamente."),sg()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Jx(361," p-collapsed"),Wl(362,"br"),sg()()(),Sl(363,"td",19)(364,"code",20),Jx(365,"boolean"),sg()(),Sl(366,"td",21)(367,"p")(368,"code"),Jx(369,"false"),sg()()(),Sl(370,"td",22)(371,"em")(372,"strong"),Jx(373,"(opcional)"),sg()(),Sl(374,"p"),Jx(375,"Colapsa (retrai) o menu e caso receba o valor "),Sl(376,"code"),Jx(377,"false"),sg(),Jx(378," expande o menu."),sg(),Sl(379,"blockquote")(380,"p"),Jx(381,"Utilize esta propriedade para iniciar o menu colapsado."),sg()(),Sl(382,"blockquote")(383,"p"),Jx(384,"Ao utilizar os m\xE9todos "),Sl(385,"a",23)(386,"code"),Jx(387,"colapse"),sg()(),Jx(388,", "),Sl(389,"a",24)(390,"code"),Jx(391,"expand"),sg()(),Jx(392,` e
`),Sl(393,"a",25)(394,"code"),Jx(395,"toggle"),sg()(),Jx(396," o valor desta propriedade n\xE3o \xE9 alterado."),sg()(),Sl(397,"p")(398,"strong"),Jx(399,"Importante:"),sg()(),Sl(400,"blockquote")(401,"p"),Jx(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Sl(403,"code"),Jx(404,"icon"),sg(),Jx(405," e "),Sl(406,"code"),Jx(407,"shortLabel"),sg(),Jx(408,"."),sg()()()(),Sl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),Jx(413," p-components-size"),Wl(414,"br"),sg()()(),Sl(415,"td",19)(416,"code",26),Jx(417,"string"),sg()(),Sl(418,"td",21)(419,"p")(420,"code"),Jx(421,"medium"),sg()()(),Sl(422,"td",22)(423,"em")(424,"strong"),Jx(425,"(opcional)"),sg()(),Sl(426,"p"),Jx(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),sg(),Sl(428,"ul")(429,"li")(430,"code"),Jx(431,"small"),sg(),Jx(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(433,"li")(434,"code"),Jx(435,"medium"),sg(),Jx(436,": aplica a medida medium de cada componente."),sg()(),Sl(437,"blockquote")(438,"p"),Jx(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(440,"code"),Jx(441,"medium"),sg(),Jx(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(443,"a",27),Jx(444,"po-theme"),sg(),Jx(445,"."),sg()()()(),Sl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),Jx(450," p-filter"),Wl(451,"br"),sg()()(),Sl(452,"td",19)(453,"code",20),Jx(454,"boolean"),sg()(),Sl(455,"td",21)(456,"p")(457,"code"),Jx(458,"false"),sg()()(),Sl(459,"td",22)(460,"em")(461,"strong"),Jx(462,"(opcional)"),sg()(),Sl(463,"p"),Jx(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Sl(465,"code"),Jx(466,"p-service"),sg(),Jx(467,"."),sg(),Sl(468,"blockquote")(469,"p"),Jx(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),sg()()()(),Sl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),Jx(475," p-logo"),Wl(476,"br"),sg()()(),Sl(477,"td",19)(478,"code",26),Jx(479,"string"),sg()(),Sl(480,"td",21),Jx(481,"-"),sg(),Sl(482,"td",22)(483,"em")(484,"strong"),Jx(485,"(opcional)"),sg()(),Sl(486,"p"),Jx(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),sg(),Sl(488,"blockquote")(489,"p")(490,"strong"),Jx(491,"Importante:"),sg()()(),Sl(492,"ul")(493,"li"),Jx(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),sg(),Sl(495,"li"),Jx(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Sl(497,"code"),Jx(498,"24px"),sg(),Jx(499," de altura e "),Sl(500,"code"),Jx(501,"224px"),sg(),Jx(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg()()()(),Sl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),Jx(507," p-logo-alt"),Wl(508,"br"),sg()()(),Sl(509,"td",19)(510,"code",26),Jx(511,"string"),sg()(),Sl(512,"td",21)(513,"p")(514,"code"),Jx(515,"Logomarca in\xEDcio"),sg()()(),Sl(516,"td",22)(517,"em")(518,"strong"),Jx(519,"(opcional)"),sg()(),Sl(520,"p"),Jx(521,"Define o texto alternativo para a logomarca."),sg(),Sl(522,"blockquote")(523,"p")(524,"strong"),Jx(525,"Importante"),sg(),Jx(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),sg()()()(),Sl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),Jx(531," p-logo-link"),Wl(532,"br"),sg()()(),Sl(533,"td",19)(534,"code",20),Jx(535,"boolean "),sg(),Sl(536,"code",26),Jx(537," string"),sg()(),Sl(538,"td",21)(539,"p")(540,"code"),Jx(541,"true"),sg()()(),Sl(542,"td",22)(543,"em")(544,"strong"),Jx(545,"(opcional)"),sg()(),Sl(546,"p"),Jx(547,"Define o link para a rota ao clicar no logo do menu."),sg(),Sl(548,"ul")(549,"li"),Jx(550,"Se o valor for uma string, define a rota para o link informado."),sg(),Sl(551,"li"),Jx(552,"Se for "),Sl(553,"code"),Jx(554,"false"),sg(),Jx(555,", o logo n\xE3o ter\xE1 link associado."),sg(),Sl(556,"li"),Jx(557,"Se for "),Sl(558,"code"),Jx(559,"true"),sg(),Jx(560,", o logo ter\xE1 a rota padr\xE3o "),Sl(561,"code"),Jx(562,"./"),sg(),Jx(563,"."),sg()()()(),Sl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),Jx(568," p-menus"),Wl(569,"br"),sg()()(),Sl(570,"td",19)(571,"code",28),Jx(572,"PoMenuItem[]"),sg()(),Sl(573,"td",21),Jx(574,"-"),sg(),Sl(575,"td",22)(576,"p"),Jx(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg()()(),Sl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),Jx(582," p-params"),Wl(583,"br"),sg()()(),Sl(584,"td",19)(585,"code",29),Jx(586,"any"),sg()(),Sl(587,"td",21),Jx(588,"-"),sg(),Sl(589,"td",22)(590,"em")(591,"strong"),Jx(592,"(opcional)"),sg()(),Sl(593,"p"),Jx(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),sg(),Sl(595,"p"),Jx(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Sl(597,"code"),Jx(598,"PoMenuFilter"),sg(),Jx(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Sl(600,"code"),Jx(601,"getFilteredData"),sg(),Jx(602,"."),sg(),Sl(603,"p"),Jx(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Sl(605,"em"),Jx(606,"GET"),sg(),Jx(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Sl(608,"code"),Jx(609,"search"),sg(),Jx(610,", veja exemplo:"),sg(),Sl(611,"pre")(612,"code"),Jx(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),sg()()()(),Sl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Jx(618," p-search-tree-items"),Wl(619,"br"),sg()()(),Sl(620,"td",19)(621,"code",20),Jx(622,"boolean"),sg()(),Sl(623,"td",21)(624,"p")(625,"code"),Jx(626,"false"),sg()()(),Sl(627,"td",22)(628,"em")(629,"strong"),Jx(630,"(opcional)"),sg()(),Sl(631,"p"),Jx(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),sg(),Sl(633,"blockquote")(634,"p"),Jx(635,"\xC9 necess\xE1rio que a propriedade "),Sl(636,"code"),Jx(637,"p-filter"),sg(),Jx(638," esteja habilitada."),sg()()()(),Sl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),Jx(643," p-service"),Wl(644,"br"),sg()()(),Sl(645,"td",19)(646,"code",26),Jx(647,"string "),sg(),Sl(648,"code",30),Jx(649," PoMenuFilter"),sg()(),Sl(650,"td",21),Jx(651,"-"),sg(),Sl(652,"td",22)(653,"em")(654,"strong"),Jx(655,"(opcional)"),sg()(),Sl(656,"p"),Jx(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Sl(658,"code"),Jx(659,"PoMenuFilter"),sg(),Jx(660,"."),sg(),Sl(661,"p"),Jx(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Sl(663,"a",31),Jx(664,"Guia de implementa\xE7\xE3o de APIs"),sg(),Jx(665," do PO UI."),sg(),Sl(666,"p"),Jx(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Sl(668,"em"),Jx(669,"GET"),sg(),Jx(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Sl(671,"code"),Jx(672,"search"),sg(),Jx(673,", veja exemplo:"),sg(),Sl(674,"blockquote")(675,"p"),Jx(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Sl(677,"code"),Jx(678,"tot"),sg(),Jx(679,"."),sg()(),Sl(680,"pre")(681,"code"),Jx(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),sg()(),Sl(683,"blockquote")(684,"p"),Jx(685,"\xC9 necess\xE1rio que propriedade "),Sl(686,"code"),Jx(687,"p-filter"),sg(),Jx(688," esteja habilitada."),sg()()()(),Sl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Jx(693," p-short-logo"),Wl(694,"br"),sg()()(),Sl(695,"td",19)(696,"code",26),Jx(697,"string"),sg()(),Sl(698,"td",21),Jx(699,"-"),sg(),Sl(700,"td",22)(701,"em")(702,"strong"),Jx(703,"(opcional)"),sg()(),Sl(704,"p"),Jx(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),sg(),Sl(706,"blockquote")(707,"p")(708,"strong"),Jx(709,"Importante:"),sg()()(),Sl(710,"ul")(711,"li"),Jx(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Sl(713,"code"),Jx(714,"p-logo"),sg(),Jx(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),sg(),Sl(716,"li"),Jx(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Sl(718,"code"),Jx(719,"48px"),sg(),Jx(720," de altura e "),Sl(721,"code"),Jx(722,"48px"),sg(),Jx(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg(),Sl(724,"li"),Jx(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Sl(726,"code"),Jx(727,"p-logo"),sg(),Jx(728,"."),sg()()()(),Sl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),Jx(733," (p-toggle)"),Wl(734,"br"),sg()()(),Sl(735,"td",19)(736,"code",34),Jx(737,"EventEmitter"),sg()(),Sl(738,"td",21),Jx(739,"-"),sg(),Sl(740,"td",22)(741,"em")(742,"strong"),Jx(743,"(opcional)"),sg()(),Sl(744,"p"),Jx(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Sl(746,"code"),Jx(747,"true"),sg(),Jx(748," quando expandido e "),Sl(749,"code"),Jx(750,"false"),sg(),Jx(751," quando colapsado."),sg(),Sl(752,"pre")(753,"code",35),Jx(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),sg()()()()(),Sl(755,"h3",11),Jx(756,"M\xE9todos"),sg(),Sl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),Jx(763," collapse "),sg()()()()(),Sl(764,"tr",22)(765,"td",22)(766,"p"),Wl(767,"a",38),sg(),Sl(768,"p"),Jx(769,"M\xE9todo para colapsar (retrair) o menu."),sg()()()(),Wl(770,"br"),Sl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),Jx(777," expand "),sg()()()()(),Sl(778,"tr",22)(779,"td",22)(780,"p"),Wl(781,"a",39),sg(),Sl(782,"p"),Jx(783,"M\xE9todo para expandir (aumentar) o menu."),sg()()()(),Wl(784,"br"),Sl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),Jx(791," toggle "),sg()()()()(),Sl(792,"tr",22)(793,"td",22)(794,"p"),Wl(795,"a",40),Jx(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),sg(),Sl(797,"blockquote")(798,"p"),Jx(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),sg()(),Sl(800,"ul")(801,"li"),Jx(802,"Todos os itens de menu tiverem valor nas propriedades "),Sl(803,"code"),Jx(804,"icon"),sg(),Jx(805," e "),Sl(806,"code"),Jx(807,"shortLabel"),sg(),Jx(808,"."),sg()()()()(),Wl(809,"br"),Sl(810,"h3"),Jx(811,"Interfaces"),sg(),Sl(812,"h4",41)(813,"code",5),Jx(814,"PoMenuFilter"),sg()(),Sl(815,"div",2)(816,"p"),Jx(817,"Interface do servi\xE7o utilizado no componente "),Sl(818,"code"),Jx(819,"po-menu"),sg(),Jx(820,"."),sg()(),Sl(821,"h4",11),Jx(822,"M\xE9todos"),sg(),Sl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),Jx(829," getFilteredData "),sg()()()()(),Sl(830,"tr",22)(831,"td",22)(832,"p"),Jx(833,"M\xE9todo respons\xE1vel por retornar um "),Sl(834,"em"),Jx(835,"Observable"),sg(),Jx(836," que retorne uma lista de objetos que seguem a interface "),Sl(837,"code"),Jx(838,"PoMenuItemFiltered"),sg(),Jx(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Sl(840,"code"),Jx(841,"p-params"),sg(),Jx(842,"."),sg()()()(),Sl(843,"h5")(844,"b"),Jx(845,"Par\xE2metros"),sg()(),Sl(846,"table",12)(847,"tr",13)(848,"th",14),Jx(849,"Nome"),sg(),Sl(850,"th",14),Jx(851,"Tipo"),sg(),Sl(852,"th",14),Jx(853,"Descri\xE7\xE3o"),sg()(),Sl(854,"tr",15)(855,"td",16),Jx(856," search"),sg(),Sl(857,"td",19)(858,"code",42),Jx(859," string "),sg()(),Sl(860,"td",22)(861,"p"),Jx(862,"Valor informado no campo de busca dos itens de menus."),sg()()(),Sl(863,"tr",15)(864,"td",16),Jx(865," params"),sg(),Sl(866,"td",19)(867,"code",42),Jx(868," any "),sg()(),Sl(869,"td",22)(870,"p"),Jx(871,"Valor informado atrav\xE9s da propriedade "),Sl(872,"code"),Jx(873,"p-params"),sg(),Jx(874,"."),sg()()()(),Wl(875,"br"),Sl(876,"h4",41)(877,"code",5),Jx(878,"PoMenuItemBadge"),sg()(),Sl(879,"div",2)(880,"p"),Jx(881,"Interface do "),Sl(882,"em"),Jx(883,"badge"),sg(),Jx(884," utilizado no "),Sl(885,"code"),Jx(886,"po-menu"),sg(),Jx(887,"."),sg()(),Sl(888,"h4",11),Jx(889,"Propriedades"),sg(),Sl(890,"table",12)(891,"tr",13)(892,"th",14),Jx(893,"Nome"),sg(),Sl(894,"th",14),Jx(895,"Tipo"),sg(),Sl(896,"th",14),Jx(897,"Descri\xE7\xE3o"),sg()(),Sl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),Jx(902," color"),Wl(903,"br"),sg()()(),Sl(904,"td",19)(905,"code",26),Jx(906,"string"),sg()(),Sl(907,"td",22)(908,"em")(909,"strong"),Jx(910,"(opcional)"),sg()(),Sl(911,"p"),Jx(912,"Define a cor do "),Sl(913,"em"),Jx(914,"badge"),sg(),Jx(915," e aceita os valores:"),sg(),Sl(916,"p"),Wl(917,"span",43),Sl(918,"code"),Jx(919,"color-01"),sg()(),Sl(920,"p"),Wl(921,"span",44),Sl(922,"code"),Jx(923,"color-02"),sg()(),Sl(924,"p"),Wl(925,"span",45),Sl(926,"code"),Jx(927,"color-03"),sg()(),Sl(928,"p"),Wl(929,"span",46),Sl(930,"code"),Jx(931,"color-04"),sg()(),Sl(932,"p"),Wl(933,"span",47),Sl(934,"code"),Jx(935,"color-05"),sg()(),Sl(936,"p"),Wl(937,"span",48),Sl(938,"code"),Jx(939,"color-06"),sg()(),Sl(940,"p"),Wl(941,"span",49),Sl(942,"code"),Jx(943,"color-07"),sg()(),Sl(944,"p"),Wl(945,"span",50),Sl(946,"code"),Jx(947,"color-08"),sg()(),Sl(948,"p"),Wl(949,"span",51),Sl(950,"code"),Jx(951,"color-09"),sg()(),Sl(952,"p"),Wl(953,"span",52),Sl(954,"code"),Jx(955,"color-10"),sg()(),Sl(956,"p"),Wl(957,"span",53),Sl(958,"code"),Jx(959,"color-11"),sg()(),Sl(960,"p"),Wl(961,"span",54),Sl(962,"code"),Jx(963,"color-12"),sg()()()(),Sl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),Jx(968," value"),Wl(969,"br"),sg()()(),Sl(970,"td",19)(971,"code",55),Jx(972,"number"),sg()(),Sl(973,"td",22)(974,"p"),Jx(975,"N\xFAmero exibido no "),Sl(976,"em"),Jx(977,"badge"),sg(),Jx(978,", caso o mesmo seja maior que "),Sl(979,"strong"),Jx(980,"9"),sg(),Jx(981," o mesmo exibe "),Sl(982,"strong"),Jx(983,"9+"),sg(),Jx(984,"."),sg()()()(),Sl(985,"h4",41)(986,"code",5),Jx(987,"PoMenuItemFiltered"),sg()(),Sl(988,"div",2)(989,"p"),Jx(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Sl(991,"code"),Jx(992,"po-menu"),sg(),Jx(993,"."),sg()(),Sl(994,"h4",11),Jx(995,"Propriedades"),sg(),Sl(996,"table",12)(997,"tr",13)(998,"th",14),Jx(999,"Nome"),sg(),Sl(1e3,"th",14),Jx(1001,"Tipo"),sg(),Sl(1002,"th",14),Jx(1003,"Descri\xE7\xE3o"),sg()(),Sl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),Jx(1008," action"),Wl(1009,"br"),sg()()(),Sl(1010,"td",19)(1011,"code",56),Jx(1012,"() => void"),sg()(),Sl(1013,"td",22)(1014,"p"),Jx(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),sg()()(),Sl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),Jx(1020," label"),Wl(1021,"br"),sg()()(),Sl(1022,"td",19)(1023,"code",26),Jx(1024,"string"),sg()(),Sl(1025,"td",22)(1026,"p"),Jx(1027,"Texto do item de menu."),sg()()(),Sl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),Jx(1032," link"),Wl(1033,"br"),sg()()(),Sl(1034,"td",19)(1035,"code",26),Jx(1036,"string"),sg()(),Sl(1037,"td",22)(1038,"p"),Jx(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Sl(1040,"em"),Jx(1041,"link"),sg(),Jx(1042," interno ou externo."),sg()()()(),Sl(1043,"h4",41)(1044,"code",5),Jx(1045,"PoMenuItem"),sg()(),Sl(1046,"div",2)(1047,"p"),Jx(1048,"Interface para os itens de menu do componente po-menu."),sg()(),Sl(1049,"h4",11),Jx(1050,"Propriedades"),sg(),Sl(1051,"table",12)(1052,"tr",13)(1053,"th",14),Jx(1054,"Nome"),sg(),Sl(1055,"th",14),Jx(1056,"Tipo"),sg(),Sl(1057,"th",14),Jx(1058,"Descri\xE7\xE3o"),sg()(),Sl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),Jx(1063," action"),Wl(1064,"br"),sg()()(),Sl(1065,"td",19)(1066,"code",57),Jx(1067,"Function"),sg()(),Sl(1068,"td",22)(1069,"em")(1070,"strong"),Jx(1071,"(opcional)"),sg()(),Sl(1072,"p"),Jx(1073,"A\xE7\xE3o personalizada para clique do item de menu."),sg()()(),Sl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),Jx(1078," badge"),Wl(1079,"br"),sg()()(),Sl(1080,"td",19)(1081,"code",58),Jx(1082,"PoMenuItemBadge"),sg()(),Sl(1083,"td",22)(1084,"em")(1085,"strong"),Jx(1086,"(opcional)"),sg()(),Sl(1087,"p"),Jx(1088,"Badge do item de menu."),sg(),Sl(1089,"p"),Jx(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),sg(),Sl(1091,"blockquote")(1092,"p"),Jx(1093,"O "),Sl(1094,"code"),Jx(1095,"po-badge"),sg(),Jx(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Sl(1097,"code"),Jx(1098,"subItems"),sg(),Jx(1099," e seu valor seja maior ou igual a 0."),sg()()()(),Sl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Jx(1104," icon"),Wl(1105,"br"),sg()()(),Sl(1106,"td",19)(1107,"code",26),Jx(1108,"string "),sg(),Sl(1109,"code",59),Jx(1110," TemplateRef<void>"),sg()(),Sl(1111,"td",22)(1112,"em")(1113,"strong"),Jx(1114,"(opcional)"),sg()(),Sl(1115,"p"),Jx(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(1117,"a",60),Jx(1118,"Biblioteca de \xEDcones"),sg(),Jx(1119,". conforme exemplo abaixo:"),sg(),Sl(1120,"pre")(1121,"code"),Jx(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),sg()(),Sl(1123,"p"),Jx(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Sl(1125,"pre")(1126,"code"),Jx(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),sg()(),Sl(1128,"p"),Jx(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(1130,"code"),Jx(1131,"TemplateRef"),sg(),Jx(1132,`, conforme exemplo abaixo:
component.html:`),sg(),Sl(1133,"pre")(1134,"code"),Jx(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),sg()(),Sl(1136,"p"),Jx(1137,"component.ts:"),sg(),Sl(1138,"pre")(1139,"code"),Jx(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),sg()(),Sl(1141,"blockquote")(1142,"p"),Jx(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),sg()()()(),Sl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),Jx(1148," label"),Wl(1149,"br"),sg()()(),Sl(1150,"td",19)(1151,"code",26),Jx(1152,"string"),sg()(),Sl(1153,"td",22)(1154,"p"),Jx(1155,"Texto do item de menu."),sg()()(),Sl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),Jx(1160," link"),Wl(1161,"br"),sg()()(),Sl(1162,"td",19)(1163,"code",26),Jx(1164,"string"),sg()(),Sl(1165,"td",22)(1166,"em")(1167,"strong"),Jx(1168,"(opcional)"),sg()(),Sl(1169,"p"),Jx(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),sg()()(),Sl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),Jx(1175," shortLabel"),Wl(1176,"br"),sg()()(),Sl(1177,"td",19)(1178,"code",26),Jx(1179,"string"),sg()(),Sl(1180,"td",22)(1181,"em")(1182,"strong"),Jx(1183,"(opcional)"),sg()(),Sl(1184,"p"),Jx(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),sg()()(),Sl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),Jx(1190," subItems"),Wl(1191,"br"),sg()()(),Sl(1192,"td",19)(1193,"code",61),Jx(1194,"Array<PoMenuItem>"),sg()(),Sl(1195,"td",22)(1196,"em")(1197,"strong"),Jx(1198,"(opcional)"),sg()(),Sl(1199,"p"),Jx(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-menu-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ve,Me,ye,we],encapsulation:2})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(je),pL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,_e]})}return a})();export{_t as DocPoMenuModule};