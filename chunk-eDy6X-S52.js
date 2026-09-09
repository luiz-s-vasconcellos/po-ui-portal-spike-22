import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Ki as lo,Kn as Bx,Li as ht,Lt as eP,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,dr as I,ei as Yl,fi as ag,gi as bL,ha as ww,it as P8e,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,wn as vr,ya as yb,yi as cN}from"./main-3EWTGE7T.js";var be=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&Gl(0,`po-page-list`,0)},dependencies:[P8e],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s});var Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page List Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-list-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return s})();var Se=(()=>{class s{poNotification=f(Eu);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=Ax();Tl(0,`po-page-list`,6),Gl(1,`po-divider`)(2,`po-info`,7),ag(),Gl(3,`po-divider`),Tl(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action.action,a)||(n.action.action=a),Xy(a)}),ag(),a0(),Tl(8,`po-input`,10),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action.label,a)||(n.action.label=a),Xy(a)}),ag(),a0(),Tl(9,`po-input`,11),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action.url,a)||(n.action.url=a),Xy(a)}),ag(),a0(),Tl(10,`po-select`,12),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action.type,a)||(n.action.type=a),Xy(a)}),ag(),a0(),Tl(11,`po-select`,13),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action.icon,a)||(n.action.icon=a),Xy(a)}),ag(),a0(),Tl(12,`po-checkbox-group`,14),ww(`ngModelChange`,function(a){return Ky(d),uN(n.action,a)||(n.action=a),Xy(a)}),ag(),a0(),ag(),Tl(13,`div`,8)(14,`po-button`,15),ht(`p-click`,function(){return n.addAction(n.action)}),ag()()(),Gl(15,`po-divider`),Tl(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),ww(`ngModelChange`,function(a){return Ky(d),uN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Xy(a)}),ag(),a0(),ag()(),Tl(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),ww(`ngModelChange`,function(a){return Ky(d),uN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Xy(a)}),ag(),a0(),Tl(24,`po-input`,18),ww(`ngModelChange`,function(a){return Ky(d),uN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Xy(a)}),ag(),a0(),ag(),Tl(25,`div`,8)(26,`po-button`,19),ht(`p-click`,function(){return n.addBreadcrumbItem()}),ag()()(),Gl(27,`po-divider`),Tl(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),ww(`ngModelChange`,function(a){return Ky(d),uN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Xy(a)}),ag(),a0(),Tl(32,`po-input`,21),ww(`ngModelChange`,function(a){return Ky(d),uN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Xy(a)}),ag(),a0(),ag(),Tl(33,`div`,8)(34,`po-button`,22),ht(`p-click`,function(){return n.addBreadcrumbParam()}),ag()()(),Gl(35,`po-divider`),Tl(36,`div`,8)(37,`po-input`,23),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Xy(a)}),ht(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),ag(),a0(),Tl(38,`po-switch`,24),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Xy(a)}),ht(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),ag(),a0(),ag(),Tl(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Xy(a)}),ag(),a0(),Tl(43,`po-input`,26),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Xy(a)}),ag(),a0(),ag(),Tl(44,`div`,8)(45,`po-input`,27),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerValue,a)||(n.disclaimerValue=a),Xy(a)}),ag(),a0(),Tl(46,`po-switch`,28),ww(`ngModelChange`,function(a){return Ky(d),uN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Xy(a)}),ag(),a0(),ag(),Tl(47,`div`,8)(48,`po-button`,29),ht(`p-click`,function(){return n.addDisclaimer()}),ag()()(),Gl(49,`po-divider`),Tl(50,`form`,null,5)(52,`po-input`,30),ww(`ngModelChange`,function(a){return Ky(d),uN(n.title,a)||(n.title=a),Xy(a)}),ag(),a0(),Tl(53,`po-input`,31),ww(`ngModelChange`,function(a){return Ky(d),uN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),ag(),a0(),Tl(54,`po-input`,32),ww(`ngModelChange`,function(a){return Ky(d),uN(n.filter.placeholder,a)||(n.filter.placeholder=a),Xy(a)}),ag(),a0(),Tl(55,`po-input`,33),ww(`ngModelChange`,function(a){return Ky(d),uN(n.filter.width,a)||(n.filter.width=a),Xy(a)}),ag(),a0(),Tl(56,`po-input`,34),ww(`ngModelChange`,function(a){return Ky(d),uN(n.literals,a)||(n.literals=a),Xy(a)}),ht(`p-change`,function(){return n.changeLiterals()}),ag(),a0(),Tl(57,`po-radio-group`,35),ww(`ngModelChange`,function(a){return Ky(d),uN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),ag(),a0(),Tl(58,`div`,8)(59,`po-button`,36),ht(`p-click`,function(){return n.restore()}),ag()()()}if(r&2){let d=Bx(5),p=Bx(21),a=Bx(29),Le=Bx(40);nw(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),jp(2),nw(`p-value`,n.filterModel),jp(5),Ew(`ngModel`,n.action.action),l0(),jp(),Ew(`ngModel`,n.action.label),l0(),jp(),Ew(`ngModel`,n.action.url),l0(),jp(),Ew(`ngModel`,n.action.type),nw(`p-options`,n.typeOptions),l0(),jp(),Ew(`ngModel`,n.action.icon),nw(`p-options`,n.iconOptions),l0(),jp(),Ew(`ngModel`,n.action),nw(`p-options`,n.actionOptions),l0(),jp(2),nw(`p-disabled`,d.form.invalid),jp(5),Ew(`ngModel`,n.breadcrumb.favorite),l0(),jp(4),Ew(`ngModel`,n.breadcrumbItem.label),l0(),jp(),Ew(`ngModel`,n.breadcrumbItem.link),l0(),jp(2),nw(`p-disabled`,p.invalid),jp(5),Ew(`ngModel`,n.breadcrumbParams.property),l0(),jp(),Ew(`ngModel`,n.breadcrumbParams.value),l0(),jp(2),nw(`p-disabled`,a.invalid),jp(3),Ew(`ngModel`,n.disclaimerGroupTitle),l0(),jp(),Ew(`ngModel`,n.disclaimerGroupHideRemoveAll),l0(),jp(4),Ew(`ngModel`,n.disclaimerLabel),l0(),jp(),Ew(`ngModel`,n.disclaimerProperty),l0(),jp(2),Ew(`ngModel`,n.disclaimerValue),l0(),jp(),Ew(`ngModel`,n.disclaimerHideClose),l0(),jp(2),nw(`p-disabled`,Le.invalid),jp(4),Ew(`ngModel`,n.title),l0(),jp(),Ew(`ngModel`,n.subtitle),l0(),jp(),Ew(`ngModel`,n.filter.placeholder),l0(),jp(),Ew(`ngModel`,n.filter.width),l0(),jp(),Ew(`ngModel`,n.literals),l0(),jp(),Ew(`ngModel`,n.componentsSize),nw(`p-options`,n.componentsSizeOptions),l0()}},dependencies:[yY,yb,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,j4,ybe,P8e],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s});var fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page List Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-list
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-list-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return s})();var K=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=I({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var ke=[`advancedFilterModal`];var Be=[`poPageList`];var Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Eu);poDialog=f(W0e);router=f(Cn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`);break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Yl(ke,7)(Be,7),r&2){let d;lo(d=uo())&&(n.advancedFilterModal=d.first),lo(d=uo())&&(n.poPageList=d.first)}},standalone:!1,features:[Ce([K])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=Ax();Tl(0,`po-page-list`,3,0),Gl(2,`po-table`,4),ag(),Tl(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),ww(`ngModelChange`,function(a){return Ky(d),uN(n.jobDescription,a)||(n.jobDescription=a),Xy(a)}),ag(),a0(),Tl(8,`po-checkbox-group`,7),ww(`ngModelChange`,function(a){return Ky(d),uN(n.status,a)||(n.status=a),Xy(a)}),ag(),a0(),ag()()}r&2&&(nw(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),jp(2),nw(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),jp(),nw(`p-primary-action`,n.advancedFilterPrimaryAction),jp(4),Ew(`ngModel`,n.jobDescription),nw(`p-options`,n.jobDescriptionOptions),l0(),jp(),Ew(`ngModel`,n.status),nw(`p-options`,n.statusOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,N4,eP,vr,P8e,X4],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s});var xe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page List - Hiring Processes`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-list
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-page-list-hiring-processes`),ag(),Gl(27,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,je,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return s})();var ve=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Un({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1318,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo responsável pelos componentes de estrutura de página: `),Tl(7,`code`),cN(8,`po-page-default`),ag(),cN(9,`, `),Tl(10,`code`),cN(11,`po-page-detail`),ag(),cN(12,`,
`),Tl(13,`code`),cN(14,`po-page-edit`),ag(),cN(15,`, `),Tl(16,`code`),cN(17,`po-page-list`),ag(),cN(18,` e `),Tl(19,`code`),cN(20,`po-page-slide`),ag(),cN(21,`.`),ag()(),Tl(22,`h3`,3),cN(23,`Componente`),ag(),Tl(24,`h4`,4)(25,`code`,5),cN(26,`PoPageListComponent`),ag()(),Tl(27,`div`,2)(28,`p`),cN(29,`O componente `),Tl(30,`code`),cN(31,`po-page-list`),ag(),cN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),ag(),Tl(33,`p`),cN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Tl(35,`em`),cN(36,`click`),ag(),cN(37,` do ícone `),Tl(38,`a`,6),cN(39,`an-magnifying-glass`),ag(),cN(40,`
quanto ao pressionar da tecla `),Tl(41,`em`),cN(42,`ENTER`),ag(),cN(43,` quando o foco estiver no campo de pesquisa.`),ag(),Tl(44,`p`),cN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Tl(46,`a`,7)(47,`code`),cN(48,`po-disclaimer-group`),ag()(),cN(49,`.`),ag(),Tl(50,`h4`),cN(51,`Tokens customizáveis`),ag(),Tl(52,`blockquote`)(53,`p`),cN(54,`Para maiores informações, acesse o guia `),Tl(55,`a`,8),cN(56,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(57,`.`),ag()(),Tl(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),cN(62,`Propriedade`),ag(),Tl(63,`th`),cN(64,`Descrição`),ag(),Tl(65,`th`),cN(66,`Valor Padrão`),ag()()(),Tl(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),cN(71,`Header`),ag()(),Gl(72,`td`)(73,`td`),ag(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--padding`),ag()(),Tl(78,`td`),cN(79,`Espaçamento do header`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--gap`),ag()(),Tl(87,`td`),cN(88,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--spacing-md)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--gap-actions`),ag()(),Tl(96,`td`),cN(97,`Espaçamento entre as ações`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--spacing-xs)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--font-family`),ag()(),Tl(105,`td`),cN(106,`Família tipográfica do título`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--font-family-theme)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`strong`),cN(113,`Content`),ag()(),Gl(114,`td`)(115,`td`),ag(),Tl(116,`tr`)(117,`td`)(118,`code`),cN(119,`--padding-content`),ag()(),Tl(120,`td`),cN(121,`Espaçamento do conteúdo`),ag(),Tl(122,`td`)(123,`code`),cN(124,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(125,`div`,9)(126,`h4`,10),cN(127,`Seletor`),ag(),Tl(128,`pre`,11),cN(129,`<po-page-list
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
`),ag()(),Tl(130,`h4`,12),cN(131,`Propriedades`),ag(),Tl(132,`table`,13)(133,`tr`,14)(134,`th`,15),cN(135,`Nome`),ag(),Tl(136,`th`,15),cN(137,`Tipo`),ag(),Tl(138,`th`,15),cN(139,`Padrão`),ag(),Tl(140,`th`,15),cN(141,`Descrição`),ag()(),Tl(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),cN(146,` p-actions`),Gl(147,`br`),ag()()(),Tl(148,`td`,20)(149,`code`,21),cN(150,`Array<PoPageAction>`),ag()(),Tl(151,`td`,22),cN(152,`-`),ag(),Tl(153,`td`,23)(154,`em`)(155,`strong`),cN(156,`(opcional)`),ag()(),Tl(157,`p`),cN(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Tl(159,`code`),cN(160,`PoPageAction`),ag(),cN(161,`.`),ag()()(),Tl(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),cN(166,` p-breadcrumb`),Gl(167,`br`),ag()()(),Tl(168,`td`,20)(169,`code`,24),cN(170,`PoBreadcrumb`),ag()(),Tl(171,`td`,22),cN(172,`-`),ag(),Tl(173,`td`,23)(174,`em`)(175,`strong`),cN(176,`(opcional)`),ag()(),Tl(177,`p`),cN(178,`Objeto que implementa as propriedades da interface `),Tl(179,`code`),cN(180,`PoBreadcrumb`),ag(),cN(181,`.`),ag()()(),Tl(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),cN(186,` p-components-size`),Gl(187,`br`),ag()()(),Tl(188,`td`,20)(189,`code`,25),cN(190,`string`),ag()(),Tl(191,`td`,22)(192,`p`)(193,`code`),cN(194,`medium`),ag()()(),Tl(195,`td`,23)(196,`em`)(197,`strong`),cN(198,`(opcional)`),ag()(),Tl(199,`p`),cN(200,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(201,`ul`)(202,`li`)(203,`code`),cN(204,`small`),ag(),cN(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(206,`li`)(207,`code`),cN(208,`medium`),ag(),cN(209,`: aplica a medida medium de cada componente.`),ag()(),Tl(210,`blockquote`)(211,`p`),cN(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(213,`code`),cN(214,`medium`),ag(),cN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(216,`a`,26),cN(217,`po-theme`),ag(),cN(218,`.`),ag()()()(),Tl(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),cN(223,` p-disclaimer-group`),Gl(224,`br`),ag()()(),Tl(225,`td`,20)(226,`code`,27),cN(227,`PoDisclaimerGroup`),ag()(),Tl(228,`td`,22),cN(229,`-`),ag(),Tl(230,`td`,23)(231,`em`)(232,`strong`),cN(233,`(opcional)`),ag()(),Tl(234,`p`),cN(235,`Objeto que implementa as propriedades da interface `),Tl(236,`code`),cN(237,`PoDisclaimerGroup`),ag(),cN(238,`.`),ag()()(),Tl(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),cN(243,` p-filter`),Gl(244,`br`),ag()()(),Tl(245,`td`,20)(246,`code`,28),cN(247,`PoPageFilter`),ag()(),Tl(248,`td`,22),cN(249,`-`),ag(),Tl(250,`td`,23)(251,`p`),cN(252,`Objeto que implementa as propriedades da interface `),Tl(253,`code`),cN(254,`PoPageFilter`),ag(),cN(255,`.`),ag()()(),Tl(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),cN(260,` p-literals`),Gl(261,`br`),ag()()(),Tl(262,`td`,20)(263,`code`,29),cN(264,`PoPageListLiterals`),ag()(),Tl(265,`td`,22),cN(266,`-`),ag(),Tl(267,`td`,23)(268,`em`)(269,`strong`),cN(270,`(opcional)`),ag()(),Tl(271,`p`),cN(272,`Objeto com as literais usadas no `),Tl(273,`code`),cN(274,`po-page-list`),ag(),cN(275,`.`),ag(),Tl(276,`p`),cN(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(278,`pre`)(279,`code`),cN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),ag()(),Tl(281,`p`),cN(282,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(283,`pre`)(284,`code`),cN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),ag()(),Tl(286,`p`),cN(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(288,`pre`)(289,`code`),cN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),ag()(),Tl(291,`blockquote`)(292,`p`),cN(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Tl(294,`a`,30)(295,`code`),cN(296,`PoI18nService`),ag()(),cN(297,` ou `),Tl(298,`em`),cN(299,`browser`),ag(),cN(300,`.`),ag()()()(),Tl(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),cN(305,` p-quick-search-value`),Gl(306,`br`),ag()()(),Tl(307,`td`,20)(308,`code`,25),cN(309,`string`),ag()(),Tl(310,`td`,22),cN(311,`-`),ag(),Tl(312,`td`,23)(313,`em`)(314,`strong`),cN(315,`(opcional)`),ag()(),Tl(316,`p`),cN(317,`Valor padrão na busca rápida ao inicializar o componente`),ag()()(),Tl(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),cN(322,` p-subtitle`),Gl(323,`br`),ag()()(),Tl(324,`td`,20)(325,`code`,25),cN(326,`string`),ag()(),Tl(327,`td`,22),cN(328,`-`),ag(),Tl(329,`td`,23)(330,`em`)(331,`strong`),cN(332,`(opcional)`),ag()(),Tl(333,`p`),cN(334,`Subtitulo do Header da página.`),ag(),Tl(335,`p`),cN(336,`Suporta formatação básica com as tags `),Tl(337,`code`),cN(338,`<b>`),ag(),cN(339,` (negrito), `),Tl(340,`code`),cN(341,`<strong>`),ag(),cN(342,` (negrito), `),Tl(343,`code`),cN(344,`<i>`),ag(),cN(345,` (itálico), `),Tl(346,`code`),cN(347,`<em>`),ag(),cN(348,` (it\xE1lico) e
`),Tl(349,`code`),cN(350,`<u>`),ag(),cN(351,` (sublinhado).`),ag(),Tl(352,`p`),cN(353,`Exemplo:`),ag(),Tl(354,`pre`)(355,`code`,31),cN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),ag()(),Tl(357,`blockquote`)(358,`p`),cN(359,`Requer que `),Tl(360,`code`),cN(361,`p-title`),ag(),cN(362,` esteja definido.`),ag()()()(),Tl(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),cN(367,` p-title`),Gl(368,`br`),ag()()(),Tl(369,`td`,20)(370,`code`,25),cN(371,`string`),ag()(),Tl(372,`td`,22),cN(373,`-`),ag(),Tl(374,`td`,23)(375,`p`),cN(376,`Título da página.`),ag()()()(),Tl(377,`h3`,12),cN(378,`Métodos`),ag(),Tl(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),cN(385,` clearInputSearch `),ag()()()()(),Tl(386,`tr`,23)(387,`td`,23)(388,`p`),cN(389,`Limpa o campo de pesquisa.`),ag()()()(),Gl(390,`br`),Tl(391,`h3`),cN(392,`Interfaces`),ag(),Tl(393,`h4`,34)(394,`code`,5),cN(395,`PoBreadcrumbItem`),ag()(),Tl(396,`div`,2)(397,`p`),cN(398,`Interface que define cada item do componente `),Tl(399,`strong`),cN(400,`po-breadcrumb`),ag(),cN(401,`.`),ag()(),Tl(402,`h4`,12),cN(403,`Propriedades`),ag(),Tl(404,`table`,13)(405,`tr`,14)(406,`th`,15),cN(407,`Nome`),ag(),Tl(408,`th`,15),cN(409,`Tipo`),ag(),Tl(410,`th`,15),cN(411,`Descrição`),ag()(),Tl(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),cN(416,` action`),Gl(417,`br`),ag()()(),Tl(418,`td`,20)(419,`code`,35),cN(420,`Function`),ag()(),Tl(421,`td`,23)(422,`em`)(423,`strong`),cN(424,`(opcional)`),ag()(),Tl(425,`p`),cN(426,`Ação executada ao clicar no item.`),ag(),Tl(427,`blockquote`)(428,`p`),cN(429,`A função atribuída a esta propriedade receberá o `),Tl(430,`em`),cN(431,`label`),ag(),cN(432,` do item como parâmetro para execução.`),ag()()()(),Tl(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),cN(437,` label`),Gl(438,`br`),ag()()(),Tl(439,`td`,20)(440,`code`,25),cN(441,`string`),ag()(),Tl(442,`td`,23)(443,`p`),cN(444,`Rótulo do item.`),ag()()(),Tl(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),cN(449,` link`),Gl(450,`br`),ag()()(),Tl(451,`td`,20)(452,`code`,25),cN(453,`string`),ag()(),Tl(454,`td`,23)(455,`em`)(456,`strong`),cN(457,`(opcional)`),ag()(),Tl(458,`p`),cN(459,`Url do item.`),ag(),Tl(460,`blockquote`)(461,`p`),cN(462,`Caso o item também contenha uma `),Tl(463,`em`),cN(464,`action`),ag(),cN(465,` definida, a preferência de execução será do `),Tl(466,`em`),cN(467,`link`),ag(),cN(468,`.`),ag()(),Tl(469,`blockquote`)(470,`p`),cN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(472,`strong`)(473,`a`,36),cN(474,`Veja um exemplo de como criar rotas aqui`),ag()(),cN(475,`.`),ag()(),Tl(476,`blockquote`)(477,`p`),cN(478,`Esta propriedade é necessária para que a propriedade `),Tl(479,`code`),cN(480,`p-favorite-service`),ag(),cN(481,` consiga favoritar ou desfavoritar.`),ag()()()()(),Tl(482,`h4`,34)(483,`code`,5),cN(484,`PoBreadcrumb`),ag()(),Tl(485,`div`,2)(486,`p`),cN(487,`Interface que define o `),Tl(488,`code`),cN(489,`po-breadcrumb`),ag(),cN(490,`.`),ag()(),Tl(491,`h4`,12),cN(492,`Propriedades`),ag(),Tl(493,`table`,13)(494,`tr`,14)(495,`th`,15),cN(496,`Nome`),ag(),Tl(497,`th`,15),cN(498,`Tipo`),ag(),Tl(499,`th`,15),cN(500,`Descrição`),ag()(),Tl(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),cN(505,` favorite`),Gl(506,`br`),ag()()(),Tl(507,`td`,20)(508,`code`,25),cN(509,`string`),ag()(),Tl(510,`td`,23)(511,`em`)(512,`strong`),cN(513,`(opcional)`),ag()(),Tl(514,`p`),cN(515,`Permite definir uma URL para favoritar ou desfavoritar.`),ag(),Tl(516,`blockquote`)(517,`p`),cN(518,`Para maiores informações verificar a propriedade `),Tl(519,`code`),cN(520,`p-favorite-service`),ag(),cN(521,` do componente `),Tl(522,`code`),cN(523,`po-breadcrumb`),ag(),cN(524,`.`),ag()()()(),Tl(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),cN(529,` items`),Gl(530,`br`),ag()()(),Tl(531,`td`,20)(532,`code`,37),cN(533,`Array<PoBreadcrumbItem>`),ag()(),Tl(534,`td`,23)(535,`p`),cN(536,`Lista de itens do `),Tl(537,`em`),cN(538,`breadcrumb`),ag(),cN(539,`.`),ag(),Tl(540,`p`)(541,`strong`),cN(542,`Exemplo:`),ag()(),Tl(543,`pre`)(544,`code`),cN(545,`{ label: 'Po Portal', link: 'portal' }
`),ag()()()(),Tl(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),cN(550,` params`),Gl(551,`br`),ag()()(),Tl(552,`td`,20)(553,`code`,38),cN(554,`object`),ag()(),Tl(555,`td`,23)(556,`em`)(557,`strong`),cN(558,`(opcional)`),ag()(),Tl(559,`p`),cN(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ag()()()(),Tl(561,`h4`,34)(562,`code`,5),cN(563,`PoDisclaimer`),ag()(),Tl(564,`div`,2)(565,`p`),cN(566,`Interface que representa o objeto `),Tl(567,`code`),cN(568,`po-disclaimer`),ag(),cN(569,`.`),ag()(),Tl(570,`h4`,12),cN(571,`Propriedades`),ag(),Tl(572,`table`,13)(573,`tr`,14)(574,`th`,15),cN(575,`Nome`),ag(),Tl(576,`th`,15),cN(577,`Tipo`),ag(),Tl(578,`th`,15),cN(579,`Descrição`),ag()(),Tl(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),cN(584,` hideClose`),Gl(585,`br`),ag()()(),Tl(586,`td`,20)(587,`code`,39),cN(588,`boolean`),ag()(),Tl(589,`td`,23)(590,`em`)(591,`strong`),cN(592,`(opcional)`),ag()(),Tl(593,`p`),cN(594,`Se verdadeiro, oculta o botão para fechar o `),Tl(595,`em`),cN(596,`disclaimer`),ag(),cN(597,`.`),ag()()(),Tl(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),cN(602,` label`),Gl(603,`br`),ag()()(),Tl(604,`td`,20)(605,`code`,25),cN(606,`string`),ag()(),Tl(607,`td`,23)(608,`em`)(609,`strong`),cN(610,`(opcional)`),ag()(),Tl(611,`p`),cN(612,`Texto de exibição do objeto.`),ag()()(),Tl(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),cN(617,` property`),Gl(618,`br`),ag()()(),Tl(619,`td`,20)(620,`code`,25),cN(621,`string`),ag()(),Tl(622,`td`,23)(623,`em`)(624,`strong`),cN(625,`(opcional)`),ag()(),Tl(626,`p`),cN(627,`Nome da propriedade vinculada ao objeto `),Tl(628,`em`),cN(629,`disclaimer`),ag(),cN(630,`.`),ag()()(),Tl(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),cN(635,` value`),Gl(636,`br`),ag()()(),Tl(637,`td`,20)(638,`code`,40),cN(639,`any`),ag()(),Tl(640,`td`,23)(641,`p`),cN(642,`Valor do objeto.`),ag()()()(),Tl(643,`h4`,34)(644,`code`,5),cN(645,`PoDisclaimerGroupRemoveAction`),ag()(),Tl(646,`div`,2)(647,`p`),cN(648,`Estrutura do objeto representando o estado dos `),Tl(649,`em`),cN(650,`disclaimers`),ag(),cN(651,` após a remoção.`),ag()(),Tl(652,`h4`,12),cN(653,`Propriedades`),ag(),Tl(654,`table`,13)(655,`tr`,14)(656,`th`,15),cN(657,`Nome`),ag(),Tl(658,`th`,15),cN(659,`Tipo`),ag(),Tl(660,`th`,15),cN(661,`Descrição`),ag()(),Tl(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),cN(666,` currentDisclaimers`),Gl(667,`br`),ag()()(),Tl(668,`td`,20)(669,`code`,41),cN(670,`Array<PoDisclaimer>`),ag()(),Tl(671,`td`,23)(672,`p`),cN(673,`Lista com os `),Tl(674,`em`),cN(675,`disclaimers`),ag(),cN(676,` atuais (restantes).`),ag()()(),Tl(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),cN(681,` removedDisclaimer`),Gl(682,`br`),ag()()(),Tl(683,`td`,20)(684,`code`,42),cN(685,`PoDisclaimer`),ag()(),Tl(686,`td`,23)(687,`p`)(688,`em`),cN(689,`Disclaimer`),ag(),cN(690,` que foi removido.`),ag()()()(),Tl(691,`h4`,34)(692,`code`,5),cN(693,`PoDisclaimerGroup`),ag()(),Tl(694,`div`,2)(695,`p`),cN(696,`Interface que representa o objeto `),Tl(697,`code`),cN(698,`po-disclaimer-group`),ag(),cN(699,`.`),ag()(),Tl(700,`h4`,12),cN(701,`Propriedades`),ag(),Tl(702,`table`,13)(703,`tr`,14)(704,`th`,15),cN(705,`Nome`),ag(),Tl(706,`th`,15),cN(707,`Tipo`),ag(),Tl(708,`th`,15),cN(709,`Descrição`),ag()(),Tl(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),cN(714,` change`),Gl(715,`br`),ag()()(),Tl(716,`td`,20)(717,`code`,35),cN(718,`Function`),ag()(),Tl(719,`td`,23)(720,`em`)(721,`strong`),cN(722,`(opcional)`),ag()(),Tl(723,`p`),cN(724,`Função que será disparada quando a lista de `),Tl(725,`em`),cN(726,`disclaimers`),ag(),cN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Tl(728,`em`),cN(729,`disclaimers`),ag(),cN(730,`.`),ag()()(),Tl(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),cN(735,` disclaimers`),Gl(736,`br`),ag()()(),Tl(737,`td`,20)(738,`code`,41),cN(739,`Array<PoDisclaimer>`),ag()(),Tl(740,`td`,23)(741,`p`),cN(742,`Lista de `),Tl(743,`em`),cN(744,`disclaimers`),ag(),cN(745,`.`),ag(),Tl(746,`p`),cN(747,`Exemplo:`),ag(),Tl(748,`pre`)(749,`code`),cN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),ag()(),Tl(751,`p`),cN(752,`Para que a lista de `),Tl(753,`em`),cN(754,`disclaimers`),ag(),cN(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Tl(756,`code`),cN(757,`PoDisclaimer`),ag(),cN(758,`.`),ag(),Tl(759,`p`),cN(760,`Exemplo:`),ag(),Tl(761,`pre`)(762,`code`),cN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),ag()()()(),Tl(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),cN(768,` hideRemoveAll`),Gl(769,`br`),ag()()(),Tl(770,`td`,20)(771,`code`,39),cN(772,`boolean`),ag()(),Tl(773,`td`,23)(774,`em`)(775,`strong`),cN(776,`(opcional)`),ag()(),Tl(777,`p`),cN(778,`Oculta o botão para remover todos os `),Tl(779,`em`),cN(780,`disclaimers`),ag(),cN(781,` do grupo.`),ag(),Tl(782,`blockquote`)(783,`p`),cN(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Tl(785,`em`),cN(786,`disclaimers`),ag(),cN(787,` com a opção `),Tl(788,`code`),cN(789,`hideClose`),ag(),cN(790,` habilitada.`),ag()()()(),Tl(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),cN(795,` remove`),Gl(796,`br`),ag()()(),Tl(797,`td`,20)(798,`code`,35),cN(799,`Function`),ag()(),Tl(800,`td`,23)(801,`em`)(802,`strong`),cN(803,`(opcional)`),ag()(),Tl(804,`p`),cN(805,`Função que será disparada quando um `),Tl(806,`em`),cN(807,`disclaimer`),ag(),cN(808,` for removido da lista de
`),Tl(809,`em`),cN(810,`disclaimers`),ag(),cN(811,` pelo usuário.`),ag(),Tl(812,`p`),cN(813,`Recebe como parâmetro um objeto conforme a interface `),Tl(814,`code`),cN(815,`PoDisclaimerGroupRemoveAction`),ag(),cN(816,`.`),ag()()(),Tl(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),cN(821,` removeAll`),Gl(822,`br`),ag()()(),Tl(823,`td`,20)(824,`code`,35),cN(825,`Function`),ag()(),Tl(826,`td`,23)(827,`em`)(828,`strong`),cN(829,`(opcional)`),ag()(),Tl(830,`p`),cN(831,`Função que será disparada quando todos os `),Tl(832,`em`),cN(833,`disclaimers`),ag(),cN(834,` forem removidos da lista de `),Tl(835,`em`),cN(836,`disclaimers`),ag(),cN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),ag(),Tl(838,`p`),cN(839,`Recebe como parâmetro uma lista contendo todos os `),Tl(840,`code`),cN(841,`disclaimers`),ag(),cN(842,` removidos.`),ag()()(),Tl(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),cN(847,` title`),Gl(848,`br`),ag()()(),Tl(849,`td`,20)(850,`code`,25),cN(851,`string`),ag()(),Tl(852,`td`,23)(853,`em`)(854,`strong`),cN(855,`(opcional)`),ag()(),Tl(856,`p`),cN(857,`Título do grupo de `),Tl(858,`em`),cN(859,`disclaimers`),ag(),cN(860,`.`),ag()()()(),Tl(861,`h4`,34)(862,`code`,5),cN(863,`PoPageAction`),ag()(),Tl(864,`div`,2)(865,`p`),cN(866,`Interface para as ações dos componentes `),Tl(867,`code`),cN(868,`po-page-default`),ag(),cN(869,` e `),Tl(870,`code`),cN(871,`po-page-list`),ag(),cN(872,`.`),ag(),Tl(873,`p`),cN(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Tl(875,`em`),cN(876,`dropdown`),ag(),cN(877,`,
conforme o `),Tl(878,`code`),cN(879,`PoPageActionsLayout`),ag(),cN(880,` e o tamanho da tela.`),ag(),Tl(881,`blockquote`)(882,`p`),cN(883,`As propriedades `),Tl(884,`code`),cN(885,`separator`),ag(),cN(886,`, `),Tl(887,`code`),cN(888,`selected`),ag(),cN(889,` e `),Tl(890,`code`),cN(891,`subItems`),ag(),cN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Tl(893,`em`),cN(894,`dropdown`),ag(),cN(895,`.`),ag()()(),Tl(896,`h4`,12),cN(897,`Propriedades`),ag(),Tl(898,`table`,13)(899,`tr`,14)(900,`th`,15),cN(901,`Nome`),ag(),Tl(902,`th`,15),cN(903,`Tipo`),ag(),Tl(904,`th`,15),cN(905,`Descrição`),ag()(),Tl(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),cN(910,` action`),Gl(911,`br`),ag()()(),Tl(912,`td`,20)(913,`code`,35),cN(914,`Function`),ag()(),Tl(915,`td`,23)(916,`em`)(917,`strong`),cN(918,`(opcional)`),ag()(),Tl(919,`p`),cN(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(921,`p`),cN(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(923,`code`),cN(924,`subItems`),ag(),cN(925,`.`),ag(),Tl(926,`blockquote`)(927,`p`),cN(928,`Para que a função seja executada no contexto do componente, utilize `),Tl(929,`em`),cN(930,`bind`),ag(),cN(931,`:
`),Tl(932,`code`),cN(933,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),cN(938,` disabled`),Gl(939,`br`),ag()()(),Tl(940,`td`,20)(941,`code`,39),cN(942,`boolean `),ag(),Tl(943,`code`,35),cN(944,` Function`),ag()(),Tl(945,`td`,23)(946,`em`)(947,`strong`),cN(948,`(opcional)`),ag()(),Tl(949,`p`),cN(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),cN(955,` icon`),Gl(956,`br`),ag()()(),Tl(957,`td`,20)(958,`code`,25),cN(959,`string `),ag(),Tl(960,`code`,43),cN(961,` TemplateRef<void>`),ag()(),Tl(962,`td`,23)(963,`em`)(964,`strong`),cN(965,`(opcional)`),ag()(),Tl(966,`p`),cN(967,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(968,`p`),cN(969,`Aceita ícones da `),Tl(970,`a`,6),cN(971,`Biblioteca de ícones`),ag(),cN(972,`, fontes externas (ex: Font Awesome)
ou um `),Tl(973,`code`),cN(974,`TemplateRef`),ag(),cN(975,` para ícones customizados.`),ag(),Tl(976,`pre`)(977,`code`),cN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),cN(983,` kind`),Gl(984,`br`),ag()()(),Tl(985,`td`,20)(986,`code`,25),cN(987,`string`),ag()(),Tl(988,`td`,23)(989,`em`)(990,`strong`),cN(991,`(opcional)`),ag()(),Tl(992,`p`),cN(993,`Define o estilo visual da ação quando exibida como botão fora do `),Tl(994,`em`),cN(995,`dropdown`),ag(),cN(996,`.`),ag(),Tl(997,`p`),cN(998,`Valores permitidos:`),ag(),Tl(999,`ul`)(1e3,`li`)(1001,`code`),cN(1002,`primary`),ag(),cN(1003,`: botão com maior destaque visual.`),ag(),Tl(1004,`li`)(1005,`code`),cN(1006,`secondary`),ag(),cN(1007,`: estilo padrão.`),ag()(),Tl(1008,`blockquote`)(1009,`p`),cN(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),ag()(),Tl(1011,`blockquote`)(1012,`p`),cN(1013,`Somente uma ação pode ter `),Tl(1014,`code`),cN(1015,`kind`),ag(),cN(1016,` igual a `),Tl(1017,`code`),cN(1018,`primary`),ag(),cN(1019,`. Caso mais de uma defina `),Tl(1020,`code`),cN(1021,`primary`),ag(),cN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Tl(1023,`code`),cN(1024,`secondary`),ag(),cN(1025,`.`),ag()(),Tl(1026,`blockquote`)(1027,`p`),cN(1028,`Quando não definido, o estilo é determinado pelo `),Tl(1029,`code`),cN(1030,`PoPageActionsLayout`),ag(),cN(1031,`.`),ag()()()(),Tl(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),cN(1036,` label`),Gl(1037,`br`),ag()()(),Tl(1038,`td`,20)(1039,`code`,25),cN(1040,`string`),ag()(),Tl(1041,`td`,23)(1042,`p`),cN(1043,`Rótulo da ação.`),ag(),Tl(1044,`p`),cN(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(1046,`code`),cN(1047,`subItems`),ag(),cN(1048,`.`),ag()()(),Tl(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),cN(1053,` selected`),Gl(1054,`br`),ag()()(),Tl(1055,`td`,20)(1056,`code`,39),cN(1057,`boolean`),ag()(),Tl(1058,`td`,23)(1059,`em`)(1060,`strong`),cN(1061,`(opcional)`),ag()(),Tl(1062,`p`),cN(1063,`Define se a ação está selecionada.`),ag()()(),Tl(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),cN(1068,` separator`),Gl(1069,`br`),ag()()(),Tl(1070,`td`,20)(1071,`code`,39),cN(1072,`boolean`),ag()(),Tl(1073,`td`,23)(1074,`em`)(1075,`strong`),cN(1076,`(opcional)`),ag()(),Tl(1077,`p`),cN(1078,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),cN(1083,` subItems`),Gl(1084,`br`),ag()()(),Tl(1085,`td`,20)(1086,`code`,44),cN(1087,`Array<PoPopupAction>`),ag()(),Tl(1088,`td`,23)(1089,`em`)(1090,`strong`),cN(1091,`(opcional)`),ag()(),Tl(1092,`p`),cN(1093,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(1094,`p`),cN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(1096,`blockquote`)(1097,`p`),cN(1098,`As propriedades `),Tl(1099,`code`),cN(1100,`disabled`),ag(),cN(1101,`, `),Tl(1102,`code`),cN(1103,`type`),ag(),cN(1104,` e `),Tl(1105,`code`),cN(1106,`visible`),ag(),cN(1107,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(1108,`blockquote`)(1109,`p`),cN(1110,`Quando `),Tl(1111,`code`),cN(1112,`url`),ag(),cN(1113,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(1114,`blockquote`)(1115,`p`),cN(1116,`Em subníveis aninhados, o `),Tl(1117,`code`),cN(1118,`icon`),ag(),cN(1119,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(1120,`tr`,16)(1121,`td`,17)(1122,`div`,18)(1123,`span`,19),cN(1124,` type`),Gl(1125,`br`),ag()()(),Tl(1126,`td`,20)(1127,`code`,25),cN(1128,`string`),ag()(),Tl(1129,`td`,23)(1130,`em`)(1131,`strong`),cN(1132,`(opcional)`),ag()(),Tl(1133,`p`),cN(1134,`Define a cor do item.`),ag(),Tl(1135,`p`),cN(1136,`Valores válidos:`),ag(),Tl(1137,`ul`)(1138,`li`)(1139,`code`),cN(1140,`default`),ag()(),Tl(1141,`li`)(1142,`code`),cN(1143,`danger`),ag()()()()(),Tl(1144,`tr`,16)(1145,`td`,17)(1146,`div`,18)(1147,`span`,19),cN(1148,` url`),Gl(1149,`br`),ag()()(),Tl(1150,`td`,20)(1151,`code`,25),cN(1152,`string`),ag()(),Tl(1153,`td`,23)(1154,`em`)(1155,`strong`),cN(1156,`(opcional)`),ag()(),Tl(1157,`p`),cN(1158,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(1159,`p`),cN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1161,`code`),cN(1162,`url`),ag(),cN(1163,` é informada em um agrupador, o clique `),Tl(1164,`strong`),cN(1165,`não abrirá os subitens`),ag(),cN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(1167,`blockquote`)(1168,`p`),cN(1169,`Quando informada, tem prioridade sobre a propriedade `),Tl(1170,`code`),cN(1171,`action`),ag(),cN(1172,`.`),ag()()()(),Tl(1173,`tr`,16)(1174,`td`,17)(1175,`div`,18)(1176,`span`,19),cN(1177,` visible`),Gl(1178,`br`),ag()()(),Tl(1179,`td`,20)(1180,`code`,39),cN(1181,`boolean `),ag(),Tl(1182,`code`,35),cN(1183,` Function`),ag()(),Tl(1184,`td`,23)(1185,`em`)(1186,`strong`),cN(1187,`(opcional)`),ag()(),Tl(1188,`p`),cN(1189,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()(),Tl(1190,`h4`,34)(1191,`code`,5),cN(1192,`PoPageFilter`),ag()(),Tl(1193,`div`,2)(1194,`p`),cN(1195,`Interface para o atributo `),Tl(1196,`code`),cN(1197,`filter`),ag(),cN(1198,` do componente `),Tl(1199,`code`),cN(1200,`po-page-list`),ag(),cN(1201,`.`),ag()(),Tl(1202,`h4`,12),cN(1203,`Propriedades`),ag(),Tl(1204,`table`,13)(1205,`tr`,14)(1206,`th`,15),cN(1207,`Nome`),ag(),Tl(1208,`th`,15),cN(1209,`Tipo`),ag(),Tl(1210,`th`,15),cN(1211,`Descrição`),ag()(),Tl(1212,`tr`,16)(1213,`td`,17)(1214,`div`,18)(1215,`span`,19),cN(1216,` action`),Gl(1217,`br`),ag()()(),Tl(1218,`td`,20)(1219,`code`,35),cN(1220,`Function`),ag()(),Tl(1221,`td`,23)(1222,`em`)(1223,`strong`),cN(1224,`(opcional)`),ag()(),Tl(1225,`p`),cN(1226,`Ação a ser executada.`),ag()()(),Tl(1227,`tr`,16)(1228,`td`,17)(1229,`div`,18)(1230,`span`,19),cN(1231,` advancedAction`),Gl(1232,`br`),ag()()(),Tl(1233,`td`,20)(1234,`code`,35),cN(1235,`Function`),ag()(),Tl(1236,`td`,23)(1237,`em`)(1238,`strong`),cN(1239,`(opcional)`),ag()(),Tl(1240,`p`),cN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Tl(1242,`em`),cN(1243,`click`),ag(),cN(1244,` através do rótulo `),Tl(1245,`strong`),cN(1246,`Busca Avançada`),ag(),cN(1247,`.`),ag()()(),Tl(1248,`tr`,16)(1249,`td`,17)(1250,`div`,18)(1251,`span`,19),cN(1252,` placeholder`),Gl(1253,`br`),ag()()(),Tl(1254,`td`,20)(1255,`code`,25),cN(1256,`string`),ag()(),Tl(1257,`td`,23)(1258,`em`)(1259,`strong`),cN(1260,`(opcional)`),ag()(),Tl(1261,`p`),cN(1262,`Texto de instrução exibido dentro do campo de filtro.`),ag()()(),Tl(1263,`tr`,16)(1264,`td`,17)(1265,`div`,18)(1266,`span`,19),cN(1267,` width`),Gl(1268,`br`),ag()()(),Tl(1269,`td`,20)(1270,`code`,45),cN(1271,`number`),ag()(),Tl(1272,`td`,23)(1273,`em`)(1274,`strong`),cN(1275,`(opcional)`),ag()(),Tl(1276,`p`),cN(1277,`Tamanho do filtro em tela, utilizando o `),Tl(1278,`em`),cN(1279,`Grid System`),ag(),cN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),ag()()()(),Tl(1281,`h4`,34)(1282,`code`,5),cN(1283,`PoPageListLiterals`),ag()(),Tl(1284,`div`,2)(1285,`p`),cN(1286,`Interface para definição das literais usadas no `),Tl(1287,`code`),cN(1288,`po-page-list`),ag(),cN(1289,`.`),ag()(),Tl(1290,`h4`,12),cN(1291,`Propriedades`),ag(),Tl(1292,`table`,13)(1293,`tr`,14)(1294,`th`,15),cN(1295,`Nome`),ag(),Tl(1296,`th`,15),cN(1297,`Tipo`),ag(),Tl(1298,`th`,15),cN(1299,`Descrição`),ag()(),Tl(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),cN(1304,` otherActions`),Gl(1305,`br`),ag()()(),Tl(1306,`td`,20)(1307,`code`,25),cN(1308,`string`),ag()(),Tl(1309,`td`,23)(1310,`em`)(1311,`strong`),cN(1312,`(opcional)`),ag()(),Tl(1313,`p`),cN(1314,`Legenda do `),Tl(1315,`code`),cN(1316,`po-dropdown`),ag(),cN(1317,` de ações.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return s})();var Ge=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(w(Xn),w(Cn))};static ɵcmp=Un({type:s,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-page-list-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-page-list-basic-view`)(6,`sample-po-page-list-labs-view`)(7,`sample-po-page-list-hiring-processes-view`),ag()()()),r&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ee,fe,xe,ve],encapsulation:2,changeDetection:1})}return s})()}];var ye=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[bL.forChild(Ge),bL]})}return s})();var vt=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=he({type:s});static ɵinj=ue({imports:[ar,ye]})}return s})();export{vt as DocPoPageListModule};