import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,ae as Be$1,r as rb,G,I,Q as Qz,J as Gl,M as tw,bs as hN,a7 as fN,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,cs as Wpe,b1 as mv,b4 as O3,cp as Nhe,c8 as Sde,aJ as Uhe,bH as k3,cX as L3,c9 as $he,a3 as aNe,aB as Cx,aM as Ew,aN as t0,a2 as QE,aO as Dw,aP as r0,av as Yl,aw as uo,ax as fo,dk as Nw,dl as mNe,O as we$1,br as aN,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Gl(0,"po-menu",0),r&2&&tw("p-menus",hN(2,Le,fN(1,ke)));},dependencies:[Qz],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Menu Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-menu-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,De,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,xe],encapsulation:2})}return a})();function Re(a,W){if(a&1&&(Tl(0,"div"),Gl(1,"span"),Tl(2,"span",26),tN(3),sg()()),a&2){let m=W.$implicit;Vp(),zx(aN("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Vp(2),fg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&Yl(Qz,7),r&2){let s;uo(s=fo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"div",1),Gl(1,"po-menu",2),Tl(2,"po-page-default",3)(3,"div",4),Gl(4,"po-info",5)(5,"po-button-group",6),sg(),Gl(6,"po-divider"),Tl(7,"div",4),Gl(8,"po-info",7),Tl(9,"form",null,0)(11,"po-switch",8),Ew("ngModelChange",function(l){return Ky(s),rN(i.filter,l)||(i.filter=l),Xy(l)}),ht("ngModelChange",function(l){return i.onFilterChange(l)}),sg(),t0(),Tl(12,"po-switch",9),Ew("ngModelChange",function(l){return Ky(s),rN(i.searchTreeItems,l)||(i.searchTreeItems=l),Xy(l)}),sg(),t0(),Tl(13,"po-select",10),Ew("ngModelChange",function(l){return Ky(s),rN(i.parent,l)||(i.parent=l),Xy(l)}),sg(),t0(),Tl(14,"po-input",11),Ew("ngModelChange",function(l){return Ky(s),rN(i.label,l)||(i.label=l),Xy(l)}),sg(),t0(),Tl(15,"po-input",12),Ew("ngModelChange",function(l){return Ky(s),rN(i.shortLabel,l)||(i.shortLabel=l),Xy(l)}),sg(),t0(),Tl(16,"po-url",13),Ew("ngModelChange",function(l){return Ky(s),rN(i.link,l)||(i.link=l),Xy(l)}),sg(),t0(),Tl(17,"po-select",14),Ew("ngModelChange",function(l){return Ky(s),rN(i.badgeColor,l)||(i.badgeColor=l),Xy(l)}),QE(18,Re,4,4,"ng-template",15),sg(),t0(),Tl(19,"po-number",16),Ew("ngModelChange",function(l){return Ky(s),rN(i.badgeValue,l)||(i.badgeValue=l),Xy(l)}),sg(),t0(),Tl(20,"po-select",17),Ew("ngModelChange",function(l){return Ky(s),rN(i.icon,l)||(i.icon=l),Xy(l)}),sg(),t0(),Tl(21,"div",4)(22,"po-button",18),ht("p-click",function(){return i.addMenuItem()}),sg()(),Gl(23,"po-divider"),Tl(24,"po-input",19),Ew("ngModelChange",function(l){return Ky(s),rN(i.service,l)||(i.service=l),Xy(l)}),sg(),t0(),Tl(25,"po-input",20),Ew("ngModelChange",function(l){return Ky(s),rN(i.menuParams,l)||(i.menuParams=l),Xy(l)}),ht("p-change-model",function(l){return i.onChangeParams(l)}),sg(),t0(),Tl(26,"po-input",21),Ew("ngModelChange",function(l){return Ky(s),rN(i.logo,l)||(i.logo=l),Xy(l)}),sg(),t0(),Tl(27,"po-input",22),Ew("ngModelChange",function(l){return Ky(s),rN(i.shortLogo,l)||(i.shortLogo=l),Xy(l)}),sg(),t0(),Tl(28,"po-input",23),Ew("ngModelChange",function(l){return Ky(s),rN(i.logoLink,l)||(i.logoLink=l),Xy(l)}),sg(),t0(),Tl(29,"po-radio-group",24),Ew("ngModelChange",function(l){return Ky(s),rN(i.componentsSize,l)||(i.componentsSize=l),Xy(l)}),sg(),t0(),Tl(30,"div",4)(31,"po-button",25),ht("p-click",function(){return i.restore()}),sg()()()()()();}r&2&&(Vp(),tw("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Vp(4),tw("p-buttons",i.buttons),Vp(3),tw("p-value",i.menuItemSelected),Vp(3),Dw("ngModel",i.filter),r0(),Vp(),Dw("ngModel",i.searchTreeItems),tw("p-disabled",!i.filter),r0(),Vp(),Dw("ngModel",i.parent),tw("p-options",i.parentList),r0(),Vp(),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.shortLabel),r0(),Vp(),Dw("ngModel",i.link),r0(),Vp(),Dw("ngModel",i.badgeColor),tw("p-options",i.badgeColorList),r0(),Vp(2),Dw("ngModel",i.badgeValue),tw("p-max",i.maxBadgeValue),r0(),Vp(),Dw("ngModel",i.icon),tw("p-disabled",i.parent)("p-options",i.iconsOptions),r0(),Vp(4),Dw("ngModel",i.service),r0(),Vp(),Dw("ngModel",i.menuParams),r0(),Vp(),Dw("ngModel",i.logo),r0(),Vp(),Dw("ngModel",i.shortLogo),r0(),Vp(),Dw("ngModel",i.logoLink),r0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,Wpe,mv,O3,Nhe,Sde,Uhe,k3,L3,$he,Qz,aNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Menu Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-wrapper">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-menu-labs"),sg(),Gl(29,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ce],encapsulation:2})}return a})();var O=(()=>{class a{http=f(rb);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(G(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Tl(0,"div",5)(1,"p"),tN(2,"Welcome,"),sg(),Tl(3,"p")(4,"b"),tN(5," John Doe "),sg()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"po-menu",1),QE(2,Be,6,0,"div",2),sg(),Gl(3,"po-toolbar",3)(4,"po-page-default",4),sg()),r&2&&(Vp(),tw("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Vp(2),tw("p-show-notification",false),Vp(),tw("p-title",i.menuItemSelected));},dependencies:[Qz,Nw,aNe,mNe],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Menu - Human Resources"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-wrapper">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),tN(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),sg(),Tl(29,"pre",11),tN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-menu-human-resources"),sg(),Gl(33,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Pe],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoMenuModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-menu."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoMenuComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),sg(),Tl(15,"p"),tN(16,"O componente po-menu recebe uma lista de objetos do tipo "),Tl(17,"code"),tN(18,"MenuItem"),sg(),tN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),sg(),Tl(20,"h4"),tN(21,"Tokens customiz\xE1veis"),sg(),Tl(22,"p"),tN(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(24,"blockquote")(25,"p"),tN(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(27,"a",6),tN(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(29,"."),sg()(),Tl(30,"table")(31,"thead")(32,"tr")(33,"th"),tN(34,"Propriedade"),sg(),Tl(35,"th"),tN(36,"Descri\xE7\xE3o"),sg(),Tl(37,"th"),tN(38,"Valor Padr\xE3o"),sg()()(),Tl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),tN(43,"Default Values"),sg()(),Gl(44,"td")(45,"td"),sg(),Tl(46,"tr")(47,"td")(48,"code"),tN(49,"--border-radius"),sg()(),Tl(50,"td"),tN(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(52,"td")(53,"code"),tN(54,"var(--border-radius-md)"),sg()()(),Tl(55,"tr")(56,"td")(57,"code"),tN(58,"--border-color"),sg()(),Tl(59,"td"),tN(60,"Cor da borda"),sg(),Tl(61,"td")(62,"code"),tN(63,"var(--color-neutral-light-20)"),sg()()(),Tl(64,"tr")(65,"td")(66,"code"),tN(67,"--background-color"),sg()(),Tl(68,"td"),tN(69,"Cor de background"),sg(),Tl(70,"td")(71,"code"),tN(72,"Var(----color-neutral-light-05)"),sg()()(),Tl(73,"tr")(74,"td")(75,"strong"),tN(76,"Menu Footer"),sg()(),Gl(77,"td")(78,"td"),sg(),Tl(79,"tr")(80,"td")(81,"code"),tN(82,"--color"),sg()(),Tl(83,"td"),tN(84,"Cor principla do menu footer"),sg(),Tl(85,"td")(86,"code"),tN(87,"var(--color-action-default)"),sg()()(),Tl(88,"tr")(89,"td")(90,"code"),tN(91,"--font-size"),sg()(),Tl(92,"td"),tN(93,"Tamanho da fonte"),sg(),Tl(94,"td")(95,"code"),tN(96,"var(--font-size-default)"),sg()()(),Tl(97,"tr")(98,"td")(99,"code"),tN(100,"--line-height"),sg()(),Tl(101,"td"),tN(102,"Tamanho da label"),sg(),Tl(103,"td")(104,"code"),tN(105,"var(--line-height-md)"),sg()()(),Tl(106,"tr")(107,"td")(108,"code"),tN(109,"--outline-color-focused"),sg()(),Tl(110,"td"),tN(111,"Cor do outline do estado de focus"),sg(),Tl(112,"td")(113,"code"),tN(114,"var(--color-action-focus)"),sg()()(),Tl(115,"tr")(116,"td")(117,"code"),tN(118,"--font-weight-lvl0"),sg()(),Tl(119,"td"),tN(120,"Peso da fonte"),sg(),Tl(121,"td")(122,"code"),tN(123,"var(--font-weight-bold)"),sg()()(),Tl(124,"tr")(125,"td")(126,"strong"),tN(127,"po-menu-item"),sg()(),Gl(128,"td")(129,"td"),sg(),Tl(130,"tr")(131,"td")(132,"code"),tN(133,"--font-family"),sg()(),Tl(134,"td"),tN(135,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(136,"td")(137,"code"),tN(138,"var(--font-family-theme)"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),tN(142,"--font-size"),sg()(),Tl(143,"td"),tN(144,"Tamanho da fonte"),sg(),Tl(145,"td")(146,"code"),tN(147,"var(--font-size-default)"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),tN(151,"--line-height"),sg()(),Tl(152,"td"),tN(153,"Tamanho da label"),sg(),Tl(154,"td")(155,"code"),tN(156,"var(--line-height-md)"),sg()()(),Tl(157,"tr")(158,"td")(159,"code"),tN(160,"--border-radius"),sg()(),Tl(161,"td"),tN(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(163,"td")(164,"code"),tN(165,"var(--border-radius-md)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),tN(169,"--color"),sg()(),Tl(170,"td"),tN(171,"Cor principal do item"),sg(),Tl(172,"td")(173,"code"),tN(174,"var(--color-action-default)"),sg()()(),Tl(175,"tr")(176,"td")(177,"code"),tN(178,"--background-color"),sg()(),Tl(179,"td"),tN(180,"Cor do background"),sg(),Tl(181,"td")(182,"code"),tN(183,"transparent"),sg()()(),Tl(184,"tr")(185,"td")(186,"strong"),tN(187,"Hover"),sg()(),Gl(188,"td")(189,"td"),sg(),Tl(190,"tr")(191,"td")(192,"code"),tN(193,"--color-hover"),sg()(),Tl(194,"td"),tN(195,"Cor principal no estado hover"),sg(),Tl(196,"td")(197,"code"),tN(198,"var(--color-brand-01-darkest)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),tN(202,"--background-color-hover"),sg()(),Tl(203,"td"),tN(204,"Cor de background no estado hover"),sg(),Tl(205,"td")(206,"code"),tN(207,"var(--color-brand-01-lighter)"),sg()()(),Tl(208,"tr")(209,"td")(210,"strong"),tN(211,"Focused"),sg()(),Gl(212,"td")(213,"td"),sg(),Tl(214,"tr")(215,"td")(216,"code"),tN(217,"--outline-color-focused"),sg()(),Tl(218,"td"),tN(219,"Cor do outline do estado de focus"),sg(),Tl(220,"td")(221,"code"),tN(222,"var(--color-action-focus)"),sg()()(),Tl(223,"tr")(224,"td")(225,"strong"),tN(226,"Pressed"),sg()(),Gl(227,"td")(228,"td"),sg(),Tl(229,"tr")(230,"td")(231,"code"),tN(232,"--background-color-pressed"),sg(),tN(233," \xA0"),sg(),Tl(234,"td"),tN(235,"Cor de background no estado de pressionado\xA0"),sg(),Tl(236,"td")(237,"code"),tN(238,"var(--color-brand-01-light)"),sg()()(),Tl(239,"tr")(240,"td")(241,"strong"),tN(242,"Actived"),sg()(),Gl(243,"td")(244,"td"),sg(),Tl(245,"tr")(246,"td")(247,"code"),tN(248,"--background-color-actived"),sg()(),Tl(249,"td"),tN(250,"Cor de background no estado actived"),sg(),Tl(251,"td")(252,"code"),tN(253,"var(--color-brand-01-darkest)"),sg()()(),Tl(254,"tr")(255,"td")(256,"code"),tN(257,"--color-actived"),sg()(),Tl(258,"td"),tN(259,"Cor principal no estado actived"),sg(),Tl(260,"td")(261,"code"),tN(262,"var(--color-brand-01-lighter)"),sg()()(),Tl(263,"tr")(264,"td")(265,"strong"),tN(266,"Font"),sg()(),Gl(267,"td")(268,"td"),sg(),Tl(269,"tr")(270,"td")(271,"code"),tN(272,"--font-weight-lvl0"),sg()(),Tl(273,"td"),tN(274,"Peso da fonte bold"),sg(),Tl(275,"td")(276,"code"),tN(277,"var(--font-weight-bold)"),sg()()(),Tl(278,"tr")(279,"td")(280,"code"),tN(281,"--font-weight-lvl1"),sg()(),Tl(282,"td"),tN(283,"Peso da fonte"),sg(),Tl(284,"td")(285,"code"),tN(286,"var(--font-weight-normal)"),sg()()()()(),Tl(287,"p"),Gl(288,"br"),tN(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),sg(),Tl(290,"p"),tN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),sg(),Tl(292,"p"),tN(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),sg(),Tl(294,"p"),tN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Tl(296,"a",7)(297,"strong"),tN(298,"p-menu-header-template"),sg()(),tN(299,"."),sg(),Tl(300,"p"),tN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Tl(302,"code"),tN(303,"PoMenuFilter"),sg(),tN(304,"."),sg(),Tl(305,"p"),tN(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Tl(307,"code"),tN(308,"RouterModule"),sg(),tN(309," e "),Tl(310,"code"),tN(311,"Routes"),sg(),tN(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),sg(),Tl(313,"pre")(314,"code"),tN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),sg()(),Tl(316,"p"),tN(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),sg(),Tl(318,"pre")(319,"code"),tN(320,`import { NgModule } from '@angular/core';

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
`),sg()()(),Tl(321,"div",8)(322,"h4",9),tN(323,"Seletor"),sg(),Tl(324,"pre",10),tN(325,`<po-menu
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
`),sg()(),Tl(326,"h4",11),tN(327,"Propriedades"),sg(),Tl(328,"table",12)(329,"tr",13)(330,"th",14),tN(331,"Nome"),sg(),Tl(332,"th",14),tN(333,"Tipo"),sg(),Tl(334,"th",14),tN(335,"Padr\xE3o"),sg(),Tl(336,"th",14),tN(337,"Descri\xE7\xE3o"),sg()(),Tl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),tN(342," p-automatic-toggle"),Gl(343,"br"),sg()()(),Tl(344,"td",19)(345,"code",20),tN(346,"boolean"),sg()(),Tl(347,"td",21)(348,"p")(349,"code"),tN(350,"false"),sg()()(),Tl(351,"td",22)(352,"em")(353,"strong"),tN(354,"(opcional)"),sg()(),Tl(355,"p"),tN(356,"Expande e Colapsa (retrai) o menu automaticamente."),sg()()(),Tl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),tN(361," p-collapsed"),Gl(362,"br"),sg()()(),Tl(363,"td",19)(364,"code",20),tN(365,"boolean"),sg()(),Tl(366,"td",21)(367,"p")(368,"code"),tN(369,"false"),sg()()(),Tl(370,"td",22)(371,"em")(372,"strong"),tN(373,"(opcional)"),sg()(),Tl(374,"p"),tN(375,"Colapsa (retrai) o menu e caso receba o valor "),Tl(376,"code"),tN(377,"false"),sg(),tN(378," expande o menu."),sg(),Tl(379,"blockquote")(380,"p"),tN(381,"Utilize esta propriedade para iniciar o menu colapsado."),sg()(),Tl(382,"blockquote")(383,"p"),tN(384,"Ao utilizar os m\xE9todos "),Tl(385,"a",23)(386,"code"),tN(387,"colapse"),sg()(),tN(388,", "),Tl(389,"a",24)(390,"code"),tN(391,"expand"),sg()(),tN(392,` e
`),Tl(393,"a",25)(394,"code"),tN(395,"toggle"),sg()(),tN(396," o valor desta propriedade n\xE3o \xE9 alterado."),sg()(),Tl(397,"p")(398,"strong"),tN(399,"Importante:"),sg()(),Tl(400,"blockquote")(401,"p"),tN(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Tl(403,"code"),tN(404,"icon"),sg(),tN(405," e "),Tl(406,"code"),tN(407,"shortLabel"),sg(),tN(408,"."),sg()()()(),Tl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),tN(413," p-components-size"),Gl(414,"br"),sg()()(),Tl(415,"td",19)(416,"code",26),tN(417,"string"),sg()(),Tl(418,"td",21)(419,"p")(420,"code"),tN(421,"medium"),sg()()(),Tl(422,"td",22)(423,"em")(424,"strong"),tN(425,"(opcional)"),sg()(),Tl(426,"p"),tN(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),sg(),Tl(428,"ul")(429,"li")(430,"code"),tN(431,"small"),sg(),tN(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(433,"li")(434,"code"),tN(435,"medium"),sg(),tN(436,": aplica a medida medium de cada componente."),sg()(),Tl(437,"blockquote")(438,"p"),tN(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(440,"code"),tN(441,"medium"),sg(),tN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(443,"a",27),tN(444,"po-theme"),sg(),tN(445,"."),sg()()()(),Tl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),tN(450," p-filter"),Gl(451,"br"),sg()()(),Tl(452,"td",19)(453,"code",20),tN(454,"boolean"),sg()(),Tl(455,"td",21)(456,"p")(457,"code"),tN(458,"false"),sg()()(),Tl(459,"td",22)(460,"em")(461,"strong"),tN(462,"(opcional)"),sg()(),Tl(463,"p"),tN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Tl(465,"code"),tN(466,"p-service"),sg(),tN(467,"."),sg(),Tl(468,"blockquote")(469,"p"),tN(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),sg()()()(),Tl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),tN(475," p-logo"),Gl(476,"br"),sg()()(),Tl(477,"td",19)(478,"code",26),tN(479,"string"),sg()(),Tl(480,"td",21),tN(481,"-"),sg(),Tl(482,"td",22)(483,"em")(484,"strong"),tN(485,"(opcional)"),sg()(),Tl(486,"p"),tN(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),sg(),Tl(488,"blockquote")(489,"p")(490,"strong"),tN(491,"Importante:"),sg()()(),Tl(492,"ul")(493,"li"),tN(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),sg(),Tl(495,"li"),tN(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Tl(497,"code"),tN(498,"24px"),sg(),tN(499," de altura e "),Tl(500,"code"),tN(501,"224px"),sg(),tN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg()()()(),Tl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),tN(507," p-logo-alt"),Gl(508,"br"),sg()()(),Tl(509,"td",19)(510,"code",26),tN(511,"string"),sg()(),Tl(512,"td",21)(513,"p")(514,"code"),tN(515,"Logomarca in\xEDcio"),sg()()(),Tl(516,"td",22)(517,"em")(518,"strong"),tN(519,"(opcional)"),sg()(),Tl(520,"p"),tN(521,"Define o texto alternativo para a logomarca."),sg(),Tl(522,"blockquote")(523,"p")(524,"strong"),tN(525,"Importante"),sg(),tN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),sg()()()(),Tl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),tN(531," p-logo-link"),Gl(532,"br"),sg()()(),Tl(533,"td",19)(534,"code",20),tN(535,"boolean "),sg(),Tl(536,"code",26),tN(537," string"),sg()(),Tl(538,"td",21)(539,"p")(540,"code"),tN(541,"true"),sg()()(),Tl(542,"td",22)(543,"em")(544,"strong"),tN(545,"(opcional)"),sg()(),Tl(546,"p"),tN(547,"Define o link para a rota ao clicar no logo do menu."),sg(),Tl(548,"ul")(549,"li"),tN(550,"Se o valor for uma string, define a rota para o link informado."),sg(),Tl(551,"li"),tN(552,"Se for "),Tl(553,"code"),tN(554,"false"),sg(),tN(555,", o logo n\xE3o ter\xE1 link associado."),sg(),Tl(556,"li"),tN(557,"Se for "),Tl(558,"code"),tN(559,"true"),sg(),tN(560,", o logo ter\xE1 a rota padr\xE3o "),Tl(561,"code"),tN(562,"./"),sg(),tN(563,"."),sg()()()(),Tl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),tN(568," p-menus"),Gl(569,"br"),sg()()(),Tl(570,"td",19)(571,"code",28),tN(572,"PoMenuItem[]"),sg()(),Tl(573,"td",21),tN(574,"-"),sg(),Tl(575,"td",22)(576,"p"),tN(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg()()(),Tl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),tN(582," p-params"),Gl(583,"br"),sg()()(),Tl(584,"td",19)(585,"code",29),tN(586,"any"),sg()(),Tl(587,"td",21),tN(588,"-"),sg(),Tl(589,"td",22)(590,"em")(591,"strong"),tN(592,"(opcional)"),sg()(),Tl(593,"p"),tN(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),sg(),Tl(595,"p"),tN(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Tl(597,"code"),tN(598,"PoMenuFilter"),sg(),tN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Tl(600,"code"),tN(601,"getFilteredData"),sg(),tN(602,"."),sg(),Tl(603,"p"),tN(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Tl(605,"em"),tN(606,"GET"),sg(),tN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Tl(608,"code"),tN(609,"search"),sg(),tN(610,", veja exemplo:"),sg(),Tl(611,"pre")(612,"code"),tN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),sg()()()(),Tl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),tN(618," p-search-tree-items"),Gl(619,"br"),sg()()(),Tl(620,"td",19)(621,"code",20),tN(622,"boolean"),sg()(),Tl(623,"td",21)(624,"p")(625,"code"),tN(626,"false"),sg()()(),Tl(627,"td",22)(628,"em")(629,"strong"),tN(630,"(opcional)"),sg()(),Tl(631,"p"),tN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),sg(),Tl(633,"blockquote")(634,"p"),tN(635,"\xC9 necess\xE1rio que a propriedade "),Tl(636,"code"),tN(637,"p-filter"),sg(),tN(638," esteja habilitada."),sg()()()(),Tl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),tN(643," p-service"),Gl(644,"br"),sg()()(),Tl(645,"td",19)(646,"code",26),tN(647,"string "),sg(),Tl(648,"code",30),tN(649," PoMenuFilter"),sg()(),Tl(650,"td",21),tN(651,"-"),sg(),Tl(652,"td",22)(653,"em")(654,"strong"),tN(655,"(opcional)"),sg()(),Tl(656,"p"),tN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Tl(658,"code"),tN(659,"PoMenuFilter"),sg(),tN(660,"."),sg(),Tl(661,"p"),tN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Tl(663,"a",31),tN(664,"Guia de implementa\xE7\xE3o de APIs"),sg(),tN(665," do PO UI."),sg(),Tl(666,"p"),tN(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Tl(668,"em"),tN(669,"GET"),sg(),tN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Tl(671,"code"),tN(672,"search"),sg(),tN(673,", veja exemplo:"),sg(),Tl(674,"blockquote")(675,"p"),tN(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Tl(677,"code"),tN(678,"tot"),sg(),tN(679,"."),sg()(),Tl(680,"pre")(681,"code"),tN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),sg()(),Tl(683,"blockquote")(684,"p"),tN(685,"\xC9 necess\xE1rio que propriedade "),Tl(686,"code"),tN(687,"p-filter"),sg(),tN(688," esteja habilitada."),sg()()()(),Tl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),tN(693," p-short-logo"),Gl(694,"br"),sg()()(),Tl(695,"td",19)(696,"code",26),tN(697,"string"),sg()(),Tl(698,"td",21),tN(699,"-"),sg(),Tl(700,"td",22)(701,"em")(702,"strong"),tN(703,"(opcional)"),sg()(),Tl(704,"p"),tN(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),sg(),Tl(706,"blockquote")(707,"p")(708,"strong"),tN(709,"Importante:"),sg()()(),Tl(710,"ul")(711,"li"),tN(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Tl(713,"code"),tN(714,"p-logo"),sg(),tN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),sg(),Tl(716,"li"),tN(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Tl(718,"code"),tN(719,"48px"),sg(),tN(720," de altura e "),Tl(721,"code"),tN(722,"48px"),sg(),tN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg(),Tl(724,"li"),tN(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Tl(726,"code"),tN(727,"p-logo"),sg(),tN(728,"."),sg()()()(),Tl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),tN(733," (p-toggle)"),Gl(734,"br"),sg()()(),Tl(735,"td",19)(736,"code",34),tN(737,"EventEmitter"),sg()(),Tl(738,"td",21),tN(739,"-"),sg(),Tl(740,"td",22)(741,"em")(742,"strong"),tN(743,"(opcional)"),sg()(),Tl(744,"p"),tN(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Tl(746,"code"),tN(747,"true"),sg(),tN(748," quando expandido e "),Tl(749,"code"),tN(750,"false"),sg(),tN(751," quando colapsado."),sg(),Tl(752,"pre")(753,"code",35),tN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),sg()()()()(),Tl(755,"h3",11),tN(756,"M\xE9todos"),sg(),Tl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),tN(763," collapse "),sg()()()()(),Tl(764,"tr",22)(765,"td",22)(766,"p"),Gl(767,"a",38),sg(),Tl(768,"p"),tN(769,"M\xE9todo para colapsar (retrair) o menu."),sg()()()(),Gl(770,"br"),Tl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),tN(777," expand "),sg()()()()(),Tl(778,"tr",22)(779,"td",22)(780,"p"),Gl(781,"a",39),sg(),Tl(782,"p"),tN(783,"M\xE9todo para expandir (aumentar) o menu."),sg()()()(),Gl(784,"br"),Tl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),tN(791," toggle "),sg()()()()(),Tl(792,"tr",22)(793,"td",22)(794,"p"),Gl(795,"a",40),tN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),sg(),Tl(797,"blockquote")(798,"p"),tN(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),sg()(),Tl(800,"ul")(801,"li"),tN(802,"Todos os itens de menu tiverem valor nas propriedades "),Tl(803,"code"),tN(804,"icon"),sg(),tN(805," e "),Tl(806,"code"),tN(807,"shortLabel"),sg(),tN(808,"."),sg()()()()(),Gl(809,"br"),Tl(810,"h3"),tN(811,"Interfaces"),sg(),Tl(812,"h4",41)(813,"code",5),tN(814,"PoMenuFilter"),sg()(),Tl(815,"div",2)(816,"p"),tN(817,"Interface do servi\xE7o utilizado no componente "),Tl(818,"code"),tN(819,"po-menu"),sg(),tN(820,"."),sg()(),Tl(821,"h4",11),tN(822,"M\xE9todos"),sg(),Tl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),tN(829," getFilteredData "),sg()()()()(),Tl(830,"tr",22)(831,"td",22)(832,"p"),tN(833,"M\xE9todo respons\xE1vel por retornar um "),Tl(834,"em"),tN(835,"Observable"),sg(),tN(836," que retorne uma lista de objetos que seguem a interface "),Tl(837,"code"),tN(838,"PoMenuItemFiltered"),sg(),tN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Tl(840,"code"),tN(841,"p-params"),sg(),tN(842,"."),sg()()()(),Tl(843,"h5")(844,"b"),tN(845,"Par\xE2metros"),sg()(),Tl(846,"table",12)(847,"tr",13)(848,"th",14),tN(849,"Nome"),sg(),Tl(850,"th",14),tN(851,"Tipo"),sg(),Tl(852,"th",14),tN(853,"Descri\xE7\xE3o"),sg()(),Tl(854,"tr",15)(855,"td",16),tN(856," search"),sg(),Tl(857,"td",19)(858,"code",42),tN(859," string "),sg()(),Tl(860,"td",22)(861,"p"),tN(862,"Valor informado no campo de busca dos itens de menus."),sg()()(),Tl(863,"tr",15)(864,"td",16),tN(865," params"),sg(),Tl(866,"td",19)(867,"code",42),tN(868," any "),sg()(),Tl(869,"td",22)(870,"p"),tN(871,"Valor informado atrav\xE9s da propriedade "),Tl(872,"code"),tN(873,"p-params"),sg(),tN(874,"."),sg()()()(),Gl(875,"br"),Tl(876,"h4",41)(877,"code",5),tN(878,"PoMenuItemBadge"),sg()(),Tl(879,"div",2)(880,"p"),tN(881,"Interface do "),Tl(882,"em"),tN(883,"badge"),sg(),tN(884," utilizado no "),Tl(885,"code"),tN(886,"po-menu"),sg(),tN(887,"."),sg()(),Tl(888,"h4",11),tN(889,"Propriedades"),sg(),Tl(890,"table",12)(891,"tr",13)(892,"th",14),tN(893,"Nome"),sg(),Tl(894,"th",14),tN(895,"Tipo"),sg(),Tl(896,"th",14),tN(897,"Descri\xE7\xE3o"),sg()(),Tl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),tN(902," color"),Gl(903,"br"),sg()()(),Tl(904,"td",19)(905,"code",26),tN(906,"string"),sg()(),Tl(907,"td",22)(908,"em")(909,"strong"),tN(910,"(opcional)"),sg()(),Tl(911,"p"),tN(912,"Define a cor do "),Tl(913,"em"),tN(914,"badge"),sg(),tN(915," e aceita os valores:"),sg(),Tl(916,"p"),Gl(917,"span",43),Tl(918,"code"),tN(919,"color-01"),sg()(),Tl(920,"p"),Gl(921,"span",44),Tl(922,"code"),tN(923,"color-02"),sg()(),Tl(924,"p"),Gl(925,"span",45),Tl(926,"code"),tN(927,"color-03"),sg()(),Tl(928,"p"),Gl(929,"span",46),Tl(930,"code"),tN(931,"color-04"),sg()(),Tl(932,"p"),Gl(933,"span",47),Tl(934,"code"),tN(935,"color-05"),sg()(),Tl(936,"p"),Gl(937,"span",48),Tl(938,"code"),tN(939,"color-06"),sg()(),Tl(940,"p"),Gl(941,"span",49),Tl(942,"code"),tN(943,"color-07"),sg()(),Tl(944,"p"),Gl(945,"span",50),Tl(946,"code"),tN(947,"color-08"),sg()(),Tl(948,"p"),Gl(949,"span",51),Tl(950,"code"),tN(951,"color-09"),sg()(),Tl(952,"p"),Gl(953,"span",52),Tl(954,"code"),tN(955,"color-10"),sg()(),Tl(956,"p"),Gl(957,"span",53),Tl(958,"code"),tN(959,"color-11"),sg()(),Tl(960,"p"),Gl(961,"span",54),Tl(962,"code"),tN(963,"color-12"),sg()()()(),Tl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),tN(968," value"),Gl(969,"br"),sg()()(),Tl(970,"td",19)(971,"code",55),tN(972,"number"),sg()(),Tl(973,"td",22)(974,"p"),tN(975,"N\xFAmero exibido no "),Tl(976,"em"),tN(977,"badge"),sg(),tN(978,", caso o mesmo seja maior que "),Tl(979,"strong"),tN(980,"9"),sg(),tN(981," o mesmo exibe "),Tl(982,"strong"),tN(983,"9+"),sg(),tN(984,"."),sg()()()(),Tl(985,"h4",41)(986,"code",5),tN(987,"PoMenuItemFiltered"),sg()(),Tl(988,"div",2)(989,"p"),tN(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Tl(991,"code"),tN(992,"po-menu"),sg(),tN(993,"."),sg()(),Tl(994,"h4",11),tN(995,"Propriedades"),sg(),Tl(996,"table",12)(997,"tr",13)(998,"th",14),tN(999,"Nome"),sg(),Tl(1e3,"th",14),tN(1001,"Tipo"),sg(),Tl(1002,"th",14),tN(1003,"Descri\xE7\xE3o"),sg()(),Tl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),tN(1008," action"),Gl(1009,"br"),sg()()(),Tl(1010,"td",19)(1011,"code",56),tN(1012,"() => void"),sg()(),Tl(1013,"td",22)(1014,"p"),tN(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),sg()()(),Tl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),tN(1020," label"),Gl(1021,"br"),sg()()(),Tl(1022,"td",19)(1023,"code",26),tN(1024,"string"),sg()(),Tl(1025,"td",22)(1026,"p"),tN(1027,"Texto do item de menu."),sg()()(),Tl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),tN(1032," link"),Gl(1033,"br"),sg()()(),Tl(1034,"td",19)(1035,"code",26),tN(1036,"string"),sg()(),Tl(1037,"td",22)(1038,"p"),tN(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Tl(1040,"em"),tN(1041,"link"),sg(),tN(1042," interno ou externo."),sg()()()(),Tl(1043,"h4",41)(1044,"code",5),tN(1045,"PoMenuItem"),sg()(),Tl(1046,"div",2)(1047,"p"),tN(1048,"Interface para os itens de menu do componente po-menu."),sg()(),Tl(1049,"h4",11),tN(1050,"Propriedades"),sg(),Tl(1051,"table",12)(1052,"tr",13)(1053,"th",14),tN(1054,"Nome"),sg(),Tl(1055,"th",14),tN(1056,"Tipo"),sg(),Tl(1057,"th",14),tN(1058,"Descri\xE7\xE3o"),sg()(),Tl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),tN(1063," action"),Gl(1064,"br"),sg()()(),Tl(1065,"td",19)(1066,"code",57),tN(1067,"Function"),sg()(),Tl(1068,"td",22)(1069,"em")(1070,"strong"),tN(1071,"(opcional)"),sg()(),Tl(1072,"p"),tN(1073,"A\xE7\xE3o personalizada para clique do item de menu."),sg()()(),Tl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),tN(1078," badge"),Gl(1079,"br"),sg()()(),Tl(1080,"td",19)(1081,"code",58),tN(1082,"PoMenuItemBadge"),sg()(),Tl(1083,"td",22)(1084,"em")(1085,"strong"),tN(1086,"(opcional)"),sg()(),Tl(1087,"p"),tN(1088,"Badge do item de menu."),sg(),Tl(1089,"p"),tN(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),sg(),Tl(1091,"blockquote")(1092,"p"),tN(1093,"O "),Tl(1094,"code"),tN(1095,"po-badge"),sg(),tN(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Tl(1097,"code"),tN(1098,"subItems"),sg(),tN(1099," e seu valor seja maior ou igual a 0."),sg()()()(),Tl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),tN(1104," icon"),Gl(1105,"br"),sg()()(),Tl(1106,"td",19)(1107,"code",26),tN(1108,"string "),sg(),Tl(1109,"code",59),tN(1110," TemplateRef<void>"),sg()(),Tl(1111,"td",22)(1112,"em")(1113,"strong"),tN(1114,"(opcional)"),sg()(),Tl(1115,"p"),tN(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(1117,"a",60),tN(1118,"Biblioteca de \xEDcones"),sg(),tN(1119,". conforme exemplo abaixo:"),sg(),Tl(1120,"pre")(1121,"code"),tN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),sg()(),Tl(1123,"p"),tN(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(1125,"pre")(1126,"code"),tN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),sg()(),Tl(1128,"p"),tN(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(1130,"code"),tN(1131,"TemplateRef"),sg(),tN(1132,`, conforme exemplo abaixo:
component.html:`),sg(),Tl(1133,"pre")(1134,"code"),tN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),sg()(),Tl(1136,"p"),tN(1137,"component.ts:"),sg(),Tl(1138,"pre")(1139,"code"),tN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),sg()(),Tl(1141,"blockquote")(1142,"p"),tN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),sg()()()(),Tl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),tN(1148," label"),Gl(1149,"br"),sg()()(),Tl(1150,"td",19)(1151,"code",26),tN(1152,"string"),sg()(),Tl(1153,"td",22)(1154,"p"),tN(1155,"Texto do item de menu."),sg()()(),Tl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),tN(1160," link"),Gl(1161,"br"),sg()()(),Tl(1162,"td",19)(1163,"code",26),tN(1164,"string"),sg()(),Tl(1165,"td",22)(1166,"em")(1167,"strong"),tN(1168,"(opcional)"),sg()(),Tl(1169,"p"),tN(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),sg()()(),Tl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),tN(1175," shortLabel"),Gl(1176,"br"),sg()()(),Tl(1177,"td",19)(1178,"code",26),tN(1179,"string"),sg()(),Tl(1180,"td",22)(1181,"em")(1182,"strong"),tN(1183,"(opcional)"),sg()(),Tl(1184,"p"),tN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),sg()()(),Tl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),tN(1190," subItems"),Gl(1191,"br"),sg()()(),Tl(1192,"td",19)(1193,"code",61),tN(1194,"Array<PoMenuItem>"),sg()(),Tl(1195,"td",22)(1196,"em")(1197,"strong"),tN(1198,"(opcional)"),sg()(),Tl(1199,"p"),tN(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-menu-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ve,Me,ye,we],encapsulation:2})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(je),vL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,_e]})}return a})();export{_t as DocPoMenuModule};