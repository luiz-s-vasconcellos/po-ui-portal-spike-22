import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ii as nI,Ir as Rk,Ji as qx,Jn as C1,K as K3,Ki as px,Kn as Ag,Pi as mt,Qr as Z,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Vi as p,Vr as TF,W as Jo,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dn as moe,dt as Sae,et as Noe,ga as xx,gt as Tt,hr as Hk,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,mr as He$1,ni as _o,nn as goe,or as EO,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Le=[`target`];var Ve=()=>({label:`PO Popup`});var qe=l=>[l];var Pe=(()=>{class l{cdr=p(He$1);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(a,o){if(a&1&&iu(Le,5,Z),a&2){let r;vo(r=_o())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(a,o){if(a&1){let r=Sx();jc(0,`po-icon`,2,0),mt(`click`,function(){y_(r);let i=Fx(3);return v_(i.toggle())}),wg(),nu(2,`po-popup`,3,1)}a&2&&(rg(2),jE(`p-actions`,mO(3,qe,gO(2,Ve)))(`p-target`,o.targetRef))},dependencies:[Tt,Jo],encapsulation:2,changeDetection:1})}return l})();var Oe=l=>({"docs-sample-code-tabs":l});var ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Popup - Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-popup-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Pe],encapsulation:2,changeDetection:1})}return l})();var Fe=[`target`];var we=(()=>{class l{poNotification=p(zu);targetRef;action;actions;customPositions;event;infoValue;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(d){let a=r({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}changeEvent(d,a){this.event=d,this.infoValue=a}restore(){this.actions=[],this.customPositions=[],this.event=``,this.infoValue=``,this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return!d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o)}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(a,o){if(a&1&&iu(Fe,7,Z),a&2){let r;vo(r=_o())&&(o.targetRef=r.first)}},standalone:!1,decls:33,vars:29,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-click-item`,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Clicked item`,1,`po-md-6`,3,`p-value`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let r=Sx();jc(0,`po-popup`,4,0),mt(`p-click-item`,function(i){return o.changeEvent(`p-click-item`,i)}),wg(),jc(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),mt(`p-click`,function(){y_(r);let i=Fx(1);return v_(i.toggle())}),wg()()(),nu(6,`po-divider`),jc(7,`div`,8),nu(8,`po-info`,9)(9,`po-info`,10),EO(10,`json`),wg(),nu(11,`po-divider`),jc(12,`form`,null,2)(14,`po-input`,11),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.label,i)||(o.action.label=i),v_(i)}),wg(),jc(15,`po-input`,12),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.action,i)||(o.action.action=i),v_(i)}),wg(),jc(16,`po-input`,13),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.url,i)||(o.action.url=i),v_(i)}),wg(),jc(17,`po-select`,14),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.type,i)||(o.action.type=i),v_(i)}),wg(),jc(18,`po-select`,15),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.icon,i)||(o.action.icon=i),v_(i)}),wg(),jc(19,`po-select`,16),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action.parent,i)||(o.action.parent=i),v_(i)}),wg(),jc(20,`po-checkbox-group`,17),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.action,i)||(o.action=i),v_(i)}),wg(),jc(21,`div`,8)(22,`po-button`,18),mt(`p-click`,function(){return o.addAction(o.action)}),wg()()(),nu(23,`po-divider`),jc(24,`form`,null,3)(26,`div`,8)(27,`po-input`,19),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.positions,i)||(o.positions=i),v_(i)}),mt(`p-change`,function(){return o.convertToArray()}),wg(),jc(28,`po-select`,20),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.position,i)||(o.position=i),v_(i)}),wg(),jc(29,`po-checkbox-group`,21),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.properties,i)||(o.properties=i),v_(i)}),wg(),jc(30,`po-radio-group`,22),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.size,i)||(o.size=i),v_(i)}),wg()(),jc(31,`div`,8)(32,`po-button`,23),mt(`p-click`,function(){y_(r);let i=Fx(13);return Fx(25).reset(),i.reset(),v_(o.restore())}),wg()()()}if(a&2){let r=Fx(13);jE(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),rg(8),jE(`p-value`,o.event),rg(),jE(`p-value`,wO(10,27,o.infoValue)),rg(5),ib(`ngModel`,o.action.label),t0(),rg(),ib(`ngModel`,o.action.action),t0(),rg(),ib(`ngModel`,o.action.url),t0(),rg(),ib(`ngModel`,o.action.type),jE(`p-options`,o.typeOptions),t0(),rg(),ib(`ngModel`,o.action.icon),jE(`p-options`,o.iconOptions),t0(),rg(),ib(`ngModel`,o.action.parent),jE(`p-options`,o.parentList),t0(),rg(),ib(`ngModel`,o.action),jE(`p-options`,o.actionOptions),t0(),rg(2),jE(`p-disabled`,r.form.invalid),rg(5),ib(`ngModel`,o.positions),t0(),rg(),ib(`ngModel`,o.position),jE(`p-options`,o.positionOptions),t0(),rg(),ib(`ngModel`,o.properties),jE(`p-options`,o.propertiesOptions),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,moe,_oe,Jo,Hk],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var ze=l=>({"docs-sample-code-tabs":l});var _e=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Popup - Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
  (p-click-item)="changeEvent('p-click-item', $event)"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  <po-info class="po-md-6" p-label="Clicked item" [p-value]="infoValue | json"> </po-info>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

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

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styleUrls: ['./sample-po-popup-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction & { parent?: string };
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  event: string;
  infoValue: any;
  parentList: Array<PoSelectOption>;
  position: string;
  positions: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPopupAction & { parent?: string }) {
    const newAction: PoPopupAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  changeEvent(type: string, event?: any) {
    this.event = type;
    this.infoValue = event;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.event = '';
    this.infoValue = '';
    this.parentList = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    };
  }

  private getActionNode(items: Array<PoPopupAction>, value: string): PoPopupAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoPopupAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-popup-labs`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ze,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,we],encapsulation:2,changeDetection:1})}return l})();var je=[`formEmail`];var He=[`target`];function Qe(l,Ye){if(l&1&&(jc(0,`div`)(1,`div`,6),nu(2,`po-info`,20),wg(),nu(3,`po-divider`),wg()),l&2){let d=xx();rg(2),jE(`p-value`,d.cc)}}var Ae=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(a,o){if(a&1&&iu(je,7)(He,7,Z)(ea,7),a&2){let r;vo(r=_o())&&(o.formEmail=r.first),vo(r=_o())&&(o.targetRef=r.first),vo(r=_o())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(a,o){if(a&1){let r=Sx();jc(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),iO(4,`Settings`),wg()()(),jc(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.to,i)||(o.to=i),v_(i)}),wg(),jc(11,`po-email`,9),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.cc,i)||(o.cc=i),v_(i)}),wg(),jc(12,`po-input`,10),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.subject,i)||(o.subject=i),v_(i)}),wg()(),jc(13,`div`,6)(14,`po-textarea`,11,2),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.emailText,i)||(o.emailText=i),v_(i)}),mt(`click`,function(){y_(r);let i=Fx(1);return v_(i.toggle())}),wg(),nu(16,`img`,12),wg(),jc(17,`div`,6)(18,`po-button`,13),mt(`p-click`,function(){return o.send()}),wg(),jc(19,`po-button`,14),mt(`p-click`,function(){return o.reset()}),wg()()()()(),jc(20,`po-modal`,15)(21,`div`,6),nu(22,`po-info`,16)(23,`po-info`,17),wg(),nu(24,`po-divider`),px(25,Qe,4,1,`div`),jc(26,`div`,6),nu(27,`po-info`,18),wg(),nu(28,`po-divider`),jc(29,`div`,6)(30,`po-textarea`,19),JN(),ob(`ngModelChange`,function(i){return y_(r),sO(o.emailText,i)||(o.emailText=i),v_(i)}),wg()()()}if(a&2){let r=Fx(8);jE(`p-actions`,o.popupActions)(`p-target`,o.targetRef),rg(10),ib(`ngModel`,o.to),t0(),rg(),ib(`ngModel`,o.cc),t0(),rg(),ib(`ngModel`,o.subject),t0(),rg(2),ib(`ngModel`,o.emailText),t0(),rg(4),jE(`p-disabled`,r.form.invalid),rg(),jE(`p-disabled`,r.form.invalid),rg(),jE(`p-primary-action`,o.primaryAction),rg(2),jE(`p-value`,o.from),rg(),jE(`p-value`,o.to),rg(2),mx(o.cc!==``?25:-1),rg(2),jE(`p-value`,o.subject),rg(3),ib(`ngModel`,o.emailText),t0()}},dependencies:[wK,nI,CK,EK,TF,EF,ni,Lf,K3,A5,goe,_oe,ea,Jo,Noe],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var Ge=l=>({"docs-sample-code-tabs":l});var Me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Popup Email`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-popup-email/sample-po-popup-email.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styleUrls: ['./sample-po-popup-email.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-popup-email/sample-po-popup-email.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-logo-po {
  height: 15%;
  padding-top: 2.5%;
}

.sample-popup-header-template {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #0c9abe;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-top: 5%;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-popup-email`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ge,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ae],encapsulation:2,changeDetection:1})}return l})();var Te=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:1002,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPopupModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-popup.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoPopupComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-popup`),wg(),iO(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),wg(),jc(18,`p`),iO(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),jc(20,`code`),iO(21,`subItems`),wg(),iO(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),wg(),jc(23,`p`),iO(24,`É possível escolher as posições do `),jc(25,`code`),iO(26,`po-popup`),wg(),iO(27,` em relação ao componente alvo, para isto veja a propriedade `),jc(28,`code`),iO(29,`p-position`),wg(),iO(30,`.`),wg(),jc(31,`p`),iO(32,`Também é possível informar um `),jc(33,`em`),iO(34,`template`),wg(),jc(35,`em`),iO(36,`header`),wg(),iO(37,` para o `),jc(38,`code`),iO(39,`po-popup`),wg(),iO(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),jc(41,`code`),iO(42,`p-popup-header-template`),wg(),iO(43,` no elemento que servirá de template, por exemplo:`),wg(),jc(44,`pre`)(45,`code`),iO(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),wg()(),jc(47,`h4`),iO(48,`Tokens customizáveis`),wg(),jc(49,`p`),iO(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(51,`blockquote`)(52,`p`),iO(53,`Para maiores informações, acesse o guia `),jc(54,`a`,6),iO(55,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(56,`.`),wg()(),jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),iO(61,`Propriedade`),wg(),jc(62,`th`),iO(63,`Descrição`),wg(),jc(64,`th`),iO(65,`Valor Padrão`),wg()()(),jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),iO(70,`Default Values`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--border-radius`),wg()(),jc(77,`td`),iO(78,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--border-radius-md)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--border-width`),wg()(),jc(86,`td`),iO(87,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--border-width-sm)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),iO(94,`--border-color`),wg()(),jc(95,`td`),iO(96,`Cor da borda`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--color-neutral-light-20)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),iO(103,`--background`),wg()(),jc(104,`td`),iO(105,`Cor do background`),wg(),jc(106,`td`)(107,`code`),iO(108,`var(--color-neutral-light-00)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`code`),iO(112,`--shadow`),wg()(),jc(113,`td`),iO(114,`Contém o valor da sombra do elemento`),wg(),jc(115,`td`)(116,`code`),iO(117,`var(--shadow-md)`),wg()()(),jc(118,`tr`)(119,`td`)(120,`strong`),iO(121,`po-popup po-item-list`),wg()(),nu(122,`td`)(123,`td`),wg(),jc(124,`tr`)(125,`td`)(126,`code`),iO(127,`--font-family`),wg()(),jc(128,`td`),iO(129,`Família tipográfica usada`),wg(),jc(130,`td`)(131,`code`),iO(132,`var(--font-family-theme)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),iO(136,`--font-size`),wg()(),jc(137,`td`),iO(138,`Tamanho da fonte`),wg(),jc(139,`td`)(140,`code`),iO(141,`var(--font-size-default)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--line-height`),wg()(),jc(146,`td`),iO(147,`Tamanho da label`),wg(),jc(148,`td`)(149,`code`),iO(150,`var(--line-height-md)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`strong`),iO(154,`Action`),wg()(),nu(155,`td`)(156,`td`),wg(),jc(157,`tr`)(158,`td`)(159,`code`),iO(160,`--font-weight`),wg()(),jc(161,`td`),iO(162,`Peso da fonte`),wg(),jc(163,`td`)(164,`code`),iO(165,`var(--font-weight-bold)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--color`),wg()(),jc(170,`td`),iO(171,`Cor principal do popup`),wg(),jc(172,`td`)(173,`code`),iO(174,`var(--color-action-default)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`strong`),iO(178,`Hover`),wg()(),nu(179,`td`)(180,`td`),wg(),jc(181,`tr`)(182,`td`)(183,`code`),iO(184,`--color-hover`),wg()(),jc(185,`td`),iO(186,`Cor principal no estado hover`),wg(),jc(187,`td`)(188,`code`),iO(189,`var(--color-brand-01-darkest)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`code`),iO(193,`--background-hover`),wg()(),jc(194,`td`),iO(195,`Cor de background no estado hover`),wg(),jc(196,`td`)(197,`code`),iO(198,`var(--color-brand-01-lighter)`),wg()()(),jc(199,`tr`)(200,`td`)(201,`strong`),iO(202,`Focused`),wg()(),nu(203,`td`)(204,`td`),wg(),jc(205,`tr`)(206,`td`)(207,`code`),iO(208,`--outline-color-focused`),wg()(),jc(209,`td`),iO(210,`Cor do outline do estado de focus`),wg(),jc(211,`td`)(212,`code`),iO(213,`var(--color-action-focus)`),wg()()(),jc(214,`tr`)(215,`td`)(216,`strong`),iO(217,`Pressed`),wg()(),nu(218,`td`)(219,`td`),wg(),jc(220,`tr`)(221,`td`)(222,`code`),iO(223,`--background-pressed`),wg()(),jc(224,`td`),iO(225,`Cor de background no estado de pressionado\xA0`),wg(),jc(226,`td`)(227,`code`),iO(228,`var(--color-brand-01-light)`),wg()()(),jc(229,`tr`)(230,`td`)(231,`strong`),iO(232,`Disabled`),wg()(),nu(233,`td`)(234,`td`),wg(),jc(235,`tr`)(236,`td`)(237,`code`),iO(238,`--color-disabled`),wg()(),jc(239,`td`),iO(240,`Cor principal no estado disabled`),wg(),jc(241,`td`)(242,`code`),iO(243,`var(--color-action-disabled)`),wg()()(),jc(244,`tr`)(245,`td`)(246,`strong`),iO(247,`Selected`),wg()(),nu(248,`td`)(249,`td`),wg(),jc(250,`tr`)(251,`td`)(252,`code`),iO(253,`--font-weight-selected`),wg()(),jc(254,`td`),iO(255,`Peso da fonte no estado selecionado`),wg(),jc(256,`td`)(257,`code`),iO(258,`var(--font-weight-bold)`),wg()()(),jc(259,`tr`)(260,`td`)(261,`code`),iO(262,`--background-selected`),wg()(),jc(263,`td`),iO(264,`Cor de background no estado selecionado`),wg(),jc(265,`td`)(266,`code`),iO(267,`var(--color-brand-01-lightest)`),wg()()(),jc(268,`tr`)(269,`td`)(270,`strong`),iO(271,`Option e check`),wg()(),nu(272,`td`)(273,`td`),wg(),jc(274,`tr`)(275,`td`)(276,`code`),iO(277,`--color-option`),wg()(),jc(278,`td`),iO(279,`Cor principa no estado Option/check`),wg(),jc(280,`td`)(281,`code`),iO(282,`var(--color-neutral-dark-90)`),wg()()()()()(),jc(283,`div`,7)(284,`h4`,8),iO(285,`Seletor`),wg(),jc(286,`pre`,9),iO(287,`<po-popup
    p-actions="Array<PoPopupAction>"
    (p-click-item)="EventEmitter"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter"
    p-target="any" >
</po-popup>
`),wg()(),jc(288,`h4`,10),iO(289,`Propriedades`),wg(),jc(290,`table`,11)(291,`tr`,12)(292,`th`,13),iO(293,`Nome`),wg(),jc(294,`th`,13),iO(295,`Tipo`),wg(),jc(296,`th`,13),iO(297,`Padrão`),wg(),jc(298,`th`,13),iO(299,`Descrição`),wg()(),jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),iO(304,` p-actions`),nu(305,`br`),wg()()(),jc(306,`td`,18)(307,`code`,19),iO(308,`Array<PoPopupAction>`),wg()(),jc(309,`td`,20),iO(310,`-`),wg(),jc(311,`td`,21)(312,`p`),iO(313,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),jc(314,`em`),iO(315,`array`),wg(),iO(316,` de `),jc(317,`code`),iO(318,`PoPopupAction`),wg(),iO(319,`.`),wg()()(),jc(320,`tr`,14)(321,`td`,15)(322,`div`,22)(323,`span`,23),iO(324,` (p-click-item)`),nu(325,`br`),wg()()(),jc(326,`td`,18)(327,`code`,24),iO(328,`EventEmitter`),wg()(),jc(329,`td`,20),iO(330,`-`),wg(),jc(331,`td`,21)(332,`em`)(333,`strong`),iO(334,`(opcional)`),wg()(),jc(335,`p`),iO(336,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),jc(337,`code`),iO(338,`PoDropdownAction`),wg(),iO(339,`).`),wg(),jc(340,`blockquote`)(341,`p`),iO(342,`Não é disparado para a ação interna de voltar (`),jc(343,`code`),iO(344,`goBack`),wg(),iO(345,`).`),wg()()()(),jc(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),iO(350,` p-custom-positions`),nu(351,`br`),wg()()(),jc(352,`td`,18)(353,`code`,25),iO(354,`string[]`),wg()(),jc(355,`td`,20),iO(356,`-`),wg(),jc(357,`td`,21)(358,`em`)(359,`strong`),iO(360,`(opcional)`),wg()(),jc(361,`p`),iO(362,`Define as posições e a sequência que o `),jc(363,`code`),iO(364,`po-popup`),wg(),iO(365,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),jc(366,`em`),iO(367,`array`),wg(),iO(368,`. Caso não seja definido, o `),jc(369,`code`),iO(370,`po-popup`),wg(),iO(371,` irá rotacionar em todas as posições válidas.`),wg(),jc(372,`blockquote`)(373,`p`),iO(374,`O componente sempre irá abrir na posição definida no `),jc(375,`code`),iO(376,`p-position`),wg(),iO(377,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),jc(378,`code`),iO(379,`p-custom-position`),wg(),iO(380,`.`),wg()(),jc(381,`p`),iO(382,`Posições válidas:`),wg(),jc(383,`ul`)(384,`li`)(385,`code`),iO(386,`right`),wg(),iO(387,`: Posiciona o po-popup no lado direito do componente alvo.`),wg(),jc(388,`li`)(389,`code`),iO(390,`right-bottom`),wg(),iO(391,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),wg(),jc(392,`li`)(393,`code`),iO(394,`right-top`),wg(),iO(395,`: Posiciona o po-popup no lado direito superior do componente alvo.`),wg(),jc(396,`li`)(397,`code`),iO(398,`bottom`),wg(),iO(399,`: Posiciona o po-popup abaixo do componente alvo.`),wg(),jc(400,`li`)(401,`code`),iO(402,`bottom-left`),wg(),iO(403,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),wg(),jc(404,`li`)(405,`code`),iO(406,`bottom-right`),wg(),iO(407,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),wg(),jc(408,`li`)(409,`code`),iO(410,`left`),wg(),iO(411,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),wg(),jc(412,`li`)(413,`code`),iO(414,`left-top`),wg(),iO(415,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),wg(),jc(416,`li`)(417,`code`),iO(418,`left-bottom`),wg(),iO(419,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),wg(),jc(420,`li`)(421,`code`),iO(422,`top`),wg(),iO(423,`: Posiciona o po-popup acima do componente alvo.`),wg(),jc(424,`li`)(425,`code`),iO(426,`top-right`),wg(),iO(427,`: Posiciona o po-popup acima e à direita do componente alvo.`),wg(),jc(428,`li`)(429,`code`),iO(430,`top-left`),wg(),iO(431,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),wg()()()(),jc(432,`tr`,14)(433,`td`,15)(434,`div`,16)(435,`span`,17),iO(436,` p-hide-arrow`),nu(437,`br`),wg()()(),jc(438,`td`,18)(439,`code`,26),iO(440,`boolean`),wg()(),jc(441,`td`,20)(442,`p`)(443,`code`),iO(444,`false`),wg()()(),jc(445,`td`,21)(446,`em`)(447,`strong`),iO(448,`(opcional)`),wg()(),jc(449,`p`),iO(450,`Oculta a seta do componente `),jc(451,`em`),iO(452,`popup`),wg(),iO(453,`.`),wg()()(),jc(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),iO(458,` p-position`),nu(459,`br`),wg()()(),jc(460,`td`,18)(461,`code`,27),iO(462,`string`),wg()(),jc(463,`td`,20)(464,`p`)(465,`code`),iO(466,`bottom-left`),wg()()(),jc(467,`td`,21)(468,`em`)(469,`strong`),iO(470,`(opcional)`),wg()(),jc(471,`p`),iO(472,`Define a posição inicial que o `),jc(473,`code`),iO(474,`po-popup`),wg(),iO(475,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),jc(476,`code`),iO(477,`bottom-left`),wg(),iO(478,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),wg(),jc(479,`blockquote`)(480,`p`),iO(481,`Caso seja definido um `),jc(482,`code`),iO(483,`p-custom-positions`),wg(),iO(484,` o componente irá abrir na posição definida na propriedade `),jc(485,`code`),iO(486,`p-position`),wg(),iO(487,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),jc(488,`code`),iO(489,`p-custom-positions`),wg(),iO(490,`.`),wg()(),jc(491,`p`),iO(492,`Posições válidas:`),wg(),jc(493,`ul`)(494,`li`)(495,`code`),iO(496,`right`),wg(),iO(497,`: Posiciona o po-popup no lado direito do componente alvo.`),wg(),jc(498,`li`)(499,`code`),iO(500,`right-bottom`),wg(),iO(501,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),wg(),jc(502,`li`)(503,`code`),iO(504,`right-top`),wg(),iO(505,`: Posiciona o po-popup no lado direito superior do componente alvo.`),wg(),jc(506,`li`)(507,`code`),iO(508,`bottom`),wg(),iO(509,`: Posiciona o po-popup abaixo do componente alvo.`),wg(),jc(510,`li`)(511,`code`),iO(512,`bottom-left`),wg(),iO(513,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),wg(),jc(514,`li`)(515,`code`),iO(516,`bottom-right`),wg(),iO(517,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),wg(),jc(518,`li`)(519,`code`),iO(520,`left`),wg(),iO(521,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),wg(),jc(522,`li`)(523,`code`),iO(524,`left-top`),wg(),iO(525,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),wg(),jc(526,`li`)(527,`code`),iO(528,`left-bottom`),wg(),iO(529,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),wg(),jc(530,`li`)(531,`code`),iO(532,`top`),wg(),iO(533,`: Posiciona o po-popup acima do componente alvo.`),wg(),jc(534,`li`)(535,`code`),iO(536,`top-right`),wg(),iO(537,`: Posiciona o po-popup acima e à direita do componente alvo.`),wg(),jc(538,`li`)(539,`code`),iO(540,`top-left`),wg(),iO(541,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),wg()()()(),jc(542,`tr`,14)(543,`td`,15)(544,`div`,22)(545,`span`,23),iO(546,` (p-root-items-load)`),nu(547,`br`),wg()()(),jc(548,`td`,18)(549,`code`,24),iO(550,`EventEmitter`),wg()(),jc(551,`td`,20),iO(552,`-`),wg(),jc(553,`td`,21)(554,`em`)(555,`strong`),iO(556,`(opcional)`),wg()(),jc(557,`p`),iO(558,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),wg(),jc(559,`blockquote`)(560,`p`),iO(561,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()(),jc(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),iO(566,` p-size`),nu(567,`br`),wg()()(),jc(568,`td`,18)(569,`code`,27),iO(570,`string`),wg()(),jc(571,`td`,20)(572,`p`)(573,`code`),iO(574,`medium`),wg()()(),jc(575,`td`,21)(576,`em`)(577,`strong`),iO(578,`(opcional)`),wg()(),jc(579,`p`),iO(580,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(581,`ul`)(582,`li`)(583,`code`),iO(584,`small`),wg(),iO(585,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(586,`li`)(587,`code`),iO(588,`medium`),wg(),iO(589,`: aplica a medida medium de cada componente.`),wg()(),jc(590,`blockquote`)(591,`p`),iO(592,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(593,`code`),iO(594,`medium`),wg(),iO(595,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(596,`a`,28),iO(597,`po-theme`),wg(),iO(598,`.`),wg()()()(),jc(599,`tr`,14)(600,`td`,15)(601,`div`,22)(602,`span`,23),iO(603,` (p-sub-items-load)`),nu(604,`br`),wg()()(),jc(605,`td`,18)(606,`code`,24),iO(607,`EventEmitter`),wg()(),jc(608,`td`,20),iO(609,`-`),wg(),jc(610,`td`,21)(611,`em`)(612,`strong`),iO(613,`(opcional)`),wg()(),jc(614,`p`),iO(615,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),jc(616,`code`),iO(617,`PoPopupAction`),wg(),iO(618,`) que originou o carregamento.`),wg(),jc(619,`blockquote`)(620,`p`),iO(621,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()(),jc(622,`tr`,14)(623,`td`,15)(624,`div`,16)(625,`span`,17),iO(626,` p-target`),nu(627,`br`),wg()()(),jc(628,`td`,18)(629,`code`,29),iO(630,`any`),wg()(),jc(631,`td`,20),iO(632,`-`),wg(),jc(633,`td`,21)(634,`p`),iO(635,`Para utilizar o `),jc(636,`code`),iO(637,`po-popup`),wg(),iO(638,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),jc(639,`code`),iO(640,`toggle`),wg(),iO(641,`, por exemplo:`),wg(),jc(642,`pre`)(643,`code`),iO(644,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),wg()(),jc(645,`p`),iO(646,`Caso o elemento alvo for um componente, será preciso obter o `),jc(647,`code`),iO(648,`ElementRef`),wg(),iO(649,` do mesmo e passá-lo à propriedade, por exemplo:`),wg(),jc(650,`pre`)(651,`code`),iO(652,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),wg()()()()(),jc(653,`h3`,10),iO(654,`Métodos`),wg(),jc(655,`table`,30)(656,`tr`,14)(657,`th`,31)(658,`div`,16)(659,`h4`)(660,`span`,17),iO(661,` close `),wg()()()()(),jc(662,`tr`,21)(663,`td`,21)(664,`p`),iO(665,`Fecha o componente `),jc(666,`em`),iO(667,`popup`),wg(),iO(668,`.`),wg(),jc(669,`blockquote`)(670,`p`),iO(671,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),wg()()()()(),nu(672,`br`),jc(673,`table`,30)(674,`tr`,14)(675,`th`,31)(676,`div`,16)(677,`h4`)(678,`span`,17),iO(679,` open `),wg()()()()(),jc(680,`tr`,21)(681,`td`,21)(682,`p`),iO(683,`Abre o componente `),jc(684,`em`),iO(685,`popup`),wg(),iO(686,`.`),wg(),jc(687,`blockquote`)(688,`p`),iO(689,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),wg()()()()(),nu(690,`br`),jc(691,`table`,30)(692,`tr`,14)(693,`th`,31)(694,`div`,16)(695,`h4`)(696,`span`,17),iO(697,` toggle `),wg()()()()(),jc(698,`tr`,21)(699,`td`,21)(700,`p`),iO(701,`Responsável por abrir e fechar o `),jc(702,`em`),iO(703,`popup`),wg(),iO(704,`.`),wg(),jc(705,`p`),iO(706,`Quando disparado abrirá o `),jc(707,`em`),iO(708,`popup`),wg(),iO(709,` e caso o mesmo já estiver aberto e possuir o mesmo `),jc(710,`code`),iO(711,`target`),wg(),iO(712,` irá fecha-lo.`),wg(),jc(713,`p`),iO(714,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),wg()()()(),nu(715,`br`),jc(716,`h3`),iO(717,`Interfaces`),wg(),jc(718,`h4`,32)(719,`code`,5),iO(720,`PoPopupAction`),wg()(),jc(721,`div`,2)(722,`p`),iO(723,`Interface para lista de ações do componente.`),wg()(),jc(724,`h4`,10),iO(725,`Propriedades`),wg(),jc(726,`table`,11)(727,`tr`,12)(728,`th`,13),iO(729,`Nome`),wg(),jc(730,`th`,13),iO(731,`Tipo`),wg(),jc(732,`th`,13),iO(733,`Descrição`),wg()(),jc(734,`tr`,14)(735,`td`,15)(736,`div`,16)(737,`span`,17),iO(738,` action`),nu(739,`br`),wg()()(),jc(740,`td`,18)(741,`code`,33),iO(742,`Function`),wg()(),jc(743,`td`,21)(744,`em`)(745,`strong`),iO(746,`(opcional)`),wg()(),jc(747,`p`),iO(748,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(749,`p`),iO(750,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(751,`code`),iO(752,`subItems`),wg(),iO(753,`.`),wg(),jc(754,`blockquote`)(755,`p`),iO(756,`Para que a função seja executada no contexto do componente, utilize `),jc(757,`em`),iO(758,`bind`),wg(),iO(759,`:
`),jc(760,`code`),iO(761,`action: this.myFunction.bind(this)`),wg()()()()(),jc(762,`tr`,14)(763,`td`,15)(764,`div`,16)(765,`span`,17),iO(766,` disabled`),nu(767,`br`),wg()()(),jc(768,`td`,18)(769,`code`,26),iO(770,`boolean `),wg(),jc(771,`code`,33),iO(772,` Function`),wg()(),jc(773,`td`,21)(774,`em`)(775,`strong`),iO(776,`(opcional)`),wg()(),jc(777,`p`),iO(778,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(779,`tr`,14)(780,`td`,15)(781,`div`,16)(782,`span`,17),iO(783,` icon`),nu(784,`br`),wg()()(),jc(785,`td`,18)(786,`code`,27),iO(787,`string `),wg(),jc(788,`code`,34),iO(789,` TemplateRef<void>`),wg()(),jc(790,`td`,21)(791,`em`)(792,`strong`),iO(793,`(opcional)`),wg()(),jc(794,`p`),iO(795,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(796,`p`),iO(797,`Aceita ícones da `),jc(798,`a`,35),iO(799,`Biblioteca de ícones`),wg(),iO(800,`, fontes externas (ex: Font Awesome)
ou um `),jc(801,`code`),iO(802,`TemplateRef`),wg(),iO(803,` para ícones customizados.`),wg(),jc(804,`pre`)(805,`code`),iO(806,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(807,`tr`,14)(808,`td`,15)(809,`div`,16)(810,`span`,17),iO(811,` label`),nu(812,`br`),wg()()(),jc(813,`td`,18)(814,`code`,27),iO(815,`string`),wg()(),jc(816,`td`,21)(817,`p`),iO(818,`Rótulo da ação.`),wg(),jc(819,`p`),iO(820,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(821,`code`),iO(822,`subItems`),wg(),iO(823,`.`),wg()()(),jc(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),iO(828,` selected`),nu(829,`br`),wg()()(),jc(830,`td`,18)(831,`code`,26),iO(832,`boolean`),wg()(),jc(833,`td`,21)(834,`em`)(835,`strong`),iO(836,`(opcional)`),wg()(),jc(837,`p`),iO(838,`Define se a ação está selecionada.`),wg()()(),jc(839,`tr`,14)(840,`td`,15)(841,`div`,16)(842,`span`,17),iO(843,` separator`),nu(844,`br`),wg()()(),jc(845,`td`,18)(846,`code`,26),iO(847,`boolean`),wg()(),jc(848,`td`,21)(849,`em`)(850,`strong`),iO(851,`(opcional)`),wg()(),jc(852,`p`),iO(853,`Atribui uma linha separadora acima do item.`),wg()()(),jc(854,`tr`,14)(855,`td`,15)(856,`div`,16)(857,`span`,17),iO(858,` subItems`),nu(859,`br`),wg()()(),jc(860,`td`,18)(861,`code`,19),iO(862,`Array<PoPopupAction>`),wg()(),jc(863,`td`,21)(864,`em`)(865,`strong`),iO(866,`(opcional)`),wg()(),jc(867,`p`),iO(868,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(869,`pre`)(870,`code`),iO(871,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(872,`p`),iO(873,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(874,`blockquote`)(875,`p`),iO(876,`As propriedades `),jc(877,`code`),iO(878,`disabled`),wg(),iO(879,`, `),jc(880,`code`),iO(881,`type`),wg(),iO(882,` e `),jc(883,`code`),iO(884,`visible`),wg(),iO(885,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(886,`blockquote`)(887,`p`),iO(888,`Quando `),jc(889,`code`),iO(890,`url`),wg(),iO(891,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(892,`blockquote`)(893,`p`),iO(894,`Em subníveis aninhados, o `),jc(895,`code`),iO(896,`icon`),wg(),iO(897,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(898,`tr`,14)(899,`td`,15)(900,`div`,16)(901,`span`,17),iO(902,` subItemsLazy`),nu(903,`br`),wg()()(),jc(904,`td`,18)(905,`code`,36),iO(906,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(907,`td`,21)(908,`em`)(909,`strong`),iO(910,`(opcional)`),wg()(),jc(911,`p`),iO(912,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(913,`p`),iO(914,`Recebe o item agrupador e retorna um `),jc(915,`code`),iO(916,`Observable<Array<PoPopupAction>>`),wg(),iO(917,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(918,`strong`),iO(919,`apenas`),wg(),iO(920,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(921,`code`),iO(922,`po-skeleton`),wg(),iO(923,`
enquanto os dados s\xE3o carregados:`),wg(),jc(924,`pre`)(925,`code`),iO(926,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(927,`blockquote`)(928,`p`),iO(929,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(930,`p`),iO(931,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(932,`tr`,14)(933,`td`,15)(934,`div`,16)(935,`span`,17),iO(936,` type`),nu(937,`br`),wg()()(),jc(938,`td`,18)(939,`code`,27),iO(940,`string`),wg()(),jc(941,`td`,21)(942,`em`)(943,`strong`),iO(944,`(opcional)`),wg()(),jc(945,`p`),iO(946,`Define a cor do item.`),wg(),jc(947,`p`),iO(948,`Valores válidos:`),wg(),jc(949,`ul`)(950,`li`)(951,`code`),iO(952,`default`),wg()(),jc(953,`li`)(954,`code`),iO(955,`danger`),wg()()()()(),jc(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),iO(960,` url`),nu(961,`br`),wg()()(),jc(962,`td`,18)(963,`code`,27),iO(964,`string`),wg()(),jc(965,`td`,21)(966,`em`)(967,`strong`),iO(968,`(opcional)`),wg()(),jc(969,`p`),iO(970,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(971,`p`),iO(972,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(973,`code`),iO(974,`url`),wg(),iO(975,` é informada em um agrupador, o clique `),jc(976,`strong`),iO(977,`não abrirá os subitens`),wg(),iO(978,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(979,`blockquote`)(980,`p`),iO(981,`Quando informada, tem prioridade sobre a propriedade `),jc(982,`code`),iO(983,`action`),wg(),iO(984,`.`),wg()()()(),jc(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),iO(989,` visible`),nu(990,`br`),wg()()(),jc(991,`td`,18)(992,`code`,26),iO(993,`boolean `),wg(),jc(994,`code`,33),iO(995,` Function`),wg()(),jc(996,`td`,21)(997,`em`)(998,`strong`),iO(999,`(opcional)`),wg()(),jc(1e3,`p`),iO(1001,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Xe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-popup-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-popup-basic-view`)(6,`sample-po-popup-labs-view`)(7,`sample-po-popup-email-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,ye,_e,Me,Te],encapsulation:2,changeDetection:1})}return l})()}];var De=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[C1.forChild(Xe),C1]})}return l})();var Bt=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[Ta,De]})}return l})();export{Bt as DocPoPopupModule};