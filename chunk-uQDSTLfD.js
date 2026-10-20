import{$r as Zn,Br as Sx,Ca as zw,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Nt as _4,O as E5,Pi as mt,Pr as R,Ri as nu,Rt as _oe,Si as iu,U as Jee,Vi as p,Vr as TF,X as Lf,Xi as sO,Xr as Y,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cr as FE,dn as moe,dt as Sae,ea as uO,fa as we$1,i as _a,in as iFe,ir as EF,ji as mO,mi as gO,mn as ni,mr as He,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,va as y_,w as CP,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ke=()=>({label:`PO UI - Angular Framework`,link:`/`});var Le=a=>[a];var xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(r,i){r&1&&nu(0,`po-menu`,0),r&2&&jE(`p-menus`,mO(2,Le,gO(1,ke)))},dependencies:[_4],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-menu-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,xe],encapsulation:2,changeDetection:1})}return a})();function Re(a,W){if(a&1&&(jc(0,`div`),nu(1,`span`),jc(2,`span`,26),iO(3),wg()()),a&2){let m=W.$implicit;rg(),qx(uO(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),rg(2),Ag(` `,m.label,` `)}}var Ce=(()=>{class a{changeDetector=p(He);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(r){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(r,i){if(r&1&&iu(_4,7),r&2){let s;vo(s=_o())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`div`,1),nu(1,`po-menu`,2),jc(2,`po-page-default`,3)(3,`div`,4),nu(4,`po-info`,5)(5,`po-button-group`,6),wg(),nu(6,`po-divider`),jc(7,`div`,4),nu(8,`po-info`,7),jc(9,`form`,null,0)(11,`po-switch`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.filter,l)||(i.filter=l),v_(l)}),mt(`ngModelChange`,function(l){return i.onFilterChange(l)}),wg(),jc(12,`po-switch`,9),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.searchTreeItems,l)||(i.searchTreeItems=l),v_(l)}),wg(),jc(13,`po-select`,10),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.parent,l)||(i.parent=l),v_(l)}),wg(),jc(14,`po-input`,11),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.label,l)||(i.label=l),v_(l)}),wg(),jc(15,`po-input`,12),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.shortLabel,l)||(i.shortLabel=l),v_(l)}),wg(),jc(16,`po-url`,13),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.link,l)||(i.link=l),v_(l)}),wg(),jc(17,`po-select`,14),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.badgeColor,l)||(i.badgeColor=l),v_(l)}),FE(18,Re,4,4,`ng-template`,15),wg(),jc(19,`po-number`,16),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.badgeValue,l)||(i.badgeValue=l),v_(l)}),wg(),jc(20,`po-select`,17),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.icon,l)||(i.icon=l),v_(l)}),wg(),jc(21,`div`,4)(22,`po-button`,18),mt(`p-click`,function(){return i.addMenuItem()}),wg()(),nu(23,`po-divider`),jc(24,`po-input`,19),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.service,l)||(i.service=l),v_(l)}),wg(),jc(25,`po-input`,20),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.menuParams,l)||(i.menuParams=l),v_(l)}),mt(`p-change-model`,function(l){return i.onChangeParams(l)}),wg(),jc(26,`po-input`,21),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.logo,l)||(i.logo=l),v_(l)}),wg(),jc(27,`po-input`,22),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.shortLogo,l)||(i.shortLogo=l),v_(l)}),wg(),jc(28,`po-input`,23),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.logoLink,l)||(i.logoLink=l),v_(l)}),wg(),jc(29,`po-radio-group`,24),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.componentsSize,l)||(i.componentsSize=l),v_(l)}),wg(),jc(30,`div`,4)(31,`po-button`,25),mt(`p-click`,function(){return i.restore()}),wg()()()()()()}r&2&&(rg(),jE(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),rg(4),jE(`p-buttons`,i.buttons),rg(3),jE(`p-value`,i.menuItemSelected),rg(3),ib(`ngModel`,i.filter),t0(),rg(),ib(`ngModel`,i.searchTreeItems),jE(`p-disabled`,!i.filter),t0(),rg(),ib(`ngModel`,i.parent),jE(`p-options`,i.parentList),t0(),rg(),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.shortLabel),t0(),rg(),ib(`ngModel`,i.link),t0(),rg(),ib(`ngModel`,i.badgeColor),jE(`p-options`,i.badgeColorList),t0(),rg(2),ib(`ngModel`,i.badgeValue),jE(`p-max`,i.maxBadgeValue),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),t0(),rg(4),ib(`ngModel`,i.service),t0(),rg(),ib(`ngModel`,i.menuParams),t0(),rg(),ib(`ngModel`,i.logo),t0(),rg(),ib(`ngModel`,i.shortLogo),t0(),rg(),ib(`ngModel`,i.logoLink),t0(),rg(),ib(`ngModel`,i.componentsSize),jE(`p-options`,i.componentsSizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Jee,Lf,A5,doe,Ote,moe,w5,E5,_oe,_4,Kze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-wrapper">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-menu-labs`),wg(),nu(29,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ce],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=p(zw);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(Y(i=>i.items))}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Be(a,W){a&1&&(jc(0,`div`,5)(1,`p`),iO(2,`Welcome,`),wg(),jc(3,`p`)(4,`b`),iO(5,` John Doe `),wg()()())}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=p(O);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[we$1([O])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`po-menu`,1),FE(2,Be,6,0,`div`,2),wg(),nu(3,`po-toolbar`,3)(4,`po-page-default`,4),wg()),r&2&&(rg(),jE(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),rg(2),jE(`p-show-notification`,!1),rg(),jE(`p-title`,i.menuItemSelected))},dependencies:[_4,CP,Kze,iFe],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu - Human Resources`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-wrapper">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),iO(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),wg(),jc(29,`pre`,11),iO(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-menu-human-resources`),wg(),nu(33,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoMenuModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-menu.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoMenuComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),wg(),jc(15,`p`),iO(16,`O componente po-menu recebe uma lista de objetos do tipo `),jc(17,`code`),iO(18,`MenuItem`),wg(),iO(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),wg(),jc(20,`h4`),iO(21,`Tokens customizáveis`),wg(),jc(22,`p`),iO(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(24,`blockquote`)(25,`p`),iO(26,`Para maiores informações, acesse o guia `),jc(27,`a`,6),iO(28,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(29,`.`),wg()(),jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),iO(34,`Propriedade`),wg(),jc(35,`th`),iO(36,`Descrição`),wg(),jc(37,`th`),iO(38,`Valor Padrão`),wg()()(),jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),iO(43,`Default Values`),wg()(),nu(44,`td`)(45,`td`),wg(),jc(46,`tr`)(47,`td`)(48,`code`),iO(49,`--border-radius`),wg()(),jc(50,`td`),iO(51,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(52,`td`)(53,`code`),iO(54,`var(--border-radius-md)`),wg()()(),jc(55,`tr`)(56,`td`)(57,`code`),iO(58,`--border-color`),wg()(),jc(59,`td`),iO(60,`Cor da borda`),wg(),jc(61,`td`)(62,`code`),iO(63,`var(--color-neutral-light-20)`),wg()()(),jc(64,`tr`)(65,`td`)(66,`code`),iO(67,`--background-color`),wg()(),jc(68,`td`),iO(69,`Cor de background`),wg(),jc(70,`td`)(71,`code`),iO(72,`Var(----color-neutral-light-05)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`strong`),iO(76,`Menu Footer`),wg()(),nu(77,`td`)(78,`td`),wg(),jc(79,`tr`)(80,`td`)(81,`code`),iO(82,`--color`),wg()(),jc(83,`td`),iO(84,`Cor principla do menu footer`),wg(),jc(85,`td`)(86,`code`),iO(87,`var(--color-action-default)`),wg()()(),jc(88,`tr`)(89,`td`)(90,`code`),iO(91,`--font-size`),wg()(),jc(92,`td`),iO(93,`Tamanho da fonte`),wg(),jc(94,`td`)(95,`code`),iO(96,`var(--font-size-default)`),wg()()(),jc(97,`tr`)(98,`td`)(99,`code`),iO(100,`--line-height`),wg()(),jc(101,`td`),iO(102,`Tamanho da label`),wg(),jc(103,`td`)(104,`code`),iO(105,`var(--line-height-md)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--outline-color-focused`),wg()(),jc(110,`td`),iO(111,`Cor do outline do estado de focus`),wg(),jc(112,`td`)(113,`code`),iO(114,`var(--color-action-focus)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),iO(118,`--font-weight-lvl0`),wg()(),jc(119,`td`),iO(120,`Peso da fonte`),wg(),jc(121,`td`)(122,`code`),iO(123,`var(--font-weight-bold)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`strong`),iO(127,`po-menu-item`),wg()(),nu(128,`td`)(129,`td`),wg(),jc(130,`tr`)(131,`td`)(132,`code`),iO(133,`--font-family`),wg()(),jc(134,`td`),iO(135,`Família tipográfica usada`),wg(),jc(136,`td`)(137,`code`),iO(138,`var(--font-family-theme)`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),iO(142,`--font-size`),wg()(),jc(143,`td`),iO(144,`Tamanho da fonte`),wg(),jc(145,`td`)(146,`code`),iO(147,`var(--font-size-default)`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),iO(151,`--line-height`),wg()(),jc(152,`td`),iO(153,`Tamanho da label`),wg(),jc(154,`td`)(155,`code`),iO(156,`var(--line-height-md)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`code`),iO(160,`--border-radius`),wg()(),jc(161,`td`),iO(162,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(163,`td`)(164,`code`),iO(165,`var(--border-radius-md)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--color`),wg()(),jc(170,`td`),iO(171,`Cor principal do item`),wg(),jc(172,`td`)(173,`code`),iO(174,`var(--color-action-default)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),iO(178,`--background-color`),wg()(),jc(179,`td`),iO(180,`Cor do background`),wg(),jc(181,`td`)(182,`code`),iO(183,`transparent`),wg()()(),jc(184,`tr`)(185,`td`)(186,`strong`),iO(187,`Hover`),wg()(),nu(188,`td`)(189,`td`),wg(),jc(190,`tr`)(191,`td`)(192,`code`),iO(193,`--color-hover`),wg()(),jc(194,`td`),iO(195,`Cor principal no estado hover`),wg(),jc(196,`td`)(197,`code`),iO(198,`var(--color-brand-01-darkest)`),wg()()(),jc(199,`tr`)(200,`td`)(201,`code`),iO(202,`--background-color-hover`),wg()(),jc(203,`td`),iO(204,`Cor de background no estado hover`),wg(),jc(205,`td`)(206,`code`),iO(207,`var(--color-brand-01-lighter)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`strong`),iO(211,`Focused`),wg()(),nu(212,`td`)(213,`td`),wg(),jc(214,`tr`)(215,`td`)(216,`code`),iO(217,`--outline-color-focused`),wg()(),jc(218,`td`),iO(219,`Cor do outline do estado de focus`),wg(),jc(220,`td`)(221,`code`),iO(222,`var(--color-action-focus)`),wg()()(),jc(223,`tr`)(224,`td`)(225,`strong`),iO(226,`Pressed`),wg()(),nu(227,`td`)(228,`td`),wg(),jc(229,`tr`)(230,`td`)(231,`code`),iO(232,`--background-color-pressed`),wg(),iO(233,` \xA0`),wg(),jc(234,`td`),iO(235,`Cor de background no estado de pressionado\xA0`),wg(),jc(236,`td`)(237,`code`),iO(238,`var(--color-brand-01-light)`),wg()()(),jc(239,`tr`)(240,`td`)(241,`strong`),iO(242,`Actived`),wg()(),nu(243,`td`)(244,`td`),wg(),jc(245,`tr`)(246,`td`)(247,`code`),iO(248,`--background-color-actived`),wg()(),jc(249,`td`),iO(250,`Cor de background no estado actived`),wg(),jc(251,`td`)(252,`code`),iO(253,`var(--color-brand-01-darkest)`),wg()()(),jc(254,`tr`)(255,`td`)(256,`code`),iO(257,`--color-actived`),wg()(),jc(258,`td`),iO(259,`Cor principal no estado actived`),wg(),jc(260,`td`)(261,`code`),iO(262,`var(--color-brand-01-lighter)`),wg()()(),jc(263,`tr`)(264,`td`)(265,`strong`),iO(266,`Font`),wg()(),nu(267,`td`)(268,`td`),wg(),jc(269,`tr`)(270,`td`)(271,`code`),iO(272,`--font-weight-lvl0`),wg()(),jc(273,`td`),iO(274,`Peso da fonte bold`),wg(),jc(275,`td`)(276,`code`),iO(277,`var(--font-weight-bold)`),wg()()(),jc(278,`tr`)(279,`td`)(280,`code`),iO(281,`--font-weight-lvl1`),wg()(),jc(282,`td`),iO(283,`Peso da fonte`),wg(),jc(284,`td`)(285,`code`),iO(286,`var(--font-weight-normal)`),wg()()()()(),jc(287,`p`),nu(288,`br`),iO(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),wg(),jc(290,`p`),iO(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),wg(),jc(292,`p`),iO(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),wg(),jc(294,`p`),iO(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),jc(296,`a`,7)(297,`strong`),iO(298,`p-menu-header-template`),wg()(),iO(299,`.`),wg(),jc(300,`p`),iO(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),jc(302,`code`),iO(303,`PoMenuFilter`),wg(),iO(304,`.`),wg(),jc(305,`p`),iO(306,`Para o menu funcionar corretamente é necessário importar o `),jc(307,`code`),iO(308,`RouterModule`),wg(),iO(309,` e `),jc(310,`code`),iO(311,`Routes`),wg(),iO(312,` do módulo principal de sua aplicação:`),wg(),jc(313,`pre`)(314,`code`),iO(315,`import { RouterModule, Routes } from '@angular/router';

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
`),wg()(),jc(316,`p`),iO(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),wg(),jc(318,`pre`)(319,`code`),iO(320,`import { NgModule } from '@angular/core';

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
`),wg()()(),jc(321,`div`,8)(322,`h4`,9),iO(323,`Seletor`),wg(),jc(324,`pre`,10),iO(325,`<po-menu
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
`),wg()(),jc(326,`h4`,11),iO(327,`Propriedades`),wg(),jc(328,`table`,12)(329,`tr`,13)(330,`th`,14),iO(331,`Nome`),wg(),jc(332,`th`,14),iO(333,`Tipo`),wg(),jc(334,`th`,14),iO(335,`Padrão`),wg(),jc(336,`th`,14),iO(337,`Descrição`),wg()(),jc(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),iO(342,` p-automatic-toggle`),nu(343,`br`),wg()()(),jc(344,`td`,19)(345,`code`,20),iO(346,`boolean`),wg()(),jc(347,`td`,21)(348,`p`)(349,`code`),iO(350,`false`),wg()()(),jc(351,`td`,22)(352,`em`)(353,`strong`),iO(354,`(opcional)`),wg()(),jc(355,`p`),iO(356,`Expande e Colapsa (retrai) o menu automaticamente.`),wg()()(),jc(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),iO(361,` p-collapsed`),nu(362,`br`),wg()()(),jc(363,`td`,19)(364,`code`,20),iO(365,`boolean`),wg()(),jc(366,`td`,21)(367,`p`)(368,`code`),iO(369,`false`),wg()()(),jc(370,`td`,22)(371,`em`)(372,`strong`),iO(373,`(opcional)`),wg()(),jc(374,`p`),iO(375,`Colapsa (retrai) o menu e caso receba o valor `),jc(376,`code`),iO(377,`false`),wg(),iO(378,` expande o menu.`),wg(),jc(379,`blockquote`)(380,`p`),iO(381,`Utilize esta propriedade para iniciar o menu colapsado.`),wg()(),jc(382,`blockquote`)(383,`p`),iO(384,`Ao utilizar os métodos `),jc(385,`a`,23)(386,`code`),iO(387,`colapse`),wg()(),iO(388,`, `),jc(389,`a`,24)(390,`code`),iO(391,`expand`),wg()(),iO(392,` e
`),jc(393,`a`,25)(394,`code`),iO(395,`toggle`),wg()(),iO(396,` o valor desta propriedade não é alterado.`),wg()(),jc(397,`p`)(398,`strong`),iO(399,`Importante:`),wg()(),jc(400,`blockquote`)(401,`p`),iO(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),jc(403,`code`),iO(404,`icon`),wg(),iO(405,` e `),jc(406,`code`),iO(407,`shortLabel`),wg(),iO(408,`.`),wg()()()(),jc(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),iO(413,` p-components-size`),nu(414,`br`),wg()()(),jc(415,`td`,19)(416,`code`,26),iO(417,`string`),wg()(),jc(418,`td`,21)(419,`p`)(420,`code`),iO(421,`medium`),wg()()(),jc(422,`td`,22)(423,`em`)(424,`strong`),iO(425,`(opcional)`),wg()(),jc(426,`p`),iO(427,`Define o tamanho dos componentes de formulário no menu:`),wg(),jc(428,`ul`)(429,`li`)(430,`code`),iO(431,`small`),wg(),iO(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(433,`li`)(434,`code`),iO(435,`medium`),wg(),iO(436,`: aplica a medida medium de cada componente.`),wg()(),jc(437,`blockquote`)(438,`p`),iO(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(440,`code`),iO(441,`medium`),wg(),iO(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(443,`a`,27),iO(444,`po-theme`),wg(),iO(445,`.`),wg()()()(),jc(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),iO(450,` p-filter`),nu(451,`br`),wg()()(),jc(452,`td`,19)(453,`code`,20),iO(454,`boolean`),wg()(),jc(455,`td`,21)(456,`p`)(457,`code`),iO(458,`false`),wg()()(),jc(459,`td`,22)(460,`em`)(461,`strong`),iO(462,`(opcional)`),wg()(),jc(463,`p`),iO(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),jc(465,`code`),iO(466,`p-service`),wg(),iO(467,`.`),wg(),jc(468,`blockquote`)(469,`p`),iO(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),wg()()()(),jc(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),iO(475,` p-logo`),nu(476,`br`),wg()()(),jc(477,`td`,19)(478,`code`,26),iO(479,`string`),wg()(),jc(480,`td`,21),iO(481,`-`),wg(),jc(482,`td`,22)(483,`em`)(484,`strong`),iO(485,`(opcional)`),wg()(),jc(486,`p`),iO(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),wg(),jc(488,`blockquote`)(489,`p`)(490,`strong`),iO(491,`Importante:`),wg()()(),jc(492,`ul`)(493,`li`),iO(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),wg(),jc(495,`li`),iO(496,`Como boa prática, indica-se utilizar imagens com até `),jc(497,`code`),iO(498,`24px`),wg(),iO(499,` de altura e `),jc(500,`code`),iO(501,`224px`),wg(),iO(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),wg()()()(),jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),iO(507,` p-logo-alt`),nu(508,`br`),wg()()(),jc(509,`td`,19)(510,`code`,26),iO(511,`string`),wg()(),jc(512,`td`,21)(513,`p`)(514,`code`),iO(515,`Logomarca início`),wg()()(),jc(516,`td`,22)(517,`em`)(518,`strong`),iO(519,`(opcional)`),wg()(),jc(520,`p`),iO(521,`Define o texto alternativo para a logomarca.`),wg(),jc(522,`blockquote`)(523,`p`)(524,`strong`),iO(525,`Importante`),wg(),iO(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),wg()()()(),jc(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),iO(531,` p-logo-link`),nu(532,`br`),wg()()(),jc(533,`td`,19)(534,`code`,20),iO(535,`boolean `),wg(),jc(536,`code`,26),iO(537,` string`),wg()(),jc(538,`td`,21)(539,`p`)(540,`code`),iO(541,`true`),wg()()(),jc(542,`td`,22)(543,`em`)(544,`strong`),iO(545,`(opcional)`),wg()(),jc(546,`p`),iO(547,`Define o link para a rota ao clicar no logo do menu.`),wg(),jc(548,`ul`)(549,`li`),iO(550,`Se o valor for uma string, define a rota para o link informado.`),wg(),jc(551,`li`),iO(552,`Se for `),jc(553,`code`),iO(554,`false`),wg(),iO(555,`, o logo não terá link associado.`),wg(),jc(556,`li`),iO(557,`Se for `),jc(558,`code`),iO(559,`true`),wg(),iO(560,`, o logo terá a rota padrão `),jc(561,`code`),iO(562,`./`),wg(),iO(563,`.`),wg()()()(),jc(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),iO(568,` p-menus`),nu(569,`br`),wg()()(),jc(570,`td`,19)(571,`code`,28),iO(572,`PoMenuItem[]`),wg()(),jc(573,`td`,21),iO(574,`-`),wg(),jc(575,`td`,22)(576,`p`),iO(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),wg()()(),jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),iO(582,` p-params`),nu(583,`br`),wg()()(),jc(584,`td`,19)(585,`code`,29),iO(586,`any`),wg()(),jc(587,`td`,21),iO(588,`-`),wg(),jc(589,`td`,22)(590,`em`)(591,`strong`),iO(592,`(opcional)`),wg()(),jc(593,`p`),iO(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),wg(),jc(595,`p`),iO(596,`Caso utilizado um serviço customizado, implementando a interface `),jc(597,`code`),iO(598,`PoMenuFilter`),wg(),iO(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),jc(600,`code`),iO(601,`getFilteredData`),wg(),iO(602,`.`),wg(),jc(603,`p`),iO(604,`Quando utilizada uma URL de serviço, será realizado um `),jc(605,`em`),iO(606,`GET`),wg(),iO(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),jc(608,`code`),iO(609,`search`),wg(),iO(610,`, veja exemplo:`),wg(),jc(611,`pre`)(612,`code`),iO(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),wg()()()(),jc(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),iO(618,` p-search-tree-items`),nu(619,`br`),wg()()(),jc(620,`td`,19)(621,`code`,20),iO(622,`boolean`),wg()(),jc(623,`td`,21)(624,`p`)(625,`code`),iO(626,`false`),wg()()(),jc(627,`td`,22)(628,`em`)(629,`strong`),iO(630,`(opcional)`),wg()(),jc(631,`p`),iO(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),wg(),jc(633,`blockquote`)(634,`p`),iO(635,`É necessário que a propriedade `),jc(636,`code`),iO(637,`p-filter`),wg(),iO(638,` esteja habilitada.`),wg()()()(),jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),iO(643,` p-service`),nu(644,`br`),wg()()(),jc(645,`td`,19)(646,`code`,26),iO(647,`string `),wg(),jc(648,`code`,30),iO(649,` PoMenuFilter`),wg()(),jc(650,`td`,21),iO(651,`-`),wg(),jc(652,`td`,22)(653,`em`)(654,`strong`),iO(655,`(opcional)`),wg()(),jc(656,`p`),iO(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),jc(658,`code`),iO(659,`PoMenuFilter`),wg(),iO(660,`.`),wg(),jc(661,`p`),iO(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),jc(663,`a`,31),iO(664,`Guia de implementação de APIs`),wg(),iO(665,` do PO UI.`),wg(),jc(666,`p`),iO(667,`Quando utilizada uma URL de serviço, será realizado um `),jc(668,`em`),iO(669,`GET`),wg(),iO(670,` na URL informada, passando o valor digitado
no par\xE2metro `),jc(671,`code`),iO(672,`search`),wg(),iO(673,`, veja exemplo:`),wg(),jc(674,`blockquote`)(675,`p`),iO(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),jc(677,`code`),iO(678,`tot`),wg(),iO(679,`.`),wg()(),jc(680,`pre`)(681,`code`),iO(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),wg()(),jc(683,`blockquote`)(684,`p`),iO(685,`É necessário que propriedade `),jc(686,`code`),iO(687,`p-filter`),wg(),iO(688,` esteja habilitada.`),wg()()()(),jc(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),iO(693,` p-short-logo`),nu(694,`br`),wg()()(),jc(695,`td`,19)(696,`code`,26),iO(697,`string`),wg()(),jc(698,`td`,21),iO(699,`-`),wg(),jc(700,`td`,22)(701,`em`)(702,`strong`),iO(703,`(opcional)`),wg()(),jc(704,`p`),iO(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),wg(),jc(706,`blockquote`)(707,`p`)(708,`strong`),iO(709,`Importante:`),wg()()(),jc(710,`ul`)(711,`li`),iO(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),jc(713,`code`),iO(714,`p-logo`),wg(),iO(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),wg(),jc(716,`li`),iO(717,`Como boa prática, indica-se utilizar imagens com até `),jc(718,`code`),iO(719,`48px`),wg(),iO(720,` de altura e `),jc(721,`code`),iO(722,`48px`),wg(),iO(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),wg(),jc(724,`li`),iO(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),jc(726,`code`),iO(727,`p-logo`),wg(),iO(728,`.`),wg()()()(),jc(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),iO(733,` (p-toggle)`),nu(734,`br`),wg()()(),jc(735,`td`,19)(736,`code`,34),iO(737,`EventEmitter`),wg()(),jc(738,`td`,21),iO(739,`-`),wg(),jc(740,`td`,22)(741,`em`)(742,`strong`),iO(743,`(opcional)`),wg()(),jc(744,`p`),iO(745,`Evento emitido toda vez que o estado do menu muda, enviando `),jc(746,`code`),iO(747,`true`),wg(),iO(748,` quando expandido e `),jc(749,`code`),iO(750,`false`),wg(),iO(751,` quando colapsado.`),wg(),jc(752,`pre`)(753,`code`,35),iO(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),wg()()()()(),jc(755,`h3`,11),iO(756,`Métodos`),wg(),jc(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),iO(763,` collapse `),wg()()()()(),jc(764,`tr`,22)(765,`td`,22)(766,`p`),nu(767,`a`,38),wg(),jc(768,`p`),iO(769,`Método para colapsar (retrair) o menu.`),wg()()()(),nu(770,`br`),jc(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),iO(777,` expand `),wg()()()()(),jc(778,`tr`,22)(779,`td`,22)(780,`p`),nu(781,`a`,39),wg(),jc(782,`p`),iO(783,`Método para expandir (aumentar) o menu.`),wg()()()(),nu(784,`br`),jc(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),iO(791,` toggle `),wg()()()()(),jc(792,`tr`,22)(793,`td`,22)(794,`p`),nu(795,`a`,40),iO(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),wg(),jc(797,`blockquote`)(798,`p`),iO(799,`Os métodos apenas vão colapsar/expandir o menu se:`),wg()(),jc(800,`ul`)(801,`li`),iO(802,`Todos os itens de menu tiverem valor nas propriedades `),jc(803,`code`),iO(804,`icon`),wg(),iO(805,` e `),jc(806,`code`),iO(807,`shortLabel`),wg(),iO(808,`.`),wg()()()()(),nu(809,`br`),jc(810,`h3`),iO(811,`Interfaces`),wg(),jc(812,`h4`,41)(813,`code`,5),iO(814,`PoMenuFilter`),wg()(),jc(815,`div`,2)(816,`p`),iO(817,`Interface do serviço utilizado no componente `),jc(818,`code`),iO(819,`po-menu`),wg(),iO(820,`.`),wg()(),jc(821,`h4`,11),iO(822,`Métodos`),wg(),jc(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),iO(829,` getFilteredData `),wg()()()()(),jc(830,`tr`,22)(831,`td`,22)(832,`p`),iO(833,`Método responsável por retornar um `),jc(834,`em`),iO(835,`Observable`),wg(),iO(836,` que retorne uma lista de objetos que seguem a interface `),jc(837,`code`),iO(838,`PoMenuItemFiltered`),wg(),iO(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),jc(840,`code`),iO(841,`p-params`),wg(),iO(842,`.`),wg()()()(),jc(843,`h5`)(844,`b`),iO(845,`Parâmetros`),wg()(),jc(846,`table`,12)(847,`tr`,13)(848,`th`,14),iO(849,`Nome`),wg(),jc(850,`th`,14),iO(851,`Tipo`),wg(),jc(852,`th`,14),iO(853,`Descrição`),wg()(),jc(854,`tr`,15)(855,`td`,16),iO(856,` search`),wg(),jc(857,`td`,19)(858,`code`,42),iO(859,` string `),wg()(),jc(860,`td`,22)(861,`p`),iO(862,`Valor informado no campo de busca dos itens de menus.`),wg()()(),jc(863,`tr`,15)(864,`td`,16),iO(865,` params`),wg(),jc(866,`td`,19)(867,`code`,42),iO(868,` any `),wg()(),jc(869,`td`,22)(870,`p`),iO(871,`Valor informado através da propriedade `),jc(872,`code`),iO(873,`p-params`),wg(),iO(874,`.`),wg()()()(),nu(875,`br`),jc(876,`h4`,41)(877,`code`,5),iO(878,`PoMenuItemBadge`),wg()(),jc(879,`div`,2)(880,`p`),iO(881,`Interface do `),jc(882,`em`),iO(883,`badge`),wg(),iO(884,` utilizado no `),jc(885,`code`),iO(886,`po-menu`),wg(),iO(887,`.`),wg()(),jc(888,`h4`,11),iO(889,`Propriedades`),wg(),jc(890,`table`,12)(891,`tr`,13)(892,`th`,14),iO(893,`Nome`),wg(),jc(894,`th`,14),iO(895,`Tipo`),wg(),jc(896,`th`,14),iO(897,`Descrição`),wg()(),jc(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),iO(902,` color`),nu(903,`br`),wg()()(),jc(904,`td`,19)(905,`code`,26),iO(906,`string`),wg()(),jc(907,`td`,22)(908,`em`)(909,`strong`),iO(910,`(opcional)`),wg()(),jc(911,`p`),iO(912,`Define a cor do `),jc(913,`em`),iO(914,`badge`),wg(),iO(915,` e aceita os valores:`),wg(),jc(916,`p`),nu(917,`span`,43),jc(918,`code`),iO(919,`color-01`),wg()(),jc(920,`p`),nu(921,`span`,44),jc(922,`code`),iO(923,`color-02`),wg()(),jc(924,`p`),nu(925,`span`,45),jc(926,`code`),iO(927,`color-03`),wg()(),jc(928,`p`),nu(929,`span`,46),jc(930,`code`),iO(931,`color-04`),wg()(),jc(932,`p`),nu(933,`span`,47),jc(934,`code`),iO(935,`color-05`),wg()(),jc(936,`p`),nu(937,`span`,48),jc(938,`code`),iO(939,`color-06`),wg()(),jc(940,`p`),nu(941,`span`,49),jc(942,`code`),iO(943,`color-07`),wg()(),jc(944,`p`),nu(945,`span`,50),jc(946,`code`),iO(947,`color-08`),wg()(),jc(948,`p`),nu(949,`span`,51),jc(950,`code`),iO(951,`color-09`),wg()(),jc(952,`p`),nu(953,`span`,52),jc(954,`code`),iO(955,`color-10`),wg()(),jc(956,`p`),nu(957,`span`,53),jc(958,`code`),iO(959,`color-11`),wg()(),jc(960,`p`),nu(961,`span`,54),jc(962,`code`),iO(963,`color-12`),wg()()()(),jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),iO(968,` value`),nu(969,`br`),wg()()(),jc(970,`td`,19)(971,`code`,55),iO(972,`number`),wg()(),jc(973,`td`,22)(974,`p`),iO(975,`Número exibido no `),jc(976,`em`),iO(977,`badge`),wg(),iO(978,`, caso o mesmo seja maior que `),jc(979,`strong`),iO(980,`9`),wg(),iO(981,` o mesmo exibe `),jc(982,`strong`),iO(983,`9+`),wg(),iO(984,`.`),wg()()()(),jc(985,`h4`,41)(986,`code`,5),iO(987,`PoMenuItemFiltered`),wg()(),jc(988,`div`,2)(989,`p`),iO(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),jc(991,`code`),iO(992,`po-menu`),wg(),iO(993,`.`),wg()(),jc(994,`h4`,11),iO(995,`Propriedades`),wg(),jc(996,`table`,12)(997,`tr`,13)(998,`th`,14),iO(999,`Nome`),wg(),jc(1e3,`th`,14),iO(1001,`Tipo`),wg(),jc(1002,`th`,14),iO(1003,`Descrição`),wg()(),jc(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),iO(1008,` action`),nu(1009,`br`),wg()()(),jc(1010,`td`,19)(1011,`code`,56),iO(1012,`() => void`),wg()(),jc(1013,`td`,22)(1014,`p`),iO(1015,`Ação a ser executada quando o item de menu for clicado.`),wg()()(),jc(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),iO(1020,` label`),nu(1021,`br`),wg()()(),jc(1022,`td`,19)(1023,`code`,26),iO(1024,`string`),wg()(),jc(1025,`td`,22)(1026,`p`),iO(1027,`Texto do item de menu.`),wg()()(),jc(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),iO(1032,` link`),nu(1033,`br`),wg()()(),jc(1034,`td`,19)(1035,`code`,26),iO(1036,`string`),wg()(),jc(1037,`td`,22)(1038,`p`),iO(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),jc(1040,`em`),iO(1041,`link`),wg(),iO(1042,` interno ou externo.`),wg()()()(),jc(1043,`h4`,41)(1044,`code`,5),iO(1045,`PoMenuItem`),wg()(),jc(1046,`div`,2)(1047,`p`),iO(1048,`Interface para os itens de menu do componente po-menu.`),wg()(),jc(1049,`h4`,11),iO(1050,`Propriedades`),wg(),jc(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),iO(1054,`Nome`),wg(),jc(1055,`th`,14),iO(1056,`Tipo`),wg(),jc(1057,`th`,14),iO(1058,`Descrição`),wg()(),jc(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),iO(1063,` action`),nu(1064,`br`),wg()()(),jc(1065,`td`,19)(1066,`code`,57),iO(1067,`Function`),wg()(),jc(1068,`td`,22)(1069,`em`)(1070,`strong`),iO(1071,`(opcional)`),wg()(),jc(1072,`p`),iO(1073,`Ação personalizada para clique do item de menu.`),wg()()(),jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),iO(1078,` badge`),nu(1079,`br`),wg()()(),jc(1080,`td`,19)(1081,`code`,58),iO(1082,`PoMenuItemBadge`),wg()(),jc(1083,`td`,22)(1084,`em`)(1085,`strong`),iO(1086,`(opcional)`),wg()(),jc(1087,`p`),iO(1088,`Badge do item de menu.`),wg(),jc(1089,`p`),iO(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),wg(),jc(1091,`blockquote`)(1092,`p`),iO(1093,`O `),jc(1094,`code`),iO(1095,`po-badge`),wg(),iO(1096,` só será exibido caso o item do menu não possua `),jc(1097,`code`),iO(1098,`subItems`),wg(),iO(1099,` e seu valor seja maior ou igual a 0.`),wg()()()(),jc(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),iO(1104,` icon`),nu(1105,`br`),wg()()(),jc(1106,`td`,19)(1107,`code`,26),iO(1108,`string `),wg(),jc(1109,`code`,59),iO(1110,` TemplateRef<void>`),wg()(),jc(1111,`td`,22)(1112,`em`)(1113,`strong`),iO(1114,`(opcional)`),wg()(),jc(1115,`p`),iO(1116,`É possível usar qualquer um dos ícones da `),jc(1117,`a`,60),iO(1118,`Biblioteca de ícones`),wg(),iO(1119,`. conforme exemplo abaixo:`),wg(),jc(1120,`pre`)(1121,`code`),iO(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),wg()(),jc(1123,`p`),iO(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(1125,`pre`)(1126,`code`),iO(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),wg()(),jc(1128,`p`),iO(1129,`Outra opção seria a customização do ícone através do `),jc(1130,`code`),iO(1131,`TemplateRef`),wg(),iO(1132,`, conforme exemplo abaixo:
component.html:`),wg(),jc(1133,`pre`)(1134,`code`),iO(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),wg()(),jc(1136,`p`),iO(1137,`component.ts:`),wg(),jc(1138,`pre`)(1139,`code`),iO(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),wg()(),jc(1141,`blockquote`)(1142,`p`),iO(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),wg()()()(),jc(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),iO(1148,` label`),nu(1149,`br`),wg()()(),jc(1150,`td`,19)(1151,`code`,26),iO(1152,`string`),wg()(),jc(1153,`td`,22)(1154,`p`),iO(1155,`Texto do item de menu.`),wg()()(),jc(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),iO(1160,` link`),nu(1161,`br`),wg()()(),jc(1162,`td`,19)(1163,`code`,26),iO(1164,`string`),wg()(),jc(1165,`td`,22)(1166,`em`)(1167,`strong`),iO(1168,`(opcional)`),wg()(),jc(1169,`p`),iO(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),wg()()(),jc(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),iO(1175,` shortLabel`),nu(1176,`br`),wg()()(),jc(1177,`td`,19)(1178,`code`,26),iO(1179,`string`),wg()(),jc(1180,`td`,22)(1181,`em`)(1182,`strong`),iO(1183,`(opcional)`),wg()(),jc(1184,`p`),iO(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),wg()()(),jc(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),iO(1190,` subItems`),nu(1191,`br`),wg()()(),jc(1192,`td`,19)(1193,`code`,61),iO(1194,`Array<PoMenuItem>`),wg()(),jc(1195,`td`,22)(1196,`em`)(1197,`strong`),iO(1198,`(opcional)`),wg()(),jc(1199,`p`),iO(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-menu-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-menu-basic-view`)(6,`sample-po-menu-labs-view`)(7,`sample-po-menu-human-resources-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ve,Me,ye,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(je),C1]})}return a})();var _t=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,_e]})}return a})();export{_t as DocPoMenuModule};