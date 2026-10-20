import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Ei as jc,Hi as pe,Ht as bae,Ii as nI,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Pr as R,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Tt as Xze,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,en as gP,fa as we,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var be=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&nu(0,`po-page-list`,0)},dependencies:[Xze],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s});var Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page List Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-list-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return s})();var Se=(()=>{class s{poNotification=p(zu);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=Sx();jc(0,`po-page-list`,6),nu(1,`po-divider`)(2,`po-info`,7),wg(),nu(3,`po-divider`),jc(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action.action,a)||(n.action.action=a),v_(a)}),wg(),jc(8,`po-input`,10),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action.label,a)||(n.action.label=a),v_(a)}),wg(),jc(9,`po-input`,11),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action.url,a)||(n.action.url=a),v_(a)}),wg(),jc(10,`po-select`,12),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action.type,a)||(n.action.type=a),v_(a)}),wg(),jc(11,`po-select`,13),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action.icon,a)||(n.action.icon=a),v_(a)}),wg(),jc(12,`po-checkbox-group`,14),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.action,a)||(n.action=a),v_(a)}),wg()(),jc(13,`div`,8)(14,`po-button`,15),mt(`p-click`,function(){return n.addAction(n.action)}),wg()()(),nu(15,`po-divider`),jc(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),v_(a)}),wg()()(),jc(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),v_(a)}),wg(),jc(24,`po-input`,18),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),v_(a)}),wg()(),jc(25,`div`,8)(26,`po-button`,19),mt(`p-click`,function(){return n.addBreadcrumbItem()}),wg()()(),nu(27,`po-divider`),jc(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),v_(a)}),wg(),jc(32,`po-input`,21),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),v_(a)}),wg()(),jc(33,`div`,8)(34,`po-button`,22),mt(`p-click`,function(){return n.addBreadcrumbParam()}),wg()()(),nu(35,`po-divider`),jc(36,`div`,8)(37,`po-input`,23),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),v_(a)}),mt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),wg(),jc(38,`po-switch`,24),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),v_(a)}),mt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),wg()(),jc(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerLabel,a)||(n.disclaimerLabel=a),v_(a)}),wg(),jc(43,`po-input`,26),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerProperty,a)||(n.disclaimerProperty=a),v_(a)}),wg()(),jc(44,`div`,8)(45,`po-input`,27),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerValue,a)||(n.disclaimerValue=a),v_(a)}),wg(),jc(46,`po-switch`,28),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),v_(a)}),wg()(),jc(47,`div`,8)(48,`po-button`,29),mt(`p-click`,function(){return n.addDisclaimer()}),wg()()(),nu(49,`po-divider`),jc(50,`form`,null,5)(52,`po-input`,30),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.title,a)||(n.title=a),v_(a)}),wg(),jc(53,`po-input`,31),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.subtitle,a)||(n.subtitle=a),v_(a)}),wg(),jc(54,`po-input`,32),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.filter.placeholder,a)||(n.filter.placeholder=a),v_(a)}),wg(),jc(55,`po-input`,33),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.filter.width,a)||(n.filter.width=a),v_(a)}),wg(),jc(56,`po-input`,34),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.literals,a)||(n.literals=a),v_(a)}),mt(`p-change`,function(){return n.changeLiterals()}),wg(),jc(57,`po-radio-group`,35),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.componentsSize,a)||(n.componentsSize=a),v_(a)}),wg(),jc(58,`div`,8)(59,`po-button`,36),mt(`p-click`,function(){return n.restore()}),wg()()()}if(r&2){let d=Fx(5),p=Fx(21),a=Fx(29),Le=Fx(40);jE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),rg(2),jE(`p-value`,n.filterModel),rg(5),ib(`ngModel`,n.action.action),t0(),rg(),ib(`ngModel`,n.action.label),t0(),rg(),ib(`ngModel`,n.action.url),t0(),rg(),ib(`ngModel`,n.action.type),jE(`p-options`,n.typeOptions),t0(),rg(),ib(`ngModel`,n.action.icon),jE(`p-options`,n.iconOptions),t0(),rg(),ib(`ngModel`,n.action),jE(`p-options`,n.actionOptions),t0(),rg(2),jE(`p-disabled`,d.form.invalid),rg(5),ib(`ngModel`,n.breadcrumb.favorite),t0(),rg(4),ib(`ngModel`,n.breadcrumbItem.label),t0(),rg(),ib(`ngModel`,n.breadcrumbItem.link),t0(),rg(2),jE(`p-disabled`,p.invalid),rg(5),ib(`ngModel`,n.breadcrumbParams.property),t0(),rg(),ib(`ngModel`,n.breadcrumbParams.value),t0(),rg(2),jE(`p-disabled`,a.invalid),rg(3),ib(`ngModel`,n.disclaimerGroupTitle),t0(),rg(),ib(`ngModel`,n.disclaimerGroupHideRemoveAll),t0(),rg(4),ib(`ngModel`,n.disclaimerLabel),t0(),rg(),ib(`ngModel`,n.disclaimerProperty),t0(),rg(2),ib(`ngModel`,n.disclaimerValue),t0(),rg(),ib(`ngModel`,n.disclaimerHideClose),t0(),rg(2),jE(`p-disabled`,Le.invalid),rg(4),ib(`ngModel`,n.title),t0(),rg(),ib(`ngModel`,n.subtitle),t0(),rg(),ib(`ngModel`,n.filter.placeholder),t0(),rg(),ib(`ngModel`,n.filter.width),t0(),rg(),ib(`ngModel`,n.literals),t0(),rg(),ib(`ngModel`,n.componentsSize),jE(`p-options`,n.componentsSizeOptions),t0()}},dependencies:[wK,nI,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,moe,w5,_oe,Xze],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s});var fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page List Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-list
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-list-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return s})();var K=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=R({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var ke=[`advancedFilterModal`];var Be=[`poPageList`];var Pe=(()=>{class s{sampleHiringProcessesService=p(K);poNotification=p(zu);poDialog=p(Wte);router=p(Sn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&iu(ke,7)(Be,7),r&2){let d;vo(d=_o())&&(n.advancedFilterModal=d.first),vo(d=_o())&&(n.poPageList=d.first)}},standalone:!1,features:[we([K])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=Sx();jc(0,`po-page-list`,3,0),nu(2,`po-table`,4),wg(),jc(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.jobDescription,a)||(n.jobDescription=a),v_(a)}),wg(),jc(8,`po-checkbox-group`,7),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(n.status,a)||(n.status=a),v_(a)}),wg()()()}r&2&&(jE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),rg(2),jE(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),rg(),jE(`p-primary-action`,n.advancedFilterPrimaryAction),rg(4),ib(`ngModel`,n.jobDescription),jE(`p-options`,n.jobDescriptionOptions),t0(),rg(),ib(`ngModel`,n.status),jE(`p-options`,n.statusOptions),t0())},dependencies:[wK,CK,EK,TF,EF,m5,gP,ea,Xze,I5],encapsulation:2,changeDetection:1})}return s})();var qe=s=>({"docs-sample-code-tabs":s});var xe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page List - Hiring Processes`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-list
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-page-list-hiring-processes`),wg(),nu(27,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,qe,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Pe],encapsulation:2,changeDetection:1})}return s})();var ve=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1355,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),iO(8,`po-page-default`),wg(),iO(9,`, `),jc(10,`code`),iO(11,`po-page-detail`),wg(),iO(12,`,
`),jc(13,`code`),iO(14,`po-page-edit`),wg(),iO(15,`, `),jc(16,`code`),iO(17,`po-page-list`),wg(),iO(18,` e `),jc(19,`code`),iO(20,`po-page-slide`),wg(),iO(21,`.`),wg()(),jc(22,`h3`,3),iO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),iO(26,`PoPageListComponent`),wg()(),jc(27,`div`,2)(28,`p`),iO(29,`O componente `),jc(30,`code`),iO(31,`po-page-list`),wg(),iO(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),wg(),jc(33,`p`),iO(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),jc(35,`em`),iO(36,`click`),wg(),iO(37,` do ícone `),jc(38,`a`,6),iO(39,`an-magnifying-glass`),wg(),iO(40,`
quanto ao pressionar da tecla `),jc(41,`em`),iO(42,`ENTER`),wg(),iO(43,` quando o foco estiver no campo de pesquisa.`),wg(),jc(44,`p`),iO(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),jc(46,`a`,7)(47,`code`),iO(48,`po-disclaimer-group`),wg()(),iO(49,`.`),wg(),jc(50,`h4`),iO(51,`Tokens customizáveis`),wg(),jc(52,`blockquote`)(53,`p`),iO(54,`Para maiores informações, acesse o guia `),jc(55,`a`,8),iO(56,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(57,`.`),wg()(),jc(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),iO(62,`Propriedade`),wg(),jc(63,`th`),iO(64,`Descrição`),wg(),jc(65,`th`),iO(66,`Valor Padrão`),wg()()(),jc(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),iO(71,`Header`),wg()(),nu(72,`td`)(73,`td`),wg(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--padding`),wg()(),jc(78,`td`),iO(79,`Espaçamento do header`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--gap`),wg()(),jc(87,`td`),iO(88,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--spacing-md)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--gap-actions`),wg()(),jc(96,`td`),iO(97,`Espaçamento entre as ações`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--spacing-xs)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--font-family`),wg()(),jc(105,`td`),iO(106,`Família tipográfica do título`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--font-family-theme)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`strong`),iO(113,`Content`),wg()(),nu(114,`td`)(115,`td`),wg(),jc(116,`tr`)(117,`td`)(118,`code`),iO(119,`--padding-content`),wg()(),jc(120,`td`),iO(121,`Espaçamento do conteúdo`),wg(),jc(122,`td`)(123,`code`),iO(124,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(125,`div`,9)(126,`h4`,10),iO(127,`Seletor`),wg(),jc(128,`pre`,11),iO(129,`<po-page-list
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
`),wg()(),jc(130,`h4`,12),iO(131,`Propriedades`),wg(),jc(132,`table`,13)(133,`tr`,14)(134,`th`,15),iO(135,`Nome`),wg(),jc(136,`th`,15),iO(137,`Tipo`),wg(),jc(138,`th`,15),iO(139,`Padrão`),wg(),jc(140,`th`,15),iO(141,`Descrição`),wg()(),jc(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),iO(146,` p-actions`),nu(147,`br`),wg()()(),jc(148,`td`,20)(149,`code`,21),iO(150,`Array<PoPageAction>`),wg()(),jc(151,`td`,22),iO(152,`-`),wg(),jc(153,`td`,23)(154,`em`)(155,`strong`),iO(156,`(opcional)`),wg()(),jc(157,`p`),iO(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),jc(159,`code`),iO(160,`PoPageAction`),wg(),iO(161,`.`),wg()()(),jc(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),iO(166,` p-breadcrumb`),nu(167,`br`),wg()()(),jc(168,`td`,20)(169,`code`,24),iO(170,`PoBreadcrumb`),wg()(),jc(171,`td`,22),iO(172,`-`),wg(),jc(173,`td`,23)(174,`em`)(175,`strong`),iO(176,`(opcional)`),wg()(),jc(177,`p`),iO(178,`Objeto que implementa as propriedades da interface `),jc(179,`code`),iO(180,`PoBreadcrumb`),wg(),iO(181,`.`),wg()()(),jc(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),iO(186,` p-components-size`),nu(187,`br`),wg()()(),jc(188,`td`,20)(189,`code`,25),iO(190,`string`),wg()(),jc(191,`td`,22)(192,`p`)(193,`code`),iO(194,`medium`),wg()()(),jc(195,`td`,23)(196,`em`)(197,`strong`),iO(198,`(opcional)`),wg()(),jc(199,`p`),iO(200,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(201,`ul`)(202,`li`)(203,`code`),iO(204,`small`),wg(),iO(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(206,`li`)(207,`code`),iO(208,`medium`),wg(),iO(209,`: aplica a medida medium de cada componente.`),wg()(),jc(210,`blockquote`)(211,`p`),iO(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(213,`code`),iO(214,`medium`),wg(),iO(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(216,`a`,26),iO(217,`po-theme`),wg(),iO(218,`.`),wg()()()(),jc(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),iO(223,` p-disclaimer-group`),nu(224,`br`),wg()()(),jc(225,`td`,20)(226,`code`,27),iO(227,`PoDisclaimerGroup`),wg()(),jc(228,`td`,22),iO(229,`-`),wg(),jc(230,`td`,23)(231,`em`)(232,`strong`),iO(233,`(opcional)`),wg()(),jc(234,`p`),iO(235,`Objeto que implementa as propriedades da interface `),jc(236,`code`),iO(237,`PoDisclaimerGroup`),wg(),iO(238,`.`),wg()()(),jc(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),iO(243,` p-filter`),nu(244,`br`),wg()()(),jc(245,`td`,20)(246,`code`,28),iO(247,`PoPageFilter`),wg()(),jc(248,`td`,22),iO(249,`-`),wg(),jc(250,`td`,23)(251,`p`),iO(252,`Objeto que implementa as propriedades da interface `),jc(253,`code`),iO(254,`PoPageFilter`),wg(),iO(255,`.`),wg()()(),jc(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),iO(260,` p-literals`),nu(261,`br`),wg()()(),jc(262,`td`,20)(263,`code`,29),iO(264,`PoPageListLiterals`),wg()(),jc(265,`td`,22),iO(266,`-`),wg(),jc(267,`td`,23)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Objeto com as literais usadas no `),jc(273,`code`),iO(274,`po-page-list`),wg(),iO(275,`.`),wg(),jc(276,`p`),iO(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(278,`pre`)(279,`code`),iO(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),wg()(),jc(281,`p`),iO(282,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(283,`pre`)(284,`code`),iO(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),wg()(),jc(286,`p`),iO(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(288,`pre`)(289,`code`),iO(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),wg()(),jc(291,`blockquote`)(292,`p`),iO(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(294,`a`,30)(295,`code`),iO(296,`PoI18nService`),wg()(),iO(297,` ou `),jc(298,`em`),iO(299,`browser`),wg(),iO(300,`.`),wg()()()(),jc(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),iO(305,` p-quick-search-value`),nu(306,`br`),wg()()(),jc(307,`td`,20)(308,`code`,25),iO(309,`string`),wg()(),jc(310,`td`,22),iO(311,`-`),wg(),jc(312,`td`,23)(313,`em`)(314,`strong`),iO(315,`(opcional)`),wg()(),jc(316,`p`),iO(317,`Valor padrão na busca rápida ao inicializar o componente`),wg()()(),jc(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),iO(322,` p-subtitle`),nu(323,`br`),wg()()(),jc(324,`td`,20)(325,`code`,25),iO(326,`string`),wg()(),jc(327,`td`,22),iO(328,`-`),wg(),jc(329,`td`,23)(330,`em`)(331,`strong`),iO(332,`(opcional)`),wg()(),jc(333,`p`),iO(334,`Subtitulo do Header da página.`),wg(),jc(335,`p`),iO(336,`Suporta formatação básica com as tags `),jc(337,`code`),iO(338,`<b>`),wg(),iO(339,` (negrito), `),jc(340,`code`),iO(341,`<strong>`),wg(),iO(342,` (negrito), `),jc(343,`code`),iO(344,`<i>`),wg(),iO(345,` (itálico), `),jc(346,`code`),iO(347,`<em>`),wg(),iO(348,` (it\xE1lico) e
`),jc(349,`code`),iO(350,`<u>`),wg(),iO(351,` (sublinhado).`),wg(),jc(352,`p`),iO(353,`Exemplo:`),wg(),jc(354,`pre`)(355,`code`,31),iO(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),wg()(),jc(357,`blockquote`)(358,`p`),iO(359,`Requer que `),jc(360,`code`),iO(361,`p-title`),wg(),iO(362,` esteja definido.`),wg()()()(),jc(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),iO(367,` p-title`),nu(368,`br`),wg()()(),jc(369,`td`,20)(370,`code`,25),iO(371,`string`),wg()(),jc(372,`td`,22),iO(373,`-`),wg(),jc(374,`td`,23)(375,`p`),iO(376,`Título da página.`),wg()()()(),jc(377,`h3`,12),iO(378,`Métodos`),wg(),jc(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),iO(385,` clearInputSearch `),wg()()()()(),jc(386,`tr`,23)(387,`td`,23)(388,`p`),iO(389,`Limpa o campo de pesquisa.`),wg()()()(),nu(390,`br`),jc(391,`h3`),iO(392,`Interfaces`),wg(),jc(393,`h4`,34)(394,`code`,5),iO(395,`PoBreadcrumbItem`),wg()(),jc(396,`div`,2)(397,`p`),iO(398,`Interface que define cada item do componente `),jc(399,`strong`),iO(400,`po-breadcrumb`),wg(),iO(401,`.`),wg()(),jc(402,`h4`,12),iO(403,`Propriedades`),wg(),jc(404,`table`,13)(405,`tr`,14)(406,`th`,15),iO(407,`Nome`),wg(),jc(408,`th`,15),iO(409,`Tipo`),wg(),jc(410,`th`,15),iO(411,`Descrição`),wg()(),jc(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),iO(416,` action`),nu(417,`br`),wg()()(),jc(418,`td`,20)(419,`code`,35),iO(420,`Function`),wg()(),jc(421,`td`,23)(422,`em`)(423,`strong`),iO(424,`(opcional)`),wg()(),jc(425,`p`),iO(426,`Ação executada ao clicar no item.`),wg(),jc(427,`blockquote`)(428,`p`),iO(429,`A função atribuída a esta propriedade receberá o `),jc(430,`em`),iO(431,`label`),wg(),iO(432,` do item como parâmetro para execução.`),wg()()()(),jc(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),iO(437,` label`),nu(438,`br`),wg()()(),jc(439,`td`,20)(440,`code`,25),iO(441,`string`),wg()(),jc(442,`td`,23)(443,`p`),iO(444,`Rótulo do item.`),wg()()(),jc(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),iO(449,` link`),nu(450,`br`),wg()()(),jc(451,`td`,20)(452,`code`,25),iO(453,`string`),wg()(),jc(454,`td`,23)(455,`em`)(456,`strong`),iO(457,`(opcional)`),wg()(),jc(458,`p`),iO(459,`Url do item.`),wg(),jc(460,`blockquote`)(461,`p`),iO(462,`Caso o item também contenha uma `),jc(463,`em`),iO(464,`action`),wg(),iO(465,` definida, a preferência de execução será do `),jc(466,`em`),iO(467,`link`),wg(),iO(468,`.`),wg()(),jc(469,`blockquote`)(470,`p`),iO(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(472,`strong`)(473,`a`,36),iO(474,`Veja um exemplo de como criar rotas aqui`),wg()(),iO(475,`.`),wg()(),jc(476,`blockquote`)(477,`p`),iO(478,`Esta propriedade é necessária para que a propriedade `),jc(479,`code`),iO(480,`p-favorite-service`),wg(),iO(481,` consiga favoritar ou desfavoritar.`),wg()()()()(),jc(482,`h4`,34)(483,`code`,5),iO(484,`PoBreadcrumb`),wg()(),jc(485,`div`,2)(486,`p`),iO(487,`Interface que define o `),jc(488,`code`),iO(489,`po-breadcrumb`),wg(),iO(490,`.`),wg()(),jc(491,`h4`,12),iO(492,`Propriedades`),wg(),jc(493,`table`,13)(494,`tr`,14)(495,`th`,15),iO(496,`Nome`),wg(),jc(497,`th`,15),iO(498,`Tipo`),wg(),jc(499,`th`,15),iO(500,`Descrição`),wg()(),jc(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),iO(505,` favorite`),nu(506,`br`),wg()()(),jc(507,`td`,20)(508,`code`,25),iO(509,`string`),wg()(),jc(510,`td`,23)(511,`em`)(512,`strong`),iO(513,`(opcional)`),wg()(),jc(514,`p`),iO(515,`Permite definir uma URL para favoritar ou desfavoritar.`),wg(),jc(516,`blockquote`)(517,`p`),iO(518,`Para maiores informações verificar a propriedade `),jc(519,`code`),iO(520,`p-favorite-service`),wg(),iO(521,` do componente `),jc(522,`code`),iO(523,`po-breadcrumb`),wg(),iO(524,`.`),wg()()()(),jc(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),iO(529,` items`),nu(530,`br`),wg()()(),jc(531,`td`,20)(532,`code`,37),iO(533,`Array<PoBreadcrumbItem>`),wg()(),jc(534,`td`,23)(535,`p`),iO(536,`Lista de itens do `),jc(537,`em`),iO(538,`breadcrumb`),wg(),iO(539,`.`),wg(),jc(540,`p`)(541,`strong`),iO(542,`Exemplo:`),wg()(),jc(543,`pre`)(544,`code`),iO(545,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),iO(550,` params`),nu(551,`br`),wg()()(),jc(552,`td`,20)(553,`code`,38),iO(554,`object`),wg()(),jc(555,`td`,23)(556,`em`)(557,`strong`),iO(558,`(opcional)`),wg()(),jc(559,`p`),iO(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()()(),jc(561,`h4`,34)(562,`code`,5),iO(563,`PoDisclaimer`),wg()(),jc(564,`div`,2)(565,`p`),iO(566,`Interface que representa o objeto `),jc(567,`code`),iO(568,`po-disclaimer`),wg(),iO(569,`.`),wg()(),jc(570,`h4`,12),iO(571,`Propriedades`),wg(),jc(572,`table`,13)(573,`tr`,14)(574,`th`,15),iO(575,`Nome`),wg(),jc(576,`th`,15),iO(577,`Tipo`),wg(),jc(578,`th`,15),iO(579,`Descrição`),wg()(),jc(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),iO(584,` hideClose`),nu(585,`br`),wg()()(),jc(586,`td`,20)(587,`code`,39),iO(588,`boolean`),wg()(),jc(589,`td`,23)(590,`em`)(591,`strong`),iO(592,`(opcional)`),wg()(),jc(593,`p`),iO(594,`Se verdadeiro, oculta o botão para fechar o `),jc(595,`em`),iO(596,`disclaimer`),wg(),iO(597,`.`),wg()()(),jc(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),iO(602,` label`),nu(603,`br`),wg()()(),jc(604,`td`,20)(605,`code`,25),iO(606,`string`),wg()(),jc(607,`td`,23)(608,`em`)(609,`strong`),iO(610,`(opcional)`),wg()(),jc(611,`p`),iO(612,`Texto de exibição do objeto.`),wg()()(),jc(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),iO(617,` property`),nu(618,`br`),wg()()(),jc(619,`td`,20)(620,`code`,25),iO(621,`string`),wg()(),jc(622,`td`,23)(623,`em`)(624,`strong`),iO(625,`(opcional)`),wg()(),jc(626,`p`),iO(627,`Nome da propriedade vinculada ao objeto `),jc(628,`em`),iO(629,`disclaimer`),wg(),iO(630,`.`),wg()()(),jc(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),iO(635,` value`),nu(636,`br`),wg()()(),jc(637,`td`,20)(638,`code`,40),iO(639,`any`),wg()(),jc(640,`td`,23)(641,`p`),iO(642,`Valor do objeto.`),wg()()()(),jc(643,`h4`,34)(644,`code`,5),iO(645,`PoDisclaimerGroupRemoveAction`),wg()(),jc(646,`div`,2)(647,`p`),iO(648,`Estrutura do objeto representando o estado dos `),jc(649,`em`),iO(650,`disclaimers`),wg(),iO(651,` após a remoção.`),wg()(),jc(652,`h4`,12),iO(653,`Propriedades`),wg(),jc(654,`table`,13)(655,`tr`,14)(656,`th`,15),iO(657,`Nome`),wg(),jc(658,`th`,15),iO(659,`Tipo`),wg(),jc(660,`th`,15),iO(661,`Descrição`),wg()(),jc(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),iO(666,` currentDisclaimers`),nu(667,`br`),wg()()(),jc(668,`td`,20)(669,`code`,41),iO(670,`Array<PoDisclaimer>`),wg()(),jc(671,`td`,23)(672,`p`),iO(673,`Lista com os `),jc(674,`em`),iO(675,`disclaimers`),wg(),iO(676,` atuais (restantes).`),wg()()(),jc(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),iO(681,` removedDisclaimer`),nu(682,`br`),wg()()(),jc(683,`td`,20)(684,`code`,42),iO(685,`PoDisclaimer`),wg()(),jc(686,`td`,23)(687,`p`)(688,`em`),iO(689,`Disclaimer`),wg(),iO(690,` que foi removido.`),wg()()()(),jc(691,`h4`,34)(692,`code`,5),iO(693,`PoDisclaimerGroup`),wg()(),jc(694,`div`,2)(695,`p`),iO(696,`Interface que representa o objeto `),jc(697,`code`),iO(698,`po-disclaimer-group`),wg(),iO(699,`.`),wg()(),jc(700,`h4`,12),iO(701,`Propriedades`),wg(),jc(702,`table`,13)(703,`tr`,14)(704,`th`,15),iO(705,`Nome`),wg(),jc(706,`th`,15),iO(707,`Tipo`),wg(),jc(708,`th`,15),iO(709,`Descrição`),wg()(),jc(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),iO(714,` change`),nu(715,`br`),wg()()(),jc(716,`td`,20)(717,`code`,35),iO(718,`Function`),wg()(),jc(719,`td`,23)(720,`em`)(721,`strong`),iO(722,`(opcional)`),wg()(),jc(723,`p`),iO(724,`Função que será disparada quando a lista de `),jc(725,`em`),iO(726,`disclaimers`),wg(),iO(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),jc(728,`em`),iO(729,`disclaimers`),wg(),iO(730,`.`),wg()()(),jc(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),iO(735,` disclaimers`),nu(736,`br`),wg()()(),jc(737,`td`,20)(738,`code`,41),iO(739,`Array<PoDisclaimer>`),wg()(),jc(740,`td`,23)(741,`p`),iO(742,`Lista de `),jc(743,`em`),iO(744,`disclaimers`),wg(),iO(745,`.`),wg(),jc(746,`p`),iO(747,`Exemplo:`),wg(),jc(748,`pre`)(749,`code`),iO(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),wg()(),jc(751,`p`),iO(752,`Para que a lista de `),jc(753,`em`),iO(754,`disclaimers`),wg(),iO(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),jc(756,`code`),iO(757,`PoDisclaimer`),wg(),iO(758,`.`),wg(),jc(759,`p`),iO(760,`Exemplo:`),wg(),jc(761,`pre`)(762,`code`),iO(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),wg()()()(),jc(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),iO(768,` hideRemoveAll`),nu(769,`br`),wg()()(),jc(770,`td`,20)(771,`code`,39),iO(772,`boolean`),wg()(),jc(773,`td`,23)(774,`em`)(775,`strong`),iO(776,`(opcional)`),wg()(),jc(777,`p`),iO(778,`Oculta o botão para remover todos os `),jc(779,`em`),iO(780,`disclaimers`),wg(),iO(781,` do grupo.`),wg(),jc(782,`blockquote`)(783,`p`),iO(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),jc(785,`em`),iO(786,`disclaimers`),wg(),iO(787,` com a opção `),jc(788,`code`),iO(789,`hideClose`),wg(),iO(790,` habilitada.`),wg()()()(),jc(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),iO(795,` remove`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,35),iO(799,`Function`),wg()(),jc(800,`td`,23)(801,`em`)(802,`strong`),iO(803,`(opcional)`),wg()(),jc(804,`p`),iO(805,`Função que será disparada quando um `),jc(806,`em`),iO(807,`disclaimer`),wg(),iO(808,` for removido da lista de
`),jc(809,`em`),iO(810,`disclaimers`),wg(),iO(811,` pelo usuário.`),wg(),jc(812,`p`),iO(813,`Recebe como parâmetro um objeto conforme a interface `),jc(814,`code`),iO(815,`PoDisclaimerGroupRemoveAction`),wg(),iO(816,`.`),wg()()(),jc(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),iO(821,` removeAll`),nu(822,`br`),wg()()(),jc(823,`td`,20)(824,`code`,35),iO(825,`Function`),wg()(),jc(826,`td`,23)(827,`em`)(828,`strong`),iO(829,`(opcional)`),wg()(),jc(830,`p`),iO(831,`Função que será disparada quando todos os `),jc(832,`em`),iO(833,`disclaimers`),wg(),iO(834,` forem removidos da lista de `),jc(835,`em`),iO(836,`disclaimers`),wg(),iO(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),wg(),jc(838,`p`),iO(839,`Recebe como parâmetro uma lista contendo todos os `),jc(840,`code`),iO(841,`disclaimers`),wg(),iO(842,` removidos.`),wg()()(),jc(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),iO(847,` title`),nu(848,`br`),wg()()(),jc(849,`td`,20)(850,`code`,25),iO(851,`string`),wg()(),jc(852,`td`,23)(853,`em`)(854,`strong`),iO(855,`(opcional)`),wg()(),jc(856,`p`),iO(857,`Título do grupo de `),jc(858,`em`),iO(859,`disclaimers`),wg(),iO(860,`.`),wg()()()(),jc(861,`h4`,34)(862,`code`,5),iO(863,`PoPageAction`),wg()(),jc(864,`div`,2)(865,`p`),iO(866,`Interface para as ações dos componentes `),jc(867,`code`),iO(868,`po-page-default`),wg(),iO(869,` e `),jc(870,`code`),iO(871,`po-page-list`),wg(),iO(872,`.`),wg(),jc(873,`p`),iO(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),jc(875,`em`),iO(876,`dropdown`),wg(),iO(877,`,
conforme o `),jc(878,`code`),iO(879,`PoPageActionsLayout`),wg(),iO(880,` e o tamanho da tela.`),wg(),jc(881,`blockquote`)(882,`p`),iO(883,`As propriedades `),jc(884,`code`),iO(885,`separator`),wg(),iO(886,`, `),jc(887,`code`),iO(888,`selected`),wg(),iO(889,` e `),jc(890,`code`),iO(891,`subItems`),wg(),iO(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),jc(893,`em`),iO(894,`dropdown`),wg(),iO(895,`.`),wg()()(),jc(896,`h4`,12),iO(897,`Propriedades`),wg(),jc(898,`table`,13)(899,`tr`,14)(900,`th`,15),iO(901,`Nome`),wg(),jc(902,`th`,15),iO(903,`Tipo`),wg(),jc(904,`th`,15),iO(905,`Descrição`),wg()(),jc(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),iO(910,` action`),nu(911,`br`),wg()()(),jc(912,`td`,20)(913,`code`,35),iO(914,`Function`),wg()(),jc(915,`td`,23)(916,`em`)(917,`strong`),iO(918,`(opcional)`),wg()(),jc(919,`p`),iO(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(921,`p`),iO(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(923,`code`),iO(924,`subItems`),wg(),iO(925,`.`),wg(),jc(926,`blockquote`)(927,`p`),iO(928,`Para que a função seja executada no contexto do componente, utilize `),jc(929,`em`),iO(930,`bind`),wg(),iO(931,`:
`),jc(932,`code`),iO(933,`action: this.myFunction.bind(this)`),wg()()()()(),jc(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),iO(938,` disabled`),nu(939,`br`),wg()()(),jc(940,`td`,20)(941,`code`,39),iO(942,`boolean `),wg(),jc(943,`code`,35),iO(944,` Function`),wg()(),jc(945,`td`,23)(946,`em`)(947,`strong`),iO(948,`(opcional)`),wg()(),jc(949,`p`),iO(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),iO(955,` icon`),nu(956,`br`),wg()()(),jc(957,`td`,20)(958,`code`,25),iO(959,`string `),wg(),jc(960,`code`,43),iO(961,` TemplateRef<void>`),wg()(),jc(962,`td`,23)(963,`em`)(964,`strong`),iO(965,`(opcional)`),wg()(),jc(966,`p`),iO(967,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(968,`p`),iO(969,`Aceita ícones da `),jc(970,`a`,6),iO(971,`Biblioteca de ícones`),wg(),iO(972,`, fontes externas (ex: Font Awesome)
ou um `),jc(973,`code`),iO(974,`TemplateRef`),wg(),iO(975,` para ícones customizados.`),wg(),jc(976,`pre`)(977,`code`),iO(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),iO(983,` kind`),nu(984,`br`),wg()()(),jc(985,`td`,20)(986,`code`,25),iO(987,`string`),wg()(),jc(988,`td`,23)(989,`em`)(990,`strong`),iO(991,`(opcional)`),wg()(),jc(992,`p`),iO(993,`Define o estilo visual da ação quando exibida como botão fora do `),jc(994,`em`),iO(995,`dropdown`),wg(),iO(996,`.`),wg(),jc(997,`p`),iO(998,`Valores permitidos:`),wg(),jc(999,`ul`)(1e3,`li`)(1001,`code`),iO(1002,`primary`),wg(),iO(1003,`: botão com maior destaque visual.`),wg(),jc(1004,`li`)(1005,`code`),iO(1006,`secondary`),wg(),iO(1007,`: estilo padrão.`),wg()(),jc(1008,`blockquote`)(1009,`p`),iO(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),wg()(),jc(1011,`blockquote`)(1012,`p`),iO(1013,`Somente uma ação pode ter `),jc(1014,`code`),iO(1015,`kind`),wg(),iO(1016,` igual a `),jc(1017,`code`),iO(1018,`primary`),wg(),iO(1019,`. Caso mais de uma defina `),jc(1020,`code`),iO(1021,`primary`),wg(),iO(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),jc(1023,`code`),iO(1024,`secondary`),wg(),iO(1025,`.`),wg()(),jc(1026,`blockquote`)(1027,`p`),iO(1028,`Quando não definido, o estilo é determinado pelo `),jc(1029,`code`),iO(1030,`PoPageActionsLayout`),wg(),iO(1031,`.`),wg()()()(),jc(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),iO(1036,` label`),nu(1037,`br`),wg()()(),jc(1038,`td`,20)(1039,`code`,25),iO(1040,`string`),wg()(),jc(1041,`td`,23)(1042,`p`),iO(1043,`Rótulo da ação.`),wg(),jc(1044,`p`),iO(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(1046,`code`),iO(1047,`subItems`),wg(),iO(1048,`.`),wg()()(),jc(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),iO(1053,` selected`),nu(1054,`br`),wg()()(),jc(1055,`td`,20)(1056,`code`,39),iO(1057,`boolean`),wg()(),jc(1058,`td`,23)(1059,`em`)(1060,`strong`),iO(1061,`(opcional)`),wg()(),jc(1062,`p`),iO(1063,`Define se a ação está selecionada.`),wg()()(),jc(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),iO(1068,` separator`),nu(1069,`br`),wg()()(),jc(1070,`td`,20)(1071,`code`,39),iO(1072,`boolean`),wg()(),jc(1073,`td`,23)(1074,`em`)(1075,`strong`),iO(1076,`(opcional)`),wg()(),jc(1077,`p`),iO(1078,`Atribui uma linha separadora acima do item.`),wg()()(),jc(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),iO(1083,` subItems`),nu(1084,`br`),wg()()(),jc(1085,`td`,20)(1086,`code`,44),iO(1087,`Array<PoPopupAction>`),wg()(),jc(1088,`td`,23)(1089,`em`)(1090,`strong`),iO(1091,`(opcional)`),wg()(),jc(1092,`p`),iO(1093,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(1094,`pre`)(1095,`code`),iO(1096,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(1097,`p`),iO(1098,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(1099,`blockquote`)(1100,`p`),iO(1101,`As propriedades `),jc(1102,`code`),iO(1103,`disabled`),wg(),iO(1104,`, `),jc(1105,`code`),iO(1106,`type`),wg(),iO(1107,` e `),jc(1108,`code`),iO(1109,`visible`),wg(),iO(1110,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(1111,`blockquote`)(1112,`p`),iO(1113,`Quando `),jc(1114,`code`),iO(1115,`url`),wg(),iO(1116,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(1117,`blockquote`)(1118,`p`),iO(1119,`Em subníveis aninhados, o `),jc(1120,`code`),iO(1121,`icon`),wg(),iO(1122,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(1123,`tr`,16)(1124,`td`,17)(1125,`div`,18)(1126,`span`,19),iO(1127,` subItemsLazy`),nu(1128,`br`),wg()()(),jc(1129,`td`,20)(1130,`code`,45),iO(1131,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(1132,`td`,23)(1133,`em`)(1134,`strong`),iO(1135,`(opcional)`),wg()(),jc(1136,`p`),iO(1137,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(1138,`p`),iO(1139,`Recebe o item agrupador e retorna um `),jc(1140,`code`),iO(1141,`Observable<Array<PoPopupAction>>`),wg(),iO(1142,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(1143,`strong`),iO(1144,`apenas`),wg(),iO(1145,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(1146,`code`),iO(1147,`po-skeleton`),wg(),iO(1148,`
enquanto os dados s\xE3o carregados:`),wg(),jc(1149,`pre`)(1150,`code`),iO(1151,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(1152,`blockquote`)(1153,`p`),iO(1154,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(1155,`p`),iO(1156,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(1157,`tr`,16)(1158,`td`,17)(1159,`div`,18)(1160,`span`,19),iO(1161,` type`),nu(1162,`br`),wg()()(),jc(1163,`td`,20)(1164,`code`,25),iO(1165,`string`),wg()(),jc(1166,`td`,23)(1167,`em`)(1168,`strong`),iO(1169,`(opcional)`),wg()(),jc(1170,`p`),iO(1171,`Define a cor do item.`),wg(),jc(1172,`p`),iO(1173,`Valores válidos:`),wg(),jc(1174,`ul`)(1175,`li`)(1176,`code`),iO(1177,`default`),wg()(),jc(1178,`li`)(1179,`code`),iO(1180,`danger`),wg()()()()(),jc(1181,`tr`,16)(1182,`td`,17)(1183,`div`,18)(1184,`span`,19),iO(1185,` url`),nu(1186,`br`),wg()()(),jc(1187,`td`,20)(1188,`code`,25),iO(1189,`string`),wg()(),jc(1190,`td`,23)(1191,`em`)(1192,`strong`),iO(1193,`(opcional)`),wg()(),jc(1194,`p`),iO(1195,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(1196,`p`),iO(1197,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(1198,`code`),iO(1199,`url`),wg(),iO(1200,` é informada em um agrupador, o clique `),jc(1201,`strong`),iO(1202,`não abrirá os subitens`),wg(),iO(1203,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(1204,`blockquote`)(1205,`p`),iO(1206,`Quando informada, tem prioridade sobre a propriedade `),jc(1207,`code`),iO(1208,`action`),wg(),iO(1209,`.`),wg()()()(),jc(1210,`tr`,16)(1211,`td`,17)(1212,`div`,18)(1213,`span`,19),iO(1214,` visible`),nu(1215,`br`),wg()()(),jc(1216,`td`,20)(1217,`code`,39),iO(1218,`boolean `),wg(),jc(1219,`code`,35),iO(1220,` Function`),wg()(),jc(1221,`td`,23)(1222,`em`)(1223,`strong`),iO(1224,`(opcional)`),wg()(),jc(1225,`p`),iO(1226,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(1227,`h4`,34)(1228,`code`,5),iO(1229,`PoPageFilter`),wg()(),jc(1230,`div`,2)(1231,`p`),iO(1232,`Interface para o atributo `),jc(1233,`code`),iO(1234,`filter`),wg(),iO(1235,` do componente `),jc(1236,`code`),iO(1237,`po-page-list`),wg(),iO(1238,`.`),wg()(),jc(1239,`h4`,12),iO(1240,`Propriedades`),wg(),jc(1241,`table`,13)(1242,`tr`,14)(1243,`th`,15),iO(1244,`Nome`),wg(),jc(1245,`th`,15),iO(1246,`Tipo`),wg(),jc(1247,`th`,15),iO(1248,`Descrição`),wg()(),jc(1249,`tr`,16)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),iO(1253,` action`),nu(1254,`br`),wg()()(),jc(1255,`td`,20)(1256,`code`,35),iO(1257,`Function`),wg()(),jc(1258,`td`,23)(1259,`em`)(1260,`strong`),iO(1261,`(opcional)`),wg()(),jc(1262,`p`),iO(1263,`Ação a ser executada.`),wg()()(),jc(1264,`tr`,16)(1265,`td`,17)(1266,`div`,18)(1267,`span`,19),iO(1268,` advancedAction`),nu(1269,`br`),wg()()(),jc(1270,`td`,20)(1271,`code`,35),iO(1272,`Function`),wg()(),jc(1273,`td`,23)(1274,`em`)(1275,`strong`),iO(1276,`(opcional)`),wg()(),jc(1277,`p`),iO(1278,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),jc(1279,`em`),iO(1280,`click`),wg(),iO(1281,` através do rótulo `),jc(1282,`strong`),iO(1283,`Busca Avançada`),wg(),iO(1284,`.`),wg()()(),jc(1285,`tr`,16)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),iO(1289,` placeholder`),nu(1290,`br`),wg()()(),jc(1291,`td`,20)(1292,`code`,25),iO(1293,`string`),wg()(),jc(1294,`td`,23)(1295,`em`)(1296,`strong`),iO(1297,`(opcional)`),wg()(),jc(1298,`p`),iO(1299,`Texto de instrução exibido dentro do campo de filtro.`),wg()()(),jc(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),iO(1304,` width`),nu(1305,`br`),wg()()(),jc(1306,`td`,20)(1307,`code`,46),iO(1308,`number`),wg()(),jc(1309,`td`,23)(1310,`em`)(1311,`strong`),iO(1312,`(opcional)`),wg()(),jc(1313,`p`),iO(1314,`Tamanho do filtro em tela, utilizando o `),jc(1315,`em`),iO(1316,`Grid System`),wg(),iO(1317,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),wg()()()(),jc(1318,`h4`,34)(1319,`code`,5),iO(1320,`PoPageListLiterals`),wg()(),jc(1321,`div`,2)(1322,`p`),iO(1323,`Interface para definição das literais usadas no `),jc(1324,`code`),iO(1325,`po-page-list`),wg(),iO(1326,`.`),wg()(),jc(1327,`h4`,12),iO(1328,`Propriedades`),wg(),jc(1329,`table`,13)(1330,`tr`,14)(1331,`th`,15),iO(1332,`Nome`),wg(),jc(1333,`th`,15),iO(1334,`Tipo`),wg(),jc(1335,`th`,15),iO(1336,`Descrição`),wg()(),jc(1337,`tr`,16)(1338,`td`,17)(1339,`div`,18)(1340,`span`,19),iO(1341,` otherActions`),nu(1342,`br`),wg()()(),jc(1343,`td`,20)(1344,`code`,25),iO(1345,`string`),wg()(),jc(1346,`td`,23)(1347,`em`)(1348,`strong`),iO(1349,`(opcional)`),wg()(),jc(1350,`p`),iO(1351,`Legenda do `),jc(1352,`code`),iO(1353,`po-dropdown`),wg(),iO(1354,` de ações.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return s})();var Ie=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(b(ir),b(Sn))};static ɵcmp=Zn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-page-list-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-page-list-basic-view`)(6,`sample-po-page-list-labs-view`)(7,`sample-po-page-list-hiring-processes-view`),wg()()()),r&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,Ee,fe,xe,ve],encapsulation:2,changeDetection:1})}return s})()}];var ye=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=pe({type:s});static ɵinj=ue({imports:[C1.forChild(Ie),C1]})}return s})();var vt=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=pe({type:s});static ɵinj=ue({imports:[Ta,ye]})}return s})();export{vt as DocPoPageListModule};