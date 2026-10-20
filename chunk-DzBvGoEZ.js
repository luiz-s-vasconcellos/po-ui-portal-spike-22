import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,K as K3,Ki as px,Kn as Ag,Pi as mt,Pr as R,Qt as ea,Ri as nu,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,fa as we$1,ga as xx,i as _a,ir as EF,ji as mO,lt as Rl,mi as gO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(r,i){r&1&&nu(0,`po-page-default`,0)},dependencies:[Kze],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Default Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-default-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Le,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return a})();var Be=()=>({});function Fe(a,ke){if(a&1){let p=Sx();jc(0,`po-input`,37),JN(),ob(`ngModelChange`,function(i){y_(p);let m=xx(2);return sO(m.helperFooterLabel,i)||(m.helperFooterLabel=i),v_(i)}),wg()}if(a&2){let p=xx(2);ib(`ngModel`,p.helperFooterLabel),t0()}}function Oe(a,ke){if(a&1){let p=Sx();jc(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),JN(),ob(`ngModelChange`,function(i){y_(p);let m=xx();return sO(m.helperTitle,i)||(m.helperTitle=i),v_(i)}),wg(),jc(3,`po-input`,34),JN(),ob(`ngModelChange`,function(i){y_(p);let m=xx();return sO(m.helperContent,i)||(m.helperContent=i),v_(i)}),wg()(),jc(4,`div`,6)(5,`po-radio-group`,35),JN(),mt(`ngModelChange`,function(i){y_(p);let m=xx();return v_(m.helperType=i)}),wg()(),jc(6,`div`,6),px(7,Fe,1,1,`po-input`,36),wg()()}if(a&2){let p=xx();rg(2),ib(`ngModel`,p.helperTitle),t0(),rg(),ib(`ngModel`,p.helperContent),t0(),rg(2),jE(`p-columns`,4)(`ngModel`,p.helperType)(`p-options`,p.helperTypeOptions),t0(),rg(2),mx(p.helperType===`help`?7:-1)}}var ve=(()=>{class a{poNotification=p(zu);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let p={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(p.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),p}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(p){let r$1=s(r({},p),{visible:p.visible!==void 0?p.visible:!0,disabled:p.disabled!==void 0?p.disabled:!1});r$1.action=r$1.action?this.showAction.bind(this,r$1.action):void 0,this.actions=[...this.actions,r$1],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Sx();jc(0,`po-page-default`,5),mt(`p-back`,function(){return i.onBack()}),wg(),nu(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.title,l)||(i.title=l),v_(l)}),wg(),jc(6,`po-input`,8),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.subtitle,l)||(i.subtitle=l),v_(l)}),wg(),jc(7,`po-checkbox`,9),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.showHelper,l)||(i.showHelper=l),v_(l)}),wg(),jc(8,`po-checkbox`,10),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.showRefresh,l)||(i.showRefresh=l),v_(l)}),wg(),px(9,Oe,8,6,`po-widget`,11),jc(10,`po-select`,12),JN(),mt(`ngModelChange`,function(l){return i.pageHeaderType=l}),wg(),jc(11,`po-select`,13),JN(),mt(`ngModelChange`,function(l){return i.pageActionsLayout=l}),wg(),jc(12,`po-input`,14),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.literals,l)||(i.literals=l),v_(l)}),mt(`p-change`,function(){return i.changeLiterals()}),wg(),jc(13,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.componentsSize,l)||(i.componentsSize=l),v_(l)}),wg()()(),nu(14,`po-divider`),jc(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.action.label,l)||(i.action.label=l),v_(l)}),wg(),jc(20,`po-input`,18),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.action.action,l)||(i.action.action=l),v_(l)}),wg(),jc(21,`po-input`,19),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.action.url,l)||(i.action.url=l),v_(l)}),wg(),jc(22,`po-select`,20),JN(),mt(`ngModelChange`,function(l){return i.action.type=l}),wg(),jc(23,`po-select`,21),JN(),mt(`ngModelChange`,function(l){return i.action.icon=l}),wg(),jc(24,`po-select`,22),JN(),mt(`ngModelChange`,function(l){return i.action.kind=l}),wg(),jc(25,`po-checkbox-group`,23),JN(),mt(`ngModelChange`,function(l){return i.action=l}),wg()(),jc(26,`div`,6)(27,`po-button`,24),mt(`p-click`,function(){return i.addAction(i.action)}),wg()()()(),nu(28,`po-divider`),jc(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),v_(l)}),wg()()(),jc(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),v_(l)}),wg(),jc(37,`po-input`,27),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),v_(l)}),wg()(),jc(38,`div`,6)(39,`po-button`,28),mt(`p-click`,function(){return i.addBreadcrumbItem()}),wg()()(),nu(40,`po-divider`),jc(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),v_(l)}),wg(),jc(45,`po-input`,30),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),v_(l)}),wg()(),jc(46,`div`,6)(47,`po-button`,31),mt(`p-click`,function(){return i.addBreadcrumbParam()}),wg()()(),nu(48,`po-divider`),jc(49,`div`,6)(50,`po-button`,32),mt(`p-click`,function(){return i.restore()}),wg()()}if(r&2){let m=Fx(17),c=Fx(34),l=Fx(42);jE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??gO(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),rg(5),ib(`ngModel`,i.title),t0(),rg(),ib(`ngModel`,i.subtitle),t0(),rg(),ib(`ngModel`,i.showHelper),t0(),rg(),ib(`ngModel`,i.showRefresh),t0(),rg(),mx(i.showHelper?9:-1),rg(),jE(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),t0(),rg(),jE(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),t0(),rg(),ib(`ngModel`,i.literals),t0(),rg(),ib(`ngModel`,i.componentsSize),jE(`p-columns`,4)(`p-options`,i.componentsSizeOptions),t0(),rg(6),ib(`ngModel`,i.action.label),t0(),rg(),ib(`ngModel`,i.action.action),t0(),rg(),ib(`ngModel`,i.action.url),t0(),rg(),jE(`ngModel`,i.action.type)(`p-options`,i.typeOptions),t0(),rg(),jE(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),t0(),rg(),jE(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),t0(),rg(),jE(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),t0(),rg(2),jE(`p-disabled`,m.form.invalid),rg(5),ib(`ngModel`,i.breadcrumb.favorite),t0(),rg(4),ib(`ngModel`,i.breadcrumbItem.label),t0(),rg(),ib(`ngModel`,i.breadcrumbItem.link),t0(),rg(2),jE(`p-disabled`,c.invalid??!1),rg(5),ib(`ngModel`,i.breadcrumbParams.property),t0(),rg(),ib(`ngModel`,i.breadcrumbParams.value),t0(),rg(2),jE(`p-disabled`,l.invalid??!1)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,Rl,A5,Ote,moe,Kze,Noe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Default Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-refresh]="showRefresh ? onRefresh : null"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
    </po-checkbox>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showRefresh" [(ngModel)]="showRefresh" p-label="Refresh">
    </po-checkbox>

    @if (showHelper) {
      <po-widget class="po-md-12 po-pb-3" p-title="Helper">
        <div class="po-row">
          <po-input class="po-md-6" name="helperTitle" [(ngModel)]="helperTitle" p-clean p-label="Title"> </po-input>

          <po-input
            class="po-md-6"
            name="helperContent"
            [(ngModel)]="helperContent"
            p-clean
            p-label="Content"
            p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
          >
          </po-input>
        </div>

        <div class="po-row">
          <po-radio-group
            name="helperType"
            class="po-md-12"
            [p-columns]="4"
            p-label="Type"
            [ngModel]="helperType"
            (ngModelChange)="helperType = $event"
            [p-options]="helperTypeOptions"
          >
          </po-radio-group>
        </div>

        <div class="po-row">
          @if (helperType === 'help') {
            <po-input
              class="po-md-6"
              name="helperFooterLabel"
              [(ngModel)]="helperFooterLabel"
              p-clean
              p-label="Footer Action"
            >
            </po-input>
          }
        </div>
      </po-widget>
    }

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [ngModel]="pageHeaderType"
      (ngModelChange)="pageHeaderType = $event"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [ngModel]="pageActionsLayout"
      (ngModelChange)="pageActionsLayout = $event"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
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
      [p-columns]="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<po-widget p-title="Action">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-lg-3 po-md-6"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="kind"
        [ngModel]="action.kind"
        (ngModelChange)="action.kind = $event"
        p-label="Kind"
        [p-options]="actionKindOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [ngModel]="action"
        (ngModelChange)="action = $event"
        [p-columns]="4"
        [p-indeterminate]="true"
        p-label="Properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-2 po-md-4"
        p-label="Add Action"
        [p-disabled]="formAction.form.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider></po-divider>

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
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
      [p-disabled]="formBreadcrumbItems.invalid ?? false"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

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
      [p-disabled]="formBreadcrumbParams.invalid ?? false"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoHelperOptions,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

interface EditableAction extends PoPageAction {
  visible: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: EditableAction = { label: '', visible: true, disabled: false };
  actions: Array<EditableAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: '', link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  helperContent: string = '';
  helperFooterLabel: string = '';
  helperTitle: string = '';
  helperType: 'help' | 'info' = 'info';
  showHelper: boolean = false;
  showRefresh: boolean = false;

  public readonly helperTypeOptions: Array<PoSelectOption> = [
    { label: 'help', value: 'help' },
    { label: 'info', value: 'info' }
  ];

  get helper(): PoHelperOptions | undefined {
    if (!this.showHelper || !this.helperContent) {
      return undefined;
    }
    const options: PoHelperOptions = {
      title: this.helperTitle,
      content: this.helperContent,
      type: this.helperType
    };
    if (this.helperType === 'help' && this.helperFooterLabel) {
      options.footerAction = {
        label: this.helperFooterLabel,
        action: () => this.poNotification.information('Footer action clicked')
      };
    }
    return options;
  }

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

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

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: EditableAction) {
    const newAction: EditableAction = {
      ...action,
      visible: action.visible !== undefined ? action.visible : true,
      disabled: action.disabled !== undefined ? action.disabled : false
    };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: '', link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {
      [this.breadcrumbParams.property || '']: this.breadcrumbParams.value
    };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  onRefresh = (): void => {
    this.poNotification.success('Page refreshed (p-refresh event)');
  };

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: '', link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.helperContent = '';
    this.helperFooterLabel = '';
    this.helperTitle = '';
    this.helperType = 'info';
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.showHelper = false;
    this.showRefresh = false;
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true,
      disabled: false
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-default-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ve,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ve],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Re=[`formShare`];var Pe=(()=>{class a{poNotification=p(zu);sampleDashboardService=p(oe);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(r,i){if(r&1&&iu(Re,7)(ea,7),r&2){let m;vo(m=_o())&&(i.formShare=m.first),vo(m=_o())&&(i.poModal=m.first)}},standalone:!1,features:[we$1([oe])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Sx();jc(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),iO(4,`540`),wg(),jc(5,`div`,5),iO(6,`www.po.com.br`),wg()(),jc(7,`po-widget`,6)(8,`div`,4),iO(9,`300 views`),wg(),jc(10,`div`,5),iO(11,`https://po-ui.io`),wg()(),jc(12,`po-widget`,7)(13,`div`,4),iO(14,`Online`),wg(),jc(15,`div`,5),iO(16,`28 days`),wg()(),jc(17,`po-widget`,8)(18,`div`,4),iO(19,`266`),wg(),jc(20,`div`,5),iO(21,`@po-ui/ng-components - 1.10.1`),wg()(),jc(22,`po-widget`,9)(23,`div`,4),iO(24,`800 questions`),wg(),jc(25,`div`,5),iO(26,`https://devforum.po.com.br`),wg()(),jc(27,`po-widget`,10)(28,`div`,4),iO(29,`AngularJS - Angular 6`),wg(),jc(30,`div`,5),iO(31,`Angular 6 most downloaded`),wg()()(),nu(32,`po-divider`)(33,`po-table`,11),wg(),jc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.email,l)||(i.email=l),v_(l)}),wg()()()}r&2&&(jE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),rg(33),jE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),rg(),jE(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),rg(3),ib(`ngModel`,i.email),t0())},dependencies:[wK,CK,EK,TF,EF,Lf,K3,ea,Kze,I5,Noe],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Default - Dashboard`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default
  p-title="Dashboard"
  p-subtitle="Website analytics overview"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-helper]="helper"
>
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoHelperOptions,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  columns!: Array<PoTableColumn>;
  email: string = '';
  isSubscribed: boolean = false;
  items!: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly helper: PoHelperOptions = {
    title: 'Dashboard Info',
    content: 'View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.',
    type: 'info'
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),iO(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),wg(),jc(29,`pre`,11),iO(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-page-default-dashboard`),wg(),nu(33,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ze,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(p){this.poNotification=p}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(p=>s(r({},p),{quantity:p.quantity+Math.floor(Math.random()*10),status:this.getStatus(p.quantity+Math.floor(Math.random()*10))}))}getStatus(p){return p===0?`Out of stock`:p<=5?`Low stock`:`Available`}static ɵfac=function(r){return new(r||a)(b(zu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0),nu(1,`po-table`,1),wg()),r&2&&(jE(`p-refresh`,i.onRefresh),rg(),jE(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[Kze,I5],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Default - Refresh`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-refresh',
  templateUrl: './sample-po-page-default-refresh.component.html',
  standalone: false
})
export class SamplePoPageDefaultRefreshComponent implements OnInit {
  columns: Array<PoTableColumn> = [];
  items: Array<any> = [];
  loading: boolean = false;

  private readonly allItems: Array<any> = [
    { id: 1, product: 'Notebook Pro', quantity: 12, price: 4599.9, status: 'Available' },
    { id: 2, product: 'Wireless Mouse', quantity: 85, price: 129.9, status: 'Available' },
    { id: 3, product: 'Mechanical Keyboard', quantity: 34, price: 459.9, status: 'Available' },
    { id: 4, product: 'Monitor 27"', quantity: 7, price: 2199.9, status: 'Low stock' },
    { id: 5, product: 'USB-C Hub', quantity: 0, price: 249.9, status: 'Out of stock' },
    { id: 6, product: 'Webcam HD', quantity: 23, price: 349.9, status: 'Available' },
    { id: 7, product: 'Headset Bluetooth', quantity: 41, price: 599.9, status: 'Available' },
    { id: 8, product: 'External SSD 1TB', quantity: 3, price: 689.9, status: 'Low stock' }
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.loadItems();
  }

  onRefresh = (): void => {
    this.loading = true;

    setTimeout(() => {
      this.refreshItems();
      this.loading = false;
      this.poNotification.success('Inventory data refreshed successfully.');
    }, 1000);
  };

  private getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'ID', width: '60px' },
      { property: 'product', label: 'Product' },
      { property: 'quantity', label: 'Quantity', width: '100px' },
      { property: 'price', label: 'Price', type: 'currency', format: 'BRL', width: '140px' },
      {
        property: 'status',
        label: 'Status',
        type: 'label',
        width: '130px',
        labels: [
          { value: 'Available', color: 'color-10', label: 'Available' },
          { value: 'Low stock', color: 'color-08', label: 'Low stock' },
          { value: 'Out of stock', color: 'color-07', label: 'Out of stock' }
        ]
      }
    ];
  }

  private loadItems(): void {
    this.items = [...this.allItems];
  }

  private refreshItems(): void {
    this.items = this.allItems.map(item => ({
      ...item,
      quantity: item.quantity + Math.floor(Math.random() * 10),
      status: this.getStatus(item.quantity + Math.floor(Math.random() * 10))
    }));
  }

  private getStatus(quantity: number): string {
    if (quantity === 0) {
      return 'Out of stock';
    }
    return quantity <= 5 ? 'Low stock' : 'Available';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-default-refresh`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ue,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,we],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1378,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-h4`,`docs-api-class-name`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),iO(8,`po-page-default`),wg(),iO(9,`, `),jc(10,`code`),iO(11,`po-page-detail`),wg(),iO(12,`,
`),jc(13,`code`),iO(14,`po-page-edit`),wg(),iO(15,`, `),jc(16,`code`),iO(17,`po-page-list`),wg(),iO(18,` e `),jc(19,`code`),iO(20,`po-page-slide`),wg(),iO(21,`.`),wg()(),jc(22,`h3`,3),iO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),iO(26,`PoPageDefaultComponent`),wg()(),jc(27,`div`,2)(28,`p`),iO(29,`O `),jc(30,`code`),iO(31,`po-page-default`),wg(),iO(32,` é utilizado como container principal para telas sem um template definido.`),wg(),jc(33,`p`),iO(34,`Oferece suporte a cabeçalhos dinâmicos via `),jc(35,`code`),iO(36,`p-page-header-type`),wg(),iO(37,`, navegação por `),jc(38,`em`),iO(39,`breadcrumb`),wg(),iO(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),jc(41,`code`),iO(42,`p-page-actions-layout`),wg(),iO(43,`.`),wg(),jc(44,`h4`),iO(45,`Tokens customizáveis`),wg(),jc(46,`blockquote`)(47,`p`),iO(48,`Para maiores informações, acesse o guia `),jc(49,`a`,6),iO(50,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(51,`.`),wg()(),jc(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),iO(56,`Propriedade`),wg(),jc(57,`th`),iO(58,`Descrição`),wg(),jc(59,`th`),iO(60,`Valor Padrão`),wg()()(),jc(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),iO(65,`Página (po-page-default)`),wg()(),nu(66,`td`)(67,`td`),wg(),jc(68,`tr`)(69,`td`)(70,`code`),iO(71,`--background`),wg()(),jc(72,`td`),iO(73,`Background da página (header e body)`),wg(),jc(74,`td`)(75,`code`),iO(76,`var(--color-page-background-color-page)`),wg()()(),jc(77,`tr`)(78,`td`)(79,`strong`),iO(80,`Header (po-page-header)`),wg()(),nu(81,`td`)(82,`td`),wg(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--padding`),wg()(),jc(87,`td`),iO(88,`Espaçamento do header`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--gap`),wg()(),jc(96,`td`),iO(97,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--spacing-md)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--gap-actions`),wg()(),jc(105,`td`),iO(106,`Espaçamento entre as ações`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--spacing-xs)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`strong`),iO(113,`Header (po-page-header .po-page-header-title)`),wg()(),nu(114,`td`)(115,`td`),wg(),jc(116,`tr`)(117,`td`)(118,`code`),iO(119,`--font-family`),wg()(),jc(120,`td`),iO(121,`Família tipográfica do título`),wg(),jc(122,`td`)(123,`code`),iO(124,`var(--font-family-theme)`),wg()()(),jc(125,`tr`)(126,`td`)(127,`strong`),iO(128,`Content (po-page-content)`),wg()(),nu(129,`td`)(130,`td`),wg(),jc(131,`tr`)(132,`td`)(133,`code`),iO(134,`--padding-content`),wg()(),jc(135,`td`),iO(136,`Espaçamento do conteúdo`),wg(),jc(137,`td`)(138,`code`),iO(139,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(140,`div`,7)(141,`h4`,8),iO(142,`Seletor`),wg(),jc(143,`pre`,9),iO(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-helper="PoHelperOptions | string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-refresh="Function"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),wg()(),jc(145,`h4`,10),iO(146,`Propriedades`),wg(),jc(147,`table`,11)(148,`tr`,12)(149,`th`,13),iO(150,`Nome`),wg(),jc(151,`th`,13),iO(152,`Tipo`),wg(),jc(153,`th`,13),iO(154,`Padrão`),wg(),jc(155,`th`,13),iO(156,`Descrição`),wg()(),jc(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),iO(161,` p-actions`),nu(162,`br`),wg()()(),jc(163,`td`,18)(164,`code`,19),iO(165,`Array<PoPageAction>`),wg()(),jc(166,`td`,20)(167,`p`)(168,`code`),iO(169,`[]`),wg()()(),jc(170,`td`,21)(171,`em`)(172,`strong`),iO(173,`(opcional)`),wg()(),jc(174,`p`),iO(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),wg(),jc(176,`p`),iO(177,`Recebe um array de objetos que implementam a interface `),jc(178,`code`),iO(179,`PoPageAction`),wg(),iO(180,`.`),wg(),jc(181,`blockquote`)(182,`p`),iO(183,`O comportamento de exibição pode ser customizado através da propriedade `),jc(184,`code`),iO(185,`p-page-actions-layout`),wg(),iO(186,`.`),wg()()()(),jc(187,`tr`,14)(188,`td`,15)(189,`div`,22)(190,`span`,23),iO(191,` (p-back)`),nu(192,`br`),wg()()(),jc(193,`td`,18)(194,`code`,24),iO(195,`EventEmitter`),wg()(),jc(196,`td`,20),iO(197,`-`),wg(),jc(198,`td`,21)(199,`em`)(200,`strong`),iO(201,`(opcional)`),wg()(),jc(202,`p`),iO(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),wg(),jc(204,`blockquote`)(205,`p`),iO(206,`Botão exibido apenas quando a propriedade `),jc(207,`code`),iO(208,`p-page-header-type`),wg(),iO(209,` está configurada como `),jc(210,`code`),iO(211,`secondary`),wg(),iO(212,`.`),wg()()()(),jc(213,`tr`,14)(214,`td`,15)(215,`div`,16)(216,`span`,17),iO(217,` p-breadcrumb`),nu(218,`br`),wg()()(),jc(219,`td`,18)(220,`code`,25),iO(221,`PoBreadcrumb`),wg()(),jc(222,`td`,20),iO(223,`-`),wg(),jc(224,`td`,21)(225,`em`)(226,`strong`),iO(227,`(opcional)`),wg()(),jc(228,`p`),iO(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),wg(),jc(230,`p`),iO(231,`Recebe um objeto que implementa a interface `),jc(232,`code`),iO(233,`PoBreadcrumb`),wg(),iO(234,`.`),wg(),jc(235,`blockquote`)(236,`p`),iO(237,`Compatível com o cabeçalho (`),jc(238,`code`),iO(239,`p-page-header-type`),wg(),iO(240,`) do tipo `),jc(241,`code`),iO(242,`primary`),wg(),iO(243,`.`),wg()()()(),jc(244,`tr`,14)(245,`td`,15)(246,`div`,16)(247,`span`,17),iO(248,` p-components-size`),nu(249,`br`),wg()()(),jc(250,`td`,18)(251,`code`,26),iO(252,`string`),wg()(),jc(253,`td`,20)(254,`p`)(255,`code`),iO(256,`medium`),wg()()(),jc(257,`td`,21)(258,`em`)(259,`strong`),iO(260,`(opcional)`),wg()(),jc(261,`p`),iO(262,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(263,`ul`)(264,`li`)(265,`code`),iO(266,`small`),wg(),iO(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(268,`li`)(269,`code`),iO(270,`medium`),wg(),iO(271,`: aplica a medida medium de cada componente.`),wg()(),jc(272,`blockquote`)(273,`p`),iO(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(275,`code`),iO(276,`medium`),wg(),iO(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(278,`a`,27),iO(279,`po-theme`),wg(),iO(280,`.`),wg()()()(),jc(281,`tr`,14)(282,`td`,15)(283,`div`,16)(284,`span`,17),iO(285,` p-helper`),nu(286,`br`),wg()()(),jc(287,`td`,18)(288,`code`,28),iO(289,`PoHelperOptions `),wg(),jc(290,`code`,26),iO(291,` string`),wg()(),jc(292,`td`,20)(293,`p`)(294,`code`),iO(295,`info`),wg()()(),jc(296,`td`,21)(297,`em`)(298,`strong`),iO(299,`(opcional)`),wg()(),jc(300,`p`),iO(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),wg(),jc(302,`p`),iO(303,`Quando não houver subtítulo (`),jc(304,`code`),iO(305,`p-subtitle`),wg(),iO(306,`), o po-helper será exibido logo abaixo do título.`),wg(),jc(307,`p`),iO(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),jc(309,`code`),iO(310,`PoHelperOptions`),wg(),iO(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),wg(),jc(312,`p`),iO(313,`Exemplo de uso:`),wg(),jc(314,`pre`)(315,`code`,29),iO(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),wg()()()(),jc(317,`tr`,14)(318,`td`,15)(319,`div`,16)(320,`span`,17),iO(321,` p-literals`),nu(322,`br`),wg()()(),jc(323,`td`,18)(324,`code`,30),iO(325,`PoPageDefaultLiterals`),wg()(),jc(326,`td`,20),iO(327,`-`),wg(),jc(328,`td`,21)(329,`em`)(330,`strong`),iO(331,`(opcional)`),wg()(),jc(332,`p`),iO(333,`Permite a customização das literais utilizadas no componente.`),wg(),jc(334,`p`),iO(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),jc(336,`code`),iO(337,`PoPageDefaultLiterals`),wg(),iO(338,`.`),wg(),jc(339,`p`),iO(340,`Exemplo de uso:`),wg(),jc(341,`pre`)(342,`code`,29),iO(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),wg()(),jc(344,`pre`)(345,`code`,31),iO(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),wg()(),jc(347,`blockquote`)(348,`p`),iO(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(350,`a`,32)(351,`code`),iO(352,`PoI18nService`),wg()(),iO(353,` ou navegador.`),wg()()()(),jc(354,`tr`,14)(355,`td`,15)(356,`div`,16)(357,`span`,17),iO(358,` p-page-actions-layout`),nu(359,`br`),wg()()(),jc(360,`td`,18)(361,`code`,26),iO(362,`string`),wg()(),jc(363,`td`,20)(364,`p`)(365,`code`),iO(366,`default`),wg()()(),jc(367,`td`,21)(368,`em`)(369,`strong`),iO(370,`(opcional)`),wg()(),jc(371,`p`),iO(372,`Define o layout de exibição das ações no cabeçalho.`),wg(),jc(373,`p`),iO(374,`Aceita valores do enum `),jc(375,`code`),iO(376,`PoPageActionsLayout`),wg(),iO(377,`.`),wg(),jc(378,`blockquote`)(379,`p`),iO(380,`Em telas reduzidas (< 480px) as ações fora do `),jc(381,`em`),iO(382,`dropdown`),wg(),iO(383,` que possuam a propriedade `),jc(384,`code`),iO(385,`PoPageAction.icon`),wg(),iO(386,` definida
exibir\xE3o apenas o \xEDcone.`),wg()()()(),jc(387,`tr`,14)(388,`td`,15)(389,`div`,16)(390,`span`,17),iO(391,` p-page-header-type`),nu(392,`br`),wg()()(),jc(393,`td`,18)(394,`code`,26),iO(395,`string`),wg()(),jc(396,`td`,20)(397,`p`)(398,`code`),iO(399,`primary`),wg()()(),jc(400,`td`,21)(401,`em`)(402,`strong`),iO(403,`(opcional)`),wg()(),jc(404,`p`),iO(405,`Define o tipo de cabeçalho da página.`),wg(),jc(406,`p`),iO(407,`Aceita valores do enum `),jc(408,`code`),iO(409,`PoPageHeaderType`),wg(),iO(410,`.`),wg()()(),jc(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),iO(415,` p-refresh`),nu(416,`br`),wg()()(),jc(417,`td`,18)(418,`code`,33),iO(419,`Function`),wg()(),jc(420,`td`,20),iO(421,`-`),wg(),jc(422,`td`,21)(423,`em`)(424,`strong`),iO(425,`(opcional)`),wg()(),jc(426,`p`),iO(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),wg(),jc(428,`p`),iO(429,`Quando não houver subtítulo (`),jc(430,`code`),iO(431,`p-subtitle`),wg(),iO(432,`), o refresh será exibido logo abaixo do título.`),wg(),jc(433,`blockquote`)(434,`p`),iO(435,`Esta propriedade possui precedência sobre a configuração de `),jc(436,`code`),iO(437,`p-helper`),wg(),iO(438,`.`),wg()(),jc(439,`p`),iO(440,`Exemplo de uso:`),wg(),jc(441,`pre`)(442,`code`,29),iO(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),wg()()()(),jc(444,`tr`,14)(445,`td`,15)(446,`div`,16)(447,`span`,17),iO(448,` p-subtitle`),nu(449,`br`),wg()()(),jc(450,`td`,18)(451,`code`,26),iO(452,`string`),wg()(),jc(453,`td`,20),iO(454,`-`),wg(),jc(455,`td`,21)(456,`em`)(457,`strong`),iO(458,`(opcional)`),wg()(),jc(459,`p`),iO(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),wg(),jc(461,`p`),iO(462,`Suporta formatação básica com as tags `),jc(463,`code`),iO(464,`<b>`),wg(),iO(465,` (negrito), `),jc(466,`code`),iO(467,`<strong>`),wg(),iO(468,` (negrito), `),jc(469,`code`),iO(470,`<i>`),wg(),iO(471,` (itálico), `),jc(472,`code`),iO(473,`<em>`),wg(),iO(474,` (it\xE1lico) e
`),jc(475,`code`),iO(476,`<u>`),wg(),iO(477,` (sublinhado).`),wg(),jc(478,`p`),iO(479,`Exemplo:`),wg(),jc(480,`pre`)(481,`code`,31),iO(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),wg()(),jc(483,`blockquote`)(484,`p`),iO(485,`Requer que `),jc(486,`code`),iO(487,`p-title`),wg(),iO(488,` esteja definido.`),wg()()()(),jc(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),iO(493,` p-title`),nu(494,`br`),wg()()(),jc(495,`td`,18)(496,`code`,26),iO(497,`string`),wg()(),jc(498,`td`,20),iO(499,`-`),wg(),jc(500,`td`,21)(501,`em`)(502,`strong`),iO(503,`(opcional)`),wg()(),jc(504,`p`),iO(505,`Define o título principal da página.`),wg()()()(),jc(506,`h3`),iO(507,`Interfaces`),wg(),jc(508,`h4`,34)(509,`code`,5),iO(510,`PoBreadcrumbItem`),wg()(),jc(511,`div`,2)(512,`p`),iO(513,`Interface que define cada item do componente `),jc(514,`strong`),iO(515,`po-breadcrumb`),wg(),iO(516,`.`),wg()(),jc(517,`h4`,10),iO(518,`Propriedades`),wg(),jc(519,`table`,11)(520,`tr`,12)(521,`th`,13),iO(522,`Nome`),wg(),jc(523,`th`,13),iO(524,`Tipo`),wg(),jc(525,`th`,13),iO(526,`Descrição`),wg()(),jc(527,`tr`,14)(528,`td`,15)(529,`div`,16)(530,`span`,17),iO(531,` action`),nu(532,`br`),wg()()(),jc(533,`td`,18)(534,`code`,33),iO(535,`Function`),wg()(),jc(536,`td`,21)(537,`em`)(538,`strong`),iO(539,`(opcional)`),wg()(),jc(540,`p`),iO(541,`Ação executada ao clicar no item.`),wg(),jc(542,`blockquote`)(543,`p`),iO(544,`A função atribuída a esta propriedade receberá o `),jc(545,`em`),iO(546,`label`),wg(),iO(547,` do item como parâmetro para execução.`),wg()()()(),jc(548,`tr`,14)(549,`td`,15)(550,`div`,16)(551,`span`,17),iO(552,` label`),nu(553,`br`),wg()()(),jc(554,`td`,18)(555,`code`,26),iO(556,`string`),wg()(),jc(557,`td`,21)(558,`p`),iO(559,`Rótulo do item.`),wg()()(),jc(560,`tr`,14)(561,`td`,15)(562,`div`,16)(563,`span`,17),iO(564,` link`),nu(565,`br`),wg()()(),jc(566,`td`,18)(567,`code`,26),iO(568,`string`),wg()(),jc(569,`td`,21)(570,`em`)(571,`strong`),iO(572,`(opcional)`),wg()(),jc(573,`p`),iO(574,`Url do item.`),wg(),jc(575,`blockquote`)(576,`p`),iO(577,`Caso o item também contenha uma `),jc(578,`em`),iO(579,`action`),wg(),iO(580,` definida, a preferência de execução será do `),jc(581,`em`),iO(582,`link`),wg(),iO(583,`.`),wg()(),jc(584,`blockquote`)(585,`p`),iO(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(587,`strong`)(588,`a`,35),iO(589,`Veja um exemplo de como criar rotas aqui`),wg()(),iO(590,`.`),wg()(),jc(591,`blockquote`)(592,`p`),iO(593,`Esta propriedade é necessária para que a propriedade `),jc(594,`code`),iO(595,`p-favorite-service`),wg(),iO(596,` consiga favoritar ou desfavoritar.`),wg()()()()(),jc(597,`h4`,34)(598,`code`,5),iO(599,`PoBreadcrumb`),wg()(),jc(600,`div`,2)(601,`p`),iO(602,`Interface que define o `),jc(603,`code`),iO(604,`po-breadcrumb`),wg(),iO(605,`.`),wg()(),jc(606,`h4`,10),iO(607,`Propriedades`),wg(),jc(608,`table`,11)(609,`tr`,12)(610,`th`,13),iO(611,`Nome`),wg(),jc(612,`th`,13),iO(613,`Tipo`),wg(),jc(614,`th`,13),iO(615,`Descrição`),wg()(),jc(616,`tr`,14)(617,`td`,15)(618,`div`,16)(619,`span`,17),iO(620,` favorite`),nu(621,`br`),wg()()(),jc(622,`td`,18)(623,`code`,26),iO(624,`string`),wg()(),jc(625,`td`,21)(626,`em`)(627,`strong`),iO(628,`(opcional)`),wg()(),jc(629,`p`),iO(630,`Permite definir uma URL para favoritar ou desfavoritar.`),wg(),jc(631,`blockquote`)(632,`p`),iO(633,`Para maiores informações verificar a propriedade `),jc(634,`code`),iO(635,`p-favorite-service`),wg(),iO(636,` do componente `),jc(637,`code`),iO(638,`po-breadcrumb`),wg(),iO(639,`.`),wg()()()(),jc(640,`tr`,14)(641,`td`,15)(642,`div`,16)(643,`span`,17),iO(644,` items`),nu(645,`br`),wg()()(),jc(646,`td`,18)(647,`code`,36),iO(648,`Array<PoBreadcrumbItem>`),wg()(),jc(649,`td`,21)(650,`p`),iO(651,`Lista de itens do `),jc(652,`em`),iO(653,`breadcrumb`),wg(),iO(654,`.`),wg(),jc(655,`p`)(656,`strong`),iO(657,`Exemplo:`),wg()(),jc(658,`pre`)(659,`code`),iO(660,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),iO(665,` params`),nu(666,`br`),wg()()(),jc(667,`td`,18)(668,`code`,37),iO(669,`object`),wg()(),jc(670,`td`,21)(671,`em`)(672,`strong`),iO(673,`(opcional)`),wg()(),jc(674,`p`),iO(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()()(),jc(676,`h4`,34)(677,`code`,5),iO(678,`PoHelperOptions`),wg()(),jc(679,`div`,2)(680,`p`),iO(681,`Interface para configuração das opções de ajuda (`),jc(682,`em`),iO(683,`helper`),wg(),iO(684,`).`),wg()(),jc(685,`h4`,10),iO(686,`Propriedades`),wg(),jc(687,`table`,11)(688,`tr`,12)(689,`th`,13),iO(690,`Nome`),wg(),jc(691,`th`,13),iO(692,`Tipo`),wg(),jc(693,`th`,13),iO(694,`Descrição`),wg()(),jc(695,`tr`,14)(696,`td`,15)(697,`div`,16)(698,`span`,17),iO(699,` content`),nu(700,`br`),wg()()(),jc(701,`td`,18)(702,`code`,26),iO(703,`string`),wg()(),jc(704,`td`,21)(705,`em`)(706,`strong`),iO(707,`(opcional)`),wg()(),jc(708,`p`),iO(709,`Texto explicativo exibido no popover.`),wg(),jc(710,`p`),iO(711,`Suporta formatação básica com as tags `),jc(712,`code`),iO(713,`<b>`),wg(),iO(714,` (negrito), `),jc(715,`code`),iO(716,`<strong>`),wg(),iO(717,` (negrito), `),jc(718,`code`),iO(719,`<i>`),wg(),iO(720,` (itálico), `),jc(721,`code`),iO(722,`<em>`),wg(),iO(723,` (it\xE1lico) e
`),jc(724,`code`),iO(725,`<u>`),wg(),iO(726,` (sublinhado).`),wg(),jc(727,`p`),iO(728,`Exemplo:`),wg(),jc(729,`pre`)(730,`code`,31),iO(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),wg()()()(),jc(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),iO(736,` eventOnClick`),nu(737,`br`),wg()()(),jc(738,`td`,18)(739,`code`,33),iO(740,`Function`),wg()(),jc(741,`td`,21)(742,`em`)(743,`strong`),iO(744,`(opcional)`),wg()(),jc(745,`p`),iO(746,`Evento disparado ao clicar no ícone do helper.`),wg(),jc(747,`p`),iO(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),wg(),jc(749,`p`),iO(750,`Pode ser uma função ou um `),jc(751,`code`),iO(752,`EventEmitter`),wg(),iO(753,`.`),wg(),jc(754,`p`),iO(755,`Exemplo:`),wg(),jc(756,`pre`)(757,`code`),iO(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),wg()()()(),jc(759,`tr`,14)(760,`td`,15)(761,`div`,16)(762,`span`,17),iO(763,` footerAction`),nu(764,`br`),wg()()(),jc(765,`td`,18)(766,`code`,38),iO(767,`{ label: string; action: Function;
}`),wg()(),jc(768,`td`,21)(769,`em`)(770,`strong`),iO(771,`(opcional)`),wg()(),jc(772,`p`),iO(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),jc(774,`code`),iO(775,`help`),wg(),iO(776,` e desconsiderada quando o type for `),jc(777,`code`),iO(778,`info`),wg(),iO(779,`.`),wg(),jc(780,`p`),iO(781,`Deve ser um objeto com as propriedades:`),wg(),jc(782,`ul`)(783,`li`)(784,`code`),iO(785,`label`),wg(),iO(786,`: Texto do botão.`),wg(),jc(787,`li`)(788,`code`),iO(789,`action`),wg(),iO(790,`: Função executada ao clicar no botão.`),wg()(),jc(791,`p`),iO(792,`Exemplo:`),wg(),jc(793,`pre`)(794,`code`,31),iO(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),wg()()()(),jc(796,`tr`,14)(797,`td`,15)(798,`div`,16)(799,`span`,17),iO(800,` title`),nu(801,`br`),wg()()(),jc(802,`td`,18)(803,`code`,26),iO(804,`string`),wg()(),jc(805,`td`,21)(806,`em`)(807,`strong`),iO(808,`(opcional)`),wg()(),jc(809,`p`),iO(810,`Título do helper exibido no popover.`),wg()()(),jc(811,`tr`,14)(812,`td`,15)(813,`div`,16)(814,`span`,17),iO(815,` type`),nu(816,`br`),wg()()(),jc(817,`td`,18)(818,`code`,39),iO(819,`'info' `),wg(),jc(820,`code`,40),iO(821,` 'help'`),wg()(),jc(822,`td`,21)(823,`em`)(824,`strong`),iO(825,`(opcional)`),wg()(),jc(826,`p`),iO(827,`Tipo do ícone exibido: `),jc(828,`code`),iO(829,`info`),wg(),iO(830,` ou `),jc(831,`code`),iO(832,`help`),wg(),iO(833,`.`),wg(),jc(834,`p`),iO(835,`Quando o valor é `),jc(836,`code`),iO(837,`info`),wg(),iO(838,`, o popover exibe apenas informações e não permite ações customizadas.`),wg(),jc(839,`p`),iO(840,`Quando o valor é `),jc(841,`code`),iO(842,`help`),wg(),iO(843,`, o popover pode exibir ações customizadas no rodapé.`),wg()()()(),jc(844,`h4`,34)(845,`code`,5),iO(846,`PoPageAction`),wg()(),jc(847,`div`,2)(848,`p`),iO(849,`Interface para as ações dos componentes `),jc(850,`code`),iO(851,`po-page-default`),wg(),iO(852,` e `),jc(853,`code`),iO(854,`po-page-list`),wg(),iO(855,`.`),wg(),jc(856,`p`),iO(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),jc(858,`em`),iO(859,`dropdown`),wg(),iO(860,`,
conforme o `),jc(861,`code`),iO(862,`PoPageActionsLayout`),wg(),iO(863,` e o tamanho da tela.`),wg(),jc(864,`blockquote`)(865,`p`),iO(866,`As propriedades `),jc(867,`code`),iO(868,`separator`),wg(),iO(869,`, `),jc(870,`code`),iO(871,`selected`),wg(),iO(872,` e `),jc(873,`code`),iO(874,`subItems`),wg(),iO(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),jc(876,`em`),iO(877,`dropdown`),wg(),iO(878,`.`),wg()()(),jc(879,`h4`,10),iO(880,`Propriedades`),wg(),jc(881,`table`,11)(882,`tr`,12)(883,`th`,13),iO(884,`Nome`),wg(),jc(885,`th`,13),iO(886,`Tipo`),wg(),jc(887,`th`,13),iO(888,`Descrição`),wg()(),jc(889,`tr`,14)(890,`td`,15)(891,`div`,16)(892,`span`,17),iO(893,` action`),nu(894,`br`),wg()()(),jc(895,`td`,18)(896,`code`,33),iO(897,`Function`),wg()(),jc(898,`td`,21)(899,`em`)(900,`strong`),iO(901,`(opcional)`),wg()(),jc(902,`p`),iO(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(904,`p`),iO(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(906,`code`),iO(907,`subItems`),wg(),iO(908,`.`),wg(),jc(909,`blockquote`)(910,`p`),iO(911,`Para que a função seja executada no contexto do componente, utilize `),jc(912,`em`),iO(913,`bind`),wg(),iO(914,`:
`),jc(915,`code`),iO(916,`action: this.myFunction.bind(this)`),wg()()()()(),jc(917,`tr`,14)(918,`td`,15)(919,`div`,16)(920,`span`,17),iO(921,` disabled`),nu(922,`br`),wg()()(),jc(923,`td`,18)(924,`code`,41),iO(925,`boolean `),wg(),jc(926,`code`,33),iO(927,` Function`),wg()(),jc(928,`td`,21)(929,`em`)(930,`strong`),iO(931,`(opcional)`),wg()(),jc(932,`p`),iO(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(934,`tr`,14)(935,`td`,15)(936,`div`,16)(937,`span`,17),iO(938,` icon`),nu(939,`br`),wg()()(),jc(940,`td`,18)(941,`code`,26),iO(942,`string `),wg(),jc(943,`code`,42),iO(944,` TemplateRef<void>`),wg()(),jc(945,`td`,21)(946,`em`)(947,`strong`),iO(948,`(opcional)`),wg()(),jc(949,`p`),iO(950,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(951,`p`),iO(952,`Aceita ícones da `),jc(953,`a`,43),iO(954,`Biblioteca de ícones`),wg(),iO(955,`, fontes externas (ex: Font Awesome)
ou um `),jc(956,`code`),iO(957,`TemplateRef`),wg(),iO(958,` para ícones customizados.`),wg(),jc(959,`pre`)(960,`code`),iO(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(962,`tr`,14)(963,`td`,15)(964,`div`,16)(965,`span`,17),iO(966,` kind`),nu(967,`br`),wg()()(),jc(968,`td`,18)(969,`code`,26),iO(970,`string`),wg()(),jc(971,`td`,21)(972,`em`)(973,`strong`),iO(974,`(opcional)`),wg()(),jc(975,`p`),iO(976,`Define o estilo visual da ação quando exibida como botão fora do `),jc(977,`em`),iO(978,`dropdown`),wg(),iO(979,`.`),wg(),jc(980,`p`),iO(981,`Valores permitidos:`),wg(),jc(982,`ul`)(983,`li`)(984,`code`),iO(985,`primary`),wg(),iO(986,`: botão com maior destaque visual.`),wg(),jc(987,`li`)(988,`code`),iO(989,`secondary`),wg(),iO(990,`: estilo padrão.`),wg()(),jc(991,`blockquote`)(992,`p`),iO(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),wg()(),jc(994,`blockquote`)(995,`p`),iO(996,`Somente uma ação pode ter `),jc(997,`code`),iO(998,`kind`),wg(),iO(999,` igual a `),jc(1e3,`code`),iO(1001,`primary`),wg(),iO(1002,`. Caso mais de uma defina `),jc(1003,`code`),iO(1004,`primary`),wg(),iO(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),jc(1006,`code`),iO(1007,`secondary`),wg(),iO(1008,`.`),wg()(),jc(1009,`blockquote`)(1010,`p`),iO(1011,`Quando não definido, o estilo é determinado pelo `),jc(1012,`code`),iO(1013,`PoPageActionsLayout`),wg(),iO(1014,`.`),wg()()()(),jc(1015,`tr`,14)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),iO(1019,` label`),nu(1020,`br`),wg()()(),jc(1021,`td`,18)(1022,`code`,26),iO(1023,`string`),wg()(),jc(1024,`td`,21)(1025,`p`),iO(1026,`Rótulo da ação.`),wg(),jc(1027,`p`),iO(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(1029,`code`),iO(1030,`subItems`),wg(),iO(1031,`.`),wg()()(),jc(1032,`tr`,14)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),iO(1036,` selected`),nu(1037,`br`),wg()()(),jc(1038,`td`,18)(1039,`code`,41),iO(1040,`boolean`),wg()(),jc(1041,`td`,21)(1042,`em`)(1043,`strong`),iO(1044,`(opcional)`),wg()(),jc(1045,`p`),iO(1046,`Define se a ação está selecionada.`),wg()()(),jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),iO(1051,` separator`),nu(1052,`br`),wg()()(),jc(1053,`td`,18)(1054,`code`,41),iO(1055,`boolean`),wg()(),jc(1056,`td`,21)(1057,`em`)(1058,`strong`),iO(1059,`(opcional)`),wg()(),jc(1060,`p`),iO(1061,`Atribui uma linha separadora acima do item.`),wg()()(),jc(1062,`tr`,14)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),iO(1066,` subItems`),nu(1067,`br`),wg()()(),jc(1068,`td`,18)(1069,`code`,44),iO(1070,`Array<PoPopupAction>`),wg()(),jc(1071,`td`,21)(1072,`em`)(1073,`strong`),iO(1074,`(opcional)`),wg()(),jc(1075,`p`),iO(1076,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(1077,`pre`)(1078,`code`),iO(1079,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(1080,`p`),iO(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(1082,`blockquote`)(1083,`p`),iO(1084,`As propriedades `),jc(1085,`code`),iO(1086,`disabled`),wg(),iO(1087,`, `),jc(1088,`code`),iO(1089,`type`),wg(),iO(1090,` e `),jc(1091,`code`),iO(1092,`visible`),wg(),iO(1093,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(1094,`blockquote`)(1095,`p`),iO(1096,`Quando `),jc(1097,`code`),iO(1098,`url`),wg(),iO(1099,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(1100,`blockquote`)(1101,`p`),iO(1102,`Em subníveis aninhados, o `),jc(1103,`code`),iO(1104,`icon`),wg(),iO(1105,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(1106,`tr`,14)(1107,`td`,15)(1108,`div`,16)(1109,`span`,17),iO(1110,` subItemsLazy`),nu(1111,`br`),wg()()(),jc(1112,`td`,18)(1113,`code`,45),iO(1114,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(1115,`td`,21)(1116,`em`)(1117,`strong`),iO(1118,`(opcional)`),wg()(),jc(1119,`p`),iO(1120,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(1121,`p`),iO(1122,`Recebe o item agrupador e retorna um `),jc(1123,`code`),iO(1124,`Observable<Array<PoPopupAction>>`),wg(),iO(1125,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(1126,`strong`),iO(1127,`apenas`),wg(),iO(1128,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(1129,`code`),iO(1130,`po-skeleton`),wg(),iO(1131,`
enquanto os dados s\xE3o carregados:`),wg(),jc(1132,`pre`)(1133,`code`),iO(1134,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(1135,`blockquote`)(1136,`p`),iO(1137,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(1138,`p`),iO(1139,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(1140,`tr`,14)(1141,`td`,15)(1142,`div`,16)(1143,`span`,17),iO(1144,` type`),nu(1145,`br`),wg()()(),jc(1146,`td`,18)(1147,`code`,26),iO(1148,`string`),wg()(),jc(1149,`td`,21)(1150,`em`)(1151,`strong`),iO(1152,`(opcional)`),wg()(),jc(1153,`p`),iO(1154,`Define a cor do item.`),wg(),jc(1155,`p`),iO(1156,`Valores válidos:`),wg(),jc(1157,`ul`)(1158,`li`)(1159,`code`),iO(1160,`default`),wg()(),jc(1161,`li`)(1162,`code`),iO(1163,`danger`),wg()()()()(),jc(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),iO(1168,` url`),nu(1169,`br`),wg()()(),jc(1170,`td`,18)(1171,`code`,26),iO(1172,`string`),wg()(),jc(1173,`td`,21)(1174,`em`)(1175,`strong`),iO(1176,`(opcional)`),wg()(),jc(1177,`p`),iO(1178,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(1179,`p`),iO(1180,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(1181,`code`),iO(1182,`url`),wg(),iO(1183,` é informada em um agrupador, o clique `),jc(1184,`strong`),iO(1185,`não abrirá os subitens`),wg(),iO(1186,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(1187,`blockquote`)(1188,`p`),iO(1189,`Quando informada, tem prioridade sobre a propriedade `),jc(1190,`code`),iO(1191,`action`),wg(),iO(1192,`.`),wg()()()(),jc(1193,`tr`,14)(1194,`td`,15)(1195,`div`,16)(1196,`span`,17),iO(1197,` visible`),nu(1198,`br`),wg()()(),jc(1199,`td`,18)(1200,`code`,41),iO(1201,`boolean `),wg(),jc(1202,`code`,33),iO(1203,` Function`),wg()(),jc(1204,`td`,21)(1205,`em`)(1206,`strong`),iO(1207,`(opcional)`),wg()(),jc(1208,`p`),iO(1209,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(1210,`h4`,34)(1211,`code`,5),iO(1212,`PoPageDefaultLiterals`),wg()(),jc(1213,`div`,2)(1214,`p`),iO(1215,`Interface para definição das literais usadas no `),jc(1216,`code`),iO(1217,`po-page-default`),wg(),iO(1218,`.`),wg()(),jc(1219,`h4`,10),iO(1220,`Propriedades`),wg(),jc(1221,`table`,11)(1222,`tr`,12)(1223,`th`,13),iO(1224,`Nome`),wg(),jc(1225,`th`,13),iO(1226,`Tipo`),wg(),jc(1227,`th`,13),iO(1228,`Descrição`),wg()(),jc(1229,`tr`,14)(1230,`td`,15)(1231,`div`,16)(1232,`span`,17),iO(1233,` otherActions`),nu(1234,`br`),wg()()(),jc(1235,`td`,18)(1236,`code`,26),iO(1237,`string`),wg()(),jc(1238,`td`,21)(1239,`em`)(1240,`strong`),iO(1241,`(opcional)`),wg()(),jc(1242,`p`),iO(1243,`Legenda do `),jc(1244,`code`),iO(1245,`po-dropdown`),wg(),iO(1246,` de ações.`),wg()()()(),jc(1247,`h3`),iO(1248,`Enums`),wg(),jc(1249,`h4`,4)(1250,`code`,5),iO(1251,`PoPageActionsLayout`),wg()(),jc(1252,`div`,2)(1253,`p`),iO(1254,`Define os layouts de exibição das ações no cabeçalho do `),jc(1255,`code`),iO(1256,`po-page-default`),wg(),iO(1257,`.`),wg(),jc(1258,`blockquote`)(1259,`p`),iO(1260,`Compatível com todos os valores de `),jc(1261,`code`),iO(1262,`PoPageHeaderType`),wg(),iO(1263,`.`),wg()()(),jc(1264,`h4`,10),iO(1265,`Propriedades`),wg(),jc(1266,`table`,11)(1267,`tr`,12)(1268,`th`,13),iO(1269,`Nome`),wg(),jc(1270,`th`,13),iO(1271,`Descrição`),wg()(),jc(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),iO(1276,` default`),nu(1277,`br`),wg()()(),jc(1278,`td`,21)(1279,`p`),iO(1280,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),jc(1281,`em`),iO(1282,`dropdown`),wg(),iO(1283,`.`),wg(),jc(1284,`p`),iO(1285,`Quando `),jc(1286,`code`),iO(1287,`PoPageAction.kind`),wg(),iO(1288,` não é definido, a primeira ação recebe o estilo `),jc(1289,`code`),iO(1290,`primary`),wg(),iO(1291,`
e as demais recebem `),jc(1292,`code`),iO(1293,`secondary`),wg(),iO(1294,`.`),wg()()(),jc(1295,`tr`,14)(1296,`td`,15)(1297,`div`,16)(1298,`span`,17),iO(1299,` dropdown`),nu(1300,`br`),wg()()(),jc(1301,`td`,21)(1302,`p`),iO(1303,`Agrupa todas as ações exclusivamente dentro do menu `),jc(1304,`em`),iO(1305,`dropdown`),wg(),iO(1306,`.`),wg()()(),jc(1307,`tr`,14)(1308,`td`,15)(1309,`div`,16)(1310,`span`,17),iO(1311,` mixed`),nu(1312,`br`),wg()()(),jc(1313,`td`,21)(1314,`p`),iO(1315,`Exibe a primeira ação como botão e agrupa as demais no `),jc(1316,`em`),iO(1317,`dropdown`),wg(),iO(1318,`.`),wg()()()(),jc(1319,`h4`,4)(1320,`code`,5),iO(1321,`PoPageHeaderType`),wg()(),jc(1322,`div`,2)(1323,`p`),iO(1324,`Define os tipos de cabeçalho disponíveis no `),jc(1325,`code`),iO(1326,`po-page-default`),wg(),iO(1327,`.`),wg()(),jc(1328,`h4`,10),iO(1329,`Propriedades`),wg(),jc(1330,`table`,11)(1331,`tr`,12)(1332,`th`,13),iO(1333,`Nome`),wg(),jc(1334,`th`,13),iO(1335,`Descrição`),wg()(),jc(1336,`tr`,14)(1337,`td`,15)(1338,`div`,16)(1339,`span`,17),iO(1340,` primary`),nu(1341,`br`),wg()()(),jc(1342,`td`,21)(1343,`p`),iO(1344,`Layout padrão com suporte a `),jc(1345,`code`),iO(1346,`p-breadcrumb`),wg(),iO(1347,`.`),wg()()(),jc(1348,`tr`,14)(1349,`td`,15)(1350,`div`,16)(1351,`span`,17),iO(1352,` secondary`),nu(1353,`br`),wg()()(),jc(1354,`td`,21)(1355,`p`),iO(1356,`Exibe um botão de retorno ao lado do título.`),wg(),jc(1357,`blockquote`)(1358,`p`),iO(1359,`Incompatível com `),jc(1360,`code`),iO(1361,`p-breadcrumb`),wg(),iO(1362,`.`),wg()()()(),jc(1363,`tr`,14)(1364,`td`,15)(1365,`div`,16)(1366,`span`,17),iO(1367,` tertiary`),nu(1368,`br`),wg()()(),jc(1369,`td`,21)(1370,`p`),iO(1371,`Layout simplificado sem botão de retorno.`),wg(),jc(1372,`blockquote`)(1373,`p`),iO(1374,`Incompatível com `),jc(1375,`code`),iO(1376,`p-breadcrumb`),wg(),iO(1377,`.`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-page-default-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-page-default-basic-view`)(6,`sample-po-page-default-labs-view`)(7,`sample-po-page-default-dashboard-view`)(8,`sample-po-page-default-refresh-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,xe,ye,Ce,De,_e],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Ke),C1]})}return a})();var Ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Te]})}return a})();export{Ft as DocPoPageDefaultModule};