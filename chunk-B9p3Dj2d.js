import{$i as pt,Ai as ho,C as C4,Ca as zO,Cr as Kc,Er as LP,Gi as mg,Gt as eoe,Hr as RN,Ji as p0,Jr as TE,Kt as fP,Mi as hw,Mt as b4,Oi as he,Ri as kL,Rt as cae,Si as fo,Sn as u4,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Zn as C9,Zr as Ue,_a as wn,ca as ue,cn as noe,ea as q,fn as p5,fr as Hp,ga as wN,gi as e_,gn as soe,i as _a,ia as sE,in as mae,ir as E,jn as wte,li as be,mn as rb,mr as I,nn as kze,nr as DN,oi as aN,pa as vN,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,vt as Uee,yi as f,yr as Jv,zr as Qn}from"./main-M64QO35D.js";var ke=()=>({label:`PO UI - Angular Framework`,link:`/`});var Le=a=>[a];var xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(r,i){r&1&&Kc(0,`po-menu`,0),r&2&&cE(`p-menus`,AN(2,Le,RN(1,ke)))},dependencies:[p5],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-menu-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,xe],encapsulation:2,changeDetection:1})}return a})();function Re(a,W){if(a&1&&(Ac(0,`div`),Kc(1,`span`),Ac(2,`span`,26),vN(3),ug()()),a&2){let m=W.$implicit;Hp(),aN(wN(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),Hp(2),mg(` `,m.label,` `)}}var Ce=(()=>{class a{changeDetector=f(Ue);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(r){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(r,i){if(r&1&&Xc(p5,7),r&2){let s;fo(s=ho())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`div`,1),Kc(1,`po-menu`,2),Ac(2,`po-page-default`,3)(3,`div`,4),Kc(4,`po-info`,5)(5,`po-button-group`,6),ug(),Kc(6,`po-divider`),Ac(7,`div`,4),Kc(8,`po-info`,7),Ac(9,`form`,null,0)(11,`po-switch`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(i.filter,l)||(i.filter=l),e_(l)}),pt(`ngModelChange`,function(l){return i.onFilterChange(l)}),ug(),p0(),Ac(12,`po-switch`,9),RE(`ngModelChange`,function(l){return Jv(s),DN(i.searchTreeItems,l)||(i.searchTreeItems=l),e_(l)}),ug(),p0(),Ac(13,`po-select`,10),RE(`ngModelChange`,function(l){return Jv(s),DN(i.parent,l)||(i.parent=l),e_(l)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(l){return Jv(s),DN(i.label,l)||(i.label=l),e_(l)}),ug(),p0(),Ac(15,`po-input`,12),RE(`ngModelChange`,function(l){return Jv(s),DN(i.shortLabel,l)||(i.shortLabel=l),e_(l)}),ug(),p0(),Ac(16,`po-url`,13),RE(`ngModelChange`,function(l){return Jv(s),DN(i.link,l)||(i.link=l),e_(l)}),ug(),p0(),Ac(17,`po-select`,14),RE(`ngModelChange`,function(l){return Jv(s),DN(i.badgeColor,l)||(i.badgeColor=l),e_(l)}),sE(18,Re,4,4,`ng-template`,15),ug(),p0(),Ac(19,`po-number`,16),RE(`ngModelChange`,function(l){return Jv(s),DN(i.badgeValue,l)||(i.badgeValue=l),e_(l)}),ug(),p0(),Ac(20,`po-select`,17),RE(`ngModelChange`,function(l){return Jv(s),DN(i.icon,l)||(i.icon=l),e_(l)}),ug(),p0(),Ac(21,`div`,4)(22,`po-button`,18),pt(`p-click`,function(){return i.addMenuItem()}),ug()(),Kc(23,`po-divider`),Ac(24,`po-input`,19),RE(`ngModelChange`,function(l){return Jv(s),DN(i.service,l)||(i.service=l),e_(l)}),ug(),p0(),Ac(25,`po-input`,20),RE(`ngModelChange`,function(l){return Jv(s),DN(i.menuParams,l)||(i.menuParams=l),e_(l)}),pt(`p-change-model`,function(l){return i.onChangeParams(l)}),ug(),p0(),Ac(26,`po-input`,21),RE(`ngModelChange`,function(l){return Jv(s),DN(i.logo,l)||(i.logo=l),e_(l)}),ug(),p0(),Ac(27,`po-input`,22),RE(`ngModelChange`,function(l){return Jv(s),DN(i.shortLogo,l)||(i.shortLogo=l),e_(l)}),ug(),p0(),Ac(28,`po-input`,23),RE(`ngModelChange`,function(l){return Jv(s),DN(i.logoLink,l)||(i.logoLink=l),e_(l)}),ug(),p0(),Ac(29,`po-radio-group`,24),RE(`ngModelChange`,function(l){return Jv(s),DN(i.componentsSize,l)||(i.componentsSize=l),e_(l)}),ug(),p0(),Ac(30,`div`,4)(31,`po-button`,25),pt(`p-click`,function(){return i.restore()}),ug()()()()()()}r&2&&(Hp(),cE(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),Hp(4),cE(`p-buttons`,i.buttons),Hp(3),cE(`p-value`,i.menuItemSelected),Hp(3),TE(`ngModel`,i.filter),m0(),Hp(),TE(`ngModel`,i.searchTreeItems),cE(`p-disabled`,!i.filter),m0(),Hp(),TE(`ngModel`,i.parent),cE(`p-options`,i.parentList),m0(),Hp(),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.shortLabel),m0(),Hp(),TE(`ngModel`,i.link),m0(),Hp(),TE(`ngModel`,i.badgeColor),cE(`p-options`,i.badgeColorList),m0(),Hp(2),TE(`ngModel`,i.badgeValue),cE(`p-max`,i.maxBadgeValue),m0(),Hp(),TE(`ngModel`,i.icon),cE(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),m0(),Hp(4),TE(`ngModel`,i.service),m0(),Hp(),TE(`ngModel`,i.menuParams),m0(),Hp(),TE(`ngModel`,i.logo),m0(),Hp(),TE(`ngModel`,i.shortLogo),m0(),Hp(),TE(`ngModel`,i.logoLink),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-options`,i.componentsSizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,oi,Uee,rb,C4,eoe,wte,noe,u4,b4,soe,p5,Cze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-wrapper">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-menu-labs`),ug(),Kc(29,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,qe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Ce],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=f(hw);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(q(i=>i.items))}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Be(a,W){a&1&&(Ac(0,`div`,5)(1,`p`),vN(2,`Welcome,`),ug(),Ac(3,`p`)(4,`b`),vN(5,` John Doe `),ug()()())}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[be([O])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`po-menu`,1),sE(2,Be,6,0,`div`,2),ug(),Kc(3,`po-toolbar`,3)(4,`po-page-default`,4),ug()),r&2&&(Hp(),cE(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),Hp(2),cE(`p-show-notification`,!1),Hp(),cE(`p-title`,i.menuItemSelected))},dependencies:[p5,fP,Cze,kze],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu - Human Resources`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-wrapper">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),ug(),Ac(29,`pre`,11),vN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-menu-human-resources`),ug(),Kc(33,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoMenuModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-menu.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoMenuComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),ug(),Ac(15,`p`),vN(16,`O componente po-menu recebe uma lista de objetos do tipo `),Ac(17,`code`),vN(18,`MenuItem`),ug(),vN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),ug(),Ac(20,`h4`),vN(21,`Tokens customizáveis`),ug(),Ac(22,`p`),vN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(24,`blockquote`)(25,`p`),vN(26,`Para maiores informações, acesse o guia `),Ac(27,`a`,6),vN(28,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(29,`.`),ug()(),Ac(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),vN(34,`Propriedade`),ug(),Ac(35,`th`),vN(36,`Descrição`),ug(),Ac(37,`th`),vN(38,`Valor Padrão`),ug()()(),Ac(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),vN(43,`Default Values`),ug()(),Kc(44,`td`)(45,`td`),ug(),Ac(46,`tr`)(47,`td`)(48,`code`),vN(49,`--border-radius`),ug()(),Ac(50,`td`),vN(51,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(52,`td`)(53,`code`),vN(54,`var(--border-radius-md)`),ug()()(),Ac(55,`tr`)(56,`td`)(57,`code`),vN(58,`--border-color`),ug()(),Ac(59,`td`),vN(60,`Cor da borda`),ug(),Ac(61,`td`)(62,`code`),vN(63,`var(--color-neutral-light-20)`),ug()()(),Ac(64,`tr`)(65,`td`)(66,`code`),vN(67,`--background-color`),ug()(),Ac(68,`td`),vN(69,`Cor de background`),ug(),Ac(70,`td`)(71,`code`),vN(72,`Var(----color-neutral-light-05)`),ug()()(),Ac(73,`tr`)(74,`td`)(75,`strong`),vN(76,`Menu Footer`),ug()(),Kc(77,`td`)(78,`td`),ug(),Ac(79,`tr`)(80,`td`)(81,`code`),vN(82,`--color`),ug()(),Ac(83,`td`),vN(84,`Cor principla do menu footer`),ug(),Ac(85,`td`)(86,`code`),vN(87,`var(--color-action-default)`),ug()()(),Ac(88,`tr`)(89,`td`)(90,`code`),vN(91,`--font-size`),ug()(),Ac(92,`td`),vN(93,`Tamanho da fonte`),ug(),Ac(94,`td`)(95,`code`),vN(96,`var(--font-size-default)`),ug()()(),Ac(97,`tr`)(98,`td`)(99,`code`),vN(100,`--line-height`),ug()(),Ac(101,`td`),vN(102,`Tamanho da label`),ug(),Ac(103,`td`)(104,`code`),vN(105,`var(--line-height-md)`),ug()()(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--outline-color-focused`),ug()(),Ac(110,`td`),vN(111,`Cor do outline do estado de focus`),ug(),Ac(112,`td`)(113,`code`),vN(114,`var(--color-action-focus)`),ug()()(),Ac(115,`tr`)(116,`td`)(117,`code`),vN(118,`--font-weight-lvl0`),ug()(),Ac(119,`td`),vN(120,`Peso da fonte`),ug(),Ac(121,`td`)(122,`code`),vN(123,`var(--font-weight-bold)`),ug()()(),Ac(124,`tr`)(125,`td`)(126,`strong`),vN(127,`po-menu-item`),ug()(),Kc(128,`td`)(129,`td`),ug(),Ac(130,`tr`)(131,`td`)(132,`code`),vN(133,`--font-family`),ug()(),Ac(134,`td`),vN(135,`Família tipográfica usada`),ug(),Ac(136,`td`)(137,`code`),vN(138,`var(--font-family-theme)`),ug()()(),Ac(139,`tr`)(140,`td`)(141,`code`),vN(142,`--font-size`),ug()(),Ac(143,`td`),vN(144,`Tamanho da fonte`),ug(),Ac(145,`td`)(146,`code`),vN(147,`var(--font-size-default)`),ug()()(),Ac(148,`tr`)(149,`td`)(150,`code`),vN(151,`--line-height`),ug()(),Ac(152,`td`),vN(153,`Tamanho da label`),ug(),Ac(154,`td`)(155,`code`),vN(156,`var(--line-height-md)`),ug()()(),Ac(157,`tr`)(158,`td`)(159,`code`),vN(160,`--border-radius`),ug()(),Ac(161,`td`),vN(162,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(163,`td`)(164,`code`),vN(165,`var(--border-radius-md)`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--color`),ug()(),Ac(170,`td`),vN(171,`Cor principal do item`),ug(),Ac(172,`td`)(173,`code`),vN(174,`var(--color-action-default)`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`code`),vN(178,`--background-color`),ug()(),Ac(179,`td`),vN(180,`Cor do background`),ug(),Ac(181,`td`)(182,`code`),vN(183,`transparent`),ug()()(),Ac(184,`tr`)(185,`td`)(186,`strong`),vN(187,`Hover`),ug()(),Kc(188,`td`)(189,`td`),ug(),Ac(190,`tr`)(191,`td`)(192,`code`),vN(193,`--color-hover`),ug()(),Ac(194,`td`),vN(195,`Cor principal no estado hover`),ug(),Ac(196,`td`)(197,`code`),vN(198,`var(--color-brand-01-darkest)`),ug()()(),Ac(199,`tr`)(200,`td`)(201,`code`),vN(202,`--background-color-hover`),ug()(),Ac(203,`td`),vN(204,`Cor de background no estado hover`),ug(),Ac(205,`td`)(206,`code`),vN(207,`var(--color-brand-01-lighter)`),ug()()(),Ac(208,`tr`)(209,`td`)(210,`strong`),vN(211,`Focused`),ug()(),Kc(212,`td`)(213,`td`),ug(),Ac(214,`tr`)(215,`td`)(216,`code`),vN(217,`--outline-color-focused`),ug()(),Ac(218,`td`),vN(219,`Cor do outline do estado de focus`),ug(),Ac(220,`td`)(221,`code`),vN(222,`var(--color-action-focus)`),ug()()(),Ac(223,`tr`)(224,`td`)(225,`strong`),vN(226,`Pressed`),ug()(),Kc(227,`td`)(228,`td`),ug(),Ac(229,`tr`)(230,`td`)(231,`code`),vN(232,`--background-color-pressed`),ug(),vN(233,` \xA0`),ug(),Ac(234,`td`),vN(235,`Cor de background no estado de pressionado\xA0`),ug(),Ac(236,`td`)(237,`code`),vN(238,`var(--color-brand-01-light)`),ug()()(),Ac(239,`tr`)(240,`td`)(241,`strong`),vN(242,`Actived`),ug()(),Kc(243,`td`)(244,`td`),ug(),Ac(245,`tr`)(246,`td`)(247,`code`),vN(248,`--background-color-actived`),ug()(),Ac(249,`td`),vN(250,`Cor de background no estado actived`),ug(),Ac(251,`td`)(252,`code`),vN(253,`var(--color-brand-01-darkest)`),ug()()(),Ac(254,`tr`)(255,`td`)(256,`code`),vN(257,`--color-actived`),ug()(),Ac(258,`td`),vN(259,`Cor principal no estado actived`),ug(),Ac(260,`td`)(261,`code`),vN(262,`var(--color-brand-01-lighter)`),ug()()(),Ac(263,`tr`)(264,`td`)(265,`strong`),vN(266,`Font`),ug()(),Kc(267,`td`)(268,`td`),ug(),Ac(269,`tr`)(270,`td`)(271,`code`),vN(272,`--font-weight-lvl0`),ug()(),Ac(273,`td`),vN(274,`Peso da fonte bold`),ug(),Ac(275,`td`)(276,`code`),vN(277,`var(--font-weight-bold)`),ug()()(),Ac(278,`tr`)(279,`td`)(280,`code`),vN(281,`--font-weight-lvl1`),ug()(),Ac(282,`td`),vN(283,`Peso da fonte`),ug(),Ac(284,`td`)(285,`code`),vN(286,`var(--font-weight-normal)`),ug()()()()(),Ac(287,`p`),Kc(288,`br`),vN(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),ug(),Ac(290,`p`),vN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),ug(),Ac(292,`p`),vN(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),ug(),Ac(294,`p`),vN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Ac(296,`a`,7)(297,`strong`),vN(298,`p-menu-header-template`),ug()(),vN(299,`.`),ug(),Ac(300,`p`),vN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Ac(302,`code`),vN(303,`PoMenuFilter`),ug(),vN(304,`.`),ug(),Ac(305,`p`),vN(306,`Para o menu funcionar corretamente é necessário importar o `),Ac(307,`code`),vN(308,`RouterModule`),ug(),vN(309,` e `),Ac(310,`code`),vN(311,`Routes`),ug(),vN(312,` do módulo principal de sua aplicação:`),ug(),Ac(313,`pre`)(314,`code`),vN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),ug()(),Ac(316,`p`),vN(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),ug(),Ac(318,`pre`)(319,`code`),vN(320,`import { NgModule } from '@angular/core';

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
`),ug()()(),Ac(321,`div`,8)(322,`h4`,9),vN(323,`Seletor`),ug(),Ac(324,`pre`,10),vN(325,`<po-menu
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
`),ug()(),Ac(326,`h4`,11),vN(327,`Propriedades`),ug(),Ac(328,`table`,12)(329,`tr`,13)(330,`th`,14),vN(331,`Nome`),ug(),Ac(332,`th`,14),vN(333,`Tipo`),ug(),Ac(334,`th`,14),vN(335,`Padrão`),ug(),Ac(336,`th`,14),vN(337,`Descrição`),ug()(),Ac(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),vN(342,` p-automatic-toggle`),Kc(343,`br`),ug()()(),Ac(344,`td`,19)(345,`code`,20),vN(346,`boolean`),ug()(),Ac(347,`td`,21)(348,`p`)(349,`code`),vN(350,`false`),ug()()(),Ac(351,`td`,22)(352,`em`)(353,`strong`),vN(354,`(opcional)`),ug()(),Ac(355,`p`),vN(356,`Expande e Colapsa (retrai) o menu automaticamente.`),ug()()(),Ac(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),vN(361,` p-collapsed`),Kc(362,`br`),ug()()(),Ac(363,`td`,19)(364,`code`,20),vN(365,`boolean`),ug()(),Ac(366,`td`,21)(367,`p`)(368,`code`),vN(369,`false`),ug()()(),Ac(370,`td`,22)(371,`em`)(372,`strong`),vN(373,`(opcional)`),ug()(),Ac(374,`p`),vN(375,`Colapsa (retrai) o menu e caso receba o valor `),Ac(376,`code`),vN(377,`false`),ug(),vN(378,` expande o menu.`),ug(),Ac(379,`blockquote`)(380,`p`),vN(381,`Utilize esta propriedade para iniciar o menu colapsado.`),ug()(),Ac(382,`blockquote`)(383,`p`),vN(384,`Ao utilizar os métodos `),Ac(385,`a`,23)(386,`code`),vN(387,`colapse`),ug()(),vN(388,`, `),Ac(389,`a`,24)(390,`code`),vN(391,`expand`),ug()(),vN(392,` e
`),Ac(393,`a`,25)(394,`code`),vN(395,`toggle`),ug()(),vN(396,` o valor desta propriedade não é alterado.`),ug()(),Ac(397,`p`)(398,`strong`),vN(399,`Importante:`),ug()(),Ac(400,`blockquote`)(401,`p`),vN(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Ac(403,`code`),vN(404,`icon`),ug(),vN(405,` e `),Ac(406,`code`),vN(407,`shortLabel`),ug(),vN(408,`.`),ug()()()(),Ac(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),vN(413,` p-components-size`),Kc(414,`br`),ug()()(),Ac(415,`td`,19)(416,`code`,26),vN(417,`string`),ug()(),Ac(418,`td`,21)(419,`p`)(420,`code`),vN(421,`medium`),ug()()(),Ac(422,`td`,22)(423,`em`)(424,`strong`),vN(425,`(opcional)`),ug()(),Ac(426,`p`),vN(427,`Define o tamanho dos componentes de formulário no menu:`),ug(),Ac(428,`ul`)(429,`li`)(430,`code`),vN(431,`small`),ug(),vN(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(433,`li`)(434,`code`),vN(435,`medium`),ug(),vN(436,`: aplica a medida medium de cada componente.`),ug()(),Ac(437,`blockquote`)(438,`p`),vN(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(440,`code`),vN(441,`medium`),ug(),vN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(443,`a`,27),vN(444,`po-theme`),ug(),vN(445,`.`),ug()()()(),Ac(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),vN(450,` p-filter`),Kc(451,`br`),ug()()(),Ac(452,`td`,19)(453,`code`,20),vN(454,`boolean`),ug()(),Ac(455,`td`,21)(456,`p`)(457,`code`),vN(458,`false`),ug()()(),Ac(459,`td`,22)(460,`em`)(461,`strong`),vN(462,`(opcional)`),ug()(),Ac(463,`p`),vN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Ac(465,`code`),vN(466,`p-service`),ug(),vN(467,`.`),ug(),Ac(468,`blockquote`)(469,`p`),vN(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),ug()()()(),Ac(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),vN(475,` p-logo`),Kc(476,`br`),ug()()(),Ac(477,`td`,19)(478,`code`,26),vN(479,`string`),ug()(),Ac(480,`td`,21),vN(481,`-`),ug(),Ac(482,`td`,22)(483,`em`)(484,`strong`),vN(485,`(opcional)`),ug()(),Ac(486,`p`),vN(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),ug(),Ac(488,`blockquote`)(489,`p`)(490,`strong`),vN(491,`Importante:`),ug()()(),Ac(492,`ul`)(493,`li`),vN(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),ug(),Ac(495,`li`),vN(496,`Como boa prática, indica-se utilizar imagens com até `),Ac(497,`code`),vN(498,`24px`),ug(),vN(499,` de altura e `),Ac(500,`code`),vN(501,`224px`),ug(),vN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ug()()()(),Ac(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),vN(507,` p-logo-alt`),Kc(508,`br`),ug()()(),Ac(509,`td`,19)(510,`code`,26),vN(511,`string`),ug()(),Ac(512,`td`,21)(513,`p`)(514,`code`),vN(515,`Logomarca início`),ug()()(),Ac(516,`td`,22)(517,`em`)(518,`strong`),vN(519,`(opcional)`),ug()(),Ac(520,`p`),vN(521,`Define o texto alternativo para a logomarca.`),ug(),Ac(522,`blockquote`)(523,`p`)(524,`strong`),vN(525,`Importante`),ug(),vN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ug()()()(),Ac(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),vN(531,` p-logo-link`),Kc(532,`br`),ug()()(),Ac(533,`td`,19)(534,`code`,20),vN(535,`boolean `),ug(),Ac(536,`code`,26),vN(537,` string`),ug()(),Ac(538,`td`,21)(539,`p`)(540,`code`),vN(541,`true`),ug()()(),Ac(542,`td`,22)(543,`em`)(544,`strong`),vN(545,`(opcional)`),ug()(),Ac(546,`p`),vN(547,`Define o link para a rota ao clicar no logo do menu.`),ug(),Ac(548,`ul`)(549,`li`),vN(550,`Se o valor for uma string, define a rota para o link informado.`),ug(),Ac(551,`li`),vN(552,`Se for `),Ac(553,`code`),vN(554,`false`),ug(),vN(555,`, o logo não terá link associado.`),ug(),Ac(556,`li`),vN(557,`Se for `),Ac(558,`code`),vN(559,`true`),ug(),vN(560,`, o logo terá a rota padrão `),Ac(561,`code`),vN(562,`./`),ug(),vN(563,`.`),ug()()()(),Ac(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),vN(568,` p-menus`),Kc(569,`br`),ug()()(),Ac(570,`td`,19)(571,`code`,28),vN(572,`PoMenuItem[]`),ug()(),Ac(573,`td`,21),vN(574,`-`),ug(),Ac(575,`td`,22)(576,`p`),vN(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ug()()(),Ac(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),vN(582,` p-params`),Kc(583,`br`),ug()()(),Ac(584,`td`,19)(585,`code`,29),vN(586,`any`),ug()(),Ac(587,`td`,21),vN(588,`-`),ug(),Ac(589,`td`,22)(590,`em`)(591,`strong`),vN(592,`(opcional)`),ug()(),Ac(593,`p`),vN(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),ug(),Ac(595,`p`),vN(596,`Caso utilizado um serviço customizado, implementando a interface `),Ac(597,`code`),vN(598,`PoMenuFilter`),ug(),vN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Ac(600,`code`),vN(601,`getFilteredData`),ug(),vN(602,`.`),ug(),Ac(603,`p`),vN(604,`Quando utilizada uma URL de serviço, será realizado um `),Ac(605,`em`),vN(606,`GET`),ug(),vN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Ac(608,`code`),vN(609,`search`),ug(),vN(610,`, veja exemplo:`),ug(),Ac(611,`pre`)(612,`code`),vN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),ug()()()(),Ac(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),vN(618,` p-search-tree-items`),Kc(619,`br`),ug()()(),Ac(620,`td`,19)(621,`code`,20),vN(622,`boolean`),ug()(),Ac(623,`td`,21)(624,`p`)(625,`code`),vN(626,`false`),ug()()(),Ac(627,`td`,22)(628,`em`)(629,`strong`),vN(630,`(opcional)`),ug()(),Ac(631,`p`),vN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),ug(),Ac(633,`blockquote`)(634,`p`),vN(635,`É necessário que a propriedade `),Ac(636,`code`),vN(637,`p-filter`),ug(),vN(638,` esteja habilitada.`),ug()()()(),Ac(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),vN(643,` p-service`),Kc(644,`br`),ug()()(),Ac(645,`td`,19)(646,`code`,26),vN(647,`string `),ug(),Ac(648,`code`,30),vN(649,` PoMenuFilter`),ug()(),Ac(650,`td`,21),vN(651,`-`),ug(),Ac(652,`td`,22)(653,`em`)(654,`strong`),vN(655,`(opcional)`),ug()(),Ac(656,`p`),vN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Ac(658,`code`),vN(659,`PoMenuFilter`),ug(),vN(660,`.`),ug(),Ac(661,`p`),vN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Ac(663,`a`,31),vN(664,`Guia de implementação de APIs`),ug(),vN(665,` do PO UI.`),ug(),Ac(666,`p`),vN(667,`Quando utilizada uma URL de serviço, será realizado um `),Ac(668,`em`),vN(669,`GET`),ug(),vN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Ac(671,`code`),vN(672,`search`),ug(),vN(673,`, veja exemplo:`),ug(),Ac(674,`blockquote`)(675,`p`),vN(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Ac(677,`code`),vN(678,`tot`),ug(),vN(679,`.`),ug()(),Ac(680,`pre`)(681,`code`),vN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),ug()(),Ac(683,`blockquote`)(684,`p`),vN(685,`É necessário que propriedade `),Ac(686,`code`),vN(687,`p-filter`),ug(),vN(688,` esteja habilitada.`),ug()()()(),Ac(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),vN(693,` p-short-logo`),Kc(694,`br`),ug()()(),Ac(695,`td`,19)(696,`code`,26),vN(697,`string`),ug()(),Ac(698,`td`,21),vN(699,`-`),ug(),Ac(700,`td`,22)(701,`em`)(702,`strong`),vN(703,`(opcional)`),ug()(),Ac(704,`p`),vN(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),ug(),Ac(706,`blockquote`)(707,`p`)(708,`strong`),vN(709,`Importante:`),ug()()(),Ac(710,`ul`)(711,`li`),vN(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Ac(713,`code`),vN(714,`p-logo`),ug(),vN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),ug(),Ac(716,`li`),vN(717,`Como boa prática, indica-se utilizar imagens com até `),Ac(718,`code`),vN(719,`48px`),ug(),vN(720,` de altura e `),Ac(721,`code`),vN(722,`48px`),ug(),vN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),ug(),Ac(724,`li`),vN(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Ac(726,`code`),vN(727,`p-logo`),ug(),vN(728,`.`),ug()()()(),Ac(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),vN(733,` (p-toggle)`),Kc(734,`br`),ug()()(),Ac(735,`td`,19)(736,`code`,34),vN(737,`EventEmitter`),ug()(),Ac(738,`td`,21),vN(739,`-`),ug(),Ac(740,`td`,22)(741,`em`)(742,`strong`),vN(743,`(opcional)`),ug()(),Ac(744,`p`),vN(745,`Evento emitido toda vez que o estado do menu muda, enviando `),Ac(746,`code`),vN(747,`true`),ug(),vN(748,` quando expandido e `),Ac(749,`code`),vN(750,`false`),ug(),vN(751,` quando colapsado.`),ug(),Ac(752,`pre`)(753,`code`,35),vN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),ug()()()()(),Ac(755,`h3`,11),vN(756,`Métodos`),ug(),Ac(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),vN(763,` collapse `),ug()()()()(),Ac(764,`tr`,22)(765,`td`,22)(766,`p`),Kc(767,`a`,38),ug(),Ac(768,`p`),vN(769,`Método para colapsar (retrair) o menu.`),ug()()()(),Kc(770,`br`),Ac(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),vN(777,` expand `),ug()()()()(),Ac(778,`tr`,22)(779,`td`,22)(780,`p`),Kc(781,`a`,39),ug(),Ac(782,`p`),vN(783,`Método para expandir (aumentar) o menu.`),ug()()()(),Kc(784,`br`),Ac(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),vN(791,` toggle `),ug()()()()(),Ac(792,`tr`,22)(793,`td`,22)(794,`p`),Kc(795,`a`,40),vN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),ug(),Ac(797,`blockquote`)(798,`p`),vN(799,`Os métodos apenas vão colapsar/expandir o menu se:`),ug()(),Ac(800,`ul`)(801,`li`),vN(802,`Todos os itens de menu tiverem valor nas propriedades `),Ac(803,`code`),vN(804,`icon`),ug(),vN(805,` e `),Ac(806,`code`),vN(807,`shortLabel`),ug(),vN(808,`.`),ug()()()()(),Kc(809,`br`),Ac(810,`h3`),vN(811,`Interfaces`),ug(),Ac(812,`h4`,41)(813,`code`,5),vN(814,`PoMenuFilter`),ug()(),Ac(815,`div`,2)(816,`p`),vN(817,`Interface do serviço utilizado no componente `),Ac(818,`code`),vN(819,`po-menu`),ug(),vN(820,`.`),ug()(),Ac(821,`h4`,11),vN(822,`Métodos`),ug(),Ac(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),vN(829,` getFilteredData `),ug()()()()(),Ac(830,`tr`,22)(831,`td`,22)(832,`p`),vN(833,`Método responsável por retornar um `),Ac(834,`em`),vN(835,`Observable`),ug(),vN(836,` que retorne uma lista de objetos que seguem a interface `),Ac(837,`code`),vN(838,`PoMenuItemFiltered`),ug(),vN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Ac(840,`code`),vN(841,`p-params`),ug(),vN(842,`.`),ug()()()(),Ac(843,`h5`)(844,`b`),vN(845,`Parâmetros`),ug()(),Ac(846,`table`,12)(847,`tr`,13)(848,`th`,14),vN(849,`Nome`),ug(),Ac(850,`th`,14),vN(851,`Tipo`),ug(),Ac(852,`th`,14),vN(853,`Descrição`),ug()(),Ac(854,`tr`,15)(855,`td`,16),vN(856,` search`),ug(),Ac(857,`td`,19)(858,`code`,42),vN(859,` string `),ug()(),Ac(860,`td`,22)(861,`p`),vN(862,`Valor informado no campo de busca dos itens de menus.`),ug()()(),Ac(863,`tr`,15)(864,`td`,16),vN(865,` params`),ug(),Ac(866,`td`,19)(867,`code`,42),vN(868,` any `),ug()(),Ac(869,`td`,22)(870,`p`),vN(871,`Valor informado através da propriedade `),Ac(872,`code`),vN(873,`p-params`),ug(),vN(874,`.`),ug()()()(),Kc(875,`br`),Ac(876,`h4`,41)(877,`code`,5),vN(878,`PoMenuItemBadge`),ug()(),Ac(879,`div`,2)(880,`p`),vN(881,`Interface do `),Ac(882,`em`),vN(883,`badge`),ug(),vN(884,` utilizado no `),Ac(885,`code`),vN(886,`po-menu`),ug(),vN(887,`.`),ug()(),Ac(888,`h4`,11),vN(889,`Propriedades`),ug(),Ac(890,`table`,12)(891,`tr`,13)(892,`th`,14),vN(893,`Nome`),ug(),Ac(894,`th`,14),vN(895,`Tipo`),ug(),Ac(896,`th`,14),vN(897,`Descrição`),ug()(),Ac(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),vN(902,` color`),Kc(903,`br`),ug()()(),Ac(904,`td`,19)(905,`code`,26),vN(906,`string`),ug()(),Ac(907,`td`,22)(908,`em`)(909,`strong`),vN(910,`(opcional)`),ug()(),Ac(911,`p`),vN(912,`Define a cor do `),Ac(913,`em`),vN(914,`badge`),ug(),vN(915,` e aceita os valores:`),ug(),Ac(916,`p`),Kc(917,`span`,43),Ac(918,`code`),vN(919,`color-01`),ug()(),Ac(920,`p`),Kc(921,`span`,44),Ac(922,`code`),vN(923,`color-02`),ug()(),Ac(924,`p`),Kc(925,`span`,45),Ac(926,`code`),vN(927,`color-03`),ug()(),Ac(928,`p`),Kc(929,`span`,46),Ac(930,`code`),vN(931,`color-04`),ug()(),Ac(932,`p`),Kc(933,`span`,47),Ac(934,`code`),vN(935,`color-05`),ug()(),Ac(936,`p`),Kc(937,`span`,48),Ac(938,`code`),vN(939,`color-06`),ug()(),Ac(940,`p`),Kc(941,`span`,49),Ac(942,`code`),vN(943,`color-07`),ug()(),Ac(944,`p`),Kc(945,`span`,50),Ac(946,`code`),vN(947,`color-08`),ug()(),Ac(948,`p`),Kc(949,`span`,51),Ac(950,`code`),vN(951,`color-09`),ug()(),Ac(952,`p`),Kc(953,`span`,52),Ac(954,`code`),vN(955,`color-10`),ug()(),Ac(956,`p`),Kc(957,`span`,53),Ac(958,`code`),vN(959,`color-11`),ug()(),Ac(960,`p`),Kc(961,`span`,54),Ac(962,`code`),vN(963,`color-12`),ug()()()(),Ac(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),vN(968,` value`),Kc(969,`br`),ug()()(),Ac(970,`td`,19)(971,`code`,55),vN(972,`number`),ug()(),Ac(973,`td`,22)(974,`p`),vN(975,`Número exibido no `),Ac(976,`em`),vN(977,`badge`),ug(),vN(978,`, caso o mesmo seja maior que `),Ac(979,`strong`),vN(980,`9`),ug(),vN(981,` o mesmo exibe `),Ac(982,`strong`),vN(983,`9+`),ug(),vN(984,`.`),ug()()()(),Ac(985,`h4`,41)(986,`code`,5),vN(987,`PoMenuItemFiltered`),ug()(),Ac(988,`div`,2)(989,`p`),vN(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Ac(991,`code`),vN(992,`po-menu`),ug(),vN(993,`.`),ug()(),Ac(994,`h4`,11),vN(995,`Propriedades`),ug(),Ac(996,`table`,12)(997,`tr`,13)(998,`th`,14),vN(999,`Nome`),ug(),Ac(1e3,`th`,14),vN(1001,`Tipo`),ug(),Ac(1002,`th`,14),vN(1003,`Descrição`),ug()(),Ac(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),vN(1008,` action`),Kc(1009,`br`),ug()()(),Ac(1010,`td`,19)(1011,`code`,56),vN(1012,`() => void`),ug()(),Ac(1013,`td`,22)(1014,`p`),vN(1015,`Ação a ser executada quando o item de menu for clicado.`),ug()()(),Ac(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),vN(1020,` label`),Kc(1021,`br`),ug()()(),Ac(1022,`td`,19)(1023,`code`,26),vN(1024,`string`),ug()(),Ac(1025,`td`,22)(1026,`p`),vN(1027,`Texto do item de menu.`),ug()()(),Ac(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),vN(1032,` link`),Kc(1033,`br`),ug()()(),Ac(1034,`td`,19)(1035,`code`,26),vN(1036,`string`),ug()(),Ac(1037,`td`,22)(1038,`p`),vN(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Ac(1040,`em`),vN(1041,`link`),ug(),vN(1042,` interno ou externo.`),ug()()()(),Ac(1043,`h4`,41)(1044,`code`,5),vN(1045,`PoMenuItem`),ug()(),Ac(1046,`div`,2)(1047,`p`),vN(1048,`Interface para os itens de menu do componente po-menu.`),ug()(),Ac(1049,`h4`,11),vN(1050,`Propriedades`),ug(),Ac(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),vN(1054,`Nome`),ug(),Ac(1055,`th`,14),vN(1056,`Tipo`),ug(),Ac(1057,`th`,14),vN(1058,`Descrição`),ug()(),Ac(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),vN(1063,` action`),Kc(1064,`br`),ug()()(),Ac(1065,`td`,19)(1066,`code`,57),vN(1067,`Function`),ug()(),Ac(1068,`td`,22)(1069,`em`)(1070,`strong`),vN(1071,`(opcional)`),ug()(),Ac(1072,`p`),vN(1073,`Ação personalizada para clique do item de menu.`),ug()()(),Ac(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),vN(1078,` badge`),Kc(1079,`br`),ug()()(),Ac(1080,`td`,19)(1081,`code`,58),vN(1082,`PoMenuItemBadge`),ug()(),Ac(1083,`td`,22)(1084,`em`)(1085,`strong`),vN(1086,`(opcional)`),ug()(),Ac(1087,`p`),vN(1088,`Badge do item de menu.`),ug(),Ac(1089,`p`),vN(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),ug(),Ac(1091,`blockquote`)(1092,`p`),vN(1093,`O `),Ac(1094,`code`),vN(1095,`po-badge`),ug(),vN(1096,` só será exibido caso o item do menu não possua `),Ac(1097,`code`),vN(1098,`subItems`),ug(),vN(1099,` e seu valor seja maior ou igual a 0.`),ug()()()(),Ac(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),vN(1104,` icon`),Kc(1105,`br`),ug()()(),Ac(1106,`td`,19)(1107,`code`,26),vN(1108,`string `),ug(),Ac(1109,`code`,59),vN(1110,` TemplateRef<void>`),ug()(),Ac(1111,`td`,22)(1112,`em`)(1113,`strong`),vN(1114,`(opcional)`),ug()(),Ac(1115,`p`),vN(1116,`É possível usar qualquer um dos ícones da `),Ac(1117,`a`,60),vN(1118,`Biblioteca de ícones`),ug(),vN(1119,`. conforme exemplo abaixo:`),ug(),Ac(1120,`pre`)(1121,`code`),vN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),ug()(),Ac(1123,`p`),vN(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ug(),Ac(1125,`pre`)(1126,`code`),vN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),ug()(),Ac(1128,`p`),vN(1129,`Outra opção seria a customização do ícone através do `),Ac(1130,`code`),vN(1131,`TemplateRef`),ug(),vN(1132,`, conforme exemplo abaixo:
component.html:`),ug(),Ac(1133,`pre`)(1134,`code`),vN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),ug()(),Ac(1136,`p`),vN(1137,`component.ts:`),ug(),Ac(1138,`pre`)(1139,`code`),vN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),ug()(),Ac(1141,`blockquote`)(1142,`p`),vN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),ug()()()(),Ac(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),vN(1148,` label`),Kc(1149,`br`),ug()()(),Ac(1150,`td`,19)(1151,`code`,26),vN(1152,`string`),ug()(),Ac(1153,`td`,22)(1154,`p`),vN(1155,`Texto do item de menu.`),ug()()(),Ac(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),vN(1160,` link`),Kc(1161,`br`),ug()()(),Ac(1162,`td`,19)(1163,`code`,26),vN(1164,`string`),ug()(),Ac(1165,`td`,22)(1166,`em`)(1167,`strong`),vN(1168,`(opcional)`),ug()(),Ac(1169,`p`),vN(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),ug()()(),Ac(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),vN(1175,` shortLabel`),Kc(1176,`br`),ug()()(),Ac(1177,`td`,19)(1178,`code`,26),vN(1179,`string`),ug()(),Ac(1180,`td`,22)(1181,`em`)(1182,`strong`),vN(1183,`(opcional)`),ug()(),Ac(1184,`p`),vN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),ug()()(),Ac(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),vN(1190,` subItems`),Kc(1191,`br`),ug()()(),Ac(1192,`td`,19)(1193,`code`,61),vN(1194,`Array<PoMenuItem>`),ug()(),Ac(1195,`td`,22)(1196,`em`)(1197,`strong`),vN(1198,`(opcional)`),ug()(),Ac(1199,`p`),vN(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-menu-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-menu-basic-view`)(6,`sample-po-menu-labs-view`)(7,`sample-po-menu-human-resources-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,ve,Me,ye,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(je),kL]})}return a})();var _t=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,_e]})}return a})();export{_t as DocPoMenuModule};