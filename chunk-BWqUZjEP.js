import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Br as TN,E as Cp,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,X as KH,Xn as Cn,Yi as mN,Yn as Ce$1,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,dn as oU,ea as p0,ga as w,ir as I,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(r,i){r&1&&ql(0,`po-page-default`,0)},dependencies:[V8e],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Default Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-default-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Le,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return a})();var Be=()=>({});function Fe(a,ke){if(a&1){let p=Vx();Ml(0,`po-input`,37),Mw(`ngModelChange`,function(i){Qy(p);let m=zx(2);return yN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Jy(i)}),lg(),f0()}if(a&2)Tw(`ngModel`,zx(2).helperFooterLabel),p0()}function Oe(a,ke){if(a&1){let p=Vx();Ml(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),Mw(`ngModelChange`,function(i){Qy(p);let m=zx();return yN(m.helperTitle,i)||(m.helperTitle=i),Jy(i)}),lg(),f0(),Ml(3,`po-input`,34),Mw(`ngModelChange`,function(i){Qy(p);let m=zx();return yN(m.helperContent,i)||(m.helperContent=i),Jy(i)}),lg(),f0(),lg(),Ml(4,`div`,6)(5,`po-radio-group`,35),ht(`ngModelChange`,function(i){Qy(p);let m=zx();return Jy(m.helperType=i)}),lg(),f0(),lg(),Ml(6,`div`,6),Tx(7,Fe,1,1,`po-input`,36),lg()()}if(a&2){let p=zx();Up(2),Tw(`ngModel`,p.helperTitle),p0(),Up(),Tw(`ngModel`,p.helperContent),p0(),Up(2),cw(`p-columns`,4)(`ngModel`,p.helperType)(`p-options`,p.helperTypeOptions),p0(),Up(2),Mx(p.helperType===`help`?7:-1)}}var ve=(()=>{class a{poNotification=f(Eu);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let p={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(p.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),p}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(p){let r$1=s(r({},p),{visible:p.visible!==void 0?p.visible:!0,disabled:p.disabled!==void 0?p.disabled:!1});r$1.action=r$1.action?this.showAction.bind(this,r$1.action):void 0,this.actions=[...this.actions,r$1],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Vx();Ml(0,`po-page-default`,5),ht(`p-back`,function(){return i.onBack()}),lg(),ql(1,`po-divider`),Ml(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.title,l)||(i.title=l),Jy(l)}),lg(),f0(),Ml(6,`po-input`,8),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.subtitle,l)||(i.subtitle=l),Jy(l)}),lg(),f0(),Ml(7,`po-checkbox`,9),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.showHelper,l)||(i.showHelper=l),Jy(l)}),lg(),f0(),Ml(8,`po-checkbox`,10),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.showRefresh,l)||(i.showRefresh=l),Jy(l)}),lg(),f0(),Tx(9,Oe,8,6,`po-widget`,11),Ml(10,`po-select`,12),ht(`ngModelChange`,function(l){return i.pageHeaderType=l}),lg(),f0(),Ml(11,`po-select`,13),ht(`ngModelChange`,function(l){return i.pageActionsLayout=l}),lg(),f0(),Ml(12,`po-input`,14),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.literals,l)||(i.literals=l),Jy(l)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(13,`po-radio-group`,15),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.componentsSize,l)||(i.componentsSize=l),Jy(l)}),lg(),f0(),lg()(),ql(14,`po-divider`),Ml(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.action.label,l)||(i.action.label=l),Jy(l)}),lg(),f0(),Ml(20,`po-input`,18),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.action.action,l)||(i.action.action=l),Jy(l)}),lg(),f0(),Ml(21,`po-input`,19),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.action.url,l)||(i.action.url=l),Jy(l)}),lg(),f0(),Ml(22,`po-select`,20),ht(`ngModelChange`,function(l){return i.action.type=l}),lg(),f0(),Ml(23,`po-select`,21),ht(`ngModelChange`,function(l){return i.action.icon=l}),lg(),f0(),Ml(24,`po-select`,22),ht(`ngModelChange`,function(l){return i.action.kind=l}),lg(),f0(),Ml(25,`po-checkbox-group`,23),ht(`ngModelChange`,function(l){return i.action=l}),lg(),f0(),lg(),Ml(26,`div`,6)(27,`po-button`,24),ht(`p-click`,function(){return i.addAction(i.action)}),lg()()()(),ql(28,`po-divider`),Ml(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),Jy(l)}),lg(),f0(),lg()(),Ml(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),Jy(l)}),lg(),f0(),Ml(37,`po-input`,27),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),Jy(l)}),lg(),f0(),lg(),Ml(38,`div`,6)(39,`po-button`,28),ht(`p-click`,function(){return i.addBreadcrumbItem()}),lg()()(),ql(40,`po-divider`),Ml(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),Jy(l)}),lg(),f0(),Ml(45,`po-input`,30),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),Jy(l)}),lg(),f0(),lg(),Ml(46,`div`,6)(47,`po-button`,31),ht(`p-click`,function(){return i.addBreadcrumbParam()}),lg()()(),ql(48,`po-divider`),Ml(49,`div`,6)(50,`po-button`,32),ht(`p-click`,function(){return i.restore()}),lg()()}if(r&2){let m=Yx(17),c=Yx(34),l=Yx(42);cw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??TN(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Up(5),Tw(`ngModel`,i.title),p0(),Up(),Tw(`ngModel`,i.subtitle),p0(),Up(),Tw(`ngModel`,i.showHelper),p0(),Up(),Tw(`ngModel`,i.showRefresh),p0(),Up(),Mx(i.showHelper?9:-1),Up(),cw(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),p0(),Up(),cw(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),p0(),Up(),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.componentsSize),cw(`p-columns`,4)(`p-options`,i.componentsSizeOptions),p0(),Up(6),Tw(`ngModel`,i.action.label),p0(),Up(),Tw(`ngModel`,i.action.action),p0(),Up(),Tw(`ngModel`,i.action.url),p0(),Up(),cw(`ngModel`,i.action.type)(`p-options`,i.typeOptions),p0(),Up(),cw(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),p0(),Up(),cw(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),p0(),Up(),cw(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),p0(),Up(2),cw(`p-disabled`,m.form.invalid),Up(5),Tw(`ngModel`,i.breadcrumb.favorite),p0(),Up(4),Tw(`ngModel`,i.breadcrumbItem.label),p0(),Up(),Tw(`ngModel`,i.breadcrumbItem.link),p0(),Up(2),cw(`p-disabled`,c.invalid??!1),Up(5),Tw(`ngModel`,i.breadcrumbParams.property),p0(),Up(),Tw(`ngModel`,i.breadcrumbParams.value),p0(),Up(2),cw(`p-disabled`,l.invalid??!1)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,Cp,lU,q0e,Tbe,V8e,$8e],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Default Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-default-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ve],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=[`formShare`];var Pe=(()=>{class a{poNotification=f(Eu);sampleDashboardService=f(oe);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(r,i){if(r&1&&Zl(We,7)(vr,7),r&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,features:[Ce$1([oe])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Vx();Ml(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),mN(4,`540`),lg(),Ml(5,`div`,5),mN(6,`www.po.com.br`),lg()(),Ml(7,`po-widget`,6)(8,`div`,4),mN(9,`300 views`),lg(),Ml(10,`div`,5),mN(11,`https://po-ui.io`),lg()(),Ml(12,`po-widget`,7)(13,`div`,4),mN(14,`Online`),lg(),Ml(15,`div`,5),mN(16,`28 days`),lg()(),Ml(17,`po-widget`,8)(18,`div`,4),mN(19,`266`),lg(),Ml(20,`div`,5),mN(21,`@po-ui/ng-components - 1.10.1`),lg()(),Ml(22,`po-widget`,9)(23,`div`,4),mN(24,`800 questions`),lg(),Ml(25,`div`,5),mN(26,`https://devforum.po.com.br`),lg()(),Ml(27,`po-widget`,10)(28,`div`,4),mN(29,`AngularJS - Angular 6`),lg(),Ml(30,`div`,5),mN(31,`Angular 6 most downloaded`),lg()()(),ql(32,`po-divider`)(33,`po-table`,11),lg(),Ml(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.email,l)||(i.email=l),Jy(l)}),lg(),f0(),lg()()}r&2&&(cw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),Up(33),cw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Up(),cw(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Up(3),Tw(`ngModel`,i.email),p0())},dependencies:[IY,wY,CY,Vk,kk,nb,KH,vr,V8e,oU,$8e],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Default - Dashboard`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()(),Ml(25,`po-tab`,10)(26,`div`)(27,`label`,6),mN(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),lg(),Ml(29,`pre`,11),mN(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),lg()()()()(),Ml(31,`div`,12),ql(32,`sample-po-page-default-dashboard`),lg(),ql(33,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ze,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(p){this.poNotification=p}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(p=>s(r({},p),{quantity:p.quantity+Math.floor(Math.random()*10),status:this.getStatus(p.quantity+Math.floor(Math.random()*10))}))}getStatus(p){return p===0?`Out of stock`:p<=5?`Low stock`:`Available`}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0),ql(1,`po-table`,1),lg()),r&2&&(cw(`p-refresh`,i.onRefresh),Up(),cw(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[V8e,oU],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Default - Refresh`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-default-refresh`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,we],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1341,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-h4`,`docs-api-class-name`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ml(7,`code`),mN(8,`po-page-default`),lg(),mN(9,`, `),Ml(10,`code`),mN(11,`po-page-detail`),lg(),mN(12,`,
`),Ml(13,`code`),mN(14,`po-page-edit`),lg(),mN(15,`, `),Ml(16,`code`),mN(17,`po-page-list`),lg(),mN(18,` e `),Ml(19,`code`),mN(20,`po-page-slide`),lg(),mN(21,`.`),lg()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoPageDefaultComponent`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,`O `),Ml(30,`code`),mN(31,`po-page-default`),lg(),mN(32,` é utilizado como container principal para telas sem um template definido.`),lg(),Ml(33,`p`),mN(34,`Oferece suporte a cabeçalhos dinâmicos via `),Ml(35,`code`),mN(36,`p-page-header-type`),lg(),mN(37,`, navegação por `),Ml(38,`em`),mN(39,`breadcrumb`),lg(),mN(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Ml(41,`code`),mN(42,`p-page-actions-layout`),lg(),mN(43,`.`),lg(),Ml(44,`h4`),mN(45,`Tokens customizáveis`),lg(),Ml(46,`blockquote`)(47,`p`),mN(48,`Para maiores informações, acesse o guia `),Ml(49,`a`,6),mN(50,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(51,`.`),lg()(),Ml(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),mN(56,`Propriedade`),lg(),Ml(57,`th`),mN(58,`Descrição`),lg(),Ml(59,`th`),mN(60,`Valor Padrão`),lg()()(),Ml(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),mN(65,`Página (po-page-default)`),lg()(),ql(66,`td`)(67,`td`),lg(),Ml(68,`tr`)(69,`td`)(70,`code`),mN(71,`--background`),lg()(),Ml(72,`td`),mN(73,`Background da página (header e body)`),lg(),Ml(74,`td`)(75,`code`),mN(76,`var(--color-page-background-color-page)`),lg()()(),Ml(77,`tr`)(78,`td`)(79,`strong`),mN(80,`Header (po-page-header)`),lg()(),ql(81,`td`)(82,`td`),lg(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--padding`),lg()(),Ml(87,`td`),mN(88,`Espaçamento do header`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--gap`),lg()(),Ml(96,`td`),mN(97,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--spacing-md)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--gap-actions`),lg()(),Ml(105,`td`),mN(106,`Espaçamento entre as ações`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--spacing-xs)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`strong`),mN(113,`Header (po-page-header .po-page-header-title)`),lg()(),ql(114,`td`)(115,`td`),lg(),Ml(116,`tr`)(117,`td`)(118,`code`),mN(119,`--font-family`),lg()(),Ml(120,`td`),mN(121,`Família tipográfica do título`),lg(),Ml(122,`td`)(123,`code`),mN(124,`var(--font-family-theme)`),lg()()(),Ml(125,`tr`)(126,`td`)(127,`strong`),mN(128,`Content (po-page-content)`),lg()(),ql(129,`td`)(130,`td`),lg(),Ml(131,`tr`)(132,`td`)(133,`code`),mN(134,`--padding-content`),lg()(),Ml(135,`td`),mN(136,`Espaçamento do conteúdo`),lg(),Ml(137,`td`)(138,`code`),mN(139,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(140,`div`,7)(141,`h4`,8),mN(142,`Seletor`),lg(),Ml(143,`pre`,9),mN(144,`<po-page-default
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
`),lg()(),Ml(145,`h4`,10),mN(146,`Propriedades`),lg(),Ml(147,`table`,11)(148,`tr`,12)(149,`th`,13),mN(150,`Nome`),lg(),Ml(151,`th`,13),mN(152,`Tipo`),lg(),Ml(153,`th`,13),mN(154,`Padrão`),lg(),Ml(155,`th`,13),mN(156,`Descrição`),lg()(),Ml(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),mN(161,` p-actions`),ql(162,`br`),lg()()(),Ml(163,`td`,18)(164,`code`,19),mN(165,`Array<PoPageAction>`),lg()(),Ml(166,`td`,20)(167,`p`)(168,`code`),mN(169,`[]`),lg()()(),Ml(170,`td`,21)(171,`em`)(172,`strong`),mN(173,`(opcional)`),lg()(),Ml(174,`p`),mN(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),lg(),Ml(176,`p`),mN(177,`Recebe um array de objetos que implementam a interface `),Ml(178,`code`),mN(179,`PoPageAction`),lg(),mN(180,`.`),lg(),Ml(181,`blockquote`)(182,`p`),mN(183,`O comportamento de exibição pode ser customizado através da propriedade `),Ml(184,`code`),mN(185,`p-page-actions-layout`),lg(),mN(186,`.`),lg()()()(),Ml(187,`tr`,14)(188,`td`,15)(189,`div`,22)(190,`span`,23),mN(191,` (p-back)`),ql(192,`br`),lg()()(),Ml(193,`td`,18)(194,`code`,24),mN(195,`EventEmitter`),lg()(),Ml(196,`td`,20),mN(197,`-`),lg(),Ml(198,`td`,21)(199,`em`)(200,`strong`),mN(201,`(opcional)`),lg()(),Ml(202,`p`),mN(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),lg(),Ml(204,`blockquote`)(205,`p`),mN(206,`Botão exibido apenas quando a propriedade `),Ml(207,`code`),mN(208,`p-page-header-type`),lg(),mN(209,` está configurada como `),Ml(210,`code`),mN(211,`secondary`),lg(),mN(212,`.`),lg()()()(),Ml(213,`tr`,14)(214,`td`,15)(215,`div`,16)(216,`span`,17),mN(217,` p-breadcrumb`),ql(218,`br`),lg()()(),Ml(219,`td`,18)(220,`code`,25),mN(221,`PoBreadcrumb`),lg()(),Ml(222,`td`,20),mN(223,`-`),lg(),Ml(224,`td`,21)(225,`em`)(226,`strong`),mN(227,`(opcional)`),lg()(),Ml(228,`p`),mN(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),lg(),Ml(230,`p`),mN(231,`Recebe um objeto que implementa a interface `),Ml(232,`code`),mN(233,`PoBreadcrumb`),lg(),mN(234,`.`),lg(),Ml(235,`blockquote`)(236,`p`),mN(237,`Compatível com o cabeçalho (`),Ml(238,`code`),mN(239,`p-page-header-type`),lg(),mN(240,`) do tipo `),Ml(241,`code`),mN(242,`primary`),lg(),mN(243,`.`),lg()()()(),Ml(244,`tr`,14)(245,`td`,15)(246,`div`,16)(247,`span`,17),mN(248,` p-components-size`),ql(249,`br`),lg()()(),Ml(250,`td`,18)(251,`code`,26),mN(252,`string`),lg()(),Ml(253,`td`,20)(254,`p`)(255,`code`),mN(256,`medium`),lg()()(),Ml(257,`td`,21)(258,`em`)(259,`strong`),mN(260,`(opcional)`),lg()(),Ml(261,`p`),mN(262,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(263,`ul`)(264,`li`)(265,`code`),mN(266,`small`),lg(),mN(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(268,`li`)(269,`code`),mN(270,`medium`),lg(),mN(271,`: aplica a medida medium de cada componente.`),lg()(),Ml(272,`blockquote`)(273,`p`),mN(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(275,`code`),mN(276,`medium`),lg(),mN(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(278,`a`,27),mN(279,`po-theme`),lg(),mN(280,`.`),lg()()()(),Ml(281,`tr`,14)(282,`td`,15)(283,`div`,16)(284,`span`,17),mN(285,` p-helper`),ql(286,`br`),lg()()(),Ml(287,`td`,18)(288,`code`,28),mN(289,`PoHelperOptions `),lg(),Ml(290,`code`,26),mN(291,` string`),lg()(),Ml(292,`td`,20)(293,`p`)(294,`code`),mN(295,`info`),lg()()(),Ml(296,`td`,21)(297,`em`)(298,`strong`),mN(299,`(opcional)`),lg()(),Ml(300,`p`),mN(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),lg(),Ml(302,`p`),mN(303,`Quando não houver subtítulo (`),Ml(304,`code`),mN(305,`p-subtitle`),lg(),mN(306,`), o po-helper será exibido logo abaixo do título.`),lg(),Ml(307,`p`),mN(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Ml(309,`code`),mN(310,`PoHelperOptions`),lg(),mN(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),lg(),Ml(312,`p`),mN(313,`Exemplo de uso:`),lg(),Ml(314,`pre`)(315,`code`,29),mN(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),lg()()()(),Ml(317,`tr`,14)(318,`td`,15)(319,`div`,16)(320,`span`,17),mN(321,` p-literals`),ql(322,`br`),lg()()(),Ml(323,`td`,18)(324,`code`,30),mN(325,`PoPageDefaultLiterals`),lg()(),Ml(326,`td`,20),mN(327,`-`),lg(),Ml(328,`td`,21)(329,`em`)(330,`strong`),mN(331,`(opcional)`),lg()(),Ml(332,`p`),mN(333,`Permite a customização das literais utilizadas no componente.`),lg(),Ml(334,`p`),mN(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Ml(336,`code`),mN(337,`PoPageDefaultLiterals`),lg(),mN(338,`.`),lg(),Ml(339,`p`),mN(340,`Exemplo de uso:`),lg(),Ml(341,`pre`)(342,`code`,29),mN(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),lg()(),Ml(344,`pre`)(345,`code`,31),mN(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),lg()(),Ml(347,`blockquote`)(348,`p`),mN(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ml(350,`a`,32)(351,`code`),mN(352,`PoI18nService`),lg()(),mN(353,` ou navegador.`),lg()()()(),Ml(354,`tr`,14)(355,`td`,15)(356,`div`,16)(357,`span`,17),mN(358,` p-page-actions-layout`),ql(359,`br`),lg()()(),Ml(360,`td`,18)(361,`code`,26),mN(362,`string`),lg()(),Ml(363,`td`,20)(364,`p`)(365,`code`),mN(366,`default`),lg()()(),Ml(367,`td`,21)(368,`em`)(369,`strong`),mN(370,`(opcional)`),lg()(),Ml(371,`p`),mN(372,`Define o layout de exibição das ações no cabeçalho.`),lg(),Ml(373,`p`),mN(374,`Aceita valores do enum `),Ml(375,`code`),mN(376,`PoPageActionsLayout`),lg(),mN(377,`.`),lg(),Ml(378,`blockquote`)(379,`p`),mN(380,`Em telas reduzidas (< 480px) as ações fora do `),Ml(381,`em`),mN(382,`dropdown`),lg(),mN(383,` que possuam a propriedade `),Ml(384,`code`),mN(385,`PoPageAction.icon`),lg(),mN(386,` definida
exibir\xE3o apenas o \xEDcone.`),lg()()()(),Ml(387,`tr`,14)(388,`td`,15)(389,`div`,16)(390,`span`,17),mN(391,` p-page-header-type`),ql(392,`br`),lg()()(),Ml(393,`td`,18)(394,`code`,26),mN(395,`string`),lg()(),Ml(396,`td`,20)(397,`p`)(398,`code`),mN(399,`primary`),lg()()(),Ml(400,`td`,21)(401,`em`)(402,`strong`),mN(403,`(opcional)`),lg()(),Ml(404,`p`),mN(405,`Define o tipo de cabeçalho da página.`),lg(),Ml(406,`p`),mN(407,`Aceita valores do enum `),Ml(408,`code`),mN(409,`PoPageHeaderType`),lg(),mN(410,`.`),lg()()(),Ml(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),mN(415,` p-refresh`),ql(416,`br`),lg()()(),Ml(417,`td`,18)(418,`code`,33),mN(419,`Function`),lg()(),Ml(420,`td`,20),mN(421,`-`),lg(),Ml(422,`td`,21)(423,`em`)(424,`strong`),mN(425,`(opcional)`),lg()(),Ml(426,`p`),mN(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),lg(),Ml(428,`p`),mN(429,`Quando não houver subtítulo (`),Ml(430,`code`),mN(431,`p-subtitle`),lg(),mN(432,`), o refresh será exibido logo abaixo do título.`),lg(),Ml(433,`blockquote`)(434,`p`),mN(435,`Esta propriedade possui precedência sobre a configuração de `),Ml(436,`code`),mN(437,`p-helper`),lg(),mN(438,`.`),lg()(),Ml(439,`p`),mN(440,`Exemplo de uso:`),lg(),Ml(441,`pre`)(442,`code`,29),mN(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),lg()()()(),Ml(444,`tr`,14)(445,`td`,15)(446,`div`,16)(447,`span`,17),mN(448,` p-subtitle`),ql(449,`br`),lg()()(),Ml(450,`td`,18)(451,`code`,26),mN(452,`string`),lg()(),Ml(453,`td`,20),mN(454,`-`),lg(),Ml(455,`td`,21)(456,`em`)(457,`strong`),mN(458,`(opcional)`),lg()(),Ml(459,`p`),mN(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),lg(),Ml(461,`p`),mN(462,`Suporta formatação básica com as tags `),Ml(463,`code`),mN(464,`<b>`),lg(),mN(465,` (negrito), `),Ml(466,`code`),mN(467,`<strong>`),lg(),mN(468,` (negrito), `),Ml(469,`code`),mN(470,`<i>`),lg(),mN(471,` (itálico), `),Ml(472,`code`),mN(473,`<em>`),lg(),mN(474,` (it\xE1lico) e
`),Ml(475,`code`),mN(476,`<u>`),lg(),mN(477,` (sublinhado).`),lg(),Ml(478,`p`),mN(479,`Exemplo:`),lg(),Ml(480,`pre`)(481,`code`,31),mN(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),lg()(),Ml(483,`blockquote`)(484,`p`),mN(485,`Requer que `),Ml(486,`code`),mN(487,`p-title`),lg(),mN(488,` esteja definido.`),lg()()()(),Ml(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),mN(493,` p-title`),ql(494,`br`),lg()()(),Ml(495,`td`,18)(496,`code`,26),mN(497,`string`),lg()(),Ml(498,`td`,20),mN(499,`-`),lg(),Ml(500,`td`,21)(501,`em`)(502,`strong`),mN(503,`(opcional)`),lg()(),Ml(504,`p`),mN(505,`Define o título principal da página.`),lg()()()(),Ml(506,`h3`),mN(507,`Interfaces`),lg(),Ml(508,`h4`,34)(509,`code`,5),mN(510,`PoBreadcrumbItem`),lg()(),Ml(511,`div`,2)(512,`p`),mN(513,`Interface que define cada item do componente `),Ml(514,`strong`),mN(515,`po-breadcrumb`),lg(),mN(516,`.`),lg()(),Ml(517,`h4`,10),mN(518,`Propriedades`),lg(),Ml(519,`table`,11)(520,`tr`,12)(521,`th`,13),mN(522,`Nome`),lg(),Ml(523,`th`,13),mN(524,`Tipo`),lg(),Ml(525,`th`,13),mN(526,`Descrição`),lg()(),Ml(527,`tr`,14)(528,`td`,15)(529,`div`,16)(530,`span`,17),mN(531,` action`),ql(532,`br`),lg()()(),Ml(533,`td`,18)(534,`code`,33),mN(535,`Function`),lg()(),Ml(536,`td`,21)(537,`em`)(538,`strong`),mN(539,`(opcional)`),lg()(),Ml(540,`p`),mN(541,`Ação executada ao clicar no item.`),lg(),Ml(542,`blockquote`)(543,`p`),mN(544,`A função atribuída a esta propriedade receberá o `),Ml(545,`em`),mN(546,`label`),lg(),mN(547,` do item como parâmetro para execução.`),lg()()()(),Ml(548,`tr`,14)(549,`td`,15)(550,`div`,16)(551,`span`,17),mN(552,` label`),ql(553,`br`),lg()()(),Ml(554,`td`,18)(555,`code`,26),mN(556,`string`),lg()(),Ml(557,`td`,21)(558,`p`),mN(559,`Rótulo do item.`),lg()()(),Ml(560,`tr`,14)(561,`td`,15)(562,`div`,16)(563,`span`,17),mN(564,` link`),ql(565,`br`),lg()()(),Ml(566,`td`,18)(567,`code`,26),mN(568,`string`),lg()(),Ml(569,`td`,21)(570,`em`)(571,`strong`),mN(572,`(opcional)`),lg()(),Ml(573,`p`),mN(574,`Url do item.`),lg(),Ml(575,`blockquote`)(576,`p`),mN(577,`Caso o item também contenha uma `),Ml(578,`em`),mN(579,`action`),lg(),mN(580,` definida, a preferência de execução será do `),Ml(581,`em`),mN(582,`link`),lg(),mN(583,`.`),lg()(),Ml(584,`blockquote`)(585,`p`),mN(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ml(587,`strong`)(588,`a`,35),mN(589,`Veja um exemplo de como criar rotas aqui`),lg()(),mN(590,`.`),lg()(),Ml(591,`blockquote`)(592,`p`),mN(593,`Esta propriedade é necessária para que a propriedade `),Ml(594,`code`),mN(595,`p-favorite-service`),lg(),mN(596,` consiga favoritar ou desfavoritar.`),lg()()()()(),Ml(597,`h4`,34)(598,`code`,5),mN(599,`PoBreadcrumb`),lg()(),Ml(600,`div`,2)(601,`p`),mN(602,`Interface que define o `),Ml(603,`code`),mN(604,`po-breadcrumb`),lg(),mN(605,`.`),lg()(),Ml(606,`h4`,10),mN(607,`Propriedades`),lg(),Ml(608,`table`,11)(609,`tr`,12)(610,`th`,13),mN(611,`Nome`),lg(),Ml(612,`th`,13),mN(613,`Tipo`),lg(),Ml(614,`th`,13),mN(615,`Descrição`),lg()(),Ml(616,`tr`,14)(617,`td`,15)(618,`div`,16)(619,`span`,17),mN(620,` favorite`),ql(621,`br`),lg()()(),Ml(622,`td`,18)(623,`code`,26),mN(624,`string`),lg()(),Ml(625,`td`,21)(626,`em`)(627,`strong`),mN(628,`(opcional)`),lg()(),Ml(629,`p`),mN(630,`Permite definir uma URL para favoritar ou desfavoritar.`),lg(),Ml(631,`blockquote`)(632,`p`),mN(633,`Para maiores informações verificar a propriedade `),Ml(634,`code`),mN(635,`p-favorite-service`),lg(),mN(636,` do componente `),Ml(637,`code`),mN(638,`po-breadcrumb`),lg(),mN(639,`.`),lg()()()(),Ml(640,`tr`,14)(641,`td`,15)(642,`div`,16)(643,`span`,17),mN(644,` items`),ql(645,`br`),lg()()(),Ml(646,`td`,18)(647,`code`,36),mN(648,`Array<PoBreadcrumbItem>`),lg()(),Ml(649,`td`,21)(650,`p`),mN(651,`Lista de itens do `),Ml(652,`em`),mN(653,`breadcrumb`),lg(),mN(654,`.`),lg(),Ml(655,`p`)(656,`strong`),mN(657,`Exemplo:`),lg()(),Ml(658,`pre`)(659,`code`),mN(660,`{ label: 'Po Portal', link: 'portal' }
`),lg()()()(),Ml(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),mN(665,` params`),ql(666,`br`),lg()()(),Ml(667,`td`,18)(668,`code`,37),mN(669,`object`),lg()(),Ml(670,`td`,21)(671,`em`)(672,`strong`),mN(673,`(opcional)`),lg()(),Ml(674,`p`),mN(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),lg()()()(),Ml(676,`h4`,34)(677,`code`,5),mN(678,`PoHelperOptions`),lg()(),Ml(679,`div`,2)(680,`p`),mN(681,`Interface para configuração das opções de ajuda (`),Ml(682,`em`),mN(683,`helper`),lg(),mN(684,`).`),lg()(),Ml(685,`h4`,10),mN(686,`Propriedades`),lg(),Ml(687,`table`,11)(688,`tr`,12)(689,`th`,13),mN(690,`Nome`),lg(),Ml(691,`th`,13),mN(692,`Tipo`),lg(),Ml(693,`th`,13),mN(694,`Descrição`),lg()(),Ml(695,`tr`,14)(696,`td`,15)(697,`div`,16)(698,`span`,17),mN(699,` content`),ql(700,`br`),lg()()(),Ml(701,`td`,18)(702,`code`,26),mN(703,`string`),lg()(),Ml(704,`td`,21)(705,`em`)(706,`strong`),mN(707,`(opcional)`),lg()(),Ml(708,`p`),mN(709,`Texto explicativo exibido no popover.`),lg(),Ml(710,`p`),mN(711,`Suporta formatação básica com as tags `),Ml(712,`code`),mN(713,`<b>`),lg(),mN(714,` (negrito), `),Ml(715,`code`),mN(716,`<strong>`),lg(),mN(717,` (negrito), `),Ml(718,`code`),mN(719,`<i>`),lg(),mN(720,` (itálico), `),Ml(721,`code`),mN(722,`<em>`),lg(),mN(723,` (it\xE1lico) e
`),Ml(724,`code`),mN(725,`<u>`),lg(),mN(726,` (sublinhado).`),lg(),Ml(727,`p`),mN(728,`Exemplo:`),lg(),Ml(729,`pre`)(730,`code`,31),mN(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),lg()()()(),Ml(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),mN(736,` eventOnClick`),ql(737,`br`),lg()()(),Ml(738,`td`,18)(739,`code`,33),mN(740,`Function`),lg()(),Ml(741,`td`,21)(742,`em`)(743,`strong`),mN(744,`(opcional)`),lg()(),Ml(745,`p`),mN(746,`Evento disparado ao clicar no ícone do helper.`),lg(),Ml(747,`p`),mN(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),lg(),Ml(749,`p`),mN(750,`Pode ser uma função ou um `),Ml(751,`code`),mN(752,`EventEmitter`),lg(),mN(753,`.`),lg(),Ml(754,`p`),mN(755,`Exemplo:`),lg(),Ml(756,`pre`)(757,`code`),mN(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),lg()()()(),Ml(759,`tr`,14)(760,`td`,15)(761,`div`,16)(762,`span`,17),mN(763,` footerAction`),ql(764,`br`),lg()()(),Ml(765,`td`,18)(766,`code`,38),mN(767,`{ label: string; action: Function;
}`),lg()(),Ml(768,`td`,21)(769,`em`)(770,`strong`),mN(771,`(opcional)`),lg()(),Ml(772,`p`),mN(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Ml(774,`code`),mN(775,`help`),lg(),mN(776,` e desconsiderada quando o type for `),Ml(777,`code`),mN(778,`info`),lg(),mN(779,`.`),lg(),Ml(780,`p`),mN(781,`Deve ser um objeto com as propriedades:`),lg(),Ml(782,`ul`)(783,`li`)(784,`code`),mN(785,`label`),lg(),mN(786,`: Texto do botão.`),lg(),Ml(787,`li`)(788,`code`),mN(789,`action`),lg(),mN(790,`: Função executada ao clicar no botão.`),lg()(),Ml(791,`p`),mN(792,`Exemplo:`),lg(),Ml(793,`pre`)(794,`code`,31),mN(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),lg()()()(),Ml(796,`tr`,14)(797,`td`,15)(798,`div`,16)(799,`span`,17),mN(800,` title`),ql(801,`br`),lg()()(),Ml(802,`td`,18)(803,`code`,26),mN(804,`string`),lg()(),Ml(805,`td`,21)(806,`em`)(807,`strong`),mN(808,`(opcional)`),lg()(),Ml(809,`p`),mN(810,`Título do helper exibido no popover.`),lg()()(),Ml(811,`tr`,14)(812,`td`,15)(813,`div`,16)(814,`span`,17),mN(815,` type`),ql(816,`br`),lg()()(),Ml(817,`td`,18)(818,`code`,39),mN(819,`'info' `),lg(),Ml(820,`code`,40),mN(821,` 'help'`),lg()(),Ml(822,`td`,21)(823,`em`)(824,`strong`),mN(825,`(opcional)`),lg()(),Ml(826,`p`),mN(827,`Tipo do ícone exibido: `),Ml(828,`code`),mN(829,`info`),lg(),mN(830,` ou `),Ml(831,`code`),mN(832,`help`),lg(),mN(833,`.`),lg(),Ml(834,`p`),mN(835,`Quando o valor é `),Ml(836,`code`),mN(837,`info`),lg(),mN(838,`, o popover exibe apenas informações e não permite ações customizadas.`),lg(),Ml(839,`p`),mN(840,`Quando o valor é `),Ml(841,`code`),mN(842,`help`),lg(),mN(843,`, o popover pode exibir ações customizadas no rodapé.`),lg()()()(),Ml(844,`h4`,34)(845,`code`,5),mN(846,`PoPageAction`),lg()(),Ml(847,`div`,2)(848,`p`),mN(849,`Interface para as ações dos componentes `),Ml(850,`code`),mN(851,`po-page-default`),lg(),mN(852,` e `),Ml(853,`code`),mN(854,`po-page-list`),lg(),mN(855,`.`),lg(),Ml(856,`p`),mN(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Ml(858,`em`),mN(859,`dropdown`),lg(),mN(860,`,
conforme o `),Ml(861,`code`),mN(862,`PoPageActionsLayout`),lg(),mN(863,` e o tamanho da tela.`),lg(),Ml(864,`blockquote`)(865,`p`),mN(866,`As propriedades `),Ml(867,`code`),mN(868,`separator`),lg(),mN(869,`, `),Ml(870,`code`),mN(871,`selected`),lg(),mN(872,` e `),Ml(873,`code`),mN(874,`subItems`),lg(),mN(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Ml(876,`em`),mN(877,`dropdown`),lg(),mN(878,`.`),lg()()(),Ml(879,`h4`,10),mN(880,`Propriedades`),lg(),Ml(881,`table`,11)(882,`tr`,12)(883,`th`,13),mN(884,`Nome`),lg(),Ml(885,`th`,13),mN(886,`Tipo`),lg(),Ml(887,`th`,13),mN(888,`Descrição`),lg()(),Ml(889,`tr`,14)(890,`td`,15)(891,`div`,16)(892,`span`,17),mN(893,` action`),ql(894,`br`),lg()()(),Ml(895,`td`,18)(896,`code`,33),mN(897,`Function`),lg()(),Ml(898,`td`,21)(899,`em`)(900,`strong`),mN(901,`(opcional)`),lg()(),Ml(902,`p`),mN(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(904,`p`),mN(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(906,`code`),mN(907,`subItems`),lg(),mN(908,`.`),lg(),Ml(909,`blockquote`)(910,`p`),mN(911,`Para que a função seja executada no contexto do componente, utilize `),Ml(912,`em`),mN(913,`bind`),lg(),mN(914,`:
`),Ml(915,`code`),mN(916,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(917,`tr`,14)(918,`td`,15)(919,`div`,16)(920,`span`,17),mN(921,` disabled`),ql(922,`br`),lg()()(),Ml(923,`td`,18)(924,`code`,41),mN(925,`boolean `),lg(),Ml(926,`code`,33),mN(927,` Function`),lg()(),Ml(928,`td`,21)(929,`em`)(930,`strong`),mN(931,`(opcional)`),lg()(),Ml(932,`p`),mN(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(934,`tr`,14)(935,`td`,15)(936,`div`,16)(937,`span`,17),mN(938,` icon`),ql(939,`br`),lg()()(),Ml(940,`td`,18)(941,`code`,26),mN(942,`string `),lg(),Ml(943,`code`,42),mN(944,` TemplateRef<void>`),lg()(),Ml(945,`td`,21)(946,`em`)(947,`strong`),mN(948,`(opcional)`),lg()(),Ml(949,`p`),mN(950,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(951,`p`),mN(952,`Aceita ícones da `),Ml(953,`a`,43),mN(954,`Biblioteca de ícones`),lg(),mN(955,`, fontes externas (ex: Font Awesome)
ou um `),Ml(956,`code`),mN(957,`TemplateRef`),lg(),mN(958,` para ícones customizados.`),lg(),Ml(959,`pre`)(960,`code`),mN(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(962,`tr`,14)(963,`td`,15)(964,`div`,16)(965,`span`,17),mN(966,` kind`),ql(967,`br`),lg()()(),Ml(968,`td`,18)(969,`code`,26),mN(970,`string`),lg()(),Ml(971,`td`,21)(972,`em`)(973,`strong`),mN(974,`(opcional)`),lg()(),Ml(975,`p`),mN(976,`Define o estilo visual da ação quando exibida como botão fora do `),Ml(977,`em`),mN(978,`dropdown`),lg(),mN(979,`.`),lg(),Ml(980,`p`),mN(981,`Valores permitidos:`),lg(),Ml(982,`ul`)(983,`li`)(984,`code`),mN(985,`primary`),lg(),mN(986,`: botão com maior destaque visual.`),lg(),Ml(987,`li`)(988,`code`),mN(989,`secondary`),lg(),mN(990,`: estilo padrão.`),lg()(),Ml(991,`blockquote`)(992,`p`),mN(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),lg()(),Ml(994,`blockquote`)(995,`p`),mN(996,`Somente uma ação pode ter `),Ml(997,`code`),mN(998,`kind`),lg(),mN(999,` igual a `),Ml(1e3,`code`),mN(1001,`primary`),lg(),mN(1002,`. Caso mais de uma defina `),Ml(1003,`code`),mN(1004,`primary`),lg(),mN(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Ml(1006,`code`),mN(1007,`secondary`),lg(),mN(1008,`.`),lg()(),Ml(1009,`blockquote`)(1010,`p`),mN(1011,`Quando não definido, o estilo é determinado pelo `),Ml(1012,`code`),mN(1013,`PoPageActionsLayout`),lg(),mN(1014,`.`),lg()()()(),Ml(1015,`tr`,14)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),mN(1019,` label`),ql(1020,`br`),lg()()(),Ml(1021,`td`,18)(1022,`code`,26),mN(1023,`string`),lg()(),Ml(1024,`td`,21)(1025,`p`),mN(1026,`Rótulo da ação.`),lg(),Ml(1027,`p`),mN(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(1029,`code`),mN(1030,`subItems`),lg(),mN(1031,`.`),lg()()(),Ml(1032,`tr`,14)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),mN(1036,` selected`),ql(1037,`br`),lg()()(),Ml(1038,`td`,18)(1039,`code`,41),mN(1040,`boolean`),lg()(),Ml(1041,`td`,21)(1042,`em`)(1043,`strong`),mN(1044,`(opcional)`),lg()(),Ml(1045,`p`),mN(1046,`Define se a ação está selecionada.`),lg()()(),Ml(1047,`tr`,14)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),mN(1051,` separator`),ql(1052,`br`),lg()()(),Ml(1053,`td`,18)(1054,`code`,41),mN(1055,`boolean`),lg()(),Ml(1056,`td`,21)(1057,`em`)(1058,`strong`),mN(1059,`(opcional)`),lg()(),Ml(1060,`p`),mN(1061,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(1062,`tr`,14)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),mN(1066,` subItems`),ql(1067,`br`),lg()()(),Ml(1068,`td`,18)(1069,`code`,44),mN(1070,`Array<PoPopupAction>`),lg()(),Ml(1071,`td`,21)(1072,`em`)(1073,`strong`),mN(1074,`(opcional)`),lg()(),Ml(1075,`p`),mN(1076,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(1077,`p`),mN(1078,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(1079,`blockquote`)(1080,`p`),mN(1081,`As propriedades `),Ml(1082,`code`),mN(1083,`disabled`),lg(),mN(1084,`, `),Ml(1085,`code`),mN(1086,`type`),lg(),mN(1087,` e `),Ml(1088,`code`),mN(1089,`visible`),lg(),mN(1090,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(1091,`blockquote`)(1092,`p`),mN(1093,`Quando `),Ml(1094,`code`),mN(1095,`url`),lg(),mN(1096,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(1097,`blockquote`)(1098,`p`),mN(1099,`Em subníveis aninhados, o `),Ml(1100,`code`),mN(1101,`icon`),lg(),mN(1102,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(1103,`tr`,14)(1104,`td`,15)(1105,`div`,16)(1106,`span`,17),mN(1107,` type`),ql(1108,`br`),lg()()(),Ml(1109,`td`,18)(1110,`code`,26),mN(1111,`string`),lg()(),Ml(1112,`td`,21)(1113,`em`)(1114,`strong`),mN(1115,`(opcional)`),lg()(),Ml(1116,`p`),mN(1117,`Define a cor do item.`),lg(),Ml(1118,`p`),mN(1119,`Valores válidos:`),lg(),Ml(1120,`ul`)(1121,`li`)(1122,`code`),mN(1123,`default`),lg()(),Ml(1124,`li`)(1125,`code`),mN(1126,`danger`),lg()()()()(),Ml(1127,`tr`,14)(1128,`td`,15)(1129,`div`,16)(1130,`span`,17),mN(1131,` url`),ql(1132,`br`),lg()()(),Ml(1133,`td`,18)(1134,`code`,26),mN(1135,`string`),lg()(),Ml(1136,`td`,21)(1137,`em`)(1138,`strong`),mN(1139,`(opcional)`),lg()(),Ml(1140,`p`),mN(1141,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(1142,`p`),mN(1143,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(1144,`code`),mN(1145,`url`),lg(),mN(1146,` é informada em um agrupador, o clique `),Ml(1147,`strong`),mN(1148,`não abrirá os subitens`),lg(),mN(1149,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(1150,`blockquote`)(1151,`p`),mN(1152,`Quando informada, tem prioridade sobre a propriedade `),Ml(1153,`code`),mN(1154,`action`),lg(),mN(1155,`.`),lg()()()(),Ml(1156,`tr`,14)(1157,`td`,15)(1158,`div`,16)(1159,`span`,17),mN(1160,` visible`),ql(1161,`br`),lg()()(),Ml(1162,`td`,18)(1163,`code`,41),mN(1164,`boolean `),lg(),Ml(1165,`code`,33),mN(1166,` Function`),lg()(),Ml(1167,`td`,21)(1168,`em`)(1169,`strong`),mN(1170,`(opcional)`),lg()(),Ml(1171,`p`),mN(1172,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(1173,`h4`,34)(1174,`code`,5),mN(1175,`PoPageDefaultLiterals`),lg()(),Ml(1176,`div`,2)(1177,`p`),mN(1178,`Interface para definição das literais usadas no `),Ml(1179,`code`),mN(1180,`po-page-default`),lg(),mN(1181,`.`),lg()(),Ml(1182,`h4`,10),mN(1183,`Propriedades`),lg(),Ml(1184,`table`,11)(1185,`tr`,12)(1186,`th`,13),mN(1187,`Nome`),lg(),Ml(1188,`th`,13),mN(1189,`Tipo`),lg(),Ml(1190,`th`,13),mN(1191,`Descrição`),lg()(),Ml(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),mN(1196,` otherActions`),ql(1197,`br`),lg()()(),Ml(1198,`td`,18)(1199,`code`,26),mN(1200,`string`),lg()(),Ml(1201,`td`,21)(1202,`em`)(1203,`strong`),mN(1204,`(opcional)`),lg()(),Ml(1205,`p`),mN(1206,`Legenda do `),Ml(1207,`code`),mN(1208,`po-dropdown`),lg(),mN(1209,` de ações.`),lg()()()(),Ml(1210,`h3`),mN(1211,`Enums`),lg(),Ml(1212,`h4`,4)(1213,`code`,5),mN(1214,`PoPageActionsLayout`),lg()(),Ml(1215,`div`,2)(1216,`p`),mN(1217,`Define os layouts de exibição das ações no cabeçalho do `),Ml(1218,`code`),mN(1219,`po-page-default`),lg(),mN(1220,`.`),lg(),Ml(1221,`blockquote`)(1222,`p`),mN(1223,`Compatível com todos os valores de `),Ml(1224,`code`),mN(1225,`PoPageHeaderType`),lg(),mN(1226,`.`),lg()()(),Ml(1227,`h4`,10),mN(1228,`Propriedades`),lg(),Ml(1229,`table`,11)(1230,`tr`,12)(1231,`th`,13),mN(1232,`Nome`),lg(),Ml(1233,`th`,13),mN(1234,`Descrição`),lg()(),Ml(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),mN(1239,` default`),ql(1240,`br`),lg()()(),Ml(1241,`td`,21)(1242,`p`),mN(1243,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Ml(1244,`em`),mN(1245,`dropdown`),lg(),mN(1246,`.`),lg(),Ml(1247,`p`),mN(1248,`Quando `),Ml(1249,`code`),mN(1250,`PoPageAction.kind`),lg(),mN(1251,` não é definido, a primeira ação recebe o estilo `),Ml(1252,`code`),mN(1253,`primary`),lg(),mN(1254,`
e as demais recebem `),Ml(1255,`code`),mN(1256,`secondary`),lg(),mN(1257,`.`),lg()()(),Ml(1258,`tr`,14)(1259,`td`,15)(1260,`div`,16)(1261,`span`,17),mN(1262,` dropdown`),ql(1263,`br`),lg()()(),Ml(1264,`td`,21)(1265,`p`),mN(1266,`Agrupa todas as ações exclusivamente dentro do menu `),Ml(1267,`em`),mN(1268,`dropdown`),lg(),mN(1269,`.`),lg()()(),Ml(1270,`tr`,14)(1271,`td`,15)(1272,`div`,16)(1273,`span`,17),mN(1274,` mixed`),ql(1275,`br`),lg()()(),Ml(1276,`td`,21)(1277,`p`),mN(1278,`Exibe a primeira ação como botão e agrupa as demais no `),Ml(1279,`em`),mN(1280,`dropdown`),lg(),mN(1281,`.`),lg()()()(),Ml(1282,`h4`,4)(1283,`code`,5),mN(1284,`PoPageHeaderType`),lg()(),Ml(1285,`div`,2)(1286,`p`),mN(1287,`Define os tipos de cabeçalho disponíveis no `),Ml(1288,`code`),mN(1289,`po-page-default`),lg(),mN(1290,`.`),lg()(),Ml(1291,`h4`,10),mN(1292,`Propriedades`),lg(),Ml(1293,`table`,11)(1294,`tr`,12)(1295,`th`,13),mN(1296,`Nome`),lg(),Ml(1297,`th`,13),mN(1298,`Descrição`),lg()(),Ml(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),mN(1303,` primary`),ql(1304,`br`),lg()()(),Ml(1305,`td`,21)(1306,`p`),mN(1307,`Layout padrão com suporte a `),Ml(1308,`code`),mN(1309,`p-breadcrumb`),lg(),mN(1310,`.`),lg()()(),Ml(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),mN(1315,` secondary`),ql(1316,`br`),lg()()(),Ml(1317,`td`,21)(1318,`p`),mN(1319,`Exibe um botão de retorno ao lado do título.`),lg(),Ml(1320,`blockquote`)(1321,`p`),mN(1322,`Incompatível com `),Ml(1323,`code`),mN(1324,`p-breadcrumb`),lg(),mN(1325,`.`),lg()()()(),Ml(1326,`tr`,14)(1327,`td`,15)(1328,`div`,16)(1329,`span`,17),mN(1330,` tertiary`),ql(1331,`br`),lg()()(),Ml(1332,`td`,21)(1333,`p`),mN(1334,`Layout simplificado sem botão de retorno.`),lg(),Ml(1335,`blockquote`)(1336,`p`),mN(1337,`Incompatível com `),Ml(1338,`code`),mN(1339,`p-breadcrumb`),lg(),mN(1340,`.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-page-default-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-page-default-basic-view`)(6,`sample-po-page-default-labs-view`)(7,`sample-po-page-default-dashboard-view`)(8,`sample-po-page-default-refresh-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,xe,ye,Ce,De,_e],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Ke),NL]})}return a})();var Ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Te]})}return a})();export{Ft as DocPoPageDefaultModule};