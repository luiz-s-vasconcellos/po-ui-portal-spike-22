import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_r as Ml,ar as IY,at as N8e,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,dn as oU,ea as p0,ga as w,hi as bb,ir as I,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f,xn as sP}from"./main-NT5YGKBQ.js";var be=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&ql(0,`po-page-list`,0)},dependencies:[N8e],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s});var Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page List Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-list-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return s})();var Se=(()=>{class s{poNotification=f(Eu);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=Vx();Ml(0,`po-page-list`,6),ql(1,`po-divider`)(2,`po-info`,7),lg(),ql(3,`po-divider`),Ml(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action.action,a)||(n.action.action=a),Jy(a)}),lg(),f0(),Ml(8,`po-input`,10),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action.label,a)||(n.action.label=a),Jy(a)}),lg(),f0(),Ml(9,`po-input`,11),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action.url,a)||(n.action.url=a),Jy(a)}),lg(),f0(),Ml(10,`po-select`,12),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action.type,a)||(n.action.type=a),Jy(a)}),lg(),f0(),Ml(11,`po-select`,13),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action.icon,a)||(n.action.icon=a),Jy(a)}),lg(),f0(),Ml(12,`po-checkbox-group`,14),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.action,a)||(n.action=a),Jy(a)}),lg(),f0(),lg(),Ml(13,`div`,8)(14,`po-button`,15),ht(`p-click`,function(){return n.addAction(n.action)}),lg()()(),ql(15,`po-divider`),Ml(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Jy(a)}),lg(),f0(),lg()(),Ml(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Jy(a)}),lg(),f0(),Ml(24,`po-input`,18),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Jy(a)}),lg(),f0(),lg(),Ml(25,`div`,8)(26,`po-button`,19),ht(`p-click`,function(){return n.addBreadcrumbItem()}),lg()()(),ql(27,`po-divider`),Ml(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Jy(a)}),lg(),f0(),Ml(32,`po-input`,21),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Jy(a)}),lg(),f0(),lg(),Ml(33,`div`,8)(34,`po-button`,22),ht(`p-click`,function(){return n.addBreadcrumbParam()}),lg()()(),ql(35,`po-divider`),Ml(36,`div`,8)(37,`po-input`,23),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Jy(a)}),ht(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),lg(),f0(),Ml(38,`po-switch`,24),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Jy(a)}),ht(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),lg(),f0(),lg(),Ml(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Jy(a)}),lg(),f0(),Ml(43,`po-input`,26),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Jy(a)}),lg(),f0(),lg(),Ml(44,`div`,8)(45,`po-input`,27),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerValue,a)||(n.disclaimerValue=a),Jy(a)}),lg(),f0(),Ml(46,`po-switch`,28),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Jy(a)}),lg(),f0(),lg(),Ml(47,`div`,8)(48,`po-button`,29),ht(`p-click`,function(){return n.addDisclaimer()}),lg()()(),ql(49,`po-divider`),Ml(50,`form`,null,5)(52,`po-input`,30),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.title,a)||(n.title=a),Jy(a)}),lg(),f0(),Ml(53,`po-input`,31),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.subtitle,a)||(n.subtitle=a),Jy(a)}),lg(),f0(),Ml(54,`po-input`,32),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.filter.placeholder,a)||(n.filter.placeholder=a),Jy(a)}),lg(),f0(),Ml(55,`po-input`,33),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.filter.width,a)||(n.filter.width=a),Jy(a)}),lg(),f0(),Ml(56,`po-input`,34),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.literals,a)||(n.literals=a),Jy(a)}),ht(`p-change`,function(){return n.changeLiterals()}),lg(),f0(),Ml(57,`po-radio-group`,35),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.componentsSize,a)||(n.componentsSize=a),Jy(a)}),lg(),f0(),Ml(58,`div`,8)(59,`po-button`,36),ht(`p-click`,function(){return n.restore()}),lg()()()}if(r&2){let d=Yx(5),p=Yx(21),a=Yx(29),Le=Yx(40);cw(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Up(2),cw(`p-value`,n.filterModel),Up(5),Tw(`ngModel`,n.action.action),p0(),Up(),Tw(`ngModel`,n.action.label),p0(),Up(),Tw(`ngModel`,n.action.url),p0(),Up(),Tw(`ngModel`,n.action.type),cw(`p-options`,n.typeOptions),p0(),Up(),Tw(`ngModel`,n.action.icon),cw(`p-options`,n.iconOptions),p0(),Up(),Tw(`ngModel`,n.action),cw(`p-options`,n.actionOptions),p0(),Up(2),cw(`p-disabled`,d.form.invalid),Up(5),Tw(`ngModel`,n.breadcrumb.favorite),p0(),Up(4),Tw(`ngModel`,n.breadcrumbItem.label),p0(),Up(),Tw(`ngModel`,n.breadcrumbItem.link),p0(),Up(2),cw(`p-disabled`,p.invalid),Up(5),Tw(`ngModel`,n.breadcrumbParams.property),p0(),Up(),Tw(`ngModel`,n.breadcrumbParams.value),p0(),Up(2),cw(`p-disabled`,a.invalid),Up(3),Tw(`ngModel`,n.disclaimerGroupTitle),p0(),Up(),Tw(`ngModel`,n.disclaimerGroupHideRemoveAll),p0(),Up(4),Tw(`ngModel`,n.disclaimerLabel),p0(),Up(),Tw(`ngModel`,n.disclaimerProperty),p0(),Up(2),Tw(`ngModel`,n.disclaimerValue),p0(),Up(),Tw(`ngModel`,n.disclaimerHideClose),p0(),Up(2),cw(`p-disabled`,Le.invalid),Up(4),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.subtitle),p0(),Up(),Tw(`ngModel`,n.filter.placeholder),p0(),Up(),Tw(`ngModel`,n.filter.width),p0(),Up(),Tw(`ngModel`,n.literals),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0()}},dependencies:[IY,bb,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,Tbe,J4,kbe,N8e],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s});var fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page List Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-list
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-list-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return s})();var K=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=I({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var ke=[`advancedFilterModal`];var Be=[`poPageList`];var Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Eu);poDialog=f(e_e);router=f(Cn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`);break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Zl(ke,7)(Be,7),r&2){let d;lo(d=uo())&&(n.advancedFilterModal=d.first),lo(d=uo())&&(n.poPageList=d.first)}},standalone:!1,features:[Ce([K])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=Vx();Ml(0,`po-page-list`,3,0),ql(2,`po-table`,4),lg(),Ml(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.jobDescription,a)||(n.jobDescription=a),Jy(a)}),lg(),f0(),Ml(8,`po-checkbox-group`,7),Mw(`ngModelChange`,function(a){return Qy(d),yN(n.status,a)||(n.status=a),Jy(a)}),lg(),f0(),lg()()}r&2&&(cw(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),Up(2),cw(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),Up(),cw(`p-primary-action`,n.advancedFilterPrimaryAction),Up(4),Tw(`ngModel`,n.jobDescription),cw(`p-options`,n.jobDescriptionOptions),p0(),Up(),Tw(`ngModel`,n.status),cw(`p-options`,n.statusOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,G4,sP,vr,N8e,oU],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s});var xe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page List - Hiring Processes`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-list
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-page-list-hiring-processes`),lg(),ql(27,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,je,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Pe],encapsulation:2,changeDetection:1})}return s})();var ve=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1318,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ml(7,`code`),mN(8,`po-page-default`),lg(),mN(9,`, `),Ml(10,`code`),mN(11,`po-page-detail`),lg(),mN(12,`,
`),Ml(13,`code`),mN(14,`po-page-edit`),lg(),mN(15,`, `),Ml(16,`code`),mN(17,`po-page-list`),lg(),mN(18,` e `),Ml(19,`code`),mN(20,`po-page-slide`),lg(),mN(21,`.`),lg()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoPageListComponent`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,`O componente `),Ml(30,`code`),mN(31,`po-page-list`),lg(),mN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),lg(),Ml(33,`p`),mN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Ml(35,`em`),mN(36,`click`),lg(),mN(37,` do ícone `),Ml(38,`a`,6),mN(39,`an-magnifying-glass`),lg(),mN(40,`
quanto ao pressionar da tecla `),Ml(41,`em`),mN(42,`ENTER`),lg(),mN(43,` quando o foco estiver no campo de pesquisa.`),lg(),Ml(44,`p`),mN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Ml(46,`a`,7)(47,`code`),mN(48,`po-disclaimer-group`),lg()(),mN(49,`.`),lg(),Ml(50,`h4`),mN(51,`Tokens customizáveis`),lg(),Ml(52,`blockquote`)(53,`p`),mN(54,`Para maiores informações, acesse o guia `),Ml(55,`a`,8),mN(56,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(57,`.`),lg()(),Ml(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),mN(62,`Propriedade`),lg(),Ml(63,`th`),mN(64,`Descrição`),lg(),Ml(65,`th`),mN(66,`Valor Padrão`),lg()()(),Ml(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),mN(71,`Header`),lg()(),ql(72,`td`)(73,`td`),lg(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--padding`),lg()(),Ml(78,`td`),mN(79,`Espaçamento do header`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--gap`),lg()(),Ml(87,`td`),mN(88,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--spacing-md)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--gap-actions`),lg()(),Ml(96,`td`),mN(97,`Espaçamento entre as ações`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--spacing-xs)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--font-family`),lg()(),Ml(105,`td`),mN(106,`Família tipográfica do título`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--font-family-theme)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`strong`),mN(113,`Content`),lg()(),ql(114,`td`)(115,`td`),lg(),Ml(116,`tr`)(117,`td`)(118,`code`),mN(119,`--padding-content`),lg()(),Ml(120,`td`),mN(121,`Espaçamento do conteúdo`),lg(),Ml(122,`td`)(123,`code`),mN(124,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(125,`div`,9)(126,`h4`,10),mN(127,`Seletor`),lg(),Ml(128,`pre`,11),mN(129,`<po-page-list
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
`),lg()(),Ml(130,`h4`,12),mN(131,`Propriedades`),lg(),Ml(132,`table`,13)(133,`tr`,14)(134,`th`,15),mN(135,`Nome`),lg(),Ml(136,`th`,15),mN(137,`Tipo`),lg(),Ml(138,`th`,15),mN(139,`Padrão`),lg(),Ml(140,`th`,15),mN(141,`Descrição`),lg()(),Ml(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),mN(146,` p-actions`),ql(147,`br`),lg()()(),Ml(148,`td`,20)(149,`code`,21),mN(150,`Array<PoPageAction>`),lg()(),Ml(151,`td`,22),mN(152,`-`),lg(),Ml(153,`td`,23)(154,`em`)(155,`strong`),mN(156,`(opcional)`),lg()(),Ml(157,`p`),mN(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Ml(159,`code`),mN(160,`PoPageAction`),lg(),mN(161,`.`),lg()()(),Ml(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),mN(166,` p-breadcrumb`),ql(167,`br`),lg()()(),Ml(168,`td`,20)(169,`code`,24),mN(170,`PoBreadcrumb`),lg()(),Ml(171,`td`,22),mN(172,`-`),lg(),Ml(173,`td`,23)(174,`em`)(175,`strong`),mN(176,`(opcional)`),lg()(),Ml(177,`p`),mN(178,`Objeto que implementa as propriedades da interface `),Ml(179,`code`),mN(180,`PoBreadcrumb`),lg(),mN(181,`.`),lg()()(),Ml(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),mN(186,` p-components-size`),ql(187,`br`),lg()()(),Ml(188,`td`,20)(189,`code`,25),mN(190,`string`),lg()(),Ml(191,`td`,22)(192,`p`)(193,`code`),mN(194,`medium`),lg()()(),Ml(195,`td`,23)(196,`em`)(197,`strong`),mN(198,`(opcional)`),lg()(),Ml(199,`p`),mN(200,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(201,`ul`)(202,`li`)(203,`code`),mN(204,`small`),lg(),mN(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(206,`li`)(207,`code`),mN(208,`medium`),lg(),mN(209,`: aplica a medida medium de cada componente.`),lg()(),Ml(210,`blockquote`)(211,`p`),mN(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(213,`code`),mN(214,`medium`),lg(),mN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(216,`a`,26),mN(217,`po-theme`),lg(),mN(218,`.`),lg()()()(),Ml(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),mN(223,` p-disclaimer-group`),ql(224,`br`),lg()()(),Ml(225,`td`,20)(226,`code`,27),mN(227,`PoDisclaimerGroup`),lg()(),Ml(228,`td`,22),mN(229,`-`),lg(),Ml(230,`td`,23)(231,`em`)(232,`strong`),mN(233,`(opcional)`),lg()(),Ml(234,`p`),mN(235,`Objeto que implementa as propriedades da interface `),Ml(236,`code`),mN(237,`PoDisclaimerGroup`),lg(),mN(238,`.`),lg()()(),Ml(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),mN(243,` p-filter`),ql(244,`br`),lg()()(),Ml(245,`td`,20)(246,`code`,28),mN(247,`PoPageFilter`),lg()(),Ml(248,`td`,22),mN(249,`-`),lg(),Ml(250,`td`,23)(251,`p`),mN(252,`Objeto que implementa as propriedades da interface `),Ml(253,`code`),mN(254,`PoPageFilter`),lg(),mN(255,`.`),lg()()(),Ml(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),mN(260,` p-literals`),ql(261,`br`),lg()()(),Ml(262,`td`,20)(263,`code`,29),mN(264,`PoPageListLiterals`),lg()(),Ml(265,`td`,22),mN(266,`-`),lg(),Ml(267,`td`,23)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Objeto com as literais usadas no `),Ml(273,`code`),mN(274,`po-page-list`),lg(),mN(275,`.`),lg(),Ml(276,`p`),mN(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(278,`pre`)(279,`code`),mN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),lg()(),Ml(281,`p`),mN(282,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(283,`pre`)(284,`code`),mN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),lg()(),Ml(286,`p`),mN(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(288,`pre`)(289,`code`),mN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),lg()(),Ml(291,`blockquote`)(292,`p`),mN(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ml(294,`a`,30)(295,`code`),mN(296,`PoI18nService`),lg()(),mN(297,` ou `),Ml(298,`em`),mN(299,`browser`),lg(),mN(300,`.`),lg()()()(),Ml(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),mN(305,` p-quick-search-value`),ql(306,`br`),lg()()(),Ml(307,`td`,20)(308,`code`,25),mN(309,`string`),lg()(),Ml(310,`td`,22),mN(311,`-`),lg(),Ml(312,`td`,23)(313,`em`)(314,`strong`),mN(315,`(opcional)`),lg()(),Ml(316,`p`),mN(317,`Valor padrão na busca rápida ao inicializar o componente`),lg()()(),Ml(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),mN(322,` p-subtitle`),ql(323,`br`),lg()()(),Ml(324,`td`,20)(325,`code`,25),mN(326,`string`),lg()(),Ml(327,`td`,22),mN(328,`-`),lg(),Ml(329,`td`,23)(330,`em`)(331,`strong`),mN(332,`(opcional)`),lg()(),Ml(333,`p`),mN(334,`Subtitulo do Header da página.`),lg(),Ml(335,`p`),mN(336,`Suporta formatação básica com as tags `),Ml(337,`code`),mN(338,`<b>`),lg(),mN(339,` (negrito), `),Ml(340,`code`),mN(341,`<strong>`),lg(),mN(342,` (negrito), `),Ml(343,`code`),mN(344,`<i>`),lg(),mN(345,` (itálico), `),Ml(346,`code`),mN(347,`<em>`),lg(),mN(348,` (it\xE1lico) e
`),Ml(349,`code`),mN(350,`<u>`),lg(),mN(351,` (sublinhado).`),lg(),Ml(352,`p`),mN(353,`Exemplo:`),lg(),Ml(354,`pre`)(355,`code`,31),mN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),lg()(),Ml(357,`blockquote`)(358,`p`),mN(359,`Requer que `),Ml(360,`code`),mN(361,`p-title`),lg(),mN(362,` esteja definido.`),lg()()()(),Ml(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),mN(367,` p-title`),ql(368,`br`),lg()()(),Ml(369,`td`,20)(370,`code`,25),mN(371,`string`),lg()(),Ml(372,`td`,22),mN(373,`-`),lg(),Ml(374,`td`,23)(375,`p`),mN(376,`Título da página.`),lg()()()(),Ml(377,`h3`,12),mN(378,`Métodos`),lg(),Ml(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),mN(385,` clearInputSearch `),lg()()()()(),Ml(386,`tr`,23)(387,`td`,23)(388,`p`),mN(389,`Limpa o campo de pesquisa.`),lg()()()(),ql(390,`br`),Ml(391,`h3`),mN(392,`Interfaces`),lg(),Ml(393,`h4`,34)(394,`code`,5),mN(395,`PoBreadcrumbItem`),lg()(),Ml(396,`div`,2)(397,`p`),mN(398,`Interface que define cada item do componente `),Ml(399,`strong`),mN(400,`po-breadcrumb`),lg(),mN(401,`.`),lg()(),Ml(402,`h4`,12),mN(403,`Propriedades`),lg(),Ml(404,`table`,13)(405,`tr`,14)(406,`th`,15),mN(407,`Nome`),lg(),Ml(408,`th`,15),mN(409,`Tipo`),lg(),Ml(410,`th`,15),mN(411,`Descrição`),lg()(),Ml(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),mN(416,` action`),ql(417,`br`),lg()()(),Ml(418,`td`,20)(419,`code`,35),mN(420,`Function`),lg()(),Ml(421,`td`,23)(422,`em`)(423,`strong`),mN(424,`(opcional)`),lg()(),Ml(425,`p`),mN(426,`Ação executada ao clicar no item.`),lg(),Ml(427,`blockquote`)(428,`p`),mN(429,`A função atribuída a esta propriedade receberá o `),Ml(430,`em`),mN(431,`label`),lg(),mN(432,` do item como parâmetro para execução.`),lg()()()(),Ml(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),mN(437,` label`),ql(438,`br`),lg()()(),Ml(439,`td`,20)(440,`code`,25),mN(441,`string`),lg()(),Ml(442,`td`,23)(443,`p`),mN(444,`Rótulo do item.`),lg()()(),Ml(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),mN(449,` link`),ql(450,`br`),lg()()(),Ml(451,`td`,20)(452,`code`,25),mN(453,`string`),lg()(),Ml(454,`td`,23)(455,`em`)(456,`strong`),mN(457,`(opcional)`),lg()(),Ml(458,`p`),mN(459,`Url do item.`),lg(),Ml(460,`blockquote`)(461,`p`),mN(462,`Caso o item também contenha uma `),Ml(463,`em`),mN(464,`action`),lg(),mN(465,` definida, a preferência de execução será do `),Ml(466,`em`),mN(467,`link`),lg(),mN(468,`.`),lg()(),Ml(469,`blockquote`)(470,`p`),mN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ml(472,`strong`)(473,`a`,36),mN(474,`Veja um exemplo de como criar rotas aqui`),lg()(),mN(475,`.`),lg()(),Ml(476,`blockquote`)(477,`p`),mN(478,`Esta propriedade é necessária para que a propriedade `),Ml(479,`code`),mN(480,`p-favorite-service`),lg(),mN(481,` consiga favoritar ou desfavoritar.`),lg()()()()(),Ml(482,`h4`,34)(483,`code`,5),mN(484,`PoBreadcrumb`),lg()(),Ml(485,`div`,2)(486,`p`),mN(487,`Interface que define o `),Ml(488,`code`),mN(489,`po-breadcrumb`),lg(),mN(490,`.`),lg()(),Ml(491,`h4`,12),mN(492,`Propriedades`),lg(),Ml(493,`table`,13)(494,`tr`,14)(495,`th`,15),mN(496,`Nome`),lg(),Ml(497,`th`,15),mN(498,`Tipo`),lg(),Ml(499,`th`,15),mN(500,`Descrição`),lg()(),Ml(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),mN(505,` favorite`),ql(506,`br`),lg()()(),Ml(507,`td`,20)(508,`code`,25),mN(509,`string`),lg()(),Ml(510,`td`,23)(511,`em`)(512,`strong`),mN(513,`(opcional)`),lg()(),Ml(514,`p`),mN(515,`Permite definir uma URL para favoritar ou desfavoritar.`),lg(),Ml(516,`blockquote`)(517,`p`),mN(518,`Para maiores informações verificar a propriedade `),Ml(519,`code`),mN(520,`p-favorite-service`),lg(),mN(521,` do componente `),Ml(522,`code`),mN(523,`po-breadcrumb`),lg(),mN(524,`.`),lg()()()(),Ml(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),mN(529,` items`),ql(530,`br`),lg()()(),Ml(531,`td`,20)(532,`code`,37),mN(533,`Array<PoBreadcrumbItem>`),lg()(),Ml(534,`td`,23)(535,`p`),mN(536,`Lista de itens do `),Ml(537,`em`),mN(538,`breadcrumb`),lg(),mN(539,`.`),lg(),Ml(540,`p`)(541,`strong`),mN(542,`Exemplo:`),lg()(),Ml(543,`pre`)(544,`code`),mN(545,`{ label: 'Po Portal', link: 'portal' }
`),lg()()()(),Ml(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),mN(550,` params`),ql(551,`br`),lg()()(),Ml(552,`td`,20)(553,`code`,38),mN(554,`object`),lg()(),Ml(555,`td`,23)(556,`em`)(557,`strong`),mN(558,`(opcional)`),lg()(),Ml(559,`p`),mN(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),lg()()()(),Ml(561,`h4`,34)(562,`code`,5),mN(563,`PoDisclaimer`),lg()(),Ml(564,`div`,2)(565,`p`),mN(566,`Interface que representa o objeto `),Ml(567,`code`),mN(568,`po-disclaimer`),lg(),mN(569,`.`),lg()(),Ml(570,`h4`,12),mN(571,`Propriedades`),lg(),Ml(572,`table`,13)(573,`tr`,14)(574,`th`,15),mN(575,`Nome`),lg(),Ml(576,`th`,15),mN(577,`Tipo`),lg(),Ml(578,`th`,15),mN(579,`Descrição`),lg()(),Ml(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),mN(584,` hideClose`),ql(585,`br`),lg()()(),Ml(586,`td`,20)(587,`code`,39),mN(588,`boolean`),lg()(),Ml(589,`td`,23)(590,`em`)(591,`strong`),mN(592,`(opcional)`),lg()(),Ml(593,`p`),mN(594,`Se verdadeiro, oculta o botão para fechar o `),Ml(595,`em`),mN(596,`disclaimer`),lg(),mN(597,`.`),lg()()(),Ml(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),mN(602,` label`),ql(603,`br`),lg()()(),Ml(604,`td`,20)(605,`code`,25),mN(606,`string`),lg()(),Ml(607,`td`,23)(608,`em`)(609,`strong`),mN(610,`(opcional)`),lg()(),Ml(611,`p`),mN(612,`Texto de exibição do objeto.`),lg()()(),Ml(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),mN(617,` property`),ql(618,`br`),lg()()(),Ml(619,`td`,20)(620,`code`,25),mN(621,`string`),lg()(),Ml(622,`td`,23)(623,`em`)(624,`strong`),mN(625,`(opcional)`),lg()(),Ml(626,`p`),mN(627,`Nome da propriedade vinculada ao objeto `),Ml(628,`em`),mN(629,`disclaimer`),lg(),mN(630,`.`),lg()()(),Ml(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),mN(635,` value`),ql(636,`br`),lg()()(),Ml(637,`td`,20)(638,`code`,40),mN(639,`any`),lg()(),Ml(640,`td`,23)(641,`p`),mN(642,`Valor do objeto.`),lg()()()(),Ml(643,`h4`,34)(644,`code`,5),mN(645,`PoDisclaimerGroupRemoveAction`),lg()(),Ml(646,`div`,2)(647,`p`),mN(648,`Estrutura do objeto representando o estado dos `),Ml(649,`em`),mN(650,`disclaimers`),lg(),mN(651,` após a remoção.`),lg()(),Ml(652,`h4`,12),mN(653,`Propriedades`),lg(),Ml(654,`table`,13)(655,`tr`,14)(656,`th`,15),mN(657,`Nome`),lg(),Ml(658,`th`,15),mN(659,`Tipo`),lg(),Ml(660,`th`,15),mN(661,`Descrição`),lg()(),Ml(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),mN(666,` currentDisclaimers`),ql(667,`br`),lg()()(),Ml(668,`td`,20)(669,`code`,41),mN(670,`Array<PoDisclaimer>`),lg()(),Ml(671,`td`,23)(672,`p`),mN(673,`Lista com os `),Ml(674,`em`),mN(675,`disclaimers`),lg(),mN(676,` atuais (restantes).`),lg()()(),Ml(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),mN(681,` removedDisclaimer`),ql(682,`br`),lg()()(),Ml(683,`td`,20)(684,`code`,42),mN(685,`PoDisclaimer`),lg()(),Ml(686,`td`,23)(687,`p`)(688,`em`),mN(689,`Disclaimer`),lg(),mN(690,` que foi removido.`),lg()()()(),Ml(691,`h4`,34)(692,`code`,5),mN(693,`PoDisclaimerGroup`),lg()(),Ml(694,`div`,2)(695,`p`),mN(696,`Interface que representa o objeto `),Ml(697,`code`),mN(698,`po-disclaimer-group`),lg(),mN(699,`.`),lg()(),Ml(700,`h4`,12),mN(701,`Propriedades`),lg(),Ml(702,`table`,13)(703,`tr`,14)(704,`th`,15),mN(705,`Nome`),lg(),Ml(706,`th`,15),mN(707,`Tipo`),lg(),Ml(708,`th`,15),mN(709,`Descrição`),lg()(),Ml(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),mN(714,` change`),ql(715,`br`),lg()()(),Ml(716,`td`,20)(717,`code`,35),mN(718,`Function`),lg()(),Ml(719,`td`,23)(720,`em`)(721,`strong`),mN(722,`(opcional)`),lg()(),Ml(723,`p`),mN(724,`Função que será disparada quando a lista de `),Ml(725,`em`),mN(726,`disclaimers`),lg(),mN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Ml(728,`em`),mN(729,`disclaimers`),lg(),mN(730,`.`),lg()()(),Ml(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),mN(735,` disclaimers`),ql(736,`br`),lg()()(),Ml(737,`td`,20)(738,`code`,41),mN(739,`Array<PoDisclaimer>`),lg()(),Ml(740,`td`,23)(741,`p`),mN(742,`Lista de `),Ml(743,`em`),mN(744,`disclaimers`),lg(),mN(745,`.`),lg(),Ml(746,`p`),mN(747,`Exemplo:`),lg(),Ml(748,`pre`)(749,`code`),mN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),lg()(),Ml(751,`p`),mN(752,`Para que a lista de `),Ml(753,`em`),mN(754,`disclaimers`),lg(),mN(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Ml(756,`code`),mN(757,`PoDisclaimer`),lg(),mN(758,`.`),lg(),Ml(759,`p`),mN(760,`Exemplo:`),lg(),Ml(761,`pre`)(762,`code`),mN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),lg()()()(),Ml(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),mN(768,` hideRemoveAll`),ql(769,`br`),lg()()(),Ml(770,`td`,20)(771,`code`,39),mN(772,`boolean`),lg()(),Ml(773,`td`,23)(774,`em`)(775,`strong`),mN(776,`(opcional)`),lg()(),Ml(777,`p`),mN(778,`Oculta o botão para remover todos os `),Ml(779,`em`),mN(780,`disclaimers`),lg(),mN(781,` do grupo.`),lg(),Ml(782,`blockquote`)(783,`p`),mN(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Ml(785,`em`),mN(786,`disclaimers`),lg(),mN(787,` com a opção `),Ml(788,`code`),mN(789,`hideClose`),lg(),mN(790,` habilitada.`),lg()()()(),Ml(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),mN(795,` remove`),ql(796,`br`),lg()()(),Ml(797,`td`,20)(798,`code`,35),mN(799,`Function`),lg()(),Ml(800,`td`,23)(801,`em`)(802,`strong`),mN(803,`(opcional)`),lg()(),Ml(804,`p`),mN(805,`Função que será disparada quando um `),Ml(806,`em`),mN(807,`disclaimer`),lg(),mN(808,` for removido da lista de
`),Ml(809,`em`),mN(810,`disclaimers`),lg(),mN(811,` pelo usuário.`),lg(),Ml(812,`p`),mN(813,`Recebe como parâmetro um objeto conforme a interface `),Ml(814,`code`),mN(815,`PoDisclaimerGroupRemoveAction`),lg(),mN(816,`.`),lg()()(),Ml(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),mN(821,` removeAll`),ql(822,`br`),lg()()(),Ml(823,`td`,20)(824,`code`,35),mN(825,`Function`),lg()(),Ml(826,`td`,23)(827,`em`)(828,`strong`),mN(829,`(opcional)`),lg()(),Ml(830,`p`),mN(831,`Função que será disparada quando todos os `),Ml(832,`em`),mN(833,`disclaimers`),lg(),mN(834,` forem removidos da lista de `),Ml(835,`em`),mN(836,`disclaimers`),lg(),mN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),lg(),Ml(838,`p`),mN(839,`Recebe como parâmetro uma lista contendo todos os `),Ml(840,`code`),mN(841,`disclaimers`),lg(),mN(842,` removidos.`),lg()()(),Ml(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),mN(847,` title`),ql(848,`br`),lg()()(),Ml(849,`td`,20)(850,`code`,25),mN(851,`string`),lg()(),Ml(852,`td`,23)(853,`em`)(854,`strong`),mN(855,`(opcional)`),lg()(),Ml(856,`p`),mN(857,`Título do grupo de `),Ml(858,`em`),mN(859,`disclaimers`),lg(),mN(860,`.`),lg()()()(),Ml(861,`h4`,34)(862,`code`,5),mN(863,`PoPageAction`),lg()(),Ml(864,`div`,2)(865,`p`),mN(866,`Interface para as ações dos componentes `),Ml(867,`code`),mN(868,`po-page-default`),lg(),mN(869,` e `),Ml(870,`code`),mN(871,`po-page-list`),lg(),mN(872,`.`),lg(),Ml(873,`p`),mN(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Ml(875,`em`),mN(876,`dropdown`),lg(),mN(877,`,
conforme o `),Ml(878,`code`),mN(879,`PoPageActionsLayout`),lg(),mN(880,` e o tamanho da tela.`),lg(),Ml(881,`blockquote`)(882,`p`),mN(883,`As propriedades `),Ml(884,`code`),mN(885,`separator`),lg(),mN(886,`, `),Ml(887,`code`),mN(888,`selected`),lg(),mN(889,` e `),Ml(890,`code`),mN(891,`subItems`),lg(),mN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Ml(893,`em`),mN(894,`dropdown`),lg(),mN(895,`.`),lg()()(),Ml(896,`h4`,12),mN(897,`Propriedades`),lg(),Ml(898,`table`,13)(899,`tr`,14)(900,`th`,15),mN(901,`Nome`),lg(),Ml(902,`th`,15),mN(903,`Tipo`),lg(),Ml(904,`th`,15),mN(905,`Descrição`),lg()(),Ml(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),mN(910,` action`),ql(911,`br`),lg()()(),Ml(912,`td`,20)(913,`code`,35),mN(914,`Function`),lg()(),Ml(915,`td`,23)(916,`em`)(917,`strong`),mN(918,`(opcional)`),lg()(),Ml(919,`p`),mN(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(921,`p`),mN(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(923,`code`),mN(924,`subItems`),lg(),mN(925,`.`),lg(),Ml(926,`blockquote`)(927,`p`),mN(928,`Para que a função seja executada no contexto do componente, utilize `),Ml(929,`em`),mN(930,`bind`),lg(),mN(931,`:
`),Ml(932,`code`),mN(933,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),mN(938,` disabled`),ql(939,`br`),lg()()(),Ml(940,`td`,20)(941,`code`,39),mN(942,`boolean `),lg(),Ml(943,`code`,35),mN(944,` Function`),lg()(),Ml(945,`td`,23)(946,`em`)(947,`strong`),mN(948,`(opcional)`),lg()(),Ml(949,`p`),mN(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),mN(955,` icon`),ql(956,`br`),lg()()(),Ml(957,`td`,20)(958,`code`,25),mN(959,`string `),lg(),Ml(960,`code`,43),mN(961,` TemplateRef<void>`),lg()(),Ml(962,`td`,23)(963,`em`)(964,`strong`),mN(965,`(opcional)`),lg()(),Ml(966,`p`),mN(967,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(968,`p`),mN(969,`Aceita ícones da `),Ml(970,`a`,6),mN(971,`Biblioteca de ícones`),lg(),mN(972,`, fontes externas (ex: Font Awesome)
ou um `),Ml(973,`code`),mN(974,`TemplateRef`),lg(),mN(975,` para ícones customizados.`),lg(),Ml(976,`pre`)(977,`code`),mN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),mN(983,` kind`),ql(984,`br`),lg()()(),Ml(985,`td`,20)(986,`code`,25),mN(987,`string`),lg()(),Ml(988,`td`,23)(989,`em`)(990,`strong`),mN(991,`(opcional)`),lg()(),Ml(992,`p`),mN(993,`Define o estilo visual da ação quando exibida como botão fora do `),Ml(994,`em`),mN(995,`dropdown`),lg(),mN(996,`.`),lg(),Ml(997,`p`),mN(998,`Valores permitidos:`),lg(),Ml(999,`ul`)(1e3,`li`)(1001,`code`),mN(1002,`primary`),lg(),mN(1003,`: botão com maior destaque visual.`),lg(),Ml(1004,`li`)(1005,`code`),mN(1006,`secondary`),lg(),mN(1007,`: estilo padrão.`),lg()(),Ml(1008,`blockquote`)(1009,`p`),mN(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),lg()(),Ml(1011,`blockquote`)(1012,`p`),mN(1013,`Somente uma ação pode ter `),Ml(1014,`code`),mN(1015,`kind`),lg(),mN(1016,` igual a `),Ml(1017,`code`),mN(1018,`primary`),lg(),mN(1019,`. Caso mais de uma defina `),Ml(1020,`code`),mN(1021,`primary`),lg(),mN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Ml(1023,`code`),mN(1024,`secondary`),lg(),mN(1025,`.`),lg()(),Ml(1026,`blockquote`)(1027,`p`),mN(1028,`Quando não definido, o estilo é determinado pelo `),Ml(1029,`code`),mN(1030,`PoPageActionsLayout`),lg(),mN(1031,`.`),lg()()()(),Ml(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),mN(1036,` label`),ql(1037,`br`),lg()()(),Ml(1038,`td`,20)(1039,`code`,25),mN(1040,`string`),lg()(),Ml(1041,`td`,23)(1042,`p`),mN(1043,`Rótulo da ação.`),lg(),Ml(1044,`p`),mN(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(1046,`code`),mN(1047,`subItems`),lg(),mN(1048,`.`),lg()()(),Ml(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),mN(1053,` selected`),ql(1054,`br`),lg()()(),Ml(1055,`td`,20)(1056,`code`,39),mN(1057,`boolean`),lg()(),Ml(1058,`td`,23)(1059,`em`)(1060,`strong`),mN(1061,`(opcional)`),lg()(),Ml(1062,`p`),mN(1063,`Define se a ação está selecionada.`),lg()()(),Ml(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),mN(1068,` separator`),ql(1069,`br`),lg()()(),Ml(1070,`td`,20)(1071,`code`,39),mN(1072,`boolean`),lg()(),Ml(1073,`td`,23)(1074,`em`)(1075,`strong`),mN(1076,`(opcional)`),lg()(),Ml(1077,`p`),mN(1078,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),mN(1083,` subItems`),ql(1084,`br`),lg()()(),Ml(1085,`td`,20)(1086,`code`,44),mN(1087,`Array<PoPopupAction>`),lg()(),Ml(1088,`td`,23)(1089,`em`)(1090,`strong`),mN(1091,`(opcional)`),lg()(),Ml(1092,`p`),mN(1093,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(1094,`p`),mN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(1096,`blockquote`)(1097,`p`),mN(1098,`As propriedades `),Ml(1099,`code`),mN(1100,`disabled`),lg(),mN(1101,`, `),Ml(1102,`code`),mN(1103,`type`),lg(),mN(1104,` e `),Ml(1105,`code`),mN(1106,`visible`),lg(),mN(1107,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(1108,`blockquote`)(1109,`p`),mN(1110,`Quando `),Ml(1111,`code`),mN(1112,`url`),lg(),mN(1113,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(1114,`blockquote`)(1115,`p`),mN(1116,`Em subníveis aninhados, o `),Ml(1117,`code`),mN(1118,`icon`),lg(),mN(1119,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(1120,`tr`,16)(1121,`td`,17)(1122,`div`,18)(1123,`span`,19),mN(1124,` type`),ql(1125,`br`),lg()()(),Ml(1126,`td`,20)(1127,`code`,25),mN(1128,`string`),lg()(),Ml(1129,`td`,23)(1130,`em`)(1131,`strong`),mN(1132,`(opcional)`),lg()(),Ml(1133,`p`),mN(1134,`Define a cor do item.`),lg(),Ml(1135,`p`),mN(1136,`Valores válidos:`),lg(),Ml(1137,`ul`)(1138,`li`)(1139,`code`),mN(1140,`default`),lg()(),Ml(1141,`li`)(1142,`code`),mN(1143,`danger`),lg()()()()(),Ml(1144,`tr`,16)(1145,`td`,17)(1146,`div`,18)(1147,`span`,19),mN(1148,` url`),ql(1149,`br`),lg()()(),Ml(1150,`td`,20)(1151,`code`,25),mN(1152,`string`),lg()(),Ml(1153,`td`,23)(1154,`em`)(1155,`strong`),mN(1156,`(opcional)`),lg()(),Ml(1157,`p`),mN(1158,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(1159,`p`),mN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(1161,`code`),mN(1162,`url`),lg(),mN(1163,` é informada em um agrupador, o clique `),Ml(1164,`strong`),mN(1165,`não abrirá os subitens`),lg(),mN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(1167,`blockquote`)(1168,`p`),mN(1169,`Quando informada, tem prioridade sobre a propriedade `),Ml(1170,`code`),mN(1171,`action`),lg(),mN(1172,`.`),lg()()()(),Ml(1173,`tr`,16)(1174,`td`,17)(1175,`div`,18)(1176,`span`,19),mN(1177,` visible`),ql(1178,`br`),lg()()(),Ml(1179,`td`,20)(1180,`code`,39),mN(1181,`boolean `),lg(),Ml(1182,`code`,35),mN(1183,` Function`),lg()(),Ml(1184,`td`,23)(1185,`em`)(1186,`strong`),mN(1187,`(opcional)`),lg()(),Ml(1188,`p`),mN(1189,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(1190,`h4`,34)(1191,`code`,5),mN(1192,`PoPageFilter`),lg()(),Ml(1193,`div`,2)(1194,`p`),mN(1195,`Interface para o atributo `),Ml(1196,`code`),mN(1197,`filter`),lg(),mN(1198,` do componente `),Ml(1199,`code`),mN(1200,`po-page-list`),lg(),mN(1201,`.`),lg()(),Ml(1202,`h4`,12),mN(1203,`Propriedades`),lg(),Ml(1204,`table`,13)(1205,`tr`,14)(1206,`th`,15),mN(1207,`Nome`),lg(),Ml(1208,`th`,15),mN(1209,`Tipo`),lg(),Ml(1210,`th`,15),mN(1211,`Descrição`),lg()(),Ml(1212,`tr`,16)(1213,`td`,17)(1214,`div`,18)(1215,`span`,19),mN(1216,` action`),ql(1217,`br`),lg()()(),Ml(1218,`td`,20)(1219,`code`,35),mN(1220,`Function`),lg()(),Ml(1221,`td`,23)(1222,`em`)(1223,`strong`),mN(1224,`(opcional)`),lg()(),Ml(1225,`p`),mN(1226,`Ação a ser executada.`),lg()()(),Ml(1227,`tr`,16)(1228,`td`,17)(1229,`div`,18)(1230,`span`,19),mN(1231,` advancedAction`),ql(1232,`br`),lg()()(),Ml(1233,`td`,20)(1234,`code`,35),mN(1235,`Function`),lg()(),Ml(1236,`td`,23)(1237,`em`)(1238,`strong`),mN(1239,`(opcional)`),lg()(),Ml(1240,`p`),mN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Ml(1242,`em`),mN(1243,`click`),lg(),mN(1244,` através do rótulo `),Ml(1245,`strong`),mN(1246,`Busca Avançada`),lg(),mN(1247,`.`),lg()()(),Ml(1248,`tr`,16)(1249,`td`,17)(1250,`div`,18)(1251,`span`,19),mN(1252,` placeholder`),ql(1253,`br`),lg()()(),Ml(1254,`td`,20)(1255,`code`,25),mN(1256,`string`),lg()(),Ml(1257,`td`,23)(1258,`em`)(1259,`strong`),mN(1260,`(opcional)`),lg()(),Ml(1261,`p`),mN(1262,`Texto de instrução exibido dentro do campo de filtro.`),lg()()(),Ml(1263,`tr`,16)(1264,`td`,17)(1265,`div`,18)(1266,`span`,19),mN(1267,` width`),ql(1268,`br`),lg()()(),Ml(1269,`td`,20)(1270,`code`,45),mN(1271,`number`),lg()(),Ml(1272,`td`,23)(1273,`em`)(1274,`strong`),mN(1275,`(opcional)`),lg()(),Ml(1276,`p`),mN(1277,`Tamanho do filtro em tela, utilizando o `),Ml(1278,`em`),mN(1279,`Grid System`),lg(),mN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),lg()()()(),Ml(1281,`h4`,34)(1282,`code`,5),mN(1283,`PoPageListLiterals`),lg()(),Ml(1284,`div`,2)(1285,`p`),mN(1286,`Interface para definição das literais usadas no `),Ml(1287,`code`),mN(1288,`po-page-list`),lg(),mN(1289,`.`),lg()(),Ml(1290,`h4`,12),mN(1291,`Propriedades`),lg(),Ml(1292,`table`,13)(1293,`tr`,14)(1294,`th`,15),mN(1295,`Nome`),lg(),Ml(1296,`th`,15),mN(1297,`Tipo`),lg(),Ml(1298,`th`,15),mN(1299,`Descrição`),lg()(),Ml(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),mN(1304,` otherActions`),ql(1305,`br`),lg()()(),Ml(1306,`td`,20)(1307,`code`,25),mN(1308,`string`),lg()(),Ml(1309,`td`,23)(1310,`em`)(1311,`strong`),mN(1312,`(opcional)`),lg()(),Ml(1313,`p`),mN(1314,`Legenda do `),Ml(1315,`code`),mN(1316,`po-dropdown`),lg(),mN(1317,` de ações.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return s})();var Ge=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(w(Xn),w(Cn))};static ɵcmp=Un({type:s,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-page-list-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-page-list-basic-view`)(6,`sample-po-page-list-labs-view`)(7,`sample-po-page-list-hiring-processes-view`),lg()()()),r&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ee,fe,xe,ve],encapsulation:2,changeDetection:1})}return s})()}];var ye=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[NL.forChild(Ge),NL]})}return s})();var vt=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[ar,ye]})}return s})();export{vt as DocPoPageListModule};