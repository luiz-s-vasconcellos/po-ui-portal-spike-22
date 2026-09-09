import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Bt as f8e,Ct as X4,Dr as NN,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Lt as eP,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ba as yw,ei as Yl,er as EN,fi as ag,ga as wx,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,mr as JE,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,vi as bx,wn as vr,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,`po-widget`)},dependencies:[O8e],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Widget Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-widget></po-widget>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-widget-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Le,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return o})();var qe=(o,k)=>({src:o,size:k});var Ce=(()=>{class o{poNotification=f(Eu);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=Ax();Tl(0,`div`,1)(1,`po-widget`,2),ht(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),cN(2),ag()(),Gl(3,`po-divider`),Tl(4,`div`,1),Gl(5,`po-info`,3),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(m),uN(i.title,r)||(i.title=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(m),uN(i.help,r)||(i.help=r),Xy(r)}),ag(),a0(),Tl(11,`po-number`,6),ww(`ngModelChange`,function(r){return Ky(m),uN(i.height,r)||(i.height=r),Xy(r)}),ag(),a0(),Tl(12,`div`,1)(13,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(m),uN(i.actionPopup.action,r)||(i.actionPopup.action=r),Xy(r)}),ag(),a0(),Tl(14,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(m),uN(i.actionPopup.label,r)||(i.actionPopup.label=r),Xy(r)}),ag(),a0(),ag(),Tl(15,`div`,1)(16,`po-button`,9),ht(`p-click`,function(){return i.addAction(i.actionPopup)}),ag()(),Tl(17,`po-input`,10),ww(`ngModelChange`,function(r){return Ky(m),uN(i.background,r)||(i.background=r),Xy(r)}),ag(),a0(),Tl(18,`po-input`,11),ww(`ngModelChange`,function(r){return Ky(m),uN(i.primaryLabel,r)||(i.primaryLabel=r),Xy(r)}),ag(),a0(),Tl(19,`po-input`,12),ww(`ngModelChange`,function(r){return Ky(m),uN(i.secondaryLabel,r)||(i.secondaryLabel=r),Xy(r)}),ag(),a0(),Tl(20,`div`,13)(21,`po-input`,14),ww(`ngModelChange`,function(r){return Ky(m),uN(i.tagLabel,r)||(i.tagLabel=r),Xy(r)}),ag(),a0(),Tl(22,`po-select`,15),ww(`ngModelChange`,function(r){return Ky(m),uN(i.tagIcon,r)||(i.tagIcon=r),Xy(r)}),ag(),a0(),Tl(23,`po-select`,16),ww(`ngModelChange`,function(r){return Ky(m),uN(i.tagPosition,r)||(i.tagPosition=r),Xy(r)}),ag(),a0(),ag(),Tl(24,`div`,1)(25,`po-input`,17),ww(`ngModelChange`,function(r){return Ky(m),uN(i.avatarSrc,r)||(i.avatarSrc=r),Xy(r)}),ag(),a0(),Tl(26,`po-select`,18),ww(`ngModelChange`,function(r){return Ky(m),uN(i.avatarSize,r)||(i.avatarSize=r),Xy(r)}),ag(),a0(),ag(),Tl(27,`div`,1)(28,`po-checkbox-group`,19),ww(`ngModelChange`,function(r){return Ky(m),uN(i.properties,r)||(i.properties=r),Xy(r)}),ag(),a0(),ag(),Tl(29,`po-textarea`,20),ww(`ngModelChange`,function(r){return Ky(m),uN(i.content,r)||(i.content=r),Xy(r)}),ag(),a0(),Tl(30,`div`,1)(31,`po-button`,21),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(jp(),nw(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,EN(36,qe,i.avatarSrc,i.avatarSize)),jp(),hg(` `,i.content,` `),jp(3),nw(`p-value`,i.action),jp(4),Ew(`ngModel`,i.title),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.height),l0(),jp(2),Ew(`ngModel`,i.actionPopup.action),l0(),jp(),Ew(`ngModel`,i.actionPopup.label),l0(),jp(2),nw(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),jp(),Ew(`ngModel`,i.background),l0(),jp(),Ew(`ngModel`,i.primaryLabel),l0(),jp(),Ew(`ngModel`,i.secondaryLabel),l0(),jp(2),Ew(`ngModel`,i.tagLabel),l0(),jp(),Ew(`ngModel`,i.tagIcon),nw(`p-options`,i.iconList),l0(),jp(),Ew(`ngModel`,i.tagPosition),nw(`p-options`,i.listTagPosition),l0(),jp(2),Ew(`ngModel`,i.avatarSrc),l0(),jp(),Ew(`ngModel`,i.avatarSize),nw(`p-options`,i.listAvatarSize),l0(),jp(2),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.content),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,fbe,vbe,ybe,O8e],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Widget Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-widget
    class="po-sm-12"
    [p-background]="background"
    [p-disabled]="properties.includes('disabled')"
    [p-size]="properties.includes('small') ? 'small' : 'medium'"
    [p-height]="height"
    [p-help]="help"
    [p-primary]="properties.includes('primaryWidget')"
    [p-primary-label]="primaryLabel"
    [p-secondary-label]="secondaryLabel"
    [p-tag]="tagLabel"
    [p-tag-icon]="tagIcon"
    [p-tag-position]="tagPosition"
    [p-title]="title"
    [p-actions]="myActions"
    (p-on-disabled)="changeAction('p-on-disabled')"
    (p-primary-action)="changeAction('p-primary-action')"
    (p-secondary-action)="changeAction('p-secondary-action')"
    (p-setting)="changeAction('p-setting')"
    (p-title-action)="changeAction('p-title-action')"
    [p-avatar]="{ src: avatarSrc, size: avatarSize }"
  >
    { { content }}
  </po-widget>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title" p-clean />

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help" p-clean />

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height" p-clean />

  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="actionPopup.action" p-clean p-label="Action" />

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionPopup.label" p-label="Label" p-required />
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="!actionPopup.action || !actionPopup.label"
      (p-click)="addAction(actionPopup)"
    >
    </po-button>
  </div>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
    p-clean
  />

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label" p-clean />

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label" p-clean />

  <div class="po-row sample-widget-align-end">
    <po-input class="po-md-4" name="tagLabel" [(ngModel)]="tagLabel" p-label="Label Tag" p-clean />

    <po-select class="po-md-4 po-mt-2" name="icon" [(ngModel)]="tagIcon" p-label="Icon" [p-options]="iconList" />

    <po-select
      class="po-md-4 po-mt-2"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      p-label="Tag Position"
      [p-options]="listTagPosition"
    />
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="avatarSrc"
      [(ngModel)]="avatarSrc"
      p-label="Avatar Src"
      p-help="https://picsum.photos/144/144"
      p-clean
    />

    <po-select
      class="po-md-6"
      name="avatarSize"
      [(ngModel)]="avatarSize"
      p-label="Avatar Size"
      [p-options]="listAvatarSize"
    />
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    />
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content" />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoNotificationService, PoPopupAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  styleUrls: ['./sample-po-widget-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  tagIcon: string;
  tagLabel: string;
  title: string;
  actionPopup: PoPopupAction = { action: null, label: '' };
  myActions: Array<PoPopupAction> = [];
  tagPosition: string;
  avatarSrc: string;
  avatarSize: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' },
    { value: 'small', label: 'small' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly listTagPosition: Array<PoSelectOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly listAvatarSize: Array<PoSelectOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  addAction(action: PoPopupAction) {
    this.myActions = [...this.myActions, { label: action.label, action: this.showAction.bind(this, action.action) }];
    this.actionPopup = { action: null, label: '' };
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.myActions = [];
    this.secondaryLabel = undefined;
    this.tagLabel = undefined;
    this.tagIcon = undefined;
    this.actionPopup = { action: null, label: '' };
    this.tagPosition = undefined;
    this.avatarSrc = undefined;
    this.avatarSize = undefined;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-widget-labs/sample-po-widget-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-widget-labs`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return o})();var Ie=[`detailsModal`];var Pe=(()=>{class o{poNotification=f(Eu);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Yl(Ie,7),l&2){let m;lo(m=uo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Tl(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),cN(4,`Sales order`),ag(),Tl(5,`div`),cN(6,`Scheduled to: `),Tl(7,`strong`),cN(8,`05/04/2018`),ag()(),Tl(9,`div`,3),Gl(10,`po-button`,4),Tl(11,`po-button`,5),ht(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),ag()()(),Tl(12,`po-widget`,6),ht(`p-click`,function(){return i.openModal(`account`)}),Tl(13,`div`,7),cN(14,`$2.818,29`),ag(),Tl(15,`div`,8),cN(16,`Last updated at 18:34`),ag()(),Tl(17,`po-widget`,9),ht(`p-primary-action`,function(){return i.openModal(`account`)}),Tl(18,`div`,10),cN(19,`$5.000,00`),ag(),Tl(20,`div`,8),cN(21,`Last updated at 08:20`),ag()()(),Tl(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),cN(27,`Enter the user routine`),ag()()(),Tl(28,`div`,15),Gl(29,`po-multiselect`,16),ag()(),Tl(30,`po-widget`,17)(31,`div`,7),cN(32,`Credit card`),ag(),Tl(33,`div`,8),cN(34,`MasterCard - 5500 0000 0000 0004`),ag()(),Tl(35,`po-widget`,18),ht(`p-primary-action`,function(){return i.openModal(`savings`)}),Tl(36,`div`,7),cN(37,`$2.000,00`),ag(),Tl(38,`div`,8),cN(39,`05/03/2018`),ag()()()(),Tl(40,`po-modal`,19,0),Gl(42,`po-table`,20),ag()),l&2&&(jp(2),nw(`p-height`,190),jp(10),nw(`p-height`,190),jp(5),nw(`p-height`,190),jp(6),nw(`p-height`,180),jp(6),nw(`p-options`,i.options),jp(),nw(`p-actions`,i.myActions)(`p-height`,180),jp(5),nw(`p-height`,180)(`p-primary`,!0),jp(5),nw(`p-title`,i.titleDetailsModal),jp(2),nw(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[Zt,eP,vr,X4,O8e],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Widget - Finance dashboard`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row sample-finance-row-gap">
  <div class="po-row sample-finance-row-gap">
    <po-widget
      class="po-lg-6"
      p-help="https://github.com/po-ui/po-angular/stargazers"
      p-title="Days to Payment"
      p-tag="Sales"
      p-tag-icon="an an-arrow-circle-up"
      [p-height]="190"
    >
      <div>Sales order</div>
      <div>Scheduled to: <strong>05/04/2018</strong></div>
      <div class="sample-finance-actions">
        <po-button p-label="Cancel" p-danger></po-button>
        <po-button
          p-label="Confirm"
          (p-click)="openExternalLink('https://github.com/po-ui/po-angular/stargazers')"
        ></po-button>
      </div>
    </po-widget>

    <po-widget class="po-lg-3" p-title="Total savings" [p-height]="190" (p-click)="openModal('account')">
      <div class="po-font-subtitle po-text-center">$2.818,29</div>
      <div class="po-text-center">Last updated at 18:34</div>
    </po-widget>

    <po-widget
      class="po-lg-3"
      p-disabled
      p-primary-label="Details"
      p-secondary-label="Edit"
      p-title="Total checking account"
      [p-height]="190"
      (p-primary-action)="openModal('account')"
    >
      <div class="po-text-center sample-finance-total-value">$5.000,00</div>
      <div class="po-text-center">Last updated at 08:20</div>
    </po-widget>
  </div>

  <div class="po-row sample-finance-row-gap">
    <po-widget class="po-lg-4" p-background="../../../assets/graphics/sales-statistics.png" [p-height]="180">
      <div class="po-text-center sample-finance-padding-inline">
        <div class="sample-finance-overlay-badge">
          <strong class="sample-finance-overlay-text">Enter the user routine</strong>
        </div>
      </div>
      <div class="sample-finance-padding-inline">
        <po-multiselect name="multiselect" [p-options]="options"> </po-multiselect>
      </div>
    </po-widget>

    <po-widget class="po-lg-4" p-title="Most used payment type" [p-actions]="myActions" [p-height]="180">
      <div class="po-font-subtitle po-text-center">Credit card</div>
      <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
    </po-widget>

    <po-widget
      class="po-lg-4"
      p-primary-label="Details"
      p-tag="Revenue"
      p-tag-icon="an an-money"
      p-title="Highest revenue in the month considering Marketing and Sales"
      [p-height]="180"
      [p-primary]="true"
      (p-primary-action)="openModal('savings')"
    >
      <div class="po-font-subtitle po-text-center">$2.000,00</div>
      <div class="po-text-center">05/03/2018</div>
    </po-widget>
  </div>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoMultiselectOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  styleUrls: ['./sample-po-widget-finance-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  private readonly poNotification = inject(PoNotificationService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';
  myActions = [
    { label: 'Detail', icon: 'an an-align-top', action: this.showAction.bind(this) },
    { label: 'Remove', icon: 'an an-trash', type: 'danger', action: this.showAction.bind(this) }
  ];

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'Admin' },
    { value: 'poMultiselect2', label: 'User' }
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Revenue - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

  openExternalLink(url) {
    window.open(url, '_blank');
  }

  private showAction(): any {
    this.poNotification.success(\`Action clicked\`);
  }
}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-finance-row-gap {
  row-gap: 1rem;
}

.sample-finance-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sample-finance-total-value {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.sample-finance-padding-inline {
  padding-inline: 0.5rem;
}

.sample-finance-overlay-badge {
  margin-bottom: 0.5rem;
  display: inline-block;
  background-color: black;
  padding: 0.5rem;
  border-radius: 3px;
  opacity: 0.85;
}

.sample-finance-overlay-text {
  color: white;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-widget-finance-dashboard`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:`40%`});var He=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var je=o=>({header:o});var Je=()=>({label:`Angular`,data:100});var Ge=()=>({label:`React`,data:10});var Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Gl(0,`po-chart`,8),o&2&&nw(`p-options`,DN(3,je,_N(2,He)))(`p-series`,EN(7,Qe,_N(5,Je),_N(6,Ge)))}function Xe(o,k){if(o&1&&(Tl(0,`li`),cN(1),ag()),o&2){let p=k.$implicit;jp(),yw(p)}}var De=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Yl(vr,7),l&2){let m;lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Tl(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),Gl(2,`po-info`,3),ag(),Tl(3,`po-widget`,4)(4,`div`),cN(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Tl(6,`div`,5)(7,`ul`)(8,`li`),cN(9,`Out-of-the-Box`),ag(),Tl(10,`li`),cN(11,`Standardized and Opinion-Based Architecture`),ag(),Tl(12,`li`),cN(13,`Next Generation Reactivity (Signals)`),ag(),Tl(14,`li`),cN(15,`Focus on Enterprise and Security`),ag()()()(),JE(16,Ke,1,10,`ng-template`,null,0,NN),ag()(),Tl(18,`po-modal`,6),cN(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Tl(20,`div`,7)(21,`ul`),Cx(22,Xe,2,1,`li`,null,wx),ag()()()),l&2){let m=Bx(17);jp(),nw(`p-help`,i.help),jp(),nw(`p-label`,i.label)(`p-value`,i.value),jp(),nw(`p-avatar`,DN(4,Ue,m)),jp(19),bx(i.technologies)}},dependencies:[f8e,ybe,vr,O8e],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Widget - Card`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-widget-card/sample-po-widget-card.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>

  <po-widget
    p-title="Apps Enterprise"
    p-tag="Angular v17+"
    p-tag-position="top"
    class="po-lg-6"
    p-height="300"
    p-help="https://angular.dev/"
    [p-avatar]="{ customTemplate: avatar, widthCustomTemplate: '40%' }"
  >
    <div>
      Angular: The default choice for large-scale applications, such as banking and government systems, due to its
      structured architecture and native TypeScript support.
      <div class="po-pl-3 po-pt-1">
        <ul>
          <li>Out-of-the-Box</li>
          <li>Standardized and Opinion-Based Architecture</li>
          <li>Next Generation Reactivity (Signals)</li>
          <li>Focus on Enterprise and Security</li>
        </ul>
      </div>
    </div>

    <ng-template #avatar>
      <po-chart
        p-height="260"
        [p-options]="{
          header: { hideExpand: true, hideExportCsv: true, hideExportImage: true, hideTableDetails: true }
        }"
        [p-series]="[
          { label: 'Angular', data: 100 },
          { label: 'React', data: 10 }
        ]"
      >
      </po-chart>
    </ng-template>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      @for (technology of technologies; track technology) {
        <li>{ { technology }}</li>
      }
    </ul>
  </div>
</po-modal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-widget-card/sample-po-widget-card.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-widget-card`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1329,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-widget`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoWidgetComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-widget`),ag(),cN(17,` é recomendado para exibição de `),Tl(18,`em`),cN(19,`dashboards`),ag(),cN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),ag(),Tl(21,`p`),cN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),ag(),Tl(23,`p`),cN(24,`Para controlar sua largura, é possível utilizar o `),Tl(25,`a`,6),cN(26,`Grid System`),ag(),cN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ag(),Tl(28,`h4`),cN(29,`Boas práticas`),ag(),Tl(30,`p`),cN(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Tl(32,`code`),cN(33,`18.75rem`),ag(),cN(34,` no componente.`),ag(),Tl(35,`h4`),cN(36,`Acessibilidade tratada no componente`),ag(),Tl(37,`p`),cN(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),ag(),Tl(39,`ul`)(40,`li`),cN(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),ag(),Tl(42,`li`),cN(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Tl(44,`a`,7),cN(45,`4.1.2: Name, Role, Value`),ag(),cN(46,`)`),ag(),Tl(47,`li`),cN(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Tl(49,`a`,8),cN(50,`2.4.12: Focus Appearance`),ag(),cN(51,`)`),ag(),Tl(52,`li`),cN(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Tl(54,`a`,9),cN(55,`2.4.1 - Keyboard`),ag(),cN(56,`)`),ag()(),Tl(57,`h4`),cN(58,`Tokens customizáveis`),ag(),Tl(59,`p`),cN(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(61,`blockquote`)(62,`p`),cN(63,`Para maiores informações, acesse o guia `),Tl(64,`a`,10),cN(65,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(66,`.`),ag()(),Tl(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),cN(71,`Propriedade`),ag(),Tl(72,`th`),cN(73,`Descrição`),ag(),Tl(74,`th`),cN(75,`Valor Padrão`),ag()()(),Tl(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),cN(80,`Default Values`),ag()(),Gl(81,`td`)(82,`td`),ag(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--font-family`),ag()(),Tl(87,`td`),cN(88,`Família tipográfica usada`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--font-family-theme) `),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--font-size`),ag()(),Tl(96,`td`),cN(97,`Tamanho da fonte`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--font-size-sm)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--font-weight`),ag()(),Tl(105,`td`),cN(106,`Peso da fonte`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--font-weight-bold)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--font-color`),ag()(),Tl(114,`td`),cN(115,`Cor da fonte`),ag(),Tl(116,`td`)(117,`code`),cN(118,`var(--color-neutral-dark-95)`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--padding-header`),ag()(),Tl(123,`td`),cN(124,`Preenchimento do header`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--padding-body`),ag()(),Tl(132,`td`),cN(133,`Preenchimento do body`),ag(),Tl(134,`td`)(135,`code`),cN(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ag()()(),Tl(137,`tr`)(138,`td`)(139,`code`),cN(140,`--padding-avatar`),ag()(),Tl(141,`td`),cN(142,`Preenchimento do avatar`),ag(),Tl(143,`td`)(144,`code`),cN(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),ag()()(),Tl(146,`tr`)(147,`td`)(148,`code`),cN(149,`--padding-footer`),ag()(),Tl(150,`td`),cN(151,`Preenchimento do footer`),ag(),Tl(152,`td`)(153,`code`),cN(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),ag()()(),Tl(155,`tr`)(156,`td`)(157,`code`),cN(158,`--border-radius`),ag()(),Tl(159,`td`),cN(160,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(161,`td`)(162,`code`),cN(163,`var(--border-radius-md)`),ag()()(),Tl(164,`tr`)(165,`td`)(166,`code`),cN(167,`--border-width`),ag()(),Tl(168,`td`),cN(169,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(170,`td`)(171,`code`),cN(172,`var(--border-width-sm)`),ag()()(),Tl(173,`tr`)(174,`td`)(175,`code`),cN(176,`--border-color`),ag()(),Tl(177,`td`),cN(178,`Cor da borda`),ag(),Tl(179,`td`)(180,`code`),cN(181,`var(--color-neutral-light-20)`),ag()()(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--background`),ag()(),Tl(186,`td`),cN(187,`Cor de background`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-neutral-light-00)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--shadow`),ag()(),Tl(195,`td`),cN(196,`Contém o valor da sombra do elemento`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--shadow-md)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Hover`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--border-color-hover`),ag()(),Tl(210,`td`),cN(211,`Cor da borda no estado hover`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-action-hover)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`strong`),cN(218,`Focused`),ag()(),Gl(219,`td`)(220,`td`),ag(),Tl(221,`tr`)(222,`td`)(223,`code`),cN(224,`--color-focused`),ag()(),Tl(225,`td`),cN(226,`Cor principal no estado de focus`),ag(),Tl(227,`td`)(228,`code`),cN(229,`var(--color-action-default)`),ag()()(),Tl(230,`tr`)(231,`td`)(232,`code`),cN(233,`--outline-color-focused`),ag(),cN(234,` \xA0`),ag(),Tl(235,`td`),cN(236,`Cor do outline do estado de focus`),ag(),Tl(237,`td`)(238,`code`),cN(239,`var(--color-action-focus)`),ag()()()()()(),Tl(240,`div`,11)(241,`h4`,12),cN(242,`Seletor`),ag(),Tl(243,`pre`,13),cN(244,`<po-widget
    p-actions="Array<PoPopupAction>"
    p-avatar="PoWidgetAvatar"
    p-background="string"
    (p-click)="EventEmitter"
    p-danger-primary-action="false"
    p-danger-secondary-action="false"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-kind-primary-action="string"
    p-kind-secondary-action="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    (p-setting)="EventEmitter"
    p-size="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-position="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),ag()(),Tl(245,`h4`,14),cN(246,`Propriedades`),ag(),Tl(247,`table`,15)(248,`tr`,16)(249,`th`,17),cN(250,`Nome`),ag(),Tl(251,`th`,17),cN(252,`Tipo`),ag(),Tl(253,`th`,17),cN(254,`Padrão`),ag(),Tl(255,`th`,17),cN(256,`Descrição`),ag()(),Tl(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),cN(261,` p-actions`),Gl(262,`br`),ag()()(),Tl(263,`td`,22)(264,`code`,23),cN(265,`Array<PoPopupAction>`),ag()(),Tl(266,`td`,24),cN(267,`-`),ag(),Tl(268,`td`,25)(269,`em`)(270,`strong`),cN(271,`(opcional)`),ag()(),Tl(272,`p`),cN(273,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Tl(274,`code`),cN(275,`PoPopupAction`),ag(),cN(276,`.`),ag()()(),Tl(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),cN(281,` p-avatar`),Gl(282,`br`),ag()()(),Tl(283,`td`,22)(284,`code`,26),cN(285,`PoWidgetAvatar`),ag()(),Tl(286,`td`,24),cN(287,`-`),ag(),Tl(288,`td`,25)(289,`em`)(290,`strong`),cN(291,`(opcional)`),ag()(),Tl(292,`p`),cN(293,`Define o avatar a ser exibido à esquerda no Widget.`),ag()()(),Tl(294,`tr`,18)(295,`td`,19)(296,`div`,20)(297,`span`,21),cN(298,` p-background`),Gl(299,`br`),ag()()(),Tl(300,`td`,22)(301,`code`,27),cN(302,`string`),ag()(),Tl(303,`td`,24),cN(304,`-`),ag(),Tl(305,`td`,25)(306,`em`)(307,`strong`),cN(308,`(opcional)`),ag()(),Tl(309,`p`),cN(310,`Define uma imagem de fundo.`),ag(),Tl(311,`blockquote`)(312,`p`),cN(313,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Tl(314,`code`),cN(315,`p-widget`),ag(),cN(316,`,
pode-se utilizar a propriedade `),Tl(317,`code`),cN(318,`p-primary`),ag(),cN(319,` em conjunto para que os textos fiquem na cor branca.`),ag()()()(),Tl(320,`tr`,18)(321,`td`,19)(322,`div`,28)(323,`span`,29),cN(324,` (p-click)`),Gl(325,`br`),ag()()(),Tl(326,`td`,22)(327,`code`,30),cN(328,`EventEmitter`),ag()(),Tl(329,`td`,24),cN(330,`-`),ag(),Tl(331,`td`,25)(332,`em`)(333,`strong`),cN(334,`(opcional)`),ag()(),Tl(335,`p`),cN(336,`Evento disparado quando o usuário clicar no componente.`),ag(),Tl(337,`blockquote`)(338,`p`),cN(339,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),ag()()()(),Tl(340,`tr`,18)(341,`td`,19)(342,`div`,20)(343,`span`,21),cN(344,` p-danger-primary-action`),Gl(345,`br`),ag()()(),Tl(346,`td`,22)(347,`code`,31),cN(348,`false`),ag()(),Tl(349,`td`,24)(350,`p`)(351,`code`),cN(352,`false`),ag()()(),Tl(353,`td`,25)(354,`em`)(355,`strong`),cN(356,`(opcional)`),ag()(),Tl(357,`p`),cN(358,`Caso verdadeiro o botão da ação `),Tl(359,`code`),cN(360,`p-primary-label`),ag(),cN(361,` ativará o modo `),Tl(362,`code`),cN(363,`danger`),ag(),cN(364,`.`),ag(),Tl(365,`blockquote`)(366,`p`),cN(367,`Incompatível com o tipo `),Tl(368,`strong`),cN(369,`tertiary`),ag(),cN(370,` da propriedade `),Tl(371,`code`),cN(372,`p-kind-primary-action`),ag(),cN(373,`.`),ag()()()(),Tl(374,`tr`,18)(375,`td`,19)(376,`div`,20)(377,`span`,21),cN(378,` p-danger-secondary-action`),Gl(379,`br`),ag()()(),Tl(380,`td`,22)(381,`code`,31),cN(382,`false`),ag()(),Tl(383,`td`,24)(384,`p`)(385,`code`),cN(386,`false`),ag()()(),Tl(387,`td`,25)(388,`em`)(389,`strong`),cN(390,`(opcional)`),ag()(),Tl(391,`p`),cN(392,`Caso verdadeiro o botão da ação `),Tl(393,`code`),cN(394,`p-secondary-label`),ag(),cN(395,` ativará o modo `),Tl(396,`code`),cN(397,`danger`),ag(),cN(398,`.`),ag(),Tl(399,`blockquote`)(400,`p`),cN(401,`Incompatível com o tipo `),Tl(402,`strong`),cN(403,`tertiary`),ag(),cN(404,` da propriedade `),Tl(405,`code`),cN(406,`p-kind-primary-action`),ag(),cN(407,`.`),ag()()()(),Tl(408,`tr`,18)(409,`td`,19)(410,`div`,20)(411,`span`,21),cN(412,` p-disabled`),Gl(413,`br`),ag()()(),Tl(414,`td`,22)(415,`code`,32),cN(416,`boolean`),ag()(),Tl(417,`td`,24)(418,`p`)(419,`code`),cN(420,`false`),ag()()(),Tl(421,`td`,25)(422,`em`)(423,`strong`),cN(424,`(opcional)`),ag()(),Tl(425,`p`),cN(426,`Desabilita o componente.`),ag()()(),Tl(427,`tr`,18)(428,`td`,19)(429,`div`,20)(430,`span`,21),cN(431,` p-height`),Gl(432,`br`),ag()()(),Tl(433,`td`,22)(434,`code`,33),cN(435,`number`),ag()(),Tl(436,`td`,24),cN(437,`-`),ag(),Tl(438,`td`,25)(439,`em`)(440,`strong`),cN(441,`(opcional)`),ag()(),Tl(442,`p`),cN(443,`Define a altura do componente.`),ag(),Tl(444,`blockquote`)(445,`p`),cN(446,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),ag()()()(),Tl(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),cN(451,` p-help`),Gl(452,`br`),ag()()(),Tl(453,`td`,22)(454,`code`,27),cN(455,`string`),ag()(),Tl(456,`td`,24),cN(457,`-`),ag(),Tl(458,`td`,25)(459,`em`)(460,`strong`),cN(461,`(opcional)`),ag()(),Tl(462,`p`),cN(463,`Link de ajuda incluído no menu de ações do header.`),ag()()(),Tl(464,`tr`,18)(465,`td`,19)(466,`div`,20)(467,`span`,21),cN(468,` p-kind-primary-action`),Gl(469,`br`),ag()()(),Tl(470,`td`,22)(471,`code`,27),cN(472,`string`),ag()(),Tl(473,`td`,24)(474,`p`)(475,`code`),cN(476,`tertiary`),ag()()(),Tl(477,`td`,25)(478,`em`)(479,`strong`),cN(480,`(opcional)`),ag()(),Tl(481,`p`),cN(482,`Define o estilo do botão da ação `),Tl(483,`code`),cN(484,`p-primary-label`),ag(),cN(485,`, conforme o enum `),Tl(486,`code`),cN(487,`PoButtonKind`),ag(),cN(488,`.`),ag()()(),Tl(489,`tr`,18)(490,`td`,19)(491,`div`,20)(492,`span`,21),cN(493,` p-kind-secondary-action`),Gl(494,`br`),ag()()(),Tl(495,`td`,22)(496,`code`,27),cN(497,`string`),ag()(),Tl(498,`td`,24)(499,`p`)(500,`code`),cN(501,`tertiary`),ag()()(),Tl(502,`td`,25)(503,`em`)(504,`strong`),cN(505,`(opcional)`),ag()(),Tl(506,`p`),cN(507,`Define o estilo do botão da ação `),Tl(508,`code`),cN(509,`p-secondary-label`),ag(),cN(510,`, conforme o enum `),Tl(511,`code`),cN(512,`PoButtonKind`),ag(),cN(513,`.`),ag()()(),Tl(514,`tr`,18)(515,`td`,19)(516,`div`,20)(517,`span`,21),cN(518,` p-no-shadow`),Gl(519,`br`),ag()()(),Tl(520,`td`,22)(521,`code`,32),cN(522,`boolean`),ag()(),Tl(523,`td`,24)(524,`p`)(525,`code`),cN(526,`true`),ag()()(),Tl(527,`td`,25)(528,`em`)(529,`strong`),cN(530,`(opcional)`),ag()(),Tl(531,`p`),cN(532,`Desabilita a sombra do componente quando o mesmo for clicável.`),ag(),Tl(533,`blockquote`)(534,`p`),cN(535,`A sombra é exibida por padrão apenas quando o evento `),Tl(536,`code`),cN(537,`p-click`),ag(),cN(538,` está definido.`),ag()()()(),Tl(539,`tr`,18)(540,`td`,19)(541,`div`,28)(542,`span`,29),cN(543,` (p-on-disabled)`),Gl(544,`br`),ag()()(),Tl(545,`td`,22)(546,`code`,30),cN(547,`EventEmitter`),ag()(),Tl(548,`td`,24),cN(549,`-`),ag(),Tl(550,`td`,25)(551,`em`)(552,`strong`),cN(553,`(opcional)`),ag()(),Tl(554,`p`),cN(555,`Evento disparado quando a propriedade `),Tl(556,`code`),cN(557,`p-disabled`),ag(),cN(558,` for alterada.`),ag()()(),Tl(559,`tr`,18)(560,`td`,19)(561,`div`,20)(562,`span`,21),cN(563,` p-primary`),Gl(564,`br`),ag()()(),Tl(565,`td`,22)(566,`code`,32),cN(567,`boolean`),ag()(),Tl(568,`td`,24)(569,`p`)(570,`code`),cN(571,`false`),ag()()(),Tl(572,`td`,25)(573,`em`)(574,`strong`),cN(575,`(opcional)`),ag()(),Tl(576,`p`),cN(577,`Opção para que o `),Tl(578,`code`),cN(579,`po-widget`),ag(),cN(580,` fique em destaque.`),ag()()(),Tl(581,`tr`,18)(582,`td`,19)(583,`div`,28)(584,`span`,29),cN(585,` (p-primary-action)`),Gl(586,`br`),ag()()(),Tl(587,`td`,22)(588,`code`,30),cN(589,`EventEmitter`),ag()(),Tl(590,`td`,24),cN(591,`-`),ag(),Tl(592,`td`,25)(593,`em`)(594,`strong`),cN(595,`(opcional)`),ag()(),Tl(596,`p`),cN(597,`Evento disparado ao clicar na ação `),Tl(598,`code`),cN(599,`p-primary-label`),ag(),cN(600,`.`),ag()()(),Tl(601,`tr`,18)(602,`td`,19)(603,`div`,20)(604,`span`,21),cN(605,` p-primary-label`),Gl(606,`br`),ag()()(),Tl(607,`td`,22)(608,`code`,27),cN(609,`string`),ag()(),Tl(610,`td`,24),cN(611,`-`),ag(),Tl(612,`td`,25)(613,`em`)(614,`strong`),cN(615,`(opcional)`),ag()(),Tl(616,`p`),cN(617,`Define o label e exibe a ação primária no footer do componente.`),ag()()(),Tl(618,`tr`,18)(619,`td`,19)(620,`div`,28)(621,`span`,29),cN(622,` (p-secondary-action)`),Gl(623,`br`),ag()()(),Tl(624,`td`,22)(625,`code`,30),cN(626,`EventEmitter`),ag()(),Tl(627,`td`,24),cN(628,`-`),ag(),Tl(629,`td`,25)(630,`em`)(631,`strong`),cN(632,`(opcional)`),ag()(),Tl(633,`p`),cN(634,`Evento disparado ao clicar na ação `),Tl(635,`code`),cN(636,`p-secondary-label`),ag(),cN(637,`.`),ag()()(),Tl(638,`tr`,18)(639,`td`,19)(640,`div`,20)(641,`span`,21),cN(642,` p-secondary-label`),Gl(643,`br`),ag()()(),Tl(644,`td`,22)(645,`code`,27),cN(646,`string`),ag()(),Tl(647,`td`,24),cN(648,`-`),ag(),Tl(649,`td`,25)(650,`em`)(651,`strong`),cN(652,`(opcional)`),ag()(),Tl(653,`p`),cN(654,`Define o label e exibe a ação secundária no footer do componente.`),ag(),Tl(655,`blockquote`)(656,`p`),cN(657,`Exibida apenas quando `),Tl(658,`code`),cN(659,`p-primary-label`),ag(),cN(660,` estiver definida.`),ag()()()(),Tl(661,`tr`,18)(662,`td`,19)(663,`div`,28)(664,`span`,29),cN(665,` (p-setting)`),Gl(666,`br`),ag()()(),Tl(667,`td`,22)(668,`code`,30),cN(669,`EventEmitter`),ag()(),Tl(670,`td`,24),cN(671,`-`),ag(),Tl(672,`td`,25)(673,`em`)(674,`strong`),cN(675,`(opcional)`),ag()(),Tl(676,`p`),cN(677,`Evento disparado ao clicar em `),Tl(678,`strong`),cN(679,`Configurações`),ag(),cN(680,` incluído no menu de ações do header.`),ag()()(),Tl(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),cN(685,` p-size`),Gl(686,`br`),ag()()(),Tl(687,`td`,22)(688,`code`,27),cN(689,`string`),ag()(),Tl(690,`td`,24)(691,`p`)(692,`code`),cN(693,`medium`),ag()()(),Tl(694,`td`,25)(695,`em`)(696,`strong`),cN(697,`(opcional)`),ag()(),Tl(698,`p`),cN(699,`Define o tamanho dos botões do componente:`),ag(),Tl(700,`ul`)(701,`li`)(702,`code`),cN(703,`small`),ag(),cN(704,`: altura de 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(705,`li`)(706,`code`),cN(707,`medium`),ag(),cN(708,`: altura de 44px.`),ag()(),Tl(709,`blockquote`)(710,`p`),cN(711,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(712,`code`),cN(713,`medium`),ag(),cN(714,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(715,`a`,34),cN(716,`po-theme`),ag(),cN(717,`.`),ag()()()(),Tl(718,`tr`,18)(719,`td`,19)(720,`div`,20)(721,`span`,21),cN(722,` p-tag-icon`),Gl(723,`br`),ag()()(),Tl(724,`td`,22)(725,`code`,27),cN(726,`string `),ag(),Tl(727,`code`,35),cN(728,` TemplateRef<void>`),ag()(),Tl(729,`td`,24),cN(730,`-`),ag(),Tl(731,`td`,25)(732,`em`)(733,`strong`),cN(734,`(opcional)`),ag()(),Tl(735,`p`),cN(736,`Define o ícone exibido ao lado do label da `),Tl(737,`code`),cN(738,`p-tag`),ag(),cN(739,`.`),ag(),Tl(740,`p`),cN(741,`É possível usar qualquer um dos ícones da `),Tl(742,`a`,36),cN(743,`Biblioteca de ícones PO UI`),ag(),cN(744,`, conforme exemplo:`),ag(),Tl(745,`pre`)(746,`code`),cN(747,`<po-widget p-tag-icon="an an-user"></po-widget>
`),ag()(),Tl(748,`p`),cN(749,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(750,`em`),cN(751,`Font Awesome`),ag(),cN(752,`, desde que a biblioteca
esteja carregada no projeto:`),ag(),Tl(753,`pre`)(754,`code`),cN(755,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),ag()(),Tl(756,`p`),cN(757,`Outra opção seria a customização do ícone através do `),Tl(758,`code`),cN(759,`TemplateRef`),ag(),cN(760,`, conforme exemplo abaixo:`),ag(),Tl(761,`pre`)(762,`code`),cN(763,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ag()(),Tl(764,`blockquote`)(765,`p`),cN(766,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(767,`code`),cN(768,`font-size: inherit`),ag(),cN(769,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(770,`tr`,18)(771,`td`,19)(772,`div`,20)(773,`span`,21),cN(774,` p-tag`),Gl(775,`br`),ag()()(),Tl(776,`td`,22)(777,`code`,27),cN(778,`string`),ag()(),Tl(779,`td`,24),cN(780,`-`),ag(),Tl(781,`td`,25)(782,`em`)(783,`strong`),cN(784,`(opcional)`),ag()(),Tl(785,`p`),cN(786,`Label da tag exibida no header.`),ag(),Tl(787,`blockquote`)(788,`p`),cN(789,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ag()()()(),Tl(790,`tr`,18)(791,`td`,19)(792,`div`,20)(793,`span`,21),cN(794,` p-tag-position`),Gl(795,`br`),ag()()(),Tl(796,`td`,22)(797,`code`,27),cN(798,`string`),ag()(),Tl(799,`td`,24)(800,`p`)(801,`code`),cN(802,`right`),ag()()(),Tl(803,`td`,25)(804,`em`)(805,`strong`),cN(806,`(opcional)`),ag()(),Tl(807,`p`),cN(808,`Define o posicionamento da `),Tl(809,`code`),cN(810,`po-tag`),ag(),cN(811,` no cabeçalho do Widget:`),ag(),Tl(812,`ul`)(813,`li`)(814,`code`),cN(815,`right`),ag(),cN(816,`: posicionada no canto superior direito do cabeçalho.`),ag(),Tl(817,`li`)(818,`code`),cN(819,`top`),ag(),cN(820,`: posicionada à esquerda, acima do título (quando houver).`),ag(),Tl(821,`li`)(822,`code`),cN(823,`bottom`),ag(),cN(824,`: posicionada à esquerda, abaixo do título (quando houver).`),ag()()()(),Tl(825,`tr`,18)(826,`td`,19)(827,`div`,20)(828,`span`,21),cN(829,` p-tag-type`),Gl(830,`br`),ag()()(),Tl(831,`td`,22)(832,`code`,37),cN(833,`PoTagType `),ag(),Tl(834,`code`,27),cN(835,` string`),ag()(),Tl(836,`td`,24)(837,`p`)(838,`code`),cN(839,`success`),ag()()(),Tl(840,`td`,25)(841,`em`)(842,`strong`),cN(843,`(opcional)`),ag()(),Tl(844,`p`),cN(845,`Define o tipo da `),Tl(846,`code`),cN(847,`p-tag`),ag(),cN(848,`, conforme o enum `),Tl(849,`strong`),cN(850,`PoTagType`),ag(),cN(851,`.`),ag(),Tl(852,`p`),cN(853,`Valores válidos:`),ag(),Tl(854,`ul`)(855,`li`)(856,`code`),cN(857,`success`),ag(),cN(858,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ag(),Tl(859,`li`)(860,`code`),cN(861,`warning`),ag(),cN(862,`: cor amarela que representa aviso ou advertência.`),ag(),Tl(863,`li`)(864,`code`),cN(865,`danger`),ag(),cN(866,`: cor vermelha para erro ou aviso crítico.`),ag(),Tl(867,`li`)(868,`code`),cN(869,`info`),ag(),cN(870,`: cor azul claro que caracteriza conteúdo informativo.`),ag(),Tl(871,`li`)(872,`code`),cN(873,`neutral`),ag(),cN(874,`: cor cinza claro para uso geral.`),ag()()()(),Tl(875,`tr`,18)(876,`td`,19)(877,`div`,20)(878,`span`,21),cN(879,` p-title`),Gl(880,`br`),ag()()(),Tl(881,`td`,22)(882,`code`,27),cN(883,`string`),ag()(),Tl(884,`td`,24),cN(885,`-`),ag(),Tl(886,`td`,25)(887,`em`)(888,`strong`),cN(889,`(opcional)`),ag()(),Tl(890,`p`),cN(891,`Título do componente.`),ag(),Tl(892,`blockquote`)(893,`p`),cN(894,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ag()()()(),Tl(895,`tr`,18)(896,`td`,19)(897,`div`,28)(898,`span`,29),cN(899,` (p-title-action)`),Gl(900,`br`),ag()()(),Tl(901,`td`,22)(902,`code`,30),cN(903,`EventEmitter`),ag()(),Tl(904,`td`,24),cN(905,`-`),ag(),Tl(906,`td`,25)(907,`em`)(908,`strong`),cN(909,`(opcional)`),ag()(),Tl(910,`p`),cN(911,`Evento disparado ao clicar no título definido em `),Tl(912,`code`),cN(913,`p-title`),ag(),cN(914,`.`),ag()()()(),Tl(915,`h3`),cN(916,`Interfaces`),ag(),Tl(917,`h4`,38)(918,`code`,5),cN(919,`PoPopupAction`),ag()(),Tl(920,`div`,2)(921,`p`),cN(922,`Interface para lista de ações do componente.`),ag()(),Tl(923,`h4`,14),cN(924,`Propriedades`),ag(),Tl(925,`table`,15)(926,`tr`,16)(927,`th`,17),cN(928,`Nome`),ag(),Tl(929,`th`,17),cN(930,`Tipo`),ag(),Tl(931,`th`,17),cN(932,`Descrição`),ag()(),Tl(933,`tr`,18)(934,`td`,19)(935,`div`,20)(936,`span`,21),cN(937,` action`),Gl(938,`br`),ag()()(),Tl(939,`td`,22)(940,`code`,39),cN(941,`Function`),ag()(),Tl(942,`td`,25)(943,`em`)(944,`strong`),cN(945,`(opcional)`),ag()(),Tl(946,`p`),cN(947,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(948,`p`),cN(949,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(950,`code`),cN(951,`subItems`),ag(),cN(952,`.`),ag(),Tl(953,`blockquote`)(954,`p`),cN(955,`Para que a função seja executada no contexto do componente, utilize `),Tl(956,`em`),cN(957,`bind`),ag(),cN(958,`:
`),Tl(959,`code`),cN(960,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(961,`tr`,18)(962,`td`,19)(963,`div`,20)(964,`span`,21),cN(965,` disabled`),Gl(966,`br`),ag()()(),Tl(967,`td`,22)(968,`code`,32),cN(969,`boolean `),ag(),Tl(970,`code`,39),cN(971,` Function`),ag()(),Tl(972,`td`,25)(973,`em`)(974,`strong`),cN(975,`(opcional)`),ag()(),Tl(976,`p`),cN(977,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(978,`tr`,18)(979,`td`,19)(980,`div`,20)(981,`span`,21),cN(982,` icon`),Gl(983,`br`),ag()()(),Tl(984,`td`,22)(985,`code`,27),cN(986,`string `),ag(),Tl(987,`code`,35),cN(988,` TemplateRef<void>`),ag()(),Tl(989,`td`,25)(990,`em`)(991,`strong`),cN(992,`(opcional)`),ag()(),Tl(993,`p`),cN(994,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(995,`p`),cN(996,`Aceita ícones da `),Tl(997,`a`,36),cN(998,`Biblioteca de ícones`),ag(),cN(999,`, fontes externas (ex: Font Awesome)
ou um `),Tl(1e3,`code`),cN(1001,`TemplateRef`),ag(),cN(1002,` para ícones customizados.`),ag(),Tl(1003,`pre`)(1004,`code`),cN(1005,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(1006,`tr`,18)(1007,`td`,19)(1008,`div`,20)(1009,`span`,21),cN(1010,` label`),Gl(1011,`br`),ag()()(),Tl(1012,`td`,22)(1013,`code`,27),cN(1014,`string`),ag()(),Tl(1015,`td`,25)(1016,`p`),cN(1017,`Rótulo da ação.`),ag(),Tl(1018,`p`),cN(1019,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(1020,`code`),cN(1021,`subItems`),ag(),cN(1022,`.`),ag()()(),Tl(1023,`tr`,18)(1024,`td`,19)(1025,`div`,20)(1026,`span`,21),cN(1027,` selected`),Gl(1028,`br`),ag()()(),Tl(1029,`td`,22)(1030,`code`,32),cN(1031,`boolean`),ag()(),Tl(1032,`td`,25)(1033,`em`)(1034,`strong`),cN(1035,`(opcional)`),ag()(),Tl(1036,`p`),cN(1037,`Define se a ação está selecionada.`),ag()()(),Tl(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),cN(1042,` separator`),Gl(1043,`br`),ag()()(),Tl(1044,`td`,22)(1045,`code`,32),cN(1046,`boolean`),ag()(),Tl(1047,`td`,25)(1048,`em`)(1049,`strong`),cN(1050,`(opcional)`),ag()(),Tl(1051,`p`),cN(1052,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(1053,`tr`,18)(1054,`td`,19)(1055,`div`,20)(1056,`span`,21),cN(1057,` subItems`),Gl(1058,`br`),ag()()(),Tl(1059,`td`,22)(1060,`code`,23),cN(1061,`Array<PoPopupAction>`),ag()(),Tl(1062,`td`,25)(1063,`em`)(1064,`strong`),cN(1065,`(opcional)`),ag()(),Tl(1066,`p`),cN(1067,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(1068,`p`),cN(1069,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(1070,`blockquote`)(1071,`p`),cN(1072,`As propriedades `),Tl(1073,`code`),cN(1074,`disabled`),ag(),cN(1075,`, `),Tl(1076,`code`),cN(1077,`type`),ag(),cN(1078,` e `),Tl(1079,`code`),cN(1080,`visible`),ag(),cN(1081,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(1082,`blockquote`)(1083,`p`),cN(1084,`Quando `),Tl(1085,`code`),cN(1086,`url`),ag(),cN(1087,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(1088,`blockquote`)(1089,`p`),cN(1090,`Em subníveis aninhados, o `),Tl(1091,`code`),cN(1092,`icon`),ag(),cN(1093,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(1094,`tr`,18)(1095,`td`,19)(1096,`div`,20)(1097,`span`,21),cN(1098,` type`),Gl(1099,`br`),ag()()(),Tl(1100,`td`,22)(1101,`code`,27),cN(1102,`string`),ag()(),Tl(1103,`td`,25)(1104,`em`)(1105,`strong`),cN(1106,`(opcional)`),ag()(),Tl(1107,`p`),cN(1108,`Define a cor do item.`),ag(),Tl(1109,`p`),cN(1110,`Valores válidos:`),ag(),Tl(1111,`ul`)(1112,`li`)(1113,`code`),cN(1114,`default`),ag()(),Tl(1115,`li`)(1116,`code`),cN(1117,`danger`),ag()()()()(),Tl(1118,`tr`,18)(1119,`td`,19)(1120,`div`,20)(1121,`span`,21),cN(1122,` url`),Gl(1123,`br`),ag()()(),Tl(1124,`td`,22)(1125,`code`,27),cN(1126,`string`),ag()(),Tl(1127,`td`,25)(1128,`em`)(1129,`strong`),cN(1130,`(opcional)`),ag()(),Tl(1131,`p`),cN(1132,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(1133,`p`),cN(1134,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1135,`code`),cN(1136,`url`),ag(),cN(1137,` é informada em um agrupador, o clique `),Tl(1138,`strong`),cN(1139,`não abrirá os subitens`),ag(),cN(1140,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(1141,`blockquote`)(1142,`p`),cN(1143,`Quando informada, tem prioridade sobre a propriedade `),Tl(1144,`code`),cN(1145,`action`),ag(),cN(1146,`.`),ag()()()(),Tl(1147,`tr`,18)(1148,`td`,19)(1149,`div`,20)(1150,`span`,21),cN(1151,` visible`),Gl(1152,`br`),ag()()(),Tl(1153,`td`,22)(1154,`code`,32),cN(1155,`boolean `),ag(),Tl(1156,`code`,39),cN(1157,` Function`),ag()(),Tl(1158,`td`,25)(1159,`em`)(1160,`strong`),cN(1161,`(opcional)`),ag()(),Tl(1162,`p`),cN(1163,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()(),Tl(1164,`h4`,38)(1165,`code`,5),cN(1166,`PoWidgetAvatar`),ag()(),Tl(1167,`div`,2)(1168,`p`),cN(1169,`Interface para definição do avatar no `),Tl(1170,`code`),cN(1171,`po-widget`),ag(),cN(1172,`.`),ag()(),Tl(1173,`h4`,14),cN(1174,`Propriedades`),ag(),Tl(1175,`table`,15)(1176,`tr`,16)(1177,`th`,17),cN(1178,`Nome`),ag(),Tl(1179,`th`,17),cN(1180,`Tipo`),ag(),Tl(1181,`th`,17),cN(1182,`Descrição`),ag()(),Tl(1183,`tr`,18)(1184,`td`,19)(1185,`div`,20)(1186,`span`,21),cN(1187,` customTemplate`),Gl(1188,`br`),ag()()(),Tl(1189,`td`,22)(1190,`code`,40),cN(1191,`TemplateRef<any>`),ag()(),Tl(1192,`td`,25)(1193,`em`)(1194,`strong`),cN(1195,`(opcional)`),ag()(),Tl(1196,`p`),cN(1197,`Permite a criação de template customizado para o avatar`),ag(),Tl(1198,`pre`)(1199,`code`),cN(1200,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),ag()()()(),Tl(1201,`tr`,18)(1202,`td`,19)(1203,`div`,20)(1204,`span`,21),cN(1205,` size`),Gl(1206,`br`),ag()()(),Tl(1207,`td`,22)(1208,`code`,27),cN(1209,`string`),ag()(),Tl(1210,`td`,25)(1211,`em`)(1212,`strong`),cN(1213,`(opcional)`),ag()(),Tl(1214,`p`),cN(1215,`Tamanho de exibição do componente `),Tl(1216,`code`),cN(1217,`po-avatar`),ag(),cN(1218,`.`),ag(),Tl(1219,`p`),cN(1220,`Valores válidos:`),ag(),Tl(1221,`ul`)(1222,`li`)(1223,`code`),cN(1224,`xs`),ag(),cN(1225,` (24x24)`),ag(),Tl(1226,`li`)(1227,`code`),cN(1228,`sm`),ag(),cN(1229,` (32x32)`),ag(),Tl(1230,`li`)(1231,`code`),cN(1232,`md`),ag(),cN(1233,` (64x64)`),ag(),Tl(1234,`li`)(1235,`code`),cN(1236,`lg`),ag(),cN(1237,` (96x96)`),ag(),Tl(1238,`li`)(1239,`code`),cN(1240,`xl`),ag(),cN(1241,` (144x144)`),ag()()()(),Tl(1242,`tr`,18)(1243,`td`,19)(1244,`div`,20)(1245,`span`,21),cN(1246,` src`),Gl(1247,`br`),ag()()(),Tl(1248,`td`,22)(1249,`code`,27),cN(1250,`string`),ag()(),Tl(1251,`td`,25)(1252,`em`)(1253,`strong`),cN(1254,`(opcional)`),ag()(),Tl(1255,`p`),cN(1256,`Fonte da imagem que pode ser um caminho local (`),Tl(1257,`code`),cN(1258,`./assets/images/logo-black-small.png`),ag(),cN(1259,`)
ou um servidor externo (`),Tl(1260,`code`),cN(1261,`https://po-ui.io/assets/images/logo-black-small.png`),ag(),cN(1262,`).`),ag()()(),Tl(1263,`tr`,18)(1264,`td`,19)(1265,`div`,20)(1266,`span`,21),cN(1267,` widthCustomTemplate`),Gl(1268,`br`),ag()()(),Tl(1269,`td`,22)(1270,`code`,27),cN(1271,`string`),ag()(),Tl(1272,`td`,25)(1273,`em`)(1274,`strong`),cN(1275,`(opcional)`),ag()(),Tl(1276,`p`),cN(1277,`Define a largura em porcentagem do `),Tl(1278,`code`),cN(1279,`customTemplate`),ag(),cN(1280,`.`),ag(),Tl(1281,`p`),cN(1282,`O valor máximo aceito é `),Tl(1283,`code`),cN(1284,`50%`),ag(),cN(1285,`.`),ag()()()(),Tl(1286,`h3`),cN(1287,`Enums`),ag(),Tl(1288,`h4`,4)(1289,`code`,5),cN(1290,`PoButtonKind`),ag()(),Tl(1291,`div`,2)(1292,`p`),cN(1293,`Estilos disponíveis do button.`),ag()(),Tl(1294,`h4`,14),cN(1295,`Propriedades`),ag(),Tl(1296,`table`,15)(1297,`tr`,16)(1298,`th`,17),cN(1299,`Nome`),ag(),Tl(1300,`th`,17),cN(1301,`Descrição`),ag()(),Tl(1302,`tr`,18)(1303,`td`,19)(1304,`div`,20)(1305,`span`,21),cN(1306,` primary`),Gl(1307,`br`),ag()()(),Tl(1308,`td`,25)(1309,`p`),cN(1310,`Estilo primário, usado para ações principais que requerem maior destaque.`),ag()()(),Tl(1311,`tr`,18)(1312,`td`,19)(1313,`div`,20)(1314,`span`,21),cN(1315,` secondary`),Gl(1316,`br`),ag()()(),Tl(1317,`td`,25)(1318,`p`),cN(1319,`Estilo secundário, usado como padrão, para ações comuns.`),ag()()(),Tl(1320,`tr`,18)(1321,`td`,19)(1322,`div`,20)(1323,`span`,21),cN(1324,` tertiary`),Gl(1325,`br`),ag()()(),Tl(1326,`td`,25)(1327,`p`),cN(1328,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-widget-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-widget-basic-view`)(6,`sample-po-widget-labs-view`)(7,`sample-po-widget-finance-dashboard-view`)(8,`sample-po-widget-card-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ye,we,_e,Te,Me],encapsulation:2,changeDetection:1})}return o})()}];var We=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(tt),bL]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,We]})}return o})();export{Ot as DocPoWidgetModule};