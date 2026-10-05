import{t as r}from"./chunk-zystk1pz.js";import{$i as pt,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jr as Sw,Jt as gae,Kn as Ax,Lt as bae,M as Ef,Qn as C9,Qr as Ue,Sa as zO,Ur as RN,Ut as ea,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_ as $3,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,ii as Z,in as kte,ji as ho,k as D4,ki as he,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ti as Wx,ua as ug,wr as Kc,zi as kL,zt as bt}from"./main-BRRQVWD7.js";var Te=[`target`];var De=()=>({label:`PO Popup`});var ke=l=>[l];var Se=(()=>{class l{cdr=f(Ue);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(a,o){if(a&1&&Xc(Te,5,Z),a&2){let r;fo(r=ho())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(a,o){if(a&1){let r=Bx();Ac(0,`po-icon`,2,0),pt(`click`,function(){Jv(r);let i=Zx(3);return e_(i.toggle())}),ug(),Kc(2,`po-popup`,3,1)}a&2&&(Hp(2),cE(`p-actions`,AN(3,ke,RN(2,De)))(`p-target`,o.targetRef))},dependencies:[bt,ea],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popup - Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import {
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-popup-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return l})();var Oe=[`target`];var Ce=(()=>{class l{poNotification=f(Ou);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(d){let a=r({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return!d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o)}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(a,o){if(a&1&&Xc(Oe,7,Z),a&2){let r;fo(r=ho())&&(o.targetRef=r.first)}},standalone:!1,decls:28,vars:25,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let r=Bx();Kc(0,`po-popup`,4,0),Ac(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),pt(`p-click`,function(){Jv(r);let i=Zx(1);return e_(i.toggle())}),ug()()(),Kc(6,`po-divider`),Ac(7,`form`,null,2)(9,`po-input`,8),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.label,i)||(o.action.label=i),e_(i)}),ug(),p0(),Ac(10,`po-input`,9),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.action,i)||(o.action.action=i),e_(i)}),ug(),p0(),Ac(11,`po-input`,10),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.url,i)||(o.action.url=i),e_(i)}),ug(),p0(),Ac(12,`po-select`,11),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.type,i)||(o.action.type=i),e_(i)}),ug(),p0(),Ac(13,`po-select`,12),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.icon,i)||(o.action.icon=i),e_(i)}),ug(),p0(),Ac(14,`po-select`,13),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action.parent,i)||(o.action.parent=i),e_(i)}),ug(),p0(),Ac(15,`po-checkbox-group`,14),RE(`ngModelChange`,function(i){return Jv(r),DN(o.action,i)||(o.action=i),e_(i)}),ug(),p0(),Ac(16,`div`,15)(17,`po-button`,16),pt(`p-click`,function(){return o.addAction(o.action)}),ug()()(),Kc(18,`po-divider`),Ac(19,`form`,null,3)(21,`div`,15)(22,`po-input`,17),RE(`ngModelChange`,function(i){return Jv(r),DN(o.positions,i)||(o.positions=i),e_(i)}),pt(`p-change`,function(){return o.convertToArray()}),ug(),p0(),Ac(23,`po-select`,18),RE(`ngModelChange`,function(i){return Jv(r),DN(o.position,i)||(o.position=i),e_(i)}),ug(),p0(),Ac(24,`po-checkbox-group`,19),RE(`ngModelChange`,function(i){return Jv(r),DN(o.properties,i)||(o.properties=i),e_(i)}),ug(),p0(),Ac(25,`po-radio-group`,20),RE(`ngModelChange`,function(i){return Jv(r),DN(o.size,i)||(o.size=i),e_(i)}),ug(),p0(),ug(),Ac(26,`div`,15)(27,`po-button`,21),pt(`p-click`,function(){Jv(r);let i=Zx(8);return Zx(20).reset(),i.reset(),e_(o.restore())}),ug()()()}if(a&2){let r=Zx(8);cE(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),Hp(9),TE(`ngModel`,o.action.label),m0(),Hp(),TE(`ngModel`,o.action.action),m0(),Hp(),TE(`ngModel`,o.action.url),m0(),Hp(),TE(`ngModel`,o.action.type),cE(`p-options`,o.typeOptions),m0(),Hp(),TE(`ngModel`,o.action.icon),cE(`p-options`,o.iconOptions),m0(),Hp(),TE(`ngModel`,o.action.parent),cE(`p-options`,o.parentList),m0(),Hp(),TE(`ngModel`,o.action),cE(`p-options`,o.actionOptions),m0(),Hp(2),cE(`p-disabled`,r.form.invalid),Hp(5),TE(`ngModel`,o.positions),m0(),Hp(),TE(`ngModel`,o.position),cE(`p-options`,o.positionOptions),m0(),Hp(),TE(`ngModel`,o.properties),cE(`p-options`,o.propertiesOptions),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,poe,ea],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l});var Pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popup - Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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

  restore() {
    this.actions = [];
    this.customPositions = [];
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-popup-labs`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ce],encapsulation:2,changeDetection:1})}return l})();var We=[`formEmail`];var Ne=[`target`];function ze(l,Je){if(l&1&&(Ac(0,`div`)(1,`div`,6),Kc(2,`po-info`,20),ug(),Kc(3,`po-divider`),ug()),l&2){let d=Wx();Hp(2),cE(`p-value`,d.cc)}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(a,o){if(a&1&&Xc(We,7)(Ne,7,Z)(ta,7),a&2){let r;fo(r=ho())&&(o.formEmail=r.first),fo(r=ho())&&(o.targetRef=r.first),fo(r=ho())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(a,o){if(a&1){let r=Bx();Ac(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),vN(4,`Settings`),ug()()(),Ac(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),RE(`ngModelChange`,function(i){return Jv(r),DN(o.to,i)||(o.to=i),e_(i)}),ug(),p0(),Ac(11,`po-email`,9),RE(`ngModelChange`,function(i){return Jv(r),DN(o.cc,i)||(o.cc=i),e_(i)}),ug(),p0(),Ac(12,`po-input`,10),RE(`ngModelChange`,function(i){return Jv(r),DN(o.subject,i)||(o.subject=i),e_(i)}),ug(),p0(),ug(),Ac(13,`div`,6)(14,`po-textarea`,11,2),RE(`ngModelChange`,function(i){return Jv(r),DN(o.emailText,i)||(o.emailText=i),e_(i)}),pt(`click`,function(){Jv(r);let i=Zx(1);return e_(i.toggle())}),ug(),p0(),Kc(16,`img`,12),ug(),Ac(17,`div`,6)(18,`po-button`,13),pt(`p-click`,function(){return o.send()}),ug(),Ac(19,`po-button`,14),pt(`p-click`,function(){return o.reset()}),ug()()()()(),Ac(20,`po-modal`,15)(21,`div`,6),Kc(22,`po-info`,16)(23,`po-info`,17),ug(),Kc(24,`po-divider`),Rx(25,ze,4,1,`div`),Ac(26,`div`,6),Kc(27,`po-info`,18),ug(),Kc(28,`po-divider`),Ac(29,`div`,6)(30,`po-textarea`,19),RE(`ngModelChange`,function(i){return Jv(r),DN(o.emailText,i)||(o.emailText=i),e_(i)}),ug(),p0(),ug()()}if(a&2){let r=Zx(8);cE(`p-actions`,o.popupActions)(`p-target`,o.targetRef),Hp(10),TE(`ngModel`,o.to),m0(),Hp(),TE(`ngModel`,o.cc),m0(),Hp(),TE(`ngModel`,o.subject),m0(),Hp(2),TE(`ngModel`,o.emailText),m0(),Hp(4),cE(`p-disabled`,r.form.invalid),Hp(),cE(`p-disabled`,r.form.invalid),Hp(),cE(`p-primary-action`,o.primaryAction),Hp(2),cE(`p-value`,o.from),Hp(),cE(`p-value`,o.to),Hp(2),Ax(o.cc!==``?25:-1),Hp(2),cE(`p-value`,o.subject),Hp(3),TE(`ngModel`,o.emailText),m0()}},dependencies:[b9,Sw,D9,C9,BP,LP,ni,Ef,$3,D4,doe,hoe,ta,ea,Ooe],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popup Email`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popup-email/sample-po-popup-email.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-popup-email/sample-po-popup-email.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-logo-po {
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-popup-email`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ye],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:890,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPopupAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPopupModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-popup.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPopupComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-popup`),ug(),vN(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),ug(),Ac(18,`p`),vN(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Ac(20,`code`),vN(21,`subItems`),ug(),vN(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),ug(),Ac(23,`p`),vN(24,`É possível escolher as posições do `),Ac(25,`code`),vN(26,`po-popup`),ug(),vN(27,` em relação ao componente alvo, para isto veja a propriedade `),Ac(28,`code`),vN(29,`p-position`),ug(),vN(30,`.`),ug(),Ac(31,`p`),vN(32,`Também é possível informar um `),Ac(33,`em`),vN(34,`template`),ug(),Ac(35,`em`),vN(36,`header`),ug(),vN(37,` para o `),Ac(38,`code`),vN(39,`po-popup`),ug(),vN(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Ac(41,`code`),vN(42,`p-popup-header-template`),ug(),vN(43,` no elemento que servirá de template, por exemplo:`),ug(),Ac(44,`pre`)(45,`code`),vN(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),ug()(),Ac(47,`h4`),vN(48,`Tokens customizáveis`),ug(),Ac(49,`p`),vN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(51,`blockquote`)(52,`p`),vN(53,`Para maiores informações, acesse o guia `),Ac(54,`a`,6),vN(55,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(56,`.`),ug()(),Ac(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),vN(61,`Propriedade`),ug(),Ac(62,`th`),vN(63,`Descrição`),ug(),Ac(64,`th`),vN(65,`Valor Padrão`),ug()()(),Ac(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),vN(70,`Default Values`),ug()(),Kc(71,`td`)(72,`td`),ug(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--border-radius`),ug()(),Ac(77,`td`),vN(78,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--border-radius-md)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--border-width`),ug()(),Ac(86,`td`),vN(87,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--border-width-sm)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`code`),vN(94,`--border-color`),ug()(),Ac(95,`td`),vN(96,`Cor da borda`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--color-neutral-light-20)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`code`),vN(103,`--background`),ug()(),Ac(104,`td`),vN(105,`Cor do background`),ug(),Ac(106,`td`)(107,`code`),vN(108,`var(--color-neutral-light-00)`),ug()()(),Ac(109,`tr`)(110,`td`)(111,`code`),vN(112,`--shadow`),ug()(),Ac(113,`td`),vN(114,`Contém o valor da sombra do elemento`),ug(),Ac(115,`td`)(116,`code`),vN(117,`var(--shadow-md)`),ug()()(),Ac(118,`tr`)(119,`td`)(120,`strong`),vN(121,`po-popup po-item-list`),ug()(),Kc(122,`td`)(123,`td`),ug(),Ac(124,`tr`)(125,`td`)(126,`code`),vN(127,`--font-family`),ug()(),Ac(128,`td`),vN(129,`Família tipográfica usada`),ug(),Ac(130,`td`)(131,`code`),vN(132,`var(--font-family-theme)`),ug()()(),Ac(133,`tr`)(134,`td`)(135,`code`),vN(136,`--font-size`),ug()(),Ac(137,`td`),vN(138,`Tamanho da fonte`),ug(),Ac(139,`td`)(140,`code`),vN(141,`var(--font-size-default)`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--line-height`),ug()(),Ac(146,`td`),vN(147,`Tamanho da label`),ug(),Ac(148,`td`)(149,`code`),vN(150,`var(--line-height-md)`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`strong`),vN(154,`Action`),ug()(),Kc(155,`td`)(156,`td`),ug(),Ac(157,`tr`)(158,`td`)(159,`code`),vN(160,`--font-weight`),ug()(),Ac(161,`td`),vN(162,`Peso da fonte`),ug(),Ac(163,`td`)(164,`code`),vN(165,`var(--font-weight-bold)`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--color`),ug()(),Ac(170,`td`),vN(171,`Cor principal do popup`),ug(),Ac(172,`td`)(173,`code`),vN(174,`var(--color-action-default)`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`strong`),vN(178,`Hover`),ug()(),Kc(179,`td`)(180,`td`),ug(),Ac(181,`tr`)(182,`td`)(183,`code`),vN(184,`--color-hover`),ug()(),Ac(185,`td`),vN(186,`Cor principal no estado hover`),ug(),Ac(187,`td`)(188,`code`),vN(189,`var(--color-brand-01-darkest)`),ug()()(),Ac(190,`tr`)(191,`td`)(192,`code`),vN(193,`--background-hover`),ug()(),Ac(194,`td`),vN(195,`Cor de background no estado hover`),ug(),Ac(196,`td`)(197,`code`),vN(198,`var(--color-brand-01-lighter)`),ug()()(),Ac(199,`tr`)(200,`td`)(201,`strong`),vN(202,`Focused`),ug()(),Kc(203,`td`)(204,`td`),ug(),Ac(205,`tr`)(206,`td`)(207,`code`),vN(208,`--outline-color-focused`),ug()(),Ac(209,`td`),vN(210,`Cor do outline do estado de focus`),ug(),Ac(211,`td`)(212,`code`),vN(213,`var(--color-action-focus)`),ug()()(),Ac(214,`tr`)(215,`td`)(216,`strong`),vN(217,`Pressed`),ug()(),Kc(218,`td`)(219,`td`),ug(),Ac(220,`tr`)(221,`td`)(222,`code`),vN(223,`--background-pressed`),ug()(),Ac(224,`td`),vN(225,`Cor de background no estado de pressionado\xA0`),ug(),Ac(226,`td`)(227,`code`),vN(228,`var(--color-brand-01-light)`),ug()()(),Ac(229,`tr`)(230,`td`)(231,`strong`),vN(232,`Disabled`),ug()(),Kc(233,`td`)(234,`td`),ug(),Ac(235,`tr`)(236,`td`)(237,`code`),vN(238,`--color-disabled`),ug()(),Ac(239,`td`),vN(240,`Cor principal no estado disabled`),ug(),Ac(241,`td`)(242,`code`),vN(243,`var(--color-action-disabled)`),ug()()(),Ac(244,`tr`)(245,`td`)(246,`strong`),vN(247,`Selected`),ug()(),Kc(248,`td`)(249,`td`),ug(),Ac(250,`tr`)(251,`td`)(252,`code`),vN(253,`--font-weight-selected`),ug()(),Ac(254,`td`),vN(255,`Peso da fonte no estado selecionado`),ug(),Ac(256,`td`)(257,`code`),vN(258,`var(--font-weight-bold)`),ug()()(),Ac(259,`tr`)(260,`td`)(261,`code`),vN(262,`--background-selected`),ug()(),Ac(263,`td`),vN(264,`Cor de background no estado selecionado`),ug(),Ac(265,`td`)(266,`code`),vN(267,`var(--color-brand-01-lightest)`),ug()()(),Ac(268,`tr`)(269,`td`)(270,`strong`),vN(271,`Option e check`),ug()(),Kc(272,`td`)(273,`td`),ug(),Ac(274,`tr`)(275,`td`)(276,`code`),vN(277,`--color-option`),ug()(),Ac(278,`td`),vN(279,`Cor principa no estado Option/check`),ug(),Ac(280,`td`)(281,`code`),vN(282,`var(--color-neutral-dark-90)`),ug()()()()()(),Ac(283,`div`,7)(284,`h4`,8),vN(285,`Seletor`),ug(),Ac(286,`pre`,9),vN(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),ug()(),Ac(288,`h4`,10),vN(289,`Propriedades`),ug(),Ac(290,`table`,11)(291,`tr`,12)(292,`th`,13),vN(293,`Nome`),ug(),Ac(294,`th`,13),vN(295,`Tipo`),ug(),Ac(296,`th`,13),vN(297,`Padrão`),ug(),Ac(298,`th`,13),vN(299,`Descrição`),ug()(),Ac(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),vN(304,` p-actions`),Kc(305,`br`),ug()()(),Ac(306,`td`,18)(307,`code`,19),vN(308,`PoPopupAction[]`),ug()(),Ac(309,`td`,20),vN(310,`-`),ug(),Ac(311,`td`,21)(312,`p`),vN(313,`Lista de ações que serão exibidas no componente.`),ug()()(),Ac(314,`tr`,14)(315,`td`,15)(316,`div`,16)(317,`span`,17),vN(318,` p-custom-positions`),Kc(319,`br`),ug()()(),Ac(320,`td`,18)(321,`code`,22),vN(322,`string[]`),ug()(),Ac(323,`td`,20),vN(324,`-`),ug(),Ac(325,`td`,21)(326,`em`)(327,`strong`),vN(328,`(opcional)`),ug()(),Ac(329,`p`),vN(330,`Define as posições e a sequência que o `),Ac(331,`code`),vN(332,`po-popup`),ug(),vN(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Ac(334,`em`),vN(335,`array`),ug(),vN(336,`. Caso não seja definido, o `),Ac(337,`code`),vN(338,`po-popup`),ug(),vN(339,` irá rotacionar em todas as posições válidas.`),ug(),Ac(340,`blockquote`)(341,`p`),vN(342,`O componente sempre irá abrir na posição definida no `),Ac(343,`code`),vN(344,`p-position`),ug(),vN(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Ac(346,`code`),vN(347,`p-custom-position`),ug(),vN(348,`.`),ug()(),Ac(349,`p`),vN(350,`Posições válidas:`),ug(),Ac(351,`ul`)(352,`li`)(353,`code`),vN(354,`right`),ug(),vN(355,`: Posiciona o po-popup no lado direito do componente alvo.`),ug(),Ac(356,`li`)(357,`code`),vN(358,`right-bottom`),ug(),vN(359,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),ug(),Ac(360,`li`)(361,`code`),vN(362,`right-top`),ug(),vN(363,`: Posiciona o po-popup no lado direito superior do componente alvo.`),ug(),Ac(364,`li`)(365,`code`),vN(366,`bottom`),ug(),vN(367,`: Posiciona o po-popup abaixo do componente alvo.`),ug(),Ac(368,`li`)(369,`code`),vN(370,`bottom-left`),ug(),vN(371,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),ug(),Ac(372,`li`)(373,`code`),vN(374,`bottom-right`),ug(),vN(375,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),ug(),Ac(376,`li`)(377,`code`),vN(378,`left`),ug(),vN(379,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),ug(),Ac(380,`li`)(381,`code`),vN(382,`left-top`),ug(),vN(383,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),ug(),Ac(384,`li`)(385,`code`),vN(386,`left-bottom`),ug(),vN(387,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),ug(),Ac(388,`li`)(389,`code`),vN(390,`top`),ug(),vN(391,`: Posiciona o po-popup acima do componente alvo.`),ug(),Ac(392,`li`)(393,`code`),vN(394,`top-right`),ug(),vN(395,`: Posiciona o po-popup acima e à direita do componente alvo.`),ug(),Ac(396,`li`)(397,`code`),vN(398,`top-left`),ug(),vN(399,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),ug()()()(),Ac(400,`tr`,14)(401,`td`,15)(402,`div`,16)(403,`span`,17),vN(404,` p-hide-arrow`),Kc(405,`br`),ug()()(),Ac(406,`td`,18)(407,`code`,23),vN(408,`boolean`),ug()(),Ac(409,`td`,20)(410,`p`)(411,`code`),vN(412,`false`),ug()()(),Ac(413,`td`,21)(414,`em`)(415,`strong`),vN(416,`(opcional)`),ug()(),Ac(417,`p`),vN(418,`Oculta a seta do componente `),Ac(419,`em`),vN(420,`popup`),ug(),vN(421,`.`),ug()()(),Ac(422,`tr`,14)(423,`td`,15)(424,`div`,16)(425,`span`,17),vN(426,` p-position`),Kc(427,`br`),ug()()(),Ac(428,`td`,18)(429,`code`,24),vN(430,`string`),ug()(),Ac(431,`td`,20)(432,`p`)(433,`code`),vN(434,`bottom-left`),ug()()(),Ac(435,`td`,21)(436,`em`)(437,`strong`),vN(438,`(opcional)`),ug()(),Ac(439,`p`),vN(440,`Define a posição inicial que o `),Ac(441,`code`),vN(442,`po-popup`),ug(),vN(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Ac(444,`code`),vN(445,`bottom-left`),ug(),vN(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ug(),Ac(447,`blockquote`)(448,`p`),vN(449,`Caso seja definido um `),Ac(450,`code`),vN(451,`p-custom-positions`),ug(),vN(452,` o componente irá abrir na posição definida na propriedade `),Ac(453,`code`),vN(454,`p-position`),ug(),vN(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Ac(456,`code`),vN(457,`p-custom-positions`),ug(),vN(458,`.`),ug()(),Ac(459,`p`),vN(460,`Posições válidas:`),ug(),Ac(461,`ul`)(462,`li`)(463,`code`),vN(464,`right`),ug(),vN(465,`: Posiciona o po-popup no lado direito do componente alvo.`),ug(),Ac(466,`li`)(467,`code`),vN(468,`right-bottom`),ug(),vN(469,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),ug(),Ac(470,`li`)(471,`code`),vN(472,`right-top`),ug(),vN(473,`: Posiciona o po-popup no lado direito superior do componente alvo.`),ug(),Ac(474,`li`)(475,`code`),vN(476,`bottom`),ug(),vN(477,`: Posiciona o po-popup abaixo do componente alvo.`),ug(),Ac(478,`li`)(479,`code`),vN(480,`bottom-left`),ug(),vN(481,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),ug(),Ac(482,`li`)(483,`code`),vN(484,`bottom-right`),ug(),vN(485,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),ug(),Ac(486,`li`)(487,`code`),vN(488,`left`),ug(),vN(489,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),ug(),Ac(490,`li`)(491,`code`),vN(492,`left-top`),ug(),vN(493,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),ug(),Ac(494,`li`)(495,`code`),vN(496,`left-bottom`),ug(),vN(497,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),ug(),Ac(498,`li`)(499,`code`),vN(500,`top`),ug(),vN(501,`: Posiciona o po-popup acima do componente alvo.`),ug(),Ac(502,`li`)(503,`code`),vN(504,`top-right`),ug(),vN(505,`: Posiciona o po-popup acima e à direita do componente alvo.`),ug(),Ac(506,`li`)(507,`code`),vN(508,`top-left`),ug(),vN(509,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),ug()()()(),Ac(510,`tr`,14)(511,`td`,15)(512,`div`,16)(513,`span`,17),vN(514,` p-size`),Kc(515,`br`),ug()()(),Ac(516,`td`,18)(517,`code`,24),vN(518,`string`),ug()(),Ac(519,`td`,20)(520,`p`)(521,`code`),vN(522,`medium`),ug()()(),Ac(523,`td`,21)(524,`em`)(525,`strong`),vN(526,`(opcional)`),ug()(),Ac(527,`p`),vN(528,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(529,`ul`)(530,`li`)(531,`code`),vN(532,`small`),ug(),vN(533,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(534,`li`)(535,`code`),vN(536,`medium`),ug(),vN(537,`: aplica a medida medium de cada componente.`),ug()(),Ac(538,`blockquote`)(539,`p`),vN(540,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(541,`code`),vN(542,`medium`),ug(),vN(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(544,`a`,25),vN(545,`po-theme`),ug(),vN(546,`.`),ug()()()(),Ac(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),vN(551,` p-target`),Kc(552,`br`),ug()()(),Ac(553,`td`,18)(554,`code`,26),vN(555,`any`),ug()(),Ac(556,`td`,20),vN(557,`-`),ug(),Ac(558,`td`,21)(559,`p`),vN(560,`Para utilizar o `),Ac(561,`code`),vN(562,`po-popup`),ug(),vN(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Ac(564,`code`),vN(565,`toggle`),ug(),vN(566,`, por exemplo:`),ug(),Ac(567,`pre`)(568,`code`),vN(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),ug()(),Ac(570,`p`),vN(571,`Caso o elemento alvo for um componente, será preciso obter o `),Ac(572,`code`),vN(573,`ElementRef`),ug(),vN(574,` do mesmo e passá-lo à propriedade, por exemplo:`),ug(),Ac(575,`pre`)(576,`code`),vN(577,`// component.html

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
`),ug()()()()(),Ac(578,`h3`,10),vN(579,`Métodos`),ug(),Ac(580,`table`,27)(581,`tr`,14)(582,`th`,28)(583,`div`,16)(584,`h4`)(585,`span`,17),vN(586,` close `),ug()()()()(),Ac(587,`tr`,21)(588,`td`,21)(589,`p`),vN(590,`Fecha o componente `),Ac(591,`em`),vN(592,`popup`),ug(),vN(593,`.`),ug(),Ac(594,`blockquote`)(595,`p`),vN(596,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),ug()()()()(),Kc(597,`br`),Ac(598,`table`,27)(599,`tr`,14)(600,`th`,28)(601,`div`,16)(602,`h4`)(603,`span`,17),vN(604,` open `),ug()()()()(),Ac(605,`tr`,21)(606,`td`,21)(607,`p`),vN(608,`Abre o componente `),Ac(609,`em`),vN(610,`popup`),ug(),vN(611,`.`),ug(),Ac(612,`blockquote`)(613,`p`),vN(614,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),ug()()()()(),Kc(615,`br`),Ac(616,`table`,27)(617,`tr`,14)(618,`th`,28)(619,`div`,16)(620,`h4`)(621,`span`,17),vN(622,` toggle `),ug()()()()(),Ac(623,`tr`,21)(624,`td`,21)(625,`p`),vN(626,`Responsável por abrir e fechar o `),Ac(627,`em`),vN(628,`popup`),ug(),vN(629,`.`),ug(),Ac(630,`p`),vN(631,`Quando disparado abrirá o `),Ac(632,`em`),vN(633,`popup`),ug(),vN(634,` e caso o mesmo já estiver aberto e possuir o mesmo `),Ac(635,`code`),vN(636,`target`),ug(),vN(637,` irá fecha-lo.`),ug(),Ac(638,`p`),vN(639,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),ug()()()(),Kc(640,`br`),Ac(641,`h3`),vN(642,`Interfaces`),ug(),Ac(643,`h4`,29)(644,`code`,5),vN(645,`PoPopupAction`),ug()(),Ac(646,`div`,2)(647,`p`),vN(648,`Interface para lista de ações do componente.`),ug()(),Ac(649,`h4`,10),vN(650,`Propriedades`),ug(),Ac(651,`table`,11)(652,`tr`,12)(653,`th`,13),vN(654,`Nome`),ug(),Ac(655,`th`,13),vN(656,`Tipo`),ug(),Ac(657,`th`,13),vN(658,`Descrição`),ug()(),Ac(659,`tr`,14)(660,`td`,15)(661,`div`,16)(662,`span`,17),vN(663,` action`),Kc(664,`br`),ug()()(),Ac(665,`td`,18)(666,`code`,30),vN(667,`Function`),ug()(),Ac(668,`td`,21)(669,`em`)(670,`strong`),vN(671,`(opcional)`),ug()(),Ac(672,`p`),vN(673,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(674,`p`),vN(675,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(676,`code`),vN(677,`subItems`),ug(),vN(678,`.`),ug(),Ac(679,`blockquote`)(680,`p`),vN(681,`Para que a função seja executada no contexto do componente, utilize `),Ac(682,`em`),vN(683,`bind`),ug(),vN(684,`:
`),Ac(685,`code`),vN(686,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(687,`tr`,14)(688,`td`,15)(689,`div`,16)(690,`span`,17),vN(691,` disabled`),Kc(692,`br`),ug()()(),Ac(693,`td`,18)(694,`code`,23),vN(695,`boolean `),ug(),Ac(696,`code`,30),vN(697,` Function`),ug()(),Ac(698,`td`,21)(699,`em`)(700,`strong`),vN(701,`(opcional)`),ug()(),Ac(702,`p`),vN(703,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(704,`tr`,14)(705,`td`,15)(706,`div`,16)(707,`span`,17),vN(708,` icon`),Kc(709,`br`),ug()()(),Ac(710,`td`,18)(711,`code`,24),vN(712,`string `),ug(),Ac(713,`code`,31),vN(714,` TemplateRef<void>`),ug()(),Ac(715,`td`,21)(716,`em`)(717,`strong`),vN(718,`(opcional)`),ug()(),Ac(719,`p`),vN(720,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(721,`p`),vN(722,`Aceita ícones da `),Ac(723,`a`,32),vN(724,`Biblioteca de ícones`),ug(),vN(725,`, fontes externas (ex: Font Awesome)
ou um `),Ac(726,`code`),vN(727,`TemplateRef`),ug(),vN(728,` para ícones customizados.`),ug(),Ac(729,`pre`)(730,`code`),vN(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),vN(736,` label`),Kc(737,`br`),ug()()(),Ac(738,`td`,18)(739,`code`,24),vN(740,`string`),ug()(),Ac(741,`td`,21)(742,`p`),vN(743,`Rótulo da ação.`),ug(),Ac(744,`p`),vN(745,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(746,`code`),vN(747,`subItems`),ug(),vN(748,`.`),ug()()(),Ac(749,`tr`,14)(750,`td`,15)(751,`div`,16)(752,`span`,17),vN(753,` selected`),Kc(754,`br`),ug()()(),Ac(755,`td`,18)(756,`code`,23),vN(757,`boolean`),ug()(),Ac(758,`td`,21)(759,`em`)(760,`strong`),vN(761,`(opcional)`),ug()(),Ac(762,`p`),vN(763,`Define se a ação está selecionada.`),ug()()(),Ac(764,`tr`,14)(765,`td`,15)(766,`div`,16)(767,`span`,17),vN(768,` separator`),Kc(769,`br`),ug()()(),Ac(770,`td`,18)(771,`code`,23),vN(772,`boolean`),ug()(),Ac(773,`td`,21)(774,`em`)(775,`strong`),vN(776,`(opcional)`),ug()(),Ac(777,`p`),vN(778,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(779,`tr`,14)(780,`td`,15)(781,`div`,16)(782,`span`,17),vN(783,` subItems`),Kc(784,`br`),ug()()(),Ac(785,`td`,18)(786,`code`,33),vN(787,`Array<PoPopupAction>`),ug()(),Ac(788,`td`,21)(789,`em`)(790,`strong`),vN(791,`(opcional)`),ug()(),Ac(792,`p`),vN(793,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(794,`p`),vN(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(796,`blockquote`)(797,`p`),vN(798,`As propriedades `),Ac(799,`code`),vN(800,`disabled`),ug(),vN(801,`, `),Ac(802,`code`),vN(803,`type`),ug(),vN(804,` e `),Ac(805,`code`),vN(806,`visible`),ug(),vN(807,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(808,`blockquote`)(809,`p`),vN(810,`Quando `),Ac(811,`code`),vN(812,`url`),ug(),vN(813,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(814,`blockquote`)(815,`p`),vN(816,`Em subníveis aninhados, o `),Ac(817,`code`),vN(818,`icon`),ug(),vN(819,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(820,`tr`,14)(821,`td`,15)(822,`div`,16)(823,`span`,17),vN(824,` type`),Kc(825,`br`),ug()()(),Ac(826,`td`,18)(827,`code`,24),vN(828,`string`),ug()(),Ac(829,`td`,21)(830,`em`)(831,`strong`),vN(832,`(opcional)`),ug()(),Ac(833,`p`),vN(834,`Define a cor do item.`),ug(),Ac(835,`p`),vN(836,`Valores válidos:`),ug(),Ac(837,`ul`)(838,`li`)(839,`code`),vN(840,`default`),ug()(),Ac(841,`li`)(842,`code`),vN(843,`danger`),ug()()()()(),Ac(844,`tr`,14)(845,`td`,15)(846,`div`,16)(847,`span`,17),vN(848,` url`),Kc(849,`br`),ug()()(),Ac(850,`td`,18)(851,`code`,24),vN(852,`string`),ug()(),Ac(853,`td`,21)(854,`em`)(855,`strong`),vN(856,`(opcional)`),ug()(),Ac(857,`p`),vN(858,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(859,`p`),vN(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(861,`code`),vN(862,`url`),ug(),vN(863,` é informada em um agrupador, o clique `),Ac(864,`strong`),vN(865,`não abrirá os subitens`),ug(),vN(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(867,`blockquote`)(868,`p`),vN(869,`Quando informada, tem prioridade sobre a propriedade `),Ac(870,`code`),vN(871,`action`),ug(),vN(872,`.`),ug()()()(),Ac(873,`tr`,14)(874,`td`,15)(875,`div`,16)(876,`span`,17),vN(877,` visible`),Kc(878,`br`),ug()()(),Ac(879,`td`,18)(880,`code`,23),vN(881,`boolean `),ug(),Ac(882,`code`,30),vN(883,` Function`),ug()(),Ac(884,`td`,21)(885,`em`)(886,`strong`),vN(887,`(opcional)`),ug()(),Ac(888,`p`),vN(889,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Ge=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-popup-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-popup-basic-view`)(6,`sample-po-popup-labs-view`)(7,`sample-po-popup-email-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,ve,Pe,we,_e],encapsulation:2,changeDetection:1})}return l})()}];var Me=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[kL.forChild(Ge),kL]})}return l})();var qt=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[Ta,Me]})}return l})();export{qt as DocPoPopupModule};