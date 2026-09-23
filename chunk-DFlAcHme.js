import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as L8e,$i as ow,$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht,In as ys,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,L as Gbe,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Mr as QO,Ni as he,P as Eu,Qi as oN,Qn as EN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_r as Ml,an as k4,ar as IY,at as N8e,b as $be,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,er as FN,ga as w,ir as I,kn as vr,kr as PN,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var Oe=()=>({name:`Registro 1`,email:`register@po-ui.com`});var He=()=>({name:`Registro 2`,email:`register2@po-ui.com`});var Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Ml(0,`div`,2),ql(1,`po-info`,3),lg()),a&2){let o=C.$implicit;Up(),cw(`p-value`,o.email)}}var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:6,consts:[[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(l,n){l&1&&(Ml(0,`po-list-view`,0),ow(1,je,2,1,`ng-template`,1),lg()),l&2&&cw(`p-items`,RN(3,Be,TN(1,Oe),TN(2,He)))},dependencies:[kbe,L8e,Gbe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO List View Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-list-view
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-list-view-basic/sample-po-list-view-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-list-view-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ze,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_e],encapsulation:2,changeDetection:1})}return a})();function We(a,C){if(a&1&&(Ml(0,`div`,5),ql(1,`po-info`,22)(2,`po-info`,23)(3,`po-info`,24)(4,`po-info`,25),lg()),a&2){let o=C.$implicit;Up(),cw(`p-value`,o.name),Up(),cw(`p-value`,o.email),Up(),cw(`p-value`,o.location),Up(),cw(`p-value`,o.phone)}}function Re(a,C){if(a&1&&(Ml(0,`div`,5),ql(1,`po-info`,26)(2,`po-info`,27),lg()),a&2){let o=C.$implicit;Up(),cw(`p-value`,o.company),Up(),cw(`p-value`,o.zipCode)}}var De=(()=>{class a{poNotification=f(Eu);action;actions;componentsSize=`medium`;customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyLink=`url`,this.propertyLinkValue=``,this.propertyTitle=``,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:``,visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:35,vars:30,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-property-link`,`p-property-title`,`p-select`,`p-show-more-disabled`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`propertyTitle`,`p-help`,`Ex.: email`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-help`,`Ex.: 200`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertyLinkValue`,`p-help`,`Ex.: "http://po.com.br"`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,`p-help`,`To enable the "Hide Select All" option, you must select the "Select" option first.`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(l,n){if(l&1){let d=Vx();Ml(0,`po-list-view`,2),ht(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),ow(1,We,5,4,`ng-template`,3)(2,Re,3,2,`ng-template`,4),lg(),ql(3,`po-divider`),Ml(4,`div`,5)(5,`po-button`,6),ht(`p-click`,function(){return n.addItem()}),lg()(),ql(6,`po-divider`),Ml(7,`div`,5),ql(8,`po-info`,7),lg(),ql(9,`po-divider`),Ml(10,`form`,null,0)(12,`div`,5)(13,`po-select`,8),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.propertyTitle,p)||(n.propertyTitle=p),Jy(p)}),lg(),f0(),Ml(14,`po-number`,9),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.height,p)||(n.height=p),Jy(p)}),ht(`p-change`,function(){return n.changeLiterals()}),lg(),f0(),Ml(15,`po-input`,10),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),Jy(p)}),lg(),f0(),Ml(16,`po-input`,11),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.literals,p)||(n.literals=p),Jy(p)}),ht(`p-change`,function(){return n.changeLiterals()}),lg(),f0(),Ml(17,`po-radio-group`,12),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.componentsSize,p)||(n.componentsSize=p),Jy(p)}),lg(),f0(),lg(),Ml(18,`div`,5)(19,`po-checkbox-group`,13),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.properties,p)||(n.properties=p),Jy(p)}),ht(`p-change`,function(){return n.changeActionOptions()}),lg(),f0(),lg()(),ql(20,`po-divider`),Ml(21,`form`,null,1)(23,`div`,5)(24,`po-input`,14),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action.action,p)||(n.action.action=p),Jy(p)}),lg(),f0(),Ml(25,`po-input`,15),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action.label,p)||(n.action.label=p),Jy(p)}),lg(),f0(),Ml(26,`po-input`,16),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action.url,p)||(n.action.url=p),Jy(p)}),lg(),f0(),Ml(27,`po-select`,17),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action.type,p)||(n.action.type=p),Jy(p)}),lg(),f0(),Ml(28,`po-select`,18),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action.icon,p)||(n.action.icon=p),Jy(p)}),lg(),f0(),Ml(29,`po-checkbox-group`,19),Mw(`ngModelChange`,function(p){return Qy(d),yN(n.action,p)||(n.action=p),Jy(p)}),lg(),f0(),lg(),Ml(30,`div`,5)(31,`po-button`,20),ht(`p-click`,function(){return n.addAction(n.action)}),lg()()(),ql(32,`po-divider`),Ml(33,`div`,5)(34,`po-button`,21),ht(`p-click`,function(){return Qy(d),Yx(22).reset(),Jy(n.restore())}),lg()()}if(l&2){let d=Yx(22);cw(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-property-link`,n.propertyLink)(`p-property-title`,n.propertyTitle)(`p-select`,n.properties.includes(`select`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`)),Up(8),cw(`p-value`,n.titleAction),Up(5),Tw(`ngModel`,n.propertyTitle),cw(`p-options`,n.propertyTitleOptions),p0(),Up(),Tw(`ngModel`,n.height),p0(),Up(),Tw(`ngModel`,n.propertyLinkValue),p0(),Up(),Tw(`ngModel`,n.literals),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0(),Up(2),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(5),Tw(`ngModel`,n.action.action),p0(),Up(),Tw(`ngModel`,n.action.label),p0(),Up(),Tw(`ngModel`,n.action.url),p0(),Up(),Tw(`ngModel`,n.action.type),cw(`p-options`,n.typeOptions),p0(),Up(),Tw(`ngModel`,n.action.icon),cw(`p-options`,n.iconOptions),p0(),Up(),Tw(`ngModel`,n.action),cw(`p-options`,n.actionOptions),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,Tbe,kbe,L8e,Gbe,$be],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO List View Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-list-view
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-list-view-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ue,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,De],encapsulation:2,changeDetection:1})}return a})();var J=(()=>{class a{getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`},{hireStatus:`progress`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`},{hireStatus:`progress`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`}]}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var $e=[`detailsModal`];function Qe(a,C){if(a&1&&(Ml(0,`div`,6),ql(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),PN(4,`uppercase`),lg()),a&2){let o=C.$implicit;Up(),cw(`p-value`,o.idCard),Up(),cw(`p-value`,o.jobDescription),Up(),cw(`p-value`,EN(FN(4,4,o.hireStatus)))}}function Ye(a,C){if(a&1&&(Ml(0,`div`,6),ql(1,`po-info`,17)(2,`po-info`,18),lg()),a&2){let o=C.$implicit;Up(),cw(`p-value`,o.age),Up(),cw(`p-value`,o.city)}}var Me=(()=>{class a{poNotification=f(Eu);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let l=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case`progress`:o.call(this,l);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`);break}l.$selected=!1}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(l,n){if(l&1&&Zl($e,7),l&2){let d;lo(d=uo())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[Ce([J])],decls:16,vars:11,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-property-link`,`url`,`p-property-title`,`name`,`p-select`,``,3,`p-title-action`,`p-actions`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(l,n){l&1&&(Ml(0,`po-page-list`,1)(1,`po-list-view`,2),ht(`p-title-action`,function(c){return n.showDetailModal(c)}),ow(2,Qe,5,6,`ng-template`,3)(3,Ye,3,2,`ng-template`,4),lg(),Ml(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),ql(8,`po-avatar`,8),lg(),Ml(9,`div`,9)(10,`div`,10),ql(11,`po-tag`,11),lg(),Ml(12,`div`,10),ql(13,`po-info`,12),lg(),Ml(14,`div`,10),ql(15,`po-info`,13),lg()()()()()),l&2&&(cw(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),Up(),cw(`p-actions`,n.actions)(`p-items`,n.hiringProcessesFiltered),Up(),cw(`p-title`,n.formatTitle),Up(),cw(`p-show-detail`,n.showDetail),Up(),cw(`p-title`,n.titleDetailsModal),Up(7),cw(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),Up(2),cw(`p-value`,n.selectedActionItem.email),Up(2),cw(`p-value`,n.selectedActionItem.telephone))},dependencies:[k4,ys,kbe,L8e,Gbe,$be,vr,N8e,QO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO List View - Hiring Processes`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-list-view-hiring-processes`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ke,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Me],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:707,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(l,n){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-list-view`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoListViewComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Ml(18,`em`),mN(19,`templates`),lg(),Ml(20,`strong`)(21,`a`,6),mN(22,`p-list-view-content-template`),lg()(),mN(23,` e
`),Ml(24,`strong`)(25,`a`,7),mN(26,`p-list-view-detail-template`),lg()(),mN(27,`.`),lg(),Ml(28,`p`),mN(29,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Ml(30,`strong`)(31,`a`,7),mN(32,`p-list-view-detail-template`),lg()(),mN(33,`. `),lg()(),Ml(34,`div`,8)(35,`h4`,9),mN(36,`Seletor`),lg(),Ml(37,`pre`,10),mN(38,`<po-list-view
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
`),lg()(),Ml(39,`h4`,11),mN(40,`Propriedades`),lg(),Ml(41,`table`,12)(42,`tr`,13)(43,`th`,14),mN(44,`Nome`),lg(),Ml(45,`th`,14),mN(46,`Tipo`),lg(),Ml(47,`th`,14),mN(48,`Padrão`),lg(),Ml(49,`th`,14),mN(50,`Descrição`),lg()(),Ml(51,`tr`,15)(52,`td`,16)(53,`div`,17)(54,`span`,18),mN(55,` p-actions`),ql(56,`br`),lg()()(),Ml(57,`td`,19)(58,`code`,20),mN(59,`PoListViewAction[]`),lg()(),Ml(60,`td`,21),mN(61,`-`),lg(),Ml(62,`td`,22)(63,`em`)(64,`strong`),mN(65,`(opcional)`),lg()(),Ml(66,`p`),mN(67,`Lista de ações que serão exibidas no componente.`),lg()()(),Ml(68,`tr`,15)(69,`td`,16)(70,`div`,17)(71,`span`,18),mN(72,` p-components-size`),ql(73,`br`),lg()()(),Ml(74,`td`,19)(75,`code`,23),mN(76,`string`),lg()(),Ml(77,`td`,21)(78,`p`)(79,`code`),mN(80,`medium`),lg()()(),Ml(81,`td`,22)(82,`em`)(83,`strong`),mN(84,`(opcional)`),lg()(),Ml(85,`p`),mN(86,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(87,`ul`)(88,`li`)(89,`code`),mN(90,`small`),lg(),mN(91,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(92,`li`)(93,`code`),mN(94,`medium`),lg(),mN(95,`: aplica a medida medium de cada componente.`),lg()(),Ml(96,`blockquote`)(97,`p`),mN(98,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(99,`code`),mN(100,`medium`),lg(),mN(101,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(102,`a`,24),mN(103,`po-theme`),lg(),mN(104,`.`),lg()()()(),Ml(105,`tr`,15)(106,`td`,16)(107,`div`,17)(108,`span`,18),mN(109,` p-height`),ql(110,`br`),lg()()(),Ml(111,`td`,19)(112,`code`,25),mN(113,`number`),lg()(),Ml(114,`td`,21),mN(115,`-`),lg(),Ml(116,`td`,22)(117,`em`)(118,`strong`),mN(119,`(opcional)`),lg()(),Ml(120,`p`),mN(121,`Define a altura do `),Ml(122,`code`),mN(123,`po-list-view`),lg(),mN(124,` em `),Ml(125,`em`),mN(126,`pixels`),lg(),mN(127,`.`),lg()()(),Ml(128,`tr`,15)(129,`td`,16)(130,`div`,17)(131,`span`,18),mN(132,` p-hide-select-all`),ql(133,`br`),lg()()(),Ml(134,`td`,19)(135,`code`,26),mN(136,`boolean`),lg()(),Ml(137,`td`,21)(138,`p`)(139,`code`),mN(140,`false`),lg()()(),Ml(141,`td`,22)(142,`p`),mN(143,`Esconde o `),Ml(144,`em`),mN(145,`checkbox`),lg(),mN(146,` para seleção de todos os itens.`),lg()()(),Ml(147,`tr`,15)(148,`td`,16)(149,`div`,17)(150,`span`,18),mN(151,` p-items`),ql(152,`br`),lg()()(),Ml(153,`td`,19)(154,`code`,27),mN(155,`any[]`),lg()(),Ml(156,`td`,21),mN(157,`-`),lg(),Ml(158,`td`,22)(159,`p`),mN(160,`Lista de itens que serão exibidos no componente.`),lg()()(),Ml(161,`tr`,15)(162,`td`,16)(163,`div`,17)(164,`span`,18),mN(165,` p-literals`),ql(166,`br`),lg()()(),Ml(167,`td`,19)(168,`code`,28),mN(169,`PoListViewLiterals`),lg()(),Ml(170,`td`,21),mN(171,`-`),lg(),Ml(172,`td`,22)(173,`em`)(174,`strong`),mN(175,`(opcional)`),lg()(),Ml(176,`p`),mN(177,`Objeto com as literais usadas no `),Ml(178,`code`),mN(179,`po-list-view`),lg(),mN(180,`.`),lg(),Ml(181,`p`),mN(182,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(183,`pre`)(184,`code`),mN(185,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),lg()(),Ml(186,`p`),mN(187,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(188,`pre`)(189,`code`),mN(190,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),lg()(),Ml(191,`p`),mN(192,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(193,`pre`)(194,`code`),mN(195,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),lg()(),Ml(196,`blockquote`)(197,`p`),mN(198,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(199,`a`,29)(200,`code`),mN(201,`PoI18nService`),lg()(),mN(202,` ou do browser.`),lg()()()(),Ml(203,`tr`,15)(204,`td`,16)(205,`div`,17)(206,`span`,18),mN(207,` p-property-link`),ql(208,`br`),lg()()(),Ml(209,`td`,19)(210,`code`,23),mN(211,`string`),lg()(),Ml(212,`td`,21),mN(213,`-`),lg(),Ml(214,`td`,22)(215,`em`)(216,`strong`),mN(217,`(opcional)`),lg()(),Ml(218,`p`),mN(219,`Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será usado como link para o título.`),lg()()(),Ml(220,`tr`,15)(221,`td`,16)(222,`div`,17)(223,`span`,18),mN(224,` p-property-title`),ql(225,`br`),lg()()(),Ml(226,`td`,19)(227,`code`,23),mN(228,`string`),lg()(),Ml(229,`td`,21),mN(230,`-`),lg(),Ml(231,`td`,22)(232,`em`)(233,`strong`),mN(234,`(opcional)`),lg()(),Ml(235,`p`),mN(236,`Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será exibido como o título de cada item.`),lg()()(),Ml(237,`tr`,15)(238,`td`,16)(239,`div`,17)(240,`span`,18),mN(241,` p-select`),ql(242,`br`),lg()()(),Ml(243,`td`,19)(244,`code`,26),mN(245,`boolean`),lg()(),Ml(246,`td`,21)(247,`p`)(248,`code`),mN(249,`false`),lg()()(),Ml(250,`td`,22)(251,`em`)(252,`strong`),mN(253,`(opcional)`),lg()(),Ml(254,`p`),mN(255,`Habilita um `),Ml(256,`em`),mN(257,`checkbox`),lg(),mN(258,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),Ml(259,`code`),mN(260,`$selected`),lg(),mN(261,` para identificar se o
item est\xE1 selecionado, por exemplo:`),lg(),Ml(262,`pre`)(263,`code`),mN(264,`item.$selected

// ou

item['$selected']
`),lg()()()(),Ml(265,`tr`,15)(266,`td`,16)(267,`div`,30)(268,`span`,31),mN(269,` (p-show-detail)`),ql(270,`br`),lg()()(),Ml(271,`td`,19)(272,`code`,32),mN(273,`EventEmitter`),lg()(),Ml(274,`td`,21),mN(275,`-`),lg(),Ml(276,`td`,22)(277,`em`)(278,`strong`),mN(279,`(opcional)`),lg()(),Ml(280,`p`),mN(281,`Ação que será executada ao clicar no botão exibir detalhes.`),lg(),Ml(282,`p`),mN(283,`Ao ser disparado, o método passa como parâmetros os detalhes que serão exibidos.`),lg()()(),Ml(284,`tr`,15)(285,`td`,16)(286,`div`,30)(287,`span`,31),mN(288,` (p-show-more)`),ql(289,`br`),lg()()(),Ml(290,`td`,19)(291,`code`,32),mN(292,`EventEmitter`),lg()(),Ml(293,`td`,21),mN(294,`-`),lg(),Ml(295,`td`,22)(296,`em`)(297,`strong`),mN(298,`(opcional)`),lg()(),Ml(299,`p`),mN(300,`Recebe uma ação, que será executada quando clicar no botão "Carregar mais resultados".`),lg(),Ml(301,`blockquote`)(302,`p`),mN(303,`Caso nenhuma ação for definida o mesmo não ficará visível.`),lg()()()(),Ml(304,`tr`,15)(305,`td`,16)(306,`div`,17)(307,`span`,18),mN(308,` p-show-more-disabled`),ql(309,`br`),lg()()(),Ml(310,`td`,19)(311,`code`,26),mN(312,`boolean`),lg()(),Ml(313,`td`,21),mN(314,`-`),lg(),Ml(315,`td`,22)(316,`em`)(317,`strong`),mN(318,`(opcional)`),lg()(),Ml(319,`p`),mN(320,`Indica que o botão `),Ml(321,`code`),mN(322,`Carregar Mais Resultados`),lg(),mN(323,` será desabilitado.`),lg()()(),Ml(324,`tr`,15)(325,`td`,16)(326,`div`,30)(327,`span`,31),mN(328,` (p-title-action)`),ql(329,`br`),lg()()(),Ml(330,`td`,19)(331,`code`,32),mN(332,`EventEmitter`),lg()(),Ml(333,`td`,21),mN(334,`-`),lg(),Ml(335,`td`,22)(336,`em`)(337,`strong`),mN(338,`(opcional)`),lg()(),Ml(339,`p`),mN(340,`Ação que será executada ao clicar no título.`),lg(),Ml(341,`p`),mN(342,`Ao ser disparado, o método inserido na ação irá receber como parâmetro o item da lista clicado.`),lg()()()(),Ml(343,`h3`),mN(344,`Interfaces`),lg(),Ml(345,`h4`,33)(346,`code`,5),mN(347,`PoListViewAction`),lg()(),Ml(348,`div`,2)(349,`p`),mN(350,`Interface que define as ações do componente `),Ml(351,`code`),mN(352,`po-list-view`),lg(),mN(353,`.`),lg(),Ml(354,`blockquote`)(355,`p`),mN(356,`As propriedades `),Ml(357,`code`),mN(358,`subItems`),lg(),mN(359,`, `),Ml(360,`code`),mN(361,`separator`),lg(),mN(362,`, `),Ml(363,`code`),mN(364,`url`),lg(),mN(365,` e `),Ml(366,`code`),mN(367,`selected`),lg(),mN(368,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),lg()()(),Ml(369,`h4`,11),mN(370,`Propriedades`),lg(),Ml(371,`table`,12)(372,`tr`,13)(373,`th`,14),mN(374,`Nome`),lg(),Ml(375,`th`,14),mN(376,`Tipo`),lg(),Ml(377,`th`,14),mN(378,`Descrição`),lg()(),Ml(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),mN(383,` action`),ql(384,`br`),lg()()(),Ml(385,`td`,19)(386,`code`,34),mN(387,`Function`),lg()(),Ml(388,`td`,22)(389,`em`)(390,`strong`),mN(391,`(opcional)`),lg()(),Ml(392,`p`),mN(393,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(394,`p`),mN(395,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(396,`code`),mN(397,`subItems`),lg(),mN(398,`.`),lg(),Ml(399,`blockquote`)(400,`p`),mN(401,`Para que a função seja executada no contexto do componente, utilize `),Ml(402,`em`),mN(403,`bind`),lg(),mN(404,`:
`),Ml(405,`code`),mN(406,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(407,`tr`,15)(408,`td`,16)(409,`div`,17)(410,`span`,18),mN(411,` disabled`),ql(412,`br`),lg()()(),Ml(413,`td`,19)(414,`code`,26),mN(415,`boolean `),lg(),Ml(416,`code`,34),mN(417,` Function`),lg()(),Ml(418,`td`,22)(419,`em`)(420,`strong`),mN(421,`(opcional)`),lg()(),Ml(422,`p`),mN(423,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(424,`tr`,15)(425,`td`,16)(426,`div`,17)(427,`span`,18),mN(428,` icon`),ql(429,`br`),lg()()(),Ml(430,`td`,19)(431,`code`,23),mN(432,`string `),lg(),Ml(433,`code`,35),mN(434,` TemplateRef<void>`),lg()(),Ml(435,`td`,22)(436,`em`)(437,`strong`),mN(438,`(opcional)`),lg()(),Ml(439,`p`),mN(440,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(441,`p`),mN(442,`Aceita ícones da `),Ml(443,`a`,36),mN(444,`Biblioteca de ícones`),lg(),mN(445,`, fontes externas (ex: Font Awesome)
ou um `),Ml(446,`code`),mN(447,`TemplateRef`),lg(),mN(448,` para ícones customizados.`),lg(),Ml(449,`pre`)(450,`code`),mN(451,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(452,`tr`,15)(453,`td`,16)(454,`div`,17)(455,`span`,18),mN(456,` label`),ql(457,`br`),lg()()(),Ml(458,`td`,19)(459,`code`,23),mN(460,`string`),lg()(),Ml(461,`td`,22)(462,`p`),mN(463,`Rótulo da ação.`),lg(),Ml(464,`p`),mN(465,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(466,`code`),mN(467,`subItems`),lg(),mN(468,`.`),lg()()(),Ml(469,`tr`,15)(470,`td`,16)(471,`div`,17)(472,`span`,18),mN(473,` selected`),ql(474,`br`),lg()()(),Ml(475,`td`,19)(476,`code`,26),mN(477,`boolean`),lg()(),Ml(478,`td`,22)(479,`em`)(480,`strong`),mN(481,`(opcional)`),lg()(),Ml(482,`p`),mN(483,`Define se a ação está selecionada.`),lg()()(),Ml(484,`tr`,15)(485,`td`,16)(486,`div`,17)(487,`span`,18),mN(488,` separator`),ql(489,`br`),lg()()(),Ml(490,`td`,19)(491,`code`,26),mN(492,`boolean`),lg()(),Ml(493,`td`,22)(494,`em`)(495,`strong`),mN(496,`(opcional)`),lg()(),Ml(497,`p`),mN(498,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(499,`tr`,15)(500,`td`,16)(501,`div`,17)(502,`span`,18),mN(503,` subItems`),ql(504,`br`),lg()()(),Ml(505,`td`,19)(506,`code`,37),mN(507,`Array<PoPopupAction>`),lg()(),Ml(508,`td`,22)(509,`em`)(510,`strong`),mN(511,`(opcional)`),lg()(),Ml(512,`p`),mN(513,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(514,`p`),mN(515,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(516,`blockquote`)(517,`p`),mN(518,`As propriedades `),Ml(519,`code`),mN(520,`disabled`),lg(),mN(521,`, `),Ml(522,`code`),mN(523,`type`),lg(),mN(524,` e `),Ml(525,`code`),mN(526,`visible`),lg(),mN(527,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(528,`blockquote`)(529,`p`),mN(530,`Quando `),Ml(531,`code`),mN(532,`url`),lg(),mN(533,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(534,`blockquote`)(535,`p`),mN(536,`Em subníveis aninhados, o `),Ml(537,`code`),mN(538,`icon`),lg(),mN(539,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(540,`tr`,15)(541,`td`,16)(542,`div`,17)(543,`span`,18),mN(544,` type`),ql(545,`br`),lg()()(),Ml(546,`td`,19)(547,`code`,23),mN(548,`string`),lg()(),Ml(549,`td`,22)(550,`em`)(551,`strong`),mN(552,`(opcional)`),lg()(),Ml(553,`p`),mN(554,`Define a cor do item.`),lg(),Ml(555,`p`),mN(556,`Valores válidos:`),lg(),Ml(557,`ul`)(558,`li`)(559,`code`),mN(560,`default`),lg()(),Ml(561,`li`)(562,`code`),mN(563,`danger`),lg()()()()(),Ml(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),mN(568,` url`),ql(569,`br`),lg()()(),Ml(570,`td`,19)(571,`code`,23),mN(572,`string`),lg()(),Ml(573,`td`,22)(574,`em`)(575,`strong`),mN(576,`(opcional)`),lg()(),Ml(577,`p`),mN(578,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(579,`p`),mN(580,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(581,`code`),mN(582,`url`),lg(),mN(583,` é informada em um agrupador, o clique `),Ml(584,`strong`),mN(585,`não abrirá os subitens`),lg(),mN(586,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(587,`blockquote`)(588,`p`),mN(589,`Quando informada, tem prioridade sobre a propriedade `),Ml(590,`code`),mN(591,`action`),lg(),mN(592,`.`),lg()()()(),Ml(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),mN(597,` visible`),ql(598,`br`),lg()()(),Ml(599,`td`,19)(600,`code`,26),mN(601,`boolean `),lg(),Ml(602,`code`,34),mN(603,` Function`),lg()(),Ml(604,`td`,22)(605,`em`)(606,`strong`),mN(607,`(opcional)`),lg()(),Ml(608,`p`),mN(609,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(610,`h4`,33)(611,`code`,5),mN(612,`PoListViewLiterals`),lg()(),Ml(613,`div`,2)(614,`p`),mN(615,`Interface para definição das literais usadas no `),Ml(616,`code`),mN(617,`po-list-view`),lg(),mN(618,`.`),lg()(),Ml(619,`h4`,11),mN(620,`Propriedades`),lg(),Ml(621,`table`,12)(622,`tr`,13)(623,`th`,14),mN(624,`Nome`),lg(),Ml(625,`th`,14),mN(626,`Tipo`),lg(),Ml(627,`th`,14),mN(628,`Descrição`),lg()(),Ml(629,`tr`,15)(630,`td`,16)(631,`div`,17)(632,`span`,18),mN(633,` hideDetails`),ql(634,`br`),lg()()(),Ml(635,`td`,19)(636,`code`,23),mN(637,`string`),lg()(),Ml(638,`td`,22)(639,`em`)(640,`strong`),mN(641,`(opcional)`),lg()(),Ml(642,`p`),mN(643,`Rótulo do botão que oculta os detalhes do item.`),lg()()(),Ml(644,`tr`,15)(645,`td`,16)(646,`div`,17)(647,`span`,18),mN(648,` loadMoreData`),ql(649,`br`),lg()()(),Ml(650,`td`,19)(651,`code`,23),mN(652,`string`),lg()(),Ml(653,`td`,22)(654,`em`)(655,`strong`),mN(656,`(opcional)`),lg()(),Ml(657,`p`),mN(658,`Rótulo do botão que deve carregar mais resultados.`),lg()()(),Ml(659,`tr`,15)(660,`td`,16)(661,`div`,17)(662,`span`,18),mN(663,` noData`),ql(664,`br`),lg()()(),Ml(665,`td`,19)(666,`code`,23),mN(667,`string`),lg()(),Ml(668,`td`,22)(669,`em`)(670,`strong`),mN(671,`(opcional)`),lg()(),Ml(672,`p`),mN(673,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),lg()()(),Ml(674,`tr`,15)(675,`td`,16)(676,`div`,17)(677,`span`,18),mN(678,` selectAll`),ql(679,`br`),lg()()(),Ml(680,`td`,19)(681,`code`,23),mN(682,`string`),lg()(),Ml(683,`td`,22)(684,`em`)(685,`strong`),mN(686,`(opcional)`),lg()(),Ml(687,`p`),mN(688,`Rótulo do `),Ml(689,`code`),mN(690,`checkbox`),lg(),mN(691,` da opção de selecionar todos.`),lg()()(),Ml(692,`tr`,15)(693,`td`,16)(694,`div`,17)(695,`span`,18),mN(696,` showDetails`),ql(697,`br`),lg()()(),Ml(698,`td`,19)(699,`code`,23),mN(700,`string`),lg()(),Ml(701,`td`,22)(702,`em`)(703,`strong`),mN(704,`(opcional)`),lg()(),Ml(705,`p`),mN(706,`Rótulo do botão que exibe os detalhes do item.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-list-view-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-list-view-basic-view`)(6,`sample-po-list-view-labs-view`)(7,`sample-po-list-view-hiring-processes-view`),lg()()()),l&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ve,Ae,Te,ke],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(tt),NL]})}return a})();var Bt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ie]})}return a})();export{Bt as DocPoListViewModule};