import{n as s,t as r}from"./chunk-zystk1pz.js";import{$t as mze,An as xoe,At as bze,Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,On as woe,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Vr as RN,Wi as mg,Wt as ioe,X as N5,Xn as C9,Yn as Bx,Zr as VN,_a as xN,ai as aN,ar as FN,b as Au,ci as be,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gi as ek,gn as tae,hi as e_,i as _a,ii as Zx,jn as xs,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,pr as I,qi as p0,qr as TE,r as Ta,ra as sE,rr as E,sa as ue,si as bN,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var Oe=()=>({name:`Registro 1`,email:`register@po-ui.com`});var He=()=>({name:`Registro 2`,email:`register2@po-ui.com`});var Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Ac(0,`div`,2),Kc(1,`po-info`,3),ug()),a&2){let o=C.$implicit;Hp(),cE(`p-value`,o.email)}}var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:6,consts:[[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(l,n){l&1&&(Ac(0,`po-list-view`,0),sE(1,je,2,1,`ng-template`,1),ug()),l&2&&cE(`p-items`,xN(3,Be,RN(1,Oe),RN(2,He)))},dependencies:[roe,mze,xoe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-list-view
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-list-view-basic/sample-po-list-view-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-list-view-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ze,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,_e],encapsulation:2,changeDetection:1})}return a})();function We(a,C){if(a&1&&(Ac(0,`div`,5),Kc(1,`po-info`,22)(2,`po-info`,23)(3,`po-info`,24)(4,`po-info`,25),ug()),a&2){let o=C.$implicit;Hp(),cE(`p-value`,o.name),Hp(),cE(`p-value`,o.email),Hp(),cE(`p-value`,o.location),Hp(),cE(`p-value`,o.phone)}}function Re(a,C){if(a&1&&(Ac(0,`div`,5),Kc(1,`po-info`,26)(2,`po-info`,27),ug()),a&2){let o=C.$implicit;Hp(),cE(`p-value`,o.company),Hp(),cE(`p-value`,o.zipCode)}}var De=(()=>{class a{poNotification=f(Au);action;actions;componentsSize=`medium`;customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyLink=`url`,this.propertyLinkValue=``,this.propertyTitle=``,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:``,visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:35,vars:30,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-property-link`,`p-property-title`,`p-select`,`p-show-more-disabled`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`propertyTitle`,`p-help`,`Ex.: email`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-help`,`Ex.: 200`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertyLinkValue`,`p-help`,`Ex.: "http://po.com.br"`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,`p-help`,`To enable the "Hide Select All" option, you must select the "Select" option first.`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(l,n){if(l&1){let d=Bx();Ac(0,`po-list-view`,2),pt(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),sE(1,We,5,4,`ng-template`,3)(2,Re,3,2,`ng-template`,4),ug(),Kc(3,`po-divider`),Ac(4,`div`,5)(5,`po-button`,6),pt(`p-click`,function(){return n.addItem()}),ug()(),Kc(6,`po-divider`),Ac(7,`div`,5),Kc(8,`po-info`,7),ug(),Kc(9,`po-divider`),Ac(10,`form`,null,0)(12,`div`,5)(13,`po-select`,8),RE(`ngModelChange`,function(p){return Jv(d),DN(n.propertyTitle,p)||(n.propertyTitle=p),e_(p)}),ug(),p0(),Ac(14,`po-number`,9),RE(`ngModelChange`,function(p){return Jv(d),DN(n.height,p)||(n.height=p),e_(p)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),Ac(15,`po-input`,10),RE(`ngModelChange`,function(p){return Jv(d),DN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),e_(p)}),ug(),p0(),Ac(16,`po-input`,11),RE(`ngModelChange`,function(p){return Jv(d),DN(n.literals,p)||(n.literals=p),e_(p)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),Ac(17,`po-radio-group`,12),RE(`ngModelChange`,function(p){return Jv(d),DN(n.componentsSize,p)||(n.componentsSize=p),e_(p)}),ug(),p0(),ug(),Ac(18,`div`,5)(19,`po-checkbox-group`,13),RE(`ngModelChange`,function(p){return Jv(d),DN(n.properties,p)||(n.properties=p),e_(p)}),pt(`p-change`,function(){return n.changeActionOptions()}),ug(),p0(),ug()(),Kc(20,`po-divider`),Ac(21,`form`,null,1)(23,`div`,5)(24,`po-input`,14),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action.action,p)||(n.action.action=p),e_(p)}),ug(),p0(),Ac(25,`po-input`,15),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action.label,p)||(n.action.label=p),e_(p)}),ug(),p0(),Ac(26,`po-input`,16),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action.url,p)||(n.action.url=p),e_(p)}),ug(),p0(),Ac(27,`po-select`,17),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action.type,p)||(n.action.type=p),e_(p)}),ug(),p0(),Ac(28,`po-select`,18),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action.icon,p)||(n.action.icon=p),e_(p)}),ug(),p0(),Ac(29,`po-checkbox-group`,19),RE(`ngModelChange`,function(p){return Jv(d),DN(n.action,p)||(n.action=p),e_(p)}),ug(),p0(),ug(),Ac(30,`div`,5)(31,`po-button`,20),pt(`p-click`,function(){return n.addAction(n.action)}),ug()()(),Kc(32,`po-divider`),Ac(33,`div`,5)(34,`po-button`,21),pt(`p-click`,function(){return Jv(d),Zx(22).reset(),e_(n.restore())}),ug()()}if(l&2){let d=Zx(22);cE(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-property-link`,n.propertyLink)(`p-property-title`,n.propertyTitle)(`p-select`,n.properties.includes(`select`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`)),Hp(8),cE(`p-value`,n.titleAction),Hp(5),TE(`ngModel`,n.propertyTitle),cE(`p-options`,n.propertyTitleOptions),m0(),Hp(),TE(`ngModel`,n.height),m0(),Hp(),TE(`ngModel`,n.propertyLinkValue),m0(),Hp(),TE(`ngModel`,n.literals),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0(),Hp(2),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(5),TE(`ngModel`,n.action.action),m0(),Hp(),TE(`ngModel`,n.action.label),m0(),Hp(),TE(`ngModel`,n.action.url),m0(),Hp(),TE(`ngModel`,n.action.type),cE(`p-options`,n.typeOptions),m0(),Hp(),TE(`ngModel`,n.action.icon),cE(`p-options`,n.iconOptions),m0(),Hp(),TE(`ngModel`,n.action),cE(`p-options`,n.actionOptions),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,Cte,ioe,roe,mze,xoe,woe],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-list-view
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-list-view-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,De],encapsulation:2,changeDetection:1})}return a})();var J=(()=>{class a{getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`},{hireStatus:`progress`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`},{hireStatus:`progress`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`}]}static ɵfac=function(l){return new(l||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var $e=[`detailsModal`];function Qe(a,C){if(a&1&&(Ac(0,`div`,6),Kc(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),FN(4,`uppercase`),ug()),a&2){let o=C.$implicit;Hp(),cE(`p-value`,o.idCard),Hp(),cE(`p-value`,o.jobDescription),Hp(),cE(`p-value`,bN(VN(4,4,o.hireStatus)))}}function Ye(a,C){if(a&1&&(Ac(0,`div`,6),Kc(1,`po-info`,17)(2,`po-info`,18),ug()),a&2){let o=C.$implicit;Hp(),cE(`p-value`,o.age),Hp(),cE(`p-value`,o.city)}}var Me=(()=>{class a{poNotification=f(Au);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let l=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case`progress`:o.call(this,l);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}l.$selected=!1}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(l,n){if(l&1&&Xc($e,7),l&2){let d;fo(d=ho())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[be([J])],decls:16,vars:11,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-property-link`,`url`,`p-property-title`,`name`,`p-select`,``,3,`p-title-action`,`p-actions`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(l,n){l&1&&(Ac(0,`po-page-list`,1)(1,`po-list-view`,2),pt(`p-title-action`,function(c){return n.showDetailModal(c)}),sE(2,Qe,5,6,`ng-template`,3)(3,Ye,3,2,`ng-template`,4),ug(),Ac(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),Kc(8,`po-avatar`,8),ug(),Ac(9,`div`,9)(10,`div`,10),Kc(11,`po-tag`,11),ug(),Ac(12,`div`,10),Kc(13,`po-info`,12),ug(),Ac(14,`div`,10),Kc(15,`po-info`,13),ug()()()()()),l&2&&(cE(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),Hp(),cE(`p-actions`,n.actions)(`p-items`,n.hiringProcessesFiltered),Hp(),cE(`p-title`,n.formatTitle),Hp(),cE(`p-show-detail`,n.showDetail),Hp(),cE(`p-title`,n.titleDetailsModal),Hp(7),cE(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),Hp(2),cE(`p-value`,n.selectedActionItem.email),Hp(2),cE(`p-value`,n.selectedActionItem.telephone))},dependencies:[N5,xs,roe,mze,xoe,woe,wa,bze,ek],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View - Hiring Processes`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-list-view-hiring-processes`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ke,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Me],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:707,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(l,n){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-list-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoListViewComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Ac(18,`em`),vN(19,`templates`),ug(),Ac(20,`strong`)(21,`a`,6),vN(22,`p-list-view-content-template`),ug()(),vN(23,` e
`),Ac(24,`strong`)(25,`a`,7),vN(26,`p-list-view-detail-template`),ug()(),vN(27,`.`),ug(),Ac(28,`p`),vN(29,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Ac(30,`strong`)(31,`a`,7),vN(32,`p-list-view-detail-template`),ug()(),vN(33,`. `),ug()(),Ac(34,`div`,8)(35,`h4`,9),vN(36,`Seletor`),ug(),Ac(37,`pre`,10),vN(38,`<po-list-view
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
`),ug()(),Ac(39,`h4`,11),vN(40,`Propriedades`),ug(),Ac(41,`table`,12)(42,`tr`,13)(43,`th`,14),vN(44,`Nome`),ug(),Ac(45,`th`,14),vN(46,`Tipo`),ug(),Ac(47,`th`,14),vN(48,`Padrão`),ug(),Ac(49,`th`,14),vN(50,`Descrição`),ug()(),Ac(51,`tr`,15)(52,`td`,16)(53,`div`,17)(54,`span`,18),vN(55,` p-actions`),Kc(56,`br`),ug()()(),Ac(57,`td`,19)(58,`code`,20),vN(59,`PoListViewAction[]`),ug()(),Ac(60,`td`,21),vN(61,`-`),ug(),Ac(62,`td`,22)(63,`em`)(64,`strong`),vN(65,`(opcional)`),ug()(),Ac(66,`p`),vN(67,`Lista de ações que serão exibidas no componente.`),ug()()(),Ac(68,`tr`,15)(69,`td`,16)(70,`div`,17)(71,`span`,18),vN(72,` p-components-size`),Kc(73,`br`),ug()()(),Ac(74,`td`,19)(75,`code`,23),vN(76,`string`),ug()(),Ac(77,`td`,21)(78,`p`)(79,`code`),vN(80,`medium`),ug()()(),Ac(81,`td`,22)(82,`em`)(83,`strong`),vN(84,`(opcional)`),ug()(),Ac(85,`p`),vN(86,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(87,`ul`)(88,`li`)(89,`code`),vN(90,`small`),ug(),vN(91,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(92,`li`)(93,`code`),vN(94,`medium`),ug(),vN(95,`: aplica a medida medium de cada componente.`),ug()(),Ac(96,`blockquote`)(97,`p`),vN(98,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(99,`code`),vN(100,`medium`),ug(),vN(101,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(102,`a`,24),vN(103,`po-theme`),ug(),vN(104,`.`),ug()()()(),Ac(105,`tr`,15)(106,`td`,16)(107,`div`,17)(108,`span`,18),vN(109,` p-height`),Kc(110,`br`),ug()()(),Ac(111,`td`,19)(112,`code`,25),vN(113,`number`),ug()(),Ac(114,`td`,21),vN(115,`-`),ug(),Ac(116,`td`,22)(117,`em`)(118,`strong`),vN(119,`(opcional)`),ug()(),Ac(120,`p`),vN(121,`Define a altura do `),Ac(122,`code`),vN(123,`po-list-view`),ug(),vN(124,` em `),Ac(125,`em`),vN(126,`pixels`),ug(),vN(127,`.`),ug()()(),Ac(128,`tr`,15)(129,`td`,16)(130,`div`,17)(131,`span`,18),vN(132,` p-hide-select-all`),Kc(133,`br`),ug()()(),Ac(134,`td`,19)(135,`code`,26),vN(136,`boolean`),ug()(),Ac(137,`td`,21)(138,`p`)(139,`code`),vN(140,`false`),ug()()(),Ac(141,`td`,22)(142,`p`),vN(143,`Esconde o `),Ac(144,`em`),vN(145,`checkbox`),ug(),vN(146,` para seleção de todos os itens.`),ug()()(),Ac(147,`tr`,15)(148,`td`,16)(149,`div`,17)(150,`span`,18),vN(151,` p-items`),Kc(152,`br`),ug()()(),Ac(153,`td`,19)(154,`code`,27),vN(155,`any[]`),ug()(),Ac(156,`td`,21),vN(157,`-`),ug(),Ac(158,`td`,22)(159,`p`),vN(160,`Lista de itens que serão exibidos no componente.`),ug()()(),Ac(161,`tr`,15)(162,`td`,16)(163,`div`,17)(164,`span`,18),vN(165,` p-literals`),Kc(166,`br`),ug()()(),Ac(167,`td`,19)(168,`code`,28),vN(169,`PoListViewLiterals`),ug()(),Ac(170,`td`,21),vN(171,`-`),ug(),Ac(172,`td`,22)(173,`em`)(174,`strong`),vN(175,`(opcional)`),ug()(),Ac(176,`p`),vN(177,`Objeto com as literais usadas no `),Ac(178,`code`),vN(179,`po-list-view`),ug(),vN(180,`.`),ug(),Ac(181,`p`),vN(182,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(183,`pre`)(184,`code`),vN(185,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),ug()(),Ac(186,`p`),vN(187,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(188,`pre`)(189,`code`),vN(190,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),ug()(),Ac(191,`p`),vN(192,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(193,`pre`)(194,`code`),vN(195,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),ug()(),Ac(196,`blockquote`)(197,`p`),vN(198,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(199,`a`,29)(200,`code`),vN(201,`PoI18nService`),ug()(),vN(202,` ou do browser.`),ug()()()(),Ac(203,`tr`,15)(204,`td`,16)(205,`div`,17)(206,`span`,18),vN(207,` p-property-link`),Kc(208,`br`),ug()()(),Ac(209,`td`,19)(210,`code`,23),vN(211,`string`),ug()(),Ac(212,`td`,21),vN(213,`-`),ug(),Ac(214,`td`,22)(215,`em`)(216,`strong`),vN(217,`(opcional)`),ug()(),Ac(218,`p`),vN(219,`Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será usado como link para o título.`),ug()()(),Ac(220,`tr`,15)(221,`td`,16)(222,`div`,17)(223,`span`,18),vN(224,` p-property-title`),Kc(225,`br`),ug()()(),Ac(226,`td`,19)(227,`code`,23),vN(228,`string`),ug()(),Ac(229,`td`,21),vN(230,`-`),ug(),Ac(231,`td`,22)(232,`em`)(233,`strong`),vN(234,`(opcional)`),ug()(),Ac(235,`p`),vN(236,`Recebe uma propriedade que será utilizada para recuperar o valor do objeto que será exibido como o título de cada item.`),ug()()(),Ac(237,`tr`,15)(238,`td`,16)(239,`div`,17)(240,`span`,18),vN(241,` p-select`),Kc(242,`br`),ug()()(),Ac(243,`td`,19)(244,`code`,26),vN(245,`boolean`),ug()(),Ac(246,`td`,21)(247,`p`)(248,`code`),vN(249,`false`),ug()()(),Ac(250,`td`,22)(251,`em`)(252,`strong`),vN(253,`(opcional)`),ug()(),Ac(254,`p`),vN(255,`Habilita um `),Ac(256,`em`),vN(257,`checkbox`),ug(),vN(258,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),Ac(259,`code`),vN(260,`$selected`),ug(),vN(261,` para identificar se o
item est\xE1 selecionado, por exemplo:`),ug(),Ac(262,`pre`)(263,`code`),vN(264,`item.$selected

// ou

item['$selected']
`),ug()()()(),Ac(265,`tr`,15)(266,`td`,16)(267,`div`,30)(268,`span`,31),vN(269,` (p-show-detail)`),Kc(270,`br`),ug()()(),Ac(271,`td`,19)(272,`code`,32),vN(273,`EventEmitter`),ug()(),Ac(274,`td`,21),vN(275,`-`),ug(),Ac(276,`td`,22)(277,`em`)(278,`strong`),vN(279,`(opcional)`),ug()(),Ac(280,`p`),vN(281,`Ação que será executada ao clicar no botão exibir detalhes.`),ug(),Ac(282,`p`),vN(283,`Ao ser disparado, o método passa como parâmetros os detalhes que serão exibidos.`),ug()()(),Ac(284,`tr`,15)(285,`td`,16)(286,`div`,30)(287,`span`,31),vN(288,` (p-show-more)`),Kc(289,`br`),ug()()(),Ac(290,`td`,19)(291,`code`,32),vN(292,`EventEmitter`),ug()(),Ac(293,`td`,21),vN(294,`-`),ug(),Ac(295,`td`,22)(296,`em`)(297,`strong`),vN(298,`(opcional)`),ug()(),Ac(299,`p`),vN(300,`Recebe uma ação, que será executada quando clicar no botão "Carregar mais resultados".`),ug(),Ac(301,`blockquote`)(302,`p`),vN(303,`Caso nenhuma ação for definida o mesmo não ficará visível.`),ug()()()(),Ac(304,`tr`,15)(305,`td`,16)(306,`div`,17)(307,`span`,18),vN(308,` p-show-more-disabled`),Kc(309,`br`),ug()()(),Ac(310,`td`,19)(311,`code`,26),vN(312,`boolean`),ug()(),Ac(313,`td`,21),vN(314,`-`),ug(),Ac(315,`td`,22)(316,`em`)(317,`strong`),vN(318,`(opcional)`),ug()(),Ac(319,`p`),vN(320,`Indica que o botão `),Ac(321,`code`),vN(322,`Carregar Mais Resultados`),ug(),vN(323,` será desabilitado.`),ug()()(),Ac(324,`tr`,15)(325,`td`,16)(326,`div`,30)(327,`span`,31),vN(328,` (p-title-action)`),Kc(329,`br`),ug()()(),Ac(330,`td`,19)(331,`code`,32),vN(332,`EventEmitter`),ug()(),Ac(333,`td`,21),vN(334,`-`),ug(),Ac(335,`td`,22)(336,`em`)(337,`strong`),vN(338,`(opcional)`),ug()(),Ac(339,`p`),vN(340,`Ação que será executada ao clicar no título.`),ug(),Ac(341,`p`),vN(342,`Ao ser disparado, o método inserido na ação irá receber como parâmetro o item da lista clicado.`),ug()()()(),Ac(343,`h3`),vN(344,`Interfaces`),ug(),Ac(345,`h4`,33)(346,`code`,5),vN(347,`PoListViewAction`),ug()(),Ac(348,`div`,2)(349,`p`),vN(350,`Interface que define as ações do componente `),Ac(351,`code`),vN(352,`po-list-view`),ug(),vN(353,`.`),ug(),Ac(354,`blockquote`)(355,`p`),vN(356,`As propriedades `),Ac(357,`code`),vN(358,`subItems`),ug(),vN(359,`, `),Ac(360,`code`),vN(361,`separator`),ug(),vN(362,`, `),Ac(363,`code`),vN(364,`url`),ug(),vN(365,` e `),Ac(366,`code`),vN(367,`selected`),ug(),vN(368,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),ug()()(),Ac(369,`h4`,11),vN(370,`Propriedades`),ug(),Ac(371,`table`,12)(372,`tr`,13)(373,`th`,14),vN(374,`Nome`),ug(),Ac(375,`th`,14),vN(376,`Tipo`),ug(),Ac(377,`th`,14),vN(378,`Descrição`),ug()(),Ac(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),vN(383,` action`),Kc(384,`br`),ug()()(),Ac(385,`td`,19)(386,`code`,34),vN(387,`Function`),ug()(),Ac(388,`td`,22)(389,`em`)(390,`strong`),vN(391,`(opcional)`),ug()(),Ac(392,`p`),vN(393,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(394,`p`),vN(395,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(396,`code`),vN(397,`subItems`),ug(),vN(398,`.`),ug(),Ac(399,`blockquote`)(400,`p`),vN(401,`Para que a função seja executada no contexto do componente, utilize `),Ac(402,`em`),vN(403,`bind`),ug(),vN(404,`:
`),Ac(405,`code`),vN(406,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(407,`tr`,15)(408,`td`,16)(409,`div`,17)(410,`span`,18),vN(411,` disabled`),Kc(412,`br`),ug()()(),Ac(413,`td`,19)(414,`code`,26),vN(415,`boolean `),ug(),Ac(416,`code`,34),vN(417,` Function`),ug()(),Ac(418,`td`,22)(419,`em`)(420,`strong`),vN(421,`(opcional)`),ug()(),Ac(422,`p`),vN(423,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(424,`tr`,15)(425,`td`,16)(426,`div`,17)(427,`span`,18),vN(428,` icon`),Kc(429,`br`),ug()()(),Ac(430,`td`,19)(431,`code`,23),vN(432,`string `),ug(),Ac(433,`code`,35),vN(434,` TemplateRef<void>`),ug()(),Ac(435,`td`,22)(436,`em`)(437,`strong`),vN(438,`(opcional)`),ug()(),Ac(439,`p`),vN(440,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(441,`p`),vN(442,`Aceita ícones da `),Ac(443,`a`,36),vN(444,`Biblioteca de ícones`),ug(),vN(445,`, fontes externas (ex: Font Awesome)
ou um `),Ac(446,`code`),vN(447,`TemplateRef`),ug(),vN(448,` para ícones customizados.`),ug(),Ac(449,`pre`)(450,`code`),vN(451,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(452,`tr`,15)(453,`td`,16)(454,`div`,17)(455,`span`,18),vN(456,` label`),Kc(457,`br`),ug()()(),Ac(458,`td`,19)(459,`code`,23),vN(460,`string`),ug()(),Ac(461,`td`,22)(462,`p`),vN(463,`Rótulo da ação.`),ug(),Ac(464,`p`),vN(465,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(466,`code`),vN(467,`subItems`),ug(),vN(468,`.`),ug()()(),Ac(469,`tr`,15)(470,`td`,16)(471,`div`,17)(472,`span`,18),vN(473,` selected`),Kc(474,`br`),ug()()(),Ac(475,`td`,19)(476,`code`,26),vN(477,`boolean`),ug()(),Ac(478,`td`,22)(479,`em`)(480,`strong`),vN(481,`(opcional)`),ug()(),Ac(482,`p`),vN(483,`Define se a ação está selecionada.`),ug()()(),Ac(484,`tr`,15)(485,`td`,16)(486,`div`,17)(487,`span`,18),vN(488,` separator`),Kc(489,`br`),ug()()(),Ac(490,`td`,19)(491,`code`,26),vN(492,`boolean`),ug()(),Ac(493,`td`,22)(494,`em`)(495,`strong`),vN(496,`(opcional)`),ug()(),Ac(497,`p`),vN(498,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(499,`tr`,15)(500,`td`,16)(501,`div`,17)(502,`span`,18),vN(503,` subItems`),Kc(504,`br`),ug()()(),Ac(505,`td`,19)(506,`code`,37),vN(507,`Array<PoPopupAction>`),ug()(),Ac(508,`td`,22)(509,`em`)(510,`strong`),vN(511,`(opcional)`),ug()(),Ac(512,`p`),vN(513,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(514,`p`),vN(515,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(516,`blockquote`)(517,`p`),vN(518,`As propriedades `),Ac(519,`code`),vN(520,`disabled`),ug(),vN(521,`, `),Ac(522,`code`),vN(523,`type`),ug(),vN(524,` e `),Ac(525,`code`),vN(526,`visible`),ug(),vN(527,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(528,`blockquote`)(529,`p`),vN(530,`Quando `),Ac(531,`code`),vN(532,`url`),ug(),vN(533,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(534,`blockquote`)(535,`p`),vN(536,`Em subníveis aninhados, o `),Ac(537,`code`),vN(538,`icon`),ug(),vN(539,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(540,`tr`,15)(541,`td`,16)(542,`div`,17)(543,`span`,18),vN(544,` type`),Kc(545,`br`),ug()()(),Ac(546,`td`,19)(547,`code`,23),vN(548,`string`),ug()(),Ac(549,`td`,22)(550,`em`)(551,`strong`),vN(552,`(opcional)`),ug()(),Ac(553,`p`),vN(554,`Define a cor do item.`),ug(),Ac(555,`p`),vN(556,`Valores válidos:`),ug(),Ac(557,`ul`)(558,`li`)(559,`code`),vN(560,`default`),ug()(),Ac(561,`li`)(562,`code`),vN(563,`danger`),ug()()()()(),Ac(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),vN(568,` url`),Kc(569,`br`),ug()()(),Ac(570,`td`,19)(571,`code`,23),vN(572,`string`),ug()(),Ac(573,`td`,22)(574,`em`)(575,`strong`),vN(576,`(opcional)`),ug()(),Ac(577,`p`),vN(578,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(579,`p`),vN(580,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(581,`code`),vN(582,`url`),ug(),vN(583,` é informada em um agrupador, o clique `),Ac(584,`strong`),vN(585,`não abrirá os subitens`),ug(),vN(586,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(587,`blockquote`)(588,`p`),vN(589,`Quando informada, tem prioridade sobre a propriedade `),Ac(590,`code`),vN(591,`action`),ug(),vN(592,`.`),ug()()()(),Ac(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),vN(597,` visible`),Kc(598,`br`),ug()()(),Ac(599,`td`,19)(600,`code`,26),vN(601,`boolean `),ug(),Ac(602,`code`,34),vN(603,` Function`),ug()(),Ac(604,`td`,22)(605,`em`)(606,`strong`),vN(607,`(opcional)`),ug()(),Ac(608,`p`),vN(609,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(610,`h4`,33)(611,`code`,5),vN(612,`PoListViewLiterals`),ug()(),Ac(613,`div`,2)(614,`p`),vN(615,`Interface para definição das literais usadas no `),Ac(616,`code`),vN(617,`po-list-view`),ug(),vN(618,`.`),ug()(),Ac(619,`h4`,11),vN(620,`Propriedades`),ug(),Ac(621,`table`,12)(622,`tr`,13)(623,`th`,14),vN(624,`Nome`),ug(),Ac(625,`th`,14),vN(626,`Tipo`),ug(),Ac(627,`th`,14),vN(628,`Descrição`),ug()(),Ac(629,`tr`,15)(630,`td`,16)(631,`div`,17)(632,`span`,18),vN(633,` hideDetails`),Kc(634,`br`),ug()()(),Ac(635,`td`,19)(636,`code`,23),vN(637,`string`),ug()(),Ac(638,`td`,22)(639,`em`)(640,`strong`),vN(641,`(opcional)`),ug()(),Ac(642,`p`),vN(643,`Rótulo do botão que oculta os detalhes do item.`),ug()()(),Ac(644,`tr`,15)(645,`td`,16)(646,`div`,17)(647,`span`,18),vN(648,` loadMoreData`),Kc(649,`br`),ug()()(),Ac(650,`td`,19)(651,`code`,23),vN(652,`string`),ug()(),Ac(653,`td`,22)(654,`em`)(655,`strong`),vN(656,`(opcional)`),ug()(),Ac(657,`p`),vN(658,`Rótulo do botão que deve carregar mais resultados.`),ug()()(),Ac(659,`tr`,15)(660,`td`,16)(661,`div`,17)(662,`span`,18),vN(663,` noData`),Kc(664,`br`),ug()()(),Ac(665,`td`,19)(666,`code`,23),vN(667,`string`),ug()(),Ac(668,`td`,22)(669,`em`)(670,`strong`),vN(671,`(opcional)`),ug()(),Ac(672,`p`),vN(673,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),ug()()(),Ac(674,`tr`,15)(675,`td`,16)(676,`div`,17)(677,`span`,18),vN(678,` selectAll`),Kc(679,`br`),ug()()(),Ac(680,`td`,19)(681,`code`,23),vN(682,`string`),ug()(),Ac(683,`td`,22)(684,`em`)(685,`strong`),vN(686,`(opcional)`),ug()(),Ac(687,`p`),vN(688,`Rótulo do `),Ac(689,`code`),vN(690,`checkbox`),ug(),vN(691,` da opção de selecionar todos.`),ug()()(),Ac(692,`tr`,15)(693,`td`,16)(694,`div`,17)(695,`span`,18),vN(696,` showDetails`),Kc(697,`br`),ug()()(),Ac(698,`td`,19)(699,`code`,23),vN(700,`string`),ug()(),Ac(701,`td`,22)(702,`em`)(703,`strong`),vN(704,`(opcional)`),ug()(),Ac(705,`p`),vN(706,`Rótulo do botão que exibe os detalhes do item.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-list-view-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-list-view-basic-view`)(6,`sample-po-list-view-labs-view`)(7,`sample-po-list-view-hiring-processes-view`),ug()()()),l&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[vze,tae,aae,Ve,Ae,Te,ke],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(tt),kL]})}return a})();var Bt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ie]})}return a})();export{Bt as DocPoListViewModule};