import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,c as f,ae as Be$1,i as ib,G,I,Y as Yz,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,cs as qpe,b1 as mv,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,bH as k3,cX as I3,c9 as jhe,a3 as sNe,aB as Sx,aM as ww,aN as r0,a2 as JE,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,dk as Nw,dl as fNe,Q as we$1,br as uN,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Gl(0,"po-menu",0),r&2&&nw("p-menus",mN(2,Le,gN(1,ke)));},dependencies:[Yz],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Menu Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-menu-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,xe],encapsulation:2,changeDetection:1})}return a})();function Re(a,W){if(a&1&&(Tl(0,"div"),Gl(1,"span"),Tl(2,"span",26),iN(3),sg()()),a&2){let m=W.$implicit;Vp(),qx(uN("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Vp(2),fg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&Yl(Yz,7),r&2){let s;uo(s=fo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=Sx();Tl(0,"div",1),Gl(1,"po-menu",2),Tl(2,"po-page-default",3)(3,"div",4),Gl(4,"po-info",5)(5,"po-button-group",6),sg(),Gl(6,"po-divider"),Tl(7,"div",4),Gl(8,"po-info",7),Tl(9,"form",null,0)(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(s),sN(i.filter,l)||(i.filter=l),Xy(l)}),ht("ngModelChange",function(l){return i.onFilterChange(l)}),sg(),r0(),Tl(12,"po-switch",9),ww("ngModelChange",function(l){return Ky(s),sN(i.searchTreeItems,l)||(i.searchTreeItems=l),Xy(l)}),sg(),r0(),Tl(13,"po-select",10),ww("ngModelChange",function(l){return Ky(s),sN(i.parent,l)||(i.parent=l),Xy(l)}),sg(),r0(),Tl(14,"po-input",11),ww("ngModelChange",function(l){return Ky(s),sN(i.label,l)||(i.label=l),Xy(l)}),sg(),r0(),Tl(15,"po-input",12),ww("ngModelChange",function(l){return Ky(s),sN(i.shortLabel,l)||(i.shortLabel=l),Xy(l)}),sg(),r0(),Tl(16,"po-url",13),ww("ngModelChange",function(l){return Ky(s),sN(i.link,l)||(i.link=l),Xy(l)}),sg(),r0(),Tl(17,"po-select",14),ww("ngModelChange",function(l){return Ky(s),sN(i.badgeColor,l)||(i.badgeColor=l),Xy(l)}),JE(18,Re,4,4,"ng-template",15),sg(),r0(),Tl(19,"po-number",16),ww("ngModelChange",function(l){return Ky(s),sN(i.badgeValue,l)||(i.badgeValue=l),Xy(l)}),sg(),r0(),Tl(20,"po-select",17),ww("ngModelChange",function(l){return Ky(s),sN(i.icon,l)||(i.icon=l),Xy(l)}),sg(),r0(),Tl(21,"div",4)(22,"po-button",18),ht("p-click",function(){return i.addMenuItem()}),sg()(),Gl(23,"po-divider"),Tl(24,"po-input",19),ww("ngModelChange",function(l){return Ky(s),sN(i.service,l)||(i.service=l),Xy(l)}),sg(),r0(),Tl(25,"po-input",20),ww("ngModelChange",function(l){return Ky(s),sN(i.menuParams,l)||(i.menuParams=l),Xy(l)}),ht("p-change-model",function(l){return i.onChangeParams(l)}),sg(),r0(),Tl(26,"po-input",21),ww("ngModelChange",function(l){return Ky(s),sN(i.logo,l)||(i.logo=l),Xy(l)}),sg(),r0(),Tl(27,"po-input",22),ww("ngModelChange",function(l){return Ky(s),sN(i.shortLogo,l)||(i.shortLogo=l),Xy(l)}),sg(),r0(),Tl(28,"po-input",23),ww("ngModelChange",function(l){return Ky(s),sN(i.logoLink,l)||(i.logoLink=l),Xy(l)}),sg(),r0(),Tl(29,"po-radio-group",24),ww("ngModelChange",function(l){return Ky(s),sN(i.componentsSize,l)||(i.componentsSize=l),Xy(l)}),sg(),r0(),Tl(30,"div",4)(31,"po-button",25),ht("p-click",function(){return i.restore()}),sg()()()()()();}r&2&&(Vp(),nw("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Vp(4),nw("p-buttons",i.buttons),Vp(3),nw("p-value",i.menuItemSelected),Vp(3),Ew("ngModel",i.filter),o0(),Vp(),Ew("ngModel",i.searchTreeItems),nw("p-disabled",!i.filter),o0(),Vp(),Ew("ngModel",i.parent),nw("p-options",i.parentList),o0(),Vp(),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.shortLabel),o0(),Vp(),Ew("ngModel",i.link),o0(),Vp(),Ew("ngModel",i.badgeColor),nw("p-options",i.badgeColorList),o0(),Vp(2),Ew("ngModel",i.badgeValue),nw("p-max",i.maxBadgeValue),o0(),Vp(),Ew("ngModel",i.icon),nw("p-disabled",i.parent)("p-options",i.iconsOptions),o0(),Vp(4),Ew("ngModel",i.service),o0(),Vp(),Ew("ngModel",i.menuParams),o0(),Vp(),Ew("ngModel",i.logo),o0(),Vp(),Ew("ngModel",i.shortLogo),o0(),Vp(),Ew("ngModel",i.logoLink),o0(),Vp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,qpe,mv,L3,Bhe,Tde,Whe,k3,I3,jhe,Yz,sNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Menu Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-wrapper">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-menu-labs"),sg(),Gl(29,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,qe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ce],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=f(ib);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(G(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Tl(0,"div",5)(1,"p"),iN(2,"Welcome,"),sg(),Tl(3,"p")(4,"b"),iN(5," John Doe "),sg()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"po-menu",1),JE(2,Be,6,0,"div",2),sg(),Gl(3,"po-toolbar",3)(4,"po-page-default",4),sg()),r&2&&(Vp(),nw("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Vp(2),nw("p-show-notification",false),Vp(),nw("p-title",i.menuItemSelected));},dependencies:[Yz,Nw,sNe,fNe],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Menu - Human Resources"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-wrapper">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),iN(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),sg(),Tl(29,"pre",11),iN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-menu-human-resources"),sg(),Gl(33,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoMenuModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-menu."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoMenuComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),sg(),Tl(15,"p"),iN(16,"O componente po-menu recebe uma lista de objetos do tipo "),Tl(17,"code"),iN(18,"MenuItem"),sg(),iN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),sg(),Tl(20,"h4"),iN(21,"Tokens customiz\xE1veis"),sg(),Tl(22,"p"),iN(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(24,"blockquote")(25,"p"),iN(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(27,"a",6),iN(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(29,"."),sg()(),Tl(30,"table")(31,"thead")(32,"tr")(33,"th"),iN(34,"Propriedade"),sg(),Tl(35,"th"),iN(36,"Descri\xE7\xE3o"),sg(),Tl(37,"th"),iN(38,"Valor Padr\xE3o"),sg()()(),Tl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),iN(43,"Default Values"),sg()(),Gl(44,"td")(45,"td"),sg(),Tl(46,"tr")(47,"td")(48,"code"),iN(49,"--border-radius"),sg()(),Tl(50,"td"),iN(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(52,"td")(53,"code"),iN(54,"var(--border-radius-md)"),sg()()(),Tl(55,"tr")(56,"td")(57,"code"),iN(58,"--border-color"),sg()(),Tl(59,"td"),iN(60,"Cor da borda"),sg(),Tl(61,"td")(62,"code"),iN(63,"var(--color-neutral-light-20)"),sg()()(),Tl(64,"tr")(65,"td")(66,"code"),iN(67,"--background-color"),sg()(),Tl(68,"td"),iN(69,"Cor de background"),sg(),Tl(70,"td")(71,"code"),iN(72,"Var(----color-neutral-light-05)"),sg()()(),Tl(73,"tr")(74,"td")(75,"strong"),iN(76,"Menu Footer"),sg()(),Gl(77,"td")(78,"td"),sg(),Tl(79,"tr")(80,"td")(81,"code"),iN(82,"--color"),sg()(),Tl(83,"td"),iN(84,"Cor principla do menu footer"),sg(),Tl(85,"td")(86,"code"),iN(87,"var(--color-action-default)"),sg()()(),Tl(88,"tr")(89,"td")(90,"code"),iN(91,"--font-size"),sg()(),Tl(92,"td"),iN(93,"Tamanho da fonte"),sg(),Tl(94,"td")(95,"code"),iN(96,"var(--font-size-default)"),sg()()(),Tl(97,"tr")(98,"td")(99,"code"),iN(100,"--line-height"),sg()(),Tl(101,"td"),iN(102,"Tamanho da label"),sg(),Tl(103,"td")(104,"code"),iN(105,"var(--line-height-md)"),sg()()(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--outline-color-focused"),sg()(),Tl(110,"td"),iN(111,"Cor do outline do estado de focus"),sg(),Tl(112,"td")(113,"code"),iN(114,"var(--color-action-focus)"),sg()()(),Tl(115,"tr")(116,"td")(117,"code"),iN(118,"--font-weight-lvl0"),sg()(),Tl(119,"td"),iN(120,"Peso da fonte"),sg(),Tl(121,"td")(122,"code"),iN(123,"var(--font-weight-bold)"),sg()()(),Tl(124,"tr")(125,"td")(126,"strong"),iN(127,"po-menu-item"),sg()(),Gl(128,"td")(129,"td"),sg(),Tl(130,"tr")(131,"td")(132,"code"),iN(133,"--font-family"),sg()(),Tl(134,"td"),iN(135,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(136,"td")(137,"code"),iN(138,"var(--font-family-theme)"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),iN(142,"--font-size"),sg()(),Tl(143,"td"),iN(144,"Tamanho da fonte"),sg(),Tl(145,"td")(146,"code"),iN(147,"var(--font-size-default)"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),iN(151,"--line-height"),sg()(),Tl(152,"td"),iN(153,"Tamanho da label"),sg(),Tl(154,"td")(155,"code"),iN(156,"var(--line-height-md)"),sg()()(),Tl(157,"tr")(158,"td")(159,"code"),iN(160,"--border-radius"),sg()(),Tl(161,"td"),iN(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(163,"td")(164,"code"),iN(165,"var(--border-radius-md)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),iN(169,"--color"),sg()(),Tl(170,"td"),iN(171,"Cor principal do item"),sg(),Tl(172,"td")(173,"code"),iN(174,"var(--color-action-default)"),sg()()(),Tl(175,"tr")(176,"td")(177,"code"),iN(178,"--background-color"),sg()(),Tl(179,"td"),iN(180,"Cor do background"),sg(),Tl(181,"td")(182,"code"),iN(183,"transparent"),sg()()(),Tl(184,"tr")(185,"td")(186,"strong"),iN(187,"Hover"),sg()(),Gl(188,"td")(189,"td"),sg(),Tl(190,"tr")(191,"td")(192,"code"),iN(193,"--color-hover"),sg()(),Tl(194,"td"),iN(195,"Cor principal no estado hover"),sg(),Tl(196,"td")(197,"code"),iN(198,"var(--color-brand-01-darkest)"),sg()()(),Tl(199,"tr")(200,"td")(201,"code"),iN(202,"--background-color-hover"),sg()(),Tl(203,"td"),iN(204,"Cor de background no estado hover"),sg(),Tl(205,"td")(206,"code"),iN(207,"var(--color-brand-01-lighter)"),sg()()(),Tl(208,"tr")(209,"td")(210,"strong"),iN(211,"Focused"),sg()(),Gl(212,"td")(213,"td"),sg(),Tl(214,"tr")(215,"td")(216,"code"),iN(217,"--outline-color-focused"),sg()(),Tl(218,"td"),iN(219,"Cor do outline do estado de focus"),sg(),Tl(220,"td")(221,"code"),iN(222,"var(--color-action-focus)"),sg()()(),Tl(223,"tr")(224,"td")(225,"strong"),iN(226,"Pressed"),sg()(),Gl(227,"td")(228,"td"),sg(),Tl(229,"tr")(230,"td")(231,"code"),iN(232,"--background-color-pressed"),sg(),iN(233," \xA0"),sg(),Tl(234,"td"),iN(235,"Cor de background no estado de pressionado\xA0"),sg(),Tl(236,"td")(237,"code"),iN(238,"var(--color-brand-01-light)"),sg()()(),Tl(239,"tr")(240,"td")(241,"strong"),iN(242,"Actived"),sg()(),Gl(243,"td")(244,"td"),sg(),Tl(245,"tr")(246,"td")(247,"code"),iN(248,"--background-color-actived"),sg()(),Tl(249,"td"),iN(250,"Cor de background no estado actived"),sg(),Tl(251,"td")(252,"code"),iN(253,"var(--color-brand-01-darkest)"),sg()()(),Tl(254,"tr")(255,"td")(256,"code"),iN(257,"--color-actived"),sg()(),Tl(258,"td"),iN(259,"Cor principal no estado actived"),sg(),Tl(260,"td")(261,"code"),iN(262,"var(--color-brand-01-lighter)"),sg()()(),Tl(263,"tr")(264,"td")(265,"strong"),iN(266,"Font"),sg()(),Gl(267,"td")(268,"td"),sg(),Tl(269,"tr")(270,"td")(271,"code"),iN(272,"--font-weight-lvl0"),sg()(),Tl(273,"td"),iN(274,"Peso da fonte bold"),sg(),Tl(275,"td")(276,"code"),iN(277,"var(--font-weight-bold)"),sg()()(),Tl(278,"tr")(279,"td")(280,"code"),iN(281,"--font-weight-lvl1"),sg()(),Tl(282,"td"),iN(283,"Peso da fonte"),sg(),Tl(284,"td")(285,"code"),iN(286,"var(--font-weight-normal)"),sg()()()()(),Tl(287,"p"),Gl(288,"br"),iN(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),sg(),Tl(290,"p"),iN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),sg(),Tl(292,"p"),iN(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),sg(),Tl(294,"p"),iN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Tl(296,"a",7)(297,"strong"),iN(298,"p-menu-header-template"),sg()(),iN(299,"."),sg(),Tl(300,"p"),iN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Tl(302,"code"),iN(303,"PoMenuFilter"),sg(),iN(304,"."),sg(),Tl(305,"p"),iN(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Tl(307,"code"),iN(308,"RouterModule"),sg(),iN(309," e "),Tl(310,"code"),iN(311,"Routes"),sg(),iN(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),sg(),Tl(313,"pre")(314,"code"),iN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),sg()(),Tl(316,"p"),iN(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),sg(),Tl(318,"pre")(319,"code"),iN(320,`import { NgModule } from '@angular/core';

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
`),sg()()(),Tl(321,"div",8)(322,"h4",9),iN(323,"Seletor"),sg(),Tl(324,"pre",10),iN(325,`<po-menu
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
`),sg()(),Tl(326,"h4",11),iN(327,"Propriedades"),sg(),Tl(328,"table",12)(329,"tr",13)(330,"th",14),iN(331,"Nome"),sg(),Tl(332,"th",14),iN(333,"Tipo"),sg(),Tl(334,"th",14),iN(335,"Padr\xE3o"),sg(),Tl(336,"th",14),iN(337,"Descri\xE7\xE3o"),sg()(),Tl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),iN(342," p-automatic-toggle"),Gl(343,"br"),sg()()(),Tl(344,"td",19)(345,"code",20),iN(346,"boolean"),sg()(),Tl(347,"td",21)(348,"p")(349,"code"),iN(350,"false"),sg()()(),Tl(351,"td",22)(352,"em")(353,"strong"),iN(354,"(opcional)"),sg()(),Tl(355,"p"),iN(356,"Expande e Colapsa (retrai) o menu automaticamente."),sg()()(),Tl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),iN(361," p-collapsed"),Gl(362,"br"),sg()()(),Tl(363,"td",19)(364,"code",20),iN(365,"boolean"),sg()(),Tl(366,"td",21)(367,"p")(368,"code"),iN(369,"false"),sg()()(),Tl(370,"td",22)(371,"em")(372,"strong"),iN(373,"(opcional)"),sg()(),Tl(374,"p"),iN(375,"Colapsa (retrai) o menu e caso receba o valor "),Tl(376,"code"),iN(377,"false"),sg(),iN(378," expande o menu."),sg(),Tl(379,"blockquote")(380,"p"),iN(381,"Utilize esta propriedade para iniciar o menu colapsado."),sg()(),Tl(382,"blockquote")(383,"p"),iN(384,"Ao utilizar os m\xE9todos "),Tl(385,"a",23)(386,"code"),iN(387,"colapse"),sg()(),iN(388,", "),Tl(389,"a",24)(390,"code"),iN(391,"expand"),sg()(),iN(392,` e
`),Tl(393,"a",25)(394,"code"),iN(395,"toggle"),sg()(),iN(396," o valor desta propriedade n\xE3o \xE9 alterado."),sg()(),Tl(397,"p")(398,"strong"),iN(399,"Importante:"),sg()(),Tl(400,"blockquote")(401,"p"),iN(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Tl(403,"code"),iN(404,"icon"),sg(),iN(405," e "),Tl(406,"code"),iN(407,"shortLabel"),sg(),iN(408,"."),sg()()()(),Tl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),iN(413," p-components-size"),Gl(414,"br"),sg()()(),Tl(415,"td",19)(416,"code",26),iN(417,"string"),sg()(),Tl(418,"td",21)(419,"p")(420,"code"),iN(421,"medium"),sg()()(),Tl(422,"td",22)(423,"em")(424,"strong"),iN(425,"(opcional)"),sg()(),Tl(426,"p"),iN(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),sg(),Tl(428,"ul")(429,"li")(430,"code"),iN(431,"small"),sg(),iN(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(433,"li")(434,"code"),iN(435,"medium"),sg(),iN(436,": aplica a medida medium de cada componente."),sg()(),Tl(437,"blockquote")(438,"p"),iN(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(440,"code"),iN(441,"medium"),sg(),iN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(443,"a",27),iN(444,"po-theme"),sg(),iN(445,"."),sg()()()(),Tl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),iN(450," p-filter"),Gl(451,"br"),sg()()(),Tl(452,"td",19)(453,"code",20),iN(454,"boolean"),sg()(),Tl(455,"td",21)(456,"p")(457,"code"),iN(458,"false"),sg()()(),Tl(459,"td",22)(460,"em")(461,"strong"),iN(462,"(opcional)"),sg()(),Tl(463,"p"),iN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Tl(465,"code"),iN(466,"p-service"),sg(),iN(467,"."),sg(),Tl(468,"blockquote")(469,"p"),iN(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),sg()()()(),Tl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),iN(475," p-logo"),Gl(476,"br"),sg()()(),Tl(477,"td",19)(478,"code",26),iN(479,"string"),sg()(),Tl(480,"td",21),iN(481,"-"),sg(),Tl(482,"td",22)(483,"em")(484,"strong"),iN(485,"(opcional)"),sg()(),Tl(486,"p"),iN(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),sg(),Tl(488,"blockquote")(489,"p")(490,"strong"),iN(491,"Importante:"),sg()()(),Tl(492,"ul")(493,"li"),iN(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),sg(),Tl(495,"li"),iN(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Tl(497,"code"),iN(498,"24px"),sg(),iN(499," de altura e "),Tl(500,"code"),iN(501,"224px"),sg(),iN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg()()()(),Tl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),iN(507," p-logo-alt"),Gl(508,"br"),sg()()(),Tl(509,"td",19)(510,"code",26),iN(511,"string"),sg()(),Tl(512,"td",21)(513,"p")(514,"code"),iN(515,"Logomarca in\xEDcio"),sg()()(),Tl(516,"td",22)(517,"em")(518,"strong"),iN(519,"(opcional)"),sg()(),Tl(520,"p"),iN(521,"Define o texto alternativo para a logomarca."),sg(),Tl(522,"blockquote")(523,"p")(524,"strong"),iN(525,"Importante"),sg(),iN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),sg()()()(),Tl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),iN(531," p-logo-link"),Gl(532,"br"),sg()()(),Tl(533,"td",19)(534,"code",20),iN(535,"boolean "),sg(),Tl(536,"code",26),iN(537," string"),sg()(),Tl(538,"td",21)(539,"p")(540,"code"),iN(541,"true"),sg()()(),Tl(542,"td",22)(543,"em")(544,"strong"),iN(545,"(opcional)"),sg()(),Tl(546,"p"),iN(547,"Define o link para a rota ao clicar no logo do menu."),sg(),Tl(548,"ul")(549,"li"),iN(550,"Se o valor for uma string, define a rota para o link informado."),sg(),Tl(551,"li"),iN(552,"Se for "),Tl(553,"code"),iN(554,"false"),sg(),iN(555,", o logo n\xE3o ter\xE1 link associado."),sg(),Tl(556,"li"),iN(557,"Se for "),Tl(558,"code"),iN(559,"true"),sg(),iN(560,", o logo ter\xE1 a rota padr\xE3o "),Tl(561,"code"),iN(562,"./"),sg(),iN(563,"."),sg()()()(),Tl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),iN(568," p-menus"),Gl(569,"br"),sg()()(),Tl(570,"td",19)(571,"code",28),iN(572,"PoMenuItem[]"),sg()(),Tl(573,"td",21),iN(574,"-"),sg(),Tl(575,"td",22)(576,"p"),iN(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg()()(),Tl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),iN(582," p-params"),Gl(583,"br"),sg()()(),Tl(584,"td",19)(585,"code",29),iN(586,"any"),sg()(),Tl(587,"td",21),iN(588,"-"),sg(),Tl(589,"td",22)(590,"em")(591,"strong"),iN(592,"(opcional)"),sg()(),Tl(593,"p"),iN(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),sg(),Tl(595,"p"),iN(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Tl(597,"code"),iN(598,"PoMenuFilter"),sg(),iN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Tl(600,"code"),iN(601,"getFilteredData"),sg(),iN(602,"."),sg(),Tl(603,"p"),iN(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Tl(605,"em"),iN(606,"GET"),sg(),iN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Tl(608,"code"),iN(609,"search"),sg(),iN(610,", veja exemplo:"),sg(),Tl(611,"pre")(612,"code"),iN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),sg()()()(),Tl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),iN(618," p-search-tree-items"),Gl(619,"br"),sg()()(),Tl(620,"td",19)(621,"code",20),iN(622,"boolean"),sg()(),Tl(623,"td",21)(624,"p")(625,"code"),iN(626,"false"),sg()()(),Tl(627,"td",22)(628,"em")(629,"strong"),iN(630,"(opcional)"),sg()(),Tl(631,"p"),iN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),sg(),Tl(633,"blockquote")(634,"p"),iN(635,"\xC9 necess\xE1rio que a propriedade "),Tl(636,"code"),iN(637,"p-filter"),sg(),iN(638," esteja habilitada."),sg()()()(),Tl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),iN(643," p-service"),Gl(644,"br"),sg()()(),Tl(645,"td",19)(646,"code",26),iN(647,"string "),sg(),Tl(648,"code",30),iN(649," PoMenuFilter"),sg()(),Tl(650,"td",21),iN(651,"-"),sg(),Tl(652,"td",22)(653,"em")(654,"strong"),iN(655,"(opcional)"),sg()(),Tl(656,"p"),iN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Tl(658,"code"),iN(659,"PoMenuFilter"),sg(),iN(660,"."),sg(),Tl(661,"p"),iN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Tl(663,"a",31),iN(664,"Guia de implementa\xE7\xE3o de APIs"),sg(),iN(665," do PO UI."),sg(),Tl(666,"p"),iN(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Tl(668,"em"),iN(669,"GET"),sg(),iN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Tl(671,"code"),iN(672,"search"),sg(),iN(673,", veja exemplo:"),sg(),Tl(674,"blockquote")(675,"p"),iN(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Tl(677,"code"),iN(678,"tot"),sg(),iN(679,"."),sg()(),Tl(680,"pre")(681,"code"),iN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),sg()(),Tl(683,"blockquote")(684,"p"),iN(685,"\xC9 necess\xE1rio que propriedade "),Tl(686,"code"),iN(687,"p-filter"),sg(),iN(688," esteja habilitada."),sg()()()(),Tl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),iN(693," p-short-logo"),Gl(694,"br"),sg()()(),Tl(695,"td",19)(696,"code",26),iN(697,"string"),sg()(),Tl(698,"td",21),iN(699,"-"),sg(),Tl(700,"td",22)(701,"em")(702,"strong"),iN(703,"(opcional)"),sg()(),Tl(704,"p"),iN(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),sg(),Tl(706,"blockquote")(707,"p")(708,"strong"),iN(709,"Importante:"),sg()()(),Tl(710,"ul")(711,"li"),iN(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Tl(713,"code"),iN(714,"p-logo"),sg(),iN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),sg(),Tl(716,"li"),iN(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Tl(718,"code"),iN(719,"48px"),sg(),iN(720," de altura e "),Tl(721,"code"),iN(722,"48px"),sg(),iN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),sg(),Tl(724,"li"),iN(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Tl(726,"code"),iN(727,"p-logo"),sg(),iN(728,"."),sg()()()(),Tl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),iN(733," (p-toggle)"),Gl(734,"br"),sg()()(),Tl(735,"td",19)(736,"code",34),iN(737,"EventEmitter"),sg()(),Tl(738,"td",21),iN(739,"-"),sg(),Tl(740,"td",22)(741,"em")(742,"strong"),iN(743,"(opcional)"),sg()(),Tl(744,"p"),iN(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Tl(746,"code"),iN(747,"true"),sg(),iN(748," quando expandido e "),Tl(749,"code"),iN(750,"false"),sg(),iN(751," quando colapsado."),sg(),Tl(752,"pre")(753,"code",35),iN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),sg()()()()(),Tl(755,"h3",11),iN(756,"M\xE9todos"),sg(),Tl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),iN(763," collapse "),sg()()()()(),Tl(764,"tr",22)(765,"td",22)(766,"p"),Gl(767,"a",38),sg(),Tl(768,"p"),iN(769,"M\xE9todo para colapsar (retrair) o menu."),sg()()()(),Gl(770,"br"),Tl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),iN(777," expand "),sg()()()()(),Tl(778,"tr",22)(779,"td",22)(780,"p"),Gl(781,"a",39),sg(),Tl(782,"p"),iN(783,"M\xE9todo para expandir (aumentar) o menu."),sg()()()(),Gl(784,"br"),Tl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),iN(791," toggle "),sg()()()()(),Tl(792,"tr",22)(793,"td",22)(794,"p"),Gl(795,"a",40),iN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),sg(),Tl(797,"blockquote")(798,"p"),iN(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),sg()(),Tl(800,"ul")(801,"li"),iN(802,"Todos os itens de menu tiverem valor nas propriedades "),Tl(803,"code"),iN(804,"icon"),sg(),iN(805," e "),Tl(806,"code"),iN(807,"shortLabel"),sg(),iN(808,"."),sg()()()()(),Gl(809,"br"),Tl(810,"h3"),iN(811,"Interfaces"),sg(),Tl(812,"h4",41)(813,"code",5),iN(814,"PoMenuFilter"),sg()(),Tl(815,"div",2)(816,"p"),iN(817,"Interface do servi\xE7o utilizado no componente "),Tl(818,"code"),iN(819,"po-menu"),sg(),iN(820,"."),sg()(),Tl(821,"h4",11),iN(822,"M\xE9todos"),sg(),Tl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),iN(829," getFilteredData "),sg()()()()(),Tl(830,"tr",22)(831,"td",22)(832,"p"),iN(833,"M\xE9todo respons\xE1vel por retornar um "),Tl(834,"em"),iN(835,"Observable"),sg(),iN(836," que retorne uma lista de objetos que seguem a interface "),Tl(837,"code"),iN(838,"PoMenuItemFiltered"),sg(),iN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Tl(840,"code"),iN(841,"p-params"),sg(),iN(842,"."),sg()()()(),Tl(843,"h5")(844,"b"),iN(845,"Par\xE2metros"),sg()(),Tl(846,"table",12)(847,"tr",13)(848,"th",14),iN(849,"Nome"),sg(),Tl(850,"th",14),iN(851,"Tipo"),sg(),Tl(852,"th",14),iN(853,"Descri\xE7\xE3o"),sg()(),Tl(854,"tr",15)(855,"td",16),iN(856," search"),sg(),Tl(857,"td",19)(858,"code",42),iN(859," string "),sg()(),Tl(860,"td",22)(861,"p"),iN(862,"Valor informado no campo de busca dos itens de menus."),sg()()(),Tl(863,"tr",15)(864,"td",16),iN(865," params"),sg(),Tl(866,"td",19)(867,"code",42),iN(868," any "),sg()(),Tl(869,"td",22)(870,"p"),iN(871,"Valor informado atrav\xE9s da propriedade "),Tl(872,"code"),iN(873,"p-params"),sg(),iN(874,"."),sg()()()(),Gl(875,"br"),Tl(876,"h4",41)(877,"code",5),iN(878,"PoMenuItemBadge"),sg()(),Tl(879,"div",2)(880,"p"),iN(881,"Interface do "),Tl(882,"em"),iN(883,"badge"),sg(),iN(884," utilizado no "),Tl(885,"code"),iN(886,"po-menu"),sg(),iN(887,"."),sg()(),Tl(888,"h4",11),iN(889,"Propriedades"),sg(),Tl(890,"table",12)(891,"tr",13)(892,"th",14),iN(893,"Nome"),sg(),Tl(894,"th",14),iN(895,"Tipo"),sg(),Tl(896,"th",14),iN(897,"Descri\xE7\xE3o"),sg()(),Tl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),iN(902," color"),Gl(903,"br"),sg()()(),Tl(904,"td",19)(905,"code",26),iN(906,"string"),sg()(),Tl(907,"td",22)(908,"em")(909,"strong"),iN(910,"(opcional)"),sg()(),Tl(911,"p"),iN(912,"Define a cor do "),Tl(913,"em"),iN(914,"badge"),sg(),iN(915," e aceita os valores:"),sg(),Tl(916,"p"),Gl(917,"span",43),Tl(918,"code"),iN(919,"color-01"),sg()(),Tl(920,"p"),Gl(921,"span",44),Tl(922,"code"),iN(923,"color-02"),sg()(),Tl(924,"p"),Gl(925,"span",45),Tl(926,"code"),iN(927,"color-03"),sg()(),Tl(928,"p"),Gl(929,"span",46),Tl(930,"code"),iN(931,"color-04"),sg()(),Tl(932,"p"),Gl(933,"span",47),Tl(934,"code"),iN(935,"color-05"),sg()(),Tl(936,"p"),Gl(937,"span",48),Tl(938,"code"),iN(939,"color-06"),sg()(),Tl(940,"p"),Gl(941,"span",49),Tl(942,"code"),iN(943,"color-07"),sg()(),Tl(944,"p"),Gl(945,"span",50),Tl(946,"code"),iN(947,"color-08"),sg()(),Tl(948,"p"),Gl(949,"span",51),Tl(950,"code"),iN(951,"color-09"),sg()(),Tl(952,"p"),Gl(953,"span",52),Tl(954,"code"),iN(955,"color-10"),sg()(),Tl(956,"p"),Gl(957,"span",53),Tl(958,"code"),iN(959,"color-11"),sg()(),Tl(960,"p"),Gl(961,"span",54),Tl(962,"code"),iN(963,"color-12"),sg()()()(),Tl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),iN(968," value"),Gl(969,"br"),sg()()(),Tl(970,"td",19)(971,"code",55),iN(972,"number"),sg()(),Tl(973,"td",22)(974,"p"),iN(975,"N\xFAmero exibido no "),Tl(976,"em"),iN(977,"badge"),sg(),iN(978,", caso o mesmo seja maior que "),Tl(979,"strong"),iN(980,"9"),sg(),iN(981," o mesmo exibe "),Tl(982,"strong"),iN(983,"9+"),sg(),iN(984,"."),sg()()()(),Tl(985,"h4",41)(986,"code",5),iN(987,"PoMenuItemFiltered"),sg()(),Tl(988,"div",2)(989,"p"),iN(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Tl(991,"code"),iN(992,"po-menu"),sg(),iN(993,"."),sg()(),Tl(994,"h4",11),iN(995,"Propriedades"),sg(),Tl(996,"table",12)(997,"tr",13)(998,"th",14),iN(999,"Nome"),sg(),Tl(1e3,"th",14),iN(1001,"Tipo"),sg(),Tl(1002,"th",14),iN(1003,"Descri\xE7\xE3o"),sg()(),Tl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),iN(1008," action"),Gl(1009,"br"),sg()()(),Tl(1010,"td",19)(1011,"code",56),iN(1012,"() => void"),sg()(),Tl(1013,"td",22)(1014,"p"),iN(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),sg()()(),Tl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),iN(1020," label"),Gl(1021,"br"),sg()()(),Tl(1022,"td",19)(1023,"code",26),iN(1024,"string"),sg()(),Tl(1025,"td",22)(1026,"p"),iN(1027,"Texto do item de menu."),sg()()(),Tl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),iN(1032," link"),Gl(1033,"br"),sg()()(),Tl(1034,"td",19)(1035,"code",26),iN(1036,"string"),sg()(),Tl(1037,"td",22)(1038,"p"),iN(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Tl(1040,"em"),iN(1041,"link"),sg(),iN(1042," interno ou externo."),sg()()()(),Tl(1043,"h4",41)(1044,"code",5),iN(1045,"PoMenuItem"),sg()(),Tl(1046,"div",2)(1047,"p"),iN(1048,"Interface para os itens de menu do componente po-menu."),sg()(),Tl(1049,"h4",11),iN(1050,"Propriedades"),sg(),Tl(1051,"table",12)(1052,"tr",13)(1053,"th",14),iN(1054,"Nome"),sg(),Tl(1055,"th",14),iN(1056,"Tipo"),sg(),Tl(1057,"th",14),iN(1058,"Descri\xE7\xE3o"),sg()(),Tl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),iN(1063," action"),Gl(1064,"br"),sg()()(),Tl(1065,"td",19)(1066,"code",57),iN(1067,"Function"),sg()(),Tl(1068,"td",22)(1069,"em")(1070,"strong"),iN(1071,"(opcional)"),sg()(),Tl(1072,"p"),iN(1073,"A\xE7\xE3o personalizada para clique do item de menu."),sg()()(),Tl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),iN(1078," badge"),Gl(1079,"br"),sg()()(),Tl(1080,"td",19)(1081,"code",58),iN(1082,"PoMenuItemBadge"),sg()(),Tl(1083,"td",22)(1084,"em")(1085,"strong"),iN(1086,"(opcional)"),sg()(),Tl(1087,"p"),iN(1088,"Badge do item de menu."),sg(),Tl(1089,"p"),iN(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),sg(),Tl(1091,"blockquote")(1092,"p"),iN(1093,"O "),Tl(1094,"code"),iN(1095,"po-badge"),sg(),iN(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Tl(1097,"code"),iN(1098,"subItems"),sg(),iN(1099," e seu valor seja maior ou igual a 0."),sg()()()(),Tl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),iN(1104," icon"),Gl(1105,"br"),sg()()(),Tl(1106,"td",19)(1107,"code",26),iN(1108,"string "),sg(),Tl(1109,"code",59),iN(1110," TemplateRef<void>"),sg()(),Tl(1111,"td",22)(1112,"em")(1113,"strong"),iN(1114,"(opcional)"),sg()(),Tl(1115,"p"),iN(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(1117,"a",60),iN(1118,"Biblioteca de \xEDcones"),sg(),iN(1119,". conforme exemplo abaixo:"),sg(),Tl(1120,"pre")(1121,"code"),iN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),sg()(),Tl(1123,"p"),iN(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(1125,"pre")(1126,"code"),iN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),sg()(),Tl(1128,"p"),iN(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(1130,"code"),iN(1131,"TemplateRef"),sg(),iN(1132,`, conforme exemplo abaixo:
component.html:`),sg(),Tl(1133,"pre")(1134,"code"),iN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),sg()(),Tl(1136,"p"),iN(1137,"component.ts:"),sg(),Tl(1138,"pre")(1139,"code"),iN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),sg()(),Tl(1141,"blockquote")(1142,"p"),iN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),sg()()()(),Tl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),iN(1148," label"),Gl(1149,"br"),sg()()(),Tl(1150,"td",19)(1151,"code",26),iN(1152,"string"),sg()(),Tl(1153,"td",22)(1154,"p"),iN(1155,"Texto do item de menu."),sg()()(),Tl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),iN(1160," link"),Gl(1161,"br"),sg()()(),Tl(1162,"td",19)(1163,"code",26),iN(1164,"string"),sg()(),Tl(1165,"td",22)(1166,"em")(1167,"strong"),iN(1168,"(opcional)"),sg()(),Tl(1169,"p"),iN(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),sg()()(),Tl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),iN(1175," shortLabel"),Gl(1176,"br"),sg()()(),Tl(1177,"td",19)(1178,"code",26),iN(1179,"string"),sg()(),Tl(1180,"td",22)(1181,"em")(1182,"strong"),iN(1183,"(opcional)"),sg()(),Tl(1184,"p"),iN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),sg()()(),Tl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),iN(1190," subItems"),Gl(1191,"br"),sg()()(),Tl(1192,"td",19)(1193,"code",61),iN(1194,"Array<PoMenuItem>"),sg()(),Tl(1195,"td",22)(1196,"em")(1197,"strong"),iN(1198,"(opcional)"),sg()(),Tl(1199,"p"),iN(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-menu-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ve,Me,ye,we],encapsulation:2,changeDetection:1})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(je),DL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,_e]})}return a})();export{_t as DocPoMenuModule};