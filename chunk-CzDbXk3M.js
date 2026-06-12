import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,ae as He,t as tb,q,S,M as cR,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,cx as nde,b0 as _v,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,d0 as $3,cd as sme,a3 as SNe,aB as gx,aM as gw,aN as Z0,a2 as WE,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,dr as Yw,ds as INe,W as we$1,bv as Jx,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Hl(0,"po-menu",0),r&2&&ZE("p-menus",oN(2,Le,iN(1,ke)));},dependencies:[cR],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-menu-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return a})();function Re(a,W){if(a&1&&(Cl(0,"div"),Hl(1,"span"),Cl(2,"span",26),qx(3),og()()),a&2){let m=W.$implicit;Lp(),Fx(Jx("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Lp(2),dg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(He);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&zl(cR,7),r&2){let s;uo(s=fo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"div",1),Hl(1,"po-menu",2),Cl(2,"po-page-default",3)(3,"div",4),Hl(4,"po-info",5)(5,"po-button-group",6),og(),Hl(6,"po-divider"),Cl(7,"div",4),Hl(8,"po-info",7),Cl(9,"form",null,0)(11,"po-switch",8),gw("ngModelChange",function(l){return Jy(s),Zx(i.filter,l)||(i.filter=l),e_(l)}),dt("ngModelChange",function(l){return i.onFilterChange(l)}),og(),Z0(),Cl(12,"po-switch",9),gw("ngModelChange",function(l){return Jy(s),Zx(i.searchTreeItems,l)||(i.searchTreeItems=l),e_(l)}),og(),Z0(),Cl(13,"po-select",10),gw("ngModelChange",function(l){return Jy(s),Zx(i.parent,l)||(i.parent=l),e_(l)}),og(),Z0(),Cl(14,"po-input",11),gw("ngModelChange",function(l){return Jy(s),Zx(i.label,l)||(i.label=l),e_(l)}),og(),Z0(),Cl(15,"po-input",12),gw("ngModelChange",function(l){return Jy(s),Zx(i.shortLabel,l)||(i.shortLabel=l),e_(l)}),og(),Z0(),Cl(16,"po-url",13),gw("ngModelChange",function(l){return Jy(s),Zx(i.link,l)||(i.link=l),e_(l)}),og(),Z0(),Cl(17,"po-select",14),gw("ngModelChange",function(l){return Jy(s),Zx(i.badgeColor,l)||(i.badgeColor=l),e_(l)}),WE(18,Re,4,4,"ng-template",15),og(),Z0(),Cl(19,"po-number",16),gw("ngModelChange",function(l){return Jy(s),Zx(i.badgeValue,l)||(i.badgeValue=l),e_(l)}),og(),Z0(),Cl(20,"po-select",17),gw("ngModelChange",function(l){return Jy(s),Zx(i.icon,l)||(i.icon=l),e_(l)}),og(),Z0(),Cl(21,"div",4)(22,"po-button",18),dt("p-click",function(){return i.addMenuItem()}),og()(),Hl(23,"po-divider"),Cl(24,"po-input",19),gw("ngModelChange",function(l){return Jy(s),Zx(i.service,l)||(i.service=l),e_(l)}),og(),Z0(),Cl(25,"po-input",20),gw("ngModelChange",function(l){return Jy(s),Zx(i.menuParams,l)||(i.menuParams=l),e_(l)}),dt("p-change-model",function(l){return i.onChangeParams(l)}),og(),Z0(),Cl(26,"po-input",21),gw("ngModelChange",function(l){return Jy(s),Zx(i.logo,l)||(i.logo=l),e_(l)}),og(),Z0(),Cl(27,"po-input",22),gw("ngModelChange",function(l){return Jy(s),Zx(i.shortLogo,l)||(i.shortLogo=l),e_(l)}),og(),Z0(),Cl(28,"po-input",23),gw("ngModelChange",function(l){return Jy(s),Zx(i.logoLink,l)||(i.logoLink=l),e_(l)}),og(),Z0(),Cl(29,"po-radio-group",24),gw("ngModelChange",function(l){return Jy(s),Zx(i.componentsSize,l)||(i.componentsSize=l),e_(l)}),og(),Z0(),Cl(30,"div",4)(31,"po-button",25),dt("p-click",function(){return i.restore()}),og()()()()()();}r&2&&(Lp(),ZE("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Lp(4),ZE("p-buttons",i.buttons),Lp(3),ZE("p-value",i.menuItemSelected),Lp(3),pw("ngModel",i.filter),X0(),Lp(),pw("ngModel",i.searchTreeItems),ZE("p-disabled",!i.filter),X0(),Lp(),pw("ngModel",i.parent),ZE("p-options",i.parentList),X0(),Lp(),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.shortLabel),X0(),Lp(),pw("ngModel",i.link),X0(),Lp(),pw("ngModel",i.badgeColor),ZE("p-options",i.badgeColorList),X0(),Lp(2),pw("ngModel",i.badgeValue),ZE("p-max",i.maxBadgeValue),X0(),Lp(),pw("ngModel",i.icon),ZE("p-disabled",i.parent)("p-options",i.iconsOptions),X0(),Lp(4),pw("ngModel",i.service),X0(),Lp(),pw("ngModel",i.menuParams),X0(),Lp(),pw("ngModel",i.logo),X0(),Lp(),pw("ngModel",i.shortLogo),X0(),Lp(),pw("ngModel",i.logoLink),X0(),Lp(),pw("ngModel",i.componentsSize),ZE("p-options",i.componentsSizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,nde,_v,q3,Hhe,Nde,nme,H3,$3,sme,cR,SNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-wrapper">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-menu-labs"),og(),Hl(29,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,qe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return a})();var O=(()=>{class a{http=f(tb);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(q(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Cl(0,"div",5)(1,"p"),qx(2,"Welcome,"),og(),Cl(3,"p")(4,"b"),qx(5," John Doe "),og()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"po-menu",1),WE(2,Be,6,0,"div",2),og(),Hl(3,"po-toolbar",3)(4,"po-page-default",4),og()),r&2&&(Lp(),ZE("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Lp(2),ZE("p-show-notification",false),Lp(),ZE("p-title",i.menuItemSelected));},dependencies:[cR,Yw,SNe,INe],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu - Human Resources"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-wrapper">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),og(),Cl(29,"pre",11),qx(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-menu-human-resources"),og(),Hl(33,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Pe],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoMenuModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-menu."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoMenuComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),og(),Cl(15,"p"),qx(16,"O componente po-menu recebe uma lista de objetos do tipo "),Cl(17,"code"),qx(18,"MenuItem"),og(),qx(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),og(),Cl(20,"h4"),qx(21,"Tokens customiz\xE1veis"),og(),Cl(22,"p"),qx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(24,"blockquote")(25,"p"),qx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(27,"a",6),qx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(29,"."),og()(),Cl(30,"table")(31,"thead")(32,"tr")(33,"th"),qx(34,"Propriedade"),og(),Cl(35,"th"),qx(36,"Descri\xE7\xE3o"),og(),Cl(37,"th"),qx(38,"Valor Padr\xE3o"),og()()(),Cl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),qx(43,"Default Values"),og()(),Hl(44,"td")(45,"td"),og(),Cl(46,"tr")(47,"td")(48,"code"),qx(49,"--border-radius"),og()(),Cl(50,"td"),qx(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(52,"td")(53,"code"),qx(54,"var(--border-radius-md)"),og()()(),Cl(55,"tr")(56,"td")(57,"code"),qx(58,"--border-color"),og()(),Cl(59,"td"),qx(60,"Cor da borda"),og(),Cl(61,"td")(62,"code"),qx(63,"var(--color-neutral-light-20)"),og()()(),Cl(64,"tr")(65,"td")(66,"code"),qx(67,"--background-color"),og()(),Cl(68,"td"),qx(69,"Cor de background"),og(),Cl(70,"td")(71,"code"),qx(72,"Var(----color-neutral-light-05)"),og()()(),Cl(73,"tr")(74,"td")(75,"strong"),qx(76,"Menu Footer"),og()(),Hl(77,"td")(78,"td"),og(),Cl(79,"tr")(80,"td")(81,"code"),qx(82,"--color"),og()(),Cl(83,"td"),qx(84,"Cor principla do menu footer"),og(),Cl(85,"td")(86,"code"),qx(87,"var(--color-action-default)"),og()()(),Cl(88,"tr")(89,"td")(90,"code"),qx(91,"--font-size"),og()(),Cl(92,"td"),qx(93,"Tamanho da fonte"),og(),Cl(94,"td")(95,"code"),qx(96,"var(--font-size-default)"),og()()(),Cl(97,"tr")(98,"td")(99,"code"),qx(100,"--line-height"),og()(),Cl(101,"td"),qx(102,"Tamanho da label"),og(),Cl(103,"td")(104,"code"),qx(105,"var(--line-height-md)"),og()()(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--outline-color-focused"),og()(),Cl(110,"td"),qx(111,"Cor do outline do estado de focus"),og(),Cl(112,"td")(113,"code"),qx(114,"var(--color-action-focus)"),og()()(),Cl(115,"tr")(116,"td")(117,"code"),qx(118,"--font-weight-lvl0"),og()(),Cl(119,"td"),qx(120,"Peso da fonte"),og(),Cl(121,"td")(122,"code"),qx(123,"var(--font-weight-bold)"),og()()(),Cl(124,"tr")(125,"td")(126,"strong"),qx(127,"po-menu-item"),og()(),Hl(128,"td")(129,"td"),og(),Cl(130,"tr")(131,"td")(132,"code"),qx(133,"--font-family"),og()(),Cl(134,"td"),qx(135,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(136,"td")(137,"code"),qx(138,"var(--font-family-theme)"),og()()(),Cl(139,"tr")(140,"td")(141,"code"),qx(142,"--font-size"),og()(),Cl(143,"td"),qx(144,"Tamanho da fonte"),og(),Cl(145,"td")(146,"code"),qx(147,"var(--font-size-default)"),og()()(),Cl(148,"tr")(149,"td")(150,"code"),qx(151,"--line-height"),og()(),Cl(152,"td"),qx(153,"Tamanho da label"),og(),Cl(154,"td")(155,"code"),qx(156,"var(--line-height-md)"),og()()(),Cl(157,"tr")(158,"td")(159,"code"),qx(160,"--border-radius"),og()(),Cl(161,"td"),qx(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(163,"td")(164,"code"),qx(165,"var(--border-radius-md)"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--color"),og()(),Cl(170,"td"),qx(171,"Cor principal do item"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-action-default)"),og()()(),Cl(175,"tr")(176,"td")(177,"code"),qx(178,"--background-color"),og()(),Cl(179,"td"),qx(180,"Cor do background"),og(),Cl(181,"td")(182,"code"),qx(183,"transparent"),og()()(),Cl(184,"tr")(185,"td")(186,"strong"),qx(187,"Hover"),og()(),Hl(188,"td")(189,"td"),og(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--color-hover"),og()(),Cl(194,"td"),qx(195,"Cor principal no estado hover"),og(),Cl(196,"td")(197,"code"),qx(198,"var(--color-brand-01-darkest)"),og()()(),Cl(199,"tr")(200,"td")(201,"code"),qx(202,"--background-color-hover"),og()(),Cl(203,"td"),qx(204,"Cor de background no estado hover"),og(),Cl(205,"td")(206,"code"),qx(207,"var(--color-brand-01-lighter)"),og()()(),Cl(208,"tr")(209,"td")(210,"strong"),qx(211,"Focused"),og()(),Hl(212,"td")(213,"td"),og(),Cl(214,"tr")(215,"td")(216,"code"),qx(217,"--outline-color-focused"),og()(),Cl(218,"td"),qx(219,"Cor do outline do estado de focus"),og(),Cl(220,"td")(221,"code"),qx(222,"var(--color-action-focus)"),og()()(),Cl(223,"tr")(224,"td")(225,"strong"),qx(226,"Pressed"),og()(),Hl(227,"td")(228,"td"),og(),Cl(229,"tr")(230,"td")(231,"code"),qx(232,"--background-color-pressed"),og(),qx(233," \xA0"),og(),Cl(234,"td"),qx(235,"Cor de background no estado de pressionado\xA0"),og(),Cl(236,"td")(237,"code"),qx(238,"var(--color-brand-01-light)"),og()()(),Cl(239,"tr")(240,"td")(241,"strong"),qx(242,"Actived"),og()(),Hl(243,"td")(244,"td"),og(),Cl(245,"tr")(246,"td")(247,"code"),qx(248,"--background-color-actived"),og()(),Cl(249,"td"),qx(250,"Cor de background no estado actived"),og(),Cl(251,"td")(252,"code"),qx(253,"var(--color-brand-01-darkest)"),og()()(),Cl(254,"tr")(255,"td")(256,"code"),qx(257,"--color-actived"),og()(),Cl(258,"td"),qx(259,"Cor principal no estado actived"),og(),Cl(260,"td")(261,"code"),qx(262,"var(--color-brand-01-lighter)"),og()()(),Cl(263,"tr")(264,"td")(265,"strong"),qx(266,"Font"),og()(),Hl(267,"td")(268,"td"),og(),Cl(269,"tr")(270,"td")(271,"code"),qx(272,"--font-weight-lvl0"),og()(),Cl(273,"td"),qx(274,"Peso da fonte bold"),og(),Cl(275,"td")(276,"code"),qx(277,"var(--font-weight-bold)"),og()()(),Cl(278,"tr")(279,"td")(280,"code"),qx(281,"--font-weight-lvl1"),og()(),Cl(282,"td"),qx(283,"Peso da fonte"),og(),Cl(284,"td")(285,"code"),qx(286,"var(--font-weight-normal)"),og()()()()(),Cl(287,"p"),Hl(288,"br"),qx(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),og(),Cl(290,"p"),qx(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),og(),Cl(292,"p"),qx(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),og(),Cl(294,"p"),qx(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Cl(296,"a",7)(297,"strong"),qx(298,"p-menu-header-template"),og()(),qx(299,"."),og(),Cl(300,"p"),qx(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Cl(302,"code"),qx(303,"PoMenuFilter"),og(),qx(304,"."),og(),Cl(305,"p"),qx(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Cl(307,"code"),qx(308,"RouterModule"),og(),qx(309," e "),Cl(310,"code"),qx(311,"Routes"),og(),qx(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),og(),Cl(313,"pre")(314,"code"),qx(315,`import { RouterModule, Routes } from '@angular/router';

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
`),og()(),Cl(316,"p"),qx(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),og(),Cl(318,"pre")(319,"code"),qx(320,`import { NgModule } from '@angular/core';

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
`),og()()(),Cl(321,"div",8)(322,"h4",9),qx(323,"Seletor"),og(),Cl(324,"pre",10),qx(325,`<po-menu
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
`),og()(),Cl(326,"h4",11),qx(327,"Propriedades"),og(),Cl(328,"table",12)(329,"tr",13)(330,"th",14),qx(331,"Nome"),og(),Cl(332,"th",14),qx(333,"Tipo"),og(),Cl(334,"th",14),qx(335,"Padr\xE3o"),og(),Cl(336,"th",14),qx(337,"Descri\xE7\xE3o"),og()(),Cl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),qx(342," p-automatic-toggle"),Hl(343,"br"),og()()(),Cl(344,"td",19)(345,"code",20),qx(346,"boolean"),og()(),Cl(347,"td",21)(348,"p")(349,"code"),qx(350,"false"),og()()(),Cl(351,"td",22)(352,"em")(353,"strong"),qx(354,"(opcional)"),og()(),Cl(355,"p"),qx(356,"Expande e Colapsa (retrai) o menu automaticamente."),og()()(),Cl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),qx(361," p-collapsed"),Hl(362,"br"),og()()(),Cl(363,"td",19)(364,"code",20),qx(365,"boolean"),og()(),Cl(366,"td",21)(367,"p")(368,"code"),qx(369,"false"),og()()(),Cl(370,"td",22)(371,"em")(372,"strong"),qx(373,"(opcional)"),og()(),Cl(374,"p"),qx(375,"Colapsa (retrai) o menu e caso receba o valor "),Cl(376,"code"),qx(377,"false"),og(),qx(378," expande o menu."),og(),Cl(379,"blockquote")(380,"p"),qx(381,"Utilize esta propriedade para iniciar o menu colapsado."),og()(),Cl(382,"blockquote")(383,"p"),qx(384,"Ao utilizar os m\xE9todos "),Cl(385,"a",23)(386,"code"),qx(387,"colapse"),og()(),qx(388,", "),Cl(389,"a",24)(390,"code"),qx(391,"expand"),og()(),qx(392,` e
`),Cl(393,"a",25)(394,"code"),qx(395,"toggle"),og()(),qx(396," o valor desta propriedade n\xE3o \xE9 alterado."),og()(),Cl(397,"p")(398,"strong"),qx(399,"Importante:"),og()(),Cl(400,"blockquote")(401,"p"),qx(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Cl(403,"code"),qx(404,"icon"),og(),qx(405," e "),Cl(406,"code"),qx(407,"shortLabel"),og(),qx(408,"."),og()()()(),Cl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),qx(413," p-components-size"),Hl(414,"br"),og()()(),Cl(415,"td",19)(416,"code",26),qx(417,"string"),og()(),Cl(418,"td",21)(419,"p")(420,"code"),qx(421,"medium"),og()()(),Cl(422,"td",22)(423,"em")(424,"strong"),qx(425,"(opcional)"),og()(),Cl(426,"p"),qx(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),og(),Cl(428,"ul")(429,"li")(430,"code"),qx(431,"small"),og(),qx(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(433,"li")(434,"code"),qx(435,"medium"),og(),qx(436,": aplica a medida medium de cada componente."),og()(),Cl(437,"blockquote")(438,"p"),qx(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(440,"code"),qx(441,"medium"),og(),qx(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(443,"a",27),qx(444,"po-theme"),og(),qx(445,"."),og()()()(),Cl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),qx(450," p-filter"),Hl(451,"br"),og()()(),Cl(452,"td",19)(453,"code",20),qx(454,"boolean"),og()(),Cl(455,"td",21)(456,"p")(457,"code"),qx(458,"false"),og()()(),Cl(459,"td",22)(460,"em")(461,"strong"),qx(462,"(opcional)"),og()(),Cl(463,"p"),qx(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Cl(465,"code"),qx(466,"p-service"),og(),qx(467,"."),og(),Cl(468,"blockquote")(469,"p"),qx(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),og()()()(),Cl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),qx(475," p-logo"),Hl(476,"br"),og()()(),Cl(477,"td",19)(478,"code",26),qx(479,"string"),og()(),Cl(480,"td",21),qx(481,"-"),og(),Cl(482,"td",22)(483,"em")(484,"strong"),qx(485,"(opcional)"),og()(),Cl(486,"p"),qx(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),og(),Cl(488,"blockquote")(489,"p")(490,"strong"),qx(491,"Importante:"),og()()(),Cl(492,"ul")(493,"li"),qx(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),og(),Cl(495,"li"),qx(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Cl(497,"code"),qx(498,"24px"),og(),qx(499," de altura e "),Cl(500,"code"),qx(501,"224px"),og(),qx(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og()()()(),Cl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),qx(507," p-logo-alt"),Hl(508,"br"),og()()(),Cl(509,"td",19)(510,"code",26),qx(511,"string"),og()(),Cl(512,"td",21)(513,"p")(514,"code"),qx(515,"Logomarca in\xEDcio"),og()()(),Cl(516,"td",22)(517,"em")(518,"strong"),qx(519,"(opcional)"),og()(),Cl(520,"p"),qx(521,"Define o texto alternativo para a logomarca."),og(),Cl(522,"blockquote")(523,"p")(524,"strong"),qx(525,"Importante"),og(),qx(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),og()()()(),Cl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),qx(531," p-logo-link"),Hl(532,"br"),og()()(),Cl(533,"td",19)(534,"code",20),qx(535,"boolean "),og(),Cl(536,"code",26),qx(537," string"),og()(),Cl(538,"td",21)(539,"p")(540,"code"),qx(541,"true"),og()()(),Cl(542,"td",22)(543,"em")(544,"strong"),qx(545,"(opcional)"),og()(),Cl(546,"p"),qx(547,"Define o link para a rota ao clicar no logo do menu."),og(),Cl(548,"ul")(549,"li"),qx(550,"Se o valor for uma string, define a rota para o link informado."),og(),Cl(551,"li"),qx(552,"Se for "),Cl(553,"code"),qx(554,"false"),og(),qx(555,", o logo n\xE3o ter\xE1 link associado."),og(),Cl(556,"li"),qx(557,"Se for "),Cl(558,"code"),qx(559,"true"),og(),qx(560,", o logo ter\xE1 a rota padr\xE3o "),Cl(561,"code"),qx(562,"./"),og(),qx(563,"."),og()()()(),Cl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),qx(568," p-menus"),Hl(569,"br"),og()()(),Cl(570,"td",19)(571,"code",28),qx(572,"PoMenuItem[]"),og()(),Cl(573,"td",21),qx(574,"-"),og(),Cl(575,"td",22)(576,"p"),qx(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og()()(),Cl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),qx(582," p-params"),Hl(583,"br"),og()()(),Cl(584,"td",19)(585,"code",29),qx(586,"any"),og()(),Cl(587,"td",21),qx(588,"-"),og(),Cl(589,"td",22)(590,"em")(591,"strong"),qx(592,"(opcional)"),og()(),Cl(593,"p"),qx(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),og(),Cl(595,"p"),qx(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Cl(597,"code"),qx(598,"PoMenuFilter"),og(),qx(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Cl(600,"code"),qx(601,"getFilteredData"),og(),qx(602,"."),og(),Cl(603,"p"),qx(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Cl(605,"em"),qx(606,"GET"),og(),qx(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Cl(608,"code"),qx(609,"search"),og(),qx(610,", veja exemplo:"),og(),Cl(611,"pre")(612,"code"),qx(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),og()()()(),Cl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),qx(618," p-search-tree-items"),Hl(619,"br"),og()()(),Cl(620,"td",19)(621,"code",20),qx(622,"boolean"),og()(),Cl(623,"td",21)(624,"p")(625,"code"),qx(626,"false"),og()()(),Cl(627,"td",22)(628,"em")(629,"strong"),qx(630,"(opcional)"),og()(),Cl(631,"p"),qx(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),og(),Cl(633,"blockquote")(634,"p"),qx(635,"\xC9 necess\xE1rio que a propriedade "),Cl(636,"code"),qx(637,"p-filter"),og(),qx(638," esteja habilitada."),og()()()(),Cl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),qx(643," p-service"),Hl(644,"br"),og()()(),Cl(645,"td",19)(646,"code",26),qx(647,"string "),og(),Cl(648,"code",30),qx(649," PoMenuFilter"),og()(),Cl(650,"td",21),qx(651,"-"),og(),Cl(652,"td",22)(653,"em")(654,"strong"),qx(655,"(opcional)"),og()(),Cl(656,"p"),qx(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Cl(658,"code"),qx(659,"PoMenuFilter"),og(),qx(660,"."),og(),Cl(661,"p"),qx(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Cl(663,"a",31),qx(664,"Guia de implementa\xE7\xE3o de APIs"),og(),qx(665," do PO UI."),og(),Cl(666,"p"),qx(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Cl(668,"em"),qx(669,"GET"),og(),qx(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Cl(671,"code"),qx(672,"search"),og(),qx(673,", veja exemplo:"),og(),Cl(674,"blockquote")(675,"p"),qx(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Cl(677,"code"),qx(678,"tot"),og(),qx(679,"."),og()(),Cl(680,"pre")(681,"code"),qx(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),og()(),Cl(683,"blockquote")(684,"p"),qx(685,"\xC9 necess\xE1rio que propriedade "),Cl(686,"code"),qx(687,"p-filter"),og(),qx(688," esteja habilitada."),og()()()(),Cl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),qx(693," p-short-logo"),Hl(694,"br"),og()()(),Cl(695,"td",19)(696,"code",26),qx(697,"string"),og()(),Cl(698,"td",21),qx(699,"-"),og(),Cl(700,"td",22)(701,"em")(702,"strong"),qx(703,"(opcional)"),og()(),Cl(704,"p"),qx(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),og(),Cl(706,"blockquote")(707,"p")(708,"strong"),qx(709,"Importante:"),og()()(),Cl(710,"ul")(711,"li"),qx(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Cl(713,"code"),qx(714,"p-logo"),og(),qx(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),og(),Cl(716,"li"),qx(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Cl(718,"code"),qx(719,"48px"),og(),qx(720," de altura e "),Cl(721,"code"),qx(722,"48px"),og(),qx(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og(),Cl(724,"li"),qx(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Cl(726,"code"),qx(727,"p-logo"),og(),qx(728,"."),og()()()(),Cl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),qx(733," (p-toggle)"),Hl(734,"br"),og()()(),Cl(735,"td",19)(736,"code",34),qx(737,"EventEmitter"),og()(),Cl(738,"td",21),qx(739,"-"),og(),Cl(740,"td",22)(741,"em")(742,"strong"),qx(743,"(opcional)"),og()(),Cl(744,"p"),qx(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Cl(746,"code"),qx(747,"true"),og(),qx(748," quando expandido e "),Cl(749,"code"),qx(750,"false"),og(),qx(751," quando colapsado."),og(),Cl(752,"pre")(753,"code",35),qx(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),og()()()()(),Cl(755,"h3",11),qx(756,"M\xE9todos"),og(),Cl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),qx(763," collapse "),og()()()()(),Cl(764,"tr",22)(765,"td",22)(766,"p"),Hl(767,"a",38),og(),Cl(768,"p"),qx(769,"M\xE9todo para colapsar (retrair) o menu."),og()()()(),Hl(770,"br"),Cl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),qx(777," expand "),og()()()()(),Cl(778,"tr",22)(779,"td",22)(780,"p"),Hl(781,"a",39),og(),Cl(782,"p"),qx(783,"M\xE9todo para expandir (aumentar) o menu."),og()()()(),Hl(784,"br"),Cl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),qx(791," toggle "),og()()()()(),Cl(792,"tr",22)(793,"td",22)(794,"p"),Hl(795,"a",40),qx(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),og(),Cl(797,"blockquote")(798,"p"),qx(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),og()(),Cl(800,"ul")(801,"li"),qx(802,"Todos os itens de menu tiverem valor nas propriedades "),Cl(803,"code"),qx(804,"icon"),og(),qx(805," e "),Cl(806,"code"),qx(807,"shortLabel"),og(),qx(808,"."),og()()()()(),Hl(809,"br"),Cl(810,"h3"),qx(811,"Interfaces"),og(),Cl(812,"h4",41)(813,"code",5),qx(814,"PoMenuFilter"),og()(),Cl(815,"div",2)(816,"p"),qx(817,"Interface do servi\xE7o utilizado no componente "),Cl(818,"code"),qx(819,"po-menu"),og(),qx(820,"."),og()(),Cl(821,"h4",11),qx(822,"M\xE9todos"),og(),Cl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),qx(829," getFilteredData "),og()()()()(),Cl(830,"tr",22)(831,"td",22)(832,"p"),qx(833,"M\xE9todo respons\xE1vel por retornar um "),Cl(834,"em"),qx(835,"Observable"),og(),qx(836," que retorne uma lista de objetos que seguem a interface "),Cl(837,"code"),qx(838,"PoMenuItemFiltered"),og(),qx(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Cl(840,"code"),qx(841,"p-params"),og(),qx(842,"."),og()()()(),Cl(843,"h5")(844,"b"),qx(845,"Par\xE2metros"),og()(),Cl(846,"table",12)(847,"tr",13)(848,"th",14),qx(849,"Nome"),og(),Cl(850,"th",14),qx(851,"Tipo"),og(),Cl(852,"th",14),qx(853,"Descri\xE7\xE3o"),og()(),Cl(854,"tr",15)(855,"td",16),qx(856," search"),og(),Cl(857,"td",19)(858,"code",42),qx(859," string "),og()(),Cl(860,"td",22)(861,"p"),qx(862,"Valor informado no campo de busca dos itens de menus."),og()()(),Cl(863,"tr",15)(864,"td",16),qx(865," params"),og(),Cl(866,"td",19)(867,"code",42),qx(868," any "),og()(),Cl(869,"td",22)(870,"p"),qx(871,"Valor informado atrav\xE9s da propriedade "),Cl(872,"code"),qx(873,"p-params"),og(),qx(874,"."),og()()()(),Hl(875,"br"),Cl(876,"h4",41)(877,"code",5),qx(878,"PoMenuItemBadge"),og()(),Cl(879,"div",2)(880,"p"),qx(881,"Interface do "),Cl(882,"em"),qx(883,"badge"),og(),qx(884," utilizado no "),Cl(885,"code"),qx(886,"po-menu"),og(),qx(887,"."),og()(),Cl(888,"h4",11),qx(889,"Propriedades"),og(),Cl(890,"table",12)(891,"tr",13)(892,"th",14),qx(893,"Nome"),og(),Cl(894,"th",14),qx(895,"Tipo"),og(),Cl(896,"th",14),qx(897,"Descri\xE7\xE3o"),og()(),Cl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),qx(902," color"),Hl(903,"br"),og()()(),Cl(904,"td",19)(905,"code",26),qx(906,"string"),og()(),Cl(907,"td",22)(908,"em")(909,"strong"),qx(910,"(opcional)"),og()(),Cl(911,"p"),qx(912,"Define a cor do "),Cl(913,"em"),qx(914,"badge"),og(),qx(915," e aceita os valores:"),og(),Cl(916,"p"),Hl(917,"span",43),Cl(918,"code"),qx(919,"color-01"),og()(),Cl(920,"p"),Hl(921,"span",44),Cl(922,"code"),qx(923,"color-02"),og()(),Cl(924,"p"),Hl(925,"span",45),Cl(926,"code"),qx(927,"color-03"),og()(),Cl(928,"p"),Hl(929,"span",46),Cl(930,"code"),qx(931,"color-04"),og()(),Cl(932,"p"),Hl(933,"span",47),Cl(934,"code"),qx(935,"color-05"),og()(),Cl(936,"p"),Hl(937,"span",48),Cl(938,"code"),qx(939,"color-06"),og()(),Cl(940,"p"),Hl(941,"span",49),Cl(942,"code"),qx(943,"color-07"),og()(),Cl(944,"p"),Hl(945,"span",50),Cl(946,"code"),qx(947,"color-08"),og()(),Cl(948,"p"),Hl(949,"span",51),Cl(950,"code"),qx(951,"color-09"),og()(),Cl(952,"p"),Hl(953,"span",52),Cl(954,"code"),qx(955,"color-10"),og()(),Cl(956,"p"),Hl(957,"span",53),Cl(958,"code"),qx(959,"color-11"),og()(),Cl(960,"p"),Hl(961,"span",54),Cl(962,"code"),qx(963,"color-12"),og()()()(),Cl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),qx(968," value"),Hl(969,"br"),og()()(),Cl(970,"td",19)(971,"code",55),qx(972,"number"),og()(),Cl(973,"td",22)(974,"p"),qx(975,"N\xFAmero exibido no "),Cl(976,"em"),qx(977,"badge"),og(),qx(978,", caso o mesmo seja maior que "),Cl(979,"strong"),qx(980,"9"),og(),qx(981," o mesmo exibe "),Cl(982,"strong"),qx(983,"9+"),og(),qx(984,"."),og()()()(),Cl(985,"h4",41)(986,"code",5),qx(987,"PoMenuItemFiltered"),og()(),Cl(988,"div",2)(989,"p"),qx(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Cl(991,"code"),qx(992,"po-menu"),og(),qx(993,"."),og()(),Cl(994,"h4",11),qx(995,"Propriedades"),og(),Cl(996,"table",12)(997,"tr",13)(998,"th",14),qx(999,"Nome"),og(),Cl(1e3,"th",14),qx(1001,"Tipo"),og(),Cl(1002,"th",14),qx(1003,"Descri\xE7\xE3o"),og()(),Cl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),qx(1008," action"),Hl(1009,"br"),og()()(),Cl(1010,"td",19)(1011,"code",56),qx(1012,"() => void"),og()(),Cl(1013,"td",22)(1014,"p"),qx(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),og()()(),Cl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),qx(1020," label"),Hl(1021,"br"),og()()(),Cl(1022,"td",19)(1023,"code",26),qx(1024,"string"),og()(),Cl(1025,"td",22)(1026,"p"),qx(1027,"Texto do item de menu."),og()()(),Cl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),qx(1032," link"),Hl(1033,"br"),og()()(),Cl(1034,"td",19)(1035,"code",26),qx(1036,"string"),og()(),Cl(1037,"td",22)(1038,"p"),qx(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Cl(1040,"em"),qx(1041,"link"),og(),qx(1042," interno ou externo."),og()()()(),Cl(1043,"h4",41)(1044,"code",5),qx(1045,"PoMenuItem"),og()(),Cl(1046,"div",2)(1047,"p"),qx(1048,"Interface para os itens de menu do componente po-menu."),og()(),Cl(1049,"h4",11),qx(1050,"Propriedades"),og(),Cl(1051,"table",12)(1052,"tr",13)(1053,"th",14),qx(1054,"Nome"),og(),Cl(1055,"th",14),qx(1056,"Tipo"),og(),Cl(1057,"th",14),qx(1058,"Descri\xE7\xE3o"),og()(),Cl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),qx(1063," action"),Hl(1064,"br"),og()()(),Cl(1065,"td",19)(1066,"code",57),qx(1067,"Function"),og()(),Cl(1068,"td",22)(1069,"em")(1070,"strong"),qx(1071,"(opcional)"),og()(),Cl(1072,"p"),qx(1073,"A\xE7\xE3o personalizada para clique do item de menu."),og()()(),Cl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),qx(1078," badge"),Hl(1079,"br"),og()()(),Cl(1080,"td",19)(1081,"code",58),qx(1082,"PoMenuItemBadge"),og()(),Cl(1083,"td",22)(1084,"em")(1085,"strong"),qx(1086,"(opcional)"),og()(),Cl(1087,"p"),qx(1088,"Badge do item de menu."),og(),Cl(1089,"p"),qx(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),og(),Cl(1091,"blockquote")(1092,"p"),qx(1093,"O "),Cl(1094,"code"),qx(1095,"po-badge"),og(),qx(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Cl(1097,"code"),qx(1098,"subItems"),og(),qx(1099," e seu valor seja maior ou igual a 0."),og()()()(),Cl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),qx(1104," icon"),Hl(1105,"br"),og()()(),Cl(1106,"td",19)(1107,"code",26),qx(1108,"string "),og(),Cl(1109,"code",59),qx(1110," TemplateRef<void>"),og()(),Cl(1111,"td",22)(1112,"em")(1113,"strong"),qx(1114,"(opcional)"),og()(),Cl(1115,"p"),qx(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(1117,"a",60),qx(1118,"Biblioteca de \xEDcones"),og(),qx(1119,". conforme exemplo abaixo:"),og(),Cl(1120,"pre")(1121,"code"),qx(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),og()(),Cl(1123,"p"),qx(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Cl(1125,"pre")(1126,"code"),qx(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),og()(),Cl(1128,"p"),qx(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(1130,"code"),qx(1131,"TemplateRef"),og(),qx(1132,`, conforme exemplo abaixo:
component.html:`),og(),Cl(1133,"pre")(1134,"code"),qx(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),og()(),Cl(1136,"p"),qx(1137,"component.ts:"),og(),Cl(1138,"pre")(1139,"code"),qx(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),og()(),Cl(1141,"blockquote")(1142,"p"),qx(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),og()()()(),Cl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),qx(1148," label"),Hl(1149,"br"),og()()(),Cl(1150,"td",19)(1151,"code",26),qx(1152,"string"),og()(),Cl(1153,"td",22)(1154,"p"),qx(1155,"Texto do item de menu."),og()()(),Cl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),qx(1160," link"),Hl(1161,"br"),og()()(),Cl(1162,"td",19)(1163,"code",26),qx(1164,"string"),og()(),Cl(1165,"td",22)(1166,"em")(1167,"strong"),qx(1168,"(opcional)"),og()(),Cl(1169,"p"),qx(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),og()()(),Cl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),qx(1175," shortLabel"),Hl(1176,"br"),og()()(),Cl(1177,"td",19)(1178,"code",26),qx(1179,"string"),og()(),Cl(1180,"td",22)(1181,"em")(1182,"strong"),qx(1183,"(opcional)"),og()(),Cl(1184,"p"),qx(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),og()()(),Cl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),qx(1190," subItems"),Hl(1191,"br"),og()()(),Cl(1192,"td",19)(1193,"code",61),qx(1194,"Array<PoMenuItem>"),og()(),Cl(1195,"td",22)(1196,"em")(1197,"strong"),qx(1198,"(opcional)"),og()(),Cl(1199,"p"),qx(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-menu-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ve,Me,ye,we],encapsulation:2})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(je),bL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,_e]})}return a})();export{_t as DocPoMenuModule};