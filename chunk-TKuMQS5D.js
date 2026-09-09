import{$i as q,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce$1,Ki as lo,L as I8e,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Pt as d5,Qi as pN,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Wn as Be$1,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ai as _N,dr as I,ei as Yl,fi as ag,gi as bL,gn as rP,ha as ww,jn as ybe,l as ar,la as uo,lr as Gl,mr as JE,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,vn as tU,wt as Xve,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var ke=()=>({label:`PO UI - Angular Framework`,link:`/`});var Le=a=>[a];var xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(r,i){r&1&&Gl(0,`po-menu`,0),r&2&&nw(`p-menus`,DN(2,Le,_N(1,ke)))},dependencies:[d5],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-menu-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return a})();function Re(a,W){if(a&1&&(Tl(0,`div`),Gl(1,`span`),Tl(2,`span`,26),cN(3),ag()()),a&2){let m=W.$implicit;jp(),Xx(pN(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),jp(2),hg(` `,m.label,` `)}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(r){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(r,i){if(r&1&&Yl(d5,7),r&2){let s;lo(s=uo())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`div`,1),Gl(1,`po-menu`,2),Tl(2,`po-page-default`,3)(3,`div`,4),Gl(4,`po-info`,5)(5,`po-button-group`,6),ag(),Gl(6,`po-divider`),Tl(7,`div`,4),Gl(8,`po-info`,7),Tl(9,`form`,null,0)(11,`po-switch`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(i.filter,l)||(i.filter=l),Xy(l)}),ht(`ngModelChange`,function(l){return i.onFilterChange(l)}),ag(),a0(),Tl(12,`po-switch`,9),ww(`ngModelChange`,function(l){return Ky(s),uN(i.searchTreeItems,l)||(i.searchTreeItems=l),Xy(l)}),ag(),a0(),Tl(13,`po-select`,10),ww(`ngModelChange`,function(l){return Ky(s),uN(i.parent,l)||(i.parent=l),Xy(l)}),ag(),a0(),Tl(14,`po-input`,11),ww(`ngModelChange`,function(l){return Ky(s),uN(i.label,l)||(i.label=l),Xy(l)}),ag(),a0(),Tl(15,`po-input`,12),ww(`ngModelChange`,function(l){return Ky(s),uN(i.shortLabel,l)||(i.shortLabel=l),Xy(l)}),ag(),a0(),Tl(16,`po-url`,13),ww(`ngModelChange`,function(l){return Ky(s),uN(i.link,l)||(i.link=l),Xy(l)}),ag(),a0(),Tl(17,`po-select`,14),ww(`ngModelChange`,function(l){return Ky(s),uN(i.badgeColor,l)||(i.badgeColor=l),Xy(l)}),JE(18,Re,4,4,`ng-template`,15),ag(),a0(),Tl(19,`po-number`,16),ww(`ngModelChange`,function(l){return Ky(s),uN(i.badgeValue,l)||(i.badgeValue=l),Xy(l)}),ag(),a0(),Tl(20,`po-select`,17),ww(`ngModelChange`,function(l){return Ky(s),uN(i.icon,l)||(i.icon=l),Xy(l)}),ag(),a0(),Tl(21,`div`,4)(22,`po-button`,18),ht(`p-click`,function(){return i.addMenuItem()}),ag()(),Gl(23,`po-divider`),Tl(24,`po-input`,19),ww(`ngModelChange`,function(l){return Ky(s),uN(i.service,l)||(i.service=l),Xy(l)}),ag(),a0(),Tl(25,`po-input`,20),ww(`ngModelChange`,function(l){return Ky(s),uN(i.menuParams,l)||(i.menuParams=l),Xy(l)}),ht(`p-change-model`,function(l){return i.onChangeParams(l)}),ag(),a0(),Tl(26,`po-input`,21),ww(`ngModelChange`,function(l){return Ky(s),uN(i.logo,l)||(i.logo=l),Xy(l)}),ag(),a0(),Tl(27,`po-input`,22),ww(`ngModelChange`,function(l){return Ky(s),uN(i.shortLogo,l)||(i.shortLogo=l),Xy(l)}),ag(),a0(),Tl(28,`po-input`,23),ww(`ngModelChange`,function(l){return Ky(s),uN(i.logoLink,l)||(i.logoLink=l),Xy(l)}),ag(),a0(),Tl(29,`po-radio-group`,24),ww(`ngModelChange`,function(l){return Ky(s),uN(i.componentsSize,l)||(i.componentsSize=l),Xy(l)}),ag(),a0(),Tl(30,`div`,4)(31,`po-button`,25),ht(`p-click`,function(){return i.restore()}),ag()()()()()()}r&2&&(jp(),nw(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),jp(4),nw(`p-buttons`,i.buttons),jp(3),nw(`p-value`,i.menuItemSelected),jp(3),Ew(`ngModel`,i.filter),l0(),jp(),Ew(`ngModel`,i.searchTreeItems),nw(`p-disabled`,!i.filter),l0(),jp(),Ew(`ngModel`,i.parent),nw(`p-options`,i.parentList),l0(),jp(),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.shortLabel),l0(),jp(),Ew(`ngModel`,i.link),l0(),jp(),Ew(`ngModel`,i.badgeColor),nw(`p-options`,i.badgeColorList),l0(),jp(2),Ew(`ngModel`,i.badgeValue),nw(`p-max`,i.maxBadgeValue),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),l0(),jp(4),Ew(`ngModel`,i.service),l0(),jp(),Ew(`ngModel`,i.menuParams),l0(),jp(),Ew(`ngModel`,i.logo),l0(),jp(),Ew(`ngModel`,i.shortLogo),l0(),jp(),Ew(`ngModel`,i.logoLink),l0(),jp(),Ew(`ngModel`,i.componentsSize),nw(`p-options`,i.componentsSizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xve,Xy$1,iU,ube,L0e,fbe,j4,tU,ybe,d5,S8e],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-wrapper">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-menu-labs`),ag(),Gl(29,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,qe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=f(ob);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(q(i=>i.items))}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Be(a,W){a&1&&(Tl(0,`div`,5)(1,`p`),cN(2,`Welcome,`),ag(),Tl(3,`p`)(4,`b`),cN(5,` John Doe `),ag()()())}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[Ce$1([O])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`po-menu`,1),JE(2,Be,6,0,`div`,2),ag(),Gl(3,`po-toolbar`,3)(4,`po-page-default`,4),ag()),r&2&&(jp(),nw(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),jp(2),nw(`p-show-notification`,!1),jp(),nw(`p-title`,i.menuItemSelected))},dependencies:[d5,rP,S8e,I8e],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu - Human Resources`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-wrapper">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),ag(),Tl(29,`pre`,11),cN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-menu-human-resources`),ag(),Gl(33,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoMenuModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-menu.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoMenuComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),ag(),Tl(15,`p`),cN(16,`O componente po-menu recebe uma lista de objetos do tipo `),Tl(17,`code`),cN(18,`MenuItem`),ag(),cN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),ag(),Tl(20,`h4`),cN(21,`Tokens customizáveis`),ag(),Tl(22,`p`),cN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(24,`blockquote`)(25,`p`),cN(26,`Para maiores informações, acesse o guia `),Tl(27,`a`,6),cN(28,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(29,`.`),ag()(),Tl(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),cN(34,`Propriedade`),ag(),Tl(35,`th`),cN(36,`Descrição`),ag(),Tl(37,`th`),cN(38,`Valor Padrão`),ag()()(),Tl(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),cN(43,`Default Values`),ag()(),Gl(44,`td`)(45,`td`),ag(),Tl(46,`tr`)(47,`td`)(48,`code`),cN(49,`--border-radius`),ag()(),Tl(50,`td`),cN(51,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(52,`td`)(53,`code`),cN(54,`var(--border-radius-md)`),ag()()(),Tl(55,`tr`)(56,`td`)(57,`code`),cN(58,`--border-color`),ag()(),Tl(59,`td`),cN(60,`Cor da borda`),ag(),Tl(61,`td`)(62,`code`),cN(63,`var(--color-neutral-light-20)`),ag()()(),Tl(64,`tr`)(65,`td`)(66,`code`),cN(67,`--background-color`),ag()(),Tl(68,`td`),cN(69,`Cor de background`),ag(),Tl(70,`td`)(71,`code`),cN(72,`Var(----color-neutral-light-05)`),ag()()(),Tl(73,`tr`)(74,`td`)(75,`strong`),cN(76,`Menu Footer`),ag()(),Gl(77,`td`)(78,`td`),ag(),Tl(79,`tr`)(80,`td`)(81,`code`),cN(82,`--color`),ag()(),Tl(83,`td`),cN(84,`Cor principla do menu footer`),ag(),Tl(85,`td`)(86,`code`),cN(87,`var(--color-action-default)`),ag()()(),Tl(88,`tr`)(89,`td`)(90,`code`),cN(91,`--font-size`),ag()(),Tl(92,`td`),cN(93,`Tamanho da fonte`),ag(),Tl(94,`td`)(95,`code`),cN(96,`var(--font-size-default)`),ag()()(),Tl(97,`tr`)(98,`td`)(99,`code`),cN(100,`--line-height`),ag()(),Tl(101,`td`),cN(102,`Tamanho da label`),ag(),Tl(103,`td`)(104,`code`),cN(105,`var(--line-height-md)`),ag()()(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--outline-color-focused`),ag()(),Tl(110,`td`),cN(111,`Cor do outline do estado de focus`),ag(),Tl(112,`td`)(113,`code`),cN(114,`var(--color-action-focus)`),ag()()(),Tl(115,`tr`)(116,`td`)(117,`code`),cN(118,`--font-weight-lvl0`),ag()(),Tl(119,`td`),cN(120,`Peso da fonte`),ag(),Tl(121,`td`)(122,`code`),cN(123,`var(--font-weight-bold)`),ag()()(),Tl(124,`tr`)(125,`td`)(126,`strong`),cN(127,`po-menu-item`),ag()(),Gl(128,`td`)(129,`td`),ag(),Tl(130,`tr`)(131,`td`)(132,`code`),cN(133,`--font-family`),ag()(),Tl(134,`td`),cN(135,`Família tipográfica usada`),ag(),Tl(136,`td`)(137,`code`),cN(138,`var(--font-family-theme)`),ag()()(),Tl(139,`tr`)(140,`td`)(141,`code`),cN(142,`--font-size`),ag()(),Tl(143,`td`),cN(144,`Tamanho da fonte`),ag(),Tl(145,`td`)(146,`code`),cN(147,`var(--font-size-default)`),ag()()(),Tl(148,`tr`)(149,`td`)(150,`code`),cN(151,`--line-height`),ag()(),Tl(152,`td`),cN(153,`Tamanho da label`),ag(),Tl(154,`td`)(155,`code`),cN(156,`var(--line-height-md)`),ag()()(),Tl(157,`tr`)(158,`td`)(159,`code`),cN(160,`--border-radius`),ag()(),Tl(161,`td`),cN(162,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(163,`td`)(164,`code`),cN(165,`var(--border-radius-md)`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--color`),ag()(),Tl(170,`td`),cN(171,`Cor principal do item`),ag(),Tl(172,`td`)(173,`code`),cN(174,`var(--color-action-default)`),ag()()(),Tl(175,`tr`)(176,`td`)(177,`code`),cN(178,`--background-color`),ag()(),Tl(179,`td`),cN(180,`Cor do background`),ag(),Tl(181,`td`)(182,`code`),cN(183,`transparent`),ag()()(),Tl(184,`tr`)(185,`td`)(186,`strong`),cN(187,`Hover`),ag()(),Gl(188,`td`)(189,`td`),ag(),Tl(190,`tr`)(191,`td`)(192,`code`),cN(193,`--color-hover`),ag()(),Tl(194,`td`),cN(195,`Cor principal no estado hover`),ag(),Tl(196,`td`)(197,`code`),cN(198,`var(--color-brand-01-darkest)`),ag()()(),Tl(199,`tr`)(200,`td`)(201,`code`),cN(202,`--background-color-hover`),ag()(),Tl(203,`td`),cN(204,`Cor de background no estado hover`),ag(),Tl(205,`td`)(206,`code`),cN(207,`var(--color-brand-01-lighter)`),ag()()(),Tl(208,`tr`)(209,`td`)(210,`strong`),cN(211,`Focused`),ag()(),Gl(212,`td`)(213,`td`),ag(),Tl(214,`tr`)(215,`td`)(216,`code`),cN(217,`--outline-color-focused`),ag()(),Tl(218,`td`),cN(219,`Cor do outline do estado de focus`),ag(),Tl(220,`td`)(221,`code`),cN(222,`var(--color-action-focus)`),ag()()(),Tl(223,`tr`)(224,`td`)(225,`strong`),cN(226,`Pressed`),ag()(),Gl(227,`td`)(228,`td`),ag(),Tl(229,`tr`)(230,`td`)(231,`code`),cN(232,`--background-color-pressed`),ag(),cN(233,` \xA0`),ag(),Tl(234,`td`),cN(235,`Cor de background no estado de pressionado\xA0`),ag(),Tl(236,`td`)(237,`code`),cN(238,`var(--color-brand-01-light)`),ag()()(),Tl(239,`tr`)(240,`td`)(241,`strong`),cN(242,`Actived`),ag()(),Gl(243,`td`)(244,`td`),ag(),Tl(245,`tr`)(246,`td`)(247,`code`),cN(248,`--background-color-actived`),ag()(),Tl(249,`td`),cN(250,`Cor de background no estado actived`),ag(),Tl(251,`td`)(252,`code`),cN(253,`var(--color-brand-01-darkest)`),ag()()(),Tl(254,`tr`)(255,`td`)(256,`code`),cN(257,`--color-actived`),ag()(),Tl(258,`td`),cN(259,`Cor principal no estado actived`),ag(),Tl(260,`td`)(261,`code`),cN(262,`var(--color-brand-01-lighter)`),ag()()(),Tl(263,`tr`)(264,`td`)(265,`strong`),cN(266,`Font`),ag()(),Gl(267,`td`)(268,`td`),ag(),Tl(269,`tr`)(270,`td`)(271,`code`),cN(272,`--font-weight-lvl0`),ag()(),Tl(273,`td`),cN(274,`Peso da fonte bold`),ag(),Tl(275,`td`)(276,`code`),cN(277,`var(--font-weight-bold)`),ag()()(),Tl(278,`tr`)(279,`td`)(280,`code`),cN(281,`--font-weight-lvl1`),ag()(),Tl(282,`td`),cN(283,`Peso da fonte`),ag(),Tl(284,`td`)(285,`code`),cN(286,`var(--font-weight-normal)`),ag()()()()(),Tl(287,`p`),Gl(288,`br`),cN(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),ag(),Tl(290,`p`),cN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),ag(),Tl(292,`p`),cN(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),ag(),Tl(294,`p`),cN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Tl(296,`a`,7)(297,`strong`),cN(298,`p-menu-header-template`),ag()(),cN(299,`.`),ag(),Tl(300,`p`),cN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Tl(302,`code`),cN(303,`PoMenuFilter`),ag(),cN(304,`.`),ag(),Tl(305,`p`),cN(306,`Para o menu funcionar corretamente é necessário importar o `),Tl(307,`code`),cN(308,`RouterModule`),ag(),cN(309,` e `),Tl(310,`code`),cN(311,`Routes`),ag(),cN(312,` do módulo principal de sua aplicação:`),ag(),Tl(313,`pre`)(314,`code`),cN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),ag()(),Tl(316,`p`),cN(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),ag(),Tl(318,`pre`)(319,`code`),cN(320,`import { NgModule } from '@angular/core';

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
`),ag()()(),Tl(321,`div`,8)(322,`h4`,9),cN(323,`Seletor`),ag(),Tl(324,`pre`,10),cN(325,`<po-menu
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
`),ag()(),Tl(326,`h4`,11),cN(327,`Propriedades`),ag(),Tl(328,`table`,12)(329,`tr`,13)(330,`th`,14),cN(331,`Nome`),ag(),Tl(332,`th`,14),cN(333,`Tipo`),ag(),Tl(334,`th`,14),cN(335,`Padrão`),ag(),Tl(336,`th`,14),cN(337,`Descrição`),ag()(),Tl(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),cN(342,` p-automatic-toggle`),Gl(343,`br`),ag()()(),Tl(344,`td`,19)(345,`code`,20),cN(346,`boolean`),ag()(),Tl(347,`td`,21)(348,`p`)(349,`code`),cN(350,`false`),ag()()(),Tl(351,`td`,22)(352,`em`)(353,`strong`),cN(354,`(opcional)`),ag()(),Tl(355,`p`),cN(356,`Expande e Colapsa (retrai) o menu automaticamente.`),ag()()(),Tl(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),cN(361,` p-collapsed`),Gl(362,`br`),ag()()(),Tl(363,`td`,19)(364,`code`,20),cN(365,`boolean`),ag()(),Tl(366,`td`,21)(367,`p`)(368,`code`),cN(369,`false`),ag()()(),Tl(370,`td`,22)(371,`em`)(372,`strong`),cN(373,`(opcional)`),ag()(),Tl(374,`p`),cN(375,`Colapsa (retrai) o menu e caso receba o valor `),Tl(376,`code`),cN(377,`false`),ag(),cN(378,` expande o menu.`),ag(),Tl(379,`blockquote`)(380,`p`),cN(381,`Utilize esta propriedade para iniciar o menu colapsado.`),ag()(),Tl(382,`blockquote`)(383,`p`),cN(384,`Ao utilizar os métodos `),Tl(385,`a`,23)(386,`code`),cN(387,`colapse`),ag()(),cN(388,`, `),Tl(389,`a`,24)(390,`code`),cN(391,`expand`),ag()(),cN(392,` e
`),Tl(393,`a`,25)(394,`code`),cN(395,`toggle`),ag()(),cN(396,` o valor desta propriedade não é alterado.`),ag()(),Tl(397,`p`)(398,`strong`),cN(399,`Importante:`),ag()(),Tl(400,`blockquote`)(401,`p`),cN(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Tl(403,`code`),cN(404,`icon`),ag(),cN(405,` e `),Tl(406,`code`),cN(407,`shortLabel`),ag(),cN(408,`.`),ag()()()(),Tl(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),cN(413,` p-components-size`),Gl(414,`br`),ag()()(),Tl(415,`td`,19)(416,`code`,26),cN(417,`string`),ag()(),Tl(418,`td`,21)(419,`p`)(420,`code`),cN(421,`medium`),ag()()(),Tl(422,`td`,22)(423,`em`)(424,`strong`),cN(425,`(opcional)`),ag()(),Tl(426,`p`),cN(427,`Define o tamanho dos componentes de formulário no menu:`),ag(),Tl(428,`ul`)(429,`li`)(430,`code`),cN(431,`small`),ag(),cN(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(433,`li`)(434,`code`),cN(435,`medium`),ag(),cN(436,`: aplica a medida medium de cada componente.`),ag()(),Tl(437,`blockquote`)(438,`p`),cN(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(440,`code`),cN(441,`medium`),ag(),cN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(443,`a`,27),cN(444,`po-theme`),ag(),cN(445,`.`),ag()()()(),Tl(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),cN(450,` p-filter`),Gl(451,`br`),ag()()(),Tl(452,`td`,19)(453,`code`,20),cN(454,`boolean`),ag()(),Tl(455,`td`,21)(456,`p`)(457,`code`),cN(458,`false`),ag()()(),Tl(459,`td`,22)(460,`em`)(461,`strong`),cN(462,`(opcional)`),ag()(),Tl(463,`p`),cN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Tl(465,`code`),cN(466,`p-service`),ag(),cN(467,`.`),ag(),Tl(468,`blockquote`)(469,`p`),cN(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),ag()()()(),Tl(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),cN(475,` p-logo`),Gl(476,`br`),ag()()(),Tl(477,`td`,19)(478,`code`,26),cN(479,`string`),ag()(),Tl(480,`td`,21),cN(481,`-`),ag(),Tl(482,`td`,22)(483,`em`)(484,`strong`),cN(485,`(opcional)`),ag()(),Tl(486,`p`),cN(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),ag(),Tl(488,`blockquote`)(489,`p`)(490,`strong`),cN(491,`Importante:`),ag()()(),Tl(492,`ul`)(493,`li`),cN(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),ag(),Tl(495,`li`),cN(496,`Como boa prática, indica-se utilizar imagens com até `),Tl(497,`code`),cN(498,`24px`),ag(),cN(499,` de altura e `),Tl(500,`code`),cN(501,`224px`),ag(),cN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ag()()()(),Tl(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),cN(507,` p-logo-alt`),Gl(508,`br`),ag()()(),Tl(509,`td`,19)(510,`code`,26),cN(511,`string`),ag()(),Tl(512,`td`,21)(513,`p`)(514,`code`),cN(515,`Logomarca início`),ag()()(),Tl(516,`td`,22)(517,`em`)(518,`strong`),cN(519,`(opcional)`),ag()(),Tl(520,`p`),cN(521,`Define o texto alternativo para a logomarca.`),ag(),Tl(522,`blockquote`)(523,`p`)(524,`strong`),cN(525,`Importante`),ag(),cN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ag()()()(),Tl(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),cN(531,` p-logo-link`),Gl(532,`br`),ag()()(),Tl(533,`td`,19)(534,`code`,20),cN(535,`boolean `),ag(),Tl(536,`code`,26),cN(537,` string`),ag()(),Tl(538,`td`,21)(539,`p`)(540,`code`),cN(541,`true`),ag()()(),Tl(542,`td`,22)(543,`em`)(544,`strong`),cN(545,`(opcional)`),ag()(),Tl(546,`p`),cN(547,`Define o link para a rota ao clicar no logo do menu.`),ag(),Tl(548,`ul`)(549,`li`),cN(550,`Se o valor for uma string, define a rota para o link informado.`),ag(),Tl(551,`li`),cN(552,`Se for `),Tl(553,`code`),cN(554,`false`),ag(),cN(555,`, o logo não terá link associado.`),ag(),Tl(556,`li`),cN(557,`Se for `),Tl(558,`code`),cN(559,`true`),ag(),cN(560,`, o logo terá a rota padrão `),Tl(561,`code`),cN(562,`./`),ag(),cN(563,`.`),ag()()()(),Tl(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),cN(568,` p-menus`),Gl(569,`br`),ag()()(),Tl(570,`td`,19)(571,`code`,28),cN(572,`PoMenuItem[]`),ag()(),Tl(573,`td`,21),cN(574,`-`),ag(),Tl(575,`td`,22)(576,`p`),cN(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ag()()(),Tl(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),cN(582,` p-params`),Gl(583,`br`),ag()()(),Tl(584,`td`,19)(585,`code`,29),cN(586,`any`),ag()(),Tl(587,`td`,21),cN(588,`-`),ag(),Tl(589,`td`,22)(590,`em`)(591,`strong`),cN(592,`(opcional)`),ag()(),Tl(593,`p`),cN(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),ag(),Tl(595,`p`),cN(596,`Caso utilizado um serviço customizado, implementando a interface `),Tl(597,`code`),cN(598,`PoMenuFilter`),ag(),cN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Tl(600,`code`),cN(601,`getFilteredData`),ag(),cN(602,`.`),ag(),Tl(603,`p`),cN(604,`Quando utilizada uma URL de serviço, será realizado um `),Tl(605,`em`),cN(606,`GET`),ag(),cN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Tl(608,`code`),cN(609,`search`),ag(),cN(610,`, veja exemplo:`),ag(),Tl(611,`pre`)(612,`code`),cN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),ag()()()(),Tl(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),cN(618,` p-search-tree-items`),Gl(619,`br`),ag()()(),Tl(620,`td`,19)(621,`code`,20),cN(622,`boolean`),ag()(),Tl(623,`td`,21)(624,`p`)(625,`code`),cN(626,`false`),ag()()(),Tl(627,`td`,22)(628,`em`)(629,`strong`),cN(630,`(opcional)`),ag()(),Tl(631,`p`),cN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),ag(),Tl(633,`blockquote`)(634,`p`),cN(635,`É necessário que a propriedade `),Tl(636,`code`),cN(637,`p-filter`),ag(),cN(638,` esteja habilitada.`),ag()()()(),Tl(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),cN(643,` p-service`),Gl(644,`br`),ag()()(),Tl(645,`td`,19)(646,`code`,26),cN(647,`string `),ag(),Tl(648,`code`,30),cN(649,` PoMenuFilter`),ag()(),Tl(650,`td`,21),cN(651,`-`),ag(),Tl(652,`td`,22)(653,`em`)(654,`strong`),cN(655,`(opcional)`),ag()(),Tl(656,`p`),cN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Tl(658,`code`),cN(659,`PoMenuFilter`),ag(),cN(660,`.`),ag(),Tl(661,`p`),cN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Tl(663,`a`,31),cN(664,`Guia de implementação de APIs`),ag(),cN(665,` do PO UI.`),ag(),Tl(666,`p`),cN(667,`Quando utilizada uma URL de serviço, será realizado um `),Tl(668,`em`),cN(669,`GET`),ag(),cN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Tl(671,`code`),cN(672,`search`),ag(),cN(673,`, veja exemplo:`),ag(),Tl(674,`blockquote`)(675,`p`),cN(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Tl(677,`code`),cN(678,`tot`),ag(),cN(679,`.`),ag()(),Tl(680,`pre`)(681,`code`),cN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),ag()(),Tl(683,`blockquote`)(684,`p`),cN(685,`É necessário que propriedade `),Tl(686,`code`),cN(687,`p-filter`),ag(),cN(688,` esteja habilitada.`),ag()()()(),Tl(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),cN(693,` p-short-logo`),Gl(694,`br`),ag()()(),Tl(695,`td`,19)(696,`code`,26),cN(697,`string`),ag()(),Tl(698,`td`,21),cN(699,`-`),ag(),Tl(700,`td`,22)(701,`em`)(702,`strong`),cN(703,`(opcional)`),ag()(),Tl(704,`p`),cN(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),ag(),Tl(706,`blockquote`)(707,`p`)(708,`strong`),cN(709,`Importante:`),ag()()(),Tl(710,`ul`)(711,`li`),cN(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Tl(713,`code`),cN(714,`p-logo`),ag(),cN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),ag(),Tl(716,`li`),cN(717,`Como boa prática, indica-se utilizar imagens com até `),Tl(718,`code`),cN(719,`48px`),ag(),cN(720,` de altura e `),Tl(721,`code`),cN(722,`48px`),ag(),cN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ag(),Tl(724,`li`),cN(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Tl(726,`code`),cN(727,`p-logo`),ag(),cN(728,`.`),ag()()()(),Tl(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),cN(733,` (p-toggle)`),Gl(734,`br`),ag()()(),Tl(735,`td`,19)(736,`code`,34),cN(737,`EventEmitter`),ag()(),Tl(738,`td`,21),cN(739,`-`),ag(),Tl(740,`td`,22)(741,`em`)(742,`strong`),cN(743,`(opcional)`),ag()(),Tl(744,`p`),cN(745,`Evento emitido toda vez que o estado do menu muda, enviando `),Tl(746,`code`),cN(747,`true`),ag(),cN(748,` quando expandido e `),Tl(749,`code`),cN(750,`false`),ag(),cN(751,` quando colapsado.`),ag(),Tl(752,`pre`)(753,`code`,35),cN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),ag()()()()(),Tl(755,`h3`,11),cN(756,`Métodos`),ag(),Tl(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),cN(763,` collapse `),ag()()()()(),Tl(764,`tr`,22)(765,`td`,22)(766,`p`),Gl(767,`a`,38),ag(),Tl(768,`p`),cN(769,`Método para colapsar (retrair) o menu.`),ag()()()(),Gl(770,`br`),Tl(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),cN(777,` expand `),ag()()()()(),Tl(778,`tr`,22)(779,`td`,22)(780,`p`),Gl(781,`a`,39),ag(),Tl(782,`p`),cN(783,`Método para expandir (aumentar) o menu.`),ag()()()(),Gl(784,`br`),Tl(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),cN(791,` toggle `),ag()()()()(),Tl(792,`tr`,22)(793,`td`,22)(794,`p`),Gl(795,`a`,40),cN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),ag(),Tl(797,`blockquote`)(798,`p`),cN(799,`Os métodos apenas vão colapsar/expandir o menu se:`),ag()(),Tl(800,`ul`)(801,`li`),cN(802,`Todos os itens de menu tiverem valor nas propriedades `),Tl(803,`code`),cN(804,`icon`),ag(),cN(805,` e `),Tl(806,`code`),cN(807,`shortLabel`),ag(),cN(808,`.`),ag()()()()(),Gl(809,`br`),Tl(810,`h3`),cN(811,`Interfaces`),ag(),Tl(812,`h4`,41)(813,`code`,5),cN(814,`PoMenuFilter`),ag()(),Tl(815,`div`,2)(816,`p`),cN(817,`Interface do serviço utilizado no componente `),Tl(818,`code`),cN(819,`po-menu`),ag(),cN(820,`.`),ag()(),Tl(821,`h4`,11),cN(822,`Métodos`),ag(),Tl(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),cN(829,` getFilteredData `),ag()()()()(),Tl(830,`tr`,22)(831,`td`,22)(832,`p`),cN(833,`Método responsável por retornar um `),Tl(834,`em`),cN(835,`Observable`),ag(),cN(836,` que retorne uma lista de objetos que seguem a interface `),Tl(837,`code`),cN(838,`PoMenuItemFiltered`),ag(),cN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Tl(840,`code`),cN(841,`p-params`),ag(),cN(842,`.`),ag()()()(),Tl(843,`h5`)(844,`b`),cN(845,`Parâmetros`),ag()(),Tl(846,`table`,12)(847,`tr`,13)(848,`th`,14),cN(849,`Nome`),ag(),Tl(850,`th`,14),cN(851,`Tipo`),ag(),Tl(852,`th`,14),cN(853,`Descrição`),ag()(),Tl(854,`tr`,15)(855,`td`,16),cN(856,` search`),ag(),Tl(857,`td`,19)(858,`code`,42),cN(859,` string `),ag()(),Tl(860,`td`,22)(861,`p`),cN(862,`Valor informado no campo de busca dos itens de menus.`),ag()()(),Tl(863,`tr`,15)(864,`td`,16),cN(865,` params`),ag(),Tl(866,`td`,19)(867,`code`,42),cN(868,` any `),ag()(),Tl(869,`td`,22)(870,`p`),cN(871,`Valor informado através da propriedade `),Tl(872,`code`),cN(873,`p-params`),ag(),cN(874,`.`),ag()()()(),Gl(875,`br`),Tl(876,`h4`,41)(877,`code`,5),cN(878,`PoMenuItemBadge`),ag()(),Tl(879,`div`,2)(880,`p`),cN(881,`Interface do `),Tl(882,`em`),cN(883,`badge`),ag(),cN(884,` utilizado no `),Tl(885,`code`),cN(886,`po-menu`),ag(),cN(887,`.`),ag()(),Tl(888,`h4`,11),cN(889,`Propriedades`),ag(),Tl(890,`table`,12)(891,`tr`,13)(892,`th`,14),cN(893,`Nome`),ag(),Tl(894,`th`,14),cN(895,`Tipo`),ag(),Tl(896,`th`,14),cN(897,`Descrição`),ag()(),Tl(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),cN(902,` color`),Gl(903,`br`),ag()()(),Tl(904,`td`,19)(905,`code`,26),cN(906,`string`),ag()(),Tl(907,`td`,22)(908,`em`)(909,`strong`),cN(910,`(opcional)`),ag()(),Tl(911,`p`),cN(912,`Define a cor do `),Tl(913,`em`),cN(914,`badge`),ag(),cN(915,` e aceita os valores:`),ag(),Tl(916,`p`),Gl(917,`span`,43),Tl(918,`code`),cN(919,`color-01`),ag()(),Tl(920,`p`),Gl(921,`span`,44),Tl(922,`code`),cN(923,`color-02`),ag()(),Tl(924,`p`),Gl(925,`span`,45),Tl(926,`code`),cN(927,`color-03`),ag()(),Tl(928,`p`),Gl(929,`span`,46),Tl(930,`code`),cN(931,`color-04`),ag()(),Tl(932,`p`),Gl(933,`span`,47),Tl(934,`code`),cN(935,`color-05`),ag()(),Tl(936,`p`),Gl(937,`span`,48),Tl(938,`code`),cN(939,`color-06`),ag()(),Tl(940,`p`),Gl(941,`span`,49),Tl(942,`code`),cN(943,`color-07`),ag()(),Tl(944,`p`),Gl(945,`span`,50),Tl(946,`code`),cN(947,`color-08`),ag()(),Tl(948,`p`),Gl(949,`span`,51),Tl(950,`code`),cN(951,`color-09`),ag()(),Tl(952,`p`),Gl(953,`span`,52),Tl(954,`code`),cN(955,`color-10`),ag()(),Tl(956,`p`),Gl(957,`span`,53),Tl(958,`code`),cN(959,`color-11`),ag()(),Tl(960,`p`),Gl(961,`span`,54),Tl(962,`code`),cN(963,`color-12`),ag()()()(),Tl(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),cN(968,` value`),Gl(969,`br`),ag()()(),Tl(970,`td`,19)(971,`code`,55),cN(972,`number`),ag()(),Tl(973,`td`,22)(974,`p`),cN(975,`Número exibido no `),Tl(976,`em`),cN(977,`badge`),ag(),cN(978,`, caso o mesmo seja maior que `),Tl(979,`strong`),cN(980,`9`),ag(),cN(981,` o mesmo exibe `),Tl(982,`strong`),cN(983,`9+`),ag(),cN(984,`.`),ag()()()(),Tl(985,`h4`,41)(986,`code`,5),cN(987,`PoMenuItemFiltered`),ag()(),Tl(988,`div`,2)(989,`p`),cN(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Tl(991,`code`),cN(992,`po-menu`),ag(),cN(993,`.`),ag()(),Tl(994,`h4`,11),cN(995,`Propriedades`),ag(),Tl(996,`table`,12)(997,`tr`,13)(998,`th`,14),cN(999,`Nome`),ag(),Tl(1e3,`th`,14),cN(1001,`Tipo`),ag(),Tl(1002,`th`,14),cN(1003,`Descrição`),ag()(),Tl(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),cN(1008,` action`),Gl(1009,`br`),ag()()(),Tl(1010,`td`,19)(1011,`code`,56),cN(1012,`() => void`),ag()(),Tl(1013,`td`,22)(1014,`p`),cN(1015,`Ação a ser executada quando o item de menu for clicado.`),ag()()(),Tl(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),cN(1020,` label`),Gl(1021,`br`),ag()()(),Tl(1022,`td`,19)(1023,`code`,26),cN(1024,`string`),ag()(),Tl(1025,`td`,22)(1026,`p`),cN(1027,`Texto do item de menu.`),ag()()(),Tl(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),cN(1032,` link`),Gl(1033,`br`),ag()()(),Tl(1034,`td`,19)(1035,`code`,26),cN(1036,`string`),ag()(),Tl(1037,`td`,22)(1038,`p`),cN(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Tl(1040,`em`),cN(1041,`link`),ag(),cN(1042,` interno ou externo.`),ag()()()(),Tl(1043,`h4`,41)(1044,`code`,5),cN(1045,`PoMenuItem`),ag()(),Tl(1046,`div`,2)(1047,`p`),cN(1048,`Interface para os itens de menu do componente po-menu.`),ag()(),Tl(1049,`h4`,11),cN(1050,`Propriedades`),ag(),Tl(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),cN(1054,`Nome`),ag(),Tl(1055,`th`,14),cN(1056,`Tipo`),ag(),Tl(1057,`th`,14),cN(1058,`Descrição`),ag()(),Tl(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),cN(1063,` action`),Gl(1064,`br`),ag()()(),Tl(1065,`td`,19)(1066,`code`,57),cN(1067,`Function`),ag()(),Tl(1068,`td`,22)(1069,`em`)(1070,`strong`),cN(1071,`(opcional)`),ag()(),Tl(1072,`p`),cN(1073,`Ação personalizada para clique do item de menu.`),ag()()(),Tl(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),cN(1078,` badge`),Gl(1079,`br`),ag()()(),Tl(1080,`td`,19)(1081,`code`,58),cN(1082,`PoMenuItemBadge`),ag()(),Tl(1083,`td`,22)(1084,`em`)(1085,`strong`),cN(1086,`(opcional)`),ag()(),Tl(1087,`p`),cN(1088,`Badge do item de menu.`),ag(),Tl(1089,`p`),cN(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),ag(),Tl(1091,`blockquote`)(1092,`p`),cN(1093,`O `),Tl(1094,`code`),cN(1095,`po-badge`),ag(),cN(1096,` só será exibido caso o item do menu não possua `),Tl(1097,`code`),cN(1098,`subItems`),ag(),cN(1099,` e seu valor seja maior ou igual a 0.`),ag()()()(),Tl(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),cN(1104,` icon`),Gl(1105,`br`),ag()()(),Tl(1106,`td`,19)(1107,`code`,26),cN(1108,`string `),ag(),Tl(1109,`code`,59),cN(1110,` TemplateRef<void>`),ag()(),Tl(1111,`td`,22)(1112,`em`)(1113,`strong`),cN(1114,`(opcional)`),ag()(),Tl(1115,`p`),cN(1116,`É possível usar qualquer um dos ícones da `),Tl(1117,`a`,60),cN(1118,`Biblioteca de ícones`),ag(),cN(1119,`. conforme exemplo abaixo:`),ag(),Tl(1120,`pre`)(1121,`code`),cN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),ag()(),Tl(1123,`p`),cN(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ag(),Tl(1125,`pre`)(1126,`code`),cN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),ag()(),Tl(1128,`p`),cN(1129,`Outra opção seria a customização do ícone através do `),Tl(1130,`code`),cN(1131,`TemplateRef`),ag(),cN(1132,`, conforme exemplo abaixo:
component.html:`),ag(),Tl(1133,`pre`)(1134,`code`),cN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),ag()(),Tl(1136,`p`),cN(1137,`component.ts:`),ag(),Tl(1138,`pre`)(1139,`code`),cN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),ag()(),Tl(1141,`blockquote`)(1142,`p`),cN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),ag()()()(),Tl(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),cN(1148,` label`),Gl(1149,`br`),ag()()(),Tl(1150,`td`,19)(1151,`code`,26),cN(1152,`string`),ag()(),Tl(1153,`td`,22)(1154,`p`),cN(1155,`Texto do item de menu.`),ag()()(),Tl(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),cN(1160,` link`),Gl(1161,`br`),ag()()(),Tl(1162,`td`,19)(1163,`code`,26),cN(1164,`string`),ag()(),Tl(1165,`td`,22)(1166,`em`)(1167,`strong`),cN(1168,`(opcional)`),ag()(),Tl(1169,`p`),cN(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),ag()()(),Tl(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),cN(1175,` shortLabel`),Gl(1176,`br`),ag()()(),Tl(1177,`td`,19)(1178,`code`,26),cN(1179,`string`),ag()(),Tl(1180,`td`,22)(1181,`em`)(1182,`strong`),cN(1183,`(opcional)`),ag()(),Tl(1184,`p`),cN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),ag()()(),Tl(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),cN(1190,` subItems`),Gl(1191,`br`),ag()()(),Tl(1192,`td`,19)(1193,`code`,61),cN(1194,`Array<PoMenuItem>`),ag()(),Tl(1195,`td`,22)(1196,`em`)(1197,`strong`),cN(1198,`(opcional)`),ag()(),Tl(1199,`p`),cN(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-menu-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-menu-basic-view`)(6,`sample-po-menu-labs-view`)(7,`sample-po-menu-human-resources-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ve,Me,ye,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(je),bL]})}return a})();var _t=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,_e]})}return a})();export{_t as DocPoMenuModule};