import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,b9 as ONe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,aJ as nme,b4 as rme,cd as sme,aB as gx,aM as gw,aN as Z0,bQ as sN,aO as pw,aP as X0,bJ as Ww,b5 as Ko,b6 as U3,av as zl,aw as uo,ax as fo,cD as Sde,a2 as WE,aQ as cx,aR as ax,bc as Sx,aS as lx,a3 as SNe,a7 as iN,I as dw,aD as Jy,aT as Zx,aE as e_,bV as vN}from'./main-OS7VVRJY.js';var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Hl(0,"po-widget");},dependencies:[ONe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Widget Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-widget></po-widget>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-widget-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Le,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,fe],encapsulation:2})}return o})();var qe=(o,k)=>({src:o,size:k}),Ce=(()=>{class o{poNotification=f(Xp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=gx();Cl(0,"div",1)(1,"po-widget",2),dt("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),qx(2),og()(),Hl(3,"po-divider"),Cl(4,"div",1),Hl(5,"po-info",3),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"po-input",4),gw("ngModelChange",function(r){return Jy(m),Zx(i.title,r)||(i.title=r),e_(r)}),og(),Z0(),Cl(10,"po-input",5),gw("ngModelChange",function(r){return Jy(m),Zx(i.help,r)||(i.help=r),e_(r)}),og(),Z0(),Cl(11,"po-number",6),gw("ngModelChange",function(r){return Jy(m),Zx(i.height,r)||(i.height=r),e_(r)}),og(),Z0(),Cl(12,"div",1)(13,"po-input",7),gw("ngModelChange",function(r){return Jy(m),Zx(i.actionPopup.action,r)||(i.actionPopup.action=r),e_(r)}),og(),Z0(),Cl(14,"po-input",8),gw("ngModelChange",function(r){return Jy(m),Zx(i.actionPopup.label,r)||(i.actionPopup.label=r),e_(r)}),og(),Z0(),og(),Cl(15,"div",1)(16,"po-button",9),dt("p-click",function(){return i.addAction(i.actionPopup)}),og()(),Cl(17,"po-input",10),gw("ngModelChange",function(r){return Jy(m),Zx(i.background,r)||(i.background=r),e_(r)}),og(),Z0(),Cl(18,"po-input",11),gw("ngModelChange",function(r){return Jy(m),Zx(i.primaryLabel,r)||(i.primaryLabel=r),e_(r)}),og(),Z0(),Cl(19,"po-input",12),gw("ngModelChange",function(r){return Jy(m),Zx(i.secondaryLabel,r)||(i.secondaryLabel=r),e_(r)}),og(),Z0(),Cl(20,"div",13)(21,"po-input",14),gw("ngModelChange",function(r){return Jy(m),Zx(i.tagLabel,r)||(i.tagLabel=r),e_(r)}),og(),Z0(),Cl(22,"po-select",15),gw("ngModelChange",function(r){return Jy(m),Zx(i.tagIcon,r)||(i.tagIcon=r),e_(r)}),og(),Z0(),Cl(23,"po-select",16),gw("ngModelChange",function(r){return Jy(m),Zx(i.tagPosition,r)||(i.tagPosition=r),e_(r)}),og(),Z0(),og(),Cl(24,"div",1)(25,"po-input",17),gw("ngModelChange",function(r){return Jy(m),Zx(i.avatarSrc,r)||(i.avatarSrc=r),e_(r)}),og(),Z0(),Cl(26,"po-select",18),gw("ngModelChange",function(r){return Jy(m),Zx(i.avatarSize,r)||(i.avatarSize=r),e_(r)}),og(),Z0(),og(),Cl(27,"div",1)(28,"po-checkbox-group",19),gw("ngModelChange",function(r){return Jy(m),Zx(i.properties,r)||(i.properties=r),e_(r)}),og(),Z0(),og(),Cl(29,"po-textarea",20),gw("ngModelChange",function(r){return Jy(m),Zx(i.content,r)||(i.content=r),e_(r)}),og(),Z0(),Cl(30,"div",1)(31,"po-button",21),dt("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),ZE("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",sN(36,qe,i.avatarSrc,i.avatarSize)),Lp(),dg(" ",i.content," "),Lp(3),ZE("p-value",i.action),Lp(4),pw("ngModel",i.title),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.height),X0(),Lp(2),pw("ngModel",i.actionPopup.action),X0(),Lp(),pw("ngModel",i.actionPopup.label),X0(),Lp(2),ZE("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Lp(),pw("ngModel",i.background),X0(),Lp(),pw("ngModel",i.primaryLabel),X0(),Lp(),pw("ngModel",i.secondaryLabel),X0(),Lp(2),pw("ngModel",i.tagLabel),X0(),Lp(),pw("ngModel",i.tagIcon),ZE("p-options",i.iconList),X0(),Lp(),pw("ngModel",i.tagPosition),ZE("p-options",i.listTagPosition),X0(),Lp(2),pw("ngModel",i.avatarSrc),X0(),Lp(),pw("ngModel",i.avatarSize),ZE("p-options",i.listAvatarSize),X0(),Lp(2),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.content),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,nme,rme,sme,ONe],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Widget Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-widget-labs"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return o})();var Ie=["detailsModal"],Pe=(()=>{class o{poNotification=f(Xp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&zl(Ie,7),l&2){let m;uo(m=fo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(Cl(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),qx(4,"Sales order"),og(),Cl(5,"div"),qx(6,"Scheduled to: "),Cl(7,"strong"),qx(8,"05/04/2018"),og()(),Cl(9,"div",3),Hl(10,"po-button",4),Cl(11,"po-button",5),dt("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),og()()(),Cl(12,"po-widget",6),dt("p-click",function(){return i.openModal("account")}),Cl(13,"div",7),qx(14,"$2.818,29"),og(),Cl(15,"div",8),qx(16,"Last updated at 18:34"),og()(),Cl(17,"po-widget",9),dt("p-primary-action",function(){return i.openModal("account")}),Cl(18,"div",10),qx(19,"$5.000,00"),og(),Cl(20,"div",8),qx(21,"Last updated at 08:20"),og()()(),Cl(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),qx(27,"Enter the user routine"),og()()(),Cl(28,"div",15),Hl(29,"po-multiselect",16),og()(),Cl(30,"po-widget",17)(31,"div",7),qx(32,"Credit card"),og(),Cl(33,"div",8),qx(34,"MasterCard - 5500 0000 0000 0004"),og()(),Cl(35,"po-widget",18),dt("p-primary-action",function(){return i.openModal("savings")}),Cl(36,"div",7),qx(37,"$2.000,00"),og(),Cl(38,"div",8),qx(39,"05/03/2018"),og()()()(),Cl(40,"po-modal",19,0),Hl(42,"po-table",20),og()),l&2&&(Lp(2),ZE("p-height",190),Lp(10),ZE("p-height",190),Lp(5),ZE("p-height",190),Lp(6),ZE("p-height",180),Lp(6),ZE("p-options",i.options),Lp(),ZE("p-actions",i.myActions)("p-height",180),Lp(5),ZE("p-height",180)("p-primary",true),Lp(5),ZE("p-title",i.titleDetailsModal),Lp(2),ZE("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Qt,Ww,Ko,U3,ONe],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Widget - Finance dashboard"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row sample-finance-row-gap">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-finance-row-gap {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-widget-finance-dashboard"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Pe],encapsulation:2})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:"40%"}),He=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),je=o=>({header:o}),Je=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Hl(0,"po-chart",8),o&2&&ZE("p-options",oN(3,je,iN(2,He)))("p-series",sN(7,Qe,iN(5,Je),iN(6,Ge)));}function Xe(o,k){if(o&1&&(Cl(0,"li"),qx(1),og()),o&2){let p=k.$implicit;Lp(),dw(p);}}var Te=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&zl(Ko,7),l&2){let m;uo(m=fo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(Cl(0,"div",1)(1,"po-widget",2),dt("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),Hl(2,"po-info",3),og(),Cl(3,"po-widget",4)(4,"div"),qx(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),Cl(6,"div",5)(7,"ul")(8,"li"),qx(9,"Out-of-the-Box"),og(),Cl(10,"li"),qx(11,"Standardized and Opinion-Based Architecture"),og(),Cl(12,"li"),qx(13,"Next Generation Reactivity (Signals)"),og(),Cl(14,"li"),qx(15,"Focus on Enterprise and Security"),og()()()(),WE(16,Ke,1,10,"ng-template",null,0,vN),og()(),Cl(18,"po-modal",6),qx(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),Cl(20,"div",7)(21,"ul"),cx(22,Xe,2,1,"li",null,ax),og()()()),l&2){let m=Sx(17);Lp(),ZE("p-help",i.help),Lp(),ZE("p-label",i.label)("p-value",i.value),Lp(),ZE("p-avatar",oN(4,Ue,m)),Lp(19),lx(i.technologies);}},dependencies:[Sde,sme,Ko,ONe],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),Me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Widget - Card"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-widget-card/sample-po-widget-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-widget-card"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Te],encapsulation:2})}return o})();var De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-widget"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoWidgetComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-widget"),og(),qx(17," \xE9 recomendado para exibi\xE7\xE3o de "),Cl(18,"em"),qx(19,"dashboards"),og(),qx(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),og(),Cl(21,"p"),qx(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),og(),Cl(23,"p"),qx(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),Cl(25,"a",6),qx(26,"Grid System"),og(),qx(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Cl(28,"h4"),qx(29,"Boas pr\xE1ticas"),og(),Cl(30,"p"),qx(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),Cl(32,"code"),qx(33,"18.75rem"),og(),qx(34," no componente."),og(),Cl(35,"h4"),qx(36,"Acessibilidade tratada no componente"),og(),Cl(37,"p"),qx(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Cl(39,"ul")(40,"li"),qx(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),og(),Cl(42,"li"),qx(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),Cl(44,"a",7),qx(45,"4.1.2: Name, Role, Value"),og(),qx(46,")"),og(),Cl(47,"li"),qx(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),Cl(49,"a",8),qx(50,"2.4.12: Focus Appearance"),og(),qx(51,")"),og(),Cl(52,"li"),qx(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),Cl(54,"a",9),qx(55,"2.4.1 - Keyboard"),og(),qx(56,")"),og()(),Cl(57,"h4"),qx(58,"Tokens customiz\xE1veis"),og(),Cl(59,"p"),qx(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(61,"blockquote")(62,"p"),qx(63,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(64,"a",10),qx(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(66,"."),og()(),Cl(67,"table")(68,"thead")(69,"tr")(70,"th"),qx(71,"Propriedade"),og(),Cl(72,"th"),qx(73,"Descri\xE7\xE3o"),og(),Cl(74,"th"),qx(75,"Valor Padr\xE3o"),og()()(),Cl(76,"tbody")(77,"tr")(78,"td")(79,"strong"),qx(80,"Default Values"),og()(),Hl(81,"td")(82,"td"),og(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--font-family"),og()(),Cl(87,"td"),qx(88,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--font-family-theme) "),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--font-size"),og()(),Cl(96,"td"),qx(97,"Tamanho da fonte"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--font-size-sm)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--font-weight"),og()(),Cl(105,"td"),qx(106,"Peso da fonte"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--font-weight-bold)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--font-color"),og()(),Cl(114,"td"),qx(115,"Cor da fonte"),og(),Cl(116,"td")(117,"code"),qx(118,"var(--color-neutral-dark-95)"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--padding"),og(),qx(123," - "),Cl(124,"code"),qx(125,"@deprecated 21.x.x"),og()(),Cl(126,"td"),qx(127,"Preenchimento do componente"),og(),Cl(128,"td")(129,"code"),qx(130,"1rem"),og()()(),Cl(131,"tr")(132,"td")(133,"code"),qx(134,"--padding-header"),og()(),Cl(135,"td"),qx(136,"Preenchimento do header"),og(),Cl(137,"td")(138,"code"),qx(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--padding-body"),og()(),Cl(144,"td"),qx(145,"Preenchimento do body"),og(),Cl(146,"td")(147,"code"),qx(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Cl(149,"tr")(150,"td")(151,"code"),qx(152,"--padding-avatar"),og()(),Cl(153,"td"),qx(154,"Preenchimento do avatar"),og(),Cl(155,"td")(156,"code"),qx(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),og()()(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--padding-footer"),og()(),Cl(162,"td"),qx(163,"Preenchimento do footer"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--border-radius"),og()(),Cl(171,"td"),qx(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--border-radius-md)"),og()()(),Cl(176,"tr")(177,"td")(178,"code"),qx(179,"--border-width"),og()(),Cl(180,"td"),qx(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(182,"td")(183,"code"),qx(184,"var(--border-width-sm)"),og()()(),Cl(185,"tr")(186,"td")(187,"code"),qx(188,"--border-color"),og()(),Cl(189,"td"),qx(190,"Cor da borda"),og(),Cl(191,"td")(192,"code"),qx(193,"var(--color-neutral-light-20)"),og()()(),Cl(194,"tr")(195,"td")(196,"code"),qx(197,"--background"),og()(),Cl(198,"td"),qx(199,"Cor de background"),og(),Cl(200,"td")(201,"code"),qx(202,"var(--color-neutral-light-00)"),og()()(),Cl(203,"tr")(204,"td")(205,"code"),qx(206,"--shadow"),og()(),Cl(207,"td"),qx(208,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(209,"td")(210,"code"),qx(211,"var(--shadow-md)"),og()()(),Cl(212,"tr")(213,"td")(214,"strong"),qx(215,"Hover"),og()(),Hl(216,"td")(217,"td"),og(),Cl(218,"tr")(219,"td")(220,"code"),qx(221,"--border-color-hover"),og()(),Cl(222,"td"),qx(223,"Cor da borda no estado hover"),og(),Cl(224,"td")(225,"code"),qx(226,"var(--color-action-hover)"),og()()(),Cl(227,"tr")(228,"td")(229,"strong"),qx(230,"Focused"),og()(),Hl(231,"td")(232,"td"),og(),Cl(233,"tr")(234,"td")(235,"code"),qx(236,"--color-focused"),og()(),Cl(237,"td"),qx(238,"Cor principal no estado de focus"),og(),Cl(239,"td")(240,"code"),qx(241,"var(--color-action-default)"),og()()(),Cl(242,"tr")(243,"td")(244,"code"),qx(245,"--outline-color-focused"),og(),qx(246," \xA0"),og(),Cl(247,"td"),qx(248,"Cor do outline do estado de focus"),og(),Cl(249,"td")(250,"code"),qx(251,"var(--color-action-focus)"),og()()()()()(),Cl(252,"div",11)(253,"h4",12),qx(254,"Seletor"),og(),Cl(255,"pre",13),qx(256,`<po-widget
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
`),og()(),Cl(257,"h4",14),qx(258,"Propriedades"),og(),Cl(259,"table",15)(260,"tr",16)(261,"th",17),qx(262,"Nome"),og(),Cl(263,"th",17),qx(264,"Tipo"),og(),Cl(265,"th",17),qx(266,"Padr\xE3o"),og(),Cl(267,"th",17),qx(268,"Descri\xE7\xE3o"),og()(),Cl(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),qx(273," p-actions"),Hl(274,"br"),og()()(),Cl(275,"td",22)(276,"code",23),qx(277,"Array<PoPopupAction>"),og()(),Cl(278,"td",24),qx(279,"-"),og(),Cl(280,"td",25)(281,"em")(282,"strong"),qx(283,"(opcional)"),og()(),Cl(284,"p"),qx(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Cl(286,"code"),qx(287,"PoPopupAction"),og(),qx(288,"."),og()()(),Cl(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),qx(293," p-avatar"),Hl(294,"br"),og()()(),Cl(295,"td",22)(296,"code",26),qx(297,"PoWidgetAvatar"),og()(),Cl(298,"td",24),qx(299,"-"),og(),Cl(300,"td",25)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),og()()(),Cl(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),qx(310," p-background"),Hl(311,"br"),og()()(),Cl(312,"td",22)(313,"code",27),qx(314,"string"),og()(),Cl(315,"td",24),qx(316,"-"),og(),Cl(317,"td",25)(318,"em")(319,"strong"),qx(320,"(opcional)"),og()(),Cl(321,"p"),qx(322,"Define uma imagem de fundo."),og(),Cl(323,"blockquote")(324,"p"),qx(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),Cl(326,"code"),qx(327,"p-widget"),og(),qx(328,`,
pode-se utilizar a propriedade `),Cl(329,"code"),qx(330,"p-primary"),og(),qx(331," em conjunto para que os textos fiquem na cor branca."),og()()()(),Cl(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),qx(336," (p-click)"),Hl(337,"br"),og()()(),Cl(338,"td",22)(339,"code",30),qx(340,"EventEmitter"),og()(),Cl(341,"td",24),qx(342,"-"),og(),Cl(343,"td",25)(344,"em")(345,"strong"),qx(346,"(opcional)"),og()(),Cl(347,"p"),qx(348,"Evento disparado quando o usu\xE1rio clicar no componente."),og(),Cl(349,"blockquote")(350,"p"),qx(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),og()()()(),Cl(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),qx(356," p-danger-primary-action"),Hl(357,"br"),og()()(),Cl(358,"td",22)(359,"code",31),qx(360,"false"),og()(),Cl(361,"td",24)(362,"p")(363,"code"),qx(364,"false"),og()()(),Cl(365,"td",25)(366,"em")(367,"strong"),qx(368,"(opcional)"),og()(),Cl(369,"p"),qx(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Cl(371,"code"),qx(372,"p-primary-label"),og(),qx(373," ativar\xE1 o modo "),Cl(374,"code"),qx(375,"danger"),og(),qx(376,"."),og(),Cl(377,"blockquote")(378,"p"),qx(379,"Incompat\xEDvel com o tipo "),Cl(380,"strong"),qx(381,"tertiary"),og(),qx(382," da propriedade "),Cl(383,"code"),qx(384,"p-kind-primary-action"),og(),qx(385,"."),og()()()(),Cl(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),qx(390," p-danger-secondary-action"),Hl(391,"br"),og()()(),Cl(392,"td",22)(393,"code",31),qx(394,"false"),og()(),Cl(395,"td",24)(396,"p")(397,"code"),qx(398,"false"),og()()(),Cl(399,"td",25)(400,"em")(401,"strong"),qx(402,"(opcional)"),og()(),Cl(403,"p"),qx(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Cl(405,"code"),qx(406,"p-secondary-label"),og(),qx(407," ativar\xE1 o modo "),Cl(408,"code"),qx(409,"danger"),og(),qx(410,"."),og(),Cl(411,"blockquote")(412,"p"),qx(413,"Incompat\xEDvel com o tipo "),Cl(414,"strong"),qx(415,"tertiary"),og(),qx(416," da propriedade "),Cl(417,"code"),qx(418,"p-kind-primary-action"),og(),qx(419,"."),og()()()(),Cl(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),qx(424," p-disabled"),Hl(425,"br"),og()()(),Cl(426,"td",22)(427,"code",32),qx(428,"boolean"),og()(),Cl(429,"td",24)(430,"p")(431,"code"),qx(432,"false"),og()()(),Cl(433,"td",25)(434,"em")(435,"strong"),qx(436,"(opcional)"),og()(),Cl(437,"p"),qx(438,"Desabilita o componente."),og()()(),Cl(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),qx(443," p-height"),Hl(444,"br"),og()()(),Cl(445,"td",22)(446,"code",33),qx(447,"number"),og()(),Cl(448,"td",24),qx(449,"-"),og(),Cl(450,"td",25)(451,"em")(452,"strong"),qx(453,"(opcional)"),og()(),Cl(454,"p"),qx(455,"Define a altura do componente."),og(),Cl(456,"blockquote")(457,"p"),qx(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),og()()()(),Cl(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),qx(463," p-help"),Hl(464,"br"),og()()(),Cl(465,"td",22)(466,"code",27),qx(467,"string"),og()(),Cl(468,"td",24),qx(469,"-"),og(),Cl(470,"td",25)(471,"em")(472,"strong"),qx(473,"(opcional)"),og()(),Cl(474,"p"),qx(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Cl(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),qx(480," p-kind-primary-action"),Hl(481,"br"),og()()(),Cl(482,"td",22)(483,"code",27),qx(484,"string"),og()(),Cl(485,"td",24)(486,"p")(487,"code"),qx(488,"tertiary"),og()()(),Cl(489,"td",25)(490,"em")(491,"strong"),qx(492,"(opcional)"),og()(),Cl(493,"p"),qx(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Cl(495,"code"),qx(496,"p-primary-label"),og(),qx(497,", conforme o enum "),Cl(498,"code"),qx(499,"PoButtonKind"),og(),qx(500,"."),og()()(),Cl(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),qx(505," p-kind-secondary-action"),Hl(506,"br"),og()()(),Cl(507,"td",22)(508,"code",27),qx(509,"string"),og()(),Cl(510,"td",24)(511,"p")(512,"code"),qx(513,"tertiary"),og()()(),Cl(514,"td",25)(515,"em")(516,"strong"),qx(517,"(opcional)"),og()(),Cl(518,"p"),qx(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Cl(520,"code"),qx(521,"p-secondary-label"),og(),qx(522,", conforme o enum "),Cl(523,"code"),qx(524,"PoButtonKind"),og(),qx(525,"."),og()()(),Cl(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),qx(530," p-no-shadow"),Hl(531,"br"),og()()(),Cl(532,"td",22)(533,"code",32),qx(534,"boolean"),og()(),Cl(535,"td",24)(536,"p")(537,"code"),qx(538,"true"),og()()(),Cl(539,"td",25)(540,"em")(541,"strong"),qx(542,"(opcional)"),og()(),Cl(543,"p"),qx(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),og(),Cl(545,"blockquote")(546,"p"),qx(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),Cl(548,"code"),qx(549,"p-click"),og(),qx(550," est\xE1 definido."),og()()()(),Cl(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),qx(555," (p-on-disabled)"),Hl(556,"br"),og()()(),Cl(557,"td",22)(558,"code",30),qx(559,"EventEmitter"),og()(),Cl(560,"td",24),qx(561,"-"),og(),Cl(562,"td",25)(563,"em")(564,"strong"),qx(565,"(opcional)"),og()(),Cl(566,"p"),qx(567,"Evento disparado quando a propriedade "),Cl(568,"code"),qx(569,"p-disabled"),og(),qx(570," for alterada."),og()()(),Cl(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),qx(575," p-primary"),Hl(576,"br"),og()()(),Cl(577,"td",22)(578,"code",32),qx(579,"boolean"),og()(),Cl(580,"td",24)(581,"p")(582,"code"),qx(583,"false"),og()()(),Cl(584,"td",25)(585,"em")(586,"strong"),qx(587,"(opcional)"),og()(),Cl(588,"p"),qx(589,"Op\xE7\xE3o para que o "),Cl(590,"code"),qx(591,"po-widget"),og(),qx(592," fique em destaque."),og()()(),Cl(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),qx(597," (p-primary-action)"),Hl(598,"br"),og()()(),Cl(599,"td",22)(600,"code",30),qx(601,"EventEmitter"),og()(),Cl(602,"td",24),qx(603,"-"),og(),Cl(604,"td",25)(605,"em")(606,"strong"),qx(607,"(opcional)"),og()(),Cl(608,"p"),qx(609,"Evento disparado ao clicar na a\xE7\xE3o "),Cl(610,"code"),qx(611,"p-primary-label"),og(),qx(612,"."),og()()(),Cl(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),qx(617," p-primary-label"),Hl(618,"br"),og()()(),Cl(619,"td",22)(620,"code",27),qx(621,"string"),og()(),Cl(622,"td",24),qx(623,"-"),og(),Cl(624,"td",25)(625,"em")(626,"strong"),qx(627,"(opcional)"),og()(),Cl(628,"p"),qx(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),og()()(),Cl(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),qx(634," (p-secondary-action)"),Hl(635,"br"),og()()(),Cl(636,"td",22)(637,"code",30),qx(638,"EventEmitter"),og()(),Cl(639,"td",24),qx(640,"-"),og(),Cl(641,"td",25)(642,"em")(643,"strong"),qx(644,"(opcional)"),og()(),Cl(645,"p"),qx(646,"Evento disparado ao clicar na a\xE7\xE3o "),Cl(647,"code"),qx(648,"p-secondary-label"),og(),qx(649,"."),og()()(),Cl(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),qx(654," p-secondary-label"),Hl(655,"br"),og()()(),Cl(656,"td",22)(657,"code",27),qx(658,"string"),og()(),Cl(659,"td",24),qx(660,"-"),og(),Cl(661,"td",25)(662,"em")(663,"strong"),qx(664,"(opcional)"),og()(),Cl(665,"p"),qx(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),og(),Cl(667,"blockquote")(668,"p"),qx(669,"Exibida apenas quando "),Cl(670,"code"),qx(671,"p-primary-label"),og(),qx(672," estiver definida."),og()()()(),Cl(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),qx(677," (p-setting)"),Hl(678,"br"),og()()(),Cl(679,"td",22)(680,"code",30),qx(681,"EventEmitter"),og()(),Cl(682,"td",24),qx(683,"-"),og(),Cl(684,"td",25)(685,"em")(686,"strong"),qx(687,"(opcional)"),og()(),Cl(688,"p"),qx(689,"Evento disparado ao clicar em "),Cl(690,"strong"),qx(691,"Configura\xE7\xF5es"),og(),qx(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Cl(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),qx(697," p-size"),Hl(698,"br"),og()()(),Cl(699,"td",22)(700,"code",27),qx(701,"string"),og()(),Cl(702,"td",24)(703,"p")(704,"code"),qx(705,"medium"),og()()(),Cl(706,"td",25)(707,"em")(708,"strong"),qx(709,"(opcional)"),og()(),Cl(710,"p"),qx(711,"Define o tamanho dos bot\xF5es do componente:"),og(),Cl(712,"ul")(713,"li")(714,"code"),qx(715,"small"),og(),qx(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(717,"li")(718,"code"),qx(719,"medium"),og(),qx(720,": altura de 44px."),og()(),Cl(721,"blockquote")(722,"p"),qx(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(724,"code"),qx(725,"medium"),og(),qx(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(727,"a",34),qx(728,"po-theme"),og(),qx(729,"."),og()()()(),Cl(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),qx(734," p-tag-icon"),Hl(735,"br"),og()()(),Cl(736,"td",22)(737,"code",27),qx(738,"string "),og(),Cl(739,"code",35),qx(740," TemplateRef<void>"),og()(),Cl(741,"td",24),qx(742,"-"),og(),Cl(743,"td",25)(744,"em")(745,"strong"),qx(746,"(opcional)"),og()(),Cl(747,"p"),qx(748,"Define o \xEDcone exibido ao lado do label da "),Cl(749,"code"),qx(750,"p-tag"),og(),qx(751,"."),og(),Cl(752,"p"),qx(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(754,"a",36),qx(755,"Biblioteca de \xEDcones PO UI"),og(),qx(756,", conforme exemplo:"),og(),Cl(757,"pre")(758,"code"),qx(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),og()(),Cl(760,"p"),qx(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(762,"em"),qx(763,"Font Awesome"),og(),qx(764,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Cl(765,"pre")(766,"code"),qx(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),og()(),Cl(768,"p"),qx(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(770,"code"),qx(771,"TemplateRef"),og(),qx(772,", conforme exemplo abaixo:"),og(),Cl(773,"pre")(774,"code"),qx(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()(),Cl(776,"blockquote")(777,"p"),qx(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(779,"code"),qx(780,"font-size: inherit"),og(),qx(781," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),qx(786," p-tag"),Hl(787,"br"),og()()(),Cl(788,"td",22)(789,"code",27),qx(790,"string"),og()(),Cl(791,"td",24),qx(792,"-"),og(),Cl(793,"td",25)(794,"em")(795,"strong"),qx(796,"(opcional)"),og()(),Cl(797,"p"),qx(798,"Label da tag exibida no header."),og(),Cl(799,"blockquote")(800,"p"),qx(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Cl(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),qx(806," p-tag-position"),Hl(807,"br"),og()()(),Cl(808,"td",22)(809,"code",27),qx(810,"string"),og()(),Cl(811,"td",24)(812,"p")(813,"code"),qx(814,"right"),og()()(),Cl(815,"td",25)(816,"em")(817,"strong"),qx(818,"(opcional)"),og()(),Cl(819,"p"),qx(820,"Define o posicionamento da "),Cl(821,"code"),qx(822,"po-tag"),og(),qx(823," no cabe\xE7alho do Widget:"),og(),Cl(824,"ul")(825,"li")(826,"code"),qx(827,"right"),og(),qx(828,": posicionada no canto superior direito do cabe\xE7alho."),og(),Cl(829,"li")(830,"code"),qx(831,"top"),og(),qx(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),og(),Cl(833,"li")(834,"code"),qx(835,"bottom"),og(),qx(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),og()()()(),Cl(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),qx(841," p-tag-type"),Hl(842,"br"),og()()(),Cl(843,"td",22)(844,"code",37),qx(845,"PoTagType "),og(),Cl(846,"code",27),qx(847," string"),og()(),Cl(848,"td",24)(849,"p")(850,"code"),qx(851,"success"),og()()(),Cl(852,"td",25)(853,"em")(854,"strong"),qx(855,"(opcional)"),og()(),Cl(856,"p"),qx(857,"Define o tipo da "),Cl(858,"code"),qx(859,"p-tag"),og(),qx(860,", conforme o enum "),Cl(861,"strong"),qx(862,"PoTagType"),og(),qx(863,"."),og(),Cl(864,"p"),qx(865,"Valores v\xE1lidos:"),og(),Cl(866,"ul")(867,"li")(868,"code"),qx(869,"success"),og(),qx(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Cl(871,"li")(872,"code"),qx(873,"warning"),og(),qx(874,": cor amarela que representa aviso ou advert\xEAncia."),og(),Cl(875,"li")(876,"code"),qx(877,"danger"),og(),qx(878,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Cl(879,"li")(880,"code"),qx(881,"info"),og(),qx(882,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Cl(883,"li")(884,"code"),qx(885,"neutral"),og(),qx(886,": cor cinza claro para uso geral."),og()()()(),Cl(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),qx(891," p-title"),Hl(892,"br"),og()()(),Cl(893,"td",22)(894,"code",27),qx(895,"string"),og()(),Cl(896,"td",24),qx(897,"-"),og(),Cl(898,"td",25)(899,"em")(900,"strong"),qx(901,"(opcional)"),og()(),Cl(902,"p"),qx(903,"T\xEDtulo do componente."),og(),Cl(904,"blockquote")(905,"p"),qx(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Cl(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),qx(911," (p-title-action)"),Hl(912,"br"),og()()(),Cl(913,"td",22)(914,"code",30),qx(915,"EventEmitter"),og()(),Cl(916,"td",24),qx(917,"-"),og(),Cl(918,"td",25)(919,"em")(920,"strong"),qx(921,"(opcional)"),og()(),Cl(922,"p"),qx(923,"Evento disparado ao clicar no t\xEDtulo definido em "),Cl(924,"code"),qx(925,"p-title"),og(),qx(926,"."),og()()()(),Cl(927,"h3"),qx(928,"Interfaces"),og(),Cl(929,"h4",38)(930,"code",5),qx(931,"PoPopupAction"),og()(),Cl(932,"div",2)(933,"p"),qx(934,"Interface para lista de a\xE7\xF5es do componente."),og()(),Cl(935,"h4",14),qx(936,"Propriedades"),og(),Cl(937,"table",15)(938,"tr",16)(939,"th",17),qx(940,"Nome"),og(),Cl(941,"th",17),qx(942,"Tipo"),og(),Cl(943,"th",17),qx(944,"Descri\xE7\xE3o"),og()(),Cl(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),qx(949," action"),Hl(950,"br"),og()()(),Cl(951,"td",22)(952,"code",39),qx(953,"Function"),og()(),Cl(954,"td",25)(955,"em")(956,"strong"),qx(957,"(opcional)"),og()(),Cl(958,"p"),qx(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(960,"p"),qx(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(962,"code"),qx(963,"subItems"),og(),qx(964,"."),og(),Cl(965,"blockquote")(966,"p"),qx(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(968,"em"),qx(969,"bind"),og(),qx(970,`:
`),Cl(971,"code"),qx(972,"action: this.myFunction.bind(this)"),og()()()()(),Cl(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),qx(977," disabled"),Hl(978,"br"),og()()(),Cl(979,"td",22)(980,"code",32),qx(981,"boolean "),og(),Cl(982,"code",39),qx(983," Function"),og()(),Cl(984,"td",25)(985,"em")(986,"strong"),qx(987,"(opcional)"),og()(),Cl(988,"p"),qx(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),qx(994," icon"),Hl(995,"br"),og()()(),Cl(996,"td",22)(997,"code",27),qx(998,"string "),og(),Cl(999,"code",35),qx(1e3," TemplateRef<void>"),og()(),Cl(1001,"td",25)(1002,"em")(1003,"strong"),qx(1004,"(opcional)"),og()(),Cl(1005,"p"),qx(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(1007,"p"),qx(1008,"Aceita \xEDcones da "),Cl(1009,"a",36),qx(1010,"Biblioteca de \xEDcones"),og(),qx(1011,`, fontes externas (ex: Font Awesome)
ou um `),Cl(1012,"code"),qx(1013,"TemplateRef"),og(),qx(1014," para \xEDcones customizados."),og(),Cl(1015,"pre")(1016,"code"),qx(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),qx(1022," label"),Hl(1023,"br"),og()()(),Cl(1024,"td",22)(1025,"code",27),qx(1026,"string"),og()(),Cl(1027,"td",25)(1028,"p"),qx(1029,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(1030,"p"),qx(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(1032,"code"),qx(1033,"subItems"),og(),qx(1034,"."),og()()(),Cl(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),qx(1039," selected"),Hl(1040,"br"),og()()(),Cl(1041,"td",22)(1042,"code",32),qx(1043,"boolean"),og()(),Cl(1044,"td",25)(1045,"em")(1046,"strong"),qx(1047,"(opcional)"),og()(),Cl(1048,"p"),qx(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),qx(1054," separator"),Hl(1055,"br"),og()()(),Cl(1056,"td",22)(1057,"code",32),qx(1058,"boolean"),og()(),Cl(1059,"td",25)(1060,"em")(1061,"strong"),qx(1062,"(opcional)"),og()(),Cl(1063,"p"),qx(1064,"Atribui uma linha separadora acima do item."),og()()(),Cl(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),qx(1069," subItems"),Hl(1070,"br"),og()()(),Cl(1071,"td",22)(1072,"code",23),qx(1073,"Array<PoPopupAction>"),og()(),Cl(1074,"td",25)(1075,"em")(1076,"strong"),qx(1077,"(opcional)"),og()(),Cl(1078,"p"),qx(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(1080,"p"),qx(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(1082,"blockquote")(1083,"p"),qx(1084,"As propriedades "),Cl(1085,"code"),qx(1086,"disabled"),og(),qx(1087,", "),Cl(1088,"code"),qx(1089,"type"),og(),qx(1090," e "),Cl(1091,"code"),qx(1092,"visible"),og(),qx(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(1094,"blockquote")(1095,"p"),qx(1096,"Quando "),Cl(1097,"code"),qx(1098,"url"),og(),qx(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(1100,"blockquote")(1101,"p"),qx(1102,"Em subn\xEDveis aninhados, o "),Cl(1103,"code"),qx(1104,"icon"),og(),qx(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),qx(1110," type"),Hl(1111,"br"),og()()(),Cl(1112,"td",22)(1113,"code",27),qx(1114,"string"),og()(),Cl(1115,"td",25)(1116,"em")(1117,"strong"),qx(1118,"(opcional)"),og()(),Cl(1119,"p"),qx(1120,"Define a cor do item."),og(),Cl(1121,"p"),qx(1122,"Valores v\xE1lidos:"),og(),Cl(1123,"ul")(1124,"li")(1125,"code"),qx(1126,"default"),og()(),Cl(1127,"li")(1128,"code"),qx(1129,"danger"),og()()()()(),Cl(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),qx(1134," url"),Hl(1135,"br"),og()()(),Cl(1136,"td",22)(1137,"code",27),qx(1138,"string"),og()(),Cl(1139,"td",25)(1140,"em")(1141,"strong"),qx(1142,"(opcional)"),og()(),Cl(1143,"p"),qx(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(1145,"p"),qx(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(1147,"code"),qx(1148,"url"),og(),qx(1149," \xE9 informada em um agrupador, o clique "),Cl(1150,"strong"),qx(1151,"n\xE3o abrir\xE1 os subitens"),og(),qx(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(1153,"blockquote")(1154,"p"),qx(1155,"Quando informada, tem prioridade sobre a propriedade "),Cl(1156,"code"),qx(1157,"action"),og(),qx(1158,"."),og()()()(),Cl(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),qx(1163," visible"),Hl(1164,"br"),og()()(),Cl(1165,"td",22)(1166,"code",32),qx(1167,"boolean "),og(),Cl(1168,"code",39),qx(1169," Function"),og()(),Cl(1170,"td",25)(1171,"em")(1172,"strong"),qx(1173,"(opcional)"),og()(),Cl(1174,"p"),qx(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(1176,"h4",38)(1177,"code",5),qx(1178,"PoWidgetAvatar"),og()(),Cl(1179,"div",2)(1180,"p"),qx(1181,"Interface para defini\xE7\xE3o do avatar no "),Cl(1182,"code"),qx(1183,"po-widget"),og(),qx(1184,"."),og()(),Cl(1185,"h4",14),qx(1186,"Propriedades"),og(),Cl(1187,"table",15)(1188,"tr",16)(1189,"th",17),qx(1190,"Nome"),og(),Cl(1191,"th",17),qx(1192,"Tipo"),og(),Cl(1193,"th",17),qx(1194,"Descri\xE7\xE3o"),og()(),Cl(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),qx(1199," customTemplate"),Hl(1200,"br"),og()()(),Cl(1201,"td",22)(1202,"code",40),qx(1203,"TemplateRef<any>"),og()(),Cl(1204,"td",25)(1205,"em")(1206,"strong"),qx(1207,"(opcional)"),og()(),Cl(1208,"p"),qx(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),og(),Cl(1210,"pre")(1211,"code"),qx(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),og()()()(),Cl(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),qx(1217," size"),Hl(1218,"br"),og()()(),Cl(1219,"td",22)(1220,"code",27),qx(1221,"string"),og()(),Cl(1222,"td",25)(1223,"em")(1224,"strong"),qx(1225,"(opcional)"),og()(),Cl(1226,"p"),qx(1227,"Tamanho de exibi\xE7\xE3o do componente "),Cl(1228,"code"),qx(1229,"po-avatar"),og(),qx(1230,"."),og(),Cl(1231,"p"),qx(1232,"Valores v\xE1lidos:"),og(),Cl(1233,"ul")(1234,"li")(1235,"code"),qx(1236,"xs"),og(),qx(1237," (24x24)"),og(),Cl(1238,"li")(1239,"code"),qx(1240,"sm"),og(),qx(1241," (32x32)"),og(),Cl(1242,"li")(1243,"code"),qx(1244,"md"),og(),qx(1245," (64x64)"),og(),Cl(1246,"li")(1247,"code"),qx(1248,"lg"),og(),qx(1249," (96x96)"),og(),Cl(1250,"li")(1251,"code"),qx(1252,"xl"),og(),qx(1253," (144x144)"),og()()()(),Cl(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),qx(1258," src"),Hl(1259,"br"),og()()(),Cl(1260,"td",22)(1261,"code",27),qx(1262,"string"),og()(),Cl(1263,"td",25)(1264,"em")(1265,"strong"),qx(1266,"(opcional)"),og()(),Cl(1267,"p"),qx(1268,"Fonte da imagem que pode ser um caminho local ("),Cl(1269,"code"),qx(1270,"./assets/images/logo-black-small.png"),og(),qx(1271,`)
ou um servidor externo (`),Cl(1272,"code"),qx(1273,"https://po-ui.io/assets/images/logo-black-small.png"),og(),qx(1274,")."),og()()(),Cl(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),qx(1279," widthCustomTemplate"),Hl(1280,"br"),og()()(),Cl(1281,"td",22)(1282,"code",27),qx(1283,"string"),og()(),Cl(1284,"td",25)(1285,"em")(1286,"strong"),qx(1287,"(opcional)"),og()(),Cl(1288,"p"),qx(1289,"Define a largura em porcentagem do "),Cl(1290,"code"),qx(1291,"customTemplate"),og(),qx(1292,"."),og(),Cl(1293,"p"),qx(1294,"O valor m\xE1ximo aceito \xE9 "),Cl(1295,"code"),qx(1296,"50%"),og(),qx(1297,"."),og()()()(),Cl(1298,"h3"),qx(1299,"Enums"),og(),Cl(1300,"h4",4)(1301,"code",5),qx(1302,"PoButtonKind"),og()(),Cl(1303,"div",2)(1304,"p"),qx(1305,"Estilos dispon\xEDveis do button."),og()(),Cl(1306,"h4",14),qx(1307,"Propriedades"),og(),Cl(1308,"table",15)(1309,"tr",16)(1310,"th",17),qx(1311,"Nome"),og(),Cl(1312,"th",17),qx(1313,"Descri\xE7\xE3o"),og()(),Cl(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),qx(1318," primary"),Hl(1319,"br"),og()()(),Cl(1320,"td",25)(1321,"p"),qx(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Cl(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),qx(1327," secondary"),Hl(1328,"br"),og()()(),Cl(1329,"td",25)(1330,"p"),qx(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Cl(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),qx(1336," tertiary"),Hl(1337,"br"),og()()(),Cl(1338,"td",25)(1339,"p"),qx(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var Ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-widget-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ye,we,_e,Me,De],encapsulation:2})}return o})();var tt=[{path:"",component:Ae}],We=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[bL.forChild(tt),bL]})}return o})();var Ot=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ca,We]})}return o})();
export{Ot as DocPoWidgetModule};