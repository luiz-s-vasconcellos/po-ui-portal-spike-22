import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,ba as _Ne,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,aJ as qhe,b5 as $he,c9 as Yhe,aB as Sx,aM as ww,aN as r0,bM as vN,aO as Ew,aP as o0,bF as Fw,b6 as Yo,b7 as E3,av as Yl,aw as uo,ax as fo,cy as J3e,a2 as JE,aQ as _x,aR as yx,bd as Fx,aS as Dx,a3 as lNe,a7 as gN,J as yw,aD as Ky,aT as sN,aE as Xy,bR as MN}from'./main-P7IRR5MZ.js';var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,"po-widget");},dependencies:[_Ne],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Widget Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-widget></po-widget>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-widget-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Le,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,fe],encapsulation:2,changeDetection:1})}return o})();var qe=(o,k)=>({src:o,size:k}),Ce=(()=>{class o{poNotification=f(Yp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=Sx();Tl(0,"div",1)(1,"po-widget",2),ht("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),iN(2),sg()(),Gl(3,"po-divider"),Tl(4,"div",1),Gl(5,"po-info",3),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"po-input",4),ww("ngModelChange",function(r){return Ky(m),sN(i.title,r)||(i.title=r),Xy(r)}),sg(),r0(),Tl(10,"po-input",5),ww("ngModelChange",function(r){return Ky(m),sN(i.help,r)||(i.help=r),Xy(r)}),sg(),r0(),Tl(11,"po-number",6),ww("ngModelChange",function(r){return Ky(m),sN(i.height,r)||(i.height=r),Xy(r)}),sg(),r0(),Tl(12,"div",1)(13,"po-input",7),ww("ngModelChange",function(r){return Ky(m),sN(i.actionPopup.action,r)||(i.actionPopup.action=r),Xy(r)}),sg(),r0(),Tl(14,"po-input",8),ww("ngModelChange",function(r){return Ky(m),sN(i.actionPopup.label,r)||(i.actionPopup.label=r),Xy(r)}),sg(),r0(),sg(),Tl(15,"div",1)(16,"po-button",9),ht("p-click",function(){return i.addAction(i.actionPopup)}),sg()(),Tl(17,"po-input",10),ww("ngModelChange",function(r){return Ky(m),sN(i.background,r)||(i.background=r),Xy(r)}),sg(),r0(),Tl(18,"po-input",11),ww("ngModelChange",function(r){return Ky(m),sN(i.primaryLabel,r)||(i.primaryLabel=r),Xy(r)}),sg(),r0(),Tl(19,"po-input",12),ww("ngModelChange",function(r){return Ky(m),sN(i.secondaryLabel,r)||(i.secondaryLabel=r),Xy(r)}),sg(),r0(),Tl(20,"div",13)(21,"po-input",14),ww("ngModelChange",function(r){return Ky(m),sN(i.tagLabel,r)||(i.tagLabel=r),Xy(r)}),sg(),r0(),Tl(22,"po-select",15),ww("ngModelChange",function(r){return Ky(m),sN(i.tagIcon,r)||(i.tagIcon=r),Xy(r)}),sg(),r0(),Tl(23,"po-select",16),ww("ngModelChange",function(r){return Ky(m),sN(i.tagPosition,r)||(i.tagPosition=r),Xy(r)}),sg(),r0(),sg(),Tl(24,"div",1)(25,"po-input",17),ww("ngModelChange",function(r){return Ky(m),sN(i.avatarSrc,r)||(i.avatarSrc=r),Xy(r)}),sg(),r0(),Tl(26,"po-select",18),ww("ngModelChange",function(r){return Ky(m),sN(i.avatarSize,r)||(i.avatarSize=r),Xy(r)}),sg(),r0(),sg(),Tl(27,"div",1)(28,"po-checkbox-group",19),ww("ngModelChange",function(r){return Ky(m),sN(i.properties,r)||(i.properties=r),Xy(r)}),sg(),r0(),sg(),Tl(29,"po-textarea",20),ww("ngModelChange",function(r){return Ky(m),sN(i.content,r)||(i.content=r),Xy(r)}),sg(),r0(),Tl(30,"div",1)(31,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),nw("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",vN(36,qe,i.avatarSrc,i.avatarSize)),Vp(),fg(" ",i.content," "),Vp(3),nw("p-value",i.action),Vp(4),Ew("ngModel",i.title),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.height),o0(),Vp(2),Ew("ngModel",i.actionPopup.action),o0(),Vp(),Ew("ngModel",i.actionPopup.label),o0(),Vp(2),nw("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Vp(),Ew("ngModel",i.background),o0(),Vp(),Ew("ngModel",i.primaryLabel),o0(),Vp(),Ew("ngModel",i.secondaryLabel),o0(),Vp(2),Ew("ngModel",i.tagLabel),o0(),Vp(),Ew("ngModel",i.tagIcon),nw("p-options",i.iconList),o0(),Vp(),Ew("ngModel",i.tagPosition),nw("p-options",i.listTagPosition),o0(),Vp(2),Ew("ngModel",i.avatarSrc),o0(),Vp(),Ew("ngModel",i.avatarSize),nw("p-options",i.listAvatarSize),o0(),Vp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.content),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Hhe,qhe,$he,Yhe,_Ne],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Widget Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-widget-labs"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Be,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ce],encapsulation:2,changeDetection:1})}return o})();var Ie=["detailsModal"],Pe=(()=>{class o{poNotification=f(Yp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&Yl(Ie,7),l&2){let m;uo(m=fo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(Tl(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),iN(4,"Sales order"),sg(),Tl(5,"div"),iN(6,"Scheduled to: "),Tl(7,"strong"),iN(8,"05/04/2018"),sg()(),Tl(9,"div",3),Gl(10,"po-button",4),Tl(11,"po-button",5),ht("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),sg()()(),Tl(12,"po-widget",6),ht("p-click",function(){return i.openModal("account")}),Tl(13,"div",7),iN(14,"$2.818,29"),sg(),Tl(15,"div",8),iN(16,"Last updated at 18:34"),sg()(),Tl(17,"po-widget",9),ht("p-primary-action",function(){return i.openModal("account")}),Tl(18,"div",10),iN(19,"$5.000,00"),sg(),Tl(20,"div",8),iN(21,"Last updated at 08:20"),sg()()(),Tl(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),iN(27,"Enter the user routine"),sg()()(),Tl(28,"div",15),Gl(29,"po-multiselect",16),sg()(),Tl(30,"po-widget",17)(31,"div",7),iN(32,"Credit card"),sg(),Tl(33,"div",8),iN(34,"MasterCard - 5500 0000 0000 0004"),sg()(),Tl(35,"po-widget",18),ht("p-primary-action",function(){return i.openModal("savings")}),Tl(36,"div",7),iN(37,"$2.000,00"),sg(),Tl(38,"div",8),iN(39,"05/03/2018"),sg()()()(),Tl(40,"po-modal",19,0),Gl(42,"po-table",20),sg()),l&2&&(Vp(2),nw("p-height",190),Vp(10),nw("p-height",190),Vp(5),nw("p-height",190),Vp(6),nw("p-height",180),Vp(6),nw("p-options",i.options),Vp(),nw("p-actions",i.myActions)("p-height",180),Vp(5),nw("p-height",180)("p-primary",true),Vp(5),nw("p-title",i.titleDetailsModal),Vp(2),nw("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Qt,Fw,Yo,E3,_Ne],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Widget - Finance dashboard"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row sample-finance-row-gap">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-finance-row-gap {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-widget-finance-dashboard"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Pe],encapsulation:2,changeDetection:1})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:"40%"}),He=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),je=o=>({header:o}),Je=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Gl(0,"po-chart",8),o&2&&nw("p-options",mN(3,je,gN(2,He)))("p-series",vN(7,Qe,gN(5,Je),gN(6,Ge)));}function Xe(o,k){if(o&1&&(Tl(0,"li"),iN(1),sg()),o&2){let p=k.$implicit;Vp(),yw(p);}}var De=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&Yl(Yo,7),l&2){let m;uo(m=fo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(Tl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),Gl(2,"po-info",3),sg(),Tl(3,"po-widget",4)(4,"div"),iN(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),Tl(6,"div",5)(7,"ul")(8,"li"),iN(9,"Out-of-the-Box"),sg(),Tl(10,"li"),iN(11,"Standardized and Opinion-Based Architecture"),sg(),Tl(12,"li"),iN(13,"Next Generation Reactivity (Signals)"),sg(),Tl(14,"li"),iN(15,"Focus on Enterprise and Security"),sg()()()(),JE(16,Ke,1,10,"ng-template",null,0,MN),sg()(),Tl(18,"po-modal",6),iN(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),Tl(20,"div",7)(21,"ul"),_x(22,Xe,2,1,"li",null,yx),sg()()()),l&2){let m=Fx(17);Vp(),nw("p-help",i.help),Vp(),nw("p-label",i.label)("p-value",i.value),Vp(),nw("p-avatar",mN(4,Ue,m)),Vp(19),Dx(i.technologies);}},dependencies:[J3e,Yhe,Yo,_Ne],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Widget - Card"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-widget-card/sample-po-widget-card.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-widget-card"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-widget"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoWidgetComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-widget"),sg(),iN(17," \xE9 recomendado para exibi\xE7\xE3o de "),Tl(18,"em"),iN(19,"dashboards"),sg(),iN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),sg(),Tl(21,"p"),iN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),sg(),Tl(23,"p"),iN(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),Tl(25,"a",6),iN(26,"Grid System"),sg(),iN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),sg(),Tl(28,"h4"),iN(29,"Boas pr\xE1ticas"),sg(),Tl(30,"p"),iN(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),Tl(32,"code"),iN(33,"18.75rem"),sg(),iN(34," no componente."),sg(),Tl(35,"h4"),iN(36,"Acessibilidade tratada no componente"),sg(),Tl(37,"p"),iN(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),sg(),Tl(39,"ul")(40,"li"),iN(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),sg(),Tl(42,"li"),iN(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),Tl(44,"a",7),iN(45,"4.1.2: Name, Role, Value"),sg(),iN(46,")"),sg(),Tl(47,"li"),iN(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),Tl(49,"a",8),iN(50,"2.4.12: Focus Appearance"),sg(),iN(51,")"),sg(),Tl(52,"li"),iN(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),Tl(54,"a",9),iN(55,"2.4.1 - Keyboard"),sg(),iN(56,")"),sg()(),Tl(57,"h4"),iN(58,"Tokens customiz\xE1veis"),sg(),Tl(59,"p"),iN(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(61,"blockquote")(62,"p"),iN(63,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(64,"a",10),iN(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(66,"."),sg()(),Tl(67,"table")(68,"thead")(69,"tr")(70,"th"),iN(71,"Propriedade"),sg(),Tl(72,"th"),iN(73,"Descri\xE7\xE3o"),sg(),Tl(74,"th"),iN(75,"Valor Padr\xE3o"),sg()()(),Tl(76,"tbody")(77,"tr")(78,"td")(79,"strong"),iN(80,"Default Values"),sg()(),Gl(81,"td")(82,"td"),sg(),Tl(83,"tr")(84,"td")(85,"code"),iN(86,"--font-family"),sg()(),Tl(87,"td"),iN(88,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(89,"td")(90,"code"),iN(91,"var(--font-family-theme) "),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),iN(95,"--font-size"),sg()(),Tl(96,"td"),iN(97,"Tamanho da fonte"),sg(),Tl(98,"td")(99,"code"),iN(100,"var(--font-size-sm)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),iN(104,"--font-weight"),sg()(),Tl(105,"td"),iN(106,"Peso da fonte"),sg(),Tl(107,"td")(108,"code"),iN(109,"var(--font-weight-bold)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),iN(113,"--font-color"),sg()(),Tl(114,"td"),iN(115,"Cor da fonte"),sg(),Tl(116,"td")(117,"code"),iN(118,"var(--color-neutral-dark-95)"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),iN(122,"--padding"),sg(),iN(123," - "),Tl(124,"code"),iN(125,"@deprecated 21.x.x"),sg()(),Tl(126,"td"),iN(127,"Preenchimento do componente"),sg(),Tl(128,"td")(129,"code"),iN(130,"1rem"),sg()()(),Tl(131,"tr")(132,"td")(133,"code"),iN(134,"--padding-header"),sg()(),Tl(135,"td"),iN(136,"Preenchimento do header"),sg(),Tl(137,"td")(138,"code"),iN(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),iN(143,"--padding-body"),sg()(),Tl(144,"td"),iN(145,"Preenchimento do body"),sg(),Tl(146,"td")(147,"code"),iN(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),sg()()(),Tl(149,"tr")(150,"td")(151,"code"),iN(152,"--padding-avatar"),sg()(),Tl(153,"td"),iN(154,"Preenchimento do avatar"),sg(),Tl(155,"td")(156,"code"),iN(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),sg()()(),Tl(158,"tr")(159,"td")(160,"code"),iN(161,"--padding-footer"),sg()(),Tl(162,"td"),iN(163,"Preenchimento do footer"),sg(),Tl(164,"td")(165,"code"),iN(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),iN(170,"--border-radius"),sg()(),Tl(171,"td"),iN(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(173,"td")(174,"code"),iN(175,"var(--border-radius-md)"),sg()()(),Tl(176,"tr")(177,"td")(178,"code"),iN(179,"--border-width"),sg()(),Tl(180,"td"),iN(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(182,"td")(183,"code"),iN(184,"var(--border-width-sm)"),sg()()(),Tl(185,"tr")(186,"td")(187,"code"),iN(188,"--border-color"),sg()(),Tl(189,"td"),iN(190,"Cor da borda"),sg(),Tl(191,"td")(192,"code"),iN(193,"var(--color-neutral-light-20)"),sg()()(),Tl(194,"tr")(195,"td")(196,"code"),iN(197,"--background"),sg()(),Tl(198,"td"),iN(199,"Cor de background"),sg(),Tl(200,"td")(201,"code"),iN(202,"var(--color-neutral-light-00)"),sg()()(),Tl(203,"tr")(204,"td")(205,"code"),iN(206,"--shadow"),sg()(),Tl(207,"td"),iN(208,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(209,"td")(210,"code"),iN(211,"var(--shadow-md)"),sg()()(),Tl(212,"tr")(213,"td")(214,"strong"),iN(215,"Hover"),sg()(),Gl(216,"td")(217,"td"),sg(),Tl(218,"tr")(219,"td")(220,"code"),iN(221,"--border-color-hover"),sg()(),Tl(222,"td"),iN(223,"Cor da borda no estado hover"),sg(),Tl(224,"td")(225,"code"),iN(226,"var(--color-action-hover)"),sg()()(),Tl(227,"tr")(228,"td")(229,"strong"),iN(230,"Focused"),sg()(),Gl(231,"td")(232,"td"),sg(),Tl(233,"tr")(234,"td")(235,"code"),iN(236,"--color-focused"),sg()(),Tl(237,"td"),iN(238,"Cor principal no estado de focus"),sg(),Tl(239,"td")(240,"code"),iN(241,"var(--color-action-default)"),sg()()(),Tl(242,"tr")(243,"td")(244,"code"),iN(245,"--outline-color-focused"),sg(),iN(246," \xA0"),sg(),Tl(247,"td"),iN(248,"Cor do outline do estado de focus"),sg(),Tl(249,"td")(250,"code"),iN(251,"var(--color-action-focus)"),sg()()()()()(),Tl(252,"div",11)(253,"h4",12),iN(254,"Seletor"),sg(),Tl(255,"pre",13),iN(256,`<po-widget
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
`),sg()(),Tl(257,"h4",14),iN(258,"Propriedades"),sg(),Tl(259,"table",15)(260,"tr",16)(261,"th",17),iN(262,"Nome"),sg(),Tl(263,"th",17),iN(264,"Tipo"),sg(),Tl(265,"th",17),iN(266,"Padr\xE3o"),sg(),Tl(267,"th",17),iN(268,"Descri\xE7\xE3o"),sg()(),Tl(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),iN(273," p-actions"),Gl(274,"br"),sg()()(),Tl(275,"td",22)(276,"code",23),iN(277,"Array<PoPopupAction>"),sg()(),Tl(278,"td",24),iN(279,"-"),sg(),Tl(280,"td",25)(281,"em")(282,"strong"),iN(283,"(opcional)"),sg()(),Tl(284,"p"),iN(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Tl(286,"code"),iN(287,"PoPopupAction"),sg(),iN(288,"."),sg()()(),Tl(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),iN(293," p-avatar"),Gl(294,"br"),sg()()(),Tl(295,"td",22)(296,"code",26),iN(297,"PoWidgetAvatar"),sg()(),Tl(298,"td",24),iN(299,"-"),sg(),Tl(300,"td",25)(301,"em")(302,"strong"),iN(303,"(opcional)"),sg()(),Tl(304,"p"),iN(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),sg()()(),Tl(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),iN(310," p-background"),Gl(311,"br"),sg()()(),Tl(312,"td",22)(313,"code",27),iN(314,"string"),sg()(),Tl(315,"td",24),iN(316,"-"),sg(),Tl(317,"td",25)(318,"em")(319,"strong"),iN(320,"(opcional)"),sg()(),Tl(321,"p"),iN(322,"Define uma imagem de fundo."),sg(),Tl(323,"blockquote")(324,"p"),iN(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),Tl(326,"code"),iN(327,"p-widget"),sg(),iN(328,`,
pode-se utilizar a propriedade `),Tl(329,"code"),iN(330,"p-primary"),sg(),iN(331," em conjunto para que os textos fiquem na cor branca."),sg()()()(),Tl(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),iN(336," (p-click)"),Gl(337,"br"),sg()()(),Tl(338,"td",22)(339,"code",30),iN(340,"EventEmitter"),sg()(),Tl(341,"td",24),iN(342,"-"),sg(),Tl(343,"td",25)(344,"em")(345,"strong"),iN(346,"(opcional)"),sg()(),Tl(347,"p"),iN(348,"Evento disparado quando o usu\xE1rio clicar no componente."),sg(),Tl(349,"blockquote")(350,"p"),iN(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),sg()()()(),Tl(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),iN(356," p-danger-primary-action"),Gl(357,"br"),sg()()(),Tl(358,"td",22)(359,"code",31),iN(360,"false"),sg()(),Tl(361,"td",24)(362,"p")(363,"code"),iN(364,"false"),sg()()(),Tl(365,"td",25)(366,"em")(367,"strong"),iN(368,"(opcional)"),sg()(),Tl(369,"p"),iN(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Tl(371,"code"),iN(372,"p-primary-label"),sg(),iN(373," ativar\xE1 o modo "),Tl(374,"code"),iN(375,"danger"),sg(),iN(376,"."),sg(),Tl(377,"blockquote")(378,"p"),iN(379,"Incompat\xEDvel com o tipo "),Tl(380,"strong"),iN(381,"tertiary"),sg(),iN(382," da propriedade "),Tl(383,"code"),iN(384,"p-kind-primary-action"),sg(),iN(385,"."),sg()()()(),Tl(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),iN(390," p-danger-secondary-action"),Gl(391,"br"),sg()()(),Tl(392,"td",22)(393,"code",31),iN(394,"false"),sg()(),Tl(395,"td",24)(396,"p")(397,"code"),iN(398,"false"),sg()()(),Tl(399,"td",25)(400,"em")(401,"strong"),iN(402,"(opcional)"),sg()(),Tl(403,"p"),iN(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Tl(405,"code"),iN(406,"p-secondary-label"),sg(),iN(407," ativar\xE1 o modo "),Tl(408,"code"),iN(409,"danger"),sg(),iN(410,"."),sg(),Tl(411,"blockquote")(412,"p"),iN(413,"Incompat\xEDvel com o tipo "),Tl(414,"strong"),iN(415,"tertiary"),sg(),iN(416," da propriedade "),Tl(417,"code"),iN(418,"p-kind-primary-action"),sg(),iN(419,"."),sg()()()(),Tl(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),iN(424," p-disabled"),Gl(425,"br"),sg()()(),Tl(426,"td",22)(427,"code",32),iN(428,"boolean"),sg()(),Tl(429,"td",24)(430,"p")(431,"code"),iN(432,"false"),sg()()(),Tl(433,"td",25)(434,"em")(435,"strong"),iN(436,"(opcional)"),sg()(),Tl(437,"p"),iN(438,"Desabilita o componente."),sg()()(),Tl(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),iN(443," p-height"),Gl(444,"br"),sg()()(),Tl(445,"td",22)(446,"code",33),iN(447,"number"),sg()(),Tl(448,"td",24),iN(449,"-"),sg(),Tl(450,"td",25)(451,"em")(452,"strong"),iN(453,"(opcional)"),sg()(),Tl(454,"p"),iN(455,"Define a altura do componente."),sg(),Tl(456,"blockquote")(457,"p"),iN(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),sg()()()(),Tl(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),iN(463," p-help"),Gl(464,"br"),sg()()(),Tl(465,"td",22)(466,"code",27),iN(467,"string"),sg()(),Tl(468,"td",24),iN(469,"-"),sg(),Tl(470,"td",25)(471,"em")(472,"strong"),iN(473,"(opcional)"),sg()(),Tl(474,"p"),iN(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),sg()()(),Tl(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),iN(480," p-kind-primary-action"),Gl(481,"br"),sg()()(),Tl(482,"td",22)(483,"code",27),iN(484,"string"),sg()(),Tl(485,"td",24)(486,"p")(487,"code"),iN(488,"tertiary"),sg()()(),Tl(489,"td",25)(490,"em")(491,"strong"),iN(492,"(opcional)"),sg()(),Tl(493,"p"),iN(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Tl(495,"code"),iN(496,"p-primary-label"),sg(),iN(497,", conforme o enum "),Tl(498,"code"),iN(499,"PoButtonKind"),sg(),iN(500,"."),sg()()(),Tl(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),iN(505," p-kind-secondary-action"),Gl(506,"br"),sg()()(),Tl(507,"td",22)(508,"code",27),iN(509,"string"),sg()(),Tl(510,"td",24)(511,"p")(512,"code"),iN(513,"tertiary"),sg()()(),Tl(514,"td",25)(515,"em")(516,"strong"),iN(517,"(opcional)"),sg()(),Tl(518,"p"),iN(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Tl(520,"code"),iN(521,"p-secondary-label"),sg(),iN(522,", conforme o enum "),Tl(523,"code"),iN(524,"PoButtonKind"),sg(),iN(525,"."),sg()()(),Tl(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),iN(530," p-no-shadow"),Gl(531,"br"),sg()()(),Tl(532,"td",22)(533,"code",32),iN(534,"boolean"),sg()(),Tl(535,"td",24)(536,"p")(537,"code"),iN(538,"true"),sg()()(),Tl(539,"td",25)(540,"em")(541,"strong"),iN(542,"(opcional)"),sg()(),Tl(543,"p"),iN(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),sg(),Tl(545,"blockquote")(546,"p"),iN(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),Tl(548,"code"),iN(549,"p-click"),sg(),iN(550," est\xE1 definido."),sg()()()(),Tl(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),iN(555," (p-on-disabled)"),Gl(556,"br"),sg()()(),Tl(557,"td",22)(558,"code",30),iN(559,"EventEmitter"),sg()(),Tl(560,"td",24),iN(561,"-"),sg(),Tl(562,"td",25)(563,"em")(564,"strong"),iN(565,"(opcional)"),sg()(),Tl(566,"p"),iN(567,"Evento disparado quando a propriedade "),Tl(568,"code"),iN(569,"p-disabled"),sg(),iN(570," for alterada."),sg()()(),Tl(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),iN(575," p-primary"),Gl(576,"br"),sg()()(),Tl(577,"td",22)(578,"code",32),iN(579,"boolean"),sg()(),Tl(580,"td",24)(581,"p")(582,"code"),iN(583,"false"),sg()()(),Tl(584,"td",25)(585,"em")(586,"strong"),iN(587,"(opcional)"),sg()(),Tl(588,"p"),iN(589,"Op\xE7\xE3o para que o "),Tl(590,"code"),iN(591,"po-widget"),sg(),iN(592," fique em destaque."),sg()()(),Tl(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),iN(597," (p-primary-action)"),Gl(598,"br"),sg()()(),Tl(599,"td",22)(600,"code",30),iN(601,"EventEmitter"),sg()(),Tl(602,"td",24),iN(603,"-"),sg(),Tl(604,"td",25)(605,"em")(606,"strong"),iN(607,"(opcional)"),sg()(),Tl(608,"p"),iN(609,"Evento disparado ao clicar na a\xE7\xE3o "),Tl(610,"code"),iN(611,"p-primary-label"),sg(),iN(612,"."),sg()()(),Tl(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),iN(617," p-primary-label"),Gl(618,"br"),sg()()(),Tl(619,"td",22)(620,"code",27),iN(621,"string"),sg()(),Tl(622,"td",24),iN(623,"-"),sg(),Tl(624,"td",25)(625,"em")(626,"strong"),iN(627,"(opcional)"),sg()(),Tl(628,"p"),iN(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),sg()()(),Tl(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),iN(634," (p-secondary-action)"),Gl(635,"br"),sg()()(),Tl(636,"td",22)(637,"code",30),iN(638,"EventEmitter"),sg()(),Tl(639,"td",24),iN(640,"-"),sg(),Tl(641,"td",25)(642,"em")(643,"strong"),iN(644,"(opcional)"),sg()(),Tl(645,"p"),iN(646,"Evento disparado ao clicar na a\xE7\xE3o "),Tl(647,"code"),iN(648,"p-secondary-label"),sg(),iN(649,"."),sg()()(),Tl(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),iN(654," p-secondary-label"),Gl(655,"br"),sg()()(),Tl(656,"td",22)(657,"code",27),iN(658,"string"),sg()(),Tl(659,"td",24),iN(660,"-"),sg(),Tl(661,"td",25)(662,"em")(663,"strong"),iN(664,"(opcional)"),sg()(),Tl(665,"p"),iN(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),sg(),Tl(667,"blockquote")(668,"p"),iN(669,"Exibida apenas quando "),Tl(670,"code"),iN(671,"p-primary-label"),sg(),iN(672," estiver definida."),sg()()()(),Tl(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),iN(677," (p-setting)"),Gl(678,"br"),sg()()(),Tl(679,"td",22)(680,"code",30),iN(681,"EventEmitter"),sg()(),Tl(682,"td",24),iN(683,"-"),sg(),Tl(684,"td",25)(685,"em")(686,"strong"),iN(687,"(opcional)"),sg()(),Tl(688,"p"),iN(689,"Evento disparado ao clicar em "),Tl(690,"strong"),iN(691,"Configura\xE7\xF5es"),sg(),iN(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),sg()()(),Tl(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),iN(697," p-size"),Gl(698,"br"),sg()()(),Tl(699,"td",22)(700,"code",27),iN(701,"string"),sg()(),Tl(702,"td",24)(703,"p")(704,"code"),iN(705,"medium"),sg()()(),Tl(706,"td",25)(707,"em")(708,"strong"),iN(709,"(opcional)"),sg()(),Tl(710,"p"),iN(711,"Define o tamanho dos bot\xF5es do componente:"),sg(),Tl(712,"ul")(713,"li")(714,"code"),iN(715,"small"),sg(),iN(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(717,"li")(718,"code"),iN(719,"medium"),sg(),iN(720,": altura de 44px."),sg()(),Tl(721,"blockquote")(722,"p"),iN(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(724,"code"),iN(725,"medium"),sg(),iN(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(727,"a",34),iN(728,"po-theme"),sg(),iN(729,"."),sg()()()(),Tl(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),iN(734," p-tag-icon"),Gl(735,"br"),sg()()(),Tl(736,"td",22)(737,"code",27),iN(738,"string "),sg(),Tl(739,"code",35),iN(740," TemplateRef<void>"),sg()(),Tl(741,"td",24),iN(742,"-"),sg(),Tl(743,"td",25)(744,"em")(745,"strong"),iN(746,"(opcional)"),sg()(),Tl(747,"p"),iN(748,"Define o \xEDcone exibido ao lado do label da "),Tl(749,"code"),iN(750,"p-tag"),sg(),iN(751,"."),sg(),Tl(752,"p"),iN(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(754,"a",36),iN(755,"Biblioteca de \xEDcones PO UI"),sg(),iN(756,", conforme exemplo:"),sg(),Tl(757,"pre")(758,"code"),iN(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),sg()(),Tl(760,"p"),iN(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(762,"em"),iN(763,"Font Awesome"),sg(),iN(764,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Tl(765,"pre")(766,"code"),iN(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),sg()(),Tl(768,"p"),iN(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(770,"code"),iN(771,"TemplateRef"),sg(),iN(772,", conforme exemplo abaixo:"),sg(),Tl(773,"pre")(774,"code"),iN(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),sg()(),Tl(776,"blockquote")(777,"p"),iN(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(779,"code"),iN(780,"font-size: inherit"),sg(),iN(781," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),iN(786," p-tag"),Gl(787,"br"),sg()()(),Tl(788,"td",22)(789,"code",27),iN(790,"string"),sg()(),Tl(791,"td",24),iN(792,"-"),sg(),Tl(793,"td",25)(794,"em")(795,"strong"),iN(796,"(opcional)"),sg()(),Tl(797,"p"),iN(798,"Label da tag exibida no header."),sg(),Tl(799,"blockquote")(800,"p"),iN(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),sg()()()(),Tl(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),iN(806," p-tag-position"),Gl(807,"br"),sg()()(),Tl(808,"td",22)(809,"code",27),iN(810,"string"),sg()(),Tl(811,"td",24)(812,"p")(813,"code"),iN(814,"right"),sg()()(),Tl(815,"td",25)(816,"em")(817,"strong"),iN(818,"(opcional)"),sg()(),Tl(819,"p"),iN(820,"Define o posicionamento da "),Tl(821,"code"),iN(822,"po-tag"),sg(),iN(823," no cabe\xE7alho do Widget:"),sg(),Tl(824,"ul")(825,"li")(826,"code"),iN(827,"right"),sg(),iN(828,": posicionada no canto superior direito do cabe\xE7alho."),sg(),Tl(829,"li")(830,"code"),iN(831,"top"),sg(),iN(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),sg(),Tl(833,"li")(834,"code"),iN(835,"bottom"),sg(),iN(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),sg()()()(),Tl(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),iN(841," p-tag-type"),Gl(842,"br"),sg()()(),Tl(843,"td",22)(844,"code",37),iN(845,"PoTagType "),sg(),Tl(846,"code",27),iN(847," string"),sg()(),Tl(848,"td",24)(849,"p")(850,"code"),iN(851,"success"),sg()()(),Tl(852,"td",25)(853,"em")(854,"strong"),iN(855,"(opcional)"),sg()(),Tl(856,"p"),iN(857,"Define o tipo da "),Tl(858,"code"),iN(859,"p-tag"),sg(),iN(860,", conforme o enum "),Tl(861,"strong"),iN(862,"PoTagType"),sg(),iN(863,"."),sg(),Tl(864,"p"),iN(865,"Valores v\xE1lidos:"),sg(),Tl(866,"ul")(867,"li")(868,"code"),iN(869,"success"),sg(),iN(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Tl(871,"li")(872,"code"),iN(873,"warning"),sg(),iN(874,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Tl(875,"li")(876,"code"),iN(877,"danger"),sg(),iN(878,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Tl(879,"li")(880,"code"),iN(881,"info"),sg(),iN(882,": cor azul claro que caracteriza conte\xFAdo informativo."),sg(),Tl(883,"li")(884,"code"),iN(885,"neutral"),sg(),iN(886,": cor cinza claro para uso geral."),sg()()()(),Tl(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),iN(891," p-title"),Gl(892,"br"),sg()()(),Tl(893,"td",22)(894,"code",27),iN(895,"string"),sg()(),Tl(896,"td",24),iN(897,"-"),sg(),Tl(898,"td",25)(899,"em")(900,"strong"),iN(901,"(opcional)"),sg()(),Tl(902,"p"),iN(903,"T\xEDtulo do componente."),sg(),Tl(904,"blockquote")(905,"p"),iN(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),sg()()()(),Tl(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),iN(911," (p-title-action)"),Gl(912,"br"),sg()()(),Tl(913,"td",22)(914,"code",30),iN(915,"EventEmitter"),sg()(),Tl(916,"td",24),iN(917,"-"),sg(),Tl(918,"td",25)(919,"em")(920,"strong"),iN(921,"(opcional)"),sg()(),Tl(922,"p"),iN(923,"Evento disparado ao clicar no t\xEDtulo definido em "),Tl(924,"code"),iN(925,"p-title"),sg(),iN(926,"."),sg()()()(),Tl(927,"h3"),iN(928,"Interfaces"),sg(),Tl(929,"h4",38)(930,"code",5),iN(931,"PoPopupAction"),sg()(),Tl(932,"div",2)(933,"p"),iN(934,"Interface para lista de a\xE7\xF5es do componente."),sg()(),Tl(935,"h4",14),iN(936,"Propriedades"),sg(),Tl(937,"table",15)(938,"tr",16)(939,"th",17),iN(940,"Nome"),sg(),Tl(941,"th",17),iN(942,"Tipo"),sg(),Tl(943,"th",17),iN(944,"Descri\xE7\xE3o"),sg()(),Tl(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),iN(949," action"),Gl(950,"br"),sg()()(),Tl(951,"td",22)(952,"code",39),iN(953,"Function"),sg()(),Tl(954,"td",25)(955,"em")(956,"strong"),iN(957,"(opcional)"),sg()(),Tl(958,"p"),iN(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(960,"p"),iN(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(962,"code"),iN(963,"subItems"),sg(),iN(964,"."),sg(),Tl(965,"blockquote")(966,"p"),iN(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(968,"em"),iN(969,"bind"),sg(),iN(970,`:
`),Tl(971,"code"),iN(972,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),iN(977," disabled"),Gl(978,"br"),sg()()(),Tl(979,"td",22)(980,"code",32),iN(981,"boolean "),sg(),Tl(982,"code",39),iN(983," Function"),sg()(),Tl(984,"td",25)(985,"em")(986,"strong"),iN(987,"(opcional)"),sg()(),Tl(988,"p"),iN(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),iN(994," icon"),Gl(995,"br"),sg()()(),Tl(996,"td",22)(997,"code",27),iN(998,"string "),sg(),Tl(999,"code",35),iN(1e3," TemplateRef<void>"),sg()(),Tl(1001,"td",25)(1002,"em")(1003,"strong"),iN(1004,"(opcional)"),sg()(),Tl(1005,"p"),iN(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(1007,"p"),iN(1008,"Aceita \xEDcones da "),Tl(1009,"a",36),iN(1010,"Biblioteca de \xEDcones"),sg(),iN(1011,`, fontes externas (ex: Font Awesome)
ou um `),Tl(1012,"code"),iN(1013,"TemplateRef"),sg(),iN(1014," para \xEDcones customizados."),sg(),Tl(1015,"pre")(1016,"code"),iN(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),iN(1022," label"),Gl(1023,"br"),sg()()(),Tl(1024,"td",22)(1025,"code",27),iN(1026,"string"),sg()(),Tl(1027,"td",25)(1028,"p"),iN(1029,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(1030,"p"),iN(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1032,"code"),iN(1033,"subItems"),sg(),iN(1034,"."),sg()()(),Tl(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),iN(1039," selected"),Gl(1040,"br"),sg()()(),Tl(1041,"td",22)(1042,"code",32),iN(1043,"boolean"),sg()(),Tl(1044,"td",25)(1045,"em")(1046,"strong"),iN(1047,"(opcional)"),sg()(),Tl(1048,"p"),iN(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),iN(1054," separator"),Gl(1055,"br"),sg()()(),Tl(1056,"td",22)(1057,"code",32),iN(1058,"boolean"),sg()(),Tl(1059,"td",25)(1060,"em")(1061,"strong"),iN(1062,"(opcional)"),sg()(),Tl(1063,"p"),iN(1064,"Atribui uma linha separadora acima do item."),sg()()(),Tl(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),iN(1069," subItems"),Gl(1070,"br"),sg()()(),Tl(1071,"td",22)(1072,"code",23),iN(1073,"Array<PoPopupAction>"),sg()(),Tl(1074,"td",25)(1075,"em")(1076,"strong"),iN(1077,"(opcional)"),sg()(),Tl(1078,"p"),iN(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(1080,"p"),iN(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(1082,"blockquote")(1083,"p"),iN(1084,"As propriedades "),Tl(1085,"code"),iN(1086,"disabled"),sg(),iN(1087,", "),Tl(1088,"code"),iN(1089,"type"),sg(),iN(1090," e "),Tl(1091,"code"),iN(1092,"visible"),sg(),iN(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(1094,"blockquote")(1095,"p"),iN(1096,"Quando "),Tl(1097,"code"),iN(1098,"url"),sg(),iN(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(1100,"blockquote")(1101,"p"),iN(1102,"Em subn\xEDveis aninhados, o "),Tl(1103,"code"),iN(1104,"icon"),sg(),iN(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),iN(1110," type"),Gl(1111,"br"),sg()()(),Tl(1112,"td",22)(1113,"code",27),iN(1114,"string"),sg()(),Tl(1115,"td",25)(1116,"em")(1117,"strong"),iN(1118,"(opcional)"),sg()(),Tl(1119,"p"),iN(1120,"Define a cor do item."),sg(),Tl(1121,"p"),iN(1122,"Valores v\xE1lidos:"),sg(),Tl(1123,"ul")(1124,"li")(1125,"code"),iN(1126,"default"),sg()(),Tl(1127,"li")(1128,"code"),iN(1129,"danger"),sg()()()()(),Tl(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),iN(1134," url"),Gl(1135,"br"),sg()()(),Tl(1136,"td",22)(1137,"code",27),iN(1138,"string"),sg()(),Tl(1139,"td",25)(1140,"em")(1141,"strong"),iN(1142,"(opcional)"),sg()(),Tl(1143,"p"),iN(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(1145,"p"),iN(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1147,"code"),iN(1148,"url"),sg(),iN(1149," \xE9 informada em um agrupador, o clique "),Tl(1150,"strong"),iN(1151,"n\xE3o abrir\xE1 os subitens"),sg(),iN(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(1153,"blockquote")(1154,"p"),iN(1155,"Quando informada, tem prioridade sobre a propriedade "),Tl(1156,"code"),iN(1157,"action"),sg(),iN(1158,"."),sg()()()(),Tl(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),iN(1163," visible"),Gl(1164,"br"),sg()()(),Tl(1165,"td",22)(1166,"code",32),iN(1167,"boolean "),sg(),Tl(1168,"code",39),iN(1169," Function"),sg()(),Tl(1170,"td",25)(1171,"em")(1172,"strong"),iN(1173,"(opcional)"),sg()(),Tl(1174,"p"),iN(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(1176,"h4",38)(1177,"code",5),iN(1178,"PoWidgetAvatar"),sg()(),Tl(1179,"div",2)(1180,"p"),iN(1181,"Interface para defini\xE7\xE3o do avatar no "),Tl(1182,"code"),iN(1183,"po-widget"),sg(),iN(1184,"."),sg()(),Tl(1185,"h4",14),iN(1186,"Propriedades"),sg(),Tl(1187,"table",15)(1188,"tr",16)(1189,"th",17),iN(1190,"Nome"),sg(),Tl(1191,"th",17),iN(1192,"Tipo"),sg(),Tl(1193,"th",17),iN(1194,"Descri\xE7\xE3o"),sg()(),Tl(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),iN(1199," customTemplate"),Gl(1200,"br"),sg()()(),Tl(1201,"td",22)(1202,"code",40),iN(1203,"TemplateRef<any>"),sg()(),Tl(1204,"td",25)(1205,"em")(1206,"strong"),iN(1207,"(opcional)"),sg()(),Tl(1208,"p"),iN(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),sg(),Tl(1210,"pre")(1211,"code"),iN(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),sg()()()(),Tl(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),iN(1217," size"),Gl(1218,"br"),sg()()(),Tl(1219,"td",22)(1220,"code",27),iN(1221,"string"),sg()(),Tl(1222,"td",25)(1223,"em")(1224,"strong"),iN(1225,"(opcional)"),sg()(),Tl(1226,"p"),iN(1227,"Tamanho de exibi\xE7\xE3o do componente "),Tl(1228,"code"),iN(1229,"po-avatar"),sg(),iN(1230,"."),sg(),Tl(1231,"p"),iN(1232,"Valores v\xE1lidos:"),sg(),Tl(1233,"ul")(1234,"li")(1235,"code"),iN(1236,"xs"),sg(),iN(1237," (24x24)"),sg(),Tl(1238,"li")(1239,"code"),iN(1240,"sm"),sg(),iN(1241," (32x32)"),sg(),Tl(1242,"li")(1243,"code"),iN(1244,"md"),sg(),iN(1245," (64x64)"),sg(),Tl(1246,"li")(1247,"code"),iN(1248,"lg"),sg(),iN(1249," (96x96)"),sg(),Tl(1250,"li")(1251,"code"),iN(1252,"xl"),sg(),iN(1253," (144x144)"),sg()()()(),Tl(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),iN(1258," src"),Gl(1259,"br"),sg()()(),Tl(1260,"td",22)(1261,"code",27),iN(1262,"string"),sg()(),Tl(1263,"td",25)(1264,"em")(1265,"strong"),iN(1266,"(opcional)"),sg()(),Tl(1267,"p"),iN(1268,"Fonte da imagem que pode ser um caminho local ("),Tl(1269,"code"),iN(1270,"./assets/images/logo-black-small.png"),sg(),iN(1271,`)
ou um servidor externo (`),Tl(1272,"code"),iN(1273,"https://po-ui.io/assets/images/logo-black-small.png"),sg(),iN(1274,")."),sg()()(),Tl(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),iN(1279," widthCustomTemplate"),Gl(1280,"br"),sg()()(),Tl(1281,"td",22)(1282,"code",27),iN(1283,"string"),sg()(),Tl(1284,"td",25)(1285,"em")(1286,"strong"),iN(1287,"(opcional)"),sg()(),Tl(1288,"p"),iN(1289,"Define a largura em porcentagem do "),Tl(1290,"code"),iN(1291,"customTemplate"),sg(),iN(1292,"."),sg(),Tl(1293,"p"),iN(1294,"O valor m\xE1ximo aceito \xE9 "),Tl(1295,"code"),iN(1296,"50%"),sg(),iN(1297,"."),sg()()()(),Tl(1298,"h3"),iN(1299,"Enums"),sg(),Tl(1300,"h4",4)(1301,"code",5),iN(1302,"PoButtonKind"),sg()(),Tl(1303,"div",2)(1304,"p"),iN(1305,"Estilos dispon\xEDveis do button."),sg()(),Tl(1306,"h4",14),iN(1307,"Propriedades"),sg(),Tl(1308,"table",15)(1309,"tr",16)(1310,"th",17),iN(1311,"Nome"),sg(),Tl(1312,"th",17),iN(1313,"Descri\xE7\xE3o"),sg()(),Tl(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),iN(1318," primary"),Gl(1319,"br"),sg()()(),Tl(1320,"td",25)(1321,"p"),iN(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),sg()()(),Tl(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),iN(1327," secondary"),Gl(1328,"br"),sg()()(),Tl(1329,"td",25)(1330,"p"),iN(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),sg()()(),Tl(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),iN(1336," tertiary"),Gl(1337,"br"),sg()()(),Tl(1338,"td",25)(1339,"p"),iN(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-widget-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),sg()()()),l&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,ye,we,_e,Te,Me],encapsulation:2,changeDetection:1})}return o})();var tt=[{path:"",component:Ae}],We=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[DL.forChild(tt),DL]})}return o})();var Ot=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,We]})}return o})();
export{Ot as DocPoWidgetModule};