import{$i as pt,Ai as ho,Ar as Nx,C as C4,Ca as zO,Cr as Kc,En as v4,Er as LP,Fr as Ox,Gi as mg,Gt as eoe,Hr as RN,Ji as p0,Jr as TE,L as Ioe,Lt as cP,Oi as he,Ri as kL,Rt as cae,Si as fo,T as Cze,Tn as uze,Un as AN,Vi as kx,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,_n as ta,ai as Zx,ca as ue,cn as noe,cr as HN,fr as Hp,gi as e_,gn as soe,hr as IE,i as _a,ia as sE,in as mae,ir as E,jt as aoe,mn as rb,nr as DN,oi as aN,on as n4,pa as vN,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,va as xN,yi as f,yr as Jv,zr as Qn}from"./main-M64QO35D.js";var fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Kc(0,`po-widget`)},dependencies:[Ioe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-widget></po-widget>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-widget-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Le,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,fe],encapsulation:2,changeDetection:1})}return o})();var qe=(o,k)=>({src:o,size:k});var Ce=(()=>{class o{poNotification=f(Lu);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=Bx();Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),vN(2),ug()(),Kc(3,`po-divider`),Ac(4,`div`,1),Kc(5,`po-info`,3),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(m),DN(i.title,r)||(i.title=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(m),DN(i.help,r)||(i.help=r),e_(r)}),ug(),p0(),Ac(11,`po-number`,6),RE(`ngModelChange`,function(r){return Jv(m),DN(i.height,r)||(i.height=r),e_(r)}),ug(),p0(),Ac(12,`div`,1)(13,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(m),DN(i.actionPopup.action,r)||(i.actionPopup.action=r),e_(r)}),ug(),p0(),Ac(14,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(m),DN(i.actionPopup.label,r)||(i.actionPopup.label=r),e_(r)}),ug(),p0(),ug(),Ac(15,`div`,1)(16,`po-button`,9),pt(`p-click`,function(){return i.addAction(i.actionPopup)}),ug()(),Ac(17,`po-input`,10),RE(`ngModelChange`,function(r){return Jv(m),DN(i.background,r)||(i.background=r),e_(r)}),ug(),p0(),Ac(18,`po-input`,11),RE(`ngModelChange`,function(r){return Jv(m),DN(i.primaryLabel,r)||(i.primaryLabel=r),e_(r)}),ug(),p0(),Ac(19,`po-input`,12),RE(`ngModelChange`,function(r){return Jv(m),DN(i.secondaryLabel,r)||(i.secondaryLabel=r),e_(r)}),ug(),p0(),Ac(20,`div`,13)(21,`po-input`,14),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagLabel,r)||(i.tagLabel=r),e_(r)}),ug(),p0(),Ac(22,`po-select`,15),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagIcon,r)||(i.tagIcon=r),e_(r)}),ug(),p0(),Ac(23,`po-select`,16),RE(`ngModelChange`,function(r){return Jv(m),DN(i.tagPosition,r)||(i.tagPosition=r),e_(r)}),ug(),p0(),ug(),Ac(24,`div`,1)(25,`po-input`,17),RE(`ngModelChange`,function(r){return Jv(m),DN(i.avatarSrc,r)||(i.avatarSrc=r),e_(r)}),ug(),p0(),Ac(26,`po-select`,18),RE(`ngModelChange`,function(r){return Jv(m),DN(i.avatarSize,r)||(i.avatarSize=r),e_(r)}),ug(),p0(),ug(),Ac(27,`div`,1)(28,`po-checkbox-group`,19),RE(`ngModelChange`,function(r){return Jv(m),DN(i.properties,r)||(i.properties=r),e_(r)}),ug(),p0(),ug(),Ac(29,`po-textarea`,20),RE(`ngModelChange`,function(r){return Jv(m),DN(i.content,r)||(i.content=r),e_(r)}),ug(),p0(),Ac(30,`div`,1)(31,`po-button`,21),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(Hp(),cE(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,xN(36,qe,i.avatarSrc,i.avatarSize)),Hp(),mg(` `,i.content,` `),Hp(3),cE(`p-value`,i.action),Hp(4),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.height),m0(),Hp(2),TE(`ngModel`,i.actionPopup.action),m0(),Hp(),TE(`ngModel`,i.actionPopup.label),m0(),Hp(2),cE(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),Hp(),TE(`ngModel`,i.background),m0(),Hp(),TE(`ngModel`,i.primaryLabel),m0(),Hp(),TE(`ngModel`,i.secondaryLabel),m0(),Hp(2),TE(`ngModel`,i.tagLabel),m0(),Hp(),TE(`ngModel`,i.tagIcon),cE(`p-options`,i.iconList),m0(),Hp(),TE(`ngModel`,i.tagPosition),cE(`p-options`,i.listTagPosition),m0(),Hp(2),TE(`ngModel`,i.avatarSrc),m0(),Hp(),TE(`ngModel`,i.avatarSize),cE(`p-options`,i.listAvatarSize),m0(),Hp(2),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.content),m0())},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,C4,eoe,noe,aoe,soe,Ioe],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-widget-labs`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Ce],encapsulation:2,changeDetection:1})}return o})();var Ie=[`detailsModal`];var Pe=(()=>{class o{poNotification=f(Lu);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open()}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Xc(Ie,7),l&2){let m;fo(m=ho())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Ac(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),vN(4,`Sales order`),ug(),Ac(5,`div`),vN(6,`Scheduled to: `),Ac(7,`strong`),vN(8,`05/04/2018`),ug()(),Ac(9,`div`,3),Kc(10,`po-button`,4),Ac(11,`po-button`,5),pt(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),ug()()(),Ac(12,`po-widget`,6),pt(`p-click`,function(){return i.openModal(`account`)}),Ac(13,`div`,7),vN(14,`$2.818,29`),ug(),Ac(15,`div`,8),vN(16,`Last updated at 18:34`),ug()(),Ac(17,`po-widget`,9),pt(`p-primary-action`,function(){return i.openModal(`account`)}),Ac(18,`div`,10),vN(19,`$5.000,00`),ug(),Ac(20,`div`,8),vN(21,`Last updated at 08:20`),ug()()(),Ac(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),vN(27,`Enter the user routine`),ug()()(),Ac(28,`div`,15),Kc(29,`po-multiselect`,16),ug()(),Ac(30,`po-widget`,17)(31,`div`,7),vN(32,`Credit card`),ug(),Ac(33,`div`,8),vN(34,`MasterCard - 5500 0000 0000 0004`),ug()(),Ac(35,`po-widget`,18),pt(`p-primary-action`,function(){return i.openModal(`savings`)}),Ac(36,`div`,7),vN(37,`$2.000,00`),ug(),Ac(38,`div`,8),vN(39,`05/03/2018`),ug()()()(),Ac(40,`po-modal`,19,0),Kc(42,`po-table`,20),ug()),l&2&&(Hp(2),cE(`p-height`,190),Hp(10),cE(`p-height`,190),Hp(5),cE(`p-height`,190),Hp(6),cE(`p-height`,180),Hp(6),cE(`p-options`,i.options),Hp(),cE(`p-actions`,i.myActions)(`p-height`,180),Hp(5),cE(`p-height`,180)(`p-primary`,!0),Hp(5),cE(`p-title`,i.titleDetailsModal),Hp(2),cE(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[oi,cP,ta,v4,Ioe],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Ue=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget - Finance dashboard`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row sample-finance-row-gap">
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-widget-finance-dashboard`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Pe],encapsulation:2,changeDetection:1})}return o})();var Ne=o=>({customTemplate:o,widthCustomTemplate:`40%`});var He=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var je=o=>({header:o});var Je=()=>({label:`Angular`,data:100});var Ge=()=>({label:`React`,data:10});var Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Kc(0,`po-chart`,8),o&2&&cE(`p-options`,AN(3,je,RN(2,He)))(`p-series`,xN(7,Qe,RN(5,Je),RN(6,Ge)))}function Xe(o,k){if(o&1&&(Ac(0,`li`),vN(1),ug()),o&2){let p=k.$implicit;Hp(),IE(p)}}var De=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Xc(ta,7),l&2){let m;fo(m=ho())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),Kc(2,`po-info`,3),ug(),Ac(3,`po-widget`,4)(4,`div`),vN(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Ac(6,`div`,5)(7,`ul`)(8,`li`),vN(9,`Out-of-the-Box`),ug(),Ac(10,`li`),vN(11,`Standardized and Opinion-Based Architecture`),ug(),Ac(12,`li`),vN(13,`Next Generation Reactivity (Signals)`),ug(),Ac(14,`li`),vN(15,`Focus on Enterprise and Security`),ug()()()(),sE(16,Ke,1,10,`ng-template`,null,0,HN),ug()(),Ac(18,`po-modal`,6),vN(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Ac(20,`div`,7)(21,`ul`),Ox(22,Xe,2,1,`li`,null,Nx),ug()()()),l&2){let m=Zx(17);Hp(),cE(`p-help`,i.help),Hp(),cE(`p-label`,i.label)(`p-value`,i.value),Hp(),cE(`p-avatar`,AN(4,Ne,m)),Hp(19),kx(i.technologies)}},dependencies:[uze,soe,ta,Ioe],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Widget - Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-widget-card/sample-po-widget-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-widget-card`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1389,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetSelection`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-widget`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoWidgetComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-widget`),ug(),vN(17,` é recomendado para exibição de `),Ac(18,`em`),vN(19,`dashboards`),ug(),vN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),ug(),Ac(21,`p`),vN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),ug(),Ac(23,`p`),vN(24,`Para controlar sua largura, é possível utilizar o `),Ac(25,`a`,6),vN(26,`Grid System`),ug(),vN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ug(),Ac(28,`h4`),vN(29,`Boas práticas`),ug(),Ac(30,`p`),vN(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Ac(32,`code`),vN(33,`18.75rem`),ug(),vN(34,` no componente.`),ug(),Ac(35,`h4`),vN(36,`Acessibilidade tratada no componente`),ug(),Ac(37,`p`),vN(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),ug(),Ac(39,`ul`)(40,`li`),vN(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),ug(),Ac(42,`li`),vN(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Ac(44,`a`,7),vN(45,`4.1.2: Name, Role, Value`),ug(),vN(46,`)`),ug(),Ac(47,`li`),vN(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Ac(49,`a`,8),vN(50,`2.4.12: Focus Appearance`),ug(),vN(51,`)`),ug(),Ac(52,`li`),vN(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Ac(54,`a`,9),vN(55,`2.4.1 - Keyboard`),ug(),vN(56,`)`),ug()(),Ac(57,`h4`),vN(58,`Tokens customizáveis`),ug(),Ac(59,`p`),vN(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(61,`blockquote`)(62,`p`),vN(63,`Para maiores informações, acesse o guia `),Ac(64,`a`,10),vN(65,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(66,`.`),ug()(),Ac(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),vN(71,`Propriedade`),ug(),Ac(72,`th`),vN(73,`Descrição`),ug(),Ac(74,`th`),vN(75,`Valor Padrão`),ug()()(),Ac(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),vN(80,`Default Values`),ug()(),Kc(81,`td`)(82,`td`),ug(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--font-family`),ug()(),Ac(87,`td`),vN(88,`Família tipográfica usada`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--font-family-theme) `),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--font-size`),ug()(),Ac(96,`td`),vN(97,`Tamanho da fonte`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--font-size-sm)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--font-weight`),ug()(),Ac(105,`td`),vN(106,`Peso da fonte`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--font-weight-bold)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--font-color`),ug()(),Ac(114,`td`),vN(115,`Cor da fonte`),ug(),Ac(116,`td`)(117,`code`),vN(118,`var(--color-neutral-dark-95)`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--padding-header`),ug()(),Ac(123,`td`),vN(124,`Preenchimento do header`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--padding-body`),ug()(),Ac(132,`td`),vN(133,`Preenchimento do body`),ug(),Ac(134,`td`)(135,`code`),vN(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(137,`tr`)(138,`td`)(139,`code`),vN(140,`--padding-avatar`),ug()(),Ac(141,`td`),vN(142,`Preenchimento do avatar`),ug(),Ac(143,`td`)(144,`code`),vN(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),ug()()(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--padding-footer`),ug()(),Ac(150,`td`),vN(151,`Preenchimento do footer`),ug(),Ac(152,`td`)(153,`code`),vN(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`code`),vN(158,`--border-radius`),ug()(),Ac(159,`td`),vN(160,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(161,`td`)(162,`code`),vN(163,`var(--border-radius-md)`),ug()()(),Ac(164,`tr`)(165,`td`)(166,`code`),vN(167,`--border-width`),ug()(),Ac(168,`td`),vN(169,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(170,`td`)(171,`code`),vN(172,`var(--border-width-sm)`),ug()()(),Ac(173,`tr`)(174,`td`)(175,`code`),vN(176,`--border-color`),ug()(),Ac(177,`td`),vN(178,`Cor da borda`),ug(),Ac(179,`td`)(180,`code`),vN(181,`var(--color-neutral-light-20)`),ug()()(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--background`),ug()(),Ac(186,`td`),vN(187,`Cor de background`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-neutral-light-00)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--shadow`),ug()(),Ac(195,`td`),vN(196,`Contém o valor da sombra do elemento`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--shadow-md)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Hover`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--border-color-hover`),ug()(),Ac(210,`td`),vN(211,`Cor da borda no estado hover`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-action-hover)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`strong`),vN(218,`Focused`),ug()(),Kc(219,`td`)(220,`td`),ug(),Ac(221,`tr`)(222,`td`)(223,`code`),vN(224,`--color-focused`),ug()(),Ac(225,`td`),vN(226,`Cor principal no estado de focus`),ug(),Ac(227,`td`)(228,`code`),vN(229,`var(--color-action-default)`),ug()()(),Ac(230,`tr`)(231,`td`)(232,`code`),vN(233,`--outline-color-focused`),ug(),vN(234,` \xA0`),ug(),Ac(235,`td`),vN(236,`Cor do outline do estado de focus`),ug(),Ac(237,`td`)(238,`code`),vN(239,`var(--color-action-focus)`),ug()()()()()(),Ac(240,`div`,11)(241,`h4`,12),vN(242,`Seletor`),ug(),Ac(243,`pre`,13),vN(244,`<po-widget
    p-action-template="TemplateRef<any>"
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
    p-selection="PoWidgetSelection"
    (p-setting)="EventEmitter"
    p-size="string"
    p-subtitle="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-position="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),ug()(),Ac(245,`h4`,14),vN(246,`Propriedades`),ug(),Ac(247,`table`,15)(248,`tr`,16)(249,`th`,17),vN(250,`Nome`),ug(),Ac(251,`th`,17),vN(252,`Tipo`),ug(),Ac(253,`th`,17),vN(254,`Padrão`),ug(),Ac(255,`th`,17),vN(256,`Descrição`),ug()(),Ac(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),vN(261,` p-action-template`),Kc(262,`br`),ug()()(),Ac(263,`td`,22)(264,`code`,23),vN(265,`TemplateRef<any>`),ug()(),Ac(266,`td`,24),vN(267,`-`),ug(),Ac(268,`td`,25)(269,`p`),vN(270,`Uso `),Ac(271,`strong`),vN(272,`interno`),ug(),vN(273,` do `),Ac(274,`code`),vN(275,`po-list-view`),ug(),vN(276,`. Template renderizado como coluna de a\xE7\xE3o \xE0
direita do conte\xFAdo, centralizado verticalmente (em vez do header).`),ug()()(),Ac(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),vN(281,` p-actions`),Kc(282,`br`),ug()()(),Ac(283,`td`,22)(284,`code`,26),vN(285,`Array<PoPopupAction>`),ug()(),Ac(286,`td`,24),vN(287,`-`),ug(),Ac(288,`td`,25)(289,`em`)(290,`strong`),vN(291,`(opcional)`),ug()(),Ac(292,`p`),vN(293,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Ac(294,`code`),vN(295,`PoPopupAction`),ug(),vN(296,`.`),ug()()(),Ac(297,`tr`,18)(298,`td`,19)(299,`div`,20)(300,`span`,21),vN(301,` p-avatar`),Kc(302,`br`),ug()()(),Ac(303,`td`,22)(304,`code`,27),vN(305,`PoWidgetAvatar`),ug()(),Ac(306,`td`,24),vN(307,`-`),ug(),Ac(308,`td`,25)(309,`em`)(310,`strong`),vN(311,`(opcional)`),ug()(),Ac(312,`p`),vN(313,`Define o avatar a ser exibido à esquerda no Widget.`),ug()()(),Ac(314,`tr`,18)(315,`td`,19)(316,`div`,20)(317,`span`,21),vN(318,` p-background`),Kc(319,`br`),ug()()(),Ac(320,`td`,22)(321,`code`,28),vN(322,`string`),ug()(),Ac(323,`td`,24),vN(324,`-`),ug(),Ac(325,`td`,25)(326,`em`)(327,`strong`),vN(328,`(opcional)`),ug()(),Ac(329,`p`),vN(330,`Define uma imagem de fundo.`),ug(),Ac(331,`blockquote`)(332,`p`),vN(333,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Ac(334,`code`),vN(335,`p-widget`),ug(),vN(336,`,
pode-se utilizar a propriedade `),Ac(337,`code`),vN(338,`p-primary`),ug(),vN(339,` em conjunto para que os textos fiquem na cor branca.`),ug()()()(),Ac(340,`tr`,18)(341,`td`,19)(342,`div`,29)(343,`span`,30),vN(344,` (p-click)`),Kc(345,`br`),ug()()(),Ac(346,`td`,22)(347,`code`,31),vN(348,`EventEmitter`),ug()(),Ac(349,`td`,24),vN(350,`-`),ug(),Ac(351,`td`,25)(352,`em`)(353,`strong`),vN(354,`(opcional)`),ug()(),Ac(355,`p`),vN(356,`Evento disparado quando o usuário clicar no componente.`),ug(),Ac(357,`blockquote`)(358,`p`),vN(359,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),ug()()()(),Ac(360,`tr`,18)(361,`td`,19)(362,`div`,20)(363,`span`,21),vN(364,` p-danger-primary-action`),Kc(365,`br`),ug()()(),Ac(366,`td`,22)(367,`code`,32),vN(368,`false`),ug()(),Ac(369,`td`,24)(370,`p`)(371,`code`),vN(372,`false`),ug()()(),Ac(373,`td`,25)(374,`em`)(375,`strong`),vN(376,`(opcional)`),ug()(),Ac(377,`p`),vN(378,`Caso verdadeiro o botão da ação `),Ac(379,`code`),vN(380,`p-primary-label`),ug(),vN(381,` ativará o modo `),Ac(382,`code`),vN(383,`danger`),ug(),vN(384,`.`),ug(),Ac(385,`blockquote`)(386,`p`),vN(387,`Incompatível com o tipo `),Ac(388,`strong`),vN(389,`tertiary`),ug(),vN(390,` da propriedade `),Ac(391,`code`),vN(392,`p-kind-primary-action`),ug(),vN(393,`.`),ug()()()(),Ac(394,`tr`,18)(395,`td`,19)(396,`div`,20)(397,`span`,21),vN(398,` p-danger-secondary-action`),Kc(399,`br`),ug()()(),Ac(400,`td`,22)(401,`code`,32),vN(402,`false`),ug()(),Ac(403,`td`,24)(404,`p`)(405,`code`),vN(406,`false`),ug()()(),Ac(407,`td`,25)(408,`em`)(409,`strong`),vN(410,`(opcional)`),ug()(),Ac(411,`p`),vN(412,`Caso verdadeiro o botão da ação `),Ac(413,`code`),vN(414,`p-secondary-label`),ug(),vN(415,` ativará o modo `),Ac(416,`code`),vN(417,`danger`),ug(),vN(418,`.`),ug(),Ac(419,`blockquote`)(420,`p`),vN(421,`Incompatível com o tipo `),Ac(422,`strong`),vN(423,`tertiary`),ug(),vN(424,` da propriedade `),Ac(425,`code`),vN(426,`p-kind-primary-action`),ug(),vN(427,`.`),ug()()()(),Ac(428,`tr`,18)(429,`td`,19)(430,`div`,20)(431,`span`,21),vN(432,` p-disabled`),Kc(433,`br`),ug()()(),Ac(434,`td`,22)(435,`code`,33),vN(436,`boolean`),ug()(),Ac(437,`td`,24)(438,`p`)(439,`code`),vN(440,`false`),ug()()(),Ac(441,`td`,25)(442,`em`)(443,`strong`),vN(444,`(opcional)`),ug()(),Ac(445,`p`),vN(446,`Desabilita o componente.`),ug()()(),Ac(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),vN(451,` p-height`),Kc(452,`br`),ug()()(),Ac(453,`td`,22)(454,`code`,34),vN(455,`number`),ug()(),Ac(456,`td`,24),vN(457,`-`),ug(),Ac(458,`td`,25)(459,`em`)(460,`strong`),vN(461,`(opcional)`),ug()(),Ac(462,`p`),vN(463,`Define a altura do componente.`),ug(),Ac(464,`blockquote`)(465,`p`),vN(466,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),ug()()()(),Ac(467,`tr`,18)(468,`td`,19)(469,`div`,20)(470,`span`,21),vN(471,` p-help`),Kc(472,`br`),ug()()(),Ac(473,`td`,22)(474,`code`,28),vN(475,`string`),ug()(),Ac(476,`td`,24),vN(477,`-`),ug(),Ac(478,`td`,25)(479,`em`)(480,`strong`),vN(481,`(opcional)`),ug()(),Ac(482,`p`),vN(483,`Link de ajuda incluído no menu de ações do header.`),ug()()(),Ac(484,`tr`,18)(485,`td`,19)(486,`div`,20)(487,`span`,21),vN(488,` p-kind-primary-action`),Kc(489,`br`),ug()()(),Ac(490,`td`,22)(491,`code`,28),vN(492,`string`),ug()(),Ac(493,`td`,24)(494,`p`)(495,`code`),vN(496,`tertiary`),ug()()(),Ac(497,`td`,25)(498,`em`)(499,`strong`),vN(500,`(opcional)`),ug()(),Ac(501,`p`),vN(502,`Define o estilo do botão da ação `),Ac(503,`code`),vN(504,`p-primary-label`),ug(),vN(505,`, conforme o enum `),Ac(506,`code`),vN(507,`PoButtonKind`),ug(),vN(508,`.`),ug()()(),Ac(509,`tr`,18)(510,`td`,19)(511,`div`,20)(512,`span`,21),vN(513,` p-kind-secondary-action`),Kc(514,`br`),ug()()(),Ac(515,`td`,22)(516,`code`,28),vN(517,`string`),ug()(),Ac(518,`td`,24)(519,`p`)(520,`code`),vN(521,`tertiary`),ug()()(),Ac(522,`td`,25)(523,`em`)(524,`strong`),vN(525,`(opcional)`),ug()(),Ac(526,`p`),vN(527,`Define o estilo do botão da ação `),Ac(528,`code`),vN(529,`p-secondary-label`),ug(),vN(530,`, conforme o enum `),Ac(531,`code`),vN(532,`PoButtonKind`),ug(),vN(533,`.`),ug()()(),Ac(534,`tr`,18)(535,`td`,19)(536,`div`,20)(537,`span`,21),vN(538,` p-no-shadow`),Kc(539,`br`),ug()()(),Ac(540,`td`,22)(541,`code`,33),vN(542,`boolean`),ug()(),Ac(543,`td`,24)(544,`p`)(545,`code`),vN(546,`true`),ug()()(),Ac(547,`td`,25)(548,`em`)(549,`strong`),vN(550,`(opcional)`),ug()(),Ac(551,`p`),vN(552,`Desabilita a sombra do componente quando o mesmo for clicável.`),ug(),Ac(553,`blockquote`)(554,`p`),vN(555,`A sombra é exibida por padrão apenas quando o evento `),Ac(556,`code`),vN(557,`p-click`),ug(),vN(558,` está definido.`),ug()()()(),Ac(559,`tr`,18)(560,`td`,19)(561,`div`,29)(562,`span`,30),vN(563,` (p-on-disabled)`),Kc(564,`br`),ug()()(),Ac(565,`td`,22)(566,`code`,31),vN(567,`EventEmitter`),ug()(),Ac(568,`td`,24),vN(569,`-`),ug(),Ac(570,`td`,25)(571,`em`)(572,`strong`),vN(573,`(opcional)`),ug()(),Ac(574,`p`),vN(575,`Evento disparado quando a propriedade `),Ac(576,`code`),vN(577,`p-disabled`),ug(),vN(578,` for alterada.`),ug()()(),Ac(579,`tr`,18)(580,`td`,19)(581,`div`,20)(582,`span`,21),vN(583,` p-primary`),Kc(584,`br`),ug()()(),Ac(585,`td`,22)(586,`code`,33),vN(587,`boolean`),ug()(),Ac(588,`td`,24)(589,`p`)(590,`code`),vN(591,`false`),ug()()(),Ac(592,`td`,25)(593,`em`)(594,`strong`),vN(595,`(opcional)`),ug()(),Ac(596,`p`),vN(597,`Opção para que o `),Ac(598,`code`),vN(599,`po-widget`),ug(),vN(600,` fique em destaque.`),ug()()(),Ac(601,`tr`,18)(602,`td`,19)(603,`div`,29)(604,`span`,30),vN(605,` (p-primary-action)`),Kc(606,`br`),ug()()(),Ac(607,`td`,22)(608,`code`,31),vN(609,`EventEmitter`),ug()(),Ac(610,`td`,24),vN(611,`-`),ug(),Ac(612,`td`,25)(613,`em`)(614,`strong`),vN(615,`(opcional)`),ug()(),Ac(616,`p`),vN(617,`Evento disparado ao clicar na ação `),Ac(618,`code`),vN(619,`p-primary-label`),ug(),vN(620,`.`),ug()()(),Ac(621,`tr`,18)(622,`td`,19)(623,`div`,20)(624,`span`,21),vN(625,` p-primary-label`),Kc(626,`br`),ug()()(),Ac(627,`td`,22)(628,`code`,28),vN(629,`string`),ug()(),Ac(630,`td`,24),vN(631,`-`),ug(),Ac(632,`td`,25)(633,`em`)(634,`strong`),vN(635,`(opcional)`),ug()(),Ac(636,`p`),vN(637,`Define o label e exibe a ação primária no footer do componente.`),ug()()(),Ac(638,`tr`,18)(639,`td`,19)(640,`div`,29)(641,`span`,30),vN(642,` (p-secondary-action)`),Kc(643,`br`),ug()()(),Ac(644,`td`,22)(645,`code`,31),vN(646,`EventEmitter`),ug()(),Ac(647,`td`,24),vN(648,`-`),ug(),Ac(649,`td`,25)(650,`em`)(651,`strong`),vN(652,`(opcional)`),ug()(),Ac(653,`p`),vN(654,`Evento disparado ao clicar na ação `),Ac(655,`code`),vN(656,`p-secondary-label`),ug(),vN(657,`.`),ug()()(),Ac(658,`tr`,18)(659,`td`,19)(660,`div`,20)(661,`span`,21),vN(662,` p-secondary-label`),Kc(663,`br`),ug()()(),Ac(664,`td`,22)(665,`code`,28),vN(666,`string`),ug()(),Ac(667,`td`,24),vN(668,`-`),ug(),Ac(669,`td`,25)(670,`em`)(671,`strong`),vN(672,`(opcional)`),ug()(),Ac(673,`p`),vN(674,`Define o label e exibe a ação secundária no footer do componente.`),ug(),Ac(675,`blockquote`)(676,`p`),vN(677,`Exibida apenas quando `),Ac(678,`code`),vN(679,`p-primary-label`),ug(),vN(680,` estiver definida.`),ug()()()(),Ac(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),vN(685,` p-selection`),Kc(686,`br`),ug()()(),Ac(687,`td`,22)(688,`code`,35),vN(689,`PoWidgetSelection`),ug()(),Ac(690,`td`,24),vN(691,`-`),ug(),Ac(692,`td`,25)(693,`p`),vN(694,`Uso `),Ac(695,`strong`),vN(696,`interno`),ug(),vN(697,` do `),Ac(698,`code`),vN(699,`po-list-view`),ug(),vN(700,`. Habilita e configura a coluna de sele\xE7\xE3o
(checkbox/radio) \xE0 esquerda do conte\xFAdo.`),ug()()(),Ac(701,`tr`,18)(702,`td`,19)(703,`div`,29)(704,`span`,30),vN(705,` (p-setting)`),Kc(706,`br`),ug()()(),Ac(707,`td`,22)(708,`code`,31),vN(709,`EventEmitter`),ug()(),Ac(710,`td`,24),vN(711,`-`),ug(),Ac(712,`td`,25)(713,`em`)(714,`strong`),vN(715,`(opcional)`),ug()(),Ac(716,`p`),vN(717,`Evento disparado ao clicar em `),Ac(718,`strong`),vN(719,`Configurações`),ug(),vN(720,` incluído no menu de ações do header.`),ug()()(),Ac(721,`tr`,18)(722,`td`,19)(723,`div`,20)(724,`span`,21),vN(725,` p-size`),Kc(726,`br`),ug()()(),Ac(727,`td`,22)(728,`code`,28),vN(729,`string`),ug()(),Ac(730,`td`,24)(731,`p`)(732,`code`),vN(733,`medium`),ug()()(),Ac(734,`td`,25)(735,`em`)(736,`strong`),vN(737,`(opcional)`),ug()(),Ac(738,`p`),vN(739,`Define o tamanho dos botões do componente:`),ug(),Ac(740,`ul`)(741,`li`)(742,`code`),vN(743,`small`),ug(),vN(744,`: altura de 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(745,`li`)(746,`code`),vN(747,`medium`),ug(),vN(748,`: altura de 44px.`),ug()(),Ac(749,`blockquote`)(750,`p`),vN(751,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(752,`code`),vN(753,`medium`),ug(),vN(754,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(755,`a`,36),vN(756,`po-theme`),ug(),vN(757,`.`),ug()()()(),Ac(758,`tr`,18)(759,`td`,19)(760,`div`,20)(761,`span`,21),vN(762,` p-subtitle`),Kc(763,`br`),ug()()(),Ac(764,`td`,22)(765,`code`,28),vN(766,`string`),ug()(),Ac(767,`td`,24),vN(768,`-`),ug(),Ac(769,`td`,25)(770,`p`),vN(771,`Uso `),Ac(772,`strong`),vN(773,`interno`),ug(),vN(774,` do `),Ac(775,`code`),vN(776,`po-list-view`),ug(),vN(777,`. Define um subt\xEDtulo exibido no header,
abaixo do t\xEDtulo.`),ug()()(),Ac(778,`tr`,18)(779,`td`,19)(780,`div`,20)(781,`span`,21),vN(782,` p-tag-icon`),Kc(783,`br`),ug()()(),Ac(784,`td`,22)(785,`code`,28),vN(786,`string `),ug(),Ac(787,`code`,37),vN(788,` TemplateRef<void>`),ug()(),Ac(789,`td`,24),vN(790,`-`),ug(),Ac(791,`td`,25)(792,`em`)(793,`strong`),vN(794,`(opcional)`),ug()(),Ac(795,`p`),vN(796,`Define o ícone exibido ao lado do label da `),Ac(797,`code`),vN(798,`p-tag`),ug(),vN(799,`.`),ug(),Ac(800,`p`),vN(801,`É possível usar qualquer um dos ícones da `),Ac(802,`a`,38),vN(803,`Biblioteca de ícones PO UI`),ug(),vN(804,`, conforme exemplo:`),ug(),Ac(805,`pre`)(806,`code`),vN(807,`<po-widget p-tag-icon="an an-user"></po-widget>
`),ug()(),Ac(808,`p`),vN(809,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(810,`em`),vN(811,`Font Awesome`),ug(),vN(812,`, desde que a biblioteca
esteja carregada no projeto:`),ug(),Ac(813,`pre`)(814,`code`),vN(815,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),ug()(),Ac(816,`p`),vN(817,`Outra opção seria a customização do ícone através do `),Ac(818,`code`),vN(819,`TemplateRef`),ug(),vN(820,`, conforme exemplo abaixo:`),ug(),Ac(821,`pre`)(822,`code`),vN(823,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ug()(),Ac(824,`blockquote`)(825,`p`),vN(826,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(827,`code`),vN(828,`font-size: inherit`),ug(),vN(829,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(830,`tr`,18)(831,`td`,19)(832,`div`,20)(833,`span`,21),vN(834,` p-tag`),Kc(835,`br`),ug()()(),Ac(836,`td`,22)(837,`code`,28),vN(838,`string`),ug()(),Ac(839,`td`,24),vN(840,`-`),ug(),Ac(841,`td`,25)(842,`em`)(843,`strong`),vN(844,`(opcional)`),ug()(),Ac(845,`p`),vN(846,`Label da tag exibida no header.`),ug(),Ac(847,`blockquote`)(848,`p`),vN(849,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ug()()()(),Ac(850,`tr`,18)(851,`td`,19)(852,`div`,20)(853,`span`,21),vN(854,` p-tag-position`),Kc(855,`br`),ug()()(),Ac(856,`td`,22)(857,`code`,28),vN(858,`string`),ug()(),Ac(859,`td`,24)(860,`p`)(861,`code`),vN(862,`right`),ug()()(),Ac(863,`td`,25)(864,`em`)(865,`strong`),vN(866,`(opcional)`),ug()(),Ac(867,`p`),vN(868,`Define o posicionamento da `),Ac(869,`code`),vN(870,`po-tag`),ug(),vN(871,` no cabeçalho do Widget:`),ug(),Ac(872,`ul`)(873,`li`)(874,`code`),vN(875,`right`),ug(),vN(876,`: posicionada no canto superior direito do cabeçalho.`),ug(),Ac(877,`li`)(878,`code`),vN(879,`top`),ug(),vN(880,`: posicionada à esquerda, acima do título (quando houver).`),ug(),Ac(881,`li`)(882,`code`),vN(883,`bottom`),ug(),vN(884,`: posicionada à esquerda, abaixo do título (quando houver).`),ug()()()(),Ac(885,`tr`,18)(886,`td`,19)(887,`div`,20)(888,`span`,21),vN(889,` p-tag-type`),Kc(890,`br`),ug()()(),Ac(891,`td`,22)(892,`code`,39),vN(893,`PoTagType `),ug(),Ac(894,`code`,28),vN(895,` string`),ug()(),Ac(896,`td`,24)(897,`p`)(898,`code`),vN(899,`success`),ug()()(),Ac(900,`td`,25)(901,`em`)(902,`strong`),vN(903,`(opcional)`),ug()(),Ac(904,`p`),vN(905,`Define o tipo da `),Ac(906,`code`),vN(907,`p-tag`),ug(),vN(908,`, conforme o enum `),Ac(909,`strong`),vN(910,`PoTagType`),ug(),vN(911,`.`),ug(),Ac(912,`p`),vN(913,`Valores válidos:`),ug(),Ac(914,`ul`)(915,`li`)(916,`code`),vN(917,`success`),ug(),vN(918,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ug(),Ac(919,`li`)(920,`code`),vN(921,`warning`),ug(),vN(922,`: cor amarela que representa aviso ou advertência.`),ug(),Ac(923,`li`)(924,`code`),vN(925,`danger`),ug(),vN(926,`: cor vermelha para erro ou aviso crítico.`),ug(),Ac(927,`li`)(928,`code`),vN(929,`info`),ug(),vN(930,`: cor azul claro que caracteriza conteúdo informativo.`),ug(),Ac(931,`li`)(932,`code`),vN(933,`neutral`),ug(),vN(934,`: cor cinza claro para uso geral.`),ug()()()(),Ac(935,`tr`,18)(936,`td`,19)(937,`div`,20)(938,`span`,21),vN(939,` p-title`),Kc(940,`br`),ug()()(),Ac(941,`td`,22)(942,`code`,28),vN(943,`string`),ug()(),Ac(944,`td`,24),vN(945,`-`),ug(),Ac(946,`td`,25)(947,`em`)(948,`strong`),vN(949,`(opcional)`),ug()(),Ac(950,`p`),vN(951,`Título do componente.`),ug(),Ac(952,`blockquote`)(953,`p`),vN(954,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ug()()()(),Ac(955,`tr`,18)(956,`td`,19)(957,`div`,29)(958,`span`,30),vN(959,` (p-title-action)`),Kc(960,`br`),ug()()(),Ac(961,`td`,22)(962,`code`,31),vN(963,`EventEmitter`),ug()(),Ac(964,`td`,24),vN(965,`-`),ug(),Ac(966,`td`,25)(967,`em`)(968,`strong`),vN(969,`(opcional)`),ug()(),Ac(970,`p`),vN(971,`Evento disparado ao clicar no título definido em `),Ac(972,`code`),vN(973,`p-title`),ug(),vN(974,`.`),ug()()()(),Ac(975,`h3`),vN(976,`Interfaces`),ug(),Ac(977,`h4`,40)(978,`code`,5),vN(979,`PoPopupAction`),ug()(),Ac(980,`div`,2)(981,`p`),vN(982,`Interface para lista de ações do componente.`),ug()(),Ac(983,`h4`,14),vN(984,`Propriedades`),ug(),Ac(985,`table`,15)(986,`tr`,16)(987,`th`,17),vN(988,`Nome`),ug(),Ac(989,`th`,17),vN(990,`Tipo`),ug(),Ac(991,`th`,17),vN(992,`Descrição`),ug()(),Ac(993,`tr`,18)(994,`td`,19)(995,`div`,20)(996,`span`,21),vN(997,` action`),Kc(998,`br`),ug()()(),Ac(999,`td`,22)(1e3,`code`,41),vN(1001,`Function`),ug()(),Ac(1002,`td`,25)(1003,`em`)(1004,`strong`),vN(1005,`(opcional)`),ug()(),Ac(1006,`p`),vN(1007,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(1008,`p`),vN(1009,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(1010,`code`),vN(1011,`subItems`),ug(),vN(1012,`.`),ug(),Ac(1013,`blockquote`)(1014,`p`),vN(1015,`Para que a função seja executada no contexto do componente, utilize `),Ac(1016,`em`),vN(1017,`bind`),ug(),vN(1018,`:
`),Ac(1019,`code`),vN(1020,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(1021,`tr`,18)(1022,`td`,19)(1023,`div`,20)(1024,`span`,21),vN(1025,` disabled`),Kc(1026,`br`),ug()()(),Ac(1027,`td`,22)(1028,`code`,33),vN(1029,`boolean `),ug(),Ac(1030,`code`,41),vN(1031,` Function`),ug()(),Ac(1032,`td`,25)(1033,`em`)(1034,`strong`),vN(1035,`(opcional)`),ug()(),Ac(1036,`p`),vN(1037,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),vN(1042,` icon`),Kc(1043,`br`),ug()()(),Ac(1044,`td`,22)(1045,`code`,28),vN(1046,`string `),ug(),Ac(1047,`code`,37),vN(1048,` TemplateRef<void>`),ug()(),Ac(1049,`td`,25)(1050,`em`)(1051,`strong`),vN(1052,`(opcional)`),ug()(),Ac(1053,`p`),vN(1054,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(1055,`p`),vN(1056,`Aceita ícones da `),Ac(1057,`a`,38),vN(1058,`Biblioteca de ícones`),ug(),vN(1059,`, fontes externas (ex: Font Awesome)
ou um `),Ac(1060,`code`),vN(1061,`TemplateRef`),ug(),vN(1062,` para ícones customizados.`),ug(),Ac(1063,`pre`)(1064,`code`),vN(1065,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(1066,`tr`,18)(1067,`td`,19)(1068,`div`,20)(1069,`span`,21),vN(1070,` label`),Kc(1071,`br`),ug()()(),Ac(1072,`td`,22)(1073,`code`,28),vN(1074,`string`),ug()(),Ac(1075,`td`,25)(1076,`p`),vN(1077,`Rótulo da ação.`),ug(),Ac(1078,`p`),vN(1079,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(1080,`code`),vN(1081,`subItems`),ug(),vN(1082,`.`),ug()()(),Ac(1083,`tr`,18)(1084,`td`,19)(1085,`div`,20)(1086,`span`,21),vN(1087,` selected`),Kc(1088,`br`),ug()()(),Ac(1089,`td`,22)(1090,`code`,33),vN(1091,`boolean`),ug()(),Ac(1092,`td`,25)(1093,`em`)(1094,`strong`),vN(1095,`(opcional)`),ug()(),Ac(1096,`p`),vN(1097,`Define se a ação está selecionada.`),ug()()(),Ac(1098,`tr`,18)(1099,`td`,19)(1100,`div`,20)(1101,`span`,21),vN(1102,` separator`),Kc(1103,`br`),ug()()(),Ac(1104,`td`,22)(1105,`code`,33),vN(1106,`boolean`),ug()(),Ac(1107,`td`,25)(1108,`em`)(1109,`strong`),vN(1110,`(opcional)`),ug()(),Ac(1111,`p`),vN(1112,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(1113,`tr`,18)(1114,`td`,19)(1115,`div`,20)(1116,`span`,21),vN(1117,` subItems`),Kc(1118,`br`),ug()()(),Ac(1119,`td`,22)(1120,`code`,26),vN(1121,`Array<PoPopupAction>`),ug()(),Ac(1122,`td`,25)(1123,`em`)(1124,`strong`),vN(1125,`(opcional)`),ug()(),Ac(1126,`p`),vN(1127,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(1128,`p`),vN(1129,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(1130,`blockquote`)(1131,`p`),vN(1132,`As propriedades `),Ac(1133,`code`),vN(1134,`disabled`),ug(),vN(1135,`, `),Ac(1136,`code`),vN(1137,`type`),ug(),vN(1138,` e `),Ac(1139,`code`),vN(1140,`visible`),ug(),vN(1141,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(1142,`blockquote`)(1143,`p`),vN(1144,`Quando `),Ac(1145,`code`),vN(1146,`url`),ug(),vN(1147,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(1148,`blockquote`)(1149,`p`),vN(1150,`Em subníveis aninhados, o `),Ac(1151,`code`),vN(1152,`icon`),ug(),vN(1153,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(1154,`tr`,18)(1155,`td`,19)(1156,`div`,20)(1157,`span`,21),vN(1158,` type`),Kc(1159,`br`),ug()()(),Ac(1160,`td`,22)(1161,`code`,28),vN(1162,`string`),ug()(),Ac(1163,`td`,25)(1164,`em`)(1165,`strong`),vN(1166,`(opcional)`),ug()(),Ac(1167,`p`),vN(1168,`Define a cor do item.`),ug(),Ac(1169,`p`),vN(1170,`Valores válidos:`),ug(),Ac(1171,`ul`)(1172,`li`)(1173,`code`),vN(1174,`default`),ug()(),Ac(1175,`li`)(1176,`code`),vN(1177,`danger`),ug()()()()(),Ac(1178,`tr`,18)(1179,`td`,19)(1180,`div`,20)(1181,`span`,21),vN(1182,` url`),Kc(1183,`br`),ug()()(),Ac(1184,`td`,22)(1185,`code`,28),vN(1186,`string`),ug()(),Ac(1187,`td`,25)(1188,`em`)(1189,`strong`),vN(1190,`(opcional)`),ug()(),Ac(1191,`p`),vN(1192,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(1193,`p`),vN(1194,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(1195,`code`),vN(1196,`url`),ug(),vN(1197,` é informada em um agrupador, o clique `),Ac(1198,`strong`),vN(1199,`não abrirá os subitens`),ug(),vN(1200,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(1201,`blockquote`)(1202,`p`),vN(1203,`Quando informada, tem prioridade sobre a propriedade `),Ac(1204,`code`),vN(1205,`action`),ug(),vN(1206,`.`),ug()()()(),Ac(1207,`tr`,18)(1208,`td`,19)(1209,`div`,20)(1210,`span`,21),vN(1211,` visible`),Kc(1212,`br`),ug()()(),Ac(1213,`td`,22)(1214,`code`,33),vN(1215,`boolean `),ug(),Ac(1216,`code`,41),vN(1217,` Function`),ug()(),Ac(1218,`td`,25)(1219,`em`)(1220,`strong`),vN(1221,`(opcional)`),ug()(),Ac(1222,`p`),vN(1223,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(1224,`h4`,40)(1225,`code`,5),vN(1226,`PoWidgetAvatar`),ug()(),Ac(1227,`div`,2)(1228,`p`),vN(1229,`Interface para definição do avatar no `),Ac(1230,`code`),vN(1231,`po-widget`),ug(),vN(1232,`.`),ug()(),Ac(1233,`h4`,14),vN(1234,`Propriedades`),ug(),Ac(1235,`table`,15)(1236,`tr`,16)(1237,`th`,17),vN(1238,`Nome`),ug(),Ac(1239,`th`,17),vN(1240,`Tipo`),ug(),Ac(1241,`th`,17),vN(1242,`Descrição`),ug()(),Ac(1243,`tr`,18)(1244,`td`,19)(1245,`div`,20)(1246,`span`,21),vN(1247,` customTemplate`),Kc(1248,`br`),ug()()(),Ac(1249,`td`,22)(1250,`code`,23),vN(1251,`TemplateRef<any>`),ug()(),Ac(1252,`td`,25)(1253,`em`)(1254,`strong`),vN(1255,`(opcional)`),ug()(),Ac(1256,`p`),vN(1257,`Permite a criação de template customizado para o avatar`),ug(),Ac(1258,`pre`)(1259,`code`),vN(1260,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),ug()()()(),Ac(1261,`tr`,18)(1262,`td`,19)(1263,`div`,20)(1264,`span`,21),vN(1265,` size`),Kc(1266,`br`),ug()()(),Ac(1267,`td`,22)(1268,`code`,28),vN(1269,`string`),ug()(),Ac(1270,`td`,25)(1271,`em`)(1272,`strong`),vN(1273,`(opcional)`),ug()(),Ac(1274,`p`),vN(1275,`Tamanho de exibição do componente `),Ac(1276,`code`),vN(1277,`po-avatar`),ug(),vN(1278,`.`),ug(),Ac(1279,`p`),vN(1280,`Valores válidos:`),ug(),Ac(1281,`ul`)(1282,`li`)(1283,`code`),vN(1284,`xs`),ug(),vN(1285,` (24x24)`),ug(),Ac(1286,`li`)(1287,`code`),vN(1288,`sm`),ug(),vN(1289,` (32x32)`),ug(),Ac(1290,`li`)(1291,`code`),vN(1292,`md`),ug(),vN(1293,` (64x64)`),ug(),Ac(1294,`li`)(1295,`code`),vN(1296,`lg`),ug(),vN(1297,` (96x96)`),ug(),Ac(1298,`li`)(1299,`code`),vN(1300,`xl`),ug(),vN(1301,` (144x144)`),ug()()()(),Ac(1302,`tr`,18)(1303,`td`,19)(1304,`div`,20)(1305,`span`,21),vN(1306,` src`),Kc(1307,`br`),ug()()(),Ac(1308,`td`,22)(1309,`code`,28),vN(1310,`string`),ug()(),Ac(1311,`td`,25)(1312,`em`)(1313,`strong`),vN(1314,`(opcional)`),ug()(),Ac(1315,`p`),vN(1316,`Fonte da imagem que pode ser um caminho local (`),Ac(1317,`code`),vN(1318,`./assets/images/logo-black-small.png`),ug(),vN(1319,`)
ou um servidor externo (`),Ac(1320,`code`),vN(1321,`https://po-ui.io/assets/images/logo-black-small.png`),ug(),vN(1322,`).`),ug()()(),Ac(1323,`tr`,18)(1324,`td`,19)(1325,`div`,20)(1326,`span`,21),vN(1327,` widthCustomTemplate`),Kc(1328,`br`),ug()()(),Ac(1329,`td`,22)(1330,`code`,28),vN(1331,`string`),ug()(),Ac(1332,`td`,25)(1333,`em`)(1334,`strong`),vN(1335,`(opcional)`),ug()(),Ac(1336,`p`),vN(1337,`Define a largura em porcentagem do `),Ac(1338,`code`),vN(1339,`customTemplate`),ug(),vN(1340,`.`),ug(),Ac(1341,`p`),vN(1342,`O valor máximo aceito é `),Ac(1343,`code`),vN(1344,`50%`),ug(),vN(1345,`.`),ug()()()(),Ac(1346,`h3`),vN(1347,`Enums`),ug(),Ac(1348,`h4`,4)(1349,`code`,5),vN(1350,`PoButtonKind`),ug()(),Ac(1351,`div`,2)(1352,`p`),vN(1353,`Estilos disponíveis do button.`),ug()(),Ac(1354,`h4`,14),vN(1355,`Propriedades`),ug(),Ac(1356,`table`,15)(1357,`tr`,16)(1358,`th`,17),vN(1359,`Nome`),ug(),Ac(1360,`th`,17),vN(1361,`Descrição`),ug()(),Ac(1362,`tr`,18)(1363,`td`,19)(1364,`div`,20)(1365,`span`,21),vN(1366,` primary`),Kc(1367,`br`),ug()()(),Ac(1368,`td`,25)(1369,`p`),vN(1370,`Estilo primário, usado para ações principais que requerem maior destaque.`),ug()()(),Ac(1371,`tr`,18)(1372,`td`,19)(1373,`div`,20)(1374,`span`,21),vN(1375,` secondary`),Kc(1376,`br`),ug()()(),Ac(1377,`td`,25)(1378,`p`),vN(1379,`Estilo secundário, usado como padrão, para ações comuns.`),ug()()(),Ac(1380,`tr`,18)(1381,`td`,19)(1382,`div`,20)(1383,`span`,21),vN(1384,` tertiary`),Kc(1385,`br`),ug()()(),Ac(1386,`td`,25)(1387,`p`),vN(1388,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-widget-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-widget-basic-view`)(6,`sample-po-widget-labs-view`)(7,`sample-po-widget-finance-dashboard-view`)(8,`sample-po-widget-card-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,ye,we,_e,Te,Me],encapsulation:2,changeDetection:1})}return o})()}];var We=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(tt),kL]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,We]})}return o})();export{Ot as DocPoWidgetModule};