import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Wx,Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,O as Dc,Q as Pze,Qi as pt,Qt as m4,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Ur as Rx,Vr as RN,Wi as mg,Wn as Ax,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,b as Au,ci as be,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,ht as V3,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,pr as I,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(r,i){r&1&&Kc(0,`po-page-default`,0)},dependencies:[vze],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Default Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-default-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Le,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Se],encapsulation:2,changeDetection:1})}return a})();var Be=()=>({});function Fe(a,ke){if(a&1){let p=Bx();Ac(0,`po-input`,37),RE(`ngModelChange`,function(i){Jv(p);let m=Wx(2);return DN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),e_(i)}),ug(),p0()}if(a&2){let p=Wx(2);TE(`ngModel`,p.helperFooterLabel),m0()}}function Oe(a,ke){if(a&1){let p=Bx();Ac(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),RE(`ngModelChange`,function(i){Jv(p);let m=Wx();return DN(m.helperTitle,i)||(m.helperTitle=i),e_(i)}),ug(),p0(),Ac(3,`po-input`,34),RE(`ngModelChange`,function(i){Jv(p);let m=Wx();return DN(m.helperContent,i)||(m.helperContent=i),e_(i)}),ug(),p0(),ug(),Ac(4,`div`,6)(5,`po-radio-group`,35),pt(`ngModelChange`,function(i){Jv(p);let m=Wx();return e_(m.helperType=i)}),ug(),p0(),ug(),Ac(6,`div`,6),Rx(7,Fe,1,1,`po-input`,36),ug()()}if(a&2){let p=Wx();Hp(2),TE(`ngModel`,p.helperTitle),m0(),Hp(),TE(`ngModel`,p.helperContent),m0(),Hp(2),cE(`p-columns`,4)(`ngModel`,p.helperType)(`p-options`,p.helperTypeOptions),m0(),Hp(2),Ax(p.helperType===`help`?7:-1)}}var ve=(()=>{class a{poNotification=f(Au);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let p={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(p.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),p}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(p){let r$1=s(r({},p),{visible:p.visible!==void 0?p.visible:!0,disabled:p.disabled!==void 0?p.disabled:!1});r$1.action=r$1.action?this.showAction.bind(this,r$1.action):void 0,this.actions=[...this.actions,r$1],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Bx();Ac(0,`po-page-default`,5),pt(`p-back`,function(){return i.onBack()}),ug(),Kc(1,`po-divider`),Ac(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(m),DN(i.title,l)||(i.title=l),e_(l)}),ug(),p0(),Ac(6,`po-input`,8),RE(`ngModelChange`,function(l){return Jv(m),DN(i.subtitle,l)||(i.subtitle=l),e_(l)}),ug(),p0(),Ac(7,`po-checkbox`,9),RE(`ngModelChange`,function(l){return Jv(m),DN(i.showHelper,l)||(i.showHelper=l),e_(l)}),ug(),p0(),Ac(8,`po-checkbox`,10),RE(`ngModelChange`,function(l){return Jv(m),DN(i.showRefresh,l)||(i.showRefresh=l),e_(l)}),ug(),p0(),Rx(9,Oe,8,6,`po-widget`,11),Ac(10,`po-select`,12),pt(`ngModelChange`,function(l){return i.pageHeaderType=l}),ug(),p0(),Ac(11,`po-select`,13),pt(`ngModelChange`,function(l){return i.pageActionsLayout=l}),ug(),p0(),Ac(12,`po-input`,14),RE(`ngModelChange`,function(l){return Jv(m),DN(i.literals,l)||(i.literals=l),e_(l)}),pt(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(13,`po-radio-group`,15),RE(`ngModelChange`,function(l){return Jv(m),DN(i.componentsSize,l)||(i.componentsSize=l),e_(l)}),ug(),p0(),ug()(),Kc(14,`po-divider`),Ac(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),RE(`ngModelChange`,function(l){return Jv(m),DN(i.action.label,l)||(i.action.label=l),e_(l)}),ug(),p0(),Ac(20,`po-input`,18),RE(`ngModelChange`,function(l){return Jv(m),DN(i.action.action,l)||(i.action.action=l),e_(l)}),ug(),p0(),Ac(21,`po-input`,19),RE(`ngModelChange`,function(l){return Jv(m),DN(i.action.url,l)||(i.action.url=l),e_(l)}),ug(),p0(),Ac(22,`po-select`,20),pt(`ngModelChange`,function(l){return i.action.type=l}),ug(),p0(),Ac(23,`po-select`,21),pt(`ngModelChange`,function(l){return i.action.icon=l}),ug(),p0(),Ac(24,`po-select`,22),pt(`ngModelChange`,function(l){return i.action.kind=l}),ug(),p0(),Ac(25,`po-checkbox-group`,23),pt(`ngModelChange`,function(l){return i.action=l}),ug(),p0(),ug(),Ac(26,`div`,6)(27,`po-button`,24),pt(`p-click`,function(){return i.addAction(i.action)}),ug()()()(),Kc(28,`po-divider`),Ac(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),RE(`ngModelChange`,function(l){return Jv(m),DN(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),e_(l)}),ug(),p0(),ug()(),Ac(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),RE(`ngModelChange`,function(l){return Jv(m),DN(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),e_(l)}),ug(),p0(),Ac(37,`po-input`,27),RE(`ngModelChange`,function(l){return Jv(m),DN(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),e_(l)}),ug(),p0(),ug(),Ac(38,`div`,6)(39,`po-button`,28),pt(`p-click`,function(){return i.addBreadcrumbItem()}),ug()()(),Kc(40,`po-divider`),Ac(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),RE(`ngModelChange`,function(l){return Jv(m),DN(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),e_(l)}),ug(),p0(),Ac(45,`po-input`,30),RE(`ngModelChange`,function(l){return Jv(m),DN(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),e_(l)}),ug(),p0(),ug(),Ac(46,`div`,6)(47,`po-button`,31),pt(`p-click`,function(){return i.addBreadcrumbParam()}),ug()()(),Kc(48,`po-divider`),Ac(49,`div`,6)(50,`po-button`,32),pt(`p-click`,function(){return i.restore()}),ug()()}if(r&2){let m=Zx(17),c=Zx(34),l=Zx(42);cE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??RN(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Hp(5),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.subtitle),m0(),Hp(),TE(`ngModel`,i.showHelper),m0(),Hp(),TE(`ngModel`,i.showRefresh),m0(),Hp(),Ax(i.showHelper?9:-1),Hp(),cE(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),m0(),Hp(),cE(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),m0(),Hp(),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-columns`,4)(`p-options`,i.componentsSizeOptions),m0(),Hp(6),TE(`ngModel`,i.action.label),m0(),Hp(),TE(`ngModel`,i.action.action),m0(),Hp(),TE(`ngModel`,i.action.url),m0(),Hp(),cE(`ngModel`,i.action.type)(`p-options`,i.typeOptions),m0(),Hp(),cE(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),m0(),Hp(),cE(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),m0(),Hp(),cE(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),m0(),Hp(2),cE(`p-disabled`,m.form.invalid),Hp(5),TE(`ngModel`,i.breadcrumb.favorite),m0(),Hp(4),TE(`ngModel`,i.breadcrumbItem.label),m0(),Hp(),TE(`ngModel`,i.breadcrumbItem.link),m0(),Hp(2),cE(`p-disabled`,c.invalid??!1),Hp(5),TE(`ngModel`,i.breadcrumbParams.property),m0(),Hp(),TE(`ngModel`,i.breadcrumbParams.value),m0(),Hp(2),cE(`p-disabled`,l.invalid??!1)}},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,Dc,_4,Cte,ioe,vze,Pze],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Default Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-default-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ve],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=[`formShare`];var Pe=(()=>{class a{poNotification=f(Au);sampleDashboardService=f(oe);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(r,i){if(r&1&&Xc(We,7)(wa,7),r&2){let m;fo(m=ho())&&(i.formShare=m.first),fo(m=ho())&&(i.poModal=m.first)}},standalone:!1,features:[be([oe])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Bx();Ac(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),vN(4,`540`),ug(),Ac(5,`div`,5),vN(6,`www.po.com.br`),ug()(),Ac(7,`po-widget`,6)(8,`div`,4),vN(9,`300 views`),ug(),Ac(10,`div`,5),vN(11,`https://po-ui.io`),ug()(),Ac(12,`po-widget`,7)(13,`div`,4),vN(14,`Online`),ug(),Ac(15,`div`,5),vN(16,`28 days`),ug()(),Ac(17,`po-widget`,8)(18,`div`,4),vN(19,`266`),ug(),Ac(20,`div`,5),vN(21,`@po-ui/ng-components - 1.10.1`),ug()(),Ac(22,`po-widget`,9)(23,`div`,4),vN(24,`800 questions`),ug(),Ac(25,`div`,5),vN(26,`https://devforum.po.com.br`),ug()(),Ac(27,`po-widget`,10)(28,`div`,4),vN(29,`AngularJS - Angular 6`),ug(),Ac(30,`div`,5),vN(31,`Angular 6 most downloaded`),ug()()(),Kc(32,`po-divider`)(33,`po-table`,11),ug(),Ac(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),RE(`ngModelChange`,function(l){return Jv(m),DN(i.email,l)||(i.email=l),e_(l)}),ug(),p0(),ug()()}r&2&&(cE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),Hp(33),cE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Hp(),cE(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Hp(3),TE(`ngModel`,i.email),m0())},dependencies:[b9,D9,C9,BP,LP,ob,V3,wa,vze,m4,Pze],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Default - Dashboard`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),ug(),Ac(29,`pre`,11),vN(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-page-default-dashboard`),ug(),Kc(33,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(p){this.poNotification=p}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(p=>s(r({},p),{quantity:p.quantity+Math.floor(Math.random()*10),status:this.getStatus(p.quantity+Math.floor(Math.random()*10))}))}getStatus(p){return p===0?`Out of stock`:p<=5?`Low stock`:`Available`}static ɵfac=function(r){return new(r||a)(E(Au))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0),Kc(1,`po-table`,1),ug()),r&2&&(cE(`p-refresh`,i.onRefresh),Hp(),cE(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[vze,m4],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Default - Refresh`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-default-refresh`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,we],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1341,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-h4`,`docs-api-class-name`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ac(7,`code`),vN(8,`po-page-default`),ug(),vN(9,`, `),Ac(10,`code`),vN(11,`po-page-detail`),ug(),vN(12,`,
`),Ac(13,`code`),vN(14,`po-page-edit`),ug(),vN(15,`, `),Ac(16,`code`),vN(17,`po-page-list`),ug(),vN(18,` e `),Ac(19,`code`),vN(20,`po-page-slide`),ug(),vN(21,`.`),ug()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoPageDefaultComponent`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,`O `),Ac(30,`code`),vN(31,`po-page-default`),ug(),vN(32,` é utilizado como container principal para telas sem um template definido.`),ug(),Ac(33,`p`),vN(34,`Oferece suporte a cabeçalhos dinâmicos via `),Ac(35,`code`),vN(36,`p-page-header-type`),ug(),vN(37,`, navegação por `),Ac(38,`em`),vN(39,`breadcrumb`),ug(),vN(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Ac(41,`code`),vN(42,`p-page-actions-layout`),ug(),vN(43,`.`),ug(),Ac(44,`h4`),vN(45,`Tokens customizáveis`),ug(),Ac(46,`blockquote`)(47,`p`),vN(48,`Para maiores informações, acesse o guia `),Ac(49,`a`,6),vN(50,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(51,`.`),ug()(),Ac(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),vN(56,`Propriedade`),ug(),Ac(57,`th`),vN(58,`Descrição`),ug(),Ac(59,`th`),vN(60,`Valor Padrão`),ug()()(),Ac(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),vN(65,`Página (po-page-default)`),ug()(),Kc(66,`td`)(67,`td`),ug(),Ac(68,`tr`)(69,`td`)(70,`code`),vN(71,`--background`),ug()(),Ac(72,`td`),vN(73,`Background da página (header e body)`),ug(),Ac(74,`td`)(75,`code`),vN(76,`var(--color-page-background-color-page)`),ug()()(),Ac(77,`tr`)(78,`td`)(79,`strong`),vN(80,`Header (po-page-header)`),ug()(),Kc(81,`td`)(82,`td`),ug(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--padding`),ug()(),Ac(87,`td`),vN(88,`Espaçamento do header`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--gap`),ug()(),Ac(96,`td`),vN(97,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--spacing-md)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--gap-actions`),ug()(),Ac(105,`td`),vN(106,`Espaçamento entre as ações`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--spacing-xs)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`strong`),vN(113,`Header (po-page-header .po-page-header-title)`),ug()(),Kc(114,`td`)(115,`td`),ug(),Ac(116,`tr`)(117,`td`)(118,`code`),vN(119,`--font-family`),ug()(),Ac(120,`td`),vN(121,`Família tipográfica do título`),ug(),Ac(122,`td`)(123,`code`),vN(124,`var(--font-family-theme)`),ug()()(),Ac(125,`tr`)(126,`td`)(127,`strong`),vN(128,`Content (po-page-content)`),ug()(),Kc(129,`td`)(130,`td`),ug(),Ac(131,`tr`)(132,`td`)(133,`code`),vN(134,`--padding-content`),ug()(),Ac(135,`td`),vN(136,`Espaçamento do conteúdo`),ug(),Ac(137,`td`)(138,`code`),vN(139,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(140,`div`,7)(141,`h4`,8),vN(142,`Seletor`),ug(),Ac(143,`pre`,9),vN(144,`<po-page-default
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
`),ug()(),Ac(145,`h4`,10),vN(146,`Propriedades`),ug(),Ac(147,`table`,11)(148,`tr`,12)(149,`th`,13),vN(150,`Nome`),ug(),Ac(151,`th`,13),vN(152,`Tipo`),ug(),Ac(153,`th`,13),vN(154,`Padrão`),ug(),Ac(155,`th`,13),vN(156,`Descrição`),ug()(),Ac(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),vN(161,` p-actions`),Kc(162,`br`),ug()()(),Ac(163,`td`,18)(164,`code`,19),vN(165,`Array<PoPageAction>`),ug()(),Ac(166,`td`,20)(167,`p`)(168,`code`),vN(169,`[]`),ug()()(),Ac(170,`td`,21)(171,`em`)(172,`strong`),vN(173,`(opcional)`),ug()(),Ac(174,`p`),vN(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),ug(),Ac(176,`p`),vN(177,`Recebe um array de objetos que implementam a interface `),Ac(178,`code`),vN(179,`PoPageAction`),ug(),vN(180,`.`),ug(),Ac(181,`blockquote`)(182,`p`),vN(183,`O comportamento de exibição pode ser customizado através da propriedade `),Ac(184,`code`),vN(185,`p-page-actions-layout`),ug(),vN(186,`.`),ug()()()(),Ac(187,`tr`,14)(188,`td`,15)(189,`div`,22)(190,`span`,23),vN(191,` (p-back)`),Kc(192,`br`),ug()()(),Ac(193,`td`,18)(194,`code`,24),vN(195,`EventEmitter`),ug()(),Ac(196,`td`,20),vN(197,`-`),ug(),Ac(198,`td`,21)(199,`em`)(200,`strong`),vN(201,`(opcional)`),ug()(),Ac(202,`p`),vN(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),ug(),Ac(204,`blockquote`)(205,`p`),vN(206,`Botão exibido apenas quando a propriedade `),Ac(207,`code`),vN(208,`p-page-header-type`),ug(),vN(209,` está configurada como `),Ac(210,`code`),vN(211,`secondary`),ug(),vN(212,`.`),ug()()()(),Ac(213,`tr`,14)(214,`td`,15)(215,`div`,16)(216,`span`,17),vN(217,` p-breadcrumb`),Kc(218,`br`),ug()()(),Ac(219,`td`,18)(220,`code`,25),vN(221,`PoBreadcrumb`),ug()(),Ac(222,`td`,20),vN(223,`-`),ug(),Ac(224,`td`,21)(225,`em`)(226,`strong`),vN(227,`(opcional)`),ug()(),Ac(228,`p`),vN(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),ug(),Ac(230,`p`),vN(231,`Recebe um objeto que implementa a interface `),Ac(232,`code`),vN(233,`PoBreadcrumb`),ug(),vN(234,`.`),ug(),Ac(235,`blockquote`)(236,`p`),vN(237,`Compatível com o cabeçalho (`),Ac(238,`code`),vN(239,`p-page-header-type`),ug(),vN(240,`) do tipo `),Ac(241,`code`),vN(242,`primary`),ug(),vN(243,`.`),ug()()()(),Ac(244,`tr`,14)(245,`td`,15)(246,`div`,16)(247,`span`,17),vN(248,` p-components-size`),Kc(249,`br`),ug()()(),Ac(250,`td`,18)(251,`code`,26),vN(252,`string`),ug()(),Ac(253,`td`,20)(254,`p`)(255,`code`),vN(256,`medium`),ug()()(),Ac(257,`td`,21)(258,`em`)(259,`strong`),vN(260,`(opcional)`),ug()(),Ac(261,`p`),vN(262,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(263,`ul`)(264,`li`)(265,`code`),vN(266,`small`),ug(),vN(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(268,`li`)(269,`code`),vN(270,`medium`),ug(),vN(271,`: aplica a medida medium de cada componente.`),ug()(),Ac(272,`blockquote`)(273,`p`),vN(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(275,`code`),vN(276,`medium`),ug(),vN(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(278,`a`,27),vN(279,`po-theme`),ug(),vN(280,`.`),ug()()()(),Ac(281,`tr`,14)(282,`td`,15)(283,`div`,16)(284,`span`,17),vN(285,` p-helper`),Kc(286,`br`),ug()()(),Ac(287,`td`,18)(288,`code`,28),vN(289,`PoHelperOptions `),ug(),Ac(290,`code`,26),vN(291,` string`),ug()(),Ac(292,`td`,20)(293,`p`)(294,`code`),vN(295,`info`),ug()()(),Ac(296,`td`,21)(297,`em`)(298,`strong`),vN(299,`(opcional)`),ug()(),Ac(300,`p`),vN(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),ug(),Ac(302,`p`),vN(303,`Quando não houver subtítulo (`),Ac(304,`code`),vN(305,`p-subtitle`),ug(),vN(306,`), o po-helper será exibido logo abaixo do título.`),ug(),Ac(307,`p`),vN(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Ac(309,`code`),vN(310,`PoHelperOptions`),ug(),vN(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),ug(),Ac(312,`p`),vN(313,`Exemplo de uso:`),ug(),Ac(314,`pre`)(315,`code`,29),vN(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),ug()()()(),Ac(317,`tr`,14)(318,`td`,15)(319,`div`,16)(320,`span`,17),vN(321,` p-literals`),Kc(322,`br`),ug()()(),Ac(323,`td`,18)(324,`code`,30),vN(325,`PoPageDefaultLiterals`),ug()(),Ac(326,`td`,20),vN(327,`-`),ug(),Ac(328,`td`,21)(329,`em`)(330,`strong`),vN(331,`(opcional)`),ug()(),Ac(332,`p`),vN(333,`Permite a customização das literais utilizadas no componente.`),ug(),Ac(334,`p`),vN(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Ac(336,`code`),vN(337,`PoPageDefaultLiterals`),ug(),vN(338,`.`),ug(),Ac(339,`p`),vN(340,`Exemplo de uso:`),ug(),Ac(341,`pre`)(342,`code`,29),vN(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),ug()(),Ac(344,`pre`)(345,`code`,31),vN(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),ug()(),Ac(347,`blockquote`)(348,`p`),vN(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ac(350,`a`,32)(351,`code`),vN(352,`PoI18nService`),ug()(),vN(353,` ou navegador.`),ug()()()(),Ac(354,`tr`,14)(355,`td`,15)(356,`div`,16)(357,`span`,17),vN(358,` p-page-actions-layout`),Kc(359,`br`),ug()()(),Ac(360,`td`,18)(361,`code`,26),vN(362,`string`),ug()(),Ac(363,`td`,20)(364,`p`)(365,`code`),vN(366,`default`),ug()()(),Ac(367,`td`,21)(368,`em`)(369,`strong`),vN(370,`(opcional)`),ug()(),Ac(371,`p`),vN(372,`Define o layout de exibição das ações no cabeçalho.`),ug(),Ac(373,`p`),vN(374,`Aceita valores do enum `),Ac(375,`code`),vN(376,`PoPageActionsLayout`),ug(),vN(377,`.`),ug(),Ac(378,`blockquote`)(379,`p`),vN(380,`Em telas reduzidas (< 480px) as ações fora do `),Ac(381,`em`),vN(382,`dropdown`),ug(),vN(383,` que possuam a propriedade `),Ac(384,`code`),vN(385,`PoPageAction.icon`),ug(),vN(386,` definida
exibir\xE3o apenas o \xEDcone.`),ug()()()(),Ac(387,`tr`,14)(388,`td`,15)(389,`div`,16)(390,`span`,17),vN(391,` p-page-header-type`),Kc(392,`br`),ug()()(),Ac(393,`td`,18)(394,`code`,26),vN(395,`string`),ug()(),Ac(396,`td`,20)(397,`p`)(398,`code`),vN(399,`primary`),ug()()(),Ac(400,`td`,21)(401,`em`)(402,`strong`),vN(403,`(opcional)`),ug()(),Ac(404,`p`),vN(405,`Define o tipo de cabeçalho da página.`),ug(),Ac(406,`p`),vN(407,`Aceita valores do enum `),Ac(408,`code`),vN(409,`PoPageHeaderType`),ug(),vN(410,`.`),ug()()(),Ac(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),vN(415,` p-refresh`),Kc(416,`br`),ug()()(),Ac(417,`td`,18)(418,`code`,33),vN(419,`Function`),ug()(),Ac(420,`td`,20),vN(421,`-`),ug(),Ac(422,`td`,21)(423,`em`)(424,`strong`),vN(425,`(opcional)`),ug()(),Ac(426,`p`),vN(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),ug(),Ac(428,`p`),vN(429,`Quando não houver subtítulo (`),Ac(430,`code`),vN(431,`p-subtitle`),ug(),vN(432,`), o refresh será exibido logo abaixo do título.`),ug(),Ac(433,`blockquote`)(434,`p`),vN(435,`Esta propriedade possui precedência sobre a configuração de `),Ac(436,`code`),vN(437,`p-helper`),ug(),vN(438,`.`),ug()(),Ac(439,`p`),vN(440,`Exemplo de uso:`),ug(),Ac(441,`pre`)(442,`code`,29),vN(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),ug()()()(),Ac(444,`tr`,14)(445,`td`,15)(446,`div`,16)(447,`span`,17),vN(448,` p-subtitle`),Kc(449,`br`),ug()()(),Ac(450,`td`,18)(451,`code`,26),vN(452,`string`),ug()(),Ac(453,`td`,20),vN(454,`-`),ug(),Ac(455,`td`,21)(456,`em`)(457,`strong`),vN(458,`(opcional)`),ug()(),Ac(459,`p`),vN(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),ug(),Ac(461,`p`),vN(462,`Suporta formatação básica com as tags `),Ac(463,`code`),vN(464,`<b>`),ug(),vN(465,` (negrito), `),Ac(466,`code`),vN(467,`<strong>`),ug(),vN(468,` (negrito), `),Ac(469,`code`),vN(470,`<i>`),ug(),vN(471,` (itálico), `),Ac(472,`code`),vN(473,`<em>`),ug(),vN(474,` (it\xE1lico) e
`),Ac(475,`code`),vN(476,`<u>`),ug(),vN(477,` (sublinhado).`),ug(),Ac(478,`p`),vN(479,`Exemplo:`),ug(),Ac(480,`pre`)(481,`code`,31),vN(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),ug()(),Ac(483,`blockquote`)(484,`p`),vN(485,`Requer que `),Ac(486,`code`),vN(487,`p-title`),ug(),vN(488,` esteja definido.`),ug()()()(),Ac(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),vN(493,` p-title`),Kc(494,`br`),ug()()(),Ac(495,`td`,18)(496,`code`,26),vN(497,`string`),ug()(),Ac(498,`td`,20),vN(499,`-`),ug(),Ac(500,`td`,21)(501,`em`)(502,`strong`),vN(503,`(opcional)`),ug()(),Ac(504,`p`),vN(505,`Define o título principal da página.`),ug()()()(),Ac(506,`h3`),vN(507,`Interfaces`),ug(),Ac(508,`h4`,34)(509,`code`,5),vN(510,`PoBreadcrumbItem`),ug()(),Ac(511,`div`,2)(512,`p`),vN(513,`Interface que define cada item do componente `),Ac(514,`strong`),vN(515,`po-breadcrumb`),ug(),vN(516,`.`),ug()(),Ac(517,`h4`,10),vN(518,`Propriedades`),ug(),Ac(519,`table`,11)(520,`tr`,12)(521,`th`,13),vN(522,`Nome`),ug(),Ac(523,`th`,13),vN(524,`Tipo`),ug(),Ac(525,`th`,13),vN(526,`Descrição`),ug()(),Ac(527,`tr`,14)(528,`td`,15)(529,`div`,16)(530,`span`,17),vN(531,` action`),Kc(532,`br`),ug()()(),Ac(533,`td`,18)(534,`code`,33),vN(535,`Function`),ug()(),Ac(536,`td`,21)(537,`em`)(538,`strong`),vN(539,`(opcional)`),ug()(),Ac(540,`p`),vN(541,`Ação executada ao clicar no item.`),ug(),Ac(542,`blockquote`)(543,`p`),vN(544,`A função atribuída a esta propriedade receberá o `),Ac(545,`em`),vN(546,`label`),ug(),vN(547,` do item como parâmetro para execução.`),ug()()()(),Ac(548,`tr`,14)(549,`td`,15)(550,`div`,16)(551,`span`,17),vN(552,` label`),Kc(553,`br`),ug()()(),Ac(554,`td`,18)(555,`code`,26),vN(556,`string`),ug()(),Ac(557,`td`,21)(558,`p`),vN(559,`Rótulo do item.`),ug()()(),Ac(560,`tr`,14)(561,`td`,15)(562,`div`,16)(563,`span`,17),vN(564,` link`),Kc(565,`br`),ug()()(),Ac(566,`td`,18)(567,`code`,26),vN(568,`string`),ug()(),Ac(569,`td`,21)(570,`em`)(571,`strong`),vN(572,`(opcional)`),ug()(),Ac(573,`p`),vN(574,`Url do item.`),ug(),Ac(575,`blockquote`)(576,`p`),vN(577,`Caso o item também contenha uma `),Ac(578,`em`),vN(579,`action`),ug(),vN(580,` definida, a preferência de execução será do `),Ac(581,`em`),vN(582,`link`),ug(),vN(583,`.`),ug()(),Ac(584,`blockquote`)(585,`p`),vN(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ac(587,`strong`)(588,`a`,35),vN(589,`Veja um exemplo de como criar rotas aqui`),ug()(),vN(590,`.`),ug()(),Ac(591,`blockquote`)(592,`p`),vN(593,`Esta propriedade é necessária para que a propriedade `),Ac(594,`code`),vN(595,`p-favorite-service`),ug(),vN(596,` consiga favoritar ou desfavoritar.`),ug()()()()(),Ac(597,`h4`,34)(598,`code`,5),vN(599,`PoBreadcrumb`),ug()(),Ac(600,`div`,2)(601,`p`),vN(602,`Interface que define o `),Ac(603,`code`),vN(604,`po-breadcrumb`),ug(),vN(605,`.`),ug()(),Ac(606,`h4`,10),vN(607,`Propriedades`),ug(),Ac(608,`table`,11)(609,`tr`,12)(610,`th`,13),vN(611,`Nome`),ug(),Ac(612,`th`,13),vN(613,`Tipo`),ug(),Ac(614,`th`,13),vN(615,`Descrição`),ug()(),Ac(616,`tr`,14)(617,`td`,15)(618,`div`,16)(619,`span`,17),vN(620,` favorite`),Kc(621,`br`),ug()()(),Ac(622,`td`,18)(623,`code`,26),vN(624,`string`),ug()(),Ac(625,`td`,21)(626,`em`)(627,`strong`),vN(628,`(opcional)`),ug()(),Ac(629,`p`),vN(630,`Permite definir uma URL para favoritar ou desfavoritar.`),ug(),Ac(631,`blockquote`)(632,`p`),vN(633,`Para maiores informações verificar a propriedade `),Ac(634,`code`),vN(635,`p-favorite-service`),ug(),vN(636,` do componente `),Ac(637,`code`),vN(638,`po-breadcrumb`),ug(),vN(639,`.`),ug()()()(),Ac(640,`tr`,14)(641,`td`,15)(642,`div`,16)(643,`span`,17),vN(644,` items`),Kc(645,`br`),ug()()(),Ac(646,`td`,18)(647,`code`,36),vN(648,`Array<PoBreadcrumbItem>`),ug()(),Ac(649,`td`,21)(650,`p`),vN(651,`Lista de itens do `),Ac(652,`em`),vN(653,`breadcrumb`),ug(),vN(654,`.`),ug(),Ac(655,`p`)(656,`strong`),vN(657,`Exemplo:`),ug()(),Ac(658,`pre`)(659,`code`),vN(660,`{ label: 'Po Portal', link: 'portal' }
`),ug()()()(),Ac(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),vN(665,` params`),Kc(666,`br`),ug()()(),Ac(667,`td`,18)(668,`code`,37),vN(669,`object`),ug()(),Ac(670,`td`,21)(671,`em`)(672,`strong`),vN(673,`(opcional)`),ug()(),Ac(674,`p`),vN(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ug()()()(),Ac(676,`h4`,34)(677,`code`,5),vN(678,`PoHelperOptions`),ug()(),Ac(679,`div`,2)(680,`p`),vN(681,`Interface para configuração das opções de ajuda (`),Ac(682,`em`),vN(683,`helper`),ug(),vN(684,`).`),ug()(),Ac(685,`h4`,10),vN(686,`Propriedades`),ug(),Ac(687,`table`,11)(688,`tr`,12)(689,`th`,13),vN(690,`Nome`),ug(),Ac(691,`th`,13),vN(692,`Tipo`),ug(),Ac(693,`th`,13),vN(694,`Descrição`),ug()(),Ac(695,`tr`,14)(696,`td`,15)(697,`div`,16)(698,`span`,17),vN(699,` content`),Kc(700,`br`),ug()()(),Ac(701,`td`,18)(702,`code`,26),vN(703,`string`),ug()(),Ac(704,`td`,21)(705,`em`)(706,`strong`),vN(707,`(opcional)`),ug()(),Ac(708,`p`),vN(709,`Texto explicativo exibido no popover.`),ug(),Ac(710,`p`),vN(711,`Suporta formatação básica com as tags `),Ac(712,`code`),vN(713,`<b>`),ug(),vN(714,` (negrito), `),Ac(715,`code`),vN(716,`<strong>`),ug(),vN(717,` (negrito), `),Ac(718,`code`),vN(719,`<i>`),ug(),vN(720,` (itálico), `),Ac(721,`code`),vN(722,`<em>`),ug(),vN(723,` (it\xE1lico) e
`),Ac(724,`code`),vN(725,`<u>`),ug(),vN(726,` (sublinhado).`),ug(),Ac(727,`p`),vN(728,`Exemplo:`),ug(),Ac(729,`pre`)(730,`code`,31),vN(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ug()()()(),Ac(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),vN(736,` eventOnClick`),Kc(737,`br`),ug()()(),Ac(738,`td`,18)(739,`code`,33),vN(740,`Function`),ug()(),Ac(741,`td`,21)(742,`em`)(743,`strong`),vN(744,`(opcional)`),ug()(),Ac(745,`p`),vN(746,`Evento disparado ao clicar no ícone do helper.`),ug(),Ac(747,`p`),vN(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),ug(),Ac(749,`p`),vN(750,`Pode ser uma função ou um `),Ac(751,`code`),vN(752,`EventEmitter`),ug(),vN(753,`.`),ug(),Ac(754,`p`),vN(755,`Exemplo:`),ug(),Ac(756,`pre`)(757,`code`),vN(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ug()()()(),Ac(759,`tr`,14)(760,`td`,15)(761,`div`,16)(762,`span`,17),vN(763,` footerAction`),Kc(764,`br`),ug()()(),Ac(765,`td`,18)(766,`code`,38),vN(767,`{ label: string; action: Function;
}`),ug()(),Ac(768,`td`,21)(769,`em`)(770,`strong`),vN(771,`(opcional)`),ug()(),Ac(772,`p`),vN(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Ac(774,`code`),vN(775,`help`),ug(),vN(776,` e desconsiderada quando o type for `),Ac(777,`code`),vN(778,`info`),ug(),vN(779,`.`),ug(),Ac(780,`p`),vN(781,`Deve ser um objeto com as propriedades:`),ug(),Ac(782,`ul`)(783,`li`)(784,`code`),vN(785,`label`),ug(),vN(786,`: Texto do botão.`),ug(),Ac(787,`li`)(788,`code`),vN(789,`action`),ug(),vN(790,`: Função executada ao clicar no botão.`),ug()(),Ac(791,`p`),vN(792,`Exemplo:`),ug(),Ac(793,`pre`)(794,`code`,31),vN(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ug()()()(),Ac(796,`tr`,14)(797,`td`,15)(798,`div`,16)(799,`span`,17),vN(800,` title`),Kc(801,`br`),ug()()(),Ac(802,`td`,18)(803,`code`,26),vN(804,`string`),ug()(),Ac(805,`td`,21)(806,`em`)(807,`strong`),vN(808,`(opcional)`),ug()(),Ac(809,`p`),vN(810,`Título do helper exibido no popover.`),ug()()(),Ac(811,`tr`,14)(812,`td`,15)(813,`div`,16)(814,`span`,17),vN(815,` type`),Kc(816,`br`),ug()()(),Ac(817,`td`,18)(818,`code`,39),vN(819,`'info' `),ug(),Ac(820,`code`,40),vN(821,` 'help'`),ug()(),Ac(822,`td`,21)(823,`em`)(824,`strong`),vN(825,`(opcional)`),ug()(),Ac(826,`p`),vN(827,`Tipo do ícone exibido: `),Ac(828,`code`),vN(829,`info`),ug(),vN(830,` ou `),Ac(831,`code`),vN(832,`help`),ug(),vN(833,`.`),ug(),Ac(834,`p`),vN(835,`Quando o valor é `),Ac(836,`code`),vN(837,`info`),ug(),vN(838,`, o popover exibe apenas informações e não permite ações customizadas.`),ug(),Ac(839,`p`),vN(840,`Quando o valor é `),Ac(841,`code`),vN(842,`help`),ug(),vN(843,`, o popover pode exibir ações customizadas no rodapé.`),ug()()()(),Ac(844,`h4`,34)(845,`code`,5),vN(846,`PoPageAction`),ug()(),Ac(847,`div`,2)(848,`p`),vN(849,`Interface para as ações dos componentes `),Ac(850,`code`),vN(851,`po-page-default`),ug(),vN(852,` e `),Ac(853,`code`),vN(854,`po-page-list`),ug(),vN(855,`.`),ug(),Ac(856,`p`),vN(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Ac(858,`em`),vN(859,`dropdown`),ug(),vN(860,`,
conforme o `),Ac(861,`code`),vN(862,`PoPageActionsLayout`),ug(),vN(863,` e o tamanho da tela.`),ug(),Ac(864,`blockquote`)(865,`p`),vN(866,`As propriedades `),Ac(867,`code`),vN(868,`separator`),ug(),vN(869,`, `),Ac(870,`code`),vN(871,`selected`),ug(),vN(872,` e `),Ac(873,`code`),vN(874,`subItems`),ug(),vN(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Ac(876,`em`),vN(877,`dropdown`),ug(),vN(878,`.`),ug()()(),Ac(879,`h4`,10),vN(880,`Propriedades`),ug(),Ac(881,`table`,11)(882,`tr`,12)(883,`th`,13),vN(884,`Nome`),ug(),Ac(885,`th`,13),vN(886,`Tipo`),ug(),Ac(887,`th`,13),vN(888,`Descrição`),ug()(),Ac(889,`tr`,14)(890,`td`,15)(891,`div`,16)(892,`span`,17),vN(893,` action`),Kc(894,`br`),ug()()(),Ac(895,`td`,18)(896,`code`,33),vN(897,`Function`),ug()(),Ac(898,`td`,21)(899,`em`)(900,`strong`),vN(901,`(opcional)`),ug()(),Ac(902,`p`),vN(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(904,`p`),vN(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(906,`code`),vN(907,`subItems`),ug(),vN(908,`.`),ug(),Ac(909,`blockquote`)(910,`p`),vN(911,`Para que a função seja executada no contexto do componente, utilize `),Ac(912,`em`),vN(913,`bind`),ug(),vN(914,`:
`),Ac(915,`code`),vN(916,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(917,`tr`,14)(918,`td`,15)(919,`div`,16)(920,`span`,17),vN(921,` disabled`),Kc(922,`br`),ug()()(),Ac(923,`td`,18)(924,`code`,41),vN(925,`boolean `),ug(),Ac(926,`code`,33),vN(927,` Function`),ug()(),Ac(928,`td`,21)(929,`em`)(930,`strong`),vN(931,`(opcional)`),ug()(),Ac(932,`p`),vN(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(934,`tr`,14)(935,`td`,15)(936,`div`,16)(937,`span`,17),vN(938,` icon`),Kc(939,`br`),ug()()(),Ac(940,`td`,18)(941,`code`,26),vN(942,`string `),ug(),Ac(943,`code`,42),vN(944,` TemplateRef<void>`),ug()(),Ac(945,`td`,21)(946,`em`)(947,`strong`),vN(948,`(opcional)`),ug()(),Ac(949,`p`),vN(950,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(951,`p`),vN(952,`Aceita ícones da `),Ac(953,`a`,43),vN(954,`Biblioteca de ícones`),ug(),vN(955,`, fontes externas (ex: Font Awesome)
ou um `),Ac(956,`code`),vN(957,`TemplateRef`),ug(),vN(958,` para ícones customizados.`),ug(),Ac(959,`pre`)(960,`code`),vN(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(962,`tr`,14)(963,`td`,15)(964,`div`,16)(965,`span`,17),vN(966,` kind`),Kc(967,`br`),ug()()(),Ac(968,`td`,18)(969,`code`,26),vN(970,`string`),ug()(),Ac(971,`td`,21)(972,`em`)(973,`strong`),vN(974,`(opcional)`),ug()(),Ac(975,`p`),vN(976,`Define o estilo visual da ação quando exibida como botão fora do `),Ac(977,`em`),vN(978,`dropdown`),ug(),vN(979,`.`),ug(),Ac(980,`p`),vN(981,`Valores permitidos:`),ug(),Ac(982,`ul`)(983,`li`)(984,`code`),vN(985,`primary`),ug(),vN(986,`: botão com maior destaque visual.`),ug(),Ac(987,`li`)(988,`code`),vN(989,`secondary`),ug(),vN(990,`: estilo padrão.`),ug()(),Ac(991,`blockquote`)(992,`p`),vN(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),ug()(),Ac(994,`blockquote`)(995,`p`),vN(996,`Somente uma ação pode ter `),Ac(997,`code`),vN(998,`kind`),ug(),vN(999,` igual a `),Ac(1e3,`code`),vN(1001,`primary`),ug(),vN(1002,`. Caso mais de uma defina `),Ac(1003,`code`),vN(1004,`primary`),ug(),vN(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Ac(1006,`code`),vN(1007,`secondary`),ug(),vN(1008,`.`),ug()(),Ac(1009,`blockquote`)(1010,`p`),vN(1011,`Quando não definido, o estilo é determinado pelo `),Ac(1012,`code`),vN(1013,`PoPageActionsLayout`),ug(),vN(1014,`.`),ug()()()(),Ac(1015,`tr`,14)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),vN(1019,` label`),Kc(1020,`br`),ug()()(),Ac(1021,`td`,18)(1022,`code`,26),vN(1023,`string`),ug()(),Ac(1024,`td`,21)(1025,`p`),vN(1026,`Rótulo da ação.`),ug(),Ac(1027,`p`),vN(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(1029,`code`),vN(1030,`subItems`),ug(),vN(1031,`.`),ug()()(),Ac(1032,`tr`,14)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),vN(1036,` selected`),Kc(1037,`br`),ug()()(),Ac(1038,`td`,18)(1039,`code`,41),vN(1040,`boolean`),ug()(),Ac(1041,`td`,21)(1042,`em`)(1043,`strong`),vN(1044,`(opcional)`),ug()(),Ac(1045,`p`),vN(1046,`Define se a ação está selecionada.`),ug()()(),Ac(1047,`tr`,14)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),vN(1051,` separator`),Kc(1052,`br`),ug()()(),Ac(1053,`td`,18)(1054,`code`,41),vN(1055,`boolean`),ug()(),Ac(1056,`td`,21)(1057,`em`)(1058,`strong`),vN(1059,`(opcional)`),ug()(),Ac(1060,`p`),vN(1061,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(1062,`tr`,14)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),vN(1066,` subItems`),Kc(1067,`br`),ug()()(),Ac(1068,`td`,18)(1069,`code`,44),vN(1070,`Array<PoPopupAction>`),ug()(),Ac(1071,`td`,21)(1072,`em`)(1073,`strong`),vN(1074,`(opcional)`),ug()(),Ac(1075,`p`),vN(1076,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(1077,`p`),vN(1078,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(1079,`blockquote`)(1080,`p`),vN(1081,`As propriedades `),Ac(1082,`code`),vN(1083,`disabled`),ug(),vN(1084,`, `),Ac(1085,`code`),vN(1086,`type`),ug(),vN(1087,` e `),Ac(1088,`code`),vN(1089,`visible`),ug(),vN(1090,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(1091,`blockquote`)(1092,`p`),vN(1093,`Quando `),Ac(1094,`code`),vN(1095,`url`),ug(),vN(1096,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(1097,`blockquote`)(1098,`p`),vN(1099,`Em subníveis aninhados, o `),Ac(1100,`code`),vN(1101,`icon`),ug(),vN(1102,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(1103,`tr`,14)(1104,`td`,15)(1105,`div`,16)(1106,`span`,17),vN(1107,` type`),Kc(1108,`br`),ug()()(),Ac(1109,`td`,18)(1110,`code`,26),vN(1111,`string`),ug()(),Ac(1112,`td`,21)(1113,`em`)(1114,`strong`),vN(1115,`(opcional)`),ug()(),Ac(1116,`p`),vN(1117,`Define a cor do item.`),ug(),Ac(1118,`p`),vN(1119,`Valores válidos:`),ug(),Ac(1120,`ul`)(1121,`li`)(1122,`code`),vN(1123,`default`),ug()(),Ac(1124,`li`)(1125,`code`),vN(1126,`danger`),ug()()()()(),Ac(1127,`tr`,14)(1128,`td`,15)(1129,`div`,16)(1130,`span`,17),vN(1131,` url`),Kc(1132,`br`),ug()()(),Ac(1133,`td`,18)(1134,`code`,26),vN(1135,`string`),ug()(),Ac(1136,`td`,21)(1137,`em`)(1138,`strong`),vN(1139,`(opcional)`),ug()(),Ac(1140,`p`),vN(1141,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(1142,`p`),vN(1143,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(1144,`code`),vN(1145,`url`),ug(),vN(1146,` é informada em um agrupador, o clique `),Ac(1147,`strong`),vN(1148,`não abrirá os subitens`),ug(),vN(1149,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(1150,`blockquote`)(1151,`p`),vN(1152,`Quando informada, tem prioridade sobre a propriedade `),Ac(1153,`code`),vN(1154,`action`),ug(),vN(1155,`.`),ug()()()(),Ac(1156,`tr`,14)(1157,`td`,15)(1158,`div`,16)(1159,`span`,17),vN(1160,` visible`),Kc(1161,`br`),ug()()(),Ac(1162,`td`,18)(1163,`code`,41),vN(1164,`boolean `),ug(),Ac(1165,`code`,33),vN(1166,` Function`),ug()(),Ac(1167,`td`,21)(1168,`em`)(1169,`strong`),vN(1170,`(opcional)`),ug()(),Ac(1171,`p`),vN(1172,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(1173,`h4`,34)(1174,`code`,5),vN(1175,`PoPageDefaultLiterals`),ug()(),Ac(1176,`div`,2)(1177,`p`),vN(1178,`Interface para definição das literais usadas no `),Ac(1179,`code`),vN(1180,`po-page-default`),ug(),vN(1181,`.`),ug()(),Ac(1182,`h4`,10),vN(1183,`Propriedades`),ug(),Ac(1184,`table`,11)(1185,`tr`,12)(1186,`th`,13),vN(1187,`Nome`),ug(),Ac(1188,`th`,13),vN(1189,`Tipo`),ug(),Ac(1190,`th`,13),vN(1191,`Descrição`),ug()(),Ac(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),vN(1196,` otherActions`),Kc(1197,`br`),ug()()(),Ac(1198,`td`,18)(1199,`code`,26),vN(1200,`string`),ug()(),Ac(1201,`td`,21)(1202,`em`)(1203,`strong`),vN(1204,`(opcional)`),ug()(),Ac(1205,`p`),vN(1206,`Legenda do `),Ac(1207,`code`),vN(1208,`po-dropdown`),ug(),vN(1209,` de ações.`),ug()()()(),Ac(1210,`h3`),vN(1211,`Enums`),ug(),Ac(1212,`h4`,4)(1213,`code`,5),vN(1214,`PoPageActionsLayout`),ug()(),Ac(1215,`div`,2)(1216,`p`),vN(1217,`Define os layouts de exibição das ações no cabeçalho do `),Ac(1218,`code`),vN(1219,`po-page-default`),ug(),vN(1220,`.`),ug(),Ac(1221,`blockquote`)(1222,`p`),vN(1223,`Compatível com todos os valores de `),Ac(1224,`code`),vN(1225,`PoPageHeaderType`),ug(),vN(1226,`.`),ug()()(),Ac(1227,`h4`,10),vN(1228,`Propriedades`),ug(),Ac(1229,`table`,11)(1230,`tr`,12)(1231,`th`,13),vN(1232,`Nome`),ug(),Ac(1233,`th`,13),vN(1234,`Descrição`),ug()(),Ac(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),vN(1239,` default`),Kc(1240,`br`),ug()()(),Ac(1241,`td`,21)(1242,`p`),vN(1243,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Ac(1244,`em`),vN(1245,`dropdown`),ug(),vN(1246,`.`),ug(),Ac(1247,`p`),vN(1248,`Quando `),Ac(1249,`code`),vN(1250,`PoPageAction.kind`),ug(),vN(1251,` não é definido, a primeira ação recebe o estilo `),Ac(1252,`code`),vN(1253,`primary`),ug(),vN(1254,`
e as demais recebem `),Ac(1255,`code`),vN(1256,`secondary`),ug(),vN(1257,`.`),ug()()(),Ac(1258,`tr`,14)(1259,`td`,15)(1260,`div`,16)(1261,`span`,17),vN(1262,` dropdown`),Kc(1263,`br`),ug()()(),Ac(1264,`td`,21)(1265,`p`),vN(1266,`Agrupa todas as ações exclusivamente dentro do menu `),Ac(1267,`em`),vN(1268,`dropdown`),ug(),vN(1269,`.`),ug()()(),Ac(1270,`tr`,14)(1271,`td`,15)(1272,`div`,16)(1273,`span`,17),vN(1274,` mixed`),Kc(1275,`br`),ug()()(),Ac(1276,`td`,21)(1277,`p`),vN(1278,`Exibe a primeira ação como botão e agrupa as demais no `),Ac(1279,`em`),vN(1280,`dropdown`),ug(),vN(1281,`.`),ug()()()(),Ac(1282,`h4`,4)(1283,`code`,5),vN(1284,`PoPageHeaderType`),ug()(),Ac(1285,`div`,2)(1286,`p`),vN(1287,`Define os tipos de cabeçalho disponíveis no `),Ac(1288,`code`),vN(1289,`po-page-default`),ug(),vN(1290,`.`),ug()(),Ac(1291,`h4`,10),vN(1292,`Propriedades`),ug(),Ac(1293,`table`,11)(1294,`tr`,12)(1295,`th`,13),vN(1296,`Nome`),ug(),Ac(1297,`th`,13),vN(1298,`Descrição`),ug()(),Ac(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),vN(1303,` primary`),Kc(1304,`br`),ug()()(),Ac(1305,`td`,21)(1306,`p`),vN(1307,`Layout padrão com suporte a `),Ac(1308,`code`),vN(1309,`p-breadcrumb`),ug(),vN(1310,`.`),ug()()(),Ac(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),vN(1315,` secondary`),Kc(1316,`br`),ug()()(),Ac(1317,`td`,21)(1318,`p`),vN(1319,`Exibe um botão de retorno ao lado do título.`),ug(),Ac(1320,`blockquote`)(1321,`p`),vN(1322,`Incompatível com `),Ac(1323,`code`),vN(1324,`p-breadcrumb`),ug(),vN(1325,`.`),ug()()()(),Ac(1326,`tr`,14)(1327,`td`,15)(1328,`div`,16)(1329,`span`,17),vN(1330,` tertiary`),Kc(1331,`br`),ug()()(),Ac(1332,`td`,21)(1333,`p`),vN(1334,`Layout simplificado sem botão de retorno.`),ug(),Ac(1335,`blockquote`)(1336,`p`),vN(1337,`Incompatível com `),Ac(1338,`code`),vN(1339,`p-breadcrumb`),ug(),vN(1340,`.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-page-default-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-page-default-basic-view`)(6,`sample-po-page-default-labs-view`)(7,`sample-po-page-default-dashboard-view`)(8,`sample-po-page-default-refresh-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,xe,ye,Ce,De,_e],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Ke),kL]})}return a})();var Ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Te]})}return a})();export{Ft as DocPoPageDefaultModule};