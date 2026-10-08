import{$i as pt,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jr as Sw,Jt as gae,Lt as bae,M as Ef,Nn as x4,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,hr as I,i as _a,in as kte,ji as ho,jt as Yze,k as D4,ki as he,kn as v4,ln as mP,ni as Xc,nr as D9,nt as Nte,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,ui as be$1,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var be=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&Kc(0,`po-page-list`,0)},dependencies:[Yze],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s});var Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page List Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-list-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,be],encapsulation:2,changeDetection:1})}return s})();var Se=(()=>{class s{poNotification=f(Ou);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=Bx();Ac(0,`po-page-list`,6),Kc(1,`po-divider`)(2,`po-info`,7),ug(),Kc(3,`po-divider`),Ac(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action.action,a)||(n.action.action=a),e_(a)}),ug(),p0(),Ac(8,`po-input`,10),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action.label,a)||(n.action.label=a),e_(a)}),ug(),p0(),Ac(9,`po-input`,11),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action.url,a)||(n.action.url=a),e_(a)}),ug(),p0(),Ac(10,`po-select`,12),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action.type,a)||(n.action.type=a),e_(a)}),ug(),p0(),Ac(11,`po-select`,13),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action.icon,a)||(n.action.icon=a),e_(a)}),ug(),p0(),Ac(12,`po-checkbox-group`,14),RE(`ngModelChange`,function(a){return Jv(d),DN(n.action,a)||(n.action=a),e_(a)}),ug(),p0(),ug(),Ac(13,`div`,8)(14,`po-button`,15),pt(`p-click`,function(){return n.addAction(n.action)}),ug()()(),Kc(15,`po-divider`),Ac(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),RE(`ngModelChange`,function(a){return Jv(d),DN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),e_(a)}),ug(),p0(),ug()(),Ac(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),RE(`ngModelChange`,function(a){return Jv(d),DN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),e_(a)}),ug(),p0(),Ac(24,`po-input`,18),RE(`ngModelChange`,function(a){return Jv(d),DN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),e_(a)}),ug(),p0(),ug(),Ac(25,`div`,8)(26,`po-button`,19),pt(`p-click`,function(){return n.addBreadcrumbItem()}),ug()()(),Kc(27,`po-divider`),Ac(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),RE(`ngModelChange`,function(a){return Jv(d),DN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),e_(a)}),ug(),p0(),Ac(32,`po-input`,21),RE(`ngModelChange`,function(a){return Jv(d),DN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),e_(a)}),ug(),p0(),ug(),Ac(33,`div`,8)(34,`po-button`,22),pt(`p-click`,function(){return n.addBreadcrumbParam()}),ug()()(),Kc(35,`po-divider`),Ac(36,`div`,8)(37,`po-input`,23),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),e_(a)}),pt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),ug(),p0(),Ac(38,`po-switch`,24),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),e_(a)}),pt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),ug(),p0(),ug(),Ac(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),e_(a)}),ug(),p0(),Ac(43,`po-input`,26),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),e_(a)}),ug(),p0(),ug(),Ac(44,`div`,8)(45,`po-input`,27),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerValue,a)||(n.disclaimerValue=a),e_(a)}),ug(),p0(),Ac(46,`po-switch`,28),RE(`ngModelChange`,function(a){return Jv(d),DN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),e_(a)}),ug(),p0(),ug(),Ac(47,`div`,8)(48,`po-button`,29),pt(`p-click`,function(){return n.addDisclaimer()}),ug()()(),Kc(49,`po-divider`),Ac(50,`form`,null,5)(52,`po-input`,30),RE(`ngModelChange`,function(a){return Jv(d),DN(n.title,a)||(n.title=a),e_(a)}),ug(),p0(),Ac(53,`po-input`,31),RE(`ngModelChange`,function(a){return Jv(d),DN(n.subtitle,a)||(n.subtitle=a),e_(a)}),ug(),p0(),Ac(54,`po-input`,32),RE(`ngModelChange`,function(a){return Jv(d),DN(n.filter.placeholder,a)||(n.filter.placeholder=a),e_(a)}),ug(),p0(),Ac(55,`po-input`,33),RE(`ngModelChange`,function(a){return Jv(d),DN(n.filter.width,a)||(n.filter.width=a),e_(a)}),ug(),p0(),Ac(56,`po-input`,34),RE(`ngModelChange`,function(a){return Jv(d),DN(n.literals,a)||(n.literals=a),e_(a)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),Ac(57,`po-radio-group`,35),RE(`ngModelChange`,function(a){return Jv(d),DN(n.componentsSize,a)||(n.componentsSize=a),e_(a)}),ug(),p0(),Ac(58,`div`,8)(59,`po-button`,36),pt(`p-click`,function(){return n.restore()}),ug()()()}if(r&2){let d=Zx(5),p=Zx(21),a=Zx(29),Le=Zx(40);cE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Hp(2),cE(`p-value`,n.filterModel),Hp(5),TE(`ngModel`,n.action.action),m0(),Hp(),TE(`ngModel`,n.action.label),m0(),Hp(),TE(`ngModel`,n.action.url),m0(),Hp(),TE(`ngModel`,n.action.type),cE(`p-options`,n.typeOptions),m0(),Hp(),TE(`ngModel`,n.action.icon),cE(`p-options`,n.iconOptions),m0(),Hp(),TE(`ngModel`,n.action),cE(`p-options`,n.actionOptions),m0(),Hp(2),cE(`p-disabled`,d.form.invalid),Hp(5),TE(`ngModel`,n.breadcrumb.favorite),m0(),Hp(4),TE(`ngModel`,n.breadcrumbItem.label),m0(),Hp(),TE(`ngModel`,n.breadcrumbItem.link),m0(),Hp(2),cE(`p-disabled`,p.invalid),Hp(5),TE(`ngModel`,n.breadcrumbParams.property),m0(),Hp(),TE(`ngModel`,n.breadcrumbParams.value),m0(),Hp(2),cE(`p-disabled`,a.invalid),Hp(3),TE(`ngModel`,n.disclaimerGroupTitle),m0(),Hp(),TE(`ngModel`,n.disclaimerGroupHideRemoveAll),m0(),Hp(4),TE(`ngModel`,n.disclaimerLabel),m0(),Hp(),TE(`ngModel`,n.disclaimerProperty),m0(),Hp(2),TE(`ngModel`,n.disclaimerValue),m0(),Hp(),TE(`ngModel`,n.disclaimerHideClose),m0(),Hp(2),cE(`p-disabled`,Le.invalid),Hp(4),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.subtitle),m0(),Hp(),TE(`ngModel`,n.filter.placeholder),m0(),Hp(),TE(`ngModel`,n.filter.width),m0(),Hp(),TE(`ngModel`,n.literals),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0()}},dependencies:[b9,Sw,D9,C9,BP,LP,ni,Ef,l4,D4,kte,poe,v4,hoe,Yze],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s});var fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page List Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-list-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return s})();var K=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=I({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var ke=[`advancedFilterModal`];var Be=[`poPageList`];var Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Ou);poDialog=f(Nte);router=f(wn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Xc(ke,7)(Be,7),r&2){let d;fo(d=ho())&&(n.advancedFilterModal=d.first),fo(d=ho())&&(n.poPageList=d.first)}},standalone:!1,features:[be$1([K])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=Bx();Ac(0,`po-page-list`,3,0),Kc(2,`po-table`,4),ug(),Ac(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),RE(`ngModelChange`,function(a){return Jv(d),DN(n.jobDescription,a)||(n.jobDescription=a),e_(a)}),ug(),p0(),Ac(8,`po-checkbox-group`,7),RE(`ngModelChange`,function(a){return Jv(d),DN(n.status,a)||(n.status=a),e_(a)}),ug(),p0(),ug()()}r&2&&(cE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),Hp(2),cE(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),Hp(),cE(`p-primary-action`,n.advancedFilterPrimaryAction),Hp(4),TE(`ngModel`,n.jobDescription),cE(`p-options`,n.jobDescriptionOptions),m0(),Hp(),TE(`ngModel`,n.status),cE(`p-options`,n.statusOptions),m0())},dependencies:[b9,D9,C9,BP,LP,l4,mP,ta,Yze,x4],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s});var xe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page List - Hiring Processes`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-page-list-hiring-processes`),ug(),Kc(27,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,je,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Pe],encapsulation:2,changeDetection:1})}return s})();var ve=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Hn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1318,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ac(7,`code`),vN(8,`po-page-default`),ug(),vN(9,`, `),Ac(10,`code`),vN(11,`po-page-detail`),ug(),vN(12,`,
`),Ac(13,`code`),vN(14,`po-page-edit`),ug(),vN(15,`, `),Ac(16,`code`),vN(17,`po-page-list`),ug(),vN(18,` e `),Ac(19,`code`),vN(20,`po-page-slide`),ug(),vN(21,`.`),ug()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoPageListComponent`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,`O componente `),Ac(30,`code`),vN(31,`po-page-list`),ug(),vN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),ug(),Ac(33,`p`),vN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Ac(35,`em`),vN(36,`click`),ug(),vN(37,` do ícone `),Ac(38,`a`,6),vN(39,`an-magnifying-glass`),ug(),vN(40,`
quanto ao pressionar da tecla `),Ac(41,`em`),vN(42,`ENTER`),ug(),vN(43,` quando o foco estiver no campo de pesquisa.`),ug(),Ac(44,`p`),vN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Ac(46,`a`,7)(47,`code`),vN(48,`po-disclaimer-group`),ug()(),vN(49,`.`),ug(),Ac(50,`h4`),vN(51,`Tokens customizáveis`),ug(),Ac(52,`blockquote`)(53,`p`),vN(54,`Para maiores informações, acesse o guia `),Ac(55,`a`,8),vN(56,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(57,`.`),ug()(),Ac(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),vN(62,`Propriedade`),ug(),Ac(63,`th`),vN(64,`Descrição`),ug(),Ac(65,`th`),vN(66,`Valor Padrão`),ug()()(),Ac(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),vN(71,`Header`),ug()(),Kc(72,`td`)(73,`td`),ug(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--padding`),ug()(),Ac(78,`td`),vN(79,`Espaçamento do header`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--gap`),ug()(),Ac(87,`td`),vN(88,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--spacing-md)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--gap-actions`),ug()(),Ac(96,`td`),vN(97,`Espaçamento entre as ações`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--spacing-xs)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--font-family`),ug()(),Ac(105,`td`),vN(106,`Família tipográfica do título`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--font-family-theme)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`strong`),vN(113,`Content`),ug()(),Kc(114,`td`)(115,`td`),ug(),Ac(116,`tr`)(117,`td`)(118,`code`),vN(119,`--padding-content`),ug()(),Ac(120,`td`),vN(121,`Espaçamento do conteúdo`),ug(),Ac(122,`td`)(123,`code`),vN(124,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(125,`div`,9)(126,`h4`,10),vN(127,`Seletor`),ug(),Ac(128,`pre`,11),vN(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),ug()(),Ac(130,`h4`,12),vN(131,`Propriedades`),ug(),Ac(132,`table`,13)(133,`tr`,14)(134,`th`,15),vN(135,`Nome`),ug(),Ac(136,`th`,15),vN(137,`Tipo`),ug(),Ac(138,`th`,15),vN(139,`Padrão`),ug(),Ac(140,`th`,15),vN(141,`Descrição`),ug()(),Ac(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),vN(146,` p-actions`),Kc(147,`br`),ug()()(),Ac(148,`td`,20)(149,`code`,21),vN(150,`Array<PoPageAction>`),ug()(),Ac(151,`td`,22),vN(152,`-`),ug(),Ac(153,`td`,23)(154,`em`)(155,`strong`),vN(156,`(opcional)`),ug()(),Ac(157,`p`),vN(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Ac(159,`code`),vN(160,`PoPageAction`),ug(),vN(161,`.`),ug()()(),Ac(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),vN(166,` p-breadcrumb`),Kc(167,`br`),ug()()(),Ac(168,`td`,20)(169,`code`,24),vN(170,`PoBreadcrumb`),ug()(),Ac(171,`td`,22),vN(172,`-`),ug(),Ac(173,`td`,23)(174,`em`)(175,`strong`),vN(176,`(opcional)`),ug()(),Ac(177,`p`),vN(178,`Objeto que implementa as propriedades da interface `),Ac(179,`code`),vN(180,`PoBreadcrumb`),ug(),vN(181,`.`),ug()()(),Ac(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),vN(186,` p-components-size`),Kc(187,`br`),ug()()(),Ac(188,`td`,20)(189,`code`,25),vN(190,`string`),ug()(),Ac(191,`td`,22)(192,`p`)(193,`code`),vN(194,`medium`),ug()()(),Ac(195,`td`,23)(196,`em`)(197,`strong`),vN(198,`(opcional)`),ug()(),Ac(199,`p`),vN(200,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(201,`ul`)(202,`li`)(203,`code`),vN(204,`small`),ug(),vN(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(206,`li`)(207,`code`),vN(208,`medium`),ug(),vN(209,`: aplica a medida medium de cada componente.`),ug()(),Ac(210,`blockquote`)(211,`p`),vN(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(213,`code`),vN(214,`medium`),ug(),vN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(216,`a`,26),vN(217,`po-theme`),ug(),vN(218,`.`),ug()()()(),Ac(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),vN(223,` p-disclaimer-group`),Kc(224,`br`),ug()()(),Ac(225,`td`,20)(226,`code`,27),vN(227,`PoDisclaimerGroup`),ug()(),Ac(228,`td`,22),vN(229,`-`),ug(),Ac(230,`td`,23)(231,`em`)(232,`strong`),vN(233,`(opcional)`),ug()(),Ac(234,`p`),vN(235,`Objeto que implementa as propriedades da interface `),Ac(236,`code`),vN(237,`PoDisclaimerGroup`),ug(),vN(238,`.`),ug()()(),Ac(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),vN(243,` p-filter`),Kc(244,`br`),ug()()(),Ac(245,`td`,20)(246,`code`,28),vN(247,`PoPageFilter`),ug()(),Ac(248,`td`,22),vN(249,`-`),ug(),Ac(250,`td`,23)(251,`p`),vN(252,`Objeto que implementa as propriedades da interface `),Ac(253,`code`),vN(254,`PoPageFilter`),ug(),vN(255,`.`),ug()()(),Ac(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),vN(260,` p-literals`),Kc(261,`br`),ug()()(),Ac(262,`td`,20)(263,`code`,29),vN(264,`PoPageListLiterals`),ug()(),Ac(265,`td`,22),vN(266,`-`),ug(),Ac(267,`td`,23)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Objeto com as literais usadas no `),Ac(273,`code`),vN(274,`po-page-list`),ug(),vN(275,`.`),ug(),Ac(276,`p`),vN(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(278,`pre`)(279,`code`),vN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),ug()(),Ac(281,`p`),vN(282,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(283,`pre`)(284,`code`),vN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),ug()(),Ac(286,`p`),vN(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(288,`pre`)(289,`code`),vN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),ug()(),Ac(291,`blockquote`)(292,`p`),vN(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ac(294,`a`,30)(295,`code`),vN(296,`PoI18nService`),ug()(),vN(297,` ou `),Ac(298,`em`),vN(299,`browser`),ug(),vN(300,`.`),ug()()()(),Ac(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),vN(305,` p-quick-search-value`),Kc(306,`br`),ug()()(),Ac(307,`td`,20)(308,`code`,25),vN(309,`string`),ug()(),Ac(310,`td`,22),vN(311,`-`),ug(),Ac(312,`td`,23)(313,`em`)(314,`strong`),vN(315,`(opcional)`),ug()(),Ac(316,`p`),vN(317,`Valor padrão na busca rápida ao inicializar o componente`),ug()()(),Ac(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),vN(322,` p-subtitle`),Kc(323,`br`),ug()()(),Ac(324,`td`,20)(325,`code`,25),vN(326,`string`),ug()(),Ac(327,`td`,22),vN(328,`-`),ug(),Ac(329,`td`,23)(330,`em`)(331,`strong`),vN(332,`(opcional)`),ug()(),Ac(333,`p`),vN(334,`Subtitulo do Header da página.`),ug(),Ac(335,`p`),vN(336,`Suporta formatação básica com as tags `),Ac(337,`code`),vN(338,`<b>`),ug(),vN(339,` (negrito), `),Ac(340,`code`),vN(341,`<strong>`),ug(),vN(342,` (negrito), `),Ac(343,`code`),vN(344,`<i>`),ug(),vN(345,` (itálico), `),Ac(346,`code`),vN(347,`<em>`),ug(),vN(348,` (it\xE1lico) e
`),Ac(349,`code`),vN(350,`<u>`),ug(),vN(351,` (sublinhado).`),ug(),Ac(352,`p`),vN(353,`Exemplo:`),ug(),Ac(354,`pre`)(355,`code`,31),vN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),ug()(),Ac(357,`blockquote`)(358,`p`),vN(359,`Requer que `),Ac(360,`code`),vN(361,`p-title`),ug(),vN(362,` esteja definido.`),ug()()()(),Ac(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),vN(367,` p-title`),Kc(368,`br`),ug()()(),Ac(369,`td`,20)(370,`code`,25),vN(371,`string`),ug()(),Ac(372,`td`,22),vN(373,`-`),ug(),Ac(374,`td`,23)(375,`p`),vN(376,`Título da página.`),ug()()()(),Ac(377,`h3`,12),vN(378,`Métodos`),ug(),Ac(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),vN(385,` clearInputSearch `),ug()()()()(),Ac(386,`tr`,23)(387,`td`,23)(388,`p`),vN(389,`Limpa o campo de pesquisa.`),ug()()()(),Kc(390,`br`),Ac(391,`h3`),vN(392,`Interfaces`),ug(),Ac(393,`h4`,34)(394,`code`,5),vN(395,`PoBreadcrumbItem`),ug()(),Ac(396,`div`,2)(397,`p`),vN(398,`Interface que define cada item do componente `),Ac(399,`strong`),vN(400,`po-breadcrumb`),ug(),vN(401,`.`),ug()(),Ac(402,`h4`,12),vN(403,`Propriedades`),ug(),Ac(404,`table`,13)(405,`tr`,14)(406,`th`,15),vN(407,`Nome`),ug(),Ac(408,`th`,15),vN(409,`Tipo`),ug(),Ac(410,`th`,15),vN(411,`Descrição`),ug()(),Ac(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),vN(416,` action`),Kc(417,`br`),ug()()(),Ac(418,`td`,20)(419,`code`,35),vN(420,`Function`),ug()(),Ac(421,`td`,23)(422,`em`)(423,`strong`),vN(424,`(opcional)`),ug()(),Ac(425,`p`),vN(426,`Ação executada ao clicar no item.`),ug(),Ac(427,`blockquote`)(428,`p`),vN(429,`A função atribuída a esta propriedade receberá o `),Ac(430,`em`),vN(431,`label`),ug(),vN(432,` do item como parâmetro para execução.`),ug()()()(),Ac(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),vN(437,` label`),Kc(438,`br`),ug()()(),Ac(439,`td`,20)(440,`code`,25),vN(441,`string`),ug()(),Ac(442,`td`,23)(443,`p`),vN(444,`Rótulo do item.`),ug()()(),Ac(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),vN(449,` link`),Kc(450,`br`),ug()()(),Ac(451,`td`,20)(452,`code`,25),vN(453,`string`),ug()(),Ac(454,`td`,23)(455,`em`)(456,`strong`),vN(457,`(opcional)`),ug()(),Ac(458,`p`),vN(459,`Url do item.`),ug(),Ac(460,`blockquote`)(461,`p`),vN(462,`Caso o item também contenha uma `),Ac(463,`em`),vN(464,`action`),ug(),vN(465,` definida, a preferência de execução será do `),Ac(466,`em`),vN(467,`link`),ug(),vN(468,`.`),ug()(),Ac(469,`blockquote`)(470,`p`),vN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ac(472,`strong`)(473,`a`,36),vN(474,`Veja um exemplo de como criar rotas aqui`),ug()(),vN(475,`.`),ug()(),Ac(476,`blockquote`)(477,`p`),vN(478,`Esta propriedade é necessária para que a propriedade `),Ac(479,`code`),vN(480,`p-favorite-service`),ug(),vN(481,` consiga favoritar ou desfavoritar.`),ug()()()()(),Ac(482,`h4`,34)(483,`code`,5),vN(484,`PoBreadcrumb`),ug()(),Ac(485,`div`,2)(486,`p`),vN(487,`Interface que define o `),Ac(488,`code`),vN(489,`po-breadcrumb`),ug(),vN(490,`.`),ug()(),Ac(491,`h4`,12),vN(492,`Propriedades`),ug(),Ac(493,`table`,13)(494,`tr`,14)(495,`th`,15),vN(496,`Nome`),ug(),Ac(497,`th`,15),vN(498,`Tipo`),ug(),Ac(499,`th`,15),vN(500,`Descrição`),ug()(),Ac(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),vN(505,` favorite`),Kc(506,`br`),ug()()(),Ac(507,`td`,20)(508,`code`,25),vN(509,`string`),ug()(),Ac(510,`td`,23)(511,`em`)(512,`strong`),vN(513,`(opcional)`),ug()(),Ac(514,`p`),vN(515,`Permite definir uma URL para favoritar ou desfavoritar.`),ug(),Ac(516,`blockquote`)(517,`p`),vN(518,`Para maiores informações verificar a propriedade `),Ac(519,`code`),vN(520,`p-favorite-service`),ug(),vN(521,` do componente `),Ac(522,`code`),vN(523,`po-breadcrumb`),ug(),vN(524,`.`),ug()()()(),Ac(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),vN(529,` items`),Kc(530,`br`),ug()()(),Ac(531,`td`,20)(532,`code`,37),vN(533,`Array<PoBreadcrumbItem>`),ug()(),Ac(534,`td`,23)(535,`p`),vN(536,`Lista de itens do `),Ac(537,`em`),vN(538,`breadcrumb`),ug(),vN(539,`.`),ug(),Ac(540,`p`)(541,`strong`),vN(542,`Exemplo:`),ug()(),Ac(543,`pre`)(544,`code`),vN(545,`{ label: 'Po Portal', link: 'portal' }
`),ug()()()(),Ac(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),vN(550,` params`),Kc(551,`br`),ug()()(),Ac(552,`td`,20)(553,`code`,38),vN(554,`object`),ug()(),Ac(555,`td`,23)(556,`em`)(557,`strong`),vN(558,`(opcional)`),ug()(),Ac(559,`p`),vN(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ug()()()(),Ac(561,`h4`,34)(562,`code`,5),vN(563,`PoDisclaimer`),ug()(),Ac(564,`div`,2)(565,`p`),vN(566,`Interface que representa o objeto `),Ac(567,`code`),vN(568,`po-disclaimer`),ug(),vN(569,`.`),ug()(),Ac(570,`h4`,12),vN(571,`Propriedades`),ug(),Ac(572,`table`,13)(573,`tr`,14)(574,`th`,15),vN(575,`Nome`),ug(),Ac(576,`th`,15),vN(577,`Tipo`),ug(),Ac(578,`th`,15),vN(579,`Descrição`),ug()(),Ac(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),vN(584,` hideClose`),Kc(585,`br`),ug()()(),Ac(586,`td`,20)(587,`code`,39),vN(588,`boolean`),ug()(),Ac(589,`td`,23)(590,`em`)(591,`strong`),vN(592,`(opcional)`),ug()(),Ac(593,`p`),vN(594,`Se verdadeiro, oculta o botão para fechar o `),Ac(595,`em`),vN(596,`disclaimer`),ug(),vN(597,`.`),ug()()(),Ac(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),vN(602,` label`),Kc(603,`br`),ug()()(),Ac(604,`td`,20)(605,`code`,25),vN(606,`string`),ug()(),Ac(607,`td`,23)(608,`em`)(609,`strong`),vN(610,`(opcional)`),ug()(),Ac(611,`p`),vN(612,`Texto de exibição do objeto.`),ug()()(),Ac(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),vN(617,` property`),Kc(618,`br`),ug()()(),Ac(619,`td`,20)(620,`code`,25),vN(621,`string`),ug()(),Ac(622,`td`,23)(623,`em`)(624,`strong`),vN(625,`(opcional)`),ug()(),Ac(626,`p`),vN(627,`Nome da propriedade vinculada ao objeto `),Ac(628,`em`),vN(629,`disclaimer`),ug(),vN(630,`.`),ug()()(),Ac(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),vN(635,` value`),Kc(636,`br`),ug()()(),Ac(637,`td`,20)(638,`code`,40),vN(639,`any`),ug()(),Ac(640,`td`,23)(641,`p`),vN(642,`Valor do objeto.`),ug()()()(),Ac(643,`h4`,34)(644,`code`,5),vN(645,`PoDisclaimerGroupRemoveAction`),ug()(),Ac(646,`div`,2)(647,`p`),vN(648,`Estrutura do objeto representando o estado dos `),Ac(649,`em`),vN(650,`disclaimers`),ug(),vN(651,` após a remoção.`),ug()(),Ac(652,`h4`,12),vN(653,`Propriedades`),ug(),Ac(654,`table`,13)(655,`tr`,14)(656,`th`,15),vN(657,`Nome`),ug(),Ac(658,`th`,15),vN(659,`Tipo`),ug(),Ac(660,`th`,15),vN(661,`Descrição`),ug()(),Ac(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),vN(666,` currentDisclaimers`),Kc(667,`br`),ug()()(),Ac(668,`td`,20)(669,`code`,41),vN(670,`Array<PoDisclaimer>`),ug()(),Ac(671,`td`,23)(672,`p`),vN(673,`Lista com os `),Ac(674,`em`),vN(675,`disclaimers`),ug(),vN(676,` atuais (restantes).`),ug()()(),Ac(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),vN(681,` removedDisclaimer`),Kc(682,`br`),ug()()(),Ac(683,`td`,20)(684,`code`,42),vN(685,`PoDisclaimer`),ug()(),Ac(686,`td`,23)(687,`p`)(688,`em`),vN(689,`Disclaimer`),ug(),vN(690,` que foi removido.`),ug()()()(),Ac(691,`h4`,34)(692,`code`,5),vN(693,`PoDisclaimerGroup`),ug()(),Ac(694,`div`,2)(695,`p`),vN(696,`Interface que representa o objeto `),Ac(697,`code`),vN(698,`po-disclaimer-group`),ug(),vN(699,`.`),ug()(),Ac(700,`h4`,12),vN(701,`Propriedades`),ug(),Ac(702,`table`,13)(703,`tr`,14)(704,`th`,15),vN(705,`Nome`),ug(),Ac(706,`th`,15),vN(707,`Tipo`),ug(),Ac(708,`th`,15),vN(709,`Descrição`),ug()(),Ac(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),vN(714,` change`),Kc(715,`br`),ug()()(),Ac(716,`td`,20)(717,`code`,35),vN(718,`Function`),ug()(),Ac(719,`td`,23)(720,`em`)(721,`strong`),vN(722,`(opcional)`),ug()(),Ac(723,`p`),vN(724,`Função que será disparada quando a lista de `),Ac(725,`em`),vN(726,`disclaimers`),ug(),vN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Ac(728,`em`),vN(729,`disclaimers`),ug(),vN(730,`.`),ug()()(),Ac(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),vN(735,` disclaimers`),Kc(736,`br`),ug()()(),Ac(737,`td`,20)(738,`code`,41),vN(739,`Array<PoDisclaimer>`),ug()(),Ac(740,`td`,23)(741,`p`),vN(742,`Lista de `),Ac(743,`em`),vN(744,`disclaimers`),ug(),vN(745,`.`),ug(),Ac(746,`p`),vN(747,`Exemplo:`),ug(),Ac(748,`pre`)(749,`code`),vN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),ug()(),Ac(751,`p`),vN(752,`Para que a lista de `),Ac(753,`em`),vN(754,`disclaimers`),ug(),vN(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Ac(756,`code`),vN(757,`PoDisclaimer`),ug(),vN(758,`.`),ug(),Ac(759,`p`),vN(760,`Exemplo:`),ug(),Ac(761,`pre`)(762,`code`),vN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),ug()()()(),Ac(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),vN(768,` hideRemoveAll`),Kc(769,`br`),ug()()(),Ac(770,`td`,20)(771,`code`,39),vN(772,`boolean`),ug()(),Ac(773,`td`,23)(774,`em`)(775,`strong`),vN(776,`(opcional)`),ug()(),Ac(777,`p`),vN(778,`Oculta o botão para remover todos os `),Ac(779,`em`),vN(780,`disclaimers`),ug(),vN(781,` do grupo.`),ug(),Ac(782,`blockquote`)(783,`p`),vN(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Ac(785,`em`),vN(786,`disclaimers`),ug(),vN(787,` com a opção `),Ac(788,`code`),vN(789,`hideClose`),ug(),vN(790,` habilitada.`),ug()()()(),Ac(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),vN(795,` remove`),Kc(796,`br`),ug()()(),Ac(797,`td`,20)(798,`code`,35),vN(799,`Function`),ug()(),Ac(800,`td`,23)(801,`em`)(802,`strong`),vN(803,`(opcional)`),ug()(),Ac(804,`p`),vN(805,`Função que será disparada quando um `),Ac(806,`em`),vN(807,`disclaimer`),ug(),vN(808,` for removido da lista de
`),Ac(809,`em`),vN(810,`disclaimers`),ug(),vN(811,` pelo usuário.`),ug(),Ac(812,`p`),vN(813,`Recebe como parâmetro um objeto conforme a interface `),Ac(814,`code`),vN(815,`PoDisclaimerGroupRemoveAction`),ug(),vN(816,`.`),ug()()(),Ac(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),vN(821,` removeAll`),Kc(822,`br`),ug()()(),Ac(823,`td`,20)(824,`code`,35),vN(825,`Function`),ug()(),Ac(826,`td`,23)(827,`em`)(828,`strong`),vN(829,`(opcional)`),ug()(),Ac(830,`p`),vN(831,`Função que será disparada quando todos os `),Ac(832,`em`),vN(833,`disclaimers`),ug(),vN(834,` forem removidos da lista de `),Ac(835,`em`),vN(836,`disclaimers`),ug(),vN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),ug(),Ac(838,`p`),vN(839,`Recebe como parâmetro uma lista contendo todos os `),Ac(840,`code`),vN(841,`disclaimers`),ug(),vN(842,` removidos.`),ug()()(),Ac(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),vN(847,` title`),Kc(848,`br`),ug()()(),Ac(849,`td`,20)(850,`code`,25),vN(851,`string`),ug()(),Ac(852,`td`,23)(853,`em`)(854,`strong`),vN(855,`(opcional)`),ug()(),Ac(856,`p`),vN(857,`Título do grupo de `),Ac(858,`em`),vN(859,`disclaimers`),ug(),vN(860,`.`),ug()()()(),Ac(861,`h4`,34)(862,`code`,5),vN(863,`PoPageAction`),ug()(),Ac(864,`div`,2)(865,`p`),vN(866,`Interface para as ações dos componentes `),Ac(867,`code`),vN(868,`po-page-default`),ug(),vN(869,` e `),Ac(870,`code`),vN(871,`po-page-list`),ug(),vN(872,`.`),ug(),Ac(873,`p`),vN(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Ac(875,`em`),vN(876,`dropdown`),ug(),vN(877,`,
conforme o `),Ac(878,`code`),vN(879,`PoPageActionsLayout`),ug(),vN(880,` e o tamanho da tela.`),ug(),Ac(881,`blockquote`)(882,`p`),vN(883,`As propriedades `),Ac(884,`code`),vN(885,`separator`),ug(),vN(886,`, `),Ac(887,`code`),vN(888,`selected`),ug(),vN(889,` e `),Ac(890,`code`),vN(891,`subItems`),ug(),vN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Ac(893,`em`),vN(894,`dropdown`),ug(),vN(895,`.`),ug()()(),Ac(896,`h4`,12),vN(897,`Propriedades`),ug(),Ac(898,`table`,13)(899,`tr`,14)(900,`th`,15),vN(901,`Nome`),ug(),Ac(902,`th`,15),vN(903,`Tipo`),ug(),Ac(904,`th`,15),vN(905,`Descrição`),ug()(),Ac(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),vN(910,` action`),Kc(911,`br`),ug()()(),Ac(912,`td`,20)(913,`code`,35),vN(914,`Function`),ug()(),Ac(915,`td`,23)(916,`em`)(917,`strong`),vN(918,`(opcional)`),ug()(),Ac(919,`p`),vN(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(921,`p`),vN(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(923,`code`),vN(924,`subItems`),ug(),vN(925,`.`),ug(),Ac(926,`blockquote`)(927,`p`),vN(928,`Para que a função seja executada no contexto do componente, utilize `),Ac(929,`em`),vN(930,`bind`),ug(),vN(931,`:
`),Ac(932,`code`),vN(933,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),vN(938,` disabled`),Kc(939,`br`),ug()()(),Ac(940,`td`,20)(941,`code`,39),vN(942,`boolean `),ug(),Ac(943,`code`,35),vN(944,` Function`),ug()(),Ac(945,`td`,23)(946,`em`)(947,`strong`),vN(948,`(opcional)`),ug()(),Ac(949,`p`),vN(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),vN(955,` icon`),Kc(956,`br`),ug()()(),Ac(957,`td`,20)(958,`code`,25),vN(959,`string `),ug(),Ac(960,`code`,43),vN(961,` TemplateRef<void>`),ug()(),Ac(962,`td`,23)(963,`em`)(964,`strong`),vN(965,`(opcional)`),ug()(),Ac(966,`p`),vN(967,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(968,`p`),vN(969,`Aceita ícones da `),Ac(970,`a`,6),vN(971,`Biblioteca de ícones`),ug(),vN(972,`, fontes externas (ex: Font Awesome)
ou um `),Ac(973,`code`),vN(974,`TemplateRef`),ug(),vN(975,` para ícones customizados.`),ug(),Ac(976,`pre`)(977,`code`),vN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),vN(983,` kind`),Kc(984,`br`),ug()()(),Ac(985,`td`,20)(986,`code`,25),vN(987,`string`),ug()(),Ac(988,`td`,23)(989,`em`)(990,`strong`),vN(991,`(opcional)`),ug()(),Ac(992,`p`),vN(993,`Define o estilo visual da ação quando exibida como botão fora do `),Ac(994,`em`),vN(995,`dropdown`),ug(),vN(996,`.`),ug(),Ac(997,`p`),vN(998,`Valores permitidos:`),ug(),Ac(999,`ul`)(1e3,`li`)(1001,`code`),vN(1002,`primary`),ug(),vN(1003,`: botão com maior destaque visual.`),ug(),Ac(1004,`li`)(1005,`code`),vN(1006,`secondary`),ug(),vN(1007,`: estilo padrão.`),ug()(),Ac(1008,`blockquote`)(1009,`p`),vN(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),ug()(),Ac(1011,`blockquote`)(1012,`p`),vN(1013,`Somente uma ação pode ter `),Ac(1014,`code`),vN(1015,`kind`),ug(),vN(1016,` igual a `),Ac(1017,`code`),vN(1018,`primary`),ug(),vN(1019,`. Caso mais de uma defina `),Ac(1020,`code`),vN(1021,`primary`),ug(),vN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Ac(1023,`code`),vN(1024,`secondary`),ug(),vN(1025,`.`),ug()(),Ac(1026,`blockquote`)(1027,`p`),vN(1028,`Quando não definido, o estilo é determinado pelo `),Ac(1029,`code`),vN(1030,`PoPageActionsLayout`),ug(),vN(1031,`.`),ug()()()(),Ac(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),vN(1036,` label`),Kc(1037,`br`),ug()()(),Ac(1038,`td`,20)(1039,`code`,25),vN(1040,`string`),ug()(),Ac(1041,`td`,23)(1042,`p`),vN(1043,`Rótulo da ação.`),ug(),Ac(1044,`p`),vN(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(1046,`code`),vN(1047,`subItems`),ug(),vN(1048,`.`),ug()()(),Ac(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),vN(1053,` selected`),Kc(1054,`br`),ug()()(),Ac(1055,`td`,20)(1056,`code`,39),vN(1057,`boolean`),ug()(),Ac(1058,`td`,23)(1059,`em`)(1060,`strong`),vN(1061,`(opcional)`),ug()(),Ac(1062,`p`),vN(1063,`Define se a ação está selecionada.`),ug()()(),Ac(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),vN(1068,` separator`),Kc(1069,`br`),ug()()(),Ac(1070,`td`,20)(1071,`code`,39),vN(1072,`boolean`),ug()(),Ac(1073,`td`,23)(1074,`em`)(1075,`strong`),vN(1076,`(opcional)`),ug()(),Ac(1077,`p`),vN(1078,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),vN(1083,` subItems`),Kc(1084,`br`),ug()()(),Ac(1085,`td`,20)(1086,`code`,44),vN(1087,`Array<PoPopupAction>`),ug()(),Ac(1088,`td`,23)(1089,`em`)(1090,`strong`),vN(1091,`(opcional)`),ug()(),Ac(1092,`p`),vN(1093,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(1094,`p`),vN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(1096,`blockquote`)(1097,`p`),vN(1098,`As propriedades `),Ac(1099,`code`),vN(1100,`disabled`),ug(),vN(1101,`, `),Ac(1102,`code`),vN(1103,`type`),ug(),vN(1104,` e `),Ac(1105,`code`),vN(1106,`visible`),ug(),vN(1107,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(1108,`blockquote`)(1109,`p`),vN(1110,`Quando `),Ac(1111,`code`),vN(1112,`url`),ug(),vN(1113,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(1114,`blockquote`)(1115,`p`),vN(1116,`Em subníveis aninhados, o `),Ac(1117,`code`),vN(1118,`icon`),ug(),vN(1119,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(1120,`tr`,16)(1121,`td`,17)(1122,`div`,18)(1123,`span`,19),vN(1124,` type`),Kc(1125,`br`),ug()()(),Ac(1126,`td`,20)(1127,`code`,25),vN(1128,`string`),ug()(),Ac(1129,`td`,23)(1130,`em`)(1131,`strong`),vN(1132,`(opcional)`),ug()(),Ac(1133,`p`),vN(1134,`Define a cor do item.`),ug(),Ac(1135,`p`),vN(1136,`Valores válidos:`),ug(),Ac(1137,`ul`)(1138,`li`)(1139,`code`),vN(1140,`default`),ug()(),Ac(1141,`li`)(1142,`code`),vN(1143,`danger`),ug()()()()(),Ac(1144,`tr`,16)(1145,`td`,17)(1146,`div`,18)(1147,`span`,19),vN(1148,` url`),Kc(1149,`br`),ug()()(),Ac(1150,`td`,20)(1151,`code`,25),vN(1152,`string`),ug()(),Ac(1153,`td`,23)(1154,`em`)(1155,`strong`),vN(1156,`(opcional)`),ug()(),Ac(1157,`p`),vN(1158,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(1159,`p`),vN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(1161,`code`),vN(1162,`url`),ug(),vN(1163,` é informada em um agrupador, o clique `),Ac(1164,`strong`),vN(1165,`não abrirá os subitens`),ug(),vN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(1167,`blockquote`)(1168,`p`),vN(1169,`Quando informada, tem prioridade sobre a propriedade `),Ac(1170,`code`),vN(1171,`action`),ug(),vN(1172,`.`),ug()()()(),Ac(1173,`tr`,16)(1174,`td`,17)(1175,`div`,18)(1176,`span`,19),vN(1177,` visible`),Kc(1178,`br`),ug()()(),Ac(1179,`td`,20)(1180,`code`,39),vN(1181,`boolean `),ug(),Ac(1182,`code`,35),vN(1183,` Function`),ug()(),Ac(1184,`td`,23)(1185,`em`)(1186,`strong`),vN(1187,`(opcional)`),ug()(),Ac(1188,`p`),vN(1189,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(1190,`h4`,34)(1191,`code`,5),vN(1192,`PoPageFilter`),ug()(),Ac(1193,`div`,2)(1194,`p`),vN(1195,`Interface para o atributo `),Ac(1196,`code`),vN(1197,`filter`),ug(),vN(1198,` do componente `),Ac(1199,`code`),vN(1200,`po-page-list`),ug(),vN(1201,`.`),ug()(),Ac(1202,`h4`,12),vN(1203,`Propriedades`),ug(),Ac(1204,`table`,13)(1205,`tr`,14)(1206,`th`,15),vN(1207,`Nome`),ug(),Ac(1208,`th`,15),vN(1209,`Tipo`),ug(),Ac(1210,`th`,15),vN(1211,`Descrição`),ug()(),Ac(1212,`tr`,16)(1213,`td`,17)(1214,`div`,18)(1215,`span`,19),vN(1216,` action`),Kc(1217,`br`),ug()()(),Ac(1218,`td`,20)(1219,`code`,35),vN(1220,`Function`),ug()(),Ac(1221,`td`,23)(1222,`em`)(1223,`strong`),vN(1224,`(opcional)`),ug()(),Ac(1225,`p`),vN(1226,`Ação a ser executada.`),ug()()(),Ac(1227,`tr`,16)(1228,`td`,17)(1229,`div`,18)(1230,`span`,19),vN(1231,` advancedAction`),Kc(1232,`br`),ug()()(),Ac(1233,`td`,20)(1234,`code`,35),vN(1235,`Function`),ug()(),Ac(1236,`td`,23)(1237,`em`)(1238,`strong`),vN(1239,`(opcional)`),ug()(),Ac(1240,`p`),vN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Ac(1242,`em`),vN(1243,`click`),ug(),vN(1244,` através do rótulo `),Ac(1245,`strong`),vN(1246,`Busca Avançada`),ug(),vN(1247,`.`),ug()()(),Ac(1248,`tr`,16)(1249,`td`,17)(1250,`div`,18)(1251,`span`,19),vN(1252,` placeholder`),Kc(1253,`br`),ug()()(),Ac(1254,`td`,20)(1255,`code`,25),vN(1256,`string`),ug()(),Ac(1257,`td`,23)(1258,`em`)(1259,`strong`),vN(1260,`(opcional)`),ug()(),Ac(1261,`p`),vN(1262,`Texto de instrução exibido dentro do campo de filtro.`),ug()()(),Ac(1263,`tr`,16)(1264,`td`,17)(1265,`div`,18)(1266,`span`,19),vN(1267,` width`),Kc(1268,`br`),ug()()(),Ac(1269,`td`,20)(1270,`code`,45),vN(1271,`number`),ug()(),Ac(1272,`td`,23)(1273,`em`)(1274,`strong`),vN(1275,`(opcional)`),ug()(),Ac(1276,`p`),vN(1277,`Tamanho do filtro em tela, utilizando o `),Ac(1278,`em`),vN(1279,`Grid System`),ug(),vN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),ug()()()(),Ac(1281,`h4`,34)(1282,`code`,5),vN(1283,`PoPageListLiterals`),ug()(),Ac(1284,`div`,2)(1285,`p`),vN(1286,`Interface para definição das literais usadas no `),Ac(1287,`code`),vN(1288,`po-page-list`),ug(),vN(1289,`.`),ug()(),Ac(1290,`h4`,12),vN(1291,`Propriedades`),ug(),Ac(1292,`table`,13)(1293,`tr`,14)(1294,`th`,15),vN(1295,`Nome`),ug(),Ac(1296,`th`,15),vN(1297,`Tipo`),ug(),Ac(1298,`th`,15),vN(1299,`Descrição`),ug()(),Ac(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),vN(1304,` otherActions`),Kc(1305,`br`),ug()()(),Ac(1306,`td`,20)(1307,`code`,25),vN(1308,`string`),ug()(),Ac(1309,`td`,23)(1310,`em`)(1311,`strong`),vN(1312,`(opcional)`),ug()(),Ac(1313,`p`),vN(1314,`Legenda do `),Ac(1315,`code`),vN(1316,`po-dropdown`),ug(),vN(1317,` de ações.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return s})();var Ge=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(E(Qn),E(wn))};static ɵcmp=Hn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-page-list-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-page-list-basic-view`)(6,`sample-po-page-list-labs-view`)(7,`sample-po-page-list-hiring-processes-view`),ug()()()),r&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,Ee,fe,xe,ve],encapsulation:2,changeDetection:1})}return s})()}];var ye=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[kL.forChild(Ge),kL]})}return s})();var vt=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[Ta,ye]})}return s})();export{vt as DocPoPageListModule};