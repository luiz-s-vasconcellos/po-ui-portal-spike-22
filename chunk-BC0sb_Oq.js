import{Bi as kx,Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,Pr as Ox,Q as Pze,Qi as pt,Qt as m4,Rr as Qn,Sa as zO,Sr as Kc,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Vr as RN,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,Zt as lze,_a as xN,ai as aN,b as Au,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,fn as sP,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,in as ooe,ki as ho,kr as Nx,la as ug,li as cE,lr as Hn,mn as t4,mr as IE,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,ra as sE,rr as E,sa as ue,sr as HN,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Kc(0,`po-widget`)},dependencies:[Pze],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-widget></po-widget>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-widget-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Le,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,fe],encapsulation:2,changeDetection:1})}return o})();var qe=(o,k)=>({src:o,size:k});var Ce=(()=>{class o{poNotification=f(Au);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=Bx();Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),vN(2),ug()(),Kc(3,`po-divider`),Ac(4,`div`,1),Kc(5,`po-info`,3),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(m),DN(i.title,r)||(i.title=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(m),DN(i.help,r)||(i.help=r),e_(r)}),ug(),p0(),Ac(11,`po-number`,6),RE(`ngModelChange`,function(r){return Jv(m),DN(i.height,r)||(i.height=r),e_(r)}),ug(),p0(),Ac(12,`div`,1)(13,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(m),DN(i.actionPopup.action,r)||(i.actionPopup.action=r),e_(r)}),ug(),p0(),Ac(14,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(m),DN(i.actionPopup.label,r)||(i.actionPopup.label=r),e_(r)}),ug(),p0(),ug(),Ac(15,`div`,1)(16,`po-button`,9),pt(`p-click`,function(){return i.addAction(i.actionPopup)}),ug()(),Ac(17,`po-input`,10),RE(`ngModelChange`,function(r){return Jv(m),DN(i.background,r)||(i.background=r),e_(r)}),ug(),p0(),Ac(18,`po-input`,11),RE(`ngModelChange`,function(r){return Jv(m),DN(i.primaryLabel,r)||(i.primaryLabel=r),e_(r)}),ug(),p0(),Ac(19,`po-input`,12),RE(`ngModelChange`,function(r){return Jv(m),DN(i.secondaryLabel,r)||(i.secondaryLabel=r),e_(r)}),ug(),p0(),Ac(20,`div`,13)(21,`po-input`,14),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagLabel,r)||(i.tagLabel=r),e_(r)}),ug(),p0(),Ac(22,`po-select`,15),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagIcon,r)||(i.tagIcon=r),e_(r)}),ug(),p0(),Ac(23,`po-select`,16),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagPosition,r)||(i.tagPosition=r),e_(r)}),ug(),p0(),ug(),Ac(24,`div`,1)(25,`po-input`,17),RE(`ngModelChange`,function(r){return Jv(m),DN(i.avatarSrc,r)||(i.avatarSrc=r),e_(r)}),ug(),p0(),Ac(26,`po-select`,18),RE(`ngModelChange`,function(r){return Jv(m),DN(i.avatarSize,r)||(i.avatarSize=r),e_(r)}),ug(),p0(),ug(),Ac(27,`div`,1)(28,`po-checkbox-group`,19),RE(`ngModelChange`,function(r){return Jv(m),DN(i.properties,r)||(i.properties=r),e_(r)}),ug(),p0(),ug(),Ac(29,`po-textarea`,20),RE(`ngModelChange`,function(r){return Jv(m),DN(i.content,r)||(i.content=r),e_(r)}),ug(),p0(),Ac(30,`div`,1)(31,`po-button`,21),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(Hp(),cE(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,xN(36,qe,i.avatarSrc,i.avatarSize)),Hp(),mg(` `,i.content,` `),Hp(3),cE(`p-value`,i.action),Hp(4),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.height),m0(),Hp(2),TE(`ngModel`,i.actionPopup.action),m0(),Hp(),TE(`ngModel`,i.actionPopup.label),m0(),Hp(2),cE(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),Hp(),TE(`ngModel`,i.background),m0(),Hp(),TE(`ngModel`,i.primaryLabel),m0(),Hp(),TE(`ngModel`,i.secondaryLabel),m0(),Hp(2),TE(`ngModel`,i.tagLabel),m0(),Hp(),TE(`ngModel`,i.tagIcon),cE(`p-options`,i.iconList),m0(),Hp(),TE(`ngModel`,i.tagPosition),cE(`p-options`,i.listTagPosition),m0(),Hp(2),TE(`ngModel`,i.avatarSrc),m0(),Hp(),TE(`ngModel`,i.avatarSize),cE(`p-options`,i.listAvatarSize),m0(),Hp(2),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.content),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,ioe,ooe,roe,Pze],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-widget-labs/sample-po-widget-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-widget-labs`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ce],encapsulation:2,changeDetection:1})}return o})();var Ie=[`detailsModal`];var Pe=(()=>{class o{poNotification=f(Au);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Xc(Ie,7),l&2){let m;fo(m=ho())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Ac(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),vN(4,`Sales order`),ug(),Ac(5,`div`),vN(6,`Scheduled to: `),Ac(7,`strong`),vN(8,`05/04/2018`),ug()(),Ac(9,`div`,3),Kc(10,`po-button`,4),Ac(11,`po-button`,5),pt(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),ug()()(),Ac(12,`po-widget`,6),pt(`p-click`,function(){return i.openModal(`account`)}),Ac(13,`div`,7),vN(14,`$2.818,29`),ug(),Ac(15,`div`,8),vN(16,`Last updated at 18:34`),ug()(),Ac(17,`po-widget`,9),pt(`p-primary-action`,function(){return i.openModal(`account`)}),Ac(18,`div`,10),vN(19,`$5.000,00`),ug(),Ac(20,`div`,8),vN(21,`Last updated at 08:20`),ug()()(),Ac(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),vN(27,`Enter the user routine`),ug()()(),Ac(28,`div`,15),Kc(29,`po-multiselect`,16),ug()(),Ac(30,`po-widget`,17)(31,`div`,7),vN(32,`Credit card`),ug(),Ac(33,`div`,8),vN(34,`MasterCard - 5500 0000 0000 0004`),ug()(),Ac(35,`po-widget`,18),pt(`p-primary-action`,function(){return i.openModal(`savings`)}),Ac(36,`div`,7),vN(37,`$2.000,00`),ug(),Ac(38,`div`,8),vN(39,`05/03/2018`),ug()()()(),Ac(40,`po-modal`,19,0),Kc(42,`po-table`,20),ug()),l&2&&(Hp(2),cE(`p-height`,190),Hp(10),cE(`p-height`,190),Hp(5),cE(`p-height`,190),Hp(6),cE(`p-height`,180),Hp(6),cE(`p-options`,i.options),Hp(),cE(`p-actions`,i.myActions)(`p-height`,180),Hp(5),cE(`p-height`,180)(`p-primary`,!0),Hp(5),cE(`p-title`,i.titleDetailsModal),Hp(2),cE(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[ni,sP,wa,m4,Pze],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget - Finance dashboard`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row sample-finance-row-gap">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-finance-row-gap {
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-widget-finance-dashboard`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Pe],encapsulation:2,changeDetection:1})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:`40%`});var He=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var je=o=>({header:o});var Je=()=>({label:`Angular`,data:100});var Ge=()=>({label:`React`,data:10});var Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Kc(0,`po-chart`,8),o&2&&cE(`p-options`,AN(3,je,RN(2,He)))(`p-series`,xN(7,Qe,RN(5,Je),RN(6,Ge)))}function Xe(o,k){if(o&1&&(Ac(0,`li`),vN(1),ug()),o&2){let p=k.$implicit;Hp(),IE(p)}}var De=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Xc(wa,7),l&2){let m;fo(m=ho())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),Kc(2,`po-info`,3),ug(),Ac(3,`po-widget`,4)(4,`div`),vN(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Ac(6,`div`,5)(7,`ul`)(8,`li`),vN(9,`Out-of-the-Box`),ug(),Ac(10,`li`),vN(11,`Standardized and Opinion-Based Architecture`),ug(),Ac(12,`li`),vN(13,`Next Generation Reactivity (Signals)`),ug(),Ac(14,`li`),vN(15,`Focus on Enterprise and Security`),ug()()()(),sE(16,Ke,1,10,`ng-template`,null,0,HN),ug()(),Ac(18,`po-modal`,6),vN(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Ac(20,`div`,7)(21,`ul`),Ox(22,Xe,2,1,`li`,null,Nx),ug()()()),l&2){let m=Zx(17);Hp(),cE(`p-help`,i.help),Hp(),cE(`p-label`,i.label)(`p-value`,i.value),Hp(),cE(`p-avatar`,AN(4,Ue,m)),Hp(19),kx(i.technologies)}},dependencies:[lze,roe,wa,Pze],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget - Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-card/sample-po-widget-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-widget-card/sample-po-widget-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-widget-card`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1329,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-widget`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoWidgetComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-widget`),ug(),vN(17,` é recomendado para exibição de `),Ac(18,`em`),vN(19,`dashboards`),ug(),vN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),ug(),Ac(21,`p`),vN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),ug(),Ac(23,`p`),vN(24,`Para controlar sua largura, é possível utilizar o `),Ac(25,`a`,6),vN(26,`Grid System`),ug(),vN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ug(),Ac(28,`h4`),vN(29,`Boas práticas`),ug(),Ac(30,`p`),vN(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Ac(32,`code`),vN(33,`18.75rem`),ug(),vN(34,` no componente.`),ug(),Ac(35,`h4`),vN(36,`Acessibilidade tratada no componente`),ug(),Ac(37,`p`),vN(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),ug(),Ac(39,`ul`)(40,`li`),vN(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),ug(),Ac(42,`li`),vN(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Ac(44,`a`,7),vN(45,`4.1.2: Name, Role, Value`),ug(),vN(46,`)`),ug(),Ac(47,`li`),vN(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Ac(49,`a`,8),vN(50,`2.4.12: Focus Appearance`),ug(),vN(51,`)`),ug(),Ac(52,`li`),vN(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Ac(54,`a`,9),vN(55,`2.4.1 - Keyboard`),ug(),vN(56,`)`),ug()(),Ac(57,`h4`),vN(58,`Tokens customizáveis`),ug(),Ac(59,`p`),vN(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(61,`blockquote`)(62,`p`),vN(63,`Para maiores informações, acesse o guia `),Ac(64,`a`,10),vN(65,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(66,`.`),ug()(),Ac(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),vN(71,`Propriedade`),ug(),Ac(72,`th`),vN(73,`Descrição`),ug(),Ac(74,`th`),vN(75,`Valor Padrão`),ug()()(),Ac(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),vN(80,`Default Values`),ug()(),Kc(81,`td`)(82,`td`),ug(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--font-family`),ug()(),Ac(87,`td`),vN(88,`Família tipográfica usada`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--font-family-theme) `),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--font-size`),ug()(),Ac(96,`td`),vN(97,`Tamanho da fonte`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--font-size-sm)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--font-weight`),ug()(),Ac(105,`td`),vN(106,`Peso da fonte`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--font-weight-bold)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--font-color`),ug()(),Ac(114,`td`),vN(115,`Cor da fonte`),ug(),Ac(116,`td`)(117,`code`),vN(118,`var(--color-neutral-dark-95)`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--padding-header`),ug()(),Ac(123,`td`),vN(124,`Preenchimento do header`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--padding-body`),ug()(),Ac(132,`td`),vN(133,`Preenchimento do body`),ug(),Ac(134,`td`)(135,`code`),vN(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(137,`tr`)(138,`td`)(139,`code`),vN(140,`--padding-avatar`),ug()(),Ac(141,`td`),vN(142,`Preenchimento do avatar`),ug(),Ac(143,`td`)(144,`code`),vN(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--padding-footer`),ug()(),Ac(150,`td`),vN(151,`Preenchimento do footer`),ug(),Ac(152,`td`)(153,`code`),vN(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`code`),vN(158,`--border-radius`),ug()(),Ac(159,`td`),vN(160,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(161,`td`)(162,`code`),vN(163,`var(--border-radius-md)`),ug()()(),Ac(164,`tr`)(165,`td`)(166,`code`),vN(167,`--border-width`),ug()(),Ac(168,`td`),vN(169,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(170,`td`)(171,`code`),vN(172,`var(--border-width-sm)`),ug()()(),Ac(173,`tr`)(174,`td`)(175,`code`),vN(176,`--border-color`),ug()(),Ac(177,`td`),vN(178,`Cor da borda`),ug(),Ac(179,`td`)(180,`code`),vN(181,`var(--color-neutral-light-20)`),ug()()(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--background`),ug()(),Ac(186,`td`),vN(187,`Cor de background`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-neutral-light-00)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--shadow`),ug()(),Ac(195,`td`),vN(196,`Contém o valor da sombra do elemento`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--shadow-md)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Hover`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--border-color-hover`),ug()(),Ac(210,`td`),vN(211,`Cor da borda no estado hover`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-action-hover)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`strong`),vN(218,`Focused`),ug()(),Kc(219,`td`)(220,`td`),ug(),Ac(221,`tr`)(222,`td`)(223,`code`),vN(224,`--color-focused`),ug()(),Ac(225,`td`),vN(226,`Cor principal no estado de focus`),ug(),Ac(227,`td`)(228,`code`),vN(229,`var(--color-action-default)`),ug()()(),Ac(230,`tr`)(231,`td`)(232,`code`),vN(233,`--outline-color-focused`),ug(),vN(234,` \xA0`),ug(),Ac(235,`td`),vN(236,`Cor do outline do estado de focus`),ug(),Ac(237,`td`)(238,`code`),vN(239,`var(--color-action-focus)`),ug()()()()()(),Ac(240,`div`,11)(241,`h4`,12),vN(242,`Seletor`),ug(),Ac(243,`pre`,13),vN(244,`<po-widget
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
`),ug()(),Ac(245,`h4`,14),vN(246,`Propriedades`),ug(),Ac(247,`table`,15)(248,`tr`,16)(249,`th`,17),vN(250,`Nome`),ug(),Ac(251,`th`,17),vN(252,`Tipo`),ug(),Ac(253,`th`,17),vN(254,`Padrão`),ug(),Ac(255,`th`,17),vN(256,`Descrição`),ug()(),Ac(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),vN(261,` p-actions`),Kc(262,`br`),ug()()(),Ac(263,`td`,22)(264,`code`,23),vN(265,`Array<PoPopupAction>`),ug()(),Ac(266,`td`,24),vN(267,`-`),ug(),Ac(268,`td`,25)(269,`em`)(270,`strong`),vN(271,`(opcional)`),ug()(),Ac(272,`p`),vN(273,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Ac(274,`code`),vN(275,`PoPopupAction`),ug(),vN(276,`.`),ug()()(),Ac(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),vN(281,` p-avatar`),Kc(282,`br`),ug()()(),Ac(283,`td`,22)(284,`code`,26),vN(285,`PoWidgetAvatar`),ug()(),Ac(286,`td`,24),vN(287,`-`),ug(),Ac(288,`td`,25)(289,`em`)(290,`strong`),vN(291,`(opcional)`),ug()(),Ac(292,`p`),vN(293,`Define o avatar a ser exibido à esquerda no Widget.`),ug()()(),Ac(294,`tr`,18)(295,`td`,19)(296,`div`,20)(297,`span`,21),vN(298,` p-background`),Kc(299,`br`),ug()()(),Ac(300,`td`,22)(301,`code`,27),vN(302,`string`),ug()(),Ac(303,`td`,24),vN(304,`-`),ug(),Ac(305,`td`,25)(306,`em`)(307,`strong`),vN(308,`(opcional)`),ug()(),Ac(309,`p`),vN(310,`Define uma imagem de fundo.`),ug(),Ac(311,`blockquote`)(312,`p`),vN(313,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Ac(314,`code`),vN(315,`p-widget`),ug(),vN(316,`,
pode-se utilizar a propriedade `),Ac(317,`code`),vN(318,`p-primary`),ug(),vN(319,` em conjunto para que os textos fiquem na cor branca.`),ug()()()(),Ac(320,`tr`,18)(321,`td`,19)(322,`div`,28)(323,`span`,29),vN(324,` (p-click)`),Kc(325,`br`),ug()()(),Ac(326,`td`,22)(327,`code`,30),vN(328,`EventEmitter`),ug()(),Ac(329,`td`,24),vN(330,`-`),ug(),Ac(331,`td`,25)(332,`em`)(333,`strong`),vN(334,`(opcional)`),ug()(),Ac(335,`p`),vN(336,`Evento disparado quando o usuário clicar no componente.`),ug(),Ac(337,`blockquote`)(338,`p`),vN(339,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),ug()()()(),Ac(340,`tr`,18)(341,`td`,19)(342,`div`,20)(343,`span`,21),vN(344,` p-danger-primary-action`),Kc(345,`br`),ug()()(),Ac(346,`td`,22)(347,`code`,31),vN(348,`false`),ug()(),Ac(349,`td`,24)(350,`p`)(351,`code`),vN(352,`false`),ug()()(),Ac(353,`td`,25)(354,`em`)(355,`strong`),vN(356,`(opcional)`),ug()(),Ac(357,`p`),vN(358,`Caso verdadeiro o botão da ação `),Ac(359,`code`),vN(360,`p-primary-label`),ug(),vN(361,` ativará o modo `),Ac(362,`code`),vN(363,`danger`),ug(),vN(364,`.`),ug(),Ac(365,`blockquote`)(366,`p`),vN(367,`Incompatível com o tipo `),Ac(368,`strong`),vN(369,`tertiary`),ug(),vN(370,` da propriedade `),Ac(371,`code`),vN(372,`p-kind-primary-action`),ug(),vN(373,`.`),ug()()()(),Ac(374,`tr`,18)(375,`td`,19)(376,`div`,20)(377,`span`,21),vN(378,` p-danger-secondary-action`),Kc(379,`br`),ug()()(),Ac(380,`td`,22)(381,`code`,31),vN(382,`false`),ug()(),Ac(383,`td`,24)(384,`p`)(385,`code`),vN(386,`false`),ug()()(),Ac(387,`td`,25)(388,`em`)(389,`strong`),vN(390,`(opcional)`),ug()(),Ac(391,`p`),vN(392,`Caso verdadeiro o botão da ação `),Ac(393,`code`),vN(394,`p-secondary-label`),ug(),vN(395,` ativará o modo `),Ac(396,`code`),vN(397,`danger`),ug(),vN(398,`.`),ug(),Ac(399,`blockquote`)(400,`p`),vN(401,`Incompatível com o tipo `),Ac(402,`strong`),vN(403,`tertiary`),ug(),vN(404,` da propriedade `),Ac(405,`code`),vN(406,`p-kind-primary-action`),ug(),vN(407,`.`),ug()()()(),Ac(408,`tr`,18)(409,`td`,19)(410,`div`,20)(411,`span`,21),vN(412,` p-disabled`),Kc(413,`br`),ug()()(),Ac(414,`td`,22)(415,`code`,32),vN(416,`boolean`),ug()(),Ac(417,`td`,24)(418,`p`)(419,`code`),vN(420,`false`),ug()()(),Ac(421,`td`,25)(422,`em`)(423,`strong`),vN(424,`(opcional)`),ug()(),Ac(425,`p`),vN(426,`Desabilita o componente.`),ug()()(),Ac(427,`tr`,18)(428,`td`,19)(429,`div`,20)(430,`span`,21),vN(431,` p-height`),Kc(432,`br`),ug()()(),Ac(433,`td`,22)(434,`code`,33),vN(435,`number`),ug()(),Ac(436,`td`,24),vN(437,`-`),ug(),Ac(438,`td`,25)(439,`em`)(440,`strong`),vN(441,`(opcional)`),ug()(),Ac(442,`p`),vN(443,`Define a altura do componente.`),ug(),Ac(444,`blockquote`)(445,`p`),vN(446,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),ug()()()(),Ac(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),vN(451,` p-help`),Kc(452,`br`),ug()()(),Ac(453,`td`,22)(454,`code`,27),vN(455,`string`),ug()(),Ac(456,`td`,24),vN(457,`-`),ug(),Ac(458,`td`,25)(459,`em`)(460,`strong`),vN(461,`(opcional)`),ug()(),Ac(462,`p`),vN(463,`Link de ajuda incluído no menu de ações do header.`),ug()()(),Ac(464,`tr`,18)(465,`td`,19)(466,`div`,20)(467,`span`,21),vN(468,` p-kind-primary-action`),Kc(469,`br`),ug()()(),Ac(470,`td`,22)(471,`code`,27),vN(472,`string`),ug()(),Ac(473,`td`,24)(474,`p`)(475,`code`),vN(476,`tertiary`),ug()()(),Ac(477,`td`,25)(478,`em`)(479,`strong`),vN(480,`(opcional)`),ug()(),Ac(481,`p`),vN(482,`Define o estilo do botão da ação `),Ac(483,`code`),vN(484,`p-primary-label`),ug(),vN(485,`, conforme o enum `),Ac(486,`code`),vN(487,`PoButtonKind`),ug(),vN(488,`.`),ug()()(),Ac(489,`tr`,18)(490,`td`,19)(491,`div`,20)(492,`span`,21),vN(493,` p-kind-secondary-action`),Kc(494,`br`),ug()()(),Ac(495,`td`,22)(496,`code`,27),vN(497,`string`),ug()(),Ac(498,`td`,24)(499,`p`)(500,`code`),vN(501,`tertiary`),ug()()(),Ac(502,`td`,25)(503,`em`)(504,`strong`),vN(505,`(opcional)`),ug()(),Ac(506,`p`),vN(507,`Define o estilo do botão da ação `),Ac(508,`code`),vN(509,`p-secondary-label`),ug(),vN(510,`, conforme o enum `),Ac(511,`code`),vN(512,`PoButtonKind`),ug(),vN(513,`.`),ug()()(),Ac(514,`tr`,18)(515,`td`,19)(516,`div`,20)(517,`span`,21),vN(518,` p-no-shadow`),Kc(519,`br`),ug()()(),Ac(520,`td`,22)(521,`code`,32),vN(522,`boolean`),ug()(),Ac(523,`td`,24)(524,`p`)(525,`code`),vN(526,`true`),ug()()(),Ac(527,`td`,25)(528,`em`)(529,`strong`),vN(530,`(opcional)`),ug()(),Ac(531,`p`),vN(532,`Desabilita a sombra do componente quando o mesmo for clicável.`),ug(),Ac(533,`blockquote`)(534,`p`),vN(535,`A sombra é exibida por padrão apenas quando o evento `),Ac(536,`code`),vN(537,`p-click`),ug(),vN(538,` está definido.`),ug()()()(),Ac(539,`tr`,18)(540,`td`,19)(541,`div`,28)(542,`span`,29),vN(543,` (p-on-disabled)`),Kc(544,`br`),ug()()(),Ac(545,`td`,22)(546,`code`,30),vN(547,`EventEmitter`),ug()(),Ac(548,`td`,24),vN(549,`-`),ug(),Ac(550,`td`,25)(551,`em`)(552,`strong`),vN(553,`(opcional)`),ug()(),Ac(554,`p`),vN(555,`Evento disparado quando a propriedade `),Ac(556,`code`),vN(557,`p-disabled`),ug(),vN(558,` for alterada.`),ug()()(),Ac(559,`tr`,18)(560,`td`,19)(561,`div`,20)(562,`span`,21),vN(563,` p-primary`),Kc(564,`br`),ug()()(),Ac(565,`td`,22)(566,`code`,32),vN(567,`boolean`),ug()(),Ac(568,`td`,24)(569,`p`)(570,`code`),vN(571,`false`),ug()()(),Ac(572,`td`,25)(573,`em`)(574,`strong`),vN(575,`(opcional)`),ug()(),Ac(576,`p`),vN(577,`Opção para que o `),Ac(578,`code`),vN(579,`po-widget`),ug(),vN(580,` fique em destaque.`),ug()()(),Ac(581,`tr`,18)(582,`td`,19)(583,`div`,28)(584,`span`,29),vN(585,` (p-primary-action)`),Kc(586,`br`),ug()()(),Ac(587,`td`,22)(588,`code`,30),vN(589,`EventEmitter`),ug()(),Ac(590,`td`,24),vN(591,`-`),ug(),Ac(592,`td`,25)(593,`em`)(594,`strong`),vN(595,`(opcional)`),ug()(),Ac(596,`p`),vN(597,`Evento disparado ao clicar na ação `),Ac(598,`code`),vN(599,`p-primary-label`),ug(),vN(600,`.`),ug()()(),Ac(601,`tr`,18)(602,`td`,19)(603,`div`,20)(604,`span`,21),vN(605,` p-primary-label`),Kc(606,`br`),ug()()(),Ac(607,`td`,22)(608,`code`,27),vN(609,`string`),ug()(),Ac(610,`td`,24),vN(611,`-`),ug(),Ac(612,`td`,25)(613,`em`)(614,`strong`),vN(615,`(opcional)`),ug()(),Ac(616,`p`),vN(617,`Define o label e exibe a ação primária no footer do componente.`),ug()()(),Ac(618,`tr`,18)(619,`td`,19)(620,`div`,28)(621,`span`,29),vN(622,` (p-secondary-action)`),Kc(623,`br`),ug()()(),Ac(624,`td`,22)(625,`code`,30),vN(626,`EventEmitter`),ug()(),Ac(627,`td`,24),vN(628,`-`),ug(),Ac(629,`td`,25)(630,`em`)(631,`strong`),vN(632,`(opcional)`),ug()(),Ac(633,`p`),vN(634,`Evento disparado ao clicar na ação `),Ac(635,`code`),vN(636,`p-secondary-label`),ug(),vN(637,`.`),ug()()(),Ac(638,`tr`,18)(639,`td`,19)(640,`div`,20)(641,`span`,21),vN(642,` p-secondary-label`),Kc(643,`br`),ug()()(),Ac(644,`td`,22)(645,`code`,27),vN(646,`string`),ug()(),Ac(647,`td`,24),vN(648,`-`),ug(),Ac(649,`td`,25)(650,`em`)(651,`strong`),vN(652,`(opcional)`),ug()(),Ac(653,`p`),vN(654,`Define o label e exibe a ação secundária no footer do componente.`),ug(),Ac(655,`blockquote`)(656,`p`),vN(657,`Exibida apenas quando `),Ac(658,`code`),vN(659,`p-primary-label`),ug(),vN(660,` estiver definida.`),ug()()()(),Ac(661,`tr`,18)(662,`td`,19)(663,`div`,28)(664,`span`,29),vN(665,` (p-setting)`),Kc(666,`br`),ug()()(),Ac(667,`td`,22)(668,`code`,30),vN(669,`EventEmitter`),ug()(),Ac(670,`td`,24),vN(671,`-`),ug(),Ac(672,`td`,25)(673,`em`)(674,`strong`),vN(675,`(opcional)`),ug()(),Ac(676,`p`),vN(677,`Evento disparado ao clicar em `),Ac(678,`strong`),vN(679,`Configurações`),ug(),vN(680,` incluído no menu de ações do header.`),ug()()(),Ac(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),vN(685,` p-size`),Kc(686,`br`),ug()()(),Ac(687,`td`,22)(688,`code`,27),vN(689,`string`),ug()(),Ac(690,`td`,24)(691,`p`)(692,`code`),vN(693,`medium`),ug()()(),Ac(694,`td`,25)(695,`em`)(696,`strong`),vN(697,`(opcional)`),ug()(),Ac(698,`p`),vN(699,`Define o tamanho dos botões do componente:`),ug(),Ac(700,`ul`)(701,`li`)(702,`code`),vN(703,`small`),ug(),vN(704,`: altura de 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(705,`li`)(706,`code`),vN(707,`medium`),ug(),vN(708,`: altura de 44px.`),ug()(),Ac(709,`blockquote`)(710,`p`),vN(711,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(712,`code`),vN(713,`medium`),ug(),vN(714,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(715,`a`,34),vN(716,`po-theme`),ug(),vN(717,`.`),ug()()()(),Ac(718,`tr`,18)(719,`td`,19)(720,`div`,20)(721,`span`,21),vN(722,` p-tag-icon`),Kc(723,`br`),ug()()(),Ac(724,`td`,22)(725,`code`,27),vN(726,`string `),ug(),Ac(727,`code`,35),vN(728,` TemplateRef<void>`),ug()(),Ac(729,`td`,24),vN(730,`-`),ug(),Ac(731,`td`,25)(732,`em`)(733,`strong`),vN(734,`(opcional)`),ug()(),Ac(735,`p`),vN(736,`Define o ícone exibido ao lado do label da `),Ac(737,`code`),vN(738,`p-tag`),ug(),vN(739,`.`),ug(),Ac(740,`p`),vN(741,`É possível usar qualquer um dos ícones da `),Ac(742,`a`,36),vN(743,`Biblioteca de ícones PO UI`),ug(),vN(744,`, conforme exemplo:`),ug(),Ac(745,`pre`)(746,`code`),vN(747,`<po-widget p-tag-icon="an an-user"></po-widget>
`),ug()(),Ac(748,`p`),vN(749,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(750,`em`),vN(751,`Font Awesome`),ug(),vN(752,`, desde que a biblioteca
esteja carregada no projeto:`),ug(),Ac(753,`pre`)(754,`code`),vN(755,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),ug()(),Ac(756,`p`),vN(757,`Outra opção seria a customização do ícone através do `),Ac(758,`code`),vN(759,`TemplateRef`),ug(),vN(760,`, conforme exemplo abaixo:`),ug(),Ac(761,`pre`)(762,`code`),vN(763,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ug()(),Ac(764,`blockquote`)(765,`p`),vN(766,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(767,`code`),vN(768,`font-size: inherit`),ug(),vN(769,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(770,`tr`,18)(771,`td`,19)(772,`div`,20)(773,`span`,21),vN(774,` p-tag`),Kc(775,`br`),ug()()(),Ac(776,`td`,22)(777,`code`,27),vN(778,`string`),ug()(),Ac(779,`td`,24),vN(780,`-`),ug(),Ac(781,`td`,25)(782,`em`)(783,`strong`),vN(784,`(opcional)`),ug()(),Ac(785,`p`),vN(786,`Label da tag exibida no header.`),ug(),Ac(787,`blockquote`)(788,`p`),vN(789,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ug()()()(),Ac(790,`tr`,18)(791,`td`,19)(792,`div`,20)(793,`span`,21),vN(794,` p-tag-position`),Kc(795,`br`),ug()()(),Ac(796,`td`,22)(797,`code`,27),vN(798,`string`),ug()(),Ac(799,`td`,24)(800,`p`)(801,`code`),vN(802,`right`),ug()()(),Ac(803,`td`,25)(804,`em`)(805,`strong`),vN(806,`(opcional)`),ug()(),Ac(807,`p`),vN(808,`Define o posicionamento da `),Ac(809,`code`),vN(810,`po-tag`),ug(),vN(811,` no cabeçalho do Widget:`),ug(),Ac(812,`ul`)(813,`li`)(814,`code`),vN(815,`right`),ug(),vN(816,`: posicionada no canto superior direito do cabeçalho.`),ug(),Ac(817,`li`)(818,`code`),vN(819,`top`),ug(),vN(820,`: posicionada à esquerda, acima do título (quando houver).`),ug(),Ac(821,`li`)(822,`code`),vN(823,`bottom`),ug(),vN(824,`: posicionada à esquerda, abaixo do título (quando houver).`),ug()()()(),Ac(825,`tr`,18)(826,`td`,19)(827,`div`,20)(828,`span`,21),vN(829,` p-tag-type`),Kc(830,`br`),ug()()(),Ac(831,`td`,22)(832,`code`,37),vN(833,`PoTagType `),ug(),Ac(834,`code`,27),vN(835,` string`),ug()(),Ac(836,`td`,24)(837,`p`)(838,`code`),vN(839,`success`),ug()()(),Ac(840,`td`,25)(841,`em`)(842,`strong`),vN(843,`(opcional)`),ug()(),Ac(844,`p`),vN(845,`Define o tipo da `),Ac(846,`code`),vN(847,`p-tag`),ug(),vN(848,`, conforme o enum `),Ac(849,`strong`),vN(850,`PoTagType`),ug(),vN(851,`.`),ug(),Ac(852,`p`),vN(853,`Valores válidos:`),ug(),Ac(854,`ul`)(855,`li`)(856,`code`),vN(857,`success`),ug(),vN(858,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ug(),Ac(859,`li`)(860,`code`),vN(861,`warning`),ug(),vN(862,`: cor amarela que representa aviso ou advertência.`),ug(),Ac(863,`li`)(864,`code`),vN(865,`danger`),ug(),vN(866,`: cor vermelha para erro ou aviso crítico.`),ug(),Ac(867,`li`)(868,`code`),vN(869,`info`),ug(),vN(870,`: cor azul claro que caracteriza conteúdo informativo.`),ug(),Ac(871,`li`)(872,`code`),vN(873,`neutral`),ug(),vN(874,`: cor cinza claro para uso geral.`),ug()()()(),Ac(875,`tr`,18)(876,`td`,19)(877,`div`,20)(878,`span`,21),vN(879,` p-title`),Kc(880,`br`),ug()()(),Ac(881,`td`,22)(882,`code`,27),vN(883,`string`),ug()(),Ac(884,`td`,24),vN(885,`-`),ug(),Ac(886,`td`,25)(887,`em`)(888,`strong`),vN(889,`(opcional)`),ug()(),Ac(890,`p`),vN(891,`Título do componente.`),ug(),Ac(892,`blockquote`)(893,`p`),vN(894,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ug()()()(),Ac(895,`tr`,18)(896,`td`,19)(897,`div`,28)(898,`span`,29),vN(899,` (p-title-action)`),Kc(900,`br`),ug()()(),Ac(901,`td`,22)(902,`code`,30),vN(903,`EventEmitter`),ug()(),Ac(904,`td`,24),vN(905,`-`),ug(),Ac(906,`td`,25)(907,`em`)(908,`strong`),vN(909,`(opcional)`),ug()(),Ac(910,`p`),vN(911,`Evento disparado ao clicar no título definido em `),Ac(912,`code`),vN(913,`p-title`),ug(),vN(914,`.`),ug()()()(),Ac(915,`h3`),vN(916,`Interfaces`),ug(),Ac(917,`h4`,38)(918,`code`,5),vN(919,`PoPopupAction`),ug()(),Ac(920,`div`,2)(921,`p`),vN(922,`Interface para lista de ações do componente.`),ug()(),Ac(923,`h4`,14),vN(924,`Propriedades`),ug(),Ac(925,`table`,15)(926,`tr`,16)(927,`th`,17),vN(928,`Nome`),ug(),Ac(929,`th`,17),vN(930,`Tipo`),ug(),Ac(931,`th`,17),vN(932,`Descrição`),ug()(),Ac(933,`tr`,18)(934,`td`,19)(935,`div`,20)(936,`span`,21),vN(937,` action`),Kc(938,`br`),ug()()(),Ac(939,`td`,22)(940,`code`,39),vN(941,`Function`),ug()(),Ac(942,`td`,25)(943,`em`)(944,`strong`),vN(945,`(opcional)`),ug()(),Ac(946,`p`),vN(947,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(948,`p`),vN(949,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(950,`code`),vN(951,`subItems`),ug(),vN(952,`.`),ug(),Ac(953,`blockquote`)(954,`p`),vN(955,`Para que a função seja executada no contexto do componente, utilize `),Ac(956,`em`),vN(957,`bind`),ug(),vN(958,`:
`),Ac(959,`code`),vN(960,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(961,`tr`,18)(962,`td`,19)(963,`div`,20)(964,`span`,21),vN(965,` disabled`),Kc(966,`br`),ug()()(),Ac(967,`td`,22)(968,`code`,32),vN(969,`boolean `),ug(),Ac(970,`code`,39),vN(971,` Function`),ug()(),Ac(972,`td`,25)(973,`em`)(974,`strong`),vN(975,`(opcional)`),ug()(),Ac(976,`p`),vN(977,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(978,`tr`,18)(979,`td`,19)(980,`div`,20)(981,`span`,21),vN(982,` icon`),Kc(983,`br`),ug()()(),Ac(984,`td`,22)(985,`code`,27),vN(986,`string `),ug(),Ac(987,`code`,35),vN(988,` TemplateRef<void>`),ug()(),Ac(989,`td`,25)(990,`em`)(991,`strong`),vN(992,`(opcional)`),ug()(),Ac(993,`p`),vN(994,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(995,`p`),vN(996,`Aceita ícones da `),Ac(997,`a`,36),vN(998,`Biblioteca de ícones`),ug(),vN(999,`, fontes externas (ex: Font Awesome)
ou um `),Ac(1e3,`code`),vN(1001,`TemplateRef`),ug(),vN(1002,` para ícones customizados.`),ug(),Ac(1003,`pre`)(1004,`code`),vN(1005,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(1006,`tr`,18)(1007,`td`,19)(1008,`div`,20)(1009,`span`,21),vN(1010,` label`),Kc(1011,`br`),ug()()(),Ac(1012,`td`,22)(1013,`code`,27),vN(1014,`string`),ug()(),Ac(1015,`td`,25)(1016,`p`),vN(1017,`Rótulo da ação.`),ug(),Ac(1018,`p`),vN(1019,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(1020,`code`),vN(1021,`subItems`),ug(),vN(1022,`.`),ug()()(),Ac(1023,`tr`,18)(1024,`td`,19)(1025,`div`,20)(1026,`span`,21),vN(1027,` selected`),Kc(1028,`br`),ug()()(),Ac(1029,`td`,22)(1030,`code`,32),vN(1031,`boolean`),ug()(),Ac(1032,`td`,25)(1033,`em`)(1034,`strong`),vN(1035,`(opcional)`),ug()(),Ac(1036,`p`),vN(1037,`Define se a ação está selecionada.`),ug()()(),Ac(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),vN(1042,` separator`),Kc(1043,`br`),ug()()(),Ac(1044,`td`,22)(1045,`code`,32),vN(1046,`boolean`),ug()(),Ac(1047,`td`,25)(1048,`em`)(1049,`strong`),vN(1050,`(opcional)`),ug()(),Ac(1051,`p`),vN(1052,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(1053,`tr`,18)(1054,`td`,19)(1055,`div`,20)(1056,`span`,21),vN(1057,` subItems`),Kc(1058,`br`),ug()()(),Ac(1059,`td`,22)(1060,`code`,23),vN(1061,`Array<PoPopupAction>`),ug()(),Ac(1062,`td`,25)(1063,`em`)(1064,`strong`),vN(1065,`(opcional)`),ug()(),Ac(1066,`p`),vN(1067,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(1068,`p`),vN(1069,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(1070,`blockquote`)(1071,`p`),vN(1072,`As propriedades `),Ac(1073,`code`),vN(1074,`disabled`),ug(),vN(1075,`, `),Ac(1076,`code`),vN(1077,`type`),ug(),vN(1078,` e `),Ac(1079,`code`),vN(1080,`visible`),ug(),vN(1081,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(1082,`blockquote`)(1083,`p`),vN(1084,`Quando `),Ac(1085,`code`),vN(1086,`url`),ug(),vN(1087,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(1088,`blockquote`)(1089,`p`),vN(1090,`Em subníveis aninhados, o `),Ac(1091,`code`),vN(1092,`icon`),ug(),vN(1093,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(1094,`tr`,18)(1095,`td`,19)(1096,`div`,20)(1097,`span`,21),vN(1098,` type`),Kc(1099,`br`),ug()()(),Ac(1100,`td`,22)(1101,`code`,27),vN(1102,`string`),ug()(),Ac(1103,`td`,25)(1104,`em`)(1105,`strong`),vN(1106,`(opcional)`),ug()(),Ac(1107,`p`),vN(1108,`Define a cor do item.`),ug(),Ac(1109,`p`),vN(1110,`Valores válidos:`),ug(),Ac(1111,`ul`)(1112,`li`)(1113,`code`),vN(1114,`default`),ug()(),Ac(1115,`li`)(1116,`code`),vN(1117,`danger`),ug()()()()(),Ac(1118,`tr`,18)(1119,`td`,19)(1120,`div`,20)(1121,`span`,21),vN(1122,` url`),Kc(1123,`br`),ug()()(),Ac(1124,`td`,22)(1125,`code`,27),vN(1126,`string`),ug()(),Ac(1127,`td`,25)(1128,`em`)(1129,`strong`),vN(1130,`(opcional)`),ug()(),Ac(1131,`p`),vN(1132,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(1133,`p`),vN(1134,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(1135,`code`),vN(1136,`url`),ug(),vN(1137,` é informada em um agrupador, o clique `),Ac(1138,`strong`),vN(1139,`não abrirá os subitens`),ug(),vN(1140,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(1141,`blockquote`)(1142,`p`),vN(1143,`Quando informada, tem prioridade sobre a propriedade `),Ac(1144,`code`),vN(1145,`action`),ug(),vN(1146,`.`),ug()()()(),Ac(1147,`tr`,18)(1148,`td`,19)(1149,`div`,20)(1150,`span`,21),vN(1151,` visible`),Kc(1152,`br`),ug()()(),Ac(1153,`td`,22)(1154,`code`,32),vN(1155,`boolean `),ug(),Ac(1156,`code`,39),vN(1157,` Function`),ug()(),Ac(1158,`td`,25)(1159,`em`)(1160,`strong`),vN(1161,`(opcional)`),ug()(),Ac(1162,`p`),vN(1163,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(1164,`h4`,38)(1165,`code`,5),vN(1166,`PoWidgetAvatar`),ug()(),Ac(1167,`div`,2)(1168,`p`),vN(1169,`Interface para definição do avatar no `),Ac(1170,`code`),vN(1171,`po-widget`),ug(),vN(1172,`.`),ug()(),Ac(1173,`h4`,14),vN(1174,`Propriedades`),ug(),Ac(1175,`table`,15)(1176,`tr`,16)(1177,`th`,17),vN(1178,`Nome`),ug(),Ac(1179,`th`,17),vN(1180,`Tipo`),ug(),Ac(1181,`th`,17),vN(1182,`Descrição`),ug()(),Ac(1183,`tr`,18)(1184,`td`,19)(1185,`div`,20)(1186,`span`,21),vN(1187,` customTemplate`),Kc(1188,`br`),ug()()(),Ac(1189,`td`,22)(1190,`code`,40),vN(1191,`TemplateRef<any>`),ug()(),Ac(1192,`td`,25)(1193,`em`)(1194,`strong`),vN(1195,`(opcional)`),ug()(),Ac(1196,`p`),vN(1197,`Permite a criação de template customizado para o avatar`),ug(),Ac(1198,`pre`)(1199,`code`),vN(1200,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),ug()()()(),Ac(1201,`tr`,18)(1202,`td`,19)(1203,`div`,20)(1204,`span`,21),vN(1205,` size`),Kc(1206,`br`),ug()()(),Ac(1207,`td`,22)(1208,`code`,27),vN(1209,`string`),ug()(),Ac(1210,`td`,25)(1211,`em`)(1212,`strong`),vN(1213,`(opcional)`),ug()(),Ac(1214,`p`),vN(1215,`Tamanho de exibição do componente `),Ac(1216,`code`),vN(1217,`po-avatar`),ug(),vN(1218,`.`),ug(),Ac(1219,`p`),vN(1220,`Valores válidos:`),ug(),Ac(1221,`ul`)(1222,`li`)(1223,`code`),vN(1224,`xs`),ug(),vN(1225,` (24x24)`),ug(),Ac(1226,`li`)(1227,`code`),vN(1228,`sm`),ug(),vN(1229,` (32x32)`),ug(),Ac(1230,`li`)(1231,`code`),vN(1232,`md`),ug(),vN(1233,` (64x64)`),ug(),Ac(1234,`li`)(1235,`code`),vN(1236,`lg`),ug(),vN(1237,` (96x96)`),ug(),Ac(1238,`li`)(1239,`code`),vN(1240,`xl`),ug(),vN(1241,` (144x144)`),ug()()()(),Ac(1242,`tr`,18)(1243,`td`,19)(1244,`div`,20)(1245,`span`,21),vN(1246,` src`),Kc(1247,`br`),ug()()(),Ac(1248,`td`,22)(1249,`code`,27),vN(1250,`string`),ug()(),Ac(1251,`td`,25)(1252,`em`)(1253,`strong`),vN(1254,`(opcional)`),ug()(),Ac(1255,`p`),vN(1256,`Fonte da imagem que pode ser um caminho local (`),Ac(1257,`code`),vN(1258,`./assets/images/logo-black-small.png`),ug(),vN(1259,`)
ou um servidor externo (`),Ac(1260,`code`),vN(1261,`https://po-ui.io/assets/images/logo-black-small.png`),ug(),vN(1262,`).`),ug()()(),Ac(1263,`tr`,18)(1264,`td`,19)(1265,`div`,20)(1266,`span`,21),vN(1267,` widthCustomTemplate`),Kc(1268,`br`),ug()()(),Ac(1269,`td`,22)(1270,`code`,27),vN(1271,`string`),ug()(),Ac(1272,`td`,25)(1273,`em`)(1274,`strong`),vN(1275,`(opcional)`),ug()(),Ac(1276,`p`),vN(1277,`Define a largura em porcentagem do `),Ac(1278,`code`),vN(1279,`customTemplate`),ug(),vN(1280,`.`),ug(),Ac(1281,`p`),vN(1282,`O valor máximo aceito é `),Ac(1283,`code`),vN(1284,`50%`),ug(),vN(1285,`.`),ug()()()(),Ac(1286,`h3`),vN(1287,`Enums`),ug(),Ac(1288,`h4`,4)(1289,`code`,5),vN(1290,`PoButtonKind`),ug()(),Ac(1291,`div`,2)(1292,`p`),vN(1293,`Estilos disponíveis do button.`),ug()(),Ac(1294,`h4`,14),vN(1295,`Propriedades`),ug(),Ac(1296,`table`,15)(1297,`tr`,16)(1298,`th`,17),vN(1299,`Nome`),ug(),Ac(1300,`th`,17),vN(1301,`Descrição`),ug()(),Ac(1302,`tr`,18)(1303,`td`,19)(1304,`div`,20)(1305,`span`,21),vN(1306,` primary`),Kc(1307,`br`),ug()()(),Ac(1308,`td`,25)(1309,`p`),vN(1310,`Estilo primário, usado para ações principais que requerem maior destaque.`),ug()()(),Ac(1311,`tr`,18)(1312,`td`,19)(1313,`div`,20)(1314,`span`,21),vN(1315,` secondary`),Kc(1316,`br`),ug()()(),Ac(1317,`td`,25)(1318,`p`),vN(1319,`Estilo secundário, usado como padrão, para ações comuns.`),ug()()(),Ac(1320,`tr`,18)(1321,`td`,19)(1322,`div`,20)(1323,`span`,21),vN(1324,` tertiary`),Kc(1325,`br`),ug()()(),Ac(1326,`td`,25)(1327,`p`),vN(1328,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-widget-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-widget-basic-view`)(6,`sample-po-widget-labs-view`)(7,`sample-po-widget-finance-dashboard-view`)(8,`sample-po-widget-card-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ye,we,_e,Te,Me],encapsulation:2,changeDetection:1})}return o})()}];var We=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(tt),kL]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,We]})}return o})();export{Ot as DocPoWidgetModule};