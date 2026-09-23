import{$i as ow,$r as Vx,Br as TN,En as uP,Et as V8e,Gr as Ue,Hr as Tw,Ht as c0e,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,On as v5,Qi as oN,Sa as yN,Si as db,Sn as sU,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce$1,Zr as Vk,_a as wN,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,da as uo,ea as p0,ga as w,gn as q8e,ia as q,ir as I,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var ke=()=>({label:`PO UI - Angular Framework`,link:`/`});var Le=a=>[a];var xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(r,i){r&1&&ql(0,`po-menu`,0),r&2&&cw(`p-menus`,MN(2,Le,TN(1,ke)))},dependencies:[v5],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-menu-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,xe],encapsulation:2,changeDetection:1})}return a})();function Re(a,W){if(a&1&&(Ml(0,`div`),ql(1,`span`),Ml(2,`span`,26),mN(3),lg()()),a&2){let m=W.$implicit;Up(),oN(wN(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),Up(2),gg(` `,m.label,` `)}}var Ce=(()=>{class a{changeDetector=f(Ue);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(r){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(r,i){if(r&1&&Zl(v5,7),r&2){let s;lo(s=uo())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`div`,1),ql(1,`po-menu`,2),Ml(2,`po-page-default`,3)(3,`div`,4),ql(4,`po-info`,5)(5,`po-button-group`,6),lg(),ql(6,`po-divider`),Ml(7,`div`,4),ql(8,`po-info`,7),Ml(9,`form`,null,0)(11,`po-switch`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.filter,l)||(i.filter=l),Jy(l)}),ht(`ngModelChange`,function(l){return i.onFilterChange(l)}),lg(),f0(),Ml(12,`po-switch`,9),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.searchTreeItems,l)||(i.searchTreeItems=l),Jy(l)}),lg(),f0(),Ml(13,`po-select`,10),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.parent,l)||(i.parent=l),Jy(l)}),lg(),f0(),Ml(14,`po-input`,11),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.label,l)||(i.label=l),Jy(l)}),lg(),f0(),Ml(15,`po-input`,12),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.shortLabel,l)||(i.shortLabel=l),Jy(l)}),lg(),f0(),Ml(16,`po-url`,13),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.link,l)||(i.link=l),Jy(l)}),lg(),f0(),Ml(17,`po-select`,14),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.badgeColor,l)||(i.badgeColor=l),Jy(l)}),ow(18,Re,4,4,`ng-template`,15),lg(),f0(),Ml(19,`po-number`,16),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.badgeValue,l)||(i.badgeValue=l),Jy(l)}),lg(),f0(),Ml(20,`po-select`,17),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.icon,l)||(i.icon=l),Jy(l)}),lg(),f0(),Ml(21,`div`,4)(22,`po-button`,18),ht(`p-click`,function(){return i.addMenuItem()}),lg()(),ql(23,`po-divider`),Ml(24,`po-input`,19),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.service,l)||(i.service=l),Jy(l)}),lg(),f0(),Ml(25,`po-input`,20),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.menuParams,l)||(i.menuParams=l),Jy(l)}),ht(`p-change-model`,function(l){return i.onChangeParams(l)}),lg(),f0(),Ml(26,`po-input`,21),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.logo,l)||(i.logo=l),Jy(l)}),lg(),f0(),Ml(27,`po-input`,22),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.shortLogo,l)||(i.shortLogo=l),Jy(l)}),lg(),f0(),Ml(28,`po-input`,23),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.logoLink,l)||(i.logoLink=l),Jy(l)}),lg(),f0(),Ml(29,`po-radio-group`,24),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.componentsSize,l)||(i.componentsSize=l),Jy(l)}),lg(),f0(),Ml(30,`div`,4)(31,`po-button`,25),ht(`p-click`,function(){return i.restore()}),lg()()()()()()}r&2&&(Up(),cw(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),Up(4),cw(`p-buttons`,i.buttons),Up(3),cw(`p-value`,i.menuItemSelected),Up(3),Tw(`ngModel`,i.filter),p0(),Up(),Tw(`ngModel`,i.searchTreeItems),cw(`p-disabled`,!i.filter),p0(),Up(),Tw(`ngModel`,i.parent),cw(`p-options`,i.parentList),p0(),Up(),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.shortLabel),p0(),Up(),Tw(`ngModel`,i.link),p0(),Up(),Tw(`ngModel`,i.badgeColor),cw(`p-options`,i.badgeColorList),p0(),Up(2),Tw(`ngModel`,i.badgeValue),cw(`p-max`,i.maxBadgeValue),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),p0(),Up(4),Tw(`ngModel`,i.service),p0(),Up(),Tw(`ngModel`,i.menuParams),p0(),Up(),Tw(`ngModel`,i.logo),p0(),Up(),Tw(`ngModel`,i.shortLogo),p0(),Up(),Tw(`ngModel`,i.logoLink),p0(),Up(),Tw(`ngModel`,i.componentsSize),cw(`p-options`,i.componentsSizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,c0e,nb,lU,xbe,q0e,Tbe,J4,sU,kbe,v5,V8e],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-wrapper">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
      this.parentList.push({ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push({ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push({ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-menu-labs`),lg(),ql(29,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,qe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=f(db);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(q(i=>i.items))}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Be(a,W){a&1&&(Ml(0,`div`,5)(1,`p`),mN(2,`Welcome,`),lg(),Ml(3,`p`)(4,`b`),mN(5,` John Doe `),lg()()())}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[Ce$1([O])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`po-menu`,1),ow(2,Be,6,0,`div`,2),lg(),ql(3,`po-toolbar`,3)(4,`po-page-default`,4),lg()),r&2&&(Up(),cw(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),Up(2),cw(`p-show-notification`,!1),Up(),cw(`p-title`,i.menuItemSelected))},dependencies:[v5,uP,V8e,q8e],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu - Human Resources`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-wrapper">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()(),Ml(25,`po-tab`,10)(26,`div`)(27,`label`,6),mN(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),lg(),Ml(29,`pre`,11),mN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),lg()()()()(),Ml(31,`div`,12),ql(32,`sample-po-menu-human-resources`),lg(),ql(33,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoMenuModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-menu.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoMenuComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),lg(),Ml(15,`p`),mN(16,`O componente po-menu recebe uma lista de objetos do tipo `),Ml(17,`code`),mN(18,`MenuItem`),lg(),mN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),lg(),Ml(20,`h4`),mN(21,`Tokens customizáveis`),lg(),Ml(22,`p`),mN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(24,`blockquote`)(25,`p`),mN(26,`Para maiores informações, acesse o guia `),Ml(27,`a`,6),mN(28,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(29,`.`),lg()(),Ml(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),mN(34,`Propriedade`),lg(),Ml(35,`th`),mN(36,`Descrição`),lg(),Ml(37,`th`),mN(38,`Valor Padrão`),lg()()(),Ml(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),mN(43,`Default Values`),lg()(),ql(44,`td`)(45,`td`),lg(),Ml(46,`tr`)(47,`td`)(48,`code`),mN(49,`--border-radius`),lg()(),Ml(50,`td`),mN(51,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(52,`td`)(53,`code`),mN(54,`var(--border-radius-md)`),lg()()(),Ml(55,`tr`)(56,`td`)(57,`code`),mN(58,`--border-color`),lg()(),Ml(59,`td`),mN(60,`Cor da borda`),lg(),Ml(61,`td`)(62,`code`),mN(63,`var(--color-neutral-light-20)`),lg()()(),Ml(64,`tr`)(65,`td`)(66,`code`),mN(67,`--background-color`),lg()(),Ml(68,`td`),mN(69,`Cor de background`),lg(),Ml(70,`td`)(71,`code`),mN(72,`Var(----color-neutral-light-05)`),lg()()(),Ml(73,`tr`)(74,`td`)(75,`strong`),mN(76,`Menu Footer`),lg()(),ql(77,`td`)(78,`td`),lg(),Ml(79,`tr`)(80,`td`)(81,`code`),mN(82,`--color`),lg()(),Ml(83,`td`),mN(84,`Cor principla do menu footer`),lg(),Ml(85,`td`)(86,`code`),mN(87,`var(--color-action-default)`),lg()()(),Ml(88,`tr`)(89,`td`)(90,`code`),mN(91,`--font-size`),lg()(),Ml(92,`td`),mN(93,`Tamanho da fonte`),lg(),Ml(94,`td`)(95,`code`),mN(96,`var(--font-size-default)`),lg()()(),Ml(97,`tr`)(98,`td`)(99,`code`),mN(100,`--line-height`),lg()(),Ml(101,`td`),mN(102,`Tamanho da label`),lg(),Ml(103,`td`)(104,`code`),mN(105,`var(--line-height-md)`),lg()()(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--outline-color-focused`),lg()(),Ml(110,`td`),mN(111,`Cor do outline do estado de focus`),lg(),Ml(112,`td`)(113,`code`),mN(114,`var(--color-action-focus)`),lg()()(),Ml(115,`tr`)(116,`td`)(117,`code`),mN(118,`--font-weight-lvl0`),lg()(),Ml(119,`td`),mN(120,`Peso da fonte`),lg(),Ml(121,`td`)(122,`code`),mN(123,`var(--font-weight-bold)`),lg()()(),Ml(124,`tr`)(125,`td`)(126,`strong`),mN(127,`po-menu-item`),lg()(),ql(128,`td`)(129,`td`),lg(),Ml(130,`tr`)(131,`td`)(132,`code`),mN(133,`--font-family`),lg()(),Ml(134,`td`),mN(135,`Família tipográfica usada`),lg(),Ml(136,`td`)(137,`code`),mN(138,`var(--font-family-theme)`),lg()()(),Ml(139,`tr`)(140,`td`)(141,`code`),mN(142,`--font-size`),lg()(),Ml(143,`td`),mN(144,`Tamanho da fonte`),lg(),Ml(145,`td`)(146,`code`),mN(147,`var(--font-size-default)`),lg()()(),Ml(148,`tr`)(149,`td`)(150,`code`),mN(151,`--line-height`),lg()(),Ml(152,`td`),mN(153,`Tamanho da label`),lg(),Ml(154,`td`)(155,`code`),mN(156,`var(--line-height-md)`),lg()()(),Ml(157,`tr`)(158,`td`)(159,`code`),mN(160,`--border-radius`),lg()(),Ml(161,`td`),mN(162,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(163,`td`)(164,`code`),mN(165,`var(--border-radius-md)`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--color`),lg()(),Ml(170,`td`),mN(171,`Cor principal do item`),lg(),Ml(172,`td`)(173,`code`),mN(174,`var(--color-action-default)`),lg()()(),Ml(175,`tr`)(176,`td`)(177,`code`),mN(178,`--background-color`),lg()(),Ml(179,`td`),mN(180,`Cor do background`),lg(),Ml(181,`td`)(182,`code`),mN(183,`transparent`),lg()()(),Ml(184,`tr`)(185,`td`)(186,`strong`),mN(187,`Hover`),lg()(),ql(188,`td`)(189,`td`),lg(),Ml(190,`tr`)(191,`td`)(192,`code`),mN(193,`--color-hover`),lg()(),Ml(194,`td`),mN(195,`Cor principal no estado hover`),lg(),Ml(196,`td`)(197,`code`),mN(198,`var(--color-brand-01-darkest)`),lg()()(),Ml(199,`tr`)(200,`td`)(201,`code`),mN(202,`--background-color-hover`),lg()(),Ml(203,`td`),mN(204,`Cor de background no estado hover`),lg(),Ml(205,`td`)(206,`code`),mN(207,`var(--color-brand-01-lighter)`),lg()()(),Ml(208,`tr`)(209,`td`)(210,`strong`),mN(211,`Focused`),lg()(),ql(212,`td`)(213,`td`),lg(),Ml(214,`tr`)(215,`td`)(216,`code`),mN(217,`--outline-color-focused`),lg()(),Ml(218,`td`),mN(219,`Cor do outline do estado de focus`),lg(),Ml(220,`td`)(221,`code`),mN(222,`var(--color-action-focus)`),lg()()(),Ml(223,`tr`)(224,`td`)(225,`strong`),mN(226,`Pressed`),lg()(),ql(227,`td`)(228,`td`),lg(),Ml(229,`tr`)(230,`td`)(231,`code`),mN(232,`--background-color-pressed`),lg(),mN(233,` \xA0`),lg(),Ml(234,`td`),mN(235,`Cor de background no estado de pressionado\xA0`),lg(),Ml(236,`td`)(237,`code`),mN(238,`var(--color-brand-01-light)`),lg()()(),Ml(239,`tr`)(240,`td`)(241,`strong`),mN(242,`Actived`),lg()(),ql(243,`td`)(244,`td`),lg(),Ml(245,`tr`)(246,`td`)(247,`code`),mN(248,`--background-color-actived`),lg()(),Ml(249,`td`),mN(250,`Cor de background no estado actived`),lg(),Ml(251,`td`)(252,`code`),mN(253,`var(--color-brand-01-darkest)`),lg()()(),Ml(254,`tr`)(255,`td`)(256,`code`),mN(257,`--color-actived`),lg()(),Ml(258,`td`),mN(259,`Cor principal no estado actived`),lg(),Ml(260,`td`)(261,`code`),mN(262,`var(--color-brand-01-lighter)`),lg()()(),Ml(263,`tr`)(264,`td`)(265,`strong`),mN(266,`Font`),lg()(),ql(267,`td`)(268,`td`),lg(),Ml(269,`tr`)(270,`td`)(271,`code`),mN(272,`--font-weight-lvl0`),lg()(),Ml(273,`td`),mN(274,`Peso da fonte bold`),lg(),Ml(275,`td`)(276,`code`),mN(277,`var(--font-weight-bold)`),lg()()(),Ml(278,`tr`)(279,`td`)(280,`code`),mN(281,`--font-weight-lvl1`),lg()(),Ml(282,`td`),mN(283,`Peso da fonte`),lg(),Ml(284,`td`)(285,`code`),mN(286,`var(--font-weight-normal)`),lg()()()()(),Ml(287,`p`),ql(288,`br`),mN(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),lg(),Ml(290,`p`),mN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),lg(),Ml(292,`p`),mN(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),lg(),Ml(294,`p`),mN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Ml(296,`a`,7)(297,`strong`),mN(298,`p-menu-header-template`),lg()(),mN(299,`.`),lg(),Ml(300,`p`),mN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Ml(302,`code`),mN(303,`PoMenuFilter`),lg(),mN(304,`.`),lg(),Ml(305,`p`),mN(306,`Para o menu funcionar corretamente é necessário importar o `),Ml(307,`code`),mN(308,`RouterModule`),lg(),mN(309,` e `),Ml(310,`code`),mN(311,`Routes`),lg(),mN(312,` do módulo principal de sua aplicação:`),lg(),Ml(313,`pre`)(314,`code`),mN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),lg()(),Ml(316,`p`),mN(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),lg(),Ml(318,`pre`)(319,`code`),mN(320,`import { NgModule } from '@angular/core';

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
`),lg()()(),Ml(321,`div`,8)(322,`h4`,9),mN(323,`Seletor`),lg(),Ml(324,`pre`,10),mN(325,`<po-menu
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
`),lg()(),Ml(326,`h4`,11),mN(327,`Propriedades`),lg(),Ml(328,`table`,12)(329,`tr`,13)(330,`th`,14),mN(331,`Nome`),lg(),Ml(332,`th`,14),mN(333,`Tipo`),lg(),Ml(334,`th`,14),mN(335,`Padrão`),lg(),Ml(336,`th`,14),mN(337,`Descrição`),lg()(),Ml(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),mN(342,` p-automatic-toggle`),ql(343,`br`),lg()()(),Ml(344,`td`,19)(345,`code`,20),mN(346,`boolean`),lg()(),Ml(347,`td`,21)(348,`p`)(349,`code`),mN(350,`false`),lg()()(),Ml(351,`td`,22)(352,`em`)(353,`strong`),mN(354,`(opcional)`),lg()(),Ml(355,`p`),mN(356,`Expande e Colapsa (retrai) o menu automaticamente.`),lg()()(),Ml(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),mN(361,` p-collapsed`),ql(362,`br`),lg()()(),Ml(363,`td`,19)(364,`code`,20),mN(365,`boolean`),lg()(),Ml(366,`td`,21)(367,`p`)(368,`code`),mN(369,`false`),lg()()(),Ml(370,`td`,22)(371,`em`)(372,`strong`),mN(373,`(opcional)`),lg()(),Ml(374,`p`),mN(375,`Colapsa (retrai) o menu e caso receba o valor `),Ml(376,`code`),mN(377,`false`),lg(),mN(378,` expande o menu.`),lg(),Ml(379,`blockquote`)(380,`p`),mN(381,`Utilize esta propriedade para iniciar o menu colapsado.`),lg()(),Ml(382,`blockquote`)(383,`p`),mN(384,`Ao utilizar os métodos `),Ml(385,`a`,23)(386,`code`),mN(387,`colapse`),lg()(),mN(388,`, `),Ml(389,`a`,24)(390,`code`),mN(391,`expand`),lg()(),mN(392,` e
`),Ml(393,`a`,25)(394,`code`),mN(395,`toggle`),lg()(),mN(396,` o valor desta propriedade não é alterado.`),lg()(),Ml(397,`p`)(398,`strong`),mN(399,`Importante:`),lg()(),Ml(400,`blockquote`)(401,`p`),mN(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Ml(403,`code`),mN(404,`icon`),lg(),mN(405,` e `),Ml(406,`code`),mN(407,`shortLabel`),lg(),mN(408,`.`),lg()()()(),Ml(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),mN(413,` p-components-size`),ql(414,`br`),lg()()(),Ml(415,`td`,19)(416,`code`,26),mN(417,`string`),lg()(),Ml(418,`td`,21)(419,`p`)(420,`code`),mN(421,`medium`),lg()()(),Ml(422,`td`,22)(423,`em`)(424,`strong`),mN(425,`(opcional)`),lg()(),Ml(426,`p`),mN(427,`Define o tamanho dos componentes de formulário no menu:`),lg(),Ml(428,`ul`)(429,`li`)(430,`code`),mN(431,`small`),lg(),mN(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(433,`li`)(434,`code`),mN(435,`medium`),lg(),mN(436,`: aplica a medida medium de cada componente.`),lg()(),Ml(437,`blockquote`)(438,`p`),mN(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(440,`code`),mN(441,`medium`),lg(),mN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(443,`a`,27),mN(444,`po-theme`),lg(),mN(445,`.`),lg()()()(),Ml(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),mN(450,` p-filter`),ql(451,`br`),lg()()(),Ml(452,`td`,19)(453,`code`,20),mN(454,`boolean`),lg()(),Ml(455,`td`,21)(456,`p`)(457,`code`),mN(458,`false`),lg()()(),Ml(459,`td`,22)(460,`em`)(461,`strong`),mN(462,`(opcional)`),lg()(),Ml(463,`p`),mN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Ml(465,`code`),mN(466,`p-service`),lg(),mN(467,`.`),lg(),Ml(468,`blockquote`)(469,`p`),mN(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),lg()()()(),Ml(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),mN(475,` p-logo`),ql(476,`br`),lg()()(),Ml(477,`td`,19)(478,`code`,26),mN(479,`string`),lg()(),Ml(480,`td`,21),mN(481,`-`),lg(),Ml(482,`td`,22)(483,`em`)(484,`strong`),mN(485,`(opcional)`),lg()(),Ml(486,`p`),mN(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),lg(),Ml(488,`blockquote`)(489,`p`)(490,`strong`),mN(491,`Importante:`),lg()()(),Ml(492,`ul`)(493,`li`),mN(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),lg(),Ml(495,`li`),mN(496,`Como boa prática, indica-se utilizar imagens com até `),Ml(497,`code`),mN(498,`24px`),lg(),mN(499,` de altura e `),Ml(500,`code`),mN(501,`224px`),lg(),mN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),lg()()()(),Ml(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),mN(507,` p-logo-alt`),ql(508,`br`),lg()()(),Ml(509,`td`,19)(510,`code`,26),mN(511,`string`),lg()(),Ml(512,`td`,21)(513,`p`)(514,`code`),mN(515,`Logomarca início`),lg()()(),Ml(516,`td`,22)(517,`em`)(518,`strong`),mN(519,`(opcional)`),lg()(),Ml(520,`p`),mN(521,`Define o texto alternativo para a logomarca.`),lg(),Ml(522,`blockquote`)(523,`p`)(524,`strong`),mN(525,`Importante`),lg(),mN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),lg()()()(),Ml(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),mN(531,` p-logo-link`),ql(532,`br`),lg()()(),Ml(533,`td`,19)(534,`code`,20),mN(535,`boolean `),lg(),Ml(536,`code`,26),mN(537,` string`),lg()(),Ml(538,`td`,21)(539,`p`)(540,`code`),mN(541,`true`),lg()()(),Ml(542,`td`,22)(543,`em`)(544,`strong`),mN(545,`(opcional)`),lg()(),Ml(546,`p`),mN(547,`Define o link para a rota ao clicar no logo do menu.`),lg(),Ml(548,`ul`)(549,`li`),mN(550,`Se o valor for uma string, define a rota para o link informado.`),lg(),Ml(551,`li`),mN(552,`Se for `),Ml(553,`code`),mN(554,`false`),lg(),mN(555,`, o logo não terá link associado.`),lg(),Ml(556,`li`),mN(557,`Se for `),Ml(558,`code`),mN(559,`true`),lg(),mN(560,`, o logo terá a rota padrão `),Ml(561,`code`),mN(562,`./`),lg(),mN(563,`.`),lg()()()(),Ml(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),mN(568,` p-menus`),ql(569,`br`),lg()()(),Ml(570,`td`,19)(571,`code`,28),mN(572,`PoMenuItem[]`),lg()(),Ml(573,`td`,21),mN(574,`-`),lg(),Ml(575,`td`,22)(576,`p`),mN(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),lg()()(),Ml(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),mN(582,` p-params`),ql(583,`br`),lg()()(),Ml(584,`td`,19)(585,`code`,29),mN(586,`any`),lg()(),Ml(587,`td`,21),mN(588,`-`),lg(),Ml(589,`td`,22)(590,`em`)(591,`strong`),mN(592,`(opcional)`),lg()(),Ml(593,`p`),mN(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),lg(),Ml(595,`p`),mN(596,`Caso utilizado um serviço customizado, implementando a interface `),Ml(597,`code`),mN(598,`PoMenuFilter`),lg(),mN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Ml(600,`code`),mN(601,`getFilteredData`),lg(),mN(602,`.`),lg(),Ml(603,`p`),mN(604,`Quando utilizada uma URL de serviço, será realizado um `),Ml(605,`em`),mN(606,`GET`),lg(),mN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Ml(608,`code`),mN(609,`search`),lg(),mN(610,`, veja exemplo:`),lg(),Ml(611,`pre`)(612,`code`),mN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),lg()()()(),Ml(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),mN(618,` p-search-tree-items`),ql(619,`br`),lg()()(),Ml(620,`td`,19)(621,`code`,20),mN(622,`boolean`),lg()(),Ml(623,`td`,21)(624,`p`)(625,`code`),mN(626,`false`),lg()()(),Ml(627,`td`,22)(628,`em`)(629,`strong`),mN(630,`(opcional)`),lg()(),Ml(631,`p`),mN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),lg(),Ml(633,`blockquote`)(634,`p`),mN(635,`É necessário que a propriedade `),Ml(636,`code`),mN(637,`p-filter`),lg(),mN(638,` esteja habilitada.`),lg()()()(),Ml(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),mN(643,` p-service`),ql(644,`br`),lg()()(),Ml(645,`td`,19)(646,`code`,26),mN(647,`string `),lg(),Ml(648,`code`,30),mN(649,` PoMenuFilter`),lg()(),Ml(650,`td`,21),mN(651,`-`),lg(),Ml(652,`td`,22)(653,`em`)(654,`strong`),mN(655,`(opcional)`),lg()(),Ml(656,`p`),mN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Ml(658,`code`),mN(659,`PoMenuFilter`),lg(),mN(660,`.`),lg(),Ml(661,`p`),mN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Ml(663,`a`,31),mN(664,`Guia de implementação de APIs`),lg(),mN(665,` do PO UI.`),lg(),Ml(666,`p`),mN(667,`Quando utilizada uma URL de serviço, será realizado um `),Ml(668,`em`),mN(669,`GET`),lg(),mN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Ml(671,`code`),mN(672,`search`),lg(),mN(673,`, veja exemplo:`),lg(),Ml(674,`blockquote`)(675,`p`),mN(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Ml(677,`code`),mN(678,`tot`),lg(),mN(679,`.`),lg()(),Ml(680,`pre`)(681,`code`),mN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),lg()(),Ml(683,`blockquote`)(684,`p`),mN(685,`É necessário que propriedade `),Ml(686,`code`),mN(687,`p-filter`),lg(),mN(688,` esteja habilitada.`),lg()()()(),Ml(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),mN(693,` p-short-logo`),ql(694,`br`),lg()()(),Ml(695,`td`,19)(696,`code`,26),mN(697,`string`),lg()(),Ml(698,`td`,21),mN(699,`-`),lg(),Ml(700,`td`,22)(701,`em`)(702,`strong`),mN(703,`(opcional)`),lg()(),Ml(704,`p`),mN(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),lg(),Ml(706,`blockquote`)(707,`p`)(708,`strong`),mN(709,`Importante:`),lg()()(),Ml(710,`ul`)(711,`li`),mN(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Ml(713,`code`),mN(714,`p-logo`),lg(),mN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),lg(),Ml(716,`li`),mN(717,`Como boa prática, indica-se utilizar imagens com até `),Ml(718,`code`),mN(719,`48px`),lg(),mN(720,` de altura e `),Ml(721,`code`),mN(722,`48px`),lg(),mN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),lg(),Ml(724,`li`),mN(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Ml(726,`code`),mN(727,`p-logo`),lg(),mN(728,`.`),lg()()()(),Ml(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),mN(733,` (p-toggle)`),ql(734,`br`),lg()()(),Ml(735,`td`,19)(736,`code`,34),mN(737,`EventEmitter`),lg()(),Ml(738,`td`,21),mN(739,`-`),lg(),Ml(740,`td`,22)(741,`em`)(742,`strong`),mN(743,`(opcional)`),lg()(),Ml(744,`p`),mN(745,`Evento emitido toda vez que o estado do menu muda, enviando `),Ml(746,`code`),mN(747,`true`),lg(),mN(748,` quando expandido e `),Ml(749,`code`),mN(750,`false`),lg(),mN(751,` quando colapsado.`),lg(),Ml(752,`pre`)(753,`code`,35),mN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),lg()()()()(),Ml(755,`h3`,11),mN(756,`Métodos`),lg(),Ml(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),mN(763,` collapse `),lg()()()()(),Ml(764,`tr`,22)(765,`td`,22)(766,`p`),ql(767,`a`,38),lg(),Ml(768,`p`),mN(769,`Método para colapsar (retrair) o menu.`),lg()()()(),ql(770,`br`),Ml(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),mN(777,` expand `),lg()()()()(),Ml(778,`tr`,22)(779,`td`,22)(780,`p`),ql(781,`a`,39),lg(),Ml(782,`p`),mN(783,`Método para expandir (aumentar) o menu.`),lg()()()(),ql(784,`br`),Ml(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),mN(791,` toggle `),lg()()()()(),Ml(792,`tr`,22)(793,`td`,22)(794,`p`),ql(795,`a`,40),mN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),lg(),Ml(797,`blockquote`)(798,`p`),mN(799,`Os métodos apenas vão colapsar/expandir o menu se:`),lg()(),Ml(800,`ul`)(801,`li`),mN(802,`Todos os itens de menu tiverem valor nas propriedades `),Ml(803,`code`),mN(804,`icon`),lg(),mN(805,` e `),Ml(806,`code`),mN(807,`shortLabel`),lg(),mN(808,`.`),lg()()()()(),ql(809,`br`),Ml(810,`h3`),mN(811,`Interfaces`),lg(),Ml(812,`h4`,41)(813,`code`,5),mN(814,`PoMenuFilter`),lg()(),Ml(815,`div`,2)(816,`p`),mN(817,`Interface do serviço utilizado no componente `),Ml(818,`code`),mN(819,`po-menu`),lg(),mN(820,`.`),lg()(),Ml(821,`h4`,11),mN(822,`Métodos`),lg(),Ml(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),mN(829,` getFilteredData `),lg()()()()(),Ml(830,`tr`,22)(831,`td`,22)(832,`p`),mN(833,`Método responsável por retornar um `),Ml(834,`em`),mN(835,`Observable`),lg(),mN(836,` que retorne uma lista de objetos que seguem a interface `),Ml(837,`code`),mN(838,`PoMenuItemFiltered`),lg(),mN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Ml(840,`code`),mN(841,`p-params`),lg(),mN(842,`.`),lg()()()(),Ml(843,`h5`)(844,`b`),mN(845,`Parâmetros`),lg()(),Ml(846,`table`,12)(847,`tr`,13)(848,`th`,14),mN(849,`Nome`),lg(),Ml(850,`th`,14),mN(851,`Tipo`),lg(),Ml(852,`th`,14),mN(853,`Descrição`),lg()(),Ml(854,`tr`,15)(855,`td`,16),mN(856,` search`),lg(),Ml(857,`td`,19)(858,`code`,42),mN(859,` string `),lg()(),Ml(860,`td`,22)(861,`p`),mN(862,`Valor informado no campo de busca dos itens de menus.`),lg()()(),Ml(863,`tr`,15)(864,`td`,16),mN(865,` params`),lg(),Ml(866,`td`,19)(867,`code`,42),mN(868,` any `),lg()(),Ml(869,`td`,22)(870,`p`),mN(871,`Valor informado através da propriedade `),Ml(872,`code`),mN(873,`p-params`),lg(),mN(874,`.`),lg()()()(),ql(875,`br`),Ml(876,`h4`,41)(877,`code`,5),mN(878,`PoMenuItemBadge`),lg()(),Ml(879,`div`,2)(880,`p`),mN(881,`Interface do `),Ml(882,`em`),mN(883,`badge`),lg(),mN(884,` utilizado no `),Ml(885,`code`),mN(886,`po-menu`),lg(),mN(887,`.`),lg()(),Ml(888,`h4`,11),mN(889,`Propriedades`),lg(),Ml(890,`table`,12)(891,`tr`,13)(892,`th`,14),mN(893,`Nome`),lg(),Ml(894,`th`,14),mN(895,`Tipo`),lg(),Ml(896,`th`,14),mN(897,`Descrição`),lg()(),Ml(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),mN(902,` color`),ql(903,`br`),lg()()(),Ml(904,`td`,19)(905,`code`,26),mN(906,`string`),lg()(),Ml(907,`td`,22)(908,`em`)(909,`strong`),mN(910,`(opcional)`),lg()(),Ml(911,`p`),mN(912,`Define a cor do `),Ml(913,`em`),mN(914,`badge`),lg(),mN(915,` e aceita os valores:`),lg(),Ml(916,`p`),ql(917,`span`,43),Ml(918,`code`),mN(919,`color-01`),lg()(),Ml(920,`p`),ql(921,`span`,44),Ml(922,`code`),mN(923,`color-02`),lg()(),Ml(924,`p`),ql(925,`span`,45),Ml(926,`code`),mN(927,`color-03`),lg()(),Ml(928,`p`),ql(929,`span`,46),Ml(930,`code`),mN(931,`color-04`),lg()(),Ml(932,`p`),ql(933,`span`,47),Ml(934,`code`),mN(935,`color-05`),lg()(),Ml(936,`p`),ql(937,`span`,48),Ml(938,`code`),mN(939,`color-06`),lg()(),Ml(940,`p`),ql(941,`span`,49),Ml(942,`code`),mN(943,`color-07`),lg()(),Ml(944,`p`),ql(945,`span`,50),Ml(946,`code`),mN(947,`color-08`),lg()(),Ml(948,`p`),ql(949,`span`,51),Ml(950,`code`),mN(951,`color-09`),lg()(),Ml(952,`p`),ql(953,`span`,52),Ml(954,`code`),mN(955,`color-10`),lg()(),Ml(956,`p`),ql(957,`span`,53),Ml(958,`code`),mN(959,`color-11`),lg()(),Ml(960,`p`),ql(961,`span`,54),Ml(962,`code`),mN(963,`color-12`),lg()()()(),Ml(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),mN(968,` value`),ql(969,`br`),lg()()(),Ml(970,`td`,19)(971,`code`,55),mN(972,`number`),lg()(),Ml(973,`td`,22)(974,`p`),mN(975,`Número exibido no `),Ml(976,`em`),mN(977,`badge`),lg(),mN(978,`, caso o mesmo seja maior que `),Ml(979,`strong`),mN(980,`9`),lg(),mN(981,` o mesmo exibe `),Ml(982,`strong`),mN(983,`9+`),lg(),mN(984,`.`),lg()()()(),Ml(985,`h4`,41)(986,`code`,5),mN(987,`PoMenuItemFiltered`),lg()(),Ml(988,`div`,2)(989,`p`),mN(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Ml(991,`code`),mN(992,`po-menu`),lg(),mN(993,`.`),lg()(),Ml(994,`h4`,11),mN(995,`Propriedades`),lg(),Ml(996,`table`,12)(997,`tr`,13)(998,`th`,14),mN(999,`Nome`),lg(),Ml(1e3,`th`,14),mN(1001,`Tipo`),lg(),Ml(1002,`th`,14),mN(1003,`Descrição`),lg()(),Ml(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),mN(1008,` action`),ql(1009,`br`),lg()()(),Ml(1010,`td`,19)(1011,`code`,56),mN(1012,`() => void`),lg()(),Ml(1013,`td`,22)(1014,`p`),mN(1015,`Ação a ser executada quando o item de menu for clicado.`),lg()()(),Ml(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),mN(1020,` label`),ql(1021,`br`),lg()()(),Ml(1022,`td`,19)(1023,`code`,26),mN(1024,`string`),lg()(),Ml(1025,`td`,22)(1026,`p`),mN(1027,`Texto do item de menu.`),lg()()(),Ml(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),mN(1032,` link`),ql(1033,`br`),lg()()(),Ml(1034,`td`,19)(1035,`code`,26),mN(1036,`string`),lg()(),Ml(1037,`td`,22)(1038,`p`),mN(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Ml(1040,`em`),mN(1041,`link`),lg(),mN(1042,` interno ou externo.`),lg()()()(),Ml(1043,`h4`,41)(1044,`code`,5),mN(1045,`PoMenuItem`),lg()(),Ml(1046,`div`,2)(1047,`p`),mN(1048,`Interface para os itens de menu do componente po-menu.`),lg()(),Ml(1049,`h4`,11),mN(1050,`Propriedades`),lg(),Ml(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),mN(1054,`Nome`),lg(),Ml(1055,`th`,14),mN(1056,`Tipo`),lg(),Ml(1057,`th`,14),mN(1058,`Descrição`),lg()(),Ml(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),mN(1063,` action`),ql(1064,`br`),lg()()(),Ml(1065,`td`,19)(1066,`code`,57),mN(1067,`Function`),lg()(),Ml(1068,`td`,22)(1069,`em`)(1070,`strong`),mN(1071,`(opcional)`),lg()(),Ml(1072,`p`),mN(1073,`Ação personalizada para clique do item de menu.`),lg()()(),Ml(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),mN(1078,` badge`),ql(1079,`br`),lg()()(),Ml(1080,`td`,19)(1081,`code`,58),mN(1082,`PoMenuItemBadge`),lg()(),Ml(1083,`td`,22)(1084,`em`)(1085,`strong`),mN(1086,`(opcional)`),lg()(),Ml(1087,`p`),mN(1088,`Badge do item de menu.`),lg(),Ml(1089,`p`),mN(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),lg(),Ml(1091,`blockquote`)(1092,`p`),mN(1093,`O `),Ml(1094,`code`),mN(1095,`po-badge`),lg(),mN(1096,` só será exibido caso o item do menu não possua `),Ml(1097,`code`),mN(1098,`subItems`),lg(),mN(1099,` e seu valor seja maior ou igual a 0.`),lg()()()(),Ml(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),mN(1104,` icon`),ql(1105,`br`),lg()()(),Ml(1106,`td`,19)(1107,`code`,26),mN(1108,`string `),lg(),Ml(1109,`code`,59),mN(1110,` TemplateRef<void>`),lg()(),Ml(1111,`td`,22)(1112,`em`)(1113,`strong`),mN(1114,`(opcional)`),lg()(),Ml(1115,`p`),mN(1116,`É possível usar qualquer um dos ícones da `),Ml(1117,`a`,60),mN(1118,`Biblioteca de ícones`),lg(),mN(1119,`. conforme exemplo abaixo:`),lg(),Ml(1120,`pre`)(1121,`code`),mN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),lg()(),Ml(1123,`p`),mN(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),lg(),Ml(1125,`pre`)(1126,`code`),mN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),lg()(),Ml(1128,`p`),mN(1129,`Outra opção seria a customização do ícone através do `),Ml(1130,`code`),mN(1131,`TemplateRef`),lg(),mN(1132,`, conforme exemplo abaixo:
component.html:`),lg(),Ml(1133,`pre`)(1134,`code`),mN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),lg()(),Ml(1136,`p`),mN(1137,`component.ts:`),lg(),Ml(1138,`pre`)(1139,`code`),mN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),lg()(),Ml(1141,`blockquote`)(1142,`p`),mN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),lg()()()(),Ml(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),mN(1148,` label`),ql(1149,`br`),lg()()(),Ml(1150,`td`,19)(1151,`code`,26),mN(1152,`string`),lg()(),Ml(1153,`td`,22)(1154,`p`),mN(1155,`Texto do item de menu.`),lg()()(),Ml(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),mN(1160,` link`),ql(1161,`br`),lg()()(),Ml(1162,`td`,19)(1163,`code`,26),mN(1164,`string`),lg()(),Ml(1165,`td`,22)(1166,`em`)(1167,`strong`),mN(1168,`(opcional)`),lg()(),Ml(1169,`p`),mN(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),lg()()(),Ml(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),mN(1175,` shortLabel`),ql(1176,`br`),lg()()(),Ml(1177,`td`,19)(1178,`code`,26),mN(1179,`string`),lg()(),Ml(1180,`td`,22)(1181,`em`)(1182,`strong`),mN(1183,`(opcional)`),lg()(),Ml(1184,`p`),mN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),lg()()(),Ml(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),mN(1190,` subItems`),ql(1191,`br`),lg()()(),Ml(1192,`td`,19)(1193,`code`,61),mN(1194,`Array<PoMenuItem>`),lg()(),Ml(1195,`td`,22)(1196,`em`)(1197,`strong`),mN(1198,`(opcional)`),lg()(),Ml(1199,`p`),mN(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-menu-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-menu-basic-view`)(6,`sample-po-menu-labs-view`)(7,`sample-po-menu-human-resources-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ve,Me,ye,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(je),NL]})}return a})();var _t=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,_e]})}return a})();export{_t as DocPoMenuModule};