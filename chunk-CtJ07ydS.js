import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as pt,Ai as ho,C as C4,Ca as zO,Cr as Kc,Er as LP,Gi as mg,Gt as eoe,Hr as RN,Ji as p0,Jr as TE,L as Ioe,Nn as xs,Oi as he,P as H5,Qr as VN,Ri as kL,Rt as cae,Si as fo,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,_i as ek,_n as ta,ai as Zx,ca as ue,ci as bN,cn as noe,fr as Hp,gi as e_,gn as soe,hr as IE,i as _a,ia as sE,in as mae,ir as E,jn as wte,k as Eoe,kt as _ze,li as be,mn as rb,mr as I,nr as DN,oi as aN,on as n4,or as FN,pa as vN,pt as Sze,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,v as Aoe,va as xN,yi as f,yr as Jv,zr as Qn}from"./main-M64QO35D.js";var Be=()=>({title:`name`});var je=()=>({name:`Register 1`,email:`register@po-ui.com`});var Ne=()=>({name:`Register 2`,email:`register2@po-ui.com`});var Re=(a,v)=>[a,v];function We(a,v){if(a&1&&(Ac(0,`div`,2),Kc(1,`po-info`,3),ug()),a&2){let o=v.$implicit;Hp(),cE(`p-value`,o.email)}}var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:8,consts:[[3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(r,n){r&1&&(Ac(0,`po-list-view`,0),sE(1,We,2,1,`ng-template`,1),ug()),r&2&&cE(`p-field-properties`,RN(2,Be))(`p-items`,xN(5,Re,RN(3,je),RN(4,Ne)))},dependencies:[soe,_ze,Eoe],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-list-view
  [p-field-properties]="{ title: 'name' }"
  [p-items]="[
    { name: 'Register 1', email: 'register@po-ui.com' },
    { name: 'Register 2', email: 'register2@po-ui.com' }
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-list-view-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,n.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,_e],encapsulation:2,changeDetection:1})}return a})();function Je(a,v){if(a&1&&(Ac(0,`div`,2)(1,`span`,3),vN(2),ug()()),a&2){let o=v.$implicit;Hp(2),IE(o.subtitle)}}var Me=(()=>{class a{fieldProperties={title:`name`,subtitle:`subtitle`,avatar:`avatar`,tag:{value:`tag`,type:`tagType`}};items=[{name:`Billing report`,subtitle:`5 min ago`,tag:`Completed`,tagType:`success`,avatar:`https://i.pravatar.cc/150?img=1`},{name:`Vacation request`,subtitle:`12 min ago`,tag:`In progress`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=2`},{name:`System update`,subtitle:`30 min ago`,tag:`Warning`,tagType:`warning`,avatar:`https://i.pravatar.cc/150?img=3`}];static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-field-properties`]],standalone:!1,decls:2,vars:2,consts:[[`p-tag-position`,`bottom`,3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[1,`po-font-text-small`]],template:function(r,n){r&1&&(Ac(0,`po-list-view`,0),sE(1,Je,3,1,`ng-template`,1),ug()),r&2&&cE(`p-field-properties`,n.fieldProperties)(`p-items`,n.items)},dependencies:[_ze,Eoe],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-field-properties-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View - Field Properties`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-list-view p-tag-position="bottom" [p-field-properties]="fieldProperties" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <span class="po-font-text-small">{ { item.subtitle }}</span>
    </div>
  </ng-template>
</po-list-view>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

import { PoListViewFieldProperties } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-field-properties',
  templateUrl: './sample-po-list-view-field-properties.component.html',
  standalone: false
})
export class SamplePoListViewFieldPropertiesComponent {
  fieldProperties: PoListViewFieldProperties = {
    title: 'name',
    subtitle: 'subtitle',
    avatar: 'avatar',
    tag: { value: 'tag', type: 'tagType' }
  };

  items = [
    {
      name: 'Billing report',
      subtitle: '5 min ago',
      tag: 'Completed',
      tagType: 'success',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Vacation request',
      subtitle: '12 min ago',
      tag: 'In progress',
      tagType: 'info',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'System update',
      subtitle: '30 min ago',
      tag: 'Warning',
      tagType: 'warning',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-list-view-field-properties`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ye,n.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Me],encapsulation:2,changeDetection:1})}return a})();function Ke(a,v){if(a&1&&(Ac(0,`div`,5),Kc(1,`po-info`,31)(2,`po-info`,32)(3,`po-info`,33)(4,`po-info`,34),ug()),a&2){let o=v.$implicit;Hp(),cE(`p-value`,o.name),Hp(),cE(`p-value`,o.email),Hp(),cE(`p-value`,o.location),Hp(),cE(`p-value`,o.phone)}}function Xe(a,v){if(a&1&&(Ac(0,`div`,5),Kc(1,`po-info`,35)(2,`po-info`,36),ug()),a&2){let o=v.$implicit;Hp(),cE(`p-value`,o.company),Hp(),cE(`p-value`,o.zipCode)}}var ke=(()=>{class a{poNotification=f(Lu);action;actions;componentsSize=`medium`;customLiterals;detailDisplay=`inline`;height;items;literals;properties;propertyAvatar;avatarType;propertyHighlighted;propertyLink;propertyLinkValue;propertySubtitle;propertyTag;propertyTagType;propertyTitle;tagPosition=`bottom`;tagTypeValue=``;highlightedValue=`read`;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`singleSelect`,label:`Single Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];detailDisplayOptions=[{label:`inline`,value:`inline`},{label:`modal`,value:`modal`}];tagPositionOptions=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`none`,label:`None`},{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];avatarPropertyOptions=[{value:`none`,label:`None`},{value:`image`,label:`Image (URL)`},{value:`icon`,label:`Icon`},{value:`progress`,label:`Progress`},{value:`indeterminate`,label:`Progress (indeterminate)`}];tagTypeValueOptions=[{value:`success`,label:`Success`},{value:`info`,label:`Info`},{value:`danger`,label:`Danger`},{value:`warning`,label:`Warning`},{value:`neutral`,label:`Neutral`}];highlightedValueOptions=[{value:`read`,label:`read`},{value:`unread`,label:`unread`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];get fieldProperties(){let o={};return this.isMapped(this.propertyTitle)&&(o.title=this.propertyTitle),this.isMapped(this.propertySubtitle)&&(o.subtitle=this.propertySubtitle),this.isMapped(this.propertyLink)&&(o.link=this.propertyLink),this.isMapped(this.propertyAvatar)&&(o.avatar=this.propertyAvatar),this.isMapped(this.propertyHighlighted)&&(o.highlighted=this.propertyHighlighted),this.isMapped(this.propertyTag)&&(o.tag={value:this.propertyTag,type:this.propertyTagType}),o}isMapped(o){return!!o&&o!==`none`}ngOnInit(){this.restore()}addAction(o){let r=Object.assign({},o),n=r.action;r.action=n?this.showAction.bind(this,n):void 0,this.actions.push(r),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}applyTagType(){this.items=this.items.map(o=>s(r({},o),{tagType:this.tagTypeValue}))}applyHighlighted(){this.propertyHighlighted=`unread`;let o=this.highlightedValue===`unread`;this.items=this.items.map(r$1=>s(r({},r$1),{unread:o}))}applyAvatar(){if(!this.avatarType||this.avatarType===`none`){this.propertyAvatar=``,this.items=this.items.map(o=>s(r({},o),{avatar:void 0}));return}this.propertyAvatar=`avatar`,this.items=this.items.map((o,r$2)=>s(r({},o),{avatar:this.buildAvatarValue(r$2+1)}))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.detailDisplay=`inline`,this.tagPosition=`bottom`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyAvatar=``,this.avatarType=`none`,this.propertyHighlighted=`unread`,this.propertyLink=`url`,this.propertyLinkValue=``,this.propertySubtitle=`none`,this.propertyTag=`none`,this.propertyTagType=`tagType`,this.propertyTitle=`none`,this.tagTypeValue=`success`,this.highlightedValue=`read`,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){let r=[`success`,`info`,`warning`,`danger`,`neutral`];return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`,tag:o%2===0?`Completed`:`In progress`,tagType:this.tagTypeValue||r[o%r.length],subtitle:`${o*5} min ago`,avatar:this.buildAvatarValue(o),unread:this.highlightedValue===`unread`}}buildAvatarValue(o){switch(this.avatarType){case`image`:return`https://i.pravatar.cc/150?img=${o}`;case`icon`:return{icon:`an an-user`,color:`#1a73e8`,backgroundColor:`#e8f0fe`};case`progress`:return{progress:o*15%100,showPercentage:!0,size:`large`,radius:35};case`indeterminate`:return{indeterminate:!0,size:`large`,radius:35};default:return}}restoreActionForm(){this.action={label:``,visible:!0}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:45,vars:51,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-detail-display`,`p-field-properties`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-select`,`p-single-select`,`p-show-more-disabled`,`p-tag-position`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`p-title`,`Field Properties`,1,`po-md-12`,`po-pb-3`],[`name`,`propertyTitle`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertySubtitle`,`p-clean`,``,`p-label`,`Property subtitle`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertyLinkValue`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`propertyTag`,`p-clean`,``,`p-label`,`Property tag`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagTypeValue`,`p-label`,`Property tag type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarType`,`p-label`,`Property avatar`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`highlightedValue`,`p-label`,`Property highlighted`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-9`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`detailDisplay`,`p-label`,`Detail display`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag position`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Actions`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(r,n){if(r&1){let m=Bx();Ac(0,`po-list-view`,2),pt(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),sE(1,Ke,5,4,`ng-template`,3)(2,Xe,3,2,`ng-template`,4),ug(),Kc(3,`po-divider`),Ac(4,`div`,5)(5,`po-button`,6),pt(`p-click`,function(){return n.addItem()}),ug()(),Kc(6,`po-divider`),Ac(7,`div`,5),Kc(8,`po-info`,7),ug(),Kc(9,`po-divider`),Ac(10,`form`,null,0)(12,`po-widget`,8)(13,`div`,5)(14,`po-select`,9),pt(`ngModelChange`,function(p){return n.propertyTitle=p}),ug(),p0(),Ac(15,`po-select`,10),pt(`ngModelChange`,function(p){return n.propertySubtitle=p}),ug(),p0(),Ac(16,`po-input`,11),RE(`ngModelChange`,function(p){return Jv(m),DN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),e_(p)}),ug(),p0(),Ac(17,`po-select`,12),pt(`ngModelChange`,function(p){return n.propertyTag=p}),ug(),p0(),Ac(18,`po-select`,13),pt(`ngModelChange`,function(p){return Jv(m),n.tagTypeValue=p,e_(n.applyTagType())}),ug(),p0(),Ac(19,`po-select`,14),pt(`ngModelChange`,function(p){return Jv(m),n.avatarType=p,e_(n.applyAvatar())}),ug(),p0(),Ac(20,`po-select`,15),pt(`ngModelChange`,function(p){return Jv(m),n.highlightedValue=p,e_(n.applyHighlighted())}),ug(),p0(),ug()(),Ac(21,`div`,5)(22,`po-number`,16),RE(`ngModelChange`,function(p){return Jv(m),DN(n.height,p)||(n.height=p),e_(p)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),Ac(23,`po-input`,17),RE(`ngModelChange`,function(p){return Jv(m),DN(n.literals,p)||(n.literals=p),e_(p)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),Ac(24,`po-radio-group`,18),RE(`ngModelChange`,function(p){return Jv(m),DN(n.componentsSize,p)||(n.componentsSize=p),e_(p)}),ug(),p0(),Ac(25,`po-radio-group`,19),RE(`ngModelChange`,function(p){return Jv(m),DN(n.detailDisplay,p)||(n.detailDisplay=p),e_(p)}),ug(),p0(),Ac(26,`po-radio-group`,20),RE(`ngModelChange`,function(p){return Jv(m),DN(n.tagPosition,p)||(n.tagPosition=p),e_(p)}),ug(),p0(),ug(),Ac(27,`div`,5)(28,`po-checkbox-group`,21),RE(`ngModelChange`,function(p){return Jv(m),DN(n.properties,p)||(n.properties=p),e_(p)}),pt(`p-change`,function(){return n.changeActionOptions()}),ug(),p0(),ug()(),Kc(29,`po-divider`),Ac(30,`po-widget`,22)(31,`form`,null,1)(33,`div`,5)(34,`po-input`,23),RE(`ngModelChange`,function(p){return Jv(m),DN(n.action.label,p)||(n.action.label=p),e_(p)}),ug(),p0(),Ac(35,`po-input`,24),RE(`ngModelChange`,function(p){return Jv(m),DN(n.action.action,p)||(n.action.action=p),e_(p)}),ug(),p0(),Ac(36,`po-input`,25),RE(`ngModelChange`,function(p){return Jv(m),DN(n.action.url,p)||(n.action.url=p),e_(p)}),ug(),p0(),Ac(37,`po-select`,26),pt(`ngModelChange`,function(p){return n.action.type=p}),ug(),p0(),Ac(38,`po-select`,27),pt(`ngModelChange`,function(p){return n.action.icon=p}),ug(),p0(),Ac(39,`po-checkbox-group`,28),RE(`ngModelChange`,function(p){return Jv(m),DN(n.action,p)||(n.action=p),e_(p)}),ug(),p0(),ug(),Ac(40,`div`,5)(41,`po-button`,29),pt(`p-click`,function(){return n.addAction(n.action)}),ug()()()(),Kc(42,`po-divider`),Ac(43,`div`,5)(44,`po-button`,30),pt(`p-click`,function(){return Jv(m),Zx(32).reset(),e_(n.restore())}),ug()()}if(r&2){let m=Zx(32);cE(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-detail-display`,n.detailDisplay)(`p-field-properties`,n.fieldProperties)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-select`,n.properties.includes(`select`))(`p-single-select`,n.properties.includes(`singleSelect`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`))(`p-tag-position`,n.tagPosition),Hp(8),cE(`p-value`,n.titleAction),Hp(6),cE(`ngModel`,n.propertyTitle)(`p-options`,n.propertyTitleOptions),m0(),Hp(),cE(`ngModel`,n.propertySubtitle)(`p-options`,n.propertyTitleOptions),m0(),Hp(),TE(`ngModel`,n.propertyLinkValue),m0(),Hp(),cE(`ngModel`,n.propertyTag)(`p-options`,n.propertyTitleOptions),m0(),Hp(),cE(`ngModel`,n.tagTypeValue)(`p-options`,n.tagTypeValueOptions),m0(),Hp(),cE(`ngModel`,n.avatarType)(`p-options`,n.avatarPropertyOptions),m0(),Hp(),cE(`ngModel`,n.highlightedValue)(`p-options`,n.highlightedValueOptions),m0(),Hp(2),TE(`ngModel`,n.height),m0(),Hp(),TE(`ngModel`,n.literals),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-columns`,2)(`p-options`,n.componentsSizeOptions),m0(),Hp(),TE(`ngModel`,n.detailDisplay),cE(`p-columns`,2)(`p-options`,n.detailDisplayOptions),m0(),Hp(),TE(`ngModel`,n.tagPosition),cE(`p-columns`,3)(`p-options`,n.tagPositionOptions),m0(),Hp(2),TE(`ngModel`,n.properties),cE(`p-columns`,4)(`p-options`,n.propertiesOptions),m0(),Hp(6),TE(`ngModel`,n.action.label),m0(),Hp(),TE(`ngModel`,n.action.action),m0(),Hp(),TE(`ngModel`,n.action.url),m0(),Hp(),cE(`ngModel`,n.action.type)(`p-options`,n.typeOptions),m0(),Hp(),cE(`ngModel`,n.action.icon)(`p-options`,n.iconOptions),m0(),Hp(),TE(`ngModel`,n.action),cE(`p-columns`,4)(`p-options`,n.actionOptions),m0(),Hp(2),cE(`p-disabled`,m.invalid)}},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,C4,eoe,wte,noe,soe,_ze,Eoe,Aoe,Ioe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-detail-display]="detailDisplay"
  [p-field-properties]="fieldProperties"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-select]="properties.includes('select')"
  [p-single-select]="properties.includes('singleSelect')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-tag-position]="tagPosition"
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
  <po-widget class="po-md-12 po-pb-3" p-title="Field Properties">
    <div class="po-row">
      <po-select
        class="po-md-6 po-lg-3"
        name="propertyTitle"
        [ngModel]="propertyTitle"
        (ngModelChange)="propertyTitle = $event"
        p-label="Property title"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="propertySubtitle"
        [ngModel]="propertySubtitle"
        (ngModelChange)="propertySubtitle = $event"
        p-clean
        p-label="Property subtitle"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="propertyLinkValue" [(ngModel)]="propertyLinkValue" p-label="Title Link">
      </po-input>

      <po-select
        class="po-md-6 po-lg-3"
        name="propertyTag"
        [ngModel]="propertyTag"
        (ngModelChange)="propertyTag = $event"
        p-clean
        p-label="Property tag"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="tagTypeValue"
        [ngModel]="tagTypeValue"
        (ngModelChange)="tagTypeValue = $event; applyTagType()"
        p-label="Property tag type"
        [p-options]="tagTypeValueOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="avatarType"
        [ngModel]="avatarType"
        (ngModelChange)="avatarType = $event; applyAvatar()"
        p-label="Property avatar"
        [p-options]="avatarPropertyOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="highlightedValue"
        [ngModel]="highlightedValue"
        (ngModelChange)="highlightedValue = $event; applyHighlighted()"
        p-label="Property highlighted"
        [p-options]="highlightedValueOptions"
      >
      </po-select>
    </div>
  </po-widget>

  <div class="po-row">
    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-12 po-lg-9"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="size"
      [(ngModel)]="componentsSize"
      [p-columns]="2"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="detailDisplay"
      [(ngModel)]="detailDisplay"
      [p-columns]="2"
      p-label="Detail display"
      [p-options]="detailDisplayOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      [p-columns]="3"
      p-label="Tag position"
      [p-options]="tagPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      [p-columns]="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<po-widget p-title="Actions">
  <form #actionForm="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-md-6 po-lg-3"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [(ngModel)]="action"
        [p-columns]="4"
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
</po-widget>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewFieldProperties,
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

  action!: PoListViewAction;
  actions!: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals?: PoListViewLiterals;
  detailDisplay: string = 'inline';
  height?: number;
  items!: Array<any>;
  literals!: string;
  properties!: Array<string>;
  propertyAvatar!: string;
  avatarType!: string;
  propertyHighlighted!: string;
  propertyLink!: string;
  propertyLinkValue!: string;
  propertySubtitle!: string;
  propertyTag!: string;
  propertyTagType!: string;
  propertyTitle!: string;
  tagPosition: string = 'bottom';
  tagTypeValue: string = '';
  highlightedValue: string = 'read';
  titleAction!: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'singleSelect', label: 'Single Select' },
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

  readonly detailDisplayOptions: Array<PoRadioGroupOption> = [
    { label: 'inline', value: 'inline' },
    { label: 'modal', value: 'modal' }
  ];

  readonly tagPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'none', label: 'None' },
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  // Tipos de avatar v\xE1lidos aplicados ao campo \`avatar\` de todos os itens.
  readonly avatarPropertyOptions: Array<PoSelectOption> = [
    { value: 'none', label: 'None' },
    { value: 'image', label: 'Image (URL)' },
    { value: 'icon', label: 'Icon' },
    { value: 'progress', label: 'Progress' },
    { value: 'indeterminate', label: 'Progress (indeterminate)' }
  ];

  // Valores de tipo de tag aplicados ao campo \`tagType\` de todos os itens.
  readonly tagTypeValueOptions: Array<PoSelectOption> = [
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'danger', label: 'Danger' },
    { value: 'warning', label: 'Warning' },
    { value: 'neutral', label: 'Neutral' }
  ];

  readonly highlightedValueOptions: Array<PoSelectOption> = [
    { value: 'read', label: 'read' },
    { value: 'unread', label: 'unread' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  get fieldProperties(): PoListViewFieldProperties {
    const properties: PoListViewFieldProperties = {};

    if (this.isMapped(this.propertyTitle)) {
      properties.title = this.propertyTitle;
    }
    if (this.isMapped(this.propertySubtitle)) {
      properties.subtitle = this.propertySubtitle;
    }
    if (this.isMapped(this.propertyLink)) {
      properties.link = this.propertyLink;
    }
    if (this.isMapped(this.propertyAvatar)) {
      properties.avatar = this.propertyAvatar;
    }
    if (this.isMapped(this.propertyHighlighted)) {
      properties.highlighted = this.propertyHighlighted;
    }
    if (this.isMapped(this.propertyTag)) {
      properties.tag = { value: this.propertyTag, type: this.propertyTagType };
    }

    return properties;
  }

  private isMapped(value: string): boolean {
    return !!value && value !== 'none';
  }

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    const actionLabel = newAction.action as unknown as string;
    newAction.action = actionLabel ? this.showAction.bind(this, actionLabel) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  applyTagType() {
    this.items = this.items.map(item => ({ ...item, tagType: this.tagTypeValue }));
  }

  applyHighlighted() {
    this.propertyHighlighted = 'unread';
    const unread = this.highlightedValue === 'unread';
    this.items = this.items.map(item => ({ ...item, unread }));
  }

  applyAvatar() {
    if (!this.avatarType || this.avatarType === 'none') {
      this.propertyAvatar = '';
      this.items = this.items.map(item => ({ ...item, avatar: undefined }));
      return;
    }

    this.propertyAvatar = 'avatar';
    this.items = this.items.map((item, index) => ({ ...item, avatar: this.buildAvatarValue(index + 1) }));
  }

  changeAction(action: string) {
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
    // Propriedades com valor default no componente
    this.componentsSize = 'medium';
    this.detailDisplay = 'inline';
    this.tagPosition = 'bottom';
    // Propriedades opcionais (iniciam em None)
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyAvatar = '';
    this.avatarType = 'none';
    this.propertyHighlighted = 'unread';
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertySubtitle = 'none';
    this.propertyTag = 'none';
    this.propertyTagType = 'tagType';
    this.propertyTitle = 'none';
    this.tagTypeValue = 'success';
    this.highlightedValue = 'read';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index: number) {
    const tagTypes = ['success', 'info', 'warning', 'danger', 'neutral'];

    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`,
      tag: index % 2 === 0 ? 'Completed' : 'In progress',
      tagType: this.tagTypeValue || tagTypes[index % tagTypes.length],
      subtitle: \`\${index * 5} min ago\`,
      avatar: this.buildAvatarValue(index),
      unread: this.highlightedValue === 'unread'
    };
  }

  // Monta o valor de avatar conforme o tipo selecionado no laborat\xF3rio.
  private buildAvatarValue(index: number): any {
    switch (this.avatarType) {
      case 'image':
        return \`https://i.pravatar.cc/150?img=\${index}\`;
      case 'icon':
        return { icon: 'an an-user', color: '#1a73e8', backgroundColor: '#e8f0fe' };
      case 'progress':
        return { progress: (index * 15) % 100, showPercentage: true, size: 'large', radius: 35 };
      case 'indeterminate':
        return { indeterminate: true, size: 'large', radius: 35 };
      default:
        return undefined;
    }
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: true
    };
  }

  private showAction(action: string): void {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-list-view-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,tt,n.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ke],encapsulation:2,changeDetection:1})}return a})();var Q=(()=>{class a{getItems(){return[{hireStatus:`hired`,hireTagType:`success`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=11`},{hireStatus:`progress`,hireTagType:`info`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=12`},{hireStatus:`canceled`,hireTagType:`danger`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=13`},{hireStatus:`progress`,hireTagType:`info`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=14`},{hireStatus:`hired`,hireTagType:`success`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=15`},{hireStatus:`progress`,hireTagType:`info`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`,avatar:`https://i.pravatar.cc/150?img=16`},{hireStatus:`progress`,hireTagType:`info`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`,avatar:`https://i.pravatar.cc/150?img=17`},{hireStatus:`progress`,hireTagType:`info`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=18`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var nt=[`detailsModal`];function ot(a,v){if(a&1&&(Ac(0,`div`,6),Kc(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),FN(4,`uppercase`),ug()),a&2){let o=v.$implicit;Hp(),cE(`p-value`,o.idCard),Hp(),cE(`p-value`,o.jobDescription),Hp(),cE(`p-value`,bN(VN(4,4,o.hireStatus)))}}function at(a,v){if(a&1&&(Ac(0,`div`,6),Kc(1,`po-info`,17)(2,`po-info`,18),ug()),a&2){let o=v.$implicit;Hp(),cE(`p-value`,o.age),Hp(),cE(`p-value`,o.city)}}var Oe=(()=>{class a{poNotification=f(Lu);hiringProcessesService=f(Q);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;fieldProperties={title:`name`,subtitle:`jobDescription`,link:`url`,avatar:`avatar`,tag:{value:`hireStatus`,type:`hireTagType`}};actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let r=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(m=>!(n[m]instanceof Object)&&this.includeFilter(n[m],r)))}includeFilter(o,r){return r.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(r=>{if(r.$selected){switch(r.hireStatus){case`progress`:o.call(this,r);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}r.$selected=!1}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Xc(nt,7),r&2){let m;fo(m=ho())&&(n.detailsModalElement=m.first)}},standalone:!1,features:[be([Q])],decls:16,vars:12,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-select`,``,`p-tag-position`,`bottom`,3,`p-title-action`,`p-actions`,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(r,n){r&1&&(Ac(0,`po-page-list`,1)(1,`po-list-view`,2),pt(`p-title-action`,function(u){return n.showDetailModal(u)}),sE(2,ot,5,6,`ng-template`,3)(3,at,3,2,`ng-template`,4),ug(),Ac(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),Kc(8,`po-avatar`,8),ug(),Ac(9,`div`,9)(10,`div`,10),Kc(11,`po-tag`,11),ug(),Ac(12,`div`,10),Kc(13,`po-info`,12),ug(),Ac(14,`div`,10),Kc(15,`po-info`,13),ug()()()()()),r&2&&(cE(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),Hp(),cE(`p-actions`,n.actions)(`p-field-properties`,n.fieldProperties)(`p-items`,n.hiringProcessesFiltered),Hp(),cE(`p-title`,n.formatTitle),Hp(),cE(`p-show-detail`,n.showDetail),Hp(),cE(`p-title`,n.titleDetailsModal),Hp(7),cE(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),Hp(2),cE(`p-value`,n.selectedActionItem.email),Hp(2),cE(`p-value`,n.selectedActionItem.telephone))},dependencies:[H5,xs,soe,_ze,Eoe,Aoe,ta,Sze,ek],encapsulation:2,changeDetection:1})}return a})();var rt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO List View - Hiring Processes`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-select
    p-tag-position="bottom"
    [p-actions]="actions"
    [p-field-properties]="fieldProperties"
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
  PoListViewFieldProperties,
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

  @ViewChild('detailsModal', { static: true }) detailsModalElement!: PoModalComponent;

  hiringProcesses!: Array<any>;
  hiringProcessesFiltered!: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem: any = {};
  titleDetailsModal: string = 'User Detail';

  readonly fieldProperties: PoListViewFieldProperties = {
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  };

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

  formatTitle(item: any) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item: any) {
    return item.url;
  }

  showDetailModal(item: any) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate: any) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find((candidate: any) => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate: any) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter((item: any) =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item: any, filters: Array<string>) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate: any): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem: any) {
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
        hireTagType: 'success',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        hireStatus: 'canceled',
        hireTagType: 'danger',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer',
        avatar: 'https://i.pravatar.cc/150?img=13'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=14'
      },
      {
        hireStatus: 'hired',
        hireTagType: 'success',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=15'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant',
        avatar: 'https://i.pravatar.cc/150?img=16'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA',
        avatar: 'https://i.pravatar.cc/150?img=17'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer',
        avatar: 'https://i.pravatar.cc/150?img=18'
      }
    ];
  }
}
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-list-view-hiring-processes`),ug(),Kc(27,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,rt,n.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Oe],encapsulation:2,changeDetection:1})}return a})();var He=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:1671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoListViewDetailDisplay`],[`pan`,``,1,`docs-api-property-type`,`PoListViewFieldProperties`],[`href`,`/documentation/po-list-view#fieldProperties`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[1,`docs-api-deprecated-marker`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`{`,`value?:`,`string;`,`type?:`,`string;`,`}`]],template:function(r,n){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoListViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-list-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoListViewComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O componente `),Ac(18,`code`),vN(19,`po-list-view`),ug(),vN(20,` é responsável por renderizar de forma dinâmica uma lista de dados baseada em um `),Ac(21,`em`),vN(22,`array`),ug(),vN(23,` de
objetos, adaptando-se \xE0s necessidades visuais de cada interface.`),ug(),Ac(24,`p`),vN(25,`Cada item da lista é construído internamente utilizando a estrutura de um `),Ac(26,`code`),vN(27,`po-widget`),ug(),vN(28,`, assegurando consist\xEAncia visual.
Para layouts complexos, o componente oferece flexibilidade atrav\xE9s das diretivas
de templates `),Ac(29,`strong`)(30,`a`,6),vN(31,`p-list-view-content-template`),ug()(),vN(32,` e
`),Ac(33,`strong`)(34,`a`,7),vN(35,`p-list-view-detail-template`),ug()(),vN(36,` para customiza\xE7\xE3o do conte\xFAdo e exibi\xE7\xE3o
de informa\xE7\xF5es adicionais.`),ug(),Ac(37,`p`),vN(38,`A interação com o componente pode ser realizada com o `),Ac(39,`em`),vN(40,`mouse`),ug(),vN(41,` ou pelo teclado. A navega\xE7\xE3o entre os elementos
interativos \xE9 feita utilizando a tecla `),Ac(42,`code`),vN(43,`TAB`),ug(),vN(44,`. Os elementos que recebem foco ao navegar incluem:`),ug(),Ac(45,`ul`)(46,`li`),vN(47,`O próprio item (quando a propriedade de clique estiver ativa);`),ug(),Ac(48,`li`),vN(49,`Título do item (quando configurado como `),Ac(50,`em`),vN(51,`link`),ug(),vN(52,`);`),ug(),Ac(53,`li`),vN(54,`Ações do item configuradas em `),Ac(55,`code`),vN(56,`p-actions`),ug(),vN(57,`;`),ug(),Ac(58,`li`),vN(59,`Botão de controle de detalhes (para expandir ou abrir modal);`),ug(),Ac(60,`li`),vN(61,`Colunas de seleção (única ou múltipla);`),ug(),Ac(62,`li`),vN(63,`Botão de carregar mais resultados (`),Ac(64,`code`),vN(65,`p-show-more`),ug(),vN(66,`).`),ug()(),Ac(67,`p`),vN(68,`A execução das ações focadas ou a marcação de itens nas colunas de seleção é realizada com as teclas `),Ac(69,`code`),vN(70,`Enter`),ug(),vN(71,` ou
`),Ac(72,`code`),vN(73,`Espaço`),ug(),vN(74,`.`),ug(),Ac(75,`h4`),vN(76,`Tokens customizáveis`),ug(),Ac(77,`p`),vN(78,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(79,`blockquote`)(80,`p`),vN(81,`Para maiores informações, acesse o guia `),Ac(82,`a`,8),vN(83,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(84,`.`),ug()(),Ac(85,`table`)(86,`thead`)(87,`tr`)(88,`th`),vN(89,`Propriedade`),ug(),Ac(90,`th`),vN(91,`Descrição`),ug(),Ac(92,`th`),vN(93,`Valor Padrão`),ug()()(),Ac(94,`tbody`)(95,`tr`)(96,`td`)(97,`strong`),vN(98,`Título`),ug()(),Kc(99,`td`)(100,`td`),ug(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--title-color`),ug()(),Ac(105,`td`),vN(106,`Cor do título do item`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--title-color)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--title-font-family`),ug()(),Ac(114,`td`),vN(115,`Família tipográfica do título`),ug(),Ac(116,`td`)(117,`code`),vN(118,`var(--font-family-theme)`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--title-font-size`),ug()(),Ac(123,`td`),vN(124,`Tamanho da fonte do título`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--font-size-default)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--title-line-height`),ug()(),Ac(132,`td`),vN(133,`Altura da linha do título`),ug(),Ac(134,`td`)(135,`code`),vN(136,`var(--line-height-md)`),ug()()(),Ac(137,`tr`)(138,`td`)(139,`code`),vN(140,`--title-color-hover`),ug()(),Ac(141,`td`),vN(142,`Cor do título no estado hover`),ug(),Ac(143,`td`)(144,`code`),vN(145,`var(--color-action-hover)`),ug()()(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--title-color-selected`),ug()(),Ac(150,`td`),vN(151,`Cor do título quando o item está selecionado`),ug(),Ac(152,`td`)(153,`code`),vN(154,`var(--color-action-focus)`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`strong`),vN(158,`Subtítulo (Support Message)`),ug()(),Kc(159,`td`)(160,`td`),ug(),Ac(161,`tr`)(162,`td`)(163,`code`),vN(164,`--support-message-color`),ug()(),Ac(165,`td`),vN(166,`Cor da mensagem de apoio`),ug(),Ac(167,`td`)(168,`code`),vN(169,`var(--color-neutral-dark-80)`),ug()()(),Ac(170,`tr`)(171,`td`)(172,`code`),vN(173,`--support-message-font-family`),ug()(),Ac(174,`td`),vN(175,`Família tipográfica da mensagem de apoio`),ug(),Ac(176,`td`)(177,`code`),vN(178,`var(--font-family-theme)`),ug()()(),Ac(179,`tr`)(180,`td`)(181,`code`),vN(182,`--support-message-font-size`),ug()(),Ac(183,`td`),vN(184,`Tamanho da fonte da mensagem de apoio`),ug(),Ac(185,`td`)(186,`code`),vN(187,`var(--font-size-sm)`),ug()()(),Ac(188,`tr`)(189,`td`)(190,`code`),vN(191,`--support-message-line-height`),ug()(),Ac(192,`td`),vN(193,`Altura da linha da mensagem de apoio`),ug(),Ac(194,`td`)(195,`code`),vN(196,`var(--line-height-none)`),ug()()(),Ac(197,`tr`)(198,`td`)(199,`code`),vN(200,`--support-message-color-selected`),ug()(),Ac(201,`td`),vN(202,`Cor da mensagem de apoio quando o item está selecionado`),ug(),Ac(203,`td`)(204,`code`),vN(205,`var(--color-action-focus)`),ug()()(),Ac(206,`tr`)(207,`td`)(208,`strong`),vN(209,`Item - Normal`),ug()(),Kc(210,`td`)(211,`td`),ug(),Ac(212,`tr`)(213,`td`)(214,`code`),vN(215,`--list-item-background`),ug()(),Ac(216,`td`),vN(217,`Cor de fundo do item`),ug(),Ac(218,`td`)(219,`code`),vN(220,`var(--list-item-background)`),ug()()(),Ac(221,`tr`)(222,`td`)(223,`code`),vN(224,`--list-item-border-color`),ug()(),Ac(225,`td`),vN(226,`Cor da borda do item`),ug(),Ac(227,`td`)(228,`code`),vN(229,`var(--list-item-border-color)`),ug()()(),Ac(230,`tr`)(231,`td`)(232,`code`),vN(233,`--list-item-border-width`),ug()(),Ac(234,`td`),vN(235,`Largura da borda do item`),ug(),Ac(236,`td`)(237,`code`),vN(238,`var(--border-width-sm)`),ug()()(),Ac(239,`tr`)(240,`td`)(241,`code`),vN(242,`--list-item-border-radius`),ug()(),Ac(243,`td`),vN(244,`Raio de arredondamento dos cantos do item`),ug(),Ac(245,`td`)(246,`code`),vN(247,`var(--border-radius-md)`),ug()()(),Ac(248,`tr`)(249,`td`)(250,`code`),vN(251,`--list-item-shadow`),ug()(),Ac(252,`td`),vN(253,`Sombra base do item`),ug(),Ac(254,`td`)(255,`code`),vN(256,`var(--shadow-md)`),ug()()(),Ac(257,`tr`)(258,`td`)(259,`strong`),vN(260,`Item - Selecionado`),ug()(),Kc(261,`td`)(262,`td`),ug(),Ac(263,`tr`)(264,`td`)(265,`code`),vN(266,`--list-item-background-selected`),ug()(),Ac(267,`td`),vN(268,`Cor de fundo do item selecionado`),ug(),Ac(269,`td`)(270,`code`),vN(271,`var(--color-brand-01-lightest)`),ug()()(),Ac(272,`tr`)(273,`td`)(274,`code`),vN(275,`--list-item-border-color-selected`),ug()(),Ac(276,`td`),vN(277,`Cor da borda do item selecionado`),ug(),Ac(278,`td`)(279,`code`),vN(280,`var(--color-action-default)`),ug()()(),Ac(281,`tr`)(282,`td`)(283,`strong`),vN(284,`Item - Hover`),ug()(),Kc(285,`td`)(286,`td`),ug(),Ac(287,`tr`)(288,`td`)(289,`code`),vN(290,`--list-item-border-color-hover`),ug()(),Ac(291,`td`),vN(292,`Cor da borda do item no estado hover`),ug(),Ac(293,`td`)(294,`code`),vN(295,`var(--color-action-hover)`),ug()()(),Ac(296,`tr`)(297,`td`)(298,`code`),vN(299,`--list-item-shadow-hover`),ug()(),Ac(300,`td`),vN(301,`Sombra do item no estado hover`),ug(),Ac(302,`td`)(303,`code`),vN(304,`var(--shadow-lg)`),ug()()(),Ac(305,`tr`)(306,`td`)(307,`strong`),vN(308,`Item - Focus`),ug()(),Kc(309,`td`)(310,`td`),ug(),Ac(311,`tr`)(312,`td`)(313,`code`),vN(314,`--list-item-color-focused`),ug()(),Ac(315,`td`),vN(316,`Cor da borda do item no estado focus`),ug(),Ac(317,`td`)(318,`code`),vN(319,`var(--color-action-default)`),ug()()(),Ac(320,`tr`)(321,`td`)(322,`code`),vN(323,`--list-item-outline-color-focused`),ug()(),Ac(324,`td`),vN(325,`Cor do outline do item no estado focus`),ug(),Ac(326,`td`)(327,`code`),vN(328,`var(--color-action-focus)`),ug()()(),Ac(329,`tr`)(330,`td`)(331,`strong`),vN(332,`Destaque (Highlighted)`),ug()(),Kc(333,`td`)(334,`td`),ug(),Ac(335,`tr`)(336,`td`)(337,`code`),vN(338,`--list-item-background-highlighted`),ug()(),Ac(339,`td`),vN(340,`Cor de fundo do item destacado`),ug(),Ac(341,`td`)(342,`code`),vN(343,`var(--color-brand-01-lightest)`),ug()()(),Ac(344,`tr`)(345,`td`)(346,`strong`),vN(347,`Motion`),ug()(),Kc(348,`td`)(349,`td`),ug(),Ac(350,`tr`)(351,`td`)(352,`code`),vN(353,`--list-item-transition-duration`),ug()(),Ac(354,`td`),vN(355,`Duração da transição do item`),ug(),Ac(356,`td`)(357,`code`),vN(358,`var(--duration-normal)`),ug()()(),Ac(359,`tr`)(360,`td`)(361,`code`),vN(362,`--list-item-transition-property`),ug()(),Ac(363,`td`),vN(364,`Propriedades CSS animadas`),ug(),Ac(365,`td`)(366,`code`),vN(367,`all`),ug()()(),Ac(368,`tr`)(369,`td`)(370,`code`),vN(371,`--list-item-transition-timing`),ug()(),Ac(372,`td`),vN(373,`Curva de aceleração da transição`),ug(),Ac(374,`td`)(375,`code`),vN(376,`var(--timing-standard, var(--timing-standart, ease))`),ug()()()()()(),Ac(377,`div`,9)(378,`h4`,10),vN(379,`Seletor`),ug(),Ac(380,`pre`,11),vN(381,`<po-list-view
    p-actions="PoListViewAction[]"
    p-avatar-size="string"
    p-components-size="string"
    p-detail-display="PoListViewDetailDisplay"
    p-field-properties="PoListViewFieldProperties"
    p-height="number"
    p-hide-select-all="boolean"
    (p-item-click)="EventEmitter"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-tag-position="string"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),ug()(),Ac(382,`h4`,12),vN(383,`Propriedades`),ug(),Ac(384,`table`,13)(385,`tr`,14)(386,`th`,15),vN(387,`Nome`),ug(),Ac(388,`th`,15),vN(389,`Tipo`),ug(),Ac(390,`th`,15),vN(391,`Padrão`),ug(),Ac(392,`th`,15),vN(393,`Descrição`),ug()(),Ac(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),vN(398,` p-actions`),Kc(399,`br`),ug()()(),Ac(400,`td`,20)(401,`code`,21),vN(402,`PoListViewAction[]`),ug()(),Ac(403,`td`,22),vN(404,`-`),ug(),Ac(405,`td`,23)(406,`em`)(407,`strong`),vN(408,`(opcional)`),ug()(),Ac(409,`p`),vN(410,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
As propriedades das a\xE7\xF5es seguem a interface `),Ac(411,`code`),vN(412,`PoPopupAction`),ug(),vN(413,`.`),ug()()(),Ac(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),vN(418,` p-avatar-size`),Kc(419,`br`),ug()()(),Ac(420,`td`,20)(421,`code`,24),vN(422,`string`),ug()(),Ac(423,`td`,22)(424,`p`)(425,`code`),vN(426,`md`),ug()()(),Ac(427,`td`,23)(428,`em`)(429,`strong`),vN(430,`(opcional)`),ug()(),Ac(431,`p`),vN(432,`Define o tamanho do avatar do tipo `),Ac(433,`strong`),vN(434,`imagem`),ug(),vN(435,` (URL).`),ug(),Ac(436,`p`),vN(437,`Valores válidos:`),ug(),Ac(438,`ul`)(439,`li`)(440,`code`),vN(441,`xs`),ug(),vN(442,` (24x24)`),ug(),Ac(443,`li`)(444,`code`),vN(445,`sm`),ug(),vN(446,` (32x32)`),ug(),Ac(447,`li`)(448,`code`),vN(449,`md`),ug(),vN(450,` (64x64)`),ug(),Ac(451,`li`)(452,`code`),vN(453,`lg`),ug(),vN(454,` (96x96)`),ug(),Ac(455,`li`)(456,`code`),vN(457,`xl`),ug(),vN(458,` (144x144)`),ug()(),Ac(459,`blockquote`)(460,`p`),vN(461,`Incompatível com os demais tipos de avatar (icon, progress, customTemplate).`),ug()()()(),Ac(462,`tr`,16)(463,`td`,17)(464,`div`,18)(465,`span`,19),vN(466,` p-components-size`),Kc(467,`br`),ug()()(),Ac(468,`td`,20)(469,`code`,24),vN(470,`string`),ug()(),Ac(471,`td`,22)(472,`p`)(473,`code`),vN(474,`medium`),ug()()(),Ac(475,`td`,23)(476,`em`)(477,`strong`),vN(478,`(opcional)`),ug()(),Ac(479,`p`),vN(480,`Define o dimensionamento geral dos elementos no template.`),ug(),Ac(481,`ul`)(482,`li`)(483,`code`),vN(484,`small`),ug(),vN(485,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(486,`li`)(487,`code`),vN(488,`medium`),ug(),vN(489,`: aplica a medida medium de cada componente.`),ug()(),Ac(490,`blockquote`)(491,`p`),vN(492,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(493,`code`),vN(494,`medium`),ug(),vN(495,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(496,`a`,25),vN(497,`po-theme`),ug(),vN(498,`.`),ug()()()(),Ac(499,`tr`,16)(500,`td`,17)(501,`div`,18)(502,`span`,19),vN(503,` p-detail-display`),Kc(504,`br`),ug()()(),Ac(505,`td`,20)(506,`code`,26),vN(507,`PoListViewDetailDisplay`),ug()(),Ac(508,`td`,22)(509,`p`)(510,`code`),vN(511,`inline`),ug()()(),Ac(512,`td`,23)(513,`em`)(514,`strong`),vN(515,`(opcional)`),ug()(),Ac(516,`p`),vN(517,`Define como o detalhe do item (diretiva `),Ac(518,`code`),vN(519,`p-list-view-detail-template`),ug(),vN(520,`) ser\xE1 exibido:
A utiliza\xE7\xE3o desta propriedade renderiza um bot\xE3o de a\xE7\xE3o (como "Exibir detalhes" ou "Ver detalhes") no rodap\xE9 do item
para controlar a visualiza\xE7\xE3o do conte\xFAdo.`),ug(),Ac(521,`p`),vN(522,`Valores válidos:`),ug(),Ac(523,`ul`)(524,`li`)(525,`code`),vN(526,`inline`),ug(),vN(527,`: expande o conteúdo do detalhe abaixo do item.`),ug(),Ac(528,`li`)(529,`code`),vN(530,`modal`),ug(),vN(531,`: exibe o conteúdo do detalhe no corpo de um `),Ac(532,`code`),vN(533,`po-modal`),ug(),vN(534,`.`),ug()(),Ac(535,`blockquote`)(536,`p`),vN(537,`Incompatível com o evento `),Ac(538,`code`),vN(539,`p-item-click`),ug(),vN(540,`.`),ug()()()(),Ac(541,`tr`,16)(542,`td`,17)(543,`div`,18)(544,`span`,19),vN(545,` p-field-properties`),Kc(546,`br`),ug()()(),Ac(547,`td`,20)(548,`code`,27),vN(549,`PoListViewFieldProperties`),ug()(),Ac(550,`td`,22),vN(551,`-`),ug(),Ac(552,`td`,23)(553,`em`)(554,`strong`),vN(555,`(opcional)`),ug()(),Ac(556,`p`),vN(557,`Consolida, em um único objeto tipado (`),Ac(558,`a`,28)(559,`code`),vN(560,`PoListViewFieldProperties`),ug()(),vN(561,`),
o mapeamento entre as propriedades do item e as \xE1reas visuais do componente (t\xEDtulo, subt\xEDtulo,
link, avatar, destaque e tag).`),ug(),Ac(562,`pre`)(563,`code`),vN(564,`<po-list-view
  [p-field-properties]="{
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    highlighted: 'unread',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  }">
</po-list-view>
`),ug()()()(),Ac(565,`tr`,16)(566,`td`,17)(567,`div`,18)(568,`span`,19),vN(569,` p-height`),Kc(570,`br`),ug()()(),Ac(571,`td`,20)(572,`code`,29),vN(573,`number`),ug()(),Ac(574,`td`,22),vN(575,`-`),ug(),Ac(576,`td`,23)(577,`em`)(578,`strong`),vN(579,`(opcional)`),ug()(),Ac(580,`p`),vN(581,`Define a altura da lista em `),Ac(582,`em`),vN(583,`px`),ug(),vN(584,`, desconsiderando o espaço do botão `),Ac(585,`code`),vN(586,`p-show-more`),ug(),vN(587,`.`),ug(),Ac(588,`blockquote`)(589,`p`),vN(590,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),ug()()()(),Ac(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),vN(595,` p-hide-select-all`),Kc(596,`br`),ug()()(),Ac(597,`td`,20)(598,`code`,30),vN(599,`boolean`),ug()(),Ac(600,`td`,22)(601,`p`)(602,`code`),vN(603,`false`),ug()()(),Ac(604,`td`,23)(605,`em`)(606,`strong`),vN(607,`(opcional)`),ug()(),Ac(608,`p`),vN(609,`Habilita a seleção de itens na lista.`),ug(),Ac(610,`p`),vN(611,`Por padrão, renderiza um `),Ac(612,`em`),vN(613,`checkbox`),ug(),vN(614,` para seleção múltipla. Caso a propriedade `),Ac(615,`code`),vN(616,`p-single-select`),ug(),vN(617,` esteja habilitada,
renderiza um bot\xE3o `),Ac(618,`em`),vN(619,`radio`),ug(),vN(620,` para seleção única.`),ug(),Ac(621,`p`),vN(622,`Ao utilizar esta propriedade, todos os itens recebem a propriedade dinâmica `),Ac(623,`code`),vN(624,`$selected`),ug(),vN(625,` para identificar o seu estado
de sele\xE7\xE3o. Por exemplo:`),ug(),Ac(626,`pre`)(627,`code`),vN(628,`item.$selected

// ou

item['$selected']
`),ug()()()(),Ac(629,`tr`,16)(630,`td`,17)(631,`div`,31)(632,`span`,32),vN(633,` (p-item-click)`),Kc(634,`br`),ug()()(),Ac(635,`td`,20)(636,`code`,33),vN(637,`EventEmitter`),ug()(),Ac(638,`td`,22),vN(639,`-`),ug(),Ac(640,`td`,23)(641,`em`)(642,`strong`),vN(643,`(opcional)`),ug()(),Ac(644,`p`),vN(645,`A\xE7\xE3o que ser\xE1 executada ao clicar no item da lista. Quando definida, torna o item clic\xE1vel.
Retorna o item da lista clicado.`),ug(),Ac(646,`blockquote`)(647,`p`),vN(648,`O evento é desabilitado caso o item possua duas ou mais ações visíveis (`),Ac(649,`code`),vN(650,`p-actions`),ug(),vN(651,`).`),ug()()()(),Ac(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),vN(656,` p-items`),Kc(657,`br`),ug()()(),Ac(658,`td`,20)(659,`code`,34),vN(660,`any[]`),ug()(),Ac(661,`td`,22),vN(662,`-`),ug(),Ac(663,`td`,23)(664,`p`),vN(665,`Lista de itens que serão exibidos no componente.`),ug(),Ac(666,`p`),vN(667,`A renderização dos dados depende do mapeamento das chaves dos objetos através da propriedade `),Ac(668,`code`),vN(669,`p-field-properties`),ug(),vN(670,`.`),ug(),Ac(671,`p`),vN(672,`Exemplo de uso:`),ug(),Ac(673,`pre`)(674,`code`),vN(675,`const listItems = [
  { name: 'John Doe', job: 'Developer' },
  { name: 'Jane Smith', job: 'Designer' }
];

const listMapping = {
  title: 'name',
  subtitle: 'job'
};
`),ug()(),Ac(676,`pre`)(677,`code`),vN(678,`<po-list-view
  [p-items]="listItems"
  [p-field-properties]="listMapping">
</po-list-view>
`),ug()()()(),Ac(679,`tr`,16)(680,`td`,17)(681,`div`,18)(682,`span`,19),vN(683,` p-literals`),Kc(684,`br`),ug()()(),Ac(685,`td`,20)(686,`code`,35),vN(687,`PoListViewLiterals`),ug()(),Ac(688,`td`,22),vN(689,`-`),ug(),Ac(690,`td`,23)(691,`em`)(692,`strong`),vN(693,`(opcional)`),ug()(),Ac(694,`p`),vN(695,`Objeto com as literais usadas no po-list-view, permitindo personalizar os textos exibidos no componente.`),ug(),Ac(696,`p`),vN(697,`Exemplo de uso:`),ug(),Ac(698,`pre`)(699,`code`),vN(700,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),ug()(),Ac(701,`pre`)(702,`code`),vN(703,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),ug()(),Ac(704,`blockquote`)(705,`p`),vN(706,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(707,`a`,36)(708,`code`),vN(709,`PoI18nService`),ug()(),vN(710,` ou do browser.`),ug()()()(),Ac(711,`tr`,16)(712,`td`,17)(713,`div`,18)(714,`span`,19),vN(715,` p-property-link`),Kc(716,`br`),ug()(),Ac(717,`div`,37),vN(718,`Deprecated`),ug()(),Ac(719,`td`,20)(720,`code`,24),vN(721,`string`),ug()(),Ac(722,`td`,22),vN(723,`-`),ug(),Ac(724,`td`,23)(725,`em`)(726,`strong`),vN(727,`(opcional)`),ug()(),Ac(728,`p`),vN(729,`Chave do objeto (`),Ac(730,`code`),vN(731,`p-items`),ug(),vN(732,`) com o `),Ac(733,`em`),vN(734,`link`),ug(),vN(735,` do título do item.`),ug(),Ac(736,`blockquote`)(737,`p`),vN(738,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Ac(739,`code`),vN(740,`p-field-properties`),ug(),vN(741,`.`),ug()()()(),Ac(742,`tr`,16)(743,`td`,17)(744,`div`,18)(745,`span`,19),vN(746,` p-property-title`),Kc(747,`br`),ug()(),Ac(748,`div`,37),vN(749,`Deprecated`),ug()(),Ac(750,`td`,20)(751,`code`,24),vN(752,`string`),ug()(),Ac(753,`td`,22),vN(754,`-`),ug(),Ac(755,`td`,23)(756,`em`)(757,`strong`),vN(758,`(opcional)`),ug()(),Ac(759,`p`),vN(760,`Chave do objeto (`),Ac(761,`code`),vN(762,`p-items`),ug(),vN(763,`) com o título do item.`),ug(),Ac(764,`blockquote`)(765,`p`),vN(766,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Ac(767,`code`),vN(768,`p-field-properties`),ug(),vN(769,`.`),ug()()()(),Ac(770,`tr`,16)(771,`td`,17)(772,`div`,18)(773,`span`,19),vN(774,` p-select`),Kc(775,`br`),ug()()(),Ac(776,`td`,20)(777,`code`,30),vN(778,`boolean`),ug()(),Ac(779,`td`,22)(780,`p`)(781,`code`),vN(782,`false`),ug()()(),Ac(783,`td`,23)(784,`em`)(785,`strong`),vN(786,`(opcional)`),ug()(),Ac(787,`p`),vN(788,`Habilita um `),Ac(789,`em`),vN(790,`checkbox`),ug(),vN(791,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),Ac(792,`code`),vN(793,`$selected`),ug(),vN(794,` para
identificar se o item est\xE1 selecionado, por exemplo:`),ug(),Ac(795,`pre`)(796,`code`),vN(797,`item.$selected

// ou

item['$selected']
`),ug()()()(),Ac(798,`tr`,16)(799,`td`,17)(800,`div`,31)(801,`span`,32),vN(802,` (p-show-detail)`),Kc(803,`br`),ug()()(),Ac(804,`td`,20)(805,`code`,33),vN(806,`EventEmitter`),ug()(),Ac(807,`td`,22),vN(808,`-`),ug(),Ac(809,`td`,23)(810,`em`)(811,`strong`),vN(812,`(opcional)`),ug()(),Ac(813,`p`),vN(814,`A\xE7\xE3o que ser\xE1 executada ao expandir os detalhes do item.
Retorna o item da lista clicado.`),ug(),Ac(815,`blockquote`)(816,`p`),vN(817,`Incompatível com o evento `),Ac(818,`code`),vN(819,`p-item-click`),ug(),vN(820,`.`),ug()()()(),Ac(821,`tr`,16)(822,`td`,17)(823,`div`,31)(824,`span`,32),vN(825,` (p-show-more)`),Kc(826,`br`),ug()()(),Ac(827,`td`,20)(828,`code`,33),vN(829,`EventEmitter`),ug()(),Ac(830,`td`,22),vN(831,`-`),ug(),Ac(832,`td`,23)(833,`em`)(834,`strong`),vN(835,`(opcional)`),ug()(),Ac(836,`p`),vN(837,`Ação executada ao clicar no botão de carregar mais resultados.`),ug()()(),Ac(838,`tr`,16)(839,`td`,17)(840,`div`,18)(841,`span`,19),vN(842,` p-show-more-disabled`),Kc(843,`br`),ug()()(),Ac(844,`td`,20)(845,`code`,30),vN(846,`boolean`),ug()(),Ac(847,`td`,22),vN(848,`-`),ug(),Ac(849,`td`,23)(850,`em`)(851,`strong`),vN(852,`(opcional)`),ug()(),Ac(853,`p`),vN(854,`Indica que o botão `),Ac(855,`em`),vN(856,`Carregar Mais Resultados`),ug(),vN(857,` (`),Ac(858,`code`),vN(859,`p-show-more`),ug(),vN(860,`) será desabilitado.`),ug()()(),Ac(861,`tr`,16)(862,`td`,17)(863,`div`,18)(864,`span`,19),vN(865,` p-single-select`),Kc(866,`br`),ug()()(),Ac(867,`td`,20)(868,`code`,30),vN(869,`boolean`),ug()(),Ac(870,`td`,22)(871,`p`)(872,`code`),vN(873,`false`),ug()()(),Ac(874,`td`,23)(875,`em`)(876,`strong`),vN(877,`(opcional)`),ug()(),Ac(878,`p`),vN(879,`Define que somente um item da lista pode ser selecionado quando a sele\xE7\xE3o estiver habilitada
atrav\xE9s da propriedade `),Ac(880,`code`),vN(881,`p-select`),ug(),vN(882,`.`),ug(),Ac(883,`blockquote`)(884,`p`),vN(885,`Quando habilitado, a opção "Selecionar todos" é ocultada.`),ug()()()(),Ac(886,`tr`,16)(887,`td`,17)(888,`div`,18)(889,`span`,19),vN(890,` p-tag-position`),Kc(891,`br`),ug()()(),Ac(892,`td`,20)(893,`code`,24),vN(894,`string`),ug()(),Ac(895,`td`,22)(896,`p`)(897,`code`),vN(898,`bottom`),ug()()(),Ac(899,`td`,23)(900,`em`)(901,`strong`),vN(902,`(opcional)`),ug()(),Ac(903,`p`),vN(904,`Define o posicionamento da `),Ac(905,`em`),vN(906,`tag`),ug(),vN(907,` (`),Ac(908,`code`),vN(909,`PoListViewFieldProperties.tag.value`),ug(),vN(910,`) em relação ao título dentro do item:`),ug(),Ac(911,`ul`)(912,`li`)(913,`code`),vN(914,`right`),ug(),vN(915,`: ao lado direito do título.`),ug(),Ac(916,`li`)(917,`code`),vN(918,`top`),ug(),vN(919,`: acima do título.`),ug(),Ac(920,`li`)(921,`code`),vN(922,`bottom`),ug(),vN(923,`: abaixo do título.`),ug()()()(),Ac(924,`tr`,16)(925,`td`,17)(926,`div`,31)(927,`span`,32),vN(928,` (p-title-action)`),Kc(929,`br`),ug()()(),Ac(930,`td`,20)(931,`code`,33),vN(932,`EventEmitter`),ug()(),Ac(933,`td`,22),vN(934,`-`),ug(),Ac(935,`td`,23)(936,`em`)(937,`strong`),vN(938,`(opcional)`),ug()(),Ac(939,`p`),vN(940,`A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo.
Retorna o item da lista clicado.`),ug(),Ac(941,`blockquote`)(942,`p`),vN(943,`Compatível com o título configurado como `),Ac(944,`em`),vN(945,`link`),ug(),vN(946,` (`),Ac(947,`code`),vN(948,`PoListViewFieldProperties.link`),ug(),vN(949,` ou `),Ac(950,`code`),vN(951,`p-property-link`),ug(),vN(952,`):
ao clicar, o evento \xE9 emitido e, havendo `),Ac(953,`em`),vN(954,`link`),ug(),vN(955,`, a navegação também é realizada.`),ug()(),Ac(956,`blockquote`)(957,`p`),vN(958,`Incompatível com o evento `),Ac(959,`code`),vN(960,`p-item-click`),ug(),vN(961,`.`),ug()()()()(),Ac(962,`h3`),vN(963,`Interfaces`),ug(),Ac(964,`h4`,38)(965,`code`,5),vN(966,`PoListViewAction`),ug()(),Ac(967,`div`,2)(968,`p`),vN(969,`Interface que define as ações do componente `),Ac(970,`code`),vN(971,`po-list-view`),ug(),vN(972,`.`),ug(),Ac(973,`blockquote`)(974,`p`),vN(975,`As propriedades `),Ac(976,`code`),vN(977,`subItems`),ug(),vN(978,`, `),Ac(979,`code`),vN(980,`separator`),ug(),vN(981,`, `),Ac(982,`code`),vN(983,`url`),ug(),vN(984,` e `),Ac(985,`code`),vN(986,`selected`),ug(),vN(987,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),ug()()(),Ac(988,`h4`,12),vN(989,`Propriedades`),ug(),Ac(990,`table`,13)(991,`tr`,14)(992,`th`,15),vN(993,`Nome`),ug(),Ac(994,`th`,15),vN(995,`Tipo`),ug(),Ac(996,`th`,15),vN(997,`Descrição`),ug()(),Ac(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),vN(1002,` action`),Kc(1003,`br`),ug()()(),Ac(1004,`td`,20)(1005,`code`,39),vN(1006,`Function`),ug()(),Ac(1007,`td`,23)(1008,`em`)(1009,`strong`),vN(1010,`(opcional)`),ug()(),Ac(1011,`p`),vN(1012,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(1013,`p`),vN(1014,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(1015,`code`),vN(1016,`subItems`),ug(),vN(1017,`.`),ug(),Ac(1018,`blockquote`)(1019,`p`),vN(1020,`Para que a função seja executada no contexto do componente, utilize `),Ac(1021,`em`),vN(1022,`bind`),ug(),vN(1023,`:
`),Ac(1024,`code`),vN(1025,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),vN(1030,` disabled`),Kc(1031,`br`),ug()()(),Ac(1032,`td`,20)(1033,`code`,30),vN(1034,`boolean `),ug(),Ac(1035,`code`,39),vN(1036,` Function`),ug()(),Ac(1037,`td`,23)(1038,`em`)(1039,`strong`),vN(1040,`(opcional)`),ug()(),Ac(1041,`p`),vN(1042,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(1043,`tr`,16)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),vN(1047,` icon`),Kc(1048,`br`),ug()()(),Ac(1049,`td`,20)(1050,`code`,24),vN(1051,`string `),ug(),Ac(1052,`code`,40),vN(1053,` TemplateRef<void>`),ug()(),Ac(1054,`td`,23)(1055,`em`)(1056,`strong`),vN(1057,`(opcional)`),ug()(),Ac(1058,`p`),vN(1059,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(1060,`p`),vN(1061,`Aceita ícones da `),Ac(1062,`a`,41),vN(1063,`Biblioteca de ícones`),ug(),vN(1064,`, fontes externas (ex: Font Awesome)
ou um `),Ac(1065,`code`),vN(1066,`TemplateRef`),ug(),vN(1067,` para ícones customizados.`),ug(),Ac(1068,`pre`)(1069,`code`),vN(1070,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(1071,`tr`,16)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),vN(1075,` label`),Kc(1076,`br`),ug()()(),Ac(1077,`td`,20)(1078,`code`,24),vN(1079,`string`),ug()(),Ac(1080,`td`,23)(1081,`p`),vN(1082,`Rótulo da ação.`),ug(),Ac(1083,`p`),vN(1084,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(1085,`code`),vN(1086,`subItems`),ug(),vN(1087,`.`),ug()()(),Ac(1088,`tr`,16)(1089,`td`,17)(1090,`div`,18)(1091,`span`,19),vN(1092,` selected`),Kc(1093,`br`),ug()()(),Ac(1094,`td`,20)(1095,`code`,30),vN(1096,`boolean`),ug()(),Ac(1097,`td`,23)(1098,`em`)(1099,`strong`),vN(1100,`(opcional)`),ug()(),Ac(1101,`p`),vN(1102,`Define se a ação está selecionada.`),ug()()(),Ac(1103,`tr`,16)(1104,`td`,17)(1105,`div`,18)(1106,`span`,19),vN(1107,` separator`),Kc(1108,`br`),ug()()(),Ac(1109,`td`,20)(1110,`code`,30),vN(1111,`boolean`),ug()(),Ac(1112,`td`,23)(1113,`em`)(1114,`strong`),vN(1115,`(opcional)`),ug()(),Ac(1116,`p`),vN(1117,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(1118,`tr`,16)(1119,`td`,17)(1120,`div`,18)(1121,`span`,19),vN(1122,` subItems`),Kc(1123,`br`),ug()()(),Ac(1124,`td`,20)(1125,`code`,42),vN(1126,`Array<PoPopupAction>`),ug()(),Ac(1127,`td`,23)(1128,`em`)(1129,`strong`),vN(1130,`(opcional)`),ug()(),Ac(1131,`p`),vN(1132,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(1133,`p`),vN(1134,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(1135,`blockquote`)(1136,`p`),vN(1137,`As propriedades `),Ac(1138,`code`),vN(1139,`disabled`),ug(),vN(1140,`, `),Ac(1141,`code`),vN(1142,`type`),ug(),vN(1143,` e `),Ac(1144,`code`),vN(1145,`visible`),ug(),vN(1146,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(1147,`blockquote`)(1148,`p`),vN(1149,`Quando `),Ac(1150,`code`),vN(1151,`url`),ug(),vN(1152,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(1153,`blockquote`)(1154,`p`),vN(1155,`Em subníveis aninhados, o `),Ac(1156,`code`),vN(1157,`icon`),ug(),vN(1158,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(1159,`tr`,16)(1160,`td`,17)(1161,`div`,18)(1162,`span`,19),vN(1163,` type`),Kc(1164,`br`),ug()()(),Ac(1165,`td`,20)(1166,`code`,24),vN(1167,`string`),ug()(),Ac(1168,`td`,23)(1169,`em`)(1170,`strong`),vN(1171,`(opcional)`),ug()(),Ac(1172,`p`),vN(1173,`Define a cor do item.`),ug(),Ac(1174,`p`),vN(1175,`Valores válidos:`),ug(),Ac(1176,`ul`)(1177,`li`)(1178,`code`),vN(1179,`default`),ug()(),Ac(1180,`li`)(1181,`code`),vN(1182,`danger`),ug()()()()(),Ac(1183,`tr`,16)(1184,`td`,17)(1185,`div`,18)(1186,`span`,19),vN(1187,` url`),Kc(1188,`br`),ug()()(),Ac(1189,`td`,20)(1190,`code`,24),vN(1191,`string`),ug()(),Ac(1192,`td`,23)(1193,`em`)(1194,`strong`),vN(1195,`(opcional)`),ug()(),Ac(1196,`p`),vN(1197,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(1198,`p`),vN(1199,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(1200,`code`),vN(1201,`url`),ug(),vN(1202,` é informada em um agrupador, o clique `),Ac(1203,`strong`),vN(1204,`não abrirá os subitens`),ug(),vN(1205,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(1206,`blockquote`)(1207,`p`),vN(1208,`Quando informada, tem prioridade sobre a propriedade `),Ac(1209,`code`),vN(1210,`action`),ug(),vN(1211,`.`),ug()()()(),Ac(1212,`tr`,16)(1213,`td`,17)(1214,`div`,18)(1215,`span`,19),vN(1216,` visible`),Kc(1217,`br`),ug()()(),Ac(1218,`td`,20)(1219,`code`,30),vN(1220,`boolean `),ug(),Ac(1221,`code`,39),vN(1222,` Function`),ug()(),Ac(1223,`td`,23)(1224,`em`)(1225,`strong`),vN(1226,`(opcional)`),ug()(),Ac(1227,`p`),vN(1228,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(1229,`h4`,38)(1230,`code`,5),vN(1231,`PoListViewFieldProperties`),ug()(),Ac(1232,`div`,2)(1233,`p`),vN(1234,`Mapeia as chaves do objeto dos itens (`),Ac(1235,`code`),vN(1236,`p-items`),ug(),vN(1237,`) para as áreas visuais do componente.`),ug()(),Ac(1238,`h4`,12),vN(1239,`Propriedades`),ug(),Ac(1240,`table`,13)(1241,`tr`,14)(1242,`th`,15),vN(1243,`Nome`),ug(),Ac(1244,`th`,15),vN(1245,`Tipo`),ug(),Ac(1246,`th`,15),vN(1247,`Descrição`),ug()(),Ac(1248,`tr`,16)(1249,`td`,17)(1250,`div`,18)(1251,`span`,19),vN(1252,` avatar`),Kc(1253,`br`),ug()()(),Ac(1254,`td`,20)(1255,`code`,24),vN(1256,`string`),ug()(),Ac(1257,`td`,23)(1258,`em`)(1259,`strong`),vN(1260,`(opcional)`),ug()(),Ac(1261,`p`),vN(1262,`Chave correspondente ao avatar do item.`),ug(),Ac(1263,`p`),vN(1264,`O valor mapeado suporta quatro formatos distintos:`),ug(),Ac(1265,`ul`)(1266,`li`)(1267,`strong`),vN(1268,`String (URL):`),ug(),vN(1269,` Renderiza o `),Ac(1270,`code`),vN(1271,`po-avatar`),ug(),vN(1272,` com a imagem especificada.`),ug()(),Ac(1273,`pre`)(1274,`code`),vN(1275,`{ avatar: '[https://url-da-imagem.png](https://url-da-imagem.png)' }
`),ug()(),Ac(1276,`ul`)(1277,`li`)(1278,`strong`),vN(1279,`Objeto com `),Ac(1280,`code`),vN(1281,`icon`),ug(),vN(1282,`:`),ug(),vN(1283,` Renderiza um ícone circular com tamanho fixo. Aceita as seguintes propriedades:`),Ac(1284,`ul`)(1285,`li`)(1286,`code`),vN(1287,`icon`),ug(),vN(1288,` (obrigatória).`),ug(),Ac(1289,`li`)(1290,`code`),vN(1291,`color`),ug(),vN(1292,` e `),Ac(1293,`code`),vN(1294,`backgroundColor`),ug(),vN(1295,`: aceitam qualquer formato de cor CSS (Hex, RGB, nomes, etc.).`),ug()()()(),Ac(1296,`pre`)(1297,`code`),vN(1298,`{ avatar: { icon: 'an an-shield-warning', color: '#dc2626', backgroundColor: '#fee2e2' } }
`),ug()(),Ac(1299,`ul`)(1300,`li`)(1301,`strong`),vN(1302,`Objeto com `),Ac(1303,`code`),vN(1304,`progress`),ug(),vN(1305,`:`),ug(),vN(1306,` Renderiza o `),Ac(1307,`code`),vN(1308,`po-progress-circle`),ug(),vN(1309,`. Aceita as seguintes propriedades:`),Ac(1310,`ul`)(1311,`li`)(1312,`code`),vN(1313,`progress`),ug(),vN(1314,` (number): Valor de 0 a 100.`),ug(),Ac(1315,`li`)(1316,`code`),vN(1317,`indeterminate`),ug(),vN(1318,` (boolean): Animação de carregamento contínuo (ignora `),Ac(1319,`code`),vN(1320,`progress`),ug(),vN(1321,`).`),ug(),Ac(1322,`li`)(1323,`code`),vN(1324,`showPercentage`),ug(),vN(1325,` (boolean): Exibe a porcentagem centralizada.`),ug(),Ac(1326,`li`)(1327,`code`),vN(1328,`status`),ug(),vN(1329,` (string): `),Ac(1330,`code`),vN(1331,`'default'`),ug(),vN(1332,`, `),Ac(1333,`code`),vN(1334,`'success'`),ug(),vN(1335,` ou `),Ac(1336,`code`),vN(1337,`'error'`),ug(),vN(1338,`.`),ug(),Ac(1339,`li`)(1340,`code`),vN(1341,`size`),ug(),vN(1342,` (string) e `),Ac(1343,`code`),vN(1344,`radius`),ug(),vN(1345,` (number): `),Ac(1346,`code`),vN(1347,`'medium'`),ug(),vN(1348,`, `),Ac(1349,`code`),vN(1350,`'large'`),ug(),vN(1351,` ou medida exata do raio em `),Ac(1352,`em`),vN(1353,`pixels`),ug(),vN(1354,`.`),ug(),Ac(1355,`li`)(1356,`code`),vN(1357,`ariaLabel`),ug(),vN(1358,` (string): Rótulo para acessibilidade.`),ug()()()(),Ac(1359,`pre`)(1360,`code`),vN(1361,`{ avatar: { progress: 65, showPercentage: true, size: 'large', radius: 40 } }
`),ug()(),Ac(1362,`ul`)(1363,`li`)(1364,`strong`),vN(1365,`Objeto com `),Ac(1366,`code`),vN(1367,`customTemplate`),ug(),vN(1368,`:`),ug(),vN(1369,` Renderiza um fragmento customizado referenciado via `),Ac(1370,`code`),vN(1371,`TemplateRef`),ug(),vN(1372,`.`),ug()(),Ac(1373,`pre`)(1374,`code`),vN(1375,`{ avatar: { customTemplate: myTemplateRef } }
`),ug()()()(),Ac(1376,`tr`,16)(1377,`td`,17)(1378,`div`,18)(1379,`span`,19),vN(1380,` highlighted`),Kc(1381,`br`),ug()()(),Ac(1382,`td`,20)(1383,`code`,24),vN(1384,`string`),ug()(),Ac(1385,`td`,23)(1386,`em`)(1387,`strong`),vN(1388,`(opcional)`),ug()(),Ac(1389,`p`),vN(1390,`Chave booleana que aplica destaque visual ao item.`),ug()()(),Ac(1391,`tr`,16)(1392,`td`,17)(1393,`div`,18)(1394,`span`,19),vN(1395,` link`),Kc(1396,`br`),ug()()(),Ac(1397,`td`,20)(1398,`code`,24),vN(1399,`string`),ug()(),Ac(1400,`td`,23)(1401,`em`)(1402,`strong`),vN(1403,`(opcional)`),ug()(),Ac(1404,`p`),vN(1405,`Chave com o `),Ac(1406,`em`),vN(1407,`link`),ug(),vN(1408,` do título do item.`),ug(),Ac(1409,`blockquote`)(1410,`p`),vN(1411,`Compatível com a propriedade `),Ac(1412,`code`),vN(1413,`title`),ug(),vN(1414,`. Incompatível com o evento `),Ac(1415,`code`),vN(1416,`p-item-click`),ug(),vN(1417,`.`),ug()()()(),Ac(1418,`tr`,16)(1419,`td`,17)(1420,`div`,18)(1421,`span`,19),vN(1422,` subtitle`),Kc(1423,`br`),ug()()(),Ac(1424,`td`,20)(1425,`code`,24),vN(1426,`string`),ug()(),Ac(1427,`td`,23)(1428,`em`)(1429,`strong`),vN(1430,`(opcional)`),ug()(),Ac(1431,`p`),vN(1432,`Chave com o subtítulo do item.`),ug()()(),Ac(1433,`tr`,16)(1434,`td`,17)(1435,`div`,18)(1436,`span`,19),vN(1437,` tag`),Kc(1438,`br`),ug()()(),Ac(1439,`td`,20)(1440,`code`,43),vN(1441,`{ value?: string; type?: string;
}`),ug()(),Ac(1442,`td`,23)(1443,`em`)(1444,`strong`),vN(1445,`(opcional)`),ug()(),Ac(1446,`p`),vN(1447,`Objeto da `),Ac(1448,`code`),vN(1449,`tag`),ug(),vN(1450,` do item.`),ug(),Ac(1451,`p`),vN(1452,`Aceita as seguintes propriedades:`),ug(),Ac(1453,`ul`)(1454,`li`)(1455,`strong`)(1456,`code`),vN(1457,`value`),ug()(),vN(1458,` (string): Chave com o texto da `),Ac(1459,`em`),vN(1460,`tag`),ug(),vN(1461,`.`),ug(),Ac(1462,`li`)(1463,`strong`)(1464,`code`),vN(1465,`type`),ug()(),vN(1466,` (string): Chave com o tipo da `),Ac(1467,`em`),vN(1468,`tag`),ug(),vN(1469,` (`),Ac(1470,`code`),vN(1471,`success`),ug(),vN(1472,`, `),Ac(1473,`code`),vN(1474,`warning`),ug(),vN(1475,`, `),Ac(1476,`code`),vN(1477,`danger`),ug(),vN(1478,`, `),Ac(1479,`code`),vN(1480,`info`),ug(),vN(1481,`, `),Ac(1482,`code`),vN(1483,`neutral`),ug(),vN(1484,`). Caso não informado, utiliza `),Ac(1485,`code`),vN(1486,`success`),ug(),vN(1487,` como padrão.`),ug()(),Ac(1488,`pre`)(1489,`code`),vN(1490,`{ tag: { value: 'status', type: 'statusType' } }
`),ug()()()(),Ac(1491,`tr`,16)(1492,`td`,17)(1493,`div`,18)(1494,`span`,19),vN(1495,` title`),Kc(1496,`br`),ug()()(),Ac(1497,`td`,20)(1498,`code`,24),vN(1499,`string`),ug()(),Ac(1500,`td`,23)(1501,`em`)(1502,`strong`),vN(1503,`(opcional)`),ug()(),Ac(1504,`p`),vN(1505,`Chave com o título do item.`),ug()()()(),Ac(1506,`h4`,38)(1507,`code`,5),vN(1508,`PoListViewLiterals`),ug()(),Ac(1509,`div`,2)(1510,`p`),vN(1511,`Interface para definição das literais usadas no `),Ac(1512,`code`),vN(1513,`po-list-view`),ug(),vN(1514,`.`),ug()(),Ac(1515,`h4`,12),vN(1516,`Propriedades`),ug(),Ac(1517,`table`,13)(1518,`tr`,14)(1519,`th`,15),vN(1520,`Nome`),ug(),Ac(1521,`th`,15),vN(1522,`Tipo`),ug(),Ac(1523,`th`,15),vN(1524,`Descrição`),ug()(),Ac(1525,`tr`,16)(1526,`td`,17)(1527,`div`,18)(1528,`span`,19),vN(1529,` detailModalTitle`),Kc(1530,`br`),ug()()(),Ac(1531,`td`,20)(1532,`code`,24),vN(1533,`string`),ug()(),Ac(1534,`td`,23)(1535,`em`)(1536,`strong`),vN(1537,`(opcional)`),ug()(),Ac(1538,`p`),vN(1539,`Título padrão do `),Ac(1540,`code`),vN(1541,`po-modal`),ug(),vN(1542,` de detalhes, exibido quando `),Ac(1543,`code`),vN(1544,`p-detail-display`),ug(),vN(1545,` é `),Ac(1546,`code`),vN(1547,`modal`),ug(),vN(1548,`.`),ug()()(),Ac(1549,`tr`,16)(1550,`td`,17)(1551,`div`,18)(1552,`span`,19),vN(1553,` hideDetails`),Kc(1554,`br`),ug()()(),Ac(1555,`td`,20)(1556,`code`,24),vN(1557,`string`),ug()(),Ac(1558,`td`,23)(1559,`em`)(1560,`strong`),vN(1561,`(opcional)`),ug()(),Ac(1562,`p`),vN(1563,`Rótulo do botão que oculta os detalhes do item.`),ug()()(),Ac(1564,`tr`,16)(1565,`td`,17)(1566,`div`,18)(1567,`span`,19),vN(1568,` loadMoreData`),Kc(1569,`br`),ug()()(),Ac(1570,`td`,20)(1571,`code`,24),vN(1572,`string`),ug()(),Ac(1573,`td`,23)(1574,`em`)(1575,`strong`),vN(1576,`(opcional)`),ug()(),Ac(1577,`p`),vN(1578,`Rótulo do botão que deve carregar mais resultados.`),ug()()(),Ac(1579,`tr`,16)(1580,`td`,17)(1581,`div`,18)(1582,`span`,19),vN(1583,` noData`),Kc(1584,`br`),ug()()(),Ac(1585,`td`,20)(1586,`code`,24),vN(1587,`string`),ug()(),Ac(1588,`td`,23)(1589,`em`)(1590,`strong`),vN(1591,`(opcional)`),ug()(),Ac(1592,`p`),vN(1593,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),ug()()(),Ac(1594,`tr`,16)(1595,`td`,17)(1596,`div`,18)(1597,`span`,19),vN(1598,` selectAll`),Kc(1599,`br`),ug()()(),Ac(1600,`td`,20)(1601,`code`,24),vN(1602,`string`),ug()(),Ac(1603,`td`,23)(1604,`em`)(1605,`strong`),vN(1606,`(opcional)`),ug()(),Ac(1607,`p`),vN(1608,`Rótulo do `),Ac(1609,`code`),vN(1610,`checkbox`),ug(),vN(1611,` da opção de selecionar todos.`),ug()()(),Ac(1612,`tr`,16)(1613,`td`,17)(1614,`div`,18)(1615,`span`,19),vN(1616,` showDetails`),Kc(1617,`br`),ug()()(),Ac(1618,`td`,20)(1619,`code`,24),vN(1620,`string`),ug()(),Ac(1621,`td`,23)(1622,`em`)(1623,`strong`),vN(1624,`(opcional)`),ug()(),Ac(1625,`p`),vN(1626,`Rótulo do botão que exibe os detalhes do item.`),ug()()()(),Ac(1627,`h3`),vN(1628,`Enums`),ug(),Ac(1629,`h4`,4)(1630,`code`,5),vN(1631,`PoListViewDetailDisplay`),ug()(),Ac(1632,`div`,2)(1633,`p`),vN(1634,`Define o modo de exibição do detalhe do item do `),Ac(1635,`code`),vN(1636,`po-list-view`),ug(),vN(1637,`, utilizado em conjunto com a
diretiva `),Ac(1638,`a`,7)(1639,`code`),vN(1640,`p-list-view-detail-template`),ug()(),vN(1641,`.`),ug()(),Ac(1642,`h4`,12),vN(1643,`Propriedades`),ug(),Ac(1644,`table`,13)(1645,`tr`,14)(1646,`th`,15),vN(1647,`Nome`),ug(),Ac(1648,`th`,15),vN(1649,`Descrição`),ug()(),Ac(1650,`tr`,16)(1651,`td`,17)(1652,`div`,18)(1653,`span`,19),vN(1654,` Inline`),Kc(1655,`br`),ug()()(),Ac(1656,`td`,23)(1657,`p`),vN(1658,`Expande os detalhes abaixo do item (padrão).`),ug()()(),Ac(1659,`tr`,16)(1660,`td`,17)(1661,`div`,18)(1662,`span`,19),vN(1663,` Modal`),Kc(1664,`br`),ug()()(),Ac(1665,`td`,23)(1666,`p`),vN(1667,`Exibe os detalhes dentro de um `),Ac(1668,`code`),vN(1669,`po-modal`),ug(),vN(1670,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var dt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,r){this.route=o,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let r=o.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-list-view-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-list-view-basic-view`)(6,`sample-po-list-view-field-properties-view`)(7,`sample-po-list-view-labs-view`)(8,`sample-po-list-view-hiring-processes-view`),ug()()()),r&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Cze,cae,mae,De,Ae,Fe,Ie,He],encapsulation:2,changeDetection:1})}return a})()}];var qe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(dt),kL]})}return a})();var Zt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,qe]})}return a})();export{Zt as DocPoListViewModule};