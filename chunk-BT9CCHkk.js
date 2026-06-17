import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,ba as bNe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,aJ as Ghe,b5 as jhe,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bM as fN,aO as Dw,aP as t0,bF as Fw,b6 as Yo,b7 as A3,av as ql,aw as lo,ax as uo,cy as ude,a2 as QE,aQ as px,aR as hx,bd as xx,aS as gx,a3 as pNe,a7 as uN,A as vw,aD as Xy,aT as tN,aE as Qy,bR as CN}from'./main-BY5NURRA.js';var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-widget");},dependencies:[bNe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Widget Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-widget></po-widget>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-widget-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Le,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,fe],encapsulation:2})}return o})();var qe=(o,k)=>({src:o,size:k}),Ce=(()=>{class o{poNotification=f(Yp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=Ex();Sl(0,"div",1)(1,"po-widget",2),ht("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),Jx(2),sg()(),Wl(3,"po-divider"),Sl(4,"div",1),Wl(5,"po-info",3),sg(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",4),Ew("ngModelChange",function(r){return Xy(m),tN(i.title,r)||(i.title=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",5),Ew("ngModelChange",function(r){return Xy(m),tN(i.help,r)||(i.help=r),Qy(r)}),sg(),JA(),Sl(11,"po-number",6),Ew("ngModelChange",function(r){return Xy(m),tN(i.height,r)||(i.height=r),Qy(r)}),sg(),JA(),Sl(12,"div",1)(13,"po-input",7),Ew("ngModelChange",function(r){return Xy(m),tN(i.actionPopup.action,r)||(i.actionPopup.action=r),Qy(r)}),sg(),JA(),Sl(14,"po-input",8),Ew("ngModelChange",function(r){return Xy(m),tN(i.actionPopup.label,r)||(i.actionPopup.label=r),Qy(r)}),sg(),JA(),sg(),Sl(15,"div",1)(16,"po-button",9),ht("p-click",function(){return i.addAction(i.actionPopup)}),sg()(),Sl(17,"po-input",10),Ew("ngModelChange",function(r){return Xy(m),tN(i.background,r)||(i.background=r),Qy(r)}),sg(),JA(),Sl(18,"po-input",11),Ew("ngModelChange",function(r){return Xy(m),tN(i.primaryLabel,r)||(i.primaryLabel=r),Qy(r)}),sg(),JA(),Sl(19,"po-input",12),Ew("ngModelChange",function(r){return Xy(m),tN(i.secondaryLabel,r)||(i.secondaryLabel=r),Qy(r)}),sg(),JA(),Sl(20,"div",13)(21,"po-input",14),Ew("ngModelChange",function(r){return Xy(m),tN(i.tagLabel,r)||(i.tagLabel=r),Qy(r)}),sg(),JA(),Sl(22,"po-select",15),Ew("ngModelChange",function(r){return Xy(m),tN(i.tagIcon,r)||(i.tagIcon=r),Qy(r)}),sg(),JA(),Sl(23,"po-select",16),Ew("ngModelChange",function(r){return Xy(m),tN(i.tagPosition,r)||(i.tagPosition=r),Qy(r)}),sg(),JA(),sg(),Sl(24,"div",1)(25,"po-input",17),Ew("ngModelChange",function(r){return Xy(m),tN(i.avatarSrc,r)||(i.avatarSrc=r),Qy(r)}),sg(),JA(),Sl(26,"po-select",18),Ew("ngModelChange",function(r){return Xy(m),tN(i.avatarSize,r)||(i.avatarSize=r),Qy(r)}),sg(),JA(),sg(),Sl(27,"div",1)(28,"po-checkbox-group",19),Ew("ngModelChange",function(r){return Xy(m),tN(i.properties,r)||(i.properties=r),Qy(r)}),sg(),JA(),sg(),Sl(29,"po-textarea",20),Ew("ngModelChange",function(r){return Xy(m),tN(i.content,r)||(i.content=r),Qy(r)}),sg(),JA(),Sl(30,"div",1)(31,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),tw("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",fN(36,qe,i.avatarSrc,i.avatarSize)),Vp(),fg(" ",i.content," "),Vp(3),tw("p-value",i.action),Vp(4),Dw("ngModel",i.title),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.height),t0(),Vp(2),Dw("ngModel",i.actionPopup.action),t0(),Vp(),Dw("ngModel",i.actionPopup.label),t0(),Vp(2),tw("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Vp(),Dw("ngModel",i.background),t0(),Vp(),Dw("ngModel",i.primaryLabel),t0(),Vp(),Dw("ngModel",i.secondaryLabel),t0(),Vp(2),Dw("ngModel",i.tagLabel),t0(),Vp(),Dw("ngModel",i.tagIcon),tw("p-options",i.iconList),t0(),Vp(),Dw("ngModel",i.tagPosition),tw("p-options",i.listTagPosition),t0(),Vp(2),Dw("ngModel",i.avatarSrc),t0(),Vp(),Dw("ngModel",i.avatarSize),tw("p-options",i.listAvatarSize),t0(),Vp(2),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.content),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Ghe,jhe,Qhe,bNe],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Widget Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-widget-labs"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return o})();var Ie=["detailsModal"],Pe=(()=>{class o{poNotification=f(Yp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&ql(Ie,7),l&2){let m;lo(m=uo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(Sl(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),Jx(4,"Sales order"),sg(),Sl(5,"div"),Jx(6,"Scheduled to: "),Sl(7,"strong"),Jx(8,"05/04/2018"),sg()(),Sl(9,"div",3),Wl(10,"po-button",4),Sl(11,"po-button",5),ht("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),sg()()(),Sl(12,"po-widget",6),ht("p-click",function(){return i.openModal("account")}),Sl(13,"div",7),Jx(14,"$2.818,29"),sg(),Sl(15,"div",8),Jx(16,"Last updated at 18:34"),sg()(),Sl(17,"po-widget",9),ht("p-primary-action",function(){return i.openModal("account")}),Sl(18,"div",10),Jx(19,"$5.000,00"),sg(),Sl(20,"div",8),Jx(21,"Last updated at 08:20"),sg()()(),Sl(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),Jx(27,"Enter the user routine"),sg()()(),Sl(28,"div",15),Wl(29,"po-multiselect",16),sg()(),Sl(30,"po-widget",17)(31,"div",7),Jx(32,"Credit card"),sg(),Sl(33,"div",8),Jx(34,"MasterCard - 5500 0000 0000 0004"),sg()(),Sl(35,"po-widget",18),ht("p-primary-action",function(){return i.openModal("savings")}),Sl(36,"div",7),Jx(37,"$2.000,00"),sg(),Sl(38,"div",8),Jx(39,"05/03/2018"),sg()()()(),Sl(40,"po-modal",19,0),Wl(42,"po-table",20),sg()),l&2&&(Vp(2),tw("p-height",190),Vp(10),tw("p-height",190),Vp(5),tw("p-height",190),Vp(6),tw("p-height",180),Vp(6),tw("p-options",i.options),Vp(),tw("p-actions",i.myActions)("p-height",180),Vp(5),tw("p-height",180)("p-primary",true),Vp(5),tw("p-title",i.titleDetailsModal),Vp(2),tw("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Qt,Fw,Yo,A3,bNe],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Widget - Finance dashboard"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row sample-finance-row-gap">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-finance-row-gap {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-widget-finance-dashboard"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Pe],encapsulation:2})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:"40%"}),He=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),je=o=>({header:o}),Je=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Wl(0,"po-chart",8),o&2&&tw("p-options",dN(3,je,uN(2,He)))("p-series",fN(7,Qe,uN(5,Je),uN(6,Ge)));}function Xe(o,k){if(o&1&&(Sl(0,"li"),Jx(1),sg()),o&2){let p=k.$implicit;Vp(),vw(p);}}var Te=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(Sl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),Wl(2,"po-info",3),sg(),Sl(3,"po-widget",4)(4,"div"),Jx(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),Sl(6,"div",5)(7,"ul")(8,"li"),Jx(9,"Out-of-the-Box"),sg(),Sl(10,"li"),Jx(11,"Standardized and Opinion-Based Architecture"),sg(),Sl(12,"li"),Jx(13,"Next Generation Reactivity (Signals)"),sg(),Sl(14,"li"),Jx(15,"Focus on Enterprise and Security"),sg()()()(),QE(16,Ke,1,10,"ng-template",null,0,CN),sg()(),Sl(18,"po-modal",6),Jx(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),Sl(20,"div",7)(21,"ul"),px(22,Xe,2,1,"li",null,hx),sg()()()),l&2){let m=xx(17);Vp(),tw("p-help",i.help),Vp(),tw("p-label",i.label)("p-value",i.value),Vp(),tw("p-avatar",dN(4,Ue,m)),Vp(19),gx(i.technologies);}},dependencies:[ude,Qhe,Yo,bNe],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),Me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Widget - Card"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-widget-card/sample-po-widget-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-widget-card"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Te],encapsulation:2})}return o})();var De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-widget"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoWidgetComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-widget"),sg(),Jx(17," \xE9 recomendado para exibi\xE7\xE3o de "),Sl(18,"em"),Jx(19,"dashboards"),sg(),Jx(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),sg(),Sl(21,"p"),Jx(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),sg(),Sl(23,"p"),Jx(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),Sl(25,"a",6),Jx(26,"Grid System"),sg(),Jx(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),sg(),Sl(28,"h4"),Jx(29,"Boas pr\xE1ticas"),sg(),Sl(30,"p"),Jx(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),Sl(32,"code"),Jx(33,"18.75rem"),sg(),Jx(34," no componente."),sg(),Sl(35,"h4"),Jx(36,"Acessibilidade tratada no componente"),sg(),Sl(37,"p"),Jx(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),sg(),Sl(39,"ul")(40,"li"),Jx(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),sg(),Sl(42,"li"),Jx(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),Sl(44,"a",7),Jx(45,"4.1.2: Name, Role, Value"),sg(),Jx(46,")"),sg(),Sl(47,"li"),Jx(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),Sl(49,"a",8),Jx(50,"2.4.12: Focus Appearance"),sg(),Jx(51,")"),sg(),Sl(52,"li"),Jx(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),Sl(54,"a",9),Jx(55,"2.4.1 - Keyboard"),sg(),Jx(56,")"),sg()(),Sl(57,"h4"),Jx(58,"Tokens customiz\xE1veis"),sg(),Sl(59,"p"),Jx(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(61,"blockquote")(62,"p"),Jx(63,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(64,"a",10),Jx(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(66,"."),sg()(),Sl(67,"table")(68,"thead")(69,"tr")(70,"th"),Jx(71,"Propriedade"),sg(),Sl(72,"th"),Jx(73,"Descri\xE7\xE3o"),sg(),Sl(74,"th"),Jx(75,"Valor Padr\xE3o"),sg()()(),Sl(76,"tbody")(77,"tr")(78,"td")(79,"strong"),Jx(80,"Default Values"),sg()(),Wl(81,"td")(82,"td"),sg(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--font-family"),sg()(),Sl(87,"td"),Jx(88,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--font-family-theme) "),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--font-size"),sg()(),Sl(96,"td"),Jx(97,"Tamanho da fonte"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--font-size-sm)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--font-weight"),sg()(),Sl(105,"td"),Jx(106,"Peso da fonte"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--font-weight-bold)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--font-color"),sg()(),Sl(114,"td"),Jx(115,"Cor da fonte"),sg(),Sl(116,"td")(117,"code"),Jx(118,"var(--color-neutral-dark-95)"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--padding"),sg(),Jx(123," - "),Sl(124,"code"),Jx(125,"@deprecated 21.x.x"),sg()(),Sl(126,"td"),Jx(127,"Preenchimento do componente"),sg(),Sl(128,"td")(129,"code"),Jx(130,"1rem"),sg()()(),Sl(131,"tr")(132,"td")(133,"code"),Jx(134,"--padding-header"),sg()(),Sl(135,"td"),Jx(136,"Preenchimento do header"),sg(),Sl(137,"td")(138,"code"),Jx(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--padding-body"),sg()(),Sl(144,"td"),Jx(145,"Preenchimento do body"),sg(),Sl(146,"td")(147,"code"),Jx(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),sg()()(),Sl(149,"tr")(150,"td")(151,"code"),Jx(152,"--padding-avatar"),sg()(),Sl(153,"td"),Jx(154,"Preenchimento do avatar"),sg(),Sl(155,"td")(156,"code"),Jx(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),sg()()(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--padding-footer"),sg()(),Sl(162,"td"),Jx(163,"Preenchimento do footer"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--border-radius"),sg()(),Sl(171,"td"),Jx(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--border-radius-md)"),sg()()(),Sl(176,"tr")(177,"td")(178,"code"),Jx(179,"--border-width"),sg()(),Sl(180,"td"),Jx(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(182,"td")(183,"code"),Jx(184,"var(--border-width-sm)"),sg()()(),Sl(185,"tr")(186,"td")(187,"code"),Jx(188,"--border-color"),sg()(),Sl(189,"td"),Jx(190,"Cor da borda"),sg(),Sl(191,"td")(192,"code"),Jx(193,"var(--color-neutral-light-20)"),sg()()(),Sl(194,"tr")(195,"td")(196,"code"),Jx(197,"--background"),sg()(),Sl(198,"td"),Jx(199,"Cor de background"),sg(),Sl(200,"td")(201,"code"),Jx(202,"var(--color-neutral-light-00)"),sg()()(),Sl(203,"tr")(204,"td")(205,"code"),Jx(206,"--shadow"),sg()(),Sl(207,"td"),Jx(208,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(209,"td")(210,"code"),Jx(211,"var(--shadow-md)"),sg()()(),Sl(212,"tr")(213,"td")(214,"strong"),Jx(215,"Hover"),sg()(),Wl(216,"td")(217,"td"),sg(),Sl(218,"tr")(219,"td")(220,"code"),Jx(221,"--border-color-hover"),sg()(),Sl(222,"td"),Jx(223,"Cor da borda no estado hover"),sg(),Sl(224,"td")(225,"code"),Jx(226,"var(--color-action-hover)"),sg()()(),Sl(227,"tr")(228,"td")(229,"strong"),Jx(230,"Focused"),sg()(),Wl(231,"td")(232,"td"),sg(),Sl(233,"tr")(234,"td")(235,"code"),Jx(236,"--color-focused"),sg()(),Sl(237,"td"),Jx(238,"Cor principal no estado de focus"),sg(),Sl(239,"td")(240,"code"),Jx(241,"var(--color-action-default)"),sg()()(),Sl(242,"tr")(243,"td")(244,"code"),Jx(245,"--outline-color-focused"),sg(),Jx(246," \xA0"),sg(),Sl(247,"td"),Jx(248,"Cor do outline do estado de focus"),sg(),Sl(249,"td")(250,"code"),Jx(251,"var(--color-action-focus)"),sg()()()()()(),Sl(252,"div",11)(253,"h4",12),Jx(254,"Seletor"),sg(),Sl(255,"pre",13),Jx(256,`<po-widget
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
`),sg()(),Sl(257,"h4",14),Jx(258,"Propriedades"),sg(),Sl(259,"table",15)(260,"tr",16)(261,"th",17),Jx(262,"Nome"),sg(),Sl(263,"th",17),Jx(264,"Tipo"),sg(),Sl(265,"th",17),Jx(266,"Padr\xE3o"),sg(),Sl(267,"th",17),Jx(268,"Descri\xE7\xE3o"),sg()(),Sl(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),Jx(273," p-actions"),Wl(274,"br"),sg()()(),Sl(275,"td",22)(276,"code",23),Jx(277,"Array<PoPopupAction>"),sg()(),Sl(278,"td",24),Jx(279,"-"),sg(),Sl(280,"td",25)(281,"em")(282,"strong"),Jx(283,"(opcional)"),sg()(),Sl(284,"p"),Jx(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Sl(286,"code"),Jx(287,"PoPopupAction"),sg(),Jx(288,"."),sg()()(),Sl(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),Jx(293," p-avatar"),Wl(294,"br"),sg()()(),Sl(295,"td",22)(296,"code",26),Jx(297,"PoWidgetAvatar"),sg()(),Sl(298,"td",24),Jx(299,"-"),sg(),Sl(300,"td",25)(301,"em")(302,"strong"),Jx(303,"(opcional)"),sg()(),Sl(304,"p"),Jx(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),sg()()(),Sl(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),Jx(310," p-background"),Wl(311,"br"),sg()()(),Sl(312,"td",22)(313,"code",27),Jx(314,"string"),sg()(),Sl(315,"td",24),Jx(316,"-"),sg(),Sl(317,"td",25)(318,"em")(319,"strong"),Jx(320,"(opcional)"),sg()(),Sl(321,"p"),Jx(322,"Define uma imagem de fundo."),sg(),Sl(323,"blockquote")(324,"p"),Jx(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),Sl(326,"code"),Jx(327,"p-widget"),sg(),Jx(328,`,
pode-se utilizar a propriedade `),Sl(329,"code"),Jx(330,"p-primary"),sg(),Jx(331," em conjunto para que os textos fiquem na cor branca."),sg()()()(),Sl(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),Jx(336," (p-click)"),Wl(337,"br"),sg()()(),Sl(338,"td",22)(339,"code",30),Jx(340,"EventEmitter"),sg()(),Sl(341,"td",24),Jx(342,"-"),sg(),Sl(343,"td",25)(344,"em")(345,"strong"),Jx(346,"(opcional)"),sg()(),Sl(347,"p"),Jx(348,"Evento disparado quando o usu\xE1rio clicar no componente."),sg(),Sl(349,"blockquote")(350,"p"),Jx(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),sg()()()(),Sl(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),Jx(356," p-danger-primary-action"),Wl(357,"br"),sg()()(),Sl(358,"td",22)(359,"code",31),Jx(360,"false"),sg()(),Sl(361,"td",24)(362,"p")(363,"code"),Jx(364,"false"),sg()()(),Sl(365,"td",25)(366,"em")(367,"strong"),Jx(368,"(opcional)"),sg()(),Sl(369,"p"),Jx(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Sl(371,"code"),Jx(372,"p-primary-label"),sg(),Jx(373," ativar\xE1 o modo "),Sl(374,"code"),Jx(375,"danger"),sg(),Jx(376,"."),sg(),Sl(377,"blockquote")(378,"p"),Jx(379,"Incompat\xEDvel com o tipo "),Sl(380,"strong"),Jx(381,"tertiary"),sg(),Jx(382," da propriedade "),Sl(383,"code"),Jx(384,"p-kind-primary-action"),sg(),Jx(385,"."),sg()()()(),Sl(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),Jx(390," p-danger-secondary-action"),Wl(391,"br"),sg()()(),Sl(392,"td",22)(393,"code",31),Jx(394,"false"),sg()(),Sl(395,"td",24)(396,"p")(397,"code"),Jx(398,"false"),sg()()(),Sl(399,"td",25)(400,"em")(401,"strong"),Jx(402,"(opcional)"),sg()(),Sl(403,"p"),Jx(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Sl(405,"code"),Jx(406,"p-secondary-label"),sg(),Jx(407," ativar\xE1 o modo "),Sl(408,"code"),Jx(409,"danger"),sg(),Jx(410,"."),sg(),Sl(411,"blockquote")(412,"p"),Jx(413,"Incompat\xEDvel com o tipo "),Sl(414,"strong"),Jx(415,"tertiary"),sg(),Jx(416," da propriedade "),Sl(417,"code"),Jx(418,"p-kind-primary-action"),sg(),Jx(419,"."),sg()()()(),Sl(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),Jx(424," p-disabled"),Wl(425,"br"),sg()()(),Sl(426,"td",22)(427,"code",32),Jx(428,"boolean"),sg()(),Sl(429,"td",24)(430,"p")(431,"code"),Jx(432,"false"),sg()()(),Sl(433,"td",25)(434,"em")(435,"strong"),Jx(436,"(opcional)"),sg()(),Sl(437,"p"),Jx(438,"Desabilita o componente."),sg()()(),Sl(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),Jx(443," p-height"),Wl(444,"br"),sg()()(),Sl(445,"td",22)(446,"code",33),Jx(447,"number"),sg()(),Sl(448,"td",24),Jx(449,"-"),sg(),Sl(450,"td",25)(451,"em")(452,"strong"),Jx(453,"(opcional)"),sg()(),Sl(454,"p"),Jx(455,"Define a altura do componente."),sg(),Sl(456,"blockquote")(457,"p"),Jx(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),sg()()()(),Sl(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),Jx(463," p-help"),Wl(464,"br"),sg()()(),Sl(465,"td",22)(466,"code",27),Jx(467,"string"),sg()(),Sl(468,"td",24),Jx(469,"-"),sg(),Sl(470,"td",25)(471,"em")(472,"strong"),Jx(473,"(opcional)"),sg()(),Sl(474,"p"),Jx(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),sg()()(),Sl(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),Jx(480," p-kind-primary-action"),Wl(481,"br"),sg()()(),Sl(482,"td",22)(483,"code",27),Jx(484,"string"),sg()(),Sl(485,"td",24)(486,"p")(487,"code"),Jx(488,"tertiary"),sg()()(),Sl(489,"td",25)(490,"em")(491,"strong"),Jx(492,"(opcional)"),sg()(),Sl(493,"p"),Jx(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Sl(495,"code"),Jx(496,"p-primary-label"),sg(),Jx(497,", conforme o enum "),Sl(498,"code"),Jx(499,"PoButtonKind"),sg(),Jx(500,"."),sg()()(),Sl(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),Jx(505," p-kind-secondary-action"),Wl(506,"br"),sg()()(),Sl(507,"td",22)(508,"code",27),Jx(509,"string"),sg()(),Sl(510,"td",24)(511,"p")(512,"code"),Jx(513,"tertiary"),sg()()(),Sl(514,"td",25)(515,"em")(516,"strong"),Jx(517,"(opcional)"),sg()(),Sl(518,"p"),Jx(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Sl(520,"code"),Jx(521,"p-secondary-label"),sg(),Jx(522,", conforme o enum "),Sl(523,"code"),Jx(524,"PoButtonKind"),sg(),Jx(525,"."),sg()()(),Sl(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),Jx(530," p-no-shadow"),Wl(531,"br"),sg()()(),Sl(532,"td",22)(533,"code",32),Jx(534,"boolean"),sg()(),Sl(535,"td",24)(536,"p")(537,"code"),Jx(538,"true"),sg()()(),Sl(539,"td",25)(540,"em")(541,"strong"),Jx(542,"(opcional)"),sg()(),Sl(543,"p"),Jx(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),sg(),Sl(545,"blockquote")(546,"p"),Jx(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),Sl(548,"code"),Jx(549,"p-click"),sg(),Jx(550," est\xE1 definido."),sg()()()(),Sl(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),Jx(555," (p-on-disabled)"),Wl(556,"br"),sg()()(),Sl(557,"td",22)(558,"code",30),Jx(559,"EventEmitter"),sg()(),Sl(560,"td",24),Jx(561,"-"),sg(),Sl(562,"td",25)(563,"em")(564,"strong"),Jx(565,"(opcional)"),sg()(),Sl(566,"p"),Jx(567,"Evento disparado quando a propriedade "),Sl(568,"code"),Jx(569,"p-disabled"),sg(),Jx(570," for alterada."),sg()()(),Sl(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),Jx(575," p-primary"),Wl(576,"br"),sg()()(),Sl(577,"td",22)(578,"code",32),Jx(579,"boolean"),sg()(),Sl(580,"td",24)(581,"p")(582,"code"),Jx(583,"false"),sg()()(),Sl(584,"td",25)(585,"em")(586,"strong"),Jx(587,"(opcional)"),sg()(),Sl(588,"p"),Jx(589,"Op\xE7\xE3o para que o "),Sl(590,"code"),Jx(591,"po-widget"),sg(),Jx(592," fique em destaque."),sg()()(),Sl(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),Jx(597," (p-primary-action)"),Wl(598,"br"),sg()()(),Sl(599,"td",22)(600,"code",30),Jx(601,"EventEmitter"),sg()(),Sl(602,"td",24),Jx(603,"-"),sg(),Sl(604,"td",25)(605,"em")(606,"strong"),Jx(607,"(opcional)"),sg()(),Sl(608,"p"),Jx(609,"Evento disparado ao clicar na a\xE7\xE3o "),Sl(610,"code"),Jx(611,"p-primary-label"),sg(),Jx(612,"."),sg()()(),Sl(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),Jx(617," p-primary-label"),Wl(618,"br"),sg()()(),Sl(619,"td",22)(620,"code",27),Jx(621,"string"),sg()(),Sl(622,"td",24),Jx(623,"-"),sg(),Sl(624,"td",25)(625,"em")(626,"strong"),Jx(627,"(opcional)"),sg()(),Sl(628,"p"),Jx(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),sg()()(),Sl(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),Jx(634," (p-secondary-action)"),Wl(635,"br"),sg()()(),Sl(636,"td",22)(637,"code",30),Jx(638,"EventEmitter"),sg()(),Sl(639,"td",24),Jx(640,"-"),sg(),Sl(641,"td",25)(642,"em")(643,"strong"),Jx(644,"(opcional)"),sg()(),Sl(645,"p"),Jx(646,"Evento disparado ao clicar na a\xE7\xE3o "),Sl(647,"code"),Jx(648,"p-secondary-label"),sg(),Jx(649,"."),sg()()(),Sl(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),Jx(654," p-secondary-label"),Wl(655,"br"),sg()()(),Sl(656,"td",22)(657,"code",27),Jx(658,"string"),sg()(),Sl(659,"td",24),Jx(660,"-"),sg(),Sl(661,"td",25)(662,"em")(663,"strong"),Jx(664,"(opcional)"),sg()(),Sl(665,"p"),Jx(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),sg(),Sl(667,"blockquote")(668,"p"),Jx(669,"Exibida apenas quando "),Sl(670,"code"),Jx(671,"p-primary-label"),sg(),Jx(672," estiver definida."),sg()()()(),Sl(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),Jx(677," (p-setting)"),Wl(678,"br"),sg()()(),Sl(679,"td",22)(680,"code",30),Jx(681,"EventEmitter"),sg()(),Sl(682,"td",24),Jx(683,"-"),sg(),Sl(684,"td",25)(685,"em")(686,"strong"),Jx(687,"(opcional)"),sg()(),Sl(688,"p"),Jx(689,"Evento disparado ao clicar em "),Sl(690,"strong"),Jx(691,"Configura\xE7\xF5es"),sg(),Jx(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),sg()()(),Sl(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),Jx(697," p-size"),Wl(698,"br"),sg()()(),Sl(699,"td",22)(700,"code",27),Jx(701,"string"),sg()(),Sl(702,"td",24)(703,"p")(704,"code"),Jx(705,"medium"),sg()()(),Sl(706,"td",25)(707,"em")(708,"strong"),Jx(709,"(opcional)"),sg()(),Sl(710,"p"),Jx(711,"Define o tamanho dos bot\xF5es do componente:"),sg(),Sl(712,"ul")(713,"li")(714,"code"),Jx(715,"small"),sg(),Jx(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(717,"li")(718,"code"),Jx(719,"medium"),sg(),Jx(720,": altura de 44px."),sg()(),Sl(721,"blockquote")(722,"p"),Jx(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(724,"code"),Jx(725,"medium"),sg(),Jx(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(727,"a",34),Jx(728,"po-theme"),sg(),Jx(729,"."),sg()()()(),Sl(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),Jx(734," p-tag-icon"),Wl(735,"br"),sg()()(),Sl(736,"td",22)(737,"code",27),Jx(738,"string "),sg(),Sl(739,"code",35),Jx(740," TemplateRef<void>"),sg()(),Sl(741,"td",24),Jx(742,"-"),sg(),Sl(743,"td",25)(744,"em")(745,"strong"),Jx(746,"(opcional)"),sg()(),Sl(747,"p"),Jx(748,"Define o \xEDcone exibido ao lado do label da "),Sl(749,"code"),Jx(750,"p-tag"),sg(),Jx(751,"."),sg(),Sl(752,"p"),Jx(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(754,"a",36),Jx(755,"Biblioteca de \xEDcones PO UI"),sg(),Jx(756,", conforme exemplo:"),sg(),Sl(757,"pre")(758,"code"),Jx(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),sg()(),Sl(760,"p"),Jx(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(762,"em"),Jx(763,"Font Awesome"),sg(),Jx(764,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Sl(765,"pre")(766,"code"),Jx(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),sg()(),Sl(768,"p"),Jx(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(770,"code"),Jx(771,"TemplateRef"),sg(),Jx(772,", conforme exemplo abaixo:"),sg(),Sl(773,"pre")(774,"code"),Jx(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),sg()(),Sl(776,"blockquote")(777,"p"),Jx(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(779,"code"),Jx(780,"font-size: inherit"),sg(),Jx(781," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),Jx(786," p-tag"),Wl(787,"br"),sg()()(),Sl(788,"td",22)(789,"code",27),Jx(790,"string"),sg()(),Sl(791,"td",24),Jx(792,"-"),sg(),Sl(793,"td",25)(794,"em")(795,"strong"),Jx(796,"(opcional)"),sg()(),Sl(797,"p"),Jx(798,"Label da tag exibida no header."),sg(),Sl(799,"blockquote")(800,"p"),Jx(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),sg()()()(),Sl(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),Jx(806," p-tag-position"),Wl(807,"br"),sg()()(),Sl(808,"td",22)(809,"code",27),Jx(810,"string"),sg()(),Sl(811,"td",24)(812,"p")(813,"code"),Jx(814,"right"),sg()()(),Sl(815,"td",25)(816,"em")(817,"strong"),Jx(818,"(opcional)"),sg()(),Sl(819,"p"),Jx(820,"Define o posicionamento da "),Sl(821,"code"),Jx(822,"po-tag"),sg(),Jx(823," no cabe\xE7alho do Widget:"),sg(),Sl(824,"ul")(825,"li")(826,"code"),Jx(827,"right"),sg(),Jx(828,": posicionada no canto superior direito do cabe\xE7alho."),sg(),Sl(829,"li")(830,"code"),Jx(831,"top"),sg(),Jx(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),sg(),Sl(833,"li")(834,"code"),Jx(835,"bottom"),sg(),Jx(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),sg()()()(),Sl(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),Jx(841," p-tag-type"),Wl(842,"br"),sg()()(),Sl(843,"td",22)(844,"code",37),Jx(845,"PoTagType "),sg(),Sl(846,"code",27),Jx(847," string"),sg()(),Sl(848,"td",24)(849,"p")(850,"code"),Jx(851,"success"),sg()()(),Sl(852,"td",25)(853,"em")(854,"strong"),Jx(855,"(opcional)"),sg()(),Sl(856,"p"),Jx(857,"Define o tipo da "),Sl(858,"code"),Jx(859,"p-tag"),sg(),Jx(860,", conforme o enum "),Sl(861,"strong"),Jx(862,"PoTagType"),sg(),Jx(863,"."),sg(),Sl(864,"p"),Jx(865,"Valores v\xE1lidos:"),sg(),Sl(866,"ul")(867,"li")(868,"code"),Jx(869,"success"),sg(),Jx(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Sl(871,"li")(872,"code"),Jx(873,"warning"),sg(),Jx(874,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Sl(875,"li")(876,"code"),Jx(877,"danger"),sg(),Jx(878,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Sl(879,"li")(880,"code"),Jx(881,"info"),sg(),Jx(882,": cor azul claro que caracteriza conte\xFAdo informativo."),sg(),Sl(883,"li")(884,"code"),Jx(885,"neutral"),sg(),Jx(886,": cor cinza claro para uso geral."),sg()()()(),Sl(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),Jx(891," p-title"),Wl(892,"br"),sg()()(),Sl(893,"td",22)(894,"code",27),Jx(895,"string"),sg()(),Sl(896,"td",24),Jx(897,"-"),sg(),Sl(898,"td",25)(899,"em")(900,"strong"),Jx(901,"(opcional)"),sg()(),Sl(902,"p"),Jx(903,"T\xEDtulo do componente."),sg(),Sl(904,"blockquote")(905,"p"),Jx(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),sg()()()(),Sl(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),Jx(911," (p-title-action)"),Wl(912,"br"),sg()()(),Sl(913,"td",22)(914,"code",30),Jx(915,"EventEmitter"),sg()(),Sl(916,"td",24),Jx(917,"-"),sg(),Sl(918,"td",25)(919,"em")(920,"strong"),Jx(921,"(opcional)"),sg()(),Sl(922,"p"),Jx(923,"Evento disparado ao clicar no t\xEDtulo definido em "),Sl(924,"code"),Jx(925,"p-title"),sg(),Jx(926,"."),sg()()()(),Sl(927,"h3"),Jx(928,"Interfaces"),sg(),Sl(929,"h4",38)(930,"code",5),Jx(931,"PoPopupAction"),sg()(),Sl(932,"div",2)(933,"p"),Jx(934,"Interface para lista de a\xE7\xF5es do componente."),sg()(),Sl(935,"h4",14),Jx(936,"Propriedades"),sg(),Sl(937,"table",15)(938,"tr",16)(939,"th",17),Jx(940,"Nome"),sg(),Sl(941,"th",17),Jx(942,"Tipo"),sg(),Sl(943,"th",17),Jx(944,"Descri\xE7\xE3o"),sg()(),Sl(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),Jx(949," action"),Wl(950,"br"),sg()()(),Sl(951,"td",22)(952,"code",39),Jx(953,"Function"),sg()(),Sl(954,"td",25)(955,"em")(956,"strong"),Jx(957,"(opcional)"),sg()(),Sl(958,"p"),Jx(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(960,"p"),Jx(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(962,"code"),Jx(963,"subItems"),sg(),Jx(964,"."),sg(),Sl(965,"blockquote")(966,"p"),Jx(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(968,"em"),Jx(969,"bind"),sg(),Jx(970,`:
`),Sl(971,"code"),Jx(972,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),Jx(977," disabled"),Wl(978,"br"),sg()()(),Sl(979,"td",22)(980,"code",32),Jx(981,"boolean "),sg(),Sl(982,"code",39),Jx(983," Function"),sg()(),Sl(984,"td",25)(985,"em")(986,"strong"),Jx(987,"(opcional)"),sg()(),Sl(988,"p"),Jx(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),Jx(994," icon"),Wl(995,"br"),sg()()(),Sl(996,"td",22)(997,"code",27),Jx(998,"string "),sg(),Sl(999,"code",35),Jx(1e3," TemplateRef<void>"),sg()(),Sl(1001,"td",25)(1002,"em")(1003,"strong"),Jx(1004,"(opcional)"),sg()(),Sl(1005,"p"),Jx(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(1007,"p"),Jx(1008,"Aceita \xEDcones da "),Sl(1009,"a",36),Jx(1010,"Biblioteca de \xEDcones"),sg(),Jx(1011,`, fontes externas (ex: Font Awesome)
ou um `),Sl(1012,"code"),Jx(1013,"TemplateRef"),sg(),Jx(1014," para \xEDcones customizados."),sg(),Sl(1015,"pre")(1016,"code"),Jx(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),Jx(1022," label"),Wl(1023,"br"),sg()()(),Sl(1024,"td",22)(1025,"code",27),Jx(1026,"string"),sg()(),Sl(1027,"td",25)(1028,"p"),Jx(1029,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(1030,"p"),Jx(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1032,"code"),Jx(1033,"subItems"),sg(),Jx(1034,"."),sg()()(),Sl(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),Jx(1039," selected"),Wl(1040,"br"),sg()()(),Sl(1041,"td",22)(1042,"code",32),Jx(1043,"boolean"),sg()(),Sl(1044,"td",25)(1045,"em")(1046,"strong"),Jx(1047,"(opcional)"),sg()(),Sl(1048,"p"),Jx(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),Jx(1054," separator"),Wl(1055,"br"),sg()()(),Sl(1056,"td",22)(1057,"code",32),Jx(1058,"boolean"),sg()(),Sl(1059,"td",25)(1060,"em")(1061,"strong"),Jx(1062,"(opcional)"),sg()(),Sl(1063,"p"),Jx(1064,"Atribui uma linha separadora acima do item."),sg()()(),Sl(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),Jx(1069," subItems"),Wl(1070,"br"),sg()()(),Sl(1071,"td",22)(1072,"code",23),Jx(1073,"Array<PoPopupAction>"),sg()(),Sl(1074,"td",25)(1075,"em")(1076,"strong"),Jx(1077,"(opcional)"),sg()(),Sl(1078,"p"),Jx(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(1080,"p"),Jx(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(1082,"blockquote")(1083,"p"),Jx(1084,"As propriedades "),Sl(1085,"code"),Jx(1086,"disabled"),sg(),Jx(1087,", "),Sl(1088,"code"),Jx(1089,"type"),sg(),Jx(1090," e "),Sl(1091,"code"),Jx(1092,"visible"),sg(),Jx(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(1094,"blockquote")(1095,"p"),Jx(1096,"Quando "),Sl(1097,"code"),Jx(1098,"url"),sg(),Jx(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(1100,"blockquote")(1101,"p"),Jx(1102,"Em subn\xEDveis aninhados, o "),Sl(1103,"code"),Jx(1104,"icon"),sg(),Jx(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),Jx(1110," type"),Wl(1111,"br"),sg()()(),Sl(1112,"td",22)(1113,"code",27),Jx(1114,"string"),sg()(),Sl(1115,"td",25)(1116,"em")(1117,"strong"),Jx(1118,"(opcional)"),sg()(),Sl(1119,"p"),Jx(1120,"Define a cor do item."),sg(),Sl(1121,"p"),Jx(1122,"Valores v\xE1lidos:"),sg(),Sl(1123,"ul")(1124,"li")(1125,"code"),Jx(1126,"default"),sg()(),Sl(1127,"li")(1128,"code"),Jx(1129,"danger"),sg()()()()(),Sl(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),Jx(1134," url"),Wl(1135,"br"),sg()()(),Sl(1136,"td",22)(1137,"code",27),Jx(1138,"string"),sg()(),Sl(1139,"td",25)(1140,"em")(1141,"strong"),Jx(1142,"(opcional)"),sg()(),Sl(1143,"p"),Jx(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(1145,"p"),Jx(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1147,"code"),Jx(1148,"url"),sg(),Jx(1149," \xE9 informada em um agrupador, o clique "),Sl(1150,"strong"),Jx(1151,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(1153,"blockquote")(1154,"p"),Jx(1155,"Quando informada, tem prioridade sobre a propriedade "),Sl(1156,"code"),Jx(1157,"action"),sg(),Jx(1158,"."),sg()()()(),Sl(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),Jx(1163," visible"),Wl(1164,"br"),sg()()(),Sl(1165,"td",22)(1166,"code",32),Jx(1167,"boolean "),sg(),Sl(1168,"code",39),Jx(1169," Function"),sg()(),Sl(1170,"td",25)(1171,"em")(1172,"strong"),Jx(1173,"(opcional)"),sg()(),Sl(1174,"p"),Jx(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Sl(1176,"h4",38)(1177,"code",5),Jx(1178,"PoWidgetAvatar"),sg()(),Sl(1179,"div",2)(1180,"p"),Jx(1181,"Interface para defini\xE7\xE3o do avatar no "),Sl(1182,"code"),Jx(1183,"po-widget"),sg(),Jx(1184,"."),sg()(),Sl(1185,"h4",14),Jx(1186,"Propriedades"),sg(),Sl(1187,"table",15)(1188,"tr",16)(1189,"th",17),Jx(1190,"Nome"),sg(),Sl(1191,"th",17),Jx(1192,"Tipo"),sg(),Sl(1193,"th",17),Jx(1194,"Descri\xE7\xE3o"),sg()(),Sl(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),Jx(1199," customTemplate"),Wl(1200,"br"),sg()()(),Sl(1201,"td",22)(1202,"code",40),Jx(1203,"TemplateRef<any>"),sg()(),Sl(1204,"td",25)(1205,"em")(1206,"strong"),Jx(1207,"(opcional)"),sg()(),Sl(1208,"p"),Jx(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),sg(),Sl(1210,"pre")(1211,"code"),Jx(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),sg()()()(),Sl(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),Jx(1217," size"),Wl(1218,"br"),sg()()(),Sl(1219,"td",22)(1220,"code",27),Jx(1221,"string"),sg()(),Sl(1222,"td",25)(1223,"em")(1224,"strong"),Jx(1225,"(opcional)"),sg()(),Sl(1226,"p"),Jx(1227,"Tamanho de exibi\xE7\xE3o do componente "),Sl(1228,"code"),Jx(1229,"po-avatar"),sg(),Jx(1230,"."),sg(),Sl(1231,"p"),Jx(1232,"Valores v\xE1lidos:"),sg(),Sl(1233,"ul")(1234,"li")(1235,"code"),Jx(1236,"xs"),sg(),Jx(1237," (24x24)"),sg(),Sl(1238,"li")(1239,"code"),Jx(1240,"sm"),sg(),Jx(1241," (32x32)"),sg(),Sl(1242,"li")(1243,"code"),Jx(1244,"md"),sg(),Jx(1245," (64x64)"),sg(),Sl(1246,"li")(1247,"code"),Jx(1248,"lg"),sg(),Jx(1249," (96x96)"),sg(),Sl(1250,"li")(1251,"code"),Jx(1252,"xl"),sg(),Jx(1253," (144x144)"),sg()()()(),Sl(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),Jx(1258," src"),Wl(1259,"br"),sg()()(),Sl(1260,"td",22)(1261,"code",27),Jx(1262,"string"),sg()(),Sl(1263,"td",25)(1264,"em")(1265,"strong"),Jx(1266,"(opcional)"),sg()(),Sl(1267,"p"),Jx(1268,"Fonte da imagem que pode ser um caminho local ("),Sl(1269,"code"),Jx(1270,"./assets/images/logo-black-small.png"),sg(),Jx(1271,`)
ou um servidor externo (`),Sl(1272,"code"),Jx(1273,"https://po-ui.io/assets/images/logo-black-small.png"),sg(),Jx(1274,")."),sg()()(),Sl(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),Jx(1279," widthCustomTemplate"),Wl(1280,"br"),sg()()(),Sl(1281,"td",22)(1282,"code",27),Jx(1283,"string"),sg()(),Sl(1284,"td",25)(1285,"em")(1286,"strong"),Jx(1287,"(opcional)"),sg()(),Sl(1288,"p"),Jx(1289,"Define a largura em porcentagem do "),Sl(1290,"code"),Jx(1291,"customTemplate"),sg(),Jx(1292,"."),sg(),Sl(1293,"p"),Jx(1294,"O valor m\xE1ximo aceito \xE9 "),Sl(1295,"code"),Jx(1296,"50%"),sg(),Jx(1297,"."),sg()()()(),Sl(1298,"h3"),Jx(1299,"Enums"),sg(),Sl(1300,"h4",4)(1301,"code",5),Jx(1302,"PoButtonKind"),sg()(),Sl(1303,"div",2)(1304,"p"),Jx(1305,"Estilos dispon\xEDveis do button."),sg()(),Sl(1306,"h4",14),Jx(1307,"Propriedades"),sg(),Sl(1308,"table",15)(1309,"tr",16)(1310,"th",17),Jx(1311,"Nome"),sg(),Sl(1312,"th",17),Jx(1313,"Descri\xE7\xE3o"),sg()(),Sl(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),Jx(1318," primary"),Wl(1319,"br"),sg()()(),Sl(1320,"td",25)(1321,"p"),Jx(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),sg()()(),Sl(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),Jx(1327," secondary"),Wl(1328,"br"),sg()()(),Sl(1329,"td",25)(1330,"p"),Jx(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),sg()()(),Sl(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),Jx(1336," tertiary"),Wl(1337,"br"),sg()()(),Sl(1338,"td",25)(1339,"p"),Jx(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var Ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-widget-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ye,we,_e,Me,De],encapsulation:2})}return o})();var tt=[{path:"",component:Ae}],We=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[pL.forChild(tt),pL]})}return o})();var Ot=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,We]})}return o})();
export{Ot as DocPoWidgetModule};