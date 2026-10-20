import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Di as jk,E as Cs,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,P as Gze,Pi as mt,Pr as R,Qi as tb,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Tt as Xze,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,bt as Uoe,ci as cO,cr as FE,da as wO,dn as moe,dt as Sae,et as Noe,fa as we,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,ni as _o,or as EO,ot as Q4,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,xn as qoe,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Be=()=>({title:`name`});var je=()=>({name:`Register 1`,email:`register@po-ui.com`});var Re=()=>({name:`Register 2`,email:`register2@po-ui.com`});var Ne=(l,v)=>[l,v];function We(l,v){if(l&1&&(jc(0,`div`,2),nu(1,`po-info`,3),wg()),l&2){let o=v.$implicit;rg(),jE(`p-value`,o.email)}}var _e=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:8,consts:[[3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(r,n){r&1&&(jc(0,`po-list-view`,0),FE(1,We,2,1,`ng-template`,1),wg()),r&2&&jE(`p-field-properties`,gO(2,Be))(`p-items`,yO(5,Ne,gO(3,je),gO(4,Re)))},dependencies:[_oe,Gze,Uoe],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l});var De=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO List View Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-list-view
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-list-view-basic/sample-po-list-view-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-list-view-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ue,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,_e],encapsulation:2,changeDetection:1})}return l})();function Je(l,v){if(l&1&&(jc(0,`div`,2)(1,`span`,3),iO(2),wg()()),l&2){let o=v.$implicit;rg(2),tb(o.subtitle)}}var Me=(()=>{class l{fieldProperties={title:`name`,subtitle:`subtitle`,avatar:`avatar`,tag:{value:`tag`,type:`tagType`}};items=[{name:`Billing report`,subtitle:`5 min ago`,tag:`Completed`,tagType:`success`,avatar:`https://i.pravatar.cc/150?img=1`},{name:`Vacation request`,subtitle:`12 min ago`,tag:`In progress`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=2`},{name:`System update`,subtitle:`30 min ago`,tag:`Warning`,tagType:`warning`,avatar:`https://i.pravatar.cc/150?img=3`}];static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-field-properties`]],standalone:!1,decls:2,vars:2,consts:[[`p-tag-position`,`bottom`,3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[1,`po-font-text-small`]],template:function(r,n){r&1&&(jc(0,`po-list-view`,0),FE(1,Je,3,1,`ng-template`,1),wg()),r&2&&jE(`p-field-properties`,n.fieldProperties)(`p-items`,n.items)},dependencies:[Gze,Uoe],encapsulation:2})}return l})();var Ye=l=>({"docs-sample-code-tabs":l});var Ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-field-properties-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO List View - Field Properties`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-list-view p-tag-position="bottom" [p-field-properties]="fieldProperties" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <span class="po-font-text-small">{ { item.subtitle }}</span>
    </div>
  </ng-template>
</po-list-view>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-list-view-field-properties`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ye,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Me],encapsulation:2,changeDetection:1})}return l})();function Ke(l,v){if(l&1&&(jc(0,`div`,5),nu(1,`po-info`,31)(2,`po-info`,32)(3,`po-info`,33)(4,`po-info`,34),wg()),l&2){let o=v.$implicit;rg(),jE(`p-value`,o.name),rg(),jE(`p-value`,o.email),rg(),jE(`p-value`,o.location),rg(),jE(`p-value`,o.phone)}}function Xe(l,v){if(l&1&&(jc(0,`div`,5),nu(1,`po-info`,35)(2,`po-info`,36),wg()),l&2){let o=v.$implicit;rg(),jE(`p-value`,o.company),rg(),jE(`p-value`,o.zipCode)}}var ke=(()=>{class l{poNotification=p(zu);action;actions;componentsSize=`medium`;customLiterals;detailDisplay=`inline`;height;items;literals;properties;propertyAvatar;avatarType;propertyHighlighted;propertyLink;propertyLinkValue;propertySubtitle;propertyTag;propertyTagType;propertyTitle;tagPosition=`bottom`;tagTypeValue=``;highlightedValue=`read`;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`singleSelect`,label:`Single Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];detailDisplayOptions=[{label:`inline`,value:`inline`},{label:`modal`,value:`modal`}];tagPositionOptions=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`none`,label:`None`},{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];avatarPropertyOptions=[{value:`none`,label:`None`},{value:`image`,label:`Image (URL)`},{value:`icon`,label:`Icon`},{value:`progress`,label:`Progress`},{value:`indeterminate`,label:`Progress (indeterminate)`}];tagTypeValueOptions=[{value:`success`,label:`Success`},{value:`info`,label:`Info`},{value:`danger`,label:`Danger`},{value:`warning`,label:`Warning`},{value:`neutral`,label:`Neutral`}];highlightedValueOptions=[{value:`read`,label:`read`},{value:`unread`,label:`unread`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];get fieldProperties(){let o={};return this.isMapped(this.propertyTitle)&&(o.title=this.propertyTitle),this.isMapped(this.propertySubtitle)&&(o.subtitle=this.propertySubtitle),this.isMapped(this.propertyLink)&&(o.link=this.propertyLink),this.isMapped(this.propertyAvatar)&&(o.avatar=this.propertyAvatar),this.isMapped(this.propertyHighlighted)&&(o.highlighted=this.propertyHighlighted),this.isMapped(this.propertyTag)&&(o.tag={value:this.propertyTag,type:this.propertyTagType}),o}isMapped(o){return!!o&&o!==`none`}ngOnInit(){this.restore()}addAction(o){let r=Object.assign({},o),n=r.action;r.action=n?this.showAction.bind(this,n):void 0,this.actions.push(r),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}applyTagType(){this.items=this.items.map(o=>s(r({},o),{tagType:this.tagTypeValue}))}applyHighlighted(){this.propertyHighlighted=`unread`;let o=this.highlightedValue===`unread`;this.items=this.items.map(r$1=>s(r({},r$1),{unread:o}))}applyAvatar(){if(!this.avatarType||this.avatarType===`none`){this.propertyAvatar=``,this.items=this.items.map(o=>s(r({},o),{avatar:void 0}));return}this.propertyAvatar=`avatar`,this.items=this.items.map((o,r$2)=>s(r({},o),{avatar:this.buildAvatarValue(r$2+1)}))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.detailDisplay=`inline`,this.tagPosition=`bottom`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyAvatar=``,this.avatarType=`none`,this.propertyHighlighted=`unread`,this.propertyLink=`url`,this.propertyLinkValue=``,this.propertySubtitle=`none`,this.propertyTag=`none`,this.propertyTagType=`tagType`,this.propertyTitle=`none`,this.tagTypeValue=`success`,this.highlightedValue=`read`,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){let r=[`success`,`info`,`warning`,`danger`,`neutral`];return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`,tag:o%2===0?`Completed`:`In progress`,tagType:this.tagTypeValue||r[o%r.length],subtitle:`${o*5} min ago`,avatar:this.buildAvatarValue(o),unread:this.highlightedValue===`unread`}}buildAvatarValue(o){switch(this.avatarType){case`image`:return`https://i.pravatar.cc/150?img=${o}`;case`icon`:return{icon:`an an-user`,color:`#1a73e8`,backgroundColor:`#e8f0fe`};case`progress`:return{progress:o*15%100,showPercentage:!0,size:`large`,radius:35};case`indeterminate`:return{indeterminate:!0,size:`large`,radius:35};default:return}}restoreActionForm(){this.action={label:``,visible:!0}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:45,vars:51,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-detail-display`,`p-field-properties`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-select`,`p-single-select`,`p-show-more-disabled`,`p-tag-position`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`p-title`,`Field Properties`,1,`po-md-12`,`po-pb-3`],[`name`,`propertyTitle`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertySubtitle`,`p-clean`,``,`p-label`,`Property subtitle`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertyLinkValue`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`propertyTag`,`p-clean`,``,`p-label`,`Property tag`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagTypeValue`,`p-label`,`Property tag type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarType`,`p-label`,`Property avatar`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`highlightedValue`,`p-label`,`Property highlighted`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-9`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`detailDisplay`,`p-label`,`Detail display`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag position`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Actions`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(r,n){if(r&1){let m=Sx();jc(0,`po-list-view`,2),mt(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),FE(1,Ke,5,4,`ng-template`,3)(2,Xe,3,2,`ng-template`,4),wg(),nu(3,`po-divider`),jc(4,`div`,5)(5,`po-button`,6),mt(`p-click`,function(){return n.addItem()}),wg()(),nu(6,`po-divider`),jc(7,`div`,5),nu(8,`po-info`,7),wg(),nu(9,`po-divider`),jc(10,`form`,null,0)(12,`po-widget`,8)(13,`div`,5)(14,`po-select`,9),JN(),mt(`ngModelChange`,function(p){return n.propertyTitle=p}),wg(),jc(15,`po-select`,10),JN(),mt(`ngModelChange`,function(p){return n.propertySubtitle=p}),wg(),jc(16,`po-input`,11),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.propertyLinkValue,p)||(n.propertyLinkValue=p),v_(p)}),wg(),jc(17,`po-select`,12),JN(),mt(`ngModelChange`,function(p){return n.propertyTag=p}),wg(),jc(18,`po-select`,13),JN(),mt(`ngModelChange`,function(p){return y_(m),n.tagTypeValue=p,v_(n.applyTagType())}),wg(),jc(19,`po-select`,14),JN(),mt(`ngModelChange`,function(p){return y_(m),n.avatarType=p,v_(n.applyAvatar())}),wg(),jc(20,`po-select`,15),JN(),mt(`ngModelChange`,function(p){return y_(m),n.highlightedValue=p,v_(n.applyHighlighted())}),wg()()(),jc(21,`div`,5)(22,`po-number`,16),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.height,p)||(n.height=p),v_(p)}),mt(`p-change`,function(){return n.changeLiterals()}),wg(),jc(23,`po-input`,17),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.literals,p)||(n.literals=p),v_(p)}),mt(`p-change`,function(){return n.changeLiterals()}),wg(),jc(24,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.componentsSize,p)||(n.componentsSize=p),v_(p)}),wg(),jc(25,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.detailDisplay,p)||(n.detailDisplay=p),v_(p)}),wg(),jc(26,`po-radio-group`,20),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.tagPosition,p)||(n.tagPosition=p),v_(p)}),wg()(),jc(27,`div`,5)(28,`po-checkbox-group`,21),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.properties,p)||(n.properties=p),v_(p)}),mt(`p-change`,function(){return n.changeActionOptions()}),wg()()(),nu(29,`po-divider`),jc(30,`po-widget`,22)(31,`form`,null,1)(33,`div`,5)(34,`po-input`,23),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.action.label,p)||(n.action.label=p),v_(p)}),wg(),jc(35,`po-input`,24),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.action.action,p)||(n.action.action=p),v_(p)}),wg(),jc(36,`po-input`,25),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.action.url,p)||(n.action.url=p),v_(p)}),wg(),jc(37,`po-select`,26),JN(),mt(`ngModelChange`,function(p){return n.action.type=p}),wg(),jc(38,`po-select`,27),JN(),mt(`ngModelChange`,function(p){return n.action.icon=p}),wg(),jc(39,`po-checkbox-group`,28),JN(),ob(`ngModelChange`,function(p){return y_(m),sO(n.action,p)||(n.action=p),v_(p)}),wg()(),jc(40,`div`,5)(41,`po-button`,29),mt(`p-click`,function(){return n.addAction(n.action)}),wg()()()(),nu(42,`po-divider`),jc(43,`div`,5)(44,`po-button`,30),mt(`p-click`,function(){return y_(m),Fx(32).reset(),v_(n.restore())}),wg()()}if(r&2){let m=Fx(32);jE(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-detail-display`,n.detailDisplay)(`p-field-properties`,n.fieldProperties)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-select`,n.properties.includes(`select`))(`p-single-select`,n.properties.includes(`singleSelect`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`))(`p-tag-position`,n.tagPosition),rg(8),jE(`p-value`,n.titleAction),rg(6),jE(`ngModel`,n.propertyTitle)(`p-options`,n.propertyTitleOptions),t0(),rg(),jE(`ngModel`,n.propertySubtitle)(`p-options`,n.propertyTitleOptions),t0(),rg(),ib(`ngModel`,n.propertyLinkValue),t0(),rg(),jE(`ngModel`,n.propertyTag)(`p-options`,n.propertyTitleOptions),t0(),rg(),jE(`ngModel`,n.tagTypeValue)(`p-options`,n.tagTypeValueOptions),t0(),rg(),jE(`ngModel`,n.avatarType)(`p-options`,n.avatarPropertyOptions),t0(),rg(),jE(`ngModel`,n.highlightedValue)(`p-options`,n.highlightedValueOptions),t0(),rg(2),ib(`ngModel`,n.height),t0(),rg(),ib(`ngModel`,n.literals),t0(),rg(),ib(`ngModel`,n.componentsSize),jE(`p-columns`,2)(`p-options`,n.componentsSizeOptions),t0(),rg(),ib(`ngModel`,n.detailDisplay),jE(`p-columns`,2)(`p-options`,n.detailDisplayOptions),t0(),rg(),ib(`ngModel`,n.tagPosition),jE(`p-columns`,3)(`p-options`,n.tagPositionOptions),t0(),rg(2),ib(`ngModel`,n.properties),jE(`p-columns`,4)(`p-options`,n.propertiesOptions),t0(),rg(6),ib(`ngModel`,n.action.label),t0(),rg(),ib(`ngModel`,n.action.action),t0(),rg(),ib(`ngModel`,n.action.url),t0(),rg(),jE(`ngModel`,n.action.type)(`p-options`,n.typeOptions),t0(),rg(),jE(`ngModel`,n.action.icon)(`p-options`,n.iconOptions),t0(),rg(),ib(`ngModel`,n.action),jE(`p-columns`,4)(`p-options`,n.actionOptions),t0(),rg(2),jE(`p-disabled`,m.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,moe,_oe,Gze,Uoe,qoe,Noe],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l});var Fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO List View Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-list-view
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-list-view-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,tt,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ke],encapsulation:2,changeDetection:1})}return l})();var Q=(()=>{class l{getItems(){return[{hireStatus:`hired`,hireTagType:`success`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=11`},{hireStatus:`progress`,hireTagType:`info`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=12`},{hireStatus:`canceled`,hireTagType:`danger`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=13`},{hireStatus:`progress`,hireTagType:`info`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=14`},{hireStatus:`hired`,hireTagType:`success`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=15`},{hireStatus:`progress`,hireTagType:`info`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`,avatar:`https://i.pravatar.cc/150?img=16`},{hireStatus:`progress`,hireTagType:`info`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`,avatar:`https://i.pravatar.cc/150?img=17`},{hireStatus:`progress`,hireTagType:`info`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=18`}]}static ɵfac=function(r){return new(r||l)};static ɵprov=R({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var nt=[`detailsModal`];function ot(l,v){if(l&1&&(jc(0,`div`,6),nu(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),EO(4,`uppercase`),wg()),l&2){let o=v.$implicit;rg(),jE(`p-value`,o.idCard),rg(),jE(`p-value`,o.jobDescription),rg(),jE(`p-value`,cO(wO(4,4,o.hireStatus)))}}function at(l,v){if(l&1&&(jc(0,`div`,6),nu(1,`po-info`,17)(2,`po-info`,18),wg()),l&2){let o=v.$implicit;rg(),jE(`p-value`,o.age),rg(),jE(`p-value`,o.city)}}var Oe=(()=>{class l{poNotification=p(zu);hiringProcessesService=p(Q);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;fieldProperties={title:`name`,subtitle:`jobDescription`,link:`url`,avatar:`avatar`,tag:{value:`hireStatus`,type:`hireTagType`}};actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let r=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(m=>!(n[m]instanceof Object)&&this.includeFilter(n[m],r)))}includeFilter(o,r){return r.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(r=>{if(r.$selected){switch(r.hireStatus){case`progress`:o.call(this,r);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}r.$selected=!1}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(r,n){if(r&1&&iu(nt,7),r&2){let m;vo(m=_o())&&(n.detailsModalElement=m.first)}},standalone:!1,features:[we([Q])],decls:16,vars:12,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-select`,``,`p-tag-position`,`bottom`,3,`p-title-action`,`p-actions`,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(r,n){r&1&&(jc(0,`po-page-list`,1)(1,`po-list-view`,2),mt(`p-title-action`,function(u){return n.showDetailModal(u)}),FE(2,ot,5,6,`ng-template`,3)(3,at,3,2,`ng-template`,4),wg(),jc(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),nu(8,`po-avatar`,8),wg(),jc(9,`div`,9)(10,`div`,10),nu(11,`po-tag`,11),wg(),jc(12,`div`,10),nu(13,`po-info`,12),wg(),jc(14,`div`,10),nu(15,`po-info`,13),wg()()()()()),r&2&&(jE(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),rg(),jE(`p-actions`,n.actions)(`p-field-properties`,n.fieldProperties)(`p-items`,n.hiringProcessesFiltered),rg(),jE(`p-title`,n.formatTitle),rg(),jE(`p-show-detail`,n.showDetail),rg(),jE(`p-title`,n.titleDetailsModal),rg(7),jE(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),rg(2),jE(`p-value`,n.selectedActionItem.email),rg(2),jE(`p-value`,n.selectedActionItem.telephone))},dependencies:[Q4,Cs,_oe,Gze,Uoe,qoe,ea,Xze,jk],encapsulation:2,changeDetection:1})}return l})();var rt=l=>({"docs-sample-code-tabs":l});var Ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO List View - Hiring Processes`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-list-view-hiring-processes`),wg(),nu(27,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,rt,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Oe],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:1708,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoListViewDetailDisplay`],[`pan`,``,1,`docs-api-property-type`,`PoListViewFieldProperties`],[`href`,`/documentation/po-list-view#fieldProperties`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[1,`docs-api-deprecated-marker`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`{`,`value?:`,`string;`,`type?:`,`string;`,`}`]],template:function(r,n){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoListViewModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-list-view`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoListViewComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O componente `),jc(18,`code`),iO(19,`po-list-view`),wg(),iO(20,` é responsável por renderizar de forma dinâmica uma lista de dados baseada em um `),jc(21,`em`),iO(22,`array`),wg(),iO(23,` de
objetos, adaptando-se \xE0s necessidades visuais de cada interface.`),wg(),jc(24,`p`),iO(25,`Cada item da lista é construído internamente utilizando a estrutura de um `),jc(26,`code`),iO(27,`po-widget`),wg(),iO(28,`, assegurando consist\xEAncia visual.
Para layouts complexos, o componente oferece flexibilidade atrav\xE9s das diretivas
de templates `),jc(29,`strong`)(30,`a`,6),iO(31,`p-list-view-content-template`),wg()(),iO(32,` e
`),jc(33,`strong`)(34,`a`,7),iO(35,`p-list-view-detail-template`),wg()(),iO(36,` para customiza\xE7\xE3o do conte\xFAdo e exibi\xE7\xE3o
de informa\xE7\xF5es adicionais.`),wg(),jc(37,`p`),iO(38,`A interação com o componente pode ser realizada com o `),jc(39,`em`),iO(40,`mouse`),wg(),iO(41,` ou pelo teclado. A navega\xE7\xE3o entre os elementos
interativos \xE9 feita utilizando a tecla `),jc(42,`code`),iO(43,`TAB`),wg(),iO(44,`. Os elementos que recebem foco ao navegar incluem:`),wg(),jc(45,`ul`)(46,`li`),iO(47,`O próprio item (quando a propriedade de clique estiver ativa);`),wg(),jc(48,`li`),iO(49,`Título do item (quando configurado como `),jc(50,`em`),iO(51,`link`),wg(),iO(52,`);`),wg(),jc(53,`li`),iO(54,`Ações do item configuradas em `),jc(55,`code`),iO(56,`p-actions`),wg(),iO(57,`;`),wg(),jc(58,`li`),iO(59,`Botão de controle de detalhes (para expandir ou abrir modal);`),wg(),jc(60,`li`),iO(61,`Colunas de seleção (única ou múltipla);`),wg(),jc(62,`li`),iO(63,`Botão de carregar mais resultados (`),jc(64,`code`),iO(65,`p-show-more`),wg(),iO(66,`).`),wg()(),jc(67,`p`),iO(68,`A execução das ações focadas ou a marcação de itens nas colunas de seleção é realizada com as teclas `),jc(69,`code`),iO(70,`Enter`),wg(),iO(71,` ou
`),jc(72,`code`),iO(73,`Espaço`),wg(),iO(74,`.`),wg(),jc(75,`h4`),iO(76,`Tokens customizáveis`),wg(),jc(77,`p`),iO(78,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(79,`blockquote`)(80,`p`),iO(81,`Para maiores informações, acesse o guia `),jc(82,`a`,8),iO(83,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(84,`.`),wg()(),jc(85,`table`)(86,`thead`)(87,`tr`)(88,`th`),iO(89,`Propriedade`),wg(),jc(90,`th`),iO(91,`Descrição`),wg(),jc(92,`th`),iO(93,`Valor Padrão`),wg()()(),jc(94,`tbody`)(95,`tr`)(96,`td`)(97,`strong`),iO(98,`Título`),wg()(),nu(99,`td`)(100,`td`),wg(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--title-color`),wg()(),jc(105,`td`),iO(106,`Cor do título do item`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--title-color)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--title-font-family`),wg()(),jc(114,`td`),iO(115,`Família tipográfica do título`),wg(),jc(116,`td`)(117,`code`),iO(118,`var(--font-family-theme)`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--title-font-size`),wg()(),jc(123,`td`),iO(124,`Tamanho da fonte do título`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--font-size-default)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--title-line-height`),wg()(),jc(132,`td`),iO(133,`Altura da linha do título`),wg(),jc(134,`td`)(135,`code`),iO(136,`var(--line-height-md)`),wg()()(),jc(137,`tr`)(138,`td`)(139,`code`),iO(140,`--title-color-hover`),wg()(),jc(141,`td`),iO(142,`Cor do título no estado hover`),wg(),jc(143,`td`)(144,`code`),iO(145,`var(--color-action-hover)`),wg()()(),jc(146,`tr`)(147,`td`)(148,`code`),iO(149,`--title-color-selected`),wg()(),jc(150,`td`),iO(151,`Cor do título quando o item está selecionado`),wg(),jc(152,`td`)(153,`code`),iO(154,`var(--color-action-focus)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`strong`),iO(158,`Subtítulo (Support Message)`),wg()(),nu(159,`td`)(160,`td`),wg(),jc(161,`tr`)(162,`td`)(163,`code`),iO(164,`--support-message-color`),wg()(),jc(165,`td`),iO(166,`Cor da mensagem de apoio`),wg(),jc(167,`td`)(168,`code`),iO(169,`var(--color-neutral-dark-80)`),wg()()(),jc(170,`tr`)(171,`td`)(172,`code`),iO(173,`--support-message-font-family`),wg()(),jc(174,`td`),iO(175,`Família tipográfica da mensagem de apoio`),wg(),jc(176,`td`)(177,`code`),iO(178,`var(--font-family-theme)`),wg()()(),jc(179,`tr`)(180,`td`)(181,`code`),iO(182,`--support-message-font-size`),wg()(),jc(183,`td`),iO(184,`Tamanho da fonte da mensagem de apoio`),wg(),jc(185,`td`)(186,`code`),iO(187,`var(--font-size-sm)`),wg()()(),jc(188,`tr`)(189,`td`)(190,`code`),iO(191,`--support-message-line-height`),wg()(),jc(192,`td`),iO(193,`Altura da linha da mensagem de apoio`),wg(),jc(194,`td`)(195,`code`),iO(196,`var(--line-height-none)`),wg()()(),jc(197,`tr`)(198,`td`)(199,`code`),iO(200,`--support-message-color-selected`),wg()(),jc(201,`td`),iO(202,`Cor da mensagem de apoio quando o item está selecionado`),wg(),jc(203,`td`)(204,`code`),iO(205,`var(--color-action-focus)`),wg()()(),jc(206,`tr`)(207,`td`)(208,`strong`),iO(209,`Item - Normal`),wg()(),nu(210,`td`)(211,`td`),wg(),jc(212,`tr`)(213,`td`)(214,`code`),iO(215,`--list-item-background`),wg()(),jc(216,`td`),iO(217,`Cor de fundo do item`),wg(),jc(218,`td`)(219,`code`),iO(220,`var(--list-item-background)`),wg()()(),jc(221,`tr`)(222,`td`)(223,`code`),iO(224,`--list-item-border-color`),wg()(),jc(225,`td`),iO(226,`Cor da borda do item`),wg(),jc(227,`td`)(228,`code`),iO(229,`var(--list-item-border-color)`),wg()()(),jc(230,`tr`)(231,`td`)(232,`code`),iO(233,`--list-item-border-width`),wg()(),jc(234,`td`),iO(235,`Largura da borda do item`),wg(),jc(236,`td`)(237,`code`),iO(238,`var(--border-width-sm)`),wg()()(),jc(239,`tr`)(240,`td`)(241,`code`),iO(242,`--list-item-border-radius`),wg()(),jc(243,`td`),iO(244,`Raio de arredondamento dos cantos do item`),wg(),jc(245,`td`)(246,`code`),iO(247,`var(--border-radius-md)`),wg()()(),jc(248,`tr`)(249,`td`)(250,`code`),iO(251,`--list-item-shadow`),wg()(),jc(252,`td`),iO(253,`Sombra base do item`),wg(),jc(254,`td`)(255,`code`),iO(256,`var(--shadow-md)`),wg()()(),jc(257,`tr`)(258,`td`)(259,`strong`),iO(260,`Item - Selecionado`),wg()(),nu(261,`td`)(262,`td`),wg(),jc(263,`tr`)(264,`td`)(265,`code`),iO(266,`--list-item-background-selected`),wg()(),jc(267,`td`),iO(268,`Cor de fundo do item selecionado`),wg(),jc(269,`td`)(270,`code`),iO(271,`var(--color-brand-01-lightest)`),wg()()(),jc(272,`tr`)(273,`td`)(274,`code`),iO(275,`--list-item-border-color-selected`),wg()(),jc(276,`td`),iO(277,`Cor da borda do item selecionado`),wg(),jc(278,`td`)(279,`code`),iO(280,`var(--color-action-default)`),wg()()(),jc(281,`tr`)(282,`td`)(283,`strong`),iO(284,`Item - Hover`),wg()(),nu(285,`td`)(286,`td`),wg(),jc(287,`tr`)(288,`td`)(289,`code`),iO(290,`--list-item-border-color-hover`),wg()(),jc(291,`td`),iO(292,`Cor da borda do item no estado hover`),wg(),jc(293,`td`)(294,`code`),iO(295,`var(--color-action-hover)`),wg()()(),jc(296,`tr`)(297,`td`)(298,`code`),iO(299,`--list-item-shadow-hover`),wg()(),jc(300,`td`),iO(301,`Sombra do item no estado hover`),wg(),jc(302,`td`)(303,`code`),iO(304,`var(--shadow-lg)`),wg()()(),jc(305,`tr`)(306,`td`)(307,`strong`),iO(308,`Item - Focus`),wg()(),nu(309,`td`)(310,`td`),wg(),jc(311,`tr`)(312,`td`)(313,`code`),iO(314,`--list-item-color-focused`),wg()(),jc(315,`td`),iO(316,`Cor da borda do item no estado focus`),wg(),jc(317,`td`)(318,`code`),iO(319,`var(--color-action-default)`),wg()()(),jc(320,`tr`)(321,`td`)(322,`code`),iO(323,`--list-item-outline-color-focused`),wg()(),jc(324,`td`),iO(325,`Cor do outline do item no estado focus`),wg(),jc(326,`td`)(327,`code`),iO(328,`var(--color-action-focus)`),wg()()(),jc(329,`tr`)(330,`td`)(331,`strong`),iO(332,`Destaque (Highlighted)`),wg()(),nu(333,`td`)(334,`td`),wg(),jc(335,`tr`)(336,`td`)(337,`code`),iO(338,`--list-item-background-highlighted`),wg()(),jc(339,`td`),iO(340,`Cor de fundo do item destacado`),wg(),jc(341,`td`)(342,`code`),iO(343,`var(--color-brand-01-lightest)`),wg()()(),jc(344,`tr`)(345,`td`)(346,`strong`),iO(347,`Motion`),wg()(),nu(348,`td`)(349,`td`),wg(),jc(350,`tr`)(351,`td`)(352,`code`),iO(353,`--list-item-transition-duration`),wg()(),jc(354,`td`),iO(355,`Duração da transição do item`),wg(),jc(356,`td`)(357,`code`),iO(358,`var(--duration-normal)`),wg()()(),jc(359,`tr`)(360,`td`)(361,`code`),iO(362,`--list-item-transition-property`),wg()(),jc(363,`td`),iO(364,`Propriedades CSS animadas`),wg(),jc(365,`td`)(366,`code`),iO(367,`all`),wg()()(),jc(368,`tr`)(369,`td`)(370,`code`),iO(371,`--list-item-transition-timing`),wg()(),jc(372,`td`),iO(373,`Curva de aceleração da transição`),wg(),jc(374,`td`)(375,`code`),iO(376,`var(--timing-standard, var(--timing-standart, ease))`),wg()()()()()(),jc(377,`div`,9)(378,`h4`,10),iO(379,`Seletor`),wg(),jc(380,`pre`,11),iO(381,`<po-list-view
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
`),wg()(),jc(382,`h4`,12),iO(383,`Propriedades`),wg(),jc(384,`table`,13)(385,`tr`,14)(386,`th`,15),iO(387,`Nome`),wg(),jc(388,`th`,15),iO(389,`Tipo`),wg(),jc(390,`th`,15),iO(391,`Padrão`),wg(),jc(392,`th`,15),iO(393,`Descrição`),wg()(),jc(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),iO(398,` p-actions`),nu(399,`br`),wg()()(),jc(400,`td`,20)(401,`code`,21),iO(402,`PoListViewAction[]`),wg()(),jc(403,`td`,22),iO(404,`-`),wg(),jc(405,`td`,23)(406,`em`)(407,`strong`),iO(408,`(opcional)`),wg()(),jc(409,`p`),iO(410,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
As propriedades das a\xE7\xF5es seguem a interface `),jc(411,`code`),iO(412,`PoPopupAction`),wg(),iO(413,`.`),wg()()(),jc(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),iO(418,` p-avatar-size`),nu(419,`br`),wg()()(),jc(420,`td`,20)(421,`code`,24),iO(422,`string`),wg()(),jc(423,`td`,22)(424,`p`)(425,`code`),iO(426,`md`),wg()()(),jc(427,`td`,23)(428,`em`)(429,`strong`),iO(430,`(opcional)`),wg()(),jc(431,`p`),iO(432,`Define o tamanho do avatar do tipo `),jc(433,`strong`),iO(434,`imagem`),wg(),iO(435,` (URL).`),wg(),jc(436,`p`),iO(437,`Valores válidos:`),wg(),jc(438,`ul`)(439,`li`)(440,`code`),iO(441,`xs`),wg(),iO(442,` (24x24)`),wg(),jc(443,`li`)(444,`code`),iO(445,`sm`),wg(),iO(446,` (32x32)`),wg(),jc(447,`li`)(448,`code`),iO(449,`md`),wg(),iO(450,` (64x64)`),wg(),jc(451,`li`)(452,`code`),iO(453,`lg`),wg(),iO(454,` (96x96)`),wg(),jc(455,`li`)(456,`code`),iO(457,`xl`),wg(),iO(458,` (144x144)`),wg()(),jc(459,`blockquote`)(460,`p`),iO(461,`Incompatível com os demais tipos de avatar (icon, progress, customTemplate).`),wg()()()(),jc(462,`tr`,16)(463,`td`,17)(464,`div`,18)(465,`span`,19),iO(466,` p-components-size`),nu(467,`br`),wg()()(),jc(468,`td`,20)(469,`code`,24),iO(470,`string`),wg()(),jc(471,`td`,22)(472,`p`)(473,`code`),iO(474,`medium`),wg()()(),jc(475,`td`,23)(476,`em`)(477,`strong`),iO(478,`(opcional)`),wg()(),jc(479,`p`),iO(480,`Define o dimensionamento geral dos elementos no template.`),wg(),jc(481,`ul`)(482,`li`)(483,`code`),iO(484,`small`),wg(),iO(485,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(486,`li`)(487,`code`),iO(488,`medium`),wg(),iO(489,`: aplica a medida medium de cada componente.`),wg()(),jc(490,`blockquote`)(491,`p`),iO(492,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(493,`code`),iO(494,`medium`),wg(),iO(495,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(496,`a`,25),iO(497,`po-theme`),wg(),iO(498,`.`),wg()()()(),jc(499,`tr`,16)(500,`td`,17)(501,`div`,18)(502,`span`,19),iO(503,` p-detail-display`),nu(504,`br`),wg()()(),jc(505,`td`,20)(506,`code`,26),iO(507,`PoListViewDetailDisplay`),wg()(),jc(508,`td`,22)(509,`p`)(510,`code`),iO(511,`inline`),wg()()(),jc(512,`td`,23)(513,`em`)(514,`strong`),iO(515,`(opcional)`),wg()(),jc(516,`p`),iO(517,`Define como o detalhe do item (diretiva `),jc(518,`code`),iO(519,`p-list-view-detail-template`),wg(),iO(520,`) ser\xE1 exibido:
A utiliza\xE7\xE3o desta propriedade renderiza um bot\xE3o de a\xE7\xE3o (como "Exibir detalhes" ou "Ver detalhes") no rodap\xE9 do item
para controlar a visualiza\xE7\xE3o do conte\xFAdo.`),wg(),jc(521,`p`),iO(522,`Valores válidos:`),wg(),jc(523,`ul`)(524,`li`)(525,`code`),iO(526,`inline`),wg(),iO(527,`: expande o conteúdo do detalhe abaixo do item.`),wg(),jc(528,`li`)(529,`code`),iO(530,`modal`),wg(),iO(531,`: exibe o conteúdo do detalhe no corpo de um `),jc(532,`code`),iO(533,`po-modal`),wg(),iO(534,`.`),wg()(),jc(535,`blockquote`)(536,`p`),iO(537,`Incompatível com o evento `),jc(538,`code`),iO(539,`p-item-click`),wg(),iO(540,`.`),wg()()()(),jc(541,`tr`,16)(542,`td`,17)(543,`div`,18)(544,`span`,19),iO(545,` p-field-properties`),nu(546,`br`),wg()()(),jc(547,`td`,20)(548,`code`,27),iO(549,`PoListViewFieldProperties`),wg()(),jc(550,`td`,22),iO(551,`-`),wg(),jc(552,`td`,23)(553,`em`)(554,`strong`),iO(555,`(opcional)`),wg()(),jc(556,`p`),iO(557,`Consolida, em um único objeto tipado (`),jc(558,`a`,28)(559,`code`),iO(560,`PoListViewFieldProperties`),wg()(),iO(561,`),
o mapeamento entre as propriedades do item e as \xE1reas visuais do componente (t\xEDtulo, subt\xEDtulo,
link, avatar, destaque e tag).`),wg(),jc(562,`pre`)(563,`code`),iO(564,`<po-list-view
  [p-field-properties]="{
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    highlighted: 'unread',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  }">
</po-list-view>
`),wg()()()(),jc(565,`tr`,16)(566,`td`,17)(567,`div`,18)(568,`span`,19),iO(569,` p-height`),nu(570,`br`),wg()()(),jc(571,`td`,20)(572,`code`,29),iO(573,`number`),wg()(),jc(574,`td`,22),iO(575,`-`),wg(),jc(576,`td`,23)(577,`em`)(578,`strong`),iO(579,`(opcional)`),wg()(),jc(580,`p`),iO(581,`Define a altura da lista em `),jc(582,`em`),iO(583,`px`),wg(),iO(584,`, desconsiderando o espaço do botão `),jc(585,`code`),iO(586,`p-show-more`),wg(),iO(587,`.`),wg(),jc(588,`blockquote`)(589,`p`),iO(590,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),wg()()()(),jc(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),iO(595,` p-hide-select-all`),nu(596,`br`),wg()()(),jc(597,`td`,20)(598,`code`,30),iO(599,`boolean`),wg()(),jc(600,`td`,22)(601,`p`)(602,`code`),iO(603,`false`),wg()()(),jc(604,`td`,23)(605,`em`)(606,`strong`),iO(607,`(opcional)`),wg()(),jc(608,`p`),iO(609,`Habilita a seleção de itens na lista.`),wg(),jc(610,`p`),iO(611,`Por padrão, renderiza um `),jc(612,`em`),iO(613,`checkbox`),wg(),iO(614,` para seleção múltipla. Caso a propriedade `),jc(615,`code`),iO(616,`p-single-select`),wg(),iO(617,` esteja habilitada,
renderiza um bot\xE3o `),jc(618,`em`),iO(619,`radio`),wg(),iO(620,` para seleção única.`),wg(),jc(621,`p`),iO(622,`Ao utilizar esta propriedade, todos os itens recebem a propriedade dinâmica `),jc(623,`code`),iO(624,`$selected`),wg(),iO(625,` para identificar o seu estado
de sele\xE7\xE3o. Por exemplo:`),wg(),jc(626,`pre`)(627,`code`),iO(628,`item.$selected

// ou

item['$selected']
`),wg()()()(),jc(629,`tr`,16)(630,`td`,17)(631,`div`,31)(632,`span`,32),iO(633,` (p-item-click)`),nu(634,`br`),wg()()(),jc(635,`td`,20)(636,`code`,33),iO(637,`EventEmitter`),wg()(),jc(638,`td`,22),iO(639,`-`),wg(),jc(640,`td`,23)(641,`em`)(642,`strong`),iO(643,`(opcional)`),wg()(),jc(644,`p`),iO(645,`A\xE7\xE3o que ser\xE1 executada ao clicar no item da lista. Quando definida, torna o item clic\xE1vel.
Retorna o item da lista clicado.`),wg(),jc(646,`blockquote`)(647,`p`),iO(648,`O evento é desabilitado caso o item possua duas ou mais ações visíveis (`),jc(649,`code`),iO(650,`p-actions`),wg(),iO(651,`).`),wg()()()(),jc(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),iO(656,` p-items`),nu(657,`br`),wg()()(),jc(658,`td`,20)(659,`code`,34),iO(660,`any[]`),wg()(),jc(661,`td`,22),iO(662,`-`),wg(),jc(663,`td`,23)(664,`p`),iO(665,`Lista de itens que serão exibidos no componente.`),wg(),jc(666,`p`),iO(667,`A renderização dos dados depende do mapeamento das chaves dos objetos através da propriedade `),jc(668,`code`),iO(669,`p-field-properties`),wg(),iO(670,`.`),wg(),jc(671,`p`),iO(672,`Exemplo de uso:`),wg(),jc(673,`pre`)(674,`code`),iO(675,`const listItems = [
  { name: 'John Doe', job: 'Developer' },
  { name: 'Jane Smith', job: 'Designer' }
];

const listMapping = {
  title: 'name',
  subtitle: 'job'
};
`),wg()(),jc(676,`pre`)(677,`code`),iO(678,`<po-list-view
  [p-items]="listItems"
  [p-field-properties]="listMapping">
</po-list-view>
`),wg()()()(),jc(679,`tr`,16)(680,`td`,17)(681,`div`,18)(682,`span`,19),iO(683,` p-literals`),nu(684,`br`),wg()()(),jc(685,`td`,20)(686,`code`,35),iO(687,`PoListViewLiterals`),wg()(),jc(688,`td`,22),iO(689,`-`),wg(),jc(690,`td`,23)(691,`em`)(692,`strong`),iO(693,`(opcional)`),wg()(),jc(694,`p`),iO(695,`Objeto com as literais usadas no po-list-view, permitindo personalizar os textos exibidos no componente.`),wg(),jc(696,`p`),iO(697,`Exemplo de uso:`),wg(),jc(698,`pre`)(699,`code`),iO(700,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),wg()(),jc(701,`pre`)(702,`code`),iO(703,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),wg()(),jc(704,`blockquote`)(705,`p`),iO(706,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(707,`a`,36)(708,`code`),iO(709,`PoI18nService`),wg()(),iO(710,` ou do browser.`),wg()()()(),jc(711,`tr`,16)(712,`td`,17)(713,`div`,18)(714,`span`,19),iO(715,` p-property-link`),nu(716,`br`),wg()(),jc(717,`div`,37),iO(718,`Deprecated`),wg()(),jc(719,`td`,20)(720,`code`,24),iO(721,`string`),wg()(),jc(722,`td`,22),iO(723,`-`),wg(),jc(724,`td`,23)(725,`em`)(726,`strong`),iO(727,`(opcional)`),wg()(),jc(728,`p`),iO(729,`Chave do objeto (`),jc(730,`code`),iO(731,`p-items`),wg(),iO(732,`) com o `),jc(733,`em`),iO(734,`link`),wg(),iO(735,` do título do item.`),wg(),jc(736,`blockquote`)(737,`p`),iO(738,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),jc(739,`code`),iO(740,`p-field-properties`),wg(),iO(741,`.`),wg()()()(),jc(742,`tr`,16)(743,`td`,17)(744,`div`,18)(745,`span`,19),iO(746,` p-property-title`),nu(747,`br`),wg()(),jc(748,`div`,37),iO(749,`Deprecated`),wg()(),jc(750,`td`,20)(751,`code`,24),iO(752,`string`),wg()(),jc(753,`td`,22),iO(754,`-`),wg(),jc(755,`td`,23)(756,`em`)(757,`strong`),iO(758,`(opcional)`),wg()(),jc(759,`p`),iO(760,`Chave do objeto (`),jc(761,`code`),iO(762,`p-items`),wg(),iO(763,`) com o título do item.`),wg(),jc(764,`blockquote`)(765,`p`),iO(766,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),jc(767,`code`),iO(768,`p-field-properties`),wg(),iO(769,`.`),wg()()()(),jc(770,`tr`,16)(771,`td`,17)(772,`div`,18)(773,`span`,19),iO(774,` p-select`),nu(775,`br`),wg()()(),jc(776,`td`,20)(777,`code`,30),iO(778,`boolean`),wg()(),jc(779,`td`,22)(780,`p`)(781,`code`),iO(782,`false`),wg()()(),jc(783,`td`,23)(784,`em`)(785,`strong`),iO(786,`(opcional)`),wg()(),jc(787,`p`),iO(788,`Habilita um `),jc(789,`em`),iO(790,`checkbox`),wg(),iO(791,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),jc(792,`code`),iO(793,`$selected`),wg(),iO(794,` para
identificar se o item est\xE1 selecionado, por exemplo:`),wg(),jc(795,`pre`)(796,`code`),iO(797,`item.$selected

// ou

item['$selected']
`),wg()()()(),jc(798,`tr`,16)(799,`td`,17)(800,`div`,31)(801,`span`,32),iO(802,` (p-show-detail)`),nu(803,`br`),wg()()(),jc(804,`td`,20)(805,`code`,33),iO(806,`EventEmitter`),wg()(),jc(807,`td`,22),iO(808,`-`),wg(),jc(809,`td`,23)(810,`em`)(811,`strong`),iO(812,`(opcional)`),wg()(),jc(813,`p`),iO(814,`A\xE7\xE3o que ser\xE1 executada ao expandir os detalhes do item.
Retorna o item da lista clicado.`),wg(),jc(815,`blockquote`)(816,`p`),iO(817,`Incompatível com o evento `),jc(818,`code`),iO(819,`p-item-click`),wg(),iO(820,`.`),wg()()()(),jc(821,`tr`,16)(822,`td`,17)(823,`div`,31)(824,`span`,32),iO(825,` (p-show-more)`),nu(826,`br`),wg()()(),jc(827,`td`,20)(828,`code`,33),iO(829,`EventEmitter`),wg()(),jc(830,`td`,22),iO(831,`-`),wg(),jc(832,`td`,23)(833,`em`)(834,`strong`),iO(835,`(opcional)`),wg()(),jc(836,`p`),iO(837,`Ação executada ao clicar no botão de carregar mais resultados.`),wg()()(),jc(838,`tr`,16)(839,`td`,17)(840,`div`,18)(841,`span`,19),iO(842,` p-show-more-disabled`),nu(843,`br`),wg()()(),jc(844,`td`,20)(845,`code`,30),iO(846,`boolean`),wg()(),jc(847,`td`,22),iO(848,`-`),wg(),jc(849,`td`,23)(850,`em`)(851,`strong`),iO(852,`(opcional)`),wg()(),jc(853,`p`),iO(854,`Indica que o botão `),jc(855,`em`),iO(856,`Carregar Mais Resultados`),wg(),iO(857,` (`),jc(858,`code`),iO(859,`p-show-more`),wg(),iO(860,`) será desabilitado.`),wg()()(),jc(861,`tr`,16)(862,`td`,17)(863,`div`,18)(864,`span`,19),iO(865,` p-single-select`),nu(866,`br`),wg()()(),jc(867,`td`,20)(868,`code`,30),iO(869,`boolean`),wg()(),jc(870,`td`,22)(871,`p`)(872,`code`),iO(873,`false`),wg()()(),jc(874,`td`,23)(875,`em`)(876,`strong`),iO(877,`(opcional)`),wg()(),jc(878,`p`),iO(879,`Define que somente um item da lista pode ser selecionado quando a sele\xE7\xE3o estiver habilitada
atrav\xE9s da propriedade `),jc(880,`code`),iO(881,`p-select`),wg(),iO(882,`.`),wg(),jc(883,`blockquote`)(884,`p`),iO(885,`Quando habilitado, a opção "Selecionar todos" é ocultada.`),wg()()()(),jc(886,`tr`,16)(887,`td`,17)(888,`div`,18)(889,`span`,19),iO(890,` p-tag-position`),nu(891,`br`),wg()()(),jc(892,`td`,20)(893,`code`,24),iO(894,`string`),wg()(),jc(895,`td`,22)(896,`p`)(897,`code`),iO(898,`bottom`),wg()()(),jc(899,`td`,23)(900,`em`)(901,`strong`),iO(902,`(opcional)`),wg()(),jc(903,`p`),iO(904,`Define o posicionamento da `),jc(905,`em`),iO(906,`tag`),wg(),iO(907,` (`),jc(908,`code`),iO(909,`PoListViewFieldProperties.tag.value`),wg(),iO(910,`) em relação ao título dentro do item:`),wg(),jc(911,`ul`)(912,`li`)(913,`code`),iO(914,`right`),wg(),iO(915,`: ao lado direito do título.`),wg(),jc(916,`li`)(917,`code`),iO(918,`top`),wg(),iO(919,`: acima do título.`),wg(),jc(920,`li`)(921,`code`),iO(922,`bottom`),wg(),iO(923,`: abaixo do título.`),wg()()()(),jc(924,`tr`,16)(925,`td`,17)(926,`div`,31)(927,`span`,32),iO(928,` (p-title-action)`),nu(929,`br`),wg()()(),jc(930,`td`,20)(931,`code`,33),iO(932,`EventEmitter`),wg()(),jc(933,`td`,22),iO(934,`-`),wg(),jc(935,`td`,23)(936,`em`)(937,`strong`),iO(938,`(opcional)`),wg()(),jc(939,`p`),iO(940,`A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo.
Retorna o item da lista clicado.`),wg(),jc(941,`blockquote`)(942,`p`),iO(943,`Compatível com o título configurado como `),jc(944,`em`),iO(945,`link`),wg(),iO(946,` (`),jc(947,`code`),iO(948,`PoListViewFieldProperties.link`),wg(),iO(949,` ou `),jc(950,`code`),iO(951,`p-property-link`),wg(),iO(952,`):
ao clicar, o evento \xE9 emitido e, havendo `),jc(953,`em`),iO(954,`link`),wg(),iO(955,`, a navegação também é realizada.`),wg()(),jc(956,`blockquote`)(957,`p`),iO(958,`Incompatível com o evento `),jc(959,`code`),iO(960,`p-item-click`),wg(),iO(961,`.`),wg()()()()(),jc(962,`h3`),iO(963,`Interfaces`),wg(),jc(964,`h4`,38)(965,`code`,5),iO(966,`PoListViewAction`),wg()(),jc(967,`div`,2)(968,`p`),iO(969,`Interface que define as ações do componente `),jc(970,`code`),iO(971,`po-list-view`),wg(),iO(972,`.`),wg(),jc(973,`blockquote`)(974,`p`),iO(975,`As propriedades `),jc(976,`code`),iO(977,`subItems`),wg(),iO(978,`, `),jc(979,`code`),iO(980,`separator`),wg(),iO(981,`, `),jc(982,`code`),iO(983,`url`),wg(),iO(984,` e `),jc(985,`code`),iO(986,`selected`),wg(),iO(987,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),wg()()(),jc(988,`h4`,12),iO(989,`Propriedades`),wg(),jc(990,`table`,13)(991,`tr`,14)(992,`th`,15),iO(993,`Nome`),wg(),jc(994,`th`,15),iO(995,`Tipo`),wg(),jc(996,`th`,15),iO(997,`Descrição`),wg()(),jc(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),iO(1002,` action`),nu(1003,`br`),wg()()(),jc(1004,`td`,20)(1005,`code`,39),iO(1006,`Function`),wg()(),jc(1007,`td`,23)(1008,`em`)(1009,`strong`),iO(1010,`(opcional)`),wg()(),jc(1011,`p`),iO(1012,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(1013,`p`),iO(1014,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(1015,`code`),iO(1016,`subItems`),wg(),iO(1017,`.`),wg(),jc(1018,`blockquote`)(1019,`p`),iO(1020,`Para que a função seja executada no contexto do componente, utilize `),jc(1021,`em`),iO(1022,`bind`),wg(),iO(1023,`:
`),jc(1024,`code`),iO(1025,`action: this.myFunction.bind(this)`),wg()()()()(),jc(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),iO(1030,` disabled`),nu(1031,`br`),wg()()(),jc(1032,`td`,20)(1033,`code`,30),iO(1034,`boolean `),wg(),jc(1035,`code`,39),iO(1036,` Function`),wg()(),jc(1037,`td`,23)(1038,`em`)(1039,`strong`),iO(1040,`(opcional)`),wg()(),jc(1041,`p`),iO(1042,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(1043,`tr`,16)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),iO(1047,` icon`),nu(1048,`br`),wg()()(),jc(1049,`td`,20)(1050,`code`,24),iO(1051,`string `),wg(),jc(1052,`code`,40),iO(1053,` TemplateRef<void>`),wg()(),jc(1054,`td`,23)(1055,`em`)(1056,`strong`),iO(1057,`(opcional)`),wg()(),jc(1058,`p`),iO(1059,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(1060,`p`),iO(1061,`Aceita ícones da `),jc(1062,`a`,41),iO(1063,`Biblioteca de ícones`),wg(),iO(1064,`, fontes externas (ex: Font Awesome)
ou um `),jc(1065,`code`),iO(1066,`TemplateRef`),wg(),iO(1067,` para ícones customizados.`),wg(),jc(1068,`pre`)(1069,`code`),iO(1070,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(1071,`tr`,16)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),iO(1075,` label`),nu(1076,`br`),wg()()(),jc(1077,`td`,20)(1078,`code`,24),iO(1079,`string`),wg()(),jc(1080,`td`,23)(1081,`p`),iO(1082,`Rótulo da ação.`),wg(),jc(1083,`p`),iO(1084,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(1085,`code`),iO(1086,`subItems`),wg(),iO(1087,`.`),wg()()(),jc(1088,`tr`,16)(1089,`td`,17)(1090,`div`,18)(1091,`span`,19),iO(1092,` selected`),nu(1093,`br`),wg()()(),jc(1094,`td`,20)(1095,`code`,30),iO(1096,`boolean`),wg()(),jc(1097,`td`,23)(1098,`em`)(1099,`strong`),iO(1100,`(opcional)`),wg()(),jc(1101,`p`),iO(1102,`Define se a ação está selecionada.`),wg()()(),jc(1103,`tr`,16)(1104,`td`,17)(1105,`div`,18)(1106,`span`,19),iO(1107,` separator`),nu(1108,`br`),wg()()(),jc(1109,`td`,20)(1110,`code`,30),iO(1111,`boolean`),wg()(),jc(1112,`td`,23)(1113,`em`)(1114,`strong`),iO(1115,`(opcional)`),wg()(),jc(1116,`p`),iO(1117,`Atribui uma linha separadora acima do item.`),wg()()(),jc(1118,`tr`,16)(1119,`td`,17)(1120,`div`,18)(1121,`span`,19),iO(1122,` subItems`),nu(1123,`br`),wg()()(),jc(1124,`td`,20)(1125,`code`,42),iO(1126,`Array<PoPopupAction>`),wg()(),jc(1127,`td`,23)(1128,`em`)(1129,`strong`),iO(1130,`(opcional)`),wg()(),jc(1131,`p`),iO(1132,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(1133,`pre`)(1134,`code`),iO(1135,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(1136,`p`),iO(1137,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(1138,`blockquote`)(1139,`p`),iO(1140,`As propriedades `),jc(1141,`code`),iO(1142,`disabled`),wg(),iO(1143,`, `),jc(1144,`code`),iO(1145,`type`),wg(),iO(1146,` e `),jc(1147,`code`),iO(1148,`visible`),wg(),iO(1149,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(1150,`blockquote`)(1151,`p`),iO(1152,`Quando `),jc(1153,`code`),iO(1154,`url`),wg(),iO(1155,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(1156,`blockquote`)(1157,`p`),iO(1158,`Em subníveis aninhados, o `),jc(1159,`code`),iO(1160,`icon`),wg(),iO(1161,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(1162,`tr`,16)(1163,`td`,17)(1164,`div`,18)(1165,`span`,19),iO(1166,` subItemsLazy`),nu(1167,`br`),wg()()(),jc(1168,`td`,20)(1169,`code`,43),iO(1170,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(1171,`td`,23)(1172,`em`)(1173,`strong`),iO(1174,`(opcional)`),wg()(),jc(1175,`p`),iO(1176,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(1177,`p`),iO(1178,`Recebe o item agrupador e retorna um `),jc(1179,`code`),iO(1180,`Observable<Array<PoPopupAction>>`),wg(),iO(1181,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(1182,`strong`),iO(1183,`apenas`),wg(),iO(1184,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(1185,`code`),iO(1186,`po-skeleton`),wg(),iO(1187,`
enquanto os dados s\xE3o carregados:`),wg(),jc(1188,`pre`)(1189,`code`),iO(1190,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(1191,`blockquote`)(1192,`p`),iO(1193,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(1194,`p`),iO(1195,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(1196,`tr`,16)(1197,`td`,17)(1198,`div`,18)(1199,`span`,19),iO(1200,` type`),nu(1201,`br`),wg()()(),jc(1202,`td`,20)(1203,`code`,24),iO(1204,`string`),wg()(),jc(1205,`td`,23)(1206,`em`)(1207,`strong`),iO(1208,`(opcional)`),wg()(),jc(1209,`p`),iO(1210,`Define a cor do item.`),wg(),jc(1211,`p`),iO(1212,`Valores válidos:`),wg(),jc(1213,`ul`)(1214,`li`)(1215,`code`),iO(1216,`default`),wg()(),jc(1217,`li`)(1218,`code`),iO(1219,`danger`),wg()()()()(),jc(1220,`tr`,16)(1221,`td`,17)(1222,`div`,18)(1223,`span`,19),iO(1224,` url`),nu(1225,`br`),wg()()(),jc(1226,`td`,20)(1227,`code`,24),iO(1228,`string`),wg()(),jc(1229,`td`,23)(1230,`em`)(1231,`strong`),iO(1232,`(opcional)`),wg()(),jc(1233,`p`),iO(1234,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(1235,`p`),iO(1236,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(1237,`code`),iO(1238,`url`),wg(),iO(1239,` é informada em um agrupador, o clique `),jc(1240,`strong`),iO(1241,`não abrirá os subitens`),wg(),iO(1242,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(1243,`blockquote`)(1244,`p`),iO(1245,`Quando informada, tem prioridade sobre a propriedade `),jc(1246,`code`),iO(1247,`action`),wg(),iO(1248,`.`),wg()()()(),jc(1249,`tr`,16)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),iO(1253,` visible`),nu(1254,`br`),wg()()(),jc(1255,`td`,20)(1256,`code`,30),iO(1257,`boolean `),wg(),jc(1258,`code`,39),iO(1259,` Function`),wg()(),jc(1260,`td`,23)(1261,`em`)(1262,`strong`),iO(1263,`(opcional)`),wg()(),jc(1264,`p`),iO(1265,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(1266,`h4`,38)(1267,`code`,5),iO(1268,`PoListViewFieldProperties`),wg()(),jc(1269,`div`,2)(1270,`p`),iO(1271,`Mapeia as chaves do objeto dos itens (`),jc(1272,`code`),iO(1273,`p-items`),wg(),iO(1274,`) para as áreas visuais do componente.`),wg()(),jc(1275,`h4`,12),iO(1276,`Propriedades`),wg(),jc(1277,`table`,13)(1278,`tr`,14)(1279,`th`,15),iO(1280,`Nome`),wg(),jc(1281,`th`,15),iO(1282,`Tipo`),wg(),jc(1283,`th`,15),iO(1284,`Descrição`),wg()(),jc(1285,`tr`,16)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),iO(1289,` avatar`),nu(1290,`br`),wg()()(),jc(1291,`td`,20)(1292,`code`,24),iO(1293,`string`),wg()(),jc(1294,`td`,23)(1295,`em`)(1296,`strong`),iO(1297,`(opcional)`),wg()(),jc(1298,`p`),iO(1299,`Chave correspondente ao avatar do item.`),wg(),jc(1300,`p`),iO(1301,`O valor mapeado suporta quatro formatos distintos:`),wg(),jc(1302,`ul`)(1303,`li`)(1304,`strong`),iO(1305,`String (URL):`),wg(),iO(1306,` Renderiza o `),jc(1307,`code`),iO(1308,`po-avatar`),wg(),iO(1309,` com a imagem especificada.`),wg()(),jc(1310,`pre`)(1311,`code`),iO(1312,`{ avatar: '[https://url-da-imagem.png](https://url-da-imagem.png)' }
`),wg()(),jc(1313,`ul`)(1314,`li`)(1315,`strong`),iO(1316,`Objeto com `),jc(1317,`code`),iO(1318,`icon`),wg(),iO(1319,`:`),wg(),iO(1320,` Renderiza um ícone circular com tamanho fixo. Aceita as seguintes propriedades:`),jc(1321,`ul`)(1322,`li`)(1323,`code`),iO(1324,`icon`),wg(),iO(1325,` (obrigatória).`),wg(),jc(1326,`li`)(1327,`code`),iO(1328,`color`),wg(),iO(1329,` e `),jc(1330,`code`),iO(1331,`backgroundColor`),wg(),iO(1332,`: aceitam qualquer formato de cor CSS (Hex, RGB, nomes, etc.).`),wg()()()(),jc(1333,`pre`)(1334,`code`),iO(1335,`{ avatar: { icon: 'an an-shield-warning', color: '#dc2626', backgroundColor: '#fee2e2' } }
`),wg()(),jc(1336,`ul`)(1337,`li`)(1338,`strong`),iO(1339,`Objeto com `),jc(1340,`code`),iO(1341,`progress`),wg(),iO(1342,`:`),wg(),iO(1343,` Renderiza o `),jc(1344,`code`),iO(1345,`po-progress-circle`),wg(),iO(1346,`. Aceita as seguintes propriedades:`),jc(1347,`ul`)(1348,`li`)(1349,`code`),iO(1350,`progress`),wg(),iO(1351,` (number): Valor de 0 a 100.`),wg(),jc(1352,`li`)(1353,`code`),iO(1354,`indeterminate`),wg(),iO(1355,` (boolean): Animação de carregamento contínuo (ignora `),jc(1356,`code`),iO(1357,`progress`),wg(),iO(1358,`).`),wg(),jc(1359,`li`)(1360,`code`),iO(1361,`showPercentage`),wg(),iO(1362,` (boolean): Exibe a porcentagem centralizada.`),wg(),jc(1363,`li`)(1364,`code`),iO(1365,`status`),wg(),iO(1366,` (string): `),jc(1367,`code`),iO(1368,`'default'`),wg(),iO(1369,`, `),jc(1370,`code`),iO(1371,`'success'`),wg(),iO(1372,` ou `),jc(1373,`code`),iO(1374,`'error'`),wg(),iO(1375,`.`),wg(),jc(1376,`li`)(1377,`code`),iO(1378,`size`),wg(),iO(1379,` (string) e `),jc(1380,`code`),iO(1381,`radius`),wg(),iO(1382,` (number): `),jc(1383,`code`),iO(1384,`'medium'`),wg(),iO(1385,`, `),jc(1386,`code`),iO(1387,`'large'`),wg(),iO(1388,` ou medida exata do raio em `),jc(1389,`em`),iO(1390,`pixels`),wg(),iO(1391,`.`),wg(),jc(1392,`li`)(1393,`code`),iO(1394,`ariaLabel`),wg(),iO(1395,` (string): Rótulo para acessibilidade.`),wg()()()(),jc(1396,`pre`)(1397,`code`),iO(1398,`{ avatar: { progress: 65, showPercentage: true, size: 'large', radius: 40 } }
`),wg()(),jc(1399,`ul`)(1400,`li`)(1401,`strong`),iO(1402,`Objeto com `),jc(1403,`code`),iO(1404,`customTemplate`),wg(),iO(1405,`:`),wg(),iO(1406,` Renderiza um fragmento customizado referenciado via `),jc(1407,`code`),iO(1408,`TemplateRef`),wg(),iO(1409,`.`),wg()(),jc(1410,`pre`)(1411,`code`),iO(1412,`{ avatar: { customTemplate: myTemplateRef } }
`),wg()()()(),jc(1413,`tr`,16)(1414,`td`,17)(1415,`div`,18)(1416,`span`,19),iO(1417,` highlighted`),nu(1418,`br`),wg()()(),jc(1419,`td`,20)(1420,`code`,24),iO(1421,`string`),wg()(),jc(1422,`td`,23)(1423,`em`)(1424,`strong`),iO(1425,`(opcional)`),wg()(),jc(1426,`p`),iO(1427,`Chave booleana que aplica destaque visual ao item.`),wg()()(),jc(1428,`tr`,16)(1429,`td`,17)(1430,`div`,18)(1431,`span`,19),iO(1432,` link`),nu(1433,`br`),wg()()(),jc(1434,`td`,20)(1435,`code`,24),iO(1436,`string`),wg()(),jc(1437,`td`,23)(1438,`em`)(1439,`strong`),iO(1440,`(opcional)`),wg()(),jc(1441,`p`),iO(1442,`Chave com o `),jc(1443,`em`),iO(1444,`link`),wg(),iO(1445,` do título do item.`),wg(),jc(1446,`blockquote`)(1447,`p`),iO(1448,`Compatível com a propriedade `),jc(1449,`code`),iO(1450,`title`),wg(),iO(1451,`. Incompatível com o evento `),jc(1452,`code`),iO(1453,`p-item-click`),wg(),iO(1454,`.`),wg()()()(),jc(1455,`tr`,16)(1456,`td`,17)(1457,`div`,18)(1458,`span`,19),iO(1459,` subtitle`),nu(1460,`br`),wg()()(),jc(1461,`td`,20)(1462,`code`,24),iO(1463,`string`),wg()(),jc(1464,`td`,23)(1465,`em`)(1466,`strong`),iO(1467,`(opcional)`),wg()(),jc(1468,`p`),iO(1469,`Chave com o subtítulo do item.`),wg()()(),jc(1470,`tr`,16)(1471,`td`,17)(1472,`div`,18)(1473,`span`,19),iO(1474,` tag`),nu(1475,`br`),wg()()(),jc(1476,`td`,20)(1477,`code`,44),iO(1478,`{ value?: string; type?: string;
}`),wg()(),jc(1479,`td`,23)(1480,`em`)(1481,`strong`),iO(1482,`(opcional)`),wg()(),jc(1483,`p`),iO(1484,`Objeto da `),jc(1485,`code`),iO(1486,`tag`),wg(),iO(1487,` do item.`),wg(),jc(1488,`p`),iO(1489,`Aceita as seguintes propriedades:`),wg(),jc(1490,`ul`)(1491,`li`)(1492,`strong`)(1493,`code`),iO(1494,`value`),wg()(),iO(1495,` (string): Chave com o texto da `),jc(1496,`em`),iO(1497,`tag`),wg(),iO(1498,`.`),wg(),jc(1499,`li`)(1500,`strong`)(1501,`code`),iO(1502,`type`),wg()(),iO(1503,` (string): Chave com o tipo da `),jc(1504,`em`),iO(1505,`tag`),wg(),iO(1506,` (`),jc(1507,`code`),iO(1508,`success`),wg(),iO(1509,`, `),jc(1510,`code`),iO(1511,`warning`),wg(),iO(1512,`, `),jc(1513,`code`),iO(1514,`danger`),wg(),iO(1515,`, `),jc(1516,`code`),iO(1517,`info`),wg(),iO(1518,`, `),jc(1519,`code`),iO(1520,`neutral`),wg(),iO(1521,`). Caso não informado, utiliza `),jc(1522,`code`),iO(1523,`success`),wg(),iO(1524,` como padrão.`),wg()(),jc(1525,`pre`)(1526,`code`),iO(1527,`{ tag: { value: 'status', type: 'statusType' } }
`),wg()()()(),jc(1528,`tr`,16)(1529,`td`,17)(1530,`div`,18)(1531,`span`,19),iO(1532,` title`),nu(1533,`br`),wg()()(),jc(1534,`td`,20)(1535,`code`,24),iO(1536,`string`),wg()(),jc(1537,`td`,23)(1538,`em`)(1539,`strong`),iO(1540,`(opcional)`),wg()(),jc(1541,`p`),iO(1542,`Chave com o título do item.`),wg()()()(),jc(1543,`h4`,38)(1544,`code`,5),iO(1545,`PoListViewLiterals`),wg()(),jc(1546,`div`,2)(1547,`p`),iO(1548,`Interface para definição das literais usadas no `),jc(1549,`code`),iO(1550,`po-list-view`),wg(),iO(1551,`.`),wg()(),jc(1552,`h4`,12),iO(1553,`Propriedades`),wg(),jc(1554,`table`,13)(1555,`tr`,14)(1556,`th`,15),iO(1557,`Nome`),wg(),jc(1558,`th`,15),iO(1559,`Tipo`),wg(),jc(1560,`th`,15),iO(1561,`Descrição`),wg()(),jc(1562,`tr`,16)(1563,`td`,17)(1564,`div`,18)(1565,`span`,19),iO(1566,` detailModalTitle`),nu(1567,`br`),wg()()(),jc(1568,`td`,20)(1569,`code`,24),iO(1570,`string`),wg()(),jc(1571,`td`,23)(1572,`em`)(1573,`strong`),iO(1574,`(opcional)`),wg()(),jc(1575,`p`),iO(1576,`Título padrão do `),jc(1577,`code`),iO(1578,`po-modal`),wg(),iO(1579,` de detalhes, exibido quando `),jc(1580,`code`),iO(1581,`p-detail-display`),wg(),iO(1582,` é `),jc(1583,`code`),iO(1584,`modal`),wg(),iO(1585,`.`),wg()()(),jc(1586,`tr`,16)(1587,`td`,17)(1588,`div`,18)(1589,`span`,19),iO(1590,` hideDetails`),nu(1591,`br`),wg()()(),jc(1592,`td`,20)(1593,`code`,24),iO(1594,`string`),wg()(),jc(1595,`td`,23)(1596,`em`)(1597,`strong`),iO(1598,`(opcional)`),wg()(),jc(1599,`p`),iO(1600,`Rótulo do botão que oculta os detalhes do item.`),wg()()(),jc(1601,`tr`,16)(1602,`td`,17)(1603,`div`,18)(1604,`span`,19),iO(1605,` loadMoreData`),nu(1606,`br`),wg()()(),jc(1607,`td`,20)(1608,`code`,24),iO(1609,`string`),wg()(),jc(1610,`td`,23)(1611,`em`)(1612,`strong`),iO(1613,`(opcional)`),wg()(),jc(1614,`p`),iO(1615,`Rótulo do botão que deve carregar mais resultados.`),wg()()(),jc(1616,`tr`,16)(1617,`td`,17)(1618,`div`,18)(1619,`span`,19),iO(1620,` noData`),nu(1621,`br`),wg()()(),jc(1622,`td`,20)(1623,`code`,24),iO(1624,`string`),wg()(),jc(1625,`td`,23)(1626,`em`)(1627,`strong`),iO(1628,`(opcional)`),wg()(),jc(1629,`p`),iO(1630,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),wg()()(),jc(1631,`tr`,16)(1632,`td`,17)(1633,`div`,18)(1634,`span`,19),iO(1635,` selectAll`),nu(1636,`br`),wg()()(),jc(1637,`td`,20)(1638,`code`,24),iO(1639,`string`),wg()(),jc(1640,`td`,23)(1641,`em`)(1642,`strong`),iO(1643,`(opcional)`),wg()(),jc(1644,`p`),iO(1645,`Rótulo do `),jc(1646,`code`),iO(1647,`checkbox`),wg(),iO(1648,` da opção de selecionar todos.`),wg()()(),jc(1649,`tr`,16)(1650,`td`,17)(1651,`div`,18)(1652,`span`,19),iO(1653,` showDetails`),nu(1654,`br`),wg()()(),jc(1655,`td`,20)(1656,`code`,24),iO(1657,`string`),wg()(),jc(1658,`td`,23)(1659,`em`)(1660,`strong`),iO(1661,`(opcional)`),wg()(),jc(1662,`p`),iO(1663,`Rótulo do botão que exibe os detalhes do item.`),wg()()()(),jc(1664,`h3`),iO(1665,`Enums`),wg(),jc(1666,`h4`,4)(1667,`code`,5),iO(1668,`PoListViewDetailDisplay`),wg()(),jc(1669,`div`,2)(1670,`p`),iO(1671,`Define o modo de exibição do detalhe do item do `),jc(1672,`code`),iO(1673,`po-list-view`),wg(),iO(1674,`, utilizado em conjunto com a
diretiva `),jc(1675,`a`,7)(1676,`code`),iO(1677,`p-list-view-detail-template`),wg()(),iO(1678,`.`),wg()(),jc(1679,`h4`,12),iO(1680,`Propriedades`),wg(),jc(1681,`table`,13)(1682,`tr`,14)(1683,`th`,15),iO(1684,`Nome`),wg(),jc(1685,`th`,15),iO(1686,`Descrição`),wg()(),jc(1687,`tr`,16)(1688,`td`,17)(1689,`div`,18)(1690,`span`,19),iO(1691,` Inline`),nu(1692,`br`),wg()()(),jc(1693,`td`,23)(1694,`p`),iO(1695,`Expande os detalhes abaixo do item (padrão).`),wg()()(),jc(1696,`tr`,16)(1697,`td`,17)(1698,`div`,18)(1699,`span`,19),iO(1700,` Modal`),nu(1701,`br`),wg()()(),jc(1702,`td`,23)(1703,`p`),iO(1704,`Exibe os detalhes dentro de um `),jc(1705,`code`),iO(1706,`po-modal`),wg(),iO(1707,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var dt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,r){this.route=o,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let r=o.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-list-view-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-list-view-basic-view`)(6,`sample-po-list-view-field-properties-view`)(7,`sample-po-list-view-labs-view`)(8,`sample-po-list-view-hiring-processes-view`),wg()()()),r&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,De,Ae,Fe,Ie,He],encapsulation:2,changeDetection:1})}return l})()}];var qe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[C1.forChild(dt),C1]})}return l})();var Zt=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[Ta,qe]})}return l})();export{Zt as DocPoListViewModule};