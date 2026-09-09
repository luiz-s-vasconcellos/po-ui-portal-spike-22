import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce$1,Ki as lo,Kn as Bx,Li as ht,Mt as bp,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,dr as I,ei as Yl,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,la as uo,li as _x,lr as Gl,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(r,i){r&1&&Gl(0,`po-page-default`,0)},dependencies:[S8e],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Default Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-default-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Le,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return a})();var Be=()=>({});function Fe(a,ke){if(a&1){let p=Ax();Tl(0,`po-input`,37),ww(`ngModelChange`,function(i){Ky(p);let m=Fx(2);return uN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Xy(i)}),ag(),a0()}if(a&2)Ew(`ngModel`,Fx(2).helperFooterLabel),l0()}function Oe(a,ke){if(a&1){let p=Ax();Tl(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),ww(`ngModelChange`,function(i){Ky(p);let m=Fx();return uN(m.helperTitle,i)||(m.helperTitle=i),Xy(i)}),ag(),a0(),Tl(3,`po-input`,34),ww(`ngModelChange`,function(i){Ky(p);let m=Fx();return uN(m.helperContent,i)||(m.helperContent=i),Xy(i)}),ag(),a0(),ag(),Tl(4,`div`,6)(5,`po-radio-group`,35),ht(`ngModelChange`,function(i){Ky(p);let m=Fx();return Xy(m.helperType=i)}),ag(),a0(),ag(),Tl(6,`div`,6),_x(7,Fe,1,1,`po-input`,36),ag()()}if(a&2){let p=Fx();jp(2),Ew(`ngModel`,p.helperTitle),l0(),jp(),Ew(`ngModel`,p.helperContent),l0(),jp(2),nw(`p-columns`,4)(`ngModel`,p.helperType)(`p-options`,p.helperTypeOptions),l0(),jp(2),Dx(p.helperType===`help`?7:-1)}}var ve=(()=>{class a{poNotification=f(Eu);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let p={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(p.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),p}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(p){let r$1=s(r({},p),{visible:p.visible!==void 0?p.visible:!0,disabled:p.disabled!==void 0?p.disabled:!1});r$1.action=r$1.action?this.showAction.bind(this,r$1.action):void 0,this.actions=[...this.actions,r$1],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Ax();Tl(0,`po-page-default`,5),ht(`p-back`,function(){return i.onBack()}),ag(),Gl(1,`po-divider`),Tl(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),ww(`ngModelChange`,function(l){return Ky(m),uN(i.title,l)||(i.title=l),Xy(l)}),ag(),a0(),Tl(6,`po-input`,8),ww(`ngModelChange`,function(l){return Ky(m),uN(i.subtitle,l)||(i.subtitle=l),Xy(l)}),ag(),a0(),Tl(7,`po-checkbox`,9),ww(`ngModelChange`,function(l){return Ky(m),uN(i.showHelper,l)||(i.showHelper=l),Xy(l)}),ag(),a0(),Tl(8,`po-checkbox`,10),ww(`ngModelChange`,function(l){return Ky(m),uN(i.showRefresh,l)||(i.showRefresh=l),Xy(l)}),ag(),a0(),_x(9,Oe,8,6,`po-widget`,11),Tl(10,`po-select`,12),ht(`ngModelChange`,function(l){return i.pageHeaderType=l}),ag(),a0(),Tl(11,`po-select`,13),ht(`ngModelChange`,function(l){return i.pageActionsLayout=l}),ag(),a0(),Tl(12,`po-input`,14),ww(`ngModelChange`,function(l){return Ky(m),uN(i.literals,l)||(i.literals=l),Xy(l)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(13,`po-radio-group`,15),ww(`ngModelChange`,function(l){return Ky(m),uN(i.componentsSize,l)||(i.componentsSize=l),Xy(l)}),ag(),a0(),ag()(),Gl(14,`po-divider`),Tl(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),ww(`ngModelChange`,function(l){return Ky(m),uN(i.action.label,l)||(i.action.label=l),Xy(l)}),ag(),a0(),Tl(20,`po-input`,18),ww(`ngModelChange`,function(l){return Ky(m),uN(i.action.action,l)||(i.action.action=l),Xy(l)}),ag(),a0(),Tl(21,`po-input`,19),ww(`ngModelChange`,function(l){return Ky(m),uN(i.action.url,l)||(i.action.url=l),Xy(l)}),ag(),a0(),Tl(22,`po-select`,20),ht(`ngModelChange`,function(l){return i.action.type=l}),ag(),a0(),Tl(23,`po-select`,21),ht(`ngModelChange`,function(l){return i.action.icon=l}),ag(),a0(),Tl(24,`po-select`,22),ht(`ngModelChange`,function(l){return i.action.kind=l}),ag(),a0(),Tl(25,`po-checkbox-group`,23),ht(`ngModelChange`,function(l){return i.action=l}),ag(),a0(),ag(),Tl(26,`div`,6)(27,`po-button`,24),ht(`p-click`,function(){return i.addAction(i.action)}),ag()()()(),Gl(28,`po-divider`),Tl(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),ww(`ngModelChange`,function(l){return Ky(m),uN(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),Xy(l)}),ag(),a0(),ag()(),Tl(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),ww(`ngModelChange`,function(l){return Ky(m),uN(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),Xy(l)}),ag(),a0(),Tl(37,`po-input`,27),ww(`ngModelChange`,function(l){return Ky(m),uN(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),Xy(l)}),ag(),a0(),ag(),Tl(38,`div`,6)(39,`po-button`,28),ht(`p-click`,function(){return i.addBreadcrumbItem()}),ag()()(),Gl(40,`po-divider`),Tl(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),ww(`ngModelChange`,function(l){return Ky(m),uN(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),Xy(l)}),ag(),a0(),Tl(45,`po-input`,30),ww(`ngModelChange`,function(l){return Ky(m),uN(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),Xy(l)}),ag(),a0(),ag(),Tl(46,`div`,6)(47,`po-button`,31),ht(`p-click`,function(){return i.addBreadcrumbParam()}),ag()()(),Gl(48,`po-divider`),Tl(49,`div`,6)(50,`po-button`,32),ht(`p-click`,function(){return i.restore()}),ag()()}if(r&2){let m=Bx(17),c=Bx(34),l=Bx(42);nw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??_N(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),jp(5),Ew(`ngModel`,i.title),l0(),jp(),Ew(`ngModel`,i.subtitle),l0(),jp(),Ew(`ngModel`,i.showHelper),l0(),jp(),Ew(`ngModel`,i.showRefresh),l0(),jp(),Dx(i.showHelper?9:-1),jp(),nw(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),l0(),jp(),nw(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),l0(),jp(),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.componentsSize),nw(`p-columns`,4)(`p-options`,i.componentsSizeOptions),l0(),jp(6),Ew(`ngModel`,i.action.label),l0(),jp(),Ew(`ngModel`,i.action.action),l0(),jp(),Ew(`ngModel`,i.action.url),l0(),jp(),nw(`ngModel`,i.action.type)(`p-options`,i.typeOptions),l0(),jp(),nw(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),l0(),jp(),nw(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),l0(),jp(),nw(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),l0(),jp(2),nw(`p-disabled`,m.form.invalid),jp(5),Ew(`ngModel`,i.breadcrumb.favorite),l0(),jp(4),Ew(`ngModel`,i.breadcrumbItem.label),l0(),jp(),Ew(`ngModel`,i.breadcrumbItem.link),l0(),jp(2),nw(`p-disabled`,c.invalid??!1),jp(5),Ew(`ngModel`,i.breadcrumbParams.property),l0(),jp(),Ew(`ngModel`,i.breadcrumbParams.value),l0(),jp(2),nw(`p-disabled`,l.invalid??!1)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,bp,iU,L0e,fbe,S8e,O8e],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Default Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-default-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var We=[`formShare`];var Pe=(()=>{class a{poNotification=f(Eu);sampleDashboardService=f(oe);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(r,i){if(r&1&&Yl(We,7)(vr,7),r&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,features:[Ce$1([oe])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let m=Ax();Tl(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),cN(4,`540`),ag(),Tl(5,`div`,5),cN(6,`www.po.com.br`),ag()(),Tl(7,`po-widget`,6)(8,`div`,4),cN(9,`300 views`),ag(),Tl(10,`div`,5),cN(11,`https://po-ui.io`),ag()(),Tl(12,`po-widget`,7)(13,`div`,4),cN(14,`Online`),ag(),Tl(15,`div`,5),cN(16,`28 days`),ag()(),Tl(17,`po-widget`,8)(18,`div`,4),cN(19,`266`),ag(),Tl(20,`div`,5),cN(21,`@po-ui/ng-components - 1.10.1`),ag()(),Tl(22,`po-widget`,9)(23,`div`,4),cN(24,`800 questions`),ag(),Tl(25,`div`,5),cN(26,`https://devforum.po.com.br`),ag()(),Tl(27,`po-widget`,10)(28,`div`,4),cN(29,`AngularJS - Angular 6`),ag(),Tl(30,`div`,5),cN(31,`Angular 6 most downloaded`),ag()()(),Gl(32,`po-divider`)(33,`po-table`,11),ag(),Tl(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),ww(`ngModelChange`,function(l){return Ky(m),uN(i.email,l)||(i.email=l),Xy(l)}),ag(),a0(),ag()()}r&2&&(nw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),jp(33),nw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),jp(),nw(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),jp(3),Ew(`ngModel`,i.email),l0())},dependencies:[yY,gY,mY,Ak,Tk,Xy$1,qH,vr,S8e,X4,O8e],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Default - Dashboard`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),ag(),Tl(29,`pre`,11),cN(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-page-default-dashboard`),ag(),Gl(33,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ze,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(p){this.poNotification=p}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(p=>s(r({},p),{quantity:p.quantity+Math.floor(Math.random()*10),status:this.getStatus(p.quantity+Math.floor(Math.random()*10))}))}getStatus(p){return p===0?`Out of stock`:p<=5?`Low stock`:`Available`}static ɵfac=function(r){return new(r||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0),Gl(1,`po-table`,1),ag()),r&2&&(nw(`p-refresh`,i.onRefresh),jp(),nw(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[S8e,X4],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Default - Refresh`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-default-refresh`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,we],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1341,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-h4`,`docs-api-class-name`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo responsável pelos componentes de estrutura de página: `),Tl(7,`code`),cN(8,`po-page-default`),ag(),cN(9,`, `),Tl(10,`code`),cN(11,`po-page-detail`),ag(),cN(12,`,
`),Tl(13,`code`),cN(14,`po-page-edit`),ag(),cN(15,`, `),Tl(16,`code`),cN(17,`po-page-list`),ag(),cN(18,` e `),Tl(19,`code`),cN(20,`po-page-slide`),ag(),cN(21,`.`),ag()(),Tl(22,`h3`,3),cN(23,`Componente`),ag(),Tl(24,`h4`,4)(25,`code`,5),cN(26,`PoPageDefaultComponent`),ag()(),Tl(27,`div`,2)(28,`p`),cN(29,`O `),Tl(30,`code`),cN(31,`po-page-default`),ag(),cN(32,` é utilizado como container principal para telas sem um template definido.`),ag(),Tl(33,`p`),cN(34,`Oferece suporte a cabeçalhos dinâmicos via `),Tl(35,`code`),cN(36,`p-page-header-type`),ag(),cN(37,`, navegação por `),Tl(38,`em`),cN(39,`breadcrumb`),ag(),cN(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Tl(41,`code`),cN(42,`p-page-actions-layout`),ag(),cN(43,`.`),ag(),Tl(44,`h4`),cN(45,`Tokens customizáveis`),ag(),Tl(46,`blockquote`)(47,`p`),cN(48,`Para maiores informações, acesse o guia `),Tl(49,`a`,6),cN(50,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(51,`.`),ag()(),Tl(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),cN(56,`Propriedade`),ag(),Tl(57,`th`),cN(58,`Descrição`),ag(),Tl(59,`th`),cN(60,`Valor Padrão`),ag()()(),Tl(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),cN(65,`Página (po-page-default)`),ag()(),Gl(66,`td`)(67,`td`),ag(),Tl(68,`tr`)(69,`td`)(70,`code`),cN(71,`--background`),ag()(),Tl(72,`td`),cN(73,`Background da página (header e body)`),ag(),Tl(74,`td`)(75,`code`),cN(76,`var(--color-page-background-color-page)`),ag()()(),Tl(77,`tr`)(78,`td`)(79,`strong`),cN(80,`Header (po-page-header)`),ag()(),Gl(81,`td`)(82,`td`),ag(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--padding`),ag()(),Tl(87,`td`),cN(88,`Espaçamento do header`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--gap`),ag()(),Tl(96,`td`),cN(97,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--spacing-md)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--gap-actions`),ag()(),Tl(105,`td`),cN(106,`Espaçamento entre as ações`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--spacing-xs)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`strong`),cN(113,`Header (po-page-header .po-page-header-title)`),ag()(),Gl(114,`td`)(115,`td`),ag(),Tl(116,`tr`)(117,`td`)(118,`code`),cN(119,`--font-family`),ag()(),Tl(120,`td`),cN(121,`Família tipográfica do título`),ag(),Tl(122,`td`)(123,`code`),cN(124,`var(--font-family-theme)`),ag()()(),Tl(125,`tr`)(126,`td`)(127,`strong`),cN(128,`Content (po-page-content)`),ag()(),Gl(129,`td`)(130,`td`),ag(),Tl(131,`tr`)(132,`td`)(133,`code`),cN(134,`--padding-content`),ag()(),Tl(135,`td`),cN(136,`Espaçamento do conteúdo`),ag(),Tl(137,`td`)(138,`code`),cN(139,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(140,`div`,7)(141,`h4`,8),cN(142,`Seletor`),ag(),Tl(143,`pre`,9),cN(144,`<po-page-default
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
`),ag()(),Tl(145,`h4`,10),cN(146,`Propriedades`),ag(),Tl(147,`table`,11)(148,`tr`,12)(149,`th`,13),cN(150,`Nome`),ag(),Tl(151,`th`,13),cN(152,`Tipo`),ag(),Tl(153,`th`,13),cN(154,`Padrão`),ag(),Tl(155,`th`,13),cN(156,`Descrição`),ag()(),Tl(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),cN(161,` p-actions`),Gl(162,`br`),ag()()(),Tl(163,`td`,18)(164,`code`,19),cN(165,`Array<PoPageAction>`),ag()(),Tl(166,`td`,20)(167,`p`)(168,`code`),cN(169,`[]`),ag()()(),Tl(170,`td`,21)(171,`em`)(172,`strong`),cN(173,`(opcional)`),ag()(),Tl(174,`p`),cN(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),ag(),Tl(176,`p`),cN(177,`Recebe um array de objetos que implementam a interface `),Tl(178,`code`),cN(179,`PoPageAction`),ag(),cN(180,`.`),ag(),Tl(181,`blockquote`)(182,`p`),cN(183,`O comportamento de exibição pode ser customizado através da propriedade `),Tl(184,`code`),cN(185,`p-page-actions-layout`),ag(),cN(186,`.`),ag()()()(),Tl(187,`tr`,14)(188,`td`,15)(189,`div`,22)(190,`span`,23),cN(191,` (p-back)`),Gl(192,`br`),ag()()(),Tl(193,`td`,18)(194,`code`,24),cN(195,`EventEmitter`),ag()(),Tl(196,`td`,20),cN(197,`-`),ag(),Tl(198,`td`,21)(199,`em`)(200,`strong`),cN(201,`(opcional)`),ag()(),Tl(202,`p`),cN(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),ag(),Tl(204,`blockquote`)(205,`p`),cN(206,`Botão exibido apenas quando a propriedade `),Tl(207,`code`),cN(208,`p-page-header-type`),ag(),cN(209,` está configurada como `),Tl(210,`code`),cN(211,`secondary`),ag(),cN(212,`.`),ag()()()(),Tl(213,`tr`,14)(214,`td`,15)(215,`div`,16)(216,`span`,17),cN(217,` p-breadcrumb`),Gl(218,`br`),ag()()(),Tl(219,`td`,18)(220,`code`,25),cN(221,`PoBreadcrumb`),ag()(),Tl(222,`td`,20),cN(223,`-`),ag(),Tl(224,`td`,21)(225,`em`)(226,`strong`),cN(227,`(opcional)`),ag()(),Tl(228,`p`),cN(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),ag(),Tl(230,`p`),cN(231,`Recebe um objeto que implementa a interface `),Tl(232,`code`),cN(233,`PoBreadcrumb`),ag(),cN(234,`.`),ag(),Tl(235,`blockquote`)(236,`p`),cN(237,`Compatível com o cabeçalho (`),Tl(238,`code`),cN(239,`p-page-header-type`),ag(),cN(240,`) do tipo `),Tl(241,`code`),cN(242,`primary`),ag(),cN(243,`.`),ag()()()(),Tl(244,`tr`,14)(245,`td`,15)(246,`div`,16)(247,`span`,17),cN(248,` p-components-size`),Gl(249,`br`),ag()()(),Tl(250,`td`,18)(251,`code`,26),cN(252,`string`),ag()(),Tl(253,`td`,20)(254,`p`)(255,`code`),cN(256,`medium`),ag()()(),Tl(257,`td`,21)(258,`em`)(259,`strong`),cN(260,`(opcional)`),ag()(),Tl(261,`p`),cN(262,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(263,`ul`)(264,`li`)(265,`code`),cN(266,`small`),ag(),cN(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(268,`li`)(269,`code`),cN(270,`medium`),ag(),cN(271,`: aplica a medida medium de cada componente.`),ag()(),Tl(272,`blockquote`)(273,`p`),cN(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(275,`code`),cN(276,`medium`),ag(),cN(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(278,`a`,27),cN(279,`po-theme`),ag(),cN(280,`.`),ag()()()(),Tl(281,`tr`,14)(282,`td`,15)(283,`div`,16)(284,`span`,17),cN(285,` p-helper`),Gl(286,`br`),ag()()(),Tl(287,`td`,18)(288,`code`,28),cN(289,`PoHelperOptions `),ag(),Tl(290,`code`,26),cN(291,` string`),ag()(),Tl(292,`td`,20)(293,`p`)(294,`code`),cN(295,`info`),ag()()(),Tl(296,`td`,21)(297,`em`)(298,`strong`),cN(299,`(opcional)`),ag()(),Tl(300,`p`),cN(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),ag(),Tl(302,`p`),cN(303,`Quando não houver subtítulo (`),Tl(304,`code`),cN(305,`p-subtitle`),ag(),cN(306,`), o po-helper será exibido logo abaixo do título.`),ag(),Tl(307,`p`),cN(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Tl(309,`code`),cN(310,`PoHelperOptions`),ag(),cN(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),ag(),Tl(312,`p`),cN(313,`Exemplo de uso:`),ag(),Tl(314,`pre`)(315,`code`,29),cN(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),ag()()()(),Tl(317,`tr`,14)(318,`td`,15)(319,`div`,16)(320,`span`,17),cN(321,` p-literals`),Gl(322,`br`),ag()()(),Tl(323,`td`,18)(324,`code`,30),cN(325,`PoPageDefaultLiterals`),ag()(),Tl(326,`td`,20),cN(327,`-`),ag(),Tl(328,`td`,21)(329,`em`)(330,`strong`),cN(331,`(opcional)`),ag()(),Tl(332,`p`),cN(333,`Permite a customização das literais utilizadas no componente.`),ag(),Tl(334,`p`),cN(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Tl(336,`code`),cN(337,`PoPageDefaultLiterals`),ag(),cN(338,`.`),ag(),Tl(339,`p`),cN(340,`Exemplo de uso:`),ag(),Tl(341,`pre`)(342,`code`,29),cN(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),ag()(),Tl(344,`pre`)(345,`code`,31),cN(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),ag()(),Tl(347,`blockquote`)(348,`p`),cN(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Tl(350,`a`,32)(351,`code`),cN(352,`PoI18nService`),ag()(),cN(353,` ou navegador.`),ag()()()(),Tl(354,`tr`,14)(355,`td`,15)(356,`div`,16)(357,`span`,17),cN(358,` p-page-actions-layout`),Gl(359,`br`),ag()()(),Tl(360,`td`,18)(361,`code`,26),cN(362,`string`),ag()(),Tl(363,`td`,20)(364,`p`)(365,`code`),cN(366,`default`),ag()()(),Tl(367,`td`,21)(368,`em`)(369,`strong`),cN(370,`(opcional)`),ag()(),Tl(371,`p`),cN(372,`Define o layout de exibição das ações no cabeçalho.`),ag(),Tl(373,`p`),cN(374,`Aceita valores do enum `),Tl(375,`code`),cN(376,`PoPageActionsLayout`),ag(),cN(377,`.`),ag(),Tl(378,`blockquote`)(379,`p`),cN(380,`Em telas reduzidas (< 480px) as ações fora do `),Tl(381,`em`),cN(382,`dropdown`),ag(),cN(383,` que possuam a propriedade `),Tl(384,`code`),cN(385,`PoPageAction.icon`),ag(),cN(386,` definida
exibir\xE3o apenas o \xEDcone.`),ag()()()(),Tl(387,`tr`,14)(388,`td`,15)(389,`div`,16)(390,`span`,17),cN(391,` p-page-header-type`),Gl(392,`br`),ag()()(),Tl(393,`td`,18)(394,`code`,26),cN(395,`string`),ag()(),Tl(396,`td`,20)(397,`p`)(398,`code`),cN(399,`primary`),ag()()(),Tl(400,`td`,21)(401,`em`)(402,`strong`),cN(403,`(opcional)`),ag()(),Tl(404,`p`),cN(405,`Define o tipo de cabeçalho da página.`),ag(),Tl(406,`p`),cN(407,`Aceita valores do enum `),Tl(408,`code`),cN(409,`PoPageHeaderType`),ag(),cN(410,`.`),ag()()(),Tl(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),cN(415,` p-refresh`),Gl(416,`br`),ag()()(),Tl(417,`td`,18)(418,`code`,33),cN(419,`Function`),ag()(),Tl(420,`td`,20),cN(421,`-`),ag(),Tl(422,`td`,21)(423,`em`)(424,`strong`),cN(425,`(opcional)`),ag()(),Tl(426,`p`),cN(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),ag(),Tl(428,`p`),cN(429,`Quando não houver subtítulo (`),Tl(430,`code`),cN(431,`p-subtitle`),ag(),cN(432,`), o refresh será exibido logo abaixo do título.`),ag(),Tl(433,`blockquote`)(434,`p`),cN(435,`Esta propriedade possui precedência sobre a configuração de `),Tl(436,`code`),cN(437,`p-helper`),ag(),cN(438,`.`),ag()(),Tl(439,`p`),cN(440,`Exemplo de uso:`),ag(),Tl(441,`pre`)(442,`code`,29),cN(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),ag()()()(),Tl(444,`tr`,14)(445,`td`,15)(446,`div`,16)(447,`span`,17),cN(448,` p-subtitle`),Gl(449,`br`),ag()()(),Tl(450,`td`,18)(451,`code`,26),cN(452,`string`),ag()(),Tl(453,`td`,20),cN(454,`-`),ag(),Tl(455,`td`,21)(456,`em`)(457,`strong`),cN(458,`(opcional)`),ag()(),Tl(459,`p`),cN(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),ag(),Tl(461,`p`),cN(462,`Suporta formatação básica com as tags `),Tl(463,`code`),cN(464,`<b>`),ag(),cN(465,` (negrito), `),Tl(466,`code`),cN(467,`<strong>`),ag(),cN(468,` (negrito), `),Tl(469,`code`),cN(470,`<i>`),ag(),cN(471,` (itálico), `),Tl(472,`code`),cN(473,`<em>`),ag(),cN(474,` (it\xE1lico) e
`),Tl(475,`code`),cN(476,`<u>`),ag(),cN(477,` (sublinhado).`),ag(),Tl(478,`p`),cN(479,`Exemplo:`),ag(),Tl(480,`pre`)(481,`code`,31),cN(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),ag()(),Tl(483,`blockquote`)(484,`p`),cN(485,`Requer que `),Tl(486,`code`),cN(487,`p-title`),ag(),cN(488,` esteja definido.`),ag()()()(),Tl(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),cN(493,` p-title`),Gl(494,`br`),ag()()(),Tl(495,`td`,18)(496,`code`,26),cN(497,`string`),ag()(),Tl(498,`td`,20),cN(499,`-`),ag(),Tl(500,`td`,21)(501,`em`)(502,`strong`),cN(503,`(opcional)`),ag()(),Tl(504,`p`),cN(505,`Define o título principal da página.`),ag()()()(),Tl(506,`h3`),cN(507,`Interfaces`),ag(),Tl(508,`h4`,34)(509,`code`,5),cN(510,`PoBreadcrumbItem`),ag()(),Tl(511,`div`,2)(512,`p`),cN(513,`Interface que define cada item do componente `),Tl(514,`strong`),cN(515,`po-breadcrumb`),ag(),cN(516,`.`),ag()(),Tl(517,`h4`,10),cN(518,`Propriedades`),ag(),Tl(519,`table`,11)(520,`tr`,12)(521,`th`,13),cN(522,`Nome`),ag(),Tl(523,`th`,13),cN(524,`Tipo`),ag(),Tl(525,`th`,13),cN(526,`Descrição`),ag()(),Tl(527,`tr`,14)(528,`td`,15)(529,`div`,16)(530,`span`,17),cN(531,` action`),Gl(532,`br`),ag()()(),Tl(533,`td`,18)(534,`code`,33),cN(535,`Function`),ag()(),Tl(536,`td`,21)(537,`em`)(538,`strong`),cN(539,`(opcional)`),ag()(),Tl(540,`p`),cN(541,`Ação executada ao clicar no item.`),ag(),Tl(542,`blockquote`)(543,`p`),cN(544,`A função atribuída a esta propriedade receberá o `),Tl(545,`em`),cN(546,`label`),ag(),cN(547,` do item como parâmetro para execução.`),ag()()()(),Tl(548,`tr`,14)(549,`td`,15)(550,`div`,16)(551,`span`,17),cN(552,` label`),Gl(553,`br`),ag()()(),Tl(554,`td`,18)(555,`code`,26),cN(556,`string`),ag()(),Tl(557,`td`,21)(558,`p`),cN(559,`Rótulo do item.`),ag()()(),Tl(560,`tr`,14)(561,`td`,15)(562,`div`,16)(563,`span`,17),cN(564,` link`),Gl(565,`br`),ag()()(),Tl(566,`td`,18)(567,`code`,26),cN(568,`string`),ag()(),Tl(569,`td`,21)(570,`em`)(571,`strong`),cN(572,`(opcional)`),ag()(),Tl(573,`p`),cN(574,`Url do item.`),ag(),Tl(575,`blockquote`)(576,`p`),cN(577,`Caso o item também contenha uma `),Tl(578,`em`),cN(579,`action`),ag(),cN(580,` definida, a preferência de execução será do `),Tl(581,`em`),cN(582,`link`),ag(),cN(583,`.`),ag()(),Tl(584,`blockquote`)(585,`p`),cN(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(587,`strong`)(588,`a`,35),cN(589,`Veja um exemplo de como criar rotas aqui`),ag()(),cN(590,`.`),ag()(),Tl(591,`blockquote`)(592,`p`),cN(593,`Esta propriedade é necessária para que a propriedade `),Tl(594,`code`),cN(595,`p-favorite-service`),ag(),cN(596,` consiga favoritar ou desfavoritar.`),ag()()()()(),Tl(597,`h4`,34)(598,`code`,5),cN(599,`PoBreadcrumb`),ag()(),Tl(600,`div`,2)(601,`p`),cN(602,`Interface que define o `),Tl(603,`code`),cN(604,`po-breadcrumb`),ag(),cN(605,`.`),ag()(),Tl(606,`h4`,10),cN(607,`Propriedades`),ag(),Tl(608,`table`,11)(609,`tr`,12)(610,`th`,13),cN(611,`Nome`),ag(),Tl(612,`th`,13),cN(613,`Tipo`),ag(),Tl(614,`th`,13),cN(615,`Descrição`),ag()(),Tl(616,`tr`,14)(617,`td`,15)(618,`div`,16)(619,`span`,17),cN(620,` favorite`),Gl(621,`br`),ag()()(),Tl(622,`td`,18)(623,`code`,26),cN(624,`string`),ag()(),Tl(625,`td`,21)(626,`em`)(627,`strong`),cN(628,`(opcional)`),ag()(),Tl(629,`p`),cN(630,`Permite definir uma URL para favoritar ou desfavoritar.`),ag(),Tl(631,`blockquote`)(632,`p`),cN(633,`Para maiores informações verificar a propriedade `),Tl(634,`code`),cN(635,`p-favorite-service`),ag(),cN(636,` do componente `),Tl(637,`code`),cN(638,`po-breadcrumb`),ag(),cN(639,`.`),ag()()()(),Tl(640,`tr`,14)(641,`td`,15)(642,`div`,16)(643,`span`,17),cN(644,` items`),Gl(645,`br`),ag()()(),Tl(646,`td`,18)(647,`code`,36),cN(648,`Array<PoBreadcrumbItem>`),ag()(),Tl(649,`td`,21)(650,`p`),cN(651,`Lista de itens do `),Tl(652,`em`),cN(653,`breadcrumb`),ag(),cN(654,`.`),ag(),Tl(655,`p`)(656,`strong`),cN(657,`Exemplo:`),ag()(),Tl(658,`pre`)(659,`code`),cN(660,`{ label: 'Po Portal', link: 'portal' }
`),ag()()()(),Tl(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),cN(665,` params`),Gl(666,`br`),ag()()(),Tl(667,`td`,18)(668,`code`,37),cN(669,`object`),ag()(),Tl(670,`td`,21)(671,`em`)(672,`strong`),cN(673,`(opcional)`),ag()(),Tl(674,`p`),cN(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ag()()()(),Tl(676,`h4`,34)(677,`code`,5),cN(678,`PoHelperOptions`),ag()(),Tl(679,`div`,2)(680,`p`),cN(681,`Interface para configuração das opções de ajuda (`),Tl(682,`em`),cN(683,`helper`),ag(),cN(684,`).`),ag()(),Tl(685,`h4`,10),cN(686,`Propriedades`),ag(),Tl(687,`table`,11)(688,`tr`,12)(689,`th`,13),cN(690,`Nome`),ag(),Tl(691,`th`,13),cN(692,`Tipo`),ag(),Tl(693,`th`,13),cN(694,`Descrição`),ag()(),Tl(695,`tr`,14)(696,`td`,15)(697,`div`,16)(698,`span`,17),cN(699,` content`),Gl(700,`br`),ag()()(),Tl(701,`td`,18)(702,`code`,26),cN(703,`string`),ag()(),Tl(704,`td`,21)(705,`em`)(706,`strong`),cN(707,`(opcional)`),ag()(),Tl(708,`p`),cN(709,`Texto explicativo exibido no popover.`),ag(),Tl(710,`p`),cN(711,`Suporta formatação básica com as tags `),Tl(712,`code`),cN(713,`<b>`),ag(),cN(714,` (negrito), `),Tl(715,`code`),cN(716,`<strong>`),ag(),cN(717,` (negrito), `),Tl(718,`code`),cN(719,`<i>`),ag(),cN(720,` (itálico), `),Tl(721,`code`),cN(722,`<em>`),ag(),cN(723,` (it\xE1lico) e
`),Tl(724,`code`),cN(725,`<u>`),ag(),cN(726,` (sublinhado).`),ag(),Tl(727,`p`),cN(728,`Exemplo:`),ag(),Tl(729,`pre`)(730,`code`,31),cN(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ag()()()(),Tl(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),cN(736,` eventOnClick`),Gl(737,`br`),ag()()(),Tl(738,`td`,18)(739,`code`,33),cN(740,`Function`),ag()(),Tl(741,`td`,21)(742,`em`)(743,`strong`),cN(744,`(opcional)`),ag()(),Tl(745,`p`),cN(746,`Evento disparado ao clicar no ícone do helper.`),ag(),Tl(747,`p`),cN(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),ag(),Tl(749,`p`),cN(750,`Pode ser uma função ou um `),Tl(751,`code`),cN(752,`EventEmitter`),ag(),cN(753,`.`),ag(),Tl(754,`p`),cN(755,`Exemplo:`),ag(),Tl(756,`pre`)(757,`code`),cN(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ag()()()(),Tl(759,`tr`,14)(760,`td`,15)(761,`div`,16)(762,`span`,17),cN(763,` footerAction`),Gl(764,`br`),ag()()(),Tl(765,`td`,18)(766,`code`,38),cN(767,`{ label: string; action: Function;
}`),ag()(),Tl(768,`td`,21)(769,`em`)(770,`strong`),cN(771,`(opcional)`),ag()(),Tl(772,`p`),cN(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Tl(774,`code`),cN(775,`help`),ag(),cN(776,` e desconsiderada quando o type for `),Tl(777,`code`),cN(778,`info`),ag(),cN(779,`.`),ag(),Tl(780,`p`),cN(781,`Deve ser um objeto com as propriedades:`),ag(),Tl(782,`ul`)(783,`li`)(784,`code`),cN(785,`label`),ag(),cN(786,`: Texto do botão.`),ag(),Tl(787,`li`)(788,`code`),cN(789,`action`),ag(),cN(790,`: Função executada ao clicar no botão.`),ag()(),Tl(791,`p`),cN(792,`Exemplo:`),ag(),Tl(793,`pre`)(794,`code`,31),cN(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ag()()()(),Tl(796,`tr`,14)(797,`td`,15)(798,`div`,16)(799,`span`,17),cN(800,` title`),Gl(801,`br`),ag()()(),Tl(802,`td`,18)(803,`code`,26),cN(804,`string`),ag()(),Tl(805,`td`,21)(806,`em`)(807,`strong`),cN(808,`(opcional)`),ag()(),Tl(809,`p`),cN(810,`Título do helper exibido no popover.`),ag()()(),Tl(811,`tr`,14)(812,`td`,15)(813,`div`,16)(814,`span`,17),cN(815,` type`),Gl(816,`br`),ag()()(),Tl(817,`td`,18)(818,`code`,39),cN(819,`'info' `),ag(),Tl(820,`code`,40),cN(821,` 'help'`),ag()(),Tl(822,`td`,21)(823,`em`)(824,`strong`),cN(825,`(opcional)`),ag()(),Tl(826,`p`),cN(827,`Tipo do ícone exibido: `),Tl(828,`code`),cN(829,`info`),ag(),cN(830,` ou `),Tl(831,`code`),cN(832,`help`),ag(),cN(833,`.`),ag(),Tl(834,`p`),cN(835,`Quando o valor é `),Tl(836,`code`),cN(837,`info`),ag(),cN(838,`, o popover exibe apenas informações e não permite ações customizadas.`),ag(),Tl(839,`p`),cN(840,`Quando o valor é `),Tl(841,`code`),cN(842,`help`),ag(),cN(843,`, o popover pode exibir ações customizadas no rodapé.`),ag()()()(),Tl(844,`h4`,34)(845,`code`,5),cN(846,`PoPageAction`),ag()(),Tl(847,`div`,2)(848,`p`),cN(849,`Interface para as ações dos componentes `),Tl(850,`code`),cN(851,`po-page-default`),ag(),cN(852,` e `),Tl(853,`code`),cN(854,`po-page-list`),ag(),cN(855,`.`),ag(),Tl(856,`p`),cN(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Tl(858,`em`),cN(859,`dropdown`),ag(),cN(860,`,
conforme o `),Tl(861,`code`),cN(862,`PoPageActionsLayout`),ag(),cN(863,` e o tamanho da tela.`),ag(),Tl(864,`blockquote`)(865,`p`),cN(866,`As propriedades `),Tl(867,`code`),cN(868,`separator`),ag(),cN(869,`, `),Tl(870,`code`),cN(871,`selected`),ag(),cN(872,` e `),Tl(873,`code`),cN(874,`subItems`),ag(),cN(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Tl(876,`em`),cN(877,`dropdown`),ag(),cN(878,`.`),ag()()(),Tl(879,`h4`,10),cN(880,`Propriedades`),ag(),Tl(881,`table`,11)(882,`tr`,12)(883,`th`,13),cN(884,`Nome`),ag(),Tl(885,`th`,13),cN(886,`Tipo`),ag(),Tl(887,`th`,13),cN(888,`Descrição`),ag()(),Tl(889,`tr`,14)(890,`td`,15)(891,`div`,16)(892,`span`,17),cN(893,` action`),Gl(894,`br`),ag()()(),Tl(895,`td`,18)(896,`code`,33),cN(897,`Function`),ag()(),Tl(898,`td`,21)(899,`em`)(900,`strong`),cN(901,`(opcional)`),ag()(),Tl(902,`p`),cN(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(904,`p`),cN(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(906,`code`),cN(907,`subItems`),ag(),cN(908,`.`),ag(),Tl(909,`blockquote`)(910,`p`),cN(911,`Para que a função seja executada no contexto do componente, utilize `),Tl(912,`em`),cN(913,`bind`),ag(),cN(914,`:
`),Tl(915,`code`),cN(916,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(917,`tr`,14)(918,`td`,15)(919,`div`,16)(920,`span`,17),cN(921,` disabled`),Gl(922,`br`),ag()()(),Tl(923,`td`,18)(924,`code`,41),cN(925,`boolean `),ag(),Tl(926,`code`,33),cN(927,` Function`),ag()(),Tl(928,`td`,21)(929,`em`)(930,`strong`),cN(931,`(opcional)`),ag()(),Tl(932,`p`),cN(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(934,`tr`,14)(935,`td`,15)(936,`div`,16)(937,`span`,17),cN(938,` icon`),Gl(939,`br`),ag()()(),Tl(940,`td`,18)(941,`code`,26),cN(942,`string `),ag(),Tl(943,`code`,42),cN(944,` TemplateRef<void>`),ag()(),Tl(945,`td`,21)(946,`em`)(947,`strong`),cN(948,`(opcional)`),ag()(),Tl(949,`p`),cN(950,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(951,`p`),cN(952,`Aceita ícones da `),Tl(953,`a`,43),cN(954,`Biblioteca de ícones`),ag(),cN(955,`, fontes externas (ex: Font Awesome)
ou um `),Tl(956,`code`),cN(957,`TemplateRef`),ag(),cN(958,` para ícones customizados.`),ag(),Tl(959,`pre`)(960,`code`),cN(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(962,`tr`,14)(963,`td`,15)(964,`div`,16)(965,`span`,17),cN(966,` kind`),Gl(967,`br`),ag()()(),Tl(968,`td`,18)(969,`code`,26),cN(970,`string`),ag()(),Tl(971,`td`,21)(972,`em`)(973,`strong`),cN(974,`(opcional)`),ag()(),Tl(975,`p`),cN(976,`Define o estilo visual da ação quando exibida como botão fora do `),Tl(977,`em`),cN(978,`dropdown`),ag(),cN(979,`.`),ag(),Tl(980,`p`),cN(981,`Valores permitidos:`),ag(),Tl(982,`ul`)(983,`li`)(984,`code`),cN(985,`primary`),ag(),cN(986,`: botão com maior destaque visual.`),ag(),Tl(987,`li`)(988,`code`),cN(989,`secondary`),ag(),cN(990,`: estilo padrão.`),ag()(),Tl(991,`blockquote`)(992,`p`),cN(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),ag()(),Tl(994,`blockquote`)(995,`p`),cN(996,`Somente uma ação pode ter `),Tl(997,`code`),cN(998,`kind`),ag(),cN(999,` igual a `),Tl(1e3,`code`),cN(1001,`primary`),ag(),cN(1002,`. Caso mais de uma defina `),Tl(1003,`code`),cN(1004,`primary`),ag(),cN(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Tl(1006,`code`),cN(1007,`secondary`),ag(),cN(1008,`.`),ag()(),Tl(1009,`blockquote`)(1010,`p`),cN(1011,`Quando não definido, o estilo é determinado pelo `),Tl(1012,`code`),cN(1013,`PoPageActionsLayout`),ag(),cN(1014,`.`),ag()()()(),Tl(1015,`tr`,14)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),cN(1019,` label`),Gl(1020,`br`),ag()()(),Tl(1021,`td`,18)(1022,`code`,26),cN(1023,`string`),ag()(),Tl(1024,`td`,21)(1025,`p`),cN(1026,`Rótulo da ação.`),ag(),Tl(1027,`p`),cN(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(1029,`code`),cN(1030,`subItems`),ag(),cN(1031,`.`),ag()()(),Tl(1032,`tr`,14)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),cN(1036,` selected`),Gl(1037,`br`),ag()()(),Tl(1038,`td`,18)(1039,`code`,41),cN(1040,`boolean`),ag()(),Tl(1041,`td`,21)(1042,`em`)(1043,`strong`),cN(1044,`(opcional)`),ag()(),Tl(1045,`p`),cN(1046,`Define se a ação está selecionada.`),ag()()(),Tl(1047,`tr`,14)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),cN(1051,` separator`),Gl(1052,`br`),ag()()(),Tl(1053,`td`,18)(1054,`code`,41),cN(1055,`boolean`),ag()(),Tl(1056,`td`,21)(1057,`em`)(1058,`strong`),cN(1059,`(opcional)`),ag()(),Tl(1060,`p`),cN(1061,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(1062,`tr`,14)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),cN(1066,` subItems`),Gl(1067,`br`),ag()()(),Tl(1068,`td`,18)(1069,`code`,44),cN(1070,`Array<PoPopupAction>`),ag()(),Tl(1071,`td`,21)(1072,`em`)(1073,`strong`),cN(1074,`(opcional)`),ag()(),Tl(1075,`p`),cN(1076,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(1077,`p`),cN(1078,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(1079,`blockquote`)(1080,`p`),cN(1081,`As propriedades `),Tl(1082,`code`),cN(1083,`disabled`),ag(),cN(1084,`, `),Tl(1085,`code`),cN(1086,`type`),ag(),cN(1087,` e `),Tl(1088,`code`),cN(1089,`visible`),ag(),cN(1090,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(1091,`blockquote`)(1092,`p`),cN(1093,`Quando `),Tl(1094,`code`),cN(1095,`url`),ag(),cN(1096,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(1097,`blockquote`)(1098,`p`),cN(1099,`Em subníveis aninhados, o `),Tl(1100,`code`),cN(1101,`icon`),ag(),cN(1102,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(1103,`tr`,14)(1104,`td`,15)(1105,`div`,16)(1106,`span`,17),cN(1107,` type`),Gl(1108,`br`),ag()()(),Tl(1109,`td`,18)(1110,`code`,26),cN(1111,`string`),ag()(),Tl(1112,`td`,21)(1113,`em`)(1114,`strong`),cN(1115,`(opcional)`),ag()(),Tl(1116,`p`),cN(1117,`Define a cor do item.`),ag(),Tl(1118,`p`),cN(1119,`Valores válidos:`),ag(),Tl(1120,`ul`)(1121,`li`)(1122,`code`),cN(1123,`default`),ag()(),Tl(1124,`li`)(1125,`code`),cN(1126,`danger`),ag()()()()(),Tl(1127,`tr`,14)(1128,`td`,15)(1129,`div`,16)(1130,`span`,17),cN(1131,` url`),Gl(1132,`br`),ag()()(),Tl(1133,`td`,18)(1134,`code`,26),cN(1135,`string`),ag()(),Tl(1136,`td`,21)(1137,`em`)(1138,`strong`),cN(1139,`(opcional)`),ag()(),Tl(1140,`p`),cN(1141,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(1142,`p`),cN(1143,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1144,`code`),cN(1145,`url`),ag(),cN(1146,` é informada em um agrupador, o clique `),Tl(1147,`strong`),cN(1148,`não abrirá os subitens`),ag(),cN(1149,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(1150,`blockquote`)(1151,`p`),cN(1152,`Quando informada, tem prioridade sobre a propriedade `),Tl(1153,`code`),cN(1154,`action`),ag(),cN(1155,`.`),ag()()()(),Tl(1156,`tr`,14)(1157,`td`,15)(1158,`div`,16)(1159,`span`,17),cN(1160,` visible`),Gl(1161,`br`),ag()()(),Tl(1162,`td`,18)(1163,`code`,41),cN(1164,`boolean `),ag(),Tl(1165,`code`,33),cN(1166,` Function`),ag()(),Tl(1167,`td`,21)(1168,`em`)(1169,`strong`),cN(1170,`(opcional)`),ag()(),Tl(1171,`p`),cN(1172,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()(),Tl(1173,`h4`,34)(1174,`code`,5),cN(1175,`PoPageDefaultLiterals`),ag()(),Tl(1176,`div`,2)(1177,`p`),cN(1178,`Interface para definição das literais usadas no `),Tl(1179,`code`),cN(1180,`po-page-default`),ag(),cN(1181,`.`),ag()(),Tl(1182,`h4`,10),cN(1183,`Propriedades`),ag(),Tl(1184,`table`,11)(1185,`tr`,12)(1186,`th`,13),cN(1187,`Nome`),ag(),Tl(1188,`th`,13),cN(1189,`Tipo`),ag(),Tl(1190,`th`,13),cN(1191,`Descrição`),ag()(),Tl(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),cN(1196,` otherActions`),Gl(1197,`br`),ag()()(),Tl(1198,`td`,18)(1199,`code`,26),cN(1200,`string`),ag()(),Tl(1201,`td`,21)(1202,`em`)(1203,`strong`),cN(1204,`(opcional)`),ag()(),Tl(1205,`p`),cN(1206,`Legenda do `),Tl(1207,`code`),cN(1208,`po-dropdown`),ag(),cN(1209,` de ações.`),ag()()()(),Tl(1210,`h3`),cN(1211,`Enums`),ag(),Tl(1212,`h4`,4)(1213,`code`,5),cN(1214,`PoPageActionsLayout`),ag()(),Tl(1215,`div`,2)(1216,`p`),cN(1217,`Define os layouts de exibição das ações no cabeçalho do `),Tl(1218,`code`),cN(1219,`po-page-default`),ag(),cN(1220,`.`),ag(),Tl(1221,`blockquote`)(1222,`p`),cN(1223,`Compatível com todos os valores de `),Tl(1224,`code`),cN(1225,`PoPageHeaderType`),ag(),cN(1226,`.`),ag()()(),Tl(1227,`h4`,10),cN(1228,`Propriedades`),ag(),Tl(1229,`table`,11)(1230,`tr`,12)(1231,`th`,13),cN(1232,`Nome`),ag(),Tl(1233,`th`,13),cN(1234,`Descrição`),ag()(),Tl(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),cN(1239,` default`),Gl(1240,`br`),ag()()(),Tl(1241,`td`,21)(1242,`p`),cN(1243,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Tl(1244,`em`),cN(1245,`dropdown`),ag(),cN(1246,`.`),ag(),Tl(1247,`p`),cN(1248,`Quando `),Tl(1249,`code`),cN(1250,`PoPageAction.kind`),ag(),cN(1251,` não é definido, a primeira ação recebe o estilo `),Tl(1252,`code`),cN(1253,`primary`),ag(),cN(1254,`
e as demais recebem `),Tl(1255,`code`),cN(1256,`secondary`),ag(),cN(1257,`.`),ag()()(),Tl(1258,`tr`,14)(1259,`td`,15)(1260,`div`,16)(1261,`span`,17),cN(1262,` dropdown`),Gl(1263,`br`),ag()()(),Tl(1264,`td`,21)(1265,`p`),cN(1266,`Agrupa todas as ações exclusivamente dentro do menu `),Tl(1267,`em`),cN(1268,`dropdown`),ag(),cN(1269,`.`),ag()()(),Tl(1270,`tr`,14)(1271,`td`,15)(1272,`div`,16)(1273,`span`,17),cN(1274,` mixed`),Gl(1275,`br`),ag()()(),Tl(1276,`td`,21)(1277,`p`),cN(1278,`Exibe a primeira ação como botão e agrupa as demais no `),Tl(1279,`em`),cN(1280,`dropdown`),ag(),cN(1281,`.`),ag()()()(),Tl(1282,`h4`,4)(1283,`code`,5),cN(1284,`PoPageHeaderType`),ag()(),Tl(1285,`div`,2)(1286,`p`),cN(1287,`Define os tipos de cabeçalho disponíveis no `),Tl(1288,`code`),cN(1289,`po-page-default`),ag(),cN(1290,`.`),ag()(),Tl(1291,`h4`,10),cN(1292,`Propriedades`),ag(),Tl(1293,`table`,11)(1294,`tr`,12)(1295,`th`,13),cN(1296,`Nome`),ag(),Tl(1297,`th`,13),cN(1298,`Descrição`),ag()(),Tl(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),cN(1303,` primary`),Gl(1304,`br`),ag()()(),Tl(1305,`td`,21)(1306,`p`),cN(1307,`Layout padrão com suporte a `),Tl(1308,`code`),cN(1309,`p-breadcrumb`),ag(),cN(1310,`.`),ag()()(),Tl(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),cN(1315,` secondary`),Gl(1316,`br`),ag()()(),Tl(1317,`td`,21)(1318,`p`),cN(1319,`Exibe um botão de retorno ao lado do título.`),ag(),Tl(1320,`blockquote`)(1321,`p`),cN(1322,`Incompatível com `),Tl(1323,`code`),cN(1324,`p-breadcrumb`),ag(),cN(1325,`.`),ag()()()(),Tl(1326,`tr`,14)(1327,`td`,15)(1328,`div`,16)(1329,`span`,17),cN(1330,` tertiary`),Gl(1331,`br`),ag()()(),Tl(1332,`td`,21)(1333,`p`),cN(1334,`Layout simplificado sem botão de retorno.`),ag(),Tl(1335,`blockquote`)(1336,`p`),cN(1337,`Incompatível com `),Tl(1338,`code`),cN(1339,`p-breadcrumb`),ag(),cN(1340,`.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-page-default-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-page-default-basic-view`)(6,`sample-po-page-default-labs-view`)(7,`sample-po-page-default-dashboard-view`)(8,`sample-po-page-default-refresh-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,xe,ye,Ce,De,_e],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Ke),bL]})}return a})();var Ft=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Te]})}return a})();export{Ft as DocPoPageDefaultModule};