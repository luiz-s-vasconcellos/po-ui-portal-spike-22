import{$i as ow,$r as Vx,Br as TN,Cr as Nx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Vi as kk,Wn as BN,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,dn as oU,ea as p0,ft as P8e,ga as w,gi as bw,kn as vr,l as ar,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f,xa as xx,xn as sP}from"./main-NT5YGKBQ.js";var fe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&ql(0,`po-widget`)},dependencies:[$8e],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Widget Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-widget-basic/sample-po-widget-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-widget></po-widget>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-widget-basic/sample-po-widget-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-widget-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Le,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return o})();var qe=(o,k)=>({src:o,size:k});var Ce=(()=>{class o{poNotification=f(Eu);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:``};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`primaryWidget`,label:`Primary Widget`},{value:`small`,label:`small`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];listTagPosition=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];listAvatarSize=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`},{label:`xl`,value:`xl`}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:``}}restore(){this.background=``,this.action=``,this.content=``,this.height=void 0,this.help=``,this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:``},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-labs`]],standalone:!1,decls:32,vars:39,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-on-disabled`,`p-primary-action`,`p-secondary-action`,`p-setting`,`p-title-action`,`p-background`,`p-disabled`,`p-size`,`p-height`,`p-help`,`p-primary`,`p-primary-label`,`p-secondary-label`,`p-tag`,`p-tag-icon`,`p-tag-position`,`p-title`,`p-actions`,`p-avatar`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`background`,`p-clean`,``,`p-help`,`Ex.: 'http://image.com'; '../../image.png'`,`p-label`,`Background`,`p-clean`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`primaryLabel`,`p-label`,`Primary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLabel`,`p-label`,`Secondary Label`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`sample-widget-align-end`],[`name`,`tagLabel`,`p-label`,`Label Tag`,`p-clean`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag Position`,1,`po-md-4`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarSrc`,`p-label`,`Avatar Src`,`p-help`,`https://picsum.photos/144/144`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatarSize`,`p-label`,`Avatar Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`3`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let m=Vx();Ml(0,`div`,1)(1,`po-widget`,2),ht(`p-on-disabled`,function(){return i.changeAction(`p-on-disabled`)})(`p-primary-action`,function(){return i.changeAction(`p-primary-action`)})(`p-secondary-action`,function(){return i.changeAction(`p-secondary-action`)})(`p-setting`,function(){return i.changeAction(`p-setting`)})(`p-title-action`,function(){return i.changeAction(`p-title-action`)}),mN(2),lg()(),ql(3,`po-divider`),Ml(4,`div`,1),ql(5,`po-info`,3),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.title,r)||(i.title=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.help,r)||(i.help=r),Jy(r)}),lg(),f0(),Ml(11,`po-number`,6),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.height,r)||(i.height=r),Jy(r)}),lg(),f0(),Ml(12,`div`,1)(13,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.actionPopup.action,r)||(i.actionPopup.action=r),Jy(r)}),lg(),f0(),Ml(14,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.actionPopup.label,r)||(i.actionPopup.label=r),Jy(r)}),lg(),f0(),lg(),Ml(15,`div`,1)(16,`po-button`,9),ht(`p-click`,function(){return i.addAction(i.actionPopup)}),lg()(),Ml(17,`po-input`,10),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.background,r)||(i.background=r),Jy(r)}),lg(),f0(),Ml(18,`po-input`,11),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.primaryLabel,r)||(i.primaryLabel=r),Jy(r)}),lg(),f0(),Ml(19,`po-input`,12),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.secondaryLabel,r)||(i.secondaryLabel=r),Jy(r)}),lg(),f0(),Ml(20,`div`,13)(21,`po-input`,14),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.tagLabel,r)||(i.tagLabel=r),Jy(r)}),lg(),f0(),Ml(22,`po-select`,15),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.tagIcon,r)||(i.tagIcon=r),Jy(r)}),lg(),f0(),Ml(23,`po-select`,16),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.tagPosition,r)||(i.tagPosition=r),Jy(r)}),lg(),f0(),lg(),Ml(24,`div`,1)(25,`po-input`,17),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.avatarSrc,r)||(i.avatarSrc=r),Jy(r)}),lg(),f0(),Ml(26,`po-select`,18),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.avatarSize,r)||(i.avatarSize=r),Jy(r)}),lg(),f0(),lg(),Ml(27,`div`,1)(28,`po-checkbox-group`,19),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.properties,r)||(i.properties=r),Jy(r)}),lg(),f0(),lg(),Ml(29,`po-textarea`,20),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.content,r)||(i.content=r),Jy(r)}),lg(),f0(),Ml(30,`div`,1)(31,`po-button`,21),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Up(),cw(`p-background`,i.background)(`p-disabled`,i.properties.includes(`disabled`))(`p-size`,i.properties.includes(`small`)?`small`:`medium`)(`p-height`,i.height)(`p-help`,i.help)(`p-primary`,i.properties.includes(`primaryWidget`))(`p-primary-label`,i.primaryLabel)(`p-secondary-label`,i.secondaryLabel)(`p-tag`,i.tagLabel)(`p-tag-icon`,i.tagIcon)(`p-tag-position`,i.tagPosition)(`p-title`,i.title)(`p-actions`,i.myActions)(`p-avatar`,RN(36,qe,i.avatarSrc,i.avatarSize)),Up(),gg(` `,i.content,` `),Up(3),cw(`p-value`,i.action),Up(4),Tw(`ngModel`,i.title),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.height),p0(),Up(2),Tw(`ngModel`,i.actionPopup.action),p0(),Up(),Tw(`ngModel`,i.actionPopup.label),p0(),Up(2),cw(`p-disabled`,!i.actionPopup.action||!i.actionPopup.label),Up(),Tw(`ngModel`,i.background),p0(),Up(),Tw(`ngModel`,i.primaryLabel),p0(),Up(),Tw(`ngModel`,i.secondaryLabel),p0(),Up(2),Tw(`ngModel`,i.tagLabel),p0(),Up(),Tw(`ngModel`,i.tagIcon),cw(`p-options`,i.iconList),p0(),Up(),Tw(`ngModel`,i.tagPosition),cw(`p-options`,i.listTagPosition),p0(),Up(2),Tw(`ngModel`,i.avatarSrc),p0(),Up(),Tw(`ngModel`,i.avatarSize),cw(`p-options`,i.listAvatarSize),p0(),Up(2),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.content),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,Tbe,Pbe,kbe,$8e],styles:[`.sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Widget Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-widget-labs/sample-po-widget-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-widget-labs/sample-po-widget-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-widget-labs/sample-po-widget-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-widget-labs`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return o})();var Ie=[`detailsModal`];var Pe=(()=>{class o{poNotification=f(Eu);detailsModalElement;paymentLink=`https://www.google.com.br/search?q=days+to+payment`;itemsDetails;titleDetailsModal;typeChart=`line`;myActions=[{label:`Detail`,icon:`an an-align-top`,action:this.showAction.bind(this)},{label:`Remove`,icon:`an an-trash`,type:`danger`,action:this.showAction.bind(this)}];options=[{value:`poMultiselect1`,label:`Admin`},{value:`poMultiselect2`,label:`User`}];columnsDetails=[{property:`dateUpdate`,label:`Date update`,type:`date`},{property:`statement`,label:`Statement`,type:`currency`}];itemsAccountDetails=[{dateUpdate:`03-05-2018`,statement:`-56.45`},{dateUpdate:`02-05-2018`,statement:`-14.99`},{dateUpdate:`02-05-2018`,statement:`-657.56`},{dateUpdate:`12-05-2017`,statement:`3547.29`}];itemsSavingsDetails=[{dateUpdate:`03-05-2018`,statement:`-300`},{dateUpdate:`03-05-2018`,statement:`2000`},{dateUpdate:`02-05-2018`,statement:`1500`},{dateUpdate:`02-05-2018`,statement:`-200`},{dateUpdate:`12-05-2017`,statement:`2000`}];openModal(p){switch(p){case`savings`:this.titleDetailsModal=`Revenue - Details`,this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case`account`:this.titleDetailsModal=`Total savings - Details`,this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,`_blank`)}showAction(){this.poNotification.success(`Action clicked`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-finance-dashboard`]],viewQuery:function(l,i){if(l&1&&Zl(Ie,7),l&2){let m;lo(m=uo())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[[`detailsModal`,``],[1,`po-row`,`sample-finance-row-gap`],[`p-help`,`https://github.com/po-ui/po-angular/stargazers`,`p-title`,`Days to Payment`,`p-tag`,`Sales`,`p-tag-icon`,`an an-arrow-circle-up`,1,`po-lg-6`,3,`p-height`],[1,`sample-finance-actions`],[`p-label`,`Cancel`,`p-danger`,``],[`p-label`,`Confirm`,3,`p-click`],[`p-title`,`Total savings`,1,`po-lg-3`,3,`p-click`,`p-height`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`],[`p-disabled`,``,`p-primary-label`,`Details`,`p-secondary-label`,`Edit`,`p-title`,`Total checking account`,1,`po-lg-3`,3,`p-primary-action`,`p-height`],[1,`po-text-center`,`sample-finance-total-value`],[`p-background`,`../../../assets/graphics/sales-statistics.png`,1,`po-lg-4`,3,`p-height`],[1,`po-text-center`,`sample-finance-padding-inline`],[1,`sample-finance-overlay-badge`],[1,`sample-finance-overlay-text`],[1,`sample-finance-padding-inline`],[`name`,`multiselect`,3,`p-options`],[`p-title`,`Most used payment type`,1,`po-lg-4`,3,`p-actions`,`p-height`],[`p-primary-label`,`Details`,`p-tag`,`Revenue`,`p-tag-icon`,`an an-money`,`p-title`,`Highest revenue in the month considering Marketing and Sales`,1,`po-lg-4`,3,`p-primary-action`,`p-height`,`p-primary`],[3,`p-title`],[3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){l&1&&(Ml(0,`div`,1)(1,`div`,1)(2,`po-widget`,2)(3,`div`),mN(4,`Sales order`),lg(),Ml(5,`div`),mN(6,`Scheduled to: `),Ml(7,`strong`),mN(8,`05/04/2018`),lg()(),Ml(9,`div`,3),ql(10,`po-button`,4),Ml(11,`po-button`,5),ht(`p-click`,function(){return i.openExternalLink(`https://github.com/po-ui/po-angular/stargazers`)}),lg()()(),Ml(12,`po-widget`,6),ht(`p-click`,function(){return i.openModal(`account`)}),Ml(13,`div`,7),mN(14,`$2.818,29`),lg(),Ml(15,`div`,8),mN(16,`Last updated at 18:34`),lg()(),Ml(17,`po-widget`,9),ht(`p-primary-action`,function(){return i.openModal(`account`)}),Ml(18,`div`,10),mN(19,`$5.000,00`),lg(),Ml(20,`div`,8),mN(21,`Last updated at 08:20`),lg()()(),Ml(22,`div`,1)(23,`po-widget`,11)(24,`div`,12)(25,`div`,13)(26,`strong`,14),mN(27,`Enter the user routine`),lg()()(),Ml(28,`div`,15),ql(29,`po-multiselect`,16),lg()(),Ml(30,`po-widget`,17)(31,`div`,7),mN(32,`Credit card`),lg(),Ml(33,`div`,8),mN(34,`MasterCard - 5500 0000 0000 0004`),lg()(),Ml(35,`po-widget`,18),ht(`p-primary-action`,function(){return i.openModal(`savings`)}),Ml(36,`div`,7),mN(37,`$2.000,00`),lg(),Ml(38,`div`,8),mN(39,`05/03/2018`),lg()()()(),Ml(40,`po-modal`,19,0),ql(42,`po-table`,20),lg()),l&2&&(Up(2),cw(`p-height`,190),Up(10),cw(`p-height`,190),Up(5),cw(`p-height`,190),Up(6),cw(`p-height`,180),Up(6),cw(`p-options`,i.options),Up(),cw(`p-actions`,i.myActions)(`p-height`,180),Up(5),cw(`p-height`,180)(`p-primary`,!0),Up(5),cw(`p-title`,i.titleDetailsModal),Up(2),cw(`p-columns`,i.columnsDetails)(`p-items`,i.itemsDetails)(`p-hide-table-search`,!1))},dependencies:[Zt,sP,vr,oU,$8e],styles:[`.sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}`],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-finance-dashboard-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Widget - Finance dashboard`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row sample-finance-row-gap">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-finance-row-gap {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-widget-finance-dashboard`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Pe],encapsulation:2,changeDetection:1})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:`40%`});var He=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0});var je=o=>({header:o});var Je=()=>({label:`Angular`,data:100});var Ge=()=>({label:`React`,data:10});var Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&ql(0,`po-chart`,8),o&2&&cw(`p-options`,MN(3,je,TN(2,He)))(`p-series`,RN(7,Qe,TN(5,Je),TN(6,Ge)))}function Xe(o,k){if(o&1&&(Ml(0,`li`),mN(1),lg()),o&2){let p=k.$implicit;Up(),bw(p)}}var De=(()=>{class o{poModal;help;label;technologies=[`Angular`,`Typescript`,`React`,`Babel`,`Jasmine`,`Vue`];value;ngOnInit(){this.showAngular()}showAngular(){this.label=`Angular`,this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help=`https://angular.io/`}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label=`Typescript`,this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help=`https://www.typescriptlang.org/`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-card`]],viewQuery:function(l,i){if(l&1&&Zl(vr,7),l&2){let m;lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[[`avatar`,``],[1,`po-row`],[`p-height`,`300`,`p-primary-label`,`Angular`,`p-secondary-label`,`Typescript`,`p-title`,`Javascript technologies`,1,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`,`p-title-action`,`p-help`],[3,`p-label`,`p-value`],[`p-title`,`Apps Enterprise`,`p-tag`,`Angular v17+`,`p-tag-position`,`top`,`p-height`,`300`,`p-help`,`https://angular.dev/`,1,`po-lg-6`,3,`p-avatar`],[1,`po-pl-3`,`po-pt-1`],[`p-title`,`Javascript Technologies`],[1,`po-ml-3`],[`p-height`,`260`,3,`p-options`,`p-series`]],template:function(l,i){if(l&1&&(Ml(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.showAngular()})(`p-secondary-action`,function(){return i.showTypescript()})(`p-title-action`,function(){return i.showJavascriptTechnologies()}),ql(2,`po-info`,3),lg(),Ml(3,`po-widget`,4)(4,`div`),mN(5,` Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. `),Ml(6,`div`,5)(7,`ul`)(8,`li`),mN(9,`Out-of-the-Box`),lg(),Ml(10,`li`),mN(11,`Standardized and Opinion-Based Architecture`),lg(),Ml(12,`li`),mN(13,`Next Generation Reactivity (Signals)`),lg(),Ml(14,`li`),mN(15,`Focus on Enterprise and Security`),lg()()()(),ow(16,Ke,1,10,`ng-template`,null,0,BN),lg()(),Ml(18,`po-modal`,6),mN(19,` There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: `),Ml(20,`div`,7)(21,`ul`),xx(22,Xe,2,1,`li`,null,Ax),lg()()()),l&2){let m=Yx(17);Up(),cw(`p-help`,i.help),Up(),cw(`p-label`,i.label)(`p-value`,i.value),Up(),cw(`p-avatar`,MN(4,Ue,m)),Up(19),Nx(i.technologies)}},dependencies:[P8e,kbe,vr,$8e],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Widget - Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-widget-card/sample-po-widget-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-widget-card/sample-po-widget-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-widget-card`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-widget-doc`]],standalone:!1,decls:1329,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/keyboard`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoWidgetAvatar`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`false`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoWidgetModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-widget`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoWidgetComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-widget`),lg(),mN(17,` é recomendado para exibição de `),Ml(18,`em`),mN(19,`dashboards`),lg(),mN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),lg(),Ml(21,`p`),mN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),lg(),Ml(23,`p`),mN(24,`Para controlar sua largura, é possível utilizar o `),Ml(25,`a`,6),mN(26,`Grid System`),lg(),mN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),lg(),Ml(28,`h4`),mN(29,`Boas práticas`),lg(),Ml(30,`p`),mN(31,`Utilize um tamanho mínimo de largura de aproximadamente `),Ml(32,`code`),mN(33,`18.75rem`),lg(),mN(34,` no componente.`),lg(),Ml(35,`h4`),mN(36,`Acessibilidade tratada no componente`),lg(),Ml(37,`p`),mN(38,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),lg(),Ml(39,`ul`)(40,`li`),mN(41,`Utiliza medidas relativas, para se adequar às preferências e necessidades de quem for utilizar o sistema.`),lg(),Ml(42,`li`),mN(43,`Desenvolvido com uso de controles padrões HTML, o que permite a identificação na interface por tecnologias assistivas. (WCAG `),Ml(44,`a`,7),mN(45,`4.1.2: Name, Role, Value`),lg(),mN(46,`)`),lg(),Ml(47,`li`),mN(48,`O foco é visível e possui uma espessura superior a 2 pixels CSS, não ficando escondido por outros elementos da tela. (WCAG `),Ml(49,`a`,8),mN(50,`2.4.12: Focus Appearance`),lg(),mN(51,`)`),lg(),Ml(52,`li`),mN(53,`Quando selecionável, prevê interação por teclado, podendo ser selecionado através da tecla space (WCAG `),Ml(54,`a`,9),mN(55,`2.4.1 - Keyboard`),lg(),mN(56,`)`),lg()(),Ml(57,`h4`),mN(58,`Tokens customizáveis`),lg(),Ml(59,`p`),mN(60,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(61,`blockquote`)(62,`p`),mN(63,`Para maiores informações, acesse o guia `),Ml(64,`a`,10),mN(65,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(66,`.`),lg()(),Ml(67,`table`)(68,`thead`)(69,`tr`)(70,`th`),mN(71,`Propriedade`),lg(),Ml(72,`th`),mN(73,`Descrição`),lg(),Ml(74,`th`),mN(75,`Valor Padrão`),lg()()(),Ml(76,`tbody`)(77,`tr`)(78,`td`)(79,`strong`),mN(80,`Default Values`),lg()(),ql(81,`td`)(82,`td`),lg(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--font-family`),lg()(),Ml(87,`td`),mN(88,`Família tipográfica usada`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--font-family-theme) `),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--font-size`),lg()(),Ml(96,`td`),mN(97,`Tamanho da fonte`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--font-size-sm)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--font-weight`),lg()(),Ml(105,`td`),mN(106,`Peso da fonte`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--font-weight-bold)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--font-color`),lg()(),Ml(114,`td`),mN(115,`Cor da fonte`),lg(),Ml(116,`td`)(117,`code`),mN(118,`var(--color-neutral-dark-95)`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--padding-header`),lg()(),Ml(123,`td`),mN(124,`Preenchimento do header`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--padding-body`),lg()(),Ml(132,`td`),mN(133,`Preenchimento do body`),lg(),Ml(134,`td`)(135,`code`),mN(136,`var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)`),lg()()(),Ml(137,`tr`)(138,`td`)(139,`code`),mN(140,`--padding-avatar`),lg()(),Ml(141,`td`),mN(142,`Preenchimento do avatar`),lg(),Ml(143,`td`)(144,`code`),mN(145,`var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)`),lg()()(),Ml(146,`tr`)(147,`td`)(148,`code`),mN(149,`--padding-footer`),lg()(),Ml(150,`td`),mN(151,`Preenchimento do footer`),lg(),Ml(152,`td`)(153,`code`),mN(154,`var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)`),lg()()(),Ml(155,`tr`)(156,`td`)(157,`code`),mN(158,`--border-radius`),lg()(),Ml(159,`td`),mN(160,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(161,`td`)(162,`code`),mN(163,`var(--border-radius-md)`),lg()()(),Ml(164,`tr`)(165,`td`)(166,`code`),mN(167,`--border-width`),lg()(),Ml(168,`td`),mN(169,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(170,`td`)(171,`code`),mN(172,`var(--border-width-sm)`),lg()()(),Ml(173,`tr`)(174,`td`)(175,`code`),mN(176,`--border-color`),lg()(),Ml(177,`td`),mN(178,`Cor da borda`),lg(),Ml(179,`td`)(180,`code`),mN(181,`var(--color-neutral-light-20)`),lg()()(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--background`),lg()(),Ml(186,`td`),mN(187,`Cor de background`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-neutral-light-00)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--shadow`),lg()(),Ml(195,`td`),mN(196,`Contém o valor da sombra do elemento`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--shadow-md)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Hover`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--border-color-hover`),lg()(),Ml(210,`td`),mN(211,`Cor da borda no estado hover`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-action-hover)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`strong`),mN(218,`Focused`),lg()(),ql(219,`td`)(220,`td`),lg(),Ml(221,`tr`)(222,`td`)(223,`code`),mN(224,`--color-focused`),lg()(),Ml(225,`td`),mN(226,`Cor principal no estado de focus`),lg(),Ml(227,`td`)(228,`code`),mN(229,`var(--color-action-default)`),lg()()(),Ml(230,`tr`)(231,`td`)(232,`code`),mN(233,`--outline-color-focused`),lg(),mN(234,` \xA0`),lg(),Ml(235,`td`),mN(236,`Cor do outline do estado de focus`),lg(),Ml(237,`td`)(238,`code`),mN(239,`var(--color-action-focus)`),lg()()()()()(),Ml(240,`div`,11)(241,`h4`,12),mN(242,`Seletor`),lg(),Ml(243,`pre`,13),mN(244,`<po-widget
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
`),lg()(),Ml(245,`h4`,14),mN(246,`Propriedades`),lg(),Ml(247,`table`,15)(248,`tr`,16)(249,`th`,17),mN(250,`Nome`),lg(),Ml(251,`th`,17),mN(252,`Tipo`),lg(),Ml(253,`th`,17),mN(254,`Padrão`),lg(),Ml(255,`th`,17),mN(256,`Descrição`),lg()(),Ml(257,`tr`,18)(258,`td`,19)(259,`div`,20)(260,`span`,21),mN(261,` p-actions`),ql(262,`br`),lg()()(),Ml(263,`td`,22)(264,`code`,23),mN(265,`Array<PoPopupAction>`),lg()(),Ml(266,`td`,24),mN(267,`-`),lg(),Ml(268,`td`,25)(269,`em`)(270,`strong`),mN(271,`(opcional)`),lg()(),Ml(272,`p`),mN(273,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Ml(274,`code`),mN(275,`PoPopupAction`),lg(),mN(276,`.`),lg()()(),Ml(277,`tr`,18)(278,`td`,19)(279,`div`,20)(280,`span`,21),mN(281,` p-avatar`),ql(282,`br`),lg()()(),Ml(283,`td`,22)(284,`code`,26),mN(285,`PoWidgetAvatar`),lg()(),Ml(286,`td`,24),mN(287,`-`),lg(),Ml(288,`td`,25)(289,`em`)(290,`strong`),mN(291,`(opcional)`),lg()(),Ml(292,`p`),mN(293,`Define o avatar a ser exibido à esquerda no Widget.`),lg()()(),Ml(294,`tr`,18)(295,`td`,19)(296,`div`,20)(297,`span`,21),mN(298,` p-background`),ql(299,`br`),lg()()(),Ml(300,`td`,22)(301,`code`,27),mN(302,`string`),lg()(),Ml(303,`td`,24),mN(304,`-`),lg(),Ml(305,`td`,25)(306,`em`)(307,`strong`),mN(308,`(opcional)`),lg()(),Ml(309,`p`),mN(310,`Define uma imagem de fundo.`),lg(),Ml(311,`blockquote`)(312,`p`),mN(313,`Se a imagem escolhida intervir na legibilidade do texto contido no `),Ml(314,`code`),mN(315,`p-widget`),lg(),mN(316,`,
pode-se utilizar a propriedade `),Ml(317,`code`),mN(318,`p-primary`),lg(),mN(319,` em conjunto para que os textos fiquem na cor branca.`),lg()()()(),Ml(320,`tr`,18)(321,`td`,19)(322,`div`,28)(323,`span`,29),mN(324,` (p-click)`),ql(325,`br`),lg()()(),Ml(326,`td`,22)(327,`code`,30),mN(328,`EventEmitter`),lg()(),Ml(329,`td`,24),mN(330,`-`),lg(),Ml(331,`td`,25)(332,`em`)(333,`strong`),mN(334,`(opcional)`),lg()(),Ml(335,`p`),mN(336,`Evento disparado quando o usuário clicar no componente.`),lg(),Ml(337,`blockquote`)(338,`p`),mN(339,`Quando este evento está em uso, uma sombra (shadow) é aplicada automaticamente ao componente.`),lg()()()(),Ml(340,`tr`,18)(341,`td`,19)(342,`div`,20)(343,`span`,21),mN(344,` p-danger-primary-action`),ql(345,`br`),lg()()(),Ml(346,`td`,22)(347,`code`,31),mN(348,`false`),lg()(),Ml(349,`td`,24)(350,`p`)(351,`code`),mN(352,`false`),lg()()(),Ml(353,`td`,25)(354,`em`)(355,`strong`),mN(356,`(opcional)`),lg()(),Ml(357,`p`),mN(358,`Caso verdadeiro o botão da ação `),Ml(359,`code`),mN(360,`p-primary-label`),lg(),mN(361,` ativará o modo `),Ml(362,`code`),mN(363,`danger`),lg(),mN(364,`.`),lg(),Ml(365,`blockquote`)(366,`p`),mN(367,`Incompatível com o tipo `),Ml(368,`strong`),mN(369,`tertiary`),lg(),mN(370,` da propriedade `),Ml(371,`code`),mN(372,`p-kind-primary-action`),lg(),mN(373,`.`),lg()()()(),Ml(374,`tr`,18)(375,`td`,19)(376,`div`,20)(377,`span`,21),mN(378,` p-danger-secondary-action`),ql(379,`br`),lg()()(),Ml(380,`td`,22)(381,`code`,31),mN(382,`false`),lg()(),Ml(383,`td`,24)(384,`p`)(385,`code`),mN(386,`false`),lg()()(),Ml(387,`td`,25)(388,`em`)(389,`strong`),mN(390,`(opcional)`),lg()(),Ml(391,`p`),mN(392,`Caso verdadeiro o botão da ação `),Ml(393,`code`),mN(394,`p-secondary-label`),lg(),mN(395,` ativará o modo `),Ml(396,`code`),mN(397,`danger`),lg(),mN(398,`.`),lg(),Ml(399,`blockquote`)(400,`p`),mN(401,`Incompatível com o tipo `),Ml(402,`strong`),mN(403,`tertiary`),lg(),mN(404,` da propriedade `),Ml(405,`code`),mN(406,`p-kind-primary-action`),lg(),mN(407,`.`),lg()()()(),Ml(408,`tr`,18)(409,`td`,19)(410,`div`,20)(411,`span`,21),mN(412,` p-disabled`),ql(413,`br`),lg()()(),Ml(414,`td`,22)(415,`code`,32),mN(416,`boolean`),lg()(),Ml(417,`td`,24)(418,`p`)(419,`code`),mN(420,`false`),lg()()(),Ml(421,`td`,25)(422,`em`)(423,`strong`),mN(424,`(opcional)`),lg()(),Ml(425,`p`),mN(426,`Desabilita o componente.`),lg()()(),Ml(427,`tr`,18)(428,`td`,19)(429,`div`,20)(430,`span`,21),mN(431,` p-height`),ql(432,`br`),lg()()(),Ml(433,`td`,22)(434,`code`,33),mN(435,`number`),lg()(),Ml(436,`td`,24),mN(437,`-`),lg(),Ml(438,`td`,25)(439,`em`)(440,`strong`),mN(441,`(opcional)`),lg()(),Ml(442,`p`),mN(443,`Define a altura do componente.`),lg(),Ml(444,`blockquote`)(445,`p`),mN(446,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),lg()()()(),Ml(447,`tr`,18)(448,`td`,19)(449,`div`,20)(450,`span`,21),mN(451,` p-help`),ql(452,`br`),lg()()(),Ml(453,`td`,22)(454,`code`,27),mN(455,`string`),lg()(),Ml(456,`td`,24),mN(457,`-`),lg(),Ml(458,`td`,25)(459,`em`)(460,`strong`),mN(461,`(opcional)`),lg()(),Ml(462,`p`),mN(463,`Link de ajuda incluído no menu de ações do header.`),lg()()(),Ml(464,`tr`,18)(465,`td`,19)(466,`div`,20)(467,`span`,21),mN(468,` p-kind-primary-action`),ql(469,`br`),lg()()(),Ml(470,`td`,22)(471,`code`,27),mN(472,`string`),lg()(),Ml(473,`td`,24)(474,`p`)(475,`code`),mN(476,`tertiary`),lg()()(),Ml(477,`td`,25)(478,`em`)(479,`strong`),mN(480,`(opcional)`),lg()(),Ml(481,`p`),mN(482,`Define o estilo do botão da ação `),Ml(483,`code`),mN(484,`p-primary-label`),lg(),mN(485,`, conforme o enum `),Ml(486,`code`),mN(487,`PoButtonKind`),lg(),mN(488,`.`),lg()()(),Ml(489,`tr`,18)(490,`td`,19)(491,`div`,20)(492,`span`,21),mN(493,` p-kind-secondary-action`),ql(494,`br`),lg()()(),Ml(495,`td`,22)(496,`code`,27),mN(497,`string`),lg()(),Ml(498,`td`,24)(499,`p`)(500,`code`),mN(501,`tertiary`),lg()()(),Ml(502,`td`,25)(503,`em`)(504,`strong`),mN(505,`(opcional)`),lg()(),Ml(506,`p`),mN(507,`Define o estilo do botão da ação `),Ml(508,`code`),mN(509,`p-secondary-label`),lg(),mN(510,`, conforme o enum `),Ml(511,`code`),mN(512,`PoButtonKind`),lg(),mN(513,`.`),lg()()(),Ml(514,`tr`,18)(515,`td`,19)(516,`div`,20)(517,`span`,21),mN(518,` p-no-shadow`),ql(519,`br`),lg()()(),Ml(520,`td`,22)(521,`code`,32),mN(522,`boolean`),lg()(),Ml(523,`td`,24)(524,`p`)(525,`code`),mN(526,`true`),lg()()(),Ml(527,`td`,25)(528,`em`)(529,`strong`),mN(530,`(opcional)`),lg()(),Ml(531,`p`),mN(532,`Desabilita a sombra do componente quando o mesmo for clicável.`),lg(),Ml(533,`blockquote`)(534,`p`),mN(535,`A sombra é exibida por padrão apenas quando o evento `),Ml(536,`code`),mN(537,`p-click`),lg(),mN(538,` está definido.`),lg()()()(),Ml(539,`tr`,18)(540,`td`,19)(541,`div`,28)(542,`span`,29),mN(543,` (p-on-disabled)`),ql(544,`br`),lg()()(),Ml(545,`td`,22)(546,`code`,30),mN(547,`EventEmitter`),lg()(),Ml(548,`td`,24),mN(549,`-`),lg(),Ml(550,`td`,25)(551,`em`)(552,`strong`),mN(553,`(opcional)`),lg()(),Ml(554,`p`),mN(555,`Evento disparado quando a propriedade `),Ml(556,`code`),mN(557,`p-disabled`),lg(),mN(558,` for alterada.`),lg()()(),Ml(559,`tr`,18)(560,`td`,19)(561,`div`,20)(562,`span`,21),mN(563,` p-primary`),ql(564,`br`),lg()()(),Ml(565,`td`,22)(566,`code`,32),mN(567,`boolean`),lg()(),Ml(568,`td`,24)(569,`p`)(570,`code`),mN(571,`false`),lg()()(),Ml(572,`td`,25)(573,`em`)(574,`strong`),mN(575,`(opcional)`),lg()(),Ml(576,`p`),mN(577,`Opção para que o `),Ml(578,`code`),mN(579,`po-widget`),lg(),mN(580,` fique em destaque.`),lg()()(),Ml(581,`tr`,18)(582,`td`,19)(583,`div`,28)(584,`span`,29),mN(585,` (p-primary-action)`),ql(586,`br`),lg()()(),Ml(587,`td`,22)(588,`code`,30),mN(589,`EventEmitter`),lg()(),Ml(590,`td`,24),mN(591,`-`),lg(),Ml(592,`td`,25)(593,`em`)(594,`strong`),mN(595,`(opcional)`),lg()(),Ml(596,`p`),mN(597,`Evento disparado ao clicar na ação `),Ml(598,`code`),mN(599,`p-primary-label`),lg(),mN(600,`.`),lg()()(),Ml(601,`tr`,18)(602,`td`,19)(603,`div`,20)(604,`span`,21),mN(605,` p-primary-label`),ql(606,`br`),lg()()(),Ml(607,`td`,22)(608,`code`,27),mN(609,`string`),lg()(),Ml(610,`td`,24),mN(611,`-`),lg(),Ml(612,`td`,25)(613,`em`)(614,`strong`),mN(615,`(opcional)`),lg()(),Ml(616,`p`),mN(617,`Define o label e exibe a ação primária no footer do componente.`),lg()()(),Ml(618,`tr`,18)(619,`td`,19)(620,`div`,28)(621,`span`,29),mN(622,` (p-secondary-action)`),ql(623,`br`),lg()()(),Ml(624,`td`,22)(625,`code`,30),mN(626,`EventEmitter`),lg()(),Ml(627,`td`,24),mN(628,`-`),lg(),Ml(629,`td`,25)(630,`em`)(631,`strong`),mN(632,`(opcional)`),lg()(),Ml(633,`p`),mN(634,`Evento disparado ao clicar na ação `),Ml(635,`code`),mN(636,`p-secondary-label`),lg(),mN(637,`.`),lg()()(),Ml(638,`tr`,18)(639,`td`,19)(640,`div`,20)(641,`span`,21),mN(642,` p-secondary-label`),ql(643,`br`),lg()()(),Ml(644,`td`,22)(645,`code`,27),mN(646,`string`),lg()(),Ml(647,`td`,24),mN(648,`-`),lg(),Ml(649,`td`,25)(650,`em`)(651,`strong`),mN(652,`(opcional)`),lg()(),Ml(653,`p`),mN(654,`Define o label e exibe a ação secundária no footer do componente.`),lg(),Ml(655,`blockquote`)(656,`p`),mN(657,`Exibida apenas quando `),Ml(658,`code`),mN(659,`p-primary-label`),lg(),mN(660,` estiver definida.`),lg()()()(),Ml(661,`tr`,18)(662,`td`,19)(663,`div`,28)(664,`span`,29),mN(665,` (p-setting)`),ql(666,`br`),lg()()(),Ml(667,`td`,22)(668,`code`,30),mN(669,`EventEmitter`),lg()(),Ml(670,`td`,24),mN(671,`-`),lg(),Ml(672,`td`,25)(673,`em`)(674,`strong`),mN(675,`(opcional)`),lg()(),Ml(676,`p`),mN(677,`Evento disparado ao clicar em `),Ml(678,`strong`),mN(679,`Configurações`),lg(),mN(680,` incluído no menu de ações do header.`),lg()()(),Ml(681,`tr`,18)(682,`td`,19)(683,`div`,20)(684,`span`,21),mN(685,` p-size`),ql(686,`br`),lg()()(),Ml(687,`td`,22)(688,`code`,27),mN(689,`string`),lg()(),Ml(690,`td`,24)(691,`p`)(692,`code`),mN(693,`medium`),lg()()(),Ml(694,`td`,25)(695,`em`)(696,`strong`),mN(697,`(opcional)`),lg()(),Ml(698,`p`),mN(699,`Define o tamanho dos botões do componente:`),lg(),Ml(700,`ul`)(701,`li`)(702,`code`),mN(703,`small`),lg(),mN(704,`: altura de 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(705,`li`)(706,`code`),mN(707,`medium`),lg(),mN(708,`: altura de 44px.`),lg()(),Ml(709,`blockquote`)(710,`p`),mN(711,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(712,`code`),mN(713,`medium`),lg(),mN(714,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(715,`a`,34),mN(716,`po-theme`),lg(),mN(717,`.`),lg()()()(),Ml(718,`tr`,18)(719,`td`,19)(720,`div`,20)(721,`span`,21),mN(722,` p-tag-icon`),ql(723,`br`),lg()()(),Ml(724,`td`,22)(725,`code`,27),mN(726,`string `),lg(),Ml(727,`code`,35),mN(728,` TemplateRef<void>`),lg()(),Ml(729,`td`,24),mN(730,`-`),lg(),Ml(731,`td`,25)(732,`em`)(733,`strong`),mN(734,`(opcional)`),lg()(),Ml(735,`p`),mN(736,`Define o ícone exibido ao lado do label da `),Ml(737,`code`),mN(738,`p-tag`),lg(),mN(739,`.`),lg(),Ml(740,`p`),mN(741,`É possível usar qualquer um dos ícones da `),Ml(742,`a`,36),mN(743,`Biblioteca de ícones PO UI`),lg(),mN(744,`, conforme exemplo:`),lg(),Ml(745,`pre`)(746,`code`),mN(747,`<po-widget p-tag-icon="an an-user"></po-widget>
`),lg()(),Ml(748,`p`),mN(749,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(750,`em`),mN(751,`Font Awesome`),lg(),mN(752,`, desde que a biblioteca
esteja carregada no projeto:`),lg(),Ml(753,`pre`)(754,`code`),mN(755,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),lg()(),Ml(756,`p`),mN(757,`Outra opção seria a customização do ícone através do `),Ml(758,`code`),mN(759,`TemplateRef`),lg(),mN(760,`, conforme exemplo abaixo:`),lg(),Ml(761,`pre`)(762,`code`),mN(763,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),lg()(),Ml(764,`blockquote`)(765,`p`),mN(766,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(767,`code`),mN(768,`font-size: inherit`),lg(),mN(769,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(770,`tr`,18)(771,`td`,19)(772,`div`,20)(773,`span`,21),mN(774,` p-tag`),ql(775,`br`),lg()()(),Ml(776,`td`,22)(777,`code`,27),mN(778,`string`),lg()(),Ml(779,`td`,24),mN(780,`-`),lg(),Ml(781,`td`,25)(782,`em`)(783,`strong`),mN(784,`(opcional)`),lg()(),Ml(785,`p`),mN(786,`Label da tag exibida no header.`),lg(),Ml(787,`blockquote`)(788,`p`),mN(789,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),lg()()()(),Ml(790,`tr`,18)(791,`td`,19)(792,`div`,20)(793,`span`,21),mN(794,` p-tag-position`),ql(795,`br`),lg()()(),Ml(796,`td`,22)(797,`code`,27),mN(798,`string`),lg()(),Ml(799,`td`,24)(800,`p`)(801,`code`),mN(802,`right`),lg()()(),Ml(803,`td`,25)(804,`em`)(805,`strong`),mN(806,`(opcional)`),lg()(),Ml(807,`p`),mN(808,`Define o posicionamento da `),Ml(809,`code`),mN(810,`po-tag`),lg(),mN(811,` no cabeçalho do Widget:`),lg(),Ml(812,`ul`)(813,`li`)(814,`code`),mN(815,`right`),lg(),mN(816,`: posicionada no canto superior direito do cabeçalho.`),lg(),Ml(817,`li`)(818,`code`),mN(819,`top`),lg(),mN(820,`: posicionada à esquerda, acima do título (quando houver).`),lg(),Ml(821,`li`)(822,`code`),mN(823,`bottom`),lg(),mN(824,`: posicionada à esquerda, abaixo do título (quando houver).`),lg()()()(),Ml(825,`tr`,18)(826,`td`,19)(827,`div`,20)(828,`span`,21),mN(829,` p-tag-type`),ql(830,`br`),lg()()(),Ml(831,`td`,22)(832,`code`,37),mN(833,`PoTagType `),lg(),Ml(834,`code`,27),mN(835,` string`),lg()(),Ml(836,`td`,24)(837,`p`)(838,`code`),mN(839,`success`),lg()()(),Ml(840,`td`,25)(841,`em`)(842,`strong`),mN(843,`(opcional)`),lg()(),Ml(844,`p`),mN(845,`Define o tipo da `),Ml(846,`code`),mN(847,`p-tag`),lg(),mN(848,`, conforme o enum `),Ml(849,`strong`),mN(850,`PoTagType`),lg(),mN(851,`.`),lg(),Ml(852,`p`),mN(853,`Valores válidos:`),lg(),Ml(854,`ul`)(855,`li`)(856,`code`),mN(857,`success`),lg(),mN(858,`: cor verde utilizada para simbolizar sucesso ou êxito.`),lg(),Ml(859,`li`)(860,`code`),mN(861,`warning`),lg(),mN(862,`: cor amarela que representa aviso ou advertência.`),lg(),Ml(863,`li`)(864,`code`),mN(865,`danger`),lg(),mN(866,`: cor vermelha para erro ou aviso crítico.`),lg(),Ml(867,`li`)(868,`code`),mN(869,`info`),lg(),mN(870,`: cor azul claro que caracteriza conteúdo informativo.`),lg(),Ml(871,`li`)(872,`code`),mN(873,`neutral`),lg(),mN(874,`: cor cinza claro para uso geral.`),lg()()()(),Ml(875,`tr`,18)(876,`td`,19)(877,`div`,20)(878,`span`,21),mN(879,` p-title`),ql(880,`br`),lg()()(),Ml(881,`td`,22)(882,`code`,27),mN(883,`string`),lg()(),Ml(884,`td`,24),mN(885,`-`),lg(),Ml(886,`td`,25)(887,`em`)(888,`strong`),mN(889,`(opcional)`),lg()(),Ml(890,`p`),mN(891,`Título do componente.`),lg(),Ml(892,`blockquote`)(893,`p`),mN(894,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),lg()()()(),Ml(895,`tr`,18)(896,`td`,19)(897,`div`,28)(898,`span`,29),mN(899,` (p-title-action)`),ql(900,`br`),lg()()(),Ml(901,`td`,22)(902,`code`,30),mN(903,`EventEmitter`),lg()(),Ml(904,`td`,24),mN(905,`-`),lg(),Ml(906,`td`,25)(907,`em`)(908,`strong`),mN(909,`(opcional)`),lg()(),Ml(910,`p`),mN(911,`Evento disparado ao clicar no título definido em `),Ml(912,`code`),mN(913,`p-title`),lg(),mN(914,`.`),lg()()()(),Ml(915,`h3`),mN(916,`Interfaces`),lg(),Ml(917,`h4`,38)(918,`code`,5),mN(919,`PoPopupAction`),lg()(),Ml(920,`div`,2)(921,`p`),mN(922,`Interface para lista de ações do componente.`),lg()(),Ml(923,`h4`,14),mN(924,`Propriedades`),lg(),Ml(925,`table`,15)(926,`tr`,16)(927,`th`,17),mN(928,`Nome`),lg(),Ml(929,`th`,17),mN(930,`Tipo`),lg(),Ml(931,`th`,17),mN(932,`Descrição`),lg()(),Ml(933,`tr`,18)(934,`td`,19)(935,`div`,20)(936,`span`,21),mN(937,` action`),ql(938,`br`),lg()()(),Ml(939,`td`,22)(940,`code`,39),mN(941,`Function`),lg()(),Ml(942,`td`,25)(943,`em`)(944,`strong`),mN(945,`(opcional)`),lg()(),Ml(946,`p`),mN(947,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(948,`p`),mN(949,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(950,`code`),mN(951,`subItems`),lg(),mN(952,`.`),lg(),Ml(953,`blockquote`)(954,`p`),mN(955,`Para que a função seja executada no contexto do componente, utilize `),Ml(956,`em`),mN(957,`bind`),lg(),mN(958,`:
`),Ml(959,`code`),mN(960,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(961,`tr`,18)(962,`td`,19)(963,`div`,20)(964,`span`,21),mN(965,` disabled`),ql(966,`br`),lg()()(),Ml(967,`td`,22)(968,`code`,32),mN(969,`boolean `),lg(),Ml(970,`code`,39),mN(971,` Function`),lg()(),Ml(972,`td`,25)(973,`em`)(974,`strong`),mN(975,`(opcional)`),lg()(),Ml(976,`p`),mN(977,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(978,`tr`,18)(979,`td`,19)(980,`div`,20)(981,`span`,21),mN(982,` icon`),ql(983,`br`),lg()()(),Ml(984,`td`,22)(985,`code`,27),mN(986,`string `),lg(),Ml(987,`code`,35),mN(988,` TemplateRef<void>`),lg()(),Ml(989,`td`,25)(990,`em`)(991,`strong`),mN(992,`(opcional)`),lg()(),Ml(993,`p`),mN(994,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(995,`p`),mN(996,`Aceita ícones da `),Ml(997,`a`,36),mN(998,`Biblioteca de ícones`),lg(),mN(999,`, fontes externas (ex: Font Awesome)
ou um `),Ml(1e3,`code`),mN(1001,`TemplateRef`),lg(),mN(1002,` para ícones customizados.`),lg(),Ml(1003,`pre`)(1004,`code`),mN(1005,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(1006,`tr`,18)(1007,`td`,19)(1008,`div`,20)(1009,`span`,21),mN(1010,` label`),ql(1011,`br`),lg()()(),Ml(1012,`td`,22)(1013,`code`,27),mN(1014,`string`),lg()(),Ml(1015,`td`,25)(1016,`p`),mN(1017,`Rótulo da ação.`),lg(),Ml(1018,`p`),mN(1019,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(1020,`code`),mN(1021,`subItems`),lg(),mN(1022,`.`),lg()()(),Ml(1023,`tr`,18)(1024,`td`,19)(1025,`div`,20)(1026,`span`,21),mN(1027,` selected`),ql(1028,`br`),lg()()(),Ml(1029,`td`,22)(1030,`code`,32),mN(1031,`boolean`),lg()(),Ml(1032,`td`,25)(1033,`em`)(1034,`strong`),mN(1035,`(opcional)`),lg()(),Ml(1036,`p`),mN(1037,`Define se a ação está selecionada.`),lg()()(),Ml(1038,`tr`,18)(1039,`td`,19)(1040,`div`,20)(1041,`span`,21),mN(1042,` separator`),ql(1043,`br`),lg()()(),Ml(1044,`td`,22)(1045,`code`,32),mN(1046,`boolean`),lg()(),Ml(1047,`td`,25)(1048,`em`)(1049,`strong`),mN(1050,`(opcional)`),lg()(),Ml(1051,`p`),mN(1052,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(1053,`tr`,18)(1054,`td`,19)(1055,`div`,20)(1056,`span`,21),mN(1057,` subItems`),ql(1058,`br`),lg()()(),Ml(1059,`td`,22)(1060,`code`,23),mN(1061,`Array<PoPopupAction>`),lg()(),Ml(1062,`td`,25)(1063,`em`)(1064,`strong`),mN(1065,`(opcional)`),lg()(),Ml(1066,`p`),mN(1067,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(1068,`p`),mN(1069,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(1070,`blockquote`)(1071,`p`),mN(1072,`As propriedades `),Ml(1073,`code`),mN(1074,`disabled`),lg(),mN(1075,`, `),Ml(1076,`code`),mN(1077,`type`),lg(),mN(1078,` e `),Ml(1079,`code`),mN(1080,`visible`),lg(),mN(1081,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(1082,`blockquote`)(1083,`p`),mN(1084,`Quando `),Ml(1085,`code`),mN(1086,`url`),lg(),mN(1087,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(1088,`blockquote`)(1089,`p`),mN(1090,`Em subníveis aninhados, o `),Ml(1091,`code`),mN(1092,`icon`),lg(),mN(1093,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(1094,`tr`,18)(1095,`td`,19)(1096,`div`,20)(1097,`span`,21),mN(1098,` type`),ql(1099,`br`),lg()()(),Ml(1100,`td`,22)(1101,`code`,27),mN(1102,`string`),lg()(),Ml(1103,`td`,25)(1104,`em`)(1105,`strong`),mN(1106,`(opcional)`),lg()(),Ml(1107,`p`),mN(1108,`Define a cor do item.`),lg(),Ml(1109,`p`),mN(1110,`Valores válidos:`),lg(),Ml(1111,`ul`)(1112,`li`)(1113,`code`),mN(1114,`default`),lg()(),Ml(1115,`li`)(1116,`code`),mN(1117,`danger`),lg()()()()(),Ml(1118,`tr`,18)(1119,`td`,19)(1120,`div`,20)(1121,`span`,21),mN(1122,` url`),ql(1123,`br`),lg()()(),Ml(1124,`td`,22)(1125,`code`,27),mN(1126,`string`),lg()(),Ml(1127,`td`,25)(1128,`em`)(1129,`strong`),mN(1130,`(opcional)`),lg()(),Ml(1131,`p`),mN(1132,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(1133,`p`),mN(1134,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(1135,`code`),mN(1136,`url`),lg(),mN(1137,` é informada em um agrupador, o clique `),Ml(1138,`strong`),mN(1139,`não abrirá os subitens`),lg(),mN(1140,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(1141,`blockquote`)(1142,`p`),mN(1143,`Quando informada, tem prioridade sobre a propriedade `),Ml(1144,`code`),mN(1145,`action`),lg(),mN(1146,`.`),lg()()()(),Ml(1147,`tr`,18)(1148,`td`,19)(1149,`div`,20)(1150,`span`,21),mN(1151,` visible`),ql(1152,`br`),lg()()(),Ml(1153,`td`,22)(1154,`code`,32),mN(1155,`boolean `),lg(),Ml(1156,`code`,39),mN(1157,` Function`),lg()(),Ml(1158,`td`,25)(1159,`em`)(1160,`strong`),mN(1161,`(opcional)`),lg()(),Ml(1162,`p`),mN(1163,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(1164,`h4`,38)(1165,`code`,5),mN(1166,`PoWidgetAvatar`),lg()(),Ml(1167,`div`,2)(1168,`p`),mN(1169,`Interface para definição do avatar no `),Ml(1170,`code`),mN(1171,`po-widget`),lg(),mN(1172,`.`),lg()(),Ml(1173,`h4`,14),mN(1174,`Propriedades`),lg(),Ml(1175,`table`,15)(1176,`tr`,16)(1177,`th`,17),mN(1178,`Nome`),lg(),Ml(1179,`th`,17),mN(1180,`Tipo`),lg(),Ml(1181,`th`,17),mN(1182,`Descrição`),lg()(),Ml(1183,`tr`,18)(1184,`td`,19)(1185,`div`,20)(1186,`span`,21),mN(1187,` customTemplate`),ql(1188,`br`),lg()()(),Ml(1189,`td`,22)(1190,`code`,40),mN(1191,`TemplateRef<any>`),lg()(),Ml(1192,`td`,25)(1193,`em`)(1194,`strong`),mN(1195,`(opcional)`),lg()(),Ml(1196,`p`),mN(1197,`Permite a criação de template customizado para o avatar`),lg(),Ml(1198,`pre`)(1199,`code`),mN(1200,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),lg()()()(),Ml(1201,`tr`,18)(1202,`td`,19)(1203,`div`,20)(1204,`span`,21),mN(1205,` size`),ql(1206,`br`),lg()()(),Ml(1207,`td`,22)(1208,`code`,27),mN(1209,`string`),lg()(),Ml(1210,`td`,25)(1211,`em`)(1212,`strong`),mN(1213,`(opcional)`),lg()(),Ml(1214,`p`),mN(1215,`Tamanho de exibição do componente `),Ml(1216,`code`),mN(1217,`po-avatar`),lg(),mN(1218,`.`),lg(),Ml(1219,`p`),mN(1220,`Valores válidos:`),lg(),Ml(1221,`ul`)(1222,`li`)(1223,`code`),mN(1224,`xs`),lg(),mN(1225,` (24x24)`),lg(),Ml(1226,`li`)(1227,`code`),mN(1228,`sm`),lg(),mN(1229,` (32x32)`),lg(),Ml(1230,`li`)(1231,`code`),mN(1232,`md`),lg(),mN(1233,` (64x64)`),lg(),Ml(1234,`li`)(1235,`code`),mN(1236,`lg`),lg(),mN(1237,` (96x96)`),lg(),Ml(1238,`li`)(1239,`code`),mN(1240,`xl`),lg(),mN(1241,` (144x144)`),lg()()()(),Ml(1242,`tr`,18)(1243,`td`,19)(1244,`div`,20)(1245,`span`,21),mN(1246,` src`),ql(1247,`br`),lg()()(),Ml(1248,`td`,22)(1249,`code`,27),mN(1250,`string`),lg()(),Ml(1251,`td`,25)(1252,`em`)(1253,`strong`),mN(1254,`(opcional)`),lg()(),Ml(1255,`p`),mN(1256,`Fonte da imagem que pode ser um caminho local (`),Ml(1257,`code`),mN(1258,`./assets/images/logo-black-small.png`),lg(),mN(1259,`)
ou um servidor externo (`),Ml(1260,`code`),mN(1261,`https://po-ui.io/assets/images/logo-black-small.png`),lg(),mN(1262,`).`),lg()()(),Ml(1263,`tr`,18)(1264,`td`,19)(1265,`div`,20)(1266,`span`,21),mN(1267,` widthCustomTemplate`),ql(1268,`br`),lg()()(),Ml(1269,`td`,22)(1270,`code`,27),mN(1271,`string`),lg()(),Ml(1272,`td`,25)(1273,`em`)(1274,`strong`),mN(1275,`(opcional)`),lg()(),Ml(1276,`p`),mN(1277,`Define a largura em porcentagem do `),Ml(1278,`code`),mN(1279,`customTemplate`),lg(),mN(1280,`.`),lg(),Ml(1281,`p`),mN(1282,`O valor máximo aceito é `),Ml(1283,`code`),mN(1284,`50%`),lg(),mN(1285,`.`),lg()()()(),Ml(1286,`h3`),mN(1287,`Enums`),lg(),Ml(1288,`h4`,4)(1289,`code`,5),mN(1290,`PoButtonKind`),lg()(),Ml(1291,`div`,2)(1292,`p`),mN(1293,`Estilos disponíveis do button.`),lg()(),Ml(1294,`h4`,14),mN(1295,`Propriedades`),lg(),Ml(1296,`table`,15)(1297,`tr`,16)(1298,`th`,17),mN(1299,`Nome`),lg(),Ml(1300,`th`,17),mN(1301,`Descrição`),lg()(),Ml(1302,`tr`,18)(1303,`td`,19)(1304,`div`,20)(1305,`span`,21),mN(1306,` primary`),ql(1307,`br`),lg()()(),Ml(1308,`td`,25)(1309,`p`),mN(1310,`Estilo primário, usado para ações principais que requerem maior destaque.`),lg()()(),Ml(1311,`tr`,18)(1312,`td`,19)(1313,`div`,20)(1314,`span`,21),mN(1315,` secondary`),ql(1316,`br`),lg()()(),Ml(1317,`td`,25)(1318,`p`),mN(1319,`Estilo secundário, usado como padrão, para ações comuns.`),lg()()(),Ml(1320,`tr`,18)(1321,`td`,19)(1322,`div`,20)(1323,`span`,21),mN(1324,` tertiary`),ql(1325,`br`),lg()()(),Ml(1326,`td`,25)(1327,`p`),mN(1328,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Widget`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-widget-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-widget-basic-view`)(6,`sample-po-widget-labs-view`)(7,`sample-po-widget-finance-dashboard-view`)(8,`sample-po-widget-card-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ye,we,_e,Te,Me],encapsulation:2,changeDetection:1})}return o})()}];var We=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(tt),NL]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,We]})}return o})();export{Ot as DocPoWidgetModule};