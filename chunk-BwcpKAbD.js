import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,aU as IR,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bT as ha,ai as ya,aP as Da,bC as Vp,al as lx,am as pw,an as $0,bj as eN,ap as hw,aq as G0,bb as dn,aQ as dt,aR as ty,as as $l,at as uo,au as fo,c1 as ep,a2 as GE,av as nx,aw as tx,aX as _x,ay as rx,a3 as D3,a7 as Qx,F as uw,az as Qy,aB as $x,aA as Jy,bo as dN,c3 as zo}from'./main-6SPFG3VI.js';var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Ul(0,"po-widget");},dependencies:[IR],encapsulation:2,changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Widget Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-widget></po-widget>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-widget-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return o})();var Oe=(o,W)=>({src:o,size:W}),_e=(()=>{class o{poNotification=f(Bp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=lx();wl(0,"div",1)(1,"po-widget",2),ut("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),Ux(2),ng()(),Ul(3,"po-divider"),wl(4,"div",1),Ul(5,"po-info",3),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"po-input",4),pw("ngModelChange",function(r){return Qy(m),$x(i.title,r)||(i.title=r),Jy(r)}),ng(),$0(),wl(10,"po-input",5),pw("ngModelChange",function(r){return Qy(m),$x(i.help,r)||(i.help=r),Jy(r)}),ng(),$0(),wl(11,"po-number",6),pw("ngModelChange",function(r){return Qy(m),$x(i.height,r)||(i.height=r),Jy(r)}),ng(),$0(),wl(12,"div",1)(13,"po-input",7),pw("ngModelChange",function(r){return Qy(m),$x(i.actionPopup.action,r)||(i.actionPopup.action=r),Jy(r)}),ng(),$0(),wl(14,"po-input",8),pw("ngModelChange",function(r){return Qy(m),$x(i.actionPopup.label,r)||(i.actionPopup.label=r),Jy(r)}),ng(),$0(),ng(),wl(15,"div",1)(16,"po-button",9),ut("p-click",function(){return i.addAction(i.actionPopup)}),ng()(),wl(17,"po-input",10),pw("ngModelChange",function(r){return Qy(m),$x(i.background,r)||(i.background=r),Jy(r)}),ng(),$0(),wl(18,"po-input",11),pw("ngModelChange",function(r){return Qy(m),$x(i.primaryLabel,r)||(i.primaryLabel=r),Jy(r)}),ng(),$0(),wl(19,"po-input",12),pw("ngModelChange",function(r){return Qy(m),$x(i.secondaryLabel,r)||(i.secondaryLabel=r),Jy(r)}),ng(),$0(),wl(20,"div",13)(21,"po-input",14),pw("ngModelChange",function(r){return Qy(m),$x(i.tagLabel,r)||(i.tagLabel=r),Jy(r)}),ng(),$0(),wl(22,"po-select",15),pw("ngModelChange",function(r){return Qy(m),$x(i.tagIcon,r)||(i.tagIcon=r),Jy(r)}),ng(),$0(),wl(23,"po-select",16),pw("ngModelChange",function(r){return Qy(m),$x(i.tagPosition,r)||(i.tagPosition=r),Jy(r)}),ng(),$0(),ng(),wl(24,"div",1)(25,"po-input",17),pw("ngModelChange",function(r){return Qy(m),$x(i.avatarSrc,r)||(i.avatarSrc=r),Jy(r)}),ng(),$0(),wl(26,"po-select",18),pw("ngModelChange",function(r){return Qy(m),$x(i.avatarSize,r)||(i.avatarSize=r),Jy(r)}),ng(),$0(),ng(),wl(27,"div",1)(28,"po-checkbox-group",19),pw("ngModelChange",function(r){return Qy(m),$x(i.properties,r)||(i.properties=r),Jy(r)}),ng(),$0(),ng(),wl(29,"po-textarea",20),pw("ngModelChange",function(r){return Qy(m),$x(i.content,r)||(i.content=r),Jy(r)}),ng(),$0(),wl(30,"div",1)(31,"po-button",21),ut("p-click",function(){return i.restore()}),ng()()();}l&2&&(Pp(),YE("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",eN(36,Oe,i.avatarSrc,i.avatarSize)),Pp(),cg(" ",i.content," "),Pp(3),YE("p-value",i.action),Pp(4),hw("ngModel",i.title),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.height),G0(),Pp(2),hw("ngModel",i.actionPopup.action),G0(),Pp(),hw("ngModel",i.actionPopup.label),G0(),Pp(2),YE("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Pp(),hw("ngModel",i.background),G0(),Pp(),hw("ngModel",i.primaryLabel),G0(),Pp(),hw("ngModel",i.secondaryLabel),G0(),Pp(2),hw("ngModel",i.tagLabel),G0(),Pp(),hw("ngModel",i.tagIcon),YE("p-options",i.iconList),G0(),Pp(),hw("ngModel",i.tagPosition),YE("p-options",i.listTagPosition),G0(),Pp(2),hw("ngModel",i.avatarSrc),G0(),Pp(),hw("ngModel",i.avatarSize),YE("p-options",i.listAvatarSize),G0(),Pp(2),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.content),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ha,ya,Da,Vp,IR],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Widget Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-widget-labs"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Re,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return o})();var je=["detailsModal"],Me=(()=>{class o{poNotification=f(Bp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&$l(je,7),l&2){let m;uo(m=fo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(wl(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),Ux(4,"Sales order"),ng(),wl(5,"div"),Ux(6,"Scheduled to: "),wl(7,"strong"),Ux(8,"05/04/2018"),ng()(),wl(9,"div",3),Ul(10,"po-button",4),wl(11,"po-button",5),ut("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),ng()()(),wl(12,"po-widget",6),ut("p-click",function(){return i.openModal("account")}),wl(13,"div",7),Ux(14,"$2.818,29"),ng(),wl(15,"div",8),Ux(16,"Last updated at 18:34"),ng()(),wl(17,"po-widget",9),ut("p-primary-action",function(){return i.openModal("account")}),wl(18,"div",10),Ux(19,"$5.000,00"),ng(),wl(20,"div",8),Ux(21,"Last updated at 08:20"),ng()()(),wl(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),Ux(27,"Enter the user routine"),ng()()(),wl(28,"div",15),Ul(29,"po-multiselect",16),ng()(),wl(30,"po-widget",17)(31,"div",7),Ux(32,"Credit card"),ng(),wl(33,"div",8),Ux(34,"MasterCard - 5500 0000 0000 0004"),ng()(),wl(35,"po-widget",18),ut("p-primary-action",function(){return i.openModal("savings")}),wl(36,"div",7),Ux(37,"$2.000,00"),ng(),wl(38,"div",8),Ux(39,"05/03/2018"),ng()()()(),wl(40,"po-modal",19,0),Ul(42,"po-table",20),ng()),l&2&&(Pp(2),YE("p-height",190),Pp(10),YE("p-height",190),Pp(5),YE("p-height",190),Pp(6),YE("p-height",180),Pp(6),YE("p-options",i.options),Pp(),YE("p-actions",i.myActions)("p-height",180),Pp(5),YE("p-height",180)("p-primary",true),Pp(5),YE("p-title",i.titleDetailsModal),Pp(2),YE("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Pe$1,dn,dt,ty,IR],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ge=o=>({"docs-sample-code-tabs":o}),De=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Widget - Finance dashboard"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row sample-finance-row-gap">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-finance-row-gap {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-widget-finance-dashboard"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Me],encapsulation:2})}return o})();var Ke=o=>({customTemplate:o,widthCustomTemplate:"40%"}),Xe=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),Ye=o=>({header:o}),Ze=()=>({label:"Angular",data:100}),$e=()=>({label:"React",data:10}),et=(o,W)=>[o,W];function tt(o,W){o&1&&Ul(0,"po-chart",8),o&2&&YE("p-options",Jx(3,Ye,Qx(2,Xe)))("p-series",eN(7,et,Qx(5,Ze),Qx(6,$e)));}function nt(o,W){if(o&1&&(wl(0,"li"),Ux(1),ng()),o&2){let p=W.$implicit;Pp(),uw(p);}}var Ae=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&$l(zo,7),l&2){let m;uo(m=fo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(wl(0,"div",1)(1,"po-widget",2),ut("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),Ul(2,"po-info",3),ng(),wl(3,"po-widget",4)(4,"div"),Ux(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),wl(6,"div",5)(7,"ul")(8,"li"),Ux(9,"Out-of-the-Box"),ng(),wl(10,"li"),Ux(11,"Standardized and Opinion-Based Architecture"),ng(),wl(12,"li"),Ux(13,"Next Generation Reactivity (Signals)"),ng(),wl(14,"li"),Ux(15,"Focus on Enterprise and Security"),ng()()()(),GE(16,tt,1,10,"ng-template",null,0,dN),ng()(),wl(18,"po-modal",6),Ux(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),wl(20,"div",7)(21,"ul"),nx(22,nt,2,1,"li",null,tx),ng()()()),l&2){let m=_x(17);Pp(),YE("p-help",i.help),Pp(),YE("p-label",i.label)("p-value",i.value),Pp(),YE("p-avatar",Jx(4,Ke,m)),Pp(19),rx(i.technologies);}},dependencies:[ep,Vp,dt,IR],encapsulation:2,changeDetection:1})}return o})();var at=o=>({"docs-sample-code-tabs":o}),We=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Widget - Card"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-widget-card/sample-po-widget-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-widget-card"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,at,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ae],encapsulation:2})}return o})();var ke=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-widget"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoWidgetComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-widget"),ng(),Ux(17," \xE9 recomendado para exibi\xE7\xE3o de "),wl(18,"em"),Ux(19,"dashboards"),ng(),Ux(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),ng(),wl(21,"p"),Ux(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),ng(),wl(23,"p"),Ux(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),wl(25,"a",6),Ux(26,"Grid System"),ng(),Ux(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ng(),wl(28,"h4"),Ux(29,"Boas pr\xE1ticas"),ng(),wl(30,"p"),Ux(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),wl(32,"code"),Ux(33,"18.75rem"),ng(),Ux(34," no componente."),ng(),wl(35,"h4"),Ux(36,"Acessibilidade tratada no componente"),ng(),wl(37,"p"),Ux(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),ng(),wl(39,"ul")(40,"li"),Ux(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),ng(),wl(42,"li"),Ux(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),wl(44,"a",7),Ux(45,"4.1.2: Name, Role, Value"),ng(),Ux(46,")"),ng(),wl(47,"li"),Ux(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),wl(49,"a",8),Ux(50,"2.4.12: Focus Appearance"),ng(),Ux(51,")"),ng(),wl(52,"li"),Ux(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),wl(54,"a",9),Ux(55,"2.4.1 - Keyboard"),ng(),Ux(56,")"),ng()(),wl(57,"h4"),Ux(58,"Tokens customiz\xE1veis"),ng(),wl(59,"p"),Ux(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(61,"blockquote")(62,"p"),Ux(63,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(64,"a",10),Ux(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(66,"."),ng()(),wl(67,"table")(68,"thead")(69,"tr")(70,"th"),Ux(71,"Propriedade"),ng(),wl(72,"th"),Ux(73,"Descri\xE7\xE3o"),ng(),wl(74,"th"),Ux(75,"Valor Padr\xE3o"),ng()()(),wl(76,"tbody")(77,"tr")(78,"td")(79,"strong"),Ux(80,"Default Values"),ng()(),Ul(81,"td")(82,"td"),ng(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--font-family"),ng()(),wl(87,"td"),Ux(88,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--font-family-theme) "),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--font-size"),ng()(),wl(96,"td"),Ux(97,"Tamanho da fonte"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--font-size-sm)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--font-weight"),ng()(),wl(105,"td"),Ux(106,"Peso da fonte"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--font-weight-bold)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--font-color"),ng()(),wl(114,"td"),Ux(115,"Cor da fonte"),ng(),wl(116,"td")(117,"code"),Ux(118,"var(--color-neutral-dark-95)"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--padding"),ng(),Ux(123," - "),wl(124,"code"),Ux(125,"@deprecated 21.x.x"),ng()(),wl(126,"td"),Ux(127,"Preenchimento do componente"),ng(),wl(128,"td")(129,"code"),Ux(130,"1rem"),ng()()(),wl(131,"tr")(132,"td")(133,"code"),Ux(134,"--padding-header"),ng()(),wl(135,"td"),Ux(136,"Preenchimento do header"),ng(),wl(137,"td")(138,"code"),Ux(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--padding-body"),ng()(),wl(144,"td"),Ux(145,"Preenchimento do body"),ng(),wl(146,"td")(147,"code"),Ux(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),ng()()(),wl(149,"tr")(150,"td")(151,"code"),Ux(152,"--padding-avatar"),ng()(),wl(153,"td"),Ux(154,"Preenchimento do avatar"),ng(),wl(155,"td")(156,"code"),Ux(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),ng()()(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--padding-footer"),ng()(),wl(162,"td"),Ux(163,"Preenchimento do footer"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--border-radius"),ng()(),wl(171,"td"),Ux(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--border-radius-md)"),ng()()(),wl(176,"tr")(177,"td")(178,"code"),Ux(179,"--border-width"),ng()(),wl(180,"td"),Ux(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(182,"td")(183,"code"),Ux(184,"var(--border-width-sm)"),ng()()(),wl(185,"tr")(186,"td")(187,"code"),Ux(188,"--border-color"),ng()(),wl(189,"td"),Ux(190,"Cor da borda"),ng(),wl(191,"td")(192,"code"),Ux(193,"var(--color-neutral-light-20)"),ng()()(),wl(194,"tr")(195,"td")(196,"code"),Ux(197,"--background"),ng()(),wl(198,"td"),Ux(199,"Cor de background"),ng(),wl(200,"td")(201,"code"),Ux(202,"var(--color-neutral-light-00)"),ng()()(),wl(203,"tr")(204,"td")(205,"code"),Ux(206,"--shadow"),ng()(),wl(207,"td"),Ux(208,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(209,"td")(210,"code"),Ux(211,"var(--shadow-md)"),ng()()(),wl(212,"tr")(213,"td")(214,"strong"),Ux(215,"Hover"),ng()(),Ul(216,"td")(217,"td"),ng(),wl(218,"tr")(219,"td")(220,"code"),Ux(221,"--border-color-hover"),ng()(),wl(222,"td"),Ux(223,"Cor da borda no estado hover"),ng(),wl(224,"td")(225,"code"),Ux(226,"var(--color-action-hover)"),ng()()(),wl(227,"tr")(228,"td")(229,"strong"),Ux(230,"Focused"),ng()(),Ul(231,"td")(232,"td"),ng(),wl(233,"tr")(234,"td")(235,"code"),Ux(236,"--color-focused"),ng()(),wl(237,"td"),Ux(238,"Cor principal no estado de focus"),ng(),wl(239,"td")(240,"code"),Ux(241,"var(--color-action-default)"),ng()()(),wl(242,"tr")(243,"td")(244,"code"),Ux(245,"--outline-color-focused"),ng(),Ux(246," \xA0"),ng(),wl(247,"td"),Ux(248,"Cor do outline do estado de focus"),ng(),wl(249,"td")(250,"code"),Ux(251,"var(--color-action-focus)"),ng()()()()()(),wl(252,"div",11)(253,"h4",12),Ux(254,"Seletor"),ng(),wl(255,"pre",13),Ux(256,`<po-widget
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
`),ng()(),wl(257,"h4",14),Ux(258,"Propriedades"),ng(),wl(259,"table",15)(260,"tr",16)(261,"th",17),Ux(262,"Nome"),ng(),wl(263,"th",17),Ux(264,"Tipo"),ng(),wl(265,"th",17),Ux(266,"Padr\xE3o"),ng(),wl(267,"th",17),Ux(268,"Descri\xE7\xE3o"),ng()(),wl(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),Ux(273," p-actions"),Ul(274,"br"),ng()()(),wl(275,"td",22)(276,"code",23),Ux(277,"Array<PoPopupAction>"),ng()(),wl(278,"td",24),Ux(279,"-"),ng(),wl(280,"td",25)(281,"em")(282,"strong"),Ux(283,"(opcional)"),ng()(),wl(284,"p"),Ux(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),wl(286,"code"),Ux(287,"PoPopupAction"),ng(),Ux(288,"."),ng()()(),wl(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),Ux(293," p-avatar"),Ul(294,"br"),ng()()(),wl(295,"td",22)(296,"code",26),Ux(297,"PoWidgetAvatar"),ng()(),wl(298,"td",24),Ux(299,"-"),ng(),wl(300,"td",25)(301,"em")(302,"strong"),Ux(303,"(opcional)"),ng()(),wl(304,"p"),Ux(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),ng()()(),wl(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),Ux(310," p-background"),Ul(311,"br"),ng()()(),wl(312,"td",22)(313,"code",27),Ux(314,"string"),ng()(),wl(315,"td",24),Ux(316,"-"),ng(),wl(317,"td",25)(318,"em")(319,"strong"),Ux(320,"(opcional)"),ng()(),wl(321,"p"),Ux(322,"Define uma imagem de fundo."),ng(),wl(323,"blockquote")(324,"p"),Ux(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),wl(326,"code"),Ux(327,"p-widget"),ng(),Ux(328,`,
pode-se utilizar a propriedade `),wl(329,"code"),Ux(330,"p-primary"),ng(),Ux(331," em conjunto para que os textos fiquem na cor branca."),ng()()()(),wl(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),Ux(336," (p-click)"),Ul(337,"br"),ng()()(),wl(338,"td",22)(339,"code",30),Ux(340,"EventEmitter"),ng()(),wl(341,"td",24),Ux(342,"-"),ng(),wl(343,"td",25)(344,"em")(345,"strong"),Ux(346,"(opcional)"),ng()(),wl(347,"p"),Ux(348,"Evento disparado quando o usu\xE1rio clicar no componente."),ng(),wl(349,"blockquote")(350,"p"),Ux(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),ng()()()(),wl(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),Ux(356," p-danger-primary-action"),Ul(357,"br"),ng()()(),wl(358,"td",22)(359,"code",31),Ux(360,"false"),ng()(),wl(361,"td",24)(362,"p")(363,"code"),Ux(364,"false"),ng()()(),wl(365,"td",25)(366,"em")(367,"strong"),Ux(368,"(opcional)"),ng()(),wl(369,"p"),Ux(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),wl(371,"code"),Ux(372,"p-primary-label"),ng(),Ux(373," ativar\xE1 o modo "),wl(374,"code"),Ux(375,"danger"),ng(),Ux(376,"."),ng(),wl(377,"blockquote")(378,"p"),Ux(379,"Incompat\xEDvel com o tipo "),wl(380,"strong"),Ux(381,"tertiary"),ng(),Ux(382," da propriedade "),wl(383,"code"),Ux(384,"p-kind-primary-action"),ng(),Ux(385,"."),ng()()()(),wl(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),Ux(390," p-danger-secondary-action"),Ul(391,"br"),ng()()(),wl(392,"td",22)(393,"code",31),Ux(394,"false"),ng()(),wl(395,"td",24)(396,"p")(397,"code"),Ux(398,"false"),ng()()(),wl(399,"td",25)(400,"em")(401,"strong"),Ux(402,"(opcional)"),ng()(),wl(403,"p"),Ux(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),wl(405,"code"),Ux(406,"p-secondary-label"),ng(),Ux(407," ativar\xE1 o modo "),wl(408,"code"),Ux(409,"danger"),ng(),Ux(410,"."),ng(),wl(411,"blockquote")(412,"p"),Ux(413,"Incompat\xEDvel com o tipo "),wl(414,"strong"),Ux(415,"tertiary"),ng(),Ux(416," da propriedade "),wl(417,"code"),Ux(418,"p-kind-primary-action"),ng(),Ux(419,"."),ng()()()(),wl(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),Ux(424," p-disabled"),Ul(425,"br"),ng()()(),wl(426,"td",22)(427,"code",32),Ux(428,"boolean"),ng()(),wl(429,"td",24)(430,"p")(431,"code"),Ux(432,"false"),ng()()(),wl(433,"td",25)(434,"em")(435,"strong"),Ux(436,"(opcional)"),ng()(),wl(437,"p"),Ux(438,"Desabilita o componente."),ng()()(),wl(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),Ux(443," p-height"),Ul(444,"br"),ng()()(),wl(445,"td",22)(446,"code",33),Ux(447,"number"),ng()(),wl(448,"td",24),Ux(449,"-"),ng(),wl(450,"td",25)(451,"em")(452,"strong"),Ux(453,"(opcional)"),ng()(),wl(454,"p"),Ux(455,"Define a altura do componente."),ng(),wl(456,"blockquote")(457,"p"),Ux(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),ng()()()(),wl(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),Ux(463," p-help"),Ul(464,"br"),ng()()(),wl(465,"td",22)(466,"code",27),Ux(467,"string"),ng()(),wl(468,"td",24),Ux(469,"-"),ng(),wl(470,"td",25)(471,"em")(472,"strong"),Ux(473,"(opcional)"),ng()(),wl(474,"p"),Ux(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),ng()()(),wl(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),Ux(480," p-kind-primary-action"),Ul(481,"br"),ng()()(),wl(482,"td",22)(483,"code",27),Ux(484,"string"),ng()(),wl(485,"td",24)(486,"p")(487,"code"),Ux(488,"tertiary"),ng()()(),wl(489,"td",25)(490,"em")(491,"strong"),Ux(492,"(opcional)"),ng()(),wl(493,"p"),Ux(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),wl(495,"code"),Ux(496,"p-primary-label"),ng(),Ux(497,", conforme o enum "),wl(498,"code"),Ux(499,"PoButtonKind"),ng(),Ux(500,"."),ng()()(),wl(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),Ux(505," p-kind-secondary-action"),Ul(506,"br"),ng()()(),wl(507,"td",22)(508,"code",27),Ux(509,"string"),ng()(),wl(510,"td",24)(511,"p")(512,"code"),Ux(513,"tertiary"),ng()()(),wl(514,"td",25)(515,"em")(516,"strong"),Ux(517,"(opcional)"),ng()(),wl(518,"p"),Ux(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),wl(520,"code"),Ux(521,"p-secondary-label"),ng(),Ux(522,", conforme o enum "),wl(523,"code"),Ux(524,"PoButtonKind"),ng(),Ux(525,"."),ng()()(),wl(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),Ux(530," p-no-shadow"),Ul(531,"br"),ng()()(),wl(532,"td",22)(533,"code",32),Ux(534,"boolean"),ng()(),wl(535,"td",24)(536,"p")(537,"code"),Ux(538,"true"),ng()()(),wl(539,"td",25)(540,"em")(541,"strong"),Ux(542,"(opcional)"),ng()(),wl(543,"p"),Ux(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),ng(),wl(545,"blockquote")(546,"p"),Ux(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),wl(548,"code"),Ux(549,"p-click"),ng(),Ux(550," est\xE1 definido."),ng()()()(),wl(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),Ux(555," (p-on-disabled)"),Ul(556,"br"),ng()()(),wl(557,"td",22)(558,"code",30),Ux(559,"EventEmitter"),ng()(),wl(560,"td",24),Ux(561,"-"),ng(),wl(562,"td",25)(563,"em")(564,"strong"),Ux(565,"(opcional)"),ng()(),wl(566,"p"),Ux(567,"Evento disparado quando a propriedade "),wl(568,"code"),Ux(569,"p-disabled"),ng(),Ux(570," for alterada."),ng()()(),wl(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),Ux(575," p-primary"),Ul(576,"br"),ng()()(),wl(577,"td",22)(578,"code",32),Ux(579,"boolean"),ng()(),wl(580,"td",24)(581,"p")(582,"code"),Ux(583,"false"),ng()()(),wl(584,"td",25)(585,"em")(586,"strong"),Ux(587,"(opcional)"),ng()(),wl(588,"p"),Ux(589,"Op\xE7\xE3o para que o "),wl(590,"code"),Ux(591,"po-widget"),ng(),Ux(592," fique em destaque."),ng()()(),wl(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),Ux(597," (p-primary-action)"),Ul(598,"br"),ng()()(),wl(599,"td",22)(600,"code",30),Ux(601,"EventEmitter"),ng()(),wl(602,"td",24),Ux(603,"-"),ng(),wl(604,"td",25)(605,"em")(606,"strong"),Ux(607,"(opcional)"),ng()(),wl(608,"p"),Ux(609,"Evento disparado ao clicar na a\xE7\xE3o "),wl(610,"code"),Ux(611,"p-primary-label"),ng(),Ux(612,"."),ng()()(),wl(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),Ux(617," p-primary-label"),Ul(618,"br"),ng()()(),wl(619,"td",22)(620,"code",27),Ux(621,"string"),ng()(),wl(622,"td",24),Ux(623,"-"),ng(),wl(624,"td",25)(625,"em")(626,"strong"),Ux(627,"(opcional)"),ng()(),wl(628,"p"),Ux(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),ng()()(),wl(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),Ux(634," (p-secondary-action)"),Ul(635,"br"),ng()()(),wl(636,"td",22)(637,"code",30),Ux(638,"EventEmitter"),ng()(),wl(639,"td",24),Ux(640,"-"),ng(),wl(641,"td",25)(642,"em")(643,"strong"),Ux(644,"(opcional)"),ng()(),wl(645,"p"),Ux(646,"Evento disparado ao clicar na a\xE7\xE3o "),wl(647,"code"),Ux(648,"p-secondary-label"),ng(),Ux(649,"."),ng()()(),wl(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),Ux(654," p-secondary-label"),Ul(655,"br"),ng()()(),wl(656,"td",22)(657,"code",27),Ux(658,"string"),ng()(),wl(659,"td",24),Ux(660,"-"),ng(),wl(661,"td",25)(662,"em")(663,"strong"),Ux(664,"(opcional)"),ng()(),wl(665,"p"),Ux(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),ng(),wl(667,"blockquote")(668,"p"),Ux(669,"Exibida apenas quando "),wl(670,"code"),Ux(671,"p-primary-label"),ng(),Ux(672," estiver definida."),ng()()()(),wl(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),Ux(677," (p-setting)"),Ul(678,"br"),ng()()(),wl(679,"td",22)(680,"code",30),Ux(681,"EventEmitter"),ng()(),wl(682,"td",24),Ux(683,"-"),ng(),wl(684,"td",25)(685,"em")(686,"strong"),Ux(687,"(opcional)"),ng()(),wl(688,"p"),Ux(689,"Evento disparado ao clicar em "),wl(690,"strong"),Ux(691,"Configura\xE7\xF5es"),ng(),Ux(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),ng()()(),wl(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),Ux(697," p-size"),Ul(698,"br"),ng()()(),wl(699,"td",22)(700,"code",27),Ux(701,"string"),ng()(),wl(702,"td",24)(703,"p")(704,"code"),Ux(705,"medium"),ng()()(),wl(706,"td",25)(707,"em")(708,"strong"),Ux(709,"(opcional)"),ng()(),wl(710,"p"),Ux(711,"Define o tamanho dos bot\xF5es do componente:"),ng(),wl(712,"ul")(713,"li")(714,"code"),Ux(715,"small"),ng(),Ux(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(717,"li")(718,"code"),Ux(719,"medium"),ng(),Ux(720,": altura de 44px."),ng()(),wl(721,"blockquote")(722,"p"),Ux(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(724,"code"),Ux(725,"medium"),ng(),Ux(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(727,"a",34),Ux(728,"po-theme"),ng(),Ux(729,"."),ng()()()(),wl(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),Ux(734," p-tag-icon"),Ul(735,"br"),ng()()(),wl(736,"td",22)(737,"code",27),Ux(738,"string "),ng(),wl(739,"code",35),Ux(740," TemplateRef<void>"),ng()(),wl(741,"td",24),Ux(742,"-"),ng(),wl(743,"td",25)(744,"em")(745,"strong"),Ux(746,"(opcional)"),ng()(),wl(747,"p"),Ux(748,"Define o \xEDcone exibido ao lado do label da "),wl(749,"code"),Ux(750,"p-tag"),ng(),Ux(751,"."),ng(),wl(752,"p"),Ux(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(754,"a",36),Ux(755,"Biblioteca de \xEDcones PO UI"),ng(),Ux(756,", conforme exemplo:"),ng(),wl(757,"pre")(758,"code"),Ux(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),ng()(),wl(760,"p"),Ux(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(762,"em"),Ux(763,"Font Awesome"),ng(),Ux(764,`, desde que a biblioteca
esteja carregada no projeto:`),ng(),wl(765,"pre")(766,"code"),Ux(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),ng()(),wl(768,"p"),Ux(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(770,"code"),Ux(771,"TemplateRef"),ng(),Ux(772,", conforme exemplo abaixo:"),ng(),wl(773,"pre")(774,"code"),Ux(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ng()(),wl(776,"blockquote")(777,"p"),Ux(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(779,"code"),Ux(780,"font-size: inherit"),ng(),Ux(781," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),Ux(786," p-tag"),Ul(787,"br"),ng()()(),wl(788,"td",22)(789,"code",27),Ux(790,"string"),ng()(),wl(791,"td",24),Ux(792,"-"),ng(),wl(793,"td",25)(794,"em")(795,"strong"),Ux(796,"(opcional)"),ng()(),wl(797,"p"),Ux(798,"Label da tag exibida no header."),ng(),wl(799,"blockquote")(800,"p"),Ux(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ng()()()(),wl(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),Ux(806," p-tag-position"),Ul(807,"br"),ng()()(),wl(808,"td",22)(809,"code",27),Ux(810,"string"),ng()(),wl(811,"td",24)(812,"p")(813,"code"),Ux(814,"right"),ng()()(),wl(815,"td",25)(816,"em")(817,"strong"),Ux(818,"(opcional)"),ng()(),wl(819,"p"),Ux(820,"Define o posicionamento da "),wl(821,"code"),Ux(822,"po-tag"),ng(),Ux(823," no cabe\xE7alho do Widget:"),ng(),wl(824,"ul")(825,"li")(826,"code"),Ux(827,"right"),ng(),Ux(828,": posicionada no canto superior direito do cabe\xE7alho."),ng(),wl(829,"li")(830,"code"),Ux(831,"top"),ng(),Ux(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),ng(),wl(833,"li")(834,"code"),Ux(835,"bottom"),ng(),Ux(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),ng()()()(),wl(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),Ux(841," p-tag-type"),Ul(842,"br"),ng()()(),wl(843,"td",22)(844,"code",37),Ux(845,"PoTagType "),ng(),wl(846,"code",27),Ux(847," string"),ng()(),wl(848,"td",24)(849,"p")(850,"code"),Ux(851,"success"),ng()()(),wl(852,"td",25)(853,"em")(854,"strong"),Ux(855,"(opcional)"),ng()(),wl(856,"p"),Ux(857,"Define o tipo da "),wl(858,"code"),Ux(859,"p-tag"),ng(),Ux(860,", conforme o enum "),wl(861,"strong"),Ux(862,"PoTagType"),ng(),Ux(863,"."),ng(),wl(864,"p"),Ux(865,"Valores v\xE1lidos:"),ng(),wl(866,"ul")(867,"li")(868,"code"),Ux(869,"success"),ng(),Ux(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),ng(),wl(871,"li")(872,"code"),Ux(873,"warning"),ng(),Ux(874,": cor amarela que representa aviso ou advert\xEAncia."),ng(),wl(875,"li")(876,"code"),Ux(877,"danger"),ng(),Ux(878,": cor vermelha para erro ou aviso cr\xEDtico."),ng(),wl(879,"li")(880,"code"),Ux(881,"info"),ng(),Ux(882,": cor azul claro que caracteriza conte\xFAdo informativo."),ng(),wl(883,"li")(884,"code"),Ux(885,"neutral"),ng(),Ux(886,": cor cinza claro para uso geral."),ng()()()(),wl(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),Ux(891," p-title"),Ul(892,"br"),ng()()(),wl(893,"td",22)(894,"code",27),Ux(895,"string"),ng()(),wl(896,"td",24),Ux(897,"-"),ng(),wl(898,"td",25)(899,"em")(900,"strong"),Ux(901,"(opcional)"),ng()(),wl(902,"p"),Ux(903,"T\xEDtulo do componente."),ng(),wl(904,"blockquote")(905,"p"),Ux(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),ng()()()(),wl(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),Ux(911," (p-title-action)"),Ul(912,"br"),ng()()(),wl(913,"td",22)(914,"code",30),Ux(915,"EventEmitter"),ng()(),wl(916,"td",24),Ux(917,"-"),ng(),wl(918,"td",25)(919,"em")(920,"strong"),Ux(921,"(opcional)"),ng()(),wl(922,"p"),Ux(923,"Evento disparado ao clicar no t\xEDtulo definido em "),wl(924,"code"),Ux(925,"p-title"),ng(),Ux(926,"."),ng()()()(),wl(927,"h3"),Ux(928,"Interfaces"),ng(),wl(929,"h4",38)(930,"code",5),Ux(931,"PoPopupAction"),ng()(),wl(932,"div",2)(933,"p"),Ux(934,"Interface para lista de a\xE7\xF5es do componente."),ng()(),wl(935,"h4",14),Ux(936,"Propriedades"),ng(),wl(937,"table",15)(938,"tr",16)(939,"th",17),Ux(940,"Nome"),ng(),wl(941,"th",17),Ux(942,"Tipo"),ng(),wl(943,"th",17),Ux(944,"Descri\xE7\xE3o"),ng()(),wl(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),Ux(949," action"),Ul(950,"br"),ng()()(),wl(951,"td",22)(952,"code",39),Ux(953,"Function"),ng()(),wl(954,"td",25)(955,"em")(956,"strong"),Ux(957,"(opcional)"),ng()(),wl(958,"p"),Ux(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(960,"p"),Ux(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(962,"code"),Ux(963,"subItems"),ng(),Ux(964,"."),ng(),wl(965,"blockquote")(966,"p"),Ux(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(968,"em"),Ux(969,"bind"),ng(),Ux(970,`:
`),wl(971,"code"),Ux(972,"action: this.myFunction.bind(this)"),ng()()()()(),wl(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),Ux(977," disabled"),Ul(978,"br"),ng()()(),wl(979,"td",22)(980,"code",32),Ux(981,"boolean "),ng(),wl(982,"code",39),Ux(983," Function"),ng()(),wl(984,"td",25)(985,"em")(986,"strong"),Ux(987,"(opcional)"),ng()(),wl(988,"p"),Ux(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),Ux(994," icon"),Ul(995,"br"),ng()()(),wl(996,"td",22)(997,"code",27),Ux(998,"string "),ng(),wl(999,"code",35),Ux(1e3," TemplateRef<void>"),ng()(),wl(1001,"td",25)(1002,"em")(1003,"strong"),Ux(1004,"(opcional)"),ng()(),wl(1005,"p"),Ux(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(1007,"p"),Ux(1008,"Aceita \xEDcones da "),wl(1009,"a",36),Ux(1010,"Biblioteca de \xEDcones"),ng(),Ux(1011,`, fontes externas (ex: Font Awesome)
ou um `),wl(1012,"code"),Ux(1013,"TemplateRef"),ng(),Ux(1014," para \xEDcones customizados."),ng(),wl(1015,"pre")(1016,"code"),Ux(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),Ux(1022," label"),Ul(1023,"br"),ng()()(),wl(1024,"td",22)(1025,"code",27),Ux(1026,"string"),ng()(),wl(1027,"td",25)(1028,"p"),Ux(1029,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(1030,"p"),Ux(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(1032,"code"),Ux(1033,"subItems"),ng(),Ux(1034,"."),ng()()(),wl(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),Ux(1039," selected"),Ul(1040,"br"),ng()()(),wl(1041,"td",22)(1042,"code",32),Ux(1043,"boolean"),ng()(),wl(1044,"td",25)(1045,"em")(1046,"strong"),Ux(1047,"(opcional)"),ng()(),wl(1048,"p"),Ux(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),Ux(1054," separator"),Ul(1055,"br"),ng()()(),wl(1056,"td",22)(1057,"code",32),Ux(1058,"boolean"),ng()(),wl(1059,"td",25)(1060,"em")(1061,"strong"),Ux(1062,"(opcional)"),ng()(),wl(1063,"p"),Ux(1064,"Atribui uma linha separadora acima do item."),ng()()(),wl(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),Ux(1069," subItems"),Ul(1070,"br"),ng()()(),wl(1071,"td",22)(1072,"code",23),Ux(1073,"Array<PoPopupAction>"),ng()(),wl(1074,"td",25)(1075,"em")(1076,"strong"),Ux(1077,"(opcional)"),ng()(),wl(1078,"p"),Ux(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(1080,"p"),Ux(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(1082,"blockquote")(1083,"p"),Ux(1084,"As propriedades "),wl(1085,"code"),Ux(1086,"disabled"),ng(),Ux(1087,", "),wl(1088,"code"),Ux(1089,"type"),ng(),Ux(1090," e "),wl(1091,"code"),Ux(1092,"visible"),ng(),Ux(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(1094,"blockquote")(1095,"p"),Ux(1096,"Quando "),wl(1097,"code"),Ux(1098,"url"),ng(),Ux(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(1100,"blockquote")(1101,"p"),Ux(1102,"Em subn\xEDveis aninhados, o "),wl(1103,"code"),Ux(1104,"icon"),ng(),Ux(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),Ux(1110," type"),Ul(1111,"br"),ng()()(),wl(1112,"td",22)(1113,"code",27),Ux(1114,"string"),ng()(),wl(1115,"td",25)(1116,"em")(1117,"strong"),Ux(1118,"(opcional)"),ng()(),wl(1119,"p"),Ux(1120,"Define a cor do item."),ng(),wl(1121,"p"),Ux(1122,"Valores v\xE1lidos:"),ng(),wl(1123,"ul")(1124,"li")(1125,"code"),Ux(1126,"default"),ng()(),wl(1127,"li")(1128,"code"),Ux(1129,"danger"),ng()()()()(),wl(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),Ux(1134," url"),Ul(1135,"br"),ng()()(),wl(1136,"td",22)(1137,"code",27),Ux(1138,"string"),ng()(),wl(1139,"td",25)(1140,"em")(1141,"strong"),Ux(1142,"(opcional)"),ng()(),wl(1143,"p"),Ux(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(1145,"p"),Ux(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(1147,"code"),Ux(1148,"url"),ng(),Ux(1149," \xE9 informada em um agrupador, o clique "),wl(1150,"strong"),Ux(1151,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(1153,"blockquote")(1154,"p"),Ux(1155,"Quando informada, tem prioridade sobre a propriedade "),wl(1156,"code"),Ux(1157,"action"),ng(),Ux(1158,"."),ng()()()(),wl(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),Ux(1163," visible"),Ul(1164,"br"),ng()()(),wl(1165,"td",22)(1166,"code",32),Ux(1167,"boolean "),ng(),wl(1168,"code",39),Ux(1169," Function"),ng()(),wl(1170,"td",25)(1171,"em")(1172,"strong"),Ux(1173,"(opcional)"),ng()(),wl(1174,"p"),Ux(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(1176,"h4",38)(1177,"code",5),Ux(1178,"PoWidgetAvatar"),ng()(),wl(1179,"div",2)(1180,"p"),Ux(1181,"Interface para defini\xE7\xE3o do avatar no "),wl(1182,"code"),Ux(1183,"po-widget"),ng(),Ux(1184,"."),ng()(),wl(1185,"h4",14),Ux(1186,"Propriedades"),ng(),wl(1187,"table",15)(1188,"tr",16)(1189,"th",17),Ux(1190,"Nome"),ng(),wl(1191,"th",17),Ux(1192,"Tipo"),ng(),wl(1193,"th",17),Ux(1194,"Descri\xE7\xE3o"),ng()(),wl(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),Ux(1199," customTemplate"),Ul(1200,"br"),ng()()(),wl(1201,"td",22)(1202,"code",40),Ux(1203,"TemplateRef<any>"),ng()(),wl(1204,"td",25)(1205,"em")(1206,"strong"),Ux(1207,"(opcional)"),ng()(),wl(1208,"p"),Ux(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),ng(),wl(1210,"pre")(1211,"code"),Ux(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),ng()()()(),wl(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),Ux(1217," size"),Ul(1218,"br"),ng()()(),wl(1219,"td",22)(1220,"code",27),Ux(1221,"string"),ng()(),wl(1222,"td",25)(1223,"em")(1224,"strong"),Ux(1225,"(opcional)"),ng()(),wl(1226,"p"),Ux(1227,"Tamanho de exibi\xE7\xE3o do componente "),wl(1228,"code"),Ux(1229,"po-avatar"),ng(),Ux(1230,"."),ng(),wl(1231,"p"),Ux(1232,"Valores v\xE1lidos:"),ng(),wl(1233,"ul")(1234,"li")(1235,"code"),Ux(1236,"xs"),ng(),Ux(1237," (24x24)"),ng(),wl(1238,"li")(1239,"code"),Ux(1240,"sm"),ng(),Ux(1241," (32x32)"),ng(),wl(1242,"li")(1243,"code"),Ux(1244,"md"),ng(),Ux(1245," (64x64)"),ng(),wl(1246,"li")(1247,"code"),Ux(1248,"lg"),ng(),Ux(1249," (96x96)"),ng(),wl(1250,"li")(1251,"code"),Ux(1252,"xl"),ng(),Ux(1253," (144x144)"),ng()()()(),wl(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),Ux(1258," src"),Ul(1259,"br"),ng()()(),wl(1260,"td",22)(1261,"code",27),Ux(1262,"string"),ng()(),wl(1263,"td",25)(1264,"em")(1265,"strong"),Ux(1266,"(opcional)"),ng()(),wl(1267,"p"),Ux(1268,"Fonte da imagem que pode ser um caminho local ("),wl(1269,"code"),Ux(1270,"./assets/images/logo-black-small.png"),ng(),Ux(1271,`)
ou um servidor externo (`),wl(1272,"code"),Ux(1273,"https://po-ui.io/assets/images/logo-black-small.png"),ng(),Ux(1274,")."),ng()()(),wl(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),Ux(1279," widthCustomTemplate"),Ul(1280,"br"),ng()()(),wl(1281,"td",22)(1282,"code",27),Ux(1283,"string"),ng()(),wl(1284,"td",25)(1285,"em")(1286,"strong"),Ux(1287,"(opcional)"),ng()(),wl(1288,"p"),Ux(1289,"Define a largura em porcentagem do "),wl(1290,"code"),Ux(1291,"customTemplate"),ng(),Ux(1292,"."),ng(),wl(1293,"p"),Ux(1294,"O valor m\xE1ximo aceito \xE9 "),wl(1295,"code"),Ux(1296,"50%"),ng(),Ux(1297,"."),ng()()()(),wl(1298,"h3"),Ux(1299,"Enums"),ng(),wl(1300,"h4",4)(1301,"code",5),Ux(1302,"PoButtonKind"),ng()(),wl(1303,"div",2)(1304,"p"),Ux(1305,"Estilos dispon\xEDveis do button."),ng()(),wl(1306,"h4",14),Ux(1307,"Propriedades"),ng(),wl(1308,"table",15)(1309,"tr",16)(1310,"th",17),Ux(1311,"Nome"),ng(),wl(1312,"th",17),Ux(1313,"Descri\xE7\xE3o"),ng()(),wl(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),Ux(1318," primary"),Ul(1319,"br"),ng()()(),wl(1320,"td",25)(1321,"p"),Ux(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),ng()()(),wl(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),Ux(1327," secondary"),Ul(1328,"br"),ng()()(),wl(1329,"td",25)(1330,"p"),Ux(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),ng()()(),wl(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),Ux(1336," tertiary"),Ul(1337,"br"),ng()()(),wl(1338,"td",25)(1339,"p"),Ux(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var Le=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-widget-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,Pe,Te,De,We,ke],encapsulation:2})}return o})();var rt=[{path:"",component:Le}],Fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(rt),vL]})}return o})();var nn=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,Fe]})}return o})();
export{nn as DocPoWidgetModule};